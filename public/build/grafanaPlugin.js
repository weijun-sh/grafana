"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["grafanaPlugin"],{

/***/ "./public/app/plugins/datasource/grafana/components/AnnotationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnnotationQueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var app_features_annotations_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/annotations/api.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const matchTooltipContent = 'Enabling this returns annotations that match any of the tags specified below';

const tagsTooltipContent = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
  children: "Specify a list of tags to match. To specify a key and value tag use `key:value` syntax."
});

const annotationTypes = [{
  label: 'Dashboard',
  value: _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaAnnotationType.Dashboard,
  description: 'Query for events created on this dashboard and show them in the panels where they where created'
}, {
  label: 'Tags',
  value: _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaAnnotationType.Tags,
  description: 'This will fetch any annotation events that match the tags filter'
}];
const limitOptions = [10, 50, 100, 200, 300, 500, 1000, 2000].map(limit => ({
  label: String(limit),
  value: limit
}));
function AnnotationQueryEditor({
  query,
  onChange
}) {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: "Filter by",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
        inputId: "grafana-annotations__filter-by",
        options: annotationTypes,
        value: type,
        onChange: onFilterByChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      label: "Max limit",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
        inputId: "grafana-annotations__limit",
        width: 16,
        options: limitOptions,
        value: limit,
        onChange: onMaxLimitChange
      })
    }), type === _types__WEBPACK_IMPORTED_MODULE_5__.GrafanaAnnotationType.Tags && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Match any",
        description: matchTooltipContent,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
          id: "grafana-annotations__match-any",
          value: matchAny,
          onChange: onMatchAnyChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
        label: "Tags",
        description: tagsTooltipContent,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_3__.TagFilter, {
          allowCustomValue: true,
          formatCreateLabel: onFormatCreateLabel,
          inputId: "grafana-annotations__tags",
          onChange: onTagsChange,
          tagOptions: app_features_annotations_api__WEBPACK_IMPORTED_MODULE_4__.getAnnotationTags,
          tags: tags !== null && tags !== void 0 ? tags : []
        })
      })]
    })]
  });
}

