"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8595],{

 "./public/app/features/query/components/QueryEditorRows.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "l": () => ( QueryEditorRows)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _QueryEditorRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class QueryEditorRows extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);

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
    } = this.props; 

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
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ .Z5, {
      onDragStart: this.onDragStart,
      onDragEnd: this.onDragEnd,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ .bK, {
        droppableId: "transformations-list",
        direction: "vertical",
        children: provided => {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", Object.assign({
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [queries.map((query, index) => {
              const dataSourceSettings = getDataSourceSettings(query, dsSettings);
              const onChangeDataSourceSettings = dsSettings.meta.mixed ? settings => this.onDataSourceChange(settings, index) : undefined;
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_QueryEditorRow__WEBPACK_IMPORTED_MODULE_2__ .x, {
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

 }),

 "./public/app/features/sandbox/TestStuffPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "TestStuffPage": () => ( TestStuffPage),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
   "getDefaultState": () => ( getDefaultState)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js");
 var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
 var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
 var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var _panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/panel/components/PanelRenderer.tsx");
 var _query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/query/components/QueryGroup.tsx");
 var _query_state_PanelQueryRunner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/query/state/PanelQueryRunner.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













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


  const observable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => queryRunner.getData({
    withFieldConfig: true,
    withTransforms: true
  }), [queryRunner]);
  const data = (0,react_use__WEBPACK_IMPORTED_MODULE_11__ .Z)(observable);
  const node = {
    id: 'test-page',
    text: 'Test page',
    icon: 'dashboard',
    subTitle: 'FOR TESTING!',
    url: 'sandbox/test'
  };
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ .iG)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ .Z, {
    navModel: {
      node: node,
      main: node
    },
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ .Z.Contents, {
      children: [data && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__ .Z, {
        style: {
          width: '100%',
          height: '600px'
        },
        children: _ref => {
          let {
            width
          } = _ref;
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_panel_components_PanelRenderer__WEBPACK_IMPORTED_MODULE_7__ .$, {
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
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Table, {
              data: data.series[0],
              width: width,
              height: 300
            })]
          });
        }
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        style: {
          marginTop: '16px',
          height: '45%'
        },
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_query_components_QueryGroup__WEBPACK_IMPORTED_MODULE_8__ .D, {
          options: queryOptions,
          queryRunner: queryRunner,
          onRunQueries: onRunQueries,
          onOptionsChange: onOptionsChange
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        style: {
          display: 'flex',
          gap: '1em'
        },
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => notifyApp.success('Success toast', 'some more text goes here'),
          variant: "primary",
          children: "Success"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          onClick: () => notifyApp.warning('Warning toast', 'some more text goes here', 'bogus-trace-99999'),
          variant: "secondary",
          children: "Warning"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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
    theme: app_core_config__WEBPACK_IMPORTED_MODULE_4__ .vc.theme2
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
    queryRunner: new _query_state_PanelQueryRunner__WEBPACK_IMPORTED_MODULE_9__ .o(dataConfig),
    queryOptions: {
      queries: [],
      dataSource: {
        name: 'gdev-testdata'
      },
      maxDataPoints: 100
    }
  };
}
 const __WEBPACK_DEFAULT_EXPORT__ = (TestStuffPage);

 }),

 "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ .Z)(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
 const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


 })

}]);