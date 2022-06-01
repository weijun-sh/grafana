"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3082],{

/***/ "./public/app/features/api-keys/ApiKeysPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ApiKeysPageUnconnected": () => (/* binding */ ApiKeysPageUnconnected),
  "default": () => (/* binding */ api_keys_ApiKeysPage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/app_events.ts
var app_events = __webpack_require__("./public/app/core/app_events.ts");
// EXTERNAL MODULE: ./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/core/core.ts
var core = __webpack_require__("./public/app/core/core.ts");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./public/app/features/profile/state/selectors.ts
var selectors = __webpack_require__("./public/app/features/profile/state/selectors.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/types/events.ts
var events = __webpack_require__("./public/app/types/events.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/api-keys/ApiKeysActionBar.tsx




const ApiKeysActionBar = _ref => {
  let {
    searchQuery,
    disabled,
    onAddClick,
    onSearchChange
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "page-action-bar",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form gf-form--grow",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
        placeholder: "Search keys",
        value: searchQuery,
        onChange: onSearchChange
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      className: "pull-right",
      onClick: onAddClick,
      disabled: disabled,
      children: "Add API key"
    })]
  });
};
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./public/app/core/actions/index.ts
var actions = __webpack_require__("./public/app/core/actions/index.ts");
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./public/app/store/store.ts
var store = __webpack_require__("./public/app/store/store.ts");
;// CONCATENATED MODULE: ./public/app/features/api-keys/ApiKeysAddedModal.tsx
var _Icon, _Alert, _p;









function ApiKeysAddedModal(_ref) {
  let {
    onDismiss,
    apiKey,
    rootPath
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const getClipboardText = (0,react.useCallback)(() => apiKey, [apiKey]);

  const onClipboardCopy = () => {
    (0,store/* dispatch */.WI)((0,actions/* notifyApp */.$l)((0,appNotification/* createSuccessNotification */.AT)('Content copied to clipboard')));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Modal, {
    title: "API Key Created",
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    isOpen: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: "Key",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: "Key",
        value: apiKey,
        readOnly: true,
        addonAfter: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.ClipboardButton, {
          variant: "primary",
          getText: getClipboardText,
          onClipboardCopy: onClipboardCopy,
          children: [_Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "copy"
          })), " Copy"]
        })
      })
    }), _Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: "info",
      title: "You will only be able to view this key here once!",
      children: "It is not stored in this form, so be sure to copy it now."
    })), _p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      className: "text-muted",
      children: "You can authenticate a request using the Authorization HTTP header, example:"
    })), /*#__PURE__*/(0,jsx_runtime.jsxs)("pre", {
      className: styles.small,
      children: ["curl -H \"Authorization: Bearer ", apiKey, "\" ", rootPath, "/api/dashboards/home"]
    })]
  });
}

function getStyles(theme) {
  return {
    label: emotion_css_esm.css`
      padding: ${theme.spacing(1)};
      background-color: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
    `,
    small: emotion_css_esm.css`
      font-size: ${theme.typography.bodySmall.fontSize};
      font-weight: ${theme.typography.bodySmall.fontWeight};
    `
  };
}
;// CONCATENATED MODULE: ./public/app/features/api-keys/ApiKeysController.tsx

const ApiKeysController = _ref => {
  let {
    children
  } = _ref;
  const [isAdding, setIsAdding] = (0,react.useState)(false);
  const toggleIsAdding = (0,react.useCallback)(() => {
    setIsAdding(!isAdding);
  }, [isAdding]);
  return children({
    isAdding,
    toggleIsAdding
  });
};
// EXTERNAL MODULE: ./public/app/core/components/CloseButton/CloseButton.tsx
var CloseButton = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
// EXTERNAL MODULE: ./public/app/core/components/Animations/SlideDown.tsx
var SlideDown = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
;// CONCATENATED MODULE: ./public/app/features/api-keys/ApiKeysForm.tsx
var _h, _span;









const {
  Input
} = grafana_ui_src.LegacyForms;
const ROLE_OPTIONS = Object.keys(types/* OrgRole */.B5).map(role => ({
  label: role,
  value: role
}));

function isValidInterval(value) {
  if (!value) {
    return true;
  }

  try {
    src.rangeUtil.intervalToSeconds(value);
    return true;
  } catch {}

  return false;
}

