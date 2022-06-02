"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9218],{

 "./public/app/core/components/PageActionBar/PageActionBar.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => ( PageActionBar)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




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

    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "page-action-bar",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
          value: searchQuery,
          onChange: setSearchQuery,
          placeholder: placeholder
        })
      }), linkButton && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({}, linkProps, {
        children: linkButton.title
      }))]
    });
  }

}

 }),

 "./public/app/features/playlist/PlaylistPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "PlaylistPage": () => ( PlaylistPage),
  "default": () => ( playlist_PlaylistPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var PageActionBar = __webpack_require__("./public/app/core/components/PageActionBar/PageActionBar.tsx");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;




const EmptyQueryListBanner = () => {
  const styles = (0,src.useStyles2)(getStyles);
  return (0,jsx_runtime.jsx)("div", {
    className: styles.noResult,
    children: "No playlist found!"
  });
};

const getStyles = theme => {
  return {
    noResult: emotion_css_esm.css`
      padding: ${theme.spacing(2)};
      background: ${theme.colors.secondary.main};
      font-style: italic;
      margin-top: ${theme.spacing(2)};
    `
  };
};
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var DashNavButton = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavButton.tsx");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var app_events = __webpack_require__("./public/app/core/app_events.ts");
var utils = __webpack_require__("./public/app/features/dashboard/components/ShareModal/utils.ts");
;
var _Icon;








const ShareModal = _ref => {
  let {
    playlistId,
    onDismiss
  } = _ref;
  const [mode, setMode] = (0,react.useState)(false);
  const [autoFit, setAutofit] = (0,react.useState)(false);
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
    app_events.Z.emit(grafana_data_src.AppEvents.alertSuccess, ['Content copied to clipboard']);
  };

  const params = {};

  if (mode) {
    params.kiosk = mode;
  }

  if (autoFit) {
    params.autofitpanels = true;
  }

  const shareUrl = grafana_data_src.urlUtil.renderUrl(`${(0,utils/* buildBaseUrl */.OS)()}/play/${playlistId}`, params);
  return (0,jsx_runtime.jsx)(src.Modal, {
    isOpen: true,
    title: "Share playlist",
    onDismiss: onDismiss,
    children: (0,jsx_runtime.jsxs)(src.FieldSet, {
      children: [(0,jsx_runtime.jsx)(src.Field, {
        label: "Mode",
        children: (0,jsx_runtime.jsx)(src.RadioButtonGroup, {
          value: mode,
          options: modes,
          onChange: setMode
        })
      }), (0,jsx_runtime.jsx)(src.Field, {
        children: (0,jsx_runtime.jsx)(src.Checkbox, {
          label: "Autofit",
          description: "Panel heights will be adjusted to fit screen size",
          name: "autofix",
          value: autoFit,
          onChange: e => setAutofit(e.currentTarget.checked)
        })
      }), (0,jsx_runtime.jsx)(src.Field, {
        label: "Link URL",
        children: (0,jsx_runtime.jsx)(src.Input, {
          id: "link-url-input",
          value: shareUrl,
          readOnly: true,
          addonAfter: (0,jsx_runtime.jsxs)(src.ClipboardButton, {
            variant: "primary",
            getText: () => shareUrl,
            onClipboardCopy: onShareUrlCopy,
            children: [_Icon || (_Icon = (0,jsx_runtime.jsx)(src.Icon, {
              name: "copy"
            })), " Copy"]
          })
        })
      })]
    })
  });
};
;









