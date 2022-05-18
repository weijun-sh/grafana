"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderLibraryPanelsPage"],{

/***/ "./public/app/core/components/FolderFilter/FolderFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderFilter": () => (/* binding */ FolderFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;









function FolderFilter({
  onChange: propsOnChange,
  maxMenuHeight
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const getOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(searchString => getFoldersAsOptions(searchString, setLoading), []);
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()(getOptions, 300), [getOptions]);
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(folders => {
    const changedFolders = [];

    for (const folder of folders) {
      if (folder.value) {
        changedFolders.push(folder.value);
      }
    }

    propsOnChange(changedFolders);
    setValue(folders);
  }, [propsOnChange]);
  const selectOptions = {
    defaultOptions: true,
    isMulti: true,
    noOptionsMessage: 'No folders found',
    placeholder: 'Filter by folder',
    maxMenuHeight,
    value,
    onChange
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: styles.container,
    children: [value.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
      size: "xs",
      icon: "trash-alt",
      variant: "link",
      className: styles.clear,
      onClick: () => onChange([]),
      "aria-label": "Clear folders",
      children: "Clear folders"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.AsyncMultiSelect, Object.assign({}, selectOptions, {
      isLoading: loading,
      loadOptions: debouncedLoadOptions,
      prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "filter"
      })),
      "aria-label": "Folder filter"
    }))]
  });
}

async function getFoldersAsOptions(searchString, setLoading) {
  setLoading(true);
  const params = {
    query: searchString,
    type: 'dash-folder',
    permission: app_types__WEBPACK_IMPORTED_MODULE_5__.PermissionLevelString.View
  };
  const searchHits = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().search(params);
  const options = searchHits.map(d => ({
    label: d.title,
    value: {
      id: d.id,
      title: d.title
    }
  }));

  if (!searchString || 'general'.includes(searchString.toLowerCase())) {
    options.unshift({
      label: 'General',
      value: {
        id: 0,
        title: 'General'
      }
    });
  }

  setLoading(false);
  return options;
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,
    clear: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: clear;
      font-size: ${theme.spacing(1.5)};
      position: absolute;
      top: -${theme.spacing(4.5)};
      right: 0;
    `
  };
}

/***/ }),

/***/ "./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelTypeFilter": () => (/* binding */ PanelTypeFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_panel_state_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/panel/state/util.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;







const PanelTypeFilter = ({
  onChange: propsOnChange,
  maxMenuHeight
}) => {
  const plugins = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return (0,app_features_panel_state_util__WEBPACK_IMPORTED_MODULE_3__.getAllPanelPluginMeta)();
  }, []);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => plugins.map(p => ({
    label: p.name,
    imgUrl: p.info.logos.small,
    value: p
  })).sort((a, b) => {
    var _a$label;

    return (_a$label = a.label) === null || _a$label === void 0 ? void 0 : _a$label.localeCompare(b.label);
  }), [plugins]);
  const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(plugins => {
    const changedPlugins = [];

    for (const plugin of plugins) {
      if (plugin.value) {
        changedPlugins.push(plugin.value);
      }
    }

    propsOnChange(changedPlugins);
    setValue(plugins);
  }, [propsOnChange]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const selectOptions = {
    defaultOptions: true,
    getOptionLabel: i => i.label,
    getOptionValue: i => i.value,
    noOptionsMessage: 'No Panel types found',
    placeholder: 'Filter by type',
    maxMenuHeight,
    options,
    value,
    onChange
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [value.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      size: "xs",
      icon: "trash-alt",
      variant: "link",
      className: styles.clear,
      onClick: () => onChange([]),
      "aria-label": "Clear types",
      children: "Clear types"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({}, selectOptions, {
      prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "filter"
      })),
      "aria-label": "Panel Type filter"
    }))]
  });
};

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,
    clear: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: clear;
      font-size: ${theme.spacing(1.5)};
      position: absolute;
      top: -${theme.spacing(4.5)};
      right: 0;
    `
  };
}

/***/ }),

/***/ "./public/app/features/folders/FolderLibraryPanelsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderLibraryPanelsPage": () => (/* binding */ FolderLibraryPanelsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");
/* harmony import */ var _library_panels_components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, `folder-library-panels-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_7__.getLoadingNav)(1)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_6__.getFolderByUid
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function FolderLibraryPanelsPage({
  navModel,
  getFolderByUid,
  folderUid,
  folder
}) {
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async () => await getFolderByUid(folderUid), [getFolderByUid, folderUid]);
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_panels_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelsSearch, {
        onClick: setSelected,
        currentFolderId: folder.id,
        showSecondaryActions: true,
        showSort: true,
        showPanelFilter: true
      }), selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_library_panels_components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_5__.OpenLibraryPanelModal, {
        onDismiss: () => setSelected(undefined),
        libraryPanel: selected
      }) : null]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderLibraryPanelsPage));

/***/ }),

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

/***/ "./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelsSearch": () => (/* binding */ LibraryPanelsSearch),
/* harmony export */   "LibraryPanelsSearchVariant": () => (/* binding */ LibraryPanelsSearchVariant)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_components_FolderFilter_FolderFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/FolderFilter/FolderFilter.tsx");
/* harmony import */ var _core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx");
/* harmony import */ var _core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Select/SortPicker.tsx");
/* harmony import */ var _core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var _LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/reducer.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











let LibraryPanelsSearchVariant;

(function (LibraryPanelsSearchVariant) {
  LibraryPanelsSearchVariant["Tight"] = "tight";
  LibraryPanelsSearchVariant["Spacious"] = "spacious";
})(LibraryPanelsSearchVariant || (LibraryPanelsSearchVariant = {}));

const LibraryPanelsSearch = ({
  onClick,
  variant = LibraryPanelsSearchVariant.Spacious,
  currentPanelId,
  currentFolderId,
  perPage = _core_constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_PER_PAGE_PAGINATION,
  showPanelFilter = false,
  showFolderFilter = false,
  showSort = false,
  showSecondaryActions = false
}) => {
  var _FilterInput, _LibraryPanelsView;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const [{
    sortDirection,
    panelFilter,
    folderFilter,
    searchQuery
  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_8__.libraryPanelsSearchReducer, Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_8__.initialLibraryPanelsSearchState, {
    folderFilter: currentFolderId ? [currentFolderId.toString(10)] : []
  }));

  const onFilterChange = searchString => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.searchChanged)(searchString));

  const onSortChange = sorting => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.sortChanged)(sorting));

  const onFolderFilterChange = folders => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.folderFilterChanged)(folders));

  const onPanelFilterChange = plugins => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_8__.panelFilterChanged)(plugins));

  if (variant === LibraryPanelsSearchVariant.Spacious) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
        spacing: "lg",
        children: [_FilterInput || (_FilterInput = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
          value: searchQuery,
          onChange: onFilterChange,
          placeholder: 'Search by name or description',
          width: 0
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: styles.buttonRow,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            spacing: "sm",
            justify: showSort && showPanelFilter || showFolderFilter ? 'space-between' : 'flex-end',
            children: [showSort && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_5__.SortPicker, {
              value: sortDirection,
              onChange: onSortChange,
              filter: ['alpha-asc', 'alpha-desc']
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
              spacing: "sm",
              justify: showFolderFilter && showPanelFilter ? 'space-between' : 'flex-end',
              children: [showFolderFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_FolderFilter_FolderFilter__WEBPACK_IMPORTED_MODULE_3__.FolderFilter, {
                onChange: onFolderFilterChange
              }), showPanelFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_4__.PanelTypeFilter, {
                onChange: onPanelFilterChange
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: styles.libraryPanelsView,
          children: _LibraryPanelsView || (_LibraryPanelsView = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_7__.LibraryPanelsView, {
            onClickCard: onClick,
            searchString: searchQuery,
            sortDirection: sortDirection,
            panelFilter: panelFilter,
            folderFilter: folderFilter,
            currentPanelId: currentPanelId,
            showSecondaryActions: showSecondaryActions,
            perPage: perPage
          }))
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: styles.container,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
      spacing: "xs",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: styles.tightButtonRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: styles.tightFilter,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
            value: searchQuery,
            onChange: onFilterChange,
            placeholder: 'Search by name',
            width: 0
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: styles.tightSortFilter,
          children: [showSort && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_5__.SortPicker, {
            value: sortDirection,
            onChange: onSortChange
          }), showFolderFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_FolderFilter_FolderFilter__WEBPACK_IMPORTED_MODULE_3__.FolderFilter, {
            onChange: onFolderFilterChange,
            maxMenuHeight: 200
          }), showPanelFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_PanelTypeFilter_PanelTypeFilter__WEBPACK_IMPORTED_MODULE_4__.PanelTypeFilter, {
            onChange: onPanelFilterChange,
            maxMenuHeight: 200
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: styles.libraryPanelsView,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LibraryPanelsView_LibraryPanelsView__WEBPACK_IMPORTED_MODULE_7__.LibraryPanelsView, {
          onClickCard: onClick,
          searchString: searchQuery,
          sortDirection: sortDirection,
          panelFilter: panelFilter,
          folderFilter: folderFilter,
          currentPanelId: currentPanelId,
          showSecondaryActions: showSecondaryActions,
          perPage: perPage
        })
      })]
    })
  });
};

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
      overflow-y: auto;
      padding: ${theme.spacing(1)};
    `,
    buttonRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${theme.spacing(2)}; // Clear types link
    `,
    tightButtonRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${theme.spacing(4)}; // Clear types link
    `,
    tightFilter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
    `,
    tightSortFilter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      padding: ${theme.spacing(0, 0, 0, 0.5)};
    `,
    libraryPanelsView: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
    `
  };
}

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsSearch/reducer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "folderFilterChanged": () => (/* binding */ folderFilterChanged),
/* harmony export */   "initialLibraryPanelsSearchState": () => (/* binding */ initialLibraryPanelsSearchState),
/* harmony export */   "libraryPanelsSearchReducer": () => (/* binding */ libraryPanelsSearchReducer),
/* harmony export */   "panelFilterChanged": () => (/* binding */ panelFilterChanged),
/* harmony export */   "searchChanged": () => (/* binding */ searchChanged),
/* harmony export */   "sortChanged": () => (/* binding */ sortChanged)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialLibraryPanelsSearchState = {
  searchQuery: '',
  panelFilter: [],
  folderFilter: [],
  sortDirection: undefined
};
const searchChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/searchChanged');
const sortChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/sortChanged');
const panelFilterChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/panelFilterChanged');
const folderFilterChanged = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)('libraryPanels/search/folderFilterChanged');
const libraryPanelsSearchReducer = (state, action) => {
  if (searchChanged.match(action)) {
    return Object.assign({}, state, {
      searchQuery: action.payload
    });
  }

  if (sortChanged.match(action)) {
    return Object.assign({}, state, {
      sortDirection: action.payload.value
    });
  }

  if (panelFilterChanged.match(action)) {
    return Object.assign({}, state, {
      panelFilter: action.payload.map(p => p.id)
    });
  }

  if (folderFilterChanged.match(action)) {
    return Object.assign({}, state, {
      folderFilter: action.payload.map(f => String(f.id))
    });
  }

  return state;
};

/***/ }),

/***/ "./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelsView": () => (/* binding */ LibraryPanelsView)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelCard/LibraryPanelCard.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/reducer.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;











const LibraryPanelsView = ({
  className,
  onClickCard,
  searchString,
  sortDirection,
  panelFilter,
  folderFilter,
  showSecondaryActions,
  currentPanelId: currentPanel,
  perPage: propsPerPage = 40
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getPanelViewStyles);
  const [{
    libraryPanels,
    page,
    perPage,
    numberOfPages,
    loadingState,
    currentPanelId
  }, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_6__.libraryPanelsViewReducer, Object.assign({}, _reducer__WEBPACK_IMPORTED_MODULE_6__.initialLibraryPanelsViewState, {
    currentPanelId: currentPanel,
    perPage: propsPerPage
  }));
  const asyncDispatch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_actions__WEBPACK_IMPORTED_MODULE_5__.asyncDispatcher)(dispatch), [dispatch]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(() => asyncDispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.searchForLibraryPanels)({
    searchString,
    sortDirection,
    panelFilter,
    folderFilter,
    page,
    perPage,
    currentPanelId
  })), 300, [searchString, sortDirection, panelFilter, folderFilter, page, asyncDispatch]);

  const onDelete = ({
    uid
  }) => asyncDispatch((0,_actions__WEBPACK_IMPORTED_MODULE_5__.deleteLibraryPanel)(uid, {
    searchString,
    page,
    perPage
  }));

  const onPageChange = page => asyncDispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_6__.changePage)({
    page
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.libraryPanelList,
      children: loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading ? _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        children: "Loading library panels..."
      })) : libraryPanels.length < 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: styles.noPanelsFound,
        children: "No library panels found."
      }) : libraryPanels === null || libraryPanels === void 0 ? void 0 : libraryPanels.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LibraryPanelCard_LibraryPanelCard__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelCard, {
        libraryPanel: item,
        onDelete: onDelete,
        onClick: onClickCard,
        showSecondaryActions: showSecondaryActions
      }, `library-panel=${i}`))
    }), libraryPanels.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.pagination,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
        currentPage: page,
        numberOfPages: numberOfPages,
        onNavigate: onPageChange,
        hideWhenSinglePage: true
      })
    }) : null]
  });
};

const getPanelViewStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,
    libraryPanelList: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${theme.spacing.sm};
    `,
    searchHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
    `,
    newPanelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: 10px;
      align-self: flex-start;
    `,
    pagination: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: center;
      margin-top: ${theme.spacing.sm};
    `,
    noPanelsFound: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: noPanelsFound;
      min-height: 200px;
    `
  };
};

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

