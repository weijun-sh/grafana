"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ApiKeysPage"],{

/***/ "./public/app/features/api-keys/ApiKeysActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysActionBar": () => (/* binding */ ApiKeysActionBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const ApiKeysActionBar = ({
  searchQuery,
  disabled,
  onAddClick,
  onSearchChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "page-action-bar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "gf-form gf-form--grow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
        placeholder: "Search keys",
        value: searchQuery,
        onChange: onSearchChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      className: "pull-right",
      onClick: onAddClick,
      disabled: disabled,
      children: "Add API key"
    })]
  });
};

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysAddedModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysAddedModal": () => (/* binding */ ApiKeysAddedModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Alert, _p;









function ApiKeysAddedModal({
  onDismiss,
  apiKey,
  rootPath
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const getClipboardText = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => apiKey, [apiKey]);

  const onClipboardCopy = () => {
    (0,_store_store__WEBPACK_IMPORTED_MODULE_5__.dispatch)((0,_core_actions__WEBPACK_IMPORTED_MODULE_3__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.createSuccessNotification)('Content copied to clipboard')));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: "API Key Created",
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    isOpen: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: "Key",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
        id: "Key",
        value: apiKey,
        readOnly: true,
        addonAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ClipboardButton, {
          variant: "primary",
          getText: getClipboardText,
          onClipboardCopy: onClipboardCopy,
          children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "copy"
          })), " Copy"]
        })
      })
    }), _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "info",
      title: "You will only be able to view this key here once!",
      children: "It is not stored in this form, so be sure to copy it now."
    })), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
      className: "text-muted",
      children: "You can authenticate a request using the Authorization HTTP header, example:"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("pre", {
      className: styles.small,
      children: ["curl -H \"Authorization: Bearer ", apiKey, "\" ", rootPath, "/api/dashboards/home"]
    })]
  });
}

function getStyles(theme) {
  return {
    label: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(1)};
      background-color: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
    `,
    small: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.bodySmall.fontSize};
      font-weight: ${theme.typography.bodySmall.fontWeight};
    `
  };
}

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysController.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysController": () => (/* binding */ ApiKeysController)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

const ApiKeysController = ({
  children
}) => {
  const [isAdding, setIsAdding] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleIsAdding = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsAdding(!isAdding);
  }, [isAdding]);
  return children({
    isAdding,
    toggleIsAdding
  });
};

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysForm": () => (/* binding */ ApiKeysForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var _core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _span;









const {
  Input
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;
const ROLE_OPTIONS = Object.keys(_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole).map(role => ({
  label: role,
  value: role
}));

function isValidInterval(value) {
  if (!value) {
    return true;
  }

  try {
    _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.intervalToSeconds(value);
    return true;
  } catch {}

  return false;
}

const timeRangeValidationEvents = {
  [_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.EventsWithValidation.onBlur]: [{
    rule: isValidInterval,
    errorMessage: 'Not a valid duration'
  }]
};
const tooltipText = 'The API key life duration. For example, 1d if your key is going to last for one day. Supported units are: s,m,h,d,w,M,y';
const ApiKeysForm = ({
  show,
  onClose,
  onKeyAdded,
  disabled
}) => {
  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Viewer);
  const [secondsToLive, setSecondsToLive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setName('');
    setRole(_types__WEBPACK_IMPORTED_MODULE_5__.OrgRole.Viewer);
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_4__.SlideDown, {
    in: show,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "gf-form-inline cta-form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_3__.CloseButton, {
        onClick: onClose
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
        className: "gf-form-group",
        onSubmit: onSubmit,
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
          children: "Add API Key"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "gf-form-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "gf-form max-width-21",
            children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "gf-form-label",
              children: "Key name"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Input, {
              type: "text",
              className: "gf-form-input",
              value: name,
              placeholder: "Name",
              onChange: onNameChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
              label: "Role",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
                inputId: "role-select",
                value: role,
                onChange: onRoleChange,
                options: ROLE_OPTIONS
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form max-width-21",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
              tooltip: tooltipText,
              label: "Time to live",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Input, {
                id: "time-to-live-input",
                type: "text",
                placeholder: "1d",
                validationEvents: timeRangeValidationEvents,
                value: secondsToLive,
                onChange: onSecondsToLiveChange
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
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

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysPageUnconnected": () => (/* binding */ ApiKeysPageUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_features_profile_state_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/profile/state/selectors.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _ApiKeysActionBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/api-keys/ApiKeysActionBar.tsx");
/* harmony import */ var _ApiKeysAddedModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/api-keys/ApiKeysAddedModal.tsx");
/* harmony import */ var _ApiKeysController__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/api-keys/ApiKeysController.tsx");
/* harmony import */ var _ApiKeysForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/api-keys/ApiKeysForm.tsx");
/* harmony import */ var _ApiKeysTable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/api-keys/ApiKeysTable.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/api-keys/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/api-keys/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/api-keys/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Utils
























function mapStateToProps(state) {
  const canCreate = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.ActionAPIKeysCreate, true);
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, 'apikeys'),
    apiKeys: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_20__.getApiKeys)(state.apiKeys),
    searchQuery: state.apiKeys.searchQuery,
    apiKeysCount: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_20__.getApiKeysCount)(state.apiKeys),
    hasFetched: state.apiKeys.hasFetched,
    timeZone: (0,app_features_profile_state_selectors__WEBPACK_IMPORTED_MODULE_10__.getTimeZone)(state.user),
    includeExpired: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_20__.getIncludeExpired)(state.apiKeys),
    includeExpiredDisabled: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_20__.getIncludeExpiredDisabled)(state.apiKeys),
    canCreate: canCreate
  };
}

