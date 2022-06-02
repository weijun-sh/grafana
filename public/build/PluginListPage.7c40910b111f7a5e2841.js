"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[94],{

 "./public/app/features/plugins/admin/components/Badges/index.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "SX": () => ( PluginDisabledBadge),
  "IF": () => ( PluginEnterpriseBadge),
  "oZ": () => ( PluginInstalledBadge),
  "xh": () => ( PluginUpdateAvailableBadge)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;




function PluginDisabledBadge(_ref) {
  let {
    error
  } = _ref;
  const tooltip = errorCodeToTooltip(error);
  return (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
    icon: "exclamation-triangle",
    text: "Disabled",
    color: "red",
    tooltip: tooltip
  });
}

function errorCodeToTooltip(error) {
  switch (error) {
    case src.PluginErrorCode.modifiedSignature:
      return 'Plugin disabled due to modified content';

    case src.PluginErrorCode.invalidSignature:
      return 'Plugin disabled due to invalid plugin signature';

    case src.PluginErrorCode.missingSignature:
      return 'Plugin disabled due to missing plugin signature';

    default:
      return `Plugin disabled due to unkown error: ${error}`;
  }
}
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
;

const getBadgeColor = theme => emotion_css_esm.css`
  background: ${theme.colors.background.primary};
  border-color: ${theme.colors.border.strong};
  color: ${theme.colors.text.secondary};
`;
;




function PluginInstalledBadge() {
  const customBadgeStyles = (0,grafana_ui_src.useStyles2)(getBadgeColor);
  return (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
    text: "Installed",
    color: "orange",
    className: customBadgeStyles
  });
}
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;
var _Badge;







function PluginEnterpriseBadge(_ref) {
  let {
    plugin
  } = _ref;
  const customBadgeStyles = (0,grafana_ui_src.useStyles2)(getBadgeColor);

  const onClick = ev => {
    ev.preventDefault();
    window.open(`https://grafana.com/grafana/plugins/${plugin.id}?utm_source=grafana_catalog_learn_more`, '_blank', 'noopener,noreferrer');
  };

  if ((0,grafana_runtime_src.featureEnabled)('enterprise.plugins')) {
    return _Badge || (_Badge = (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
      text: "Enterprise",
      color: "blue"
    }));
  }

  return (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.PluginSignatureBadge, {
      status: plugin.signature
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
      icon: "lock",
      "aria-label": "lock icon",
      text: "Enterprise",
      color: "blue",
      className: customBadgeStyles
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      size: "sm",
      fill: "text",
      icon: "external-link-alt",
      onClick: onClick,
      children: "Learn more"
    })]
  });
}
;





function PluginUpdateAvailableBadge(_ref) {
  let {
    plugin
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles); 

  if (plugin.hasUpdate && !plugin.isCore && plugin.type !== src.PluginType.renderer) {
    return (0,jsx_runtime.jsx)("p", {
      className: styles.hasUpdate,
      children: "Update available!"
    });
  }

  return null;
}
const getStyles = theme => {
  return {
    hasUpdate: emotion_css_esm.css`
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `
  };
};
;





 }),

 "./public/app/features/plugins/admin/components/PluginLogo.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "E": () => ( PluginLogo)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


function PluginLogo(_ref) {
  let {
    alt,
    className,
    src,
    height
  } = _ref;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    src: src,
    className: className,
    alt: alt,
    loading: "lazy",
    height: height
  });
}

 }),

 "./public/app/features/plugins/admin/pages/Browse.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( Browse)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var selectors_navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;




