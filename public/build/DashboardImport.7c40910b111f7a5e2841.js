"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8808],{

 "./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "p": () => ( LibraryPanelCard)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var PanelPluginError = __webpack_require__("./public/app/features/panel/components/PanelPluginError.tsx");
var PanelTypeCard = __webpack_require__("./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var library_panels_styles = __webpack_require__("./public/app/features/library-panels/styles.ts");
var actions = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts");
var api = __webpack_require__("./public/app/features/library-panels/state/api.ts");
var redux_toolkit_esm = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
;


const initialDeleteLibraryPanelModalState = {
  loadingState: grafana_data_src.LoadingState.Loading,
  dashboardTitles: []
};
const searchCompleted = (0,redux_toolkit_esm.PH)('libraryPanels/delete/searchCompleted');
const deleteLibraryPanelModalReducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialDeleteLibraryPanelModalState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  if (searchCompleted.match(action)) {
    return Object.assign({}, state, {
      dashboardTitles: action.payload.dashboards.map(d => d.title),
      loadingState: grafana_data_src.LoadingState.Done
    });
  }

  return state;
};
;


function getConnectedDashboards(libraryPanel) {
  return async function (dispatch) {
    const dashboards = await (0,api.E8)(libraryPanel.uid);
    dispatch(searchCompleted({
      dashboards
    }));
  };
}
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _LoadingIndicator, _Confirm, _span, _thead;










const DeleteLibraryPanelModal = _ref => {
  let {
    libraryPanel,
    onDismiss,
    onConfirm
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(library_panels_styles.J);
  const [{
    dashboardTitles,
    loadingState
  }, dispatch] = (0,react.useReducer)(deleteLibraryPanelModalReducer, initialDeleteLibraryPanelModalState);
  const asyncDispatch = (0,react.useMemo)(() => (0,actions.tb)(dispatch), [dispatch]);
  (0,react.useEffect)(() => {
    asyncDispatch(getConnectedDashboards(libraryPanel));
  }, [asyncDispatch, libraryPanel]);
  const connected = Boolean(dashboardTitles.length);
  const done = loadingState === grafana_data_src.LoadingState.Done;
  return (0,jsx_runtime.jsxs)(grafana_ui_src.Modal, {
    className: styles.modal,
    title: "Delete library panel",
    icon: "trash-alt",
    onDismiss: onDismiss,
    isOpen: true,
    children: [!done ? _LoadingIndicator || (_LoadingIndicator = (0,jsx_runtime.jsx)(LoadingIndicator, {})) : null, done ? (0,jsx_runtime.jsxs)("div", {
      children: [connected ? (0,jsx_runtime.jsx)(HasConnectedDashboards, {
        dashboardTitles: dashboardTitles
      }) : null, !connected ? _Confirm || (_Confirm = (0,jsx_runtime.jsx)(Confirm, {})) : null, (0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          onClick: onDismiss,
          fill: "outline",
          children: "Cancel"
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "destructive",
          onClick: onConfirm,
          disabled: connected,
          children: "Delete"
        })]
      })]
    }) : null]
  });
};

const LoadingIndicator = () => _span || (_span = (0,jsx_runtime.jsx)("span", {
  children: "Loading library panel..."
}));

const Confirm = () => {
  const styles = (0,grafana_ui_src.useStyles)(library_panels_styles.J);
  return (0,jsx_runtime.jsx)("div", {
    className: styles.modalText,
    children: "Do you want to delete this panel?"
  });
};

const HasConnectedDashboards = _ref2 => {
  let {
    dashboardTitles
  } = _ref2;
  const styles = (0,grafana_ui_src.useStyles)(library_panels_styles.J);
  const suffix = dashboardTitles.length === 1 ? 'dashboard.' : 'dashboards.';
  const message = `${dashboardTitles.length} ${suffix}`;

  if (dashboardTitles.length === 0) {
    return null;
  }

  return (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsxs)("p", {
      className: styles.textInfo,
      children: ['This library panel can not be deleted because it is connected to ', (0,jsx_runtime.jsx)("strong", {
        children: message
      }), ' Remove the library panel from the dashboards listed below and retry.']
    }), (0,jsx_runtime.jsxs)("table", {
      className: styles.myTable,
      children: [_thead || (_thead = (0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsx)("tr", {
          children: (0,jsx_runtime.jsx)("th", {
            children: "Dashboard name"
          })
        })
      })), (0,jsx_runtime.jsx)("tbody", {
        children: dashboardTitles.map((title, i) => (0,jsx_runtime.jsx)("tr", {
          children: (0,jsx_runtime.jsx)("td", {
            children: title
          })
        }, `dash-title-${i}`))
      })]
    })]
  });
};
;
var _Icon, _Icon2;











