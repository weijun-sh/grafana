"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8580],{

 "./public/app/features/admin/UserListAdminPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "addExtraFilters": () => ( addExtraFilters),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
 var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
 var _core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
 var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/index.ts");
 var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/admin/state/actions.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LinkButton, _PageLoader, _th, _th2, _th3, _th4, _th5, _Icon, _th6, _Tooltip, _Tooltip2, _span;















const extraFilters = [];
const addExtraFilters = filter => {
  extraFilters.push(filter);
};
const mapDispatchToProps = {
  fetchUsers: _state_actions__WEBPACK_IMPORTED_MODULE_9__ .uh,
  changeQuery: _state_actions__WEBPACK_IMPORTED_MODULE_9__ .R5,
  changePage: _state_actions__WEBPACK_IMPORTED_MODULE_9__ .oO,
  changeFilter: _state_actions__WEBPACK_IMPORTED_MODULE_9__ .M6
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_11__ .h)(state.navIndex, 'global-users'),
  users: state.userListAdmin.users,
  query: state.userListAdmin.query,
  showPaging: state.userListAdmin.showPaging,
  totalPages: state.userListAdmin.totalPages,
  page: state.userListAdmin.page,
  filters: state.userListAdmin.filters,
  isLoading: state.userListAdmin.isLoading
});

const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);

const UserListAdminPageUnConnected = _ref => {
  var _filters$find;

  let {
    fetchUsers,
    navModel,
    query,
    changeQuery,
    users,
    showPaging,
    totalPages,
    page,
    changePage,
    changeFilter,
    filters,
    isLoading
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchUsers();
  }, [fetchUsers]);
  const showLicensedRole = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => users.some(user => user.licensedRole), [users]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z, {
    navModel: navModel,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z.Contents, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "page-action-bar",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "gf-form gf-form--grow",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FilterInput, {
            placeholder: "Search user by login, email, or name.",
            autoFocus: true,
            value: query,
            onChange: changeQuery
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
            options: [{
              label: 'All users',
              value: false
            }, {
              label: 'Active last 30 days',
              value: true
            }],
            onChange: value => changeFilter({
              name: 'activeLast30Days',
              value
            }),
            value: (_filters$find = filters.find(f => f.name === 'activeLast30Days')) === null || _filters$find === void 0 ? void 0 : _filters$find.value,
            className: styles.filter
          }), extraFilters.map((FilterComponent, index) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(FilterComponent, {
            filters: filters,
            onChange: changeFilter,
            className: styles.filter
          }, index))]
        }), app_core_core__WEBPACK_IMPORTED_MODULE_6__ .Vt.hasPermission(_types__WEBPACK_IMPORTED_MODULE_8__ .bW.UsersCreate) && (_LinkButton || (_LinkButton = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          href: "admin/users/create",
          variant: "primary",
          children: "New user"
        })))]
      }), isLoading ? _PageLoader || (_PageLoader = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__ .Z, {})) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.table, 'admin-list-table'),
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("table", {
            className: "filter-table form-inline filter-table--hover",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("thead", {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
                children: [_th || (_th = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {})), _th2 || (_th2 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                  children: "Login"
                })), _th3 || (_th3 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                  children: "Email"
                })), _th4 || (_th4 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                  children: "Name"
                })), _th5 || (_th5 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                  children: "Belongs to"
                })), showLicensedRole && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("th", {
                  children: ["Licensed role", ' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    placement: "top",
                    content: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
                      children: ["Licensed role is based on a user's Org role (i.e. Viewer, Editor, Admin) and their dashboard/folder permissions.", ' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                        className: styles.link,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: 'https://grafana.com/docs/grafana/next/enterprise/license/license-restrictions/#active-users-limit',
                        children: "Learn more"
                      })]
                    }),
                    children: _Icon || (_Icon = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "question-circle"
                    }))
                  })]
                }), _th6 || (_th6 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("th", {
                  children: ["Last active\xA0", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    placement: "top",
                    content: "Time since user was seen using Grafana",
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "question-circle"
                    })
                  })]
                })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                  style: {
                    width: '1%'
                  }
                })]
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("tbody", {
              children: users.map(user => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(UserListItem, {
                user: user,
                showLicensedRole: showLicensedRole
              }, user.id))
            })]
          })
        }), showPaging && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
          numberOfPages: totalPages,
          currentPage: page,
          onNavigate: changePage
        })]
      })]
    })
  });
};

