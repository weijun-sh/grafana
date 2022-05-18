"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TestStuffPage"],{

/***/ "./public/app/core/components/PluginHelp/PluginHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginHelp": () => (/* binding */ PluginHelp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _h2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PluginHelp extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isError: false,
      isLoading: false,
      help: ''
    });

    _defineProperty(this, "loadHelp", () => {
      const {
        plugin,
        type
      } = this.props;
      this.setState({
        isLoading: true
      });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get(`/api/plugins/${plugin.id}/markdown/${type}`).then(response => {
        const helpHtml = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.renderMarkdown)(response);

        if (response === '' && type === 'help') {
          this.setState({
            isError: false,
            isLoading: false,
            help: this.constructPlaceholderInfo()
          });
        } else {
          this.setState({
            isError: false,
            isLoading: false,
            help: helpHtml
          });
        }
      }).catch(() => {
        this.setState({
          isError: true,
          isLoading: false
        });
      });
    });
  }

  componentDidMount() {
    this.loadHelp();
  }

  constructPlaceholderInfo() {
    return 'No plugin help or readme markdown file was found';
  }

  render() {
    const {
      type
    } = this.props;
    const {
      isError,
      isLoading,
      help
    } = this.state;

    if (isLoading) {
      return _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
        children: "Loading help..."
      }));
    }

    if (isError) {
      return _h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        children: "'Error occurred when loading help'"
      }));
    }

    if (type === 'panel_help' && help === '') {}

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "markdown-html",
      dangerouslySetInnerHTML: {
        __html: help
      }
    });
  }

}

/***/ }),

/***/ "./public/app/features/query/components/QueryEditorRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorRows": () => (/* binding */ QueryEditorRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _QueryEditorRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class QueryEditorRows extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onRemoveQuery", query => {
      this.props.onQueriesChange(this.props.queries.filter(item => item !== query));
    });

    _defineProperty(this, "onDragStart", result => {
      const {
        queries,
        dsSettings
      } = this.props;
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)('query_row_reorder_started', {
        startIndex: result.source.index,
        numberOfQueries: queries.length,
        datasourceType: dsSettings.type
      });
    });

    _defineProperty(this, "onDragEnd", result => {
      const {
        queries,
        onQueriesChange,
        dsSettings
      } = this.props;

      if (!result || !result.destination) {
        return;
      }

      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      if (startIndex === endIndex) {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)('query_row_reorder_canceled', {
          startIndex,
          endIndex,
          numberOfQueries: queries.length,
          datasourceType: dsSettings.type
        });
        return;
      }

      const update = Array.from(queries);
      const [removed] = update.splice(startIndex, 1);
      update.splice(endIndex, 0, removed);
      onQueriesChange(update);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)('query_row_reorder_ended', {
        startIndex,
        endIndex,
        numberOfQueries: queries.length,
        datasourceType: dsSettings.type
      });
    });
  }

  onChangeQuery(query, index) {
    const {
      queries,
      onQueriesChange
    } = this.props; // update query in array

    onQueriesChange(queries.map((item, itemIndex) => {
      if (itemIndex === index) {
        return query;
      }

      return item;
    }));
  }

  onDataSourceChange(dataSource, index) {
    const {
      queries,
      onQueriesChange
    } = this.props;
    onQueriesChange(queries.map((item, itemIndex) => {
      if (itemIndex !== index) {
        return item;
      }

      const dataSourceRef = {
        type: dataSource.type,
        uid: dataSource.uid
      };

      if (item.datasource) {
        const previous = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(item.datasource);

        if ((previous === null || previous === void 0 ? void 0 : previous.type) === dataSource.type) {
          return Object.assign({}, item, {
            datasource: dataSourceRef
          });
        }
      }

      return {
        refId: item.refId,
        hide: item.hide,
        datasource: dataSourceRef
      };
    }));
  }

  render() {
    const {
      dsSettings,
      data,
      queries,
      app,
      history,
      eventBus
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.DragDropContext, {
      onDragStart: this.onDragStart,
      onDragEnd: this.onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__.Droppable, {
        droppableId: "transformations-list",
        direction: "vertical",
        children: provided => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", Object.assign({
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [queries.map((query, index) => {
              const dataSourceSettings = getDataSourceSettings(query, dsSettings);
              const onChangeDataSourceSettings = dsSettings.meta.mixed ? settings => this.onDataSourceChange(settings, index) : undefined;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_QueryEditorRow__WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
                id: query.refId,
                index: index,
                data: data,
                query: query,
                dataSource: dataSourceSettings,
                onChangeDataSource: onChangeDataSourceSettings,
                onChange: query => this.onChangeQuery(query, index),
                onRemoveQuery: this.onRemoveQuery,
                onAddQuery: this.props.onAddQuery,
                onRunQuery: this.props.onRunQueries,
                queries: queries,
                app: app,
                history: history,
                eventBus: eventBus
              }, query.refId);
            }), provided.placeholder]
          }));
        }
      })
    });
  }

}

const getDataSourceSettings = (query, groupSettings) => {
  if (!query.datasource) {
    return groupSettings;
  }

  const querySettings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasource);
  return querySettings || groupSettings;
};

/***/ }),

/***/ "./public/app/features/query/components/QueryGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryGroup": () => (/* binding */ QueryGroup)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_PluginHelp_PluginHelp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PluginHelp/PluginHelp.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/dashboard/index.ts");
/* harmony import */ var _state_updateQueries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/query/state/updateQueries.ts");
/* harmony import */ var _QueryActionComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/query/components/QueryActionComponent.ts");
/* harmony import */ var _QueryEditorRows__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/query/components/QueryEditorRows.tsx");
/* harmony import */ var _QueryGroupOptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/query/components/QueryGroupOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















class QueryGroup extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "backendSrv", app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_8__.backendSrv);

    _defineProperty(this, "dataSourceSrv", (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSrv)());

    _defineProperty(this, "querySubscription", null);

    _defineProperty(this, "state", {
      isLoadingHelp: false,
      helpContent: null,
      isPickerOpen: false,
      isAddingMixed: false,
      isHelpOpen: false,
      queries: [],
      data: {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.NotStarted,
        series: [],
        timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDefaultTimeRange)()
      }
    });

    _defineProperty(this, "onChangeDataSource", async newSettings => {
      const {
        dsSettings
      } = this.state;
      const currentDS = dsSettings ? await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSrv)().get(dsSettings.uid) : undefined;
      const nextDS = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSrv)().get(newSettings.uid);
      const queries = await (0,_state_updateQueries__WEBPACK_IMPORTED_MODULE_12__.updateQueries)(nextDS, this.state.queries, currentDS);
      const dataSource = await this.dataSourceSrv.get(newSettings.name);
      this.onChange({
        queries,
        dataSource: {
          name: newSettings.name,
          uid: newSettings.uid,
          type: newSettings.meta.id,
          default: newSettings.isDefault
        }
      });
      this.setState({
        queries,
        dataSource: dataSource,
        dsSettings: newSettings
      });
    });

    _defineProperty(this, "onAddQueryClick", () => {
      const {
        queries
      } = this.state;
      this.onQueriesChange((0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_9__.addQuery)(queries, this.newQuery()));
      this.onScrollBottom();
    });

    _defineProperty(this, "onAddExpressionClick", () => {
      this.onQueriesChange((0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_9__.addQuery)(this.state.queries, app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_10__.dataSource.newQuery()));
      this.onScrollBottom();
    });

    _defineProperty(this, "onScrollBottom", () => {
      setTimeout(() => {
        if (this.state.scrollElement) {
          this.state.scrollElement.scrollTo({
            top: 10000
          });
        }
      }, 20);
    });

    _defineProperty(this, "onUpdateAndRun", options => {
      this.props.onOptionsChange(options);
      this.props.onRunQueries();
    });

    _defineProperty(this, "onOpenHelp", () => {
      this.setState({
        isHelpOpen: true
      });
    });

    _defineProperty(this, "onCloseHelp", () => {
      this.setState({
        isHelpOpen: false
      });
    });

    _defineProperty(this, "renderMixedPicker", () => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker, {
        mixed: false,
        onChange: this.onAddMixedQuery,
        current: null,
        autoFocus: true,
        variables: true,
        onBlur: this.onMixedPickerBlur,
        openMenuOnFocus: true
      });
    });

    _defineProperty(this, "onAddMixedQuery", datasource => {
      this.onAddQuery({
        datasource: datasource.name
      });
      this.setState({
        isAddingMixed: false
      });
    });

    _defineProperty(this, "onMixedPickerBlur", () => {
      this.setState({
        isAddingMixed: false
      });
    });

    _defineProperty(this, "onAddQuery", query => {
      const {
        dsSettings,
        queries
      } = this.state;
      this.onQueriesChange((0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_9__.addQuery)(queries, query, {
        type: dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.type,
        uid: dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.uid
      }));
      this.onScrollBottom();
    });

    _defineProperty(this, "onQueriesChange", queries => {
      this.onChange({
        queries
      });
      this.setState({
        queries
      });
    });

    _defineProperty(this, "setScrollRef", scrollElement => {
      this.setState({
        scrollElement
      });
    });
  }

  async componentDidMount() {
    const {
      queryRunner,
      options
    } = this.props;
    this.querySubscription = queryRunner.getData({
      withTransforms: false,
      withFieldConfig: false
    }).subscribe({
      next: data => this.onPanelDataUpdate(data)
    });

    try {
      const ds = await this.dataSourceSrv.get(options.dataSource);
      const dsSettings = this.dataSourceSrv.getInstanceSettings(options.dataSource);
      const defaultDataSource = await this.dataSourceSrv.get();
      const datasource = ds.getRef();
      const queries = options.queries.map(q => q.datasource ? q : Object.assign({}, q, {
        datasource
      }));
      this.setState({
        queries,
        dataSource: ds,
        dsSettings,
        defaultDataSource
      });
    } catch (error) {
      console.log('failed to load data source', error);
    }
  }

  componentWillUnmount() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
      this.querySubscription = null;
    }
  }

  onPanelDataUpdate(data) {
    this.setState({
      data
    });
  }

  newQuery() {
    const {
      dsSettings,
      defaultDataSource
    } = this.state;
    const ds = !(dsSettings !== null && dsSettings !== void 0 && dsSettings.meta.mixed) ? dsSettings : defaultDataSource;
    return {
      datasource: {
        uid: ds === null || ds === void 0 ? void 0 : ds.uid,
        type: ds === null || ds === void 0 ? void 0 : ds.type
      }
    };
  }

  onChange(changedProps) {
    this.props.onOptionsChange(Object.assign({}, this.props.options, changedProps));
  }

  renderTopSection(styles) {
    const {
      onOpenQueryInspector,
      options
    } = this.props;
    const {
      dataSource,
      data
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: styles.dataSourceRow,
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFormLabel, {
          htmlFor: "data-source-picker",
          width: 'auto',
          children: "Data source"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: styles.dataSourceRowItem,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.DataSourcePicker, {
            onChange: this.onChangeDataSource,
            current: options.dataSource,
            metrics: true,
            mixed: true,
            dashboard: true,
            variables: true
          })
        }), dataSource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.dataSourceRowItem,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
              variant: "secondary",
              icon: "question-circle",
              title: "Open data source help",
              onClick: this.onOpenHelp
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.dataSourceRowItemOptions,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_QueryGroupOptions__WEBPACK_IMPORTED_MODULE_15__.QueryGroupOptionsEditor, {
              options: options,
              dataSource: dataSource,
              data: data,
              onChange: this.onUpdateAndRun
            })
          }), onOpenQueryInspector && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.dataSourceRowItem,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
              variant: "secondary",
              onClick: onOpenQueryInspector,
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryTab.queryInspectorButton,
              children: "Query inspector"
            })
          })]
        })]
      })
    });
  }

  renderQueries(dsSettings) {
    const {
      onRunQueries
    } = this.props;
    const {
      data,
      queries
    } = this.state;

    if ((0,app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_11__.isSharedDashboardQuery)(dsSettings.name)) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_11__.DashboardQueryEditor, {
        queries: queries,
        panelData: data,
        onChange: this.onQueriesChange,
        onRunQueries: onRunQueries
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryTab.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_QueryEditorRows__WEBPACK_IMPORTED_MODULE_14__.QueryEditorRows, {
        queries: queries,
        dsSettings: dsSettings,
        onQueriesChange: this.onQueriesChange,
        onAddQuery: this.onAddQuery,
        onRunQueries: onRunQueries,
        data: data
      })
    });
  }

  isExpressionsSupported(dsSettings) {
    return (dsSettings.meta.alerting || dsSettings.meta.mixed) === true;
  }

  renderExtraActions() {
    return _QueryActionComponent__WEBPACK_IMPORTED_MODULE_13__.GroupActionComponents.getAllExtraRenderAction().map((action, index) => action({
      onAddQuery: this.onAddQuery,
      onChangeDataSource: this.onChangeDataSource,
      key: index
    })).filter(Boolean);
  }

  renderAddQueryRow(dsSettings, styles) {
    const {
      isAddingMixed
    } = this.state;
    const showAddButton = !(isAddingMixed || (0,app_plugins_datasource_dashboard__WEBPACK_IMPORTED_MODULE_11__.isSharedDashboardQuery)(dsSettings.name));
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
      spacing: "md",
      align: "flex-start",
      children: [showAddButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        icon: "plus",
        onClick: this.onAddQueryClick,
        variant: "secondary",
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryTab.addQuery,
        children: "Query"
      }), app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].expressionsEnabled && this.isExpressionsSupported(dsSettings) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        icon: "plus",
        onClick: this.onAddExpressionClick,
        variant: "secondary",
        className: styles.expressionButton,
        children: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
          children: "Expression\xA0"
        }))
      }), this.renderExtraActions()]
    });
  }

  render() {
    const {
      isHelpOpen,
      dsSettings
    } = this.state;
    const styles = getStyles();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CustomScrollbar, {
      autoHeightMin: "100%",
      scrollRefCallback: this.setScrollRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: styles.innerWrapper,
        children: [this.renderTopSection(styles), dsSettings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: styles.queriesWrapper,
            children: this.renderQueries(dsSettings)
          }), this.renderAddQueryRow(dsSettings, styles), isHelpOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal, {
            title: "Data source help",
            isOpen: true,
            onDismiss: this.onCloseHelp,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(app_core_components_PluginHelp_PluginHelp__WEBPACK_IMPORTED_MODULE_6__.PluginHelp, {
              plugin: dsSettings.meta,
              type: "query_help"
            })
          })]
        })]
      })
    });
  }

}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.stylesFactory)(() => {
  const {
    theme
  } = app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"];
  return {
    innerWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      padding: ${theme.spacing.md};
    `,
    dataSourceRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin-bottom: ${theme.spacing.md};
    `,
    dataSourceRowItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing.inlineFormMargin};
    `,
    dataSourceRowItemOptions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      margin-right: ${theme.spacing.inlineFormMargin};
    `,
    queriesWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-bottom: 16px;
    `,
    expressionWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css``,
    expressionButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing.sm};
    `
  };
});