const LibraryPanelCard = _ref => {
  var _config$panels$librar;

  let {
    libraryPanel,
    onClick,
    onDelete,
    showSecondaryActions
  } = _ref;
  const [showDeletionModal, setShowDeletionModal] = (0,react.useState)(false);

  const onDeletePanel = () => {
    onDelete === null || onDelete === void 0 ? void 0 : onDelete(libraryPanel);
    setShowDeletionModal(false);
  };

  const panelPlugin = (_config$panels$librar = src.config.panels[libraryPanel.model.type]) !== null && _config$panels$librar !== void 0 ? _config$panels$librar : (0,PanelPluginError.X)(libraryPanel.model.type).meta;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(PanelTypeCard.X, {
      isCurrent: false,
      title: libraryPanel.name,
      description: libraryPanel.description,
      plugin: panelPlugin,
      onClick: () => onClick === null || onClick === void 0 ? void 0 : onClick(libraryPanel),
      onDelete: showSecondaryActions ? () => setShowDeletionModal(true) : undefined,
      children: (0,jsx_runtime.jsx)(FolderLink, {
        libraryPanel: libraryPanel
      })
    }), showDeletionModal && (0,jsx_runtime.jsx)(DeleteLibraryPanelModal, {
      libraryPanel: libraryPanel,
      onConfirm: onDeletePanel,
      onDismiss: () => setShowDeletionModal(false)
    })]
  });
};

function FolderLink(_ref2) {
  let {
    libraryPanel
  } = _ref2;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);

  if (!libraryPanel.meta.folderUid && !libraryPanel.meta.folderName) {
    return null;
  }

  if (!libraryPanel.meta.folderUid) {
    return (0,jsx_runtime.jsxs)("span", {
      className: styles.metaContainer,
      children: [_Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: 'folder',
        size: "sm"
      })), (0,jsx_runtime.jsx)("span", {
        children: libraryPanel.meta.folderName
      })]
    });
  }

  return (0,jsx_runtime.jsx)("span", {
    className: styles.metaContainer,
    children: (0,jsx_runtime.jsxs)(grafana_ui_src.Link, {
      href: `/dashboards/f/${libraryPanel.meta.folderUid}`,
      children: [_Icon2 || (_Icon2 = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: 'folder-upload',
        size: "sm"
      })), (0,jsx_runtime.jsx)("span", {
        children: libraryPanel.meta.folderName
      })]
    })
  });
}

function getStyles(theme) {
  return {
    metaContainer: emotion_css_esm.css`
      display: flex;
      align-items: center;
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      padding-top: ${theme.spacing(0.5)};

      svg {
        margin-right: ${theme.spacing(0.5)};
        margin-bottom: 3px;
      }
    `
  };
}

 }),

 "./public/app/features/library-panels/components/LibraryPanelsView/actions.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "UO": () => ( deleteLibraryPanel),
   "Xu": () => ( searchForLibraryPanels),
   "tb": () => ( asyncDispatcher)
 });
 var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
 var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
 var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
 var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
 var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/timer.js");
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
 var _state_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
 var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");




