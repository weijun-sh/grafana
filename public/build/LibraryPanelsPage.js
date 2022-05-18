"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["LibraryPanelsPage"],{

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

/***/ "./public/app/features/library-panels/LibraryPanelsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LibraryPanelsPage": () => (/* binding */ LibraryPanelsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");
/* harmony import */ var _components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, 'library-panels')
});

const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, undefined);
const LibraryPanelsPage = ({
  navModel
}) => {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_LibraryPanelsSearch_LibraryPanelsSearch__WEBPACK_IMPORTED_MODULE_4__.LibraryPanelsSearch, {
        onClick: setSelected,
        showSecondaryActions: true,
        showSort: true,
        showPanelFilter: true,
        showFolderFilter: true
      }), selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_OpenLibraryPanelModal_OpenLibraryPanelModal__WEBPACK_IMPORTED_MODULE_5__.OpenLibraryPanelModal, {
        onDismiss: () => setSelected(undefined),
        libraryPanel: selected
      }) : null]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(LibraryPanelsPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBS0YsU0FBS3JELDJEQUFMO0FBQ0UsYUFBTztBQUNMbkksUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTHVMLFFBQUFBLEtBQUssRUFBRSxNQUZGO0FBR0xDLFFBQUFBLE9BQU8sRUFBRztBQUhMLE9BQVA7O0FBS0Y7QUFDRSxhQUFPLElBQVA7QUFwQko7QUFzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvRm9sZGVyRmlsdGVyL0ZvbGRlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1BhbmVsVHlwZUZpbHRlci9QYW5lbFR5cGVGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL0xpYnJhcnlQYW5lbHNQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0RlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9yZWR1Y2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsQ2FyZC9MaWJyYXJ5UGFuZWxDYXJkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL0xpYnJhcnlQYW5lbHNTZWFyY2gvTGlicmFyeVBhbmVsc1NlYXJjaC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzU2VhcmNoL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzVmlldy9MaWJyYXJ5UGFuZWxzVmlldy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzVmlldy9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL2NvbXBvbmVudHMvTGlicmFyeVBhbmVsc1ZpZXcvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saWJyYXJ5LXBhbmVscy9jb21wb25lbnRzL09wZW5MaWJyYXJ5UGFuZWxNb2RhbC9PcGVuTGlicmFyeVBhbmVsTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpYnJhcnktcGFuZWxzL3N0eWxlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGFuZWwvc3RhdGUvdXRpbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2RlYm91bmNlLXByb21pc2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBc3luY011bHRpU2VsZWN0LCBJY29uLCBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgRm9sZGVySW5mbywgUGVybWlzc2lvbkxldmVsU3RyaW5nIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBGb2xkZXJGaWx0ZXJQcm9wcyB7XG4gIG9uQ2hhbmdlOiAoZm9sZGVyOiBGb2xkZXJJbmZvW10pID0+IHZvaWQ7XG4gIG1heE1lbnVIZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb2xkZXJGaWx0ZXIoeyBvbkNoYW5nZTogcHJvcHNPbkNoYW5nZSwgbWF4TWVudUhlaWdodCB9OiBGb2xkZXJGaWx0ZXJQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGdldE9wdGlvbnMgPSB1c2VDYWxsYmFjaygoc2VhcmNoU3RyaW5nOiBzdHJpbmcpID0+IGdldEZvbGRlcnNBc09wdGlvbnMoc2VhcmNoU3RyaW5nLCBzZXRMb2FkaW5nKSwgW10pO1xuICBjb25zdCBkZWJvdW5jZWRMb2FkT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2UoZ2V0T3B0aW9ucywgMzAwKSwgW2dldE9wdGlvbnNdKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8Rm9sZGVySW5mbz4+PihbXSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGZvbGRlcnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxGb2xkZXJJbmZvPj4pID0+IHtcbiAgICAgIGNvbnN0IGNoYW5nZWRGb2xkZXJzID0gW107XG4gICAgICBmb3IgKGNvbnN0IGZvbGRlciBvZiBmb2xkZXJzKSB7XG4gICAgICAgIGlmIChmb2xkZXIudmFsdWUpIHtcbiAgICAgICAgICBjaGFuZ2VkRm9sZGVycy5wdXNoKGZvbGRlci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByb3BzT25DaGFuZ2UoY2hhbmdlZEZvbGRlcnMpO1xuICAgICAgc2V0VmFsdWUoZm9sZGVycyk7XG4gICAgfSxcbiAgICBbcHJvcHNPbkNoYW5nZV1cbiAgKTtcbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0T3B0aW9uczogdHJ1ZSxcbiAgICBpc011bHRpOiB0cnVlLFxuICAgIG5vT3B0aW9uc01lc3NhZ2U6ICdObyBmb2xkZXJzIGZvdW5kJyxcbiAgICBwbGFjZWhvbGRlcjogJ0ZpbHRlciBieSBmb2xkZXInLFxuICAgIG1heE1lbnVIZWlnaHQsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7dmFsdWUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJsaW5rXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGVhcn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbXSl9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyIGZvbGRlcnNcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2xlYXIgZm9sZGVyc1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICA8QXN5bmNNdWx0aVNlbGVjdFxuICAgICAgICB7Li4uc2VsZWN0T3B0aW9uc31cbiAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkTG9hZE9wdGlvbnN9XG4gICAgICAgIHByZWZpeD17PEljb24gbmFtZT1cImZpbHRlclwiIC8+fVxuICAgICAgICBhcmlhLWxhYmVsPVwiRm9sZGVyIGZpbHRlclwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb2xkZXJzQXNPcHRpb25zKHNlYXJjaFN0cmluZzogc3RyaW5nLCBzZXRMb2FkaW5nOiAobG9hZGluZzogYm9vbGVhbikgPT4gdm9pZCkge1xuICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBxdWVyeTogc2VhcmNoU3RyaW5nLFxuICAgIHR5cGU6ICdkYXNoLWZvbGRlcicsXG4gICAgcGVybWlzc2lvbjogUGVybWlzc2lvbkxldmVsU3RyaW5nLlZpZXcsXG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoSGl0cyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5zZWFyY2gocGFyYW1zKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlYXJjaEhpdHMubWFwKChkKSA9PiAoeyBsYWJlbDogZC50aXRsZSwgdmFsdWU6IHsgaWQ6IGQuaWQsIHRpdGxlOiBkLnRpdGxlIH0gfSkpO1xuICBpZiAoIXNlYXJjaFN0cmluZyB8fCAnZ2VuZXJhbCcuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgb3B0aW9ucy51bnNoaWZ0KHsgbGFiZWw6ICdHZW5lcmFsJywgdmFsdWU6IHsgaWQ6IDAsIHRpdGxlOiAnR2VuZXJhbCcgfSB9KTtcbiAgfVxuXG4gIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGxhYmVsOiBjb250YWluZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIGAsXG4gICAgY2xlYXI6IGNzc2BcbiAgICAgIGxhYmVsOiBjbGVhcjtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5zcGFjaW5nKDEuNSl9O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtJHt0aGVtZS5zcGFjaW5nKDQuNSl9O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBQYW5lbFBsdWdpbk1ldGEsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgQnV0dG9uLCBNdWx0aVNlbGVjdCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldEFsbFBhbmVsUGx1Z2luTWV0YSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9zdGF0ZS91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAocGx1Z2luczogUGFuZWxQbHVnaW5NZXRhW10pID0+IHZvaWQ7XG4gIG1heE1lbnVIZWlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbFR5cGVGaWx0ZXIgPSAoeyBvbkNoYW5nZTogcHJvcHNPbkNoYW5nZSwgbWF4TWVudUhlaWdodCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgcGx1Z2lucyA9IHVzZU1lbW88UGFuZWxQbHVnaW5NZXRhW10+KCgpID0+IHtcbiAgICByZXR1cm4gZ2V0QWxsUGFuZWxQbHVnaW5NZXRhKCk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHBsdWdpbnNcbiAgICAgICAgLm1hcCgocCkgPT4gKHsgbGFiZWw6IHAubmFtZSwgaW1nVXJsOiBwLmluZm8ubG9nb3Muc21hbGwsIHZhbHVlOiBwIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sYWJlbD8ubG9jYWxlQ29tcGFyZShiLmxhYmVsKSksXG4gICAgW3BsdWdpbnNdXG4gICk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPFBhbmVsUGx1Z2luTWV0YT4+PihbXSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHBsdWdpbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxQYW5lbFBsdWdpbk1ldGE+PikgPT4ge1xuICAgICAgY29uc3QgY2hhbmdlZFBsdWdpbnMgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICAgICAgaWYgKHBsdWdpbi52YWx1ZSkge1xuICAgICAgICAgIGNoYW5nZWRQbHVnaW5zLnB1c2gocGx1Z2luLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvcHNPbkNoYW5nZShjaGFuZ2VkUGx1Z2lucyk7XG4gICAgICBzZXRWYWx1ZShwbHVnaW5zKTtcbiAgICB9LFxuICAgIFtwcm9wc09uQ2hhbmdlXVxuICApO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3Qgc2VsZWN0T3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0T3B0aW9uczogdHJ1ZSxcbiAgICBnZXRPcHRpb25MYWJlbDogKGk6IGFueSkgPT4gaS5sYWJlbCxcbiAgICBnZXRPcHRpb25WYWx1ZTogKGk6IGFueSkgPT4gaS52YWx1ZSxcbiAgICBub09wdGlvbnNNZXNzYWdlOiAnTm8gUGFuZWwgdHlwZXMgZm91bmQnLFxuICAgIHBsYWNlaG9sZGVyOiAnRmlsdGVyIGJ5IHR5cGUnLFxuICAgIG1heE1lbnVIZWlnaHQsXG4gICAgb3B0aW9ucyxcbiAgICB2YWx1ZSxcbiAgICBvbkNoYW5nZSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIHt2YWx1ZS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgdmFyaWFudD1cImxpbmtcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsZWFyfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFtdKX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xlYXIgdHlwZXNcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2xlYXIgdHlwZXNcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgICAgPE11bHRpU2VsZWN0IHsuLi5zZWxlY3RPcHRpb25zfSBwcmVmaXg9ezxJY29uIG5hbWU9XCJmaWx0ZXJcIiAvPn0gYXJpYS1sYWJlbD1cIlBhbmVsIFR5cGUgZmlsdGVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgbGFiZWw6IGNvbnRhaW5lcjtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgYCxcbiAgICBjbGVhcjogY3NzYFxuICAgICAgbGFiZWw6IGNsZWFyO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnNwYWNpbmcoMS41KX07XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0ke3RoZW1lLnNwYWNpbmcoNC41KX07XG4gICAgICByaWdodDogMDtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTGlicmFyeVBhbmVsc1NlYXJjaCB9IGZyb20gJy4vY29tcG9uZW50cy9MaWJyYXJ5UGFuZWxzU2VhcmNoL0xpYnJhcnlQYW5lbHNTZWFyY2gnO1xuaW1wb3J0IHsgT3BlbkxpYnJhcnlQYW5lbE1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL09wZW5MaWJyYXJ5UGFuZWxNb2RhbC9PcGVuTGlicmFyeVBhbmVsTW9kYWwnO1xuaW1wb3J0IHsgTGlicmFyeUVsZW1lbnREVE8gfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdsaWJyYXJ5LXBhbmVscycpLFxufSk7XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB1bmRlZmluZWQpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB7fVxuXG50eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNvbnN0IExpYnJhcnlQYW5lbHNQYWdlOiBGQzxQcm9wcz4gPSAoeyBuYXZNb2RlbCB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8TGlicmFyeUVsZW1lbnREVE8gfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxMaWJyYXJ5UGFuZWxzU2VhcmNoIG9uQ2xpY2s9e3NldFNlbGVjdGVkfSBzaG93U2Vjb25kYXJ5QWN0aW9ucyBzaG93U29ydCBzaG93UGFuZWxGaWx0ZXIgc2hvd0ZvbGRlckZpbHRlciAvPlxuICAgICAgICB7c2VsZWN0ZWQgPyA8T3BlbkxpYnJhcnlQYW5lbE1vZGFsIG9uRGlzbWlzcz17KCkgPT4gc2V0U2VsZWN0ZWQodW5kZWZpbmVkKX0gbGlicmFyeVBhbmVsPXtzZWxlY3RlZH0gLz4gOiBudWxsfVxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMaWJyYXJ5UGFuZWxzUGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldE1vZGFsU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgYXN5bmNEaXNwYXRjaGVyIH0gZnJvbSAnLi4vTGlicmFyeVBhbmVsc1ZpZXcvYWN0aW9ucyc7XG5cbmltcG9ydCB7IGdldENvbm5lY3RlZERhc2hib2FyZHMgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgZGVsZXRlTGlicmFyeVBhbmVsTW9kYWxSZWR1Y2VyLCBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxpYnJhcnlQYW5lbDogTGlicmFyeUVsZW1lbnREVE87XG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWw6IEZDPFByb3BzPiA9ICh7IGxpYnJhcnlQYW5lbCwgb25EaXNtaXNzLCBvbkNvbmZpcm0gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBbeyBkYXNoYm9hcmRUaXRsZXMsIGxvYWRpbmdTdGF0ZSB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxuICAgIGRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlcixcbiAgICBpbml0aWFsRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZVxuICApO1xuICBjb25zdCBhc3luY0Rpc3BhdGNoID0gdXNlTWVtbygoKSA9PiBhc3luY0Rpc3BhdGNoZXIoZGlzcGF0Y2gpLCBbZGlzcGF0Y2hdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luY0Rpc3BhdGNoKGdldENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsKSk7XG4gIH0sIFthc3luY0Rpc3BhdGNoLCBsaWJyYXJ5UGFuZWxdKTtcbiAgY29uc3QgY29ubmVjdGVkID0gQm9vbGVhbihkYXNoYm9hcmRUaXRsZXMubGVuZ3RoKTtcbiAgY29uc3QgZG9uZSA9IGxvYWRpbmdTdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkRvbmU7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9IHRpdGxlPVwiRGVsZXRlIGxpYnJhcnkgcGFuZWxcIiBpY29uPVwidHJhc2gtYWx0XCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IGlzT3Blbj17dHJ1ZX0+XG4gICAgICB7IWRvbmUgPyA8TG9hZGluZ0luZGljYXRvciAvPiA6IG51bGx9XG4gICAgICB7ZG9uZSA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y29ubmVjdGVkID8gPEhhc0Nvbm5lY3RlZERhc2hib2FyZHMgZGFzaGJvYXJkVGl0bGVzPXtkYXNoYm9hcmRUaXRsZXN9IC8+IDogbnVsbH1cbiAgICAgICAgICB7IWNvbm5lY3RlZCA/IDxDb25maXJtIC8+IDogbnVsbH1cblxuICAgICAgICAgIDxNb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e29uQ29uZmlybX0gZGlzYWJsZWQ9e2Nvbm5lY3RlZH0+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbC5CdXR0b25Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IExvYWRpbmdJbmRpY2F0b3I6IEZDID0gKCkgPT4gPHNwYW4+TG9hZGluZyBsaWJyYXJ5IHBhbmVsLi4uPC9zcGFuPjtcblxuY29uc3QgQ29uZmlybTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRNb2RhbFN0eWxlcyk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUZXh0fT5EbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwYW5lbD88L2Rpdj47XG59O1xuXG5jb25zdCBIYXNDb25uZWN0ZWREYXNoYm9hcmRzOiBGQzx7IGRhc2hib2FyZFRpdGxlczogc3RyaW5nW10gfT4gPSAoeyBkYXNoYm9hcmRUaXRsZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0TW9kYWxTdHlsZXMpO1xuICBjb25zdCBzdWZmaXggPSBkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAxID8gJ2Rhc2hib2FyZC4nIDogJ2Rhc2hib2FyZHMuJztcbiAgY29uc3QgbWVzc2FnZSA9IGAke2Rhc2hib2FyZFRpdGxlcy5sZW5ndGh9ICR7c3VmZml4fWA7XG4gIGlmIChkYXNoYm9hcmRUaXRsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0SW5mb30+XG4gICAgICAgIHsnVGhpcyBsaWJyYXJ5IHBhbmVsIGNhbiBub3QgYmUgZGVsZXRlZCBiZWNhdXNlIGl0IGlzIGNvbm5lY3RlZCB0byAnfVxuICAgICAgICA8c3Ryb25nPnttZXNzYWdlfTwvc3Ryb25nPlxuICAgICAgICB7JyBSZW1vdmUgdGhlIGxpYnJhcnkgcGFuZWwgZnJvbSB0aGUgZGFzaGJvYXJkcyBsaXN0ZWQgYmVsb3cgYW5kIHJldHJ5Lid9XG4gICAgICA8L3A+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMubXlUYWJsZX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGFzaGJvYXJkIG5hbWU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7ZGFzaGJvYXJkVGl0bGVzLm1hcCgodGl0bGUsIGkpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2BkYXNoLXRpdGxlLSR7aX1gfT5cbiAgICAgICAgICAgICAgPHRkPnt0aXRsZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyBhcyBhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IERpc3BhdGNoUmVzdWx0LCBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgc2VhcmNoQ29tcGxldGVkIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbm5lY3RlZERhc2hib2FyZHMobGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTyk6IERpc3BhdGNoUmVzdWx0IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGNvbnN0IGRhc2hib2FyZHMgPSBhd2FpdCBhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzKGxpYnJhcnlQYW5lbC51aWQpO1xuICAgIGRpc3BhdGNoKHNlYXJjaENvbXBsZXRlZCh7IGRhc2hib2FyZHMgfSkpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCB7IExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU2VhcmNoSGl0IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3NlYXJjaC90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSB7XG4gIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlO1xuICBkYXNoYm9hcmRUaXRsZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGU6IERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsU3RhdGUgPSB7XG4gIGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcsXG4gIGRhc2hib2FyZFRpdGxlczogW10sXG59O1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoQ29tcGxldGVkID0gY3JlYXRlQWN0aW9uPHsgZGFzaGJvYXJkczogRGFzaGJvYXJkU2VhcmNoSGl0W10gfT4oXG4gICdsaWJyYXJ5UGFuZWxzL2RlbGV0ZS9zZWFyY2hDb21wbGV0ZWQnXG4pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTGlicmFyeVBhbmVsTW9kYWxSZWR1Y2VyID0gKFxuICBzdGF0ZTogRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSA9IGluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlLFxuICBhY3Rpb246IEFueUFjdGlvblxuKTogRGVsZXRlTGlicmFyeVBhbmVsTW9kYWxTdGF0ZSA9PiB7XG4gIGlmIChzZWFyY2hDb21wbGV0ZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGRhc2hib2FyZFRpdGxlczogYWN0aW9uLnBheWxvYWQuZGFzaGJvYXJkcy5tYXAoKGQpID0+IGQudGl0bGUpLFxuICAgICAgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBJY29uLCBMaW5rLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0UGFuZWxQbHVnaW5Ob3RGb3VuZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1BhbmVsUGx1Z2luRXJyb3InO1xuaW1wb3J0IHsgUGFuZWxUeXBlQ2FyZCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9jb21wb25lbnRzL1ZpelR5cGVQaWNrZXIvUGFuZWxUeXBlQ2FyZCc7XG5cbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwgfSBmcm9tICcuLi9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbC9EZWxldGVMaWJyYXJ5UGFuZWxNb2RhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlicmFyeVBhbmVsQ2FyZFByb3BzIHtcbiAgbGlicmFyeVBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTztcbiAgb25DbGljazogKHBhbmVsOiBMaWJyYXJ5RWxlbWVudERUTykgPT4gdm9pZDtcbiAgb25EZWxldGU/OiAocGFuZWw6IExpYnJhcnlFbGVtZW50RFRPKSA9PiB2b2lkO1xuICBzaG93U2Vjb25kYXJ5QWN0aW9ucz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBMaWJyYXJ5UGFuZWxDYXJkOiBSZWFjdC5GQzxMaWJyYXJ5UGFuZWxDYXJkUHJvcHMgJiB7IGNoaWxkcmVuPzogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdIH0+ID0gKHtcbiAgbGlicmFyeVBhbmVsLFxuICBvbkNsaWNrLFxuICBvbkRlbGV0ZSxcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnMsXG59KSA9PiB7XG4gIGNvbnN0IFtzaG93RGVsZXRpb25Nb2RhbCwgc2V0U2hvd0RlbGV0aW9uTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uRGVsZXRlUGFuZWwgPSAoKSA9PiB7XG4gICAgb25EZWxldGU/LihsaWJyYXJ5UGFuZWwpO1xuICAgIHNldFNob3dEZWxldGlvbk1vZGFsKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBwYW5lbFBsdWdpbiA9IGNvbmZpZy5wYW5lbHNbbGlicmFyeVBhbmVsLm1vZGVsLnR5cGVdID8/IGdldFBhbmVsUGx1Z2luTm90Rm91bmQobGlicmFyeVBhbmVsLm1vZGVsLnR5cGUpLm1ldGE7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBhbmVsVHlwZUNhcmRcbiAgICAgICAgaXNDdXJyZW50PXtmYWxzZX1cbiAgICAgICAgdGl0bGU9e2xpYnJhcnlQYW5lbC5uYW1lfVxuICAgICAgICBkZXNjcmlwdGlvbj17bGlicmFyeVBhbmVsLmRlc2NyaXB0aW9ufVxuICAgICAgICBwbHVnaW49e3BhbmVsUGx1Z2lufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrPy4obGlicmFyeVBhbmVsKX1cbiAgICAgICAgb25EZWxldGU9e3Nob3dTZWNvbmRhcnlBY3Rpb25zID8gKCkgPT4gc2V0U2hvd0RlbGV0aW9uTW9kYWwodHJ1ZSkgOiB1bmRlZmluZWR9XG4gICAgICA+XG4gICAgICAgIDxGb2xkZXJMaW5rIGxpYnJhcnlQYW5lbD17bGlicmFyeVBhbmVsfSAvPlxuICAgICAgPC9QYW5lbFR5cGVDYXJkPlxuICAgICAge3Nob3dEZWxldGlvbk1vZGFsICYmIChcbiAgICAgICAgPERlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsXG4gICAgICAgICAgbGlicmFyeVBhbmVsPXtsaWJyYXJ5UGFuZWx9XG4gICAgICAgICAgb25Db25maXJtPXtvbkRlbGV0ZVBhbmVsfVxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0U2hvd0RlbGV0aW9uTW9kYWwoZmFsc2UpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBGb2xkZXJMaW5rUHJvcHMge1xuICBsaWJyYXJ5UGFuZWw6IExpYnJhcnlFbGVtZW50RFRPO1xufVxuXG5mdW5jdGlvbiBGb2xkZXJMaW5rKHsgbGlicmFyeVBhbmVsIH06IEZvbGRlckxpbmtQcm9wcyk6IFJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgaWYgKCFsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJVaWQgJiYgIWxpYnJhcnlQYW5lbC5tZXRhLmZvbGRlck5hbWUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICghbGlicmFyeVBhbmVsLm1ldGEuZm9sZGVyVWlkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1ldGFDb250YWluZXJ9PlxuICAgICAgICA8SWNvbiBuYW1lPXsnZm9sZGVyJ30gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgPHNwYW4+e2xpYnJhcnlQYW5lbC5tZXRhLmZvbGRlck5hbWV9PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1ldGFDb250YWluZXJ9PlxuICAgICAgPExpbmsgaHJlZj17YC9kYXNoYm9hcmRzL2YvJHtsaWJyYXJ5UGFuZWwubWV0YS5mb2xkZXJVaWR9YH0+XG4gICAgICAgIDxJY29uIG5hbWU9eydmb2xkZXItdXBsb2FkJ30gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgPHNwYW4+e2xpYnJhcnlQYW5lbC5tZXRhLmZvbGRlck5hbWV9PC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgbWV0YUNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgUGFuZWxQbHVnaW5NZXRhLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgdXNlU3R5bGVzMiwgVmVydGljYWxHcm91cCwgRmlsdGVySW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEZvbGRlckZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9uZW50cy9Gb2xkZXJGaWx0ZXIvRm9sZGVyRmlsdGVyJztcbmltcG9ydCB7IFBhbmVsVHlwZUZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvY29tcG9uZW50cy9QYW5lbFR5cGVGaWx0ZXIvUGFuZWxUeXBlRmlsdGVyJztcbmltcG9ydCB7IFNvcnRQaWNrZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L1NvcnRQaWNrZXInO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgRm9sZGVySW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgTGlicmFyeVBhbmVsc1ZpZXcgfSBmcm9tICcuLi9MaWJyYXJ5UGFuZWxzVmlldy9MaWJyYXJ5UGFuZWxzVmlldyc7XG5cbmltcG9ydCB7XG4gIGZvbGRlckZpbHRlckNoYW5nZWQsXG4gIGluaXRpYWxMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUsXG4gIGxpYnJhcnlQYW5lbHNTZWFyY2hSZWR1Y2VyLFxuICBwYW5lbEZpbHRlckNoYW5nZWQsXG4gIHNlYXJjaENoYW5nZWQsXG4gIHNvcnRDaGFuZ2VkLFxufSBmcm9tICcuL3JlZHVjZXInO1xuXG5leHBvcnQgZW51bSBMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudCB7XG4gIFRpZ2h0ID0gJ3RpZ2h0JyxcbiAgU3BhY2lvdXMgPSAnc3BhY2lvdXMnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbHNTZWFyY2hQcm9wcyB7XG4gIG9uQ2xpY2s6IChwYW5lbDogTGlicmFyeUVsZW1lbnREVE8pID0+IHZvaWQ7XG4gIHZhcmlhbnQ/OiBMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudDtcbiAgc2hvd1NvcnQ/OiBib29sZWFuO1xuICBzaG93UGFuZWxGaWx0ZXI/OiBib29sZWFuO1xuICBzaG93Rm9sZGVyRmlsdGVyPzogYm9vbGVhbjtcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnM/OiBib29sZWFuO1xuICBjdXJyZW50UGFuZWxJZD86IHN0cmluZztcbiAgY3VycmVudEZvbGRlcklkPzogbnVtYmVyO1xuICBwZXJQYWdlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTGlicmFyeVBhbmVsc1NlYXJjaCA9ICh7XG4gIG9uQ2xpY2ssXG4gIHZhcmlhbnQgPSBMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudC5TcGFjaW91cyxcbiAgY3VycmVudFBhbmVsSWQsXG4gIGN1cnJlbnRGb2xkZXJJZCxcbiAgcGVyUGFnZSA9IERFRkFVTFRfUEVSX1BBR0VfUEFHSU5BVElPTixcbiAgc2hvd1BhbmVsRmlsdGVyID0gZmFsc2UsXG4gIHNob3dGb2xkZXJGaWx0ZXIgPSBmYWxzZSxcbiAgc2hvd1NvcnQgPSBmYWxzZSxcbiAgc2hvd1NlY29uZGFyeUFjdGlvbnMgPSBmYWxzZSxcbn06IExpYnJhcnlQYW5lbHNTZWFyY2hQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbeyBzb3J0RGlyZWN0aW9uLCBwYW5lbEZpbHRlciwgZm9sZGVyRmlsdGVyLCBzZWFyY2hRdWVyeSB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKGxpYnJhcnlQYW5lbHNTZWFyY2hSZWR1Y2VyLCB7XG4gICAgLi4uaW5pdGlhbExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZSxcbiAgICBmb2xkZXJGaWx0ZXI6IGN1cnJlbnRGb2xkZXJJZCA/IFtjdXJyZW50Rm9sZGVySWQudG9TdHJpbmcoMTApXSA6IFtdLFxuICB9KTtcbiAgY29uc3Qgb25GaWx0ZXJDaGFuZ2UgPSAoc2VhcmNoU3RyaW5nOiBzdHJpbmcpID0+IGRpc3BhdGNoKHNlYXJjaENoYW5nZWQoc2VhcmNoU3RyaW5nKSk7XG4gIGNvbnN0IG9uU29ydENoYW5nZSA9IChzb3J0aW5nOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4gZGlzcGF0Y2goc29ydENoYW5nZWQoc29ydGluZykpO1xuICBjb25zdCBvbkZvbGRlckZpbHRlckNoYW5nZSA9IChmb2xkZXJzOiBGb2xkZXJJbmZvW10pID0+IGRpc3BhdGNoKGZvbGRlckZpbHRlckNoYW5nZWQoZm9sZGVycykpO1xuICBjb25zdCBvblBhbmVsRmlsdGVyQ2hhbmdlID0gKHBsdWdpbnM6IFBhbmVsUGx1Z2luTWV0YVtdKSA9PiBkaXNwYXRjaChwYW5lbEZpbHRlckNoYW5nZWQocGx1Z2lucykpO1xuXG4gIGlmICh2YXJpYW50ID09PSBMaWJyYXJ5UGFuZWxzU2VhcmNoVmFyaWFudC5TcGFjaW91cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJsZ1wiPlxuICAgICAgICAgIDxGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTZWFyY2ggYnkgbmFtZSBvciBkZXNjcmlwdGlvbid9XG4gICAgICAgICAgICB3aWR0aD17MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uUm93fT5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXBcbiAgICAgICAgICAgICAgc3BhY2luZz1cInNtXCJcbiAgICAgICAgICAgICAganVzdGlmeT17KHNob3dTb3J0ICYmIHNob3dQYW5lbEZpbHRlcikgfHwgc2hvd0ZvbGRlckZpbHRlciA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdmbGV4LWVuZCd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzaG93U29ydCAmJiAoXG4gICAgICAgICAgICAgICAgPFNvcnRQaWNrZXIgdmFsdWU9e3NvcnREaXJlY3Rpb259IG9uQ2hhbmdlPXtvblNvcnRDaGFuZ2V9IGZpbHRlcj17WydhbHBoYS1hc2MnLCAnYWxwaGEtZGVzYyddfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwXG4gICAgICAgICAgICAgICAgc3BhY2luZz1cInNtXCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PXtzaG93Rm9sZGVyRmlsdGVyICYmIHNob3dQYW5lbEZpbHRlciA/ICdzcGFjZS1iZXR3ZWVuJyA6ICdmbGV4LWVuZCd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2hvd0ZvbGRlckZpbHRlciAmJiA8Rm9sZGVyRmlsdGVyIG9uQ2hhbmdlPXtvbkZvbGRlckZpbHRlckNoYW5nZX0gLz59XG4gICAgICAgICAgICAgICAge3Nob3dQYW5lbEZpbHRlciAmJiA8UGFuZWxUeXBlRmlsdGVyIG9uQ2hhbmdlPXtvblBhbmVsRmlsdGVyQ2hhbmdlfSAvPn1cbiAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpYnJhcnlQYW5lbHNWaWV3fT5cbiAgICAgICAgICAgIDxMaWJyYXJ5UGFuZWxzVmlld1xuICAgICAgICAgICAgICBvbkNsaWNrQ2FyZD17b25DbGlja31cbiAgICAgICAgICAgICAgc2VhcmNoU3RyaW5nPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgc29ydERpcmVjdGlvbj17c29ydERpcmVjdGlvbn1cbiAgICAgICAgICAgICAgcGFuZWxGaWx0ZXI9e3BhbmVsRmlsdGVyfVxuICAgICAgICAgICAgICBmb2xkZXJGaWx0ZXI9e2ZvbGRlckZpbHRlcn1cbiAgICAgICAgICAgICAgY3VycmVudFBhbmVsSWQ9e2N1cnJlbnRQYW5lbElkfVxuICAgICAgICAgICAgICBzaG93U2Vjb25kYXJ5QWN0aW9ucz17c2hvd1NlY29uZGFyeUFjdGlvbnN9XG4gICAgICAgICAgICAgIHBlclBhZ2U9e3BlclBhZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwieHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWdodEJ1dHRvblJvd30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aWdodEZpbHRlcn0+XG4gICAgICAgICAgICA8RmlsdGVySW5wdXQgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17b25GaWx0ZXJDaGFuZ2V9IHBsYWNlaG9sZGVyPXsnU2VhcmNoIGJ5IG5hbWUnfSB3aWR0aD17MH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpZ2h0U29ydEZpbHRlcn0+XG4gICAgICAgICAgICB7c2hvd1NvcnQgJiYgPFNvcnRQaWNrZXIgdmFsdWU9e3NvcnREaXJlY3Rpb259IG9uQ2hhbmdlPXtvblNvcnRDaGFuZ2V9IC8+fVxuICAgICAgICAgICAge3Nob3dGb2xkZXJGaWx0ZXIgJiYgPEZvbGRlckZpbHRlciBvbkNoYW5nZT17b25Gb2xkZXJGaWx0ZXJDaGFuZ2V9IG1heE1lbnVIZWlnaHQ9ezIwMH0gLz59XG4gICAgICAgICAgICB7c2hvd1BhbmVsRmlsdGVyICYmIDxQYW5lbFR5cGVGaWx0ZXIgb25DaGFuZ2U9e29uUGFuZWxGaWx0ZXJDaGFuZ2V9IG1heE1lbnVIZWlnaHQ9ezIwMH0gLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpYnJhcnlQYW5lbHNWaWV3fT5cbiAgICAgICAgICA8TGlicmFyeVBhbmVsc1ZpZXdcbiAgICAgICAgICAgIG9uQ2xpY2tDYXJkPXtvbkNsaWNrfVxuICAgICAgICAgICAgc2VhcmNoU3RyaW5nPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb249e3NvcnREaXJlY3Rpb259XG4gICAgICAgICAgICBwYW5lbEZpbHRlcj17cGFuZWxGaWx0ZXJ9XG4gICAgICAgICAgICBmb2xkZXJGaWx0ZXI9e2ZvbGRlckZpbHRlcn1cbiAgICAgICAgICAgIGN1cnJlbnRQYW5lbElkPXtjdXJyZW50UGFuZWxJZH1cbiAgICAgICAgICAgIHNob3dTZWNvbmRhcnlBY3Rpb25zPXtzaG93U2Vjb25kYXJ5QWN0aW9uc31cbiAgICAgICAgICAgIHBlclBhZ2U9e3BlclBhZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBidXR0b25Sb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07IC8vIENsZWFyIHR5cGVzIGxpbmtcbiAgICBgLFxuICAgIHRpZ2h0QnV0dG9uUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoNCl9OyAvLyBDbGVhciB0eXBlcyBsaW5rXG4gICAgYCxcbiAgICB0aWdodEZpbHRlcjogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgIGAsXG4gICAgdGlnaHRTb3J0RmlsdGVyOiBjc3NgXG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMCwgMCwgMCwgMC41KX07XG4gICAgYCxcbiAgICBsaWJyYXJ5UGFuZWxzVmlldzogY3NzYFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgeyBQYW5lbFBsdWdpbk1ldGEsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBGb2xkZXJJbmZvIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZSB7XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XG4gIHNvcnREaXJlY3Rpb24/OiBzdHJpbmc7XG4gIHBhbmVsRmlsdGVyOiBzdHJpbmdbXTtcbiAgZm9sZGVyRmlsdGVyOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGU6IExpYnJhcnlQYW5lbHNTZWFyY2hTdGF0ZSA9IHtcbiAgc2VhcmNoUXVlcnk6ICcnLFxuICBwYW5lbEZpbHRlcjogW10sXG4gIGZvbGRlckZpbHRlcjogW10sXG4gIHNvcnREaXJlY3Rpb246IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPHN0cmluZz4oJ2xpYnJhcnlQYW5lbHMvc2VhcmNoL3NlYXJjaENoYW5nZWQnKTtcbmV4cG9ydCBjb25zdCBzb3J0Q2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4oJ2xpYnJhcnlQYW5lbHMvc2VhcmNoL3NvcnRDaGFuZ2VkJyk7XG5leHBvcnQgY29uc3QgcGFuZWxGaWx0ZXJDaGFuZ2VkID0gY3JlYXRlQWN0aW9uPFBhbmVsUGx1Z2luTWV0YVtdPignbGlicmFyeVBhbmVscy9zZWFyY2gvcGFuZWxGaWx0ZXJDaGFuZ2VkJyk7XG5leHBvcnQgY29uc3QgZm9sZGVyRmlsdGVyQ2hhbmdlZCA9IGNyZWF0ZUFjdGlvbjxGb2xkZXJJbmZvW10+KCdsaWJyYXJ5UGFuZWxzL3NlYXJjaC9mb2xkZXJGaWx0ZXJDaGFuZ2VkJyk7XG5cbmV4cG9ydCBjb25zdCBsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlciA9IChzdGF0ZTogTGlicmFyeVBhbmVsc1NlYXJjaFN0YXRlLCBhY3Rpb246IEFueUFjdGlvbikgPT4ge1xuICBpZiAoc2VhcmNoQ2hhbmdlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlYXJjaFF1ZXJ5OiBhY3Rpb24ucGF5bG9hZCB9O1xuICB9XG5cbiAgaWYgKHNvcnRDaGFuZ2VkLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgc29ydERpcmVjdGlvbjogYWN0aW9uLnBheWxvYWQudmFsdWUgfTtcbiAgfVxuXG4gIGlmIChwYW5lbEZpbHRlckNoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBwYW5lbEZpbHRlcjogYWN0aW9uLnBheWxvYWQubWFwKChwKSA9PiBwLmlkKSB9O1xuICB9XG5cbiAgaWYgKGZvbGRlckZpbHRlckNoYW5nZWQubWF0Y2goYWN0aW9uKSkge1xuICAgIHJldHVybiB7IC4uLnN0YXRlLCBmb2xkZXJGaWx0ZXI6IGFjdGlvbi5wYXlsb2FkLm1hcCgoZikgPT4gU3RyaW5nKGYuaWQhKSkgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUsIExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBMaWJyYXJ5RWxlbWVudERUTyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IExpYnJhcnlQYW5lbENhcmQgfSBmcm9tICcuLi9MaWJyYXJ5UGFuZWxDYXJkL0xpYnJhcnlQYW5lbENhcmQnO1xuXG5pbXBvcnQgeyBhc3luY0Rpc3BhdGNoZXIsIGRlbGV0ZUxpYnJhcnlQYW5lbCwgc2VhcmNoRm9yTGlicmFyeVBhbmVscyB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBpbml0aWFsTGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgbGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuaW50ZXJmYWNlIExpYnJhcnlQYW5lbFZpZXdQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgb25DbGlja0NhcmQ6IChwYW5lbDogTGlicmFyeUVsZW1lbnREVE8pID0+IHZvaWQ7XG4gIHNob3dTZWNvbmRhcnlBY3Rpb25zPzogYm9vbGVhbjtcbiAgY3VycmVudFBhbmVsSWQ/OiBzdHJpbmc7XG4gIHNlYXJjaFN0cmluZzogc3RyaW5nO1xuICBzb3J0RGlyZWN0aW9uPzogc3RyaW5nO1xuICBwYW5lbEZpbHRlcj86IHN0cmluZ1tdO1xuICBmb2xkZXJGaWx0ZXI/OiBzdHJpbmdbXTtcbiAgcGVyUGFnZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IExpYnJhcnlQYW5lbHNWaWV3OiBSZWFjdC5GQzxMaWJyYXJ5UGFuZWxWaWV3UHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBvbkNsaWNrQ2FyZCxcbiAgc2VhcmNoU3RyaW5nLFxuICBzb3J0RGlyZWN0aW9uLFxuICBwYW5lbEZpbHRlcixcbiAgZm9sZGVyRmlsdGVyLFxuICBzaG93U2Vjb25kYXJ5QWN0aW9ucyxcbiAgY3VycmVudFBhbmVsSWQ6IGN1cnJlbnRQYW5lbCxcbiAgcGVyUGFnZTogcHJvcHNQZXJQYWdlID0gNDAsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRQYW5lbFZpZXdTdHlsZXMpO1xuICBjb25zdCBbeyBsaWJyYXJ5UGFuZWxzLCBwYWdlLCBwZXJQYWdlLCBudW1iZXJPZlBhZ2VzLCBsb2FkaW5nU3RhdGUsIGN1cnJlbnRQYW5lbElkIH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXG4gICAgbGlicmFyeVBhbmVsc1ZpZXdSZWR1Y2VyLFxuICAgIHtcbiAgICAgIC4uLmluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLFxuICAgICAgY3VycmVudFBhbmVsSWQ6IGN1cnJlbnRQYW5lbCxcbiAgICAgIHBlclBhZ2U6IHByb3BzUGVyUGFnZSxcbiAgICB9XG4gICk7XG4gIGNvbnN0IGFzeW5jRGlzcGF0Y2ggPSB1c2VNZW1vKCgpID0+IGFzeW5jRGlzcGF0Y2hlcihkaXNwYXRjaCksIFtkaXNwYXRjaF0pO1xuICB1c2VEZWJvdW5jZShcbiAgICAoKSA9PlxuICAgICAgYXN5bmNEaXNwYXRjaChcbiAgICAgICAgc2VhcmNoRm9yTGlicmFyeVBhbmVscyh7XG4gICAgICAgICAgc2VhcmNoU3RyaW5nLFxuICAgICAgICAgIHNvcnREaXJlY3Rpb24sXG4gICAgICAgICAgcGFuZWxGaWx0ZXIsXG4gICAgICAgICAgZm9sZGVyRmlsdGVyLFxuICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgcGVyUGFnZSxcbiAgICAgICAgICBjdXJyZW50UGFuZWxJZCxcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgMzAwLFxuICAgIFtzZWFyY2hTdHJpbmcsIHNvcnREaXJlY3Rpb24sIHBhbmVsRmlsdGVyLCBmb2xkZXJGaWx0ZXIsIHBhZ2UsIGFzeW5jRGlzcGF0Y2hdXG4gICk7XG4gIGNvbnN0IG9uRGVsZXRlID0gKHsgdWlkIH06IExpYnJhcnlFbGVtZW50RFRPKSA9PlxuICAgIGFzeW5jRGlzcGF0Y2goZGVsZXRlTGlicmFyeVBhbmVsKHVpZCwgeyBzZWFyY2hTdHJpbmcsIHBhZ2UsIHBlclBhZ2UgfSkpO1xuICBjb25zdCBvblBhZ2VDaGFuZ2UgPSAocGFnZTogbnVtYmVyKSA9PiBhc3luY0Rpc3BhdGNoKGNoYW5nZVBhZ2UoeyBwYWdlIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGFpbmVyLCBjbGFzc05hbWUpfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlicmFyeVBhbmVsTGlzdH0+XG4gICAgICAgIHtsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nID8gKFxuICAgICAgICAgIDxwPkxvYWRpbmcgbGlicmFyeSBwYW5lbHMuLi48L3A+XG4gICAgICAgICkgOiBsaWJyYXJ5UGFuZWxzLmxlbmd0aCA8IDEgPyAoXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubm9QYW5lbHNGb3VuZH0+Tm8gbGlicmFyeSBwYW5lbHMgZm91bmQuPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGxpYnJhcnlQYW5lbHM/Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPExpYnJhcnlQYW5lbENhcmRcbiAgICAgICAgICAgICAga2V5PXtgbGlicmFyeS1wYW5lbD0ke2l9YH1cbiAgICAgICAgICAgICAgbGlicmFyeVBhbmVsPXtpdGVtfVxuICAgICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tDYXJkfVxuICAgICAgICAgICAgICBzaG93U2Vjb25kYXJ5QWN0aW9ucz17c2hvd1NlY29uZGFyeUFjdGlvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaWJyYXJ5UGFuZWxzLmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9ufT5cbiAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICBudW1iZXJPZlBhZ2VzPXtudW1iZXJPZlBhZ2VzfVxuICAgICAgICAgICAgb25OYXZpZ2F0ZT17b25QYWdlQ2hhbmdlfVxuICAgICAgICAgICAgaGlkZVdoZW5TaW5nbGVQYWdlPXt0cnVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRQYW5lbFZpZXdTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBgLFxuICAgIGxpYnJhcnlQYW5lbExpc3Q6IGNzc2BcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLWdhcDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIHNlYXJjaEhlYWRlcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBgLFxuICAgIG5ld1BhbmVsQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBgLFxuICAgIHBhZ2luYXRpb246IGNzc2BcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgYCxcbiAgICBub1BhbmVsc0ZvdW5kOiBjc3NgXG4gICAgICBsYWJlbDogbm9QYW5lbHNGb3VuZDtcbiAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZyb20sIG1lcmdlLCBvZiwgU3Vic2NyaXB0aW9uLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmluYWxpemUsIG1hcFRvLCBtZXJnZU1hcCwgc2hhcmUsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgZGVsZXRlTGlicmFyeVBhbmVsIGFzIGFwaURlbGV0ZUxpYnJhcnlQYW5lbCwgZ2V0TGlicmFyeVBhbmVscyB9IGZyb20gJy4uLy4uL3N0YXRlL2FwaSc7XG5cbmltcG9ydCB7IGluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlLCBpbml0U2VhcmNoLCBzZWFyY2hDb21wbGV0ZWQgfSBmcm9tICcuL3JlZHVjZXInO1xuXG50eXBlIERpc3BhdGNoUmVzdWx0ID0gKGRpc3BhdGNoOiBEaXNwYXRjaDxBbnlBY3Rpb24+KSA9PiB2b2lkO1xuaW50ZXJmYWNlIFNlYXJjaEFyZ3Mge1xuICBwZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgc2VhcmNoU3RyaW5nOiBzdHJpbmc7XG4gIHNvcnREaXJlY3Rpb24/OiBzdHJpbmc7XG4gIHBhbmVsRmlsdGVyPzogc3RyaW5nW107XG4gIGZvbGRlckZpbHRlcj86IHN0cmluZ1tdO1xuICBjdXJyZW50UGFuZWxJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEZvckxpYnJhcnlQYW5lbHMoYXJnczogU2VhcmNoQXJncyk6IERpc3BhdGNoUmVzdWx0IHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBjb25zdCBkYXRhT2JzZXJ2YWJsZSA9IGZyb20oXG4gICAgICBnZXRMaWJyYXJ5UGFuZWxzKHtcbiAgICAgICAgc2VhcmNoU3RyaW5nOiBhcmdzLnNlYXJjaFN0cmluZyxcbiAgICAgICAgcGVyUGFnZTogYXJncy5wZXJQYWdlLFxuICAgICAgICBwYWdlOiBhcmdzLnBhZ2UsXG4gICAgICAgIGV4Y2x1ZGVVaWQ6IGFyZ3MuY3VycmVudFBhbmVsSWQsXG4gICAgICAgIHNvcnREaXJlY3Rpb246IGFyZ3Muc29ydERpcmVjdGlvbixcbiAgICAgICAgdHlwZUZpbHRlcjogYXJncy5wYW5lbEZpbHRlcixcbiAgICAgICAgZm9sZGVyRmlsdGVyOiBhcmdzLmZvbGRlckZpbHRlcixcbiAgICAgIH0pXG4gICAgKS5waXBlKFxuICAgICAgbWVyZ2VNYXAoKHsgcGVyUGFnZSwgZWxlbWVudHM6IGxpYnJhcnlQYW5lbHMsIHBhZ2UsIHRvdGFsQ291bnQgfSkgPT5cbiAgICAgICAgb2Yoc2VhcmNoQ29tcGxldGVkKHsgbGlicmFyeVBhbmVscywgcGFnZSwgcGVyUGFnZSwgdG90YWxDb3VudCB9KSlcbiAgICAgICksXG4gICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gb2Yoc2VhcmNoQ29tcGxldGVkKHsgLi4uaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIHBhZ2U6IGFyZ3MucGFnZSwgcGVyUGFnZTogYXJncy5wZXJQYWdlIH0pKTtcbiAgICAgIH0pLFxuICAgICAgZmluYWxpemUoKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCkpLCAvLyBtYWtlIHN1cmUgd2UgdW5zdWJzY3JpYmVcbiAgICAgIHNoYXJlKClcbiAgICApO1xuXG4gICAgc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIC8vIElmIDUwbXMgd2l0aG91dCBhIHJlc3BvbnNlIGRpc3BhdGNoIGEgbG9hZGluZyBzdGF0ZVxuICAgICAgLy8gbWFwVG8gd2lsbCB0cmFuc2xhdGUgdGhlIHRpbWVyIGV2ZW50IGludG8gYSBsb2FkaW5nIHN0YXRlXG4gICAgICAvLyB0YWtlVW50aWwgd2lsbCBjYW5jZWwgdGhlIHRpbWVyIGVtaXQgd2hlbiBmaXJzdCByZXNwb25zZSBpcyByZWNlaXZlZCBvbiB0aGUgZGF0YU9ic2VydmFibGVcbiAgICAgIG1lcmdlKHRpbWVyKDUwKS5waXBlKG1hcFRvKGluaXRTZWFyY2goKSksIHRha2VVbnRpbChkYXRhT2JzZXJ2YWJsZSkpLCBkYXRhT2JzZXJ2YWJsZSkuc3Vic2NyaWJlKGRpc3BhdGNoKVxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaWJyYXJ5UGFuZWwodWlkOiBzdHJpbmcsIGFyZ3M6IFNlYXJjaEFyZ3MpOiBEaXNwYXRjaFJlc3VsdCB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXBpRGVsZXRlTGlicmFyeVBhbmVsKHVpZCk7XG4gICAgICBzZWFyY2hGb3JMaWJyYXJ5UGFuZWxzKGFyZ3MpKGRpc3BhdGNoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzeW5jRGlzcGF0Y2hlcihkaXNwYXRjaDogRGlzcGF0Y2g8QW55QWN0aW9uPikge1xuICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbjogYW55KSB7XG4gICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbik7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpYnJhcnlQYW5lbHNWaWV3U3RhdGUge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZTtcbiAgbGlicmFyeVBhbmVsczogTGlicmFyeUVsZW1lbnREVE9bXTtcbiAgdG90YWxDb3VudDogbnVtYmVyO1xuICBwZXJQYWdlOiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbnVtYmVyT2ZQYWdlczogbnVtYmVyO1xuICBjdXJyZW50UGFuZWxJZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxMaWJyYXJ5UGFuZWxzVmlld1N0YXRlOiBMaWJyYXJ5UGFuZWxzVmlld1N0YXRlID0ge1xuICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Mb2FkaW5nLFxuICBsaWJyYXJ5UGFuZWxzOiBbXSxcbiAgdG90YWxDb3VudDogMCxcbiAgcGVyUGFnZTogNDAsXG4gIHBhZ2U6IDEsXG4gIG51bWJlck9mUGFnZXM6IDAsXG4gIGN1cnJlbnRQYW5lbElkOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgY29uc3QgaW5pdFNlYXJjaCA9IGNyZWF0ZUFjdGlvbignbGlicmFyeVBhbmVscy92aWV3L2luaXRTZWFyY2gnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hDb21wbGV0ZWQgPSBjcmVhdGVBY3Rpb248XG4gIE9taXQ8TGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgJ2N1cnJlbnRQYW5lbElkJyB8ICdzZWFyY2hTdHJpbmcnIHwgJ2xvYWRpbmdTdGF0ZScgfCAnbnVtYmVyT2ZQYWdlcyc+XG4+KCdsaWJyYXJ5UGFuZWxzL3ZpZXcvc2VhcmNoQ29tcGxldGVkJyk7XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQYWdlID0gY3JlYXRlQWN0aW9uPFBpY2s8TGlicmFyeVBhbmVsc1ZpZXdTdGF0ZSwgJ3BhZ2UnPj4oJ2xpYnJhcnlQYW5lbHMvdmlldy9jaGFuZ2VQYWdlJyk7XG5cbmV4cG9ydCBjb25zdCBsaWJyYXJ5UGFuZWxzVmlld1JlZHVjZXIgPSAoc3RhdGU6IExpYnJhcnlQYW5lbHNWaWV3U3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKSA9PiB7XG4gIGlmIChpbml0U2VhcmNoLm1hdGNoKGFjdGlvbikpIHtcbiAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUuTG9hZGluZyB9O1xuICB9XG5cbiAgaWYgKHNlYXJjaENvbXBsZXRlZC5tYXRjaChhY3Rpb24pKSB7XG4gICAgY29uc3QgeyBsaWJyYXJ5UGFuZWxzLCBwYWdlLCBwZXJQYWdlLCB0b3RhbENvdW50IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICBjb25zdCBudW1iZXJPZlBhZ2VzID0gTWF0aC5jZWlsKHRvdGFsQ291bnQgLyBwZXJQYWdlKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsaWJyYXJ5UGFuZWxzLFxuICAgICAgcGVyUGFnZSxcbiAgICAgIHRvdGFsQ291bnQsXG4gICAgICBsb2FkaW5nU3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgbnVtYmVyT2ZQYWdlcyxcbiAgICAgIHBhZ2U6IHBhZ2UgPiBudW1iZXJPZlBhZ2VzID8gcGFnZSAtIDEgOiBwYWdlLFxuICAgIH07XG4gIH1cblxuICBpZiAoY2hhbmdlUGFnZS5tYXRjaChhY3Rpb24pKSB7XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBhZ2U6IGFjdGlvbi5wYXlsb2FkLnBhZ2UgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQXN5bmNTZWxlY3QsIEJ1dHRvbiwgTW9kYWwsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC90eXBlcyc7XG5pbXBvcnQgeyBnZXRDb25uZWN0ZWREYXNoYm9hcmRzLCBnZXRMaWJyYXJ5UGFuZWxDb25uZWN0ZWREYXNoYm9hcmRzIH0gZnJvbSAnLi4vLi4vc3RhdGUvYXBpJztcbmltcG9ydCB7IExpYnJhcnlFbGVtZW50RFRPIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5MaWJyYXJ5UGFuZWxNb2RhbFByb3BzIHtcbiAgb25EaXNtaXNzOiAoKSA9PiB2b2lkO1xuICBsaWJyYXJ5UGFuZWw6IExpYnJhcnlFbGVtZW50RFRPO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT3BlbkxpYnJhcnlQYW5lbE1vZGFsKHsgbGlicmFyeVBhbmVsLCBvbkRpc21pc3MgfTogT3BlbkxpYnJhcnlQYW5lbE1vZGFsUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtvcHRpb24sIHNldE9wdGlvbl0gPSB1c2VTdGF0ZTxTZWxlY3RhYmxlVmFsdWU8RGFzaGJvYXJkU2VhcmNoSGl0PiB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjb25uZWN0ZWREYXNoYm9hcmRzID0gYXdhaXQgZ2V0TGlicmFyeVBhbmVsQ29ubmVjdGVkRGFzaGJvYXJkcyhsaWJyYXJ5UGFuZWwudWlkKTtcbiAgICAgIHNldENvbm5lY3RlZChjb25uZWN0ZWREYXNoYm9hcmRzLmxlbmd0aCk7XG4gICAgfTtcbiAgICBnZXRDb25uZWN0ZWQoKTtcbiAgfSwgW2xpYnJhcnlQYW5lbC51aWRdKTtcbiAgY29uc3QgbG9hZE9wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VhcmNoU3RyaW5nOiBzdHJpbmcpID0+IGxvYWRPcHRpb25zQXN5bmMobGlicmFyeVBhbmVsLnVpZCwgc2VhcmNoU3RyaW5nLCBzZXRMb2FkaW5nKSxcbiAgICBbbGlicmFyeVBhbmVsLnVpZF1cbiAgKTtcbiAgY29uc3QgZGVib3VuY2VkTG9hZE9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IGRlYm91bmNlKGxvYWRPcHRpb25zLCAzMDAsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUgfSksXG4gICAgW2xvYWRPcHRpb25zXVxuICApO1xuICBjb25zdCBvblZpZXdQYW5lbCA9IChlOiBNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh1cmxVdGlsLnJlbmRlclVybChgL2QvJHtvcHRpb24/LnZhbHVlPy51aWR9YCwge30pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbCB0aXRsZT1cIlZpZXcgcGFuZWwgaW4gZGFzaGJvYXJkXCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IG9uQ2xpY2tCYWNrZHJvcD17b25EaXNtaXNzfSBpc09wZW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtjb25uZWN0ZWQgPT09IDAgPyAoXG4gICAgICAgICAgPHNwYW4+UGFuZWwgaXMgbm90IGxpbmtlZCB0byBhIGRhc2hib2FyZC4gQWRkIHRoZSBwYW5lbCB0byBhIGRhc2hib2FyZCBhbmQgcmV0cnkuPC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge2Nvbm5lY3RlZCA+IDAgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGlzIHBhbmVsIGlzIGJlaW5nIHVzZWQgaW57JyAnfVxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWR9IHtjb25uZWN0ZWQgPiAxID8gJ2Rhc2hib2FyZHMnIDogJ2Rhc2hib2FyZCd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAuUGxlYXNlIGNob29zZSB3aGljaCBkYXNoYm9hcmQgdG8gdmlldyB0aGUgcGFuZWwgaW46XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9ucz17dHJ1ZX1cbiAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZExvYWRPcHRpb25zfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0T3B0aW9ufVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXJ0IHR5cGluZyB0byBzZWFyY2ggZm9yIGRhc2hib2FyZFwiXG4gICAgICAgICAgICAgIG5vT3B0aW9uc01lc3NhZ2U9XCJObyBkYXNoYm9hcmRzIGZvdW5kXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8TW9kYWwuQnV0dG9uUm93PlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXtvbkRpc21pc3N9IGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uVmlld1BhbmVsfSBkaXNhYmxlZD17IUJvb2xlYW4ob3B0aW9uKX0+XG4gICAgICAgICAge29wdGlvbiA/IGBWaWV3IHBhbmVsIGluICR7b3B0aW9uPy5sYWJlbH0uLi5gIDogJ1ZpZXcgcGFuZWwgaW4gZGFzaGJvYXJkLi4uJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01vZGFsLkJ1dHRvblJvdz5cbiAgICA8L01vZGFsPlxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkT3B0aW9uc0FzeW5jKHVpZDogc3RyaW5nLCBzZWFyY2hTdHJpbmc6IHN0cmluZywgc2V0TG9hZGluZzogKGxvYWRpbmc6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgc2V0TG9hZGluZyh0cnVlKTtcbiAgY29uc3Qgc2VhcmNoSGl0cyA9IGF3YWl0IGdldENvbm5lY3RlZERhc2hib2FyZHModWlkKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHNlYXJjaEhpdHNcbiAgICAuZmlsdGVyKChkKSA9PiBkLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpKVxuICAgIC5tYXAoKGQpID0+ICh7IGxhYmVsOiBkLnRpdGxlLCB2YWx1ZTogZCB9KSk7XG4gIHNldExvYWRpbmcoZmFsc2UpO1xuXG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RhbFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgbXlUYWJsZTogY3NzYFxuICAgICAgbWF4LWhlaWdodDogMjA0cHg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmJvcmRlci5yYWRpdXMuc219O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYmczfTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJnMX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFNlbWlXZWFrfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUubWR9O1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIHRoZWFkIHtcbiAgICAgICAgY29sb3I6ICM1MzhhZGU7XG4gICAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICAgICAgfVxuXG4gICAgICB0aCxcbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogNnB4IDEzcHg7XG4gICAgICAgIGhlaWdodDogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICAgIH1cblxuICAgICAgdGJvZHkgPiB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJnMn07XG4gICAgICB9XG4gICAgYCxcbiAgICBub3RlVGV4dGJveDogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICBgLFxuICAgIHRleHRJbmZvOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFNlbWlXZWFrfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICAgIGAsXG4gICAgZGFzaGJvYXJkU2VhcmNoOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGAsXG4gICAgbW9kYWw6IGNzc2BcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICBgLFxuICAgIG1vZGFsVGV4dDogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaGVhZGluZy5oNH07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMubGlua307XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKCR7dGhlbWUuc3BhY2luZy5kfSAqIDIpO1xuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZy5kfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUsIFBhbmVsUGx1Z2luTWV0YSwgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgUGx1Z2luU2lnbmF0dXJlQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQbHVnaW5TdGF0ZUluZm8gfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9jb21wb25lbnRzL1BsdWdpblN0YXRlSW5mbyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlzQ3VycmVudDogYm9vbGVhbjtcbiAgcGx1Z2luOiBQYW5lbFBsdWdpbk1ldGE7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9uQ2xpY2s6IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PjtcbiAgb25EZWxldGU/OiAoKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNob3dCYWRnZT86IGJvb2xlYW47XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxUeXBlQ2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgaXNDdXJyZW50LFxuICB0aXRsZSxcbiAgcGx1Z2luLFxuICBvbkNsaWNrLFxuICBvbkRlbGV0ZSxcbiAgZGlzYWJsZWQsXG4gIHNob3dCYWRnZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGNzc0NsYXNzID0gY3goe1xuICAgIFtzdHlsZXMuaXRlbV06IHRydWUsXG4gICAgW3N0eWxlcy5kaXNhYmxlZF06IGRpc2FibGVkIHx8IHBsdWdpbi5zdGF0ZSA9PT0gUGx1Z2luU3RhdGUuZGVwcmVjYXRlZCxcbiAgICBbc3R5bGVzLmN1cnJlbnRdOiBpc0N1cnJlbnQsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzc31cbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5jb21wb25lbnRzLlBsdWdpblZpc3VhbGl6YXRpb24uaXRlbShwbHVnaW4ubmFtZSl9XG4gICAgICBvbkNsaWNrPXtkaXNhYmxlZCA/IHVuZGVmaW5lZCA6IG9uQ2xpY2t9XG4gICAgICB0aXRsZT17aXNDdXJyZW50ID8gJ0NsaWNrIGFnYWluIHRvIGNsb3NlIHRoaXMgc2VjdGlvbicgOiBwbHVnaW4ubmFtZX1cbiAgICA+XG4gICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXtwbHVnaW4uaW5mby5sb2dvcy5zbWFsbH0gYWx0PVwiXCIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtQ29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICB7ZGVzY3JpcHRpb24gPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvc3Bhbj4gOiBudWxsfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzaG93QmFkZ2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJhZGdlLCBkaXNhYmxlZCAmJiBzdHlsZXMuZGlzYWJsZWQpfT5cbiAgICAgICAgICA8UGFuZWxQbHVnaW5CYWRnZSBwbHVnaW49e3BsdWdpbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge29uRGVsZXRlICYmIChcbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBuYW1lPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIG9uRGVsZXRlKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVCdXR0b259XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBidXR0b24gb24gcGFuZWwgdHlwZSBjYXJkXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYW5lbFR5cGVDYXJkLmRpc3BsYXlOYW1lID0gJ1BhbmVsVHlwZUNhcmQnO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpdGVtOiBjc3NgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIGJveC1zaGFkb3c6ICR7dGhlbWUuc2hhZG93cy56MX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdHJhbnNpdGlvbjogJHt0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydiYWNrZ3JvdW5kJ10sIHtcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0LFxuICAgICAgfSl9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuZW1waGFzaXplKHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeSwgMC4wMyl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgaXRlbUNvbnRlbnQ6IGNzc2BcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMCwgMSl9O1xuICAgIGAsXG4gICAgY3VycmVudDogY3NzYFxuICAgICAgbGFiZWw6IGN1cnJlbnRWaXN1YWxpemF0aW9uSXRlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnByaW1hcnkuYm9yZGVyfTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmFjdGlvbi5zZWxlY3RlZH07XG4gICAgYCxcbiAgICBkaXNhYmxlZDogY3NzYFxuICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBgLFxuICAgIG5hbWU6IGNzc2BcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtfTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gICAgZGVzY3JpcHRpb246IGNzc2BcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRMaWdodH07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDQuNWVtO1xuICAgIGAsXG4gICAgaW1nOiBjc3NgXG4gICAgICBtYXgtaGVpZ2h0OiAzOHB4O1xuICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICAgIGJhZGdlOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnByaW1hcnl9O1xuICAgIGAsXG4gICAgZGVsZXRlQnV0dG9uOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBgLFxuICB9O1xufTtcblxuaW50ZXJmYWNlIFBhbmVsUGx1Z2luQmFkZ2VQcm9wcyB7XG4gIHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhO1xufVxuXG5jb25zdCBQYW5lbFBsdWdpbkJhZGdlOiBSZWFjdC5GQzxQYW5lbFBsdWdpbkJhZGdlUHJvcHM+ID0gKHsgcGx1Z2luIH0pID0+IHtcbiAgaWYgKGlzVW5zaWduZWRQbHVnaW5TaWduYXR1cmUocGx1Z2luLnNpZ25hdHVyZSkpIHtcbiAgICByZXR1cm4gPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz47XG4gIH1cblxuICByZXR1cm4gPFBsdWdpblN0YXRlSW5mbyBzdGF0ZT17cGx1Z2luLnN0YXRlfSAvPjtcbn07XG5cblBhbmVsUGx1Z2luQmFkZ2UuZGlzcGxheU5hbWUgPSAnUGFuZWxQbHVnaW5CYWRnZSc7XG4iLCJpbXBvcnQgeyBQYW5lbFBsdWdpbk1ldGEsIFBsdWdpblN0YXRlLCB1bkVzY2FwZVN0cmluZ0Zyb21SZWdleCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBhbmVsUGx1Z2luTWV0YSgpOiBQYW5lbFBsdWdpbk1ldGFbXSB7XG4gIGNvbnN0IGFsbFBhbmVscyA9IGNvbmZpZy5wYW5lbHM7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGFsbFBhbmVscylcbiAgICAuZmlsdGVyKChrZXkpID0+IGFsbFBhbmVsc1trZXldWydoaWRlRnJvbUxpc3QnXSA9PT0gZmFsc2UpXG4gICAgLm1hcCgoa2V5KSA9PiBhbGxQYW5lbHNba2V5XSlcbiAgICAuc29ydCgoYTogUGFuZWxQbHVnaW5NZXRhLCBiOiBQYW5lbFBsdWdpbk1ldGEpID0+IGEuc29ydCAtIGIuc29ydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJQbHVnaW5MaXN0KFxuICBwbHVnaW5zTGlzdDogUGFuZWxQbHVnaW5NZXRhW10sXG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmcsIC8vIE5vdGU6IHRoaXMgd2lsbCBiZSBhbiBlc2NhcGVkIHJlZ2V4IHN0cmluZyBhcyBpdCBjb21lcyBmcm9tIGBGaWx0ZXJJbnB1dGBcbiAgY3VycmVudDogUGFuZWxQbHVnaW5NZXRhXG4pOiBQYW5lbFBsdWdpbk1ldGFbXSB7XG4gIGlmICghc2VhcmNoUXVlcnkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBsdWdpbnNMaXN0LmZpbHRlcigocCkgPT4ge1xuICAgICAgaWYgKHAuc3RhdGUgPT09IFBsdWdpblN0YXRlLmRlcHJlY2F0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQuaWQgPT09IHAuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5ID0gdW5Fc2NhcGVTdHJpbmdGcm9tUmVnZXgoc2VhcmNoUXVlcnkpLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGZpcnN0OiBQYW5lbFBsdWdpbk1ldGFbXSA9IFtdO1xuICBjb25zdCBtYXRjaDogUGFuZWxQbHVnaW5NZXRhW10gPSBbXTtcbiAgY29uc3QgaXNHcmFwaFF1ZXJ5ID0gJ2dyYXBoJy5zdGFydHNXaXRoKHF1ZXJ5KTtcblxuICBmb3IgKGNvbnN0IGl0ZW0gb2YgcGx1Z2luc0xpc3QpIHtcbiAgICBpZiAoaXRlbS5zdGF0ZSA9PT0gUGx1Z2luU3RhdGUuZGVwcmVjYXRlZCAmJiBjdXJyZW50LmlkICE9PSBpdGVtLmlkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaWR4ID0gbmFtZS5pbmRleE9mKHF1ZXJ5KTtcblxuICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgIGZpcnN0LnB1c2goaXRlbSk7XG4gICAgfSBlbHNlIGlmIChpZHggPiAwKSB7XG4gICAgICBtYXRjaC5wdXNoKGl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoaXNHcmFwaFF1ZXJ5ICYmIGl0ZW0uaWQgPT09ICd0aW1lc2VyaWVzJykge1xuICAgICAgZmlyc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlyc3QuY29uY2F0KG1hdGNoKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhZGdlLCBCYWRnZVByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZT86IFBsdWdpblN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgUGx1Z2luU3RhdGVJbmZvOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGdldEZlYXR1cmVTdGF0ZUluZm8ocHJvcHMuc3RhdGUpO1xuXG4gIGlmICghZGlzcGxheSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIDxCYWRnZSBjb2xvcj17ZGlzcGxheS5jb2xvcn0gdGl0bGU9e2Rpc3BsYXkudG9vbHRpcH0gdGV4dD17ZGlzcGxheS50ZXh0fSBpY29uPXtkaXNwbGF5Lmljb259IC8+O1xufTtcblxuZnVuY3Rpb24gZ2V0RmVhdHVyZVN0YXRlSW5mbyhzdGF0ZT86IFBsdWdpblN0YXRlKTogQmFkZ2VQcm9wcyB8IG51bGwge1xuICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0RlcHJlY2F0ZWQnLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2VgLFxuICAgICAgfTtcbiAgICBjYXNlIFBsdWdpblN0YXRlLmFscGhhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0FscGhhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBleHBlcmltZW50YWwgYW5kIGZ1dHVyZSB1cGRhdGVzIG1pZ2h0IG5vdCBiZSBiYWNrd2FyZCBjb21wYXRpYmxlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5iZXRhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0JldGEnLFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGNsb3NlIHRvIGNvbXBsZXRlIGJ1dCBub3QgZnVsbHkgdGVzdGVkYCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY3NzIiwiZGVib3VuY2UiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQXN5bmNNdWx0aVNlbGVjdCIsIkljb24iLCJCdXR0b24iLCJ1c2VTdHlsZXMyIiwiZ2V0QmFja2VuZFNydiIsIlBlcm1pc3Npb25MZXZlbFN0cmluZyIsIkZvbGRlckZpbHRlciIsIm9uQ2hhbmdlIiwicHJvcHNPbkNoYW5nZSIsIm1heE1lbnVIZWlnaHQiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldE9wdGlvbnMiLCJzZWFyY2hTdHJpbmciLCJnZXRGb2xkZXJzQXNPcHRpb25zIiwiZGVib3VuY2VkTG9hZE9wdGlvbnMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZm9sZGVycyIsImNoYW5nZWRGb2xkZXJzIiwiZm9sZGVyIiwicHVzaCIsInNlbGVjdE9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImlzTXVsdGkiLCJub09wdGlvbnNNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJjb250YWluZXIiLCJsZW5ndGgiLCJjbGVhciIsInBhcmFtcyIsInF1ZXJ5IiwidHlwZSIsInBlcm1pc3Npb24iLCJWaWV3Iiwic2VhcmNoSGl0cyIsInNlYXJjaCIsIm9wdGlvbnMiLCJtYXAiLCJkIiwibGFiZWwiLCJ0aXRsZSIsImlkIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInVuc2hpZnQiLCJ0aGVtZSIsInNwYWNpbmciLCJNdWx0aVNlbGVjdCIsImdldEFsbFBhbmVsUGx1Z2luTWV0YSIsIlBhbmVsVHlwZUZpbHRlciIsInBsdWdpbnMiLCJwIiwibmFtZSIsImltZ1VybCIsImluZm8iLCJsb2dvcyIsInNtYWxsIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNoYW5nZWRQbHVnaW5zIiwicGx1Z2luIiwiZ2V0T3B0aW9uTGFiZWwiLCJpIiwiZ2V0T3B0aW9uVmFsdWUiLCJjb25uZWN0IiwiUGFnZSIsImdldE5hdk1vZGVsIiwiTGlicmFyeVBhbmVsc1NlYXJjaCIsIk9wZW5MaWJyYXJ5UGFuZWxNb2RhbCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImNvbm5lY3RvciIsInVuZGVmaW5lZCIsIkxpYnJhcnlQYW5lbHNQYWdlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInVzZUVmZmVjdCIsInVzZVJlZHVjZXIiLCJMb2FkaW5nU3RhdGUiLCJNb2RhbCIsInVzZVN0eWxlcyIsImdldE1vZGFsU3R5bGVzIiwiYXN5bmNEaXNwYXRjaGVyIiwiZ2V0Q29ubmVjdGVkRGFzaGJvYXJkcyIsImRlbGV0ZUxpYnJhcnlQYW5lbE1vZGFsUmVkdWNlciIsImluaXRpYWxEZWxldGVMaWJyYXJ5UGFuZWxNb2RhbFN0YXRlIiwiRGVsZXRlTGlicmFyeVBhbmVsTW9kYWwiLCJsaWJyYXJ5UGFuZWwiLCJvbkRpc21pc3MiLCJvbkNvbmZpcm0iLCJkYXNoYm9hcmRUaXRsZXMiLCJsb2FkaW5nU3RhdGUiLCJkaXNwYXRjaCIsImFzeW5jRGlzcGF0Y2giLCJjb25uZWN0ZWQiLCJCb29sZWFuIiwiZG9uZSIsIkRvbmUiLCJtb2RhbCIsIkxvYWRpbmdJbmRpY2F0b3IiLCJDb25maXJtIiwibW9kYWxUZXh0IiwiSGFzQ29ubmVjdGVkRGFzaGJvYXJkcyIsInN1ZmZpeCIsIm1lc3NhZ2UiLCJ0ZXh0SW5mbyIsIm15VGFibGUiLCJhcGlHZXRDb25uZWN0ZWREYXNoYm9hcmRzIiwic2VhcmNoQ29tcGxldGVkIiwiZGFzaGJvYXJkcyIsInVpZCIsImNyZWF0ZUFjdGlvbiIsIkxvYWRpbmciLCJhY3Rpb24iLCJtYXRjaCIsInBheWxvYWQiLCJjb25maWciLCJMaW5rIiwiZ2V0UGFuZWxQbHVnaW5Ob3RGb3VuZCIsIlBhbmVsVHlwZUNhcmQiLCJMaWJyYXJ5UGFuZWxDYXJkIiwib25DbGljayIsIm9uRGVsZXRlIiwic2hvd1NlY29uZGFyeUFjdGlvbnMiLCJzaG93RGVsZXRpb25Nb2RhbCIsInNldFNob3dEZWxldGlvbk1vZGFsIiwib25EZWxldGVQYW5lbCIsInBhbmVsUGx1Z2luIiwicGFuZWxzIiwibW9kZWwiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJGb2xkZXJMaW5rIiwiZm9sZGVyVWlkIiwiZm9sZGVyTmFtZSIsIm1ldGFDb250YWluZXIiLCJjb2xvcnMiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImJvZHlTbWFsbCIsImZvbnRTaXplIiwiSG9yaXpvbnRhbEdyb3VwIiwiVmVydGljYWxHcm91cCIsIkZpbHRlcklucHV0IiwiU29ydFBpY2tlciIsIkRFRkFVTFRfUEVSX1BBR0VfUEFHSU5BVElPTiIsIkxpYnJhcnlQYW5lbHNWaWV3IiwiZm9sZGVyRmlsdGVyQ2hhbmdlZCIsImluaXRpYWxMaWJyYXJ5UGFuZWxzU2VhcmNoU3RhdGUiLCJsaWJyYXJ5UGFuZWxzU2VhcmNoUmVkdWNlciIsInBhbmVsRmlsdGVyQ2hhbmdlZCIsInNlYXJjaENoYW5nZWQiLCJzb3J0Q2hhbmdlZCIsIkxpYnJhcnlQYW5lbHNTZWFyY2hWYXJpYW50IiwidmFyaWFudCIsIlNwYWNpb3VzIiwiY3VycmVudFBhbmVsSWQiLCJjdXJyZW50Rm9sZGVySWQiLCJwZXJQYWdlIiwic2hvd1BhbmVsRmlsdGVyIiwic2hvd0ZvbGRlckZpbHRlciIsInNob3dTb3J0Iiwic29ydERpcmVjdGlvbiIsInBhbmVsRmlsdGVyIiwiZm9sZGVyRmlsdGVyIiwic2VhcmNoUXVlcnkiLCJ0b1N0cmluZyIsIm9uRmlsdGVyQ2hhbmdlIiwib25Tb3J0Q2hhbmdlIiwic29ydGluZyIsIm9uRm9sZGVyRmlsdGVyQ2hhbmdlIiwib25QYW5lbEZpbHRlckNoYW5nZSIsImJ1dHRvblJvdyIsImxpYnJhcnlQYW5lbHNWaWV3IiwidGlnaHRCdXR0b25Sb3ciLCJ0aWdodEZpbHRlciIsInRpZ2h0U29ydEZpbHRlciIsImYiLCJTdHJpbmciLCJjeCIsInVzZURlYm91bmNlIiwiUGFnaW5hdGlvbiIsImRlbGV0ZUxpYnJhcnlQYW5lbCIsInNlYXJjaEZvckxpYnJhcnlQYW5lbHMiLCJjaGFuZ2VQYWdlIiwiaW5pdGlhbExpYnJhcnlQYW5lbHNWaWV3U3RhdGUiLCJsaWJyYXJ5UGFuZWxzVmlld1JlZHVjZXIiLCJjbGFzc05hbWUiLCJvbkNsaWNrQ2FyZCIsImN1cnJlbnRQYW5lbCIsInByb3BzUGVyUGFnZSIsImdldFBhbmVsVmlld1N0eWxlcyIsImxpYnJhcnlQYW5lbHMiLCJwYWdlIiwibnVtYmVyT2ZQYWdlcyIsIm9uUGFnZUNoYW5nZSIsImxpYnJhcnlQYW5lbExpc3QiLCJub1BhbmVsc0ZvdW5kIiwiaXRlbSIsInBhZ2luYXRpb24iLCJzbSIsInNlYXJjaEhlYWRlciIsIm5ld1BhbmVsQnV0dG9uIiwiZnJvbSIsIm1lcmdlIiwib2YiLCJTdWJzY3JpcHRpb24iLCJ0aW1lciIsImNhdGNoRXJyb3IiLCJmaW5hbGl6ZSIsIm1hcFRvIiwibWVyZ2VNYXAiLCJzaGFyZSIsInRha2VVbnRpbCIsImFwaURlbGV0ZUxpYnJhcnlQYW5lbCIsImdldExpYnJhcnlQYW5lbHMiLCJpbml0U2VhcmNoIiwiYXJncyIsInN1YnNjcmlwdGlvbiIsImRhdGFPYnNlcnZhYmxlIiwiZXhjbHVkZVVpZCIsInR5cGVGaWx0ZXIiLCJwaXBlIiwiZWxlbWVudHMiLCJ0b3RhbENvdW50IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidW5zdWJzY3JpYmUiLCJhZGQiLCJzdWJzY3JpYmUiLCJlIiwiRnVuY3Rpb24iLCJNYXRoIiwiY2VpbCIsInVybFV0aWwiLCJsb2NhdGlvblNlcnZpY2UiLCJBc3luY1NlbGVjdCIsImdldExpYnJhcnlQYW5lbENvbm5lY3RlZERhc2hib2FyZHMiLCJzZXRDb25uZWN0ZWQiLCJvcHRpb24iLCJzZXRPcHRpb24iLCJnZXRDb25uZWN0ZWQiLCJjb25uZWN0ZWREYXNoYm9hcmRzIiwibG9hZE9wdGlvbnMiLCJsb2FkT3B0aW9uc0FzeW5jIiwibGVhZGluZyIsInRyYWlsaW5nIiwib25WaWV3UGFuZWwiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlclVybCIsImZpbHRlciIsImJvcmRlciIsInJhZGl1cyIsImJnMyIsImJnMSIsInRleHRTZW1pV2VhayIsInNpemUiLCJtZCIsInhsIiwiYmcyIiwibm90ZVRleHRib3giLCJkYXNoYm9hcmRTZWFyY2giLCJoZWFkaW5nIiwiaDQiLCJsaW5rIiwiaXNVbnNpZ25lZFBsdWdpblNpZ25hdHVyZSIsIlBsdWdpblN0YXRlIiwic2VsZWN0b3JzIiwiSWNvbkJ1dHRvbiIsIlBsdWdpblNpZ25hdHVyZUJhZGdlIiwiUGx1Z2luU3RhdGVJbmZvIiwiaXNDdXJyZW50IiwiZGlzYWJsZWQiLCJzaG93QmFkZ2UiLCJjaGlsZHJlbiIsImNzc0NsYXNzIiwiZGVwcmVjYXRlZCIsImN1cnJlbnQiLCJjb21wb25lbnRzIiwiUGx1Z2luVmlzdWFsaXphdGlvbiIsImltZyIsIml0ZW1Db250ZW50IiwiYmFkZ2UiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVCdXR0b24iLCJkaXNwbGF5TmFtZSIsImJhY2tncm91bmQiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInNoYWRvd3MiLCJ6MSIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydCIsImVtcGhhc2l6ZSIsInByaW1hcnkiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodExpZ2h0IiwiUGFuZWxQbHVnaW5CYWRnZSIsInNpZ25hdHVyZSIsInVuRXNjYXBlU3RyaW5nRnJvbVJlZ2V4IiwiYWxsUGFuZWxzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImZpbHRlclBsdWdpbkxpc3QiLCJwbHVnaW5zTGlzdCIsImZpcnN0IiwiaXNHcmFwaFF1ZXJ5Iiwic3RhcnRzV2l0aCIsImlkeCIsImluZGV4T2YiLCJjb25jYXQiLCJCYWRnZSIsInByb3BzIiwiZGlzcGxheSIsImdldEZlYXR1cmVTdGF0ZUluZm8iLCJjb2xvciIsInRvb2x0aXAiLCJpY29uIiwiYWxwaGEiLCJiZXRhIl0sInNvdXJjZVJvb3QiOiIifQ==