const timeRangeValidationEvents = {
  [grafana_ui_src.EventsWithValidation.onBlur]: [{
    rule: isValidInterval,
    errorMessage: 'Not a valid duration'
  }]
};
const tooltipText = 'The API key life duration. For example, 1d if your key is going to last for one day. Supported units are: s,m,h,d,w,M,y';
const ApiKeysForm = _ref => {
  let {
    show,
    onClose,
    onKeyAdded,
    disabled
  } = _ref;
  const [name, setName] = (0,react.useState)('');
  const [role, setRole] = (0,react.useState)(types/* OrgRole.Viewer */.B5.Viewer);
  const [secondsToLive, setSecondsToLive] = (0,react.useState)('');
  (0,react.useEffect)(() => {
    setName('');
    setRole(types/* OrgRole.Viewer */.B5.Viewer);
    setSecondsToLive('');
  }, [show]);

  const onSubmit = event => {
    event.preventDefault();

    if (isValidInterval(secondsToLive)) {
      onKeyAdded({
        name,
        role,
        secondsToLive
      });
      onClose();
    }
  };

  const onNameChange = event => {
    setName(event.currentTarget.value);
  };

  const onRoleChange = role => {
    setRole(role.value);
  };

  const onSecondsToLiveChange = event => {
    setSecondsToLive(event.currentTarget.value);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(SlideDown/* SlideDown */.s, {
    in: show,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "gf-form-inline cta-form",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CloseButton/* CloseButton */.P, {
        onClick: onClose
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
        className: "gf-form-group",
        onSubmit: onSubmit,
        children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
          children: "Add API Key"
        })), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form-inline",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "gf-form max-width-21",
            children: [_span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: "gf-form-label",
              children: "Key name"
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              type: "text",
              className: "gf-form-input",
              value: name,
              placeholder: "Name",
              onChange: onNameChange
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
              label: "Role",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
                inputId: "role-select",
                value: role,
                onChange: onRoleChange,
                options: ROLE_OPTIONS
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form max-width-21",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
              tooltip: tooltipText,
              label: "Time to live",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
                id: "time-to-live-input",
                type: "text",
                placeholder: "1d",
                validationEvents: timeRangeValidationEvents,
                value: secondsToLive,
                onChange: onSecondsToLiveChange
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              type: "submit",
              disabled: disabled,
              children: "Add"
            })
          })]
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./public/app/features/api-keys/ApiKeysTable.tsx
var _th, _th2, _th3;









const ApiKeysTable = _ref => {
  let {
    apiKeys,
    timeZone,
    onDelete
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = ApiKeysTable_getStyles(theme);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
    className: "filter-table",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
        children: [_th || (_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
          children: "Name"
        })), _th2 || (_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
          children: "Role"
        })), _th3 || (_th3 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
          children: "Expires"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
          style: {
            width: '34px'
          }
        })]
      })
    }), apiKeys.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
      children: apiKeys.map(key => {
        const isExpired = Boolean(key.expiration && Date.now() > new Date(key.expiration).getTime());
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          className: styles.tableRow(isExpired),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: key.name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: key.role
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
            children: [formatDate(key.expiration, timeZone), isExpired && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: styles.tooltipContainer,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
                content: "This API key has expired.",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                  name: 'exclamation-triangle'
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.DeleteButton, {
              "aria-label": "Delete API key",
              size: "sm",
              onConfirm: () => onDelete(key),
              disabled: !core/* contextSrv.hasPermissionInMetadata */.Vt.hasPermissionInMetadata(types/* AccessControlAction.ActionAPIKeysDelete */.bW.ActionAPIKeysDelete, key)
            })
          })]
        }, key.id);
      })
    }) : null]
  });
};

function formatDate(expiration, timeZone) {
  if (!expiration) {
    return 'No expiration date';
  }

  return (0,src.dateTimeFormat)(expiration, {
    timeZone
  });
}

const ApiKeysTable_getStyles = theme => ({
  tableRow: isExpired => emotion_css_esm.css`
    color: ${isExpired ? theme.colors.text.secondary : theme.colors.text.primary};
  `,
  tooltipContainer: emotion_css_esm.css`
    margin-left: ${theme.spacing(1)};
  `
});
// EXTERNAL MODULE: ./public/app/core/services/backend_srv.ts + 4 modules
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
// EXTERNAL MODULE: ./public/app/features/api-keys/state/reducers.ts
var reducers = __webpack_require__("./public/app/features/api-keys/state/reducers.ts");
;// CONCATENATED MODULE: ./public/app/features/api-keys/state/actions.ts


function addApiKey(apiKey, openModal) {
  return async dispatch => {
    const result = await (0,backend_srv/* getBackendSrv */.i)().post('/api/auth/keys', apiKey);
    dispatch((0,reducers/* setSearchQuery */.ql)(''));
    dispatch(loadApiKeys());
    openModal(result.key);
  };
}
function loadApiKeys() {
  return async dispatch => {
    dispatch((0,reducers/* isFetching */.dF)());
    const [keys, keysIncludingExpired] = await Promise.all([(0,backend_srv/* getBackendSrv */.i)().get('/api/auth/keys?includeExpired=false&accesscontrol=true'), (0,backend_srv/* getBackendSrv */.i)().get('/api/auth/keys?includeExpired=true&accesscontrol=true')]);
    dispatch((0,reducers/* apiKeysLoaded */.iK)({
      keys,
      keysIncludingExpired
    }));
  };
}
function deleteApiKey(id) {
  return async dispatch => {
    (0,backend_srv/* getBackendSrv */.i)().delete(`/api/auth/keys/${id}`).then(() => dispatch(loadApiKeys()));
  };
}
function toggleIncludeExpired() {
  return dispatch => {
    dispatch((0,reducers/* includeExpiredToggled */.j4)());
  };
}
;// CONCATENATED MODULE: ./public/app/features/api-keys/state/selectors.ts
const getApiKeysCount = state => state.includeExpired ? state.keysIncludingExpired.length : state.keys.length;
const getApiKeys = state => {
  const regex = RegExp(state.searchQuery, 'i');
  const keysToFilter = state.includeExpired ? state.keysIncludingExpired : state.keys;
  return keysToFilter.filter(key => {
    return regex.test(key.name) || regex.test(key.role);
  });
};
const getIncludeExpired = state => state.includeExpired;
const getIncludeExpiredDisabled = state => state.keys.length === 0 && state.keysIncludingExpired.length > 0;
;// CONCATENATED MODULE: ./public/app/features/api-keys/ApiKeysPage.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Utils
























