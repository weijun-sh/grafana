"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NotificationsListPage"],{

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

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavModel": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, id);
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
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_6__.useNavModel)('channels');
  const [notifications, setNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const getNotifications = async () => {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/alert-notifications`);
  };

  const [state, fetchNotifications] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(getNotifications);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchNotifications().then(res => {
      setNotifications(res);
    });
  }, [fetchNotifications]);

  const deleteNotification = id => {
    app_core_core__WEBPACK_IMPORTED_MODULE_5__.appEvents.publish(new _types_events__WEBPACK_IMPORTED_MODULE_7__.ShowConfirmModalEvent({
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
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
      }), !(notifications.length || state.loading) && (_EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
/* harmony import */ var _components_receivers_EditReceiverView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/EditReceiverView.tsx");
/* harmony import */ var _components_receivers_EditTemplateView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/EditTemplateView.tsx");
/* harmony import */ var _components_receivers_GlobalConfigForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/GlobalConfigForm.tsx");
/* harmony import */ var _components_receivers_NewReceiverView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/NewReceiverView.tsx");
/* harmony import */ var _components_receivers_NewTemplateView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/NewTemplateView.tsx");
/* harmony import */ var _components_receivers_ReceiversAndTemplatesView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversAndTemplatesView.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Redirect, _LoadingPlaceholder;























const Receivers = () => {
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_13__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_12__.useAlertManagerSourceName)(alertManagers);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation)();
  const isRoot = location.pathname.endsWith('/alerting/notifications');
  const configRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const {
    result: config,
    loading,
    error
  } = alertManagerSourceName && configRequests[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_17__.initialAsyncRequestState;
  const receiverTypes = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_14__.useUnifiedAlertingSelector)(state => state.grafanaNotifiers);
  const shouldLoadConfig = isRoot || !config;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (alertManagerSourceName && shouldLoadConfig) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_15__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch, shouldLoadConfig]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_16__.GRAFANA_RULES_SOURCE_NAME && !(receiverTypes.result || receiverTypes.loading || receiverTypes.error)) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_15__.fetchGrafanaNotifiersAction)());
    }
  }, [alertManagerSourceName, dispatch, receiverTypes]);
  const disableAmSelect = !isRoot;

  if (!alertManagerSourceName) {
    return isRoot ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__.AlertingPageWrapper, {
      pageId: "receivers",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_5__.NoAlertManagerWarning, {
        availableAlertManagers: alertManagers
      })
    }) : _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Redirect, {
      to: "/alerting/notifications"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__.AlertingPageWrapper, {
    pageId: "receivers",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__.AlertManagerPicker, {
      current: alertManagerSourceName,
      disabled: disableAmSelect,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager config",
      children: error.message || 'Unknown error.'
    }), loading && !config && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
      text: "loading configuration..."
    }))), config && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_ReceiversAndTemplatesView__WEBPACK_IMPORTED_MODULE_11__.ReceiversAndTemplatesView, {
          config: config,
          alertManagerName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/templates/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_NewTemplateView__WEBPACK_IMPORTED_MODULE_10__.NewTemplateView, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/templates/:name/edit",
        children: ({
          match
        }) => (match === null || match === void 0 ? void 0 : match.params.name) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_EditTemplateView__WEBPACK_IMPORTED_MODULE_7__.EditTemplateView, {
          alertManagerSourceName: alertManagerSourceName,
          config: config,
          templateName: decodeURIComponent(match === null || match === void 0 ? void 0 : match.params.name)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/receivers/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_NewReceiverView__WEBPACK_IMPORTED_MODULE_9__.NewReceiverView, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/receivers/:name/edit",
        children: ({
          match
        }) => (match === null || match === void 0 ? void 0 : match.params.name) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_EditReceiverView__WEBPACK_IMPORTED_MODULE_6__.EditReceiverView, {
          alertManagerSourceName: alertManagerSourceName,
          config: config,
          receiverName: decodeURIComponent(match === null || match === void 0 ? void 0 : match.params.name)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_19__.Route, {
        exact: true,
        path: "/alerting/notifications/global-config",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_receivers_GlobalConfigForm__WEBPACK_IMPORTED_MODULE_8__.GlobalConfigForm, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(Receivers, {
  style: 'page'
}));

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

/***/ "./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAlertManagerWarning": () => (/* binding */ NoAlertManagerWarning)
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

const NoAlertManagerWarning = ({
  availableAlertManagers
}) => {
  const [_, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__.useAlertManagerSourceName)(availableAlertManagers);
  const hasOtherAMs = availableAlertManagers.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: hasOtherAMs ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__.AlertManagerPicker, {
        onChange: setAlertManagerSourceName,
        dataSources: availableAlertManagers
      }), _OtherAlertManagersAv || (_OtherAlertManagersAv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(OtherAlertManagersAvailable, {}))]
    }) : _NoAlertManagersAvail || (_NoAlertManagersAvail = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NoAlertManagersAvailable, {}))
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/EditReceiverView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditReceiverView": () => (/* binding */ EditReceiverView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx");
/* harmony import */ var _form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InfoBox;







const EditReceiverView = ({
  config,
  receiverName,
  alertManagerSourceName
}) => {
  var _config$alertmanager_;

  const receiver = (_config$alertmanager_ = config.alertmanager_config.receivers) === null || _config$alertmanager_ === void 0 ? void 0 : _config$alertmanager_.find(({
    name
  }) => name === receiverName);

  if (!receiver) {
    return _InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InfoBox, {
      severity: "error",
      title: "Receiver not found",
      children: "Sorry, this receiver does not seem to exit."
    }));
  }

  if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_2__.GRAFANA_RULES_SOURCE_NAME) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_4__.GrafanaReceiverForm, {
      config: config,
      alertManagerSourceName: alertManagerSourceName,
      existing: receiver
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_3__.CloudReceiverForm, {
      config: config,
      alertManagerSourceName: alertManagerSourceName,
      existing: receiver
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/EditTemplateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTemplateView": () => (/* binding */ EditTemplateView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _TemplateForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InfoBox;





const EditTemplateView = ({
  config,
  templateName,
  alertManagerSourceName
}) => {
  var _config$template_file;

  const template = (_config$template_file = config.template_files) === null || _config$template_file === void 0 ? void 0 : _config$template_file[templateName];

  if (!template) {
    return _InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InfoBox, {
      severity: "error",
      title: "Template not found",
      children: "Sorry, this template does not seem to exit."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TemplateForm__WEBPACK_IMPORTED_MODULE_2__.TemplateForm, {
    alertManagerSourceName: alertManagerSourceName,
    config: config,
    existing: {
      name: templateName,
      content: template
    }
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/GlobalConfigForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalConfigForm": () => (/* binding */ GlobalConfigForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_receiver_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/receiver-form.ts");
/* harmony import */ var _form_fields_OptionField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button, _Button2;

















const defaultValues = {
  smtp_require_tls: true
};
const GlobalConfigForm = ({
  config,
  alertManagerSourceName
}) => {
  var _config$alertmanager_;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading,
    error
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.saveAMConfig);
  const readOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_9__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    // making a copy here beacuse react-hook-form will mutate these, and break if the object is frozen. for real.
    defaultValues: JSON.parse(JSON.stringify(Object.assign({}, defaultValues, (_config$alertmanager_ = config.alertmanager_config.global) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : {})))
  });
  const {
    handleSubmit,
    formState: {
      errors
    }
  } = formAPI;

  const onSubmitCallback = values => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.updateAlertManagerConfigAction)({
      newConfig: Object.assign({}, config, {
        alertmanager_config: Object.assign({}, config.alertmanager_config, {
          global: (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_11__.omitEmptyValues)(values)
        })
      }),
      oldConfig: config,
      alertManagerSourceName,
      successMessage: 'Global config updated.',
      redirectPath: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('/alerting/notifications', alertManagerSourceName)
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formAPI, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmitCallback),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h4", {
        className: styles.heading,
        children: "Global config"
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
        severity: "error",
        title: "Error saving receiver",
        children: error.message || String(error)
      }), _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_8__.globalConfigOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_form_fields_OptionField__WEBPACK_IMPORTED_MODULE_12__.OptionField, {
        readOnly: readOnly,
        defaultValue: defaultValues[option.propertyName],
        option: option,
        error: errors[option.propertyName],
        pathPrefix: ''
      }, option.propertyName)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
            children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
              disabled: true,
              icon: "fa fa-spinner",
              variant: "primary",
              children: "Saving..."
            }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
              type: "submit",
              children: "Save global config"
            })))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
            disabled: loading,
            fill: "outline",
            variant: "secondary",
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('alerting/notifications', alertManagerSourceName),
            children: "Cancel"
          })]
        })
      })]
    })
  }));
};

const getStyles = theme => ({
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(4, 0)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/NewReceiverView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewReceiverView": () => (/* binding */ NewReceiverView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx");
/* harmony import */ var _form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const NewReceiverView = ({
  alertManagerSourceName,
  config
}) => {
  if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_1__.GRAFANA_RULES_SOURCE_NAME) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_form_GrafanaReceiverForm__WEBPACK_IMPORTED_MODULE_3__.GrafanaReceiverForm, {
      alertManagerSourceName: alertManagerSourceName,
      config: config
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_form_CloudReceiverForm__WEBPACK_IMPORTED_MODULE_2__.CloudReceiverForm, {
      alertManagerSourceName: alertManagerSourceName,
      config: config
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/NewTemplateView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewTemplateView": () => (/* binding */ NewTemplateView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _TemplateForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const NewTemplateView = ({
  config,
  alertManagerSourceName
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TemplateForm__WEBPACK_IMPORTED_MODULE_1__.TemplateForm, {
    config: config,
    alertManagerSourceName: alertManagerSourceName
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/ReceiversAndTemplatesView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiversAndTemplatesView": () => (/* binding */ ReceiversAndTemplatesView)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _ReceiversTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversTable.tsx");
/* harmony import */ var _TemplatesTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;













const ReceiversAndTemplatesView = ({
  config,
  alertManagerName
}) => {
  const isCloud = alertManagerName !== _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.isVanillaPrometheusAlertManagerDataSource)(alertManagerName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [!isVanillaAM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_TemplatesTable__WEBPACK_IMPORTED_MODULE_8__.TemplatesTable, {
      config: config,
      alertManagerName: alertManagerName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ReceiversTable__WEBPACK_IMPORTED_MODULE_7__.ReceiversTable, {
      config: config,
      alertManagerName: alertManagerName
    }), isCloud && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_6__.Authorize, {
      actions: [app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.AlertingNotificationsExternalWrite],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        className: styles.section,
        severity: "info",
        title: "Global config for contact points",
        children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          children: "For each external Alertmanager you can define global settings, like server addresses, usernames and password, for all the supported contact points."
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.makeAMLink)('alerting/notifications/global-config', alertManagerName),
          variant: "secondary",
          children: isVanillaAM ? 'View global config' : 'Edit global config'
        })]
      })
    })]
  });
};

const getStyles = theme => ({
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(4)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiversSection": () => (/* binding */ ReceiversSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/0/cache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const ReceiversSection = ({
  className,
  title,
  description,
  addButtonLabel,
  addButtonTo,
  children,
  showButton = true
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.heading, className),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: styles.description,
          children: description
        })]
      }), showButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: addButtonTo,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "button",
          icon: "plus",
          children: addButtonLabel
        })
      })]
    }), children]
  });
};

const getStyles = theme => ({
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: space-between;
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/ReceiversTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiversTable": () => (/* binding */ ReceiversTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_receivers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/receivers.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _ReceiversSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _col, _col2, _col3, _th, _th2, _th3, _td, _p;




















const ReceiversTable = ({
  config,
  alertManagerName
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_8__.getAlertTableStyles);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_11__.isVanillaPrometheusAlertManagerDataSource)(alertManagerName);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_9__.getNotificationsPermissions)(alertManagerName);
  const grafanaNotifiers = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.grafanaNotifiers); // receiver name slated for deletion. If this is set, a confirmation modal is shown. If user approves, this receiver is deleted

  const [receiverToDelete, setReceiverToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [showCannotDeleteReceiverModal, setShowCannotDeleteReceiverModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onClickDeleteReceiver = receiverName => {
    if ((0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_10__.isReceiverUsed)(receiverName, config)) {
      setShowCannotDeleteReceiverModal(true);
    } else {
      setReceiverToDelete(receiverName);
    }
  };

  const deleteReceiver = () => {
    if (receiverToDelete) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.deleteReceiverAction)(receiverToDelete, alertManagerName));
    }

    setReceiverToDelete(undefined);
  };

  const rows = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(receiver => {
      var _grafanaNotifiers$res;

      return {
        name: receiver.name,
        types: Object.entries((0,_utils_receivers__WEBPACK_IMPORTED_MODULE_13__.extractNotifierTypeCounts)(receiver, (_grafanaNotifiers$res = grafanaNotifiers.result) !== null && _grafanaNotifiers$res !== void 0 ? _grafanaNotifiers$res : [])).map(([type, count]) => {
          if (count > 1) {
            return `${type} (${count})`;
          }

          return type;
        })
      };
    })) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, grafanaNotifiers.result]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_ReceiversSection__WEBPACK_IMPORTED_MODULE_15__.ReceiversSection, {
    className: styles.section,
    title: "Contact points",
    description: "Define where the notifications will be sent to, for example email or Slack.",
    showButton: !isVanillaAM && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(permissions.create),
    addButtonLabel: "New contact point",
    addButtonTo: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)('/alerting/notifications/receivers/new', alertManagerName),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("table", {
      className: tableStyles.table,
      "data-testid": "receivers-table",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("colgroup", {
        children: [_col || (_col = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("col", {})), _col2 || (_col2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("col", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
          actions: [permissions.update, permissions.delete],
          children: _col3 || (_col3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("col", {}))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("th", {
            children: "Contact point name"
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("th", {
            children: "Type"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
            actions: [permissions.update, permissions.delete],
            children: _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("th", {
              children: "Actions"
            }))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("tbody", {
        children: [!rows.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("tr", {
          className: tableStyles.evenRow,
          children: _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("td", {
            colSpan: 3,
            children: "No receivers defined."
          }))
        }), rows.map((receiver, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("tr", {
          className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("td", {
            children: receiver.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("td", {
            children: receiver.types.join(', ')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
            actions: [permissions.update, permissions.delete],
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("td", {
              className: tableStyles.actionsCell,
              children: [!isVanillaAM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
                  actions: [permissions.update],
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_14__.ActionIcon, {
                    "aria-label": "Edit",
                    "data-testid": "edit",
                    to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)(`/alerting/notifications/receivers/${encodeURIComponent(receiver.name)}/edit`, alertManagerName),
                    tooltip: "Edit contact point",
                    icon: "pen"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
                  actions: [permissions.delete],
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_14__.ActionIcon, {
                    onClick: () => onClickDeleteReceiver(receiver.name),
                    tooltip: "Delete contact point",
                    icon: "trash-alt"
                  })
                })]
              }), isVanillaAM && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
                actions: [permissions.update],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_14__.ActionIcon, {
                  "data-testid": "view",
                  to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)(`/alerting/notifications/receivers/${encodeURIComponent(receiver.name)}/edit`, alertManagerName),
                  tooltip: "View contact point",
                  icon: "file-alt"
                })
              })]
            })
          })]
        }, receiver.name))]
      })]
    }), !!showCannotDeleteReceiverModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
      isOpen: true,
      title: "Cannot delete contact point",
      onDismiss: () => setShowCannotDeleteReceiverModal(false),
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
        children: "Contact point cannot be deleted because it is used in more policies. Please update or delete these policies first."
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          onClick: () => setShowCannotDeleteReceiverModal(false),
          fill: "outline",
          children: "Close"
        })
      })]
    }), !!receiverToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, {
      isOpen: true,
      title: "Delete contact point",
      body: `Are you sure you want to delete contact point "${receiverToDelete}"?`,
      confirmText: "Yes, delete",
      onConfirm: deleteReceiver,
      onDismiss: () => setReceiverToDelete(undefined)
    })]
  });
};

const getStyles = theme => ({
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(4)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateForm": () => (/* binding */ TemplateForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/templates.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button, _Button2;














const defaults = Object.freeze({
  name: '',
  content: ''
});
const TemplateForm = ({
  existing,
  alertManagerSourceName,
  config
}) => {
  var _data, _errors$name, _errors$name2, _errors$content, _errors$content2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading,
    error
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.saveAMConfig);

  const submit = values => {
    var _config$alertmanager_;

    // wrap content in "define" if it's not already wrapped, in case user did not do it/
    // it's not obvious that this is needed for template to work
    const content = (0,_utils_templates__WEBPACK_IMPORTED_MODULE_9__.ensureDefine)(values.name, values.content); // add new template to template map

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
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.updateAlertManagerConfigAction)({
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
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onSubmit',
    defaultValues: existing !== null && existing !== void 0 ? existing : defaults
  });

  const validateNameIsUnique = name => {
    return !config.template_files[name] || (existing === null || existing === void 0 ? void 0 : existing.name) === name ? true : 'Another template with this name already exists.';
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
    onSubmit: handleSubmit(submit),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h4", {
      children: existing ? 'Edit message template' : 'Create message template'
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      severity: "error",
      title: "Error saving template",
      children: error.message || (error === null || error === void 0 ? void 0 : (_data = error.data) === null || _data === void 0 ? void 0 : _data.message) || String(error)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      label: "Template name",
      error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
      invalid: !!((_errors$name2 = errors.name) !== null && _errors$name2 !== void 0 && _errors$name2.message),
      required: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register('name', {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      description: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: ["You can use the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
          href: "https://pkg.go.dev/text/template?utm_source=godoc",
          target: "__blank",
          rel: "noreferrer",
          className: styles.externalLink,
          children: "Go templating language"
        }), ".", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextArea, Object.assign({}, register('content', {
        required: {
          value: true,
          message: 'Required.'
        }
      }), {
        className: styles.textarea,
        placeholder: "Message",
        rows: 12
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.buttons,
      children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        disabled: true,
        icon: "fa fa-spinner",
        variant: "primary",
        children: "Saving..."
      }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "submit",
        variant: "primary",
        children: "Save template"
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
        disabled: loading,
        href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)('alerting/notifications', alertManagerSourceName),
        variant: "secondary",
        type: "button",
        fill: "outline",
        children: "Cancel"
      })]
    })]
  });
};

const getStyles = theme => ({
  externalLink: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    text-decoration: underline;
  `,
  buttons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  textarea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 758px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatesTable": () => (/* binding */ TemplatesTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _ReceiversSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _col, _col2, _th, _th2, _th3, _td, _td2;
















const TemplatesTable = ({
  config,
  alertManagerName
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const [expandedTemplates, setExpandedTemplates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_6__.getAlertTableStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_7__.getNotificationsPermissions)(alertManagerName);
  const templateRows = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.entries(config.template_files), [config]);
  const [templateToDelete, setTemplateToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const deleteTemplate = () => {
    if (templateToDelete) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__.deleteTemplateAction)(templateToDelete, alertManagerName));
    }

    setTemplateToDelete(undefined);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_ReceiversSection__WEBPACK_IMPORTED_MODULE_12__.ReceiversSection, {
    title: "Message templates",
    description: "Templates construct the messages that get sent to the contact points.",
    addButtonLabel: "New template",
    addButtonTo: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)('/alerting/notifications/templates/new', alertManagerName),
    showButton: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(permissions.create),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("table", {
      className: tableStyles.table,
      "data-testid": "templates-table",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("colgroup", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("col", {
          className: tableStyles.colExpand
        }), _col || (_col = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("col", {})), _col2 || (_col2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("col", {}))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
            children: "Template"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
            actions: [permissions.update, permissions.delete],
            children: _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
              children: "Actions"
            }))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tbody", {
        children: [!templateRows.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("tr", {
          className: tableStyles.evenRow,
          children: _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {
            colSpan: 3,
            children: "No templates defined."
          }))
        }), templateRows.map(([name, content], idx) => {
          const isExpanded = !!expandedTemplates[name];
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tr", {
              className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_9__.CollapseToggle, {
                  isCollapsed: !expandedTemplates[name],
                  onToggle: () => setExpandedTemplates(Object.assign({}, expandedTemplates, {
                    [name]: !isExpanded
                  }))
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {
                children: name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
                actions: [permissions.update, permissions.delete],
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("td", {
                  className: tableStyles.actionsCell,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
                    actions: [permissions.update],
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_11__.ActionIcon, {
                      to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)(`/alerting/notifications/templates/${encodeURIComponent(name)}/edit`, alertManagerName),
                      tooltip: "edit template",
                      icon: "pen"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
                    actions: [permissions.delete],
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_11__.ActionIcon, {
                      onClick: () => setTemplateToDelete(name),
                      tooltip: "delete template",
                      icon: "trash-alt"
                    })
                  })]
                })
              })]
            }, name), isExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tr", {
              className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
              children: [_td2 || (_td2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("td", {
                colSpan: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_10__.DetailsField, {
                  label: "Description",
                  horizontal: true,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("pre", {
                    children: content
                  })
                })
              })]
            })]
          }, name);
        })]
      })]
    }), !!templateToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
      isOpen: true,
      title: "Delete template",
      body: `Are you sure you want to delete template "${templateToDelete}"?`,
      confirmText: "Yes, delete",
      onConfirm: deleteTemplate,
      onDismiss: () => setTemplateToDelete(undefined)
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/ChannelOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelOptions": () => (/* binding */ ChannelOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _fields_OptionField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function ChannelOptions({
  defaultValues,
  selectedChannelOptions,
  onResetSecureField,
  secureFields,
  errors,
  pathPrefix = '',
  readOnly = false
}) {
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const currentFormValues = watch(); // react hook form types ARE LYING!

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: selectedChannelOptions.map((option, index) => {
      var _ref, _defaultValues$settin;

      const key = `${option.label}-${index}`; // Some options can be dependent on other options, this determines what is selected in the dependency options
      // I think this needs more thought.

      const selectedOptionValue = currentFormValues[`${pathPrefix}settings.${option.showWhen.field}`];

      if (option.showWhen.field && selectedOptionValue !== option.showWhen.is) {
        return null;
      }

      if (secureFields && secureFields[option.propertyName]) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: option.label,
          description: option.description || undefined,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
            readOnly: true,
            value: "Configured",
            suffix: readOnly ? null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              onClick: () => onResetSecureField(option.propertyName),
              fill: "text",
              type: "button",
              size: "sm",
              children: "Clear"
            })
          })
        }, key);
      }

      const error = (_ref = option.secure ? errors === null || errors === void 0 ? void 0 : errors.secureSettings : errors === null || errors === void 0 ? void 0 : errors.settings) === null || _ref === void 0 ? void 0 : _ref[option.propertyName];
      const defaultValue = defaultValues === null || defaultValues === void 0 ? void 0 : (_defaultValues$settin = defaultValues.settings) === null || _defaultValues$settin === void 0 ? void 0 : _defaultValues$settin[option.propertyName];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fields_OptionField__WEBPACK_IMPORTED_MODULE_3__.OptionField, {
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

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/ChannelSubForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelSubForm": () => (/* binding */ ChannelSubForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _ChannelOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ChannelOptions.tsx");
/* harmony import */ var _CollapsibleSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref", "onChange"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function ChannelSubForm({
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
}) {
  var _watch;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  const name = fieldName => `${pathPrefix}${fieldName}`;

  const {
    control,
    watch,
    register,
    trigger,
    formState,
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const selectedType = (_watch = watch(name('type'))) !== null && _watch !== void 0 ? _watch : defaultValues.type; // nope, setting "default" does not work at all.

  const {
    loading: testingReceiver
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.testReceivers);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    register(`${pathPrefix}.__id`);
    /* Need to manually register secureFields or else they'll
     be lost when testing a contact point */

    register(`${pathPrefix}.secureFields`);
  }, [register, pathPrefix]);
  const [_secureFields, setSecureFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(secureFields !== null && secureFields !== void 0 ? secureFields : {});

  const onResetSecureField = key => {
    if (_secureFields[key]) {
      const updatedSecureFields = Object.assign({}, secureFields);
      delete updatedSecureFields[key];
      setSecureFields(updatedSecureFields);
      setValue(`${pathPrefix}.secureFields`, updatedSecureFields);
    }
  };

  const typeOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => notifiers.map(({
    name,
    type
  }) => ({
    label: name,
    value: type
  })).sort((a, b) => a.label.localeCompare(b.label)), [notifiers]);

  const handleTest = async () => {
    await trigger();
    const isValid = Object.keys(formState.errors).length === 0;

    if (isValid && onTest) {
      onTest();
    }
  };

  const notifier = notifiers.find(({
    type
  }) => type === selectedType); // if there are mandatory options defined, optional options will be hidden by a collapse
  // if there aren't mandatory options, all options will be shown without collapse

  const mandatoryOptions = notifier === null || notifier === void 0 ? void 0 : notifier.options.filter(o => o.required);
  const optionalOptions = notifier === null || notifier === void 0 ? void 0 : notifier.options.filter(o => !o.required);
  const contactPointTypeInputId = `contact-point-type-${pathPrefix}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": "item-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.topRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "Contact point type",
          htmlFor: contactPointTypeInputId,
          "data-testid": `${pathPrefix}type`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
            name: name('type'),
            defaultValue: defaultValues.type,
            render: _ref => {
              let {
                field: {
                  onChange
                }
              } = _ref,
                  field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, Object.assign({
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
      }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.buttons,
        children: [onTest && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          disabled: testingReceiver,
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => handleTest(),
          icon: testingReceiver ? 'fa fa-spinner' : 'message',
          children: "Test"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => onDuplicate(),
          icon: "copy",
          children: "Duplicate"
        }), onDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          "data-testid": `${pathPrefix}delete-button`,
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => onDelete(),
          icon: "trash-alt",
          children: "Delete"
        })]
      })]
    }), notifier && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.innerContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChannelOptions__WEBPACK_IMPORTED_MODULE_5__.ChannelOptions, {
        defaultValues: defaultValues,
        selectedChannelOptions: mandatoryOptions !== null && mandatoryOptions !== void 0 && mandatoryOptions.length ? mandatoryOptions : optionalOptions,
        secureFields: _secureFields,
        errors: errors,
        onResetSecureField: onResetSecureField,
        pathPrefix: pathPrefix,
        readOnly: readOnly
      }), !!(mandatoryOptions !== null && mandatoryOptions !== void 0 && mandatoryOptions.length && optionalOptions !== null && optionalOptions !== void 0 && optionalOptions.length) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_CollapsibleSection__WEBPACK_IMPORTED_MODULE_6__.CollapsibleSection, {
        label: `Optional ${notifier.name} settings`,
        children: [notifier.info !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
          title: "",
          severity: "info",
          children: notifier.info
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChannelOptions__WEBPACK_IMPORTED_MODULE_5__.ChannelOptions, {
          defaultValues: defaultValues,
          selectedChannelOptions: optionalOptions,
          secureFields: _secureFields,
          onResetSecureField: onResetSecureField,
          errors: errors,
          pathPrefix: pathPrefix,
          readOnly: readOnly
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_CollapsibleSection__WEBPACK_IMPORTED_MODULE_6__.CollapsibleSection, {
        label: "Notification settings",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(CommonSettingsComponent, {
          pathPrefix: pathPrefix,
          readOnly: readOnly
        })
      })]
    })]
  });
}

const getStyles = theme => ({
  buttons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  innerContent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 536px;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(2, 0)};
    padding: ${theme.spacing(1)};
    border: solid 1px ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
    max-width: ${theme.breakpoints.values.xl}${theme.breakpoints.unit};
  `,
  topRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  channelSettingsHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/CloudCommonChannelSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudCommonChannelSettings": () => (/* binding */ CloudCommonChannelSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const CloudCommonChannelSettings = ({
  pathPrefix,
  className,
  readOnly = false
}) => {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      disabled: readOnly,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, Object.assign({}, register(`${pathPrefix}sendResolved`), {
        label: "Send resolved",
        disabled: readOnly,
        description: "Whether or not to notify about resolved alerts."
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudReceiverForm": () => (/* binding */ CloudReceiverForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/receiver-form.ts");
/* harmony import */ var _CloudCommonChannelSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CloudCommonChannelSettings.tsx");
/* harmony import */ var _ReceiverForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;













const defaultChannelValues = Object.freeze({
  __id: '',
  sendResolved: true,
  secureSettings: {},
  settings: {},
  secureFields: {},
  type: 'email'
});
const CloudReceiverForm = ({
  existing,
  alertManagerSourceName,
  config
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName); // transform receiver DTO to form values

  const [existingValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!existing) {
      return [undefined, {}];
    }

    return (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.cloudReceiverToFormValues)(existing, _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__.cloudNotifierTypes);
  }, [existing]);

  const onSubmit = values => {
    const newReceiver = (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.formValuesToCloudReceiver)(values, defaultChannelValues);
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_3__.updateAlertManagerConfigAction)({
      newConfig: (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.updateConfigWithReceiver)(config, newReceiver, existing === null || existing === void 0 ? void 0 : existing.name),
      oldConfig: config,
      alertManagerSourceName,
      successMessage: existing ? 'Contact point updated.' : 'Contact point created.',
      redirectPath: '/alerting/notifications'
    }));
  };

  const takenReceiverNames = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(({
      name
    }) => name).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name))) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, existing]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [!isVanillaAM && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      title: "Info",
      severity: "info",
      children: "Note that empty string values will be replaced with global defaults where appropriate."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ReceiverForm__WEBPACK_IMPORTED_MODULE_8__.ReceiverForm, {
      config: config,
      onSubmit: onSubmit,
      initialValues: existingValue,
      notifiers: _utils_cloud_alertmanager_notifier_types__WEBPACK_IMPORTED_MODULE_4__.cloudNotifierTypes,
      alertManagerSourceName: alertManagerSourceName,
      defaultItem: defaultChannelValues,
      takenReceiverNames: takenReceiverNames,
      commonSettingsComponent: _CloudCommonChannelSettings__WEBPACK_IMPORTED_MODULE_7__.CloudCommonChannelSettings
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapsibleSection": () => (/* binding */ CollapsibleSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const CollapsibleSection = ({
  label,
  description,
  children,
  className,
  size = 'xl'
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.wrapper, className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.heading,
      onClick: toggleCollapse,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_3__.CollapseToggle, {
        className: styles.caret,
        size: size,
        onToggle: toggleCollapse,
        isCollapsed: isCollapsed
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
        children: label
      })]
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: styles.description,
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: isCollapsed ? styles.hidden : undefined,
      children: children
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
    padding-bottom: ${theme.spacing(1)};
  `,
  caret: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: -${theme.spacing(0.5)}; // make it align with fields despite icon size
  `,
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    cursor: pointer;
    h6 {
      display: inline-block;
    }
  `,
  hidden: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: none;
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.fontWeightRegular};
    margin: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/GrafanaCommonChannelSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaCommonChannelSettings": () => (/* binding */ GrafanaCommonChannelSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const GrafanaCommonChannelSettings = ({
  pathPrefix,
  className
}) => {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, Object.assign({}, register(`${pathPrefix}disableResolveMessage`), {
        label: "Disable resolved message",
        description: "Disable the resolve message [OK] that is sent when alerting state returns to false"
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaReceiverForm": () => (/* binding */ GrafanaReceiverForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/receiver-form.ts");
/* harmony import */ var _GrafanaCommonChannelSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/GrafanaCommonChannelSettings.tsx");
/* harmony import */ var _ReceiverForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx");
/* harmony import */ var _TestContactPointModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/TestContactPointModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder;














const defaultChannelValues = Object.freeze({
  __id: '',
  secureSettings: {},
  settings: {},
  secureFields: {},
  disableResolveMessage: false,
  type: 'email'
});
const GrafanaReceiverForm = ({
  existing,
  alertManagerSourceName,
  config
}) => {
  const grafanaNotifiers = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.grafanaNotifiers);
  const [testChannelValues, setTestChannelValues] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(grafanaNotifiers.result || grafanaNotifiers.loading)) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.fetchGrafanaNotifiersAction)());
    }
  }, [grafanaNotifiers, dispatch]); // transform receiver DTO to form values

  const [existingValue, id2original] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!existing || !grafanaNotifiers.result) {
      return [undefined, {}];
    }

    return (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.grafanaReceiverToFormValues)(existing, grafanaNotifiers.result);
  }, [existing, grafanaNotifiers.result]);

  const onSubmit = values => {
    const newReceiver = (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.formValuesToGrafanaReceiver)(values, id2original, defaultChannelValues);
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.updateAlertManagerConfigAction)({
      newConfig: (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.updateConfigWithReceiver)(config, newReceiver, existing === null || existing === void 0 ? void 0 : existing.name),
      oldConfig: config,
      alertManagerSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_5__.GRAFANA_RULES_SOURCE_NAME,
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
      const chan = (0,_utils_receiver_form__WEBPACK_IMPORTED_MODULE_6__.formChannelValuesToGrafanaChannelConfig)(testChannelValues, defaultChannelValues, 'test', existing);
      const payload = {
        alertManagerSourceName,
        receivers: [{
          name: 'test',
          grafana_managed_receiver_configs: [chan]
        }],
        alert
      };
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_4__.testReceiversAction)(payload));
    }
  };

  const takenReceiverNames = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(({
      name
    }) => name).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name))) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, existing]);

  if (grafanaNotifiers.result) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ReceiverForm__WEBPACK_IMPORTED_MODULE_8__.ReceiverForm, {
        config: config,
        onSubmit: onSubmit,
        initialValues: existingValue,
        onTestChannel: onTestChannel,
        notifiers: grafanaNotifiers.result,
        alertManagerSourceName: alertManagerSourceName,
        defaultItem: defaultChannelValues,
        takenReceiverNames: takenReceiverNames,
        commonSettingsComponent: _GrafanaCommonChannelSettings__WEBPACK_IMPORTED_MODULE_7__.GrafanaCommonChannelSettings
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_TestContactPointModal__WEBPACK_IMPORTED_MODULE_9__.TestContactPointModal, {
        onDismiss: () => setTestChannelValues(undefined),
        isOpen: !!testChannelValues,
        onTest: alert => testNotification(alert)
      })]
    });
  } else {
    return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
      text: "Loading notifiers..."
    }));
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReceiverForm": () => (/* binding */ ReceiverForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _ChannelSubForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/ChannelSubForm.tsx");
/* harmony import */ var _fields_DeletedSubform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/DeletedSubform.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Button, _Button2;
















function ReceiverForm({
  config,
  initialValues,
  defaultItem,
  notifiers,
  alertManagerSourceName,
  onSubmit,
  onTestChannel,
  takenReceiverNames,
  commonSettingsComponent
}) {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const readOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_8__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName);
  const defaultValues = initialValues || {
    name: '',
    items: [Object.assign({}, defaultItem, {
      __id: String(Math.random())
    })]
  };
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    // making a copy here beacuse react-hook-form will mutate these, and break if the object is frozen. for real.
    defaultValues: JSON.parse(JSON.stringify(defaultValues))
  });
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.saveAMConfig);
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
  } = (0,_hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_6__.useControlledFieldArray)({
    name: 'items',
    formAPI,
    softDelete: true
  });
  const validateNameIsAvailable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(name => takenReceiverNames.map(name => name.trim().toLowerCase()).includes(name.trim().toLowerCase()) ? 'Another receiver with this name already exists.' : true, [takenReceiverNames]);

  const submitCallback = values => {
    onSubmit(Object.assign({}, values, {
      items: values.items.filter(item => !item.__deleted)
    }));
  };

  const onInvalid = () => {
    notifyApp.error('There are errors in the form. Please correct them and try again!');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formAPI, {
    children: [!config.alertmanager_config.route && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      severity: "warning",
      title: "Attention",
      children: "Because there is no default policy configured yet, this contact point will automatically be set as default."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
      onSubmit: handleSubmit(submitCallback, onInvalid),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h4", {
        className: styles.heading,
        children: readOnly ? 'Contact point' : initialValues ? 'Update contact point' : 'Create contact point'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
        label: "Name",
        invalid: !!errors.name,
        error: errors.name && errors.name.message,
        required: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
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
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_fields_DeletedSubform__WEBPACK_IMPORTED_MODULE_11__.DeletedSubForm, {
            pathPrefix: pathPrefix
          }, field.__id);
        }

        const initialItem = initialValues === null || initialValues === void 0 ? void 0 : initialValues.items.find(({
          __id
        }) => __id === field.__id);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ChannelSubForm__WEBPACK_IMPORTED_MODULE_10__.ChannelSubForm, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          type: "button",
          icon: "plus",
          variant: "secondary",
          onClick: () => append(Object.assign({}, defaultItem, {
            __id: String(Math.random())
          })),
          children: "New contact point type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: styles.buttons,
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
            children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              disabled: true,
              icon: "fa fa-spinner",
              variant: "primary",
              children: "Saving..."
            }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              children: "Save contact point"
            })))]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            disabled: loading,
            fill: "outline",
            variant: "secondary",
            "data-testid": "cancel-button",
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_9__.makeAMLink)('alerting/notifications', alertManagerSourceName),
            children: "Cancel"
          })]
        })]
      })]
    })]
  }));
}

const getStyles = theme => ({
  heading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(4, 0)};
  `,
  buttons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(4)};

    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/TestContactPointModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestContactPointModal": () => (/* binding */ TestContactPointModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rule_editor_AnnotationsField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx");
/* harmony import */ var _rule_editor_LabelsField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
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
const TestContactPointModal = ({
  isOpen,
  onDismiss,
  onTest
}) => {
  const [notificationType, setNotificationType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(NotificationType.predefined);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues,
    mode: 'onBlur'
  });

  const onSubmit = data => {
    if (notificationType === NotificationType.custom) {
      const alert = {
        annotations: data.annotations.filter(({
          key,
          value
        }) => !!key && !!value).reduce((acc, {
          key,
          value
        }) => {
          return Object.assign({}, acc, {
            [key]: value
          });
        }, {}),
        labels: data.labels.filter(({
          key,
          value
        }) => !!key && !!value).reduce((acc, {
          key,
          value
        }) => {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    onDismiss: onDismiss,
    isOpen: isOpen,
    title: 'Test contact point',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.section,
      children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
        children: "Notification message"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
        options: notificationOptions,
        value: notificationType,
        onChange: value => setNotificationType(value)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formMethods, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
        onSubmit: formMethods.handleSubmit(onSubmit),
        children: [notificationType === NotificationType.predefined && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.section,
          children: ["You will send a test notification that uses a predefined alert. If you have defined a custom template or message, for better results switch to ", _strong || (_strong = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
            children: "custom"
          })), " notification message, from above."]
        }), notificationType === NotificationType.custom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.section,
            children: "You will send a test notification that uses the annotations defined below. This is a good option if you use custom templates and messages."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.section,
            children: _AnnotationsField || (_AnnotationsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_rule_editor_AnnotationsField__WEBPACK_IMPORTED_MODULE_4__["default"], {}))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: styles.section,
            children: _LabelsField || (_LabelsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_rule_editor_LabelsField__WEBPACK_IMPORTED_MODULE_5__["default"], {}))
          })]
        }), _Modal$ButtonRow || (_Modal$ButtonRow = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "submit",
            children: "Send test notification"
          })
        }))]
      })
    }))]
  });
};

