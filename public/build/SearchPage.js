"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SearchPage"],{

/***/ "./public/app/features/search/page/SearchPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchPage)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _components_PreviewsSystemRequirements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/search/components/PreviewsSystemRequirements.tsx");
/* harmony import */ var _hooks_useSearchQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/search/hooks/useSearchQuery.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/search/service/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/search/types.ts");
/* harmony import */ var _components_ActionRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/search/page/components/ActionRow.tsx");
/* harmony import */ var _components_FolderView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/search/page/components/FolderView.tsx");
/* harmony import */ var _components_ManageActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/search/page/components/ManageActions.tsx");
/* harmony import */ var _components_SearchResultsGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/search/page/components/SearchResultsGrid.tsx");
/* harmony import */ var _components_SearchResultsTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/search/page/components/SearchResultsTable.tsx");
/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/search/page/selection.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Spinner, _div, _br, _Spinner2;




















const node = {
  id: 'search',
  text: 'Search playground',
  subTitle: 'The body below will eventually live inside existing UI layouts',
  icon: 'dashboard',
  url: 'search'
};
function SearchPage() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const {
    query,
    onQueryChange,
    onTagFilterChange,
    onDatasourceChange,
    onSortChange,
    onLayoutChange
  } = (0,_hooks_useSearchQuery__WEBPACK_IMPORTED_MODULE_7__.useSearchQuery)({});
  const [showManage, setShowManage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // grid vs list view

  const [searchSelection, setSearchSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_selection__WEBPACK_IMPORTED_MODULE_15__.newSearchSelection)());
  const layout = (0,_components_ActionRow__WEBPACK_IMPORTED_MODULE_10__.getValidQueryLayout)(query);
  const isFolders = layout === _types__WEBPACK_IMPORTED_MODULE_9__.SearchLayout.Folders;
  const results = (0,react_use__WEBPACK_IMPORTED_MODULE_17__["default"])(() => {
    var _qstr;

    let qstr = query.query;

    if (!((_qstr = qstr) !== null && _qstr !== void 0 && _qstr.length)) {
      qstr = '*';
    }

    const q = {
      query: qstr,
      tags: query.tag,
      ds_uid: query.datasource
    };
    console.log('DO QUERY', q);
    return (0,_service__WEBPACK_IMPORTED_MODULE_8__.getGrafanaSearcher)().search(q);
  }, [query, layout]);
  const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const onSearchQueryChange = e => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
  };

  (0,react_use__WEBPACK_IMPORTED_MODULE_18__["default"])(() => onQueryChange(inputValue), 200, [inputValue]);

  if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.panelTitleSearch) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      className: styles.unsupported,
      children: "Unsupported"
    });
  } // This gets the possible tags from within the query results


  const getTagOptions = () => {
    var _query$query;

    const q = {
      query: (_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '*',
      tags: query.tag,
      ds_uid: query.datasource
    };
    return (0,_service__WEBPACK_IMPORTED_MODULE_8__.getGrafanaSearcher)().tags(q);
  };

  const onTagSelected = tag => {
    onTagFilterChange([...new Set(query.tag).add(tag)]);
  };

  const toggleSelection = (kind, uid) => {
    const current = searchSelection.isSelected(kind, uid);

    if (kind === 'folder') {// ??? also select all children?
    }

    setSearchSelection((0,_selection__WEBPACK_IMPORTED_MODULE_15__.updateSearchSelection)(searchSelection, !current, kind, [uid]));
  };

  const renderResults = () => {
    const value = results.value;

    if ((!value || !value.totalRows) && !isFolders) {
      if (results.loading && !value) {
        return _Spinner || (_Spinner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}));
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: styles.noResults,
        children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          children: "No results found for your query."
        })), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "secondary",
          onClick: () => {
            var _query$tag;

            if (query.query) {
              onQueryChange('');
            }

            if ((_query$tag = query.tag) !== null && _query$tag !== void 0 && _query$tag.length) {
              onTagFilterChange([]);
            }

            if (query.datasource) {
              onDatasourceChange(undefined);
            }
          },
          children: "Remove search constraints"
        })]
      });
    }

    const selection = showManage ? searchSelection.isSelected : undefined;

    if (layout === _types__WEBPACK_IMPORTED_MODULE_9__.SearchLayout.Folders) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_FolderView__WEBPACK_IMPORTED_MODULE_11__.FolderView, {
        selection: selection,
        selectionToggle: toggleSelection,
        onTagSelected: onTagSelected
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      style: {
        height: '100%',
        width: '100%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: ({
          width,
          height
        }) => {
          const props = {
            response: value,
            selection,
            selectionToggle: toggleSelection,
            width: width,
            height: height,
            onTagSelected: onTagSelected,
            onDatasourceChange: query.datasource ? onDatasourceChange : undefined
          };

          if (layout === _types__WEBPACK_IMPORTED_MODULE_9__.SearchLayout.Grid) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_SearchResultsGrid__WEBPACK_IMPORTED_MODULE_13__.SearchResultsGrid, Object.assign({}, props));
          }

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_SearchResultsTable__WEBPACK_IMPORTED_MODULE_14__.SearchResultsTable, Object.assign({}, props));
        }
      })
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navModel: {
      node: node,
      main: node
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
          display: flex;
          flex-direction: column;
        `,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
        value: inputValue,
        onChange: onSearchQueryChange,
        autoFocus: true,
        spellCheck: false,
        placeholder: "Search for dashboards and panels",
        className: styles.searchInput,
        suffix: results.loading ? _Spinner2 || (_Spinner2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {})) : null
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
          label: "Show manage options",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch, {
            value: showManage,
            onChange: () => setShowManage(!showManage)
          })
        })
      }), Boolean(searchSelection.items.size > 0) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ManageActions__WEBPACK_IMPORTED_MODULE_12__.ManageActions, {
        items: searchSelection.items
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ActionRow__WEBPACK_IMPORTED_MODULE_10__.ActionRow, {
        onLayoutChange: v => {
          if (v === _types__WEBPACK_IMPORTED_MODULE_9__.SearchLayout.Folders) {
            if (query.query) {
              onQueryChange(''); // parent will clear the sort
            }
          }

          onLayoutChange(v);
        },
        onSortChange: onSortChange,
        onTagFilterChange: onTagFilterChange,
        getTagOptions: getTagOptions,
        onDatasourceChange: onDatasourceChange,
        query: query
      }), layout === _types__WEBPACK_IMPORTED_MODULE_9__.SearchLayout.Grid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_PreviewsSystemRequirements__WEBPACK_IMPORTED_MODULE_6__.PreviewsSystemRequirements, {
        bottomSpacing: 3,
        showPreviews: true,
        onRemove: () => onLayoutChange(_types__WEBPACK_IMPORTED_MODULE_9__.SearchLayout.List)
      }), renderResults()]
    })
  });
}

const getStyles = theme => ({
  searchInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 6px;
  `,
  unsupported: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
  `,
  noResults: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.v1.spacing.md};
    background: ${theme.v1.colors.bg2};
    font-style: italic;
    margin-top: ${theme.v1.spacing.md};
  `
});

/***/ }),

/***/ "./public/app/features/search/page/components/ActionRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionRow": () => (/* binding */ ActionRow),
/* harmony export */   "getStyles": () => (/* binding */ getStyles),
/* harmony export */   "getValidQueryLayout": () => (/* binding */ getValidQueryLayout),
/* harmony export */   "layoutOptions": () => (/* binding */ layoutOptions)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Select/SortPicker.tsx");
/* harmony import */ var app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/search/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const layoutOptions = [{
  value: _types__WEBPACK_IMPORTED_MODULE_6__.SearchLayout.Folders,
  icon: 'folder',
  ariaLabel: 'View by folders'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_6__.SearchLayout.List,
  icon: 'list-ul',
  ariaLabel: 'View as list'
}];

if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.dashboardPreviews) {
  layoutOptions.push({
    value: _types__WEBPACK_IMPORTED_MODULE_6__.SearchLayout.Grid,
    icon: 'apps',
    ariaLabel: 'Grid view'
  });
}

function getValidQueryLayout(q) {
  var _q$layout;

  const layout = (_q$layout = q.layout) !== null && _q$layout !== void 0 ? _q$layout : _types__WEBPACK_IMPORTED_MODULE_6__.SearchLayout.Folders; // Folders is not valid when a query exists

  if (layout === _types__WEBPACK_IMPORTED_MODULE_6__.SearchLayout.Folders) {
    if (q.query || q.sort) {
      return _types__WEBPACK_IMPORTED_MODULE_6__.SearchLayout.List;
    }
  }

  if (layout === _types__WEBPACK_IMPORTED_MODULE_6__.SearchLayout.Grid && !_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.dashboardPreviews) {
    return _types__WEBPACK_IMPORTED_MODULE_6__.SearchLayout.List;
  }

  return layout;
}
const ActionRow = ({
  onLayoutChange,
  onSortChange,
  onStarredFilterChange = () => {},
  onTagFilterChange,
  getTagOptions,
  onDatasourceChange,
  query,
  showStarredFilter,
  hideLayout
}) => {
  var _query$sort;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.actionRow,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.rowContainer,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
        spacing: "md",
        width: "auto",
        children: [!hideLayout && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
          options: layoutOptions,
          onChange: onLayoutChange,
          value: getValidQueryLayout(query)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Select_SortPicker__WEBPACK_IMPORTED_MODULE_4__.SortPicker, {
          onChange: onSortChange,
          value: (_query$sort = query.sort) === null || _query$sort === void 0 ? void 0 : _query$sort.value
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      spacing: "md",
      width: "auto",
      children: [showStarredFilter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: styles.checkboxWrapper,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
          label: "Filter by starred",
          onChange: onStarredFilterChange,
          value: query.starred
        })
      }), query.datasource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        icon: "times",
        variant: "secondary",
        onClick: () => onDatasourceChange(undefined),
        children: ["Datasource: ", query.datasource]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_5__.TagFilter, {
        isClearable: true,
        tags: query.tag,
        tagOptions: getTagOptions,
        onChange: onTagFilterChange
      })]
    })]
  });
};
ActionRow.displayName = 'ActionRow';
const getStyles = theme => {
  return {
    actionRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: none;

      @media only screen and (min-width: ${theme.v1.breakpoints.md}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theme.v1.spacing.lg} 0;
        width: 100%;
      }
    `,
    rowContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.v1.spacing.md};
    `,
    checkboxWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label {
        line-height: 1.2;
      }
    `
  };
};

/***/ }),

/***/ "./public/app/features/search/page/components/ConfirmDeleteModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDeleteModal": () => (/* binding */ ConfirmDeleteModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_manage_dashboards_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const ConfirmDeleteModal = ({
  results,
  onDeleteItems,
  isOpen,
  onDismiss
}) => {
  var _results$get, _results$get2;

  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const styles = getStyles(theme);
  const dashboards = Array.from((_results$get = results.get('dashboard')) !== null && _results$get !== void 0 ? _results$get : []);
  const folders = Array.from((_results$get2 = results.get('folder')) !== null && _results$get2 !== void 0 ? _results$get2 : []);
  const folderCount = folders.length;
  const dashCount = dashboards.length;
  let text = 'Do you want to delete the ';
  let subtitle;
  const dashEnding = dashCount === 1 ? '' : 's';
  const folderEnding = folderCount === 1 ? '' : 's';

  if (folderCount > 0 && dashCount > 0) {
    text += `selected folder${folderEnding} and dashboard${dashEnding}?\n`;
    subtitle = `All dashboards and alerts of the selected folder${folderEnding} will also be deleted`;
  } else if (folderCount > 0) {
    text += `selected folder${folderEnding} and all ${folderCount === 1 ? 'its' : 'their'} dashboards and alerts?`;
  } else {
    text += `${dashCount} selected dashboard${dashEnding}?`;
  }

  const deleteItems = () => {
    (0,app_features_manage_dashboards_state_actions__WEBPACK_IMPORTED_MODULE_3__.deleteFoldersAndDashboards)(folders, dashboards).then(() => {
      onDismiss();
      onDeleteItems(folders, dashboards);
    });
  };

  return isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
    isOpen: isOpen,
    title: "Delete",
    body: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [text, " ", subtitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.subtitle,
        children: subtitle
      })]
    }),
    confirmText: "Delete",
    onConfirm: deleteItems,
    onDismiss: onDismiss
  }) : null;
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(theme => {
  return {
    subtitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.size.base};
      padding-top: ${theme.spacing.md};
    `
  };
});

/***/ }),

/***/ "./public/app/features/search/page/components/FolderSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderSection": () => (/* binding */ FolderSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_search_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/search/utils.ts");
/* harmony import */ var app_plugins_datasource_influxdb_components_useUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/search/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/search/service/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/search/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;













const FolderSection = ({
  section,
  selectionToggle,
  onTagSelected,
  selection
}) => {
  const editable = selectionToggle != null;
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const styles = getSectionHeaderStyles(theme, section.selected, editable);
  const [sectionExpanded, setSectionExpanded] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])((0,app_features_search_utils__WEBPACK_IMPORTED_MODULE_3__.getSectionStorageKey)(section.title), false);
  const results = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(async () => {
    if (!sectionExpanded) {
      return Promise.resolve([]);
    }

    let query = {
      query: '*',
      kind: ['dashboard'],
      location: section.uid
    };

    if (section.title === 'Starred') {// TODO
    } else if (section.title === 'Recent') {// TODO
    }

    const raw = await (0,_service__WEBPACK_IMPORTED_MODULE_6__.getGrafanaSearcher)().search(query);
    const v = raw.view.map(item => {
      var _item$tags;

      return {
        uid: item.uid,
        title: item.name,
        url: item.url,
        uri: item.url,
        type: item.kind === 'folder' ? _types__WEBPACK_IMPORTED_MODULE_7__.DashboardSearchItemType.DashFolder : _types__WEBPACK_IMPORTED_MODULE_7__.DashboardSearchItemType.DashDB,
        id: 666,
        // do not use me!
        isStarred: false,
        tags: (_item$tags = item.tags) !== null && _item$tags !== void 0 ? _item$tags : [],
        checked: selection ? selection(item.kind, item.uid) : false
      };
    });
    console.log('HERE!');
    return v;
  }, [sectionExpanded, section]);

  const onSectionExpand = () => {
    setSectionExpanded(!sectionExpanded);
    console.log('TODO!! section', section.title, section);
  };

  const id = (0,app_plugins_datasource_influxdb_components_useUniqueId__WEBPACK_IMPORTED_MODULE_4__.useUniqueId)();
  const labelId = `section-header-label-${id}`;
  let icon = section.icon;

  if (!icon) {
    icon = sectionExpanded ? 'folder-open' : 'folder';
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CollapsableSection, {
    isOpen: sectionExpanded !== null && sectionExpanded !== void 0 ? sectionExpanded : false,
    onToggle: onSectionExpand,
    className: styles.wrapper,
    contentClassName: styles.content,
    loading: results.loading,
    labelId: labelId,
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [selectionToggle && selection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        onClick: v => console.log(v),
        className: styles.checkbox,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
          value: selection(section.kind, section.uid),
          "aria-label": "Select folder"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: styles.icon,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: icon
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: styles.text,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          id: labelId,
          children: section.title
        }), section.url && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
          href: section.url,
          className: styles.link,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: styles.separator,
            children: "|"
          }), " ", _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "folder-upload"
          })), " Go to folder"]
        })]
      })]
    }),
    children: results.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("ul", {
      children: results.value.map(v => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.SearchItem, {
        item: v,
        onTagSelected: onTagSelected
      }, v.uid))
    })
  });
};
const getSectionHeaderStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)((theme, selected = false, editable) => {
  const {
    sm
  } = theme.spacing;
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
        align-items: center;
        font-size: ${theme.typography.size.base};
        padding: 12px;
        border-bottom: none;
        color: ${theme.colors.textWeak};
        z-index: 1;

        &:hover,
        &.selected {
          color: ${theme.colors.text};
        }

        &:hover,
        &:focus-visible,
        &:focus-within {
          a {
            opacity: 1;
          }
        }
      `, 'pointer', {
      selected
    }),
    checkbox: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: 0 ${sm} 0 0;
    `,
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: 0 ${sm} 0 ${editable ? 0 : sm};
    `,
    text: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      line-height: 24px;
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: 2px 10px 0;
      color: ${theme.colors.textWeak};
      opacity: 0;
      transition: opacity 150ms ease-in-out;
    `,
    separator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: 6px;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-top: 0px;
      padding-bottom: 0px;
    `
  };
});

/***/ }),

/***/ "./public/app/features/search/page/components/FolderView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FolderView": () => (/* binding */ FolderView)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/search/service/index.ts");
/* harmony import */ var _FolderSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/search/page/components/FolderSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Spinner, _div;









const FolderView = ({
  selection,
  selectionToggle,
  onTagSelected
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const results = (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(async () => {
    const rsp = await (0,_service__WEBPACK_IMPORTED_MODULE_4__.getGrafanaSearcher)().search({
      query: '*',
      kind: ['folder']
    });
    const folders = [{
      title: 'Recent',
      icon: 'clock',
      kind: 'query-recent',
      uid: '__recent'
    }, {
      title: 'Starred',
      icon: 'star',
      kind: 'query-star',
      uid: '__starred'
    }, {
      title: 'General',
      url: '/dashboards',
      kind: 'folder',
      uid: 'general'
    } // not sure why this is not in the index
    ];

    for (const row of rsp.view) {
      folders.push({
        title: row.name,
        url: row.url,
        uid: row.uid,
        kind: row.kind
      });
    }

    return folders;
  }, []);

  if (results.loading) {
    return _Spinner || (_Spinner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}));
  }

  if (!results.value) {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      children: "?"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: styles.wrapper,
    children: results.value.map(section => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.Search,
        className: styles.section,
        children: section.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_FolderSection__WEBPACK_IMPORTED_MODULE_5__.FolderSection, {
          selection: selection,
          selectionToggle: selectionToggle,
          onTagSelected: onTagSelected,
          section: section
        })
      }, section.title);
    })
  });
};

const getStyles = theme => {
  const {
    md,
    sm
  } = theme.v1.spacing;
  return {
    virtualizedGridItemWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: 4px;
    `,
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;

      > ul {
        list-style: none;
      }
    `,
    section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      background: ${theme.v1.colors.panelBg};
      border-bottom: solid 1px ${theme.v1.colors.border2};
    `,
    sectionItems: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0 24px 0 32px;
    `,
    spinner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100px;
    `,
    gridContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: grid;
      gap: ${sm};
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      margin-bottom: ${md};
    `,
    resultsContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      position: relative;
      flex-grow: 10;
      margin-bottom: ${md};
      background: ${theme.v1.colors.bg1};
      border: 1px solid ${theme.v1.colors.border1};
      border-radius: 3px;
      height: 100%;
    `,
    noResults: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${md};
      background: ${theme.v1.colors.bg2};
      font-style: italic;
      margin-top: ${theme.v1.spacing.md};
    `,
    listModeWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      position: relative;
      height: 100%;
      padding: ${md};
    `
  };
};

/***/ }),

/***/ "./public/app/features/search/page/components/ManageActions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageActions": () => (/* binding */ ManageActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/search/constants.ts");
/* harmony import */ var _ActionRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/search/page/components/ActionRow.tsx");
/* harmony import */ var _ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/search/page/components/ConfirmDeleteModal.tsx");
/* harmony import */ var _MoveToFolderModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/search/page/components/MoveToFolderModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function ManageActions({
  items,
  folder
}) {
  var _items$get;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_ActionRow__WEBPACK_IMPORTED_MODULE_4__.getStyles);
  const canSave = folder === null || folder === void 0 ? void 0 : folder.canSave;
  const hasEditPermissionInFolders = folder ? canSave : app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasEditPermissionInFolders;
  const canMove = hasEditPermissionInFolders; // TODO: check user permissions for delete, should not be able to delete if includes general folder and user don't have permissions
  // There is not GENERAL_FOLDER_UID configured yet, we need to make sure to add it to the data.

  const selectedFolders = Array.from((_items$get = items.get('folders')) !== null && _items$get !== void 0 ? _items$get : []);
  console.log({
    selectedFolders
  });
  const includesGeneralFolder = selectedFolders.find(result => result === _constants__WEBPACK_IMPORTED_MODULE_3__.GENERAL_FOLDER_UID);
  const canDelete = hasEditPermissionInFolders && !includesGeneralFolder;
  const [isMoveModalOpen, setIsMoveModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const onMove = () => {
    setIsMoveModalOpen(true);
  };

  const onDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const onToggleAll = () => {
    alert('TODO, toggle all....');
  }; //Todo: update item lists that were moved


  const onMoveItems = (selectedDashboards, folder) => {
    console.log({
      selectedDashboards
    });
    console.log({
      folder
    });
    console.log('items were moved in the backend');
  }; //Todo: update item lists that were deleted


  const onDeleteItems = (folders, dashboards) => {
    console.log({
      folders
    });
    console.log({
      dashboards
    });
    console.log('items were moved in the backend');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.actionRow,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.rowContainer,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
        spacing: "md",
        width: "auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
          value: false,
          onClick: onToggleAll
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          disabled: !canMove,
          onClick: onMove,
          icon: "exchange-alt",
          variant: "secondary",
          children: "Move"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
          disabled: !canDelete,
          onClick: onDelete,
          icon: "trash-alt",
          variant: "destructive",
          children: "Delete"
        }), [...items.keys()].map(k => {
          const vals = items.get(k);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [k, " (", vals === null || vals === void 0 ? void 0 : vals.size, ")"]
          }, k);
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_5__.ConfirmDeleteModal, {
      onDeleteItems: onDeleteItems,
      results: items,
      isOpen: isDeleteModalOpen,
      onDismiss: () => setIsDeleteModalOpen(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_MoveToFolderModal__WEBPACK_IMPORTED_MODULE_6__.MoveToFolderModal, {
      onMoveItems: onMoveItems,
      results: items,
      isOpen: isMoveModalOpen,
      onDismiss: () => setIsMoveModalOpen(false)
    })]
  });
}

/***/ }),