const getStyles = () => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: 600px;
    `
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Alert2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const labelWidth = 12;
class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      channels: [],
      channelFields: {}
    });

    _defineProperty(this, "queryTypes", [{
      label: 'Random Walk',
      value: _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaQueryType.RandomWalk,
      description: 'Random signal within the selected time range'
    }, {
      label: 'Live Measurements',
      value: _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaQueryType.LiveMeasurements,
      description: 'Stream real-time measurements from Grafana'
    }, {
      label: 'List public files',
      value: _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaQueryType.List,
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
            buffer = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.intervalToSeconds(txt) * 1000;
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
        json.queryType = _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaQueryType.Search;
        this.props.onChange(json);
        this.props.onRunQuery();
      } catch (ex) {
        console.log('UNABLE TO parse search', rawSearchJSON, ex);
      }
    });

    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.panelTitleSearch) {
      this.queryTypes.push({
        label: 'Search',
        value: _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaQueryType.Search,
        description: 'Search for grafana resources'
      });
    }
  }

  loadChannelInfo() {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch({
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
              const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dataFrameFromJSON)(c.data);

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
        queryType: _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaQueryType.List,
        refId: 'A'
      }]
    };
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().get('-- Grafana --').then(ds => {
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
      formattedTime = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.secondsToHms(buffer / 1000);
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Channel",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
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
      }), channel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Fields",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Buffer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
            placeholder: "Auto",
            width: 12,
            defaultValue: formattedTime,
            onKeyDown: this.handleEnterKey,
            onBlur: this.handleBlur,
            spellCheck: false
          })
        })]
      }), _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
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

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Path",
        grow: true,
        labelWidth: labelWidth,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
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

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_Alert2 || (_Alert2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: "Grafana Search",
        severity: "info",
        children: "This interface to the grafana search API is experimental, and subject to change at any time without notice"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Query",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
            placeholder: "Everything",
            defaultValue: (_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '',
            onKeyDown: this.handleSearchEnterKey,
            onBlur: this.handleSearchBlur,
            spellCheck: false
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditor, {
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
    const query = Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_4__.defaultQuery, this.props.query);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Query type",
          grow: true,
          labelWidth: labelWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            options: this.queryTypes,
            value: this.queryTypes.find(v => v.value === query.queryType) || this.queryTypes[0],
            onChange: this.onQueryTypeChange
          })
        })
      }), query.queryType === _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaQueryType.LiveMeasurements && this.renderMeasurementsQuery(), query.queryType === _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaQueryType.List && this.renderListPublicFiles(), query.queryType === _types__WEBPACK_IMPORTED_MODULE_4__.GrafanaQueryType.Search && this.renderSearch()]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaDatasource": () => (/* binding */ GrafanaDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_dashboard_state_DashboardMigrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/state/DashboardMigrator.ts");
/* harmony import */ var _features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/AnnotationQueryEditor.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");









let counter = 100;
class GrafanaDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourceWithBackend {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.annotations = {
      QueryEditor: _components_AnnotationQueryEditor__WEBPACK_IMPORTED_MODULE_5__["default"],

      prepareAnnotation(json) {
        var _json$target, _json$type, _json$limit, _json$tags, _json$matchAny;

        // Previously, these properties lived outside of target
        // This should handle migrating them
        json.target = (_json$target = json.target) !== null && _json$target !== void 0 ? _json$target : {
          type: (_json$type = json.type) !== null && _json$type !== void 0 ? _json$type : _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaAnnotationType.Dashboard,
          limit: (_json$limit = json.limit) !== null && _json$limit !== void 0 ? _json$limit : 100,
          tags: (_json$tags = json.tags) !== null && _json$tags !== void 0 ? _json$tags : [],
          matchAny: (_json$matchAny = json.matchAny) !== null && _json$matchAny !== void 0 ? _json$matchAny : false
        }; // using spread syntax caused an infinite loop in StandardAnnotationQueryEditor

        return json;
      },

      prepareQuery(anno) {
        let datasource = undefined;

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(anno.datasource)) {
          const ref = (0,app_features_dashboard_state_DashboardMigrator__WEBPACK_IMPORTED_MODULE_3__.migrateDatasourceNameToRef)(anno.datasource, {
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
          queryType: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Annotations,
          datasource
        });
      }

    };
  }

  query(request) {
    const results = [];
    const targets = [];
    const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)();

    for (const target of request.targets) {
      if (target.queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.Annotations) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.getAnnotations({
          range: request.range,
          rangeRaw: request.range.raw,
          annotation: target,
          dashboard: (0,_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_4__.getDashboardSrv)().getCurrent()
        }));
      }

      if (target.hide) {
        continue;
      }

      if (target.queryType === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.LiveMeasurements) {
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

        const addr = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.parseLiveChannelAddress)(channel);

        if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.isValidLiveChannelAddress)(addr)) {
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

        results.push((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getGrafanaLiveSrv)().getDataStream({
          key: `${request.requestId}.${counter++}`,
          addr: addr,
          filter,
          buffer
        }));
      } else {
        if (!target.queryType) {
          target.queryType = _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.RandomWalk;
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

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...results);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(); // nothing
  }

  listFiles(path) {
    return this.query({
      targets: [{
        refId: 'A',
        queryType: _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaQueryType.List,
        path
      }]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(v => {
      var _v$data$;

      const frame = (_v$data$ = v.data[0]) !== null && _v$data$ !== void 0 ? _v$data$ : new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame();
      return new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataFrameView(frame);
    }));
  }

  metricFindQuery(options) {
    return Promise.resolve([]);
  }

  async getAnnotations(options) {
    var _options$dashboard;

    const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)();
    const annotation = options.annotation;
    const target = annotation.target;
    const params = {
      from: options.range.from.valueOf(),
      to: options.range.to.valueOf(),
      limit: target.limit,
      tags: target.tags,
      matchAny: target.matchAny
    };

    if (target.type === _types__WEBPACK_IMPORTED_MODULE_6__.GrafanaAnnotationType.Dashboard) {
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

    const annotations = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get('/api/annotations', params, `grafana-data-source-annotations-${annotation.name}-${(_options$dashboard = options.dashboard) === null || _options$dashboard === void 0 ? void 0 : _options$dashboard.id}`);
    return {
      data: [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toDataFrame)(annotations)]
    };
  }

  testDatasource() {
    return Promise.resolve();
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/grafana/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/QueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/grafana/datasource.ts");



const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.GrafanaDatasource).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_1__.QueryEditor);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJoRCxFQUFHLEVBSHBELENBQTFCO0FBS0EsV0FBTztBQUFFMUMsTUFBQUEsSUFBSSxFQUFFLENBQUNnRSwwREFBVyxDQUFDUyxXQUFELENBQVo7QUFBUixLQUFQO0FBQ0Q7O0FBRUQ2QyxFQUFBQSxjQUFjLEdBQUc7QUFDZixXQUFPVixPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNEOztBQXhMd0U7Ozs7Ozs7Ozs7Ozs7O0FDakMzRTtBQUVBO0FBQ0E7QUFHTyxNQUFNVyxNQUFNLEdBQUcsSUFBSUQsMkRBQUosQ0FBc0RoRCwwREFBdEQsRUFBeUVrRCxjQUF6RSxDQUNwQjVLLGdFQURvQixDQUFmOzs7Ozs7Ozs7Ozs7O0FDSFA7QUFDQTtBQUNBO0FBRU8sSUFBS0YsZ0JBQVo7O1dBQVlBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0dBQUFBLHFCQUFBQTs7QUFrQlY7QUFFSyxNQUFNRCxZQUEwQixHQUFHO0FBQ3hDbUUsRUFBQUEsS0FBSyxFQUFFLEdBRGlDO0FBRXhDdEQsRUFBQUEsU0FBUyxFQUFFWixnQkFBZ0IsQ0FBQ087QUFGWSxDQUFuQyxFQUtQO0FBQ0E7QUFDQTs7QUFFTyxJQUFLbkQscUJBQVo7O1dBQVlBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0dBQUFBLDBCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFmYW5hL2NvbXBvbmVudHMvQW5ub3RhdGlvblF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhZmFuYS9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhZmFuYS9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9ncmFmYW5hL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvZ3JhZmFuYS90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGaWVsZCwgRmllbGRTZXQsIFNlbGVjdCwgU3dpdGNoIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgVGFnRmlsdGVyIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnRmlsdGVyJztcbmltcG9ydCB7IGdldEFubm90YXRpb25UYWdzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Fubm90YXRpb25zL2FwaSc7XG5cbmltcG9ydCB7IEdyYWZhbmFBbm5vdGF0aW9uUXVlcnksIEdyYWZhbmFBbm5vdGF0aW9uVHlwZSwgR3JhZmFuYVF1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBtYXRjaFRvb2x0aXBDb250ZW50ID0gJ0VuYWJsaW5nIHRoaXMgcmV0dXJucyBhbm5vdGF0aW9ucyB0aGF0IG1hdGNoIGFueSBvZiB0aGUgdGFncyBzcGVjaWZpZWQgYmVsb3cnO1xuXG5jb25zdCB0YWdzVG9vbHRpcENvbnRlbnQgPSAoXG4gIDxkaXY+U3BlY2lmeSBhIGxpc3Qgb2YgdGFncyB0byBtYXRjaC4gVG8gc3BlY2lmeSBhIGtleSBhbmQgdmFsdWUgdGFnIHVzZSBga2V5OnZhbHVlYCBzeW50YXguPC9kaXY+XG4pO1xuXG5jb25zdCBhbm5vdGF0aW9uVHlwZXMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0Rhc2hib2FyZCcsXG4gICAgdmFsdWU6IEdyYWZhbmFBbm5vdGF0aW9uVHlwZS5EYXNoYm9hcmQsXG4gICAgZGVzY3JpcHRpb246ICdRdWVyeSBmb3IgZXZlbnRzIGNyZWF0ZWQgb24gdGhpcyBkYXNoYm9hcmQgYW5kIHNob3cgdGhlbSBpbiB0aGUgcGFuZWxzIHdoZXJlIHRoZXkgd2hlcmUgY3JlYXRlZCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1RhZ3MnLFxuICAgIHZhbHVlOiBHcmFmYW5hQW5ub3RhdGlvblR5cGUuVGFncyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgd2lsbCBmZXRjaCBhbnkgYW5ub3RhdGlvbiBldmVudHMgdGhhdCBtYXRjaCB0aGUgdGFncyBmaWx0ZXInLFxuICB9LFxuXTtcblxuY29uc3QgbGltaXRPcHRpb25zID0gWzEwLCA1MCwgMTAwLCAyMDAsIDMwMCwgNTAwLCAxMDAwLCAyMDAwXS5tYXAoKGxpbWl0KSA9PiAoe1xuICBsYWJlbDogU3RyaW5nKGxpbWl0KSxcbiAgdmFsdWU6IGxpbWl0LFxufSkpO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVyeTogR3JhZmFuYVF1ZXJ5O1xuICBvbkNoYW5nZTogKG5ld1ZhbHVlOiBHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbm5vdGF0aW9uUXVlcnlFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgYW5ub3RhdGlvblF1ZXJ5ID0gcXVlcnkgYXMgR3JhZmFuYUFubm90YXRpb25RdWVyeTtcbiAgY29uc3QgeyBsaW1pdCwgbWF0Y2hBbnksIHRhZ3MsIHR5cGUgfSA9IGFubm90YXRpb25RdWVyeTtcbiAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgY29uc3Qgb25GaWx0ZXJCeUNoYW5nZSA9IChuZXdWYWx1ZTogU2VsZWN0YWJsZVZhbHVlPEdyYWZhbmFBbm5vdGF0aW9uVHlwZT4pID0+XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4uYW5ub3RhdGlvblF1ZXJ5LFxuICAgICAgdHlwZTogbmV3VmFsdWUudmFsdWUhLFxuICAgIH0pO1xuXG4gIGNvbnN0IG9uTWF4TGltaXRDaGFuZ2UgPSAobmV3VmFsdWU6IFNlbGVjdGFibGVWYWx1ZTxudW1iZXI+KSA9PlxuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLmFubm90YXRpb25RdWVyeSxcbiAgICAgIGxpbWl0OiBuZXdWYWx1ZS52YWx1ZSEsXG4gICAgfSk7XG5cbiAgY29uc3Qgb25NYXRjaEFueUNoYW5nZSA9IChuZXdWYWx1ZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4uYW5ub3RhdGlvblF1ZXJ5LFxuICAgICAgbWF0Y2hBbnk6IG5ld1ZhbHVlLnRhcmdldC5jaGVja2VkLFxuICAgIH0pO1xuXG4gIGNvbnN0IG9uVGFnc0NoYW5nZSA9ICh0YWdzOiBzdHJpbmdbXSkgPT5cbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5hbm5vdGF0aW9uUXVlcnksXG4gICAgICB0YWdzLFxuICAgIH0pO1xuXG4gIGNvbnN0IG9uRm9ybWF0Q3JlYXRlTGFiZWwgPSAoaW5wdXQ6IHN0cmluZykgPT4gYFVzZSBjdXN0b20gdmFsdWU6ICR7aW5wdXR9YDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZFNldCBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEZpZWxkIGxhYmVsPVwiRmlsdGVyIGJ5XCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBpbnB1dElkPVwiZ3JhZmFuYS1hbm5vdGF0aW9uc19fZmlsdGVyLWJ5XCJcbiAgICAgICAgICBvcHRpb25zPXthbm5vdGF0aW9uVHlwZXN9XG4gICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uRmlsdGVyQnlDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkIGxhYmVsPVwiTWF4IGxpbWl0XCI+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBpbnB1dElkPVwiZ3JhZmFuYS1hbm5vdGF0aW9uc19fbGltaXRcIlxuICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICBvcHRpb25zPXtsaW1pdE9wdGlvbnN9XG4gICAgICAgICAgdmFsdWU9e2xpbWl0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbk1heExpbWl0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIHt0eXBlID09PSBHcmFmYW5hQW5ub3RhdGlvblR5cGUuVGFncyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTWF0Y2ggYW55XCIgZGVzY3JpcHRpb249e21hdGNoVG9vbHRpcENvbnRlbnR9PlxuICAgICAgICAgICAgPFN3aXRjaCBpZD1cImdyYWZhbmEtYW5ub3RhdGlvbnNfX21hdGNoLWFueVwiIHZhbHVlPXttYXRjaEFueX0gb25DaGFuZ2U9e29uTWF0Y2hBbnlDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJUYWdzXCIgZGVzY3JpcHRpb249e3RhZ3NUb29sdGlwQ29udGVudH0+XG4gICAgICAgICAgICA8VGFnRmlsdGVyXG4gICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgICAgICAgZm9ybWF0Q3JlYXRlTGFiZWw9e29uRm9ybWF0Q3JlYXRlTGFiZWx9XG4gICAgICAgICAgICAgIGlucHV0SWQ9XCJncmFmYW5hLWFubm90YXRpb25zX190YWdzXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVGFnc0NoYW5nZX1cbiAgICAgICAgICAgICAgdGFnT3B0aW9ucz17Z2V0QW5ub3RhdGlvblRhZ3N9XG4gICAgICAgICAgICAgIHRhZ3M9e3RhZ3MgPz8gW119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0ZpZWxkU2V0PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIFF1ZXJ5RWRpdG9yUHJvcHMsXG4gIFNlbGVjdGFibGVWYWx1ZSxcbiAgZGF0YUZyYW1lRnJvbUpTT04sXG4gIHJhbmdlVXRpbCxcbiAgRGF0YVF1ZXJ5UmVxdWVzdCxcbiAgRGF0YUZyYW1lLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZ2V0QmFja2VuZFNydiwgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIFNlbGVjdCwgQWxlcnQsIElucHV0LCBJbmxpbmVGaWVsZFJvdywgQ29kZUVkaXRvciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNlYXJjaFF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3NlYXJjaC9zZXJ2aWNlJztcblxuaW1wb3J0IHsgR3JhZmFuYURhdGFzb3VyY2UgfSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IGRlZmF1bHRRdWVyeSwgR3JhZmFuYVF1ZXJ5LCBHcmFmYW5hUXVlcnlUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0gUXVlcnlFZGl0b3JQcm9wczxHcmFmYW5hRGF0YXNvdXJjZSwgR3JhZmFuYVF1ZXJ5PjtcblxuY29uc3QgbGFiZWxXaWR0aCA9IDEyO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBjaGFubmVsczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICBjaGFubmVsRmllbGRzOiBSZWNvcmQ8c3RyaW5nLCBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+O1xuICBmb2xkZXJzPzogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xufVxuXG5leHBvcnQgY2xhc3MgUXVlcnlFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZTogU3RhdGUgPSB7IGNoYW5uZWxzOiBbXSwgY2hhbm5lbEZpZWxkczoge30gfTtcblxuICBxdWVyeVR5cGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8R3JhZmFuYVF1ZXJ5VHlwZT4+ID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUmFuZG9tIFdhbGsnLFxuICAgICAgdmFsdWU6IEdyYWZhbmFRdWVyeVR5cGUuUmFuZG9tV2FsayxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmFuZG9tIHNpZ25hbCB3aXRoaW4gdGhlIHNlbGVjdGVkIHRpbWUgcmFuZ2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdMaXZlIE1lYXN1cmVtZW50cycsXG4gICAgICB2YWx1ZTogR3JhZmFuYVF1ZXJ5VHlwZS5MaXZlTWVhc3VyZW1lbnRzLFxuICAgICAgZGVzY3JpcHRpb246ICdTdHJlYW0gcmVhbC10aW1lIG1lYXN1cmVtZW50cyBmcm9tIEdyYWZhbmEnLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdMaXN0IHB1YmxpYyBmaWxlcycsXG4gICAgICB2YWx1ZTogR3JhZmFuYVF1ZXJ5VHlwZS5MaXN0LFxuICAgICAgZGVzY3JpcHRpb246ICdTaG93IGRpcmVjdG9yeSBsaXN0aW5ncyBmb3IgcHVibGljIHJlc291cmNlcycsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAoY29uZmlnLmZlYXR1cmVUb2dnbGVzLnBhbmVsVGl0bGVTZWFyY2gpIHtcbiAgICAgIHRoaXMucXVlcnlUeXBlcy5wdXNoKHtcbiAgICAgICAgbGFiZWw6ICdTZWFyY2gnLFxuICAgICAgICB2YWx1ZTogR3JhZmFuYVF1ZXJ5VHlwZS5TZWFyY2gsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU2VhcmNoIGZvciBncmFmYW5hIHJlc291cmNlcycsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBsb2FkQ2hhbm5lbEluZm8oKSB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZmV0Y2goeyB1cmw6ICdhcGkvbGl2ZS9saXN0JyB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6ICh2OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGFubmVsSW5mbyA9IHYuZGF0YT8uY2hhbm5lbHMgYXMgYW55W107XG4gICAgICAgICAgaWYgKGNoYW5uZWxJbmZvPy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5uZWxGaWVsZHM6IFJlY29yZDxzdHJpbmcsIEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4gPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5uZWxzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBjaGFubmVsSW5mby5tYXAoKGMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGMuZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RpbmN0RmllbGRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBkYXRhRnJhbWVGcm9tSlNPTihjLmRhdGEpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiBmcmFtZS5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgIGRpc3RpbmN0RmllbGRzLmFkZChmLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGFubmVsRmllbGRzW2MuY2hhbm5lbF0gPSBBcnJheS5mcm9tKGRpc3RpbmN0RmllbGRzKS5tYXAoKG4pID0+ICh7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogbixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBuLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBjLmNoYW5uZWwsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGMuY2hhbm5lbCArICcgWycgKyBjLm1pbnV0ZV9yYXRlICsgJyBtc2cvbWluXScsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoYW5uZWxGaWVsZHMsIGNoYW5uZWxzIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9hZEZvbGRlckluZm8oKSB7XG4gICAgY29uc3QgcXVlcnk6IERhdGFRdWVyeVJlcXVlc3Q8R3JhZmFuYVF1ZXJ5PiA9IHtcbiAgICAgIHRhcmdldHM6IFt7IHF1ZXJ5VHlwZTogR3JhZmFuYVF1ZXJ5VHlwZS5MaXN0LCByZWZJZDogJ0EnIH1dLFxuICAgIH0gYXMgYW55O1xuXG4gICAgZ2V0RGF0YVNvdXJjZVNydigpXG4gICAgICAuZ2V0KCctLSBHcmFmYW5hIC0tJylcbiAgICAgIC50aGVuKChkcykgPT4ge1xuICAgICAgICBjb25zdCBnZHMgPSBkcyBhcyBHcmFmYW5hRGF0YXNvdXJjZTtcbiAgICAgICAgZ2RzLnF1ZXJ5KHF1ZXJ5KS5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IChyc3ApID0+IHtcbiAgICAgICAgICAgIGlmIChyc3AuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZXMgPSAocnNwLmRhdGFbMF0gYXMgRGF0YUZyYW1lKS5maWVsZHNbMF07XG4gICAgICAgICAgICAgIGNvbnN0IGZvbGRlcnMgPSBuYW1lcy52YWx1ZXMudG9BcnJheSgpLm1hcCgodikgPT4gKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgICAgICAgICBsYWJlbDogdixcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9sZGVycyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkQ2hhbm5lbEluZm8oKTtcbiAgfVxuXG4gIG9uUXVlcnlUeXBlQ2hhbmdlID0gKHNlbDogU2VsZWN0YWJsZVZhbHVlPEdyYWZhbmFRdWVyeVR5cGU+KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcXVlcnksIG9uUnVuUXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcXVlcnlUeXBlOiBzZWwudmFsdWUhIH0pO1xuICAgIG9uUnVuUXVlcnkoKTtcblxuICAgIC8vIFJlbG9hZCB0aGUgY2hhbm5lbCBsaXN0XG4gICAgdGhpcy5sb2FkQ2hhbm5lbEluZm8oKTtcbiAgfTtcblxuICBvbkNoYW5uZWxDaGFuZ2UgPSAoc2VsOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHF1ZXJ5LCBvblJ1blF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGNoYW5uZWw6IHNlbD8udmFsdWUgfSk7XG4gICAgb25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIG9uRmllbGROYW1lc0NoYW5nZSA9IChpdGVtOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHF1ZXJ5LCBvblJ1blF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBmaWVsZHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIGZpZWxkcyA9IGl0ZW0ubWFwKCh2KSA9PiB2LnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUpIHtcbiAgICAgIGZpZWxkcyA9IFtpdGVtLnZhbHVlXTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIGFkZGluZyB0aGUgZmlyc3QgZmllbGQsIGFsc28gYWRkIHRpbWUgKGlmIGl0IGV4aXN0cylcbiAgICBpZiAoZmllbGRzLmxlbmd0aCA9PT0gMSAmJiAhcXVlcnkuZmlsdGVyPy5maWVsZHM/Lmxlbmd0aCAmJiBxdWVyeS5jaGFubmVsKSB7XG4gICAgICBjb25zdCBuYW1lcyA9IHRoaXMuc3RhdGUuY2hhbm5lbEZpZWxkc1txdWVyeS5jaGFubmVsXSA/PyBbXTtcbiAgICAgIGNvbnN0IHRmID0gbmFtZXMuZmluZCgoZikgPT4gZi52YWx1ZSA9PT0gJ3RpbWUnIHx8IGYudmFsdWUgPT09ICdUaW1lJyk7XG4gICAgICBpZiAodGYgJiYgdGYudmFsdWUgJiYgdGYudmFsdWUgIT09IGZpZWxkc1swXSkge1xuICAgICAgICBmaWVsZHMgPSBbdGYudmFsdWUsIC4uLmZpZWxkc107XG4gICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgLi4ucXVlcnkuZmlsdGVyLFxuICAgICAgICBmaWVsZHMsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICBjaGVja0FuZFVwZGF0ZVZhbHVlID0gKGtleToga2V5b2YgR3JhZmFuYVF1ZXJ5LCB0eHQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHF1ZXJ5LCBvblJ1blF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChrZXkgPT09ICdidWZmZXInKSB7XG4gICAgICBsZXQgYnVmZmVyOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAodHh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYnVmZmVyID0gcmFuZ2VVdGlsLmludGVydmFsVG9TZWNvbmRzKHR4dCkgKiAxMDAwO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0VSUk9SJywgZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgYnVmZmVyLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIFtrZXldOiB0eHQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgb25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIGhhbmRsZUVudGVyS2V5ID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgIT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jaGVja0FuZFVwZGF0ZVZhbHVlKCdidWZmZXInLCAoZS50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gIH07XG5cbiAgaGFuZGxlQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5jaGVja0FuZFVwZGF0ZVZhbHVlKCdidWZmZXInLCBlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmVuZGVyTWVhc3VyZW1lbnRzUXVlcnkoKSB7XG4gICAgbGV0IHsgY2hhbm5lbCwgZmlsdGVyLCBidWZmZXIgfSA9IHRoaXMucHJvcHMucXVlcnk7XG4gICAgbGV0IHsgY2hhbm5lbHMsIGNoYW5uZWxGaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGN1cnJlbnRDaGFubmVsID0gY2hhbm5lbHMuZmluZCgoYykgPT4gYy52YWx1ZSA9PT0gY2hhbm5lbCk7XG4gICAgaWYgKGNoYW5uZWwgJiYgIWN1cnJlbnRDaGFubmVsKSB7XG4gICAgICBjdXJyZW50Q2hhbm5lbCA9IHtcbiAgICAgICAgdmFsdWU6IGNoYW5uZWwsXG4gICAgICAgIGxhYmVsOiBjaGFubmVsLFxuICAgICAgICBkZXNjcmlwdGlvbjogYENvbm5lY3RlZCB0byAke2NoYW5uZWx9YCxcbiAgICAgIH07XG4gICAgICBjaGFubmVscyA9IFtjdXJyZW50Q2hhbm5lbCwgLi4uY2hhbm5lbHNdO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3RpbmN0RmllbGRzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgY29uc3QgZmllbGRzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBjaGFubmVsID8gY2hhbm5lbEZpZWxkc1tjaGFubmVsXSA/PyBbXSA6IFtdO1xuICAgIC8vIGlmIChkYXRhICYmIGRhdGEuc2VyaWVzPy5sZW5ndGgpIHtcbiAgICAvLyAgIGZvciAoY29uc3QgZnJhbWUgb2YgZGF0YS5zZXJpZXMpIHtcbiAgICAvLyAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmcmFtZS5maWVsZHMpIHtcbiAgICAvLyAgICAgICBpZiAoZGlzdGluY3RGaWVsZHMuaGFzKGZpZWxkLm5hbWUpIHx8ICFmaWVsZC5uYW1lKSB7XG4gICAgLy8gICAgICAgICBjb250aW51ZTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgICAgZmllbGRzLnB1c2goe1xuICAgIC8vICAgICAgICAgdmFsdWU6IGZpZWxkLm5hbWUsXG4gICAgLy8gICAgICAgICBsYWJlbDogZmllbGQubmFtZSxcbiAgICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOiBgKCR7Z2V0RnJhbWVEaXNwbGF5TmFtZShmcmFtZSl9IC8gJHtmaWVsZC50eXBlfSlgLFxuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICAgIGRpc3RpbmN0RmllbGRzLmFkZChmaWVsZC5uYW1lKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICBpZiAoZmlsdGVyPy5maWVsZHMpIHtcbiAgICAgIGZvciAoY29uc3QgZiBvZiBmaWx0ZXIuZmllbGRzKSB7XG4gICAgICAgIGlmICghZGlzdGluY3RGaWVsZHMuaGFzKGYpKSB7XG4gICAgICAgICAgZmllbGRzLnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IGYsXG4gICAgICAgICAgICBsYWJlbDogYCR7Zn0gKG5vdCBsb2FkZWQpYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBgQ29uZmlndXJlZCwgYnV0IG5vdCBmb3VuZCBpbiB0aGUgcXVlcnkgcmVzdWx0c2AsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGlzdGluY3RGaWVsZHMuYWRkKGYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGZvcm1hdHRlZFRpbWUgPSAnJztcbiAgICBpZiAoYnVmZmVyKSB7XG4gICAgICBmb3JtYXR0ZWRUaW1lID0gcmFuZ2VVdGlsLnNlY29uZHNUb0htcyhidWZmZXIgLyAxMDAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQ2hhbm5lbFwiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBvcHRpb25zPXtjaGFubmVsc31cbiAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRDaGFubmVsIHx8ICcnfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5uZWxDaGFuZ2V9XG4gICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgbWVhc3VyZW1lbnRzIGNoYW5uZWxcIlxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgbm9PcHRpb25zTWVzc2FnZT1cIkVudGVyIGNoYW5uZWwgbmFtZVwiXG4gICAgICAgICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXsoaW5wdXQ6IHN0cmluZykgPT4gYENvbm5lY3QgdG86ICR7aW5wdXR9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjaGFubmVsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkZpZWxkc1wiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17ZmllbGRzfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXI/LmZpZWxkcyB8fCBbXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkZpZWxkTmFtZXNDaGFuZ2V9XG4gICAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBbGwgZmllbGRzXCJcbiAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBub09wdGlvbnNNZXNzYWdlPVwiVW5hYmxlIHRvIGxpc3QgYWxsIGZpZWxkc1wiXG4gICAgICAgICAgICAgICAgZm9ybWF0Q3JlYXRlTGFiZWw9eyhpbnB1dDogc3RyaW5nKSA9PiBgRmllbGQ6ICR7aW5wdXR9YH1cbiAgICAgICAgICAgICAgICBpc1NlYXJjaGFibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgaXNNdWx0aT17dHJ1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJCdWZmZXJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdXRvXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTJ9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmb3JtYXR0ZWRUaW1lfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVFbnRlcktleX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgICBzcGVsbENoZWNrPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEFsZXJ0IHRpdGxlPVwiR3JhZmFuYSBMaXZlIC0gTWVhc3VyZW1lbnRzXCIgc2V2ZXJpdHk9XCJpbmZvXCI+XG4gICAgICAgICAgVGhpcyBzdXBwb3J0cyByZWFsLXRpbWUgZXZlbnQgc3RyZWFtcyBpbiBHcmFmYW5hIGNvcmUuIFRoaXMgZmVhdHVyZSBpcyB1bmRlciBoZWF2eSBkZXZlbG9wbWVudC4gRXhwZWN0IHRoZVxuICAgICAgICAgIGludGVyZmFjZXMgYW5kIHN0cnVjdHVyZXMgdG8gY2hhbmdlIGFzIHRoaXMgYmVjb21lcyBtb3JlIHByb2R1Y3Rpb24gcmVhZHkuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgb25Gb2xkZXJDaGFuZ2VkID0gKHNlbDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBxdWVyeSwgb25SdW5RdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBwYXRoOiBzZWw/LnZhbHVlIH0pO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICByZW5kZXJMaXN0UHVibGljRmlsZXMoKSB7XG4gICAgbGV0IHsgcGF0aCB9ID0gdGhpcy5wcm9wcy5xdWVyeTtcbiAgICBsZXQgeyBmb2xkZXJzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghZm9sZGVycykge1xuICAgICAgZm9sZGVycyA9IFtdO1xuICAgICAgdGhpcy5sb2FkRm9sZGVySW5mbygpO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50Rm9sZGVyID0gZm9sZGVycy5maW5kKChmKSA9PiBmLnZhbHVlID09PSBwYXRoKTtcbiAgICBpZiAocGF0aCAmJiAhY3VycmVudEZvbGRlcikge1xuICAgICAgZm9sZGVycyA9IFtcbiAgICAgICAgLi4uZm9sZGVycyxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiBwYXRoLFxuICAgICAgICAgIGxhYmVsOiBwYXRoLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJQYXRoXCIgZ3Jvdz17dHJ1ZX0gbGFiZWxXaWR0aD17bGFiZWxXaWR0aH0+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgb3B0aW9ucz17Zm9sZGVyc31cbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50Rm9sZGVyIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Gb2xkZXJDaGFuZ2VkfVxuICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgIGJhY2tzcGFjZVJlbW92ZXNWYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGZvbGRlclwiXG4gICAgICAgICAgICBpc0NsZWFyYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXsoaW5wdXQ6IHN0cmluZykgPT4gYEZvbGRlcjogJHtpbnB1dH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2hFbnRlcktleSA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUua2V5ICE9PSAnRW50ZXInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hlY2tBbmRVcGRhdGVWYWx1ZSgncXVlcnknLCAoZS50YXJnZXQgYXMgYW55KS52YWx1ZSk7XG4gIH07XG5cbiAgaGFuZGxlU2VhcmNoQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5jaGVja0FuZFVwZGF0ZVZhbHVlKCdxdWVyeScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBvblNhdmVTZWFyY2hKU09OID0gKHJhd1NlYXJjaEpTT046IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyYXdTZWFyY2hKU09OKSBhcyBHcmFmYW5hUXVlcnk7XG4gICAgICBqc29uLnF1ZXJ5VHlwZSA9IEdyYWZhbmFRdWVyeVR5cGUuU2VhcmNoO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShqc29uKTtcbiAgICAgIHRoaXMucHJvcHMub25SdW5RdWVyeSgpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICBjb25zb2xlLmxvZygnVU5BQkxFIFRPIHBhcnNlIHNlYXJjaCcsIHJhd1NlYXJjaEpTT04sIGV4KTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyU2VhcmNoKCkge1xuICAgIGxldCBxdWVyeSA9ICh0aGlzLnByb3BzLnF1ZXJ5ID8/IHt9KSBhcyBTZWFyY2hRdWVyeTtcbiAgICBjb25zdCBlbXB0eVNlYXJjaFF1ZXJ5OiBTZWFyY2hRdWVyeSA9IHtcbiAgICAgIHF1ZXJ5OiAnKicsXG4gICAgICBsb2NhdGlvbjogJycsIC8vIGdlbmVyYWwsIGV0Y1xuICAgICAgZHNfdWlkOiAnJyxcbiAgICAgIHNvcnQ6ICdzY29yZSBkZXNjJyxcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAga2luZDogWydkYXNoYm9hcmQnLCAnZm9sZGVyJ10sXG4gICAgICB1aWQ6IFtdLFxuICAgICAgaWQ6IFtdLFxuICAgICAgZXhwbGFpbjogdHJ1ZSxcbiAgICAgIGFjY2Vzc0luZm86IHRydWUsXG4gICAgICBmYWNldDogW3sgZmllbGQ6ICdraW5kJyB9LCB7IGZpZWxkOiAndGFnJyB9LCB7IGZpZWxkOiAnbG9jYXRpb24nIH1dLFxuICAgICAgaGFzUHJldmlldzogJ2RhcmsnLFxuICAgICAgZnJvbTogMCxcbiAgICAgIGxpbWl0OiAyMCxcbiAgICB9O1xuXG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5ID8/IHt9LCBudWxsLCAyKTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMoZW1wdHlTZWFyY2hRdWVyeSkpIHtcbiAgICAgIGlmICgocXVlcnkgYXMgYW55KVtrZXldID09IG51bGwpIHtcbiAgICAgICAgKHF1ZXJ5IGFzIGFueSlba2V5XSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEFsZXJ0IHRpdGxlPVwiR3JhZmFuYSBTZWFyY2hcIiBzZXZlcml0eT1cImluZm9cIj5cbiAgICAgICAgICBUaGlzIGludGVyZmFjZSB0byB0aGUgZ3JhZmFuYSBzZWFyY2ggQVBJIGlzIGV4cGVyaW1lbnRhbCwgYW5kIHN1YmplY3QgdG8gY2hhbmdlIGF0IGFueSB0aW1lIHdpdGhvdXQgbm90aWNlXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJRdWVyeVwiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXZlcnl0aGluZ1wiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cXVlcnkucXVlcnkgPz8gJyd9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVTZWFyY2hFbnRlcktleX1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZVNlYXJjaEJsdXJ9XG4gICAgICAgICAgICAgIHNwZWxsQ2hlY2s9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgIGxhbmd1YWdlPVwianNvblwiXG4gICAgICAgICAgdmFsdWU9e2pzb259XG4gICAgICAgICAgb25CbHVyPXt0aGlzLm9uU2F2ZVNlYXJjaEpTT059XG4gICAgICAgICAgb25TYXZlPXt0aGlzLm9uU2F2ZVNlYXJjaEpTT059XG4gICAgICAgICAgc2hvd01pbmlNYXA9e3RydWV9XG4gICAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXt0cnVlfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIC4uLmRlZmF1bHRRdWVyeSxcbiAgICAgIC4uLnRoaXMucHJvcHMucXVlcnksXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiUXVlcnkgdHlwZVwiIGdyb3c9e3RydWV9IGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9PlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLnF1ZXJ5VHlwZXN9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnF1ZXJ5VHlwZXMuZmluZCgodikgPT4gdi52YWx1ZSA9PT0gcXVlcnkucXVlcnlUeXBlKSB8fCB0aGlzLnF1ZXJ5VHlwZXNbMF19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUXVlcnlUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICB7cXVlcnkucXVlcnlUeXBlID09PSBHcmFmYW5hUXVlcnlUeXBlLkxpdmVNZWFzdXJlbWVudHMgJiYgdGhpcy5yZW5kZXJNZWFzdXJlbWVudHNRdWVyeSgpfVxuICAgICAgICB7cXVlcnkucXVlcnlUeXBlID09PSBHcmFmYW5hUXVlcnlUeXBlLkxpc3QgJiYgdGhpcy5yZW5kZXJMaXN0UHVibGljRmlsZXMoKX1cbiAgICAgICAge3F1ZXJ5LnF1ZXJ5VHlwZSA9PT0gR3JhZmFuYVF1ZXJ5VHlwZS5TZWFyY2ggJiYgdGhpcy5yZW5kZXJTZWFyY2goKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGZyb20sIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBbm5vdGF0aW9uUXVlcnksXG4gIEFubm90YXRpb25RdWVyeVJlcXVlc3QsXG4gIERhdGFGcmFtZVZpZXcsXG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRGF0YVNvdXJjZVJlZixcbiAgaXNWYWxpZExpdmVDaGFubmVsQWRkcmVzcyxcbiAgTXV0YWJsZURhdGFGcmFtZSxcbiAgcGFyc2VMaXZlQ2hhbm5lbEFkZHJlc3MsXG4gIHRvRGF0YUZyYW1lLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIERhdGFTb3VyY2VXaXRoQmFja2VuZCxcbiAgZ2V0QmFja2VuZFNydixcbiAgZ2V0R3JhZmFuYUxpdmVTcnYsXG4gIGdldFRlbXBsYXRlU3J2LFxuICBTdHJlYW1pbmdGcmFtZU9wdGlvbnMsXG59IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgbWlncmF0ZURhdGFzb3VyY2VOYW1lVG9SZWYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL0Rhc2hib2FyZE1pZ3JhdG9yJztcblxuaW1wb3J0IHsgZ2V0RGFzaGJvYXJkU3J2IH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL0Rhc2hib2FyZFNydic7XG5cbmltcG9ydCBBbm5vdGF0aW9uUXVlcnlFZGl0b3IgZnJvbSAnLi9jb21wb25lbnRzL0Fubm90YXRpb25RdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5LCBHcmFmYW5hQW5ub3RhdGlvblR5cGUsIEdyYWZhbmFRdWVyeSwgR3JhZmFuYVF1ZXJ5VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5sZXQgY291bnRlciA9IDEwMDtcblxuZXhwb3J0IGNsYXNzIEdyYWZhbmFEYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPEdyYWZhbmFRdWVyeT4ge1xuICBjb25zdHJ1Y3RvcihpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMuYW5ub3RhdGlvbnMgPSB7XG4gICAgICBRdWVyeUVkaXRvcjogQW5ub3RhdGlvblF1ZXJ5RWRpdG9yLFxuICAgICAgcHJlcGFyZUFubm90YXRpb24oanNvbjogYW55KTogQW5ub3RhdGlvblF1ZXJ5PEdyYWZhbmFBbm5vdGF0aW9uUXVlcnk+IHtcbiAgICAgICAgLy8gUHJldmlvdXNseSwgdGhlc2UgcHJvcGVydGllcyBsaXZlZCBvdXRzaWRlIG9mIHRhcmdldFxuICAgICAgICAvLyBUaGlzIHNob3VsZCBoYW5kbGUgbWlncmF0aW5nIHRoZW1cbiAgICAgICAganNvbi50YXJnZXQgPSBqc29uLnRhcmdldCA/PyB7XG4gICAgICAgICAgdHlwZToganNvbi50eXBlID8/IEdyYWZhbmFBbm5vdGF0aW9uVHlwZS5EYXNoYm9hcmQsXG4gICAgICAgICAgbGltaXQ6IGpzb24ubGltaXQgPz8gMTAwLFxuICAgICAgICAgIHRhZ3M6IGpzb24udGFncyA/PyBbXSxcbiAgICAgICAgICBtYXRjaEFueToganNvbi5tYXRjaEFueSA/PyBmYWxzZSxcbiAgICAgICAgfTsgLy8gdXNpbmcgc3ByZWFkIHN5bnRheCBjYXVzZWQgYW4gaW5maW5pdGUgbG9vcCBpbiBTdGFuZGFyZEFubm90YXRpb25RdWVyeUVkaXRvclxuICAgICAgICByZXR1cm4ganNvbjtcbiAgICAgIH0sXG4gICAgICBwcmVwYXJlUXVlcnkoYW5ubzogQW5ub3RhdGlvblF1ZXJ5PEdyYWZhbmFBbm5vdGF0aW9uUXVlcnk+KTogR3JhZmFuYVF1ZXJ5IHtcbiAgICAgICAgbGV0IGRhdGFzb3VyY2U6IERhdGFTb3VyY2VSZWYgfCB1bmRlZmluZWQgfCBudWxsID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoaXNTdHJpbmcoYW5uby5kYXRhc291cmNlKSkge1xuICAgICAgICAgIGNvbnN0IHJlZiA9IG1pZ3JhdGVEYXRhc291cmNlTmFtZVRvUmVmKGFubm8uZGF0YXNvdXJjZSwgeyByZXR1cm5EZWZhdWx0QXNOdWxsOiBmYWxzZSB9KTtcbiAgICAgICAgICBpZiAocmVmKSB7XG4gICAgICAgICAgICBkYXRhc291cmNlID0gcmVmO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhc291cmNlID0gYW5uby5kYXRhc291cmNlIGFzIERhdGFTb3VyY2VSZWY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyAuLi5hbm5vLCByZWZJZDogYW5uby5uYW1lLCBxdWVyeVR5cGU6IEdyYWZhbmFRdWVyeVR5cGUuQW5ub3RhdGlvbnMsIGRhdGFzb3VyY2UgfTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHF1ZXJ5KHJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8R3JhZmFuYVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCByZXN1bHRzOiBBcnJheTxPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPj4gPSBbXTtcbiAgICBjb25zdCB0YXJnZXRzOiBHcmFmYW5hUXVlcnlbXSA9IFtdO1xuICAgIGNvbnN0IHRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKTtcbiAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiByZXF1ZXN0LnRhcmdldHMpIHtcbiAgICAgIGlmICh0YXJnZXQucXVlcnlUeXBlID09PSBHcmFmYW5hUXVlcnlUeXBlLkFubm90YXRpb25zKSB7XG4gICAgICAgIHJldHVybiBmcm9tKFxuICAgICAgICAgIHRoaXMuZ2V0QW5ub3RhdGlvbnMoe1xuICAgICAgICAgICAgcmFuZ2U6IHJlcXVlc3QucmFuZ2UsXG4gICAgICAgICAgICByYW5nZVJhdzogcmVxdWVzdC5yYW5nZS5yYXcsXG4gICAgICAgICAgICBhbm5vdGF0aW9uOiB0YXJnZXQgYXMgdW5rbm93biBhcyBBbm5vdGF0aW9uUXVlcnk8R3JhZmFuYUFubm90YXRpb25RdWVyeT4sXG4gICAgICAgICAgICBkYXNoYm9hcmQ6IGdldERhc2hib2FyZFNydigpLmdldEN1cnJlbnQoKSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5oaWRlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldC5xdWVyeVR5cGUgPT09IEdyYWZhbmFRdWVyeVR5cGUuTGl2ZU1lYXN1cmVtZW50cykge1xuICAgICAgICBsZXQgY2hhbm5lbCA9IHRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LmNoYW5uZWwsIHJlcXVlc3Quc2NvcGVkVmFycyk7XG4gICAgICAgIGNvbnN0IHsgZmlsdGVyIH0gPSB0YXJnZXQ7XG5cbiAgICAgICAgLy8gSGVscCBtaWdyYXRlIHByZS1yZWxlYXNlIGNoYW5uZWwgcGF0aHMgc2F2ZWQgaW4gZGFzaGJvYXJkc1xuICAgICAgICAvLyBOT1RFOiB0aGlzIHNob3VsZCBiZSByZW1vdmVkIGJlZm9yZSBWOCBpcyByZWxlYXNlZFxuICAgICAgICBpZiAoY2hhbm5lbCAmJiBjaGFubmVsLnN0YXJ0c1dpdGgoJ3RlbGVncmFmLycpKSB7XG4gICAgICAgICAgY2hhbm5lbCA9ICdzdHJlYW0vJyArIGNoYW5uZWw7XG4gICAgICAgICAgdGFyZ2V0LmNoYW5uZWwgPSBjaGFubmVsOyAvLyBtdXRhdGUgdGhlIGN1cnJlbnQgcXVlcnkgb2JqZWN0IHNvIGl0IGlzIHNhdmVkIHdpdGggYHN0cmVhbS9gIHByZWZpeFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkciA9IHBhcnNlTGl2ZUNoYW5uZWxBZGRyZXNzKGNoYW5uZWwpO1xuICAgICAgICBpZiAoIWlzVmFsaWRMaXZlQ2hhbm5lbEFkZHJlc3MoYWRkcikpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWZmZXI6IFBhcnRpYWw8U3RyZWFtaW5nRnJhbWVPcHRpb25zPiA9IHtcbiAgICAgICAgICBtYXhMZW5ndGg6IHJlcXVlc3QubWF4RGF0YVBvaW50cyA/PyA1MDAsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0YXJnZXQuYnVmZmVyKSB7XG4gICAgICAgICAgYnVmZmVyLm1heERlbHRhID0gdGFyZ2V0LmJ1ZmZlcjtcbiAgICAgICAgICBidWZmZXIubWF4TGVuZ3RoID0gYnVmZmVyLm1heExlbmd0aCEgKiAyOyAvLz8/XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5yYW5nZVJhdz8udG8gPT09ICdub3cnKSB7XG4gICAgICAgICAgYnVmZmVyLm1heERlbHRhID0gcmVxdWVzdC5yYW5nZS50by52YWx1ZU9mKCkgLSByZXF1ZXN0LnJhbmdlLmZyb20udmFsdWVPZigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKFxuICAgICAgICAgIGdldEdyYWZhbmFMaXZlU3J2KCkuZ2V0RGF0YVN0cmVhbSh7XG4gICAgICAgICAgICBrZXk6IGAke3JlcXVlc3QucmVxdWVzdElkfS4ke2NvdW50ZXIrK31gLFxuICAgICAgICAgICAgYWRkcjogYWRkciEsXG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGFyZ2V0LnF1ZXJ5VHlwZSkge1xuICAgICAgICAgIHRhcmdldC5xdWVyeVR5cGUgPSBHcmFmYW5hUXVlcnlUeXBlLlJhbmRvbVdhbGs7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0cy5wdXNoKHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHRzLnB1c2goXG4gICAgICAgIHN1cGVyLnF1ZXJ5KHtcbiAgICAgICAgICAuLi5yZXF1ZXN0LFxuICAgICAgICAgIHRhcmdldHMsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgLy8gV2l0aCBhIHNpbmdsZSBxdWVyeSBqdXN0IHJldHVybiB0aGUgcmVzdWx0c1xuICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lcmdlKC4uLnJlc3VsdHMpO1xuICAgIH1cbiAgICByZXR1cm4gb2YoKTsgLy8gbm90aGluZ1xuICB9XG5cbiAgbGlzdEZpbGVzKHBhdGg6IHN0cmluZyk6IE9ic2VydmFibGU8RGF0YUZyYW1lVmlldzxGaWxlRWxlbWVudD4+IHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeSh7XG4gICAgICB0YXJnZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByZWZJZDogJ0EnLFxuICAgICAgICAgIHF1ZXJ5VHlwZTogR3JhZmFuYVF1ZXJ5VHlwZS5MaXN0LFxuICAgICAgICAgIHBhdGgsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0gYXMgYW55KS5waXBlKFxuICAgICAgbWFwKCh2KSA9PiB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdi5kYXRhWzBdID8/IG5ldyBNdXRhYmxlRGF0YUZyYW1lKCk7XG4gICAgICAgIHJldHVybiBuZXcgRGF0YUZyYW1lVmlldzxGaWxlRWxlbWVudD4oZnJhbWUpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbWV0cmljRmluZFF1ZXJ5KG9wdGlvbnM6IGFueSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICB9XG5cbiAgYXN5bmMgZ2V0QW5ub3RhdGlvbnMob3B0aW9uczogQW5ub3RhdGlvblF1ZXJ5UmVxdWVzdDxHcmFmYW5hUXVlcnk+KTogUHJvbWlzZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGNvbnN0IHRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKTtcbiAgICBjb25zdCBhbm5vdGF0aW9uID0gb3B0aW9ucy5hbm5vdGF0aW9uIGFzIHVua25vd24gYXMgQW5ub3RhdGlvblF1ZXJ5PEdyYWZhbmFBbm5vdGF0aW9uUXVlcnk+O1xuICAgIGNvbnN0IHRhcmdldCA9IGFubm90YXRpb24udGFyZ2V0ITtcbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgIGZyb206IG9wdGlvbnMucmFuZ2UuZnJvbS52YWx1ZU9mKCksXG4gICAgICB0bzogb3B0aW9ucy5yYW5nZS50by52YWx1ZU9mKCksXG4gICAgICBsaW1pdDogdGFyZ2V0LmxpbWl0LFxuICAgICAgdGFnczogdGFyZ2V0LnRhZ3MsXG4gICAgICBtYXRjaEFueTogdGFyZ2V0Lm1hdGNoQW55LFxuICAgIH07XG5cbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09IEdyYWZhbmFBbm5vdGF0aW9uVHlwZS5EYXNoYm9hcmQpIHtcbiAgICAgIC8vIGlmIG5vIGRhc2hib2FyZCBpZCB5ZXQgcmV0dXJuXG4gICAgICBpZiAoIW9wdGlvbnMuZGFzaGJvYXJkLmlkKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBkYXRhOiBbXSB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGZpbHRlciBieSBkYXNoYm9hcmQgaWRcbiAgICAgIHBhcmFtcy5kYXNoYm9hcmRJZCA9IG9wdGlvbnMuZGFzaGJvYXJkLmlkO1xuICAgICAgLy8gcmVtb3ZlIHRhZ3MgZmlsdGVyIGlmIGFueVxuICAgICAgZGVsZXRlIHBhcmFtcy50YWdzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXF1aXJlIGF0IGxlYXN0IG9uZSB0YWdcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0YXJnZXQudGFncykgfHwgdGFyZ2V0LnRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoeyBkYXRhOiBbXSB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRlbGltaXRlciA9ICdfX2RlbGltaXRlcl9fJztcbiAgICAgIGNvbnN0IHRhZ3MgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgdCBvZiBwYXJhbXMudGFncykge1xuICAgICAgICBjb25zdCByZW5kZXJlZFZhbHVlcyA9IHRlbXBsYXRlU3J2LnJlcGxhY2UodCwge30sICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWUuam9pbihkZWxpbWl0ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChjb25zdCB0dCBvZiByZW5kZXJlZFZhbHVlcy5zcGxpdChkZWxpbWl0ZXIpKSB7XG4gICAgICAgICAgdGFncy5wdXNoKHR0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcGFyYW1zLnRhZ3MgPSB0YWdzO1xuICAgIH1cblxuICAgIGNvbnN0IGFubm90YXRpb25zID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChcbiAgICAgICcvYXBpL2Fubm90YXRpb25zJyxcbiAgICAgIHBhcmFtcyxcbiAgICAgIGBncmFmYW5hLWRhdGEtc291cmNlLWFubm90YXRpb25zLSR7YW5ub3RhdGlvbi5uYW1lfS0ke29wdGlvbnMuZGFzaGJvYXJkPy5pZH1gXG4gICAgKTtcbiAgICByZXR1cm4geyBkYXRhOiBbdG9EYXRhRnJhbWUoYW5ub3RhdGlvbnMpXSB9O1xuICB9XG5cbiAgdGVzdERhdGFzb3VyY2UoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUVsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIFsnbWVkaWEtdHlwZSddOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IEdyYWZhbmFEYXRhc291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IEdyYWZhbmFRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW48R3JhZmFuYURhdGFzb3VyY2UsIEdyYWZhbmFRdWVyeT4oR3JhZmFuYURhdGFzb3VyY2UpLnNldFF1ZXJ5RWRpdG9yKFxuICBRdWVyeUVkaXRvclxuKTtcbiIsImltcG9ydCB7IERhdGFRdWVyeSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTGl2ZURhdGFGaWx0ZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBRdWVyeVxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBlbnVtIEdyYWZhbmFRdWVyeVR5cGUge1xuICBMaXZlTWVhc3VyZW1lbnRzID0gJ21lYXN1cmVtZW50cycsXG4gIEFubm90YXRpb25zID0gJ2Fubm90YXRpb25zJyxcblxuICAvLyBiYWNrZW5kXG4gIFJhbmRvbVdhbGsgPSAncmFuZG9tV2FsaycsXG4gIExpc3QgPSAnbGlzdCcsXG4gIFJlYWQgPSAncmVhZCcsXG4gIFNlYXJjaCA9ICdzZWFyY2gnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyYWZhbmFRdWVyeSBleHRlbmRzIERhdGFRdWVyeSB7XG4gIHF1ZXJ5VHlwZTogR3JhZmFuYVF1ZXJ5VHlwZTsgLy8gUmFuZG9tV2FsayBieSBkZWZhdWx0XG4gIGNoYW5uZWw/OiBzdHJpbmc7XG4gIGZpbHRlcj86IExpdmVEYXRhRmlsdGVyO1xuICBidWZmZXI/OiBudW1iZXI7XG4gIHBhdGg/OiBzdHJpbmc7IC8vIGZvciBsaXN0IGFuZCByZWFkXG4gIHF1ZXJ5Pzogc3RyaW5nOyAvLyBmb3IgcXVlcnkgZW5kcG9pbnRcbn0gLy8gTk9URSwgcXVlcnkgd2lsbCBoYXZlIG1vcmUgZmllbGQhISFcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRRdWVyeTogR3JhZmFuYVF1ZXJ5ID0ge1xuICByZWZJZDogJ0EnLFxuICBxdWVyeVR5cGU6IEdyYWZhbmFRdWVyeVR5cGUuUmFuZG9tV2Fsayxcbn07XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQW5ub3RhdGlvbnNcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZW51bSBHcmFmYW5hQW5ub3RhdGlvblR5cGUge1xuICBEYXNoYm9hcmQgPSAnZGFzaGJvYXJkJyxcbiAgVGFncyA9ICd0YWdzJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcmFmYW5hQW5ub3RhdGlvblF1ZXJ5IGV4dGVuZHMgR3JhZmFuYVF1ZXJ5IHtcbiAgdHlwZTogR3JhZmFuYUFubm90YXRpb25UeXBlOyAvLyB0YWdzXG4gIGxpbWl0OiBudW1iZXI7IC8vIDEwMFxuICB0YWdzPzogc3RyaW5nW107XG4gIG1hdGNoQW55PzogYm9vbGVhbjsgLy8gQnkgZGVmYXVsdCBHcmFmYW5hIG9ubHkgc2hvd3MgYW5ub3RhdGlvbnMgdGhhdCBtYXRjaCBhbGwgdGFncyBpbiB0aGUgcXVlcnkuIEVuYWJsaW5nIHRoaXMgcmV0dXJucyBhbm5vdGF0aW9ucyB0aGF0IG1hdGNoIGFueSBvZiB0aGUgdGFncyBpbiB0aGUgcXVlcnkuXG59XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJGaWVsZCIsIkZpZWxkU2V0IiwiU2VsZWN0IiwiU3dpdGNoIiwiVGFnRmlsdGVyIiwiZ2V0QW5ub3RhdGlvblRhZ3MiLCJHcmFmYW5hQW5ub3RhdGlvblR5cGUiLCJtYXRjaFRvb2x0aXBDb250ZW50IiwidGFnc1Rvb2x0aXBDb250ZW50IiwiYW5ub3RhdGlvblR5cGVzIiwibGFiZWwiLCJ2YWx1ZSIsIkRhc2hib2FyZCIsImRlc2NyaXB0aW9uIiwiVGFncyIsImxpbWl0T3B0aW9ucyIsIm1hcCIsImxpbWl0IiwiU3RyaW5nIiwiQW5ub3RhdGlvblF1ZXJ5RWRpdG9yIiwicXVlcnkiLCJvbkNoYW5nZSIsImFubm90YXRpb25RdWVyeSIsIm1hdGNoQW55IiwidGFncyIsInR5cGUiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJvbkZpbHRlckJ5Q2hhbmdlIiwibmV3VmFsdWUiLCJvbk1heExpbWl0Q2hhbmdlIiwib25NYXRjaEFueUNoYW5nZSIsInRhcmdldCIsImNoZWNrZWQiLCJvblRhZ3NDaGFuZ2UiLCJvbkZvcm1hdENyZWF0ZUxhYmVsIiwiaW5wdXQiLCJjb250YWluZXIiLCJQdXJlQ29tcG9uZW50IiwiZGF0YUZyYW1lRnJvbUpTT04iLCJyYW5nZVV0aWwiLCJjb25maWciLCJnZXRCYWNrZW5kU3J2IiwiZ2V0RGF0YVNvdXJjZVNydiIsIklubGluZUZpZWxkIiwiQWxlcnQiLCJJbnB1dCIsIklubGluZUZpZWxkUm93IiwiQ29kZUVkaXRvciIsImRlZmF1bHRRdWVyeSIsIkdyYWZhbmFRdWVyeVR5cGUiLCJsYWJlbFdpZHRoIiwiUXVlcnlFZGl0b3IiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY2hhbm5lbHMiLCJjaGFubmVsRmllbGRzIiwiUmFuZG9tV2FsayIsIkxpdmVNZWFzdXJlbWVudHMiLCJMaXN0Iiwic2VsIiwib25SdW5RdWVyeSIsInF1ZXJ5VHlwZSIsImxvYWRDaGFubmVsSW5mbyIsImNoYW5uZWwiLCJpdGVtIiwiZmllbGRzIiwiQXJyYXkiLCJpc0FycmF5IiwidiIsImxlbmd0aCIsImZpbHRlciIsIm5hbWVzIiwic3RhdGUiLCJ0ZiIsImZpbmQiLCJmIiwia2V5IiwidHh0IiwiYnVmZmVyIiwiaW50ZXJ2YWxUb1NlY29uZHMiLCJlcnIiLCJjb25zb2xlIiwid2FybiIsImUiLCJjaGVja0FuZFVwZGF0ZVZhbHVlIiwicGF0aCIsInJhd1NlYXJjaEpTT04iLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiU2VhcmNoIiwiZXgiLCJsb2ciLCJmZWF0dXJlVG9nZ2xlcyIsInBhbmVsVGl0bGVTZWFyY2giLCJxdWVyeVR5cGVzIiwicHVzaCIsImZldGNoIiwidXJsIiwic3Vic2NyaWJlIiwibmV4dCIsImNoYW5uZWxJbmZvIiwiZGF0YSIsImMiLCJkaXN0aW5jdEZpZWxkcyIsIlNldCIsImZyYW1lIiwiYWRkIiwibmFtZSIsImZyb20iLCJuIiwibWludXRlX3JhdGUiLCJzZXRTdGF0ZSIsImxvYWRGb2xkZXJJbmZvIiwidGFyZ2V0cyIsInJlZklkIiwiZ2V0IiwidGhlbiIsImRzIiwiZ2RzIiwicnNwIiwiZm9sZGVycyIsInZhbHVlcyIsInRvQXJyYXkiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlck1lYXN1cmVtZW50c1F1ZXJ5IiwiY3VycmVudENoYW5uZWwiLCJoYXMiLCJmb3JtYXR0ZWRUaW1lIiwic2Vjb25kc1RvSG1zIiwib25DaGFubmVsQ2hhbmdlIiwib25GaWVsZE5hbWVzQ2hhbmdlIiwiaGFuZGxlRW50ZXJLZXkiLCJoYW5kbGVCbHVyIiwicmVuZGVyTGlzdFB1YmxpY0ZpbGVzIiwiY3VycmVudEZvbGRlciIsIm9uRm9sZGVyQ2hhbmdlZCIsInJlbmRlclNlYXJjaCIsImVtcHR5U2VhcmNoUXVlcnkiLCJsb2NhdGlvbiIsImRzX3VpZCIsInNvcnQiLCJraW5kIiwidWlkIiwiaWQiLCJleHBsYWluIiwiYWNjZXNzSW5mbyIsImZhY2V0IiwiZmllbGQiLCJoYXNQcmV2aWV3Iiwic3RyaW5naWZ5IiwidmFsIiwiT2JqZWN0IiwiZW50cmllcyIsImhhbmRsZVNlYXJjaEVudGVyS2V5IiwiaGFuZGxlU2VhcmNoQmx1ciIsIm9uU2F2ZVNlYXJjaEpTT04iLCJyZW5kZXIiLCJvblF1ZXJ5VHlwZUNoYW5nZSIsImlzU3RyaW5nIiwibWVyZ2UiLCJvZiIsIkRhdGFGcmFtZVZpZXciLCJpc1ZhbGlkTGl2ZUNoYW5uZWxBZGRyZXNzIiwiTXV0YWJsZURhdGFGcmFtZSIsInBhcnNlTGl2ZUNoYW5uZWxBZGRyZXNzIiwidG9EYXRhRnJhbWUiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJnZXRHcmFmYW5hTGl2ZVNydiIsImdldFRlbXBsYXRlU3J2IiwibWlncmF0ZURhdGFzb3VyY2VOYW1lVG9SZWYiLCJnZXREYXNoYm9hcmRTcnYiLCJjb3VudGVyIiwiR3JhZmFuYURhdGFzb3VyY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwiYW5ub3RhdGlvbnMiLCJwcmVwYXJlQW5ub3RhdGlvbiIsInByZXBhcmVRdWVyeSIsImFubm8iLCJkYXRhc291cmNlIiwidW5kZWZpbmVkIiwicmVmIiwicmV0dXJuRGVmYXVsdEFzTnVsbCIsIkFubm90YXRpb25zIiwicmVxdWVzdCIsInJlc3VsdHMiLCJ0ZW1wbGF0ZVNydiIsImdldEFubm90YXRpb25zIiwicmFuZ2UiLCJyYW5nZVJhdyIsInJhdyIsImFubm90YXRpb24iLCJkYXNoYm9hcmQiLCJnZXRDdXJyZW50IiwiaGlkZSIsInJlcGxhY2UiLCJzY29wZWRWYXJzIiwic3RhcnRzV2l0aCIsImFkZHIiLCJtYXhMZW5ndGgiLCJtYXhEYXRhUG9pbnRzIiwibWF4RGVsdGEiLCJ0byIsInZhbHVlT2YiLCJnZXREYXRhU3RyZWFtIiwicmVxdWVzdElkIiwibGlzdEZpbGVzIiwicGlwZSIsIm1ldHJpY0ZpbmRRdWVyeSIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhcmFtcyIsImRhc2hib2FyZElkIiwiZGVsaW1pdGVyIiwidCIsInJlbmRlcmVkVmFsdWVzIiwiam9pbiIsInR0Iiwic3BsaXQiLCJ0ZXN0RGF0YXNvdXJjZSIsIkRhdGFTb3VyY2VQbHVnaW4iLCJwbHVnaW4iLCJzZXRRdWVyeUVkaXRvciJdLCJzb3VyY2VSb290IjoiIn0=