"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1281],{

 "./public/app/features/search/page/SearchPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( SearchPage)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
var index_esm = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var PreviewsSystemRequirements = __webpack_require__("./public/app/features/search/components/PreviewsSystemRequirements.tsx");
var useSearchQuery = __webpack_require__("./public/app/features/search/hooks/useSearchQuery.ts");
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var types = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
;




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

    const ds = await (0,src.getDataSourceSrv)().get('-- Grafana --');
    const target = Object.assign({}, query, {
      refId: 'A',
      queryType: types.hR.Search,
      query: (_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '*',
      facet: [{
        field: 'tag'
      }],
      limit: 1 

    });
    const data = (await (0,lastValueFrom.n)(ds.query({
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

  const ds = await (0,src.getDataSourceSrv)().get('-- Grafana --');
  const target = Object.assign({}, query, {
    refId: 'A',
    queryType: types.hR.Search,
    query: (_query$query2 = query.query) !== null && _query$query2 !== void 0 ? _query$query2 : '*',
    limit: firstPageSize
  });
  const rsp = await (0,lastValueFrom.n)(ds.query({
    targets: [target]
  }));
  const first = (_ref = (_rsp$data = rsp.data) === null || _rsp$data === void 0 ? void 0 : _rsp$data[0]) !== null && _ref !== void 0 ? _ref : {
    fields: [],
    length: 0
  };

  for (const field of first.fields) {
    field.display = (0,grafana_data_src.getDisplayProcessor)({
      field,
      theme: src.config.theme2
    });
  }

  const meta = (_first$meta = first.meta) === null || _first$meta === void 0 ? void 0 : _first$meta.custom;
  const view = new grafana_data_src.DataFrameView(first);
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

      const frame = (_await$lastValueFrom$ = (await (0,lastValueFrom.n)(ds.query({
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
      } 


      const length = frame.length + view.dataFrame.length;

      for (let i = 0; i < frame.fields.length; i++) {
        const values = view.dataFrame.fields[i].values.buffer;
        values.push(...frame.fields[i].values.toArray());
      }

      view.dataFrame.length = length; 

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
;

let searcher = undefined;
function getGrafanaSearcher() {
  if (!searcher) {
    searcher = new BlugeSearcher();
  }

  return searcher;
}
;


var search_types = __webpack_require__("./public/app/features/search/types.ts");
var SortPicker = __webpack_require__("./public/app/core/components/Select/SortPicker.tsx");
var TagFilter = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;









const layoutOptions = [{
  value: search_types.A.Folders,
  icon: 'folder',
  ariaLabel: 'View by folders'
}, {
  value: search_types.A.List,
  icon: 'list-ul',
  ariaLabel: 'View as list'
}];

if (src.config.featureToggles.dashboardPreviews) {
  layoutOptions.push({
    value: search_types.A.Grid,
    icon: 'apps',
    ariaLabel: 'Grid view'
  });
}

function getValidQueryLayout(q) {
  var _q$layout;

  const layout = (_q$layout = q.layout) !== null && _q$layout !== void 0 ? _q$layout : search_types.A.Folders; 

  if (layout === search_types.A.Folders) {
    if (q.query || q.sort) {
      return search_types.A.List;
    }
  }

  if (layout === search_types.A.Grid && !src.config.featureToggles.dashboardPreviews) {
    return search_types.A.List;
  }

  return layout;
}
const ActionRow = _ref => {
  var _query$sort;

  let {
    onLayoutChange,
    onSortChange,
    onStarredFilterChange = () => {},
    onTagFilterChange,
    getTagOptions,
    onDatasourceChange,
    query,
    showStarredFilter,
    hideLayout
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.actionRow,
    children: [(0,jsx_runtime.jsx)("div", {
      className: styles.rowContainer,
      children: (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        spacing: "md",
        width: "auto",
        children: [!hideLayout && (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          options: layoutOptions,
          onChange: onLayoutChange,
          value: getValidQueryLayout(query)
        }), (0,jsx_runtime.jsx)(SortPicker.P, {
          onChange: onSortChange,
          value: (_query$sort = query.sort) === null || _query$sort === void 0 ? void 0 : _query$sort.value
        })]
      })
    }), (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      spacing: "md",
      width: "auto",
      children: [showStarredFilter && (0,jsx_runtime.jsx)("div", {
        className: styles.checkboxWrapper,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Checkbox, {
          label: "Filter by starred",
          onChange: onStarredFilterChange,
          value: query.starred
        })
      }), query.datasource && (0,jsx_runtime.jsxs)(grafana_ui_src.Button, {
        icon: "times",
        variant: "secondary",
        onClick: () => onDatasourceChange(undefined),
        children: ["Datasource: ", query.datasource]
      }), (0,jsx_runtime.jsx)(TagFilter.D, {
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
    actionRow: emotion_css_esm.css`
      display: none;

      @media only screen and (min-width: ${theme.v1.breakpoints.md}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theme.v1.spacing.lg} 0;
        width: 100%;
      }
    `,
    rowContainer: emotion_css_esm.css`
      margin-right: ${theme.v1.spacing.md};
    `,
    checkboxWrapper: emotion_css_esm.css`
      label {
        line-height: 1.2;
      }
    `
  };
};
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var useLocalStorage = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
var utils = __webpack_require__("./public/app/features/search/utils.ts");
var useUniqueId = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
var search = __webpack_require__("./public/app/features/search/index.ts");
;
var _Icon;













const FolderSection = _ref => {
  let {
    section,
    selectionToggle,
    onTagSelected,
    selection
  } = _ref;
  const editable = selectionToggle != null;
  const theme = (0,grafana_ui_src.useTheme)();
  const styles = getSectionHeaderStyles(theme, section.selected, editable);
  const [sectionExpanded, setSectionExpanded] = (0,useLocalStorage.Z)((0,utils.tT)(section.title), false);
  const results = (0,useAsync.Z)(async () => {
    if (!sectionExpanded) {
      return Promise.resolve([]);
    }

    let query = {
      query: '*',
      kind: ['dashboard'],
      location: section.uid
    };

    if (section.title === 'Starred') {
    } else if (section.title === 'Recent') {
    }

    const raw = await getGrafanaSearcher().search(query);
    const v = raw.view.map(item => {
      var _item$tags;

      return {
        uid: item.uid,
        title: item.name,
        url: item.url,
        uri: item.url,
        type: item.kind === 'folder' ? search_types.o.DashFolder : search_types.o.DashDB,
        id: 666,
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

  const id = (0,useUniqueId.L)();
  const labelId = `section-header-label-${id}`;
  let icon = section.icon;

  if (!icon) {
    icon = sectionExpanded ? 'folder-open' : 'folder';
  }

  return (0,jsx_runtime.jsx)(grafana_ui_src.CollapsableSection, {
    isOpen: sectionExpanded !== null && sectionExpanded !== void 0 ? sectionExpanded : false,
    onToggle: onSectionExpand,
    className: styles.wrapper,
    contentClassName: styles.content,
    loading: results.loading,
    labelId: labelId,
    label: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [selectionToggle && selection && (0,jsx_runtime.jsx)("div", {
        onClick: v => console.log(v),
        className: styles.checkbox,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Checkbox, {
          value: selection(section.kind, section.uid),
          "aria-label": "Select folder"
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.icon,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: icon
        })
      }), (0,jsx_runtime.jsxs)("div", {
        className: styles.text,
        children: [(0,jsx_runtime.jsx)("span", {
          id: labelId,
          children: section.title
        }), section.url && (0,jsx_runtime.jsxs)("a", {
          href: section.url,
          className: styles.link,
          children: [(0,jsx_runtime.jsx)("span", {
            className: styles.separator,
            children: "|"
          }), " ", _Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "folder-upload"
          })), " Go to folder"]
        })]
      })]
    }),
    children: results.value && (0,jsx_runtime.jsx)("ul", {
      children: results.value.map(v => (0,jsx_runtime.jsx)(search.T2, {
        item: v,
        onTagSelected: onTagSelected
      }, v.uid))
    })
  });
};
const getSectionHeaderStyles = (0,grafana_ui_src.stylesFactory)(function (theme) {
  let selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let editable = arguments.length > 2 ? arguments[2] : undefined;
  const {
    sm
  } = theme.spacing;
  return {
    wrapper: (0,emotion_css_esm.cx)(emotion_css_esm.css`
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
    checkbox: emotion_css_esm.css`
      padding: 0 ${sm} 0 0;
    `,
    icon: emotion_css_esm.css`
      padding: 0 ${sm} 0 ${editable ? 0 : sm};
    `,
    text: emotion_css_esm.css`
      flex-grow: 1;
      line-height: 24px;
    `,
    link: emotion_css_esm.css`
      padding: 2px 10px 0;
      color: ${theme.colors.textWeak};
      opacity: 0;
      transition: opacity 150ms ease-in-out;
    `,
    separator: emotion_css_esm.css`
      margin-right: 6px;
    `,
    content: emotion_css_esm.css`
      padding-top: 0px;
      padding-bottom: 0px;
    `
  };
});
;
var _Spinner, _div;









const FolderView = _ref => {
  let {
    selection,
    selectionToggle,
    onTagSelected
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(FolderView_getStyles);
  const results = (0,useAsync.Z)(async () => {
    const rsp = await getGrafanaSearcher().search({
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
    } 
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
    return _Spinner || (_Spinner = (0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {}));
  }

  if (!results.value) {
    return _div || (_div = (0,jsx_runtime.jsx)("div", {
      children: "?"
    }));
  }

  return (0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: results.value.map(section => {
      return (0,jsx_runtime.jsx)("div", {
        "data-testid": grafana_e2e_selectors_src.wl.components.Search,
        className: styles.section,
        children: section.title && (0,jsx_runtime.jsx)(FolderSection, {
          selection: selection,
          selectionToggle: selectionToggle,
          onTagSelected: onTagSelected,
          section: section
        })
      }, section.title);
    })
  });
};

const FolderView_getStyles = theme => {
  const {
    md,
    sm
  } = theme.v1.spacing;
  return {
    virtualizedGridItemWrapper: emotion_css_esm.css`
      padding: 4px;
    `,
    wrapper: emotion_css_esm.css`
      display: flex;
      flex-direction: column;

      > ul {
        list-style: none;
      }
    `,
    section: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      background: ${theme.v1.colors.panelBg};
      border-bottom: solid 1px ${theme.v1.colors.border2};
    `,
    sectionItems: emotion_css_esm.css`
      margin: 0 24px 0 32px;
    `,
    spinner: emotion_css_esm.css`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100px;
    `,
    gridContainer: emotion_css_esm.css`
      display: grid;
      gap: ${sm};
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      margin-bottom: ${md};
    `,
    resultsContainer: emotion_css_esm.css`
      position: relative;
      flex-grow: 10;
      margin-bottom: ${md};
      background: ${theme.v1.colors.bg1};
      border: 1px solid ${theme.v1.colors.border1};
      border-radius: 3px;
      height: 100%;
    `,
    noResults: emotion_css_esm.css`
      padding: ${md};
      background: ${theme.v1.colors.bg2};
      font-style: italic;
      margin-top: ${theme.v1.spacing.md};
    `,
    listModeWrapper: emotion_css_esm.css`
      position: relative;
      height: 100%;
      padding: ${md};
    `
  };
};
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var constants = __webpack_require__("./public/app/features/search/constants.ts");
var actions = __webpack_require__("./public/app/features/manage-dashboards/state/actions.ts");
;







const ConfirmDeleteModal = _ref => {
  var _results$get, _results$get2;

  let {
    results,
    onDeleteItems,
    isOpen,
    onDismiss
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme)();
  const styles = ConfirmDeleteModal_getStyles(theme);
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
    (0,actions.Fd)(folders, dashboards).then(() => {
      onDismiss();
      onDeleteItems(folders, dashboards);
    });
  };

  return isOpen ? (0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
    isOpen: isOpen,
    title: "Delete",
    body: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [text, " ", subtitle && (0,jsx_runtime.jsx)("div", {
        className: styles.subtitle,
        children: subtitle
      })]
    }),
    confirmText: "Delete",
    onConfirm: deleteItems,
    onDismiss: onDismiss
  }) : null;
};
const ConfirmDeleteModal_getStyles = (0,grafana_ui_src.stylesFactory)(theme => {
  return {
    subtitle: emotion_css_esm.css`
      font-size: ${theme.typography.size.base};
      padding-top: ${theme.spacing.md};
    `
  };
});
var FolderPicker = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
;









const MoveToFolderModal = _ref => {
  var _results$get;

  let {
    results,
    onMoveItems,
    isOpen,
    onDismiss
  } = _ref;
  const [folder, setFolder] = (0,react.useState)(null);
  const theme = (0,grafana_ui_src.useTheme)();
  const styles = MoveToFolderModal_getStyles(theme);
  const notifyApp = (0,appNotification.iG)();
  const selectedDashboards = Array.from((_results$get = results.get('dashboard')) !== null && _results$get !== void 0 ? _results$get : []);

  const moveTo = () => {
    if (folder && selectedDashboards.length) {
      var _folder$title;

      const folderTitle = (_folder$title = folder.title) !== null && _folder$title !== void 0 ? _folder$title : 'General';
      (0,actions.ct)(selectedDashboards, folder).then(result => {
        if (result.successCount > 0) {
          const ending = result.successCount === 1 ? '' : 's';
          const header = `Dashboard${ending} Moved`;
          const msg = `${result.successCount} dashboard${ending} moved to ${folderTitle}`;
          notifyApp.success(header, msg);
        }

        if (result.totalCount === result.alreadyInFolderCount) {
          notifyApp.error('Error', `Dashboard already belongs to folder ${folderTitle}`);
        } else {
          onMoveItems(selectedDashboards, folder);
        }

        onDismiss();
      });
    }
  };

  return isOpen ? (0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
    className: styles.modal,
    title: "Choose Dashboard Folder",
    icon: "folder-plus",
    isOpen: isOpen,
    onDismiss: onDismiss,
    children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsxs)("div", {
        className: styles.content,
        children: [(0,jsx_runtime.jsxs)("p", {
          children: ["Move the ", selectedDashboards.length, " selected dashboard", selectedDashboards.length === 1 ? '' : 's', " to the following folder:"]
        }), (0,jsx_runtime.jsx)(FolderPicker.E, {
          onChange: f => setFolder(f)
        })]
      }), (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        justify: "center",
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "primary",
          onClick: moveTo,
          children: "Move"
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          onClick: onDismiss,
          children: "Cancel"
        })]
      })]
    })
  }) : null;
};
const MoveToFolderModal_getStyles = (0,grafana_ui_src.stylesFactory)(theme => {
  return {
    modal: emotion_css_esm.css`
      width: 500px;
    `,
    content: emotion_css_esm.css`
      margin-bottom: ${theme.spacing.lg};
    `
  };
});
;









