"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderPermissions"],{

/***/ "./public/app/features/folders/AccessControlFolderPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessControlFolderPermissions": () => (/* binding */ AccessControlFolderPermissions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/AccessControl/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function mapStateToProps(state, props) {
  const uid = props.match.params.uid;
  return {
    uid: uid,
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, `folder-permissions-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_8__.getLoadingNav)(1))
  };
}

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_7__.getFolderByUid
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const AccessControlFolderPermissions = ({
  uid,
  getFolderByUid,
  navModel
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getFolderByUid(uid);
  }, [getFolderByUid, uid]);
  const canSetPermissions = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.FoldersPermissionsWrite);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_2__.Permissions, {
        resource: "folders",
        resourceId: uid,
        canSetPermissions: canSetPermissions
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(AccessControlFolderPermissions));

/***/ }),

/***/ "./public/app/features/folders/FolderPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderPermissions": () => (/* binding */ FolderPermissions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PermissionList_AddPermission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/PermissionList/AddPermission.tsx");
/* harmony import */ var app_core_components_PermissionList_PermissionList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PermissionList/PermissionList.tsx");
/* harmony import */ var app_core_components_PermissionList_PermissionsInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/PermissionList/PermissionsInfo.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _h, _Tooltip, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const mapStateToProps = (state, props) => {
  const uid = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__.getNavModel)(state.navIndex, `folder-permissions-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_10__.getLoadingNav)(1)),
    folderUid: uid,
    folder: state.folder
  };
};

