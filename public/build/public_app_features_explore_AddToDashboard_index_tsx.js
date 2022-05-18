"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_explore_AddToDashboard_index_tsx"],{

/***/ "./public/app/features/dashboard/state/analyticsProcessor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitDashboardViewEvent": () => (/* binding */ emitDashboardViewEvent)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function emitDashboardViewEvent(dashboard) {
  const eventData = {
    dashboardId: dashboard.id,
    dashboardName: dashboard.title,
    dashboardUid: dashboard.uid,
    folderName: dashboard.meta.folderTitle,
    eventName: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.MetaAnalyticsEventName.DashboardView
  };
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportMetaAnalytics)(eventData);
}

/***/ }),

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewDashboardModelData": () => (/* binding */ getNewDashboardModelData),
/* harmony export */   "initDashboard": () => (/* binding */ initDashboard),
/* harmony export */   "removeDashboardToFetchFromLocalStorage": () => (/* binding */ removeDashboardToFetchFromLocalStorage),
/* harmony export */   "setDashboardToFetchFromLocalStorage": () => (/* binding */ setDashboardToFetchFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/keybindingSrv.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _DashboardModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _analyticsProcessor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/state/analyticsProcessor.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");




















async function fetchDashboard(args, dispatch, getState) {
  // When creating new or adding panels to a dashboard from explore we load it from local storage
  const model = app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"].getObject(DASHBOARD_FROM_LS_KEY);

  if (model) {
    removeDashboardToFetchFromLocalStorage();
    return model;
  }

  try {
    switch (args.routeName) {
      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Home:
        {
          // load home dash
          const dashDTO = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__.backendSrv.get('/api/dashboards/home'); // if user specified a custom home dashboard redirect to that

          if (dashDTO.redirectUri) {
            const newUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.replace(newUrl);
            return null;
          } // disable some actions on the default home dashboard


          dashDTO.meta.canSave = false;
          dashDTO.meta.canShare = false;
          dashDTO.meta.canStar = false;
          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Normal:
        {
          const dashDTO = await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__.dashboardLoaderSrv.loadDashboard(args.urlType, args.urlSlug, args.urlUid);

          if (args.fixUrl && dashDTO.meta.url) {
            // check if the current url is correct (might be old slug)
            const dashboardUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
            const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().pathname;

            if (dashboardUrl !== currentPath) {
              // Spread current location to persist search params used for navigation
              _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.replace(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
                pathname: dashboardUrl
              }));
              console.log('not correct url correcting', dashboardUrl, currentPath);
            }
          }

          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.New:
        {
          return getNewDashboardModelData(args.urlFolderId);
        }

      default:
        throw {
          message: 'Unknown route ' + args.routeName
        };
    }
  } catch (err) {
    // Ignore cancelled errors
    if (err.cancelled) {
      return null;
    }

    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFailed)({
      message: 'Failed to fetch dashboard',
      error: err
    }));
    console.error(err);
    return null;
  }
}
/**
 * This action (or saga) does everything needed to bootstrap a dashboard & dashboard model.
 * First it handles the process of fetching the dashboard, correcting the url if required (causing redirects/url updates)
 *
 * This is used both for single dashboard & solo panel routes, home & new dashboard routes.
 *
 * Then it handles the initializing of the old angular services that the dashboard components & panels still depend on
 *
 */


function initDashboard(args) {
  return async (dispatch, getState) => {
    var _args$urlUid;

    // set fetching state
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFetching)()); // fetch dashboard data

    const dashDTO = await fetchDashboard(args, dispatch, getState); // returns null if there was a redirect or error

    if (!dashDTO) {
      return;
    } // set initializing state


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitServices)()); // create model

    let dashboard;

    try {
      dashboard = new _DashboardModel__WEBPACK_IMPORTED_MODULE_16__.DashboardModel(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFailed)({
        message: 'Failed create dashboard model',
        error: err
      }));
      console.error(err);
      return;
    } // add missing orgId query param


    const storeState = getState();
    const queryParams = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getSearchObject();

    if (!queryParams.orgId) {
      // TODO this is currently not possible with the LocationService API
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
        orgId: storeState.user.orgId
      }, true);
    } // init services


    const timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__.getTimeSrv)();
    const dashboardSrv = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_8__.getDashboardSrv)(); // legacy srv state, we need this value updated for built-in annotations

    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_11__.toStateKey)((_args$urlUid = args.urlUid) !== null && _args$urlUid !== void 0 ? _args$urlUid : dashboard.uid); // template values service needs to initialize completely before the rest of the dashboard can load

    await dispatch((0,_variables_state_actions__WEBPACK_IMPORTED_MODULE_14__.initVariablesTransaction)(dashboardUid, dashboard)); // DashboardQueryRunner needs to run after all variables have been resolved so that any annotation query including a variable
    // will be correctly resolved

    const runner = (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_13__.createDashboardQueryRunner)({
      dashboard,
      timeSrv
    });
    runner.run({
      dashboard,
      range: timeSrv.timeRange()
    });

    if ((0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_15__.getIfExistsLastKey)(getState()) !== dashboardUid) {
      // if a previous dashboard has slow running variable queries the batch uid will be the new one
      // but the args.urlUid will be the same as before initVariablesTransaction was called so then we can't continue initializing
      // the previous dashboard.
      return;
    } // If dashboard is in a different init phase it means it cancelled during service init


    if (getState().dashboard.initPhase !== app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardInitPhase.Services) {
      return;
    }

    try {
      dashboard.processRepeats(); // handle auto fix experimental feature

      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__.keybindingSrv.setupDashboardBindings(dashboard);
    } catch (err) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)('Dashboard init failed', err)));
      console.error(err);
    } // send open dashboard event


    if (args.routeName !== app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.New) {
      (0,_analyticsProcessor__WEBPACK_IMPORTED_MODULE_17__.emitDashboardViewEvent)(dashboard); // Listen for changes on the current dashboard

      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__.dashboardWatcher.watch(dashboard.uid);
    } else {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__.dashboardWatcher.leave();
    } // set week start


    if (dashboard.weekStart !== '') {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.setWeekStart)(dashboard.weekStart);
    } else {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.setWeekStart)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.bootData.user.weekStart);
    } // yay we are done


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitCompleted)(dashboard));
  };
}
function getNewDashboardModelData(urlFolderId) {
  const data = {
    meta: {
      canStar: false,
      canShare: false,
      isNew: true,
      folderId: 0
    },
    dashboard: {
      title: 'New dashboard',
      panels: [{
        type: 'add-panel',
        gridPos: {
          x: 0,
          y: 0,
          w: 12,
          h: 9
        },
        title: 'Panel Title'
      }]
    }
  };

  if (urlFolderId) {
    data.meta.folderId = parseInt(urlFolderId, 10);
  }

  return data;
}
const DASHBOARD_FROM_LS_KEY = 'DASHBOARD_FROM_LS_KEY';
function setDashboardToFetchFromLocalStorage(model) {
  app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"].setObject(DASHBOARD_FROM_LS_KEY, model);
}
function removeDashboardToFetchFromLocalStorage() {
  app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"]["delete"](DASHBOARD_FROM_LS_KEY);
}

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/AddToDashboardModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToDashboardModal": () => (/* binding */ AddToDashboardModal)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Select/DashboardPicker.tsx");
/* harmony import */ var app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");
/* harmony import */ var _addToDashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/explore/AddToDashboard/addToDashboard.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"],
      _excluded2 = ["ref", "value", "onChange"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














var SaveTarget;

(function (SaveTarget) {
  SaveTarget["NewDashboard"] = "new-dashboard";
  SaveTarget["ExistingDashboard"] = "existing-dashboard";
})(SaveTarget || (SaveTarget = {}));

const SAVE_TARGETS = [{
  label: 'New dashboard',
  value: SaveTarget.NewDashboard
}, {
  label: 'Existing dashboard',
  value: SaveTarget.ExistingDashboard
}];

function assertIsSaveToExistingDashboardError(errors) {// the shape of the errors object is always compatible with the type above, but we need to
  // explicitly assert its type so that TS can narrow down FormDTO to SaveToExistingDashboard
  // when we use it in the form.
}

function getDashboardURL(dashboardUid) {
  return dashboardUid ? `d/${dashboardUid}` : 'dashboard/new';
}

var GenericError;

(function (GenericError) {
  GenericError["UNKNOWN"] = "unknown-error";
  GenericError["NAVIGATION"] = "navigation-error";
})(GenericError || (GenericError = {}));

const AddToDashboardModal = ({
  onClose,
  exploreId
}) => {
  const exploreItem = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((0,_state_selectors__WEBPACK_IMPORTED_MODULE_9__.getExploreItemSelector)(exploreId));
  const [submissionError, setSubmissionError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    handleSubmit,
    control,
    formState: {
      errors
    },
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues: {
      saveTarget: SaveTarget.NewDashboard
    }
  });
  const saveTarget = watch('saveTarget');

  const onSubmit = async (openInNewTab, data) => {
    setSubmissionError(undefined);
    const dashboardUid = data.saveTarget === SaveTarget.ExistingDashboard ? data.dashboardUid : undefined;
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)('e2d_submit', {
      newTab: openInNewTab,
      saveTarget: data.saveTarget,
      queries: exploreItem.queries.length
    });

    try {
      var _exploreItem$datasour;

      await (0,_addToDashboard__WEBPACK_IMPORTED_MODULE_10__.setDashboardInLocalStorage)({
        dashboardUid,
        datasource: (_exploreItem$datasour = exploreItem.datasourceInstance) === null || _exploreItem$datasour === void 0 ? void 0 : _exploreItem$datasour.getRef(),
        queries: exploreItem.queries,
        queryResponse: exploreItem.queryResponse
      });
    } catch (error) {
      switch (error) {
        case _addToDashboard__WEBPACK_IMPORTED_MODULE_10__.AddToDashboardError.FETCH_DASHBOARD:
          setSubmissionError({
            error,
            message: 'Could not fetch dashboard information. Please try again.'
          });
          break;

        case _addToDashboard__WEBPACK_IMPORTED_MODULE_10__.AddToDashboardError.SET_DASHBOARD_LS:
          setSubmissionError({
            error,
            message: 'Could not add panel to dashboard. Please try again.'
          });
          break;

        default:
          setSubmissionError({
            error: GenericError.UNKNOWN,
            message: 'Something went wrong. Please try again.'
          });
      }

      return;
    }

    const dashboardURL = getDashboardURL(dashboardUid);

    if (!openInNewTab) {
      onClose();
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_4__.locationUtil.stripBaseFromUrl(dashboardURL));
      return;
    }

    const didTabOpen = !!__webpack_require__.g.open(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.appUrl + dashboardURL, '_blank');

    if (!didTabOpen) {
      setSubmissionError({
        error: GenericError.NAVIGATION,
        message: 'Could not navigate to the selected dashboard. Please try again.'
      });
      (0,app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_8__.removeDashboardToFetchFromLocalStorage)();
      return;
    }

    onClose();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)('e2d_open');
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Modal, {
    title: "Add panel to dashboard",
    onDismiss: onClose,
    isOpen: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InputControl, {
        control: control,
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
            label: "Target dashboard",
            description: "Choose where to add the panel.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.RadioButtonGroup, Object.assign({
              options: SAVE_TARGETS
            }, field, {
              id: "e2d-save-target"
            }))
          });
        },
        name: "saveTarget"
      }), saveTarget === SaveTarget.ExistingDashboard && (() => {
        assertIsSaveToExistingDashboardError(errors);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InputControl, {
          render: _ref2 => {
            var _errors$dashboardUid;

            let {
              field: {
                onChange
              }
            } = _ref2,
                field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
              label: "Dashboard",
              description: "Select in which dashboard the panel will be created.",
              error: (_errors$dashboardUid = errors.dashboardUid) === null || _errors$dashboardUid === void 0 ? void 0 : _errors$dashboardUid.message,
              invalid: !!errors.dashboardUid,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_7__.DashboardPicker, Object.assign({}, field, {
                inputId: "e2d-dashboard-picker",
                defaultOptions: true,
                onChange: d => onChange(d === null || d === void 0 ? void 0 : d.uid)
              }))
            });
          },
          control: control,
          name: "dashboardUid",
          shouldUnregister: true,
          rules: {
            required: {
              value: true,
              message: 'This field is required.'
            }
          }
        });
      })(), submissionError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, {
        severity: "error",
        title: "Error adding the panel",
        children: submissionError.message
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          type: "reset",
          onClick: onClose,
          fill: "outline",
          variant: "secondary",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          type: "submit",
          variant: "secondary",
          onClick: handleSubmit((0,lodash__WEBPACK_IMPORTED_MODULE_0__.partial)(onSubmit, true)),
          icon: "external-link-alt",
          children: "Open in new tab"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          type: "submit",
          variant: "primary",
          onClick: handleSubmit((0,lodash__WEBPACK_IMPORTED_MODULE_0__.partial)(onSubmit, false)),
          icon: "apps",
          children: "Open dashboard"
        })]
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/addToDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToDashboardError": () => (/* binding */ AddToDashboardError),
/* harmony export */   "setDashboardInLocalStorage": () => (/* binding */ setDashboardInLocalStorage)
/* harmony export */ });
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");