const HorizontalGroup = _ref => {
  let {
    children,
    wrap,
    className
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = getStyles(theme, wrap);
  return (0,jsx_runtime.jsx)("div", {
    className: (0,emotion_css_esm.cx)(styles.container, className),
    children: children
  });
};

const getStyles = (theme, wrap) => ({
  container: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};
    & > * {
      margin-bottom: ${theme.spacing()};
      margin-right: ${theme.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `
});
var types = __webpack_require__("./public/app/features/plugins/admin/types.ts");
var Badges = __webpack_require__("./public/app/features/plugins/admin/components/Badges/index.ts");
;
var _PluginInstalledBadge;






function PluginListItemBadges(_ref) {
  var _PluginEnterpriseBadg, _PluginUpdateAvailabl;

  let {
    plugin
  } = _ref;

  if (plugin.isEnterprise) {
    return (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      height: "auto",
      wrap: true,
      children: [_PluginEnterpriseBadg || (_PluginEnterpriseBadg = (0,jsx_runtime.jsx)(Badges.IF, {
        plugin: plugin
      })), plugin.isDisabled && (0,jsx_runtime.jsx)(Badges.SX, {
        error: plugin.error
      }), _PluginUpdateAvailabl || (_PluginUpdateAvailabl = (0,jsx_runtime.jsx)(Badges.xh, {
        plugin: plugin
      }))]
    });
  }

  return (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
    height: "auto",
    wrap: true,
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.PluginSignatureBadge, {
      status: plugin.signature
    }), plugin.isDisabled && (0,jsx_runtime.jsx)(Badges.SX, {
      error: plugin.error
    }), plugin.isInstalled && (_PluginInstalledBadge || (_PluginInstalledBadge = (0,jsx_runtime.jsx)(Badges.oZ, {}))), (0,jsx_runtime.jsx)(Badges.xh, {
      plugin: plugin
    })]
  });
}
var PluginLogo = __webpack_require__("./public/app/features/plugins/admin/components/PluginLogo.tsx");
;








const LOGO_SIZE = '48px';
function PluginListItem(_ref) {
  let {
    plugin,
    pathName,
    displayMode = types.lL.Grid
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PluginListItem_getStyles);
  const isList = displayMode === types.lL.List;
  return (0,jsx_runtime.jsxs)("a", {
    href: `${pathName}/${plugin.id}`,
    className: (0,emotion_css_esm.cx)(styles.container, {
      [styles.list]: isList
    }),
    children: [(0,jsx_runtime.jsx)(PluginLogo.E, {
      src: plugin.info.logos.small,
      className: styles.pluginLogo,
      height: LOGO_SIZE,
      alt: ""
    }), (0,jsx_runtime.jsx)("h2", {
      className: (0,emotion_css_esm.cx)(styles.name, 'plugin-name'),
      children: plugin.name
    }), (0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.cx)(styles.content, 'plugin-content'),
      children: [(0,jsx_runtime.jsxs)("p", {
        children: ["By ", plugin.orgName]
      }), (0,jsx_runtime.jsx)(PluginListItemBadges, {
        plugin: plugin
      })]
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.pluginType,
      children: plugin.type && (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: types.Co[plugin.type],
        title: `${plugin.type} plugin`
      })
    })]
  });
} 

const PluginListItem_getStyles = theme => {
  return {
    container: emotion_css_esm.css`
      display: grid;
      grid-template-columns: ${LOGO_SIZE} 1fr ${theme.spacing(3)};
      grid-template-rows: auto;
      gap: ${theme.spacing(2)};
      grid-auto-flow: row;
      background: ${theme.colors.background.secondary};
      border-radius: ${theme.shape.borderRadius()};
      padding: ${theme.spacing(3)};
      transition: ${theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
      duration: theme.transitions.duration.short
    })};

      &:hover {
        background: ${theme.colors.emphasize(theme.colors.background.secondary, 0.03)};
      }
    `,
    list: emotion_css_esm.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${theme.spacing(0, 0, 0.5, 0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,
    pluginType: emotion_css_esm.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${theme.colors.text.secondary};
    `,
    pluginLogo: emotion_css_esm.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,
    content: emotion_css_esm.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${theme.colors.text.secondary};
    `,
    name: emotion_css_esm.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${theme.typography.h4.fontSize};
      color: ${theme.colors.text.primary};
      margin: 0;
    `
  };
};
;







const PluginList = _ref => {
  let {
    plugins,
    displayMode
  } = _ref;
  const isList = displayMode === types.lL.List;
  const styles = (0,grafana_ui_src.useStyles2)(PluginList_getStyles);
  const location = (0,react_router.TH)();
  return (0,jsx_runtime.jsx)("div", {
    className: (0,emotion_css_esm.cx)(styles.container, {
      [styles.list]: isList
    }),
    "data-testid": "plugin-list",
    children: plugins.map(plugin => (0,jsx_runtime.jsx)(PluginListItem, {
      plugin: plugin,
      pathName: location.pathname,
      displayMode: displayMode
    }, plugin.id))
  });
};

