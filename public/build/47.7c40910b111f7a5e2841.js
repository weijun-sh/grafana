"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[47],{

 "./public/app/features/dashboard/state/initDashboard.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "ZQ": () => ( getNewDashboardModelData),
  "mV": () => ( initDashboard),
  "f1": () => ( removeDashboardToFetchFromLocalStorage),
  "$M": () => ( setDashboardToFetchFromLocalStorage)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var actions = __webpack_require__("./public/app/core/actions/index.ts");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
var keybindingSrv = __webpack_require__("./public/app/core/services/keybindingSrv.ts");
var store = __webpack_require__("./public/app/core/store.ts");
var DashboardLoaderSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
var DashboardSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
var dashboardWatcher = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
var utils = __webpack_require__("./public/app/features/variables/utils.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var DashboardQueryRunner = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
var state_actions = __webpack_require__("./public/app/features/variables/state/actions.ts");
var selectors = __webpack_require__("./public/app/features/variables/state/selectors.ts");
var DashboardModel = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
;

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
var reducers = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");
;




















async function fetchDashboard(args, dispatch, getState) {
  const model = store.Z.getObject(DASHBOARD_FROM_LS_KEY);

  if (model) {
    removeDashboardToFetchFromLocalStorage();
    return model;
  }

  try {
    switch (args.routeName) {
      case types.vq.Home:
        {
          const dashDTO = await backend_srv.ae.get('/api/dashboards/home'); 

          if (dashDTO.redirectUri) {
            const newUrl = src.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
            grafana_runtime_src.locationService.replace(newUrl);
            return null;
          } 


          dashDTO.meta.canSave = false;
          dashDTO.meta.canShare = false;
          dashDTO.meta.canStar = false;
          return dashDTO;
        }

      case types.vq.Normal:
        {
          const dashDTO = await DashboardLoaderSrv.pD.loadDashboard(args.urlType, args.urlSlug, args.urlUid);

          if (args.fixUrl && dashDTO.meta.url) {
            const dashboardUrl = src.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
            const currentPath = grafana_runtime_src.locationService.getLocation().pathname;

            if (dashboardUrl !== currentPath) {
              grafana_runtime_src.locationService.replace(Object.assign({}, grafana_runtime_src.locationService.getLocation(), {
                pathname: dashboardUrl
              }));
              console.log('not correct url correcting', dashboardUrl, currentPath);
            }
          }

          return dashDTO;
        }

      case types.vq.New:
        {
          return getNewDashboardModelData(args.urlFolderId);
        }

      default:
        throw {
          message: 'Unknown route ' + args.routeName
        };
    }
  } catch (err) {
    if (err.cancelled) {
      return null;
    }

    dispatch((0,reducers.jA)({
      message: 'Failed to fetch dashboard',
      error: err
    }));
    console.error(err);
    return null;
  }
}


function initDashboard(args) {
  return async (dispatch, getState) => {
    var _args$urlUid;

    dispatch((0,reducers.sf)()); 

    const dashDTO = await fetchDashboard(args, dispatch, getState); 

    if (!dashDTO) {
      return;
    } 


    dispatch((0,reducers.Nv)()); 

    let dashboard;

    try {
      dashboard = new DashboardModel.f(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch((0,reducers.jA)({
        message: 'Failed create dashboard model',
        error: err
      }));
      console.error(err);
      return;
    } 


    const storeState = getState();
    const queryParams = grafana_runtime_src.locationService.getSearchObject();

    if (!queryParams.orgId) {
      grafana_runtime_src.locationService.partial({
        orgId: storeState.user.orgId
      }, true);
    } 


    const timeSrv = (0,TimeSrv.$t)();
    const dashboardSrv = (0,DashboardSrv.h4)(); 

    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,utils.mn)((_args$urlUid = args.urlUid) !== null && _args$urlUid !== void 0 ? _args$urlUid : dashboard.uid); 

    await dispatch((0,state_actions.LX)(dashboardUid, dashboard)); 

    const runner = (0,DashboardQueryRunner.Tl)({
      dashboard,
      timeSrv
    });
    runner.run({
      dashboard,
      range: timeSrv.timeRange()
    });

    if ((0,selectors.cp)(getState()) !== dashboardUid) {
      return;
    } 


    if (getState().dashboard.initPhase !== types.bG.Services) {
      return;
    }

    try {
      dashboard.processRepeats(); 

      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      keybindingSrv.K.setupDashboardBindings(dashboard);
    } catch (err) {
      dispatch((0,actions.$l)((0,appNotification.t_)('Dashboard init failed', err)));
      console.error(err);
    } 


    if (args.routeName !== types.vq.New) {
      emitDashboardViewEvent(dashboard); 

      dashboardWatcher.H.watch(dashboard.uid);
    } else {
      dashboardWatcher.H.leave();
    } 


    if (dashboard.weekStart !== '') {
      (0,src.setWeekStart)(dashboard.weekStart);
    } else {
      (0,src.setWeekStart)(grafana_runtime_src.config.bootData.user.weekStart);
    } 


    dispatch((0,reducers.dS)(dashboard));
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
  store.Z.setObject(DASHBOARD_FROM_LS_KEY, model);
}
function removeDashboardToFetchFromLocalStorage() {
  store.Z["delete"](DASHBOARD_FROM_LS_KEY);
}

 }),

 "./public/app/features/explore/AddToDashboard/index.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "AddToDashboard": () => ( AddToDashboard)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var selectors = __webpack_require__("./public/app/features/explore/state/selectors.ts");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var index_esm = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var DashboardPicker = __webpack_require__("./public/app/core/components/Select/DashboardPicker.tsx");
