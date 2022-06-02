"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4074],{

 "./public/app/features/search/components/DashboardListPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "DashboardListPage": () => ( DashboardListPage),
  "default": () => ( components_DashboardListPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
var state_navModel = __webpack_require__("./public/app/features/folders/state/navModel.ts");
;


const loadFolderPage = uid => {
  return backend_srv.ae.getFolderByUid(uid).then(folder => {
    const navModel = (0,state_navModel.B)(folder);
    navModel.children[0].active = true;
    return {
      folder,
      folderNav: navModel
    };
  });
};
var ManageDashboards = __webpack_require__("./public/app/features/search/components/ManageDashboards.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;










const DashboardListPage = (0,react.memo)(_ref => {
  var _value$pageNavModel;

  let {
    navModel,
    match,
    location
  } = _ref;
  const {
    loading,
    value
  } = (0,useAsync.Z)(() => {
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
  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: (_value$pageNavModel = value === null || value === void 0 ? void 0 : value.pageNavModel) !== null && _value$pageNavModel !== void 0 ? _value$pageNavModel : navModel,
    children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
      isLoading: loading,
      children: (0,jsx_runtime.jsx)(ManageDashboards.Z, {
        folder: value === null || value === void 0 ? void 0 : value.folder
      })
    })
  });
});
DashboardListPage.displayName = 'DashboardListPage';

const mapStateToProps = state => {
  return {
    navModel: (0,navModel.h)(state.navIndex, 'manage-dashboards')
  };
};

 const components_DashboardListPage = ((0,es.connect)(mapStateToProps)(DashboardListPage));

 })

}]);