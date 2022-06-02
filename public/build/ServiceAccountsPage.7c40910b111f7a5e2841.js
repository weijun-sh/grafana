"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1337],{

 "./public/app/features/serviceaccounts/ServiceAccountsListPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( serviceaccounts_ServiceAccountsListPage),
  "getStyles": () => ( getStyles)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var pluralize = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
var pluralize_default = __webpack_require__.n(pluralize);
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var PageLoader = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
var core = __webpack_require__("./public/app/core/core.ts");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var UserRolePicker = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
var OrgRolePicker = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _span;












const getServiceAccountsAriaLabel = name => {
  return `Edit service account's ${name} details`;
};

const getServiceAccountsEnabledStatus = disabled => {
  return disabled ? 'Disabled' : 'Enabled';
};

const ServiceAccountListItem = (0,react.memo)(_ref => {
  let {
    serviceAccount,
    onRoleChange,
    roleOptions,
    builtInRoles,
    onSetToRemove
  } = _ref;
  const editUrl = `org/serviceaccounts/${serviceAccount.id}`;
  const styles = (0,src.useStyles2)(getStyles);
  const canUpdateRole = core.Vt.hasPermissionInMetadata(types.bW.ServiceAccountsWrite, serviceAccount);
  const displayRolePicker = core.Vt.hasPermission(types.bW.ActionRolesList) && core.Vt.hasPermission(types.bW.ActionUserRolesList);
  const enableRolePicker = core.Vt.hasPermission(types.bW.OrgUsersRoleUpdate) && canUpdateRole;
  return (0,jsx_runtime.jsxs)("tr", {
    children: [(0,jsx_runtime.jsx)("td", {
      className: "width-4 text-center link-td",
      children: (0,jsx_runtime.jsx)("a", {
        href: editUrl,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: (0,jsx_runtime.jsx)("img", {
          className: "filter-table__avatar",
          src: serviceAccount.avatarUrl,
          alt: `Avatar for user ${serviceAccount.name}`
        })
      })
    }), (0,jsx_runtime.jsx)("td", {
      className: "link-td max-width-10",
      children: (0,jsx_runtime.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: serviceAccount.name,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.name
      })
    }), (0,jsx_runtime.jsx)("td", {
      className: "link-td max-width-10",
      children: (0,jsx_runtime.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: serviceAccount.login,
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: serviceAccount.login
      })
    }), core.Vt.licensedAccessControlEnabled() ? (0,jsx_runtime.jsx)("td", {
      className: (0,emotion_css_esm.cx)('link-td', styles.iconRow),
      children: displayRolePicker && (0,jsx_runtime.jsx)(UserRolePicker.R, {
        userId: serviceAccount.id,
        orgId: serviceAccount.orgId,
        builtInRole: serviceAccount.role,
        onBuiltinRoleChange: newRole => onRoleChange(newRole, serviceAccount),
        roleOptions: roleOptions,
        builtInRoles: builtInRoles,
        disabled: !enableRolePicker
      })
    }) : (0,jsx_runtime.jsx)("td", {
      className: (0,emotion_css_esm.cx)('link-td', styles.iconRow),
      children: (0,jsx_runtime.jsx)(OrgRolePicker.A, {
        "aria-label": "Role",
        value: serviceAccount.role,
        disabled: !canUpdateRole,
        onChange: newRole => onRoleChange(newRole, serviceAccount)
      })
    }), (0,jsx_runtime.jsx)("td", {
      className: "link-td max-width-10",
      children: (0,jsx_runtime.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: getServiceAccountsEnabledStatus(serviceAccount.isDisabled),
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: getServiceAccountsEnabledStatus(serviceAccount.isDisabled)
      })
    }), (0,jsx_runtime.jsx)("td", {
      className: "link-td max-width-10",
      children: (0,jsx_runtime.jsxs)("a", {
        className: "ellipsis",
        href: editUrl,
        title: "Tokens",
        "aria-label": getServiceAccountsAriaLabel(serviceAccount.name),
        children: [_span || (_span = (0,jsx_runtime.jsx)("span", {
          children: (0,jsx_runtime.jsx)(src.Icon, {
            name: 'key-skeleton-alt'
          })
        })), "\xA0", serviceAccount.tokens]
      })
    }), core.Vt.hasPermissionInMetadata(types.bW.ServiceAccountsDelete, serviceAccount) && (0,jsx_runtime.jsx)("td", {
      children: (0,jsx_runtime.jsx)(src.Button, {
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
 const ServiceAccountsListItem = (ServiceAccountListItem);
var actions = __webpack_require__("./public/app/features/serviceaccounts/state/actions.ts");
;
var _h, _LinkButton, _PageLoader, _th, _th2, _th3, _th4, _th5, _th6;


















function mapStateToProps(state) {
  return Object.assign({
    navModel: (0,navModel.h)(state.navIndex, 'serviceaccounts')
  }, state.serviceAccounts);
}

const mapDispatchToProps = {
  fetchServiceAccounts: actions.Xd,
  fetchACOptions: actions.bX,
  updateServiceAccount: actions.TL,
  removeServiceAccount: actions.IR,
  setServiceAccountToRemove: actions.cl,
  changeFilter: actions.M6,
  changeQuery: actions.R5
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

    if (core.Vt.licensedAccessControlEnabled()) {
      fetchACOptions();
    }
  }, [fetchServiceAccounts, fetchACOptions]);

  const onRoleChange = (role, serviceAccount) => {
    const updatedServiceAccount = Object.assign({}, serviceAccount, {
      role: role
    });
    updateServiceAccount(updatedServiceAccount);
  };

  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: navModel,
    children: (0,jsx_runtime.jsxs)(Page.Z.Contents, {
      children: [_h || (_h = (0,jsx_runtime.jsx)("h2", {
        children: "Service accounts"
      })), (0,jsx_runtime.jsxs)("div", {
        className: "page-action-bar",
        style: {
          justifyContent: 'flex-end'
        },
        children: [(0,jsx_runtime.jsx)(src.FilterInput, {
          placeholder: "Search service account by name.",
          autoFocus: true,
          value: query,
          onChange: changeQuery
        }), (0,jsx_runtime.jsx)(src.RadioButtonGroup, {
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
        }), serviceAccounts.length !== 0 && core.Vt.hasPermission(types.bW.ServiceAccountsCreate) && (_LinkButton || (_LinkButton = (0,jsx_runtime.jsx)(src.LinkButton, {
          href: "org/serviceaccounts/create",
          variant: "primary",
          children: "Add service account"
        })))]
      }), isLoading && (_PageLoader || (_PageLoader = (0,jsx_runtime.jsx)(PageLoader.Z, {}))), !isLoading && serviceAccounts.length === 0 && (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: (0,jsx_runtime.jsx)(EmptyListCTA.Z, {
          title: "You haven't created any service accounts yet.",
          buttonIcon: "key-skeleton-alt",
          buttonLink: "org/serviceaccounts/create",
          buttonTitle: "Add service account",
          buttonDisabled: !core.Vt.hasPermission(types.bW.ServiceAccountsCreate),
          proTip: "Remember, you can provide specific permissions for API access to other applications.",
          proTipLink: "",
          proTipLinkTitle: "",
          proTipTarget: "_blank"
        })
      }), !isLoading && serviceAccounts.length !== 0 && (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: (0,jsx_runtime.jsx)("div", {
          className: (0,emotion_css_esm.cx)(styles.table, 'admin-list-table'),
          children: (0,jsx_runtime.jsxs)("table", {
            className: "filter-table form-inline filter-table--hover",
            children: [(0,jsx_runtime.jsx)("thead", {
              children: (0,jsx_runtime.jsxs)("tr", {
                children: [_th || (_th = (0,jsx_runtime.jsx)("th", {})), _th2 || (_th2 = (0,jsx_runtime.jsx)("th", {
                  children: "Account"
                })), _th3 || (_th3 = (0,jsx_runtime.jsx)("th", {
                  children: "ID"
                })), _th4 || (_th4 = (0,jsx_runtime.jsx)("th", {
                  children: "Roles"
                })), _th5 || (_th5 = (0,jsx_runtime.jsx)("th", {
                  children: "Status"
                })), _th6 || (_th6 = (0,jsx_runtime.jsx)("th", {
                  children: "Tokens"
                })), (0,jsx_runtime.jsx)("th", {
                  style: {
                    width: '34px'
                  }
                })]
              })
            }), (0,jsx_runtime.jsx)("tbody", {
              children: serviceAccounts.map(serviceAccount => (0,jsx_runtime.jsx)(ServiceAccountsListItem, {
                serviceAccount: serviceAccount,
                builtInRoles: builtInRoles,
                roleOptions: roleOptions,
                onRoleChange: onRoleChange,
                onSetToRemove: setServiceAccountToRemove
              }, serviceAccount.id))
            })]
          })
        })
      }), serviceAccountToRemove && (0,jsx_runtime.jsx)(src.ConfirmModal, {
        body: (0,jsx_runtime.jsxs)("div", {
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
 const serviceaccounts_ServiceAccountsListPage = (connector(ServiceAccountsListPage));

 })

}]);