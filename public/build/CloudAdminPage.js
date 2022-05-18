"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["CloudAdminPage"],{

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavModel": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/live/pages/CloudAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudAdminPage)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function CloudAdminPage() {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_5__.useNavModel)('live-cloud');
  const [cloud, setCloud] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get(`api/live/write-configs`).then(data => {
      setCloud(data.writeConfigs);
    }).catch(e => {
      if (e.data) {
        setError(JSON.stringify(e.data, null, 2));
      }
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
        children: error
      }), !cloud && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: "Loading cloud definitions"
      }), cloud && cloud.map(v => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
            children: v.uid
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("pre", {
            className: styles.row,
            children: JSON.stringify(v.settings, null, 2)
          })]
        }, v.uid);
      })]
    })
  });
}

const getStyles = theme => {
  return {
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      cursor: pointer;
    `
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRBZG1pblBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUVPLE1BQU1FLFdBQVcsR0FBSUMsRUFBRCxJQUEwQjtBQUNuRCxRQUFNQyxRQUFRLEdBQUdKLHdEQUFXLENBQUVLLEtBQUQsSUFBdUJBLEtBQUssQ0FBQ0QsUUFBOUIsQ0FBNUI7QUFDQSxTQUFPSCxnRUFBVyxDQUFDRyxRQUFELEVBQVdELEVBQVgsQ0FBbEI7QUFDRCxDQUhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJZSxTQUFTVSxjQUFULEdBQTBCO0FBQ3ZDLFFBQU1DLFFBQVEsR0FBR1osdUVBQVcsQ0FBQyxZQUFELENBQTVCO0FBQ0EsUUFBTSxDQUFDYSxLQUFELEVBQVFDLFFBQVIsSUFBb0JQLCtDQUFRLENBQXdCLEVBQXhCLENBQWxDO0FBQ0EsUUFBTSxDQUFDUSxLQUFELEVBQVFDLFFBQVIsSUFBb0JULCtDQUFRLEVBQWxDO0FBQ0EsUUFBTVUsTUFBTSxHQUFHUixzREFBUyxDQUFDUyxTQUFELENBQXhCO0FBRUFaLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkRSxJQUFBQSwrREFBYSxHQUNWVyxHQURILENBQ1Esd0JBRFIsRUFFR0MsSUFGSCxDQUVTQyxJQUFELElBQVU7QUFDZFAsTUFBQUEsUUFBUSxDQUFDTyxJQUFJLENBQUNDLFlBQU4sQ0FBUjtBQUNELEtBSkgsRUFLR0MsS0FMSCxDQUtVQyxDQUFELElBQU87QUFDWixVQUFJQSxDQUFDLENBQUNILElBQU4sRUFBWTtBQUNWTCxRQUFBQSxRQUFRLENBQUNTLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixDQUFDLENBQUNILElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCLENBQUQsQ0FBUjtBQUNEO0FBQ0YsS0FUSDtBQVVELEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQSxzQkFDRSx1REFBQyxxRUFBRDtBQUFNLFlBQVEsRUFBRVQsUUFBaEI7QUFBQSwyQkFDRSx3REFBQyw4RUFBRDtBQUFBLGlCQUNHRyxLQUFLLGlCQUFJO0FBQUEsa0JBQU1BO0FBQU4sUUFEWixFQUVHLENBQUNGLEtBQUQsaUJBQVU7QUFBQTtBQUFBLFFBRmIsRUFHR0EsS0FBSyxJQUNKQSxLQUFLLENBQUNjLEdBQU4sQ0FBV0MsQ0FBRCxJQUFPO0FBQ2YsNEJBQ0U7QUFBQSxrQ0FDRTtBQUFBLHNCQUFLQSxDQUFDLENBQUNDO0FBQVAsWUFERixlQUVFO0FBQUsscUJBQVMsRUFBRVosTUFBTSxDQUFDYSxHQUF2QjtBQUFBLHNCQUE2QkwsSUFBSSxDQUFDQyxTQUFMLENBQWVFLENBQUMsQ0FBQ0csUUFBakIsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakM7QUFBN0IsWUFGRjtBQUFBLFdBQVVILENBQUMsQ0FBQ0MsR0FBWixDQURGO0FBTUQsT0FQRCxDQUpKO0FBQUE7QUFERixJQURGO0FBaUJEOztBQUVELE1BQU1YLFNBQVMsR0FBSWMsS0FBRCxJQUF5QjtBQUN6QyxTQUFPO0FBQ0xGLElBQUFBLEdBQUcsRUFBRTFCLDZDQUFJO0FBQ2I7QUFDQTtBQUhTLEdBQVA7QUFLRCxDQU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9ob29rcy91c2VOYXZNb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saXZlL3BhZ2VzL0Nsb3VkQWRtaW5QYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuXG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5cbmV4cG9ydCBjb25zdCB1c2VOYXZNb2RlbCA9IChpZDogc3RyaW5nKTogTmF2TW9kZWwgPT4ge1xuICBjb25zdCBuYXZJbmRleCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpO1xuICByZXR1cm4gZ2V0TmF2TW9kZWwobmF2SW5kZXgsIGlkKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgdXNlTmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VOYXZNb2RlbCc7XG5cbmltcG9ydCB7IEdyYWZhbmFDbG91ZEJhY2tlbmQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvdWRBZG1pblBhZ2UoKSB7XG4gIGNvbnN0IG5hdk1vZGVsID0gdXNlTmF2TW9kZWwoJ2xpdmUtY2xvdWQnKTtcbiAgY29uc3QgW2Nsb3VkLCBzZXRDbG91ZF0gPSB1c2VTdGF0ZTxHcmFmYW5hQ2xvdWRCYWNrZW5kW10+KFtdKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZ2V0KGBhcGkvbGl2ZS93cml0ZS1jb25maWdzYClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldENsb3VkKGRhdGEud3JpdGVDb25maWdzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuZGF0YSkge1xuICAgICAgICAgIHNldEVycm9yKEpTT04uc3RyaW5naWZ5KGUuZGF0YSwgbnVsbCwgMikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICB7ZXJyb3IgJiYgPHByZT57ZXJyb3J9PC9wcmU+fVxuICAgICAgICB7IWNsb3VkICYmIDw+TG9hZGluZyBjbG91ZCBkZWZpbml0aW9uczwvPn1cbiAgICAgICAge2Nsb3VkICYmXG4gICAgICAgICAgY2xvdWQubWFwKCh2KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17di51aWR9PlxuICAgICAgICAgICAgICAgIDxoMj57di51aWR9PC9oMj5cbiAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT17c3R5bGVzLnJvd30+e0pTT04uc3RyaW5naWZ5KHYuc2V0dGluZ3MsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJvdzogY3NzYFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGAsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwiZ2V0TmF2TW9kZWwiLCJ1c2VOYXZNb2RlbCIsImlkIiwibmF2SW5kZXgiLCJzdGF0ZSIsImNzcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRCYWNrZW5kU3J2IiwidXNlU3R5bGVzIiwiUGFnZSIsIkNsb3VkQWRtaW5QYWdlIiwibmF2TW9kZWwiLCJjbG91ZCIsInNldENsb3VkIiwiZXJyb3IiLCJzZXRFcnJvciIsInN0eWxlcyIsImdldFN0eWxlcyIsImdldCIsInRoZW4iLCJkYXRhIiwid3JpdGVDb25maWdzIiwiY2F0Y2giLCJlIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1hcCIsInYiLCJ1aWQiLCJyb3ciLCJzZXR0aW5ncyIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==