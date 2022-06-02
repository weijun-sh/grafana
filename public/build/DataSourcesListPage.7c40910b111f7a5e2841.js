"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4620],{

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

 "./public/app/features/datasources/DataSourcesListPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "DataSourcesListPage": () => ( DataSourcesListPage),
  "default": () => ( datasources_DataSourcesListPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var PageActionBar = __webpack_require__("./public/app/core/components/PageActionBar/PageActionBar.tsx");
var core = __webpack_require__("./public/app/core/core.ts");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _Tag;






const DataSourcesList = _ref => {
  let {
    dataSources,
    layoutMode
  } = _ref;
  const styles = (0,src.useStyles)(getStyles);
  return (0,jsx_runtime.jsx)("ul", {
    className: styles.list,
    children: dataSources.map(dataSource => {
      return (0,jsx_runtime.jsx)("li", {
        children: (0,jsx_runtime.jsxs)(src.Card, {
          href: `datasources/edit/${dataSource.uid}`,
          children: [(0,jsx_runtime.jsx)(src.Card.Heading, {
            children: dataSource.name
          }), (0,jsx_runtime.jsx)(src.Card.Figure, {
            children: (0,jsx_runtime.jsx)("img", {
              src: dataSource.typeLogoUrl,
              alt: "",
              height: "40px",
              width: "40px",
              className: styles.logo
            })
          }), (0,jsx_runtime.jsx)(src.Card.Meta, {
            children: [dataSource.typeName, dataSource.url, dataSource.isDefault && (_Tag || (_Tag = (0,jsx_runtime.jsx)(src.Tag, {
              name: 'default',
              colorIndex: 1
            }, "default-tag")))]
          })]
        })
      }, dataSource.id);
    })
  });
};
 const datasources_DataSourcesList = (DataSourcesList);

const getStyles = () => {
  return {
    list: (0,emotion_css_esm.css)({
      listStyle: 'none',
      display: 'grid' 

    }),
    logo: (0,emotion_css_esm.css)({
      objectFit: 'contain'
    })
  };
};
var actions = __webpack_require__("./public/app/features/datasources/state/actions.ts");
var reducers = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
var selectors = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
;
















function mapStateToProps(state) {
  return {
    navModel: (0,navModel.h)(state.navIndex, 'datasources'),
    dataSources: (0,selectors.mt)(state.dataSources),
    layoutMode: (0,selectors.pc)(state.dataSources),
    dataSourcesCount: (0,selectors.r7)(state.dataSources),
    searchQuery: (0,selectors.IO)(state.dataSources),
    hasFetched: state.dataSources.hasFetched
  };
}

const mapDispatchToProps = {
  loadDataSources: actions.bZ,
  setDataSourcesSearchQuery: reducers.zT,
  setDataSourcesLayoutMode: reducers.Dy
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);
const emptyListModel = {
  title: 'No data sources defined',
  buttonIcon: 'database',
  buttonLink: 'datasources/new',
  buttonTitle: 'Add data source',
  proTip: 'You can also define data sources through configuration files.',
  proTipLink: 'http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list',
  proTipLinkTitle: 'Learn more',
  proTipTarget: '_blank'
};
class DataSourcesListPage extends react.PureComponent {
  componentDidMount() {
    this.props.loadDataSources();
  }

  render() {
    const {
      dataSources,
      dataSourcesCount,
      navModel,
      layoutMode,
      searchQuery,
      setDataSourcesSearchQuery,
      hasFetched
    } = this.props;
    const canCreateDataSource = core.Vt.hasPermission(types.bW.DataSourcesCreate) && core.Vt.hasPermission(types.bW.DataSourcesWrite);
    const linkButton = {
      href: 'datasources/new',
      title: 'Add data source',
      disabled: !canCreateDataSource
    };
    const emptyList = Object.assign({}, emptyListModel, {
      buttonDisabled: !canCreateDataSource
    });
    return (0,jsx_runtime.jsx)(Page.Z, {
      navModel: navModel,
      children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
        isLoading: !hasFetched,
        children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [hasFetched && dataSourcesCount === 0 && (0,jsx_runtime.jsx)(EmptyListCTA.Z, Object.assign({}, emptyList)), hasFetched && dataSourcesCount > 0 && [(0,jsx_runtime.jsx)(PageActionBar.Z, {
            searchQuery: searchQuery,
            setSearchQuery: query => setDataSourcesSearchQuery(query),
            linkButton: linkButton
          }, "action-bar"), (0,jsx_runtime.jsx)(datasources_DataSourcesList, {
            dataSources: dataSources,
            layoutMode: layoutMode
          }, "list")]]
        })
      })
    });
  }

}
 const datasources_DataSourcesListPage = (connector(DataSourcesListPage));

 })

}]);