const mapDispatchToProps = {
  loadApiKeys: _state_actions__WEBPACK_IMPORTED_MODULE_18__.loadApiKeys,
  deleteApiKey: _state_actions__WEBPACK_IMPORTED_MODULE_18__.deleteApiKey,
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_19__.setSearchQuery,
  toggleIncludeExpired: _state_actions__WEBPACK_IMPORTED_MODULE_18__.toggleIncludeExpired,
  addApiKey: _state_actions__WEBPACK_IMPORTED_MODULE_18__.addApiKey
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class ApiKeysPageUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
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
        const rootPath = window.location.origin + app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].appSubUrl;
        app_core_app_events__WEBPACK_IMPORTED_MODULE_4__["default"].publish(new app_types_events__WEBPACK_IMPORTED_MODULE_12__.ShowModalReactEvent({
          props: {
            apiKey,
            rootPath
          },
          component: _ApiKeysAddedModal__WEBPACK_IMPORTED_MODULE_14__.ApiKeysAddedModal
        }));
      };

      const secondsToLive = newApiKey.secondsToLive;

      try {
        const secondsToLiveAsNumber = secondsToLive ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.intervalToSeconds(secondsToLive) : null;
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
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
        navModel: navModel,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
          isLoading: true
        })
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
        isLoading: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ApiKeysController__WEBPACK_IMPORTED_MODULE_15__.ApiKeysController, {
          children: ({
            isAdding,
            toggleIsAdding
          }) => {
            const showCTA = !isAdding && apiKeysCount === 0;
            const showTable = apiKeysCount > 0;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
              children: [showCTA ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__["default"], {
                title: "You haven't added any API keys yet.",
                buttonIcon: "key-skeleton-alt",
                onClick: toggleIsAdding,
                buttonTitle: "New API key",
                proTip: "Remember, you can provide view-only API access to other applications.",
                buttonDisabled: !canCreate
              }) : null, showTable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ApiKeysActionBar__WEBPACK_IMPORTED_MODULE_13__.ApiKeysActionBar, {
                searchQuery: searchQuery,
                disabled: isAdding || !canCreate,
                onAddClick: toggleIsAdding,
                onSearchChange: this.onSearchQueryChange
              }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ApiKeysForm__WEBPACK_IMPORTED_MODULE_16__.ApiKeysForm, {
                show: isAdding,
                onClose: toggleIsAdding,
                onKeyAdded: this.onAddApiKey,
                disabled: !canCreate
              }), showTable ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
                  disabled: includeExpiredDisabled,
                  label: "Include expired keys",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
                    id: "showExpired",
                    value: includeExpired,
                    onChange: this.onIncludeExpiredChange
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ApiKeysTable__WEBPACK_IMPORTED_MODULE_17__.ApiKeysTable, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiKeysPage);

/***/ }),

/***/ "./public/app/features/api-keys/ApiKeysTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiKeysTable": () => (/* binding */ ApiKeysTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3;









const ApiKeysTable = ({
  apiKeys,
  timeZone,
  onDelete
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = getStyles(theme);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
    className: "filter-table",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
        children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
          children: "Name"
        })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
          children: "Role"
        })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
          children: "Expires"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
          style: {
            width: '34px'
          }
        })]
      })
    }), apiKeys.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
      children: apiKeys.map(key => {
        const isExpired = Boolean(key.expiration && Date.now() > new Date(key.expiration).getTime());
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
          className: styles.tableRow(isExpired),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
            children: key.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
            children: key.role
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
            children: [formatDate(key.expiration, timeZone), isExpired && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: styles.tooltipContainer,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                content: "This API key has expired.",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                  name: 'exclamation-triangle'
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.DeleteButton, {
              "aria-label": "Delete API key",
              size: "sm",
              onConfirm: () => onDelete(key),
              disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionAPIKeysDelete, key)
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

  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(expiration, {
    timeZone
  });
}

const getStyles = theme => ({
  tableRow: isExpired => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${isExpired ? theme.colors.text.secondary : theme.colors.text.primary};
  `,
  tooltipContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/api-keys/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addApiKey": () => (/* binding */ addApiKey),
/* harmony export */   "deleteApiKey": () => (/* binding */ deleteApiKey),
/* harmony export */   "loadApiKeys": () => (/* binding */ loadApiKeys),
/* harmony export */   "toggleIncludeExpired": () => (/* binding */ toggleIncludeExpired)
/* harmony export */ });
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/api-keys/state/reducers.ts");


function addApiKey(apiKey, openModal) {
  return async dispatch => {
    const result = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/auth/keys', apiKey);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.setSearchQuery)(''));
    dispatch(loadApiKeys());
    openModal(result.key);
  };
}
function loadApiKeys() {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.isFetching)());
    const [keys, keysIncludingExpired] = await Promise.all([(0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/auth/keys?includeExpired=false&accesscontrol=true'), (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/auth/keys?includeExpired=true&accesscontrol=true')]);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.apiKeysLoaded)({
      keys,
      keysIncludingExpired
    }));
  };
}
function deleteApiKey(id) {
  return async dispatch => {
    (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/auth/keys/${id}`).then(() => dispatch(loadApiKeys()));
  };
}
function toggleIncludeExpired() {
  return dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_1__.includeExpiredToggled)());
  };
}

/***/ }),

