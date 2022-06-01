"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4074],{

/***/ "./public/app/features/search/components/DashboardListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DashboardListPage": () => (/* binding */ DashboardListPage),
  "default": () => (/* binding */ components_DashboardListPage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./public/app/core/services/backend_srv.ts + 4 modules
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
// EXTERNAL MODULE: ./public/app/features/folders/state/navModel.ts
var state_navModel = __webpack_require__("./public/app/features/folders/state/navModel.ts");
;// CONCATENATED MODULE: ./public/app/features/search/loaders.ts


const loadFolderPage = uid => {
  return backend_srv/* backendSrv.getFolderByUid */.ae.getFolderByUid(uid).then(folder => {
    const navModel = (0,state_navModel/* buildNavModel */.B)(folder);
    navModel.children[0].active = true;
    return {
      folder,
      folderNav: navModel
    };
  });
};
// EXTERNAL MODULE: ./public/app/features/search/components/ManageDashboards.tsx + 1 modules
var ManageDashboards = __webpack_require__("./public/app/features/search/components/ManageDashboards.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/search/components/DashboardListPage.tsx










const DashboardListPage = /*#__PURE__*/(0,react.memo)(_ref => {
  var _value$pageNavModel;

  let {
    navModel,
    match,
    location
  } = _ref;
  const {
    loading,
    value
  } = (0,useAsync/* default */.Z)(() => {
    const uid = match.params.uid;
    const url = location.pathname;

    if (!uid || !url.startsWith('/dashboards')) {
      return Promise.resolve({
        pageNavModel: navModel
      });
    }

    return loadFolderPage(uid).then(_ref2 => {
      let {
        folder,
        folderNav
      } = _ref2;
      const path = src.locationUtil.stripBaseFromUrl(folder.url);

      if (path !== location.pathname) {
        grafana_runtime_src.locationService.push(path);
      }

      return {
        folder,
        pageNavModel: Object.assign({}, navModel, {
          main: folderNav
        })
      };
    });
  }, [match.params.uid]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
    navModel: (_value$pageNavModel = value === null || value === void 0 ? void 0 : value.pageNavModel) !== null && _value$pageNavModel !== void 0 ? _value$pageNavModel : navModel,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
      isLoading: loading,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ManageDashboards/* default */.Z, {
        folder: value === null || value === void 0 ? void 0 : value.folder
      })
    })
  });
});
DashboardListPage.displayName = 'DashboardListPage';

const mapStateToProps = state => {
  return {
    navModel: (0,navModel/* getNavModel */.h)(state.navIndex, 'manage-dashboards')
  };
};

/* harmony default export */ const components_DashboardListPage = ((0,es.connect)(mapStateToProps)(DashboardListPage));

/***/ })

}]);