function searchForLibraryPanels(args) {
  return function (dispatch) {
    const subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__ .w0();
    const dataObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__ .D)((0,_state_api__WEBPACK_IMPORTED_MODULE_0__ .Pq)({
      searchString: args.searchString,
      perPage: args.perPage,
      page: args.page,
      excludeUid: args.currentPanelId,
      sortDirection: args.sortDirection,
      typeFilter: args.panelFilter,
      folderFilter: args.folderFilter
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ .z)(_ref => {
      let {
        perPage,
        elements: libraryPanels,
        page,
        totalCount
      } = _ref;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__ .zK)({
        libraryPanels,
        page,
        perPage,
        totalCount
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ .K)(err => {
      console.error(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__ .zK)(Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_1__ .p$, {
        page: args.page,
        perPage: args.perPage
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ .x)(() => subscription.unsubscribe()), 
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ .B)());
    subscription.add( 
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__ .T)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__ .H)(50).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ .h)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__ .xU)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ .R)(dataObservable)), dataObservable).subscribe(dispatch));
  };
}
function deleteLibraryPanel(uid, args) {
  return async function (dispatch) {
    try {
      await (0,_state_api__WEBPACK_IMPORTED_MODULE_0__ .UO)(uid);
      searchForLibraryPanels(args)(dispatch);
    } catch (e) {
      console.error(e);
    }
  };
}
function asyncDispatcher(dispatch) {
  return function (action) {
    if (action instanceof Function) {
      return action(dispatch);
    }

    return dispatch(action);
  };
}

 }),

 "./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "_p": () => ( libraryPanelsViewReducer),
   "oO": () => ( changePage),
   "p$": () => ( initialLibraryPanelsViewState),
   "xU": () => ( initSearch),
   "zK": () => ( searchCompleted)
 });
 var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");


const initialLibraryPanelsViewState = {
  loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
  libraryPanels: [],
  totalCount: 0,
  perPage: 40,
  page: 1,
  numberOfPages: 0,
  currentPanelId: undefined
};
const initSearch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ .PH)('libraryPanels/view/initSearch');
const searchCompleted = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ .PH)('libraryPanels/view/searchCompleted');
const changePage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ .PH)('libraryPanels/view/changePage');
const libraryPanelsViewReducer = (state, action) => {
  if (initSearch.match(action)) {
    return Object.assign({}, state, {
      loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading
    });
  }

  if (searchCompleted.match(action)) {
    const {
      libraryPanels,
      page,
      perPage,
      totalCount
    } = action.payload;
    const numberOfPages = Math.ceil(totalCount / perPage);
    return Object.assign({}, state, {
      libraryPanels,
      perPage,
      totalCount,
      loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
      numberOfPages,
      page: page > numberOfPages ? page - 1 : page
    });
  }

  if (changePage.match(action)) {
    return Object.assign({}, state, {
      page: action.payload.page
    });
  }

  return state;
};

 }),

 "./public/app/features/library-panels/styles.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "J": () => ( getModalStyles)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

function getModalStyles(theme) {
  return {
    myTable: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${theme.border.radius.sm};
      border: 1px solid ${theme.colors.bg3};
      background: ${theme.colors.bg1};
      color: ${theme.colors.textSemiWeak};
      font-size: ${theme.typography.size.md};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${theme.typography.size.sm};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${theme.spacing.xl};
      }

      tbody > tr:nth-child(odd) {
        background: ${theme.colors.bg2};
      }
    `,
    noteTextbox: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.xl};
    `,
    textInfo: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.textSemiWeak};
      font-size: ${theme.typography.size.sm};
    `,
    dashboardSearch: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing.md};
    `,
    modal: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 500px;
    `,
    modalText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.heading.h4};
      color: ${theme.colors.link};
      margin-bottom: calc(${theme.spacing.d} * 2);
      padding-top: ${theme.spacing.d};
    `
  };
}

 }),

 "./public/app/features/manage-dashboards/DashboardImportPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( DashboardImportPage)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var app_events = __webpack_require__("./public/app/core/app_events.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var cleanUp = __webpack_require__("./public/app/core/actions/cleanUp.ts");
var actions = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
var reducers = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
var DataSourceWithBackend = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
var FolderPicker = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
var ValidationSrv = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");
;


