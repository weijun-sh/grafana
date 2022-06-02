"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3798],{

 "./public/app/features/admin/AdminListOrgsPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( AdminListOrgsPages)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var useAsyncFn = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsyncFn.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var selectors_navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var core = __webpack_require__("./public/app/core/core.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _th, _th2, _br, _small;







function AdminOrgsTable(_ref) {
  let {
    orgs,
    onDelete
  } = _ref;
  const canDeleteOrgs = core.Vt.hasPermission(types.bW.OrgsDelete);
  const [deleteOrg, setDeleteOrg] = (0,react.useState)();
  return (0,jsx_runtime.jsxs)("table", {
    className: "filter-table form-inline filter-table--hover",
    children: [(0,jsx_runtime.jsx)("thead", {
      children: (0,jsx_runtime.jsxs)("tr", {
        children: [_th || (_th = (0,jsx_runtime.jsx)("th", {
          children: "ID"
        })), _th2 || (_th2 = (0,jsx_runtime.jsx)("th", {
          children: "Name"
        })), (0,jsx_runtime.jsx)("th", {
          style: {
            width: '1%'
          }
        })]
      })
    }), (0,jsx_runtime.jsx)("tbody", {
      children: orgs.map(org => (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("td", {
          className: "link-td",
          children: (0,jsx_runtime.jsx)("a", {
            href: `admin/orgs/edit/${org.id}`,
            children: org.id
          })
        }), (0,jsx_runtime.jsx)("td", {
          className: "link-td",
          children: (0,jsx_runtime.jsx)("a", {
            href: `admin/orgs/edit/${org.id}`,
            children: org.name
          })
        }), (0,jsx_runtime.jsx)("td", {
          className: "text-right",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            variant: "destructive",
            size: "sm",
            icon: "times",
            onClick: () => setDeleteOrg(org),
            "aria-label": "Delete org",
            disabled: !canDeleteOrgs
          })
        })]
      }, `${org.id}-${org.name}`))
    }), deleteOrg && (0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
      isOpen: true,
      icon: "trash-alt",
      title: "Delete",
      body: (0,jsx_runtime.jsxs)("div", {
        children: ["Are you sure you want to delete '", deleteOrg.name, "'?", _br || (_br = (0,jsx_runtime.jsx)("br", {})), " ", _small || (_small = (0,jsx_runtime.jsx)("small", {
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
;
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
  const navModel = (0,selectors_navModel.h)(navIndex, 'global-orgs');
  const [state, fetchOrgs] = (0,useAsyncFn["default"])(async () => await getOrgs(), []);
  const canCreateOrg = context_srv.Vt.hasPermission(types.bW.OrgsCreate);
  (0,react.useEffect)(() => {
    fetchOrgs();
  }, [fetchOrgs]);
  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: navModel,
    children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
      children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsxs)("div", {
          className: "page-action-bar",
          children: [_div || (_div = (0,jsx_runtime.jsx)("div", {
            className: "page-action-bar__spacer"
          })), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            icon: "plus",
            href: "org/new",
            disabled: !canCreateOrg,
            children: "New org"
          })]
        }), state.error && getErrorMessage(state.error), state.loading && 'Fetching organizations', state.value && (0,jsx_runtime.jsx)(AdminOrgsTable, {
          orgs: state.value,
          onDelete: orgId => {
            deleteOrg(orgId).then(() => fetchOrgs());
          }
        })]
      })
    })
  });
}

 })

}]);