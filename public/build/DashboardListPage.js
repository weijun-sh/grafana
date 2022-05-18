"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DashboardListPage"],{

/***/ "./public/app/features/search/components/DashboardListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardListPage": () => (/* binding */ DashboardListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/search/loaders.ts");
/* harmony import */ var _ManageDashboards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/search/components/ManageDashboards.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const DashboardListPage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({
  navModel,
  match,
  location
}) => {
  var _value$pageNavModel;

  const {
    loading,
    value
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(() => {
    const uid = match.params.uid;
    const url = location.pathname;

    if (!uid || !url.startsWith('/dashboards')) {
      return Promise.resolve({
        pageNavModel: navModel
      });
    }

    return (0,_loaders__WEBPACK_IMPORTED_MODULE_6__.loadFolderPage)(uid).then(({
      folder,
      folderNav
    }) => {
      const path = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.locationUtil.stripBaseFromUrl(folder.url);

      if (path !== location.pathname) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push(path);
      }

      return {
        folder,
        pageNavModel: Object.assign({}, navModel, {
          main: folderNav
        })
      };
    });
  }, [match.params.uid]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: (_value$pageNavModel = value === null || value === void 0 ? void 0 : value.pageNavModel) !== null && _value$pageNavModel !== void 0 ? _value$pageNavModel : navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      isLoading: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ManageDashboards__WEBPACK_IMPORTED_MODULE_7__["default"], {
        folder: value === null || value === void 0 ? void 0 : value.folder
      })
    })
  });
});
DashboardListPage.displayName = 'DashboardListPage';

const mapStateToProps = state => {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'manage-dashboards')
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(DashboardListPage));

/***/ }),

/***/ "./public/app/features/search/loaders.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadFolderPage": () => (/* binding */ loadFolderPage)
/* harmony export */ });
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var _folders_state_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");


const loadFolderPage = uid => {
  return app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.backendSrv.getFolderByUid(uid).then(folder => {
    const navModel = (0,_folders_state_navModel__WEBPACK_IMPORTED_MODULE_1__.buildNavModel)(folder);
    navModel.children[0].active = true;
    return {
      folder,
      folderNav: navModel
    };
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dWJsaWMvYXBwL2ZlYXR1cmVzL3NlYXJjaC9jb21wb25lbnRzL0Rhc2hib2FyZExpc3RQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZWFyY2gvbG9hZGVycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBNYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IE5hdk1vZGVsLCBsb2NhdGlvblV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgRm9sZGVyRFRPLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgbG9hZEZvbGRlclBhZ2UgfSBmcm9tICcuLi9sb2FkZXJzJztcblxuaW1wb3J0IE1hbmFnZURhc2hib2FyZHMgZnJvbSAnLi9NYW5hZ2VEYXNoYm9hcmRzJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRMaXN0UGFnZVJvdXRlUGFyYW1zIHtcbiAgdWlkPzogc3RyaW5nO1xuICBzbHVnPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGFzaGJvYXJkTGlzdFBhZ2VDb25uZWN0ZWRQcm9wcyB7XG4gIG5hdk1vZGVsOiBOYXZNb2RlbDtcbn1cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPERhc2hib2FyZExpc3RQYWdlUm91dGVQYXJhbXM+LCBEYXNoYm9hcmRMaXN0UGFnZUNvbm5lY3RlZFByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRMaXN0UGFnZTogRkM8UHJvcHM+ID0gbWVtbygoeyBuYXZNb2RlbCwgbWF0Y2gsIGxvY2F0aW9uIH0pID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCB2YWx1ZSB9ID0gdXNlQXN5bmM8KCkgPT4gUHJvbWlzZTx7IGZvbGRlcj86IEZvbGRlckRUTzsgcGFnZU5hdk1vZGVsOiBOYXZNb2RlbCB9Pj4oKCkgPT4ge1xuICAgIGNvbnN0IHVpZCA9IG1hdGNoLnBhcmFtcy51aWQ7XG4gICAgY29uc3QgdXJsID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKCF1aWQgfHwgIXVybC5zdGFydHNXaXRoKCcvZGFzaGJvYXJkcycpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgcGFnZU5hdk1vZGVsOiBuYXZNb2RlbCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZEZvbGRlclBhZ2UodWlkISkudGhlbigoeyBmb2xkZXIsIGZvbGRlck5hdiB9KSA9PiB7XG4gICAgICBjb25zdCBwYXRoID0gbG9jYXRpb25VdGlsLnN0cmlwQmFzZUZyb21VcmwoZm9sZGVyLnVybCk7XG5cbiAgICAgIGlmIChwYXRoICE9PSBsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaChwYXRoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgZm9sZGVyLCBwYWdlTmF2TW9kZWw6IHsgLi4ubmF2TW9kZWwsIG1haW46IGZvbGRlck5hdiB9IH07XG4gICAgfSk7XG4gIH0sIFttYXRjaC5wYXJhbXMudWlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17dmFsdWU/LnBhZ2VOYXZNb2RlbCA/PyBuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICA8TWFuYWdlRGFzaGJvYXJkcyBmb2xkZXI9e3ZhbHVlPy5mb2xkZXJ9IC8+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufSk7XG5cbkRhc2hib2FyZExpc3RQYWdlLmRpc3BsYXlOYW1lID0gJ0Rhc2hib2FyZExpc3RQYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzOiBNYXBTdGF0ZVRvUHJvcHM8RGFzaGJvYXJkTGlzdFBhZ2VDb25uZWN0ZWRQcm9wcywge30sIFN0b3JlU3RhdGU+ID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnbWFuYWdlLWRhc2hib2FyZHMnKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEYXNoYm9hcmRMaXN0UGFnZSk7XG4iLCJpbXBvcnQgeyBiYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuXG5pbXBvcnQgeyBidWlsZE5hdk1vZGVsIH0gZnJvbSAnLi4vZm9sZGVycy9zdGF0ZS9uYXZNb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBsb2FkRm9sZGVyUGFnZSA9ICh1aWQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYmFja2VuZFNydi5nZXRGb2xkZXJCeVVpZCh1aWQpLnRoZW4oKGZvbGRlcikgPT4ge1xuICAgIGNvbnN0IG5hdk1vZGVsID0gYnVpbGROYXZNb2RlbChmb2xkZXIpO1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIVswXS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHsgZm9sZGVyLCBmb2xkZXJOYXY6IG5hdk1vZGVsIH07XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1lbW8iLCJjb25uZWN0IiwidXNlQXN5bmMiLCJsb2NhdGlvblV0aWwiLCJsb2NhdGlvblNlcnZpY2UiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJsb2FkRm9sZGVyUGFnZSIsIk1hbmFnZURhc2hib2FyZHMiLCJEYXNoYm9hcmRMaXN0UGFnZSIsIm5hdk1vZGVsIiwibWF0Y2giLCJsb2NhdGlvbiIsImxvYWRpbmciLCJ2YWx1ZSIsInVpZCIsInBhcmFtcyIsInVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicGFnZU5hdk1vZGVsIiwidGhlbiIsImZvbGRlciIsImZvbGRlck5hdiIsInBhdGgiLCJzdHJpcEJhc2VGcm9tVXJsIiwicHVzaCIsIm1haW4iLCJkaXNwbGF5TmFtZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiLCJiYWNrZW5kU3J2IiwiYnVpbGROYXZNb2RlbCIsImdldEZvbGRlckJ5VWlkIiwiY2hpbGRyZW4iLCJhY3RpdmUiXSwic291cmNlUm9vdCI6IiJ9