/***/ "./public/app/features/api-keys/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getApiKeys": () => (/* binding */ getApiKeys),
/* harmony export */   "getApiKeysCount": () => (/* binding */ getApiKeysCount),
/* harmony export */   "getIncludeExpired": () => (/* binding */ getIncludeExpired),
/* harmony export */   "getIncludeExpiredDisabled": () => (/* binding */ getIncludeExpiredDisabled)
/* harmony export */ });
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPa0ksWUFBWSxDQUFDQyxNQUFiLENBQXFCN0QsR0FBRCxJQUFTO0FBQ2xDLFdBQU8wRCxLQUFLLENBQUNJLElBQU4sQ0FBVzlELEdBQUcsQ0FBQ3ZELElBQWYsS0FBd0JpSCxLQUFLLENBQUNJLElBQU4sQ0FBVzlELEdBQUcsQ0FBQ3BFLElBQWYsQ0FBL0I7QUFDRCxHQUZNLENBQVA7QUFHRCxDQVBNO0FBU0EsTUFBTStDLGlCQUFpQixHQUFJRyxLQUFELElBQXlCQSxLQUFLLENBQUNXLGNBQXpEO0FBRUEsTUFBTWIseUJBQXlCLEdBQUlFLEtBQUQsSUFDdkNBLEtBQUssQ0FBQ3BELElBQU4sQ0FBV3NHLE1BQVgsS0FBc0IsQ0FBdEIsSUFBMkJsRCxLQUFLLENBQUNzRSxvQkFBTixDQUEyQnBCLE1BQTNCLEdBQW9DLENBRDFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvQXBpS2V5c0FjdGlvbkJhci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvQXBpS2V5c0FkZGVkTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FwaS1rZXlzL0FwaUtleXNDb250cm9sbGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hcGkta2V5cy9BcGlLZXlzRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvQXBpS2V5c1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FwaS1rZXlzL0FwaUtleXNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYXBpLWtleXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hcGkta2V5cy9zdGF0ZS9zZWxlY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24sIEZpbHRlcklucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb25BZGRDbGljazogKCkgPT4gdm9pZDtcbiAgb25TZWFyY2hDaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQXBpS2V5c0FjdGlvbkJhcjogRkM8UHJvcHM+ID0gKHsgc2VhcmNoUXVlcnksIGRpc2FibGVkLCBvbkFkZENsaWNrLCBvblNlYXJjaENoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgIDxGaWx0ZXJJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBrZXlzXCIgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17b25TZWFyY2hDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIG9uQ2xpY2s9e29uQWRkQ2xpY2t9IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgIEFkZCBBUEkga2V5XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgRmllbGQsIE1vZGFsLCB1c2VTdHlsZXMyLCBJbnB1dCwgSWNvbiwgQ2xpcGJvYXJkQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICcuLi8uLi9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG4gIGFwaUtleTogc3RyaW5nO1xuICByb290UGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBpS2V5c0FkZGVkTW9kYWwoeyBvbkRpc21pc3MsIGFwaUtleSwgcm9vdFBhdGggfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZ2V0Q2xpcGJvYXJkVGV4dCA9IHVzZUNhbGxiYWNrKCgpID0+IGFwaUtleSwgW2FwaUtleV0pO1xuICBjb25zdCBvbkNsaXBib2FyZENvcHkgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24oJ0NvbnRlbnQgY29waWVkIHRvIGNsaXBib2FyZCcpKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPE1vZGFsIHRpdGxlPVwiQVBJIEtleSBDcmVhdGVkXCIgb25EaXNtaXNzPXtvbkRpc21pc3N9IG9uQ2xpY2tCYWNrZHJvcD17b25EaXNtaXNzfSBpc09wZW4+XG4gICAgICA8RmllbGQgbGFiZWw9XCJLZXlcIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWQ9XCJLZXlcIlxuICAgICAgICAgIHZhbHVlPXthcGlLZXl9XG4gICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICBhZGRvbkFmdGVyPXtcbiAgICAgICAgICAgIDxDbGlwYm9hcmRCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBnZXRUZXh0PXtnZXRDbGlwYm9hcmRUZXh0fSBvbkNsaXBib2FyZENvcHk9e29uQ2xpcGJvYXJkQ29weX0+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJjb3B5XCIgLz4gQ29weVxuICAgICAgICAgICAgPC9DbGlwYm9hcmRCdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIllvdSB3aWxsIG9ubHkgYmUgYWJsZSB0byB2aWV3IHRoaXMga2V5IGhlcmUgb25jZSFcIj5cbiAgICAgICAgSXQgaXMgbm90IHN0b3JlZCBpbiB0aGlzIGZvcm0sIHNvIGJlIHN1cmUgdG8gY29weSBpdCBub3cuXG4gICAgICA8L0FsZXJ0PlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+WW91IGNhbiBhdXRoZW50aWNhdGUgYSByZXF1ZXN0IHVzaW5nIHRoZSBBdXRob3JpemF0aW9uIEhUVFAgaGVhZGVyLCBleGFtcGxlOjwvcD5cbiAgICAgIDxwcmUgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGx9PlxuICAgICAgICBjdXJsIC1IICZxdW90O0F1dGhvcml6YXRpb246IEJlYXJlciB7YXBpS2V5fSZxdW90OyB7cm9vdFBhdGh9L2FwaS9kYXNoYm9hcmRzL2hvbWVcbiAgICAgIDwvcHJlPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gICAgYCxcbiAgICBzbWFsbDogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRTaXplfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuYm9keVNtYWxsLmZvbnRXZWlnaHR9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgQXBpIHtcbiAgaXNBZGRpbmc6IGJvb2xlYW47XG4gIHRvZ2dsZUlzQWRkaW5nOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogKHByb3BzOiBBcGkpID0+IEpTWC5FbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgQXBpS2V5c0NvbnRyb2xsZXI6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2lzQWRkaW5nLCBzZXRJc0FkZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZUlzQWRkaW5nID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzQWRkaW5nKCFpc0FkZGluZyk7XG4gIH0sIFtpc0FkZGluZ10pO1xuXG4gIHJldHVybiBjaGlsZHJlbih7IGlzQWRkaW5nLCB0b2dnbGVJc0FkZGluZyB9KTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIEZDLCBGb3JtRXZlbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHJhbmdlVXRpbCwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBFdmVudHNXaXRoVmFsaWRhdGlvbiwgTGVnYWN5Rm9ybXMsIFZhbGlkYXRpb25FdmVudHMsIEJ1dHRvbiwgU2VsZWN0LCBJbmxpbmVGaWVsZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9DbG9zZUJ1dHRvbi9DbG9zZUJ1dHRvbic7XG5cbmltcG9ydCB7IFNsaWRlRG93biB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9BbmltYXRpb25zL1NsaWRlRG93bic7XG5pbXBvcnQgeyBOZXdBcGlLZXksIE9yZ1JvbGUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmNvbnN0IHsgSW5wdXQgfSA9IExlZ2FjeUZvcm1zO1xuY29uc3QgUk9MRV9PUFRJT05TOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8T3JnUm9sZT4+ID0gT2JqZWN0LmtleXMoT3JnUm9sZSkubWFwKChyb2xlKSA9PiAoe1xuICBsYWJlbDogcm9sZSxcbiAgdmFsdWU6IHJvbGUgYXMgT3JnUm9sZSxcbn0pKTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25LZXlBZGRlZDogKGFwaUtleTogTmV3QXBpS2V5KSA9PiB2b2lkO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEludGVydmFsKHZhbHVlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRyeSB7XG4gICAgcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKHZhbHVlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCB7fVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmNvbnN0IHRpbWVSYW5nZVZhbGlkYXRpb25FdmVudHM6IFZhbGlkYXRpb25FdmVudHMgPSB7XG4gIFtFdmVudHNXaXRoVmFsaWRhdGlvbi5vbkJsdXJdOiBbXG4gICAge1xuICAgICAgcnVsZTogaXNWYWxpZEludGVydmFsLFxuICAgICAgZXJyb3JNZXNzYWdlOiAnTm90IGEgdmFsaWQgZHVyYXRpb24nLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCB0b29sdGlwVGV4dCA9XG4gICdUaGUgQVBJIGtleSBsaWZlIGR1cmF0aW9uLiBGb3IgZXhhbXBsZSwgMWQgaWYgeW91ciBrZXkgaXMgZ29pbmcgdG8gbGFzdCBmb3Igb25lIGRheS4gU3VwcG9ydGVkIHVuaXRzIGFyZTogcyxtLGgsZCx3LE0seSc7XG5cbmV4cG9ydCBjb25zdCBBcGlLZXlzRm9ybTogRkM8UHJvcHM+ID0gKHsgc2hvdywgb25DbG9zZSwgb25LZXlBZGRlZCwgZGlzYWJsZWQgfSkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGU8T3JnUm9sZT4oT3JnUm9sZS5WaWV3ZXIpO1xuICBjb25zdCBbc2Vjb25kc1RvTGl2ZSwgc2V0U2Vjb25kc1RvTGl2ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXROYW1lKCcnKTtcbiAgICBzZXRSb2xlKE9yZ1JvbGUuVmlld2VyKTtcbiAgICBzZXRTZWNvbmRzVG9MaXZlKCcnKTtcbiAgfSwgW3Nob3ddKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaXNWYWxpZEludGVydmFsKHNlY29uZHNUb0xpdmUpKSB7XG4gICAgICBvbktleUFkZGVkKHsgbmFtZSwgcm9sZSwgc2Vjb25kc1RvTGl2ZSB9KTtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IG9uTmFtZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXROYW1lKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBvblJvbGVDaGFuZ2UgPSAocm9sZTogU2VsZWN0YWJsZVZhbHVlPE9yZ1JvbGU+KSA9PiB7XG4gICAgc2V0Um9sZShyb2xlLnZhbHVlISk7XG4gIH07XG4gIGNvbnN0IG9uU2Vjb25kc1RvTGl2ZUNoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRTZWNvbmRzVG9MaXZlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNsaWRlRG93biBpbj17c2hvd30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lIGN0YS1mb3JtXCI+XG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSAvPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCIgb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8aDU+QWRkIEFQSSBLZXk8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBtYXgtd2lkdGgtMjFcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbFwiPktleSBuYW1lPC9zcGFuPlxuICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJnZi1mb3JtLWlucHV0XCIgdmFsdWU9e25hbWV9IHBsYWNlaG9sZGVyPVwiTmFtZVwiIG9uQ2hhbmdlPXtvbk5hbWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJSb2xlXCI+XG4gICAgICAgICAgICAgICAgPFNlbGVjdCBpbnB1dElkPVwicm9sZS1zZWxlY3RcIiB2YWx1ZT17cm9sZX0gb25DaGFuZ2U9e29uUm9sZUNoYW5nZX0gb3B0aW9ucz17Uk9MRV9PUFRJT05TfSAvPlxuICAgICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gbWF4LXdpZHRoLTIxXCI+XG4gICAgICAgICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPXt0b29sdGlwVGV4dH0gbGFiZWw9XCJUaW1lIHRvIGxpdmVcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwidGltZS10by1saXZlLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWRcIlxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkV2ZW50cz17dGltZVJhbmdlVmFsaWRhdGlvbkV2ZW50c31cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWNvbmRzVG9MaXZlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU2Vjb25kc1RvTGl2ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9TbGlkZURvd24+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuLy8gVXRpbHNcbmltcG9ydCB7IHJhbmdlVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZVN3aXRjaCwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5pbXBvcnQgRW1wdHlMaXN0Q1RBIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBnZXRUaW1lWm9uZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wcm9maWxlL3N0YXRlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBBcGlLZXksIE5ld0FwaUtleSwgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBTaG93TW9kYWxSZWFjdEV2ZW50IH0gZnJvbSAnYXBwL3R5cGVzL2V2ZW50cyc7XG5cbmltcG9ydCB7IEFwaUtleXNBY3Rpb25CYXIgfSBmcm9tICcuL0FwaUtleXNBY3Rpb25CYXInO1xuaW1wb3J0IHsgQXBpS2V5c0FkZGVkTW9kYWwgfSBmcm9tICcuL0FwaUtleXNBZGRlZE1vZGFsJztcbmltcG9ydCB7IEFwaUtleXNDb250cm9sbGVyIH0gZnJvbSAnLi9BcGlLZXlzQ29udHJvbGxlcic7XG5pbXBvcnQgeyBBcGlLZXlzRm9ybSB9IGZyb20gJy4vQXBpS2V5c0Zvcm0nO1xuaW1wb3J0IHsgQXBpS2V5c1RhYmxlIH0gZnJvbSAnLi9BcGlLZXlzVGFibGUnO1xuaW1wb3J0IHsgYWRkQXBpS2V5LCBkZWxldGVBcGlLZXksIGxvYWRBcGlLZXlzLCB0b2dnbGVJbmNsdWRlRXhwaXJlZCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXRTZWFyY2hRdWVyeSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0QXBpS2V5cywgZ2V0QXBpS2V5c0NvdW50LCBnZXRJbmNsdWRlRXhwaXJlZCwgZ2V0SW5jbHVkZUV4cGlyZWREaXNhYmxlZCB9IGZyb20gJy4vc3RhdGUvc2VsZWN0b3JzJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIGNvbnN0IGNhbkNyZWF0ZSA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uQVBJS2V5c0NyZWF0ZSwgdHJ1ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdhcGlrZXlzJyksXG4gICAgYXBpS2V5czogZ2V0QXBpS2V5cyhzdGF0ZS5hcGlLZXlzKSxcbiAgICBzZWFyY2hRdWVyeTogc3RhdGUuYXBpS2V5cy5zZWFyY2hRdWVyeSxcbiAgICBhcGlLZXlzQ291bnQ6IGdldEFwaUtleXNDb3VudChzdGF0ZS5hcGlLZXlzKSxcbiAgICBoYXNGZXRjaGVkOiBzdGF0ZS5hcGlLZXlzLmhhc0ZldGNoZWQsXG4gICAgdGltZVpvbmU6IGdldFRpbWVab25lKHN0YXRlLnVzZXIpLFxuICAgIGluY2x1ZGVFeHBpcmVkOiBnZXRJbmNsdWRlRXhwaXJlZChzdGF0ZS5hcGlLZXlzKSxcbiAgICBpbmNsdWRlRXhwaXJlZERpc2FibGVkOiBnZXRJbmNsdWRlRXhwaXJlZERpc2FibGVkKHN0YXRlLmFwaUtleXMpLFxuICAgIGNhbkNyZWF0ZTogY2FuQ3JlYXRlLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRBcGlLZXlzLFxuICBkZWxldGVBcGlLZXksXG4gIHNldFNlYXJjaFF1ZXJ5LFxuICB0b2dnbGVJbmNsdWRlRXhwaXJlZCxcbiAgYWRkQXBpS2V5LFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmludGVyZmFjZSBPd25Qcm9wcyB7fVxuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzQWRkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQXBpS2V5c1BhZ2VVbmNvbm5lY3RlZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hBcGlLZXlzKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaEFwaUtleXMoKSB7XG4gICAgYXdhaXQgdGhpcy5wcm9wcy5sb2FkQXBpS2V5cygpO1xuICB9XG5cbiAgb25EZWxldGVBcGlLZXkgPSAoa2V5OiBBcGlLZXkpID0+IHtcbiAgICB0aGlzLnByb3BzLmRlbGV0ZUFwaUtleShrZXkuaWQhKTtcbiAgfTtcblxuICBvblNlYXJjaFF1ZXJ5Q2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldFNlYXJjaFF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICBvbkluY2x1ZGVFeHBpcmVkQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHRoaXMucHJvcHMudG9nZ2xlSW5jbHVkZUV4cGlyZWQoKTtcbiAgfTtcblxuICBvbkFkZEFwaUtleSA9IChuZXdBcGlLZXk6IE5ld0FwaUtleSkgPT4ge1xuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IChhcGlLZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgcm9vdFBhdGggPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgY29uZmlnLmFwcFN1YlVybDtcblxuICAgICAgYXBwRXZlbnRzLnB1Ymxpc2goXG4gICAgICAgIG5ldyBTaG93TW9kYWxSZWFjdEV2ZW50KHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYXBpS2V5LFxuICAgICAgICAgICAgcm9vdFBhdGgsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wb25lbnQ6IEFwaUtleXNBZGRlZE1vZGFsLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2Vjb25kc1RvTGl2ZSA9IG5ld0FwaUtleS5zZWNvbmRzVG9MaXZlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZWNvbmRzVG9MaXZlQXNOdW1iZXIgPSBzZWNvbmRzVG9MaXZlID8gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKHNlY29uZHNUb0xpdmUpIDogbnVsbDtcbiAgICAgIGNvbnN0IGFwaUtleTogQXBpS2V5ID0ge1xuICAgICAgICAuLi5uZXdBcGlLZXksXG4gICAgICAgIHNlY29uZHNUb0xpdmU6IHNlY29uZHNUb0xpdmVBc051bWJlcixcbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLmFkZEFwaUtleShhcGlLZXksIG9wZW5Nb2RhbCk7XG4gICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGU6IFN0YXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIGlzQWRkaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaGFzRmV0Y2hlZCxcbiAgICAgIG5hdk1vZGVsLFxuICAgICAgYXBpS2V5c0NvdW50LFxuICAgICAgYXBpS2V5cyxcbiAgICAgIHNlYXJjaFF1ZXJ5LFxuICAgICAgdGltZVpvbmUsXG4gICAgICBpbmNsdWRlRXhwaXJlZCxcbiAgICAgIGluY2x1ZGVFeHBpcmVkRGlzYWJsZWQsXG4gICAgICBjYW5DcmVhdGUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWhhc0ZldGNoZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXt0cnVlfT57fTwvUGFnZS5Db250ZW50cz5cbiAgICAgICAgPC9QYWdlPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtmYWxzZX0+XG4gICAgICAgICAgPEFwaUtleXNDb250cm9sbGVyPlxuICAgICAgICAgICAgeyh7IGlzQWRkaW5nLCB0b2dnbGVJc0FkZGluZyB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHNob3dDVEEgPSAhaXNBZGRpbmcgJiYgYXBpS2V5c0NvdW50ID09PSAwO1xuICAgICAgICAgICAgICBjb25zdCBzaG93VGFibGUgPSBhcGlLZXlzQ291bnQgPiAwO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7c2hvd0NUQSA/IChcbiAgICAgICAgICAgICAgICAgICAgPEVtcHR5TGlzdENUQVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91IGhhdmVuJ3QgYWRkZWQgYW55IEFQSSBrZXlzIHlldC5cIlxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkljb249XCJrZXktc2tlbGV0b24tYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVJc0FkZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBidXR0b25UaXRsZT1cIk5ldyBBUEkga2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9UaXA9XCJSZW1lbWJlciwgeW91IGNhbiBwcm92aWRlIHZpZXctb25seSBBUEkgYWNjZXNzIHRvIG90aGVyIGFwcGxpY2F0aW9ucy5cIlxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkRpc2FibGVkPXshY2FuQ3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICB7c2hvd1RhYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICA8QXBpS2V5c0FjdGlvbkJhclxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNBZGRpbmcgfHwgIWNhbkNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkFkZENsaWNrPXt0b2dnbGVJc0FkZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaENoYW5nZT17dGhpcy5vblNlYXJjaFF1ZXJ5Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICA8QXBpS2V5c0Zvcm1cbiAgICAgICAgICAgICAgICAgICAgc2hvdz17aXNBZGRpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RvZ2dsZUlzQWRkaW5nfVxuICAgICAgICAgICAgICAgICAgICBvbktleUFkZGVkPXt0aGlzLm9uQWRkQXBpS2V5fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhbkNyZWF0ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7c2hvd1RhYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICA8VmVydGljYWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5saW5lRmllbGQgZGlzYWJsZWQ9e2luY2x1ZGVFeHBpcmVkRGlzYWJsZWR9IGxhYmVsPVwiSW5jbHVkZSBleHBpcmVkIGtleXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbmxpbmVTd2l0Y2ggaWQ9XCJzaG93RXhwaXJlZFwiIHZhbHVlPXtpbmNsdWRlRXhwaXJlZH0gb25DaGFuZ2U9e3RoaXMub25JbmNsdWRlRXhwaXJlZENoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgIDxBcGlLZXlzVGFibGUgYXBpS2V5cz17YXBpS2V5c30gdGltZVpvbmU9e3RpbWVab25lfSBvbkRlbGV0ZT17dGhpcy5vbkRlbGV0ZUFwaUtleX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvQXBpS2V5c0NvbnRyb2xsZXI+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEFwaUtleXNQYWdlID0gY29ubmVjdG9yKEFwaUtleXNQYWdlVW5jb25uZWN0ZWQpO1xuZXhwb3J0IGRlZmF1bHQgQXBpS2V5c1BhZ2U7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdCwgR3JhZmFuYVRoZW1lMiwgVGltZVpvbmUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERlbGV0ZUJ1dHRvbiwgSWNvbiwgSWNvbk5hbWUsIFRvb2x0aXAsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBBcGlLZXkgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFwaUtleXM6IEFwaUtleVtdO1xuICB0aW1lWm9uZTogVGltZVpvbmU7XG4gIG9uRGVsZXRlOiAoYXBpS2V5OiBBcGlLZXkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBBcGlLZXlzVGFibGU6IEZDPFByb3BzPiA9ICh7IGFwaUtleXMsIHRpbWVab25lLCBvbkRlbGV0ZSB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh0aGVtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlXCI+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgPHRoPlJvbGU8L3RoPlxuICAgICAgICAgIDx0aD5FeHBpcmVzPC90aD5cbiAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICczNHB4JyB9fSAvPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIHthcGlLZXlzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7YXBpS2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNFeHBpcmVkID0gQm9vbGVhbihrZXkuZXhwaXJhdGlvbiAmJiBEYXRlLm5vdygpID4gbmV3IERhdGUoa2V5LmV4cGlyYXRpb24pLmdldFRpbWUoKSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtrZXkuaWR9IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlUm93KGlzRXhwaXJlZCl9PlxuICAgICAgICAgICAgICAgIDx0ZD57a2V5Lm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2tleS5yb2xlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAge2Zvcm1hdERhdGUoa2V5LmV4cGlyYXRpb24sIHRpbWVab25lKX1cbiAgICAgICAgICAgICAgICAgIHtpc0V4cGlyZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBjb250ZW50PVwiVGhpcyBBUEkga2V5IGhhcyBleHBpcmVkLlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT17J2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJyBhcyBJY29uTmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgQVBJIGtleVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gb25EZWxldGUoa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uQVBJS2V5c0RlbGV0ZSwga2V5KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICApIDogbnVsbH1cbiAgICA8L3RhYmxlPlxuICApO1xufTtcblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShleHBpcmF0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQsIHRpbWVab25lOiBUaW1lWm9uZSk6IHN0cmluZyB7XG4gIGlmICghZXhwaXJhdGlvbikge1xuICAgIHJldHVybiAnTm8gZXhwaXJhdGlvbiBkYXRlJztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQoZXhwaXJhdGlvbiwgeyB0aW1lWm9uZSB9KTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB0YWJsZVJvdzogKGlzRXhwaXJlZDogYm9vbGVhbikgPT4gY3NzYFxuICAgIGNvbG9yOiAke2lzRXhwaXJlZCA/IHRoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeSA6IHRoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICBgLFxuICB0b29sdGlwQ29udGFpbmVyOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBBcGlLZXksIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgYXBpS2V5c0xvYWRlZCwgaW5jbHVkZUV4cGlyZWRUb2dnbGVkLCBpc0ZldGNoaW5nLCBzZXRTZWFyY2hRdWVyeSB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQXBpS2V5KGFwaUtleTogQXBpS2V5LCBvcGVuTW9kYWw6IChrZXk6IHN0cmluZykgPT4gdm9pZCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2F1dGgva2V5cycsIGFwaUtleSk7XG4gICAgZGlzcGF0Y2goc2V0U2VhcmNoUXVlcnkoJycpKTtcbiAgICBkaXNwYXRjaChsb2FkQXBpS2V5cygpKTtcbiAgICBvcGVuTW9kYWwocmVzdWx0LmtleSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXBpS2V5cygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChpc0ZldGNoaW5nKCkpO1xuICAgIGNvbnN0IFtrZXlzLCBrZXlzSW5jbHVkaW5nRXhwaXJlZF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2F1dGgva2V5cz9pbmNsdWRlRXhwaXJlZD1mYWxzZSZhY2Nlc3Njb250cm9sPXRydWUnKSxcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvYXV0aC9rZXlzP2luY2x1ZGVFeHBpcmVkPXRydWUmYWNjZXNzY29udHJvbD10cnVlJyksXG4gICAgXSk7XG4gICAgZGlzcGF0Y2goYXBpS2V5c0xvYWRlZCh7IGtleXMsIGtleXNJbmNsdWRpbmdFeHBpcmVkIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUFwaUtleShpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZGVsZXRlKGAvYXBpL2F1dGgva2V5cy8ke2lkfWApXG4gICAgICAudGhlbigoKSA9PiBkaXNwYXRjaChsb2FkQXBpS2V5cygpKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVJbmNsdWRlRXhwaXJlZCgpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChpbmNsdWRlRXhwaXJlZFRvZ2dsZWQoKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBBcGlLZXlzU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0QXBpS2V5c0NvdW50ID0gKHN0YXRlOiBBcGlLZXlzU3RhdGUpID0+XG4gIHN0YXRlLmluY2x1ZGVFeHBpcmVkID8gc3RhdGUua2V5c0luY2x1ZGluZ0V4cGlyZWQubGVuZ3RoIDogc3RhdGUua2V5cy5sZW5ndGg7XG5cbmV4cG9ydCBjb25zdCBnZXRBcGlLZXlzID0gKHN0YXRlOiBBcGlLZXlzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG4gIGNvbnN0IGtleXNUb0ZpbHRlciA9IHN0YXRlLmluY2x1ZGVFeHBpcmVkID8gc3RhdGUua2V5c0luY2x1ZGluZ0V4cGlyZWQgOiBzdGF0ZS5rZXlzO1xuXG4gIHJldHVybiBrZXlzVG9GaWx0ZXIuZmlsdGVyKChrZXkpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChrZXkubmFtZSkgfHwgcmVnZXgudGVzdChrZXkucm9sZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEluY2x1ZGVFeHBpcmVkID0gKHN0YXRlOiBBcGlLZXlzU3RhdGUpID0+IHN0YXRlLmluY2x1ZGVFeHBpcmVkO1xuXG5leHBvcnQgY29uc3QgZ2V0SW5jbHVkZUV4cGlyZWREaXNhYmxlZCA9IChzdGF0ZTogQXBpS2V5c1N0YXRlKSA9PlxuICBzdGF0ZS5rZXlzLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5rZXlzSW5jbHVkaW5nRXhwaXJlZC5sZW5ndGggPiAwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiRmlsdGVySW5wdXQiLCJBcGlLZXlzQWN0aW9uQmFyIiwic2VhcmNoUXVlcnkiLCJkaXNhYmxlZCIsIm9uQWRkQ2xpY2siLCJvblNlYXJjaENoYW5nZSIsImNzcyIsInVzZUNhbGxiYWNrIiwiQWxlcnQiLCJGaWVsZCIsIk1vZGFsIiwidXNlU3R5bGVzMiIsIklucHV0IiwiSWNvbiIsIkNsaXBib2FyZEJ1dHRvbiIsIm5vdGlmeUFwcCIsImNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24iLCJkaXNwYXRjaCIsIkFwaUtleXNBZGRlZE1vZGFsIiwib25EaXNtaXNzIiwiYXBpS2V5Iiwicm9vdFBhdGgiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJnZXRDbGlwYm9hcmRUZXh0Iiwib25DbGlwYm9hcmRDb3B5Iiwic21hbGwiLCJ0aGVtZSIsImxhYmVsIiwic3BhY2luZyIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsInR5cG9ncmFwaHkiLCJib2R5U21hbGwiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ1c2VTdGF0ZSIsIkFwaUtleXNDb250cm9sbGVyIiwiY2hpbGRyZW4iLCJpc0FkZGluZyIsInNldElzQWRkaW5nIiwidG9nZ2xlSXNBZGRpbmciLCJ1c2VFZmZlY3QiLCJyYW5nZVV0aWwiLCJFdmVudHNXaXRoVmFsaWRhdGlvbiIsIkxlZ2FjeUZvcm1zIiwiU2VsZWN0IiwiSW5saW5lRmllbGQiLCJDbG9zZUJ1dHRvbiIsIlNsaWRlRG93biIsIk9yZ1JvbGUiLCJST0xFX09QVElPTlMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm9sZSIsInZhbHVlIiwiaXNWYWxpZEludGVydmFsIiwiaW50ZXJ2YWxUb1NlY29uZHMiLCJ0aW1lUmFuZ2VWYWxpZGF0aW9uRXZlbnRzIiwib25CbHVyIiwicnVsZSIsImVycm9yTWVzc2FnZSIsInRvb2x0aXBUZXh0IiwiQXBpS2V5c0Zvcm0iLCJzaG93Iiwib25DbG9zZSIsIm9uS2V5QWRkZWQiLCJuYW1lIiwic2V0TmFtZSIsInNldFJvbGUiLCJWaWV3ZXIiLCJzZWNvbmRzVG9MaXZlIiwic2V0U2Vjb25kc1RvTGl2ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uTmFtZUNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJvblJvbGVDaGFuZ2UiLCJvblNlY29uZHNUb0xpdmVDaGFuZ2UiLCJQdXJlQ29tcG9uZW50IiwiY29ubmVjdCIsIklubGluZVN3aXRjaCIsIlZlcnRpY2FsR3JvdXAiLCJhcHBFdmVudHMiLCJFbXB0eUxpc3RDVEEiLCJQYWdlIiwiY29uZmlnIiwiY29udGV4dFNydiIsImdldE5hdk1vZGVsIiwiZ2V0VGltZVpvbmUiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiU2hvd01vZGFsUmVhY3RFdmVudCIsIkFwaUtleXNUYWJsZSIsImFkZEFwaUtleSIsImRlbGV0ZUFwaUtleSIsImxvYWRBcGlLZXlzIiwidG9nZ2xlSW5jbHVkZUV4cGlyZWQiLCJzZXRTZWFyY2hRdWVyeSIsImdldEFwaUtleXMiLCJnZXRBcGlLZXlzQ291bnQiLCJnZXRJbmNsdWRlRXhwaXJlZCIsImdldEluY2x1ZGVFeHBpcmVkRGlzYWJsZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNhbkNyZWF0ZSIsImhhc0FjY2VzcyIsIkFjdGlvbkFQSUtleXNDcmVhdGUiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiYXBpS2V5cyIsImFwaUtleXNDb3VudCIsImhhc0ZldGNoZWQiLCJ0aW1lWm9uZSIsInVzZXIiLCJpbmNsdWRlRXhwaXJlZCIsImluY2x1ZGVFeHBpcmVkRGlzYWJsZWQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJBcGlLZXlzUGFnZVVuY29ubmVjdGVkIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImtleSIsImlkIiwibmV3QXBpS2V5Iiwib3Blbk1vZGFsIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJhcHBTdWJVcmwiLCJwdWJsaXNoIiwiY29tcG9uZW50Iiwic2Vjb25kc1RvTGl2ZUFzTnVtYmVyIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoQXBpS2V5cyIsInJlbmRlciIsInNob3dDVEEiLCJzaG93VGFibGUiLCJvblNlYXJjaFF1ZXJ5Q2hhbmdlIiwib25BZGRBcGlLZXkiLCJvbkluY2x1ZGVFeHBpcmVkQ2hhbmdlIiwib25EZWxldGVBcGlLZXkiLCJBcGlLZXlzUGFnZSIsImRhdGVUaW1lRm9ybWF0IiwiRGVsZXRlQnV0dG9uIiwiVG9vbHRpcCIsInVzZVRoZW1lMiIsIm9uRGVsZXRlIiwid2lkdGgiLCJsZW5ndGgiLCJpc0V4cGlyZWQiLCJCb29sZWFuIiwiZXhwaXJhdGlvbiIsIkRhdGUiLCJub3ciLCJnZXRUaW1lIiwidGFibGVSb3ciLCJmb3JtYXREYXRlIiwidG9vbHRpcENvbnRhaW5lciIsImhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhIiwiQWN0aW9uQVBJS2V5c0RlbGV0ZSIsInRleHQiLCJwcmltYXJ5IiwiZ2V0QmFja2VuZFNydiIsImFwaUtleXNMb2FkZWQiLCJpbmNsdWRlRXhwaXJlZFRvZ2dsZWQiLCJpc0ZldGNoaW5nIiwicmVzdWx0IiwicG9zdCIsImtleXNJbmNsdWRpbmdFeHBpcmVkIiwiUHJvbWlzZSIsImFsbCIsImdldCIsImRlbGV0ZSIsInRoZW4iLCJyZWdleCIsIlJlZ0V4cCIsImtleXNUb0ZpbHRlciIsImZpbHRlciIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9