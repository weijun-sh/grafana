"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SelectOrgPage"],{

/***/ "./public/app/features/org/SelectOrgPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectOrgPage": () => (/* binding */ SelectOrgPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/org/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
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
  setUserOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_5__.setUserOrganization,
  getUserOrganizations: _state_actions__WEBPACK_IMPORTED_MODULE_5__.getUserOrganizations
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const SelectOrgPage = ({
  setUserOrganization,
  getUserOrganizations,
  userOrgs
}) => {
  const setUserOrg = async org => {
    await setUserOrganization(org.orgId);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.appSubUrl + '/';
  };

  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(() => {
    getUserOrganizations();
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          children: "You have been invited to another organization! Please select which organization that you want to use right now. You can change this later at any time."
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          wrap: true,
          children: userOrgs && userOrgs.map(org => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            icon: "signin",
            onClick: () => setUserOrg(org),
            children: org.name
          }, org.orgId))
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SelectOrgPage));

/***/ }),

/***/ "./public/app/features/org/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOrganization": () => (/* binding */ createOrganization),
/* harmony export */   "getUserOrganizations": () => (/* binding */ getUserOrganizations),
/* harmony export */   "loadOrganization": () => (/* binding */ loadOrganization),
/* harmony export */   "setUserOrganization": () => (/* binding */ setUserOrganization),
/* harmony export */   "updateOrganization": () => (/* binding */ updateOrganization)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/org/state/reducers.ts");



function loadOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().get('/api/org');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.organizationLoaded)(organizationResponse));
    return organizationResponse;
  };
}
function updateOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async (dispatch, getStore) => {
    const organization = getStore().organization.organization;
    await dependencies.getBackendSrv().put('/api/org', {
      name: organization.name
    });
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateConfigurationSubtitle)(organization.name));
    dispatch(loadOrganization(dependencies));
  };
}
function setUserOrganization(orgId, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().post('/api/user/using/' + orgId);
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateConfigurationSubtitle)(organizationResponse.name));
  };
}
function createOrganization(newOrg, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().post('/api/orgs/', newOrg);
    dispatch(setUserOrganization(result.orgId));
  };
}
function getUserOrganizations(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().get('/api/user/orgs');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userOrganizationsLoaded)(result));
    return result;
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQU1TLE1BQU0sR0FBRyxNQUFNVixZQUFZLENBQUNMLGFBQWIsR0FBNkJRLEdBQTdCLENBQWlDLGdCQUFqQyxDQUFyQjtBQUNBRixJQUFBQSxRQUFRLENBQUNILGtFQUF1QixDQUFDWSxNQUFELENBQXhCLENBQVI7QUFFQSxXQUFPQSxNQUFQO0FBQ0QsR0FMRDtBQU1EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvb3JnL1NlbGVjdE9yZ1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL29yZy9zdGF0ZS9hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlRWZmZWN0T25jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlLCBVc2VyT3JnIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgZ2V0VXNlck9yZ2FuaXphdGlvbnMsIHNldFVzZXJPcmdhbml6YXRpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuXG5jb25zdCBuYXZNb2RlbCA9IHtcbiAgbWFpbjoge1xuICAgIGljb246ICdncmFmYW5hJyxcbiAgICBzdWJUaXRsZTogJ1ByZWZlcmVuY2VzJyxcbiAgICB0ZXh0OiAnU2VsZWN0IGFjdGl2ZSBvcmdhbml6YXRpb24nLFxuICB9LFxuICBub2RlOiB7XG4gICAgdGV4dDogJ1NlbGVjdCBhY3RpdmUgb3JnYW5pemF0aW9uJyxcbiAgfSxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXJPcmdzOiBzdGF0ZS5vcmdhbml6YXRpb24udXNlck9yZ3MsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHNldFVzZXJPcmdhbml6YXRpb24sXG4gIGdldFVzZXJPcmdhbml6YXRpb25zLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbnR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdE9yZ1BhZ2U6IEZDPFByb3BzPiA9ICh7IHNldFVzZXJPcmdhbml6YXRpb24sIGdldFVzZXJPcmdhbml6YXRpb25zLCB1c2VyT3JncyB9KSA9PiB7XG4gIGNvbnN0IHNldFVzZXJPcmcgPSBhc3luYyAob3JnOiBVc2VyT3JnKSA9PiB7XG4gICAgYXdhaXQgc2V0VXNlck9yZ2FuaXphdGlvbihvcmcub3JnSWQpO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29uZmlnLmFwcFN1YlVybCArICcvJztcbiAgfTtcblxuICB1c2VFZmZlY3RPbmNlKCgpID0+IHtcbiAgICBnZXRVc2VyT3JnYW5pemF0aW9ucygpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFlvdSBoYXZlIGJlZW4gaW52aXRlZCB0byBhbm90aGVyIG9yZ2FuaXphdGlvbiEgUGxlYXNlIHNlbGVjdCB3aGljaCBvcmdhbml6YXRpb24gdGhhdCB5b3Ugd2FudCB0byB1c2UgcmlnaHRcbiAgICAgICAgICAgIG5vdy4gWW91IGNhbiBjaGFuZ2UgdGhpcyBsYXRlciBhdCBhbnkgdGltZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPEhvcml6b250YWxHcm91cCB3cmFwPlxuICAgICAgICAgICAge3VzZXJPcmdzICYmXG4gICAgICAgICAgICAgIHVzZXJPcmdzLm1hcCgob3JnKSA9PiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e29yZy5vcmdJZH0gaWNvbj1cInNpZ25pblwiIG9uQ2xpY2s9eygpID0+IHNldFVzZXJPcmcob3JnKX0+XG4gICAgICAgICAgICAgICAgICB7b3JnLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoU2VsZWN0T3JnUGFnZSk7XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVDb25maWd1cmF0aW9uU3VidGl0bGUgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgb3JnYW5pemF0aW9uTG9hZGVkLCB1c2VyT3JnYW5pemF0aW9uc0xvYWRlZCB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG50eXBlIE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogdHlwZW9mIGdldEJhY2tlbmRTcnYgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPcmdhbml6YXRpb24oXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uUmVzcG9uc2UgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9vcmcnKTtcbiAgICBkaXNwYXRjaChvcmdhbml6YXRpb25Mb2FkZWQob3JnYW5pemF0aW9uUmVzcG9uc2UpKTtcblxuICAgIHJldHVybiBvcmdhbml6YXRpb25SZXNwb25zZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9yZ2FuaXphdGlvbihcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3Qgb3JnYW5pemF0aW9uID0gZ2V0U3RvcmUoKS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uO1xuXG4gICAgYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5wdXQoJy9hcGkvb3JnJywgeyBuYW1lOiBvcmdhbml6YXRpb24ubmFtZSB9KTtcblxuICAgIGRpc3BhdGNoKHVwZGF0ZUNvbmZpZ3VyYXRpb25TdWJ0aXRsZShvcmdhbml6YXRpb24ubmFtZSkpO1xuICAgIGRpc3BhdGNoKGxvYWRPcmdhbml6YXRpb24oZGVwZW5kZW5jaWVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyT3JnYW5pemF0aW9uKFxuICBvcmdJZDogbnVtYmVyLFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvblJlc3BvbnNlID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3VzZXIvdXNpbmcvJyArIG9yZ0lkKTtcblxuICAgIGRpc3BhdGNoKHVwZGF0ZUNvbmZpZ3VyYXRpb25TdWJ0aXRsZShvcmdhbml6YXRpb25SZXNwb25zZS5uYW1lKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcmdhbml6YXRpb24oXG4gIG5ld09yZzogeyBuYW1lOiBzdHJpbmcgfSxcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvb3Jncy8nLCBuZXdPcmcpO1xuXG4gICAgZGlzcGF0Y2goc2V0VXNlck9yZ2FuaXphdGlvbihyZXN1bHQub3JnSWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJPcmdhbml6YXRpb25zKFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3VzZXIvb3JncycpO1xuICAgIGRpc3BhdGNoKHVzZXJPcmdhbml6YXRpb25zTG9hZGVkKHJlc3VsdCkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbm5lY3QiLCJ1c2VFZmZlY3RPbmNlIiwiY29uZmlnIiwiQnV0dG9uIiwiSG9yaXpvbnRhbEdyb3VwIiwiUGFnZSIsImdldFVzZXJPcmdhbml6YXRpb25zIiwic2V0VXNlck9yZ2FuaXphdGlvbiIsIm5hdk1vZGVsIiwibWFpbiIsImljb24iLCJzdWJUaXRsZSIsInRleHQiLCJub2RlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyT3JncyIsIm9yZ2FuaXphdGlvbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIlNlbGVjdE9yZ1BhZ2UiLCJzZXRVc2VyT3JnIiwib3JnIiwib3JnSWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhcHBTdWJVcmwiLCJtYXAiLCJuYW1lIiwiZ2V0QmFja2VuZFNydiIsInVwZGF0ZUNvbmZpZ3VyYXRpb25TdWJ0aXRsZSIsIm9yZ2FuaXphdGlvbkxvYWRlZCIsInVzZXJPcmdhbml6YXRpb25zTG9hZGVkIiwibG9hZE9yZ2FuaXphdGlvbiIsImRlcGVuZGVuY2llcyIsImRpc3BhdGNoIiwib3JnYW5pemF0aW9uUmVzcG9uc2UiLCJnZXQiLCJ1cGRhdGVPcmdhbml6YXRpb24iLCJnZXRTdG9yZSIsInB1dCIsInBvc3QiLCJjcmVhdGVPcmdhbml6YXRpb24iLCJuZXdPcmciLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9