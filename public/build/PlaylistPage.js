"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistPage"],{

/***/ "./public/app/core/components/PageActionBar/PageActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageActionBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




class PageActionBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      searchQuery,
      linkButton,
      setSearchQuery,
      target,
      placeholder = 'Search by name or type'
    } = this.props;
    const linkProps = {
      href: linkButton === null || linkButton === void 0 ? void 0 : linkButton.href,
      disabled: linkButton === null || linkButton === void 0 ? void 0 : linkButton.disabled
    };

    if (target) {
      linkProps.target = target;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "page-action-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
          value: searchQuery,
          onChange: setSearchQuery,
          placeholder: placeholder
        })
      }), linkButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({}, linkProps, {
        children: linkButton.title
      }))]
    });
  }

}

/***/ }),

/***/ "./public/app/features/playlist/EmptyQueryListBanner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyQueryListBanner": () => (/* binding */ EmptyQueryListBanner)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const EmptyQueryListBanner = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.noResult,
    children: "No playlist found!"
  });
};

const getStyles = theme => {
  return {
    noResult: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(2)};
      background: ${theme.colors.secondary.main};
      font-style: italic;
      margin-top: ${theme.spacing(2)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/playlist/PlaylistPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistPage": () => (/* binding */ PlaylistPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PageActionBar/PageActionBar.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _EmptyQueryListBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/playlist/EmptyQueryListBanner.tsx");
/* harmony import */ var _PlaylistPageList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/playlist/PlaylistPageList.tsx");
/* harmony import */ var _StartModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/playlist/StartModal.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/playlist/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _EmptyListCTA, _EmptyQueryListBanner;















const PlaylistPage = ({
  navModel
}) => {
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchQuery);
  const [hasFetched, setHasFetched] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [startPlaylist, setStartPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [playlistToDelete, setPlaylistToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [forcePlaylistsFetch, setForcePlaylistsFetch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [playlists, setPlaylists] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(async () => {
    const playlists = await (0,_api__WEBPACK_IMPORTED_MODULE_10__.getAllPlaylist)(searchQuery);

    if (!hasFetched) {
      setHasFetched(true);
    }

    setPlaylists(playlists);
    setDebouncedSearchQuery(searchQuery);
  }, 350, [forcePlaylistsFetch, searchQuery]);
  const hasPlaylists = playlists && playlists.length > 0;

  const onDismissDelete = () => setPlaylistToDelete(undefined);

  const onDeletePlaylist = () => {
    if (!playlistToDelete) {
      return;
    }

    (0,_api__WEBPACK_IMPORTED_MODULE_10__.deletePlaylist)(playlistToDelete.id).finally(() => {
      setForcePlaylistsFetch(forcePlaylistsFetch + 1);
      setPlaylistToDelete(undefined);
    });
  };

  const emptyListBanner = _EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "There are no playlists created yet",
    buttonIcon: "plus",
    buttonLink: "playlists/new",
    buttonTitle: "Create Playlist",
    proTip: "You can use playlists to cycle dashboards on TVs without user control",
    proTipLink: "http://docs.grafana.org/reference/playlist/",
    proTipLinkTitle: "Learn more",
    proTipTarget: "_blank"
  }));

  const showSearch = playlists.length > 0 || searchQuery.length > 0 || debouncedSearchQuery.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      isLoading: !hasFetched,
      children: [showSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        searchQuery: searchQuery,
        linkButton: {
          title: 'New playlist',
          href: '/playlists/new'
        },
        setSearchQuery: setSearchQuery
      }), !hasPlaylists && searchQuery ? _EmptyQueryListBanner || (_EmptyQueryListBanner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_EmptyQueryListBanner__WEBPACK_IMPORTED_MODULE_7__.EmptyQueryListBanner, {})) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PlaylistPageList__WEBPACK_IMPORTED_MODULE_8__.PlaylistPageList, {
        playlists: playlists,
        setStartPlaylist: setStartPlaylist,
        setPlaylistToDelete: setPlaylistToDelete
      }), !showSearch && emptyListBanner, playlistToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
        title: playlistToDelete.name,
        confirmText: "Delete",
        body: `Are you sure you want to delete '${playlistToDelete.name}' playlist?`,
        onConfirm: onDeletePlaylist,
        isOpen: Boolean(playlistToDelete),
        onDismiss: onDismissDelete
      }), startPlaylist && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_StartModal__WEBPACK_IMPORTED_MODULE_9__.StartModal, {
        playlist: startPlaylist,
        onDismiss: () => setStartPlaylist(undefined)
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'playlists')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistPage));

/***/ }),