const validateDashboardJson = json => {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    return 'Not valid JSON';
  }
};
const validateGcomDashboard = gcomDashboard => {
  const match = /(^\d+$)|dashboards\/(\d+)/.exec(gcomDashboard);
  return match && (match[1] || match[2]) ? true : 'Could not find a valid Grafana.com ID';
};
const validateTitle = (newTitle, folderId) => {
  return ValidationSrv.t.validateNewDashboardName(folderId, newTitle).then(() => {
    return true;
  }).catch(error => {
    if (error.type === 'EXISTING') {
      return error.message;
    }
  });
};
const validateUid = value => {
  return (0,grafana_runtime_src.getBackendSrv)().get(`/api/dashboards/uid/${value}`).then(existingDashboard => {
    return `Dashboard named '${existingDashboard === null || existingDashboard === void 0 ? void 0 : existingDashboard.dashboard.title}' in folder '${existingDashboard === null || existingDashboard === void 0 ? void 0 : existingDashboard.meta.folderTitle}' has the same UID`;
  }).catch(error => {
    error.isHandled = true;
    return true;
  });
};
var LibraryPanelCard = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;







function ImportDashboardLibraryPanelsList(_ref) {
  let {
    inputs,
    label,
    description,
    folderName
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);

  if (!Boolean(inputs === null || inputs === void 0 ? void 0 : inputs.length)) {
    return null;
  }

  return (0,jsx_runtime.jsx)("div", {
    className: styles.spacer,
    children: (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: label,
      description: description,
      children: (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: inputs.map((input, index) => {
          const libraryPanelIndex = `elements[${index}]`;
          const libraryPanel = input.state === reducers.KQ.New ? Object.assign({}, input.model, {
            meta: Object.assign({}, input.model.meta, {
              folderName: folderName !== null && folderName !== void 0 ? folderName : 'General'
            })
          }) : Object.assign({}, input.model);
          return (0,jsx_runtime.jsx)("div", {
            className: styles.item,
            children: (0,jsx_runtime.jsx)(LibraryPanelCard.p, {
              libraryPanel: libraryPanel,
              onClick: () => undefined
            })
          }, libraryPanelIndex);
        })
      })
    })
  });
}

function getStyles(theme) {
  return {
    spacer: emotion_css_esm.css`
      margin-bottom: ${theme.spacing(2)};
    `,
    item: emotion_css_esm.css`
      margin-bottom: ${theme.spacing(1)};
    `
  };
}
;
const _excluded = ["ref"],
      _excluded2 = ["ref"];

