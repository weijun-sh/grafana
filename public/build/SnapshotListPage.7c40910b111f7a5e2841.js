"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5295],{

 "./public/app/features/manage-dashboards/SnapshotListPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "SnapshotListPage": () => ( SnapshotListPage),
  "default": () => ( manage_dashboards_SnapshotListPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _th, _th2, _span;







function getSnapshots() {
  return (0,src.getBackendSrv)().get('/api/dashboard/snapshots').then(result => {
    return result.map(snapshot => Object.assign({}, snapshot, {
      url: `/dashboard/snapshot/${snapshot.key}`
    }));
  });
}
const SnapshotListTable = () => {
  const [snapshots, setSnapshots] = (0,react.useState)([]);
  const [removeSnapshot, setRemoveSnapshot] = (0,react.useState)();
  const currentPath = src.locationService.getLocation().pathname;
  const fullUrl = window.location.href;
  const baseUrl = fullUrl.substring(0, fullUrl.indexOf(currentPath));
  (0,useAsync.Z)(async () => {
    const response = await getSnapshots();
    setSnapshots(response);
  }, [setSnapshots]);
  const doRemoveSnapshot = (0,react.useCallback)(async snapshot => {
    const filteredSnapshots = snapshots.filter(ss => ss.key !== snapshot.key);
    setSnapshots(filteredSnapshots);
    await (0,src.getBackendSrv)().delete(`/api/snapshots/${snapshot.key}`).catch(() => {
      setSnapshots(snapshots);
    });
  }, [snapshots]);
  return (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsxs)("table", {
      className: "filter-table",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [_th || (_th = (0,jsx_runtime.jsx)("th", {
            children: (0,jsx_runtime.jsx)("strong", {
              children: "Name"
            })
          })), _th2 || (_th2 = (0,jsx_runtime.jsx)("th", {
            children: (0,jsx_runtime.jsx)("strong", {
              children: "Snapshot url"
            })
          })), (0,jsx_runtime.jsx)("th", {
            style: {
              width: '70px'
            }
          }), (0,jsx_runtime.jsx)("th", {
            style: {
              width: '30px'
            }
          }), (0,jsx_runtime.jsx)("th", {
            style: {
              width: '25px'
            }
          })]
        })
      }), (0,jsx_runtime.jsx)("tbody", {
        children: snapshots.map(snapshot => {
          const url = snapshot.externalUrl || snapshot.url;
          const fullUrl = snapshot.externalUrl || `${baseUrl}${snapshot.url}`;
          return (0,jsx_runtime.jsxs)("tr", {
            children: [(0,jsx_runtime.jsx)("td", {
              children: (0,jsx_runtime.jsx)("a", {
                href: url,
                children: snapshot.name
              })
            }), (0,jsx_runtime.jsx)("td", {
              children: (0,jsx_runtime.jsx)("a", {
                href: url,
                children: fullUrl
              })
            }), (0,jsx_runtime.jsx)("td", {
              children: snapshot.external && (_span || (_span = (0,jsx_runtime.jsx)("span", {
                className: "query-keyword",
                children: "External"
              })))
            }), (0,jsx_runtime.jsx)("td", {
              className: "text-center",
              children: (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
                href: url,
                variant: "secondary",
                size: "sm",
                icon: "eye",
                children: "View"
              })
            }), (0,jsx_runtime.jsx)("td", {
              className: "text-right",
              children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                variant: "destructive",
                size: "sm",
                icon: "times",
                onClick: () => setRemoveSnapshot(snapshot)
              })
            })]
          }, snapshot.key);
        })
      })]
    }), (0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
      isOpen: !!removeSnapshot,
      icon: "trash-alt",
      title: "Delete",
      body: `Are you sure you want to delete '${removeSnapshot === null || removeSnapshot === void 0 ? void 0 : removeSnapshot.name}'?`,
      confirmText: "Delete",
      onDismiss: () => setRemoveSnapshot(undefined),
      onConfirm: () => {
        doRemoveSnapshot(removeSnapshot);
        setRemoveSnapshot(undefined);
      }
    })]
  });
};
;
var _Page$Contents;







const SnapshotListPage = _ref => {
  let {
    navModel,
    location
  } = _ref;
  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = (0,jsx_runtime.jsx)(Page.Z.Contents, {
      children: (0,jsx_runtime.jsx)(SnapshotListTable, {})
    }))
  });
};

const mapStateToProps = state => ({
  navModel: (0,navModel.h)(state.navIndex, 'snapshots')
});

 const manage_dashboards_SnapshotListPage = ((0,es.connect)(mapStateToProps)(SnapshotListPage));

 })

}]);