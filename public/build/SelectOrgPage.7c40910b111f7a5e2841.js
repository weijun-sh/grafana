"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1456],{

 "./public/app/features/org/SelectOrgPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "SelectOrgPage": () => ( SelectOrgPage),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/org/state/actions.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;










const navModel = {
  main: {
    icon: 'grafana',
    subTitle: 'Preferences',
    text: 'Select active organization'
  },
  node: {
    text: 'Select active organization'
  }
};

const mapStateToProps = state => {
  return {
    userOrgs: state.organization.userOrgs
  };
};

const mapDispatchToProps = {
  setUserOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_5__ .Q$,
  getUserOrganizations: _state_actions__WEBPACK_IMPORTED_MODULE_5__ .JE
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const SelectOrgPage = _ref => {
  let {
    setUserOrganization,
    getUserOrganizations,
    userOrgs
  } = _ref;

  const setUserOrg = async org => {
    await setUserOrganization(org.orgId);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.appSubUrl + '/';
  };

  (0,react_use__WEBPACK_IMPORTED_MODULE_7__ .Z)(() => {
    getUserOrganizations();
  });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z, {
    navModel: navModel,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z.Contents, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [_p || (_p = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: "You have been invited to another organization! Please select which organization that you want to use right now. You can change this later at any time."
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          wrap: true,
          children: userOrgs && userOrgs.map(org => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            icon: "signin",
            onClick: () => setUserOrg(org),
            children: org.name
          }, org.orgId))
        })]
      })
    })
  });
};
 const __WEBPACK_DEFAULT_EXPORT__ = (connector(SelectOrgPage));

 }),

 "./public/app/features/org/state/actions.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "FV": () => ( updateOrganization),
   "JE": () => ( getUserOrganizations),
   "Q$": () => ( setUserOrganization),
   "RF": () => ( loadOrganization),
   "Yi": () => ( createOrganization)
 });
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
 var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/org/state/reducers.ts");



function loadOrganization() {
  let dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().get('/api/org');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .jR)(organizationResponse));
    return organizationResponse;
  };
}
function updateOrganization() {
  let dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async (dispatch, getStore) => {
    const organization = getStore().organization.organization;
    await dependencies.getBackendSrv().put('/api/org', {
      name: organization.name
    });
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__ .H7)(organization.name));
    dispatch(loadOrganization(dependencies));
  };
}
function setUserOrganization(orgId) {
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().post('/api/user/using/' + orgId);
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__ .H7)(organizationResponse.name));
  };
}
function createOrganization(newOrg) {
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async dispatch => {
    const result = await dependencies.getBackendSrv().post('/api/orgs/', newOrg);
    dispatch(setUserOrganization(result.orgId));
  };
}
function getUserOrganizations() {
  let dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async dispatch => {
    const result = await dependencies.getBackendSrv().get('/api/user/orgs');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .IM)(result));
    return result;
  };
}

 })

}]);