let AddToDashboardError;

(function (AddToDashboardError) {
  AddToDashboardError["FETCH_DASHBOARD"] = "fetch-dashboard";
  AddToDashboardError["SET_DASHBOARD_LS"] = "set-dashboard-ls-error";
})(AddToDashboardError || (AddToDashboardError = {}));

function createDashboard() {
  const dto = (0,app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_1__.getNewDashboardModelData)(); // getNewDashboardModelData adds by default the "add-panel" panel. We don't want that.

  dto.dashboard.panels = [];
  return dto;
}

async function setDashboardInLocalStorage(options) {
  var _dto$dashboard$panels;

  const panelType = getPanelType(options.queries, options.queryResponse);
  const panel = {
    targets: options.queries,
    type: panelType,
    title: 'New Panel',
    gridPos: {
      x: 0,
      y: 0,
      w: 12,
      h: 8
    },
    datasource: options.datasource
  };
  let dto;

  if (options.dashboardUid) {
    try {
      dto = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.backendSrv.getDashboardByUid(options.dashboardUid);
    } catch (e) {
      throw AddToDashboardError.FETCH_DASHBOARD;
    }
  } else {
    dto = createDashboard();
  }

  dto.dashboard.panels = [panel, ...((_dto$dashboard$panels = dto.dashboard.panels) !== null && _dto$dashboard$panels !== void 0 ? _dto$dashboard$panels : [])];

  try {
    (0,app_features_dashboard_state_initDashboard__WEBPACK_IMPORTED_MODULE_1__.setDashboardToFetchFromLocalStorage)(dto);
  } catch {
    throw AddToDashboardError.SET_DASHBOARD_LS;
  }
}

const isVisible = query => !query.hide;

const hasRefId = refId => frame => frame.refId === refId;

