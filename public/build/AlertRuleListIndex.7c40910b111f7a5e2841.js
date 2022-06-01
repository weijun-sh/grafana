"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2461,4286],{

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

/***/ "./public/app/features/alerting/AlertRuleList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AlertRuleListUnconnected": () => (/* binding */ AlertRuleListUnconnected),
  "default": () => (/* binding */ AlertRuleList)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/app_events.ts
var app_events = __webpack_require__("./public/app/core/app_events.ts");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./public/app/types/events.ts
var events = __webpack_require__("./public/app/types/events.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/AlertHowToModal.tsx
var _VerticalGroup;





function AlertHowToModal(_ref) {
  let {
    onDismiss
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
    title: "Adding an Alert",
    isOpen: true,
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    children: _VerticalGroup || (_VerticalGroup = /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
      spacing: "sm",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: "public/img/alert_howto_new.png",
        alt: "link to how to alert image"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "Remember to save the dashboard to persist your alert rule changes."
      })]
    }))
  });
}
// EXTERNAL MODULE: ./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js
var main = __webpack_require__("./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js");
var main_default = /*#__PURE__*/__webpack_require__.n(main);
;// CONCATENATED MODULE: ./public/app/features/alerting/AlertRuleItem.tsx
 // @ts-ignore






const AlertRuleItem = _ref => {
  let {
    rule,
    search,
    onTogglePause
  } = _ref;
  const ruleUrl = `${rule.url}?editPanel=${rule.panelId}&tab=alert`;
  const renderText = (0,react.useCallback)(text => /*#__PURE__*/(0,jsx_runtime.jsx)((main_default()), {
    highlightClassName: "highlight-search-match",
    textToHighlight: text,
    searchWords: [search]
  }, text), [search]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Card, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Card.Heading, {
      children: renderText(rule.name)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Card.Figure, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        size: "xl",
        name: rule.stateIcon,
        className: `alert-rule-item__icon ${rule.stateClass}`
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Card.Meta, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: `${rule.stateClass}`,
          children: [renderText(rule.stateText), ' ']
        }, "text"), "for ", rule.stateAge]
      }, "state"), rule.info ? renderText(rule.info) : null]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Card.Actions, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        icon: rule.state === 'paused' ? 'play' : 'pause',
        onClick: onTogglePause,
        children: rule.state === 'paused' ? 'Resume' : 'Pause'
      }, "play"), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: "secondary",
        href: ruleUrl,
        icon: "cog",
        children: "Edit alert"
      }, "edit")]
    })]
  });
};

/* harmony default export */ const alerting_AlertRuleItem = (AlertRuleItem);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js
var useLocalStorage = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/components/UnifiedAlertingPromotion.tsx
var _p, _p2;






const LOCAL_STORAGE_KEY = 'grafana.legacyalerting.unifiedalertingpromo';

const UnifiedAlertingPromotion = () => {
  const [showUnifiedAlertingPromotion, setShowUnifiedAlertingPromotion] = (0,useLocalStorage/* default */.Z)(LOCAL_STORAGE_KEY, true);

  if (!showUnifiedAlertingPromotion) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
    severity: "info",
    title: "Try out the Grafana 8 alerting!",
    onRemove: () => setShowUnifiedAlertingPromotion(false),
    children: [_p || (_p = /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
      children: ["You are using the legacy Grafana alerting.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "While we have no plans of deprecating it any time soon, we invite you to give the improved Grafana 8 alerting a try."]
    })), _p2 || (_p2 = /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
      children: ["See", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",
        children: "What\u2019s New with Grafana 8 alerting"
      }), ' ', "to learn more about what\u2018s new in Grafana 8 alerting or learn", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",
        children: "how to enable the new Grafana 8 alerting feature"
      }), "."]
    }))]
  });
};


// EXTERNAL MODULE: ./public/app/features/alerting/state/actions.ts
var actions = __webpack_require__("./public/app/features/alerting/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/state/reducers.ts + 1 modules
var reducers = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/state/selectors.ts
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
;// CONCATENATED MODULE: ./public/app/features/alerting/AlertRuleList.tsx
var _label, _div, _LinkButton, _UnifiedAlertingPromo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function mapStateToProps(state) {
  return {
    navModel: (0,navModel/* getNavModel */.h)(state.navIndex, 'alert-list'),
    alertRules: getAlertRuleItems(state),
    search: getSearchQuery(state.alertRules),
    isLoading: state.alertRules.isLoading
  };
}

const mapDispatchToProps = {
  getAlertRulesAsync: actions/* getAlertRulesAsync */.Au,
  setSearchQuery: reducers/* setSearchQuery */.ql,
  togglePauseAlertRule: actions/* togglePauseAlertRule */.en
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);
class AlertRuleListUnconnected extends react.PureComponent {
  constructor() {
    super(...arguments);

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
      src.locationService.partial({
        state: option.value
      });
    });

    _defineProperty(this, "onOpenHowTo", () => {
      app_events/* default.publish */.Z.publish(new events/* ShowModalReactEvent */.Dn({
        component: AlertHowToModal
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

    _defineProperty(this, "alertStateFilterOption", _ref => {
      let {
        text,
        value
      } = _ref;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
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
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
      navModel: navModel,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default.Contents */.Z.Contents, {
        isLoading: isLoading,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form gf-form--grow",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
              placeholder: "Search alerts",
              value: search,
              onChange: this.onSearchQueryChange
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "gf-form",
            children: [_label || (_label = /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
              className: "gf-form-label",
              htmlFor: "alert-state-filter",
              children: "States"
            })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "width-13",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
                inputId: 'alert-state-filter',
                options: this.stateFilters,
                onChange: this.onStateFilterChanged,
                value: this.getStateFilter()
              })
            })]
          }), _div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "page-action-bar__spacer"
          })), src.config.unifiedAlertingEnabled && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            variant: "primary",
            href: "alerting/ng/new",
            children: "Add NG Alert"
          }))), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            variant: "secondary",
            onClick: this.onOpenHowTo,
            children: "How to add an alert"
          })]
        }), _UnifiedAlertingPromo || (_UnifiedAlertingPromo = /*#__PURE__*/(0,jsx_runtime.jsx)(UnifiedAlertingPromotion, {})), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.VerticalGroup, {
          spacing: "none",
          children: alertRules.map(rule => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(alerting_AlertRuleItem, {
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
/* harmony default export */ const AlertRuleList = (connector(AlertRuleListUnconnected));

/***/ }),

/***/ "./public/app/features/alerting/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Au": () => (/* binding */ getAlertRulesAsync),
/* harmony export */   "C2": () => (/* binding */ createNotificationChannel),
/* harmony export */   "c1": () => (/* binding */ testNotificationChannel),
/* harmony export */   "en": () => (/* binding */ togglePauseAlertRule),
/* harmony export */   "fA": () => (/* binding */ loadNotificationTypes),
/* harmony export */   "fg": () => (/* binding */ updateNotificationChannel),
/* harmony export */   "tk": () => (/* binding */ loadNotificationChannel)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");




function getAlertRulesAsync(options) {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__/* .loadAlertRules */ .gz)());
    const rules = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/alerts', options);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__/* .loadedAlertRules */ .Oc)(rules));
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
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__/* .notifyApp */ .$l)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__/* .createSuccessNotification */ .AT)('Notification created')));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push('/alerting/notifications');
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__/* .notifyApp */ .$l)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__/* .createErrorNotification */ .t_)(error.data.error)));
    }
  };
}
function updateNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/alert-notifications/${data.id}`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__/* .notifyApp */ .$l)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__/* .createSuccessNotification */ .AT)('Notification updated')));
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__/* .notifyApp */ .$l)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__/* .createErrorNotification */ .t_)(error.data.error)));
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
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__/* .setNotificationChannels */ .T2)(notificationTypes));
  };
}
function loadNotificationChannel(id) {
  return async dispatch => {
    await dispatch(loadNotificationTypes());
    const notificationChannel = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifications/${id}`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__/* .notificationChannelLoaded */ .K)(notificationChannel));
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/RuleList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ unified_RuleList)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/hooks/useQueryParams.ts
var useQueryParams = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx
var AlertingPageWrapper = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
// EXTERNAL MODULE: ./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/accessControlHooks.ts
var accessControlHooks = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/NoRulesCTA.tsx
var _EmptyListCTA, _CallToActionCard;






