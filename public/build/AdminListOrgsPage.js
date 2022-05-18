"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AdminListOrgsPage"],{

/***/ "./public/app/features/admin/AdminListOrgsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminListOrgsPages)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use_lib_useAsyncFn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsyncFn.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _AdminOrgsTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/admin/AdminOrgsTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;















const deleteOrg = async orgId => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().delete('/api/orgs/' + orgId);
};

const getOrgs = async () => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get('/api/orgs');
};

const getErrorMessage = error => {
  var _error$data;

  return (error === null || error === void 0 ? void 0 : (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.message) || 'An unexpected error happened.';
};

function AdminListOrgsPages() {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex);
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(navIndex, 'global-orgs');
  const [state, fetchOrgs] = (0,react_use_lib_useAsyncFn__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => await getOrgs(), []);
  const canCreateOrg = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.OrgsCreate);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchOrgs();
  }, [fetchOrgs]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "page-action-bar",
          children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            icon: "plus",
            href: "org/new",
            disabled: !canCreateOrg,
            children: "New org"
          })]
        }), state.error && getErrorMessage(state.error), state.loading && 'Fetching organizations', state.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AdminOrgsTable__WEBPACK_IMPORTED_MODULE_8__.AdminOrgsTable, {
          orgs: state.value,
          onDelete: orgId => {
            deleteOrg(orgId).then(() => fetchOrgs());
          }
        })]
      })
    })
  });
}

/***/ }),

