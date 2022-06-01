"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1337],{

/***/ "./public/app/features/serviceaccounts/ServiceAccountsListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ serviceaccounts_ServiceAccountsListPage),
  "getStyles": () => (/* binding */ getStyles)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js
var pluralize = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
var pluralize_default = /*#__PURE__*/__webpack_require__.n(pluralize);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/components/PageLoader/PageLoader.tsx
var PageLoader = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
// EXTERNAL MODULE: ./public/app/core/core.ts
var core = __webpack_require__("./public/app/core/core.ts");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/RolePicker/UserRolePicker.tsx
var UserRolePicker = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
// EXTERNAL MODULE: ./public/app/features/admin/OrgRolePicker.tsx
var OrgRolePicker = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/serviceaccounts/ServiceAccountsListItem.tsx
var _span;












const getServiceAccountsAriaLabel = name => {
  return `Edit service account's ${name} details`;
};

const getServiceAccountsEnabledStatus = disabled => {
  return disabled ? 'Disabled' : 'Enabled';
};

const ServiceAccountListItem = /*#__PURE__*/(0,react.memo)(_ref => {
  let {
    serviceAccount,
    onRoleChange,
    roleOptions,
    builtInRoles,
    onSetToRemove
  } = _ref;
  const editUrl = `org/serviceaccounts/${serviceAccount.id}`;
  const styles = (0,src.useStyles2)(getStyles);
  const canUpdateRole = core/* contextSrv.hasPermissionInMetadata */.Vt.hasPermissionInMetadata(types/* AccessControlAction.ServiceAccountsWrite */.bW.ServiceAccountsWrite, serviceAccount);
  const displayRolePicker = core/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ActionRolesList */.bW.ActionRolesList) && core/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ActionUserRolesList */.bW.ActionUserRolesList);
  const enableRolePicker = core/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.OrgUsersRoleUpdate */.bW.OrgUsersRoleUpdate) && canUpdateRole;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: "width-4 text-center link-td",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        href: editUrl,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "filter-table__avatar",
          src: serviceAccount.avatarUrl,
          alt: `Avatar for user ${serviceAccount.name}`
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: serviceAccount.name,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.name
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: serviceAccount.login,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.login
      })
    }), core/* contextSrv.licensedAccessControlEnabled */.Vt.licensedAccessControlEnabled() ? /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: (0,emotion_css_esm.cx)('link-td', styles.iconRow),
      children: displayRolePicker && /*#__PURE__*/(0,jsx_runtime.jsx)(UserRolePicker/* UserRolePicker */.R, {
        userId: serviceAccount.id,
        orgId: serviceAccount.orgId,
        builtInRole: serviceAccount.role,
        onBuiltinRoleChange: newRole => onRoleChange(newRole, serviceAccount),
        roleOptions: roleOptions,
        builtInRoles: builtInRoles,
        disabled: !enableRolePicker
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: (0,emotion_css_esm.cx)('link-td', styles.iconRow),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(OrgRolePicker/* OrgRolePicker */.A, {
        "aria-label": "Role",
        value: serviceAccount.role,
        disabled: !canUpdateRole,
        onChange: newRole => onRoleChange(newRole, serviceAccount)
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: getServiceAccountsEnabledStatus(serviceAccount.isDisabled),
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: getServiceAccountsEnabledStatus(serviceAccount.isDisabled)
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
        className: "ellipsis",
        href: editUrl,
        title: "Tokens",
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: [_span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
            name: 'key-skeleton-alt'
          })
        })), "\xA0", serviceAccount.tokens]
      })
    }), core/* contextSrv.hasPermissionInMetadata */.Vt.hasPermissionInMetadata(types/* AccessControlAction.ServiceAccountsDelete */.bW.ServiceAccountsDelete, serviceAccount) && /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
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
/* harmony default export */ const ServiceAccountsListItem = (ServiceAccountListItem);
// EXTERNAL MODULE: ./public/app/features/serviceaccounts/state/actions.ts
var actions = __webpack_require__("./public/app/features/serviceaccounts/state/actions.ts");
;// CONCATENATED MODULE: ./public/app/features/serviceaccounts/ServiceAccountsListPage.tsx
var _h, _LinkButton, _PageLoader, _th, _th2, _th3, _th4, _th5, _th6;


















function mapStateToProps(state) {
  return Object.assign({
    navModel: (0,navModel/* getNavModel */.h)(state.navIndex, 'serviceaccounts')
  }, state.serviceAccounts);
}

