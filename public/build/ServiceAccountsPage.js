"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServiceAccountsPage"],{

/***/ "./public/app/features/serviceaccounts/ServiceAccountsListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
/* harmony import */ var _ServiceAccountsListPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/serviceaccounts/ServiceAccountsListPage.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;












const getServiceAccountsAriaLabel = name => {
  return `Edit service account's ${name} details`;
};

const getServiceAccountsEnabledStatus = disabled => {
  return disabled ? 'Disabled' : 'Enabled';
};

const ServiceAccountListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({
  serviceAccount,
  onRoleChange,
  roleOptions,
  builtInRoles,
  onSetToRemove
}) => {
  const editUrl = `org/serviceaccounts/${serviceAccount.id}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_ServiceAccountsListPage__WEBPACK_IMPORTED_MODULE_7__.getStyles);
  const canUpdateRole = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ServiceAccountsWrite, serviceAccount);
  const displayRolePicker = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionRolesList) && app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionUserRolesList);
  const enableRolePicker = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.OrgUsersRoleUpdate) && canUpdateRole;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "width-4 text-center link-td",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        href: editUrl,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          className: "filter-table__avatar",
          src: serviceAccount.avatarUrl,
          alt: `Avatar for user ${serviceAccount.name}`
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: serviceAccount.name,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: serviceAccount.login,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.login
      })
    }), app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('link-td', styles.iconRow),
      children: displayRolePicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_3__.UserRolePicker, {
        userId: serviceAccount.id,
        orgId: serviceAccount.orgId,
        builtInRole: serviceAccount.role,
        onBuiltinRoleChange: newRole => onRoleChange(newRole, serviceAccount),
        roleOptions: roleOptions,
        builtInRoles: builtInRoles,
        disabled: !enableRolePicker
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('link-td', styles.iconRow),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__.OrgRolePicker, {
        "aria-label": "Role",
        value: serviceAccount.role,
        disabled: !canUpdateRole,
        onChange: newRole => onRoleChange(newRole, serviceAccount)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: getServiceAccountsEnabledStatus(serviceAccount.isDisabled),
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: getServiceAccountsEnabledStatus(serviceAccount.isDisabled)
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
        className: "ellipsis",
        href: editUrl,
        title: "Tokens",
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: 'key-skeleton-alt'
          })
        })), "\xA0", serviceAccount.tokens]
      })
    }), app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ServiceAccountsDelete, serviceAccount) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        size: "sm",
        variant: "destructive",
        onClick: () => {
          onSetToRemove(serviceAccount);
        },
        icon: "times",
        "aria-label": "Delete service account"
      })
    })]
  }, serviceAccount.id);
});
ServiceAccountListItem.displayName = 'ServiceAccountListItem';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceAccountListItem);

/***/ }),

/***/ "./public/app/features/serviceaccounts/ServiceAccountsListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _ServiceAccountsListItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/serviceaccounts/ServiceAccountsListItem.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/serviceaccounts/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _LinkButton, _PageLoader, _th, _th2, _th3, _th4, _th5, _th6;


















function mapStateToProps(state) {
  return Object.assign({
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, 'serviceaccounts')
  }, state.serviceAccounts);
}

const mapDispatchToProps = {
  fetchServiceAccounts: _state_actions__WEBPACK_IMPORTED_MODULE_12__.fetchServiceAccounts,
  fetchACOptions: _state_actions__WEBPACK_IMPORTED_MODULE_12__.fetchACOptions,
  updateServiceAccount: _state_actions__WEBPACK_IMPORTED_MODULE_12__.updateServiceAccount,
  removeServiceAccount: _state_actions__WEBPACK_IMPORTED_MODULE_12__.removeServiceAccount,
  setServiceAccountToRemove: _state_actions__WEBPACK_IMPORTED_MODULE_12__.setServiceAccountToRemove,
  changeFilter: _state_actions__WEBPACK_IMPORTED_MODULE_12__.changeFilter,
  changeQuery: _state_actions__WEBPACK_IMPORTED_MODULE_12__.changeQuery
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);

const ServiceAccountsListPage = ({
  fetchServiceAccounts,
  removeServiceAccount,
  fetchACOptions,
  updateServiceAccount,
  setServiceAccountToRemove,
  navModel,
  serviceAccounts,
  isLoading,
  roleOptions,
  builtInRoles,
  changeFilter,
  changeQuery,
  query,
  filters,
  serviceAccountToRemove
}) => {
  var _filters$find;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchServiceAccounts();

    if (app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.licensedAccessControlEnabled()) {
      fetchACOptions();
    }
  }, [fetchServiceAccounts, fetchACOptions]);

  const onRoleChange = (role, serviceAccount) => {
    const updatedServiceAccount = Object.assign({}, serviceAccount, {
      role: role
    });
    updateServiceAccount(updatedServiceAccount);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h2", {
        children: "Service accounts"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "page-action-bar",
        style: {
          justifyContent: 'flex-end'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FilterInput, {
          placeholder: "Search service account by name.",
          autoFocus: true,
          value: query,
          onChange: changeQuery
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
          options: [{
            label: 'All service accounts',
            value: false
          }, {
            label: 'Expired tokens',
            value: true
          }],
          onChange: value => changeFilter({
            name: 'expiredTokens',
            value
          }),
          value: (_filters$find = filters.find(f => f.name === 'expiredTokens')) === null || _filters$find === void 0 ? void 0 : _filters$find.value,
          className: styles.filter
        }), serviceAccounts.length !== 0 && app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ServiceAccountsCreate) && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
          href: "org/serviceaccounts/create",
          variant: "primary",
          children: "Add service account"
        })))]
      }), isLoading && (_PageLoader || (_PageLoader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {}))), !isLoading && serviceAccounts.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: "You haven't created any service accounts yet.",
          buttonIcon: "key-skeleton-alt",
          buttonLink: "org/serviceaccounts/create",
          buttonTitle: "Add service account",
          buttonDisabled: !app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ServiceAccountsCreate),
          proTip: "Remember, you can provide specific permissions for API access to other applications.",
          proTipLink: "",
          proTipLinkTitle: "",
          proTipTarget: "_blank"
        })
      }), !isLoading && serviceAccounts.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.table, 'admin-list-table'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("table", {
            className: "filter-table form-inline filter-table--hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "Account"
                })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "ID"
                })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "Roles"
                })), _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "Status"
                })), _th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  children: "Tokens"
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("th", {
                  style: {
                    width: '34px'
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("tbody", {
              children: serviceAccounts.map(serviceAccount => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ServiceAccountsListItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
                serviceAccount: serviceAccount,
                builtInRoles: builtInRoles,
                roleOptions: roleOptions,
                onRoleChange: onRoleChange,
                onSetToRemove: setServiceAccountToRemove
              }, serviceAccount.id))
            })]
          })
        })
      }), serviceAccountToRemove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, {
        body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          children: ["Are you sure you want to delete '", serviceAccountToRemove.name, "'", Boolean(serviceAccountToRemove.tokens) && ` and ${serviceAccountToRemove.tokens} accompanying ${pluralize__WEBPACK_IMPORTED_MODULE_1___default()('token', serviceAccountToRemove.tokens)}`, "?"]
        }),
        confirmText: "Delete",
        title: "Delete service account",
        onDismiss: () => {
          setServiceAccountToRemove(null);
        },
        isOpen: true,
        onConfirm: () => {
          removeServiceAccount(serviceAccountToRemove.id);
          setServiceAccountToRemove(null);
        }
      })]
    })
  });
};

const getStyles = theme => {
  return {
    table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(3)};
    `,
    filter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0 ${theme.spacing(1)};
    `,
    iconRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      svg {
        margin-left: ${theme.spacing(0.5)};
      }
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${theme.spacing(0.5)} 0 !important;
      }
    `,
    unitTooltip: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
    `,
    unitItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      cursor: pointer;
      padding: ${theme.spacing(0.5)} 0;
      margin-right: ${theme.spacing(1)};
    `,
    disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.disabled};
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    `
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(ServiceAccountsListPage));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBZXlCLFNBQVMsQ0FBQ0MsdUJBQUQsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZXJ2aWNlYWNjb3VudHMvU2VydmljZUFjY291bnRzTGlzdEl0ZW0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlcnZpY2VhY2NvdW50cy9TZXJ2aWNlQWNjb3VudHNMaXN0UGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE9yZ1JvbGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFVzZXJSb2xlUGlja2VyIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Sb2xlUGlja2VyL1VzZXJSb2xlUGlja2VyJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFJvbGUsIFNlcnZpY2VBY2NvdW50RFRPIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgT3JnUm9sZVBpY2tlciB9IGZyb20gJy4uL2FkbWluL09yZ1JvbGVQaWNrZXInO1xuXG5pbXBvcnQgeyBnZXRTdHlsZXMgfSBmcm9tICcuL1NlcnZpY2VBY2NvdW50c0xpc3RQYWdlJztcblxudHlwZSBTZXJ2aWNlQWNjb3VudExpc3RJdGVtUHJvcHMgPSB7XG4gIHNlcnZpY2VBY2NvdW50OiBTZXJ2aWNlQWNjb3VudERUTztcbiAgb25Sb2xlQ2hhbmdlOiAocm9sZTogT3JnUm9sZSwgc2VydmljZUFjY291bnQ6IFNlcnZpY2VBY2NvdW50RFRPKSA9PiB2b2lkO1xuICByb2xlT3B0aW9uczogUm9sZVtdO1xuICBidWlsdEluUm9sZXM6IFJlY29yZDxzdHJpbmcsIFJvbGVbXT47XG4gIG9uU2V0VG9SZW1vdmU6IChzZXJ2aWNlQWNjb3VudDogU2VydmljZUFjY291bnREVE8pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBnZXRTZXJ2aWNlQWNjb3VudHNBcmlhTGFiZWwgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBgRWRpdCBzZXJ2aWNlIGFjY291bnQncyAke25hbWV9IGRldGFpbHNgO1xufTtcbmNvbnN0IGdldFNlcnZpY2VBY2NvdW50c0VuYWJsZWRTdGF0dXMgPSAoZGlzYWJsZWQ6IGJvb2xlYW4pID0+IHtcbiAgcmV0dXJuIGRpc2FibGVkID8gJ0Rpc2FibGVkJyA6ICdFbmFibGVkJztcbn07XG5cbmNvbnN0IFNlcnZpY2VBY2NvdW50TGlzdEl0ZW0gPSBtZW1vKFxuICAoeyBzZXJ2aWNlQWNjb3VudCwgb25Sb2xlQ2hhbmdlLCByb2xlT3B0aW9ucywgYnVpbHRJblJvbGVzLCBvblNldFRvUmVtb3ZlIH06IFNlcnZpY2VBY2NvdW50TGlzdEl0ZW1Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGVkaXRVcmwgPSBgb3JnL3NlcnZpY2VhY2NvdW50cy8ke3NlcnZpY2VBY2NvdW50LmlkfWA7XG4gICAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICAgIGNvbnN0IGNhblVwZGF0ZVJvbGUgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uU2VydmljZUFjY291bnRzV3JpdGUsIHNlcnZpY2VBY2NvdW50KTtcbiAgICBjb25zdCBkaXNwbGF5Um9sZVBpY2tlciA9XG4gICAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25Sb2xlc0xpc3QpICYmXG4gICAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25Vc2VyUm9sZXNMaXN0KTtcbiAgICBjb25zdCBlbmFibGVSb2xlUGlja2VyID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3JnVXNlcnNSb2xlVXBkYXRlKSAmJiBjYW5VcGRhdGVSb2xlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e3NlcnZpY2VBY2NvdW50LmlkfT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTQgdGV4dC1jZW50ZXIgbGluay10ZFwiPlxuICAgICAgICAgIDxhIGhyZWY9e2VkaXRVcmx9IGFyaWEtbGFiZWw9e2dldFNlcnZpY2VBY2NvdW50c0FyaWFMYWJlbChzZXJ2aWNlQWNjb3VudC5uYW1lKX0+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZV9fYXZhdGFyXCJcbiAgICAgICAgICAgICAgc3JjPXtzZXJ2aWNlQWNjb3VudC5hdmF0YXJVcmx9XG4gICAgICAgICAgICAgIGFsdD17YEF2YXRhciBmb3IgdXNlciAke3NlcnZpY2VBY2NvdW50Lm5hbWV9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGluay10ZCBtYXgtd2lkdGgtMTBcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWxsaXBzaXNcIlxuICAgICAgICAgICAgaHJlZj17ZWRpdFVybH1cbiAgICAgICAgICAgIHRpdGxlPXtzZXJ2aWNlQWNjb3VudC5uYW1lfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17Z2V0U2VydmljZUFjY291bnRzQXJpYUxhYmVsKHNlcnZpY2VBY2NvdW50Lm5hbWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZXJ2aWNlQWNjb3VudC5uYW1lfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGQgbWF4LXdpZHRoLTEwXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsbGlwc2lzXCJcbiAgICAgICAgICAgIGhyZWY9e2VkaXRVcmx9XG4gICAgICAgICAgICB0aXRsZT17c2VydmljZUFjY291bnQubG9naW59XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtnZXRTZXJ2aWNlQWNjb3VudHNBcmlhTGFiZWwoc2VydmljZUFjY291bnQubmFtZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NlcnZpY2VBY2NvdW50LmxvZ2lufVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICAgICAge2NvbnRleHRTcnYubGljZW5zZWRBY2Nlc3NDb250cm9sRW5hYmxlZCgpID8gKFxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e2N4KCdsaW5rLXRkJywgc3R5bGVzLmljb25Sb3cpfT5cbiAgICAgICAgICAgIHtkaXNwbGF5Um9sZVBpY2tlciAmJiAoXG4gICAgICAgICAgICAgIDxVc2VyUm9sZVBpY2tlclxuICAgICAgICAgICAgICAgIHVzZXJJZD17c2VydmljZUFjY291bnQuaWR9XG4gICAgICAgICAgICAgICAgb3JnSWQ9e3NlcnZpY2VBY2NvdW50Lm9yZ0lkfVxuICAgICAgICAgICAgICAgIGJ1aWx0SW5Sb2xlPXtzZXJ2aWNlQWNjb3VudC5yb2xlfVxuICAgICAgICAgICAgICAgIG9uQnVpbHRpblJvbGVDaGFuZ2U9eyhuZXdSb2xlKSA9PiBvblJvbGVDaGFuZ2UobmV3Um9sZSwgc2VydmljZUFjY291bnQpfVxuICAgICAgICAgICAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgICAgICAgICAgICBidWlsdEluUm9sZXM9e2J1aWx0SW5Sb2xlc31cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZVJvbGVQaWNrZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT17Y3goJ2xpbmstdGQnLCBzdHlsZXMuaWNvblJvdyl9PlxuICAgICAgICAgICAgPE9yZ1JvbGVQaWNrZXJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJvbGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VydmljZUFjY291bnQucm9sZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5VcGRhdGVSb2xlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KG5ld1JvbGUpID0+IG9uUm9sZUNoYW5nZShuZXdSb2xlLCBzZXJ2aWNlQWNjb3VudCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICl9XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkIG1heC13aWR0aC0xMFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlbGxpcHNpc1wiXG4gICAgICAgICAgICBocmVmPXtlZGl0VXJsfVxuICAgICAgICAgICAgdGl0bGU9e2dldFNlcnZpY2VBY2NvdW50c0VuYWJsZWRTdGF0dXMoc2VydmljZUFjY291bnQuaXNEaXNhYmxlZCl9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtnZXRTZXJ2aWNlQWNjb3VudHNBcmlhTGFiZWwoc2VydmljZUFjY291bnQubmFtZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2dldFNlcnZpY2VBY2NvdW50c0VuYWJsZWRTdGF0dXMoc2VydmljZUFjY291bnQuaXNEaXNhYmxlZCl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGluay10ZCBtYXgtd2lkdGgtMTBcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWxsaXBzaXNcIlxuICAgICAgICAgICAgaHJlZj17ZWRpdFVybH1cbiAgICAgICAgICAgIHRpdGxlPVwiVG9rZW5zXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2dldFNlcnZpY2VBY2NvdW50c0FyaWFMYWJlbChzZXJ2aWNlQWNjb3VudC5uYW1lKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT17J2tleS1za2VsZXRvbi1hbHQnfT48L0ljb24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIHtzZXJ2aWNlQWNjb3VudC50b2tlbnN9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3RkPlxuICAgICAgICB7Y29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLlNlcnZpY2VBY2NvdW50c0RlbGV0ZSwgc2VydmljZUFjY291bnQpICYmIChcbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBvblNldFRvUmVtb3ZlKHNlcnZpY2VBY2NvdW50KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBzZXJ2aWNlIGFjY291bnRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICApfVxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG4pO1xuU2VydmljZUFjY291bnRMaXN0SXRlbS5kaXNwbGF5TmFtZSA9ICdTZXJ2aWNlQWNjb3VudExpc3RJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUFjY291bnRMaXN0SXRlbTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBPcmdSb2xlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBDb25maXJtTW9kYWwsIEZpbHRlcklucHV0LCBMaW5rQnV0dG9uLCBSYWRpb0J1dHRvbkdyb3VwLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IEVtcHR5TGlzdENUQSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0VtcHR5TGlzdENUQS9FbXB0eUxpc3RDVEEnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IFBhZ2VMb2FkZXIgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlTG9hZGVyL1BhZ2VMb2FkZXInO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSwgU2VydmljZUFjY291bnREVE8sIEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgU2VydmljZUFjY291bnRMaXN0SXRlbSBmcm9tICcuL1NlcnZpY2VBY2NvdW50c0xpc3RJdGVtJztcbmltcG9ydCB7XG4gIGNoYW5nZUZpbHRlcixcbiAgY2hhbmdlUXVlcnksXG4gIGZldGNoQUNPcHRpb25zLFxuICBmZXRjaFNlcnZpY2VBY2NvdW50cyxcbiAgcmVtb3ZlU2VydmljZUFjY291bnQsXG4gIHVwZGF0ZVNlcnZpY2VBY2NvdW50LFxuICBzZXRTZXJ2aWNlQWNjb3VudFRvUmVtb3ZlLFxufSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge31cblxudHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3NlcnZpY2VhY2NvdW50cycpLFxuICAgIC4uLnN0YXRlLnNlcnZpY2VBY2NvdW50cyxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBmZXRjaFNlcnZpY2VBY2NvdW50cyxcbiAgZmV0Y2hBQ09wdGlvbnMsXG4gIHVwZGF0ZVNlcnZpY2VBY2NvdW50LFxuICByZW1vdmVTZXJ2aWNlQWNjb3VudCxcbiAgc2V0U2VydmljZUFjY291bnRUb1JlbW92ZSxcbiAgY2hhbmdlRmlsdGVyLFxuICBjaGFuZ2VRdWVyeSxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5jb25zdCBTZXJ2aWNlQWNjb3VudHNMaXN0UGFnZSA9ICh7XG4gIGZldGNoU2VydmljZUFjY291bnRzLFxuICByZW1vdmVTZXJ2aWNlQWNjb3VudCxcbiAgZmV0Y2hBQ09wdGlvbnMsXG4gIHVwZGF0ZVNlcnZpY2VBY2NvdW50LFxuICBzZXRTZXJ2aWNlQWNjb3VudFRvUmVtb3ZlLFxuICBuYXZNb2RlbCxcbiAgc2VydmljZUFjY291bnRzLFxuICBpc0xvYWRpbmcsXG4gIHJvbGVPcHRpb25zLFxuICBidWlsdEluUm9sZXMsXG4gIGNoYW5nZUZpbHRlcixcbiAgY2hhbmdlUXVlcnksXG4gIHF1ZXJ5LFxuICBmaWx0ZXJzLFxuICBzZXJ2aWNlQWNjb3VudFRvUmVtb3ZlLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hTZXJ2aWNlQWNjb3VudHMoKTtcbiAgICBpZiAoY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGZldGNoQUNPcHRpb25zKCk7XG4gICAgfVxuICB9LCBbZmV0Y2hTZXJ2aWNlQWNjb3VudHMsIGZldGNoQUNPcHRpb25zXSk7XG5cbiAgY29uc3Qgb25Sb2xlQ2hhbmdlID0gKHJvbGU6IE9yZ1JvbGUsIHNlcnZpY2VBY2NvdW50OiBTZXJ2aWNlQWNjb3VudERUTykgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRTZXJ2aWNlQWNjb3VudCA9IHsgLi4uc2VydmljZUFjY291bnQsIHJvbGU6IHJvbGUgfTtcbiAgICB1cGRhdGVTZXJ2aWNlQWNjb3VudCh1cGRhdGVkU2VydmljZUFjY291bnQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgPGgyPlNlcnZpY2UgYWNjb3VudHM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuICAgICAgICAgIDxGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggc2VydmljZSBhY2NvdW50IGJ5IG5hbWUuXCJcbiAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VRdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdBbGwgc2VydmljZSBhY2NvdW50cycsIHZhbHVlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICB7IGxhYmVsOiAnRXhwaXJlZCB0b2tlbnMnLCB2YWx1ZTogdHJ1ZSB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGNoYW5nZUZpbHRlcih7IG5hbWU6ICdleHBpcmVkVG9rZW5zJywgdmFsdWUgfSl9XG4gICAgICAgICAgICB2YWx1ZT17ZmlsdGVycy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICdleHBpcmVkVG9rZW5zJyk/LnZhbHVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3NlcnZpY2VBY2NvdW50cy5sZW5ndGggIT09IDAgJiYgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uU2VydmljZUFjY291bnRzQ3JlYXRlKSAmJiAoXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPVwib3JnL3NlcnZpY2VhY2NvdW50cy9jcmVhdGVcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICBBZGQgc2VydmljZSBhY2NvdW50XG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtpc0xvYWRpbmcgJiYgPFBhZ2VMb2FkZXIgLz59XG4gICAgICAgIHshaXNMb2FkaW5nICYmIHNlcnZpY2VBY2NvdW50cy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgICAgICAgIHRpdGxlPVwiWW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgc2VydmljZSBhY2NvdW50cyB5ZXQuXCJcbiAgICAgICAgICAgICAgYnV0dG9uSWNvbj1cImtleS1za2VsZXRvbi1hbHRcIlxuICAgICAgICAgICAgICBidXR0b25MaW5rPVwib3JnL3NlcnZpY2VhY2NvdW50cy9jcmVhdGVcIlxuICAgICAgICAgICAgICBidXR0b25UaXRsZT1cIkFkZCBzZXJ2aWNlIGFjY291bnRcIlxuICAgICAgICAgICAgICBidXR0b25EaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLlNlcnZpY2VBY2NvdW50c0NyZWF0ZSl9XG4gICAgICAgICAgICAgIHByb1RpcD1cIlJlbWVtYmVyLCB5b3UgY2FuIHByb3ZpZGUgc3BlY2lmaWMgcGVybWlzc2lvbnMgZm9yIEFQSSBhY2Nlc3MgdG8gb3RoZXIgYXBwbGljYXRpb25zLlwiXG4gICAgICAgICAgICAgIHByb1RpcExpbms9XCJcIlxuICAgICAgICAgICAgICBwcm9UaXBMaW5rVGl0bGU9XCJcIlxuICAgICAgICAgICAgICBwcm9UaXBUYXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpc0xvYWRpbmcgJiYgc2VydmljZUFjY291bnRzLmxlbmd0aCAhPT0gMCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMudGFibGUsICdhZG1pbi1saXN0LXRhYmxlJyl9PlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lIGZpbHRlci10YWJsZS0taG92ZXJcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+QWNjb3VudDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5JRDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5Sb2xlczwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+VG9rZW5zPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMzRweCcgfX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICB7c2VydmljZUFjY291bnRzLm1hcCgoc2VydmljZUFjY291bnQ6IFNlcnZpY2VBY2NvdW50RFRPKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTZXJ2aWNlQWNjb3VudExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgc2VydmljZUFjY291bnQ9e3NlcnZpY2VBY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17c2VydmljZUFjY291bnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgYnVpbHRJblJvbGVzPXtidWlsdEluUm9sZXN9XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZU9wdGlvbnM9e3JvbGVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIG9uUm9sZUNoYW5nZT17b25Sb2xlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU2V0VG9SZW1vdmU9e3NldFNlcnZpY2VBY2NvdW50VG9SZW1vdmV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZXJ2aWNlQWNjb3VudFRvUmVtb3ZlICYmIChcbiAgICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgICBib2R5PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlICZhcG9zO3tzZXJ2aWNlQWNjb3VudFRvUmVtb3ZlLm5hbWV9JmFwb3M7XG4gICAgICAgICAgICAgICAge0Jvb2xlYW4oc2VydmljZUFjY291bnRUb1JlbW92ZS50b2tlbnMpICYmXG4gICAgICAgICAgICAgICAgICBgIGFuZCAke3NlcnZpY2VBY2NvdW50VG9SZW1vdmUudG9rZW5zfSBhY2NvbXBhbnlpbmcgJHtwbHVyYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICd0b2tlbicsXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VBY2NvdW50VG9SZW1vdmUudG9rZW5zXG4gICAgICAgICAgICAgICAgICApfWB9XG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbmZpcm1UZXh0PVwiRGVsZXRlXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHNlcnZpY2UgYWNjb3VudFwiXG4gICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0U2VydmljZUFjY291bnRUb1JlbW92ZShudWxsKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgICAgICAgcmVtb3ZlU2VydmljZUFjY291bnQoc2VydmljZUFjY291bnRUb1JlbW92ZS5pZCk7XG4gICAgICAgICAgICAgIHNldFNlcnZpY2VBY2NvdW50VG9SZW1vdmUobnVsbCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHRhYmxlOiBjc3NgXG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgIGAsXG4gICAgZmlsdGVyOiBjc3NgXG4gICAgICBtYXJnaW46IDAgJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGljb25Sb3c6IGNzc2BcbiAgICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgICB9XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgICAgIGEge1xuICAgICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMC41KX0gMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIGAsXG4gICAgdW5pdFRvb2x0aXA6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGAsXG4gICAgdW5pdEl0ZW06IGNzc2BcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLjUpfSAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgZGlzYWJsZWQ6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LmRpc2FibGVkfTtcbiAgICBgLFxuICAgIGxpbms6IGNzc2BcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgYCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihTZXJ2aWNlQWNjb3VudHNMaXN0UGFnZSk7XG4iXSwibmFtZXMiOlsiY3giLCJSZWFjdCIsIm1lbW8iLCJCdXR0b24iLCJJY29uIiwidXNlU3R5bGVzMiIsIlVzZXJSb2xlUGlja2VyIiwiY29udGV4dFNydiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJPcmdSb2xlUGlja2VyIiwiZ2V0U3R5bGVzIiwiZ2V0U2VydmljZUFjY291bnRzQXJpYUxhYmVsIiwibmFtZSIsImdldFNlcnZpY2VBY2NvdW50c0VuYWJsZWRTdGF0dXMiLCJkaXNhYmxlZCIsIlNlcnZpY2VBY2NvdW50TGlzdEl0ZW0iLCJzZXJ2aWNlQWNjb3VudCIsIm9uUm9sZUNoYW5nZSIsInJvbGVPcHRpb25zIiwiYnVpbHRJblJvbGVzIiwib25TZXRUb1JlbW92ZSIsImVkaXRVcmwiLCJpZCIsInN0eWxlcyIsImNhblVwZGF0ZVJvbGUiLCJoYXNQZXJtaXNzaW9uSW5NZXRhZGF0YSIsIlNlcnZpY2VBY2NvdW50c1dyaXRlIiwiZGlzcGxheVJvbGVQaWNrZXIiLCJoYXNQZXJtaXNzaW9uIiwiQWN0aW9uUm9sZXNMaXN0IiwiQWN0aW9uVXNlclJvbGVzTGlzdCIsImVuYWJsZVJvbGVQaWNrZXIiLCJPcmdVc2Vyc1JvbGVVcGRhdGUiLCJhdmF0YXJVcmwiLCJsb2dpbiIsImxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQiLCJpY29uUm93Iiwib3JnSWQiLCJyb2xlIiwibmV3Um9sZSIsImlzRGlzYWJsZWQiLCJ0b2tlbnMiLCJTZXJ2aWNlQWNjb3VudHNEZWxldGUiLCJkaXNwbGF5TmFtZSIsImNzcyIsInBsdXJhbGl6ZSIsInVzZUVmZmVjdCIsImNvbm5lY3QiLCJDb25maXJtTW9kYWwiLCJGaWx0ZXJJbnB1dCIsIkxpbmtCdXR0b24iLCJSYWRpb0J1dHRvbkdyb3VwIiwiRW1wdHlMaXN0Q1RBIiwiUGFnZSIsIlBhZ2VMb2FkZXIiLCJnZXROYXZNb2RlbCIsImNoYW5nZUZpbHRlciIsImNoYW5nZVF1ZXJ5IiwiZmV0Y2hBQ09wdGlvbnMiLCJmZXRjaFNlcnZpY2VBY2NvdW50cyIsInJlbW92ZVNlcnZpY2VBY2NvdW50IiwidXBkYXRlU2VydmljZUFjY291bnQiLCJzZXRTZXJ2aWNlQWNjb3VudFRvUmVtb3ZlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZNb2RlbCIsIm5hdkluZGV4Iiwic2VydmljZUFjY291bnRzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiU2VydmljZUFjY291bnRzTGlzdFBhZ2UiLCJpc0xvYWRpbmciLCJxdWVyeSIsImZpbHRlcnMiLCJzZXJ2aWNlQWNjb3VudFRvUmVtb3ZlIiwidXBkYXRlZFNlcnZpY2VBY2NvdW50IiwianVzdGlmeUNvbnRlbnQiLCJsYWJlbCIsInZhbHVlIiwiZmluZCIsImYiLCJmaWx0ZXIiLCJsZW5ndGgiLCJTZXJ2aWNlQWNjb3VudHNDcmVhdGUiLCJ0YWJsZSIsIndpZHRoIiwibWFwIiwiQm9vbGVhbiIsInRoZW1lIiwic3BhY2luZyIsInJvdyIsInVuaXRUb29sdGlwIiwidW5pdEl0ZW0iLCJjb2xvcnMiLCJ0ZXh0IiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=