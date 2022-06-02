"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9975],{

 "./public/app/features/playlist/PlaylistForm.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "H": () => ( PlaylistForm)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var dist = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
var dist_default = __webpack_require__.n(dist);
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;







const DashboardPickerByID = _ref => {
  let {
    onChange: propsOnChange,
    value,
    width,
    isClearable = false,
    invalid,
    disabled,
    id,
    optionLabel = 'label'
  } = _ref;
  const debouncedSearch = dist_default()(query => getDashboards(query || '', optionLabel), 300);
  const option = value ? {
    value,
    [optionLabel]: value[optionLabel]
  } : undefined;

  const onChange = item => {
    propsOnChange(item === null || item === void 0 ? void 0 : item.value);
  };

  return (0,jsx_runtime.jsx)(grafana_ui_src.AsyncSelect, {
    inputId: id,
    width: width,
    isClearable: isClearable,
    defaultOptions: true,
    loadOptions: debouncedSearch,
    onChange: onChange,
    placeholder: "Select dashboard",
    noOptionsMessage: "No dashboards found",
    value: option,
    invalid: invalid,
    disabled: disabled,
    getOptionLabel: option => option[optionLabel]
  });
};

async function getDashboards(query, label) {
  const result = await backend_srv.ae.search({
    type: 'dash-db',
    query,
    limit: 100
  });
  return result.map(_ref2 => {
    let {
      id,
      uid = '',
      title,
      folderTitle
    } = _ref2;
    const value = {
      id,
      uid,
      [label]: `${folderTitle !== null && folderTitle !== void 0 ? folderTitle : 'General'}/${title}`
    };
    return {
      value,
      [label]: value[label]
    };
  });
}
var TagFilter = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
var search_srv = __webpack_require__("./public/app/core/services/search_srv.ts");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var TagBadge = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
;







const PlaylistTableRow = _ref => {
  let {
    item,
    onDelete,
    onMoveDown,
    onMoveUp,
    first,
    last
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(getStyles);

  const onDeleteClick = event => {
    event.preventDefault();
    onDelete(item);
  };

  const onMoveDownClick = event => {
    event.preventDefault();
    onMoveDown(item);
  };

  const onMoveUpClick = event => {
    event.preventDefault();
    onMoveUp(item);
  };

  return (0,jsx_runtime.jsxs)("tr", {
    "aria-label": src.wl.pages.PlaylistForm.itemRow,
    children: [item.type === 'dashboard_by_id' ? (0,jsx_runtime.jsxs)("td", {
      className: (0,emotion_css_esm.cx)(styles.td, styles.item),
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "apps",
        "aria-label": src.wl.pages.PlaylistForm.itemIdType
      }), (0,jsx_runtime.jsx)("span", {
        children: item.title
      })]
    }) : null, item.type === 'dashboard_by_tag' ? (0,jsx_runtime.jsxs)("td", {
      className: (0,emotion_css_esm.cx)(styles.td, styles.item),
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "tag-alt",
        "aria-label": src.wl.pages.PlaylistForm.itemTagType
      }), (0,jsx_runtime.jsx)(TagBadge.e, {
        label: item.title,
        removeIcon: false,
        count: 0
      }, item.id)]
    }) : null, (0,jsx_runtime.jsxs)("td", {
      className: (0,emotion_css_esm.cx)(styles.td, styles.settings),
      children: [!first ? (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        name: "arrow-up",
        size: "md",
        onClick: onMoveUpClick,
        "aria-label": src.wl.pages.PlaylistForm.itemMoveUp,
        type: "button"
      }) : null, !last ? (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        name: "arrow-down",
        size: "md",
        onClick: onMoveDownClick,
        "aria-label": src.wl.pages.PlaylistForm.itemMoveDown,
        type: "button"
      }) : null, (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        name: "times",
        size: "md",
        onClick: onDeleteClick,
        "aria-label": src.wl.pages.PlaylistForm.itemDelete,
        type: "button"
      })]
    })]
  }, item.title);
};