/***/ "./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenLibraryPanelModal": () => (/* binding */ OpenLibraryPanelModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/library-panels/state/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;











function OpenLibraryPanelModal({
  libraryPanel,
  onDismiss
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const [option, setOption] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getConnected = async () => {
      const connectedDashboards = await (0,_state_api__WEBPACK_IMPORTED_MODULE_6__.getLibraryPanelConnectedDashboards)(libraryPanel.uid);
      setConnected(connectedDashboards.length);
    };

    getConnected();
  }, [libraryPanel.uid]);
  const loadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(searchString => loadOptionsAsync(libraryPanel.uid, searchString, setLoading), [libraryPanel.uid]);
  const debouncedLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(loadOptions, 300, {
    leading: true,
    trailing: true
  }), [loadOptions]);

  const onViewPanel = e => {
    var _option$value;

    e.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl(`/d/${option === null || option === void 0 ? void 0 : (_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.uid}`, {}));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal, {
    title: "View panel in dashboard",
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    isOpen: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.container,
      children: [connected === 0 ? _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        children: "Panel is not linked to a dashboard. Add the panel to a dashboard and retry."
      })) : null, connected > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
          children: ["This panel is being used in", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("strong", {
            children: [connected, " ", connected > 1 ? 'dashboards' : 'dashboard']
          }), ".Please choose which dashboard to view the panel in:"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.AsyncSelect, {
          isClearable: true,
          isLoading: loading,
          defaultOptions: true,
          loadOptions: debouncedLoadOptions,
          onChange: setOption,
          placeholder: "Start typing to search for dashboard",
          noOptionsMessage: "No dashboards found"
        })]
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        variant: "secondary",
        onClick: onDismiss,
        fill: "outline",
        children: "Cancel"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        onClick: onViewPanel,
        disabled: !Boolean(option),
        children: option ? `View panel in ${option === null || option === void 0 ? void 0 : option.label}...` : 'View panel in dashboard...'
      })]
    })]
  });
}

async function loadOptionsAsync(uid, searchString, setLoading) {
  setLoading(true);
  const searchHits = await (0,_state_api__WEBPACK_IMPORTED_MODULE_6__.getConnectedDashboards)(uid);
  const options = searchHits.filter(d => d.title.toLowerCase().includes(searchString.toLowerCase())).map(d => ({
    label: d.title,
    value: d
  }));
  setLoading(false);
  return options;
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css``
  };
}

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

/***/ "./public/app/features/panel/state/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterPluginList": () => (/* binding */ filterPluginList),
/* harmony export */   "getAllPanelPluginMeta": () => (/* binding */ getAllPanelPluginMeta)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");


