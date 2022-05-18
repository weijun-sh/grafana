"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DashboardImport"],{

/***/ "./public/app/features/library-panels/components/DeleteLibraryPanelModal/DeleteLibraryPanelModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteLibraryPanelModal": () => (/* binding */ DeleteLibraryPanelModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/styles.ts");
/* harmony import */ var _LibraryPanelsView_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/reducer.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingIndicator, _Confirm, _span, _thead;










const DeleteLibraryPanelModal = ({
  libraryPanel,
  onDismiss,
  onConfirm
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(_styles__WEBPACK_IMPORTED_MODULE_3__.getModalStyles);
  const [{
    dashboardTitles,
    loadingState
  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_6__.deleteLibraryPanelModalReducer, _reducer__WEBPACK_IMPORTED_MODULE_6__.initialDeleteLibraryPanelModalState);
  const asyncDispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_LibraryPanelsView_actions__WEBPACK_IMPORTED_MODULE_4__.asyncDispatcher)(dispatch), [dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    asyncDispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.getConnectedDashboards)(libraryPanel));
  }, [asyncDispatch, libraryPanel]);
  const connected = Boolean(dashboardTitles.length);
  const done = loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: styles.modal,
    title: "Delete library panel",
    icon: "trash-alt",
    onDismiss: onDismiss,
    isOpen: true,
    children: [!done ? _LoadingIndicator || (_LoadingIndicator = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(LoadingIndicator, {})) : null, done ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [connected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(HasConnectedDashboards, {
        dashboardTitles: dashboardTitles
      }) : null, !connected ? _Confirm || (_Confirm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Confirm, {})) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          fill: "outline",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "destructive",
          onClick: onConfirm,
          disabled: connected,
          children: "Delete"
        })]
      })]
    }) : null]
  });
};

const LoadingIndicator = () => _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
  children: "Loading library panel..."
}));

const Confirm = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(_styles__WEBPACK_IMPORTED_MODULE_3__.getModalStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: styles.modalText,
    children: "Do you want to delete this panel?"
  });
};

const HasConnectedDashboards = ({
  dashboardTitles
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(_styles__WEBPACK_IMPORTED_MODULE_3__.getModalStyles);
  const suffix = dashboardTitles.length === 1 ? 'dashboard.' : 'dashboards.';
  const message = `${dashboardTitles.length} ${suffix}`;

  if (dashboardTitles.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
      className: styles.textInfo,
      children: ['This library panel can not be deleted because it is connected to ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", {
        children: message
      }), ' Remove the library panel from the dashboards listed below and retry.']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
      className: styles.myTable,
      children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Dashboard name"
          })
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
        children: dashboardTitles.map((title, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tr", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
            children: title
          })
        }, `dash-title-${i}`))
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/library-panels/components/DeleteLibraryPanelModal/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getConnectedDashboards": () => (/* binding */ getConnectedDashboards)
/* harmony export */ });
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/reducer.ts");


function getConnectedDashboards(libraryPanel) {
  return async function (dispatch) {
    const dashboards = await (0,_state_api__WEBPACK_IMPORTED_MODULE_0__.getConnectedDashboards)(libraryPanel.uid);
    dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.searchCompleted)({
      dashboards
    }));
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/DeleteLibraryPanelModal/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteLibraryPanelModalReducer": () => (/* binding */ deleteLibraryPanelModalReducer),
/* harmony export */   "initialDeleteLibraryPanelModalState": () => (/* binding */ initialDeleteLibraryPanelModalState),
/* harmony export */   "searchCompleted": () => (/* binding */ searchCompleted)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");


const initialDeleteLibraryPanelModalState = {
  loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
  dashboardTitles: []
};
const searchCompleted = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/delete/searchCompleted');
const deleteLibraryPanelModalReducer = (state = initialDeleteLibraryPanelModalState, action) => {
  if (searchCompleted.match(action)) {
    return Object.assign({}, state, {
      dashboardTitles: action.payload.dashboards.map(d => d.title),
      loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
    });
  }

  return state;
};

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelCard": () => (/* binding */ LibraryPanelCard)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_panel_components_PanelPluginError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/panel/components/PanelPluginError.tsx");
/* harmony import */ var app_features_panel_components_VizTypePicker_PanelTypeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx");
/* harmony import */ var _DeleteLibraryPanelModal_DeleteLibraryPanelModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/DeleteLibraryPanelModal/DeleteLibraryPanelModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Icon2;











const LibraryPanelCard = ({
  libraryPanel,
  onClick,
  onDelete,
  showSecondaryActions
}) => {
  var _config$panels$librar;

  const [showDeletionModal, setShowDeletionModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const onDeletePanel = () => {
    onDelete === null || onDelete === void 0 ? void 0 : onDelete(libraryPanel);
    setShowDeletionModal(false);
  };

  const panelPlugin = (_config$panels$librar = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.panels[libraryPanel.model.type]) !== null && _config$panels$librar !== void 0 ? _config$panels$librar : (0,app_features_panel_components_PanelPluginError__WEBPACK_IMPORTED_MODULE_4__.getPanelPluginNotFound)(libraryPanel.model.type).meta;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_features_panel_components_VizTypePicker_PanelTypeCard__WEBPACK_IMPORTED_MODULE_5__.PanelTypeCard, {
      isCurrent: false,
      title: libraryPanel.name,
      description: libraryPanel.description,
      plugin: panelPlugin,
      onClick: () => onClick === null || onClick === void 0 ? void 0 : onClick(libraryPanel),
      onDelete: showSecondaryActions ? () => setShowDeletionModal(true) : undefined,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(FolderLink, {
        libraryPanel: libraryPanel
      })
    }), showDeletionModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_DeleteLibraryPanelModal_DeleteLibraryPanelModal__WEBPACK_IMPORTED_MODULE_6__.DeleteLibraryPanelModal, {
      libraryPanel: libraryPanel,
      onConfirm: onDeletePanel,
      onDismiss: () => setShowDeletionModal(false)
    })]
  });
};

function FolderLink({
  libraryPanel
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  if (!libraryPanel.meta.folderUid && !libraryPanel.meta.folderName) {
    return null;
  }

  if (!libraryPanel.meta.folderUid) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
      className: styles.metaContainer,
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: 'folder',
        size: "sm"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: libraryPanel.meta.folderName
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
    className: styles.metaContainer,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
      href: `/dashboards/f/${libraryPanel.meta.folderUid}`,
      children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: 'folder-upload',
        size: "sm"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: libraryPanel.meta.folderName
      })]
    })
  });
}

function getStyles(theme) {
  return {
    metaContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsView/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncDispatcher": () => (/* binding */ asyncDispatcher),
/* harmony export */   "deleteLibraryPanel": () => (/* binding */ deleteLibraryPanel),
/* harmony export */   "searchForLibraryPanels": () => (/* binding */ searchForLibraryPanels)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/timer.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");




function searchForLibraryPanels(args) {
  return function (dispatch) {
    const subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    const dataObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)((0,_state_api__WEBPACK_IMPORTED_MODULE_0__.getLibraryPanels)({
      searchString: args.searchString,
      perPage: args.perPage,
      page: args.page,
      excludeUid: args.currentPanelId,
      sortDirection: args.sortDirection,
      typeFilter: args.panelFilter,
      folderFilter: args.folderFilter
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(({
      perPage,
      elements: libraryPanels,
      page,
      totalCount
    }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.searchCompleted)({
      libraryPanels,
      page,
      perPage,
      totalCount
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.error(err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.searchCompleted)(Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_1__.initialLibraryPanelsViewState, {
        page: args.page,
        perPage: args.perPage
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => subscription.unsubscribe()), // make sure we unsubscribe
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());
    subscription.add( // If 50ms without a response dispatch a loading state
    // mapTo will translate the timer event into a loading state
    // takeUntil will cancel the timer emit when first response is received on the dataObservable
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(50).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)((0,_reducer__WEBPACK_IMPORTED_MODULE_1__.initSearch)()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(dataObservable)), dataObservable).subscribe(dispatch));
  };
}
function deleteLibraryPanel(uid, args) {
  return async function (dispatch) {
    try {
      await (0,_state_api__WEBPACK_IMPORTED_MODULE_0__.deleteLibraryPanel)(uid);
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

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePage": () => (/* binding */ changePage),
/* harmony export */   "initSearch": () => (/* binding */ initSearch),
/* harmony export */   "initialLibraryPanelsViewState": () => (/* binding */ initialLibraryPanelsViewState),
/* harmony export */   "libraryPanelsViewReducer": () => (/* binding */ libraryPanelsViewReducer),
/* harmony export */   "searchCompleted": () => (/* binding */ searchCompleted)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");


const initialLibraryPanelsViewState = {
  loadingState: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
  libraryPanels: [],
  totalCount: 0,
  perPage: 40,
  page: 1,
  numberOfPages: 0,
  currentPanelId: undefined
};
const initSearch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/view/initSearch');
const searchCompleted = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/view/searchCompleted');
const changePage = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)('libraryPanels/view/changePage');
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

/***/ }),

/***/ "./public/app/features/library-panels/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getModalStyles": () => (/* binding */ getModalStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

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

/***/ }),

/***/ "./public/app/features/manage-dashboards/DashboardImportPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var _components_ImportDashboardOverview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardOverview.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/manage-dashboards/utils/validation.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button, _VerticalGroup, _ImportDashboardOverv;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const IMPORT_STARTED_EVENT_NAME = 'dashboard_import_loaded';

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, 'import', undefined, true),
  loadingState: state.importDashboard.state
});

const mapDispatchToProps = {
  fetchGcomDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_12__.fetchGcomDashboard,
  importDashboardJson: _state_actions__WEBPACK_IMPORTED_MODULE_12__.importDashboardJson,
  cleanUpAction: _core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_10__.cleanUpAction
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);

class UnthemedDashboardImport extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onFileUpload", event => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
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
              app_core_app_events__WEBPACK_IMPORTED_MODULE_7__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.AppEvents.alertError, ['Import failed', 'JSON -> JS Serialization failed: ' + error.message]);
              return;
            }

            importDashboardJson(dashboard);
          };
        };

        reader.onload = readerOnLoad();
        reader.readAsText(file);
      }
    });

    _defineProperty(this, "getDashboardFromJson", formData => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
        import_source: 'json_pasted'
      });
      this.props.importDashboardJson(JSON.parse(formData.dashboardJson));
    });

    _defineProperty(this, "getGcomDashboard", formData => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)(IMPORT_STARTED_EVENT_NAME, {
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.option,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.FileUpload, {
          accept: "application/json",
          onFileUpload: this.onFileUpload,
          children: "Upload JSON file"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.option,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Form, {
          onSubmit: this.getGcomDashboard,
          defaultValues: {
            gcomDashboard: ''
          },
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
            label: "Import via grafana.com",
            invalid: !!errors.gcomDashboard,
            error: errors.gcomDashboard && errors.gcomDashboard.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input, Object.assign({
              id: "url-input",
              placeholder: "Grafana.com dashboard URL or ID",
              type: "text"
            }, register('gcomDashboard', {
              required: 'A Grafana dashboard URL or ID is required',
              validate: _utils_validation__WEBPACK_IMPORTED_MODULE_13__.validateGcomDashboard
            }), {
              addonAfter: _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
                type: "submit",
                children: "Load"
              }))
            }))
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: styles.option,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Form, {
          onSubmit: this.getDashboardFromJson,
          defaultValues: {
            dashboardJson: ''
          },
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, {
              label: "Import via panel json",
              invalid: !!errors.dashboardJson,
              error: errors.dashboardJson && errors.dashboardJson.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextArea, Object.assign({}, register('dashboardJson', {
                required: 'Need a dashboard JSON model',
                validate: _utils_validation__WEBPACK_IMPORTED_MODULE_13__.validateDashboardJson
              }), {
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DashboardImportPage.textarea,
                id: "dashboard-json-textarea",
                rows: 10
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
              type: "submit",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.DashboardImportPage.submit,
              children: "Load"
            })]
          })
        })
      })]
    });
  }

  render() {
    const {
      loadingState,
      navModel
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__["default"].Contents, {
        children: [loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading && (_VerticalGroup || (_VerticalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.VerticalGroup, {
          justify: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.HorizontalGroup, {
            justify: "center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Spinner, {
              size: 32
            })
          })
        }))), [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error, _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted].includes(loadingState) && this.renderImportForm(), loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done && (_ImportDashboardOverv || (_ImportDashboardOverv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_ImportDashboardOverview__WEBPACK_IMPORTED_MODULE_11__.ImportDashboardOverview, {})))]
      })
    });
  }

}