const NoRulesSplash = () => {
  const {
    canCreateGrafanaRules,
    canCreateCloudRules
  } = (0,accessControlHooks/* useRulesAccess */.B)();

  if (canCreateGrafanaRules || canCreateCloudRules) {
    return _EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyListCTA/* default */.Z, {
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

  return _CallToActionCard || (_CallToActionCard = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CallToActionCard, {
    message: "No rules exist yet.",
    callToActionElement: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {})
  }));
};
// EXTERNAL MODULE: ./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
var pluralize_default = /*#__PURE__*/__webpack_require__.n(pluralize);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js
var useLocalStorage = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/datasource.ts
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/rules.ts
var utils_rules = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RuleListErrors.tsx











function RuleListErrors() {
  const [expanded, setExpanded] = (0,react.useState)(false);
  const [closed, setClosed] = (0,useLocalStorage/* default */.Z)('grafana.unifiedalerting.hideErrors', false);
  const dataSourceConfigRequests = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.dataSources);
  const promRuleRequests = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.promRules);
  const rulerRuleRequests = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.rulerRules);
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const errors = (0,react.useMemo)(() => {
    var _promRuleRequests$GRA, _rulerRuleRequests$GR;

    const [dataSourceConfigErrors, promRequestErrors, rulerRequestErrors] = [dataSourceConfigRequests, promRuleRequests, rulerRuleRequests].map(requests => (0,datasource/* getRulesDataSources */.Eu)().reduce((result, dataSource) => {
      var _requests$dataSource$;

      const error = (_requests$dataSource$ = requests[dataSource.name]) === null || _requests$dataSource$ === void 0 ? void 0 : _requests$dataSource$.error;

      if (requests[dataSource.name] && error && !(0,utils_rules/* isRulerNotSupportedResponse */.m$)(requests[dataSource.name])) {
        return [...result, {
          dataSource,
          error
        }];
      }

      return result;
    }, []));
    const grafanaPromError = (_promRuleRequests$GRA = promRuleRequests[datasource/* GRAFANA_RULES_SOURCE_NAME */.GC]) === null || _promRuleRequests$GRA === void 0 ? void 0 : _promRuleRequests$GRA.error;
    const grafanaRulerError = (_rulerRuleRequests$GR = rulerRuleRequests[datasource/* GRAFANA_RULES_SOURCE_NAME */.GC]) === null || _rulerRuleRequests$GR === void 0 ? void 0 : _rulerRuleRequests$GR.error;
    const result = [];

    if (grafanaPromError) {
      result.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["Failed to load Grafana rules state: ", grafanaPromError.message || 'Unknown error.']
      }));
    }

    if (grafanaRulerError) {
      result.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["Failed to load Grafana rules config: ", grafanaRulerError.message || 'Unknown error.']
      }));
    }

    dataSourceConfigErrors.forEach(_ref => {
      let {
        dataSource,
        error
      } = _ref;
      result.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["Failed to load the data source configuration for", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: `datasources/edit/${dataSource.uid}`,
          children: dataSource.name
        }), ": ", error.message || 'Unknown error.']
      }));
    });
    promRequestErrors.forEach(_ref2 => {
      let {
        dataSource,
        error
      } = _ref2;
      return result.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["Failed to load rules state from ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: `datasources/edit/${dataSource.uid}`,
          children: dataSource.name
        }), ":", ' ', error.message || 'Unknown error.']
      }));
    });
    rulerRequestErrors.forEach(_ref3 => {
      let {
        dataSource,
        error
      } = _ref3;
      return result.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["Failed to load rules config from ", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: `datasources/edit/${dataSource.uid}`,
          children: dataSource.name
        }), ":", ' ', error.message || 'Unknown error.']
      }));
    });
    return result;
  }, [dataSourceConfigRequests, promRuleRequests, rulerRuleRequests]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!!errors.length && closed && /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorSummaryButton, {
      count: errors.length,
      onClick: () => setClosed(closed => !closed)
    }), !!errors.length && !closed && /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
      "data-testid": "cloud-rulessource-errors",
      title: "Errors loading rules",
      severity: "error",
      onRemove: () => setClosed(true),
      children: [expanded && errors.map((item, idx) => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: item
      }, idx)), !expanded && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: errors[0]
        }), errors.length >= 2 && /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Button, {
          className: styles.moreButton,
          fill: "text",
          icon: "angle-right",
          size: "sm",
          onClick: () => setExpanded(true),
          children: [errors.length - 1, " more ", pluralize_default()('error', errors.length - 1)]
        })]
      })]
    })]
  });
}

const ErrorSummaryButton = _ref4 => {
  let {
    count,
    onClick
  } = _ref4;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.floatRight,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: "Show all errors",
      placement: "bottom",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        fill: "text",
        variant: "destructive",
        icon: "exclamation-triangle",
        onClick: onClick,
        children: count > 1 ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [count, " errors"]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: "1 error"
        })
      })
    })
  });
};

