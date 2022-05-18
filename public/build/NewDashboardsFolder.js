"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewDashboardsFolder"],{

/***/ "./public/app/features/folders/components/NewDashboardsFolder.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewDashboardsFolder": () => (/* binding */ NewDashboardsFolder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _manage_dashboards_services_ValidationSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/manage-dashboards/services/ValidationSrv.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Button;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__.getNavModel)(state.navIndex, 'manage-dashboards')
});

const mapDispatchToProps = {
  createNewFolder: _state_actions__WEBPACK_IMPORTED_MODULE_6__.createNewFolder
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const initialFormModel = {
  folderName: ''
};
class NewDashboardsFolder extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", formData => {
      this.props.createNewFolder(formData.folderName);
    });

    _defineProperty(this, "validateFolderName", folderName => {
      return _manage_dashboards_services_ValidationSrv__WEBPACK_IMPORTED_MODULE_5__.validationSrv.validateNewFolderName(folderName).then(() => {
        return true;
      }).catch(e => {
        return e.message;
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: this.props.navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h3", {
          children: "New dashboard folder"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
          defaultValues: initialFormModel,
          onSubmit: this.onSubmit,
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Folder name",
              invalid: !!errors.folderName,
              error: errors.folderName && errors.folderName.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "folder-name-input"
              }, register('folderName', {
                required: 'Folder name is required.',
                validate: async v => await this.validateFolderName(v)
              })))
            }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              children: "Create"
            }))]
          })
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewDashboardsFolder));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3RGFzaGJvYXJkc0ZvbGRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQUVBLE1BQU1XLGVBQWUsR0FBSUMsS0FBRCxLQUF3QjtBQUM5Q0MsRUFBQUEsUUFBUSxFQUFFTCx3RUFBVyxDQUFDSSxLQUFLLENBQUNFLFFBQVAsRUFBaUIsbUJBQWpCO0FBRHlCLENBQXhCLENBQXhCOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHO0FBQ3pCTCxFQUFBQSxlQUFlQSw2REFBQUE7QUFEVSxDQUEzQjtBQUlBLE1BQU1NLFNBQVMsR0FBR2Qsb0RBQU8sQ0FBQ1MsZUFBRCxFQUFrQkksa0JBQWxCLENBQXpCO0FBUUEsTUFBTUUsZ0JBQTJCLEdBQUc7QUFBRUMsRUFBQUEsVUFBVSxFQUFFO0FBQWQsQ0FBcEM7QUFJTyxNQUFNQyxtQkFBTixTQUFrQ2xCLGdEQUFsQyxDQUF1RDtBQUFBO0FBQUE7O0FBQUEsc0NBQ2hEbUIsUUFBRCxJQUF5QjtBQUNsQyxXQUFLQyxLQUFMLENBQVdYLGVBQVgsQ0FBMkJVLFFBQVEsQ0FBQ0YsVUFBcEM7QUFDRCxLQUgyRDs7QUFBQSxnREFLdENBLFVBQUQsSUFBd0I7QUFDM0MsYUFBT1QsMEdBQUEsQ0FDa0JTLFVBRGxCLEVBRUpLLElBRkksQ0FFQyxNQUFNO0FBQ1YsZUFBTyxJQUFQO0FBQ0QsT0FKSSxFQUtKQyxLQUxJLENBS0dDLENBQUQsSUFBTztBQUNaLGVBQU9BLENBQUMsQ0FBQ0MsT0FBVDtBQUNELE9BUEksQ0FBUDtBQVFELEtBZDJEO0FBQUE7O0FBZ0I1REMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsdURBQUMscUVBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBS04sS0FBTCxDQUFXUixRQUEzQjtBQUFBLDZCQUNFLHdEQUFDLDhFQUFEO0FBQUEsNENBQ0U7QUFBQTtBQUFBLFVBREYsZ0JBRUUsdURBQUMsNkNBQUQ7QUFBTSx1QkFBYSxFQUFFSSxnQkFBckI7QUFBdUMsa0JBQVEsRUFBRSxLQUFLVyxRQUF0RDtBQUFBLG9CQUNHLENBQUM7QUFBRUMsWUFBQUEsUUFBRjtBQUFZQyxZQUFBQTtBQUFaLFdBQUQsa0JBQ0M7QUFBQSxvQ0FDRSx1REFBQyw4Q0FBRDtBQUNFLG1CQUFLLEVBQUMsYUFEUjtBQUVFLHFCQUFPLEVBQUUsQ0FBQyxDQUFDQSxNQUFNLENBQUNaLFVBRnBCO0FBR0UsbUJBQUssRUFBRVksTUFBTSxDQUFDWixVQUFQLElBQXFCWSxNQUFNLENBQUNaLFVBQVAsQ0FBa0JRLE9BSGhEO0FBQUEscUNBS0UsdURBQUMsOENBQUQ7QUFDRSxrQkFBRSxFQUFDO0FBREwsaUJBRU1HLFFBQVEsQ0FBQyxZQUFELEVBQWU7QUFDekJFLGdCQUFBQSxRQUFRLEVBQUUsMEJBRGU7QUFFekJDLGdCQUFBQSxRQUFRLEVBQUUsTUFBT0MsQ0FBUCxJQUFhLE1BQU0sS0FBS0Msa0JBQUwsQ0FBd0JELENBQXhCO0FBRkosZUFBZixDQUZkO0FBTEYsY0FERixxQ0FjRSx1REFBQywrQ0FBRDtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUEsY0FkRjtBQUFBO0FBRkosVUFGRjtBQUFBO0FBREYsTUFERjtBQTJCRDs7QUE1QzJEO0FBK0M5RCxpRUFBZWpCLFNBQVMsQ0FBQ0csbUJBQUQsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9mb2xkZXJzL2NvbXBvbmVudHMvTmV3RGFzaGJvYXJkc0ZvbGRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgRm9ybSwgRmllbGQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgdmFsaWRhdGlvblNydiB9IGZyb20gJy4uLy4uL21hbmFnZS1kYXNoYm9hcmRzL3NlcnZpY2VzL1ZhbGlkYXRpb25TcnYnO1xuaW1wb3J0IHsgY3JlYXRlTmV3Rm9sZGVyIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnbWFuYWdlLWRhc2hib2FyZHMnKSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGNyZWF0ZU5ld0ZvbGRlcixcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge31cblxuaW50ZXJmYWNlIEZvcm1Nb2RlbCB7XG4gIGZvbGRlck5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgaW5pdGlhbEZvcm1Nb2RlbDogRm9ybU1vZGVsID0geyBmb2xkZXJOYW1lOiAnJyB9O1xuXG50eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNsYXNzIE5ld0Rhc2hib2FyZHNGb2xkZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIG9uU3VibWl0ID0gKGZvcm1EYXRhOiBGb3JtTW9kZWwpID0+IHtcbiAgICB0aGlzLnByb3BzLmNyZWF0ZU5ld0ZvbGRlcihmb3JtRGF0YS5mb2xkZXJOYW1lKTtcbiAgfTtcblxuICB2YWxpZGF0ZUZvbGRlck5hbWUgPSAoZm9sZGVyTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRpb25TcnZcbiAgICAgIC52YWxpZGF0ZU5ld0ZvbGRlck5hbWUoZm9sZGVyTmFtZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIHJldHVybiBlLm1lc3NhZ2U7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXt0aGlzLnByb3BzLm5hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgICAgPGgzPk5ldyBkYXNoYm9hcmQgZm9sZGVyPC9oMz5cbiAgICAgICAgICA8Rm9ybSBkZWZhdWx0VmFsdWVzPXtpbml0aWFsRm9ybU1vZGVsfSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkZvbGRlciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmZvbGRlck5hbWV9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmZvbGRlck5hbWUgJiYgZXJyb3JzLmZvbGRlck5hbWUubWVzc2FnZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmb2xkZXItbmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZm9sZGVyTmFtZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0ZvbGRlciBuYW1lIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IGFzeW5jICh2KSA9PiBhd2FpdCB0aGlzLnZhbGlkYXRlRm9sZGVyTmFtZSh2KSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihOZXdEYXNoYm9hcmRzRm9sZGVyKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwiQnV0dG9uIiwiSW5wdXQiLCJGb3JtIiwiRmllbGQiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJ2YWxpZGF0aW9uU3J2IiwiY3JlYXRlTmV3Rm9sZGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiaW5pdGlhbEZvcm1Nb2RlbCIsImZvbGRlck5hbWUiLCJOZXdEYXNoYm9hcmRzRm9sZGVyIiwiZm9ybURhdGEiLCJwcm9wcyIsInZhbGlkYXRlTmV3Rm9sZGVyTmFtZSIsInRoZW4iLCJjYXRjaCIsImUiLCJtZXNzYWdlIiwicmVuZGVyIiwib25TdWJtaXQiLCJyZWdpc3RlciIsImVycm9ycyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJ2IiwidmFsaWRhdGVGb2xkZXJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==