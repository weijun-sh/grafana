"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2929],{

 "./public/app/features/datasources/DashboardsTable.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;






const DashboardsTable = _ref => {
  let {
    dashboards,
    onImport,
    onRemove
  } = _ref;

  function buttonText(dashboard) {
    return dashboard.revision !== dashboard.importedRevision ? 'Update' : 'Re-import';
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
    className: "filter-table",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
      children: dashboards.map((dashboard, index) => {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [_td || (_td = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            className: "width-1",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              name: "apps"
            })
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: dashboard.imported ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: dashboard.importedUrl,
              children: dashboard.title
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: dashboard.title
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("td", {
            style: {
              textAlign: 'right'
            },
            children: [!dashboard.imported ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, false),
              children: "Import"
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, true),
              children: buttonText(dashboard)
            }), dashboard.imported && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              icon: "trash-alt",
              variant: "destructive",
              size: "sm",
              onClick: () => onRemove(dashboard)
            })]
          })]
        }, `${dashboard.dashboardId}-${index}`);
      })
    })
  });
};

 const __WEBPACK_DEFAULT_EXPORT__ = (DashboardsTable);

 }),

 "./public/app/features/datasources/DataSourceDashboards.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "DataSourceDashboards": () => ( DataSourceDashboards),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/state/actions.ts");
 var _plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
 var _DashboardsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/datasources/DashboardsTable.tsx");
 var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
 var _state_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function mapStateToProps(state, props) {
  const dataSourceId = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__ .h)(state.navIndex, `datasource-dashboards-${dataSourceId}`),
    dashboards: state.plugins.dashboards,
    dataSource: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_9__ .f6)(state.dataSources, dataSourceId),
    isLoading: state.plugins.isLoadingPluginDashboards,
    dataSourceId
  };
}

const mapDispatchToProps = {
  importDashboard: _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_3__ .$j,
  loadDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_6__ .gv,
  loadPluginDashboards: _plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_4__ .m3,
  removeDashboard: _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_3__ .fG
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class DataSourceDashboards extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onImport", (dashboard, overwrite) => {
      const {
        dataSource,
        importDashboard
      } = this.props;
      const data = {
        pluginId: dashboard.pluginId,
        path: dashboard.path,
        overwrite,
        inputs: []
      };

      if (dataSource) {
        data.inputs.push({
          name: '*',
          type: 'datasource',
          pluginId: dataSource.type,
          value: dataSource.name
        });
      }

      importDashboard(data, dashboard.title);
    });

    _defineProperty(this, "onRemove", dashboard => {
      this.props.removeDashboard(dashboard.uid);
    });
  }

  async componentDidMount() {
    const {
      loadDataSource,
      dataSourceId
    } = this.props;
    await loadDataSource(dataSourceId);
    this.props.loadPluginDashboards();
  }

  render() {
    const {
      dashboards,
      navModel,
      isLoading
    } = this.props;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ .Z, {
      navModel: navModel,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ .Z.Contents, {
        isLoading: isLoading,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_DashboardsTable__WEBPACK_IMPORTED_MODULE_5__ .Z, {
          dashboards: dashboards,
          onImport: (dashboard, overwrite) => this.onImport(dashboard, overwrite),
          onRemove: dashboard => this.onRemove(dashboard)
        })
      })
    });
  }

}
 const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourceDashboards));

 })

}]);