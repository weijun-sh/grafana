"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8431],{

 "./public/app/features/folders/AccessControlFolderPermissions.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "AccessControlFolderPermissions": () => ( AccessControlFolderPermissions),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/AccessControl/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
 var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
 var _state_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function mapStateToProps(state, props) {
  const uid = props.match.params.uid;
  return {
    uid: uid,
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ .h)(state.navIndex, `folder-permissions-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_7__ ._)(1))
  };
}

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_6__ .Pb
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const AccessControlFolderPermissions = _ref => {
  let {
    uid,
    getFolderByUid,
    navModel
  } = _ref;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getFolderByUid(uid);
  }, [getFolderByUid, uid]);
  const canSetPermissions = app_core_core__WEBPACK_IMPORTED_MODULE_4__ .Vt.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__ .bW.FoldersPermissionsWrite);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ .Z, {
    navModel: navModel,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ .Z.Contents, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_2__ .P, {
        resource: "folders",
        resourceId: uid,
        canSetPermissions: canSetPermissions
      })
    })
  });
};
 const __WEBPACK_DEFAULT_EXPORT__ = (connector(AccessControlFolderPermissions));

 }),

 "./public/app/features/folders/FolderPermissions.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "FolderPermissions": () => ( FolderPermissions),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_components_PermissionList_AddPermission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/PermissionList/AddPermission.tsx");
 var app_core_components_PermissionList_PermissionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PermissionList/PermissionList.tsx");
 var app_core_components_PermissionList_PermissionsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/PermissionList/PermissionsInfo.tsx");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
 var _state_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _h, _Tooltip, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_11__ .h)(state.navIndex, `folder-permissions-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_9__ ._)(1)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_8__ .Pb,
  getFolderPermissions: _state_actions__WEBPACK_IMPORTED_MODULE_8__ .a,
  updateFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_8__ .v7,
  removeFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_8__ .Uk,
  addFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_8__ .pz
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class FolderPermissions extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onOpenAddPermissions", () => {
      this.setState({
        isAdding: true
      });
    });

    _defineProperty(this, "onRemoveItem", item => {
      this.props.removeFolderPermission(item);
    });

    _defineProperty(this, "onPermissionChanged", (item, level) => {
      this.props.updateFolderPermission(item, level);
    });

    _defineProperty(this, "onAddPermission", newItem => {
      return this.props.addFolderPermission(newItem);
    });

    _defineProperty(this, "onCancelAddPermission", () => {
      this.setState({
        isAdding: false
      });
    });

    this.state = {
      isAdding: false
    };
  }

  componentDidMount() {
    this.props.getFolderByUid(this.props.folderUid);
    this.props.getFolderPermissions(this.props.folderUid);
  }

  render() {
    const {
      navModel,
      folder
    } = this.props;
    const {
      isAdding
    } = this.state;

    if (folder.id === 0) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z, {
        navModel: navModel,
        children: _Page$Contents || (_Page$Contents = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z.Contents, {
          isLoading: true,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {})
        }))
      });
    }

    const folderInfo = {
      title: folder.title,
      url: folder.url,
      id: folder.id
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z, {
      navModel: navModel,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z.Contents, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "page-action-bar",
          children: [_h || (_h = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
            className: "page-sub-heading",
            children: "Folder Permissions"
          })), _Tooltip || (_Tooltip = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
            placement: "auto",
            content: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_PermissionList_PermissionsInfo__WEBPACK_IMPORTED_MODULE_7__ .Z, {}),
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              className: "icon--has-hover page-sub-heading-icon",
              name: "question-circle"
            })
          })), _div || (_div = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            className: "pull-right",
            onClick: this.onOpenAddPermissions,
            disabled: isAdding,
            children: "Add Permission"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__ .s, {
          in: isAdding,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_PermissionList_AddPermission__WEBPACK_IMPORTED_MODULE_5__ .Z, {
            onAddPermission: this.onAddPermission,
            onCancel: this.onCancelAddPermission
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_PermissionList_PermissionList__WEBPACK_IMPORTED_MODULE_6__ .Z, {
          items: folder.permissions,
          onRemoveItem: this.onRemoveItem,
          onPermissionChanged: this.onPermissionChanged,
          isFetching: false,
          folderInfo: folderInfo
        })]
      })
    });
  }

}
 const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderPermissions));

 })

}]);