/***/ "./public/app/features/search/page/components/MoveToFolderModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoveToFolderModal": () => (/* binding */ MoveToFolderModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_manage_dashboards_state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const MoveToFolderModal = ({
  results,
  onMoveItems,
  isOpen,
  onDismiss
}) => {
  var _results$get;

  const [folder, setFolder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const styles = getStyles(theme);
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();
  const selectedDashboards = Array.from((_results$get = results.get('dashboard')) !== null && _results$get !== void 0 ? _results$get : []);

  const moveTo = () => {
    if (folder && selectedDashboards.length) {
      var _folder$title;

      const folderTitle = (_folder$title = folder.title) !== null && _folder$title !== void 0 ? _folder$title : 'General';
      (0,app_features_manage_dashboards_state_actions__WEBPACK_IMPORTED_MODULE_5__.moveDashboards)(selectedDashboards, folder).then(result => {
        if (result.successCount > 0) {
          const ending = result.successCount === 1 ? '' : 's';
          const header = `Dashboard${ending} Moved`;
          const msg = `${result.successCount} dashboard${ending} moved to ${folderTitle}`;
          notifyApp.success(header, msg);
        }

        if (result.totalCount === result.alreadyInFolderCount) {
          notifyApp.error('Error', `Dashboard already belongs to folder ${folderTitle}`);
        } else {
          //update the list
          onMoveItems(selectedDashboards, folder);
        }

        onDismiss();
      });
    }
  };

  return isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    className: styles.modal,
    title: "Choose Dashboard Folder",
    icon: "folder-plus",
    isOpen: isOpen,
    onDismiss: onDismiss,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.content,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          children: ["Move the ", selectedDashboards.length, " selected dashboard", selectedDashboards.length === 1 ? '' : 's', " to the following folder:"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_3__.FolderPicker, {
          onChange: f => setFolder(f)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        justify: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "primary",
          onClick: moveTo,
          children: "Move"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    })
  }) : null;
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(theme => {
  return {
    modal: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 500px;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.lg};
    `
  };
});

/***/ }),

/***/ "./public/app/features/search/page/components/SearchResultsGrid.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsGrid": () => (/* binding */ SearchResultsGrid)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-window-infinite-loader-virtual-05a095a122/0/cache/react-window-infinite-loader-npm-1.0.7-18a8e250f8-5c11a89582.zip/node_modules/react-window-infinite-loader/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_SearchCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/search/components/SearchCard.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/search/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const SearchResultsGrid = ({
  response,
  width,
  height,
  selection,
  selectionToggle,
  onTagSelected,
  onDatasourceChange
}) => {
  var _response$totalRows;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles); // Hacked to reuse existing SearchCard (and old DashboardSectionItem)

  const itemProps = {
    editable: selection != null,
    onToggleChecked: item => {
      const d = item;
      const t = d.type === _types__WEBPACK_IMPORTED_MODULE_5__.DashboardSearchItemType.DashFolder ? 'folder' : 'dashboard';

      if (selectionToggle) {
        selectionToggle(t, d.uid);
      }
    },
    onTagSelected
  };
  const itemCount = (_response$totalRows = response.totalRows) !== null && _response$totalRows !== void 0 ? _response$totalRows : response.view.length;
  const view = response.view;
  const numColumns = Math.ceil(width / 320);
  const cellWidth = width / numColumns;
  const cellHeight = (cellWidth - 64) * 0.75 + 56 + 8;
  const numRows = Math.ceil(itemCount / numColumns);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isItemLoaded: response.isItemLoaded,
    itemCount: itemCount,
    loadMoreItems: response.loadMoreItems,
    children: ({
      onItemsRendered,
      ref
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_7__.FixedSizeGrid, {
      columnCount: numColumns,
      columnWidth: cellWidth,
      rowCount: numRows,
      rowHeight: cellHeight,
      className: styles.wrapper,
      innerElementType: "ul",
      height: height,
      width: width - 2,
      children: ({
        columnIndex,
        rowIndex,
        style
      }) => {
        var _item$kind, _item$tags;

        const index = rowIndex * numColumns + columnIndex;

        if (index >= view.length) {
          return null;
        }

        const item = view.get(index);
        const kind = (_item$kind = item.kind) !== null && _item$kind !== void 0 ? _item$kind : 'dashboard';
        const facade = {
          uid: item.uid,
          title: item.name,
          url: item.url,
          uri: item.url,
          type: kind === 'folder' ? _types__WEBPACK_IMPORTED_MODULE_5__.DashboardSearchItemType.DashFolder : _types__WEBPACK_IMPORTED_MODULE_5__.DashboardSearchItemType.DashDB,
          id: 666,
          // do not use me!
          isStarred: false,
          tags: (_item$tags = item.tags) !== null && _item$tags !== void 0 ? _item$tags : [],
          checked: selection ? selection(kind, item.uid) : false
        }; // The wrapper div is needed as the inner SearchItem has margin-bottom spacing
        // And without this wrapper there is no room for that margin

        return item ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
          style: style,
          className: styles.virtualizedGridItemWrapper,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_SearchCard__WEBPACK_IMPORTED_MODULE_4__.SearchCard, Object.assign({}, itemProps, {
            item: facade
          }), item.uid)
        }) : null;
      }
    })
  });
};

const getStyles = theme => ({
  virtualizedGridItemWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: 4px;
  `,
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;

    > ul {
      list-style: none;
    }
  `
});

/***/ }),

/***/ "./public/app/features/search/page/components/SearchResultsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsTable": () => (/* binding */ SearchResultsTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-table-virtual-3932e42729/0/cache/react-table-npm-7.7.0-95e9357cd2-a679edecc7.zip/node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-window-infinite-loader-virtual-05a095a122/0/cache/react-window-infinite-loader-npm-1.0.7-18a8e250f8-5c11a89582.zip/node_modules/react-window-infinite-loader/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Table_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Table/TableCell.tsx");
/* harmony import */ var _grafana_ui_src_components_Table_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Table/styles.ts");
/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/search/page/components/columns.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["key"],
      _excluded2 = ["key"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable react/jsx-no-undef */











const HEADER_HEIGHT = 36; // pixels

const SearchResultsTable = ({
  response,
  width,
  height,
  selection,
  selectionToggle,
  onTagSelected,
  onDatasourceChange
}) => {
  var _response$view$fields2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(_grafana_ui_src_components_Table_styles__WEBPACK_IMPORTED_MODULE_6__.getTableStyles);
  const memoizedData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _response$view;

    if (!(response !== null && response !== void 0 && (_response$view = response.view) !== null && _response$view !== void 0 && _response$view.dataFrame.fields.length)) {
      return [];
    } // as we only use this to fake the length of our data set for react-table we need to make sure we always return an array
    // filled with values at each index otherwise we'll end up trying to call accessRow for null|undefined value in
    // https://github.com/tannerlinsley/react-table/blob/7be2fc9d8b5e223fc998af88865ae86a88792fdb/src/hooks/useTable.js#L585


    return Array(response.totalRows).fill(0);
  }, [response]); // React-table column definitions

  const memoizedColumns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return (0,_columns__WEBPACK_IMPORTED_MODULE_7__.generateColumns)(response, width, selection, selectionToggle, styles, onTagSelected, onDatasourceChange);
  }, [response, width, styles, selection, selectionToggle, onTagSelected, onDatasourceChange]);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    columns: memoizedColumns,
    data: memoizedData
  }), [memoizedColumns, memoizedData]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_2__.useTable)(options, react_table__WEBPACK_IMPORTED_MODULE_2__.useAbsoluteLayout);
  const RenderRow = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(({
    index: rowIndex,
    style
  }) => {
    var _response$view$fields;

    const row = rows[rowIndex];
    prepareRow(row);
    const url = (_response$view$fields = response.view.fields.url) === null || _response$view$fields === void 0 ? void 0 : _response$view$fields.values.get(rowIndex);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", Object.assign({}, row.getRowProps({
      style
    }), {
      className: styles.rowContainer,
      children: row.cells.map((cell, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui_src_components_Table_TableCell__WEBPACK_IMPORTED_MODULE_5__.TableCell, {
          tableStyles: tableStyles,
          cell: cell,
          columnIndex: index,
          columnCount: row.cells.length,
          userProps: {
            href: url
          }
        }, index);
      })
    }));
  }, [rows, prepareRow, (_response$view$fields2 = response.view.fields.url) === null || _response$view$fields2 === void 0 ? void 0 : _response$view$fields2.values, styles.rowContainer, tableStyles]);

  if (!rows.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.noData,
      children: "No data"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", Object.assign({}, getTableProps(), {
    "aria-label": "Search result table",
    role: "table",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      children: headerGroups.map(headerGroup => {
        const _headerGroup$getHeade = headerGroup.getHeaderGroupProps(),
              {
          key
        } = _headerGroup$getHeade,
              headerGroupProps = _objectWithoutPropertiesLoose(_headerGroup$getHeade, _excluded);

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", Object.assign({}, headerGroupProps, {
          className: styles.headerRow,
          children: headerGroup.headers.map(column => {
            const _column$getHeaderProp = column.getHeaderProps(),
                  {
              key
            } = _column$getHeaderProp,
                  headerProps = _objectWithoutPropertiesLoose(_column$getHeaderProp, _excluded2);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", Object.assign({}, headerProps, {
              role: "columnheader",
              className: styles.headerCell,
              children: column.render('Header')
            }), key);
          })
        }), key);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", Object.assign({}, getTableBodyProps(), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_window_infinite_loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        isItemLoaded: response.isItemLoaded,
        itemCount: rows.length,
        loadMoreItems: response.loadMoreItems,
        children: ({
          onItemsRendered,
          ref
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_9__.FixedSizeList, {
          ref: ref,
          onItemsRendered: onItemsRendered,
          height: height - HEADER_HEIGHT,
          itemCount: rows.length,
          itemSize: tableStyles.rowHeight,
          width: "100%",
          style: {
            overflow: 'hidden auto'
          },
          children: RenderRow
        })
      })
    }))]
  }));
};

const getStyles = theme => {
  const rowHoverBg = theme.colors.emphasize(theme.colors.background.primary, 0.03);
  return {
    noData: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    `,
    table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
    `,
    cellIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
    `,
    cellWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border-right: none;
      &:hover {
        box-shadow: none;
      }
    `,
    headerCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-top: 2px;
      padding-left: 10px;
    `,
    headerRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.background.secondary};
      height: ${HEADER_HEIGHT}px;
      align-items: center;
    `,
    rowContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: row;
      &:hover {
        background-color: ${rowHoverBg};
      }

      &:not(:hover) div[role='cell'] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
    typeIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: 5px;
      margin-right: 9.5px;
      vertical-align: middle;
      display: inline-block;
      margin-bottom: ${theme.v1.spacing.xxs};
      fill: ${theme.colors.text.secondary};
    `,
    datasourceItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      span {
        &:hover {
          color: ${theme.colors.text.link};
        }
      }
    `,
    invalidDatasourceItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.error.main};
      text-decoration: line-through;
    `,
    typeText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
    `,
    locationItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      margin-right: 12px;
    `,
    checkboxHeader: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      // display: flex;
      // justify-content: flex-start;
    `,
    checkbox: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 5px;
    `,
    infoWrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      span {
        margin-right: 10px;
      }
    `,
    tagList: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      justify-content: flex-start;
      flex-wrap: nowrap;
    `
  };
};

/***/ }),

