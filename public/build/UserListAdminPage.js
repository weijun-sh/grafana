"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserListAdminPage"],{

/***/ "./public/app/features/admin/UserListAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addExtraFilters": () => (/* binding */ addExtraFilters),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
/* harmony import */ var _core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/admin/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LinkButton, _PageLoader, _th, _th2, _th3, _th4, _th5, _Icon, _th6, _Tooltip, _Tooltip2, _span;















const extraFilters = [];
const addExtraFilters = filter => {
  extraFilters.push(filter);
};
const mapDispatchToProps = {
  fetchUsers: _state_actions__WEBPACK_IMPORTED_MODULE_10__.fetchUsers,
  changeQuery: _state_actions__WEBPACK_IMPORTED_MODULE_10__.changeQuery,
  changePage: _state_actions__WEBPACK_IMPORTED_MODULE_10__.changePage,
  changeFilter: _state_actions__WEBPACK_IMPORTED_MODULE_10__.changeFilter
};

const mapStateToProps = state => ({
  navModel: (0,_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__.getNavModel)(state.navIndex, 'global-users'),
  users: state.userListAdmin.users,
  query: state.userListAdmin.query,
  showPaging: state.userListAdmin.showPaging,
  totalPages: state.userListAdmin.totalPages,
  page: state.userListAdmin.page,
  filters: state.userListAdmin.filters,
  isLoading: state.userListAdmin.isLoading
});

const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);

const UserListAdminPageUnConnected = ({
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
}) => {
  var _filters$find;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchUsers();
  }, [fetchUsers]);
  const showLicensedRole = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => users.some(user => user.licensedRole), [users]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "gf-form gf-form--grow",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FilterInput, {
            placeholder: "Search user by login, email, or name.",
            autoFocus: true,
            value: query,
            onChange: changeQuery
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
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
          }), extraFilters.map((FilterComponent, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FilterComponent, {
            filters: filters,
            onChange: changeFilter,
            className: styles.filter
          }, index))]
        }), app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.UsersCreate) && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          href: "admin/users/create",
          variant: "primary",
          children: "New user"
        })))]
      }), isLoading ? _PageLoader || (_PageLoader = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {})) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.table, 'admin-list-table'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("table", {
            className: "filter-table form-inline filter-table--hover",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  children: "Login"
                })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  children: "Email"
                })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  children: "Name"
                })), _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  children: "Belongs to"
                })), showLicensedRole && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("th", {
                  children: ["Licensed role", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    placement: "top",
                    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                      children: ["Licensed role is based on a user's Org role (i.e. Viewer, Editor, Admin) and their dashboard/folder permissions.", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
                        className: styles.link,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: 'https://grafana.com/docs/grafana/next/enterprise/license/license-restrictions/#active-users-limit',
                        children: "Learn more"
                      })]
                    }),
                    children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "question-circle"
                    }))
                  })]
                }), _th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("th", {
                  children: ["Last active\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                    placement: "top",
                    content: "Time since user was seen using Grafana",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "question-circle"
                    })
                  })]
                })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("th", {
                  style: {
                    width: '1%'
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("tbody", {
              children: users.map(user => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(UserListItem, {
                user: user,
                showLicensedRole: showLicensedRole
              }, user.id))
            })]
          })
        }), showPaging && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
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

const UserListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({
  user,
  showLicensedRole
}) => {
  var _user$orgs;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const editUrl = `admin/users/edit/${user.id}`;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("tr", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "width-4 text-center link-td",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: editUrl,
        "aria-label": `Edit user's ${user.name} details`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
          className: "filter-table__avatar",
          src: user.avatarUrl,
          alt: `Avatar for user ${user.name}`
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.login,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.login
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.email,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.email
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "link-td max-width-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.name,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.name
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("td", {
      className: styles.row,
      title: (_user$orgs = user.orgs) !== null && _user$orgs !== void 0 && _user$orgs.length ? `The user is a member of the following organizations: ${user.orgs.map(org => org.name).join(',')}` : undefined,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(OrgUnits, {
        units: user.orgs,
        icon: 'building'
      }), user.isAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: editUrl,
        "aria-label": getUsersAriaLabel(user.name),
        children: _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          placement: "top",
          content: "Grafana Admin",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "shield"
          })
        }))
      })]
    }), showLicensedRole && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('link-td', styles.iconRow),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        className: "ellipsis",
        href: editUrl,
        title: user.name,
        "aria-label": getUsersAriaLabel(user.name),
        children: user.licensedRole === 'None' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
          className: styles.disabled,
          children: ["Not assigned", ' ', _Tooltip2 || (_Tooltip2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
            placement: "top",
            content: "A licensed role will be assigned when this user signs in",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              name: "question-circle"
            })
          }))]
        }) : user.licensedRole
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "link-td",
      children: user.lastSeenAtAge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: editUrl,
        "aria-label": `Last seen at ${user.lastSeenAtAge}. Follow to edit user's ${user.name} details.`,
        children: user.lastSeenAtAge === '10 years' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          className: styles.disabled,
          children: "Never"
        }) : user.lastSeenAtAge
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "text-right",
      children: Array.isArray(user.authLabels) && user.authLabels.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_5__.TagBadge, {
        label: user.authLabels[0],
        removeIcon: false,
        count: 0
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("td", {
      className: "text-right",
      children: user.isDisabled && (_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
        className: "label label-tag label-tag--gray",
        children: "Disabled"
      })))
    })]
  }, user.id);
});
UserListItem.displayName = 'UserListItem';

