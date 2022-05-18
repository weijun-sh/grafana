"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistEditPage"],{

/***/ "./public/app/core/components/editors/DashboardPickerByID.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPickerByID": () => (/* binding */ DashboardPickerByID)
/* harmony export */ });
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




/**
 * @deprecated prefer using dashboard uid rather than id
 */



/**
 * @deprecated prefer using dashboard uid rather than id
 */
const DashboardPickerByID = ({
  onChange: propsOnChange,
  value,
  width,
  isClearable = false,
  invalid,
  disabled,
  id,
  optionLabel = 'label'
}) => {
  const debouncedSearch = debounce_promise__WEBPACK_IMPORTED_MODULE_0___default()(query => getDashboards(query || '', optionLabel), 300);
  const option = value ? {
    value,
    [optionLabel]: value[optionLabel]
  } : undefined;

  const onChange = item => {
    propsOnChange(item === null || item === void 0 ? void 0 : item.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.AsyncSelect, {
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
  const result = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.backendSrv.search({
    type: 'dash-db',
    query,
    limit: 100
  });
  return result.map(({
    id,
    uid = '',
    title,
    folderTitle
  }) => {
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

/***/ }),

/***/ "./public/app/features/playlist/PlaylistEditPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistEditPage": () => (/* binding */ PlaylistEditPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _PlaylistForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/playlist/PlaylistForm.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/playlist/api.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/playlist/styles.ts");
/* harmony import */ var _usePlaylist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/playlist/usePlaylist.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const PlaylistEditPage = ({
  navModel,
  match
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_8__.getPlaylistStyles);
  const {
    playlist,
    loading
  } = (0,_usePlaylist__WEBPACK_IMPORTED_MODULE_9__.usePlaylist)(match.params.id);

  const onSubmit = async playlist => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_7__.updatePlaylist)(match.params.id, playlist);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/playlists');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
        className: styles.subHeading,
        children: "Edit playlist"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
        className: styles.description,
        children: "A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PlaylistForm__WEBPACK_IMPORTED_MODULE_6__.PlaylistForm, {
        onSubmit: onSubmit,
        playlist: playlist
      })]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'playlists')
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistEditPage));

/***/ }),

/***/ "./public/app/features/playlist/PlaylistForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistForm": () => (/* binding */ PlaylistForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_editors_DashboardPickerByID__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/editors/DashboardPickerByID.tsx");
/* harmony import */ var _core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var _core_services_search_srv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/services/search_srv.ts");
/* harmony import */ var _PlaylistTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/playlist/PlaylistTable.tsx");
/* harmony import */ var _usePlaylistItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/playlist/usePlaylistItems.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;













const searchSrv = new _core_services_search_srv__WEBPACK_IMPORTED_MODULE_6__.SearchSrv();
const PlaylistForm = ({
  onSubmit,
  playlist
}) => {
  var _PlaylistTable, _Field;

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
  } = (0,_usePlaylistItems__WEBPACK_IMPORTED_MODULE_8__.usePlaylistItems)(propItems);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
      onSubmit: list => onSubmit(Object.assign({}, list, {
        items
      })),
      validateOn: 'onBlur',
      children: ({
        register,
        errors
      }) => {
        var _errors$name, _errors$interval;

        const isDisabled = items.length === 0 || Object.keys(errors).length > 0;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Name",
            invalid: !!errors.name,
            error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              type: "text"
            }, register('name', {
              required: 'Name is required'
            }), {
              placeholder: "Name",
              defaultValue: name,
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.PlaylistForm.name
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Interval",
            invalid: !!errors.interval,
            error: errors === null || errors === void 0 ? void 0 : (_errors$interval = errors.interval) === null || _errors$interval === void 0 ? void 0 : _errors$interval.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
              type: "text"
            }, register('interval', {
              required: 'Interval is required'
            }), {
              placeholder: "5m",
              defaultValue: interval !== null && interval !== void 0 ? interval : '5m',
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.PlaylistForm.interval
            }))
          }), _PlaylistTable || (_PlaylistTable = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PlaylistTable__WEBPACK_IMPORTED_MODULE_7__.PlaylistTable, {
            items: items,
            onMoveUp: moveUp,
            onMoveDown: moveDown,
            onDelete: deleteItem
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "gf-form-group",
            children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h3", {
              className: "page-headering",
              children: "Add dashboards"
            })), _Field || (_Field = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Add by title",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_editors_DashboardPickerByID__WEBPACK_IMPORTED_MODULE_4__.DashboardPickerByID, {
                onChange: addById,
                id: "dashboard-picker",
                isClearable: true
              })
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
              label: "Add by tag",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_5__.TagFilter, {
                isClearable: true,
                tags: [],
                hideValues: true,
                tagOptions: searchSrv.getDashboardTags,
                onChange: addByTag,
                placeholder: ''
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              variant: "primary",
              disabled: isDisabled,
              children: "Save"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
              variant: "secondary",
              href: `${_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.appSubUrl}/playlists`,
              children: "Cancel"
            })]
          })]
        });
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/playlist/PlaylistTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistTable": () => (/* binding */ PlaylistTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PlaylistTableRows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/PlaylistTableRows.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;





