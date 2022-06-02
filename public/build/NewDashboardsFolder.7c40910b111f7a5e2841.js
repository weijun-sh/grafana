"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8932],{

 "./public/app/features/folders/components/NewDashboardsFolder.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "NewDashboardsFolder": () => ( NewDashboardsFolder),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var _manage_dashboards_services_ValidationSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");
 var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Button;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ .h)(state.navIndex, 'manage-dashboards')
});

const mapDispatchToProps = {
  createNewFolder: _state_actions__WEBPACK_IMPORTED_MODULE_5__ .W7
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const initialFormModel = {
  folderName: ''
};
class NewDashboardsFolder extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onSubmit", formData => {
      this.props.createNewFolder(formData.folderName);
    });

    _defineProperty(this, "validateFolderName", folderName => {
      return _manage_dashboards_services_ValidationSrv__WEBPACK_IMPORTED_MODULE_4__ .t.validateNewFolderName(folderName).then(() => {
        return true;
      }).catch(e => {
        return e.message;
      });
    });
  }

  render() {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ .Z, {
      navModel: this.props.navModel,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ .Z.Contents, {
        children: [_h || (_h = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
          children: "New dashboard folder"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
          defaultValues: initialFormModel,
          onSubmit: this.onSubmit,
          children: _ref => {
            let {
              register,
              errors
            } = _ref;
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                label: "Folder name",
                invalid: !!errors.folderName,
                error: errors.folderName && errors.folderName.message,
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                  id: "folder-name-input"
                }, register('folderName', {
                  required: 'Folder name is required.',
                  validate: async v => await this.validateFolderName(v)
                })))
              }), _Button || (_Button = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                children: "Create"
              }))]
            });
          }
        })]
      })
    });
  }

}
 const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewDashboardsFolder));

 })

}]);