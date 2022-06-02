"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3082],{

 "./public/app/features/api-keys/ApiKeysPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "ApiKeysPageUnconnected": () => ( ApiKeysPageUnconnected),
  "default": () => ( api_keys_ApiKeysPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var app_events = __webpack_require__("./public/app/core/app_events.ts");
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var config = __webpack_require__("./public/app/core/config.ts");
var core = __webpack_require__("./public/app/core/core.ts");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var selectors = __webpack_require__("./public/app/features/profile/state/selectors.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var events = __webpack_require__("./public/app/types/events.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;




const ApiKeysActionBar = _ref => {
  let {
    searchQuery,
    disabled,
    onAddClick,
    onSearchChange
  } = _ref;
  return (0,jsx_runtime.jsxs)("div", {
    className: "page-action-bar",
    children: [(0,jsx_runtime.jsx)("div", {
      className: "gf-form gf-form--grow",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
        placeholder: "Search keys",
        value: searchQuery,
        onChange: onSearchChange
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      className: "pull-right",
      onClick: onAddClick,
      disabled: disabled,
      children: "Add API key"
    })]
  });
};
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var actions = __webpack_require__("./public/app/core/actions/index.ts");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
var store = __webpack_require__("./public/app/store/store.ts");
;
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
    (0,store.WI)((0,actions.$l)((0,appNotification.AT)('Content copied to clipboard')));
  };

  return (0,jsx_runtime.jsxs)(grafana_ui_src.Modal, {
    title: "API Key Created",
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    isOpen: true,
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: "Key",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: "Key",
        value: apiKey,
        readOnly: true,
        addonAfter: (0,jsx_runtime.jsxs)(grafana_ui_src.ClipboardButton, {
          variant: "primary",
          getText: getClipboardText,
          onClipboardCopy: onClipboardCopy,
          children: [_Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "copy"
          })), " Copy"]
        })
      })
    }), _Alert || (_Alert = (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: "info",
      title: "You will only be able to view this key here once!",
      children: "It is not stored in this form, so be sure to copy it now."
    })), _p || (_p = (0,jsx_runtime.jsx)("p", {
      className: "text-muted",
      children: "You can authenticate a request using the Authorization HTTP header, example:"
    })), (0,jsx_runtime.jsxs)("pre", {
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
;

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
var CloseButton = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
var SlideDown = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
;
var _h, _span;









const {
  Input
} = grafana_ui_src.LegacyForms;
const ROLE_OPTIONS = Object.keys(types.B5).map(role => ({
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
  const [role, setRole] = (0,react.useState)(types.B5.Viewer);
  const [secondsToLive, setSecondsToLive] = (0,react.useState)('');
  (0,react.useEffect)(() => {
    setName('');
    setRole(types.B5.Viewer);
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

  return (0,jsx_runtime.jsx)(SlideDown.s, {
    in: show,
    children: (0,jsx_runtime.jsxs)("div", {
      className: "gf-form-inline cta-form",
      children: [(0,jsx_runtime.jsx)(CloseButton.P, {
        onClick: onClose
      }), (0,jsx_runtime.jsxs)("form", {
        className: "gf-form-group",
        onSubmit: onSubmit,
        children: [_h || (_h = (0,jsx_runtime.jsx)("h5", {
          children: "Add API Key"
        })), (0,jsx_runtime.jsxs)("div", {
          className: "gf-form-inline",
          children: [(0,jsx_runtime.jsxs)("div", {
            className: "gf-form max-width-21",
            children: [_span || (_span = (0,jsx_runtime.jsx)("span", {
              className: "gf-form-label",
              children: "Key name"
            })), (0,jsx_runtime.jsx)(Input, {
              type: "text",
              className: "gf-form-input",
              value: name,
              placeholder: "Name",
              onChange: onNameChange
            })]
          }), (0,jsx_runtime.jsx)("div", {
            className: "gf-form",
            children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
              label: "Role",
              children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
                inputId: "role-select",
                value: role,
                onChange: onRoleChange,
                options: ROLE_OPTIONS
              })
            })
          }), (0,jsx_runtime.jsx)("div", {
            className: "gf-form max-width-21",
            children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
              tooltip: tooltipText,
              label: "Time to live",
              children: (0,jsx_runtime.jsx)(Input, {
                id: "time-to-live-input",
                type: "text",
                placeholder: "1d",
                validationEvents: timeRangeValidationEvents,
                value: secondsToLive,
                onChange: onSecondsToLiveChange
              })
            })
          }), (0,jsx_runtime.jsx)("div", {
            className: "gf-form",
            children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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
;
var _th, _th2, _th3;









const ApiKeysTable = _ref => {
  let {
    apiKeys,
    timeZone,
    onDelete
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = ApiKeysTable_getStyles(theme);
  return (0,jsx_runtime.jsxs)("table", {
    className: "filter-table",
    children: [(0,jsx_runtime.jsx)("thead", {
      children: (0,jsx_runtime.jsxs)("tr", {
        children: [_th || (_th = (0,jsx_runtime.jsx)("th", {
          children: "Name"
        })), _th2 || (_th2 = (0,jsx_runtime.jsx)("th", {
          children: "Role"
        })), _th3 || (_th3 = (0,jsx_runtime.jsx)("th", {
          children: "Expires"
        })), (0,jsx_runtime.jsx)("th", {
          style: {
            width: '34px'
          }
        })]
      })
    }), apiKeys.length > 0 ? (0,jsx_runtime.jsx)("tbody", {
      children: apiKeys.map(key => {
        const isExpired = Boolean(key.expiration && Date.now() > new Date(key.expiration).getTime());
        return (0,jsx_runtime.jsxs)("tr", {
          className: styles.tableRow(isExpired),
          children: [(0,jsx_runtime.jsx)("td", {
            children: key.name
          }), (0,jsx_runtime.jsx)("td", {
            children: key.role
          }), (0,jsx_runtime.jsxs)("td", {
            children: [formatDate(key.expiration, timeZone), isExpired && (0,jsx_runtime.jsx)("span", {
              className: styles.tooltipContainer,
              children: (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
                content: "This API key has expired.",
                children: (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                  name: 'exclamation-triangle'
                })
              })
            })]
          }), (0,jsx_runtime.jsx)("td", {
            children: (0,jsx_runtime.jsx)(grafana_ui_src.DeleteButton, {
              "aria-label": "Delete API key",
              size: "sm",
              onConfirm: () => onDelete(key),
              disabled: !core.Vt.hasPermissionInMetadata(types.bW.ActionAPIKeysDelete, key)
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
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
var reducers = __webpack_require__("./public/app/features/api-keys/state/reducers.ts");
;


function addApiKey(apiKey, openModal) {
  return async dispatch => {
    const result = await (0,backend_srv.i)().post('/api/auth/keys', apiKey);
    dispatch((0,reducers.ql)(''));
    dispatch(loadApiKeys());
    openModal(result.key);
  };
}
function loadApiKeys() {
  return async dispatch => {
    dispatch((0,reducers.dF)());
    const [keys, keysIncludingExpired] = await Promise.all([(0,backend_srv.i)().get('/api/auth/keys?includeExpired=false&accesscontrol=true'), (0,backend_srv.i)().get('/api/auth/keys?includeExpired=true&accesscontrol=true')]);
    dispatch((0,reducers.iK)({
      keys,
      keysIncludingExpired
    }));
  };
}
function deleteApiKey(id) {
  return async dispatch => {
    (0,backend_srv.i)().delete(`/api/auth/keys/${id}`).then(() => dispatch(loadApiKeys()));
  };
}
function toggleIncludeExpired() {
  return dispatch => {
    dispatch((0,reducers.j4)());
  };
}
;
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
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function mapStateToProps(state) {
  const canCreate = core.Vt.hasAccess(types.bW.ActionAPIKeysCreate, true);
  return {
    navModel: (0,navModel.h)(state.navIndex, 'apikeys'),
    apiKeys: getApiKeys(state.apiKeys),
    searchQuery: state.apiKeys.searchQuery,
    apiKeysCount: getApiKeysCount(state.apiKeys),
    hasFetched: state.apiKeys.hasFetched,
    timeZone: (0,selectors.Z)(state.user),
    includeExpired: getIncludeExpired(state.apiKeys),
    includeExpiredDisabled: getIncludeExpiredDisabled(state.apiKeys),
    canCreate: canCreate
  };
}

const mapDispatchToProps = {
  loadApiKeys: loadApiKeys,
  deleteApiKey: deleteApiKey,
  setSearchQuery: reducers.ql,
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
        const rootPath = window.location.origin + config.ZP.appSubUrl;
        app_events.Z.publish(new events.Dn({
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
      return (0,jsx_runtime.jsx)(Page.Z, {
        navModel: navModel,
        children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
          isLoading: true
        })
      });
    }

    return (0,jsx_runtime.jsx)(Page.Z, {
      navModel: navModel,
      children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
        isLoading: false,
        children: (0,jsx_runtime.jsx)(ApiKeysController, {
          children: _ref => {
            let {
              isAdding,
              toggleIsAdding
            } = _ref;
            const showCTA = !isAdding && apiKeysCount === 0;
            const showTable = apiKeysCount > 0;
            return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [showCTA ? (0,jsx_runtime.jsx)(EmptyListCTA.Z, {
                title: "You haven't added any API keys yet.",
                buttonIcon: "key-skeleton-alt",
                onClick: toggleIsAdding,
                buttonTitle: "New API key",
                proTip: "Remember, you can provide view-only API access to other applications.",
                buttonDisabled: !canCreate
              }) : null, showTable ? (0,jsx_runtime.jsx)(ApiKeysActionBar, {
                searchQuery: searchQuery,
                disabled: isAdding || !canCreate,
                onAddClick: toggleIsAdding,
                onSearchChange: this.onSearchQueryChange
              }) : null, (0,jsx_runtime.jsx)(ApiKeysForm, {
                show: isAdding,
                onClose: toggleIsAdding,
                onKeyAdded: this.onAddApiKey,
                disabled: !canCreate
              }), showTable ? (0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
                children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
                  disabled: includeExpiredDisabled,
                  label: "Include expired keys",
                  children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
                    id: "showExpired",
                    value: includeExpired,
                    onChange: this.onIncludeExpiredChange
                  })
                }), (0,jsx_runtime.jsx)(ApiKeysTable, {
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
 const api_keys_ApiKeysPage = (ApiKeysPage);

 })

}]);