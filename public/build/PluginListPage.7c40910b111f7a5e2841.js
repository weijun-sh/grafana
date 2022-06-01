"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[94],{

/***/ "./public/app/features/plugins/admin/components/Badges/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SX": () => (/* reexport */ PluginDisabledBadge),
  "IF": () => (/* reexport */ PluginEnterpriseBadge),
  "oZ": () => (/* reexport */ PluginInstalledBadge),
  "xh": () => (/* reexport */ PluginUpdateAvailableBadge)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx




function PluginDisabledBadge(_ref) {
  let {
    error
  } = _ref;
  const tooltip = errorCodeToTooltip(error);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
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
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/Badges/sharedStyles.ts

const getBadgeColor = theme => emotion_css_esm.css`
  background: ${theme.colors.background.primary};
  border-color: ${theme.colors.border.strong};
  color: ${theme.colors.text.secondary};
`;
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx




function PluginInstalledBadge() {
  const customBadgeStyles = (0,grafana_ui_src.useStyles2)(getBadgeColor);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
    text: "Installed",
    color: "orange",
    className: customBadgeStyles
  });
}
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx
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
    return _Badge || (_Badge = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
      text: "Enterprise",
      color: "blue"
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.PluginSignatureBadge, {
      status: plugin.signature
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
      icon: "lock",
      "aria-label": "lock icon",
      text: "Enterprise",
      color: "blue",
      className: customBadgeStyles
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      size: "sm",
      fill: "text",
      icon: "external-link-alt",
      onClick: onClick,
      children: "Learn more"
    })]
  });
}
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx





function PluginUpdateAvailableBadge(_ref) {
  let {
    plugin
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles); // Currently renderer plugins are not supported by the catalog due to complications related to installation / update / uninstall.

  if (plugin.hasUpdate && !plugin.isCore && plugin.type !== src.PluginType.renderer) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
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
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/Badges/index.ts





/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginLogo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ PluginLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


function PluginLogo(_ref) {
  let {
    alt,
    className,
    src,
    height
  } = _ref;
  // @ts-ignore - react doesn't know about loading attr.
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    src: src,
    className: className,
    alt: alt,
    loading: "lazy",
    height: height
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/pages/Browse.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Browse)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var selectors_navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/HorizontalGroup.tsx




const HorizontalGroup = _ref => {
  let {
    children,
    wrap,
    className
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = getStyles(theme, wrap);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
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
// EXTERNAL MODULE: ./public/app/features/plugins/admin/types.ts
var types = __webpack_require__("./public/app/features/plugins/admin/types.ts");
// EXTERNAL MODULE: ./public/app/features/plugins/admin/components/Badges/index.ts + 5 modules
var Badges = __webpack_require__("./public/app/features/plugins/admin/components/Badges/index.ts");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/PluginListItemBadges.tsx
var _PluginInstalledBadge;






function PluginListItemBadges(_ref) {
  var _PluginEnterpriseBadg, _PluginUpdateAvailabl;

  let {
    plugin
  } = _ref;

  if (plugin.isEnterprise) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      height: "auto",
      wrap: true,
      children: [_PluginEnterpriseBadg || (_PluginEnterpriseBadg = /*#__PURE__*/(0,jsx_runtime.jsx)(Badges/* PluginEnterpriseBadge */.IF, {
        plugin: plugin
      })), plugin.isDisabled && /*#__PURE__*/(0,jsx_runtime.jsx)(Badges/* PluginDisabledBadge */.SX, {
        error: plugin.error
      }), _PluginUpdateAvailabl || (_PluginUpdateAvailabl = /*#__PURE__*/(0,jsx_runtime.jsx)(Badges/* PluginUpdateAvailableBadge */.xh, {
        plugin: plugin
      }))]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
    height: "auto",
    wrap: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.PluginSignatureBadge, {
      status: plugin.signature
    }), plugin.isDisabled && /*#__PURE__*/(0,jsx_runtime.jsx)(Badges/* PluginDisabledBadge */.SX, {
      error: plugin.error
    }), plugin.isInstalled && (_PluginInstalledBadge || (_PluginInstalledBadge = /*#__PURE__*/(0,jsx_runtime.jsx)(Badges/* PluginInstalledBadge */.oZ, {}))), /*#__PURE__*/(0,jsx_runtime.jsx)(Badges/* PluginUpdateAvailableBadge */.xh, {
      plugin: plugin
    })]
  });
}
// EXTERNAL MODULE: ./public/app/features/plugins/admin/components/PluginLogo.tsx
var PluginLogo = __webpack_require__("./public/app/features/plugins/admin/components/PluginLogo.tsx");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/PluginListItem.tsx