var _Legend;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const ImportDashboardForm = _ref => {
  var _inputs$libraryPanels, _inputs$libraryPanels2, _inputs$libraryPanels3, _inputs$libraryPanels4;

  let {
    register,
    errors,
    control,
    getValues,
    uidReset,
    inputs,
    initialFolderId,
    onUidReset,
    onCancel,
    onSubmit,
    watch
  } = _ref;
  const [isSubmitted, setSubmitted] = (0,react.useState)(false);
  const watchDataSources = watch('dataSources');
  const watchFolder = watch('folder');

  (0,react.useEffect)(() => {
    if (isSubmitted && (errors.title || errors.uid)) {
      onSubmit(getValues(), {});
    }
  }, [errors, getValues, isSubmitted, onSubmit]);
  const newLibraryPanels = (_inputs$libraryPanels = inputs === null || inputs === void 0 ? void 0 : (_inputs$libraryPanels2 = inputs.libraryPanels) === null || _inputs$libraryPanels2 === void 0 ? void 0 : _inputs$libraryPanels2.filter(i => i.state === reducers.KQ.New)) !== null && _inputs$libraryPanels !== void 0 ? _inputs$libraryPanels : [];
  const existingLibraryPanels = (_inputs$libraryPanels3 = inputs === null || inputs === void 0 ? void 0 : (_inputs$libraryPanels4 = inputs.libraryPanels) === null || _inputs$libraryPanels4 === void 0 ? void 0 : _inputs$libraryPanels4.filter(i => i.state === reducers.KQ.Exits)) !== null && _inputs$libraryPanels3 !== void 0 ? _inputs$libraryPanels3 : [];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [_Legend || (_Legend = (0,jsx_runtime.jsx)(grafana_ui_src.Legend, {
      children: "Options"
    })), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: "Name",
      invalid: !!errors.title,
      error: errors.title && errors.title.message,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('title', {
        required: 'Name is required',
        validate: async v => await validateTitle(v, getValues().folder.id)
      }), {
        type: "text",
        "data-testid": grafana_e2e_selectors_src.wl.components.ImportDashboardForm.name
      }))
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: "Folder",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InputControl, {
        render: _ref2 => {
          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded);

          return (0,jsx_runtime.jsx)(FolderPicker.E, Object.assign({}, field, {
            enableCreateNew: true,
            initialFolderId: initialFolderId
          }));
        },
        name: "folder",
        control: control
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: "Unique identifier (UID)",
      description: "The unique identifier (UID) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The UID allows having consistent URLs for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard.",
      invalid: !!errors.uid,
      error: errors.uid && errors.uid.message,
      children: (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: !uidReset ? (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
          disabled: true
        }, register('uid', {
          validate: async v => await validateUid(v)
        }), {
          addonAfter: !uidReset && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            onClick: onUidReset,
            children: "Change uid"
          })
        })) : (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('uid', {
          required: true,
          validate: async v => await validateUid(v)
        })))
      })
    }), inputs.dataSources && inputs.dataSources.map((input, index) => {
      if (input.pluginId === DataSourceWithBackend.hr.type) {
        return null;
      }

      const dataSourceOption = `dataSources[${index}]`;
      const current = watchDataSources !== null && watchDataSources !== void 0 ? watchDataSources : [];
      return (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
        label: input.label,
        invalid: errors.dataSources && !!errors.dataSources[index],
        error: errors.dataSources && errors.dataSources[index] && 'A data source is required',
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InputControl, {
          name: dataSourceOption,
          render: _ref3 => {
            var _current$index;

            let {} = _ref3,
                field = _objectWithoutPropertiesLoose(_ref3.field, _excluded2);

            return (0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, Object.assign({}, field, {
              noDefault: true,
              placeholder: input.info,
              pluginId: input.pluginId,
              current: (_current$index = current[index]) === null || _current$index === void 0 ? void 0 : _current$index.uid
            }));
          },
          control: control,
          rules: {
            required: true
          }
        })
      }, dataSourceOption);
    }), inputs.constants && inputs.constants.map((input, index) => {
      const constantIndex = `constants[${index}]`;
      return (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
        label: input.label,
        error: errors.constants && errors.constants[index] && `${input.label} needs a value`,
        invalid: errors.constants && !!errors.constants[index],
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register(constantIndex, {
          required: true
        }), {
          defaultValue: input.value
        }))
      }, constantIndex);
    }), (0,jsx_runtime.jsx)(ImportDashboardLibraryPanelsList, {
      inputs: newLibraryPanels,
      label: "New library panels",
      description: "List of new library panels that will get imported.",
      folderName: watchFolder.title
    }), (0,jsx_runtime.jsx)(ImportDashboardLibraryPanelsList, {
      inputs: existingLibraryPanels,
      label: "Existing library panels",
      description: "List of existing library panels. These panels are not affected by the import.",
      folderName: watchFolder.title
    }), (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        type: "submit",
        "data-testid": grafana_e2e_selectors_src.wl.components.ImportDashboardForm.submit,
        variant: getButtonVariant(errors),
        onClick: () => {
          setSubmitted(true);
        },
        children: getButtonText(errors)
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        type: "reset",
        variant: "secondary",
        onClick: onCancel,
        children: "Cancel"
      })]
    })]
  });
};

function getButtonVariant(errors) {
  return errors && (errors.title || errors.uid) ? 'destructive' : 'primary';
}

function getButtonText(errors) {
  return errors && (errors.title || errors.uid) ? 'Import (Overwrite)' : 'Import';
}
;
var _td, _td2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const IMPORT_FINISHED_EVENT_NAME = 'dashboard_import_imported';

const mapStateToProps = state => {
  const searchObj = grafana_runtime_src.locationService.getSearchObject();
  return {
    dashboard: state.importDashboard.dashboard,
    meta: state.importDashboard.meta,
    source: state.importDashboard.source,
    inputs: state.importDashboard.inputs,
    folder: searchObj.folderId ? {
      id: Number(searchObj.folderId)
    } : {
      id: 0
    }
  };
};

const mapDispatchToProps = {
  clearLoadedDashboard: actions.ys,
  importDashboard: actions.$j
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);