/***/ "./public/app/features/playlist/PlaylistPageList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistPageList": () => (/* binding */ PlaylistPageList)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavButton.tsx");
/* harmony import */ var _ShareModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/playlist/ShareModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const PlaylistPageList = ({
  playlists,
  setStartPlaylist,
  setPlaylistToDelete
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
    className: styles.list,
    children: playlists.map(playlist => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
      className: styles.listItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
          children: [playlist.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ModalsController, {
            children: ({
              showModal,
              hideModal
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_4__.DashNavButton, {
              tooltip: "Share playlist",
              icon: "share-alt",
              iconSize: "lg",
              onClick: () => {
                showModal(_ShareModal__WEBPACK_IMPORTED_MODULE_5__.ShareModal, {
                  playlistId: playlist.id,
                  onDismiss: hideModal
                });
              }
            })
          }, "button-share")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Actions, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            icon: "play",
            onClick: () => setStartPlaylist(playlist),
            children: "Start playlist"
          }), app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.isEditor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
              variant: "secondary",
              href: `/playlists/edit/${playlist.id}`,
              icon: "cog",
              children: "Edit playlist"
            }, "edit"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              disabled: false,
              onClick: () => setPlaylistToDelete({
                id: playlist.id,
                name: playlist.name
              }),
              icon: "trash-alt",
              variant: "destructive",
              children: "Delete playlist"
            })]
          })]
        })]
      })
    }, playlist.id.toString()))
  });
};

function getStyles(theme) {
  return {
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'grid'
    }),
    listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      listStyle: 'none'
    })
  };
}

/***/ }),