const LOGO_SIZE = '48px';
function PluginListItem(_ref) {
  let {
    plugin,
    pathName,
    displayMode = types/* PluginListDisplayMode.Grid */.lL.Grid
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PluginListItem_getStyles);
  const isList = displayMode === types/* PluginListDisplayMode.List */.lL.List;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
    href: `${pathName}/${plugin.id}`,
    className: (0,emotion_css_esm.cx)(styles.container, {
      [styles.list]: isList
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PluginLogo/* PluginLogo */.E, {
      src: plugin.info.logos.small,
      className: styles.pluginLogo,
      height: LOGO_SIZE,
      alt: ""
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
      className: (0,emotion_css_esm.cx)(styles.name, 'plugin-name'),
      children: plugin.name
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.cx)(styles.content, 'plugin-content'),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        children: ["By ", plugin.orgName]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PluginListItemBadges, {
        plugin: plugin
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.pluginType,
      children: plugin.type && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: types/* PluginIconName */.Co[plugin.type],
        title: `${plugin.type} plugin`
      })
    })]
  });
} // Styles shared between the different type of list items

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
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/PluginList.tsx







const PluginList = _ref => {
  let {
    plugins,
    displayMode
  } = _ref;
  const isList = displayMode === types/* PluginListDisplayMode.List */.lL.List;
  const styles = (0,grafana_ui_src.useStyles2)(PluginList_getStyles);
  const location = (0,react_router/* useLocation */.TH)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: (0,emotion_css_esm.cx)(styles.container, {
      [styles.list]: isList
    }),
    "data-testid": "plugin-list",
    children: plugins.map(plugin => /*#__PURE__*/(0,jsx_runtime.jsx)(PluginListItem, {
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
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js + 1 modules
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/components/SearchField.tsx





// useDebounce has a bug which causes it to fire on first render. This wrapper prevents that.
// https://github.com/streamich/react-use/issues/759
const useDebounceWithoutFirstRender = function (callBack) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let deps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const isFirstRender = (0,react.useRef)(true);
  const debounceDeps = [...deps, isFirstRender];
  return (0,useDebounce/* default */.Z)(() => {
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
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
// EXTERNAL MODULE: ./public/app/features/plugins/admin/helpers.ts
var helpers = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/hooks/useHistory.tsx

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
// EXTERNAL MODULE: ./public/app/features/plugins/admin/state/hooks.ts + 1 modules
var hooks = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/pages/Browse.tsx

















function Browse(_ref) {
  let {
    route
  } = _ref;
  const location = (0,react_router/* useLocation */.TH)();
  const locationSearch = (0,src.locationSearchToObject)(location.search);
  const navModelId = getNavModelId(route.routeName);
  const navModel = (0,es.useSelector)(state => (0,selectors_navModel/* getNavModel */.h)(state.navIndex, navModelId));
  const {
    displayMode,
    setDisplayMode
  } = (0,hooks/* useDisplayMode */.iY)();
  const styles = (0,grafana_ui_src.useStyles2)(Browse_getStyles);
  const history = useHistory();
  const remotePluginsAvailable = (0,hooks/* useIsRemotePluginsAvailable */.y9)();
  const query = locationSearch.q || '';
  const filterBy = locationSearch.filterBy || 'installed';
  const filterByType = locationSearch.filterByType || 'all';
  const sortBy = locationSearch.sortBy || helpers/* Sorters.nameAsc */.Nh.nameAsc;
  const {
    isLoading,
    error,
    plugins
  } = (0,hooks/* useGetAllWithFilters */.GE)({
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
  }; // How should we handle errors?


  if (error) {
    console.error(error.message);
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* Page */.T, {
    navModel: navModel,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* Page.Contents */.T.Contents, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(HorizontalGroup, {
        wrap: true,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SearchField, {
          value: query,
          onSearch: onSearch
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(HorizontalGroup, {
          wrap: true,
          className: styles.actionBar,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
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
          }), remotePluginsAvailable ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
              value: filterBy,
              onChange: onFilterByChange,
              options: filterByOptions
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
            content: "This filter has been disabled because the Grafana server cannot access grafana.com",
            placement: "top",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
                disabled: true,
                value: filterBy,
                onChange: onFilterByChange,
                options: filterByOptions
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
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
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
              className: styles.displayAs,
              value: displayMode,
              onChange: setDisplayMode,
              options: [{
                value: types/* PluginListDisplayMode.Grid */.lL.Grid,
                icon: 'table',
                description: 'Display plugins in a grid layout'
              }, {
                value: types/* PluginListDisplayMode.List */.lL.List,
                icon: 'list-ul',
                description: 'Display plugins in list'
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.listWrap,
        children: isLoading ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
          className: emotion_css_esm.css`
                margin-bottom: 0;
              `,
          text: "Loading results"
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(PluginList, {
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
}); // Because the component is used under multiple paths (/plugins and /admin/plugins) we need to get
// the correct navModel from the store


const getNavModelId = routeName => {
  if (routeName === types/* PluginAdminRoutes.HomeAdmin */.cd.HomeAdmin || routeName === types/* PluginAdminRoutes.BrowseAdmin */.cd.BrowseAdmin) {
    return 'admin-plugins';
  }

  return 'plugins';
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iY": () => (/* binding */ useDisplayMode),
  "bt": () => (/* binding */ useFetchDetailsStatus),
  "ZV": () => (/* binding */ useFetchStatus),
  "GE": () => (/* binding */ useGetAllWithFilters),
  "UQ": () => (/* binding */ useGetErrors),
  "bJ": () => (/* binding */ useGetSingle),
  "x3": () => (/* binding */ useInstall),
  "IS": () => (/* binding */ useInstallStatus),
  "y9": () => (/* binding */ useIsRemotePluginsAvailable),
  "S1": () => (/* binding */ useUninstall),
  "wq": () => (/* binding */ useUninstallStatus)
});

// UNUSED EXPORTS: useFetchAll, useFetchDetails, useGetAll

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./public/app/features/plugins/admin/helpers.ts
var helpers = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
// EXTERNAL MODULE: ./public/app/features/plugins/admin/state/actions.ts
var actions = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/plugins/admin/state/reducer.ts
var reducer = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");
// EXTERNAL MODULE: ./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js + 1 modules
var reselect_es = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
// EXTERNAL MODULE: ./public/app/features/plugins/admin/types.ts
var types = __webpack_require__("./public/app/features/plugins/admin/types.ts");
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/state/selectors.ts



const selectRoot = state => state.plugins;
const selectItems = (0,reselect_es/* createSelector */.P1)(selectRoot, _ref => {
  let {
    items
  } = _ref;
  return items;
});
const selectDisplayMode = (0,reselect_es/* createSelector */.P1)(selectRoot, _ref2 => {
  let {
    settings
  } = _ref2;
  return settings.displayMode;
});
const {
  selectAll: selectors_selectAll,
  selectById
} = reducer/* pluginsAdapter.getSelectors */.CD.getSelectors(selectItems);

const selectInstalled = filterBy => (0,reselect_es/* createSelector */.P1)(selectors_selectAll, plugins => plugins.filter(plugin => filterBy === 'installed' ? plugin.isInstalled : !plugin.isCore));

const findByInstallAndType = (filterBy, filterByType) => (0,reselect_es/* createSelector */.P1)(selectInstalled(filterBy), plugins => plugins.filter(plugin => filterByType === 'all' || plugin.type === filterByType));

const findByKeyword = searchBy => (0,reselect_es/* createSelector */.P1)(selectors_selectAll, plugins => {
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

const find = (searchBy, filterBy, filterByType) => (0,reselect_es/* createSelector */.P1)(findByInstallAndType(filterBy, filterByType), findByKeyword(searchBy), (filteredPlugins, searchedPlugins) => {
  return searchBy === '' ? filteredPlugins : searchedPlugins;
});
const selectPluginErrors = (0,reselect_es/* createSelector */.P1)(selectors_selectAll, plugins => plugins ? plugins.filter(p => Boolean(p.error)).map(p => ({
  pluginId: p.id,
  errorCode: p.error
})) : []); // The following selectors are used to get information about the outstanding or completed plugins-related network requests.

const selectRequest = actionType => (0,reselect_es/* createSelector */.P1)(selectRoot, _ref3 => {
  let {
    requests = {}
  } = _ref3;
  return requests[actionType];
});
const selectIsRequestPending = actionType => (0,reselect_es/* createSelector */.P1)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === types/* RequestStatus.Pending */.eE.Pending);
const selectRequestError = actionType => (0,reselect_es/* createSelector */.P1)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === types/* RequestStatus.Rejected */.eE.Rejected ? request === null || request === void 0 ? void 0 : request.error : null);
const selectIsRequestNotFetched = actionType => (0,reselect_es/* createSelector */.P1)(selectRequest(actionType), request => request === undefined);
;// CONCATENATED MODULE: ./public/app/features/plugins/admin/state/hooks.ts






const useGetAllWithFilters = _ref => {
  let {
    query = '',
    filterBy = 'installed',
    filterByType = 'all',
    sortBy = helpers/* Sorters.nameAsc */.Nh.nameAsc
  } = _ref;
  useFetchAll();
  const filtered = (0,es.useSelector)(find(query, filterBy, filterByType));
  const {
    isLoading,
    error
  } = useFetchStatus();
  const sortedAndFiltered = (0,helpers/* sortPlugins */.AA)(filtered, sortBy);
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
  return (id, version, isUpdating) => dispatch((0,actions/* install */.N9)({
    id,
    version,
    isUpdating
  }));
};
const useUninstall = () => {
  const dispatch = (0,es.useDispatch)();
  return id => dispatch((0,actions/* uninstall */.Tz)(id));
};
const useIsRemotePluginsAvailable = () => {
  const error = (0,es.useSelector)(selectRequestError(actions/* fetchRemotePlugins.typePrefix */.tQ.typePrefix));
  return error === null;
};
const useFetchStatus = () => {
  const isLoading = (0,es.useSelector)(selectIsRequestPending(actions/* fetchAll.typePrefix */.Qd.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions/* fetchAll.typePrefix */.Qd.typePrefix));
  return {
    isLoading,
    error
  };
};
const useFetchDetailsStatus = () => {
  const isLoading = (0,es.useSelector)(selectIsRequestPending(actions/* fetchDetails.typePrefix */.DD.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions/* fetchDetails.typePrefix */.DD.typePrefix));
  return {
    isLoading,
    error
  };
};
const useInstallStatus = () => {
  const isInstalling = (0,es.useSelector)(selectIsRequestPending(actions/* install.typePrefix */.N9.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions/* install.typePrefix */.N9.typePrefix));
  return {
    isInstalling,
    error
  };
};
const useUninstallStatus = () => {
  const isUninstalling = (0,es.useSelector)(selectIsRequestPending(actions/* uninstall.typePrefix */.Tz.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions/* uninstall.typePrefix */.Tz.typePrefix));
  return {
    isUninstalling,
    error
  };
}; // Only fetches in case they were not fetched yet

const useFetchAll = () => {
  const dispatch = (0,es.useDispatch)();
  const isNotFetched = (0,es.useSelector)(selectIsRequestNotFetched(actions/* fetchAll.typePrefix */.Qd.typePrefix));
  (0,react.useEffect)(() => {
    isNotFetched && dispatch((0,actions/* fetchAll */.Qd)());
  }, []); // eslint-disable-line
};
const useFetchDetails = id => {
  const dispatch = (0,es.useDispatch)();
  const plugin = (0,es.useSelector)(state => selectById(state, id));
  const isNotFetching = !(0,es.useSelector)(selectIsRequestPending(actions/* fetchDetails.typePrefix */.DD.typePrefix));
  const shouldFetch = isNotFetching && plugin && !plugin.details;
  (0,react.useEffect)(() => {
    shouldFetch && dispatch((0,actions/* fetchDetails */.DD)(id));
  }, [plugin]); // eslint-disable-line
};
const useDisplayMode = () => {
  const dispatch = (0,es.useDispatch)();
  const displayMode = (0,es.useSelector)(selectDisplayMode);
  return {
    displayMode,
    setDisplayMode: v => dispatch((0,reducer/* setDisplayMode */.UC)(v))
  };
};

/***/ })

}]);