class ImportDashboardOverviewUnConnected extends react.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      uidReset: false
    });

    _defineProperty(this, "onSubmit", form => {
      (0,grafana_runtime_src.reportInteraction)(IMPORT_FINISHED_EVENT_NAME);
      this.props.importDashboard(form);
    });

    _defineProperty(this, "onCancel", () => {
      this.props.clearLoadedDashboard();
    });

    _defineProperty(this, "onUidReset", () => {
      this.setState({
        uidReset: true
      });
    });
  }

  render() {
    const {
      dashboard,
      inputs,
      meta,
      source,
      folder
    } = this.props;
    const {
      uidReset
    } = this.state;
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [source === reducers.G7.Gcom && (0,jsx_runtime.jsxs)("div", {
        style: {
          marginBottom: '24px'
        },
        children: [(0,jsx_runtime.jsx)("div", {
          children: (0,jsx_runtime.jsxs)(grafana_ui_src.Legend, {
            children: ["Importing dashboard from", ' ', (0,jsx_runtime.jsx)("a", {
              href: `https://grafana.com/dashboards/${dashboard.gnetId}`,
              className: "external-link",
              target: "_blank",
              rel: "noreferrer",
              children: "Grafana.com"
            })]
          })
        }), (0,jsx_runtime.jsx)("table", {
          className: "filter-table form-inline",
          children: (0,jsx_runtime.jsxs)("tbody", {
            children: [(0,jsx_runtime.jsxs)("tr", {
              children: [_td || (_td = (0,jsx_runtime.jsx)("td", {
                children: "Published by"
              })), (0,jsx_runtime.jsx)("td", {
                children: meta.orgName
              })]
            }), (0,jsx_runtime.jsxs)("tr", {
              children: [_td2 || (_td2 = (0,jsx_runtime.jsx)("td", {
                children: "Updated on"
              })), (0,jsx_runtime.jsx)("td", {
                children: (0,src.dateTimeFormat)(meta.updatedAt)
              })]
            })]
          })
        })]
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Form, {
        onSubmit: this.onSubmit,
        defaultValues: Object.assign({}, dashboard, {
          constants: [],
          dataSources: [],
          elements: [],
          folder: folder
        }),
        validateOnMount: true,
        validateFieldsOnMount: ['title', 'uid'],
        validateOn: "onChange",
        children: _ref => {
          let {
            register,
            errors,
            control,
            watch,
            getValues
          } = _ref;
          return (0,jsx_runtime.jsx)(ImportDashboardForm, {
            register: register,
            errors: errors,
            control: control,
            getValues: getValues,
            uidReset: uidReset,
            inputs: inputs,
            onCancel: this.onCancel,
            onUidReset: this.onUidReset,
            onSubmit: this.onSubmit,
            watch: watch,
            initialFolderId: folder.id
          });
        }
      })]
    });
  }

}

const ImportDashboardOverview = connector(ImportDashboardOverviewUnConnected);
ImportDashboardOverview.displayName = 'ImportDashboardOverview';
;
var _Button, _VerticalGroup, _ImportDashboardOverv;

function DashboardImportPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const IMPORT_STARTED_EVENT_NAME = 'dashboard_import_loaded';

const DashboardImportPage_mapStateToProps = state => ({
  navModel: (0,navModel.h)(state.navIndex, 'import', undefined, true),
  loadingState: state.importDashboard.state
});

const DashboardImportPage_mapDispatchToProps = {
  fetchGcomDashboard: actions.q_,
  importDashboardJson: actions.nQ,
  cleanUpAction: cleanUp.e
};
const DashboardImportPage_connector = (0,es.connect)(DashboardImportPage_mapStateToProps, DashboardImportPage_mapDispatchToProps);

class UnthemedDashboardImport extends react.PureComponent {
  constructor(props) {
    super(props);

    DashboardImportPage_defineProperty(this, "onFileUpload", event => {
      (0,grafana_runtime_src.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'json_uploaded'
      });
      const {
        importDashboardJson
      } = this.props;
      const file = event.currentTarget.files && event.currentTarget.files.length > 0 && event.currentTarget.files[0];

      if (file) {
        const reader = new FileReader();

        const readerOnLoad = () => {
          return e => {
            let dashboard;

            try {
              dashboard = JSON.parse(e.target.result);
            } catch (error) {
              app_events.Z.emit(src.AppEvents.alertError, ['Import failed', 'JSON -> JS Serialization failed: ' + error.message]);
              return;
            }

            importDashboardJson(dashboard);
          };
        };

        reader.onload = readerOnLoad();
        reader.readAsText(file);
      }
    });