function getStyles(theme) {
  return {
    td: emotion_css_esm.css`
      label: td;
      line-height: 28px;
      max-width: 335px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,
    item: emotion_css_esm.css`
      label: item;
      span {
        margin-left: ${theme.spacing.xs};
      }
    `,
    settings: emotion_css_esm.css`
      label: settings;
      text-align: right;
    `
  };
}
;
var _tr;





const PlaylistTableRows = _ref => {
  let {
    items,
    onMoveUp,
    onMoveDown,
    onDelete
  } = _ref;

  if (items.length === 0) {
    return _tr || (_tr = (0,jsx_runtime.jsx)("tr", {
      children: (0,jsx_runtime.jsx)("td", {
        children: (0,jsx_runtime.jsx)("em", {
          children: "Playlist is empty. Add dashboards below."
        })
      })
    }));
  }

  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: items.map((item, index) => {
      const first = index === 0;
      const last = index === items.length - 1;
      return (0,jsx_runtime.jsx)(PlaylistTableRow, {
        first: first,
        last: last,
        item: item,
        onDelete: onDelete,
        onMoveDown: onMoveDown,
        onMoveUp: onMoveUp
      }, item.title);
    })
  });
};
;
var _h;





const PlaylistTable = _ref => {
  let {
    items,
    onMoveUp,
    onMoveDown,
    onDelete
  } = _ref;
  return (0,jsx_runtime.jsxs)("div", {
    className: "gf-form-group",
    children: [_h || (_h = (0,jsx_runtime.jsx)("h3", {
      className: "page-headering",
      children: "Dashboards"
    })), (0,jsx_runtime.jsx)("table", {
      className: "filter-table",
      children: (0,jsx_runtime.jsx)("tbody", {
        children: (0,jsx_runtime.jsx)(PlaylistTableRows, {
          items: items,
          onMoveUp: onMoveUp,
          onMoveDown: onMoveDown,
          onDelete: onDelete
        })
      })
    })]
  });
};
;

function usePlaylistItems(playlistItems) {
  const [items, setItems] = (0,react.useState)(playlistItems !== null && playlistItems !== void 0 ? playlistItems : []);
  const addById = (0,react.useCallback)(dashboard => {
    if (!dashboard || items.find(item => item.id === dashboard.id)) {
      return;
    }

    const newItem = {
      id: dashboard.id,
      title: dashboard.label,
      type: 'dashboard_by_id',
      value: dashboard.id.toString(10),
      order: items.length + 1
    };
    setItems([...items, newItem]);
  }, [items]);
  const addByTag = (0,react.useCallback)(tags => {
    const tag = tags[0];

    if (!tag || items.find(item => item.value === tag)) {
      return;
    }

    const newItem = {
      title: tag,
      type: 'dashboard_by_tag',
      value: tag,
      order: items.length + 1
    };
    setItems([...items, newItem]);
  }, [items]);
  const movePlaylistItem = (0,react.useCallback)((item, offset) => {
    const newItems = [...items];
    const currentPosition = newItems.indexOf(item);
    const newPosition = currentPosition + offset;

    if (newPosition >= 0 && newPosition < newItems.length) {
      newItems.splice(currentPosition, 1);
      newItems.splice(newPosition, 0, item);
    }

    setItems(newItems);
  }, [items]);
  const moveUp = (0,react.useCallback)(item => {
    movePlaylistItem(item, -1);
  }, [movePlaylistItem]);
  const moveDown = (0,react.useCallback)(item => {
    movePlaylistItem(item, 1);
  }, [movePlaylistItem]);
  const deleteItem = (0,react.useCallback)(item => {
    setItems(items.filter(i => i !== item));
  }, [items]);
  return {
    items,
    addById,
    addByTag,
    deleteItem,
    moveDown,
    moveUp
  };
}
;
var PlaylistForm_h;













const searchSrv = new search_srv.i();
const PlaylistForm = _ref => {
  var _PlaylistTable, _Field;

  let {
    onSubmit,
    playlist
  } = _ref;
  const {
    name,
    interval,
    items: propItems
  } = playlist;
  const {
    items,
    addById,
    addByTag,
    deleteItem,
    moveDown,
    moveUp
  } = usePlaylistItems(propItems);
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: (0,jsx_runtime.jsx)(grafana_ui_src.Form, {
      onSubmit: list => onSubmit(Object.assign({}, list, {
        items
      })),
      validateOn: 'onBlur',
      children: _ref2 => {
        var _errors$name, _errors$interval;

        let {
          register,
          errors
        } = _ref2;
        const isDisabled = items.length === 0 || Object.keys(errors).length > 0;
        return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
            label: "Name",
            invalid: !!errors.name,
            error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
            children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
              type: "text"
            }, register('name', {
              required: 'Name is required'
            }), {
              placeholder: "Name",
              defaultValue: name,
              "aria-label": src.wl.pages.PlaylistForm.name
            }))
          }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
            label: "Interval",
            invalid: !!errors.interval,
            error: errors === null || errors === void 0 ? void 0 : (_errors$interval = errors.interval) === null || _errors$interval === void 0 ? void 0 : _errors$interval.message,
            children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
              type: "text"
            }, register('interval', {
              required: 'Interval is required'
            }), {
              placeholder: "5m",
              defaultValue: interval !== null && interval !== void 0 ? interval : '5m',
              "aria-label": src.wl.pages.PlaylistForm.interval
            }))
          }), _PlaylistTable || (_PlaylistTable = (0,jsx_runtime.jsx)(PlaylistTable, {
            items: items,
            onMoveUp: moveUp,
            onMoveDown: moveDown,
            onDelete: deleteItem
          })), (0,jsx_runtime.jsxs)("div", {
            className: "gf-form-group",
            children: [PlaylistForm_h || (PlaylistForm_h = (0,jsx_runtime.jsx)("h3", {
              className: "page-headering",
              children: "Add dashboards"
            })), _Field || (_Field = (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
              label: "Add by title",
              children: (0,jsx_runtime.jsx)(DashboardPickerByID, {
                onChange: addById,
                id: "dashboard-picker",
                isClearable: true
              })
            })), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
              label: "Add by tag",
              children: (0,jsx_runtime.jsx)(TagFilter.D, {
                isClearable: true,
                tags: [],
                hideValues: true,
                tagOptions: searchSrv.getDashboardTags,
                onChange: addByTag,
                placeholder: ''
              })
            })]
          }), (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
            children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              variant: "primary",
              disabled: isDisabled,
              children: "Save"
            }), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
              variant: "secondary",
              href: `${grafana_runtime_src.config.appSubUrl}/playlists`,
              children: "Cancel"
            })]
          })]
        });
      }
    })
  });
};

 }),

 "./public/app/features/playlist/PlaylistNewPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "PlaylistNewPage": () => ( PlaylistNewPage),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var _PlaylistForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/playlist/PlaylistForm.tsx");
 var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/playlist/api.ts");
 var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/playlist/styles.ts");
 var _usePlaylist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/playlist/usePlaylist.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const PlaylistNewPage = _ref => {
  let {
    navModel
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_7__ .e);
  const {
    playlist,
    loading
  } = (0,_usePlaylist__WEBPACK_IMPORTED_MODULE_8__ .Z)();

  const onSubmit = async playlist => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_6__ .cg)(playlist);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/playlists');
  };

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z, {
    navModel: navModel,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z.Contents, {
      isLoading: loading,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
        className: styles.subHeading,
        children: "New Playlist"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        className: styles.description,
        children: "A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PlaylistForm__WEBPACK_IMPORTED_MODULE_5__ .H, {
        onSubmit: onSubmit,
        playlist: playlist
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_10__ .h)(state.navIndex, 'playlists')
});

 const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistNewPage));

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

 }),

 "./public/app/features/playlist/styles.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "e": () => ( getPlaylistStyles)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

function getPlaylistStyles(theme) {
  return {
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: description;
      width: 555px;
      margin-bottom: 20px;
    `,
    subHeading: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: sub-heading;
      margin-bottom: ${theme.spacing(2)};
    `
  };
}

 }),

 "./public/app/features/playlist/usePlaylist.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => ( usePlaylist)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/api.ts");


function usePlaylist(playlistId) {
  const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    items: [],
    interval: '5m',
    name: ''
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const initPlaylist = async () => {
      if (!playlistId) {
        setLoading(false);
        return;
      }

      const list = await (0,_api__WEBPACK_IMPORTED_MODULE_1__ .A5)(playlistId);
      setPlaylist(list);
      setLoading(false);
    };

    initPlaylist();
  }, [playlistId]);
  return {
    playlist,
    loading
  };
}

 })

}]);