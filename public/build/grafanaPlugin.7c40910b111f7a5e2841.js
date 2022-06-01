"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7537],{

/***/ "./public/app/plugins/datasource/grafana/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "plugin": () => (/* binding */ module_plugin)
});

// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/grafana/types.ts
var types = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana/components/QueryEditor.tsx
var _Alert, _Alert2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const labelWidth = 12;
class QueryEditor extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      channels: [],
      channelFields: {}
    });

    _defineProperty(this, "queryTypes", [{
      label: 'Random Walk',
      value: types/* GrafanaQueryType.RandomWalk */.hR.RandomWalk,
      description: 'Random signal within the selected time range'
    }, {
      label: 'Live Measurements',
      value: types/* GrafanaQueryType.LiveMeasurements */.hR.LiveMeasurements,
      description: 'Stream real-time measurements from Grafana'
    }, {
      label: 'List public files',
      value: types/* GrafanaQueryType.List */.hR.List,
      description: 'Show directory listings for public resources'
    }]);

    _defineProperty(this, "onQueryTypeChange", sel => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        queryType: sel.value
      }));
      onRunQuery(); // Reload the channel list

      this.loadChannelInfo();
    });

    _defineProperty(this, "onChannelChange", sel => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        channel: sel === null || sel === void 0 ? void 0 : sel.value
      }));
      onRunQuery();
    });

    _defineProperty(this, "onFieldNamesChange", item => {
      var _query$filter, _query$filter$fields;

      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      let fields = [];

      if (Array.isArray(item)) {
        fields = item.map(v => v.value);
      } else if (item.value) {
        fields = [item.value];
      } // When adding the first field, also add time (if it exists)


      if (fields.length === 1 && !((_query$filter = query.filter) !== null && _query$filter !== void 0 && (_query$filter$fields = _query$filter.fields) !== null && _query$filter$fields !== void 0 && _query$filter$fields.length) && query.channel) {
        var _this$state$channelFi;

        const names = (_this$state$channelFi = this.state.channelFields[query.channel]) !== null && _this$state$channelFi !== void 0 ? _this$state$channelFi : [];
        const tf = names.find(f => f.value === 'time' || f.value === 'Time');

        if (tf && tf.value && tf.value !== fields[0]) {
          fields = [tf.value, ...fields];
        }
      }

      onChange(Object.assign({}, query, {
        filter: Object.assign({}, query.filter, {
          fields
        })
      }));
      onRunQuery();
    });

    _defineProperty(this, "checkAndUpdateValue", (key, txt) => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;

      if (key === 'buffer') {
        let buffer;

        if (txt) {
          try {
            buffer = src.rangeUtil.intervalToSeconds(txt) * 1000;
          } catch (err) {
            console.warn('ERROR', err);
          }
        }

        onChange(Object.assign({}, query, {
          buffer
        }));
      } else {
        onChange(Object.assign({}, query, {
          [key]: txt
        }));
      }

      onRunQuery();
    });

    _defineProperty(this, "handleEnterKey", e => {
      if (e.key !== 'Enter') {
        return;
      }

      this.checkAndUpdateValue('buffer', e.target.value);
    });

    _defineProperty(this, "handleBlur", e => {
      this.checkAndUpdateValue('buffer', e.target.value);
    });

    _defineProperty(this, "onFolderChanged", sel => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        path: sel === null || sel === void 0 ? void 0 : sel.value
      }));
      onRunQuery();
    });

    _defineProperty(this, "handleSearchEnterKey", e => {
      if (e.key !== 'Enter') {
        return;
      }

      this.checkAndUpdateValue('query', e.target.value);
    });

    _defineProperty(this, "handleSearchBlur", e => {
      this.checkAndUpdateValue('query', e.target.value);
    });

    _defineProperty(this, "onSaveSearchJSON", rawSearchJSON => {
      try {
        const json = JSON.parse(rawSearchJSON);
        json.queryType = types/* GrafanaQueryType.Search */.hR.Search;
        this.props.onChange(json);
        this.props.onRunQuery();
      } catch (ex) {
        console.log('UNABLE TO parse search', rawSearchJSON, ex);
      }
    });

    if (grafana_runtime_src.config.featureToggles.panelTitleSearch) {
      this.queryTypes.push({
        label: 'Search',
        value: types/* GrafanaQueryType.Search */.hR.Search,
        description: 'Search for grafana resources'
      });
    }
  }

  loadChannelInfo() {
    (0,grafana_runtime_src.getBackendSrv)().fetch({
      url: 'api/live/list'
    }).subscribe({
      next: v => {
        var _v$data;

        const channelInfo = (_v$data = v.data) === null || _v$data === void 0 ? void 0 : _v$data.channels;

        if (channelInfo !== null && channelInfo !== void 0 && channelInfo.length) {
          const channelFields = {};
          const channels = channelInfo.map(c => {
            if (c.data) {
              const distinctFields = new Set();
              const frame = (0,src.dataFrameFromJSON)(c.data);

              for (const f of frame.fields) {
                distinctFields.add(f.name);
              }

              channelFields[c.channel] = Array.from(distinctFields).map(n => ({
                value: n,
                label: n
              }));
            }

            return {
              value: c.channel,
              label: c.channel + ' [' + c.minute_rate + ' msg/min]'
            };
          });
          this.setState({
            channelFields,
            channels
          });
        }
      }
    });
  }

  loadFolderInfo() {
    const query = {
      targets: [{
        queryType: types/* GrafanaQueryType.List */.hR.List,
        refId: 'A'
      }]
    };
    (0,grafana_runtime_src.getDataSourceSrv)().get('-- Grafana --').then(ds => {
      const gds = ds;
      gds.query(query).subscribe({
        next: rsp => {
          if (rsp.data.length) {
            const names = rsp.data[0].fields[0];
            const folders = names.values.toArray().map(v => ({
              value: v,
              label: v
            }));
            this.setState({
              folders
            });
          }
        }
      });
    });
  }

  componentDidMount() {
    this.loadChannelInfo();
  }

  renderMeasurementsQuery() {
    var _channelFields$channe;

    let {
      channel,
      filter,
      buffer
    } = this.props.query;
    let {
      channels,
      channelFields
    } = this.state;
    let currentChannel = channels.find(c => c.value === channel);

    if (channel && !currentChannel) {
      currentChannel = {
        value: channel,
        label: channel,
        description: `Connected to ${channel}`
      };
      channels = [currentChannel, ...channels];
    }

    const distinctFields = new Set();
    const fields = channel ? (_channelFields$channe = channelFields[channel]) !== null && _channelFields$channe !== void 0 ? _channelFields$channe : [] : []; // if (data && data.series?.length) {
    //   for (const frame of data.series) {
    //     for (const field of frame.fields) {
    //       if (distinctFields.has(field.name) || !field.name) {
    //         continue;
    //       }
    //       fields.push({
    //         value: field.name,
    //         label: field.name,
    //         description: `(${getFrameDisplayName(frame)} / ${field.type})`,
    //       });
    //       distinctFields.add(field.name);
    //     }
    //   }
    // }

    if (filter !== null && filter !== void 0 && filter.fields) {
      for (const f of filter.fields) {
        if (!distinctFields.has(f)) {
          fields.push({
            value: f,
            label: `${f} (not loaded)`,
            description: `Configured, but not found in the query results`
          });
          distinctFields.add(f);
        }
      }
    }

    let formattedTime = '';

    if (buffer) {
      formattedTime = src.rangeUtil.secondsToHms(buffer / 1000);
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Channel",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            options: channels,
            value: currentChannel || '',
            onChange: this.onChannelChange,
            allowCustomValue: true,
            backspaceRemovesValue: true,
            placeholder: "Select measurements channel",
            isClearable: true,
            noOptionsMessage: "Enter channel name",
            formatCreateLabel: input => `Connect to: ${input}`
          })
        })
      }), channel && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Fields",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            options: fields,
            value: (filter === null || filter === void 0 ? void 0 : filter.fields) || [],
            onChange: this.onFieldNamesChange,
            allowCustomValue: true,
            backspaceRemovesValue: true,
            placeholder: "All fields",
            isClearable: true,
            noOptionsMessage: "Unable to list all fields",
            formatCreateLabel: input => `Field: ${input}`,
            isSearchable: true,
            isMulti: true
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Buffer",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            placeholder: "Auto",
            width: 12,
            defaultValue: formattedTime,
            onKeyDown: this.handleEnterKey,
            onBlur: this.handleBlur,
            spellCheck: false
          })
        })]
      }), _Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: "Grafana Live - Measurements",
        severity: "info",
        children: "This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready."
      }))]
    });
  }

  renderListPublicFiles() {
    let {
      path
    } = this.props.query;
    let {
      folders
    } = this.state;

    if (!folders) {
      folders = [];
      this.loadFolderInfo();
    }

    const currentFolder = folders.find(f => f.value === path);

    if (path && !currentFolder) {
      folders = [...folders, {
        value: path,
        label: path
      }];
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Path",
        grow: true,
        labelWidth: labelWidth,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          options: folders,
          value: currentFolder || '',
          onChange: this.onFolderChanged,
          allowCustomValue: true,
          backspaceRemovesValue: true,
          placeholder: "Select folder",
          isClearable: true,
          formatCreateLabel: input => `Folder: ${input}`
        })
      })
    });
  }

  renderSearch() {
    var _this$props$query, _query$query;

    let query = (_this$props$query = this.props.query) !== null && _this$props$query !== void 0 ? _this$props$query : {};
    const emptySearchQuery = {
      query: '*',
      location: '',
      // general, etc
      ds_uid: '',
      sort: 'score desc',
      tags: [],
      kind: ['dashboard', 'folder'],
      uid: [],
      id: [],
      explain: true,
      accessInfo: true,
      facet: [{
        field: 'kind'
      }, {
        field: 'tag'
      }, {
        field: 'location'
      }],
      hasPreview: 'dark',
      from: 0,
      limit: 20
    };
    const json = JSON.stringify(query !== null && query !== void 0 ? query : {}, null, 2);

    for (const [key, val] of Object.entries(emptySearchQuery)) {
      if (query[key] == null) {
        query[key] = val;
      }
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_Alert2 || (_Alert2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: "Grafana Search",
        severity: "info",
        children: "This interface to the grafana search API is experimental, and subject to change at any time without notice"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Query",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            placeholder: "Everything",
            defaultValue: (_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '',
            onKeyDown: this.handleSearchEnterKey,
            onBlur: this.handleSearchBlur,
            spellCheck: false
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
        height: 300,
        language: "json",
        value: json,
        onBlur: this.onSaveSearchJSON,
        onSave: this.onSaveSearchJSON,
        showMiniMap: true,
        showLineNumbers: true
      })]
    });
  }

  render() {
    const query = Object.assign({}, types/* defaultQuery */.wi, this.props.query);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Query type",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            options: this.queryTypes,
            value: this.queryTypes.find(v => v.value === query.queryType) || this.queryTypes[0],
            onChange: this.onQueryTypeChange
          })
        })
      }), query.queryType === types/* GrafanaQueryType.LiveMeasurements */.hR.LiveMeasurements && this.renderMeasurementsQuery(), query.queryType === types/* GrafanaQueryType.List */.hR.List && this.renderListPublicFiles(), query.queryType === types/* GrafanaQueryType.Search */.hR.Search && this.renderSearch()]
    });
  }

}
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js
var from = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js
var merge = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./public/app/features/dashboard/state/DashboardMigrator.ts + 2 modules
var DashboardMigrator = __webpack_require__("./public/app/features/dashboard/state/DashboardMigrator.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/DashboardSrv.ts
var DashboardSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./public/app/core/components/TagFilter/TagFilter.tsx + 1 modules
var TagFilter = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
// EXTERNAL MODULE: ./public/app/features/annotations/api.ts
var api = __webpack_require__("./public/app/features/annotations/api.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana/components/AnnotationQueryEditor.tsx









const matchTooltipContent = 'Enabling this returns annotations that match any of the tags specified below';

const tagsTooltipContent = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
  children: "Specify a list of tags to match. To specify a key and value tag use `key:value` syntax."
});