    DashboardImportPage_defineProperty(this, "getDashboardFromJson", formData => {
      (0,grafana_runtime_src.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'json_pasted'
      });
      this.props.importDashboardJson(JSON.parse(formData.dashboardJson));
    });

    DashboardImportPage_defineProperty(this, "getGcomDashboard", formData => {
      (0,grafana_runtime_src.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'gcom'
      });
      let dashboardId;
      const match = /(^\d+$)|dashboards\/(\d+)/.exec(formData.gcomDashboard);

      if (match && match[1]) {
        dashboardId = match[1];
      } else if (match && match[2]) {
        dashboardId = match[2];
      }

      if (dashboardId) {
        this.props.fetchGcomDashboard(dashboardId);
      }
    });

    const {
      gcomDashboardId
    } = this.props.queryParams;

    if (gcomDashboardId) {
      this.getGcomDashboard({
        gcomDashboard: gcomDashboardId
      });
      return;
    }
  }

  componentWillUnmount() {
    this.props.cleanUpAction({
      stateSelector: state => state.importDashboard
    });
  }

  renderImportForm() {
    const styles = importStyles(this.props.theme);
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)("div", {
        className: styles.option,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.FileUpload, {
          accept: "application/json",
          onFileUpload: this.onFileUpload,
          children: "Upload JSON file"
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.option,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Form, {
          onSubmit: this.getGcomDashboard,
          defaultValues: {
            gcomDashboard: ''
          },
          children: _ref => {
            let {
              register,
              errors
            } = _ref;
            return (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
              label: "Import via grafana.com",
              invalid: !!errors.gcomDashboard,
              error: errors.gcomDashboard && errors.gcomDashboard.message,
              children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
                id: "url-input",
                placeholder: "Grafana.com dashboard URL or ID",
                type: "text"
              }, register('gcomDashboard', {
                required: 'A Grafana dashboard URL or ID is required',
                validate: validateGcomDashboard
              }), {
                addonAfter: _Button || (_Button = (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                  type: "submit",
                  children: "Load"
                }))
              }))
            });
          }
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.option,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Form, {
          onSubmit: this.getDashboardFromJson,
          defaultValues: {
            dashboardJson: ''
          },
          children: _ref2 => {
            let {
              register,
              errors
            } = _ref2;
            return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
                label: "Import via panel json",
                invalid: !!errors.dashboardJson,
                error: errors.dashboardJson && errors.dashboardJson.message,
                children: (0,jsx_runtime.jsx)(grafana_ui_src.TextArea, Object.assign({}, register('dashboardJson', {
                  required: 'Need a dashboard JSON model',
                  validate: validateDashboardJson
                }), {
                  "data-testid": grafana_e2e_selectors_src.wl.components.DashboardImportPage.textarea,
                  id: "dashboard-json-textarea",
                  rows: 10
                }))
              }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                type: "submit",
                "data-testid": grafana_e2e_selectors_src.wl.components.DashboardImportPage.submit,
                children: "Load"
              })]
            });
          }
        })
      })]
    });
  }

  render() {
    const {
      loadingState,
      navModel
    } = this.props;
    return (0,jsx_runtime.jsx)(Page.Z, {
      navModel: navModel,
      children: (0,jsx_runtime.jsxs)(Page.Z.Contents, {
        children: [loadingState === src.LoadingState.Loading && (_VerticalGroup || (_VerticalGroup = (0,jsx_runtime.jsx)(grafana_ui_src.VerticalGroup, {
          justify: "center",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.HorizontalGroup, {
            justify: "center",
            children: (0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {
              size: 32
            })
          })
        }))), [src.LoadingState.Error, src.LoadingState.NotStarted].includes(loadingState) && this.renderImportForm(), loadingState === src.LoadingState.Done && (_ImportDashboardOverv || (_ImportDashboardOverv = (0,jsx_runtime.jsx)(ImportDashboardOverview, {})))]
      })
    });
  }

}