const PlaylistTable = ({
  items,
  onMoveUp,
  onMoveDown,
  onDelete
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "gf-form-group",
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
      className: "page-headering",
      children: "Dashboards"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
      className: "filter-table",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PlaylistTableRows__WEBPACK_IMPORTED_MODULE_1__.PlaylistTableRows, {
          items: items,
          onMoveUp: onMoveUp,
          onMoveDown: onMoveDown,
          onDelete: onDelete
        })
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/playlist/PlaylistTableRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistTableRow": () => (/* binding */ PlaylistTableRow)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const PlaylistTableRow = ({
  item,
  onDelete,
  onMoveDown,
  onMoveUp,
  first,
  last
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);

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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemRow,
    children: [item.type === 'dashboard_by_id' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.td, styles.item),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "apps",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemIdType
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        children: item.title
      })]
    }) : null, item.type === 'dashboard_by_tag' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.td, styles.item),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "tag-alt",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemTagType
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_4__.TagBadge, {
        label: item.title,
        removeIcon: false,
        count: 0
      }, item.id)]
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.td, styles.settings),
      children: [!first ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        name: "arrow-up",
        size: "md",
        onClick: onMoveUpClick,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemMoveUp,
        type: "button"
      }) : null, !last ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        name: "arrow-down",
        size: "md",
        onClick: onMoveDownClick,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemMoveDown,
        type: "button"
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        name: "times",
        size: "md",
        onClick: onDeleteClick,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.itemDelete,
        type: "button"
      })]
    })]
  }, item.title);
};

function getStyles(theme) {
  return {
    td: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: td;
      line-height: 28px;
      max-width: 335px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,
    item: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: item;
      span {
        margin-left: ${theme.spacing.xs};
      }
    `,
    settings: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: settings;
      text-align: right;
    `
  };
}

/***/ }),

/***/ "./public/app/features/playlist/PlaylistTableRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistTableRows": () => (/* binding */ PlaylistTableRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PlaylistTableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/PlaylistTableRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _tr;





const PlaylistTableRows = ({
  items,
  onMoveUp,
  onMoveDown,
  onDelete
}) => {
  if (items.length === 0) {
    return _tr || (_tr = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tr", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("em", {
          children: "Playlist is empty. Add dashboards below."
        })
      })
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: items.map((item, index) => {
      const first = index === 0;
      const last = index === items.length - 1;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PlaylistTableRow__WEBPACK_IMPORTED_MODULE_1__.PlaylistTableRow, {
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

/***/ }),

/***/ "./public/app/features/playlist/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPlaylistStyles": () => (/* binding */ getPlaylistStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

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

/***/ }),

/***/ "./public/app/features/playlist/usePlaylist.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePlaylist": () => (/* binding */ usePlaylist)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/playlist/api.ts");


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

      const list = await (0,_api__WEBPACK_IMPORTED_MODULE_1__.getPlaylist)(playlistId);
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

/***/ }),