const getStyles = theme => ({
  moreButton: emotion_css_esm.css`
    padding: 0;
  `,
  floatRight: emotion_css_esm.css`
    display: flex;
    justify-content: flex-end;
  `
});
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/Authorize.tsx
var Authorize = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./public/app/core/utils/kbn.ts
var kbn = __webpack_require__("./public/app/core/utils/kbn.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useFolder.ts
var useFolder = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useHasRuler.ts
var useHasRuler = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/state/actions.ts + 4 modules
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/CollapseToggle.tsx
var CollapseToggle = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/RuleLocation.tsx
var RuleLocation = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/ActionIcon.tsx
var ActionIcon = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
// EXTERNAL MODULE: ./public/app/core/hooks/useCleanup.ts
var useCleanup = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/redux.ts
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/time.ts + 1 modules
var time = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/EditCloudGroupModal.tsx













function EditCloudGroupModal(props) {
  var _useUnifiedAlertingSe, _Button;

  const {
    namespace,
    group,
    onClose
  } = props;
  const styles = (0,grafana_ui_src.useStyles2)(EditCloudGroupModal_getStyles);
  const dispatch = (0,es.useDispatch)();
  const {
    loading,
    error,
    dispatched
  } = (_useUnifiedAlertingSe = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.updateLotexNamespaceAndGroup)) !== null && _useUnifiedAlertingSe !== void 0 ? _useUnifiedAlertingSe : redux/* initialAsyncRequestState */.oq;
  const defaultValues = (0,react.useMemo)(() => {
    var _group$interval;

    return {
      namespaceName: namespace.name,
      groupName: group.name,
      groupInterval: (_group$interval = group.interval) !== null && _group$interval !== void 0 ? _group$interval : ''
    };
  }, [namespace, group]); // close modal if successfully saved

  (0,react.useEffect)(() => {
    if (dispatched && !loading && !error) {
      onClose();
    }
  }, [dispatched, loading, onClose, error]);
  (0,useCleanup/* useCleanup */.x)(state => state.unifiedAlerting.updateLotexNamespaceAndGroup);

  const onSubmit = values => {
    dispatch((0,actions/* updateLotexNamespaceAndGroupAction */.hv)({
      rulesSourceName: (0,datasource/* getRulesSourceName */.EG)(namespace.rulesSource),
      groupName: group.name,
      newGroupName: values.groupName,
      namespaceName: namespace.name,
      newNamespaceName: values.namespaceName,
      groupInterval: values.groupInterval || undefined
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
    className: styles.modal,
    isOpen: true,
    title: "Edit namespace or rule group",
    onDismiss: onClose,
    onClickBackdrop: onClose,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Form, {
      defaultValues: defaultValues,
      onSubmit: onSubmit,
      children: _ref => {
        var _errors$namespaceName, _errors$groupName, _errors$groupInterval;

        let {
          register,
          errors,
          formState: {
            isDirty
          }
        } = _ref;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
            label: "Namespace",
            invalid: !!errors.namespaceName,
            error: (_errors$namespaceName = errors.namespaceName) === null || _errors$namespaceName === void 0 ? void 0 : _errors$namespaceName.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
              id: "namespaceName"
            }, register('namespaceName', {
              required: 'Namespace name is required.'
            })))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
            label: "Rule group",
            invalid: !!errors.groupName,
            error: (_errors$groupName = errors.groupName) === null || _errors$groupName === void 0 ? void 0 : _errors$groupName.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
              id: "groupName"
            }, register('groupName', {
              required: 'Rule group name is required.'
            })))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
            label: "Rule group evaluation interval",
            invalid: !!errors.groupInterval,
            error: (_errors$groupInterval = errors.groupInterval) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
              id: "groupInterval",
              placeholder: "1m"
            }, register('groupInterval', {
              pattern: time/* durationValidationPattern */.lR
            })))
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
            children: [_Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              variant: "secondary",
              type: "button",
              disabled: loading,
              onClick: onClose,
              fill: "outline",
              children: "Close"
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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

const EditCloudGroupModal_getStyles = () => ({
  modal: emotion_css_esm.css`
    max-width: 560px;
  `
});
// EXTERNAL MODULE: ./public/app/types/unified-alerting-dto.ts
var unified_alerting_dto = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/StateColoredText.tsx





const StateColoredText = _ref => {
  let {
    children,
    status
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(StateColoredText_getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: styles[status],
    children: children || status
  });
};

const StateColoredText_getStyles = theme => ({
  [unified_alerting_dto/* PromAlertingRuleState.Inactive */.x_.Inactive]: emotion_css_esm.css`
    color: ${theme.colors.success.text};
  `,
  [unified_alerting_dto/* PromAlertingRuleState.Pending */.x_.Pending]: emotion_css_esm.css`
    color: ${theme.colors.warning.text};
  `,
  [unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing]: emotion_css_esm.css`
    color: ${theme.colors.error.text};
  `,
  neutral: emotion_css_esm.css`
    color: ${theme.colors.text.secondary};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RuleStats.tsx
var _span, _span2;









const emptyStats = {
  total: 0,
  recording: 0,
  [unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing]: 0,
  [unified_alerting_dto/* PromAlertingRuleState.Pending */.x_.Pending]: 0,
  [unified_alerting_dto/* PromAlertingRuleState.Inactive */.x_.Inactive]: 0,
  error: 0
};
const RuleStats = _ref => {
  let {
    showInactive,
    showRecording,
    group,
    namespaces
  } = _ref;
  const calculated = (0,react.useMemo)(() => {
    const stats = Object.assign({}, emptyStats);

    const calcRule = rule => {
      var _rule$promRule, _rule$promRule2;

      if (rule.promRule && (0,utils_rules/* isAlertingRule */.x_)(rule.promRule)) {
        stats[rule.promRule.state] += 1;
      }

      if (((_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.health) === 'err' || ((_rule$promRule2 = rule.promRule) === null || _rule$promRule2 === void 0 ? void 0 : _rule$promRule2.health) === 'error') {
        stats.error += 1;
      }

      if (rule.promRule && (0,utils_rules/* isRecordingRule */.OP)(rule.promRule) || rule.rulerRule && (0,utils_rules/* isRecordingRulerRule */.yF)(rule.rulerRule)) {
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

  if (calculated[unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing]) {
    statsComponents.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(StateColoredText, {
      status: unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing,
      children: [calculated[unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing], " firing"]
    }, "firing"));
  }

  if (calculated.error) {
    statsComponents.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(StateColoredText, {
      status: unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing,
      children: [calculated.error, " errors"]
    }, "errors"));
  }

  if (calculated[unified_alerting_dto/* PromAlertingRuleState.Pending */.x_.Pending]) {
    statsComponents.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(StateColoredText, {
      status: unified_alerting_dto/* PromAlertingRuleState.Pending */.x_.Pending,
      children: [calculated[unified_alerting_dto/* PromAlertingRuleState.Pending */.x_.Pending], " pending"]
    }, "pending"));
  }

  if (showInactive && calculated[unified_alerting_dto/* PromAlertingRuleState.Inactive */.x_.Inactive]) {
    statsComponents.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(StateColoredText, {
      status: "neutral",
      children: [calculated[unified_alerting_dto/* PromAlertingRuleState.Inactive */.x_.Inactive], " normal"]
    }, "inactive"));
  }

  if (showRecording && calculated.recording) {
    statsComponents.push( /*#__PURE__*/(0,jsx_runtime.jsxs)(StateColoredText, {
      status: "neutral",
      children: [calculated.recording, " recording"]
    }, "recording"));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      children: [calculated.total, " ", pluralize_default()('rule', calculated.total)]
    }), !!statsComponents.length && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: ": "
      })), statsComponents.reduce((prev, curr, idx) => prev.length ? [prev, /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
        children: _span2 || (_span2 = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: ", "
        }))
      }, idx), curr] : [curr], [])]
    })]
  });
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RulesTable.tsx + 1 modules
var RulesTable = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RulesGroup.tsx
var _HorizontalGroup, _Badge, _br, _br2;























const RulesGroup = /*#__PURE__*/react.memo(_ref => {
  var _group$rules$;

  let {
    group,
    namespace,
    expandAll
  } = _ref;
  const {
    rulesSource
  } = namespace;
  const dispatch = (0,es.useDispatch)();
  const styles = (0,grafana_ui_src.useStyles2)(RulesGroup_getStyles);
  const [isEditingGroup, setIsEditingGroup] = (0,react.useState)(false);
  const [isDeletingGroup, setIsDeletingGroup] = (0,react.useState)(false);
  const [isCollapsed, setIsCollapsed] = (0,react.useState)(!expandAll);
  const canEditCloudRules = context_srv/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.AlertingRuleExternalWrite */.bW.AlertingRuleExternalWrite);
  (0,react.useEffect)(() => {
    setIsCollapsed(!expandAll);
  }, [expandAll]);
  const hasRuler = (0,useHasRuler/* useHasRuler */.h)();
  const rulerRule = (_group$rules$ = group.rules[0]) === null || _group$rules$ === void 0 ? void 0 : _group$rules$.rulerRule;
  const folderUID = rulerRule && (0,utils_rules/* isGrafanaRulerRule */.Pc)(rulerRule) && rulerRule.grafana_alert.namespace_uid || undefined;
  const {
    folder
  } = (0,useFolder/* useFolder */.W)(folderUID); // group "is deleting" if rules source has ruler, but this group has no rules that are in ruler

  const isDeleting = hasRuler(rulesSource) && !group.rules.find(rule => !!rule.rulerRule);
  const isFederated = (0,utils_rules/* isFederatedRuleGroup */.Jq)(group);

  const deleteGroup = () => {
    dispatch((0,actions/* deleteRulesGroupAction */.oE)(namespace, group));
    setIsDeletingGroup(false);
  };

  const actionIcons = []; // for grafana, link to folder views

  if (isDeleting) {
    actionIcons.push(_HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {}), "deleting"]
    }, "is-deleting")));
  } else if (rulesSource === datasource/* GRAFANA_RULES_SOURCE_NAME */.GC) {
    if (folderUID) {
      const baseUrl = `/dashboards/f/${folderUID}/${kbn/* default.slugifyForUrl */.Z.slugifyForUrl(namespace.name)}`;

      if (folder !== null && folder !== void 0 && folder.canSave) {
        actionIcons.push( /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
          "aria-label": "edit folder",
          icon: "pen",
          tooltip: "edit folder",
          to: baseUrl + '/settings',
          target: "__blank"
        }, "edit"));
      }

      if (folder !== null && folder !== void 0 && folder.canAdmin) {
        actionIcons.push( /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
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
      actionIcons.push( /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
        "aria-label": "edit rule group",
        "data-testid": "edit-group",
        icon: "pen",
        tooltip: "edit rule group",
        onClick: () => setIsEditingGroup(true)
      }, "edit"));
    }

    actionIcons.push( /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
      "aria-label": "delete rule group",
      "data-testid": "delete-group",
      icon: "trash-alt",
      tooltip: "delete rule group",
      onClick: () => setIsDeletingGroup(true)
    }, "delete-group"));
  } // ungrouped rules are rules that are in the "default" group name


  const isUngrouped = group.name === 'default';
  const groupName = isUngrouped ? /*#__PURE__*/(0,jsx_runtime.jsx)(RuleLocation/* RuleLocation */.V, {
    namespace: namespace.name
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(RuleLocation/* RuleLocation */.V, {
    namespace: namespace.name,
    group: group.name
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": "rule-group",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.header,
      "data-testid": "rule-group-header",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CollapseToggle/* CollapseToggle */.U, {
        className: styles.collapseToggle,
        isCollapsed: isCollapsed,
        onToggle: setIsCollapsed,
        "data-testid": "group-collapse-toggle"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: isCollapsed ? 'folder' : 'folder-open'
      }), (0,datasource/* isCloudRulesSource */.jq)(rulesSource) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
        content: rulesSource.name,
        placement: "top",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          alt: rulesSource.meta.name,
          className: styles.dataSourceIcon,
          src: rulesSource.meta.info.logos.small
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
        className: styles.heading,
        children: [isFederated && (_Badge || (_Badge = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
          color: "purple",
          text: "Federated"
        }))), " ", groupName]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.spacer
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.headerStats,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(RuleStats, {
          showInactive: false,
          group: group
        })
      }), !!actionIcons.length && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.actionsSeparator,
          children: "|"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.actionIcons,
          children: actionIcons
        })]
      })]
    }), !isCollapsed && /*#__PURE__*/(0,jsx_runtime.jsx)(RulesTable/* RulesTable */.i, {
      showSummaryColumn: true,
      className: styles.rulesTable,
      showGuidelines: true,
      rules: group.rules
    }), isEditingGroup && /*#__PURE__*/(0,jsx_runtime.jsx)(EditCloudGroupModal, {
      group: group,
      namespace: namespace,
      onClose: () => setIsEditingGroup(false)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
      isOpen: isDeletingGroup,
      title: "Delete group",
      body: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: ["Deleting this group will permanently remove the group", _br || (_br = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), "and ", group.rules.length, " alert ", pluralize_default()('rule', group.rules.length), " belonging to it.", _br2 || (_br2 = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), "Are you sure you want to delete this group?"]
      }),
      onConfirm: deleteGroup,
      onDismiss: () => setIsDeletingGroup(false),
      confirmText: "Delete"
    })]
  });
});
RulesGroup.displayName = 'RulesGroup';
const RulesGroup_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    & + & {
      margin-top: ${theme.spacing(2)};
    }
  `,
  header: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(1)} 0;
    background-color: ${theme.colors.background.secondary};
    flex-wrap: wrap;
  `,
  headerStats: emotion_css_esm.css`
    span {
      vertical-align: middle;
    }

    ${theme.breakpoints.down('sm')} {
      order: 2;
      width: 100%;
      padding-left: ${theme.spacing(1)};
    }
  `,
  heading: emotion_css_esm.css`
    margin-left: ${theme.spacing(1)};
    margin-bottom: 0;
  `,
  spacer: emotion_css_esm.css`
    flex: 1;
  `,
  collapseToggle: emotion_css_esm.css`
    background: none;
    border: none;
    margin-top: -${theme.spacing(1)};
    margin-bottom: -${theme.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,
  dataSourceIcon: emotion_css_esm.css`
    width: ${theme.spacing(2)};
    height: ${theme.spacing(2)};
    margin-left: ${theme.spacing(2)};
  `,
  dataSourceOrigin: emotion_css_esm.css`
    margin-right: 1em;
    color: ${theme.colors.text.disabled};
  `,
  actionsSeparator: emotion_css_esm.css`
    margin: 0 ${theme.spacing(2)};
  `,
  actionIcons: emotion_css_esm.css`
    & > * + * {
      margin-left: ${theme.spacing(0.5)};
    }
  `,
  rulesTable: emotion_css_esm.css`
    margin-top: ${theme.spacing(3)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/CloudRules.tsx
var _h, _div, _p, _p2;










const CloudRules = _ref => {
  let {
    namespaces,
    expandAll
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(CloudRules_getStyles);
  const rules = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.promRules);
  const rulesDataSources = (0,react.useMemo)(datasource/* getRulesDataSources */.Eu, []);
  const dataSourcesLoading = (0,react.useMemo)(() => rulesDataSources.filter(ds => {
    var _rules$ds$name;

    return (_rules$ds$name = rules[ds.name]) === null || _rules$ds$name === void 0 ? void 0 : _rules$ds$name.loading;
  }), [rules, rulesDataSources]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.sectionHeader,
      children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
        children: "Mimir / Cortex / Loki"
      })), dataSourcesLoading.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
        className: styles.loader,
        text: `Loading rules from ${dataSourcesLoading.length} ${pluralize_default()('source', dataSourcesLoading.length)}`
      }) : _div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}))]
    }), namespaces.map(namespace => {
      const {
        groups,
        rulesSource
      } = namespace;
      return groups.map(group => /*#__PURE__*/(0,jsx_runtime.jsx)(RulesGroup, {
        group: group,
        namespace: namespace,
        expandAll: expandAll
      }, `${(0,datasource/* getRulesSourceName */.EG)(rulesSource)}-${name}-${group.name}`));
    }), (namespaces === null || namespaces === void 0 ? void 0 : namespaces.length) === 0 && !!rulesDataSources.length && (_p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "No rules found."
    }))), !rulesDataSources.length && (_p2 || (_p2 = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "There are no Prometheus or Loki datas sources configured."
    })))]
  });
};

const CloudRules_getStyles = theme => ({
  loader: emotion_css_esm.css`
    margin-bottom: 0;
  `,
  sectionHeader: emotion_css_esm.css`
    display: flex;
    justify-content: space-between;
  `,
  wrapper: emotion_css_esm.css`
    margin-bottom: ${theme.spacing.xl};
  `
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts
var useCombinedRuleNamespaces = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/GrafanaRules.tsx
var GrafanaRules_h, GrafanaRules_div, GrafanaRules_p;












const GrafanaRules = _ref => {
  let {
    namespaces,
    expandAll
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(GrafanaRules_getStyles);
  const [queryParams] = (0,useQueryParams/* useQueryParams */.K)();
  const {
    loading
  } = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.promRules[datasource/* GRAFANA_RULES_SOURCE_NAME */.GC] || redux/* initialAsyncRequestState */.oq);
  const wantsGroupedView = queryParams['view'] === 'grouped';
  const namespacesFormat = wantsGroupedView ? namespaces : (0,useCombinedRuleNamespaces/* flattenGrafanaManagedRules */.Kd)(namespaces);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("section", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.sectionHeader,
      children: [GrafanaRules_h || (GrafanaRules_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
        children: "Grafana"
      })), loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
        className: styles.loader,
        text: "Loading..."
      }) : GrafanaRules_div || (GrafanaRules_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}))]
    }), namespacesFormat === null || namespacesFormat === void 0 ? void 0 : namespacesFormat.map(namespace => namespace.groups.map(group => /*#__PURE__*/(0,jsx_runtime.jsx)(RulesGroup, {
      group: group,
      namespace: namespace,
      expandAll: expandAll
    }, `${namespace.name}-${group.name}`))), (namespacesFormat === null || namespacesFormat === void 0 ? void 0 : namespacesFormat.length) === 0 && (GrafanaRules_p || (GrafanaRules_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "No rules found."
    })))]
  });
};

const GrafanaRules_getStyles = theme => ({
  loader: emotion_css_esm.css`
    margin-bottom: 0;
  `,
  sectionHeader: emotion_css_esm.css`
    display: flex;
    justify-content: space-between;
  `,
  wrapper: emotion_css_esm.css`
    margin-bottom: ${theme.spacing.xl};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RuleListGroupView.tsx









const RuleListGroupView = _ref => {
  let {
    namespaces,
    expandAll
  } = _ref;
  const [grafanaNamespaces, cloudNamespaces] = (0,react.useMemo)(() => {
    const sorted = namespaces.map(namespace => Object.assign({}, namespace, {
      groups: namespace.groups.sort((a, b) => a.name.localeCompare(b.name))
    })).sort((a, b) => a.name.localeCompare(b.name));
    return [sorted.filter(ns => (0,datasource/* isGrafanaRulesSource */.HY)(ns.rulesSource)), sorted.filter(ns => (0,datasource/* isCloudRulesSource */.jq)(ns.rulesSource))];
  }, [namespaces]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
      actions: [types/* AccessControlAction.AlertingRuleRead */.bW.AlertingRuleRead],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(GrafanaRules, {
        namespaces: grafanaNamespaces,
        expandAll: expandAll
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
      actions: [types/* AccessControlAction.AlertingRuleExternalRead */.bW.AlertingRuleExternalRead],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(CloudRules, {
        namespaces: cloudNamespaces,
        expandAll: expandAll
      })
    })]
  });
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/misc.ts
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RuleListStateSection.tsx









const RuleListStateSection = _ref => {
  let {
    rules,
    state,
    defaultCollapsed = false
  } = _ref;
  const [collapsed, setCollapsed] = (0,react.useState)(defaultCollapsed);
  const styles = (0,grafana_ui_src.useStyles2)(RuleListStateSection_getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h4", {
      className: styles.header,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CollapseToggle/* CollapseToggle */.U, {
        className: styles.collapseToggle,
        size: "xxl",
        isCollapsed: collapsed,
        onToggle: () => setCollapsed(!collapsed)
      }), (0,utils_rules/* alertStateToReadable */.SS)(state), " (", rules.length, ")"]
    }), !collapsed && /*#__PURE__*/(0,jsx_runtime.jsx)(RulesTable/* RulesTable */.i, {
      className: styles.rulesTable,
      rules: rules,
      showGroupColumn: true
    })]
  });
};

