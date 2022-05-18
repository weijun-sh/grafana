"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistNewPage"],{

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

/***/ "./public/app/features/playlist/PlaylistNewPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaylistNewPage": () => (/* binding */ PlaylistNewPage),
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












const PlaylistNewPage = ({
  navModel
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_8__.getPlaylistStyles);
  const {
    playlist,
    loading
  } = (0,_usePlaylist__WEBPACK_IMPORTED_MODULE_9__.usePlaylist)();

  const onSubmit = async playlist => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_7__.createPlaylist)(playlist);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/playlists');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      isLoading: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
        className: styles.subHeading,
        children: "New Playlist"
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(PlaylistNewPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDNUYsS0FBSyxDQUFDMkcsTUFBTixDQUFjQyxDQUFELElBQU9BLENBQUMsS0FBS3hJLElBQTFCLENBQUQsQ0FBUjtBQUNELEdBSDJCLEVBSTVCLENBQUM0QixLQUFELENBSjRCLENBQTlCO0FBT0EsU0FBTztBQUFFQSxJQUFBQSxLQUFGO0FBQVNFLElBQUFBLE9BQVQ7QUFBa0JDLElBQUFBLFFBQWxCO0FBQTRCQyxJQUFBQSxVQUE1QjtBQUF3Q0MsSUFBQUEsUUFBeEM7QUFBa0RDLElBQUFBO0FBQWxELEdBQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9lZGl0b3JzL0Rhc2hib2FyZFBpY2tlckJ5SUQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L1BsYXlsaXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvUGxheWxpc3ROZXdQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdFRhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdFRhYmxlUm93LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC9QbGF5bGlzdFRhYmxlUm93cy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvYXBpLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsYXlsaXN0L3N0eWxlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbGF5bGlzdC91c2VQbGF5bGlzdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGxheWxpc3QvdXNlUGxheWxpc3RJdGVtcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlYm91bmNlIGZyb20gJ2RlYm91bmNlLXByb21pc2UnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFzeW5jU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgYmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBwcmVmZXIgdXNpbmcgZGFzaGJvYXJkIHVpZCByYXRoZXIgdGhhbiBpZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZFBpY2tlckl0ZW0ge1xuICBpZDogbnVtYmVyO1xuICB1aWQ6IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKGRhc2hib2FyZD86IERhc2hib2FyZFBpY2tlckl0ZW0pID0+IHZvaWQ7XG4gIHZhbHVlPzogRGFzaGJvYXJkUGlja2VySXRlbTtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGlzQ2xlYXJhYmxlPzogYm9vbGVhbjtcbiAgaW52YWxpZD86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWQ/OiBzdHJpbmc7XG4gIG9wdGlvbkxhYmVsPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkIHByZWZlciB1c2luZyBkYXNoYm9hcmQgdWlkIHJhdGhlciB0aGFuIGlkXG4gKi9cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRQaWNrZXJCeUlEOiBGQzxQcm9wcz4gPSAoe1xuICBvbkNoYW5nZTogcHJvcHNPbkNoYW5nZSxcbiAgdmFsdWUsXG4gIHdpZHRoLFxuICBpc0NsZWFyYWJsZSA9IGZhbHNlLFxuICBpbnZhbGlkLFxuICBkaXNhYmxlZCxcbiAgaWQsXG4gIG9wdGlvbkxhYmVsID0gJ2xhYmVsJyxcbn0pID0+IHtcbiAgY29uc3QgZGVib3VuY2VkU2VhcmNoID0gZGVib3VuY2UoKHF1ZXJ5OiBzdHJpbmcpID0+IGdldERhc2hib2FyZHMocXVlcnkgfHwgJycsIG9wdGlvbkxhYmVsKSwgMzAwKTtcbiAgY29uc3Qgb3B0aW9uID0gdmFsdWUgPyB7IHZhbHVlLCBbb3B0aW9uTGFiZWxdOiB2YWx1ZVtvcHRpb25MYWJlbF0gfSA6IHVuZGVmaW5lZDtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoaXRlbTogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFBpY2tlckl0ZW0+KSA9PiB7XG4gICAgcHJvcHNPbkNoYW5nZShpdGVtPy52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXN5bmNTZWxlY3RcbiAgICAgIGlucHV0SWQ9e2lkfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaXNDbGVhcmFibGU9e2lzQ2xlYXJhYmxlfVxuICAgICAgZGVmYXVsdE9wdGlvbnM9e3RydWV9XG4gICAgICBsb2FkT3B0aW9ucz17ZGVib3VuY2VkU2VhcmNofVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgZGFzaGJvYXJkXCJcbiAgICAgIG5vT3B0aW9uc01lc3NhZ2U9XCJObyBkYXNoYm9hcmRzIGZvdW5kXCJcbiAgICAgIHZhbHVlPXtvcHRpb259XG4gICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbltvcHRpb25MYWJlbF19XG4gICAgLz5cbiAgKTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhc2hib2FyZHMocXVlcnk6IHN0cmluZywgbGFiZWw6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFBpY2tlckl0ZW0+Pj4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBiYWNrZW5kU3J2LnNlYXJjaCh7IHR5cGU6ICdkYXNoLWRiJywgcXVlcnksIGxpbWl0OiAxMDAgfSk7XG4gIHJldHVybiByZXN1bHQubWFwKCh7IGlkLCB1aWQgPSAnJywgdGl0bGUsIGZvbGRlclRpdGxlIH0pID0+IHtcbiAgICBjb25zdCB2YWx1ZTogRGFzaGJvYXJkUGlja2VySXRlbSA9IHtcbiAgICAgIGlkLFxuICAgICAgdWlkLFxuICAgICAgW2xhYmVsXTogYCR7Zm9sZGVyVGl0bGUgPz8gJ0dlbmVyYWwnfS8ke3RpdGxlfWAsXG4gICAgfTtcblxuICAgIHJldHVybiB7IHZhbHVlLCBbbGFiZWxdOiB2YWx1ZVtsYWJlbF0gfTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIEZpZWxkLCBGb3JtLCBIb3Jpem9udGFsR3JvdXAsIElucHV0LCBMaW5rQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGFzaGJvYXJkUGlja2VyQnlJRCB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvZWRpdG9ycy9EYXNoYm9hcmRQaWNrZXJCeUlEJztcblxuaW1wb3J0IHsgVGFnRmlsdGVyIH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdGaWx0ZXInO1xuaW1wb3J0IHsgU2VhcmNoU3J2IH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy9zZWFyY2hfc3J2JztcblxuaW1wb3J0IHsgUGxheWxpc3RUYWJsZSB9IGZyb20gJy4vUGxheWxpc3RUYWJsZSc7XG5pbXBvcnQgeyBQbGF5bGlzdCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUGxheWxpc3RJdGVtcyB9IGZyb20gJy4vdXNlUGxheWxpc3RJdGVtcyc7XG5cbmludGVyZmFjZSBQbGF5bGlzdEZvcm1Qcm9wcyB7XG4gIG9uU3VibWl0OiAocGxheWxpc3Q6IFBsYXlsaXN0KSA9PiB2b2lkO1xuICBwbGF5bGlzdDogUGxheWxpc3Q7XG59XG5cbmNvbnN0IHNlYXJjaFNydiA9IG5ldyBTZWFyY2hTcnYoKTtcblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0Rm9ybTogRkM8UGxheWxpc3RGb3JtUHJvcHM+ID0gKHsgb25TdWJtaXQsIHBsYXlsaXN0IH0pID0+IHtcbiAgY29uc3QgeyBuYW1lLCBpbnRlcnZhbCwgaXRlbXM6IHByb3BJdGVtcyB9ID0gcGxheWxpc3Q7XG4gIGNvbnN0IHsgaXRlbXMsIGFkZEJ5SWQsIGFkZEJ5VGFnLCBkZWxldGVJdGVtLCBtb3ZlRG93biwgbW92ZVVwIH0gPSB1c2VQbGF5bGlzdEl0ZW1zKHByb3BJdGVtcyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXsobGlzdDogUGxheWxpc3QpID0+IG9uU3VibWl0KHsgLi4ubGlzdCwgaXRlbXMgfSl9IHZhbGlkYXRlT249eydvbkJsdXInfT5cbiAgICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBpdGVtcy5sZW5ndGggPT09IDAgfHwgT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJOYW1lXCIgaW52YWxpZD17ISFlcnJvcnMubmFtZX0gZXJyb3I9e2Vycm9ycz8ubmFtZT8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiAnTmFtZSBpcyByZXF1aXJlZCcgfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkludGVydmFsXCIgaW52YWxpZD17ISFlcnJvcnMuaW50ZXJ2YWx9IGVycm9yPXtlcnJvcnM/LmludGVydmFsPy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignaW50ZXJ2YWwnLCB7IHJlcXVpcmVkOiAnSW50ZXJ2YWwgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCI1bVwiXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ludGVydmFsID8/ICc1bSd9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLmludGVydmFsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPFBsYXlsaXN0VGFibGUgaXRlbXM9e2l0ZW1zfSBvbk1vdmVVcD17bW92ZVVwfSBvbk1vdmVEb3duPXttb3ZlRG93bn0gb25EZWxldGU9e2RlbGV0ZUl0ZW19IC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyaW5nXCI+QWRkIGRhc2hib2FyZHM8L2gzPlxuXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiQWRkIGJ5IHRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkUGlja2VyQnlJRCBvbkNoYW5nZT17YWRkQnlJZH0gaWQ9XCJkYXNoYm9hcmQtcGlja2VyXCIgaXNDbGVhcmFibGUgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiQWRkIGJ5IHRhZ1wiPlxuICAgICAgICAgICAgICAgICAgPFRhZ0ZpbHRlclxuICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICB0YWdzPXtbXX1cbiAgICAgICAgICAgICAgICAgICAgaGlkZVZhbHVlc1xuICAgICAgICAgICAgICAgICAgICB0YWdPcHRpb25zPXtzZWFyY2hTcnYuZ2V0RGFzaGJvYXJkVGFnc31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2FkZEJ5VGFnfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Jyd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGRpc2FibGVkPXtpc0Rpc2FibGVkfT5cbiAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgaHJlZj17YCR7Y29uZmlnLmFwcFN1YlVybH0vcGxheWxpc3RzYH0+XG4gICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRm9ybT5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBNYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi8uLi9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdEZvcm0gfSBmcm9tICcuL1BsYXlsaXN0Rm9ybSc7XG5pbXBvcnQgeyBjcmVhdGVQbGF5bGlzdCB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGdldFBsYXlsaXN0U3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZVBsYXlsaXN0IH0gZnJvbSAnLi91c2VQbGF5bGlzdCc7XG5cbmludGVyZmFjZSBDb25uZWN0ZWRQcm9wcyB7XG4gIG5hdk1vZGVsOiBOYXZNb2RlbDtcbn1cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQ29ubmVjdGVkUHJvcHMsIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBQbGF5bGlzdE5ld1BhZ2U6IEZDPFByb3BzPiA9ICh7IG5hdk1vZGVsIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRQbGF5bGlzdFN0eWxlcyk7XG4gIGNvbnN0IHsgcGxheWxpc3QsIGxvYWRpbmcgfSA9IHVzZVBsYXlsaXN0KCk7XG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHBsYXlsaXN0OiBQbGF5bGlzdCkgPT4ge1xuICAgIGF3YWl0IGNyZWF0ZVBsYXlsaXN0KHBsYXlsaXN0KTtcbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL3BsYXlsaXN0cycpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5zdWJIZWFkaW5nfT5OZXcgUGxheWxpc3Q8L2gzPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBBIHBsYXlsaXN0IHJvdGF0ZXMgdGhyb3VnaCBhIHByZS1zZWxlY3RlZCBsaXN0IG9mIGRhc2hib2FyZHMuIEEgcGxheWxpc3QgY2FuIGJlIGEgZ3JlYXQgd2F5IHRvIGJ1aWxkXG4gICAgICAgICAgc2l0dWF0aW9uYWwgYXdhcmVuZXNzLCBvciBqdXN0IHNob3cgb2ZmIHlvdXIgbWV0cmljcyB0byB5b3VyIHRlYW0gb3IgdmlzaXRvcnMuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8UGxheWxpc3RGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gcGxheWxpc3Q9e3BsYXlsaXN0fSAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzPENvbm5lY3RlZFByb3BzLCB7fSwgU3RvcmVTdGF0ZT4gPSAoc3RhdGU6IFN0b3JlU3RhdGUpID0+ICh7XG4gIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3BsYXlsaXN0cycpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQbGF5bGlzdE5ld1BhZ2UpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdFRhYmxlUm93cyB9IGZyb20gJy4vUGxheWxpc3RUYWJsZVJvd3MnO1xuaW1wb3J0IHsgUGxheWxpc3RJdGVtIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQbGF5bGlzdFRhYmxlUHJvcHMge1xuICBpdGVtczogUGxheWxpc3RJdGVtW107XG4gIG9uTW92ZVVwOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbk1vdmVEb3duOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbkRlbGV0ZTogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0VGFibGU6IEZDPFBsYXlsaXN0VGFibGVQcm9wcz4gPSAoeyBpdGVtcywgb25Nb3ZlVXAsIG9uTW92ZURvd24sIG9uRGVsZXRlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRlcmluZ1wiPkRhc2hib2FyZHM8L2gzPlxuXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8UGxheWxpc3RUYWJsZVJvd3MgaXRlbXM9e2l0ZW1zfSBvbk1vdmVVcD17b25Nb3ZlVXB9IG9uTW92ZURvd249e29uTW92ZURvd259IG9uRGVsZXRlPXtvbkRlbGV0ZX0gLz5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBJY29uLCBJY29uQnV0dG9uLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFRhZ0JhZGdlIH0gZnJvbSAnLi4vLi4vY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdCYWRnZSc7XG5cbmltcG9ydCB7IFBsYXlsaXN0SXRlbSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUGxheWxpc3RUYWJsZVJvd1Byb3BzIHtcbiAgZmlyc3Q6IGJvb2xlYW47XG4gIGxhc3Q6IGJvb2xlYW47XG4gIGl0ZW06IFBsYXlsaXN0SXRlbTtcbiAgb25Nb3ZlVXA6IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uTW92ZURvd246IChpdGVtOiBQbGF5bGlzdEl0ZW0pID0+IHZvaWQ7XG4gIG9uRGVsZXRlOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGxheWxpc3RUYWJsZVJvdzogRkM8UGxheWxpc3RUYWJsZVJvd1Byb3BzPiA9ICh7IGl0ZW0sIG9uRGVsZXRlLCBvbk1vdmVEb3duLCBvbk1vdmVVcCwgZmlyc3QsIGxhc3QgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3Qgb25EZWxldGVDbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25EZWxldGUoaXRlbSk7XG4gIH07XG4gIGNvbnN0IG9uTW92ZURvd25DbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25Nb3ZlRG93bihpdGVtKTtcbiAgfTtcbiAgY29uc3Qgb25Nb3ZlVXBDbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25Nb3ZlVXAoaXRlbSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8dHIgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtUm93fSBrZXk9e2l0ZW0udGl0bGV9PlxuICAgICAge2l0ZW0udHlwZSA9PT0gJ2Rhc2hib2FyZF9ieV9pZCcgPyAoXG4gICAgICAgIDx0ZCBjbGFzc05hbWU9e2N4KHN0eWxlcy50ZCwgc3R5bGVzLml0ZW0pfT5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiYXBwc1wiIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbGF5bGlzdEZvcm0uaXRlbUlkVHlwZX0gLz5cbiAgICAgICAgICA8c3Bhbj57aXRlbS50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvdGQ+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtpdGVtLnR5cGUgPT09ICdkYXNoYm9hcmRfYnlfdGFnJyA/IChcbiAgICAgICAgPHRkIGNsYXNzTmFtZT17Y3goc3R5bGVzLnRkLCBzdHlsZXMuaXRlbSl9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJ0YWctYWx0XCIgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtVGFnVHlwZX0gLz5cbiAgICAgICAgICA8VGFnQmFkZ2Uga2V5PXtpdGVtLmlkfSBsYWJlbD17aXRlbS50aXRsZX0gcmVtb3ZlSWNvbj17ZmFsc2V9IGNvdW50PXswfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8dGQgY2xhc3NOYW1lPXtjeChzdHlsZXMudGQsIHN0eWxlcy5zZXR0aW5ncyl9PlxuICAgICAgICB7IWZpcnN0ID8gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBuYW1lPVwiYXJyb3ctdXBcIlxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uTW92ZVVwQ2xpY2t9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1Nb3ZlVXB9XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgeyFsYXN0ID8gKFxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBuYW1lPVwiYXJyb3ctZG93blwiXG4gICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgb25DbGljaz17b25Nb3ZlRG93bkNsaWNrfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsYXlsaXN0Rm9ybS5pdGVtTW92ZURvd259XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBuYW1lPVwidGltZXNcIlxuICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgb25DbGljaz17b25EZWxldGVDbGlja31cbiAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuUGxheWxpc3RGb3JtLml0ZW1EZWxldGV9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIC8+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIHRkOiBjc3NgXG4gICAgICBsYWJlbDogdGQ7XG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgIG1heC13aWR0aDogMzM1cHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGAsXG4gICAgaXRlbTogY3NzYFxuICAgICAgbGFiZWw6IGl0ZW07XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgICB9XG4gICAgYCxcbiAgICBzZXR0aW5nczogY3NzYFxuICAgICAgbGFiZWw6IHNldHRpbmdzO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGxheWxpc3RUYWJsZVJvdyB9IGZyb20gJy4vUGxheWxpc3RUYWJsZVJvdyc7XG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIFBsYXlsaXN0VGFibGVSb3dzUHJvcHMge1xuICBpdGVtczogUGxheWxpc3RJdGVtW107XG4gIG9uTW92ZVVwOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbk1vdmVEb3duOiAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB2b2lkO1xuICBvbkRlbGV0ZTogKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFBsYXlsaXN0VGFibGVSb3dzOiBGQzxQbGF5bGlzdFRhYmxlUm93c1Byb3BzPiA9ICh7IGl0ZW1zLCBvbk1vdmVVcCwgb25Nb3ZlRG93biwgb25EZWxldGUgfSkgPT4ge1xuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxlbT5QbGF5bGlzdCBpcyBlbXB0eS4gQWRkIGRhc2hib2FyZHMgYmVsb3cuPC9lbT5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGNvbnN0IGxhc3QgPSBpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGxheWxpc3RUYWJsZVJvd1xuICAgICAgICAgICAgZmlyc3Q9e2ZpcnN0fVxuICAgICAgICAgICAgbGFzdD17bGFzdH1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgICAgICBvbk1vdmVEb3duPXtvbk1vdmVEb3dufVxuICAgICAgICAgICAgb25Nb3ZlVXA9e29uTW92ZVVwfVxuICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJy4uLy4uL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiwgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSc7XG5cbmltcG9ydCB7IFBsYXlsaXN0LCBQbGF5bGlzdERUTyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGxheWxpc3QocGxheWxpc3Q6IFBsYXlsaXN0KSB7XG4gIGF3YWl0IHdpdGhFcnJvckhhbmRsaW5nKCgpID0+IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL3BsYXlsaXN0cycsIHBsYXlsaXN0KSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQbGF5bGlzdChpZDogbnVtYmVyLCBwbGF5bGlzdDogUGxheWxpc3QpIHtcbiAgYXdhaXQgd2l0aEVycm9ySGFuZGxpbmcoKCkgPT4gZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9wbGF5bGlzdHMvJHtpZH1gLCBwbGF5bGlzdCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlUGxheWxpc3QoaWQ6IG51bWJlcikge1xuICBhd2FpdCB3aXRoRXJyb3JIYW5kbGluZygoKSA9PiBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL3BsYXlsaXN0cy8ke2lkfWApLCAnUGxheWxpc3QgZGVsZXRlZCcpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGxheWxpc3QoaWQ6IG51bWJlcik6IFByb21pc2U8UGxheWxpc3Q+IHtcbiAgY29uc3QgcmVzdWx0OiBQbGF5bGlzdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvcGxheWxpc3RzLyR7aWR9YCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQbGF5bGlzdChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxQbGF5bGlzdERUT1tdPiB7XG4gIGNvbnN0IHJlc3VsdDogUGxheWxpc3REVE9bXSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGxheWxpc3RzLycsIHsgcXVlcnkgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdpdGhFcnJvckhhbmRsaW5nKGFwaUNhbGw6ICgpID0+IFByb21pc2U8dm9pZD4sIG1lc3NhZ2UgPSAnUGxheWxpc3Qgc2F2ZWQnKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpQ2FsbCgpO1xuICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uKG1lc3NhZ2UpKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oJ1VuYWJsZSB0byBzYXZlIHBsYXlsaXN0JywgZSkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGxheWxpc3RTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBkZXNjcmlwdGlvbjogY3NzYFxuICAgICAgbGFiZWw6IGRlc2NyaXB0aW9uO1xuICAgICAgd2lkdGg6IDU1NXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBgLFxuICAgIHN1YkhlYWRpbmc6IGNzc2BcbiAgICAgIGxhYmVsOiBzdWItaGVhZGluZztcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldFBsYXlsaXN0IH0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHsgUGxheWxpc3QgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXlsaXN0KHBsYXlsaXN0SWQ/OiBudW1iZXIpIHtcbiAgY29uc3QgW3BsYXlsaXN0LCBzZXRQbGF5bGlzdF0gPSB1c2VTdGF0ZTxQbGF5bGlzdD4oeyBpdGVtczogW10sIGludGVydmFsOiAnNW0nLCBuYW1lOiAnJyB9KTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0UGxheWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICBpZiAoIXBsYXlsaXN0SWQpIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpc3QgPSBhd2FpdCBnZXRQbGF5bGlzdChwbGF5bGlzdElkKTtcbiAgICAgIHNldFBsYXlsaXN0KGxpc3QpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcbiAgICBpbml0UGxheWxpc3QoKTtcbiAgfSwgW3BsYXlsaXN0SWRdKTtcblxuICByZXR1cm4geyBwbGF5bGlzdCwgbG9hZGluZyB9O1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRQaWNrZXJJdGVtIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9lZGl0b3JzL0Rhc2hib2FyZFBpY2tlckJ5SUQnO1xuXG5pbXBvcnQgeyBQbGF5bGlzdEl0ZW0gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBsYXlsaXN0SXRlbXMocGxheWxpc3RJdGVtcz86IFBsYXlsaXN0SXRlbVtdKSB7XG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8UGxheWxpc3RJdGVtW10+KHBsYXlsaXN0SXRlbXMgPz8gW10pO1xuXG4gIGNvbnN0IGFkZEJ5SWQgPSB1c2VDYWxsYmFjayhcbiAgICAoZGFzaGJvYXJkPzogRGFzaGJvYXJkUGlja2VySXRlbSkgPT4ge1xuICAgICAgaWYgKCFkYXNoYm9hcmQgfHwgaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gZGFzaGJvYXJkLmlkKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld0l0ZW06IFBsYXlsaXN0SXRlbSA9IHtcbiAgICAgICAgaWQ6IGRhc2hib2FyZC5pZCxcbiAgICAgICAgdGl0bGU6IGRhc2hib2FyZC5sYWJlbCBhcyBzdHJpbmcsXG4gICAgICAgIHR5cGU6ICdkYXNoYm9hcmRfYnlfaWQnLFxuICAgICAgICB2YWx1ZTogZGFzaGJvYXJkLmlkLnRvU3RyaW5nKDEwKSxcbiAgICAgICAgb3JkZXI6IGl0ZW1zLmxlbmd0aCArIDEsXG4gICAgICB9O1xuICAgICAgc2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfSxcbiAgICBbaXRlbXNdXG4gICk7XG5cbiAgY29uc3QgYWRkQnlUYWcgPSB1c2VDYWxsYmFjayhcbiAgICAodGFnczogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IHRhZyA9IHRhZ3NbMF07XG4gICAgICBpZiAoIXRhZyB8fCBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSB0YWcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3SXRlbTogUGxheWxpc3RJdGVtID0ge1xuICAgICAgICB0aXRsZTogdGFnLFxuICAgICAgICB0eXBlOiAnZGFzaGJvYXJkX2J5X3RhZycsXG4gICAgICAgIHZhbHVlOiB0YWcsXG4gICAgICAgIG9yZGVyOiBpdGVtcy5sZW5ndGggKyAxLFxuICAgICAgfTtcbiAgICAgIHNldEl0ZW1zKFsuLi5pdGVtcywgbmV3SXRlbV0pO1xuICAgIH0sXG4gICAgW2l0ZW1zXVxuICApO1xuXG4gIGNvbnN0IG1vdmVQbGF5bGlzdEl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtLCBvZmZzZXQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXNdO1xuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbmV3SXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgIGNvbnN0IG5ld1Bvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgb2Zmc2V0O1xuXG4gICAgICBpZiAobmV3UG9zaXRpb24gPj0gMCAmJiBuZXdQb3NpdGlvbiA8IG5ld0l0ZW1zLmxlbmd0aCkge1xuICAgICAgICBuZXdJdGVtcy5zcGxpY2UoY3VycmVudFBvc2l0aW9uLCAxKTtcbiAgICAgICAgbmV3SXRlbXMuc3BsaWNlKG5ld1Bvc2l0aW9uLCAwLCBpdGVtKTtcbiAgICAgIH1cbiAgICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICBjb25zdCBtb3ZlVXAgPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBtb3ZlUGxheWxpc3RJdGVtKGl0ZW0sIC0xKTtcbiAgICB9LFxuICAgIFttb3ZlUGxheWxpc3RJdGVtXVxuICApO1xuXG4gIGNvbnN0IG1vdmVEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGl0ZW06IFBsYXlsaXN0SXRlbSkgPT4ge1xuICAgICAgbW92ZVBsYXlsaXN0SXRlbShpdGVtLCAxKTtcbiAgICB9LFxuICAgIFttb3ZlUGxheWxpc3RJdGVtXVxuICApO1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAoaXRlbTogUGxheWxpc3RJdGVtKSA9PiB7XG4gICAgICBzZXRJdGVtcyhpdGVtcy5maWx0ZXIoKGkpID0+IGkgIT09IGl0ZW0pKTtcbiAgICB9LFxuICAgIFtpdGVtc11cbiAgKTtcblxuICByZXR1cm4geyBpdGVtcywgYWRkQnlJZCwgYWRkQnlUYWcsIGRlbGV0ZUl0ZW0sIG1vdmVEb3duLCBtb3ZlVXAgfTtcbn1cbiJdLCJuYW1lcyI6WyJkZWJvdW5jZSIsIlJlYWN0IiwiQXN5bmNTZWxlY3QiLCJiYWNrZW5kU3J2IiwiRGFzaGJvYXJkUGlja2VyQnlJRCIsIm9uQ2hhbmdlIiwicHJvcHNPbkNoYW5nZSIsInZhbHVlIiwid2lkdGgiLCJpc0NsZWFyYWJsZSIsImludmFsaWQiLCJkaXNhYmxlZCIsImlkIiwib3B0aW9uTGFiZWwiLCJkZWJvdW5jZWRTZWFyY2giLCJxdWVyeSIsImdldERhc2hib2FyZHMiLCJvcHRpb24iLCJ1bmRlZmluZWQiLCJpdGVtIiwibGFiZWwiLCJyZXN1bHQiLCJzZWFyY2giLCJ0eXBlIiwibGltaXQiLCJtYXAiLCJ1aWQiLCJ0aXRsZSIsImZvbGRlclRpdGxlIiwic2VsZWN0b3JzIiwiY29uZmlnIiwiQnV0dG9uIiwiRmllbGQiLCJGb3JtIiwiSG9yaXpvbnRhbEdyb3VwIiwiSW5wdXQiLCJMaW5rQnV0dG9uIiwiVGFnRmlsdGVyIiwiU2VhcmNoU3J2IiwiUGxheWxpc3RUYWJsZSIsInVzZVBsYXlsaXN0SXRlbXMiLCJzZWFyY2hTcnYiLCJQbGF5bGlzdEZvcm0iLCJvblN1Ym1pdCIsInBsYXlsaXN0IiwibmFtZSIsImludGVydmFsIiwiaXRlbXMiLCJwcm9wSXRlbXMiLCJhZGRCeUlkIiwiYWRkQnlUYWciLCJkZWxldGVJdGVtIiwibW92ZURvd24iLCJtb3ZlVXAiLCJsaXN0IiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJpc0Rpc2FibGVkIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInBhZ2VzIiwiZ2V0RGFzaGJvYXJkVGFncyIsImFwcFN1YlVybCIsImNvbm5lY3QiLCJsb2NhdGlvblNlcnZpY2UiLCJ1c2VTdHlsZXMyIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiY3JlYXRlUGxheWxpc3QiLCJnZXRQbGF5bGlzdFN0eWxlcyIsInVzZVBsYXlsaXN0IiwiUGxheWxpc3ROZXdQYWdlIiwibmF2TW9kZWwiLCJzdHlsZXMiLCJsb2FkaW5nIiwicHVzaCIsInN1YkhlYWRpbmciLCJkZXNjcmlwdGlvbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2SW5kZXgiLCJQbGF5bGlzdFRhYmxlUm93cyIsIm9uTW92ZVVwIiwib25Nb3ZlRG93biIsIm9uRGVsZXRlIiwiY3NzIiwiY3giLCJJY29uIiwiSWNvbkJ1dHRvbiIsInVzZVN0eWxlcyIsIlRhZ0JhZGdlIiwiUGxheWxpc3RUYWJsZVJvdyIsImZpcnN0IiwibGFzdCIsImdldFN0eWxlcyIsIm9uRGVsZXRlQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib25Nb3ZlRG93bkNsaWNrIiwib25Nb3ZlVXBDbGljayIsIml0ZW1Sb3ciLCJ0ZCIsIml0ZW1JZFR5cGUiLCJpdGVtVGFnVHlwZSIsInNldHRpbmdzIiwiaXRlbU1vdmVVcCIsIml0ZW1Nb3ZlRG93biIsIml0ZW1EZWxldGUiLCJ0aGVtZSIsInNwYWNpbmciLCJ4cyIsImluZGV4IiwiZ2V0QmFja2VuZFNydiIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImRpc3BhdGNoIiwid2l0aEVycm9ySGFuZGxpbmciLCJwb3N0IiwidXBkYXRlUGxheWxpc3QiLCJwdXQiLCJkZWxldGVQbGF5bGlzdCIsImRlbGV0ZSIsImdldFBsYXlsaXN0IiwiZ2V0IiwiZ2V0QWxsUGxheWxpc3QiLCJhcGlDYWxsIiwiZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGxheWxpc3RJZCIsInNldFBsYXlsaXN0Iiwic2V0TG9hZGluZyIsImluaXRQbGF5bGlzdCIsInVzZUNhbGxiYWNrIiwicGxheWxpc3RJdGVtcyIsInNldEl0ZW1zIiwiZGFzaGJvYXJkIiwiZmluZCIsIm5ld0l0ZW0iLCJ0b1N0cmluZyIsIm9yZGVyIiwidGFncyIsInRhZyIsIm1vdmVQbGF5bGlzdEl0ZW0iLCJvZmZzZXQiLCJuZXdJdGVtcyIsImN1cnJlbnRQb3NpdGlvbiIsImluZGV4T2YiLCJuZXdQb3NpdGlvbiIsInNwbGljZSIsImZpbHRlciIsImkiXSwic291cmNlUm9vdCI6IiJ9