const DashboardImportUnConnected = (0,grafana_ui_src.withTheme2)(UnthemedDashboardImport);
const DashboardImport = DashboardImportPage_connector(DashboardImportUnConnected);
DashboardImport.displayName = 'DashboardImport';
 const DashboardImportPage = (DashboardImport);
const importStyles = (0,grafana_ui_src.stylesFactory)(theme => {
  return {
    option: emotion_css_esm.css`
      margin-bottom: ${theme.spacing(4)};
    `
  };
});

 }),

 "./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "X": () => ( PanelTypeCard)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const PanelTypeCard = _ref => {
  let {
    isCurrent,
    title,
    plugin,
    onClick,
    onDelete,
    disabled,
    showBadge,
    description,
    children
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const cssClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
    [styles.item]: true,
    [styles.disabled]: disabled || plugin.state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginState.deprecated,
    [styles.current]: isCurrent
  });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: cssClass,
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ .wl.components.PluginVisualization.item(plugin.name),
    onClick: disabled ? undefined : onClick,
    title: isCurrent ? 'Click again to close this section' : plugin.name,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
      className: styles.img,
      src: plugin.info.logos.small,
      alt: ""
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.itemContent,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: styles.name,
        children: title
      }), description ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: styles.description,
        children: description
      }) : null, children]
    }), showBadge && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.badge, disabled && styles.disabled),
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PanelPluginBadge, {
        plugin: plugin
      })
    }), onDelete && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
      name: "trash-alt",
      onClick: e => {
        e.stopPropagation();
        onDelete();
      },
      className: styles.deleteButton,
      "aria-label": "Delete button on panel type card"
    })]
  });
};
PanelTypeCard.displayName = 'PanelTypeCard';

const getStyles = theme => {
  return {
    item: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
      box-shadow: ${theme.shadows.z1};
      border: 1px solid ${theme.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${theme.transitions.create(['background'], {
      duration: theme.transitions.duration.short
    })};

      &:hover {
        background: ${theme.colors.emphasize(theme.colors.background.secondary, 0.03)};
      }
    `,
    itemContent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow: hidden;
      position: relative;
      padding: ${theme.spacing(0, 1)};
    `,
    current: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: currentVisualizationItem;
      border: 1px solid ${theme.colors.primary.border};
      background: ${theme.colors.action.selected};
    `,
    disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      opacity: 0.2;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,
    name: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: ${theme.typography.size.sm};
      font-weight: ${theme.typography.fontWeightMedium};
      width: 100%;
    `,
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      font-weight: ${theme.typography.fontWeightLight};
      width: 100%;
      max-height: 4.5em;
    `,
    img: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,
    badge: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${theme.colors.background.primary};
    `,
    deleteButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: auto;
    `
  };
};

const PanelPluginBadge = _ref2 => {
  let {
    plugin
  } = _ref2;

  if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isUnsignedPluginSignature)(plugin.signature)) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureBadge, {
      status: plugin.signature
    });
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_5__ .u, {
    state: plugin.state
  });
};

PanelPluginBadge.displayName = 'PanelPluginBadge';

 }),

 "./public/app/features/plugins/components/PluginStateInfo.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "u": () => ( PluginStateInfo)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const PluginStateInfo = props => {
  const display = getFeatureStateInfo(props.state);

  if (!display) {
    return null;
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
    color: display.color,
    title: display.tooltip,
    text: display.text,
    icon: display.icon
  });
};

function getFeatureStateInfo(state) {
  switch (state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.deprecated:
      return {
        text: 'Deprecated',
        color: 'red',
        tooltip: `This feature is deprecated and will be removed in a future release`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.alpha:
      return {
        text: 'Alpha',
        color: 'blue',
        tooltip: `This feature is experimental and future updates might not be backward compatible`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.beta:
      return {
        text: 'Beta',
        color: 'blue',
        tooltip: `This feature is close to complete but not fully tested`
      };

    default:
      return null;
  }
}

 })

}]);