const RuleListStateSection_getStyles = theme => ({
  collapseToggle: emotion_css_esm.css`
    vertical-align: middle;
  `,
  header: emotion_css_esm.css`
    margin-top: ${theme.spacing(2)};
  `,
  rulesTable: emotion_css_esm.css`
    margin-top: ${theme.spacing(3)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RuleListStateView.tsx









const RuleListStateView = _ref => {
  let {
    namespaces
  } = _ref;
  const filters = (0,misc/* getFiltersFromUrlParams */.lC)((0,useQueryParams/* useQueryParams */.K)()[0]);
  const groupedRules = (0,react.useMemo)(() => {
    const result = {
      [unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing]: [],
      [unified_alerting_dto/* PromAlertingRuleState.Inactive */.x_.Inactive]: [],
      [unified_alerting_dto/* PromAlertingRuleState.Pending */.x_.Pending]: []
    };
    namespaces.forEach(namespace => namespace.groups.forEach(group => group.rules.forEach(rule => {
      if (rule.promRule && (0,utils_rules/* isAlertingRule */.x_)(rule.promRule)) {
        result[rule.promRule.state].push(rule);
      }
    })));
    Object.values(result).forEach(rules => rules.sort((a, b) => a.name.localeCompare(b.name)));
    return result;
  }, [namespaces]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(!filters.alertState || filters.alertState === unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing) && /*#__PURE__*/(0,jsx_runtime.jsx)(RuleListStateSection, {
      state: unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing,
      rules: groupedRules[unified_alerting_dto/* PromAlertingRuleState.Firing */.x_.Firing]
    }), (!filters.alertState || filters.alertState === unified_alerting_dto/* PromAlertingRuleState.Pending */.x_.Pending) && /*#__PURE__*/(0,jsx_runtime.jsx)(RuleListStateSection, {
      state: unified_alerting_dto/* PromAlertingRuleState.Pending */.x_.Pending,
      rules: groupedRules[unified_alerting_dto/* PromAlertingRuleState.Pending */.x_.Pending]
    }), (!filters.alertState || filters.alertState === unified_alerting_dto/* PromAlertingRuleState.Inactive */.x_.Inactive) && /*#__PURE__*/(0,jsx_runtime.jsx)(RuleListStateSection, {
      defaultCollapsed: filters.alertState !== unified_alerting_dto/* PromAlertingRuleState.Inactive */.x_.Inactive,
      state: unified_alerting_dto/* PromAlertingRuleState.Inactive */.x_.Inactive,
      rules: groupedRules[unified_alerting_dto/* PromAlertingRuleState.Inactive */.x_.Inactive]
    })]
  });
};
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RulesFilter.tsx
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
  value: unified_alerting_dto/* PromRuleType.Alerting */.pz.Alerting
}, {
  label: 'Recording ',
  value: unified_alerting_dto/* PromRuleType.Recording */.pz.Recording
}];

const RulesFilter = () => {
  var _queryParams$view;

  const [queryParams, setQueryParams] = (0,useQueryParams/* useQueryParams */.K)(); // This key is used to force a rerender on the inputs when the filters are cleared

  const [filterKey, setFilterKey] = (0,react.useState)(Math.floor(Math.random() * 100));
  const dataSourceKey = `dataSource-${filterKey}`;
  const queryStringKey = `queryString-${filterKey}`;
  const {
    dataSource,
    alertState,
    queryString,
    ruleType
  } = (0,misc/* getFiltersFromUrlParams */.lC)(queryParams);
  const styles = (0,grafana_ui_src.useStyles)(RulesFilter_getStyles);
  const stateOptions = Object.entries(unified_alerting_dto/* PromAlertingRuleState */.x_).map(_ref => {
    let [key, value] = _ref;
    return {
      label: (0,utils_rules/* alertStateToReadable */.SS)(value),
      value
    };
  });

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

  const handleQueryStringChange = (0,lodash.debounce)(e => {
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

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      className: styles.inputWidth,
      label: "Search by data source",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
        alerting: true,
        noDefault: true,
        placeholder: "All data sources",
        current: dataSource,
        onChange: handleDataSourceChange,
        onClear: clearDataSource
      }, dataSourceKey)
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.cx)(styles.flexRow, styles.spaceBetween),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          className: styles.rowChild,
          label: _Label || (_Label = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Label, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.Stack, {
              gap: 0.5,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: "Search by label"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
                content: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  children: ["Filter rules and alerts using label querying, ex:", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
                    children: `{severity="critical", instance=~"cluster-us-.+"}`
                  })]
                }),
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                  name: "info-circle",
                  size: "sm"
                })
              })]
            })
          })),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            className: styles.inputWidth,
            prefix: searchIcon,
            onChange: handleQueryStringChange,
            defaultValue: queryString,
            placeholder: "Search",
            "data-testid": "search-query-input"
          }, queryStringKey)
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label2 || (_Label2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Label, {
            children: "State"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
            options: stateOptions,
            value: alertState,
            onChange: handleAlertStateChange
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label3 || (_Label3 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Label, {
            children: "Rule type"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
            options: RuleTypeOptions,
            value: ruleType,
            onChange: handleRuleTypeChange
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.rowChild,
          children: [_Label4 || (_Label4 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Label, {
            children: "View as"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
            options: ViewOptions,
            value: String((_queryParams$view = queryParams['view']) !== null && _queryParams$view !== void 0 ? _queryParams$view : ViewOptions[0].value),
            onChange: handleViewChange
          })]
        })]
      }), (dataSource || alertState || queryString || ruleType) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.flexRow,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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

const RulesFilter_getStyles = theme => {
  return {
    container: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      padding-bottom: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.sm};
    `,
    inputWidth: emotion_css_esm.css`
      width: 340px;
      flex-grow: 0;
    `,
    flexRow: emotion_css_esm.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,
    spaceBetween: emotion_css_esm.css`
      justify-content: space-between;
    `,
    rowChild: emotion_css_esm.css`
      margin: 0 ${theme.spacing.sm} 0 0;
    `,
    clearButton: emotion_css_esm.css`
      margin-top: ${theme.spacing.sm};
    `
  };
};