const annotationTypes = [{
  label: 'Dashboard',
  value: types/* GrafanaAnnotationType.Dashboard */._$.Dashboard,
  description: 'Query for events created on this dashboard and show them in the panels where they where created'
}, {
  label: 'Tags',
  value: types/* GrafanaAnnotationType.Tags */._$.Tags,
  description: 'This will fetch any annotation events that match the tags filter'
}];
const limitOptions = [10, 50, 100, 200, 300, 500, 1000, 2000].map(limit => ({
  label: String(limit),
  value: limit
}));
function AnnotationQueryEditor(_ref) {
  let {
    query,
    onChange
  } = _ref;
  const annotationQuery = query;
  const {
    limit,
    matchAny,
    tags,
    type
  } = annotationQuery;
  const styles = getStyles();

  const onFilterByChange = newValue => onChange(Object.assign({}, annotationQuery, {
    type: newValue.value
  }));

  const onMaxLimitChange = newValue => onChange(Object.assign({}, annotationQuery, {
    limit: newValue.value
  }));

  const onMatchAnyChange = newValue => onChange(Object.assign({}, annotationQuery, {
    matchAny: newValue.target.checked
  }));

  const onTagsChange = tags => onChange(Object.assign({}, annotationQuery, {
    tags
  }));

  const onFormatCreateLabel = input => `Use custom value: ${input}`;

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.FieldSet, {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: "Filter by",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: "grafana-annotations__filter-by",
        options: annotationTypes,
        value: type,
        onChange: onFilterByChange
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: "Max limit",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: "grafana-annotations__limit",
        width: 16,
        options: limitOptions,
        value: limit,
        onChange: onMaxLimitChange
      })
    }), type === types/* GrafanaAnnotationType.Tags */._$.Tags && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
        label: "Match any",
        description: matchTooltipContent,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Switch, {
          id: "grafana-annotations__match-any",
          value: matchAny,
          onChange: onMatchAnyChange
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
        label: "Tags",
        description: tagsTooltipContent,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TagFilter/* TagFilter */.D, {
          allowCustomValue: true,
          formatCreateLabel: onFormatCreateLabel,
          inputId: "grafana-annotations__tags",
          onChange: onTagsChange,
          tagOptions: api/* getAnnotationTags */.lK,
          tags: tags !== null && tags !== void 0 ? tags : []
        })
      })]
    })]
  });
}