const getStyles = theme => ({
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: ${theme.spacing(1)};
  `,
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/DeletedSubform.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeletedSubForm": () => (/* binding */ DeletedSubForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




// we can't drop the deleted item from list entirely because
// there will be a rece condition with register/unregister calls in react-hook-form
// and fields will become randomly erroneously unregistered
function DeletedSubForm({
  pathPrefix
}) {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)(); // required to be registered or react-hook-form will randomly drop the values when it feels like it

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    register(`${pathPrefix}.__id`);
    register(`${pathPrefix}.__deleted`);
  }, [register, pathPrefix]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {});
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/KeyValueMapInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyValueMapInput": () => (/* binding */ KeyValueMapInput)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3;







const KeyValueMapInput = ({
  value,
  onChange,
  readOnly = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [pairs, setPairs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(recordToPairs(value));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => setPairs(recordToPairs(value)), [value]);

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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [!!pairs.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
      className: styles.table,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            children: "Name"
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
            children: "Value"
          })), !readOnly && (_th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {})))]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
        children: pairs.map(([key, value], index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              readOnly: readOnly,
              value: key,
              onChange: e => updatePair([e.currentTarget.value, value], index)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              readOnly: readOnly,
              value: value,
              onChange: e => updatePair([key, e.currentTarget.value], index)
            })
          }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
              icon: "trash-alt",
              tooltip: "delete",
              onClick: () => deleteItem(index)
            })
          })]
        }, index))
      })]
    }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
  addButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `,
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionField": () => (/* binding */ OptionField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _KeyValueMapInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/KeyValueMapInput.tsx");
/* harmony import */ var _StringArrayInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/StringArrayInput.tsx");
/* harmony import */ var _SubformArrayField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/SubformArrayField.tsx");
/* harmony import */ var _SubformField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/SubformField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const OptionField = ({
  option,
  invalid,
  pathPrefix,
  pathSuffix = '',
  error,
  defaultValue,
  readOnly = false
}) => {
  const optionPath = `${pathPrefix}${pathSuffix}`;

  if (option.element === 'subform') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SubformField__WEBPACK_IMPORTED_MODULE_8__.SubformField, {
      readOnly: readOnly,
      defaultValue: defaultValue,
      option: option,
      errors: error,
      pathPrefix: optionPath
    });
  }

  if (option.element === 'subform_array') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SubformArrayField__WEBPACK_IMPORTED_MODULE_7__.SubformArrayField, {
      readOnly: readOnly,
      defaultValues: defaultValue,
      option: option,
      pathPrefix: optionPath,
      errors: error
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
    label: option.element !== 'checkbox' ? option.label : undefined,
    description: option.description || undefined,
    invalid: !!error,
    error: error === null || error === void 0 ? void 0 : error.message,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(OptionInput, {
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

const OptionInput = ({
  option,
  invalid,
  id,
  pathPrefix = '',
  pathIndex = '',
  readOnly = false
}) => {
  const {
    control,
    register,
    unregister,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const name = `${pathPrefix}${option.propertyName}`; // workaround for https://github.com/react-hook-form/react-hook-form/issues/4993#issuecomment-829012506

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => () => {
    unregister(name, {
      keepValue: false
    });
  }, [unregister, name]);

  switch (option.element) {
    case 'checkbox':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Checkbox, Object.assign({
        id: id,
        readOnly: readOnly,
        disabled: readOnly,
        className: styles.checkbox
      }, register(name), {
        label: option.label,
        description: option.description
      }));

    case 'input':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
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
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: _ref => {
          var _option$selectOptions;

          let {
            field: {
              onChange
            }
          } = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, Object.assign({
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
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextArea, Object.assign({
        id: id,
        readOnly: readOnly,
        invalid: invalid
      }, register(name, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      })));

    case 'string_array':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: ({
          field: {
            value,
            onChange
          }
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_StringArrayInput__WEBPACK_IMPORTED_MODULE_6__.StringArrayInput, {
          readOnly: readOnly,
          value: value,
          onChange: onChange
        }),
        control: control,
        name: name
      });

    case 'key_value_map':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: ({
          field: {
            value,
            onChange
          }
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_KeyValueMapInput__WEBPACK_IMPORTED_MODULE_5__.KeyValueMapInput, {
          readOnly: readOnly,
          value: value,
          onChange: onChange
        }),
        control: control,
        name: name
      });

    default:
      console.error('Element not supported', option.element);
      return null;
  }
};

const styles = {
  checkbox: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(getValues(`${pathIndex}secureFields`))) {
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

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(getValues(`${pathIndex}secureFields`))) {
    return getValues(`${pathIndex}secureSettings.${option.dependsOn}`);
  } else {
    return getValues(`${pathIndex}secureFields.${option.dependsOn}`);
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/StringArrayInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringArrayInput": () => (/* binding */ StringArrayInput)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const StringArrayInput = ({
  value,
  onChange,
  readOnly = false
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [!!(value !== null && value !== void 0 && value.length) && value.map((v, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
        readOnly: readOnly,
        value: v,
        onChange: e => updateValue(e.currentTarget.value, index)
      }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
        className: styles.deleteIcon,
        icon: "trash-alt",
        tooltip: "delete",
        onClick: () => deleteItem(index)
      })]
    }, index)), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
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

const getStyles = theme => ({
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacing(1)};
    align-items: center;
  `,
  deleteIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
  `,
  addButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/SubformArrayField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubformArrayField": () => (/* binding */ SubformArrayField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_alerting_unified_hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _CollapsibleSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx");
/* harmony import */ var _OptionField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const SubformArrayField = ({
  option,
  pathPrefix,
  errors,
  defaultValues,
  readOnly = false
}) => {
  var _ref;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_7__.getReceiverFormFieldStyles);
  const path = `${pathPrefix}${option.propertyName}`;
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const {
    fields,
    append,
    remove
  } = (0,app_features_alerting_unified_hooks_useControlledFieldArray__WEBPACK_IMPORTED_MODULE_3__.useControlledFieldArray)({
    name: path,
    formAPI,
    defaults: defaultValues
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_CollapsibleSection__WEBPACK_IMPORTED_MODULE_5__.CollapsibleSection, {
      className: styles.collapsibleSection,
      label: `${option.label} (${fields.length})`,
      description: option.description,
      children: [((_ref = fields !== null && fields !== void 0 ? fields : defaultValues) !== null && _ref !== void 0 ? _ref : []).map((field, itemIndex) => {
        var _option$subformOption;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: styles.wrapper,
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_4__.ActionIcon, {
            "data-testid": `${path}.${itemIndex}.delete-button`,
            icon: "trash-alt",
            tooltip: "delete",
            onClick: () => remove(itemIndex),
            className: styles.deleteIcon
          }), (_option$subformOption = option.subformOptions) === null || _option$subformOption === void 0 ? void 0 : _option$subformOption.map(option => {
            var _errors$itemIndex;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_OptionField__WEBPACK_IMPORTED_MODULE_6__.OptionField, {
              readOnly: readOnly,
              defaultValue: field === null || field === void 0 ? void 0 : field[option.propertyName],
              option: option,
              pathPrefix: `${path}.${itemIndex}.`,
              error: errors === null || errors === void 0 ? void 0 : (_errors$itemIndex = errors[itemIndex]) === null || _errors$itemIndex === void 0 ? void 0 : _errors$itemIndex[option.propertyName]
            }, option.propertyName);
          })]
        }, itemIndex);
      }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
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

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/SubformField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubformField": () => (/* binding */ SubformField)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _OptionField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const SubformField = ({
  option,
  pathPrefix,
  errors,
  defaultValue,
  readOnly = false
}) => {
  var _option$subformOption;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_5__.getReceiverFormFieldStyles);
  const name = `${pathPrefix}${option.propertyName}`;
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();

  const _watchValue = watch(name);

  const value = _watchValue === undefined ? defaultValue : _watchValue;
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!value);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": `${name}.container`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h6", {
      children: option.label
    }), option.description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: styles.description,
      children: option.description
    }), show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
        "data-testid": `${name}.delete-button`,
        icon: "trash-alt",
        tooltip: "delete",
        onClick: () => setShow(false),
        className: styles.deleteIcon
      }), ((_option$subformOption = option.subformOptions) !== null && _option$subformOption !== void 0 ? _option$subformOption : []).map(subOption => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_OptionField__WEBPACK_IMPORTED_MODULE_4__.OptionField, {
          readOnly: readOnly,
          defaultValue: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue[subOption.propertyName],
          option: subOption,
          pathPrefix: `${name}.`,
          error: errors === null || errors === void 0 ? void 0 : errors[subOption.propertyName]
        }, subOption.propertyName);
      })]
    }), !show && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
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

/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getReceiverFormFieldStyles": () => (/* binding */ getReceiverFormFieldStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getReceiverFormFieldStyles = theme => ({
  collapsibleSection: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: 0;
    padding: 0;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(2, 0)};
    padding: ${theme.spacing(1)};
    border: solid 1px ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
    position: relative;
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.fontWeightRegular};
    margin: 0;
  `,
  deleteIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: absolute;
    right: ${theme.spacing(1)};
    top: ${theme.spacing(1)};
  `,
  addButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationKeyInput": () => (/* binding */ AnnotationKeyInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _SelectWIthAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value", "existingKeys", "aria-label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const AnnotationKeyInput = _ref => {
  let {
    value,
    existingKeys,
    'aria-label': ariaLabel
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const annotationOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Annotation).filter(key => !existingKeys.includes(key)) // remove keys already taken in other annotations
  .map(key => ({
    value: key,
    label: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.annotationLabels[key]
  })), [existingKeys]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_2__.SelectWithAdd, Object.assign({
    "aria-label": ariaLabel,
    value: value,
    options: annotationOptions,
    custom: !!value && !Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Annotation).includes(value)
  }, rest));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