const DashboardImportUnConnected = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.withTheme2)(UnthemedDashboardImport);
const DashboardImport = connector(DashboardImportUnConnected);
DashboardImport.displayName = 'DashboardImport';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardImport);
const importStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.stylesFactory)(theme => {
  return {
    option: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(4)};
    `
  };
});

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDashboardForm": () => (/* binding */ ImportDashboardForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/manage-dashboards/utils/validation.ts");
/* harmony import */ var _ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardLibraryPanelsList.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"],
      _excluded2 = ["ref"];

var _Legend;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const ImportDashboardForm = ({
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
}) => {
  var _inputs$libraryPanels, _inputs$libraryPanels2, _inputs$libraryPanels3, _inputs$libraryPanels4;

  const [isSubmitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const watchDataSources = watch('dataSources');
  const watchFolder = watch('folder');
  /*
    This useEffect is needed for overwriting a dashboard. It
    submits the form even if there's validation errors on title or uid.
  */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isSubmitted && (errors.title || errors.uid)) {
      onSubmit(getValues(), {});
    }
  }, [errors, getValues, isSubmitted, onSubmit]);
  const newLibraryPanels = (_inputs$libraryPanels = inputs === null || inputs === void 0 ? void 0 : (_inputs$libraryPanels2 = inputs.libraryPanels) === null || _inputs$libraryPanels2 === void 0 ? void 0 : _inputs$libraryPanels2.filter(i => i.state === _state_reducers__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelInputState.New)) !== null && _inputs$libraryPanels !== void 0 ? _inputs$libraryPanels : [];
  const existingLibraryPanels = (_inputs$libraryPanels3 = inputs === null || inputs === void 0 ? void 0 : (_inputs$libraryPanels4 = inputs.libraryPanels) === null || _inputs$libraryPanels4 === void 0 ? void 0 : _inputs$libraryPanels4.filter(i => i.state === _state_reducers__WEBPACK_IMPORTED_MODULE_6__.LibraryPanelInputState.Exits)) !== null && _inputs$libraryPanels3 !== void 0 ? _inputs$libraryPanels3 : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
      children: "Options"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      label: "Name",
      invalid: !!errors.title,
      error: errors.title && errors.title.message,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register('title', {
        required: 'Name is required',
        validate: async v => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateTitle)(v, getValues().folder.id)
      }), {
        type: "text",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.ImportDashboardForm.name
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      label: "Folder",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_5__.FolderPicker, Object.assign({}, field, {
            enableCreateNew: true,
            initialFolderId: initialFolderId
          }));
        },
        name: "folder",
        control: control
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      label: "Unique identifier (UID)",
      description: "The unique identifier (UID) of a dashboard can be used for uniquely identify a dashboard between multiple Grafana installs. The UID allows having consistent URLs for accessing dashboards so changing the title of a dashboard will not break any bookmarked links to that dashboard.",
      invalid: !!errors.uid,
      error: errors.uid && errors.uid.message,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: !uidReset ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
          disabled: true
        }, register('uid', {
          validate: async v => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateUid)(v)
        }), {
          addonAfter: !uidReset && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            onClick: onUidReset,
            children: "Change uid"
          })
        })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register('uid', {
          required: true,
          validate: async v => await (0,_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateUid)(v)
        })))
      })
    }), inputs.dataSources && inputs.dataSources.map((input, index) => {
      if (input.pluginId === _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_3__.ExpressionDatasourceRef.type) {
        return null;
      }

      const dataSourceOption = `dataSources[${index}]`;
      const current = watchDataSources !== null && watchDataSources !== void 0 ? watchDataSources : [];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: input.label,
        invalid: errors.dataSources && !!errors.dataSources[index],
        error: errors.dataSources && errors.dataSources[index] && 'A data source is required',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
          name: dataSourceOption,
          render: _ref2 => {
            var _current$index;

            let {} = _ref2,
                field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, Object.assign({}, field, {
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
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: input.label,
        error: errors.constants && errors.constants[index] && `${input.label} needs a value`,
        invalid: errors.constants && !!errors.constants[index],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register(constantIndex, {
          required: true
        }), {
          defaultValue: input.value
        }))
      }, constantIndex);
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_8__.ImportDashboardLibraryPanelsList, {
      inputs: newLibraryPanels,
      label: "New library panels",
      description: "List of new library panels that will get imported.",
      folderName: watchFolder.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ImportDashboardLibraryPanelsList__WEBPACK_IMPORTED_MODULE_8__.ImportDashboardLibraryPanelsList, {
      inputs: existingLibraryPanels,
      label: "Existing library panels",
      description: "List of existing library panels. These panels are not affected by the import.",
      folderName: watchFolder.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "submit",
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.ImportDashboardForm.submit,
        variant: getButtonVariant(errors),
        onClick: () => {
          setSubmitted(true);
        },
        children: getButtonText(errors)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
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

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardLibraryPanelsList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDashboardLibraryPanelsList": () => (/* binding */ ImportDashboardLibraryPanelsList)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _library_panels_components_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function ImportDashboardLibraryPanelsList({
  inputs,
  label,
  description,
  folderName
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (!Boolean(inputs === null || inputs === void 0 ? void 0 : inputs.length)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: styles.spacer,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: label,
      description: description,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: inputs.map((input, index) => {
          const libraryPanelIndex = `elements[${index}]`;
          const libraryPanel = input.state === _state_reducers__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelInputState.New ? Object.assign({}, input.model, {
            meta: Object.assign({}, input.model.meta, {
              folderName: folderName !== null && folderName !== void 0 ? folderName : 'General'
            })
          }) : Object.assign({}, input.model);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: styles.item,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_library_panels_components_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_3__.LibraryPanelCard, {
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
    spacer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(2)};
    `,
    item: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(1)};
    `
  };
}

/***/ }),

/***/ "./public/app/features/manage-dashboards/components/ImportDashboardOverview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportDashboardOverview": () => (/* binding */ ImportDashboardOverview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/manage-dashboards/state/reducers.ts");
/* harmony import */ var _ImportDashboardForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/manage-dashboards/components/ImportDashboardForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td, _td2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const IMPORT_FINISHED_EVENT_NAME = 'dashboard_import_imported';

const mapStateToProps = state => {
  const searchObj = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.getSearchObject();
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
  clearLoadedDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_5__.clearLoadedDashboard,
  importDashboard: _state_actions__WEBPACK_IMPORTED_MODULE_5__.importDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);

class ImportDashboardOverviewUnConnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      uidReset: false
    });

    _defineProperty(this, "onSubmit", form => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)(IMPORT_FINISHED_EVENT_NAME);
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [source === _state_reducers__WEBPACK_IMPORTED_MODULE_6__.DashboardSource.Gcom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        style: {
          marginBottom: '24px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
            children: ["Importing dashboard from", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: `https://grafana.com/dashboards/${dashboard.gnetId}`,
              className: "external-link",
              target: "_blank",
              rel: "noreferrer",
              children: "Grafana.com"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("table", {
          className: "filter-table form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [_td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: "Published by"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: meta.orgName
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [_td2 || (_td2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: "Updated on"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(meta.updatedAt)
              })]
            })]
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Form, {
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
        children: ({
          register,
          errors,
          control,
          watch,
          getValues
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ImportDashboardForm__WEBPACK_IMPORTED_MODULE_7__.ImportDashboardForm, {
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
        })
      })]
    });
  }

}

const ImportDashboardOverview = connector(ImportDashboardOverviewUnConnected);
ImportDashboardOverview.displayName = 'ImportDashboardOverview';

/***/ }),

/***/ "./public/app/features/manage-dashboards/utils/validation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateDashboardJson": () => (/* binding */ validateDashboardJson),
/* harmony export */   "validateGcomDashboard": () => (/* binding */ validateGcomDashboard),
/* harmony export */   "validateTitle": () => (/* binding */ validateTitle),
/* harmony export */   "validateUid": () => (/* binding */ validateUid)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _services_ValidationSrv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");


