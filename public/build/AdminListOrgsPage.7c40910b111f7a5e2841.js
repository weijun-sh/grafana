"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3798],{

/***/ "./public/app/features/admin/AdminListOrgsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminListOrgsPages)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsyncFn.js
var useAsyncFn = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsyncFn.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var selectors_navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/core/core.ts
var core = __webpack_require__("./public/app/core/core.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/admin/AdminOrgsTable.tsx
var _th, _th2, _br, _small;







function AdminOrgsTable(_ref) {
  let {
    orgs,
    onDelete
  } = _ref;
  const canDeleteOrgs = core/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.OrgsDelete */.bW.OrgsDelete);
  const [deleteOrg, setDeleteOrg] = (0,react.useState)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
    className: "filter-table form-inline filter-table--hover",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [_th || (_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
          children: "ID"
        })), _th2 || (_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
          children: "Name"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
          style: {
            width: '1%'
          }
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
      children: orgs.map(org => /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          className: "link-td",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: `admin/orgs/edit/${org.id}`,
            children: org.id
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          className: "link-td",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: `admin/orgs/edit/${org.id}`,
            children: org.name
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          className: "text-right",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            variant: "destructive",
            size: "sm",
            icon: "times",
            onClick: () => setDeleteOrg(org),
            "aria-label": "Delete org",
            disabled: !canDeleteOrgs
          })
        })]
      }, `${org.id}-${org.name}`))
    }), deleteOrg && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
      isOpen: true,
      icon: "trash-alt",
      title: "Delete",
      body: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: ["Are you sure you want to delete '", deleteOrg.name, "'?", _br || (_br = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), " ", _small || (_small = /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
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
;// CONCATENATED MODULE: ./public/app/features/admin/AdminListOrgsPage.tsx
var _div;















const deleteOrg = async orgId => {
  return await (0,src.getBackendSrv)().delete('/api/orgs/' + orgId);
};

const getOrgs = async () => {
  return await (0,src.getBackendSrv)().get('/api/orgs');
};

const getErrorMessage = error => {
  var _error$data;

  return (error === null || error === void 0 ? void 0 : (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.message) || 'An unexpected error happened.';
};

function AdminListOrgsPages() {
  const navIndex = (0,es.useSelector)(state => state.navIndex);
  const navModel = (0,selectors_navModel/* getNavModel */.h)(navIndex, 'global-orgs');
  const [state, fetchOrgs] = (0,useAsyncFn["default"])(async () => await getOrgs(), []);
  const canCreateOrg = context_srv/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.OrgsCreate */.bW.OrgsCreate);
  (0,react.useEffect)(() => {
    fetchOrgs();
  }, [fetchOrgs]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "page-action-bar",
          children: [_div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "page-action-bar__spacer"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            icon: "plus",
            href: "org/new",
            disabled: !canCreateOrg,
            children: "New org"
          })]
        }), state.error && getErrorMessage(state.error), state.loading && 'Fetching organizations', state.value && /*#__PURE__*/(0,jsx_runtime.jsx)(AdminOrgsTable, {
          orgs: state.value,
          onDelete: orgId => {
            deleteOrg(orgId).then(() => fetchOrgs());
          }
        })]
      })
    })
  });
}

/***/ })

}]);