function getAllPanelPluginMeta() {
  const allPanels = app_core_config__WEBPACK_IMPORTED_MODULE_1__.config.panels;
  return Object.keys(allPanels).filter(key => allPanels[key]['hideFromList'] === false).map(key => allPanels[key]).sort((a, b) => a.sort - b.sort);
}
function filterPluginList(pluginsList, searchQuery, // Note: this will be an escaped regex string as it comes from `FilterInput`
current) {
  if (!searchQuery.length) {
    return pluginsList.filter(p => {
      if (p.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginState.deprecated) {
        return current.id === p.id;
      }

      return true;
    });
  }

  const query = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.unEscapeStringFromRegex)(searchQuery).toLowerCase();
  const first = [];
  const match = [];
  const isGraphQuery = 'graph'.startsWith(query);

  for (const item of pluginsList) {
    if (item.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginState.deprecated && current.id !== item.id) {
      continue;
    }

    const name = item.name.toLowerCase();
    const idx = name.indexOf(query);

    if (idx === 0) {
      first.push(item);
    } else if (idx > 0) {
      match.push(item);
    } else if (isGraphQuery && item.id === 'timeseries') {
      first.push(item);
    }
  }

  return first.concat(match);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFMLEVBQWM7QUFDWixXQUFPLElBQVA7QUFDRDs7QUFFRCxzQkFBTyx1REFBQyw4Q0FBRDtBQUFPLFNBQUssRUFBRUEsT0FBTyxDQUFDRSxLQUF0QjtBQUE2QixTQUFLLEVBQUVGLE9BQU8sQ0FBQ0csT0FBNUM7QUFBcUQsUUFBSSxFQUFFSCxPQUFPLENBQUNwTCxJQUFuRTtBQUF5RSxRQUFJLEVBQUVvTCxPQUFPLENBQUNJO0FBQXZGLElBQVA7QUFDRCxDQVJNOztBQVVQLFNBQVNILG1CQUFULENBQTZCNVAsS0FBN0IsRUFBcUU7QUFDbkUsVUFBUUEsS0FBUjtBQUNFLFNBQUswTSxpRUFBTDtBQUNFLGFBQU87QUFDTG5JLFFBQUFBLElBQUksRUFBRSxZQUREO0FBRUxzTCxRQUFBQSxLQUFLLEVBQUUsS0FGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGLFNBQUtwRCw0REFBTDtBQUNFLGFBQU87QUFDTG5JLFFBQUFBLElBQUksRUFBRSxPQUREO0FBRUxzTCxRQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGLFNBQUtwRCwyREFBTDtBQUNFLGFBQU87QUFDTG5JLFFBQUFBLElBQUksRUFBRSxNQUREO0FBRUxzTCxRQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGO0FBQ0UsYUFBTyxJQUFQO0FBcEJKO0FBc0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0ZvbGRlckZpbHRlci9Gb2xkZXJGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9QYW5lbFR5cGVGaWx0ZXIvUGFuZWxUeXBlRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9mb2xkZXJzL0ZvbGRlckxpYnJhcnlQYW5lbHNQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9yZWR1Y2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsQ2FyZC9MaWJyYXJ5UGFuZWxDYXJkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNTZWFyY2gvTGlicmFyeVBhbmVsc1NlYXJjaC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzU2VhcmNoL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzVmlldy9MaWJyYXJ5UGFuZWxzVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzVmlldy9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1ZpZXcvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL09wZW5MaWJyYXJ5UGFuZWxNb2RhbC9PcGVuTGlicmFyeVBhbmVsTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGFuZWwvc3RhdGUvdXRpbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2RlYm91bmNlLXByb21pc2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBc3luY011bHRpU2VsZWN0LCBJY29uLCBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgRm9sZGVySW5mbywgUGVybWlzc2lvbkxldmVsU3RyaW5nIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBGb2xkZXJGaWx0ZXJQcm9wcyB7XG4gIG9uQ2hhbmdlOiAoZm9sZGVyOiBGb2xkZXJJbmZvW10pID0+IHZvaWQ7XG4gIG1heE1lbnVIZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb2xkZXJGaWx0ZXIoeyBvbkNoYW5nZTogcHJvcHNPbkNoYW5nZSwgbWF4TWVudUhlaWdodCB9OiBGb2xkZXJGaWx0ZXJQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGdldE9wdGlvbnMgPSB1c2VDYWxsYmFjaygoc2VhcmNoU3RyaW5nOiBzdHJpbmcpID0+IGdldEZvbGRlcnNBc09wdGlvbnMoc2VhcmNoU3RyaW5nLCBzZXRMb2FkaW5nKSwgW10pO1xuICBjb25zdCBkZWJvdW5jZWRMb2FkT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2UoZ2V0T3B0aW9ucywgMzAwKSwgW2dldE9wdGlvbnNdKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8Rm9sZGVySW5mbz4+PihbXSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGZvbGRlcnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxGb2xkZXJJbmZvPj4pID0+IHtcbiAgICAgIGNvbnN0IGNoYW5nZWRGb2xkZXJzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGlmIChmb2xkZXIudmFsdWUpIHtcbiAgICAgICAgICBjaGFuZ2VkRm9sZGVycy5wdXNoKGZvbGRlci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByb3BzT25DaGFuZ2UoY2hhbmdlZEZvbGRlcnMpO1xuICAgICAgc2V0VmFsdWUoZm9sZGVycyk7XG4gICAgfSxcbiAgICBbcHJvcHNPbkNoYW5nZV1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0T3B0aW9uczogdHJ1ZSxcbiAgICBpc011bHRpOiB0cnVlLFxuICAgIG5vT3B0aW9uc01lc3NhZ2U6ICdObyBmb2xkZXJzIGZvdW5kJyxcbiAgICBwbGFjZWhvbGRlcjogJ0ZpbHRlciBieSBmb2xkZXInLFxuICAgIG1heE1lbnVIZWlnaHQsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7dmFsdWUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGVhcn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbXSl9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyIGZvbGRlcnNcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2xlYXIgZm9sZGVyc1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8QXN5bmNNdWx0aVNlbGVjdFxuICAgICAgICB7Li4uc2VsZWN0T3B0aW9uc31cbiAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkTG9hZE9wdGlvbnN9XG4gICAgICAgIHByZWZpeD17PEljb24gbmFtZT1cImZpbHRlclwiIC8+fVxuICAgICAgICBhcmlhLWxhYmVsPVwiRm9sZGVyIGZpbHRlclwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb2xkZXJzQXNPcHRpb25zKHNlYXJjaFN0cmluZzogc3RyaW5nLCBzZXRMb2FkaW5nOiAobG9hZGluZzogYm9vbGVhbikgPT4gdm9pZCkge1xuICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBxdWVyeTogc2VhcmNoU3RyaW5nLFxuICAgIHR5cGU6ICdkYXNoLWZvbGRlcicsXG4gICAgcGVybWlzc2lvbjogUGVybWlzc2lvbkxldmVsU3RyaW5nLlZpZXcsXG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoSGl0cyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5zZWFyY2gocGFyYW1zKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlYXJjaEhpdHMubWFwKChkKSA9PiAoeyBsYWJlbDogZC50aXRsZSwgdmFsdWU6IHsgaWQ6IGQuaWQsIHRpdGxlOiBkLnRpdGxlIH0gfSkpO1xuICBpZiAoIXNlYXJjaFN0cmluZyB8fCAnZ2VuZXJhbCcuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgb3B0aW9ucy51bnNoaWZ0KHsgbGFiZWw6ICdHZW5lcmFsJywgdmFsdWU6IHsgaWQ6IDAsIHRpdGxlOiAnR2VuZXJhbCcgfSB9KTtcbiAgfVxuXG4gIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGxhYmVsOiBjb250YWluZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIGAsXG4gICAgY2xlYXI6IGNzc2BcbiAgICAgIGxhYmVsOiBjbGVhcjtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5zcGFjaW5nKDEuNSl9O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtJHt0aGVtZS5zcGFjaW5nKDQuNSl9O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQYW5lbFBsdWdpbk1ldGEsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgQnV0dG9uLCBNdWx0aVNlbGVjdCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldEFsbFBhbmVsUGx1Z2luTWV0YSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9zdGF0ZS91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAocGx1Z2luczogUGFuZWxQbHVnaW5NZXRhW10pID0+IHZvaWQ7XG4gIG1heE1lbnVIZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbFR5cGVGaWx0ZXIgPSAoeyBvbkNoYW5nZTogcHJvcHNPbkNoYW5nZSwgbWF4TWVudUhlaWdodCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgcGx1Z2lucyA9IHVzZU1lbW88UGFuZWxQbHVnaW5NZXRhW10+KCgpID0+IHtcbiAgICByZXR1cm4gZ2V0QWxsUGFuZWxQbHVnaW5NZXRhKCk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHBsdWdpbnNcbiAgICAgICAgLm1hcCgocCkgPT4gKHsgbGFiZWw6IHAubmFtZSwgaW1nVXJsOiBwLmluZm8ubG9nb3Muc21hbGwsIHZhbHVlOiBwIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sYWJlbD8ubG9jYWxlQ29tcGFyZShiLmxhYmVsKSksXG4gICAgW3BsdWdpbnNdXG4gICk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPFBhbmVsUGx1Z2luTWV0YT4+PihbXSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHBsdWdpbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxQYW5lbFBsdWdpbk1ldGE+PikgPT4ge1xuICAgICAgY29uc3QgY2hhbmdlZFBsdWdpbnMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICAgICAgaWYgKHBsdWdpbi52YWx1ZSkge1xuICAgICAgICAgIGNoYW5nZWRQbHVnaW5zLnB1c2gocGx1Z2luLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvcHNPbkNoYW5nZShjaGFuZ2VkUGx1Z2lucyk7XG4gICAgICBzZXRWYWx1ZShwbHVnaW5zKTtcbiAgICB9LFxuICAgIFtwcm9wc09uQ2hhbmdlXVxuICApO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0T3B0aW9uczogdHJ1ZSxcbiAgICBnZXRPcHRpb25MYWJlbDogKGk6IGFueSkgPT4gaS5sYWJlbCxcbiAgICBnZXRPcHRpb25WYWx1ZTogKGk6IGFueSkgPT4gaS52YWx1ZSxcbiAgICBub09wdGlvbnNNZXNzYWdlOiAnTm8gUGFuZWwgdHlwZXMgZm91bmQnLFxuICAgIHBsYWNlaG9sZGVyOiAnRmlsdGVyIGJ5IHR5cGUnLFxuICAgIG1heE1lbnVIZWlnaHQsXG4gICAgb3B0aW9ucyxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHt2YWx1ZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFtdKX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xlYXIgdHlwZXNcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2xlYXIgdHlwZXNcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgICAgPE11bHRpU2VsZWN0IHsuLi5zZWxlY3RPcHRpb25zfSBwcmVmaXg9ezxJY29uIG5hbWU9XCJmaWx0ZXJcIiAvPn0gYXJpYS1sYWJlbD1cIlBhbmVsIFR5cGUgZmlsdGVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgbGFiZWw6IGNvbnRhaW5lcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgYCxcbiAgICBjbGVhcjogY3NzYFxuICAgICAgbGFiZWw6IGNsZWFyO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnNwYWNpbmcoMS41KX07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0ke3RoZW1lLnNwYWNpbmcoNC41KX07XG4gICAgICByaWdodDogMDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi8uLi9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTGlicmFyeVBhbmVsc1NlYXJjaCB9IGZyb20gJy4uL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1NlYXJjaC9MaWJyYXJ5UGFuZWxzU2VhcmNoJztcbmltcG9ydCB7IE9wZW5MaWJyYXJ5UGFuZWxNb2RhbCB9IGZyb20gJy4uL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvT3BlbkxpYnJhcnlQYW5lbE1vZGFsL09wZW5MaWJyYXJ5UGFuZWxNb2RhbCc7XG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uL2xpYnJhcnktcGFuZWxzL3R5cGVzJztcblxuaW1wb3J0IHsgZ2V0Rm9sZGVyQnlVaWQgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0TG9hZGluZ05hdiB9IGZyb20gJy4vc3RhdGUvbmF2TW9kZWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE93blByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyB1aWQ6IHN0cmluZyB9PiB7fVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUsIHByb3BzOiBPd25Qcm9wcykgPT4ge1xuICBjb25zdCB1aWQgPSBwcm9wcy5tYXRjaC5wYXJhbXMudWlkO1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgYGZvbGRlci1saWJyYXJ5LXBhbmVscy0ke3VpZH1gLCBnZXRMb2FkaW5nTmF2KDEpKSxcbiAgICBmb2xkZXJVaWQ6IHVpZCxcbiAgICBmb2xkZXI6IHN0YXRlLmZvbGRlcixcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZ2V0Rm9sZGVyQnlVaWQsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgZnVuY3Rpb24gRm9sZGVyTGlicmFyeVBhbmVsc1BhZ2UoeyBuYXZNb2RlbCwgZ2V0Rm9sZGVyQnlVaWQsIGZvbGRlclVpZCwgZm9sZGVyIH06IFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUFzeW5jKGFzeW5jICgpID0+IGF3YWl0IGdldEZvbGRlckJ5VWlkKGZvbGRlclVpZCksIFtnZXRGb2xkZXJCeVVpZCwgZm9sZGVyVWlkXSk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8TGlicmFyeUVsZW1lbnREVE8gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgPExpYnJhcnlQYW5lbHNTZWFyY2hcbiAgICAgICAgICBvbkNsaWNrPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgICBjdXJyZW50Rm9sZGVySWQ9e2ZvbGRlci5pZH1cbiAgICAgICAgICBzaG93U2Vjb25kYXJ5QWN0aW9uc1xuICAgICAgICAgIHNob3dTb3J0XG4gICAgICAgICAgc2hvd1BhbmVsRmlsdGVyXG4gICAgICAgIC8+XG4gICAgICAgIHtzZWxlY3RlZCA/IDxPcGVuTGlicmFyeVBhbmVsTW9kYWwgb25EaXNtaXNzPXsoKSA9PiBzZXRTZWxlY3RlZCh1bmRlZmluZWQpfSBsaWJyYXJ5UGFuZWw9e3NlbGVjdGVkfSAvPiA6IG51bGx9XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoRm9sZGVyTGlicmFyeVBhbmVsc1BhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBnZXRNb2RhbFN0eWxlcyB9IGZyb20gJy4uLy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGFzeW5jRGlzcGF0Y2hlciB9IGZyb20gJy4uL0xpYnJhcnlQYW5lbHNWaWV3L2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBnZXRDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciwgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBsaWJyYXJ5UGFuZWw6IExpYnJhcnlFbGVtZW50RFRPO1xuICBvbkNvbmZpcm06ICgpID0+IHZvaWQ7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsOiBGQzxQcm9wcz4gPSAoeyBsaWJyYXJ5UGFuZWwsIG9uRGlzbWlzcywgb25Db25maXJtIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldE1vZGFsU3R5bGVzKTtcbiAgY29uc3QgW3sgZGFzaGJvYXJkVGl0bGVzLCBsb2FkaW5nU3RhdGUgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihcbiAgICBkZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFJlZHVjZXIsXG4gICAgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGVcbiAgKTtcbiAgY29uc3QgYXN5bmNEaXNwYXRjaCA9IHVzZU1lbW8oKCkgPT4gYXN5bmNEaXNwYXRjaGVyKGRpc3BhdGNoKSwgW2Rpc3BhdGNoXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmNEaXNwYXRjaChnZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbCkpO1xuICB9LCBbYXN5bmNEaXNwYXRjaCwgbGlicmFyeVBhbmVsXSk7XG4gIGNvbnN0IGNvbm5lY3RlZCA9IEJvb2xlYW4oZGFzaGJvYXJkVGl0bGVzLmxlbmd0aCk7XG4gIGNvbnN0IGRvbmUgPSBsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Eb25lO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfSB0aXRsZT1cIkRlbGV0ZSBsaWJyYXJ5IHBhbmVsXCIgaWNvbj1cInRyYXNoLWFsdFwiIG9uRGlzbWlzcz17b25EaXNtaXNzfSBpc09wZW49e3RydWV9PlxuICAgICAgeyFkb25lID8gPExvYWRpbmdJbmRpY2F0b3IgLz4gOiBudWxsfVxuICAgICAge2RvbmUgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2Nvbm5lY3RlZCA/IDxIYXNDb25uZWN0ZWREYXNoYm9hcmRzIGRhc2hib2FyZFRpdGxlcz17ZGFzaGJvYXJkVGl0bGVzfSAvPiA6IG51bGx9XG4gICAgICAgICAgeyFjb25uZWN0ZWQgPyA8Q29uZmlybSAvPiA6IG51bGx9XG5cbiAgICAgICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25EaXNtaXNzfSBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBvbkNsaWNrPXtvbkNvbmZpcm19IGRpc2FibGVkPXtjb25uZWN0ZWR9PlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5jb25zdCBMb2FkaW5nSW5kaWNhdG9yOiBGQyA9ICgpID0+IDxzcGFuPkxvYWRpbmcgbGlicmFyeSBwYW5lbC4uLjwvc3Bhbj47XG5cbmNvbnN0IENvbmZpcm06IEZDID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVGV4dH0+RG8geW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcGFuZWw/PC9kaXY+O1xufTtcblxuY29uc3QgSGFzQ29ubmVjdGVkRGFzaGJvYXJkczogRkM8eyBkYXNoYm9hcmRUaXRsZXM6IHN0cmluZ1tdIH0+ID0gKHsgZGFzaGJvYXJkVGl0bGVzIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldE1vZGFsU3R5bGVzKTtcbiAgY29uc3Qgc3VmZml4ID0gZGFzaGJvYXJkVGl0bGVzLmxlbmd0aCA9PT0gMSA/ICdkYXNoYm9hcmQuJyA6ICdkYXNoYm9hcmRzLic7XG4gIGNvbnN0IG1lc3NhZ2UgPSBgJHtkYXNoYm9hcmRUaXRsZXMubGVuZ3RofSAke3N1ZmZpeH1gO1xuICBpZiAoZGFzaGJvYXJkVGl0bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dEluZm99PlxuICAgICAgICB7J1RoaXMgbGlicmFyeSBwYW5lbCBjYW4gbm90IGJlIGRlbGV0ZWQgYmVjYXVzZSBpdCBpcyBjb25uZWN0ZWQgdG8gJ31cbiAgICAgICAgPHN0cm9uZz57bWVzc2FnZX08L3N0cm9uZz5cbiAgICAgICAgeycgUmVtb3ZlIHRoZSBsaWJyYXJ5IHBhbmVsIGZyb20gdGhlIGRhc2hib2FyZHMgbGlzdGVkIGJlbG93IGFuZCByZXRyeS4nfVxuICAgICAgPC9wPlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLm15VGFibGV9PlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRhc2hib2FyZCBuYW1lPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2Rhc2hib2FyZFRpdGxlcy5tYXAoKHRpdGxlLCBpKSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtgZGFzaC10aXRsZS0ke2l9YH0+XG4gICAgICAgICAgICAgIDx0ZD57dGl0bGV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGdldENvbm5lY3RlZERhc2hib2FyZHMgYXMgYXBpR2V0Q29ubmVjdGVkRGFzaGJvYXJkcyB9IGZyb20gJy4uLy4uL3N0YXRlL2FwaSc7XG5pbXBvcnQgeyBEaXNwYXRjaFJlc3VsdCwgTGlicmFyeUVsZW1lbnREVE8gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IHNlYXJjaENvbXBsZXRlZCB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE8pOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBkYXNoYm9hcmRzID0gYXdhaXQgYXBpR2V0Q29ubmVjdGVkRGFzaGJvYXJkcyhsaWJyYXJ5UGFuZWwudWlkKTtcbiAgICBkaXNwYXRjaChzZWFyY2hDb21wbGV0ZWQoeyBkYXNoYm9hcmRzIH0pKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9zZWFyY2gvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZTtcbiAgZGFzaGJvYXJkVGl0bGVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlOiBEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlID0ge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Mb2FkaW5nLFxuICBkYXNoYm9hcmRUaXRsZXM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IHNlYXJjaENvbXBsZXRlZCA9IGNyZWF0ZUFjdGlvbjx7IGRhc2hib2FyZHM6IERhc2hib2FyZFNlYXJjaEhpdFtdIH0+KFxuICAnbGlicmFyeVBhbmVscy9kZWxldGUvc2VhcmNoQ29tcGxldGVkJ1xuKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciA9IChcbiAgc3RhdGU6IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgPSBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSxcbiAgYWN0aW9uOiBBbnlBY3Rpb25cbik6IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgPT4ge1xuICBpZiAoc2VhcmNoQ29tcGxldGVkLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBkYXNoYm9hcmRUaXRsZXM6IGFjdGlvbi5wYXlsb2FkLmRhc2hib2FyZHMubWFwKChkKSA9PiBkLnRpdGxlKSxcbiAgICAgIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSWNvbiwgTGluaywgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldFBhbmVsUGx1Z2luTm90Rm91bmQgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGFuZWwvY29tcG9uZW50cy9QYW5lbFBsdWdpbkVycm9yJztcbmltcG9ydCB7IFBhbmVsVHlwZUNhcmQgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGFuZWwvY29tcG9uZW50cy9WaXpUeXBlUGlja2VyL1BhbmVsVHlwZUNhcmQnO1xuXG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsIH0gZnJvbSAnLi4vRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwvRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbENhcmRQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ2xpY2s6IChwYW5lbDogTGlicmFyeUVsZW1lbnREVE8pID0+IHZvaWQ7XG4gIG9uRGVsZXRlPzogKHBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTykgPT4gdm9pZDtcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTGlicmFyeVBhbmVsQ2FyZDogUmVhY3QuRkM8TGlicmFyeVBhbmVsQ2FyZFByb3BzICYgeyBjaGlsZHJlbj86IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSB9PiA9ICh7XG4gIGxpYnJhcnlQYW5lbCxcbiAgb25DbGljayxcbiAgb25EZWxldGUsXG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zLFxufSkgPT4ge1xuICBjb25zdCBbc2hvd0RlbGV0aW9uTW9kYWwsIHNldFNob3dEZWxldGlvbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkRlbGV0ZVBhbmVsID0gKCkgPT4ge1xuICAgIG9uRGVsZXRlPy4obGlicmFyeVBhbmVsKTtcbiAgICBzZXRTaG93RGVsZXRpb25Nb2RhbChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgcGFuZWxQbHVnaW4gPSBjb25maWcucGFuZWxzW2xpYnJhcnlQYW5lbC5tb2RlbC50eXBlXSA/PyBnZXRQYW5lbFBsdWdpbk5vdEZvdW5kKGxpYnJhcnlQYW5lbC5tb2RlbC50eXBlKS5tZXRhO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQYW5lbFR5cGVDYXJkXG4gICAgICAgIGlzQ3VycmVudD17ZmFsc2V9XG4gICAgICAgIHRpdGxlPXtsaWJyYXJ5UGFuZWwubmFtZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2xpYnJhcnlQYW5lbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgcGx1Z2luPXtwYW5lbFBsdWdpbn1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGljaz8uKGxpYnJhcnlQYW5lbCl9XG4gICAgICAgIG9uRGVsZXRlPXtzaG93U2Vjb25kYXJ5QWN0aW9ucyA/ICgpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKHRydWUpIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICA8Rm9sZGVyTGluayBsaWJyYXJ5UGFuZWw9e2xpYnJhcnlQYW5lbH0gLz5cbiAgICAgIDwvUGFuZWxUeXBlQ2FyZD5cbiAgICAgIHtzaG93RGVsZXRpb25Nb2RhbCAmJiAoXG4gICAgICAgIDxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFxuICAgICAgICAgIGxpYnJhcnlQYW5lbD17bGlicmFyeVBhbmVsfVxuICAgICAgICAgIG9uQ29uZmlybT17b25EZWxldGVQYW5lbH1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dEZWxldGlvbk1vZGFsKGZhbHNlKX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgRm9sZGVyTGlua1Byb3BzIHtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbn1cblxuZnVuY3Rpb24gRm9sZGVyTGluayh7IGxpYnJhcnlQYW5lbCB9OiBGb2xkZXJMaW5rUHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghbGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkICYmICFsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWxpYnJhcnlQYW5lbC5tZXRhLmZvbGRlclVpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgICAgPEljb24gbmFtZT17J2ZvbGRlcid9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXRhQ29udGFpbmVyfT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvZGFzaGJvYXJkcy9mLyR7bGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkfWB9PlxuICAgICAgICA8SWNvbiBuYW1lPXsnZm9sZGVyLXVwbG9hZCd9IHNpemU9XCJzbVwiIC8+XG4gICAgICAgIDxzcGFuPntsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJOYW1lfTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIG1ldGFDb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBwYWRkaW5nLXRvcDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuXG4gICAgICBzdmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgfVxuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFBhbmVsUGx1Z2luTWV0YSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIHVzZVN0eWxlczIsIFZlcnRpY2FsR3JvdXAsIEZpbHRlcklucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBGb2xkZXJGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvbmVudHMvRm9sZGVyRmlsdGVyL0ZvbGRlckZpbHRlcic7XG5pbXBvcnQgeyBQYW5lbFR5cGVGaWx0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFuZWxUeXBlRmlsdGVyL1BhbmVsVHlwZUZpbHRlcic7XG5pbXBvcnQgeyBTb3J0UGlja2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb21wb25lbnRzL1NlbGVjdC9Tb3J0UGlja2VyJztcbmltcG9ydCB7IERFRkFVTFRfUEVSX1BBR0VfUEFHSU5BVElPTiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29uc3RhbnRzJztcbmltcG9ydCB7IEZvbGRlckluZm8gfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IExpYnJhcnlQYW5lbHNWaWV3IH0gZnJvbSAnLi4vTGlicmFyeVBhbmVsc1ZpZXcvTGlicmFyeVBhbmVsc1ZpZXcnO1xuXG5pbXBvcnQge1xuICBmb2xkZXJGaWx0ZXJDaGFuZ2VkLFxuICBpbml0aWFsTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlLFxuICBsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlcixcbiAgcGFuZWxGaWx0ZXJDaGFuZ2VkLFxuICBzZWFyY2hDaGFuZ2VkLFxuICBzb3J0Q2hhbmdlZCxcbn0gZnJvbSAnLi9yZWR1Y2VyJztcblxuZXhwb3J0IGVudW0gTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQge1xuICBUaWdodCA9ICd0aWdodCcsXG4gIFNwYWNpb3VzID0gJ3NwYWNpb3VzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaWJyYXJ5UGFuZWxzU2VhcmNoUHJvcHMge1xuICBvbkNsaWNrOiAocGFuZWw6IExpYnJhcnlFbGVtZW50RFRPKSA9PiB2b2lkO1xuICB2YXJpYW50PzogTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQ7XG4gIHNob3dTb3J0PzogYm9vbGVhbjtcbiAgc2hvd1BhbmVsRmlsdGVyPzogYm9vbGVhbjtcbiAgc2hvd0ZvbGRlckZpbHRlcj86IGJvb2xlYW47XG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zPzogYm9vbGVhbjtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG4gIGN1cnJlbnRGb2xkZXJJZD86IG51bWJlcjtcbiAgcGVyUGFnZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IExpYnJhcnlQYW5lbHNTZWFyY2ggPSAoe1xuICBvbkNsaWNrLFxuICB2YXJpYW50ID0gTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQuU3BhY2lvdXMsXG4gIGN1cnJlbnRQYW5lbElkLFxuICBjdXJyZW50Rm9sZGVySWQsXG4gIHBlclBhZ2UgPSBERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04sXG4gIHNob3dQYW5lbEZpbHRlciA9IGZhbHNlLFxuICBzaG93Rm9sZGVyRmlsdGVyID0gZmFsc2UsXG4gIHNob3dTb3J0ID0gZmFsc2UsXG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zID0gZmFsc2UsXG59OiBMaWJyYXJ5UGFuZWxzU2VhcmNoUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3sgc29ydERpcmVjdGlvbiwgcGFuZWxGaWx0ZXIsIGZvbGRlckZpbHRlciwgc2VhcmNoUXVlcnkgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlciwge1xuICAgIC4uLmluaXRpYWxMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUsXG4gICAgZm9sZGVyRmlsdGVyOiBjdXJyZW50Rm9sZGVySWQgPyBbY3VycmVudEZvbGRlcklkLnRvU3RyaW5nKDEwKV0gOiBbXSxcbiAgfSk7XG4gIGNvbnN0IG9uRmlsdGVyQ2hhbmdlID0gKHNlYXJjaFN0cmluZzogc3RyaW5nKSA9PiBkaXNwYXRjaChzZWFyY2hDaGFuZ2VkKHNlYXJjaFN0cmluZykpO1xuICBjb25zdCBvblNvcnRDaGFuZ2UgPSAoc29ydGluZzogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IGRpc3BhdGNoKHNvcnRDaGFuZ2VkKHNvcnRpbmcpKTtcbiAgY29uc3Qgb25Gb2xkZXJGaWx0ZXJDaGFuZ2UgPSAoZm9sZGVyczogRm9sZGVySW5mb1tdKSA9PiBkaXNwYXRjaChmb2xkZXJGaWx0ZXJDaGFuZ2VkKGZvbGRlcnMpKTtcbiAgY29uc3Qgb25QYW5lbEZpbHRlckNoYW5nZSA9IChwbHVnaW5zOiBQYW5lbFBsdWdpbk1ldGFbXSkgPT4gZGlzcGF0Y2gocGFuZWxGaWx0ZXJDaGFuZ2VkKHBsdWdpbnMpKTtcblxuICBpZiAodmFyaWFudCA9PT0gTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQuU3BhY2lvdXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwibGdcIj5cbiAgICAgICAgICA8RmlsdGVySW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnU2VhcmNoIGJ5IG5hbWUgb3IgZGVzY3JpcHRpb24nfVxuICAgICAgICAgICAgd2lkdGg9ezB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblJvd30+XG4gICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwXG4gICAgICAgICAgICAgIHNwYWNpbmc9XCJzbVwiXG4gICAgICAgICAgICAgIGp1c3RpZnk9eyhzaG93U29ydCAmJiBzaG93UGFuZWxGaWx0ZXIpIHx8IHNob3dGb2xkZXJGaWx0ZXIgPyAnc3BhY2UtYmV0d2VlbicgOiAnZmxleC1lbmQnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2hvd1NvcnQgJiYgKFxuICAgICAgICAgICAgICAgIDxTb3J0UGlja2VyIHZhbHVlPXtzb3J0RGlyZWN0aW9ufSBvbkNoYW5nZT17b25Tb3J0Q2hhbmdlfSBmaWx0ZXI9e1snYWxwaGEtYXNjJywgJ2FscGhhLWRlc2MnXX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cFxuICAgICAgICAgICAgICAgIHNwYWNpbmc9XCJzbVwiXG4gICAgICAgICAgICAgICAganVzdGlmeT17c2hvd0ZvbGRlckZpbHRlciAmJiBzaG93UGFuZWxGaWx0ZXIgPyAnc3BhY2UtYmV0d2VlbicgOiAnZmxleC1lbmQnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Nob3dGb2xkZXJGaWx0ZXIgJiYgPEZvbGRlckZpbHRlciBvbkNoYW5nZT17b25Gb2xkZXJGaWx0ZXJDaGFuZ2V9IC8+fVxuICAgICAgICAgICAgICAgIHtzaG93UGFuZWxGaWx0ZXIgJiYgPFBhbmVsVHlwZUZpbHRlciBvbkNoYW5nZT17b25QYW5lbEZpbHRlckNoYW5nZX0gLz59XG4gICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWJyYXJ5UGFuZWxzVmlld30+XG4gICAgICAgICAgICA8TGlicmFyeVBhbmVsc1ZpZXdcbiAgICAgICAgICAgICAgb25DbGlja0NhcmQ9e29uQ2xpY2t9XG4gICAgICAgICAgICAgIHNlYXJjaFN0cmluZz17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgIHNvcnREaXJlY3Rpb249e3NvcnREaXJlY3Rpb259XG4gICAgICAgICAgICAgIHBhbmVsRmlsdGVyPXtwYW5lbEZpbHRlcn1cbiAgICAgICAgICAgICAgZm9sZGVyRmlsdGVyPXtmb2xkZXJGaWx0ZXJ9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYW5lbElkPXtjdXJyZW50UGFuZWxJZH1cbiAgICAgICAgICAgICAgc2hvd1NlY29uZGFyeUFjdGlvbnM9e3Nob3dTZWNvbmRhcnlBY3Rpb25zfVxuICAgICAgICAgICAgICBwZXJQYWdlPXtwZXJQYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPFZlcnRpY2FsR3JvdXAgc3BhY2luZz1cInhzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlnaHRCdXR0b25Sb3d9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGlnaHRGaWx0ZXJ9PlxuICAgICAgICAgICAgPEZpbHRlcklucHV0IHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e29uRmlsdGVyQ2hhbmdlfSBwbGFjZWhvbGRlcj17J1NlYXJjaCBieSBuYW1lJ30gd2lkdGg9ezB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWdodFNvcnRGaWx0ZXJ9PlxuICAgICAgICAgICAge3Nob3dTb3J0ICYmIDxTb3J0UGlja2VyIHZhbHVlPXtzb3J0RGlyZWN0aW9ufSBvbkNoYW5nZT17b25Tb3J0Q2hhbmdlfSAvPn1cbiAgICAgICAgICAgIHtzaG93Rm9sZGVyRmlsdGVyICYmIDxGb2xkZXJGaWx0ZXIgb25DaGFuZ2U9e29uRm9sZGVyRmlsdGVyQ2hhbmdlfSBtYXhNZW51SGVpZ2h0PXsyMDB9IC8+fVxuICAgICAgICAgICAge3Nob3dQYW5lbEZpbHRlciAmJiA8UGFuZWxUeXBlRmlsdGVyIG9uQ2hhbmdlPXtvblBhbmVsRmlsdGVyQ2hhbmdlfSBtYXhNZW51SGVpZ2h0PXsyMDB9IC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWJyYXJ5UGFuZWxzVmlld30+XG4gICAgICAgICAgPExpYnJhcnlQYW5lbHNWaWV3XG4gICAgICAgICAgICBvbkNsaWNrQ2FyZD17b25DbGlja31cbiAgICAgICAgICAgIHNlYXJjaFN0cmluZz17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBzb3J0RGlyZWN0aW9uPXtzb3J0RGlyZWN0aW9ufVxuICAgICAgICAgICAgcGFuZWxGaWx0ZXI9e3BhbmVsRmlsdGVyfVxuICAgICAgICAgICAgZm9sZGVyRmlsdGVyPXtmb2xkZXJGaWx0ZXJ9XG4gICAgICAgICAgICBjdXJyZW50UGFuZWxJZD17Y3VycmVudFBhbmVsSWR9XG4gICAgICAgICAgICBzaG93U2Vjb25kYXJ5QWN0aW9ucz17c2hvd1NlY29uZGFyeUFjdGlvbnN9XG4gICAgICAgICAgICBwZXJQYWdlPXtwZXJQYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgYnV0dG9uUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9OyAvLyBDbGVhciB0eXBlcyBsaW5rXG4gICAgYCxcbiAgICB0aWdodEJ1dHRvblJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDQpfTsgLy8gQ2xlYXIgdHlwZXMgbGlua1xuICAgIGAsXG4gICAgdGlnaHRGaWx0ZXI6IGNzc2BcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBgLFxuICAgIHRpZ2h0U29ydEZpbHRlcjogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDAsIDAsIDAsIDAuNSl9O1xuICAgIGAsXG4gICAgbGlicmFyeVBhbmVsc1ZpZXc6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgUGFuZWxQbHVnaW5NZXRhLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgRm9sZGVySW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUge1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBzb3J0RGlyZWN0aW9uPzogc3RyaW5nO1xuICBwYW5lbEZpbHRlcjogc3RyaW5nW107XG4gIGZvbGRlckZpbHRlcjogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlOiBMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUgPSB7XG4gIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgcGFuZWxGaWx0ZXI6IFtdLFxuICBmb2xkZXJGaWx0ZXI6IFtdLFxuICBzb3J0RGlyZWN0aW9uOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxzdHJpbmc+KCdsaWJyYXJ5UGFuZWxzL3NlYXJjaC9zZWFyY2hDaGFuZ2VkJyk7XG5leHBvcnQgY29uc3Qgc29ydENoYW5nZWQgPSBjcmVhdGVBY3Rpb248U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+KCdsaWJyYXJ5UGFuZWxzL3NlYXJjaC9zb3J0Q2hhbmdlZCcpO1xuZXhwb3J0IGNvbnN0IHBhbmVsRmlsdGVyQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxQYW5lbFBsdWdpbk1ldGFbXT4oJ2xpYnJhcnlQYW5lbHMvc2VhcmNoL3BhbmVsRmlsdGVyQ2hhbmdlZCcpO1xuZXhwb3J0IGNvbnN0IGZvbGRlckZpbHRlckNoYW5nZWQgPSBjcmVhdGVBY3Rpb248Rm9sZGVySW5mb1tdPignbGlicmFyeVBhbmVscy9zZWFyY2gvZm9sZGVyRmlsdGVyQ2hhbmdlZCcpO1xuXG5leHBvcnQgY29uc3QgbGlicmFyeVBhbmVsc1NlYXJjaFJlZHVjZXIgPSAoc3RhdGU6IExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZSwgYWN0aW9uOiBBbnlBY3Rpb24pID0+IHtcbiAgaWYgKHNlYXJjaENoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBzZWFyY2hRdWVyeTogYWN0aW9uLnBheWxvYWQgfTtcbiAgfVxuXG4gIGlmIChzb3J0Q2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNvcnREaXJlY3Rpb246IGFjdGlvbi5wYXlsb2FkLnZhbHVlIH07XG4gIH1cblxuICBpZiAocGFuZWxGaWx0ZXJDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgcGFuZWxGaWx0ZXI6IGFjdGlvbi5wYXlsb2FkLm1hcCgocCkgPT4gcC5pZCkgfTtcbiAgfVxuXG4gIGlmIChmb2xkZXJGaWx0ZXJDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgZm9sZGVyRmlsdGVyOiBhY3Rpb24ucGF5bG9hZC5tYXAoKGYpID0+IFN0cmluZyhmLmlkISkpIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lLCBMb2FkaW5nU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFBhZ2luYXRpb24sIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgTGlicmFyeUVsZW1lbnREVE8gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBMaWJyYXJ5UGFuZWxDYXJkIH0gZnJvbSAnLi4vTGlicmFyeVBhbmVsQ2FyZC9MaWJyYXJ5UGFuZWxDYXJkJztcblxuaW1wb3J0IHsgYXN5bmNEaXNwYXRjaGVyLCBkZWxldGVMaWJyYXJ5UGFuZWwsIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgY2hhbmdlUGFnZSwgaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGxpYnJhcnlQYW5lbHNWaWV3UmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmludGVyZmFjZSBMaWJyYXJ5UGFuZWxWaWV3UHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIG9uQ2xpY2tDYXJkOiAocGFuZWw6IExpYnJhcnlFbGVtZW50RFRPKSA9PiB2b2lkO1xuICBzaG93U2Vjb25kYXJ5QWN0aW9ucz86IGJvb2xlYW47XG4gIGN1cnJlbnRQYW5lbElkPzogc3RyaW5nO1xuICBzZWFyY2hTdHJpbmc6IHN0cmluZztcbiAgc29ydERpcmVjdGlvbj86IHN0cmluZztcbiAgcGFuZWxGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgZm9sZGVyRmlsdGVyPzogc3RyaW5nW107XG4gIHBlclBhZ2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBMaWJyYXJ5UGFuZWxzVmlldzogUmVhY3QuRkM8TGlicmFyeVBhbmVsVmlld1Byb3BzPiA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgb25DbGlja0NhcmQsXG4gIHNlYXJjaFN0cmluZyxcbiAgc29ydERpcmVjdGlvbixcbiAgcGFuZWxGaWx0ZXIsXG4gIGZvbGRlckZpbHRlcixcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnMsXG4gIGN1cnJlbnRQYW5lbElkOiBjdXJyZW50UGFuZWwsXG4gIHBlclBhZ2U6IHByb3BzUGVyUGFnZSA9IDQwLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0UGFuZWxWaWV3U3R5bGVzKTtcbiAgY29uc3QgW3sgbGlicmFyeVBhbmVscywgcGFnZSwgcGVyUGFnZSwgbnVtYmVyT2ZQYWdlcywgbG9hZGluZ1N0YXRlLCBjdXJyZW50UGFuZWxJZCB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGxpYnJhcnlQYW5lbHNWaWV3UmVkdWNlcixcbiAgICB7XG4gICAgICAuLi5pbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSxcbiAgICAgIGN1cnJlbnRQYW5lbElkOiBjdXJyZW50UGFuZWwsXG4gICAgICBwZXJQYWdlOiBwcm9wc1BlclBhZ2UsXG4gICAgfVxuICApO1xuICBjb25zdCBhc3luY0Rpc3BhdGNoID0gdXNlTWVtbygoKSA9PiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2gpLCBbZGlzcGF0Y2hdKTtcbiAgdXNlRGVib3VuY2UoXG4gICAgKCkgPT5cbiAgICAgIGFzeW5jRGlzcGF0Y2goXG4gICAgICAgIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMoe1xuICAgICAgICAgIHNlYXJjaFN0cmluZyxcbiAgICAgICAgICBzb3J0RGlyZWN0aW9uLFxuICAgICAgICAgIHBhbmVsRmlsdGVyLFxuICAgICAgICAgIGZvbGRlckZpbHRlcixcbiAgICAgICAgICBwYWdlLFxuICAgICAgICAgIHBlclBhZ2UsXG4gICAgICAgICAgY3VycmVudFBhbmVsSWQsXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgIDMwMCxcbiAgICBbc2VhcmNoU3RyaW5nLCBzb3J0RGlyZWN0aW9uLCBwYW5lbEZpbHRlciwgZm9sZGVyRmlsdGVyLCBwYWdlLCBhc3luY0Rpc3BhdGNoXVxuICApO1xuICBjb25zdCBvbkRlbGV0ZSA9ICh7IHVpZCB9OiBMaWJyYXJ5RWxlbWVudERUTykgPT5cbiAgICBhc3luY0Rpc3BhdGNoKGRlbGV0ZUxpYnJhcnlQYW5lbCh1aWQsIHsgc2VhcmNoU3RyaW5nLCBwYWdlLCBwZXJQYWdlIH0pKTtcbiAgY29uc3Qgb25QYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4gYXN5bmNEaXNwYXRjaChjaGFuZ2VQYWdlKHsgcGFnZSB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRhaW5lciwgY2xhc3NOYW1lKX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpYnJhcnlQYW5lbExpc3R9PlxuICAgICAgICB7bG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyA/IChcbiAgICAgICAgICA8cD5Mb2FkaW5nIGxpYnJhcnkgcGFuZWxzLi4uPC9wPlxuICAgICAgICApIDogbGlicmFyeVBhbmVscy5sZW5ndGggPCAxID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm5vUGFuZWxzRm91bmR9Pk5vIGxpYnJhcnkgcGFuZWxzIGZvdW5kLjwvcD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBsaWJyYXJ5UGFuZWxzPy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxMaWJyYXJ5UGFuZWxDYXJkXG4gICAgICAgICAgICAgIGtleT17YGxpYnJhcnktcGFuZWw9JHtpfWB9XG4gICAgICAgICAgICAgIGxpYnJhcnlQYW5lbD17aXRlbX1cbiAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQ2FyZH1cbiAgICAgICAgICAgICAgc2hvd1NlY29uZGFyeUFjdGlvbnM9e3Nob3dTZWNvbmRhcnlBY3Rpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7bGlicmFyeVBhbmVscy5sZW5ndGggPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnaW5hdGlvbn0+XG4gICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXtwYWdlfVxuICAgICAgICAgICAgbnVtYmVyT2ZQYWdlcz17bnVtYmVyT2ZQYWdlc31cbiAgICAgICAgICAgIG9uTmF2aWdhdGU9e29uUGFnZUNoYW5nZX1cbiAgICAgICAgICAgIGhpZGVXaGVuU2luZ2xlUGFnZT17dHJ1ZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0UGFuZWxWaWV3U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYCxcbiAgICBsaWJyYXJ5UGFuZWxMaXN0OiBjc3NgXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC1nYXA6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBzZWFyY2hIZWFkZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYCxcbiAgICBuZXdQYW5lbEJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgICBwYWdpbmF0aW9uOiBjc3NgXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICAgIGAsXG4gICAgbm9QYW5lbHNGb3VuZDogY3NzYFxuICAgICAgbGFiZWw6IG5vUGFuZWxzRm91bmQ7XG4gICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmcm9tLCBtZXJnZSwgb2YsIFN1YnNjcmlwdGlvbiwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbmFsaXplLCBtYXBUbywgbWVyZ2VNYXAsIHNoYXJlLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRlbGV0ZUxpYnJhcnlQYW5lbCBhcyBhcGlEZWxldGVMaWJyYXJ5UGFuZWwsIGdldExpYnJhcnlQYW5lbHMgfSBmcm9tICcuLi8uLi9zdGF0ZS9hcGknO1xuXG5pbXBvcnQgeyBpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgaW5pdFNlYXJjaCwgc2VhcmNoQ29tcGxldGVkIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxudHlwZSBEaXNwYXRjaFJlc3VsdCA9IChkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikgPT4gdm9pZDtcbmludGVyZmFjZSBTZWFyY2hBcmdzIHtcbiAgcGVyUGFnZTogbnVtYmVyO1xuICBwYWdlOiBudW1iZXI7XG4gIHNlYXJjaFN0cmluZzogc3RyaW5nO1xuICBzb3J0RGlyZWN0aW9uPzogc3RyaW5nO1xuICBwYW5lbEZpbHRlcj86IHN0cmluZ1tdO1xuICBmb2xkZXJGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hGb3JMaWJyYXJ5UGFuZWxzKGFyZ3M6IFNlYXJjaEFyZ3MpOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgY29uc3QgZGF0YU9ic2VydmFibGUgPSBmcm9tKFxuICAgICAgZ2V0TGlicmFyeVBhbmVscyh7XG4gICAgICAgIHNlYXJjaFN0cmluZzogYXJncy5zZWFyY2hTdHJpbmcsXG4gICAgICAgIHBlclBhZ2U6IGFyZ3MucGVyUGFnZSxcbiAgICAgICAgcGFnZTogYXJncy5wYWdlLFxuICAgICAgICBleGNsdWRlVWlkOiBhcmdzLmN1cnJlbnRQYW5lbElkLFxuICAgICAgICBzb3J0RGlyZWN0aW9uOiBhcmdzLnNvcnREaXJlY3Rpb24sXG4gICAgICAgIHR5cGVGaWx0ZXI6IGFyZ3MucGFuZWxGaWx0ZXIsXG4gICAgICAgIGZvbGRlckZpbHRlcjogYXJncy5mb2xkZXJGaWx0ZXIsXG4gICAgICB9KVxuICAgICkucGlwZShcbiAgICAgIG1lcmdlTWFwKCh7IHBlclBhZ2UsIGVsZW1lbnRzOiBsaWJyYXJ5UGFuZWxzLCBwYWdlLCB0b3RhbENvdW50IH0pID0+XG4gICAgICAgIG9mKHNlYXJjaENvbXBsZXRlZCh7IGxpYnJhcnlQYW5lbHMsIHBhZ2UsIHBlclBhZ2UsIHRvdGFsQ291bnQgfSkpXG4gICAgICApLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIG9mKHNlYXJjaENvbXBsZXRlZCh7IC4uLmluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCBwYWdlOiBhcmdzLnBhZ2UsIHBlclBhZ2U6IGFyZ3MucGVyUGFnZSB9KSk7XG4gICAgICB9KSxcbiAgICAgIGZpbmFsaXplKCgpID0+IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpKSwgLy8gbWFrZSBzdXJlIHdlIHVuc3Vic2NyaWJlXG4gICAgICBzaGFyZSgpXG4gICAgKTtcblxuICAgIHN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICAvLyBJZiA1MG1zIHdpdGhvdXQgYSByZXNwb25zZSBkaXNwYXRjaCBhIGxvYWRpbmcgc3RhdGVcbiAgICAgIC8vIG1hcFRvIHdpbGwgdHJhbnNsYXRlIHRoZSB0aW1lciBldmVudCBpbnRvIGEgbG9hZGluZyBzdGF0ZVxuICAgICAgLy8gdGFrZVVudGlsIHdpbGwgY2FuY2VsIHRoZSB0aW1lciBlbWl0IHdoZW4gZmlyc3QgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgb24gdGhlIGRhdGFPYnNlcnZhYmxlXG4gICAgICBtZXJnZSh0aW1lcig1MCkucGlwZShtYXBUbyhpbml0U2VhcmNoKCkpLCB0YWtlVW50aWwoZGF0YU9ic2VydmFibGUpKSwgZGF0YU9ic2VydmFibGUpLnN1YnNjcmliZShkaXNwYXRjaClcbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGlicmFyeVBhbmVsKHVpZDogc3RyaW5nLCBhcmdzOiBTZWFyY2hBcmdzKTogRGlzcGF0Y2hSZXN1bHQge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwaURlbGV0ZUxpYnJhcnlQYW5lbCh1aWQpO1xuICAgICAgc2VhcmNoRm9yTGlicmFyeVBhbmVscyhhcmdzKShkaXNwYXRjaCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2g6IERpc3BhdGNoPEFueUFjdGlvbj4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb246IGFueSkge1xuICAgIGlmIChhY3Rpb24gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCk7XG4gICAgfVxuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb24pO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlIHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGU7XG4gIGxpYnJhcnlQYW5lbHM6IExpYnJhcnlFbGVtZW50RFRPW107XG4gIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgcGVyUGFnZTogbnVtYmVyO1xuICBwYWdlOiBudW1iZXI7XG4gIG51bWJlck9mUGFnZXM6IG51bWJlcjtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZTogTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSA9IHtcbiAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyxcbiAgbGlicmFyeVBhbmVsczogW10sXG4gIHRvdGFsQ291bnQ6IDAsXG4gIHBlclBhZ2U6IDQwLFxuICBwYWdlOiAxLFxuICBudW1iZXJPZlBhZ2VzOiAwLFxuICBjdXJyZW50UGFuZWxJZDogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRTZWFyY2ggPSBjcmVhdGVBY3Rpb24oJ2xpYnJhcnlQYW5lbHMvdmlldy9pbml0U2VhcmNoJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoQ29tcGxldGVkID0gY3JlYXRlQWN0aW9uPFxuICBPbWl0PExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsICdjdXJyZW50UGFuZWxJZCcgfCAnc2VhcmNoU3RyaW5nJyB8ICdsb2FkaW5nU3RhdGUnIHwgJ251bWJlck9mUGFnZXMnPlxuPignbGlicmFyeVBhbmVscy92aWV3L3NlYXJjaENvbXBsZXRlZCcpO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFnZSA9IGNyZWF0ZUFjdGlvbjxQaWNrPExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsICdwYWdlJz4+KCdsaWJyYXJ5UGFuZWxzL3ZpZXcvY2hhbmdlUGFnZScpO1xuXG5leHBvcnQgY29uc3QgbGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyID0gKHN0YXRlOiBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xuICBpZiAoaW5pdFNlYXJjaC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcgfTtcbiAgfVxuXG4gIGlmIChzZWFyY2hDb21wbGV0ZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIGNvbnN0IHsgbGlicmFyeVBhbmVscywgcGFnZSwgcGVyUGFnZSwgdG90YWxDb3VudCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgY29uc3QgbnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENvdW50IC8gcGVyUGFnZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbGlicmFyeVBhbmVscyxcbiAgICAgIHBlclBhZ2UsXG4gICAgICB0b3RhbENvdW50LFxuICAgICAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgIG51bWJlck9mUGFnZXMsXG4gICAgICBwYWdlOiBwYWdlID4gbnVtYmVyT2ZQYWdlcyA/IHBhZ2UgLSAxIDogcGFnZSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKGNoYW5nZVBhZ2UubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYWdlOiBhY3Rpb24ucGF5bG9hZC5wYWdlIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgU2VsZWN0YWJsZVZhbHVlLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEFzeW5jU2VsZWN0LCBCdXR0b24sIE1vZGFsLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRTZWFyY2hIaXQgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcywgZ2V0TGlicmFyeVBhbmVsQ29ubmVjdGVkRGFzaGJvYXJkcyB9IGZyb20gJy4uLy4uL3N0YXRlL2FwaSc7XG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBPcGVuTGlicmFyeVBhbmVsTW9kYWxQcm9wcyB7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9wZW5MaWJyYXJ5UGFuZWxNb2RhbCh7IGxpYnJhcnlQYW5lbCwgb25EaXNtaXNzIH06IE9wZW5MaWJyYXJ5UGFuZWxNb2RhbFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Nvbm5lY3RlZCwgc2V0Q29ubmVjdGVkXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbb3B0aW9uLCBzZXRPcHRpb25dID0gdXNlU3RhdGU8U2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Q29ubmVjdGVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29ubmVjdGVkRGFzaGJvYXJkcyA9IGF3YWl0IGdldExpYnJhcnlQYW5lbENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsLnVpZCk7XG4gICAgICBzZXRDb25uZWN0ZWQoY29ubmVjdGVkRGFzaGJvYXJkcy5sZW5ndGgpO1xuICAgIH07XG4gICAgZ2V0Q29ubmVjdGVkKCk7XG4gIH0sIFtsaWJyYXJ5UGFuZWwudWlkXSk7XG4gIGNvbnN0IGxvYWRPcHRpb25zID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlYXJjaFN0cmluZzogc3RyaW5nKSA9PiBsb2FkT3B0aW9uc0FzeW5jKGxpYnJhcnlQYW5lbC51aWQsIHNlYXJjaFN0cmluZywgc2V0TG9hZGluZyksXG4gICAgW2xpYnJhcnlQYW5lbC51aWRdXG4gICk7XG4gIGNvbnN0IGRlYm91bmNlZExvYWRPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBkZWJvdW5jZShsb2FkT3B0aW9ucywgMzAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pLFxuICAgIFtsb2FkT3B0aW9uc11cbiAgKTtcbiAgY29uc3Qgb25WaWV3UGFuZWwgPSAoZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2godXJsVXRpbC5yZW5kZXJVcmwoYC9kLyR7b3B0aW9uPy52YWx1ZT8udWlkfWAsIHt9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdGl0bGU9XCJWaWV3IHBhbmVsIGluIGRhc2hib2FyZFwiIG9uRGlzbWlzcz17b25EaXNtaXNzfSBvbkNsaWNrQmFja2Ryb3A9e29uRGlzbWlzc30gaXNPcGVuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICB7Y29ubmVjdGVkID09PSAwID8gKFxuICAgICAgICAgIDxzcGFuPlBhbmVsIGlzIG5vdCBsaW5rZWQgdG8gYSBkYXNoYm9hcmQuIEFkZCB0aGUgcGFuZWwgdG8gYSBkYXNoYm9hcmQgYW5kIHJldHJ5Ljwvc3Bhbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHtjb25uZWN0ZWQgPiAwID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhpcyBwYW5lbCBpcyBiZWluZyB1c2VkIGlueycgJ31cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICB7Y29ubmVjdGVkfSB7Y29ubmVjdGVkID4gMSA/ICdkYXNoYm9hcmRzJyA6ICdkYXNoYm9hcmQnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgLlBsZWFzZSBjaG9vc2Ugd2hpY2ggZGFzaGJvYXJkIHRvIHZpZXcgdGhlIHBhbmVsIGluOlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM9e3RydWV9XG4gICAgICAgICAgICAgIGxvYWRPcHRpb25zPXtkZWJvdW5jZWRMb2FkT3B0aW9uc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldE9wdGlvbn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydCB0eXBpbmcgdG8gc2VhcmNoIGZvciBkYXNoYm9hcmRcIlxuICAgICAgICAgICAgICBub09wdGlvbnNNZXNzYWdlPVwiTm8gZGFzaGJvYXJkcyBmb3VuZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17b25EaXNtaXNzfSBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblZpZXdQYW5lbH0gZGlzYWJsZWQ9eyFCb29sZWFuKG9wdGlvbil9PlxuICAgICAgICAgIHtvcHRpb24gPyBgVmlldyBwYW5lbCBpbiAke29wdGlvbj8ubGFiZWx9Li4uYCA6ICdWaWV3IHBhbmVsIGluIGRhc2hib2FyZC4uLid9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZE9wdGlvbnNBc3luYyh1aWQ6IHN0cmluZywgc2VhcmNoU3RyaW5nOiBzdHJpbmcsIHNldExvYWRpbmc6IChsb2FkaW5nOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gIHNldExvYWRpbmcodHJ1ZSk7XG4gIGNvbnN0IHNlYXJjaEhpdHMgPSBhd2FpdCBnZXRDb25uZWN0ZWREYXNoYm9hcmRzKHVpZCk7XG4gIGNvbnN0IG9wdGlvbnMgPSBzZWFyY2hIaXRzXG4gICAgLmZpbHRlcigoZCkgPT4gZC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0cmluZy50b0xvd2VyQ2FzZSgpKSlcbiAgICAubWFwKChkKSA9PiAoeyBsYWJlbDogZC50aXRsZSwgdmFsdWU6IGQgfSkpO1xuICBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kYWxTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIG15VGFibGU6IGNzc2BcbiAgICAgIG1heC1oZWlnaHQ6IDIwNHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5ib3JkZXIucmFkaXVzLnNtfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJnM307XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzF9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLm1kfTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICB0aGVhZCB7XG4gICAgICAgIGNvbG9yOiAjNTM4YWRlO1xuICAgICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICAgIH1cblxuICAgICAgdGgsXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxM3B4O1xuICAgICAgICBoZWlnaHQ6ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgICB9XG5cbiAgICAgIHRib2R5ID4gdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iZzJ9O1xuICAgICAgfVxuICAgIGAsXG4gICAgbm90ZVRleHRib3g6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgYCxcbiAgICB0ZXh0SW5mbzogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICBgLFxuICAgIGRhc2hib2FyZFNlYXJjaDogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIG1vZGFsOiBjc3NgXG4gICAgICB3aWR0aDogNTAwcHg7XG4gICAgYCxcbiAgICBtb2RhbFRleHQ6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmhlYWRpbmcuaDR9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmxpbmt9O1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygke3RoZW1lLnNwYWNpbmcuZH0gKiAyKTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcuZH07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBpc1Vuc2lnbmVkUGx1Z2luU2lnbmF0dXJlLCBQYW5lbFBsdWdpbk1ldGEsIFBsdWdpblN0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEljb25CdXR0b24sIFBsdWdpblNpZ25hdHVyZUJhZGdlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGx1Z2luU3RhdGVJbmZvIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvY29tcG9uZW50cy9QbHVnaW5TdGF0ZUluZm8nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc0N1cnJlbnQ6IGJvb2xlYW47XG4gIHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhO1xuICB0aXRsZTogc3RyaW5nO1xuICBvbkNsaWNrOiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MRGl2RWxlbWVudD47XG4gIG9uRGVsZXRlPzogKCkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBzaG93QmFkZ2U/OiBib29sZWFuO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFBhbmVsVHlwZUNhcmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGlzQ3VycmVudCxcbiAgdGl0bGUsXG4gIHBsdWdpbixcbiAgb25DbGljayxcbiAgb25EZWxldGUsXG4gIGRpc2FibGVkLFxuICBzaG93QmFkZ2UsXG4gIGRlc2NyaXB0aW9uLFxuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBjc3NDbGFzcyA9IGN4KHtcbiAgICBbc3R5bGVzLml0ZW1dOiB0cnVlLFxuICAgIFtzdHlsZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCB8fCBwbHVnaW4uc3RhdGUgPT09IFBsdWdpblN0YXRlLmRlcHJlY2F0ZWQsXG4gICAgW3N0eWxlcy5jdXJyZW50XTogaXNDdXJyZW50LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3N9XG4gICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMuY29tcG9uZW50cy5QbHVnaW5WaXN1YWxpemF0aW9uLml0ZW0ocGx1Z2luLm5hbWUpfVxuICAgICAgb25DbGljaz17ZGlzYWJsZWQgPyB1bmRlZmluZWQgOiBvbkNsaWNrfVxuICAgICAgdGl0bGU9e2lzQ3VycmVudCA/ICdDbGljayBhZ2FpbiB0byBjbG9zZSB0aGlzIHNlY3Rpb24nIDogcGx1Z2luLm5hbWV9XG4gICAgPlxuICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHNyYz17cGx1Z2luLmluZm8ubG9nb3Muc21hbGx9IGFsdD1cIlwiIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbUNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAge2Rlc2NyaXB0aW9uID8gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3NwYW4+IDogbnVsbH1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd0JhZGdlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5iYWRnZSwgZGlzYWJsZWQgJiYgc3R5bGVzLmRpc2FibGVkKX0+XG4gICAgICAgICAgPFBhbmVsUGx1Z2luQmFkZ2UgcGx1Z2luPXtwbHVnaW59IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtvbkRlbGV0ZSAmJiAoXG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgbmFtZT1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBvbkRlbGV0ZSgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlQnV0dG9ufVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgYnV0dG9uIG9uIHBhbmVsIHR5cGUgY2FyZFwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGFuZWxUeXBlQ2FyZC5kaXNwbGF5TmFtZSA9ICdQYW5lbFR5cGVDYXJkJztcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaXRlbTogY3NzYFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gICAgICBib3gtc2hhZG93OiAke3RoZW1lLnNoYWRvd3MuejF9O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRyYW5zaXRpb246ICR7dGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnYmFja2dyb3VuZCddLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydCxcbiAgICAgIH0pfTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmVtcGhhc2l6ZSh0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnksIDAuMDMpfTtcbiAgICAgIH1cbiAgICBgLFxuICAgIGl0ZW1Db250ZW50OiBjc3NgXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDAsIDEpfTtcbiAgICBgLFxuICAgIGN1cnJlbnQ6IGNzc2BcbiAgICAgIGxhYmVsOiBjdXJyZW50VmlzdWFsaXphdGlvbkl0ZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5LmJvcmRlcn07XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5hY3Rpb24uc2VsZWN0ZWR9O1xuICAgIGAsXG4gICAgZGlzYWJsZWQ6IGNzc2BcbiAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYCxcbiAgICBuYW1lOiBjc3NgXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bX07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBgLFxuICAgIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5ib2R5U21hbGwuZm9udFNpemV9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TGlnaHR9O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtaGVpZ2h0OiA0LjVlbTtcbiAgICBgLFxuICAgIGltZzogY3NzYFxuICAgICAgbWF4LWhlaWdodDogMzhweDtcbiAgICAgIHdpZHRoOiAzOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYCxcbiAgICBiYWRnZTogY3NzYFxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5wcmltYXJ5fTtcbiAgICBgLFxuICAgIGRlbGV0ZUJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgYCxcbiAgfTtcbn07XG5cbmludGVyZmFjZSBQYW5lbFBsdWdpbkJhZGdlUHJvcHMge1xuICBwbHVnaW46IFBhbmVsUGx1Z2luTWV0YTtcbn1cblxuY29uc3QgUGFuZWxQbHVnaW5CYWRnZTogUmVhY3QuRkM8UGFuZWxQbHVnaW5CYWRnZVByb3BzPiA9ICh7IHBsdWdpbiB9KSA9PiB7XG4gIGlmIChpc1Vuc2lnbmVkUGx1Z2luU2lnbmF0dXJlKHBsdWdpbi5zaWduYXR1cmUpKSB7XG4gICAgcmV0dXJuIDxQbHVnaW5TaWduYXR1cmVCYWRnZSBzdGF0dXM9e3BsdWdpbi5zaWduYXR1cmV9IC8+O1xuICB9XG5cbiAgcmV0dXJuIDxQbHVnaW5TdGF0ZUluZm8gc3RhdGU9e3BsdWdpbi5zdGF0ZX0gLz47XG59O1xuXG5QYW5lbFBsdWdpbkJhZGdlLmRpc3BsYXlOYW1lID0gJ1BhbmVsUGx1Z2luQmFkZ2UnO1xuIiwiaW1wb3J0IHsgUGFuZWxQbHVnaW5NZXRhLCBQbHVnaW5TdGF0ZSwgdW5Fc2NhcGVTdHJpbmdGcm9tUmVnZXggfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQYW5lbFBsdWdpbk1ldGEoKTogUGFuZWxQbHVnaW5NZXRhW10ge1xuICBjb25zdCBhbGxQYW5lbHMgPSBjb25maWcucGFuZWxzO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhhbGxQYW5lbHMpXG4gICAgLmZpbHRlcigoa2V5KSA9PiBhbGxQYW5lbHNba2V5XVsnaGlkZUZyb21MaXN0J10gPT09IGZhbHNlKVxuICAgIC5tYXAoKGtleSkgPT4gYWxsUGFuZWxzW2tleV0pXG4gICAgLnNvcnQoKGE6IFBhbmVsUGx1Z2luTWV0YSwgYjogUGFuZWxQbHVnaW5NZXRhKSA9PiBhLnNvcnQgLSBiLnNvcnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyUGx1Z2luTGlzdChcbiAgcGx1Z2luc0xpc3Q6IFBhbmVsUGx1Z2luTWV0YVtdLFxuICBzZWFyY2hRdWVyeTogc3RyaW5nLCAvLyBOb3RlOiB0aGlzIHdpbGwgYmUgYW4gZXNjYXBlZCByZWdleCBzdHJpbmcgYXMgaXQgY29tZXMgZnJvbSBgRmlsdGVySW5wdXRgXG4gIGN1cnJlbnQ6IFBhbmVsUGx1Z2luTWV0YVxuKTogUGFuZWxQbHVnaW5NZXRhW10ge1xuICBpZiAoIXNlYXJjaFF1ZXJ5Lmxlbmd0aCkge1xuICAgIHJldHVybiBwbHVnaW5zTGlzdC5maWx0ZXIoKHApID0+IHtcbiAgICAgIGlmIChwLnN0YXRlID09PSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50LmlkID09PSBwLmlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBxdWVyeSA9IHVuRXNjYXBlU3RyaW5nRnJvbVJlZ2V4KHNlYXJjaFF1ZXJ5KS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBmaXJzdDogUGFuZWxQbHVnaW5NZXRhW10gPSBbXTtcbiAgY29uc3QgbWF0Y2g6IFBhbmVsUGx1Z2luTWV0YVtdID0gW107XG4gIGNvbnN0IGlzR3JhcGhRdWVyeSA9ICdncmFwaCcuc3RhcnRzV2l0aChxdWVyeSk7XG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIHBsdWdpbnNMaXN0KSB7XG4gICAgaWYgKGl0ZW0uc3RhdGUgPT09IFBsdWdpblN0YXRlLmRlcHJlY2F0ZWQgJiYgY3VycmVudC5pZCAhPT0gaXRlbS5pZCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGlkeCA9IG5hbWUuaW5kZXhPZihxdWVyeSk7XG5cbiAgICBpZiAoaWR4ID09PSAwKSB7XG4gICAgICBmaXJzdC5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoaWR4ID4gMCkge1xuICAgICAgbWF0Y2gucHVzaChpdGVtKTtcbiAgICB9IGVsc2UgaWYgKGlzR3JhcGhRdWVyeSAmJiBpdGVtLmlkID09PSAndGltZXNlcmllcycpIHtcbiAgICAgIGZpcnN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpcnN0LmNvbmNhdChtYXRjaCk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpblN0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWRnZSwgQmFkZ2VQcm9wcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU/OiBQbHVnaW5TdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IFBsdWdpblN0YXRlSW5mbzogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBnZXRGZWF0dXJlU3RhdGVJbmZvKHByb3BzLnN0YXRlKTtcblxuICBpZiAoIWRpc3BsYXkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiA8QmFkZ2UgY29sb3I9e2Rpc3BsYXkuY29sb3J9IHRpdGxlPXtkaXNwbGF5LnRvb2x0aXB9IHRleHQ9e2Rpc3BsYXkudGV4dH0gaWNvbj17ZGlzcGxheS5pY29ufSAvPjtcbn07XG5cbmZ1bmN0aW9uIGdldEZlYXR1cmVTdGF0ZUluZm8oc3RhdGU/OiBQbHVnaW5TdGF0ZSk6IEJhZGdlUHJvcHMgfCBudWxsIHtcbiAgc3dpdGNoIChzdGF0ZSkge1xuICAgIGNhc2UgUGx1Z2luU3RhdGUuZGVwcmVjYXRlZDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdEZXByZWNhdGVkJyxcbiAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5hbHBoYTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdBbHBoYScsXG4gICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZXhwZXJpbWVudGFsIGFuZCBmdXR1cmUgdXBkYXRlcyBtaWdodCBub3QgYmUgYmFja3dhcmQgY29tcGF0aWJsZWAsXG4gICAgICB9O1xuICAgIGNhc2UgUGx1Z2luU3RhdGUuYmV0YTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6ICdCZXRhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBjbG9zZSB0byBjb21wbGV0ZSBidXQgbm90IGZ1bGx5IHRlc3RlZGAsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNzcyIsImRlYm91bmNlIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkFzeW5jTXVsdGlTZWxlY3QiLCJJY29uIiwiQnV0dG9uIiwidXNlU3R5bGVzMiIsImdldEJhY2tlbmRTcnYiLCJQZXJtaXNzaW9uTGV2ZWxTdHJpbmciLCJGb2xkZXJGaWx0ZXIiLCJvbkNoYW5nZSIsInByb3BzT25DaGFuZ2UiLCJtYXhNZW51SGVpZ2h0Iiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRPcHRpb25zIiwic2VhcmNoU3RyaW5nIiwiZ2V0Rm9sZGVyc0FzT3B0aW9ucyIsImRlYm91bmNlZExvYWRPcHRpb25zIiwidmFsdWUiLCJzZXRWYWx1ZSIsImZvbGRlcnMiLCJjaGFuZ2VkRm9sZGVycyIsImZvbGRlciIsInB1c2giLCJzZWxlY3RPcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJpc011bHRpIiwibm9PcHRpb25zTWVzc2FnZSIsInBsYWNlaG9sZGVyIiwiY29udGFpbmVyIiwibGVuZ3RoIiwiY2xlYXIiLCJwYXJhbXMiLCJxdWVyeSIsInR5cGUiLCJwZXJtaXNzaW9uIiwiVmlldyIsInNlYXJjaEhpdHMiLCJzZWFyY2giLCJvcHRpb25zIiwibWFwIiwiZCIsImxhYmVsIiwidGl0bGUiLCJpZCIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJ1bnNoaWZ0IiwidGhlbWUiLCJzcGFjaW5nIiwiTXVsdGlTZWxlY3QiLCJnZXRBbGxQYW5lbFBsdWdpbk1ldGEiLCJQYW5lbFR5cGVGaWx0ZXIiLCJwbHVnaW5zIiwicCIsIm5hbWUiLCJpbWdVcmwiLCJpbmZvIiwibG9nb3MiLCJzbWFsbCIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJjaGFuZ2VkUGx1Z2lucyIsInBsdWdpbiIsImdldE9wdGlvbkxhYmVsIiwiaSIsImdldE9wdGlvblZhbHVlIiwiY29ubmVjdCIsInVzZUFzeW5jIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiTGlicmFyeVBhbmVsc1NlYXJjaCIsIk9wZW5MaWJyYXJ5UGFuZWxNb2RhbCIsImdldEZvbGRlckJ5VWlkIiwiZ2V0TG9hZGluZ05hdiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvcHMiLCJ1aWQiLCJtYXRjaCIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJmb2xkZXJVaWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJGb2xkZXJMaWJyYXJ5UGFuZWxzUGFnZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJ1bmRlZmluZWQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwiTG9hZGluZ1N0YXRlIiwiTW9kYWwiLCJ1c2VTdHlsZXMiLCJnZXRNb2RhbFN0eWxlcyIsImFzeW5jRGlzcGF0Y2hlciIsImdldENvbm5lY3RlZERhc2hib2FyZHMiLCJkZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFJlZHVjZXIiLCJpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSIsIkRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsIiwibGlicmFyeVBhbmVsIiwib25EaXNtaXNzIiwib25Db25maXJtIiwiZGFzaGJvYXJkVGl0bGVzIiwibG9hZGluZ1N0YXRlIiwiZGlzcGF0Y2giLCJhc3luY0Rpc3BhdGNoIiwiY29ubmVjdGVkIiwiQm9vbGVhbiIsImRvbmUiLCJEb25lIiwibW9kYWwiLCJMb2FkaW5nSW5kaWNhdG9yIiwiQ29uZmlybSIsIm1vZGFsVGV4dCIsIkhhc0Nvbm5lY3RlZERhc2hib2FyZHMiLCJzdWZmaXgiLCJtZXNzYWdlIiwidGV4dEluZm8iLCJteVRhYmxlIiwiYXBpR2V0Q29ubmVjdGVkRGFzaGJvYXJkcyIsInNlYXJjaENvbXBsZXRlZCIsImRhc2hib2FyZHMiLCJjcmVhdGVBY3Rpb24iLCJMb2FkaW5nIiwiYWN0aW9uIiwicGF5bG9hZCIsImNvbmZpZyIsIkxpbmsiLCJnZXRQYW5lbFBsdWdpbk5vdEZvdW5kIiwiUGFuZWxUeXBlQ2FyZCIsIkxpYnJhcnlQYW5lbENhcmQiLCJvbkNsaWNrIiwib25EZWxldGUiLCJzaG93U2Vjb25kYXJ5QWN0aW9ucyIsInNob3dEZWxldGlvbk1vZGFsIiwic2V0U2hvd0RlbGV0aW9uTW9kYWwiLCJvbkRlbGV0ZVBhbmVsIiwicGFuZWxQbHVnaW4iLCJwYW5lbHMiLCJtb2RlbCIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsIkZvbGRlckxpbmsiLCJmb2xkZXJOYW1lIiwibWV0YUNvbnRhaW5lciIsImNvbG9ycyIsInRleHQiLCJzZWNvbmRhcnkiLCJ0eXBvZ3JhcGh5IiwiYm9keVNtYWxsIiwiZm9udFNpemUiLCJIb3Jpem9udGFsR3JvdXAiLCJWZXJ0aWNhbEdyb3VwIiwiRmlsdGVySW5wdXQiLCJTb3J0UGlja2VyIiwiREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIiwiTGlicmFyeVBhbmVsc1ZpZXciLCJmb2xkZXJGaWx0ZXJDaGFuZ2VkIiwiaW5pdGlhbExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZSIsImxpYnJhcnlQYW5lbHNTZWFyY2hSZWR1Y2VyIiwicGFuZWxGaWx0ZXJDaGFuZ2VkIiwic2VhcmNoQ2hhbmdlZCIsInNvcnRDaGFuZ2VkIiwiTGlicmFyeVBhbmVsc1NlYXJjaFZhcmlhbnQiLCJ2YXJpYW50IiwiU3BhY2lvdXMiLCJjdXJyZW50UGFuZWxJZCIsImN1cnJlbnRGb2xkZXJJZCIsInBlclBhZ2UiLCJzaG93UGFuZWxGaWx0ZXIiLCJzaG93Rm9sZGVyRmlsdGVyIiwic2hvd1NvcnQiLCJzb3J0RGlyZWN0aW9uIiwicGFuZWxGaWx0ZXIiLCJmb2xkZXJGaWx0ZXIiLCJzZWFyY2hRdWVyeSIsInRvU3RyaW5nIiwib25GaWx0ZXJDaGFuZ2UiLCJvblNvcnRDaGFuZ2UiLCJzb3J0aW5nIiwib25Gb2xkZXJGaWx0ZXJDaGFuZ2UiLCJvblBhbmVsRmlsdGVyQ2hhbmdlIiwiYnV0dG9uUm93IiwibGlicmFyeVBhbmVsc1ZpZXciLCJ0aWdodEJ1dHRvblJvdyIsInRpZ2h0RmlsdGVyIiwidGlnaHRTb3J0RmlsdGVyIiwiZiIsIlN0cmluZyIsImN4IiwidXNlRGVib3VuY2UiLCJQYWdpbmF0aW9uIiwiZGVsZXRlTGlicmFyeVBhbmVsIiwic2VhcmNoRm9yTGlicmFyeVBhbmVscyIsImNoYW5nZVBhZ2UiLCJpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSIsImxpYnJhcnlQYW5lbHNWaWV3UmVkdWNlciIsImNsYXNzTmFtZSIsIm9uQ2xpY2tDYXJkIiwiY3VycmVudFBhbmVsIiwicHJvcHNQZXJQYWdlIiwiZ2V0UGFuZWxWaWV3U3R5bGVzIiwibGlicmFyeVBhbmVscyIsInBhZ2UiLCJudW1iZXJPZlBhZ2VzIiwib25QYWdlQ2hhbmdlIiwibGlicmFyeVBhbmVsTGlzdCIsIm5vUGFuZWxzRm91bmQiLCJpdGVtIiwicGFnaW5hdGlvbiIsInNtIiwic2VhcmNoSGVhZGVyIiwibmV3UGFuZWxCdXR0b24iLCJmcm9tIiwibWVyZ2UiLCJvZiIsIlN1YnNjcmlwdGlvbiIsInRpbWVyIiwiY2F0Y2hFcnJvciIsImZpbmFsaXplIiwibWFwVG8iLCJtZXJnZU1hcCIsInNoYXJlIiwidGFrZVVudGlsIiwiYXBpRGVsZXRlTGlicmFyeVBhbmVsIiwiZ2V0TGlicmFyeVBhbmVscyIsImluaXRTZWFyY2giLCJhcmdzIiwic3Vic2NyaXB0aW9uIiwiZGF0YU9ic2VydmFibGUiLCJleGNsdWRlVWlkIiwidHlwZUZpbHRlciIsInBpcGUiLCJlbGVtZW50cyIsInRvdGFsQ291bnQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ1bnN1YnNjcmliZSIsImFkZCIsInN1YnNjcmliZSIsImUiLCJGdW5jdGlvbiIsIk1hdGgiLCJjZWlsIiwidXJsVXRpbCIsImxvY2F0aW9uU2VydmljZSIsIkFzeW5jU2VsZWN0IiwiZ2V0TGlicmFyeVBhbmVsQ29ubmVjdGVkRGFzaGJvYXJkcyIsInNldENvbm5lY3RlZCIsIm9wdGlvbiIsInNldE9wdGlvbiIsImdldENvbm5lY3RlZCIsImNvbm5lY3RlZERhc2hib2FyZHMiLCJsb2FkT3B0aW9ucyIsImxvYWRPcHRpb25zQXN5bmMiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJvblZpZXdQYW5lbCIsInByZXZlbnREZWZhdWx0IiwicmVuZGVyVXJsIiwiZmlsdGVyIiwiYm9yZGVyIiwicmFkaXVzIiwiYmczIiwiYmcxIiwidGV4dFNlbWlXZWFrIiwic2l6ZSIsIm1kIiwieGwiLCJiZzIiLCJub3RlVGV4dGJveCIsImRhc2hib2FyZFNlYXJjaCIsImhlYWRpbmciLCJoNCIsImxpbmsiLCJpc1Vuc2lnbmVkUGx1Z2luU2lnbmF0dXJlIiwiUGx1Z2luU3RhdGUiLCJzZWxlY3RvcnMiLCJJY29uQnV0dG9uIiwiUGx1Z2luU2lnbmF0dXJlQmFkZ2UiLCJQbHVnaW5TdGF0ZUluZm8iLCJpc0N1cnJlbnQiLCJkaXNhYmxlZCIsInNob3dCYWRnZSIsImNoaWxkcmVuIiwiY3NzQ2xhc3MiLCJkZXByZWNhdGVkIiwiY3VycmVudCIsImNvbXBvbmVudHMiLCJQbHVnaW5WaXN1YWxpemF0aW9uIiwiaW1nIiwiaXRlbUNvbnRlbnQiLCJiYWRnZSIsInN0b3BQcm9wYWdhdGlvbiIsImRlbGV0ZUJ1dHRvbiIsImRpc3BsYXlOYW1lIiwiYmFja2dyb3VuZCIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwic2hhZG93cyIsInoxIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJkdXJhdGlvbiIsInNob3J0IiwiZW1waGFzaXplIiwicHJpbWFyeSIsImZvbnRXZWlnaHRNZWRpdW0iLCJmb250V2VpZ2h0TGlnaHQiLCJQYW5lbFBsdWdpbkJhZGdlIiwic2lnbmF0dXJlIiwidW5Fc2NhcGVTdHJpbmdGcm9tUmVnZXgiLCJhbGxQYW5lbHMiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiZmlsdGVyUGx1Z2luTGlzdCIsInBsdWdpbnNMaXN0IiwiZmlyc3QiLCJpc0dyYXBoUXVlcnkiLCJzdGFydHNXaXRoIiwiaWR4IiwiaW5kZXhPZiIsImNvbmNhdCIsIkJhZGdlIiwiZGlzcGxheSIsImdldEZlYXR1cmVTdGF0ZUluZm8iLCJjb2xvciIsInRvb2x0aXAiLCJpY29uIiwiYWxwaGEiLCJiZXRhIl0sInNvdXJjZVJvb3QiOiIifQ==