const PluginList_getStyles = theme => {
  return {
    container: emotion_css_esm.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${theme.spacing(3)};
    `,
    list: emotion_css_esm.css`
      grid-template-columns: 1fr;
    `
  };
};
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
;





const useDebounceWithoutFirstRender = function (callBack) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const isFirstRender = (0,react.useRef)(true);
  const debounceDeps = [...deps, isFirstRender];
  return (0,useDebounce.Z)(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return callBack();
  }, delay, debounceDeps);
};

const SearchField = _ref => {
  let {
    value,
    onSearch
  } = _ref;
  const [query, setQuery] = (0,react.useState)(value);
  useDebounceWithoutFirstRender(() => onSearch(query !== null && query !== void 0 ? query : ''), 500, [query]);
  return (0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
    value: query,
    onKeyDown: e => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        onSearch(e.currentTarget.value);
      }
    },
    placeholder: "Search Grafana plugins",
    onChange: value => {
      setQuery(value);
    },
    width: 46
  });
};
var helpers = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
;

const useHistory = () => {
  return {
    push: _ref => {
      let {
        query
      } = _ref;
      src.locationService.partial(query);
    }
  };
};
var hooks = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
;

















function Browse(_ref) {
  let {
    route
  } = _ref;
  const location = (0,react_router.TH)();
  const locationSearch = (0,src.locationSearchToObject)(location.search);
  const navModelId = getNavModelId(route.routeName);
  const navModel = (0,es.useSelector)(state => (0,selectors_navModel.h)(state.navIndex, navModelId));
  const {
    displayMode,
    setDisplayMode
  } = (0,hooks.iY)();
  const styles = (0,grafana_ui_src.useStyles2)(Browse_getStyles);
  const history = useHistory();
  const remotePluginsAvailable = (0,hooks.y9)();
  const query = locationSearch.q || '';
  const filterBy = locationSearch.filterBy || 'installed';
  const filterByType = locationSearch.filterByType || 'all';
  const sortBy = locationSearch.sortBy || helpers.Nh.nameAsc;
  const {
    isLoading,
    error,
    plugins
  } = (0,hooks.GE)({
    query,
    filterBy,
    filterByType,
    sortBy
  });
  const filterByOptions = [{
    value: 'all',
    label: 'All'
  }, {
    value: 'installed',
    label: 'Installed'
  }];

  const onSortByChange = value => {
    history.push({
      query: {
        sortBy: value.value
      }
    });
  };

  const onFilterByChange = value => {
    history.push({
      query: {
        filterBy: value
      }
    });
  };

  const onFilterByTypeChange = value => {
    history.push({
      query: {
        filterByType: value
      }
    });
  };

  const onSearch = q => {
    history.push({
      query: {
        filterBy: 'all',
        filterByType: 'all',
        q
      }
    });
  }; 


  if (error) {
    console.error(error.message);
    return null;
  }

  return (0,jsx_runtime.jsx)(Page.T, {
    navModel: navModel,
    children: (0,jsx_runtime.jsxs)(Page.T.Contents, {
      children: [(0,jsx_runtime.jsxs)(HorizontalGroup, {
        wrap: true,
        children: [(0,jsx_runtime.jsx)(SearchField, {
          value: query,
          onSearch: onSearch
        }), (0,jsx_runtime.jsxs)(HorizontalGroup, {
          wrap: true,
          className: styles.actionBar,
          children: [(0,jsx_runtime.jsx)("div", {
            children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
              value: filterByType,
              onChange: onFilterByTypeChange,
              options: [{
                value: 'all',
                label: 'All'
              }, {
                value: 'datasource',
                label: 'Data sources'
              }, {
                value: 'panel',
                label: 'Panels'
              }, {
                value: 'app',
                label: 'Applications'
              }]
            })
          }), remotePluginsAvailable ? (0,jsx_runtime.jsx)("div", {
            children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
              value: filterBy,
              onChange: onFilterByChange,
              options: filterByOptions
            })
          }) : (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
            content: "This filter has been disabled because the Grafana server cannot access grafana.com",
            placement: "top",
            children: (0,jsx_runtime.jsx)("div", {
              children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
                disabled: true,
                value: filterBy,
                onChange: onFilterByChange,
                options: filterByOptions
              })
            })
          }), (0,jsx_runtime.jsx)("div", {
            children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
              "aria-label": "Sort Plugins List",
              width: 24,
              value: sortBy,
              onChange: onSortByChange,
              options: [{
                value: 'nameAsc',
                label: 'Sort by name (A-Z)'
              }, {
                value: 'nameDesc',
                label: 'Sort by name (Z-A)'
              }, {
                value: 'updated',
                label: 'Sort by updated date'
              }, {
                value: 'published',
                label: 'Sort by published date'
              }, {
                value: 'downloads',
                label: 'Sort by downloads'
              }]
            })
          }), (0,jsx_runtime.jsx)("div", {
            children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
              className: styles.displayAs,
              value: displayMode,
              onChange: setDisplayMode,
              options: [{
                value: types.lL.Grid,
                icon: 'table',
                description: 'Display plugins in a grid layout'
              }, {
                value: types.lL.List,
                icon: 'list-ul',
                description: 'Display plugins in list'
              }]
            })
          })]
        })]
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.listWrap,
        children: isLoading ? (0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
          className: emotion_css_esm.css`
                margin-bottom: 0;
              `,
          text: "Loading results"
        }) : (0,jsx_runtime.jsx)(PluginList, {
          plugins: plugins,
          displayMode: displayMode
        })
      })]
    })
  });
}

const Browse_getStyles = theme => ({
  actionBar: emotion_css_esm.css`
    ${theme.breakpoints.up('xl')} {
      margin-left: auto;
    }
  `,
  listWrap: emotion_css_esm.css`
    margin-top: ${theme.spacing(2)};
  `,
  displayAs: emotion_css_esm.css`
    svg {
      margin-right: 0;
    }
  `
}); 


const getNavModelId = routeName => {
  if (routeName === types.cd.HomeAdmin || routeName === types.cd.BrowseAdmin) {
    return 'admin-plugins';
  }

  return 'plugins';
};

 }),

 "./public/app/features/plugins/admin/state/hooks.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "iY": () => ( useDisplayMode),
  "bt": () => ( useFetchDetailsStatus),
  "ZV": () => ( useFetchStatus),
  "GE": () => ( useGetAllWithFilters),
  "UQ": () => ( useGetErrors),
  "bJ": () => ( useGetSingle),
  "x3": () => ( useInstall),
  "IS": () => ( useInstallStatus),
  "y9": () => ( useIsRemotePluginsAvailable),
  "S1": () => ( useUninstall),
  "wq": () => ( useUninstallStatus)
});


var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var helpers = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
var actions = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
var reducer = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");
var reselect_es = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
var types = __webpack_require__("./public/app/features/plugins/admin/types.ts");
;



const selectRoot = state => state.plugins;
const selectItems = (0,reselect_es.P1)(selectRoot, _ref => {
  let {
    items
  } = _ref;
  return items;
});
const selectDisplayMode = (0,reselect_es.P1)(selectRoot, _ref2 => {
  let {
    settings
  } = _ref2;
  return settings.displayMode;
});
const {
  selectAll: selectors_selectAll,
  selectById
} = reducer.CD.getSelectors(selectItems);

const selectInstalled = filterBy => (0,reselect_es.P1)(selectors_selectAll, plugins => plugins.filter(plugin => filterBy === 'installed' ? plugin.isInstalled : !plugin.isCore));

const findByInstallAndType = (filterBy, filterByType) => (0,reselect_es.P1)(selectInstalled(filterBy), plugins => plugins.filter(plugin => filterByType === 'all' || plugin.type === filterByType));

const findByKeyword = searchBy => (0,reselect_es.P1)(selectors_selectAll, plugins => {
  if (searchBy === '') {
    return [];
  }

  return plugins.filter(plugin => {
    const fields = [];

    if (plugin.name) {
      fields.push(plugin.name.toLowerCase());
    }

    if (plugin.orgName) {
      fields.push(plugin.orgName.toLowerCase());
    }

    return fields.some(f => f.includes(searchBy.toLowerCase()));
  });
});

const find = (searchBy, filterBy, filterByType) => (0,reselect_es.P1)(findByInstallAndType(filterBy, filterByType), findByKeyword(searchBy), (filteredPlugins, searchedPlugins) => {
  return searchBy === '' ? filteredPlugins : searchedPlugins;
});
const selectPluginErrors = (0,reselect_es.P1)(selectors_selectAll, plugins => plugins ? plugins.filter(p => Boolean(p.error)).map(p => ({
  pluginId: p.id,
  errorCode: p.error
})) : []); 

const selectRequest = actionType => (0,reselect_es.P1)(selectRoot, _ref3 => {
  let {
    requests = {}
  } = _ref3;
  return requests[actionType];
});
const selectIsRequestPending = actionType => (0,reselect_es.P1)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === types.eE.Pending);
const selectRequestError = actionType => (0,reselect_es.P1)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === types.eE.Rejected ? request === null || request === void 0 ? void 0 : request.error : null);
const selectIsRequestNotFetched = actionType => (0,reselect_es.P1)(selectRequest(actionType), request => request === undefined);
;






const useGetAllWithFilters = _ref => {
  let {
    query = '',
    filterBy = 'installed',
    filterByType = 'all',
    sortBy = helpers.Nh.nameAsc
  } = _ref;
  useFetchAll();
  const filtered = (0,es.useSelector)(find(query, filterBy, filterByType));
  const {
    isLoading,
    error
  } = useFetchStatus();
  const sortedAndFiltered = (0,helpers.AA)(filtered, sortBy);
  return {
    isLoading,
    error,
    plugins: sortedAndFiltered
  };
};
const useGetAll = () => {
  useFetchAll();
  return useSelector(selectAll);
};
const useGetSingle = id => {
  useFetchAll();
  useFetchDetails(id);
  return (0,es.useSelector)(state => selectById(state, id));
};
const useGetErrors = () => {
  useFetchAll();
  return (0,es.useSelector)(selectPluginErrors);
};
const useInstall = () => {
  const dispatch = (0,es.useDispatch)();
  return (id, version, isUpdating) => dispatch((0,actions.N9)({
    id,
    version,
    isUpdating
  }));
};
const useUninstall = () => {
  const dispatch = (0,es.useDispatch)();
  return id => dispatch((0,actions.Tz)(id));
};
const useIsRemotePluginsAvailable = () => {
  const error = (0,es.useSelector)(selectRequestError(actions.tQ.typePrefix));
  return error === null;
};
const useFetchStatus = () => {
  const isLoading = (0,es.useSelector)(selectIsRequestPending(actions.Qd.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions.Qd.typePrefix));
  return {
    isLoading,
    error
  };
};
const useFetchDetailsStatus = () => {
  const isLoading = (0,es.useSelector)(selectIsRequestPending(actions.DD.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions.DD.typePrefix));
  return {
    isLoading,
    error
  };
};
const useInstallStatus = () => {
  const isInstalling = (0,es.useSelector)(selectIsRequestPending(actions.N9.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions.N9.typePrefix));
  return {
    isInstalling,
    error
  };
};
const useUninstallStatus = () => {
  const isUninstalling = (0,es.useSelector)(selectIsRequestPending(actions.Tz.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions.Tz.typePrefix));
  return {
    isUninstalling,
    error
  };
}; 

const useFetchAll = () => {
  const dispatch = (0,es.useDispatch)();
  const isNotFetched = (0,es.useSelector)(selectIsRequestNotFetched(actions.Qd.typePrefix));
  (0,react.useEffect)(() => {
    isNotFetched && dispatch((0,actions.Qd)());
  }, []); 
};
const useFetchDetails = id => {
  const dispatch = (0,es.useDispatch)();
  const plugin = (0,es.useSelector)(state => selectById(state, id));
  const isNotFetching = !(0,es.useSelector)(selectIsRequestPending(actions.DD.typePrefix));
  const shouldFetch = isNotFetching && plugin && !plugin.details;
  (0,react.useEffect)(() => {
    shouldFetch && dispatch((0,actions.DD)(id));
  }, [plugin]); 
};
const useDisplayMode = () => {
  const dispatch = (0,es.useDispatch)();
  const displayMode = (0,es.useSelector)(selectDisplayMode);
  return {
    displayMode,
    setDisplayMode: v => dispatch((0,reducer.UC)(v))
  };
};

 })

}]);