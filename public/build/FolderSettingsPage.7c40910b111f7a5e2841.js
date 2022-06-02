"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4827],{

 "./public/app/features/folders/FolderSettingsPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "FolderSettingsPage": () => ( FolderSettingsPage),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/app_events.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var _types_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/events.ts");
 var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
 var _state_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
 var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/folders/state/reducers.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _label;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const {
  Input
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;










const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_10__ .h)(state.navIndex, `folder-settings-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_7__ ._)(2)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_6__ .Pb,
  saveFolder: _state_actions__WEBPACK_IMPORTED_MODULE_6__ .OD,
  setFolderTitle: _state_reducers__WEBPACK_IMPORTED_MODULE_8__ .Ss,
  deleteFolder: _state_actions__WEBPACK_IMPORTED_MODULE_6__ .Go
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
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ .Z.publish(new _types_events__WEBPACK_IMPORTED_MODULE_5__ .VJ({
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
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z, {
      navModel: navModel,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z.Contents, {
        isLoading: this.state.isLoading,
        children: [_h || (_h = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
          className: "page-sub-heading",
          children: "Folder settings"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "section gf-form-group",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form", {
            name: "folderSettingsForm",
            onSubmit: this.onSave,
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "gf-form",
              children: [_label || (_label = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("label", {
                className: "gf-form-label width-7",
                children: "Name"
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Input, {
                type: "text",
                className: "gf-form-input width-30",
                value: folder.title,
                onChange: this.onTitleChange
              })]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "gf-form-button-row",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                disabled: !folder.canSave || !folder.hasChanged,
                children: "Save"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
 const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderSettingsPage));

 })

}]);