/***/ "./public/app/features/search/page/components/columns.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateColumns": () => (/* binding */ generateColumns)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/0/cache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Table/DefaultCell.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const TYPE_COLUMN_WIDTH = 130;
const DATASOURCE_COLUMN_WIDTH = 200;
const LOCATION_COLUMN_WIDTH = 200;
const TAGS_COLUMN_WIDTH = 200;
const generateColumns = (response, availableWidth, selection, selectionToggle, styles, onTagSelected, onDatasourceChange) => {
  var _response$view$dataFr;

  const columns = [];
  const access = response.view.fields;
  const uidField = access.uid;
  const kindField = access.kind;
  let width = 50;

  if (selection && selectionToggle) {
    width = 30;
    columns.push({
      id: `column-checkbox`,
      width,
      Header: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: styles.checkboxHeader,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
          onChange: e => {
            e.stopPropagation();
            e.preventDefault();
            alert('SELECT ALL!!!');
          }
        })
      }),
      Cell: p => {
        const uid = uidField.values.get(p.row.index);
        const kind = kindField ? kindField.values.get(p.row.index) : 'dashboard'; // HACK for now

        const selected = selection(kind, uid);
        const hasUID = uid != null; // Panels don't have UID! Likely should not be shown on pages with manage options

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", Object.assign({}, p.cellProps, {
          className: p.cellStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: styles.checkbox,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {
              disabled: !hasUID,
              value: selected && hasUID,
              onChange: e => {
                selectionToggle(kind, uid);
              }
            })
          })
        }));
      },
      field: uidField
    });
    availableWidth -= width;
  } // Name column


  width = Math.max(availableWidth * 0.2, 300);
  columns.push({
    Cell: p => {
      const name = access.name.values.get(p.row.index);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", Object.assign({}, p.cellProps, {
        href: p.userProps.href,
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(p.cellStyle, styles.cellWrapper),
        children: name
      }));
    },
    id: `column-name`,
    field: access.name,
    Header: 'Name',
    width
  });
  availableWidth -= width;
  width = TYPE_COLUMN_WIDTH;
  columns.push(makeTypeColumn(access.kind, access.panel_type, width, styles));
  availableWidth -= width; // Show datasources if we have any

  if (access.ds_uid && onDatasourceChange) {
    width = DATASOURCE_COLUMN_WIDTH;
    columns.push(makeDataSourceColumn(access.ds_uid, width, styles.typeIcon, styles.datasourceItem, styles.invalidDatasourceItem, onDatasourceChange));
    availableWidth -= width;
  } // Show tags if we have any


  if (access.tags) {
    width = TAGS_COLUMN_WIDTH;
    columns.push(makeTagsColumn(access.tags, width, styles.tagList, onTagSelected));
    availableWidth -= width;
  }

  width = Math.max(availableWidth, LOCATION_COLUMN_WIDTH);
  const meta = (_response$view$dataFr = response.view.dataFrame.meta) === null || _response$view$dataFr === void 0 ? void 0 : _response$view$dataFr.custom;

  if (meta !== null && meta !== void 0 && meta.locationInfo) {
    var _access$location2;

    columns.push({
      Cell: p => {
        var _access$location$valu, _access$location;

        const parts = ((_access$location$valu = (_access$location = access.location) === null || _access$location === void 0 ? void 0 : _access$location.values.get(p.row.index)) !== null && _access$location$valu !== void 0 ? _access$location$valu : '').split('/');
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", Object.assign({}, p.cellProps, {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(p.cellStyle, _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                padding-right: 10px;
              `),
          children: parts.map(p => {
            const info = meta.locationInfo[p];
            return info ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
              href: info.url,
              className: styles.locationItem,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                name: getIconForKind(info.kind)
              }), " ", info.name]
            }, p) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              children: p
            }, p);
          })
        }));
      },
      id: `column-location`,
      field: (_access$location2 = access.location) !== null && _access$location2 !== void 0 ? _access$location2 : access.url,
      Header: 'Location',
      width
    });
  }

  return columns;
};

function getIconForKind(v) {
  if (v === 'dashboard') {
    return 'apps';
  }

  if (v === 'folder') {
    return 'folder';
  }

  return 'question-circle';
}

function makeDataSourceColumn(field, width, iconClass, datasourceItemClass, invalidDatasourceItemClass, onDatasourceChange) {
  const srv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)();
  return {
    id: `column-datasource`,
    field,
    Header: 'Data source',
    Cell: p => {
      const dslist = field.values.get(p.row.index);

      if (!(dslist !== null && dslist !== void 0 && dslist.length)) {
        return null;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", Object.assign({}, p.cellProps, {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(p.cellStyle, datasourceItemClass),
        children: dslist.map((v, i) => {
          var _settings$meta, _settings$meta$info, _settings$meta$info$l;

          const settings = srv.getInstanceSettings(v);
          const icon = settings === null || settings === void 0 ? void 0 : (_settings$meta = settings.meta) === null || _settings$meta === void 0 ? void 0 : (_settings$meta$info = _settings$meta.info) === null || _settings$meta$info === void 0 ? void 0 : (_settings$meta$info$l = _settings$meta$info.logos) === null || _settings$meta$info$l === void 0 ? void 0 : _settings$meta$info$l.small;

          if (icon) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
              onClick: e => {
                e.stopPropagation();
                e.preventDefault();
                onDatasourceChange(settings.uid);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                src: icon,
                width: 14,
                height: 14,
                title: settings.type,
                className: iconClass
              }), settings.name]
            }, i);
          }

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: invalidDatasourceItemClass,
            children: v
          }, i);
        })
      }));
    },
    width
  };
}

function makeTypeColumn(kindField, typeField, width, styles) {
  return {
    Cell: _grafana_ui_src_components_Table_DefaultCell__WEBPACK_IMPORTED_MODULE_4__.DefaultCell,
    id: `column-type`,
    field: kindField !== null && kindField !== void 0 ? kindField : typeField,
    Header: 'Type',
    accessor: (row, i) => {
      var _kindField$values$get;

      const kind = (_kindField$values$get = kindField === null || kindField === void 0 ? void 0 : kindField.values.get(i)) !== null && _kindField$values$get !== void 0 ? _kindField$values$get : 'dashboard';
      let icon = 'public/img/icons/unicons/apps.svg';
      let txt = 'Dashboard';

      if (kind) {
        txt = kind;

        switch (txt) {
          case 'dashboard':
            txt = 'Dashboard';
            break;

          case 'folder':
            icon = 'public/img/icons/unicons/folder.svg';
            txt = 'Folder';
            break;

          case 'panel':
            icon = 'public/img/icons/unicons/graph-bar.svg';
            const type = typeField.values.get(i);

            if (type) {
              txt = type;
              const info = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.panels[txt];

              if (info !== null && info !== void 0 && info.name) {
                var _info$info;

                const v = (_info$info = info.info) === null || _info$info === void 0 ? void 0 : _info$info.logos.small;

                if (v && v.endsWith('.svg')) {
                  icon = v;
                }

                txt = info.name;
              }
            }

            break;
        }
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: styles.typeText,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_inlinesvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
          src: icon,
          width: 14,
          height: 14,
          title: txt,
          className: styles.typeIcon
        }), txt]
      });
    },
    width
  };
}

function makeTagsColumn(field, width, tagListClass, onTagSelected) {
  return {
    Cell: p => {
      var _TagList;

      const tags = field.values.get(p.row.index);

      if (tags) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", Object.assign({}, p.cellProps, {
          className: p.cellStyle,
          children: _TagList || (_TagList = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TagList, {
            className: tagListClass,
            tags: tags,
            onClick: onTagSelected
          }))
        }));
      }

      return null;
    },
    id: `column-tags`,
    field: field,
    Header: 'Tags',
    width
  };
}

/***/ }),

/***/ "./public/app/features/search/page/selection.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newSearchSelection": () => (/* binding */ newSearchSelection),
/* harmony export */   "updateSearchSelection": () => (/* binding */ updateSearchSelection)
/* harmony export */ });
function newSearchSelection() {
  // the check is called often, on potentially large (all) results so using Map/Set is better than simple array
  const items = new Map();

  const isSelected = (kind, uid) => {
    var _items$get;

    return Boolean((_items$get = items.get(kind)) === null || _items$get === void 0 ? void 0 : _items$get.has(uid));
  };

  return {
    items,
    isSelected
  };
}
function updateSearchSelection(old, selected, kind, uids) {
  const items = old.items; // mutate! :/

  if (uids.length) {
    const k = items.get(kind);

    if (k) {
      for (const uid of uids) {
        if (selected) {
          k.add(uid);
        } else {
          k.delete(uid);
        }
      }

      if (k.size < 1) {
        items.delete(kind);
      }
    } else if (selected) {
      items.set(kind, new Set(uids));
    }
  }

  return {
    items,
    isSelected: (kind, uid) => {
      var _items$get2;

      return Boolean((_items$get2 = items.get(kind)) === null || _items$get2 === void 0 ? void 0 : _items$get2.has(uid));
    }
  };
}

/***/ }),

/***/ "./public/app/features/search/service/bluge.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlugeSearcher": () => (/* binding */ BlugeSearcher),
/* harmony export */   "doSearchQuery": () => (/* binding */ doSearchQuery)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_plugins_datasource_grafana_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");




class BlugeSearcher {
  async search(query) {
    var _query$facet;

    if ((_query$facet = query.facet) !== null && _query$facet !== void 0 && _query$facet.length) {
      throw 'facets not supported!';
    }

    return doSearchQuery(query);
  }

  async list(location) {
    return doSearchQuery({
      query: `list:${location !== null && location !== void 0 ? location : ''}`
    });
  }

  async tags(query) {
    var _query$query;

    const ds = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().get('-- Grafana --');
    const target = Object.assign({}, query, {
      refId: 'A',
      queryType: app_plugins_datasource_grafana_types__WEBPACK_IMPORTED_MODULE_2__.GrafanaQueryType.Search,
      query: (_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '*',
      facet: [{
        field: 'tag'
      }],
      limit: 1 // 0 would be better, but is ignored by the backend

    });
    const data = (await (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(ds.query({
      targets: [target]
    }))).data;

    for (const frame of data) {
      if (frame.fields[0].name === 'tag') {
        return getTermCountsFrom(frame);
      }
    }

    return [];
  }

}
const firstPageSize = 50;
const nextPageSizes = 100;
async function doSearchQuery(query) {
  var _query$query2, _ref, _rsp$data, _first$meta, _meta$count;

  const ds = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().get('-- Grafana --');
  const target = Object.assign({}, query, {
    refId: 'A',
    queryType: app_plugins_datasource_grafana_types__WEBPACK_IMPORTED_MODULE_2__.GrafanaQueryType.Search,
    query: (_query$query2 = query.query) !== null && _query$query2 !== void 0 ? _query$query2 : '*',
    limit: firstPageSize
  });
  const rsp = await (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(ds.query({
    targets: [target]
  }));
  const first = (_ref = (_rsp$data = rsp.data) === null || _rsp$data === void 0 ? void 0 : _rsp$data[0]) !== null && _ref !== void 0 ? _ref : {
    fields: [],
    length: 0
  };

  for (const field of first.fields) {
    field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDisplayProcessor)({
      field,
      theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.theme2
    });
  }

  const meta = (_first$meta = first.meta) === null || _first$meta === void 0 ? void 0 : _first$meta.custom;
  const view = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(first);
  return {
    totalRows: (_meta$count = meta.count) !== null && _meta$count !== void 0 ? _meta$count : first.length,
    view,
    loadMoreItems: async (startIndex, stopIndex) => {
      var _await$lastValueFrom$, _frame$meta;

      console.log('LOAD NEXT PAGE', {
        startIndex,
        stopIndex,
        length: view.dataFrame.length
      });
      const from = view.dataFrame.length;
      const limit = stopIndex - from;

      if (limit < 0) {
        return;
      }

      const frame = (_await$lastValueFrom$ = (await (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(ds.query({
        targets: [Object.assign({}, target, {
          refId: 'Page',
          facet: undefined,
          from,
          limit: Math.max(limit, nextPageSizes)
        })]
      }))).data) === null || _await$lastValueFrom$ === void 0 ? void 0 : _await$lastValueFrom$[0];

      if (!frame) {
        console.log('no results', frame);
        return;
      }

      if (frame.fields.length !== view.dataFrame.fields.length) {
        console.log('invalid shape', frame, view.dataFrame);
        return;
      } // Append the raw values to the same array buffer


      const length = frame.length + view.dataFrame.length;

      for (let i = 0; i < frame.fields.length; i++) {
        const values = view.dataFrame.fields[i].values.buffer;
        values.push(...frame.fields[i].values.toArray());
      }

      view.dataFrame.length = length; // Add all the location lookup info

      const submeta = (_frame$meta = frame.meta) === null || _frame$meta === void 0 ? void 0 : _frame$meta.custom;

      if (submeta !== null && submeta !== void 0 && submeta.locationInfo && meta) {
        for (const [key, value] of Object.entries(submeta.locationInfo)) {
          meta.locationInfo[key] = value;
        }
      }

      return;
    },
    isItemLoaded: index => {
      return index < view.dataFrame.length;
    }
  };
}

function getTermCountsFrom(frame) {
  const keys = frame.fields[0].values;
  const vals = frame.fields[1].values;
  const counts = [];

  for (let i = 0; i < frame.length; i++) {
    counts.push({
      term: keys.get(i),
      count: vals.get(i)
    });
  }

  return counts;
}

/***/ }),

/***/ "./public/app/features/search/service/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGrafanaSearcher": () => (/* reexport safe */ _searcher__WEBPACK_IMPORTED_MODULE_1__.getGrafanaSearcher)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/search/service/types.ts");
/* harmony import */ var _searcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/search/service/searcher.ts");



/***/ }),

/***/ "./public/app/features/search/service/searcher.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGrafanaSearcher": () => (/* binding */ getGrafanaSearcher)
/* harmony export */ });
/* harmony import */ var _bluge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/search/service/bluge.ts");

let searcher = undefined;
function getGrafanaSearcher() {
  if (!searcher) {
    searcher = new _bluge__WEBPACK_IMPORTED_MODULE_0__.BlugeSearcher();
  }

  return searcher;
}

/***/ }),

/***/ "./public/app/features/search/service/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./public/app/plugins/datasource/grafana/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaAnnotationType": () => (/* binding */ GrafanaAnnotationType),
/* harmony export */   "GrafanaQueryType": () => (/* binding */ GrafanaQueryType),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
//----------------------------------------------
// Query
//----------------------------------------------
let GrafanaQueryType;

(function (GrafanaQueryType) {
  GrafanaQueryType["LiveMeasurements"] = "measurements";
  GrafanaQueryType["Annotations"] = "annotations";
  GrafanaQueryType["RandomWalk"] = "randomWalk";
  GrafanaQueryType["List"] = "list";
  GrafanaQueryType["Read"] = "read";
  GrafanaQueryType["Search"] = "search";
})(GrafanaQueryType || (GrafanaQueryType = {}));

// NOTE, query will have more field!!!
const defaultQuery = {
  refId: 'A',
  queryType: GrafanaQueryType.RandomWalk
}; //----------------------------------------------
// Annotations
//----------------------------------------------

let GrafanaAnnotationType;

(function (GrafanaAnnotationType) {
  GrafanaAnnotationType["Dashboard"] = "dashboard";
  GrafanaAnnotationType["Tags"] = "tags";
})(GrafanaAnnotationType || (GrafanaAnnotationType = {}));

/***/ }),

/***/ "./.yarn/__virtual__/react-window-infinite-loader-virtual-05a095a122/0/cache/react-window-infinite-loader-npm-1.0.7-18a8e250f8-5c11a89582.zip/node_modules/react-window-infinite-loader/dist/index.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function isRangeVisible(_ref) {
  var lastRenderedStartIndex = _ref.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref.lastRenderedStopIndex,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}

function scanForUnloadedRanges(_ref) {
  var isItemLoaded = _ref.isItemLoaded,
      itemCount = _ref.itemCount,
      minimumBatchSize = _ref.minimumBatchSize,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  var unloadedRanges = [];

  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var _index = startIndex; _index <= stopIndex; _index++) {
    var loaded = isItemLoaded(_index);

    if (!loaded) {
      rangeStopIndex = _index;
      if (rangeStartIndex === null) {
        rangeStartIndex = _index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push(rangeStartIndex, rangeStopIndex);

      rangeStartIndex = rangeStopIndex = null;
    }
  }

  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.
  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), itemCount - 1);

    for (var _index2 = rangeStopIndex + 1; _index2 <= potentialStopIndex; _index2++) {
      if (!isItemLoaded(_index2)) {
        rangeStopIndex = _index2;
      } else {
        break;
      }
    }

    unloadedRanges.push(rangeStartIndex, rangeStopIndex);
  }

  // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.
  if (unloadedRanges.length) {
    while (unloadedRanges[1] - unloadedRanges[0] + 1 < minimumBatchSize && unloadedRanges[0] > 0) {
      var _index3 = unloadedRanges[0] - 1;

      if (!isItemLoaded(_index3)) {
        unloadedRanges[0] = _index3;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var InfiniteLoader = function (_PureComponent) {
  inherits(InfiniteLoader, _PureComponent);

  function InfiniteLoader() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, InfiniteLoader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = InfiniteLoader.__proto__ || Object.getPrototypeOf(InfiniteLoader)).call.apply(_ref, [this].concat(args))), _this), _this._lastRenderedStartIndex = -1, _this._lastRenderedStopIndex = -1, _this._memoizedUnloadedRanges = [], _this._onItemsRendered = function (_ref2) {
      var visibleStartIndex = _ref2.visibleStartIndex,
          visibleStopIndex = _ref2.visibleStopIndex;

      if (true) {
        if (!isInteger(visibleStartIndex) || !isInteger(visibleStopIndex)) {
          console.warn('Invalid onItemsRendered signature; please refer to InfiniteLoader documentation.');
        }

        if (typeof _this.props.loadMoreRows === 'function') {
          console.warn('InfiniteLoader "loadMoreRows" prop has been renamed to "loadMoreItems".');
        }
      }

      _this._lastRenderedStartIndex = visibleStartIndex;
      _this._lastRenderedStopIndex = visibleStopIndex;

      _this._ensureRowsLoaded(visibleStartIndex, visibleStopIndex);
    }, _this._setRef = function (listRef) {
      _this._listRef = listRef;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(InfiniteLoader, [{
    key: 'resetloadMoreItemsCache',
    value: function resetloadMoreItemsCache() {
      var autoReload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._memoizedUnloadedRanges = [];

      if (autoReload) {
        this._ensureRowsLoaded(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (true) {
        if (this._listRef == null) {
          console.warn('Invalid list ref; please refer to InfiniteLoader documentation.');
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return children({
        onItemsRendered: this._onItemsRendered,
        ref: this._setRef
      });
    }
  }, {
    key: '_ensureRowsLoaded',
    value: function _ensureRowsLoaded(startIndex, stopIndex) {
      var _props = this.props,
          isItemLoaded = _props.isItemLoaded,
          itemCount = _props.itemCount,
          _props$minimumBatchSi = _props.minimumBatchSize,
          minimumBatchSize = _props$minimumBatchSi === undefined ? 10 : _props$minimumBatchSi,
          _props$threshold = _props.threshold,
          threshold = _props$threshold === undefined ? 15 : _props$threshold;


      var unloadedRanges = scanForUnloadedRanges({
        isItemLoaded: isItemLoaded,
        itemCount: itemCount,
        minimumBatchSize: minimumBatchSize,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(itemCount - 1, stopIndex + threshold)
      });

      // Avoid calling load-rows unless range has changed.
      // This shouldn't be strictly necessary, but is maybe nice to do.
      if (this._memoizedUnloadedRanges.length !== unloadedRanges.length || this._memoizedUnloadedRanges.some(function (startOrStop, index) {
        return unloadedRanges[index] !== startOrStop;
      })) {
        this._memoizedUnloadedRanges = unloadedRanges;
        this._loadUnloadedRanges(unloadedRanges);
      }
    }
  }, {
    key: '_loadUnloadedRanges',
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      // loadMoreRows was renamed to loadMoreItems in v1.0.3; will be removed in v2.0
      var loadMoreItems = this.props.loadMoreItems || this.props.loadMoreRows;

      var _loop = function _loop(i) {
        var startIndex = unloadedRanges[i];
        var stopIndex = unloadedRanges[i + 1];
        var promise = loadMoreItems(startIndex, stopIndex);
        if (promise != null) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: startIndex,
              stopIndex: stopIndex
            })) {
              // Handle an unmount while promises are still in flight.
              if (_this2._listRef == null) {
                return;
              }

              // Resize cached row sizes for VariableSizeList,
              // otherwise just re-render the list.
              if (typeof _this2._listRef.resetAfterIndex === 'function') {
                _this2._listRef.resetAfterIndex(startIndex, true);
              } else {
                // HACK reset temporarily cached item styles to force PureComponent to re-render.
                // This is pretty gross, but I'm okay with it for now.
                // Don't judge me.
                if (typeof _this2._listRef._getItemStyleCache === 'function') {
                  _this2._listRef._getItemStyleCache(-1);
                }
                _this2._listRef.forceUpdate();
              }
            }
          });
        }
      };

      for (var i = 0; i < unloadedRanges.length; i += 2) {
        _loop(i);
      }
    }
  }]);
  return InfiniteLoader;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteLoader);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFVBQVUsSUFBcUM7QUFDL0M7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyxDQUFDLGdEQUFhOztBQUVmLGlFQUFlLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlYXJjaC9wYWdlL1NlYXJjaFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlYXJjaC9wYWdlL2NvbXBvbmVudHMvQWN0aW9uUm93LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZWFyY2gvcGFnZS9jb21wb25lbnRzL0NvbmZpcm1EZWxldGVNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3BhZ2UvY29tcG9uZW50cy9Gb2xkZXJTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9zZWFyY2gvcGFnZS9jb21wb25lbnRzL0ZvbGRlclZpZXcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlYXJjaC9wYWdlL2NvbXBvbmVudHMvTWFuYWdlQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3BhZ2UvY29tcG9uZW50cy9Nb3ZlVG9Gb2xkZXJNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3BhZ2UvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzR3JpZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3BhZ2UvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlYXJjaC9wYWdlL2NvbXBvbmVudHMvY29sdW1ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2VhcmNoL3BhZ2Uvc2VsZWN0aW9uLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlYXJjaC9zZXJ2aWNlL2JsdWdlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlYXJjaC9zZXJ2aWNlL2luZGV4LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3NlYXJjaC9zZXJ2aWNlL3NlYXJjaGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFmYW5hL3R5cGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC13aW5kb3ctaW5maW5pdGUtbG9hZGVyLXZpcnR1YWwtMDVhMDk1YTEyMi8wL2NhY2hlL3JlYWN0LXdpbmRvdy1pbmZpbml0ZS1sb2FkZXItbnBtLTEuMC43LTE4YThlMjUwZjgtNWMxMWE4OTU4Mi56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXdpbmRvdy1pbmZpbml0ZS1sb2FkZXIvZGlzdC9pbmRleC5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFzeW5jLCB1c2VEZWJvdW5jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5pbXBvcnQgQXV0b1NpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBOYXZNb2RlbEl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW5wdXQsIHVzZVN0eWxlczIsIFNwaW5uZXIsIElubGluZVN3aXRjaCwgSW5saW5lRmllbGRSb3csIElubGluZUZpZWxkLCBCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBUZXJtQ291bnQgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdGaWx0ZXInO1xuXG5pbXBvcnQgeyBQcmV2aWV3c1N5c3RlbVJlcXVpcmVtZW50cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJldmlld3NTeXN0ZW1SZXF1aXJlbWVudHMnO1xuaW1wb3J0IHsgdXNlU2VhcmNoUXVlcnkgfSBmcm9tICcuLi9ob29rcy91c2VTZWFyY2hRdWVyeSc7XG5pbXBvcnQgeyBnZXRHcmFmYW5hU2VhcmNoZXIsIFNlYXJjaFF1ZXJ5IH0gZnJvbSAnLi4vc2VydmljZSc7XG5pbXBvcnQgeyBTZWFyY2hMYXlvdXQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IEFjdGlvblJvdywgZ2V0VmFsaWRRdWVyeUxheW91dCB9IGZyb20gJy4vY29tcG9uZW50cy9BY3Rpb25Sb3cnO1xuaW1wb3J0IHsgRm9sZGVyVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy9Gb2xkZXJWaWV3JztcbmltcG9ydCB7IE1hbmFnZUFjdGlvbnMgfSBmcm9tICcuL2NvbXBvbmVudHMvTWFuYWdlQWN0aW9ucyc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzR3JpZCB9IGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzR3JpZCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzVGFibGUsIFNlYXJjaFJlc3VsdHNQcm9wcyB9IGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzVGFibGUnO1xuaW1wb3J0IHsgbmV3U2VhcmNoU2VsZWN0aW9uLCB1cGRhdGVTZWFyY2hTZWxlY3Rpb24gfSBmcm9tICcuL3NlbGVjdGlvbic7XG5cbmNvbnN0IG5vZGU6IE5hdk1vZGVsSXRlbSA9IHtcbiAgaWQ6ICdzZWFyY2gnLFxuICB0ZXh0OiAnU2VhcmNoIHBsYXlncm91bmQnLFxuICBzdWJUaXRsZTogJ1RoZSBib2R5IGJlbG93IHdpbGwgZXZlbnR1YWxseSBsaXZlIGluc2lkZSBleGlzdGluZyBVSSBsYXlvdXRzJyxcbiAgaWNvbjogJ2Rhc2hib2FyZCcsXG4gIHVybDogJ3NlYXJjaCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hQYWdlKCkge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgcXVlcnksIG9uUXVlcnlDaGFuZ2UsIG9uVGFnRmlsdGVyQ2hhbmdlLCBvbkRhdGFzb3VyY2VDaGFuZ2UsIG9uU29ydENoYW5nZSwgb25MYXlvdXRDaGFuZ2UgfSA9IHVzZVNlYXJjaFF1ZXJ5KFxuICAgIHt9XG4gICk7XG4gIGNvbnN0IFtzaG93TWFuYWdlLCBzZXRTaG93TWFuYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gZ3JpZCB2cyBsaXN0IHZpZXdcblxuICBjb25zdCBbc2VhcmNoU2VsZWN0aW9uLCBzZXRTZWFyY2hTZWxlY3Rpb25dID0gdXNlU3RhdGUobmV3U2VhcmNoU2VsZWN0aW9uKCkpO1xuICBjb25zdCBsYXlvdXQgPSBnZXRWYWxpZFF1ZXJ5TGF5b3V0KHF1ZXJ5KTtcbiAgY29uc3QgaXNGb2xkZXJzID0gbGF5b3V0ID09PSBTZWFyY2hMYXlvdXQuRm9sZGVycztcblxuICBjb25zdCByZXN1bHRzID0gdXNlQXN5bmMoKCkgPT4ge1xuICAgIGxldCBxc3RyID0gcXVlcnkucXVlcnkgYXMgc3RyaW5nO1xuICAgIGlmICghcXN0cj8ubGVuZ3RoKSB7XG4gICAgICBxc3RyID0gJyonO1xuICAgIH1cbiAgICBjb25zdCBxOiBTZWFyY2hRdWVyeSA9IHtcbiAgICAgIHF1ZXJ5OiBxc3RyLFxuICAgICAgdGFnczogcXVlcnkudGFnIGFzIHN0cmluZ1tdLFxuICAgICAgZHNfdWlkOiBxdWVyeS5kYXRhc291cmNlIGFzIHN0cmluZyxcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdETyBRVUVSWScsIHEpO1xuICAgIHJldHVybiBnZXRHcmFmYW5hU2VhcmNoZXIoKS5zZWFyY2gocSk7XG4gIH0sIFtxdWVyeSwgbGF5b3V0XSk7XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBvblNlYXJjaFF1ZXJ5Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElucHV0VmFsdWUoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICB1c2VEZWJvdW5jZSgoKSA9PiBvblF1ZXJ5Q2hhbmdlKGlucHV0VmFsdWUpLCAyMDAsIFtpbnB1dFZhbHVlXSk7XG5cbiAgaWYgKCFjb25maWcuZmVhdHVyZVRvZ2dsZXMucGFuZWxUaXRsZVNlYXJjaCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVuc3VwcG9ydGVkfT5VbnN1cHBvcnRlZDwvZGl2PjtcbiAgfVxuXG4gIC8vIFRoaXMgZ2V0cyB0aGUgcG9zc2libGUgdGFncyBmcm9tIHdpdGhpbiB0aGUgcXVlcnkgcmVzdWx0c1xuICBjb25zdCBnZXRUYWdPcHRpb25zID0gKCk6IFByb21pc2U8VGVybUNvdW50W10+ID0+IHtcbiAgICBjb25zdCBxOiBTZWFyY2hRdWVyeSA9IHtcbiAgICAgIHF1ZXJ5OiBxdWVyeS5xdWVyeSA/PyAnKicsXG4gICAgICB0YWdzOiBxdWVyeS50YWcsXG4gICAgICBkc191aWQ6IHF1ZXJ5LmRhdGFzb3VyY2UsXG4gICAgfTtcbiAgICByZXR1cm4gZ2V0R3JhZmFuYVNlYXJjaGVyKCkudGFncyhxKTtcbiAgfTtcblxuICBjb25zdCBvblRhZ1NlbGVjdGVkID0gKHRhZzogc3RyaW5nKSA9PiB7XG4gICAgb25UYWdGaWx0ZXJDaGFuZ2UoWy4uLm5ldyBTZXQocXVlcnkudGFnIGFzIHN0cmluZ1tdKS5hZGQodGFnKV0pO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGlvbiA9IChraW5kOiBzdHJpbmcsIHVpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IHNlYXJjaFNlbGVjdGlvbi5pc1NlbGVjdGVkKGtpbmQsIHVpZCk7XG4gICAgaWYgKGtpbmQgPT09ICdmb2xkZXInKSB7XG4gICAgICAvLyA/Pz8gYWxzbyBzZWxlY3QgYWxsIGNoaWxkcmVuP1xuICAgIH1cbiAgICBzZXRTZWFyY2hTZWxlY3Rpb24odXBkYXRlU2VhcmNoU2VsZWN0aW9uKHNlYXJjaFNlbGVjdGlvbiwgIWN1cnJlbnQsIGtpbmQsIFt1aWRdKSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUmVzdWx0cyA9ICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdHMudmFsdWU7XG5cbiAgICBpZiAoKCF2YWx1ZSB8fCAhdmFsdWUudG90YWxSb3dzKSAmJiAhaXNGb2xkZXJzKSB7XG4gICAgICBpZiAocmVzdWx0cy5sb2FkaW5nICYmICF2YWx1ZSkge1xuICAgICAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9SZXN1bHRzfT5cbiAgICAgICAgICA8ZGl2Pk5vIHJlc3VsdHMgZm91bmQgZm9yIHlvdXIgcXVlcnkuPC9kaXY+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChxdWVyeS5xdWVyeSkge1xuICAgICAgICAgICAgICAgIG9uUXVlcnlDaGFuZ2UoJycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChxdWVyeS50YWc/Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG9uVGFnRmlsdGVyQ2hhbmdlKFtdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocXVlcnkuZGF0YXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIG9uRGF0YXNvdXJjZUNoYW5nZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFJlbW92ZSBzZWFyY2ggY29uc3RyYWludHNcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHNob3dNYW5hZ2UgPyBzZWFyY2hTZWxlY3Rpb24uaXNTZWxlY3RlZCA6IHVuZGVmaW5lZDtcbiAgICBpZiAobGF5b3V0ID09PSBTZWFyY2hMYXlvdXQuRm9sZGVycykge1xuICAgICAgcmV0dXJuIDxGb2xkZXJWaWV3IHNlbGVjdGlvbj17c2VsZWN0aW9ufSBzZWxlY3Rpb25Ub2dnbGU9e3RvZ2dsZVNlbGVjdGlvbn0gb25UYWdTZWxlY3RlZD17b25UYWdTZWxlY3RlZH0gLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIDxBdXRvU2l6ZXI+XG4gICAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcHM6IFNlYXJjaFJlc3VsdHNQcm9wcyA9IHtcbiAgICAgICAgICAgICAgcmVzcG9uc2U6IHZhbHVlISxcbiAgICAgICAgICAgICAgc2VsZWN0aW9uLFxuICAgICAgICAgICAgICBzZWxlY3Rpb25Ub2dnbGU6IHRvZ2dsZVNlbGVjdGlvbixcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgb25UYWdTZWxlY3RlZDogb25UYWdTZWxlY3RlZCxcbiAgICAgICAgICAgICAgb25EYXRhc291cmNlQ2hhbmdlOiBxdWVyeS5kYXRhc291cmNlID8gb25EYXRhc291cmNlQ2hhbmdlIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gU2VhcmNoTGF5b3V0LkdyaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxTZWFyY2hSZXN1bHRzR3JpZCB7Li4ucHJvcHN9IC8+O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gPFNlYXJjaFJlc3VsdHNUYWJsZSB7Li4ucHJvcHN9IC8+O1xuICAgICAgICAgIH19XG4gICAgICAgIDwvQXV0b1NpemVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXt7IG5vZGU6IG5vZGUsIG1haW46IG5vZGUgfX0+XG4gICAgICA8UGFnZS5Db250ZW50c1xuICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlYXJjaFF1ZXJ5Q2hhbmdlfVxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIHNwZWxsQ2hlY2s9e2ZhbHNlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBkYXNoYm9hcmRzIGFuZCBwYW5lbHNcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaElucHV0fVxuICAgICAgICAgIHN1ZmZpeD17cmVzdWx0cy5sb2FkaW5nID8gPFNwaW5uZXIgLz4gOiBudWxsfVxuICAgICAgICAvPlxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiU2hvdyBtYW5hZ2Ugb3B0aW9uc1wiPlxuICAgICAgICAgICAgPElubGluZVN3aXRjaCB2YWx1ZT17c2hvd01hbmFnZX0gb25DaGFuZ2U9eygpID0+IHNldFNob3dNYW5hZ2UoIXNob3dNYW5hZ2UpfSAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgICAge0Jvb2xlYW4oc2VhcmNoU2VsZWN0aW9uLml0ZW1zLnNpemUgPiAwKSA/IChcbiAgICAgICAgICA8TWFuYWdlQWN0aW9ucyBpdGVtcz17c2VhcmNoU2VsZWN0aW9uLml0ZW1zfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxBY3Rpb25Sb3dcbiAgICAgICAgICAgIG9uTGF5b3V0Q2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICBpZiAodiA9PT0gU2VhcmNoTGF5b3V0LkZvbGRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnkucXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgIG9uUXVlcnlDaGFuZ2UoJycpOyAvLyBwYXJlbnQgd2lsbCBjbGVhciB0aGUgc29ydFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkxheW91dENoYW5nZSh2KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblNvcnRDaGFuZ2U9e29uU29ydENoYW5nZX1cbiAgICAgICAgICAgIG9uVGFnRmlsdGVyQ2hhbmdlPXtvblRhZ0ZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgIGdldFRhZ09wdGlvbnM9e2dldFRhZ09wdGlvbnN9XG4gICAgICAgICAgICBvbkRhdGFzb3VyY2VDaGFuZ2U9e29uRGF0YXNvdXJjZUNoYW5nZX1cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtsYXlvdXQgPT09IFNlYXJjaExheW91dC5HcmlkICYmIChcbiAgICAgICAgICA8UHJldmlld3NTeXN0ZW1SZXF1aXJlbWVudHNcbiAgICAgICAgICAgIGJvdHRvbVNwYWNpbmc9ezN9XG4gICAgICAgICAgICBzaG93UHJldmlld3M9e3RydWV9XG4gICAgICAgICAgICBvblJlbW92ZT17KCkgPT4gb25MYXlvdXRDaGFuZ2UoU2VhcmNoTGF5b3V0Lkxpc3QpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtyZW5kZXJSZXN1bHRzKCl9XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHNlYXJjaElucHV0OiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBgLFxuICB1bnN1cHBvcnRlZDogY3NzYFxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIGAsXG4gIG5vUmVzdWx0czogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUudjEuc3BhY2luZy5tZH07XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS52MS5jb2xvcnMuYmcyfTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS52MS5zcGFjaW5nLm1kfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBSYWRpb0J1dHRvbkdyb3VwLCB1c2VTdHlsZXMyLCBDaGVja2JveCwgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU29ydFBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L1NvcnRQaWNrZXInO1xuaW1wb3J0IHsgVGFnRmlsdGVyLCBUZXJtQ291bnQgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RhZ0ZpbHRlci9UYWdGaWx0ZXInO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRRdWVyeSwgU2VhcmNoTGF5b3V0IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbGF5b3V0T3B0aW9ucyA9IFtcbiAgeyB2YWx1ZTogU2VhcmNoTGF5b3V0LkZvbGRlcnMsIGljb246ICdmb2xkZXInLCBhcmlhTGFiZWw6ICdWaWV3IGJ5IGZvbGRlcnMnIH0sXG4gIHsgdmFsdWU6IFNlYXJjaExheW91dC5MaXN0LCBpY29uOiAnbGlzdC11bCcsIGFyaWFMYWJlbDogJ1ZpZXcgYXMgbGlzdCcgfSxcbl07XG5cbmlmIChjb25maWcuZmVhdHVyZVRvZ2dsZXMuZGFzaGJvYXJkUHJldmlld3MpIHtcbiAgbGF5b3V0T3B0aW9ucy5wdXNoKHsgdmFsdWU6IFNlYXJjaExheW91dC5HcmlkLCBpY29uOiAnYXBwcycsIGFyaWFMYWJlbDogJ0dyaWQgdmlldycgfSk7XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uTGF5b3V0Q2hhbmdlOiAobGF5b3V0OiBTZWFyY2hMYXlvdXQpID0+IHZvaWQ7XG4gIG9uU29ydENoYW5nZTogKHZhbHVlOiBTZWxlY3RhYmxlVmFsdWUpID0+IHZvaWQ7XG4gIG9uU3RhcnJlZEZpbHRlckNoYW5nZT86IChldmVudDogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xuICBvblRhZ0ZpbHRlckNoYW5nZTogKHRhZ3M6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICBnZXRUYWdPcHRpb25zOiAoKSA9PiBQcm9taXNlPFRlcm1Db3VudFtdPjtcbiAgb25EYXRhc291cmNlQ2hhbmdlOiAoZHM/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBEYXNoYm9hcmRRdWVyeTtcbiAgc2hvd1N0YXJyZWRGaWx0ZXI/OiBib29sZWFuO1xuICBoaWRlTGF5b3V0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkUXVlcnlMYXlvdXQocTogRGFzaGJvYXJkUXVlcnkpOiBTZWFyY2hMYXlvdXQge1xuICBjb25zdCBsYXlvdXQgPSBxLmxheW91dCA/PyBTZWFyY2hMYXlvdXQuRm9sZGVycztcblxuICAvLyBGb2xkZXJzIGlzIG5vdCB2YWxpZCB3aGVuIGEgcXVlcnkgZXhpc3RzXG4gIGlmIChsYXlvdXQgPT09IFNlYXJjaExheW91dC5Gb2xkZXJzKSB7XG4gICAgaWYgKHEucXVlcnkgfHwgcS5zb3J0KSB7XG4gICAgICByZXR1cm4gU2VhcmNoTGF5b3V0Lkxpc3Q7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxheW91dCA9PT0gU2VhcmNoTGF5b3V0LkdyaWQgJiYgIWNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5kYXNoYm9hcmRQcmV2aWV3cykge1xuICAgIHJldHVybiBTZWFyY2hMYXlvdXQuTGlzdDtcbiAgfVxuICByZXR1cm4gbGF5b3V0O1xufVxuXG5leHBvcnQgY29uc3QgQWN0aW9uUm93OiBGQzxQcm9wcz4gPSAoe1xuICBvbkxheW91dENoYW5nZSxcbiAgb25Tb3J0Q2hhbmdlLFxuICBvblN0YXJyZWRGaWx0ZXJDaGFuZ2UgPSAoKSA9PiB7fSxcbiAgb25UYWdGaWx0ZXJDaGFuZ2UsXG4gIGdldFRhZ09wdGlvbnMsXG4gIG9uRGF0YXNvdXJjZUNoYW5nZSxcbiAgcXVlcnksXG4gIHNob3dTdGFycmVkRmlsdGVyLFxuICBoaWRlTGF5b3V0LFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvblJvd30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd0NvbnRhaW5lcn0+XG4gICAgICAgIDxIb3Jpem9udGFsR3JvdXAgc3BhY2luZz1cIm1kXCIgd2lkdGg9XCJhdXRvXCI+XG4gICAgICAgICAgeyFoaWRlTGF5b3V0ICYmIChcbiAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwIG9wdGlvbnM9e2xheW91dE9wdGlvbnN9IG9uQ2hhbmdlPXtvbkxheW91dENoYW5nZX0gdmFsdWU9e2dldFZhbGlkUXVlcnlMYXlvdXQocXVlcnkpfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFNvcnRQaWNrZXIgb25DaGFuZ2U9e29uU29ydENoYW5nZX0gdmFsdWU9e3F1ZXJ5LnNvcnQ/LnZhbHVlfSAvPlxuICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgIDwvZGl2PlxuICAgICAgPEhvcml6b250YWxHcm91cCBzcGFjaW5nPVwibWRcIiB3aWR0aD1cImF1dG9cIj5cbiAgICAgICAge3Nob3dTdGFycmVkRmlsdGVyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94V3JhcHBlcn0+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJGaWx0ZXIgYnkgc3RhcnJlZFwiIG9uQ2hhbmdlPXtvblN0YXJyZWRGaWx0ZXJDaGFuZ2V9IHZhbHVlPXtxdWVyeS5zdGFycmVkfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7cXVlcnkuZGF0YXNvdXJjZSAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiBpY29uPVwidGltZXNcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gb25EYXRhc291cmNlQ2hhbmdlKHVuZGVmaW5lZCl9PlxuICAgICAgICAgICAgRGF0YXNvdXJjZToge3F1ZXJ5LmRhdGFzb3VyY2V9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIDxUYWdGaWx0ZXIgaXNDbGVhcmFibGUgdGFncz17cXVlcnkudGFnfSB0YWdPcHRpb25zPXtnZXRUYWdPcHRpb25zfSBvbkNoYW5nZT17b25UYWdGaWx0ZXJDaGFuZ2V9IC8+XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFjdGlvblJvdy5kaXNwbGF5TmFtZSA9ICdBY3Rpb25Sb3cnO1xuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7dGhlbWUudjEuYnJlYWtwb2ludHMubWR9KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogJHt0aGVtZS52MS5zcGFjaW5nLmxnfSAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHJvd0NvbnRhaW5lcjogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnYxLnNwYWNpbmcubWR9O1xuICAgIGAsXG4gICAgY2hlY2tib3hXcmFwcGVyOiBjc3NgXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IENvbmZpcm1Nb2RhbCwgc3R5bGVzRmFjdG9yeSwgdXNlVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBkZWxldGVGb2xkZXJzQW5kRGFzaGJvYXJkcyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9tYW5hZ2UtZGFzaGJvYXJkcy9zdGF0ZS9hY3Rpb25zJztcblxuaW1wb3J0IHsgT25EZWxldGVTZWxlY3RlZEl0ZW1zIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkRlbGV0ZUl0ZW1zOiBPbkRlbGV0ZVNlbGVjdGVkSXRlbXM7XG4gIHJlc3VsdHM6IE1hcDxzdHJpbmcsIFNldDxzdHJpbmc+PjtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkRpc21pc3M6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBDb25maXJtRGVsZXRlTW9kYWw6IEZDPFByb3BzPiA9ICh7IHJlc3VsdHMsIG9uRGVsZXRlSXRlbXMsIGlzT3Blbiwgb25EaXNtaXNzIH0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModGhlbWUpO1xuXG4gIGNvbnN0IGRhc2hib2FyZHMgPSBBcnJheS5mcm9tKHJlc3VsdHMuZ2V0KCdkYXNoYm9hcmQnKSA/PyBbXSk7XG4gIGNvbnN0IGZvbGRlcnMgPSBBcnJheS5mcm9tKHJlc3VsdHMuZ2V0KCdmb2xkZXInKSA/PyBbXSk7XG5cbiAgY29uc3QgZm9sZGVyQ291bnQgPSBmb2xkZXJzLmxlbmd0aDtcbiAgY29uc3QgZGFzaENvdW50ID0gZGFzaGJvYXJkcy5sZW5ndGg7XG5cbiAgbGV0IHRleHQgPSAnRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoZSAnO1xuICBsZXQgc3VidGl0bGU7XG4gIGNvbnN0IGRhc2hFbmRpbmcgPSBkYXNoQ291bnQgPT09IDEgPyAnJyA6ICdzJztcbiAgY29uc3QgZm9sZGVyRW5kaW5nID0gZm9sZGVyQ291bnQgPT09IDEgPyAnJyA6ICdzJztcblxuICBpZiAoZm9sZGVyQ291bnQgPiAwICYmIGRhc2hDb3VudCA+IDApIHtcbiAgICB0ZXh0ICs9IGBzZWxlY3RlZCBmb2xkZXIke2ZvbGRlckVuZGluZ30gYW5kIGRhc2hib2FyZCR7ZGFzaEVuZGluZ30/XFxuYDtcbiAgICBzdWJ0aXRsZSA9IGBBbGwgZGFzaGJvYXJkcyBhbmQgYWxlcnRzIG9mIHRoZSBzZWxlY3RlZCBmb2xkZXIke2ZvbGRlckVuZGluZ30gd2lsbCBhbHNvIGJlIGRlbGV0ZWRgO1xuICB9IGVsc2UgaWYgKGZvbGRlckNvdW50ID4gMCkge1xuICAgIHRleHQgKz0gYHNlbGVjdGVkIGZvbGRlciR7Zm9sZGVyRW5kaW5nfSBhbmQgYWxsICR7Zm9sZGVyQ291bnQgPT09IDEgPyAnaXRzJyA6ICd0aGVpcid9IGRhc2hib2FyZHMgYW5kIGFsZXJ0cz9gO1xuICB9IGVsc2Uge1xuICAgIHRleHQgKz0gYCR7ZGFzaENvdW50fSBzZWxlY3RlZCBkYXNoYm9hcmQke2Rhc2hFbmRpbmd9P2A7XG4gIH1cblxuICBjb25zdCBkZWxldGVJdGVtcyA9ICgpID0+IHtcbiAgICBkZWxldGVGb2xkZXJzQW5kRGFzaGJvYXJkcyhmb2xkZXJzLCBkYXNoYm9hcmRzKS50aGVuKCgpID0+IHtcbiAgICAgIG9uRGlzbWlzcygpO1xuICAgICAgb25EZWxldGVJdGVtcyhmb2xkZXJzLCBkYXNoYm9hcmRzKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gaXNPcGVuID8gKFxuICAgIDxDb25maXJtTW9kYWxcbiAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgdGl0bGU9XCJEZWxldGVcIlxuICAgICAgYm9keT17XG4gICAgICAgIDw+XG4gICAgICAgICAge3RleHR9IHtzdWJ0aXRsZSAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnRpdGxlfT57c3VidGl0bGV9PC9kaXY+fVxuICAgICAgICA8Lz5cbiAgICAgIH1cbiAgICAgIGNvbmZpcm1UZXh0PVwiRGVsZXRlXCJcbiAgICAgIG9uQ29uZmlybT17ZGVsZXRlSXRlbXN9XG4gICAgICBvbkRpc21pc3M9e29uRGlzbWlzc31cbiAgICAvPlxuICApIDogbnVsbDtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdWJ0aXRsZTogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5iYXNlfTtcbiAgICAgIHBhZGRpbmctdG9wOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGAsXG4gIH07XG59KTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXN5bmMsIHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2hlY2tib3gsIENvbGxhcHNhYmxlU2VjdGlvbiwgSWNvbiwgc3R5bGVzRmFjdG9yeSwgdXNlVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBnZXRTZWN0aW9uU3RvcmFnZUtleSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9zZWFyY2gvdXRpbHMnO1xuaW1wb3J0IHsgdXNlVW5pcXVlSWQgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvdXNlVW5pcXVlSWQnO1xuXG5pbXBvcnQgeyBTZWFyY2hJdGVtIH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHsgZ2V0R3JhZmFuYVNlYXJjaGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRTZWFyY2hJdGVtVHlwZSwgRGFzaGJvYXJkU2VjdGlvbkl0ZW0gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3Rpb25DaGVja2VyLCBTZWxlY3Rpb25Ub2dnbGUgfSBmcm9tICcuLi9zZWxlY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZFNlY3Rpb24ge1xuICBraW5kOiBzdHJpbmc7IC8vIGZvbGRlciB8IHF1ZXJ5IVxuICB1aWQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc2VsZWN0ZWQ/OiBib29sZWFuOyAvLyBub3QgdXNlZCA/ICBrZXlib2FyZFxuICB1cmw/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWN0aW9uSGVhZGVyUHJvcHMge1xuICBzZWxlY3Rpb24/OiBTZWxlY3Rpb25DaGVja2VyO1xuICBzZWxlY3Rpb25Ub2dnbGU/OiBTZWxlY3Rpb25Ub2dnbGU7XG4gIG9uVGFnU2VsZWN0ZWQ6ICh0YWc6IHN0cmluZykgPT4gdm9pZDtcbiAgc2VjdGlvbjogRGFzaGJvYXJkU2VjdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IEZvbGRlclNlY3Rpb246IEZDPFNlY3Rpb25IZWFkZXJQcm9wcz4gPSAoeyBzZWN0aW9uLCBzZWxlY3Rpb25Ub2dnbGUsIG9uVGFnU2VsZWN0ZWQsIHNlbGVjdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGVkaXRhYmxlID0gc2VsZWN0aW9uVG9nZ2xlICE9IG51bGw7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U2VjdGlvbkhlYWRlclN0eWxlcyh0aGVtZSwgc2VjdGlvbi5zZWxlY3RlZCwgZWRpdGFibGUpO1xuICBjb25zdCBbc2VjdGlvbkV4cGFuZGVkLCBzZXRTZWN0aW9uRXhwYW5kZWRdID0gdXNlTG9jYWxTdG9yYWdlKGdldFNlY3Rpb25TdG9yYWdlS2V5KHNlY3Rpb24udGl0bGUpLCBmYWxzZSk7XG5cbiAgY29uc3QgcmVzdWx0cyA9IHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNlY3Rpb25FeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSBhcyBEYXNoYm9hcmRTZWN0aW9uSXRlbVtdKTtcbiAgICB9XG4gICAgbGV0IHF1ZXJ5ID0ge1xuICAgICAgcXVlcnk6ICcqJyxcbiAgICAgIGtpbmQ6IFsnZGFzaGJvYXJkJ10sXG4gICAgICBsb2NhdGlvbjogc2VjdGlvbi51aWQsXG4gICAgfTtcbiAgICBpZiAoc2VjdGlvbi50aXRsZSA9PT0gJ1N0YXJyZWQnKSB7XG4gICAgICAvLyBUT0RPXG4gICAgfSBlbHNlIGlmIChzZWN0aW9uLnRpdGxlID09PSAnUmVjZW50Jykge1xuICAgICAgLy8gVE9ET1xuICAgIH1cbiAgICBjb25zdCByYXcgPSBhd2FpdCBnZXRHcmFmYW5hU2VhcmNoZXIoKS5zZWFyY2gocXVlcnkpO1xuICAgIGNvbnN0IHYgPSByYXcudmlldy5tYXAoXG4gICAgICAoaXRlbSkgPT5cbiAgICAgICAgKHtcbiAgICAgICAgICB1aWQ6IGl0ZW0udWlkLFxuICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgICB1cmk6IGl0ZW0udXJsLFxuICAgICAgICAgIHR5cGU6IGl0ZW0ua2luZCA9PT0gJ2ZvbGRlcicgPyBEYXNoYm9hcmRTZWFyY2hJdGVtVHlwZS5EYXNoRm9sZGVyIDogRGFzaGJvYXJkU2VhcmNoSXRlbVR5cGUuRGFzaERCLFxuICAgICAgICAgIGlkOiA2NjYsIC8vIGRvIG5vdCB1c2UgbWUhXG4gICAgICAgICAgaXNTdGFycmVkOiBmYWxzZSxcbiAgICAgICAgICB0YWdzOiBpdGVtLnRhZ3MgPz8gW10sXG4gICAgICAgICAgY2hlY2tlZDogc2VsZWN0aW9uID8gc2VsZWN0aW9uKGl0ZW0ua2luZCwgaXRlbS51aWQpIDogZmFsc2UsXG4gICAgICAgIH0gYXMgRGFzaGJvYXJkU2VjdGlvbkl0ZW0pXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZygnSEVSRSEnKTtcbiAgICByZXR1cm4gdjtcbiAgfSwgW3NlY3Rpb25FeHBhbmRlZCwgc2VjdGlvbl0pO1xuXG4gIGNvbnN0IG9uU2VjdGlvbkV4cGFuZCA9ICgpID0+IHtcbiAgICBzZXRTZWN0aW9uRXhwYW5kZWQoIXNlY3Rpb25FeHBhbmRlZCk7XG4gICAgY29uc29sZS5sb2coJ1RPRE8hISBzZWN0aW9uJywgc2VjdGlvbi50aXRsZSwgc2VjdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaWQgPSB1c2VVbmlxdWVJZCgpO1xuICBjb25zdCBsYWJlbElkID0gYHNlY3Rpb24taGVhZGVyLWxhYmVsLSR7aWR9YDtcblxuICBsZXQgaWNvbiA9IHNlY3Rpb24uaWNvbjtcbiAgaWYgKCFpY29uKSB7XG4gICAgaWNvbiA9IHNlY3Rpb25FeHBhbmRlZCA/ICdmb2xkZXItb3BlbicgOiAnZm9sZGVyJztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNhYmxlU2VjdGlvblxuICAgICAgaXNPcGVuPXtzZWN0aW9uRXhwYW5kZWQgPz8gZmFsc2V9XG4gICAgICBvblRvZ2dsZT17b25TZWN0aW9uRXhwYW5kfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn1cbiAgICAgIGNvbnRlbnRDbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxuICAgICAgbG9hZGluZz17cmVzdWx0cy5sb2FkaW5nfVxuICAgICAgbGFiZWxJZD17bGFiZWxJZH1cbiAgICAgIGxhYmVsPXtcbiAgICAgICAgPD5cbiAgICAgICAgICB7c2VsZWN0aW9uVG9nZ2xlICYmIHNlbGVjdGlvbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyh2KSA9PiBjb25zb2xlLmxvZyh2KX0gY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9PlxuICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9e3NlbGVjdGlvbihzZWN0aW9uLmtpbmQsIHNlY3Rpb24udWlkKX0gYXJpYS1sYWJlbD1cIlNlbGVjdCBmb2xkZXJcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPXtpY29uIGFzIGFueX0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICA8c3BhbiBpZD17bGFiZWxJZH0+e3NlY3Rpb24udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAge3NlY3Rpb24udXJsICYmIChcbiAgICAgICAgICAgICAgPGEgaHJlZj17c2VjdGlvbi51cmx9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNlcGFyYXRvcn0+fDwvc3Bhbj4gPEljb24gbmFtZT1cImZvbGRlci11cGxvYWRcIiAvPiBHbyB0byBmb2xkZXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICB9XG4gICAgPlxuICAgICAge3Jlc3VsdHMudmFsdWUgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAge3Jlc3VsdHMudmFsdWUubWFwKCh2KSA9PiAoXG4gICAgICAgICAgICA8U2VhcmNoSXRlbSBrZXk9e3YudWlkfSBpdGVtPXt2fSBvblRhZ1NlbGVjdGVkPXtvblRhZ1NlbGVjdGVkfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L0NvbGxhcHNhYmxlU2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFNlY3Rpb25IZWFkZXJTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCh0aGVtZTogR3JhZmFuYVRoZW1lLCBzZWxlY3RlZCA9IGZhbHNlLCBlZGl0YWJsZTogYm9vbGVhbikgPT4ge1xuICBjb25zdCB7IHNtIH0gPSB0aGVtZS5zcGFjaW5nO1xuICByZXR1cm4ge1xuICAgIHdyYXBwZXI6IGN4KFxuICAgICAgY3NzYFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLmJhc2V9O1xuICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFdlYWt9O1xuICAgICAgICB6LWluZGV4OiAxO1xuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6Zm9jdXMtdmlzaWJsZSxcbiAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgICAgIGEge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICAncG9pbnRlcicsXG4gICAgICB7IHNlbGVjdGVkIH1cbiAgICApLFxuICAgIGNoZWNrYm94OiBjc3NgXG4gICAgICBwYWRkaW5nOiAwICR7c219IDAgMDtcbiAgICBgLFxuICAgIGljb246IGNzc2BcbiAgICAgIHBhZGRpbmc6IDAgJHtzbX0gMCAke2VkaXRhYmxlID8gMCA6IHNtfTtcbiAgICBgLFxuICAgIHRleHQ6IGNzc2BcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGAsXG4gICAgbGluazogY3NzYFxuICAgICAgcGFkZGluZzogMnB4IDEwcHggMDtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0V2Vha307XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluLW91dDtcbiAgICBgLFxuICAgIHNlcGFyYXRvcjogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgYCxcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBTcGlubmVyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBnZXRHcmFmYW5hU2VhcmNoZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c1RhYmxlJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkU2VjdGlvbiwgRm9sZGVyU2VjdGlvbiB9IGZyb20gJy4vRm9sZGVyU2VjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBGb2xkZXJWaWV3ID0gKHtcbiAgc2VsZWN0aW9uLFxuICBzZWxlY3Rpb25Ub2dnbGUsXG4gIG9uVGFnU2VsZWN0ZWQsXG59OiBQaWNrPFNlYXJjaFJlc3VsdHNQcm9wcywgJ3NlbGVjdGlvbicgfCAnc2VsZWN0aW9uVG9nZ2xlJyB8ICdvblRhZ1NlbGVjdGVkJz4pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IHJlc3VsdHMgPSB1c2VBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcnNwID0gYXdhaXQgZ2V0R3JhZmFuYVNlYXJjaGVyKCkuc2VhcmNoKHtcbiAgICAgIHF1ZXJ5OiAnKicsXG4gICAgICBraW5kOiBbJ2ZvbGRlciddLFxuICAgIH0pO1xuICAgIGNvbnN0IGZvbGRlcnM6IERhc2hib2FyZFNlY3Rpb25bXSA9IFtcbiAgICAgIHsgdGl0bGU6ICdSZWNlbnQnLCBpY29uOiAnY2xvY2snLCBraW5kOiAncXVlcnktcmVjZW50JywgdWlkOiAnX19yZWNlbnQnIH0sXG4gICAgICB7IHRpdGxlOiAnU3RhcnJlZCcsIGljb246ICdzdGFyJywga2luZDogJ3F1ZXJ5LXN0YXInLCB1aWQ6ICdfX3N0YXJyZWQnIH0sXG4gICAgICB7IHRpdGxlOiAnR2VuZXJhbCcsIHVybDogJy9kYXNoYm9hcmRzJywga2luZDogJ2ZvbGRlcicsIHVpZDogJ2dlbmVyYWwnIH0sIC8vIG5vdCBzdXJlIHdoeSB0aGlzIGlzIG5vdCBpbiB0aGUgaW5kZXhcbiAgICBdO1xuICAgIGZvciAoY29uc3Qgcm93IG9mIHJzcC52aWV3KSB7XG4gICAgICBmb2xkZXJzLnB1c2goe1xuICAgICAgICB0aXRsZTogcm93Lm5hbWUsXG4gICAgICAgIHVybDogcm93LnVybCxcbiAgICAgICAgdWlkOiByb3cudWlkLFxuICAgICAgICBraW5kOiByb3cua2luZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmb2xkZXJzO1xuICB9LCBbXSk7XG5cbiAgaWYgKHJlc3VsdHMubG9hZGluZykge1xuICAgIHJldHVybiA8U3Bpbm5lciAvPjtcbiAgfVxuICBpZiAoIXJlc3VsdHMudmFsdWUpIHtcbiAgICByZXR1cm4gPGRpdj4/PC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAge3Jlc3VsdHMudmFsdWUubWFwKChzZWN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuU2VhcmNofSBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufSBrZXk9e3NlY3Rpb24udGl0bGV9PlxuICAgICAgICAgICAge3NlY3Rpb24udGl0bGUgJiYgKFxuICAgICAgICAgICAgICA8Rm9sZGVyU2VjdGlvblxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbj17c2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblRvZ2dsZT17c2VsZWN0aW9uVG9nZ2xlfVxuICAgICAgICAgICAgICAgIG9uVGFnU2VsZWN0ZWQ9e29uVGFnU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgc2VjdGlvbj17c2VjdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICBjb25zdCB7IG1kLCBzbSB9ID0gdGhlbWUudjEuc3BhY2luZztcblxuICByZXR1cm4ge1xuICAgIHZpcnR1YWxpemVkR3JpZEl0ZW1XcmFwcGVyOiBjc3NgXG4gICAgICBwYWRkaW5nOiA0cHg7XG4gICAgYCxcbiAgICB3cmFwcGVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgPiB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgYCxcbiAgICBzZWN0aW9uOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUudjEuY29sb3JzLnBhbmVsQmd9O1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICR7dGhlbWUudjEuY29sb3JzLmJvcmRlcjJ9O1xuICAgIGAsXG4gICAgc2VjdGlvbkl0ZW1zOiBjc3NgXG4gICAgICBtYXJnaW46IDAgMjRweCAwIDMycHg7XG4gICAgYCxcbiAgICBzcGlubmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgYCxcbiAgICBncmlkQ29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ2FwOiAke3NtfTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7bWR9O1xuICAgIGAsXG4gICAgcmVzdWx0c0NvbnRhaW5lcjogY3NzYFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZmxleC1ncm93OiAxMDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7bWR9O1xuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS52MS5jb2xvcnMuYmcxfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUudjEuY29sb3JzLmJvcmRlcjF9O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGAsXG4gICAgbm9SZXN1bHRzOiBjc3NgXG4gICAgICBwYWRkaW5nOiAke21kfTtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUudjEuY29sb3JzLmJnMn07XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnYxLnNwYWNpbmcubWR9O1xuICAgIGAsXG4gICAgbGlzdE1vZGVXcmFwcGVyOiBjc3NgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAke21kfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgSG9yaXpvbnRhbEdyb3VwLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEZvbGRlckRUTywgRm9sZGVySW5mbyB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IEdFTkVSQUxfRk9MREVSX1VJRCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7IGdldFN0eWxlcyB9IGZyb20gJy4vQWN0aW9uUm93JztcbmltcG9ydCB7IENvbmZpcm1EZWxldGVNb2RhbCB9IGZyb20gJy4vQ29uZmlybURlbGV0ZU1vZGFsJztcbmltcG9ydCB7IE1vdmVUb0ZvbGRlck1vZGFsIH0gZnJvbSAnLi9Nb3ZlVG9Gb2xkZXJNb2RhbCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGl0ZW1zOiBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj47XG4gIGZvbGRlcj86IEZvbGRlckRUTzsgLy8gd2hlbiB3ZSBhcmUgbG9hZGluZyBpbiBmb2xkZXIgcGFnZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIE1hbmFnZUFjdGlvbnMoeyBpdGVtcywgZm9sZGVyIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBjYW5TYXZlID0gZm9sZGVyPy5jYW5TYXZlO1xuICBjb25zdCBoYXNFZGl0UGVybWlzc2lvbkluRm9sZGVycyA9IGZvbGRlciA/IGNhblNhdmUgOiBjb250ZXh0U3J2Lmhhc0VkaXRQZXJtaXNzaW9uSW5Gb2xkZXJzO1xuXG4gIGNvbnN0IGNhbk1vdmUgPSBoYXNFZGl0UGVybWlzc2lvbkluRm9sZGVycztcblxuICAvLyBUT0RPOiBjaGVjayB1c2VyIHBlcm1pc3Npb25zIGZvciBkZWxldGUsIHNob3VsZCBub3QgYmUgYWJsZSB0byBkZWxldGUgaWYgaW5jbHVkZXMgZ2VuZXJhbCBmb2xkZXIgYW5kIHVzZXIgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uc1xuICAvLyBUaGVyZSBpcyBub3QgR0VORVJBTF9GT0xERVJfVUlEIGNvbmZpZ3VyZWQgeWV0LCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBhZGQgaXQgdG8gdGhlIGRhdGEuXG4gIGNvbnN0IHNlbGVjdGVkRm9sZGVycyA9IEFycmF5LmZyb20oaXRlbXMuZ2V0KCdmb2xkZXJzJykgPz8gW10pO1xuICBjb25zb2xlLmxvZyh7IHNlbGVjdGVkRm9sZGVycyB9KTtcbiAgY29uc3QgaW5jbHVkZXNHZW5lcmFsRm9sZGVyID0gc2VsZWN0ZWRGb2xkZXJzLmZpbmQoKHJlc3VsdCkgPT4gcmVzdWx0ID09PSBHRU5FUkFMX0ZPTERFUl9VSUQpO1xuXG4gIGNvbnN0IGNhbkRlbGV0ZSA9IGhhc0VkaXRQZXJtaXNzaW9uSW5Gb2xkZXJzICYmICFpbmNsdWRlc0dlbmVyYWxGb2xkZXI7XG4gIGNvbnN0IFtpc01vdmVNb2RhbE9wZW4sIHNldElzTW92ZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0RlbGV0ZU1vZGFsT3Blbiwgc2V0SXNEZWxldGVNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uTW92ZSA9ICgpID0+IHtcbiAgICBzZXRJc01vdmVNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGUgPSAoKSA9PiB7XG4gICAgc2V0SXNEZWxldGVNb2RhbE9wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub2dnbGVBbGwgPSAoKSA9PiB7XG4gICAgYWxlcnQoJ1RPRE8sIHRvZ2dsZSBhbGwuLi4uJyk7XG4gIH07XG5cbiAgLy9Ub2RvOiB1cGRhdGUgaXRlbSBsaXN0cyB0aGF0IHdlcmUgbW92ZWRcbiAgY29uc3Qgb25Nb3ZlSXRlbXMgPSAoc2VsZWN0ZWREYXNoYm9hcmRzOiBzdHJpbmdbXSwgZm9sZGVyOiBGb2xkZXJJbmZvIHwgbnVsbCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHsgc2VsZWN0ZWREYXNoYm9hcmRzIH0pO1xuICAgIGNvbnNvbGUubG9nKHsgZm9sZGVyIH0pO1xuICAgIGNvbnNvbGUubG9nKCdpdGVtcyB3ZXJlIG1vdmVkIGluIHRoZSBiYWNrZW5kJyk7XG4gIH07XG5cbiAgLy9Ub2RvOiB1cGRhdGUgaXRlbSBsaXN0cyB0aGF0IHdlcmUgZGVsZXRlZFxuICBjb25zdCBvbkRlbGV0ZUl0ZW1zID0gKGZvbGRlcnM6IHN0cmluZ1tdLCBkYXNoYm9hcmRzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHsgZm9sZGVycyB9KTtcbiAgICBjb25zb2xlLmxvZyh7IGRhc2hib2FyZHMgfSk7XG4gICAgY29uc29sZS5sb2coJ2l0ZW1zIHdlcmUgbW92ZWQgaW4gdGhlIGJhY2tlbmQnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uUm93fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93Q29udGFpbmVyfT5cbiAgICAgICAgPEhvcml6b250YWxHcm91cCBzcGFjaW5nPVwibWRcIiB3aWR0aD1cImF1dG9cIj5cbiAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9e2ZhbHNlfSBvbkNsaWNrPXtvblRvZ2dsZUFsbH0gLz5cbiAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXshY2FuTW92ZX0gb25DbGljaz17b25Nb3ZlfSBpY29uPVwiZXhjaGFuZ2UtYWx0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgTW92ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9eyFjYW5EZWxldGV9IG9uQ2xpY2s9e29uRGVsZXRlfSBpY29uPVwidHJhc2gtYWx0XCIgdmFyaWFudD1cImRlc3RydWN0aXZlXCI+XG4gICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIHtbLi4uaXRlbXMua2V5cygpXS5tYXAoKGspID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHMgPSBpdGVtcy5nZXQoayk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17a30+XG4gICAgICAgICAgICAgICAge2t9ICh7dmFscz8uc2l6ZX0pXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENvbmZpcm1EZWxldGVNb2RhbFxuICAgICAgICBvbkRlbGV0ZUl0ZW1zPXtvbkRlbGV0ZUl0ZW1zfVxuICAgICAgICByZXN1bHRzPXtpdGVtc31cbiAgICAgICAgaXNPcGVuPXtpc0RlbGV0ZU1vZGFsT3Blbn1cbiAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAvPlxuICAgICAgPE1vdmVUb0ZvbGRlck1vZGFsXG4gICAgICAgIG9uTW92ZUl0ZW1zPXtvbk1vdmVJdGVtc31cbiAgICAgICAgcmVzdWx0cz17aXRlbXN9XG4gICAgICAgIGlzT3Blbj17aXNNb3ZlTW9kYWxPcGVufVxuICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldElzTW92ZU1vZGFsT3BlbihmYWxzZSl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIE1vZGFsLCBzdHlsZXNGYWN0b3J5LCB1c2VUaGVtZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEZvbGRlclBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvU2VsZWN0L0ZvbGRlclBpY2tlcic7XG5pbXBvcnQgeyB1c2VBcHBOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBtb3ZlRGFzaGJvYXJkcyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9tYW5hZ2UtZGFzaGJvYXJkcy9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEZvbGRlckluZm8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBPbk1vdmVTZWxlY3RlZEl0ZW1zIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbk1vdmVJdGVtczogT25Nb3ZlU2VsZWN0ZWRJdGVtcztcbiAgcmVzdWx0czogTWFwPHN0cmluZywgU2V0PHN0cmluZz4+O1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE1vdmVUb0ZvbGRlck1vZGFsOiBGQzxQcm9wcz4gPSAoeyByZXN1bHRzLCBvbk1vdmVJdGVtcywgaXNPcGVuLCBvbkRpc21pc3MgfSkgPT4ge1xuICBjb25zdCBbZm9sZGVyLCBzZXRGb2xkZXJdID0gdXNlU3RhdGU8Rm9sZGVySW5mbyB8IG51bGw+KG51bGwpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh0aGVtZSk7XG4gIGNvbnN0IG5vdGlmeUFwcCA9IHVzZUFwcE5vdGlmaWNhdGlvbigpO1xuICBjb25zdCBzZWxlY3RlZERhc2hib2FyZHMgPSBBcnJheS5mcm9tKHJlc3VsdHMuZ2V0KCdkYXNoYm9hcmQnKSA/PyBbXSk7XG5cbiAgY29uc3QgbW92ZVRvID0gKCkgPT4ge1xuICAgIGlmIChmb2xkZXIgJiYgc2VsZWN0ZWREYXNoYm9hcmRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZm9sZGVyVGl0bGUgPSBmb2xkZXIudGl0bGUgPz8gJ0dlbmVyYWwnO1xuXG4gICAgICBtb3ZlRGFzaGJvYXJkcyhzZWxlY3RlZERhc2hib2FyZHMsIGZvbGRlcikudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5zdWNjZXNzQ291bnQgPiAwKSB7XG4gICAgICAgICAgY29uc3QgZW5kaW5nID0gcmVzdWx0LnN1Y2Nlc3NDb3VudCA9PT0gMSA/ICcnIDogJ3MnO1xuICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGBEYXNoYm9hcmQke2VuZGluZ30gTW92ZWRgO1xuICAgICAgICAgIGNvbnN0IG1zZyA9IGAke3Jlc3VsdC5zdWNjZXNzQ291bnR9IGRhc2hib2FyZCR7ZW5kaW5nfSBtb3ZlZCB0byAke2ZvbGRlclRpdGxlfWA7XG4gICAgICAgICAgbm90aWZ5QXBwLnN1Y2Nlc3MoaGVhZGVyLCBtc2cpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC50b3RhbENvdW50ID09PSByZXN1bHQuYWxyZWFkeUluRm9sZGVyQ291bnQpIHtcbiAgICAgICAgICBub3RpZnlBcHAuZXJyb3IoJ0Vycm9yJywgYERhc2hib2FyZCBhbHJlYWR5IGJlbG9uZ3MgdG8gZm9sZGVyICR7Zm9sZGVyVGl0bGV9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy91cGRhdGUgdGhlIGxpc3RcbiAgICAgICAgICBvbk1vdmVJdGVtcyhzZWxlY3RlZERhc2hib2FyZHMsIGZvbGRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBvbkRpc21pc3MoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gaXNPcGVuID8gKFxuICAgIDxNb2RhbFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9XG4gICAgICB0aXRsZT1cIkNob29zZSBEYXNoYm9hcmQgRm9sZGVyXCJcbiAgICAgIGljb249XCJmb2xkZXItcGx1c1wiXG4gICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgIG9uRGlzbWlzcz17b25EaXNtaXNzfVxuICAgID5cbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBNb3ZlIHRoZSB7c2VsZWN0ZWREYXNoYm9hcmRzLmxlbmd0aH0gc2VsZWN0ZWQgZGFzaGJvYXJke3NlbGVjdGVkRGFzaGJvYXJkcy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gdG8gdGhlXG4gICAgICAgICAgICBmb2xsb3dpbmcgZm9sZGVyOlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Rm9sZGVyUGlja2VyIG9uQ2hhbmdlPXsoZikgPT4gc2V0Rm9sZGVyKGYgYXMgRm9sZGVySW5mbyl9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxIb3Jpem9udGFsR3JvdXAganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXttb3ZlVG99PlxuICAgICAgICAgICAgTW92ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e29uRGlzbWlzc30+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8Lz5cbiAgICA8L01vZGFsPlxuICApIDogbnVsbDtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtb2RhbDogY3NzYFxuICAgICAgd2lkdGg6IDUwMHB4O1xuICAgIGAsXG4gICAgY29udGVudDogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLmxnfTtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpeGVkU2l6ZUdyaWQgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuaW1wb3J0IEluZmluaXRlTG9hZGVyIGZyb20gJ3JlYWN0LXdpbmRvdy1pbmZpbml0ZS1sb2FkZXInO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBTZWFyY2hDYXJkIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hDYXJkJztcbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlLCBEYXNoYm9hcmRTZWN0aW9uSXRlbSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c1Byb3BzIH0gZnJvbSAnLi9TZWFyY2hSZXN1bHRzVGFibGUnO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoUmVzdWx0c0dyaWQgPSAoe1xuICByZXNwb25zZSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgc2VsZWN0aW9uLFxuICBzZWxlY3Rpb25Ub2dnbGUsXG4gIG9uVGFnU2VsZWN0ZWQsXG4gIG9uRGF0YXNvdXJjZUNoYW5nZSxcbn06IFNlYXJjaFJlc3VsdHNQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgLy8gSGFja2VkIHRvIHJldXNlIGV4aXN0aW5nIFNlYXJjaENhcmQgKGFuZCBvbGQgRGFzaGJvYXJkU2VjdGlvbkl0ZW0pXG4gIGNvbnN0IGl0ZW1Qcm9wcyA9IHtcbiAgICBlZGl0YWJsZTogc2VsZWN0aW9uICE9IG51bGwsXG4gICAgb25Ub2dnbGVDaGVja2VkOiAoaXRlbTogYW55KSA9PiB7XG4gICAgICBjb25zdCBkID0gaXRlbSBhcyBEYXNoYm9hcmRTZWN0aW9uSXRlbTtcbiAgICAgIGNvbnN0IHQgPSBkLnR5cGUgPT09IERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlLkRhc2hGb2xkZXIgPyAnZm9sZGVyJyA6ICdkYXNoYm9hcmQnO1xuICAgICAgaWYgKHNlbGVjdGlvblRvZ2dsZSkge1xuICAgICAgICBzZWxlY3Rpb25Ub2dnbGUodCwgZC51aWQhKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uVGFnU2VsZWN0ZWQsXG4gIH07XG5cbiAgY29uc3QgaXRlbUNvdW50ID0gcmVzcG9uc2UudG90YWxSb3dzID8/IHJlc3BvbnNlLnZpZXcubGVuZ3RoO1xuXG4gIGNvbnN0IHZpZXcgPSByZXNwb25zZS52aWV3O1xuICBjb25zdCBudW1Db2x1bW5zID0gTWF0aC5jZWlsKHdpZHRoIC8gMzIwKTtcbiAgY29uc3QgY2VsbFdpZHRoID0gd2lkdGggLyBudW1Db2x1bW5zO1xuICBjb25zdCBjZWxsSGVpZ2h0ID0gKGNlbGxXaWR0aCAtIDY0KSAqIDAuNzUgKyA1NiArIDg7XG4gIGNvbnN0IG51bVJvd3MgPSBNYXRoLmNlaWwoaXRlbUNvdW50IC8gbnVtQ29sdW1ucyk7XG4gIHJldHVybiAoXG4gICAgPEluZmluaXRlTG9hZGVyIGlzSXRlbUxvYWRlZD17cmVzcG9uc2UuaXNJdGVtTG9hZGVkfSBpdGVtQ291bnQ9e2l0ZW1Db3VudH0gbG9hZE1vcmVJdGVtcz17cmVzcG9uc2UubG9hZE1vcmVJdGVtc30+XG4gICAgICB7KHsgb25JdGVtc1JlbmRlcmVkLCByZWYgfSkgPT4gKFxuICAgICAgICA8Rml4ZWRTaXplR3JpZFxuICAgICAgICAgIGNvbHVtbkNvdW50PXtudW1Db2x1bW5zfVxuICAgICAgICAgIGNvbHVtbldpZHRoPXtjZWxsV2lkdGh9XG4gICAgICAgICAgcm93Q291bnQ9e251bVJvd3N9XG4gICAgICAgICAgcm93SGVpZ2h0PXtjZWxsSGVpZ2h0fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9XG4gICAgICAgICAgaW5uZXJFbGVtZW50VHlwZT1cInVsXCJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICB3aWR0aD17d2lkdGggLSAyfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7IGNvbHVtbkluZGV4LCByb3dJbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSByb3dJbmRleCAqIG51bUNvbHVtbnMgKyBjb2x1bW5JbmRleDtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSB2aWV3Lmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHZpZXcuZ2V0KGluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IGtpbmQgPSBpdGVtLmtpbmQgPz8gJ2Rhc2hib2FyZCc7XG4gICAgICAgICAgICBjb25zdCBmYWNhZGU6IERhc2hib2FyZFNlY3Rpb25JdGVtID0ge1xuICAgICAgICAgICAgICB1aWQ6IGl0ZW0udWlkLFxuICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgICAgICAgICB1cmk6IGl0ZW0udXJsLFxuICAgICAgICAgICAgICB0eXBlOiBraW5kID09PSAnZm9sZGVyJyA/IERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlLkRhc2hGb2xkZXIgOiBEYXNoYm9hcmRTZWFyY2hJdGVtVHlwZS5EYXNoREIsXG4gICAgICAgICAgICAgIGlkOiA2NjYsIC8vIGRvIG5vdCB1c2UgbWUhXG4gICAgICAgICAgICAgIGlzU3RhcnJlZDogZmFsc2UsXG4gICAgICAgICAgICAgIHRhZ3M6IGl0ZW0udGFncyA/PyBbXSxcbiAgICAgICAgICAgICAgY2hlY2tlZDogc2VsZWN0aW9uID8gc2VsZWN0aW9uKGtpbmQsIGl0ZW0udWlkKSA6IGZhbHNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gVGhlIHdyYXBwZXIgZGl2IGlzIG5lZWRlZCBhcyB0aGUgaW5uZXIgU2VhcmNoSXRlbSBoYXMgbWFyZ2luLWJvdHRvbSBzcGFjaW5nXG4gICAgICAgICAgICAvLyBBbmQgd2l0aG91dCB0aGlzIHdyYXBwZXIgdGhlcmUgaXMgbm8gcm9vbSBmb3IgdGhhdCBtYXJnaW5cbiAgICAgICAgICAgIHJldHVybiBpdGVtID8gKFxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy52aXJ0dWFsaXplZEdyaWRJdGVtV3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgPFNlYXJjaENhcmQga2V5PXtpdGVtLnVpZH0gey4uLml0ZW1Qcm9wc30gaXRlbT17ZmFjYWRlfSAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9GaXhlZFNpemVHcmlkPlxuICAgICAgKX1cbiAgICA8L0luZmluaXRlTG9hZGVyPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB2aXJ0dWFsaXplZEdyaWRJdGVtV3JhcHBlcjogY3NzYFxuICAgIHBhZGRpbmc6IDRweDtcbiAgYCxcbiAgd3JhcHBlcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgID4gdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gIGAsXG59KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1uby11bmRlZiAqL1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVGFibGUsIENvbHVtbiwgVGFibGVPcHRpb25zLCBDZWxsLCB1c2VBYnNvbHV0ZUxheW91dCB9IGZyb20gJ3JlYWN0LXRhYmxlJztcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuaW1wb3J0IEluZmluaXRlTG9hZGVyIGZyb20gJ3JlYWN0LXdpbmRvdy1pbmZpbml0ZS1sb2FkZXInO1xuXG5pbXBvcnQgeyBGaWVsZCwgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFRhYmxlQ2VsbCB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgeyBnZXRUYWJsZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL1RhYmxlL3N0eWxlcyc7XG5cbmltcG9ydCB7IFF1ZXJ5UmVzcG9uc2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdGlvbkNoZWNrZXIsIFNlbGVjdGlvblRvZ2dsZSB9IGZyb20gJy4uL3NlbGVjdGlvbic7XG5cbmltcG9ydCB7IGdlbmVyYXRlQ29sdW1ucyB9IGZyb20gJy4vY29sdW1ucyc7XG5cbmV4cG9ydCB0eXBlIFNlYXJjaFJlc3VsdHNQcm9wcyA9IHtcbiAgcmVzcG9uc2U6IFF1ZXJ5UmVzcG9uc2U7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBzZWxlY3Rpb24/OiBTZWxlY3Rpb25DaGVja2VyO1xuICBzZWxlY3Rpb25Ub2dnbGU/OiBTZWxlY3Rpb25Ub2dnbGU7XG4gIG9uVGFnU2VsZWN0ZWQ6ICh0YWc6IHN0cmluZykgPT4gdm9pZDtcbiAgb25EYXRhc291cmNlQ2hhbmdlPzogKGRhdGFzb3VyY2U/OiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgdHlwZSBUYWJsZUNvbHVtbiA9IENvbHVtbiAmIHtcbiAgZmllbGQ/OiBGaWVsZDtcbn07XG5cbmNvbnN0IEhFQURFUl9IRUlHSFQgPSAzNjsgLy8gcGl4ZWxzXG5cbmV4cG9ydCBjb25zdCBTZWFyY2hSZXN1bHRzVGFibGUgPSAoe1xuICByZXNwb25zZSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgc2VsZWN0aW9uLFxuICBzZWxlY3Rpb25Ub2dnbGUsXG4gIG9uVGFnU2VsZWN0ZWQsXG4gIG9uRGF0YXNvdXJjZUNoYW5nZSxcbn06IFNlYXJjaFJlc3VsdHNQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHRhYmxlU3R5bGVzID0gdXNlU3R5bGVzMihnZXRUYWJsZVN0eWxlcyk7XG5cbiAgY29uc3QgbWVtb2l6ZWREYXRhID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFyZXNwb25zZT8udmlldz8uZGF0YUZyYW1lLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gYXMgd2Ugb25seSB1c2UgdGhpcyB0byBmYWtlIHRoZSBsZW5ndGggb2Ygb3VyIGRhdGEgc2V0IGZvciByZWFjdC10YWJsZSB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBhbHdheXMgcmV0dXJuIGFuIGFycmF5XG4gICAgLy8gZmlsbGVkIHdpdGggdmFsdWVzIGF0IGVhY2ggaW5kZXggb3RoZXJ3aXNlIHdlJ2xsIGVuZCB1cCB0cnlpbmcgdG8gY2FsbCBhY2Nlc3NSb3cgZm9yIG51bGx8dW5kZWZpbmVkIHZhbHVlIGluXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Rhbm5lcmxpbnNsZXkvcmVhY3QtdGFibGUvYmxvYi83YmUyZmM5ZDhiNWUyMjNmYzk5OGFmODg4NjVhZTg2YTg4NzkyZmRiL3NyYy9ob29rcy91c2VUYWJsZS5qcyNMNTg1XG4gICAgcmV0dXJuIEFycmF5KHJlc3BvbnNlLnRvdGFsUm93cykuZmlsbCgwKTtcbiAgfSwgW3Jlc3BvbnNlXSk7XG5cbiAgLy8gUmVhY3QtdGFibGUgY29sdW1uIGRlZmluaXRpb25zXG4gIGNvbnN0IG1lbW9pemVkQ29sdW1ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBnZW5lcmF0ZUNvbHVtbnMocmVzcG9uc2UsIHdpZHRoLCBzZWxlY3Rpb24sIHNlbGVjdGlvblRvZ2dsZSwgc3R5bGVzLCBvblRhZ1NlbGVjdGVkLCBvbkRhdGFzb3VyY2VDaGFuZ2UpO1xuICB9LCBbcmVzcG9uc2UsIHdpZHRoLCBzdHlsZXMsIHNlbGVjdGlvbiwgc2VsZWN0aW9uVG9nZ2xlLCBvblRhZ1NlbGVjdGVkLCBvbkRhdGFzb3VyY2VDaGFuZ2VdKTtcblxuICBjb25zdCBvcHRpb25zOiBUYWJsZU9wdGlvbnM8e30+ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgY29sdW1uczogbWVtb2l6ZWRDb2x1bW5zLFxuICAgICAgZGF0YTogbWVtb2l6ZWREYXRhLFxuICAgIH0pLFxuICAgIFttZW1vaXplZENvbHVtbnMsIG1lbW9pemVkRGF0YV1cbiAgKTtcblxuICBjb25zdCB7IGdldFRhYmxlUHJvcHMsIGdldFRhYmxlQm9keVByb3BzLCBoZWFkZXJHcm91cHMsIHJvd3MsIHByZXBhcmVSb3cgfSA9IHVzZVRhYmxlKG9wdGlvbnMsIHVzZUFic29sdXRlTGF5b3V0KTtcblxuICBjb25zdCBSZW5kZXJSb3cgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoeyBpbmRleDogcm93SW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHJvd3Nbcm93SW5kZXhdO1xuICAgICAgcHJlcGFyZVJvdyhyb3cpO1xuXG4gICAgICBjb25zdCB1cmwgPSByZXNwb25zZS52aWV3LmZpZWxkcy51cmw/LnZhbHVlcy5nZXQocm93SW5kZXgpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiB7Li4ucm93LmdldFJvd1Byb3BzKHsgc3R5bGUgfSl9IGNsYXNzTmFtZT17c3R5bGVzLnJvd0NvbnRhaW5lcn0+XG4gICAgICAgICAge3Jvdy5jZWxscy5tYXAoKGNlbGw6IENlbGwsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIHRhYmxlU3R5bGVzPXt0YWJsZVN0eWxlc31cbiAgICAgICAgICAgICAgICBjZWxsPXtjZWxsfVxuICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjb2x1bW5Db3VudD17cm93LmNlbGxzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICB1c2VyUHJvcHM9e3sgaHJlZjogdXJsIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSxcbiAgICBbcm93cywgcHJlcGFyZVJvdywgcmVzcG9uc2Uudmlldy5maWVsZHMudXJsPy52YWx1ZXMsIHN0eWxlcy5yb3dDb250YWluZXIsIHRhYmxlU3R5bGVzXVxuICApO1xuXG4gIGlmICghcm93cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub0RhdGF9Pk5vIGRhdGE8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLmdldFRhYmxlUHJvcHMoKX0gYXJpYS1sYWJlbD1cIlNlYXJjaCByZXN1bHQgdGFibGVcIiByb2xlPVwidGFibGVcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtoZWFkZXJHcm91cHMubWFwKChoZWFkZXJHcm91cCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCAuLi5oZWFkZXJHcm91cFByb3BzIH0gPSBoZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCk7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gey4uLmhlYWRlckdyb3VwUHJvcHN9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclJvd30+XG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBrZXksIC4uLmhlYWRlclByb3BzIH0gPSBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gey4uLmhlYWRlclByb3BzfSByb2xlPVwiY29sdW1uaGVhZGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyQ2VsbH0+XG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgIDxJbmZpbml0ZUxvYWRlclxuICAgICAgICAgIGlzSXRlbUxvYWRlZD17cmVzcG9uc2UuaXNJdGVtTG9hZGVkfVxuICAgICAgICAgIGl0ZW1Db3VudD17cm93cy5sZW5ndGh9XG4gICAgICAgICAgbG9hZE1vcmVJdGVtcz17cmVzcG9uc2UubG9hZE1vcmVJdGVtc31cbiAgICAgICAgPlxuICAgICAgICAgIHsoeyBvbkl0ZW1zUmVuZGVyZWQsIHJlZiB9KSA9PiAoXG4gICAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgb25JdGVtc1JlbmRlcmVkPXtvbkl0ZW1zUmVuZGVyZWR9XG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IC0gSEVBREVSX0hFSUdIVH1cbiAgICAgICAgICAgICAgaXRlbUNvdW50PXtyb3dzLmxlbmd0aH1cbiAgICAgICAgICAgICAgaXRlbVNpemU9e3RhYmxlU3R5bGVzLnJvd0hlaWdodH1cbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4gYXV0bycgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1JlbmRlclJvd31cbiAgICAgICAgICAgIDwvRml4ZWRTaXplTGlzdD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0luZmluaXRlTG9hZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgY29uc3Qgcm93SG92ZXJCZyA9IHRoZW1lLmNvbG9ycy5lbXBoYXNpemUodGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeSwgMC4wMyk7XG5cbiAgcmV0dXJuIHtcbiAgICBub0RhdGE6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIGAsXG4gICAgdGFibGU6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGAsXG4gICAgY2VsbEljb246IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gICAgY2VsbFdyYXBwZXI6IGNzc2BcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuICAgIGAsXG4gICAgaGVhZGVyQ2VsbDogY3NzYFxuICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBgLFxuICAgIGhlYWRlclJvdzogY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgICAgaGVpZ2h0OiAke0hFQURFUl9IRUlHSFR9cHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gICAgcm93Q29udGFpbmVyOiBjc3NgXG4gICAgICBsYWJlbDogcm93O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cm93SG92ZXJCZ307XG4gICAgICB9XG5cbiAgICAgICY6bm90KDpob3ZlcikgZGl2W3JvbGU9J2NlbGwnXSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuICAgIGAsXG4gICAgdHlwZUljb246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDkuNXB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUudjEuc3BhY2luZy54eHN9O1xuICAgICAgZmlsbDogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIGAsXG4gICAgZGF0YXNvdXJjZUl0ZW06IGNzc2BcbiAgICAgIHNwYW4ge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5saW5rfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgaW52YWxpZERhdGFzb3VyY2VJdGVtOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZXJyb3IubWFpbn07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBgLFxuICAgIHR5cGVUZXh0OiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIGAsXG4gICAgbG9jYXRpb25JdGVtOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIGAsXG4gICAgY2hlY2tib3hIZWFkZXI6IGNzc2BcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgICBjaGVja2JveDogY3NzYFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYCxcbiAgICBpbmZvV3JhcDogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgYCxcbiAgICB0YWdMaXN0OiBjc3NgXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTVkcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJztcblxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQ2hlY2tib3gsIEljb24sIEljb25OYW1lLCBUYWdMaXN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGVmYXVsdENlbGwgfSBmcm9tICdAZ3JhZmFuYS91aS9zcmMvY29tcG9uZW50cy9UYWJsZS9EZWZhdWx0Q2VsbCc7XG5cbmltcG9ydCB7IFF1ZXJ5UmVzcG9uc2UsIFNlYXJjaFJlc3VsdE1ldGEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdGlvbkNoZWNrZXIsIFNlbGVjdGlvblRvZ2dsZSB9IGZyb20gJy4uL3NlbGVjdGlvbic7XG5cbmltcG9ydCB7IFRhYmxlQ29sdW1uIH0gZnJvbSAnLi9TZWFyY2hSZXN1bHRzVGFibGUnO1xuXG5jb25zdCBUWVBFX0NPTFVNTl9XSURUSCA9IDEzMDtcbmNvbnN0IERBVEFTT1VSQ0VfQ09MVU1OX1dJRFRIID0gMjAwO1xuY29uc3QgTE9DQVRJT05fQ09MVU1OX1dJRFRIID0gMjAwO1xuY29uc3QgVEFHU19DT0xVTU5fV0lEVEggPSAyMDA7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbHVtbnMgPSAoXG4gIHJlc3BvbnNlOiBRdWVyeVJlc3BvbnNlLFxuICBhdmFpbGFibGVXaWR0aDogbnVtYmVyLFxuICBzZWxlY3Rpb246IFNlbGVjdGlvbkNoZWNrZXIgfCB1bmRlZmluZWQsXG4gIHNlbGVjdGlvblRvZ2dsZTogU2VsZWN0aW9uVG9nZ2xlIHwgdW5kZWZpbmVkLFxuICBzdHlsZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sXG4gIG9uVGFnU2VsZWN0ZWQ6ICh0YWc6IHN0cmluZykgPT4gdm9pZCxcbiAgb25EYXRhc291cmNlQ2hhbmdlPzogKGRhdGFzb3VyY2U/OiBzdHJpbmcpID0+IHZvaWRcbik6IFRhYmxlQ29sdW1uW10gPT4ge1xuICBjb25zdCBjb2x1bW5zOiBUYWJsZUNvbHVtbltdID0gW107XG4gIGNvbnN0IGFjY2VzcyA9IHJlc3BvbnNlLnZpZXcuZmllbGRzO1xuICBjb25zdCB1aWRGaWVsZCA9IGFjY2Vzcy51aWQ7XG4gIGNvbnN0IGtpbmRGaWVsZCA9IGFjY2Vzcy5raW5kO1xuXG4gIGxldCB3aWR0aCA9IDUwO1xuXG4gIGlmIChzZWxlY3Rpb24gJiYgc2VsZWN0aW9uVG9nZ2xlKSB7XG4gICAgd2lkdGggPSAzMDtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgaWQ6IGBjb2x1bW4tY2hlY2tib3hgLFxuICAgICAgd2lkdGgsXG4gICAgICBIZWFkZXI6ICgpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveEhlYWRlcn0+XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICBhbGVydCgnU0VMRUNUIEFMTCEhIScpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICksXG4gICAgICBDZWxsOiAocCkgPT4ge1xuICAgICAgICBjb25zdCB1aWQgPSB1aWRGaWVsZC52YWx1ZXMuZ2V0KHAucm93LmluZGV4KTtcbiAgICAgICAgY29uc3Qga2luZCA9IGtpbmRGaWVsZCA/IGtpbmRGaWVsZC52YWx1ZXMuZ2V0KHAucm93LmluZGV4KSA6ICdkYXNoYm9hcmQnOyAvLyBIQUNLIGZvciBub3dcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3Rpb24oa2luZCwgdWlkKTtcbiAgICAgICAgY29uc3QgaGFzVUlEID0gdWlkICE9IG51bGw7IC8vIFBhbmVscyBkb24ndCBoYXZlIFVJRCEgTGlrZWx5IHNob3VsZCBub3QgYmUgc2hvd24gb24gcGFnZXMgd2l0aCBtYW5hZ2Ugb3B0aW9uc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgey4uLnAuY2VsbFByb3BzfSBjbGFzc05hbWU9e3AuY2VsbFN0eWxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9PlxuICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1VJRH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQgJiYgaGFzVUlEfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uVG9nZ2xlKGtpbmQsIHVpZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGZpZWxkOiB1aWRGaWVsZCxcbiAgICB9KTtcbiAgICBhdmFpbGFibGVXaWR0aCAtPSB3aWR0aDtcbiAgfVxuXG4gIC8vIE5hbWUgY29sdW1uXG4gIHdpZHRoID0gTWF0aC5tYXgoYXZhaWxhYmxlV2lkdGggKiAwLjIsIDMwMCk7XG4gIGNvbHVtbnMucHVzaCh7XG4gICAgQ2VsbDogKHApID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBhY2Nlc3MubmFtZS52YWx1ZXMuZ2V0KHAucm93LmluZGV4KTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxhIHsuLi5wLmNlbGxQcm9wc30gaHJlZj17cC51c2VyUHJvcHMuaHJlZn0gY2xhc3NOYW1lPXtjeChwLmNlbGxTdHlsZSwgc3R5bGVzLmNlbGxXcmFwcGVyKX0+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgICk7XG4gICAgfSxcbiAgICBpZDogYGNvbHVtbi1uYW1lYCxcbiAgICBmaWVsZDogYWNjZXNzLm5hbWUhLFxuICAgIEhlYWRlcjogJ05hbWUnLFxuICAgIHdpZHRoLFxuICB9KTtcbiAgYXZhaWxhYmxlV2lkdGggLT0gd2lkdGg7XG5cbiAgd2lkdGggPSBUWVBFX0NPTFVNTl9XSURUSDtcbiAgY29sdW1ucy5wdXNoKG1ha2VUeXBlQ29sdW1uKGFjY2Vzcy5raW5kLCBhY2Nlc3MucGFuZWxfdHlwZSwgd2lkdGgsIHN0eWxlcykpO1xuICBhdmFpbGFibGVXaWR0aCAtPSB3aWR0aDtcblxuICAvLyBTaG93IGRhdGFzb3VyY2VzIGlmIHdlIGhhdmUgYW55XG4gIGlmIChhY2Nlc3MuZHNfdWlkICYmIG9uRGF0YXNvdXJjZUNoYW5nZSkge1xuICAgIHdpZHRoID0gREFUQVNPVVJDRV9DT0xVTU5fV0lEVEg7XG4gICAgY29sdW1ucy5wdXNoKFxuICAgICAgbWFrZURhdGFTb3VyY2VDb2x1bW4oXG4gICAgICAgIGFjY2Vzcy5kc191aWQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBzdHlsZXMudHlwZUljb24sXG4gICAgICAgIHN0eWxlcy5kYXRhc291cmNlSXRlbSxcbiAgICAgICAgc3R5bGVzLmludmFsaWREYXRhc291cmNlSXRlbSxcbiAgICAgICAgb25EYXRhc291cmNlQ2hhbmdlXG4gICAgICApXG4gICAgKTtcbiAgICBhdmFpbGFibGVXaWR0aCAtPSB3aWR0aDtcbiAgfVxuXG4gIC8vIFNob3cgdGFncyBpZiB3ZSBoYXZlIGFueVxuICBpZiAoYWNjZXNzLnRhZ3MpIHtcbiAgICB3aWR0aCA9IFRBR1NfQ09MVU1OX1dJRFRIO1xuICAgIGNvbHVtbnMucHVzaChtYWtlVGFnc0NvbHVtbihhY2Nlc3MudGFncywgd2lkdGgsIHN0eWxlcy50YWdMaXN0LCBvblRhZ1NlbGVjdGVkKSk7XG4gICAgYXZhaWxhYmxlV2lkdGggLT0gd2lkdGg7XG4gIH1cblxuICB3aWR0aCA9IE1hdGgubWF4KGF2YWlsYWJsZVdpZHRoLCBMT0NBVElPTl9DT0xVTU5fV0lEVEgpO1xuICBjb25zdCBtZXRhID0gcmVzcG9uc2Uudmlldy5kYXRhRnJhbWUubWV0YT8uY3VzdG9tIGFzIFNlYXJjaFJlc3VsdE1ldGE7XG4gIGlmIChtZXRhPy5sb2NhdGlvbkluZm8pIHtcbiAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgQ2VsbDogKHApID0+IHtcbiAgICAgICAgY29uc3QgcGFydHMgPSAoYWNjZXNzLmxvY2F0aW9uPy52YWx1ZXMuZ2V0KHAucm93LmluZGV4KSA/PyAnJykuc3BsaXQoJy8nKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB7Li4ucC5jZWxsUHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICBwLmNlbGxTdHlsZSxcbiAgICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BhcnRzLm1hcCgocCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpbmZvID0gbWV0YS5sb2NhdGlvbkluZm9bcF07XG4gICAgICAgICAgICAgIHJldHVybiBpbmZvID8gKFxuICAgICAgICAgICAgICAgIDxhIGtleT17cH0gaHJlZj17aW5mby51cmx9IGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uSXRlbX0+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtnZXRJY29uRm9yS2luZChpbmZvLmtpbmQpfSAvPiB7aW5mby5uYW1lfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3B9PntwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGlkOiBgY29sdW1uLWxvY2F0aW9uYCxcbiAgICAgIGZpZWxkOiBhY2Nlc3MubG9jYXRpb24gPz8gYWNjZXNzLnVybCxcbiAgICAgIEhlYWRlcjogJ0xvY2F0aW9uJyxcbiAgICAgIHdpZHRoLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNvbHVtbnM7XG59O1xuXG5mdW5jdGlvbiBnZXRJY29uRm9yS2luZCh2OiBzdHJpbmcpOiBJY29uTmFtZSB7XG4gIGlmICh2ID09PSAnZGFzaGJvYXJkJykge1xuICAgIHJldHVybiAnYXBwcyc7XG4gIH1cbiAgaWYgKHYgPT09ICdmb2xkZXInKSB7XG4gICAgcmV0dXJuICdmb2xkZXInO1xuICB9XG4gIHJldHVybiAncXVlc3Rpb24tY2lyY2xlJztcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFTb3VyY2VDb2x1bW4oXG4gIGZpZWxkOiBGaWVsZDxzdHJpbmdbXT4sXG4gIHdpZHRoOiBudW1iZXIsXG4gIGljb25DbGFzczogc3RyaW5nLFxuICBkYXRhc291cmNlSXRlbUNsYXNzOiBzdHJpbmcsXG4gIGludmFsaWREYXRhc291cmNlSXRlbUNsYXNzOiBzdHJpbmcsXG4gIG9uRGF0YXNvdXJjZUNoYW5nZTogKGRhdGFzb3VyY2U/OiBzdHJpbmcpID0+IHZvaWRcbik6IFRhYmxlQ29sdW1uIHtcbiAgY29uc3Qgc3J2ID0gZ2V0RGF0YVNvdXJjZVNydigpO1xuICByZXR1cm4ge1xuICAgIGlkOiBgY29sdW1uLWRhdGFzb3VyY2VgLFxuICAgIGZpZWxkLFxuICAgIEhlYWRlcjogJ0RhdGEgc291cmNlJyxcbiAgICBDZWxsOiAocCkgPT4ge1xuICAgICAgY29uc3QgZHNsaXN0ID0gZmllbGQudmFsdWVzLmdldChwLnJvdy5pbmRleCk7XG4gICAgICBpZiAoIWRzbGlzdD8ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiB7Li4ucC5jZWxsUHJvcHN9IGNsYXNzTmFtZT17Y3gocC5jZWxsU3R5bGUsIGRhdGFzb3VyY2VJdGVtQ2xhc3MpfT5cbiAgICAgICAgICB7ZHNsaXN0Lm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSBzcnYuZ2V0SW5zdGFuY2VTZXR0aW5ncyh2KTtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBzZXR0aW5ncz8ubWV0YT8uaW5mbz8ubG9nb3M/LnNtYWxsO1xuICAgICAgICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBvbkRhdGFzb3VyY2VDaGFuZ2Uoc2V0dGluZ3MudWlkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ljb259IHdpZHRoPXsxNH0gaGVpZ2h0PXsxNH0gdGl0bGU9e3NldHRpbmdzLnR5cGV9IGNsYXNzTmFtZT17aWNvbkNsYXNzfSAvPlxuICAgICAgICAgICAgICAgICAge3NldHRpbmdzLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbnZhbGlkRGF0YXNvdXJjZUl0ZW1DbGFzc30ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7dn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0sXG4gICAgd2lkdGgsXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VUeXBlQ29sdW1uKFxuICBraW5kRmllbGQ6IEZpZWxkPHN0cmluZz4sXG4gIHR5cGVGaWVsZDogRmllbGQ8c3RyaW5nPixcbiAgd2lkdGg6IG51bWJlcixcbiAgc3R5bGVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4pOiBUYWJsZUNvbHVtbiB7XG4gIHJldHVybiB7XG4gICAgQ2VsbDogRGVmYXVsdENlbGwsXG4gICAgaWQ6IGBjb2x1bW4tdHlwZWAsXG4gICAgZmllbGQ6IGtpbmRGaWVsZCA/PyB0eXBlRmllbGQsXG4gICAgSGVhZGVyOiAnVHlwZScsXG4gICAgYWNjZXNzb3I6IChyb3c6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBraW5kID0ga2luZEZpZWxkPy52YWx1ZXMuZ2V0KGkpID8/ICdkYXNoYm9hcmQnO1xuICAgICAgbGV0IGljb24gPSAncHVibGljL2ltZy9pY29ucy91bmljb25zL2FwcHMuc3ZnJztcbiAgICAgIGxldCB0eHQgPSAnRGFzaGJvYXJkJztcbiAgICAgIGlmIChraW5kKSB7XG4gICAgICAgIHR4dCA9IGtpbmQ7XG4gICAgICAgIHN3aXRjaCAodHh0KSB7XG4gICAgICAgICAgY2FzZSAnZGFzaGJvYXJkJzpcbiAgICAgICAgICAgIHR4dCA9ICdEYXNoYm9hcmQnO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdmb2xkZXInOlxuICAgICAgICAgICAgaWNvbiA9ICdwdWJsaWMvaW1nL2ljb25zL3VuaWNvbnMvZm9sZGVyLnN2Zyc7XG4gICAgICAgICAgICB0eHQgPSAnRm9sZGVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAncGFuZWwnOlxuICAgICAgICAgICAgaWNvbiA9ICdwdWJsaWMvaW1nL2ljb25zL3VuaWNvbnMvZ3JhcGgtYmFyLnN2Zyc7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZUZpZWxkLnZhbHVlcy5nZXQoaSk7XG4gICAgICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgICB0eHQgPSB0eXBlO1xuICAgICAgICAgICAgICBjb25zdCBpbmZvID0gY29uZmlnLnBhbmVsc1t0eHRdO1xuICAgICAgICAgICAgICBpZiAoaW5mbz8ubmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBpbmZvLmluZm8/LmxvZ29zLnNtYWxsO1xuICAgICAgICAgICAgICAgIGlmICh2ICYmIHYuZW5kc1dpdGgoJy5zdmcnKSkge1xuICAgICAgICAgICAgICAgICAgaWNvbiA9IHY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHR4dCA9IGluZm8ubmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZVRleHR9PlxuICAgICAgICAgIDxTVkcgc3JjPXtpY29ufSB3aWR0aD17MTR9IGhlaWdodD17MTR9IHRpdGxlPXt0eHR9IGNsYXNzTmFtZT17c3R5bGVzLnR5cGVJY29ufSAvPlxuICAgICAgICAgIHt0eHR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9LFxuICAgIHdpZHRoLFxuICB9O1xufVxuXG5mdW5jdGlvbiBtYWtlVGFnc0NvbHVtbihcbiAgZmllbGQ6IEZpZWxkPHN0cmluZ1tdPixcbiAgd2lkdGg6IG51bWJlcixcbiAgdGFnTGlzdENsYXNzOiBzdHJpbmcsXG4gIG9uVGFnU2VsZWN0ZWQ6ICh0YWc6IHN0cmluZykgPT4gdm9pZFxuKTogVGFibGVDb2x1bW4ge1xuICByZXR1cm4ge1xuICAgIENlbGw6IChwKSA9PiB7XG4gICAgICBjb25zdCB0YWdzID0gZmllbGQudmFsdWVzLmdldChwLnJvdy5pbmRleCk7XG4gICAgICBpZiAodGFncykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgey4uLnAuY2VsbFByb3BzfSBjbGFzc05hbWU9e3AuY2VsbFN0eWxlfT5cbiAgICAgICAgICAgIDxUYWdMaXN0IGNsYXNzTmFtZT17dGFnTGlzdENsYXNzfSB0YWdzPXt0YWdzfSBvbkNsaWNrPXtvblRhZ1NlbGVjdGVkfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBpZDogYGNvbHVtbi10YWdzYCxcbiAgICBmaWVsZDogZmllbGQsXG4gICAgSGVhZGVyOiAnVGFncycsXG4gICAgd2lkdGgsXG4gIH07XG59XG4iLCJleHBvcnQgdHlwZSBTZWxlY3Rpb25DaGVja2VyID0gKGtpbmQ6IHN0cmluZywgdWlkOiBzdHJpbmcpID0+IGJvb2xlYW47XG5leHBvcnQgdHlwZSBTZWxlY3Rpb25Ub2dnbGUgPSAoa2luZDogc3RyaW5nLCB1aWQ6IHN0cmluZykgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTZWxlY3Rpb24ge1xuICAvLyBDaGVjayBpZiBhbiBpdGVtIGlzIHNlbGVjdGVkXG4gIGlzU2VsZWN0ZWQ6IFNlbGVjdGlvbkNoZWNrZXI7XG5cbiAgLy8gU2VsZWN0ZWQgaXRlbXMgYnkga2luZFxuICBpdGVtczogTWFwPHN0cmluZywgU2V0PHN0cmluZz4+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3U2VhcmNoU2VsZWN0aW9uKCk6IFNlYXJjaFNlbGVjdGlvbiB7XG4gIC8vIHRoZSBjaGVjayBpcyBjYWxsZWQgb2Z0ZW4sIG9uIHBvdGVudGlhbGx5IGxhcmdlIChhbGwpIHJlc3VsdHMgc28gdXNpbmcgTWFwL1NldCBpcyBiZXR0ZXIgdGhhbiBzaW1wbGUgYXJyYXlcbiAgY29uc3QgaXRlbXMgPSBuZXcgTWFwPHN0cmluZywgU2V0PHN0cmluZz4+KCk7XG5cbiAgY29uc3QgaXNTZWxlY3RlZCA9IChraW5kOiBzdHJpbmcsIHVpZDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIEJvb2xlYW4oaXRlbXMuZ2V0KGtpbmQpPy5oYXModWlkKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtcyxcbiAgICBpc1NlbGVjdGVkLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2VhcmNoU2VsZWN0aW9uKFxuICBvbGQ6IFNlYXJjaFNlbGVjdGlvbixcbiAgc2VsZWN0ZWQ6IGJvb2xlYW4sXG4gIGtpbmQ6IHN0cmluZyxcbiAgdWlkczogc3RyaW5nW11cbik6IFNlYXJjaFNlbGVjdGlvbiB7XG4gIGNvbnN0IGl0ZW1zID0gb2xkLml0ZW1zOyAvLyBtdXRhdGUhIDovXG5cbiAgaWYgKHVpZHMubGVuZ3RoKSB7XG4gICAgY29uc3QgayA9IGl0ZW1zLmdldChraW5kKTtcbiAgICBpZiAoaykge1xuICAgICAgZm9yIChjb25zdCB1aWQgb2YgdWlkcykge1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICBrLmFkZCh1aWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGsuZGVsZXRlKHVpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChrLnNpemUgPCAxKSB7XG4gICAgICAgIGl0ZW1zLmRlbGV0ZShraW5kKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBpdGVtcy5zZXQoa2luZCwgbmV3IFNldDxzdHJpbmc+KHVpZHMpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGl0ZW1zLFxuICAgIGlzU2VsZWN0ZWQ6IChraW5kOiBzdHJpbmcsIHVpZDogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gQm9vbGVhbihpdGVtcy5nZXQoa2luZCk/Lmhhcyh1aWQpKTtcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBcnJheVZlY3RvciwgRGF0YUZyYW1lLCBEYXRhRnJhbWVWaWV3LCBnZXREaXNwbGF5UHJvY2Vzc29yIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFRlcm1Db3VudCB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVGFnRmlsdGVyL1RhZ0ZpbHRlcic7XG5pbXBvcnQgeyBHcmFmYW5hRGF0YXNvdXJjZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhZmFuYS9kYXRhc291cmNlJztcbmltcG9ydCB7IEdyYWZhbmFRdWVyeVR5cGUgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2dyYWZhbmEvdHlwZXMnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRRdWVyeVJlc3VsdCwgR3JhZmFuYVNlYXJjaGVyLCBRdWVyeVJlc3BvbnNlLCBTZWFyY2hRdWVyeSwgU2VhcmNoUmVzdWx0TWV0YSB9IGZyb20gJy4nO1xuXG5leHBvcnQgY2xhc3MgQmx1Z2VTZWFyY2hlciBpbXBsZW1lbnRzIEdyYWZhbmFTZWFyY2hlciB7XG4gIGFzeW5jIHNlYXJjaChxdWVyeTogU2VhcmNoUXVlcnkpOiBQcm9taXNlPFF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBpZiAocXVlcnkuZmFjZXQ/Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgJ2ZhY2V0cyBub3Qgc3VwcG9ydGVkISc7XG4gICAgfVxuICAgIHJldHVybiBkb1NlYXJjaFF1ZXJ5KHF1ZXJ5KTtcbiAgfVxuXG4gIGFzeW5jIGxpc3QobG9jYXRpb246IHN0cmluZyk6IFByb21pc2U8UXVlcnlSZXNwb25zZT4ge1xuICAgIHJldHVybiBkb1NlYXJjaFF1ZXJ5KHsgcXVlcnk6IGBsaXN0OiR7bG9jYXRpb24gPz8gJyd9YCB9KTtcbiAgfVxuXG4gIGFzeW5jIHRhZ3MocXVlcnk6IFNlYXJjaFF1ZXJ5KTogUHJvbWlzZTxUZXJtQ291bnRbXT4ge1xuICAgIGNvbnN0IGRzID0gKGF3YWl0IGdldERhdGFTb3VyY2VTcnYoKS5nZXQoJy0tIEdyYWZhbmEgLS0nKSkgYXMgR3JhZmFuYURhdGFzb3VyY2U7XG4gICAgY29uc3QgdGFyZ2V0ID0ge1xuICAgICAgLi4ucXVlcnksXG4gICAgICByZWZJZDogJ0EnLFxuICAgICAgcXVlcnlUeXBlOiBHcmFmYW5hUXVlcnlUeXBlLlNlYXJjaCxcbiAgICAgIHF1ZXJ5OiBxdWVyeS5xdWVyeSA/PyAnKicsXG4gICAgICBmYWNldDogW3sgZmllbGQ6ICd0YWcnIH1dLFxuICAgICAgbGltaXQ6IDEsIC8vIDAgd291bGQgYmUgYmV0dGVyLCBidXQgaXMgaWdub3JlZCBieSB0aGUgYmFja2VuZFxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhID0gKFxuICAgICAgYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgICAgZHMucXVlcnkoe1xuICAgICAgICAgIHRhcmdldHM6IFt0YXJnZXRdLFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIClcbiAgICApLmRhdGEgYXMgRGF0YUZyYW1lW107XG4gICAgZm9yIChjb25zdCBmcmFtZSBvZiBkYXRhKSB7XG4gICAgICBpZiAoZnJhbWUuZmllbGRzWzBdLm5hbWUgPT09ICd0YWcnKSB7XG4gICAgICAgIHJldHVybiBnZXRUZXJtQ291bnRzRnJvbShmcmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5jb25zdCBmaXJzdFBhZ2VTaXplID0gNTA7XG5jb25zdCBuZXh0UGFnZVNpemVzID0gMTAwO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZG9TZWFyY2hRdWVyeShxdWVyeTogU2VhcmNoUXVlcnkpOiBQcm9taXNlPFF1ZXJ5UmVzcG9uc2U+IHtcbiAgY29uc3QgZHMgPSAoYXdhaXQgZ2V0RGF0YVNvdXJjZVNydigpLmdldCgnLS0gR3JhZmFuYSAtLScpKSBhcyBHcmFmYW5hRGF0YXNvdXJjZTtcbiAgY29uc3QgdGFyZ2V0ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIHJlZklkOiAnQScsXG4gICAgcXVlcnlUeXBlOiBHcmFmYW5hUXVlcnlUeXBlLlNlYXJjaCxcbiAgICBxdWVyeTogcXVlcnkucXVlcnkgPz8gJyonLFxuICAgIGxpbWl0OiBmaXJzdFBhZ2VTaXplLFxuICB9O1xuICBjb25zdCByc3AgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgIGRzLnF1ZXJ5KHtcbiAgICAgIHRhcmdldHM6IFt0YXJnZXRdLFxuICAgIH0gYXMgYW55KVxuICApO1xuXG4gIGNvbnN0IGZpcnN0ID0gKHJzcC5kYXRhPy5bMF0gYXMgRGF0YUZyYW1lKSA/PyB7IGZpZWxkczogW10sIGxlbmd0aDogMCB9O1xuICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpcnN0LmZpZWxkcykge1xuICAgIGZpZWxkLmRpc3BsYXkgPSBnZXREaXNwbGF5UHJvY2Vzc29yKHsgZmllbGQsIHRoZW1lOiBjb25maWcudGhlbWUyIH0pO1xuICB9XG5cbiAgY29uc3QgbWV0YSA9IGZpcnN0Lm1ldGE/LmN1c3RvbSBhcyBTZWFyY2hSZXN1bHRNZXRhO1xuICBjb25zdCB2aWV3ID0gbmV3IERhdGFGcmFtZVZpZXc8RGFzaGJvYXJkUXVlcnlSZXN1bHQ+KGZpcnN0KTtcbiAgcmV0dXJuIHtcbiAgICB0b3RhbFJvd3M6IG1ldGEuY291bnQgPz8gZmlyc3QubGVuZ3RoLFxuICAgIHZpZXcsXG4gICAgbG9hZE1vcmVJdGVtczogYXN5bmMgKHN0YXJ0SW5kZXg6IG51bWJlciwgc3RvcEluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdMT0FEIE5FWFQgUEFHRScsIHsgc3RhcnRJbmRleCwgc3RvcEluZGV4LCBsZW5ndGg6IHZpZXcuZGF0YUZyYW1lLmxlbmd0aCB9KTtcbiAgICAgIGNvbnN0IGZyb20gPSB2aWV3LmRhdGFGcmFtZS5sZW5ndGg7XG4gICAgICBjb25zdCBsaW1pdCA9IHN0b3BJbmRleCAtIGZyb207XG4gICAgICBpZiAobGltaXQgPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZyYW1lID0gKFxuICAgICAgICBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICAgIGRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIHRhcmdldHM6IFt7IC4uLnRhcmdldCwgcmVmSWQ6ICdQYWdlJywgZmFjZXQ6IHVuZGVmaW5lZCwgZnJvbSwgbGltaXQ6IE1hdGgubWF4KGxpbWl0LCBuZXh0UGFnZVNpemVzKSB9XSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgKVxuICAgICAgKS5kYXRhPy5bMF0gYXMgRGF0YUZyYW1lO1xuXG4gICAgICBpZiAoIWZyYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdubyByZXN1bHRzJywgZnJhbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZnJhbWUuZmllbGRzLmxlbmd0aCAhPT0gdmlldy5kYXRhRnJhbWUuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW52YWxpZCBzaGFwZScsIGZyYW1lLCB2aWV3LmRhdGFGcmFtZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIHRoZSByYXcgdmFsdWVzIHRvIHRoZSBzYW1lIGFycmF5IGJ1ZmZlclxuICAgICAgY29uc3QgbGVuZ3RoID0gZnJhbWUubGVuZ3RoICsgdmlldy5kYXRhRnJhbWUubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZS5maWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gKHZpZXcuZGF0YUZyYW1lLmZpZWxkc1tpXS52YWx1ZXMgYXMgQXJyYXlWZWN0b3IpLmJ1ZmZlcjtcbiAgICAgICAgdmFsdWVzLnB1c2goLi4uZnJhbWUuZmllbGRzW2ldLnZhbHVlcy50b0FycmF5KCkpO1xuICAgICAgfVxuICAgICAgdmlldy5kYXRhRnJhbWUubGVuZ3RoID0gbGVuZ3RoO1xuXG4gICAgICAvLyBBZGQgYWxsIHRoZSBsb2NhdGlvbiBsb29rdXAgaW5mb1xuICAgICAgY29uc3Qgc3VibWV0YSA9IGZyYW1lLm1ldGE/LmN1c3RvbSBhcyBTZWFyY2hSZXN1bHRNZXRhO1xuICAgICAgaWYgKHN1Ym1ldGE/LmxvY2F0aW9uSW5mbyAmJiBtZXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHN1Ym1ldGEubG9jYXRpb25JbmZvKSkge1xuICAgICAgICAgIG1ldGEubG9jYXRpb25JbmZvW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0sXG4gICAgaXNJdGVtTG9hZGVkOiAoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIGluZGV4IDwgdmlldy5kYXRhRnJhbWUubGVuZ3RoO1xuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFRlcm1Db3VudHNGcm9tKGZyYW1lOiBEYXRhRnJhbWUpOiBUZXJtQ291bnRbXSB7XG4gIGNvbnN0IGtleXMgPSBmcmFtZS5maWVsZHNbMF0udmFsdWVzO1xuICBjb25zdCB2YWxzID0gZnJhbWUuZmllbGRzWzFdLnZhbHVlcztcbiAgY29uc3QgY291bnRzOiBUZXJtQ291bnRbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZyYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgY291bnRzLnB1c2goeyB0ZXJtOiBrZXlzLmdldChpKSwgY291bnQ6IHZhbHMuZ2V0KGkpIH0pO1xuICB9XG4gIHJldHVybiBjb3VudHM7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbmV4cG9ydCB7IGdldEdyYWZhbmFTZWFyY2hlciB9IGZyb20gJy4vc2VhcmNoZXInO1xuIiwiaW1wb3J0IHsgQmx1Z2VTZWFyY2hlciB9IGZyb20gJy4vYmx1Z2UnO1xuaW1wb3J0IHsgR3JhZmFuYVNlYXJjaGVyIH0gZnJvbSAnLi90eXBlcyc7XG5cbmxldCBzZWFyY2hlcjogR3JhZmFuYVNlYXJjaGVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JhZmFuYVNlYXJjaGVyKCk6IEdyYWZhbmFTZWFyY2hlciB7XG4gIGlmICghc2VhcmNoZXIpIHtcbiAgICBzZWFyY2hlciA9IG5ldyBCbHVnZVNlYXJjaGVyKCk7XG4gIH1cbiAgcmV0dXJuIHNlYXJjaGVyITtcbn1cbiIsImltcG9ydCB7IERhdGFRdWVyeSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTGl2ZURhdGFGaWx0ZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBRdWVyeVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBlbnVtIEdyYWZhbmFRdWVyeVR5cGUge1xuICBMaXZlTWVhc3VyZW1lbnRzID0gJ21lYXN1cmVtZW50cycsXG4gIEFubm90YXRpb25zID0gJ2Fubm90YXRpb25zJyxcblxuICAvLyBiYWNrZW5kXG4gIFJhbmRvbVdhbGsgPSAncmFuZG9tV2FsaycsXG4gIExpc3QgPSAnbGlzdCcsXG4gIFJlYWQgPSAncmVhZCcsXG4gIFNlYXJjaCA9ICdzZWFyY2gnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYWZhbmFRdWVyeSBleHRlbmRzIERhdGFRdWVyeSB7XG4gIHF1ZXJ5VHlwZTogR3JhZmFuYVF1ZXJ5VHlwZTsgLy8gUmFuZG9tV2FsayBieSBkZWZhdWx0XG4gIGNoYW5uZWw/OiBzdHJpbmc7XG4gIGZpbHRlcj86IExpdmVEYXRhRmlsdGVyO1xuICBidWZmZXI/OiBudW1iZXI7XG4gIHBhdGg/OiBzdHJpbmc7IC8vIGZvciBsaXN0IGFuZCByZWFkXG4gIHF1ZXJ5Pzogc3RyaW5nOyAvLyBmb3IgcXVlcnkgZW5kcG9pbnRcbn0gLy8gTk9URSwgcXVlcnkgd2lsbCBoYXZlIG1vcmUgZmllbGQhISFcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRRdWVyeTogR3JhZmFuYVF1ZXJ5ID0ge1xuICByZWZJZDogJ0EnLFxuICBxdWVyeVR5cGU6IEdyYWZhbmFRdWVyeVR5cGUuUmFuZG9tV2Fsayxcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQW5ub3RhdGlvbnNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZW51bSBHcmFmYW5hQW5ub3RhdGlvblR5cGUge1xuICBEYXNoYm9hcmQgPSAnZGFzaGJvYXJkJyxcbiAgVGFncyA9ICd0YWdzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5IGV4dGVuZHMgR3JhZmFuYVF1ZXJ5IHtcbiAgdHlwZTogR3JhZmFuYUFubm90YXRpb25UeXBlOyAvLyB0YWdzXG4gIGxpbWl0OiBudW1iZXI7IC8vIDEwMFxuICB0YWdzPzogc3RyaW5nW107XG4gIG1hdGNoQW55PzogYm9vbGVhbjsgLy8gQnkgZGVmYXVsdCBHcmFmYW5hIG9ubHkgc2hvd3MgYW5ub3RhdGlvbnMgdGhhdCBtYXRjaCBhbGwgdGFncyBpbiB0aGUgcXVlcnkuIEVuYWJsaW5nIHRoaXMgcmV0dXJucyBhbm5vdGF0aW9ucyB0aGF0IG1hdGNoIGFueSBvZiB0aGUgdGFncyBpbiB0aGUgcXVlcnkuXG59XG4iLCJpbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNSYW5nZVZpc2libGUoX3JlZikge1xuICB2YXIgbGFzdFJlbmRlcmVkU3RhcnRJbmRleCA9IF9yZWYubGFzdFJlbmRlcmVkU3RhcnRJbmRleCxcbiAgICAgIGxhc3RSZW5kZXJlZFN0b3BJbmRleCA9IF9yZWYubGFzdFJlbmRlcmVkU3RvcEluZGV4LFxuICAgICAgc3RhcnRJbmRleCA9IF9yZWYuc3RhcnRJbmRleCxcbiAgICAgIHN0b3BJbmRleCA9IF9yZWYuc3RvcEluZGV4O1xuXG4gIHJldHVybiAhKHN0YXJ0SW5kZXggPiBsYXN0UmVuZGVyZWRTdG9wSW5kZXggfHwgc3RvcEluZGV4IDwgbGFzdFJlbmRlcmVkU3RhcnRJbmRleCk7XG59XG5cbmZ1bmN0aW9uIHNjYW5Gb3JVbmxvYWRlZFJhbmdlcyhfcmVmKSB7XG4gIHZhciBpc0l0ZW1Mb2FkZWQgPSBfcmVmLmlzSXRlbUxvYWRlZCxcbiAgICAgIGl0ZW1Db3VudCA9IF9yZWYuaXRlbUNvdW50LFxuICAgICAgbWluaW11bUJhdGNoU2l6ZSA9IF9yZWYubWluaW11bUJhdGNoU2l6ZSxcbiAgICAgIHN0YXJ0SW5kZXggPSBfcmVmLnN0YXJ0SW5kZXgsXG4gICAgICBzdG9wSW5kZXggPSBfcmVmLnN0b3BJbmRleDtcblxuICB2YXIgdW5sb2FkZWRSYW5nZXMgPSBbXTtcblxuICB2YXIgcmFuZ2VTdGFydEluZGV4ID0gbnVsbDtcbiAgdmFyIHJhbmdlU3RvcEluZGV4ID0gbnVsbDtcblxuICBmb3IgKHZhciBfaW5kZXggPSBzdGFydEluZGV4OyBfaW5kZXggPD0gc3RvcEluZGV4OyBfaW5kZXgrKykge1xuICAgIHZhciBsb2FkZWQgPSBpc0l0ZW1Mb2FkZWQoX2luZGV4KTtcblxuICAgIGlmICghbG9hZGVkKSB7XG4gICAgICByYW5nZVN0b3BJbmRleCA9IF9pbmRleDtcbiAgICAgIGlmIChyYW5nZVN0YXJ0SW5kZXggPT09IG51bGwpIHtcbiAgICAgICAgcmFuZ2VTdGFydEluZGV4ID0gX2luZGV4O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmFuZ2VTdG9wSW5kZXggIT09IG51bGwpIHtcbiAgICAgIHVubG9hZGVkUmFuZ2VzLnB1c2gocmFuZ2VTdGFydEluZGV4LCByYW5nZVN0b3BJbmRleCk7XG5cbiAgICAgIHJhbmdlU3RhcnRJbmRleCA9IHJhbmdlU3RvcEluZGV4ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBJZiA6cmFuZ2VTdG9wSW5kZXggaXMgbm90IG51bGwgaXQgbWVhbnMgd2UgaGF2ZW4ndCByYW4gb3V0IG9mIHVubG9hZGVkIHJvd3MuXG4gIC8vIFNjYW4gZm9yd2FyZCB0byB0cnkgZmlsbGluZyBvdXIgOm1pbmltdW1CYXRjaFNpemUuXG4gIGlmIChyYW5nZVN0b3BJbmRleCAhPT0gbnVsbCkge1xuICAgIHZhciBwb3RlbnRpYWxTdG9wSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heChyYW5nZVN0b3BJbmRleCwgcmFuZ2VTdGFydEluZGV4ICsgbWluaW11bUJhdGNoU2l6ZSAtIDEpLCBpdGVtQ291bnQgLSAxKTtcblxuICAgIGZvciAodmFyIF9pbmRleDIgPSByYW5nZVN0b3BJbmRleCArIDE7IF9pbmRleDIgPD0gcG90ZW50aWFsU3RvcEluZGV4OyBfaW5kZXgyKyspIHtcbiAgICAgIGlmICghaXNJdGVtTG9hZGVkKF9pbmRleDIpKSB7XG4gICAgICAgIHJhbmdlU3RvcEluZGV4ID0gX2luZGV4MjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHVubG9hZGVkUmFuZ2VzLnB1c2gocmFuZ2VTdGFydEluZGV4LCByYW5nZVN0b3BJbmRleCk7XG4gIH1cblxuICAvLyBDaGVjayB0byBzZWUgaWYgb3VyIGZpcnN0IHJhbmdlIGVuZGVkIHByZW1hdHVyZWx5LlxuICAvLyBJbiB0aGlzIGNhc2Ugd2Ugc2hvdWxkIHNjYW4gYmFja3dhcmRzIHRvIHRyeSBmaWxsaW5nIG91ciA6bWluaW11bUJhdGNoU2l6ZS5cbiAgaWYgKHVubG9hZGVkUmFuZ2VzLmxlbmd0aCkge1xuICAgIHdoaWxlICh1bmxvYWRlZFJhbmdlc1sxXSAtIHVubG9hZGVkUmFuZ2VzWzBdICsgMSA8IG1pbmltdW1CYXRjaFNpemUgJiYgdW5sb2FkZWRSYW5nZXNbMF0gPiAwKSB7XG4gICAgICB2YXIgX2luZGV4MyA9IHVubG9hZGVkUmFuZ2VzWzBdIC0gMTtcblxuICAgICAgaWYgKCFpc0l0ZW1Mb2FkZWQoX2luZGV4MykpIHtcbiAgICAgICAgdW5sb2FkZWRSYW5nZXNbMF0gPSBfaW5kZXgzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVubG9hZGVkUmFuZ2VzO1xufVxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIEluZmluaXRlTG9hZGVyID0gZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKEluZmluaXRlTG9hZGVyLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5maW5pdGVMb2FkZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5maW5pdGVMb2FkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gSW5maW5pdGVMb2FkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJbmZpbml0ZUxvYWRlcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLl9sYXN0UmVuZGVyZWRTdGFydEluZGV4ID0gLTEsIF90aGlzLl9sYXN0UmVuZGVyZWRTdG9wSW5kZXggPSAtMSwgX3RoaXMuX21lbW9pemVkVW5sb2FkZWRSYW5nZXMgPSBbXSwgX3RoaXMuX29uSXRlbXNSZW5kZXJlZCA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIHZpc2libGVTdGFydEluZGV4ID0gX3JlZjIudmlzaWJsZVN0YXJ0SW5kZXgsXG4gICAgICAgICAgdmlzaWJsZVN0b3BJbmRleCA9IF9yZWYyLnZpc2libGVTdG9wSW5kZXg7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghaXNJbnRlZ2VyKHZpc2libGVTdGFydEluZGV4KSB8fCAhaXNJbnRlZ2VyKHZpc2libGVTdG9wSW5kZXgpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIG9uSXRlbXNSZW5kZXJlZCBzaWduYXR1cmU7IHBsZWFzZSByZWZlciB0byBJbmZpbml0ZUxvYWRlciBkb2N1bWVudGF0aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5sb2FkTW9yZVJvd3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0luZmluaXRlTG9hZGVyIFwibG9hZE1vcmVSb3dzXCIgcHJvcCBoYXMgYmVlbiByZW5hbWVkIHRvIFwibG9hZE1vcmVJdGVtc1wiLicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIF90aGlzLl9sYXN0UmVuZGVyZWRTdGFydEluZGV4ID0gdmlzaWJsZVN0YXJ0SW5kZXg7XG4gICAgICBfdGhpcy5fbGFzdFJlbmRlcmVkU3RvcEluZGV4ID0gdmlzaWJsZVN0b3BJbmRleDtcblxuICAgICAgX3RoaXMuX2Vuc3VyZVJvd3NMb2FkZWQodmlzaWJsZVN0YXJ0SW5kZXgsIHZpc2libGVTdG9wSW5kZXgpO1xuICAgIH0sIF90aGlzLl9zZXRSZWYgPSBmdW5jdGlvbiAobGlzdFJlZikge1xuICAgICAgX3RoaXMuX2xpc3RSZWYgPSBsaXN0UmVmO1xuICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhJbmZpbml0ZUxvYWRlciwgW3tcbiAgICBrZXk6ICdyZXNldGxvYWRNb3JlSXRlbXNDYWNoZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0bG9hZE1vcmVJdGVtc0NhY2hlKCkge1xuICAgICAgdmFyIGF1dG9SZWxvYWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgICB0aGlzLl9tZW1vaXplZFVubG9hZGVkUmFuZ2VzID0gW107XG5cbiAgICAgIGlmIChhdXRvUmVsb2FkKSB7XG4gICAgICAgIHRoaXMuX2Vuc3VyZVJvd3NMb2FkZWQodGhpcy5fbGFzdFJlbmRlcmVkU3RhcnRJbmRleCwgdGhpcy5fbGFzdFJlbmRlcmVkU3RvcEluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xpc3RSZWYgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBsaXN0IHJlZjsgcGxlYXNlIHJlZmVyIHRvIEluZmluaXRlTG9hZGVyIGRvY3VtZW50YXRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG5cbiAgICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICAgIG9uSXRlbXNSZW5kZXJlZDogdGhpcy5fb25JdGVtc1JlbmRlcmVkLFxuICAgICAgICByZWY6IHRoaXMuX3NldFJlZlxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2Vuc3VyZVJvd3NMb2FkZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZW5zdXJlUm93c0xvYWRlZChzdGFydEluZGV4LCBzdG9wSW5kZXgpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGlzSXRlbUxvYWRlZCA9IF9wcm9wcy5pc0l0ZW1Mb2FkZWQsXG4gICAgICAgICAgaXRlbUNvdW50ID0gX3Byb3BzLml0ZW1Db3VudCxcbiAgICAgICAgICBfcHJvcHMkbWluaW11bUJhdGNoU2kgPSBfcHJvcHMubWluaW11bUJhdGNoU2l6ZSxcbiAgICAgICAgICBtaW5pbXVtQmF0Y2hTaXplID0gX3Byb3BzJG1pbmltdW1CYXRjaFNpID09PSB1bmRlZmluZWQgPyAxMCA6IF9wcm9wcyRtaW5pbXVtQmF0Y2hTaSxcbiAgICAgICAgICBfcHJvcHMkdGhyZXNob2xkID0gX3Byb3BzLnRocmVzaG9sZCxcbiAgICAgICAgICB0aHJlc2hvbGQgPSBfcHJvcHMkdGhyZXNob2xkID09PSB1bmRlZmluZWQgPyAxNSA6IF9wcm9wcyR0aHJlc2hvbGQ7XG5cblxuICAgICAgdmFyIHVubG9hZGVkUmFuZ2VzID0gc2NhbkZvclVubG9hZGVkUmFuZ2VzKHtcbiAgICAgICAgaXNJdGVtTG9hZGVkOiBpc0l0ZW1Mb2FkZWQsXG4gICAgICAgIGl0ZW1Db3VudDogaXRlbUNvdW50LFxuICAgICAgICBtaW5pbXVtQmF0Y2hTaXplOiBtaW5pbXVtQmF0Y2hTaXplLFxuICAgICAgICBzdGFydEluZGV4OiBNYXRoLm1heCgwLCBzdGFydEluZGV4IC0gdGhyZXNob2xkKSxcbiAgICAgICAgc3RvcEluZGV4OiBNYXRoLm1pbihpdGVtQ291bnQgLSAxLCBzdG9wSW5kZXggKyB0aHJlc2hvbGQpXG4gICAgICB9KTtcblxuICAgICAgLy8gQXZvaWQgY2FsbGluZyBsb2FkLXJvd3MgdW5sZXNzIHJhbmdlIGhhcyBjaGFuZ2VkLlxuICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgYmUgc3RyaWN0bHkgbmVjZXNzYXJ5LCBidXQgaXMgbWF5YmUgbmljZSB0byBkby5cbiAgICAgIGlmICh0aGlzLl9tZW1vaXplZFVubG9hZGVkUmFuZ2VzLmxlbmd0aCAhPT0gdW5sb2FkZWRSYW5nZXMubGVuZ3RoIHx8IHRoaXMuX21lbW9pemVkVW5sb2FkZWRSYW5nZXMuc29tZShmdW5jdGlvbiAoc3RhcnRPclN0b3AsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiB1bmxvYWRlZFJhbmdlc1tpbmRleF0gIT09IHN0YXJ0T3JTdG9wO1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhpcy5fbWVtb2l6ZWRVbmxvYWRlZFJhbmdlcyA9IHVubG9hZGVkUmFuZ2VzO1xuICAgICAgICB0aGlzLl9sb2FkVW5sb2FkZWRSYW5nZXModW5sb2FkZWRSYW5nZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19sb2FkVW5sb2FkZWRSYW5nZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfbG9hZFVubG9hZGVkUmFuZ2VzKHVubG9hZGVkUmFuZ2VzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgLy8gbG9hZE1vcmVSb3dzIHdhcyByZW5hbWVkIHRvIGxvYWRNb3JlSXRlbXMgaW4gdjEuMC4zOyB3aWxsIGJlIHJlbW92ZWQgaW4gdjIuMFxuICAgICAgdmFyIGxvYWRNb3JlSXRlbXMgPSB0aGlzLnByb3BzLmxvYWRNb3JlSXRlbXMgfHwgdGhpcy5wcm9wcy5sb2FkTW9yZVJvd3M7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSB1bmxvYWRlZFJhbmdlc1tpXTtcbiAgICAgICAgdmFyIHN0b3BJbmRleCA9IHVubG9hZGVkUmFuZ2VzW2kgKyAxXTtcbiAgICAgICAgdmFyIHByb21pc2UgPSBsb2FkTW9yZUl0ZW1zKHN0YXJ0SW5kZXgsIHN0b3BJbmRleCk7XG4gICAgICAgIGlmIChwcm9taXNlICE9IG51bGwpIHtcbiAgICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVmcmVzaCB0aGUgdmlzaWJsZSByb3dzIGlmIGFueSBvZiB0aGVtIGhhdmUganVzdCBiZWVuIGxvYWRlZC5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSB0aGV5IHdpbGwgcmVtYWluIGluIHRoZWlyIHVubG9hZGVkIHZpc3VhbCBzdGF0ZS5cbiAgICAgICAgICAgIGlmIChpc1JhbmdlVmlzaWJsZSh7XG4gICAgICAgICAgICAgIGxhc3RSZW5kZXJlZFN0YXJ0SW5kZXg6IF90aGlzMi5fbGFzdFJlbmRlcmVkU3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgbGFzdFJlbmRlcmVkU3RvcEluZGV4OiBfdGhpczIuX2xhc3RSZW5kZXJlZFN0b3BJbmRleCxcbiAgICAgICAgICAgICAgc3RhcnRJbmRleDogc3RhcnRJbmRleCxcbiAgICAgICAgICAgICAgc3RvcEluZGV4OiBzdG9wSW5kZXhcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBhbiB1bm1vdW50IHdoaWxlIHByb21pc2VzIGFyZSBzdGlsbCBpbiBmbGlnaHQuXG4gICAgICAgICAgICAgIGlmIChfdGhpczIuX2xpc3RSZWYgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIFJlc2l6ZSBjYWNoZWQgcm93IHNpemVzIGZvciBWYXJpYWJsZVNpemVMaXN0LFxuICAgICAgICAgICAgICAvLyBvdGhlcndpc2UganVzdCByZS1yZW5kZXIgdGhlIGxpc3QuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMyLl9saXN0UmVmLnJlc2V0QWZ0ZXJJbmRleCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF90aGlzMi5fbGlzdFJlZi5yZXNldEFmdGVySW5kZXgoc3RhcnRJbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSEFDSyByZXNldCB0ZW1wb3JhcmlseSBjYWNoZWQgaXRlbSBzdHlsZXMgdG8gZm9yY2UgUHVyZUNvbXBvbmVudCB0byByZS1yZW5kZXIuXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBwcmV0dHkgZ3Jvc3MsIGJ1dCBJJ20gb2theSB3aXRoIGl0IGZvciBub3cuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QganVkZ2UgbWUuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczIuX2xpc3RSZWYuX2dldEl0ZW1TdHlsZUNhY2hlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpczIuX2xpc3RSZWYuX2dldEl0ZW1TdHlsZUNhY2hlKC0xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMyLl9saXN0UmVmLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmxvYWRlZFJhbmdlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBfbG9vcChpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEluZmluaXRlTG9hZGVyO1xufShQdXJlQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5maW5pdGVMb2FkZXI7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUFzeW5jIiwidXNlRGVib3VuY2UiLCJBdXRvU2l6ZXIiLCJjb25maWciLCJJbnB1dCIsInVzZVN0eWxlczIiLCJTcGlubmVyIiwiSW5saW5lU3dpdGNoIiwiSW5saW5lRmllbGRSb3ciLCJJbmxpbmVGaWVsZCIsIkJ1dHRvbiIsIlBhZ2UiLCJQcmV2aWV3c1N5c3RlbVJlcXVpcmVtZW50cyIsInVzZVNlYXJjaFF1ZXJ5IiwiZ2V0R3JhZmFuYVNlYXJjaGVyIiwiU2VhcmNoTGF5b3V0IiwiQWN0aW9uUm93IiwiZ2V0VmFsaWRRdWVyeUxheW91dCIsIkZvbGRlclZpZXciLCJNYW5hZ2VBY3Rpb25zIiwiU2VhcmNoUmVzdWx0c0dyaWQiLCJTZWFyY2hSZXN1bHRzVGFibGUiLCJuZXdTZWFyY2hTZWxlY3Rpb24iLCJ1cGRhdGVTZWFyY2hTZWxlY3Rpb24iLCJub2RlIiwiaWQiLCJ0ZXh0Iiwic3ViVGl0bGUiLCJpY29uIiwidXJsIiwiU2VhcmNoUGFnZSIsInN0eWxlcyIsImdldFN0eWxlcyIsInF1ZXJ5Iiwib25RdWVyeUNoYW5nZSIsIm9uVGFnRmlsdGVyQ2hhbmdlIiwib25EYXRhc291cmNlQ2hhbmdlIiwib25Tb3J0Q2hhbmdlIiwib25MYXlvdXRDaGFuZ2UiLCJzaG93TWFuYWdlIiwic2V0U2hvd01hbmFnZSIsInNlYXJjaFNlbGVjdGlvbiIsInNldFNlYXJjaFNlbGVjdGlvbiIsImxheW91dCIsImlzRm9sZGVycyIsIkZvbGRlcnMiLCJyZXN1bHRzIiwicXN0ciIsImxlbmd0aCIsInEiLCJ0YWdzIiwidGFnIiwiZHNfdWlkIiwiZGF0YXNvdXJjZSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2giLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm9uU2VhcmNoUXVlcnlDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJmZWF0dXJlVG9nZ2xlcyIsInBhbmVsVGl0bGVTZWFyY2giLCJ1bnN1cHBvcnRlZCIsImdldFRhZ09wdGlvbnMiLCJvblRhZ1NlbGVjdGVkIiwiU2V0IiwiYWRkIiwidG9nZ2xlU2VsZWN0aW9uIiwia2luZCIsInVpZCIsImN1cnJlbnQiLCJpc1NlbGVjdGVkIiwicmVuZGVyUmVzdWx0cyIsInRvdGFsUm93cyIsImxvYWRpbmciLCJub1Jlc3VsdHMiLCJ1bmRlZmluZWQiLCJzZWxlY3Rpb24iLCJoZWlnaHQiLCJ3aWR0aCIsInByb3BzIiwicmVzcG9uc2UiLCJzZWxlY3Rpb25Ub2dnbGUiLCJHcmlkIiwibWFpbiIsInNlYXJjaElucHV0IiwiQm9vbGVhbiIsIml0ZW1zIiwic2l6ZSIsInYiLCJMaXN0IiwidGhlbWUiLCJ2MSIsInNwYWNpbmciLCJtZCIsImNvbG9ycyIsImJnMiIsIkhvcml6b250YWxHcm91cCIsIlJhZGlvQnV0dG9uR3JvdXAiLCJDaGVja2JveCIsIlNvcnRQaWNrZXIiLCJUYWdGaWx0ZXIiLCJsYXlvdXRPcHRpb25zIiwiYXJpYUxhYmVsIiwiZGFzaGJvYXJkUHJldmlld3MiLCJwdXNoIiwic29ydCIsIm9uU3RhcnJlZEZpbHRlckNoYW5nZSIsInNob3dTdGFycmVkRmlsdGVyIiwiaGlkZUxheW91dCIsImFjdGlvblJvdyIsInJvd0NvbnRhaW5lciIsImNoZWNrYm94V3JhcHBlciIsInN0YXJyZWQiLCJkaXNwbGF5TmFtZSIsImJyZWFrcG9pbnRzIiwibGciLCJDb25maXJtTW9kYWwiLCJzdHlsZXNGYWN0b3J5IiwidXNlVGhlbWUiLCJkZWxldGVGb2xkZXJzQW5kRGFzaGJvYXJkcyIsIkNvbmZpcm1EZWxldGVNb2RhbCIsIm9uRGVsZXRlSXRlbXMiLCJpc09wZW4iLCJvbkRpc21pc3MiLCJkYXNoYm9hcmRzIiwiQXJyYXkiLCJmcm9tIiwiZ2V0IiwiZm9sZGVycyIsImZvbGRlckNvdW50IiwiZGFzaENvdW50Iiwic3VidGl0bGUiLCJkYXNoRW5kaW5nIiwiZm9sZGVyRW5kaW5nIiwiZGVsZXRlSXRlbXMiLCJ0aGVuIiwidHlwb2dyYXBoeSIsImJhc2UiLCJjeCIsInVzZUxvY2FsU3RvcmFnZSIsIkNvbGxhcHNhYmxlU2VjdGlvbiIsIkljb24iLCJnZXRTZWN0aW9uU3RvcmFnZUtleSIsInVzZVVuaXF1ZUlkIiwiU2VhcmNoSXRlbSIsIkRhc2hib2FyZFNlYXJjaEl0ZW1UeXBlIiwiRm9sZGVyU2VjdGlvbiIsInNlY3Rpb24iLCJlZGl0YWJsZSIsImdldFNlY3Rpb25IZWFkZXJTdHlsZXMiLCJzZWxlY3RlZCIsInNlY3Rpb25FeHBhbmRlZCIsInNldFNlY3Rpb25FeHBhbmRlZCIsInRpdGxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJsb2NhdGlvbiIsInJhdyIsInZpZXciLCJtYXAiLCJpdGVtIiwibmFtZSIsInVyaSIsInR5cGUiLCJEYXNoRm9sZGVyIiwiRGFzaERCIiwiaXNTdGFycmVkIiwiY2hlY2tlZCIsIm9uU2VjdGlvbkV4cGFuZCIsImxhYmVsSWQiLCJ3cmFwcGVyIiwiY29udGVudCIsImNoZWNrYm94IiwibGluayIsInNlcGFyYXRvciIsInNtIiwidGV4dFdlYWsiLCJzZWxlY3RvcnMiLCJyc3AiLCJyb3ciLCJjb21wb25lbnRzIiwiU2VhcmNoIiwidmlydHVhbGl6ZWRHcmlkSXRlbVdyYXBwZXIiLCJwYW5lbEJnIiwiYm9yZGVyMiIsInNlY3Rpb25JdGVtcyIsInNwaW5uZXIiLCJncmlkQ29udGFpbmVyIiwicmVzdWx0c0NvbnRhaW5lciIsImJnMSIsImJvcmRlcjEiLCJsaXN0TW9kZVdyYXBwZXIiLCJjb250ZXh0U3J2IiwiR0VORVJBTF9GT0xERVJfVUlEIiwiTW92ZVRvRm9sZGVyTW9kYWwiLCJmb2xkZXIiLCJjYW5TYXZlIiwiaGFzRWRpdFBlcm1pc3Npb25JbkZvbGRlcnMiLCJjYW5Nb3ZlIiwic2VsZWN0ZWRGb2xkZXJzIiwiaW5jbHVkZXNHZW5lcmFsRm9sZGVyIiwiZmluZCIsInJlc3VsdCIsImNhbkRlbGV0ZSIsImlzTW92ZU1vZGFsT3BlbiIsInNldElzTW92ZU1vZGFsT3BlbiIsImlzRGVsZXRlTW9kYWxPcGVuIiwic2V0SXNEZWxldGVNb2RhbE9wZW4iLCJvbk1vdmUiLCJvbkRlbGV0ZSIsIm9uVG9nZ2xlQWxsIiwiYWxlcnQiLCJvbk1vdmVJdGVtcyIsInNlbGVjdGVkRGFzaGJvYXJkcyIsImtleXMiLCJrIiwidmFscyIsIk1vZGFsIiwiRm9sZGVyUGlja2VyIiwidXNlQXBwTm90aWZpY2F0aW9uIiwibW92ZURhc2hib2FyZHMiLCJzZXRGb2xkZXIiLCJub3RpZnlBcHAiLCJtb3ZlVG8iLCJmb2xkZXJUaXRsZSIsInN1Y2Nlc3NDb3VudCIsImVuZGluZyIsImhlYWRlciIsIm1zZyIsInN1Y2Nlc3MiLCJ0b3RhbENvdW50IiwiYWxyZWFkeUluRm9sZGVyQ291bnQiLCJlcnJvciIsIm1vZGFsIiwiZiIsIkZpeGVkU2l6ZUdyaWQiLCJJbmZpbml0ZUxvYWRlciIsIlNlYXJjaENhcmQiLCJpdGVtUHJvcHMiLCJvblRvZ2dsZUNoZWNrZWQiLCJkIiwidCIsIml0ZW1Db3VudCIsIm51bUNvbHVtbnMiLCJNYXRoIiwiY2VpbCIsImNlbGxXaWR0aCIsImNlbGxIZWlnaHQiLCJudW1Sb3dzIiwiaXNJdGVtTG9hZGVkIiwibG9hZE1vcmVJdGVtcyIsIm9uSXRlbXNSZW5kZXJlZCIsInJlZiIsImNvbHVtbkluZGV4Iiwicm93SW5kZXgiLCJzdHlsZSIsImluZGV4IiwiZmFjYWRlIiwidXNlTWVtbyIsInVzZVRhYmxlIiwidXNlQWJzb2x1dGVMYXlvdXQiLCJGaXhlZFNpemVMaXN0IiwiVGFibGVDZWxsIiwiZ2V0VGFibGVTdHlsZXMiLCJnZW5lcmF0ZUNvbHVtbnMiLCJIRUFERVJfSEVJR0hUIiwidGFibGVTdHlsZXMiLCJtZW1vaXplZERhdGEiLCJkYXRhRnJhbWUiLCJmaWVsZHMiLCJmaWxsIiwibWVtb2l6ZWRDb2x1bW5zIiwib3B0aW9ucyIsImNvbHVtbnMiLCJkYXRhIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJSZW5kZXJSb3ciLCJ1c2VDYWxsYmFjayIsInZhbHVlcyIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiaHJlZiIsIm5vRGF0YSIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImtleSIsImhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJSb3ciLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJoZWFkZXJQcm9wcyIsImhlYWRlckNlbGwiLCJyZW5kZXIiLCJyb3dIZWlnaHQiLCJvdmVyZmxvdyIsInJvd0hvdmVyQmciLCJlbXBoYXNpemUiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsInRhYmxlIiwiY2VsbEljb24iLCJjZWxsV3JhcHBlciIsInNlY29uZGFyeSIsInR5cGVJY29uIiwieHhzIiwiZGF0YXNvdXJjZUl0ZW0iLCJpbnZhbGlkRGF0YXNvdXJjZUl0ZW0iLCJ0eXBlVGV4dCIsImxvY2F0aW9uSXRlbSIsImNoZWNrYm94SGVhZGVyIiwiaW5mb1dyYXAiLCJ0YWdMaXN0IiwiU1ZHIiwiZ2V0RGF0YVNvdXJjZVNydiIsIlRhZ0xpc3QiLCJEZWZhdWx0Q2VsbCIsIlRZUEVfQ09MVU1OX1dJRFRIIiwiREFUQVNPVVJDRV9DT0xVTU5fV0lEVEgiLCJMT0NBVElPTl9DT0xVTU5fV0lEVEgiLCJUQUdTX0NPTFVNTl9XSURUSCIsImF2YWlsYWJsZVdpZHRoIiwiYWNjZXNzIiwidWlkRmllbGQiLCJraW5kRmllbGQiLCJIZWFkZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJDZWxsIiwicCIsImhhc1VJRCIsImNlbGxQcm9wcyIsImNlbGxTdHlsZSIsImZpZWxkIiwibWF4IiwidXNlclByb3BzIiwibWFrZVR5cGVDb2x1bW4iLCJwYW5lbF90eXBlIiwibWFrZURhdGFTb3VyY2VDb2x1bW4iLCJtYWtlVGFnc0NvbHVtbiIsIm1ldGEiLCJjdXN0b20iLCJsb2NhdGlvbkluZm8iLCJwYXJ0cyIsInNwbGl0IiwiaW5mbyIsImdldEljb25Gb3JLaW5kIiwiaWNvbkNsYXNzIiwiZGF0YXNvdXJjZUl0ZW1DbGFzcyIsImludmFsaWREYXRhc291cmNlSXRlbUNsYXNzIiwic3J2IiwiZHNsaXN0IiwiaSIsInNldHRpbmdzIiwiZ2V0SW5zdGFuY2VTZXR0aW5ncyIsImxvZ29zIiwic21hbGwiLCJ0eXBlRmllbGQiLCJhY2Nlc3NvciIsInR4dCIsInBhbmVscyIsImVuZHNXaXRoIiwidGFnTGlzdENsYXNzIiwiTWFwIiwiaGFzIiwib2xkIiwidWlkcyIsImRlbGV0ZSIsInNldCIsImxhc3RWYWx1ZUZyb20iLCJEYXRhRnJhbWVWaWV3IiwiZ2V0RGlzcGxheVByb2Nlc3NvciIsIkdyYWZhbmFRdWVyeVR5cGUiLCJCbHVnZVNlYXJjaGVyIiwiZmFjZXQiLCJkb1NlYXJjaFF1ZXJ5IiwibGlzdCIsImRzIiwidGFyZ2V0IiwicmVmSWQiLCJxdWVyeVR5cGUiLCJsaW1pdCIsInRhcmdldHMiLCJmcmFtZSIsImdldFRlcm1Db3VudHNGcm9tIiwiZmlyc3RQYWdlU2l6ZSIsIm5leHRQYWdlU2l6ZXMiLCJmaXJzdCIsImRpc3BsYXkiLCJ0aGVtZTIiLCJjb3VudCIsInN0YXJ0SW5kZXgiLCJzdG9wSW5kZXgiLCJidWZmZXIiLCJ0b0FycmF5Iiwic3VibWV0YSIsIk9iamVjdCIsImVudHJpZXMiLCJjb3VudHMiLCJ0ZXJtIiwic2VhcmNoZXIiLCJkZWZhdWx0UXVlcnkiLCJSYW5kb21XYWxrIiwiR3JhZmFuYUFubm90YXRpb25UeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==