const getStyles = () => {
  return {
    container: emotion_css_esm.css`
      max-width: 600px;
    `
  };
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana/datasource.ts









let counter = 100;
class GrafanaDatasource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.annotations = {
      QueryEditor: AnnotationQueryEditor,

      prepareAnnotation(json) {
        var _json$target, _json$type, _json$limit, _json$tags, _json$matchAny;

        // Previously, these properties lived outside of target
        // This should handle migrating them
        json.target = (_json$target = json.target) !== null && _json$target !== void 0 ? _json$target : {
          type: (_json$type = json.type) !== null && _json$type !== void 0 ? _json$type : types/* GrafanaAnnotationType.Dashboard */._$.Dashboard,
          limit: (_json$limit = json.limit) !== null && _json$limit !== void 0 ? _json$limit : 100,
          tags: (_json$tags = json.tags) !== null && _json$tags !== void 0 ? _json$tags : [],
          matchAny: (_json$matchAny = json.matchAny) !== null && _json$matchAny !== void 0 ? _json$matchAny : false
        }; // using spread syntax caused an infinite loop in StandardAnnotationQueryEditor

        return json;
      },

      prepareQuery(anno) {
        let datasource = undefined;

        if ((0,lodash.isString)(anno.datasource)) {
          const ref = (0,DashboardMigrator/* migrateDatasourceNameToRef */.p)(anno.datasource, {
            returnDefaultAsNull: false
          });

          if (ref) {
            datasource = ref;
          }
        } else {
          datasource = anno.datasource;
        }

        return Object.assign({}, anno, {
          refId: anno.name,
          queryType: types/* GrafanaQueryType.Annotations */.hR.Annotations,
          datasource
        });
      }

    };
  }

  query(request) {
    const results = [];
    const targets = [];
    const templateSrv = (0,grafana_runtime_src.getTemplateSrv)();

    for (const target of request.targets) {
      if (target.queryType === types/* GrafanaQueryType.Annotations */.hR.Annotations) {
        return (0,from/* from */.D)(this.getAnnotations({
          range: request.range,
          rangeRaw: request.range.raw,
          annotation: target,
          dashboard: (0,DashboardSrv/* getDashboardSrv */.h4)().getCurrent()
        }));
      }

      if (target.hide) {
        continue;
      }

      if (target.queryType === types/* GrafanaQueryType.LiveMeasurements */.hR.LiveMeasurements) {
        var _request$maxDataPoint, _request$rangeRaw;

        let channel = templateSrv.replace(target.channel, request.scopedVars);
        const {
          filter
        } = target; // Help migrate pre-release channel paths saved in dashboards
        // NOTE: this should be removed before V8 is released

        if (channel && channel.startsWith('telegraf/')) {
          channel = 'stream/' + channel;
          target.channel = channel; // mutate the current query object so it is saved with `stream/` prefix
        }

        const addr = (0,src.parseLiveChannelAddress)(channel);

        if (!(0,src.isValidLiveChannelAddress)(addr)) {
          continue;
        }

        const buffer = {
          maxLength: (_request$maxDataPoint = request.maxDataPoints) !== null && _request$maxDataPoint !== void 0 ? _request$maxDataPoint : 500
        };

        if (target.buffer) {
          buffer.maxDelta = target.buffer;
          buffer.maxLength = buffer.maxLength * 2; //??
        } else if (((_request$rangeRaw = request.rangeRaw) === null || _request$rangeRaw === void 0 ? void 0 : _request$rangeRaw.to) === 'now') {
          buffer.maxDelta = request.range.to.valueOf() - request.range.from.valueOf();
        }

        results.push((0,grafana_runtime_src.getGrafanaLiveSrv)().getDataStream({
          key: `${request.requestId}.${counter++}`,
          addr: addr,
          filter,
          buffer
        }));
      } else {
        if (!target.queryType) {
          target.queryType = types/* GrafanaQueryType.RandomWalk */.hR.RandomWalk;
        }

        targets.push(target);
      }
    }

    if (targets.length) {
      results.push(super.query(Object.assign({}, request, {
        targets
      })));
    }

    if (results.length) {
      // With a single query just return the results
      if (results.length === 1) {
        return results[0];
      }

      return (0,merge/* merge */.T)(...results);
    }

    return (0,of.of)(); // nothing
  }

  listFiles(path) {
    return this.query({
      targets: [{
        refId: 'A',
        queryType: types/* GrafanaQueryType.List */.hR.List,
        path
      }]
    }).pipe((0,map/* map */.U)(v => {
      var _v$data$;

      const frame = (_v$data$ = v.data[0]) !== null && _v$data$ !== void 0 ? _v$data$ : new src.MutableDataFrame();
      return new src.DataFrameView(frame);
    }));
  }

  metricFindQuery(options) {
    return Promise.resolve([]);
  }

  async getAnnotations(options) {
    var _options$dashboard;

    const templateSrv = (0,grafana_runtime_src.getTemplateSrv)();
    const annotation = options.annotation;
    const target = annotation.target;
    const params = {
      from: options.range.from.valueOf(),
      to: options.range.to.valueOf(),
      limit: target.limit,
      tags: target.tags,
      matchAny: target.matchAny
    };

    if (target.type === types/* GrafanaAnnotationType.Dashboard */._$.Dashboard) {
      // if no dashboard id yet return
      if (!options.dashboard.id) {
        return Promise.resolve({
          data: []
        });
      } // filter by dashboard id


      params.dashboardId = options.dashboard.id; // remove tags filter if any

      delete params.tags;
    } else {
      // require at least one tag
      if (!Array.isArray(target.tags) || target.tags.length === 0) {
        return Promise.resolve({
          data: []
        });
      }

      const delimiter = '__delimiter__';
      const tags = [];

      for (const t of params.tags) {
        const renderedValues = templateSrv.replace(t, {}, value => {
          if (typeof value === 'string') {
            return value;
          }

          return value.join(delimiter);
        });

        for (const tt of renderedValues.split(delimiter)) {
          tags.push(tt);
        }
      }

      params.tags = tags;
    }

    const annotations = await (0,grafana_runtime_src.getBackendSrv)().get('/api/annotations', params, `grafana-data-source-annotations-${annotation.name}-${(_options$dashboard = options.dashboard) === null || _options$dashboard === void 0 ? void 0 : _options$dashboard.id}`);
    return {
      data: [(0,src.toDataFrame)(annotations)]
    };
  }

  testDatasource() {
    return Promise.resolve();
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana/module.ts



const module_plugin = new src.DataSourcePlugin(GrafanaDatasource).setQueryEditor(QueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_$": () => (/* binding */ GrafanaAnnotationType),
/* harmony export */   "hR": () => (/* binding */ GrafanaQueryType),
/* harmony export */   "wi": () => (/* binding */ defaultQuery)
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

/***/ })

}]);