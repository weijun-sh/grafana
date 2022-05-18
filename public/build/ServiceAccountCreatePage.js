"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServiceAccountCreatePage"],{

/***/ "./public/app/features/serviceaccounts/ServiceAccountCreatePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Button;












const createServiceAccount = async sa => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/serviceaccounts/', sa);

const ServiceAccountCreatePage = ({
  navModel
}) => {
  const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data => {
    await createServiceAccount(data);
    history.push('/org/serviceaccounts/');
  }, [history]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
        children: "Create service account"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
        onSubmit: onSubmit,
        validateOn: "onBlur",
        children: ({
          register,
          errors
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Display name",
              required: true,
              invalid: !!errors.name,
              error: errors.name ? 'Display name is required' : undefined,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
                id: "display-name-input"
              }, register('name', {
                required: true
              })))
            }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              children: "Create"
            }))]
          });
        }
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'serviceaccounts')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(ServiceAccountCreatePage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljZUFjY291bnRDcmVhdGVQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBVUEsTUFBTVcsb0JBQW9CLEdBQUcsTUFBT0MsRUFBUCxJQUFpQ1IsK0RBQWEsR0FBR1MsSUFBaEIsQ0FBcUIsdUJBQXJCLEVBQThDRCxFQUE5QyxDQUE5RDs7QUFFQSxNQUFNRSx3QkFBaUUsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUMxRixRQUFNQyxPQUFPLEdBQUdiLDREQUFVLEVBQTFCO0FBRUEsUUFBTWMsUUFBUSxHQUFHaEIsa0RBQVcsQ0FDMUIsTUFBT2lCLElBQVAsSUFBbUM7QUFDakMsVUFBTVAsb0JBQW9CLENBQUNPLElBQUQsQ0FBMUI7QUFDQUYsSUFBQUEsT0FBTyxDQUFDRyxJQUFSLENBQWEsdUJBQWI7QUFDRCxHQUp5QixFQUsxQixDQUFDSCxPQUFELENBTDBCLENBQTVCO0FBUUEsc0JBQ0UsdURBQUMscUVBQUQ7QUFBTSxZQUFRLEVBQUVELFFBQWhCO0FBQUEsMkJBQ0Usd0RBQUMsOEVBQUQ7QUFBQSwwQ0FDRTtBQUFBO0FBQUEsUUFERixnQkFFRSx1REFBQyw2Q0FBRDtBQUFNLGdCQUFRLEVBQUVFLFFBQWhCO0FBQTBCLGtCQUFVLEVBQUMsUUFBckM7QUFBQSxrQkFDRyxDQUFDO0FBQUVHLFVBQUFBLFFBQUY7QUFBWUMsVUFBQUE7QUFBWixTQUFELEtBQTBCO0FBQ3pCLDhCQUNFO0FBQUEsb0NBQ0UsdURBQUMsOENBQUQ7QUFDRSxtQkFBSyxFQUFDLGNBRFI7QUFFRSxzQkFBUSxNQUZWO0FBR0UscUJBQU8sRUFBRSxDQUFDLENBQUNBLE1BQU0sQ0FBQ0MsSUFIcEI7QUFJRSxtQkFBSyxFQUFFRCxNQUFNLENBQUNDLElBQVAsR0FBYywwQkFBZCxHQUEyQ0MsU0FKcEQ7QUFBQSxxQ0FNRSx1REFBQyw4Q0FBRDtBQUFPLGtCQUFFLEVBQUM7QUFBVixpQkFBbUNILFFBQVEsQ0FBQyxNQUFELEVBQVM7QUFBRUksZ0JBQUFBLFFBQVEsRUFBRTtBQUFaLGVBQVQsQ0FBM0M7QUFORixjQURGLHFDQVNFLHVEQUFDLCtDQUFEO0FBQVEsa0JBQUksRUFBQyxRQUFiO0FBQUE7QUFBQSxjQVRGO0FBQUEsWUFERjtBQWFEO0FBZkgsUUFGRjtBQUFBO0FBREYsSUFERjtBQXdCRCxDQW5DRDs7QUFxQ0EsTUFBTUMsZUFBZSxHQUFJQyxLQUFELEtBQXdCO0FBQzlDWCxFQUFBQSxRQUFRLEVBQUVMLHFFQUFXLENBQUNnQixLQUFLLENBQUNDLFFBQVAsRUFBaUIsaUJBQWpCO0FBRHlCLENBQXhCLENBQXhCOztBQUlBLGlFQUFlekIsb0RBQU8sQ0FBQ3VCLGVBQUQsQ0FBUCxDQUF5Qlgsd0JBQXpCLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZXJ2aWNlYWNjb3VudHMvU2VydmljZUFjY291bnRDcmVhdGVQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgRmllbGQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5cbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vLi4vY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFNlcnZpY2VBY2NvdW50Q3JlYXRlUGFnZVByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuaW50ZXJmYWNlIFNlcnZpY2VBY2NvdW50RFRPIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBjcmVhdGVTZXJ2aWNlQWNjb3VudCA9IGFzeW5jIChzYTogU2VydmljZUFjY291bnREVE8pID0+IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3NlcnZpY2VhY2NvdW50cy8nLCBzYSk7XG5cbmNvbnN0IFNlcnZpY2VBY2NvdW50Q3JlYXRlUGFnZTogUmVhY3QuRkM8U2VydmljZUFjY291bnRDcmVhdGVQYWdlUHJvcHM+ID0gKHsgbmF2TW9kZWwgfSkgPT4ge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXG4gICAgYXN5bmMgKGRhdGE6IFNlcnZpY2VBY2NvdW50RFRPKSA9PiB7XG4gICAgICBhd2FpdCBjcmVhdGVTZXJ2aWNlQWNjb3VudChkYXRhKTtcbiAgICAgIGhpc3RvcnkucHVzaCgnL29yZy9zZXJ2aWNlYWNjb3VudHMvJyk7XG4gICAgfSxcbiAgICBbaGlzdG9yeV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPGgxPkNyZWF0ZSBzZXJ2aWNlIGFjY291bnQ8L2gxPlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHZhbGlkYXRlT249XCJvbkJsdXJcIj5cbiAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNwbGF5IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWUgPyAnRGlzcGxheSBuYW1lIGlzIHJlcXVpcmVkJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJkaXNwbGF5LW5hbWUtaW5wdXRcIiB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdzZXJ2aWNlYWNjb3VudHMnKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoU2VydmljZUFjY291bnRDcmVhdGVQYWdlKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwiY29ubmVjdCIsInVzZUhpc3RvcnkiLCJnZXRCYWNrZW5kU3J2IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiRmllbGQiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJjcmVhdGVTZXJ2aWNlQWNjb3VudCIsInNhIiwicG9zdCIsIlNlcnZpY2VBY2NvdW50Q3JlYXRlUGFnZSIsIm5hdk1vZGVsIiwiaGlzdG9yeSIsIm9uU3VibWl0IiwiZGF0YSIsInB1c2giLCJyZWdpc3RlciIsImVycm9ycyIsIm5hbWUiLCJ1bmRlZmluZWQiLCJyZXF1aXJlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiXSwic291cmNlUm9vdCI6IiJ9