const OrgUnits = ({
  units,
  icon
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  if (!(units !== null && units !== void 0 && units.length)) {
    return null;
  }

  return units.length > 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
    placement: 'top',
    content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.unitTooltip,
      children: units === null || units === void 0 ? void 0 : units.map(unit => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: unit.url,
        className: styles.link,
        title: unit.name,
        "aria-label": `Edit ${unit.name}`,
        children: unit.name
      }, unit.name))
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.unitItem,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: icon
      }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
        children: units.length
      })]
    })
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
    href: units[0].url,
    className: styles.unitItem,
    title: units[0].name,
    "aria-label": `Edit ${units[0].name}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UserListAdminPageUnConnected));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJO0FBQ2xCO0FBQ0EsaUJBQWlCMkYsS0FBSyxDQUFDQyxPQUFOLENBQWMsR0FBZCxDQUFtQjtBQUNwQyxzQkFBc0JELEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdkMsS0E3QlM7QUE4QkxmLElBQUFBLFFBQVEsRUFBRTdFLDZDQUFJO0FBQ2xCLGVBQWUyRixLQUFLLENBQUNFLE1BQU4sQ0FBYUMsSUFBYixDQUFrQmpCLFFBQVM7QUFDMUMsS0FoQ1M7QUFpQ0xqQixJQUFBQSxJQUFJLEVBQUU1RCw2Q0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBckNTLEdBQVA7QUF1Q0QsQ0F4Q0Q7O0FBMENBLGlFQUFleUMsU0FBUyxDQUFDQyw0QkFBRCxDQUF4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL1VzZXJMaXN0QWRtaW5QYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRUeXBlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHtcbiAgSWNvbixcbiAgSWNvbk5hbWUsXG4gIExpbmtCdXR0b24sXG4gIFBhZ2luYXRpb24sXG4gIFJhZGlvQnV0dG9uR3JvdXAsXG4gIFRvb2x0aXAsXG4gIHVzZVN0eWxlczIsXG4gIEZpbHRlcklucHV0LFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBUYWdCYWRnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVGFnRmlsdGVyL1RhZ0JhZGdlJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcblxuaW1wb3J0IFBhZ2VMb2FkZXIgZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL1BhZ2VMb2FkZXIvUGFnZUxvYWRlcic7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJy4uLy4uL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFN0b3JlU3RhdGUsIFVuaXQsIFVzZXJEVE8sIFVzZXJGaWx0ZXIgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IGNoYW5nZUZpbHRlciwgY2hhbmdlUGFnZSwgY2hhbmdlUXVlcnksIGZldGNoVXNlcnMgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlclByb3BzIHtcbiAgZmlsdGVyczogVXNlckZpbHRlcltdO1xuICBvbkNoYW5nZTogKGZpbHRlcjogYW55KSA9PiB2b2lkO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5jb25zdCBleHRyYUZpbHRlcnM6IEFycmF5PENvbXBvbmVudFR5cGU8RmlsdGVyUHJvcHM+PiA9IFtdO1xuZXhwb3J0IGNvbnN0IGFkZEV4dHJhRmlsdGVycyA9IChmaWx0ZXI6IENvbXBvbmVudFR5cGU8RmlsdGVyUHJvcHM+KSA9PiB7XG4gIGV4dHJhRmlsdGVycy5wdXNoKGZpbHRlcik7XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGZldGNoVXNlcnMsXG4gIGNoYW5nZVF1ZXJ5LFxuICBjaGFuZ2VQYWdlLFxuICBjaGFuZ2VGaWx0ZXIsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ2dsb2JhbC11c2VycycpLFxuICB1c2Vyczogc3RhdGUudXNlckxpc3RBZG1pbi51c2VycyxcbiAgcXVlcnk6IHN0YXRlLnVzZXJMaXN0QWRtaW4ucXVlcnksXG4gIHNob3dQYWdpbmc6IHN0YXRlLnVzZXJMaXN0QWRtaW4uc2hvd1BhZ2luZyxcbiAgdG90YWxQYWdlczogc3RhdGUudXNlckxpc3RBZG1pbi50b3RhbFBhZ2VzLFxuICBwYWdlOiBzdGF0ZS51c2VyTGlzdEFkbWluLnBhZ2UsXG4gIGZpbHRlcnM6IHN0YXRlLnVzZXJMaXN0QWRtaW4uZmlsdGVycyxcbiAgaXNMb2FkaW5nOiBzdGF0ZS51c2VyTGlzdEFkbWluLmlzTG9hZGluZyxcbn0pO1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuaW50ZXJmYWNlIE93blByb3BzIHt9XG5cbnR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5jb25zdCBVc2VyTGlzdEFkbWluUGFnZVVuQ29ubmVjdGVkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBmZXRjaFVzZXJzLFxuICBuYXZNb2RlbCxcbiAgcXVlcnksXG4gIGNoYW5nZVF1ZXJ5LFxuICB1c2VycyxcbiAgc2hvd1BhZ2luZyxcbiAgdG90YWxQYWdlcyxcbiAgcGFnZSxcbiAgY2hhbmdlUGFnZSxcbiAgY2hhbmdlRmlsdGVyLFxuICBmaWx0ZXJzLFxuICBpc0xvYWRpbmcsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVXNlcnMoKTtcbiAgfSwgW2ZldGNoVXNlcnNdKTtcblxuICBjb25zdCBzaG93TGljZW5zZWRSb2xlID0gdXNlTWVtbygoKSA9PiB1c2Vycy5zb21lKCh1c2VyKSA9PiB1c2VyLmxpY2Vuc2VkUm9sZSksIFt1c2Vyc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgICA8RmlsdGVySW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdXNlciBieSBsb2dpbiwgZW1haWwsIG9yIG5hbWUuXCJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VRdWVyeX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0FsbCB1c2VycycsIHZhbHVlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdBY3RpdmUgbGFzdCAzMCBkYXlzJywgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gY2hhbmdlRmlsdGVyKHsgbmFtZTogJ2FjdGl2ZUxhc3QzMERheXMnLCB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlcnMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnYWN0aXZlTGFzdDMwRGF5cycpPy52YWx1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtleHRyYUZpbHRlcnMubWFwKChGaWx0ZXJDb21wb25lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxGaWx0ZXJDb21wb25lbnQga2V5PXtpbmRleH0gZmlsdGVycz17ZmlsdGVyc30gb25DaGFuZ2U9e2NoYW5nZUZpbHRlcn0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2NvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLlVzZXJzQ3JlYXRlKSAmJiAoXG4gICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPVwiYWRtaW4vdXNlcnMvY3JlYXRlXCIgdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgTmV3IHVzZXJcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2lzTG9hZGluZyA/IChcbiAgICAgICAgICA8UGFnZUxvYWRlciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnRhYmxlLCAnYWRtaW4tbGlzdC10YWJsZScpfT5cbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZSBmaWx0ZXItdGFibGUtLWhvdmVyXCI+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkxvZ2luPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+QmVsb25ncyB0bzwvdGg+XG4gICAgICAgICAgICAgICAgICAgIHtzaG93TGljZW5zZWRSb2xlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBMaWNlbnNlZCByb2xleycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaWNlbnNlZCByb2xlIGlzIGJhc2VkIG9uIGEgdXNlciZhcG9zO3MgT3JnIHJvbGUgKGkuZS4gVmlld2VyLCBFZGl0b3IsIEFkbWluKSBhbmQgdGhlaXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZC9mb2xkZXIgcGVybWlzc2lvbnMueycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbmV4dC9lbnRlcnByaXNlL2xpY2Vuc2UvbGljZW5zZS1yZXN0cmljdGlvbnMvI2FjdGl2ZS11c2Vycy1saW1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWFybiBtb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIExhc3QgYWN0aXZlJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgY29udGVudD1cIlRpbWUgc2luY2UgdXNlciB3YXMgc2VlbiB1c2luZyBHcmFmYW5hXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzElJyB9fT48L3RoPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJMaXN0SXRlbSB1c2VyPXt1c2VyfSBzaG93TGljZW5zZWRSb2xlPXtzaG93TGljZW5zZWRSb2xlfSBrZXk9e3VzZXIuaWR9IC8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2hvd1BhZ2luZyAmJiA8UGFnaW5hdGlvbiBudW1iZXJPZlBhZ2VzPXt0b3RhbFBhZ2VzfSBjdXJyZW50UGFnZT17cGFnZX0gb25OYXZpZ2F0ZT17Y2hhbmdlUGFnZX0gLz59XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuY29uc3QgZ2V0VXNlcnNBcmlhTGFiZWwgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBgRWRpdCB1c2VyJ3MgJHtuYW1lfSBkZXRhaWxzYDtcbn07XG5cbnR5cGUgVXNlckxpc3RJdGVtUHJvcHMgPSB7XG4gIHVzZXI6IFVzZXJEVE87XG4gIHNob3dMaWNlbnNlZFJvbGU6IGJvb2xlYW47XG59O1xuXG5jb25zdCBVc2VyTGlzdEl0ZW0gPSBtZW1vKCh7IHVzZXIsIHNob3dMaWNlbnNlZFJvbGUgfTogVXNlckxpc3RJdGVtUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBlZGl0VXJsID0gYGFkbWluL3VzZXJzL2VkaXQvJHt1c2VyLmlkfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8dHIga2V5PXt1c2VyLmlkfT5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC00IHRleHQtY2VudGVyIGxpbmstdGRcIj5cbiAgICAgICAgPGEgaHJlZj17ZWRpdFVybH0gYXJpYS1sYWJlbD17YEVkaXQgdXNlcidzICR7dXNlci5uYW1lfSBkZXRhaWxzYH0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVfX2F2YXRhclwiIHNyYz17dXNlci5hdmF0YXJVcmx9IGFsdD17YEF2YXRhciBmb3IgdXNlciAke3VzZXIubmFtZX1gfSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGQgbWF4LXdpZHRoLTEwXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgaHJlZj17ZWRpdFVybH0gdGl0bGU9e3VzZXIubG9naW59IGFyaWEtbGFiZWw9e2dldFVzZXJzQXJpYUxhYmVsKHVzZXIubmFtZSl9PlxuICAgICAgICAgIHt1c2VyLmxvZ2lufVxuICAgICAgICA8L2E+XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGQgbWF4LXdpZHRoLTEwXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgaHJlZj17ZWRpdFVybH0gdGl0bGU9e3VzZXIuZW1haWx9IGFyaWEtbGFiZWw9e2dldFVzZXJzQXJpYUxhYmVsKHVzZXIubmFtZSl9PlxuICAgICAgICAgIHt1c2VyLmVtYWlsfVxuICAgICAgICA8L2E+XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGQgbWF4LXdpZHRoLTEwXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgaHJlZj17ZWRpdFVybH0gdGl0bGU9e3VzZXIubmFtZX0gYXJpYS1sYWJlbD17Z2V0VXNlcnNBcmlhTGFiZWwodXNlci5uYW1lKX0+XG4gICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgPC90ZD5cblxuICAgICAgPHRkXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvd31cbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIHVzZXIub3Jncz8ubGVuZ3RoXG4gICAgICAgICAgICA/IGBUaGUgdXNlciBpcyBhIG1lbWJlciBvZiB0aGUgZm9sbG93aW5nIG9yZ2FuaXphdGlvbnM6ICR7dXNlci5vcmdzLm1hcCgob3JnKSA9PiBvcmcubmFtZSkuam9pbignLCcpfWBcbiAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPE9yZ1VuaXRzIHVuaXRzPXt1c2VyLm9yZ3N9IGljb249eydidWlsZGluZyd9IC8+XG4gICAgICAgIHt1c2VyLmlzQWRtaW4gJiYgKFxuICAgICAgICAgIDxhIGhyZWY9e2VkaXRVcmx9IGFyaWEtbGFiZWw9e2dldFVzZXJzQXJpYUxhYmVsKHVzZXIubmFtZSl9PlxuICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgY29udGVudD1cIkdyYWZhbmEgQWRtaW5cIj5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInNoaWVsZFwiIC8+XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgPC90ZD5cbiAgICAgIHtzaG93TGljZW5zZWRSb2xlICYmIChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT17Y3goJ2xpbmstdGQnLCBzdHlsZXMuaWNvblJvdyl9PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgaHJlZj17ZWRpdFVybH0gdGl0bGU9e3VzZXIubmFtZX0gYXJpYS1sYWJlbD17Z2V0VXNlcnNBcmlhTGFiZWwodXNlci5uYW1lKX0+XG4gICAgICAgICAgICB7dXNlci5saWNlbnNlZFJvbGUgPT09ICdOb25lJyA/IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgIE5vdCBhc3NpZ25lZHsnICd9XG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgY29udGVudD1cIkEgbGljZW5zZWQgcm9sZSB3aWxsIGJlIGFzc2lnbmVkIHdoZW4gdGhpcyB1c2VyIHNpZ25zIGluXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicXVlc3Rpb24tY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIHVzZXIubGljZW5zZWRSb2xlXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC90ZD5cbiAgICAgICl9XG4gICAgICA8dGQgY2xhc3NOYW1lPVwibGluay10ZFwiPlxuICAgICAgICB7dXNlci5sYXN0U2VlbkF0QWdlICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17ZWRpdFVybH1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2BMYXN0IHNlZW4gYXQgJHt1c2VyLmxhc3RTZWVuQXRBZ2V9LiBGb2xsb3cgdG8gZWRpdCB1c2VyJ3MgJHt1c2VyLm5hbWV9IGRldGFpbHMuYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dXNlci5sYXN0U2VlbkF0QWdlID09PSAnMTAgeWVhcnMnID8gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGlzYWJsZWR9Pk5ldmVyPC9zcGFuPiA6IHVzZXIubGFzdFNlZW5BdEFnZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG4gICAgICA8L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAge0FycmF5LmlzQXJyYXkodXNlci5hdXRoTGFiZWxzKSAmJiB1c2VyLmF1dGhMYWJlbHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPFRhZ0JhZGdlIGxhYmVsPXt1c2VyLmF1dGhMYWJlbHNbMF19IHJlbW92ZUljb249e2ZhbHNlfSBjb3VudD17MH0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICB7dXNlci5pc0Rpc2FibGVkICYmIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLXRhZyBsYWJlbC10YWctLWdyYXlcIj5EaXNhYmxlZDwvc3Bhbj59XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59KTtcblxuVXNlckxpc3RJdGVtLmRpc3BsYXlOYW1lID0gJ1VzZXJMaXN0SXRlbSc7XG5cbnR5cGUgT3JnVW5pdFByb3BzID0geyB1bml0cz86IFVuaXRbXTsgaWNvbjogSWNvbk5hbWUgfTtcblxuY29uc3QgT3JnVW5pdHMgPSAoeyB1bml0cywgaWNvbiB9OiBPcmdVbml0UHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghdW5pdHM/Lmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHVuaXRzLmxlbmd0aCA+IDEgPyAoXG4gICAgPFRvb2x0aXBcbiAgICAgIHBsYWNlbWVudD17J3RvcCd9XG4gICAgICBjb250ZW50PXtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bml0VG9vbHRpcH0+XG4gICAgICAgICAge3VuaXRzPy5tYXAoKHVuaXQpID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e3VuaXQudXJsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5rfVxuICAgICAgICAgICAgICB0aXRsZT17dW5pdC5uYW1lfVxuICAgICAgICAgICAgICBrZXk9e3VuaXQubmFtZX1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YEVkaXQgJHt1bml0Lm5hbWV9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3VuaXQubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bml0SXRlbX0+XG4gICAgICAgIDxJY29uIG5hbWU9e2ljb259IC8+IDxzcGFuPnt1bml0cy5sZW5ndGh9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9Ub29sdGlwPlxuICApIDogKFxuICAgIDxhXG4gICAgICBocmVmPXt1bml0c1swXS51cmx9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy51bml0SXRlbX1cbiAgICAgIHRpdGxlPXt1bml0c1swXS5uYW1lfVxuICAgICAga2V5PXt1bml0c1swXS5uYW1lfVxuICAgICAgYXJpYS1sYWJlbD17YEVkaXQgJHt1bml0c1swXS5uYW1lfWB9XG4gICAgPlxuICAgICAgPEljb24gbmFtZT17aWNvbn0gLz4ge3VuaXRzWzBdLm5hbWV9XG4gICAgPC9hPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFibGU6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgYCxcbiAgICBmaWx0ZXI6IGNzc2BcbiAgICAgIG1hcmdpbjogMCAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgaWNvblJvdzogY3NzYFxuICAgICAgc3ZnIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcblxuICAgICAgYSB7XG4gICAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLjUpfSAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgYCxcbiAgICB1bml0VG9vbHRpcDogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYCxcbiAgICB1bml0SXRlbTogY3NzYFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDAuNSl9IDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBkaXNhYmxlZDogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuZGlzYWJsZWR9O1xuICAgIGAsXG4gICAgbGluazogY3NzYFxuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKFVzZXJMaXN0QWRtaW5QYWdlVW5Db25uZWN0ZWQpO1xuIl0sIm5hbWVzIjpbImNzcyIsImN4IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwibWVtbyIsImNvbm5lY3QiLCJJY29uIiwiTGlua0J1dHRvbiIsIlBhZ2luYXRpb24iLCJSYWRpb0J1dHRvbkdyb3VwIiwiVG9vbHRpcCIsInVzZVN0eWxlczIiLCJGaWx0ZXJJbnB1dCIsIlBhZ2UiLCJUYWdCYWRnZSIsImNvbnRleHRTcnYiLCJQYWdlTG9hZGVyIiwiZ2V0TmF2TW9kZWwiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiY2hhbmdlRmlsdGVyIiwiY2hhbmdlUGFnZSIsImNoYW5nZVF1ZXJ5IiwiZmV0Y2hVc2VycyIsImV4dHJhRmlsdGVycyIsImFkZEV4dHJhRmlsdGVycyIsImZpbHRlciIsInB1c2giLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJ1c2VycyIsInVzZXJMaXN0QWRtaW4iLCJxdWVyeSIsInNob3dQYWdpbmciLCJ0b3RhbFBhZ2VzIiwicGFnZSIsImZpbHRlcnMiLCJpc0xvYWRpbmciLCJjb25uZWN0b3IiLCJVc2VyTGlzdEFkbWluUGFnZVVuQ29ubmVjdGVkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwic2hvd0xpY2Vuc2VkUm9sZSIsInNvbWUiLCJ1c2VyIiwibGljZW5zZWRSb2xlIiwibGFiZWwiLCJ2YWx1ZSIsIm5hbWUiLCJmaW5kIiwiZiIsIm1hcCIsIkZpbHRlckNvbXBvbmVudCIsImluZGV4IiwiaGFzUGVybWlzc2lvbiIsIlVzZXJzQ3JlYXRlIiwidGFibGUiLCJsaW5rIiwid2lkdGgiLCJpZCIsImdldFVzZXJzQXJpYUxhYmVsIiwiVXNlckxpc3RJdGVtIiwiZWRpdFVybCIsImF2YXRhclVybCIsImxvZ2luIiwiZW1haWwiLCJyb3ciLCJvcmdzIiwibGVuZ3RoIiwib3JnIiwiam9pbiIsInVuZGVmaW5lZCIsImlzQWRtaW4iLCJpY29uUm93IiwiZGlzYWJsZWQiLCJsYXN0U2VlbkF0QWdlIiwiQXJyYXkiLCJpc0FycmF5IiwiYXV0aExhYmVscyIsImlzRGlzYWJsZWQiLCJkaXNwbGF5TmFtZSIsIk9yZ1VuaXRzIiwidW5pdHMiLCJpY29uIiwidW5pdFRvb2x0aXAiLCJ1bml0IiwidXJsIiwidW5pdEl0ZW0iLCJ0aGVtZSIsInNwYWNpbmciLCJjb2xvcnMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==