const mapDispatchToProps = {
  fetchServiceAccounts: actions/* fetchServiceAccounts */.Xd,
  fetchACOptions: actions/* fetchACOptions */.bX,
  updateServiceAccount: actions/* updateServiceAccount */.TL,
  removeServiceAccount: actions/* removeServiceAccount */.IR,
  setServiceAccountToRemove: actions/* setServiceAccountToRemove */.cl,
  changeFilter: actions/* changeFilter */.M6,
  changeQuery: actions/* changeQuery */.R5
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);

const ServiceAccountsListPage = _ref => {
  var _filters$find;

  let {
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
  } = _ref;
  const styles = (0,src.useStyles2)(getStyles);
  (0,react.useEffect)(() => {
    fetchServiceAccounts();

    if (core/* contextSrv.licensedAccessControlEnabled */.Vt.licensedAccessControlEnabled()) {
      fetchACOptions();
    }
  }, [fetchServiceAccounts, fetchACOptions]);

  const onRoleChange = (role, serviceAccount) => {
    const updatedServiceAccount = Object.assign({}, serviceAccount, {
      role: role
    });
    updateServiceAccount(updatedServiceAccount);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default.Contents */.Z.Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: "Service accounts"
      })), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "page-action-bar",
        style: {
          justifyContent: 'flex-end'
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.FilterInput, {
          placeholder: "Search service account by name.",
          autoFocus: true,
          value: query,
          onChange: changeQuery
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.RadioButtonGroup, {
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
        }), serviceAccounts.length !== 0 && core/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ServiceAccountsCreate */.bW.ServiceAccountsCreate) && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
          href: "org/serviceaccounts/create",
          variant: "primary",
          children: "Add service account"
        })))]
      }), isLoading && (_PageLoader || (_PageLoader = /*#__PURE__*/(0,jsx_runtime.jsx)(PageLoader/* default */.Z, {}))), !isLoading && serviceAccounts.length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyListCTA/* default */.Z, {
          title: "You haven't created any service accounts yet.",
          buttonIcon: "key-skeleton-alt",
          buttonLink: "org/serviceaccounts/create",
          buttonTitle: "Add service account",
          buttonDisabled: !core/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ServiceAccountsCreate */.bW.ServiceAccountsCreate),
          proTip: "Remember, you can provide specific permissions for API access to other applications.",
          proTipLink: "",
          proTipLinkTitle: "",
          proTipTarget: "_blank"
        })
      }), !isLoading && serviceAccounts.length !== 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: (0,emotion_css_esm.cx)(styles.table, 'admin-list-table'),
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "filter-table form-inline filter-table--hover",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "Account"
                })), _th3 || (_th3 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "ID"
                })), _th4 || (_th4 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "Roles"
                })), _th5 || (_th5 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "Status"
                })), _th6 || (_th6 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "Tokens"
                })), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  style: {
                    width: '34px'
                  }
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: serviceAccounts.map(serviceAccount => /*#__PURE__*/(0,jsx_runtime.jsx)(ServiceAccountsListItem, {
                serviceAccount: serviceAccount,
                builtInRoles: builtInRoles,
                roleOptions: roleOptions,
                onRoleChange: onRoleChange,
                onSetToRemove: setServiceAccountToRemove
              }, serviceAccount.id))
            })]
          })
        })
      }), serviceAccountToRemove && /*#__PURE__*/(0,jsx_runtime.jsx)(src.ConfirmModal, {
        body: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: ["Are you sure you want to delete '", serviceAccountToRemove.name, "'", Boolean(serviceAccountToRemove.tokens) && ` and ${serviceAccountToRemove.tokens} accompanying ${pluralize_default()('token', serviceAccountToRemove.tokens)}`, "?"]
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
    table: emotion_css_esm.css`
      margin-top: ${theme.spacing(3)};
    `,
    filter: emotion_css_esm.css`
      margin: 0 ${theme.spacing(1)};
    `,
    iconRow: emotion_css_esm.css`
      svg {
        margin-left: ${theme.spacing(0.5)};
      }
    `,
    row: emotion_css_esm.css`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${theme.spacing(0.5)} 0 !important;
      }
    `,
    unitTooltip: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
    `,
    unitItem: emotion_css_esm.css`
      cursor: pointer;
      padding: ${theme.spacing(0.5)} 0;
      margin-right: ${theme.spacing(1)};
    `,
    disabled: emotion_css_esm.css`
      color: ${theme.colors.text.disabled};
    `,
    link: emotion_css_esm.css`
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    `
  };
};
/* harmony default export */ const serviceaccounts_ServiceAccountsListPage = (connector(ServiceAccountsListPage));

/***/ })

}]);