/***/ "./public/app/features/playlist/ShareModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModal": () => (/* binding */ ShareModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _dashboard_components_ShareModal_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/ShareModal/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;








const ShareModal = ({
  playlistId,
  onDismiss
}) => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [autoFit, setAutofit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const modes = [{
    label: 'Normal',
    value: false
  }, {
    label: 'TV',
    value: 'tv'
  }, {
    label: 'Kiosk',
    value: true
  }];

  const onShareUrlCopy = () => {
    app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, ['Content copied to clipboard']);
  };

  const params = {};

  if (mode) {
    params.kiosk = mode;
  }

  if (autoFit) {
    params.autofitpanels = true;
  }

  const shareUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.urlUtil.renderUrl(`${(0,_dashboard_components_ShareModal_utils__WEBPACK_IMPORTED_MODULE_4__.buildBaseUrl)()}/play/${playlistId}`, params);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    isOpen: true,
    title: "Share playlist",
    onDismiss: onDismiss,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Mode",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
          value: mode,
          options: modes,
          onChange: setMode
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
          label: "Autofit",
          description: "Panel heights will be adjusted to fit screen size",
          name: "autofix",
          value: autoFit,
          onChange: e => setAutofit(e.currentTarget.checked)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Link URL",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          id: "link-url-input",
          value: shareUrl,
          readOnly: true,
          addonAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ClipboardButton, {
            variant: "primary",
            getText: () => shareUrl,
            onClipboardCopy: onShareUrlCopy,
            children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "copy"
            })), " Copy"]
          })
        })
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/playlist/StartModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartModal": () => (/* binding */ StartModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const StartModal = ({
  playlist,
  onDismiss
}) => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [autoFit, setAutofit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const modes = [{
    label: 'Normal',
    value: false
  }, {
    label: 'TV',
    value: 'tv'
  }, {
    label: 'Kiosk',
    value: true
  }];

  const onStart = () => {
    const params = {};

    if (mode) {
      params.kiosk = mode;
    }

    if (autoFit) {
      params.autofitpanels = true;
    }

    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.urlUtil.renderUrl(`/playlists/play/${playlist.id}`, params));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    isOpen: true,
    icon: "play",
    title: "Start playlist",
    onDismiss: onDismiss,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
        label: "Mode",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
          value: mode,
          options: modes,
          onChange: setMode
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
        label: "Autofit",
        description: "Panel heights will be adjusted to fit screen size",
        name: "autofix",
        value: autoFit,
        onChange: e => setAutofit(e.currentTarget.checked)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        variant: "primary",
        onClick: onStart,
        children: ["Start ", playlist.name]
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/playlist/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlaylist": () => (/* binding */ createPlaylist),
/* harmony export */   "deletePlaylist": () => (/* binding */ deletePlaylist),
/* harmony export */   "getAllPlaylist": () => (/* binding */ getAllPlaylist),
/* harmony export */   "getPlaylist": () => (/* binding */ getPlaylist),
/* harmony export */   "updatePlaylist": () => (/* binding */ updatePlaylist)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/store/store.ts");




async function createPlaylist(playlist) {
  await withErrorHandling(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/playlists', playlist));
}
async function updatePlaylist(id, playlist) {
  await withErrorHandling(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/playlists/${id}`, playlist));
}
async function deletePlaylist(id) {
  await withErrorHandling(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/playlists/${id}`), 'Playlist deleted');
}
async function getPlaylist(id) {
  const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/playlists/${id}`);
  return result;
}
async function getAllPlaylist(query) {
  const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/playlists/', {
    query
  });
  return result;
}

async function withErrorHandling(apiCall, message = 'Playlist saved') {
  try {
    await apiCall();
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)(message)));
  } catch (e) {
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__.dispatch)((0,_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)('Unable to save playlist', e)));
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixHQUF2QyxDQUFwQztBQUNBLFNBQU9GLE1BQVA7QUFDRDs7QUFFRCxlQUFlTixpQkFBZixDQUFpQ1MsT0FBakMsRUFBK0RDLE9BQU8sR0FBRyxnQkFBekUsRUFBMkY7QUFDekYsTUFBSTtBQUNGLFVBQU1ELE9BQU8sRUFBYjtBQUNBWCxJQUFBQSxzREFBUSxDQUFDSCx3REFBUyxDQUFDRSxxRkFBeUIsQ0FBQ2EsT0FBRCxDQUExQixDQUFWLENBQVI7QUFDRCxHQUhELENBR0UsT0FBT3RCLENBQVAsRUFBVTtBQUNWVSxJQUFBQSxzREFBUSxDQUFDSCx3REFBUyxDQUFDQyxtRkFBdUIsQ0FBQyx5QkFBRCxFQUE0QlIsQ0FBNUIsQ0FBeEIsQ0FBVixDQUFSO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlQWN0aW9uQmFyL1BhZ2VBY3Rpb25CYXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L0VtcHR5UXVlcnlMaXN0QmFubmVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0UGFnZUxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1NoYXJlTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1N0YXJ0TW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L2FwaS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTGlua0J1dHRvbiwgRmlsdGVySW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBzZXRTZWFyY2hRdWVyeTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGxpbmtCdXR0b24/OiB7IGhyZWY6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgZGlzYWJsZWQ/OiBib29sZWFuIH07XG4gIHRhcmdldD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VBY3Rpb25CYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlYXJjaFF1ZXJ5LCBsaW5rQnV0dG9uLCBzZXRTZWFyY2hRdWVyeSwgdGFyZ2V0LCBwbGFjZWhvbGRlciA9ICdTZWFyY2ggYnkgbmFtZSBvciB0eXBlJyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsaW5rUHJvcHM6IHR5cGVvZiBMaW5rQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHsgaHJlZjogbGlua0J1dHRvbj8uaHJlZiwgZGlzYWJsZWQ6IGxpbmtCdXR0b24/LmRpc2FibGVkIH07XG5cbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICBsaW5rUHJvcHMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxuICAgICAgICAgIDxGaWx0ZXJJbnB1dCB2YWx1ZT17c2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXtzZXRTZWFyY2hRdWVyeX0gcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2xpbmtCdXR0b24gJiYgPExpbmtCdXR0b24gey4uLmxpbmtQcm9wc30+e2xpbmtCdXR0b24udGl0bGV9PC9MaW5rQnV0dG9uPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgY29uc3QgRW1wdHlRdWVyeUxpc3RCYW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9SZXN1bHR9Pk5vIHBsYXlsaXN0IGZvdW5kITwvZGl2Pjtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIG5vUmVzdWx0OiBjc3NgXG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5Lm1haW59O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBNYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgUGFnZUFjdGlvbkJhciBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2VBY3Rpb25CYXIvUGFnZUFjdGlvbkJhcic7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IEVtcHR5TGlzdENUQSBmcm9tICcuLi8uLi9jb3JlL2NvbXBvbmVudHMvRW1wdHlMaXN0Q1RBL0VtcHR5TGlzdENUQSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJy4uLy4uL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5cbmltcG9ydCB7IEVtcHR5UXVlcnlMaXN0QmFubmVyIH0gZnJvbSAnLi9FbXB0eVF1ZXJ5TGlzdEJhbm5lcic7XG5pbXBvcnQgeyBQbGF5bGlzdFBhZ2VMaXN0IH0gZnJvbSAnLi9QbGF5bGlzdFBhZ2VMaXN0JztcbmltcG9ydCB7IFN0YXJ0TW9kYWwgfSBmcm9tICcuL1N0YXJ0TW9kYWwnO1xuaW1wb3J0IHsgZGVsZXRlUGxheWxpc3QsIGdldEFsbFBsYXlsaXN0IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgUGxheWxpc3REVE8gfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIENvbm5lY3RlZFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xufVxuZXhwb3J0IGludGVyZmFjZSBQbGF5bGlzdFBhZ2VQcm9wcyBleHRlbmRzIENvbm5lY3RlZFByb3BzLCBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RQYWdlOiBGQzxQbGF5bGlzdFBhZ2VQcm9wcz4gPSAoeyBuYXZNb2RlbCB9KSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGVib3VuY2VkU2VhcmNoUXVlcnksIHNldERlYm91bmNlZFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKHNlYXJjaFF1ZXJ5KTtcbiAgY29uc3QgW2hhc0ZldGNoZWQsIHNldEhhc0ZldGNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3RhcnRQbGF5bGlzdCwgc2V0U3RhcnRQbGF5bGlzdF0gPSB1c2VTdGF0ZTxQbGF5bGlzdERUTyB8IHVuZGVmaW5lZD4oKTtcbiAgY29uc3QgW3BsYXlsaXN0VG9EZWxldGUsIHNldFBsYXlsaXN0VG9EZWxldGVdID0gdXNlU3RhdGU8UGxheWxpc3REVE8gfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IFtmb3JjZVBsYXlsaXN0c0ZldGNoLCBzZXRGb3JjZVBsYXlsaXN0c0ZldGNoXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IFtwbGF5bGlzdHMsIHNldFBsYXlsaXN0c10gPSB1c2VTdGF0ZTxQbGF5bGlzdERUT1tdPihbXSk7XG5cbiAgdXNlRGVib3VuY2UoXG4gICAgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcGxheWxpc3RzID0gYXdhaXQgZ2V0QWxsUGxheWxpc3Qoc2VhcmNoUXVlcnkpO1xuICAgICAgaWYgKCFoYXNGZXRjaGVkKSB7XG4gICAgICAgIHNldEhhc0ZldGNoZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgICBzZXRQbGF5bGlzdHMocGxheWxpc3RzKTtcbiAgICAgIHNldERlYm91bmNlZFNlYXJjaFF1ZXJ5KHNlYXJjaFF1ZXJ5KTtcbiAgICB9LFxuICAgIDM1MCxcbiAgICBbZm9yY2VQbGF5bGlzdHNGZXRjaCwgc2VhcmNoUXVlcnldXG4gICk7XG5cbiAgY29uc3QgaGFzUGxheWxpc3RzID0gcGxheWxpc3RzICYmIHBsYXlsaXN0cy5sZW5ndGggPiAwO1xuICBjb25zdCBvbkRpc21pc3NEZWxldGUgPSAoKSA9PiBzZXRQbGF5bGlzdFRvRGVsZXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IG9uRGVsZXRlUGxheWxpc3QgPSAoKSA9PiB7XG4gICAgaWYgKCFwbGF5bGlzdFRvRGVsZXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlbGV0ZVBsYXlsaXN0KHBsYXlsaXN0VG9EZWxldGUuaWQpLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgc2V0Rm9yY2VQbGF5bGlzdHNGZXRjaChmb3JjZVBsYXlsaXN0c0ZldGNoICsgMSk7XG4gICAgICBzZXRQbGF5bGlzdFRvRGVsZXRlKHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZW1wdHlMaXN0QmFubmVyID0gKFxuICAgIDxFbXB0eUxpc3RDVEFcbiAgICAgIHRpdGxlPVwiVGhlcmUgYXJlIG5vIHBsYXlsaXN0cyBjcmVhdGVkIHlldFwiXG4gICAgICBidXR0b25JY29uPVwicGx1c1wiXG4gICAgICBidXR0b25MaW5rPVwicGxheWxpc3RzL25ld1wiXG4gICAgICBidXR0b25UaXRsZT1cIkNyZWF0ZSBQbGF5bGlzdFwiXG4gICAgICBwcm9UaXA9XCJZb3UgY2FuIHVzZSBwbGF5bGlzdHMgdG8gY3ljbGUgZGFzaGJvYXJkcyBvbiBUVnMgd2l0aG91dCB1c2VyIGNvbnRyb2xcIlxuICAgICAgcHJvVGlwTGluaz1cImh0dHA6Ly9kb2NzLmdyYWZhbmEub3JnL3JlZmVyZW5jZS9wbGF5bGlzdC9cIlxuICAgICAgcHJvVGlwTGlua1RpdGxlPVwiTGVhcm4gbW9yZVwiXG4gICAgICBwcm9UaXBUYXJnZXQ9XCJfYmxhbmtcIlxuICAgIC8+XG4gICk7XG5cbiAgY29uc3Qgc2hvd1NlYXJjaCA9IHBsYXlsaXN0cy5sZW5ndGggPiAwIHx8IHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDAgfHwgZGVib3VuY2VkU2VhcmNoUXVlcnkubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9eyFoYXNGZXRjaGVkfT5cbiAgICAgICAge3Nob3dTZWFyY2ggJiYgKFxuICAgICAgICAgIDxQYWdlQWN0aW9uQmFyXG4gICAgICAgICAgICBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBsaW5rQnV0dG9uPXt7IHRpdGxlOiAnTmV3IHBsYXlsaXN0JywgaHJlZjogJy9wbGF5bGlzdHMvbmV3JyB9fVxuICAgICAgICAgICAgc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeyFoYXNQbGF5bGlzdHMgJiYgc2VhcmNoUXVlcnkgPyAoXG4gICAgICAgICAgPEVtcHR5UXVlcnlMaXN0QmFubmVyIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFBsYXlsaXN0UGFnZUxpc3RcbiAgICAgICAgICAgIHBsYXlsaXN0cz17cGxheWxpc3RzfVxuICAgICAgICAgICAgc2V0U3RhcnRQbGF5bGlzdD17c2V0U3RhcnRQbGF5bGlzdH1cbiAgICAgICAgICAgIHNldFBsYXlsaXN0VG9EZWxldGU9e3NldFBsYXlsaXN0VG9EZWxldGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFzaG93U2VhcmNoICYmIGVtcHR5TGlzdEJhbm5lcn1cbiAgICAgICAge3BsYXlsaXN0VG9EZWxldGUgJiYgKFxuICAgICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICAgIHRpdGxlPXtwbGF5bGlzdFRvRGVsZXRlLm5hbWV9XG4gICAgICAgICAgICBjb25maXJtVGV4dD1cIkRlbGV0ZVwiXG4gICAgICAgICAgICBib2R5PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAnJHtwbGF5bGlzdFRvRGVsZXRlLm5hbWV9JyBwbGF5bGlzdD9gfVxuICAgICAgICAgICAgb25Db25maXJtPXtvbkRlbGV0ZVBsYXlsaXN0fVxuICAgICAgICAgICAgaXNPcGVuPXtCb29sZWFuKHBsYXlsaXN0VG9EZWxldGUpfVxuICAgICAgICAgICAgb25EaXNtaXNzPXtvbkRpc21pc3NEZWxldGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3N0YXJ0UGxheWxpc3QgJiYgPFN0YXJ0TW9kYWwgcGxheWxpc3Q9e3N0YXJ0UGxheWxpc3R9IG9uRGlzbWlzcz17KCkgPT4gc2V0U3RhcnRQbGF5bGlzdCh1bmRlZmluZWQpfSAvPn1cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHM6IE1hcFN0YXRlVG9Qcm9wczxDb25uZWN0ZWRQcm9wcywge30sIFN0b3JlU3RhdGU+ID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdwbGF5bGlzdHMnKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGxheWxpc3RQYWdlKTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIExpbmtCdXR0b24sIE1vZGFsc0NvbnRyb2xsZXIsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuXG5pbXBvcnQgeyBEYXNoTmF2QnV0dG9uIH0gZnJvbSAnLi4vZGFzaGJvYXJkL2NvbXBvbmVudHMvRGFzaE5hdi9EYXNoTmF2QnV0dG9uJztcblxuaW1wb3J0IHsgU2hhcmVNb2RhbCB9IGZyb20gJy4vU2hhcmVNb2RhbCc7XG5pbXBvcnQgeyBQbGF5bGlzdERUTyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzZXRTdGFydFBsYXlsaXN0OiAocGxheWxpc3RJdGVtOiBQbGF5bGlzdERUTykgPT4gdm9pZDtcbiAgc2V0UGxheWxpc3RUb0RlbGV0ZTogKHBsYXlsaXN0SXRlbTogUGxheWxpc3REVE8pID0+IHZvaWQ7XG4gIHBsYXlsaXN0czogUGxheWxpc3REVE9bXSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0UGFnZUxpc3QgPSAoeyBwbGF5bGlzdHMsIHNldFN0YXJ0UGxheWxpc3QsIHNldFBsYXlsaXN0VG9EZWxldGUgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgIHtwbGF5bGlzdHMhLm1hcCgocGxheWxpc3Q6IFBsYXlsaXN0RFRPKSA9PiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saXN0SXRlbX0ga2V5PXtwbGF5bGlzdC5pZC50b1N0cmluZygpfT5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxDYXJkLkhlYWRpbmc+XG4gICAgICAgICAgICAgIHtwbGF5bGlzdC5uYW1lfVxuICAgICAgICAgICAgICA8TW9kYWxzQ29udHJvbGxlciBrZXk9XCJidXR0b24tc2hhcmVcIj5cbiAgICAgICAgICAgICAgICB7KHsgc2hvd01vZGFsLCBoaWRlTW9kYWwgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPERhc2hOYXZCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIlNoYXJlIHBsYXlsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInNoYXJlLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgIGljb25TaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsKFNoYXJlTW9kYWwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlsaXN0SWQ6IHBsYXlsaXN0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzOiBoaWRlTW9kYWwsXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvTW9kYWxzQ29udHJvbGxlcj5cbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkaW5nPlxuICAgICAgICAgICAgPENhcmQuQWN0aW9ucz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaWNvbj1cInBsYXlcIiBvbkNsaWNrPXsoKSA9PiBzZXRTdGFydFBsYXlsaXN0KHBsYXlsaXN0KX0+XG4gICAgICAgICAgICAgICAgU3RhcnQgcGxheWxpc3RcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIHtjb250ZXh0U3J2LmlzRWRpdG9yICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPExpbmtCdXR0b24ga2V5PVwiZWRpdFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBocmVmPXtgL3BsYXlsaXN0cy9lZGl0LyR7cGxheWxpc3QuaWR9YH0gaWNvbj1cImNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICBFZGl0IHBsYXlsaXN0XG4gICAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGxheWxpc3RUb0RlbGV0ZSh7IGlkOiBwbGF5bGlzdC5pZCwgbmFtZTogcGxheWxpc3QubmFtZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZSBwbGF5bGlzdFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NhcmQuQWN0aW9ucz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgbGlzdDogY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICB9KSxcbiAgICBsaXN0SXRlbTogY3NzKHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIH0pLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBcHBFdmVudHMsIFNlbGVjdGFibGVWYWx1ZSwgVXJsUXVlcnlNYXAsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IENoZWNrYm94LCBDbGlwYm9hcmRCdXR0b24sIEZpZWxkLCBGaWVsZFNldCwgSWNvbiwgSW5wdXQsIE1vZGFsLCBSYWRpb0J1dHRvbkdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGFwcEV2ZW50cyBmcm9tICdhcHAvY29yZS9hcHBfZXZlbnRzJztcblxuaW1wb3J0IHsgYnVpbGRCYXNlVXJsIH0gZnJvbSAnLi4vZGFzaGJvYXJkL2NvbXBvbmVudHMvU2hhcmVNb2RhbC91dGlscyc7XG5cbmltcG9ydCB7IFBsYXlsaXN0TW9kZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgU2hhcmVNb2RhbFByb3BzIHtcbiAgcGxheWxpc3RJZDogbnVtYmVyO1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBTaGFyZU1vZGFsID0gKHsgcGxheWxpc3RJZCwgb25EaXNtaXNzIH06IFNoYXJlTW9kYWxQcm9wcykgPT4ge1xuICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSB1c2VTdGF0ZTxQbGF5bGlzdE1vZGU+KGZhbHNlKTtcbiAgY29uc3QgW2F1dG9GaXQsIHNldEF1dG9maXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1vZGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8UGxheWxpc3RNb2RlPj4gPSBbXG4gICAgeyBsYWJlbDogJ05vcm1hbCcsIHZhbHVlOiBmYWxzZSB9LFxuICAgIHsgbGFiZWw6ICdUVicsIHZhbHVlOiAndHYnIH0sXG4gICAgeyBsYWJlbDogJ0tpb3NrJywgdmFsdWU6IHRydWUgfSxcbiAgXTtcblxuICBjb25zdCBvblNoYXJlVXJsQ29weSA9ICgpID0+IHtcbiAgICBhcHBFdmVudHMuZW1pdChBcHBFdmVudHMuYWxlcnRTdWNjZXNzLCBbJ0NvbnRlbnQgY29waWVkIHRvIGNsaXBib2FyZCddKTtcbiAgfTtcblxuICBjb25zdCBwYXJhbXM6IFVybFF1ZXJ5TWFwID0ge307XG4gIGlmIChtb2RlKSB7XG4gICAgcGFyYW1zLmtpb3NrID0gbW9kZTtcbiAgfVxuICBpZiAoYXV0b0ZpdCkge1xuICAgIHBhcmFtcy5hdXRvZml0cGFuZWxzID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHNoYXJlVXJsID0gdXJsVXRpbC5yZW5kZXJVcmwoYCR7YnVpbGRCYXNlVXJsKCl9L3BsYXkvJHtwbGF5bGlzdElkfWAsIHBhcmFtcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXt0cnVlfSB0aXRsZT1cIlNoYXJlIHBsYXlsaXN0XCIgb25EaXNtaXNzPXtvbkRpc21pc3N9PlxuICAgICAgPEZpZWxkU2V0PlxuICAgICAgICA8RmllbGQgbGFiZWw9XCJNb2RlXCI+XG4gICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXAgdmFsdWU9e21vZGV9IG9wdGlvbnM9e21vZGVzfSBvbkNoYW5nZT17c2V0TW9kZX0gLz5cbiAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPEZpZWxkPlxuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgbGFiZWw9XCJBdXRvZml0XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUGFuZWwgaGVpZ2h0cyB3aWxsIGJlIGFkanVzdGVkIHRvIGZpdCBzY3JlZW4gc2l6ZVwiXG4gICAgICAgICAgICBuYW1lPVwiYXV0b2ZpeFwiXG4gICAgICAgICAgICB2YWx1ZT17YXV0b0ZpdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0b2ZpdChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICA8RmllbGQgbGFiZWw9XCJMaW5rIFVSTFwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgaWQ9XCJsaW5rLXVybC1pbnB1dFwiXG4gICAgICAgICAgICB2YWx1ZT17c2hhcmVVcmx9XG4gICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgYWRkb25BZnRlcj17XG4gICAgICAgICAgICAgIDxDbGlwYm9hcmRCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBnZXRUZXh0PXsoKSA9PiBzaGFyZVVybH0gb25DbGlwYm9hcmRDb3B5PXtvblNoYXJlVXJsQ29weX0+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImNvcHlcIiAvPiBDb3B5XG4gICAgICAgICAgICAgIDwvQ2xpcGJvYXJkQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmllbGQ+XG4gICAgICA8L0ZpZWxkU2V0PlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZpZWxkLCBGaWVsZFNldCwgTW9kYWwsIFJhZGlvQnV0dG9uR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFBsYXlsaXN0RFRPLCBQbGF5bGlzdE1vZGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGFydE1vZGFsUHJvcHMge1xuICBwbGF5bGlzdDogUGxheWxpc3REVE87XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFN0YXJ0TW9kYWw6IEZDPFN0YXJ0TW9kYWxQcm9wcz4gPSAoeyBwbGF5bGlzdCwgb25EaXNtaXNzIH0pID0+IHtcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGU8UGxheWxpc3RNb2RlPihmYWxzZSk7XG4gIGNvbnN0IFthdXRvRml0LCBzZXRBdXRvZml0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBtb2RlczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFBsYXlsaXN0TW9kZT4+ID0gW1xuICAgIHsgbGFiZWw6ICdOb3JtYWwnLCB2YWx1ZTogZmFsc2UgfSxcbiAgICB7IGxhYmVsOiAnVFYnLCB2YWx1ZTogJ3R2JyB9LFxuICAgIHsgbGFiZWw6ICdLaW9zaycsIHZhbHVlOiB0cnVlIH0sXG4gIF07XG5cbiAgY29uc3Qgb25TdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHt9O1xuICAgIGlmIChtb2RlKSB7XG4gICAgICBwYXJhbXMua2lvc2sgPSBtb2RlO1xuICAgIH1cbiAgICBpZiAoYXV0b0ZpdCkge1xuICAgICAgcGFyYW1zLmF1dG9maXRwYW5lbHMgPSB0cnVlO1xuICAgIH1cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh1cmxVdGlsLnJlbmRlclVybChgL3BsYXlsaXN0cy9wbGF5LyR7cGxheWxpc3QuaWR9YCwgcGFyYW1zKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXt0cnVlfSBpY29uPVwicGxheVwiIHRpdGxlPVwiU3RhcnQgcGxheWxpc3RcIiBvbkRpc21pc3M9e29uRGlzbWlzc30+XG4gICAgICA8RmllbGRTZXQ+XG4gICAgICAgIDxGaWVsZCBsYWJlbD1cIk1vZGVcIj5cbiAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCB2YWx1ZT17bW9kZX0gb3B0aW9ucz17bW9kZXN9IG9uQ2hhbmdlPXtzZXRNb2RlfSAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBsYWJlbD1cIkF1dG9maXRcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUGFuZWwgaGVpZ2h0cyB3aWxsIGJlIGFkanVzdGVkIHRvIGZpdCBzY3JlZW4gc2l6ZVwiXG4gICAgICAgICAgbmFtZT1cImF1dG9maXhcIlxuICAgICAgICAgIHZhbHVlPXthdXRvRml0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QXV0b2ZpdChlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCl9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkU2V0PlxuICAgICAgPE1vZGFsLkJ1dHRvblJvdz5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uU3RhcnR9PlxuICAgICAgICAgIFN0YXJ0IHtwbGF5bGlzdC5uYW1lfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvTW9kYWwuQnV0dG9uUm93PlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICcuLi8uLi9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24sIGNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdCwgUGxheWxpc3REVE8gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBsYXlsaXN0KHBsYXlsaXN0OiBQbGF5bGlzdCkge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9wbGF5bGlzdHMnLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGxheWxpc3QoaWQ6IG51bWJlciwgcGxheWxpc3Q6IFBsYXlsaXN0KSB7XG4gIGF3YWl0IHdpdGhFcnJvckhhbmRsaW5nKCgpID0+IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvcGxheWxpc3RzLyR7aWR9YCwgcGxheWxpc3QpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVBsYXlsaXN0KGlkOiBudW1iZXIpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9wbGF5bGlzdHMvJHtpZH1gKSwgJ1BsYXlsaXN0IGRlbGV0ZWQnKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYXlsaXN0KGlkOiBudW1iZXIpOiBQcm9taXNlPFBsYXlsaXN0PiB7XG4gIGNvbnN0IHJlc3VsdDogUGxheWxpc3QgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3BsYXlsaXN0cy8ke2lkfWApO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGxheWxpc3QocXVlcnk6IHN0cmluZyk6IFByb21pc2U8UGxheWxpc3REVE9bXT4ge1xuICBjb25zdCByZXN1bHQ6IFBsYXlsaXN0RFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsYXlsaXN0cy8nLCB7IHF1ZXJ5IH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5hc3luYyBmdW5jdGlvbiB3aXRoRXJyb3JIYW5kbGluZyhhcGlDYWxsOiAoKSA9PiBQcm9taXNlPHZvaWQ+LCBtZXNzYWdlID0gJ1BsYXlsaXN0IHNhdmVkJykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUNhbGwoKTtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbihtZXNzYWdlKSkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdVbmFibGUgdG8gc2F2ZSBwbGF5bGlzdCcsIGUpKSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJMaW5rQnV0dG9uIiwiRmlsdGVySW5wdXQiLCJQYWdlQWN0aW9uQmFyIiwicmVuZGVyIiwic2VhcmNoUXVlcnkiLCJsaW5rQnV0dG9uIiwic2V0U2VhcmNoUXVlcnkiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInByb3BzIiwibGlua1Byb3BzIiwiaHJlZiIsImRpc2FibGVkIiwidGl0bGUiLCJjc3MiLCJ1c2VTdHlsZXMyIiwiRW1wdHlRdWVyeUxpc3RCYW5uZXIiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJub1Jlc3VsdCIsInRoZW1lIiwic3BhY2luZyIsImNvbG9ycyIsInNlY29uZGFyeSIsIm1haW4iLCJ1c2VTdGF0ZSIsImNvbm5lY3QiLCJ1c2VEZWJvdW5jZSIsIkNvbmZpcm1Nb2RhbCIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsIkVtcHR5TGlzdENUQSIsIlBsYXlsaXN0UGFnZUxpc3QiLCJTdGFydE1vZGFsIiwiZGVsZXRlUGxheWxpc3QiLCJnZXRBbGxQbGF5bGlzdCIsIlBsYXlsaXN0UGFnZSIsIm5hdk1vZGVsIiwiZGVib3VuY2VkU2VhcmNoUXVlcnkiLCJzZXREZWJvdW5jZWRTZWFyY2hRdWVyeSIsImhhc0ZldGNoZWQiLCJzZXRIYXNGZXRjaGVkIiwic3RhcnRQbGF5bGlzdCIsInNldFN0YXJ0UGxheWxpc3QiLCJwbGF5bGlzdFRvRGVsZXRlIiwic2V0UGxheWxpc3RUb0RlbGV0ZSIsImZvcmNlUGxheWxpc3RzRmV0Y2giLCJzZXRGb3JjZVBsYXlsaXN0c0ZldGNoIiwicGxheWxpc3RzIiwic2V0UGxheWxpc3RzIiwiaGFzUGxheWxpc3RzIiwibGVuZ3RoIiwib25EaXNtaXNzRGVsZXRlIiwidW5kZWZpbmVkIiwib25EZWxldGVQbGF5bGlzdCIsImlkIiwiZmluYWxseSIsImVtcHR5TGlzdEJhbm5lciIsInNob3dTZWFyY2giLCJuYW1lIiwiQm9vbGVhbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiLCJCdXR0b24iLCJDYXJkIiwiTW9kYWxzQ29udHJvbGxlciIsImNvbnRleHRTcnYiLCJEYXNoTmF2QnV0dG9uIiwiU2hhcmVNb2RhbCIsImxpc3QiLCJtYXAiLCJwbGF5bGlzdCIsImxpc3RJdGVtIiwic2hvd01vZGFsIiwiaGlkZU1vZGFsIiwicGxheWxpc3RJZCIsIm9uRGlzbWlzcyIsImlzRWRpdG9yIiwidG9TdHJpbmciLCJkaXNwbGF5IiwibGlzdFN0eWxlIiwiQXBwRXZlbnRzIiwidXJsVXRpbCIsIkNoZWNrYm94IiwiQ2xpcGJvYXJkQnV0dG9uIiwiRmllbGQiLCJGaWVsZFNldCIsIkljb24iLCJJbnB1dCIsIk1vZGFsIiwiUmFkaW9CdXR0b25Hcm91cCIsImFwcEV2ZW50cyIsImJ1aWxkQmFzZVVybCIsIm1vZGUiLCJzZXRNb2RlIiwiYXV0b0ZpdCIsInNldEF1dG9maXQiLCJtb2RlcyIsImxhYmVsIiwidmFsdWUiLCJvblNoYXJlVXJsQ29weSIsImVtaXQiLCJhbGVydFN1Y2Nlc3MiLCJwYXJhbXMiLCJraW9zayIsImF1dG9maXRwYW5lbHMiLCJzaGFyZVVybCIsInJlbmRlclVybCIsImUiLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tlZCIsImxvY2F0aW9uU2VydmljZSIsIm9uU3RhcnQiLCJwdXNoIiwiZ2V0QmFja2VuZFNydiIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImRpc3BhdGNoIiwiY3JlYXRlUGxheWxpc3QiLCJ3aXRoRXJyb3JIYW5kbGluZyIsInBvc3QiLCJ1cGRhdGVQbGF5bGlzdCIsInB1dCIsImRlbGV0ZSIsImdldFBsYXlsaXN0IiwicmVzdWx0IiwiZ2V0IiwicXVlcnkiLCJhcGlDYWxsIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=