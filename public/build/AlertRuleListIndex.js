"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertRuleListIndex"],{

/***/ "./public/app/core/hooks/useCleanup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCleanup": () => (/* binding */ useCleanup)
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
      dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__.cleanUpAction)({
        stateSelector: selectorRef.current
      }));
    };
  }, [dispatch]);
}

/***/ }),

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

/***/ }),

/***/ "./public/app/features/alerting/unified/RuleList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx");
/* harmony import */ var _components_rules_RuleListErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListErrors.tsx");
/* harmony import */ var _components_rules_RuleListGroupView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListGroupView.tsx");
/* harmony import */ var _components_rules_RuleListStateView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListStateView.tsx");
/* harmony import */ var _components_rules_RuleStats__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleStats.tsx");
/* harmony import */ var _components_rules_RulesFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesFilter.tsx");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredRules.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _RuleListErrors, _RulesFilter, _NoRulesSplash;


























const VIEWS = {
  groups: _components_rules_RuleListGroupView__WEBPACK_IMPORTED_MODULE_9__.RuleListGroupView,
  state: _components_rules_RuleListStateView__WEBPACK_IMPORTED_MODULE_10__.RuleListStateView
};
const RuleList = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.withErrorBoundary)(() => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const rulesDataSourceNames = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(_utils_datasource__WEBPACK_IMPORTED_MODULE_19__.getAllRulesSourceNames, []);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useLocation)();
  const [expandAll, setExpandAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_5__.useQueryParams)();
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_20__.getFiltersFromUrlParams)(queryParams);
  const filtersActive = Object.values(filters).some(filter => filter !== undefined);
  const {
    canCreateGrafanaRules,
    canCreateCloudRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_17__.useRulesAccess)();
  const view = VIEWS[queryParams['view']] ? queryParams['view'] : 'groups';
  const ViewComponent = VIEWS[view]; // fetch rules, then poll every RULE_LIST_POLL_INTERVAL_MS

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_16__.fetchAllPromAndRulerRulesAction)());
    const interval = setInterval(() => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_16__.fetchAllPromAndRulerRulesAction)()), _utils_constants__WEBPACK_IMPORTED_MODULE_18__.RULE_LIST_POLL_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  const promRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_15__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_15__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const dispatched = rulesDataSourceNames.some(name => {
    var _promRuleRequests$nam, _rulerRuleRequests$na;

    return ((_promRuleRequests$nam = promRuleRequests[name]) === null || _promRuleRequests$nam === void 0 ? void 0 : _promRuleRequests$nam.dispatched) || ((_rulerRuleRequests$na = rulerRuleRequests[name]) === null || _rulerRuleRequests$na === void 0 ? void 0 : _rulerRuleRequests$na.dispatched);
  });
  const loading = rulesDataSourceNames.some(name => {
    var _promRuleRequests$nam2, _rulerRuleRequests$na2;

    return ((_promRuleRequests$nam2 = promRuleRequests[name]) === null || _promRuleRequests$nam2 === void 0 ? void 0 : _promRuleRequests$nam2.loading) || ((_rulerRuleRequests$na2 = rulerRuleRequests[name]) === null || _rulerRuleRequests$na2 === void 0 ? void 0 : _rulerRuleRequests$na2.loading);
  });
  const haveResults = rulesDataSourceNames.some(name => {
    var _promRuleRequests$nam3, _promRuleRequests$nam4, _promRuleRequests$nam5, _rulerRuleRequests$na3, _rulerRuleRequests$na4;

    return ((_promRuleRequests$nam3 = promRuleRequests[name]) === null || _promRuleRequests$nam3 === void 0 ? void 0 : (_promRuleRequests$nam4 = _promRuleRequests$nam3.result) === null || _promRuleRequests$nam4 === void 0 ? void 0 : _promRuleRequests$nam4.length) && !((_promRuleRequests$nam5 = promRuleRequests[name]) !== null && _promRuleRequests$nam5 !== void 0 && _promRuleRequests$nam5.error) || Object.keys(((_rulerRuleRequests$na3 = rulerRuleRequests[name]) === null || _rulerRuleRequests$na3 === void 0 ? void 0 : _rulerRuleRequests$na3.result) || {}).length && !((_rulerRuleRequests$na4 = rulerRuleRequests[name]) !== null && _rulerRuleRequests$na4 !== void 0 && _rulerRuleRequests$na4.error);
  });
  const showNewAlertSplash = dispatched && !loading && !haveResults;
  const combinedNamespaces = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_13__.useCombinedRuleNamespaces)();
  const filteredNamespaces = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_14__.useFilteredRules)(combinedNamespaces);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__.AlertingPageWrapper, {
    pageId: "alert-list",
    isLoading: loading && !haveResults,
    children: [_RuleListErrors || (_RuleListErrors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_RuleListErrors__WEBPACK_IMPORTED_MODULE_8__.RuleListErrors, {})), !showNewAlertSplash && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: [_RulesFilter || (_RulesFilter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_RulesFilter__WEBPACK_IMPORTED_MODULE_12__["default"], {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: styles.buttonsContainer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: styles.statsContainer,
          children: [view === 'groups' && filtersActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: styles.expandAllButton,
            icon: expandAll ? 'angle-double-up' : 'angle-double-down',
            variant: "secondary",
            onClick: () => setExpandAll(!expandAll),
            children: expandAll ? 'Collapse all' : 'Expand all'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_RuleStats__WEBPACK_IMPORTED_MODULE_11__.RuleStats, {
            showInactive: true,
            showRecording: true,
            namespaces: filteredNamespaces
          })]
        }), (canCreateGrafanaRules || canCreateCloudRules) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
          href: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl('alerting/new', {
            returnTo: location.pathname + location.search
          }),
          icon: "plus",
          children: "New alert rule"
        })]
      })]
    }), showNewAlertSplash && (_NoRulesSplash || (_NoRulesSplash = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_components_rules_NoRulesCTA__WEBPACK_IMPORTED_MODULE_7__.NoRulesSplash, {}))), haveResults && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(ViewComponent, {
      expandAll: expandAll,
      namespaces: filteredNamespaces
    })]
  });
}, {
  style: 'page'
});

const getStyles = theme => ({
  break: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    height: 0;
    margin-bottom: ${theme.spacing(2)};
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  buttonsContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
    display: flex;
    justify-content: space-between;
  `,
  statsContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  expandAllButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(1)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RuleList);

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

/***/ "./public/app/features/alerting/unified/components/Authorize.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authorize": () => (/* binding */ Authorize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Authorize = ({
  actions,
  children,
  fallback = true
}) => {
  if (actions.some(action => app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__.contextSrv.hasAccess(action, fallback))) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  } else {
    return null;
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTableWithGuidelines": () => (/* binding */ DynamicTableWithGuidelines),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["renderExpandedContent"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// DynamicTable, but renders visual guidelines on the left, for larger screen widths
const DynamicTableWithGuidelines = _ref => {
  let {
    renderExpandedContent
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_3__.DynamicTable, Object.assign({
    renderExpandedContent: renderExpandedContent ? (item, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [!(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.contentGuideline, styles.guideline)
      }), renderExpandedContent(item, index, items)]
    }) : undefined,
    renderPrefixHeader: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.relative,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.headerGuideline, styles.guideline)
      })
    }),
    renderPrefixCell: (_, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.relative,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.topGuideline, styles.guideline)
      }), !(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bottomGuideline, styles.guideline)
      })]
    })
  }, props));
};
const getStyles = theme => ({
  relative: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: relative;
    height: 100%;
  `,
  guideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    left: -19px;
    border-left: 1px solid ${theme.colors.border.medium};
    position: absolute;

    ${theme.breakpoints.down('md')} {
      display: none;
    }
  `,
  topGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 18px;
    border-bottom: 1px solid ${theme.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,
  bottomGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 50%;
    bottom: 0;
  `,
  contentGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,
  headerGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: -25px;
    bottom: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Expression.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Expression": () => (/* binding */ Expression),
/* harmony export */   "HighlightedQuery": () => (/* binding */ HighlightedQuery),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_slate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-slate-react-virtual-047372596b/0/cache/@grafana-slate-react-npm-0.22.10-grafana-510bc0576d-3417c53d9d.zip/node_modules/@grafana/slate-react/lib/slate-react.es.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
/* harmony import */ var app_plugins_datasource_prometheus_promql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _Well__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/Well.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const HighlightedQuery = ({
  language,
  expr
}) => {
  const plugins = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SlatePrism)({
    onlyIn: node => node.type === 'code_block',
    getSyntax: () => language
  }, Object.assign({}, prismjs__WEBPACK_IMPORTED_MODULE_1__.languages, {
    [language]: language === 'logql' ? app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_5__["default"] : app_plugins_datasource_prometheus_promql__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))], [language]);
  const slateValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.makeValue)(expr), [expr]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_slate_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {
    plugins: plugins,
    value: slateValue,
    readOnly: true
  });
};
const Expression = ({
  expression: query,
  rulesSource
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Well__WEBPACK_IMPORTED_MODULE_8__.Well, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.well, 'slate-query-field'),
    children: (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.isCloudRulesSource)(rulesSource) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HighlightedQuery, {
      expr: query,
      language: rulesSource.type === _utils_datasource__WEBPACK_IMPORTED_MODULE_7__.DataSourceType.Loki ? 'logql' : 'promql'
    }) : query
  });
};
const getStyles = theme => ({
  well: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.typography.fontFamily.monospace};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/RuleLocation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleLocation": () => (/* binding */ RuleLocation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;







const RuleLocation = ({
  namespace,
  group
}) => {
  if (!group) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: namespace
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [namespace, " ", _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "angle-right"
    })), " ", group]
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/StateColoredText.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateColoredText": () => (/* binding */ StateColoredText)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const StateColoredText = ({
  children,
  status
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
    className: styles[status],
    children: children || status
  });
};

const getStyles = theme => ({
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.PromAlertingRuleState.Inactive]: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.success.text};
  `,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.PromAlertingRuleState.Pending]: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.warning.text};
  `,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.PromAlertingRuleState.Firing]: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.error.text};
  `,
  neutral: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatcherFilter": () => (/* binding */ MatcherFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span, _div;







const MatcherFilter = ({
  className,
  onFilterChange,
  defaultQueryString,
  queryString
}) => {
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

/***/ "./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionIcon": () => (/* binding */ ActionIcon)
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

/***/ "./public/app/features/alerting/unified/components/rules/AlertInstanceStateFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertInstanceStateFilter": () => (/* binding */ AlertInstanceStateFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label;






const AlertInstanceStateFilter = ({
  className,
  onStateFilterChange,
  stateFilter
}) => {
  const stateOptions = Object.values(app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertState).map(value => ({
    label: value,
    value
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: className,
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
      children: "State"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
      options: stateOptions,
      value: stateFilter,
      onChange: onStateFilterChange,
      onClick: v => {
        if (v === stateFilter) {
          onStateFilterChange(undefined);
        }
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/CloudRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudRules": () => (/* binding */ CloudRules)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _RulesGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesGroup.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _div, _p, _p2;










const CloudRules = ({
  namespaces,
  expandAll
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const rules = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulesDataSources = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.getRulesDataSources, []);
  const dataSourcesLoading = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => rulesDataSources.filter(ds => {
    var _rules$ds$name;

    return (_rules$ds$name = rules[ds.name]) === null || _rules$ds$name === void 0 ? void 0 : _rules$ds$name.loading;
  }), [rules, rulesDataSources]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.sectionHeader,
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
        children: "Mimir / Cortex / Loki"
      })), dataSourcesLoading.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
        className: styles.loader,
        text: `Loading rules from ${dataSourcesLoading.length} ${pluralize__WEBPACK_IMPORTED_MODULE_1___default()('source', dataSourcesLoading.length)}`
      }) : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {}))]
    }), namespaces.map(namespace => {
      const {
        groups,
        rulesSource
      } = namespace;
      return groups.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_RulesGroup__WEBPACK_IMPORTED_MODULE_6__.RulesGroup, {
        group: group,
        namespace: namespace,
        expandAll: expandAll
      }, `${(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.getRulesSourceName)(rulesSource)}-${name}-${group.name}`));
    }), (namespaces === null || namespaces === void 0 ? void 0 : namespaces.length) === 0 && !!rulesDataSources.length && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      children: "No rules found."
    }))), !rulesDataSources.length && (_p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
      children: "There are no Prometheus or Loki datas sources configured."
    })))]
  });
};

const getStyles = theme => ({
  loader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  sectionHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing.xl};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/EditCloudGroupModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditCloudGroupModal": () => (/* binding */ EditCloudGroupModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













function EditCloudGroupModal(props) {
  var _useUnifiedAlertingSe, _Button;

  const {
    namespace,
    group,
    onClose
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    loading,
    error,
    dispatched
  } = (_useUnifiedAlertingSe = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__.useUnifiedAlertingSelector)(state => state.updateLotexNamespaceAndGroup)) !== null && _useUnifiedAlertingSe !== void 0 ? _useUnifiedAlertingSe : _utils_redux__WEBPACK_IMPORTED_MODULE_8__.initialAsyncRequestState;
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _group$interval;

    return {
      namespaceName: namespace.name,
      groupName: group.name,
      groupInterval: (_group$interval = group.interval) !== null && _group$interval !== void 0 ? _group$interval : ''
    };
  }, [namespace, group]); // close modal if successfully saved

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (dispatched && !loading && !error) {
      onClose();
    }
  }, [dispatched, loading, onClose, error]);
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__.useCleanup)(state => state.unifiedAlerting.updateLotexNamespaceAndGroup);

  const onSubmit = values => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.updateLotexNamespaceAndGroupAction)({
      rulesSourceName: (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.getRulesSourceName)(namespace.rulesSource),
      groupName: group.name,
      newGroupName: values.groupName,
      namespaceName: namespace.name,
      newNamespaceName: values.namespaceName,
      groupInterval: values.groupInterval || undefined
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    className: styles.modal,
    isOpen: true,
    title: "Edit namespace or rule group",
    onDismiss: onClose,
    onClickBackdrop: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
      defaultValues: defaultValues,
      onSubmit: onSubmit,
      children: ({
        register,
        errors,
        formState: {
          isDirty
        }
      }) => {
        var _errors$namespaceName, _errors$groupName, _errors$groupInterval;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Namespace",
            invalid: !!errors.namespaceName,
            error: (_errors$namespaceName = errors.namespaceName) === null || _errors$namespaceName === void 0 ? void 0 : _errors$namespaceName.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              id: "namespaceName"
            }, register('namespaceName', {
              required: 'Namespace name is required.'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Rule group",
            invalid: !!errors.groupName,
            error: (_errors$groupName = errors.groupName) === null || _errors$groupName === void 0 ? void 0 : _errors$groupName.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              id: "groupName"
            }, register('groupName', {
              required: 'Rule group name is required.'
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Rule group evaluation interval",
            invalid: !!errors.groupInterval,
            error: (_errors$groupInterval = errors.groupInterval) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              id: "groupInterval",
              placeholder: "1m"
            }, register('groupInterval', {
              pattern: _utils_time__WEBPACK_IMPORTED_MODULE_9__.durationValidationPattern
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
            children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              variant: "secondary",
              type: "button",
              disabled: loading,
              onClick: onClose,
              fill: "outline",
              children: "Close"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              disabled: !isDirty || loading,
              children: loading ? 'Saving...' : 'Save changes'
            })]
          })]
        });
      }
    }, JSON.stringify(defaultValues))
  });
}

const getStyles = () => ({
  modal: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 560px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/GrafanaRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaRules": () => (/* binding */ GrafanaRules)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _RulesGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesGroup.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _div, _p;












const GrafanaRules = ({
  namespaces,
  expandAll
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__.useQueryParams)();
  const {
    loading
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__.useUnifiedAlertingSelector)(state => state.promRules[_utils_datasource__WEBPACK_IMPORTED_MODULE_6__.GRAFANA_RULES_SOURCE_NAME] || _utils_redux__WEBPACK_IMPORTED_MODULE_7__.initialAsyncRequestState);
  const wantsGroupedView = queryParams['view'] === 'grouped';
  const namespacesFormat = wantsGroupedView ? namespaces : (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_4__.flattenGrafanaManagedRules)(namespaces);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("section", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: styles.sectionHeader,
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h5", {
        children: "Grafana"
      })), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        className: styles.loader,
        text: "Loading..."
      }) : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {}))]
    }), namespacesFormat === null || namespacesFormat === void 0 ? void 0 : namespacesFormat.map(namespace => namespace.groups.map(group => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RulesGroup__WEBPACK_IMPORTED_MODULE_8__.RulesGroup, {
      group: group,
      namespace: namespace,
      expandAll: expandAll
    }, `${namespace.name}-${group.name}`))), (namespacesFormat === null || namespacesFormat === void 0 ? void 0 : namespacesFormat.length) === 0 && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
      children: "No rules found."
    })))]
  });
};

const getStyles = theme => ({
  loader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  sectionHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing.xl};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoRulesSplash": () => (/* binding */ NoRulesSplash)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _EmptyListCTA, _CallToActionCard;






const NoRulesSplash = () => {
  const {
    canCreateGrafanaRules,
    canCreateCloudRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_3__.useRulesAccess)();

  if (canCreateGrafanaRules || canCreateCloudRules) {
    return _EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "You haven`t created any alert rules yet",
      buttonIcon: "bell",
      buttonLink: 'alerting/new',
      buttonTitle: "New alert rule",
      proTip: "you can also create alert rules from existing panels and queries.",
      proTipLink: "https://grafana.com/docs/",
      proTipLinkTitle: "Learn more",
      proTipTarget: "_blank"
    }));
  }

  return _CallToActionCard || (_CallToActionCard = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CallToActionCard, {
    message: "No rules exist yet.",
    callToActionElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {})
  }));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetails": () => (/* binding */ RuleDetails),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
/* harmony import */ var _RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
/* harmony import */ var _RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
/* harmony import */ var _RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
/* harmony import */ var _RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const RuleDetails = ({
  rule
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    promRule,
    namespace: {
      rulesSource
    }
  } = rule;
  const annotations = Object.entries(rule.annotations).filter(([_, value]) => !!value.trim());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_5__.RuleDetailsActionButtons, {
      rule: rule,
      rulesSource: rulesSource
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.leftSide,
        children: [!!rule.labels && !!Object.keys(rule.labels).length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_4__.DetailsField, {
          label: "Labels",
          horizontal: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, {
            labels: rule.labels
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_8__.RuleDetailsExpression, {
          rulesSource: rulesSource,
          rule: rule,
          annotations: annotations
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_6__.RuleDetailsAnnotations, {
          annotations: annotations
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: styles.rightSide,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_7__.RuleDetailsDataSources, {
          rulesSource: rulesSource,
          rule: rule
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_9__.RuleDetailsMatchingInstances, {
      promRule: promRule
    })]
  });
};
const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
    }
  `,
  leftSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
  `,
  rightSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.breakpoints.up('md')} {
      padding-left: 90px;
      width: 300px;
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsActionButtons": () => (/* binding */ RuleDetailsActionButtons),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
/* harmony import */ var _hooks_useStateHistoryModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useStateHistoryModal.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2;























const RuleDetailsActionButtons = ({
  rule,
  rulesSource
}) => {
  var _rule$rulerRule$grafa, _getAlertmanagerByUid;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation)();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__.useAppNotification)();
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const {
    namespace,
    group,
    rulerRule
  } = rule;
  const [ruleToDelete, setRuleToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const alertId = isGrafanaRulerRule(rule.rulerRule) ? (_rule$rulerRule$grafa = rule.rulerRule.grafana_alert.id) !== null && _rule$rulerRule$grafa !== void 0 ? _rule$rulerRule$grafa : '' : '';
  const {
    StateHistoryModal,
    showStateHistoryModal
  } = (0,_hooks_useStateHistoryModal__WEBPACK_IMPORTED_MODULE_10__.useStateHistoryModal)(alertId);
  const alertmanagerSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isGrafanaRulesSource)(rulesSource) ? rulesSource : (_getAlertmanagerByUid = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.getAlertmanagerByUid)(rulesSource.jsonData.alertmanagerUid)) === null || _getAlertmanagerByUid === void 0 ? void 0 : _getAlertmanagerByUid.name;
  const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(rulesSource);
  const hasExplorePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.DataSourcesExplore);
  const leftButtons = [];
  const rightButtons = [];
  const isFederated = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isFederatedRuleGroup)(group);
  const {
    isEditable,
    isRemovable
  } = (0,_hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__.useIsRuleEditable)(rulesSourceName, rulerRule);
  const returnTo = location.pathname + location.search;
  const isViewMode = inViewMode(location.pathname);

  const deleteRule = () => {
    if (ruleToDelete && ruleToDelete.rulerRule) {
      const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.fromRulerRule((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(ruleToDelete.namespace.rulesSource), ruleToDelete.namespace.name, ruleToDelete.group.name, ruleToDelete.rulerRule);
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.deleteRuleAction)(identifier, {
        navigateTo: isViewMode ? '/alerting/list' : undefined
      }));
      setRuleToDelete(undefined);
    }
  };

  const buildShareUrl = () => {
    if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isCloudRulesSource)(rulesSource)) {
      const {
        appUrl,
        appSubUrl
      } = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config;
      const baseUrl = appSubUrl !== '' ? `${appUrl}${appSubUrl}/` : _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appUrl;
      const ruleUrl = `${encodeURIComponent(rulesSource.name)}/${encodeURIComponent(rule.name)}`;
      return `${baseUrl}alerting/${ruleUrl}/find`;
    }

    return window.location.href.split('?')[0];
  }; // explore does not support grafana rule queries atm
  // neither do "federated rules"


  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isCloudRulesSource)(rulesSource) && hasExplorePermission && !isFederated) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "chart-line",
      target: "__blank",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.createExploreLink)(rulesSource.name, rule.query),
      children: "See graph"
    }, "explore"));
  }

  if (rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.runbookURL]) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "book",
      target: "__blank",
      href: rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.runbookURL],
      children: "View runbook"
    }, "runbook"));
  }

  if (rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.dashboardUID]) {
    const dashboardUID = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.dashboardUID];

    if (dashboardUID) {
      leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
        className: style.button,
        size: "xs",
        variant: "primary",
        icon: "apps",
        target: "__blank",
        href: `d/${encodeURIComponent(dashboardUID)}`,
        children: "Go to dashboard"
      }, "dashboard"));
      const panelId = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.panelID];

      if (panelId) {
        leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
          className: style.button,
          size: "xs",
          variant: "primary",
          icon: "apps",
          target: "__blank",
          href: `d/${encodeURIComponent(dashboardUID)}?viewPanel=${encodeURIComponent(panelId)}`,
          children: "Go to panel"
        }, "panel"));
      }
    }
  }

  if (alertmanagerSourceName && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.AlertingInstanceCreate, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.isEditor)) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      icon: "bell-slash",
      target: "__blank",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeRuleBasedSilenceLink)(alertmanagerSourceName, rule),
      children: "Silence"
    }, "silence"));
  }

  if (alertId) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: style.button,
        size: "xs",
        icon: "history",
        onClick: () => showStateHistoryModal(),
        children: "Show state history"
      }), StateHistoryModal]
    }, "history"));
  }

  if (!isViewMode) {
    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "eye",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.createViewLink)(rulesSource, rule, returnTo),
      children: "View"
    }, "view"));
  }

  if (isEditable && rulerRule && !isFederated) {
    const sourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(rulesSource);
    const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.fromRulerRule(sourceName, namespace.name, group.name, rulerRule);
    const editURL = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl(`${_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl}/alerting/${encodeURIComponent(_utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.stringifyIdentifier(identifier))}/edit`, {
      returnTo
    });

    if (isViewMode) {
      rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ClipboardButton, {
        onClipboardCopy: () => {
          notifyApp.success('URL copied!');
        },
        onClipboardError: e => {
          notifyApp.error('Error while copying URL', e.text);
        },
        className: style.button,
        size: "sm",
        getText: buildShareUrl,
        children: "Copy link to rule"
      }, "copy"));
    }

    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "pen",
      href: editURL,
      children: "Edit"
    }, "edit"));
  }

  if (isRemovable && rulerRule && !isFederated) {
    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
      className: style.button,
      size: "xs",
      type: "button",
      variant: "secondary",
      icon: "trash-alt",
      onClick: () => setRuleToDelete(rule),
      children: "Delete"
    }, "delete"));
  }

  if (leftButtons.length || rightButtons.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: style.wrapper,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
          width: "auto",
          children: leftButtons.length ? leftButtons : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {}))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
          width: "auto",
          children: rightButtons.length ? rightButtons : _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {}))
        })]
      }), !!ruleToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal, {
        isOpen: true,
        title: "Delete rule",
        body: "Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",
        confirmText: "Yes, delete",
        icon: "exclamation-triangle",
        onConfirm: deleteRule,
        onDismiss: () => setRuleToDelete(undefined)
      })]
    });
  }

  return null;
};

function inViewMode(pathname) {
  return pathname.endsWith('/view');
}

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    height: 24px;
    margin-top: ${theme.spacing(1)};
    font-size: ${theme.typography.size.sm};
  `
});

function isGrafanaRulerRule(rule) {
  if (!rule) {
    return false;
  }

  return rule.grafana_alert != null;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsAnnotations": () => (/* binding */ RuleDetailsAnnotations)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function RuleDetailsAnnotations(props) {
  const {
    annotations
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (annotations.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: styles.annotations,
    children: annotations.map(([key, value]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__.AnnotationDetailsField, {
      annotationKey: key,
      value: value
    }, key))
  });
}

const getStyles = () => ({
  annotations: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: 46px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsDataSources": () => (/* binding */ RuleDetailsDataSources)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function RuleDetailsDataSources(props) {
  const {
    rulesSource,
    rule
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dataSources = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isCloudRulesSource)(rulesSource)) {
      return [{
        name: rulesSource.name,
        icon: rulesSource.meta.info.logos.small
      }];
    }

    if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.isGrafanaRulerRule)(rule.rulerRule)) {
      const {
        data
      } = rule.rulerRule.grafana_alert;
      const unique = data.reduce((dataSources, query) => {
        const ds = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);

        if (!ds || ds.uid === app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__.ExpressionDatasourceUID) {
          return dataSources;
        }

        dataSources[ds.name] = {
          name: ds.name,
          icon: ds.meta.info.logos.small
        };
        return dataSources;
      }, {});
      return Object.values(unique);
    }

    return [];
  }, [rule, rulesSource]);

  if (dataSources.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_7__.DetailsField, {
    label: "Data source",
    children: dataSources.map(({
      name,
      icon
    }, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          alt: `${name} datasource logo`,
          className: styles.dataSourceIcon,
          src: icon
        }), ' ']
      }), name]
    }, name))
  });
}

function getStyles(theme) {
  const size = theme.spacing(2);
  return {
    dataSourceIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: ${size};
      height: ${size};
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsExpression": () => (/* binding */ RuleDetailsExpression)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/Expression.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function RuleDetailsExpression(props) {
  const {
    annotations,
    rulesSource,
    rule
  } = props;
  const styles = getStyles();

  if (!(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isCloudRulesSource)(rulesSource)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_3__.DetailsField, {
    label: "Expression",
    horizontal: true,
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
      [styles.exprRow]: !!annotations.length
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Expression__WEBPACK_IMPORTED_MODULE_4__.Expression, {
      expression: rule.query,
      rulesSource: rulesSource
    })
  });
}

const getStyles = () => ({
  exprRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 46px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsMatchingInstances": () => (/* binding */ RuleDetailsMatchingInstances)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_alerting_unified_components_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var app_features_alerting_unified_components_rules_AlertInstanceStateFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstanceStateFilter.tsx");
/* harmony import */ var app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_plugins_panel_alertlist_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/alertlist/types.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _AlertInstancesTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstancesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













function RuleDetailsMatchingInstances(props) {
  const {
    promRule
  } = props;
  const [queryString, setQueryString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [alertState, setAlertState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // This key is used to force a rerender on the inputs when the filters are cleared

  const [filterKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * 100));
  const queryStringKey = `queryString-${filterKey}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  const alerts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _promRule$alerts;

    return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_8__.isAlertingRule)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length ? filterAlerts(queryString, alertState, (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_6__.sortAlerts)(app_plugins_panel_alertlist_types__WEBPACK_IMPORTED_MODULE_7__.SortOrder.Importance, promRule.alerts)) : [];
  }, [promRule, alertState, queryString]);

  if (!(0,_utils_rules__WEBPACK_IMPORTED_MODULE_8__.isAlertingRule)(promRule)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_DetailsField__WEBPACK_IMPORTED_MODULE_9__.DetailsField, {
    label: "Matching instances",
    horizontal: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.spaceBetween),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_alerting_unified_components_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_3__.MatcherFilter, {
          className: styles.rowChild,
          defaultQueryString: queryString,
          onFilterChange: value => setQueryString(value)
        }, queryStringKey), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_alerting_unified_components_rules_AlertInstanceStateFilter__WEBPACK_IMPORTED_MODULE_4__.AlertInstanceStateFilter, {
          className: styles.rowChild,
          stateFilter: alertState,
          onStateFilterChange: setAlertState
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_AlertInstancesTable__WEBPACK_IMPORTED_MODULE_10__.AlertInstancesTable, {
      instances: alerts
    })]
  });
}

function filterAlerts(alertInstanceLabel, alertInstanceState, alerts) {
  let filteredAlerts = [...alerts];

  if (alertInstanceLabel) {
    const matchers = (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.parseMatchers)(alertInstanceLabel || '');
    filteredAlerts = filteredAlerts.filter(({
      labels
    }) => (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.labelsMatchMatchers)(labels, matchers));
  }

  if (alertInstanceState) {
    filteredAlerts = filteredAlerts.filter(alert => {
      return alert.state === alertInstanceState;
    });
  }

  return filteredAlerts;
}

const getStyles = theme => {
  return {
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: ${theme.spacing.sm};
    `,
    spaceBetween: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      justify-content: space-between;
    `,
    rowChild: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing.sm};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleHealth.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleHealth": () => (/* binding */ RuleHealth)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span;







const RuleHealth = ({
  rule
}) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyle);

  if (rule.health === 'err' || rule.health === 'error') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      theme: "error",
      content: rule.lastError || 'No error message provided.',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: style.warn,
        children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "exclamation-triangle"
        })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: "error"
        }))]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: rule.health
  });
};

const getStyle = theme => ({
  warn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: inline-flex;
    flex-direction: row;
    color: ${theme.colors.warning.text};
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListErrors.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListErrors": () => (/* binding */ RuleListErrors)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function RuleListErrors() {
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [closed, setClosed] = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])('grafana.unifiedalerting.hideErrors', false);
  const dataSourceConfigRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.dataSources);
  const promRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRuleRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const errors = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var _promRuleRequests$GRA, _rulerRuleRequests$GR;

    const [dataSourceConfigErrors, promRequestErrors, rulerRequestErrors] = [dataSourceConfigRequests, promRuleRequests, rulerRuleRequests].map(requests => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.getRulesDataSources)().reduce((result, dataSource) => {
      var _requests$dataSource$;

      const error = (_requests$dataSource$ = requests[dataSource.name]) === null || _requests$dataSource$ === void 0 ? void 0 : _requests$dataSource$.error;

      if (requests[dataSource.name] && error && !(0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.isRulerNotSupportedResponse)(requests[dataSource.name])) {
        return [...result, {
          dataSource,
          error
        }];
      }

      return result;
    }, []));
    const grafanaPromError = (_promRuleRequests$GRA = promRuleRequests[_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME]) === null || _promRuleRequests$GRA === void 0 ? void 0 : _promRuleRequests$GRA.error;
    const grafanaRulerError = (_rulerRuleRequests$GR = rulerRuleRequests[_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME]) === null || _rulerRuleRequests$GR === void 0 ? void 0 : _rulerRuleRequests$GR.error;
    const result = [];

    if (grafanaPromError) {
      result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Failed to load Grafana rules state: ", grafanaPromError.message || 'Unknown error.']
      }));
    }

    if (grafanaRulerError) {
      result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Failed to load Grafana rules config: ", grafanaRulerError.message || 'Unknown error.']
      }));
    }

    dataSourceConfigErrors.forEach(({
      dataSource,
      error
    }) => {
      result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: ["Failed to load the data source configuration for", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
          href: `datasources/edit/${dataSource.uid}`,
          children: dataSource.name
        }), ": ", error.message || 'Unknown error.']
      }));
    });
    promRequestErrors.forEach(({
      dataSource,
      error
    }) => result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: ["Failed to load rules state from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        href: `datasources/edit/${dataSource.uid}`,
        children: dataSource.name
      }), ":", ' ', error.message || 'Unknown error.']
    })));
    rulerRequestErrors.forEach(({
      dataSource,
      error
    }) => result.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: ["Failed to load rules config from ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        href: `datasources/edit/${dataSource.uid}`,
        children: dataSource.name
      }), ":", ' ', error.message || 'Unknown error.']
    })));
    return result;
  }, [dataSourceConfigRequests, promRuleRequests, rulerRuleRequests]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [!!errors.length && closed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ErrorSummaryButton, {
      count: errors.length,
      onClick: () => setClosed(closed => !closed)
    }), !!errors.length && !closed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      "data-testid": "cloud-rulessource-errors",
      title: "Errors loading rules",
      severity: "error",
      onRemove: () => setClosed(true),
      children: [expanded && errors.map((item, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: item
      }, idx)), !expanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: errors[0]
        }), errors.length >= 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: styles.moreButton,
          fill: "text",
          icon: "angle-right",
          size: "sm",
          onClick: () => setExpanded(true),
          children: [errors.length - 1, " more ", pluralize__WEBPACK_IMPORTED_MODULE_1___default()('error', errors.length - 1)]
        })]
      })]
    })]
  });
}

const ErrorSummaryButton = ({
  count,
  onClick
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: styles.floatRight,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      content: "Show all errors",
      placement: "bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        fill: "text",
        variant: "destructive",
        icon: "exclamation-triangle",
        onClick: onClick,
        children: count > 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [count, " errors"]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: "1 error"
        })
      })
    })
  });
};

const getStyles = theme => ({
  moreButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: 0;
  `,
  floatRight: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListGroupView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListGroupView": () => (/* binding */ RuleListGroupView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _CloudRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/CloudRules.tsx");
/* harmony import */ var _GrafanaRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/GrafanaRules.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const RuleListGroupView = ({
  namespaces,
  expandAll
}) => {
  const [grafanaNamespaces, cloudNamespaces] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const sorted = namespaces.map(namespace => Object.assign({}, namespace, {
      groups: namespace.groups.sort((a, b) => a.name.localeCompare(b.name))
    })).sort((a, b) => a.name.localeCompare(b.name));
    return [sorted.filter(ns => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulesSource)(ns.rulesSource)), sorted.filter(ns => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isCloudRulesSource)(ns.rulesSource))];
  }, [namespaces]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_3__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.AlertingRuleRead],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GrafanaRules__WEBPACK_IMPORTED_MODULE_5__.GrafanaRules, {
        namespaces: grafanaNamespaces,
        expandAll: expandAll
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_3__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_1__.AccessControlAction.AlertingRuleExternalRead],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CloudRules__WEBPACK_IMPORTED_MODULE_4__.CloudRules, {
        namespaces: cloudNamespaces,
        expandAll: expandAll
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListStateSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListStateSection": () => (/* binding */ RuleListStateSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _RulesTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const RuleListStateSection = ({
  rules,
  state,
  defaultCollapsed = false
}) => {
  const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultCollapsed);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_4__.CollapseToggle, {
        className: styles.collapseToggle,
        size: "xxl",
        isCollapsed: collapsed,
        onToggle: () => setCollapsed(!collapsed)
      }), (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.alertStateToReadable)(state), " (", rules.length, ")"]
    }), !collapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RulesTable__WEBPACK_IMPORTED_MODULE_5__.RulesTable, {
      className: styles.rulesTable,
      rules: rules,
      showGroupColumn: true
    })]
  });
};

const getStyles = theme => ({
  collapseToggle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    vertical-align: middle;
  `,
  header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(2)};
  `,
  rulesTable: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(3)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleListStateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleListStateView": () => (/* binding */ RuleListStateView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleListStateSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const RuleListStateView = ({
  namespaces
}) => {
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.getFiltersFromUrlParams)((0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.useQueryParams)()[0]);
  const groupedRules = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const result = {
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing]: [],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive]: [],
      [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending]: []
    };
    namespaces.forEach(namespace => namespace.groups.forEach(group => group.rules.forEach(rule => {
      if (rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_4__.isAlertingRule)(rule.promRule)) {
        result[rule.promRule.state].push(rule);
      }
    })));
    Object.values(result).forEach(rules => rules.sort((a, b) => a.name.localeCompare(b.name)));
    return result;
  }, [namespaces]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [(!filters.alertState || filters.alertState === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__.RuleListStateSection, {
      state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing,
      rules: groupedRules[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing]
    }), (!filters.alertState || filters.alertState === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__.RuleListStateSection, {
      state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending,
      rules: groupedRules[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending]
    }), (!filters.alertState || filters.alertState === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleListStateSection__WEBPACK_IMPORTED_MODULE_5__.RuleListStateSection, {
      defaultCollapsed: filters.alertState !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive,
      state: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive,
      rules: groupedRules[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleState": () => (/* binding */ RuleState)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _HorizontalGroup, _HorizontalGroup2;











const RuleState = ({
  rule,
  isDeleting,
  isCreating
}) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyle);
  const {
    promRule
  } = rule; // return how long the rule has been in it's firing state, if any

  const forTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _promRule$alerts;

    if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isAlertingRule)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length && promRule.state !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState.Inactive) {
      // find earliest alert
      const firstActiveAt = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.getFirstActiveAt)(promRule); // calculate time elapsed from earliest alert

      if (firstActiveAt) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          title: String(firstActiveAt),
          className: style.for,
          children: ["for", ' ', (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.intervalToAbbreviatedDurationString)({
            start: firstActiveAt,
            end: new Date()
          }, false)]
        });
      }
    }

    return null;
  }, [promRule, style]);

  if (isDeleting) {
    return _HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}), "deleting"]
    }));
  } else if (isCreating) {
    return _HorizontalGroup2 || (_HorizontalGroup2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}), "creating"]
    }));
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isAlertingRule)(promRule)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_6__.AlertStateTag, {
        state: promRule.state
      }), forTime]
    });
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isRecordingRule)(promRule)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: "Recording rule"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: "n/a"
  });
};

const getStyle = theme => ({
  for: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.typography.bodySmall.fontSize};
    color: ${theme.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleStats.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleStats": () => (/* binding */ RuleStats)
/* harmony export */ });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _StateColoredText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/StateColoredText.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _span2;









const emptyStats = {
  total: 0,
  recording: 0,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing]: 0,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending]: 0,
  [app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive]: 0,
  error: 0
};
const RuleStats = ({
  showInactive,
  showRecording,
  group,
  namespaces
}) => {
  const calculated = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const stats = Object.assign({}, emptyStats);

    const calcRule = rule => {
      var _rule$promRule, _rule$promRule2;

      if (rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isAlertingRule)(rule.promRule)) {
        stats[rule.promRule.state] += 1;
      }

      if (((_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.health) === 'err' || ((_rule$promRule2 = rule.promRule) === null || _rule$promRule2 === void 0 ? void 0 : _rule$promRule2.health) === 'error') {
        stats.error += 1;
      }

      if (rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isRecordingRule)(rule.promRule) || rule.rulerRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_3__.isRecordingRulerRule)(rule.rulerRule)) {
        stats.recording += 1;
      }

      stats.total += 1;
    };

    if (group) {
      group.rules.forEach(calcRule);
    }

    if (namespaces) {
      namespaces.forEach(namespace => namespace.groups.forEach(group => group.rules.forEach(calcRule)));
    }

    return stats;
  }, [group, namespaces]);
  const statsComponents = [];

  if (calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing]) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing,
      children: [calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing], " firing"]
    }, "firing"));
  }

  if (calculated.error) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Firing,
      children: [calculated.error, " errors"]
    }, "errors"));
  }

  if (calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending]) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending,
      children: [calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Pending], " pending"]
    }, "pending"));
  }

  if (showInactive && calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive]) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: "neutral",
      children: [calculated[app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.PromAlertingRuleState.Inactive], " normal"]
    }, "inactive"));
  }

  if (showRecording && calculated.recording) {
    statsComponents.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_StateColoredText__WEBPACK_IMPORTED_MODULE_4__.StateColoredText, {
      status: "neutral",
      children: [calculated.recording, " recording"]
    }, "recording"));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
      children: [calculated.total, " ", pluralize__WEBPACK_IMPORTED_MODULE_0___default()('rule', calculated.total)]
    }), !!statsComponents.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: ": "
      })), statsComponents.reduce((prev, curr, idx) => prev.length ? [prev, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: _span2 || (_span2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          children: ", "
        }))
      }, idx), curr] : [curr], [])]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Label, _Label2, _Label3, _Label4;













const ViewOptions = [{
  icon: 'list-ul',
  label: 'List',
  value: 'list'
}, {
  icon: 'folder',
  label: 'Grouped',
  value: 'grouped'
}, {
  icon: 'heart-rate',
  label: 'State',
  value: 'state'
}];
const RuleTypeOptions = [{
  label: 'Alert ',
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_7__.PromRuleType.Alerting
}, {
  label: 'Recording ',
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_7__.PromRuleType.Recording
}];

const RulesFilter = () => {
  var _queryParams$view;

  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__.useQueryParams)(); // This key is used to force a rerender on the inputs when the filters are cleared

  const [filterKey, setFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * 100));
  const dataSourceKey = `dataSource-${filterKey}`;
  const queryStringKey = `queryString-${filterKey}`;
  const {
    dataSource,
    alertState,
    queryString,
    ruleType
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.getFiltersFromUrlParams)(queryParams);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles)(getStyles);
  const stateOptions = Object.entries(app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_7__.PromAlertingRuleState).map(([key, value]) => ({
    label: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_9__.alertStateToReadable)(value),
    value
  }));

  const handleDataSourceChange = dataSourceValue => {
    setQueryParams({
      dataSource: dataSourceValue.name
    });
  };

  const clearDataSource = () => {
    setQueryParams({
      dataSource: null
    });
  };

  const handleQueryStringChange = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(e => {
    const target = e.target;
    setQueryParams({
      queryString: target.value || null
    });
  }, 600);

  const handleAlertStateChange = value => {
    setQueryParams({
      alertState: value
    });
  };

  const handleViewChange = view => {
    setQueryParams({
      view
    });
  };

  const handleRuleTypeChange = ruleType => {
    setQueryParams({
      ruleType
    });
  };

  const handleClearFiltersClick = () => {
    setQueryParams({
      alertState: null,
      queryString: null,
      dataSource: null,
      ruleType: null
    });
    setTimeout(() => setFilterKey(filterKey + 1), 100);
  };

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
      className: styles.inputWidth,
      label: "Search by data source",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker, {
        alerting: true,
        noDefault: true,
        placeholder: "All data sources",
        current: dataSource,
        onChange: handleDataSourceChange,
        onClear: clearDataSource
      }, dataSourceKey)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.spaceBetween),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, {
          className: styles.rowChild,
          label: _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.Stack, {
              gap: 0.5,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                children: "Search by label"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
                content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                  children: ["Filter rules and alerts using label querying, ex:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("code", {
                    children: `{severity="critical", instance=~"cluster-us-.+"}`
                  })]
                }),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                  name: "info-circle",
                  size: "sm"
                })
              })]
            })
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input, {
            className: styles.inputWidth,
            prefix: searchIcon,
            onChange: handleQueryStringChange,
            defaultValue: queryString,
            placeholder: "Search",
            "data-testid": "search-query-input"
          }, queryStringKey)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label2 || (_Label2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
            children: "State"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
            options: stateOptions,
            value: alertState,
            onChange: handleAlertStateChange
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label3 || (_Label3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
            children: "Rule type"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
            options: RuleTypeOptions,
            value: ruleType,
            onChange: handleRuleTypeChange
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label4 || (_Label4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Label, {
            children: "View as"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonGroup, {
            options: ViewOptions,
            value: String((_queryParams$view = queryParams['view']) !== null && _queryParams$view !== void 0 ? _queryParams$view : ViewOptions[0].value),
            onChange: handleViewChange
          })]
        })]
      }), (dataSource || alertState || queryString || ruleType) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: styles.flexRow,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          className: styles.clearButton,
          fullWidth: false,
          icon: "times",
          variant: "secondary",
          onClick: handleClearFiltersClick,
          children: "Clear filters"
        })
      })]
    })]
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      padding-bottom: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.sm};
    `,
    inputWidth: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 340px;
      flex-grow: 0;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,
    spaceBetween: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      justify-content: space-between;
    `,
    rowChild: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0 ${theme.spacing.sm} 0 0;
    `,
    clearButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing.sm};
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RulesFilter);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesGroup": () => (/* binding */ RulesGroup),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/utils/kbn.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _hooks_useFolder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _RuleLocation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
/* harmony import */ var _ActionIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _EditCloudGroupModal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/EditCloudGroupModal.tsx");
/* harmony import */ var _RuleStats__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleStats.tsx");
/* harmony import */ var _RulesTable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _HorizontalGroup, _Badge, _br, _br2;























const RulesGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(({
  group,
  namespace,
  expandAll
}) => {
  var _group$rules$;

  const {
    rulesSource
  } = namespace;
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const [isEditingGroup, setIsEditingGroup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isDeletingGroup, setIsDeletingGroup] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!expandAll);
  const canEditCloudRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.AlertingRuleExternalWrite);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setIsCollapsed(!expandAll);
  }, [expandAll]);
  const hasRuler = (0,_hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_9__.useHasRuler)();
  const rulerRule = (_group$rules$ = group.rules[0]) === null || _group$rules$ === void 0 ? void 0 : _group$rules$.rulerRule;
  const folderUID = rulerRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_12__.isGrafanaRulerRule)(rulerRule) && rulerRule.grafana_alert.namespace_uid || undefined;
  const {
    folder
  } = (0,_hooks_useFolder__WEBPACK_IMPORTED_MODULE_8__.useFolder)(folderUID); // group "is deleting" if rules source has ruler, but this group has no rules that are in ruler

  const isDeleting = hasRuler(rulesSource) && !group.rules.find(rule => !!rule.rulerRule);
  const isFederated = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_12__.isFederatedRuleGroup)(group);

  const deleteGroup = () => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_10__.deleteRulesGroupAction)(namespace, group));
    setIsDeletingGroup(false);
  };

  const actionIcons = []; // for grafana, link to folder views

  if (isDeleting) {
    actionIcons.push(_HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}), "deleting"]
    }, "is-deleting")));
  } else if (rulesSource === _utils_datasource__WEBPACK_IMPORTED_MODULE_11__.GRAFANA_RULES_SOURCE_NAME) {
    if (folderUID) {
      const baseUrl = `/dashboards/f/${folderUID}/${app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_6__["default"].slugifyForUrl(namespace.name)}`;

      if (folder !== null && folder !== void 0 && folder.canSave) {
        actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
          "aria-label": "edit folder",
          icon: "pen",
          tooltip: "edit folder",
          to: baseUrl + '/settings',
          target: "__blank"
        }, "edit"));
      }

      if (folder !== null && folder !== void 0 && folder.canAdmin) {
        actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
          "aria-label": "manage permissions",
          icon: "lock",
          tooltip: "manage permissions",
          to: baseUrl + '/permissions',
          target: "__blank"
        }, "manage-perms"));
      }
    }
  } else if (canEditCloudRules && hasRuler(rulesSource)) {
    if (!isFederated) {
      actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
        "aria-label": "edit rule group",
        "data-testid": "edit-group",
        icon: "pen",
        tooltip: "edit rule group",
        onClick: () => setIsEditingGroup(true)
      }, "edit"));
    }

    actionIcons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ActionIcon__WEBPACK_IMPORTED_MODULE_15__.ActionIcon, {
      "aria-label": "delete rule group",
      "data-testid": "delete-group",
      icon: "trash-alt",
      tooltip: "delete rule group",
      onClick: () => setIsDeletingGroup(true)
    }, "delete-group"));
  } // ungrouped rules are rules that are in the "default" group name


  const isUngrouped = group.name === 'default';
  const groupName = isUngrouped ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_14__.RuleLocation, {
    namespace: namespace.name
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_14__.RuleLocation, {
    namespace: namespace.name,
    group: group.name
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": "rule-group",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: styles.header,
      "data-testid": "rule-group-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_13__.CollapseToggle, {
        className: styles.collapseToggle,
        isCollapsed: isCollapsed,
        onToggle: setIsCollapsed,
        "data-testid": "group-collapse-toggle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        name: isCollapsed ? 'folder' : 'folder-open'
      }), (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_11__.isCloudRulesSource)(rulesSource) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
        content: rulesSource.name,
        placement: "top",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("img", {
          alt: rulesSource.meta.name,
          className: styles.dataSourceIcon,
          src: rulesSource.meta.info.logos.small
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("h6", {
        className: styles.heading,
        children: [isFederated && (_Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge, {
          color: "purple",
          text: "Federated"
        }))), " ", groupName]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: styles.spacer
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: styles.headerStats,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_RuleStats__WEBPACK_IMPORTED_MODULE_17__.RuleStats, {
          showInactive: false,
          group: group
        })
      }), !!actionIcons.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
          className: styles.actionsSeparator,
          children: "|"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
          className: styles.actionIcons,
          children: actionIcons
        })]
      })]
    }), !isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_RulesTable__WEBPACK_IMPORTED_MODULE_18__.RulesTable, {
      showSummaryColumn: true,
      className: styles.rulesTable,
      showGuidelines: true,
      rules: group.rules
    }), isEditingGroup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_EditCloudGroupModal__WEBPACK_IMPORTED_MODULE_16__.EditCloudGroupModal, {
      group: group,
      namespace: namespace,
      onClose: () => setIsEditingGroup(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, {
      isOpen: isDeletingGroup,
      title: "Delete group",
      body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        children: ["Deleting this group will permanently remove the group", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("br", {})), "and ", group.rules.length, " alert ", pluralize__WEBPACK_IMPORTED_MODULE_1___default()('rule', group.rules.length), " belonging to it.", _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("br", {})), "Are you sure you want to delete this group?"]
      }),
      onConfirm: deleteGroup,
      onDismiss: () => setIsDeletingGroup(false),
      confirmText: "Delete"
    })]
  });
});
RulesGroup.displayName = 'RulesGroup';
const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & + & {
      margin-top: ${theme.spacing(2)};
    }
  `,
  header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} 0;
    background-color: ${theme.colors.background.secondary};
    flex-wrap: wrap;
  `,
  headerStats: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    span {
      vertical-align: middle;
    }

    ${theme.breakpoints.down('sm')} {
      order: 2;
      width: 100%;
      padding-left: ${theme.spacing(1)};
    }
  `,
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
    margin-bottom: 0;
  `,
  spacer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
  `,
  collapseToggle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background: none;
    border: none;
    margin-top: -${theme.spacing(1)};
    margin-bottom: -${theme.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,
  dataSourceIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: ${theme.spacing(2)};
    height: ${theme.spacing(2)};
    margin-left: ${theme.spacing(2)};
  `,
  dataSourceOrigin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: 1em;
    color: ${theme.colors.text.disabled};
  `,
  actionsSeparator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: 0 ${theme.spacing(2)};
  `,
  actionIcons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * + * {
      margin-left: ${theme.spacing(0.5)};
    }
  `,
  rulesTable: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(3)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulesTable": () => (/* binding */ RulesTable),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
/* harmony import */ var _RuleLocation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
/* harmony import */ var _RuleDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetails.tsx");
/* harmony import */ var _RuleHealth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
/* harmony import */ var _RuleState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const RulesTable = ({
  rules,
  className,
  showGuidelines = false,
  emptyMessage = 'No rules found.',
  showGroupColumn = false,
  showSummaryColumn = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const wrapperClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.wrapper, className, {
    [styles.wrapperMargin]: showGuidelines
  });
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const seenKeys = [];
    return rules.map((rule, ruleIdx) => {
      var _rule$promRule;

      let key = JSON.stringify([(_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.type, rule.labels, rule.query, rule.name, rule.annotations]);

      if (seenKeys.includes(key)) {
        key += `-${ruleIdx}`;
      }

      seenKeys.push(key);
      return {
        id: key,
        data: rule
      };
    });
  }, [rules]);
  const columns = useColumns(showSummaryColumn, showGroupColumn);

  if (!rules.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(wrapperClass, styles.emptyMessage),
      children: emptyMessage
    });
  }

  const TableComponent = showGuidelines ? _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_6__.DynamicTableWithGuidelines : _DynamicTable__WEBPACK_IMPORTED_MODULE_5__.DynamicTable;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: wrapperClass,
    "data-testid": "rules-table",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(TableComponent, {
      cols: columns,
      isExpandable: true,
      items: items,
      renderExpandedContent: ({
        data: rule
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleDetails__WEBPACK_IMPORTED_MODULE_8__.RuleDetails, {
        rule: rule
      })
    })
  });
};
const getStyles = theme => ({
  wrapperMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    ${theme.breakpoints.up('md')} {
      margin-left: 36px;
    }
  `,
  emptyMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(1)};
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: auto;
    background-color: ${theme.colors.background.secondary};
    border-radius: ${theme.shape.borderRadius()};
  `
});

function useColumns(showSummaryColumn, showGroupColumn) {
  const hasRuler = (0,_hooks_useHasRuler__WEBPACK_IMPORTED_MODULE_3__.useHasRuler)();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const columns = [{
      id: 'state',
      label: 'State',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: rule
      }) => {
        const {
          namespace
        } = rule;
        const {
          rulesSource
        } = namespace;
        const {
          promRule,
          rulerRule
        } = rule;
        const isDeleting = !!(hasRuler(rulesSource) && promRule && !rulerRule);
        const isCreating = !!(hasRuler(rulesSource) && rulerRule && !promRule);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleState__WEBPACK_IMPORTED_MODULE_10__.RuleState, {
          rule: rule,
          isDeleting: isDeleting,
          isCreating: isCreating
        });
      },
      size: '165px'
    }, {
      id: 'name',
      label: 'Name',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: rule
      }) => rule.name,
      size: 5
    }, {
      id: 'health',
      label: 'Health',
      // eslint-disable-next-line react/display-name
      renderCell: ({
        data: {
          promRule
        }
      }) => promRule ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleHealth__WEBPACK_IMPORTED_MODULE_9__.RuleHealth, {
        rule: promRule
      }) : null,
      size: '75px'
    }];

    if (showSummaryColumn) {
      columns.push({
        id: 'summary',
        label: 'Summary',
        // eslint-disable-next-line react/display-name
        renderCell: ({
          data: rule
        }) => {
          var _rule$annotations$Ann;

          return (_rule$annotations$Ann = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_4__.Annotation.summary]) !== null && _rule$annotations$Ann !== void 0 ? _rule$annotations$Ann : '';
        },
        size: 5
      });
    }

    if (showGroupColumn) {
      columns.push({
        id: 'group',
        label: 'Group',
        // eslint-disable-next-line react/display-name
        renderCell: ({
          data: rule
        }) => {
          const {
            namespace,
            group
          } = rule; // ungrouped rules are rules that are in the "default" group name

          const isUngrouped = group.name === 'default';
          const groupName = isUngrouped ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_7__.RuleLocation, {
            namespace: namespace.name
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_RuleLocation__WEBPACK_IMPORTED_MODULE_7__.RuleLocation, {
            namespace: namespace.name,
            group: group.name
          });
          return groupName;
        },
        size: 5
      });
    }

    return columns;
  }, [hasRuler, showSummaryColumn, showGroupColumn]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/StateHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateHistory": () => (/* binding */ StateHistory)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts");
/* harmony import */ var _AlertLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabel.tsx");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder;














const StateHistory = ({
  alertId
}) => {
  const {
    loading,
    error,
    result = []
  } = (0,_hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_5__.useManagedAlertStateHistory)(alertId);

  if (loading && !error) {
    return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LoadingPlaceholder, {
      text: 'Loading history...'
    }));
  }

  if (error && !loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      title: 'Failed to fetch alert state history',
      children: error.message
    });
  }

  const columns = [{
    id: 'state',
    label: 'State',
    size: 'max-content',
    renderCell: renderStateCell
  }, {
    id: 'value',
    label: '',
    size: 'auto',
    renderCell: renderValueCell
  }, {
    id: 'timestamp',
    label: 'Time',
    size: 'max-content',
    renderCell: renderTimestampCell
  }];
  const items = result.reduce((acc, item, index) => {
    acc.push({
      id: String(item.id),
      state: item.newState,
      text: item.text,
      data: item.data,
      timestamp: item.updated
    }); // if the preceding state is not the same, create a separate state entry – this likely means the state was reset

    if (!hasMatchingPrecedingState(index, result)) {
      acc.push({
        id: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)(),
        state: item.prevState
      });
    }

    return acc;
  }, []).map(historyItem => ({
    id: historyItem.id,
    data: historyItem
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_7__.DynamicTable, {
    cols: columns,
    items: items
  });
};

function renderValueCell(item) {
  var _item$data$data$evalM, _item$data$data;

  const matches = (_item$data$data$evalM = (_item$data$data = item.data.data) === null || _item$data$data === void 0 ? void 0 : _item$data$data.evalMatches) !== null && _item$data$data$evalM !== void 0 ? _item$data$data$evalM : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [item.data.text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(LabelsWrapper, {
      children: matches.map(match => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AlertLabel__WEBPACK_IMPORTED_MODULE_6__.AlertLabel, {
        labelKey: match.metric,
        value: String(match.value)
      }, match.metric))
    })]
  });
}

function renderStateCell(item) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_8__.AlertStateTag, {
    state: item.data.state
  });
}

function renderTimestampCell(item) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: TimestampStyle,
    children: item.data.timestamp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
      children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormat)(item.data.timestamp)
    })
  });
}

const LabelsWrapper = ({
  children
}) => {
  const {
    wrapper
  } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: wrapper,
    children: children
  });
};

const TimestampStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * {
      margin-right: ${theme.spacing.xs};
    }
  `
}); // this function will figure out if a given historyItem has a preceding historyItem where the states match - in other words
// the newState of the previous historyItem is the same as the prevState of the current historyItem


function hasMatchingPrecedingState(index, items) {
  const currentHistoryItem = items[index];
  const previousHistoryItem = items[index + 1];

  if (!previousHistoryItem) {
    return false;
  }

  return previousHistoryItem.newState === currentHistoryItem.prevState;
}



/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flattenGrafanaManagedRules": () => (/* binding */ flattenGrafanaManagedRules),
/* harmony export */   "sortRulesByName": () => (/* binding */ sortRulesByName),
/* harmony export */   "useCombinedRuleNamespaces": () => (/* binding */ useCombinedRuleNamespaces)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




// this little monster combines prometheus rules and ruler rules to produce a unified data structure
// can limit to a single rules source
function useCombinedRuleNamespaces(rulesSourceName) {
  const promRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.rulerRules); // cache results per rules source, so we only recalculate those for which results have actually changed

  const cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const rulesSources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (rulesSourceName) {
      const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getRulesSourceByName)(rulesSourceName);

      if (!rulesSource) {
        throw new Error(`Unknown rules source: ${rulesSourceName}`);
      }

      return [rulesSource];
    }

    return (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getAllRulesSources)();
  }, [rulesSourceName]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => rulesSources.map(rulesSource => {
    var _promRulesResponses$r, _rulerRulesResponses$;

    const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isCloudRulesSource)(rulesSource) ? rulesSource.name : rulesSource;
    const promRules = (_promRulesResponses$r = promRulesResponses[rulesSourceName]) === null || _promRulesResponses$r === void 0 ? void 0 : _promRulesResponses$r.result;
    const rulerRules = (_rulerRulesResponses$ = rulerRulesResponses[rulesSourceName]) === null || _rulerRulesResponses$ === void 0 ? void 0 : _rulerRulesResponses$.result;
    const cached = cache.current[rulesSourceName];

    if (cached && cached.promRules === promRules && cached.rulerRules === rulerRules) {
      return cached.result;
    }

    const namespaces = {}; // first get all the ruler rules in

    Object.entries(rulerRules || {}).forEach(([namespaceName, groups]) => {
      const namespace = {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      namespaces[namespaceName] = namespace;
      addRulerGroupsToCombinedNamespace(namespace, groups);
    }); // then correlate with prometheus rules

    promRules === null || promRules === void 0 ? void 0 : promRules.forEach(({
      name: namespaceName,
      groups
    }) => {
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
    annotations: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {},
    promRule: rule,
    namespace: namespace,
    group
  };
}

function rulerRuleToCombinedRule(rule, namespace, group) {
  return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRulerRule)(rule) ? {
    name: rule.alert,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  } : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isRecordingRulerRule)(rule) ? {
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

  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isGrafanaRulesSource)(rulesSource)) {
    // assume grafana groups have only the one rule. check name anyway because paranoid
    return group.rules.find(existingRule => existingRule.name === rule.name);
  }

  return (// try finding a rule that matches name, labels, annotations and query
    (_rules$find = group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, true))) !== null && _rules$find !== void 0 ? _rules$find : // if that fails, try finding a rule that only matches name, labels and annotations.
    // loki & prom can sometimes modify the query so it doesnt match, eg `2 > 1` becomes `1`
    group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, false))
  );
}

function isCombinedRuleEqualToPromRule(combinedRule, rule, checkQuery = true) {
  if (combinedRule.name === rule.name) {
    return JSON.stringify([checkQuery ? hashQuery(combinedRule.query) : '', combinedRule.labels, combinedRule.annotations]) === JSON.stringify([checkQuery ? hashQuery(rule.query) : '', rule.labels || {}, (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {}]);
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

/***/ "./public/app/features/alerting/unified/hooks/useFilteredRules.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFilteredRules": () => (/* binding */ useFilteredRules)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");








const useFilteredRules = namespaces => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_2__.useQueryParams)();
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.getFiltersFromUrlParams)(queryParams);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const filteredNamespaces = namespaces // Filter by data source
    // TODO: filter by multiple data sources for grafana-managed alerts
    .filter(({
      rulesSource
    }) => filters.dataSource && (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isCloudRulesSource)(rulesSource) ? rulesSource.name === filters.dataSource : true) // If a namespace and group have rules that match the rules filters then keep them.
    .reduce(reduceNamespaces(filters), []);
    return filteredNamespaces;
  }, [namespaces, filters]);
};

const reduceNamespaces = filters => {
  return (namespaceAcc, namespace) => {
    const groups = namespace.groups.reduce(reduceGroups(filters), []);

    if (groups.length) {
      namespaceAcc.push(Object.assign({}, namespace, {
        groups
      }));
    }

    return namespaceAcc;
  };
}; // Reduces groups to only groups that have rules matching the filters


const reduceGroups = filters => {
  return (groupAcc, group) => {
    const rules = group.rules.filter(rule => {
      var _rule$promRule;

      if (filters.ruleType && filters.ruleType !== ((_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.type)) {
        return false;
      }

      if (filters.dataSource && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_7__.isGrafanaRulerRule)(rule.rulerRule) && !isQueryingDataSource(rule.rulerRule, filters)) {
        return false;
      } // Query strings can match alert name, label keys, and label values


      if (filters.queryString) {
        var _rule$name;

        const normalizedQueryString = filters.queryString.toLocaleLowerCase();
        const doesNameContainsQueryString = (_rule$name = rule.name) === null || _rule$name === void 0 ? void 0 : _rule$name.toLocaleLowerCase().includes(normalizedQueryString);
        const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.parseMatchers)(filters.queryString);
        const doRuleLabelsMatchQuery = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.labelsMatchMatchers)(rule.labels, matchers);
        const doAlertsContainMatchingLabels = rule.promRule && rule.promRule.type === app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_3__.PromRuleType.Alerting && rule.promRule.alerts && rule.promRule.alerts.some(alert => (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.labelsMatchMatchers)(alert.labels, matchers));

        if (!(doesNameContainsQueryString || doRuleLabelsMatchQuery || doAlertsContainMatchingLabels)) {
          return false;
        }
      }

      if (filters.alertState && !(rule.promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_7__.isAlertingRule)(rule.promRule) && rule.promRule.state === filters.alertState)) {
        return false;
      }

      return true;
    }); // Add rules to the group that match the rule list filters

    if (rules.length) {
      groupAcc.push(Object.assign({}, group, {
        rules
      }));
    }

    return groupAcc;
  };
};

const isQueryingDataSource = (rulerRule, filter) => {
  if (!filter.dataSource) {
    return true;
  }

  return !!rulerRule.grafana_alert.data.find(query => {
    if (!query.datasourceUid) {
      return false;
    }

    const ds = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    return (ds === null || ds === void 0 ? void 0 : ds.name) === filter.dataSource;
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useFolder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFolder": () => (/* binding */ useFolder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useFolder(uid) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const folderRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.folders);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uid) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchFolderIfNotFetchedAction)(uid));
    }
  }, [dispatch, uid]);

  if (uid) {
    const request = folderRequests[uid] || _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
    return {
      folder: request.result,
      loading: request.loading
    };
  }

  return {
    loading: false
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useHasRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHasRuler": () => (/* binding */ useHasRuler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");


 // datasource has ruler if it's grafana managed or if we're able to load rules from it

function useHasRuler() {
  const rulerRules = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__.useUnifiedAlertingSelector)(state => state.rulerRules);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(rulesSource => {
    var _rulerRules$rulesSour;

    const rulesSourceName = typeof rulesSource === 'string' ? rulesSource : rulesSource.name;
    return rulesSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_1__.GRAFANA_RULES_SOURCE_NAME || !!((_rulerRules$rulesSour = rulerRules[rulesSourceName]) !== null && _rulerRules$rulesSour !== void 0 && _rulerRules$rulesSour.result);
  }, [rulerRules]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsRuleEditable": () => (/* binding */ useIsRuleEditable)
/* harmony export */ });
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useFolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useIsRuleEditable(rulesSourceName, rule) {
  var _dataSources$rulesSou, _dataSources$rulesSou2, _dataSources$rulesSou3;

  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.dataSources);
  const folderUID = rule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule) ? rule.grafana_alert.namespace_uid : undefined;
  const rulePermission = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesPermissions)(rulesSourceName);
  const hasEditPermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.update, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  const hasRemovePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.delete, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  const {
    folder,
    loading
  } = (0,_useFolder__WEBPACK_IMPORTED_MODULE_3__.useFolder)(folderUID);

  if (!rule) {
    return {
      isEditable: false,
      isRemovable: false,
      loading: false
    };
  } // grafana rules can be edited if user can edit the folder they're in


  if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule)) {
    if (!folderUID) {
      throw new Error(`Rule ${rule.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);
    }

    return {
      isEditable: hasEditPermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      isRemovable: hasRemovePermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      loading
    };
  } // prom rules are only editable by users with Editor role and only if rules source supports editing


  const isRulerAvailable = Boolean((_dataSources$rulesSou = dataSources[rulesSourceName]) === null || _dataSources$rulesSou === void 0 ? void 0 : (_dataSources$rulesSou2 = _dataSources$rulesSou.result) === null || _dataSources$rulesSou2 === void 0 ? void 0 : _dataSources$rulesSou2.rulerConfig);
  return {
    isEditable: hasEditPermission && isRulerAvailable,
    isRemovable: hasRemovePermission && isRulerAvailable,
    loading: (_dataSources$rulesSou3 = dataSources[rulesSourceName]) === null || _dataSources$rulesSou3 === void 0 ? void 0 : _dataSources$rulesSou3.loading
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useManagedAlertStateHistory": () => (/* binding */ useManagedAlertStateHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




function useManagedAlertStateHistory(alertId) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const history = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.managedAlertStateHistory);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchGrafanaAnnotationsAction)(alertId));
  }, [dispatch, alertId]);
  return history;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useStateHistoryModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStateHistoryModal": () => (/* binding */ useStateHistoryModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_rules_StateHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/StateHistory.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function useStateHistoryModal(alertId) {
  var _StateHistory;

  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const StateHistoryModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isOpen: showModal,
    onDismiss: () => setShowModal(false),
    closeOnBackdropClick: true,
    closeOnEscape: true,
    title: "State history",
    children: _StateHistory || (_StateHistory = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_rules_StateHistory__WEBPACK_IMPORTED_MODULE_2__.StateHistory, {
      alertId: alertId
    }))
  }), [alertId, showModal]);
  return {
    StateHistoryModal,
    showStateHistoryModal: () => setShowModal(true),
    hideStateHistoryModal: () => setShowModal(false)
  };
}



/***/ }),

/***/ "./public/app/features/alerting/unified/utils/accessControlHooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRulesAccess": () => (/* binding */ useRulesAccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");


function useRulesAccess() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesAccess)(), []);
}

/***/ }),

/***/ "./public/app/plugins/datasource/loki/syntax.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FUNCTIONS": () => (/* binding */ FUNCTIONS),
/* harmony export */   "LOKI_KEYWORDS": () => (/* binding */ LOKI_KEYWORDS),
/* harmony export */   "PIPE_OPERATORS": () => (/* binding */ PIPE_OPERATORS),
/* harmony export */   "PIPE_PARSERS": () => (/* binding */ PIPE_PARSERS),
/* harmony export */   "RANGE_VEC_FUNCTIONS": () => (/* binding */ RANGE_VEC_FUNCTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lokiGrammar": () => (/* binding */ lokiGrammar)
/* harmony export */ });
const AGGREGATION_OPERATORS = [{
  label: 'sum',
  insertText: 'sum',
  documentation: 'Calculate sum over dimensions'
}, {
  label: 'min',
  insertText: 'min',
  documentation: 'Select minimum over dimensions'
}, {
  label: 'max',
  insertText: 'max',
  documentation: 'Select maximum over dimensions'
}, {
  label: 'avg',
  insertText: 'avg',
  documentation: 'Calculate the average over dimensions'
}, {
  label: 'stddev',
  insertText: 'stddev',
  documentation: 'Calculate population standard deviation over dimensions'
}, {
  label: 'stdvar',
  insertText: 'stdvar',
  documentation: 'Calculate population standard variance over dimensions'
}, {
  label: 'count',
  insertText: 'count',
  documentation: 'Count number of elements in the vector'
}, {
  label: 'bottomk',
  insertText: 'bottomk',
  documentation: 'Smallest k elements by sample value'
}, {
  label: 'topk',
  insertText: 'topk',
  documentation: 'Largest k elements by sample value'
}];
const PIPE_PARSERS = [{
  label: 'json',
  insertText: 'json',
  documentation: 'Extracting labels from the log line using json parser. Only available in Loki 2.0+.'
}, {
  label: 'regexp',
  insertText: 'regexp ""',
  documentation: 'Extracting labels from the log line using regexp parser. Only available in Loki 2.0+.',
  move: -1
}, {
  label: 'logfmt',
  insertText: 'logfmt',
  documentation: 'Extracting labels from the log line using logfmt parser. Only available in Loki 2.0+.'
}, {
  label: 'pattern',
  insertText: 'pattern',
  documentation: 'Extracting labels from the log line using pattern parser. Only available in Loki 2.3+.'
}];
const PIPE_OPERATORS = [{
  label: 'unwrap',
  insertText: 'unwrap',
  detail: 'unwrap identifier',
  documentation: 'Take labels and use the values as sample data for metric aggregations. Only available in Loki 2.0+.'
}, {
  label: 'unpack',
  insertText: 'unpack',
  detail: 'unpack identifier',
  documentation: 'Parses a JSON log line, unpacking all embedded labels in the pack stage. A special property "_entry" will also be used to replace the original log line. Only available in Loki 2.0+.'
}, {
  label: 'label_format',
  insertText: 'label_format',
  documentation: 'Use to rename, modify or add labels. For example, | label_format foo=bar . Only available in Loki 2.0+.'
}, {
  label: 'line_format',
  insertText: 'line_format',
  documentation: 'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" . Only available in Loki 2.0+.'
}];
const RANGE_VEC_FUNCTIONS = [{
  insertText: 'avg_over_time',
  label: 'avg_over_time',
  detail: 'avg_over_time(range-vector)',
  documentation: 'The average of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'min_over_time',
  label: 'min_over_time',
  detail: 'min_over_time(range-vector)',
  documentation: 'The minimum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'max_over_time',
  label: 'max_over_time',
  detail: 'max_over_time(range-vector)',
  documentation: 'The maximum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'sum_over_time',
  label: 'sum_over_time',
  detail: 'sum_over_time(range-vector)',
  documentation: 'The sum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'count_over_time',
  label: 'count_over_time',
  detail: 'count_over_time(range-vector)',
  documentation: 'The count of all values in the specified interval.'
}, {
  insertText: 'stdvar_over_time',
  label: 'stdvar_over_time',
  detail: 'stdvar_over_time(range-vector)',
  documentation: 'The population standard variance of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'stddev_over_time',
  label: 'stddev_over_time',
  detail: 'stddev_over_time(range-vector)',
  documentation: 'The population standard deviation of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'quantile_over_time',
  label: 'quantile_over_time',
  detail: 'quantile_over_time(scalar, range-vector)',
  documentation: 'The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'bytes_over_time',
  label: 'bytes_over_time',
  detail: 'bytes_over_time(range-vector)',
  documentation: 'Counts the amount of bytes used by each log stream for a given range'
}, {
  insertText: 'bytes_rate',
  label: 'bytes_rate',
  detail: 'bytes_rate(range-vector)',
  documentation: 'Calculates the number of bytes per second for each stream.'
}, {
  insertText: 'rate',
  label: 'rate',
  detail: 'rate(v range-vector)',
  documentation: 'Calculates the number of entries per second.'
}];
const FUNCTIONS = [...AGGREGATION_OPERATORS, ...RANGE_VEC_FUNCTIONS];
const LOKI_KEYWORDS = [...FUNCTIONS, ...PIPE_OPERATORS, ...PIPE_PARSERS].map(keyword => keyword.label);
const lokiGrammar = {
  comment: {
    pattern: /#.*/
  },
  'context-aggregation': {
    pattern: /((without|by)\s*)\([^)]*\)/,
    // by ()
    lookbehind: true,
    inside: {
      'label-key': {
        pattern: /[^(),\s][^,)]*[^),\s]*/,
        alias: 'attr-name'
      },
      punctuation: /[()]/
    }
  },
  'context-labels': {
    pattern: /\{[^}]*(?=}?)/,
    greedy: true,
    inside: {
      comment: {
        pattern: /#.*/
      },
      'label-key': {
        pattern: /[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,
        alias: 'attr-name',
        greedy: true
      },
      'label-value': {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true,
        alias: 'attr-value'
      },
      punctuation: /[{]/
    }
  },
  'context-pipe': {
    pattern: /\s\|[^=~]\s?\w*/i,
    inside: {
      'pipe-operator': {
        pattern: /\|/i,
        alias: 'operator'
      },
      'pipe-operations': {
        pattern: new RegExp(`${[...PIPE_PARSERS, ...PIPE_OPERATORS].map(f => f.label).join('|')}`, 'i'),
        alias: 'keyword'
      }
    }
  },
  function: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})(?=\\s*\\()`, 'i'),
  'context-range': [{
    pattern: /\[[^\]]*(?=\])/,
    // [1m]
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    // offset 1m
    lookbehind: true,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }],
  quote: {
    pattern: /"(?:\\.|[^\\"])*"/,
    alias: 'string',
    greedy: true
  },
  backticks: {
    pattern: /`(?:\\.|[^\\`])*`/,
    alias: 'string',
    greedy: true
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  operator: /\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,
  punctuation: /[{}(),.]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lokiGrammar);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/promql.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FUNCTIONS": () => (/* binding */ FUNCTIONS),
/* harmony export */   "LOGICAL_OPERATORS": () => (/* binding */ LOGICAL_OPERATORS),
/* harmony export */   "OPERATORS": () => (/* binding */ OPERATORS),
/* harmony export */   "PROM_KEYWORDS": () => (/* binding */ PROM_KEYWORDS),
/* harmony export */   "RATE_RANGES": () => (/* binding */ RATE_RANGES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "promqlGrammar": () => (/* binding */ promqlGrammar)
/* harmony export */ });
// When changing RATE_RANGES, check if Loki/LogQL ranges should be changed too
// @see public/app/plugins/datasource/loki/language_provider.ts
const RATE_RANGES = [{
  label: '$__interval',
  sortValue: '$__interval'
}, {
  label: '$__rate_interval',
  sortValue: '$__rate_interval'
}, {
  label: '$__range',
  sortValue: '$__range'
}, {
  label: '1m',
  sortValue: '00:01:00'
}, {
  label: '5m',
  sortValue: '00:05:00'
}, {
  label: '10m',
  sortValue: '00:10:00'
}, {
  label: '30m',
  sortValue: '00:30:00'
}, {
  label: '1h',
  sortValue: '01:00:00'
}, {
  label: '1d',
  sortValue: '24:00:00'
}];
const OPERATORS = ['by', 'group_left', 'group_right', 'ignoring', 'on', 'offset', 'without'];
const LOGICAL_OPERATORS = ['or', 'and', 'unless'];
const TRIGONOMETRIC_FUNCTIONS = [{
  label: 'acos',
  insertText: 'acos',
  detail: 'acos(v instant-vector)',
  documentation: 'calculates the arccosine of all elements in v'
}, {
  label: 'acosh',
  insertText: 'acosh',
  detail: 'acosh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic cosine of all elements in v'
}, {
  label: 'asin',
  insertText: 'asin',
  detail: 'asin(v instant-vector)',
  documentation: 'calculates the arcsine of all elements in v'
}, {
  label: 'asinh',
  insertText: 'asinh',
  detail: 'asinh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic sine of all elements in v'
}, {
  label: 'atan',
  insertText: 'atan',
  detail: 'atan(v instant-vector)',
  documentation: 'calculates the arctangent of all elements in v'
}, {
  label: 'atanh',
  insertText: 'atanh',
  detail: 'atanh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic tangent of all elements in v'
}, {
  label: 'cos',
  insertText: 'cos',
  detail: 'cos(v instant-vector)',
  documentation: 'calculates the cosine of all elements in v'
}, {
  label: 'cosh',
  insertText: 'cosh',
  detail: 'cosh(v instant-vector)',
  documentation: 'calculates the hyperbolic cosine of all elements in v'
}, {
  label: 'sin',
  insertText: 'sin',
  detail: 'sin(v instant-vector)',
  documentation: 'calculates the sine of all elements in v'
}, {
  label: 'sinh',
  insertText: 'sinh',
  detail: 'sinh(v instant-vector)',
  documentation: 'calculates the hyperbolic sine of all elements in v'
}, {
  label: 'tan',
  insertText: 'tan',
  detail: 'tan(v instant-vector)',
  documentation: 'calculates the tangent of all elements in v'
}, {
  label: 'tanh',
  insertText: 'tanh',
  detail: 'tanh(v instant-vector)',
  documentation: 'calculates the hyperbolic tangent of all elements in v'
}];
const AGGREGATION_OPERATORS = [{
  label: 'sum',
  insertText: 'sum',
  documentation: 'Calculate sum over dimensions'
}, {
  label: 'min',
  insertText: 'min',
  documentation: 'Select minimum over dimensions'
}, {
  label: 'max',
  insertText: 'max',
  documentation: 'Select maximum over dimensions'
}, {
  label: 'avg',
  insertText: 'avg',
  documentation: 'Calculate the average over dimensions'
}, {
  label: 'group',
  insertText: 'group',
  documentation: 'All values in the resulting vector are 1'
}, {
  label: 'stddev',
  insertText: 'stddev',
  documentation: 'Calculate population standard deviation over dimensions'
}, {
  label: 'stdvar',
  insertText: 'stdvar',
  documentation: 'Calculate population standard variance over dimensions'
}, {
  label: 'count',
  insertText: 'count',
  documentation: 'Count number of elements in the vector'
}, {
  label: 'count_values',
  insertText: 'count_values',
  documentation: 'Count number of elements with the same value'
}, {
  label: 'bottomk',
  insertText: 'bottomk',
  documentation: 'Smallest k elements by sample value'
}, {
  label: 'topk',
  insertText: 'topk',
  documentation: 'Largest k elements by sample value'
}, {
  label: 'quantile',
  insertText: 'quantile',
  documentation: 'Calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions'
}];
const FUNCTIONS = [...AGGREGATION_OPERATORS, ...TRIGONOMETRIC_FUNCTIONS, {
  insertText: 'abs',
  label: 'abs',
  detail: 'abs(v instant-vector)',
  documentation: 'Returns the input vector with all sample values converted to their absolute value.'
}, {
  insertText: 'absent',
  label: 'absent',
  detail: 'absent(v instant-vector)',
  documentation: 'Returns an empty vector if the vector passed to it has any elements and a 1-element vector with the value 1 if the vector passed to it has no elements. This is useful for alerting on when no time series exist for a given metric name and label combination.'
}, {
  insertText: 'absent_over_time',
  label: 'absent_over_time',
  detail: 'absent(v range-vector)',
  documentation: 'Returns an empty vector if the range vector passed to it has any elements and a 1-element vector with the value 1 if the range vector passed to it has no elements.'
}, {
  insertText: 'ceil',
  label: 'ceil',
  detail: 'ceil(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` up to the nearest integer.'
}, {
  insertText: 'changes',
  label: 'changes',
  detail: 'changes(v range-vector)',
  documentation: 'For each input time series, `changes(v range-vector)` returns the number of times its value has changed within the provided time range as an instant vector.'
}, {
  insertText: 'clamp',
  label: 'clamp',
  detail: 'clamp(v instant-vector, min scalar, max scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have a lower limit of `min` and an upper limit of `max`.'
}, {
  insertText: 'clamp_max',
  label: 'clamp_max',
  detail: 'clamp_max(v instant-vector, max scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have an upper limit of `max`.'
}, {
  insertText: 'clamp_min',
  label: 'clamp_min',
  detail: 'clamp_min(v instant-vector, min scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have a lower limit of `min`.'
}, {
  insertText: 'count_scalar',
  label: 'count_scalar',
  detail: 'count_scalar(v instant-vector)',
  documentation: 'Returns the number of elements in a time series vector as a scalar. This is in contrast to the `count()` aggregation operator, which always returns a vector (an empty one if the input vector is empty) and allows grouping by labels via a `by` clause.'
}, {
  insertText: 'deg',
  label: 'deg',
  detail: 'deg(v instant-vector)',
  documentation: 'Converts radians to degrees for all elements in v'
}, {
  insertText: 'day_of_month',
  label: 'day_of_month',
  detail: 'day_of_month(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the month for each of the given times in UTC. Returned values are from 1 to 31.'
}, {
  insertText: 'day_of_week',
  label: 'day_of_week',
  detail: 'day_of_week(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the week for each of the given times in UTC. Returned values are from 0 to 6, where 0 means Sunday etc.'
}, {
  insertText: 'days_in_month',
  label: 'days_in_month',
  detail: 'days_in_month(v=vector(time()) instant-vector)',
  documentation: 'Returns number of days in the month for each of the given times in UTC. Returned values are from 28 to 31.'
}, {
  insertText: 'delta',
  label: 'delta',
  detail: 'delta(v range-vector)',
  documentation: 'Calculates the difference between the first and last value of each time series element in a range vector `v`, returning an instant vector with the given deltas and equivalent labels. The delta is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if the sample values are all integers.'
}, {
  insertText: 'deriv',
  label: 'deriv',
  detail: 'deriv(v range-vector)',
  documentation: 'Calculates the per-second derivative of the time series in a range vector `v`, using simple linear regression.'
}, {
  insertText: 'drop_common_labels',
  label: 'drop_common_labels',
  detail: 'drop_common_labels(instant-vector)',
  documentation: 'Drops all labels that have the same name and value across all series in the input vector.'
}, {
  insertText: 'exp',
  label: 'exp',
  detail: 'exp(v instant-vector)',
  documentation: 'Calculates the exponential function for all elements in `v`.\nSpecial cases are:\n* `Exp(+Inf) = +Inf` \n* `Exp(NaN) = NaN`'
}, {
  insertText: 'floor',
  label: 'floor',
  detail: 'floor(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` down to the nearest integer.'
}, {
  insertText: 'histogram_quantile',
  label: 'histogram_quantile',
  detail: 'histogram_quantile(φ float, b instant-vector)',
  documentation: 'Calculates the φ-quantile (0 ≤ φ ≤ 1) from the buckets `b` of a histogram. The samples in `b` are the counts of observations in each bucket. Each sample must have a label `le` where the label value denotes the inclusive upper bound of the bucket. (Samples without such a label are silently ignored.) The histogram metric type automatically provides time series with the `_bucket` suffix and the appropriate labels.'
}, {
  insertText: 'holt_winters',
  label: 'holt_winters',
  detail: 'holt_winters(v range-vector, sf scalar, tf scalar)',
  documentation: 'Produces a smoothed value for time series based on the range in `v`. The lower the smoothing factor `sf`, the more importance is given to old data. The higher the trend factor `tf`, the more trends in the data is considered. Both `sf` and `tf` must be between 0 and 1.'
}, {
  insertText: 'hour',
  label: 'hour',
  detail: 'hour(v=vector(time()) instant-vector)',
  documentation: 'Returns the hour of the day for each of the given times in UTC. Returned values are from 0 to 23.'
}, {
  insertText: 'idelta',
  label: 'idelta',
  detail: 'idelta(v range-vector)',
  documentation: 'Calculates the difference between the last two samples in the range vector `v`, returning an instant vector with the given deltas and equivalent labels.'
}, {
  insertText: 'increase',
  label: 'increase',
  detail: 'increase(v range-vector)',
  documentation: 'Calculates the increase in the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. The increase is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if a counter increases only by integer increments.'
}, {
  insertText: 'irate',
  label: 'irate',
  detail: 'irate(v range-vector)',
  documentation: 'Calculates the per-second instant rate of increase of the time series in the range vector. This is based on the last two data points. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for.'
}, {
  insertText: 'label_join',
  label: 'label_join',
  detail: 'label_join(v instant-vector, dst_label string, separator string, src_label_1 string, src_label_2 string, ...)',
  documentation: 'For each timeseries in `v`, joins all the values of all the `src_labels` using `separator` and returns the timeseries with the label `dst_label` containing the joined value. There can be any number of `src_labels` in this function.'
}, {
  insertText: 'label_replace',
  label: 'label_replace',
  detail: 'label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)',
  documentation: "For each timeseries in `v`, `label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)`  matches the regular expression `regex` against the label `src_label`.  If it matches, then the timeseries is returned with the label `dst_label` replaced by the expansion of `replacement`. `$1` is replaced with the first matching subgroup, `$2` with the second etc. If the regular expression doesn't match then the timeseries is returned unchanged."
}, {
  insertText: 'ln',
  label: 'ln',
  detail: 'ln(v instant-vector)',
  documentation: 'Calculates the natural logarithm for all elements in `v`.\nSpecial cases are:\n * `ln(+Inf) = +Inf`\n * `ln(0) = -Inf`\n * `ln(x < 0) = NaN`\n * `ln(NaN) = NaN`'
}, {
  insertText: 'log2',
  label: 'log2',
  detail: 'log2(v instant-vector)',
  documentation: 'Calculates the binary logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'log10',
  label: 'log10',
  detail: 'log10(v instant-vector)',
  documentation: 'Calculates the decimal logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'minute',
  label: 'minute',
  detail: 'minute(v=vector(time()) instant-vector)',
  documentation: 'Returns the minute of the hour for each of the given times in UTC. Returned values are from 0 to 59.'
}, {
  insertText: 'month',
  label: 'month',
  detail: 'month(v=vector(time()) instant-vector)',
  documentation: 'Returns the month of the year for each of the given times in UTC. Returned values are from 1 to 12, where 1 means January etc.'
}, {
  insertText: 'pi',
  label: 'pi',
  detail: 'pi()',
  documentation: 'Returns pi'
}, {
  insertText: 'predict_linear',
  label: 'predict_linear',
  detail: 'predict_linear(v range-vector, t scalar)',
  documentation: 'Predicts the value of time series `t` seconds from now, based on the range vector `v`, using simple linear regression.'
}, {
  insertText: 'rad',
  label: 'rad',
  detail: 'rad(v instant-vector)',
  documentation: 'Converts degrees to radians for all elements in v'
}, {
  insertText: 'rate',
  label: 'rate',
  detail: 'rate(v range-vector)',
  documentation: "Calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. Also, the calculation extrapolates to the ends of the time range, allowing for missed scrapes or imperfect alignment of scrape cycles with the range's time period."
}, {
  insertText: 'resets',
  label: 'resets',
  detail: 'resets(v range-vector)',
  documentation: 'For each input time series, `resets(v range-vector)` returns the number of counter resets within the provided time range as an instant vector. Any decrease in the value between two consecutive samples is interpreted as a counter reset.'
}, {
  insertText: 'round',
  label: 'round',
  detail: 'round(v instant-vector, to_nearest=1 scalar)',
  documentation: 'Rounds the sample values of all elements in `v` to the nearest integer. Ties are resolved by rounding up. The optional `to_nearest` argument allows specifying the nearest multiple to which the sample values should be rounded. This multiple may also be a fraction.'
}, {
  insertText: 'scalar',
  label: 'scalar',
  detail: 'scalar(v instant-vector)',
  documentation: 'Given a single-element input vector, `scalar(v instant-vector)` returns the sample value of that single element as a scalar. If the input vector does not have exactly one element, `scalar` will return `NaN`.'
}, {
  insertText: 'sgn',
  label: 'sgn',
  detail: 'sgn(v instant-vector)',
  documentation: 'Returns a vector with all sample values converted to their sign, defined as this: 1 if v is positive, -1 if v is negative and 0 if v is equal to zero.'
}, {
  insertText: 'sort',
  label: 'sort',
  detail: 'sort(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in ascending order.'
}, {
  insertText: 'sort_desc',
  label: 'sort_desc',
  detail: 'sort_desc(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in descending order.'
}, {
  insertText: 'sqrt',
  label: 'sqrt',
  detail: 'sqrt(v instant-vector)',
  documentation: 'Calculates the square root of all elements in `v`.'
}, {
  insertText: 'time',
  label: 'time',
  detail: 'time()',
  documentation: 'Returns the number of seconds since January 1, 1970 UTC. Note that this does not actually return the current time, but the time at which the expression is to be evaluated.'
}, {
  insertText: 'timestamp',
  label: 'timestamp',
  detail: 'timestamp(v instant-vector)',
  documentation: 'Returns the timestamp of each of the samples of the given vector as the number of seconds since January 1, 1970 UTC.'
}, {
  insertText: 'vector',
  label: 'vector',
  detail: 'vector(s scalar)',
  documentation: 'Returns the scalar `s` as a vector with no labels.'
}, {
  insertText: 'year',
  label: 'year',
  detail: 'year(v=vector(time()) instant-vector)',
  documentation: 'Returns the year for each of the given times in UTC.'
}, {
  insertText: 'avg_over_time',
  label: 'avg_over_time',
  detail: 'avg_over_time(range-vector)',
  documentation: 'The average value of all points in the specified interval.'
}, {
  insertText: 'min_over_time',
  label: 'min_over_time',
  detail: 'min_over_time(range-vector)',
  documentation: 'The minimum value of all points in the specified interval.'
}, {
  insertText: 'max_over_time',
  label: 'max_over_time',
  detail: 'max_over_time(range-vector)',
  documentation: 'The maximum value of all points in the specified interval.'
}, {
  insertText: 'sum_over_time',
  label: 'sum_over_time',
  detail: 'sum_over_time(range-vector)',
  documentation: 'The sum of all values in the specified interval.'
}, {
  insertText: 'count_over_time',
  label: 'count_over_time',
  detail: 'count_over_time(range-vector)',
  documentation: 'The count of all values in the specified interval.'
}, {
  insertText: 'quantile_over_time',
  label: 'quantile_over_time',
  detail: 'quantile_over_time(scalar, range-vector)',
  documentation: 'The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval.'
}, {
  insertText: 'stddev_over_time',
  label: 'stddev_over_time',
  detail: 'stddev_over_time(range-vector)',
  documentation: 'The population standard deviation of the values in the specified interval.'
}, {
  insertText: 'stdvar_over_time',
  label: 'stdvar_over_time',
  detail: 'stdvar_over_time(range-vector)',
  documentation: 'The population standard variance of the values in the specified interval.'
}, {
  insertText: 'last_over_time',
  label: 'last_over_time',
  detail: 'last_over_time(range-vector)',
  documentation: 'The most recent point value in specified interval.'
}];
const PROM_KEYWORDS = FUNCTIONS.map(keyword => keyword.label);
const promqlGrammar = {
  comment: {
    pattern: /#.*/
  },
  'context-aggregation': {
    pattern: /((by|without)\s*)\([^)]*\)/,
    // by ()
    lookbehind: true,
    inside: {
      'label-key': {
        pattern: /[^(),\s][^,)]*[^),\s]*/,
        alias: 'attr-name'
      },
      punctuation: /[()]/
    }
  },
  'context-labels': {
    pattern: /\{[^}]*(?=}?)/,
    greedy: true,
    inside: {
      comment: {
        pattern: /#.*/
      },
      'label-key': {
        pattern: /[a-z_]\w*(?=\s*(=|!=|=~|!~))/,
        alias: 'attr-name',
        greedy: true
      },
      'label-value': {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true,
        alias: 'attr-value'
      },
      punctuation: /[{]/
    }
  },
  function: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})(?=\\s*\\()`, 'i'),
  'context-range': [{
    pattern: /\[[^\]]*(?=])/,
    // [1m]
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    // offset 1m
    lookbehind: true,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }],
  idList: {
    pattern: /\d+(\|\d+)+/,
    alias: 'number'
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  operator: new RegExp(`/[-+*/=%^~]|&&?|\\|?\\||!=?|<(?:=>?|<|>)?|>[>=]?|\\b(?:${OPERATORS.join('|')})\\b`, 'i'),
  punctuation: /[{};()`,.]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promqlGrammar);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzNCa1gsSUFBQUEsVUFBVSxFQUFFLElBRmQ7QUFHRUMsSUFBQUEsTUFBTSxFQUFFO0FBQ04sd0JBQWtCO0FBQ2hCblgsUUFBQUEsT0FBTyxFQUFFLGtCQURPO0FBRWhCb1gsUUFBQUEsS0FBSyxFQUFFO0FBRlM7QUFEWjtBQUhWLEdBVmUsQ0FwQ21CO0FBeURwQ2dCLEVBQUFBLE1BQU0sRUFBRTtBQUNOcFksSUFBQUEsT0FBTyxFQUFFLGFBREg7QUFFTm9YLElBQUFBLEtBQUssRUFBRTtBQUZELEdBekQ0QjtBQTZEcENPLEVBQUFBLE1BQU0sRUFBRSxxQ0E3RDRCO0FBOERwQ0MsRUFBQUEsUUFBUSxFQUFFLElBQUk3a0IsTUFBSixDQUFZLDBEQUF5RGdsQixTQUFTLENBQUN6RCxJQUFWLENBQWUsR0FBZixDQUFvQixNQUF6RixFQUFnRyxHQUFoRyxDQTlEMEI7QUErRHBDK0MsRUFBQUEsV0FBVyxFQUFFO0FBL0R1QixDQUEvQjtBQWtFUCxpRUFBZWMsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9BbGVydEhvd1RvTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL0FsZXJ0UnVsZUl0ZW0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL0FsZXJ0UnVsZUxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvVW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL1J1bGVMaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0F1dGhvcml6ZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0R5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvRXhwcmVzc2lvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL1J1bGVMb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL1N0YXRlQ29sb3JlZFRleHQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FjdGlvbkljb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9BbGVydEluc3RhbmNlU3RhdGVGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9DbG91ZFJ1bGVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvRWRpdENsb3VkR3JvdXBNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0dyYWZhbmFSdWxlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL05vUnVsZXNDVEEudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlscy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQW5ub3RhdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0RhdGFTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNFeHByZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVIZWFsdGgudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlTGlzdEVycm9ycy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVMaXN0R3JvdXBWaWV3LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RTdGF0ZVNlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlTGlzdFN0YXRlVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVTdGF0ZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVTdGF0cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVzRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZXNHcm91cC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9TdGF0ZUhpc3RvcnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUZpbHRlcmVkUnVsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VGb2xkZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VIYXNSdWxlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUlzUnVsZUVkaXRhYmxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlU3RhdGVIaXN0b3J5TW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvYWNjZXNzQ29udHJvbEhvb2tzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9sb2tpL3N5bnRheC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9wcm9tcWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiwgU3RhdGVTZWxlY3RvciB9IGZyb20gJy4uL2FjdGlvbnMvY2xlYW5VcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDbGVhbnVwPFQ+KHN0YXRlU2VsZWN0b3I6IFN0YXRlU2VsZWN0b3I8VD4pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAvL2JpdCBvZiBhIGhhY2sgdG8gdW5idXJkZW4gdXNlciBmcm9tIGhhdmluZyB0byB3cmFwIHN0YXRlU2VsY2V0b3IgaW4gYSB1c2VDYWxsYmFjay4gT3RoZXJ3aXNlIGNsZWFudXAgd291bGQgaGFwcGVuIG9uIGV2ZXJ5IHJlbmRlclxuICBjb25zdCBzZWxlY3RvclJlZiA9IHVzZVJlZihzdGF0ZVNlbGVjdG9yKTtcbiAgc2VsZWN0b3JSZWYuY3VycmVudCA9IHN0YXRlU2VsZWN0b3I7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yOiBzZWxlY3RvclJlZi5jdXJyZW50IH0pKTtcbiAgICB9O1xuICB9LCBbZGlzcGF0Y2hdKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1vZGFsLCBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0SG93VG9Nb2RhbFByb3BzIHtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQWxlcnRIb3dUb01vZGFsKHsgb25EaXNtaXNzIH06IEFsZXJ0SG93VG9Nb2RhbFByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxNb2RhbCB0aXRsZT1cIkFkZGluZyBhbiBBbGVydFwiIGlzT3BlbiBvbkRpc21pc3M9e29uRGlzbWlzc30gb25DbGlja0JhY2tkcm9wPXtvbkRpc21pc3N9PlxuICAgICAgPFZlcnRpY2FsR3JvdXAgc3BhY2luZz1cInNtXCI+XG4gICAgICAgIDxpbWcgc3JjPVwicHVibGljL2ltZy9hbGVydF9ob3d0b19uZXcucG5nXCIgYWx0PVwibGluayB0byBob3cgdG8gYWxlcnQgaW1hZ2VcIiAvPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbGVydHMgYXJlIGFkZGVkIGFuZCBjb25maWd1cmVkIGluIHRoZSBBbGVydCB0YWIgb2YgYW55IGRhc2hib2FyZCBncmFwaCBwYW5lbCwgbGV0dGluZyB5b3UgYnVpbGQgYW5kIHZpc3VhbGl6ZVxuICAgICAgICAgIGFuIGFsZXJ0IHVzaW5nIGV4aXN0aW5nIHF1ZXJpZXMuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+UmVtZW1iZXIgdG8gc2F2ZSB0aGUgZGFzaGJvYXJkIHRvIHBlcnNpc3QgeW91ciBhbGVydCBydWxlIGNoYW5nZXMuPC9wPlxuICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgSGlnaGxpZ2h0ZXIgZnJvbSAncmVhY3QtaGlnaGxpZ2h0LXdvcmRzJztcblxuaW1wb3J0IHsgSWNvbiwgSWNvbk5hbWUsIEJ1dHRvbiwgTGlua0J1dHRvbiwgQ2FyZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQWxlcnRSdWxlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZTogQWxlcnRSdWxlO1xuICBzZWFyY2g6IHN0cmluZztcbiAgb25Ub2dnbGVQYXVzZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgQWxlcnRSdWxlSXRlbSA9ICh7IHJ1bGUsIHNlYXJjaCwgb25Ub2dnbGVQYXVzZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBydWxlVXJsID0gYCR7cnVsZS51cmx9P2VkaXRQYW5lbD0ke3J1bGUucGFuZWxJZH0mdGFiPWFsZXJ0YDtcbiAgY29uc3QgcmVuZGVyVGV4dCA9IHVzZUNhbGxiYWNrKFxuICAgICh0ZXh0KSA9PiAoXG4gICAgICA8SGlnaGxpZ2h0ZXJcbiAgICAgICAga2V5PXt0ZXh0fVxuICAgICAgICBoaWdobGlnaHRDbGFzc05hbWU9XCJoaWdobGlnaHQtc2VhcmNoLW1hdGNoXCJcbiAgICAgICAgdGV4dFRvSGlnaGxpZ2h0PXt0ZXh0fVxuICAgICAgICBzZWFyY2hXb3Jkcz17W3NlYXJjaF19XG4gICAgICAvPlxuICAgICksXG4gICAgW3NlYXJjaF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPENhcmQuSGVhZGluZz57cmVuZGVyVGV4dChydWxlLm5hbWUpfTwvQ2FyZC5IZWFkaW5nPlxuICAgICAgPENhcmQuRmlndXJlPlxuICAgICAgICA8SWNvbiBzaXplPVwieGxcIiBuYW1lPXtydWxlLnN0YXRlSWNvbiBhcyBJY29uTmFtZX0gY2xhc3NOYW1lPXtgYWxlcnQtcnVsZS1pdGVtX19pY29uICR7cnVsZS5zdGF0ZUNsYXNzfWB9IC8+XG4gICAgICA8L0NhcmQuRmlndXJlPlxuICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgPHNwYW4ga2V5PVwic3RhdGVcIj5cbiAgICAgICAgICA8c3BhbiBrZXk9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtgJHtydWxlLnN0YXRlQ2xhc3N9YH0+XG4gICAgICAgICAgICB7cmVuZGVyVGV4dChydWxlLnN0YXRlVGV4dCl9eycgJ31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgZm9yIHtydWxlLnN0YXRlQWdlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHtydWxlLmluZm8gPyByZW5kZXJUZXh0KHJ1bGUuaW5mbykgOiBudWxsfVxuICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICA8Q2FyZC5BY3Rpb25zPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2V5PVwicGxheVwiXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgaWNvbj17cnVsZS5zdGF0ZSA9PT0gJ3BhdXNlZCcgPyAncGxheScgOiAncGF1c2UnfVxuICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlUGF1c2V9XG4gICAgICAgID5cbiAgICAgICAgICB7cnVsZS5zdGF0ZSA9PT0gJ3BhdXNlZCcgPyAnUmVzdW1lJyA6ICdQYXVzZSd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8TGlua0J1dHRvbiBrZXk9XCJlZGl0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGhyZWY9e3J1bGVVcmx9IGljb249XCJjb2dcIj5cbiAgICAgICAgICBFZGl0IGFsZXJ0XG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvQ2FyZC5BY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0UnVsZUl0ZW07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIEZpbHRlcklucHV0LCBMaW5rQnV0dG9uLCBTZWxlY3QsIFZlcnRpY2FsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IEFsZXJ0UnVsZSwgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IFNob3dNb2RhbFJlYWN0RXZlbnQgfSBmcm9tICcuLi8uLi90eXBlcy9ldmVudHMnO1xuXG5pbXBvcnQgeyBBbGVydEhvd1RvTW9kYWwgfSBmcm9tICcuL0FsZXJ0SG93VG9Nb2RhbCc7XG5pbXBvcnQgQWxlcnRSdWxlSXRlbSBmcm9tICcuL0FsZXJ0UnVsZUl0ZW0nO1xuaW1wb3J0IHsgVW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL1VuaWZpZWRBbGVydGluZ1Byb21vdGlvbic7XG5pbXBvcnQgeyBnZXRBbGVydFJ1bGVzQXN5bmMsIHRvZ2dsZVBhdXNlQWxlcnRSdWxlIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHNldFNlYXJjaFF1ZXJ5IH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXRBbGVydFJ1bGVJdGVtcywgZ2V0U2VhcmNoUXVlcnkgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ2FsZXJ0LWxpc3QnKSxcbiAgICBhbGVydFJ1bGVzOiBnZXRBbGVydFJ1bGVJdGVtcyhzdGF0ZSksXG4gICAgc2VhcmNoOiBnZXRTZWFyY2hRdWVyeShzdGF0ZS5hbGVydFJ1bGVzKSxcbiAgICBpc0xvYWRpbmc6IHN0YXRlLmFsZXJ0UnVsZXMuaXNMb2FkaW5nLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGdldEFsZXJ0UnVsZXNBc3luYyxcbiAgc2V0U2VhcmNoUXVlcnksXG4gIHRvZ2dsZVBhdXNlQWxlcnRSdWxlLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHt9LCB7IHN0YXRlOiBzdHJpbmcgfT4ge31cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgY2xhc3MgQWxlcnRSdWxlTGlzdFVuY29ubmVjdGVkIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBzdGF0ZUZpbHRlcnMgPSBbXG4gICAgeyBsYWJlbDogJ0FsbCcsIHZhbHVlOiAnYWxsJyB9LFxuICAgIHsgbGFiZWw6ICdPSycsIHZhbHVlOiAnb2snIH0sXG4gICAgeyBsYWJlbDogJ05vdCBPSycsIHZhbHVlOiAnbm90X29rJyB9LFxuICAgIHsgbGFiZWw6ICdBbGVydGluZycsIHZhbHVlOiAnYWxlcnRpbmcnIH0sXG4gICAgeyBsYWJlbDogJ05vIGRhdGEnLCB2YWx1ZTogJ25vX2RhdGEnIH0sXG4gICAgeyBsYWJlbDogJ1BhdXNlZCcsIHZhbHVlOiAncGF1c2VkJyB9LFxuICAgIHsgbGFiZWw6ICdQZW5kaW5nJywgdmFsdWU6ICdwZW5kaW5nJyB9LFxuICBdO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hSdWxlcygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLnF1ZXJ5UGFyYW1zLnN0YXRlICE9PSB0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zLnN0YXRlKSB7XG4gICAgICB0aGlzLmZldGNoUnVsZXMoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmZXRjaFJ1bGVzKCkge1xuICAgIGF3YWl0IHRoaXMucHJvcHMuZ2V0QWxlcnRSdWxlc0FzeW5jKHsgc3RhdGU6IHRoaXMuZ2V0U3RhdGVGaWx0ZXIoKSB9KTtcbiAgfVxuXG4gIGdldFN0YXRlRmlsdGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucXVlcnlQYXJhbXMuc3RhdGUgPz8gJ2FsbCc7XG4gIH1cblxuICBvblN0YXRlRmlsdGVyQ2hhbmdlZCA9IChvcHRpb246IFNlbGVjdGFibGVWYWx1ZSkgPT4ge1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHsgc3RhdGU6IG9wdGlvbi52YWx1ZSB9KTtcbiAgfTtcblxuICBvbk9wZW5Ib3dUbyA9ICgpID0+IHtcbiAgICBhcHBFdmVudHMucHVibGlzaChuZXcgU2hvd01vZGFsUmVhY3RFdmVudCh7IGNvbXBvbmVudDogQWxlcnRIb3dUb01vZGFsIH0pKTtcbiAgfTtcblxuICBvblNlYXJjaFF1ZXJ5Q2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldFNlYXJjaFF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICBvblRvZ2dsZVBhdXNlID0gKHJ1bGU6IEFsZXJ0UnVsZSkgPT4ge1xuICAgIHRoaXMucHJvcHMudG9nZ2xlUGF1c2VBbGVydFJ1bGUocnVsZS5pZCwgeyBwYXVzZWQ6IHJ1bGUuc3RhdGUgIT09ICdwYXVzZWQnIH0pO1xuICB9O1xuXG4gIGFsZXJ0U3RhdGVGaWx0ZXJPcHRpb24gPSAoeyB0ZXh0LCB2YWx1ZSB9OiB7IHRleHQ6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxvcHRpb24ga2V5PXt2YWx1ZX0gdmFsdWU9e3ZhbHVlfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBhbGVydFJ1bGVzLCBzZWFyY2gsIGlzTG9hZGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICAgIDxGaWx0ZXJJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhbGVydHNcIiB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17dGhpcy5vblNlYXJjaFF1ZXJ5Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWxcIiBodG1sRm9yPVwiYWxlcnQtc3RhdGUtZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgU3RhdGVzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aC0xM1wiPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eydhbGVydC1zdGF0ZS1maWx0ZXInfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZUZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN0YXRlRmlsdGVyQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmdldFN0YXRlRmlsdGVyKCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyX19zcGFjZXJcIiAvPlxuICAgICAgICAgICAge2NvbmZpZy51bmlmaWVkQWxlcnRpbmdFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBocmVmPVwiYWxlcnRpbmcvbmcvbmV3XCI+XG4gICAgICAgICAgICAgICAgQWRkIE5HIEFsZXJ0XG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLm9uT3Blbkhvd1RvfT5cbiAgICAgICAgICAgICAgSG93IHRvIGFkZCBhbiBhbGVydFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFVuaWZpZWRBbGVydGluZ1Byb21vdGlvbiAvPlxuICAgICAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJub25lXCI+XG4gICAgICAgICAgICB7YWxlcnRSdWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QWxlcnRSdWxlSXRlbVxuICAgICAgICAgICAgICAgICAgcnVsZT17cnVsZSBhcyBBbGVydFJ1bGV9XG4gICAgICAgICAgICAgICAgICBrZXk9e3J1bGUuaWR9XG4gICAgICAgICAgICAgICAgICBzZWFyY2g9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlUGF1c2U9eygpID0+IHRoaXMub25Ub2dnbGVQYXVzZShydWxlIGFzIEFsZXJ0UnVsZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKEFsZXJ0UnVsZUxpc3RVbmNvbm5lY3RlZCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfS0VZID0gJ2dyYWZhbmEubGVnYWN5YWxlcnRpbmcudW5pZmllZGFsZXJ0aW5ncHJvbW8nO1xuXG5jb25zdCBVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb246IEZDPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24sIHNldFNob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb25dID0gdXNlTG9jYWxTdG9yYWdlPGJvb2xlYW4+KFxuICAgIExPQ0FMX1NUT1JBR0VfS0VZLFxuICAgIHRydWVcbiAgKTtcblxuICBpZiAoIXNob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFsZXJ0XG4gICAgICBzZXZlcml0eT1cImluZm9cIlxuICAgICAgdGl0bGU9XCJUcnkgb3V0IHRoZSBHcmFmYW5hIDggYWxlcnRpbmchXCJcbiAgICAgIG9uUmVtb3ZlPXsoKSA9PiBzZXRTaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uKGZhbHNlKX1cbiAgICA+XG4gICAgICA8cD5cbiAgICAgICAgWW91IGFyZSB1c2luZyB0aGUgbGVnYWN5IEdyYWZhbmEgYWxlcnRpbmcuXG4gICAgICAgIDxiciAvPlxuICAgICAgICBXaGlsZSB3ZSBoYXZlIG5vIHBsYW5zIG9mIGRlcHJlY2F0aW5nIGl0IGFueSB0aW1lIHNvb24sIHdlIGludml0ZSB5b3UgdG8gZ2l2ZSB0aGUgaW1wcm92ZWQgR3JhZmFuYSA4IGFsZXJ0aW5nIGFcbiAgICAgICAgdHJ5LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFNlZXsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9sYXRlc3QvYWxlcnRpbmcvdW5pZmllZC1hbGVydGluZy9kaWZmZXJlbmNlLW9sZC1uZXcvXCI+XG4gICAgICAgICAgV2hhdOKAmXMgTmV3IHdpdGggR3JhZmFuYSA4IGFsZXJ0aW5nXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICB0byBsZWFybiBtb3JlIGFib3V0IHdoYXQmbHNxdW87cyBuZXcgaW4gR3JhZmFuYSA4IGFsZXJ0aW5nIG9yIGxlYXJueycgJ31cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9hbGVydGluZy91bmlmaWVkLWFsZXJ0aW5nL29wdC1pbi9cIj5cbiAgICAgICAgICBob3cgdG8gZW5hYmxlIHRoZSBuZXcgR3JhZmFuYSA4IGFsZXJ0aW5nIGZlYXR1cmVcbiAgICAgICAgPC9hPlxuICAgICAgICAuXG4gICAgICA8L3A+XG4gICAgPC9BbGVydD5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFVuaWZpZWRBbGVydGluZ1Byb21vdGlvbiB9O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uLCBjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgQWxlcnRSdWxlRFRPLCBOb3RpZmllckRUTywgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBsb2FkQWxlcnRSdWxlcywgbG9hZGVkQWxlcnRSdWxlcywgbm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCwgc2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMgfSBmcm9tICcuL3JlZHVjZXJzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsZXJ0UnVsZXNBc3luYyhvcHRpb25zOiB7IHN0YXRlOiBzdHJpbmcgfSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGxvYWRBbGVydFJ1bGVzKCkpO1xuICAgIGNvbnN0IHJ1bGVzOiBBbGVydFJ1bGVEVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvYWxlcnRzJywgb3B0aW9ucyk7XG4gICAgZGlzcGF0Y2gobG9hZGVkQWxlcnRSdWxlcyhydWxlcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlUGF1c2VBbGVydFJ1bGUoaWQ6IG51bWJlciwgb3B0aW9uczogeyBwYXVzZWQ6IGJvb2xlYW4gfSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL2FsZXJ0cy8ke2lkfS9wYXVzZWAsIG9wdGlvbnMpO1xuICAgIGNvbnN0IHN0YXRlRmlsdGVyID0gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpLnN0YXRlIHx8ICdhbGwnO1xuICAgIGRpc3BhdGNoKGdldEFsZXJ0UnVsZXNBc3luYyh7IHN0YXRlOiBzdGF0ZUZpbHRlci50b1N0cmluZygpIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8UHJvbWlzZTx2b2lkPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnNgLCBkYXRhKTtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKCdOb3RpZmljYXRpb24gY3JlYXRlZCcpKSk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKGVycm9yLmRhdGEuZXJyb3IpKSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zLyR7ZGF0YS5pZH1gLCBkYXRhKTtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKCdOb3RpZmljYXRpb24gdXBkYXRlZCcpKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihlcnJvci5kYXRhLmVycm9yKSkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3ROb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBjaGFubmVsID0gZ2V0U3RhdGUoKS5ub3RpZmljYXRpb25DaGFubmVsLm5vdGlmaWNhdGlvbkNoYW5uZWw7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy90ZXN0JywgeyBpZDogY2hhbm5lbC5pZCwgLi4uZGF0YSB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROb3RpZmljYXRpb25UeXBlcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBhbGVydE5vdGlmaWVyczogTm90aWZpZXJEVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvYWxlcnQtbm90aWZpZXJzYCk7XG5cbiAgICBjb25zdCBub3RpZmljYXRpb25UeXBlcyA9IGFsZXJ0Tm90aWZpZXJzLnNvcnQoKG8xLCBvMikgPT4ge1xuICAgICAgaWYgKG8xLm5hbWUgPiBvMi5uYW1lKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH0pO1xuXG4gICAgZGlzcGF0Y2goc2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMobm90aWZpY2F0aW9uVHlwZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWROb3RpZmljYXRpb25DaGFubmVsKGlkOiBudW1iZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkTm90aWZpY2F0aW9uVHlwZXMoKSk7XG4gICAgY29uc3Qgbm90aWZpY2F0aW9uQ2hhbm5lbCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy8ke2lkfWApO1xuICAgIGRpc3BhdGNoKG5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQobm90aWZpY2F0aW9uQ2hhbm5lbCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgQWxlcnRSdWxlLCBBbGVydFJ1bGVzU3RhdGUsIE5vdGlmaWNhdGlvbkNoYW5uZWxTdGF0ZSwgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRTZWFyY2hRdWVyeSA9IChzdGF0ZTogQWxlcnRSdWxlc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeTtcblxuZXhwb3J0IGNvbnN0IGdldEFsZXJ0UnVsZUl0ZW1zID0gKHN0YXRlOiBTdG9yZVN0YXRlKTogQWxlcnRSdWxlW10gPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuYWxlcnRSdWxlcy5zZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUuYWxlcnRSdWxlcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChpdGVtLm5hbWUpIHx8IHJlZ2V4LnRlc3QoaXRlbS5zdGF0ZVRleHQpIHx8IHJlZ2V4LnRlc3QoaXRlbS5pbmZvISk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE5vdGlmaWNhdGlvbkNoYW5uZWwgPSAoc3RhdGU6IE5vdGlmaWNhdGlvbkNoYW5uZWxTdGF0ZSwgY2hhbm5lbElkOiBudW1iZXIpID0+IHtcbiAgaWYgKHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWwuaWQgPT09IGNoYW5uZWxJZCkge1xuICAgIHJldHVybiBzdGF0ZS5ub3RpZmljYXRpb25DaGFubmVsO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIExpbmtCdXR0b24sIHVzZVN0eWxlczIsIHdpdGhFcnJvckJvdW5kYXJ5IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5cbmltcG9ydCB7IEFsZXJ0aW5nUGFnZVdyYXBwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlcic7XG5pbXBvcnQgeyBOb1J1bGVzU3BsYXNoIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL05vUnVsZXNDVEEnO1xuaW1wb3J0IHsgUnVsZUxpc3RFcnJvcnMgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RFcnJvcnMnO1xuaW1wb3J0IHsgUnVsZUxpc3RHcm91cFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RHcm91cFZpZXcnO1xuaW1wb3J0IHsgUnVsZUxpc3RTdGF0ZVZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZUxpc3RTdGF0ZVZpZXcnO1xuaW1wb3J0IHsgUnVsZVN0YXRzIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVTdGF0cyc7XG5pbXBvcnQgUnVsZXNGaWx0ZXIgZnJvbSAnLi9jb21wb25lbnRzL3J1bGVzL1J1bGVzRmlsdGVyJztcbmltcG9ydCB7IHVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMgfSBmcm9tICcuL2hvb2tzL3VzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMnO1xuaW1wb3J0IHsgdXNlRmlsdGVyZWRSdWxlcyB9IGZyb20gJy4vaG9va3MvdXNlRmlsdGVyZWRSdWxlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZmV0Y2hBbGxQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VSdWxlc0FjY2VzcyB9IGZyb20gJy4vdXRpbHMvYWNjZXNzQ29udHJvbEhvb2tzJztcbmltcG9ydCB7IFJVTEVfTElTVF9QT0xMX0lOVEVSVkFMX01TIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0QWxsUnVsZXNTb3VyY2VOYW1lcyB9IGZyb20gJy4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyB9IGZyb20gJy4vdXRpbHMvbWlzYyc7XG5cbmNvbnN0IFZJRVdTID0ge1xuICBncm91cHM6IFJ1bGVMaXN0R3JvdXBWaWV3LFxuICBzdGF0ZTogUnVsZUxpc3RTdGF0ZVZpZXcsXG59O1xuXG5jb25zdCBSdWxlTGlzdCA9IHdpdGhFcnJvckJvdW5kYXJ5KFxuICAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgICBjb25zdCBydWxlc0RhdGFTb3VyY2VOYW1lcyA9IHVzZU1lbW8oZ2V0QWxsUnVsZXNTb3VyY2VOYW1lcywgW10pO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgICBjb25zdCBbZXhwYW5kQWxsLCBzZXRFeHBhbmRBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gICAgY29uc3QgZmlsdGVycyA9IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zKHF1ZXJ5UGFyYW1zKTtcbiAgICBjb25zdCBmaWx0ZXJzQWN0aXZlID0gT2JqZWN0LnZhbHVlcyhmaWx0ZXJzKS5zb21lKChmaWx0ZXIpID0+IGZpbHRlciAhPT0gdW5kZWZpbmVkKTtcblxuICAgIGNvbnN0IHsgY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzLCBjYW5DcmVhdGVDbG91ZFJ1bGVzIH0gPSB1c2VSdWxlc0FjY2VzcygpO1xuXG4gICAgY29uc3QgdmlldyA9IFZJRVdTW3F1ZXJ5UGFyYW1zWyd2aWV3J10gYXMga2V5b2YgdHlwZW9mIFZJRVdTXVxuICAgICAgPyAocXVlcnlQYXJhbXNbJ3ZpZXcnXSBhcyBrZXlvZiB0eXBlb2YgVklFV1MpXG4gICAgICA6ICdncm91cHMnO1xuXG4gICAgY29uc3QgVmlld0NvbXBvbmVudCA9IFZJRVdTW3ZpZXddO1xuXG4gICAgLy8gZmV0Y2ggcnVsZXMsIHRoZW4gcG9sbCBldmVyeSBSVUxFX0xJU1RfUE9MTF9JTlRFUlZBTF9NU1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaEFsbFByb21BbmRSdWxlclJ1bGVzQWN0aW9uKCkpO1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBkaXNwYXRjaChmZXRjaEFsbFByb21BbmRSdWxlclJ1bGVzQWN0aW9uKCkpLCBSVUxFX0xJU1RfUE9MTF9JTlRFUlZBTF9NUyk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIH07XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgICBjb25zdCBwcm9tUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICAgIGNvbnN0IHJ1bGVyUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcblxuICAgIGNvbnN0IGRpc3BhdGNoZWQgPSBydWxlc0RhdGFTb3VyY2VOYW1lcy5zb21lKFxuICAgICAgKG5hbWUpID0+IHByb21SdWxlUmVxdWVzdHNbbmFtZV0/LmRpc3BhdGNoZWQgfHwgcnVsZXJSdWxlUmVxdWVzdHNbbmFtZV0/LmRpc3BhdGNoZWRcbiAgICApO1xuICAgIGNvbnN0IGxvYWRpbmcgPSBydWxlc0RhdGFTb3VyY2VOYW1lcy5zb21lKFxuICAgICAgKG5hbWUpID0+IHByb21SdWxlUmVxdWVzdHNbbmFtZV0/LmxvYWRpbmcgfHwgcnVsZXJSdWxlUmVxdWVzdHNbbmFtZV0/LmxvYWRpbmdcbiAgICApO1xuICAgIGNvbnN0IGhhdmVSZXN1bHRzID0gcnVsZXNEYXRhU291cmNlTmFtZXMuc29tZShcbiAgICAgIChuYW1lKSA9PlxuICAgICAgICAocHJvbVJ1bGVSZXF1ZXN0c1tuYW1lXT8ucmVzdWx0Py5sZW5ndGggJiYgIXByb21SdWxlUmVxdWVzdHNbbmFtZV0/LmVycm9yKSB8fFxuICAgICAgICAoT2JqZWN0LmtleXMocnVsZXJSdWxlUmVxdWVzdHNbbmFtZV0/LnJlc3VsdCB8fCB7fSkubGVuZ3RoICYmICFydWxlclJ1bGVSZXF1ZXN0c1tuYW1lXT8uZXJyb3IpXG4gICAgKTtcblxuICAgIGNvbnN0IHNob3dOZXdBbGVydFNwbGFzaCA9IGRpc3BhdGNoZWQgJiYgIWxvYWRpbmcgJiYgIWhhdmVSZXN1bHRzO1xuXG4gICAgY29uc3QgY29tYmluZWROYW1lc3BhY2VzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcygpO1xuICAgIGNvbnN0IGZpbHRlcmVkTmFtZXNwYWNlcyA9IHVzZUZpbHRlcmVkUnVsZXMoY29tYmluZWROYW1lc3BhY2VzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0aW5nUGFnZVdyYXBwZXIgcGFnZUlkPVwiYWxlcnQtbGlzdFwiIGlzTG9hZGluZz17bG9hZGluZyAmJiAhaGF2ZVJlc3VsdHN9PlxuICAgICAgICA8UnVsZUxpc3RFcnJvcnMgLz5cbiAgICAgICAgeyFzaG93TmV3QWxlcnRTcGxhc2ggJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UnVsZXNGaWx0ZXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJlYWt9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnNDb250YWluZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7dmlldyA9PT0gJ2dyb3VwcycgJiYgZmlsdGVyc0FjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmV4cGFuZEFsbEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17ZXhwYW5kQWxsID8gJ2FuZ2xlLWRvdWJsZS11cCcgOiAnYW5nbGUtZG91YmxlLWRvd24nfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kQWxsKCFleHBhbmRBbGwpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZXhwYW5kQWxsID8gJ0NvbGxhcHNlIGFsbCcgOiAnRXhwYW5kIGFsbCd9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxSdWxlU3RhdHMgc2hvd0luYWN0aXZlPXt0cnVlfSBzaG93UmVjb3JkaW5nPXt0cnVlfSBuYW1lc3BhY2VzPXtmaWx0ZXJlZE5hbWVzcGFjZXN9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7KGNhbkNyZWF0ZUdyYWZhbmFSdWxlcyB8fCBjYW5DcmVhdGVDbG91ZFJ1bGVzKSAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgICAgIGhyZWY9e3VybFV0aWwucmVuZGVyVXJsKCdhbGVydGluZy9uZXcnLCB7IHJldHVyblRvOiBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCB9KX1cbiAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBOZXcgYWxlcnQgcnVsZVxuICAgICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvd05ld0FsZXJ0U3BsYXNoICYmIDxOb1J1bGVzU3BsYXNoIC8+fVxuICAgICAgICB7aGF2ZVJlc3VsdHMgJiYgPFZpZXdDb21wb25lbnQgZXhwYW5kQWxsPXtleHBhbmRBbGx9IG5hbWVzcGFjZXM9e2ZpbHRlcmVkTmFtZXNwYWNlc30gLz59XG4gICAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICAgKTtcbiAgfSxcbiAgeyBzdHlsZTogJ3BhZ2UnIH1cbik7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgYnJlYWs6IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gIGAsXG4gIGJ1dHRvbnNDb250YWluZXI6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBgLFxuICBzdGF0c0NvbnRhaW5lcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBgLFxuICBleHBhbmRBbGxCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VJZDogc3RyaW5nO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRpbmdQYWdlV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VJZCwgaXNMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChcbiAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KSxcbiAgICBwYWdlSWRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+e2NoaWxkcmVufTwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFjdGlvbnM6IEFjY2Vzc0NvbnRyb2xBY3Rpb25bXTtcbiAgZmFsbGJhY2s/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvcml6ZTogRkM8UHJvcHM+ID0gKHsgYWN0aW9ucywgY2hpbGRyZW4sIGZhbGxiYWNrID0gdHJ1ZSB9KSA9PiB7XG4gIGlmIChhY3Rpb25zLnNvbWUoKGFjdGlvbikgPT4gY29udGV4dFNydi5oYXNBY2Nlc3MoYWN0aW9uLCBmYWxsYmFjaykpKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRHluYW1pY1RhYmxlLCBEeW5hbWljVGFibGVQcm9wcyB9IGZyb20gJy4vRHluYW1pY1RhYmxlJztcblxuZXhwb3J0IHR5cGUgRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXNQcm9wczxUPiA9IE9taXQ8RHluYW1pY1RhYmxlUHJvcHM8VD4sICdyZW5kZXJQcmVmaXhIZWFkZXIsIHJlbmRlclByZWZpeENlbGwnPjtcblxuLy8gRHluYW1pY1RhYmxlLCBidXQgcmVuZGVycyB2aXN1YWwgZ3VpZGVsaW5lcyBvbiB0aGUgbGVmdCwgZm9yIGxhcmdlciBzY3JlZW4gd2lkdGhzXG5leHBvcnQgY29uc3QgRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXMgPSA8VCBleHRlbmRzIG9iamVjdD4oe1xuICByZW5kZXJFeHBhbmRlZENvbnRlbnQsXG4gIC4uLnByb3BzXG59OiBEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lc1Byb3BzPFQ+KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8RHluYW1pY1RhYmxlXG4gICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnQ9e1xuICAgICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnRcbiAgICAgICAgICA/IChpdGVtLCBpbmRleCwgaXRlbXMpID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7IShpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkgJiYgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250ZW50R3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz59XG4gICAgICAgICAgICAgICAge3JlbmRlckV4cGFuZGVkQ29udGVudChpdGVtLCBpbmRleCwgaXRlbXMpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAgcmVuZGVyUHJlZml4SGVhZGVyPXsoKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsYXRpdmV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuaGVhZGVyR3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgcmVuZGVyUHJlZml4Q2VsbD17KF8sIGluZGV4LCBpdGVtcykgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbGF0aXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnRvcEd1aWRlbGluZSwgc3R5bGVzLmd1aWRlbGluZSl9IC8+XG4gICAgICAgICAgeyEoaW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEpICYmIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYm90dG9tR3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgcmVsYXRpdmU6IGNzc2BcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICBgLFxuICBndWlkZWxpbmU6IGNzc2BcbiAgICBsZWZ0OiAtMTlweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICR7dGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKX0ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGAsXG4gIHRvcEd1aWRlbGluZTogY3NzYFxuICAgIHdpZHRoOiAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1MCU7XG4gIGAsXG4gIGJvdHRvbUd1aWRlbGluZTogY3NzYFxuICAgIHRvcDogNTAlO1xuICAgIGJvdHRvbTogMDtcbiAgYCxcbiAgY29udGVudEd1aWRlbGluZTogY3NzYFxuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTQ5cHggIWltcG9ydGFudDtcbiAgYCxcbiAgaGVhZGVyR3VpZGVsaW5lOiBjc3NgXG4gICAgdG9wOiAtMjVweDtcbiAgICBib3R0b206IDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VNYXAsIGxhbmd1YWdlcyBhcyBwcmlzbUxhbmd1YWdlcyB9IGZyb20gJ3ByaXNtanMnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ0BncmFmYW5hL3NsYXRlLXJlYWN0JztcbmltcG9ydCB7IG1ha2VWYWx1ZSwgU2xhdGVQcmlzbSwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IExvZ3FsU3ludGF4IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS9zeW50YXgnO1xuaW1wb3J0IFByb21xbFN5bnRheCBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvcHJvbXFsJztcbmltcG9ydCB7IFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlVHlwZSwgaXNDbG91ZFJ1bGVzU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IFdlbGwgfSBmcm9tICcuL1dlbGwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBleHByZXNzaW9uOiBzdHJpbmc7XG4gIHJ1bGVzU291cmNlOiBSdWxlc1NvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodGVkUXVlcnk6IEZDPHsgbGFuZ3VhZ2U6ICdwcm9tcWwnIHwgJ2xvZ3FsJzsgZXhwcjogc3RyaW5nIH0+ID0gKHsgbGFuZ3VhZ2UsIGV4cHIgfSkgPT4ge1xuICBjb25zdCBwbHVnaW5zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbXG4gICAgICBTbGF0ZVByaXNtKFxuICAgICAgICB7XG4gICAgICAgICAgb25seUluOiAobm9kZTogYW55KSA9PiBub2RlLnR5cGUgPT09ICdjb2RlX2Jsb2NrJyxcbiAgICAgICAgICBnZXRTeW50YXg6ICgpID0+IGxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgICB7IC4uLihwcmlzbUxhbmd1YWdlcyBhcyBMYW5ndWFnZU1hcCksIFtsYW5ndWFnZV06IGxhbmd1YWdlID09PSAnbG9ncWwnID8gTG9ncWxTeW50YXggOiBQcm9tcWxTeW50YXggfVxuICAgICAgKSxcbiAgICBdLFxuICAgIFtsYW5ndWFnZV1cbiAgKTtcblxuICBjb25zdCBzbGF0ZVZhbHVlID0gdXNlTWVtbygoKSA9PiBtYWtlVmFsdWUoZXhwciksIFtleHByXSk7XG5cbiAgcmV0dXJuIDxFZGl0b3IgcGx1Z2lucz17cGx1Z2luc30gdmFsdWU9e3NsYXRlVmFsdWV9IHJlYWRPbmx5PXt0cnVlfSAvPjtcbn07XG5cbmV4cG9ydCBjb25zdCBFeHByZXNzaW9uOiBGQzxQcm9wcz4gPSAoeyBleHByZXNzaW9uOiBxdWVyeSwgcnVsZXNTb3VyY2UgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxXZWxsIGNsYXNzTmFtZT17Y3goc3R5bGVzLndlbGwsICdzbGF0ZS1xdWVyeS1maWVsZCcpfT5cbiAgICAgIHtpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gKFxuICAgICAgICA8SGlnaGxpZ2h0ZWRRdWVyeSBleHByPXtxdWVyeX0gbGFuZ3VhZ2U9e3J1bGVzU291cmNlLnR5cGUgPT09IERhdGFTb3VyY2VUeXBlLkxva2kgPyAnbG9ncWwnIDogJ3Byb21xbCd9IC8+XG4gICAgICApIDogKFxuICAgICAgICBxdWVyeVxuICAgICAgKX1cbiAgICA8L1dlbGw+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIHdlbGw6IGNzc2BcbiAgICBmb250LWZhbWlseTogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHkubW9ub3NwYWNlfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUnVsZUxvY2F0aW9uUHJvcHMge1xuICBuYW1lc3BhY2U6IHN0cmluZztcbiAgZ3JvdXA/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFJ1bGVMb2NhdGlvbjogRkM8UnVsZUxvY2F0aW9uUHJvcHM+ID0gKHsgbmFtZXNwYWNlLCBncm91cCB9KSA9PiB7XG4gIGlmICghZ3JvdXApIHtcbiAgICByZXR1cm4gPD57bmFtZXNwYWNlfTwvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtuYW1lc3BhY2V9IDxJY29uIG5hbWU9XCJhbmdsZS1yaWdodFwiIC8+IHtncm91cH1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFJ1bGVMb2NhdGlvbiB9O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHN0YXR1czogUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIHwgJ25ldXRyYWwnO1xufTtcblxuZXhwb3J0IGNvbnN0IFN0YXRlQ29sb3JlZFRleHQ6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCBzdGF0dXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzW3N0YXR1c119PntjaGlsZHJlbiB8fCBzdGF0dXN9PC9zcGFuPjtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZV06IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuc3VjY2Vzcy50ZXh0fTtcbiAgYCxcbiAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nXTogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy53YXJuaW5nLnRleHR9O1xuICBgLFxuICBbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZ106IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZXJyb3IudGV4dH07XG4gIGAsXG4gIG5ldXRyYWw6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuaW1wb3J0IHsgTGFiZWwsIFRvb2x0aXAsIElucHV0LCBJY29uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHF1ZXJ5U3RyaW5nPzogc3RyaW5nO1xuICBkZWZhdWx0UXVlcnlTdHJpbmc/OiBzdHJpbmc7XG4gIG9uRmlsdGVyQ2hhbmdlOiAoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNYXRjaGVyRmlsdGVyID0gKHsgY2xhc3NOYW1lLCBvbkZpbHRlckNoYW5nZSwgZGVmYXVsdFF1ZXJ5U3RyaW5nLCBxdWVyeVN0cmluZyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIG9uRmlsdGVyQ2hhbmdlKHRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHNlYXJjaEljb24gPSA8SWNvbiBuYW1lPXsnc2VhcmNoJ30gLz47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGFiZWw+XG4gICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgPHNwYW4+U2VhcmNoIGJ5IGxhYmVsPC9zcGFuPlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBGaWx0ZXIgYWxlcnRzIHVzaW5nIGxhYmVsIHF1ZXJ5aW5nLCBleDpcbiAgICAgICAgICAgICAgICA8cHJlPntge3NldmVyaXR5PVwiY3JpdGljYWxcIiwgaW5zdGFuY2U9flwiY2x1c3Rlci11cy0uK1wifWB9PC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IG5hbWU9XCJpbmZvLWNpcmNsZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFF1ZXJ5U3RyaW5nfVxuICAgICAgICB2YWx1ZT17cXVlcnlTdHJpbmd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoLXF1ZXJ5LWlucHV0XCJcbiAgICAgICAgcHJlZml4PXtzZWFyY2hJY29ufVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdpZHRofVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgaWNvbjogY3NzYFxuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICBgLFxuICBpbnB1dFdpZHRoOiBjc3NgXG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJY29uTmFtZSwgVG9vbHRpcCwgTGlua0J1dHRvbiwgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUG9wb3ZlckNvbnRlbnQsIFRvb2x0aXBQbGFjZW1lbnQgfSBmcm9tICdAZ3JhZmFuYS91aS9zcmMvY29tcG9uZW50cy9Ub29sdGlwJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdG9vbHRpcDogUG9wb3ZlckNvbnRlbnQ7XG4gIGljb246IEljb25OYW1lO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHRvb2x0aXBQbGFjZW1lbnQ/OiBUb29sdGlwUGxhY2VtZW50O1xuICB0bz86IHN0cmluZztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgJ2RhdGEtdGVzdGlkJz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFjdGlvbkljb246IEZDPFByb3BzPiA9ICh7XG4gIHRvb2x0aXAsXG4gIGljb24sXG4gIHRvLFxuICB0YXJnZXQsXG4gIG9uQ2xpY2ssXG4gIGNsYXNzTmFtZSxcbiAgdG9vbHRpcFBsYWNlbWVudCA9ICd0b3AnLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIGNvbnN0IGFyaWFMYWJlbCA9IHR5cGVvZiB0b29sdGlwID09PSAnc3RyaW5nJyA/IHRvb2x0aXAgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcCBjb250ZW50PXt0b29sdGlwfSBwbGFjZW1lbnQ9e3Rvb2x0aXBQbGFjZW1lbnR9PlxuICAgICAge3RvID8gKFxuICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGhyZWY9e3RvfVxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgdGFyZ2V0PXt0YXJnZXR9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvVG9vbHRpcD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSYWRpb0J1dHRvbkdyb3VwLCBMYWJlbCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEdyYWZhbmFBbGVydFN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzdGF0ZUZpbHRlcj86IEdyYWZhbmFBbGVydFN0YXRlO1xuICBvblN0YXRlRmlsdGVyQ2hhbmdlOiAodmFsdWU6IEdyYWZhbmFBbGVydFN0YXRlIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyID0gKHsgY2xhc3NOYW1lLCBvblN0YXRlRmlsdGVyQ2hhbmdlLCBzdGF0ZUZpbHRlciB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdGF0ZU9wdGlvbnMgPSBPYmplY3QudmFsdWVzKEdyYWZhbmFBbGVydFN0YXRlKS5tYXAoKHZhbHVlKSA9PiAoe1xuICAgIGxhYmVsOiB2YWx1ZSxcbiAgICB2YWx1ZSxcbiAgfSkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGFiZWw+U3RhdGU8L0xhYmVsPlxuICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcbiAgICAgICAgb3B0aW9ucz17c3RhdGVPcHRpb25zfVxuICAgICAgICB2YWx1ZT17c3RhdGVGaWx0ZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtvblN0YXRlRmlsdGVyQ2hhbmdlfVxuICAgICAgICBvbkNsaWNrPXsodikgPT4ge1xuICAgICAgICAgIGlmICh2ID09PSBzdGF0ZUZpbHRlcikge1xuICAgICAgICAgICAgb25TdGF0ZUZpbHRlckNoYW5nZSh1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBnZXRSdWxlc0RhdGFTb3VyY2VzLCBnZXRSdWxlc1NvdXJjZU5hbWUgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcblxuaW1wb3J0IHsgUnVsZXNHcm91cCB9IGZyb20gJy4vUnVsZXNHcm91cCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5hbWVzcGFjZXM6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xuICBleHBhbmRBbGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBDbG91ZFJ1bGVzOiBGQzxQcm9wcz4gPSAoeyBuYW1lc3BhY2VzLCBleHBhbmRBbGwgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3QgcnVsZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb21SdWxlcyk7XG4gIGNvbnN0IHJ1bGVzRGF0YVNvdXJjZXMgPSB1c2VNZW1vKGdldFJ1bGVzRGF0YVNvdXJjZXMsIFtdKTtcblxuICBjb25zdCBkYXRhU291cmNlc0xvYWRpbmcgPSB1c2VNZW1vKFxuICAgICgpID0+IHJ1bGVzRGF0YVNvdXJjZXMuZmlsdGVyKChkcykgPT4gcnVsZXNbZHMubmFtZV0/LmxvYWRpbmcpLFxuICAgIFtydWxlcywgcnVsZXNEYXRhU291cmNlc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uSGVhZGVyfT5cbiAgICAgICAgPGg1Pk1pbWlyIC8gQ29ydGV4IC8gTG9raTwvaDU+XG4gICAgICAgIHtkYXRhU291cmNlc0xvYWRpbmcubGVuZ3RoID8gKFxuICAgICAgICAgIDxMb2FkaW5nUGxhY2Vob2xkZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn1cbiAgICAgICAgICAgIHRleHQ9e2BMb2FkaW5nIHJ1bGVzIGZyb20gJHtkYXRhU291cmNlc0xvYWRpbmcubGVuZ3RofSAke3BsdXJhbGl6ZSgnc291cmNlJywgZGF0YVNvdXJjZXNMb2FkaW5nLmxlbmd0aCl9YH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7bmFtZXNwYWNlcy5tYXAoKG5hbWVzcGFjZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGdyb3VwcywgcnVsZXNTb3VyY2UgfSA9IG5hbWVzcGFjZTtcbiAgICAgICAgcmV0dXJuIGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiAoXG4gICAgICAgICAgPFJ1bGVzR3JvdXBcbiAgICAgICAgICAgIGdyb3VwPXtncm91cH1cbiAgICAgICAgICAgIGtleT17YCR7Z2V0UnVsZXNTb3VyY2VOYW1lKHJ1bGVzU291cmNlKX0tJHtuYW1lfS0ke2dyb3VwLm5hbWV9YH1cbiAgICAgICAgICAgIG5hbWVzcGFjZT17bmFtZXNwYWNlfVxuICAgICAgICAgICAgZXhwYW5kQWxsPXtleHBhbmRBbGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSk7XG4gICAgICB9KX1cbiAgICAgIHtuYW1lc3BhY2VzPy5sZW5ndGggPT09IDAgJiYgISFydWxlc0RhdGFTb3VyY2VzLmxlbmd0aCAmJiA8cD5ObyBydWxlcyBmb3VuZC48L3A+fVxuICAgICAgeyFydWxlc0RhdGFTb3VyY2VzLmxlbmd0aCAmJiA8cD5UaGVyZSBhcmUgbm8gUHJvbWV0aGV1cyBvciBMb2tpIGRhdGFzIHNvdXJjZXMgY29uZmlndXJlZC48L3A+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBsb2FkZXI6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBgLFxuICBzZWN0aW9uSGVhZGVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGAsXG4gIHdyYXBwZXI6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcueGx9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtLCBGaWVsZCwgSW5wdXQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VDbGVhbnVwIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cCc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGVHcm91cCwgQ29tYmluZWRSdWxlTmFtZXNwYWNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IHVwZGF0ZUxvdGV4TmFtZXNwYWNlQW5kR3JvdXBBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldFJ1bGVzU291cmNlTmFtZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkdXgnO1xuaW1wb3J0IHsgZHVyYXRpb25WYWxpZGF0aW9uUGF0dGVybiB9IGZyb20gJy4uLy4uL3V0aWxzL3RpbWUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZTtcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgRm9ybVZhbHVlcyB7XG4gIG5hbWVzcGFjZU5hbWU6IHN0cmluZztcbiAgZ3JvdXBOYW1lOiBzdHJpbmc7XG4gIGdyb3VwSW50ZXJ2YWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVkaXRDbG91ZEdyb3VwTW9kYWwocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBuYW1lc3BhY2UsIGdyb3VwLCBvbkNsb3NlIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRpc3BhdGNoZWQgfSA9XG4gICAgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51cGRhdGVMb3RleE5hbWVzcGFjZUFuZEdyb3VwKSA/PyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHVzZU1lbW8oXG4gICAgKCk6IEZvcm1WYWx1ZXMgPT4gKHtcbiAgICAgIG5hbWVzcGFjZU5hbWU6IG5hbWVzcGFjZS5uYW1lLFxuICAgICAgZ3JvdXBOYW1lOiBncm91cC5uYW1lLFxuICAgICAgZ3JvdXBJbnRlcnZhbDogZ3JvdXAuaW50ZXJ2YWwgPz8gJycsXG4gICAgfSksXG4gICAgW25hbWVzcGFjZSwgZ3JvdXBdXG4gICk7XG5cbiAgLy8gY2xvc2UgbW9kYWwgaWYgc3VjY2Vzc2Z1bGx5IHNhdmVkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpc3BhdGNoZWQgJiYgIWxvYWRpbmcgJiYgIWVycm9yKSB7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hlZCwgbG9hZGluZywgb25DbG9zZSwgZXJyb3JdKTtcblxuICB1c2VDbGVhbnVwKChzdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLnVwZGF0ZUxvdGV4TmFtZXNwYWNlQW5kR3JvdXApO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKHZhbHVlczogRm9ybVZhbHVlcykgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgdXBkYXRlTG90ZXhOYW1lc3BhY2VBbmRHcm91cEFjdGlvbih7XG4gICAgICAgIHJ1bGVzU291cmNlTmFtZTogZ2V0UnVsZXNTb3VyY2VOYW1lKG5hbWVzcGFjZS5ydWxlc1NvdXJjZSksXG4gICAgICAgIGdyb3VwTmFtZTogZ3JvdXAubmFtZSxcbiAgICAgICAgbmV3R3JvdXBOYW1lOiB2YWx1ZXMuZ3JvdXBOYW1lLFxuICAgICAgICBuYW1lc3BhY2VOYW1lOiBuYW1lc3BhY2UubmFtZSxcbiAgICAgICAgbmV3TmFtZXNwYWNlTmFtZTogdmFsdWVzLm5hbWVzcGFjZU5hbWUsXG4gICAgICAgIGdyb3VwSW50ZXJ2YWw6IHZhbHVlcy5ncm91cEludGVydmFsIHx8IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9XG4gICAgICBpc09wZW49e3RydWV9XG4gICAgICB0aXRsZT1cIkVkaXQgbmFtZXNwYWNlIG9yIHJ1bGUgZ3JvdXBcIlxuICAgICAgb25EaXNtaXNzPXtvbkNsb3NlfVxuICAgICAgb25DbGlja0JhY2tkcm9wPXtvbkNsb3NlfVxuICAgID5cbiAgICAgIDxGb3JtIGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0ga2V5PXtKU09OLnN0cmluZ2lmeShkZWZhdWx0VmFsdWVzKX0+XG4gICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzLCBmb3JtU3RhdGU6IHsgaXNEaXJ0eSB9IH0pID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZXNwYWNlXCIgaW52YWxpZD17ISFlcnJvcnMubmFtZXNwYWNlTmFtZX0gZXJyb3I9e2Vycm9ycy5uYW1lc3BhY2VOYW1lPy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lc3BhY2VOYW1lXCJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25hbWVzcGFjZU5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ05hbWVzcGFjZSBuYW1lIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiUnVsZSBncm91cFwiIGludmFsaWQ9eyEhZXJyb3JzLmdyb3VwTmFtZX0gZXJyb3I9e2Vycm9ycy5ncm91cE5hbWU/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImdyb3VwTmFtZVwiXG4gICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdncm91cE5hbWUnLCB7XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1J1bGUgZ3JvdXAgbmFtZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIlJ1bGUgZ3JvdXAgZXZhbHVhdGlvbiBpbnRlcnZhbFwiXG4gICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmdyb3VwSW50ZXJ2YWx9XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ3JvdXBJbnRlcnZhbD8ubWVzc2FnZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJncm91cEludGVydmFsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjFtXCJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2dyb3VwSW50ZXJ2YWwnLCB7XG4gICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBkdXJhdGlvblZhbGlkYXRpb25QYXR0ZXJuLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXtsb2FkaW5nfSBvbkNsaWNrPXtvbkNsb3NlfSBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWlzRGlydHkgfHwgbG9hZGluZ30+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgPyAnU2F2aW5nLi4uJyA6ICdTYXZlIGNoYW5nZXMnfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9Gb3JtPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gIG1vZGFsOiBjc3NgXG4gICAgbWF4LXdpZHRoOiA1NjBweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlTmFtZXNwYWNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi8uLi91dGlscy9yZWR1eCc7XG5cbmltcG9ydCB7IFJ1bGVzR3JvdXAgfSBmcm9tICcuL1J1bGVzR3JvdXAnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXTtcbiAgZXhwYW5kQWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgR3JhZmFuYVJ1bGVzOiBGQzxQcm9wcz4gPSAoeyBuYW1lc3BhY2VzLCBleHBhbmRBbGwgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG5cbiAgY29uc3QgeyBsb2FkaW5nIH0gPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnByb21SdWxlc1tHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FXSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGVcbiAgKTtcblxuICBjb25zdCB3YW50c0dyb3VwZWRWaWV3ID0gcXVlcnlQYXJhbXNbJ3ZpZXcnXSA9PT0gJ2dyb3VwZWQnO1xuICBjb25zdCBuYW1lc3BhY2VzRm9ybWF0ID0gd2FudHNHcm91cGVkVmlldyA/IG5hbWVzcGFjZXMgOiBmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyhuYW1lc3BhY2VzKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uSGVhZGVyfT5cbiAgICAgICAgPGg1PkdyYWZhbmE8L2g1PlxuICAgICAgICB7bG9hZGluZyA/IDxMb2FkaW5nUGxhY2Vob2xkZXIgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfSB0ZXh0PVwiTG9hZGluZy4uLlwiIC8+IDogPGRpdiAvPn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7bmFtZXNwYWNlc0Zvcm1hdD8ubWFwKChuYW1lc3BhY2UpID0+XG4gICAgICAgIG5hbWVzcGFjZS5ncm91cHMubWFwKChncm91cCkgPT4gKFxuICAgICAgICAgIDxSdWxlc0dyb3VwXG4gICAgICAgICAgICBncm91cD17Z3JvdXB9XG4gICAgICAgICAgICBrZXk9e2Ake25hbWVzcGFjZS5uYW1lfS0ke2dyb3VwLm5hbWV9YH1cbiAgICAgICAgICAgIG5hbWVzcGFjZT17bmFtZXNwYWNlfVxuICAgICAgICAgICAgZXhwYW5kQWxsPXtleHBhbmRBbGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICAgICl9XG4gICAgICB7bmFtZXNwYWNlc0Zvcm1hdD8ubGVuZ3RoID09PSAwICYmIDxwPk5vIHJ1bGVzIGZvdW5kLjwvcD59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGxvYWRlcjogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIGAsXG4gIHNlY3Rpb25IZWFkZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy54bH07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2FsbFRvQWN0aW9uQ2FyZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcblxuaW1wb3J0IHsgdXNlUnVsZXNBY2Nlc3MgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3NDb250cm9sSG9va3MnO1xuXG5leHBvcnQgY29uc3QgTm9SdWxlc1NwbGFzaDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzLCBjYW5DcmVhdGVDbG91ZFJ1bGVzIH0gPSB1c2VSdWxlc0FjY2VzcygpO1xuXG4gIGlmIChjYW5DcmVhdGVHcmFmYW5hUnVsZXMgfHwgY2FuQ3JlYXRlQ2xvdWRSdWxlcykge1xuICAgIHJldHVybiAoXG4gICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgIHRpdGxlPVwiWW91IGhhdmVuYHQgY3JlYXRlZCBhbnkgYWxlcnQgcnVsZXMgeWV0XCJcbiAgICAgICAgYnV0dG9uSWNvbj1cImJlbGxcIlxuICAgICAgICBidXR0b25MaW5rPXsnYWxlcnRpbmcvbmV3J31cbiAgICAgICAgYnV0dG9uVGl0bGU9XCJOZXcgYWxlcnQgcnVsZVwiXG4gICAgICAgIHByb1RpcD1cInlvdSBjYW4gYWxzbyBjcmVhdGUgYWxlcnQgcnVsZXMgZnJvbSBleGlzdGluZyBwYW5lbHMgYW5kIHF1ZXJpZXMuXCJcbiAgICAgICAgcHJvVGlwTGluaz1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9cIlxuICAgICAgICBwcm9UaXBMaW5rVGl0bGU9XCJMZWFybiBtb3JlXCJcbiAgICAgICAgcHJvVGlwVGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gPENhbGxUb0FjdGlvbkNhcmQgbWVzc2FnZT1cIk5vIHJ1bGVzIGV4aXN0IHlldC5cIiBjYWxsVG9BY3Rpb25FbGVtZW50PXs8ZGl2IC8+fSAvPjtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBBbGVydExhYmVscyB9IGZyb20gJy4uL0FsZXJ0TGFiZWxzJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5cbmltcG9ydCB7IFJ1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucyB9IGZyb20gJy4vUnVsZURldGFpbHNBY3Rpb25CdXR0b25zJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzQW5ub3RhdGlvbnMgfSBmcm9tICcuL1J1bGVEZXRhaWxzQW5ub3RhdGlvbnMnO1xuaW1wb3J0IHsgUnVsZURldGFpbHNEYXRhU291cmNlcyB9IGZyb20gJy4vUnVsZURldGFpbHNEYXRhU291cmNlcyc7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc0V4cHJlc3Npb24gfSBmcm9tICcuL1J1bGVEZXRhaWxzRXhwcmVzc2lvbic7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzIH0gZnJvbSAnLi9SdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZURldGFpbHM6IEZDPFByb3BzPiA9ICh7IHJ1bGUgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHtcbiAgICBwcm9tUnVsZSxcbiAgICBuYW1lc3BhY2U6IHsgcnVsZXNTb3VyY2UgfSxcbiAgfSA9IHJ1bGU7XG5cbiAgY29uc3QgYW5ub3RhdGlvbnMgPSBPYmplY3QuZW50cmllcyhydWxlLmFubm90YXRpb25zKS5maWx0ZXIoKFtfLCB2YWx1ZV0pID0+ICEhdmFsdWUudHJpbSgpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8UnVsZURldGFpbHNBY3Rpb25CdXR0b25zIHJ1bGU9e3J1bGV9IHJ1bGVzU291cmNlPXtydWxlc1NvdXJjZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdFNpZGV9PlxuICAgICAgICAgIHshIXJ1bGUubGFiZWxzICYmICEhT2JqZWN0LmtleXMocnVsZS5sYWJlbHMpLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiTGFiZWxzXCIgaG9yaXpvbnRhbD17dHJ1ZX0+XG4gICAgICAgICAgICAgIDxBbGVydExhYmVscyBsYWJlbHM9e3J1bGUubGFiZWxzfSAvPlxuICAgICAgICAgICAgPC9EZXRhaWxzRmllbGQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8UnVsZURldGFpbHNFeHByZXNzaW9uIHJ1bGVzU291cmNlPXtydWxlc1NvdXJjZX0gcnVsZT17cnVsZX0gYW5ub3RhdGlvbnM9e2Fubm90YXRpb25zfSAvPlxuICAgICAgICAgIDxSdWxlRGV0YWlsc0Fubm90YXRpb25zIGFubm90YXRpb25zPXthbm5vdGF0aW9uc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRTaWRlfT5cbiAgICAgICAgICA8UnVsZURldGFpbHNEYXRhU291cmNlcyBydWxlc1NvdXJjZT17cnVsZXNTb3VyY2V9IHJ1bGU9e3J1bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8UnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcyBwcm9tUnVsZT17cHJvbVJ1bGV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICR7dGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKX0ge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIGAsXG4gIGxlZnRTaWRlOiBjc3NgXG4gICAgZmxleDogMTtcbiAgYCxcbiAgcmlnaHRTaWRlOiBjc3NgXG4gICAgJHt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKX0ge1xuICAgICAgcGFkZGluZy1sZWZ0OiA5MHB4O1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2xpcGJvYXJkQnV0dG9uLCBDb25maXJtTW9kYWwsIEhvcml6b250YWxHcm91cCwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZUFwcE5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSwgUnVsZXNTb3VyY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBSdWxlckdyYWZhbmFSdWxlRFRPLCBSdWxlclJ1bGVEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyB1c2VJc1J1bGVFZGl0YWJsZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlzUnVsZUVkaXRhYmxlJztcbmltcG9ydCB7IHVzZVN0YXRlSGlzdG9yeU1vZGFsIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlU3RhdGVIaXN0b3J5TW9kYWwnO1xuaW1wb3J0IHsgZGVsZXRlUnVsZUFjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QWxlcnRtYW5hZ2VyQnlVaWQgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgQW5ub3RhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRSdWxlc1NvdXJjZU5hbWUsIGlzQ2xvdWRSdWxlc1NvdXJjZSwgaXNHcmFmYW5hUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGNyZWF0ZUV4cGxvcmVMaW5rLCBjcmVhdGVWaWV3TGluaywgbWFrZVJ1bGVCYXNlZFNpbGVuY2VMaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgKiBhcyBydWxlSWQgZnJvbSAnLi4vLi4vdXRpbHMvcnVsZS1pZCc7XG5pbXBvcnQgeyBpc0ZlZGVyYXRlZFJ1bGVHcm91cCB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZTogQ29tYmluZWRSdWxlO1xuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnM6IEZDPFByb3BzPiA9ICh7IHJ1bGUsIHJ1bGVzU291cmNlIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IG5vdGlmeUFwcCA9IHVzZUFwcE5vdGlmaWNhdGlvbigpO1xuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgeyBuYW1lc3BhY2UsIGdyb3VwLCBydWxlclJ1bGUgfSA9IHJ1bGU7XG4gIGNvbnN0IFtydWxlVG9EZWxldGUsIHNldFJ1bGVUb0RlbGV0ZV0gPSB1c2VTdGF0ZTxDb21iaW5lZFJ1bGU+KCk7XG4gIGNvbnN0IGFsZXJ0SWQgPSBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZS5ydWxlclJ1bGUpID8gcnVsZS5ydWxlclJ1bGUuZ3JhZmFuYV9hbGVydC5pZCA/PyAnJyA6ICcnO1xuICBjb25zdCB7IFN0YXRlSGlzdG9yeU1vZGFsLCBzaG93U3RhdGVIaXN0b3J5TW9kYWwgfSA9IHVzZVN0YXRlSGlzdG9yeU1vZGFsKGFsZXJ0SWQpO1xuXG4gIGNvbnN0IGFsZXJ0bWFuYWdlclNvdXJjZU5hbWUgPSBpc0dyYWZhbmFSdWxlc1NvdXJjZShydWxlc1NvdXJjZSlcbiAgICA/IHJ1bGVzU291cmNlXG4gICAgOiBnZXRBbGVydG1hbmFnZXJCeVVpZChydWxlc1NvdXJjZS5qc29uRGF0YS5hbGVydG1hbmFnZXJVaWQpPy5uYW1lO1xuICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSBnZXRSdWxlc1NvdXJjZU5hbWUocnVsZXNTb3VyY2UpO1xuXG4gIGNvbnN0IGhhc0V4cGxvcmVQZXJtaXNzaW9uID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNFeHBsb3JlKTtcblxuICBjb25zdCBsZWZ0QnV0dG9uczogSlNYLkVsZW1lbnRbXSA9IFtdO1xuICBjb25zdCByaWdodEJ1dHRvbnM6IEpTWC5FbGVtZW50W10gPSBbXTtcblxuICBjb25zdCBpc0ZlZGVyYXRlZCA9IGlzRmVkZXJhdGVkUnVsZUdyb3VwKGdyb3VwKTtcbiAgY29uc3QgeyBpc0VkaXRhYmxlLCBpc1JlbW92YWJsZSB9ID0gdXNlSXNSdWxlRWRpdGFibGUocnVsZXNTb3VyY2VOYW1lLCBydWxlclJ1bGUpO1xuICBjb25zdCByZXR1cm5UbyA9IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoO1xuICBjb25zdCBpc1ZpZXdNb2RlID0gaW5WaWV3TW9kZShsb2NhdGlvbi5wYXRobmFtZSk7XG5cbiAgY29uc3QgZGVsZXRlUnVsZSA9ICgpID0+IHtcbiAgICBpZiAocnVsZVRvRGVsZXRlICYmIHJ1bGVUb0RlbGV0ZS5ydWxlclJ1bGUpIHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBydWxlSWQuZnJvbVJ1bGVyUnVsZShcbiAgICAgICAgZ2V0UnVsZXNTb3VyY2VOYW1lKHJ1bGVUb0RlbGV0ZS5uYW1lc3BhY2UucnVsZXNTb3VyY2UpLFxuICAgICAgICBydWxlVG9EZWxldGUubmFtZXNwYWNlLm5hbWUsXG4gICAgICAgIHJ1bGVUb0RlbGV0ZS5ncm91cC5uYW1lLFxuICAgICAgICBydWxlVG9EZWxldGUucnVsZXJSdWxlXG4gICAgICApO1xuXG4gICAgICBkaXNwYXRjaChkZWxldGVSdWxlQWN0aW9uKGlkZW50aWZpZXIsIHsgbmF2aWdhdGVUbzogaXNWaWV3TW9kZSA/ICcvYWxlcnRpbmcvbGlzdCcgOiB1bmRlZmluZWQgfSkpO1xuICAgICAgc2V0UnVsZVRvRGVsZXRlKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGJ1aWxkU2hhcmVVcmwgPSAoKSA9PiB7XG4gICAgaWYgKGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICAgIGNvbnN0IHsgYXBwVXJsLCBhcHBTdWJVcmwgfSA9IGNvbmZpZztcbiAgICAgIGNvbnN0IGJhc2VVcmwgPSBhcHBTdWJVcmwgIT09ICcnID8gYCR7YXBwVXJsfSR7YXBwU3ViVXJsfS9gIDogY29uZmlnLmFwcFVybDtcbiAgICAgIGNvbnN0IHJ1bGVVcmwgPSBgJHtlbmNvZGVVUklDb21wb25lbnQocnVsZXNTb3VyY2UubmFtZSl9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHJ1bGUubmFtZSl9YDtcbiAgICAgIHJldHVybiBgJHtiYXNlVXJsfWFsZXJ0aW5nLyR7cnVsZVVybH0vZmluZGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF07XG4gIH07XG5cbiAgLy8gZXhwbG9yZSBkb2VzIG5vdCBzdXBwb3J0IGdyYWZhbmEgcnVsZSBxdWVyaWVzIGF0bVxuICAvLyBuZWl0aGVyIGRvIFwiZmVkZXJhdGVkIHJ1bGVzXCJcbiAgaWYgKGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgJiYgaGFzRXhwbG9yZVBlcm1pc3Npb24gJiYgIWlzRmVkZXJhdGVkKSB7XG4gICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICBrZXk9XCJleHBsb3JlXCJcbiAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICBpY29uPVwiY2hhcnQtbGluZVwiXG4gICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICBocmVmPXtjcmVhdGVFeHBsb3JlTGluayhydWxlc1NvdXJjZS5uYW1lLCBydWxlLnF1ZXJ5KX1cbiAgICAgID5cbiAgICAgICAgU2VlIGdyYXBoXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuICBpZiAocnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLnJ1bmJvb2tVUkxdKSB7XG4gICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICBrZXk9XCJydW5ib29rXCJcbiAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICBpY29uPVwiYm9va1wiXG4gICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICBocmVmPXtydWxlLmFubm90YXRpb25zW0Fubm90YXRpb24ucnVuYm9va1VSTF19XG4gICAgICA+XG4gICAgICAgIFZpZXcgcnVuYm9va1xuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cbiAgaWYgKHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5kYXNoYm9hcmRVSURdKSB7XG4gICAgY29uc3QgZGFzaGJvYXJkVUlEID0gcnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLmRhc2hib2FyZFVJRF07XG4gICAgaWYgKGRhc2hib2FyZFVJRCkge1xuICAgICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgIGtleT1cImRhc2hib2FyZFwiXG4gICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgIGljb249XCJhcHBzXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgICBocmVmPXtgZC8ke2VuY29kZVVSSUNvbXBvbmVudChkYXNoYm9hcmRVSUQpfWB9XG4gICAgICAgID5cbiAgICAgICAgICBHbyB0byBkYXNoYm9hcmRcbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgKTtcbiAgICAgIGNvbnN0IHBhbmVsSWQgPSBydWxlLmFubm90YXRpb25zW0Fubm90YXRpb24ucGFuZWxJRF07XG4gICAgICBpZiAocGFuZWxJZCkge1xuICAgICAgICBsZWZ0QnV0dG9ucy5wdXNoKFxuICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICBrZXk9XCJwYW5lbFwiXG4gICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICBpY29uPVwiYXBwc1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9e2BkLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhc2hib2FyZFVJRCl9P3ZpZXdQYW5lbD0ke2VuY29kZVVSSUNvbXBvbmVudChwYW5lbElkKX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEdvIHRvIHBhbmVsXG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhbGVydG1hbmFnZXJTb3VyY2VOYW1lICYmIGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWxlcnRpbmdJbnN0YW5jZUNyZWF0ZSwgY29udGV4dFNydi5pc0VkaXRvcikpIHtcbiAgICBsZWZ0QnV0dG9ucy5wdXNoKFxuICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIGtleT1cInNpbGVuY2VcIlxuICAgICAgICBpY29uPVwiYmVsbC1zbGFzaFwiXG4gICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICBocmVmPXttYWtlUnVsZUJhc2VkU2lsZW5jZUxpbmsoYWxlcnRtYW5hZ2VyU291cmNlTmFtZSwgcnVsZSl9XG4gICAgICA+XG4gICAgICAgIFNpbGVuY2VcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGFsZXJ0SWQpIHtcbiAgICBsZWZ0QnV0dG9ucy5wdXNoKFxuICAgICAgPEZyYWdtZW50IGtleT1cImhpc3RvcnlcIj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gc2l6ZT1cInhzXCIgaWNvbj1cImhpc3RvcnlcIiBvbkNsaWNrPXsoKSA9PiBzaG93U3RhdGVIaXN0b3J5TW9kYWwoKX0+XG4gICAgICAgICAgU2hvdyBzdGF0ZSBoaXN0b3J5XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB7U3RhdGVIaXN0b3J5TW9kYWx9XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICBpZiAoIWlzVmlld01vZGUpIHtcbiAgICByaWdodEJ1dHRvbnMucHVzaChcbiAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICBrZXk9XCJ2aWV3XCJcbiAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgIGljb249XCJleWVcIlxuICAgICAgICBocmVmPXtjcmVhdGVWaWV3TGluayhydWxlc1NvdXJjZSwgcnVsZSwgcmV0dXJuVG8pfVxuICAgICAgPlxuICAgICAgICBWaWV3XG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChpc0VkaXRhYmxlICYmIHJ1bGVyUnVsZSAmJiAhaXNGZWRlcmF0ZWQpIHtcbiAgICBjb25zdCBzb3VyY2VOYW1lID0gZ2V0UnVsZXNTb3VyY2VOYW1lKHJ1bGVzU291cmNlKTtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gcnVsZUlkLmZyb21SdWxlclJ1bGUoc291cmNlTmFtZSwgbmFtZXNwYWNlLm5hbWUsIGdyb3VwLm5hbWUsIHJ1bGVyUnVsZSk7XG5cbiAgICBjb25zdCBlZGl0VVJMID0gdXJsVXRpbC5yZW5kZXJVcmwoXG4gICAgICBgJHtjb25maWcuYXBwU3ViVXJsfS9hbGVydGluZy8ke2VuY29kZVVSSUNvbXBvbmVudChydWxlSWQuc3RyaW5naWZ5SWRlbnRpZmllcihpZGVudGlmaWVyKSl9L2VkaXRgLFxuICAgICAge1xuICAgICAgICByZXR1cm5UbyxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKGlzVmlld01vZGUpIHtcbiAgICAgIHJpZ2h0QnV0dG9ucy5wdXNoKFxuICAgICAgICA8Q2xpcGJvYXJkQnV0dG9uXG4gICAgICAgICAga2V5PVwiY29weVwiXG4gICAgICAgICAgb25DbGlwYm9hcmRDb3B5PXsoKSA9PiB7XG4gICAgICAgICAgICBub3RpZnlBcHAuc3VjY2VzcygnVVJMIGNvcGllZCEnKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xpcGJvYXJkRXJyb3I9eyhlKSA9PiB7XG4gICAgICAgICAgICBub3RpZnlBcHAuZXJyb3IoJ0Vycm9yIHdoaWxlIGNvcHlpbmcgVVJMJywgZS50ZXh0KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgZ2V0VGV4dD17YnVpbGRTaGFyZVVybH1cbiAgICAgICAgPlxuICAgICAgICAgIENvcHkgbGluayB0byBydWxlXG4gICAgICAgIDwvQ2xpcGJvYXJkQnV0dG9uPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByaWdodEJ1dHRvbnMucHVzaChcbiAgICAgIDxMaW5rQnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufSBzaXplPVwieHNcIiBrZXk9XCJlZGl0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGljb249XCJwZW5cIiBocmVmPXtlZGl0VVJMfT5cbiAgICAgICAgRWRpdFxuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAoaXNSZW1vdmFibGUgJiYgcnVsZXJSdWxlICYmICFpc0ZlZGVyYXRlZCkge1xuICAgIHJpZ2h0QnV0dG9ucy5wdXNoKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGtleT1cImRlbGV0ZVwiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UnVsZVRvRGVsZXRlKHJ1bGUpfVxuICAgICAgPlxuICAgICAgICBEZWxldGVcbiAgICAgIDwvQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAobGVmdEJ1dHRvbnMubGVuZ3RoIHx8IHJpZ2h0QnV0dG9ucy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgd2lkdGg9XCJhdXRvXCI+e2xlZnRCdXR0b25zLmxlbmd0aCA/IGxlZnRCdXR0b25zIDogPGRpdiAvPn08L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIHdpZHRoPVwiYXV0b1wiPntyaWdodEJ1dHRvbnMubGVuZ3RoID8gcmlnaHRCdXR0b25zIDogPGRpdiAvPn08L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshIXJ1bGVUb0RlbGV0ZSAmJiAoXG4gICAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgICAgdGl0bGU9XCJEZWxldGUgcnVsZVwiXG4gICAgICAgICAgICBib2R5PVwiRGVsZXRpbmcgdGhpcyBydWxlIHdpbGwgcGVybWFuZW50bHkgcmVtb3ZlIGl0IGZyb20geW91ciBhbGVydCBydWxlIGxpc3QuIEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBydWxlP1wiXG4gICAgICAgICAgICBjb25maXJtVGV4dD1cIlllcywgZGVsZXRlXCJcbiAgICAgICAgICAgIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgICBvbkNvbmZpcm09e2RlbGV0ZVJ1bGV9XG4gICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFJ1bGVUb0RlbGV0ZSh1bmRlZmluZWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBpblZpZXdNb2RlKHBhdGhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGhuYW1lLmVuZHNXaXRoKCcvdmlldycpO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgYCxcbiAgYnV0dG9uOiBjc3NgXG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gIGAsXG59KTtcblxuZnVuY3Rpb24gaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGU/OiBSdWxlclJ1bGVEVE8pOiBydWxlIGlzIFJ1bGVyR3JhZmFuYVJ1bGVEVE8ge1xuICBpZiAoIXJ1bGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChydWxlIGFzIFJ1bGVyR3JhZmFuYVJ1bGVEVE8pLmdyYWZhbmFfYWxlcnQgIT0gbnVsbDtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBBbm5vdGF0aW9uRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vQW5ub3RhdGlvbkRldGFpbHNGaWVsZCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFubm90YXRpb25zOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlRGV0YWlsc0Fubm90YXRpb25zKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgYW5ub3RhdGlvbnMgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgaWYgKGFubm90YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFubm90YXRpb25zfT5cbiAgICAgIHthbm5vdGF0aW9ucy5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxuICAgICAgICA8QW5ub3RhdGlvbkRldGFpbHNGaWVsZCBrZXk9e2tleX0gYW5ub3RhdGlvbktleT17a2V5fSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgYW5ub3RhdGlvbnM6IGNzc2BcbiAgICBtYXJnaW4tdG9wOiA0NnB4O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9FeHByZXNzaW9uRGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBpc0Nsb3VkUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJ1bGU6IENvbWJpbmVkUnVsZTtcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVEZXRhaWxzRGF0YVNvdXJjZXMocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgeyBydWxlc1NvdXJjZSwgcnVsZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBkYXRhU291cmNlczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IGljb24/OiBzdHJpbmcgfT4gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgICAgcmV0dXJuIFt7IG5hbWU6IHJ1bGVzU291cmNlLm5hbWUsIGljb246IHJ1bGVzU291cmNlLm1ldGEuaW5mby5sb2dvcy5zbWFsbCB9XTtcbiAgICB9XG5cbiAgICBpZiAoaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUucnVsZXJSdWxlKSkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBydWxlLnJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0O1xuICAgICAgY29uc3QgdW5pcXVlID0gZGF0YS5yZWR1Y2UoKGRhdGFTb3VyY2VzLCBxdWVyeSkgPT4ge1xuICAgICAgICBjb25zdCBkcyA9IGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpO1xuXG4gICAgICAgIGlmICghZHMgfHwgZHMudWlkID09PSBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCkge1xuICAgICAgICAgIHJldHVybiBkYXRhU291cmNlcztcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGFTb3VyY2VzW2RzLm5hbWVdID0geyBuYW1lOiBkcy5uYW1lLCBpY29uOiBkcy5tZXRhLmluZm8ubG9nb3Muc21hbGwgfTtcbiAgICAgICAgcmV0dXJuIGRhdGFTb3VyY2VzO1xuICAgICAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgeyBuYW1lOiBzdHJpbmc7IGljb24/OiBzdHJpbmcgfT4pO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh1bmlxdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfSwgW3J1bGUsIHJ1bGVzU291cmNlXSk7XG5cbiAgaWYgKGRhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiRGF0YSBzb3VyY2VcIj5cbiAgICAgIHtkYXRhU291cmNlcy5tYXAoKHsgbmFtZSwgaWNvbiB9LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17bmFtZX0+XG4gICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9e2Ake25hbWV9IGRhdGFzb3VyY2UgbG9nb2B9IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTb3VyY2VJY29ufSBzcmM9e2ljb259IC8+eycgJ31cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9EZXRhaWxzRmllbGQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICBjb25zdCBzaXplID0gdGhlbWUuc3BhY2luZygyKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGFTb3VyY2VJY29uOiBjc3NgXG4gICAgICB3aWR0aDogJHtzaXplfTtcbiAgICAgIGhlaWdodDogJHtzaXplfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBpc0Nsb3VkUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnLi4vRXhwcmVzc2lvbic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHJ1bGU6IENvbWJpbmVkUnVsZTtcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlO1xuICBhbm5vdGF0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZURldGFpbHNFeHByZXNzaW9uKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgYW5ub3RhdGlvbnMsIHJ1bGVzU291cmNlLCBydWxlIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgaWYgKCFpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJFeHByZXNzaW9uXCIgaG9yaXpvbnRhbD17dHJ1ZX0gY2xhc3NOYW1lPXtjeCh7IFtzdHlsZXMuZXhwclJvd106ICEhYW5ub3RhdGlvbnMubGVuZ3RoIH0pfT5cbiAgICAgIDxFeHByZXNzaW9uIGV4cHJlc3Npb249e3J1bGUucXVlcnl9IHJ1bGVzU291cmNlPXtydWxlc1NvdXJjZX0gLz5cbiAgICA8L0RldGFpbHNGaWVsZD5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgZXhwclJvdzogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDQ2cHg7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE1hdGNoZXJGaWx0ZXIgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9NYXRjaGVyRmlsdGVyJztcbmltcG9ydCB7IEFsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyJztcbmltcG9ydCB7IGxhYmVsc01hdGNoTWF0Y2hlcnMsIHBhcnNlTWF0Y2hlcnMgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgc29ydEFsZXJ0cyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnYXBwL3BsdWdpbnMvcGFuZWwvYWxlcnRsaXN0L3R5cGVzJztcbmltcG9ydCB7IEFsZXJ0LCBSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgR3JhZmFuYUFsZXJ0U3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IERldGFpbHNGaWVsZCB9IGZyb20gJy4uL0RldGFpbHNGaWVsZCc7XG5cbmltcG9ydCB7IEFsZXJ0SW5zdGFuY2VzVGFibGUgfSBmcm9tICcuL0FsZXJ0SW5zdGFuY2VzVGFibGUnO1xuXG50eXBlIFByb3BzID0ge1xuICBwcm9tUnVsZT86IFJ1bGU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcyhwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHByb21SdWxlIH0gPSBwcm9wcztcblxuICBjb25zdCBbcXVlcnlTdHJpbmcsIHNldFF1ZXJ5U3RyaW5nXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2FsZXJ0U3RhdGUsIHNldEFsZXJ0U3RhdGVdID0gdXNlU3RhdGU8R3JhZmFuYUFsZXJ0U3RhdGU+KCk7XG5cbiAgLy8gVGhpcyBrZXkgaXMgdXNlZCB0byBmb3JjZSBhIHJlcmVuZGVyIG9uIHRoZSBpbnB1dHMgd2hlbiB0aGUgZmlsdGVycyBhcmUgY2xlYXJlZFxuICBjb25zdCBbZmlsdGVyS2V5XSA9IHVzZVN0YXRlPG51bWJlcj4oTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XG4gIGNvbnN0IHF1ZXJ5U3RyaW5nS2V5ID0gYHF1ZXJ5U3RyaW5nLSR7ZmlsdGVyS2V5fWA7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgYWxlcnRzID0gdXNlTWVtbyhcbiAgICAoKTogQWxlcnRbXSA9PlxuICAgICAgaXNBbGVydGluZ1J1bGUocHJvbVJ1bGUpICYmIHByb21SdWxlLmFsZXJ0cz8ubGVuZ3RoXG4gICAgICAgID8gZmlsdGVyQWxlcnRzKHF1ZXJ5U3RyaW5nLCBhbGVydFN0YXRlLCBzb3J0QWxlcnRzKFNvcnRPcmRlci5JbXBvcnRhbmNlLCBwcm9tUnVsZS5hbGVydHMpKVxuICAgICAgICA6IFtdLFxuICAgIFtwcm9tUnVsZSwgYWxlcnRTdGF0ZSwgcXVlcnlTdHJpbmddXG4gICk7XG5cbiAgaWYgKCFpc0FsZXJ0aW5nUnVsZShwcm9tUnVsZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIk1hdGNoaW5nIGluc3RhbmNlc1wiIGhvcml6b250YWw9e3RydWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93LCBzdHlsZXMuc3BhY2VCZXR3ZWVuKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgPE1hdGNoZXJGaWx0ZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfVxuICAgICAgICAgICAga2V5PXtxdWVyeVN0cmluZ0tleX1cbiAgICAgICAgICAgIGRlZmF1bHRRdWVyeVN0cmluZz17cXVlcnlTdHJpbmd9XG4gICAgICAgICAgICBvbkZpbHRlckNoYW5nZT17KHZhbHVlKSA9PiBzZXRRdWVyeVN0cmluZyh2YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH1cbiAgICAgICAgICAgIHN0YXRlRmlsdGVyPXthbGVydFN0YXRlfVxuICAgICAgICAgICAgb25TdGF0ZUZpbHRlckNoYW5nZT17c2V0QWxlcnRTdGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8QWxlcnRJbnN0YW5jZXNUYWJsZSBpbnN0YW5jZXM9e2FsZXJ0c30gLz5cbiAgICA8L0RldGFpbHNGaWVsZD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyQWxlcnRzKFxuICBhbGVydEluc3RhbmNlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgYWxlcnRJbnN0YW5jZVN0YXRlOiBHcmFmYW5hQWxlcnRTdGF0ZSB8IHVuZGVmaW5lZCxcbiAgYWxlcnRzOiBBbGVydFtdXG4pOiBBbGVydFtdIHtcbiAgbGV0IGZpbHRlcmVkQWxlcnRzID0gWy4uLmFsZXJ0c107XG4gIGlmIChhbGVydEluc3RhbmNlTGFiZWwpIHtcbiAgICBjb25zdCBtYXRjaGVycyA9IHBhcnNlTWF0Y2hlcnMoYWxlcnRJbnN0YW5jZUxhYmVsIHx8ICcnKTtcbiAgICBmaWx0ZXJlZEFsZXJ0cyA9IGZpbHRlcmVkQWxlcnRzLmZpbHRlcigoeyBsYWJlbHMgfSkgPT4gbGFiZWxzTWF0Y2hNYXRjaGVycyhsYWJlbHMsIG1hdGNoZXJzKSk7XG4gIH1cbiAgaWYgKGFsZXJ0SW5zdGFuY2VTdGF0ZSkge1xuICAgIGZpbHRlcmVkQWxlcnRzID0gZmlsdGVyZWRBbGVydHMuZmlsdGVyKChhbGVydCkgPT4ge1xuICAgICAgcmV0dXJuIGFsZXJ0LnN0YXRlID09PSBhbGVydEluc3RhbmNlU3RhdGU7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRBbGVydHM7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmxleFJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBzcGFjZUJldHdlZW46IGNzc2BcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBgLFxuICAgIHJvd0NoaWxkOiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBUb29sdGlwLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW50ZXJmYWNlIFByb20ge1xuICBydWxlOiBSdWxlO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZUhlYWx0aDogRkM8UHJvbT4gPSAoeyBydWxlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB1c2VTdHlsZXMyKGdldFN0eWxlKTtcbiAgaWYgKHJ1bGUuaGVhbHRoID09PSAnZXJyJyB8fCBydWxlLmhlYWx0aCA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCB0aGVtZT1cImVycm9yXCIgY29udGVudD17cnVsZS5sYXN0RXJyb3IgfHwgJ05vIGVycm9yIG1lc3NhZ2UgcHJvdmlkZWQuJ30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53YXJufT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiAvPlxuICAgICAgICAgIDxzcGFuPmVycm9yPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICApO1xuICB9XG4gIHJldHVybiA8PntydWxlLmhlYWx0aH08Lz47XG59O1xuXG5jb25zdCBnZXRTdHlsZSA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd2FybjogY3NzYFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLndhcm5pbmcudGV4dH07XG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IFNlcmlhbGl6ZWRFcnJvciB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIFJlYWN0RWxlbWVudCwgdXNlU3RhdGUsIEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24sIFRvb2x0aXAsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZ2V0UnVsZXNEYXRhU291cmNlcywgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNSdWxlck5vdFN1cHBvcnRlZFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZUxpc3RFcnJvcnMoKTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjbG9zZWQsIHNldENsb3NlZF0gPSB1c2VMb2NhbFN0b3JhZ2UoJ2dyYWZhbmEudW5pZmllZGFsZXJ0aW5nLmhpZGVFcnJvcnMnLCBmYWxzZSk7XG4gIGNvbnN0IGRhdGFTb3VyY2VDb25maWdSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXMpO1xuICBjb25zdCBwcm9tUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICBjb25zdCBydWxlclJ1bGVSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBlcnJvcnMgPSB1c2VNZW1vKCgpOiBKU1guRWxlbWVudFtdID0+IHtcbiAgICBjb25zdCBbZGF0YVNvdXJjZUNvbmZpZ0Vycm9ycywgcHJvbVJlcXVlc3RFcnJvcnMsIHJ1bGVyUmVxdWVzdEVycm9yc10gPSBbXG4gICAgICBkYXRhU291cmNlQ29uZmlnUmVxdWVzdHMsXG4gICAgICBwcm9tUnVsZVJlcXVlc3RzLFxuICAgICAgcnVsZXJSdWxlUmVxdWVzdHMsXG4gICAgXS5tYXAoKHJlcXVlc3RzKSA9PlxuICAgICAgZ2V0UnVsZXNEYXRhU291cmNlcygpLnJlZHVjZTxBcnJheTx7IGVycm9yOiBTZXJpYWxpemVkRXJyb3I7IGRhdGFTb3VyY2U6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzIH0+PihcbiAgICAgICAgKHJlc3VsdCwgZGF0YVNvdXJjZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVycm9yID0gcmVxdWVzdHNbZGF0YVNvdXJjZS5uYW1lXT8uZXJyb3I7XG4gICAgICAgICAgaWYgKHJlcXVlc3RzW2RhdGFTb3VyY2UubmFtZV0gJiYgZXJyb3IgJiYgIWlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZShyZXF1ZXN0c1tkYXRhU291cmNlLm5hbWVdKSkge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHQsIHsgZGF0YVNvdXJjZSwgZXJyb3IgfV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIFtdXG4gICAgICApXG4gICAgKTtcbiAgICBjb25zdCBncmFmYW5hUHJvbUVycm9yID0gcHJvbVJ1bGVSZXF1ZXN0c1tHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FXT8uZXJyb3I7XG4gICAgY29uc3QgZ3JhZmFuYVJ1bGVyRXJyb3IgPSBydWxlclJ1bGVSZXF1ZXN0c1tHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FXT8uZXJyb3I7XG5cbiAgICBjb25zdCByZXN1bHQ6IEpTWC5FbGVtZW50W10gPSBbXTtcblxuICAgIGlmIChncmFmYW5hUHJvbUVycm9yKSB7XG4gICAgICByZXN1bHQucHVzaCg8PkZhaWxlZCB0byBsb2FkIEdyYWZhbmEgcnVsZXMgc3RhdGU6IHtncmFmYW5hUHJvbUVycm9yLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3IuJ308Lz4pO1xuICAgIH1cbiAgICBpZiAoZ3JhZmFuYVJ1bGVyRXJyb3IpIHtcbiAgICAgIHJlc3VsdC5wdXNoKDw+RmFpbGVkIHRvIGxvYWQgR3JhZmFuYSBydWxlcyBjb25maWc6IHtncmFmYW5hUnVsZXJFcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9PC8+KTtcbiAgICB9XG5cbiAgICBkYXRhU291cmNlQ29uZmlnRXJyb3JzLmZvckVhY2goKHsgZGF0YVNvdXJjZSwgZXJyb3IgfSkgPT4ge1xuICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgIDw+XG4gICAgICAgICAgRmFpbGVkIHRvIGxvYWQgdGhlIGRhdGEgc291cmNlIGNvbmZpZ3VyYXRpb24gZm9yeycgJ31cbiAgICAgICAgICA8YSBocmVmPXtgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfWB9PntkYXRhU291cmNlLm5hbWV9PC9hPjoge2Vycm9yLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3IuJ31cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcHJvbVJlcXVlc3RFcnJvcnMuZm9yRWFjaCgoeyBkYXRhU291cmNlLCBlcnJvciB9KSA9PlxuICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgIDw+XG4gICAgICAgICAgRmFpbGVkIHRvIGxvYWQgcnVsZXMgc3RhdGUgZnJvbSA8YSBocmVmPXtgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfWB9PntkYXRhU291cmNlLm5hbWV9PC9hPjp7JyAnfVxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgICk7XG5cbiAgICBydWxlclJlcXVlc3RFcnJvcnMuZm9yRWFjaCgoeyBkYXRhU291cmNlLCBlcnJvciB9KSA9PlxuICAgICAgcmVzdWx0LnB1c2goXG4gICAgICAgIDw+XG4gICAgICAgICAgRmFpbGVkIHRvIGxvYWQgcnVsZXMgY29uZmlnIGZyb20gPGEgaHJlZj17YGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH1gfT57ZGF0YVNvdXJjZS5uYW1lfTwvYT46eycgJ31cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvci4nfVxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwgW2RhdGFTb3VyY2VDb25maWdSZXF1ZXN0cywgcHJvbVJ1bGVSZXF1ZXN0cywgcnVsZXJSdWxlUmVxdWVzdHNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ISFlcnJvcnMubGVuZ3RoICYmIGNsb3NlZCAmJiAoXG4gICAgICAgIDxFcnJvclN1bW1hcnlCdXR0b24gY291bnQ9e2Vycm9ycy5sZW5ndGh9IG9uQ2xpY2s9eygpID0+IHNldENsb3NlZCgoY2xvc2VkKSA9PiAhY2xvc2VkKX0gLz5cbiAgICAgICl9XG4gICAgICB7ISFlcnJvcnMubGVuZ3RoICYmICFjbG9zZWQgJiYgKFxuICAgICAgICA8QWxlcnRcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImNsb3VkLXJ1bGVzc291cmNlLWVycm9yc1wiXG4gICAgICAgICAgdGl0bGU9XCJFcnJvcnMgbG9hZGluZyBydWxlc1wiXG4gICAgICAgICAgc2V2ZXJpdHk9XCJlcnJvclwiXG4gICAgICAgICAgb25SZW1vdmU9eygpID0+IHNldENsb3NlZCh0cnVlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtleHBhbmRlZCAmJiBlcnJvcnMubWFwKChpdGVtLCBpZHgpID0+IDxkaXYga2V5PXtpZHh9PntpdGVtfTwvZGl2Pil9XG4gICAgICAgICAgeyFleHBhbmRlZCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2PntlcnJvcnNbMF19PC9kaXY+XG4gICAgICAgICAgICAgIHtlcnJvcnMubGVuZ3RoID49IDIgJiYgKFxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vcmVCdXR0b259XG4gICAgICAgICAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiYW5nbGUtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKHRydWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMubGVuZ3RoIC0gMX0gbW9yZSB7cGx1cmFsaXplKCdlcnJvcicsIGVycm9ycy5sZW5ndGggLSAxKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5pbnRlcmZhY2UgRXJyb3JTdW1tYXJ5UHJvcHMge1xuICBjb3VudDogbnVtYmVyO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBFcnJvclN1bW1hcnlCdXR0b246IEZDPEVycm9yU3VtbWFyeVByb3BzPiA9ICh7IGNvdW50LCBvbkNsaWNrIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbG9hdFJpZ2h0fT5cbiAgICAgIDxUb29sdGlwIGNvbnRlbnQ9XCJTaG93IGFsbCBlcnJvcnNcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cbiAgICAgICAgPEJ1dHRvbiBmaWxsPVwidGV4dFwiIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgIHtjb3VudCA+IDEgPyA8Pntjb3VudH0gZXJyb3JzPC8+IDogPD4xIGVycm9yPC8+fVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgbW9yZUJ1dHRvbjogY3NzYFxuICAgIHBhZGRpbmc6IDA7XG4gIGAsXG4gIGZsb2F0UmlnaHQ6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5cbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSwgaXNHcmFmYW5hUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uL0F1dGhvcml6ZSc7XG5cbmltcG9ydCB7IENsb3VkUnVsZXMgfSBmcm9tICcuL0Nsb3VkUnVsZXMnO1xuaW1wb3J0IHsgR3JhZmFuYVJ1bGVzIH0gZnJvbSAnLi9HcmFmYW5hUnVsZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXTtcbiAgZXhwYW5kQWxsOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZUxpc3RHcm91cFZpZXc6IEZDPFByb3BzPiA9ICh7IG5hbWVzcGFjZXMsIGV4cGFuZEFsbCB9KSA9PiB7XG4gIGNvbnN0IFtncmFmYW5hTmFtZXNwYWNlcywgY2xvdWROYW1lc3BhY2VzXSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHNvcnRlZCA9IG5hbWVzcGFjZXNcbiAgICAgIC5tYXAoKG5hbWVzcGFjZSkgPT4gKHtcbiAgICAgICAgLi4ubmFtZXNwYWNlLFxuICAgICAgICBncm91cHM6IG5hbWVzcGFjZS5ncm91cHMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSksXG4gICAgICB9KSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbiAgICByZXR1cm4gW1xuICAgICAgc29ydGVkLmZpbHRlcigobnMpID0+IGlzR3JhZmFuYVJ1bGVzU291cmNlKG5zLnJ1bGVzU291cmNlKSksXG4gICAgICBzb3J0ZWQuZmlsdGVyKChucykgPT4gaXNDbG91ZFJ1bGVzU291cmNlKG5zLnJ1bGVzU291cmNlKSksXG4gICAgXTtcbiAgfSwgW25hbWVzcGFjZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1tBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nUnVsZVJlYWRdfT5cbiAgICAgICAgPEdyYWZhbmFSdWxlcyBuYW1lc3BhY2VzPXtncmFmYW5hTmFtZXNwYWNlc30gZXhwYW5kQWxsPXtleHBhbmRBbGx9IC8+XG4gICAgICA8L0F1dGhvcml6ZT5cbiAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W0FjY2Vzc0NvbnRyb2xBY3Rpb24uQWxlcnRpbmdSdWxlRXh0ZXJuYWxSZWFkXX0+XG4gICAgICAgIDxDbG91ZFJ1bGVzIG5hbWVzcGFjZXM9e2Nsb3VkTmFtZXNwYWNlc30gZXhwYW5kQWxsPXtleHBhbmRBbGx9IC8+XG4gICAgICA8L0F1dGhvcml6ZT5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGFsZXJ0U3RhdGVUb1JlYWRhYmxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGUgfSBmcm9tICcuLi9Db2xsYXBzZVRvZ2dsZSc7XG5cbmltcG9ydCB7IFJ1bGVzVGFibGUgfSBmcm9tICcuL1J1bGVzVGFibGUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlczogQ29tYmluZWRSdWxlW107XG4gIHN0YXRlOiBQcm9tQWxlcnRpbmdSdWxlU3RhdGU7XG4gIGRlZmF1bHRDb2xsYXBzZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZUxpc3RTdGF0ZVNlY3Rpb246IEZDPFByb3BzPiA9ICh7IHJ1bGVzLCBzdGF0ZSwgZGVmYXVsdENvbGxhcHNlZCA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZCwgc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGRlZmF1bHRDb2xsYXBzZWQpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8Q29sbGFwc2VUb2dnbGVcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZVRvZ2dsZX1cbiAgICAgICAgICBzaXplPVwieHhsXCJcbiAgICAgICAgICBpc0NvbGxhcHNlZD17Y29sbGFwc2VkfVxuICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiBzZXRDb2xsYXBzZWQoIWNvbGxhcHNlZCl9XG4gICAgICAgIC8+XG4gICAgICAgIHthbGVydFN0YXRlVG9SZWFkYWJsZShzdGF0ZSl9ICh7cnVsZXMubGVuZ3RofSlcbiAgICAgIDwvaDQ+XG4gICAgICB7IWNvbGxhcHNlZCAmJiA8UnVsZXNUYWJsZSBjbGFzc05hbWU9e3N0eWxlcy5ydWxlc1RhYmxlfSBydWxlcz17cnVsZXN9IHNob3dHcm91cENvbHVtbj17dHJ1ZX0gLz59XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbGxhcHNlVG9nZ2xlOiBjc3NgXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYCxcbiAgaGVhZGVyOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbiAgcnVsZXNUYWJsZTogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIENvbWJpbmVkUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcblxuaW1wb3J0IHsgUnVsZUxpc3RTdGF0ZVNlY3Rpb24gfSBmcm9tICcuL1J1bGVMaXN0U3RhdGVTZWN0aW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG4gIGV4cGFuZEFsbD86IGJvb2xlYW47XG59XG5cbnR5cGUgR3JvdXBlZFJ1bGVzID0gUmVjb3JkPFByb21BbGVydGluZ1J1bGVTdGF0ZSwgQ29tYmluZWRSdWxlW10+O1xuXG5leHBvcnQgY29uc3QgUnVsZUxpc3RTdGF0ZVZpZXc6IEZDPFByb3BzPiA9ICh7IG5hbWVzcGFjZXMgfSkgPT4ge1xuICBjb25zdCBmaWx0ZXJzID0gZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXModXNlUXVlcnlQYXJhbXMoKVswXSk7XG5cbiAgY29uc3QgZ3JvdXBlZFJ1bGVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OiBHcm91cGVkUnVsZXMgPSB7XG4gICAgICBbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZ106IFtdLFxuICAgICAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZV06IFtdLFxuICAgICAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nXTogW10sXG4gICAgfTtcblxuICAgIG5hbWVzcGFjZXMuZm9yRWFjaCgobmFtZXNwYWNlKSA9PlxuICAgICAgbmFtZXNwYWNlLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT5cbiAgICAgICAgZ3JvdXAucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICAgIGlmIChydWxlLnByb21SdWxlICYmIGlzQWxlcnRpbmdSdWxlKHJ1bGUucHJvbVJ1bGUpKSB7XG4gICAgICAgICAgICByZXN1bHRbcnVsZS5wcm9tUnVsZS5zdGF0ZV0ucHVzaChydWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcblxuICAgIE9iamVjdC52YWx1ZXMocmVzdWx0KS5mb3JFYWNoKChydWxlcykgPT4gcnVsZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwgW25hbWVzcGFjZXNdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyghZmlsdGVycy5hbGVydFN0YXRlIHx8IGZpbHRlcnMuYWxlcnRTdGF0ZSA9PT0gUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZykgJiYgKFxuICAgICAgICA8UnVsZUxpc3RTdGF0ZVNlY3Rpb24gc3RhdGU9e1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmd9IHJ1bGVzPXtncm91cGVkUnVsZXNbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZ119IC8+XG4gICAgICApfVxuICAgICAgeyghZmlsdGVycy5hbGVydFN0YXRlIHx8IGZpbHRlcnMuYWxlcnRTdGF0ZSA9PT0gUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLlBlbmRpbmcpICYmIChcbiAgICAgICAgPFJ1bGVMaXN0U3RhdGVTZWN0aW9uXG4gICAgICAgICAgc3RhdGU9e1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nfVxuICAgICAgICAgIHJ1bGVzPXtncm91cGVkUnVsZXNbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLlBlbmRpbmddfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHsoIWZpbHRlcnMuYWxlcnRTdGF0ZSB8fCBmaWx0ZXJzLmFsZXJ0U3RhdGUgPT09IFByb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZSkgJiYgKFxuICAgICAgICA8UnVsZUxpc3RTdGF0ZVNlY3Rpb25cbiAgICAgICAgICBkZWZhdWx0Q29sbGFwc2VkPXtmaWx0ZXJzLmFsZXJ0U3RhdGUgIT09IFByb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZX1cbiAgICAgICAgICBzdGF0ZT17UHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkluYWN0aXZlfVxuICAgICAgICAgIHJ1bGVzPXtncm91cGVkUnVsZXNbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkluYWN0aXZlXX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmcgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgU3Bpbm5lciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlLCBpc1JlY29yZGluZ1J1bGUsIGdldEZpcnN0QWN0aXZlQXQgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5cbmltcG9ydCB7IEFsZXJ0U3RhdGVUYWcgfSBmcm9tICcuL0FsZXJ0U3RhdGVUYWcnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG4gIGlzRGVsZXRpbmc6IGJvb2xlYW47XG4gIGlzQ3JlYXRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlU3RhdGU6IEZDPFByb3BzPiA9ICh7IHJ1bGUsIGlzRGVsZXRpbmcsIGlzQ3JlYXRpbmcgfSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGUpO1xuICBjb25zdCB7IHByb21SdWxlIH0gPSBydWxlO1xuXG4gIC8vIHJldHVybiBob3cgbG9uZyB0aGUgcnVsZSBoYXMgYmVlbiBpbiBpdCdzIGZpcmluZyBzdGF0ZSwgaWYgYW55XG4gIGNvbnN0IGZvclRpbWUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwcm9tUnVsZSAmJlxuICAgICAgaXNBbGVydGluZ1J1bGUocHJvbVJ1bGUpICYmXG4gICAgICBwcm9tUnVsZS5hbGVydHM/Lmxlbmd0aCAmJlxuICAgICAgcHJvbVJ1bGUuc3RhdGUgIT09IFByb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZVxuICAgICkge1xuICAgICAgLy8gZmluZCBlYXJsaWVzdCBhbGVydFxuICAgICAgY29uc3QgZmlyc3RBY3RpdmVBdCA9IGdldEZpcnN0QWN0aXZlQXQocHJvbVJ1bGUpO1xuXG4gICAgICAvLyBjYWxjdWxhdGUgdGltZSBlbGFwc2VkIGZyb20gZWFybGllc3QgYWxlcnRcbiAgICAgIGlmIChmaXJzdEFjdGl2ZUF0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gdGl0bGU9e1N0cmluZyhmaXJzdEFjdGl2ZUF0KX0gY2xhc3NOYW1lPXtzdHlsZS5mb3J9PlxuICAgICAgICAgICAgZm9yeycgJ31cbiAgICAgICAgICAgIHtpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyhcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBmaXJzdEFjdGl2ZUF0LFxuICAgICAgICAgICAgICAgIGVuZDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgW3Byb21SdWxlLCBzdHlsZV0pO1xuXG4gIGlmIChpc0RlbGV0aW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIDxTcGlubmVyIC8+XG4gICAgICAgIGRlbGV0aW5nXG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9IGVsc2UgaWYgKGlzQ3JlYXRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgY3JlYXRpbmdcbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH0gZWxzZSBpZiAocHJvbVJ1bGUgJiYgaXNBbGVydGluZ1J1bGUocHJvbVJ1bGUpKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIDxBbGVydFN0YXRlVGFnIHN0YXRlPXtwcm9tUnVsZS5zdGF0ZX0gLz5cbiAgICAgICAge2ZvclRpbWV9XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICApO1xuICB9IGVsc2UgaWYgKHByb21SdWxlICYmIGlzUmVjb3JkaW5nUnVsZShwcm9tUnVsZSkpIHtcbiAgICByZXR1cm4gPD5SZWNvcmRpbmcgcnVsZTwvPjtcbiAgfVxuICByZXR1cm4gPD5uL2E8Lz47XG59O1xuXG5jb25zdCBnZXRTdHlsZSA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZm9yOiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBGcmFnbWVudCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBDb21iaW5lZFJ1bGVHcm91cCwgQ29tYmluZWRSdWxlTmFtZXNwYWNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzUmVjb3JkaW5nUnVsZSwgaXNSZWNvcmRpbmdSdWxlclJ1bGUgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyBTdGF0ZUNvbG9yZWRUZXh0IH0gZnJvbSAnLi4vU3RhdGVDb2xvcmVkVGV4dCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNob3dJbmFjdGl2ZT86IGJvb2xlYW47XG4gIHNob3dSZWNvcmRpbmc/OiBib29sZWFuO1xuICBncm91cD86IENvbWJpbmVkUnVsZUdyb3VwO1xuICBuYW1lc3BhY2VzPzogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG59XG5cbmNvbnN0IGVtcHR5U3RhdHMgPSB7XG4gIHRvdGFsOiAwLFxuICByZWNvcmRpbmc6IDAsXG4gIFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuRmlyaW5nXTogMCxcbiAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nXTogMCxcbiAgW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZV06IDAsXG4gIGVycm9yOiAwLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IFJ1bGVTdGF0czogRkM8UHJvcHM+ID0gKHsgc2hvd0luYWN0aXZlLCBzaG93UmVjb3JkaW5nLCBncm91cCwgbmFtZXNwYWNlcyB9KSA9PiB7XG4gIGNvbnN0IGNhbGN1bGF0ZWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBzdGF0cyA9IHsgLi4uZW1wdHlTdGF0cyB9O1xuICAgIGNvbnN0IGNhbGNSdWxlID0gKHJ1bGU6IENvbWJpbmVkUnVsZSkgPT4ge1xuICAgICAgaWYgKHJ1bGUucHJvbVJ1bGUgJiYgaXNBbGVydGluZ1J1bGUocnVsZS5wcm9tUnVsZSkpIHtcbiAgICAgICAgc3RhdHNbcnVsZS5wcm9tUnVsZS5zdGF0ZV0gKz0gMTtcbiAgICAgIH1cbiAgICAgIGlmIChydWxlLnByb21SdWxlPy5oZWFsdGggPT09ICdlcnInIHx8IHJ1bGUucHJvbVJ1bGU/LmhlYWx0aCA9PT0gJ2Vycm9yJykge1xuICAgICAgICBzdGF0cy5lcnJvciArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAocnVsZS5wcm9tUnVsZSAmJiBpc1JlY29yZGluZ1J1bGUocnVsZS5wcm9tUnVsZSkpIHx8XG4gICAgICAgIChydWxlLnJ1bGVyUnVsZSAmJiBpc1JlY29yZGluZ1J1bGVyUnVsZShydWxlLnJ1bGVyUnVsZSkpXG4gICAgICApIHtcbiAgICAgICAgc3RhdHMucmVjb3JkaW5nICs9IDE7XG4gICAgICB9XG4gICAgICBzdGF0cy50b3RhbCArPSAxO1xuICAgIH07XG4gICAgaWYgKGdyb3VwKSB7XG4gICAgICBncm91cC5ydWxlcy5mb3JFYWNoKGNhbGNSdWxlKTtcbiAgICB9XG4gICAgaWYgKG5hbWVzcGFjZXMpIHtcbiAgICAgIG5hbWVzcGFjZXMuZm9yRWFjaCgobmFtZXNwYWNlKSA9PiBuYW1lc3BhY2UuZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiBncm91cC5ydWxlcy5mb3JFYWNoKGNhbGNSdWxlKSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdHM7XG4gIH0sIFtncm91cCwgbmFtZXNwYWNlc10pO1xuXG4gIGNvbnN0IHN0YXRzQ29tcG9uZW50czogUmVhY3QuUmVhY3ROb2RlW10gPSBbXTtcbiAgaWYgKGNhbGN1bGF0ZWRbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZ10pIHtcbiAgICBzdGF0c0NvbXBvbmVudHMucHVzaChcbiAgICAgIDxTdGF0ZUNvbG9yZWRUZXh0IGtleT1cImZpcmluZ1wiIHN0YXR1cz17UHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkZpcmluZ30+XG4gICAgICAgIHtjYWxjdWxhdGVkW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmddfSBmaXJpbmdcbiAgICAgIDwvU3RhdGVDb2xvcmVkVGV4dD5cbiAgICApO1xuICB9XG4gIGlmIChjYWxjdWxhdGVkLmVycm9yKSB7XG4gICAgc3RhdHNDb21wb25lbnRzLnB1c2goXG4gICAgICA8U3RhdGVDb2xvcmVkVGV4dCBrZXk9XCJlcnJvcnNcIiBzdGF0dXM9e1Byb21BbGVydGluZ1J1bGVTdGF0ZS5GaXJpbmd9PlxuICAgICAgICB7Y2FsY3VsYXRlZC5lcnJvcn0gZXJyb3JzXG4gICAgICA8L1N0YXRlQ29sb3JlZFRleHQ+XG4gICAgKTtcbiAgfVxuICBpZiAoY2FsY3VsYXRlZFtQcm9tQWxlcnRpbmdSdWxlU3RhdGUuUGVuZGluZ10pIHtcbiAgICBzdGF0c0NvbXBvbmVudHMucHVzaChcbiAgICAgIDxTdGF0ZUNvbG9yZWRUZXh0IGtleT1cInBlbmRpbmdcIiBzdGF0dXM9e1Byb21BbGVydGluZ1J1bGVTdGF0ZS5QZW5kaW5nfT5cbiAgICAgICAge2NhbGN1bGF0ZWRbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLlBlbmRpbmddfSBwZW5kaW5nXG4gICAgICA8L1N0YXRlQ29sb3JlZFRleHQ+XG4gICAgKTtcbiAgfVxuICBpZiAoc2hvd0luYWN0aXZlICYmIGNhbGN1bGF0ZWRbUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkluYWN0aXZlXSkge1xuICAgIHN0YXRzQ29tcG9uZW50cy5wdXNoKFxuICAgICAgPFN0YXRlQ29sb3JlZFRleHQga2V5PVwiaW5hY3RpdmVcIiBzdGF0dXM9XCJuZXV0cmFsXCI+XG4gICAgICAgIHtjYWxjdWxhdGVkW1Byb21BbGVydGluZ1J1bGVTdGF0ZS5JbmFjdGl2ZV19IG5vcm1hbFxuICAgICAgPC9TdGF0ZUNvbG9yZWRUZXh0PlxuICAgICk7XG4gIH1cbiAgaWYgKHNob3dSZWNvcmRpbmcgJiYgY2FsY3VsYXRlZC5yZWNvcmRpbmcpIHtcbiAgICBzdGF0c0NvbXBvbmVudHMucHVzaChcbiAgICAgIDxTdGF0ZUNvbG9yZWRUZXh0IGtleT1cInJlY29yZGluZ1wiIHN0YXR1cz1cIm5ldXRyYWxcIj5cbiAgICAgICAge2NhbGN1bGF0ZWQucmVjb3JkaW5nfSByZWNvcmRpbmdcbiAgICAgIDwvU3RhdGVDb2xvcmVkVGV4dD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+XG4gICAgICAgIHtjYWxjdWxhdGVkLnRvdGFsfSB7cGx1cmFsaXplKCdydWxlJywgY2FsY3VsYXRlZC50b3RhbCl9XG4gICAgICA8L3NwYW4+XG4gICAgICB7ISFzdGF0c0NvbXBvbmVudHMubGVuZ3RoICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3Bhbj46IDwvc3Bhbj5cbiAgICAgICAgICB7c3RhdHNDb21wb25lbnRzLnJlZHVjZTxSZWFjdC5SZWFjdE5vZGVbXT4oXG4gICAgICAgICAgICAocHJldiwgY3VyciwgaWR4KSA9PlxuICAgICAgICAgICAgICBwcmV2Lmxlbmd0aFxuICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICBwcmV2LFxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiwgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PixcbiAgICAgICAgICAgICAgICAgICAgY3VycixcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IFtjdXJyXSxcbiAgICAgICAgICAgIFtdXG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBHcmFmYW5hVGhlbWUsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBpY2tlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgSWNvbiwgSW5wdXQsIExhYmVsLCBSYWRpb0J1dHRvbkdyb3VwLCBUb29sdGlwLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCB7IFByb21BbGVydGluZ1J1bGVTdGF0ZSwgUHJvbVJ1bGVUeXBlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IGFsZXJ0U3RhdGVUb1JlYWRhYmxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuXG5jb25zdCBWaWV3T3B0aW9uczogU2VsZWN0YWJsZVZhbHVlW10gPSBbXG4gIHtcbiAgICBpY29uOiAnbGlzdC11bCcsXG4gICAgbGFiZWw6ICdMaXN0JyxcbiAgICB2YWx1ZTogJ2xpc3QnLFxuICB9LFxuICB7XG4gICAgaWNvbjogJ2ZvbGRlcicsXG4gICAgbGFiZWw6ICdHcm91cGVkJyxcbiAgICB2YWx1ZTogJ2dyb3VwZWQnLFxuICB9LFxuICB7XG4gICAgaWNvbjogJ2hlYXJ0LXJhdGUnLFxuICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgIHZhbHVlOiAnc3RhdGUnLFxuICB9LFxuXTtcblxuY29uc3QgUnVsZVR5cGVPcHRpb25zOiBTZWxlY3RhYmxlVmFsdWVbXSA9IFtcbiAge1xuICAgIGxhYmVsOiAnQWxlcnQgJyxcbiAgICB2YWx1ZTogUHJvbVJ1bGVUeXBlLkFsZXJ0aW5nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdSZWNvcmRpbmcgJyxcbiAgICB2YWx1ZTogUHJvbVJ1bGVUeXBlLlJlY29yZGluZyxcbiAgfSxcbl07XG5cbmNvbnN0IFJ1bGVzRmlsdGVyID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcnlQYXJhbXMsIHNldFF1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIC8vIFRoaXMga2V5IGlzIHVzZWQgdG8gZm9yY2UgYSByZXJlbmRlciBvbiB0aGUgaW5wdXRzIHdoZW4gdGhlIGZpbHRlcnMgYXJlIGNsZWFyZWRcbiAgY29uc3QgW2ZpbHRlcktleSwgc2V0RmlsdGVyS2V5XSA9IHVzZVN0YXRlPG51bWJlcj4oTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSk7XG4gIGNvbnN0IGRhdGFTb3VyY2VLZXkgPSBgZGF0YVNvdXJjZS0ke2ZpbHRlcktleX1gO1xuICBjb25zdCBxdWVyeVN0cmluZ0tleSA9IGBxdWVyeVN0cmluZy0ke2ZpbHRlcktleX1gO1xuXG4gIGNvbnN0IHsgZGF0YVNvdXJjZSwgYWxlcnRTdGF0ZSwgcXVlcnlTdHJpbmcsIHJ1bGVUeXBlIH0gPSBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IHN0YXRlT3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKFByb21BbGVydGluZ1J1bGVTdGF0ZSkubWFwKChba2V5LCB2YWx1ZV0pID0+ICh7XG4gICAgbGFiZWw6IGFsZXJ0U3RhdGVUb1JlYWRhYmxlKHZhbHVlKSxcbiAgICB2YWx1ZSxcbiAgfSkpO1xuXG4gIGNvbnN0IGhhbmRsZURhdGFTb3VyY2VDaGFuZ2UgPSAoZGF0YVNvdXJjZVZhbHVlOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykgPT4ge1xuICAgIHNldFF1ZXJ5UGFyYW1zKHsgZGF0YVNvdXJjZTogZGF0YVNvdXJjZVZhbHVlLm5hbWUgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJEYXRhU291cmNlID0gKCkgPT4ge1xuICAgIHNldFF1ZXJ5UGFyYW1zKHsgZGF0YVNvdXJjZTogbnVsbCB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVRdWVyeVN0cmluZ0NoYW5nZSA9IGRlYm91bmNlKChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHNldFF1ZXJ5UGFyYW1zKHsgcXVlcnlTdHJpbmc6IHRhcmdldC52YWx1ZSB8fCBudWxsIH0pO1xuICB9LCA2MDApO1xuXG4gIGNvbnN0IGhhbmRsZUFsZXJ0U3RhdGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHNldFF1ZXJ5UGFyYW1zKHsgYWxlcnRTdGF0ZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVmlld0NoYW5nZSA9ICh2aWV3OiBzdHJpbmcpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IHZpZXcgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUnVsZVR5cGVDaGFuZ2UgPSAocnVsZVR5cGU6IFByb21SdWxlVHlwZSkgPT4ge1xuICAgIHNldFF1ZXJ5UGFyYW1zKHsgcnVsZVR5cGUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xlYXJGaWx0ZXJzQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0UXVlcnlQYXJhbXMoe1xuICAgICAgYWxlcnRTdGF0ZTogbnVsbCxcbiAgICAgIHF1ZXJ5U3RyaW5nOiBudWxsLFxuICAgICAgZGF0YVNvdXJjZTogbnVsbCxcbiAgICAgIHJ1bGVUeXBlOiBudWxsLFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RmlsdGVyS2V5KGZpbHRlcktleSArIDEpLCAxMDApO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaEljb24gPSA8SWNvbiBuYW1lPXsnc2VhcmNoJ30gLz47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEZpZWxkIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0V2lkdGh9IGxhYmVsPVwiU2VhcmNoIGJ5IGRhdGEgc291cmNlXCI+XG4gICAgICAgIDxEYXRhU291cmNlUGlja2VyXG4gICAgICAgICAga2V5PXtkYXRhU291cmNlS2V5fVxuICAgICAgICAgIGFsZXJ0aW5nXG4gICAgICAgICAgbm9EZWZhdWx0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbGwgZGF0YSBzb3VyY2VzXCJcbiAgICAgICAgICBjdXJyZW50PXtkYXRhU291cmNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEYXRhU291cmNlQ2hhbmdlfVxuICAgICAgICAgIG9uQ2xlYXI9e2NsZWFyRGF0YVNvdXJjZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3csIHN0eWxlcy5zcGFjZUJldHdlZW4pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfVxuICAgICAgICAgICAgbGFiZWw9e1xuICAgICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgICAgPFN0YWNrIGdhcD17MC41fT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCBieSBsYWJlbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXIgcnVsZXMgYW5kIGFsZXJ0cyB1c2luZyBsYWJlbCBxdWVyeWluZywgZXg6XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57YHtzZXZlcml0eT1cImNyaXRpY2FsXCIsIGluc3RhbmNlPX5cImNsdXN0ZXItdXMtLitcIn1gfTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaW5mby1jaXJjbGVcIiBzaXplPVwic21cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGtleT17cXVlcnlTdHJpbmdLZXl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0V2lkdGh9XG4gICAgICAgICAgICAgIHByZWZpeD17c2VhcmNoSWNvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1ZXJ5U3RyaW5nQ2hhbmdlfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3F1ZXJ5U3RyaW5nfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoLXF1ZXJ5LWlucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfT5cbiAgICAgICAgICAgIDxMYWJlbD5TdGF0ZTwvTGFiZWw+XG4gICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCBvcHRpb25zPXtzdGF0ZU9wdGlvbnN9IHZhbHVlPXthbGVydFN0YXRlfSBvbkNoYW5nZT17aGFuZGxlQWxlcnRTdGF0ZUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfT5cbiAgICAgICAgICAgIDxMYWJlbD5SdWxlIHR5cGU8L0xhYmVsPlxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgb3B0aW9ucz17UnVsZVR5cGVPcHRpb25zfVxuICAgICAgICAgICAgICB2YWx1ZT17cnVsZVR5cGUgYXMgUHJvbVJ1bGVUeXBlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUnVsZVR5cGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93Q2hpbGR9PlxuICAgICAgICAgICAgPExhYmVsPlZpZXcgYXM8L0xhYmVsPlxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcbiAgICAgICAgICAgICAgb3B0aW9ucz17Vmlld09wdGlvbnN9XG4gICAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcocXVlcnlQYXJhbXNbJ3ZpZXcnXSA/PyBWaWV3T3B0aW9uc1swXS52YWx1ZSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVWaWV3Q2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsoZGF0YVNvdXJjZSB8fCBhbGVydFN0YXRlIHx8IHF1ZXJ5U3RyaW5nIHx8IHJ1bGVUeXBlKSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJCdXR0b259XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aD17ZmFsc2V9XG4gICAgICAgICAgICAgIGljb249XCJ0aW1lc1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGVhckZpbHRlcnNDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xlYXIgZmlsdGVyc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIGlucHV0V2lkdGg6IGNzc2BcbiAgICAgIHdpZHRoOiAzNDBweDtcbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICBgLFxuICAgIGZsZXhSb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYCxcbiAgICBzcGFjZUJldHdlZW46IGNzc2BcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBgLFxuICAgIHJvd0NoaWxkOiBjc3NgXG4gICAgICBtYXJnaW46IDAgJHt0aGVtZS5zcGFjaW5nLnNtfSAwIDA7XG4gICAgYCxcbiAgICBjbGVhckJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZXNGaWx0ZXI7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhZGdlLCBDb25maXJtTW9kYWwsIEhvcml6b250YWxHcm91cCwgSWNvbiwgU3Bpbm5lciwgVG9vbHRpcCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQga2JuIGZyb20gJ2FwcC9jb3JlL3V0aWxzL2tibic7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZUdyb3VwLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5cbmltcG9ydCB7IHVzZUZvbGRlciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUZvbGRlcic7XG5pbXBvcnQgeyB1c2VIYXNSdWxlciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUhhc1J1bGVyJztcbmltcG9ydCB7IGRlbGV0ZVJ1bGVzR3JvdXBBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsIGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNGZWRlcmF0ZWRSdWxlR3JvdXAsIGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcbmltcG9ydCB7IENvbGxhcHNlVG9nZ2xlIH0gZnJvbSAnLi4vQ29sbGFwc2VUb2dnbGUnO1xuaW1wb3J0IHsgUnVsZUxvY2F0aW9uIH0gZnJvbSAnLi4vUnVsZUxvY2F0aW9uJztcblxuaW1wb3J0IHsgQWN0aW9uSWNvbiB9IGZyb20gJy4vQWN0aW9uSWNvbic7XG5pbXBvcnQgeyBFZGl0Q2xvdWRHcm91cE1vZGFsIH0gZnJvbSAnLi9FZGl0Q2xvdWRHcm91cE1vZGFsJztcbmltcG9ydCB7IFJ1bGVTdGF0cyB9IGZyb20gJy4vUnVsZVN0YXRzJztcbmltcG9ydCB7IFJ1bGVzVGFibGUgfSBmcm9tICcuL1J1bGVzVGFibGUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZTtcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwO1xuICBleHBhbmRBbGw6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlc0dyb3VwOiBGQzxQcm9wcz4gPSBSZWFjdC5tZW1vKCh7IGdyb3VwLCBuYW1lc3BhY2UsIGV4cGFuZEFsbCB9KSA9PiB7XG4gIGNvbnN0IHsgcnVsZXNTb3VyY2UgfSA9IG5hbWVzcGFjZTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgW2lzRWRpdGluZ0dyb3VwLCBzZXRJc0VkaXRpbmdHcm91cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0RlbGV0aW5nR3JvdXAsIHNldElzRGVsZXRpbmdHcm91cF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0NvbGxhcHNlZCwgc2V0SXNDb2xsYXBzZWRdID0gdXNlU3RhdGUoIWV4cGFuZEFsbCk7XG5cbiAgY29uc3QgY2FuRWRpdENsb3VkUnVsZXMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BbGVydGluZ1J1bGVFeHRlcm5hbFdyaXRlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzQ29sbGFwc2VkKCFleHBhbmRBbGwpO1xuICB9LCBbZXhwYW5kQWxsXSk7XG5cbiAgY29uc3QgaGFzUnVsZXIgPSB1c2VIYXNSdWxlcigpO1xuICBjb25zdCBydWxlclJ1bGUgPSBncm91cC5ydWxlc1swXT8ucnVsZXJSdWxlO1xuICBjb25zdCBmb2xkZXJVSUQgPSAocnVsZXJSdWxlICYmIGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlclJ1bGUpICYmIHJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0Lm5hbWVzcGFjZV91aWQpIHx8IHVuZGVmaW5lZDtcbiAgY29uc3QgeyBmb2xkZXIgfSA9IHVzZUZvbGRlcihmb2xkZXJVSUQpO1xuXG4gIC8vIGdyb3VwIFwiaXMgZGVsZXRpbmdcIiBpZiBydWxlcyBzb3VyY2UgaGFzIHJ1bGVyLCBidXQgdGhpcyBncm91cCBoYXMgbm8gcnVsZXMgdGhhdCBhcmUgaW4gcnVsZXJcbiAgY29uc3QgaXNEZWxldGluZyA9IGhhc1J1bGVyKHJ1bGVzU291cmNlKSAmJiAhZ3JvdXAucnVsZXMuZmluZCgocnVsZSkgPT4gISFydWxlLnJ1bGVyUnVsZSk7XG4gIGNvbnN0IGlzRmVkZXJhdGVkID0gaXNGZWRlcmF0ZWRSdWxlR3JvdXAoZ3JvdXApO1xuXG4gIGNvbnN0IGRlbGV0ZUdyb3VwID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGRlbGV0ZVJ1bGVzR3JvdXBBY3Rpb24obmFtZXNwYWNlLCBncm91cCkpO1xuICAgIHNldElzRGVsZXRpbmdHcm91cChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgYWN0aW9uSWNvbnM6IFJlYWN0LlJlYWN0Tm9kZVtdID0gW107XG5cbiAgLy8gZm9yIGdyYWZhbmEsIGxpbmsgdG8gZm9sZGVyIHZpZXdzXG4gIGlmIChpc0RlbGV0aW5nKSB7XG4gICAgYWN0aW9uSWNvbnMucHVzaChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAga2V5PVwiaXMtZGVsZXRpbmdcIj5cbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgZGVsZXRpbmdcbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH0gZWxzZSBpZiAocnVsZXNTb3VyY2UgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpIHtcbiAgICBpZiAoZm9sZGVyVUlEKSB7XG4gICAgICBjb25zdCBiYXNlVXJsID0gYC9kYXNoYm9hcmRzL2YvJHtmb2xkZXJVSUR9LyR7a2JuLnNsdWdpZnlGb3JVcmwobmFtZXNwYWNlLm5hbWUpfWA7XG4gICAgICBpZiAoZm9sZGVyPy5jYW5TYXZlKSB7XG4gICAgICAgIGFjdGlvbkljb25zLnB1c2goXG4gICAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJlZGl0IGZvbGRlclwiXG4gICAgICAgICAgICBrZXk9XCJlZGl0XCJcbiAgICAgICAgICAgIGljb249XCJwZW5cIlxuICAgICAgICAgICAgdG9vbHRpcD1cImVkaXQgZm9sZGVyXCJcbiAgICAgICAgICAgIHRvPXtiYXNlVXJsICsgJy9zZXR0aW5ncyd9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGZvbGRlcj8uY2FuQWRtaW4pIHtcbiAgICAgICAgYWN0aW9uSWNvbnMucHVzaChcbiAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1hbmFnZSBwZXJtaXNzaW9uc1wiXG4gICAgICAgICAgICBrZXk9XCJtYW5hZ2UtcGVybXNcIlxuICAgICAgICAgICAgaWNvbj1cImxvY2tcIlxuICAgICAgICAgICAgdG9vbHRpcD1cIm1hbmFnZSBwZXJtaXNzaW9uc1wiXG4gICAgICAgICAgICB0bz17YmFzZVVybCArICcvcGVybWlzc2lvbnMnfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoY2FuRWRpdENsb3VkUnVsZXMgJiYgaGFzUnVsZXIocnVsZXNTb3VyY2UpKSB7XG4gICAgaWYgKCFpc0ZlZGVyYXRlZCkge1xuICAgICAgYWN0aW9uSWNvbnMucHVzaChcbiAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZWRpdCBydWxlIGdyb3VwXCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImVkaXQtZ3JvdXBcIlxuICAgICAgICAgIGtleT1cImVkaXRcIlxuICAgICAgICAgIGljb249XCJwZW5cIlxuICAgICAgICAgIHRvb2x0aXA9XCJlZGl0IHJ1bGUgZ3JvdXBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdGluZ0dyb3VwKHRydWUpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBhY3Rpb25JY29ucy5wdXNoKFxuICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZSBydWxlIGdyb3VwXCJcbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJkZWxldGUtZ3JvdXBcIlxuICAgICAgICBrZXk9XCJkZWxldGUtZ3JvdXBcIlxuICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgdG9vbHRpcD1cImRlbGV0ZSBydWxlIGdyb3VwXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNEZWxldGluZ0dyb3VwKHRydWUpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgLy8gdW5ncm91cGVkIHJ1bGVzIGFyZSBydWxlcyB0aGF0IGFyZSBpbiB0aGUgXCJkZWZhdWx0XCIgZ3JvdXAgbmFtZVxuICBjb25zdCBpc1VuZ3JvdXBlZCA9IGdyb3VwLm5hbWUgPT09ICdkZWZhdWx0JztcbiAgY29uc3QgZ3JvdXBOYW1lID0gaXNVbmdyb3VwZWQgPyAoXG4gICAgPFJ1bGVMb2NhdGlvbiBuYW1lc3BhY2U9e25hbWVzcGFjZS5uYW1lfSAvPlxuICApIDogKFxuICAgIDxSdWxlTG9jYXRpb24gbmFtZXNwYWNlPXtuYW1lc3BhY2UubmFtZX0gZ3JvdXA9e2dyb3VwLm5hbWV9IC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IGRhdGEtdGVzdGlkPVwicnVsZS1ncm91cFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9IGRhdGEtdGVzdGlkPVwicnVsZS1ncm91cC1oZWFkZXJcIj5cbiAgICAgICAgPENvbGxhcHNlVG9nZ2xlXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2VUb2dnbGV9XG4gICAgICAgICAgaXNDb2xsYXBzZWQ9e2lzQ29sbGFwc2VkfVxuICAgICAgICAgIG9uVG9nZ2xlPXtzZXRJc0NvbGxhcHNlZH1cbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImdyb3VwLWNvbGxhcHNlLXRvZ2dsZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxJY29uIG5hbWU9e2lzQ29sbGFwc2VkID8gJ2ZvbGRlcicgOiAnZm9sZGVyLW9wZW4nfSAvPlxuICAgICAgICB7aXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSAmJiAoXG4gICAgICAgICAgPFRvb2x0aXAgY29udGVudD17cnVsZXNTb3VyY2UubmFtZX0gcGxhY2VtZW50PVwidG9wXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGFsdD17cnVsZXNTb3VyY2UubWV0YS5uYW1lfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlSWNvbn1cbiAgICAgICAgICAgICAgc3JjPXtydWxlc1NvdXJjZS5tZXRhLmluZm8ubG9nb3Muc21hbGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKX1cbiAgICAgICAgPGg2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICAgIHtpc0ZlZGVyYXRlZCAmJiA8QmFkZ2UgY29sb3I9XCJwdXJwbGVcIiB0ZXh0PVwiRmVkZXJhdGVkXCIgLz59IHtncm91cE5hbWV9XG4gICAgICAgIDwvaDY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BhY2VyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclN0YXRzfT5cbiAgICAgICAgICA8UnVsZVN0YXRzIHNob3dJbmFjdGl2ZT17ZmFsc2V9IGdyb3VwPXtncm91cH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshIWFjdGlvbkljb25zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc1NlcGFyYXRvcn0+fDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25JY29uc30+e2FjdGlvbkljb25zfTwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7IWlzQ29sbGFwc2VkICYmIChcbiAgICAgICAgPFJ1bGVzVGFibGUgc2hvd1N1bW1hcnlDb2x1bW49e3RydWV9IGNsYXNzTmFtZT17c3R5bGVzLnJ1bGVzVGFibGV9IHNob3dHdWlkZWxpbmVzPXt0cnVlfSBydWxlcz17Z3JvdXAucnVsZXN9IC8+XG4gICAgICApfVxuICAgICAge2lzRWRpdGluZ0dyb3VwICYmIChcbiAgICAgICAgPEVkaXRDbG91ZEdyb3VwTW9kYWwgZ3JvdXA9e2dyb3VwfSBuYW1lc3BhY2U9e25hbWVzcGFjZX0gb25DbG9zZT17KCkgPT4gc2V0SXNFZGl0aW5nR3JvdXAoZmFsc2UpfSAvPlxuICAgICAgKX1cbiAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgaXNPcGVuPXtpc0RlbGV0aW5nR3JvdXB9XG4gICAgICAgIHRpdGxlPVwiRGVsZXRlIGdyb3VwXCJcbiAgICAgICAgYm9keT17XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIERlbGV0aW5nIHRoaXMgZ3JvdXAgd2lsbCBwZXJtYW5lbnRseSByZW1vdmUgdGhlIGdyb3VwXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIGFuZCB7Z3JvdXAucnVsZXMubGVuZ3RofSBhbGVydCB7cGx1cmFsaXplKCdydWxlJywgZ3JvdXAucnVsZXMubGVuZ3RoKX0gYmVsb25naW5nIHRvIGl0LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZ3JvdXA/XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgb25Db25maXJtPXtkZWxldGVHcm91cH1cbiAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRJc0RlbGV0aW5nR3JvdXAoZmFsc2UpfVxuICAgICAgICBjb25maXJtVGV4dD1cIkRlbGV0ZVwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cblJ1bGVzR3JvdXAuZGlzcGxheU5hbWUgPSAnUnVsZXNHcm91cCc7XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIH1cbiAgYCxcbiAgaGVhZGVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfSAke3RoZW1lLnNwYWNpbmcoMSl9ICR7dGhlbWUuc3BhY2luZygxKX0gMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICBgLFxuICBoZWFkZXJTdGF0czogY3NzYFxuICAgIHNwYW4ge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAke3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyl9IHtcbiAgICAgIG9yZGVyOiAyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuICBgLFxuICBoZWFkaW5nOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYCxcbiAgc3BhY2VyOiBjc3NgXG4gICAgZmxleDogMTtcbiAgYCxcbiAgY29sbGFwc2VUb2dnbGU6IGNzc2BcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAtJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBtYXJnaW4tYm90dG9tOiAtJHt0aGVtZS5zcGFjaW5nKDEpfTtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgYCxcbiAgZGF0YVNvdXJjZUljb246IGNzc2BcbiAgICB3aWR0aDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBoZWlnaHQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG4gIGRhdGFTb3VyY2VPcmlnaW46IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5kaXNhYmxlZH07XG4gIGAsXG4gIGFjdGlvbnNTZXBhcmF0b3I6IGNzc2BcbiAgICBtYXJnaW46IDAgJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbiAgYWN0aW9uSWNvbnM6IGNzc2BcbiAgICAmID4gKiArICoge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICB9XG4gIGAsXG4gIHJ1bGVzVGFibGU6IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENvbWJpbmVkUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgdXNlSGFzUnVsZXIgfSBmcm9tICcuLi8uLi9ob29rcy91c2VIYXNSdWxlcic7XG5pbXBvcnQgeyBBbm5vdGF0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IER5bmFtaWNUYWJsZSwgRHluYW1pY1RhYmxlQ29sdW1uUHJvcHMsIER5bmFtaWNUYWJsZUl0ZW1Qcm9wcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZSc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzJztcbmltcG9ydCB7IFJ1bGVMb2NhdGlvbiB9IGZyb20gJy4uL1J1bGVMb2NhdGlvbic7XG5cbmltcG9ydCB7IFJ1bGVEZXRhaWxzIH0gZnJvbSAnLi9SdWxlRGV0YWlscyc7XG5pbXBvcnQgeyBSdWxlSGVhbHRoIH0gZnJvbSAnLi9SdWxlSGVhbHRoJztcbmltcG9ydCB7IFJ1bGVTdGF0ZSB9IGZyb20gJy4vUnVsZVN0YXRlJztcblxudHlwZSBSdWxlVGFibGVDb2x1bW5Qcm9wcyA9IER5bmFtaWNUYWJsZUNvbHVtblByb3BzPENvbWJpbmVkUnVsZT47XG50eXBlIFJ1bGVUYWJsZUl0ZW1Qcm9wcyA9IER5bmFtaWNUYWJsZUl0ZW1Qcm9wczxDb21iaW5lZFJ1bGU+O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlczogQ29tYmluZWRSdWxlW107XG4gIHNob3dHdWlkZWxpbmVzPzogYm9vbGVhbjtcbiAgc2hvd0dyb3VwQ29sdW1uPzogYm9vbGVhbjtcbiAgc2hvd1N1bW1hcnlDb2x1bW4/OiBib29sZWFuO1xuICBlbXB0eU1lc3NhZ2U/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVzVGFibGU6IEZDPFByb3BzPiA9ICh7XG4gIHJ1bGVzLFxuICBjbGFzc05hbWUsXG4gIHNob3dHdWlkZWxpbmVzID0gZmFsc2UsXG4gIGVtcHR5TWVzc2FnZSA9ICdObyBydWxlcyBmb3VuZC4nLFxuICBzaG93R3JvdXBDb2x1bW4gPSBmYWxzZSxcbiAgc2hvd1N1bW1hcnlDb2x1bW4gPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IHdyYXBwZXJDbGFzcyA9IGN4KHN0eWxlcy53cmFwcGVyLCBjbGFzc05hbWUsIHsgW3N0eWxlcy53cmFwcGVyTWFyZ2luXTogc2hvd0d1aWRlbGluZXMgfSk7XG5cbiAgY29uc3QgaXRlbXMgPSB1c2VNZW1vKCgpOiBSdWxlVGFibGVJdGVtUHJvcHNbXSA9PiB7XG4gICAgY29uc3Qgc2VlbktleXM6IHN0cmluZ1tdID0gW107XG4gICAgcmV0dXJuIHJ1bGVzLm1hcCgocnVsZSwgcnVsZUlkeCkgPT4ge1xuICAgICAgbGV0IGtleSA9IEpTT04uc3RyaW5naWZ5KFtydWxlLnByb21SdWxlPy50eXBlLCBydWxlLmxhYmVscywgcnVsZS5xdWVyeSwgcnVsZS5uYW1lLCBydWxlLmFubm90YXRpb25zXSk7XG4gICAgICBpZiAoc2VlbktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICBrZXkgKz0gYC0ke3J1bGVJZHh9YDtcbiAgICAgIH1cbiAgICAgIHNlZW5LZXlzLnB1c2goa2V5KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBrZXksXG4gICAgICAgIGRhdGE6IHJ1bGUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbcnVsZXNdKTtcblxuICBjb25zdCBjb2x1bW5zID0gdXNlQ29sdW1ucyhzaG93U3VtbWFyeUNvbHVtbiwgc2hvd0dyb3VwQ29sdW1uKTtcblxuICBpZiAoIXJ1bGVzLmxlbmd0aCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y3god3JhcHBlckNsYXNzLCBzdHlsZXMuZW1wdHlNZXNzYWdlKX0+e2VtcHR5TWVzc2FnZX08L2Rpdj47XG4gIH1cblxuICBjb25zdCBUYWJsZUNvbXBvbmVudCA9IHNob3dHdWlkZWxpbmVzID8gRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXMgOiBEeW5hbWljVGFibGU7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfSBkYXRhLXRlc3RpZD1cInJ1bGVzLXRhYmxlXCI+XG4gICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgY29scz17Y29sdW1uc31cbiAgICAgICAgaXNFeHBhbmRhYmxlPXt0cnVlfVxuICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIHJlbmRlckV4cGFuZGVkQ29udGVudD17KHsgZGF0YTogcnVsZSB9KSA9PiA8UnVsZURldGFpbHMgcnVsZT17cnVsZX0gLz59XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlck1hcmdpbjogY3NzYFxuICAgICR7dGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyl9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cbiAgYCxcbiAgZW1wdHlNZXNzYWdlOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgYCxcbn0pO1xuXG5mdW5jdGlvbiB1c2VDb2x1bW5zKHNob3dTdW1tYXJ5Q29sdW1uOiBib29sZWFuLCBzaG93R3JvdXBDb2x1bW46IGJvb2xlYW4pIHtcbiAgY29uc3QgaGFzUnVsZXIgPSB1c2VIYXNSdWxlcigpO1xuXG4gIHJldHVybiB1c2VNZW1vKCgpOiBSdWxlVGFibGVDb2x1bW5Qcm9wc1tdID0+IHtcbiAgICBjb25zdCBjb2x1bW5zOiBSdWxlVGFibGVDb2x1bW5Qcm9wc1tdID0gW1xuICAgICAge1xuICAgICAgICBpZDogJ3N0YXRlJyxcbiAgICAgICAgbGFiZWw6ICdTdGF0ZScsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICAgICAgcmVuZGVyQ2VsbDogKHsgZGF0YTogcnVsZSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBuYW1lc3BhY2UgfSA9IHJ1bGU7XG4gICAgICAgICAgY29uc3QgeyBydWxlc1NvdXJjZSB9ID0gbmFtZXNwYWNlO1xuICAgICAgICAgIGNvbnN0IHsgcHJvbVJ1bGUsIHJ1bGVyUnVsZSB9ID0gcnVsZTtcbiAgICAgICAgICBjb25zdCBpc0RlbGV0aW5nID0gISEoaGFzUnVsZXIocnVsZXNTb3VyY2UpICYmIHByb21SdWxlICYmICFydWxlclJ1bGUpO1xuICAgICAgICAgIGNvbnN0IGlzQ3JlYXRpbmcgPSAhIShoYXNSdWxlcihydWxlc1NvdXJjZSkgJiYgcnVsZXJSdWxlICYmICFwcm9tUnVsZSk7XG4gICAgICAgICAgcmV0dXJuIDxSdWxlU3RhdGUgcnVsZT17cnVsZX0gaXNEZWxldGluZz17aXNEZWxldGluZ30gaXNDcmVhdGluZz17aXNDcmVhdGluZ30gLz47XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6ICcxNjVweCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ25hbWUnLFxuICAgICAgICBsYWJlbDogJ05hbWUnLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgIHJlbmRlckNlbGw6ICh7IGRhdGE6IHJ1bGUgfSkgPT4gcnVsZS5uYW1lLFxuICAgICAgICBzaXplOiA1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdoZWFsdGgnLFxuICAgICAgICBsYWJlbDogJ0hlYWx0aCcsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICAgICAgcmVuZGVyQ2VsbDogKHsgZGF0YTogeyBwcm9tUnVsZSB9IH0pID0+IChwcm9tUnVsZSA/IDxSdWxlSGVhbHRoIHJ1bGU9e3Byb21SdWxlfSAvPiA6IG51bGwpLFxuICAgICAgICBzaXplOiAnNzVweCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgaWYgKHNob3dTdW1tYXJ5Q29sdW1uKSB7XG4gICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICBpZDogJ3N1bW1hcnknLFxuICAgICAgICBsYWJlbDogJ1N1bW1hcnknLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgIHJlbmRlckNlbGw6ICh7IGRhdGE6IHJ1bGUgfSkgPT4gcnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLnN1bW1hcnldID8/ICcnLFxuICAgICAgICBzaXplOiA1LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzaG93R3JvdXBDb2x1bW4pIHtcbiAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgIGlkOiAnZ3JvdXAnLFxuICAgICAgICBsYWJlbDogJ0dyb3VwJyxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuICAgICAgICByZW5kZXJDZWxsOiAoeyBkYXRhOiBydWxlIH0pID0+IHtcbiAgICAgICAgICBjb25zdCB7IG5hbWVzcGFjZSwgZ3JvdXAgfSA9IHJ1bGU7XG4gICAgICAgICAgLy8gdW5ncm91cGVkIHJ1bGVzIGFyZSBydWxlcyB0aGF0IGFyZSBpbiB0aGUgXCJkZWZhdWx0XCIgZ3JvdXAgbmFtZVxuICAgICAgICAgIGNvbnN0IGlzVW5ncm91cGVkID0gZ3JvdXAubmFtZSA9PT0gJ2RlZmF1bHQnO1xuICAgICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGlzVW5ncm91cGVkID8gKFxuICAgICAgICAgICAgPFJ1bGVMb2NhdGlvbiBuYW1lc3BhY2U9e25hbWVzcGFjZS5uYW1lfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UnVsZUxvY2F0aW9uIG5hbWVzcGFjZT17bmFtZXNwYWNlLm5hbWV9IGdyb3VwPXtncm91cC5uYW1lfSAvPlxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXR1cm4gZ3JvdXBOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiA1LFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9LCBbaGFzUnVsZXIsIHNob3dTdW1tYXJ5Q29sdW1uLCBzaG93R3JvdXBDb2x1bW5dKTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0U3RhdGUsIGRhdGVUaW1lRm9ybWF0LCBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBMb2FkaW5nUGxhY2Vob2xkZXIsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFN0YXRlSGlzdG9yeUl0ZW0sIFN0YXRlSGlzdG9yeUl0ZW1EYXRhIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgR3JhZmFuYUFsZXJ0U3RhdGUsIFByb21BbGVydGluZ1J1bGVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IHVzZU1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZU1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeSc7XG5pbXBvcnQgeyBBbGVydExhYmVsIH0gZnJvbSAnLi4vQWxlcnRMYWJlbCc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGUsIER5bmFtaWNUYWJsZUNvbHVtblByb3BzLCBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9EeW5hbWljVGFibGUnO1xuXG5pbXBvcnQgeyBBbGVydFN0YXRlVGFnIH0gZnJvbSAnLi9BbGVydFN0YXRlVGFnJztcblxudHlwZSBTdGF0ZUhpc3RvcnlSb3dJdGVtID0ge1xuICBpZDogc3RyaW5nO1xuICBzdGF0ZTogUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIHwgR3JhZmFuYUFsZXJ0U3RhdGUgfCBBbGVydFN0YXRlO1xuICB0ZXh0Pzogc3RyaW5nO1xuICBkYXRhPzogU3RhdGVIaXN0b3J5SXRlbURhdGE7XG4gIHRpbWVzdGFtcD86IG51bWJlcjtcbn07XG5cbnR5cGUgU3RhdGVIaXN0b3J5Um93ID0gRHluYW1pY1RhYmxlSXRlbVByb3BzPFN0YXRlSGlzdG9yeVJvd0l0ZW0+O1xuXG5pbnRlcmZhY2UgUnVsZVN0YXRlSGlzdG9yeVByb3BzIHtcbiAgYWxlcnRJZDogc3RyaW5nO1xufVxuXG5jb25zdCBTdGF0ZUhpc3Rvcnk6IEZDPFJ1bGVTdGF0ZUhpc3RvcnlQcm9wcz4gPSAoeyBhbGVydElkIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgcmVzdWx0ID0gW10gfSA9IHVzZU1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeShhbGVydElkKTtcblxuICBpZiAobG9hZGluZyAmJiAhZXJyb3IpIHtcbiAgICByZXR1cm4gPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PXsnTG9hZGluZyBoaXN0b3J5Li4uJ30gLz47XG4gIH1cblxuICBpZiAoZXJyb3IgJiYgIWxvYWRpbmcpIHtcbiAgICByZXR1cm4gPEFsZXJ0IHRpdGxlPXsnRmFpbGVkIHRvIGZldGNoIGFsZXJ0IHN0YXRlIGhpc3RvcnknfT57ZXJyb3IubWVzc2FnZX08L0FsZXJ0PjtcbiAgfVxuXG4gIGNvbnN0IGNvbHVtbnM6IEFycmF5PER5bmFtaWNUYWJsZUNvbHVtblByb3BzPFN0YXRlSGlzdG9yeVJvd0l0ZW0+PiA9IFtcbiAgICB7IGlkOiAnc3RhdGUnLCBsYWJlbDogJ1N0YXRlJywgc2l6ZTogJ21heC1jb250ZW50JywgcmVuZGVyQ2VsbDogcmVuZGVyU3RhdGVDZWxsIH0sXG4gICAgeyBpZDogJ3ZhbHVlJywgbGFiZWw6ICcnLCBzaXplOiAnYXV0bycsIHJlbmRlckNlbGw6IHJlbmRlclZhbHVlQ2VsbCB9LFxuICAgIHsgaWQ6ICd0aW1lc3RhbXAnLCBsYWJlbDogJ1RpbWUnLCBzaXplOiAnbWF4LWNvbnRlbnQnLCByZW5kZXJDZWxsOiByZW5kZXJUaW1lc3RhbXBDZWxsIH0sXG4gIF07XG5cbiAgY29uc3QgaXRlbXM6IFN0YXRlSGlzdG9yeVJvd1tdID0gcmVzdWx0XG4gICAgLnJlZHVjZSgoYWNjOiBTdGF0ZUhpc3RvcnlSb3dJdGVtW10sIGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBhY2MucHVzaCh7XG4gICAgICAgIGlkOiBTdHJpbmcoaXRlbS5pZCksXG4gICAgICAgIHN0YXRlOiBpdGVtLm5ld1N0YXRlLFxuICAgICAgICB0ZXh0OiBpdGVtLnRleHQsXG4gICAgICAgIGRhdGE6IGl0ZW0uZGF0YSxcbiAgICAgICAgdGltZXN0YW1wOiBpdGVtLnVwZGF0ZWQsXG4gICAgICB9KTtcblxuICAgICAgLy8gaWYgdGhlIHByZWNlZGluZyBzdGF0ZSBpcyBub3QgdGhlIHNhbWUsIGNyZWF0ZSBhIHNlcGFyYXRlIHN0YXRlIGVudHJ5IOKAkyB0aGlzIGxpa2VseSBtZWFucyB0aGUgc3RhdGUgd2FzIHJlc2V0XG4gICAgICBpZiAoIWhhc01hdGNoaW5nUHJlY2VkaW5nU3RhdGUoaW5kZXgsIHJlc3VsdCkpIHtcbiAgICAgICAgYWNjLnB1c2goeyBpZDogdW5pcXVlSWQoKSwgc3RhdGU6IGl0ZW0ucHJldlN0YXRlIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKVxuICAgIC5tYXAoKGhpc3RvcnlJdGVtKSA9PiAoe1xuICAgICAgaWQ6IGhpc3RvcnlJdGVtLmlkLFxuICAgICAgZGF0YTogaGlzdG9yeUl0ZW0sXG4gICAgfSkpO1xuXG4gIHJldHVybiA8RHluYW1pY1RhYmxlIGNvbHM9e2NvbHVtbnN9IGl0ZW1zPXtpdGVtc30gLz47XG59O1xuXG5mdW5jdGlvbiByZW5kZXJWYWx1ZUNlbGwoaXRlbTogU3RhdGVIaXN0b3J5Um93KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBpdGVtLmRhdGEuZGF0YT8uZXZhbE1hdGNoZXMgPz8gW107XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2l0ZW0uZGF0YS50ZXh0fVxuICAgICAgPExhYmVsc1dyYXBwZXI+XG4gICAgICAgIHttYXRjaGVzLm1hcCgobWF0Y2gpID0+IChcbiAgICAgICAgICA8QWxlcnRMYWJlbCBrZXk9e21hdGNoLm1ldHJpY30gbGFiZWxLZXk9e21hdGNoLm1ldHJpY30gdmFsdWU9e1N0cmluZyhtYXRjaC52YWx1ZSl9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9MYWJlbHNXcmFwcGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdGF0ZUNlbGwoaXRlbTogU3RhdGVIaXN0b3J5Um93KSB7XG4gIHJldHVybiA8QWxlcnRTdGF0ZVRhZyBzdGF0ZT17aXRlbS5kYXRhLnN0YXRlfSAvPjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZXN0YW1wQ2VsbChpdGVtOiBTdGF0ZUhpc3RvcnlSb3cpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17VGltZXN0YW1wU3R5bGV9PntpdGVtLmRhdGEudGltZXN0YW1wICYmIDxzcGFuPntkYXRlVGltZUZvcm1hdChpdGVtLmRhdGEudGltZXN0YW1wKX08L3NwYW4+fTwvZGl2PlxuICApO1xufVxuXG5jb25zdCBMYWJlbHNXcmFwcGVyOiBGQzx7fT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHsgd3JhcHBlciB9ID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlcn0+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmNvbnN0IFRpbWVzdGFtcFN0eWxlID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgICYgPiAqIHtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICB9XG4gIGAsXG59KTtcblxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGZpZ3VyZSBvdXQgaWYgYSBnaXZlbiBoaXN0b3J5SXRlbSBoYXMgYSBwcmVjZWRpbmcgaGlzdG9yeUl0ZW0gd2hlcmUgdGhlIHN0YXRlcyBtYXRjaCAtIGluIG90aGVyIHdvcmRzXG4vLyB0aGUgbmV3U3RhdGUgb2YgdGhlIHByZXZpb3VzIGhpc3RvcnlJdGVtIGlzIHRoZSBzYW1lIGFzIHRoZSBwcmV2U3RhdGUgb2YgdGhlIGN1cnJlbnQgaGlzdG9yeUl0ZW1cbmZ1bmN0aW9uIGhhc01hdGNoaW5nUHJlY2VkaW5nU3RhdGUoaW5kZXg6IG51bWJlciwgaXRlbXM6IFN0YXRlSGlzdG9yeUl0ZW1bXSk6IGJvb2xlYW4ge1xuICBjb25zdCBjdXJyZW50SGlzdG9yeUl0ZW0gPSBpdGVtc1tpbmRleF07XG4gIGNvbnN0IHByZXZpb3VzSGlzdG9yeUl0ZW0gPSBpdGVtc1tpbmRleCArIDFdO1xuXG4gIGlmICghcHJldmlvdXNIaXN0b3J5SXRlbSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c0hpc3RvcnlJdGVtLm5ld1N0YXRlID09PSBjdXJyZW50SGlzdG9yeUl0ZW0ucHJldlN0YXRlO1xufVxuXG5leHBvcnQgeyBTdGF0ZUhpc3RvcnkgfTtcbiIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tYmluZWRSdWxlLFxuICBDb21iaW5lZFJ1bGVHcm91cCxcbiAgQ29tYmluZWRSdWxlTmFtZXNwYWNlLFxuICBSdWxlLFxuICBSdWxlR3JvdXAsXG4gIFJ1bGVOYW1lc3BhY2UsXG4gIFJ1bGVzU291cmNlLFxufSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8sIFJ1bGVyUnVsZUdyb3VwRFRPLCBSdWxlclJ1bGVzQ29uZmlnRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHtcbiAgZ2V0QWxsUnVsZXNTb3VyY2VzLFxuICBnZXRSdWxlc1NvdXJjZUJ5TmFtZSxcbiAgaXNDbG91ZFJ1bGVzU291cmNlLFxuICBpc0dyYWZhbmFSdWxlc1NvdXJjZSxcbn0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSwgaXNBbGVydGluZ1J1bGVyUnVsZSwgaXNSZWNvcmRpbmdSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmludGVyZmFjZSBDYWNoZVZhbHVlIHtcbiAgcHJvbVJ1bGVzPzogUnVsZU5hbWVzcGFjZVtdO1xuICBydWxlclJ1bGVzPzogUnVsZXJSdWxlc0NvbmZpZ0RUTyB8IG51bGw7XG4gIHJlc3VsdDogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG59XG5cbi8vIHRoaXMgbGl0dGxlIG1vbnN0ZXIgY29tYmluZXMgcHJvbWV0aGV1cyBydWxlcyBhbmQgcnVsZXIgcnVsZXMgdG8gcHJvZHVjZSBhIHVuaWZpZWQgZGF0YSBzdHJ1Y3R1cmVcbi8vIGNhbiBsaW1pdCB0byBhIHNpbmdsZSBydWxlcyBzb3VyY2VcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKHJ1bGVzU291cmNlTmFtZT86IHN0cmluZyk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdIHtcbiAgY29uc3QgcHJvbVJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICBjb25zdCBydWxlclJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcblxuICAvLyBjYWNoZSByZXN1bHRzIHBlciBydWxlcyBzb3VyY2UsIHNvIHdlIG9ubHkgcmVjYWxjdWxhdGUgdGhvc2UgZm9yIHdoaWNoIHJlc3VsdHMgaGF2ZSBhY3R1YWxseSBjaGFuZ2VkXG4gIGNvbnN0IGNhY2hlID0gdXNlUmVmPFJlY29yZDxzdHJpbmcsIENhY2hlVmFsdWU+Pih7fSk7XG5cbiAgY29uc3QgcnVsZXNTb3VyY2VzID0gdXNlTWVtbygoKTogUnVsZXNTb3VyY2VbXSA9PiB7XG4gICAgaWYgKHJ1bGVzU291cmNlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZXNTb3VyY2UgPSBnZXRSdWxlc1NvdXJjZUJ5TmFtZShydWxlc1NvdXJjZU5hbWUpO1xuICAgICAgaWYgKCFydWxlc1NvdXJjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcnVsZXMgc291cmNlOiAke3J1bGVzU291cmNlTmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbcnVsZXNTb3VyY2VdO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0QWxsUnVsZXNTb3VyY2VzKCk7XG4gIH0sIFtydWxlc1NvdXJjZU5hbWVdKTtcblxuICByZXR1cm4gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcnVsZXNTb3VyY2VzXG4gICAgICAgIC5tYXAoKHJ1bGVzU291cmNlKTogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10gPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVzU291cmNlTmFtZSA9IGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgPyBydWxlc1NvdXJjZS5uYW1lIDogcnVsZXNTb3VyY2U7XG4gICAgICAgICAgY29uc3QgcHJvbVJ1bGVzID0gcHJvbVJ1bGVzUmVzcG9uc2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdDtcbiAgICAgICAgICBjb25zdCBydWxlclJ1bGVzID0gcnVsZXJSdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG5cbiAgICAgICAgICBjb25zdCBjYWNoZWQgPSBjYWNoZS5jdXJyZW50W3J1bGVzU291cmNlTmFtZV07XG4gICAgICAgICAgaWYgKGNhY2hlZCAmJiBjYWNoZWQucHJvbVJ1bGVzID09PSBwcm9tUnVsZXMgJiYgY2FjaGVkLnJ1bGVyUnVsZXMgPT09IHJ1bGVyUnVsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQucmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lc3BhY2VzOiBSZWNvcmQ8c3RyaW5nLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2U+ID0ge307XG5cbiAgICAgICAgICAvLyBmaXJzdCBnZXQgYWxsIHRoZSBydWxlciBydWxlcyBpblxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJ1bGVyUnVsZXMgfHwge30pLmZvckVhY2goKFtuYW1lc3BhY2VOYW1lLCBncm91cHNdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSA9IG5hbWVzcGFjZTtcbiAgICAgICAgICAgIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2UsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB0aGVuIGNvcnJlbGF0ZSB3aXRoIHByb21ldGhldXMgcnVsZXNcbiAgICAgICAgICBwcm9tUnVsZXM/LmZvckVhY2goKHsgbmFtZTogbmFtZXNwYWNlTmFtZSwgZ3JvdXBzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5zID0gKG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdIHx8IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobnMsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBPYmplY3QudmFsdWVzKG5hbWVzcGFjZXMpO1xuXG4gICAgICAgICAgY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdID0geyBwcm9tUnVsZXMsIHJ1bGVyUnVsZXMsIHJlc3VsdCB9O1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0KCksXG4gICAgW3Byb21SdWxlc1Jlc3BvbnNlcywgcnVsZXJSdWxlc1Jlc3BvbnNlcywgcnVsZXNTb3VyY2VzXVxuICApO1xufVxuXG4vLyBtZXJnZSBhbGwgZ3JvdXBzIGluIGNhc2Ugb2YgZ3JhZmFuYSBtYW5hZ2VkLCBlc3NlbnRpYWxseSB0cmVhdGluZyBuYW1lc3BhY2VzIChmb2xkZXJzKSBhcyBncm91cHNcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyhuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSkge1xuICByZXR1cm4gbmFtZXNwYWNlcy5tYXAoKG5hbWVzcGFjZSkgPT4ge1xuICAgIGNvbnN0IG5ld05hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlID0ge1xuICAgICAgLi4ubmFtZXNwYWNlLFxuICAgICAgZ3JvdXBzOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gYWRkIGRlZmF1bHQgZ3JvdXAgd2l0aCB1bmdyb3VwZWQgcnVsZXNcbiAgICBuZXdOYW1lc3BhY2UuZ3JvdXBzLnB1c2goe1xuICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgcnVsZXM6IHNvcnRSdWxlc0J5TmFtZShuYW1lc3BhY2UuZ3JvdXBzLmZsYXRNYXAoKGdyb3VwKSA9PiBncm91cC5ydWxlcykpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld05hbWVzcGFjZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0UnVsZXNCeU5hbWUocnVsZXM6IENvbWJpbmVkUnVsZVtdKSB7XG4gIHJldHVybiBydWxlcy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbn1cblxuZnVuY3Rpb24gYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cHM6IFJ1bGVyUnVsZUdyb3VwRFRPW10pOiB2b2lkIHtcbiAgbmFtZXNwYWNlLmdyb3VwcyA9IGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgY29uc3QgY29tYmluZWRHcm91cDogQ29tYmluZWRSdWxlR3JvdXAgPSB7XG4gICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgaW50ZXJ2YWw6IGdyb3VwLmludGVydmFsLFxuICAgICAgc291cmNlX3RlbmFudHM6IGdyb3VwLnNvdXJjZV90ZW5hbnRzLFxuICAgICAgcnVsZXM6IFtdLFxuICAgIH07XG4gICAgY29tYmluZWRHcm91cC5ydWxlcyA9IGdyb3VwLnJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUocnVsZSwgbmFtZXNwYWNlLCBjb21iaW5lZEdyb3VwKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkR3JvdXA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlR3JvdXBbXSk6IHZvaWQge1xuICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBsZXQgY29tYmluZWRHcm91cCA9IG5hbWVzcGFjZS5ncm91cHMuZmluZCgoZykgPT4gZy5uYW1lID09PSBncm91cC5uYW1lKTtcbiAgICBpZiAoIWNvbWJpbmVkR3JvdXApIHtcbiAgICAgIGNvbWJpbmVkR3JvdXAgPSB7XG4gICAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXG4gICAgICAgIHJ1bGVzOiBbXSxcbiAgICAgIH07XG4gICAgICBuYW1lc3BhY2UuZ3JvdXBzLnB1c2goY29tYmluZWRHcm91cCk7XG4gICAgfVxuXG4gICAgKGdyb3VwLnJ1bGVzID8/IFtdKS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1J1bGUgPSBnZXRFeGlzdGluZ1J1bGVJbkdyb3VwKHJ1bGUsIGNvbWJpbmVkR3JvdXAhLCBuYW1lc3BhY2UucnVsZXNTb3VyY2UpO1xuICAgICAgaWYgKGV4aXN0aW5nUnVsZSkge1xuICAgICAgICBleGlzdGluZ1J1bGUucHJvbVJ1bGUgPSBydWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tYmluZWRHcm91cCEucnVsZXMucHVzaChwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCEpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb21SdWxlVG9Db21iaW5lZFJ1bGUocnVsZTogUnVsZSwgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCk6IENvbWJpbmVkUnVsZSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogcnVsZS5uYW1lLFxuICAgIHF1ZXJ5OiBydWxlLnF1ZXJ5LFxuICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgYW5ub3RhdGlvbnM6IGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgIHByb21SdWxlOiBydWxlLFxuICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgIGdyb3VwLFxuICB9O1xufVxuXG5mdW5jdGlvbiBydWxlclJ1bGVUb0NvbWJpbmVkUnVsZShcbiAgcnVsZTogUnVsZXJSdWxlRFRPLFxuICBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwXG4pOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4gaXNBbGVydGluZ1J1bGVyUnVsZShydWxlKVxuICAgID8ge1xuICAgICAgICBuYW1lOiBydWxlLmFsZXJ0LFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczogcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDogaXNSZWNvcmRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5yZWNvcmQsXG4gICAgICAgIHF1ZXJ5OiBydWxlLmV4cHIsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICBuYW1lOiBydWxlLmdyYWZhbmFfYWxlcnQudGl0bGUsXG4gICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH07XG59XG5cbi8vIGZpbmQgZXhpc3RpbmcgcnVsZSBpbiBncm91cCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHByb20gcnVsZVxuZnVuY3Rpb24gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChcbiAgcnVsZTogUnVsZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwLFxuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2Vcbik6IENvbWJpbmVkUnVsZSB8IHVuZGVmaW5lZCB7XG4gIGlmIChpc0dyYWZhbmFSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICAvLyBhc3N1bWUgZ3JhZmFuYSBncm91cHMgaGF2ZSBvbmx5IHRoZSBvbmUgcnVsZS4gY2hlY2sgbmFtZSBhbnl3YXkgYmVjYXVzZSBwYXJhbm9pZFxuICAgIHJldHVybiBncm91cCEucnVsZXMuZmluZCgoZXhpc3RpbmdSdWxlKSA9PiBleGlzdGluZ1J1bGUubmFtZSA9PT0gcnVsZS5uYW1lKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIC8vIHRyeSBmaW5kaW5nIGEgcnVsZSB0aGF0IG1hdGNoZXMgbmFtZSwgbGFiZWxzLCBhbm5vdGF0aW9ucyBhbmQgcXVlcnlcbiAgICBncm91cCEucnVsZXMuZmluZChcbiAgICAgIChleGlzdGluZ1J1bGUpID0+ICFleGlzdGluZ1J1bGUucHJvbVJ1bGUgJiYgaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoZXhpc3RpbmdSdWxlLCBydWxlLCB0cnVlKVxuICAgICkgPz9cbiAgICAvLyBpZiB0aGF0IGZhaWxzLCB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBvbmx5IG1hdGNoZXMgbmFtZSwgbGFiZWxzIGFuZCBhbm5vdGF0aW9ucy5cbiAgICAvLyBsb2tpICYgcHJvbSBjYW4gc29tZXRpbWVzIG1vZGlmeSB0aGUgcXVlcnkgc28gaXQgZG9lc250IG1hdGNoLCBlZyBgMiA+IDFgIGJlY29tZXMgYDFgXG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgZmFsc2UpXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShjb21iaW5lZFJ1bGU6IENvbWJpbmVkUnVsZSwgcnVsZTogUnVsZSwgY2hlY2tRdWVyeSA9IHRydWUpOiBib29sZWFuIHtcbiAgaWYgKGNvbWJpbmVkUnVsZS5uYW1lID09PSBydWxlLm5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KGNvbWJpbmVkUnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgY29tYmluZWRSdWxlLmxhYmVscyxcbiAgICAgICAgY29tYmluZWRSdWxlLmFubm90YXRpb25zLFxuICAgICAgXSkgPT09XG4gICAgICBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIGNoZWNrUXVlcnkgPyBoYXNoUXVlcnkocnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgICAgXSlcbiAgICApO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gdGhlcmUgY2FuIGJlIHNsaWdodCBkaWZmZXJlbmNlcyBpbiBob3cgcHJvbSAmIHJ1bGVyIHJlbmRlciBhIHF1ZXJ5LCB0aGlzIHdpbGwgaGFzaCB0aGVtIGFjY291bnRpbmcgZm9yIHRoZSBkaWZmZXJlbmNlc1xuZnVuY3Rpb24gaGFzaFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgLy8gb25lIG9mIHRoZW0gbWlnaHQgYmUgd3JhcHBlZCBpbiBwYXJlbnNcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDEgJiYgcXVlcnlbMF0gPT09ICcoJyAmJiBxdWVyeVtxdWVyeS5sZW5ndGggLSAxXSA9PT0gJyknKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zbGljZSgxLCAtMSk7XG4gIH1cbiAgLy8gd2hpdGVzcGFjZSBjb3VsZCBiZSBhZGRlZCBvciByZW1vdmVkXG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXFxzfFxcbi9nLCAnJyk7XG4gIC8vIGxhYmVscyBtYXRjaGVycyBjYW4gYmUgcmVvcmRlcmVkLCBzbyBzb3J0IHRoZSBlbml0cmUgc3RyaW5nLCBlc2VudGlhbGx5IGNvbXBhcmluZyBqdXN0IHRoZSBjaGFyYWN0ZXIgY291bnRzXG4gIHJldHVybiBxdWVyeS5zcGxpdCgnJykuc29ydCgpLmpvaW4oJycpO1xufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGVHcm91cCwgQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBGaWx0ZXJTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFByb21SdWxlVHlwZSwgUnVsZXJHcmFmYW5hUnVsZURUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGxhYmVsc01hdGNoTWF0Y2hlcnMsIHBhcnNlTWF0Y2hlcnMgfSBmcm9tICcuLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgaXNDbG91ZFJ1bGVzU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyB9IGZyb20gJy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzR3JhZmFuYVJ1bGVyUnVsZSB9IGZyb20gJy4uL3V0aWxzL3J1bGVzJztcblxuZXhwb3J0IGNvbnN0IHVzZUZpbHRlcmVkUnVsZXMgPSAobmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10pID0+IHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IGZpbHRlcnMgPSBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkTmFtZXNwYWNlcyA9IG5hbWVzcGFjZXNcbiAgICAgIC8vIEZpbHRlciBieSBkYXRhIHNvdXJjZVxuICAgICAgLy8gVE9ETzogZmlsdGVyIGJ5IG11bHRpcGxlIGRhdGEgc291cmNlcyBmb3IgZ3JhZmFuYS1tYW5hZ2VkIGFsZXJ0c1xuICAgICAgLmZpbHRlcigoeyBydWxlc1NvdXJjZSB9KSA9PlxuICAgICAgICBmaWx0ZXJzLmRhdGFTb3VyY2UgJiYgaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSA/IHJ1bGVzU291cmNlLm5hbWUgPT09IGZpbHRlcnMuZGF0YVNvdXJjZSA6IHRydWVcbiAgICAgIClcbiAgICAgIC8vIElmIGEgbmFtZXNwYWNlIGFuZCBncm91cCBoYXZlIHJ1bGVzIHRoYXQgbWF0Y2ggdGhlIHJ1bGVzIGZpbHRlcnMgdGhlbiBrZWVwIHRoZW0uXG4gICAgICAucmVkdWNlKHJlZHVjZU5hbWVzcGFjZXMoZmlsdGVycyksIFtdIGFzIENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdKTtcbiAgICByZXR1cm4gZmlsdGVyZWROYW1lc3BhY2VzO1xuICB9LCBbbmFtZXNwYWNlcywgZmlsdGVyc10pO1xufTtcblxuY29uc3QgcmVkdWNlTmFtZXNwYWNlcyA9IChmaWx0ZXJzOiBGaWx0ZXJTdGF0ZSkgPT4ge1xuICByZXR1cm4gKG5hbWVzcGFjZUFjYzogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10sIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBzID0gbmFtZXNwYWNlLmdyb3Vwcy5yZWR1Y2UocmVkdWNlR3JvdXBzKGZpbHRlcnMpLCBbXSBhcyBDb21iaW5lZFJ1bGVHcm91cFtdKTtcblxuICAgIGlmIChncm91cHMubGVuZ3RoKSB7XG4gICAgICBuYW1lc3BhY2VBY2MucHVzaCh7XG4gICAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXBzLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVzcGFjZUFjYztcbiAgfTtcbn07XG5cbi8vIFJlZHVjZXMgZ3JvdXBzIHRvIG9ubHkgZ3JvdXBzIHRoYXQgaGF2ZSBydWxlcyBtYXRjaGluZyB0aGUgZmlsdGVyc1xuY29uc3QgcmVkdWNlR3JvdXBzID0gKGZpbHRlcnM6IEZpbHRlclN0YXRlKSA9PiB7XG4gIHJldHVybiAoZ3JvdXBBY2M6IENvbWJpbmVkUnVsZUdyb3VwW10sIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCkgPT4ge1xuICAgIGNvbnN0IHJ1bGVzID0gZ3JvdXAucnVsZXMuZmlsdGVyKChydWxlKSA9PiB7XG4gICAgICBpZiAoZmlsdGVycy5ydWxlVHlwZSAmJiBmaWx0ZXJzLnJ1bGVUeXBlICE9PSBydWxlLnByb21SdWxlPy50eXBlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXJzLmRhdGFTb3VyY2UgJiYgaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUucnVsZXJSdWxlKSAmJiAhaXNRdWVyeWluZ0RhdGFTb3VyY2UocnVsZS5ydWxlclJ1bGUsIGZpbHRlcnMpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIFF1ZXJ5IHN0cmluZ3MgY2FuIG1hdGNoIGFsZXJ0IG5hbWUsIGxhYmVsIGtleXMsIGFuZCBsYWJlbCB2YWx1ZXNcbiAgICAgIGlmIChmaWx0ZXJzLnF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeVN0cmluZyA9IGZpbHRlcnMucXVlcnlTdHJpbmcudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgZG9lc05hbWVDb250YWluc1F1ZXJ5U3RyaW5nID0gcnVsZS5uYW1lPy50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKG5vcm1hbGl6ZWRRdWVyeVN0cmluZyk7XG4gICAgICAgIGNvbnN0IG1hdGNoZXJzID0gcGFyc2VNYXRjaGVycyhmaWx0ZXJzLnF1ZXJ5U3RyaW5nKTtcblxuICAgICAgICBjb25zdCBkb1J1bGVMYWJlbHNNYXRjaFF1ZXJ5ID0gbGFiZWxzTWF0Y2hNYXRjaGVycyhydWxlLmxhYmVscywgbWF0Y2hlcnMpO1xuICAgICAgICBjb25zdCBkb0FsZXJ0c0NvbnRhaW5NYXRjaGluZ0xhYmVscyA9XG4gICAgICAgICAgcnVsZS5wcm9tUnVsZSAmJlxuICAgICAgICAgIHJ1bGUucHJvbVJ1bGUudHlwZSA9PT0gUHJvbVJ1bGVUeXBlLkFsZXJ0aW5nICYmXG4gICAgICAgICAgcnVsZS5wcm9tUnVsZS5hbGVydHMgJiZcbiAgICAgICAgICBydWxlLnByb21SdWxlLmFsZXJ0cy5zb21lKChhbGVydCkgPT4gbGFiZWxzTWF0Y2hNYXRjaGVycyhhbGVydC5sYWJlbHMsIG1hdGNoZXJzKSk7XG5cbiAgICAgICAgaWYgKCEoZG9lc05hbWVDb250YWluc1F1ZXJ5U3RyaW5nIHx8IGRvUnVsZUxhYmVsc01hdGNoUXVlcnkgfHwgZG9BbGVydHNDb250YWluTWF0Y2hpbmdMYWJlbHMpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGZpbHRlcnMuYWxlcnRTdGF0ZSAmJlxuICAgICAgICAhKHJ1bGUucHJvbVJ1bGUgJiYgaXNBbGVydGluZ1J1bGUocnVsZS5wcm9tUnVsZSkgJiYgcnVsZS5wcm9tUnVsZS5zdGF0ZSA9PT0gZmlsdGVycy5hbGVydFN0YXRlKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIC8vIEFkZCBydWxlcyB0byB0aGUgZ3JvdXAgdGhhdCBtYXRjaCB0aGUgcnVsZSBsaXN0IGZpbHRlcnNcbiAgICBpZiAocnVsZXMubGVuZ3RoKSB7XG4gICAgICBncm91cEFjYy5wdXNoKHtcbiAgICAgICAgLi4uZ3JvdXAsXG4gICAgICAgIHJ1bGVzLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBncm91cEFjYztcbiAgfTtcbn07XG5cbmNvbnN0IGlzUXVlcnlpbmdEYXRhU291cmNlID0gKHJ1bGVyUnVsZTogUnVsZXJHcmFmYW5hUnVsZURUTywgZmlsdGVyOiBGaWx0ZXJTdGF0ZSk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWZpbHRlci5kYXRhU291cmNlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gISFydWxlclJ1bGUuZ3JhZmFuYV9hbGVydC5kYXRhLmZpbmQoKHF1ZXJ5KSA9PiB7XG4gICAgaWYgKCFxdWVyeS5kYXRhc291cmNlVWlkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGRzID0gZ2V0RGF0YVNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MocXVlcnkuZGF0YXNvdXJjZVVpZCk7XG4gICAgcmV0dXJuIGRzPy5uYW1lID09PSBmaWx0ZXIuZGF0YVNvdXJjZTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEZvbGRlckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi91dGlscy9yZWR1eCc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmludGVyZmFjZSBSZXR1cm5CYWcge1xuICBmb2xkZXI/OiBGb2xkZXJEVE87XG4gIGxvYWRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VGb2xkZXIodWlkPzogc3RyaW5nKTogUmV0dXJuQmFnIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBmb2xkZXJSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9sZGVycyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVpZCkge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hGb2xkZXJJZk5vdEZldGNoZWRBY3Rpb24odWlkKSk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2gsIHVpZF0pO1xuXG4gIGlmICh1aWQpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gZm9sZGVyUmVxdWVzdHNbdWlkXSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvbGRlcjogcmVxdWVzdC5yZXN1bHQsXG4gICAgICBsb2FkaW5nOiByZXF1ZXN0LmxvYWRpbmcsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbi8vIGRhdGFzb3VyY2UgaGFzIHJ1bGVyIGlmIGl0J3MgZ3JhZmFuYSBtYW5hZ2VkIG9yIGlmIHdlJ3JlIGFibGUgdG8gbG9hZCBydWxlcyBmcm9tIGl0XG5leHBvcnQgZnVuY3Rpb24gdXNlSGFzUnVsZXIoKTogKHJ1bGVzU291cmNlOiBzdHJpbmcgfCBSdWxlc1NvdXJjZSkgPT4gYm9vbGVhbiB7XG4gIGNvbnN0IHJ1bGVyUnVsZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJ1bGVyUnVsZXMpO1xuICByZXR1cm4gdXNlQ2FsbGJhY2soXG4gICAgKHJ1bGVzU291cmNlOiBzdHJpbmcgfCBSdWxlc1NvdXJjZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZXNTb3VyY2VOYW1lID0gdHlwZW9mIHJ1bGVzU291cmNlID09PSAnc3RyaW5nJyA/IHJ1bGVzU291cmNlIDogcnVsZXNTb3VyY2UubmFtZTtcbiAgICAgIHJldHVybiBydWxlc1NvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfHwgISFydWxlclJ1bGVzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdDtcbiAgICB9LFxuICAgIFtydWxlclJ1bGVzXVxuICApO1xufVxuIiwiaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IFJ1bGVyUnVsZURUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGdldFJ1bGVzUGVybWlzc2lvbnMgfSBmcm9tICcuLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5pbXBvcnQgeyBpc0dyYWZhbmFSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5cbmltcG9ydCB7IHVzZUZvbGRlciB9IGZyb20gJy4vdXNlRm9sZGVyJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmludGVyZmFjZSBSZXN1bHRCYWcge1xuICBpc0VkaXRhYmxlPzogYm9vbGVhbjtcbiAgaXNSZW1vdmFibGU/OiBib29sZWFuO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlSXNSdWxlRWRpdGFibGUocnVsZXNTb3VyY2VOYW1lOiBzdHJpbmcsIHJ1bGU/OiBSdWxlclJ1bGVEVE8pOiBSZXN1bHRCYWcge1xuICBjb25zdCBkYXRhU291cmNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXMpO1xuICBjb25zdCBmb2xkZXJVSUQgPSBydWxlICYmIGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlKSA/IHJ1bGUuZ3JhZmFuYV9hbGVydC5uYW1lc3BhY2VfdWlkIDogdW5kZWZpbmVkO1xuXG4gIGNvbnN0IHJ1bGVQZXJtaXNzaW9uID0gZ2V0UnVsZXNQZXJtaXNzaW9ucyhydWxlc1NvdXJjZU5hbWUpO1xuICBjb25zdCBoYXNFZGl0UGVybWlzc2lvbiA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKHJ1bGVQZXJtaXNzaW9uLnVwZGF0ZSwgY29udGV4dFNydi5pc0VkaXRvcik7XG4gIGNvbnN0IGhhc1JlbW92ZVBlcm1pc3Npb24gPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi5kZWxldGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuXG4gIGNvbnN0IHsgZm9sZGVyLCBsb2FkaW5nIH0gPSB1c2VGb2xkZXIoZm9sZGVyVUlEKTtcblxuICBpZiAoIXJ1bGUpIHtcbiAgICByZXR1cm4geyBpc0VkaXRhYmxlOiBmYWxzZSwgaXNSZW1vdmFibGU6IGZhbHNlLCBsb2FkaW5nOiBmYWxzZSB9O1xuICB9XG5cbiAgLy8gZ3JhZmFuYSBydWxlcyBjYW4gYmUgZWRpdGVkIGlmIHVzZXIgY2FuIGVkaXQgdGhlIGZvbGRlciB0aGV5J3JlIGluXG4gIGlmIChpc0dyYWZhbmFSdWxlclJ1bGUocnVsZSkpIHtcbiAgICBpZiAoIWZvbGRlclVJRCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgUnVsZSAke3J1bGUuZ3JhZmFuYV9hbGVydC50aXRsZX0gZG9lcyBub3QgaGF2ZSBhIGZvbGRlciB1aWQsIGNhbm5vdCBkZXRlcm1pbmUgaWYgaXQgaXMgZWRpdGFibGUuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRWRpdGFibGU6IGhhc0VkaXRQZXJtaXNzaW9uICYmIGZvbGRlcj8uY2FuU2F2ZSxcbiAgICAgIGlzUmVtb3ZhYmxlOiBoYXNSZW1vdmVQZXJtaXNzaW9uICYmIGZvbGRlcj8uY2FuU2F2ZSxcbiAgICAgIGxvYWRpbmcsXG4gICAgfTtcbiAgfVxuXG4gIC8vIHByb20gcnVsZXMgYXJlIG9ubHkgZWRpdGFibGUgYnkgdXNlcnMgd2l0aCBFZGl0b3Igcm9sZSBhbmQgb25seSBpZiBydWxlcyBzb3VyY2Ugc3VwcG9ydHMgZWRpdGluZ1xuICBjb25zdCBpc1J1bGVyQXZhaWxhYmxlID0gQm9vbGVhbihkYXRhU291cmNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ/LnJ1bGVyQ29uZmlnKTtcbiAgcmV0dXJuIHtcbiAgICBpc0VkaXRhYmxlOiBoYXNFZGl0UGVybWlzc2lvbiAmJiBpc1J1bGVyQXZhaWxhYmxlLFxuICAgIGlzUmVtb3ZhYmxlOiBoYXNSZW1vdmVQZXJtaXNzaW9uICYmIGlzUnVsZXJBdmFpbGFibGUsXG4gICAgbG9hZGluZzogZGF0YVNvdXJjZXNbcnVsZXNTb3VyY2VOYW1lXT8ubG9hZGluZyxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBTdGF0ZUhpc3RvcnlJdGVtIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBmZXRjaEdyYWZhbmFBbm5vdGF0aW9uc0FjdGlvbiB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi91dGlscy9yZWR1eCc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkoYWxlcnRJZDogc3RyaW5nKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yPEFzeW5jUmVxdWVzdFN0YXRlPFN0YXRlSGlzdG9yeUl0ZW1bXT4+KFxuICAgIChzdGF0ZSkgPT4gc3RhdGUubWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5XG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaEdyYWZhbmFBbm5vdGF0aW9uc0FjdGlvbihhbGVydElkKSk7XG4gIH0sIFtkaXNwYXRjaCwgYWxlcnRJZF0pO1xuXG4gIHJldHVybiBoaXN0b3J5O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU3RhdGVIaXN0b3J5IH0gZnJvbSAnLi4vY29tcG9uZW50cy9ydWxlcy9TdGF0ZUhpc3RvcnknO1xuXG5mdW5jdGlvbiB1c2VTdGF0ZUhpc3RvcnlNb2RhbChhbGVydElkOiBzdHJpbmcpIHtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBTdGF0ZUhpc3RvcnlNb2RhbCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIGlzT3Blbj17c2hvd01vZGFsfVxuICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgIGNsb3NlT25CYWNrZHJvcENsaWNrPXt0cnVlfVxuICAgICAgICBjbG9zZU9uRXNjYXBlPXt0cnVlfVxuICAgICAgICB0aXRsZT1cIlN0YXRlIGhpc3RvcnlcIlxuICAgICAgPlxuICAgICAgICA8U3RhdGVIaXN0b3J5IGFsZXJ0SWQ9e2FsZXJ0SWR9IC8+XG4gICAgICA8L01vZGFsPlxuICAgICksXG4gICAgW2FsZXJ0SWQsIHNob3dNb2RhbF1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIFN0YXRlSGlzdG9yeU1vZGFsLFxuICAgIHNob3dTdGF0ZUhpc3RvcnlNb2RhbDogKCkgPT4gc2V0U2hvd01vZGFsKHRydWUpLFxuICAgIGhpZGVTdGF0ZUhpc3RvcnlNb2RhbDogKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgdXNlU3RhdGVIaXN0b3J5TW9kYWwgfTtcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldFJ1bGVzQWNjZXNzIH0gZnJvbSAnLi9hY2Nlc3MtY29udHJvbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSdWxlc0FjY2VzcygpIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZ2V0UnVsZXNBY2Nlc3MoKSwgW10pO1xufVxuIiwiaW1wb3J0IHsgR3JhbW1hciB9IGZyb20gJ3ByaXNtanMnO1xuXG5pbXBvcnQgeyBDb21wbGV0aW9uSXRlbSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuY29uc3QgQUdHUkVHQVRJT05fT1BFUkFUT1JTOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdzdW0nLFxuICAgIGluc2VydFRleHQ6ICdzdW0nLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgc3VtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ21pbicsXG4gICAgaW5zZXJ0VGV4dDogJ21pbicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NlbGVjdCBtaW5pbXVtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ21heCcsXG4gICAgaW5zZXJ0VGV4dDogJ21heCcsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NlbGVjdCBtYXhpbXVtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2F2ZycsXG4gICAgaW5zZXJ0VGV4dDogJ2F2ZycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSB0aGUgYXZlcmFnZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzdGRkZXYnLFxuICAgIGluc2VydFRleHQ6ICdzdGRkZXYnLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgcG9wdWxhdGlvbiBzdGFuZGFyZCBkZXZpYXRpb24gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc3RkdmFyJyxcbiAgICBpbnNlcnRUZXh0OiAnc3RkdmFyJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHBvcHVsYXRpb24gc3RhbmRhcmQgdmFyaWFuY2Ugb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnY291bnQnLFxuICAgIGluc2VydFRleHQ6ICdjb3VudCcsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvdW50IG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgdmVjdG9yJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYm90dG9taycsXG4gICAgaW5zZXJ0VGV4dDogJ2JvdHRvbWsnLFxuICAgIGRvY3VtZW50YXRpb246ICdTbWFsbGVzdCBrIGVsZW1lbnRzIGJ5IHNhbXBsZSB2YWx1ZScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3RvcGsnLFxuICAgIGluc2VydFRleHQ6ICd0b3BrJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnTGFyZ2VzdCBrIGVsZW1lbnRzIGJ5IHNhbXBsZSB2YWx1ZScsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUElQRV9QQVJTRVJTOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdqc29uJyxcbiAgICBpbnNlcnRUZXh0OiAnanNvbicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0V4dHJhY3RpbmcgbGFiZWxzIGZyb20gdGhlIGxvZyBsaW5lIHVzaW5nIGpzb24gcGFyc2VyLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAncmVnZXhwJyxcbiAgICBpbnNlcnRUZXh0OiAncmVnZXhwIFwiXCInLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyByZWdleHAgcGFyc2VyLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgICBtb3ZlOiAtMSxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbG9nZm10JyxcbiAgICBpbnNlcnRUZXh0OiAnbG9nZm10JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRXh0cmFjdGluZyBsYWJlbHMgZnJvbSB0aGUgbG9nIGxpbmUgdXNpbmcgbG9nZm10IHBhcnNlci4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3BhdHRlcm4nLFxuICAgIGluc2VydFRleHQ6ICdwYXR0ZXJuJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRXh0cmFjdGluZyBsYWJlbHMgZnJvbSB0aGUgbG9nIGxpbmUgdXNpbmcgcGF0dGVybiBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4zKy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFBJUEVfT1BFUkFUT1JTOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICd1bndyYXAnLFxuICAgIGluc2VydFRleHQ6ICd1bndyYXAnLFxuICAgIGRldGFpbDogJ3Vud3JhcCBpZGVudGlmaWVyJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1Rha2UgbGFiZWxzIGFuZCB1c2UgdGhlIHZhbHVlcyBhcyBzYW1wbGUgZGF0YSBmb3IgbWV0cmljIGFnZ3JlZ2F0aW9ucy4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3VucGFjaycsXG4gICAgaW5zZXJ0VGV4dDogJ3VucGFjaycsXG4gICAgZGV0YWlsOiAndW5wYWNrIGlkZW50aWZpZXInLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUGFyc2VzIGEgSlNPTiBsb2cgbGluZSwgdW5wYWNraW5nIGFsbCBlbWJlZGRlZCBsYWJlbHMgaW4gdGhlIHBhY2sgc3RhZ2UuIEEgc3BlY2lhbCBwcm9wZXJ0eSBcIl9lbnRyeVwiIHdpbGwgYWxzbyBiZSB1c2VkIHRvIHJlcGxhY2UgdGhlIG9yaWdpbmFsIGxvZyBsaW5lLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbGFiZWxfZm9ybWF0JyxcbiAgICBpbnNlcnRUZXh0OiAnbGFiZWxfZm9ybWF0JyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1VzZSB0byByZW5hbWUsIG1vZGlmeSBvciBhZGQgbGFiZWxzLiBGb3IgZXhhbXBsZSwgfCBsYWJlbF9mb3JtYXQgZm9vPWJhciAuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdsaW5lX2Zvcm1hdCcsXG4gICAgaW5zZXJ0VGV4dDogJ2xpbmVfZm9ybWF0JyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1Jld3JpdGVzIGxvZyBsaW5lIGNvbnRlbnQuIEZvciBleGFtcGxlLCB8IGxpbmVfZm9ybWF0IFwie3sucXVlcnl9fSB7ey5kdXJhdGlvbn19XCIgLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBSQU5HRV9WRUNfRlVOQ1RJT05TID0gW1xuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2F2Z19vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnYXZnX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnYXZnX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIGF2ZXJhZ2Ugb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtaW5fb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ21pbl9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ21pbl9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtaW5pbXVtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWF4X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdtYXhfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbWF4aW11bSBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N1bV9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3VtX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3VtX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIHN1bSBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdjb3VudF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2NvdW50X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIGNvdW50IG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N0ZHZhcl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3RkdmFyX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1RoZSBwb3B1bGF0aW9uIHN0YW5kYXJkIHZhcmlhbmNlIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3RkZGV2X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdGRkZXZfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdGRkZXZfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3F1YW50aWxlX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAncXVhbnRpbGVfb3Zlcl90aW1lKHNjYWxhciwgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSDPhi1xdWFudGlsZSAoMCDiiaQgz4Yg4omkIDEpIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYnl0ZXNfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2J5dGVzX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnYnl0ZXNfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDb3VudHMgdGhlIGFtb3VudCBvZiBieXRlcyB1c2VkIGJ5IGVhY2ggbG9nIHN0cmVhbSBmb3IgYSBnaXZlbiByYW5nZScsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYnl0ZXNfcmF0ZScsXG4gICAgbGFiZWw6ICdieXRlc19yYXRlJyxcbiAgICBkZXRhaWw6ICdieXRlc19yYXRlKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgYnl0ZXMgcGVyIHNlY29uZCBmb3IgZWFjaCBzdHJlYW0uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyYXRlJyxcbiAgICBsYWJlbDogJ3JhdGUnLFxuICAgIGRldGFpbDogJ3JhdGUodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIGVudHJpZXMgcGVyIHNlY29uZC4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZVTkNUSU9OUyA9IFsuLi5BR0dSRUdBVElPTl9PUEVSQVRPUlMsIC4uLlJBTkdFX1ZFQ19GVU5DVElPTlNdO1xuZXhwb3J0IGNvbnN0IExPS0lfS0VZV09SRFMgPSBbLi4uRlVOQ1RJT05TLCAuLi5QSVBFX09QRVJBVE9SUywgLi4uUElQRV9QQVJTRVJTXS5tYXAoKGtleXdvcmQpID0+IGtleXdvcmQubGFiZWwpO1xuXG5leHBvcnQgY29uc3QgbG9raUdyYW1tYXI6IEdyYW1tYXIgPSB7XG4gIGNvbW1lbnQ6IHtcbiAgICBwYXR0ZXJuOiAvIy4qLyxcbiAgfSxcbiAgJ2NvbnRleHQtYWdncmVnYXRpb24nOiB7XG4gICAgcGF0dGVybjogLygod2l0aG91dHxieSlcXHMqKVxcKFteKV0qXFwpLywgLy8gYnkgKClcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgJ2xhYmVsLWtleSc6IHtcbiAgICAgICAgcGF0dGVybjogL1teKCksXFxzXVteLCldKlteKSxcXHNdKi8sXG4gICAgICAgIGFsaWFzOiAnYXR0ci1uYW1lJyxcbiAgICAgIH0sXG4gICAgICBwdW5jdHVhdGlvbjogL1soKV0vLFxuICAgIH0sXG4gIH0sXG4gICdjb250ZXh0LWxhYmVscyc6IHtcbiAgICBwYXR0ZXJuOiAvXFx7W159XSooPz19PykvLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogLyMuKi8sXG4gICAgICB9LFxuICAgICAgJ2xhYmVsLWtleSc6IHtcbiAgICAgICAgcGF0dGVybjogL1thLXpBLVpfXVxcdyooPz1cXHMqKD18IT18PX58IX4pKS8sXG4gICAgICAgIGFsaWFzOiAnYXR0ci1uYW1lJyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgICdsYWJlbC12YWx1ZSc6IHtcbiAgICAgICAgcGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXCJdKSpcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdhdHRyLXZhbHVlJyxcbiAgICAgIH0sXG4gICAgICBwdW5jdHVhdGlvbjogL1t7XS8sXG4gICAgfSxcbiAgfSxcbiAgJ2NvbnRleHQtcGlwZSc6IHtcbiAgICBwYXR0ZXJuOiAvXFxzXFx8W149fl1cXHM/XFx3Ki9pLFxuICAgIGluc2lkZToge1xuICAgICAgJ3BpcGUtb3BlcmF0b3InOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXHwvaSxcbiAgICAgICAgYWxpYXM6ICdvcGVyYXRvcicsXG4gICAgICB9LFxuICAgICAgJ3BpcGUtb3BlcmF0aW9ucyc6IHtcbiAgICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cChgJHtbLi4uUElQRV9QQVJTRVJTLCAuLi5QSVBFX09QRVJBVE9SU10ubWFwKChmKSA9PiBmLmxhYmVsKS5qb2luKCd8Jyl9YCwgJ2knKSxcbiAgICAgICAgYWxpYXM6ICdrZXl3b3JkJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZnVuY3Rpb246IG5ldyBSZWdFeHAoYFxcXFxiKD86JHtGVU5DVElPTlMubWFwKChmKSA9PiBmLmxhYmVsKS5qb2luKCd8Jyl9KSg/PVxcXFxzKlxcXFwoKWAsICdpJyksXG4gICdjb250ZXh0LXJhbmdlJzogW1xuICAgIHtcbiAgICAgIHBhdHRlcm46IC9cXFtbXlxcXV0qKD89XFxdKS8sIC8vIFsxbV1cbiAgICAgIGluc2lkZToge1xuICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcYlxcZCtbc21oZHd5XVxcYi9pLFxuICAgICAgICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvKG9mZnNldFxccyspXFx3Ky8sIC8vIG9mZnNldCAxbVxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcYlxcZCtbc21oZHd5XVxcYi9pLFxuICAgICAgICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgcXVvdGU6IHtcbiAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwiLyxcbiAgICBhbGlhczogJ3N0cmluZycsXG4gICAgZ3JlZWR5OiB0cnVlLFxuICB9LFxuICBiYWNrdGlja3M6IHtcbiAgICBwYXR0ZXJuOiAvYCg/OlxcXFwufFteXFxcXGBdKSpgLyxcbiAgICBhbGlhczogJ3N0cmluZycsXG4gICAgZ3JlZWR5OiB0cnVlLFxuICB9LFxuICBudW1iZXI6IC9cXGItP1xcZCsoKFxcLlxcZCopPyhbZUVdWystXT9cXGQrKT8pP1xcYi8sXG4gIG9wZXJhdG9yOiAvXFxzPyhcXHxbPX5dP3whPT98PCg/Oj0+P3w8fD4pP3w+Wz49XT8pXFxzPy9pLFxuICBwdW5jdHVhdGlvbjogL1t7fSgpLC5dLyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxva2lHcmFtbWFyO1xuIiwiaW1wb3J0IHsgR3JhbW1hciB9IGZyb20gJ3ByaXNtanMnO1xuXG5pbXBvcnQgeyBDb21wbGV0aW9uSXRlbSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuLy8gV2hlbiBjaGFuZ2luZyBSQVRFX1JBTkdFUywgY2hlY2sgaWYgTG9raS9Mb2dRTCByYW5nZXMgc2hvdWxkIGJlIGNoYW5nZWQgdG9vXG4vLyBAc2VlIHB1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvbGFuZ3VhZ2VfcHJvdmlkZXIudHNcbmV4cG9ydCBjb25zdCBSQVRFX1JBTkdFUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAgeyBsYWJlbDogJyRfX2ludGVydmFsJywgc29ydFZhbHVlOiAnJF9faW50ZXJ2YWwnIH0sXG4gIHsgbGFiZWw6ICckX19yYXRlX2ludGVydmFsJywgc29ydFZhbHVlOiAnJF9fcmF0ZV9pbnRlcnZhbCcgfSxcbiAgeyBsYWJlbDogJyRfX3JhbmdlJywgc29ydFZhbHVlOiAnJF9fcmFuZ2UnIH0sXG4gIHsgbGFiZWw6ICcxbScsIHNvcnRWYWx1ZTogJzAwOjAxOjAwJyB9LFxuICB7IGxhYmVsOiAnNW0nLCBzb3J0VmFsdWU6ICcwMDowNTowMCcgfSxcbiAgeyBsYWJlbDogJzEwbScsIHNvcnRWYWx1ZTogJzAwOjEwOjAwJyB9LFxuICB7IGxhYmVsOiAnMzBtJywgc29ydFZhbHVlOiAnMDA6MzA6MDAnIH0sXG4gIHsgbGFiZWw6ICcxaCcsIHNvcnRWYWx1ZTogJzAxOjAwOjAwJyB9LFxuICB7IGxhYmVsOiAnMWQnLCBzb3J0VmFsdWU6ICcyNDowMDowMCcgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBPUEVSQVRPUlMgPSBbJ2J5JywgJ2dyb3VwX2xlZnQnLCAnZ3JvdXBfcmlnaHQnLCAnaWdub3JpbmcnLCAnb24nLCAnb2Zmc2V0JywgJ3dpdGhvdXQnXTtcbmV4cG9ydCBjb25zdCBMT0dJQ0FMX09QRVJBVE9SUyA9IFsnb3InLCAnYW5kJywgJ3VubGVzcyddO1xuXG5jb25zdCBUUklHT05PTUVUUklDX0ZVTkNUSU9OUzogQ29tcGxldGlvbkl0ZW1bXSA9IFtcbiAge1xuICAgIGxhYmVsOiAnYWNvcycsXG4gICAgaW5zZXJ0VGV4dDogJ2Fjb3MnLFxuICAgIGRldGFpbDogJ2Fjb3ModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBhcmNjb3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhY29zaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2Fjb3NoJyxcbiAgICBkZXRhaWw6ICdhY29zaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGludmVyc2UgaHlwZXJib2xpYyBjb3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhc2luJyxcbiAgICBpbnNlcnRUZXh0OiAnYXNpbicsXG4gICAgZGV0YWlsOiAnYXNpbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGFyY3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhc2luaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2FzaW5oJyxcbiAgICBkZXRhaWw6ICdhc2luaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGludmVyc2UgaHlwZXJib2xpYyBzaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXRhbicsXG4gICAgaW5zZXJ0VGV4dDogJ2F0YW4nLFxuICAgIGRldGFpbDogJ2F0YW4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBhcmN0YW5nZW50IG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXRhbmgnLFxuICAgIGluc2VydFRleHQ6ICdhdGFuaCcsXG4gICAgZGV0YWlsOiAnYXRhbmgodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBpbnZlcnNlIGh5cGVyYm9saWMgdGFuZ2VudCBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2NvcycsXG4gICAgaW5zZXJ0VGV4dDogJ2NvcycsXG4gICAgZGV0YWlsOiAnY29zKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgY29zaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnY29zaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2Nvc2gnLFxuICAgIGRldGFpbDogJ2Nvc2godiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBoeXBlcmJvbGljIGNvc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3NpbicsXG4gICAgaW5zZXJ0VGV4dDogJ3NpbicsXG4gICAgZGV0YWlsOiAnc2luKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3NpbmgnLFxuICAgIGluc2VydFRleHQ6ICdzaW5oJyxcbiAgICBkZXRhaWw6ICdzaW5oKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaHlwZXJib2xpYyBzaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndGFuJyxcbiAgICBpbnNlcnRUZXh0OiAndGFuJyxcbiAgICBkZXRhaWw6ICd0YW4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSB0YW5nZW50IG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndGFuaCcsXG4gICAgaW5zZXJ0VGV4dDogJ3RhbmgnLFxuICAgIGRldGFpbDogJ3RhbmgodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBoeXBlcmJvbGljIHRhbmdlbnQgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuXTtcblxuY29uc3QgQUdHUkVHQVRJT05fT1BFUkFUT1JTOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdzdW0nLFxuICAgIGluc2VydFRleHQ6ICdzdW0nLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgc3VtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ21pbicsXG4gICAgaW5zZXJ0VGV4dDogJ21pbicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NlbGVjdCBtaW5pbXVtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ21heCcsXG4gICAgaW5zZXJ0VGV4dDogJ21heCcsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NlbGVjdCBtYXhpbXVtIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2F2ZycsXG4gICAgaW5zZXJ0VGV4dDogJ2F2ZycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSB0aGUgYXZlcmFnZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdncm91cCcsXG4gICAgaW5zZXJ0VGV4dDogJ2dyb3VwJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQWxsIHZhbHVlcyBpbiB0aGUgcmVzdWx0aW5nIHZlY3RvciBhcmUgMScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZGRldicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIGRldmlhdGlvbiBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzdGR2YXInLFxuICAgIGluc2VydFRleHQ6ICdzdGR2YXInLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudCcsXG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ291bnQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB2ZWN0b3InLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudF92YWx1ZXMnLFxuICAgIGluc2VydFRleHQ6ICdjb3VudF92YWx1ZXMnLFxuICAgIGRvY3VtZW50YXRpb246ICdDb3VudCBudW1iZXIgb2YgZWxlbWVudHMgd2l0aCB0aGUgc2FtZSB2YWx1ZScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2JvdHRvbWsnLFxuICAgIGluc2VydFRleHQ6ICdib3R0b21rJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU21hbGxlc3QgayBlbGVtZW50cyBieSBzYW1wbGUgdmFsdWUnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICd0b3BrJyxcbiAgICBpbnNlcnRUZXh0OiAndG9waycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0xhcmdlc3QgayBlbGVtZW50cyBieSBzYW1wbGUgdmFsdWUnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdxdWFudGlsZScsXG4gICAgaW5zZXJ0VGV4dDogJ3F1YW50aWxlJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBGVU5DVElPTlMgPSBbXG4gIC4uLkFHR1JFR0FUSU9OX09QRVJBVE9SUyxcbiAgLi4uVFJJR09OT01FVFJJQ19GVU5DVElPTlMsXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYWJzJyxcbiAgICBsYWJlbDogJ2FicycsXG4gICAgZGV0YWlsOiAnYWJzKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgaW5wdXQgdmVjdG9yIHdpdGggYWxsIHNhbXBsZSB2YWx1ZXMgY29udmVydGVkIHRvIHRoZWlyIGFic29sdXRlIHZhbHVlLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYWJzZW50JyxcbiAgICBsYWJlbDogJ2Fic2VudCcsXG4gICAgZGV0YWlsOiAnYWJzZW50KHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgYW4gZW1wdHkgdmVjdG9yIGlmIHRoZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBhbnkgZWxlbWVudHMgYW5kIGEgMS1lbGVtZW50IHZlY3RvciB3aXRoIHRoZSB2YWx1ZSAxIGlmIHRoZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBubyBlbGVtZW50cy4gVGhpcyBpcyB1c2VmdWwgZm9yIGFsZXJ0aW5nIG9uIHdoZW4gbm8gdGltZSBzZXJpZXMgZXhpc3QgZm9yIGEgZ2l2ZW4gbWV0cmljIG5hbWUgYW5kIGxhYmVsIGNvbWJpbmF0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYWJzZW50X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdhYnNlbnRfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdhYnNlbnQodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgYW4gZW1wdHkgdmVjdG9yIGlmIHRoZSByYW5nZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBhbnkgZWxlbWVudHMgYW5kIGEgMS1lbGVtZW50IHZlY3RvciB3aXRoIHRoZSB2YWx1ZSAxIGlmIHRoZSByYW5nZSB2ZWN0b3IgcGFzc2VkIHRvIGl0IGhhcyBubyBlbGVtZW50cy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NlaWwnLFxuICAgIGxhYmVsOiAnY2VpbCcsXG4gICAgZGV0YWlsOiAnY2VpbCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JvdW5kcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHVwIHRvIHRoZSBuZWFyZXN0IGludGVnZXIuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjaGFuZ2VzJyxcbiAgICBsYWJlbDogJ2NoYW5nZXMnLFxuICAgIGRldGFpbDogJ2NoYW5nZXModiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0ZvciBlYWNoIGlucHV0IHRpbWUgc2VyaWVzLCBgY2hhbmdlcyh2IHJhbmdlLXZlY3RvcilgIHJldHVybnMgdGhlIG51bWJlciBvZiB0aW1lcyBpdHMgdmFsdWUgaGFzIGNoYW5nZWQgd2l0aGluIHRoZSBwcm92aWRlZCB0aW1lIHJhbmdlIGFzIGFuIGluc3RhbnQgdmVjdG9yLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2xhbXAnLFxuICAgIGxhYmVsOiAnY2xhbXAnLFxuICAgIGRldGFpbDogJ2NsYW1wKHYgaW5zdGFudC12ZWN0b3IsIG1pbiBzY2FsYXIsIG1heCBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NsYW1wcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHRvIGhhdmUgYSBsb3dlciBsaW1pdCBvZiBgbWluYCBhbmQgYW4gdXBwZXIgbGltaXQgb2YgYG1heGAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjbGFtcF9tYXgnLFxuICAgIGxhYmVsOiAnY2xhbXBfbWF4JyxcbiAgICBkZXRhaWw6ICdjbGFtcF9tYXgodiBpbnN0YW50LXZlY3RvciwgbWF4IHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDbGFtcHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCB0byBoYXZlIGFuIHVwcGVyIGxpbWl0IG9mIGBtYXhgLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2xhbXBfbWluJyxcbiAgICBsYWJlbDogJ2NsYW1wX21pbicsXG4gICAgZGV0YWlsOiAnY2xhbXBfbWluKHYgaW5zdGFudC12ZWN0b3IsIG1pbiBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2xhbXBzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdG8gaGF2ZSBhIGxvd2VyIGxpbWl0IG9mIGBtaW5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfc2NhbGFyJyxcbiAgICBsYWJlbDogJ2NvdW50X3NjYWxhcicsXG4gICAgZGV0YWlsOiAnY291bnRfc2NhbGFyKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiBhIHRpbWUgc2VyaWVzIHZlY3RvciBhcyBhIHNjYWxhci4gVGhpcyBpcyBpbiBjb250cmFzdCB0byB0aGUgYGNvdW50KClgIGFnZ3JlZ2F0aW9uIG9wZXJhdG9yLCB3aGljaCBhbHdheXMgcmV0dXJucyBhIHZlY3RvciAoYW4gZW1wdHkgb25lIGlmIHRoZSBpbnB1dCB2ZWN0b3IgaXMgZW1wdHkpIGFuZCBhbGxvd3MgZ3JvdXBpbmcgYnkgbGFiZWxzIHZpYSBhIGBieWAgY2xhdXNlLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGVnJyxcbiAgICBsYWJlbDogJ2RlZycsXG4gICAgZGV0YWlsOiAnZGVnKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ29udmVydHMgcmFkaWFucyB0byBkZWdyZWVzIGZvciBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGF5X29mX21vbnRoJyxcbiAgICBsYWJlbDogJ2RheV9vZl9tb250aCcsXG4gICAgZGV0YWlsOiAnZGF5X29mX21vbnRoKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgZGF5IG9mIHRoZSBtb250aCBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMSB0byAzMS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2RheV9vZl93ZWVrJyxcbiAgICBsYWJlbDogJ2RheV9vZl93ZWVrJyxcbiAgICBkZXRhaWw6ICdkYXlfb2Zfd2Vlayh2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBkYXkgb2YgdGhlIHdlZWsgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDAgdG8gNiwgd2hlcmUgMCBtZWFucyBTdW5kYXkgZXRjLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGF5c19pbl9tb250aCcsXG4gICAgbGFiZWw6ICdkYXlzX2luX21vbnRoJyxcbiAgICBkZXRhaWw6ICdkYXlzX2luX21vbnRoKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRoIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAyOCB0byAzMS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2RlbHRhJyxcbiAgICBsYWJlbDogJ2RlbHRhJyxcbiAgICBkZXRhaWw6ICdkZWx0YSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBmaXJzdCBhbmQgbGFzdCB2YWx1ZSBvZiBlYWNoIHRpbWUgc2VyaWVzIGVsZW1lbnQgaW4gYSByYW5nZSB2ZWN0b3IgYHZgLCByZXR1cm5pbmcgYW4gaW5zdGFudCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gZGVsdGFzIGFuZCBlcXVpdmFsZW50IGxhYmVscy4gVGhlIGRlbHRhIGlzIGV4dHJhcG9sYXRlZCB0byBjb3ZlciB0aGUgZnVsbCB0aW1lIHJhbmdlIGFzIHNwZWNpZmllZCBpbiB0aGUgcmFuZ2UgdmVjdG9yIHNlbGVjdG9yLCBzbyB0aGF0IGl0IGlzIHBvc3NpYmxlIHRvIGdldCBhIG5vbi1pbnRlZ2VyIHJlc3VsdCBldmVuIGlmIHRoZSBzYW1wbGUgdmFsdWVzIGFyZSBhbGwgaW50ZWdlcnMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkZXJpdicsXG4gICAgbGFiZWw6ICdkZXJpdicsXG4gICAgZGV0YWlsOiAnZGVyaXYodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIHBlci1zZWNvbmQgZGVyaXZhdGl2ZSBvZiB0aGUgdGltZSBzZXJpZXMgaW4gYSByYW5nZSB2ZWN0b3IgYHZgLCB1c2luZyBzaW1wbGUgbGluZWFyIHJlZ3Jlc3Npb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkcm9wX2NvbW1vbl9sYWJlbHMnLFxuICAgIGxhYmVsOiAnZHJvcF9jb21tb25fbGFiZWxzJyxcbiAgICBkZXRhaWw6ICdkcm9wX2NvbW1vbl9sYWJlbHMoaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRHJvcHMgYWxsIGxhYmVscyB0aGF0IGhhdmUgdGhlIHNhbWUgbmFtZSBhbmQgdmFsdWUgYWNyb3NzIGFsbCBzZXJpZXMgaW4gdGhlIGlucHV0IHZlY3Rvci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2V4cCcsXG4gICAgbGFiZWw6ICdleHAnLFxuICAgIGRldGFpbDogJ2V4cCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBleHBvbmVudGlhbCBmdW5jdGlvbiBmb3IgYWxsIGVsZW1lbnRzIGluIGB2YC5cXG5TcGVjaWFsIGNhc2VzIGFyZTpcXG4qIGBFeHAoK0luZikgPSArSW5mYCBcXG4qIGBFeHAoTmFOKSA9IE5hTmAnLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2Zsb29yJyxcbiAgICBsYWJlbDogJ2Zsb29yJyxcbiAgICBkZXRhaWw6ICdmbG9vcih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JvdW5kcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIGRvd24gdG8gdGhlIG5lYXJlc3QgaW50ZWdlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2hpc3RvZ3JhbV9xdWFudGlsZScsXG4gICAgbGFiZWw6ICdoaXN0b2dyYW1fcXVhbnRpbGUnLFxuICAgIGRldGFpbDogJ2hpc3RvZ3JhbV9xdWFudGlsZSjPhiBmbG9hdCwgYiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgz4YtcXVhbnRpbGUgKDAg4omkIM+GIOKJpCAxKSBmcm9tIHRoZSBidWNrZXRzIGBiYCBvZiBhIGhpc3RvZ3JhbS4gVGhlIHNhbXBsZXMgaW4gYGJgIGFyZSB0aGUgY291bnRzIG9mIG9ic2VydmF0aW9ucyBpbiBlYWNoIGJ1Y2tldC4gRWFjaCBzYW1wbGUgbXVzdCBoYXZlIGEgbGFiZWwgYGxlYCB3aGVyZSB0aGUgbGFiZWwgdmFsdWUgZGVub3RlcyB0aGUgaW5jbHVzaXZlIHVwcGVyIGJvdW5kIG9mIHRoZSBidWNrZXQuIChTYW1wbGVzIHdpdGhvdXQgc3VjaCBhIGxhYmVsIGFyZSBzaWxlbnRseSBpZ25vcmVkLikgVGhlIGhpc3RvZ3JhbSBtZXRyaWMgdHlwZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVzIHRpbWUgc2VyaWVzIHdpdGggdGhlIGBfYnVja2V0YCBzdWZmaXggYW5kIHRoZSBhcHByb3ByaWF0ZSBsYWJlbHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdob2x0X3dpbnRlcnMnLFxuICAgIGxhYmVsOiAnaG9sdF93aW50ZXJzJyxcbiAgICBkZXRhaWw6ICdob2x0X3dpbnRlcnModiByYW5nZS12ZWN0b3IsIHNmIHNjYWxhciwgdGYgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdQcm9kdWNlcyBhIHNtb290aGVkIHZhbHVlIGZvciB0aW1lIHNlcmllcyBiYXNlZCBvbiB0aGUgcmFuZ2UgaW4gYHZgLiBUaGUgbG93ZXIgdGhlIHNtb290aGluZyBmYWN0b3IgYHNmYCwgdGhlIG1vcmUgaW1wb3J0YW5jZSBpcyBnaXZlbiB0byBvbGQgZGF0YS4gVGhlIGhpZ2hlciB0aGUgdHJlbmQgZmFjdG9yIGB0ZmAsIHRoZSBtb3JlIHRyZW5kcyBpbiB0aGUgZGF0YSBpcyBjb25zaWRlcmVkLiBCb3RoIGBzZmAgYW5kIGB0ZmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdob3VyJyxcbiAgICBsYWJlbDogJ2hvdXInLFxuICAgIGRldGFpbDogJ2hvdXIodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSBob3VyIG9mIHRoZSBkYXkgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDAgdG8gMjMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdpZGVsdGEnLFxuICAgIGxhYmVsOiAnaWRlbHRhJyxcbiAgICBkZXRhaWw6ICdpZGVsdGEodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbGFzdCB0d28gc2FtcGxlcyBpbiB0aGUgcmFuZ2UgdmVjdG9yIGB2YCwgcmV0dXJuaW5nIGFuIGluc3RhbnQgdmVjdG9yIHdpdGggdGhlIGdpdmVuIGRlbHRhcyBhbmQgZXF1aXZhbGVudCBsYWJlbHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdpbmNyZWFzZScsXG4gICAgbGFiZWw6ICdpbmNyZWFzZScsXG4gICAgZGV0YWlsOiAnaW5jcmVhc2UodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGluY3JlYXNlIGluIHRoZSB0aW1lIHNlcmllcyBpbiB0aGUgcmFuZ2UgdmVjdG9yLiBCcmVha3MgaW4gbW9ub3RvbmljaXR5IChzdWNoIGFzIGNvdW50ZXIgcmVzZXRzIGR1ZSB0byB0YXJnZXQgcmVzdGFydHMpIGFyZSBhdXRvbWF0aWNhbGx5IGFkanVzdGVkIGZvci4gVGhlIGluY3JlYXNlIGlzIGV4dHJhcG9sYXRlZCB0byBjb3ZlciB0aGUgZnVsbCB0aW1lIHJhbmdlIGFzIHNwZWNpZmllZCBpbiB0aGUgcmFuZ2UgdmVjdG9yIHNlbGVjdG9yLCBzbyB0aGF0IGl0IGlzIHBvc3NpYmxlIHRvIGdldCBhIG5vbi1pbnRlZ2VyIHJlc3VsdCBldmVuIGlmIGEgY291bnRlciBpbmNyZWFzZXMgb25seSBieSBpbnRlZ2VyIGluY3JlbWVudHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdpcmF0ZScsXG4gICAgbGFiZWw6ICdpcmF0ZScsXG4gICAgZGV0YWlsOiAnaXJhdGUodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIHBlci1zZWNvbmQgaW5zdGFudCByYXRlIG9mIGluY3JlYXNlIG9mIHRoZSB0aW1lIHNlcmllcyBpbiB0aGUgcmFuZ2UgdmVjdG9yLiBUaGlzIGlzIGJhc2VkIG9uIHRoZSBsYXN0IHR3byBkYXRhIHBvaW50cy4gQnJlYWtzIGluIG1vbm90b25pY2l0eSAoc3VjaCBhcyBjb3VudGVyIHJlc2V0cyBkdWUgdG8gdGFyZ2V0IHJlc3RhcnRzKSBhcmUgYXV0b21hdGljYWxseSBhZGp1c3RlZCBmb3IuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsYWJlbF9qb2luJyxcbiAgICBsYWJlbDogJ2xhYmVsX2pvaW4nLFxuICAgIGRldGFpbDpcbiAgICAgICdsYWJlbF9qb2luKHYgaW5zdGFudC12ZWN0b3IsIGRzdF9sYWJlbCBzdHJpbmcsIHNlcGFyYXRvciBzdHJpbmcsIHNyY19sYWJlbF8xIHN0cmluZywgc3JjX2xhYmVsXzIgc3RyaW5nLCAuLi4pJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0ZvciBlYWNoIHRpbWVzZXJpZXMgaW4gYHZgLCBqb2lucyBhbGwgdGhlIHZhbHVlcyBvZiBhbGwgdGhlIGBzcmNfbGFiZWxzYCB1c2luZyBgc2VwYXJhdG9yYCBhbmQgcmV0dXJucyB0aGUgdGltZXNlcmllcyB3aXRoIHRoZSBsYWJlbCBgZHN0X2xhYmVsYCBjb250YWluaW5nIHRoZSBqb2luZWQgdmFsdWUuIFRoZXJlIGNhbiBiZSBhbnkgbnVtYmVyIG9mIGBzcmNfbGFiZWxzYCBpbiB0aGlzIGZ1bmN0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbGFiZWxfcmVwbGFjZScsXG4gICAgbGFiZWw6ICdsYWJlbF9yZXBsYWNlJyxcbiAgICBkZXRhaWw6ICdsYWJlbF9yZXBsYWNlKHYgaW5zdGFudC12ZWN0b3IsIGRzdF9sYWJlbCBzdHJpbmcsIHJlcGxhY2VtZW50IHN0cmluZywgc3JjX2xhYmVsIHN0cmluZywgcmVnZXggc3RyaW5nKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgIFwiRm9yIGVhY2ggdGltZXNlcmllcyBpbiBgdmAsIGBsYWJlbF9yZXBsYWNlKHYgaW5zdGFudC12ZWN0b3IsIGRzdF9sYWJlbCBzdHJpbmcsIHJlcGxhY2VtZW50IHN0cmluZywgc3JjX2xhYmVsIHN0cmluZywgcmVnZXggc3RyaW5nKWAgIG1hdGNoZXMgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBgcmVnZXhgIGFnYWluc3QgdGhlIGxhYmVsIGBzcmNfbGFiZWxgLiAgSWYgaXQgbWF0Y2hlcywgdGhlbiB0aGUgdGltZXNlcmllcyBpcyByZXR1cm5lZCB3aXRoIHRoZSBsYWJlbCBgZHN0X2xhYmVsYCByZXBsYWNlZCBieSB0aGUgZXhwYW5zaW9uIG9mIGByZXBsYWNlbWVudGAuIGAkMWAgaXMgcmVwbGFjZWQgd2l0aCB0aGUgZmlyc3QgbWF0Y2hpbmcgc3ViZ3JvdXAsIGAkMmAgd2l0aCB0aGUgc2Vjb25kIGV0Yy4gSWYgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBkb2Vzbid0IG1hdGNoIHRoZW4gdGhlIHRpbWVzZXJpZXMgaXMgcmV0dXJuZWQgdW5jaGFuZ2VkLlwiLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xuJyxcbiAgICBsYWJlbDogJ2xuJyxcbiAgICBkZXRhaWw6ICdsbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBuYXR1cmFsIGxvZ2FyaXRobSBmb3IgYWxsIGVsZW1lbnRzIGluIGB2YC5cXG5TcGVjaWFsIGNhc2VzIGFyZTpcXG4gKiBgbG4oK0luZikgPSArSW5mYFxcbiAqIGBsbigwKSA9IC1JbmZgXFxuICogYGxuKHggPCAwKSA9IE5hTmBcXG4gKiBgbG4oTmFOKSA9IE5hTmAnLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xvZzInLFxuICAgIGxhYmVsOiAnbG9nMicsXG4gICAgZGV0YWlsOiAnbG9nMih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBiaW5hcnkgbG9nYXJpdGhtIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLiBUaGUgc3BlY2lhbCBjYXNlcyBhcmUgZXF1aXZhbGVudCB0byB0aG9zZSBpbiBgbG5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbG9nMTAnLFxuICAgIGxhYmVsOiAnbG9nMTAnLFxuICAgIGRldGFpbDogJ2xvZzEwKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGRlY2ltYWwgbG9nYXJpdGhtIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLiBUaGUgc3BlY2lhbCBjYXNlcyBhcmUgZXF1aXZhbGVudCB0byB0aG9zZSBpbiBgbG5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWludXRlJyxcbiAgICBsYWJlbDogJ21pbnV0ZScsXG4gICAgZGV0YWlsOiAnbWludXRlKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG1pbnV0ZSBvZiB0aGUgaG91ciBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMCB0byA1OS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21vbnRoJyxcbiAgICBsYWJlbDogJ21vbnRoJyxcbiAgICBkZXRhaWw6ICdtb250aCh2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBtb250aCBvZiB0aGUgeWVhciBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMSB0byAxMiwgd2hlcmUgMSBtZWFucyBKYW51YXJ5IGV0Yy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3BpJyxcbiAgICBsYWJlbDogJ3BpJyxcbiAgICBkZXRhaWw6ICdwaSgpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyBwaScsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncHJlZGljdF9saW5lYXInLFxuICAgIGxhYmVsOiAncHJlZGljdF9saW5lYXInLFxuICAgIGRldGFpbDogJ3ByZWRpY3RfbGluZWFyKHYgcmFuZ2UtdmVjdG9yLCB0IHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUHJlZGljdHMgdGhlIHZhbHVlIG9mIHRpbWUgc2VyaWVzIGB0YCBzZWNvbmRzIGZyb20gbm93LCBiYXNlZCBvbiB0aGUgcmFuZ2UgdmVjdG9yIGB2YCwgdXNpbmcgc2ltcGxlIGxpbmVhciByZWdyZXNzaW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmFkJyxcbiAgICBsYWJlbDogJ3JhZCcsXG4gICAgZGV0YWlsOiAncmFkKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ29udmVydHMgZGVncmVlcyB0byByYWRpYW5zIGZvciBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmF0ZScsXG4gICAgbGFiZWw6ICdyYXRlJyxcbiAgICBkZXRhaWw6ICdyYXRlKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgIFwiQ2FsY3VsYXRlcyB0aGUgcGVyLXNlY29uZCBhdmVyYWdlIHJhdGUgb2YgaW5jcmVhc2Ugb2YgdGhlIHRpbWUgc2VyaWVzIGluIHRoZSByYW5nZSB2ZWN0b3IuIEJyZWFrcyBpbiBtb25vdG9uaWNpdHkgKHN1Y2ggYXMgY291bnRlciByZXNldHMgZHVlIHRvIHRhcmdldCByZXN0YXJ0cykgYXJlIGF1dG9tYXRpY2FsbHkgYWRqdXN0ZWQgZm9yLiBBbHNvLCB0aGUgY2FsY3VsYXRpb24gZXh0cmFwb2xhdGVzIHRvIHRoZSBlbmRzIG9mIHRoZSB0aW1lIHJhbmdlLCBhbGxvd2luZyBmb3IgbWlzc2VkIHNjcmFwZXMgb3IgaW1wZXJmZWN0IGFsaWdubWVudCBvZiBzY3JhcGUgY3ljbGVzIHdpdGggdGhlIHJhbmdlJ3MgdGltZSBwZXJpb2QuXCIsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncmVzZXRzJyxcbiAgICBsYWJlbDogJ3Jlc2V0cycsXG4gICAgZGV0YWlsOiAncmVzZXRzKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdGb3IgZWFjaCBpbnB1dCB0aW1lIHNlcmllcywgYHJlc2V0cyh2IHJhbmdlLXZlY3RvcilgIHJldHVybnMgdGhlIG51bWJlciBvZiBjb3VudGVyIHJlc2V0cyB3aXRoaW4gdGhlIHByb3ZpZGVkIHRpbWUgcmFuZ2UgYXMgYW4gaW5zdGFudCB2ZWN0b3IuIEFueSBkZWNyZWFzZSBpbiB0aGUgdmFsdWUgYmV0d2VlbiB0d28gY29uc2VjdXRpdmUgc2FtcGxlcyBpcyBpbnRlcnByZXRlZCBhcyBhIGNvdW50ZXIgcmVzZXQuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyb3VuZCcsXG4gICAgbGFiZWw6ICdyb3VuZCcsXG4gICAgZGV0YWlsOiAncm91bmQodiBpbnN0YW50LXZlY3RvciwgdG9fbmVhcmVzdD0xIHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUm91bmRzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdG8gdGhlIG5lYXJlc3QgaW50ZWdlci4gVGllcyBhcmUgcmVzb2x2ZWQgYnkgcm91bmRpbmcgdXAuIFRoZSBvcHRpb25hbCBgdG9fbmVhcmVzdGAgYXJndW1lbnQgYWxsb3dzIHNwZWNpZnlpbmcgdGhlIG5lYXJlc3QgbXVsdGlwbGUgdG8gd2hpY2ggdGhlIHNhbXBsZSB2YWx1ZXMgc2hvdWxkIGJlIHJvdW5kZWQuIFRoaXMgbXVsdGlwbGUgbWF5IGFsc28gYmUgYSBmcmFjdGlvbi4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NjYWxhcicsXG4gICAgbGFiZWw6ICdzY2FsYXInLFxuICAgIGRldGFpbDogJ3NjYWxhcih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdHaXZlbiBhIHNpbmdsZS1lbGVtZW50IGlucHV0IHZlY3RvciwgYHNjYWxhcih2IGluc3RhbnQtdmVjdG9yKWAgcmV0dXJucyB0aGUgc2FtcGxlIHZhbHVlIG9mIHRoYXQgc2luZ2xlIGVsZW1lbnQgYXMgYSBzY2FsYXIuIElmIHRoZSBpbnB1dCB2ZWN0b3IgZG9lcyBub3QgaGF2ZSBleGFjdGx5IG9uZSBlbGVtZW50LCBgc2NhbGFyYCB3aWxsIHJldHVybiBgTmFOYC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NnbicsXG4gICAgbGFiZWw6ICdzZ24nLFxuICAgIGRldGFpbDogJ3Nnbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIGEgdmVjdG9yIHdpdGggYWxsIHNhbXBsZSB2YWx1ZXMgY29udmVydGVkIHRvIHRoZWlyIHNpZ24sIGRlZmluZWQgYXMgdGhpczogMSBpZiB2IGlzIHBvc2l0aXZlLCAtMSBpZiB2IGlzIG5lZ2F0aXZlIGFuZCAwIGlmIHYgaXMgZXF1YWwgdG8gemVyby4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NvcnQnLFxuICAgIGxhYmVsOiAnc29ydCcsXG4gICAgZGV0YWlsOiAnc29ydCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdmVjdG9yIGVsZW1lbnRzIHNvcnRlZCBieSB0aGVpciBzYW1wbGUgdmFsdWVzLCBpbiBhc2NlbmRpbmcgb3JkZXIuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzb3J0X2Rlc2MnLFxuICAgIGxhYmVsOiAnc29ydF9kZXNjJyxcbiAgICBkZXRhaWw6ICdzb3J0X2Rlc2ModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHZlY3RvciBlbGVtZW50cyBzb3J0ZWQgYnkgdGhlaXIgc2FtcGxlIHZhbHVlcywgaW4gZGVzY2VuZGluZyBvcmRlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NxcnQnLFxuICAgIGxhYmVsOiAnc3FydCcsXG4gICAgZGV0YWlsOiAnc3FydCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZXMgdGhlIHNxdWFyZSByb290IG9mIGFsbCBlbGVtZW50cyBpbiBgdmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICd0aW1lJyxcbiAgICBsYWJlbDogJ3RpbWUnLFxuICAgIGRldGFpbDogJ3RpbWUoKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSBKYW51YXJ5IDEsIDE5NzAgVVRDLiBOb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCBhY3R1YWxseSByZXR1cm4gdGhlIGN1cnJlbnQgdGltZSwgYnV0IHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBleHByZXNzaW9uIGlzIHRvIGJlIGV2YWx1YXRlZC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3RpbWVzdGFtcCcsXG4gICAgbGFiZWw6ICd0aW1lc3RhbXAnLFxuICAgIGRldGFpbDogJ3RpbWVzdGFtcCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSZXR1cm5zIHRoZSB0aW1lc3RhbXAgb2YgZWFjaCBvZiB0aGUgc2FtcGxlcyBvZiB0aGUgZ2l2ZW4gdmVjdG9yIGFzIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBzaW5jZSBKYW51YXJ5IDEsIDE5NzAgVVRDLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAndmVjdG9yJyxcbiAgICBsYWJlbDogJ3ZlY3RvcicsXG4gICAgZGV0YWlsOiAndmVjdG9yKHMgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdGhlIHNjYWxhciBgc2AgYXMgYSB2ZWN0b3Igd2l0aCBubyBsYWJlbHMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICd5ZWFyJyxcbiAgICBsYWJlbDogJ3llYXInLFxuICAgIGRldGFpbDogJ3llYXIodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSB5ZWFyIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdhdmdfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2F2Z19vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2F2Z19vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBhdmVyYWdlIHZhbHVlIG9mIGFsbCBwb2ludHMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21pbl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbWluX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbWluX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1pbmltdW0gdmFsdWUgb2YgYWxsIHBvaW50cyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWF4X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdtYXhfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbWF4aW11bSB2YWx1ZSBvZiBhbGwgcG9pbnRzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdW1fb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N1bV9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N1bV9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBzdW0gb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2NvdW50X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnY291bnRfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgY291bnQgb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3F1YW50aWxlX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAncXVhbnRpbGVfb3Zlcl90aW1lKHNjYWxhciwgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSDPhi1xdWFudGlsZSAoMCDiiaQgz4Yg4omkIDEpIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3RkZGV2X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3RkZGV2X292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgZGV2aWF0aW9uIG9mIHRoZSB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N0ZHZhcl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3RkdmFyX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgdmFyaWFuY2Ugb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbGFzdF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbGFzdF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2xhc3Rfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbW9zdCByZWNlbnQgcG9pbnQgdmFsdWUgaW4gc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUFJPTV9LRVlXT1JEUyA9IEZVTkNUSU9OUy5tYXAoKGtleXdvcmQpID0+IGtleXdvcmQubGFiZWwpO1xuXG5leHBvcnQgY29uc3QgcHJvbXFsR3JhbW1hcjogR3JhbW1hciA9IHtcbiAgY29tbWVudDoge1xuICAgIHBhdHRlcm46IC8jLiovLFxuICB9LFxuICAnY29udGV4dC1hZ2dyZWdhdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvKChieXx3aXRob3V0KVxccyopXFwoW14pXSpcXCkvLCAvLyBieSAoKVxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW14oKSxcXHNdW14sKV0qW14pLFxcc10qLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpXS8sXG4gICAgfSxcbiAgfSxcbiAgJ2NvbnRleHQtbGFiZWxzJzoge1xuICAgIHBhdHRlcm46IC9cXHtbXn1dKig/PX0/KS8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvIy4qLyxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW2Etel9dXFx3Kig/PVxccyooPXwhPXw9fnwhfikpLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgJ2xhYmVsLXZhbHVlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ2F0dHItdmFsdWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW3tdLyxcbiAgICB9LFxuICB9LFxuICBmdW5jdGlvbjogbmV3IFJlZ0V4cChgXFxcXGIoPzoke0ZVTkNUSU9OUy5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX0pKD89XFxcXHMqXFxcXCgpYCwgJ2knKSxcbiAgJ2NvbnRleHQtcmFuZ2UnOiBbXG4gICAge1xuICAgICAgcGF0dGVybjogL1xcW1teXFxdXSooPz1dKS8sIC8vIFsxbV1cbiAgICAgIGluc2lkZToge1xuICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcYlxcZCtbc21oZHd5XVxcYi9pLFxuICAgICAgICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvKG9mZnNldFxccyspXFx3Ky8sIC8vIG9mZnNldCAxbVxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAncmFuZ2UtZHVyYXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogL1xcYlxcZCtbc21oZHd5XVxcYi9pLFxuICAgICAgICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgaWRMaXN0OiB7XG4gICAgcGF0dGVybjogL1xcZCsoXFx8XFxkKykrLyxcbiAgICBhbGlhczogJ251bWJlcicsXG4gIH0sXG4gIG51bWJlcjogL1xcYi0/XFxkKygoXFwuXFxkKik/KFtlRV1bKy1dP1xcZCspPyk/XFxiLyxcbiAgb3BlcmF0b3I6IG5ldyBSZWdFeHAoYC9bLSsqLz0lXn5dfCYmP3xcXFxcfD9cXFxcfHwhPT98PCg/Oj0+P3w8fD4pP3w+Wz49XT98XFxcXGIoPzoke09QRVJBVE9SUy5qb2luKCd8Jyl9KVxcXFxiYCwgJ2knKSxcbiAgcHVuY3R1YXRpb246IC9be307KClgLC5dLyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb21xbEdyYW1tYXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwidXNlQ2xlYW51cCIsInN0YXRlU2VsZWN0b3IiLCJkaXNwYXRjaCIsInNlbGVjdG9yUmVmIiwiY3VycmVudCIsIlJlYWN0IiwiTW9kYWwiLCJWZXJ0aWNhbEdyb3VwIiwiQWxlcnRIb3dUb01vZGFsIiwib25EaXNtaXNzIiwidXNlQ2FsbGJhY2siLCJIaWdobGlnaHRlciIsIkljb24iLCJCdXR0b24iLCJMaW5rQnV0dG9uIiwiQ2FyZCIsIkFsZXJ0UnVsZUl0ZW0iLCJydWxlIiwic2VhcmNoIiwib25Ub2dnbGVQYXVzZSIsInJ1bGVVcmwiLCJ1cmwiLCJwYW5lbElkIiwicmVuZGVyVGV4dCIsInRleHQiLCJuYW1lIiwic3RhdGVJY29uIiwic3RhdGVDbGFzcyIsInN0YXRlVGV4dCIsInN0YXRlQWdlIiwiaW5mbyIsInN0YXRlIiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJjb25maWciLCJsb2NhdGlvblNlcnZpY2UiLCJGaWx0ZXJJbnB1dCIsIlNlbGVjdCIsImFwcEV2ZW50cyIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsIlNob3dNb2RhbFJlYWN0RXZlbnQiLCJVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24iLCJnZXRBbGVydFJ1bGVzQXN5bmMiLCJ0b2dnbGVQYXVzZUFsZXJ0UnVsZSIsInNldFNlYXJjaFF1ZXJ5IiwiZ2V0QWxlcnRSdWxlSXRlbXMiLCJnZXRTZWFyY2hRdWVyeSIsIm1hcFN0YXRlVG9Qcm9wcyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJhbGVydFJ1bGVzIiwiaXNMb2FkaW5nIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiQWxlcnRSdWxlTGlzdFVuY29ubmVjdGVkIiwibGFiZWwiLCJ2YWx1ZSIsIm9wdGlvbiIsInBhcnRpYWwiLCJwdWJsaXNoIiwiY29tcG9uZW50IiwicHJvcHMiLCJpZCIsInBhdXNlZCIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hSdWxlcyIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInF1ZXJ5UGFyYW1zIiwiZ2V0U3RhdGVGaWx0ZXIiLCJyZW5kZXIiLCJvblNlYXJjaFF1ZXJ5Q2hhbmdlIiwic3RhdGVGaWx0ZXJzIiwib25TdGF0ZUZpbHRlckNoYW5nZWQiLCJ1bmlmaWVkQWxlcnRpbmdFbmFibGVkIiwib25PcGVuSG93VG8iLCJtYXAiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJBbGVydCIsIkxPQ0FMX1NUT1JBR0VfS0VZIiwic2hvd1VuaWZpZWRBbGVydGluZ1Byb21vdGlvbiIsInNldFNob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24iLCJnZXRCYWNrZW5kU3J2Iiwibm90aWZ5QXBwIiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIiwibG9hZEFsZXJ0UnVsZXMiLCJsb2FkZWRBbGVydFJ1bGVzIiwibm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCIsInNldE5vdGlmaWNhdGlvbkNoYW5uZWxzIiwib3B0aW9ucyIsInJ1bGVzIiwiZ2V0IiwicG9zdCIsInN0YXRlRmlsdGVyIiwiZ2V0U2VhcmNoT2JqZWN0IiwidG9TdHJpbmciLCJjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsIiwiZGF0YSIsInB1c2giLCJlcnJvciIsInVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwiLCJwdXQiLCJ0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCIsImdldFN0YXRlIiwiY2hhbm5lbCIsIm5vdGlmaWNhdGlvbkNoYW5uZWwiLCJsb2FkTm90aWZpY2F0aW9uVHlwZXMiLCJhbGVydE5vdGlmaWVycyIsIm5vdGlmaWNhdGlvblR5cGVzIiwic29ydCIsIm8xIiwibzIiLCJsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbCIsInNlYXJjaFF1ZXJ5IiwicmVnZXgiLCJSZWdFeHAiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJ0ZXN0IiwiZ2V0Tm90aWZpY2F0aW9uQ2hhbm5lbCIsImNoYW5uZWxJZCIsImNzcyIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZUxvY2F0aW9uIiwidXJsVXRpbCIsInVzZVN0eWxlczIiLCJ3aXRoRXJyb3JCb3VuZGFyeSIsInVzZVF1ZXJ5UGFyYW1zIiwiQWxlcnRpbmdQYWdlV3JhcHBlciIsIk5vUnVsZXNTcGxhc2giLCJSdWxlTGlzdEVycm9ycyIsIlJ1bGVMaXN0R3JvdXBWaWV3IiwiUnVsZUxpc3RTdGF0ZVZpZXciLCJSdWxlU3RhdHMiLCJSdWxlc0ZpbHRlciIsInVzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMiLCJ1c2VGaWx0ZXJlZFJ1bGVzIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFsbFByb21BbmRSdWxlclJ1bGVzQWN0aW9uIiwidXNlUnVsZXNBY2Nlc3MiLCJSVUxFX0xJU1RfUE9MTF9JTlRFUlZBTF9NUyIsImdldEFsbFJ1bGVzU291cmNlTmFtZXMiLCJnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyIsIlZJRVdTIiwiZ3JvdXBzIiwiUnVsZUxpc3QiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJydWxlc0RhdGFTb3VyY2VOYW1lcyIsImxvY2F0aW9uIiwiZXhwYW5kQWxsIiwic2V0RXhwYW5kQWxsIiwiZmlsdGVycyIsImZpbHRlcnNBY3RpdmUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb21lIiwidW5kZWZpbmVkIiwiY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzIiwiY2FuQ3JlYXRlQ2xvdWRSdWxlcyIsInZpZXciLCJWaWV3Q29tcG9uZW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwcm9tUnVsZVJlcXVlc3RzIiwicHJvbVJ1bGVzIiwicnVsZXJSdWxlUmVxdWVzdHMiLCJydWxlclJ1bGVzIiwiZGlzcGF0Y2hlZCIsImxvYWRpbmciLCJoYXZlUmVzdWx0cyIsInJlc3VsdCIsImxlbmd0aCIsImtleXMiLCJzaG93TmV3QWxlcnRTcGxhc2giLCJjb21iaW5lZE5hbWVzcGFjZXMiLCJmaWx0ZXJlZE5hbWVzcGFjZXMiLCJicmVhayIsImJ1dHRvbnNDb250YWluZXIiLCJzdGF0c0NvbnRhaW5lciIsImV4cGFuZEFsbEJ1dHRvbiIsInJlbmRlclVybCIsInJldHVyblRvIiwicGF0aG5hbWUiLCJzdHlsZSIsInRoZW1lIiwic3BhY2luZyIsImNvbG9ycyIsImJvcmRlciIsIm1lZGl1bSIsInVzZVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJwYWdlSWQiLCJjb250ZXh0U3J2IiwiQXV0aG9yaXplIiwiYWN0aW9ucyIsImZhbGxiYWNrIiwiYWN0aW9uIiwiaGFzQWNjZXNzIiwiY3giLCJEeW5hbWljVGFibGUiLCJEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcyIsInJlbmRlckV4cGFuZGVkQ29udGVudCIsImluZGV4IiwiY29udGVudEd1aWRlbGluZSIsImd1aWRlbGluZSIsInJlbGF0aXZlIiwiaGVhZGVyR3VpZGVsaW5lIiwiXyIsInRvcEd1aWRlbGluZSIsImJvdHRvbUd1aWRlbGluZSIsImJyZWFrcG9pbnRzIiwiZG93biIsImxhbmd1YWdlcyIsInByaXNtTGFuZ3VhZ2VzIiwiRWRpdG9yIiwibWFrZVZhbHVlIiwiU2xhdGVQcmlzbSIsInVzZVN0eWxlcyIsIkxvZ3FsU3ludGF4IiwiUHJvbXFsU3ludGF4IiwiRGF0YVNvdXJjZVR5cGUiLCJpc0Nsb3VkUnVsZXNTb3VyY2UiLCJXZWxsIiwiSGlnaGxpZ2h0ZWRRdWVyeSIsImxhbmd1YWdlIiwiZXhwciIsInBsdWdpbnMiLCJvbmx5SW4iLCJub2RlIiwidHlwZSIsImdldFN5bnRheCIsInNsYXRlVmFsdWUiLCJFeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsInF1ZXJ5IiwicnVsZXNTb3VyY2UiLCJ3ZWxsIiwiTG9raSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwibW9ub3NwYWNlIiwiUnVsZUxvY2F0aW9uIiwibmFtZXNwYWNlIiwiZ3JvdXAiLCJQcm9tQWxlcnRpbmdSdWxlU3RhdGUiLCJTdGF0ZUNvbG9yZWRUZXh0Iiwic3RhdHVzIiwiSW5hY3RpdmUiLCJzdWNjZXNzIiwiUGVuZGluZyIsIndhcm5pbmciLCJGaXJpbmciLCJuZXV0cmFsIiwic2Vjb25kYXJ5IiwiU3RhY2siLCJMYWJlbCIsIlRvb2x0aXAiLCJJbnB1dCIsIk1hdGNoZXJGaWx0ZXIiLCJjbGFzc05hbWUiLCJvbkZpbHRlckNoYW5nZSIsImRlZmF1bHRRdWVyeVN0cmluZyIsInF1ZXJ5U3RyaW5nIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlYXJjaEljb24iLCJpY29uIiwiaW5wdXRXaWR0aCIsIkFjdGlvbkljb24iLCJ0b29sdGlwIiwidG8iLCJvbkNsaWNrIiwidG9vbHRpcFBsYWNlbWVudCIsInJlc3QiLCJhcmlhTGFiZWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiR3JhZmFuYUFsZXJ0U3RhdGUiLCJBbGVydEluc3RhbmNlU3RhdGVGaWx0ZXIiLCJvblN0YXRlRmlsdGVyQ2hhbmdlIiwic3RhdGVPcHRpb25zIiwidiIsInBsdXJhbGl6ZSIsIkxvYWRpbmdQbGFjZWhvbGRlciIsImdldFJ1bGVzRGF0YVNvdXJjZXMiLCJnZXRSdWxlc1NvdXJjZU5hbWUiLCJSdWxlc0dyb3VwIiwiQ2xvdWRSdWxlcyIsIm5hbWVzcGFjZXMiLCJydWxlc0RhdGFTb3VyY2VzIiwiZGF0YVNvdXJjZXNMb2FkaW5nIiwiZHMiLCJ3cmFwcGVyIiwic2VjdGlvbkhlYWRlciIsImxvYWRlciIsInhsIiwiRm9ybSIsIkZpZWxkIiwidXBkYXRlTG90ZXhOYW1lc3BhY2VBbmRHcm91cEFjdGlvbiIsImluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSIsImR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4iLCJFZGl0Q2xvdWRHcm91cE1vZGFsIiwib25DbG9zZSIsInVwZGF0ZUxvdGV4TmFtZXNwYWNlQW5kR3JvdXAiLCJkZWZhdWx0VmFsdWVzIiwibmFtZXNwYWNlTmFtZSIsImdyb3VwTmFtZSIsImdyb3VwSW50ZXJ2YWwiLCJ1bmlmaWVkQWxlcnRpbmciLCJvblN1Ym1pdCIsInJ1bGVzU291cmNlTmFtZSIsIm5ld0dyb3VwTmFtZSIsIm5ld05hbWVzcGFjZU5hbWUiLCJtb2RhbCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwiaXNEaXJ0eSIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJKU09OIiwic3RyaW5naWZ5IiwiZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMiLCJHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIiwiR3JhZmFuYVJ1bGVzIiwid2FudHNHcm91cGVkVmlldyIsIm5hbWVzcGFjZXNGb3JtYXQiLCJDYWxsVG9BY3Rpb25DYXJkIiwiRW1wdHlMaXN0Q1RBIiwiQWxlcnRMYWJlbHMiLCJEZXRhaWxzRmllbGQiLCJSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMiLCJSdWxlRGV0YWlsc0Fubm90YXRpb25zIiwiUnVsZURldGFpbHNEYXRhU291cmNlcyIsIlJ1bGVEZXRhaWxzRXhwcmVzc2lvbiIsIlJ1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMiLCJSdWxlRGV0YWlscyIsInByb21SdWxlIiwiYW5ub3RhdGlvbnMiLCJlbnRyaWVzIiwidHJpbSIsImxlZnRTaWRlIiwibGFiZWxzIiwicmlnaHRTaWRlIiwidXAiLCJGcmFnbWVudCIsIkNsaXBib2FyZEJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsIkhvcml6b250YWxHcm91cCIsInVzZUFwcE5vdGlmaWNhdGlvbiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJ1c2VJc1J1bGVFZGl0YWJsZSIsInVzZVN0YXRlSGlzdG9yeU1vZGFsIiwiZGVsZXRlUnVsZUFjdGlvbiIsImdldEFsZXJ0bWFuYWdlckJ5VWlkIiwiQW5ub3RhdGlvbiIsImlzR3JhZmFuYVJ1bGVzU291cmNlIiwiY3JlYXRlRXhwbG9yZUxpbmsiLCJjcmVhdGVWaWV3TGluayIsIm1ha2VSdWxlQmFzZWRTaWxlbmNlTGluayIsInJ1bGVJZCIsImlzRmVkZXJhdGVkUnVsZUdyb3VwIiwicnVsZXJSdWxlIiwicnVsZVRvRGVsZXRlIiwic2V0UnVsZVRvRGVsZXRlIiwiYWxlcnRJZCIsImlzR3JhZmFuYVJ1bGVyUnVsZSIsImdyYWZhbmFfYWxlcnQiLCJTdGF0ZUhpc3RvcnlNb2RhbCIsInNob3dTdGF0ZUhpc3RvcnlNb2RhbCIsImFsZXJ0bWFuYWdlclNvdXJjZU5hbWUiLCJqc29uRGF0YSIsImFsZXJ0bWFuYWdlclVpZCIsImhhc0V4cGxvcmVQZXJtaXNzaW9uIiwiaGFzUGVybWlzc2lvbiIsIkRhdGFTb3VyY2VzRXhwbG9yZSIsImxlZnRCdXR0b25zIiwicmlnaHRCdXR0b25zIiwiaXNGZWRlcmF0ZWQiLCJpc0VkaXRhYmxlIiwiaXNSZW1vdmFibGUiLCJpc1ZpZXdNb2RlIiwiaW5WaWV3TW9kZSIsImRlbGV0ZVJ1bGUiLCJpZGVudGlmaWVyIiwiZnJvbVJ1bGVyUnVsZSIsIm5hdmlnYXRlVG8iLCJidWlsZFNoYXJlVXJsIiwiYXBwVXJsIiwiYXBwU3ViVXJsIiwiYmFzZVVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImhyZWYiLCJzcGxpdCIsImJ1dHRvbiIsInJ1bmJvb2tVUkwiLCJkYXNoYm9hcmRVSUQiLCJwYW5lbElEIiwiQWxlcnRpbmdJbnN0YW5jZUNyZWF0ZSIsImlzRWRpdG9yIiwic291cmNlTmFtZSIsImVkaXRVUkwiLCJzdHJpbmdpZnlJZGVudGlmaWVyIiwiZW5kc1dpdGgiLCJzaXplIiwic20iLCJBbm5vdGF0aW9uRGV0YWlsc0ZpZWxkIiwia2V5IiwiZ2V0RGF0YVNvdXJjZVNydiIsIkV4cHJlc3Npb25EYXRhc291cmNlVUlEIiwiZGF0YVNvdXJjZXMiLCJtZXRhIiwibG9nb3MiLCJzbWFsbCIsInVuaXF1ZSIsInJlZHVjZSIsImdldEluc3RhbmNlU2V0dGluZ3MiLCJkYXRhc291cmNlVWlkIiwidWlkIiwiZGF0YVNvdXJjZUljb24iLCJleHByUm93IiwibGFiZWxzTWF0Y2hNYXRjaGVycyIsInBhcnNlTWF0Y2hlcnMiLCJzb3J0QWxlcnRzIiwiU29ydE9yZGVyIiwiaXNBbGVydGluZ1J1bGUiLCJBbGVydEluc3RhbmNlc1RhYmxlIiwic2V0UXVlcnlTdHJpbmciLCJhbGVydFN0YXRlIiwic2V0QWxlcnRTdGF0ZSIsImZpbHRlcktleSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInF1ZXJ5U3RyaW5nS2V5IiwiYWxlcnRzIiwiZmlsdGVyQWxlcnRzIiwiSW1wb3J0YW5jZSIsImZsZXhSb3ciLCJzcGFjZUJldHdlZW4iLCJyb3dDaGlsZCIsImFsZXJ0SW5zdGFuY2VMYWJlbCIsImFsZXJ0SW5zdGFuY2VTdGF0ZSIsImZpbHRlcmVkQWxlcnRzIiwibWF0Y2hlcnMiLCJhbGVydCIsIlJ1bGVIZWFsdGgiLCJnZXRTdHlsZSIsImhlYWx0aCIsImxhc3RFcnJvciIsIndhcm4iLCJpc1J1bGVyTm90U3VwcG9ydGVkUmVzcG9uc2UiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiY2xvc2VkIiwic2V0Q2xvc2VkIiwiZGF0YVNvdXJjZUNvbmZpZ1JlcXVlc3RzIiwiZGF0YVNvdXJjZUNvbmZpZ0Vycm9ycyIsInByb21SZXF1ZXN0RXJyb3JzIiwicnVsZXJSZXF1ZXN0RXJyb3JzIiwicmVxdWVzdHMiLCJkYXRhU291cmNlIiwiZ3JhZmFuYVByb21FcnJvciIsImdyYWZhbmFSdWxlckVycm9yIiwiZm9yRWFjaCIsImlkeCIsIm1vcmVCdXR0b24iLCJFcnJvclN1bW1hcnlCdXR0b24iLCJjb3VudCIsImZsb2F0UmlnaHQiLCJncmFmYW5hTmFtZXNwYWNlcyIsImNsb3VkTmFtZXNwYWNlcyIsInNvcnRlZCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIm5zIiwiQWxlcnRpbmdSdWxlUmVhZCIsIkFsZXJ0aW5nUnVsZUV4dGVybmFsUmVhZCIsImFsZXJ0U3RhdGVUb1JlYWRhYmxlIiwiQ29sbGFwc2VUb2dnbGUiLCJSdWxlc1RhYmxlIiwiUnVsZUxpc3RTdGF0ZVNlY3Rpb24iLCJkZWZhdWx0Q29sbGFwc2VkIiwiY29sbGFwc2VkIiwic2V0Q29sbGFwc2VkIiwiaGVhZGVyIiwiY29sbGFwc2VUb2dnbGUiLCJydWxlc1RhYmxlIiwiZ3JvdXBlZFJ1bGVzIiwiaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmciLCJTcGlubmVyIiwiaXNSZWNvcmRpbmdSdWxlIiwiZ2V0Rmlyc3RBY3RpdmVBdCIsIkFsZXJ0U3RhdGVUYWciLCJSdWxlU3RhdGUiLCJpc0RlbGV0aW5nIiwiaXNDcmVhdGluZyIsImZvclRpbWUiLCJmaXJzdEFjdGl2ZUF0IiwiU3RyaW5nIiwiZm9yIiwic3RhcnQiLCJlbmQiLCJEYXRlIiwiYm9keVNtYWxsIiwiZm9udFNpemUiLCJpc1JlY29yZGluZ1J1bGVyUnVsZSIsImVtcHR5U3RhdHMiLCJ0b3RhbCIsInJlY29yZGluZyIsInNob3dJbmFjdGl2ZSIsInNob3dSZWNvcmRpbmciLCJjYWxjdWxhdGVkIiwic3RhdHMiLCJjYWxjUnVsZSIsInN0YXRzQ29tcG9uZW50cyIsInByZXYiLCJjdXJyIiwiZGVib3VuY2UiLCJEYXRhU291cmNlUGlja2VyIiwiUHJvbVJ1bGVUeXBlIiwiVmlld09wdGlvbnMiLCJSdWxlVHlwZU9wdGlvbnMiLCJBbGVydGluZyIsIlJlY29yZGluZyIsInNldFF1ZXJ5UGFyYW1zIiwic2V0RmlsdGVyS2V5IiwiZGF0YVNvdXJjZUtleSIsInJ1bGVUeXBlIiwiaGFuZGxlRGF0YVNvdXJjZUNoYW5nZSIsImRhdGFTb3VyY2VWYWx1ZSIsImNsZWFyRGF0YVNvdXJjZSIsImhhbmRsZVF1ZXJ5U3RyaW5nQ2hhbmdlIiwiaGFuZGxlQWxlcnRTdGF0ZUNoYW5nZSIsImhhbmRsZVZpZXdDaGFuZ2UiLCJoYW5kbGVSdWxlVHlwZUNoYW5nZSIsImhhbmRsZUNsZWFyRmlsdGVyc0NsaWNrIiwic2V0VGltZW91dCIsImNvbnRhaW5lciIsImNsZWFyQnV0dG9uIiwiQmFkZ2UiLCJrYm4iLCJ1c2VGb2xkZXIiLCJ1c2VIYXNSdWxlciIsImRlbGV0ZVJ1bGVzR3JvdXBBY3Rpb24iLCJtZW1vIiwiaXNFZGl0aW5nR3JvdXAiLCJzZXRJc0VkaXRpbmdHcm91cCIsImlzRGVsZXRpbmdHcm91cCIsInNldElzRGVsZXRpbmdHcm91cCIsImlzQ29sbGFwc2VkIiwic2V0SXNDb2xsYXBzZWQiLCJjYW5FZGl0Q2xvdWRSdWxlcyIsIkFsZXJ0aW5nUnVsZUV4dGVybmFsV3JpdGUiLCJoYXNSdWxlciIsImZvbGRlclVJRCIsIm5hbWVzcGFjZV91aWQiLCJmb2xkZXIiLCJmaW5kIiwiZGVsZXRlR3JvdXAiLCJhY3Rpb25JY29ucyIsInNsdWdpZnlGb3JVcmwiLCJjYW5TYXZlIiwiY2FuQWRtaW4iLCJpc1VuZ3JvdXBlZCIsImhlYWRpbmciLCJzcGFjZXIiLCJoZWFkZXJTdGF0cyIsImFjdGlvbnNTZXBhcmF0b3IiLCJkaXNwbGF5TmFtZSIsImJhY2tncm91bmQiLCJkYXRhU291cmNlT3JpZ2luIiwiZGlzYWJsZWQiLCJzaG93R3VpZGVsaW5lcyIsImVtcHR5TWVzc2FnZSIsInNob3dHcm91cENvbHVtbiIsInNob3dTdW1tYXJ5Q29sdW1uIiwid3JhcHBlckNsYXNzIiwid3JhcHBlck1hcmdpbiIsInNlZW5LZXlzIiwicnVsZUlkeCIsImluY2x1ZGVzIiwiY29sdW1ucyIsInVzZUNvbHVtbnMiLCJUYWJsZUNvbXBvbmVudCIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwicmVuZGVyQ2VsbCIsInN1bW1hcnkiLCJ1bmlxdWVJZCIsImRhdGVUaW1lRm9ybWF0IiwidXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5IiwiQWxlcnRMYWJlbCIsIlN0YXRlSGlzdG9yeSIsInJlbmRlclN0YXRlQ2VsbCIsInJlbmRlclZhbHVlQ2VsbCIsInJlbmRlclRpbWVzdGFtcENlbGwiLCJhY2MiLCJuZXdTdGF0ZSIsInRpbWVzdGFtcCIsInVwZGF0ZWQiLCJoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlIiwicHJldlN0YXRlIiwiaGlzdG9yeUl0ZW0iLCJtYXRjaGVzIiwiZXZhbE1hdGNoZXMiLCJtYXRjaCIsIm1ldHJpYyIsIlRpbWVzdGFtcFN0eWxlIiwiTGFiZWxzV3JhcHBlciIsInhzIiwiY3VycmVudEhpc3RvcnlJdGVtIiwicHJldmlvdXNIaXN0b3J5SXRlbSIsImdldEFsbFJ1bGVzU291cmNlcyIsImdldFJ1bGVzU291cmNlQnlOYW1lIiwiaXNBbGVydGluZ1J1bGVyUnVsZSIsInByb21SdWxlc1Jlc3BvbnNlcyIsInJ1bGVyUnVsZXNSZXNwb25zZXMiLCJjYWNoZSIsInJ1bGVzU291cmNlcyIsIkVycm9yIiwiY2FjaGVkIiwiYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlIiwiYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UiLCJmbGF0IiwibmV3TmFtZXNwYWNlIiwic29ydFJ1bGVzQnlOYW1lIiwiZmxhdE1hcCIsImNvbWJpbmVkR3JvdXAiLCJzb3VyY2VfdGVuYW50cyIsInJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlIiwiZyIsImV4aXN0aW5nUnVsZSIsImdldEV4aXN0aW5nUnVsZUluR3JvdXAiLCJwcm9tUnVsZVRvQ29tYmluZWRSdWxlIiwicmVjb3JkIiwidGl0bGUiLCJpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZSIsImNvbWJpbmVkUnVsZSIsImNoZWNrUXVlcnkiLCJoYXNoUXVlcnkiLCJzbGljZSIsInJlcGxhY2UiLCJqb2luIiwicmVkdWNlTmFtZXNwYWNlcyIsIm5hbWVzcGFjZUFjYyIsInJlZHVjZUdyb3VwcyIsImdyb3VwQWNjIiwiaXNRdWVyeWluZ0RhdGFTb3VyY2UiLCJub3JtYWxpemVkUXVlcnlTdHJpbmciLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImRvZXNOYW1lQ29udGFpbnNRdWVyeVN0cmluZyIsImRvUnVsZUxhYmVsc01hdGNoUXVlcnkiLCJkb0FsZXJ0c0NvbnRhaW5NYXRjaGluZ0xhYmVscyIsImZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uIiwiZm9sZGVyUmVxdWVzdHMiLCJmb2xkZXJzIiwicmVxdWVzdCIsImdldFJ1bGVzUGVybWlzc2lvbnMiLCJydWxlUGVybWlzc2lvbiIsImhhc0VkaXRQZXJtaXNzaW9uIiwidXBkYXRlIiwiaGFzUmVtb3ZlUGVybWlzc2lvbiIsImRlbGV0ZSIsImlzUnVsZXJBdmFpbGFibGUiLCJCb29sZWFuIiwicnVsZXJDb25maWciLCJmZXRjaEdyYWZhbmFBbm5vdGF0aW9uc0FjdGlvbiIsImhpc3RvcnkiLCJtYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoaWRlU3RhdGVIaXN0b3J5TW9kYWwiLCJnZXRSdWxlc0FjY2VzcyIsIkFHR1JFR0FUSU9OX09QRVJBVE9SUyIsImluc2VydFRleHQiLCJkb2N1bWVudGF0aW9uIiwiUElQRV9QQVJTRVJTIiwibW92ZSIsIlBJUEVfT1BFUkFUT1JTIiwiZGV0YWlsIiwiUkFOR0VfVkVDX0ZVTkNUSU9OUyIsIkZVTkNUSU9OUyIsIkxPS0lfS0VZV09SRFMiLCJrZXl3b3JkIiwibG9raUdyYW1tYXIiLCJjb21tZW50IiwibG9va2JlaGluZCIsImluc2lkZSIsImFsaWFzIiwicHVuY3R1YXRpb24iLCJncmVlZHkiLCJmIiwiZnVuY3Rpb24iLCJxdW90ZSIsImJhY2t0aWNrcyIsIm51bWJlciIsIm9wZXJhdG9yIiwiUkFURV9SQU5HRVMiLCJzb3J0VmFsdWUiLCJPUEVSQVRPUlMiLCJMT0dJQ0FMX09QRVJBVE9SUyIsIlRSSUdPTk9NRVRSSUNfRlVOQ1RJT05TIiwiUFJPTV9LRVlXT1JEUyIsInByb21xbEdyYW1tYXIiLCJpZExpc3QiXSwic291cmNlUm9vdCI6IiJ9