/* harmony default export */ const rules_RulesFilter = (RulesFilter);
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/alertmanager.ts
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/hooks/useFilteredRules.ts








const useFilteredRules = namespaces => {
  const [queryParams] = (0,useQueryParams/* useQueryParams */.K)();
  const filters = (0,misc/* getFiltersFromUrlParams */.lC)(queryParams);
  return (0,react.useMemo)(() => {
    const filteredNamespaces = namespaces // Filter by data source
    // TODO: filter by multiple data sources for grafana-managed alerts
    .filter(_ref => {
      let {
        rulesSource
      } = _ref;
      return filters.dataSource && (0,datasource/* isCloudRulesSource */.jq)(rulesSource) ? rulesSource.name === filters.dataSource : true;
    }) // If a namespace and group have rules that match the rules filters then keep them.
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

      if (filters.dataSource && (0,utils_rules/* isGrafanaRulerRule */.Pc)(rule.rulerRule) && !isQueryingDataSource(rule.rulerRule, filters)) {
        return false;
      } // Query strings can match alert name, label keys, and label values


      if (filters.queryString) {
        var _rule$name;

        const normalizedQueryString = filters.queryString.toLocaleLowerCase();
        const doesNameContainsQueryString = (_rule$name = rule.name) === null || _rule$name === void 0 ? void 0 : _rule$name.toLocaleLowerCase().includes(normalizedQueryString);
        const matchers = (0,alertmanager/* parseMatchers */.Zh)(filters.queryString);
        const doRuleLabelsMatchQuery = (0,alertmanager/* labelsMatchMatchers */.eD)(rule.labels, matchers);
        const doAlertsContainMatchingLabels = rule.promRule && rule.promRule.type === unified_alerting_dto/* PromRuleType.Alerting */.pz.Alerting && rule.promRule.alerts && rule.promRule.alerts.some(alert => (0,alertmanager/* labelsMatchMatchers */.eD)(alert.labels, matchers));

        if (!(doesNameContainsQueryString || doRuleLabelsMatchQuery || doAlertsContainMatchingLabels)) {
          return false;
        }
      }

      if (filters.alertState && !(rule.promRule && (0,utils_rules/* isAlertingRule */.x_)(rule.promRule) && rule.promRule.state === filters.alertState)) {
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

    const ds = (0,grafana_runtime_src.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    return (ds === null || ds === void 0 ? void 0 : ds.name) === filter.dataSource;
  });
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/constants.ts
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/RuleList.tsx
var _RuleListErrors, _RulesFilter, _NoRulesSplash;


























const VIEWS = {
  groups: RuleListGroupView,
  state: RuleListStateView
};
const RuleList = (0,grafana_ui_src.withErrorBoundary)(() => {
  const dispatch = (0,es.useDispatch)();
  const styles = (0,grafana_ui_src.useStyles2)(RuleList_getStyles);
  const rulesDataSourceNames = (0,react.useMemo)(datasource/* getAllRulesSourceNames */.mA, []);
  const location = (0,react_router/* useLocation */.TH)();
  const [expandAll, setExpandAll] = (0,react.useState)(false);
  const [queryParams] = (0,useQueryParams/* useQueryParams */.K)();
  const filters = (0,misc/* getFiltersFromUrlParams */.lC)(queryParams);
  const filtersActive = Object.values(filters).some(filter => filter !== undefined);
  const {
    canCreateGrafanaRules,
    canCreateCloudRules
  } = (0,accessControlHooks/* useRulesAccess */.B)();
  const view = VIEWS[queryParams['view']] ? queryParams['view'] : 'groups';
  const ViewComponent = VIEWS[view]; // fetch rules, then poll every RULE_LIST_POLL_INTERVAL_MS

  (0,react.useEffect)(() => {
    dispatch((0,actions/* fetchAllPromAndRulerRulesAction */.ei)());
    const interval = setInterval(() => dispatch((0,actions/* fetchAllPromAndRulerRulesAction */.ei)()), constants/* RULE_LIST_POLL_INTERVAL_MS */.p4);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  const promRuleRequests = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.promRules);
  const rulerRuleRequests = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.rulerRules);
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
  const combinedNamespaces = (0,useCombinedRuleNamespaces/* useCombinedRuleNamespaces */.Zo)();
  const filteredNamespaces = useFilteredRules(combinedNamespaces);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
    pageId: "alert-list",
    isLoading: loading && !haveResults,
    children: [_RuleListErrors || (_RuleListErrors = /*#__PURE__*/(0,jsx_runtime.jsx)(RuleListErrors, {})), !showNewAlertSplash && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_RulesFilter || (_RulesFilter = /*#__PURE__*/(0,jsx_runtime.jsx)(rules_RulesFilter, {})), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.buttonsContainer,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.statsContainer,
          children: [view === 'groups' && filtersActive && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            className: styles.expandAllButton,
            icon: expandAll ? 'angle-double-up' : 'angle-double-down',
            variant: "secondary",
            onClick: () => setExpandAll(!expandAll),
            children: expandAll ? 'Collapse all' : 'Expand all'
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleStats, {
            showInactive: true,
            showRecording: true,
            namespaces: filteredNamespaces
          })]
        }), (canCreateGrafanaRules || canCreateCloudRules) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
          href: src.urlUtil.renderUrl('alerting/new', {
            returnTo: location.pathname + location.search
          }),
          icon: "plus",
          children: "New alert rule"
        })]
      })]
    }), showNewAlertSplash && (_NoRulesSplash || (_NoRulesSplash = /*#__PURE__*/(0,jsx_runtime.jsx)(NoRulesSplash, {}))), haveResults && /*#__PURE__*/(0,jsx_runtime.jsx)(ViewComponent, {
      expandAll: expandAll,
      namespaces: filteredNamespaces
    })]
  });
}, {
  style: 'page'
});