const validateDashboardJson = json => {
  try {
    JSON.parse(json);
    return true;
  } catch (error) {
    return 'Not valid JSON';
  }
};
const validateGcomDashboard = gcomDashboard => {
  // From DashboardImportCtrl
  const match = /(^\d+$)|dashboards\/(\d+)/.exec(gcomDashboard);
  return match && (match[1] || match[2]) ? true : 'Could not find a valid Grafana.com ID';
};
const validateTitle = (newTitle, folderId) => {
  return _services_ValidationSrv__WEBPACK_IMPORTED_MODULE_1__.validationSrv.validateNewDashboardName(folderId, newTitle).then(() => {
    return true;
  }).catch(error => {
    if (error.type === 'EXISTING') {
      return error.message;
    }
  });
};
const validateUid = value => {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/dashboards/uid/${value}`).then(existingDashboard => {
    return `Dashboard named '${existingDashboard === null || existingDashboard === void 0 ? void 0 : existingDashboard.dashboard.title}' in folder '${existingDashboard === null || existingDashboard === void 0 ? void 0 : existingDashboard.meta.folderTitle}' has the same UID`;
  }).catch(error => {
    error.isHandled = true;
    return true;
  });
};

/***/ }),

/***/ "./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelTypeCard": () => (/* binding */ PanelTypeCard)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const PanelTypeCard = ({
  isCurrent,
  title,
  plugin,
  onClick,
  onDelete,
  disabled,
  showBadge,
  description,
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const cssClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
    [styles.item]: true,
    [styles.disabled]: disabled || plugin.state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginState.deprecated,
    [styles.current]: isCurrent
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: cssClass,
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.PluginVisualization.item(plugin.name),
    onClick: disabled ? undefined : onClick,
    title: isCurrent ? 'Click again to close this section' : plugin.name,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
      className: styles.img,
      src: plugin.info.logos.small,
      alt: ""
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: styles.itemContent,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: styles.name,
        children: title
      }), description ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
        className: styles.description,
        children: description
      }) : null, children]
    }), showBadge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.badge, disabled && styles.disabled),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PanelPluginBadge, {
        plugin: plugin
      })
    }), onDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
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

const PanelPluginBadge = ({
  plugin
}) => {
  if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isUnsignedPluginSignature)(plugin.signature)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureBadge, {
      status: plugin.signature
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_5__.PluginStateInfo, {
    state: plugin.state
  });
};

PanelPluginBadge.displayName = 'PanelPluginBadge';

/***/ }),

/***/ "./public/app/features/plugins/components/PluginStateInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginStateInfo": () => (/* binding */ PluginStateInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const PluginStateInfo = props => {
  const display = getFeatureStateInfo(props.state);

  if (!display) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q25ELFFBQU1tSyxPQUFPLEdBQUdDLG1CQUFtQixDQUFDcEssS0FBSyxDQUFDdkksS0FBUCxDQUFuQzs7QUFFQSxNQUFJLENBQUMwUyxPQUFMLEVBQWM7QUFDWixXQUFPLElBQVA7QUFDRDs7QUFFRCxzQkFBTyx1REFBQyw4Q0FBRDtBQUFPLFNBQUssRUFBRUEsT0FBTyxDQUFDRSxLQUF0QjtBQUE2QixTQUFLLEVBQUVGLE9BQU8sQ0FBQ0csT0FBNUM7QUFBcUQsUUFBSSxFQUFFSCxPQUFPLENBQUN2USxJQUFuRTtBQUF5RSxRQUFJLEVBQUV1USxPQUFPLENBQUNJO0FBQXZGLElBQVA7QUFDRCxDQVJNOztBQVVQLFNBQVNILG1CQUFULENBQTZCM1MsS0FBN0IsRUFBcUU7QUFDbkUsVUFBUUEsS0FBUjtBQUNFLFNBQUtzUSxpRUFBTDtBQUNFLGFBQU87QUFDTG5PLFFBQUFBLElBQUksRUFBRSxZQUREO0FBRUx5USxRQUFBQSxLQUFLLEVBQUUsS0FGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGLFNBQUt2Qyw0REFBTDtBQUNFLGFBQU87QUFDTG5PLFFBQUFBLElBQUksRUFBRSxPQUREO0FBRUx5USxRQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGLFNBQUt2QywyREFBTDtBQUNFLGFBQU87QUFDTG5PLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUx5USxRQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGO0FBQ0UsYUFBTyxJQUFQO0FBcEJKO0FBc0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbENhcmQvTGlicmFyeVBhbmVsQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzVmlldy9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1ZpZXcvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvRGFzaGJvYXJkSW1wb3J0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbWFuYWdlLWRhc2hib2FyZHMvY29tcG9uZW50cy9JbXBvcnREYXNoYm9hcmRGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9tYW5hZ2UtZGFzaGJvYXJkcy9jb21wb25lbnRzL0ltcG9ydERhc2hib2FyZExpYnJhcnlQYW5lbHNMaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9tYW5hZ2UtZGFzaGJvYXJkcy9jb21wb25lbnRzL0ltcG9ydERhc2hib2FyZE92ZXJ2aWV3LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9tYW5hZ2UtZGFzaGJvYXJkcy91dGlscy92YWxpZGF0aW9uLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BhbmVsL2NvbXBvbmVudHMvVml6VHlwZVBpY2tlci9QYW5lbFR5cGVDYXJkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldE1vZGFsU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgYXN5bmNEaXNwYXRjaGVyIH0gZnJvbSAnLi4vTGlicmFyeVBhbmVsc1ZpZXcvYWN0aW9ucyc7XG5cbmltcG9ydCB7IGdldENvbm5lY3RlZERhc2hib2FyZHMgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZGVsZXRlTGlicmFyeVBhbmVsTW9kYWxSZWR1Y2VyLCBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWw6IEZDPFByb3BzPiA9ICh7IGxpYnJhcnlQYW5lbCwgb25EaXNtaXNzLCBvbkNvbmZpcm0gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBbeyBkYXNoYm9hcmRUaXRsZXMsIGxvYWRpbmdTdGF0ZSB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlcixcbiAgICBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZVxuICApO1xuICBjb25zdCBhc3luY0Rpc3BhdGNoID0gdXNlTWVtbygoKSA9PiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2gpLCBbZGlzcGF0Y2hdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luY0Rpc3BhdGNoKGdldENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsKSk7XG4gIH0sIFthc3luY0Rpc3BhdGNoLCBsaWJyYXJ5UGFuZWxdKTtcbiAgY29uc3QgY29ubmVjdGVkID0gQm9vbGVhbihkYXNoYm9hcmRUaXRsZXMubGVuZ3RoKTtcbiAgY29uc3QgZG9uZSA9IGxvYWRpbmdTdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkRvbmU7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9IHRpdGxlPVwiRGVsZXRlIGxpYnJhcnkgcGFuZWxcIiBpY29uPVwidHJhc2gtYWx0XCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IGlzT3Blbj17dHJ1ZX0+XG4gICAgICB7IWRvbmUgPyA8TG9hZGluZ0luZGljYXRvciAvPiA6IG51bGx9XG4gICAgICB7ZG9uZSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y29ubmVjdGVkID8gPEhhc0Nvbm5lY3RlZERhc2hib2FyZHMgZGFzaGJvYXJkVGl0bGVzPXtkYXNoYm9hcmRUaXRsZXN9IC8+IDogbnVsbH1cbiAgICAgICAgICB7IWNvbm5lY3RlZCA/IDxDb25maXJtIC8+IDogbnVsbH1cblxuICAgICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e29uQ29uZmlybX0gZGlzYWJsZWQ9e2Nvbm5lY3RlZH0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IExvYWRpbmdJbmRpY2F0b3I6IEZDID0gKCkgPT4gPHNwYW4+TG9hZGluZyBsaWJyYXJ5IHBhbmVsLi4uPC9zcGFuPjtcblxuY29uc3QgQ29uZmlybTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRNb2RhbFN0eWxlcyk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUZXh0fT5EbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwYW5lbD88L2Rpdj47XG59O1xuXG5jb25zdCBIYXNDb25uZWN0ZWREYXNoYm9hcmRzOiBGQzx7IGRhc2hib2FyZFRpdGxlczogc3RyaW5nW10gfT4gPSAoeyBkYXNoYm9hcmRUaXRsZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBzdWZmaXggPSBkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAxID8gJ2Rhc2hib2FyZC4nIDogJ2Rhc2hib2FyZHMuJztcbiAgY29uc3QgbWVzc2FnZSA9IGAke2Rhc2hib2FyZFRpdGxlcy5sZW5ndGh9ICR7c3VmZml4fWA7XG4gIGlmIChkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5mb30+XG4gICAgICAgIHsnVGhpcyBsaWJyYXJ5IHBhbmVsIGNhbiBub3QgYmUgZGVsZXRlZCBiZWNhdXNlIGl0IGlzIGNvbm5lY3RlZCB0byAnfVxuICAgICAgICA8c3Ryb25nPnttZXNzYWdlfTwvc3Ryb25nPlxuICAgICAgICB7JyBSZW1vdmUgdGhlIGxpYnJhcnkgcGFuZWwgZnJvbSB0aGUgZGFzaGJvYXJkcyBsaXN0ZWQgYmVsb3cgYW5kIHJldHJ5Lid9XG4gICAgICA8L3A+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubXlUYWJsZX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGFzaGJvYXJkIG5hbWU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGFzaGJvYXJkVGl0bGVzLm1hcCgodGl0bGUsIGkpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2BkYXNoLXRpdGxlLSR7aX1gfT5cbiAgICAgICAgICAgICAgPHRkPnt0aXRsZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyBhcyBhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IERpc3BhdGNoUmVzdWx0LCBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgc2VhcmNoQ29tcGxldGVkIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTyk6IERpc3BhdGNoUmVzdWx0IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGNvbnN0IGRhc2hib2FyZHMgPSBhd2FpdCBhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbC51aWQpO1xuICAgIGRpc3BhdGNoKHNlYXJjaENvbXBsZXRlZCh7IGRhc2hib2FyZHMgfSkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU2VhcmNoSGl0IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3NlYXJjaC90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSB7XG4gIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlO1xuICBkYXNoYm9hcmRUaXRsZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGU6IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgPSB7XG4gIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcsXG4gIGRhc2hib2FyZFRpdGxlczogW10sXG59O1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoQ29tcGxldGVkID0gY3JlYXRlQWN0aW9uPHsgZGFzaGJvYXJkczogRGFzaGJvYXJkU2VhcmNoSGl0W10gfT4oXG4gICdsaWJyYXJ5UGFuZWxzL2RlbGV0ZS9zZWFyY2hDb21wbGV0ZWQnXG4pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTGlicmFyeVBhbmVsTW9kYWxSZWR1Y2VyID0gKFxuICBzdGF0ZTogRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSA9IGluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlLFxuICBhY3Rpb246IEFueUFjdGlvblxuKTogRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSA9PiB7XG4gIGlmIChzZWFyY2hDb21wbGV0ZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGRhc2hib2FyZFRpdGxlczogYWN0aW9uLnBheWxvYWQuZGFzaGJvYXJkcy5tYXAoKGQpID0+IGQudGl0bGUpLFxuICAgICAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBJY29uLCBMaW5rLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0UGFuZWxQbHVnaW5Ob3RGb3VuZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1BhbmVsUGx1Z2luRXJyb3InO1xuaW1wb3J0IHsgUGFuZWxUeXBlQ2FyZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZCc7XG5cbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwgfSBmcm9tICcuLi9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlicmFyeVBhbmVsQ2FyZFByb3BzIHtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbiAgb25DbGljazogKHBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTykgPT4gdm9pZDtcbiAgb25EZWxldGU/OiAocGFuZWw6IExpYnJhcnlFbGVtZW50RFRPKSA9PiB2b2lkO1xuICBzaG93U2Vjb25kYXJ5QWN0aW9ucz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBMaWJyYXJ5UGFuZWxDYXJkOiBSZWFjdC5GQzxMaWJyYXJ5UGFuZWxDYXJkUHJvcHMgJiB7IGNoaWxkcmVuPzogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdIH0+ID0gKHtcbiAgbGlicmFyeVBhbmVsLFxuICBvbkNsaWNrLFxuICBvbkRlbGV0ZSxcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnMsXG59KSA9PiB7XG4gIGNvbnN0IFtzaG93RGVsZXRpb25Nb2RhbCwgc2V0U2hvd0RlbGV0aW9uTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uRGVsZXRlUGFuZWwgPSAoKSA9PiB7XG4gICAgb25EZWxldGU/LihsaWJyYXJ5UGFuZWwpO1xuICAgIHNldFNob3dEZWxldGlvbk1vZGFsKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBwYW5lbFBsdWdpbiA9IGNvbmZpZy5wYW5lbHNbbGlicmFyeVBhbmVsLm1vZGVsLnR5cGVdID8/IGdldFBhbmVsUGx1Z2luTm90Rm91bmQobGlicmFyeVBhbmVsLm1vZGVsLnR5cGUpLm1ldGE7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBhbmVsVHlwZUNhcmRcbiAgICAgICAgaXNDdXJyZW50PXtmYWxzZX1cbiAgICAgICAgdGl0bGU9e2xpYnJhcnlQYW5lbC5uYW1lfVxuICAgICAgICBkZXNjcmlwdGlvbj17bGlicmFyeVBhbmVsLmRlc2NyaXB0aW9ufVxuICAgICAgICBwbHVnaW49e3BhbmVsUGx1Z2lufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrPy4obGlicmFyeVBhbmVsKX1cbiAgICAgICAgb25EZWxldGU9e3Nob3dTZWNvbmRhcnlBY3Rpb25zID8gKCkgPT4gc2V0U2hvd0RlbGV0aW9uTW9kYWwodHJ1ZSkgOiB1bmRlZmluZWR9XG4gICAgICA+XG4gICAgICAgIDxGb2xkZXJMaW5rIGxpYnJhcnlQYW5lbD17bGlicmFyeVBhbmVsfSAvPlxuICAgICAgPC9QYW5lbFR5cGVDYXJkPlxuICAgICAge3Nob3dEZWxldGlvbk1vZGFsICYmIChcbiAgICAgICAgPERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsXG4gICAgICAgICAgbGlicmFyeVBhbmVsPXtsaWJyYXJ5UGFuZWx9XG4gICAgICAgICAgb25Db25maXJtPXtvbkRlbGV0ZVBhbmVsfVxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0U2hvd0RlbGV0aW9uTW9kYWwoZmFsc2UpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBGb2xkZXJMaW5rUHJvcHMge1xuICBsaWJyYXJ5UGFuZWw6IExpYnJhcnlFbGVtZW50RFRPO1xufVxuXG5mdW5jdGlvbiBGb2xkZXJMaW5rKHsgbGlicmFyeVBhbmVsIH06IEZvbGRlckxpbmtQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgaWYgKCFsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJVaWQgJiYgIWxpYnJhcnlQYW5lbC5tZXRhLmZvbGRlck5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghbGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1ldGFDb250YWluZXJ9PlxuICAgICAgICA8SWNvbiBuYW1lPXsnZm9sZGVyJ30gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgPHNwYW4+e2xpYnJhcnlQYW5lbC5tZXRhLmZvbGRlck5hbWV9PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1ldGFDb250YWluZXJ9PlxuICAgICAgPExpbmsgaHJlZj17YC9kYXNoYm9hcmRzL2YvJHtsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJVaWR9YH0+XG4gICAgICAgIDxJY29uIG5hbWU9eydmb2xkZXItdXBsb2FkJ30gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgPHNwYW4+e2xpYnJhcnlQYW5lbC5tZXRhLmZvbGRlck5hbWV9PC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgbWV0YUNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmcm9tLCBtZXJnZSwgb2YsIFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXBUbywgbWVyZ2VNYXAsIHNoYXJlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRlbGV0ZUxpYnJhcnlQYW5lbCBhcyBhcGlEZWxldGVMaWJyYXJ5UGFuZWwsIGdldExpYnJhcnlQYW5lbHMgfSBmcm9tICcuLi8uLi9zdGF0ZS9hcGknO1xuXG5pbXBvcnQgeyBpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgaW5pdFNlYXJjaCwgc2VhcmNoQ29tcGxldGVkIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxudHlwZSBEaXNwYXRjaFJlc3VsdCA9IChkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikgPT4gdm9pZDtcbmludGVyZmFjZSBTZWFyY2hBcmdzIHtcbiAgcGVyUGFnZTogbnVtYmVyO1xuICBwYWdlOiBudW1iZXI7XG4gIHNlYXJjaFN0cmluZzogc3RyaW5nO1xuICBzb3J0RGlyZWN0aW9uPzogc3RyaW5nO1xuICBwYW5lbEZpbHRlcj86IHN0cmluZ1tdO1xuICBmb2xkZXJGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hGb3JMaWJyYXJ5UGFuZWxzKGFyZ3M6IFNlYXJjaEFyZ3MpOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgY29uc3QgZGF0YU9ic2VydmFibGUgPSBmcm9tKFxuICAgICAgZ2V0TGlicmFyeVBhbmVscyh7XG4gICAgICAgIHNlYXJjaFN0cmluZzogYXJncy5zZWFyY2hTdHJpbmcsXG4gICAgICAgIHBlclBhZ2U6IGFyZ3MucGVyUGFnZSxcbiAgICAgICAgcGFnZTogYXJncy5wYWdlLFxuICAgICAgICBleGNsdWRlVWlkOiBhcmdzLmN1cnJlbnRQYW5lbElkLFxuICAgICAgICBzb3J0RGlyZWN0aW9uOiBhcmdzLnNvcnREaXJlY3Rpb24sXG4gICAgICAgIHR5cGVGaWx0ZXI6IGFyZ3MucGFuZWxGaWx0ZXIsXG4gICAgICAgIGZvbGRlckZpbHRlcjogYXJncy5mb2xkZXJGaWx0ZXIsXG4gICAgICB9KVxuICAgICkucGlwZShcbiAgICAgIG1lcmdlTWFwKCh7IHBlclBhZ2UsIGVsZW1lbnRzOiBsaWJyYXJ5UGFuZWxzLCBwYWdlLCB0b3RhbENvdW50IH0pID0+XG4gICAgICAgIG9mKHNlYXJjaENvbXBsZXRlZCh7IGxpYnJhcnlQYW5lbHMsIHBhZ2UsIHBlclBhZ2UsIHRvdGFsQ291bnQgfSkpXG4gICAgICApLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKHNlYXJjaENvbXBsZXRlZCh7IC4uLmluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCBwYWdlOiBhcmdzLnBhZ2UsIHBlclBhZ2U6IGFyZ3MucGVyUGFnZSB9KSk7XG4gICAgICB9KSxcbiAgICAgIGZpbmFsaXplKCgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKSwgLy8gbWFrZSBzdXJlIHdlIHVuc3Vic2NyaWJlXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIHN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICAvLyBJZiA1MG1zIHdpdGhvdXQgYSByZXNwb25zZSBkaXNwYXRjaCBhIGxvYWRpbmcgc3RhdGVcbiAgICAgIC8vIG1hcFRvIHdpbGwgdHJhbnNsYXRlIHRoZSB0aW1lciBldmVudCBpbnRvIGEgbG9hZGluZyBzdGF0ZVxuICAgICAgLy8gdGFrZVVudGlsIHdpbGwgY2FuY2VsIHRoZSB0aW1lciBlbWl0IHdoZW4gZmlyc3QgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgb24gdGhlIGRhdGFPYnNlcnZhYmxlXG4gICAgICBtZXJnZSh0aW1lcig1MCkucGlwZShtYXBUbyhpbml0U2VhcmNoKCkpLCB0YWtlVW50aWwoZGF0YU9ic2VydmFibGUpKSwgZGF0YU9ic2VydmFibGUpLnN1YnNjcmliZShkaXNwYXRjaClcbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGlicmFyeVBhbmVsKHVpZDogc3RyaW5nLCBhcmdzOiBTZWFyY2hBcmdzKTogRGlzcGF0Y2hSZXN1bHQge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwaURlbGV0ZUxpYnJhcnlQYW5lbCh1aWQpO1xuICAgICAgc2VhcmNoRm9yTGlicmFyeVBhbmVscyhhcmdzKShkaXNwYXRjaCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb246IGFueSkge1xuICAgIGlmIChhY3Rpb24gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCk7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb24pO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlIHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGU7XG4gIGxpYnJhcnlQYW5lbHM6IExpYnJhcnlFbGVtZW50RFRPW107XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgcGVyUGFnZTogbnVtYmVyO1xuICBwYWdlOiBudW1iZXI7XG4gIG51bWJlck9mUGFnZXM6IG51bWJlcjtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZTogTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSA9IHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyxcbiAgbGlicmFyeVBhbmVsczogW10sXG4gIHRvdGFsQ291bnQ6IDAsXG4gIHBlclBhZ2U6IDQwLFxuICBwYWdlOiAxLFxuICBudW1iZXJPZlBhZ2VzOiAwLFxuICBjdXJyZW50UGFuZWxJZDogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRTZWFyY2ggPSBjcmVhdGVBY3Rpb24oJ2xpYnJhcnlQYW5lbHMvdmlldy9pbml0U2VhcmNoJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoQ29tcGxldGVkID0gY3JlYXRlQWN0aW9uPFxuICBPbWl0PExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsICdjdXJyZW50UGFuZWxJZCcgfCAnc2VhcmNoU3RyaW5nJyB8ICdsb2FkaW5nU3RhdGUnIHwgJ251bWJlck9mUGFnZXMnPlxuPignbGlicmFyeVBhbmVscy92aWV3L3NlYXJjaENvbXBsZXRlZCcpO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFnZSA9IGNyZWF0ZUFjdGlvbjxQaWNrPExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsICdwYWdlJz4+KCdsaWJyYXJ5UGFuZWxzL3ZpZXcvY2hhbmdlUGFnZScpO1xuXG5leHBvcnQgY29uc3QgbGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyID0gKHN0YXRlOiBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xuICBpZiAoaW5pdFNlYXJjaC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcgfTtcbiAgfVxuXG4gIGlmIChzZWFyY2hDb21wbGV0ZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IHsgbGlicmFyeVBhbmVscywgcGFnZSwgcGVyUGFnZSwgdG90YWxDb3VudCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gcGVyUGFnZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbGlicmFyeVBhbmVscyxcbiAgICAgIHBlclBhZ2UsXG4gICAgICB0b3RhbENvdW50LFxuICAgICAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgIG51bWJlck9mUGFnZXMsXG4gICAgICBwYWdlOiBwYWdlID4gbnVtYmVyT2ZQYWdlcyA/IHBhZ2UgLSAxIDogcGFnZSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKGNoYW5nZVBhZ2UubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdlOiBhY3Rpb24ucGF5bG9hZC5wYWdlIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RhbFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgbXlUYWJsZTogY3NzYFxuICAgICAgbWF4LWhlaWdodDogMjA0cHg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmJvcmRlci5yYWRpdXMuc219O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYmczfTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJnMX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFNlbWlXZWFrfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUubWR9O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIHRoZWFkIHtcbiAgICAgICAgY29sb3I6ICM1MzhhZGU7XG4gICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICAgICAgfVxuXG4gICAgICB0aCxcbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogNnB4IDEzcHg7XG4gICAgICAgIGhlaWdodDogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICAgIH1cblxuICAgICAgdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJnMn07XG4gICAgICB9XG4gICAgYCxcbiAgICBub3RlVGV4dGJveDogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICBgLFxuICAgIHRleHRJbmZvOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFNlbWlXZWFrfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICAgIGAsXG4gICAgZGFzaGJvYXJkU2VhcmNoOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGAsXG4gICAgbW9kYWw6IGNzc2BcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICBgLFxuICAgIG1vZGFsVGV4dDogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaGVhZGluZy5oNH07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCR7dGhlbWUuc3BhY2luZy5kfSAqIDIpO1xuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZy5kfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgQXBwRXZlbnRzLCBHcmFmYW5hVGhlbWUyLCBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgcmVwb3J0SW50ZXJhY3Rpb24gfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRmllbGQsXG4gIEZpbGVVcGxvYWQsXG4gIEZvcm0sXG4gIEhvcml6b250YWxHcm91cCxcbiAgSW5wdXQsXG4gIFNwaW5uZXIsXG4gIHN0eWxlc0ZhY3RvcnksXG4gIFRleHRBcmVhLFxuICBUaGVtZWFibGUyLFxuICBWZXJ0aWNhbEdyb3VwLFxuICB3aXRoVGhlbWUyLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBjbGVhblVwQWN0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9hY3Rpb25zL2NsZWFuVXAnO1xuXG5pbXBvcnQgeyBJbXBvcnREYXNoYm9hcmRPdmVydmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9JbXBvcnREYXNoYm9hcmRPdmVydmlldyc7XG5pbXBvcnQgeyBmZXRjaEdjb21EYXNoYm9hcmQsIGltcG9ydERhc2hib2FyZEpzb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgdmFsaWRhdGVEYXNoYm9hcmRKc29uLCB2YWxpZGF0ZUdjb21EYXNoYm9hcmQgfSBmcm9tICcuL3V0aWxzL3ZhbGlkYXRpb24nO1xuXG50eXBlIERhc2hib2FyZEltcG9ydFBhZ2VSb3V0ZVNlYXJjaFBhcmFtcyA9IHtcbiAgZ2NvbURhc2hib2FyZElkPzogc3RyaW5nO1xufTtcblxudHlwZSBPd25Qcm9wcyA9IFRoZW1lYWJsZTIgJiBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7fSwgRGFzaGJvYXJkSW1wb3J0UGFnZVJvdXRlU2VhcmNoUGFyYW1zPjtcblxuY29uc3QgSU1QT1JUX1NUQVJURURfRVZFTlRfTkFNRSA9ICdkYXNoYm9hcmRfaW1wb3J0X2xvYWRlZCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnaW1wb3J0JywgdW5kZWZpbmVkLCB0cnVlKSxcbiAgbG9hZGluZ1N0YXRlOiBzdGF0ZS5pbXBvcnREYXNoYm9hcmQuc3RhdGUsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBmZXRjaEdjb21EYXNoYm9hcmQsXG4gIGltcG9ydERhc2hib2FyZEpzb24sXG4gIGNsZWFuVXBBY3Rpb24sXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxudHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmNsYXNzIFVudGhlbWVkRGFzaGJvYXJkSW1wb3J0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBnY29tRGFzaGJvYXJkSWQgfSA9IHRoaXMucHJvcHMucXVlcnlQYXJhbXM7XG4gICAgaWYgKGdjb21EYXNoYm9hcmRJZCkge1xuICAgICAgdGhpcy5nZXRHY29tRGFzaGJvYXJkKHsgZ2NvbURhc2hib2FyZDogZ2NvbURhc2hib2FyZElkIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuY2xlYW5VcEFjdGlvbih7IHN0YXRlU2VsZWN0b3I6IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUuaW1wb3J0RGFzaGJvYXJkIH0pO1xuICB9XG5cbiAgb25GaWxlVXBsb2FkID0gKGV2ZW50OiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICByZXBvcnRJbnRlcmFjdGlvbihJTVBPUlRfU1RBUlRFRF9FVkVOVF9OQU1FLCB7XG4gICAgICBpbXBvcnRfc291cmNlOiAnanNvbl91cGxvYWRlZCcsXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGltcG9ydERhc2hib2FyZEpzb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlsZXMgJiYgZXZlbnQuY3VycmVudFRhcmdldC5maWxlcy5sZW5ndGggPiAwICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuZmlsZXNbMF07XG5cbiAgICBpZiAoZmlsZSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGNvbnN0IHJlYWRlck9uTG9hZCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChlOiBhbnkpID0+IHtcbiAgICAgICAgICBsZXQgZGFzaGJvYXJkOiBhbnk7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhc2hib2FyZCA9IEpTT04ucGFyc2UoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYXBwRXZlbnRzLmVtaXQoQXBwRXZlbnRzLmFsZXJ0RXJyb3IsIFtcbiAgICAgICAgICAgICAgJ0ltcG9ydCBmYWlsZWQnLFxuICAgICAgICAgICAgICAnSlNPTiAtPiBKUyBTZXJpYWxpemF0aW9uIGZhaWxlZDogJyArIGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1wb3J0RGFzaGJvYXJkSnNvbihkYXNoYm9hcmQpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSByZWFkZXJPbkxvYWQoKTtcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgIH1cbiAgfTtcblxuICBnZXREYXNoYm9hcmRGcm9tSnNvbiA9IChmb3JtRGF0YTogeyBkYXNoYm9hcmRKc29uOiBzdHJpbmcgfSkgPT4ge1xuICAgIHJlcG9ydEludGVyYWN0aW9uKElNUE9SVF9TVEFSVEVEX0VWRU5UX05BTUUsIHtcbiAgICAgIGltcG9ydF9zb3VyY2U6ICdqc29uX3Bhc3RlZCcsXG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLmltcG9ydERhc2hib2FyZEpzb24oSlNPTi5wYXJzZShmb3JtRGF0YS5kYXNoYm9hcmRKc29uKSk7XG4gIH07XG5cbiAgZ2V0R2NvbURhc2hib2FyZCA9IChmb3JtRGF0YTogeyBnY29tRGFzaGJvYXJkOiBzdHJpbmcgfSkgPT4ge1xuICAgIHJlcG9ydEludGVyYWN0aW9uKElNUE9SVF9TVEFSVEVEX0VWRU5UX05BTUUsIHtcbiAgICAgIGltcG9ydF9zb3VyY2U6ICdnY29tJyxcbiAgICB9KTtcblxuICAgIGxldCBkYXNoYm9hcmRJZDtcbiAgICBjb25zdCBtYXRjaCA9IC8oXlxcZCskKXxkYXNoYm9hcmRzXFwvKFxcZCspLy5leGVjKGZvcm1EYXRhLmdjb21EYXNoYm9hcmQpO1xuICAgIGlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xuICAgICAgZGFzaGJvYXJkSWQgPSBtYXRjaFsxXTtcbiAgICB9IGVsc2UgaWYgKG1hdGNoICYmIG1hdGNoWzJdKSB7XG4gICAgICBkYXNoYm9hcmRJZCA9IG1hdGNoWzJdO1xuICAgIH1cblxuICAgIGlmIChkYXNoYm9hcmRJZCkge1xuICAgICAgdGhpcy5wcm9wcy5mZXRjaEdjb21EYXNoYm9hcmQoZGFzaGJvYXJkSWQpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXJJbXBvcnRGb3JtKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IGltcG9ydFN0eWxlcyh0aGlzLnByb3BzLnRoZW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgPEZpbGVVcGxvYWQgYWNjZXB0PVwiYXBwbGljYXRpb24vanNvblwiIG9uRmlsZVVwbG9hZD17dGhpcy5vbkZpbGVVcGxvYWR9PlxuICAgICAgICAgICAgVXBsb2FkIEpTT04gZmlsZVxuICAgICAgICAgIDwvRmlsZVVwbG9hZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5nZXRHY29tRGFzaGJvYXJkfSBkZWZhdWx0VmFsdWVzPXt7IGdjb21EYXNoYm9hcmQ6ICcnIH19PlxuICAgICAgICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMgfSkgPT4gKFxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkltcG9ydCB2aWEgZ3JhZmFuYS5jb21cIlxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmdjb21EYXNoYm9hcmR9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5nY29tRGFzaGJvYXJkICYmIGVycm9ycy5nY29tRGFzaGJvYXJkLm1lc3NhZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwidXJsLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiR3JhZmFuYS5jb20gZGFzaGJvYXJkIFVSTCBvciBJRFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2djb21EYXNoYm9hcmQnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnQSBHcmFmYW5hIGRhc2hib2FyZCBVUkwgb3IgSUQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGVHY29tRGFzaGJvYXJkLFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXs8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2FkPC9CdXR0b24+fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5nZXREYXNoYm9hcmRGcm9tSnNvbn0gZGVmYXVsdFZhbHVlcz17eyBkYXNoYm9hcmRKc29uOiAnJyB9fT5cbiAgICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1wb3J0IHZpYSBwYW5lbCBqc29uXCJcbiAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmRhc2hib2FyZEpzb259XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmRhc2hib2FyZEpzb24gJiYgZXJyb3JzLmRhc2hib2FyZEpzb24ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdkYXNoYm9hcmRKc29uJywge1xuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnTmVlZCBhIGRhc2hib2FyZCBKU09OIG1vZGVsJyxcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGVEYXNoYm9hcmRKc29uLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLkRhc2hib2FyZEltcG9ydFBhZ2UudGV4dGFyZWF9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGFzaGJvYXJkLWpzb24tdGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuRGFzaGJvYXJkSW1wb3J0UGFnZS5zdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgTG9hZFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nU3RhdGUsIG5hdk1vZGVsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICAgIHtsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxWZXJ0aWNhbEdyb3VwIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cCBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT17MzJ9IC8+XG4gICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgICAgICl9XG4gICAgICAgICAge1tMb2FkaW5nU3RhdGUuRXJyb3IsIExvYWRpbmdTdGF0ZS5Ob3RTdGFydGVkXS5pbmNsdWRlcyhsb2FkaW5nU3RhdGUpICYmIHRoaXMucmVuZGVySW1wb3J0Rm9ybSgpfVxuICAgICAgICAgIHtsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Eb25lICYmIDxJbXBvcnREYXNoYm9hcmRPdmVydmlldyAvPn1cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRGFzaGJvYXJkSW1wb3J0VW5Db25uZWN0ZWQgPSB3aXRoVGhlbWUyKFVudGhlbWVkRGFzaGJvYXJkSW1wb3J0KTtcbmNvbnN0IERhc2hib2FyZEltcG9ydCA9IGNvbm5lY3RvcihEYXNoYm9hcmRJbXBvcnRVbkNvbm5lY3RlZCk7XG5EYXNoYm9hcmRJbXBvcnQuZGlzcGxheU5hbWUgPSAnRGFzaGJvYXJkSW1wb3J0JztcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZEltcG9ydDtcblxuY29uc3QgaW1wb3J0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBvcHRpb246IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gICAgYCxcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEV4cHJlc3Npb25EYXRhc291cmNlUmVmIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMvdXRpbHMvRGF0YVNvdXJjZVdpdGhCYWNrZW5kJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRmllbGQsXG4gIEZvcm1BUEksXG4gIEZvcm1GaWVsZEVycm9ycyxcbiAgRm9ybXNPblN1Ym1pdCxcbiAgSG9yaXpvbnRhbEdyb3VwLFxuICBJbnB1dCxcbiAgSW5wdXRDb250cm9sLFxuICBMZWdlbmQsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEZvbGRlclBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L0ZvbGRlclBpY2tlcic7XG5cbmltcG9ydCB7XG4gIERhc2hib2FyZElucHV0LFxuICBEYXNoYm9hcmRJbnB1dHMsXG4gIERhdGFTb3VyY2VJbnB1dCxcbiAgSW1wb3J0RGFzaGJvYXJkRFRPLFxuICBMaWJyYXJ5UGFuZWxJbnB1dFN0YXRlLFxufSBmcm9tICcuLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyB2YWxpZGF0ZVRpdGxlLCB2YWxpZGF0ZVVpZCB9IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRpb24nO1xuXG5pbXBvcnQgeyBJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdCB9IGZyb20gJy4vSW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBQaWNrPEZvcm1BUEk8SW1wb3J0RGFzaGJvYXJkRFRPPiwgJ3JlZ2lzdGVyJyB8ICdlcnJvcnMnIHwgJ2NvbnRyb2wnIHwgJ2dldFZhbHVlcycgfCAnd2F0Y2gnPiB7XG4gIHVpZFJlc2V0OiBib29sZWFuO1xuICBpbnB1dHM6IERhc2hib2FyZElucHV0cztcbiAgaW5pdGlhbEZvbGRlcklkOiBudW1iZXI7XG5cbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG4gIG9uVWlkUmVzZXQ6ICgpID0+IHZvaWQ7XG4gIG9uU3VibWl0OiBGb3Jtc09uU3VibWl0PEltcG9ydERhc2hib2FyZERUTz47XG59XG5cbmV4cG9ydCBjb25zdCBJbXBvcnREYXNoYm9hcmRGb3JtOiBGQzxQcm9wcz4gPSAoe1xuICByZWdpc3RlcixcbiAgZXJyb3JzLFxuICBjb250cm9sLFxuICBnZXRWYWx1ZXMsXG4gIHVpZFJlc2V0LFxuICBpbnB1dHMsXG4gIGluaXRpYWxGb2xkZXJJZCxcbiAgb25VaWRSZXNldCxcbiAgb25DYW5jZWwsXG4gIG9uU3VibWl0LFxuICB3YXRjaCxcbn0pID0+IHtcbiAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB3YXRjaERhdGFTb3VyY2VzID0gd2F0Y2goJ2RhdGFTb3VyY2VzJyk7XG4gIGNvbnN0IHdhdGNoRm9sZGVyID0gd2F0Y2goJ2ZvbGRlcicpO1xuXG4gIC8qXG4gICAgVGhpcyB1c2VFZmZlY3QgaXMgbmVlZGVkIGZvciBvdmVyd3JpdGluZyBhIGRhc2hib2FyZC4gSXRcbiAgICBzdWJtaXRzIHRoZSBmb3JtIGV2ZW4gaWYgdGhlcmUncyB2YWxpZGF0aW9uIGVycm9ycyBvbiB0aXRsZSBvciB1aWQuXG4gICovXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzU3VibWl0dGVkICYmIChlcnJvcnMudGl0bGUgfHwgZXJyb3JzLnVpZCkpIHtcbiAgICAgIG9uU3VibWl0KGdldFZhbHVlcygpLCB7fSBhcyBhbnkpO1xuICAgIH1cbiAgfSwgW2Vycm9ycywgZ2V0VmFsdWVzLCBpc1N1Ym1pdHRlZCwgb25TdWJtaXRdKTtcbiAgY29uc3QgbmV3TGlicmFyeVBhbmVscyA9IGlucHV0cz8ubGlicmFyeVBhbmVscz8uZmlsdGVyKChpKSA9PiBpLnN0YXRlID09PSBMaWJyYXJ5UGFuZWxJbnB1dFN0YXRlLk5ldykgPz8gW107XG4gIGNvbnN0IGV4aXN0aW5nTGlicmFyeVBhbmVscyA9IGlucHV0cz8ubGlicmFyeVBhbmVscz8uZmlsdGVyKChpKSA9PiBpLnN0YXRlID09PSBMaWJyYXJ5UGFuZWxJbnB1dFN0YXRlLkV4aXRzKSA/PyBbXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGVnZW5kPk9wdGlvbnM8L0xlZ2VuZD5cbiAgICAgIDxGaWVsZCBsYWJlbD1cIk5hbWVcIiBpbnZhbGlkPXshIWVycm9ycy50aXRsZX0gZXJyb3I9e2Vycm9ycy50aXRsZSAmJiBlcnJvcnMudGl0bGUubWVzc2FnZX0+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHsuLi5yZWdpc3RlcigndGl0bGUnLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogJ05hbWUgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGFzeW5jICh2OiBzdHJpbmcpID0+IGF3YWl0IHZhbGlkYXRlVGl0bGUodiwgZ2V0VmFsdWVzKCkuZm9sZGVyLmlkKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLkltcG9ydERhc2hib2FyZEZvcm0ubmFtZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQgbGFiZWw9XCJGb2xkZXJcIj5cbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxGb2xkZXJQaWNrZXIgey4uLmZpZWxkfSBlbmFibGVDcmVhdGVOZXcgaW5pdGlhbEZvbGRlcklkPXtpbml0aWFsRm9sZGVySWR9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZm9sZGVyXCJcbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZFxuICAgICAgICBsYWJlbD1cIlVuaXF1ZSBpZGVudGlmaWVyIChVSUQpXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgdW5pcXVlIGlkZW50aWZpZXIgKFVJRCkgb2YgYSBkYXNoYm9hcmQgY2FuIGJlIHVzZWQgZm9yIHVuaXF1ZWx5IGlkZW50aWZ5IGEgZGFzaGJvYXJkIGJldHdlZW4gbXVsdGlwbGUgR3JhZmFuYSBpbnN0YWxscy5cbiAgICAgICAgICAgICAgICBUaGUgVUlEIGFsbG93cyBoYXZpbmcgY29uc2lzdGVudCBVUkxzIGZvciBhY2Nlc3NpbmcgZGFzaGJvYXJkcyBzbyBjaGFuZ2luZyB0aGUgdGl0bGUgb2YgYSBkYXNoYm9hcmQgd2lsbCBub3QgYnJlYWsgYW55XG4gICAgICAgICAgICAgICAgYm9va21hcmtlZCBsaW5rcyB0byB0aGF0IGRhc2hib2FyZC5cIlxuICAgICAgICBpbnZhbGlkPXshIWVycm9ycy51aWR9XG4gICAgICAgIGVycm9yPXtlcnJvcnMudWlkICYmIGVycm9ycy51aWQubWVzc2FnZX1cbiAgICAgID5cbiAgICAgICAgPD5cbiAgICAgICAgICB7IXVpZFJlc2V0ID8gKFxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigndWlkJywgeyB2YWxpZGF0ZTogYXN5bmMgKHY6IHN0cmluZykgPT4gYXdhaXQgdmFsaWRhdGVVaWQodikgfSl9XG4gICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9eyF1aWRSZXNldCAmJiA8QnV0dG9uIG9uQ2xpY2s9e29uVWlkUmVzZXR9PkNoYW5nZSB1aWQ8L0J1dHRvbj59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKCd1aWQnLCB7IHJlcXVpcmVkOiB0cnVlLCB2YWxpZGF0ZTogYXN5bmMgKHY6IHN0cmluZykgPT4gYXdhaXQgdmFsaWRhdGVVaWQodikgfSl9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAge2lucHV0cy5kYXRhU291cmNlcyAmJlxuICAgICAgICBpbnB1dHMuZGF0YVNvdXJjZXMubWFwKChpbnB1dDogRGF0YVNvdXJjZUlucHV0LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgaWYgKGlucHV0LnBsdWdpbklkID09PSBFeHByZXNzaW9uRGF0YXNvdXJjZVJlZi50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZGF0YVNvdXJjZU9wdGlvbiA9IGBkYXRhU291cmNlc1ske2luZGV4fV1gO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB3YXRjaERhdGFTb3VyY2VzID8/IFtdO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9e2lucHV0LmxhYmVsfVxuICAgICAgICAgICAgICBrZXk9e2RhdGFTb3VyY2VPcHRpb259XG4gICAgICAgICAgICAgIGludmFsaWQ9e2Vycm9ycy5kYXRhU291cmNlcyAmJiAhIWVycm9ycy5kYXRhU291cmNlc1tpbmRleF19XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZGF0YVNvdXJjZXMgJiYgZXJyb3JzLmRhdGFTb3VyY2VzW2luZGV4XSAmJiAnQSBkYXRhIHNvdXJjZSBpcyByZXF1aXJlZCd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICBuYW1lPXtkYXRhU291cmNlT3B0aW9uIGFzIGFueX1cbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgIG5vRGVmYXVsdD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2lucHV0LmluZm99XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbklkPXtpbnB1dC5wbHVnaW5JZH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudFtpbmRleF0/LnVpZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAge2lucHV0cy5jb25zdGFudHMgJiZcbiAgICAgICAgaW5wdXRzLmNvbnN0YW50cy5tYXAoKGlucHV0OiBEYXNoYm9hcmRJbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb25zdGFudEluZGV4ID0gYGNvbnN0YW50c1ske2luZGV4fV1gO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9e2lucHV0LmxhYmVsfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmNvbnN0YW50cyAmJiBlcnJvcnMuY29uc3RhbnRzW2luZGV4XSAmJiBgJHtpbnB1dC5sYWJlbH0gbmVlZHMgYSB2YWx1ZWB9XG4gICAgICAgICAgICAgIGludmFsaWQ9e2Vycm9ycy5jb25zdGFudHMgJiYgISFlcnJvcnMuY29uc3RhbnRzW2luZGV4XX1cbiAgICAgICAgICAgICAga2V5PXtjb25zdGFudEluZGV4fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXQgey4uLnJlZ2lzdGVyKGNvbnN0YW50SW5kZXggYXMgYW55LCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBkZWZhdWx0VmFsdWU9e2lucHV0LnZhbHVlfSAvPlxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDxJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdFxuICAgICAgICBpbnB1dHM9e25ld0xpYnJhcnlQYW5lbHN9XG4gICAgICAgIGxhYmVsPVwiTmV3IGxpYnJhcnkgcGFuZWxzXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJMaXN0IG9mIG5ldyBsaWJyYXJ5IHBhbmVscyB0aGF0IHdpbGwgZ2V0IGltcG9ydGVkLlwiXG4gICAgICAgIGZvbGRlck5hbWU9e3dhdGNoRm9sZGVyLnRpdGxlfVxuICAgICAgLz5cbiAgICAgIDxJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdFxuICAgICAgICBpbnB1dHM9e2V4aXN0aW5nTGlicmFyeVBhbmVsc31cbiAgICAgICAgbGFiZWw9XCJFeGlzdGluZyBsaWJyYXJ5IHBhbmVsc1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiTGlzdCBvZiBleGlzdGluZyBsaWJyYXJ5IHBhbmVscy4gVGhlc2UgcGFuZWxzIGFyZSBub3QgYWZmZWN0ZWQgYnkgdGhlIGltcG9ydC5cIlxuICAgICAgICBmb2xkZXJOYW1lPXt3YXRjaEZvbGRlci50aXRsZX1cbiAgICAgIC8+XG4gICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLkltcG9ydERhc2hib2FyZEZvcm0uc3VibWl0fVxuICAgICAgICAgIHZhcmlhbnQ9e2dldEJ1dHRvblZhcmlhbnQoZXJyb3JzKX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnZXRCdXR0b25UZXh0KGVycm9ycyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJyZXNldFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkNhbmNlbH0+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgPC8+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRCdXR0b25WYXJpYW50KGVycm9yczogRm9ybUZpZWxkRXJyb3JzPEltcG9ydERhc2hib2FyZERUTz4pIHtcbiAgcmV0dXJuIGVycm9ycyAmJiAoZXJyb3JzLnRpdGxlIHx8IGVycm9ycy51aWQpID8gJ2Rlc3RydWN0aXZlJyA6ICdwcmltYXJ5Jztcbn1cblxuZnVuY3Rpb24gZ2V0QnV0dG9uVGV4dChlcnJvcnM6IEZvcm1GaWVsZEVycm9yczxJbXBvcnREYXNoYm9hcmREVE8+KSB7XG4gIHJldHVybiBlcnJvcnMgJiYgKGVycm9ycy50aXRsZSB8fCBlcnJvcnMudWlkKSA/ICdJbXBvcnQgKE92ZXJ3cml0ZSknIDogJ0ltcG9ydCc7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IExpYnJhcnlQYW5lbENhcmQgfSBmcm9tICcuLi8uLi9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbENhcmQvTGlicmFyeVBhbmVsQ2FyZCc7XG5pbXBvcnQgeyBMaWJyYXJ5UGFuZWxJbnB1dCwgTGlicmFyeVBhbmVsSW5wdXRTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL3JlZHVjZXJzJztcblxuaW50ZXJmYWNlIEltcG9ydERhc2hib2FyZExpYnJhcnlQYW5lbHNMaXN0UHJvcHMge1xuICBpbnB1dHM6IExpYnJhcnlQYW5lbElucHV0W107XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGZvbGRlck5hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdCh7XG4gIGlucHV0cyxcbiAgbGFiZWwsXG4gIGRlc2NyaXB0aW9uLFxuICBmb2xkZXJOYW1lLFxufTogSW1wb3J0RGFzaGJvYXJkTGlicmFyeVBhbmVsc0xpc3RQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgaWYgKCFCb29sZWFuKGlucHV0cz8ubGVuZ3RoKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwYWNlcn0+XG4gICAgICA8RmllbGQgbGFiZWw9e2xhYmVsfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259PlxuICAgICAgICA8PlxuICAgICAgICAgIHtpbnB1dHMubWFwKChpbnB1dCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpYnJhcnlQYW5lbEluZGV4ID0gYGVsZW1lbnRzWyR7aW5kZXh9XWA7XG4gICAgICAgICAgICBjb25zdCBsaWJyYXJ5UGFuZWwgPVxuICAgICAgICAgICAgICBpbnB1dC5zdGF0ZSA9PT0gTGlicmFyeVBhbmVsSW5wdXRTdGF0ZS5OZXdcbiAgICAgICAgICAgICAgICA/IHsgLi4uaW5wdXQubW9kZWwsIG1ldGE6IHsgLi4uaW5wdXQubW9kZWwubWV0YSwgZm9sZGVyTmFtZTogZm9sZGVyTmFtZSA/PyAnR2VuZXJhbCcgfSB9XG4gICAgICAgICAgICAgICAgOiB7IC4uLmlucHV0Lm1vZGVsIH07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19IGtleT17bGlicmFyeVBhbmVsSW5kZXh9PlxuICAgICAgICAgICAgICAgIDxMaWJyYXJ5UGFuZWxDYXJkIGxpYnJhcnlQYW5lbD17bGlicmFyeVBhbmVsfSBvbkNsaWNrPXsoKSA9PiB1bmRlZmluZWR9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICA8L0ZpZWxkPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBzcGFjZXI6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICBpdGVtOiBjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlLCByZXBvcnRJbnRlcmFjdGlvbiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRm9ybSwgTGVnZW5kIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNsZWFyTG9hZGVkRGFzaGJvYXJkLCBpbXBvcnREYXNoYm9hcmQgfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IERhc2hib2FyZFNvdXJjZSwgSW1wb3J0RGFzaGJvYXJkRFRPIH0gZnJvbSAnLi4vc3RhdGUvcmVkdWNlcnMnO1xuXG5pbXBvcnQgeyBJbXBvcnREYXNoYm9hcmRGb3JtIH0gZnJvbSAnLi9JbXBvcnREYXNoYm9hcmRGb3JtJztcblxuY29uc3QgSU1QT1JUX0ZJTklTSEVEX0VWRU5UX05BTUUgPSAnZGFzaGJvYXJkX2ltcG9ydF9pbXBvcnRlZCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4ge1xuICBjb25zdCBzZWFyY2hPYmogPSBsb2NhdGlvblNlcnZpY2UuZ2V0U2VhcmNoT2JqZWN0KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXNoYm9hcmQ6IHN0YXRlLmltcG9ydERhc2hib2FyZC5kYXNoYm9hcmQsXG4gICAgbWV0YTogc3RhdGUuaW1wb3J0RGFzaGJvYXJkLm1ldGEsXG4gICAgc291cmNlOiBzdGF0ZS5pbXBvcnREYXNoYm9hcmQuc291cmNlLFxuICAgIGlucHV0czogc3RhdGUuaW1wb3J0RGFzaGJvYXJkLmlucHV0cyxcbiAgICBmb2xkZXI6IHNlYXJjaE9iai5mb2xkZXJJZCA/IHsgaWQ6IE51bWJlcihzZWFyY2hPYmouZm9sZGVySWQpIH0gOiB7IGlkOiAwIH0sXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGNsZWFyTG9hZGVkRGFzaGJvYXJkLFxuICBpbXBvcnREYXNoYm9hcmQsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxudHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB1aWRSZXNldDogYm9vbGVhbjtcbn1cblxuY2xhc3MgSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXdVbkNvbm5lY3RlZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICB1aWRSZXNldDogZmFsc2UsXG4gIH07XG5cbiAgb25TdWJtaXQgPSAoZm9ybTogSW1wb3J0RGFzaGJvYXJkRFRPKSA9PiB7XG4gICAgcmVwb3J0SW50ZXJhY3Rpb24oSU1QT1JUX0ZJTklTSEVEX0VWRU5UX05BTUUpO1xuXG4gICAgdGhpcy5wcm9wcy5pbXBvcnREYXNoYm9hcmQoZm9ybSk7XG4gIH07XG5cbiAgb25DYW5jZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5jbGVhckxvYWRlZERhc2hib2FyZCgpO1xuICB9O1xuXG4gIG9uVWlkUmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVpZFJlc2V0OiB0cnVlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhc2hib2FyZCwgaW5wdXRzLCBtZXRhLCBzb3VyY2UsIGZvbGRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHVpZFJlc2V0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtzb3VyY2UgPT09IERhc2hib2FyZFNvdXJjZS5HY29tICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzI0cHgnIH19PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExlZ2VuZD5cbiAgICAgICAgICAgICAgICBJbXBvcnRpbmcgZGFzaGJvYXJkIGZyb217JyAnfVxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9ncmFmYW5hLmNvbS9kYXNoYm9hcmRzLyR7ZGFzaGJvYXJkLmduZXRJZH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgR3JhZmFuYS5jb21cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGVnZW5kPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+UHVibGlzaGVkIGJ5PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD57bWV0YS5vcmdOYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+VXBkYXRlZCBvbjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e2RhdGVUaW1lRm9ybWF0KG1ldGEudXBkYXRlZEF0KX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e3sgLi4uZGFzaGJvYXJkLCBjb25zdGFudHM6IFtdLCBkYXRhU291cmNlczogW10sIGVsZW1lbnRzOiBbXSwgZm9sZGVyOiBmb2xkZXIgfX1cbiAgICAgICAgICB2YWxpZGF0ZU9uTW91bnRcbiAgICAgICAgICB2YWxpZGF0ZUZpZWxkc09uTW91bnQ9e1sndGl0bGUnLCAndWlkJ119XG4gICAgICAgICAgdmFsaWRhdGVPbj1cIm9uQ2hhbmdlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzLCBjb250cm9sLCB3YXRjaCwgZ2V0VmFsdWVzIH0pID0+IChcbiAgICAgICAgICAgIDxJbXBvcnREYXNoYm9hcmRGb3JtXG4gICAgICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIGdldFZhbHVlcz17Z2V0VmFsdWVzfVxuICAgICAgICAgICAgICB1aWRSZXNldD17dWlkUmVzZXR9XG4gICAgICAgICAgICAgIGlucHV0cz17aW5wdXRzfVxuICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5vbkNhbmNlbH1cbiAgICAgICAgICAgICAgb25VaWRSZXNldD17dGhpcy5vblVpZFJlc2V0fVxuICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cbiAgICAgICAgICAgICAgd2F0Y2g9e3dhdGNofVxuICAgICAgICAgICAgICBpbml0aWFsRm9sZGVySWQ9e2ZvbGRlci5pZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXcgPSBjb25uZWN0b3IoSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXdVbkNvbm5lY3RlZCk7XG5JbXBvcnREYXNoYm9hcmRPdmVydmlldy5kaXNwbGF5TmFtZSA9ICdJbXBvcnREYXNoYm9hcmRPdmVydmlldyc7XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IHZhbGlkYXRpb25TcnYgfSBmcm9tICcuLi9zZXJ2aWNlcy9WYWxpZGF0aW9uU3J2JztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRGFzaGJvYXJkSnNvbiA9IChqc29uOiBzdHJpbmcpID0+IHtcbiAgdHJ5IHtcbiAgICBKU09OLnBhcnNlKGpzb24pO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnTm90IHZhbGlkIEpTT04nO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVHY29tRGFzaGJvYXJkID0gKGdjb21EYXNoYm9hcmQ6IHN0cmluZykgPT4ge1xuICAvLyBGcm9tIERhc2hib2FyZEltcG9ydEN0cmxcbiAgY29uc3QgbWF0Y2ggPSAvKF5cXGQrJCl8ZGFzaGJvYXJkc1xcLyhcXGQrKS8uZXhlYyhnY29tRGFzaGJvYXJkKTtcblxuICByZXR1cm4gbWF0Y2ggJiYgKG1hdGNoWzFdIHx8IG1hdGNoWzJdKSA/IHRydWUgOiAnQ291bGQgbm90IGZpbmQgYSB2YWxpZCBHcmFmYW5hLmNvbSBJRCc7XG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVUaXRsZSA9IChuZXdUaXRsZTogc3RyaW5nLCBmb2xkZXJJZDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiB2YWxpZGF0aW9uU3J2XG4gICAgLnZhbGlkYXRlTmV3RGFzaGJvYXJkTmFtZShmb2xkZXJJZCwgbmV3VGl0bGUpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBpZiAoZXJyb3IudHlwZSA9PT0gJ0VYSVNUSU5HJykge1xuICAgICAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVVpZCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBnZXRCYWNrZW5kU3J2KClcbiAgICAuZ2V0KGAvYXBpL2Rhc2hib2FyZHMvdWlkLyR7dmFsdWV9YClcbiAgICAudGhlbigoZXhpc3RpbmdEYXNoYm9hcmQpID0+IHtcbiAgICAgIHJldHVybiBgRGFzaGJvYXJkIG5hbWVkICcke2V4aXN0aW5nRGFzaGJvYXJkPy5kYXNoYm9hcmQudGl0bGV9JyBpbiBmb2xkZXIgJyR7ZXhpc3RpbmdEYXNoYm9hcmQ/Lm1ldGEuZm9sZGVyVGl0bGV9JyBoYXMgdGhlIHNhbWUgVUlEYDtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGVycm9yLmlzSGFuZGxlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaXNVbnNpZ25lZFBsdWdpblNpZ25hdHVyZSwgUGFuZWxQbHVnaW5NZXRhLCBQbHVnaW5TdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBJY29uQnV0dG9uLCBQbHVnaW5TaWduYXR1cmVCYWRnZSwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFBsdWdpblN0YXRlSW5mbyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNDdXJyZW50OiBib29sZWFuO1xuICBwbHVnaW46IFBhbmVsUGx1Z2luTWV0YTtcbiAgdGl0bGU6IHN0cmluZztcbiAgb25DbGljazogTW91c2VFdmVudEhhbmRsZXI8SFRNTERpdkVsZW1lbnQ+O1xuICBvbkRlbGV0ZT86ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgc2hvd0JhZGdlPzogYm9vbGVhbjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbFR5cGVDYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBpc0N1cnJlbnQsXG4gIHRpdGxlLFxuICBwbHVnaW4sXG4gIG9uQ2xpY2ssXG4gIG9uRGVsZXRlLFxuICBkaXNhYmxlZCxcbiAgc2hvd0JhZGdlLFxuICBkZXNjcmlwdGlvbixcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgY3NzQ2xhc3MgPSBjeCh7XG4gICAgW3N0eWxlcy5pdGVtXTogdHJ1ZSxcbiAgICBbc3R5bGVzLmRpc2FibGVkXTogZGlzYWJsZWQgfHwgcGx1Z2luLnN0YXRlID09PSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkLFxuICAgIFtzdHlsZXMuY3VycmVudF06IGlzQ3VycmVudCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUGx1Z2luVmlzdWFsaXphdGlvbi5pdGVtKHBsdWdpbi5uYW1lKX1cbiAgICAgIG9uQ2xpY2s9e2Rpc2FibGVkID8gdW5kZWZpbmVkIDogb25DbGlja31cbiAgICAgIHRpdGxlPXtpc0N1cnJlbnQgPyAnQ2xpY2sgYWdhaW4gdG8gY2xvc2UgdGhpcyBzZWN0aW9uJyA6IHBsdWdpbi5uYW1lfVxuICAgID5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9e3BsdWdpbi5pbmZvLmxvZ29zLnNtYWxsfSBhbHQ9XCJcIiAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW1Db250ZW50fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dGl0bGV9PC9kaXY+XG4gICAgICAgIHtkZXNjcmlwdGlvbiA/IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9zcGFuPiA6IG51bGx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAge3Nob3dCYWRnZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYmFkZ2UsIGRpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZCl9PlxuICAgICAgICAgIDxQYW5lbFBsdWdpbkJhZGdlIHBsdWdpbj17cGx1Z2lufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b25EZWxldGUgJiYgKFxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG5hbWU9XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb25EZWxldGUoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUJ1dHRvbn1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIGJ1dHRvbiBvbiBwYW5lbCB0eXBlIGNhcmRcIlxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhbmVsVHlwZUNhcmQuZGlzcGxheU5hbWUgPSAnUGFuZWxUeXBlQ2FyZCc7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGl0ZW06IGNzc2BcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgICAgYm94LXNoYWRvdzogJHt0aGVtZS5zaGFkb3dzLnoxfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiAke3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ2JhY2tncm91bmQnXSwge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnQsXG4gICAgICB9KX07XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5lbXBoYXNpemUodGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5LCAwLjAzKX07XG4gICAgICB9XG4gICAgYCxcbiAgICBpdGVtQ29udGVudDogY3NzYFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLCAxKX07XG4gICAgYCxcbiAgICBjdXJyZW50OiBjc3NgXG4gICAgICBsYWJlbDogY3VycmVudFZpc3VhbGl6YXRpb25JdGVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMucHJpbWFyeS5ib3JkZXJ9O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYWN0aW9uLnNlbGVjdGVkfTtcbiAgICBgLFxuICAgIGRpc2FibGVkOiBjc3NgXG4gICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGAsXG4gICAgbmFtZTogY3NzYFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW19O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBkZXNjcmlwdGlvbjogY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogNC41ZW07XG4gICAgYCxcbiAgICBpbWc6IGNzc2BcbiAgICAgIG1heC1oZWlnaHQ6IDM4cHg7XG4gICAgICB3aWR0aDogMzhweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gICAgYmFkZ2U6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgYCxcbiAgICBkZWxldGVCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGAsXG4gIH07XG59O1xuXG5pbnRlcmZhY2UgUGFuZWxQbHVnaW5CYWRnZVByb3BzIHtcbiAgcGx1Z2luOiBQYW5lbFBsdWdpbk1ldGE7XG59XG5cbmNvbnN0IFBhbmVsUGx1Z2luQmFkZ2U6IFJlYWN0LkZDPFBhbmVsUGx1Z2luQmFkZ2VQcm9wcz4gPSAoeyBwbHVnaW4gfSkgPT4ge1xuICBpZiAoaXNVbnNpZ25lZFBsdWdpblNpZ25hdHVyZShwbHVnaW4uc2lnbmF0dXJlKSkge1xuICAgIHJldHVybiA8UGx1Z2luU2lnbmF0dXJlQmFkZ2Ugc3RhdHVzPXtwbHVnaW4uc2lnbmF0dXJlfSAvPjtcbiAgfVxuXG4gIHJldHVybiA8UGx1Z2luU3RhdGVJbmZvIHN0YXRlPXtwbHVnaW4uc3RhdGV9IC8+O1xufTtcblxuUGFuZWxQbHVnaW5CYWRnZS5kaXNwbGF5TmFtZSA9ICdQYW5lbFBsdWdpbkJhZGdlJztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhZGdlLCBCYWRnZVByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZT86IFBsdWdpblN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgUGx1Z2luU3RhdGVJbmZvOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGdldEZlYXR1cmVTdGF0ZUluZm8ocHJvcHMuc3RhdGUpO1xuXG4gIGlmICghZGlzcGxheSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIDxCYWRnZSBjb2xvcj17ZGlzcGxheS5jb2xvcn0gdGl0bGU9e2Rpc3BsYXkudG9vbHRpcH0gdGV4dD17ZGlzcGxheS50ZXh0fSBpY29uPXtkaXNwbGF5Lmljb259IC8+O1xufTtcblxuZnVuY3Rpb24gZ2V0RmVhdHVyZVN0YXRlSW5mbyhzdGF0ZT86IFBsdWdpblN0YXRlKTogQmFkZ2VQcm9wcyB8IG51bGwge1xuICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0RlcHJlY2F0ZWQnLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2VgLFxuICAgICAgfTtcbiAgICBjYXNlIFBsdWdpblN0YXRlLmFscGhhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0FscGhhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBleHBlcmltZW50YWwgYW5kIGZ1dHVyZSB1cGRhdGVzIG1pZ2h0IG5vdCBiZSBiYWNrd2FyZCBjb21wYXRpYmxlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5iZXRhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0JldGEnLFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGNsb3NlIHRvIGNvbXBsZXRlIGJ1dCBub3QgZnVsbHkgdGVzdGVkYCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVkdWNlciIsIkxvYWRpbmdTdGF0ZSIsIkJ1dHRvbiIsIk1vZGFsIiwidXNlU3R5bGVzIiwiZ2V0TW9kYWxTdHlsZXMiLCJhc3luY0Rpc3BhdGNoZXIiLCJnZXRDb25uZWN0ZWREYXNoYm9hcmRzIiwiZGVsZXRlTGlicmFyeVBhbmVsTW9kYWxSZWR1Y2VyIiwiaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUiLCJEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbCIsImxpYnJhcnlQYW5lbCIsIm9uRGlzbWlzcyIsIm9uQ29uZmlybSIsInN0eWxlcyIsImRhc2hib2FyZFRpdGxlcyIsImxvYWRpbmdTdGF0ZSIsImRpc3BhdGNoIiwiYXN5bmNEaXNwYXRjaCIsImNvbm5lY3RlZCIsIkJvb2xlYW4iLCJsZW5ndGgiLCJkb25lIiwiRG9uZSIsIm1vZGFsIiwiTG9hZGluZ0luZGljYXRvciIsIkNvbmZpcm0iLCJtb2RhbFRleHQiLCJIYXNDb25uZWN0ZWREYXNoYm9hcmRzIiwic3VmZml4IiwibWVzc2FnZSIsInRleHRJbmZvIiwibXlUYWJsZSIsIm1hcCIsInRpdGxlIiwiaSIsImFwaUdldENvbm5lY3RlZERhc2hib2FyZHMiLCJzZWFyY2hDb21wbGV0ZWQiLCJkYXNoYm9hcmRzIiwidWlkIiwiY3JlYXRlQWN0aW9uIiwiTG9hZGluZyIsInN0YXRlIiwiYWN0aW9uIiwibWF0Y2giLCJwYXlsb2FkIiwiZCIsImNzcyIsInVzZVN0YXRlIiwiY29uZmlnIiwiSWNvbiIsIkxpbmsiLCJ1c2VTdHlsZXMyIiwiZ2V0UGFuZWxQbHVnaW5Ob3RGb3VuZCIsIlBhbmVsVHlwZUNhcmQiLCJMaWJyYXJ5UGFuZWxDYXJkIiwib25DbGljayIsIm9uRGVsZXRlIiwic2hvd1NlY29uZGFyeUFjdGlvbnMiLCJzaG93RGVsZXRpb25Nb2RhbCIsInNldFNob3dEZWxldGlvbk1vZGFsIiwib25EZWxldGVQYW5lbCIsInBhbmVsUGx1Z2luIiwicGFuZWxzIiwibW9kZWwiLCJ0eXBlIiwibWV0YSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVuZGVmaW5lZCIsIkZvbGRlckxpbmsiLCJnZXRTdHlsZXMiLCJmb2xkZXJVaWQiLCJmb2xkZXJOYW1lIiwibWV0YUNvbnRhaW5lciIsInRoZW1lIiwiY29sb3JzIiwidGV4dCIsInNlY29uZGFyeSIsInR5cG9ncmFwaHkiLCJib2R5U21hbGwiLCJmb250U2l6ZSIsInNwYWNpbmciLCJmcm9tIiwibWVyZ2UiLCJvZiIsIlN1YnNjcmlwdGlvbiIsInRpbWVyIiwiY2F0Y2hFcnJvciIsImZpbmFsaXplIiwibWFwVG8iLCJtZXJnZU1hcCIsInNoYXJlIiwidGFrZVVudGlsIiwiZGVsZXRlTGlicmFyeVBhbmVsIiwiYXBpRGVsZXRlTGlicmFyeVBhbmVsIiwiZ2V0TGlicmFyeVBhbmVscyIsImluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlIiwiaW5pdFNlYXJjaCIsInNlYXJjaEZvckxpYnJhcnlQYW5lbHMiLCJhcmdzIiwic3Vic2NyaXB0aW9uIiwiZGF0YU9ic2VydmFibGUiLCJzZWFyY2hTdHJpbmciLCJwZXJQYWdlIiwicGFnZSIsImV4Y2x1ZGVVaWQiLCJjdXJyZW50UGFuZWxJZCIsInNvcnREaXJlY3Rpb24iLCJ0eXBlRmlsdGVyIiwicGFuZWxGaWx0ZXIiLCJmb2xkZXJGaWx0ZXIiLCJwaXBlIiwiZWxlbWVudHMiLCJsaWJyYXJ5UGFuZWxzIiwidG90YWxDb3VudCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInVuc3Vic2NyaWJlIiwiYWRkIiwic3Vic2NyaWJlIiwiZSIsIkZ1bmN0aW9uIiwibnVtYmVyT2ZQYWdlcyIsImNoYW5nZVBhZ2UiLCJsaWJyYXJ5UGFuZWxzVmlld1JlZHVjZXIiLCJNYXRoIiwiY2VpbCIsImJvcmRlciIsInJhZGl1cyIsInNtIiwiYmczIiwiYmcxIiwidGV4dFNlbWlXZWFrIiwic2l6ZSIsIm1kIiwieGwiLCJiZzIiLCJub3RlVGV4dGJveCIsImRhc2hib2FyZFNlYXJjaCIsImhlYWRpbmciLCJoNCIsImxpbmsiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsIkFwcEV2ZW50cyIsInNlbGVjdG9ycyIsInJlcG9ydEludGVyYWN0aW9uIiwiRmllbGQiLCJGaWxlVXBsb2FkIiwiRm9ybSIsIkhvcml6b250YWxHcm91cCIsIklucHV0IiwiU3Bpbm5lciIsInN0eWxlc0ZhY3RvcnkiLCJUZXh0QXJlYSIsIlZlcnRpY2FsR3JvdXAiLCJ3aXRoVGhlbWUyIiwiYXBwRXZlbnRzIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiY2xlYW5VcEFjdGlvbiIsIkltcG9ydERhc2hib2FyZE92ZXJ2aWV3IiwiZmV0Y2hHY29tRGFzaGJvYXJkIiwiaW1wb3J0RGFzaGJvYXJkSnNvbiIsInZhbGlkYXRlRGFzaGJvYXJkSnNvbiIsInZhbGlkYXRlR2NvbURhc2hib2FyZCIsIklNUE9SVF9TVEFSVEVEX0VWRU5UX05BTUUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiaW1wb3J0RGFzaGJvYXJkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiVW50aGVtZWREYXNoYm9hcmRJbXBvcnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZXZlbnQiLCJpbXBvcnRfc291cmNlIiwiZmlsZSIsImN1cnJlbnRUYXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkZXJPbkxvYWQiLCJkYXNoYm9hcmQiLCJKU09OIiwicGFyc2UiLCJ0YXJnZXQiLCJyZXN1bHQiLCJlbWl0IiwiYWxlcnRFcnJvciIsIm9ubG9hZCIsInJlYWRBc1RleHQiLCJmb3JtRGF0YSIsImRhc2hib2FyZEpzb24iLCJkYXNoYm9hcmRJZCIsImV4ZWMiLCJnY29tRGFzaGJvYXJkIiwiZ2NvbURhc2hib2FyZElkIiwicXVlcnlQYXJhbXMiLCJnZXRHY29tRGFzaGJvYXJkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJzdGF0ZVNlbGVjdG9yIiwicmVuZGVySW1wb3J0Rm9ybSIsImltcG9ydFN0eWxlcyIsIm9wdGlvbiIsIm9uRmlsZVVwbG9hZCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImdldERhc2hib2FyZEZyb21Kc29uIiwiY29tcG9uZW50cyIsIkRhc2hib2FyZEltcG9ydFBhZ2UiLCJ0ZXh0YXJlYSIsInN1Ym1pdCIsInJlbmRlciIsIkVycm9yIiwiTm90U3RhcnRlZCIsImluY2x1ZGVzIiwiRGFzaGJvYXJkSW1wb3J0VW5Db25uZWN0ZWQiLCJEYXNoYm9hcmRJbXBvcnQiLCJkaXNwbGF5TmFtZSIsIkRhdGFTb3VyY2VQaWNrZXIiLCJFeHByZXNzaW9uRGF0YXNvdXJjZVJlZiIsIklucHV0Q29udHJvbCIsIkxlZ2VuZCIsIkZvbGRlclBpY2tlciIsIkxpYnJhcnlQYW5lbElucHV0U3RhdGUiLCJ2YWxpZGF0ZVRpdGxlIiwidmFsaWRhdGVVaWQiLCJJbXBvcnREYXNoYm9hcmRMaWJyYXJ5UGFuZWxzTGlzdCIsIkltcG9ydERhc2hib2FyZEZvcm0iLCJjb250cm9sIiwiZ2V0VmFsdWVzIiwidWlkUmVzZXQiLCJpbnB1dHMiLCJpbml0aWFsRm9sZGVySWQiLCJvblVpZFJlc2V0Iiwib25DYW5jZWwiLCJvblN1Ym1pdCIsIndhdGNoIiwiaXNTdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJ3YXRjaERhdGFTb3VyY2VzIiwid2F0Y2hGb2xkZXIiLCJuZXdMaWJyYXJ5UGFuZWxzIiwiZmlsdGVyIiwiTmV3IiwiZXhpc3RpbmdMaWJyYXJ5UGFuZWxzIiwiRXhpdHMiLCJ2IiwiZm9sZGVyIiwiaWQiLCJmaWVsZCIsImRhdGFTb3VyY2VzIiwiaW5wdXQiLCJpbmRleCIsInBsdWdpbklkIiwiZGF0YVNvdXJjZU9wdGlvbiIsImN1cnJlbnQiLCJsYWJlbCIsImluZm8iLCJjb25zdGFudHMiLCJjb25zdGFudEluZGV4IiwidmFsdWUiLCJnZXRCdXR0b25WYXJpYW50IiwiZ2V0QnV0dG9uVGV4dCIsInNwYWNlciIsImxpYnJhcnlQYW5lbEluZGV4IiwiaXRlbSIsImRhdGVUaW1lRm9ybWF0IiwibG9jYXRpb25TZXJ2aWNlIiwiY2xlYXJMb2FkZWREYXNoYm9hcmQiLCJEYXNoYm9hcmRTb3VyY2UiLCJJTVBPUlRfRklOSVNIRURfRVZFTlRfTkFNRSIsInNlYXJjaE9iaiIsImdldFNlYXJjaE9iamVjdCIsInNvdXJjZSIsImZvbGRlcklkIiwiTnVtYmVyIiwiSW1wb3J0RGFzaGJvYXJkT3ZlcnZpZXdVbkNvbm5lY3RlZCIsImZvcm0iLCJzZXRTdGF0ZSIsIkdjb20iLCJtYXJnaW5Cb3R0b20iLCJnbmV0SWQiLCJvcmdOYW1lIiwidXBkYXRlZEF0IiwiZ2V0QmFja2VuZFNydiIsInZhbGlkYXRpb25TcnYiLCJqc29uIiwibmV3VGl0bGUiLCJ2YWxpZGF0ZU5ld0Rhc2hib2FyZE5hbWUiLCJ0aGVuIiwiY2F0Y2giLCJnZXQiLCJleGlzdGluZ0Rhc2hib2FyZCIsImZvbGRlclRpdGxlIiwiaXNIYW5kbGVkIiwiY3giLCJpc1Vuc2lnbmVkUGx1Z2luU2lnbmF0dXJlIiwiUGx1Z2luU3RhdGUiLCJJY29uQnV0dG9uIiwiUGx1Z2luU2lnbmF0dXJlQmFkZ2UiLCJQbHVnaW5TdGF0ZUluZm8iLCJpc0N1cnJlbnQiLCJwbHVnaW4iLCJkaXNhYmxlZCIsInNob3dCYWRnZSIsImNoaWxkcmVuIiwiY3NzQ2xhc3MiLCJkZXByZWNhdGVkIiwiUGx1Z2luVmlzdWFsaXphdGlvbiIsImltZyIsImxvZ29zIiwic21hbGwiLCJpdGVtQ29udGVudCIsImJhZGdlIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsZXRlQnV0dG9uIiwiYmFja2dyb3VuZCIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwic2hhZG93cyIsInoxIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJkdXJhdGlvbiIsInNob3J0IiwiZW1waGFzaXplIiwicHJpbWFyeSIsInNlbGVjdGVkIiwiZm9udFdlaWdodE1lZGl1bSIsImZvbnRXZWlnaHRMaWdodCIsIlBhbmVsUGx1Z2luQmFkZ2UiLCJzaWduYXR1cmUiLCJCYWRnZSIsImRpc3BsYXkiLCJnZXRGZWF0dXJlU3RhdGVJbmZvIiwiY29sb3IiLCJ0b29sdGlwIiwiaWNvbiIsImFscGhhIiwiYmV0YSJdLCJzb3VyY2VSb290IjoiIn0=