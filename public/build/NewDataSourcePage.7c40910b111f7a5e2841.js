"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4253],{

 "./public/app/features/datasources/NewDataSourcePage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( datasources_NewDataSourcePage),
  "getNavModel": () => ( getNavModel)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var hooks = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _p;









function PluginsErrorsInfo() {
  const errors = (0,hooks.UQ)();
  const {
    isLoading
  } = (0,hooks.ZV)();
  const theme = (0,grafana_ui_src.useTheme)();

  if (isLoading || errors.length === 0) {
    return null;
  }

  return (0,jsx_runtime.jsx)(grafana_ui_src.InfoBox, {
    "aria-label": src.wl.pages.PluginsList.signatureErrorNotice,
    severity: "warning",
    urlTitle: "Read more about plugin signing",
    url: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
    children: (0,jsx_runtime.jsxs)("div", {
      children: [_p || (_p = (0,jsx_runtime.jsx)("p", {
        children: "Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."
      })), "The following plugins are disabled and not shown in the list below:", (0,jsx_runtime.jsx)(grafana_ui_src.List, {
        items: errors,
        className: emotion_css_esm.css`
            list-style-type: circle;
          `,
        renderItem: error => (0,jsx_runtime.jsx)("div", {
          className: emotion_css_esm.css`
                margin-top: ${theme.spacing.sm};
              `,
          children: (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
            spacing: "sm",
            justify: "flex-start",
            align: "center",
            children: [(0,jsx_runtime.jsx)("strong", {
              children: error.pluginId
            }), (0,jsx_runtime.jsx)(grafana_ui_src.PluginSignatureBadge, {
              status: mapPluginErrorCodeToSignatureStatus(error.errorCode),
              className: emotion_css_esm.css`
                    margin-top: 0;
                  `
            })]
          })
        })
      })]
    })
  });
}

function mapPluginErrorCodeToSignatureStatus(code) {
  switch (code) {
    case grafana_data_src.PluginErrorCode.invalidSignature:
      return grafana_data_src.PluginSignatureStatus.invalid;

    case grafana_data_src.PluginErrorCode.missingSignature:
      return grafana_data_src.PluginSignatureStatus.missing;

    case grafana_data_src.PluginErrorCode.modifiedSignature:
      return grafana_data_src.PluginSignatureStatus.modified;

    default:
      return grafana_data_src.PluginSignatureStatus.missing;
  }
}
var actions = __webpack_require__("./public/app/features/datasources/state/actions.ts");
var reducers = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
var selectors = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
;
var _div, _div2, _LinkButton, _PluginsErrorsInfo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function mapStateToProps(state) {
  return {
    navModel: getNavModel(),
    plugins: (0,selectors.xo)(state.dataSources),
    searchQuery: state.dataSources.dataSourceTypeSearchQuery,
    categories: state.dataSources.categories,
    isLoading: state.dataSources.isLoadingDataSources
  };
}

const mapDispatchToProps = {
  addDataSource: actions.J_,
  loadDataSourcePlugins: actions.Kj,
  setDataSourceTypeSearchQuery: reducers.Ht
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);

class NewDataSourcePage extends react.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onDataSourceTypeClicked", plugin => {
      this.props.addDataSource(plugin);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setDataSourceTypeSearchQuery(value);
    });

    _defineProperty(this, "onLearnMoreClick", evt => {
      evt.stopPropagation();
    });
  }

  componentDidMount() {
    this.props.loadDataSourcePlugins();
  }

  renderPlugins(plugins, id) {
    if (!plugins || !plugins.length) {
      return null;
    }

    return (0,jsx_runtime.jsx)(grafana_ui_src.List, {
      items: plugins,
      className: emotion_css_esm.css`
          > li {
            margin-bottom: 2px;
          }
        `,
      getItemKey: item => item.id.toString(),
      renderItem: item => (0,jsx_runtime.jsx)(DataSourceTypeCard, {
        plugin: item,
        onClick: () => this.onDataSourceTypeClicked(item),
        onLearnMoreClick: this.onLearnMoreClick
      }),
      "aria-labelledby": id
    });
  }

  renderCategories() {
    const {
      categories
    } = this.props;
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [categories.map(category => (0,jsx_runtime.jsxs)("div", {
        className: "add-data-source-category",
        children: [(0,jsx_runtime.jsx)("div", {
          className: "add-data-source-category__header",
          id: category.id,
          children: category.title
        }), this.renderPlugins(category.plugins, category.id)]
      }, category.id)), _div || (_div = (0,jsx_runtime.jsx)("div", {
        className: "add-data-source-more",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
          variant: "secondary",
          href: "https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",
          target: "_blank",
          rel: "noopener",
          children: "Find more data source plugins on grafana.com"
        })
      }))]
    });
  }

  render() {
    const {
      navModel,
      isLoading,
      searchQuery,
      plugins
    } = this.props;
    return (0,jsx_runtime.jsx)(Page.Z, {
      navModel: navModel,
      children: (0,jsx_runtime.jsxs)(Page.Z.Contents, {
        isLoading: isLoading,
        children: [(0,jsx_runtime.jsxs)("div", {
          className: "page-action-bar",
          children: [(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
            value: searchQuery,
            onChange: this.onSearchQueryChange,
            placeholder: "Filter by name or type"
          }), _div2 || (_div2 = (0,jsx_runtime.jsx)("div", {
            className: "page-action-bar__spacer"
          })), _LinkButton || (_LinkButton = (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            href: "datasources",
            fill: "outline",
            variant: "secondary",
            icon: "arrow-left",
            children: "Cancel"
          }))]
        }), !searchQuery && (_PluginsErrorsInfo || (_PluginsErrorsInfo = (0,jsx_runtime.jsx)(PluginsErrorsInfo, {}))), (0,jsx_runtime.jsxs)("div", {
          children: [searchQuery && this.renderPlugins(plugins), !searchQuery && this.renderCategories()]
        })]
      })
    });
  }

}