function getPanelType(queries, queryResponse) {
  for (const {
    refId
  } of queries.filter(isVisible)) {
    // traceview is not supported in dashboards, skipping it for now.
    const hasQueryRefId = hasRefId(refId);

    if (queryResponse.graphFrames.some(hasQueryRefId)) {
      return 'timeseries';
    }

    if (queryResponse.logsFrames.some(hasQueryRefId)) {
      return 'logs';
    }

    if (queryResponse.nodeGraphFrames.some(hasQueryRefId)) {
      return 'nodeGraph';
    }

    if (queryResponse.traceFrames.some(hasQueryRefId)) {
      return 'traces';
    }
  } // falling back to table


  return 'table';
}

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddToDashboard": () => (/* binding */ AddToDashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/explore/state/selectors.ts");
/* harmony import */ var _AddToDashboardModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/explore/AddToDashboard/AddToDashboardModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const AddToDashboard = ({
  exploreId
}) => {
  var _useSelector, _useSelector$queries;

  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const selectExploreItem = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_3__.getExploreItemSelector)(exploreId);
  const explorePaneHasQueries = !!((_useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(selectExploreItem)) !== null && _useSelector !== void 0 && (_useSelector$queries = _useSelector.queries) !== null && _useSelector$queries !== void 0 && _useSelector$queries.length);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
      icon: "apps",
      onClick: () => setIsOpen(true),
      "aria-label": "Add to dashboard",
      disabled: !explorePaneHasQueries,
      children: "Add to dashboard"
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AddToDashboardModal__WEBPACK_IMPORTED_MODULE_4__.AddToDashboardModal, {
      onClose: () => setIsOpen(false),
      exploreId: exploreId
    })]
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9mZWF0dXJlc19leHBsb3JlX0FkZFRvRGFzaGJvYXJkX2luZGV4X3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBSU8sU0FBU0Usc0JBQVQsQ0FBZ0NDLFNBQWhDLEVBQTJEO0FBQ2hFLFFBQU1DLFNBQW9DLEdBQUc7QUFDM0NDLElBQUFBLFdBQVcsRUFBRUYsU0FBUyxDQUFDRyxFQURvQjtBQUUzQ0MsSUFBQUEsYUFBYSxFQUFFSixTQUFTLENBQUNLLEtBRmtCO0FBRzNDQyxJQUFBQSxZQUFZLEVBQUVOLFNBQVMsQ0FBQ08sR0FIbUI7QUFJM0NDLElBQUFBLFVBQVUsRUFBRVIsU0FBUyxDQUFDUyxJQUFWLENBQWVDLFdBSmdCO0FBSzNDQyxJQUFBQSxTQUFTLEVBQUViLGtGQUFvQ2M7QUFMSixHQUE3QztBQVFBZixFQUFBQSxxRUFBbUIsQ0FBQ0ksU0FBRCxDQUFuQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFXQSxlQUFlb0MsY0FBZixDQUNFQyxJQURGLEVBRUVDLFFBRkYsRUFHRUMsUUFIRixFQUlnQztBQUM5QjtBQUNBLFFBQU1DLEtBQUssR0FBR3BCLGdFQUFBLENBQThCc0IscUJBQTlCLENBQWQ7O0FBQ0EsTUFBSUYsS0FBSixFQUFXO0FBQ1RHLElBQUFBLHNDQUFzQztBQUN0QyxXQUFPSCxLQUFQO0FBQ0Q7O0FBRUQsTUFBSTtBQUNGLFlBQVFILElBQUksQ0FBQ08sU0FBYjtBQUNFLFdBQUtqQiw0REFBTDtBQUEyQjtBQUN6QjtBQUNBLGdCQUFNbUIsT0FBcUIsR0FBRyxNQUFNNUIseUVBQUEsQ0FBZSxzQkFBZixDQUFwQyxDQUZ5QixDQUl6Qjs7QUFDQSxjQUFJNEIsT0FBTyxDQUFDRSxXQUFaLEVBQXlCO0FBQ3ZC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RyxDQUFDO0FBQUV4RCxFQUFBQTtBQUFGLENBQUQsS0FBMEI7QUFBQTs7QUFDdEQsUUFBTSxDQUFDeUQsTUFBRCxFQUFTQyxTQUFULElBQXNCcEYsK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQ0EsUUFBTXFGLGlCQUFpQixHQUFHMUUsd0VBQXNCLENBQUNlLFNBQUQsQ0FBaEQ7QUFDQSxRQUFNNEQscUJBQXFCLEdBQUcsQ0FBQyxrQkFBQ3BGLHdEQUFXLENBQUNtRixpQkFBRCxDQUFaLGlFQUFDLGFBQWdDOUMsT0FBakMsaURBQUMscUJBQXlDQyxNQUExQyxDQUEvQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsdURBQUMsc0RBQUQ7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLGFBQU8sRUFBRSxNQUFNNEMsU0FBUyxDQUFDLElBQUQsQ0FGMUI7QUFHRSxvQkFBVyxrQkFIYjtBQUlFLGNBQVEsRUFBRSxDQUFDRSxxQkFKYjtBQUFBO0FBQUEsTUFERixFQVVHSCxNQUFNLGlCQUFJLHVEQUFDLHFFQUFEO0FBQXFCLGFBQU8sRUFBRSxNQUFNQyxTQUFTLENBQUMsS0FBRCxDQUE3QztBQUFzRCxlQUFTLEVBQUUxRDtBQUFqRSxNQVZiO0FBQUEsSUFERjtBQWNELENBbkJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL2FuYWx5dGljc1Byb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUvaW5pdERhc2hib2FyZC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9leHBsb3JlL0FkZFRvRGFzaGJvYXJkL0FkZFRvRGFzaGJvYXJkTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2V4cGxvcmUvQWRkVG9EYXNoYm9hcmQvYWRkVG9EYXNoYm9hcmQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZXhwbG9yZS9BZGRUb0Rhc2hib2FyZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVwb3J0TWV0YUFuYWx5dGljcywgTWV0YUFuYWx5dGljc0V2ZW50TmFtZSwgRGFzaGJvYXJkVmlld0V2ZW50UGF5bG9hZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4vRGFzaGJvYXJkTW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZW1pdERhc2hib2FyZFZpZXdFdmVudChkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsKSB7XG4gIGNvbnN0IGV2ZW50RGF0YTogRGFzaGJvYXJkVmlld0V2ZW50UGF5bG9hZCA9IHtcbiAgICBkYXNoYm9hcmRJZDogZGFzaGJvYXJkLmlkLFxuICAgIGRhc2hib2FyZE5hbWU6IGRhc2hib2FyZC50aXRsZSxcbiAgICBkYXNoYm9hcmRVaWQ6IGRhc2hib2FyZC51aWQsXG4gICAgZm9sZGVyTmFtZTogZGFzaGJvYXJkLm1ldGEuZm9sZGVyVGl0bGUsXG4gICAgZXZlbnROYW1lOiBNZXRhQW5hbHl0aWNzRXZlbnROYW1lLkRhc2hib2FyZFZpZXcsXG4gIH07XG5cbiAgcmVwb3J0TWV0YUFuYWx5dGljcyhldmVudERhdGEpO1xufVxuIiwiaW1wb3J0IHsgbG9jYXRpb25VdGlsLCBzZXRXZWVrU3RhcnQgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgYmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGtleWJpbmRpbmdTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9rZXliaW5kaW5nU3J2JztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5pbXBvcnQgeyBkYXNoYm9hcmRMb2FkZXJTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL0Rhc2hib2FyZExvYWRlclNydic7XG5pbXBvcnQgeyBEYXNoYm9hcmRTcnYsIGdldERhc2hib2FyZFNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc2VydmljZXMvRGFzaGJvYXJkU3J2JztcbmltcG9ydCB7IGdldFRpbWVTcnYsIFRpbWVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL1RpbWVTcnYnO1xuaW1wb3J0IHsgZGFzaGJvYXJkV2F0Y2hlciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9saXZlL2Rhc2hib2FyZC9kYXNoYm9hcmRXYXRjaGVyJztcbmltcG9ydCB7IHRvU3RhdGVLZXkgfSBmcm9tICdhcHAvZmVhdHVyZXMvdmFyaWFibGVzL3V0aWxzJztcbmltcG9ydCB7IERhc2hib2FyZERUTywgRGFzaGJvYXJkSW5pdFBoYXNlLCBEYXNoYm9hcmRSb3V0ZXMsIFN0b3JlU3RhdGUsIFRodW5rRGlzcGF0Y2gsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgY3JlYXRlRGFzaGJvYXJkUXVlcnlSdW5uZXIgfSBmcm9tICcuLi8uLi9xdWVyeS9zdGF0ZS9EYXNoYm9hcmRRdWVyeVJ1bm5lci9EYXNoYm9hcmRRdWVyeVJ1bm5lcic7XG5pbXBvcnQgeyBpbml0VmFyaWFibGVzVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi92YXJpYWJsZXMvc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRJZkV4aXN0c0xhc3RLZXkgfSBmcm9tICcuLi8uLi92YXJpYWJsZXMvc3RhdGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICcuL0Rhc2hib2FyZE1vZGVsJztcbmltcG9ydCB7IGVtaXREYXNoYm9hcmRWaWV3RXZlbnQgfSBmcm9tICcuL2FuYWx5dGljc1Byb2Nlc3Nvcic7XG5pbXBvcnQgeyBkYXNoYm9hcmRJbml0Q29tcGxldGVkLCBkYXNoYm9hcmRJbml0RmFpbGVkLCBkYXNoYm9hcmRJbml0RmV0Y2hpbmcsIGRhc2hib2FyZEluaXRTZXJ2aWNlcyB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXNoYm9hcmRBcmdzIHtcbiAgdXJsVWlkPzogc3RyaW5nO1xuICB1cmxTbHVnPzogc3RyaW5nO1xuICB1cmxUeXBlPzogc3RyaW5nO1xuICB1cmxGb2xkZXJJZD86IHN0cmluZyB8IG51bGw7XG4gIHJvdXRlTmFtZT86IHN0cmluZztcbiAgZml4VXJsOiBib29sZWFuO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaERhc2hib2FyZChcbiAgYXJnczogSW5pdERhc2hib2FyZEFyZ3MsXG4gIGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoLFxuICBnZXRTdGF0ZTogKCkgPT4gU3RvcmVTdGF0ZVxuKTogUHJvbWlzZTxEYXNoYm9hcmREVE8gfCBudWxsPiB7XG4gIC8vIFdoZW4gY3JlYXRpbmcgbmV3IG9yIGFkZGluZyBwYW5lbHMgdG8gYSBkYXNoYm9hcmQgZnJvbSBleHBsb3JlIHdlIGxvYWQgaXQgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IG1vZGVsID0gc3RvcmUuZ2V0T2JqZWN0PERhc2hib2FyZERUTz4oREFTSEJPQVJEX0ZST01fTFNfS0VZKTtcbiAgaWYgKG1vZGVsKSB7XG4gICAgcmVtb3ZlRGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICB0cnkge1xuICAgIHN3aXRjaCAoYXJncy5yb3V0ZU5hbWUpIHtcbiAgICAgIGNhc2UgRGFzaGJvYXJkUm91dGVzLkhvbWU6IHtcbiAgICAgICAgLy8gbG9hZCBob21lIGRhc2hcbiAgICAgICAgY29uc3QgZGFzaERUTzogRGFzaGJvYXJkRFRPID0gYXdhaXQgYmFja2VuZFNydi5nZXQoJy9hcGkvZGFzaGJvYXJkcy9ob21lJyk7XG5cbiAgICAgICAgLy8gaWYgdXNlciBzcGVjaWZpZWQgYSBjdXN0b20gaG9tZSBkYXNoYm9hcmQgcmVkaXJlY3QgdG8gdGhhdFxuICAgICAgICBpZiAoZGFzaERUTy5yZWRpcmVjdFVyaSkge1xuICAgICAgICAgIGNvbnN0IG5ld1VybCA9IGxvY2F0aW9uVXRpbC5zdHJpcEJhc2VGcm9tVXJsKGRhc2hEVE8ucmVkaXJlY3RVcmkpO1xuICAgICAgICAgIGxvY2F0aW9uU2VydmljZS5yZXBsYWNlKG5ld1VybCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkaXNhYmxlIHNvbWUgYWN0aW9ucyBvbiB0aGUgZGVmYXVsdCBob21lIGRhc2hib2FyZFxuICAgICAgICBkYXNoRFRPLm1ldGEuY2FuU2F2ZSA9IGZhbHNlO1xuICAgICAgICBkYXNoRFRPLm1ldGEuY2FuU2hhcmUgPSBmYWxzZTtcbiAgICAgICAgZGFzaERUTy5tZXRhLmNhblN0YXIgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGRhc2hEVE87XG4gICAgICB9XG4gICAgICBjYXNlIERhc2hib2FyZFJvdXRlcy5Ob3JtYWw6IHtcbiAgICAgICAgY29uc3QgZGFzaERUTzogRGFzaGJvYXJkRFRPID0gYXdhaXQgZGFzaGJvYXJkTG9hZGVyU3J2LmxvYWREYXNoYm9hcmQoYXJncy51cmxUeXBlLCBhcmdzLnVybFNsdWcsIGFyZ3MudXJsVWlkKTtcblxuICAgICAgICBpZiAoYXJncy5maXhVcmwgJiYgZGFzaERUTy5tZXRhLnVybCkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBjdXJyZW50IHVybCBpcyBjb3JyZWN0IChtaWdodCBiZSBvbGQgc2x1ZylcbiAgICAgICAgICBjb25zdCBkYXNoYm9hcmRVcmwgPSBsb2NhdGlvblV0aWwuc3RyaXBCYXNlRnJvbVVybChkYXNoRFRPLm1ldGEudXJsKTtcbiAgICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLnBhdGhuYW1lO1xuXG4gICAgICAgICAgaWYgKGRhc2hib2FyZFVybCAhPT0gY3VycmVudFBhdGgpIHtcbiAgICAgICAgICAgIC8vIFNwcmVhZCBjdXJyZW50IGxvY2F0aW9uIHRvIHBlcnNpc3Qgc2VhcmNoIHBhcmFtcyB1c2VkIGZvciBuYXZpZ2F0aW9uXG4gICAgICAgICAgICBsb2NhdGlvblNlcnZpY2UucmVwbGFjZSh7XG4gICAgICAgICAgICAgIC4uLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLFxuICAgICAgICAgICAgICBwYXRobmFtZTogZGFzaGJvYXJkVXJsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGNvcnJlY3QgdXJsIGNvcnJlY3RpbmcnLCBkYXNoYm9hcmRVcmwsIGN1cnJlbnRQYXRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhc2hEVE87XG4gICAgICB9XG4gICAgICBjYXNlIERhc2hib2FyZFJvdXRlcy5OZXc6IHtcbiAgICAgICAgcmV0dXJuIGdldE5ld0Rhc2hib2FyZE1vZGVsRGF0YShhcmdzLnVybEZvbGRlcklkKTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IHsgbWVzc2FnZTogJ1Vua25vd24gcm91dGUgJyArIGFyZ3Mucm91dGVOYW1lIH07XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJZ25vcmUgY2FuY2VsbGVkIGVycm9yc1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBkaXNwYXRjaChkYXNoYm9hcmRJbml0RmFpbGVkKHsgbWVzc2FnZTogJ0ZhaWxlZCB0byBmZXRjaCBkYXNoYm9hcmQnLCBlcnJvcjogZXJyIH0pKTtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGlzIGFjdGlvbiAob3Igc2FnYSkgZG9lcyBldmVyeXRoaW5nIG5lZWRlZCB0byBib290c3RyYXAgYSBkYXNoYm9hcmQgJiBkYXNoYm9hcmQgbW9kZWwuXG4gKiBGaXJzdCBpdCBoYW5kbGVzIHRoZSBwcm9jZXNzIG9mIGZldGNoaW5nIHRoZSBkYXNoYm9hcmQsIGNvcnJlY3RpbmcgdGhlIHVybCBpZiByZXF1aXJlZCAoY2F1c2luZyByZWRpcmVjdHMvdXJsIHVwZGF0ZXMpXG4gKlxuICogVGhpcyBpcyB1c2VkIGJvdGggZm9yIHNpbmdsZSBkYXNoYm9hcmQgJiBzb2xvIHBhbmVsIHJvdXRlcywgaG9tZSAmIG5ldyBkYXNoYm9hcmQgcm91dGVzLlxuICpcbiAqIFRoZW4gaXQgaGFuZGxlcyB0aGUgaW5pdGlhbGl6aW5nIG9mIHRoZSBvbGQgYW5ndWxhciBzZXJ2aWNlcyB0aGF0IHRoZSBkYXNoYm9hcmQgY29tcG9uZW50cyAmIHBhbmVscyBzdGlsbCBkZXBlbmQgb25cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0RGFzaGJvYXJkKGFyZ3M6IEluaXREYXNoYm9hcmRBcmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIC8vIHNldCBmZXRjaGluZyBzdGF0ZVxuICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRGZXRjaGluZygpKTtcblxuICAgIC8vIGZldGNoIGRhc2hib2FyZCBkYXRhXG4gICAgY29uc3QgZGFzaERUTyA9IGF3YWl0IGZldGNoRGFzaGJvYXJkKGFyZ3MsIGRpc3BhdGNoLCBnZXRTdGF0ZSk7XG5cbiAgICAvLyByZXR1cm5zIG51bGwgaWYgdGhlcmUgd2FzIGEgcmVkaXJlY3Qgb3IgZXJyb3JcbiAgICBpZiAoIWRhc2hEVE8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzZXQgaW5pdGlhbGl6aW5nIHN0YXRlXG4gICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdFNlcnZpY2VzKCkpO1xuXG4gICAgLy8gY3JlYXRlIG1vZGVsXG4gICAgbGV0IGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gICAgdHJ5IHtcbiAgICAgIGRhc2hib2FyZCA9IG5ldyBEYXNoYm9hcmRNb2RlbChkYXNoRFRPLmRhc2hib2FyZCwgZGFzaERUTy5tZXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRGYWlsZWQoeyBtZXNzYWdlOiAnRmFpbGVkIGNyZWF0ZSBkYXNoYm9hcmQgbW9kZWwnLCBlcnJvcjogZXJyIH0pKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZGQgbWlzc2luZyBvcmdJZCBxdWVyeSBwYXJhbVxuICAgIGNvbnN0IHN0b3JlU3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpO1xuXG4gICAgaWYgKCFxdWVyeVBhcmFtcy5vcmdJZCkge1xuICAgICAgLy8gVE9ETyB0aGlzIGlzIGN1cnJlbnRseSBub3QgcG9zc2libGUgd2l0aCB0aGUgTG9jYXRpb25TZXJ2aWNlIEFQSVxuICAgICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoeyBvcmdJZDogc3RvcmVTdGF0ZS51c2VyLm9yZ0lkIH0sIHRydWUpO1xuICAgIH1cblxuICAgIC8vIGluaXQgc2VydmljZXNcbiAgICBjb25zdCB0aW1lU3J2OiBUaW1lU3J2ID0gZ2V0VGltZVNydigpO1xuICAgIGNvbnN0IGRhc2hib2FyZFNydjogRGFzaGJvYXJkU3J2ID0gZ2V0RGFzaGJvYXJkU3J2KCk7XG5cbiAgICAvLyBsZWdhY3kgc3J2IHN0YXRlLCB3ZSBuZWVkIHRoaXMgdmFsdWUgdXBkYXRlZCBmb3IgYnVpbHQtaW4gYW5ub3RhdGlvbnNcbiAgICBkYXNoYm9hcmRTcnYuc2V0Q3VycmVudChkYXNoYm9hcmQpO1xuXG4gICAgdGltZVNydi5pbml0KGRhc2hib2FyZCk7XG5cbiAgICBjb25zdCBkYXNoYm9hcmRVaWQgPSB0b1N0YXRlS2V5KGFyZ3MudXJsVWlkID8/IGRhc2hib2FyZC51aWQpO1xuICAgIC8vIHRlbXBsYXRlIHZhbHVlcyBzZXJ2aWNlIG5lZWRzIHRvIGluaXRpYWxpemUgY29tcGxldGVseSBiZWZvcmUgdGhlIHJlc3Qgb2YgdGhlIGRhc2hib2FyZCBjYW4gbG9hZFxuICAgIGF3YWl0IGRpc3BhdGNoKGluaXRWYXJpYWJsZXNUcmFuc2FjdGlvbihkYXNoYm9hcmRVaWQsIGRhc2hib2FyZCkpO1xuXG4gICAgLy8gRGFzaGJvYXJkUXVlcnlSdW5uZXIgbmVlZHMgdG8gcnVuIGFmdGVyIGFsbCB2YXJpYWJsZXMgaGF2ZSBiZWVuIHJlc29sdmVkIHNvIHRoYXQgYW55IGFubm90YXRpb24gcXVlcnkgaW5jbHVkaW5nIGEgdmFyaWFibGVcbiAgICAvLyB3aWxsIGJlIGNvcnJlY3RseSByZXNvbHZlZFxuICAgIGNvbnN0IHJ1bm5lciA9IGNyZWF0ZURhc2hib2FyZFF1ZXJ5UnVubmVyKHsgZGFzaGJvYXJkLCB0aW1lU3J2IH0pO1xuICAgIHJ1bm5lci5ydW4oeyBkYXNoYm9hcmQsIHJhbmdlOiB0aW1lU3J2LnRpbWVSYW5nZSgpIH0pO1xuXG4gICAgaWYgKGdldElmRXhpc3RzTGFzdEtleShnZXRTdGF0ZSgpKSAhPT0gZGFzaGJvYXJkVWlkKSB7XG4gICAgICAvLyBpZiBhIHByZXZpb3VzIGRhc2hib2FyZCBoYXMgc2xvdyBydW5uaW5nIHZhcmlhYmxlIHF1ZXJpZXMgdGhlIGJhdGNoIHVpZCB3aWxsIGJlIHRoZSBuZXcgb25lXG4gICAgICAvLyBidXQgdGhlIGFyZ3MudXJsVWlkIHdpbGwgYmUgdGhlIHNhbWUgYXMgYmVmb3JlIGluaXRWYXJpYWJsZXNUcmFuc2FjdGlvbiB3YXMgY2FsbGVkIHNvIHRoZW4gd2UgY2FuJ3QgY29udGludWUgaW5pdGlhbGl6aW5nXG4gICAgICAvLyB0aGUgcHJldmlvdXMgZGFzaGJvYXJkLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGRhc2hib2FyZCBpcyBpbiBhIGRpZmZlcmVudCBpbml0IHBoYXNlIGl0IG1lYW5zIGl0IGNhbmNlbGxlZCBkdXJpbmcgc2VydmljZSBpbml0XG4gICAgaWYgKGdldFN0YXRlKCkuZGFzaGJvYXJkLmluaXRQaGFzZSAhPT0gRGFzaGJvYXJkSW5pdFBoYXNlLlNlcnZpY2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGRhc2hib2FyZC5wcm9jZXNzUmVwZWF0cygpO1xuXG4gICAgICAvLyBoYW5kbGUgYXV0byBmaXggZXhwZXJpbWVudGFsIGZlYXR1cmVcbiAgICAgIGlmIChxdWVyeVBhcmFtcy5hdXRvZml0cGFuZWxzKSB7XG4gICAgICAgIGRhc2hib2FyZC5hdXRvRml0UGFuZWxzKHdpbmRvdy5pbm5lckhlaWdodCwgcXVlcnlQYXJhbXMua2lvc2spO1xuICAgICAgfVxuXG4gICAgICBrZXliaW5kaW5nU3J2LnNldHVwRGFzaGJvYXJkQmluZGluZ3MoZGFzaGJvYXJkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbignRGFzaGJvYXJkIGluaXQgZmFpbGVkJywgZXJyKSkpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cblxuICAgIC8vIHNlbmQgb3BlbiBkYXNoYm9hcmQgZXZlbnRcbiAgICBpZiAoYXJncy5yb3V0ZU5hbWUgIT09IERhc2hib2FyZFJvdXRlcy5OZXcpIHtcbiAgICAgIGVtaXREYXNoYm9hcmRWaWV3RXZlbnQoZGFzaGJvYXJkKTtcblxuICAgICAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIG9uIHRoZSBjdXJyZW50IGRhc2hib2FyZFxuICAgICAgZGFzaGJvYXJkV2F0Y2hlci53YXRjaChkYXNoYm9hcmQudWlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGFzaGJvYXJkV2F0Y2hlci5sZWF2ZSgpO1xuICAgIH1cblxuICAgIC8vIHNldCB3ZWVrIHN0YXJ0XG4gICAgaWYgKGRhc2hib2FyZC53ZWVrU3RhcnQgIT09ICcnKSB7XG4gICAgICBzZXRXZWVrU3RhcnQoZGFzaGJvYXJkLndlZWtTdGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFdlZWtTdGFydChjb25maWcuYm9vdERhdGEudXNlci53ZWVrU3RhcnQpO1xuICAgIH1cblxuICAgIC8vIHlheSB3ZSBhcmUgZG9uZVxuICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRDb21wbGV0ZWQoZGFzaGJvYXJkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdEYXNoYm9hcmRNb2RlbERhdGEodXJsRm9sZGVySWQ/OiBzdHJpbmcgfCBudWxsKTogYW55IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBtZXRhOiB7XG4gICAgICBjYW5TdGFyOiBmYWxzZSxcbiAgICAgIGNhblNoYXJlOiBmYWxzZSxcbiAgICAgIGlzTmV3OiB0cnVlLFxuICAgICAgZm9sZGVySWQ6IDAsXG4gICAgfSxcbiAgICBkYXNoYm9hcmQ6IHtcbiAgICAgIHRpdGxlOiAnTmV3IGRhc2hib2FyZCcsXG4gICAgICBwYW5lbHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdhZGQtcGFuZWwnLFxuICAgICAgICAgIGdyaWRQb3M6IHsgeDogMCwgeTogMCwgdzogMTIsIGg6IDkgfSxcbiAgICAgICAgICB0aXRsZTogJ1BhbmVsIFRpdGxlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfTtcblxuICBpZiAodXJsRm9sZGVySWQpIHtcbiAgICBkYXRhLm1ldGEuZm9sZGVySWQgPSBwYXJzZUludCh1cmxGb2xkZXJJZCwgMTApO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmNvbnN0IERBU0hCT0FSRF9GUk9NX0xTX0tFWSA9ICdEQVNIQk9BUkRfRlJPTV9MU19LRVknO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UobW9kZWw6IERhc2hib2FyZERUTykge1xuICBzdG9yZS5zZXRPYmplY3QoREFTSEJPQVJEX0ZST01fTFNfS0VZLCBtb2RlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgc3RvcmUuZGVsZXRlKERBU0hCT0FSRF9GUk9NX0xTX0tFWSk7XG59XG4iLCJpbXBvcnQgeyBwYXJ0aWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGVlcE1hcCwgRmllbGRFcnJvciwgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgbG9jYXRpb25VdGlsLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgbG9jYXRpb25TZXJ2aWNlLCByZXBvcnRJbnRlcmFjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgRmllbGQsIElucHV0Q29udHJvbCwgTW9kYWwsIFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRQaWNrZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1NlbGVjdC9EYXNoYm9hcmRQaWNrZXInO1xuaW1wb3J0IHsgcmVtb3ZlRGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL2luaXREYXNoYm9hcmQnO1xuaW1wb3J0IHsgRXhwbG9yZUlkIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgZ2V0RXhwbG9yZUl0ZW1TZWxlY3RvciB9IGZyb20gJy4uL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IHNldERhc2hib2FyZEluTG9jYWxTdG9yYWdlLCBBZGRUb0Rhc2hib2FyZEVycm9yIH0gZnJvbSAnLi9hZGRUb0Rhc2hib2FyZCc7XG5cbmVudW0gU2F2ZVRhcmdldCB7XG4gIE5ld0Rhc2hib2FyZCA9ICduZXctZGFzaGJvYXJkJyxcbiAgRXhpc3RpbmdEYXNoYm9hcmQgPSAnZXhpc3RpbmctZGFzaGJvYXJkJyxcbn1cblxuY29uc3QgU0FWRV9UQVJHRVRTOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8U2F2ZVRhcmdldD4+ID0gW1xuICB7XG4gICAgbGFiZWw6ICdOZXcgZGFzaGJvYXJkJyxcbiAgICB2YWx1ZTogU2F2ZVRhcmdldC5OZXdEYXNoYm9hcmQsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0V4aXN0aW5nIGRhc2hib2FyZCcsXG4gICAgdmFsdWU6IFNhdmVUYXJnZXQuRXhpc3RpbmdEYXNoYm9hcmQsXG4gIH0sXG5dO1xuXG5pbnRlcmZhY2UgU2F2ZVRhcmdldERUTyB7XG4gIHNhdmVUYXJnZXQ6IFNhdmVUYXJnZXQ7XG59XG5pbnRlcmZhY2UgU2F2ZVRvTmV3RGFzaGJvYXJkRFRPIGV4dGVuZHMgU2F2ZVRhcmdldERUTyB7XG4gIHNhdmVUYXJnZXQ6IFNhdmVUYXJnZXQuTmV3RGFzaGJvYXJkO1xufVxuXG5pbnRlcmZhY2UgU2F2ZVRvRXhpc3RpbmdEYXNoYm9hcmQgZXh0ZW5kcyBTYXZlVGFyZ2V0RFRPIHtcbiAgc2F2ZVRhcmdldDogU2F2ZVRhcmdldC5FeGlzdGluZ0Rhc2hib2FyZDtcbiAgZGFzaGJvYXJkVWlkOiBzdHJpbmc7XG59XG5cbnR5cGUgRm9ybURUTyA9IFNhdmVUb05ld0Rhc2hib2FyZERUTyB8IFNhdmVUb0V4aXN0aW5nRGFzaGJvYXJkO1xuXG5mdW5jdGlvbiBhc3NlcnRJc1NhdmVUb0V4aXN0aW5nRGFzaGJvYXJkRXJyb3IoXG4gIGVycm9yczogRGVlcE1hcDxGb3JtRFRPLCBGaWVsZEVycm9yPlxuKTogYXNzZXJ0cyBlcnJvcnMgaXMgRGVlcE1hcDxTYXZlVG9FeGlzdGluZ0Rhc2hib2FyZCwgRmllbGRFcnJvcj4ge1xuICAvLyB0aGUgc2hhcGUgb2YgdGhlIGVycm9ycyBvYmplY3QgaXMgYWx3YXlzIGNvbXBhdGlibGUgd2l0aCB0aGUgdHlwZSBhYm92ZSwgYnV0IHdlIG5lZWQgdG9cbiAgLy8gZXhwbGljaXRseSBhc3NlcnQgaXRzIHR5cGUgc28gdGhhdCBUUyBjYW4gbmFycm93IGRvd24gRm9ybURUTyB0byBTYXZlVG9FeGlzdGluZ0Rhc2hib2FyZFxuICAvLyB3aGVuIHdlIHVzZSBpdCBpbiB0aGUgZm9ybS5cbn1cblxuZnVuY3Rpb24gZ2V0RGFzaGJvYXJkVVJMKGRhc2hib2FyZFVpZD86IHN0cmluZykge1xuICByZXR1cm4gZGFzaGJvYXJkVWlkID8gYGQvJHtkYXNoYm9hcmRVaWR9YCA6ICdkYXNoYm9hcmQvbmV3Jztcbn1cblxuZW51bSBHZW5lcmljRXJyb3Ige1xuICBVTktOT1dOID0gJ3Vua25vd24tZXJyb3InLFxuICBOQVZJR0FUSU9OID0gJ25hdmlnYXRpb24tZXJyb3InLFxufVxuXG5pbnRlcmZhY2UgU3VibWlzc2lvbkVycm9yIHtcbiAgZXJyb3I6IEFkZFRvRGFzaGJvYXJkRXJyb3IgfCBHZW5lcmljRXJyb3I7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgZXhwbG9yZUlkOiBFeHBsb3JlSWQ7XG59XG5cbmV4cG9ydCBjb25zdCBBZGRUb0Rhc2hib2FyZE1vZGFsID0gKHsgb25DbG9zZSwgZXhwbG9yZUlkIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGV4cGxvcmVJdGVtID0gdXNlU2VsZWN0b3IoZ2V0RXhwbG9yZUl0ZW1TZWxlY3RvcihleHBsb3JlSWQpKSE7XG4gIGNvbnN0IFtzdWJtaXNzaW9uRXJyb3IsIHNldFN1Ym1pc3Npb25FcnJvcl0gPSB1c2VTdGF0ZTxTdWJtaXNzaW9uRXJyb3IgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IHtcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgY29udHJvbCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgd2F0Y2gsXG4gIH0gPSB1c2VGb3JtPEZvcm1EVE8+KHtcbiAgICBkZWZhdWx0VmFsdWVzOiB7IHNhdmVUYXJnZXQ6IFNhdmVUYXJnZXQuTmV3RGFzaGJvYXJkIH0sXG4gIH0pO1xuICBjb25zdCBzYXZlVGFyZ2V0ID0gd2F0Y2goJ3NhdmVUYXJnZXQnKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChvcGVuSW5OZXdUYWI6IGJvb2xlYW4sIGRhdGE6IEZvcm1EVE8pID0+IHtcbiAgICBzZXRTdWJtaXNzaW9uRXJyb3IodW5kZWZpbmVkKTtcbiAgICBjb25zdCBkYXNoYm9hcmRVaWQgPSBkYXRhLnNhdmVUYXJnZXQgPT09IFNhdmVUYXJnZXQuRXhpc3RpbmdEYXNoYm9hcmQgPyBkYXRhLmRhc2hib2FyZFVpZCA6IHVuZGVmaW5lZDtcblxuICAgIHJlcG9ydEludGVyYWN0aW9uKCdlMmRfc3VibWl0Jywge1xuICAgICAgbmV3VGFiOiBvcGVuSW5OZXdUYWIsXG4gICAgICBzYXZlVGFyZ2V0OiBkYXRhLnNhdmVUYXJnZXQsXG4gICAgICBxdWVyaWVzOiBleHBsb3JlSXRlbS5xdWVyaWVzLmxlbmd0aCxcbiAgICB9KTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZXREYXNoYm9hcmRJbkxvY2FsU3RvcmFnZSh7XG4gICAgICAgIGRhc2hib2FyZFVpZCxcbiAgICAgICAgZGF0YXNvdXJjZTogZXhwbG9yZUl0ZW0uZGF0YXNvdXJjZUluc3RhbmNlPy5nZXRSZWYoKSxcbiAgICAgICAgcXVlcmllczogZXhwbG9yZUl0ZW0ucXVlcmllcyxcbiAgICAgICAgcXVlcnlSZXNwb25zZTogZXhwbG9yZUl0ZW0ucXVlcnlSZXNwb25zZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzd2l0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNhc2UgQWRkVG9EYXNoYm9hcmRFcnJvci5GRVRDSF9EQVNIQk9BUkQ6XG4gICAgICAgICAgc2V0U3VibWlzc2lvbkVycm9yKHsgZXJyb3IsIG1lc3NhZ2U6ICdDb3VsZCBub3QgZmV0Y2ggZGFzaGJvYXJkIGluZm9ybWF0aW9uLiBQbGVhc2UgdHJ5IGFnYWluLicgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgQWRkVG9EYXNoYm9hcmRFcnJvci5TRVRfREFTSEJPQVJEX0xTOlxuICAgICAgICAgIHNldFN1Ym1pc3Npb25FcnJvcih7IGVycm9yLCBtZXNzYWdlOiAnQ291bGQgbm90IGFkZCBwYW5lbCB0byBkYXNoYm9hcmQuIFBsZWFzZSB0cnkgYWdhaW4uJyB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBzZXRTdWJtaXNzaW9uRXJyb3IoeyBlcnJvcjogR2VuZXJpY0Vycm9yLlVOS05PV04sIG1lc3NhZ2U6ICdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi4nIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhc2hib2FyZFVSTCA9IGdldERhc2hib2FyZFVSTChkYXNoYm9hcmRVaWQpO1xuICAgIGlmICghb3BlbkluTmV3VGFiKSB7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaChsb2NhdGlvblV0aWwuc3RyaXBCYXNlRnJvbVVybChkYXNoYm9hcmRVUkwpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkaWRUYWJPcGVuID0gISFnbG9iYWwub3Blbihjb25maWcuYXBwVXJsICsgZGFzaGJvYXJkVVJMLCAnX2JsYW5rJyk7XG4gICAgaWYgKCFkaWRUYWJPcGVuKSB7XG4gICAgICBzZXRTdWJtaXNzaW9uRXJyb3Ioe1xuICAgICAgICBlcnJvcjogR2VuZXJpY0Vycm9yLk5BVklHQVRJT04sXG4gICAgICAgIG1lc3NhZ2U6ICdDb3VsZCBub3QgbmF2aWdhdGUgdG8gdGhlIHNlbGVjdGVkIGRhc2hib2FyZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLFxuICAgICAgfSk7XG4gICAgICByZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXBvcnRJbnRlcmFjdGlvbignZTJkX29wZW4nKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHRpdGxlPVwiQWRkIHBhbmVsIHRvIGRhc2hib2FyZFwiIG9uRGlzbWlzcz17b25DbG9zZX0gaXNPcGVuPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlRhcmdldCBkYXNoYm9hcmRcIiBkZXNjcmlwdGlvbj1cIkNob29zZSB3aGVyZSB0byBhZGQgdGhlIHBhbmVsLlwiPlxuICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCBvcHRpb25zPXtTQVZFX1RBUkdFVFN9IHsuLi5maWVsZH0gaWQ9XCJlMmQtc2F2ZS10YXJnZXRcIiAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJzYXZlVGFyZ2V0XCJcbiAgICAgICAgLz5cblxuICAgICAgICB7c2F2ZVRhcmdldCA9PT0gU2F2ZVRhcmdldC5FeGlzdGluZ0Rhc2hib2FyZCAmJlxuICAgICAgICAgICgoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnRJc1NhdmVUb0V4aXN0aW5nRGFzaGJvYXJkRXJyb3IoZXJyb3JzKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgdmFsdWUsIG9uQ2hhbmdlLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhc2hib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU2VsZWN0IGluIHdoaWNoIGRhc2hib2FyZCB0aGUgcGFuZWwgd2lsbCBiZSBjcmVhdGVkLlwiXG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZGFzaGJvYXJkVWlkPy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5kYXNoYm9hcmRVaWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImUyZC1kYXNoYm9hcmQtcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZCkgPT4gb25DaGFuZ2UoZD8udWlkKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYXNoYm9hcmRVaWRcIlxuICAgICAgICAgICAgICAgIHNob3VsZFVucmVnaXN0ZXJcbiAgICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQuJyB9IH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pKCl9XG5cbiAgICAgICAge3N1Ym1pc3Npb25FcnJvciAmJiAoXG4gICAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIiB0aXRsZT1cIkVycm9yIGFkZGluZyB0aGUgcGFuZWxcIj5cbiAgICAgICAgICAgIHtzdWJtaXNzaW9uRXJyb3IubWVzc2FnZX1cbiAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICApfVxuXG4gICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicmVzZXRcIiBvbkNsaWNrPXtvbkNsb3NlfSBmaWxsPVwib3V0bGluZVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXQocGFydGlhbChvblN1Ym1pdCwgdHJ1ZSkpfVxuICAgICAgICAgICAgaWNvbj1cImV4dGVybmFsLWxpbmstYWx0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBPcGVuIGluIG5ldyB0YWJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChwYXJ0aWFsKG9uU3VibWl0LCBmYWxzZSkpfSBpY29uPVwiYXBwc1wiPlxuICAgICAgICAgICAgT3BlbiBkYXNoYm9hcmRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBEYXRhRnJhbWUsIERhdGFRdWVyeSwgRGF0YVNvdXJjZVJlZiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgYmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7XG4gIGdldE5ld0Rhc2hib2FyZE1vZGVsRGF0YSxcbiAgc2V0RGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UsXG59IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUvaW5pdERhc2hib2FyZCc7XG5pbXBvcnQgeyBEYXNoYm9hcmREVE8sIEV4cGxvcmVQYW5lbERhdGEgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgZW51bSBBZGRUb0Rhc2hib2FyZEVycm9yIHtcbiAgRkVUQ0hfREFTSEJPQVJEID0gJ2ZldGNoLWRhc2hib2FyZCcsXG4gIFNFVF9EQVNIQk9BUkRfTFMgPSAnc2V0LWRhc2hib2FyZC1scy1lcnJvcicsXG59XG5cbmludGVyZmFjZSBBZGRQYW5lbFRvRGFzaGJvYXJkT3B0aW9ucyB7XG4gIHF1ZXJpZXM6IERhdGFRdWVyeVtdO1xuICBxdWVyeVJlc3BvbnNlOiBFeHBsb3JlUGFuZWxEYXRhO1xuICBkYXRhc291cmNlPzogRGF0YVNvdXJjZVJlZjtcbiAgZGFzaGJvYXJkVWlkPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXNoYm9hcmQoKTogRGFzaGJvYXJkRFRPIHtcbiAgY29uc3QgZHRvID0gZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhKCk7XG5cbiAgLy8gZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhIGFkZHMgYnkgZGVmYXVsdCB0aGUgXCJhZGQtcGFuZWxcIiBwYW5lbC4gV2UgZG9uJ3Qgd2FudCB0aGF0LlxuICBkdG8uZGFzaGJvYXJkLnBhbmVscyA9IFtdO1xuXG4gIHJldHVybiBkdG87XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXREYXNoYm9hcmRJbkxvY2FsU3RvcmFnZShvcHRpb25zOiBBZGRQYW5lbFRvRGFzaGJvYXJkT3B0aW9ucykge1xuICBjb25zdCBwYW5lbFR5cGUgPSBnZXRQYW5lbFR5cGUob3B0aW9ucy5xdWVyaWVzLCBvcHRpb25zLnF1ZXJ5UmVzcG9uc2UpO1xuICBjb25zdCBwYW5lbCA9IHtcbiAgICB0YXJnZXRzOiBvcHRpb25zLnF1ZXJpZXMsXG4gICAgdHlwZTogcGFuZWxUeXBlLFxuICAgIHRpdGxlOiAnTmV3IFBhbmVsJyxcbiAgICBncmlkUG9zOiB7IHg6IDAsIHk6IDAsIHc6IDEyLCBoOiA4IH0sXG4gICAgZGF0YXNvdXJjZTogb3B0aW9ucy5kYXRhc291cmNlLFxuICB9O1xuXG4gIGxldCBkdG86IERhc2hib2FyZERUTztcblxuICBpZiAob3B0aW9ucy5kYXNoYm9hcmRVaWQpIHtcbiAgICB0cnkge1xuICAgICAgZHRvID0gYXdhaXQgYmFja2VuZFNydi5nZXREYXNoYm9hcmRCeVVpZChvcHRpb25zLmRhc2hib2FyZFVpZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgQWRkVG9EYXNoYm9hcmRFcnJvci5GRVRDSF9EQVNIQk9BUkQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGR0byA9IGNyZWF0ZURhc2hib2FyZCgpO1xuICB9XG5cbiAgZHRvLmRhc2hib2FyZC5wYW5lbHMgPSBbcGFuZWwsIC4uLihkdG8uZGFzaGJvYXJkLnBhbmVscyA/PyBbXSldO1xuXG4gIHRyeSB7XG4gICAgc2V0RGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UoZHRvKTtcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgQWRkVG9EYXNoYm9hcmRFcnJvci5TRVRfREFTSEJPQVJEX0xTO1xuICB9XG59XG5cbmNvbnN0IGlzVmlzaWJsZSA9IChxdWVyeTogRGF0YVF1ZXJ5KSA9PiAhcXVlcnkuaGlkZTtcbmNvbnN0IGhhc1JlZklkID0gKHJlZklkOiBEYXRhRnJhbWVbJ3JlZklkJ10pID0+IChmcmFtZTogRGF0YUZyYW1lKSA9PiBmcmFtZS5yZWZJZCA9PT0gcmVmSWQ7XG5cbmZ1bmN0aW9uIGdldFBhbmVsVHlwZShxdWVyaWVzOiBEYXRhUXVlcnlbXSwgcXVlcnlSZXNwb25zZTogRXhwbG9yZVBhbmVsRGF0YSkge1xuICBmb3IgKGNvbnN0IHsgcmVmSWQgfSBvZiBxdWVyaWVzLmZpbHRlcihpc1Zpc2libGUpKSB7XG4gICAgLy8gdHJhY2V2aWV3IGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGFzaGJvYXJkcywgc2tpcHBpbmcgaXQgZm9yIG5vdy5cbiAgICBjb25zdCBoYXNRdWVyeVJlZklkID0gaGFzUmVmSWQocmVmSWQpO1xuICAgIGlmIChxdWVyeVJlc3BvbnNlLmdyYXBoRnJhbWVzLnNvbWUoaGFzUXVlcnlSZWZJZCkpIHtcbiAgICAgIHJldHVybiAndGltZXNlcmllcyc7XG4gICAgfVxuICAgIGlmIChxdWVyeVJlc3BvbnNlLmxvZ3NGcmFtZXMuc29tZShoYXNRdWVyeVJlZklkKSkge1xuICAgICAgcmV0dXJuICdsb2dzJztcbiAgICB9XG4gICAgaWYgKHF1ZXJ5UmVzcG9uc2Uubm9kZUdyYXBoRnJhbWVzLnNvbWUoaGFzUXVlcnlSZWZJZCkpIHtcbiAgICAgIHJldHVybiAnbm9kZUdyYXBoJztcbiAgICB9XG4gICAgaWYgKHF1ZXJ5UmVzcG9uc2UudHJhY2VGcmFtZXMuc29tZShoYXNRdWVyeVJlZklkKSkge1xuICAgICAgcmV0dXJuICd0cmFjZXMnO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZhbGxpbmcgYmFjayB0byB0YWJsZVxuICByZXR1cm4gJ3RhYmxlJztcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBUb29sYmFyQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRXhwbG9yZUlkIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgZ2V0RXhwbG9yZUl0ZW1TZWxlY3RvciB9IGZyb20gJy4uL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IEFkZFRvRGFzaGJvYXJkTW9kYWwgfSBmcm9tICcuL0FkZFRvRGFzaGJvYXJkTW9kYWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBleHBsb3JlSWQ6IEV4cGxvcmVJZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFkZFRvRGFzaGJvYXJkID0gKHsgZXhwbG9yZUlkIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNlbGVjdEV4cGxvcmVJdGVtID0gZ2V0RXhwbG9yZUl0ZW1TZWxlY3RvcihleHBsb3JlSWQpO1xuICBjb25zdCBleHBsb3JlUGFuZUhhc1F1ZXJpZXMgPSAhIXVzZVNlbGVjdG9yKHNlbGVjdEV4cGxvcmVJdGVtKT8ucXVlcmllcz8ubGVuZ3RoO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUb29sYmFyQnV0dG9uXG4gICAgICAgIGljb249XCJhcHBzXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKHRydWUpfVxuICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRvIGRhc2hib2FyZFwiXG4gICAgICAgIGRpc2FibGVkPXshZXhwbG9yZVBhbmVIYXNRdWVyaWVzfVxuICAgICAgPlxuICAgICAgICBBZGQgdG8gZGFzaGJvYXJkXG4gICAgICA8L1Rvb2xiYXJCdXR0b24+XG5cbiAgICAgIHtpc09wZW4gJiYgPEFkZFRvRGFzaGJvYXJkTW9kYWwgb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0gZXhwbG9yZUlkPXtleHBsb3JlSWR9IC8+fVxuICAgIDwvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJyZXBvcnRNZXRhQW5hbHl0aWNzIiwiTWV0YUFuYWx5dGljc0V2ZW50TmFtZSIsImVtaXREYXNoYm9hcmRWaWV3RXZlbnQiLCJkYXNoYm9hcmQiLCJldmVudERhdGEiLCJkYXNoYm9hcmRJZCIsImlkIiwiZGFzaGJvYXJkTmFtZSIsInRpdGxlIiwiZGFzaGJvYXJkVWlkIiwidWlkIiwiZm9sZGVyTmFtZSIsIm1ldGEiLCJmb2xkZXJUaXRsZSIsImV2ZW50TmFtZSIsIkRhc2hib2FyZFZpZXciLCJsb2NhdGlvblV0aWwiLCJzZXRXZWVrU3RhcnQiLCJjb25maWciLCJsb2NhdGlvblNlcnZpY2UiLCJub3RpZnlBcHAiLCJjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiIsImJhY2tlbmRTcnYiLCJrZXliaW5kaW5nU3J2Iiwic3RvcmUiLCJkYXNoYm9hcmRMb2FkZXJTcnYiLCJnZXREYXNoYm9hcmRTcnYiLCJnZXRUaW1lU3J2IiwiZGFzaGJvYXJkV2F0Y2hlciIsInRvU3RhdGVLZXkiLCJEYXNoYm9hcmRJbml0UGhhc2UiLCJEYXNoYm9hcmRSb3V0ZXMiLCJjcmVhdGVEYXNoYm9hcmRRdWVyeVJ1bm5lciIsImluaXRWYXJpYWJsZXNUcmFuc2FjdGlvbiIsImdldElmRXhpc3RzTGFzdEtleSIsIkRhc2hib2FyZE1vZGVsIiwiZGFzaGJvYXJkSW5pdENvbXBsZXRlZCIsImRhc2hib2FyZEluaXRGYWlsZWQiLCJkYXNoYm9hcmRJbml0RmV0Y2hpbmciLCJkYXNoYm9hcmRJbml0U2VydmljZXMiLCJmZXRjaERhc2hib2FyZCIsImFyZ3MiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibW9kZWwiLCJnZXRPYmplY3QiLCJEQVNIQk9BUkRfRlJPTV9MU19LRVkiLCJyZW1vdmVEYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSIsInJvdXRlTmFtZSIsIkhvbWUiLCJkYXNoRFRPIiwiZ2V0IiwicmVkaXJlY3RVcmkiLCJuZXdVcmwiLCJzdHJpcEJhc2VGcm9tVXJsIiwicmVwbGFjZSIsImNhblNhdmUiLCJjYW5TaGFyZSIsImNhblN0YXIiLCJOb3JtYWwiLCJsb2FkRGFzaGJvYXJkIiwidXJsVHlwZSIsInVybFNsdWciLCJ1cmxVaWQiLCJmaXhVcmwiLCJ1cmwiLCJkYXNoYm9hcmRVcmwiLCJjdXJyZW50UGF0aCIsImdldExvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwiTmV3IiwiZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhIiwidXJsRm9sZGVySWQiLCJtZXNzYWdlIiwiZXJyIiwiY2FuY2VsbGVkIiwiZXJyb3IiLCJpbml0RGFzaGJvYXJkIiwic3RvcmVTdGF0ZSIsInF1ZXJ5UGFyYW1zIiwiZ2V0U2VhcmNoT2JqZWN0Iiwib3JnSWQiLCJwYXJ0aWFsIiwidXNlciIsInRpbWVTcnYiLCJkYXNoYm9hcmRTcnYiLCJzZXRDdXJyZW50IiwiaW5pdCIsInJ1bm5lciIsInJ1biIsInJhbmdlIiwidGltZVJhbmdlIiwiaW5pdFBoYXNlIiwiU2VydmljZXMiLCJwcm9jZXNzUmVwZWF0cyIsImF1dG9maXRwYW5lbHMiLCJhdXRvRml0UGFuZWxzIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJraW9zayIsInNldHVwRGFzaGJvYXJkQmluZGluZ3MiLCJ3YXRjaCIsImxlYXZlIiwid2Vla1N0YXJ0IiwiYm9vdERhdGEiLCJkYXRhIiwiaXNOZXciLCJmb2xkZXJJZCIsInBhbmVscyIsInR5cGUiLCJncmlkUG9zIiwieCIsInkiLCJ3IiwiaCIsInBhcnNlSW50Iiwic2V0RGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UiLCJzZXRPYmplY3QiLCJkZWxldGUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsInVzZVNlbGVjdG9yIiwicmVwb3J0SW50ZXJhY3Rpb24iLCJBbGVydCIsIkJ1dHRvbiIsIkZpZWxkIiwiSW5wdXRDb250cm9sIiwiTW9kYWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiRGFzaGJvYXJkUGlja2VyIiwiZ2V0RXhwbG9yZUl0ZW1TZWxlY3RvciIsInNldERhc2hib2FyZEluTG9jYWxTdG9yYWdlIiwiQWRkVG9EYXNoYm9hcmRFcnJvciIsIlNhdmVUYXJnZXQiLCJTQVZFX1RBUkdFVFMiLCJsYWJlbCIsInZhbHVlIiwiTmV3RGFzaGJvYXJkIiwiRXhpc3RpbmdEYXNoYm9hcmQiLCJhc3NlcnRJc1NhdmVUb0V4aXN0aW5nRGFzaGJvYXJkRXJyb3IiLCJlcnJvcnMiLCJnZXREYXNoYm9hcmRVUkwiLCJHZW5lcmljRXJyb3IiLCJBZGRUb0Rhc2hib2FyZE1vZGFsIiwib25DbG9zZSIsImV4cGxvcmVJZCIsImV4cGxvcmVJdGVtIiwic3VibWlzc2lvbkVycm9yIiwic2V0U3VibWlzc2lvbkVycm9yIiwiaGFuZGxlU3VibWl0IiwiY29udHJvbCIsImZvcm1TdGF0ZSIsImRlZmF1bHRWYWx1ZXMiLCJzYXZlVGFyZ2V0Iiwib25TdWJtaXQiLCJvcGVuSW5OZXdUYWIiLCJ1bmRlZmluZWQiLCJuZXdUYWIiLCJxdWVyaWVzIiwibGVuZ3RoIiwiZGF0YXNvdXJjZSIsImRhdGFzb3VyY2VJbnN0YW5jZSIsImdldFJlZiIsInF1ZXJ5UmVzcG9uc2UiLCJGRVRDSF9EQVNIQk9BUkQiLCJTRVRfREFTSEJPQVJEX0xTIiwiVU5LTk9XTiIsImRhc2hib2FyZFVSTCIsInB1c2giLCJkaWRUYWJPcGVuIiwiZ2xvYmFsIiwib3BlbiIsImFwcFVybCIsIk5BVklHQVRJT04iLCJmaWVsZCIsIm9uQ2hhbmdlIiwiZCIsInJlcXVpcmVkIiwiY3JlYXRlRGFzaGJvYXJkIiwiZHRvIiwib3B0aW9ucyIsInBhbmVsVHlwZSIsImdldFBhbmVsVHlwZSIsInBhbmVsIiwidGFyZ2V0cyIsImdldERhc2hib2FyZEJ5VWlkIiwiZSIsImlzVmlzaWJsZSIsInF1ZXJ5IiwiaGlkZSIsImhhc1JlZklkIiwicmVmSWQiLCJmcmFtZSIsImZpbHRlciIsImhhc1F1ZXJ5UmVmSWQiLCJncmFwaEZyYW1lcyIsInNvbWUiLCJsb2dzRnJhbWVzIiwibm9kZUdyYXBoRnJhbWVzIiwidHJhY2VGcmFtZXMiLCJUb29sYmFyQnV0dG9uIiwiQWRkVG9EYXNoYm9hcmQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZWxlY3RFeHBsb3JlSXRlbSIsImV4cGxvcmVQYW5lSGFzUXVlcmllcyJdLCJzb3VyY2VSb290IjoiIn0=