var initDashboard = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
;


let AddToDashboardError;

(function (AddToDashboardError) {
  AddToDashboardError["FETCH_DASHBOARD"] = "fetch-dashboard";
  AddToDashboardError["SET_DASHBOARD_LS"] = "set-dashboard-ls-error";
})(AddToDashboardError || (AddToDashboardError = {}));

function createDashboard() {
  const dto = (0,initDashboard.ZQ)(); 

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
      dto = await backend_srv.ae.getDashboardByUid(options.dashboardUid);
    } catch (e) {
      throw AddToDashboardError.FETCH_DASHBOARD;
    }
  } else {
    dto = createDashboard();
  }

  dto.dashboard.panels = [panel, ...((_dto$dashboard$panels = dto.dashboard.panels) !== null && _dto$dashboard$panels !== void 0 ? _dto$dashboard$panels : [])];

  try {
    (0,initDashboard.$M)(dto);
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
  } 


  return 'table';
}
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
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

function assertIsSaveToExistingDashboardError(errors) {
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
  const exploreItem = (0,es.useSelector)((0,selectors.F)(exploreId));
  const [submissionError, setSubmissionError] = (0,react.useState)();
  const {
    handleSubmit,
    control,
    formState: {
      errors
    },
    watch
  } = (0,index_esm.cI)({
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
      (0,initDashboard.f1)();
      return;
    }

    onClose();
  };

  (0,react.useEffect)(() => {
    (0,grafana_runtime_src.reportInteraction)('e2d_open');
  }, []);
  return (0,jsx_runtime.jsx)(src.Modal, {
    title: "Add panel to dashboard",
    onDismiss: onClose,
    isOpen: true,
    children: (0,jsx_runtime.jsxs)("form", {
      children: [(0,jsx_runtime.jsx)(src.InputControl, {
        control: control,
        render: _ref2 => {
          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded);

          return (0,jsx_runtime.jsx)(src.Field, {
            label: "Target dashboard",
            description: "Choose where to add the panel.",
            children: (0,jsx_runtime.jsx)(src.RadioButtonGroup, Object.assign({
              options: SAVE_TARGETS
            }, field, {
              id: "e2d-save-target"
            }))
          });
        },
        name: "saveTarget"
      }), saveTarget === SaveTarget.ExistingDashboard && (() => {
        assertIsSaveToExistingDashboardError(errors);
        return (0,jsx_runtime.jsx)(src.InputControl, {
          render: _ref3 => {
            var _errors$dashboardUid;

            let {
              field: {
                onChange
              }
            } = _ref3,
                field = _objectWithoutPropertiesLoose(_ref3.field, _excluded2);

            return (0,jsx_runtime.jsx)(src.Field, {
              label: "Dashboard",
              description: "Select in which dashboard the panel will be created.",
              error: (_errors$dashboardUid = errors.dashboardUid) === null || _errors$dashboardUid === void 0 ? void 0 : _errors$dashboardUid.message,
              invalid: !!errors.dashboardUid,
              children: (0,jsx_runtime.jsx)(DashboardPicker.o, Object.assign({}, field, {
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
      })(), submissionError && (0,jsx_runtime.jsx)(src.Alert, {
        severity: "error",
        title: "Error adding the panel",
        children: submissionError.message
      }), (0,jsx_runtime.jsxs)(src.Modal.ButtonRow, {
        children: [(0,jsx_runtime.jsx)(src.Button, {
          type: "reset",
          onClick: onClose,
          fill: "outline",
          variant: "secondary",
          children: "Cancel"
        }), (0,jsx_runtime.jsx)(src.Button, {
          type: "submit",
          variant: "secondary",
          onClick: handleSubmit((0,lodash.partial)(onSubmit, true)),
          icon: "external-link-alt",
          children: "Open in new tab"
        }), (0,jsx_runtime.jsx)(src.Button, {
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
;








const AddToDashboard = _ref => {
  var _useSelector, _useSelector$queries;

  let {
    exploreId
  } = _ref;
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const selectExploreItem = (0,selectors.F)(exploreId);
  const explorePaneHasQueries = !!((_useSelector = (0,es.useSelector)(selectExploreItem)) !== null && _useSelector !== void 0 && (_useSelector$queries = _useSelector.queries) !== null && _useSelector$queries !== void 0 && _useSelector$queries.length);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(src.ToolbarButton, {
      icon: "apps",
      onClick: () => setIsOpen(true),
      "aria-label": "Add to dashboard",
      disabled: !explorePaneHasQueries,
      children: "Add to dashboard"
    }), isOpen && (0,jsx_runtime.jsx)(AddToDashboardModal, {
      onClose: () => setIsOpen(false),
      exploreId: exploreId
    })]
  });
};

 })

}]);