const DataSourceTypeCard = props => {
  var _plugin$info, _plugin$info$links;

  const {
    plugin,
    onLearnMoreClick
  } = props;
  const isPhantom = plugin.module === 'phantom';
  const onClick = !isPhantom && !plugin.unlicensed ? props.onClick : () => {}; 

  const learnMoreLink = ((_plugin$info = plugin.info) === null || _plugin$info === void 0 ? void 0 : (_plugin$info$links = _plugin$info.links) === null || _plugin$info$links === void 0 ? void 0 : _plugin$info$links.length) > 0 ? plugin.info.links[0] : null;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  return (0,jsx_runtime.jsxs)(grafana_ui_src.Card, {
    className: (0,emotion_css_esm.cx)(styles.card, 'card-parent'),
    onClick: onClick,
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.Card.Heading, {
      className: styles.heading,
      "aria-label": src.wl.pages.AddDataSource.dataSourcePluginsV2(plugin.name),
      children: plugin.name
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Card.Figure, {
      align: "center",
      className: styles.figure,
      children: (0,jsx_runtime.jsx)("img", {
        className: styles.logo,
        src: plugin.info.logos.small,
        alt: ""
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Card.Description, {
      className: styles.description,
      children: plugin.info.description
    }), !isPhantom && (0,jsx_runtime.jsx)(grafana_ui_src.Card.Meta, {
      className: styles.meta,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.PluginSignatureBadge, {
        status: plugin.signature
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Card.Actions, {
      className: styles.actions,
      children: learnMoreLink && (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: "secondary",
        href: `${learnMoreLink.url}?utm_source=grafana_add_ds`,
        target: "_blank",
        rel: "noopener",
        onClick: onLearnMoreClick,
        icon: "external-link-alt",
        "aria-label": `${plugin.name}, learn more.`,
        children: learnMoreLink.name
      })
    })]
  });
};

function getStyles(theme) {
  return {
    heading: (0,emotion_css_esm.css)({
      fontSize: theme.v1.typography.heading.h5,
      fontWeight: 'inherit'
    }),
    figure: (0,emotion_css_esm.css)({
      width: 'inherit',
      marginRight: '0px',
      '> img': {
        width: theme.spacing(7)
      }
    }),
    meta: (0,emotion_css_esm.css)({
      marginTop: '6px',
      position: 'relative'
    }),
    description: (0,emotion_css_esm.css)({
      margin: '0px',
      fontSize: theme.typography.size.sm
    }),
    actions: (0,emotion_css_esm.css)({
      position: 'relative',
      alignSelf: 'center',
      marginTop: '0px',
      opacity: 0,
      '.card-parent:hover &, .card-parent:focus-within &': {
        opacity: 1
      }
    }),
    card: (0,emotion_css_esm.css)({
      gridTemplateAreas: `
      "Figure   Heading   Actions"
      "Figure Description Actions"
      "Figure    Meta     Actions"
      "Figure     -       Actions"`
    }),
    logo: (0,emotion_css_esm.css)({
      marginRight: theme.v1.spacing.lg,
      marginLeft: theme.v1.spacing.sm,
      width: theme.spacing(7),
      maxHeight: theme.spacing(7)
    })
  };
}

function getNavModel() {
  const main = {
    icon: 'database',
    id: 'datasource-new',
    text: 'Add data source',
    href: 'datasources/new',
    subTitle: 'Choose a data source type'
  };
  return {
    main: main,
    node: main
  };
}
 const datasources_NewDataSourcePage = (connector(NewDataSourcePage));

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