const mapDispatchToProps = {
  getFolderByUid: _state_actions__WEBPACK_IMPORTED_MODULE_9__.getFolderByUid,
  getFolderPermissions: _state_actions__WEBPACK_IMPORTED_MODULE_9__.getFolderPermissions,
  updateFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_9__.updateFolderPermission,
  removeFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_9__.removeFolderPermission,
  addFolderPermission: _state_actions__WEBPACK_IMPORTED_MODULE_9__.addFolderPermission
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
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
        navModel: navModel,
        children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
          isLoading: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {})
        }))
      });
    }

    const folderInfo = {
      title: folder.title,
      url: folder.url,
      id: folder.id
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "page-action-bar",
          children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
            className: "page-sub-heading",
            children: "Folder Permissions"
          })), _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
            placement: "auto",
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PermissionList_PermissionsInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              className: "icon--has-hover page-sub-heading-icon",
              name: "question-circle"
            })
          })), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            className: "pull-right",
            onClick: this.onOpenAddPermissions,
            disabled: isAdding,
            children: "Add Permission"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__.SlideDown, {
          in: isAdding,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PermissionList_AddPermission__WEBPACK_IMPORTED_MODULE_5__["default"], {
            onAddPermission: this.onAddPermission,
            onCancel: this.onCancelAddPermission
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PermissionList_PermissionList__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(FolderPermissions));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWU3QixTQUFTLENBQUNtQixpQkFBRCxDQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2ZvbGRlcnMvQWNjZXNzQ29udHJvbEZvbGRlclBlcm1pc3Npb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9mb2xkZXJzL0ZvbGRlclBlcm1pc3Npb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFBlcm1pc3Npb25zIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9BY2Nlc3NDb250cm9sJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgZ2V0Rm9sZGVyQnlVaWQgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0TG9hZGluZ05hdiB9IGZyb20gJy4vc3RhdGUvbmF2TW9kZWwnO1xuXG5pbnRlcmZhY2UgUm91dGVQcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogUm91dGVQcm9wcykge1xuICBjb25zdCB1aWQgPSBwcm9wcy5tYXRjaC5wYXJhbXMudWlkO1xuICByZXR1cm4ge1xuICAgIHVpZDogdWlkLFxuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgYGZvbGRlci1wZXJtaXNzaW9ucy0ke3VpZH1gLCBnZXRMb2FkaW5nTmF2KDEpKSxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRGb2xkZXJCeVVpZCxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuZXhwb3J0IHR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNvbnN0IEFjY2Vzc0NvbnRyb2xGb2xkZXJQZXJtaXNzaW9ucyA9ICh7IHVpZCwgZ2V0Rm9sZGVyQnlVaWQsIG5hdk1vZGVsIH06IFByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Rm9sZGVyQnlVaWQodWlkKTtcbiAgfSwgW2dldEZvbGRlckJ5VWlkLCB1aWRdKTtcblxuICBjb25zdCBjYW5TZXRQZXJtaXNzaW9ucyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkZvbGRlcnNQZXJtaXNzaW9uc1dyaXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPFBlcm1pc3Npb25zIHJlc291cmNlPVwiZm9sZGVyc1wiIHJlc291cmNlSWQ9e3VpZH0gY2FuU2V0UGVybWlzc2lvbnM9e2NhblNldFBlcm1pc3Npb25zfSAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihBY2Nlc3NDb250cm9sRm9sZGVyUGVybWlzc2lvbnMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgVG9vbHRpcCwgSWNvbiwgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU2xpZGVEb3duIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9BbmltYXRpb25zL1NsaWRlRG93bic7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgQWRkUGVybWlzc2lvbiBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1Blcm1pc3Npb25MaXN0L0FkZFBlcm1pc3Npb24nO1xuaW1wb3J0IFBlcm1pc3Npb25MaXN0IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGVybWlzc2lvbkxpc3QvUGVybWlzc2lvbkxpc3QnO1xuaW1wb3J0IFBlcm1pc3Npb25zSW5mbyBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1Blcm1pc3Npb25MaXN0L1Blcm1pc3Npb25zSW5mbyc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRBY2wsIFBlcm1pc3Npb25MZXZlbCwgTmV3RGFzaGJvYXJkQWNsSXRlbSB9IGZyb20gJ2FwcC90eXBlcy9hY2wnO1xuXG5pbXBvcnQge1xuICBnZXRGb2xkZXJCeVVpZCxcbiAgZ2V0Rm9sZGVyUGVybWlzc2lvbnMsXG4gIHVwZGF0ZUZvbGRlclBlcm1pc3Npb24sXG4gIHJlbW92ZUZvbGRlclBlcm1pc3Npb24sXG4gIGFkZEZvbGRlclBlcm1pc3Npb24sXG59IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRMb2FkaW5nTmF2IH0gZnJvbSAnLi9zdGF0ZS9uYXZNb2RlbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IHVpZDogc3RyaW5nIH0+IHt9XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSwgcHJvcHM6IE93blByb3BzKSA9PiB7XG4gIGNvbnN0IHVpZCA9IHByb3BzLm1hdGNoLnBhcmFtcy51aWQ7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCBgZm9sZGVyLXBlcm1pc3Npb25zLSR7dWlkfWAsIGdldExvYWRpbmdOYXYoMSkpLFxuICAgIGZvbGRlclVpZDogdWlkLFxuICAgIGZvbGRlcjogc3RhdGUuZm9sZGVyLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRGb2xkZXJCeVVpZCxcbiAgZ2V0Rm9sZGVyUGVybWlzc2lvbnMsXG4gIHVwZGF0ZUZvbGRlclBlcm1pc3Npb24sXG4gIHJlbW92ZUZvbGRlclBlcm1pc3Npb24sXG4gIGFkZEZvbGRlclBlcm1pc3Npb24sXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNBZGRpbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBGb2xkZXJQZXJtaXNzaW9ucyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0FkZGluZzogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZ2V0Rm9sZGVyQnlVaWQodGhpcy5wcm9wcy5mb2xkZXJVaWQpO1xuICAgIHRoaXMucHJvcHMuZ2V0Rm9sZGVyUGVybWlzc2lvbnModGhpcy5wcm9wcy5mb2xkZXJVaWQpO1xuICB9XG5cbiAgb25PcGVuQWRkUGVybWlzc2lvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQWRkaW5nOiB0cnVlIH0pO1xuICB9O1xuXG4gIG9uUmVtb3ZlSXRlbSA9IChpdGVtOiBEYXNoYm9hcmRBY2wpID0+IHtcbiAgICB0aGlzLnByb3BzLnJlbW92ZUZvbGRlclBlcm1pc3Npb24oaXRlbSk7XG4gIH07XG5cbiAgb25QZXJtaXNzaW9uQ2hhbmdlZCA9IChpdGVtOiBEYXNoYm9hcmRBY2wsIGxldmVsOiBQZXJtaXNzaW9uTGV2ZWwpID0+IHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZUZvbGRlclBlcm1pc3Npb24oaXRlbSwgbGV2ZWwpO1xuICB9O1xuXG4gIG9uQWRkUGVybWlzc2lvbiA9IChuZXdJdGVtOiBOZXdEYXNoYm9hcmRBY2xJdGVtKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuYWRkRm9sZGVyUGVybWlzc2lvbihuZXdJdGVtKTtcbiAgfTtcblxuICBvbkNhbmNlbEFkZFBlcm1pc3Npb24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQWRkaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZNb2RlbCwgZm9sZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNBZGRpbmcgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoZm9sZGVyLmlkID09PSAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17dHJ1ZX0+XG4gICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgICAgPC9QYWdlPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb2xkZXJJbmZvID0geyB0aXRsZTogZm9sZGVyLnRpdGxlLCB1cmw6IGZvbGRlci51cmwsIGlkOiBmb2xkZXIuaWQgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5Gb2xkZXIgUGVybWlzc2lvbnM8L2gzPlxuICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwiYXV0b1wiIGNvbnRlbnQ9ezxQZXJtaXNzaW9uc0luZm8gLz59PlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uLS1oYXMtaG92ZXIgcGFnZS1zdWItaGVhZGluZy1pY29uXCIgbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhcl9fc3BhY2VyXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMub25PcGVuQWRkUGVybWlzc2lvbnN9IGRpc2FibGVkPXtpc0FkZGluZ30+XG4gICAgICAgICAgICAgIEFkZCBQZXJtaXNzaW9uXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2xpZGVEb3duIGluPXtpc0FkZGluZ30+XG4gICAgICAgICAgICA8QWRkUGVybWlzc2lvbiBvbkFkZFBlcm1pc3Npb249e3RoaXMub25BZGRQZXJtaXNzaW9ufSBvbkNhbmNlbD17dGhpcy5vbkNhbmNlbEFkZFBlcm1pc3Npb259IC8+XG4gICAgICAgICAgPC9TbGlkZURvd24+XG4gICAgICAgICAgPFBlcm1pc3Npb25MaXN0XG4gICAgICAgICAgICBpdGVtcz17Zm9sZGVyLnBlcm1pc3Npb25zfVxuICAgICAgICAgICAgb25SZW1vdmVJdGVtPXt0aGlzLm9uUmVtb3ZlSXRlbX1cbiAgICAgICAgICAgIG9uUGVybWlzc2lvbkNoYW5nZWQ9e3RoaXMub25QZXJtaXNzaW9uQ2hhbmdlZH1cbiAgICAgICAgICAgIGlzRmV0Y2hpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgZm9sZGVySW5mbz17Zm9sZGVySW5mb31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoRm9sZGVyUGVybWlzc2lvbnMpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiY29ubmVjdCIsIlBlcm1pc3Npb25zIiwiUGFnZSIsImNvbnRleHRTcnYiLCJnZXROYXZNb2RlbCIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJnZXRGb2xkZXJCeVVpZCIsImdldExvYWRpbmdOYXYiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb3BzIiwidWlkIiwibWF0Y2giLCJwYXJhbXMiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiQWNjZXNzQ29udHJvbEZvbGRlclBlcm1pc3Npb25zIiwiY2FuU2V0UGVybWlzc2lvbnMiLCJoYXNQZXJtaXNzaW9uIiwiRm9sZGVyc1Blcm1pc3Npb25zV3JpdGUiLCJQdXJlQ29tcG9uZW50IiwiVG9vbHRpcCIsIkljb24iLCJCdXR0b24iLCJTbGlkZURvd24iLCJBZGRQZXJtaXNzaW9uIiwiUGVybWlzc2lvbkxpc3QiLCJQZXJtaXNzaW9uc0luZm8iLCJnZXRGb2xkZXJQZXJtaXNzaW9ucyIsInVwZGF0ZUZvbGRlclBlcm1pc3Npb24iLCJyZW1vdmVGb2xkZXJQZXJtaXNzaW9uIiwiYWRkRm9sZGVyUGVybWlzc2lvbiIsImZvbGRlclVpZCIsImZvbGRlciIsIkZvbGRlclBlcm1pc3Npb25zIiwiY29uc3RydWN0b3IiLCJzZXRTdGF0ZSIsImlzQWRkaW5nIiwiaXRlbSIsImxldmVsIiwibmV3SXRlbSIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwiaWQiLCJmb2xkZXJJbmZvIiwidGl0bGUiLCJ1cmwiLCJvbk9wZW5BZGRQZXJtaXNzaW9ucyIsIm9uQWRkUGVybWlzc2lvbiIsIm9uQ2FuY2VsQWRkUGVybWlzc2lvbiIsInBlcm1pc3Npb25zIiwib25SZW1vdmVJdGVtIiwib25QZXJtaXNzaW9uQ2hhbmdlZCJdLCJzb3VyY2VSb290IjoiIn0=