"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[47],{

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZQ": () => (/* binding */ getNewDashboardModelData),
  "mV": () => (/* binding */ initDashboard),
  "f1": () => (/* binding */ removeDashboardToFetchFromLocalStorage),
  "$M": () => (/* binding */ setDashboardToFetchFromLocalStorage)
});

// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/actions/index.ts
var actions = __webpack_require__("./public/app/core/actions/index.ts");
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./public/app/core/services/backend_srv.ts + 4 modules
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
// EXTERNAL MODULE: ./public/app/core/services/keybindingSrv.ts + 2 modules
var keybindingSrv = __webpack_require__("./public/app/core/services/keybindingSrv.ts");
// EXTERNAL MODULE: ./public/app/core/store.ts
var store = __webpack_require__("./public/app/core/store.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/DashboardLoaderSrv.ts
var DashboardLoaderSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/DashboardSrv.ts
var DashboardSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/TimeSrv.ts + 1 modules
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
// EXTERNAL MODULE: ./public/app/features/live/dashboard/dashboardWatcher.ts + 2 modules
var dashboardWatcher = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
// EXTERNAL MODULE: ./public/app/features/variables/utils.ts
var utils = __webpack_require__("./public/app/features/variables/utils.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts + 6 modules
var DashboardQueryRunner = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
// EXTERNAL MODULE: ./public/app/features/variables/state/actions.ts + 1 modules
var state_actions = __webpack_require__("./public/app/features/variables/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/variables/state/selectors.ts
var selectors = __webpack_require__("./public/app/features/variables/state/selectors.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/state/DashboardModel.ts + 3 modules
var DashboardModel = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/state/analyticsProcessor.ts

function emitDashboardViewEvent(dashboard) {
  const eventData = {
    dashboardId: dashboard.id,
    dashboardName: dashboard.title,
    dashboardUid: dashboard.uid,
    folderName: dashboard.meta.folderTitle,
    eventName: grafana_runtime_src.MetaAnalyticsEventName.DashboardView
  };
  (0,grafana_runtime_src.reportMetaAnalytics)(eventData);
}
// EXTERNAL MODULE: ./public/app/features/dashboard/state/reducers.ts
var reducers = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/state/initDashboard.ts




















async function fetchDashboard(args, dispatch, getState) {
  // When creating new or adding panels to a dashboard from explore we load it from local storage
  const model = store/* default.getObject */.Z.getObject(DASHBOARD_FROM_LS_KEY);

  if (model) {
    removeDashboardToFetchFromLocalStorage();
    return model;
  }

  try {
    switch (args.routeName) {
      case types/* DashboardRoutes.Home */.vq.Home:
        {
          // load home dash
          const dashDTO = await backend_srv/* backendSrv.get */.ae.get('/api/dashboards/home'); // if user specified a custom home dashboard redirect to that

          if (dashDTO.redirectUri) {
            const newUrl = src.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
            grafana_runtime_src.locationService.replace(newUrl);
            return null;
          } // disable some actions on the default home dashboard


          dashDTO.meta.canSave = false;
          dashDTO.meta.canShare = false;
          dashDTO.meta.canStar = false;
          return dashDTO;
        }

      case types/* DashboardRoutes.Normal */.vq.Normal:
        {
          const dashDTO = await DashboardLoaderSrv/* dashboardLoaderSrv.loadDashboard */.pD.loadDashboard(args.urlType, args.urlSlug, args.urlUid);

          if (args.fixUrl && dashDTO.meta.url) {
            // check if the current url is correct (might be old slug)
            const dashboardUrl = src.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
            const currentPath = grafana_runtime_src.locationService.getLocation().pathname;

            if (dashboardUrl !== currentPath) {
              // Spread current location to persist search params used for navigation
              grafana_runtime_src.locationService.replace(Object.assign({}, grafana_runtime_src.locationService.getLocation(), {
                pathname: dashboardUrl
              }));
              console.log('not correct url correcting', dashboardUrl, currentPath);
            }
          }

          return dashDTO;
        }

      case types/* DashboardRoutes.New */.vq.New:
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

    dispatch((0,reducers/* dashboardInitFailed */.jA)({
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
    dispatch((0,reducers/* dashboardInitFetching */.sf)()); // fetch dashboard data

    const dashDTO = await fetchDashboard(args, dispatch, getState); // returns null if there was a redirect or error

    if (!dashDTO) {
      return;
    } // set initializing state


    dispatch((0,reducers/* dashboardInitServices */.Nv)()); // create model

    let dashboard;

    try {
      dashboard = new DashboardModel/* DashboardModel */.f(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch((0,reducers/* dashboardInitFailed */.jA)({
        message: 'Failed create dashboard model',
        error: err
      }));
      console.error(err);
      return;
    } // add missing orgId query param


    const storeState = getState();
    const queryParams = grafana_runtime_src.locationService.getSearchObject();

    if (!queryParams.orgId) {
      // TODO this is currently not possible with the LocationService API
      grafana_runtime_src.locationService.partial({
        orgId: storeState.user.orgId
      }, true);
    } // init services


    const timeSrv = (0,TimeSrv/* getTimeSrv */.$t)();
    const dashboardSrv = (0,DashboardSrv/* getDashboardSrv */.h4)(); // legacy srv state, we need this value updated for built-in annotations

    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,utils/* toStateKey */.mn)((_args$urlUid = args.urlUid) !== null && _args$urlUid !== void 0 ? _args$urlUid : dashboard.uid); // template values service needs to initialize completely before the rest of the dashboard can load

    await dispatch((0,state_actions/* initVariablesTransaction */.LX)(dashboardUid, dashboard)); // DashboardQueryRunner needs to run after all variables have been resolved so that any annotation query including a variable
    // will be correctly resolved

    const runner = (0,DashboardQueryRunner/* createDashboardQueryRunner */.Tl)({
      dashboard,
      timeSrv
    });
    runner.run({
      dashboard,
      range: timeSrv.timeRange()
    });

    if ((0,selectors/* getIfExistsLastKey */.cp)(getState()) !== dashboardUid) {
      // if a previous dashboard has slow running variable queries the batch uid will be the new one
      // but the args.urlUid will be the same as before initVariablesTransaction was called so then we can't continue initializing
      // the previous dashboard.
      return;
    } // If dashboard is in a different init phase it means it cancelled during service init


    if (getState().dashboard.initPhase !== types/* DashboardInitPhase.Services */.bG.Services) {
      return;
    }

    try {
      dashboard.processRepeats(); // handle auto fix experimental feature

      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      keybindingSrv/* keybindingSrv.setupDashboardBindings */.K.setupDashboardBindings(dashboard);
    } catch (err) {
      dispatch((0,actions/* notifyApp */.$l)((0,appNotification/* createErrorNotification */.t_)('Dashboard init failed', err)));
      console.error(err);
    } // send open dashboard event


    if (args.routeName !== types/* DashboardRoutes.New */.vq.New) {
      emitDashboardViewEvent(dashboard); // Listen for changes on the current dashboard

      dashboardWatcher/* dashboardWatcher.watch */.H.watch(dashboard.uid);
    } else {
      dashboardWatcher/* dashboardWatcher.leave */.H.leave();
    } // set week start


    if (dashboard.weekStart !== '') {
      (0,src.setWeekStart)(dashboard.weekStart);
    } else {
      (0,src.setWeekStart)(grafana_runtime_src.config.bootData.user.weekStart);
    } // yay we are done


    dispatch((0,reducers/* dashboardInitCompleted */.dS)(dashboard));
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
  store/* default.setObject */.Z.setObject(DASHBOARD_FROM_LS_KEY, model);
}
function removeDashboardToFetchFromLocalStorage() {
  store/* default.delete */.Z["delete"](DASHBOARD_FROM_LS_KEY);
}

/***/ }),

/***/ "./public/app/features/explore/AddToDashboard/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AddToDashboard": () => (/* binding */ AddToDashboard)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/explore/state/selectors.ts
var selectors = __webpack_require__("./public/app/features/explore/state/selectors.ts");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Select/DashboardPicker.tsx
var DashboardPicker = __webpack_require__("./public/app/core/components/Select/DashboardPicker.tsx");
// EXTERNAL MODULE: ./public/app/features/dashboard/state/initDashboard.ts + 1 modules
var initDashboard = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
// EXTERNAL MODULE: ./public/app/core/services/backend_srv.ts + 4 modules
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
;// CONCATENATED MODULE: ./public/app/features/explore/AddToDashboard/addToDashboard.ts


let AddToDashboardError;

(function (AddToDashboardError) {
  AddToDashboardError["FETCH_DASHBOARD"] = "fetch-dashboard";
  AddToDashboardError["SET_DASHBOARD_LS"] = "set-dashboard-ls-error";
})(AddToDashboardError || (AddToDashboardError = {}));

function createDashboard() {
  const dto = (0,initDashboard/* getNewDashboardModelData */.ZQ)(); // getNewDashboardModelData adds by default the "add-panel" panel. We don't want that.

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
      dto = await backend_srv/* backendSrv.getDashboardByUid */.ae.getDashboardByUid(options.dashboardUid);
    } catch (e) {
      throw AddToDashboardError.FETCH_DASHBOARD;
    }
  } else {
    dto = createDashboard();
  }

  dto.dashboard.panels = [panel, ...((_dto$dashboard$panels = dto.dashboard.panels) !== null && _dto$dashboard$panels !== void 0 ? _dto$dashboard$panels : [])];

  try {
    (0,initDashboard/* setDashboardToFetchFromLocalStorage */.$M)(dto);
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
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/explore/AddToDashboard/AddToDashboardModal.tsx
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

const AddToDashboardModal = _ref => {
  let {
    onClose,
    exploreId
  } = _ref;
  const exploreItem = (0,es.useSelector)((0,selectors/* getExploreItemSelector */.F)(exploreId));
  const [submissionError, setSubmissionError] = (0,react.useState)();
  const {
    handleSubmit,
    control,
    formState: {
      errors
    },
    watch
  } = (0,index_esm/* useForm */.cI)({
    defaultValues: {
      saveTarget: SaveTarget.NewDashboard
    }
  });
  const saveTarget = watch('saveTarget');

  const onSubmit = async (openInNewTab, data) => {
    setSubmissionError(undefined);
    const dashboardUid = data.saveTarget === SaveTarget.ExistingDashboard ? data.dashboardUid : undefined;
    (0,grafana_runtime_src.reportInteraction)('e2d_submit', {
      newTab: openInNewTab,
      saveTarget: data.saveTarget,
      queries: exploreItem.queries.length
    });

    try {
      var _exploreItem$datasour;

      await setDashboardInLocalStorage({
        dashboardUid,
        datasource: (_exploreItem$datasour = exploreItem.datasourceInstance) === null || _exploreItem$datasour === void 0 ? void 0 : _exploreItem$datasour.getRef(),
        queries: exploreItem.queries,
        queryResponse: exploreItem.queryResponse
      });
    } catch (error) {
      switch (error) {
        case AddToDashboardError.FETCH_DASHBOARD:
          setSubmissionError({
            error,
            message: 'Could not fetch dashboard information. Please try again.'
          });
          break;

        case AddToDashboardError.SET_DASHBOARD_LS:
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
      grafana_runtime_src.locationService.push(grafana_data_src.locationUtil.stripBaseFromUrl(dashboardURL));
      return;
    }

    const didTabOpen = !!__webpack_require__.g.open(grafana_runtime_src.config.appUrl + dashboardURL, '_blank');

    if (!didTabOpen) {
      setSubmissionError({
        error: GenericError.NAVIGATION,
        message: 'Could not navigate to the selected dashboard. Please try again.'
      });
      (0,initDashboard/* removeDashboardToFetchFromLocalStorage */.f1)();
      return;
    }

    onClose();
  };

  (0,react.useEffect)(() => {
    (0,grafana_runtime_src.reportInteraction)('e2d_open');
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Modal, {
    title: "Add panel to dashboard",
    onDismiss: onClose,
    isOpen: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
        control: control,
        render: _ref2 => {
          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded);

          return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Target dashboard",
            description: "Choose where to add the panel.",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.RadioButtonGroup, Object.assign({
              options: SAVE_TARGETS
            }, field, {
              id: "e2d-save-target"
            }))
          });
        },
        name: "saveTarget"
      }), saveTarget === SaveTarget.ExistingDashboard && (() => {
        assertIsSaveToExistingDashboardError(errors);
        return /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
          render: _ref3 => {
            var _errors$dashboardUid;

            let {
              field: {
                onChange
              }
            } = _ref3,
                field = _objectWithoutPropertiesLoose(_ref3.field, _excluded2);

            return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
              label: "Dashboard",
              description: "Select in which dashboard the panel will be created.",
              error: (_errors$dashboardUid = errors.dashboardUid) === null || _errors$dashboardUid === void 0 ? void 0 : _errors$dashboardUid.message,
              invalid: !!errors.dashboardUid,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardPicker/* DashboardPicker */.o, Object.assign({}, field, {
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
      })(), submissionError && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
        severity: "error",
        title: "Error adding the panel",
        children: submissionError.message
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(src.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          type: "reset",
          onClick: onClose,
          fill: "outline",
          variant: "secondary",
          children: "Cancel"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          type: "submit",
          variant: "secondary",
          onClick: handleSubmit((0,lodash.partial)(onSubmit, true)),
          icon: "external-link-alt",
          children: "Open in new tab"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          type: "submit",
          variant: "primary",
          onClick: handleSubmit((0,lodash.partial)(onSubmit, false)),
          icon: "apps",
          children: "Open dashboard"
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./public/app/features/explore/AddToDashboard/index.tsx








const AddToDashboard = _ref => {
  var _useSelector, _useSelector$queries;

  let {
    exploreId
  } = _ref;
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const selectExploreItem = (0,selectors/* getExploreItemSelector */.F)(exploreId);
  const explorePaneHasQueries = !!((_useSelector = (0,es.useSelector)(selectExploreItem)) !== null && _useSelector !== void 0 && (_useSelector$queries = _useSelector.queries) !== null && _useSelector$queries !== void 0 && _useSelector$queries.length);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.ToolbarButton, {
      icon: "apps",
      onClick: () => setIsOpen(true),
      "aria-label": "Add to dashboard",
      disabled: !explorePaneHasQueries,
      children: "Add to dashboard"
    }), isOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(AddToDashboardModal, {
      onClose: () => setIsOpen(false),
      exploreId: exploreId
    })]
  });
};

/***/ })

}]);