var _Label;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const AnnotationsField = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    control,
    register,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const annotations = watch('annotations');
  const existingKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => annotations.filter((_, idx) => idx !== index).map(({
    key
  }) => key), [annotations]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: "Summary and annotations"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
      name: 'annotations',
      control: control,
      children: ({
        fields,
        append,
        remove
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: styles.flexColumn,
          children: [fields.map((field, index) => {
            var _annotations$index, _annotations$index$ke, _errors$annotations, _errors$annotations$i, _errors$annotations$i2, _errors$annotations2, _errors$annotations2$, _errors$annotations2$2, _annotations$index2, _errors$annotations3, _errors$annotations3$, _errors$annotations3$2, _errors$annotations4, _errors$annotations4$, _errors$annotations4$2;

            const isUrl = (_annotations$index = annotations[index]) === null || _annotations$index === void 0 ? void 0 : (_annotations$index$ke = _annotations$index.key) === null || _annotations$index$ke === void 0 ? void 0 : _annotations$index$ke.toLocaleLowerCase().endsWith('url');
            const ValueInputComponent = isUrl ? _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input : _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextArea;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: styles.flexRow,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                className: styles.field,
                invalid: !!((_errors$annotations = errors.annotations) !== null && _errors$annotations !== void 0 && (_errors$annotations$i = _errors$annotations[index]) !== null && _errors$annotations$i !== void 0 && (_errors$annotations$i2 = _errors$annotations$i.key) !== null && _errors$annotations$i2 !== void 0 && _errors$annotations$i2.message),
                error: (_errors$annotations2 = errors.annotations) === null || _errors$annotations2 === void 0 ? void 0 : (_errors$annotations2$ = _errors$annotations2[index]) === null || _errors$annotations2$ === void 0 ? void 0 : (_errors$annotations2$2 = _errors$annotations2$.key) === null || _errors$annotations2$2 === void 0 ? void 0 : _errors$annotations2$2.message,
                "data-testid": `annotation-key-${index}`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
                  name: `annotations[${index}].key`,
                  render: _ref => {
                    let {} = _ref,
                        field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__.AnnotationKeyInput, Object.assign({}, field, {
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
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRowItemMargin, styles.field),
                invalid: !!((_errors$annotations3 = errors.annotations) !== null && _errors$annotations3 !== void 0 && (_errors$annotations3$ = _errors$annotations3[index]) !== null && _errors$annotations3$ !== void 0 && (_errors$annotations3$2 = _errors$annotations3$.value) !== null && _errors$annotations3$2 !== void 0 && _errors$annotations3$2.message),
                error: (_errors$annotations4 = errors.annotations) === null || _errors$annotations4 === void 0 ? void 0 : (_errors$annotations4$ = _errors$annotations4[index]) === null || _errors$annotations4$ === void 0 ? void 0 : (_errors$annotations4$2 = _errors$annotations4$.value) === null || _errors$annotations4$2 === void 0 ? void 0 : _errors$annotations4$2.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ValueInputComponent, Object.assign({
                  "data-testid": `annotation-value-${index}`,
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.annotationValueInput, {
                    [styles.textarea]: !isUrl
                  })
                }, register(`annotations[${index}].value`), {
                  placeholder: isUrl ? 'https://' : `Text`,
                  defaultValue: field.value
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "button",
                className: styles.flexRowItemMargin,
                "aria-label": "delete annotation",
                icon: "trash-alt",
                variant: "secondary",
                onClick: () => remove(index)
              })]
            }, field.id);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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
  annotationValueInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 426px;
  `,
  textarea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    height: 76px;
  `,
  addAnnotationsButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex-grow: 0;
    align-self: flex-start;
    margin-left: 148px;
  `,
  flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
  `,
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing.xs};
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  flexRowItemMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing.xs};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _InlineLabel;









const LabelsField = ({
  className
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const labels = watch('labels');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.wrapper),
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: "Custom Labels"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
      control: control,
      name: "labels",
      children: ({
        fields,
        append,
        remove
      }) => {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectWithAdd": () => (/* binding */ SelectWithAdd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const SelectWithAdd = ({
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
}) => {
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

/***/ "./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useControlledFieldArray": () => (/* binding */ useControlledFieldArray)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


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
  const update = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(updateFn => {
    const values = JSON.parse(JSON.stringify(getValues()));
    const newItems = updateFn(fields !== null && fields !== void 0 ? fields : []);
    reset((0,lodash__WEBPACK_IMPORTED_MODULE_0__.set)(values, name, newItems));
  }, [getValues, name, reset, fields]);
  return {
    fields,
    append: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(values => update(fields => [...fields, values]), [update]),
    remove: (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => {
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

/***/ }),

/***/ "./public/app/features/alerting/unified/styles/table.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlertTableStyles": () => (/* binding */ getAlertTableStyles)
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

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloudNotifierTypes": () => (/* binding */ cloudNotifierTypes),
/* harmony export */   "globalConfigOptions": () => (/* binding */ globalConfigOptions)
/* harmony export */ });
function option(propertyName, label, description, rest = {}) {
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

const basicAuthOption = option('basic_auth', 'Basic auth', 'Sets the `Authorization` header with the configured username and password. Password and password_file are mutually exclusive.', {
  element: 'subform',
  subformOptions: [option('username', 'Username', ''), option('password', 'Password', ''), option('password_file', 'Password file', '')]
});
const tlsConfigOption = option('tls_config', 'TLS config', 'Configures the TLS settings.', {
  element: 'subform',
  subformOptions: [option('ca_file', 'CA file', 'CA certificate to validate the server certificate with.'), option('cert_file', 'Cert file', 'Certificate for client cert authentication to the server.'), option('key_file', 'Key file', 'Key file for client cert authentication to the server.'), option('server_name', 'Server name', 'ServerName extension to indicate the name of the server.'), option('insecure_skip_verify', 'Skip verify', 'Disable validation of the server certificate.', {
    element: 'checkbox'
  })]
});
const httpConfigOption = option('http_config', 'HTTP Config', 'Note that `basic_auth`, `bearer_token` and `bearer_token_file` options are mutually exclusive.', {
  element: 'subform',
  subformOptions: [option('bearer_token', 'Bearer token', 'Sets the `Authorization` header with the configured bearer token.'), option('bearer_token_file', 'Bearer token file', 'Sets the `Authorization` header with the bearer token read from the configured file.'), option('proxy_url', 'Proxy URL', 'Optional proxy URL.'), basicAuthOption, tlsConfigOption]
});
const cloudNotifierTypes = [{
  name: 'Email',
  description: 'Send notification over SMTP',
  type: 'email',
  info: '',
  heading: 'Email settings',
  options: [option('to', 'To', 'The email address to send notifications to.', {
    required: true
  }), option('from', 'From', 'The sender address.'), option('smarthost', 'SMTP host', 'The SMTP host through which emails are sent.'), option('hello', 'Hello', 'The hostname to identify to the SMTP server.'), option('auth_username', 'Username', 'SMTP authentication information'), option('auth_password', 'Password', 'SMTP authentication information'), option('auth_secret', 'Secret', 'SMTP authentication information'), option('auth_identity', 'Identity', 'SMTP authentication information'), option('require_tls', 'Require TLS', 'The SMTP TLS requirement', {
    element: 'checkbox'
  }), option('html', 'Email HTML body', 'The HTML body of the email notification.', {
    placeholder: '{{ template "email.default.html" . }}',
    element: 'textarea'
  }), option('text', 'Email text body', 'The text body of the email notification.', {
    element: 'textarea'
  }), option('headers', 'Headers', 'Further headers email header key/value pairs. Overrides any headers previously set by the notification implementation.', {
    element: 'key_value_map'
  }), tlsConfigOption]
}, {
  name: 'PagerDuty',
  description: 'Send notifications to PagerDuty',
  type: 'pagerduty',
  info: '',
  heading: 'PagerDuty settings',
  options: [option('routing_key', 'Routing key', 'The PagerDuty integration key (when using PagerDuty integration type `Events API v2`)'), option('service_key', 'Service key', 'The PagerDuty integration key (when using PagerDuty integration type `Prometheus`).'), option('url', 'URL', 'The URL to send API requests to'), option('client', 'Client', 'The client identification of the Alertmanager.', {
    placeholder: '{{ template "pagerduty.default.client" . }}'
  }), option('client_url', 'Client URL', 'A backlink to the sender of the notification.', {
    placeholder: '{{ template "pagerduty.default.clientURL" . }}'
  }), option('description', 'Description', 'A description of the incident.', {
    placeholder: '{{ template "pagerduty.default.description" .}}'
  }), option('severity', 'Severity', 'Severity of the incident.', {
    placeholder: 'error'
  }), option('details', 'Details', 'A set of arbitrary key/value pairs that provide further detail about the incident.', {
    element: 'key_value_map'
  }), option('images', 'Images', 'Images to attach to the incident.', {
    element: 'subform_array',
    subformOptions: [option('href', 'URL', '', {
      required: true
    }), option('source', 'Source', '', {
      required: true
    }), option('alt', 'Alt', '', {
      required: true
    })]
  }), option('links', 'Links', 'Links to attach to the incident.', {
    element: 'subform_array',
    subformOptions: [option('href', 'URL', '', {
      required: true
    }), option('text', 'Text', '', {
      required: true
    })]
  }), httpConfigOption]
}, {
  name: 'Pushover',
  description: 'Send notifications to Pushover',
  type: 'pushover',
  info: '',
  heading: 'Pushover settings',
  options: [option('user_key', 'User key', 'The recipient user’s user key.', {
    required: true
  }), option('token', 'Token', 'Your registered application’s API token, see https://pushover.net/app', {
    required: true
  }), option('title', 'Title', 'Notification title.', {
    placeholder: '{{ template "pushover.default.title" . }}'
  }), option('message', 'Message', 'Notification message.', {
    placeholder: '{{ template "pushover.default.message" . }}'
  }), option('url', 'URL', 'A supplementary URL shown alongside the message.', {
    placeholder: '{{ template "pushover.default.url" . }}'
  }), option('priority', 'Priority', 'Priority, see https://pushover.net/api#priority', {
    placeholder: '{{ if eq .Status "firing" }}2{{ else }}0{{ end }}'
  }), option('retry', 'Retry', 'How often the Pushover servers will send the same notification to the user. Must be at least 30 seconds.', {
    placeholder: '1m'
  }), option('expire', 'Expire', 'How long your notification will continue to be retried for, unless the user acknowledges the notification.', {
    placeholder: '1h'
  }), httpConfigOption]
}, {
  name: 'Slack',
  description: 'Send notifications to Slack',
  type: 'slack',
  info: '',
  heading: 'Slack settings',
  options: [option('api_url', 'Webhook URL', 'The Slack webhook URL.'), option('channel', 'Channel', 'The #channel or @user to send notifications to.', {
    required: true
  }), option('icon_emoji', 'Emoji icon', ''), option('icon_url', 'Icon URL', ''), option('link_names', 'Names link', '', {
    element: 'checkbox'
  }), option('username', 'Username', '', {
    placeholder: '{{ template "slack.default.username" . }}'
  }), option('callback_id', 'Callback ID', '', {
    placeholder: '{{ template "slack.default.callbackid" . }}'
  }), option('color', 'Color', '', {
    placeholder: '{{ if eq .Status "firing" }}danger{{ else }}good{{ end }}'
  }), option('fallback', 'Fallback', '', {
    placeholder: '{{ template "slack.default.fallback" . }}'
  }), option('footer', 'Footer', '', {
    placeholder: '{{ template "slack.default.footer" . }}'
  }), option('mrkdwn_in', 'Mrkdwn fields', 'An array of field names that should be formatted by mrkdwn syntax.', {
    element: 'string_array'
  }), option('pretext', 'Pre-text', '', {
    placeholder: '{{ template "slack.default.pretext" . }}'
  }), option('short_fields', 'Short fields', '', {
    element: 'checkbox'
  }), option('text', 'Message body', '', {
    element: 'textarea',
    placeholder: '{{ template "slack.default.text" . }}'
  }), option('title', 'Title', '', {
    placeholder: '{{ template "slack.default.title" . }}'
  }), option('title_link', 'Title link', '', {
    placeholder: '{{ template "slack.default.titlelink" . }}'
  }), option('image_url', 'Image URL', ''), option('thumb_url', 'Thumbnail URL', ''), option('actions', 'Actions', '', {
    element: 'subform_array',
    subformOptions: [option('text', 'Text', '', {
      required: true
    }), option('type', 'Type', '', {
      required: true
    }), option('url', 'URL', 'Either url or name and value are mandatory.'), option('name', 'Name', ''), option('value', 'Value', ''), option('confirm', 'Confirm', '', {
      element: 'subform',
      subformOptions: [option('text', 'Text', '', {
        required: true
      }), option('dismiss_text', 'Dismiss text', ''), option('ok_text', 'OK text', ''), option('title', 'Title', '')]
    }), option('style', 'Style', '')]
  }), option('fields', 'Fields', '', {
    element: 'subform_array',
    subformOptions: [option('title', 'Title', '', {
      required: true
    }), option('value', 'Value', '', {
      required: true
    }), option('short', 'Short', '', {
      element: 'checkbox'
    })]
  }), httpConfigOption]
}, {
  name: 'OpsGenie',
  description: 'Send notifications to OpsGenie',
  type: 'opsgenie',
  info: '',
  heading: 'OpsGenie settings',
  options: [option('api_key', 'API key', 'The API key to use when talking to the OpsGenie API.'), option('api_url', 'API URL', 'The host to send OpsGenie API requests to.'), option('message', 'Message', 'Alert text limited to 130 characters.'), option('description', 'Description', 'A description of the incident.', {
    placeholder: '{{ template "opsgenie.default.description" . }}'
  }), option('source', 'Source', 'A backlink to the sender of the notification.', {
    placeholder: '{{ template "opsgenie.default.source" . }}'
  }), option('details', 'Details', 'A set of arbitrary key/value pairs that provide further detail about the incident.', {
    element: 'key_value_map'
  }), option('tags', 'Tags', 'Comma separated list of tags attached to the notifications.'), option('note', 'Note', 'Additional alert note.'), option('priority', 'Priority', 'Priority level of alert. Possible values are P1, P2, P3, P4, and P5.'), option('responders', 'Responders', 'List of responders responsible for notifications.', {
    element: 'subform_array',
    subformOptions: [option('type', 'Type', '"team", "user", "escalation" or schedule".', {
      required: true
    }), option('id', 'ID', 'Exactly one of these fields should be defined.'), option('name', 'Name', 'Exactly one of these fields should be defined.'), option('username', 'Username', 'Exactly one of these fields should be defined.')]
  }), httpConfigOption]
}, {
  name: 'VictorOps',
  description: 'Send notifications to VictorOps',
  type: 'victorops',
  info: '',
  heading: 'VictorOps settings',
  options: [option('api_key', 'API key', 'The API key to use when talking to the VictorOps API.'), option('api_url', 'API URL', 'The VictorOps API URL.'), option('routing_key', 'Routing key', 'A key used to map the alert to a team.', {
    required: true
  }), option('message_type', 'Message type', 'Describes the behavior of the alert (CRITICAL, WARNING, INFO).'), option('entity_display_name', 'Entity display name', 'Contains summary of the alerted problem.', {
    placeholder: '{{ template "victorops.default.entity_display_name" . }}'
  }), option('state_message', 'State message', 'Contains long explanation of the alerted problem.', {
    placeholder: '{{ template "victorops.default.state_message" . }}'
  }), option('monitoring_tool', 'Monitoring tool', 'The monitoring tool the state message is from.', {
    placeholder: '{{ template "victorops.default.monitoring_tool" . }}'
  }), httpConfigOption]
}, {
  name: 'Webhook',
  description: 'Send notifications to a webhook',
  type: 'webhook',
  info: '',
  heading: 'Webhook settings',
  options: [option('url', 'URL', 'The endpoint to send HTTP POST requests to.', {
    required: true
  }), option('max_alerts', 'Max alerts', 'The maximum number of alerts to include in a single webhook message. Alerts above this threshold are truncated. When leaving this at its default value of 0, all alerts are included.', {
    placeholder: '0',
    validationRule: '(^\\d+$|^$)'
  }), httpConfigOption]
}];
const globalConfigOptions = [// email
option('smtp_from', 'SMTP from', 'The default SMTP From header field.'), option('smtp_smarthost', 'SMTP smarthost', 'The default SMTP smarthost used for sending emails, including port number. Port number usually is 25, or 587 for SMTP over TLS (sometimes referred to as STARTTLS). Example: smtp.example.org:587'), option('smtp_hello', 'SMTP hello', 'The default hostname to identify to the SMTP server.', {
  placeholder: 'localhost'
}), option('smtp_auth_username', 'SMTP auth username', "SMTP Auth using CRAM-MD5, LOGIN and PLAIN. If empty, Alertmanager doesn't authenticate to the SMTP server."), option('smtp_auth_password', 'SMTP auth password', 'SMTP Auth using LOGIN and PLAIN.'), option('smtp_auth_identity', 'SMTP auth identity', 'SMTP Auth using PLAIN.'), option('smtp_auth_secret', 'SMTP auth secret', 'SMTP Auth using CRAM-MD5.'), option('smtp_require_tls', 'SMTP require TLS', 'The default SMTP TLS requirement. Note that Go does not support unencrypted connections to remote SMTP endpoints.', {
  element: 'checkbox'
}), // slack
option('slack_api_url', 'Slack API URL', ''), option('victorops_api_key', 'VictorOps API key', ''), option('victorops_api_url', 'VictorOps API URL', '', {
  placeholder: 'https://alert.victorops.com/integrations/generic/20131114/alert/'
}), option('pagerduty_url', 'PagerDuty URL', 'https://events.pagerduty.com/v2/enqueue'), option('opsgenie_api_key', 'OpsGenie API key', ''), option('opsgenie_api_url', 'OpsGenie API URL', '', {
  placeholder: 'https://api.opsgenie.com/'
}), option('wechat_api_url', 'WeChat API URL', '', {
  placeholder: 'https://qyapi.weixin.qq.com/cgi-bin/'
}), option('wechat_api_secret', 'WeChat API secret', ''), option('wechat_api_corp_id', 'WeChat API corp id', ''), httpConfigOption, option('resolve_timeout', 'Resolve timeout', 'ResolveTimeout is the default value used by alertmanager if the alert does not include EndsAt, after this time passes it can declare the alert as resolved if it has not been updated. This has no impact on alerts from Prometheus, as they always include EndsAt.', {
  placeholder: '5m'
})];

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/receiver-form.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloudReceiverToFormValues": () => (/* binding */ cloudReceiverToFormValues),
/* harmony export */   "formChannelValuesToGrafanaChannelConfig": () => (/* binding */ formChannelValuesToGrafanaChannelConfig),
/* harmony export */   "formValuesToCloudReceiver": () => (/* binding */ formValuesToCloudReceiver),
/* harmony export */   "formValuesToGrafanaReceiver": () => (/* binding */ formValuesToGrafanaReceiver),
/* harmony export */   "grafanaReceiverToFormValues": () => (/* binding */ grafanaReceiverToFormValues),
/* harmony export */   "omitEmptyValues": () => (/* binding */ omitEmptyValues),
/* harmony export */   "updateConfigWithReceiver": () => (/* binding */ updateConfigWithReceiver)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

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
      const notifier = notifiers.find(({
        type
      }) => type === channel.type);
      return grafanaChannelConfigToFormChannelValues(id, channel, notifier);
    })) !== null && _receiver$grafana_man !== void 0 ? _receiver$grafana_man : []
  };
  return [values, channelMap];
}
function cloudReceiverToFormValues(receiver, notifiers) {
  const channelMap = {}; // giving each form receiver item a unique id so we can use it to map back to "original" items

  let idCounter = 1;
  const items = Object.entries(receiver) // filter out only config items that are relevant to cloud
  .filter(([type]) => type.endsWith('_configs') && type !== 'grafana_managed_receiver_configs') // map property names to cloud notifier types by removing the `_config` suffix
  .map(([type, configs]) => [type.replace('_configs', ''), configs]) // convert channel configs to form values
  .map(([type, configs]) => configs.map(config => {
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
  })).flat();
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
  values.items.forEach(({
    __id,
    type,
    settings,
    sendResolved
  }) => {
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

  if (receiver.name !== replaceReceiverName && !!oldReceivers.find(({
    name
  }) => name === receiver.name)) {
    throw new Error(`Duplicate receiver name ${receiver.name}`);
  } // sanity check that existing receiver exists


  if (replaceReceiverName && !oldReceivers.find(({
    name
  }) => name === replaceReceiverName)) {
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
  var _existing$settings, _values$settings, _values$secureSetting, _ref, _values$disableResolv;

  const channel = {
    settings: omitEmptyValues(Object.assign({}, existing && existing.type === values.type ? (_existing$settings = existing.settings) !== null && _existing$settings !== void 0 ? _existing$settings : {} : {}, (_values$settings = values.settings) !== null && _values$settings !== void 0 ? _values$settings : {})),
    secureSettings: (_values$secureSetting = values.secureSettings) !== null && _values$secureSetting !== void 0 ? _values$secureSetting : {},
    type: values.type,
    name,
    disableResolveMessage: (_ref = (_values$disableResolv = values.disableResolveMessage) !== null && _values$disableResolv !== void 0 ? _values$disableResolv : existing === null || existing === void 0 ? void 0 : existing.disableResolveMessage) !== null && _ref !== void 0 ? _ref : defaults.disableResolveMessage
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
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(obj)) {
    obj.forEach(omitEmptyValues);
  } else if (typeof obj === 'object' && obj !== null) {
    Object.entries(obj).forEach(([key, value]) => {
      if (value === '' || value === null || value === undefined) {
        delete obj[key];
      } else {
        omitEmptyValues(value);
      }
    });
  }

  return obj;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/receivers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractNotifierTypeCounts": () => (/* binding */ extractNotifierTypeCounts)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_plugins_datasource_alertmanager_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/consts.ts");


// name : count
function extractNotifierTypeCounts(receiver, grafanaNotifiers) {
  if (receiver['grafana_managed_receiver_configs']) {
    var _receiver$grafana_man;

    return getGrafanaNotifierTypeCounts((_receiver$grafana_man = receiver.grafana_managed_receiver_configs) !== null && _receiver$grafana_man !== void 0 ? _receiver$grafana_man : [], grafanaNotifiers);
  }

  return getCortexAlertManagerNotifierTypeCounts(receiver);
}

function getCortexAlertManagerNotifierTypeCounts(receiver) {
  return Object.entries(receiver).filter(([key]) => key !== 'grafana_managed_receiver_configs' && key.endsWith('_configs')) // filter out only properties that are alertmanager notifier
  .filter(([_, value]) => Array.isArray(value) && !!value.length) // check that there are actually notifiers of this type configured
  .reduce((acc, [key, value]) => {
    var _receiverTypeNames$ty, _acc$name;

    const type = key.replace('_configs', ''); // remove the `_config` part from the key, making it intto a notifier name

    const name = (_receiverTypeNames$ty = app_plugins_datasource_alertmanager_consts__WEBPACK_IMPORTED_MODULE_1__.receiverTypeNames[type]) !== null && _receiverTypeNames$ty !== void 0 ? _receiverTypeNames$ty : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type);
    return Object.assign({}, acc, {
      [name]: ((_acc$name = acc[name]) !== null && _acc$name !== void 0 ? _acc$name : 0) + (Array.isArray(value) ? value.length : 1)
    });
  }, {});
}

function getGrafanaNotifierTypeCounts(configs, grafanaNotifiers) {
  return configs.map(recv => recv.type) // extract types from config
  .map(type => {
    var _grafanaNotifiers$fin, _grafanaNotifiers$fin2;

    return (_grafanaNotifiers$fin = (_grafanaNotifiers$fin2 = grafanaNotifiers.find(r => r.type === type)) === null || _grafanaNotifiers$fin2 === void 0 ? void 0 : _grafanaNotifiers$fin2.name) !== null && _grafanaNotifiers$fin !== void 0 ? _grafanaNotifiers$fin : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(type);
  }) // get readable name from notifier cofnig, or if not available, just capitalize
  .reduce((acc, type) => {
    var _acc$type;

    return Object.assign({}, acc, {
      [type]: ((_acc$type = acc[type]) !== null && _acc$type !== void 0 ? _acc$type : 0) + 1
    });
  }, {});
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/templates.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ensureDefine": () => (/* binding */ ensureDefine)
/* harmony export */ });
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

/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/consts.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiverTypeNames": () => (/* binding */ receiverTypeNames)
/* harmony export */ });
const receiverTypeNames = {
  pagerduty: 'PagerDuty',
  pushover: 'Pushover',
  slack: 'Slack',
  opsgenie: 'OpsGenie',
  webhook: 'Webhook',
  victorops: 'VictorOps',
  wechat: 'WeChat'
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9BLElBRkEsRUFHckJ4VixJQUhxQixDQUdoQixJQUhnQixDQUF4QjtBQUlBckYsSUFBQUEsT0FBTyxHQUFJLGNBQWFILFlBQWEsU0FBUThhLGVBQWdCLGFBQTdEO0FBQ0Q7O0FBQ0QsU0FBTzNhLE9BQVA7QUFDRDs7Ozs7Ozs7Ozs7QUNiTSxNQUFNcWEsaUJBQXlDLEdBQUc7QUFDdkRTLEVBQUFBLFNBQVMsRUFBRSxXQUQ0QztBQUV2REMsRUFBQUEsUUFBUSxFQUFFLFVBRjZDO0FBR3ZEQyxFQUFBQSxLQUFLLEVBQUUsT0FIZ0Q7QUFJdkRDLEVBQUFBLFFBQVEsRUFBRSxVQUo2QztBQUt2REMsRUFBQUEsT0FBTyxFQUFFLFNBTDhDO0FBTXZEQyxFQUFBQSxTQUFTLEVBQUUsV0FONEM7QUFPdkRDLEVBQUFBLE1BQU0sRUFBRTtBQVArQyxDQUFsRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2hvb2tzL3VzZU5hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL05vdGlmaWNhdGlvbnNMaXN0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9SZWNlaXZlcnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9BbGVydGluZ1BhZ2VXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQXV0aG9yaXplLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvTm9BbGVydE1hbmFnZXJXYXJuaW5nLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL0VkaXRSZWNlaXZlclZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvRWRpdFRlbXBsYXRlVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9HbG9iYWxDb25maWdGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL05ld1JlY2VpdmVyVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9OZXdUZW1wbGF0ZVZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9SZWNlaXZlcnNTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL1JlY2VpdmVyc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL1RlbXBsYXRlRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9UZW1wbGF0ZXNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL0NoYW5uZWxPcHRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vQ2hhbm5lbFN1YkZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9DbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL0Nsb3VkUmVjZWl2ZXJGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vQ29sbGFwc2libGVTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vR3JhZmFuYUNvbW1vbkNoYW5uZWxTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL0dyYWZhbmFSZWNlaXZlckZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9SZWNlaXZlckZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9UZXN0Q29udGFjdFBvaW50TW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9maWVsZHMvRGVsZXRlZFN1YmZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9yZWNlaXZlcnMvZm9ybS9maWVsZHMvS2V5VmFsdWVNYXBJbnB1dC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL2ZpZWxkcy9PcHRpb25GaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL2ZpZWxkcy9TdHJpbmdBcnJheUlucHV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vZmllbGRzL1N1YmZvcm1BcnJheUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcmVjZWl2ZXJzL2Zvcm0vZmllbGRzL1N1YmZvcm1GaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3JlY2VpdmVycy9mb3JtL2ZpZWxkcy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0Fubm90YXRpb25LZXlJbnB1dC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0Fubm90YXRpb25zRmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9MYWJlbHNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL1NlbGVjdFdJdGhBZGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9BY3Rpb25JY29uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29udHJvbGxlZEZpZWxkQXJyYXkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9zdHlsZXMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9jbG91ZC1hbGVydG1hbmFnZXItbm90aWZpZXItdHlwZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9yZWNlaXZlci1mb3JtLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvcmVjZWl2ZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvdGVtcGxhdGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvY29uc3RzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGNsZWFuVXBBY3Rpb24sIFN0YXRlU2VsZWN0b3IgfSBmcm9tICcuLi9hY3Rpb25zL2NsZWFuVXAnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2xlYW51cDxUPihzdGF0ZVNlbGVjdG9yOiBTdGF0ZVNlbGVjdG9yPFQ+KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgLy9iaXQgb2YgYSBoYWNrIHRvIHVuYnVyZGVuIHVzZXIgZnJvbSBoYXZpbmcgdG8gd3JhcCBzdGF0ZVNlbGNldG9yIGluIGEgdXNlQ2FsbGJhY2suIE90aGVyd2lzZSBjbGVhbnVwIHdvdWxkIGhhcHBlbiBvbiBldmVyeSByZW5kZXJcbiAgY29uc3Qgc2VsZWN0b3JSZWYgPSB1c2VSZWYoc3RhdGVTZWxlY3Rvcik7XG4gIHNlbGVjdG9yUmVmLmN1cnJlbnQgPSBzdGF0ZVNlbGVjdG9yO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChjbGVhblVwQWN0aW9uKHsgc3RhdGVTZWxlY3Rvcjogc2VsZWN0b3JSZWYuY3VycmVudCB9KSk7XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG59XG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuXG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5cbmV4cG9ydCBjb25zdCB1c2VOYXZNb2RlbCA9IChpZDogc3RyaW5nKTogTmF2TW9kZWwgPT4ge1xuICBjb25zdCBuYXZJbmRleCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpO1xuICByZXR1cm4gZ2V0TmF2TW9kZWwobmF2SW5kZXgsIGlkKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBc3luY0ZuIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBCdXR0b24sIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBhcHBFdmVudHMgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IHVzZU5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwnO1xuaW1wb3J0IHsgQWxlcnROb3RpZmljYXRpb24gfSBmcm9tICdhcHAvdHlwZXMvYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBTaG93Q29uZmlybU1vZGFsRXZlbnQgfSBmcm9tICcuLi8uLi90eXBlcy9ldmVudHMnO1xuXG5jb25zdCBOb3RpZmljYXRpb25zTGlzdFBhZ2U6IEZDID0gKCkgPT4ge1xuICBjb25zdCBuYXZNb2RlbCA9IHVzZU5hdk1vZGVsKCdjaGFubmVscycpO1xuXG4gIGNvbnN0IFtub3RpZmljYXRpb25zLCBzZXROb3RpZmljYXRpb25zXSA9IHVzZVN0YXRlPEFsZXJ0Tm90aWZpY2F0aW9uW10+KFtdKTtcblxuICBjb25zdCBnZXROb3RpZmljYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnNgKTtcbiAgfTtcblxuICBjb25zdCBbc3RhdGUsIGZldGNoTm90aWZpY2F0aW9uc10gPSB1c2VBc3luY0ZuKGdldE5vdGlmaWNhdGlvbnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoTm90aWZpY2F0aW9ucygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0Tm90aWZpY2F0aW9ucyhyZXMpO1xuICAgIH0pO1xuICB9LCBbZmV0Y2hOb3RpZmljYXRpb25zXSk7XG5cbiAgY29uc3QgZGVsZXRlTm90aWZpY2F0aW9uID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBhcHBFdmVudHMucHVibGlzaChcbiAgICAgIG5ldyBTaG93Q29uZmlybU1vZGFsRXZlbnQoe1xuICAgICAgICB0aXRsZTogJ0RlbGV0ZScsXG4gICAgICAgIHRleHQ6ICdEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBub3RpZmljYXRpb24gY2hhbm5lbD8nLFxuICAgICAgICB0ZXh0MjogYERlbGV0aW5nIHRoaXMgbm90aWZpY2F0aW9uIGNoYW5uZWwgd2lsbCBub3QgZGVsZXRlIGZyb20gYWxlcnRzIGFueSByZWZlcmVuY2VzIHRvIGl0YCxcbiAgICAgICAgaWNvbjogJ3RyYXNoLWFsdCcsXG4gICAgICAgIGNvbmZpcm1UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgeWVzVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgIG9uQ29uZmlybTogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGRlbGV0ZU5vdGlmaWNhdGlvbkNvbmZpcm1lZChpZCk7XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlTm90aWZpY2F0aW9uQ29uZmlybWVkID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtpZH1gKTtcbiAgICBjb25zdCBub3RpZmljYXRpb25zID0gYXdhaXQgZmV0Y2hOb3RpZmljYXRpb25zKCk7XG4gICAgc2V0Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAge3N0YXRlLmVycm9yICYmIDxwPntzdGF0ZS5lcnJvcn08L3A+fVxuICAgICAgICB7ISFub3RpZmljYXRpb25zLmxlbmd0aCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyX19zcGFjZXJcIiAvPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBpY29uPVwiY2hhbm5lbC1hZGRcIiBocmVmPVwiYWxlcnRpbmcvbm90aWZpY2F0aW9uL25ld1wiPlxuICAgICAgICAgICAgICAgIE5ldyBjaGFubmVsXG4gICAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmaWx0ZXItdGFibGUtLWhvdmVyXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgbWluV2lkdGg6ICcyMDBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBtaW5XaWR0aDogJzEwMHB4JyB9fT5UeXBlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzElJyB9fT48L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17bm90aWZpY2F0aW9uLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgYWxlcnRpbmcvbm90aWZpY2F0aW9uLyR7bm90aWZpY2F0aW9uLmlkfS9lZGl0YH0+e25vdGlmaWNhdGlvbi5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgYWxlcnRpbmcvbm90aWZpY2F0aW9uLyR7bm90aWZpY2F0aW9uLmlkfS9lZGl0YH0+e25vdGlmaWNhdGlvbi50eXBlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi5pc0RlZmF1bHQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuXG4gICAgICAgIHshKG5vdGlmaWNhdGlvbnMubGVuZ3RoIHx8IHN0YXRlLmxvYWRpbmcpICYmIChcbiAgICAgICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgICAgICB0aXRsZT1cIlRoZXJlIGFyZSBubyBub3RpZmljYXRpb24gY2hhbm5lbHMgZGVmaW5lZCB5ZXRcIlxuICAgICAgICAgICAgYnV0dG9uSWNvbj1cImNoYW5uZWwtYWRkXCJcbiAgICAgICAgICAgIGJ1dHRvbkxpbms9XCJhbGVydGluZy9ub3RpZmljYXRpb24vbmV3XCJcbiAgICAgICAgICAgIGJ1dHRvblRpdGxlPVwiQWRkIGNoYW5uZWxcIlxuICAgICAgICAgICAgcHJvVGlwPVwiWW91IGNhbiBpbmNsdWRlIGltYWdlcyBpbiB5b3VyIGFsZXJ0IG5vdGlmaWNhdGlvbnMuXCJcbiAgICAgICAgICAgIHByb1RpcExpbms9XCJodHRwOi8vZG9jcy5ncmFmYW5hLm9yZy9hbGVydGluZy9ub3RpZmljYXRpb25zL1wiXG4gICAgICAgICAgICBwcm9UaXBMaW5rVGl0bGU9XCJMZWFybiBtb3JlXCJcbiAgICAgICAgICAgIHByb1RpcFRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25zTGlzdFBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlLCBSb3V0ZUNoaWxkcmVuUHJvcHMsIFN3aXRjaCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgQWxlcnQsIExvYWRpbmdQbGFjZWhvbGRlciwgd2l0aEVycm9yQm91bmRhcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydE1hbmFnZXJQaWNrZXInO1xuaW1wb3J0IHsgQWxlcnRpbmdQYWdlV3JhcHBlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydGluZ1BhZ2VXcmFwcGVyJztcbmltcG9ydCB7IE5vQWxlcnRNYW5hZ2VyV2FybmluZyB9IGZyb20gJy4vY29tcG9uZW50cy9Ob0FsZXJ0TWFuYWdlcldhcm5pbmcnO1xuaW1wb3J0IHsgRWRpdFJlY2VpdmVyVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9yZWNlaXZlcnMvRWRpdFJlY2VpdmVyVmlldyc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY2VpdmVycy9FZGl0VGVtcGxhdGVWaWV3JztcbmltcG9ydCB7IEdsb2JhbENvbmZpZ0Zvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvcmVjZWl2ZXJzL0dsb2JhbENvbmZpZ0Zvcm0nO1xuaW1wb3J0IHsgTmV3UmVjZWl2ZXJWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY2VpdmVycy9OZXdSZWNlaXZlclZpZXcnO1xuaW1wb3J0IHsgTmV3VGVtcGxhdGVWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3JlY2VpdmVycy9OZXdUZW1wbGF0ZVZpZXcnO1xuaW1wb3J0IHsgUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9yZWNlaXZlcnMvUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldyc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24gfSBmcm9tICcuL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uLCBmZXRjaEdyYWZhbmFOb3RpZmllcnNBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuL3V0aWxzL3JlZHV4JztcblxuY29uc3QgUmVjZWl2ZXJzOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgYWxlcnRNYW5hZ2VycyA9IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24oJ25vdGlmaWNhdGlvbicpO1xuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKGFsZXJ0TWFuYWdlcnMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBpc1Jvb3QgPSBsb2NhdGlvbi5wYXRobmFtZS5lbmRzV2l0aCgnL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMnKTtcblxuICBjb25zdCBjb25maWdSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1Db25maWdzKTtcblxuICBjb25zdCB7XG4gICAgcmVzdWx0OiBjb25maWcsXG4gICAgbG9hZGluZyxcbiAgICBlcnJvcixcbiAgfSA9IChhbGVydE1hbmFnZXJTb3VyY2VOYW1lICYmIGNvbmZpZ1JlcXVlc3RzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gIGNvbnN0IHJlY2VpdmVyVHlwZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdyYWZhbmFOb3RpZmllcnMpO1xuXG4gIGNvbnN0IHNob3VsZExvYWRDb25maWcgPSBpc1Jvb3QgfHwgIWNvbmZpZztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lICYmIHNob3VsZExvYWRDb25maWcpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpKTtcbiAgICB9XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBkaXNwYXRjaCwgc2hvdWxkTG9hZENvbmZpZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSAmJlxuICAgICAgIShyZWNlaXZlclR5cGVzLnJlc3VsdCB8fCByZWNlaXZlclR5cGVzLmxvYWRpbmcgfHwgcmVjZWl2ZXJUeXBlcy5lcnJvcilcbiAgICApIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoR3JhZmFuYU5vdGlmaWVyc0FjdGlvbigpKTtcbiAgICB9XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBkaXNwYXRjaCwgcmVjZWl2ZXJUeXBlc10pO1xuXG4gIGNvbnN0IGRpc2FibGVBbVNlbGVjdCA9ICFpc1Jvb3Q7XG5cbiAgaWYgKCFhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSB7XG4gICAgcmV0dXJuIGlzUm9vdCA/IChcbiAgICAgIDxBbGVydGluZ1BhZ2VXcmFwcGVyIHBhZ2VJZD1cInJlY2VpdmVyc1wiPlxuICAgICAgICA8Tm9BbGVydE1hbmFnZXJXYXJuaW5nIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM9e2FsZXJ0TWFuYWdlcnN9IC8+XG4gICAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICAgKSA6IChcbiAgICAgIDxSZWRpcmVjdCB0bz1cIi9hbGVydGluZy9ub3RpZmljYXRpb25zXCIgLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnRpbmdQYWdlV3JhcHBlciBwYWdlSWQ9XCJyZWNlaXZlcnNcIj5cbiAgICAgIDxBbGVydE1hbmFnZXJQaWNrZXJcbiAgICAgICAgY3VycmVudD17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVBbVNlbGVjdH1cbiAgICAgICAgb25DaGFuZ2U9e3NldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgIGRhdGFTb3VyY2VzPXthbGVydE1hbmFnZXJzfVxuICAgICAgLz5cbiAgICAgIHtlcnJvciAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBsb2FkaW5nIEFsZXJ0bWFuYWdlciBjb25maWdcIj5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvci4nfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIHtsb2FkaW5nICYmICFjb25maWcgJiYgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwibG9hZGluZyBjb25maWd1cmF0aW9uLi4uXCIgLz59XG4gICAgICB7Y29uZmlnICYmICFlcnJvciAmJiAoXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0PXt0cnVlfSBwYXRoPVwiL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIDxSZWNlaXZlcnNBbmRUZW1wbGF0ZXNWaWV3IGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0PXt0cnVlfSBwYXRoPVwiL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMvdGVtcGxhdGVzL25ld1wiPlxuICAgICAgICAgICAgPE5ld1RlbXBsYXRlVmlldyBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdD17dHJ1ZX0gcGF0aD1cIi9hbGVydGluZy9ub3RpZmljYXRpb25zL3RlbXBsYXRlcy86bmFtZS9lZGl0XCI+XG4gICAgICAgICAgICB7KHsgbWF0Y2ggfTogUm91dGVDaGlsZHJlblByb3BzPHsgbmFtZTogc3RyaW5nIH0+KSA9PlxuICAgICAgICAgICAgICBtYXRjaD8ucGFyYW1zLm5hbWUgJiYgKFxuICAgICAgICAgICAgICAgIDxFZGl0VGVtcGxhdGVWaWV3XG4gICAgICAgICAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgICAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWU9e2RlY29kZVVSSUNvbXBvbmVudChtYXRjaD8ucGFyYW1zLm5hbWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdD17dHJ1ZX0gcGF0aD1cIi9hbGVydGluZy9ub3RpZmljYXRpb25zL3JlY2VpdmVycy9uZXdcIj5cbiAgICAgICAgICAgIDxOZXdSZWNlaXZlclZpZXcgY29uZmlnPXtjb25maWd9IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgZXhhY3Q9e3RydWV9IHBhdGg9XCIvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy9yZWNlaXZlcnMvOm5hbWUvZWRpdFwiPlxuICAgICAgICAgICAgeyh7IG1hdGNoIH06IFJvdXRlQ2hpbGRyZW5Qcm9wczx7IG5hbWU6IHN0cmluZyB9PikgPT5cbiAgICAgICAgICAgICAgbWF0Y2g/LnBhcmFtcy5uYW1lICYmIChcbiAgICAgICAgICAgICAgICA8RWRpdFJlY2VpdmVyVmlld1xuICAgICAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAgICAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgICAgICAgICAgICAgcmVjZWl2ZXJOYW1lPXtkZWNvZGVVUklDb21wb25lbnQobWF0Y2g/LnBhcmFtcy5uYW1lKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgZXhhY3Q9e3RydWV9IHBhdGg9XCIvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy9nbG9iYWwtY29uZmlnXCI+XG4gICAgICAgICAgICA8R2xvYmFsQ29uZmlnRm9ybSBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICl9XG4gICAgPC9BbGVydGluZ1BhZ2VXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVycm9yQm91bmRhcnkoUmVjZWl2ZXJzLCB7IHN0eWxlOiAncGFnZScgfSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VJZDogc3RyaW5nO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRpbmdQYWdlV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VJZCwgaXNMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChcbiAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KSxcbiAgICBwYWdlSWRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+e2NoaWxkcmVufTwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFjdGlvbnM6IEFjY2Vzc0NvbnRyb2xBY3Rpb25bXTtcbiAgZmFsbGJhY2s/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvcml6ZTogRkM8UHJvcHM+ID0gKHsgYWN0aW9ucywgY2hpbGRyZW4sIGZhbGxiYWNrID0gdHJ1ZSB9KSA9PiB7XG4gIGlmIChhY3Rpb25zLnNvbWUoKGFjdGlvbikgPT4gY29udGV4dFNydi5oYXNBY2Nlc3MoYWN0aW9uLCBmYWxsYmFjaykpKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vQWxlcnRNYW5hZ2VyUGlja2VyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdO1xufVxuXG5jb25zdCBOb0FsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIk5vIEFsZXJ0bWFuYWdlciBmb3VuZFwiIHNldmVyaXR5PVwid2FybmluZ1wiPlxuICAgIFdlIGNvdWxkIG5vdCBmaW5kIGFueSBleHRlcm5hbCBBbGVydG1hbmFnZXJzIGFuZCB5b3UgbWF5IG5vdCBoYXZlIGFjY2VzcyB0byB0aGUgYnVpbHQtaW4gR3JhZmFuYSBBbGVydG1hbmFnZXIuXG4gIDwvQWxlcnQ+XG4pO1xuXG5jb25zdCBPdGhlckFsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIlNlbGVjdGVkIEFsZXJ0bWFuYWdlciBub3QgZm91bmQuIFNlbGVjdCBhIGRpZmZlcmVudCBBbGVydG1hbmFnZXIuXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgU2VsZWN0ZWQgQWxlcnRtYW5hZ2VyIG5vIGxvbmdlciBleGlzdHMgb3IgeW91IG1heSBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBpdC5cbiAgPC9BbGVydD5cbik7XG5cbmV4cG9ydCBjb25zdCBOb0FsZXJ0TWFuYWdlcldhcm5pbmcgPSAoeyBhdmFpbGFibGVBbGVydE1hbmFnZXJzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtfLCBzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG4gIGNvbnN0IGhhc090aGVyQU1zID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtoYXNPdGhlckFNcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyIG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBkYXRhU291cmNlcz17YXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc30gLz5cbiAgICAgICAgICA8T3RoZXJBbGVydE1hbmFnZXJzQXZhaWxhYmxlIC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE5vQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEluZm9Cb3ggfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcblxuaW1wb3J0IHsgQ2xvdWRSZWNlaXZlckZvcm0gfSBmcm9tICcuL2Zvcm0vQ2xvdWRSZWNlaXZlckZvcm0nO1xuaW1wb3J0IHsgR3JhZmFuYVJlY2VpdmVyRm9ybSB9IGZyb20gJy4vZm9ybS9HcmFmYW5hUmVjZWl2ZXJGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVjZWl2ZXJOYW1lOiBzdHJpbmc7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBFZGl0UmVjZWl2ZXJWaWV3OiBGQzxQcm9wcz4gPSAoeyBjb25maWcsIHJlY2VpdmVyTmFtZSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHJlY2VpdmVyID0gY29uZmlnLmFsZXJ0bWFuYWdlcl9jb25maWcucmVjZWl2ZXJzPy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcmVjZWl2ZXJOYW1lKTtcbiAgaWYgKCFyZWNlaXZlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5mb0JveCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJSZWNlaXZlciBub3QgZm91bmRcIj5cbiAgICAgICAgU29ycnksIHRoaXMgcmVjZWl2ZXIgZG9lcyBub3Qgc2VlbSB0byBleGl0LlxuICAgICAgPC9JbmZvQm94PlxuICAgICk7XG4gIH1cblxuICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgIHJldHVybiA8R3JhZmFuYVJlY2VpdmVyRm9ybSBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gZXhpc3Rpbmc9e3JlY2VpdmVyfSAvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPENsb3VkUmVjZWl2ZXJGb3JtIGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBleGlzdGluZz17cmVjZWl2ZXJ9IC8+O1xuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbmZvQm94IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBUZW1wbGF0ZUZvcm0gfSBmcm9tICcuL1RlbXBsYXRlRm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRlbXBsYXRlTmFtZTogc3RyaW5nO1xuICBjb25maWc6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZztcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgRWRpdFRlbXBsYXRlVmlldzogRkM8UHJvcHM+ID0gKHsgY29uZmlnLCB0ZW1wbGF0ZU5hbWUsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSkgPT4ge1xuICBjb25zdCB0ZW1wbGF0ZSA9IGNvbmZpZy50ZW1wbGF0ZV9maWxlcz8uW3RlbXBsYXRlTmFtZV07XG4gIGlmICghdGVtcGxhdGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEluZm9Cb3ggc2V2ZXJpdHk9XCJlcnJvclwiIHRpdGxlPVwiVGVtcGxhdGUgbm90IGZvdW5kXCI+XG4gICAgICAgIFNvcnJ5LCB0aGlzIHRlbXBsYXRlIGRvZXMgbm90IHNlZW0gdG8gZXhpdC5cbiAgICAgIDwvSW5mb0JveD5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPFRlbXBsYXRlRm9ybVxuICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgIGNvbmZpZz17Y29uZmlnfVxuICAgICAgZXhpc3Rpbmc9e3sgbmFtZTogdGVtcGxhdGVOYW1lLCBjb250ZW50OiB0ZW1wbGF0ZSB9fVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0sIEZvcm1Qcm92aWRlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgSG9yaXpvbnRhbEdyb3VwLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlQ2xlYW51cCB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2xvYmFsQ29uZmlnT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2Nsb3VkLWFsZXJ0bWFuYWdlci1ub3RpZmllci10eXBlcyc7XG5pbXBvcnQgeyBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgb21pdEVtcHR5VmFsdWVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVjZWl2ZXItZm9ybSc7XG5cbmltcG9ydCB7IE9wdGlvbkZpZWxkIH0gZnJvbSAnLi9mb3JtL2ZpZWxkcy9PcHRpb25GaWVsZCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbnR5cGUgRm9ybVZhbHVlcyA9IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG5jb25zdCBkZWZhdWx0VmFsdWVzOiBGb3JtVmFsdWVzID0ge1xuICBzbXRwX3JlcXVpcmVfdGxzOiB0cnVlLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbmZpZ0Zvcm06IEZDPFByb3BzPiA9ICh7IGNvbmZpZywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5zYXZlQU1Db25maWcpO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yIH0gPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhdmVBTUNvbmZpZyk7XG4gIGNvbnN0IHJlYWRPbmx5ID0gaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBmb3JtQVBJID0gdXNlRm9ybTxGb3JtVmFsdWVzPih7XG4gICAgLy8gbWFraW5nIGEgY29weSBoZXJlIGJlYWN1c2UgcmVhY3QtaG9vay1mb3JtIHdpbGwgbXV0YXRlIHRoZXNlLCBhbmQgYnJlYWsgaWYgdGhlIG9iamVjdCBpcyBmcm96ZW4uIGZvciByZWFsLlxuICAgIGRlZmF1bHRWYWx1ZXM6IEpTT04ucGFyc2UoXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgICAgIC4uLihjb25maWcuYWxlcnRtYW5hZ2VyX2NvbmZpZy5nbG9iYWwgPz8ge30pLFxuICAgICAgfSlcbiAgICApLFxuICB9KTtcblxuICBjb25zdCB7XG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IGZvcm1BUEk7XG5cbiAgY29uc3Qgb25TdWJtaXRDYWxsYmFjayA9ICh2YWx1ZXM6IEZvcm1WYWx1ZXMpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbih7XG4gICAgICAgIG5ld0NvbmZpZzoge1xuICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICBhbGVydG1hbmFnZXJfY29uZmlnOiB7XG4gICAgICAgICAgICAuLi5jb25maWcuYWxlcnRtYW5hZ2VyX2NvbmZpZyxcbiAgICAgICAgICAgIGdsb2JhbDogb21pdEVtcHR5VmFsdWVzKHZhbHVlcyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb2xkQ29uZmlnOiBjb25maWcsXG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiAnR2xvYmFsIGNvbmZpZyB1cGRhdGVkLicsXG4gICAgICAgIHJlZGlyZWN0UGF0aDogbWFrZUFNTGluaygnL2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtUHJvdmlkZXIgey4uLmZvcm1BUEl9PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdENhbGxiYWNrKX0+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5HbG9iYWwgY29uZmlnPC9oND5cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiIHRpdGxlPVwiRXJyb3Igc2F2aW5nIHJlY2VpdmVyXCI+XG4gICAgICAgICAgICB7ZXJyb3IubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpfVxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICl9XG4gICAgICAgIHtnbG9iYWxDb25maWdPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgPE9wdGlvbkZpZWxkXG4gICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZXNbb3B0aW9uLnByb3BlcnR5TmFtZV19XG4gICAgICAgICAgICBrZXk9e29wdGlvbi5wcm9wZXJ0eU5hbWV9XG4gICAgICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnNbb3B0aW9uLnByb3BlcnR5TmFtZV19XG4gICAgICAgICAgICBwYXRoUHJlZml4PXsnJ31cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0gaWNvbj1cImZhIGZhLXNwaW5uZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBTYXZpbmcuLi5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgZ2xvYmFsIGNvbmZpZzwvQnV0dG9uPn1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIGZpbGw9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoJ2FsZXJ0aW5nL25vdGlmaWNhdGlvbnMnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvRm9ybVByb3ZpZGVyPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBoZWFkaW5nOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoNCwgMCl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5pbXBvcnQgeyBDbG91ZFJlY2VpdmVyRm9ybSB9IGZyb20gJy4vZm9ybS9DbG91ZFJlY2VpdmVyRm9ybSc7XG5pbXBvcnQgeyBHcmFmYW5hUmVjZWl2ZXJGb3JtIH0gZnJvbSAnLi9mb3JtL0dyYWZhbmFSZWNlaXZlckZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb25maWc6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZztcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTmV3UmVjZWl2ZXJWaWV3OiBGQzxQcm9wcz4gPSAoeyBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBjb25maWcgfSkgPT4ge1xuICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgIHJldHVybiA8R3JhZmFuYVJlY2VpdmVyRm9ybSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBjb25maWc9e2NvbmZpZ30gLz47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxDbG91ZFJlY2VpdmVyRm9ybSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBjb25maWc9e2NvbmZpZ30gLz47XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgVGVtcGxhdGVGb3JtIH0gZnJvbSAnLi9UZW1wbGF0ZUZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb25maWc6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZztcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgTmV3VGVtcGxhdGVWaWV3OiBGQzxQcm9wcz4gPSAoeyBjb25maWcsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSkgPT4ge1xuICByZXR1cm4gPFRlbXBsYXRlRm9ybSBjb25maWc9e2NvbmZpZ30gYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz47XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSwgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IG1ha2VBTUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uL0F1dGhvcml6ZSc7XG5cbmltcG9ydCB7IFJlY2VpdmVyc1RhYmxlIH0gZnJvbSAnLi9SZWNlaXZlcnNUYWJsZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZXNUYWJsZSB9IGZyb20gJy4vVGVtcGxhdGVzVGFibGUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb25maWc6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZztcbiAgYWxlcnRNYW5hZ2VyTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldzogRkM8UHJvcHM+ID0gKHsgY29uZmlnLCBhbGVydE1hbmFnZXJOYW1lIH0pID0+IHtcbiAgY29uc3QgaXNDbG91ZCA9IGFsZXJ0TWFuYWdlck5hbWUgIT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUU7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgaXNWYW5pbGxhQU0gPSBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJOYW1lKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFpc1ZhbmlsbGFBTSAmJiA8VGVtcGxhdGVzVGFibGUgY29uZmlnPXtjb25maWd9IGFsZXJ0TWFuYWdlck5hbWU9e2FsZXJ0TWFuYWdlck5hbWV9IC8+fVxuICAgICAgPFJlY2VpdmVyc1RhYmxlIGNvbmZpZz17Y29uZmlnfSBhbGVydE1hbmFnZXJOYW1lPXthbGVydE1hbmFnZXJOYW1lfSAvPlxuICAgICAge2lzQ2xvdWQgJiYgKFxuICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1tBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nTm90aWZpY2F0aW9uc0V4dGVybmFsV3JpdGVdfT5cbiAgICAgICAgICA8QWxlcnQgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0gc2V2ZXJpdHk9XCJpbmZvXCIgdGl0bGU9XCJHbG9iYWwgY29uZmlnIGZvciBjb250YWN0IHBvaW50c1wiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEZvciBlYWNoIGV4dGVybmFsIEFsZXJ0bWFuYWdlciB5b3UgY2FuIGRlZmluZSBnbG9iYWwgc2V0dGluZ3MsIGxpa2Ugc2VydmVyIGFkZHJlc3NlcywgdXNlcm5hbWVzIGFuZFxuICAgICAgICAgICAgICBwYXNzd29yZCwgZm9yIGFsbCB0aGUgc3VwcG9ydGVkIGNvbnRhY3QgcG9pbnRzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17bWFrZUFNTGluaygnYWxlcnRpbmcvbm90aWZpY2F0aW9ucy9nbG9iYWwtY29uZmlnJywgYWxlcnRNYW5hZ2VyTmFtZSl9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAge2lzVmFuaWxsYUFNID8gJ1ZpZXcgZ2xvYmFsIGNvbmZpZycgOiAnRWRpdCBnbG9iYWwgY29uZmlnJ31cbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHNlY3Rpb246IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhZGRCdXR0b25MYWJlbDogc3RyaW5nO1xuICBhZGRCdXR0b25Ubzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHNob3dCdXR0b24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUmVjZWl2ZXJzU2VjdGlvbjogRkM8UHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGFkZEJ1dHRvbkxhYmVsLFxuICBhZGRCdXR0b25UbyxcbiAgY2hpbGRyZW4sXG4gIHNob3dCdXR0b24gPSB0cnVlLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuaGVhZGluZywgY2xhc3NOYW1lKX0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Nob3dCdXR0b24gJiYgKFxuICAgICAgICAgIDxMaW5rIHRvPXthZGRCdXR0b25Ub30+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBpY29uPVwicGx1c1wiPlxuICAgICAgICAgICAgICB7YWRkQnV0dG9uTGFiZWx9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgaGVhZGluZzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBgLFxuICBkZXNjcmlwdGlvbjogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29uZmlybU1vZGFsLCBNb2RhbCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXV0aG9yaXplJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZGVsZXRlUmVjZWl2ZXJBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEFsZXJ0VGFibGVTdHlsZXMgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGFibGUnO1xuaW1wb3J0IHsgZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgaXNSZWNlaXZlclVzZWQgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IG1ha2VBTUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IGV4dHJhY3ROb3RpZmllclR5cGVDb3VudHMgfSBmcm9tICcuLi8uLi91dGlscy9yZWNlaXZlcnMnO1xuaW1wb3J0IHsgQWN0aW9uSWNvbiB9IGZyb20gJy4uL3J1bGVzL0FjdGlvbkljb24nO1xuXG5pbXBvcnQgeyBSZWNlaXZlcnNTZWN0aW9uIH0gZnJvbSAnLi9SZWNlaXZlcnNTZWN0aW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlck5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFJlY2VpdmVyc1RhYmxlOiBGQzxQcm9wcz4gPSAoeyBjb25maWcsIGFsZXJ0TWFuYWdlck5hbWUgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHRhYmxlU3R5bGVzID0gdXNlU3R5bGVzMihnZXRBbGVydFRhYmxlU3R5bGVzKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBpc1ZhbmlsbGFBTSA9IGlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlKGFsZXJ0TWFuYWdlck5hbWUpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJOYW1lKTtcbiAgY29uc3QgZ3JhZmFuYU5vdGlmaWVycyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ3JhZmFuYU5vdGlmaWVycyk7XG5cbiAgLy8gcmVjZWl2ZXIgbmFtZSBzbGF0ZWQgZm9yIGRlbGV0aW9uLiBJZiB0aGlzIGlzIHNldCwgYSBjb25maXJtYXRpb24gbW9kYWwgaXMgc2hvd24uIElmIHVzZXIgYXBwcm92ZXMsIHRoaXMgcmVjZWl2ZXIgaXMgZGVsZXRlZFxuICBjb25zdCBbcmVjZWl2ZXJUb0RlbGV0ZSwgc2V0UmVjZWl2ZXJUb0RlbGV0ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtzaG93Q2Fubm90RGVsZXRlUmVjZWl2ZXJNb2RhbCwgc2V0U2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ2xpY2tEZWxldGVSZWNlaXZlciA9IChyZWNlaXZlck5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIGlmIChpc1JlY2VpdmVyVXNlZChyZWNlaXZlck5hbWUsIGNvbmZpZykpIHtcbiAgICAgIHNldFNob3dDYW5ub3REZWxldGVSZWNlaXZlck1vZGFsKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRSZWNlaXZlclRvRGVsZXRlKHJlY2VpdmVyTmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVJlY2VpdmVyID0gKCkgPT4ge1xuICAgIGlmIChyZWNlaXZlclRvRGVsZXRlKSB7XG4gICAgICBkaXNwYXRjaChkZWxldGVSZWNlaXZlckFjdGlvbihyZWNlaXZlclRvRGVsZXRlLCBhbGVydE1hbmFnZXJOYW1lKSk7XG4gICAgfVxuICAgIHNldFJlY2VpdmVyVG9EZWxldGUodW5kZWZpbmVkKTtcbiAgfTtcblxuICBjb25zdCByb3dzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgY29uZmlnLmFsZXJ0bWFuYWdlcl9jb25maWcucmVjZWl2ZXJzPy5tYXAoKHJlY2VpdmVyKSA9PiAoe1xuICAgICAgICBuYW1lOiByZWNlaXZlci5uYW1lLFxuICAgICAgICB0eXBlczogT2JqZWN0LmVudHJpZXMoZXh0cmFjdE5vdGlmaWVyVHlwZUNvdW50cyhyZWNlaXZlciwgZ3JhZmFuYU5vdGlmaWVycy5yZXN1bHQgPz8gW10pKS5tYXAoXG4gICAgICAgICAgKFt0eXBlLCBjb3VudF0pID0+IHtcbiAgICAgICAgICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGAke3R5cGV9ICgke2NvdW50fSlgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgfVxuICAgICAgICApLFxuICAgICAgfSkpID8/IFtdLFxuICAgIFtjb25maWcsIGdyYWZhbmFOb3RpZmllcnMucmVzdWx0XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlY2VpdmVyc1NlY3Rpb25cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259XG4gICAgICB0aXRsZT1cIkNvbnRhY3QgcG9pbnRzXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiRGVmaW5lIHdoZXJlIHRoZSBub3RpZmljYXRpb25zIHdpbGwgYmUgc2VudCB0bywgZm9yIGV4YW1wbGUgZW1haWwgb3IgU2xhY2suXCJcbiAgICAgIHNob3dCdXR0b249eyFpc1ZhbmlsbGFBTSAmJiBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMuY3JlYXRlKX1cbiAgICAgIGFkZEJ1dHRvbkxhYmVsPVwiTmV3IGNvbnRhY3QgcG9pbnRcIlxuICAgICAgYWRkQnV0dG9uVG89e21ha2VBTUxpbmsoJy9hbGVydGluZy9ub3RpZmljYXRpb25zL3JlY2VpdmVycy9uZXcnLCBhbGVydE1hbmFnZXJOYW1lKX1cbiAgICA+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZVN0eWxlcy50YWJsZX0gZGF0YS10ZXN0aWQ9XCJyZWNlaXZlcnMtdGFibGVcIj5cbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIDxjb2wgLz5cbiAgICAgICAgICA8Y29sIC8+XG4gICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMudXBkYXRlLCBwZXJtaXNzaW9ucy5kZWxldGVdfT5cbiAgICAgICAgICAgIDxjb2wgLz5cbiAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Db250YWN0IHBvaW50IG5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMudXBkYXRlLCBwZXJtaXNzaW9ucy5kZWxldGVdfT5cbiAgICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHshcm93cy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17dGFibGVTdHlsZXMuZXZlblJvd30+XG4gICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5ObyByZWNlaXZlcnMgZGVmaW5lZC48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtyb3dzLm1hcCgocmVjZWl2ZXIsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPHRyIGtleT17cmVjZWl2ZXIubmFtZX0gY2xhc3NOYW1lPXtpZHggJSAyID09PSAwID8gdGFibGVTdHlsZXMuZXZlblJvdyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgIDx0ZD57cmVjZWl2ZXIubmFtZX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3JlY2VpdmVyLnR5cGVzLmpvaW4oJywgJyl9PC90ZD5cbiAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMudXBkYXRlLCBwZXJtaXNzaW9ucy5kZWxldGVdfT5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPXt0YWJsZVN0eWxlcy5hY3Rpb25zQ2VsbH0+XG4gICAgICAgICAgICAgICAgICB7IWlzVmFuaWxsYUFNICYmIChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy51cGRhdGVdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJlZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e21ha2VBTUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYC9hbGVydGluZy9ub3RpZmljYXRpb25zL3JlY2VpdmVycy8ke2VuY29kZVVSSUNvbXBvbmVudChyZWNlaXZlci5uYW1lKX0vZWRpdGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiRWRpdCBjb250YWN0IHBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLmRlbGV0ZV19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja0RlbGV0ZVJlY2VpdmVyKHJlY2VpdmVyLm5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiRGVsZXRlIGNvbnRhY3QgcG9pbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtpc1ZhbmlsbGFBTSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZV19PlxuICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cInZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e21ha2VBTUxpbmsoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy9yZWNlaXZlcnMvJHtlbmNvZGVVUklDb21wb25lbnQocmVjZWl2ZXIubmFtZSl9L2VkaXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydE1hbmFnZXJOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIlZpZXcgY29udGFjdCBwb2ludFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZmlsZS1hbHRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgeyEhc2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWwgJiYgKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgdGl0bGU9XCJDYW5ub3QgZGVsZXRlIGNvbnRhY3QgcG9pbnRcIlxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0U2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWwoZmFsc2UpfVxuICAgICAgICA+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDb250YWN0IHBvaW50IGNhbm5vdCBiZSBkZWxldGVkIGJlY2F1c2UgaXQgaXMgdXNlZCBpbiBtb3JlIHBvbGljaWVzLiBQbGVhc2UgdXBkYXRlIG9yIGRlbGV0ZSB0aGVzZSBwb2xpY2llc1xuICAgICAgICAgICAgZmlyc3QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93Q2Fubm90RGVsZXRlUmVjZWl2ZXJNb2RhbChmYWxzZSl9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICl9XG4gICAgICB7ISFyZWNlaXZlclRvRGVsZXRlICYmIChcbiAgICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICAgIGlzT3Blbj17dHJ1ZX1cbiAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBjb250YWN0IHBvaW50XCJcbiAgICAgICAgICBib2R5PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBjb250YWN0IHBvaW50IFwiJHtyZWNlaXZlclRvRGVsZXRlfVwiP2B9XG4gICAgICAgICAgY29uZmlybVRleHQ9XCJZZXMsIGRlbGV0ZVwiXG4gICAgICAgICAgb25Db25maXJtPXtkZWxldGVSZWNlaXZlcn1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFJlY2VpdmVyVG9EZWxldGUodW5kZWZpbmVkKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9SZWNlaXZlcnNTZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBzZWN0aW9uOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0sIFZhbGlkYXRlIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBGaWVsZCwgSW5wdXQsIExpbmtCdXR0b24sIFRleHRBcmVhLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlQ2xlYW51cCB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgZW5zdXJlRGVmaW5lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGVtcGxhdGVzJztcblxuaW50ZXJmYWNlIFZhbHVlcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5jb25zdCBkZWZhdWx0czogVmFsdWVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIG5hbWU6ICcnLFxuICBjb250ZW50OiAnJyxcbn0pO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBleGlzdGluZz86IFZhbHVlcztcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlRm9ybTogRkM8UHJvcHM+ID0gKHsgZXhpc3RpbmcsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHVzZUNsZWFudXAoKHN0YXRlKSA9PiBzdGF0ZS51bmlmaWVkQWxlcnRpbmcuc2F2ZUFNQ29uZmlnKTtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yIH0gPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNhdmVBTUNvbmZpZyk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlczogVmFsdWVzKSA9PiB7XG4gICAgLy8gd3JhcCBjb250ZW50IGluIFwiZGVmaW5lXCIgaWYgaXQncyBub3QgYWxyZWFkeSB3cmFwcGVkLCBpbiBjYXNlIHVzZXIgZGlkIG5vdCBkbyBpdC9cbiAgICAvLyBpdCdzIG5vdCBvYnZpb3VzIHRoYXQgdGhpcyBpcyBuZWVkZWQgZm9yIHRlbXBsYXRlIHRvIHdvcmtcbiAgICBjb25zdCBjb250ZW50ID0gZW5zdXJlRGVmaW5lKHZhbHVlcy5uYW1lLCB2YWx1ZXMuY29udGVudCk7XG5cbiAgICAvLyBhZGQgbmV3IHRlbXBsYXRlIHRvIHRlbXBsYXRlIG1hcFxuICAgIGNvbnN0IHRlbXBsYXRlX2ZpbGVzID0ge1xuICAgICAgLi4uY29uZmlnLnRlbXBsYXRlX2ZpbGVzLFxuICAgICAgW3ZhbHVlcy5uYW1lXTogY29udGVudCxcbiAgICB9O1xuXG4gICAgLy8gZGVsZXRlIGV4aXN0aW5nIG9uZSAoaWYgbmFtZSBjaGFuZ2VkLCBvdGhlcndpc2UgaXQgd2FzIG92ZXJ3cml0dGVuIGluIHByZXZpb3VzIHN0ZXApXG4gICAgaWYgKGV4aXN0aW5nICYmIGV4aXN0aW5nLm5hbWUgIT09IHZhbHVlcy5uYW1lKSB7XG4gICAgICBkZWxldGUgdGVtcGxhdGVfZmlsZXNbZXhpc3RpbmcubmFtZV07XG4gICAgfVxuXG4gICAgLy8gbWFrZSBzdXJlIG5hbWUgZm9yIHRoZSB0ZW1wbGF0ZSBpcyBjb25maWd1cmVkIG9uIHRoZSBhbGVydG1hbmFnZXIgY29uZmlnIG9iamVjdFxuICAgIGNvbnN0IHRlbXBsYXRlcyA9IFtcbiAgICAgIC4uLihjb25maWcuYWxlcnRtYW5hZ2VyX2NvbmZpZy50ZW1wbGF0ZXMgPz8gW10pLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gZXhpc3Rpbmc/Lm5hbWUpLFxuICAgICAgdmFsdWVzLm5hbWUsXG4gICAgXTtcblxuICAgIGNvbnN0IG5ld0NvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnID0ge1xuICAgICAgdGVtcGxhdGVfZmlsZXMsXG4gICAgICBhbGVydG1hbmFnZXJfY29uZmlnOiB7XG4gICAgICAgIC4uLmNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLFxuICAgICAgICB0ZW1wbGF0ZXMsXG4gICAgICB9LFxuICAgIH07XG4gICAgZGlzcGF0Y2goXG4gICAgICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oe1xuICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICAgICAgICBuZXdDb25maWcsXG4gICAgICAgIG9sZENvbmZpZzogY29uZmlnLFxuICAgICAgICBzdWNjZXNzTWVzc2FnZTogJ1RlbXBsYXRlIHNhdmVkLicsXG4gICAgICAgIHJlZGlyZWN0UGF0aDogJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlZ2lzdGVyLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm08VmFsdWVzPih7XG4gICAgbW9kZTogJ29uU3VibWl0JyxcbiAgICBkZWZhdWx0VmFsdWVzOiBleGlzdGluZyA/PyBkZWZhdWx0cyxcbiAgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGVOYW1lSXNVbmlxdWU6IFZhbGlkYXRlPHN0cmluZz4gPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuICFjb25maWcudGVtcGxhdGVfZmlsZXNbbmFtZV0gfHwgZXhpc3Rpbmc/Lm5hbWUgPT09IG5hbWVcbiAgICAgID8gdHJ1ZVxuICAgICAgOiAnQW5vdGhlciB0ZW1wbGF0ZSB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cbiAgICAgIDxoND57ZXhpc3RpbmcgPyAnRWRpdCBtZXNzYWdlIHRlbXBsYXRlJyA6ICdDcmVhdGUgbWVzc2FnZSB0ZW1wbGF0ZSd9PC9oND5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBzYXZpbmcgdGVtcGxhdGVcIj5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZSB8fCAoZXJyb3IgYXMgYW55KT8uZGF0YT8ubWVzc2FnZSB8fCBTdHJpbmcoZXJyb3IpfVxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIDxGaWVsZCBsYWJlbD1cIlRlbXBsYXRlIG5hbWVcIiBlcnJvcj17ZXJyb3JzPy5uYW1lPy5tZXNzYWdlfSBpbnZhbGlkPXshIWVycm9ycy5uYW1lPy5tZXNzYWdlfSByZXF1aXJlZD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogeyBuYW1lSXNVbmlxdWU6IHZhbGlkYXRlTmFtZUlzVW5pcXVlIH0sXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJHaXZlIHlvdXIgdGVtcGxhdGUgYSBuYW1lXCJcbiAgICAgICAgICB3aWR0aD17NDJ9XG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZFxuICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIFlvdSBjYW4gdXNlIHRoZXsnICd9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wa2cuZ28uZGV2L3RleHQvdGVtcGxhdGU/dXRtX3NvdXJjZT1nb2RvY1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxMaW5rfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHbyB0ZW1wbGF0aW5nIGxhbmd1YWdlXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAueycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3Byb21ldGhldXMuaW8vYmxvZy8yMDE2LzAzLzAzL2N1c3RvbS1hbGVydG1hbmFnZXItdGVtcGxhdGVzL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZXh0ZXJuYWxMaW5rfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBNb3JlIGluZm8gYWJvdXQgYWxlcnRtYW5hZ2VyIHRlbXBsYXRlc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICAgIGxhYmVsPVwiQ29udGVudFwiXG4gICAgICAgIGVycm9yPXtlcnJvcnM/LmNvbnRlbnQ/Lm1lc3NhZ2V9XG4gICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmNvbnRlbnQ/Lm1lc3NhZ2V9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICA+XG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIHsuLi5yZWdpc3RlcignY29udGVudCcsIHsgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0gfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWF9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICByb3dzPXsxMn1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0gaWNvbj1cImZhIGZhLXNwaW5uZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgU2F2aW5nLi4uXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHshbG9hZGluZyAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIFNhdmUgdGVtcGxhdGVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICBocmVmPXttYWtlQU1MaW5rKCdhbGVydGluZy9ub3RpZmljYXRpb25zJywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZmlsbD1cIm91dGxpbmVcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZXh0ZXJuYWxMaW5rOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgYCxcbiAgYnV0dG9uczogY3NzYFxuICAgICYgPiAqICsgKiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG4gIGAsXG4gIHRleHRhcmVhOiBjc3NgXG4gICAgbWF4LXdpZHRoOiA3NThweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCBGcmFnbWVudCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgQ29uZmlybU1vZGFsLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BdXRob3JpemUnO1xuaW1wb3J0IHsgZGVsZXRlVGVtcGxhdGVBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEFsZXJ0VGFibGVTdHlsZXMgfSBmcm9tICcuLi8uLi9zdHlsZXMvdGFibGUnO1xuaW1wb3J0IHsgZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGUgfSBmcm9tICcuLi9Db2xsYXBzZVRvZ2dsZSc7XG5pbXBvcnQgeyBEZXRhaWxzRmllbGQgfSBmcm9tICcuLi9EZXRhaWxzRmllbGQnO1xuaW1wb3J0IHsgQWN0aW9uSWNvbiB9IGZyb20gJy4uL3J1bGVzL0FjdGlvbkljb24nO1xuXG5pbXBvcnQgeyBSZWNlaXZlcnNTZWN0aW9uIH0gZnJvbSAnLi9SZWNlaXZlcnNTZWN0aW9uJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGFsZXJ0TWFuYWdlck5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRlbXBsYXRlc1RhYmxlOiBGQzxQcm9wcz4gPSAoeyBjb25maWcsIGFsZXJ0TWFuYWdlck5hbWUgfSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtleHBhbmRlZFRlbXBsYXRlcywgc2V0RXhwYW5kZWRUZW1wbGF0ZXNdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgYm9vbGVhbj4+KHt9KTtcbiAgY29uc3QgdGFibGVTdHlsZXMgPSB1c2VTdHlsZXMyKGdldEFsZXJ0VGFibGVTdHlsZXMpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJOYW1lKTtcblxuICBjb25zdCB0ZW1wbGF0ZVJvd3MgPSB1c2VNZW1vKCgpID0+IE9iamVjdC5lbnRyaWVzKGNvbmZpZy50ZW1wbGF0ZV9maWxlcyksIFtjb25maWddKTtcbiAgY29uc3QgW3RlbXBsYXRlVG9EZWxldGUsIHNldFRlbXBsYXRlVG9EZWxldGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIGNvbnN0IGRlbGV0ZVRlbXBsYXRlID0gKCkgPT4ge1xuICAgIGlmICh0ZW1wbGF0ZVRvRGVsZXRlKSB7XG4gICAgICBkaXNwYXRjaChkZWxldGVUZW1wbGF0ZUFjdGlvbih0ZW1wbGF0ZVRvRGVsZXRlLCBhbGVydE1hbmFnZXJOYW1lKSk7XG4gICAgfVxuICAgIHNldFRlbXBsYXRlVG9EZWxldGUodW5kZWZpbmVkKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWNlaXZlcnNTZWN0aW9uXG4gICAgICB0aXRsZT1cIk1lc3NhZ2UgdGVtcGxhdGVzXCJcbiAgICAgIGRlc2NyaXB0aW9uPVwiVGVtcGxhdGVzIGNvbnN0cnVjdCB0aGUgbWVzc2FnZXMgdGhhdCBnZXQgc2VudCB0byB0aGUgY29udGFjdCBwb2ludHMuXCJcbiAgICAgIGFkZEJ1dHRvbkxhYmVsPVwiTmV3IHRlbXBsYXRlXCJcbiAgICAgIGFkZEJ1dHRvblRvPXttYWtlQU1MaW5rKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy90ZW1wbGF0ZXMvbmV3JywgYWxlcnRNYW5hZ2VyTmFtZSl9XG4gICAgICBzaG93QnV0dG9uPXtjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMuY3JlYXRlKX1cbiAgICA+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXt0YWJsZVN0eWxlcy50YWJsZX0gZGF0YS10ZXN0aWQ9XCJ0ZW1wbGF0ZXMtdGFibGVcIj5cbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgIDxjb2wgY2xhc3NOYW1lPXt0YWJsZVN0eWxlcy5jb2xFeHBhbmR9IC8+XG4gICAgICAgICAgPGNvbCAvPlxuICAgICAgICAgIDxjb2wgLz5cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPHRoPlRlbXBsYXRlPC90aD5cbiAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZSwgcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cbiAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7IXRlbXBsYXRlUm93cy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT17dGFibGVTdHlsZXMuZXZlblJvd30+XG4gICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5ObyB0ZW1wbGF0ZXMgZGVmaW5lZC48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0ZW1wbGF0ZVJvd3MubWFwKChbbmFtZSwgY29udGVudF0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNFeHBhbmRlZCA9ICEhZXhwYW5kZWRUZW1wbGF0ZXNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtuYW1lfT5cbiAgICAgICAgICAgICAgICA8dHIga2V5PXtuYW1lfSBjbGFzc05hbWU9e2lkeCAlIDIgPT09IDAgPyB0YWJsZVN0eWxlcy5ldmVuUm93IDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgaXNDb2xsYXBzZWQ9eyFleHBhbmRlZFRlbXBsYXRlc1tuYW1lXX1cbiAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17KCkgPT4gc2V0RXhwYW5kZWRUZW1wbGF0ZXMoeyAuLi5leHBhbmRlZFRlbXBsYXRlcywgW25hbWVdOiAhaXNFeHBhbmRlZCB9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e25hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZSwgcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3RhYmxlU3R5bGVzLmFjdGlvbnNDZWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICA8QXV0aG9yaXplIGFjdGlvbnM9e1twZXJtaXNzaW9ucy51cGRhdGVdfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXttYWtlQU1MaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy90ZW1wbGF0ZXMvJHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9L2VkaXRgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0TWFuYWdlck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cImVkaXQgdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUZW1wbGF0ZVRvRGVsZXRlKG5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiZGVsZXRlIHRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICB7aXNFeHBhbmRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPXtpZHggJSAyID09PSAwID8gdGFibGVTdHlsZXMuZXZlblJvdyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIkRlc2NyaXB0aW9uXCIgaG9yaXpvbnRhbD17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cHJlPntjb250ZW50fTwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRGV0YWlsc0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICAgIHshIXRlbXBsYXRlVG9EZWxldGUgJiYgKFxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHRlbXBsYXRlXCJcbiAgICAgICAgICBib2R5PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0ZW1wbGF0ZSBcIiR7dGVtcGxhdGVUb0RlbGV0ZX1cIj9gfVxuICAgICAgICAgIGNvbmZpcm1UZXh0PVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlVGVtcGxhdGV9XG4gICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRUZW1wbGF0ZVRvRGVsZXRlKHVuZGVmaW5lZCl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUmVjZWl2ZXJzU2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIEZpZWxkRXJyb3IsIEZpZWxkRXJyb3JzLCBEZWVwTWFwIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgQ2hhbm5lbFZhbHVlcywgUmVjZWl2ZXJGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5cbmltcG9ydCB7IE9wdGlvbkZpZWxkIH0gZnJvbSAnLi9maWVsZHMvT3B0aW9uRmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzPFIgZXh0ZW5kcyBDaGFubmVsVmFsdWVzPiB7XG4gIGRlZmF1bHRWYWx1ZXM6IFI7XG4gIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM6IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25bXTtcbiAgc2VjdXJlRmllbGRzOiBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzO1xuXG4gIG9uUmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xuICBlcnJvcnM/OiBGaWVsZEVycm9yczxSPjtcbiAgcGF0aFByZWZpeD86IHN0cmluZztcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbE9wdGlvbnM8UiBleHRlbmRzIENoYW5uZWxWYWx1ZXM+KHtcbiAgZGVmYXVsdFZhbHVlcyxcbiAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucyxcbiAgb25SZXNldFNlY3VyZUZpZWxkLFxuICBzZWN1cmVGaWVsZHMsXG4gIGVycm9ycyxcbiAgcGF0aFByZWZpeCA9ICcnLFxuICByZWFkT25seSA9IGZhbHNlLFxufTogUHJvcHM8Uj4pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgd2F0Y2ggfSA9IHVzZUZvcm1Db250ZXh0PFJlY2VpdmVyRm9ybVZhbHVlczxSPj4oKTtcbiAgY29uc3QgY3VycmVudEZvcm1WYWx1ZXMgPSB3YXRjaCgpIGFzIFJlY29yZDxzdHJpbmcsIGFueT47IC8vIHJlYWN0IGhvb2sgZm9ybSB0eXBlcyBBUkUgTFlJTkchXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzZWxlY3RlZENoYW5uZWxPcHRpb25zLm1hcCgob3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke29wdGlvbi5sYWJlbH0tJHtpbmRleH1gO1xuICAgICAgICAvLyBTb21lIG9wdGlvbnMgY2FuIGJlIGRlcGVuZGVudCBvbiBvdGhlciBvcHRpb25zLCB0aGlzIGRldGVybWluZXMgd2hhdCBpcyBzZWxlY3RlZCBpbiB0aGUgZGVwZW5kZW5jeSBvcHRpb25zXG4gICAgICAgIC8vIEkgdGhpbmsgdGhpcyBuZWVkcyBtb3JlIHRob3VnaHQuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uVmFsdWUgPSBjdXJyZW50Rm9ybVZhbHVlc1tgJHtwYXRoUHJlZml4fXNldHRpbmdzLiR7b3B0aW9uLnNob3dXaGVuLmZpZWxkfWBdO1xuXG4gICAgICAgIGlmIChvcHRpb24uc2hvd1doZW4uZmllbGQgJiYgc2VsZWN0ZWRPcHRpb25WYWx1ZSAhPT0gb3B0aW9uLnNob3dXaGVuLmlzKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlRmllbGRzICYmIHNlY3VyZUZpZWxkc1tvcHRpb24ucHJvcGVydHlOYW1lXSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGQga2V5PXtrZXl9IGxhYmVsPXtvcHRpb24ubGFiZWx9IGRlc2NyaXB0aW9uPXtvcHRpb24uZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XG4gICAgICAgICAgICAgICAgdmFsdWU9XCJDb25maWd1cmVkXCJcbiAgICAgICAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgICAgICAgcmVhZE9ubHkgPyBudWxsIDogKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzZXRTZWN1cmVGaWVsZChvcHRpb24ucHJvcGVydHlOYW1lKX0gZmlsbD1cInRleHRcIiB0eXBlPVwiYnV0dG9uXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXJyb3I6IEZpZWxkRXJyb3IgfCBEZWVwTWFwPGFueSwgRmllbGRFcnJvcj4gfCB1bmRlZmluZWQgPSAoXG4gICAgICAgICAgKG9wdGlvbi5zZWN1cmUgPyBlcnJvcnM/LnNlY3VyZVNldHRpbmdzIDogZXJyb3JzPy5zZXR0aW5ncykgYXMgRGVlcE1hcDxhbnksIEZpZWxkRXJyb3I+IHwgdW5kZWZpbmVkXG4gICAgICAgICk/LltvcHRpb24ucHJvcGVydHlOYW1lXTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWVzPy5zZXR0aW5ncz8uW29wdGlvbi5wcm9wZXJ0eU5hbWVdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE9wdGlvbkZpZWxkXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX1cbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICAgICAgcGF0aFByZWZpeD17cGF0aFByZWZpeH1cbiAgICAgICAgICAgIHBhdGhTdWZmaXg9e29wdGlvbi5zZWN1cmUgPyAnc2VjdXJlU2V0dGluZ3MuJyA6ICdzZXR0aW5ncy4nfVxuICAgICAgICAgICAgb3B0aW9uPXtvcHRpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIEZpZWxkRXJyb3JzIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBGaWVsZCwgSW5wdXRDb250cm9sLCBTZWxlY3QsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmllckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgQ2hhbm5lbFZhbHVlcywgQ29tbW9uU2V0dGluZ3NDb21wb25lbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5cbmltcG9ydCB7IENoYW5uZWxPcHRpb25zIH0gZnJvbSAnLi9DaGFubmVsT3B0aW9ucyc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZVNlY3Rpb24gfSBmcm9tICcuL0NvbGxhcHNpYmxlU2VjdGlvbic7XG5cbmludGVyZmFjZSBQcm9wczxSPiB7XG4gIGRlZmF1bHRWYWx1ZXM6IFI7XG4gIHBhdGhQcmVmaXg6IHN0cmluZztcbiAgbm90aWZpZXJzOiBOb3RpZmllckRUT1tdO1xuICBvbkR1cGxpY2F0ZTogKCkgPT4gdm9pZDtcbiAgb25UZXN0PzogKCkgPT4gdm9pZDtcbiAgY29tbW9uU2V0dGluZ3NDb21wb25lbnQ6IENvbW1vblNldHRpbmdzQ29tcG9uZW50VHlwZTtcblxuICBzZWN1cmVGaWVsZHM/OiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPjtcbiAgZXJyb3JzPzogRmllbGRFcnJvcnM8Uj47XG4gIG9uRGVsZXRlPzogKCkgPT4gdm9pZDtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbFN1YkZvcm08UiBleHRlbmRzIENoYW5uZWxWYWx1ZXM+KHtcbiAgZGVmYXVsdFZhbHVlcyxcbiAgcGF0aFByZWZpeCxcbiAgb25EdXBsaWNhdGUsXG4gIG9uRGVsZXRlLFxuICBvblRlc3QsXG4gIG5vdGlmaWVycyxcbiAgZXJyb3JzLFxuICBzZWN1cmVGaWVsZHMsXG4gIGNvbW1vblNldHRpbmdzQ29tcG9uZW50OiBDb21tb25TZXR0aW5nc0NvbXBvbmVudCxcbiAgcmVhZE9ubHkgPSBmYWxzZSxcbn06IFByb3BzPFI+KTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IG5hbWUgPSAoZmllbGROYW1lOiBzdHJpbmcpID0+IGAke3BhdGhQcmVmaXh9JHtmaWVsZE5hbWV9YDtcbiAgY29uc3QgeyBjb250cm9sLCB3YXRjaCwgcmVnaXN0ZXIsIHRyaWdnZXIsIGZvcm1TdGF0ZSwgc2V0VmFsdWUgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IHNlbGVjdGVkVHlwZSA9IHdhdGNoKG5hbWUoJ3R5cGUnKSkgPz8gZGVmYXVsdFZhbHVlcy50eXBlOyAvLyBub3BlLCBzZXR0aW5nIFwiZGVmYXVsdFwiIGRvZXMgbm90IHdvcmsgYXQgYWxsLlxuICBjb25zdCB7IGxvYWRpbmc6IHRlc3RpbmdSZWNlaXZlciB9ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50ZXN0UmVjZWl2ZXJzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJlZ2lzdGVyKGAke3BhdGhQcmVmaXh9Ll9faWRgKTtcbiAgICAvKiBOZWVkIHRvIG1hbnVhbGx5IHJlZ2lzdGVyIHNlY3VyZUZpZWxkcyBvciBlbHNlIHRoZXknbGxcbiAgICAgYmUgbG9zdCB3aGVuIHRlc3RpbmcgYSBjb250YWN0IHBvaW50ICovXG4gICAgcmVnaXN0ZXIoYCR7cGF0aFByZWZpeH0uc2VjdXJlRmllbGRzYCk7XG4gIH0sIFtyZWdpc3RlciwgcGF0aFByZWZpeF0pO1xuXG4gIGNvbnN0IFtfc2VjdXJlRmllbGRzLCBzZXRTZWN1cmVGaWVsZHNdID0gdXNlU3RhdGUoc2VjdXJlRmllbGRzID8/IHt9KTtcblxuICBjb25zdCBvblJlc2V0U2VjdXJlRmllbGQgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoX3NlY3VyZUZpZWxkc1trZXldKSB7XG4gICAgICBjb25zdCB1cGRhdGVkU2VjdXJlRmllbGRzID0geyAuLi5zZWN1cmVGaWVsZHMgfTtcbiAgICAgIGRlbGV0ZSB1cGRhdGVkU2VjdXJlRmllbGRzW2tleV07XG4gICAgICBzZXRTZWN1cmVGaWVsZHModXBkYXRlZFNlY3VyZUZpZWxkcyk7XG4gICAgICBzZXRWYWx1ZShgJHtwYXRoUHJlZml4fS5zZWN1cmVGaWVsZHNgLCB1cGRhdGVkU2VjdXJlRmllbGRzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdHlwZU9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpOiBTZWxlY3RhYmxlVmFsdWVbXSA9PlxuICAgICAgbm90aWZpZXJzXG4gICAgICAgIC5tYXAoKHsgbmFtZSwgdHlwZSB9KSA9PiAoe1xuICAgICAgICAgIGxhYmVsOiBuYW1lLFxuICAgICAgICAgIHZhbHVlOiB0eXBlLFxuICAgICAgICB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEubGFiZWwubG9jYWxlQ29tcGFyZShiLmxhYmVsKSksXG4gICAgW25vdGlmaWVyc11cbiAgKTtcblxuICBjb25zdCBoYW5kbGVUZXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHRyaWdnZXIoKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gT2JqZWN0LmtleXMoZm9ybVN0YXRlLmVycm9ycykubGVuZ3RoID09PSAwO1xuXG4gICAgaWYgKGlzVmFsaWQgJiYgb25UZXN0KSB7XG4gICAgICBvblRlc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgbm90aWZpZXIgPSBub3RpZmllcnMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IHNlbGVjdGVkVHlwZSk7XG4gIC8vIGlmIHRoZXJlIGFyZSBtYW5kYXRvcnkgb3B0aW9ucyBkZWZpbmVkLCBvcHRpb25hbCBvcHRpb25zIHdpbGwgYmUgaGlkZGVuIGJ5IGEgY29sbGFwc2VcbiAgLy8gaWYgdGhlcmUgYXJlbid0IG1hbmRhdG9yeSBvcHRpb25zLCBhbGwgb3B0aW9ucyB3aWxsIGJlIHNob3duIHdpdGhvdXQgY29sbGFwc2VcbiAgY29uc3QgbWFuZGF0b3J5T3B0aW9ucyA9IG5vdGlmaWVyPy5vcHRpb25zLmZpbHRlcigobykgPT4gby5yZXF1aXJlZCk7XG4gIGNvbnN0IG9wdGlvbmFsT3B0aW9ucyA9IG5vdGlmaWVyPy5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpO1xuXG4gIGNvbnN0IGNvbnRhY3RQb2ludFR5cGVJbnB1dElkID0gYGNvbnRhY3QtcG9pbnQtdHlwZS0ke3BhdGhQcmVmaXh9YDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IGRhdGEtdGVzdGlkPVwiaXRlbS1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wUm93fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJDb250YWN0IHBvaW50IHR5cGVcIiBodG1sRm9yPXtjb250YWN0UG9pbnRUeXBlSW5wdXRJZH0gZGF0YS10ZXN0aWQ9e2Ake3BhdGhQcmVmaXh9dHlwZWB9PlxuICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICBuYW1lPXtuYW1lKCd0eXBlJyl9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlcy50eXBlfVxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgb25DaGFuZ2UsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9e2NvbnRhY3RQb2ludFR5cGVJbnB1dElkfVxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezM3fVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dHlwZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZT8udmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICAgICAge29uVGVzdCAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGVzdGluZ1JlY2VpdmVyfVxuICAgICAgICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGVzdCgpfVxuICAgICAgICAgICAgICAgIGljb249e3Rlc3RpbmdSZWNlaXZlciA/ICdmYSBmYS1zcGlubmVyJyA6ICdtZXNzYWdlJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRlc3RcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwieHNcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG9uRHVwbGljYXRlKCl9IGljb249XCJjb3B5XCI+XG4gICAgICAgICAgICAgIER1cGxpY2F0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Ake3BhdGhQcmVmaXh9ZGVsZXRlLWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZSgpfVxuICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge25vdGlmaWVyICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckNvbnRlbnR9PlxuICAgICAgICAgIDxDaGFubmVsT3B0aW9uczxSPlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlcz17ZGVmYXVsdFZhbHVlc31cbiAgICAgICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e21hbmRhdG9yeU9wdGlvbnM/Lmxlbmd0aCA/IG1hbmRhdG9yeU9wdGlvbnMhIDogb3B0aW9uYWxPcHRpb25zIX1cbiAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17X3NlY3VyZUZpZWxkc31cbiAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICAgICAgb25SZXNldFNlY3VyZUZpZWxkPXtvblJlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICBwYXRoUHJlZml4PXtwYXRoUHJlZml4fVxuICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyEhKG1hbmRhdG9yeU9wdGlvbnM/Lmxlbmd0aCAmJiBvcHRpb25hbE9wdGlvbnM/Lmxlbmd0aCkgJiYgKFxuICAgICAgICAgICAgPENvbGxhcHNpYmxlU2VjdGlvbiBsYWJlbD17YE9wdGlvbmFsICR7bm90aWZpZXIubmFtZX0gc2V0dGluZ3NgfT5cbiAgICAgICAgICAgICAge25vdGlmaWVyLmluZm8gIT09ICcnICYmIChcbiAgICAgICAgICAgICAgICA8QWxlcnQgdGl0bGU9XCJcIiBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgICAgICAgICAgICAgIHtub3RpZmllci5pbmZvfVxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDaGFubmVsT3B0aW9uczxSPlxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZXN9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucz17b3B0aW9uYWxPcHRpb25zIX1cbiAgICAgICAgICAgICAgICBzZWN1cmVGaWVsZHM9e19zZWN1cmVGaWVsZHN9XG4gICAgICAgICAgICAgICAgb25SZXNldFNlY3VyZUZpZWxkPXtvblJlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgcGF0aFByZWZpeD17cGF0aFByZWZpeH1cbiAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbGxhcHNpYmxlU2VjdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb2xsYXBzaWJsZVNlY3Rpb24gbGFiZWw9XCJOb3RpZmljYXRpb24gc2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxDb21tb25TZXR0aW5nc0NvbXBvbmVudCBwYXRoUHJlZml4PXtwYXRoUHJlZml4fSByZWFkT25seT17cmVhZE9ubHl9IC8+XG4gICAgICAgICAgPC9Db2xsYXBzaWJsZVNlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBidXR0b25zOiBjc3NgXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIH1cbiAgYCxcbiAgaW5uZXJDb250ZW50OiBjc3NgXG4gICAgbWF4LXdpZHRoOiA1MzZweDtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDIsIDApfTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDEpfTtcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhsfSR7dGhlbWUuYnJlYWtwb2ludHMudW5pdH07XG4gIGAsXG4gIHRvcFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGAsXG4gIGNoYW5uZWxTZXR0aW5nc0hlYWRlcjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgQ2hlY2tib3gsIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDb21tb25TZXR0aW5nc0NvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5cbmV4cG9ydCBjb25zdCBDbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5nczogRkM8Q29tbW9uU2V0dGluZ3NDb21wb25lbnRQcm9wcz4gPSAoe1xuICBwYXRoUHJlZml4LFxuICBjbGFzc05hbWUsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8RmllbGQgZGlzYWJsZWQ9e3JlYWRPbmx5fT5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKGAke3BhdGhQcmVmaXh9c2VuZFJlc29sdmVkYCl9XG4gICAgICAgICAgbGFiZWw9XCJTZW5kIHJlc29sdmVkXCJcbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgZGVzY3JpcHRpb249XCJXaGV0aGVyIG9yIG5vdCB0byBub3RpZnkgYWJvdXQgcmVzb2x2ZWQgYWxlcnRzLlwiXG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZywgUmVjZWl2ZXIgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQ2xvdWRDaGFubmVsVmFsdWVzLCBSZWNlaXZlckZvcm1WYWx1ZXMsIENsb3VkQ2hhbm5lbE1hcCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3JlY2VpdmVyLWZvcm0nO1xuaW1wb3J0IHsgY2xvdWROb3RpZmllclR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2xvdWQtYWxlcnRtYW5hZ2VyLW5vdGlmaWVyLXR5cGVzJztcbmltcG9ydCB7IGlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQge1xuICBjbG91ZFJlY2VpdmVyVG9Gb3JtVmFsdWVzLFxuICBmb3JtVmFsdWVzVG9DbG91ZFJlY2VpdmVyLFxuICB1cGRhdGVDb25maWdXaXRoUmVjZWl2ZXIsXG59IGZyb20gJy4uLy4uLy4uL3V0aWxzL3JlY2VpdmVyLWZvcm0nO1xuXG5pbXBvcnQgeyBDbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5ncyB9IGZyb20gJy4vQ2xvdWRDb21tb25DaGFubmVsU2V0dGluZ3MnO1xuaW1wb3J0IHsgUmVjZWl2ZXJGb3JtIH0gZnJvbSAnLi9SZWNlaXZlckZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG4gIGNvbmZpZzogQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnO1xuICBleGlzdGluZz86IFJlY2VpdmVyO1xufVxuXG5jb25zdCBkZWZhdWx0Q2hhbm5lbFZhbHVlczogQ2xvdWRDaGFubmVsVmFsdWVzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIF9faWQ6ICcnLFxuICBzZW5kUmVzb2x2ZWQ6IHRydWUsXG4gIHNlY3VyZVNldHRpbmdzOiB7fSxcbiAgc2V0dGluZ3M6IHt9LFxuICBzZWN1cmVGaWVsZHM6IHt9LFxuICB0eXBlOiAnZW1haWwnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDbG91ZFJlY2VpdmVyRm9ybTogRkM8UHJvcHM+ID0gKHsgZXhpc3RpbmcsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaXNWYW5pbGxhQU0gPSBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICAvLyB0cmFuc2Zvcm0gcmVjZWl2ZXIgRFRPIHRvIGZvcm0gdmFsdWVzXG4gIGNvbnN0IFtleGlzdGluZ1ZhbHVlXSA9IHVzZU1lbW8oKCk6IFtSZWNlaXZlckZvcm1WYWx1ZXM8Q2xvdWRDaGFubmVsVmFsdWVzPiB8IHVuZGVmaW5lZCwgQ2xvdWRDaGFubmVsTWFwXSA9PiB7XG4gICAgaWYgKCFleGlzdGluZykge1xuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHt9XTtcbiAgICB9XG4gICAgcmV0dXJuIGNsb3VkUmVjZWl2ZXJUb0Zvcm1WYWx1ZXMoZXhpc3RpbmcsIGNsb3VkTm90aWZpZXJUeXBlcyk7XG4gIH0sIFtleGlzdGluZ10pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPENsb3VkQ2hhbm5lbFZhbHVlcz4pID0+IHtcbiAgICBjb25zdCBuZXdSZWNlaXZlciA9IGZvcm1WYWx1ZXNUb0Nsb3VkUmVjZWl2ZXIodmFsdWVzLCBkZWZhdWx0Q2hhbm5lbFZhbHVlcyk7XG4gICAgZGlzcGF0Y2goXG4gICAgICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oe1xuICAgICAgICBuZXdDb25maWc6IHVwZGF0ZUNvbmZpZ1dpdGhSZWNlaXZlcihjb25maWcsIG5ld1JlY2VpdmVyLCBleGlzdGluZz8ubmFtZSksXG4gICAgICAgIG9sZENvbmZpZzogY29uZmlnLFxuICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICAgICAgICBzdWNjZXNzTWVzc2FnZTogZXhpc3RpbmcgPyAnQ29udGFjdCBwb2ludCB1cGRhdGVkLicgOiAnQ29udGFjdCBwb2ludCBjcmVhdGVkLicsXG4gICAgICAgIHJlZGlyZWN0UGF0aDogJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB0YWtlblJlY2VpdmVyTmFtZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IGNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLnJlY2VpdmVycz8ubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSkuZmlsdGVyKChuYW1lKSA9PiBuYW1lICE9PSBleGlzdGluZz8ubmFtZSkgPz8gW10sXG4gICAgW2NvbmZpZywgZXhpc3RpbmddXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFpc1ZhbmlsbGFBTSAmJiAoXG4gICAgICAgIDxBbGVydCB0aXRsZT1cIkluZm9cIiBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgICAgICBOb3RlIHRoYXQgZW1wdHkgc3RyaW5nIHZhbHVlcyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggZ2xvYmFsIGRlZmF1bHRzIHdoZXJlIGFwcHJvcHJpYXRlLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIDxSZWNlaXZlckZvcm08Q2xvdWRDaGFubmVsVmFsdWVzPlxuICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtleGlzdGluZ1ZhbHVlfVxuICAgICAgICBub3RpZmllcnM9e2Nsb3VkTm90aWZpZXJUeXBlc31cbiAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgZGVmYXVsdEl0ZW09e2RlZmF1bHRDaGFubmVsVmFsdWVzfVxuICAgICAgICB0YWtlblJlY2VpdmVyTmFtZXM9e3Rha2VuUmVjZWl2ZXJOYW1lc31cbiAgICAgICAgY29tbW9uU2V0dGluZ3NDb21wb25lbnQ9e0Nsb3VkQ29tbW9uQ2hhbm5lbFNldHRpbmdzfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEljb25TaXplLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDb2xsYXBzZVRvZ2dsZSB9IGZyb20gJy4uLy4uL0NvbGxhcHNlVG9nZ2xlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc2l6ZT86IEljb25TaXplO1xufVxuXG5leHBvcnQgY29uc3QgQ29sbGFwc2libGVTZWN0aW9uOiBGQzxQcm9wcz4gPSAoeyBsYWJlbCwgZGVzY3JpcHRpb24sIGNoaWxkcmVuLCBjbGFzc05hbWUsIHNpemUgPSAneGwnIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbaXNDb2xsYXBzZWQsIHNldElzQ29sbGFwc2VkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IHRvZ2dsZUNvbGxhcHNlID0gKCkgPT4gc2V0SXNDb2xsYXBzZWQoIWlzQ29sbGFwc2VkKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMud3JhcHBlciwgY2xhc3NOYW1lKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9IG9uQ2xpY2s9e3RvZ2dsZUNvbGxhcHNlfT5cbiAgICAgICAgPENvbGxhcHNlVG9nZ2xlIGNsYXNzTmFtZT17c3R5bGVzLmNhcmV0fSBzaXplPXtzaXplfSBvblRvZ2dsZT17dG9nZ2xlQ29sbGFwc2V9IGlzQ29sbGFwc2VkPXtpc0NvbGxhcHNlZH0gLz5cbiAgICAgICAgPGg2PntsYWJlbH08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzQ29sbGFwc2VkID8gc3R5bGVzLmhpZGRlbiA6IHVuZGVmaW5lZH0+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgY2FyZXQ6IGNzc2BcbiAgICBtYXJnaW4tbGVmdDogLSR7dGhlbWUuc3BhY2luZygwLjUpfTsgLy8gbWFrZSBpdCBhbGlnbiB3aXRoIGZpZWxkcyBkZXNwaXRlIGljb24gc2l6ZVxuICBgLFxuICBoZWFkaW5nOiBjc3NgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGg2IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gIGAsXG4gIGhpZGRlbjogY3NzYFxuICAgIGRpc3BsYXk6IG5vbmU7XG4gIGAsXG4gIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyfTtcbiAgICBtYXJnaW46IDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgQ2hlY2tib3gsIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDb21tb25TZXR0aW5nc0NvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVjZWl2ZXItZm9ybSc7XG5cbmV4cG9ydCBjb25zdCBHcmFmYW5hQ29tbW9uQ2hhbm5lbFNldHRpbmdzOiBGQzxDb21tb25TZXR0aW5nc0NvbXBvbmVudFByb3BzPiA9ICh7IHBhdGhQcmVmaXgsIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHtwYXRoUHJlZml4fWRpc2FibGVSZXNvbHZlTWVzc2FnZWApfVxuICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZSByZXNvbHZlZCBtZXNzYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpc2FibGUgdGhlIHJlc29sdmUgbWVzc2FnZSBbT0tdIHRoYXQgaXMgc2VudCB3aGVuIGFsZXJ0aW5nIHN0YXRlIHJldHVybnMgdG8gZmFsc2VcIlxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgTG9hZGluZ1BsYWNlaG9sZGVyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHtcbiAgQWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnLFxuICBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnLFxuICBSZWNlaXZlcixcbiAgVGVzdFJlY2VpdmVyc0FsZXJ0LFxufSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHtcbiAgZmV0Y2hHcmFmYW5hTm90aWZpZXJzQWN0aW9uLFxuICB0ZXN0UmVjZWl2ZXJzQWN0aW9uLFxuICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24sXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgR3JhZmFuYUNoYW5uZWxWYWx1ZXMsIFJlY2VpdmVyRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3JlY2VpdmVyLWZvcm0nO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHtcbiAgZm9ybUNoYW5uZWxWYWx1ZXNUb0dyYWZhbmFDaGFubmVsQ29uZmlnLFxuICBmb3JtVmFsdWVzVG9HcmFmYW5hUmVjZWl2ZXIsXG4gIGdyYWZhbmFSZWNlaXZlclRvRm9ybVZhbHVlcyxcbiAgdXBkYXRlQ29uZmlnV2l0aFJlY2VpdmVyLFxufSBmcm9tICcuLi8uLi8uLi91dGlscy9yZWNlaXZlci1mb3JtJztcblxuaW1wb3J0IHsgR3JhZmFuYUNvbW1vbkNoYW5uZWxTZXR0aW5ncyB9IGZyb20gJy4vR3JhZmFuYUNvbW1vbkNoYW5uZWxTZXR0aW5ncyc7XG5pbXBvcnQgeyBSZWNlaXZlckZvcm0gfSBmcm9tICcuL1JlY2VpdmVyRm9ybSc7XG5pbXBvcnQgeyBUZXN0Q29udGFjdFBvaW50TW9kYWwgfSBmcm9tICcuL1Rlc3RDb250YWN0UG9pbnRNb2RhbCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIGV4aXN0aW5nPzogUmVjZWl2ZXI7XG59XG5cbmNvbnN0IGRlZmF1bHRDaGFubmVsVmFsdWVzOiBHcmFmYW5hQ2hhbm5lbFZhbHVlcyA9IE9iamVjdC5mcmVlemUoe1xuICBfX2lkOiAnJyxcbiAgc2VjdXJlU2V0dGluZ3M6IHt9LFxuICBzZXR0aW5nczoge30sXG4gIHNlY3VyZUZpZWxkczoge30sXG4gIGRpc2FibGVSZXNvbHZlTWVzc2FnZTogZmFsc2UsXG4gIHR5cGU6ICdlbWFpbCcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdyYWZhbmFSZWNlaXZlckZvcm06IEZDPFByb3BzPiA9ICh7IGV4aXN0aW5nLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBjb25maWcgfSkgPT4ge1xuICBjb25zdCBncmFmYW5hTm90aWZpZXJzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ncmFmYW5hTm90aWZpZXJzKTtcbiAgY29uc3QgW3Rlc3RDaGFubmVsVmFsdWVzLCBzZXRUZXN0Q2hhbm5lbFZhbHVlc10gPSB1c2VTdGF0ZTxHcmFmYW5hQ2hhbm5lbFZhbHVlcz4oKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIShncmFmYW5hTm90aWZpZXJzLnJlc3VsdCB8fCBncmFmYW5hTm90aWZpZXJzLmxvYWRpbmcpKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaEdyYWZhbmFOb3RpZmllcnNBY3Rpb24oKSk7XG4gICAgfVxuICB9LCBbZ3JhZmFuYU5vdGlmaWVycywgZGlzcGF0Y2hdKTtcblxuICAvLyB0cmFuc2Zvcm0gcmVjZWl2ZXIgRFRPIHRvIGZvcm0gdmFsdWVzXG4gIGNvbnN0IFtleGlzdGluZ1ZhbHVlLCBpZDJvcmlnaW5hbF0gPSB1c2VNZW1vKCgpOiBbXG4gICAgUmVjZWl2ZXJGb3JtVmFsdWVzPEdyYWZhbmFDaGFubmVsVmFsdWVzPiB8IHVuZGVmaW5lZCxcbiAgICBSZWNvcmQ8c3RyaW5nLCBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnPlxuICBdID0+IHtcbiAgICBpZiAoIWV4aXN0aW5nIHx8ICFncmFmYW5hTm90aWZpZXJzLnJlc3VsdCkge1xuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHt9XTtcbiAgICB9XG4gICAgcmV0dXJuIGdyYWZhbmFSZWNlaXZlclRvRm9ybVZhbHVlcyhleGlzdGluZywgZ3JhZmFuYU5vdGlmaWVycy5yZXN1bHQhKTtcbiAgfSwgW2V4aXN0aW5nLCBncmFmYW5hTm90aWZpZXJzLnJlc3VsdF0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPEdyYWZhbmFDaGFubmVsVmFsdWVzPikgPT4ge1xuICAgIGNvbnN0IG5ld1JlY2VpdmVyID0gZm9ybVZhbHVlc1RvR3JhZmFuYVJlY2VpdmVyKHZhbHVlcywgaWQyb3JpZ2luYWwsIGRlZmF1bHRDaGFubmVsVmFsdWVzKTtcbiAgICBkaXNwYXRjaChcbiAgICAgIHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbih7XG4gICAgICAgIG5ld0NvbmZpZzogdXBkYXRlQ29uZmlnV2l0aFJlY2VpdmVyKGNvbmZpZywgbmV3UmVjZWl2ZXIsIGV4aXN0aW5nPy5uYW1lKSxcbiAgICAgICAgb2xkQ29uZmlnOiBjb25maWcsXG4gICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiBleGlzdGluZyA/ICdDb250YWN0IHBvaW50IHVwZGF0ZWQuJyA6ICdDb250YWN0IHBvaW50IGNyZWF0ZWQnLFxuICAgICAgICByZWRpcmVjdFBhdGg6ICcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucycsXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgb25UZXN0Q2hhbm5lbCA9ICh2YWx1ZXM6IEdyYWZhbmFDaGFubmVsVmFsdWVzKSA9PiB7XG4gICAgc2V0VGVzdENoYW5uZWxWYWx1ZXModmFsdWVzKTtcbiAgfTtcblxuICBjb25zdCB0ZXN0Tm90aWZpY2F0aW9uID0gKGFsZXJ0PzogVGVzdFJlY2VpdmVyc0FsZXJ0KSA9PiB7XG4gICAgaWYgKHRlc3RDaGFubmVsVmFsdWVzKSB7XG4gICAgICBjb25zdCBleGlzdGluZzogR3JhZmFuYU1hbmFnZWRSZWNlaXZlckNvbmZpZyB8IHVuZGVmaW5lZCA9IGlkMm9yaWdpbmFsW3Rlc3RDaGFubmVsVmFsdWVzLl9faWRdO1xuICAgICAgY29uc3QgY2hhbiA9IGZvcm1DaGFubmVsVmFsdWVzVG9HcmFmYW5hQ2hhbm5lbENvbmZpZyh0ZXN0Q2hhbm5lbFZhbHVlcywgZGVmYXVsdENoYW5uZWxWYWx1ZXMsICd0ZXN0JywgZXhpc3RpbmcpO1xuXG4gICAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICAgICAgICByZWNlaXZlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAndGVzdCcsXG4gICAgICAgICAgICBncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlnczogW2NoYW5dLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGFsZXJ0LFxuICAgICAgfTtcblxuICAgICAgZGlzcGF0Y2godGVzdFJlY2VpdmVyc0FjdGlvbihwYXlsb2FkKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRha2VuUmVjZWl2ZXJOYW1lcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gY29uZmlnLmFsZXJ0bWFuYWdlcl9jb25maWcucmVjZWl2ZXJzPy5tYXAoKHsgbmFtZSB9KSA9PiBuYW1lKS5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09IGV4aXN0aW5nPy5uYW1lKSA/PyBbXSxcbiAgICBbY29uZmlnLCBleGlzdGluZ11cbiAgKTtcblxuICBpZiAoZ3JhZmFuYU5vdGlmaWVycy5yZXN1bHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFJlY2VpdmVyRm9ybTxHcmFmYW5hQ2hhbm5lbFZhbHVlcz5cbiAgICAgICAgICBjb25maWc9e2NvbmZpZ31cbiAgICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAgICAgaW5pdGlhbFZhbHVlcz17ZXhpc3RpbmdWYWx1ZX1cbiAgICAgICAgICBvblRlc3RDaGFubmVsPXtvblRlc3RDaGFubmVsfVxuICAgICAgICAgIG5vdGlmaWVycz17Z3JhZmFuYU5vdGlmaWVycy5yZXN1bHR9XG4gICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICBkZWZhdWx0SXRlbT17ZGVmYXVsdENoYW5uZWxWYWx1ZXN9XG4gICAgICAgICAgdGFrZW5SZWNlaXZlck5hbWVzPXt0YWtlblJlY2VpdmVyTmFtZXN9XG4gICAgICAgICAgY29tbW9uU2V0dGluZ3NDb21wb25lbnQ9e0dyYWZhbmFDb21tb25DaGFubmVsU2V0dGluZ3N9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXN0Q29udGFjdFBvaW50TW9kYWxcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFRlc3RDaGFubmVsVmFsdWVzKHVuZGVmaW5lZCl9XG4gICAgICAgICAgaXNPcGVuPXshIXRlc3RDaGFubmVsVmFsdWVzfVxuICAgICAgICAgIG9uVGVzdD17KGFsZXJ0KSA9PiB0ZXN0Tm90aWZpY2F0aW9uKGFsZXJ0KX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcgbm90aWZpZXJzLi4uXCIgLz47XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybSwgRm9ybVByb3ZpZGVyLCBGaWVsZEVycm9ycywgVmFsaWRhdGUgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBGaWVsZCwgSW5wdXQsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VBcHBOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyB1c2VDbGVhbnVwIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cCc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgeyBOb3RpZmllckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IHVzZUNvbnRyb2xsZWRGaWVsZEFycmF5IH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlQ29udHJvbGxlZEZpZWxkQXJyYXknO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBDaGFubmVsVmFsdWVzLCBDb21tb25TZXR0aW5nc0NvbXBvbmVudFR5cGUsIFJlY2VpdmVyRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3JlY2VpdmVyLWZvcm0nO1xuaW1wb3J0IHsgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IG1ha2VBTUxpbmsgfSBmcm9tICcuLi8uLi8uLi91dGlscy9taXNjJztcblxuaW1wb3J0IHsgQ2hhbm5lbFN1YkZvcm0gfSBmcm9tICcuL0NoYW5uZWxTdWJGb3JtJztcbmltcG9ydCB7IERlbGV0ZWRTdWJGb3JtIH0gZnJvbSAnLi9maWVsZHMvRGVsZXRlZFN1YmZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHM8UiBleHRlbmRzIENoYW5uZWxWYWx1ZXM+IHtcbiAgY29uZmlnOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWc7XG4gIG5vdGlmaWVyczogTm90aWZpZXJEVE9bXTtcbiAgZGVmYXVsdEl0ZW06IFI7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgb25UZXN0Q2hhbm5lbD86IChjaGFubmVsOiBSKSA9PiB2b2lkO1xuICBvblN1Ym1pdDogKHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPFI+KSA9PiB2b2lkO1xuICB0YWtlblJlY2VpdmVyTmFtZXM6IHN0cmluZ1tdOyAvLyB3aWxsIHZhbGlkYXRlIHRoYXQgdXNlciBlbnRlcmVkIHJlY2VpdmVyIG5hbWUgaXMgbm90IG9uZSBvZiB0aGVzZVxuICBjb21tb25TZXR0aW5nc0NvbXBvbmVudDogQ29tbW9uU2V0dGluZ3NDb21wb25lbnRUeXBlO1xuICBpbml0aWFsVmFsdWVzPzogUmVjZWl2ZXJGb3JtVmFsdWVzPFI+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVjZWl2ZXJGb3JtPFIgZXh0ZW5kcyBDaGFubmVsVmFsdWVzPih7XG4gIGNvbmZpZyxcbiAgaW5pdGlhbFZhbHVlcyxcbiAgZGVmYXVsdEl0ZW0sXG4gIG5vdGlmaWVycyxcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbiAgb25TdWJtaXQsXG4gIG9uVGVzdENoYW5uZWwsXG4gIHRha2VuUmVjZWl2ZXJOYW1lcyxcbiAgY29tbW9uU2V0dGluZ3NDb21wb25lbnQsXG59OiBQcm9wczxSPik6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgcmVhZE9ubHkgPSBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IGluaXRpYWxWYWx1ZXMgfHwge1xuICAgIG5hbWU6ICcnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIC4uLmRlZmF1bHRJdGVtLFxuICAgICAgICBfX2lkOiBTdHJpbmcoTWF0aC5yYW5kb20oKSksXG4gICAgICB9IGFzIGFueSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IGZvcm1BUEkgPSB1c2VGb3JtPFJlY2VpdmVyRm9ybVZhbHVlczxSPj4oe1xuICAgIC8vIG1ha2luZyBhIGNvcHkgaGVyZSBiZWFjdXNlIHJlYWN0LWhvb2stZm9ybSB3aWxsIG11dGF0ZSB0aGVzZSwgYW5kIGJyZWFrIGlmIHRoZSBvYmplY3QgaXMgZnJvemVuLiBmb3IgcmVhbC5cbiAgICBkZWZhdWx0VmFsdWVzOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRlZmF1bHRWYWx1ZXMpKSxcbiAgfSk7XG5cbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5zYXZlQU1Db25maWcpO1xuXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zYXZlQU1Db25maWcpO1xuXG4gIGNvbnN0IHtcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVnaXN0ZXIsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICAgIGdldFZhbHVlcyxcbiAgfSA9IGZvcm1BUEk7XG5cbiAgY29uc3QgeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0gPSB1c2VDb250cm9sbGVkRmllbGRBcnJheTxSPih7IG5hbWU6ICdpdGVtcycsIGZvcm1BUEksIHNvZnREZWxldGU6IHRydWUgfSk7XG5cbiAgY29uc3QgdmFsaWRhdGVOYW1lSXNBdmFpbGFibGU6IFZhbGlkYXRlPHN0cmluZz4gPSB1c2VDYWxsYmFjayhcbiAgICAobmFtZTogc3RyaW5nKSA9PlxuICAgICAgdGFrZW5SZWNlaXZlck5hbWVzLm1hcCgobmFtZSkgPT4gbmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSkuaW5jbHVkZXMobmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgPyAnQW5vdGhlciByZWNlaXZlciB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nXG4gICAgICAgIDogdHJ1ZSxcbiAgICBbdGFrZW5SZWNlaXZlck5hbWVzXVxuICApO1xuXG4gIGNvbnN0IHN1Ym1pdENhbGxiYWNrID0gKHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPFI+KSA9PiB7XG4gICAgb25TdWJtaXQoe1xuICAgICAgLi4udmFsdWVzLFxuICAgICAgaXRlbXM6IHZhbHVlcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLl9fZGVsZXRlZCksXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25JbnZhbGlkID0gKCkgPT4ge1xuICAgIG5vdGlmeUFwcC5lcnJvcignVGhlcmUgYXJlIGVycm9ycyBpbiB0aGUgZm9ybS4gUGxlYXNlIGNvcnJlY3QgdGhlbSBhbmQgdHJ5IGFnYWluIScpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Qcm92aWRlciB7Li4uZm9ybUFQSX0+XG4gICAgICB7IWNvbmZpZy5hbGVydG1hbmFnZXJfY29uZmlnLnJvdXRlICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwid2FybmluZ1wiIHRpdGxlPVwiQXR0ZW50aW9uXCI+XG4gICAgICAgICAgQmVjYXVzZSB0aGVyZSBpcyBubyBkZWZhdWx0IHBvbGljeSBjb25maWd1cmVkIHlldCwgdGhpcyBjb250YWN0IHBvaW50IHdpbGwgYXV0b21hdGljYWxseSBiZSBzZXQgYXMgZGVmYXVsdC5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICl9XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdENhbGxiYWNrLCBvbkludmFsaWQpfT5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICAgIHtyZWFkT25seSA/ICdDb250YWN0IHBvaW50JyA6IGluaXRpYWxWYWx1ZXMgPyAnVXBkYXRlIGNvbnRhY3QgcG9pbnQnIDogJ0NyZWF0ZSBjb250YWN0IHBvaW50J31cbiAgICAgICAgPC9oND5cbiAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnMubmFtZSAmJiBlcnJvcnMubmFtZS5tZXNzYWdlfSByZXF1aXJlZD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiAnTmFtZSBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgIHZhbGlkYXRlOiB7IG5hbWVJc0F2YWlsYWJsZTogdmFsaWRhdGVOYW1lSXNBdmFpbGFibGUgfSxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgd2lkdGg9ezM5fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgcGF0aFByZWZpeCA9IGBpdGVtcy4ke2luZGV4fS5gO1xuICAgICAgICAgIGlmIChmaWVsZC5fX2RlbGV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiA8RGVsZXRlZFN1YkZvcm0ga2V5PXtmaWVsZC5fX2lkfSBwYXRoUHJlZml4PXtwYXRoUHJlZml4fSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgaW5pdGlhbEl0ZW0gPSBpbml0aWFsVmFsdWVzPy5pdGVtcy5maW5kKCh7IF9faWQgfSkgPT4gX19pZCA9PT0gZmllbGQuX19pZCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDaGFubmVsU3ViRm9ybTxSPlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVzPXtmaWVsZH1cbiAgICAgICAgICAgICAga2V5PXtmaWVsZC5fX2lkfVxuICAgICAgICAgICAgICBvbkR1cGxpY2F0ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXM6IFIgPSBnZXRWYWx1ZXMoKS5pdGVtc1tpbmRleF07XG4gICAgICAgICAgICAgICAgYXBwZW5kKHsgLi4uY3VycmVudFZhbHVlcywgX19pZDogU3RyaW5nKE1hdGgucmFuZG9tKCkpIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvblRlc3Q9e1xuICAgICAgICAgICAgICAgIG9uVGVzdENoYW5uZWxcbiAgICAgICAgICAgICAgICAgID8gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXM6IFIgPSBnZXRWYWx1ZXMoKS5pdGVtc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgb25UZXN0Q2hhbm5lbChjdXJyZW50VmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gcmVtb3ZlKGluZGV4KX1cbiAgICAgICAgICAgICAgcGF0aFByZWZpeD17cGF0aFByZWZpeH1cbiAgICAgICAgICAgICAgbm90aWZpZXJzPXtub3RpZmllcnN9XG4gICAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17aW5pdGlhbEl0ZW0/LnNlY3VyZUZpZWxkc31cbiAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnM/Lml0ZW1zPy5baW5kZXhdIGFzIEZpZWxkRXJyb3JzPFI+fVxuICAgICAgICAgICAgICBjb21tb25TZXR0aW5nc0NvbXBvbmVudD17Y29tbW9uU2V0dGluZ3NDb21wb25lbnR9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDw+XG4gICAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBlbmQoeyAuLi5kZWZhdWx0SXRlbSwgX19pZDogU3RyaW5nKE1hdGgucmFuZG9tKCkpIH0gYXMgUil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5ldyBjb250YWN0IHBvaW50IHR5cGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RydWV9IGljb249XCJmYSBmYS1zcGlubmVyXCIgdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgU2F2aW5nLi4uXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHshbG9hZGluZyAmJiA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIGNvbnRhY3QgcG9pbnQ8L0J1dHRvbj59XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBmaWxsPVwib3V0bGluZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImNhbmNlbC1idXR0b25cIlxuICAgICAgICAgICAgICBocmVmPXttYWtlQU1MaW5rKCdhbGVydGluZy9ub3RpZmljYXRpb25zJywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0Zvcm1Qcm92aWRlcj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBoZWFkaW5nOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoNCwgMCl9O1xuICBgLFxuICBidXR0b25zOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDQpfTtcblxuICAgICYgPiAqICsgKiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBGb3JtUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBMYWJlbCwgdXNlU3R5bGVzMiwgUmFkaW9CdXR0b25Hcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFRlc3RSZWNlaXZlcnNBbGVydCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcbmltcG9ydCB7IEFubm90YXRpb25zLCBMYWJlbHMgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgQW5ub3RhdGlvbnNGaWVsZCBmcm9tICcuLi8uLi9ydWxlLWVkaXRvci9Bbm5vdGF0aW9uc0ZpZWxkJztcbmltcG9ydCBMYWJlbHNGaWVsZCBmcm9tICcuLi8uLi9ydWxlLWVkaXRvci9MYWJlbHNGaWVsZCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xuICBvblRlc3Q6IChhbGVydD86IFRlc3RSZWNlaXZlcnNBbGVydCkgPT4gdm9pZDtcbn1cblxudHlwZSBBbm5vRmllbGQgPSB7XG4gIGtleTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xufTtcblxuaW50ZXJmYWNlIEZvcm1GaWVsZHMge1xuICBhbm5vdGF0aW9uczogQW5ub0ZpZWxkW107XG4gIGxhYmVsczogQW5ub0ZpZWxkW107XG59XG5cbmVudW0gTm90aWZpY2F0aW9uVHlwZSB7XG4gIHByZWRlZmluZWQgPSAnUHJlZGVmaW5lZCcsXG4gIGN1c3RvbSA9ICdDdXN0b20nLFxufVxuXG5jb25zdCBub3RpZmljYXRpb25PcHRpb25zID0gT2JqZWN0LnZhbHVlcyhOb3RpZmljYXRpb25UeXBlKS5tYXAoKHZhbHVlKSA9PiAoeyBsYWJlbDogdmFsdWUsIHZhbHVlOiB2YWx1ZSB9KSk7XG5cbmNvbnN0IGRlZmF1bHRWYWx1ZXM6IEZvcm1GaWVsZHMgPSB7XG4gIGFubm90YXRpb25zOiBbeyBrZXk6ICcnLCB2YWx1ZTogJycgfV0sXG4gIGxhYmVsczogW3sga2V5OiAnJywgdmFsdWU6ICcnIH1dLFxufTtcblxuZXhwb3J0IGNvbnN0IFRlc3RDb250YWN0UG9pbnRNb2RhbCA9ICh7IGlzT3Blbiwgb25EaXNtaXNzLCBvblRlc3QgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW25vdGlmaWNhdGlvblR5cGUsIHNldE5vdGlmaWNhdGlvblR5cGVdID0gdXNlU3RhdGU8Tm90aWZpY2F0aW9uVHlwZT4oTm90aWZpY2F0aW9uVHlwZS5wcmVkZWZpbmVkKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBmb3JtTWV0aG9kcyA9IHVzZUZvcm08Rm9ybUZpZWxkcz4oeyBkZWZhdWx0VmFsdWVzLCBtb2RlOiAnb25CbHVyJyB9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBGb3JtRmllbGRzKSA9PiB7XG4gICAgaWYgKG5vdGlmaWNhdGlvblR5cGUgPT09IE5vdGlmaWNhdGlvblR5cGUuY3VzdG9tKSB7XG4gICAgICBjb25zdCBhbGVydCA9IHtcbiAgICAgICAgYW5ub3RhdGlvbnM6IGRhdGEuYW5ub3RhdGlvbnNcbiAgICAgICAgICAuZmlsdGVyKCh7IGtleSwgdmFsdWUgfSkgPT4gISFrZXkgJiYgISF2YWx1ZSlcbiAgICAgICAgICAucmVkdWNlKChhY2MsIHsga2V5LCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5hY2MsIFtrZXldOiB2YWx1ZSB9O1xuICAgICAgICAgIH0sIHt9IGFzIEFubm90YXRpb25zKSxcbiAgICAgICAgbGFiZWxzOiBkYXRhLmxhYmVsc1xuICAgICAgICAgIC5maWx0ZXIoKHsga2V5LCB2YWx1ZSB9KSA9PiAhIWtleSAmJiAhIXZhbHVlKVxuICAgICAgICAgIC5yZWR1Y2UoKGFjYywgeyBrZXksIHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLmFjYywgW2tleV06IHZhbHVlIH07XG4gICAgICAgICAgfSwge30gYXMgTGFiZWxzKSxcbiAgICAgIH07XG4gICAgICBvblRlc3QoYWxlcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvblRlc3QoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgb25EaXNtaXNzPXtvbkRpc21pc3N9IGlzT3Blbj17aXNPcGVufSB0aXRsZT17J1Rlc3QgY29udGFjdCBwb2ludCd9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgPExhYmVsPk5vdGlmaWNhdGlvbiBtZXNzYWdlPC9MYWJlbD5cbiAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcbiAgICAgICAgICBvcHRpb25zPXtub3RpZmljYXRpb25PcHRpb25zfVxuICAgICAgICAgIHZhbHVlPXtub3RpZmljYXRpb25UeXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldE5vdGlmaWNhdGlvblR5cGUodmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxGb3JtUHJvdmlkZXIgey4uLmZvcm1NZXRob2RzfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm1NZXRob2RzLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgIHtub3RpZmljYXRpb25UeXBlID09PSBOb3RpZmljYXRpb25UeXBlLnByZWRlZmluZWQgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgWW91IHdpbGwgc2VuZCBhIHRlc3Qgbm90aWZpY2F0aW9uIHRoYXQgdXNlcyBhIHByZWRlZmluZWQgYWxlcnQuIElmIHlvdSBoYXZlIGRlZmluZWQgYSBjdXN0b20gdGVtcGxhdGUgb3JcbiAgICAgICAgICAgICAgbWVzc2FnZSwgZm9yIGJldHRlciByZXN1bHRzIHN3aXRjaCB0byA8c3Ryb25nPmN1c3RvbTwvc3Ryb25nPiBub3RpZmljYXRpb24gbWVzc2FnZSwgZnJvbSBhYm92ZS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge25vdGlmaWNhdGlvblR5cGUgPT09IE5vdGlmaWNhdGlvblR5cGUuY3VzdG9tICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgWW91IHdpbGwgc2VuZCBhIHRlc3Qgbm90aWZpY2F0aW9uIHRoYXQgdXNlcyB0aGUgYW5ub3RhdGlvbnMgZGVmaW5lZCBiZWxvdy4gVGhpcyBpcyBhIGdvb2Qgb3B0aW9uIGlmIHlvdVxuICAgICAgICAgICAgICAgIHVzZSBjdXN0b20gdGVtcGxhdGVzIGFuZCBtZXNzYWdlcy5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgPEFubm90YXRpb25zRmllbGQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgPExhYmVsc0ZpZWxkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIHRlc3Qgbm90aWZpY2F0aW9uPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvRm9ybVByb3ZpZGVyPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgc2VjdGlvbjogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhdGhQcmVmaXg6IHN0cmluZztcbn1cblxuLy8gd2UgY2FuJ3QgZHJvcCB0aGUgZGVsZXRlZCBpdGVtIGZyb20gbGlzdCBlbnRpcmVseSBiZWNhdXNlXG4vLyB0aGVyZSB3aWxsIGJlIGEgcmVjZSBjb25kaXRpb24gd2l0aCByZWdpc3Rlci91bnJlZ2lzdGVyIGNhbGxzIGluIHJlYWN0LWhvb2stZm9ybVxuLy8gYW5kIGZpZWxkcyB3aWxsIGJlY29tZSByYW5kb21seSBlcnJvbmVvdXNseSB1bnJlZ2lzdGVyZWRcbmV4cG9ydCBmdW5jdGlvbiBEZWxldGVkU3ViRm9ybSh7IHBhdGhQcmVmaXggfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG5cbiAgLy8gcmVxdWlyZWQgdG8gYmUgcmVnaXN0ZXJlZCBvciByZWFjdC1ob29rLWZvcm0gd2lsbCByYW5kb21seSBkcm9wIHRoZSB2YWx1ZXMgd2hlbiBpdCBmZWVscyBsaWtlIGl0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVnaXN0ZXIoYCR7cGF0aFByZWZpeH0uX19pZGApO1xuICAgIHJlZ2lzdGVyKGAke3BhdGhQcmVmaXh9Ll9fZGVsZXRlZGApO1xuICB9LCBbcmVnaXN0ZXIsIHBhdGhQcmVmaXhdKTtcblxuICByZXR1cm4gPD48Lz47XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBBY3Rpb25JY29uIH0gZnJvbSAnLi4vLi4vLi4vcnVsZXMvQWN0aW9uSWNvbic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBvbkNoYW5nZTogKHZhbHVlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgS2V5VmFsdWVNYXBJbnB1dDogRkM8UHJvcHM+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCByZWFkT25seSA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbcGFpcnMsIHNldFBhaXJzXSA9IHVzZVN0YXRlKHJlY29yZFRvUGFpcnModmFsdWUpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHNldFBhaXJzKHJlY29yZFRvUGFpcnModmFsdWUpKSwgW3ZhbHVlXSk7XG5cbiAgY29uc3QgZW1pdENoYW5nZSA9IChwYWlyczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT4pID0+IHtcbiAgICBvbkNoYW5nZShwYWlyc1RvUmVjb3JkKHBhaXJzKSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbmV3UGFpcnMgPSBwYWlycy5zbGljZSgpO1xuICAgIGNvbnN0IHJlbW92ZWQgPSBuZXdQYWlycy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgIHNldFBhaXJzKG5ld1BhaXJzKTtcbiAgICBpZiAocmVtb3ZlZFswXSkge1xuICAgICAgZW1pdENoYW5nZShuZXdQYWlycyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVBhaXIgPSAodmFsdWVzOiBbc3RyaW5nLCBzdHJpbmddLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgb2xkID0gcGFpcnNbaW5kZXhdO1xuICAgIGNvbnN0IG5ld1BhaXJzID0gcGFpcnMubWFwKChwYWlyLCBpKSA9PiAoaSA9PT0gaW5kZXggPyB2YWx1ZXMgOiBwYWlyKSk7XG4gICAgc2V0UGFpcnMobmV3UGFpcnMpO1xuICAgIGlmICh2YWx1ZXNbMF0gfHwgb2xkWzBdKSB7XG4gICAgICBlbWl0Q2hhbmdlKG5ld1BhaXJzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyEhcGFpcnMubGVuZ3RoICYmIChcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgPHRoPlZhbHVlPC90aD5cbiAgICAgICAgICAgICAgeyFyZWFkT25seSAmJiA8dGg+PC90aD59XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3BhaXJzLm1hcCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVQYWlyKFtlLmN1cnJlbnRUYXJnZXQudmFsdWUsIHZhbHVlXSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB1cGRhdGVQYWlyKFtrZXksIGUuY3VycmVudFRhcmdldC52YWx1ZV0sIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEFjdGlvbkljb24gaWNvbj1cInRyYXNoLWFsdFwiIHRvb2x0aXA9XCJkZWxldGVcIiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKGluZGV4KX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICApfVxuICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGFpcnMoWy4uLnBhaXJzLCBbJycsICcnXV0pfVxuICAgICAgICA+XG4gICAgICAgICAgQWRkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgYWRkQnV0dG9uOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgdGFibGU6IGNzc2BcbiAgICB0Ym9keSB0ZCB7XG4gICAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZygxKX0gJHt0aGVtZS5zcGFjaW5nKDEpfSAwO1xuICAgIH1cbiAgYCxcbn0pO1xuXG5jb25zdCBwYWlyc1RvUmVjb3JkID0gKHBhaXJzOiBBcnJheTxbc3RyaW5nLCBzdHJpbmddPik6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPT4ge1xuICBjb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgcGFpcnMpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZWNvcmRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVjb3JkO1xufTtcblxuY29uc3QgcmVjb3JkVG9QYWlycyA9IChvYmo/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogQXJyYXk8W3N0cmluZywgc3RyaW5nXT4gPT4gT2JqZWN0LmVudHJpZXMob2JqID8/IHt9KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIEZpZWxkRXJyb3IsIERlZXBNYXAgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBDaGVja2JveCwgRmllbGQsIElucHV0LCBJbnB1dENvbnRyb2wsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgS2V5VmFsdWVNYXBJbnB1dCB9IGZyb20gJy4vS2V5VmFsdWVNYXBJbnB1dCc7XG5pbXBvcnQgeyBTdHJpbmdBcnJheUlucHV0IH0gZnJvbSAnLi9TdHJpbmdBcnJheUlucHV0JztcbmltcG9ydCB7IFN1YmZvcm1BcnJheUZpZWxkIH0gZnJvbSAnLi9TdWJmb3JtQXJyYXlGaWVsZCc7XG5pbXBvcnQgeyBTdWJmb3JtRmllbGQgfSBmcm9tICcuL1N1YmZvcm1GaWVsZCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRlZmF1bHRWYWx1ZTogYW55O1xuICBvcHRpb246IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb247XG4gIGludmFsaWQ/OiBib29sZWFuO1xuICBwYXRoUHJlZml4OiBzdHJpbmc7XG4gIHBhdGhTdWZmaXg/OiBzdHJpbmc7XG4gIGVycm9yPzogRmllbGRFcnJvciB8IERlZXBNYXA8YW55LCBGaWVsZEVycm9yPjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgT3B0aW9uRmllbGQ6IEZDPFByb3BzPiA9ICh7XG4gIG9wdGlvbixcbiAgaW52YWxpZCxcbiAgcGF0aFByZWZpeCxcbiAgcGF0aFN1ZmZpeCA9ICcnLFxuICBlcnJvcixcbiAgZGVmYXVsdFZhbHVlLFxuICByZWFkT25seSA9IGZhbHNlLFxufSkgPT4ge1xuICBjb25zdCBvcHRpb25QYXRoID0gYCR7cGF0aFByZWZpeH0ke3BhdGhTdWZmaXh9YDtcblxuICBpZiAob3B0aW9uLmVsZW1lbnQgPT09ICdzdWJmb3JtJykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3ViZm9ybUZpZWxkXG4gICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICBlcnJvcnM9e2Vycm9yIGFzIERlZXBNYXA8YW55LCBGaWVsZEVycm9yPiB8IHVuZGVmaW5lZH1cbiAgICAgICAgcGF0aFByZWZpeD17b3B0aW9uUGF0aH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICBpZiAob3B0aW9uLmVsZW1lbnQgPT09ICdzdWJmb3JtX2FycmF5Jykge1xuICAgIHJldHVybiAoXG4gICAgICA8U3ViZm9ybUFycmF5RmllbGRcbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICBkZWZhdWx0VmFsdWVzPXtkZWZhdWx0VmFsdWV9XG4gICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICBwYXRoUHJlZml4PXtvcHRpb25QYXRofVxuICAgICAgICBlcnJvcnM9e2Vycm9yIGFzIEFycmF5PERlZXBNYXA8YW55LCBGaWVsZEVycm9yPj4gfCB1bmRlZmluZWR9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RmllbGRcbiAgICAgIGxhYmVsPXtvcHRpb24uZWxlbWVudCAhPT0gJ2NoZWNrYm94JyA/IG9wdGlvbi5sYWJlbCA6IHVuZGVmaW5lZH1cbiAgICAgIGRlc2NyaXB0aW9uPXtvcHRpb24uZGVzY3JpcHRpb24gfHwgdW5kZWZpbmVkfVxuICAgICAgaW52YWxpZD17ISFlcnJvcn1cbiAgICAgIGVycm9yPXtlcnJvcj8ubWVzc2FnZX1cbiAgICA+XG4gICAgICA8T3B0aW9uSW5wdXRcbiAgICAgICAgaWQ9e2Ake29wdGlvblBhdGh9JHtvcHRpb24ucHJvcGVydHlOYW1lfWB9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFZhbHVlfVxuICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgcGF0aFByZWZpeD17b3B0aW9uUGF0aH1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICBwYXRoSW5kZXg9e3BhdGhQcmVmaXh9XG4gICAgICAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCBPcHRpb25JbnB1dDogRkM8UHJvcHMgJiB7IGlkOiBzdHJpbmc7IHBhdGhJbmRleD86IHN0cmluZyB9PiA9ICh7XG4gIG9wdGlvbixcbiAgaW52YWxpZCxcbiAgaWQsXG4gIHBhdGhQcmVmaXggPSAnJyxcbiAgcGF0aEluZGV4ID0gJycsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IHsgY29udHJvbCwgcmVnaXN0ZXIsIHVucmVnaXN0ZXIsIGdldFZhbHVlcyB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3QgbmFtZSA9IGAke3BhdGhQcmVmaXh9JHtvcHRpb24ucHJvcGVydHlOYW1lfWA7XG5cbiAgLy8gd29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWhvb2stZm9ybS9yZWFjdC1ob29rLWZvcm0vaXNzdWVzLzQ5OTMjaXNzdWVjb21tZW50LTgyOTAxMjUwNlxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgdW5yZWdpc3RlcihuYW1lLCB7IGtlZXBWYWx1ZTogZmFsc2UgfSk7XG4gICAgfSxcbiAgICBbdW5yZWdpc3RlciwgbmFtZV1cbiAgKTtcbiAgc3dpdGNoIChvcHRpb24uZWxlbWVudCkge1xuICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihuYW1lKX1cbiAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtvcHRpb24uZGVzY3JpcHRpb259XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHkgfHwgZGV0ZXJtaW5lUmVhZE9ubHkob3B0aW9uLCBnZXRWYWx1ZXMsIHBhdGhJbmRleCl9XG4gICAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICB0eXBlPXtvcHRpb24uaW5wdXRUeXBlfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihuYW1lLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogZGV0ZXJtaW5lUmVxdWlyZWQob3B0aW9uLCBnZXRWYWx1ZXMsIHBhdGhJbmRleCksXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHYpID0+IChvcHRpb24udmFsaWRhdGlvblJ1bGUgIT09ICcnID8gdmFsaWRhdGVPcHRpb24odiwgb3B0aW9uLnZhbGlkYXRpb25SdWxlKSA6IHRydWUpLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtvcHRpb24ucGxhY2Vob2xkZXJ9XG4gICAgICAgIC8+XG4gICAgICApO1xuXG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uLnNlbGVjdE9wdGlvbnMgPz8gdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZS52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAvPlxuICAgICAgKTtcblxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICB7Li4ucmVnaXN0ZXIobmFtZSwge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IG9wdGlvbi5yZXF1aXJlZCA/ICdSZXF1aXJlZCcgOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAodikgPT4gKG9wdGlvbi52YWxpZGF0aW9uUnVsZSAhPT0gJycgPyB2YWxpZGF0ZU9wdGlvbih2LCBvcHRpb24udmFsaWRhdGlvblJ1bGUpIDogdHJ1ZSksXG4gICAgICAgICAgfSl9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGNhc2UgJ3N0cmluZ19hcnJheSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyB2YWx1ZSwgb25DaGFuZ2UgfSB9KSA9PiAoXG4gICAgICAgICAgICA8U3RyaW5nQXJyYXlJbnB1dCByZWFkT25seT17cmVhZE9ubHl9IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICBjYXNlICdrZXlfdmFsdWVfbWFwJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHZhbHVlLCBvbkNoYW5nZSB9IH0pID0+IChcbiAgICAgICAgICAgIDxLZXlWYWx1ZU1hcElucHV0IHJlYWRPbmx5PXtyZWFkT25seX0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIC8+XG4gICAgICApO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0VsZW1lbnQgbm90IHN1cHBvcnRlZCcsIG9wdGlvbi5lbGVtZW50KTtcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNoZWNrYm94OiBjc3NgXG4gICAgaGVpZ2h0OiBhdXRvOyAvLyBuYXRpdmUgY2hlY2tib3ggaGFzIGZpeGVkIGhlaWdodCB3aGljaCBkb2VzIG5vdCB0YWtlIGludG8gYWNjb3VudCBkZXNjcmlwdGlvblxuICBgLFxufTtcblxuY29uc3QgdmFsaWRhdGVPcHRpb24gPSAodmFsdWU6IHN0cmluZywgdmFsaWRhdGlvblJ1bGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gUmVnRXhwKHZhbGlkYXRpb25SdWxlKS50ZXN0KHZhbHVlKSA/IHRydWUgOiAnSW52YWxpZCBmb3JtYXQnO1xufTtcblxuY29uc3QgZGV0ZXJtaW5lUmVxdWlyZWQgPSAob3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBnZXRWYWx1ZXM6IGFueSwgcGF0aEluZGV4OiBzdHJpbmcpID0+IHtcbiAgaWYgKCFvcHRpb24uZGVwZW5kc09uKSB7XG4gICAgcmV0dXJuIG9wdGlvbi5yZXF1aXJlZCA/ICdSZXF1aXJlZCcgOiBmYWxzZTtcbiAgfVxuICBpZiAoaXNFbXB0eShnZXRWYWx1ZXMoYCR7cGF0aEluZGV4fXNlY3VyZUZpZWxkc2ApKSkge1xuICAgIGNvbnN0IGRlcGVuZGVudE9uID0gZ2V0VmFsdWVzKGAke3BhdGhJbmRleH1zZWN1cmVTZXR0aW5ncy4ke29wdGlvbi5kZXBlbmRzT259YCk7XG4gICAgcmV0dXJuICFCb29sZWFuKGRlcGVuZGVudE9uKSAmJiBvcHRpb24ucmVxdWlyZWQgPyAnUmVxdWlyZWQnIDogZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGVwZW5kZW50T246IGJvb2xlYW4gPSBnZXRWYWx1ZXMoYCR7cGF0aEluZGV4fXNlY3VyZUZpZWxkcy4ke29wdGlvbi5kZXBlbmRzT259YCk7XG4gICAgcmV0dXJuICFkZXBlbmRlbnRPbiAmJiBvcHRpb24ucmVxdWlyZWQgPyAnUmVxdWlyZWQnIDogZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGRldGVybWluZVJlYWRPbmx5ID0gKG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiwgZ2V0VmFsdWVzOiBhbnksIHBhdGhJbmRleDogc3RyaW5nKSA9PiB7XG4gIGlmICghb3B0aW9uLmRlcGVuZHNPbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaXNFbXB0eShnZXRWYWx1ZXMoYCR7cGF0aEluZGV4fXNlY3VyZUZpZWxkc2ApKSkge1xuICAgIHJldHVybiBnZXRWYWx1ZXMoYCR7cGF0aEluZGV4fXNlY3VyZVNldHRpbmdzLiR7b3B0aW9uLmRlcGVuZHNPbn1gKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0VmFsdWVzKGAke3BhdGhJbmRleH1zZWN1cmVGaWVsZHMuJHtvcHRpb24uZGVwZW5kc09ufWApO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQWN0aW9uSWNvbiB9IGZyb20gJy4uLy4uLy4uL3J1bGVzL0FjdGlvbkljb24nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZT86IHN0cmluZ1tdO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgU3RyaW5nQXJyYXlJbnB1dDogRkM8UHJvcHM+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCByZWFkT25seSA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZS5zbGljZSgpO1xuICAgIG5ld1ZhbHVlLnNwbGljZShpbmRleCwgMSk7XG4gICAgb25DaGFuZ2UobmV3VmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVZhbHVlID0gKGl0ZW1WYWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbkNoYW5nZSh2YWx1ZS5tYXAoKHYsIGkpID0+IChpID09PSBpbmRleCA/IGl0ZW1WYWx1ZSA6IHYpKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgeyEhdmFsdWU/Lmxlbmd0aCAmJlxuICAgICAgICB2YWx1ZS5tYXAoKHYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgPElucHV0IHJlYWRPbmx5PXtyZWFkT25seX0gdmFsdWU9e3Z9IG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlVmFsdWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlLCBpbmRleCl9IC8+XG4gICAgICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICAgICAgPEFjdGlvbkljb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVJY29ufVxuICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJkZWxldGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oaW5kZXgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbLi4uKHZhbHVlID8/IFtdKSwgJyddKX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG4gIGRlbGV0ZUljb246IGNzc2BcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgYWRkQnV0dG9uOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmllbGRFcnJvciwgRGVlcE1hcCwgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VDb250cm9sbGVkRmllbGRBcnJheSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUNvbnRyb2xsZWRGaWVsZEFycmF5JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBBY3Rpb25JY29uIH0gZnJvbSAnLi4vLi4vLi4vcnVsZXMvQWN0aW9uSWNvbic7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZVNlY3Rpb24gfSBmcm9tICcuLi9Db2xsYXBzaWJsZVNlY3Rpb24nO1xuXG5pbXBvcnQgeyBPcHRpb25GaWVsZCB9IGZyb20gJy4vT3B0aW9uRmllbGQnO1xuaW1wb3J0IHsgZ2V0UmVjZWl2ZXJGb3JtRmllbGRTdHlsZXMgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRlZmF1bHRWYWx1ZXM/OiBhbnlbXTtcbiAgb3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uO1xuICBwYXRoUHJlZml4OiBzdHJpbmc7XG4gIGVycm9ycz86IEFycmF5PERlZXBNYXA8YW55LCBGaWVsZEVycm9yPj47XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFN1YmZvcm1BcnJheUZpZWxkOiBGQzxQcm9wcz4gPSAoeyBvcHRpb24sIHBhdGhQcmVmaXgsIGVycm9ycywgZGVmYXVsdFZhbHVlcywgcmVhZE9ubHkgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0UmVjZWl2ZXJGb3JtRmllbGRTdHlsZXMpO1xuICBjb25zdCBwYXRoID0gYCR7cGF0aFByZWZpeH0ke29wdGlvbi5wcm9wZXJ0eU5hbWV9YDtcbiAgY29uc3QgZm9ybUFQSSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IHsgZmllbGRzLCBhcHBlbmQsIHJlbW92ZSB9ID0gdXNlQ29udHJvbGxlZEZpZWxkQXJyYXkoeyBuYW1lOiBwYXRoLCBmb3JtQVBJLCBkZWZhdWx0czogZGVmYXVsdFZhbHVlcyB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8Q29sbGFwc2libGVTZWN0aW9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbGxhcHNpYmxlU2VjdGlvbn1cbiAgICAgICAgbGFiZWw9e2Ake29wdGlvbi5sYWJlbH0gKCR7ZmllbGRzLmxlbmd0aH0pYH1cbiAgICAgICAgZGVzY3JpcHRpb249e29wdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgID5cbiAgICAgICAgeyhmaWVsZHMgPz8gZGVmYXVsdFZhbHVlcyA/PyBbXSkubWFwKChmaWVsZCwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtSW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Ake3BhdGh9LiR7aXRlbUluZGV4fS5kZWxldGUtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaXRlbUluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUljb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge29wdGlvbi5zdWJmb3JtT3B0aW9ucz8ubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICA8T3B0aW9uRmllbGRcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZmllbGQ/LltvcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9uLnByb3BlcnR5TmFtZX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgcGF0aFByZWZpeD17YCR7cGF0aH0uJHtpdGVtSW5kZXh9LmB9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5baXRlbUluZGV4XT8uW29wdGlvbi5wcm9wZXJ0eU5hbWVdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgJHtwYXRofS5hZGQtYnV0dG9uYH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYXBwZW5kKHsgX19pZDogU3RyaW5nKE1hdGgucmFuZG9tKCkpIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9Db2xsYXBzaWJsZVNlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkRXJyb3IsIERlZXBNYXAsIHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuLi8uLi8uLi9ydWxlcy9BY3Rpb25JY29uJztcblxuaW1wb3J0IHsgT3B0aW9uRmllbGQgfSBmcm9tICcuL09wdGlvbkZpZWxkJztcbmltcG9ydCB7IGdldFJlY2VpdmVyRm9ybUZpZWxkU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBkZWZhdWx0VmFsdWU6IGFueTtcbiAgb3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uO1xuICBwYXRoUHJlZml4OiBzdHJpbmc7XG4gIGVycm9ycz86IERlZXBNYXA8YW55LCBGaWVsZEVycm9yPjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU3ViZm9ybUZpZWxkOiBGQzxQcm9wcz4gPSAoeyBvcHRpb24sIHBhdGhQcmVmaXgsIGVycm9ycywgZGVmYXVsdFZhbHVlLCByZWFkT25seSA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRSZWNlaXZlckZvcm1GaWVsZFN0eWxlcyk7XG4gIGNvbnN0IG5hbWUgPSBgJHtwYXRoUHJlZml4fSR7b3B0aW9uLnByb3BlcnR5TmFtZX1gO1xuICBjb25zdCB7IHdhdGNoIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xuICBjb25zdCBfd2F0Y2hWYWx1ZSA9IHdhdGNoKG5hbWUpO1xuICBjb25zdCB2YWx1ZSA9IF93YXRjaFZhbHVlID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiBfd2F0Y2hWYWx1ZTtcblxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZSghIXZhbHVlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0gZGF0YS10ZXN0aWQ9e2Ake25hbWV9LmNvbnRhaW5lcmB9PlxuICAgICAgPGg2PntvcHRpb24ubGFiZWx9PC9oNj5cbiAgICAgIHtvcHRpb24uZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntvcHRpb24uZGVzY3JpcHRpb259PC9wPn1cbiAgICAgIHtzaG93ICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7IXJlYWRPbmx5ICYmIChcbiAgICAgICAgICAgIDxBY3Rpb25JY29uXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgJHtuYW1lfS5kZWxldGUtYnV0dG9uYH1cbiAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgIHRvb2x0aXA9XCJkZWxldGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KGZhbHNlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlSWNvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7KG9wdGlvbi5zdWJmb3JtT3B0aW9ucyA/PyBbXSkubWFwKChzdWJPcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxPcHRpb25GaWVsZFxuICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZT8uW3N1Yk9wdGlvbi5wcm9wZXJ0eU5hbWVdfVxuICAgICAgICAgICAgICAgIGtleT17c3ViT3B0aW9uLnByb3BlcnR5TmFtZX1cbiAgICAgICAgICAgICAgICBvcHRpb249e3N1Yk9wdGlvbn1cbiAgICAgICAgICAgICAgICBwYXRoUHJlZml4PXtgJHtuYW1lfS5gfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/LltzdWJPcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHshc2hvdyAmJiAhcmVhZE9ubHkgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGljb249XCJwbHVzXCJcbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3codHJ1ZSl9XG4gICAgICAgICAgZGF0YS10ZXN0aWQ9e2Ake25hbWV9LmFkZC1idXR0b25gfVxuICAgICAgICA+XG4gICAgICAgICAgQWRkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBnZXRSZWNlaXZlckZvcm1GaWVsZFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29sbGFwc2libGVTZWN0aW9uOiBjc3NgXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIGAsXG4gIHdyYXBwZXI6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygyLCAwKX07XG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygxKX07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBgLFxuICBkZXNjcmlwdGlvbjogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcn07XG4gICAgbWFyZ2luOiAwO1xuICBgLFxuICBkZWxldGVJY29uOiBjc3NgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIHRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgYWRkQnV0dG9uOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgQW5ub3RhdGlvbiwgYW5ub3RhdGlvbkxhYmVscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IFNlbGVjdFdpdGhBZGQgfSBmcm9tICcuL1NlbGVjdFdJdGhBZGQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGV4aXN0aW5nS2V5czogc3RyaW5nW107XG5cbiAgdmFsdWU/OiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICdhcmlhLWxhYmVsJz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFubm90YXRpb25LZXlJbnB1dDogRkM8UHJvcHM+ID0gKHsgdmFsdWUsIGV4aXN0aW5nS2V5cywgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsIC4uLnJlc3QgfSkgPT4ge1xuICBjb25zdCBhbm5vdGF0aW9uT3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCk6IFNlbGVjdGFibGVWYWx1ZVtdID0+XG4gICAgICBPYmplY3QudmFsdWVzKEFubm90YXRpb24pXG4gICAgICAgIC5maWx0ZXIoKGtleSkgPT4gIWV4aXN0aW5nS2V5cy5pbmNsdWRlcyhrZXkpKSAvLyByZW1vdmUga2V5cyBhbHJlYWR5IHRha2VuIGluIG90aGVyIGFubm90YXRpb25zXG4gICAgICAgIC5tYXAoKGtleSkgPT4gKHsgdmFsdWU6IGtleSwgbGFiZWw6IGFubm90YXRpb25MYWJlbHNba2V5XSB9KSksXG4gICAgW2V4aXN0aW5nS2V5c11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RXaXRoQWRkXG4gICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBvcHRpb25zPXthbm5vdGF0aW9uT3B0aW9uc31cbiAgICAgIGN1c3RvbT17ISF2YWx1ZSAmJiAhKE9iamVjdC52YWx1ZXMoQW5ub3RhdGlvbikgYXMgc3RyaW5nW10pLmluY2x1ZGVzKHZhbHVlKX1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZpZWxkQXJyYXksIElucHV0LCBJbnB1dENvbnRyb2wsIExhYmVsLCBUZXh0QXJlYSwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmltcG9ydCB7IEFubm90YXRpb25LZXlJbnB1dCB9IGZyb20gJy4vQW5ub3RhdGlvbktleUlucHV0JztcblxuY29uc3QgQW5ub3RhdGlvbnNGaWVsZDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCB7XG4gICAgY29udHJvbCxcbiAgICByZWdpc3RlcixcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xuICBjb25zdCBhbm5vdGF0aW9ucyA9IHdhdGNoKCdhbm5vdGF0aW9ucycpIGFzIFJ1bGVGb3JtVmFsdWVzWydhbm5vdGF0aW9ucyddO1xuXG4gIGNvbnN0IGV4aXN0aW5nS2V5cyA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKTogc3RyaW5nW10gPT4gYW5ub3RhdGlvbnMuZmlsdGVyKChfLCBpZHg6IG51bWJlcikgPT4gaWR4ICE9PSBpbmRleCkubWFwKCh7IGtleSB9KSA9PiBrZXkpLFxuICAgIFthbm5vdGF0aW9uc11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGFiZWw+U3VtbWFyeSBhbmQgYW5ub3RhdGlvbnM8L0xhYmVsPlxuICAgICAgPEZpZWxkQXJyYXkgbmFtZT17J2Fubm90YXRpb25zJ30gY29udHJvbD17Y29udHJvbH0+XG4gICAgICAgIHsoeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29sdW1ufT5cbiAgICAgICAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzVXJsID0gYW5ub3RhdGlvbnNbaW5kZXhdPy5rZXk/LnRvTG9jYWxlTG93ZXJDYXNlKCkuZW5kc1dpdGgoJ3VybCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IFZhbHVlSW5wdXRDb21wb25lbnQgPSBpc1VybCA/IElucHV0IDogVGV4dEFyZWE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmaWVsZC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy5rZXk/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5hbm5vdGF0aW9ucz8uW2luZGV4XT8ua2V5Py5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgYW5ub3RhdGlvbi1rZXktJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGFubm90YXRpb25zWyR7aW5kZXh9XS5rZXlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5ub3RhdGlvbktleUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BBbm5vdGF0aW9uIGRldGFpbCAke2luZGV4ICsgMX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nS2V5cz17ZXhpc3RpbmdLZXlzKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB7IHZhbHVlOiAhIWFubm90YXRpb25zW2luZGV4XT8udmFsdWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0gfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93SXRlbU1hcmdpbiwgc3R5bGVzLmZpZWxkKX1cbiAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5hbm5vdGF0aW9ucz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5hbm5vdGF0aW9ucz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VmFsdWVJbnB1dENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Bhbm5vdGF0aW9uLXZhbHVlLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmFubm90YXRpb25WYWx1ZUlucHV0LCB7IFtzdHlsZXMudGV4dGFyZWFdOiAhaXNVcmwgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYGFubm90YXRpb25zWyR7aW5kZXh9XS52YWx1ZWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2lzVXJsID8gJ2h0dHBzOi8vJyA6IGBUZXh0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZmllbGQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3dJdGVtTWFyZ2lufVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJkZWxldGUgYW5ub3RhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQW5ub3RhdGlvbnNCdXR0b259XG4gICAgICAgICAgICAgICAgaWNvbj1cInBsdXMtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBhcHBlbmQoeyBrZXk6ICcnLCB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFkZCBpbmZvXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRmllbGRBcnJheT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBhbm5vdGF0aW9uVmFsdWVJbnB1dDogY3NzYFxuICAgIHdpZHRoOiA0MjZweDtcbiAgYCxcbiAgdGV4dGFyZWE6IGNzc2BcbiAgICBoZWlnaHQ6IDc2cHg7XG4gIGAsXG4gIGFkZEFubm90YXRpb25zQnV0dG9uOiBjc3NgXG4gICAgZmxleC1ncm93OiAwO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE0OHB4O1xuICBgLFxuICBmbGV4Q29sdW1uOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBgLFxuICBmaWVsZDogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy54c307XG4gIGAsXG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBgLFxuICBmbGV4Um93SXRlbU1hcmdpbjogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICBgLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFubm90YXRpb25zRmllbGQ7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEZpZWxkLCBGaWVsZEFycmF5LCBJbnB1dCwgSW5saW5lTGFiZWwsIExhYmVsLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuY29uc3QgTGFiZWxzRmllbGQ6IEZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgY29udHJvbCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dCgpO1xuICBjb25zdCBsYWJlbHMgPSB3YXRjaCgnbGFiZWxzJyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgc3R5bGVzLndyYXBwZXIpfT5cbiAgICAgIDxMYWJlbD5DdXN0b20gTGFiZWxzPC9MYWJlbD5cbiAgICAgIDxGaWVsZEFycmF5IGNvbnRyb2w9e2NvbnRyb2x9IG5hbWU9XCJsYWJlbHNcIj5cbiAgICAgICAgeyh7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhSb3d9PlxuICAgICAgICAgICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD17MTh9PkxhYmVsczwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Q29sdW1ufT5cbiAgICAgICAgICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZmllbGQuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5mbGV4Um93LCBzdHlsZXMuY2VudGVyQWxpZ25Sb3cpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5sYWJlbHM/LltpbmRleF0/LmtleT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmxhYmVscz8uW2luZGV4XT8ua2V5Py5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYGxhYmVsc1ske2luZGV4fV0ua2V5YCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogISFsYWJlbHNbaW5kZXhdPy52YWx1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2BsYWJlbC1rZXktJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC5rZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElubGluZUxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmVxdWFsU2lnbn0+PTwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubGFiZWxzPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmxhYmVscz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgbGFiZWxzWyR7aW5kZXh9XS52YWx1ZWAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6ICEhbGFiZWxzW2luZGV4XT8ua2V5LCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgbGFiZWwtdmFsdWUtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlTGFiZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZSBsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTGFiZWxCdXR0b259XG4gICAgICAgICAgICAgICAgICAgIGljb249XCJwbHVzLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZCh7fSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFkZCBsYWJlbFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRmllbGRBcnJheT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcHBlcjogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIGZsZXhDb2x1bW46IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGAsXG4gICAgZmxleFJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICYgKyBidXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICAgIH1cbiAgICBgLFxuICAgIGRlbGV0ZUxhYmVsQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgICBhZGRMYWJlbEJ1dHRvbjogY3NzYFxuICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBgLFxuICAgIGNlbnRlckFsaWduUm93OiBjc3NgXG4gICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgYCxcbiAgICBlcXVhbFNpZ246IGNzc2BcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB3aWR0aDogMjhweDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgYCxcbiAgICBsYWJlbElucHV0OiBjc3NgXG4gICAgICB3aWR0aDogMTgzcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgICAgJiArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICAgIH1cbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWxzRmllbGQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5wdXQsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHZhbHVlPzogc3RyaW5nO1xuICBhZGRMYWJlbD86IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgY3VzdG9tPzogYm9vbGVhbjtcbiAgb25DdXN0b21DaGFuZ2U/OiAoY3VzdG9tOiBib29sZWFuKSA9PiB2b2lkO1xuICB3aWR0aD86IG51bWJlcjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAnYXJpYS1sYWJlbCc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RXaXRoQWRkOiBGQzxQcm9wcz4gPSAoe1xuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIG9wdGlvbnMsXG4gIGNsYXNzTmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHdpZHRoLFxuICBjdXN0b20sXG4gIG9uQ3VzdG9tQ2hhbmdlLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICBhZGRMYWJlbCA9ICcrIEFkZCBuZXcnLFxuICAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCxcbn0pID0+IHtcbiAgY29uc3QgW2lzQ3VzdG9tLCBzZXRJc0N1c3RvbV0gPSB1c2VTdGF0ZShjdXN0b20pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1c3RvbSkge1xuICAgICAgc2V0SXNDdXN0b20oY3VzdG9tKTtcbiAgICB9XG4gIH0sIFtjdXN0b21dKTtcblxuICBjb25zdCBfb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCk6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9PiBbLi4ub3B0aW9ucywgeyB2YWx1ZTogJ19fYWRkX18nLCBsYWJlbDogYWRkTGFiZWwgfV0sXG4gICAgW29wdGlvbnMsIGFkZExhYmVsXVxuICApO1xuXG4gIGlmIChpc0N1c3RvbSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5wdXRcbiAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGF1dG9Gb2N1cz17IWN1c3RvbX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgb3B0aW9ucz17X29wdGlvbnN9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17KHZhbDogU2VsZWN0YWJsZVZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWw/LnZhbHVlO1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ19fYWRkX18nKSB7XG4gICAgICAgICAgICBzZXRJc0N1c3RvbSh0cnVlKTtcbiAgICAgICAgICAgIGlmIChvbkN1c3RvbUNoYW5nZSkge1xuICAgICAgICAgICAgICBvbkN1c3RvbUNoYW5nZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlKCcnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSWNvbk5hbWUsIFRvb2x0aXAsIExpbmtCdXR0b24sIEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFBvcG92ZXJDb250ZW50LCBUb29sdGlwUGxhY2VtZW50IH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvVG9vbHRpcCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRvb2x0aXA6IFBvcG92ZXJDb250ZW50O1xuICBpY29uOiBJY29uTmFtZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB0b29sdGlwUGxhY2VtZW50PzogVG9vbHRpcFBsYWNlbWVudDtcbiAgdG8/OiBzdHJpbmc7XG4gIHRhcmdldD86IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gICdkYXRhLXRlc3RpZCc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25JY29uOiBGQzxQcm9wcz4gPSAoe1xuICB0b29sdGlwLFxuICBpY29uLFxuICB0byxcbiAgdGFyZ2V0LFxuICBvbkNsaWNrLFxuICBjbGFzc05hbWUsXG4gIHRvb2x0aXBQbGFjZW1lbnQgPSAndG9wJyxcbiAgLi4ucmVzdFxufSkgPT4ge1xuICBjb25zdCBhcmlhTGFiZWwgPSB0eXBlb2YgdG9vbHRpcCA9PT0gJ3N0cmluZycgPyB0b29sdGlwIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPFRvb2x0aXAgY29udGVudD17dG9vbHRpcH0gcGxhY2VtZW50PXt0b29sdGlwUGxhY2VtZW50fT5cbiAgICAgIHt0byA/IChcbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBocmVmPXt0b31cbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIHRhcmdldD17dGFyZ2V0fVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L1Rvb2x0aXA+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ2FwcC9jb3JlL3N0b3JlJztcblxuaW1wb3J0IHsgQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVksIEFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlLCBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmZ1bmN0aW9uIHVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM6IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VbXSkge1xuICByZXR1cm4gdXNlQ2FsbGJhY2soXG4gICAgKGFsZXJ0TWFuYWdlck5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc05hbWVzID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5tYXAoKGFtKSA9PiBhbS5uYW1lKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMuaW5jbHVkZXMoYWxlcnRNYW5hZ2VyTmFtZSk7XG4gICAgfSxcbiAgICBbYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc11cbiAgKTtcbn1cblxuLyogVGhpcyB3aWxsIHJldHVybiBhbSBuYW1lIGVpdGhlciBmcm9tIHF1ZXJ5IHBhcmFtcyBvciBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3IgYSBkZWZhdWx0IChncmFmYW5hKS5cbiAqIER1ZSB0byBSQkFDIHBlcm1pc3Npb25zIEdyYWZhbmEgTWFuYWdlZCBBbGVydCBtYW5hZ2VyIG9yIGV4dGVybmFsIGFsZXJ0IG1hbmFnZXJzIG1heSBub3QgYmUgYXZhaWxhYmxlXG4gKiBJbiB0aGUgd29yc3QgY2FzZSBuZWlodGVyIEdNQSBub3IgZXh0ZXJuYWwgYWxlcnQgbWFuYWdlciBpcyBhdmFpbGFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoXG4gIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM6IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VbXVxuKTogW3N0cmluZyB8IHVuZGVmaW5lZCwgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4gdm9pZF0ge1xuICBjb25zdCBbcXVlcnlQYXJhbXMsIHVwZGF0ZVF1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlID0gdXNlSXNBbGVydE1hbmFnZXJBdmFpbGFibGUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgICAgICBzdG9yZS5kZWxldGUoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICB1cGRhdGVRdWVyeVBhcmFtcyh7IFtBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldOiBudWxsIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmUuc2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1cGRhdGVRdWVyeVBhcmFtcywgaXNBbGVydE1hbmFnZXJBdmFpbGFibGVdXG4gICk7XG5cbiAgY29uc3QgcXVlcnlTb3VyY2UgPSBxdWVyeVBhcmFtc1tBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldO1xuXG4gIGlmIChxdWVyeVNvdXJjZSAmJiB0eXBlb2YgcXVlcnlTb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKHF1ZXJ5U291cmNlKSkge1xuICAgICAgcmV0dXJuIFtxdWVyeVNvdXJjZSwgdXBkYXRlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uIGV4aXN0aW5nIGFsZXJ0bWFuYWdlclxuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RvcmVTb3VyY2UgPSBzdG9yZS5nZXQoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICBpZiAoc3RvcmVTb3VyY2UgJiYgdHlwZW9mIHN0b3JlU291cmNlID09PSAnc3RyaW5nJyAmJiBpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShzdG9yZVNvdXJjZSkpIHtcbiAgICB1cGRhdGUoc3RvcmVTb3VyY2UpO1xuICAgIHJldHVybiBbc3RvcmVTb3VyY2UsIHVwZGF0ZV07XG4gIH1cblxuICBpZiAoaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkpIHtcbiAgICByZXR1cm4gW0dSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsIHVwZGF0ZV07XG4gIH1cblxuICByZXR1cm4gW3VuZGVmaW5lZCwgdXBkYXRlXTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzQnlQZXJtaXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uKGFjY2Vzc1R5cGU6ICdpbnN0YW5jZScgfCAnbm90aWZpY2F0aW9uJykge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiBnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbihhY2Nlc3NUeXBlKSwgW2FjY2Vzc1R5cGVdKTtcbn1cbiIsImltcG9ydCB7IHNldCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVzZUZvcm1SZXR1cm4gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbnRlcmZhY2UgT3B0aW9uczxSPiB7XG4gIG5hbWU6IHN0cmluZztcbiAgZm9ybUFQSTogVXNlRm9ybVJldHVybjxhbnk+O1xuICBkZWZhdWx0cz86IFJbXTtcblxuICAvLyBpZiB0cnVlLCBzZXRzIGBfX2RlbGV0ZWQ6IHRydWVgIGJ1dCBkb2VzIG5vdCByZW1vdmUgaXRlbSBmcm9tIHRoZSBhcnJheSBpbiB2YWx1ZXNcbiAgc29mdERlbGV0ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIENvbnRyb2xsZWRGaWVsZDxSPiA9IFIgJiB7XG4gIF9fZGVsZXRlZD86IGJvb2xlYW47XG59O1xuXG5jb25zdCBFTVBUWV9BUlJBWSA9IFtdIGFzIGNvbnN0O1xuXG4vKlxuICogcmVhY3QtaG9vay1mb3JtJ3Mgb3duIHVzZUZpZWxkQXJyYXkgaXMgdW5jb250cm9sbGVkIGFuZCBzdXBlciBidWdneS5cbiAqIHRoaXMgaXMgYSBzaW1wbGUgY29udHJvbGxlZCB2ZXJzaW9uLiBJdCdzIGRlYWQgc2ltcGxlIGFuZCBtb3JlIHJvYnVzdCBhdCB0aGUgY29zdCBvZiByZS1yZW5kZXJpbmcgdGhlIGZvcm1cbiAqIG9uIGV2ZXJ5IGNoYW5nZSB0byB0aGUgc3ViIGZvcm1zIGluIHRoZSBhcnJheS5cbiAqIFdhcm5pbmc6IHlvdSdsbCBoYXZlIHRvIHRha2UgY2FyZSBvZiB5b3VyIG93biB1bmlxdWUgaWRlbnRpaWZlciB0byB1c2UgYXMgYGtleWAgZm9yIHRoZSBSZWFjdE5vZGUgYXJyYXkuXG4gKiBVc2luZyBpbmRleCB3aWxsIGNhdXNlIHByb2JsZW1zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udHJvbGxlZEZpZWxkQXJyYXk8Uj4ob3B0aW9uczogT3B0aW9uczxSPikge1xuICBjb25zdCB7IG5hbWUsIGZvcm1BUEksIGRlZmF1bHRzLCBzb2Z0RGVsZXRlIH0gPSBvcHRpb25zO1xuICBjb25zdCB7IHdhdGNoLCBnZXRWYWx1ZXMsIHJlc2V0LCBzZXRWYWx1ZSB9ID0gZm9ybUFQSTtcblxuICBjb25zdCBmaWVsZHM6IEFycmF5PENvbnRyb2xsZWRGaWVsZDxSPj4gPSB3YXRjaChuYW1lKSA/PyBkZWZhdWx0cyA/PyBFTVBUWV9BUlJBWTtcblxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAodXBkYXRlRm46IChmaWVsZHM6IFJbXSkgPT4gUltdKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdldFZhbHVlcygpKSk7XG4gICAgICBjb25zdCBuZXdJdGVtcyA9IHVwZGF0ZUZuKGZpZWxkcyA/PyBbXSk7XG4gICAgICByZXNldChzZXQodmFsdWVzLCBuYW1lLCBuZXdJdGVtcykpO1xuICAgIH0sXG4gICAgW2dldFZhbHVlcywgbmFtZSwgcmVzZXQsIGZpZWxkc11cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGZpZWxkcyxcbiAgICBhcHBlbmQ6IHVzZUNhbGxiYWNrKCh2YWx1ZXM6IFIpID0+IHVwZGF0ZSgoZmllbGRzKSA9PiBbLi4uZmllbGRzLCB2YWx1ZXNdKSwgW3VwZGF0ZV0pLFxuICAgIHJlbW92ZTogdXNlQ2FsbGJhY2soXG4gICAgICAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoc29mdERlbGV0ZSkge1xuICAgICAgICAgIHNldFZhbHVlKGAke25hbWV9LiR7aW5kZXh9Ll9fZGVsZXRlZGAsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVwZGF0ZSgoaXRlbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gaXRlbXMuc2xpY2UoKTtcbiAgICAgICAgICAgIG5ld0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3SXRlbXM7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbdXBkYXRlLCBuYW1lLCBzZXRWYWx1ZSwgc29mdERlbGV0ZV1cbiAgICApLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxlcnRUYWJsZVN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgdGFibGU6IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAke3RoZW1lLmNvbG9ycy5ib3JkZXIud2Vha307XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuXG4gICAgdHIge1xuICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgIH1cbiAgYCxcbiAgZXZlblJvdzogY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gIGAsXG4gIGNvbEV4cGFuZDogY3NzYFxuICAgIHdpZHRoOiAzNnB4O1xuICBgLFxuICBhY3Rpb25zQ2VsbDogY3NzYFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgfVxuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uLCBOb3RpZmllckRUTyB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmZ1bmN0aW9uIG9wdGlvbihcbiAgcHJvcGVydHlOYW1lOiBzdHJpbmcsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIHJlc3Q6IFBhcnRpYWw8Tm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbj4gPSB7fVxuKTogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiB7XG4gIHJldHVybiB7XG4gICAgcHJvcGVydHlOYW1lLFxuICAgIGxhYmVsLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGVsZW1lbnQ6ICdpbnB1dCcsXG4gICAgaW5wdXRUeXBlOiAnJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgc2VjdXJlOiBmYWxzZSxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgdmFsaWRhdGlvblJ1bGU6ICcnLFxuICAgIHNob3dXaGVuOiB7IGZpZWxkOiAnJywgaXM6ICcnIH0sXG4gICAgZGVwZW5kc09uOiAnJyxcbiAgICAuLi5yZXN0LFxuICB9O1xufVxuXG5jb25zdCBiYXNpY0F1dGhPcHRpb246IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gPSBvcHRpb24oXG4gICdiYXNpY19hdXRoJyxcbiAgJ0Jhc2ljIGF1dGgnLFxuICAnU2V0cyB0aGUgYEF1dGhvcml6YXRpb25gIGhlYWRlciB3aXRoIHRoZSBjb25maWd1cmVkIHVzZXJuYW1lIGFuZCBwYXNzd29yZC4gUGFzc3dvcmQgYW5kIHBhc3N3b3JkX2ZpbGUgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZS4nLFxuICB7XG4gICAgZWxlbWVudDogJ3N1YmZvcm0nLFxuICAgIHN1YmZvcm1PcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ3VzZXJuYW1lJywgJ1VzZXJuYW1lJywgJycpLFxuICAgICAgb3B0aW9uKCdwYXNzd29yZCcsICdQYXNzd29yZCcsICcnKSxcbiAgICAgIG9wdGlvbigncGFzc3dvcmRfZmlsZScsICdQYXNzd29yZCBmaWxlJywgJycpLFxuICAgIF0sXG4gIH1cbik7XG5cbmNvbnN0IHRsc0NvbmZpZ09wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiA9IG9wdGlvbigndGxzX2NvbmZpZycsICdUTFMgY29uZmlnJywgJ0NvbmZpZ3VyZXMgdGhlIFRMUyBzZXR0aW5ncy4nLCB7XG4gIGVsZW1lbnQ6ICdzdWJmb3JtJyxcbiAgc3ViZm9ybU9wdGlvbnM6IFtcbiAgICBvcHRpb24oJ2NhX2ZpbGUnLCAnQ0EgZmlsZScsICdDQSBjZXJ0aWZpY2F0ZSB0byB2YWxpZGF0ZSB0aGUgc2VydmVyIGNlcnRpZmljYXRlIHdpdGguJyksXG4gICAgb3B0aW9uKCdjZXJ0X2ZpbGUnLCAnQ2VydCBmaWxlJywgJ0NlcnRpZmljYXRlIGZvciBjbGllbnQgY2VydCBhdXRoZW50aWNhdGlvbiB0byB0aGUgc2VydmVyLicpLFxuICAgIG9wdGlvbigna2V5X2ZpbGUnLCAnS2V5IGZpbGUnLCAnS2V5IGZpbGUgZm9yIGNsaWVudCBjZXJ0IGF1dGhlbnRpY2F0aW9uIHRvIHRoZSBzZXJ2ZXIuJyksXG4gICAgb3B0aW9uKCdzZXJ2ZXJfbmFtZScsICdTZXJ2ZXIgbmFtZScsICdTZXJ2ZXJOYW1lIGV4dGVuc2lvbiB0byBpbmRpY2F0ZSB0aGUgbmFtZSBvZiB0aGUgc2VydmVyLicpLFxuICAgIG9wdGlvbignaW5zZWN1cmVfc2tpcF92ZXJpZnknLCAnU2tpcCB2ZXJpZnknLCAnRGlzYWJsZSB2YWxpZGF0aW9uIG9mIHRoZSBzZXJ2ZXIgY2VydGlmaWNhdGUuJywge1xuICAgICAgZWxlbWVudDogJ2NoZWNrYm94JyxcbiAgICB9KSxcbiAgXSxcbn0pO1xuXG5jb25zdCBodHRwQ29uZmlnT3B0aW9uOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uID0gb3B0aW9uKFxuICAnaHR0cF9jb25maWcnLFxuICAnSFRUUCBDb25maWcnLFxuICAnTm90ZSB0aGF0IGBiYXNpY19hdXRoYCwgYGJlYXJlcl90b2tlbmAgYW5kIGBiZWFyZXJfdG9rZW5fZmlsZWAgb3B0aW9ucyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlLicsXG4gIHtcbiAgICBlbGVtZW50OiAnc3ViZm9ybScsXG4gICAgc3ViZm9ybU9wdGlvbnM6IFtcbiAgICAgIG9wdGlvbignYmVhcmVyX3Rva2VuJywgJ0JlYXJlciB0b2tlbicsICdTZXRzIHRoZSBgQXV0aG9yaXphdGlvbmAgaGVhZGVyIHdpdGggdGhlIGNvbmZpZ3VyZWQgYmVhcmVyIHRva2VuLicpLFxuICAgICAgb3B0aW9uKFxuICAgICAgICAnYmVhcmVyX3Rva2VuX2ZpbGUnLFxuICAgICAgICAnQmVhcmVyIHRva2VuIGZpbGUnLFxuICAgICAgICAnU2V0cyB0aGUgYEF1dGhvcml6YXRpb25gIGhlYWRlciB3aXRoIHRoZSBiZWFyZXIgdG9rZW4gcmVhZCBmcm9tIHRoZSBjb25maWd1cmVkIGZpbGUuJ1xuICAgICAgKSxcbiAgICAgIG9wdGlvbigncHJveHlfdXJsJywgJ1Byb3h5IFVSTCcsICdPcHRpb25hbCBwcm94eSBVUkwuJyksXG4gICAgICBiYXNpY0F1dGhPcHRpb24sXG4gICAgICB0bHNDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IGNsb3VkTm90aWZpZXJUeXBlczogTm90aWZpZXJEVE9bXSA9IFtcbiAge1xuICAgIG5hbWU6ICdFbWFpbCcsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIG5vdGlmaWNhdGlvbiBvdmVyIFNNVFAnLFxuICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgaW5mbzogJycsXG4gICAgaGVhZGluZzogJ0VtYWlsIHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ3RvJywgJ1RvJywgJ1RoZSBlbWFpbCBhZGRyZXNzIHRvIHNlbmQgbm90aWZpY2F0aW9ucyB0by4nLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgb3B0aW9uKCdmcm9tJywgJ0Zyb20nLCAnVGhlIHNlbmRlciBhZGRyZXNzLicpLFxuICAgICAgb3B0aW9uKCdzbWFydGhvc3QnLCAnU01UUCBob3N0JywgJ1RoZSBTTVRQIGhvc3QgdGhyb3VnaCB3aGljaCBlbWFpbHMgYXJlIHNlbnQuJyksXG4gICAgICBvcHRpb24oJ2hlbGxvJywgJ0hlbGxvJywgJ1RoZSBob3N0bmFtZSB0byBpZGVudGlmeSB0byB0aGUgU01UUCBzZXJ2ZXIuJyksXG4gICAgICBvcHRpb24oJ2F1dGhfdXNlcm5hbWUnLCAnVXNlcm5hbWUnLCAnU01UUCBhdXRoZW50aWNhdGlvbiBpbmZvcm1hdGlvbicpLFxuICAgICAgb3B0aW9uKCdhdXRoX3Bhc3N3b3JkJywgJ1Bhc3N3b3JkJywgJ1NNVFAgYXV0aGVudGljYXRpb24gaW5mb3JtYXRpb24nKSxcbiAgICAgIG9wdGlvbignYXV0aF9zZWNyZXQnLCAnU2VjcmV0JywgJ1NNVFAgYXV0aGVudGljYXRpb24gaW5mb3JtYXRpb24nKSxcbiAgICAgIG9wdGlvbignYXV0aF9pZGVudGl0eScsICdJZGVudGl0eScsICdTTVRQIGF1dGhlbnRpY2F0aW9uIGluZm9ybWF0aW9uJyksXG4gICAgICBvcHRpb24oJ3JlcXVpcmVfdGxzJywgJ1JlcXVpcmUgVExTJywgJ1RoZSBTTVRQIFRMUyByZXF1aXJlbWVudCcsIHsgZWxlbWVudDogJ2NoZWNrYm94JyB9KSxcbiAgICAgIG9wdGlvbignaHRtbCcsICdFbWFpbCBIVE1MIGJvZHknLCAnVGhlIEhUTUwgYm9keSBvZiB0aGUgZW1haWwgbm90aWZpY2F0aW9uLicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcImVtYWlsLmRlZmF1bHQuaHRtbFwiIC4gfX0nLFxuICAgICAgICBlbGVtZW50OiAndGV4dGFyZWEnLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3RleHQnLCAnRW1haWwgdGV4dCBib2R5JywgJ1RoZSB0ZXh0IGJvZHkgb2YgdGhlIGVtYWlsIG5vdGlmaWNhdGlvbi4nLCB7IGVsZW1lbnQ6ICd0ZXh0YXJlYScgfSksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdoZWFkZXJzJyxcbiAgICAgICAgJ0hlYWRlcnMnLFxuICAgICAgICAnRnVydGhlciBoZWFkZXJzIGVtYWlsIGhlYWRlciBrZXkvdmFsdWUgcGFpcnMuIE92ZXJyaWRlcyBhbnkgaGVhZGVycyBwcmV2aW91c2x5IHNldCBieSB0aGUgbm90aWZpY2F0aW9uIGltcGxlbWVudGF0aW9uLicsXG4gICAgICAgIHsgZWxlbWVudDogJ2tleV92YWx1ZV9tYXAnIH1cbiAgICAgICksXG4gICAgICB0bHNDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQYWdlckR1dHknLFxuICAgIGRlc2NyaXB0aW9uOiAnU2VuZCBub3RpZmljYXRpb25zIHRvIFBhZ2VyRHV0eScsXG4gICAgdHlwZTogJ3BhZ2VyZHV0eScsXG4gICAgaW5mbzogJycsXG4gICAgaGVhZGluZzogJ1BhZ2VyRHV0eSBzZXR0aW5ncycsXG4gICAgb3B0aW9uczogW1xuICAgICAgb3B0aW9uKFxuICAgICAgICAncm91dGluZ19rZXknLFxuICAgICAgICAnUm91dGluZyBrZXknLFxuICAgICAgICAnVGhlIFBhZ2VyRHV0eSBpbnRlZ3JhdGlvbiBrZXkgKHdoZW4gdXNpbmcgUGFnZXJEdXR5IGludGVncmF0aW9uIHR5cGUgYEV2ZW50cyBBUEkgdjJgKSdcbiAgICAgICksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdzZXJ2aWNlX2tleScsXG4gICAgICAgICdTZXJ2aWNlIGtleScsXG4gICAgICAgICdUaGUgUGFnZXJEdXR5IGludGVncmF0aW9uIGtleSAod2hlbiB1c2luZyBQYWdlckR1dHkgaW50ZWdyYXRpb24gdHlwZSBgUHJvbWV0aGV1c2ApLidcbiAgICAgICksXG4gICAgICBvcHRpb24oJ3VybCcsICdVUkwnLCAnVGhlIFVSTCB0byBzZW5kIEFQSSByZXF1ZXN0cyB0bycpLFxuICAgICAgb3B0aW9uKCdjbGllbnQnLCAnQ2xpZW50JywgJ1RoZSBjbGllbnQgaWRlbnRpZmljYXRpb24gb2YgdGhlIEFsZXJ0bWFuYWdlci4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJwYWdlcmR1dHkuZGVmYXVsdC5jbGllbnRcIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdjbGllbnRfdXJsJywgJ0NsaWVudCBVUkwnLCAnQSBiYWNrbGluayB0byB0aGUgc2VuZGVyIG9mIHRoZSBub3RpZmljYXRpb24uJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwicGFnZXJkdXR5LmRlZmF1bHQuY2xpZW50VVJMXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nLCAnQSBkZXNjcmlwdGlvbiBvZiB0aGUgaW5jaWRlbnQuJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwicGFnZXJkdXR5LmRlZmF1bHQuZGVzY3JpcHRpb25cIiAufX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3NldmVyaXR5JywgJ1NldmVyaXR5JywgJ1NldmVyaXR5IG9mIHRoZSBpbmNpZGVudC4nLCB7IHBsYWNlaG9sZGVyOiAnZXJyb3InIH0pLFxuICAgICAgb3B0aW9uKFxuICAgICAgICAnZGV0YWlscycsXG4gICAgICAgICdEZXRhaWxzJyxcbiAgICAgICAgJ0Egc2V0IG9mIGFyYml0cmFyeSBrZXkvdmFsdWUgcGFpcnMgdGhhdCBwcm92aWRlIGZ1cnRoZXIgZGV0YWlsIGFib3V0IHRoZSBpbmNpZGVudC4nLFxuICAgICAgICB7XG4gICAgICAgICAgZWxlbWVudDogJ2tleV92YWx1ZV9tYXAnLFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgb3B0aW9uKCdpbWFnZXMnLCAnSW1hZ2VzJywgJ0ltYWdlcyB0byBhdHRhY2ggdG8gdGhlIGluY2lkZW50LicsIHtcbiAgICAgICAgZWxlbWVudDogJ3N1YmZvcm1fYXJyYXknLFxuICAgICAgICBzdWJmb3JtT3B0aW9uczogW1xuICAgICAgICAgIG9wdGlvbignaHJlZicsICdVUkwnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgICBvcHRpb24oJ3NvdXJjZScsICdTb3VyY2UnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgICBvcHRpb24oJ2FsdCcsICdBbHQnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdsaW5rcycsICdMaW5rcycsICdMaW5rcyB0byBhdHRhY2ggdG8gdGhlIGluY2lkZW50LicsIHtcbiAgICAgICAgZWxlbWVudDogJ3N1YmZvcm1fYXJyYXknLFxuICAgICAgICBzdWJmb3JtT3B0aW9uczogW29wdGlvbignaHJlZicsICdVUkwnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSwgb3B0aW9uKCd0ZXh0JywgJ1RleHQnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KV0sXG4gICAgICB9KSxcbiAgICAgIGh0dHBDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdQdXNob3ZlcicsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIG5vdGlmaWNhdGlvbnMgdG8gUHVzaG92ZXInLFxuICAgIHR5cGU6ICdwdXNob3ZlcicsXG4gICAgaW5mbzogJycsXG4gICAgaGVhZGluZzogJ1B1c2hvdmVyIHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ3VzZXJfa2V5JywgJ1VzZXIga2V5JywgJ1RoZSByZWNpcGllbnQgdXNlcuKAmXMgdXNlciBrZXkuJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgIG9wdGlvbigndG9rZW4nLCAnVG9rZW4nLCAnWW91ciByZWdpc3RlcmVkIGFwcGxpY2F0aW9u4oCZcyBBUEkgdG9rZW4sIHNlZSBodHRwczovL3B1c2hvdmVyLm5ldC9hcHAnLCB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3RpdGxlJywgJ1RpdGxlJywgJ05vdGlmaWNhdGlvbiB0aXRsZS4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJwdXNob3Zlci5kZWZhdWx0LnRpdGxlXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignbWVzc2FnZScsICdNZXNzYWdlJywgJ05vdGlmaWNhdGlvbiBtZXNzYWdlLicsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInB1c2hvdmVyLmRlZmF1bHQubWVzc2FnZVwiIC4gfX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ3VybCcsICdVUkwnLCAnQSBzdXBwbGVtZW50YXJ5IFVSTCBzaG93biBhbG9uZ3NpZGUgdGhlIG1lc3NhZ2UuJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwicHVzaG92ZXIuZGVmYXVsdC51cmxcIiAuIH19JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdwcmlvcml0eScsICdQcmlvcml0eScsICdQcmlvcml0eSwgc2VlIGh0dHBzOi8vcHVzaG92ZXIubmV0L2FwaSNwcmlvcml0eScsIHtcbiAgICAgICAgcGxhY2Vob2xkZXI6ICd7eyBpZiBlcSAuU3RhdHVzIFwiZmlyaW5nXCIgfX0ye3sgZWxzZSB9fTB7eyBlbmQgfX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdyZXRyeScsXG4gICAgICAgICdSZXRyeScsXG4gICAgICAgICdIb3cgb2Z0ZW4gdGhlIFB1c2hvdmVyIHNlcnZlcnMgd2lsbCBzZW5kIHRoZSBzYW1lIG5vdGlmaWNhdGlvbiB0byB0aGUgdXNlci4gTXVzdCBiZSBhdCBsZWFzdCAzMCBzZWNvbmRzLicsXG4gICAgICAgIHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJzFtJyxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIG9wdGlvbihcbiAgICAgICAgJ2V4cGlyZScsXG4gICAgICAgICdFeHBpcmUnLFxuICAgICAgICAnSG93IGxvbmcgeW91ciBub3RpZmljYXRpb24gd2lsbCBjb250aW51ZSB0byBiZSByZXRyaWVkIGZvciwgdW5sZXNzIHRoZSB1c2VyIGFja25vd2xlZGdlcyB0aGUgbm90aWZpY2F0aW9uLicsXG4gICAgICAgIHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJzFoJyxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGh0dHBDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTbGFjaycsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIG5vdGlmaWNhdGlvbnMgdG8gU2xhY2snLFxuICAgIHR5cGU6ICdzbGFjaycsXG4gICAgaW5mbzogJycsXG4gICAgaGVhZGluZzogJ1NsYWNrIHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ2FwaV91cmwnLCAnV2ViaG9vayBVUkwnLCAnVGhlIFNsYWNrIHdlYmhvb2sgVVJMLicpLFxuICAgICAgb3B0aW9uKCdjaGFubmVsJywgJ0NoYW5uZWwnLCAnVGhlICNjaGFubmVsIG9yIEB1c2VyIHRvIHNlbmQgbm90aWZpY2F0aW9ucyB0by4nLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgb3B0aW9uKCdpY29uX2Vtb2ppJywgJ0Vtb2ppIGljb24nLCAnJyksXG4gICAgICBvcHRpb24oJ2ljb25fdXJsJywgJ0ljb24gVVJMJywgJycpLFxuICAgICAgb3B0aW9uKCdsaW5rX25hbWVzJywgJ05hbWVzIGxpbmsnLCAnJywgeyBlbGVtZW50OiAnY2hlY2tib3gnIH0pLFxuICAgICAgb3B0aW9uKCd1c2VybmFtZScsICdVc2VybmFtZScsICcnLCB7IHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJzbGFjay5kZWZhdWx0LnVzZXJuYW1lXCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ2NhbGxiYWNrX2lkJywgJ0NhbGxiYWNrIElEJywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQuY2FsbGJhY2tpZFwiIC4gfX0nIH0pLFxuICAgICAgb3B0aW9uKCdjb2xvcicsICdDb2xvcicsICcnLCB7IHBsYWNlaG9sZGVyOiAne3sgaWYgZXEgLlN0YXR1cyBcImZpcmluZ1wiIH19ZGFuZ2Vye3sgZWxzZSB9fWdvb2R7eyBlbmQgfX0nIH0pLFxuICAgICAgb3B0aW9uKCdmYWxsYmFjaycsICdGYWxsYmFjaycsICcnLCB7IHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJzbGFjay5kZWZhdWx0LmZhbGxiYWNrXCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ2Zvb3RlcicsICdGb290ZXInLCAnJywgeyBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwic2xhY2suZGVmYXVsdC5mb290ZXJcIiAuIH19JyB9KSxcbiAgICAgIG9wdGlvbignbXJrZHduX2luJywgJ01ya2R3biBmaWVsZHMnLCAnQW4gYXJyYXkgb2YgZmllbGQgbmFtZXMgdGhhdCBzaG91bGQgYmUgZm9ybWF0dGVkIGJ5IG1ya2R3biBzeW50YXguJywge1xuICAgICAgICBlbGVtZW50OiAnc3RyaW5nX2FycmF5JyxcbiAgICAgIH0pLFxuICAgICAgb3B0aW9uKCdwcmV0ZXh0JywgJ1ByZS10ZXh0JywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQucHJldGV4dFwiIC4gfX0nIH0pLFxuICAgICAgb3B0aW9uKCdzaG9ydF9maWVsZHMnLCAnU2hvcnQgZmllbGRzJywgJycsIHsgZWxlbWVudDogJ2NoZWNrYm94JyB9KSxcbiAgICAgIG9wdGlvbigndGV4dCcsICdNZXNzYWdlIGJvZHknLCAnJywgeyBlbGVtZW50OiAndGV4dGFyZWEnLCBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwic2xhY2suZGVmYXVsdC50ZXh0XCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ3RpdGxlJywgJ1RpdGxlJywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQudGl0bGVcIiAuIH19JyB9KSxcbiAgICAgIG9wdGlvbigndGl0bGVfbGluaycsICdUaXRsZSBsaW5rJywgJycsIHsgcGxhY2Vob2xkZXI6ICd7eyB0ZW1wbGF0ZSBcInNsYWNrLmRlZmF1bHQudGl0bGVsaW5rXCIgLiB9fScgfSksXG4gICAgICBvcHRpb24oJ2ltYWdlX3VybCcsICdJbWFnZSBVUkwnLCAnJyksXG4gICAgICBvcHRpb24oJ3RodW1iX3VybCcsICdUaHVtYm5haWwgVVJMJywgJycpLFxuICAgICAgb3B0aW9uKCdhY3Rpb25zJywgJ0FjdGlvbnMnLCAnJywge1xuICAgICAgICBlbGVtZW50OiAnc3ViZm9ybV9hcnJheScsXG4gICAgICAgIHN1YmZvcm1PcHRpb25zOiBbXG4gICAgICAgICAgb3B0aW9uKCd0ZXh0JywgJ1RleHQnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgICBvcHRpb24oJ3R5cGUnLCAnVHlwZScsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbigndXJsJywgJ1VSTCcsICdFaXRoZXIgdXJsIG9yIG5hbWUgYW5kIHZhbHVlIGFyZSBtYW5kYXRvcnkuJyksXG4gICAgICAgICAgb3B0aW9uKCduYW1lJywgJ05hbWUnLCAnJyksXG4gICAgICAgICAgb3B0aW9uKCd2YWx1ZScsICdWYWx1ZScsICcnKSxcbiAgICAgICAgICBvcHRpb24oJ2NvbmZpcm0nLCAnQ29uZmlybScsICcnLCB7XG4gICAgICAgICAgICBlbGVtZW50OiAnc3ViZm9ybScsXG4gICAgICAgICAgICBzdWJmb3JtT3B0aW9uczogW1xuICAgICAgICAgICAgICBvcHRpb24oJ3RleHQnLCAnVGV4dCcsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgICAgICBvcHRpb24oJ2Rpc21pc3NfdGV4dCcsICdEaXNtaXNzIHRleHQnLCAnJyksXG4gICAgICAgICAgICAgIG9wdGlvbignb2tfdGV4dCcsICdPSyB0ZXh0JywgJycpLFxuICAgICAgICAgICAgICBvcHRpb24oJ3RpdGxlJywgJ1RpdGxlJywgJycpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBvcHRpb24oJ3N0eWxlJywgJ1N0eWxlJywgJycpLFxuICAgICAgICBdLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oJ2ZpZWxkcycsICdGaWVsZHMnLCAnJywge1xuICAgICAgICBlbGVtZW50OiAnc3ViZm9ybV9hcnJheScsXG4gICAgICAgIHN1YmZvcm1PcHRpb25zOiBbXG4gICAgICAgICAgb3B0aW9uKCd0aXRsZScsICdUaXRsZScsICcnLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbigndmFsdWUnLCAnVmFsdWUnLCAnJywgeyByZXF1aXJlZDogdHJ1ZSB9KSxcbiAgICAgICAgICBvcHRpb24oJ3Nob3J0JywgJ1Nob3J0JywgJycsIHsgZWxlbWVudDogJ2NoZWNrYm94JyB9KSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgaHR0cENvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ09wc0dlbmllJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgbm90aWZpY2F0aW9ucyB0byBPcHNHZW5pZScsXG4gICAgdHlwZTogJ29wc2dlbmllJyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnT3BzR2VuaWUgc2V0dGluZ3MnLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIG9wdGlvbignYXBpX2tleScsICdBUEkga2V5JywgJ1RoZSBBUEkga2V5IHRvIHVzZSB3aGVuIHRhbGtpbmcgdG8gdGhlIE9wc0dlbmllIEFQSS4nKSxcbiAgICAgIG9wdGlvbignYXBpX3VybCcsICdBUEkgVVJMJywgJ1RoZSBob3N0IHRvIHNlbmQgT3BzR2VuaWUgQVBJIHJlcXVlc3RzIHRvLicpLFxuICAgICAgb3B0aW9uKCdtZXNzYWdlJywgJ01lc3NhZ2UnLCAnQWxlcnQgdGV4dCBsaW1pdGVkIHRvIDEzMCBjaGFyYWN0ZXJzLicpLFxuICAgICAgb3B0aW9uKCdkZXNjcmlwdGlvbicsICdEZXNjcmlwdGlvbicsICdBIGRlc2NyaXB0aW9uIG9mIHRoZSBpbmNpZGVudC4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJvcHNnZW5pZS5kZWZhdWx0LmRlc2NyaXB0aW9uXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignc291cmNlJywgJ1NvdXJjZScsICdBIGJhY2tsaW5rIHRvIHRoZSBzZW5kZXIgb2YgdGhlIG5vdGlmaWNhdGlvbi4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJvcHNnZW5pZS5kZWZhdWx0LnNvdXJjZVwiIC4gfX0nLFxuICAgICAgfSksXG4gICAgICBvcHRpb24oXG4gICAgICAgICdkZXRhaWxzJyxcbiAgICAgICAgJ0RldGFpbHMnLFxuICAgICAgICAnQSBzZXQgb2YgYXJiaXRyYXJ5IGtleS92YWx1ZSBwYWlycyB0aGF0IHByb3ZpZGUgZnVydGhlciBkZXRhaWwgYWJvdXQgdGhlIGluY2lkZW50LicsXG4gICAgICAgIHtcbiAgICAgICAgICBlbGVtZW50OiAna2V5X3ZhbHVlX21hcCcsXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBvcHRpb24oJ3RhZ3MnLCAnVGFncycsICdDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0YWdzIGF0dGFjaGVkIHRvIHRoZSBub3RpZmljYXRpb25zLicpLFxuICAgICAgb3B0aW9uKCdub3RlJywgJ05vdGUnLCAnQWRkaXRpb25hbCBhbGVydCBub3RlLicpLFxuICAgICAgb3B0aW9uKCdwcmlvcml0eScsICdQcmlvcml0eScsICdQcmlvcml0eSBsZXZlbCBvZiBhbGVydC4gUG9zc2libGUgdmFsdWVzIGFyZSBQMSwgUDIsIFAzLCBQNCwgYW5kIFA1LicpLFxuICAgICAgb3B0aW9uKCdyZXNwb25kZXJzJywgJ1Jlc3BvbmRlcnMnLCAnTGlzdCBvZiByZXNwb25kZXJzIHJlc3BvbnNpYmxlIGZvciBub3RpZmljYXRpb25zLicsIHtcbiAgICAgICAgZWxlbWVudDogJ3N1YmZvcm1fYXJyYXknLFxuICAgICAgICBzdWJmb3JtT3B0aW9uczogW1xuICAgICAgICAgIG9wdGlvbigndHlwZScsICdUeXBlJywgJ1widGVhbVwiLCBcInVzZXJcIiwgXCJlc2NhbGF0aW9uXCIgb3Igc2NoZWR1bGVcIi4nLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgICAgIG9wdGlvbignaWQnLCAnSUQnLCAnRXhhY3RseSBvbmUgb2YgdGhlc2UgZmllbGRzIHNob3VsZCBiZSBkZWZpbmVkLicpLFxuICAgICAgICAgIG9wdGlvbignbmFtZScsICdOYW1lJywgJ0V4YWN0bHkgb25lIG9mIHRoZXNlIGZpZWxkcyBzaG91bGQgYmUgZGVmaW5lZC4nKSxcbiAgICAgICAgICBvcHRpb24oJ3VzZXJuYW1lJywgJ1VzZXJuYW1lJywgJ0V4YWN0bHkgb25lIG9mIHRoZXNlIGZpZWxkcyBzaG91bGQgYmUgZGVmaW5lZC4nKSxcbiAgICAgICAgXSxcbiAgICAgIH0pLFxuICAgICAgaHR0cENvbmZpZ09wdGlvbixcbiAgICBdLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1ZpY3Rvck9wcycsXG4gICAgZGVzY3JpcHRpb246ICdTZW5kIG5vdGlmaWNhdGlvbnMgdG8gVmljdG9yT3BzJyxcbiAgICB0eXBlOiAndmljdG9yb3BzJyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnVmljdG9yT3BzIHNldHRpbmdzJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICBvcHRpb24oJ2FwaV9rZXknLCAnQVBJIGtleScsICdUaGUgQVBJIGtleSB0byB1c2Ugd2hlbiB0YWxraW5nIHRvIHRoZSBWaWN0b3JPcHMgQVBJLicpLFxuICAgICAgb3B0aW9uKCdhcGlfdXJsJywgJ0FQSSBVUkwnLCAnVGhlIFZpY3Rvck9wcyBBUEkgVVJMLicpLFxuICAgICAgb3B0aW9uKCdyb3V0aW5nX2tleScsICdSb3V0aW5nIGtleScsICdBIGtleSB1c2VkIHRvIG1hcCB0aGUgYWxlcnQgdG8gYSB0ZWFtLicsIHsgcmVxdWlyZWQ6IHRydWUgfSksXG4gICAgICBvcHRpb24oJ21lc3NhZ2VfdHlwZScsICdNZXNzYWdlIHR5cGUnLCAnRGVzY3JpYmVzIHRoZSBiZWhhdmlvciBvZiB0aGUgYWxlcnQgKENSSVRJQ0FMLCBXQVJOSU5HLCBJTkZPKS4nKSxcbiAgICAgIG9wdGlvbignZW50aXR5X2Rpc3BsYXlfbmFtZScsICdFbnRpdHkgZGlzcGxheSBuYW1lJywgJ0NvbnRhaW5zIHN1bW1hcnkgb2YgdGhlIGFsZXJ0ZWQgcHJvYmxlbS4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJ2aWN0b3JvcHMuZGVmYXVsdC5lbnRpdHlfZGlzcGxheV9uYW1lXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignc3RhdGVfbWVzc2FnZScsICdTdGF0ZSBtZXNzYWdlJywgJ0NvbnRhaW5zIGxvbmcgZXhwbGFuYXRpb24gb2YgdGhlIGFsZXJ0ZWQgcHJvYmxlbS4nLCB7XG4gICAgICAgIHBsYWNlaG9sZGVyOiAne3sgdGVtcGxhdGUgXCJ2aWN0b3JvcHMuZGVmYXVsdC5zdGF0ZV9tZXNzYWdlXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIG9wdGlvbignbW9uaXRvcmluZ190b29sJywgJ01vbml0b3JpbmcgdG9vbCcsICdUaGUgbW9uaXRvcmluZyB0b29sIHRoZSBzdGF0ZSBtZXNzYWdlIGlzIGZyb20uJywge1xuICAgICAgICBwbGFjZWhvbGRlcjogJ3t7IHRlbXBsYXRlIFwidmljdG9yb3BzLmRlZmF1bHQubW9uaXRvcmluZ190b29sXCIgLiB9fScsXG4gICAgICB9KSxcbiAgICAgIGh0dHBDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdXZWJob29rJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NlbmQgbm90aWZpY2F0aW9ucyB0byBhIHdlYmhvb2snLFxuICAgIHR5cGU6ICd3ZWJob29rJyxcbiAgICBpbmZvOiAnJyxcbiAgICBoZWFkaW5nOiAnV2ViaG9vayBzZXR0aW5ncycsXG4gICAgb3B0aW9uczogW1xuICAgICAgb3B0aW9uKCd1cmwnLCAnVVJMJywgJ1RoZSBlbmRwb2ludCB0byBzZW5kIEhUVFAgUE9TVCByZXF1ZXN0cyB0by4nLCB7IHJlcXVpcmVkOiB0cnVlIH0pLFxuICAgICAgb3B0aW9uKFxuICAgICAgICAnbWF4X2FsZXJ0cycsXG4gICAgICAgICdNYXggYWxlcnRzJyxcbiAgICAgICAgJ1RoZSBtYXhpbXVtIG51bWJlciBvZiBhbGVydHMgdG8gaW5jbHVkZSBpbiBhIHNpbmdsZSB3ZWJob29rIG1lc3NhZ2UuIEFsZXJ0cyBhYm92ZSB0aGlzIHRocmVzaG9sZCBhcmUgdHJ1bmNhdGVkLiBXaGVuIGxlYXZpbmcgdGhpcyBhdCBpdHMgZGVmYXVsdCB2YWx1ZSBvZiAwLCBhbGwgYWxlcnRzIGFyZSBpbmNsdWRlZC4nLFxuICAgICAgICB7IHBsYWNlaG9sZGVyOiAnMCcsIHZhbGlkYXRpb25SdWxlOiAnKF5cXFxcZCskfF4kKScgfVxuICAgICAgKSxcbiAgICAgIGh0dHBDb25maWdPcHRpb24sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBnbG9iYWxDb25maWdPcHRpb25zOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uW10gPSBbXG4gIC8vIGVtYWlsXG4gIG9wdGlvbignc210cF9mcm9tJywgJ1NNVFAgZnJvbScsICdUaGUgZGVmYXVsdCBTTVRQIEZyb20gaGVhZGVyIGZpZWxkLicpLFxuICBvcHRpb24oXG4gICAgJ3NtdHBfc21hcnRob3N0JyxcbiAgICAnU01UUCBzbWFydGhvc3QnLFxuICAgICdUaGUgZGVmYXVsdCBTTVRQIHNtYXJ0aG9zdCB1c2VkIGZvciBzZW5kaW5nIGVtYWlscywgaW5jbHVkaW5nIHBvcnQgbnVtYmVyLiBQb3J0IG51bWJlciB1c3VhbGx5IGlzIDI1LCBvciA1ODcgZm9yIFNNVFAgb3ZlciBUTFMgKHNvbWV0aW1lcyByZWZlcnJlZCB0byBhcyBTVEFSVFRMUykuIEV4YW1wbGU6IHNtdHAuZXhhbXBsZS5vcmc6NTg3J1xuICApLFxuICBvcHRpb24oJ3NtdHBfaGVsbG8nLCAnU01UUCBoZWxsbycsICdUaGUgZGVmYXVsdCBob3N0bmFtZSB0byBpZGVudGlmeSB0byB0aGUgU01UUCBzZXJ2ZXIuJywge1xuICAgIHBsYWNlaG9sZGVyOiAnbG9jYWxob3N0JyxcbiAgfSksXG4gIG9wdGlvbihcbiAgICAnc210cF9hdXRoX3VzZXJuYW1lJyxcbiAgICAnU01UUCBhdXRoIHVzZXJuYW1lJyxcbiAgICBcIlNNVFAgQXV0aCB1c2luZyBDUkFNLU1ENSwgTE9HSU4gYW5kIFBMQUlOLiBJZiBlbXB0eSwgQWxlcnRtYW5hZ2VyIGRvZXNuJ3QgYXV0aGVudGljYXRlIHRvIHRoZSBTTVRQIHNlcnZlci5cIlxuICApLFxuICBvcHRpb24oJ3NtdHBfYXV0aF9wYXNzd29yZCcsICdTTVRQIGF1dGggcGFzc3dvcmQnLCAnU01UUCBBdXRoIHVzaW5nIExPR0lOIGFuZCBQTEFJTi4nKSxcbiAgb3B0aW9uKCdzbXRwX2F1dGhfaWRlbnRpdHknLCAnU01UUCBhdXRoIGlkZW50aXR5JywgJ1NNVFAgQXV0aCB1c2luZyBQTEFJTi4nKSxcbiAgb3B0aW9uKCdzbXRwX2F1dGhfc2VjcmV0JywgJ1NNVFAgYXV0aCBzZWNyZXQnLCAnU01UUCBBdXRoIHVzaW5nIENSQU0tTUQ1LicpLFxuICBvcHRpb24oXG4gICAgJ3NtdHBfcmVxdWlyZV90bHMnLFxuICAgICdTTVRQIHJlcXVpcmUgVExTJyxcbiAgICAnVGhlIGRlZmF1bHQgU01UUCBUTFMgcmVxdWlyZW1lbnQuIE5vdGUgdGhhdCBHbyBkb2VzIG5vdCBzdXBwb3J0IHVuZW5jcnlwdGVkIGNvbm5lY3Rpb25zIHRvIHJlbW90ZSBTTVRQIGVuZHBvaW50cy4nLFxuICAgIHtcbiAgICAgIGVsZW1lbnQ6ICdjaGVja2JveCcsXG4gICAgfVxuICApLFxuXG4gIC8vIHNsYWNrXG4gIG9wdGlvbignc2xhY2tfYXBpX3VybCcsICdTbGFjayBBUEkgVVJMJywgJycpLFxuICBvcHRpb24oJ3ZpY3Rvcm9wc19hcGlfa2V5JywgJ1ZpY3Rvck9wcyBBUEkga2V5JywgJycpLFxuICBvcHRpb24oJ3ZpY3Rvcm9wc19hcGlfdXJsJywgJ1ZpY3Rvck9wcyBBUEkgVVJMJywgJycsIHtcbiAgICBwbGFjZWhvbGRlcjogJ2h0dHBzOi8vYWxlcnQudmljdG9yb3BzLmNvbS9pbnRlZ3JhdGlvbnMvZ2VuZXJpYy8yMDEzMTExNC9hbGVydC8nLFxuICB9KSxcbiAgb3B0aW9uKCdwYWdlcmR1dHlfdXJsJywgJ1BhZ2VyRHV0eSBVUkwnLCAnaHR0cHM6Ly9ldmVudHMucGFnZXJkdXR5LmNvbS92Mi9lbnF1ZXVlJyksXG4gIG9wdGlvbignb3BzZ2VuaWVfYXBpX2tleScsICdPcHNHZW5pZSBBUEkga2V5JywgJycpLFxuICBvcHRpb24oJ29wc2dlbmllX2FwaV91cmwnLCAnT3BzR2VuaWUgQVBJIFVSTCcsICcnLCB7IHBsYWNlaG9sZGVyOiAnaHR0cHM6Ly9hcGkub3BzZ2VuaWUuY29tLycgfSksXG4gIG9wdGlvbignd2VjaGF0X2FwaV91cmwnLCAnV2VDaGF0IEFQSSBVUkwnLCAnJywgeyBwbGFjZWhvbGRlcjogJ2h0dHBzOi8vcXlhcGkud2VpeGluLnFxLmNvbS9jZ2ktYmluLycgfSksXG4gIG9wdGlvbignd2VjaGF0X2FwaV9zZWNyZXQnLCAnV2VDaGF0IEFQSSBzZWNyZXQnLCAnJyksXG4gIG9wdGlvbignd2VjaGF0X2FwaV9jb3JwX2lkJywgJ1dlQ2hhdCBBUEkgY29ycCBpZCcsICcnKSxcbiAgaHR0cENvbmZpZ09wdGlvbixcbiAgb3B0aW9uKFxuICAgICdyZXNvbHZlX3RpbWVvdXQnLFxuICAgICdSZXNvbHZlIHRpbWVvdXQnLFxuICAgICdSZXNvbHZlVGltZW91dCBpcyB0aGUgZGVmYXVsdCB2YWx1ZSB1c2VkIGJ5IGFsZXJ0bWFuYWdlciBpZiB0aGUgYWxlcnQgZG9lcyBub3QgaW5jbHVkZSBFbmRzQXQsIGFmdGVyIHRoaXMgdGltZSBwYXNzZXMgaXQgY2FuIGRlY2xhcmUgdGhlIGFsZXJ0IGFzIHJlc29sdmVkIGlmIGl0IGhhcyBub3QgYmVlbiB1cGRhdGVkLiBUaGlzIGhhcyBubyBpbXBhY3Qgb24gYWxlcnRzIGZyb20gUHJvbWV0aGV1cywgYXMgdGhleSBhbHdheXMgaW5jbHVkZSBFbmRzQXQuJyxcbiAgICB7XG4gICAgICBwbGFjZWhvbGRlcjogJzVtJyxcbiAgICB9XG4gICksXG5dO1xuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7XG4gIEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyxcbiAgR3JhZmFuYU1hbmFnZWRSZWNlaXZlckNvbmZpZyxcbiAgUmVjZWl2ZXIsXG4gIFJvdXRlLFxufSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5pbXBvcnQgeyBDbG91ZE5vdGlmaWVyVHlwZSwgTm90aWZpZXJEVE8sIE5vdGlmaWVyVHlwZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7XG4gIENsb3VkQ2hhbm5lbENvbmZpZyxcbiAgQ2xvdWRDaGFubmVsTWFwLFxuICBDbG91ZENoYW5uZWxWYWx1ZXMsXG4gIEdyYWZhbmFDaGFubmVsTWFwLFxuICBHcmFmYW5hQ2hhbm5lbFZhbHVlcyxcbiAgUmVjZWl2ZXJGb3JtVmFsdWVzLFxufSBmcm9tICcuLi90eXBlcy9yZWNlaXZlci1mb3JtJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdyYWZhbmFSZWNlaXZlclRvRm9ybVZhbHVlcyhcbiAgcmVjZWl2ZXI6IFJlY2VpdmVyLFxuICBub3RpZmllcnM6IE5vdGlmaWVyRFRPW11cbik6IFtSZWNlaXZlckZvcm1WYWx1ZXM8R3JhZmFuYUNoYW5uZWxWYWx1ZXM+LCBHcmFmYW5hQ2hhbm5lbE1hcF0ge1xuICBjb25zdCBjaGFubmVsTWFwOiBHcmFmYW5hQ2hhbm5lbE1hcCA9IHt9O1xuICAvLyBnaXZpbmcgZWFjaCBmb3JtIHJlY2VpdmVyIGl0ZW0gYSB1bmlxdWUgaWQgc28gd2UgY2FuIHVzZSBpdCB0byBtYXAgYmFjayB0byBcIm9yaWdpbmFsXCIgaXRlbXNcbiAgLy8gYXMgd2VsbCBhcyB0byB1c2UgYXMgYGtleWAgcHJvcC5cbiAgLy8gQFRPRE8gdXNlIHVpZCBvbmNlIGJhY2tlbmQgaXMgZml4ZWQgdG8gcHJvdmlkZSBpdC4gdGhlbiB3ZSBjYW4gZ2V0IHJpZCBvZiB0aGUgR3JhZmFuYUNoYW5uZWxNYXBcbiAgbGV0IGlkQ291bnRlciA9IDE7XG4gIGNvbnN0IHZhbHVlcyA9IHtcbiAgICBuYW1lOiByZWNlaXZlci5uYW1lLFxuICAgIGl0ZW1zOlxuICAgICAgcmVjZWl2ZXIuZ3JhZmFuYV9tYW5hZ2VkX3JlY2VpdmVyX2NvbmZpZ3M/Lm1hcCgoY2hhbm5lbCkgPT4ge1xuICAgICAgICBjb25zdCBpZCA9IFN0cmluZyhpZENvdW50ZXIrKyk7XG4gICAgICAgIGNoYW5uZWxNYXBbaWRdID0gY2hhbm5lbDtcbiAgICAgICAgY29uc3Qgbm90aWZpZXIgPSBub3RpZmllcnMuZmluZCgoeyB0eXBlIH0pID0+IHR5cGUgPT09IGNoYW5uZWwudHlwZSk7XG4gICAgICAgIHJldHVybiBncmFmYW5hQ2hhbm5lbENvbmZpZ1RvRm9ybUNoYW5uZWxWYWx1ZXMoaWQsIGNoYW5uZWwsIG5vdGlmaWVyKTtcbiAgICAgIH0pID8/IFtdLFxuICB9O1xuICByZXR1cm4gW3ZhbHVlcywgY2hhbm5lbE1hcF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG91ZFJlY2VpdmVyVG9Gb3JtVmFsdWVzKFxuICByZWNlaXZlcjogUmVjZWl2ZXIsXG4gIG5vdGlmaWVyczogTm90aWZpZXJEVE9bXVxuKTogW1JlY2VpdmVyRm9ybVZhbHVlczxDbG91ZENoYW5uZWxWYWx1ZXM+LCBDbG91ZENoYW5uZWxNYXBdIHtcbiAgY29uc3QgY2hhbm5lbE1hcDogQ2xvdWRDaGFubmVsTWFwID0ge307XG4gIC8vIGdpdmluZyBlYWNoIGZvcm0gcmVjZWl2ZXIgaXRlbSBhIHVuaXF1ZSBpZCBzbyB3ZSBjYW4gdXNlIGl0IHRvIG1hcCBiYWNrIHRvIFwib3JpZ2luYWxcIiBpdGVtc1xuICBsZXQgaWRDb3VudGVyID0gMTtcbiAgY29uc3QgaXRlbXM6IENsb3VkQ2hhbm5lbFZhbHVlc1tdID0gT2JqZWN0LmVudHJpZXMocmVjZWl2ZXIpXG4gICAgLy8gZmlsdGVyIG91dCBvbmx5IGNvbmZpZyBpdGVtcyB0aGF0IGFyZSByZWxldmFudCB0byBjbG91ZFxuICAgIC5maWx0ZXIoKFt0eXBlXSkgPT4gdHlwZS5lbmRzV2l0aCgnX2NvbmZpZ3MnKSAmJiB0eXBlICE9PSAnZ3JhZmFuYV9tYW5hZ2VkX3JlY2VpdmVyX2NvbmZpZ3MnKVxuICAgIC8vIG1hcCBwcm9wZXJ0eSBuYW1lcyB0byBjbG91ZCBub3RpZmllciB0eXBlcyBieSByZW1vdmluZyB0aGUgYF9jb25maWdgIHN1ZmZpeFxuICAgIC5tYXAoKFt0eXBlLCBjb25maWdzXSk6IFtDbG91ZE5vdGlmaWVyVHlwZSwgQ2xvdWRDaGFubmVsQ29uZmlnW11dID0+IFtcbiAgICAgIHR5cGUucmVwbGFjZSgnX2NvbmZpZ3MnLCAnJykgYXMgQ2xvdWROb3RpZmllclR5cGUsXG4gICAgICBjb25maWdzIGFzIENsb3VkQ2hhbm5lbENvbmZpZ1tdLFxuICAgIF0pXG4gICAgLy8gY29udmVydCBjaGFubmVsIGNvbmZpZ3MgdG8gZm9ybSB2YWx1ZXNcbiAgICAubWFwKChbdHlwZSwgY29uZmlnc10pID0+XG4gICAgICBjb25maWdzLm1hcCgoY29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKGlkQ291bnRlcisrKTtcbiAgICAgICAgY2hhbm5lbE1hcFtpZF0gPSB7IHR5cGUsIGNvbmZpZyB9O1xuICAgICAgICBjb25zdCBub3RpZmllciA9IG5vdGlmaWVycy5maW5kKChub3RpZmllcikgPT4gbm90aWZpZXIudHlwZSA9PT0gdHlwZSk7XG4gICAgICAgIGlmICghbm90aWZpZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gY2xvdWQgbm90aWZpZXI6ICR7dHlwZX1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvdWRDaGFubmVsQ29uZmlnVG9Gb3JtQ2hhbm5lbFZhbHVlcyhpZCwgdHlwZSwgY29uZmlnKTtcbiAgICAgIH0pXG4gICAgKVxuICAgIC5mbGF0KCk7XG4gIGNvbnN0IHZhbHVlcyA9IHtcbiAgICBuYW1lOiByZWNlaXZlci5uYW1lLFxuICAgIGl0ZW1zLFxuICB9O1xuICByZXR1cm4gW3ZhbHVlcywgY2hhbm5lbE1hcF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtVmFsdWVzVG9HcmFmYW5hUmVjZWl2ZXIoXG4gIHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPEdyYWZhbmFDaGFubmVsVmFsdWVzPixcbiAgY2hhbm5lbE1hcDogR3JhZmFuYUNoYW5uZWxNYXAsXG4gIGRlZmF1bHRDaGFubmVsVmFsdWVzOiBHcmFmYW5hQ2hhbm5lbFZhbHVlc1xuKTogUmVjZWl2ZXIge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgIGdyYWZhbmFfbWFuYWdlZF9yZWNlaXZlcl9jb25maWdzOiAodmFsdWVzLml0ZW1zID8/IFtdKS5tYXAoKGNoYW5uZWxWYWx1ZXMpID0+IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nOiBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnIHwgdW5kZWZpbmVkID0gY2hhbm5lbE1hcFtjaGFubmVsVmFsdWVzLl9faWRdO1xuICAgICAgcmV0dXJuIGZvcm1DaGFubmVsVmFsdWVzVG9HcmFmYW5hQ2hhbm5lbENvbmZpZyhjaGFubmVsVmFsdWVzLCBkZWZhdWx0Q2hhbm5lbFZhbHVlcywgdmFsdWVzLm5hbWUsIGV4aXN0aW5nKTtcbiAgICB9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1WYWx1ZXNUb0Nsb3VkUmVjZWl2ZXIoXG4gIHZhbHVlczogUmVjZWl2ZXJGb3JtVmFsdWVzPENsb3VkQ2hhbm5lbFZhbHVlcz4sXG4gIGRlZmF1bHRzOiBDbG91ZENoYW5uZWxWYWx1ZXNcbik6IFJlY2VpdmVyIHtcbiAgY29uc3QgcmVjdjogUmVjZWl2ZXIgPSB7XG4gICAgbmFtZTogdmFsdWVzLm5hbWUsXG4gIH07XG4gIHZhbHVlcy5pdGVtcy5mb3JFYWNoKCh7IF9faWQsIHR5cGUsIHNldHRpbmdzLCBzZW5kUmVzb2x2ZWQgfSkgPT4ge1xuICAgIGNvbnN0IGNoYW5uZWwgPSBvbWl0RW1wdHlWYWx1ZXMoe1xuICAgICAgLi4uc2V0dGluZ3MsXG4gICAgICBzZW5kX3Jlc29sdmVkOiBzZW5kUmVzb2x2ZWQgPz8gZGVmYXVsdHMuc2VuZFJlc29sdmVkLFxuICAgIH0pO1xuXG4gICAgY29uc3QgY29uZmlnc0tleSA9IGAke3R5cGV9X2NvbmZpZ3NgO1xuICAgIGlmICghcmVjdltjb25maWdzS2V5XSkge1xuICAgICAgcmVjdltjb25maWdzS2V5XSA9IFtjaGFubmVsXTtcbiAgICB9IGVsc2Uge1xuICAgICAgKHJlY3ZbY29uZmlnc0tleV0gYXMgdW5rbm93bltdKS5wdXNoKGNoYW5uZWwpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZWN2O1xufVxuXG4vLyB3aWxsIGFkZCBuZXcgcmVjZWl2ZXIsIG9yIHJlcGxhY2UgZXhpc2l0bmcgb25lXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29uZmlnV2l0aFJlY2VpdmVyKFxuICBjb25maWc6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyxcbiAgcmVjZWl2ZXI6IFJlY2VpdmVyLFxuICByZXBsYWNlUmVjZWl2ZXJOYW1lPzogc3RyaW5nXG4pOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcge1xuICBjb25zdCBvbGRSZWNlaXZlcnMgPSBjb25maWcuYWxlcnRtYW5hZ2VyX2NvbmZpZy5yZWNlaXZlcnMgPz8gW107XG5cbiAgLy8gc2FuaXR5IGNoZWNrIHRoYXQgbmFtZSBpcyBub3QgZHVwbGljYXRlZFxuICBpZiAocmVjZWl2ZXIubmFtZSAhPT0gcmVwbGFjZVJlY2VpdmVyTmFtZSAmJiAhIW9sZFJlY2VpdmVycy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcmVjZWl2ZXIubmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYER1cGxpY2F0ZSByZWNlaXZlciBuYW1lICR7cmVjZWl2ZXIubmFtZX1gKTtcbiAgfVxuXG4gIC8vIHNhbml0eSBjaGVjayB0aGF0IGV4aXN0aW5nIHJlY2VpdmVyIGV4aXN0c1xuICBpZiAocmVwbGFjZVJlY2VpdmVyTmFtZSAmJiAhb2xkUmVjZWl2ZXJzLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSByZXBsYWNlUmVjZWl2ZXJOYW1lKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgcmVjZWl2ZXIgJHtyZXBsYWNlUmVjZWl2ZXJOYW1lfSB0byBleGlzdCwgYnV0IGRpZCBub3QgZmluZCBpdCBpbiB0aGUgY29uZmlnYCk7XG4gIH1cblxuICBjb25zdCB1cGRhdGVkOiBBbGVydE1hbmFnZXJDb3J0ZXhDb25maWcgPSB7XG4gICAgLi4uY29uZmlnLFxuICAgIGFsZXJ0bWFuYWdlcl9jb25maWc6IHtcbiAgICAgIC8vIEB0b2RvIHJlbmFtZSByZWNlaXZlciBvbiByb3V0ZXMgYXMgbmVjZXNzYXJ5XG4gICAgICAuLi5jb25maWcuYWxlcnRtYW5hZ2VyX2NvbmZpZyxcbiAgICAgIHJlY2VpdmVyczogcmVwbGFjZVJlY2VpdmVyTmFtZVxuICAgICAgICA/IG9sZFJlY2VpdmVycy5tYXAoKGV4aXN0aW5nUmVjZWl2ZXIpID0+XG4gICAgICAgICAgICBleGlzdGluZ1JlY2VpdmVyLm5hbWUgPT09IHJlcGxhY2VSZWNlaXZlck5hbWUgPyByZWNlaXZlciA6IGV4aXN0aW5nUmVjZWl2ZXJcbiAgICAgICAgICApXG4gICAgICAgIDogWy4uLm9sZFJlY2VpdmVycywgcmVjZWl2ZXJdLFxuICAgIH0sXG4gIH07XG5cbiAgLy8gaWYgcmVjZWl2ZXIgd2FzIHJlbmFtZWQsIHJlbmFtZSBpdCBpbiByb3V0ZXMgYXMgd2VsbFxuICBpZiAodXBkYXRlZC5hbGVydG1hbmFnZXJfY29uZmlnLnJvdXRlICYmIHJlcGxhY2VSZWNlaXZlck5hbWUgJiYgcmVjZWl2ZXIubmFtZSAhPT0gcmVwbGFjZVJlY2VpdmVyTmFtZSkge1xuICAgIHVwZGF0ZWQuYWxlcnRtYW5hZ2VyX2NvbmZpZy5yb3V0ZSA9IHJlbmFtZVJlY2VpdmVySW5Sb3V0ZShcbiAgICAgIHVwZGF0ZWQuYWxlcnRtYW5hZ2VyX2NvbmZpZy5yb3V0ZSxcbiAgICAgIHJlcGxhY2VSZWNlaXZlck5hbWUsXG4gICAgICByZWNlaXZlci5uYW1lXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB1cGRhdGVkO1xufVxuXG5mdW5jdGlvbiByZW5hbWVSZWNlaXZlckluUm91dGUocm91dGU6IFJvdXRlLCBvbGROYW1lOiBzdHJpbmcsIG5ld05hbWU6IHN0cmluZykge1xuICBjb25zdCB1cGRhdGVkOiBSb3V0ZSA9IHtcbiAgICAuLi5yb3V0ZSxcbiAgfTtcbiAgaWYgKHVwZGF0ZWQucmVjZWl2ZXIgPT09IG9sZE5hbWUpIHtcbiAgICB1cGRhdGVkLnJlY2VpdmVyID0gbmV3TmFtZTtcbiAgfVxuICBpZiAodXBkYXRlZC5yb3V0ZXMpIHtcbiAgICB1cGRhdGVkLnJvdXRlcyA9IHVwZGF0ZWQucm91dGVzLm1hcCgocm91dGUpID0+IHJlbmFtZVJlY2VpdmVySW5Sb3V0ZShyb3V0ZSwgb2xkTmFtZSwgbmV3TmFtZSkpO1xuICB9XG4gIHJldHVybiB1cGRhdGVkO1xufVxuXG5mdW5jdGlvbiBjbG91ZENoYW5uZWxDb25maWdUb0Zvcm1DaGFubmVsVmFsdWVzKFxuICBpZDogc3RyaW5nLFxuICB0eXBlOiBDbG91ZE5vdGlmaWVyVHlwZSxcbiAgY2hhbm5lbDogQ2xvdWRDaGFubmVsQ29uZmlnXG4pOiBDbG91ZENoYW5uZWxWYWx1ZXMge1xuICByZXR1cm4ge1xuICAgIF9faWQ6IGlkLFxuICAgIHR5cGUsXG4gICAgc2V0dGluZ3M6IHtcbiAgICAgIC4uLmNoYW5uZWwsXG4gICAgfSxcbiAgICBzZWN1cmVGaWVsZHM6IHt9LFxuICAgIHNlY3VyZVNldHRpbmdzOiB7fSxcbiAgICBzZW5kUmVzb2x2ZWQ6IGNoYW5uZWwuc2VuZF9yZXNvbHZlZCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ3JhZmFuYUNoYW5uZWxDb25maWdUb0Zvcm1DaGFubmVsVmFsdWVzKFxuICBpZDogc3RyaW5nLFxuICBjaGFubmVsOiBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnLFxuICBub3RpZmllcj86IE5vdGlmaWVyRFRPXG4pOiBHcmFmYW5hQ2hhbm5lbFZhbHVlcyB7XG4gIGNvbnN0IHZhbHVlczogR3JhZmFuYUNoYW5uZWxWYWx1ZXMgPSB7XG4gICAgX19pZDogaWQsXG4gICAgdHlwZTogY2hhbm5lbC50eXBlIGFzIE5vdGlmaWVyVHlwZSxcbiAgICBzZWN1cmVTZXR0aW5nczoge30sXG4gICAgc2V0dGluZ3M6IHsgLi4uY2hhbm5lbC5zZXR0aW5ncyB9LFxuICAgIHNlY3VyZUZpZWxkczogeyAuLi5jaGFubmVsLnNlY3VyZUZpZWxkcyB9LFxuICAgIGRpc2FibGVSZXNvbHZlTWVzc2FnZTogY2hhbm5lbC5kaXNhYmxlUmVzb2x2ZU1lc3NhZ2UsXG4gIH07XG5cbiAgLy8gd29yayBhcm91bmQgaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvYWxlcnRpbmctc3F1YWQvaXNzdWVzLzEwMFxuICBub3RpZmllcj8ub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBpZiAob3B0aW9uLnNlY3VyZSAmJiB2YWx1ZXMuc2V0dGluZ3Nbb3B0aW9uLnByb3BlcnR5TmFtZV0pIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZXMuc2V0dGluZ3Nbb3B0aW9uLnByb3BlcnR5TmFtZV07XG4gICAgICB2YWx1ZXMuc2VjdXJlRmllbGRzW29wdGlvbi5wcm9wZXJ0eU5hbWVdID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtQ2hhbm5lbFZhbHVlc1RvR3JhZmFuYUNoYW5uZWxDb25maWcoXG4gIHZhbHVlczogR3JhZmFuYUNoYW5uZWxWYWx1ZXMsXG4gIGRlZmF1bHRzOiBHcmFmYW5hQ2hhbm5lbFZhbHVlcyxcbiAgbmFtZTogc3RyaW5nLFxuICBleGlzdGluZz86IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWdcbik6IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcge1xuICBjb25zdCBjaGFubmVsOiBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnID0ge1xuICAgIHNldHRpbmdzOiBvbWl0RW1wdHlWYWx1ZXMoe1xuICAgICAgLi4uKGV4aXN0aW5nICYmIGV4aXN0aW5nLnR5cGUgPT09IHZhbHVlcy50eXBlID8gZXhpc3Rpbmcuc2V0dGluZ3MgPz8ge30gOiB7fSksXG4gICAgICAuLi4odmFsdWVzLnNldHRpbmdzID8/IHt9KSxcbiAgICB9KSxcbiAgICBzZWN1cmVTZXR0aW5nczogdmFsdWVzLnNlY3VyZVNldHRpbmdzID8/IHt9LFxuICAgIHR5cGU6IHZhbHVlcy50eXBlLFxuICAgIG5hbWUsXG4gICAgZGlzYWJsZVJlc29sdmVNZXNzYWdlOlxuICAgICAgdmFsdWVzLmRpc2FibGVSZXNvbHZlTWVzc2FnZSA/PyBleGlzdGluZz8uZGlzYWJsZVJlc29sdmVNZXNzYWdlID8/IGRlZmF1bHRzLmRpc2FibGVSZXNvbHZlTWVzc2FnZSxcbiAgfTtcbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgY2hhbm5lbC51aWQgPSBleGlzdGluZy51aWQ7XG4gIH1cbiAgcmV0dXJuIGNoYW5uZWw7XG59XG5cbi8vIHdpbGwgcmVtb3ZlIHByb3BlcnRpZXMgdGhhdCBoYXZlIGVtcHR5ICgnJywgbnVsbCwgdW5kZWZpbmVkKSBvYmplY3QgcHJvcGVydGllcy5cbi8vIHRyYXZlcnNlcyBuZXN0ZWQgb2JqZWN0cyBhbmQgYXJyYXlzIGFzIHdlbGwuIGluIHBsYWNlLCBtdXRhdGVzIHRoZSBvYmplY3QuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGZvcm0gd2lsbCBzdWJtaXQgZW1wdHkgc3RyaW5nIGZvciBub3QgZmlsbGVkIGluIGZpZWxkcyxcbi8vIGJ1dCBmb3IgY2xvdWQgYWxlcnRtYW5hZ2VyIHJlY2VpdmVyIGNvbmZpZyB0byB1c2UgZ2xvYmFsIGRlZmF1bHQgdmFsdWUgdGhlIHByb3BlcnR5IG11c3QgYmUgb21pdHRlZCBlbnRpcmVseVxuLy8gdGhpcyBpc24ndCBhIHBlcmZlY3Qgc29sdXRpb24gdGhvdWdoLiBObyB3YXkgZm9yIHVzZXIgdG8gaW50ZW50aW9uYWxseSBwcm92aWRlIGFuIGVtcHR5IHN0cmluZy4gV2lsbCBuZWVkIHJldGhpbmtpbmcgbGF0ZXJcbmV4cG9ydCBmdW5jdGlvbiBvbWl0RW1wdHlWYWx1ZXM8VD4ob2JqOiBUKTogVCB7XG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICBvYmouZm9yRWFjaChvbWl0RW1wdHlWYWx1ZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkge1xuICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIChvYmogYXMgYW55KVtrZXldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb21pdEVtcHR5VmFsdWVzKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuIiwiaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHJlY2VpdmVyVHlwZU5hbWVzIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvY29uc3RzJztcbmltcG9ydCB7IEdyYWZhbmFNYW5hZ2VkUmVjZWl2ZXJDb25maWcsIFJlY2VpdmVyIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgTm90aWZpZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG4vLyBleHRyYWN0IG5vdGlmaWVyIHR5cGUgbmFtZSB0byBjb3VudCBtYXAsIGVnIHsgU2xhY2s6IDEsIEVtYWlsOiAyIH1cblxudHlwZSBOb3RpZmllclR5cGVDb3VudHMgPSBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+OyAvLyBuYW1lIDogY291bnRcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3ROb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXI6IFJlY2VpdmVyLCBncmFmYW5hTm90aWZpZXJzOiBOb3RpZmllckRUT1tdKTogTm90aWZpZXJUeXBlQ291bnRzIHtcbiAgaWYgKHJlY2VpdmVyWydncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncyddKSB7XG4gICAgcmV0dXJuIGdldEdyYWZhbmFOb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXIuZ3JhZmFuYV9tYW5hZ2VkX3JlY2VpdmVyX2NvbmZpZ3MgPz8gW10sIGdyYWZhbmFOb3RpZmllcnMpO1xuICB9XG4gIHJldHVybiBnZXRDb3J0ZXhBbGVydE1hbmFnZXJOb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRDb3J0ZXhBbGVydE1hbmFnZXJOb3RpZmllclR5cGVDb3VudHMocmVjZWl2ZXI6IFJlY2VpdmVyKTogTm90aWZpZXJUeXBlQ291bnRzIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHJlY2VpdmVyKVxuICAgIC5maWx0ZXIoKFtrZXldKSA9PiBrZXkgIT09ICdncmFmYW5hX21hbmFnZWRfcmVjZWl2ZXJfY29uZmlncycgJiYga2V5LmVuZHNXaXRoKCdfY29uZmlncycpKSAvLyBmaWx0ZXIgb3V0IG9ubHkgcHJvcGVydGllcyB0aGF0IGFyZSBhbGVydG1hbmFnZXIgbm90aWZpZXJcbiAgICAuZmlsdGVyKChbXywgdmFsdWVdKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiAhIXZhbHVlLmxlbmd0aCkgLy8gY2hlY2sgdGhhdCB0aGVyZSBhcmUgYWN0dWFsbHkgbm90aWZpZXJzIG9mIHRoaXMgdHlwZSBjb25maWd1cmVkXG4gICAgLnJlZHVjZTxOb3RpZmllclR5cGVDb3VudHM+KChhY2MsIFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGtleS5yZXBsYWNlKCdfY29uZmlncycsICcnKTsgLy8gcmVtb3ZlIHRoZSBgX2NvbmZpZ2AgcGFydCBmcm9tIHRoZSBrZXksIG1ha2luZyBpdCBpbnR0byBhIG5vdGlmaWVyIG5hbWVcbiAgICAgIGNvbnN0IG5hbWUgPSByZWNlaXZlclR5cGVOYW1lc1t0eXBlXSA/PyBjYXBpdGFsaXplKHR5cGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWNjLFxuICAgICAgICBbbmFtZV06IChhY2NbbmFtZV0gPz8gMCkgKyAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5sZW5ndGggOiAxKSxcbiAgICAgIH07XG4gICAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBnZXRHcmFmYW5hTm90aWZpZXJUeXBlQ291bnRzKFxuICBjb25maWdzOiBHcmFmYW5hTWFuYWdlZFJlY2VpdmVyQ29uZmlnW10sXG4gIGdyYWZhbmFOb3RpZmllcnM6IE5vdGlmaWVyRFRPW11cbik6IE5vdGlmaWVyVHlwZUNvdW50cyB7XG4gIHJldHVybiBjb25maWdzXG4gICAgLm1hcCgocmVjdikgPT4gcmVjdi50eXBlKSAvLyBleHRyYWN0IHR5cGVzIGZyb20gY29uZmlnXG4gICAgLm1hcCgodHlwZSkgPT4gZ3JhZmFuYU5vdGlmaWVycy5maW5kKChyKSA9PiByLnR5cGUgPT09IHR5cGUpPy5uYW1lID8/IGNhcGl0YWxpemUodHlwZSkpIC8vIGdldCByZWFkYWJsZSBuYW1lIGZyb20gbm90aWZpZXIgY29mbmlnLCBvciBpZiBub3QgYXZhaWxhYmxlLCBqdXN0IGNhcGl0YWxpemVcbiAgICAucmVkdWNlPE5vdGlmaWVyVHlwZUNvdW50cz4oXG4gICAgICAoYWNjLCB0eXBlKSA9PiAoe1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFt0eXBlXTogKGFjY1t0eXBlXSA/PyAwKSArIDEsXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbnN1cmVEZWZpbmUodGVtcGxhdGVOYW1lOiBzdHJpbmcsIHRlbXBsYXRlQ29udGVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gbm90aWZpY2F0aW9uIHRlbXBsYXRlIGNvbnRlbnQgbXVzdCBiZSB3cmFwcGVkIGluIHt7IGRlZmluZSBcIm5hbWVcIiB9fSB0YWcsXG4gIC8vIGJ1dCB0aGlzIGlzIG5vdCBvYnZpb3VzIGJlY2F1c2UgdXNlciBhbHNvIGhhcyB0byBwcm92aWRlIG5hbWUgc2VwYXJhdGVseSBpbiB0aGUgZm9ybS5cbiAgLy8gc28gaWYgdXNlciBkb2VzIG5vdCBtYW51YWxseSBhZGQge3sgZGVmaW5lIH19IHRhZywgd2UgZG8gaXQgYXV0b21hdGljYWxseVxuICBsZXQgY29udGVudCA9IHRlbXBsYXRlQ29udGVudC50cmltKCk7XG4gIGlmICghY29udGVudC5tYXRjaCgvXFx7XFx7XFxzKmRlZmluZS8pKSB7XG4gICAgY29uc3QgaW5kZW50ZWRDb250ZW50ID0gY29udGVudFxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLm1hcCgobGluZSkgPT4gJyAgJyArIGxpbmUpXG4gICAgICAuam9pbignXFxuJyk7XG4gICAgY29udGVudCA9IGB7eyBkZWZpbmUgXCIke3RlbXBsYXRlTmFtZX1cIiB9fVxcbiR7aW5kZW50ZWRDb250ZW50fVxcbnt7IGVuZCB9fWA7XG4gIH1cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJleHBvcnQgY29uc3QgcmVjZWl2ZXJUeXBlTmFtZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHBhZ2VyZHV0eTogJ1BhZ2VyRHV0eScsXG4gIHB1c2hvdmVyOiAnUHVzaG92ZXInLFxuICBzbGFjazogJ1NsYWNrJyxcbiAgb3BzZ2VuaWU6ICdPcHNHZW5pZScsXG4gIHdlYmhvb2s6ICdXZWJob29rJyxcbiAgdmljdG9yb3BzOiAnVmljdG9yT3BzJyxcbiAgd2VjaGF0OiAnV2VDaGF0Jyxcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwidXNlQ2xlYW51cCIsInN0YXRlU2VsZWN0b3IiLCJkaXNwYXRjaCIsInNlbGVjdG9yUmVmIiwiY3VycmVudCIsInVzZVNlbGVjdG9yIiwiZ2V0TmF2TW9kZWwiLCJ1c2VOYXZNb2RlbCIsImlkIiwibmF2SW5kZXgiLCJzdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VBc3luY0ZuIiwiZ2V0QmFja2VuZFNydiIsIkhvcml6b250YWxHcm91cCIsIkJ1dHRvbiIsIkxpbmtCdXR0b24iLCJFbXB0eUxpc3RDVEEiLCJQYWdlIiwiYXBwRXZlbnRzIiwiU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IiwiTm90aWZpY2F0aW9uc0xpc3RQYWdlIiwibmF2TW9kZWwiLCJub3RpZmljYXRpb25zIiwic2V0Tm90aWZpY2F0aW9ucyIsImdldE5vdGlmaWNhdGlvbnMiLCJnZXQiLCJmZXRjaE5vdGlmaWNhdGlvbnMiLCJ0aGVuIiwicmVzIiwiZGVsZXRlTm90aWZpY2F0aW9uIiwicHVibGlzaCIsInRpdGxlIiwidGV4dCIsInRleHQyIiwiaWNvbiIsImNvbmZpcm1UZXh0IiwieWVzVGV4dCIsIm9uQ29uZmlybSIsImRlbGV0ZU5vdGlmaWNhdGlvbkNvbmZpcm1lZCIsImRlbGV0ZSIsImVycm9yIiwibGVuZ3RoIiwibWluV2lkdGgiLCJ3aWR0aCIsIm1hcCIsIm5vdGlmaWNhdGlvbiIsIm5hbWUiLCJ0eXBlIiwiaXNEZWZhdWx0IiwibG9hZGluZyIsIlJlZGlyZWN0IiwiUm91dGUiLCJTd2l0Y2giLCJ1c2VMb2NhdGlvbiIsIkFsZXJ0IiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwid2l0aEVycm9yQm91bmRhcnkiLCJBbGVydE1hbmFnZXJQaWNrZXIiLCJBbGVydGluZ1BhZ2VXcmFwcGVyIiwiTm9BbGVydE1hbmFnZXJXYXJuaW5nIiwiRWRpdFJlY2VpdmVyVmlldyIsIkVkaXRUZW1wbGF0ZVZpZXciLCJHbG9iYWxDb25maWdGb3JtIiwiTmV3UmVjZWl2ZXJWaWV3IiwiTmV3VGVtcGxhdGVWaWV3IiwiUmVjZWl2ZXJzQW5kVGVtcGxhdGVzVmlldyIsInVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJ1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsImZldGNoR3JhZmFuYU5vdGlmaWVyc0FjdGlvbiIsIkdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUiLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJSZWNlaXZlcnMiLCJhbGVydE1hbmFnZXJzIiwiYWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJsb2NhdGlvbiIsImlzUm9vdCIsInBhdGhuYW1lIiwiZW5kc1dpdGgiLCJjb25maWdSZXF1ZXN0cyIsImFtQ29uZmlncyIsInJlc3VsdCIsImNvbmZpZyIsInJlY2VpdmVyVHlwZXMiLCJncmFmYW5hTm90aWZpZXJzIiwic2hvdWxkTG9hZENvbmZpZyIsImRpc2FibGVBbVNlbGVjdCIsIm1lc3NhZ2UiLCJtYXRjaCIsInBhcmFtcyIsImRlY29kZVVSSUNvbXBvbmVudCIsInN0eWxlIiwiY2hpbGRyZW4iLCJwYWdlSWQiLCJpc0xvYWRpbmciLCJjb250ZXh0U3J2IiwiQXV0aG9yaXplIiwiYWN0aW9ucyIsImZhbGxiYWNrIiwic29tZSIsImFjdGlvbiIsImhhc0FjY2VzcyIsIk5vQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSIsIk90aGVyQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSIsImF2YWlsYWJsZUFsZXJ0TWFuYWdlcnMiLCJfIiwiaGFzT3RoZXJBTXMiLCJJbmZvQm94IiwiQ2xvdWRSZWNlaXZlckZvcm0iLCJHcmFmYW5hUmVjZWl2ZXJGb3JtIiwicmVjZWl2ZXJOYW1lIiwicmVjZWl2ZXIiLCJhbGVydG1hbmFnZXJfY29uZmlnIiwicmVjZWl2ZXJzIiwiZmluZCIsIlRlbXBsYXRlRm9ybSIsInRlbXBsYXRlTmFtZSIsInRlbXBsYXRlIiwidGVtcGxhdGVfZmlsZXMiLCJjb250ZW50IiwiY3NzIiwidXNlRm9ybSIsIkZvcm1Qcm92aWRlciIsInVzZVN0eWxlczIiLCJ1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24iLCJnbG9iYWxDb25maWdPcHRpb25zIiwiaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UiLCJtYWtlQU1MaW5rIiwib21pdEVtcHR5VmFsdWVzIiwiT3B0aW9uRmllbGQiLCJkZWZhdWx0VmFsdWVzIiwic210cF9yZXF1aXJlX3RscyIsInVuaWZpZWRBbGVydGluZyIsInNhdmVBTUNvbmZpZyIsInJlYWRPbmx5Iiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZm9ybUFQSSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImdsb2JhbCIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsIm9uU3VibWl0Q2FsbGJhY2siLCJ2YWx1ZXMiLCJuZXdDb25maWciLCJvbGRDb25maWciLCJzdWNjZXNzTWVzc2FnZSIsInJlZGlyZWN0UGF0aCIsImhlYWRpbmciLCJTdHJpbmciLCJvcHRpb24iLCJwcm9wZXJ0eU5hbWUiLCJ0aGVtZSIsInNwYWNpbmciLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiUmVjZWl2ZXJzVGFibGUiLCJUZW1wbGF0ZXNUYWJsZSIsImFsZXJ0TWFuYWdlck5hbWUiLCJpc0Nsb3VkIiwiaXNWYW5pbGxhQU0iLCJBbGVydGluZ05vdGlmaWNhdGlvbnNFeHRlcm5hbFdyaXRlIiwic2VjdGlvbiIsImN4IiwiTGluayIsIlJlY2VpdmVyc1NlY3Rpb24iLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsImFkZEJ1dHRvbkxhYmVsIiwiYWRkQnV0dG9uVG8iLCJzaG93QnV0dG9uIiwiY29sb3JzIiwic2Vjb25kYXJ5IiwidXNlTWVtbyIsIkNvbmZpcm1Nb2RhbCIsIk1vZGFsIiwiZGVsZXRlUmVjZWl2ZXJBY3Rpb24iLCJnZXRBbGVydFRhYmxlU3R5bGVzIiwiZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIiwiaXNSZWNlaXZlclVzZWQiLCJleHRyYWN0Tm90aWZpZXJUeXBlQ291bnRzIiwiQWN0aW9uSWNvbiIsInRhYmxlU3R5bGVzIiwicGVybWlzc2lvbnMiLCJyZWNlaXZlclRvRGVsZXRlIiwic2V0UmVjZWl2ZXJUb0RlbGV0ZSIsInNob3dDYW5ub3REZWxldGVSZWNlaXZlck1vZGFsIiwic2V0U2hvd0Nhbm5vdERlbGV0ZVJlY2VpdmVyTW9kYWwiLCJvbkNsaWNrRGVsZXRlUmVjZWl2ZXIiLCJkZWxldGVSZWNlaXZlciIsInVuZGVmaW5lZCIsInJvd3MiLCJ0eXBlcyIsIk9iamVjdCIsImVudHJpZXMiLCJjb3VudCIsImhhc1Blcm1pc3Npb24iLCJjcmVhdGUiLCJ0YWJsZSIsInVwZGF0ZSIsImV2ZW5Sb3ciLCJpZHgiLCJqb2luIiwiYWN0aW9uc0NlbGwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJGaWVsZCIsIklucHV0IiwiVGV4dEFyZWEiLCJlbnN1cmVEZWZpbmUiLCJkZWZhdWx0cyIsImZyZWV6ZSIsImV4aXN0aW5nIiwic3VibWl0IiwidGVtcGxhdGVzIiwiZmlsdGVyIiwicmVnaXN0ZXIiLCJtb2RlIiwidmFsaWRhdGVOYW1lSXNVbmlxdWUiLCJkYXRhIiwicmVxdWlyZWQiLCJ2YWx1ZSIsInZhbGlkYXRlIiwibmFtZUlzVW5pcXVlIiwiZXh0ZXJuYWxMaW5rIiwidGV4dGFyZWEiLCJidXR0b25zIiwiRnJhZ21lbnQiLCJkZWxldGVUZW1wbGF0ZUFjdGlvbiIsIkNvbGxhcHNlVG9nZ2xlIiwiRGV0YWlsc0ZpZWxkIiwiZXhwYW5kZWRUZW1wbGF0ZXMiLCJzZXRFeHBhbmRlZFRlbXBsYXRlcyIsInRlbXBsYXRlUm93cyIsInRlbXBsYXRlVG9EZWxldGUiLCJzZXRUZW1wbGF0ZVRvRGVsZXRlIiwiZGVsZXRlVGVtcGxhdGUiLCJjb2xFeHBhbmQiLCJpc0V4cGFuZGVkIiwidXNlRm9ybUNvbnRleHQiLCJDaGFubmVsT3B0aW9ucyIsInNlbGVjdGVkQ2hhbm5lbE9wdGlvbnMiLCJvblJlc2V0U2VjdXJlRmllbGQiLCJzZWN1cmVGaWVsZHMiLCJwYXRoUHJlZml4Iiwid2F0Y2giLCJjdXJyZW50Rm9ybVZhbHVlcyIsImluZGV4Iiwia2V5IiwibGFiZWwiLCJzZWxlY3RlZE9wdGlvblZhbHVlIiwic2hvd1doZW4iLCJmaWVsZCIsImlzIiwic2VjdXJlIiwic2VjdXJlU2V0dGluZ3MiLCJzZXR0aW5ncyIsImRlZmF1bHRWYWx1ZSIsIklucHV0Q29udHJvbCIsIlNlbGVjdCIsIkNvbGxhcHNpYmxlU2VjdGlvbiIsIkNoYW5uZWxTdWJGb3JtIiwib25EdXBsaWNhdGUiLCJvbkRlbGV0ZSIsIm9uVGVzdCIsIm5vdGlmaWVycyIsImNvbW1vblNldHRpbmdzQ29tcG9uZW50IiwiQ29tbW9uU2V0dGluZ3NDb21wb25lbnQiLCJmaWVsZE5hbWUiLCJjb250cm9sIiwidHJpZ2dlciIsInNldFZhbHVlIiwic2VsZWN0ZWRUeXBlIiwidGVzdGluZ1JlY2VpdmVyIiwidGVzdFJlY2VpdmVycyIsIl9zZWN1cmVGaWVsZHMiLCJzZXRTZWN1cmVGaWVsZHMiLCJ1cGRhdGVkU2VjdXJlRmllbGRzIiwidHlwZU9wdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiaGFuZGxlVGVzdCIsImlzVmFsaWQiLCJrZXlzIiwibm90aWZpZXIiLCJtYW5kYXRvcnlPcHRpb25zIiwib3B0aW9ucyIsIm8iLCJvcHRpb25hbE9wdGlvbnMiLCJjb250YWN0UG9pbnRUeXBlSW5wdXRJZCIsIndyYXBwZXIiLCJ0b3BSb3ciLCJvbkNoYW5nZSIsImlubmVyQ29udGVudCIsImluZm8iLCJib3JkZXIiLCJtZWRpdW0iLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsImJyZWFrcG9pbnRzIiwieGwiLCJ1bml0IiwiY2hhbm5lbFNldHRpbmdzSGVhZGVyIiwiQ2hlY2tib3giLCJDbG91ZENvbW1vbkNoYW5uZWxTZXR0aW5ncyIsImNsb3VkTm90aWZpZXJUeXBlcyIsImNsb3VkUmVjZWl2ZXJUb0Zvcm1WYWx1ZXMiLCJmb3JtVmFsdWVzVG9DbG91ZFJlY2VpdmVyIiwidXBkYXRlQ29uZmlnV2l0aFJlY2VpdmVyIiwiUmVjZWl2ZXJGb3JtIiwiZGVmYXVsdENoYW5uZWxWYWx1ZXMiLCJfX2lkIiwic2VuZFJlc29sdmVkIiwiZXhpc3RpbmdWYWx1ZSIsIm9uU3VibWl0IiwibmV3UmVjZWl2ZXIiLCJ0YWtlblJlY2VpdmVyTmFtZXMiLCJzaXplIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsInRvZ2dsZUNvbGxhcHNlIiwiY2FyZXQiLCJoaWRkZW4iLCJ0eXBvZ3JhcGh5Iiwic20iLCJmb250V2VpZ2h0UmVndWxhciIsIkdyYWZhbmFDb21tb25DaGFubmVsU2V0dGluZ3MiLCJ0ZXN0UmVjZWl2ZXJzQWN0aW9uIiwiZm9ybUNoYW5uZWxWYWx1ZXNUb0dyYWZhbmFDaGFubmVsQ29uZmlnIiwiZm9ybVZhbHVlc1RvR3JhZmFuYVJlY2VpdmVyIiwiZ3JhZmFuYVJlY2VpdmVyVG9Gb3JtVmFsdWVzIiwiVGVzdENvbnRhY3RQb2ludE1vZGFsIiwiZGlzYWJsZVJlc29sdmVNZXNzYWdlIiwidGVzdENoYW5uZWxWYWx1ZXMiLCJzZXRUZXN0Q2hhbm5lbFZhbHVlcyIsImlkMm9yaWdpbmFsIiwib25UZXN0Q2hhbm5lbCIsInRlc3ROb3RpZmljYXRpb24iLCJhbGVydCIsImNoYW4iLCJwYXlsb2FkIiwiZ3JhZmFuYV9tYW5hZ2VkX3JlY2VpdmVyX2NvbmZpZ3MiLCJ1c2VDYWxsYmFjayIsInVzZUFwcE5vdGlmaWNhdGlvbiIsInVzZUNvbnRyb2xsZWRGaWVsZEFycmF5IiwiRGVsZXRlZFN1YkZvcm0iLCJpbml0aWFsVmFsdWVzIiwiZGVmYXVsdEl0ZW0iLCJub3RpZnlBcHAiLCJpdGVtcyIsIk1hdGgiLCJyYW5kb20iLCJnZXRWYWx1ZXMiLCJmaWVsZHMiLCJhcHBlbmQiLCJyZW1vdmUiLCJzb2Z0RGVsZXRlIiwidmFsaWRhdGVOYW1lSXNBdmFpbGFibGUiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN1Ym1pdENhbGxiYWNrIiwiaXRlbSIsIl9fZGVsZXRlZCIsIm9uSW52YWxpZCIsInJvdXRlIiwibmFtZUlzQXZhaWxhYmxlIiwiaW5pdGlhbEl0ZW0iLCJjdXJyZW50VmFsdWVzIiwiTGFiZWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiQW5ub3RhdGlvbnNGaWVsZCIsIkxhYmVsc0ZpZWxkIiwiTm90aWZpY2F0aW9uVHlwZSIsIm5vdGlmaWNhdGlvbk9wdGlvbnMiLCJhbm5vdGF0aW9ucyIsImxhYmVscyIsImlzT3BlbiIsIm9uRGlzbWlzcyIsIm5vdGlmaWNhdGlvblR5cGUiLCJzZXROb3RpZmljYXRpb25UeXBlIiwicHJlZGVmaW5lZCIsImZvcm1NZXRob2RzIiwiY3VzdG9tIiwicmVkdWNlIiwiYWNjIiwiZmxleFJvdyIsIktleVZhbHVlTWFwSW5wdXQiLCJwYWlycyIsInNldFBhaXJzIiwicmVjb3JkVG9QYWlycyIsImVtaXRDaGFuZ2UiLCJwYWlyc1RvUmVjb3JkIiwiZGVsZXRlSXRlbSIsIm5ld1BhaXJzIiwic2xpY2UiLCJyZW1vdmVkIiwic3BsaWNlIiwidXBkYXRlUGFpciIsIm9sZCIsInBhaXIiLCJpIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJhZGRCdXR0b24iLCJyZWNvcmQiLCJvYmoiLCJpc0VtcHR5IiwiU3RyaW5nQXJyYXlJbnB1dCIsIlN1YmZvcm1BcnJheUZpZWxkIiwiU3ViZm9ybUZpZWxkIiwiaW52YWxpZCIsInBhdGhTdWZmaXgiLCJvcHRpb25QYXRoIiwiZWxlbWVudCIsIk9wdGlvbklucHV0IiwicGF0aEluZGV4IiwidW5yZWdpc3RlciIsImtlZXBWYWx1ZSIsImNoZWNrYm94IiwiZGV0ZXJtaW5lUmVhZE9ubHkiLCJpbnB1dFR5cGUiLCJkZXRlcm1pbmVSZXF1aXJlZCIsInYiLCJ2YWxpZGF0aW9uUnVsZSIsInZhbGlkYXRlT3B0aW9uIiwicGxhY2Vob2xkZXIiLCJzZWxlY3RPcHRpb25zIiwiY29uc29sZSIsIlJlZ0V4cCIsInRlc3QiLCJkZXBlbmRzT24iLCJkZXBlbmRlbnRPbiIsIkJvb2xlYW4iLCJuZXdWYWx1ZSIsInVwZGF0ZVZhbHVlIiwiaXRlbVZhbHVlIiwicm93IiwiZGVsZXRlSWNvbiIsImdldFJlY2VpdmVyRm9ybUZpZWxkU3R5bGVzIiwicGF0aCIsImNvbGxhcHNpYmxlU2VjdGlvbiIsIml0ZW1JbmRleCIsInN1YmZvcm1PcHRpb25zIiwiX3dhdGNoVmFsdWUiLCJzaG93Iiwic2V0U2hvdyIsInN1Yk9wdGlvbiIsIkFubm90YXRpb24iLCJhbm5vdGF0aW9uTGFiZWxzIiwiU2VsZWN0V2l0aEFkZCIsIkFubm90YXRpb25LZXlJbnB1dCIsImV4aXN0aW5nS2V5cyIsImFyaWFMYWJlbCIsInJlc3QiLCJhbm5vdGF0aW9uT3B0aW9ucyIsIkZpZWxkQXJyYXkiLCJ1c2VTdHlsZXMiLCJmbGV4Q29sdW1uIiwiaXNVcmwiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsIlZhbHVlSW5wdXRDb21wb25lbnQiLCJmbGV4Um93SXRlbU1hcmdpbiIsImFubm90YXRpb25WYWx1ZUlucHV0IiwiYWRkQW5ub3RhdGlvbnNCdXR0b24iLCJ4cyIsIklubGluZUxhYmVsIiwiY2VudGVyQWxpZ25Sb3ciLCJsYWJlbElucHV0IiwiZXF1YWxTaWduIiwiZGVsZXRlTGFiZWxCdXR0b24iLCJhZGRMYWJlbEJ1dHRvbiIsIm1kIiwib25DdXN0b21DaGFuZ2UiLCJkaXNhYmxlZCIsImFkZExhYmVsIiwiaXNDdXN0b20iLCJzZXRJc0N1c3RvbSIsIl9vcHRpb25zIiwidGFyZ2V0IiwidmFsIiwiVG9vbHRpcCIsInRvb2x0aXAiLCJ0byIsIm9uQ2xpY2siLCJ0b29sdGlwUGxhY2VtZW50IiwidXNlUXVlcnlQYXJhbXMiLCJzdG9yZSIsIkFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZIiwiQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIiwidXNlSXNBbGVydE1hbmFnZXJBdmFpbGFibGUiLCJhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMiLCJhbSIsInF1ZXJ5UGFyYW1zIiwidXBkYXRlUXVlcnlQYXJhbXMiLCJpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZSIsInNldCIsInF1ZXJ5U291cmNlIiwic3RvcmVTb3VyY2UiLCJnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbiIsImFjY2Vzc1R5cGUiLCJFTVBUWV9BUlJBWSIsInJlc2V0IiwidXBkYXRlRm4iLCJuZXdJdGVtcyIsIndlYWsiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImJhc2ljQXV0aE9wdGlvbiIsInRsc0NvbmZpZ09wdGlvbiIsImh0dHBDb25maWdPcHRpb24iLCJpc0FycmF5IiwiY2hhbm5lbE1hcCIsImlkQ291bnRlciIsImNoYW5uZWwiLCJncmFmYW5hQ2hhbm5lbENvbmZpZ1RvRm9ybUNoYW5uZWxWYWx1ZXMiLCJjb25maWdzIiwicmVwbGFjZSIsIkVycm9yIiwiY2xvdWRDaGFubmVsQ29uZmlnVG9Gb3JtQ2hhbm5lbFZhbHVlcyIsImZsYXQiLCJjaGFubmVsVmFsdWVzIiwicmVjdiIsImZvckVhY2giLCJzZW5kX3Jlc29sdmVkIiwiY29uZmlnc0tleSIsInB1c2giLCJyZXBsYWNlUmVjZWl2ZXJOYW1lIiwib2xkUmVjZWl2ZXJzIiwidXBkYXRlZCIsImV4aXN0aW5nUmVjZWl2ZXIiLCJyZW5hbWVSZWNlaXZlckluUm91dGUiLCJvbGROYW1lIiwibmV3TmFtZSIsInJvdXRlcyIsInVpZCIsImNhcGl0YWxpemUiLCJyZWNlaXZlclR5cGVOYW1lcyIsImdldEdyYWZhbmFOb3RpZmllclR5cGVDb3VudHMiLCJnZXRDb3J0ZXhBbGVydE1hbmFnZXJOb3RpZmllclR5cGVDb3VudHMiLCJBcnJheSIsInIiLCJ0ZW1wbGF0ZUNvbnRlbnQiLCJpbmRlbnRlZENvbnRlbnQiLCJzcGxpdCIsImxpbmUiLCJwYWdlcmR1dHkiLCJwdXNob3ZlciIsInNsYWNrIiwib3BzZ2VuaWUiLCJ3ZWJob29rIiwidmljdG9yb3BzIiwid2VjaGF0Il0sInNvdXJjZVJvb3QiOiIifQ==