/***/ "./public/app/features/admin/AdminOrgsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminOrgsTable": () => (/* binding */ AdminOrgsTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _br, _small;







function AdminOrgsTable({
  orgs,
  onDelete
}) {
  const canDeleteOrgs = app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.OrgsDelete);
  const [deleteOrg, setDeleteOrg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
    className: "filter-table form-inline filter-table--hover",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "ID"
        })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          children: "Name"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", {
          style: {
            width: '1%'
          }
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
      children: orgs.map(org => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "link-td",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: `admin/orgs/edit/${org.id}`,
            children: org.id
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "link-td",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
            href: `admin/orgs/edit/${org.id}`,
            children: org.name
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "text-right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            variant: "destructive",
            size: "sm",
            icon: "times",
            onClick: () => setDeleteOrg(org),
            "aria-label": "Delete org",
            disabled: !canDeleteOrgs
          })
        })]
      }, `${org.id}-${org.name}`))
    }), deleteOrg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
      isOpen: true,
      icon: "trash-alt",
      title: "Delete",
      body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: ["Are you sure you want to delete '", deleteOrg.name, "'?", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {})), " ", _small || (_small = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
          children: "All dashboards for this organization will be removed!"
        }))]
      }),
      confirmText: "Delete",
      onDismiss: () => setDeleteOrg(undefined),
      onConfirm: () => {
        onDelete(deleteOrg.id);
        setDeleteOrg(undefined);
      }
    })]
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxZQUFZLENBQUNNLFNBQUQsQ0FBWjtBQUNEO0FBZkgsTUEvQko7QUFBQSxJQURGO0FBb0REIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vQWRtaW5MaXN0T3Jnc1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0FkbWluT3Jnc1RhYmxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgdXNlQXN5bmNGbiBmcm9tICdyZWFjdC11c2UvbGliL3VzZUFzeW5jRm4nO1xuXG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBMaW5rQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmltcG9ydCB7IEFkbWluT3Jnc1RhYmxlIH0gZnJvbSAnLi9BZG1pbk9yZ3NUYWJsZSc7XG5cbmNvbnN0IGRlbGV0ZU9yZyA9IGFzeW5jIChvcmdJZDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKCcvYXBpL29yZ3MvJyArIG9yZ0lkKTtcbn07XG5cbmNvbnN0IGdldE9yZ3MgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL29yZ3MnKTtcbn07XG5cbmNvbnN0IGdldEVycm9yTWVzc2FnZSA9IChlcnJvcjogYW55KSA9PiB7XG4gIHJldHVybiBlcnJvcj8uZGF0YT8ubWVzc2FnZSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBoYXBwZW5lZC4nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW5MaXN0T3Jnc1BhZ2VzKCkge1xuICBjb25zdCBuYXZJbmRleCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpO1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKG5hdkluZGV4LCAnZ2xvYmFsLW9yZ3MnKTtcbiAgY29uc3QgW3N0YXRlLCBmZXRjaE9yZ3NdID0gdXNlQXN5bmNGbihhc3luYyAoKSA9PiBhd2FpdCBnZXRPcmdzKCksIFtdKTtcbiAgY29uc3QgY2FuQ3JlYXRlT3JnID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3Jnc0NyZWF0ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaE9yZ3MoKTtcbiAgfSwgW2ZldGNoT3Jnc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhcl9fc3BhY2VyXCIgLz5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGljb249XCJwbHVzXCIgaHJlZj1cIm9yZy9uZXdcIiBkaXNhYmxlZD17IWNhbkNyZWF0ZU9yZ30+XG4gICAgICAgICAgICAgIE5ldyBvcmdcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c3RhdGUuZXJyb3IgJiYgZ2V0RXJyb3JNZXNzYWdlKHN0YXRlLmVycm9yKX1cbiAgICAgICAgICB7c3RhdGUubG9hZGluZyAmJiAnRmV0Y2hpbmcgb3JnYW5pemF0aW9ucyd9XG4gICAgICAgICAge3N0YXRlLnZhbHVlICYmIChcbiAgICAgICAgICAgIDxBZG1pbk9yZ3NUYWJsZVxuICAgICAgICAgICAgICBvcmdzPXtzdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25EZWxldGU9eyhvcmdJZCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZU9yZyhvcmdJZCkudGhlbigoKSA9PiBmZXRjaE9yZ3MoKSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBPcmdhbml6YXRpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvcmdzOiBPcmdhbml6YXRpb25bXTtcbiAgb25EZWxldGU6IChvcmdJZDogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQWRtaW5PcmdzVGFibGUoeyBvcmdzLCBvbkRlbGV0ZSB9OiBQcm9wcykge1xuICBjb25zdCBjYW5EZWxldGVPcmdzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3Jnc0RlbGV0ZSk7XG5cbiAgY29uc3QgW2RlbGV0ZU9yZywgc2V0RGVsZXRlT3JnXSA9IHVzZVN0YXRlPE9yZ2FuaXphdGlvbj4oKTtcbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lIGZpbHRlci10YWJsZS0taG92ZXJcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzElJyB9fT48L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge29yZ3MubWFwKChvcmcpID0+IChcbiAgICAgICAgICA8dHIga2V5PXtgJHtvcmcuaWR9LSR7b3JnLm5hbWV9YH0+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGluay10ZFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtgYWRtaW4vb3Jncy9lZGl0LyR7b3JnLmlkfWB9PntvcmcuaWR9PC9hPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2BhZG1pbi9vcmdzL2VkaXQvJHtvcmcuaWR9YH0+e29yZy5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIGljb249XCJ0aW1lc1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGVsZXRlT3JnKG9yZyl9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBvcmdcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2FuRGVsZXRlT3Jnc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9XG4gICAgICA8L3Rib2R5PlxuICAgICAge2RlbGV0ZU9yZyAmJiAoXG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBpc09wZW5cbiAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXG4gICAgICAgICAgYm9keT17XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICZhcG9zO3tkZWxldGVPcmcubmFtZX0mYXBvczs/XG4gICAgICAgICAgICAgIDxiciAvPiA8c21hbGw+QWxsIGRhc2hib2FyZHMgZm9yIHRoaXMgb3JnYW5pemF0aW9uIHdpbGwgYmUgcmVtb3ZlZCE8L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbmZpcm1UZXh0PVwiRGVsZXRlXCJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldERlbGV0ZU9yZyh1bmRlZmluZWQpfVxuICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICAgICAgb25EZWxldGUoZGVsZXRlT3JnLmlkKTtcbiAgICAgICAgICAgIHNldERlbGV0ZU9yZyh1bmRlZmluZWQpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvdGFibGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZUFzeW5jRm4iLCJnZXRCYWNrZW5kU3J2IiwiTGlua0J1dHRvbiIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsImNvbnRleHRTcnYiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiQWRtaW5PcmdzVGFibGUiLCJkZWxldGVPcmciLCJvcmdJZCIsImRlbGV0ZSIsImdldE9yZ3MiLCJnZXQiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsImRhdGEiLCJtZXNzYWdlIiwiQWRtaW5MaXN0T3Jnc1BhZ2VzIiwibmF2SW5kZXgiLCJzdGF0ZSIsIm5hdk1vZGVsIiwiZmV0Y2hPcmdzIiwiY2FuQ3JlYXRlT3JnIiwiaGFzUGVybWlzc2lvbiIsIk9yZ3NDcmVhdGUiLCJsb2FkaW5nIiwidmFsdWUiLCJ0aGVuIiwidXNlU3RhdGUiLCJCdXR0b24iLCJDb25maXJtTW9kYWwiLCJvcmdzIiwib25EZWxldGUiLCJjYW5EZWxldGVPcmdzIiwiT3Jnc0RlbGV0ZSIsInNldERlbGV0ZU9yZyIsIndpZHRoIiwibWFwIiwib3JnIiwiaWQiLCJuYW1lIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==