const RuleList_getStyles = theme => ({
  break: emotion_css_esm.css`
    width: 100%;
    height: 0;
    margin-bottom: ${theme.spacing(2)};
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  buttonsContainer: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(2)};
    display: flex;
    justify-content: space-between;
  `,
  statsContainer: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  expandAllButton: emotion_css_esm.css`
    margin-right: ${theme.spacing(1)};
  `
});

/* harmony default export */ const unified_RuleList = (RuleList);

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

/***/ "./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ DynamicTableWithGuidelines)
/* harmony export */ });
/* unused harmony export getStyles */
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_3__/* .DynamicTable */ .t, Object.assign({
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

/***/ "./public/app/features/alerting/unified/components/RuleLocation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ RuleLocation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;







const RuleLocation = _ref => {
  let {
    namespace,
    group
  } = _ref;

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

/***/ "./public/app/features/alerting/unified/components/rules/RulesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ RulesTable)
});

// UNUSED EXPORTS: getStyles

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useHasRuler.ts
var useHasRuler = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/constants.ts
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DynamicTable.tsx
var DynamicTable = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx
var DynamicTableWithGuidelines = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/RuleLocation.tsx
var RuleLocation = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertLabels.tsx
var AlertLabels = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DetailsField.tsx
var DetailsField = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx + 3 modules
var RuleDetailsActionButtons = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx
var RuleDetailsAnnotations = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx
var RuleDetailsDataSources = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx + 1 modules
var RuleDetailsExpression = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx + 1 modules
var RuleDetailsMatchingInstances = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetails.tsx












const RuleDetails = _ref => {
  let {
    rule
  } = _ref;
  const styles = (0,src.useStyles2)(getStyles);
  const {
    promRule,
    namespace: {
      rulesSource
    }
  } = rule;
  const annotations = Object.entries(rule.annotations).filter(_ref2 => {
    let [_, value] = _ref2;
    return !!value.trim();
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsActionButtons/* RuleDetailsActionButtons */.f, {
      rule: rule,
      rulesSource: rulesSource
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.wrapper,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.leftSide,
        children: [!!rule.labels && !!Object.keys(rule.labels).length && /*#__PURE__*/(0,jsx_runtime.jsx)(DetailsField/* DetailsField */.C, {
          label: "Labels",
          horizontal: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(AlertLabels/* AlertLabels */.s, {
            labels: rule.labels
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsExpression/* RuleDetailsExpression */.C, {
          rulesSource: rulesSource,
          rule: rule,
          annotations: annotations
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsAnnotations/* RuleDetailsAnnotations */.J, {
          annotations: annotations
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.rightSide,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsDataSources/* RuleDetailsDataSources */.C, {
          rulesSource: rulesSource,
          rule: rule
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsMatchingInstances/* RuleDetailsMatchingInstances */.M, {
      promRule: promRule
    })]
  });
};
const getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
    }
  `,
  leftSide: emotion_css_esm.css`
    flex: 1;
  `,
  rightSide: emotion_css_esm.css`
    ${theme.breakpoints.up('md')} {
      padding-left: 90px;
      width: 300px;
    }
  `
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleHealth.tsx
var RuleHealth = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleState.tsx
var RuleState = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RulesTable.tsx












const RulesTable = _ref => {
  let {
    rules,
    className,
    showGuidelines = false,
    emptyMessage = 'No rules found.',
    showGroupColumn = false,
    showSummaryColumn = false
  } = _ref;
  const styles = (0,src.useStyles2)(RulesTable_getStyles);
  const wrapperClass = (0,emotion_css_esm.cx)(styles.wrapper, className, {
    [styles.wrapperMargin]: showGuidelines
  });
  const items = (0,react.useMemo)(() => {
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
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: (0,emotion_css_esm.cx)(wrapperClass, styles.emptyMessage),
      children: emptyMessage
    });
  }

  const TableComponent = showGuidelines ? DynamicTableWithGuidelines/* DynamicTableWithGuidelines */.F : DynamicTable/* DynamicTable */.t;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: wrapperClass,
    "data-testid": "rules-table",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent, {
      cols: columns,
      isExpandable: true,
      items: items,
      renderExpandedContent: _ref2 => {
        let {
          data: rule
        } = _ref2;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetails, {
          rule: rule
        });
      }
    })
  });
};
const RulesTable_getStyles = theme => ({
  wrapperMargin: emotion_css_esm.css`
    ${theme.breakpoints.up('md')} {
      margin-left: 36px;
    }
  `,
  emptyMessage: emotion_css_esm.css`
    padding: ${theme.spacing(1)};
  `,
  wrapper: emotion_css_esm.css`
    width: auto;
    background-color: ${theme.colors.background.secondary};
    border-radius: ${theme.shape.borderRadius()};
  `
});

function useColumns(showSummaryColumn, showGroupColumn) {
  const hasRuler = (0,useHasRuler/* useHasRuler */.h)();
  return (0,react.useMemo)(() => {
    const columns = [{
      id: 'state',
      label: 'State',
      // eslint-disable-next-line react/display-name
      renderCell: _ref3 => {
        let {
          data: rule
        } = _ref3;
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
        return /*#__PURE__*/(0,jsx_runtime.jsx)(RuleState/* RuleState */.p, {
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
      renderCell: _ref4 => {
        let {
          data: rule
        } = _ref4;
        return rule.name;
      },
      size: 5
    }, {
      id: 'health',
      label: 'Health',
      // eslint-disable-next-line react/display-name
      renderCell: _ref5 => {
        let {
          data: {
            promRule
          }
        } = _ref5;
        return promRule ? /*#__PURE__*/(0,jsx_runtime.jsx)(RuleHealth/* RuleHealth */.V, {
          rule: promRule
        }) : null;
      },
      size: '75px'
    }];

    if (showSummaryColumn) {
      columns.push({
        id: 'summary',
        label: 'Summary',
        // eslint-disable-next-line react/display-name
        renderCell: _ref6 => {
          var _rule$annotations$Ann;

          let {
            data: rule
          } = _ref6;
          return (_rule$annotations$Ann = rule.annotations[constants/* Annotation.summary */.q6.summary]) !== null && _rule$annotations$Ann !== void 0 ? _rule$annotations$Ann : '';
        },
        size: 5
      });
    }

    if (showGroupColumn) {
      columns.push({
        id: 'group',
        label: 'Group',
        // eslint-disable-next-line react/display-name
        renderCell: _ref7 => {
          let {
            data: rule
          } = _ref7;
          const {
            namespace,
            group
          } = rule; // ungrouped rules are rules that are in the "default" group name

          const isUngrouped = group.name === 'default';
          const groupName = isUngrouped ? /*#__PURE__*/(0,jsx_runtime.jsx)(RuleLocation/* RuleLocation */.V, {
            namespace: namespace.name
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(RuleLocation/* RuleLocation */.V, {
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

/***/ "./public/app/features/alerting/unified/hooks/useHasRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useHasRuler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");


 // datasource has ruler if it's grafana managed or if we're able to load rules from it

function useHasRuler() {
  const rulerRules = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__/* .useUnifiedAlertingSelector */ ._)(state => state.rulerRules);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(rulesSource => {
    var _rulerRules$rulesSour;

    const rulesSourceName = typeof rulesSource === 'string' ? rulesSource : rulesSource.name;
    return rulesSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_1__/* .GRAFANA_RULES_SOURCE_NAME */ .GC || !!((_rulerRules$rulesSour = rulerRules[rulesSourceName]) !== null && _rulerRules$rulesSour !== void 0 && _rulerRules$rulesSour.result);
  }, [rulerRules]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/accessControlHooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useRulesAccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");


function useRulesAccess() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_access_control__WEBPACK_IMPORTED_MODULE_1__/* .getRulesAccess */ .Rv)(), []);
}

/***/ })

}]);