const getUsersAriaLabel = name => {
  return `Edit user's ${name} details`;
};

const UserListItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_ref2 => {
  var _user$orgs;

  let {
    user,
    showLicensedRole
  } = _ref2;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const editUrl = `admin/users/edit/${user.id}`;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
      className: "width-4 text-center link-td",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
        href: editUrl,
        "aria-label": `Edit user's ${user.name} details`,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
          className: "filter-table__avatar",
          src: user.avatarUrl,
          alt: `Avatar for user ${user.name}`
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
      className: "link-td max-width-10",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.login,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.login
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
      className: "link-td max-width-10",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.email,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.email
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
      className: "link-td max-width-10",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.name,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.name
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("td", {
      className: styles.row,
      title: (_user$orgs = user.orgs) !== null && _user$orgs !== void 0 && _user$orgs.length ? `The user is a member of the following organizations: ${user.orgs.map(org => org.name).join(',')}` : undefined,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(OrgUnits, {
        units: user.orgs,
        icon: 'building'
      }), user.isAdmin && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
        href: editUrl,
        "aria-label": getUsersAriaLabel(user.name),
        children: _Tooltip || (_Tooltip = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          placement: "top",
          content: "Grafana Admin",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "shield"
          })
        }))
      })]
    }), showLicensedRole && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('link-td', styles.iconRow),
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.name,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.licensedRole === 'None' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
          className: styles.disabled,
          children: ["Not assigned", ' ', _Tooltip2 || (_Tooltip2 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
            placement: "top",
            content: "A licensed role will be assigned when this user signs in",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              name: "question-circle"
            })
          }))]
        }) : user.licensedRole
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
      className: "link-td",
      children: user.lastSeenAtAge && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
        href: editUrl,
        "aria-label": `Last seen at ${user.lastSeenAtAge}. Follow to edit user's ${user.name} details.`,
        children: user.lastSeenAtAge === '10 years' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
          className: styles.disabled,
          children: "Never"
        }) : user.lastSeenAtAge
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
      className: "text-right",
      children: Array.isArray(user.authLabels) && user.authLabels.length > 0 && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_5__ .e, {
        label: user.authLabels[0],
        removeIcon: false,
        count: 0
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
      className: "text-right",
      children: user.isDisabled && (_span || (_span = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
        className: "label label-tag label-tag--gray",
        children: "Disabled"
      })))
    })]
  }, user.id);
});
UserListItem.displayName = 'UserListItem';

const OrgUnits = _ref3 => {
  let {
    units,
    icon
  } = _ref3;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  if (!(units !== null && units !== void 0 && units.length)) {
    return null;
  }

  return units.length > 1 ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    placement: 'top',
    content: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: styles.unitTooltip,
      children: units === null || units === void 0 ? void 0 : units.map(unit => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
        href: unit.url,
        className: styles.link,
        title: unit.name,
        "aria-label": `Edit ${unit.name}`,
        children: unit.name
      }, unit.name))
    }),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: styles.unitItem,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: icon
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
        children: units.length
      })]
    })
  }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a", {
    href: units[0].url,
    className: styles.unitItem,
    title: units[0].name,
    "aria-label": `Edit ${units[0].name}`,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      name: icon
    }), " ", units[0].name]
  }, units[0].name);
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

 const __WEBPACK_DEFAULT_EXPORT__ = (connector(UserListAdminPageUnConnected));

 })

}]);