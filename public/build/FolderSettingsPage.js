"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderSettingsPage"],{

/***/ "./public/app/features/folders/FolderSettingsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderSettingsPage": () => (/* binding */ FolderSettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/folders/state/reducers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _label;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Input
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;










const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, `folder-settings-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_8__.getLoadingNav)(2)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_7__.getFolderByUid,
  saveFolder: _state_actions__WEBPACK_IMPORTED_MODULE_7__.saveFolder,
  setFolderTitle: _state_reducers__WEBPACK_IMPORTED_MODULE_9__.setFolderTitle,
  deleteFolder: _state_actions__WEBPACK_IMPORTED_MODULE_7__.deleteFolder
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class FolderSettingsPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onTitleChange", evt => {
      this.props.setFolderTitle(evt.target.value);
    });

    _defineProperty(this, "onSave", async evt => {
      evt.preventDefault();
      evt.stopPropagation();
      this.setState({
        isLoading: true
      });
      await this.props.saveFolder(this.props.folder);
      this.setState({
        isLoading: false
      });
    });

    _defineProperty(this, "onDelete", evt => {
      evt.stopPropagation();
      evt.preventDefault();
      const confirmationText = `Do you want to delete this folder and all its dashboards and alerts?`;
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_6__.ShowConfirmModalEvent({
        title: 'Delete',
        text: confirmationText,
        icon: 'trash-alt',
        yesText: 'Delete',
        onConfirm: () => {
          this.props.deleteFolder(this.props.folder.uid);
        }
      }));
    });

    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.props.getFolderByUid(this.props.folderUid);
  }

  render() {
    const {
      navModel,
      folder
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        isLoading: this.state.isLoading,
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
          className: "page-sub-heading",
          children: "Folder settings"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "section gf-form-group",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
            name: "folderSettingsForm",
            onSubmit: this.onSave,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "gf-form",
              children: [_label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                className: "gf-form-label width-7",
                children: "Name"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Input, {
                type: "text",
                className: "gf-form-input width-30",
                value: folder.title,
                onChange: this.onTitleChange
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "gf-form-button-row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                disabled: !folder.canSave || !folder.hasChanged,
                children: "Save"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                variant: "destructive",
                onClick: this.onDelete,
                disabled: !folder.canDelete,
                children: "Delete"
              })]
            })]
          })
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderSettingsPage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBUSxFQUFFSSxRQUFoQjtBQUFBLDZCQUNFLHlEQUFDLDhFQUFEO0FBQWUsaUJBQVMsRUFBRSxLQUFLTCxLQUFMLENBQVdtQixTQUFyQztBQUFBLDRDQUNFO0FBQUksbUJBQVMsRUFBQyxrQkFBZDtBQUFBO0FBQUEsVUFERixnQkFHRTtBQUFLLG1CQUFTLEVBQUMsdUJBQWY7QUFBQSxpQ0FDRTtBQUFNLGdCQUFJLEVBQUMsb0JBQVg7QUFBZ0Msb0JBQVEsRUFBRSxLQUFLVSxNQUEvQztBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxTQUFmO0FBQUEsMERBQ0U7QUFBTyx5QkFBUyxFQUFDLHVCQUFqQjtBQUFBO0FBQUEsZ0JBREYsZ0JBRUUsd0RBQUMsS0FBRDtBQUNFLG9CQUFJLEVBQUMsTUFEUDtBQUVFLHlCQUFTLEVBQUMsd0JBRlo7QUFHRSxxQkFBSyxFQUFFckIsTUFBTSxDQUFDYyxLQUhoQjtBQUlFLHdCQUFRLEVBQUUsS0FBS1E7QUFKakIsZ0JBRkY7QUFBQSxjQURGLGVBVUU7QUFBSyx1QkFBUyxFQUFDLG9CQUFmO0FBQUEsc0NBQ0Usd0RBQUMsK0NBQUQ7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBc0Isd0JBQVEsRUFBRSxDQUFDdEIsTUFBTSxDQUFDdUIsT0FBUixJQUFtQixDQUFDdkIsTUFBTSxDQUFDd0IsVUFBM0Q7QUFBQTtBQUFBLGdCQURGLGVBSUUsd0RBQUMsK0NBQUQ7QUFBUSx1QkFBTyxFQUFDLGFBQWhCO0FBQThCLHVCQUFPLEVBQUUsS0FBS0MsUUFBNUM7QUFBc0Qsd0JBQVEsRUFBRSxDQUFDekIsTUFBTSxDQUFDMEIsU0FBeEU7QUFBQTtBQUFBLGdCQUpGO0FBQUEsY0FWRjtBQUFBO0FBREYsVUFIRjtBQUFBO0FBREYsTUFERjtBQTZCRDs7QUExRWlFO0FBNkVwRSxpRUFBZXhCLFNBQVMsQ0FBQ0Msa0JBQUQsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9mb2xkZXJzL0ZvbGRlclNldHRpbmdzUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgQnV0dG9uLCBMZWdhY3lGb3JtcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmNvbnN0IHsgSW5wdXQgfSA9IExlZ2FjeUZvcm1zO1xuaW1wb3J0IGFwcEV2ZW50cyBmcm9tICdhcHAvY29yZS9hcHBfZXZlbnRzJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvZXZlbnRzJztcblxuaW1wb3J0IHsgZGVsZXRlRm9sZGVyLCBnZXRGb2xkZXJCeVVpZCwgc2F2ZUZvbGRlciB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRMb2FkaW5nTmF2IH0gZnJvbSAnLi9zdGF0ZS9uYXZNb2RlbCc7XG5pbXBvcnQgeyBzZXRGb2xkZXJUaXRsZSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE93blByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyB1aWQ6IHN0cmluZyB9PiB7fVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUsIHByb3BzOiBPd25Qcm9wcykgPT4ge1xuICBjb25zdCB1aWQgPSBwcm9wcy5tYXRjaC5wYXJhbXMudWlkO1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgYGZvbGRlci1zZXR0aW5ncy0ke3VpZH1gLCBnZXRMb2FkaW5nTmF2KDIpKSxcbiAgICBmb2xkZXJVaWQ6IHVpZCxcbiAgICBmb2xkZXI6IHN0YXRlLmZvbGRlcixcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZ2V0Rm9sZGVyQnlVaWQsXG4gIHNhdmVGb2xkZXIsXG4gIHNldEZvbGRlclRpdGxlLFxuICBkZWxldGVGb2xkZXIsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRm9sZGVyU2V0dGluZ3NQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmdldEZvbGRlckJ5VWlkKHRoaXMucHJvcHMuZm9sZGVyVWlkKTtcbiAgfVxuXG4gIG9uVGl0bGVDaGFuZ2UgPSAoZXZ0OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0Rm9sZGVyVGl0bGUoZXZ0LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgb25TYXZlID0gYXN5bmMgKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcbiAgICBhd2FpdCB0aGlzLnByb3BzLnNhdmVGb2xkZXIodGhpcy5wcm9wcy5mb2xkZXIpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG4gIG9uRGVsZXRlID0gKGV2dDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBjb25maXJtYXRpb25UZXh0ID0gYERvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGZvbGRlciBhbmQgYWxsIGl0cyBkYXNoYm9hcmRzIGFuZCBhbGVydHM/YDtcbiAgICBhcHBFdmVudHMucHVibGlzaChcbiAgICAgIG5ldyBTaG93Q29uZmlybU1vZGFsRXZlbnQoe1xuICAgICAgICB0aXRsZTogJ0RlbGV0ZScsXG4gICAgICAgIHRleHQ6IGNvbmZpcm1hdGlvblRleHQsXG4gICAgICAgIGljb246ICd0cmFzaC1hbHQnLFxuICAgICAgICB5ZXNUZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgb25Db25maXJtOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVGb2xkZXIodGhpcy5wcm9wcy5mb2xkZXIudWlkKTtcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZNb2RlbCwgZm9sZGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17dGhpcy5zdGF0ZS5pc0xvYWRpbmd9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+Rm9sZGVyIHNldHRpbmdzPC9oMz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8Zm9ybSBuYW1lPVwiZm9sZGVyU2V0dGluZ3NGb3JtXCIgb25TdWJtaXQ9e3RoaXMub25TYXZlfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgd2lkdGgtN1wiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbnB1dCB3aWR0aC0zMFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9sZGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaXRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWZvbGRlci5jYW5TYXZlIHx8ICFmb2xkZXIuaGFzQ2hhbmdlZH0+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBvbkNsaWNrPXt0aGlzLm9uRGVsZXRlfSBkaXNhYmxlZD17IWZvbGRlci5jYW5EZWxldGV9PlxuICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoRm9sZGVyU2V0dGluZ3NQYWdlKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwiQnV0dG9uIiwiTGVnYWN5Rm9ybXMiLCJJbnB1dCIsImFwcEV2ZW50cyIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsIlNob3dDb25maXJtTW9kYWxFdmVudCIsImRlbGV0ZUZvbGRlciIsImdldEZvbGRlckJ5VWlkIiwic2F2ZUZvbGRlciIsImdldExvYWRpbmdOYXYiLCJzZXRGb2xkZXJUaXRsZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvcHMiLCJ1aWQiLCJtYXRjaCIsInBhcmFtcyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJmb2xkZXJVaWQiLCJmb2xkZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJGb2xkZXJTZXR0aW5nc1BhZ2UiLCJjb25zdHJ1Y3RvciIsImV2dCIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRTdGF0ZSIsImlzTG9hZGluZyIsImNvbmZpcm1hdGlvblRleHQiLCJwdWJsaXNoIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsInllc1RleHQiLCJvbkNvbmZpcm0iLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsIm9uU2F2ZSIsIm9uVGl0bGVDaGFuZ2UiLCJjYW5TYXZlIiwiaGFzQ2hhbmdlZCIsIm9uRGVsZXRlIiwiY2FuRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==