/***/ }),

/***/ "./public/app/features/query/components/QueryGroupOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryGroupOptionsEditor": () => (/* binding */ QueryGroupOptionsEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _div, _div2, _InlineFormLabel2, _InlineFormLabel3, _div3, _div4, _InlineFormLabel4, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class QueryGroupOptionsEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    var _options$timeRange6, _options$timeRange7, _options$timeRange$hi, _options$timeRange8;

    super(props);

    _defineProperty(this, "onRelativeTimeChange", event => {
      this.setState({
        timeRangeFrom: event.target.value
      });
    });

    _defineProperty(this, "onTimeShiftChange", event => {
      this.setState({
        timeRangeShift: event.target.value
      });
    });

    _defineProperty(this, "onOverrideTime", event => {
      var _options$timeRange;

      const {
        options,
        onChange
      } = this.props;
      const newValue = emptyToNull(event.target.value);
      const isValid = timeRangeValidation(newValue);

      if (isValid && ((_options$timeRange = options.timeRange) === null || _options$timeRange === void 0 ? void 0 : _options$timeRange.from) !== newValue) {
        var _options$timeRange2;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange2 = options.timeRange) !== null && _options$timeRange2 !== void 0 ? _options$timeRange2 : {}, {
            from: newValue
          })
        }));
      }

      this.setState({
        relativeTimeIsValid: isValid
      });
    });

    _defineProperty(this, "onTimeShift", event => {
      var _options$timeRange3;

      const {
        options,
        onChange
      } = this.props;
      const newValue = emptyToNull(event.target.value);
      const isValid = timeRangeValidation(newValue);

      if (isValid && ((_options$timeRange3 = options.timeRange) === null || _options$timeRange3 === void 0 ? void 0 : _options$timeRange3.shift) !== newValue) {
        var _options$timeRange4;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange4 = options.timeRange) !== null && _options$timeRange4 !== void 0 ? _options$timeRange4 : {}, {
            shift: newValue
          })
        }));
      }

      this.setState({
        timeShiftIsValid: isValid
      });
    });

    _defineProperty(this, "onToggleTimeOverride", () => {
      const {
        onChange,
        options
      } = this.props;
      this.setState({
        timeRangeHide: !this.state.timeRangeHide
      }, () => {
        var _options$timeRange5;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange5 = options.timeRange) !== null && _options$timeRange5 !== void 0 ? _options$timeRange5 : {}, {
            hide: this.state.timeRangeHide
          })
        }));
      });
    });

    _defineProperty(this, "onCacheTimeoutBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      onChange(Object.assign({}, options, {
        cacheTimeout: emptyToNull(event.target.value)
      }));
    });

    _defineProperty(this, "onMaxDataPointsBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      let maxDataPoints = parseInt(event.target.value, 10);

      if (isNaN(maxDataPoints) || maxDataPoints === 0) {
        maxDataPoints = null;
      }

      if (maxDataPoints !== options.maxDataPoints) {
        onChange(Object.assign({}, options, {
          maxDataPoints
        }));
      }
    });

    _defineProperty(this, "onMinIntervalBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      const minInterval = emptyToNull(event.target.value);

      if (minInterval !== options.minInterval) {
        onChange(Object.assign({}, options, {
          minInterval
        }));
      }
    });

    _defineProperty(this, "onOpenOptions", () => {
      this.setState({
        isOpen: true
      });
    });

    _defineProperty(this, "onCloseOptions", () => {
      this.setState({
        isOpen: false
      });
    });

    const {
      options: _options
    } = props;
    this.state = {
      timeRangeFrom: ((_options$timeRange6 = _options.timeRange) === null || _options$timeRange6 === void 0 ? void 0 : _options$timeRange6.from) || '',
      timeRangeShift: ((_options$timeRange7 = _options.timeRange) === null || _options$timeRange7 === void 0 ? void 0 : _options$timeRange7.shift) || '',
      timeRangeHide: (_options$timeRange$hi = (_options$timeRange8 = _options.timeRange) === null || _options$timeRange8 === void 0 ? void 0 : _options$timeRange8.hide) !== null && _options$timeRange$hi !== void 0 ? _options$timeRange$hi : false,
      isOpen: false,
      relativeTimeIsValid: true,
      timeShiftIsValid: true
    };
  }

  renderCacheTimeoutOption() {
    var _dataSource$meta$quer, _options$cacheTimeout;

    const {
      dataSource,
      options
    } = this.props;
    const tooltip = `If your time series store has a query cache this option can override the default cache timeout. Specify a
    numeric value in seconds.`;

    if (!((_dataSource$meta$quer = dataSource.meta.queryOptions) !== null && _dataSource$meta$quer !== void 0 && _dataSource$meta$quer.cacheTimeout)) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
          width: 9,
          tooltip: tooltip,
          children: "Cache timeout"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "text",
          className: "width-6",
          placeholder: "60",
          spellCheck: false,
          onBlur: this.onCacheTimeoutBlur,
          defaultValue: (_options$cacheTimeout = options.cacheTimeout) !== null && _options$cacheTimeout !== void 0 ? _options$cacheTimeout : ''
        })]
      })
    });
  }

  renderMaxDataPointsOption() {
    var _data$request, _options$maxDataPoint;

    const {
      data,
      options
    } = this.props;
    const realMd = (_data$request = data.request) === null || _data$request === void 0 ? void 0 : _data$request.maxDataPoints;
    const value = (_options$maxDataPoint = options.maxDataPoints) !== null && _options$maxDataPoint !== void 0 ? _options$maxDataPoint : '';
    const isAuto = value === '';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
          width: 9,
          tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
            children: "The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer."
          }),
          children: "Max data points"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "number",
          className: "width-6",
          placeholder: `${realMd}`,
          spellCheck: false,
          onBlur: this.onMaxDataPointsBlur,
          defaultValue: value
        }), isAuto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label query-segment-operator",
            children: "="
          })), _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label",
            children: "Width of panel"
          }))]
        })]
      })
    });
  }

  renderIntervalOption() {
    var _data$request2, _dataSource$interval, _options$minInterval;

    const {
      data,
      dataSource,
      options
    } = this.props;
    const realInterval = (_data$request2 = data.request) === null || _data$request2 === void 0 ? void 0 : _data$request2.interval;
    const minIntervalOnDs = (_dataSource$interval = dataSource.interval) !== null && _dataSource$interval !== void 0 ? _dataSource$interval : 'No limit';
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            width: 9,
            tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: ["A lower limit for the interval. Recommended to be set to write frequency, for example ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: "1m"
              }), ' ', "if your data is written every minute. Default value can be set in data source settings for most data sources."]
            }),
            children: "Min interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
            type: "text",
            className: "width-6",
            placeholder: `${minIntervalOnDs}`,
            spellCheck: false,
            onBlur: this.onMinIntervalBlur,
            defaultValue: (_options$minInterval = options.minInterval) !== null && _options$minInterval !== void 0 ? _options$minInterval : ''
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            width: 9,
            tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: ["The evaluated interval that is sent to data source and is used in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: "$__interval"
              }), " and", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("code", {
                children: "$__interval_ms"
              })]
            }),
            children: "Interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            width: 6,
            children: realInterval
          }), _div3 || (_div3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label query-segment-operator",
            children: "="
          })), _div4 || (_div4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-label",
            children: "Time range / max data points"
          }))]
        })
      })]
    });
  }

  renderCollapsedText(styles) {
    var _options$maxDataPoint2;

    const {
      data,
      options
    } = this.props;
    const {
      isOpen
    } = this.state;

    if (isOpen) {
      return undefined;
    }

    let mdDesc = (_options$maxDataPoint2 = options.maxDataPoints) !== null && _options$maxDataPoint2 !== void 0 ? _options$maxDataPoint2 : '';

    if (mdDesc === '' && data.request) {
      mdDesc = `auto = ${data.request.maxDataPoints}`;
    }

    let intervalDesc = options.minInterval;

    if (data.request) {
      intervalDesc = `${data.request.interval}`;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.collapsedText,
        children: ["MD = ", mdDesc]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: styles.collapsedText,
        children: ["Interval = ", intervalDesc]
      })]
    });
  }

  render() {
    const {
      timeRangeHide: hideTimeOverride,
      relativeTimeIsValid,
      timeShiftIsValid
    } = this.state;
    const {
      timeRangeFrom: relativeTime,
      timeRangeShift: timeShift,
      isOpen
    } = this.state;
    const styles = getStyles();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_4__.QueryOperationRow, {
      id: "Query options",
      index: 0,
      title: "Query options",
      headerElement: this.renderCollapsedText(styles),
      isOpen: isOpen,
      onOpen: this.onOpenOptions,
      onClose: this.onCloseOptions,
      children: [this.renderMaxDataPointsOption(), this.renderIntervalOption(), this.renderCacheTimeoutOption(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel4 || (_InlineFormLabel4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
          width: 9,
          children: "Relative time"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "text",
          className: "width-6",
          placeholder: "1h",
          onChange: this.onRelativeTimeChange,
          onBlur: this.onOverrideTime,
          invalid: !relativeTimeIsValid,
          value: relativeTime
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "gf-form-label width-9",
          children: "Time shift"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          type: "text",
          className: "width-6",
          placeholder: "1h",
          onChange: this.onTimeShiftChange,
          onBlur: this.onTimeShift,
          invalid: !timeShiftIsValid,
          value: timeShift
        })]
      }), (timeShift || relativeTime) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Hide time info",
          labelWidth: 18,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, {
            value: hideTimeOverride,
            onChange: this.onToggleTimeOverride
          })
        })
      })]
    });
  }

}