function mapStateToProps(state) {
  const canCreate = core/* contextSrv.hasAccess */.Vt.hasAccess(types/* AccessControlAction.ActionAPIKeysCreate */.bW.ActionAPIKeysCreate, true);
  return {
    navModel: (0,navModel/* getNavModel */.h)(state.navIndex, 'apikeys'),
    apiKeys: getApiKeys(state.apiKeys),
    searchQuery: state.apiKeys.searchQuery,
    apiKeysCount: getApiKeysCount(state.apiKeys),
    hasFetched: state.apiKeys.hasFetched,
    timeZone: (0,selectors/* getTimeZone */.Z)(state.user),
    includeExpired: getIncludeExpired(state.apiKeys),
    includeExpiredDisabled: getIncludeExpiredDisabled(state.apiKeys),
    canCreate: canCreate
  };
}

const mapDispatchToProps = {
  loadApiKeys: loadApiKeys,
  deleteApiKey: deleteApiKey,
  setSearchQuery: reducers/* setSearchQuery */.ql,
  toggleIncludeExpired: toggleIncludeExpired,
  addApiKey: addApiKey
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);
class ApiKeysPageUnconnected extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDeleteApiKey", key => {
      this.props.deleteApiKey(key.id);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchQuery(value);
    });

    _defineProperty(this, "onIncludeExpiredChange", event => {
      this.props.toggleIncludeExpired();
    });

    _defineProperty(this, "onAddApiKey", newApiKey => {
      const openModal = apiKey => {
        const rootPath = window.location.origin + config/* default.appSubUrl */.ZP.appSubUrl;
        app_events/* default.publish */.Z.publish(new events/* ShowModalReactEvent */.Dn({
          props: {
            apiKey,
            rootPath
          },
          component: ApiKeysAddedModal
        }));
      };

      const secondsToLive = newApiKey.secondsToLive;

      try {
        const secondsToLiveAsNumber = secondsToLive ? src.rangeUtil.intervalToSeconds(secondsToLive) : null;
        const apiKey = Object.assign({}, newApiKey, {
          secondsToLive: secondsToLiveAsNumber
        });
        this.props.addApiKey(apiKey, openModal);
        this.setState(prevState => {
          return Object.assign({}, prevState, {
            isAdding: false
          });
        });
      } catch (err) {
        console.error(err);
      }
    });
  }

  componentDidMount() {
    this.fetchApiKeys();
  }

  async fetchApiKeys() {
    await this.props.loadApiKeys();
  }

  render() {
    const {
      hasFetched,
      navModel,
      apiKeysCount,
      apiKeys,
      searchQuery,
      timeZone,
      includeExpired,
      includeExpiredDisabled,
      canCreate
    } = this.props;

    if (!hasFetched) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
        navModel: navModel,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
          isLoading: true
        })
      });
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
      navModel: navModel,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
        isLoading: false,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ApiKeysController, {
          children: _ref => {
            let {
              isAdding,
              toggleIsAdding
            } = _ref;
            const showCTA = !isAdding && apiKeysCount === 0;
            const showTable = apiKeysCount > 0;
            return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [showCTA ? /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyListCTA/* default */.Z, {
                title: "You haven't added any API keys yet.",
                buttonIcon: "key-skeleton-alt",
                onClick: toggleIsAdding,
                buttonTitle: "New API key",
                proTip: "Remember, you can provide view-only API access to other applications.",
                buttonDisabled: !canCreate
              }) : null, showTable ? /*#__PURE__*/(0,jsx_runtime.jsx)(ApiKeysActionBar, {
                searchQuery: searchQuery,
                disabled: isAdding || !canCreate,
                onAddClick: toggleIsAdding,
                onSearchChange: this.onSearchQueryChange
              }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(ApiKeysForm, {
                show: isAdding,
                onClose: toggleIsAdding,
                onKeyAdded: this.onAddApiKey,
                disabled: !canCreate
              }), showTable ? /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
                  disabled: includeExpiredDisabled,
                  label: "Include expired keys",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
                    id: "showExpired",
                    value: includeExpired,
                    onChange: this.onIncludeExpiredChange
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(ApiKeysTable, {
                  apiKeys: apiKeys,
                  timeZone: timeZone,
                  onDelete: this.onDeleteApiKey
                })]
              }) : null]
            });
          }
        })
      })
    });
  }

}
const ApiKeysPage = connector(ApiKeysPageUnconnected);
/* harmony default export */ const api_keys_ApiKeysPage = (ApiKeysPage);

/***/ })

}]);