function ManageActions(_ref) {
  var _items$get;

  let {
    items,
    folder
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const canSave = folder === null || folder === void 0 ? void 0 : folder.canSave;
  const hasEditPermissionInFolders = folder ? canSave : context_srv.Vt.hasEditPermissionInFolders;
  const canMove = hasEditPermissionInFolders; 

  const selectedFolders = Array.from((_items$get = items.get('folders')) !== null && _items$get !== void 0 ? _items$get : []);
  console.log({
    selectedFolders
  });
  const includesGeneralFolder = selectedFolders.find(result => result === constants.YQ);
  const canDelete = hasEditPermissionInFolders && !includesGeneralFolder;
  const [isMoveModalOpen, setIsMoveModalOpen] = (0,react.useState)(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react.useState)(false);

  const onMove = () => {
    setIsMoveModalOpen(true);
  };

  const onDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const onToggleAll = () => {
    alert('TODO, toggle all....');
  }; 


  const onMoveItems = (selectedDashboards, folder) => {
    console.log({
      selectedDashboards
    });
    console.log({
      folder
    });
    console.log('items were moved in the backend');
  }; 


  const onDeleteItems = (folders, dashboards) => {
    console.log({
      folders
    });
    console.log({
      dashboards
    });
    console.log('items were moved in the backend');
  };

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.actionRow,
    children: [(0,jsx_runtime.jsx)("div", {
      className: styles.rowContainer,
      children: (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        spacing: "md",
        width: "auto",
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Checkbox, {
          value: false,
          onClick: onToggleAll
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          disabled: !canMove,
          onClick: onMove,
          icon: "exchange-alt",
          variant: "secondary",
          children: "Move"
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          disabled: !canDelete,
          onClick: onDelete,
          icon: "trash-alt",
          variant: "destructive",
          children: "Delete"
        }), [...items.keys()].map(k => {
          const vals = items.get(k);
          return (0,jsx_runtime.jsxs)("div", {
            children: [k, " (", vals === null || vals === void 0 ? void 0 : vals.size, ")"]
          }, k);
        })]
      })
    }), (0,jsx_runtime.jsx)(ConfirmDeleteModal, {
      onDeleteItems: onDeleteItems,
      results: items,
      isOpen: isDeleteModalOpen,
      onDismiss: () => setIsDeleteModalOpen(false)
    }), (0,jsx_runtime.jsx)(MoveToFolderModal, {
      onMoveItems: onMoveItems,
      results: items,
      isOpen: isMoveModalOpen,
      onDismiss: () => setIsMoveModalOpen(false)
    })]
  });
}
var dist_index_esm = __webpack_require__("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js");
;


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

      if (false) {}

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
      if (false) {}
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

      var loadMoreItems = this.props.loadMoreItems || this.props.loadMoreRows;

      var _loop = function _loop(i) {
        var startIndex = unloadedRanges[i];
        var stopIndex = unloadedRanges[i + 1];
        var promise = loadMoreItems(startIndex, stopIndex);
        if (promise != null) {
          promise.then(function () {
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: startIndex,
              stopIndex: stopIndex
            })) {
              if (_this2._listRef == null) {
                return;
              }

              if (typeof _this2._listRef.resetAfterIndex === 'function') {
                _this2._listRef.resetAfterIndex(startIndex, true);
              } else {
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
}(react.PureComponent);

 const react_window_infinite_loader_dist_index_esm = (InfiniteLoader);

var SearchCard = __webpack_require__("./public/app/features/search/components/SearchCard.tsx");
;








const SearchResultsGrid = _ref => {
  var _response$totalRows;

  let {
    response,
    width,
    height,
    selection,
    selectionToggle,
    onTagSelected,
    onDatasourceChange
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(SearchResultsGrid_getStyles); 

  const itemProps = {
    editable: selection != null,
    onToggleChecked: item => {
      const d = item;
      const t = d.type === search_types.o.DashFolder ? 'folder' : 'dashboard';

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
  return (0,jsx_runtime.jsx)(react_window_infinite_loader_dist_index_esm, {
    isItemLoaded: response.isItemLoaded,
    itemCount: itemCount,
    loadMoreItems: response.loadMoreItems,
    children: _ref2 => {
      let {
        onItemsRendered,
        ref
      } = _ref2;
      return (0,jsx_runtime.jsx)(dist_index_esm.Ym, {
        columnCount: numColumns,
        columnWidth: cellWidth,
        rowCount: numRows,
        rowHeight: cellHeight,
        className: styles.wrapper,
        innerElementType: "ul",
        height: height,
        width: width - 2,
        children: _ref3 => {
          var _item$kind, _item$tags;

          let {
            columnIndex,
            rowIndex,
            style
          } = _ref3;
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
            type: kind === 'folder' ? search_types.o.DashFolder : search_types.o.DashDB,
            id: 666,
            isStarred: false,
            tags: (_item$tags = item.tags) !== null && _item$tags !== void 0 ? _item$tags : [],
            checked: selection ? selection(kind, item.uid) : false
          }; 

          return item ? (0,jsx_runtime.jsx)("li", {
            style: style,
            className: styles.virtualizedGridItemWrapper,
            children: (0,jsx_runtime.jsx)(SearchCard.K, Object.assign({}, itemProps, {
              item: facade
            }), item.uid)
          }) : null;
        }
      });
    }
  });
};

const SearchResultsGrid_getStyles = theme => ({
  virtualizedGridItemWrapper: emotion_css_esm.css`
    padding: 4px;
  `,
  wrapper: emotion_css_esm.css`
    display: flex;
    flex-direction: column;

    > ul {
      list-style: none;
    }
  `
});
var react_table = __webpack_require__("./.yarn/__virtual__/react-table-virtual-3932e42729/0/cache/react-table-npm-7.7.0-95e9357cd2-a679edecc7.zip/node_modules/react-table/index.js");
var TableCell = __webpack_require__("./packages/grafana-ui/src/components/Table/TableCell.tsx");
var Table_styles = __webpack_require__("./packages/grafana-ui/src/components/Table/styles.ts");
var esm = __webpack_require__("./.yarn/__virtual__/react-inlinesvg-virtual-f6307798ef/0/cache/react-inlinesvg-npm-2.3.0-9b0402e461-ea43f6ec06.zip/node_modules/react-inlinesvg/esm/index.js");
var DefaultCell = __webpack_require__("./packages/grafana-ui/src/components/Table/DefaultCell.tsx");
;








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
      Header: () => (0,jsx_runtime.jsx)("div", {
        className: styles.checkboxHeader,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Checkbox, {
          onChange: e => {
            e.stopPropagation();
            e.preventDefault();
            alert('SELECT ALL!!!');
          }
        })
      }),
      Cell: p => {
        const uid = uidField.values.get(p.row.index);
        const kind = kindField ? kindField.values.get(p.row.index) : 'dashboard'; 

        const selected = selection(kind, uid);
        const hasUID = uid != null; 

        return (0,jsx_runtime.jsx)("div", Object.assign({}, p.cellProps, {
          className: p.cellStyle,
          children: (0,jsx_runtime.jsx)("div", {
            className: styles.checkbox,
            children: (0,jsx_runtime.jsx)(grafana_ui_src.Checkbox, {
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
  } 


  width = Math.max(availableWidth * 0.2, 300);
  columns.push({
    Cell: p => {
      const name = access.name.values.get(p.row.index);
      return (0,jsx_runtime.jsx)("a", Object.assign({}, p.cellProps, {
        href: p.userProps.href,
        className: (0,emotion_css_esm.cx)(p.cellStyle, styles.cellWrapper),
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
  availableWidth -= width; 

  if (access.ds_uid && onDatasourceChange) {
    width = DATASOURCE_COLUMN_WIDTH;
    columns.push(makeDataSourceColumn(access.ds_uid, width, styles.typeIcon, styles.datasourceItem, styles.invalidDatasourceItem, onDatasourceChange));
    availableWidth -= width;
  } 


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
        return (0,jsx_runtime.jsx)("div", Object.assign({}, p.cellProps, {
          className: (0,emotion_css_esm.cx)(p.cellStyle, emotion_css_esm.css`
                padding-right: 10px;
              `),
          children: parts.map(p => {
            const info = meta.locationInfo[p];
            return info ? (0,jsx_runtime.jsxs)("a", {
              href: info.url,
              className: styles.locationItem,
              children: [(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                name: getIconForKind(info.kind)
              }), " ", info.name]
            }, p) : (0,jsx_runtime.jsx)("span", {
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
  const srv = (0,src.getDataSourceSrv)();
  return {
    id: `column-datasource`,
    field,
    Header: 'Data source',
    Cell: p => {
      const dslist = field.values.get(p.row.index);

      if (!(dslist !== null && dslist !== void 0 && dslist.length)) {
        return null;
      }

      return (0,jsx_runtime.jsx)("div", Object.assign({}, p.cellProps, {
        className: (0,emotion_css_esm.cx)(p.cellStyle, datasourceItemClass),
        children: dslist.map((v, i) => {
          var _settings$meta, _settings$meta$info, _settings$meta$info$l;

          const settings = srv.getInstanceSettings(v);
          const icon = settings === null || settings === void 0 ? void 0 : (_settings$meta = settings.meta) === null || _settings$meta === void 0 ? void 0 : (_settings$meta$info = _settings$meta.info) === null || _settings$meta$info === void 0 ? void 0 : (_settings$meta$info$l = _settings$meta$info.logos) === null || _settings$meta$info$l === void 0 ? void 0 : _settings$meta$info$l.small;

          if (icon) {
            return (0,jsx_runtime.jsxs)("span", {
              onClick: e => {
                e.stopPropagation();
                e.preventDefault();
                onDatasourceChange(settings.uid);
              },
              children: [(0,jsx_runtime.jsx)("img", {
                src: icon,
                width: 14,
                height: 14,
                title: settings.type,
                className: iconClass
              }), settings.name]
            }, i);
          }

          return (0,jsx_runtime.jsx)("span", {
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
    Cell: DefaultCell.G,
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
              const info = src.config.panels[txt];

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

      return (0,jsx_runtime.jsxs)("div", {
        className: styles.typeText,
        children: [(0,jsx_runtime.jsx)(esm.Z, {
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
        return (0,jsx_runtime.jsx)("div", Object.assign({}, p.cellProps, {
          className: p.cellStyle,
          children: _TagList || (_TagList = (0,jsx_runtime.jsx)(grafana_ui_src.TagList, {
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
;
const _excluded = ["key"],
      _excluded2 = ["key"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const HEADER_HEIGHT = 36; 

const SearchResultsTable = _ref => {
  var _response$view$fields2;

  let {
    response,
    width,
    height,
    selection,
    selectionToggle,
    onTagSelected,
    onDatasourceChange
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(SearchResultsTable_getStyles);
  const tableStyles = (0,grafana_ui_src.useStyles2)(Table_styles.V);
  const memoizedData = (0,react.useMemo)(() => {
    var _response$view;

    if (!(response !== null && response !== void 0 && (_response$view = response.view) !== null && _response$view !== void 0 && _response$view.dataFrame.fields.length)) {
      return [];
    } 


    return Array(response.totalRows).fill(0);
  }, [response]); 

  const memoizedColumns = (0,react.useMemo)(() => {
    return generateColumns(response, width, selection, selectionToggle, styles, onTagSelected, onDatasourceChange);
  }, [response, width, styles, selection, selectionToggle, onTagSelected, onDatasourceChange]);
  const options = (0,react.useMemo)(() => ({
    columns: memoizedColumns,
    data: memoizedData
  }), [memoizedColumns, memoizedData]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = (0,react_table.useTable)(options, react_table.useAbsoluteLayout);
  const RenderRow = react.useCallback(_ref2 => {
    var _response$view$fields;

    let {
      index: rowIndex,
      style
    } = _ref2;
    const row = rows[rowIndex];
    prepareRow(row);
    const url = (_response$view$fields = response.view.fields.url) === null || _response$view$fields === void 0 ? void 0 : _response$view$fields.values.get(rowIndex);
    return (0,jsx_runtime.jsx)("div", Object.assign({}, row.getRowProps({
      style
    }), {
      className: styles.rowContainer,
      children: row.cells.map((cell, index) => {
        return (0,jsx_runtime.jsx)(TableCell.p, {
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
    return (0,jsx_runtime.jsx)("div", {
      className: styles.noData,
      children: "No data"
    });
  }

  return (0,jsx_runtime.jsxs)("div", Object.assign({}, getTableProps(), {
    "aria-label": "Search result table",
    role: "table",
    children: [(0,jsx_runtime.jsx)("div", {
      children: headerGroups.map(headerGroup => {
        const _headerGroup$getHeade = headerGroup.getHeaderGroupProps(),
              {
          key
        } = _headerGroup$getHeade,
              headerGroupProps = _objectWithoutPropertiesLoose(_headerGroup$getHeade, _excluded);

        return (0,jsx_runtime.jsx)("div", Object.assign({}, headerGroupProps, {
          className: styles.headerRow,
          children: headerGroup.headers.map(column => {
            const _column$getHeaderProp = column.getHeaderProps(),
                  {
              key
            } = _column$getHeaderProp,
                  headerProps = _objectWithoutPropertiesLoose(_column$getHeaderProp, _excluded2);

            return (0,jsx_runtime.jsx)("div", Object.assign({}, headerProps, {
              role: "columnheader",
              className: styles.headerCell,
              children: column.render('Header')
            }), key);
          })
        }), key);
      })
    }), (0,jsx_runtime.jsx)("div", Object.assign({}, getTableBodyProps(), {
      children: (0,jsx_runtime.jsx)(react_window_infinite_loader_dist_index_esm, {
        isItemLoaded: response.isItemLoaded,
        itemCount: rows.length,
        loadMoreItems: response.loadMoreItems,
        children: _ref3 => {
          let {
            onItemsRendered,
            ref
          } = _ref3;
          return (0,jsx_runtime.jsx)(dist_index_esm.t7, {
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
          });
        }
      })
    }))]
  }));
};

const SearchResultsTable_getStyles = theme => {
  const rowHoverBg = theme.colors.emphasize(theme.colors.background.primary, 0.03);
  return {
    noData: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    `,
    table: emotion_css_esm.css`
      width: 100%;
    `,
    cellIcon: emotion_css_esm.css`
      display: flex;
      align-items: center;
    `,
    cellWrapper: emotion_css_esm.css`
      border-right: none;
      &:hover {
        box-shadow: none;
      }
    `,
    headerCell: emotion_css_esm.css`
      padding-top: 2px;
      padding-left: 10px;
    `,
    headerRow: emotion_css_esm.css`
      background-color: ${theme.colors.background.secondary};
      height: ${HEADER_HEIGHT}px;
      align-items: center;
    `,
    rowContainer: emotion_css_esm.css`
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
    typeIcon: emotion_css_esm.css`
      margin-left: 5px;
      margin-right: 9.5px;
      vertical-align: middle;
      display: inline-block;
      margin-bottom: ${theme.v1.spacing.xxs};
      fill: ${theme.colors.text.secondary};
    `,
    datasourceItem: emotion_css_esm.css`
      span {
        &:hover {
          color: ${theme.colors.text.link};
        }
      }
    `,
    invalidDatasourceItem: emotion_css_esm.css`
      color: ${theme.colors.error.main};
      text-decoration: line-through;
    `,
    typeText: emotion_css_esm.css`
      color: ${theme.colors.text.secondary};
    `,
    locationItem: emotion_css_esm.css`
      color: ${theme.colors.text.secondary};
      margin-right: 12px;
    `,
    checkboxHeader: emotion_css_esm.css`
      // display: flex;
      // justify-content: flex-start;
    `,
    checkbox: emotion_css_esm.css`
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 5px;
    `,
    infoWrap: emotion_css_esm.css`
      color: ${theme.colors.text.secondary};
      span {
        margin-right: 10px;
      }
    `,
    tagList: emotion_css_esm.css`
      justify-content: flex-start;
      flex-wrap: nowrap;
    `
  };
};
;
function newSearchSelection() {
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
  const items = old.items; 

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
;
var SearchPage_Spinner, SearchPage_div, _br, _Spinner2;




















const node = {
  id: 'search',
  text: 'Search playground',
  subTitle: 'The body below will eventually live inside existing UI layouts',
  icon: 'dashboard',
  url: 'search'
};
function SearchPage() {
  const styles = (0,grafana_ui_src.useStyles2)(SearchPage_getStyles);
  const {
    query,
    onQueryChange,
    onTagFilterChange,
    onDatasourceChange,
    onSortChange,
    onLayoutChange
  } = (0,useSearchQuery.A)({});
  const [showManage, setShowManage] = (0,react.useState)(false); 

  const [searchSelection, setSearchSelection] = (0,react.useState)(newSearchSelection());
  const layout = getValidQueryLayout(query);
  const isFolders = layout === search_types.A.Folders;
  const results = (0,useAsync.Z)(() => {
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
    return getGrafanaSearcher().search(q);
  }, [query, layout]);
  const [inputValue, setInputValue] = (0,react.useState)('');

  const onSearchQueryChange = e => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
  };

  (0,useDebounce.Z)(() => onQueryChange(inputValue), 200, [inputValue]);

  if (!src.config.featureToggles.panelTitleSearch) {
    return (0,jsx_runtime.jsx)("div", {
      className: styles.unsupported,
      children: "Unsupported"
    });
  } 


  const getTagOptions = () => {
    var _query$query;

    const q = {
      query: (_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '*',
      tags: query.tag,
      ds_uid: query.datasource
    };
    return getGrafanaSearcher().tags(q);
  };

  const onTagSelected = tag => {
    onTagFilterChange([...new Set(query.tag).add(tag)]);
  };

  const toggleSelection = (kind, uid) => {
    const current = searchSelection.isSelected(kind, uid);

    if (kind === 'folder') {
    }

    setSearchSelection(updateSearchSelection(searchSelection, !current, kind, [uid]));
  };

  const renderResults = () => {
    const value = results.value;

    if ((!value || !value.totalRows) && !isFolders) {
      if (results.loading && !value) {
        return SearchPage_Spinner || (SearchPage_Spinner = (0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {}));
      }

      return (0,jsx_runtime.jsxs)("div", {
        className: styles.noResults,
        children: [SearchPage_div || (SearchPage_div = (0,jsx_runtime.jsx)("div", {
          children: "No results found for your query."
        })), _br || (_br = (0,jsx_runtime.jsx)("br", {})), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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

    if (layout === search_types.A.Folders) {
      return (0,jsx_runtime.jsx)(FolderView, {
        selection: selection,
        selectionToggle: toggleSelection,
        onTagSelected: onTagSelected
      });
    }

    return (0,jsx_runtime.jsx)("div", {
      style: {
        height: '100%',
        width: '100%'
      },
      children: (0,jsx_runtime.jsx)(index_esm.Z, {
        children: _ref => {
          let {
            width,
            height
          } = _ref;
          const props = {
            response: value,
            selection,
            selectionToggle: toggleSelection,
            width: width,
            height: height,
            onTagSelected: onTagSelected,
            onDatasourceChange: query.datasource ? onDatasourceChange : undefined
          };

          if (layout === search_types.A.Grid) {
            return (0,jsx_runtime.jsx)(SearchResultsGrid, Object.assign({}, props));
          }

          return (0,jsx_runtime.jsx)(SearchResultsTable, Object.assign({}, props));
        }
      })
    });
  };

  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: {
      node: node,
      main: node
    },
    children: (0,jsx_runtime.jsxs)(Page.Z.Contents, {
      className: emotion_css_esm.css`
          display: flex;
          flex-direction: column;
        `,
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        value: inputValue,
        onChange: onSearchQueryChange,
        autoFocus: true,
        spellCheck: false,
        placeholder: "Search for dashboards and panels",
        className: styles.searchInput,
        suffix: results.loading ? _Spinner2 || (_Spinner2 = (0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {})) : null
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Show manage options",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
            value: showManage,
            onChange: () => setShowManage(!showManage)
          })
        })
      }), Boolean(searchSelection.items.size > 0) ? (0,jsx_runtime.jsx)(ManageActions, {
        items: searchSelection.items
      }) : (0,jsx_runtime.jsx)(ActionRow, {
        onLayoutChange: v => {
          if (v === search_types.A.Folders) {
            if (query.query) {
              onQueryChange(''); 
            }
          }

          onLayoutChange(v);
        },
        onSortChange: onSortChange,
        onTagFilterChange: onTagFilterChange,
        getTagOptions: getTagOptions,
        onDatasourceChange: onDatasourceChange,
        query: query
      }), layout === search_types.A.Grid && (0,jsx_runtime.jsx)(PreviewsSystemRequirements.R, {
        bottomSpacing: 3,
        showPreviews: true,
        onRemove: () => onLayoutChange(search_types.A.List)
      }), renderResults()]
    })
  });
}

const SearchPage_getStyles = theme => ({
  searchInput: emotion_css_esm.css`
    margin-bottom: 6px;
  `,
  unsupported: emotion_css_esm.css`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 18px;
  `,
  noResults: emotion_css_esm.css`
    padding: ${theme.v1.spacing.md};
    background: ${theme.v1.colors.bg2};
    font-style: italic;
    margin-top: ${theme.v1.spacing.md};
  `
});

 }),

 "./public/app/plugins/datasource/grafana/types.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "_$": () => ( GrafanaAnnotationType),
   "hR": () => ( GrafanaQueryType),
   "wi": () => ( defaultQuery)
 });
let GrafanaQueryType;

(function (GrafanaQueryType) {
  GrafanaQueryType["LiveMeasurements"] = "measurements";
  GrafanaQueryType["Annotations"] = "annotations";
  GrafanaQueryType["RandomWalk"] = "randomWalk";
  GrafanaQueryType["List"] = "list";
  GrafanaQueryType["Read"] = "read";
  GrafanaQueryType["Search"] = "search";
})(GrafanaQueryType || (GrafanaQueryType = {}));

const defaultQuery = {
  refId: 'A',
  queryType: GrafanaQueryType.RandomWalk
}; 

let GrafanaAnnotationType;

(function (GrafanaAnnotationType) {
  GrafanaAnnotationType["Dashboard"] = "dashboard";
  GrafanaAnnotationType["Tags"] = "tags";
})(GrafanaAnnotationType || (GrafanaAnnotationType = {}));

 })

}]);