const timeRangeValidation = value => {
  if (!value) {
    return true;
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.rangeUtil.isValidTimeSpan(value);
};

const emptyToNull = value => {
  return value === '' ? null : value;
};

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(() => {
  const {
    theme
  } = app_core_config__WEBPACK_IMPORTED_MODULE_5__.config;
  return {
    collapsedText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing.md};
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.textWeak};
    `
  };
});

/***/ }),

/***/ "./public/app/features/query/state/updateQueries.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateQueries": () => (/* binding */ updateQueries)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");


async function updateQueries(nextDS, queries, currentDS) {
  let nextQueries = queries;
  const datasource = {
    type: nextDS.type,
    uid: nextDS.uid
  }; // we are changing data source type

  if ((currentDS === null || currentDS === void 0 ? void 0 : currentDS.meta.id) !== nextDS.meta.id) {
    // If changing to mixed do nothing
    if (nextDS.meta.mixed) {
      return queries;
    } // when both data sources support abstract queries
    else if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.hasQueryExportSupport)(currentDS) && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.hasQueryImportSupport)(nextDS)) {
      const abstractQueries = await currentDS.exportToAbstractQueries(queries);
      nextQueries = await nextDS.importFromAbstractQueries(abstractQueries);
    } // when datasource supports query import
    else if (currentDS && nextDS.importQueries) {
      nextQueries = await nextDS.importQueries(queries, currentDS);
    } // Otherwise clear queries
    else {
      return [{
        refId: 'A',
        datasource
      }];
    }
  }

  if (nextQueries.length === 0) {
    return [{
      refId: 'A',
      datasource
    }];
  } // Set data source on all queries except expression queries


  return nextQueries.map(query => {
    if (!(0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_1__.isExpressionReference)(query.datasource) && !nextDS.meta.mixed) {
      query.datasource = datasource;
    }

    return query;
  });
}

/***/ }),

/***/ "./public/app/features/sandbox/TestStuffPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestStuffPage": () => (/* binding */ TestStuffPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getDefaultState": () => (/* binding */ getDefaultState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/panel/components/PanelRenderer.tsx");
/* harmony import */ var _query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/query/components/QueryGroup.tsx");
/* harmony import */ var _query_state_PanelQueryRunner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/query/state/PanelQueryRunner.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













const TestStuffPage = () => {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getDefaultState());
  const {
    queryOptions,
    queryRunner
  } = state;

  const onRunQueries = () => {
    var _queryOptions$maxData;

    const timeRange = {
      from: 'now-1h',
      to: 'now'
    };
    queryRunner.run({
      queries: queryOptions.queries,
      datasource: queryOptions.dataSource,
      timezone: 'browser',
      timeRange: {
        from: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateMath.parse(timeRange.from),
        to: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateMath.parse(timeRange.to),
        raw: timeRange
      },
      maxDataPoints: (_queryOptions$maxData = queryOptions.maxDataPoints) !== null && _queryOptions$maxData !== void 0 ? _queryOptions$maxData : 100,
      minInterval: queryOptions.minInterval
    });
  };

  const onOptionsChange = queryOptions => {
    setState(Object.assign({}, state, {
      queryOptions
    }));
  };
  /**
   * Subscribe to data
   */


  const observable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => queryRunner.getData({
    withFieldConfig: true,
    withTransforms: true
  }), [queryRunner]);
  const data = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])(observable);
  const node = {
    id: 'test-page',
    text: 'Test page',
    icon: 'dashboard',
    subTitle: 'FOR TESTING!',
    url: 'sandbox/test'
  };
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.useAppNotification)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"], {
    navModel: {
      node: node,
      main: node
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__["default"].Contents, {
      children: [data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__["default"], {
        style: {
          width: '100%',
          height: '600px'
        },
        children: ({
          width
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_7__.PanelRenderer, {
              title: "Hello",
              pluginId: "timeseries",
              width: width,
              height: 300,
              data: data,
              options: {},
              fieldConfig: {
                defaults: {},
                overrides: []
              },
              timeZone: "browser"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Table, {
              data: data.series[0],
              width: width,
              height: 300
            })]
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        style: {
          marginTop: '16px',
          height: '45%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_8__.QueryGroup, {
          options: queryOptions,
          queryRunner: queryRunner,
          onRunQueries: onRunQueries,
          onOptionsChange: onOptionsChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        style: {
          display: 'flex',
          gap: '1em'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => notifyApp.success('Success toast', 'some more text goes here'),
          variant: "primary",
          children: "Success"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => notifyApp.warning('Warning toast', 'some more text goes here', 'bogus-trace-99999'),
          variant: "secondary",
          children: "Warning"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => notifyApp.error('Error toast', 'some more text goes here', 'bogus-trace-fdsfdfsfds'),
          variant: "destructive",
          children: "Error"
        })]
      })]
    })
  });
};
function getDefaultState() {
  const options = {
    fieldConfig: {
      defaults: {
        color: {
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldColorModeId.PaletteClassic
        }
      },
      overrides: []
    },
    replaceVariables: v => v,
    theme: app_core_config__WEBPACK_IMPORTED_MODULE_4__.config.theme2
  };
  const dataConfig = {
    getTransformations: () => [],
    getFieldOverrideOptions: () => options,
    getDataSupport: () => ({
      annotations: false,
      alertStates: false
    })
  };
  return {
    queryRunner: new _query_state_PanelQueryRunner__WEBPACK_IMPORTED_MODULE_9__.PanelQueryRunner(dataConfig),
    queryOptions: {
      queries: [],
      dataSource: {
        name: 'gdev-testdata'
      },
      maxDataPoints: 100
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestStuffPage);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLFlBQVksRUFBRTtBQUNadEwsTUFBQUEsT0FBTyxFQUFFLEVBREc7QUFFWnNCLE1BQUFBLFVBQVUsRUFBRTtBQUNWK0QsUUFBQUEsSUFBSSxFQUFFO0FBREksT0FGQTtBQUtaMEYsTUFBQUEsYUFBYSxFQUFFO0FBTEg7QUFGVCxHQUFQO0FBVUQ7QUFFRCxpRUFBZXlELGFBQWY7Ozs7Ozs7Ozs7Ozs7QUN2SmlDO0FBQ21DO0FBQ3BFO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQixJQUFJLHNFQUF5QjtBQUM3QjtBQUNBLDZCQUE2QjtBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9QbHVnaW5IZWxwL1BsdWdpbkhlbHAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3F1ZXJ5L2NvbXBvbmVudHMvUXVlcnlFZGl0b3JSb3dzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9xdWVyeS9jb21wb25lbnRzL1F1ZXJ5R3JvdXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3F1ZXJ5L2NvbXBvbmVudHMvUXVlcnlHcm91cE9wdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL3VwZGF0ZVF1ZXJpZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvc2FuZGJveC9UZXN0U3R1ZmZQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtMDAzMjZlNzBiYS8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuMy4yLWEwMzJjYmViMDEtNzM3OTQ2MGY1MS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlT2JzZXJ2YWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgcmVuZGVyTWFya2Rvd24gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGx1Z2luOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGlkOiBzdHJpbmc7XG4gIH07XG4gIHR5cGU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaXNFcnJvcjogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBoZWxwOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQbHVnaW5IZWxwIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNFcnJvcjogZmFsc2UsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBoZWxwOiAnJyxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRIZWxwKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RQbGFjZWhvbGRlckluZm8oKSB7XG4gICAgcmV0dXJuICdObyBwbHVnaW4gaGVscCBvciByZWFkbWUgbWFya2Rvd24gZmlsZSB3YXMgZm91bmQnO1xuICB9XG5cbiAgbG9hZEhlbHAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwbHVnaW4sIHR5cGUgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogdHJ1ZSB9KTtcblxuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmdldChgL2FwaS9wbHVnaW5zLyR7cGx1Z2luLmlkfS9tYXJrZG93bi8ke3R5cGV9YClcbiAgICAgIC50aGVuKChyZXNwb25zZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlbHBIdG1sID0gcmVuZGVyTWFya2Rvd24ocmVzcG9uc2UpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZSA9PT0gJycgJiYgdHlwZSA9PT0gJ2hlbHAnKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0Vycm9yOiBmYWxzZSxcbiAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBoZWxwOiB0aGlzLmNvbnN0cnVjdFBsYWNlaG9sZGVySW5mbygpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNFcnJvcjogZmFsc2UsXG4gICAgICAgICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgaGVscDogaGVscEh0bWwsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc0Vycm9yOiB0cnVlLFxuICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzRXJyb3IsIGlzTG9hZGluZywgaGVscCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8aDI+TG9hZGluZyBoZWxwLi4uPC9oMj47XG4gICAgfVxuXG4gICAgaWYgKGlzRXJyb3IpIHtcbiAgICAgIHJldHVybiA8aDM+JmFwb3M7RXJyb3Igb2NjdXJyZWQgd2hlbiBsb2FkaW5nIGhlbHAmYXBvczs8L2gzPjtcbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gJ3BhbmVsX2hlbHAnICYmIGhlbHAgPT09ICcnKSB7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24taHRtbFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaGVscCB9fSAvPjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcmFnRHJvcENvbnRleHQsIERyYWdTdGFydCwgRHJvcHBhYmxlLCBEcm9wUmVzdWx0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XG5cbmltcG9ydCB7XG4gIENvcmVBcHAsXG4gIERhdGFRdWVyeSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIERhdGFTb3VyY2VSZWYsXG4gIEV2ZW50QnVzRXh0ZW5kZWQsXG4gIEhpc3RvcnlJdGVtLFxuICBQYW5lbERhdGEsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNydiwgcmVwb3J0SW50ZXJhY3Rpb24gfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuL1F1ZXJ5RWRpdG9yUm93JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgLy8gVGhlIHF1ZXJ5IGNvbmZpZ3VyYXRpb25cbiAgcXVlcmllczogRGF0YVF1ZXJ5W107XG4gIGRzU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzO1xuXG4gIC8vIFF1ZXJ5IGVkaXRpbmdcbiAgb25RdWVyaWVzQ2hhbmdlOiAocXVlcmllczogRGF0YVF1ZXJ5W10pID0+IHZvaWQ7XG4gIG9uQWRkUXVlcnk6IChxdWVyeTogRGF0YVF1ZXJ5KSA9PiB2b2lkO1xuICBvblJ1blF1ZXJpZXM6ICgpID0+IHZvaWQ7XG5cbiAgLy8gUXVlcnkgUmVzcG9uc2UgRGF0YVxuICBkYXRhOiBQYW5lbERhdGE7XG5cbiAgLy8gTWlzY1xuICBhcHA/OiBDb3JlQXBwO1xuICBoaXN0b3J5PzogQXJyYXk8SGlzdG9yeUl0ZW08RGF0YVF1ZXJ5Pj47XG4gIGV2ZW50QnVzPzogRXZlbnRCdXNFeHRlbmRlZDtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXJ5RWRpdG9yUm93cyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgb25SZW1vdmVRdWVyeSA9IChxdWVyeTogRGF0YVF1ZXJ5KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblF1ZXJpZXNDaGFuZ2UodGhpcy5wcm9wcy5xdWVyaWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gcXVlcnkpKTtcbiAgfTtcblxuICBvbkNoYW5nZVF1ZXJ5KHF1ZXJ5OiBEYXRhUXVlcnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHF1ZXJpZXMsIG9uUXVlcmllc0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIHVwZGF0ZSBxdWVyeSBpbiBhcnJheVxuICAgIG9uUXVlcmllc0NoYW5nZShcbiAgICAgIHF1ZXJpZXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvbkRhdGFTb3VyY2VDaGFuZ2UoZGF0YVNvdXJjZTogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCB7IHF1ZXJpZXMsIG9uUXVlcmllc0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uUXVlcmllc0NoYW5nZShcbiAgICAgIHF1ZXJpZXMubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2VSZWY6IERhdGFTb3VyY2VSZWYgPSB7XG4gICAgICAgICAgdHlwZTogZGF0YVNvdXJjZS50eXBlLFxuICAgICAgICAgIHVpZDogZGF0YVNvdXJjZS51aWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGl0ZW0uZGF0YXNvdXJjZSkge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gZ2V0RGF0YVNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MoaXRlbS5kYXRhc291cmNlKTtcblxuICAgICAgICAgIGlmIChwcmV2aW91cz8udHlwZSA9PT0gZGF0YVNvdXJjZS50eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICBkYXRhc291cmNlOiBkYXRhU291cmNlUmVmLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlZklkOiBpdGVtLnJlZklkLFxuICAgICAgICAgIGhpZGU6IGl0ZW0uaGlkZSxcbiAgICAgICAgICBkYXRhc291cmNlOiBkYXRhU291cmNlUmVmLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgb25EcmFnU3RhcnQgPSAocmVzdWx0OiBEcmFnU3RhcnQpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJpZXMsIGRzU2V0dGluZ3MgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXBvcnRJbnRlcmFjdGlvbigncXVlcnlfcm93X3Jlb3JkZXJfc3RhcnRlZCcsIHtcbiAgICAgIHN0YXJ0SW5kZXg6IHJlc3VsdC5zb3VyY2UuaW5kZXgsXG4gICAgICBudW1iZXJPZlF1ZXJpZXM6IHF1ZXJpZXMubGVuZ3RoLFxuICAgICAgZGF0YXNvdXJjZVR5cGU6IGRzU2V0dGluZ3MudHlwZSxcbiAgICB9KTtcbiAgfTtcblxuICBvbkRyYWdFbmQgPSAocmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzLCBvblF1ZXJpZXNDaGFuZ2UsIGRzU2V0dGluZ3MgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRlc3RpbmF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHJlc3VsdC5zb3VyY2UuaW5kZXg7XG4gICAgY29uc3QgZW5kSW5kZXggPSByZXN1bHQuZGVzdGluYXRpb24uaW5kZXg7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IGVuZEluZGV4KSB7XG4gICAgICByZXBvcnRJbnRlcmFjdGlvbigncXVlcnlfcm93X3Jlb3JkZXJfY2FuY2VsZWQnLCB7XG4gICAgICAgIHN0YXJ0SW5kZXgsXG4gICAgICAgIGVuZEluZGV4LFxuICAgICAgICBudW1iZXJPZlF1ZXJpZXM6IHF1ZXJpZXMubGVuZ3RoLFxuICAgICAgICBkYXRhc291cmNlVHlwZTogZHNTZXR0aW5ncy50eXBlLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlID0gQXJyYXkuZnJvbShxdWVyaWVzKTtcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSB1cGRhdGUuc3BsaWNlKHN0YXJ0SW5kZXgsIDEpO1xuICAgIHVwZGF0ZS5zcGxpY2UoZW5kSW5kZXgsIDAsIHJlbW92ZWQpO1xuICAgIG9uUXVlcmllc0NoYW5nZSh1cGRhdGUpO1xuXG4gICAgcmVwb3J0SW50ZXJhY3Rpb24oJ3F1ZXJ5X3Jvd19yZW9yZGVyX2VuZGVkJywge1xuICAgICAgc3RhcnRJbmRleCxcbiAgICAgIGVuZEluZGV4LFxuICAgICAgbnVtYmVyT2ZRdWVyaWVzOiBxdWVyaWVzLmxlbmd0aCxcbiAgICAgIGRhdGFzb3VyY2VUeXBlOiBkc1NldHRpbmdzLnR5cGUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZHNTZXR0aW5ncywgZGF0YSwgcXVlcmllcywgYXBwLCBoaXN0b3J5LCBldmVudEJ1cyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ1N0YXJ0PXt0aGlzLm9uRHJhZ1N0YXJ0fSBvbkRyYWdFbmQ9e3RoaXMub25EcmFnRW5kfT5cbiAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cInRyYW5zZm9ybWF0aW9ucy1saXN0XCIgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICB7KHByb3ZpZGVkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9IHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc30+XG4gICAgICAgICAgICAgICAge3F1ZXJpZXMubWFwKChxdWVyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFTb3VyY2VTZXR0aW5ncyA9IGdldERhdGFTb3VyY2VTZXR0aW5ncyhxdWVyeSwgZHNTZXR0aW5ncyk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBvbkNoYW5nZURhdGFTb3VyY2VTZXR0aW5ncyA9IGRzU2V0dGluZ3MubWV0YS5taXhlZFxuICAgICAgICAgICAgICAgICAgICA/IChzZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpID0+IHRoaXMub25EYXRhU291cmNlQ2hhbmdlKHNldHRpbmdzLCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxRdWVyeUVkaXRvclJvd1xuICAgICAgICAgICAgICAgICAgICAgIGlkPXtxdWVyeS5yZWZJZH1cbiAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtxdWVyeS5yZWZJZH1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VEYXRhU291cmNlPXtvbkNoYW5nZURhdGFTb3VyY2VTZXR0aW5nc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHF1ZXJ5KSA9PiB0aGlzLm9uQ2hhbmdlUXVlcnkocXVlcnksIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZVF1ZXJ5PXt0aGlzLm9uUmVtb3ZlUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgb25BZGRRdWVyeT17dGhpcy5wcm9wcy5vbkFkZFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uUnVuUXVlcnk9e3RoaXMucHJvcHMub25SdW5RdWVyaWVzfVxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXJpZXM9e3F1ZXJpZXN9XG4gICAgICAgICAgICAgICAgICAgICAgYXBwPXthcHB9XG4gICAgICAgICAgICAgICAgICAgICAgaGlzdG9yeT17aGlzdG9yeX1cbiAgICAgICAgICAgICAgICAgICAgICBldmVudEJ1cz17ZXZlbnRCdXN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvRHJvcHBhYmxlPlxuICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBnZXREYXRhU291cmNlU2V0dGluZ3MgPSAoXG4gIHF1ZXJ5OiBEYXRhUXVlcnksXG4gIGdyb3VwU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzXG4pOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyA9PiB7XG4gIGlmICghcXVlcnkuZGF0YXNvdXJjZSkge1xuICAgIHJldHVybiBncm91cFNldHRpbmdzO1xuICB9XG4gIGNvbnN0IHF1ZXJ5U2V0dGluZ3MgPSBnZXREYXRhU291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncyhxdWVyeS5kYXRhc291cmNlKTtcbiAgcmV0dXJuIHF1ZXJ5U2V0dGluZ3MgfHwgZ3JvdXBTZXR0aW5ncztcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnksXG4gIERhdGFTb3VyY2VBcGksXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBnZXREZWZhdWx0VGltZVJhbmdlLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIsIGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgQ3VzdG9tU2Nyb2xsYmFyLCBIb3Jpem9udGFsR3JvdXAsIElubGluZUZvcm1MYWJlbCwgTW9kYWwsIHN0eWxlc0ZhY3RvcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQbHVnaW5IZWxwIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QbHVnaW5IZWxwL1BsdWdpbkhlbHAnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgYmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGFkZFF1ZXJ5IH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvcXVlcnknO1xuaW1wb3J0IHsgZGF0YVNvdXJjZSBhcyBleHByZXNzaW9uRGF0YXNvdXJjZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9FeHByZXNzaW9uRGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRRdWVyeUVkaXRvciwgaXNTaGFyZWREYXNoYm9hcmRRdWVyeSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZGFzaGJvYXJkJztcbmltcG9ydCB7IFF1ZXJ5R3JvdXBPcHRpb25zIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgUGFuZWxRdWVyeVJ1bm5lciB9IGZyb20gJy4uL3N0YXRlL1BhbmVsUXVlcnlSdW5uZXInO1xuaW1wb3J0IHsgdXBkYXRlUXVlcmllcyB9IGZyb20gJy4uL3N0YXRlL3VwZGF0ZVF1ZXJpZXMnO1xuXG5pbXBvcnQgeyBHcm91cEFjdGlvbkNvbXBvbmVudHMgfSBmcm9tICcuL1F1ZXJ5QWN0aW9uQ29tcG9uZW50JztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUm93cyB9IGZyb20gJy4vUXVlcnlFZGl0b3JSb3dzJztcbmltcG9ydCB7IFF1ZXJ5R3JvdXBPcHRpb25zRWRpdG9yIH0gZnJvbSAnLi9RdWVyeUdyb3VwT3B0aW9ucyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1ZXJ5UnVubmVyOiBQYW5lbFF1ZXJ5UnVubmVyO1xuICBvcHRpb25zOiBRdWVyeUdyb3VwT3B0aW9ucztcbiAgb25PcGVuUXVlcnlJbnNwZWN0b3I/OiAoKSA9PiB2b2lkO1xuICBvblJ1blF1ZXJpZXM6ICgpID0+IHZvaWQ7XG4gIG9uT3B0aW9uc0NoYW5nZTogKG9wdGlvbnM6IFF1ZXJ5R3JvdXBPcHRpb25zKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBkYXRhU291cmNlPzogRGF0YVNvdXJjZUFwaTtcbiAgZHNTZXR0aW5ncz86IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzO1xuICBxdWVyaWVzOiBEYXRhUXVlcnlbXTtcbiAgaGVscENvbnRlbnQ6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaXNMb2FkaW5nSGVscDogYm9vbGVhbjtcbiAgaXNQaWNrZXJPcGVuOiBib29sZWFuO1xuICBpc0FkZGluZ01peGVkOiBib29sZWFuO1xuICBkYXRhOiBQYW5lbERhdGE7XG4gIGlzSGVscE9wZW46IGJvb2xlYW47XG4gIGRlZmF1bHREYXRhU291cmNlPzogRGF0YVNvdXJjZUFwaTtcbiAgc2Nyb2xsRWxlbWVudD86IEhUTUxEaXZFbGVtZW50O1xufVxuXG5leHBvcnQgY2xhc3MgUXVlcnlHcm91cCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGJhY2tlbmRTcnYgPSBiYWNrZW5kU3J2O1xuICBkYXRhU291cmNlU3J2ID0gZ2V0RGF0YVNvdXJjZVNydigpO1xuICBxdWVyeVN1YnNjcmlwdGlvbjogVW5zdWJzY3JpYmFibGUgfCBudWxsID0gbnVsbDtcblxuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgaXNMb2FkaW5nSGVscDogZmFsc2UsXG4gICAgaGVscENvbnRlbnQ6IG51bGwsXG4gICAgaXNQaWNrZXJPcGVuOiBmYWxzZSxcbiAgICBpc0FkZGluZ01peGVkOiBmYWxzZSxcbiAgICBpc0hlbHBPcGVuOiBmYWxzZSxcbiAgICBxdWVyaWVzOiBbXSxcbiAgICBkYXRhOiB7XG4gICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLk5vdFN0YXJ0ZWQsXG4gICAgICBzZXJpZXM6IFtdLFxuICAgICAgdGltZVJhbmdlOiBnZXREZWZhdWx0VGltZVJhbmdlKCksXG4gICAgfSxcbiAgfTtcblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHF1ZXJ5UnVubmVyLCBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IHF1ZXJ5UnVubmVyLmdldERhdGEoeyB3aXRoVHJhbnNmb3JtczogZmFsc2UsIHdpdGhGaWVsZENvbmZpZzogZmFsc2UgfSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChkYXRhOiBQYW5lbERhdGEpID0+IHRoaXMub25QYW5lbERhdGFVcGRhdGUoZGF0YSksXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZHMgPSBhd2FpdCB0aGlzLmRhdGFTb3VyY2VTcnYuZ2V0KG9wdGlvbnMuZGF0YVNvdXJjZSk7XG4gICAgICBjb25zdCBkc1NldHRpbmdzID0gdGhpcy5kYXRhU291cmNlU3J2LmdldEluc3RhbmNlU2V0dGluZ3Mob3B0aW9ucy5kYXRhU291cmNlKTtcbiAgICAgIGNvbnN0IGRlZmF1bHREYXRhU291cmNlID0gYXdhaXQgdGhpcy5kYXRhU291cmNlU3J2LmdldCgpO1xuICAgICAgY29uc3QgZGF0YXNvdXJjZSA9IGRzLmdldFJlZigpO1xuICAgICAgY29uc3QgcXVlcmllcyA9IG9wdGlvbnMucXVlcmllcy5tYXAoKHEpID0+IChxLmRhdGFzb3VyY2UgPyBxIDogeyAuLi5xLCBkYXRhc291cmNlIH0pKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBxdWVyaWVzLCBkYXRhU291cmNlOiBkcywgZHNTZXR0aW5ncywgZGVmYXVsdERhdGFTb3VyY2UgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQgdG8gbG9hZCBkYXRhIHNvdXJjZScsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5xdWVyeVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25QYW5lbERhdGFVcGRhdGUoZGF0YTogUGFuZWxEYXRhKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gIH1cblxuICBvbkNoYW5nZURhdGFTb3VyY2UgPSBhc3luYyAobmV3U2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSA9PiB7XG4gICAgY29uc3QgeyBkc1NldHRpbmdzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGN1cnJlbnREUyA9IGRzU2V0dGluZ3MgPyBhd2FpdCBnZXREYXRhU291cmNlU3J2KCkuZ2V0KGRzU2V0dGluZ3MudWlkKSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBuZXh0RFMgPSBhd2FpdCBnZXREYXRhU291cmNlU3J2KCkuZ2V0KG5ld1NldHRpbmdzLnVpZCk7XG5cbiAgICBjb25zdCBxdWVyaWVzID0gYXdhaXQgdXBkYXRlUXVlcmllcyhuZXh0RFMsIHRoaXMuc3RhdGUucXVlcmllcywgY3VycmVudERTKTtcblxuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBhd2FpdCB0aGlzLmRhdGFTb3VyY2VTcnYuZ2V0KG5ld1NldHRpbmdzLm5hbWUpO1xuICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgcXVlcmllcyxcbiAgICAgIGRhdGFTb3VyY2U6IHtcbiAgICAgICAgbmFtZTogbmV3U2V0dGluZ3MubmFtZSxcbiAgICAgICAgdWlkOiBuZXdTZXR0aW5ncy51aWQsXG4gICAgICAgIHR5cGU6IG5ld1NldHRpbmdzLm1ldGEuaWQsXG4gICAgICAgIGRlZmF1bHQ6IG5ld1NldHRpbmdzLmlzRGVmYXVsdCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJpZXMsXG4gICAgICBkYXRhU291cmNlOiBkYXRhU291cmNlLFxuICAgICAgZHNTZXR0aW5nczogbmV3U2V0dGluZ3MsXG4gICAgfSk7XG4gIH07XG5cbiAgb25BZGRRdWVyeUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLm9uUXVlcmllc0NoYW5nZShhZGRRdWVyeShxdWVyaWVzLCB0aGlzLm5ld1F1ZXJ5KCkpKTtcbiAgICB0aGlzLm9uU2Nyb2xsQm90dG9tKCk7XG4gIH07XG5cbiAgbmV3UXVlcnkoKTogUGFydGlhbDxEYXRhUXVlcnk+IHtcbiAgICBjb25zdCB7IGRzU2V0dGluZ3MsIGRlZmF1bHREYXRhU291cmNlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgZHMgPSAhZHNTZXR0aW5ncz8ubWV0YS5taXhlZCA/IGRzU2V0dGluZ3MgOiBkZWZhdWx0RGF0YVNvdXJjZTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhc291cmNlOiB7IHVpZDogZHM/LnVpZCwgdHlwZTogZHM/LnR5cGUgfSxcbiAgICB9O1xuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlZFByb3BzOiBQYXJ0aWFsPFF1ZXJ5R3JvdXBPcHRpb25zPikge1xuICAgIHRoaXMucHJvcHMub25PcHRpb25zQ2hhbmdlKHtcbiAgICAgIC4uLnRoaXMucHJvcHMub3B0aW9ucyxcbiAgICAgIC4uLmNoYW5nZWRQcm9wcyxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQWRkRXhwcmVzc2lvbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMub25RdWVyaWVzQ2hhbmdlKGFkZFF1ZXJ5KHRoaXMuc3RhdGUucXVlcmllcywgZXhwcmVzc2lvbkRhdGFzb3VyY2UubmV3UXVlcnkoKSkpO1xuICAgIHRoaXMub25TY3JvbGxCb3R0b20oKTtcbiAgfTtcblxuICBvblNjcm9sbEJvdHRvbSA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnNjcm9sbEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS5zY3JvbGxFbGVtZW50LnNjcm9sbFRvKHsgdG9wOiAxMDAwMCB9KTtcbiAgICAgIH1cbiAgICB9LCAyMCk7XG4gIH07XG5cbiAgb25VcGRhdGVBbmRSdW4gPSAob3B0aW9uczogUXVlcnlHcm91cE9wdGlvbnMpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uT3B0aW9uc0NoYW5nZShvcHRpb25zKTtcbiAgICB0aGlzLnByb3BzLm9uUnVuUXVlcmllcygpO1xuICB9O1xuXG4gIHJlbmRlclRvcFNlY3Rpb24oc3R5bGVzOiBRdWVyaWVzVGFiU3R5bGVzKSB7XG4gICAgY29uc3QgeyBvbk9wZW5RdWVyeUluc3BlY3Rvciwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGRhdGEgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlUm93fT5cbiAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIGh0bWxGb3I9XCJkYXRhLXNvdXJjZS1waWNrZXJcIiB3aWR0aD17J2F1dG8nfT5cbiAgICAgICAgICAgIERhdGEgc291cmNlXG4gICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlUm93SXRlbX0+XG4gICAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgIGN1cnJlbnQ9e29wdGlvbnMuZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgbWV0cmljcz17dHJ1ZX1cbiAgICAgICAgICAgICAgbWl4ZWQ9e3RydWV9XG4gICAgICAgICAgICAgIGRhc2hib2FyZD17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFyaWFibGVzPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ZGF0YVNvdXJjZSAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTb3VyY2VSb3dJdGVtfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJxdWVzdGlvbi1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJPcGVuIGRhdGEgc291cmNlIGhlbHBcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbk9wZW5IZWxwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTb3VyY2VSb3dJdGVtT3B0aW9uc30+XG4gICAgICAgICAgICAgICAgPFF1ZXJ5R3JvdXBPcHRpb25zRWRpdG9yXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblVwZGF0ZUFuZFJ1bn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge29uT3BlblF1ZXJ5SW5zcGVjdG9yICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGFTb3VyY2VSb3dJdGVtfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblF1ZXJ5SW5zcGVjdG9yfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMuY29tcG9uZW50cy5RdWVyeVRhYi5xdWVyeUluc3BlY3RvckJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUXVlcnkgaW5zcGVjdG9yXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIG9uT3BlbkhlbHAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzSGVscE9wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgb25DbG9zZUhlbHAgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzSGVscE9wZW46IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlck1peGVkUGlja2VyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICBtaXhlZD17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQWRkTWl4ZWRRdWVyeX1cbiAgICAgICAgY3VycmVudD17bnVsbH1cbiAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICB2YXJpYWJsZXM9e3RydWV9XG4gICAgICAgIG9uQmx1cj17dGhpcy5vbk1peGVkUGlja2VyQmx1cn1cbiAgICAgICAgb3Blbk1lbnVPbkZvY3VzPXt0cnVlfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIG9uQWRkTWl4ZWRRdWVyeSA9IChkYXRhc291cmNlOiBhbnkpID0+IHtcbiAgICB0aGlzLm9uQWRkUXVlcnkoeyBkYXRhc291cmNlOiBkYXRhc291cmNlLm5hbWUgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQWRkaW5nTWl4ZWQ6IGZhbHNlIH0pO1xuICB9O1xuXG4gIG9uTWl4ZWRQaWNrZXJCbHVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0FkZGluZ01peGVkOiBmYWxzZSB9KTtcbiAgfTtcblxuICBvbkFkZFF1ZXJ5ID0gKHF1ZXJ5OiBQYXJ0aWFsPERhdGFRdWVyeT4pID0+IHtcbiAgICBjb25zdCB7IGRzU2V0dGluZ3MsIHF1ZXJpZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5vblF1ZXJpZXNDaGFuZ2UoYWRkUXVlcnkocXVlcmllcywgcXVlcnksIHsgdHlwZTogZHNTZXR0aW5ncz8udHlwZSwgdWlkOiBkc1NldHRpbmdzPy51aWQgfSkpO1xuICAgIHRoaXMub25TY3JvbGxCb3R0b20oKTtcbiAgfTtcblxuICBvblF1ZXJpZXNDaGFuZ2UgPSAocXVlcmllczogRGF0YVF1ZXJ5W10pID0+IHtcbiAgICB0aGlzLm9uQ2hhbmdlKHsgcXVlcmllcyB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcXVlcmllcyB9KTtcbiAgfTtcblxuICByZW5kZXJRdWVyaWVzKGRzU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSB7XG4gICAgY29uc3QgeyBvblJ1blF1ZXJpZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhLCBxdWVyaWVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGlzU2hhcmVkRGFzaGJvYXJkUXVlcnkoZHNTZXR0aW5ncy5uYW1lKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERhc2hib2FyZFF1ZXJ5RWRpdG9yXG4gICAgICAgICAgcXVlcmllcz17cXVlcmllc31cbiAgICAgICAgICBwYW5lbERhdGE9e2RhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25RdWVyaWVzQ2hhbmdlfVxuICAgICAgICAgIG9uUnVuUXVlcmllcz17b25SdW5RdWVyaWVzfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBhcmlhLWxhYmVsPXtzZWxlY3RvcnMuY29tcG9uZW50cy5RdWVyeVRhYi5jb250ZW50fT5cbiAgICAgICAgPFF1ZXJ5RWRpdG9yUm93c1xuICAgICAgICAgIHF1ZXJpZXM9e3F1ZXJpZXN9XG4gICAgICAgICAgZHNTZXR0aW5ncz17ZHNTZXR0aW5nc31cbiAgICAgICAgICBvblF1ZXJpZXNDaGFuZ2U9e3RoaXMub25RdWVyaWVzQ2hhbmdlfVxuICAgICAgICAgIG9uQWRkUXVlcnk9e3RoaXMub25BZGRRdWVyeX1cbiAgICAgICAgICBvblJ1blF1ZXJpZXM9e29uUnVuUXVlcmllc31cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlzRXhwcmVzc2lvbnNTdXBwb3J0ZWQoZHNTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKGRzU2V0dGluZ3MubWV0YS5hbGVydGluZyB8fCBkc1NldHRpbmdzLm1ldGEubWl4ZWQpID09PSB0cnVlO1xuICB9XG5cbiAgcmVuZGVyRXh0cmFBY3Rpb25zKCkge1xuICAgIHJldHVybiBHcm91cEFjdGlvbkNvbXBvbmVudHMuZ2V0QWxsRXh0cmFSZW5kZXJBY3Rpb24oKVxuICAgICAgLm1hcCgoYWN0aW9uLCBpbmRleCkgPT5cbiAgICAgICAgYWN0aW9uKHtcbiAgICAgICAgICBvbkFkZFF1ZXJ5OiB0aGlzLm9uQWRkUXVlcnksXG4gICAgICAgICAgb25DaGFuZ2VEYXRhU291cmNlOiB0aGlzLm9uQ2hhbmdlRGF0YVNvdXJjZSxcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgfVxuXG4gIHJlbmRlckFkZFF1ZXJ5Um93KGRzU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLCBzdHlsZXM6IFF1ZXJpZXNUYWJTdHlsZXMpIHtcbiAgICBjb25zdCB7IGlzQWRkaW5nTWl4ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2hvd0FkZEJ1dHRvbiA9ICEoaXNBZGRpbmdNaXhlZCB8fCBpc1NoYXJlZERhc2hib2FyZFF1ZXJ5KGRzU2V0dGluZ3MubmFtZSkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3Jpem9udGFsR3JvdXAgc3BhY2luZz1cIm1kXCIgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgIHtzaG93QWRkQnV0dG9uICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWRkUXVlcnlDbGlja31cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUXVlcnlUYWIuYWRkUXVlcnl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgUXVlcnlcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgICAge2NvbmZpZy5leHByZXNzaW9uc0VuYWJsZWQgJiYgdGhpcy5pc0V4cHJlc3Npb25zU3VwcG9ydGVkKGRzU2V0dGluZ3MpICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQWRkRXhwcmVzc2lvbkNsaWNrfVxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5leHByZXNzaW9uQnV0dG9ufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPkV4cHJlc3Npb24mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHt0aGlzLnJlbmRlckV4dHJhQWN0aW9ucygpfVxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIHNldFNjcm9sbFJlZiA9IChzY3JvbGxFbGVtZW50OiBIVE1MRGl2RWxlbWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzY3JvbGxFbGVtZW50IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzSGVscE9wZW4sIGRzU2V0dGluZ3MgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEN1c3RvbVNjcm9sbGJhciBhdXRvSGVpZ2h0TWluPVwiMTAwJVwiIHNjcm9sbFJlZkNhbGxiYWNrPXt0aGlzLnNldFNjcm9sbFJlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJXcmFwcGVyfT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJUb3BTZWN0aW9uKHN0eWxlcyl9XG4gICAgICAgICAge2RzU2V0dGluZ3MgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVyaWVzV3JhcHBlcn0+e3RoaXMucmVuZGVyUXVlcmllcyhkc1NldHRpbmdzKX08L2Rpdj5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQWRkUXVlcnlSb3coZHNTZXR0aW5ncywgc3R5bGVzKX1cbiAgICAgICAgICAgICAge2lzSGVscE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxNb2RhbCB0aXRsZT1cIkRhdGEgc291cmNlIGhlbHBcIiBpc09wZW49e3RydWV9IG9uRGlzbWlzcz17dGhpcy5vbkNsb3NlSGVscH0+XG4gICAgICAgICAgICAgICAgICA8UGx1Z2luSGVscCBwbHVnaW49e2RzU2V0dGluZ3MubWV0YX0gdHlwZT1cInF1ZXJ5X2hlbHBcIiAvPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgoKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IGNvbmZpZztcblxuICByZXR1cm4ge1xuICAgIGlubmVyV3JhcHBlcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGAsXG4gICAgZGF0YVNvdXJjZVJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgYCxcbiAgICBkYXRhU291cmNlUm93SXRlbTogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcuaW5saW5lRm9ybU1hcmdpbn07XG4gICAgYCxcbiAgICBkYXRhU291cmNlUm93SXRlbU9wdGlvbnM6IGNzc2BcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLmlubGluZUZvcm1NYXJnaW59O1xuICAgIGAsXG4gICAgcXVlcmllc1dyYXBwZXI6IGNzc2BcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIGAsXG4gICAgZXhwcmVzc2lvbldyYXBwZXI6IGNzc2BgLFxuICAgIGV4cHJlc3Npb25CdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICB9O1xufSk7XG5cbnR5cGUgUXVlcmllc1RhYlN0eWxlcyA9IFJldHVyblR5cGU8dHlwZW9mIGdldFN0eWxlcz47XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIENoYW5nZUV2ZW50LCBGb2N1c0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyByYW5nZVV0aWwsIFBhbmVsRGF0YSwgRGF0YVNvdXJjZUFwaSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3dpdGNoLCBJbnB1dCwgSW5saW5lRmllbGQsIElubGluZUZvcm1MYWJlbCwgc3R5bGVzRmFjdG9yeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFF1ZXJ5T3BlcmF0aW9uUm93IH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9RdWVyeU9wZXJhdGlvblJvdy9RdWVyeU9wZXJhdGlvblJvdyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUXVlcnlHcm91cE9wdGlvbnMgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvcHRpb25zOiBRdWVyeUdyb3VwT3B0aW9ucztcbiAgZGF0YVNvdXJjZTogRGF0YVNvdXJjZUFwaTtcbiAgZGF0YTogUGFuZWxEYXRhO1xuICBvbkNoYW5nZTogKG9wdGlvbnM6IFF1ZXJ5R3JvdXBPcHRpb25zKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICB0aW1lUmFuZ2VGcm9tOiBzdHJpbmc7XG4gIHRpbWVSYW5nZVNoaWZ0OiBzdHJpbmc7XG4gIHRpbWVSYW5nZUhpZGU6IGJvb2xlYW47XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgcmVsYXRpdmVUaW1lSXNWYWxpZDogYm9vbGVhbjtcbiAgdGltZVNoaWZ0SXNWYWxpZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFF1ZXJ5R3JvdXBPcHRpb25zRWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSBwcm9wcztcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lUmFuZ2VGcm9tOiBvcHRpb25zLnRpbWVSYW5nZT8uZnJvbSB8fCAnJyxcbiAgICAgIHRpbWVSYW5nZVNoaWZ0OiBvcHRpb25zLnRpbWVSYW5nZT8uc2hpZnQgfHwgJycsXG4gICAgICB0aW1lUmFuZ2VIaWRlOiBvcHRpb25zLnRpbWVSYW5nZT8uaGlkZSA/PyBmYWxzZSxcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICByZWxhdGl2ZVRpbWVJc1ZhbGlkOiB0cnVlLFxuICAgICAgdGltZVNoaWZ0SXNWYWxpZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgb25SZWxhdGl2ZVRpbWVDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1lUmFuZ2VGcm9tOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgb25UaW1lU2hpZnRDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1lUmFuZ2VTaGlmdDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uT3ZlcnJpZGVUaW1lID0gKGV2ZW50OiBGb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gZW1wdHlUb051bGwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gdGltZVJhbmdlVmFsaWRhdGlvbihuZXdWYWx1ZSk7XG5cbiAgICBpZiAoaXNWYWxpZCAmJiBvcHRpb25zLnRpbWVSYW5nZT8uZnJvbSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgdGltZVJhbmdlOiB7XG4gICAgICAgICAgLi4uKG9wdGlvbnMudGltZVJhbmdlID8/IHt9KSxcbiAgICAgICAgICBmcm9tOiBuZXdWYWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyByZWxhdGl2ZVRpbWVJc1ZhbGlkOiBpc1ZhbGlkIH0pO1xuICB9O1xuXG4gIG9uVGltZVNoaWZ0ID0gKGV2ZW50OiBGb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gZW1wdHlUb051bGwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCBpc1ZhbGlkID0gdGltZVJhbmdlVmFsaWRhdGlvbihuZXdWYWx1ZSk7XG5cbiAgICBpZiAoaXNWYWxpZCAmJiBvcHRpb25zLnRpbWVSYW5nZT8uc2hpZnQgIT09IG5ld1ZhbHVlKSB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHRpbWVSYW5nZToge1xuICAgICAgICAgIC4uLihvcHRpb25zLnRpbWVSYW5nZSA/PyB7fSksXG4gICAgICAgICAgc2hpZnQ6IG5ld1ZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVTaGlmdElzVmFsaWQ6IGlzVmFsaWQgfSk7XG4gIH07XG5cbiAgb25Ub2dnbGVUaW1lT3ZlcnJpZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lUmFuZ2VIaWRlOiAhdGhpcy5zdGF0ZS50aW1lUmFuZ2VIaWRlIH0sICgpID0+IHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgdGltZVJhbmdlOiB7XG4gICAgICAgICAgLi4uKG9wdGlvbnMudGltZVJhbmdlID8/IHt9KSxcbiAgICAgICAgICBoaWRlOiB0aGlzLnN0YXRlLnRpbWVSYW5nZUhpZGUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBvbkNhY2hlVGltZW91dEJsdXIgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY2FjaGVUaW1lb3V0OiBlbXB0eVRvTnVsbChldmVudC50YXJnZXQudmFsdWUpLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uTWF4RGF0YVBvaW50c0JsdXIgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBtYXhEYXRhUG9pbnRzOiBudW1iZXIgfCBudWxsID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlIGFzIHN0cmluZywgMTApO1xuXG4gICAgaWYgKGlzTmFOKG1heERhdGFQb2ludHMpIHx8IG1heERhdGFQb2ludHMgPT09IDApIHtcbiAgICAgIG1heERhdGFQb2ludHMgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChtYXhEYXRhUG9pbnRzICE9PSBvcHRpb25zLm1heERhdGFQb2ludHMpIHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgbWF4RGF0YVBvaW50cyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBvbk1pbkludGVydmFsQmx1ciA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1pbkludGVydmFsID0gZW1wdHlUb051bGwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAobWluSW50ZXJ2YWwgIT09IG9wdGlvbnMubWluSW50ZXJ2YWwpIHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgbWluSW50ZXJ2YWwsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyQ2FjaGVUaW1lb3V0T3B0aW9uKCkge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRvb2x0aXAgPSBgSWYgeW91ciB0aW1lIHNlcmllcyBzdG9yZSBoYXMgYSBxdWVyeSBjYWNoZSB0aGlzIG9wdGlvbiBjYW4gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgY2FjaGUgdGltZW91dC4gU3BlY2lmeSBhXG4gICAgbnVtZXJpYyB2YWx1ZSBpbiBzZWNvbmRzLmA7XG5cbiAgICBpZiAoIWRhdGFTb3VyY2UubWV0YS5xdWVyeU9wdGlvbnM/LmNhY2hlVGltZW91dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgPElubGluZUZvcm1MYWJlbCB3aWR0aD17OX0gdG9vbHRpcD17dG9vbHRpcH0+XG4gICAgICAgICAgICBDYWNoZSB0aW1lb3V0XG4gICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC02XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNjBcIlxuICAgICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMub25DYWNoZVRpbWVvdXRCbHVyfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtvcHRpb25zLmNhY2hlVGltZW91dCA/PyAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJNYXhEYXRhUG9pbnRzT3B0aW9uKCkge1xuICAgIGNvbnN0IHsgZGF0YSwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByZWFsTWQgPSBkYXRhLnJlcXVlc3Q/Lm1heERhdGFQb2ludHM7XG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb25zLm1heERhdGFQb2ludHMgPz8gJyc7XG4gICAgY29uc3QgaXNBdXRvID0gdmFsdWUgPT09ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgPElubGluZUZvcm1MYWJlbFxuICAgICAgICAgICAgd2lkdGg9ezl9XG4gICAgICAgICAgICB0b29sdGlwPXtcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICBUaGUgbWF4aW11bSBkYXRhIHBvaW50cyBwZXIgc2VyaWVzLiBVc2VkIGRpcmVjdGx5IGJ5IHNvbWUgZGF0YSBzb3VyY2VzIGFuZCB1c2VkIGluIGNhbGN1bGF0aW9uIG9mIGF1dG9cbiAgICAgICAgICAgICAgICBpbnRlcnZhbC4gV2l0aCBzdHJlYW1pbmcgZGF0YSB0aGlzIHZhbHVlIGlzIHVzZWQgZm9yIHRoZSByb2xsaW5nIGJ1ZmZlci5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTWF4IGRhdGEgcG9pbnRzXG4gICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTZcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake3JlYWxNZH1gfVxuICAgICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMub25NYXhEYXRhUG9pbnRzQmx1cn1cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dmFsdWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aXNBdXRvICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1zZWdtZW50LW9wZXJhdG9yXCI+PTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWxcIj5XaWR0aCBvZiBwYW5lbDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW50ZXJ2YWxPcHRpb24oKSB7XG4gICAgY29uc3QgeyBkYXRhLCBkYXRhU291cmNlLCBvcHRpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJlYWxJbnRlcnZhbCA9IGRhdGEucmVxdWVzdD8uaW50ZXJ2YWw7XG4gICAgY29uc3QgbWluSW50ZXJ2YWxPbkRzID0gZGF0YVNvdXJjZS5pbnRlcnZhbCA/PyAnTm8gbGltaXQnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGb3JtTGFiZWxcbiAgICAgICAgICAgICAgd2lkdGg9ezl9XG4gICAgICAgICAgICAgIHRvb2x0aXA9e1xuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICBBIGxvd2VyIGxpbWl0IGZvciB0aGUgaW50ZXJ2YWwuIFJlY29tbWVuZGVkIHRvIGJlIHNldCB0byB3cml0ZSBmcmVxdWVuY3ksIGZvciBleGFtcGxlIDxjb2RlPjFtPC9jb2RlPnsnICd9XG4gICAgICAgICAgICAgICAgICBpZiB5b3VyIGRhdGEgaXMgd3JpdHRlbiBldmVyeSBtaW51dGUuIERlZmF1bHQgdmFsdWUgY2FuIGJlIHNldCBpbiBkYXRhIHNvdXJjZSBzZXR0aW5ncyBmb3IgbW9zdCBkYXRhXG4gICAgICAgICAgICAgICAgICBzb3VyY2VzLlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE1pbiBpbnRlcnZhbFxuICAgICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC02XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake21pbkludGVydmFsT25Ec31gfVxuICAgICAgICAgICAgICBzcGVsbENoZWNrPXtmYWxzZX1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uTWluSW50ZXJ2YWxCbHVyfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e29wdGlvbnMubWluSW50ZXJ2YWwgPz8gJyd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbFxuICAgICAgICAgICAgICB3aWR0aD17OX1cbiAgICAgICAgICAgICAgdG9vbHRpcD17XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIFRoZSBldmFsdWF0ZWQgaW50ZXJ2YWwgdGhhdCBpcyBzZW50IHRvIGRhdGEgc291cmNlIGFuZCBpcyB1c2VkIGluIDxjb2RlPiRfX2ludGVydmFsPC9jb2RlPiBhbmR7JyAnfVxuICAgICAgICAgICAgICAgICAgPGNvZGU+JF9faW50ZXJ2YWxfbXM8L2NvZGU+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSW50ZXJ2YWxcbiAgICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbCB3aWR0aD17Nn0+e3JlYWxJbnRlcnZhbH08L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1zZWdtZW50LW9wZXJhdG9yXCI+PTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsXCI+VGltZSByYW5nZSAvIG1heCBkYXRhIHBvaW50czwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBvbk9wZW5PcHRpb25zID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUgfSk7XG4gIH07XG5cbiAgb25DbG9zZU9wdGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyQ29sbGFwc2VkVGV4dChzdHlsZXM6IFN0eWxlc1R5cGUpOiBSZWFjdC5SZWFjdE5vZGUgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHsgZGF0YSwgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IG1kRGVzYyA9IG9wdGlvbnMubWF4RGF0YVBvaW50cyA/PyAnJztcbiAgICBpZiAobWREZXNjID09PSAnJyAmJiBkYXRhLnJlcXVlc3QpIHtcbiAgICAgIG1kRGVzYyA9IGBhdXRvID0gJHtkYXRhLnJlcXVlc3QubWF4RGF0YVBvaW50c31gO1xuICAgIH1cblxuICAgIGxldCBpbnRlcnZhbERlc2MgPSBvcHRpb25zLm1pbkludGVydmFsO1xuICAgIGlmIChkYXRhLnJlcXVlc3QpIHtcbiAgICAgIGludGVydmFsRGVzYyA9IGAke2RhdGEucmVxdWVzdC5pbnRlcnZhbH1gO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZWRUZXh0fT5NRCA9IHttZERlc2N9PC9kaXY+fVxuICAgICAgICB7PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZWRUZXh0fT5JbnRlcnZhbCA9IHtpbnRlcnZhbERlc2N9PC9kaXY+fVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpbWVSYW5nZUhpZGU6IGhpZGVUaW1lT3ZlcnJpZGUsIHJlbGF0aXZlVGltZUlzVmFsaWQsIHRpbWVTaGlmdElzVmFsaWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0aW1lUmFuZ2VGcm9tOiByZWxhdGl2ZVRpbWUsIHRpbWVSYW5nZVNoaWZ0OiB0aW1lU2hpZnQsIGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UXVlcnlPcGVyYXRpb25Sb3dcbiAgICAgICAgaWQ9XCJRdWVyeSBvcHRpb25zXCJcbiAgICAgICAgaW5kZXg9ezB9XG4gICAgICAgIHRpdGxlPVwiUXVlcnkgb3B0aW9uc1wiXG4gICAgICAgIGhlYWRlckVsZW1lbnQ9e3RoaXMucmVuZGVyQ29sbGFwc2VkVGV4dChzdHlsZXMpfVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgb25PcGVuPXt0aGlzLm9uT3Blbk9wdGlvbnN9XG4gICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZU9wdGlvbnN9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnJlbmRlck1heERhdGFQb2ludHNPcHRpb24oKX1cbiAgICAgICAge3RoaXMucmVuZGVySW50ZXJ2YWxPcHRpb24oKX1cbiAgICAgICAge3RoaXMucmVuZGVyQ2FjaGVUaW1lb3V0T3B0aW9uKCl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgPElubGluZUZvcm1MYWJlbCB3aWR0aD17OX0+UmVsYXRpdmUgdGltZTwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtNlwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjFoXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUmVsYXRpdmVUaW1lQ2hhbmdlfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uT3ZlcnJpZGVUaW1lfVxuICAgICAgICAgICAgaW52YWxpZD17IXJlbGF0aXZlVGltZUlzVmFsaWR9XG4gICAgICAgICAgICB2YWx1ZT17cmVsYXRpdmVUaW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgd2lkdGgtOVwiPlRpbWUgc2hpZnQ8L3NwYW4+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC02XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaW1lU2hpZnRDaGFuZ2V9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMub25UaW1lU2hpZnR9XG4gICAgICAgICAgICBpbnZhbGlkPXshdGltZVNoaWZ0SXNWYWxpZH1cbiAgICAgICAgICAgIHZhbHVlPXt0aW1lU2hpZnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsodGltZVNoaWZ0IHx8IHJlbGF0aXZlVGltZSkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkhpZGUgdGltZSBpbmZvXCIgbGFiZWxXaWR0aD17MTh9PlxuICAgICAgICAgICAgICA8U3dpdGNoIHZhbHVlPXtoaWRlVGltZU92ZXJyaWRlfSBvbkNoYW5nZT17dGhpcy5vblRvZ2dsZVRpbWVPdmVycmlkZX0gLz5cbiAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1F1ZXJ5T3BlcmF0aW9uUm93PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgdGltZVJhbmdlVmFsaWRhdGlvbiA9ICh2YWx1ZTogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gcmFuZ2VVdGlsLmlzVmFsaWRUaW1lU3Bhbih2YWx1ZSk7XG59O1xuXG5jb25zdCBlbXB0eVRvTnVsbCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiB2YWx1ZSA9PT0gJycgPyBudWxsIDogdmFsdWU7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCgpID0+IHtcbiAgY29uc3QgeyB0aGVtZSB9ID0gY29uZmlnO1xuXG4gIHJldHVybiB7XG4gICAgY29sbGFwc2VkVGV4dDogY3NzYFxuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0V2Vha307XG4gICAgYCxcbiAgfTtcbn0pO1xuXG50eXBlIFN0eWxlc1R5cGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBnZXRTdHlsZXM+O1xuIiwiaW1wb3J0IHsgRGF0YVF1ZXJ5LCBEYXRhU291cmNlQXBpLCBoYXNRdWVyeUV4cG9ydFN1cHBvcnQsIGhhc1F1ZXJ5SW1wb3J0U3VwcG9ydCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgaXNFeHByZXNzaW9uUmVmZXJlbmNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMvdXRpbHMvRGF0YVNvdXJjZVdpdGhCYWNrZW5kJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVF1ZXJpZXMoXG4gIG5leHREUzogRGF0YVNvdXJjZUFwaSxcbiAgcXVlcmllczogRGF0YVF1ZXJ5W10sXG4gIGN1cnJlbnREUz86IERhdGFTb3VyY2VBcGlcbik6IFByb21pc2U8RGF0YVF1ZXJ5W10+IHtcbiAgbGV0IG5leHRRdWVyaWVzID0gcXVlcmllcztcbiAgY29uc3QgZGF0YXNvdXJjZSA9IHsgdHlwZTogbmV4dERTLnR5cGUsIHVpZDogbmV4dERTLnVpZCB9O1xuXG4gIC8vIHdlIGFyZSBjaGFuZ2luZyBkYXRhIHNvdXJjZSB0eXBlXG4gIGlmIChjdXJyZW50RFM/Lm1ldGEuaWQgIT09IG5leHREUy5tZXRhLmlkKSB7XG4gICAgLy8gSWYgY2hhbmdpbmcgdG8gbWl4ZWQgZG8gbm90aGluZ1xuICAgIGlmIChuZXh0RFMubWV0YS5taXhlZCkge1xuICAgICAgcmV0dXJuIHF1ZXJpZXM7XG4gICAgfVxuICAgIC8vIHdoZW4gYm90aCBkYXRhIHNvdXJjZXMgc3VwcG9ydCBhYnN0cmFjdCBxdWVyaWVzXG4gICAgZWxzZSBpZiAoaGFzUXVlcnlFeHBvcnRTdXBwb3J0KGN1cnJlbnREUykgJiYgaGFzUXVlcnlJbXBvcnRTdXBwb3J0KG5leHREUykpIHtcbiAgICAgIGNvbnN0IGFic3RyYWN0UXVlcmllcyA9IGF3YWl0IGN1cnJlbnREUy5leHBvcnRUb0Fic3RyYWN0UXVlcmllcyhxdWVyaWVzKTtcbiAgICAgIG5leHRRdWVyaWVzID0gYXdhaXQgbmV4dERTLmltcG9ydEZyb21BYnN0cmFjdFF1ZXJpZXMoYWJzdHJhY3RRdWVyaWVzKTtcbiAgICB9XG4gICAgLy8gd2hlbiBkYXRhc291cmNlIHN1cHBvcnRzIHF1ZXJ5IGltcG9ydFxuICAgIGVsc2UgaWYgKGN1cnJlbnREUyAmJiBuZXh0RFMuaW1wb3J0UXVlcmllcykge1xuICAgICAgbmV4dFF1ZXJpZXMgPSBhd2FpdCBuZXh0RFMuaW1wb3J0UXVlcmllcyhxdWVyaWVzLCBjdXJyZW50RFMpO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UgY2xlYXIgcXVlcmllc1xuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIFt7IHJlZklkOiAnQScsIGRhdGFzb3VyY2UgfV07XG4gICAgfVxuICB9XG5cbiAgaWYgKG5leHRRdWVyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbeyByZWZJZDogJ0EnLCBkYXRhc291cmNlIH1dO1xuICB9XG5cbiAgLy8gU2V0IGRhdGEgc291cmNlIG9uIGFsbCBxdWVyaWVzIGV4Y2VwdCBleHByZXNzaW9uIHF1ZXJpZXNcbiAgcmV0dXJuIG5leHRRdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICBpZiAoIWlzRXhwcmVzc2lvblJlZmVyZW5jZShxdWVyeS5kYXRhc291cmNlKSAmJiAhbmV4dERTLm1ldGEubWl4ZWQpIHtcbiAgICAgIHF1ZXJ5LmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU9ic2VydmFibGUgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IEF1dG9TaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcblxuaW1wb3J0IHtcbiAgQXBwbHlGaWVsZE92ZXJyaWRlT3B0aW9ucyxcbiAgRGF0YVRyYW5zZm9ybWVyQ29uZmlnLFxuICBkYXRlTWF0aCxcbiAgRmllbGRDb2xvck1vZGVJZCxcbiAgTmF2TW9kZWxJdGVtLFxuICBQYW5lbERhdGEsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBUYWJsZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBcHBOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBRdWVyeUdyb3VwT3B0aW9ucyB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgUGFuZWxSZW5kZXJlciB9IGZyb20gJy4uL3BhbmVsL2NvbXBvbmVudHMvUGFuZWxSZW5kZXJlcic7XG5pbXBvcnQgeyBRdWVyeUdyb3VwIH0gZnJvbSAnLi4vcXVlcnkvY29tcG9uZW50cy9RdWVyeUdyb3VwJztcbmltcG9ydCB7IFBhbmVsUXVlcnlSdW5uZXIgfSBmcm9tICcuLi9xdWVyeS9zdGF0ZS9QYW5lbFF1ZXJ5UnVubmVyJztcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgcXVlcnlSdW5uZXI6IFBhbmVsUXVlcnlSdW5uZXI7XG4gIHF1ZXJ5T3B0aW9uczogUXVlcnlHcm91cE9wdGlvbnM7XG4gIGRhdGE/OiBQYW5lbERhdGE7XG59XG5cbmV4cG9ydCBjb25zdCBUZXN0U3R1ZmZQYWdlOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxTdGF0ZT4oZ2V0RGVmYXVsdFN0YXRlKCkpO1xuICBjb25zdCB7IHF1ZXJ5T3B0aW9ucywgcXVlcnlSdW5uZXIgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IG9uUnVuUXVlcmllcyA9ICgpID0+IHtcbiAgICBjb25zdCB0aW1lUmFuZ2UgPSB7IGZyb206ICdub3ctMWgnLCB0bzogJ25vdycgfTtcblxuICAgIHF1ZXJ5UnVubmVyLnJ1bih7XG4gICAgICBxdWVyaWVzOiBxdWVyeU9wdGlvbnMucXVlcmllcyxcbiAgICAgIGRhdGFzb3VyY2U6IHF1ZXJ5T3B0aW9ucy5kYXRhU291cmNlLFxuICAgICAgdGltZXpvbmU6ICdicm93c2VyJyxcbiAgICAgIHRpbWVSYW5nZTogeyBmcm9tOiBkYXRlTWF0aC5wYXJzZSh0aW1lUmFuZ2UuZnJvbSkhLCB0bzogZGF0ZU1hdGgucGFyc2UodGltZVJhbmdlLnRvKSEsIHJhdzogdGltZVJhbmdlIH0sXG4gICAgICBtYXhEYXRhUG9pbnRzOiBxdWVyeU9wdGlvbnMubWF4RGF0YVBvaW50cyA/PyAxMDAsXG4gICAgICBtaW5JbnRlcnZhbDogcXVlcnlPcHRpb25zLm1pbkludGVydmFsLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uT3B0aW9uc0NoYW5nZSA9IChxdWVyeU9wdGlvbnM6IFF1ZXJ5R3JvdXBPcHRpb25zKSA9PiB7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgcXVlcnlPcHRpb25zIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gZGF0YVxuICAgKi9cbiAgY29uc3Qgb2JzZXJ2YWJsZSA9IHVzZU1lbW8oKCkgPT4gcXVlcnlSdW5uZXIuZ2V0RGF0YSh7IHdpdGhGaWVsZENvbmZpZzogdHJ1ZSwgd2l0aFRyYW5zZm9ybXM6IHRydWUgfSksIFtxdWVyeVJ1bm5lcl0pO1xuICBjb25zdCBkYXRhID0gdXNlT2JzZXJ2YWJsZShvYnNlcnZhYmxlKTtcblxuICBjb25zdCBub2RlOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaWQ6ICd0ZXN0LXBhZ2UnLFxuICAgIHRleHQ6ICdUZXN0IHBhZ2UnLFxuICAgIGljb246ICdkYXNoYm9hcmQnLFxuICAgIHN1YlRpdGxlOiAnRk9SIFRFU1RJTkchJyxcbiAgICB1cmw6ICdzYW5kYm94L3Rlc3QnLFxuICB9O1xuXG4gIGNvbnN0IG5vdGlmeUFwcCA9IHVzZUFwcE5vdGlmaWNhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e3sgbm9kZTogbm9kZSwgbWFpbjogbm9kZSB9fT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgPEF1dG9TaXplciBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc2MDBweCcgfX0+XG4gICAgICAgICAgICB7KHsgd2lkdGggfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8UGFuZWxSZW5kZXJlclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhlbGxvXCJcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luSWQ9XCJ0aW1lc2VyaWVzXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e319XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29uZmlnPXt7IGRlZmF1bHRzOiB7fSwgb3ZlcnJpZGVzOiBbXSB9fVxuICAgICAgICAgICAgICAgICAgICB0aW1lWm9uZT1cImJyb3dzZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUYWJsZSBkYXRhPXtkYXRhLnNlcmllc1swXX0gd2lkdGg9e3dpZHRofSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9BdXRvU2l6ZXI+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTZweCcsIGhlaWdodDogJzQ1JScgfX0+XG4gICAgICAgICAgPFF1ZXJ5R3JvdXBcbiAgICAgICAgICAgIG9wdGlvbnM9e3F1ZXJ5T3B0aW9uc31cbiAgICAgICAgICAgIHF1ZXJ5UnVubmVyPXtxdWVyeVJ1bm5lcn1cbiAgICAgICAgICAgIG9uUnVuUXVlcmllcz17b25SdW5RdWVyaWVzfVxuICAgICAgICAgICAgb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxZW0nIH19PlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gbm90aWZ5QXBwLnN1Y2Nlc3MoJ1N1Y2Nlc3MgdG9hc3QnLCAnc29tZSBtb3JlIHRleHQgZ29lcyBoZXJlJyl9IHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICBTdWNjZXNzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbm90aWZ5QXBwLndhcm5pbmcoJ1dhcm5pbmcgdG9hc3QnLCAnc29tZSBtb3JlIHRleHQgZ29lcyBoZXJlJywgJ2JvZ3VzLXRyYWNlLTk5OTk5Jyl9XG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBXYXJuaW5nXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbm90aWZ5QXBwLmVycm9yKCdFcnJvciB0b2FzdCcsICdzb21lIG1vcmUgdGV4dCBnb2VzIGhlcmUnLCAnYm9ndXMtdHJhY2UtZmRzZmRmc2ZkcycpfVxuICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBFcnJvclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFN0YXRlKCk6IFN0YXRlIHtcbiAgY29uc3Qgb3B0aW9uczogQXBwbHlGaWVsZE92ZXJyaWRlT3B0aW9ucyA9IHtcbiAgICBmaWVsZENvbmZpZzoge1xuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLlBhbGV0dGVDbGFzc2ljLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG92ZXJyaWRlczogW10sXG4gICAgfSxcbiAgICByZXBsYWNlVmFyaWFibGVzOiAodjogc3RyaW5nKSA9PiB2LFxuICAgIHRoZW1lOiBjb25maWcudGhlbWUyLFxuICB9O1xuXG4gIGNvbnN0IGRhdGFDb25maWcgPSB7XG4gICAgZ2V0VHJhbnNmb3JtYXRpb25zOiAoKSA9PiBbXSBhcyBEYXRhVHJhbnNmb3JtZXJDb25maWdbXSxcbiAgICBnZXRGaWVsZE92ZXJyaWRlT3B0aW9uczogKCkgPT4gb3B0aW9ucyxcbiAgICBnZXREYXRhU3VwcG9ydDogKCkgPT4gKHsgYW5ub3RhdGlvbnM6IGZhbHNlLCBhbGVydFN0YXRlczogZmFsc2UgfSksXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBxdWVyeVJ1bm5lcjogbmV3IFBhbmVsUXVlcnlSdW5uZXIoZGF0YUNvbmZpZyksXG4gICAgcXVlcnlPcHRpb25zOiB7XG4gICAgICBxdWVyaWVzOiBbXSxcbiAgICAgIGRhdGFTb3VyY2U6IHtcbiAgICAgICAgbmFtZTogJ2dkZXYtdGVzdGRhdGEnLFxuICAgICAgfSxcbiAgICAgIG1heERhdGFQb2ludHM6IDEwMCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0U3R1ZmZQYWdlO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCBmcm9tICcuL3VzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QnO1xuZnVuY3Rpb24gdXNlT2JzZXJ2YWJsZShvYnNlcnZhYmxlJCwgaW5pdGlhbFZhbHVlKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKSwgdmFsdWUgPSBfYVswXSwgdXBkYXRlID0gX2FbMV07XG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzID0gb2JzZXJ2YWJsZSQuc3Vic2NyaWJlKHVwZGF0ZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBzLnVuc3Vic2NyaWJlKCk7IH07XG4gICAgfSwgW29ic2VydmFibGUkXSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZXhwb3J0IGRlZmF1bHQgdXNlT2JzZXJ2YWJsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXJNYXJrZG93biIsImdldEJhY2tlbmRTcnYiLCJQbHVnaW5IZWxwIiwiaXNFcnJvciIsImlzTG9hZGluZyIsImhlbHAiLCJwbHVnaW4iLCJ0eXBlIiwicHJvcHMiLCJzZXRTdGF0ZSIsImdldCIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiaGVscEh0bWwiLCJjb25zdHJ1Y3RQbGFjZWhvbGRlckluZm8iLCJjYXRjaCIsImNvbXBvbmVudERpZE1vdW50IiwibG9hZEhlbHAiLCJyZW5kZXIiLCJzdGF0ZSIsIl9faHRtbCIsIkRyYWdEcm9wQ29udGV4dCIsIkRyb3BwYWJsZSIsImdldERhdGFTb3VyY2VTcnYiLCJyZXBvcnRJbnRlcmFjdGlvbiIsIlF1ZXJ5RWRpdG9yUm93IiwiUXVlcnlFZGl0b3JSb3dzIiwicXVlcnkiLCJvblF1ZXJpZXNDaGFuZ2UiLCJxdWVyaWVzIiwiZmlsdGVyIiwiaXRlbSIsInJlc3VsdCIsImRzU2V0dGluZ3MiLCJzdGFydEluZGV4Iiwic291cmNlIiwiaW5kZXgiLCJudW1iZXJPZlF1ZXJpZXMiLCJsZW5ndGgiLCJkYXRhc291cmNlVHlwZSIsImRlc3RpbmF0aW9uIiwiZW5kSW5kZXgiLCJ1cGRhdGUiLCJBcnJheSIsImZyb20iLCJyZW1vdmVkIiwic3BsaWNlIiwib25DaGFuZ2VRdWVyeSIsIm1hcCIsIml0ZW1JbmRleCIsIm9uRGF0YVNvdXJjZUNoYW5nZSIsImRhdGFTb3VyY2UiLCJkYXRhU291cmNlUmVmIiwidWlkIiwiZGF0YXNvdXJjZSIsInByZXZpb3VzIiwiZ2V0SW5zdGFuY2VTZXR0aW5ncyIsInJlZklkIiwiaGlkZSIsImRhdGEiLCJhcHAiLCJoaXN0b3J5IiwiZXZlbnRCdXMiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsInByb3ZpZGVkIiwiaW5uZXJSZWYiLCJkcm9wcGFibGVQcm9wcyIsImRhdGFTb3VyY2VTZXR0aW5ncyIsImdldERhdGFTb3VyY2VTZXR0aW5ncyIsIm9uQ2hhbmdlRGF0YVNvdXJjZVNldHRpbmdzIiwibWV0YSIsIm1peGVkIiwic2V0dGluZ3MiLCJ1bmRlZmluZWQiLCJvblJlbW92ZVF1ZXJ5Iiwib25BZGRRdWVyeSIsIm9uUnVuUXVlcmllcyIsInBsYWNlaG9sZGVyIiwiZ3JvdXBTZXR0aW5ncyIsInF1ZXJ5U2V0dGluZ3MiLCJjc3MiLCJnZXREZWZhdWx0VGltZVJhbmdlIiwiTG9hZGluZ1N0YXRlIiwic2VsZWN0b3JzIiwiRGF0YVNvdXJjZVBpY2tlciIsIkJ1dHRvbiIsIkN1c3RvbVNjcm9sbGJhciIsIkhvcml6b250YWxHcm91cCIsIklubGluZUZvcm1MYWJlbCIsIk1vZGFsIiwic3R5bGVzRmFjdG9yeSIsImNvbmZpZyIsImJhY2tlbmRTcnYiLCJhZGRRdWVyeSIsImV4cHJlc3Npb25EYXRhc291cmNlIiwiRGFzaGJvYXJkUXVlcnlFZGl0b3IiLCJpc1NoYXJlZERhc2hib2FyZFF1ZXJ5IiwidXBkYXRlUXVlcmllcyIsIkdyb3VwQWN0aW9uQ29tcG9uZW50cyIsIlF1ZXJ5R3JvdXBPcHRpb25zRWRpdG9yIiwiUXVlcnlHcm91cCIsImlzTG9hZGluZ0hlbHAiLCJoZWxwQ29udGVudCIsImlzUGlja2VyT3BlbiIsImlzQWRkaW5nTWl4ZWQiLCJpc0hlbHBPcGVuIiwiTm90U3RhcnRlZCIsInNlcmllcyIsInRpbWVSYW5nZSIsIm5ld1NldHRpbmdzIiwiY3VycmVudERTIiwibmV4dERTIiwiZGF0YVNvdXJjZVNydiIsIm5hbWUiLCJvbkNoYW5nZSIsImRlZmF1bHQiLCJpc0RlZmF1bHQiLCJuZXdRdWVyeSIsIm9uU2Nyb2xsQm90dG9tIiwic2V0VGltZW91dCIsInNjcm9sbEVsZW1lbnQiLCJzY3JvbGxUbyIsInRvcCIsIm9wdGlvbnMiLCJvbk9wdGlvbnNDaGFuZ2UiLCJvbkFkZE1peGVkUXVlcnkiLCJvbk1peGVkUGlja2VyQmx1ciIsInF1ZXJ5UnVubmVyIiwicXVlcnlTdWJzY3JpcHRpb24iLCJnZXREYXRhIiwid2l0aFRyYW5zZm9ybXMiLCJ3aXRoRmllbGRDb25maWciLCJzdWJzY3JpYmUiLCJuZXh0Iiwib25QYW5lbERhdGFVcGRhdGUiLCJkcyIsImRlZmF1bHREYXRhU291cmNlIiwiZ2V0UmVmIiwicSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwidW5zdWJzY3JpYmUiLCJjaGFuZ2VkUHJvcHMiLCJyZW5kZXJUb3BTZWN0aW9uIiwic3R5bGVzIiwib25PcGVuUXVlcnlJbnNwZWN0b3IiLCJkYXRhU291cmNlUm93IiwiZGF0YVNvdXJjZVJvd0l0ZW0iLCJvbkNoYW5nZURhdGFTb3VyY2UiLCJvbk9wZW5IZWxwIiwiZGF0YVNvdXJjZVJvd0l0ZW1PcHRpb25zIiwib25VcGRhdGVBbmRSdW4iLCJjb21wb25lbnRzIiwiUXVlcnlUYWIiLCJxdWVyeUluc3BlY3RvckJ1dHRvbiIsInJlbmRlclF1ZXJpZXMiLCJjb250ZW50IiwiaXNFeHByZXNzaW9uc1N1cHBvcnRlZCIsImFsZXJ0aW5nIiwicmVuZGVyRXh0cmFBY3Rpb25zIiwiZ2V0QWxsRXh0cmFSZW5kZXJBY3Rpb24iLCJhY3Rpb24iLCJrZXkiLCJCb29sZWFuIiwicmVuZGVyQWRkUXVlcnlSb3ciLCJzaG93QWRkQnV0dG9uIiwib25BZGRRdWVyeUNsaWNrIiwiZXhwcmVzc2lvbnNFbmFibGVkIiwib25BZGRFeHByZXNzaW9uQ2xpY2siLCJleHByZXNzaW9uQnV0dG9uIiwiZ2V0U3R5bGVzIiwic2V0U2Nyb2xsUmVmIiwiaW5uZXJXcmFwcGVyIiwicXVlcmllc1dyYXBwZXIiLCJvbkNsb3NlSGVscCIsInRoZW1lIiwic3BhY2luZyIsIm1kIiwiaW5saW5lRm9ybU1hcmdpbiIsImV4cHJlc3Npb25XcmFwcGVyIiwic20iLCJyYW5nZVV0aWwiLCJTd2l0Y2giLCJJbnB1dCIsIklubGluZUZpZWxkIiwiUXVlcnlPcGVyYXRpb25Sb3ciLCJjb25zdHJ1Y3RvciIsImV2ZW50IiwidGltZVJhbmdlRnJvbSIsInRhcmdldCIsInZhbHVlIiwidGltZVJhbmdlU2hpZnQiLCJuZXdWYWx1ZSIsImVtcHR5VG9OdWxsIiwiaXNWYWxpZCIsInRpbWVSYW5nZVZhbGlkYXRpb24iLCJyZWxhdGl2ZVRpbWVJc1ZhbGlkIiwic2hpZnQiLCJ0aW1lU2hpZnRJc1ZhbGlkIiwidGltZVJhbmdlSGlkZSIsImNhY2hlVGltZW91dCIsIm1heERhdGFQb2ludHMiLCJwYXJzZUludCIsImlzTmFOIiwibWluSW50ZXJ2YWwiLCJpc09wZW4iLCJyZW5kZXJDYWNoZVRpbWVvdXRPcHRpb24iLCJ0b29sdGlwIiwicXVlcnlPcHRpb25zIiwib25DYWNoZVRpbWVvdXRCbHVyIiwicmVuZGVyTWF4RGF0YVBvaW50c09wdGlvbiIsInJlYWxNZCIsInJlcXVlc3QiLCJpc0F1dG8iLCJvbk1heERhdGFQb2ludHNCbHVyIiwicmVuZGVySW50ZXJ2YWxPcHRpb24iLCJyZWFsSW50ZXJ2YWwiLCJpbnRlcnZhbCIsIm1pbkludGVydmFsT25EcyIsIm9uTWluSW50ZXJ2YWxCbHVyIiwicmVuZGVyQ29sbGFwc2VkVGV4dCIsIm1kRGVzYyIsImludGVydmFsRGVzYyIsImNvbGxhcHNlZFRleHQiLCJoaWRlVGltZU92ZXJyaWRlIiwicmVsYXRpdmVUaW1lIiwidGltZVNoaWZ0Iiwib25PcGVuT3B0aW9ucyIsIm9uQ2xvc2VPcHRpb25zIiwib25SZWxhdGl2ZVRpbWVDaGFuZ2UiLCJvbk92ZXJyaWRlVGltZSIsIm9uVGltZVNoaWZ0Q2hhbmdlIiwib25UaW1lU2hpZnQiLCJvblRvZ2dsZVRpbWVPdmVycmlkZSIsImlzVmFsaWRUaW1lU3BhbiIsInR5cG9ncmFwaHkiLCJzaXplIiwiY29sb3JzIiwidGV4dFdlYWsiLCJoYXNRdWVyeUV4cG9ydFN1cHBvcnQiLCJoYXNRdWVyeUltcG9ydFN1cHBvcnQiLCJpc0V4cHJlc3Npb25SZWZlcmVuY2UiLCJuZXh0UXVlcmllcyIsImFic3RyYWN0UXVlcmllcyIsImV4cG9ydFRvQWJzdHJhY3RRdWVyaWVzIiwiaW1wb3J0RnJvbUFic3RyYWN0UXVlcmllcyIsImltcG9ydFF1ZXJpZXMiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VPYnNlcnZhYmxlIiwiQXV0b1NpemVyIiwiZGF0ZU1hdGgiLCJGaWVsZENvbG9yTW9kZUlkIiwiVGFibGUiLCJ1c2VBcHBOb3RpZmljYXRpb24iLCJQYWdlIiwiUGFuZWxSZW5kZXJlciIsIlBhbmVsUXVlcnlSdW5uZXIiLCJUZXN0U3R1ZmZQYWdlIiwiZ2V0RGVmYXVsdFN0YXRlIiwidG8iLCJydW4iLCJ0aW1lem9uZSIsInBhcnNlIiwicmF3Iiwib2JzZXJ2YWJsZSIsIm5vZGUiLCJ0ZXh0IiwiaWNvbiIsInN1YlRpdGxlIiwidXJsIiwibm90aWZ5QXBwIiwibWFpbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGVmYXVsdHMiLCJvdmVycmlkZXMiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiZ2FwIiwic3VjY2VzcyIsIndhcm5pbmciLCJmaWVsZENvbmZpZyIsImNvbG9yIiwibW9kZSIsIlBhbGV0dGVDbGFzc2ljIiwicmVwbGFjZVZhcmlhYmxlcyIsInYiLCJ0aGVtZTIiLCJkYXRhQ29uZmlnIiwiZ2V0VHJhbnNmb3JtYXRpb25zIiwiZ2V0RmllbGRPdmVycmlkZU9wdGlvbnMiLCJnZXREYXRhU3VwcG9ydCIsImFubm90YXRpb25zIiwiYWxlcnRTdGF0ZXMiXSwic291cmNlUm9vdCI6IiJ9