const PlaylistPageList = _ref => {
  let {
    playlists,
    setStartPlaylist,
    setPlaylistToDelete
  } = _ref;
  const styles = (0,src.useStyles2)(PlaylistPageList_getStyles);
  return (0,jsx_runtime.jsx)("ul", {
    className: styles.list,
    children: playlists.map(playlist => (0,jsx_runtime.jsx)("li", {
      className: styles.listItem,
      children: (0,jsx_runtime.jsxs)(src.Card, {
        children: [(0,jsx_runtime.jsxs)(src.Card.Heading, {
          children: [playlist.name, (0,jsx_runtime.jsx)(src.ModalsController, {
            children: _ref2 => {
              let {
                showModal,
                hideModal
              } = _ref2;
              return (0,jsx_runtime.jsx)(DashNavButton.u, {
                tooltip: "Share playlist",
                icon: "share-alt",
                iconSize: "lg",
                onClick: () => {
                  showModal(ShareModal, {
                    playlistId: playlist.id,
                    onDismiss: hideModal
                  });
                }
              });
            }
          }, "button-share")]
        }), (0,jsx_runtime.jsxs)(src.Card.Actions, {
          children: [(0,jsx_runtime.jsx)(src.Button, {
            variant: "secondary",
            icon: "play",
            onClick: () => setStartPlaylist(playlist),
            children: "Start playlist"
          }), context_srv.Vt.isEditor && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [(0,jsx_runtime.jsx)(src.LinkButton, {
              variant: "secondary",
              href: `/playlists/edit/${playlist.id}`,
              icon: "cog",
              children: "Edit playlist"
            }, "edit"), (0,jsx_runtime.jsx)(src.Button, {
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

function PlaylistPageList_getStyles(theme) {
  return {
    list: (0,emotion_css_esm.css)({
      display: 'grid'
    }),
    listItem: (0,emotion_css_esm.css)({
      listStyle: 'none'
    })
  };
}
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;






const StartModal = _ref => {
  let {
    playlist,
    onDismiss
  } = _ref;
  const [mode, setMode] = (0,react.useState)(false);
  const [autoFit, setAutofit] = (0,react.useState)(false);
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

    grafana_runtime_src.locationService.push(grafana_data_src.urlUtil.renderUrl(`/playlists/play/${playlist.id}`, params));
  };

  return (0,jsx_runtime.jsxs)(src.Modal, {
    isOpen: true,
    icon: "play",
    title: "Start playlist",
    onDismiss: onDismiss,
    children: [(0,jsx_runtime.jsxs)(src.FieldSet, {
      children: [(0,jsx_runtime.jsx)(src.Field, {
        label: "Mode",
        children: (0,jsx_runtime.jsx)(src.RadioButtonGroup, {
          value: mode,
          options: modes,
          onChange: setMode
        })
      }), (0,jsx_runtime.jsx)(src.Checkbox, {
        label: "Autofit",
        description: "Panel heights will be adjusted to fit screen size",
        name: "autofix",
        value: autoFit,
        onChange: e => setAutofit(e.currentTarget.checked)
      })]
    }), (0,jsx_runtime.jsx)(src.Modal.ButtonRow, {
      children: (0,jsx_runtime.jsxs)(src.Button, {
        variant: "primary",
        onClick: onStart,
        children: ["Start ", playlist.name]
      })
    })]
  });
};
var api = __webpack_require__("./public/app/features/playlist/api.ts");
;
var _EmptyListCTA, _EmptyQueryListBanner;















const PlaylistPage = _ref => {
  let {
    navModel
  } = _ref;
  const [searchQuery, setSearchQuery] = (0,react.useState)('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = (0,react.useState)(searchQuery);
  const [hasFetched, setHasFetched] = (0,react.useState)(false);
  const [startPlaylist, setStartPlaylist] = (0,react.useState)();
  const [playlistToDelete, setPlaylistToDelete] = (0,react.useState)();
  const [forcePlaylistsFetch, setForcePlaylistsFetch] = (0,react.useState)(0);
  const [playlists, setPlaylists] = (0,react.useState)([]);
  (0,useDebounce.Z)(async () => {
    const playlists = await (0,api.Dv)(searchQuery);

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

    (0,api.l8)(playlistToDelete.id).finally(() => {
      setForcePlaylistsFetch(forcePlaylistsFetch + 1);
      setPlaylistToDelete(undefined);
    });
  };

  const emptyListBanner = _EmptyListCTA || (_EmptyListCTA = (0,jsx_runtime.jsx)(EmptyListCTA.Z, {
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
  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: navModel,
    children: (0,jsx_runtime.jsxs)(Page.Z.Contents, {
      isLoading: !hasFetched,
      children: [showSearch && (0,jsx_runtime.jsx)(PageActionBar.Z, {
        searchQuery: searchQuery,
        linkButton: {
          title: 'New playlist',
          href: '/playlists/new'
        },
        setSearchQuery: setSearchQuery
      }), !hasPlaylists && searchQuery ? _EmptyQueryListBanner || (_EmptyQueryListBanner = (0,jsx_runtime.jsx)(EmptyQueryListBanner, {})) : (0,jsx_runtime.jsx)(PlaylistPageList, {
        playlists: playlists,
        setStartPlaylist: setStartPlaylist,
        setPlaylistToDelete: setPlaylistToDelete
      }), !showSearch && emptyListBanner, playlistToDelete && (0,jsx_runtime.jsx)(src.ConfirmModal, {
        title: playlistToDelete.name,
        confirmText: "Delete",
        body: `Are you sure you want to delete '${playlistToDelete.name}' playlist?`,
        onConfirm: onDeletePlaylist,
        isOpen: Boolean(playlistToDelete),
        onDismiss: onDismissDelete
      }), startPlaylist && (0,jsx_runtime.jsx)(StartModal, {
        playlist: startPlaylist,
        onDismiss: () => setStartPlaylist(undefined)
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,navModel.h)(state.navIndex, 'playlists')
});

 const playlist_PlaylistPage = ((0,es.connect)(mapStateToProps)(PlaylistPage));

 }),

 "./public/app/features/playlist/api.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "A5": () => ( getPlaylist),
   "CE": () => ( updatePlaylist),
   "Dv": () => ( getAllPlaylist),
   "cg": () => ( createPlaylist),
   "l8": () => ( deletePlaylist)
 });
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
 var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
 var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/store/store.ts");




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

async function withErrorHandling(apiCall) {
  let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Playlist saved';

  try {
    await apiCall();
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__ .WI)((0,_core_actions__WEBPACK_IMPORTED_MODULE_1__ .$l)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ .AT)(message)));
  } catch (e) {
    (0,_store_store__WEBPACK_IMPORTED_MODULE_3__ .WI)((0,_core_actions__WEBPACK_IMPORTED_MODULE_1__ .$l)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ .t_)('Unable to save playlist', e)));
  }
}

 })

}]);