"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4286],{

 "./public/app/features/alerting/AlertRuleList.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "AlertRuleListUnconnected": () => ( AlertRuleListUnconnected),
  "default": () => ( AlertRuleList)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var app_events = __webpack_require__("./public/app/core/app_events.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var events = __webpack_require__("./public/app/types/events.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _VerticalGroup;





function AlertHowToModal(_ref) {
  let {
    onDismiss
  } = _ref;
  return (0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
    title: "Adding an Alert",
    isOpen: true,
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    children: _VerticalGroup || (_VerticalGroup = (0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
      spacing: "sm",
      children: [(0,jsx_runtime.jsx)("img", {
        src: "public/img/alert_howto_new.png",
        alt: "link to how to alert image"
      }), (0,jsx_runtime.jsx)("p", {
        children: "Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."
      }), (0,jsx_runtime.jsx)("p", {
        children: "Remember to save the dashboard to persist your alert rule changes."
      })]
    }))
  });
}
var main = __webpack_require__("./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js");
var main_default = __webpack_require__.n(main);
;






const AlertRuleItem = _ref => {
  let {
    rule,
    search,
    onTogglePause
  } = _ref;
  const ruleUrl = `${rule.url}?editPanel=${rule.panelId}&tab=alert`;
  const renderText = (0,react.useCallback)(text => (0,jsx_runtime.jsx)((main_default()), {
    highlightClassName: "highlight-search-match",
    textToHighlight: text,
    searchWords: [search]
  }, text), [search]);
  return (0,jsx_runtime.jsxs)(grafana_ui_src.Card, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.Card.Heading, {
      children: renderText(rule.name)
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Card.Figure, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        size: "xl",
        name: rule.stateIcon,
        className: `alert-rule-item__icon ${rule.stateClass}`
      })
    }), (0,jsx_runtime.jsxs)(grafana_ui_src.Card.Meta, {
      children: [(0,jsx_runtime.jsxs)("span", {
        children: [(0,jsx_runtime.jsxs)("span", {
          className: `${rule.stateClass}`,
          children: [renderText(rule.stateText), ' ']
        }, "text"), "for ", rule.stateAge]
      }, "state"), rule.info ? renderText(rule.info) : null]
    }), (0,jsx_runtime.jsxs)(grafana_ui_src.Card.Actions, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        icon: rule.state === 'paused' ? 'play' : 'pause',
        onClick: onTogglePause,
        children: rule.state === 'paused' ? 'Resume' : 'Pause'
      }, "play"), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: "secondary",
        href: ruleUrl,
        icon: "cog",
        children: "Edit alert"
      }, "edit")]
    })]
  });
};

 const alerting_AlertRuleItem = (AlertRuleItem);
var useLocalStorage = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
;
var _p, _p2;






const LOCAL_STORAGE_KEY = 'grafana.legacyalerting.unifiedalertingpromo';

const UnifiedAlertingPromotion = () => {
  const [showUnifiedAlertingPromotion, setShowUnifiedAlertingPromotion] = (0,useLocalStorage.Z)(LOCAL_STORAGE_KEY, true);

  if (!showUnifiedAlertingPromotion) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
    severity: "info",
    title: "Try out the Grafana 8 alerting!",
    onRemove: () => setShowUnifiedAlertingPromotion(false),
    children: [_p || (_p = (0,jsx_runtime.jsxs)("p", {
      children: ["You are using the legacy Grafana alerting.", (0,jsx_runtime.jsx)("br", {}), "While we have no plans of deprecating it any time soon, we invite you to give the improved Grafana 8 alerting a try."]
    })), _p2 || (_p2 = (0,jsx_runtime.jsxs)("p", {
      children: ["See", ' ', (0,jsx_runtime.jsx)("a", {
        href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",
        children: "What\u2019s New with Grafana 8 alerting"
      }), ' ', "to learn more about what\u2018s new in Grafana 8 alerting or learn", ' ', (0,jsx_runtime.jsx)("a", {
        href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",
        children: "how to enable the new Grafana 8 alerting feature"
      }), "."]
    }))]
  });
};


var actions = __webpack_require__("./public/app/features/alerting/state/actions.ts");
var reducers = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
;
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
;
var _label, _div, _LinkButton, _UnifiedAlertingPromo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function mapStateToProps(state) {
  return {
    navModel: (0,navModel.h)(state.navIndex, 'alert-list'),
    alertRules: getAlertRuleItems(state),
    search: getSearchQuery(state.alertRules),
    isLoading: state.alertRules.isLoading
  };
}

const mapDispatchToProps = {
  getAlertRulesAsync: actions.Au,
  setSearchQuery: reducers.ql,
  togglePauseAlertRule: actions.en
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
      app_events.Z.publish(new events.Dn({
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
      return (0,jsx_runtime.jsx)("option", {
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
    return (0,jsx_runtime.jsx)(Page.Z, {
      navModel: navModel,
      children: (0,jsx_runtime.jsxs)(Page.Z.Contents, {
        isLoading: isLoading,
        children: [(0,jsx_runtime.jsxs)("div", {
          className: "page-action-bar",
          children: [(0,jsx_runtime.jsx)("div", {
            className: "gf-form gf-form--grow",
            children: (0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
              placeholder: "Search alerts",
              value: search,
              onChange: this.onSearchQueryChange
            })
          }), (0,jsx_runtime.jsxs)("div", {
            className: "gf-form",
            children: [_label || (_label = (0,jsx_runtime.jsx)("label", {
              className: "gf-form-label",
              htmlFor: "alert-state-filter",
              children: "States"
            })), (0,jsx_runtime.jsx)("div", {
              className: "width-13",
              children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
                inputId: 'alert-state-filter',
                options: this.stateFilters,
                onChange: this.onStateFilterChanged,
                value: this.getStateFilter()
              })
            })]
          }), _div || (_div = (0,jsx_runtime.jsx)("div", {
            className: "page-action-bar__spacer"
          })), src.config.unifiedAlertingEnabled && (_LinkButton || (_LinkButton = (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            variant: "primary",
            href: "alerting/ng/new",
            children: "Add NG Alert"
          }))), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            variant: "secondary",
            onClick: this.onOpenHowTo,
            children: "How to add an alert"
          })]
        }), _UnifiedAlertingPromo || (_UnifiedAlertingPromo = (0,jsx_runtime.jsx)(UnifiedAlertingPromotion, {})), (0,jsx_runtime.jsx)(grafana_ui_src.VerticalGroup, {
          spacing: "none",
          children: alertRules.map(rule => {
            return (0,jsx_runtime.jsx)(alerting_AlertRuleItem, {
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
 const AlertRuleList = (connector(AlertRuleListUnconnected));

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

 })

}]);