/***/ "./public/app/features/playlist/usePlaylistItems.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePlaylistItems": () => (/* binding */ usePlaylistItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePlaylistItems(playlistItems) {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(playlistItems !== null && playlistItems !== void 0 ? playlistItems : []);
  const addById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(dashboard => {
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
  const addByTag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(tags => {
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
  const movePlaylistItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item, offset) => {
    const newItems = [...items];
    const currentPosition = newItems.indexOf(item);
    const newPosition = currentPosition + offset;

    if (newPosition >= 0 && newPosition < newItems.length) {
      newItems.splice(currentPosition, 1);
      newItems.splice(newPosition, 0, item);
    }

    setItems(newItems);
  }, [items]);
  const moveUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => {
    movePlaylistItem(item, -1);
  }, [movePlaylistItem]);
  const moveDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => {
    movePlaylistItem(item, 1);
  }, [movePlaylistItem]);
  const deleteItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(item => {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUkxQixDQUFDa0ksZ0JBQUQsQ0FKMEIsQ0FBNUI7QUFPQSxRQUFNOUUsVUFBVSxHQUFHb0Usa0RBQVcsQ0FDM0J4SCxJQUFELElBQXdCO0FBQ3RCMEgsSUFBQUEsUUFBUSxDQUFDMUUsS0FBSyxDQUFDeUYsTUFBTixDQUFjQyxDQUFELElBQU9BLENBQUMsS0FBSzFJLElBQTFCLENBQUQsQ0FBUjtBQUNELEdBSDJCLEVBSTVCLENBQUNnRCxLQUFELENBSjRCLENBQTlCO0FBT0EsU0FBTztBQUFFQSxJQUFBQSxLQUFGO0FBQVNFLElBQUFBLE9BQVQ7QUFBa0JDLElBQUFBLFFBQWxCO0FBQTRCQyxJQUFBQSxVQUE1QjtBQUF3Q0MsSUFBQUEsUUFBeEM7QUFBa0RDLElBQUFBO0FBQWxELEdBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9lZGl0b3JzL0Rhc2hib2FyZFBpY2tlckJ5SUQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0RWRpdFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RUYWJsZVJvdy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3RUYWJsZVJvd3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L2FwaS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvdXNlUGxheWxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L3VzZVBsYXlsaXN0SXRlbXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWJvdW5jZSBmcm9tICdkZWJvdW5jZS1wcm9taXNlJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBc3luY1NlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgcHJlZmVyIHVzaW5nIGRhc2hib2FyZCB1aWQgcmF0aGVyIHRoYW4gaWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRQaWNrZXJJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgdWlkOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6IChkYXNoYm9hcmQ/OiBEYXNoYm9hcmRQaWNrZXJJdGVtKSA9PiB2b2lkO1xuICB2YWx1ZT86IERhc2hib2FyZFBpY2tlckl0ZW07XG4gIHdpZHRoPzogbnVtYmVyO1xuICBpc0NsZWFyYWJsZT86IGJvb2xlYW47XG4gIGludmFsaWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlkPzogc3RyaW5nO1xuICBvcHRpb25MYWJlbD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBwcmVmZXIgdXNpbmcgZGFzaGJvYXJkIHVpZCByYXRoZXIgdGhhbiBpZFxuICovXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkUGlja2VyQnlJRDogRkM8UHJvcHM+ID0gKHtcbiAgb25DaGFuZ2U6IHByb3BzT25DaGFuZ2UsXG4gIHZhbHVlLFxuICB3aWR0aCxcbiAgaXNDbGVhcmFibGUgPSBmYWxzZSxcbiAgaW52YWxpZCxcbiAgZGlzYWJsZWQsXG4gIGlkLFxuICBvcHRpb25MYWJlbCA9ICdsYWJlbCcsXG59KSA9PiB7XG4gIGNvbnN0IGRlYm91bmNlZFNlYXJjaCA9IGRlYm91bmNlKChxdWVyeTogc3RyaW5nKSA9PiBnZXREYXNoYm9hcmRzKHF1ZXJ5IHx8ICcnLCBvcHRpb25MYWJlbCksIDMwMCk7XG4gIGNvbnN0IG9wdGlvbiA9IHZhbHVlID8geyB2YWx1ZSwgW29wdGlvbkxhYmVsXTogdmFsdWVbb3B0aW9uTGFiZWxdIH0gOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKGl0ZW06IFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRQaWNrZXJJdGVtPikgPT4ge1xuICAgIHByb3BzT25DaGFuZ2UoaXRlbT8udmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFzeW5jU2VsZWN0XG4gICAgICBpbnB1dElkPXtpZH1cbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGlzQ2xlYXJhYmxlPXtpc0NsZWFyYWJsZX1cbiAgICAgIGRlZmF1bHRPcHRpb25zPXt0cnVlfVxuICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZFNlYXJjaH1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGRhc2hib2FyZFwiXG4gICAgICBub09wdGlvbnNNZXNzYWdlPVwiTm8gZGFzaGJvYXJkcyBmb3VuZFwiXG4gICAgICB2YWx1ZT17b3B0aW9ufVxuICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb25bb3B0aW9uTGFiZWxdfVxuICAgIC8+XG4gICk7XG59O1xuXG5hc3luYyBmdW5jdGlvbiBnZXREYXNoYm9hcmRzKHF1ZXJ5OiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRQaWNrZXJJdGVtPj4+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYmFja2VuZFNydi5zZWFyY2goeyB0eXBlOiAnZGFzaC1kYicsIHF1ZXJ5LCBsaW1pdDogMTAwIH0pO1xuICByZXR1cm4gcmVzdWx0Lm1hcCgoeyBpZCwgdWlkID0gJycsIHRpdGxlLCBmb2xkZXJUaXRsZSB9KSA9PiB7XG4gICAgY29uc3QgdmFsdWU6IERhc2hib2FyZFBpY2tlckl0ZW0gPSB7XG4gICAgICBpZCxcbiAgICAgIHVpZCxcbiAgICAgIFtsYWJlbF06IGAke2ZvbGRlclRpdGxlID8/ICdHZW5lcmFsJ30vJHt0aXRsZX1gLFxuICAgIH07XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgW2xhYmVsXTogdmFsdWVbbGFiZWxdIH07XG4gIH0pO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgTWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vLi4vY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcblxuaW1wb3J0IHsgUGxheWxpc3RGb3JtIH0gZnJvbSAnLi9QbGF5bGlzdEZvcm0nO1xuaW1wb3J0IHsgdXBkYXRlUGxheWxpc3QgfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgeyBnZXRQbGF5bGlzdFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IFBsYXlsaXN0IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VQbGF5bGlzdCB9IGZyb20gJy4vdXNlUGxheWxpc3QnO1xuXG5pbnRlcmZhY2UgQ29ubmVjdGVkUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVQYXJhbXMge1xuICBpZDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBDb25uZWN0ZWRQcm9wcywgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8Um91dGVQYXJhbXM+IHt9XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdEVkaXRQYWdlOiBGQzxQcm9wcz4gPSAoeyBuYXZNb2RlbCwgbWF0Y2ggfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFBsYXlsaXN0U3R5bGVzKTtcbiAgY29uc3QgeyBwbGF5bGlzdCwgbG9hZGluZyB9ID0gdXNlUGxheWxpc3QobWF0Y2gucGFyYW1zLmlkKTtcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAocGxheWxpc3Q6IFBsYXlsaXN0KSA9PiB7XG4gICAgYXdhaXQgdXBkYXRlUGxheWxpc3QobWF0Y2gucGFyYW1zLmlkLCBwbGF5bGlzdCk7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9wbGF5bGlzdHMnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuc3ViSGVhZGluZ30+RWRpdCBwbGF5bGlzdDwvaDM+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIEEgcGxheWxpc3Qgcm90YXRlcyB0aHJvdWdoIGEgcHJlLXNlbGVjdGVkIGxpc3Qgb2YgZGFzaGJvYXJkcy4gQSBwbGF5bGlzdCBjYW4gYmUgYSBncmVhdCB3YXkgdG8gYnVpbGRcbiAgICAgICAgICBzaXR1YXRpb25hbCBhd2FyZW5lc3MsIG9yIGp1c3Qgc2hvdyBvZmYgeW91ciBtZXRyaWNzIHRvIHlvdXIgdGVhbSBvciB2aXNpdG9ycy5cbiAgICAgICAgPC9wPlxuXG4gICAgICAgIDxQbGF5bGlzdEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBwbGF5bGlzdD17cGxheWxpc3R9IC8+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzOiBNYXBTdGF0ZVRvUHJvcHM8Q29ubmVjdGVkUHJvcHMsIHt9LCBTdG9yZVN0YXRlPiA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAncGxheWxpc3RzJyksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBsYXlsaXN0RWRpdFBhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRm9ybSwgSG9yaXpvbnRhbEdyb3VwLCBJbnB1dCwgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IERhc2hib2FyZFBpY2tlckJ5SUQgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL2VkaXRvcnMvRGFzaGJvYXJkUGlja2VyQnlJRCc7XG5cbmltcG9ydCB7IFRhZ0ZpbHRlciB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnRmlsdGVyJztcbmltcG9ydCB7IFNlYXJjaFNydiB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvc2VhcmNoX3Nydic7XG5cbmltcG9ydCB7IFBsYXlsaXN0VGFibGUgfSBmcm9tICcuL1BsYXlsaXN0VGFibGUnO1xuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZVBsYXlsaXN0SXRlbXMgfSBmcm9tICcuL3VzZVBsYXlsaXN0SXRlbXMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RGb3JtUHJvcHMge1xuICBvblN1Ym1pdDogKHBsYXlsaXN0OiBQbGF5bGlzdCkgPT4gdm9pZDtcbiAgcGxheWxpc3Q6IFBsYXlsaXN0O1xufVxuXG5jb25zdCBzZWFyY2hTcnYgPSBuZXcgU2VhcmNoU3J2KCk7XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdEZvcm06IEZDPFBsYXlsaXN0Rm9ybVByb3BzPiA9ICh7IG9uU3VibWl0LCBwbGF5bGlzdCB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaW50ZXJ2YWwsIGl0ZW1zOiBwcm9wSXRlbXMgfSA9IHBsYXlsaXN0O1xuICBjb25zdCB7IGl0ZW1zLCBhZGRCeUlkLCBhZGRCeVRhZywgZGVsZXRlSXRlbSwgbW92ZURvd24sIG1vdmVVcCB9ID0gdXNlUGxheWxpc3RJdGVtcyhwcm9wSXRlbXMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17KGxpc3Q6IFBsYXlsaXN0KSA9PiBvblN1Ym1pdCh7IC4uLmxpc3QsIGl0ZW1zIH0pfSB2YWxpZGF0ZU9uPXsnb25CbHVyJ30+XG4gICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gaXRlbXMubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnM/Lm5hbWU/Lm1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCduYW1lJywgeyByZXF1aXJlZDogJ05hbWUgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0ubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJJbnRlcnZhbFwiIGludmFsaWQ9eyEhZXJyb3JzLmludGVydmFsfSBlcnJvcj17ZXJyb3JzPy5pbnRlcnZhbD8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2ludGVydmFsJywgeyByZXF1aXJlZDogJ0ludGVydmFsIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNW1cIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbnRlcnZhbCA/PyAnNW0nfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pbnRlcnZhbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxQbGF5bGlzdFRhYmxlIGl0ZW1zPXtpdGVtc30gb25Nb3ZlVXA9e21vdmVVcH0gb25Nb3ZlRG93bj17bW92ZURvd259IG9uRGVsZXRlPXtkZWxldGVJdGVtfSAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRlcmluZ1wiPkFkZCBkYXNoYm9hcmRzPC9oMz5cblxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkFkZCBieSB0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPERhc2hib2FyZFBpY2tlckJ5SUQgb25DaGFuZ2U9e2FkZEJ5SWR9IGlkPVwiZGFzaGJvYXJkLXBpY2tlclwiIGlzQ2xlYXJhYmxlIC8+XG4gICAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkFkZCBieSB0YWdcIj5cbiAgICAgICAgICAgICAgICAgIDxUYWdGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgICAgICAgdGFncz17W119XG4gICAgICAgICAgICAgICAgICAgIGhpZGVWYWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgdGFnT3B0aW9ucz17c2VhcmNoU3J2LmdldERhc2hib2FyZFRhZ3N9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXthZGRCeVRhZ31cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eycnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBkaXNhYmxlZD17aXNEaXNhYmxlZH0+XG4gICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGhyZWY9e2Ake2NvbmZpZy5hcHBTdWJVcmx9L3BsYXlsaXN0c2B9PlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm0+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdFRhYmxlUm93cyB9IGZyb20gJy4vUGxheWxpc3RUYWJsZVJvd3MnO1xuaW1wb3J0IHsgUGxheWxpc3RJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQbGF5bGlzdFRhYmxlUHJvcHMge1xuICBpdGVtczogUGxheWxpc3RJdGVtW107XG4gIG9uTW92ZVVwOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbk1vdmVEb3duOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbkRlbGV0ZTogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0VGFibGU6IEZDPFBsYXlsaXN0VGFibGVQcm9wcz4gPSAoeyBpdGVtcywgb25Nb3ZlVXAsIG9uTW92ZURvd24sIG9uRGVsZXRlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRlcmluZ1wiPkRhc2hib2FyZHM8L2gzPlxuXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8UGxheWxpc3RUYWJsZVJvd3MgaXRlbXM9e2l0ZW1zfSBvbk1vdmVVcD17b25Nb3ZlVXB9IG9uTW92ZURvd249e29uTW92ZURvd259IG9uRGVsZXRlPXtvbkRlbGV0ZX0gLz5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBJY29uLCBJY29uQnV0dG9uLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFRhZ0JhZGdlIH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdCYWRnZSc7XG5cbmltcG9ydCB7IFBsYXlsaXN0SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RUYWJsZVJvd1Byb3BzIHtcbiAgZmlyc3Q6IGJvb2xlYW47XG4gIGxhc3Q6IGJvb2xlYW47XG4gIGl0ZW06IFBsYXlsaXN0SXRlbTtcbiAgb25Nb3ZlVXA6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uTW92ZURvd246IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uRGVsZXRlOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RUYWJsZVJvdzogRkM8UGxheWxpc3RUYWJsZVJvd1Byb3BzPiA9ICh7IGl0ZW0sIG9uRGVsZXRlLCBvbk1vdmVEb3duLCBvbk1vdmVVcCwgZmlyc3QsIGxhc3QgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3Qgb25EZWxldGVDbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25EZWxldGUoaXRlbSk7XG4gIH07XG4gIGNvbnN0IG9uTW92ZURvd25DbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25Nb3ZlRG93bihpdGVtKTtcbiAgfTtcbiAgY29uc3Qgb25Nb3ZlVXBDbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25Nb3ZlVXAoaXRlbSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8dHIgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtUm93fSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAge2l0ZW0udHlwZSA9PT0gJ2Rhc2hib2FyZF9ieV9pZCcgPyAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e2N4KHN0eWxlcy50ZCwgc3R5bGVzLml0ZW0pfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiYXBwc1wiIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbUlkVHlwZX0gLz5cbiAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtpdGVtLnR5cGUgPT09ICdkYXNoYm9hcmRfYnlfdGFnJyA/IChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT17Y3goc3R5bGVzLnRkLCBzdHlsZXMuaXRlbSl9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJ0YWctYWx0XCIgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtVGFnVHlwZX0gLz5cbiAgICAgICAgICA8VGFnQmFkZ2Uga2V5PXtpdGVtLmlkfSBsYWJlbD17aXRlbS50aXRsZX0gcmVtb3ZlSWNvbj17ZmFsc2V9IGNvdW50PXswfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8dGQgY2xhc3NOYW1lPXtjeChzdHlsZXMudGQsIHN0eWxlcy5zZXR0aW5ncyl9PlxuICAgICAgICB7IWZpcnN0ID8gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBuYW1lPVwiYXJyb3ctdXBcIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTW92ZVVwQ2xpY2t9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1Nb3ZlVXB9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgeyFsYXN0ID8gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBuYW1lPVwiYXJyb3ctZG93blwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgb25DbGljaz17b25Nb3ZlRG93bkNsaWNrfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtTW92ZURvd259XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBuYW1lPVwidGltZXNcIlxuICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgb25DbGljaz17b25EZWxldGVDbGlja31cbiAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1EZWxldGV9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIC8+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIHRkOiBjc3NgXG4gICAgICBsYWJlbDogdGQ7XG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgIG1heC13aWR0aDogMzM1cHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGAsXG4gICAgaXRlbTogY3NzYFxuICAgICAgbGFiZWw6IGl0ZW07XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgICB9XG4gICAgYCxcbiAgICBzZXR0aW5nczogY3NzYFxuICAgICAgbGFiZWw6IHNldHRpbmdzO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGxheWxpc3RUYWJsZVJvdyB9IGZyb20gJy4vUGxheWxpc3RUYWJsZVJvdyc7XG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIFBsYXlsaXN0VGFibGVSb3dzUHJvcHMge1xuICBpdGVtczogUGxheWxpc3RJdGVtW107XG4gIG9uTW92ZVVwOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbk1vdmVEb3duOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbkRlbGV0ZTogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0VGFibGVSb3dzOiBGQzxQbGF5bGlzdFRhYmxlUm93c1Byb3BzPiA9ICh7IGl0ZW1zLCBvbk1vdmVVcCwgb25Nb3ZlRG93biwgb25EZWxldGUgfSkgPT4ge1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxlbT5QbGF5bGlzdCBpcyBlbXB0eS4gQWRkIGRhc2hib2FyZHMgYmVsb3cuPC9lbT5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGxheWxpc3RUYWJsZVJvd1xuICAgICAgICAgICAgZmlyc3Q9e2ZpcnN0fVxuICAgICAgICAgICAgbGFzdD17bGFzdH1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgICAgICBvbk1vdmVEb3duPXtvbk1vdmVEb3dufVxuICAgICAgICAgICAgb25Nb3ZlVXA9e29uTW92ZVVwfVxuICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJy4uLy4uL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiwgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XG5cbmltcG9ydCB7IFBsYXlsaXN0LCBQbGF5bGlzdERUTyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGxheWxpc3QocGxheWxpc3Q6IFBsYXlsaXN0KSB7XG4gIGF3YWl0IHdpdGhFcnJvckhhbmRsaW5nKCgpID0+IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3BsYXlsaXN0cycsIHBsYXlsaXN0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQbGF5bGlzdChpZDogbnVtYmVyLCBwbGF5bGlzdDogUGxheWxpc3QpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9wbGF5bGlzdHMvJHtpZH1gLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGxheWxpc3QoaWQ6IG51bWJlcikge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL3BsYXlsaXN0cy8ke2lkfWApLCAnUGxheWxpc3QgZGVsZXRlZCcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWxpc3QoaWQ6IG51bWJlcik6IFByb21pc2U8UGxheWxpc3Q+IHtcbiAgY29uc3QgcmVzdWx0OiBQbGF5bGlzdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvcGxheWxpc3RzLyR7aWR9YCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQbGF5bGlzdChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxQbGF5bGlzdERUT1tdPiB7XG4gIGNvbnN0IHJlc3VsdDogUGxheWxpc3REVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGxheWxpc3RzLycsIHsgcXVlcnkgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhFcnJvckhhbmRsaW5nKGFwaUNhbGw6ICgpID0+IFByb21pc2U8dm9pZD4sIG1lc3NhZ2UgPSAnUGxheWxpc3Qgc2F2ZWQnKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpQ2FsbCgpO1xuICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKG1lc3NhZ2UpKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oJ1VuYWJsZSB0byBzYXZlIHBsYXlsaXN0JywgZSkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWxpc3RTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbjogY3NzYFxuICAgICAgbGFiZWw6IGRlc2NyaXB0aW9uO1xuICAgICAgd2lkdGg6IDU1NXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBgLFxuICAgIHN1YkhlYWRpbmc6IGNzc2BcbiAgICAgIGxhYmVsOiBzdWItaGVhZGluZztcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldFBsYXlsaXN0IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXlsaXN0KHBsYXlsaXN0SWQ/OiBudW1iZXIpIHtcbiAgY29uc3QgW3BsYXlsaXN0LCBzZXRQbGF5bGlzdF0gPSB1c2VTdGF0ZTxQbGF5bGlzdD4oeyBpdGVtczogW10sIGludGVydmFsOiAnNW0nLCBuYW1lOiAnJyB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0UGxheWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXBsYXlsaXN0SWQpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBnZXRQbGF5bGlzdChwbGF5bGlzdElkKTtcbiAgICAgIHNldFBsYXlsaXN0KGxpc3QpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcbiAgICBpbml0UGxheWxpc3QoKTtcbiAgfSwgW3BsYXlsaXN0SWRdKTtcblxuICByZXR1cm4geyBwbGF5bGlzdCwgbG9hZGluZyB9O1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRQaWNrZXJJdGVtIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9lZGl0b3JzL0Rhc2hib2FyZFBpY2tlckJ5SUQnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXlsaXN0SXRlbXMocGxheWxpc3RJdGVtcz86IFBsYXlsaXN0SXRlbVtdKSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8UGxheWxpc3RJdGVtW10+KHBsYXlsaXN0SXRlbXMgPz8gW10pO1xuXG4gIGNvbnN0IGFkZEJ5SWQgPSB1c2VDYWxsYmFjayhcbiAgICAoZGFzaGJvYXJkPzogRGFzaGJvYXJkUGlja2VySXRlbSkgPT4ge1xuICAgICAgaWYgKCFkYXNoYm9hcmQgfHwgaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZGFzaGJvYXJkLmlkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0l0ZW06IFBsYXlsaXN0SXRlbSA9IHtcbiAgICAgICAgaWQ6IGRhc2hib2FyZC5pZCxcbiAgICAgICAgdGl0bGU6IGRhc2hib2FyZC5sYWJlbCBhcyBzdHJpbmcsXG4gICAgICAgIHR5cGU6ICdkYXNoYm9hcmRfYnlfaWQnLFxuICAgICAgICB2YWx1ZTogZGFzaGJvYXJkLmlkLnRvU3RyaW5nKDEwKSxcbiAgICAgICAgb3JkZXI6IGl0ZW1zLmxlbmd0aCArIDEsXG4gICAgICB9O1xuICAgICAgc2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfSxcbiAgICBbaXRlbXNdXG4gICk7XG5cbiAgY29uc3QgYWRkQnlUYWcgPSB1c2VDYWxsYmFjayhcbiAgICAodGFnczogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IHRhZyA9IHRhZ3NbMF07XG4gICAgICBpZiAoIXRhZyB8fCBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSB0YWcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3SXRlbTogUGxheWxpc3RJdGVtID0ge1xuICAgICAgICB0aXRsZTogdGFnLFxuICAgICAgICB0eXBlOiAnZGFzaGJvYXJkX2J5X3RhZycsXG4gICAgICAgIHZhbHVlOiB0YWcsXG4gICAgICAgIG9yZGVyOiBpdGVtcy5sZW5ndGggKyAxLFxuICAgICAgfTtcbiAgICAgIHNldEl0ZW1zKFsuLi5pdGVtcywgbmV3SXRlbV0pO1xuICAgIH0sXG4gICAgW2l0ZW1zXVxuICApO1xuXG4gIGNvbnN0IG1vdmVQbGF5bGlzdEl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtLCBvZmZzZXQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXNdO1xuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbmV3SXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgb2Zmc2V0O1xuXG4gICAgICBpZiAobmV3UG9zaXRpb24gPj0gMCAmJiBuZXdQb3NpdGlvbiA8IG5ld0l0ZW1zLmxlbmd0aCkge1xuICAgICAgICBuZXdJdGVtcy5zcGxpY2UoY3VycmVudFBvc2l0aW9uLCAxKTtcbiAgICAgICAgbmV3SXRlbXMuc3BsaWNlKG5ld1Bvc2l0aW9uLCAwLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICBjb25zdCBtb3ZlVXAgPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBtb3ZlUGxheWxpc3RJdGVtKGl0ZW0sIC0xKTtcbiAgICB9LFxuICAgIFttb3ZlUGxheWxpc3RJdGVtXVxuICApO1xuXG4gIGNvbnN0IG1vdmVEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4ge1xuICAgICAgbW92ZVBsYXlsaXN0SXRlbShpdGVtLCAxKTtcbiAgICB9LFxuICAgIFttb3ZlUGxheWxpc3RJdGVtXVxuICApO1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBzZXRJdGVtcyhpdGVtcy5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICByZXR1cm4geyBpdGVtcywgYWRkQnlJZCwgYWRkQnlUYWcsIGRlbGV0ZUl0ZW0sIG1vdmVEb3duLCBtb3ZlVXAgfTtcbn1cbiJdLCJuYW1lcyI6WyJkZWJvdW5jZSIsIlJlYWN0IiwiQXN5bmNTZWxlY3QiLCJiYWNrZW5kU3J2IiwiRGFzaGJvYXJkUGlja2VyQnlJRCIsIm9uQ2hhbmdlIiwicHJvcHNPbkNoYW5nZSIsInZhbHVlIiwid2lkdGgiLCJpc0NsZWFyYWJsZSIsImludmFsaWQiLCJkaXNhYmxlZCIsImlkIiwib3B0aW9uTGFiZWwiLCJkZWJvdW5jZWRTZWFyY2giLCJxdWVyeSIsImdldERhc2hib2FyZHMiLCJvcHRpb24iLCJ1bmRlZmluZWQiLCJpdGVtIiwibGFiZWwiLCJyZXN1bHQiLCJzZWFyY2giLCJ0eXBlIiwibGltaXQiLCJtYXAiLCJ1aWQiLCJ0aXRsZSIsImZvbGRlclRpdGxlIiwiY29ubmVjdCIsImxvY2F0aW9uU2VydmljZSIsInVzZVN0eWxlczIiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJQbGF5bGlzdEZvcm0iLCJ1cGRhdGVQbGF5bGlzdCIsImdldFBsYXlsaXN0U3R5bGVzIiwidXNlUGxheWxpc3QiLCJQbGF5bGlzdEVkaXRQYWdlIiwibmF2TW9kZWwiLCJtYXRjaCIsInN0eWxlcyIsInBsYXlsaXN0IiwibG9hZGluZyIsInBhcmFtcyIsIm9uU3VibWl0IiwicHVzaCIsInN1YkhlYWRpbmciLCJkZXNjcmlwdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiLCJzZWxlY3RvcnMiLCJjb25maWciLCJCdXR0b24iLCJGaWVsZCIsIkZvcm0iLCJIb3Jpem9udGFsR3JvdXAiLCJJbnB1dCIsIkxpbmtCdXR0b24iLCJUYWdGaWx0ZXIiLCJTZWFyY2hTcnYiLCJQbGF5bGlzdFRhYmxlIiwidXNlUGxheWxpc3RJdGVtcyIsInNlYXJjaFNydiIsIm5hbWUiLCJpbnRlcnZhbCIsIml0ZW1zIiwicHJvcEl0ZW1zIiwiYWRkQnlJZCIsImFkZEJ5VGFnIiwiZGVsZXRlSXRlbSIsIm1vdmVEb3duIiwibW92ZVVwIiwibGlzdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiaXNEaXNhYmxlZCIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJwYWdlcyIsImdldERhc2hib2FyZFRhZ3MiLCJhcHBTdWJVcmwiLCJQbGF5bGlzdFRhYmxlUm93cyIsIm9uTW92ZVVwIiwib25Nb3ZlRG93biIsIm9uRGVsZXRlIiwiY3NzIiwiY3giLCJJY29uIiwiSWNvbkJ1dHRvbiIsInVzZVN0eWxlcyIsIlRhZ0JhZGdlIiwiUGxheWxpc3RUYWJsZVJvdyIsImZpcnN0IiwibGFzdCIsImdldFN0eWxlcyIsIm9uRGVsZXRlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib25Nb3ZlRG93bkNsaWNrIiwib25Nb3ZlVXBDbGljayIsIml0ZW1Sb3ciLCJ0ZCIsIml0ZW1JZFR5cGUiLCJpdGVtVGFnVHlwZSIsInNldHRpbmdzIiwiaXRlbU1vdmVVcCIsIml0ZW1Nb3ZlRG93biIsIml0ZW1EZWxldGUiLCJ0aGVtZSIsInNwYWNpbmciLCJ4cyIsImluZGV4IiwiZ2V0QmFja2VuZFNydiIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImRpc3BhdGNoIiwiY3JlYXRlUGxheWxpc3QiLCJ3aXRoRXJyb3JIYW5kbGluZyIsInBvc3QiLCJwdXQiLCJkZWxldGVQbGF5bGlzdCIsImRlbGV0ZSIsImdldFBsYXlsaXN0IiwiZ2V0IiwiZ2V0QWxsUGxheWxpc3QiLCJhcGlDYWxsIiwiZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGxheWxpc3RJZCIsInNldFBsYXlsaXN0Iiwic2V0TG9hZGluZyIsImluaXRQbGF5bGlzdCIsInVzZUNhbGxiYWNrIiwicGxheWxpc3RJdGVtcyIsInNldEl0ZW1zIiwiZGFzaGJvYXJkIiwiZmluZCIsIm5ld0l0ZW0iLCJ0b1N0cmluZyIsIm9yZGVyIiwidGFncyIsInRhZyIsIm1vdmVQbGF5bGlzdEl0ZW0iLCJvZmZzZXQiLCJuZXdJdGVtcyIsImN1cnJlbnRQb3NpdGlvbiIsImluZGV4T2YiLCJuZXdQb3NpdGlvbiIsInNwbGljZSIsImZpbHRlciIsImkiXSwic291cmNlUm9vdCI6IiJ9