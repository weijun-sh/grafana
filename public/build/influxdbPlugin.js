"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["influxdbPlugin"],{

/***/ "./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel, _InlineFormLabel2, _InfoBox, _InlineFormLabel3, _h, _InfoBox2, _Alert, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Input,
  SecretFormField
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LegacyForms;




const httpModes = [{
  label: 'GET',
  value: 'GET'
}, {
  label: 'POST',
  value: 'POST'
}];
const versions = [{
  label: 'InfluxQL',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.InfluxQL,
  description: 'The InfluxDB SQL-like query language.'
}, {
  label: 'Flux',
  value: _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux,
  description: 'Advanced data scripting and query language.  Supported in InfluxDB 2.x and 1.8+'
}];
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    var _props$options$jsonDa;

    super(props);

    _defineProperty(this, "state", {
      maxSeries: ''
    });

    _defineProperty(this, "htmlPrefix", void 0);

    _defineProperty(this, "onResetPassword", () => {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginResetOption)(this.props, 'password');
    });

    _defineProperty(this, "onResetToken", () => {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginResetOption)(this.props, 'token');
    });

    _defineProperty(this, "onVersionChanged", selected => {
      const {
        options,
        onOptionsChange
      } = this.props;
      const copy = Object.assign({}, options, {
        jsonData: Object.assign({}, options.jsonData, {
          version: selected.value
        })
      });

      if (selected.value === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux) {
        copy.access = 'proxy';
        copy.basicAuth = true;
        copy.jsonData.httpMode = 'POST'; // Remove old 1x configs

        delete copy.user;
        delete copy.database;
      }

      onOptionsChange(copy);
    });

    this.state.maxSeries = ((_props$options$jsonDa = props.options.jsonData.maxSeries) === null || _props$options$jsonDa === void 0 ? void 0 : _props$options$jsonDa.toString()) || '';
    this.htmlPrefix = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)('influxdb-config');
  } // 1x


  renderInflux2x() {
    const {
      options
    } = this.props;
    const {
      secureJsonFields
    } = options;
    const secureJsonData = options.secureJsonData || {};
    const {
      htmlPrefix
    } = this;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-org`,
            className: "width-10",
            children: "Organization"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              id: `${htmlPrefix}-org`,
              className: "width-20",
              value: options.jsonData.organization || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'organization')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SecretFormField, {
            isConfigured: secureJsonFields && secureJsonFields.token,
            value: secureJsonData.token || '',
            label: "Token",
            "aria-label": "Token",
            labelWidth: 10,
            inputWidth: 20,
            onReset: this.onResetToken,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceSecureJsonDataOption)(this.props, 'token')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            className: "width-10",
            children: "Default Bucket"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              className: "width-20",
              placeholder: "default bucket",
              value: options.jsonData.defaultBucket || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'defaultBucket')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            className: "width-10",
            tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
            children: "Min time interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              className: "width-10",
              placeholder: "10s",
              value: options.jsonData.timeInterval || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'timeInterval')
            })
          })]
        })
      })]
    });
  }

  renderInflux1x() {
    const {
      options
    } = this.props;
    const {
      secureJsonFields
    } = options;
    const secureJsonData = options.secureJsonData || {};
    const {
      htmlPrefix
    } = this;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
          children: "Database Access"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: ["Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "SHOW MEASUREMENTS ON _internal"
          }), " or", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
            children: "SELECT * FROM \"_internal\"..\"database\" LIMIT 10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "To support data isolation and security, make sure appropriate permissions are configured in InfluxDB."]
        })]
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-db`,
            className: "width-10",
            children: "Database"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-20",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              id: `${htmlPrefix}-db`,
              className: "width-20",
              value: options.database || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceOption)(this.props, 'database')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-user`,
            className: "width-10",
            children: "User"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              id: `${htmlPrefix}-user`,
              className: "width-20",
              value: options.user || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceOption)(this.props, 'user')
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SecretFormField, {
            isConfigured: secureJsonFields && secureJsonFields.password,
            value: secureJsonData.password || '',
            label: "Password",
            "aria-label": "Password",
            labelWidth: 10,
            inputWidth: 20,
            onReset: this.onResetPassword,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceSecureJsonDataOption)(this.props, 'password')
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-http-method`,
            className: "width-10",
            tooltip: "You can use either GET or POST HTTP method to query your InfluxDB database. The POST method allows you to perform heavy requests (with a lots of WHERE clause) while the GET method will restrict you and return an error if the query is too large.",
            children: "HTTP Method"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            inputId: `${htmlPrefix}-http-method`,
            className: "width-10",
            value: httpModes.find(httpMode => httpMode.value === options.jsonData.httpMode),
            options: httpModes,
            defaultValue: options.jsonData.httpMode,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'httpMode')
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
            className: "width-10",
            tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
            children: "Min time interval"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              className: "width-10",
              placeholder: "10s",
              value: options.jsonData.timeInterval || '',
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(this.props, 'timeInterval')
            })
          })]
        })
      })]
    });
  }

  render() {
    const {
      options,
      onOptionsChange
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        className: "page-heading",
        children: "Query Language"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
              "aria-label": "Query language",
              className: "width-30",
              value: options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux ? versions[1] : versions[0],
              options: versions,
              defaultValue: versions[0],
              onChange: this.onVersionChanged
            })
          })
        })
      }), options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux && (_InfoBox2 || (_InfoBox2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", {
          children: "Support for Flux in Grafana is currently in beta"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: ["Please report any issues to: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
            href: "https://github.com/grafana/grafana/issues/new/choose",
            children: "https://github.com/grafana/grafana/issues"
          })]
        })]
      }))), options.access === 'direct' && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: "Deprecation Notice",
        severity: "warning",
        children: "Browser access mode in the InfluxDB datasource is deprecated and will be removed in a future release."
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.DataSourceHttpSettings, {
        showAccessOptions: true,
        dataSourceConfig: options,
        defaultUrl: "http://localhost:8086",
        onChange: onOptionsChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form-group",
        children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
            className: "page-heading",
            children: "InfluxDB Details"
          })
        })), options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_4__.InfluxVersion.Flux ? this.renderInflux2x() : this.renderInflux1x(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
            labelWidth: 20,
            label: "Max series",
            tooltip: "Limit the number of series/tables that Grafana will process. Lower this number to prevent abuse, and increase it if you have lots of small time series and not all are shown. Defaults to 1000.",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Input, {
              placeholder: "1000",
              type: "number",
              className: "width-10",
              value: this.state.maxSeries,
              onChange: event => {
                // We duplicate this state so that we allow to write freely inside the input. We don't have
                // any influence over saving so this seems to be only way to do this.
                this.setState({
                  maxSeries: event.currentTarget.value
                });
                const val = parseInt(event.currentTarget.value, 10);
                (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)(this.props, 'maxSeries', Number.isFinite(val) ? val : undefined);
              }
            })
          })
        })]
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FluxQueryEditor": () => (/* binding */ FluxQueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _LinkButton, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const samples = [{
  label: 'Show buckets',
  description: 'List the available buckets (table)',
  value: 'buckets()'
}, {
  label: 'Simple query',
  description: 'filter by measurement and field',
  value: `from(bucket: "db/rp")
  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)
  |> filter(fn: (r) =>
    r._measurement == "example-measurement" and
    r._field == "example-field"
  )`
}, {
  label: 'Grouped Query',
  description: 'Group by (min/max/sum/median)',
  value: `// v.windowPeriod is a variable referring to the current optimized window period (currently: $interval)
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "measurement1" or r["_measurement"] =~ /^.*?regex.*$/)
  |> filter(fn: (r) => r["_field"] == "field2" or r["_field"] =~ /^.*?regex.*$/)
  |> aggregateWindow(every: v.windowPeriod, fn: mean|median|max|count|derivative|sum)
  |> yield(name: "some-name")`
}, {
  label: 'Filter by value',
  description: 'Results between a min/max',
  value: `// v.bucket, v.timeRangeStart, and v.timeRange stop are all variables supported by the flux plugin and influxdb
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_value"] >= 10 and r["_value"] <= 20)`
}, {
  label: 'Schema Exploration: (measurements)',
  description: 'Get a list of measurement using flux',
  value: `import "influxdata/influxdb/v1"
v1.measurements(bucket: v.bucket)`
}, {
  label: 'Schema Exploration: (fields)',
  description: 'Return every possible key in a single table',
  value: `from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)
  |> keys()
  |> keep(columns: ["_value"])
  |> group()
  |> distinct()`
}, {
  label: 'Schema Exploration: (tag keys)',
  description: 'Get a list of tag keys using flux',
  value: `import "influxdata/influxdb/v1"
v1.tagKeys(bucket: v.bucket)`
}, {
  label: 'Schema Exploration: (tag values)',
  description: 'Get a list of tag values using flux',
  value: `import "influxdata/influxdb/v1"
v1.tagValues(
    bucket: v.bucket,
    tag: "host",
    predicate: (r) => true,
    start: -1d
)`
}];
class FluxQueryEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onFluxQueryChange", query => {
      this.props.onChange(Object.assign({}, this.props.query, {
        query
      }));
      this.props.onRunQuery();
    });

    _defineProperty(this, "onSampleChange", val => {
      this.props.onChange(Object.assign({}, this.props.query, {
        query: val.value
      })); // Angular HACK: Since the target does not actually change!

      this.forceUpdate();
      this.props.onRunQuery();
    });

    _defineProperty(this, "getSuggestions", () => {
      const sugs = [{
        label: 'v.timeRangeStart',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'The start time'
      }, {
        label: 'v.timeRangeStop',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'The stop time'
      }, {
        label: 'v.windowPeriod',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'based on max data points'
      }, {
        label: 'v.defaultBucket',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'bucket configured in the datsource'
      }, {
        label: 'v.organization',
        kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Property,
        detail: 'org configured for the datsource'
      }];
      const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)();
      templateSrv.getVariables().forEach(variable => {
        const label = '${' + variable.name + '}';
        let val = templateSrv.replace(label);

        if (val === label) {
          val = '';
        }

        sugs.push({
          label,
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditorSuggestionItemKind.Text,
          detail: `(Template Variable) ${val}`
        });
      });
      return sugs;
    });

    _defineProperty(this, "editorDidMountCallbackHack", editor => {
      setTimeout(() => editor.layout(), 100);
    });
  }

  render() {
    const {
      query
    } = this.props;

    const helpTooltip = _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: ["Type: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("i", {
        children: "ctrl+space"
      }), " to show template variable suggestions ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Many queries can be copied from Chronograf"]
    }));

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditor, {
        height: '200px',
        language: "sql",
        value: query.query || '',
        onBlur: this.onFluxQueryChange,
        onSave: this.onFluxQueryChange,
        showMiniMap: false,
        showLineNumbers: true,
        getSuggestions: this.getSuggestions,
        onEditorDidMount: this.editorDidMountCallbackHack
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form-inline', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              margin-top: 6px;
            `),
        children: [_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
          icon: "external-link-alt",
          variant: "secondary",
          target: "blank",
          href: "https://docs.influxdata.com/influxdb/latest/query-data/get-started/",
          children: "Flux language syntax"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Segment, {
          options: samples,
          value: "Sample Query",
          onChange: this.onSampleChange
        }), _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "gf-form-label gf-form-label--grow"
          })
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFormLabel, {
          width: 5,
          tooltip: helpTooltip,
          children: "Help"
        })]
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;




const CHEAT_SHEET_ITEMS = [{
  title: 'Getting started',
  label: 'Start by selecting a measurement and field from the dropdown above. You can then use the tag selector to further narrow your search.'
}];

const InfluxCheatSheet = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
  children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
    children: "InfluxDB Cheat Sheet"
  })), CHEAT_SHEET_ITEMS.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "cheat-sheet-item",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cheat-sheet-item__title",
      children: item.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cheat-sheet-item__label",
      children: item.label
    })]
  }, item.title))]
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfluxCheatSheet);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxStartPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



class InfluxStartPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClickExample: this.props.onClickExample
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _FluxQueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
/* harmony import */ var _QueryEditorModeSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/QueryEditorModeSwitcher.tsx");
/* harmony import */ var _RawInfluxQLEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/RawInfluxQLEditor.tsx");
/* harmony import */ var _VisualInfluxQLEditor_Editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Editor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const QueryEditor = ({
  query,
  onChange,
  onRunQuery,
  datasource,
  range,
  data
}) => {
  var _query$rawQuery;

  if (datasource.isFlux) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "gf-form-query-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_3__.FluxQueryEditor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery,
        datasource: datasource
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex'
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        flexGrow: 1
      }),
      children: query.rawQuery ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_RawInfluxQLEditor__WEBPACK_IMPORTED_MODULE_5__.RawInfluxQLEditor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_VisualInfluxQLEditor_Editor__WEBPACK_IMPORTED_MODULE_6__.Editor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery,
        datasource: datasource
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_QueryEditorModeSwitcher__WEBPACK_IMPORTED_MODULE_4__.QueryEditorModeSwitcher, {
      isRaw: (_query$rawQuery = query.rawQuery) !== null && _query$rawQuery !== void 0 ? _query$rawQuery : false,
      onChange: value => {
        onChange(Object.assign({}, query, {
          query: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.buildRawQuery)(query),
          rawQuery: value
        }));
        onRunQuery();
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/QueryEditorModeSwitcher.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorModeSwitcher": () => (/* binding */ QueryEditorModeSwitcher)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const QueryEditorModeSwitcher = ({
  isRaw,
  onChange
}) => {
  const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // if the isRaw changes, we hide the modal
    setModalOpen(false);
  }, [isRaw]);

  if (isRaw) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        "aria-label": "Switch to visual editor",
        icon: "pen",
        variant: "secondary",
        type: "button",
        onClick: () => {
          // we show the are-you-sure modal
          setModalOpen(true);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
        isOpen: isModalOpen,
        title: "Switch to visual editor mode",
        body: "Are you sure to switch to visual editor mode? You will lose the changes done in raw query mode.",
        confirmText: "Yes, switch to editor mode",
        dismissText: "No, stay in raw query mode",
        onConfirm: () => {
          onChange(false);
        },
        onDismiss: () => {
          setModalOpen(false);
        }
      })]
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      "aria-label": "Switch to text editor",
      icon: "pen",
      variant: "secondary",
      type: "button",
      onClick: () => {
        onChange(true);
      }
    });
  }
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/RawInfluxQLEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawInfluxQLEditor": () => (/* binding */ RawInfluxQLEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/constants.ts");
/* harmony import */ var _useShadowedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useShadowedState.ts");
/* harmony import */ var _useUniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







// we handle 3 fields: "query", "alias", "resultFormat"
// "resultFormat" changes are applied immediately
// "query" and "alias" changes only happen on onblur
const RawInfluxQLEditor = ({
  query,
  onChange,
  onRunQuery
}) => {
  var _query$resultFormat;

  const [currentQuery, setCurrentQuery] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_3__.useShadowedState)(query.query);
  const [currentAlias, setCurrentAlias] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_3__.useShadowedState)(query.alias);
  const aliasElementId = (0,_useUniqueId__WEBPACK_IMPORTED_MODULE_4__.useUniqueId)();
  const selectElementId = (0,_useUniqueId__WEBPACK_IMPORTED_MODULE_4__.useUniqueId)();
  const resultFormat = (_query$resultFormat = query.resultFormat) !== null && _query$resultFormat !== void 0 ? _query$resultFormat : _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_RESULT_FORMAT;

  const applyDelayedChangesAndRunQuery = () => {
    onChange(Object.assign({}, query, {
      query: currentQuery,
      alias: currentAlias,
      resultFormat
    }));
    onRunQuery();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
      "aria-label": "query",
      rows: 3,
      spellCheck: false,
      placeholder: "InfluxDB Query",
      onBlur: applyDelayedChangesAndRunQuery,
      onChange: e => {
        setCurrentQuery(e.currentTarget.value);
      },
      value: currentQuery !== null && currentQuery !== void 0 ? currentQuery : ''
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
        htmlFor: selectElementId,
        children: "Format as"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        inputId: selectElementId,
        onChange: v => {
          onChange(Object.assign({}, query, {
            resultFormat: v.value
          }));
          onRunQuery();
        },
        value: resultFormat,
        options: _constants__WEBPACK_IMPORTED_MODULE_2__.RESULT_FORMATS
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
        htmlFor: aliasElementId,
        children: "Alias by"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        id: aliasElementId,
        type: "text",
        spellCheck: false,
        placeholder: "Naming pattern",
        onBlur: applyDelayedChangesAndRunQuery,
        onChange: e => {
          setCurrentAlias(e.currentTarget.value);
        },
        value: currentAlias !== null && currentAlias !== void 0 ? currentAlias : ''
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VariableQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _FluxQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class VariableQueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onRefresh", () => {// noop
    });
  }

  render() {
    let {
      query,
      datasource,
      onChange
    } = this.props;

    if (datasource.isFlux) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_2__.FluxQueryEditor, {
        datasource: datasource,
        query: {
          refId: 'A',
          query
        },
        onRunQuery: this.onRefresh,
        onChange: v => onChange(v.query)
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gf-form-inline",
      children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
        width: 10,
        children: "Query"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form-inline gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
          defaultValue: query || '',
          placeholder: "metric name or tags query",
          rows: 1,
          className: "gf-form-input",
          onBlur: e => onChange(e.currentTarget.value)
        })
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddButton": () => (/* binding */ AddButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const AddButton = ({
  loadOptions,
  allowCustomValue,
  onAdd
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
    value: "+",
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: v => {
      onAdd((0,_unwrap__WEBPACK_IMPORTED_MODULE_2__.unwrap)(v.value));
    }
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Editor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influxQLMetadataQuery.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/constants.ts");
/* harmony import */ var _useUniqueId__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var _FormatAsSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FormatAsSection.tsx");
/* harmony import */ var _FromSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FromSection.tsx");
/* harmony import */ var _InputSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/InputSection.tsx");
/* harmony import */ var _OrderByTimeSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/OrderByTimeSection.tsx");
/* harmony import */ var _PartListSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/PartListSection.tsx");
/* harmony import */ var _TagsSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/TagsSection.tsx");
/* harmony import */ var _partListUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/partListUtils.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



















function getTemplateVariableOptions() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)().getVariables() // we make them regex-params, i'm not 100% sure why.
  // probably because this way multi-value variables work ok too.
  .map(v => `/^$${v.name}$/`);
} // helper function to make it easy to call this from the widget-render-code


function withTemplateVariableOptions(optionsPromise) {
  return optionsPromise.then(options => [...getTemplateVariableOptions(), ...options]);
} // it is possible to add fields into the `InfluxQueryTag` structures, and they do work,
// but in some cases, when we do metadata queries, we have to remove them from the queries.


function filterTags(parts, allTagKeys) {
  return parts.filter(t => allTagKeys.has(t.key));
}

const Editor = props => {
  var _query$tags3, _query$limit, _query$slimit, _query$resultFormat;

  const uniqueId = (0,_useUniqueId__WEBPACK_IMPORTED_MODULE_7__.useUniqueId)();
  const formatAsId = `influxdb-qe-format-as-${uniqueId}`;
  const orderByTimeId = `influxdb-qe-order-by${uniqueId}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const query = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.normalizeQuery)(props.query);
  const {
    datasource
  } = props;
  const {
    measurement,
    policy
  } = query;
  const allTagKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getTagKeysForMeasurementAndTags)(measurement, policy, [], datasource).then(tags => {
      return new Set(tags);
    });
  }, [measurement, policy, datasource]);
  const selectLists = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _query$select;

    const dynamicSelectPartOptions = new Map([['field_0', () => {
      return measurement !== undefined ? (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getFieldKeysForMeasurement)(measurement, policy, datasource) : Promise.resolve([]);
    }]]);
    return ((_query$select = query.select) !== null && _query$select !== void 0 ? _query$select : []).map(sel => (0,_partListUtils__WEBPACK_IMPORTED_MODULE_14__.makePartList)(sel, dynamicSelectPartOptions));
  }, [measurement, policy, query.select, datasource]); // the following function is not complicated enough to memoize, but it's result
  // is used in both memoized and un-memoized parts, so we have no choice

  const getTagKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return () => allTagKeys.then(keys => {
      var _query$tags;

      return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getTagKeysForMeasurementAndTags)(measurement, policy, filterTags((_query$tags = query.tags) !== null && _query$tags !== void 0 ? _query$tags : [], keys), datasource);
    });
  }, [measurement, policy, query.tags, datasource, allTagKeys]);
  const groupByList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _query$groupBy;

    const dynamicGroupByPartOptions = new Map([['tag_0', getTagKeys]]);
    return (0,_partListUtils__WEBPACK_IMPORTED_MODULE_14__.makePartList)((_query$groupBy = query.groupBy) !== null && _query$groupBy !== void 0 ? _query$groupBy : [], dynamicGroupByPartOptions);
  }, [getTagKeys, query.groupBy]);

  const onAppliedChange = newQuery => {
    props.onChange(newQuery);
    props.onRunQuery();
  };

  const handleFromSectionChange = (p, m) => {
    onAppliedChange(Object.assign({}, query, {
      policy: p,
      measurement: m
    }));
  };

  const handleTagsSectionChange = tags => {
    // we set empty-arrays to undefined
    onAppliedChange(Object.assign({}, query, {
      tags: tags.length === 0 ? undefined : tags
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: "FROM",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_FromSection__WEBPACK_IMPORTED_MODULE_9__.FromSection, {
        policy: policy,
        measurement: measurement,
        getPolicyOptions: () => (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getAllPolicies)(datasource),
        getMeasurementOptions: filter => withTemplateVariableOptions(allTagKeys.then(keys => {
          var _query$tags2;

          return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getAllMeasurementsForTags)(filter === '' ? undefined : filter, filterTags((_query$tags2 = query.tags) !== null && _query$tags2 !== void 0 ? _query$tags2 : [], keys), datasource);
        })),
        onChange: handleFromSectionChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
        width: "auto",
        className: styles.inlineLabel,
        children: "WHERE"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_TagsSection__WEBPACK_IMPORTED_MODULE_13__.TagsSection, {
        tags: (_query$tags3 = query.tags) !== null && _query$tags3 !== void 0 ? _query$tags3 : [],
        onChange: handleTagsSectionChange,
        getTagKeyOptions: getTagKeys,
        getTagValueOptions: key => withTemplateVariableOptions(allTagKeys.then(keys => {
          var _query$tags4;

          return (0,_influxQLMetadataQuery__WEBPACK_IMPORTED_MODULE_4__.getTagValues)(key, measurement, policy, filterTags((_query$tags4 = query.tags) !== null && _query$tags4 !== void 0 ? _query$tags4 : [], keys), datasource);
        }))
      })]
    }), selectLists.map((sel, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: index === 0 ? 'SELECT' : '',
      fill: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PartListSection__WEBPACK_IMPORTED_MODULE_12__.PartListSection, {
        parts: sel,
        getNewPartOptions: () => Promise.resolve((0,_partListUtils__WEBPACK_IMPORTED_MODULE_14__.getNewSelectPartOptions)()),
        onChange: (partIndex, newParams) => {
          const newQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.changeSelectPart)(query, index, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: type => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.addNewSelectPart)(query, type, index));
        },
        onRemovePart: partIndex => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.removeSelectPart)(query, partIndex, index));
        }
      })
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: "GROUP BY",
      fill: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_PartListSection__WEBPACK_IMPORTED_MODULE_12__.PartListSection, {
        parts: groupByList,
        getNewPartOptions: () => (0,_partListUtils__WEBPACK_IMPORTED_MODULE_14__.getNewGroupByPartOptions)(query, getTagKeys),
        onChange: (partIndex, newParams) => {
          const newQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.changeGroupByPart)(query, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: type => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.addNewGroupByPart)(query, type));
        },
        onRemovePart: partIndex => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_5__.removeGroupByPart)(query, partIndex));
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: "TIMEZONE",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_10__.InputSection, {
        placeholder: "(optional)",
        value: query.tz,
        onChange: tz => {
          onAppliedChange(Object.assign({}, query, {
            tz
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
        htmlFor: orderByTimeId,
        width: "auto",
        className: styles.inlineLabel,
        children: "ORDER BY TIME"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_OrderByTimeSection__WEBPACK_IMPORTED_MODULE_11__.OrderByTimeSection, {
        inputId: orderByTimeId,
        value: query.orderByTime === 'DESC' ? 'DESC' : 'ASC'
        /* FIXME: make this shared with influx_query_model */
        ,
        onChange: v => {
          onAppliedChange(Object.assign({}, query, {
            orderByTime: v
          }));
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      label: "LIMIT",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_10__.InputSection, {
        placeholder: "(optional)",
        value: (_query$limit = query.limit) === null || _query$limit === void 0 ? void 0 : _query$limit.toString(),
        onChange: limit => {
          onAppliedChange(Object.assign({}, query, {
            limit
          }));
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
        width: "auto",
        className: styles.inlineLabel,
        children: "SLIMIT"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_10__.InputSection, {
        placeholder: "(optional)",
        value: (_query$slimit = query.slimit) === null || _query$slimit === void 0 ? void 0 : _query$slimit.toString(),
        onChange: slimit => {
          onAppliedChange(Object.assign({}, query, {
            slimit
          }));
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, {
      htmlFor: formatAsId,
      label: "FORMAT AS",
      fill: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_FormatAsSection__WEBPACK_IMPORTED_MODULE_8__.FormatAsSection, {
        inputId: formatAsId,
        format: (_query$resultFormat = query.resultFormat) !== null && _query$resultFormat !== void 0 ? _query$resultFormat : _constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_RESULT_FORMAT,
        onChange: format => {
          onAppliedChange(Object.assign({}, query, {
            resultFormat: format
          }));
        }
      }), query.resultFormat !== 'table' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
          width: "auto",
          className: styles.inlineLabel,
          children: "ALIAS"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_InputSection__WEBPACK_IMPORTED_MODULE_10__.InputSection, {
          isWide: true,
          placeholder: "Naming pattern",
          value: query.alias,
          onChange: alias => {
            onAppliedChange(Object.assign({}, query, {
              alias
            }));
          }
        })]
      })]
    })]
  });
};

function getStyles(theme) {
  return {
    inlineLabel: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.primary.text};
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FormatAsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatAsSection": () => (/* binding */ FormatAsSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/constants.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('width-8', _styles__WEBPACK_IMPORTED_MODULE_4__.paddingRightClass);
const FormatAsSection = ({
  format,
  inputId,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
    inputId: inputId,
    className: className,
    onChange: v => {
      onChange((0,_unwrap__WEBPACK_IMPORTED_MODULE_5__.unwrap)(v.value));
    },
    value: format,
    options: _constants__WEBPACK_IMPORTED_MODULE_3__.RESULT_FORMATS
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FromSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FromSection": () => (/* binding */ FromSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const DEFAULT_POLICY = 'default'; // we use the value "default" as a magic-value, it means
// we use the default retention-policy.
// unfortunately, IF the user has a retention-policy named "default",
// and it is not the default-retention-policy in influxdb,
// bad things will happen.
// https://github.com/grafana/grafana/issues/4347 :-(
// FIXME: we could maybe at least detect here that problem-is-happening,
// and show an error message or something.
// unfortunately, currently the ResponseParser does not return the
// is-default info for the retention-policies, so that should change first.

const FromSection = ({
  policy,
  measurement,
  onChange,
  getPolicyOptions,
  getMeasurementOptions
}) => {
  const handlePolicyLoadOptions = async () => {
    const allPolicies = await getPolicyOptions(); // if `default` does not exist in the list of policies, we add it

    const allPoliciesWithDefault = allPolicies.some(p => p === 'default') ? allPolicies : [DEFAULT_POLICY, ...allPolicies];
    return allPoliciesWithDefault.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue);
  };

  const handleMeasurementLoadOptions = async filter => {
    const allMeasurements = await getMeasurementOptions(filter);
    return allMeasurements.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      allowCustomValue: true,
      value: policy !== null && policy !== void 0 ? policy : 'using default policy',
      loadOptions: handlePolicyLoadOptions,
      onChange: v => {
        onChange(v.value, measurement);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_1__.Seg, {
      allowCustomValue: true,
      value: measurement !== null && measurement !== void 0 ? measurement : 'select measurement',
      loadOptions: handleMeasurementLoadOptions,
      filterByLoadOptions: true,
      onChange: v => {
        onChange(policy, v.value);
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/InputSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputSection": () => (/* binding */ InputSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _useShadowedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useShadowedState.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const InputSection = ({
  value,
  onChange,
  isWide,
  placeholder
}) => {
  const [currentValue, setCurrentValue] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_3__.useShadowedState)(value);

  const onBlur = () => {
    // we send empty-string as undefined
    const newValue = currentValue === '' ? undefined : currentValue;
    onChange(newValue);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
      placeholder: placeholder,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)((isWide !== null && isWide !== void 0 ? isWide : false) ? 'width-14' : 'width-8', _styles__WEBPACK_IMPORTED_MODULE_4__.paddingRightClass),
      type: "text",
      spellCheck: false,
      onBlur: onBlur,
      onChange: e => {
        setCurrentValue(e.currentTarget.value);
      },
      value: currentValue !== null && currentValue !== void 0 ? currentValue : ''
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/OrderByTimeSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderByTimeSection": () => (/* binding */ OrderByTimeSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const OPTIONS = [{
  label: 'ascending',
  value: 'ASC'
}, {
  label: 'descending',
  value: 'DESC'
}];
const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('width-9', _styles__WEBPACK_IMPORTED_MODULE_3__.paddingRightClass);
const OrderByTimeSection = ({
  value,
  onChange,
  inputId
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
      inputId: inputId,
      className: className,
      onChange: v => {
        onChange((0,_unwrap__WEBPACK_IMPORTED_MODULE_4__.unwrap)(v.value));
      },
      value: value,
      options: OPTIONS
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/PartListSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartListSection": () => (/* binding */ PartListSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const renderRemovableNameMenuItems = onClick => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MenuGroup, {
    label: "",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
      label: "remove",
      onClick: onClick
    })
  });
};

const noRightMarginPaddingClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  paddingRight: '0',
  marginRight: '0'
});

const RemovableName = ({
  name,
  onRemove
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.WithContextMenu, {
    renderMenuItems: () => renderRemovableNameMenuItems(onRemove),
    children: ({
      openMenu
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form-label', noRightMarginPaddingClass),
      onClick: openMenu,
      children: name
    })
  });
};

const noHorizMarginPaddingClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  paddingLeft: '0',
  paddingRight: '0',
  marginLeft: '0',
  marginRight: '0'
});

const getPartClass = theme => {
  return (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form-label', (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    paddingLeft: '0',
    // gf-form-label class makes certain css attributes incorrect
    // for the selectbox-dropdown, so we have to "reset" them back
    lineHeight: theme.typography.body.lineHeight,
    fontSize: theme.typography.body.fontSize
  }));
};

const Part = ({
  name,
  params,
  onChange,
  onRemove
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  const partClass = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => getPartClass(theme), [theme]);

  const onParamChange = (par, i) => {
    const newParams = params.map(p => p.value);
    newParams[i] = par;
    onChange(newParams);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: partClass,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(RemovableName, {
      name: name,
      onRemove: onRemove
    }), "(", params.map((p, i) => {
      const {
        value,
        options
      } = p;
      const isLast = i === params.length - 1;
      const loadOptions = options !== null ? () => options().then(items => items.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_5__.toSelectableValue)) : undefined;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_4__.Seg, {
          allowCustomValue: true,
          value: value,
          buttonClassName: noHorizMarginPaddingClass,
          loadOptions: loadOptions,
          onChange: v => {
            onParamChange((0,_unwrap__WEBPACK_IMPORTED_MODULE_6__.unwrap)(v.value), i);
          }
        }), !isLast && ',']
      }, i);
    }), ")"]
  });
};

const PartListSection = ({
  parts,
  getNewPartOptions,
  onAddNewPart,
  onRemovePart,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [parts.map((part, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Part, {
      name: part.name,
      params: part.params,
      onRemove: () => {
        onRemovePart(index);
      },
      onChange: pars => {
        onChange(index, pars);
      }
    }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AddButton__WEBPACK_IMPORTED_MODULE_3__.AddButton, {
      loadOptions: getNewPartOptions,
      onAdd: onAddNewPart
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Seg": () => (/* binding */ Seg)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _useShadowedState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useShadowedState.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





 // this file is a simpler version of `grafana-ui / SegmentAsync.tsx`
// with some changes:
// 1. click-outside does not select the value. i think it's better to be explicit here.
// 2. we set a min-width on the select-element to handle cases where the `value`
//    is very short, like "x", and then you click on it and the select opens,
//    and it tries to be as short as "x" and it does not work well.
// NOTE: maybe these changes could be migrated into the SegmentAsync later


const selectClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  minWidth: '160px'
});

// when a custom value is written into a select-box,
// by default the new value is prefixed with "Create:",
// and that sounds confusing because here we do not create
// anything. we change this to just be the entered string.
const formatCreateLabel = v => v;

const SelReload = ({
  loadOptions,
  allowCustomValue,
  onChange,
  onClose
}) => {
  // here we rely on the fact that writing text into the <AsyncSelect/>
  // does not cause a re-render of the current react component.
  // this way there is only a single render-call,
  // so there is only a single `debouncedLoadOptions`.
  // if we want ot make this "re-render safe,
  // we will have to put the debounced call into an useRef,
  // and probably have an useEffect
  const debouncedLoadOptions = debounce_promise__WEBPACK_IMPORTED_MODULE_1___default()(loadOptions, 1000, {
    leading: true
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: selectClass,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.AsyncSelect, {
      formatCreateLabel: formatCreateLabel,
      defaultOptions: true,
      autoFocus: true,
      isOpen: true,
      onCloseMenu: onClose,
      allowCustomValue: allowCustomValue,
      loadOptions: debouncedLoadOptions,
      onChange: onChange
    })
  });
};

const SelSingleLoad = ({
  loadOptions,
  allowCustomValue,
  onChange,
  onClose
}) => {
  var _loadState$value;

  const [loadState, doLoad] = (0,react_use__WEBPACK_IMPORTED_MODULE_6__["default"])(loadOptions, [loadOptions]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    doLoad('');
  }, [doLoad, loadOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: selectClass,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      isLoading: loadState.loading,
      formatCreateLabel: formatCreateLabel,
      autoFocus: true,
      isOpen: true,
      onCloseMenu: onClose,
      allowCustomValue: allowCustomValue,
      options: (_loadState$value = loadState.value) !== null && _loadState$value !== void 0 ? _loadState$value : [],
      onChange: onChange
    })
  });
};

const Sel = ({
  loadOptions,
  filterByLoadOptions,
  allowCustomValue,
  onChange,
  onClose
}) => {
  // unfortunately <Segment/> and <SegmentAsync/> have somewhat different behavior,
  // so the simplest approach was to just create two separate wrapper-components
  return filterByLoadOptions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SelReload, {
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: onChange,
    onClose: onClose
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SelSingleLoad, {
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: onChange,
    onClose: onClose
  });
};

const Inp = ({
  initialValue,
  onChange,
  onClose
}) => {
  const [currentValue, setCurrentValue] = (0,_useShadowedState__WEBPACK_IMPORTED_MODULE_4__.useShadowedState)(initialValue);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
    autoFocus: true,
    type: "text",
    spellCheck: false,
    onBlur: onClose,
    onKeyDown: e => {
      if (e.key === 'Enter') {
        onChange(currentValue);
      }
    },
    onChange: e => {
      setCurrentValue(e.currentTarget.value);
    },
    value: currentValue
  });
};

const defaultButtonClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  width: 'auto',
  cursor: 'pointer'
});
const Seg = ({
  value,
  buttonClassName,
  loadOptions,
  filterByLoadOptions,
  allowCustomValue,
  onChange
}) => {
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  if (!isOpen) {
    const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(defaultButtonClass, buttonClassName);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
      as: "button",
      className: className,
      onClick: () => {
        setOpen(true);
      },
      children: value
    });
  } else {
    if (loadOptions !== undefined) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Sel, {
        loadOptions: loadOptions,
        filterByLoadOptions: filterByLoadOptions !== null && filterByLoadOptions !== void 0 ? filterByLoadOptions : false,
        allowCustomValue: allowCustomValue,
        onChange: v => {
          setOpen(false);
          onChange(v);
        },
        onClose: () => {
          setOpen(false);
        }
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Inp, {
        initialValue: value,
        onClose: () => {
          setOpen(false);
        },
        onChange: v => {
          setOpen(false);
          onChange({
            value: v,
            label: v
          });
        }
      });
    }
  }
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/TagsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsSection": () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx");
/* harmony import */ var _tagUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/tagUtils.ts");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const knownOperators = ['=', '!=', '<>', '<', '>', '=~', '!~'];
const knownConditions = ['AND', 'OR'];
const operatorOptions = knownOperators.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue);
const condititonOptions = knownConditions.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue);

const loadConditionOptions = () => Promise.resolve(condititonOptions);

const loadOperatorOptions = () => Promise.resolve(operatorOptions);

const Tag = ({
  tag,
  isFirst,
  onRemove,
  onChange,
  getTagKeyOptions,
  getTagValueOptions
}) => {
  const operator = (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getOperator)(tag);
  const condition = (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getCondition)(tag, isFirst);

  const getTagKeySegmentOptions = () => {
    return getTagKeyOptions().catch(err => {
      // in this UI element we add a special item to the list of options,
      // that is used to remove the element.
      // this causes a problem: if `getTagKeyOptions` fails with an error,
      // the remove-filter option is never added to the list,
      // and the UI element can not be removed.
      // to avoid it, we catch any potential errors coming from `getTagKeyOptions`,
      // log the error, and pretend that the list of options is an empty list.
      // this way the remove-item option can always be added to the list.
      console.error(err);
      return [];
    }).then(tags => [{
      label: '-- remove filter --',
      value: undefined
    }, ...tags.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue)]);
  };

  const getTagValueSegmentOptions = () => {
    return getTagValueOptions(tag.key).then(tags => tags.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "gf-form",
    children: [condition != null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_2__.Seg, {
      value: condition,
      loadOptions: loadConditionOptions,
      onChange: v => {
        onChange(Object.assign({}, tag, {
          condition: v.value
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_2__.Seg, {
      allowCustomValue: true,
      value: tag.key,
      loadOptions: getTagKeySegmentOptions,
      onChange: v => {
        const {
          value
        } = v;

        if (value === undefined) {
          onRemove();
        } else {
          onChange(Object.assign({}, tag, {
            key: value !== null && value !== void 0 ? value : ''
          }));
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_2__.Seg, {
      value: operator,
      loadOptions: loadOperatorOptions,
      onChange: op => {
        onChange(Object.assign({}, tag, {
          operator: op.value
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Seg__WEBPACK_IMPORTED_MODULE_2__.Seg, {
      allowCustomValue: true,
      value: tag.value,
      loadOptions: getTagValueSegmentOptions,
      onChange: v => {
        var _v$value;

        const value = (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : '';
        onChange(Object.assign({}, tag, {
          value,
          operator: (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.adjustOperatorIfNeeded)(operator, value)
        }));
      }
    })]
  });
};

const TagsSection = ({
  tags,
  onChange,
  getTagKeyOptions,
  getTagValueOptions
}) => {
  const onTagChange = (newTag, index) => {
    const newTags = tags.map((tag, i) => {
      return index === i ? newTag : tag;
    });
    onChange(newTags);
  };

  const onTagRemove = index => {
    const newTags = tags.filter((t, i) => i !== index);
    onChange(newTags);
  };

  const getTagKeySegmentOptions = () => {
    return getTagKeyOptions().then(tags => tags.map(_toSelectableValue__WEBPACK_IMPORTED_MODULE_4__.toSelectableValue));
  };

  const addNewTag = (tagKey, isFirst) => {
    const minimalTag = {
      key: tagKey,
      value: 'select tag value'
    };
    const newTag = {
      key: minimalTag.key,
      value: minimalTag.value,
      operator: (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getOperator)(minimalTag),
      condition: (0,_tagUtils__WEBPACK_IMPORTED_MODULE_3__.getCondition)(minimalTag, isFirst)
    };
    onChange([...tags, newTag]);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [tags.map((t, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Tag, {
      tag: t,
      isFirst: i === 0,
      onChange: newT => {
        onTagChange(newT, i);
      },
      onRemove: () => {
        onTagRemove(i);
      },
      getTagKeyOptions: getTagKeyOptions,
      getTagValueOptions: getTagValueOptions
    }, i)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AddButton__WEBPACK_IMPORTED_MODULE_1__.AddButton, {
      allowCustomValue: true,
      loadOptions: getTagKeySegmentOptions,
      onAdd: v => {
        addNewTag(v, tags.length === 0);
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/partListUtils.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewGroupByPartOptions": () => (/* binding */ getNewGroupByPartOptions),
/* harmony export */   "getNewSelectPartOptions": () => (/* binding */ getNewSelectPartOptions),
/* harmony export */   "makePartList": () => (/* binding */ makePartList)
/* harmony export */ });
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts");




function getNewSelectPartOptions() {
  const categories = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].getCategories();
  const options = [];
  const keys = Object.keys(categories);
  keys.forEach(key => {
    const children = categories[key].map(x => (0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)(x.type));
    options.push({
      label: key,
      options: children
    });
  });
  return options;
}
async function getNewGroupByPartOptions(query, getTagKeys) {
  const tagKeys = await getTagKeys();
  const queryCopy = Object.assign({}, query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_0__["default"](queryCopy);
  const options = [];

  if (!model.hasFill()) {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)('fill(null)'));
  }

  if (!model.hasGroupByTime()) {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)('time($interval)'));
  }

  tagKeys.forEach(key => {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)(`tag(${key})`));
  });
  return options;
}

function getPartParams(part, dynamicParamOptions) {
  var _part$params;

  // NOTE: the way the system is constructed,
  // there always can only be one possible dynamic-lookup
  // field. in case of select it is the field,
  // in case of group-by it is the tag
  const def = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create(part).def; // we switch the numbers to strings, it will work that way too,
  // and it makes the code simpler

  const paramValues = ((_part$params = part.params) !== null && _part$params !== void 0 ? _part$params : []).map(p => p.toString());

  if (paramValues.length !== def.params.length) {
    throw new Error('Invalid query-segment');
  }

  return paramValues.map((val, index) => {
    const defParam = def.params[index];

    if (defParam.dynamicLookup) {
      return {
        value: val,
        options: (0,_unwrap__WEBPACK_IMPORTED_MODULE_3__.unwrap)(dynamicParamOptions.get(`${def.type}_${index}`))
      };
    }

    if (defParam.options != null) {
      return {
        value: val,
        options: () => Promise.resolve(defParam.options)
      };
    }

    return {
      value: val,
      options: null
    };
  });
}

function makePartList(queryParts, dynamicParamOptions) {
  return queryParts.map(qp => {
    return {
      name: qp.type,
      params: getPartParams(qp, dynamicParamOptions)
    };
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paddingRightClass": () => (/* binding */ paddingRightClass)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const paddingRightClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  paddingRight: '4px'
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/tagUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adjustOperatorIfNeeded": () => (/* binding */ adjustOperatorIfNeeded),
/* harmony export */   "getCondition": () => (/* binding */ getCondition),
/* harmony export */   "getOperator": () => (/* binding */ getOperator)
/* harmony export */ });
function isRegex(text) {
  return /^\/.*\/$/.test(text);
} // FIXME: sync these to the query-string-generation-code
// probably it's in influx_query_model.ts


function getOperator(tag) {
  var _tag$operator;

  return (_tag$operator = tag.operator) !== null && _tag$operator !== void 0 ? _tag$operator : isRegex(tag.value) ? '=~' : '=';
} // FIXME: sync these to the query-string-generation-code
// probably it's in influx_query_model.ts

function getCondition(tag, isFirst) {
  var _tag$condition;

  return isFirst ? undefined : (_tag$condition = tag.condition) !== null && _tag$condition !== void 0 ? _tag$condition : 'AND';
}
function adjustOperatorIfNeeded(currentOperator, newTagValue) {
  const isCurrentOperatorRegex = currentOperator === '=~' || currentOperator === '!~';
  const isNewTagValueRegex = isRegex(newTagValue);

  if (isNewTagValueRegex) {
    return isCurrentOperatorRegex ? currentOperator : '=~';
  } else {
    return isCurrentOperatorRegex ? '=' : currentOperator;
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toSelectableValue": () => (/* binding */ toSelectableValue)
/* harmony export */ });
function toSelectableValue(t) {
  return {
    label: t,
    value: t
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unwrap": () => (/* binding */ unwrap)
/* harmony export */ });
function unwrap(value) {
  if (value == null) {
    throw new Error('value must not be nullish');
  }

  return value;
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_RESULT_FORMAT": () => (/* binding */ DEFAULT_RESULT_FORMAT),
/* harmony export */   "RESULT_FORMATS": () => (/* binding */ RESULT_FORMATS)
/* harmony export */ });
const RESULT_FORMATS = [{
  label: 'Time series',
  value: 'time_series'
}, {
  label: 'Table',
  value: 'table'
}, {
  label: 'Logs',
  value: 'logs'
}];
const DEFAULT_RESULT_FORMAT = 'time_series';

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/useShadowedState.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useShadowedState": () => (/* binding */ useShadowedState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");


function useShadowedState(outsideVal) {
  const [currentVal, setCurrentVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(outsideVal);
  const prevOutsideVal = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(outsideVal);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isOutsideValChanged = prevOutsideVal !== outsideVal; // if the value changes from the outside, we accept it into the state
    // (we only set it if it is different from the current value)

    if (isOutsideValChanged && currentVal !== outsideVal) {
      setCurrentVal(outsideVal);
    }
  }, [outsideVal, currentVal, prevOutsideVal]);
  return [currentVal, setCurrentVal];
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _components_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx");
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _influx_series__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_series.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_builder.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/response_parser.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
const _excluded = ["__interval", "__interval_ms"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // we detect the field type based on the value-array

function getFieldType(values) {
  // the values-array may contain a lot of nulls.
  // we need the first not-null item
  const firstNotNull = values.find(v => v !== null);

  if (firstNotNull === undefined) {
    // we could not find any not-null values
    return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number;
  }

  const valueType = typeof firstNotNull;

  switch (valueType) {
    case 'string':
      return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string;

    case 'boolean':
      return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.boolean;

    case 'number':
      return _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number;

    default:
      // this should never happen, influxql values
      // can only be numbers, strings and booleans.
      throw new Error(`InfluxQL: invalid value type ${valueType}`);
  }
} // this conversion function is specialized to work with the timeseries
// data returned by InfluxDatasource.getTimeSeries()


function timeSeriesToDataFrame(timeSeries) {
  const times = [];
  const values = []; // the data we process here is not correctly typed.
  // the typescript types say every data-point is number|null,
  // but in fact it can be string or boolean too.

  const points = timeSeries.datapoints;

  for (const point of points) {
    values.push(point[0]);
    times.push(point[1]);
  }

  const timeField = {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.TIME_SERIES_TIME_FIELD_NAME,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.ArrayVector(times)
  };
  const valueField = {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.TIME_SERIES_VALUE_FIELD_NAME,
    type: getFieldType(values),
    config: {
      displayNameFromDS: timeSeries.title
    },
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.ArrayVector(values),
    labels: timeSeries.tags
  };
  const fields = [timeField, valueField];
  return {
    name: timeSeries.target,
    refId: timeSeries.refId,
    meta: timeSeries.meta,
    fields,
    length: values.length
  };
}

class InfluxDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)()) {
    var _instanceSettings$url, _instanceSettings$use, _instanceSettings$pas;

    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "urls", void 0);

    _defineProperty(this, "username", void 0);

    _defineProperty(this, "password", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "database", void 0);

    _defineProperty(this, "basicAuth", void 0);

    _defineProperty(this, "withCredentials", void 0);

    _defineProperty(this, "access", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "httpMode", void 0);

    _defineProperty(this, "isFlux", void 0);

    this.templateSrv = templateSrv;
    this.type = 'influxdb';
    this.urls = ((_instanceSettings$url = instanceSettings.url) !== null && _instanceSettings$url !== void 0 ? _instanceSettings$url : '').split(',').map(url => {
      return url.trim();
    });
    this.username = (_instanceSettings$use = instanceSettings.username) !== null && _instanceSettings$use !== void 0 ? _instanceSettings$use : '';
    this.password = (_instanceSettings$pas = instanceSettings.password) !== null && _instanceSettings$pas !== void 0 ? _instanceSettings$pas : '';
    this.name = instanceSettings.name;
    this.database = instanceSettings.database;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.access = instanceSettings.access;
    const settingsData = instanceSettings.jsonData || {};
    this.interval = settingsData.timeInterval;
    this.httpMode = settingsData.httpMode || 'GET';
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_10__["default"]();
    this.isFlux = settingsData.version === _types__WEBPACK_IMPORTED_MODULE_11__.InfluxVersion.Flux;

    if (this.isFlux) {
      // When flux, use an annotation processor rather than the `annotationQuery` lifecycle
      this.annotations = {
        QueryEditor: _components_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_5__.FluxQueryEditor
      };
    }
  }

  query(request) {
    // for not-flux queries we call `this.classicQuery`, and that
    // handles the is-hidden situation.
    // for the flux-case, we do the filtering here
    const filteredRequest = Object.assign({}, request, {
      targets: request.targets.filter(t => t.hide !== true)
    });

    if (this.isFlux) {
      return super.query(filteredRequest);
    }

    if (this.isMigrationToggleOnAndIsAccessProxy()) {
      return super.query(filteredRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(res => {
        if (res.error) {
          throw {
            message: 'InfluxDB Error: ' + res.error.message,
            res
          };
        }

        const seriesList = [];
        const groupedFrames = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(res.data, x => x.refId);

        if (Object.keys(groupedFrames).length > 0) {
          filteredRequest.targets.forEach(target => {
            var _groupedFrames$target;

            const filteredFrames = (_groupedFrames$target = groupedFrames[target.refId]) !== null && _groupedFrames$target !== void 0 ? _groupedFrames$target : [];

            switch (target.resultFormat) {
              case 'logs':
              case 'table':
                seriesList.push(this.responseParser.getTable(filteredFrames, target, {
                  preferredVisualisationType: target.resultFormat
                }));
                break;

              default:
                {
                  for (let i = 0; i < filteredFrames.length; i++) {
                    seriesList.push(filteredFrames[i]);
                  }

                  break;
                }
            }
          });
        }

        return {
          data: seriesList
        };
      }));
    } // Fallback to classic query support


    return this.classicQuery(request);
  }

  getQueryDisplayText(query) {
    if (this.isFlux) {
      return query.query;
    }

    return new _influx_query_model__WEBPACK_IMPORTED_MODULE_6__["default"](query).render(false);
  }
  /**
   * Returns false if the query should be skipped
   */


  filterQuery(query) {
    if (this.isFlux) {
      return !!query.query;
    }

    return true;
  }

  applyTemplateVariables(query, scopedVars) {
    // We want to interpolate these variables on backend
    const rest = _objectWithoutPropertiesLoose(scopedVars, _excluded);

    if (this.isFlux) {
      var _query$query;

      return Object.assign({}, query, {
        query: this.templateSrv.replace((_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '', rest) // The raw query text

      });
    }

    if (app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].featureToggles.influxdbBackendMigration && this.access === 'proxy') {
      query = this.applyVariables(query, scopedVars, rest);
    }

    return query;
  }
  /**
   * The unchanged pre 7.1 query implementation
   */


  classicQuery(options) {
    let timeFilter = this.getTimeFilter(options);
    const scopedVars = options.scopedVars;
    const targets = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(options.targets);
    const queryTargets = [];
    let i, y;

    let allQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(targets, target => {
      if (target.hide) {
        return '';
      }

      queryTargets.push(target); // backward compatibility

      scopedVars.interval = scopedVars.__interval;
      return new _influx_query_model__WEBPACK_IMPORTED_MODULE_6__["default"](target, this.templateSrv, scopedVars).render(true);
    }).reduce((acc, current) => {
      if (current !== '') {
        acc += ';' + current;
      }

      return acc;
    });

    if (allQueries === '') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
        data: []
      });
    } // add global adhoc filters to timeFilter


    const adhocFilters = this.templateSrv.getAdhocFilters(this.name);

    if (adhocFilters.length > 0) {
      const tmpQuery = new _influx_query_model__WEBPACK_IMPORTED_MODULE_6__["default"]({
        refId: 'A'
      }, this.templateSrv, scopedVars);
      timeFilter += ' AND ' + tmpQuery.renderAdhocFilters(adhocFilters);
    } // replace grafana variables


    scopedVars.timeFilter = {
      value: timeFilter
    }; // replace templated variables

    allQueries = this.templateSrv.replace(allQueries, scopedVars);
    return this._seriesQuery(allQueries, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => {
      if (!data || !data.results) {
        return {
          data: []
        };
      }

      const seriesList = [];

      for (i = 0; i < data.results.length; i++) {
        const result = data.results[i];

        if (!result || !result.series) {
          continue;
        }

        const target = queryTargets[i];
        let alias = target.alias;

        if (alias) {
          alias = this.templateSrv.replace(target.alias, options.scopedVars);
        }

        const meta = {
          executedQueryString: data.executedQueryString
        };
        const influxSeries = new _influx_series__WEBPACK_IMPORTED_MODULE_7__["default"]({
          refId: target.refId,
          series: data.results[i].series,
          alias: alias,
          meta
        });

        switch (target.resultFormat) {
          case 'logs':
            meta.preferredVisualisationType = 'logs';

          case 'table':
            {
              seriesList.push(influxSeries.getTable());
              break;
            }

          default:
            {
              const timeSeries = influxSeries.getTimeSeries();

              for (y = 0; y < timeSeries.length; y++) {
                seriesList.push(timeSeriesToDataFrame(timeSeries[y]));
              }

              break;
            }
        }
      }

      return {
        data: seriesList
      };
    }));
  }

  async annotationQuery(options) {
    if (this.isFlux) {
      return Promise.reject({
        message: 'Flux requires the standard annotation query'
      });
    } // InfluxQL puts a query string on the annotation


    if (!options.annotation.query) {
      return Promise.reject({
        message: 'Query missing in annotation definition'
      });
    }

    if (app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].featureToggles.influxdbBackendMigration && this.access === 'proxy') {
      var _options$annotation$q;

      // We want to send our query to the backend as a raw query
      const target = {
        refId: 'metricFindQuery',
        datasource: this.getRef(),
        query: this.templateSrv.replace((_options$annotation$q = options.annotation.query) !== null && _options$annotation$q !== void 0 ? _options$annotation$q : ''),
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
          from: options.range.from.valueOf().toString(),
          to: options.range.to.valueOf().toString(),
          queries: [target]
        },
        requestId: options.annotation.name
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(async res => await this.responseParser.transformAnnotationResponse(options, res, target))));
    }

    const timeFilter = this.getTimeFilter({
      rangeRaw: options.rangeRaw,
      timezone: options.dashboard.timezone
    });
    let query = options.annotation.query.replace('$timeFilter', timeFilter);
    query = this.templateSrv.replace(query, undefined, 'regex');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this._seriesQuery(query, options)).then(data => {
      if (!data || !data.results || !data.results[0]) {
        throw {
          message: 'No results in response from InfluxDB'
        };
      }

      return new _influx_series__WEBPACK_IMPORTED_MODULE_7__["default"]({
        series: data.results[0].series,
        annotation: options.annotation
      }).getAnnotations();
    });
  }

  targetContainsTemplate(target) {
    // for flux-mode we just take target.query,
    // for influxql-mode we use InfluxQueryModel to create the text-representation
    const queryText = this.isFlux ? target.query : (0,_queryUtils__WEBPACK_IMPORTED_MODULE_8__.buildRawQuery)(target);
    return this.templateSrv.containsTemplate(queryText);
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries || queries.length === 0) {
      return [];
    }

    return queries.map(query => {
      if (this.isFlux) {
        var _query$query2;

        return Object.assign({}, query, {
          datasource: this.getRef(),
          query: this.templateSrv.replace((_query$query2 = query.query) !== null && _query$query2 !== void 0 ? _query$query2 : '', scopedVars) // The raw query text

        });
      }

      return Object.assign({}, query, {
        datasource: this.getRef()
      }, this.applyVariables(query, scopedVars, scopedVars));
    });
  }

  applyVariables(query, scopedVars, rest) {
    var _query$query3, _query$alias, _query$limit$toString, _query$limit, _query$measurement, _query$policy, _query$slimit$toStrin, _query$slimit, _query$tz;

    const expandedQuery = Object.assign({}, query);

    if (query.groupBy) {
      expandedQuery.groupBy = query.groupBy.map(groupBy => {
        var _groupBy$params;

        return Object.assign({}, groupBy, {
          params: (_groupBy$params = groupBy.params) === null || _groupBy$params === void 0 ? void 0 : _groupBy$params.map(param => {
            return this.templateSrv.replace(param.toString(), undefined, 'regex');
          })
        });
      });
    }

    if (query.select) {
      expandedQuery.select = query.select.map(selects => {
        return selects.map(select => {
          var _select$params;

          return Object.assign({}, select, {
            params: (_select$params = select.params) === null || _select$params === void 0 ? void 0 : _select$params.map(param => {
              return this.templateSrv.replace(param.toString(), undefined, 'regex');
            })
          });
        });
      });
    }

    if (query.tags) {
      expandedQuery.tags = query.tags.map(tag => {
        return Object.assign({}, tag, {
          value: this.templateSrv.replace(tag.value, undefined, 'regex')
        });
      });
    }

    return Object.assign({}, expandedQuery, {
      query: this.templateSrv.replace((_query$query3 = query.query) !== null && _query$query3 !== void 0 ? _query$query3 : '', rest),
      // The raw query text
      alias: this.templateSrv.replace((_query$alias = query.alias) !== null && _query$alias !== void 0 ? _query$alias : '', scopedVars),
      limit: this.templateSrv.replace((_query$limit$toString = (_query$limit = query.limit) === null || _query$limit === void 0 ? void 0 : _query$limit.toString()) !== null && _query$limit$toString !== void 0 ? _query$limit$toString : '', scopedVars, 'regex'),
      measurement: this.templateSrv.replace((_query$measurement = query.measurement) !== null && _query$measurement !== void 0 ? _query$measurement : '', scopedVars, 'regex'),
      policy: this.templateSrv.replace((_query$policy = query.policy) !== null && _query$policy !== void 0 ? _query$policy : '', scopedVars, 'regex'),
      slimit: this.templateSrv.replace((_query$slimit$toStrin = (_query$slimit = query.slimit) === null || _query$slimit === void 0 ? void 0 : _query$slimit.toString()) !== null && _query$slimit$toStrin !== void 0 ? _query$slimit$toStrin : '', scopedVars, 'regex'),
      tz: this.templateSrv.replace((_query$tz = query.tz) !== null && _query$tz !== void 0 ? _query$tz : '', scopedVars)
    });
  }

  async metricFindQuery(query, options) {
    if (this.isFlux || this.isMigrationToggleOnAndIsAccessProxy()) {
      const target = {
        refId: 'metricFindQuery',
        query,
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(super.query(Object.assign({}, options, {
        // includes 'range'
        targets: [target]
      }))).then(rsp => {
        var _rsp$data;

        if ((_rsp$data = rsp.data) !== null && _rsp$data !== void 0 && _rsp$data.length) {
          return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.frameToMetricFindValue)(rsp.data[0]);
        }

        return [];
      });
    }

    const interpolated = this.templateSrv.replace(query, undefined, 'regex');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this._seriesQuery(interpolated, options)).then(resp => {
      return this.responseParser.parse(query, resp);
    });
  }

  getTagKeys(options = {}) {
    const queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_9__.InfluxQueryBuilder({
      measurement: options.measurement || '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('TAG_KEYS');
    return this.metricFindQuery(query, options);
  }

  getTagValues(options = {}) {
    const queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_9__.InfluxQueryBuilder({
      measurement: options.measurement || '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('TAG_VALUES', options.key);
    return this.metricFindQuery(query, options);
  }

  _seriesQuery(query, options) {
    if (!query) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)({
        results: []
      });
    }

    if (options && options.range) {
      const timeFilter = this.getTimeFilter({
        rangeRaw: options.range,
        timezone: options.timezone
      });
      query = query.replace('$timeFilter', timeFilter);
    }

    return this._influxRequest(this.httpMode, '/query', {
      q: query,
      epoch: 'ms'
    }, options);
  }

  serializeParams(params) {
    if (!params) {
      return '';
    }

    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(params, (memo, value, key) => {
      if (value === null || value === undefined) {
        return memo;
      }

      memo.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      return memo;
    }, []).join('&');
  }

  testDatasource() {
    if (this.isFlux) {
      // TODO: eventually use the real /health endpoint
      const request = {
        targets: [{
          refId: 'test',
          query: 'buckets()'
        }],
        requestId: `${this.id}-health-${(0,uuid__WEBPACK_IMPORTED_MODULE_15__["default"])()}`,
        dashboardId: 0,
        panelId: 0,
        interval: '1m',
        intervalMs: 60000,
        maxDataPoints: 423,
        range: {
          from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTime)(1000),
          to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTime)(2000)
        }
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(super.query(request)).then(res => {
        if (!res || !res.data || res.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done) {
          console.error('InfluxDB Error', res);
          return {
            status: 'error',
            message: 'Error reading InfluxDB'
          };
        }

        const first = res.data[0];

        if (first && first.length) {
          return {
            status: 'success',
            message: `${first.length} buckets found`
          };
        }

        console.error('InfluxDB Error', res);
        return {
          status: 'error',
          message: 'Error reading buckets'
        };
      }).catch(err => {
        console.error('InfluxDB Error', err);
        return {
          status: 'error',
          message: err.message
        };
      });
    }

    if (this.isMigrationToggleOnAndIsAccessProxy()) {
      const target = {
        refId: 'metricFindQuery',
        query: 'SHOW TAG KEYS',
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(super.query({
        targets: [target]
      })).then(res => {
        var _res$data;

        if (!res || !res.data || res.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done) {
          return {
            status: 'error',
            message: 'Error reading InfluxDB.'
          };
        }

        if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.length) {
          return {
            status: 'success',
            message: 'Data source is working.'
          };
        }

        return {
          status: 'error',
          message: 'Successfully connected to InfluxDB, but no tags found.'
        };
      }).catch(err => {
        return {
          status: 'error',
          message: err.message
        };
      });
    }

    const queryBuilder = new _query_builder__WEBPACK_IMPORTED_MODULE_9__.InfluxQueryBuilder({
      measurement: '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('RETENTION POLICIES');
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.lastValueFrom)(this._seriesQuery(query)).then(res => {
      const error = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(res, 'results[0].error');

      if (error) {
        return {
          status: 'error',
          message: error
        };
      }

      return {
        status: 'success',
        message: 'Data source is working'
      };
    }).catch(err => {
      return {
        status: 'error',
        message: err.message
      };
    });
  }

  _influxRequest(method, url, data, options) {
    const currentUrl = this.urls.shift();
    this.urls.push(currentUrl);
    const params = {};

    if (this.username) {
      params.u = this.username;
      params.p = this.password;
    }

    if (options && options.database) {
      params.db = options.database;
    } else if (this.database) {
      params.db = this.database;
    }

    const {
      q
    } = data;

    if (method === 'POST' && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.has)(data, 'q')) {
      // verb is POST and 'q' param is defined
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(params, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(data, ['q']));
      data = this.serializeParams((0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(data, ['q']));
    } else if (method === 'GET' || method === 'POST') {
      // verb is GET, or POST without 'q' param
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(params, data);
      data = null;
    }

    const req = {
      method: method,
      url: currentUrl + url,
      params: params,
      data: data,
      precision: 'ms',
      inspect: {
        type: 'influxdb'
      },
      paramSerializer: this.serializeParams
    };
    req.headers = req.headers || {};

    if (this.basicAuth || this.withCredentials) {
      req.withCredentials = true;
    }

    if (this.basicAuth) {
      req.headers.Authorization = this.basicAuth;
    }

    if (method === 'POST') {
      req.headers['Content-type'] = 'application/x-www-form-urlencoded';
    }

    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(result => {
      const {
        data
      } = result;

      if (data) {
        data.executedQueryString = q;

        if (data.results) {
          const errors = result.data.results.filter(elem => elem.error);

          if (errors.length > 0) {
            throw {
              message: 'InfluxDB Error: ' + errors[0].error,
              data
            };
          }
        }
      }

      return data;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.catchError)(err => {
      if (err.cancelled) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(err);
      }

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.throwError)(this.handleErrors(err));
    }));
  }

  handleErrors(err) {
    const error = {
      message: err && err.status || err && err.message || 'Unknown error during query transaction. Please check JS console logs.'
    };

    if (Number.isInteger(err.status) && err.status !== 0 || err.status >= 300) {
      if (err.data && err.data.error) {
        error.message = 'InfluxDB Error: ' + err.data.error;
        error.data = err.data; // @ts-ignore

        error.config = err.config;
      } else {
        error.message = 'Network Error: ' + err.statusText + '(' + err.status + ')';
        error.data = err.data; // @ts-ignore

        error.config = err.config;
      }
    }

    return error;
  }

  getTimeFilter(options) {
    const from = this.getInfluxTime(options.rangeRaw.from, false, options.timezone);
    const until = this.getInfluxTime(options.rangeRaw.to, true, options.timezone);
    return 'time >= ' + from + ' and time <= ' + until;
  }

  getInfluxTime(date, roundUp, timezone) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(date)) {
      if (date === 'now') {
        return 'now()';
      }

      const parts = /^now-(\d+)([dhms])$/.exec(date);

      if (parts) {
        const amount = parseInt(parts[1], 10);
        const unit = parts[2];
        return 'now() - ' + amount + unit;
      }

      date = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(date, roundUp, timezone);
    }

    return date.valueOf() + 'ms';
  }

  isMigrationToggleOnAndIsAccessProxy() {
    return app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].featureToggles.influxdbBackendMigration && this.access === 'proxy';
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influxQLMetadataQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllMeasurementsForTags": () => (/* binding */ getAllMeasurementsForTags),
/* harmony export */   "getAllPolicies": () => (/* binding */ getAllPolicies),
/* harmony export */   "getFieldKeysForMeasurement": () => (/* binding */ getFieldKeysForMeasurement),
/* harmony export */   "getTagKeysForMeasurementAndTags": () => (/* binding */ getTagKeysForMeasurementAndTags),
/* harmony export */   "getTagValues": () => (/* binding */ getTagValues)
/* harmony export */ });
/* harmony import */ var _query_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_builder.ts");


const runExploreQuery = (type, withKey, withMeasurementFilter, target, datasource) => {
  const builder = new _query_builder__WEBPACK_IMPORTED_MODULE_0__.InfluxQueryBuilder(target, datasource.database);
  const q = builder.buildExploreQuery(type, withKey, withMeasurementFilter);
  return datasource.metricFindQuery(q);
};

async function getAllPolicies(datasource) {
  const target = {
    tags: [],
    measurement: undefined,
    policy: undefined
  };
  const data = await runExploreQuery('RETENTION POLICIES', undefined, undefined, target, datasource);
  return data.map(item => item.text);
}
async function getAllMeasurementsForTags(measurementFilter, tags, datasource) {
  const target = {
    tags,
    measurement: undefined,
    policy: undefined
  };
  const data = await runExploreQuery('MEASUREMENTS', undefined, measurementFilter, target, datasource);
  return data.map(item => item.text);
}
async function getTagKeysForMeasurementAndTags(measurement, policy, tags, datasource) {
  const target = {
    tags,
    measurement,
    policy
  };
  const data = await runExploreQuery('TAG_KEYS', undefined, undefined, target, datasource);
  return data.map(item => item.text);
}
async function getTagValues(tagKey, measurement, policy, tags, datasource) {
  const target = {
    tags,
    measurement,
    policy
  };
  const data = await runExploreQuery('TAG_VALUES', tagKey, undefined, target, datasource);
  return data.map(item => item.text);
}
async function getFieldKeysForMeasurement(measurement, policy, datasource) {
  const target = {
    tags: [],
    measurement,
    policy
  };
  const data = await runExploreQuery('FIELDS', undefined, undefined, target, datasource);
  return data.map(item => item.text);
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/kbn.ts");
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_part.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class InfluxQueryModel {
  /** @ngInject */
  constructor(target, templateSrv, scopedVars) {
    _defineProperty(this, "target", void 0);

    _defineProperty(this, "selectModels", []);

    _defineProperty(this, "queryBuilder", void 0);

    _defineProperty(this, "groupByParts", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "scopedVars", void 0);

    _defineProperty(this, "refId", void 0);

    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    target.policy = target.policy || 'default';
    target.resultFormat = target.resultFormat || 'time_series';
    target.orderByTime = target.orderByTime || 'ASC';
    target.tags = target.tags || [];
    target.groupBy = target.groupBy || [{
      type: 'time',
      params: ['$__interval']
    }, {
      type: 'fill',
      params: ['null']
    }];
    target.select = target.select || [[{
      type: 'field',
      params: ['value']
    }, {
      type: 'mean',
      params: []
    }]];
    this.updateProjection();
  }

  updateProjection() {
    this.selectModels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, parts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create);
    });
    this.groupByParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.groupBy, _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create);
  }

  updatePersistedParts() {
    this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectModels, selectParts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
        return {
          type: part.def.type,
          params: part.params
        };
      });
    });
  }

  hasGroupByTime() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.groupBy, g => g.type === 'time');
  }

  hasFill() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.groupBy, g => g.type === 'fill');
  }

  addGroupBy(value) {
    let stringParts = value.match(/^(\w+)\((.*)\)$/);

    if (!stringParts || !this.target.groupBy) {
      return;
    }

    const typePart = stringParts[1];
    const arg = stringParts[2];
    const partModel = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create({
      type: typePart,
      params: [arg]
    });
    const partCount = this.target.groupBy.length;

    if (partCount === 0) {
      this.target.groupBy.push(partModel.part);
    } else if (typePart === 'time') {
      this.target.groupBy.splice(0, 0, partModel.part);
    } else if (typePart === 'tag') {
      if (this.target.groupBy[partCount - 1].type === 'fill') {
        this.target.groupBy.splice(partCount - 1, 0, partModel.part);
      } else {
        this.target.groupBy.push(partModel.part);
      }
    } else {
      this.target.groupBy.push(partModel.part);
    }

    this.updateProjection();
  }

  removeGroupByPart(part, index) {
    const categories = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].getCategories();

    if (part.def.type === 'time') {
      // remove fill
      this.target.groupBy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(this.target.groupBy, g => g.type !== 'fill'); // remove aggregations

      this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, s => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(s, part => {
          const partModel = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create(part);

          if (partModel.def.category === categories.Aggregations) {
            return false;
          }

          if (partModel.def.category === categories.Selectors) {
            return false;
          }

          return true;
        });
      });
    }

    this.target.groupBy.splice(index, 1);
    this.updateProjection();
  }

  removeSelect(index) {
    this.target.select.splice(index, 1);
    this.updateProjection();
  }

  removeSelectPart(selectParts, part) {
    // if we remove the field remove the whole statement
    if (part.def.type === 'field') {
      if (this.selectModels.length > 1) {
        const modelsIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.selectModels, selectParts);
        this.selectModels.splice(modelsIndex, 1);
      }
    } else {
      const partIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(selectParts, part);
      selectParts.splice(partIndex, 1);
    }

    this.updatePersistedParts();
  }

  addSelectPart(selectParts, type) {
    const partModel = _query_part__WEBPACK_IMPORTED_MODULE_2__["default"].create({
      type: type
    });
    partModel.def.addStrategy(selectParts, partModel, this);
    this.updatePersistedParts();
  }

  renderTagCondition(tag, index, interpolate) {
    // FIXME: merge this function with query_builder/renderTagCondition
    let str = '';
    let operator = tag.operator;
    let value = tag.value;

    if (index > 0) {
      str = (tag.condition || 'AND') + ' ';
    }

    if (!operator) {
      if (/^\/.*\/$/.test(value)) {
        operator = '=~';
      } else {
        operator = '=';
      }
    } // quote value unless regex


    if (operator !== '=~' && operator !== '!~') {
      if (interpolate) {
        value = this.templateSrv.replace(value, this.scopedVars);
      }

      if (operator !== '>' && operator !== '<') {
        value = "'" + value.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
      }
    } else if (interpolate) {
      value = this.templateSrv.replace(value, this.scopedVars, 'regex');
    }

    return str + '"' + tag.key + '" ' + operator + ' ' + value;
  }

  getMeasurementAndPolicy(interpolate) {
    let policy = this.target.policy;
    let measurement = this.target.measurement || 'measurement';

    if (!measurement.match('^/.*/$')) {
      measurement = '"' + measurement + '"';
    } else if (interpolate) {
      measurement = this.templateSrv.replace(measurement, this.scopedVars, 'regex');
    }

    if (policy !== 'default') {
      policy = '"' + this.target.policy + '".';
    } else {
      policy = '';
    }

    return policy + measurement;
  }

  interpolateQueryStr(value, variable, defaultFormatFn) {
    // if no multi or include all do not regexEscape
    if (!variable.multi && !variable.includeAll) {
      return value;
    }

    if (typeof value === 'string') {
      return app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__["default"].regexEscape(value);
    }

    const escapedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__["default"].regexEscape);
    return '(' + escapedValues.join('|') + ')';
  }

  render(interpolate) {
    const target = this.target;

    if (target.rawQuery) {
      if (interpolate) {
        return this.templateSrv.replace(target.query, this.scopedVars, this.interpolateQueryStr);
      } else {
        return target.query;
      }
    }

    let query = 'SELECT ';
    let i, y;

    for (i = 0; i < this.selectModels.length; i++) {
      const parts = this.selectModels[i];
      let selectText = '';

      for (y = 0; y < parts.length; y++) {
        const part = parts[y];
        selectText = part.render(selectText);
      }

      if (i > 0) {
        query += ', ';
      }

      query += selectText;
    }

    query += ' FROM ' + this.getMeasurementAndPolicy(interpolate) + ' WHERE ';
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(target.tags, (tag, index) => {
      return this.renderTagCondition(tag, index, interpolate);
    });

    if (conditions.length > 0) {
      query += '(' + conditions.join(' ') + ') AND ';
    }

    query += '$timeFilter';
    let groupBySection = '';

    for (i = 0; i < this.groupByParts.length; i++) {
      const part = this.groupByParts[i];

      if (i > 0) {
        // for some reason fill has no separator
        groupBySection += part.def.type === 'fill' ? ' ' : ', ';
      }

      groupBySection += part.render('');
    }

    if (groupBySection.length) {
      query += ' GROUP BY ' + groupBySection;
    }

    if (target.fill) {
      query += ' fill(' + target.fill + ')';
    }

    if (target.orderByTime === 'DESC') {
      query += ' ORDER BY time DESC';
    }

    if (target.limit) {
      query += ' LIMIT ' + target.limit;
    }

    if (target.slimit) {
      query += ' SLIMIT ' + target.slimit;
    }

    if (target.tz) {
      query += " tz('" + target.tz + "')";
    }

    return query;
  }

  renderAdhocFilters(filters) {
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(filters, (tag, index) => {
      return this.renderTagCondition(tag, index, true);
    });
    return conditions.join(' ');
  }

}
InfluxQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_series.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxSeries)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/table_model.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class InfluxSeries {
  constructor(options) {
    _defineProperty(this, "refId", void 0);

    _defineProperty(this, "series", void 0);

    _defineProperty(this, "alias", void 0);

    _defineProperty(this, "annotation", void 0);

    _defineProperty(this, "meta", void 0);

    this.series = options.series;
    this.alias = options.alias;
    this.annotation = options.annotation;
    this.meta = options.meta;
    this.refId = options.refId;
  }

  getTimeSeries() {
    const output = [];
    let i, j;

    if (this.series.length === 0) {
      return output;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, series => {
      const columns = series.columns.length;
      const tags = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(series.tags, (value, key) => {
        return key + ': ' + value;
      });

      for (j = 1; j < columns; j++) {
        let seriesName = series.name;
        const columnName = series.columns[j];

        if (columnName !== 'value') {
          seriesName = seriesName + '.' + columnName;
        }

        if (this.alias) {
          seriesName = this._getSeriesName(series, j);
        } else if (series.tags) {
          seriesName = seriesName + ' {' + tags.join(', ') + '}';
        }

        const datapoints = [];

        if (series.values) {
          for (i = 0; i < series.values.length; i++) {
            datapoints[i] = [series.values[i][j], series.values[i][0]];
          }
        }

        output.push({
          title: seriesName,
          target: seriesName,
          datapoints: datapoints,
          tags: series.tags,
          meta: this.meta,
          refId: this.refId
        });
      }
    });
    return output;
  }

  _getSeriesName(series, index) {
    const regex = /\$(\w+)|\[\[([\s\S]+?)\]\]/g;
    const segments = series.name.split('.');
    return this.alias.replace(regex, (match, g1, g2) => {
      const group = g1 || g2;
      const segIndex = parseInt(group, 10);

      if (group === 'm' || group === 'measurement') {
        return series.name;
      }

      if (group === 'col') {
        return series.columns[index];
      }

      if (!isNaN(segIndex)) {
        var _segments$segIndex;

        return (_segments$segIndex = segments[segIndex]) !== null && _segments$segIndex !== void 0 ? _segments$segIndex : match;
      }

      if (group.indexOf('tag_') !== 0) {
        return match;
      }

      const tag = group.replace('tag_', '');

      if (!series.tags) {
        return match;
      }

      return series.tags[tag];
    });
  }

  getAnnotations() {
    const list = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, series => {
      let titleCol = null;
      let timeCol = null;
      let timeEndCol = null;
      const tagsCol = [];
      let textCol = null;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(series.columns, (column, index) => {
        if (column === 'time') {
          timeCol = index;
          return;
        }

        if (column === 'sequence_number') {
          return;
        }

        if (column === this.annotation.titleColumn) {
          titleCol = index;
          return;
        }

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)((this.annotation.tagsColumn || '').replace(' ', '').split(','), column)) {
          tagsCol.push(index);
          return;
        }

        if (column === this.annotation.textColumn) {
          textCol = index;
          return;
        }

        if (column === this.annotation.timeEndColumn) {
          timeEndCol = index;
          return;
        } // legacy case


        if (!titleCol && textCol !== index) {
          titleCol = index;
        }
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(series.values, value => {
        const data = {
          annotation: this.annotation,
          time: +new Date(value[timeCol]),
          title: value[titleCol],
          timeEnd: value[timeEndCol],
          // Remove empty values, then split in different tags for comma separated values
          tags: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(tagsCol.filter(t => {
            return value[t];
          }).map(t => {
            return value[t].split(',');
          })),
          text: value[textCol]
        };
        list.push(data);
      });
    });
    return list;
  }

  getTable() {
    const table = new app_core_table_model__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let i, j;
    table.refId = this.refId;
    table.meta = this.meta;

    if (this.series.length === 0) {
      return table;
    } // the order is:
    // - first the first item from the value-array (this is often (always?) the timestamp)
    // - then all the tag-values
    // - then the rest of the value-array
    //
    // we have to keep this order both in table.columns and table.rows


    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, (series, seriesIndex) => {
      if (seriesIndex === 0) {
        const firstCol = series.columns[0]; // Check the first column's name, if it is `time`, we
        // mark it as having the type time

        const firstTableCol = firstCol === 'time' ? {
          text: 'Time',
          type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
        } : {
          text: firstCol
        };
        table.columns.push(firstTableCol);
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.keys)(series.tags), key => {
          table.columns.push({
            text: key
          });
        });

        for (j = 1; j < series.columns.length; j++) {
          table.columns.push({
            text: series.columns[j]
          });
        }
      }

      if (series.values) {
        for (i = 0; i < series.values.length; i++) {
          const values = series.values[i];
          const reordered = [values[0]];

          if (series.tags) {
            for (const key in series.tags) {
              if (series.tags.hasOwnProperty(key)) {
                reordered.push(series.tags[key]);
              }
            }
          }

          for (j = 1; j < values.length; j++) {
            reordered.push(values[j]);
          }

          table.rows.push(reordered);
        }
      }
    });
    return table;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx");
/* harmony import */ var _components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/QueryEditor.tsx");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/VariableQueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/datasource.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class InfluxAnnotationsQueryCtrl {}

_defineProperty(InfluxAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_5__["default"]).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__["default"]).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_3__.QueryEditor).setAnnotationQueryCtrl(InfluxAnnotationsQueryCtrl).setVariableQueryEditor(_components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_4__["default"]).setQueryEditorHelp(_components_InfluxStartPage__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/queryUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewGroupByPart": () => (/* binding */ addNewGroupByPart),
/* harmony export */   "addNewSelectPart": () => (/* binding */ addNewSelectPart),
/* harmony export */   "buildRawQuery": () => (/* binding */ buildRawQuery),
/* harmony export */   "changeGroupByPart": () => (/* binding */ changeGroupByPart),
/* harmony export */   "changeSelectPart": () => (/* binding */ changeSelectPart),
/* harmony export */   "normalizeQuery": () => (/* binding */ normalizeQuery),
/* harmony export */   "removeGroupByPart": () => (/* binding */ removeGroupByPart),
/* harmony export */   "removeSelectPart": () => (/* binding */ removeSelectPart)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");


// FIXME: these functions are a beginning of a refactoring of influx_query_model.ts
// into a simpler approach with full typescript types.
// later we should be able to migrate the unit-tests
// that relate to these functions here, and then perhaps even move the implementation
// to this place
function buildRawQuery(query) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  return model.render(false);
}
function normalizeQuery(query) {
  // we return the original query if there is no need to update it
  if (query.policy !== undefined && query.resultFormat !== undefined && query.orderByTime !== undefined && query.tags !== undefined && query.groupBy !== undefined && query.select !== undefined) {
    return query;
  } // FIXME: we should move the whole normalizeQuery logic here,
  // and then have influxQueryModel call this function,
  // to concentrate the whole logic here


  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  return new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy).target;
}
function addNewSelectPart(query, type, index) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.addSelectPart(model.selectModels[index], type);
  return model.target;
}
function removeSelectPart(query, partIndex, index) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  const selectModel = model.selectModels[index];
  model.removeSelectPart(selectModel, selectModel[partIndex]);
  return model.target;
}
function changeSelectPart(query, listIndex, partIndex, newParams) {
  var _query$select;

  // we need to make shallow copy of `query.select` down to `query.select[listIndex][partIndex]`
  const newSel = [...((_query$select = query.select) !== null && _query$select !== void 0 ? _query$select : [])];
  newSel[listIndex] = [...newSel[listIndex]];
  newSel[listIndex][partIndex] = Object.assign({}, newSel[listIndex][partIndex], {
    params: newParams
  });
  return Object.assign({}, query, {
    select: newSel
  });
}
function addNewGroupByPart(query, type) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.addGroupBy(type);
  return model.target;
}
function removeGroupByPart(query, partIndex) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query); // the query-model mutates the query

  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.removeGroupByPart(model.groupByParts[partIndex], partIndex);
  return model.target;
}
function changeGroupByPart(query, partIndex, newParams) {
  var _query$groupBy;

  // we need to make shallow copy of `query.groupBy` down to `query.groupBy[partIndex]`
  const newGroupBy = [...((_query$groupBy = query.groupBy) !== null && _query$groupBy !== void 0 ? _query$groupBy : [])];
  newGroupBy[partIndex] = Object.assign({}, newGroupBy[partIndex], {
    params: newParams
  });
  return Object.assign({}, query, {
    groupBy: newGroupBy
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_builder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfluxQueryBuilder": () => (/* binding */ InfluxQueryBuilder)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/kbn.ts");



function renderTagCondition(tag, index) {
  // FIXME: merge this function with influx_query_model/renderTagCondition
  let str = '';
  let operator = tag.operator;
  let value = tag.value;

  if (index > 0) {
    str = (tag.condition || 'AND') + ' ';
  }

  if (!operator) {
    if (/^\/.*\/$/.test(tag.value)) {
      operator = '=~';
    } else {
      operator = '=';
    }
  } // quote value unless regex or number, or if empty-string


  if (value === '' || operator !== '=~' && operator !== '!~' && isNaN(+value)) {
    value = "'" + value.replace(/\\/g, '\\\\').replace(/\'/g, "\\'") + "'";
  }

  return str + '"' + tag.key + '" ' + operator + ' ' + value;
}

class InfluxQueryBuilder {
  constructor(target, database) {
    this.target = target;
    this.database = database;
    this.target = target;
    this.database = database;
  }

  buildExploreQuery(type, withKey, withMeasurementFilter) {
    let query = '';
    let measurement;
    let policy;

    if (type === 'TAG_KEYS') {
      query = 'SHOW TAG KEYS';
      measurement = this.target.measurement;
      policy = this.target.policy;
    } else if (type === 'TAG_VALUES') {
      query = 'SHOW TAG VALUES';
      measurement = this.target.measurement;
      policy = this.target.policy;
    } else if (type === 'MEASUREMENTS') {
      query = 'SHOW MEASUREMENTS';

      if (withMeasurementFilter) {
        // we do a case-insensitive regex-based lookup
        query += ' WITH MEASUREMENT =~ /(?i)' + app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_1__["default"].regexEscape(withMeasurementFilter) + '/';
      }
    } else if (type === 'FIELDS') {
      measurement = this.target.measurement;
      policy = this.target.policy;

      if (!measurement.match('^/.*/')) {
        measurement = '"' + measurement + '"';

        if (policy && policy !== 'default') {
          policy = '"' + policy + '"';
          measurement = policy + '.' + measurement;
        }
      }

      return 'SHOW FIELD KEYS FROM ' + measurement;
    } else if (type === 'RETENTION POLICIES') {
      query = 'SHOW RETENTION POLICIES on "' + this.database + '"';
      return query;
    }

    if (measurement) {
      if (!measurement.match('^/.*/') && !measurement.match(/^merge\(.*\)/)) {
        measurement = '"' + measurement + '"';
      }

      if (policy && policy !== 'default') {
        policy = '"' + policy + '"';
        measurement = policy + '.' + measurement;
      }

      query += ' FROM ' + measurement;
    }

    if (withKey) {
      query += ' WITH KEY = "' + withKey + '"';
    }

    if (this.target.tags && this.target.tags.length > 0) {
      const whereConditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(this.target.tags, (memo, tag) => {
        // do not add a condition for the key we want to explore for
        if (tag.key === withKey) {
          return memo;
        } // value operators not supported in these types of queries


        if (tag.operator === '>' || tag.operator === '<') {
          return memo;
        }

        memo.push(renderTagCondition(tag, memo.length));
        return memo;
      }, []);

      if (whereConditions.length > 0) {
        query += ' WHERE ' + whereConditions.join(' ');
      }
    }

    if (type === 'MEASUREMENTS') {
      query += ' LIMIT 100'; //Solve issue #2524 by limiting the number of measurements returned
      //LIMIT must be after WITH MEASUREMENT and WHERE clauses
      //This also could be used for TAG KEYS and TAG VALUES, if desired
    }

    return query;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/state/query_part.ts");


const index = [];
const categories = {
  Aggregations: [],
  Selectors: [],
  Transformations: [],
  Predictors: [],
  Math: [],
  Aliasing: [],
  Fields: []
};

function createPart(part) {
  const def = index[part.type];

  if (!def) {
    throw {
      message: 'Could not find query part ' + part.type
    };
  }

  return new app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.QueryPart(part, def);
}

function register(options) {
  index[options.type] = new app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.QueryPartDef(options);
  options.category.push(index[options.type]);
}

const groupByTimeFunctions = [];

function aliasRenderer(part, innerExpr) {
  return innerExpr + ' AS ' + '"' + part.params[0] + '"';
}

function fieldRenderer(part, innerExpr) {
  if (part.params[0] === '*') {
    return '*';
  }

  return '"' + part.params[0] + '"';
}

function replaceAggregationAddStrategy(selectParts, partModel) {
  // look for existing aggregation
  for (let i = 0; i < selectParts.length; i++) {
    const part = selectParts[i];

    if (part.def.category === categories.Aggregations) {
      if (part.def.type === partModel.def.type) {
        return;
      } // count distinct is allowed


      if (part.def.type === 'count' && partModel.def.type === 'distinct') {
        break;
      } // remove next aggregation if distinct was replaced


      if (part.def.type === 'distinct') {
        const morePartsAvailable = selectParts.length >= i + 2;

        if (partModel.def.type !== 'count' && morePartsAvailable) {
          const nextPart = selectParts[i + 1];

          if (nextPart.def.category === categories.Aggregations) {
            selectParts.splice(i + 1, 1);
          }
        } else if (partModel.def.type === 'count') {
          if (!morePartsAvailable || selectParts[i + 1].def.type !== 'count') {
            selectParts.splice(i + 1, 0, partModel);
          }

          return;
        }
      }

      selectParts[i] = partModel;
      return;
    }

    if (part.def.category === categories.Selectors) {
      selectParts[i] = partModel;
      return;
    }
  }

  selectParts.splice(1, 0, partModel);
}

function addTransformationStrategy(selectParts, partModel) {
  let i; // look for index to add transformation

  for (i = 0; i < selectParts.length; i++) {
    const part = selectParts[i];

    if (part.def.category === categories.Math || part.def.category === categories.Aliasing) {
      break;
    }
  }

  selectParts.splice(i, 0, partModel);
}

function addMathStrategy(selectParts, partModel) {
  const partCount = selectParts.length;

  if (partCount > 0) {
    // if last is math, replace it
    if (selectParts[partCount - 1].def.type === 'math') {
      selectParts[partCount - 1] = partModel;
      return;
    } // if next to last is math, replace it


    if (partCount > 1 && selectParts[partCount - 2].def.type === 'math') {
      selectParts[partCount - 2] = partModel;
      return;
    } else if (selectParts[partCount - 1].def.type === 'alias') {
      // if last is alias add it before
      selectParts.splice(partCount - 1, 0, partModel);
      return;
    }
  }

  selectParts.push(partModel);
}

function addAliasStrategy(selectParts, partModel) {
  const partCount = selectParts.length;

  if (partCount > 0) {
    // if last is alias, replace it
    if (selectParts[partCount - 1].def.type === 'alias') {
      selectParts[partCount - 1] = partModel;
      return;
    }
  }

  selectParts.push(partModel);
}

function addFieldStrategy(selectParts, partModel, query) {
  // copy all parts
  const parts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
    return createPart({
      type: part.def.type,
      params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(part.params)
    });
  });
  query.selectModels.push(parts);
}

register({
  type: 'field',
  addStrategy: addFieldStrategy,
  category: categories.Fields,
  params: [{
    type: 'field',
    dynamicLookup: true
  }],
  defaultParams: ['value'],
  renderer: fieldRenderer
}); // Aggregations

register({
  type: 'count',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'distinct',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'integral',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'mean',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'median',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'mode',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'sum',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
}); // transformations

register({
  type: 'derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'spread',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'non_negative_derivative',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'non_negative_difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'moving_average',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'window',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }],
  defaultParams: [10],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'cumulative_sum',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'stddev',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'time',
  category: groupByTimeFunctions,
  params: [{
    name: 'interval',
    type: 'time',
    options: ['$__interval', '1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['$__interval'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'fill',
  category: groupByTimeFunctions,
  params: [{
    name: 'fill',
    type: 'string',
    options: ['none', 'null', '0', 'previous', 'linear']
  }],
  defaultParams: ['null'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'elapsed',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{
    name: 'duration',
    type: 'interval',
    options: ['1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }],
  defaultParams: ['10s'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
}); // predictions

register({
  type: 'holt_winters',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'holt_winters_with_fit',
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [{
    name: 'number',
    type: 'int',
    options: [5, 10, 20, 30, 40]
  }, {
    name: 'season',
    type: 'int',
    options: [0, 1, 2, 5, 10]
  }],
  defaultParams: [10, 2],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
}); // Selectors

register({
  type: 'bottom',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'first',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'last',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'max',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'min',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'percentile',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'nth',
    type: 'int'
  }],
  defaultParams: [95],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'top',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [3],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: 'tag',
  category: groupByTimeFunctions,
  params: [{
    name: 'tag',
    type: 'string',
    dynamicLookup: true
  }],
  defaultParams: ['tag'],
  renderer: fieldRenderer
});
register({
  type: 'math',
  addStrategy: addMathStrategy,
  category: categories.Math,
  params: [{
    name: 'expr',
    type: 'string'
  }],
  defaultParams: [' / 100'],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.suffixRenderer
});
register({
  type: 'alias',
  addStrategy: addAliasStrategy,
  category: categories.Aliasing,
  params: [{
    name: 'name',
    type: 'string',
    quote: 'double'
  }],
  defaultParams: ['alias'],
  renderMode: 'suffix',
  renderer: aliasRenderer
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: createPart,
  getCategories: () => {
    return categories;
  },
  replaceAggregationAdd: replaceAggregationAddStrategy
});

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/response_parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponseParser),
/* harmony export */   "getSelectedParams": () => (/* binding */ getSelectedParams)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/table_model.ts");




class ResponseParser {
  parse(query, results) {
    if (!(results !== null && results !== void 0 && results.results) || results.results.length === 0) {
      return [];
    }

    const influxResults = results.results[0];

    if (!influxResults.series) {
      return [];
    }

    const normalizedQuery = query.toLowerCase();
    const isValueFirst = normalizedQuery.indexOf('show field keys') >= 0 || normalizedQuery.indexOf('show retention policies') >= 0;
    const res = new Set();
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(influxResults.series, serie => {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(serie.values, value => {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
          // In general, there are 2 possible shapes for the returned value.
          // The first one is a two-element array,
          // where the first element is somewhat a metadata value:
          // the tag name for SHOW TAG VALUES queries,
          // the time field for SELECT queries, etc.
          // The second shape is an one-element array,
          // that is containing an immediate value.
          // For example, SHOW FIELD KEYS queries return such shape.
          // Note, pre-0.11 versions return
          // the second shape for SHOW TAG VALUES queries
          // (while the newer versions—first).
          if (isValueFirst) {
            addUnique(res, value[0]);
          } else if (value[1] !== undefined) {
            addUnique(res, value[1]);
          } else {
            addUnique(res, value[0]);
          }
        } else {
          addUnique(res, value);
        }
      });
    }); // NOTE: it is important to keep the order of items in the parsed output
    // the same as it was in the influxdb-response.
    // we use a `Set` to collect the unique-results, and `Set` iteration
    // order is insertion-order, so this should be ok.

    return Array.from(res).map(v => ({
      text: v
    }));
  }

  getTable(dfs, target, meta) {
    let table = new app_core_table_model__WEBPACK_IMPORTED_MODULE_3__["default"]();

    if (dfs.length > 0) {
      var _dfs$0$meta;

      table.meta = Object.assign({}, meta, {
        executedQueryString: (_dfs$0$meta = dfs[0].meta) === null || _dfs$0$meta === void 0 ? void 0 : _dfs$0$meta.executedQueryString
      });
      table.refId = target.refId;
      table = getTableCols(dfs, table, target); // if group by tag(s) added

      if (dfs[0].fields[1] && dfs[0].fields[1].labels) {
        let dfsByLabels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(dfs, df => df.fields[1].labels ? Object.values(df.fields[1].labels) : null);
        const labels = Object.keys(dfsByLabels);
        dfsByLabels = Object.values(dfsByLabels);

        for (let i = 0; i < dfsByLabels.length; i++) {
          table = getTableRows(dfsByLabels[i], table, [...labels[i].split(',')]);
        }
      } else {
        table = getTableRows(dfs, table, []);
      }
    }

    return table;
  }

  async transformAnnotationResponse(options, data, target) {
    const rsp = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.toDataQueryResponse)(data, [target]);

    if (rsp) {
      const table = this.getTable(rsp.data, target, {});
      const list = [];
      let titleCol = null;
      let timeCol = null;
      let timeEndCol = null;
      const tagsCol = [];
      let textCol = null;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(table.columns, (column, index) => {
        if (column.text.toLowerCase() === 'time') {
          timeCol = index;
          return;
        }

        if (column.text === options.annotation.titleColumn) {
          titleCol = index;
          return;
        }

        if (colContainsTag(column.text, options.annotation.tagsColumn)) {
          tagsCol.push(index);
          return;
        }

        if (column.text.includes(options.annotation.textColumn)) {
          textCol = index;
          return;
        }

        if (column.text === options.annotation.timeEndColumn) {
          timeEndCol = index;
          return;
        } // legacy case


        if (!titleCol && textCol !== index) {
          titleCol = index;
        }
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(table.rows, value => {
        const data = {
          annotation: options.annotation,
          time: +new Date(value[timeCol]),
          title: value[titleCol],
          timeEnd: value[timeEndCol],
          // Remove empty values, then split in different tags for comma separated values
          tags: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(tagsCol.filter(t => {
            return value[t];
          }).map(t => {
            return value[t].split(',');
          })),
          text: value[textCol]
        };
        list.push(data);
      });
      return list;
    }

    return [];
  }

}

function colContainsTag(colText, tagsColumn) {
  const tags = (tagsColumn || '').replace(' ', '').split(',');

  for (var tag of tags) {
    if (colText.includes(tag)) {
      return true;
    }
  }

  return false;
}

function getTableCols(dfs, table, target) {
  const selectedParams = getSelectedParams(target);
  dfs[0].fields.forEach(field => {
    // Time col
    if (field.name === 'time') {
      table.columns.push({
        text: 'Time',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
      });
    } // Group by (label) column(s)
    else if (field.name === 'value') {
      if (field.labels) {
        Object.keys(field.labels).forEach(key => {
          table.columns.push({
            text: key
          });
        });
      }
    }
  }); // Get cols for annotationQuery

  if (dfs[0].refId === 'metricFindQuery') {
    dfs.forEach(field => {
      if (field.name) {
        table.columns.push({
          text: field.name
        });
      }
    });
  } // Select (metric) column(s)


  for (let i = 0; i < selectedParams.length; i++) {
    table.columns.push({
      text: selectedParams[i]
    });
  }

  return table;
}

function getTableRows(dfs, table, labels) {
  const values = dfs[0].fields[0].values.toArray();

  for (let i = 0; i < values.length; i++) {
    const time = values[i];
    const metrics = dfs.map(df => {
      return df.fields[1] ? df.fields[1].values.toArray()[i] : null;
    });

    if (metrics.indexOf(null) < 0) {
      table.rows.push([time, ...labels, ...metrics]);
    }
  }

  return table;
}

function getSelectedParams(target) {
  var _target$select;

  let allParams = [];
  (_target$select = target.select) === null || _target$select === void 0 ? void 0 : _target$select.forEach(select => {
    const selector = select.filter(x => x.type !== 'field');

    if (selector.length > 0) {
      allParams.push(selector[0].type);
    } else {
      if (select[0] && select[0].params && select[0].params[0]) {
        allParams.push(select[0].params[0].toString());
      }
    }
  });
  let uniqueParams = [];
  allParams.forEach(param => {
    uniqueParams.push(incrementName(param, param, uniqueParams, 0));
  });
  return uniqueParams;
}

function incrementName(name, nameIncremenet, params, index) {
  if (params.indexOf(nameIncremenet) > -1) {
    index++;
    return incrementName(name, name + '_' + index, params, index);
  }

  return nameIncremenet;
}

function addUnique(s, value) {
  s.add(value.toString());
}

/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfluxVersion": () => (/* binding */ InfluxVersion)
/* harmony export */ });
let InfluxVersion;

(function (InfluxVersion) {
  InfluxVersion["InfluxQL"] = "InfluxQL";
  InfluxVersion["Flux"] = "Flux";
})(InfluxVersion || (InfluxVersion = {}));

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aU0sSUFBQUEsWUFBWSxDQUFDdGxCLElBQWIsQ0FBa0J1bEIsYUFBYSxDQUFDbE0sS0FBRCxFQUFRQSxLQUFSLEVBQWVpTSxZQUFmLEVBQTZCLENBQTdCLENBQS9CO0FBQ0QsR0FGRDtBQUlBLFNBQU9BLFlBQVA7QUFDRDs7QUFFRCxTQUFTQyxhQUFULENBQXVCemxCLElBQXZCLEVBQXFDMGxCLGNBQXJDLEVBQTZEbmEsTUFBN0QsRUFBK0V0RCxLQUEvRSxFQUFzRztBQUNwRyxNQUFJc0QsTUFBTSxDQUFDcVIsT0FBUCxDQUFlOEksY0FBZixJQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDemQsSUFBQUEsS0FBSztBQUNMLFdBQU93ZCxhQUFhLENBQUN6bEIsSUFBRCxFQUFPQSxJQUFJLEdBQUcsR0FBUCxHQUFhaUksS0FBcEIsRUFBMkJzRCxNQUEzQixFQUFtQ3RELEtBQW5DLENBQXBCO0FBQ0Q7O0FBQ0QsU0FBT3lkLGNBQVA7QUFDRDs7QUFFRCxTQUFTbEIsU0FBVCxDQUFtQjVHLENBQW5CLEVBQW1DOWhCLEtBQW5DLEVBQTJEO0FBQ3pEOGhCLEVBQUFBLENBQUMsQ0FBQytILEdBQUYsQ0FBTTdwQixLQUFLLENBQUNxQixRQUFOLEVBQU47QUFDRDs7Ozs7Ozs7Ozs7QUN2UE0sSUFBS3hCLGFBQVo7O1dBQVlBO0FBQUFBLEVBQUFBO0FBQUFBLEVBQUFBO0dBQUFBLGtCQUFBQTs7Ozs7Ozs7Ozs7O0FDRjhCO0FBQzNCO0FBQ2YsY0FBYyw2Q0FBTTtBQUNwQixJQUFJLGdEQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL0NvbmZpZ0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvRmx1eFF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9JbmZsdXhDaGVhdFNoZWV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9JbmZsdXhTdGFydFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9RdWVyeUVkaXRvck1vZGVTd2l0Y2hlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvUmF3SW5mbHV4UUxFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1ZhcmlhYmxlUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL0FkZEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9Gb3JtYXRBc1NlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL0Zyb21TZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9JbnB1dFNlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL09yZGVyQnlUaW1lU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvUGFydExpc3RTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9TZWcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL1Zpc3VhbEluZmx1eFFMRWRpdG9yL1RhZ3NTZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9wYXJ0TGlzdFV0aWxzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy9WaXN1YWxJbmZsdXhRTEVkaXRvci9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvdGFnVXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvdG9TZWxlY3RhYmxlVmFsdWUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2NvbXBvbmVudHMvVmlzdWFsSW5mbHV4UUxFZGl0b3IvdW53cmFwLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvY29tcG9uZW50cy91c2VTaGFkb3dlZFN0YXRlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9pbmZsdXhRTE1ldGFkYXRhUXVlcnkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL2luZmx1eF9xdWVyeV9tb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvaW5mbHV4X3Nlcmllcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvaW5mbHV4ZGIvbW9kdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9xdWVyeVV0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9xdWVyeV9idWlsZGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9xdWVyeV9wYXJ0LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9yZXNwb25zZV9wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2luZmx1eGRiL3R5cGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC0wMDMyNmU3MGJhLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy4zLjItYTAzMmNiZWIwMS03Mzc5NDYwZjUxLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VQcmV2aW91cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bmlxdWVJZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyxcbiAgU2VsZWN0YWJsZVZhbHVlLFxuICBvblVwZGF0ZURhdGFzb3VyY2VPcHRpb24sXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5SZXNldE9wdGlvbixcbiAgb25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb24sXG4gIG9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0LFxuICBvblVwZGF0ZURhdGFzb3VyY2VTZWN1cmVKc29uRGF0YU9wdGlvbixcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBEYXRhU291cmNlSHR0cFNldHRpbmdzLCBJbmZvQm94LCBJbmxpbmVGaWVsZCwgSW5saW5lRm9ybUxhYmVsLCBMZWdhY3lGb3JtcywgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5jb25zdCB7IElucHV0LCBTZWNyZXRGb3JtRmllbGQgfSA9IExlZ2FjeUZvcm1zO1xuaW1wb3J0IHsgSW5mbHV4T3B0aW9ucywgSW5mbHV4U2VjdXJlSnNvbkRhdGEsIEluZmx1eFZlcnNpb24gfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGh0dHBNb2RlcyA9IFtcbiAgeyBsYWJlbDogJ0dFVCcsIHZhbHVlOiAnR0VUJyB9LFxuICB7IGxhYmVsOiAnUE9TVCcsIHZhbHVlOiAnUE9TVCcgfSxcbl0gYXMgU2VsZWN0YWJsZVZhbHVlW107XG5cbmNvbnN0IHZlcnNpb25zID0gW1xuICB7XG4gICAgbGFiZWw6ICdJbmZsdXhRTCcsXG4gICAgdmFsdWU6IEluZmx1eFZlcnNpb24uSW5mbHV4UUwsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgSW5mbHV4REIgU1FMLWxpa2UgcXVlcnkgbGFuZ3VhZ2UuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnRmx1eCcsXG4gICAgdmFsdWU6IEluZmx1eFZlcnNpb24uRmx1eCxcbiAgICBkZXNjcmlwdGlvbjogJ0FkdmFuY2VkIGRhdGEgc2NyaXB0aW5nIGFuZCBxdWVyeSBsYW5ndWFnZS4gIFN1cHBvcnRlZCBpbiBJbmZsdXhEQiAyLnggYW5kIDEuOCsnLFxuICB9LFxuXSBhcyBBcnJheTxTZWxlY3RhYmxlVmFsdWU8SW5mbHV4VmVyc2lvbj4+O1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8SW5mbHV4T3B0aW9ucz47XG50eXBlIFN0YXRlID0ge1xuICBtYXhTZXJpZXM6IHN0cmluZyB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjbGFzcyBDb25maWdFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzdGF0ZSA9IHtcbiAgICBtYXhTZXJpZXM6ICcnLFxuICB9O1xuXG4gIGh0bWxQcmVmaXg6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZS5tYXhTZXJpZXMgPSBwcm9wcy5vcHRpb25zLmpzb25EYXRhLm1heFNlcmllcz8udG9TdHJpbmcoKSB8fCAnJztcbiAgICB0aGlzLmh0bWxQcmVmaXggPSB1bmlxdWVJZCgnaW5mbHV4ZGItY29uZmlnJyk7XG4gIH1cblxuICAvLyAxeFxuICBvblJlc2V0UGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpblJlc2V0T3B0aW9uKHRoaXMucHJvcHMsICdwYXNzd29yZCcpO1xuICB9O1xuXG4gIC8vIDJ4XG4gIG9uUmVzZXRUb2tlbiA9ICgpID0+IHtcbiAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luUmVzZXRPcHRpb24odGhpcy5wcm9wcywgJ3Rva2VuJyk7XG4gIH07XG5cbiAgb25WZXJzaW9uQ2hhbmdlZCA9IChzZWxlY3RlZDogU2VsZWN0YWJsZVZhbHVlPEluZmx1eFZlcnNpb24+KSA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjb3B5OiBhbnkgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAganNvbkRhdGE6IHtcbiAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YSxcbiAgICAgICAgdmVyc2lvbjogc2VsZWN0ZWQudmFsdWUsXG4gICAgICB9LFxuICAgIH07XG4gICAgaWYgKHNlbGVjdGVkLnZhbHVlID09PSBJbmZsdXhWZXJzaW9uLkZsdXgpIHtcbiAgICAgIGNvcHkuYWNjZXNzID0gJ3Byb3h5JztcbiAgICAgIGNvcHkuYmFzaWNBdXRoID0gdHJ1ZTtcbiAgICAgIGNvcHkuanNvbkRhdGEuaHR0cE1vZGUgPSAnUE9TVCc7XG5cbiAgICAgIC8vIFJlbW92ZSBvbGQgMXggY29uZmlnc1xuICAgICAgZGVsZXRlIGNvcHkudXNlcjtcbiAgICAgIGRlbGV0ZSBjb3B5LmRhdGFiYXNlO1xuICAgIH1cblxuICAgIG9uT3B0aW9uc0NoYW5nZShjb3B5KTtcbiAgfTtcblxuICByZW5kZXJJbmZsdXgyeCgpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWN1cmVKc29uRmllbGRzIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHNlY3VyZUpzb25EYXRhID0gKG9wdGlvbnMuc2VjdXJlSnNvbkRhdGEgfHwge30pIGFzIEluZmx1eFNlY3VyZUpzb25EYXRhO1xuICAgIGNvbnN0IHsgaHRtbFByZWZpeCB9ID0gdGhpcztcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIGh0bWxGb3I9e2Ake2h0bWxQcmVmaXh9LW9yZ2B9IGNsYXNzTmFtZT1cIndpZHRoLTEwXCI+XG4gICAgICAgICAgICAgIE9yZ2FuaXphdGlvblxuICAgICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTEwXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgJHtodG1sUHJlZml4fS1vcmdgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTIwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS5vcmdhbml6YXRpb24gfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uKHRoaXMucHJvcHMsICdvcmdhbml6YXRpb24nKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPFNlY3JldEZvcm1GaWVsZFxuICAgICAgICAgICAgICBpc0NvbmZpZ3VyZWQ9eyhzZWN1cmVKc29uRmllbGRzICYmIHNlY3VyZUpzb25GaWVsZHMudG9rZW4pIGFzIGJvb2xlYW59XG4gICAgICAgICAgICAgIHZhbHVlPXtzZWN1cmVKc29uRGF0YS50b2tlbiB8fCAnJ31cbiAgICAgICAgICAgICAgbGFiZWw9XCJUb2tlblwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2tlblwiXG4gICAgICAgICAgICAgIGxhYmVsV2lkdGg9ezEwfVxuICAgICAgICAgICAgICBpbnB1dFdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgb25SZXNldD17dGhpcy5vblJlc2V0VG9rZW59XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVwZGF0ZURhdGFzb3VyY2VTZWN1cmVKc29uRGF0YU9wdGlvbih0aGlzLnByb3BzLCAndG9rZW4nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8SW5saW5lRm9ybUxhYmVsIGNsYXNzTmFtZT1cIndpZHRoLTEwXCI+RGVmYXVsdCBCdWNrZXQ8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMjBcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGVmYXVsdCBidWNrZXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLmRlZmF1bHRCdWNrZXQgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uKHRoaXMucHJvcHMsICdkZWZhdWx0QnVja2V0Jyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiXG4gICAgICAgICAgICAgIHRvb2x0aXA9XCJBIGxvd2VyIGxpbWl0IGZvciB0aGUgYXV0byBncm91cCBieSB0aW1lIGludGVydmFsLiBSZWNvbW1lbmRlZCB0byBiZSBzZXQgdG8gd3JpdGUgZnJlcXVlbmN5LFxuXHRcdFx0XHRmb3IgZXhhbXBsZSAxbSBpZiB5b3VyIGRhdGEgaXMgd3JpdHRlbiBldmVyeSBtaW51dGUuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTWluIHRpbWUgaW50ZXJ2YWxcbiAgICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMHNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRpbWVJbnRlcnZhbCB8fCAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ3RpbWVJbnRlcnZhbCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckluZmx1eDF4KCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlY3VyZUpzb25GaWVsZHMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qgc2VjdXJlSnNvbkRhdGEgPSAob3B0aW9ucy5zZWN1cmVKc29uRGF0YSB8fCB7fSkgYXMgSW5mbHV4U2VjdXJlSnNvbkRhdGE7XG4gICAgY29uc3QgeyBodG1sUHJlZml4IH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxJbmZvQm94PlxuICAgICAgICAgIDxoNT5EYXRhYmFzZSBBY2Nlc3M8L2g1PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgU2V0dGluZyB0aGUgZGF0YWJhc2UgZm9yIHRoaXMgZGF0YXNvdXJjZSBkb2VzIG5vdCBkZW55IGFjY2VzcyB0byBvdGhlciBkYXRhYmFzZXMuIFRoZSBJbmZsdXhEQiBxdWVyeSBzeW50YXhcbiAgICAgICAgICAgIGFsbG93cyBzd2l0Y2hpbmcgdGhlIGRhdGFiYXNlIGluIHRoZSBxdWVyeS4gRm9yIGV4YW1wbGU6XG4gICAgICAgICAgICA8Y29kZT5TSE9XIE1FQVNVUkVNRU5UUyBPTiBfaW50ZXJuYWw8L2NvZGU+IG9yXG4gICAgICAgICAgICA8Y29kZT5TRUxFQ1QgKiBGUk9NICZxdW90O19pbnRlcm5hbCZxdW90Oy4uJnF1b3Q7ZGF0YWJhc2UmcXVvdDsgTElNSVQgMTA8L2NvZGU+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgVG8gc3VwcG9ydCBkYXRhIGlzb2xhdGlvbiBhbmQgc2VjdXJpdHksIG1ha2Ugc3VyZSBhcHByb3ByaWF0ZSBwZXJtaXNzaW9ucyBhcmUgY29uZmlndXJlZCBpbiBJbmZsdXhEQi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvSW5mb0JveD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbCBodG1sRm9yPXtgJHtodG1sUHJlZml4fS1kYmB9IGNsYXNzTmFtZT1cIndpZHRoLTEwXCI+XG4gICAgICAgICAgICAgIERhdGFiYXNlXG4gICAgICAgICAgICA8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMjBcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9e2Ake2h0bWxQcmVmaXh9LWRiYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0yMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuZGF0YWJhc2UgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZU9wdGlvbih0aGlzLnByb3BzLCAnZGF0YWJhc2UnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbCBodG1sRm9yPXtgJHtodG1sUHJlZml4fS11c2VyYH0gY2xhc3NOYW1lPVwid2lkdGgtMTBcIj5cbiAgICAgICAgICAgICAgVXNlclxuICAgICAgICAgICAgPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoLTEwXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgJHtodG1sUHJlZml4fS11c2VyYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0yMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMudXNlciB8fCAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlT3B0aW9uKHRoaXMucHJvcHMsICd1c2VyJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgIDxTZWNyZXRGb3JtRmllbGRcbiAgICAgICAgICAgICAgaXNDb25maWd1cmVkPXsoc2VjdXJlSnNvbkZpZWxkcyAmJiBzZWN1cmVKc29uRmllbGRzLnBhc3N3b3JkKSBhcyBib29sZWFufVxuICAgICAgICAgICAgICB2YWx1ZT17c2VjdXJlSnNvbkRhdGEucGFzc3dvcmQgfHwgJyd9XG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbFdpZHRoPXsxMH1cbiAgICAgICAgICAgICAgaW5wdXRXaWR0aD17MjB9XG4gICAgICAgICAgICAgIG9uUmVzZXQ9e3RoaXMub25SZXNldFBhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlU2VjdXJlSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPXtgJHtodG1sUHJlZml4fS1odHRwLW1ldGhvZGB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTEwXCJcbiAgICAgICAgICAgICAgdG9vbHRpcD1cIllvdSBjYW4gdXNlIGVpdGhlciBHRVQgb3IgUE9TVCBIVFRQIG1ldGhvZCB0byBxdWVyeSB5b3VyIEluZmx1eERCIGRhdGFiYXNlLiBUaGUgUE9TVFxuICAgICAgICAgIG1ldGhvZCBhbGxvd3MgeW91IHRvIHBlcmZvcm0gaGVhdnkgcmVxdWVzdHMgKHdpdGggYSBsb3RzIG9mIFdIRVJFIGNsYXVzZSkgd2hpbGUgdGhlIEdFVCBtZXRob2RcbiAgICAgICAgICB3aWxsIHJlc3RyaWN0IHlvdSBhbmQgcmV0dXJuIGFuIGVycm9yIGlmIHRoZSBxdWVyeSBpcyB0b28gbGFyZ2UuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSFRUUCBNZXRob2RcbiAgICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICBpbnB1dElkPXtgJHtodG1sUHJlZml4fS1odHRwLW1ldGhvZGB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTEwXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2h0dHBNb2Rlcy5maW5kKChodHRwTW9kZSkgPT4gaHR0cE1vZGUudmFsdWUgPT09IG9wdGlvbnMuanNvbkRhdGEuaHR0cE1vZGUpfVxuICAgICAgICAgICAgICBvcHRpb25zPXtodHRwTW9kZXN9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17b3B0aW9ucy5qc29uRGF0YS5odHRwTW9kZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0KHRoaXMucHJvcHMsICdodHRwTW9kZScpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiXG4gICAgICAgICAgICAgIHRvb2x0aXA9XCJBIGxvd2VyIGxpbWl0IGZvciB0aGUgYXV0byBncm91cCBieSB0aW1lIGludGVydmFsLiBSZWNvbW1lbmRlZCB0byBiZSBzZXQgdG8gd3JpdGUgZnJlcXVlbmN5LFxuXHRcdFx0XHRmb3IgZXhhbXBsZSAxbSBpZiB5b3VyIGRhdGEgaXMgd3JpdHRlbiBldmVyeSBtaW51dGUuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTWluIHRpbWUgaW50ZXJ2YWxcbiAgICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aC0xMFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMHNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRpbWVJbnRlcnZhbCB8fCAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25VcGRhdGVEYXRhc291cmNlSnNvbkRhdGFPcHRpb24odGhpcy5wcm9wcywgJ3RpbWVJbnRlcnZhbCcpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+UXVlcnkgTGFuZ3VhZ2U8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0taW5saW5lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJRdWVyeSBsYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGgtMzBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnZlcnNpb24gPT09IEluZmx1eFZlcnNpb24uRmx1eCA/IHZlcnNpb25zWzFdIDogdmVyc2lvbnNbMF19XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dmVyc2lvbnN9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt2ZXJzaW9uc1swXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblZlcnNpb25DaGFuZ2VkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtvcHRpb25zLmpzb25EYXRhLnZlcnNpb24gPT09IEluZmx1eFZlcnNpb24uRmx1eCAmJiAoXG4gICAgICAgICAgPEluZm9Cb3g+XG4gICAgICAgICAgICA8aDU+U3VwcG9ydCBmb3IgRmx1eCBpbiBHcmFmYW5hIGlzIGN1cnJlbnRseSBpbiBiZXRhPC9oNT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBQbGVhc2UgcmVwb3J0IGFueSBpc3N1ZXMgdG86IDxiciAvPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyYWZhbmEvZ3JhZmFuYS9pc3N1ZXMvbmV3L2Nob29zZVwiPlxuICAgICAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFmYW5hL2dyYWZhbmEvaXNzdWVzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L0luZm9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAge29wdGlvbnMuYWNjZXNzID09PSAnZGlyZWN0JyAmJiAoXG4gICAgICAgICAgPEFsZXJ0IHRpdGxlPVwiRGVwcmVjYXRpb24gTm90aWNlXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgICAgICAgICBCcm93c2VyIGFjY2VzcyBtb2RlIGluIHRoZSBJbmZsdXhEQiBkYXRhc291cmNlIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLlxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICl9XG5cbiAgICAgICAgPERhdGFTb3VyY2VIdHRwU2V0dGluZ3NcbiAgICAgICAgICBzaG93QWNjZXNzT3B0aW9ucz17dHJ1ZX1cbiAgICAgICAgICBkYXRhU291cmNlQ29uZmlnPXtvcHRpb25zfVxuICAgICAgICAgIGRlZmF1bHRVcmw9XCJodHRwOi8vbG9jYWxob3N0OjgwODZcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5JbmZsdXhEQiBEZXRhaWxzPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7b3B0aW9ucy5qc29uRGF0YS52ZXJzaW9uID09PSBJbmZsdXhWZXJzaW9uLkZsdXggPyB0aGlzLnJlbmRlckluZmx1eDJ4KCkgOiB0aGlzLnJlbmRlckluZmx1eDF4KCl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsV2lkdGg9ezIwfVxuICAgICAgICAgICAgICBsYWJlbD1cIk1heCBzZXJpZXNcIlxuICAgICAgICAgICAgICB0b29sdGlwPVwiTGltaXQgdGhlIG51bWJlciBvZiBzZXJpZXMvdGFibGVzIHRoYXQgR3JhZmFuYSB3aWxsIHByb2Nlc3MuIExvd2VyIHRoaXMgbnVtYmVyIHRvIHByZXZlbnQgYWJ1c2UsIGFuZCBpbmNyZWFzZSBpdCBpZiB5b3UgaGF2ZSBsb3RzIG9mIHNtYWxsIHRpbWUgc2VyaWVzIGFuZCBub3QgYWxsIGFyZSBzaG93bi4gRGVmYXVsdHMgdG8gMTAwMC5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwMDBcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndpZHRoLTEwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tYXhTZXJpZXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gV2UgZHVwbGljYXRlIHRoaXMgc3RhdGUgc28gdGhhdCB3ZSBhbGxvdyB0byB3cml0ZSBmcmVlbHkgaW5zaWRlIHRoZSBpbnB1dC4gV2UgZG9uJ3QgaGF2ZVxuICAgICAgICAgICAgICAgICAgLy8gYW55IGluZmx1ZW5jZSBvdmVyIHNhdmluZyBzbyB0aGlzIHNlZW1zIHRvIGJlIG9ubHkgd2F5IHRvIGRvIHRoaXMuXG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWF4U2VyaWVzOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gcGFyc2VJbnQoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHRoaXMucHJvcHMsICdtYXhTZXJpZXMnLCBOdW1iZXIuaXNGaW5pdGUodmFsKSA/IHZhbCA6IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWdFZGl0b3I7XG4iLCJpbXBvcnQgeyBjeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQge1xuICBJbmxpbmVGb3JtTGFiZWwsXG4gIExpbmtCdXR0b24sXG4gIFNlZ21lbnQsXG4gIENvZGVFZGl0b3IsXG4gIE1vbmFjb0VkaXRvcixcbiAgQ29kZUVkaXRvclN1Z2dlc3Rpb25JdGVtLFxuICBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBJbmZsdXhEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IEluZmx1eFF1ZXJ5KSA9PiB2b2lkO1xuICBvblJ1blF1ZXJ5OiAoKSA9PiB2b2lkO1xuICBxdWVyeTogSW5mbHV4UXVlcnk7XG4gIC8vIGBkYXRhc291cmNlYCBpcyBub3QgdXNlZCBpbnRlcm5hbGx5LCBidXQgdGhpcyBjb21wb25lbnQgaXMgdXNlZCBhdCBzb21lIHBsYWNlc1xuICAvLyBkaXJlY3RseSwgd2hlcmUgdGhlIGBkYXRhc291cmNlYCBwcm9wIGhhcyB0byBleGlzdC4gbGF0ZXIsIHdoZW4gdGhlIHdob2xlXG4gIC8vIHF1ZXJ5LWVkaXRvciBnZXRzIGNvbnZlcnRlZCB0byByZWFjdCB3ZSBjYW4gc3RvcCB1c2luZyB0aGlzIGNvbXBvbmVudCBkaXJlY3RseVxuICAvLyBhbmQgdGhlbiB3ZSBjYW4gcHJvYmFibHkgcmVtb3ZlIHRoZSBkYXRhc291cmNlIGF0dHJpYnV0ZS5cbiAgZGF0YXNvdXJjZTogSW5mbHV4RGF0YXNvdXJjZTtcbn07XG5cbmNvbnN0IHNhbXBsZXM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9IFtcbiAgeyBsYWJlbDogJ1Nob3cgYnVja2V0cycsIGRlc2NyaXB0aW9uOiAnTGlzdCB0aGUgYXZhaWxhYmxlIGJ1Y2tldHMgKHRhYmxlKScsIHZhbHVlOiAnYnVja2V0cygpJyB9LFxuICB7XG4gICAgbGFiZWw6ICdTaW1wbGUgcXVlcnknLFxuICAgIGRlc2NyaXB0aW9uOiAnZmlsdGVyIGJ5IG1lYXN1cmVtZW50IGFuZCBmaWVsZCcsXG4gICAgdmFsdWU6IGBmcm9tKGJ1Y2tldDogXCJkYi9ycFwiKVxuICB8PiByYW5nZShzdGFydDogdi50aW1lUmFuZ2VTdGFydCwgc3RvcDp2LnRpbWVSYW5nZVN0b3ApXG4gIHw+IGZpbHRlcihmbjogKHIpID0+XG4gICAgci5fbWVhc3VyZW1lbnQgPT0gXCJleGFtcGxlLW1lYXN1cmVtZW50XCIgYW5kXG4gICAgci5fZmllbGQgPT0gXCJleGFtcGxlLWZpZWxkXCJcbiAgKWAsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0dyb3VwZWQgUXVlcnknLFxuICAgIGRlc2NyaXB0aW9uOiAnR3JvdXAgYnkgKG1pbi9tYXgvc3VtL21lZGlhbiknLFxuICAgIHZhbHVlOiBgLy8gdi53aW5kb3dQZXJpb2QgaXMgYSB2YXJpYWJsZSByZWZlcnJpbmcgdG8gdGhlIGN1cnJlbnQgb3B0aW1pemVkIHdpbmRvdyBwZXJpb2QgKGN1cnJlbnRseTogJGludGVydmFsKVxuZnJvbShidWNrZXQ6IHYuYnVja2V0KVxuICB8PiByYW5nZShzdGFydDogdi50aW1lUmFuZ2VTdGFydCwgc3RvcDogdi50aW1lUmFuZ2VTdG9wKVxuICB8PiBmaWx0ZXIoZm46IChyKSA9PiByW1wiX21lYXN1cmVtZW50XCJdID09IFwibWVhc3VyZW1lbnQxXCIgb3IgcltcIl9tZWFzdXJlbWVudFwiXSA9fiAvXi4qP3JlZ2V4LiokLylcbiAgfD4gZmlsdGVyKGZuOiAocikgPT4gcltcIl9maWVsZFwiXSA9PSBcImZpZWxkMlwiIG9yIHJbXCJfZmllbGRcIl0gPX4gL14uKj9yZWdleC4qJC8pXG4gIHw+IGFnZ3JlZ2F0ZVdpbmRvdyhldmVyeTogdi53aW5kb3dQZXJpb2QsIGZuOiBtZWFufG1lZGlhbnxtYXh8Y291bnR8ZGVyaXZhdGl2ZXxzdW0pXG4gIHw+IHlpZWxkKG5hbWU6IFwic29tZS1uYW1lXCIpYCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnRmlsdGVyIGJ5IHZhbHVlJyxcbiAgICBkZXNjcmlwdGlvbjogJ1Jlc3VsdHMgYmV0d2VlbiBhIG1pbi9tYXgnLFxuICAgIHZhbHVlOiBgLy8gdi5idWNrZXQsIHYudGltZVJhbmdlU3RhcnQsIGFuZCB2LnRpbWVSYW5nZSBzdG9wIGFyZSBhbGwgdmFyaWFibGVzIHN1cHBvcnRlZCBieSB0aGUgZmx1eCBwbHVnaW4gYW5kIGluZmx1eGRiXG5mcm9tKGJ1Y2tldDogdi5idWNrZXQpXG4gIHw+IHJhbmdlKHN0YXJ0OiB2LnRpbWVSYW5nZVN0YXJ0LCBzdG9wOiB2LnRpbWVSYW5nZVN0b3ApXG4gIHw+IGZpbHRlcihmbjogKHIpID0+IHJbXCJfdmFsdWVcIl0gPj0gMTAgYW5kIHJbXCJfdmFsdWVcIl0gPD0gMjApYCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnU2NoZW1hIEV4cGxvcmF0aW9uOiAobWVhc3VyZW1lbnRzKScsXG4gICAgZGVzY3JpcHRpb246ICdHZXQgYSBsaXN0IG9mIG1lYXN1cmVtZW50IHVzaW5nIGZsdXgnLFxuICAgIHZhbHVlOiBgaW1wb3J0IFwiaW5mbHV4ZGF0YS9pbmZsdXhkYi92MVwiXG52MS5tZWFzdXJlbWVudHMoYnVja2V0OiB2LmJ1Y2tldClgLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTY2hlbWEgRXhwbG9yYXRpb246IChmaWVsZHMpJyxcbiAgICBkZXNjcmlwdGlvbjogJ1JldHVybiBldmVyeSBwb3NzaWJsZSBrZXkgaW4gYSBzaW5nbGUgdGFibGUnLFxuICAgIHZhbHVlOiBgZnJvbShidWNrZXQ6IHYuYnVja2V0KVxuICB8PiByYW5nZShzdGFydDogdi50aW1lUmFuZ2VTdGFydCwgc3RvcDp2LnRpbWVSYW5nZVN0b3ApXG4gIHw+IGtleXMoKVxuICB8PiBrZWVwKGNvbHVtbnM6IFtcIl92YWx1ZVwiXSlcbiAgfD4gZ3JvdXAoKVxuICB8PiBkaXN0aW5jdCgpYCxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnU2NoZW1hIEV4cGxvcmF0aW9uOiAodGFnIGtleXMpJyxcbiAgICBkZXNjcmlwdGlvbjogJ0dldCBhIGxpc3Qgb2YgdGFnIGtleXMgdXNpbmcgZmx1eCcsXG4gICAgdmFsdWU6IGBpbXBvcnQgXCJpbmZsdXhkYXRhL2luZmx1eGRiL3YxXCJcbnYxLnRhZ0tleXMoYnVja2V0OiB2LmJ1Y2tldClgLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTY2hlbWEgRXhwbG9yYXRpb246ICh0YWcgdmFsdWVzKScsXG4gICAgZGVzY3JpcHRpb246ICdHZXQgYSBsaXN0IG9mIHRhZyB2YWx1ZXMgdXNpbmcgZmx1eCcsXG4gICAgdmFsdWU6IGBpbXBvcnQgXCJpbmZsdXhkYXRhL2luZmx1eGRiL3YxXCJcbnYxLnRhZ1ZhbHVlcyhcbiAgICBidWNrZXQ6IHYuYnVja2V0LFxuICAgIHRhZzogXCJob3N0XCIsXG4gICAgcHJlZGljYXRlOiAocikgPT4gdHJ1ZSxcbiAgICBzdGFydDogLTFkXG4pYCxcbiAgfSxcbl07XG5cbmV4cG9ydCBjbGFzcyBGbHV4UXVlcnlFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIG9uRmx1eFF1ZXJ5Q2hhbmdlID0gKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5xdWVyeSwgcXVlcnkgfSk7XG4gICAgdGhpcy5wcm9wcy5vblJ1blF1ZXJ5KCk7XG4gIH07XG5cbiAgb25TYW1wbGVDaGFuZ2UgPSAodmFsOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgLi4udGhpcy5wcm9wcy5xdWVyeSxcbiAgICAgIHF1ZXJ5OiB2YWwudmFsdWUhLFxuICAgIH0pO1xuXG4gICAgLy8gQW5ndWxhciBIQUNLOiBTaW5jZSB0aGUgdGFyZ2V0IGRvZXMgbm90IGFjdHVhbGx5IGNoYW5nZSFcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgdGhpcy5wcm9wcy5vblJ1blF1ZXJ5KCk7XG4gIH07XG5cbiAgZ2V0U3VnZ2VzdGlvbnMgPSAoKTogQ29kZUVkaXRvclN1Z2dlc3Rpb25JdGVtW10gPT4ge1xuICAgIGNvbnN0IHN1Z3M6IENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbVtdID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ3YudGltZVJhbmdlU3RhcnQnLFxuICAgICAgICBraW5kOiBDb2RlRWRpdG9yU3VnZ2VzdGlvbkl0ZW1LaW5kLlByb3BlcnR5LFxuICAgICAgICBkZXRhaWw6ICdUaGUgc3RhcnQgdGltZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ3YudGltZVJhbmdlU3RvcCcsXG4gICAgICAgIGtpbmQ6IENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbUtpbmQuUHJvcGVydHksXG4gICAgICAgIGRldGFpbDogJ1RoZSBzdG9wIHRpbWUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd2LndpbmRvd1BlcmlvZCcsXG4gICAgICAgIGtpbmQ6IENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbUtpbmQuUHJvcGVydHksXG4gICAgICAgIGRldGFpbDogJ2Jhc2VkIG9uIG1heCBkYXRhIHBvaW50cycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ3YuZGVmYXVsdEJ1Y2tldCcsXG4gICAgICAgIGtpbmQ6IENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbUtpbmQuUHJvcGVydHksXG4gICAgICAgIGRldGFpbDogJ2J1Y2tldCBjb25maWd1cmVkIGluIHRoZSBkYXRzb3VyY2UnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICd2Lm9yZ2FuaXphdGlvbicsXG4gICAgICAgIGtpbmQ6IENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbUtpbmQuUHJvcGVydHksXG4gICAgICAgIGRldGFpbDogJ29yZyBjb25maWd1cmVkIGZvciB0aGUgZGF0c291cmNlJyxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IHRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKTtcbiAgICB0ZW1wbGF0ZVNydi5nZXRWYXJpYWJsZXMoKS5mb3JFYWNoKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbGFiZWwgPSAnJHsnICsgdmFyaWFibGUubmFtZSArICd9JztcbiAgICAgIGxldCB2YWwgPSB0ZW1wbGF0ZVNydi5yZXBsYWNlKGxhYmVsKTtcbiAgICAgIGlmICh2YWwgPT09IGxhYmVsKSB7XG4gICAgICAgIHZhbCA9ICcnO1xuICAgICAgfVxuICAgICAgc3Vncy5wdXNoKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGtpbmQ6IENvZGVFZGl0b3JTdWdnZXN0aW9uSXRlbUtpbmQuVGV4dCxcbiAgICAgICAgZGV0YWlsOiBgKFRlbXBsYXRlIFZhcmlhYmxlKSAke3ZhbH1gLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VncztcbiAgfTtcblxuICAvLyBGb3Igc29tZSByZWFzb24gaW4gYW5ndWxhciwgd2hlbiB0aGlzIGNvbXBvbmVudCBnZXRzIHJlLW1vdW50ZWQsIHRoZSB3aWR0aFxuICAvLyBpcyBub3Qgc2V0IHByb3Blcmx5LiAgVGhpcyBmb3JjZXMgdGhlIGxheW91dCBzaG9ydGx5IGFmdGVyIG1vdW50IHNvIHRoYXQgaXRcbiAgLy8gZGlzcGxheXMgT0suICBOb3RlOiB0aGlzIGlzIG5vdCBhbiBpc3N1ZSB3aGVuIHVzZWQgZGlyZWN0bHkgaW4gcmVhY3RcbiAgZWRpdG9yRGlkTW91bnRDYWxsYmFja0hhY2sgPSAoZWRpdG9yOiBNb25hY29FZGl0b3IpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGVkaXRvci5sYXlvdXQoKSwgMTAwKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGhlbHBUb29sdGlwID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgVHlwZTogPGk+Y3RybCtzcGFjZTwvaT4gdG8gc2hvdyB0ZW1wbGF0ZSB2YXJpYWJsZSBzdWdnZXN0aW9ucyA8YnIgLz5cbiAgICAgICAgTWFueSBxdWVyaWVzIGNhbiBiZSBjb3BpZWQgZnJvbSBDaHJvbm9ncmFmXG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxDb2RlRWRpdG9yXG4gICAgICAgICAgaGVpZ2h0PXsnMjAwcHgnfVxuICAgICAgICAgIGxhbmd1YWdlPVwic3FsXCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkucXVlcnkgfHwgJyd9XG4gICAgICAgICAgb25CbHVyPXt0aGlzLm9uRmx1eFF1ZXJ5Q2hhbmdlfVxuICAgICAgICAgIG9uU2F2ZT17dGhpcy5vbkZsdXhRdWVyeUNoYW5nZX1cbiAgICAgICAgICBzaG93TWluaU1hcD17ZmFsc2V9XG4gICAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXt0cnVlfVxuICAgICAgICAgIGdldFN1Z2dlc3Rpb25zPXt0aGlzLmdldFN1Z2dlc3Rpb25zfVxuICAgICAgICAgIG9uRWRpdG9yRGlkTW91bnQ9e3RoaXMuZWRpdG9yRGlkTW91bnRDYWxsYmFja0hhY2t9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgJ2dmLWZvcm0taW5saW5lJyxcbiAgICAgICAgICAgIGNzc2BcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgaWNvbj1cImV4dGVybmFsLWxpbmstYWx0XCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5pbmZsdXhkYXRhLmNvbS9pbmZsdXhkYi9sYXRlc3QvcXVlcnktZGF0YS9nZXQtc3RhcnRlZC9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEZsdXggbGFuZ3VhZ2Ugc3ludGF4XG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDxTZWdtZW50IG9wdGlvbnM9e3NhbXBsZXN9IHZhbHVlPVwiU2FtcGxlIFF1ZXJ5XCIgb25DaGFuZ2U9e3RoaXMub25TYW1wbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBnZi1mb3JtLWxhYmVsLS1ncm93XCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPElubGluZUZvcm1MYWJlbCB3aWR0aD17NX0gdG9vbHRpcD17aGVscFRvb2x0aXB9PlxuICAgICAgICAgICAgSGVscFxuICAgICAgICAgIDwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENIRUFUX1NIRUVUX0lURU1TID0gW1xuICB7XG4gICAgdGl0bGU6ICdHZXR0aW5nIHN0YXJ0ZWQnLFxuICAgIGxhYmVsOlxuICAgICAgJ1N0YXJ0IGJ5IHNlbGVjdGluZyBhIG1lYXN1cmVtZW50IGFuZCBmaWVsZCBmcm9tIHRoZSBkcm9wZG93biBhYm92ZS4gWW91IGNhbiB0aGVuIHVzZSB0aGUgdGFnIHNlbGVjdG9yIHRvIGZ1cnRoZXIgbmFycm93IHlvdXIgc2VhcmNoLicsXG4gIH0sXG5dO1xuXG5jb25zdCBJbmZsdXhDaGVhdFNoZWV0ID0gKHByb3BzOiBhbnkpID0+IChcbiAgPGRpdj5cbiAgICA8aDI+SW5mbHV4REIgQ2hlYXQgU2hlZXQ8L2gyPlxuICAgIHtDSEVBVF9TSEVFVF9JVEVNUy5tYXAoKGl0ZW0pID0+IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlYXQtc2hlZXQtaXRlbVwiIGtleT17aXRlbS50aXRsZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlYXQtc2hlZXQtaXRlbV9fdGl0bGVcIj57aXRlbS50aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVhdC1zaGVldC1pdGVtX19sYWJlbFwiPntpdGVtLmxhYmVsfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSl9XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mbHV4Q2hlYXRTaGVldDtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvckhlbHBQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgSW5mbHV4Q2hlYXRTaGVldCBmcm9tICcuL0luZmx1eENoZWF0U2hlZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZsdXhTdGFydFBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFF1ZXJ5RWRpdG9ySGVscFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEluZmx1eENoZWF0U2hlZXQgb25DbGlja0V4YW1wbGU9e3RoaXMucHJvcHMub25DbGlja0V4YW1wbGV9IC8+O1xuICB9XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgSW5mbHV4RGF0YXNvdXJjZSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IGJ1aWxkUmF3UXVlcnkgfSBmcm9tICcuLi9xdWVyeVV0aWxzJztcbmltcG9ydCB7IEluZmx1eE9wdGlvbnMsIEluZmx1eFF1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBGbHV4UXVlcnlFZGl0b3IgfSBmcm9tICcuL0ZsdXhRdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBRdWVyeUVkaXRvck1vZGVTd2l0Y2hlciB9IGZyb20gJy4vUXVlcnlFZGl0b3JNb2RlU3dpdGNoZXInO1xuaW1wb3J0IHsgUmF3SW5mbHV4UUxFZGl0b3IgfSBmcm9tICcuL1Jhd0luZmx1eFFMRWRpdG9yJztcbmltcG9ydCB7IEVkaXRvciBhcyBWaXN1YWxJbmZsdXhRTEVkaXRvciB9IGZyb20gJy4vVmlzdWFsSW5mbHV4UUxFZGl0b3IvRWRpdG9yJztcblxudHlwZSBQcm9wcyA9IFF1ZXJ5RWRpdG9yUHJvcHM8SW5mbHV4RGF0YXNvdXJjZSwgSW5mbHV4UXVlcnksIEluZmx1eE9wdGlvbnM+O1xuXG5leHBvcnQgY29uc3QgUXVlcnlFZGl0b3IgPSAoeyBxdWVyeSwgb25DaGFuZ2UsIG9uUnVuUXVlcnksIGRhdGFzb3VyY2UsIHJhbmdlLCBkYXRhIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBpZiAoZGF0YXNvdXJjZS5pc0ZsdXgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLXF1ZXJ5LWNvbnRlbnRcIj5cbiAgICAgICAgPEZsdXhRdWVyeUVkaXRvciBxdWVyeT17cXVlcnl9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gb25SdW5RdWVyeT17b25SdW5RdWVyeX0gZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyBkaXNwbGF5OiAnZmxleCcgfSl9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh7IGZsZXhHcm93OiAxIH0pfT5cbiAgICAgICAge3F1ZXJ5LnJhd1F1ZXJ5ID8gKFxuICAgICAgICAgIDxSYXdJbmZsdXhRTEVkaXRvciBxdWVyeT17cXVlcnl9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gb25SdW5RdWVyeT17b25SdW5RdWVyeX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VmlzdWFsSW5mbHV4UUxFZGl0b3IgcXVlcnk9e3F1ZXJ5fSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uUnVuUXVlcnk9e29uUnVuUXVlcnl9IGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxRdWVyeUVkaXRvck1vZGVTd2l0Y2hlclxuICAgICAgICBpc1Jhdz17cXVlcnkucmF3UXVlcnkgPz8gZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBxdWVyeTogYnVpbGRSYXdRdWVyeShxdWVyeSksIHJhd1F1ZXJ5OiB2YWx1ZSB9KTtcbiAgICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24sIENvbmZpcm1Nb2RhbCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxudHlwZSBQcm9wcyA9IHtcbiAgaXNSYXc6IGJvb2xlYW47XG4gIG9uQ2hhbmdlOiAobmV3SXNSYXc6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgUXVlcnlFZGl0b3JNb2RlU3dpdGNoZXIgPSAoeyBpc1Jhdywgb25DaGFuZ2UgfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIHRoZSBpc1JhdyBjaGFuZ2VzLCB3ZSBoaWRlIHRoZSBtb2RhbFxuICAgIHNldE1vZGFsT3BlbihmYWxzZSk7XG4gIH0sIFtpc1Jhd10pO1xuXG4gIGlmIChpc1Jhdykge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlN3aXRjaCB0byB2aXN1YWwgZWRpdG9yXCJcbiAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAvLyB3ZSBzaG93IHRoZSBhcmUteW91LXN1cmUgbW9kYWxcbiAgICAgICAgICAgIHNldE1vZGFsT3Blbih0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBpc09wZW49e2lzTW9kYWxPcGVufVxuICAgICAgICAgIHRpdGxlPVwiU3dpdGNoIHRvIHZpc3VhbCBlZGl0b3IgbW9kZVwiXG4gICAgICAgICAgYm9keT1cIkFyZSB5b3Ugc3VyZSB0byBzd2l0Y2ggdG8gdmlzdWFsIGVkaXRvciBtb2RlPyBZb3Ugd2lsbCBsb3NlIHRoZSBjaGFuZ2VzIGRvbmUgaW4gcmF3IHF1ZXJ5IG1vZGUuXCJcbiAgICAgICAgICBjb25maXJtVGV4dD1cIlllcywgc3dpdGNoIHRvIGVkaXRvciBtb2RlXCJcbiAgICAgICAgICBkaXNtaXNzVGV4dD1cIk5vLCBzdGF5IGluIHJhdyBxdWVyeSBtb2RlXCJcbiAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0TW9kYWxPcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiU3dpdGNoIHRvIHRleHQgZWRpdG9yXCJcbiAgICAgICAgaWNvbj1cInBlblwiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIG9uQ2hhbmdlKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgPjwvQnV0dG9uPlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBUZXh0QXJlYSwgSW5saW5lRm9ybUxhYmVsLCBJbnB1dCwgU2VsZWN0LCBIb3Jpem9udGFsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEluZmx1eFF1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBSRVNVTFRfRk9STUFUUywgREVGQVVMVF9SRVNVTFRfRk9STUFUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlU2hhZG93ZWRTdGF0ZSB9IGZyb20gJy4vdXNlU2hhZG93ZWRTdGF0ZSc7XG5pbXBvcnQgeyB1c2VVbmlxdWVJZCB9IGZyb20gJy4vdXNlVW5pcXVlSWQnO1xuXG50eXBlIFByb3BzID0ge1xuICBxdWVyeTogSW5mbHV4UXVlcnk7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IEluZmx1eFF1ZXJ5KSA9PiB2b2lkO1xuICBvblJ1blF1ZXJ5OiAoKSA9PiB2b2lkO1xufTtcblxuLy8gd2UgaGFuZGxlIDMgZmllbGRzOiBcInF1ZXJ5XCIsIFwiYWxpYXNcIiwgXCJyZXN1bHRGb3JtYXRcIlxuLy8gXCJyZXN1bHRGb3JtYXRcIiBjaGFuZ2VzIGFyZSBhcHBsaWVkIGltbWVkaWF0ZWx5XG4vLyBcInF1ZXJ5XCIgYW5kIFwiYWxpYXNcIiBjaGFuZ2VzIG9ubHkgaGFwcGVuIG9uIG9uYmx1clxuZXhwb3J0IGNvbnN0IFJhd0luZmx1eFFMRWRpdG9yID0gKHsgcXVlcnksIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5IH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbY3VycmVudFF1ZXJ5LCBzZXRDdXJyZW50UXVlcnldID0gdXNlU2hhZG93ZWRTdGF0ZShxdWVyeS5xdWVyeSk7XG4gIGNvbnN0IFtjdXJyZW50QWxpYXMsIHNldEN1cnJlbnRBbGlhc10gPSB1c2VTaGFkb3dlZFN0YXRlKHF1ZXJ5LmFsaWFzKTtcbiAgY29uc3QgYWxpYXNFbGVtZW50SWQgPSB1c2VVbmlxdWVJZCgpO1xuICBjb25zdCBzZWxlY3RFbGVtZW50SWQgPSB1c2VVbmlxdWVJZCgpO1xuXG4gIGNvbnN0IHJlc3VsdEZvcm1hdCA9IHF1ZXJ5LnJlc3VsdEZvcm1hdCA/PyBERUZBVUxUX1JFU1VMVF9GT1JNQVQ7XG5cbiAgY29uc3QgYXBwbHlEZWxheWVkQ2hhbmdlc0FuZFJ1blF1ZXJ5ID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKHtcbiAgICAgIC4uLnF1ZXJ5LFxuICAgICAgcXVlcnk6IGN1cnJlbnRRdWVyeSxcbiAgICAgIGFsaWFzOiBjdXJyZW50QWxpYXMsXG4gICAgICByZXN1bHRGb3JtYXQsXG4gICAgfSk7XG4gICAgb25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUZXh0QXJlYVxuICAgICAgICBhcmlhLWxhYmVsPVwicXVlcnlcIlxuICAgICAgICByb3dzPXszfVxuICAgICAgICBzcGVsbENoZWNrPXtmYWxzZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmZsdXhEQiBRdWVyeVwiXG4gICAgICAgIG9uQmx1cj17YXBwbHlEZWxheWVkQ2hhbmdlc0FuZFJ1blF1ZXJ5fVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBzZXRDdXJyZW50UXVlcnkoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e2N1cnJlbnRRdWVyeSA/PyAnJ31cbiAgICAgIC8+XG4gICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8SW5saW5lRm9ybUxhYmVsIGh0bWxGb3I9e3NlbGVjdEVsZW1lbnRJZH0+Rm9ybWF0IGFzPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBpbnB1dElkPXtzZWxlY3RFbGVtZW50SWR9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCByZXN1bHRGb3JtYXQ6IHYudmFsdWUgfSk7XG4gICAgICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17cmVzdWx0Rm9ybWF0fVxuICAgICAgICAgIG9wdGlvbnM9e1JFU1VMVF9GT1JNQVRTfVxuICAgICAgICAvPlxuICAgICAgICA8SW5saW5lRm9ybUxhYmVsIGh0bWxGb3I9e2FsaWFzRWxlbWVudElkfT5BbGlhcyBieTwvSW5saW5lRm9ybUxhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpZD17YWxpYXNFbGVtZW50SWR9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHNwZWxsQ2hlY2s9e2ZhbHNlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtaW5nIHBhdHRlcm5cIlxuICAgICAgICAgIG9uQmx1cj17YXBwbHlEZWxheWVkQ2hhbmdlc0FuZFJ1blF1ZXJ5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0Q3VycmVudEFsaWFzKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB2YWx1ZT17Y3VycmVudEFsaWFzID8/ICcnfVxuICAgICAgICAvPlxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IElubGluZUZvcm1MYWJlbCwgVGV4dEFyZWEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBJbmZsdXhEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuXG5pbXBvcnQgeyBGbHV4UXVlcnlFZGl0b3IgfSBmcm9tICcuL0ZsdXhRdWVyeUVkaXRvcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1ZXJ5OiBzdHJpbmc7IC8vIGJlZm9yZSBmbHV4LCBpdCB3YXMgYWx3YXlzIGEgc3RyaW5nXG4gIG9uQ2hhbmdlOiAocXVlcnk/OiBzdHJpbmcpID0+IHZvaWQ7XG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhcmlhYmxlUXVlcnlFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIG9uUmVmcmVzaCA9ICgpID0+IHtcbiAgICAvLyBub29wXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IHF1ZXJ5LCBkYXRhc291cmNlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoZGF0YXNvdXJjZS5pc0ZsdXgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGbHV4UXVlcnlFZGl0b3JcbiAgICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICAgIHF1ZXJ5PXt7XG4gICAgICAgICAgICByZWZJZDogJ0EnLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvblJ1blF1ZXJ5PXt0aGlzLm9uUmVmcmVzaH1cbiAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IG9uQ2hhbmdlKHYucXVlcnkpfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICA8SW5saW5lRm9ybUxhYmVsIHdpZHRoPXsxMH0+UXVlcnk8L0lubGluZUZvcm1MYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZSBnZi1mb3JtLS1ncm93XCI+XG4gICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3F1ZXJ5IHx8ICcnfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJtZXRyaWMgbmFtZSBvciB0YWdzIHF1ZXJ5XCJcbiAgICAgICAgICAgIHJvd3M9ezF9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWlucHV0XCJcbiAgICAgICAgICAgIG9uQmx1cj17KGUpID0+IG9uQ2hhbmdlKGUuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgU2VnIH0gZnJvbSAnLi9TZWcnO1xuaW1wb3J0IHsgdW53cmFwIH0gZnJvbSAnLi91bndyYXAnO1xuXG50eXBlIFByb3BzID0ge1xuICBsb2FkT3B0aW9uczogKCkgPT4gUHJvbWlzZTxTZWxlY3RhYmxlVmFsdWVbXT47XG4gIGFsbG93Q3VzdG9tVmFsdWU/OiBib29sZWFuO1xuICBvbkFkZDogKHY6IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBBZGRCdXR0b24gPSAoeyBsb2FkT3B0aW9ucywgYWxsb3dDdXN0b21WYWx1ZSwgb25BZGQgfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlZ1xuICAgICAgdmFsdWU9XCIrXCJcbiAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uc31cbiAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e2FsbG93Q3VzdG9tVmFsdWV9XG4gICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgb25BZGQodW53cmFwKHYudmFsdWUpKTtcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBJbmxpbmVMYWJlbCwgU2VnbWVudFNlY3Rpb24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBJbmZsdXhEYXRhc291cmNlIGZyb20gJy4uLy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHtcbiAgZ2V0QWxsTWVhc3VyZW1lbnRzRm9yVGFncyxcbiAgZ2V0QWxsUG9saWNpZXMsXG4gIGdldEZpZWxkS2V5c0Zvck1lYXN1cmVtZW50LFxuICBnZXRUYWdLZXlzRm9yTWVhc3VyZW1lbnRBbmRUYWdzLFxuICBnZXRUYWdWYWx1ZXMsXG59IGZyb20gJy4uLy4uL2luZmx1eFFMTWV0YWRhdGFRdWVyeSc7XG5pbXBvcnQge1xuICBub3JtYWxpemVRdWVyeSxcbiAgYWRkTmV3U2VsZWN0UGFydCxcbiAgcmVtb3ZlU2VsZWN0UGFydCxcbiAgYWRkTmV3R3JvdXBCeVBhcnQsXG4gIHJlbW92ZUdyb3VwQnlQYXJ0LFxuICBjaGFuZ2VTZWxlY3RQYXJ0LFxuICBjaGFuZ2VHcm91cEJ5UGFydCxcbn0gZnJvbSAnLi4vLi4vcXVlcnlVdGlscyc7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeSwgSW5mbHV4UXVlcnlUYWcgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBERUZBVUxUX1JFU1VMVF9GT1JNQVQgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgdXNlVW5pcXVlSWQgfSBmcm9tICcuLi91c2VVbmlxdWVJZCc7XG5cbmltcG9ydCB7IEZvcm1hdEFzU2VjdGlvbiB9IGZyb20gJy4vRm9ybWF0QXNTZWN0aW9uJztcbmltcG9ydCB7IEZyb21TZWN0aW9uIH0gZnJvbSAnLi9Gcm9tU2VjdGlvbic7XG5pbXBvcnQgeyBJbnB1dFNlY3Rpb24gfSBmcm9tICcuL0lucHV0U2VjdGlvbic7XG5pbXBvcnQgeyBPcmRlckJ5VGltZVNlY3Rpb24gfSBmcm9tICcuL09yZGVyQnlUaW1lU2VjdGlvbic7XG5pbXBvcnQgeyBQYXJ0TGlzdFNlY3Rpb24gfSBmcm9tICcuL1BhcnRMaXN0U2VjdGlvbic7XG5pbXBvcnQgeyBUYWdzU2VjdGlvbiB9IGZyb20gJy4vVGFnc1NlY3Rpb24nO1xuaW1wb3J0IHsgZ2V0TmV3U2VsZWN0UGFydE9wdGlvbnMsIGdldE5ld0dyb3VwQnlQYXJ0T3B0aW9ucywgbWFrZVBhcnRMaXN0IH0gZnJvbSAnLi9wYXJ0TGlzdFV0aWxzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcXVlcnk6IEluZmx1eFF1ZXJ5O1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBJbmZsdXhRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyeTogKCkgPT4gdm9pZDtcbiAgZGF0YXNvdXJjZTogSW5mbHV4RGF0YXNvdXJjZTtcbn07XG5cbmZ1bmN0aW9uIGdldFRlbXBsYXRlVmFyaWFibGVPcHRpb25zKCkge1xuICByZXR1cm4gKFxuICAgIGdldFRlbXBsYXRlU3J2KClcbiAgICAgIC5nZXRWYXJpYWJsZXMoKVxuICAgICAgLy8gd2UgbWFrZSB0aGVtIHJlZ2V4LXBhcmFtcywgaSdtIG5vdCAxMDAlIHN1cmUgd2h5LlxuICAgICAgLy8gcHJvYmFibHkgYmVjYXVzZSB0aGlzIHdheSBtdWx0aS12YWx1ZSB2YXJpYWJsZXMgd29yayBvayB0b28uXG4gICAgICAubWFwKCh2KSA9PiBgL14kJHt2Lm5hbWV9JC9gKVxuICApO1xufVxuXG4vLyBoZWxwZXIgZnVuY3Rpb24gdG8gbWFrZSBpdCBlYXN5IHRvIGNhbGwgdGhpcyBmcm9tIHRoZSB3aWRnZXQtcmVuZGVyLWNvZGVcbmZ1bmN0aW9uIHdpdGhUZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyhvcHRpb25zUHJvbWlzZTogUHJvbWlzZTxzdHJpbmdbXT4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIHJldHVybiBvcHRpb25zUHJvbWlzZS50aGVuKChvcHRpb25zKSA9PiBbLi4uZ2V0VGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMoKSwgLi4ub3B0aW9uc10pO1xufVxuXG4vLyBpdCBpcyBwb3NzaWJsZSB0byBhZGQgZmllbGRzIGludG8gdGhlIGBJbmZsdXhRdWVyeVRhZ2Agc3RydWN0dXJlcywgYW5kIHRoZXkgZG8gd29yayxcbi8vIGJ1dCBpbiBzb21lIGNhc2VzLCB3aGVuIHdlIGRvIG1ldGFkYXRhIHF1ZXJpZXMsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZW0gZnJvbSB0aGUgcXVlcmllcy5cbmZ1bmN0aW9uIGZpbHRlclRhZ3MocGFydHM6IEluZmx1eFF1ZXJ5VGFnW10sIGFsbFRhZ0tleXM6IFNldDxzdHJpbmc+KTogSW5mbHV4UXVlcnlUYWdbXSB7XG4gIHJldHVybiBwYXJ0cy5maWx0ZXIoKHQpID0+IGFsbFRhZ0tleXMuaGFzKHQua2V5KSk7XG59XG5cbmV4cG9ydCBjb25zdCBFZGl0b3IgPSAocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB1bmlxdWVJZCA9IHVzZVVuaXF1ZUlkKCk7XG4gIGNvbnN0IGZvcm1hdEFzSWQgPSBgaW5mbHV4ZGItcWUtZm9ybWF0LWFzLSR7dW5pcXVlSWR9YDtcbiAgY29uc3Qgb3JkZXJCeVRpbWVJZCA9IGBpbmZsdXhkYi1xZS1vcmRlci1ieSR7dW5pcXVlSWR9YDtcblxuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHF1ZXJ5ID0gbm9ybWFsaXplUXVlcnkocHJvcHMucXVlcnkpO1xuICBjb25zdCB7IGRhdGFzb3VyY2UgfSA9IHByb3BzO1xuICBjb25zdCB7IG1lYXN1cmVtZW50LCBwb2xpY3kgfSA9IHF1ZXJ5O1xuXG4gIGNvbnN0IGFsbFRhZ0tleXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gZ2V0VGFnS2V5c0Zvck1lYXN1cmVtZW50QW5kVGFncyhtZWFzdXJlbWVudCwgcG9saWN5LCBbXSwgZGF0YXNvdXJjZSkudGhlbigodGFncykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBTZXQodGFncyk7XG4gICAgfSk7XG4gIH0sIFttZWFzdXJlbWVudCwgcG9saWN5LCBkYXRhc291cmNlXSk7XG5cbiAgY29uc3Qgc2VsZWN0TGlzdHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBkeW5hbWljU2VsZWN0UGFydE9wdGlvbnMgPSBuZXcgTWFwKFtcbiAgICAgIFtcbiAgICAgICAgJ2ZpZWxkXzAnLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG1lYXN1cmVtZW50ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gZ2V0RmllbGRLZXlzRm9yTWVhc3VyZW1lbnQobWVhc3VyZW1lbnQsIHBvbGljeSwgZGF0YXNvdXJjZSlcbiAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgXSk7XG4gICAgcmV0dXJuIChxdWVyeS5zZWxlY3QgPz8gW10pLm1hcCgoc2VsKSA9PiBtYWtlUGFydExpc3Qoc2VsLCBkeW5hbWljU2VsZWN0UGFydE9wdGlvbnMpKTtcbiAgfSwgW21lYXN1cmVtZW50LCBwb2xpY3ksIHF1ZXJ5LnNlbGVjdCwgZGF0YXNvdXJjZV0pO1xuXG4gIC8vIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gaXMgbm90IGNvbXBsaWNhdGVkIGVub3VnaCB0byBtZW1vaXplLCBidXQgaXQncyByZXN1bHRcbiAgLy8gaXMgdXNlZCBpbiBib3RoIG1lbW9pemVkIGFuZCB1bi1tZW1vaXplZCBwYXJ0cywgc28gd2UgaGF2ZSBubyBjaG9pY2VcbiAgY29uc3QgZ2V0VGFnS2V5cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PlxuICAgICAgYWxsVGFnS2V5cy50aGVuKChrZXlzKSA9PlxuICAgICAgICBnZXRUYWdLZXlzRm9yTWVhc3VyZW1lbnRBbmRUYWdzKG1lYXN1cmVtZW50LCBwb2xpY3ksIGZpbHRlclRhZ3MocXVlcnkudGFncyA/PyBbXSwga2V5cyksIGRhdGFzb3VyY2UpXG4gICAgICApO1xuICB9LCBbbWVhc3VyZW1lbnQsIHBvbGljeSwgcXVlcnkudGFncywgZGF0YXNvdXJjZSwgYWxsVGFnS2V5c10pO1xuXG4gIGNvbnN0IGdyb3VwQnlMaXN0ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgZHluYW1pY0dyb3VwQnlQYXJ0T3B0aW9ucyA9IG5ldyBNYXAoW1sndGFnXzAnLCBnZXRUYWdLZXlzXV0pO1xuXG4gICAgcmV0dXJuIG1ha2VQYXJ0TGlzdChxdWVyeS5ncm91cEJ5ID8/IFtdLCBkeW5hbWljR3JvdXBCeVBhcnRPcHRpb25zKTtcbiAgfSwgW2dldFRhZ0tleXMsIHF1ZXJ5Lmdyb3VwQnldKTtcblxuICBjb25zdCBvbkFwcGxpZWRDaGFuZ2UgPSAobmV3UXVlcnk6IEluZmx1eFF1ZXJ5KSA9PiB7XG4gICAgcHJvcHMub25DaGFuZ2UobmV3UXVlcnkpO1xuICAgIHByb3BzLm9uUnVuUXVlcnkoKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlRnJvbVNlY3Rpb25DaGFuZ2UgPSAocDogc3RyaW5nIHwgdW5kZWZpbmVkLCBtOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcbiAgICBvbkFwcGxpZWRDaGFuZ2Uoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICBwb2xpY3k6IHAsXG4gICAgICBtZWFzdXJlbWVudDogbSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUYWdzU2VjdGlvbkNoYW5nZSA9ICh0YWdzOiBJbmZsdXhRdWVyeVRhZ1tdKSA9PiB7XG4gICAgLy8gd2Ugc2V0IGVtcHR5LWFycmF5cyB0byB1bmRlZmluZWRcbiAgICBvbkFwcGxpZWRDaGFuZ2Uoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICB0YWdzOiB0YWdzLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IHRhZ3MsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNlZ21lbnRTZWN0aW9uIGxhYmVsPVwiRlJPTVwiIGZpbGw9e3RydWV9PlxuICAgICAgICA8RnJvbVNlY3Rpb25cbiAgICAgICAgICBwb2xpY3k9e3BvbGljeX1cbiAgICAgICAgICBtZWFzdXJlbWVudD17bWVhc3VyZW1lbnR9XG4gICAgICAgICAgZ2V0UG9saWN5T3B0aW9ucz17KCkgPT4gZ2V0QWxsUG9saWNpZXMoZGF0YXNvdXJjZSl9XG4gICAgICAgICAgZ2V0TWVhc3VyZW1lbnRPcHRpb25zPXsoZmlsdGVyKSA9PlxuICAgICAgICAgICAgd2l0aFRlbXBsYXRlVmFyaWFibGVPcHRpb25zKFxuICAgICAgICAgICAgICBhbGxUYWdLZXlzLnRoZW4oKGtleXMpID0+XG4gICAgICAgICAgICAgICAgZ2V0QWxsTWVhc3VyZW1lbnRzRm9yVGFncyhcbiAgICAgICAgICAgICAgICAgIGZpbHRlciA9PT0gJycgPyB1bmRlZmluZWQgOiBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJUYWdzKHF1ZXJ5LnRhZ3MgPz8gW10sIGtleXMpLFxuICAgICAgICAgICAgICAgICAgZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRnJvbVNlY3Rpb25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD1cImF1dG9cIiBjbGFzc05hbWU9e3N0eWxlcy5pbmxpbmVMYWJlbH0+XG4gICAgICAgICAgV0hFUkVcbiAgICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICAgICAgPFRhZ3NTZWN0aW9uXG4gICAgICAgICAgdGFncz17cXVlcnkudGFncyA/PyBbXX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGFnc1NlY3Rpb25DaGFuZ2V9XG4gICAgICAgICAgZ2V0VGFnS2V5T3B0aW9ucz17Z2V0VGFnS2V5c31cbiAgICAgICAgICBnZXRUYWdWYWx1ZU9wdGlvbnM9eyhrZXk6IHN0cmluZykgPT5cbiAgICAgICAgICAgIHdpdGhUZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyhcbiAgICAgICAgICAgICAgYWxsVGFnS2V5cy50aGVuKChrZXlzKSA9PlxuICAgICAgICAgICAgICAgIGdldFRhZ1ZhbHVlcyhrZXksIG1lYXN1cmVtZW50LCBwb2xpY3ksIGZpbHRlclRhZ3MocXVlcnkudGFncyA/PyBbXSwga2V5cyksIGRhdGFzb3VyY2UpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICA8L1NlZ21lbnRTZWN0aW9uPlxuICAgICAge3NlbGVjdExpc3RzLm1hcCgoc2VsLCBpbmRleCkgPT4gKFxuICAgICAgICA8U2VnbWVudFNlY3Rpb24ga2V5PXtpbmRleH0gbGFiZWw9e2luZGV4ID09PSAwID8gJ1NFTEVDVCcgOiAnJ30gZmlsbD17dHJ1ZX0+XG4gICAgICAgICAgPFBhcnRMaXN0U2VjdGlvblxuICAgICAgICAgICAgcGFydHM9e3NlbH1cbiAgICAgICAgICAgIGdldE5ld1BhcnRPcHRpb25zPXsoKSA9PiBQcm9taXNlLnJlc29sdmUoZ2V0TmV3U2VsZWN0UGFydE9wdGlvbnMoKSl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHBhcnRJbmRleCwgbmV3UGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1F1ZXJ5ID0gY2hhbmdlU2VsZWN0UGFydChxdWVyeSwgaW5kZXgsIHBhcnRJbmRleCwgbmV3UGFyYW1zKTtcbiAgICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKG5ld1F1ZXJ5KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkFkZE5ld1BhcnQ9eyh0eXBlKSA9PiB7XG4gICAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZShhZGROZXdTZWxlY3RQYXJ0KHF1ZXJ5LCB0eXBlLCBpbmRleCkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uUmVtb3ZlUGFydD17KHBhcnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UocmVtb3ZlU2VsZWN0UGFydChxdWVyeSwgcGFydEluZGV4LCBpbmRleCkpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NlZ21lbnRTZWN0aW9uPlxuICAgICAgKSl9XG4gICAgICA8U2VnbWVudFNlY3Rpb24gbGFiZWw9XCJHUk9VUCBCWVwiIGZpbGw9e3RydWV9PlxuICAgICAgICA8UGFydExpc3RTZWN0aW9uXG4gICAgICAgICAgcGFydHM9e2dyb3VwQnlMaXN0fVxuICAgICAgICAgIGdldE5ld1BhcnRPcHRpb25zPXsoKSA9PiBnZXROZXdHcm91cEJ5UGFydE9wdGlvbnMocXVlcnksIGdldFRhZ0tleXMpfVxuICAgICAgICAgIG9uQ2hhbmdlPXsocGFydEluZGV4LCBuZXdQYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1F1ZXJ5ID0gY2hhbmdlR3JvdXBCeVBhcnQocXVlcnksIHBhcnRJbmRleCwgbmV3UGFyYW1zKTtcbiAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZShuZXdRdWVyeSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkFkZE5ld1BhcnQ9eyh0eXBlKSA9PiB7XG4gICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoYWRkTmV3R3JvdXBCeVBhcnQocXVlcnksIHR5cGUpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uUmVtb3ZlUGFydD17KHBhcnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHJlbW92ZUdyb3VwQnlQYXJ0KHF1ZXJ5LCBwYXJ0SW5kZXgpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9TZWdtZW50U2VjdGlvbj5cbiAgICAgIDxTZWdtZW50U2VjdGlvbiBsYWJlbD1cIlRJTUVaT05FXCIgZmlsbD17dHJ1ZX0+XG4gICAgICAgIDxJbnB1dFNlY3Rpb25cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIihvcHRpb25hbClcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS50en1cbiAgICAgICAgICBvbkNoYW5nZT17KHR6KSA9PiB7XG4gICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoeyAuLi5xdWVyeSwgdHogfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPElubGluZUxhYmVsIGh0bWxGb3I9e29yZGVyQnlUaW1lSWR9IHdpZHRoPVwiYXV0b1wiIGNsYXNzTmFtZT17c3R5bGVzLmlubGluZUxhYmVsfT5cbiAgICAgICAgICBPUkRFUiBCWSBUSU1FXG4gICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgIDxPcmRlckJ5VGltZVNlY3Rpb25cbiAgICAgICAgICBpbnB1dElkPXtvcmRlckJ5VGltZUlkfVxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5vcmRlckJ5VGltZSA9PT0gJ0RFU0MnID8gJ0RFU0MnIDogJ0FTQycgLyogRklYTUU6IG1ha2UgdGhpcyBzaGFyZWQgd2l0aCBpbmZsdXhfcXVlcnlfbW9kZWwgKi99XG4gICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoeyAuLi5xdWVyeSwgb3JkZXJCeVRpbWU6IHYgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VnbWVudFNlY3Rpb24+XG4gICAgICB7LyogcXVlcnkuZmlsbCBpcyBpZ25vcmVkIGluIHRoZSBxdWVyeS1lZGl0b3IsIGFuZCBpdCBpcyBkZWxldGVkIHdoZW5ldmVyXG4gICAgICAgICAgcXVlcnktZWRpdG9yIGNoYW5nZXMuIHRoZSBpbmZsdXhfcXVlcnlfbW9kZWwgc3RpbGwgaGFuZGxlcyBpdCwgYnV0IHRoZSBuZXdcbiAgICAgICAgICBhcHByb2FjaCBzZWVtIHRvIGJlIHRvIGhhbmRsZSBcImZpbGxcIiBpbnNpZGUgcXVlcnkuZ3JvdXBCeS4gc28sIGlmIHlvdVxuICAgICAgICAgIGhhdmUgYSBwYW5lbCB3aGVyZSBpbiB0aGUganNvbiB5b3UgaGF2ZSBxdWVyeS5maWxsLCBpdCB3aWxsIGJlIGFwcGxpZWQsXG4gICAgICAgICAgYXMgbG9uZyBhcyB5b3UgZG8gbm90IGVkaXQgdGhhdCBxdWVyeS4gKi99XG4gICAgICA8U2VnbWVudFNlY3Rpb24gbGFiZWw9XCJMSU1JVFwiIGZpbGw9e3RydWV9PlxuICAgICAgICA8SW5wdXRTZWN0aW9uXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIob3B0aW9uYWwpXCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkubGltaXQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhsaW1pdCkgPT4ge1xuICAgICAgICAgICAgb25BcHBsaWVkQ2hhbmdlKHsgLi4ucXVlcnksIGxpbWl0IH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD1cImF1dG9cIiBjbGFzc05hbWU9e3N0eWxlcy5pbmxpbmVMYWJlbH0+XG4gICAgICAgICAgU0xJTUlUXG4gICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgIDxJbnB1dFNlY3Rpb25cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIihvcHRpb25hbClcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5zbGltaXQ/LnRvU3RyaW5nKCl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhzbGltaXQpID0+IHtcbiAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZSh7IC4uLnF1ZXJ5LCBzbGltaXQgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2VnbWVudFNlY3Rpb24+XG4gICAgICA8U2VnbWVudFNlY3Rpb24gaHRtbEZvcj17Zm9ybWF0QXNJZH0gbGFiZWw9XCJGT1JNQVQgQVNcIiBmaWxsPXt0cnVlfT5cbiAgICAgICAgPEZvcm1hdEFzU2VjdGlvblxuICAgICAgICAgIGlucHV0SWQ9e2Zvcm1hdEFzSWR9XG4gICAgICAgICAgZm9ybWF0PXtxdWVyeS5yZXN1bHRGb3JtYXQgPz8gREVGQVVMVF9SRVNVTFRfRk9STUFUfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZm9ybWF0KSA9PiB7XG4gICAgICAgICAgICBvbkFwcGxpZWRDaGFuZ2UoeyAuLi5xdWVyeSwgcmVzdWx0Rm9ybWF0OiBmb3JtYXQgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge3F1ZXJ5LnJlc3VsdEZvcm1hdCAhPT0gJ3RhYmxlJyAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxJbmxpbmVMYWJlbCB3aWR0aD1cImF1dG9cIiBjbGFzc05hbWU9e3N0eWxlcy5pbmxpbmVMYWJlbH0+XG4gICAgICAgICAgICAgIEFMSUFTXG4gICAgICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICAgICAgPElucHV0U2VjdGlvblxuICAgICAgICAgICAgICBpc1dpZGVcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1pbmcgcGF0dGVyblwiXG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5hbGlhc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhhbGlhcykgPT4ge1xuICAgICAgICAgICAgICAgIG9uQXBwbGllZENoYW5nZSh7IC4uLnF1ZXJ5LCBhbGlhcyB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1NlZ21lbnRTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgaW5saW5lTGFiZWw6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5LnRleHR9O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJlc3VsdEZvcm1hdCB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFJFU1VMVF9GT1JNQVRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgcGFkZGluZ1JpZ2h0Q2xhc3MgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyB1bndyYXAgfSBmcm9tICcuL3Vud3JhcCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlucHV0SWQ/OiBzdHJpbmc7XG4gIGZvcm1hdDogUmVzdWx0Rm9ybWF0O1xuICBvbkNoYW5nZTogKG5ld0Zvcm1hdDogUmVzdWx0Rm9ybWF0KSA9PiB2b2lkO1xufTtcblxuY29uc3QgY2xhc3NOYW1lID0gY3goJ3dpZHRoLTgnLCBwYWRkaW5nUmlnaHRDbGFzcyk7XG5cbmV4cG9ydCBjb25zdCBGb3JtYXRBc1NlY3Rpb24gPSAoeyBmb3JtYXQsIGlucHV0SWQsIG9uQ2hhbmdlIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWxlY3Q8UmVzdWx0Rm9ybWF0PlxuICAgICAgaW5wdXRJZD17aW5wdXRJZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHVud3JhcCh2LnZhbHVlKSk7XG4gICAgICB9fVxuICAgICAgdmFsdWU9e2Zvcm1hdH1cbiAgICAgIG9wdGlvbnM9e1JFU1VMVF9GT1JNQVRTfVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VnIH0gZnJvbSAnLi9TZWcnO1xuaW1wb3J0IHsgdG9TZWxlY3RhYmxlVmFsdWUgfSBmcm9tICcuL3RvU2VsZWN0YWJsZVZhbHVlJztcblxuY29uc3QgREVGQVVMVF9QT0xJQ1kgPSAnZGVmYXVsdCc7XG5cbi8vIHdlIHVzZSB0aGUgdmFsdWUgXCJkZWZhdWx0XCIgYXMgYSBtYWdpYy12YWx1ZSwgaXQgbWVhbnNcbi8vIHdlIHVzZSB0aGUgZGVmYXVsdCByZXRlbnRpb24tcG9saWN5LlxuLy8gdW5mb3J0dW5hdGVseSwgSUYgdGhlIHVzZXIgaGFzIGEgcmV0ZW50aW9uLXBvbGljeSBuYW1lZCBcImRlZmF1bHRcIixcbi8vIGFuZCBpdCBpcyBub3QgdGhlIGRlZmF1bHQtcmV0ZW50aW9uLXBvbGljeSBpbiBpbmZsdXhkYixcbi8vIGJhZCB0aGluZ3Mgd2lsbCBoYXBwZW4uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9ncmFmYW5hL2lzc3Vlcy80MzQ3IDotKFxuLy8gRklYTUU6IHdlIGNvdWxkIG1heWJlIGF0IGxlYXN0IGRldGVjdCBoZXJlIHRoYXQgcHJvYmxlbS1pcy1oYXBwZW5pbmcsXG4vLyBhbmQgc2hvdyBhbiBlcnJvciBtZXNzYWdlIG9yIHNvbWV0aGluZy5cbi8vIHVuZm9ydHVuYXRlbHksIGN1cnJlbnRseSB0aGUgUmVzcG9uc2VQYXJzZXIgZG9lcyBub3QgcmV0dXJuIHRoZVxuLy8gaXMtZGVmYXVsdCBpbmZvIGZvciB0aGUgcmV0ZW50aW9uLXBvbGljaWVzLCBzbyB0aGF0IHNob3VsZCBjaGFuZ2UgZmlyc3QuXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9uQ2hhbmdlOiAocG9saWN5OiBzdHJpbmcgfCB1bmRlZmluZWQsIG1lYXN1cmVtZW50OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHZvaWQ7XG4gIHBvbGljeTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBtZWFzdXJlbWVudDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBnZXRQb2xpY3lPcHRpb25zOiAoKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbiAgZ2V0TWVhc3VyZW1lbnRPcHRpb25zOiAoZmlsdGVyOiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nW10+O1xufTtcblxuZXhwb3J0IGNvbnN0IEZyb21TZWN0aW9uID0gKHtcbiAgcG9saWN5LFxuICBtZWFzdXJlbWVudCxcbiAgb25DaGFuZ2UsXG4gIGdldFBvbGljeU9wdGlvbnMsXG4gIGdldE1lYXN1cmVtZW50T3B0aW9ucyxcbn06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBoYW5kbGVQb2xpY3lMb2FkT3B0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhbGxQb2xpY2llcyA9IGF3YWl0IGdldFBvbGljeU9wdGlvbnMoKTtcbiAgICAvLyBpZiBgZGVmYXVsdGAgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGxpc3Qgb2YgcG9saWNpZXMsIHdlIGFkZCBpdFxuICAgIGNvbnN0IGFsbFBvbGljaWVzV2l0aERlZmF1bHQgPSBhbGxQb2xpY2llcy5zb21lKChwKSA9PiBwID09PSAnZGVmYXVsdCcpXG4gICAgICA/IGFsbFBvbGljaWVzXG4gICAgICA6IFtERUZBVUxUX1BPTElDWSwgLi4uYWxsUG9saWNpZXNdO1xuXG4gICAgcmV0dXJuIGFsbFBvbGljaWVzV2l0aERlZmF1bHQubWFwKHRvU2VsZWN0YWJsZVZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNZWFzdXJlbWVudExvYWRPcHRpb25zID0gYXN5bmMgKGZpbHRlcjogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgYWxsTWVhc3VyZW1lbnRzID0gYXdhaXQgZ2V0TWVhc3VyZW1lbnRPcHRpb25zKGZpbHRlcik7XG4gICAgcmV0dXJuIGFsbE1lYXN1cmVtZW50cy5tYXAodG9TZWxlY3RhYmxlVmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWdcbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICB2YWx1ZT17cG9saWN5ID8/ICd1c2luZyBkZWZhdWx0IHBvbGljeSd9XG4gICAgICAgIGxvYWRPcHRpb25zPXtoYW5kbGVQb2xpY3lMb2FkT3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2Uodi52YWx1ZSwgbWVhc3VyZW1lbnQpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxTZWdcbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICB2YWx1ZT17bWVhc3VyZW1lbnQgPz8gJ3NlbGVjdCBtZWFzdXJlbWVudCd9XG4gICAgICAgIGxvYWRPcHRpb25zPXtoYW5kbGVNZWFzdXJlbWVudExvYWRPcHRpb25zfVxuICAgICAgICBmaWx0ZXJCeUxvYWRPcHRpb25zXG4gICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgIG9uQ2hhbmdlKHBvbGljeSwgdi52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VTaGFkb3dlZFN0YXRlIH0gZnJvbSAnLi4vdXNlU2hhZG93ZWRTdGF0ZSc7XG5cbmltcG9ydCB7IHBhZGRpbmdSaWdodENsYXNzIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHZvaWQ7XG4gIGlzV2lkZT86IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IElucHV0U2VjdGlvbiA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgaXNXaWRlLCBwbGFjZWhvbGRlciB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW2N1cnJlbnRWYWx1ZSwgc2V0Q3VycmVudFZhbHVlXSA9IHVzZVNoYWRvd2VkU3RhdGUodmFsdWUpO1xuXG4gIGNvbnN0IG9uQmx1ciA9ICgpID0+IHtcbiAgICAvLyB3ZSBzZW5kIGVtcHR5LXN0cmluZyBhcyB1bmRlZmluZWRcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGN1cnJlbnRWYWx1ZSA9PT0gJycgPyB1bmRlZmluZWQgOiBjdXJyZW50VmFsdWU7XG4gICAgb25DaGFuZ2UobmV3VmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y3goaXNXaWRlID8/IGZhbHNlID8gJ3dpZHRoLTE0JyA6ICd3aWR0aC04JywgcGFkZGluZ1JpZ2h0Q2xhc3MpfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHNwZWxsQ2hlY2s9e2ZhbHNlfVxuICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgc2V0Q3VycmVudFZhbHVlKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIHZhbHVlPXtjdXJyZW50VmFsdWUgPz8gJyd9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBwYWRkaW5nUmlnaHRDbGFzcyB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IHVud3JhcCB9IGZyb20gJy4vdW53cmFwJztcblxudHlwZSBNb2RlID0gJ0FTQycgfCAnREVTQyc7XG5cbmNvbnN0IE9QVElPTlM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxNb2RlPj4gPSBbXG4gIHsgbGFiZWw6ICdhc2NlbmRpbmcnLCB2YWx1ZTogJ0FTQycgfSxcbiAgeyBsYWJlbDogJ2Rlc2NlbmRpbmcnLCB2YWx1ZTogJ0RFU0MnIH0sXG5dO1xuXG5jb25zdCBjbGFzc05hbWUgPSBjeCgnd2lkdGgtOScsIHBhZGRpbmdSaWdodENsYXNzKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdmFsdWU6IE1vZGU7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IE1vZGUpID0+IHZvaWQ7XG4gIGlucHV0SWQ/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgT3JkZXJCeVRpbWVTZWN0aW9uID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBpbnB1dElkIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2VsZWN0PE1vZGU+XG4gICAgICAgIGlucHV0SWQ9e2lucHV0SWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh1bndyYXAodi52YWx1ZSkpO1xuICAgICAgICB9fVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9wdGlvbnM9e09QVElPTlN9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSwgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTWVudUl0ZW0sIFdpdGhDb250ZXh0TWVudSwgTWVudUdyb3VwLCB1c2VUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEFkZEJ1dHRvbiB9IGZyb20gJy4vQWRkQnV0dG9uJztcbmltcG9ydCB7IFNlZyB9IGZyb20gJy4vU2VnJztcbmltcG9ydCB7IHRvU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnLi90b1NlbGVjdGFibGVWYWx1ZSc7XG5pbXBvcnQgeyB1bndyYXAgfSBmcm9tICcuL3Vud3JhcCc7XG5cbmV4cG9ydCB0eXBlIFBhcnRQYXJhbXMgPSBBcnJheTx7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9wdGlvbnM6ICgoKSA9PiBQcm9taXNlPHN0cmluZ1tdPikgfCBudWxsO1xufT47XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBhcnRzOiBBcnJheTx7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBhcmFtczogUGFydFBhcmFtcztcbiAgfT47XG4gIGdldE5ld1BhcnRPcHRpb25zOiAoKSA9PiBQcm9taXNlPFNlbGVjdGFibGVWYWx1ZVtdPjtcbiAgb25DaGFuZ2U6IChwYXJ0SW5kZXg6IG51bWJlciwgcGFyYW1WYWx1ZXM6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICBvblJlbW92ZVBhcnQ6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkFkZE5ld1BhcnQ6ICh0eXBlOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5jb25zdCByZW5kZXJSZW1vdmFibGVOYW1lTWVudUl0ZW1zID0gKG9uQ2xpY2s6ICgpID0+IHZvaWQpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWVudUdyb3VwIGxhYmVsPVwiXCI+XG4gICAgICA8TWVudUl0ZW0gbGFiZWw9XCJyZW1vdmVcIiBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuICAgIDwvTWVudUdyb3VwPlxuICApO1xufTtcblxuY29uc3Qgbm9SaWdodE1hcmdpblBhZGRpbmdDbGFzcyA9IGNzcyh7XG4gIHBhZGRpbmdSaWdodDogJzAnLFxuICBtYXJnaW5SaWdodDogJzAnLFxufSk7XG5cbmNvbnN0IFJlbW92YWJsZU5hbWUgPSAoeyBuYW1lLCBvblJlbW92ZSB9OiB7IG5hbWU6IHN0cmluZzsgb25SZW1vdmU6ICgpID0+IHZvaWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXaXRoQ29udGV4dE1lbnUgcmVuZGVyTWVudUl0ZW1zPXsoKSA9PiByZW5kZXJSZW1vdmFibGVOYW1lTWVudUl0ZW1zKG9uUmVtb3ZlKX0+XG4gICAgICB7KHsgb3Blbk1lbnUgfSkgPT4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y3goJ2dmLWZvcm0tbGFiZWwnLCBub1JpZ2h0TWFyZ2luUGFkZGluZ0NsYXNzKX0gb25DbGljaz17b3Blbk1lbnV9PlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9XaXRoQ29udGV4dE1lbnU+XG4gICk7XG59O1xuXG50eXBlIFBhcnRQcm9wcyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwYXJhbXM6IFBhcnRQYXJhbXM7XG4gIG9uUmVtb3ZlOiAoKSA9PiB2b2lkO1xuICBvbkNoYW5nZTogKHBhcmFtVmFsdWVzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IG5vSG9yaXpNYXJnaW5QYWRkaW5nQ2xhc3MgPSBjc3Moe1xuICBwYWRkaW5nTGVmdDogJzAnLFxuICBwYWRkaW5nUmlnaHQ6ICcwJyxcbiAgbWFyZ2luTGVmdDogJzAnLFxuICBtYXJnaW5SaWdodDogJzAnLFxufSk7XG5cbmNvbnN0IGdldFBhcnRDbGFzcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4gY3goXG4gICAgJ2dmLWZvcm0tbGFiZWwnLFxuICAgIGNzcyh7XG4gICAgICBwYWRkaW5nTGVmdDogJzAnLFxuICAgICAgLy8gZ2YtZm9ybS1sYWJlbCBjbGFzcyBtYWtlcyBjZXJ0YWluIGNzcyBhdHRyaWJ1dGVzIGluY29ycmVjdFxuICAgICAgLy8gZm9yIHRoZSBzZWxlY3Rib3gtZHJvcGRvd24sIHNvIHdlIGhhdmUgdG8gXCJyZXNldFwiIHRoZW0gYmFja1xuICAgICAgbGluZUhlaWdodDogdGhlbWUudHlwb2dyYXBoeS5ib2R5LmxpbmVIZWlnaHQsXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5ib2R5LmZvbnRTaXplLFxuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBQYXJ0ID0gKHsgbmFtZSwgcGFyYW1zLCBvbkNoYW5nZSwgb25SZW1vdmUgfTogUGFydFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBwYXJ0Q2xhc3MgPSB1c2VNZW1vKCgpID0+IGdldFBhcnRDbGFzcyh0aGVtZSksIFt0aGVtZV0pO1xuXG4gIGNvbnN0IG9uUGFyYW1DaGFuZ2UgPSAocGFyOiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHBhcmFtcy5tYXAoKHApID0+IHAudmFsdWUpO1xuICAgIG5ld1BhcmFtc1tpXSA9IHBhcjtcbiAgICBvbkNoYW5nZShuZXdQYXJhbXMpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtwYXJ0Q2xhc3N9PlxuICAgICAgPFJlbW92YWJsZU5hbWUgbmFtZT17bmFtZX0gb25SZW1vdmU9e29uUmVtb3ZlfSAvPihcbiAgICAgIHtwYXJhbXMubWFwKChwLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG9wdGlvbnMgfSA9IHA7XG4gICAgICAgIGNvbnN0IGlzTGFzdCA9IGkgPT09IHBhcmFtcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBsb2FkT3B0aW9ucyA9XG4gICAgICAgICAgb3B0aW9ucyAhPT0gbnVsbCA/ICgpID0+IG9wdGlvbnMoKS50aGVuKChpdGVtcykgPT4gaXRlbXMubWFwKHRvU2VsZWN0YWJsZVZhbHVlKSkgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICA8U2VnXG4gICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICBidXR0b25DbGFzc05hbWU9e25vSG9yaXpNYXJnaW5QYWRkaW5nQ2xhc3N9XG4gICAgICAgICAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICAgICAgb25QYXJhbUNoYW5nZSh1bndyYXAodi52YWx1ZSksIGkpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaXNMYXN0ICYmICcsJ31cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgICApXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgUGFydExpc3RTZWN0aW9uID0gKHtcbiAgcGFydHMsXG4gIGdldE5ld1BhcnRPcHRpb25zLFxuICBvbkFkZE5ld1BhcnQsXG4gIG9uUmVtb3ZlUGFydCxcbiAgb25DaGFuZ2UsXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3BhcnRzLm1hcCgocGFydCwgaW5kZXgpID0+IChcbiAgICAgICAgPFBhcnRcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIG5hbWU9e3BhcnQubmFtZX1cbiAgICAgICAgICBwYXJhbXM9e3BhcnQucGFyYW1zfVxuICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICBvblJlbW92ZVBhcnQoaW5kZXgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DaGFuZ2U9eyhwYXJzKSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZShpbmRleCwgcGFycyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgICAgPEFkZEJ1dHRvbiBsb2FkT3B0aW9ucz17Z2V0TmV3UGFydE9wdGlvbnN9IG9uQWRkPXtvbkFkZE5ld1BhcnR9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgZGVib3VuY2VQcm9taXNlIGZyb20gJ2RlYm91bmNlLXByb21pc2UnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBc3luY0ZuIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJbmxpbmVMYWJlbCwgU2VsZWN0LCBBc3luY1NlbGVjdCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IHVzZVNoYWRvd2VkU3RhdGUgfSBmcm9tICcuLi91c2VTaGFkb3dlZFN0YXRlJztcblxuLy8gdGhpcyBmaWxlIGlzIGEgc2ltcGxlciB2ZXJzaW9uIG9mIGBncmFmYW5hLXVpIC8gU2VnbWVudEFzeW5jLnRzeGBcbi8vIHdpdGggc29tZSBjaGFuZ2VzOlxuLy8gMS4gY2xpY2stb3V0c2lkZSBkb2VzIG5vdCBzZWxlY3QgdGhlIHZhbHVlLiBpIHRoaW5rIGl0J3MgYmV0dGVyIHRvIGJlIGV4cGxpY2l0IGhlcmUuXG4vLyAyLiB3ZSBzZXQgYSBtaW4td2lkdGggb24gdGhlIHNlbGVjdC1lbGVtZW50IHRvIGhhbmRsZSBjYXNlcyB3aGVyZSB0aGUgYHZhbHVlYFxuLy8gICAgaXMgdmVyeSBzaG9ydCwgbGlrZSBcInhcIiwgYW5kIHRoZW4geW91IGNsaWNrIG9uIGl0IGFuZCB0aGUgc2VsZWN0IG9wZW5zLFxuLy8gICAgYW5kIGl0IHRyaWVzIHRvIGJlIGFzIHNob3J0IGFzIFwieFwiIGFuZCBpdCBkb2VzIG5vdCB3b3JrIHdlbGwuXG5cbi8vIE5PVEU6IG1heWJlIHRoZXNlIGNoYW5nZXMgY291bGQgYmUgbWlncmF0ZWQgaW50byB0aGUgU2VnbWVudEFzeW5jIGxhdGVyXG5cbnR5cGUgU2VsVmFsID0gU2VsZWN0YWJsZVZhbHVlPHN0cmluZz47XG5cbi8vIHdoZW4gYWxsb3dDdXN0b21WYWx1ZSBpcyB0cnVlLCB0aGVyZSBpcyBubyB3YXkgdG8gZW5mb3JjZSB0aGUgc2VsZWN0YWJsZVZhbHVlXG4vLyBlbnVtLXR5cGUsIHNvIGkganVzdCBnbyB3aXRoIGBzdHJpbmdgXG5cbnR5cGUgTG9hZE9wdGlvbnMgPSAoZmlsdGVyOiBzdHJpbmcpID0+IFByb21pc2U8U2VsVmFsW10+O1xuXG50eXBlIFByb3BzID0ge1xuICB2YWx1ZTogc3RyaW5nO1xuICBidXR0b25DbGFzc05hbWU/OiBzdHJpbmc7XG4gIGxvYWRPcHRpb25zPzogTG9hZE9wdGlvbnM7XG4gIC8vIGlmIGZpbHRlckJ5TG9hZE9wdGlvbnMgaXMgZmFsc2UsXG4gIC8vIGxvYWRPcHRpb25zIGlzIG9ubHkgZXhlY3V0ZWQgb25jZSxcbiAgLy8gd2hlbiB0aGUgc2VsZWN0LWJveCBvcGVucyxcbiAgLy8gYW5kIGFzIHlvdSB3cml0ZSwgdGhlIGxpc3QgZ2V0cyBmaWx0ZXJlZFxuICAvLyBieSB0aGUgc2VsZWN0LWJveC5cbiAgLy8gaWYgZmlsdGVyQnlMb2FkT3B0aW9ucyBpcyB0cnVlLFxuICAvLyBhcyB5b3Ugd3JpdGUgdGhlIGxvYWRPcHRpb25zIGlzIGV4ZWN1dGVkIGFnYWluIGFuZCBhZ2FpbixcbiAgLy8gYW5kIGl0IGlzIHJlbGllZCBvbiB0byBmaWx0ZXIgdGhlIHJlc3VsdHMuXG4gIGZpbHRlckJ5TG9hZE9wdGlvbnM/OiBib29sZWFuO1xuICBvbkNoYW5nZTogKHY6IFNlbFZhbCkgPT4gdm9pZDtcbiAgYWxsb3dDdXN0b21WYWx1ZT86IGJvb2xlYW47XG59O1xuXG5jb25zdCBzZWxlY3RDbGFzcyA9IGNzcyh7XG4gIG1pbldpZHRoOiAnMTYwcHgnLFxufSk7XG5cbnR5cGUgU2VsUHJvcHMgPSB7XG4gIGxvYWRPcHRpb25zOiBMb2FkT3B0aW9ucztcbiAgZmlsdGVyQnlMb2FkT3B0aW9ucz86IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlOiAodjogU2VsVmFsKSA9PiB2b2lkO1xuICBhbGxvd0N1c3RvbVZhbHVlPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgU2VsUmVsb2FkUHJvcHMgPSB7XG4gIGxvYWRPcHRpb25zOiAoZmlsdGVyOiBzdHJpbmcpID0+IFByb21pc2U8U2VsVmFsW10+O1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkNoYW5nZTogKHY6IFNlbFZhbCkgPT4gdm9pZDtcbiAgYWxsb3dDdXN0b21WYWx1ZT86IGJvb2xlYW47XG59O1xuXG4vLyB3aGVuIGEgY3VzdG9tIHZhbHVlIGlzIHdyaXR0ZW4gaW50byBhIHNlbGVjdC1ib3gsXG4vLyBieSBkZWZhdWx0IHRoZSBuZXcgdmFsdWUgaXMgcHJlZml4ZWQgd2l0aCBcIkNyZWF0ZTpcIixcbi8vIGFuZCB0aGF0IHNvdW5kcyBjb25mdXNpbmcgYmVjYXVzZSBoZXJlIHdlIGRvIG5vdCBjcmVhdGVcbi8vIGFueXRoaW5nLiB3ZSBjaGFuZ2UgdGhpcyB0byBqdXN0IGJlIHRoZSBlbnRlcmVkIHN0cmluZy5cbmNvbnN0IGZvcm1hdENyZWF0ZUxhYmVsID0gKHY6IHN0cmluZykgPT4gdjtcblxuY29uc3QgU2VsUmVsb2FkID0gKHsgbG9hZE9wdGlvbnMsIGFsbG93Q3VzdG9tVmFsdWUsIG9uQ2hhbmdlLCBvbkNsb3NlIH06IFNlbFJlbG9hZFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICAvLyBoZXJlIHdlIHJlbHkgb24gdGhlIGZhY3QgdGhhdCB3cml0aW5nIHRleHQgaW50byB0aGUgPEFzeW5jU2VsZWN0Lz5cbiAgLy8gZG9lcyBub3QgY2F1c2UgYSByZS1yZW5kZXIgb2YgdGhlIGN1cnJlbnQgcmVhY3QgY29tcG9uZW50LlxuICAvLyB0aGlzIHdheSB0aGVyZSBpcyBvbmx5IGEgc2luZ2xlIHJlbmRlci1jYWxsLFxuICAvLyBzbyB0aGVyZSBpcyBvbmx5IGEgc2luZ2xlIGBkZWJvdW5jZWRMb2FkT3B0aW9uc2AuXG4gIC8vIGlmIHdlIHdhbnQgb3QgbWFrZSB0aGlzIFwicmUtcmVuZGVyIHNhZmUsXG4gIC8vIHdlIHdpbGwgaGF2ZSB0byBwdXQgdGhlIGRlYm91bmNlZCBjYWxsIGludG8gYW4gdXNlUmVmLFxuICAvLyBhbmQgcHJvYmFibHkgaGF2ZSBhbiB1c2VFZmZlY3RcbiAgY29uc3QgZGVib3VuY2VkTG9hZE9wdGlvbnMgPSBkZWJvdW5jZVByb21pc2UobG9hZE9wdGlvbnMsIDEwMDAsIHsgbGVhZGluZzogdHJ1ZSB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c2VsZWN0Q2xhc3N9PlxuICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXtmb3JtYXRDcmVhdGVMYWJlbH1cbiAgICAgICAgZGVmYXVsdE9wdGlvbnNcbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIGlzT3BlblxuICAgICAgICBvbkNsb3NlTWVudT17b25DbG9zZX1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17YWxsb3dDdXN0b21WYWx1ZX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2RlYm91bmNlZExvYWRPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBTZWxTaW5nbGVMb2FkUHJvcHMgPSB7XG4gIGxvYWRPcHRpb25zOiAoZmlsdGVyOiBzdHJpbmcpID0+IFByb21pc2U8U2VsVmFsW10+O1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkNoYW5nZTogKHY6IFNlbFZhbCkgPT4gdm9pZDtcbiAgYWxsb3dDdXN0b21WYWx1ZT86IGJvb2xlYW47XG59O1xuXG5jb25zdCBTZWxTaW5nbGVMb2FkID0gKHsgbG9hZE9wdGlvbnMsIGFsbG93Q3VzdG9tVmFsdWUsIG9uQ2hhbmdlLCBvbkNsb3NlIH06IFNlbFNpbmdsZUxvYWRQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW2xvYWRTdGF0ZSwgZG9Mb2FkXSA9IHVzZUFzeW5jRm4obG9hZE9wdGlvbnMsIFtsb2FkT3B0aW9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9Mb2FkKCcnKTtcbiAgfSwgW2RvTG9hZCwgbG9hZE9wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzZWxlY3RDbGFzc30+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIGlzTG9hZGluZz17bG9hZFN0YXRlLmxvYWRpbmd9XG4gICAgICAgIGZvcm1hdENyZWF0ZUxhYmVsPXtmb3JtYXRDcmVhdGVMYWJlbH1cbiAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgIGlzT3BlblxuICAgICAgICBvbkNsb3NlTWVudT17b25DbG9zZX1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17YWxsb3dDdXN0b21WYWx1ZX1cbiAgICAgICAgb3B0aW9ucz17bG9hZFN0YXRlLnZhbHVlID8/IFtdfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgU2VsID0gKHsgbG9hZE9wdGlvbnMsIGZpbHRlckJ5TG9hZE9wdGlvbnMsIGFsbG93Q3VzdG9tVmFsdWUsIG9uQ2hhbmdlLCBvbkNsb3NlIH06IFNlbFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICAvLyB1bmZvcnR1bmF0ZWx5IDxTZWdtZW50Lz4gYW5kIDxTZWdtZW50QXN5bmMvPiBoYXZlIHNvbWV3aGF0IGRpZmZlcmVudCBiZWhhdmlvcixcbiAgLy8gc28gdGhlIHNpbXBsZXN0IGFwcHJvYWNoIHdhcyB0byBqdXN0IGNyZWF0ZSB0d28gc2VwYXJhdGUgd3JhcHBlci1jb21wb25lbnRzXG4gIHJldHVybiBmaWx0ZXJCeUxvYWRPcHRpb25zID8gKFxuICAgIDxTZWxSZWxvYWQgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zfSBhbGxvd0N1c3RvbVZhbHVlPXthbGxvd0N1c3RvbVZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+XG4gICkgOiAoXG4gICAgPFNlbFNpbmdsZUxvYWRcbiAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uc31cbiAgICAgIGFsbG93Q3VzdG9tVmFsdWU9e2FsbG93Q3VzdG9tVmFsdWV9XG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgIC8+XG4gICk7XG59O1xuXG50eXBlIElucFByb3BzID0ge1xuICBpbml0aWFsVmFsdWU6IHN0cmluZztcbiAgb25DaGFuZ2U6IChuZXdWYWw6IHN0cmluZykgPT4gdm9pZDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IElucCA9ICh7IGluaXRpYWxWYWx1ZSwgb25DaGFuZ2UsIG9uQ2xvc2UgfTogSW5wUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IFtjdXJyZW50VmFsdWUsIHNldEN1cnJlbnRWYWx1ZV0gPSB1c2VTaGFkb3dlZFN0YXRlKGluaXRpYWxWYWx1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRcbiAgICAgIGF1dG9Gb2N1c1xuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICBvbkJsdXI9e29uQ2xvc2V9XG4gICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgIG9uQ2hhbmdlKGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFZhbHVlKGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICB9fVxuICAgICAgdmFsdWU9e2N1cnJlbnRWYWx1ZX1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgZGVmYXVsdEJ1dHRvbkNsYXNzID0gY3NzKHtcbiAgd2lkdGg6ICdhdXRvJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG59KTtcblxuZXhwb3J0IGNvbnN0IFNlZyA9ICh7XG4gIHZhbHVlLFxuICBidXR0b25DbGFzc05hbWUsXG4gIGxvYWRPcHRpb25zLFxuICBmaWx0ZXJCeUxvYWRPcHRpb25zLFxuICBhbGxvd0N1c3RvbVZhbHVlLFxuICBvbkNoYW5nZSxcbn06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgaWYgKCFpc09wZW4pIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjeChkZWZhdWx0QnV0dG9uQ2xhc3MsIGJ1dHRvbkNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbmxpbmVMYWJlbFxuICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc2V0T3Blbih0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGlmIChsb2FkT3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2VsXG4gICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zfVxuICAgICAgICAgIGZpbHRlckJ5TG9hZE9wdGlvbnM9e2ZpbHRlckJ5TG9hZE9wdGlvbnMgPz8gZmFsc2V9XG4gICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17YWxsb3dDdXN0b21WYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgb25DaGFuZ2Uodik7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucFxuICAgICAgICAgIGluaXRpYWxWYWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgb25DaGFuZ2UoeyB2YWx1ZTogdiwgbGFiZWw6IHYgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEluZmx1eFF1ZXJ5VGFnIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBBZGRCdXR0b24gfSBmcm9tICcuL0FkZEJ1dHRvbic7XG5pbXBvcnQgeyBTZWcgfSBmcm9tICcuL1NlZyc7XG5pbXBvcnQgeyBhZGp1c3RPcGVyYXRvcklmTmVlZGVkLCBnZXRDb25kaXRpb24sIGdldE9wZXJhdG9yIH0gZnJvbSAnLi90YWdVdGlscyc7XG5pbXBvcnQgeyB0b1NlbGVjdGFibGVWYWx1ZSB9IGZyb20gJy4vdG9TZWxlY3RhYmxlVmFsdWUnO1xuXG50eXBlIEtub3duT3BlcmF0b3IgPSAnPScgfCAnIT0nIHwgJzw+JyB8ICc8JyB8ICc+JyB8ICc9ficgfCAnIX4nO1xuY29uc3Qga25vd25PcGVyYXRvcnM6IEtub3duT3BlcmF0b3JbXSA9IFsnPScsICchPScsICc8PicsICc8JywgJz4nLCAnPX4nLCAnIX4nXTtcblxudHlwZSBLbm93bkNvbmRpdGlvbiA9ICdBTkQnIHwgJ09SJztcbmNvbnN0IGtub3duQ29uZGl0aW9uczogS25vd25Db25kaXRpb25bXSA9IFsnQU5EJywgJ09SJ107XG5cbmNvbnN0IG9wZXJhdG9yT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPEtub3duT3BlcmF0b3I+PiA9IGtub3duT3BlcmF0b3JzLm1hcCh0b1NlbGVjdGFibGVWYWx1ZSk7XG5jb25zdCBjb25kaXRpdG9uT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPEtub3duQ29uZGl0aW9uPj4gPSBrbm93bkNvbmRpdGlvbnMubWFwKHRvU2VsZWN0YWJsZVZhbHVlKTtcblxudHlwZSBQcm9wcyA9IHtcbiAgdGFnczogSW5mbHV4UXVlcnlUYWdbXTtcbiAgb25DaGFuZ2U6ICh0YWdzOiBJbmZsdXhRdWVyeVRhZ1tdKSA9PiB2b2lkO1xuICBnZXRUYWdLZXlPcHRpb25zOiAoKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbiAgZ2V0VGFnVmFsdWVPcHRpb25zOiAoa2V5OiBzdHJpbmcpID0+IFByb21pc2U8c3RyaW5nW10+O1xufTtcblxudHlwZSBUYWdQcm9wcyA9IHtcbiAgdGFnOiBJbmZsdXhRdWVyeVRhZztcbiAgaXNGaXJzdDogYm9vbGVhbjtcbiAgb25SZW1vdmU6ICgpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlOiAodGFnOiBJbmZsdXhRdWVyeVRhZykgPT4gdm9pZDtcbiAgZ2V0VGFnS2V5T3B0aW9uczogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT47XG4gIGdldFRhZ1ZhbHVlT3B0aW9uczogKGtleTogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbn07XG5cbmNvbnN0IGxvYWRDb25kaXRpb25PcHRpb25zID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGNvbmRpdGl0b25PcHRpb25zKTtcblxuY29uc3QgbG9hZE9wZXJhdG9yT3B0aW9ucyA9ICgpID0+IFByb21pc2UucmVzb2x2ZShvcGVyYXRvck9wdGlvbnMpO1xuXG5jb25zdCBUYWcgPSAoeyB0YWcsIGlzRmlyc3QsIG9uUmVtb3ZlLCBvbkNoYW5nZSwgZ2V0VGFnS2V5T3B0aW9ucywgZ2V0VGFnVmFsdWVPcHRpb25zIH06IFRhZ1Byb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBvcGVyYXRvciA9IGdldE9wZXJhdG9yKHRhZyk7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGdldENvbmRpdGlvbih0YWcsIGlzRmlyc3QpO1xuXG4gIGNvbnN0IGdldFRhZ0tleVNlZ21lbnRPcHRpb25zID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRUYWdLZXlPcHRpb25zKClcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIC8vIGluIHRoaXMgVUkgZWxlbWVudCB3ZSBhZGQgYSBzcGVjaWFsIGl0ZW0gdG8gdGhlIGxpc3Qgb2Ygb3B0aW9ucyxcbiAgICAgICAgLy8gdGhhdCBpcyB1c2VkIHRvIHJlbW92ZSB0aGUgZWxlbWVudC5cbiAgICAgICAgLy8gdGhpcyBjYXVzZXMgYSBwcm9ibGVtOiBpZiBgZ2V0VGFnS2V5T3B0aW9uc2AgZmFpbHMgd2l0aCBhbiBlcnJvcixcbiAgICAgICAgLy8gdGhlIHJlbW92ZS1maWx0ZXIgb3B0aW9uIGlzIG5ldmVyIGFkZGVkIHRvIHRoZSBsaXN0LFxuICAgICAgICAvLyBhbmQgdGhlIFVJIGVsZW1lbnQgY2FuIG5vdCBiZSByZW1vdmVkLlxuICAgICAgICAvLyB0byBhdm9pZCBpdCwgd2UgY2F0Y2ggYW55IHBvdGVudGlhbCBlcnJvcnMgY29taW5nIGZyb20gYGdldFRhZ0tleU9wdGlvbnNgLFxuICAgICAgICAvLyBsb2cgdGhlIGVycm9yLCBhbmQgcHJldGVuZCB0aGF0IHRoZSBsaXN0IG9mIG9wdGlvbnMgaXMgYW4gZW1wdHkgbGlzdC5cbiAgICAgICAgLy8gdGhpcyB3YXkgdGhlIHJlbW92ZS1pdGVtIG9wdGlvbiBjYW4gYWx3YXlzIGJlIGFkZGVkIHRvIHRoZSBsaXN0LlxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0pXG4gICAgICAudGhlbigodGFncykgPT4gW3sgbGFiZWw6ICctLSByZW1vdmUgZmlsdGVyIC0tJywgdmFsdWU6IHVuZGVmaW5lZCB9LCAuLi50YWdzLm1hcCh0b1NlbGVjdGFibGVWYWx1ZSldKTtcbiAgfTtcblxuICBjb25zdCBnZXRUYWdWYWx1ZVNlZ21lbnRPcHRpb25zID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRUYWdWYWx1ZU9wdGlvbnModGFnLmtleSkudGhlbigodGFncykgPT4gdGFncy5tYXAodG9TZWxlY3RhYmxlVmFsdWUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAge2NvbmRpdGlvbiAhPSBudWxsICYmIChcbiAgICAgICAgPFNlZ1xuICAgICAgICAgIHZhbHVlPXtjb25kaXRpb259XG4gICAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRDb25kaXRpb25PcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi50YWcsIGNvbmRpdGlvbjogdi52YWx1ZSB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxTZWdcbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICB2YWx1ZT17dGFnLmtleX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2dldFRhZ0tleVNlZ21lbnRPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB2O1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvblJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkNoYW5nZSh7IC4uLnRhZywga2V5OiB2YWx1ZSA/PyAnJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPFNlZ1xuICAgICAgICB2YWx1ZT17b3BlcmF0b3J9XG4gICAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3BlcmF0b3JPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17KG9wKSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi50YWcsIG9wZXJhdG9yOiBvcC52YWx1ZSB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8U2VnXG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgdmFsdWU9e3RhZy52YWx1ZX1cbiAgICAgICAgbG9hZE9wdGlvbnM9e2dldFRhZ1ZhbHVlU2VnbWVudE9wdGlvbnN9XG4gICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdi52YWx1ZSA/PyAnJztcbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnRhZywgdmFsdWUsIG9wZXJhdG9yOiBhZGp1c3RPcGVyYXRvcklmTmVlZGVkKG9wZXJhdG9yLCB2YWx1ZSkgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFRhZ3NTZWN0aW9uID0gKHsgdGFncywgb25DaGFuZ2UsIGdldFRhZ0tleU9wdGlvbnMsIGdldFRhZ1ZhbHVlT3B0aW9ucyB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3Qgb25UYWdDaGFuZ2UgPSAobmV3VGFnOiBJbmZsdXhRdWVyeVRhZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld1RhZ3MgPSB0YWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgICByZXR1cm4gaW5kZXggPT09IGkgPyBuZXdUYWcgOiB0YWc7XG4gICAgfSk7XG4gICAgb25DaGFuZ2UobmV3VGFncyk7XG4gIH07XG5cbiAgY29uc3Qgb25UYWdSZW1vdmUgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5ld1RhZ3MgPSB0YWdzLmZpbHRlcigodCwgaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgIG9uQ2hhbmdlKG5ld1RhZ3MpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRhZ0tleVNlZ21lbnRPcHRpb25zID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRUYWdLZXlPcHRpb25zKCkudGhlbigodGFncykgPT4gdGFncy5tYXAodG9TZWxlY3RhYmxlVmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBhZGROZXdUYWcgPSAodGFnS2V5OiBzdHJpbmcsIGlzRmlyc3Q6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBtaW5pbWFsVGFnOiBJbmZsdXhRdWVyeVRhZyA9IHtcbiAgICAgIGtleTogdGFnS2V5LFxuICAgICAgdmFsdWU6ICdzZWxlY3QgdGFnIHZhbHVlJyxcbiAgICB9O1xuXG4gICAgY29uc3QgbmV3VGFnOiBJbmZsdXhRdWVyeVRhZyA9IHtcbiAgICAgIGtleTogbWluaW1hbFRhZy5rZXksXG4gICAgICB2YWx1ZTogbWluaW1hbFRhZy52YWx1ZSxcbiAgICAgIG9wZXJhdG9yOiBnZXRPcGVyYXRvcihtaW5pbWFsVGFnKSxcbiAgICAgIGNvbmRpdGlvbjogZ2V0Q29uZGl0aW9uKG1pbmltYWxUYWcsIGlzRmlyc3QpLFxuICAgIH07XG5cbiAgICBvbkNoYW5nZShbLi4udGFncywgbmV3VGFnXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RhZ3MubWFwKCh0LCBpKSA9PiAoXG4gICAgICAgIDxUYWdcbiAgICAgICAgICB0YWc9e3R9XG4gICAgICAgICAgaXNGaXJzdD17aSA9PT0gMH1cbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgb25DaGFuZ2U9eyhuZXdUKSA9PiB7XG4gICAgICAgICAgICBvblRhZ0NoYW5nZShuZXdULCBpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB7XG4gICAgICAgICAgICBvblRhZ1JlbW92ZShpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGdldFRhZ0tleU9wdGlvbnM9e2dldFRhZ0tleU9wdGlvbnN9XG4gICAgICAgICAgZ2V0VGFnVmFsdWVPcHRpb25zPXtnZXRUYWdWYWx1ZU9wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIDxBZGRCdXR0b25cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICBsb2FkT3B0aW9ucz17Z2V0VGFnS2V5U2VnbWVudE9wdGlvbnN9XG4gICAgICAgIG9uQWRkPXsodikgPT4ge1xuICAgICAgICAgIGFkZE5ld1RhZyh2LCB0YWdzLmxlbmd0aCA9PT0gMCk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUXVlcnlQYXJ0RGVmIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3N0YXRlL3F1ZXJ5X3BhcnQnO1xuXG5pbXBvcnQgSW5mbHV4UXVlcnlNb2RlbCBmcm9tICcuLi8uLi9pbmZsdXhfcXVlcnlfbW9kZWwnO1xuaW1wb3J0IHF1ZXJ5UGFydCBmcm9tICcuLi8uLi9xdWVyeV9wYXJ0JztcbmltcG9ydCB7IEluZmx1eFF1ZXJ5LCBJbmZsdXhRdWVyeVBhcnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IFBhcnRQYXJhbXMgfSBmcm9tICcuL1BhcnRMaXN0U2VjdGlvbic7XG5pbXBvcnQgeyB0b1NlbGVjdGFibGVWYWx1ZSB9IGZyb20gJy4vdG9TZWxlY3RhYmxlVmFsdWUnO1xuaW1wb3J0IHsgdW53cmFwIH0gZnJvbSAnLi91bndyYXAnO1xuXG50eXBlIENhdGVnb3JpZXMgPSBSZWNvcmQ8c3RyaW5nLCBRdWVyeVBhcnREZWZbXT47XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdTZWxlY3RQYXJ0T3B0aW9ucygpOiBTZWxlY3RhYmxlVmFsdWVbXSB7XG4gIGNvbnN0IGNhdGVnb3JpZXM6IENhdGVnb3JpZXMgPSBxdWVyeVBhcnQuZ2V0Q2F0ZWdvcmllcygpO1xuICBjb25zdCBvcHRpb25zOiBTZWxlY3RhYmxlVmFsdWVbXSA9IFtdO1xuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjYXRlZ29yaWVzKTtcblxuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuOiBTZWxlY3RhYmxlVmFsdWVbXSA9IGNhdGVnb3JpZXNba2V5XS5tYXAoKHgpID0+IHRvU2VsZWN0YWJsZVZhbHVlKHgudHlwZSkpO1xuXG4gICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgIGxhYmVsOiBrZXksXG4gICAgICBvcHRpb25zOiBjaGlsZHJlbixcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROZXdHcm91cEJ5UGFydE9wdGlvbnMoXG4gIHF1ZXJ5OiBJbmZsdXhRdWVyeSxcbiAgZ2V0VGFnS2V5czogKCkgPT4gUHJvbWlzZTxzdHJpbmdbXT5cbik6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PiB7XG4gIGNvbnN0IHRhZ0tleXMgPSBhd2FpdCBnZXRUYWdLZXlzKCk7XG4gIGNvbnN0IHF1ZXJ5Q29weSA9IHsgLi4ucXVlcnkgfTsgLy8gdGhlIHF1ZXJ5LW1vZGVsIG11dGF0ZXMgdGhlIHF1ZXJ5XG4gIGNvbnN0IG1vZGVsID0gbmV3IEluZmx1eFF1ZXJ5TW9kZWwocXVlcnlDb3B5KTtcbiAgY29uc3Qgb3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0gW107XG4gIGlmICghbW9kZWwuaGFzRmlsbCgpKSB7XG4gICAgb3B0aW9ucy5wdXNoKHRvU2VsZWN0YWJsZVZhbHVlKCdmaWxsKG51bGwpJykpO1xuICB9XG4gIGlmICghbW9kZWwuaGFzR3JvdXBCeVRpbWUoKSkge1xuICAgIG9wdGlvbnMucHVzaCh0b1NlbGVjdGFibGVWYWx1ZSgndGltZSgkaW50ZXJ2YWwpJykpO1xuICB9XG4gIHRhZ0tleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgb3B0aW9ucy5wdXNoKHRvU2VsZWN0YWJsZVZhbHVlKGB0YWcoJHtrZXl9KWApKTtcbiAgfSk7XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG50eXBlIFBhcnQgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFyYW1zOiBQYXJ0UGFyYW1zO1xufTtcblxuZnVuY3Rpb24gZ2V0UGFydFBhcmFtcyhwYXJ0OiBJbmZsdXhRdWVyeVBhcnQsIGR5bmFtaWNQYXJhbU9wdGlvbnM6IE1hcDxzdHJpbmcsICgpID0+IFByb21pc2U8c3RyaW5nW10+Pik6IFBhcnRQYXJhbXMge1xuICAvLyBOT1RFOiB0aGUgd2F5IHRoZSBzeXN0ZW0gaXMgY29uc3RydWN0ZWQsXG4gIC8vIHRoZXJlIGFsd2F5cyBjYW4gb25seSBiZSBvbmUgcG9zc2libGUgZHluYW1pYy1sb29rdXBcbiAgLy8gZmllbGQuIGluIGNhc2Ugb2Ygc2VsZWN0IGl0IGlzIHRoZSBmaWVsZCxcbiAgLy8gaW4gY2FzZSBvZiBncm91cC1ieSBpdCBpcyB0aGUgdGFnXG4gIGNvbnN0IGRlZiA9IHF1ZXJ5UGFydC5jcmVhdGUocGFydCkuZGVmO1xuXG4gIC8vIHdlIHN3aXRjaCB0aGUgbnVtYmVycyB0byBzdHJpbmdzLCBpdCB3aWxsIHdvcmsgdGhhdCB3YXkgdG9vLFxuICAvLyBhbmQgaXQgbWFrZXMgdGhlIGNvZGUgc2ltcGxlclxuICBjb25zdCBwYXJhbVZhbHVlcyA9IChwYXJ0LnBhcmFtcyA/PyBbXSkubWFwKChwKSA9PiBwLnRvU3RyaW5nKCkpO1xuXG4gIGlmIChwYXJhbVZhbHVlcy5sZW5ndGggIT09IGRlZi5wYXJhbXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHF1ZXJ5LXNlZ21lbnQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbVZhbHVlcy5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkZWZQYXJhbSA9IGRlZi5wYXJhbXNbaW5kZXhdO1xuICAgIGlmIChkZWZQYXJhbS5keW5hbWljTG9va3VwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICBvcHRpb25zOiB1bndyYXAoZHluYW1pY1BhcmFtT3B0aW9ucy5nZXQoYCR7ZGVmLnR5cGV9XyR7aW5kZXh9YCkpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoZGVmUGFyYW0ub3B0aW9ucyAhPSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdmFsLFxuICAgICAgICBvcHRpb25zOiAoKSA9PiBQcm9taXNlLnJlc29sdmUoZGVmUGFyYW0ub3B0aW9ucyksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsLFxuICAgICAgb3B0aW9uczogbnVsbCxcbiAgICB9O1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXJ0TGlzdChcbiAgcXVlcnlQYXJ0czogSW5mbHV4UXVlcnlQYXJ0W10sXG4gIGR5bmFtaWNQYXJhbU9wdGlvbnM6IE1hcDxzdHJpbmcsICgpID0+IFByb21pc2U8c3RyaW5nW10+PlxuKTogUGFydFtdIHtcbiAgcmV0dXJuIHF1ZXJ5UGFydHMubWFwKChxcCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBxcC50eXBlLFxuICAgICAgcGFyYW1zOiBnZXRQYXJ0UGFyYW1zKHFwLCBkeW5hbWljUGFyYW1PcHRpb25zKSxcbiAgICB9O1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5cbmV4cG9ydCBjb25zdCBwYWRkaW5nUmlnaHRDbGFzcyA9IGNzcyh7XG4gIHBhZGRpbmdSaWdodDogJzRweCcsXG59KTtcbiIsImltcG9ydCB7IEluZmx1eFF1ZXJ5VGFnIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5mdW5jdGlvbiBpc1JlZ2V4KHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gL15cXC8uKlxcLyQvLnRlc3QodGV4dCk7XG59XG5cbi8vIEZJWE1FOiBzeW5jIHRoZXNlIHRvIHRoZSBxdWVyeS1zdHJpbmctZ2VuZXJhdGlvbi1jb2RlXG4vLyBwcm9iYWJseSBpdCdzIGluIGluZmx1eF9xdWVyeV9tb2RlbC50c1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9wZXJhdG9yKHRhZzogSW5mbHV4UXVlcnlUYWcpOiBzdHJpbmcge1xuICByZXR1cm4gdGFnLm9wZXJhdG9yID8/IChpc1JlZ2V4KHRhZy52YWx1ZSkgPyAnPX4nIDogJz0nKTtcbn1cblxuLy8gRklYTUU6IHN5bmMgdGhlc2UgdG8gdGhlIHF1ZXJ5LXN0cmluZy1nZW5lcmF0aW9uLWNvZGVcbi8vIHByb2JhYmx5IGl0J3MgaW4gaW5mbHV4X3F1ZXJ5X21vZGVsLnRzXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZGl0aW9uKHRhZzogSW5mbHV4UXVlcnlUYWcsIGlzRmlyc3Q6IGJvb2xlYW4pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICByZXR1cm4gaXNGaXJzdCA/IHVuZGVmaW5lZCA6IHRhZy5jb25kaXRpb24gPz8gJ0FORCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGp1c3RPcGVyYXRvcklmTmVlZGVkKGN1cnJlbnRPcGVyYXRvcjogc3RyaW5nLCBuZXdUYWdWYWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgaXNDdXJyZW50T3BlcmF0b3JSZWdleCA9IGN1cnJlbnRPcGVyYXRvciA9PT0gJz1+JyB8fCBjdXJyZW50T3BlcmF0b3IgPT09ICchfic7XG4gIGNvbnN0IGlzTmV3VGFnVmFsdWVSZWdleCA9IGlzUmVnZXgobmV3VGFnVmFsdWUpO1xuXG4gIGlmIChpc05ld1RhZ1ZhbHVlUmVnZXgpIHtcbiAgICByZXR1cm4gaXNDdXJyZW50T3BlcmF0b3JSZWdleCA/IGN1cnJlbnRPcGVyYXRvciA6ICc9fic7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlzQ3VycmVudE9wZXJhdG9yUmVnZXggPyAnPScgOiBjdXJyZW50T3BlcmF0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9TZWxlY3RhYmxlVmFsdWU8VCBleHRlbmRzIHN0cmluZz4odDogVCk6IFNlbGVjdGFibGVWYWx1ZTxUPiB7XG4gIHJldHVybiB7IGxhYmVsOiB0LCB2YWx1ZTogdCB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVud3JhcDxUPih2YWx1ZTogVCB8IG51bGwgfCB1bmRlZmluZWQpOiBUIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZhbHVlIG11c3Qgbm90IGJlIG51bGxpc2gnKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgUmVzdWx0Rm9ybWF0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgUkVTVUxUX0ZPUk1BVFM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxSZXN1bHRGb3JtYXQ+PiA9IFtcbiAgeyBsYWJlbDogJ1RpbWUgc2VyaWVzJywgdmFsdWU6ICd0aW1lX3NlcmllcycgfSxcbiAgeyBsYWJlbDogJ1RhYmxlJywgdmFsdWU6ICd0YWJsZScgfSxcbiAgeyBsYWJlbDogJ0xvZ3MnLCB2YWx1ZTogJ2xvZ3MnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9SRVNVTFRfRk9STUFUOiBSZXN1bHRGb3JtYXQgPSAndGltZV9zZXJpZXMnO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVByZXZpb3VzIH0gZnJvbSAncmVhY3QtdXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNoYWRvd2VkU3RhdGU8VD4ob3V0c2lkZVZhbDogVCk6IFtULCAobmV3VmFsOiBUKSA9PiB2b2lkXSB7XG4gIGNvbnN0IFtjdXJyZW50VmFsLCBzZXRDdXJyZW50VmFsXSA9IHVzZVN0YXRlKG91dHNpZGVWYWwpO1xuICBjb25zdCBwcmV2T3V0c2lkZVZhbCA9IHVzZVByZXZpb3VzKG91dHNpZGVWYWwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaXNPdXRzaWRlVmFsQ2hhbmdlZCA9IHByZXZPdXRzaWRlVmFsICE9PSBvdXRzaWRlVmFsO1xuICAgIC8vIGlmIHRoZSB2YWx1ZSBjaGFuZ2VzIGZyb20gdGhlIG91dHNpZGUsIHdlIGFjY2VwdCBpdCBpbnRvIHRoZSBzdGF0ZVxuICAgIC8vICh3ZSBvbmx5IHNldCBpdCBpZiBpdCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgY3VycmVudCB2YWx1ZSlcbiAgICBpZiAoaXNPdXRzaWRlVmFsQ2hhbmdlZCAmJiBjdXJyZW50VmFsICE9PSBvdXRzaWRlVmFsKSB7XG4gICAgICBzZXRDdXJyZW50VmFsKG91dHNpZGVWYWwpO1xuICAgIH1cbiAgfSwgW291dHNpZGVWYWwsIGN1cnJlbnRWYWwsIHByZXZPdXRzaWRlVmFsXSk7XG5cbiAgcmV0dXJuIFtjdXJyZW50VmFsLCBzZXRDdXJyZW50VmFsXTtcbn1cbiIsImltcG9ydCB7IGNsb25lRGVlcCwgZXh0ZW5kLCBnZXQsIGdyb3VwQnksIGhhcywgaXNTdHJpbmcsIG1hcCBhcyBfbWFwLCBvbWl0LCBwaWNrLCByZWR1Y2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSwgT2JzZXJ2YWJsZSwgb2YsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5pbXBvcnQge1xuICBBbm5vdGF0aW9uRXZlbnQsXG4gIEFycmF5VmVjdG9yLFxuICBEYXRhRnJhbWUsXG4gIERhdGFRdWVyeUVycm9yLFxuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIGRhdGVNYXRoLFxuICBkYXRlVGltZSxcbiAgRmllbGRUeXBlLFxuICBMb2FkaW5nU3RhdGUsXG4gIE1ldHJpY0ZpbmRWYWx1ZSxcbiAgUXVlcnlSZXN1bHRNZXRhLFxuICBTY29wZWRWYXJzLFxuICBUSU1FX1NFUklFU19USU1FX0ZJRUxEX05BTUUsXG4gIFRJTUVfU0VSSUVTX1ZBTFVFX0ZJRUxEX05BTUUsXG4gIFRpbWVTZXJpZXMsXG4gIEFubm90YXRpb25RdWVyeVJlcXVlc3QsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHtcbiAgQmFja2VuZERhdGFTb3VyY2VSZXNwb25zZSxcbiAgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLFxuICBGZXRjaFJlc3BvbnNlLFxuICBmcmFtZVRvTWV0cmljRmluZFZhbHVlLFxuICBnZXRCYWNrZW5kU3J2LFxufSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG5cbmltcG9ydCB7IEZsdXhRdWVyeUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9GbHV4UXVlcnlFZGl0b3InO1xuaW1wb3J0IEluZmx1eFF1ZXJ5TW9kZWwgZnJvbSAnLi9pbmZsdXhfcXVlcnlfbW9kZWwnO1xuaW1wb3J0IEluZmx1eFNlcmllcyBmcm9tICcuL2luZmx1eF9zZXJpZXMnO1xuaW1wb3J0IHsgYnVpbGRSYXdRdWVyeSB9IGZyb20gJy4vcXVlcnlVdGlscyc7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeUJ1aWxkZXIgfSBmcm9tICcuL3F1ZXJ5X2J1aWxkZXInO1xuaW1wb3J0IFJlc3BvbnNlUGFyc2VyIGZyb20gJy4vcmVzcG9uc2VfcGFyc2VyJztcbmltcG9ydCB7IEluZmx1eE9wdGlvbnMsIEluZmx1eFF1ZXJ5LCBJbmZsdXhWZXJzaW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIHdlIGRldGVjdCB0aGUgZmllbGQgdHlwZSBiYXNlZCBvbiB0aGUgdmFsdWUtYXJyYXlcbmZ1bmN0aW9uIGdldEZpZWxkVHlwZSh2YWx1ZXM6IHVua25vd25bXSk6IEZpZWxkVHlwZSB7XG4gIC8vIHRoZSB2YWx1ZXMtYXJyYXkgbWF5IGNvbnRhaW4gYSBsb3Qgb2YgbnVsbHMuXG4gIC8vIHdlIG5lZWQgdGhlIGZpcnN0IG5vdC1udWxsIGl0ZW1cbiAgY29uc3QgZmlyc3ROb3ROdWxsID0gdmFsdWVzLmZpbmQoKHYpID0+IHYgIT09IG51bGwpO1xuXG4gIGlmIChmaXJzdE5vdE51bGwgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIHdlIGNvdWxkIG5vdCBmaW5kIGFueSBub3QtbnVsbCB2YWx1ZXNcbiAgICByZXR1cm4gRmllbGRUeXBlLm51bWJlcjtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlVHlwZSA9IHR5cGVvZiBmaXJzdE5vdE51bGw7XG5cbiAgc3dpdGNoICh2YWx1ZVR5cGUpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIEZpZWxkVHlwZS5zdHJpbmc7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICByZXR1cm4gRmllbGRUeXBlLmJvb2xlYW47XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBGaWVsZFR5cGUubnVtYmVyO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIGluZmx1eHFsIHZhbHVlc1xuICAgICAgLy8gY2FuIG9ubHkgYmUgbnVtYmVycywgc3RyaW5ncyBhbmQgYm9vbGVhbnMuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEluZmx1eFFMOiBpbnZhbGlkIHZhbHVlIHR5cGUgJHt2YWx1ZVR5cGV9YCk7XG4gIH1cbn1cblxuLy8gdGhpcyBjb252ZXJzaW9uIGZ1bmN0aW9uIGlzIHNwZWNpYWxpemVkIHRvIHdvcmsgd2l0aCB0aGUgdGltZXNlcmllc1xuLy8gZGF0YSByZXR1cm5lZCBieSBJbmZsdXhEYXRhc291cmNlLmdldFRpbWVTZXJpZXMoKVxuZnVuY3Rpb24gdGltZVNlcmllc1RvRGF0YUZyYW1lKHRpbWVTZXJpZXM6IFRpbWVTZXJpZXMpOiBEYXRhRnJhbWUge1xuICBjb25zdCB0aW1lczogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgdmFsdWVzOiB1bmtub3duW10gPSBbXTtcblxuICAvLyB0aGUgZGF0YSB3ZSBwcm9jZXNzIGhlcmUgaXMgbm90IGNvcnJlY3RseSB0eXBlZC5cbiAgLy8gdGhlIHR5cGVzY3JpcHQgdHlwZXMgc2F5IGV2ZXJ5IGRhdGEtcG9pbnQgaXMgbnVtYmVyfG51bGwsXG4gIC8vIGJ1dCBpbiBmYWN0IGl0IGNhbiBiZSBzdHJpbmcgb3IgYm9vbGVhbiB0b28uXG5cbiAgY29uc3QgcG9pbnRzID0gdGltZVNlcmllcy5kYXRhcG9pbnRzO1xuICBmb3IgKGNvbnN0IHBvaW50IG9mIHBvaW50cykge1xuICAgIHZhbHVlcy5wdXNoKHBvaW50WzBdKTtcbiAgICB0aW1lcy5wdXNoKHBvaW50WzFdIGFzIG51bWJlcik7XG4gIH1cblxuICBjb25zdCB0aW1lRmllbGQgPSB7XG4gICAgbmFtZTogVElNRV9TRVJJRVNfVElNRV9GSUVMRF9OQU1FLFxuICAgIHR5cGU6IEZpZWxkVHlwZS50aW1lLFxuICAgIGNvbmZpZzoge30sXG4gICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3I8bnVtYmVyPih0aW1lcyksXG4gIH07XG5cbiAgY29uc3QgdmFsdWVGaWVsZCA9IHtcbiAgICBuYW1lOiBUSU1FX1NFUklFU19WQUxVRV9GSUVMRF9OQU1FLFxuICAgIHR5cGU6IGdldEZpZWxkVHlwZSh2YWx1ZXMpLFxuICAgIGNvbmZpZzoge1xuICAgICAgZGlzcGxheU5hbWVGcm9tRFM6IHRpbWVTZXJpZXMudGl0bGUsXG4gICAgfSxcbiAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3Rvcjx1bmtub3duPih2YWx1ZXMpLFxuICAgIGxhYmVsczogdGltZVNlcmllcy50YWdzLFxuICB9O1xuXG4gIGNvbnN0IGZpZWxkcyA9IFt0aW1lRmllbGQsIHZhbHVlRmllbGRdO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogdGltZVNlcmllcy50YXJnZXQsXG4gICAgcmVmSWQ6IHRpbWVTZXJpZXMucmVmSWQsXG4gICAgbWV0YTogdGltZVNlcmllcy5tZXRhLFxuICAgIGZpZWxkcyxcbiAgICBsZW5ndGg6IHZhbHVlcy5sZW5ndGgsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZmx1eERhdGFzb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlV2l0aEJhY2tlbmQ8SW5mbHV4UXVlcnksIEluZmx1eE9wdGlvbnM+IHtcbiAgdHlwZTogc3RyaW5nO1xuICB1cmxzOiBzdHJpbmdbXTtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRhYmFzZTogYW55O1xuICBiYXNpY0F1dGg6IGFueTtcbiAgd2l0aENyZWRlbnRpYWxzOiBhbnk7XG4gIGFjY2VzczogJ2RpcmVjdCcgfCAncHJveHknO1xuICBpbnRlcnZhbDogYW55O1xuICByZXNwb25zZVBhcnNlcjogYW55O1xuICBodHRwTW9kZTogc3RyaW5nO1xuICBpc0ZsdXg6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8SW5mbHV4T3B0aW9ucz4sXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpXG4gICkge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuXG4gICAgdGhpcy50eXBlID0gJ2luZmx1eGRiJztcbiAgICB0aGlzLnVybHMgPSAoaW5zdGFuY2VTZXR0aW5ncy51cmwgPz8gJycpLnNwbGl0KCcsJykubWFwKCh1cmwpID0+IHtcbiAgICAgIHJldHVybiB1cmwudHJpbSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy51c2VybmFtZSA9IGluc3RhbmNlU2V0dGluZ3MudXNlcm5hbWUgPz8gJyc7XG4gICAgdGhpcy5wYXNzd29yZCA9IGluc3RhbmNlU2V0dGluZ3MucGFzc3dvcmQgPz8gJyc7XG4gICAgdGhpcy5uYW1lID0gaW5zdGFuY2VTZXR0aW5ncy5uYW1lO1xuICAgIHRoaXMuZGF0YWJhc2UgPSBpbnN0YW5jZVNldHRpbmdzLmRhdGFiYXNlO1xuICAgIHRoaXMuYmFzaWNBdXRoID0gaW5zdGFuY2VTZXR0aW5ncy5iYXNpY0F1dGg7XG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBpbnN0YW5jZVNldHRpbmdzLndpdGhDcmVkZW50aWFscztcbiAgICB0aGlzLmFjY2VzcyA9IGluc3RhbmNlU2V0dGluZ3MuYWNjZXNzO1xuICAgIGNvbnN0IHNldHRpbmdzRGF0YSA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEgfHwgKHt9IGFzIEluZmx1eE9wdGlvbnMpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXR0aW5nc0RhdGEudGltZUludGVydmFsO1xuICAgIHRoaXMuaHR0cE1vZGUgPSBzZXR0aW5nc0RhdGEuaHR0cE1vZGUgfHwgJ0dFVCc7XG4gICAgdGhpcy5yZXNwb25zZVBhcnNlciA9IG5ldyBSZXNwb25zZVBhcnNlcigpO1xuICAgIHRoaXMuaXNGbHV4ID0gc2V0dGluZ3NEYXRhLnZlcnNpb24gPT09IEluZmx1eFZlcnNpb24uRmx1eDtcblxuICAgIGlmICh0aGlzLmlzRmx1eCkge1xuICAgICAgLy8gV2hlbiBmbHV4LCB1c2UgYW4gYW5ub3RhdGlvbiBwcm9jZXNzb3IgcmF0aGVyIHRoYW4gdGhlIGBhbm5vdGF0aW9uUXVlcnlgIGxpZmVjeWNsZVxuICAgICAgdGhpcy5hbm5vdGF0aW9ucyA9IHtcbiAgICAgICAgUXVlcnlFZGl0b3I6IEZsdXhRdWVyeUVkaXRvcixcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcXVlcnkocmVxdWVzdDogRGF0YVF1ZXJ5UmVxdWVzdDxJbmZsdXhRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgLy8gZm9yIG5vdC1mbHV4IHF1ZXJpZXMgd2UgY2FsbCBgdGhpcy5jbGFzc2ljUXVlcnlgLCBhbmQgdGhhdFxuICAgIC8vIGhhbmRsZXMgdGhlIGlzLWhpZGRlbiBzaXR1YXRpb24uXG4gICAgLy8gZm9yIHRoZSBmbHV4LWNhc2UsIHdlIGRvIHRoZSBmaWx0ZXJpbmcgaGVyZVxuICAgIGNvbnN0IGZpbHRlcmVkUmVxdWVzdCA9IHtcbiAgICAgIC4uLnJlcXVlc3QsXG4gICAgICB0YXJnZXRzOiByZXF1ZXN0LnRhcmdldHMuZmlsdGVyKCh0KSA9PiB0LmhpZGUgIT09IHRydWUpLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc0ZsdXgpIHtcbiAgICAgIHJldHVybiBzdXBlci5xdWVyeShmaWx0ZXJlZFJlcXVlc3QpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzTWlncmF0aW9uVG9nZ2xlT25BbmRJc0FjY2Vzc1Byb3h5KCkpIHtcbiAgICAgIHJldHVybiBzdXBlci5xdWVyeShmaWx0ZXJlZFJlcXVlc3QpLnBpcGUoXG4gICAgICAgIG1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlcy5lcnJvcikge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICBtZXNzYWdlOiAnSW5mbHV4REIgRXJyb3I6ICcgKyByZXMuZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgICAgcmVzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzZXJpZXNMaXN0OiBhbnlbXSA9IFtdO1xuXG4gICAgICAgICAgY29uc3QgZ3JvdXBlZEZyYW1lcyA9IGdyb3VwQnkocmVzLmRhdGEsICh4KSA9PiB4LnJlZklkKTtcbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZ3JvdXBlZEZyYW1lcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsdGVyZWRSZXF1ZXN0LnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRnJhbWVzID0gZ3JvdXBlZEZyYW1lc1t0YXJnZXQucmVmSWRdID8/IFtdO1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRhcmdldC5yZXN1bHRGb3JtYXQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb2dzJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0YWJsZSc6XG4gICAgICAgICAgICAgICAgICBzZXJpZXNMaXN0LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VQYXJzZXIuZ2V0VGFibGUoZmlsdGVyZWRGcmFtZXMsIHRhcmdldCwge1xuICAgICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiB0YXJnZXQucmVzdWx0Rm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWRGcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc2VyaWVzTGlzdC5wdXNoKGZpbHRlcmVkRnJhbWVzW2ldKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHsgZGF0YTogc2VyaWVzTGlzdCB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayB0byBjbGFzc2ljIHF1ZXJ5IHN1cHBvcnRcbiAgICByZXR1cm4gdGhpcy5jbGFzc2ljUXVlcnkocmVxdWVzdCk7XG4gIH1cblxuICBnZXRRdWVyeURpc3BsYXlUZXh0KHF1ZXJ5OiBJbmZsdXhRdWVyeSkge1xuICAgIGlmICh0aGlzLmlzRmx1eCkge1xuICAgICAgcmV0dXJuIHF1ZXJ5LnF1ZXJ5O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEluZmx1eFF1ZXJ5TW9kZWwocXVlcnkpLnJlbmRlcihmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBmYWxzZSBpZiB0aGUgcXVlcnkgc2hvdWxkIGJlIHNraXBwZWRcbiAgICovXG4gIGZpbHRlclF1ZXJ5KHF1ZXJ5OiBJbmZsdXhRdWVyeSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzRmx1eCkge1xuICAgICAgcmV0dXJuICEhcXVlcnkucXVlcnk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyhxdWVyeTogSW5mbHV4UXVlcnksIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgICAvLyBXZSB3YW50IHRvIGludGVycG9sYXRlIHRoZXNlIHZhcmlhYmxlcyBvbiBiYWNrZW5kXG4gICAgY29uc3QgeyBfX2ludGVydmFsLCBfX2ludGVydmFsX21zLCAuLi5yZXN0IH0gPSBzY29wZWRWYXJzO1xuXG4gICAgaWYgKHRoaXMuaXNGbHV4KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgcXVlcnk6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5xdWVyeSA/PyAnJywgcmVzdCksIC8vIFRoZSByYXcgcXVlcnkgdGV4dFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmZlYXR1cmVUb2dnbGVzLmluZmx1eGRiQmFja2VuZE1pZ3JhdGlvbiAmJiB0aGlzLmFjY2VzcyA9PT0gJ3Byb3h5Jykge1xuICAgICAgcXVlcnkgPSB0aGlzLmFwcGx5VmFyaWFibGVzKHF1ZXJ5LCBzY29wZWRWYXJzLCByZXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHVuY2hhbmdlZCBwcmUgNy4xIHF1ZXJ5IGltcGxlbWVudGF0aW9uXG4gICAqL1xuICBjbGFzc2ljUXVlcnkob3B0aW9uczogYW55KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGxldCB0aW1lRmlsdGVyID0gdGhpcy5nZXRUaW1lRmlsdGVyKG9wdGlvbnMpO1xuICAgIGNvbnN0IHNjb3BlZFZhcnMgPSBvcHRpb25zLnNjb3BlZFZhcnM7XG4gICAgY29uc3QgdGFyZ2V0cyA9IGNsb25lRGVlcChvcHRpb25zLnRhcmdldHMpO1xuICAgIGNvbnN0IHF1ZXJ5VGFyZ2V0czogYW55W10gPSBbXTtcblxuICAgIGxldCBpLCB5O1xuXG4gICAgbGV0IGFsbFF1ZXJpZXMgPSBfbWFwKHRhcmdldHMsICh0YXJnZXQpID0+IHtcbiAgICAgIGlmICh0YXJnZXQuaGlkZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHF1ZXJ5VGFyZ2V0cy5wdXNoKHRhcmdldCk7XG5cbiAgICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgIHNjb3BlZFZhcnMuaW50ZXJ2YWwgPSBzY29wZWRWYXJzLl9faW50ZXJ2YWw7XG5cbiAgICAgIHJldHVybiBuZXcgSW5mbHV4UXVlcnlNb2RlbCh0YXJnZXQsIHRoaXMudGVtcGxhdGVTcnYsIHNjb3BlZFZhcnMpLnJlbmRlcih0cnVlKTtcbiAgICB9KS5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnQgIT09ICcnKSB7XG4gICAgICAgIGFjYyArPSAnOycgKyBjdXJyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9KTtcblxuICAgIGlmIChhbGxRdWVyaWVzID09PSAnJykge1xuICAgICAgcmV0dXJuIG9mKHsgZGF0YTogW10gfSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGdsb2JhbCBhZGhvYyBmaWx0ZXJzIHRvIHRpbWVGaWx0ZXJcbiAgICBjb25zdCBhZGhvY0ZpbHRlcnMgPSB0aGlzLnRlbXBsYXRlU3J2LmdldEFkaG9jRmlsdGVycyh0aGlzLm5hbWUpO1xuICAgIGlmIChhZGhvY0ZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG1wUXVlcnkgPSBuZXcgSW5mbHV4UXVlcnlNb2RlbCh7IHJlZklkOiAnQScgfSwgdGhpcy50ZW1wbGF0ZVNydiwgc2NvcGVkVmFycyk7XG4gICAgICB0aW1lRmlsdGVyICs9ICcgQU5EICcgKyB0bXBRdWVyeS5yZW5kZXJBZGhvY0ZpbHRlcnMoYWRob2NGaWx0ZXJzKTtcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIGdyYWZhbmEgdmFyaWFibGVzXG4gICAgc2NvcGVkVmFycy50aW1lRmlsdGVyID0geyB2YWx1ZTogdGltZUZpbHRlciB9O1xuXG4gICAgLy8gcmVwbGFjZSB0ZW1wbGF0ZWQgdmFyaWFibGVzXG4gICAgYWxsUXVlcmllcyA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShhbGxRdWVyaWVzLCBzY29wZWRWYXJzKTtcblxuICAgIHJldHVybiB0aGlzLl9zZXJpZXNRdWVyeShhbGxRdWVyaWVzLCBvcHRpb25zKS5waXBlKFxuICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLnJlc3VsdHMpIHtcbiAgICAgICAgICByZXR1cm4geyBkYXRhOiBbXSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VyaWVzTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YS5yZXN1bHRzW2ldO1xuICAgICAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuc2VyaWVzKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBxdWVyeVRhcmdldHNbaV07XG4gICAgICAgICAgbGV0IGFsaWFzID0gdGFyZ2V0LmFsaWFzO1xuICAgICAgICAgIGlmIChhbGlhcykge1xuICAgICAgICAgICAgYWxpYXMgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LmFsaWFzLCBvcHRpb25zLnNjb3BlZFZhcnMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG1ldGE6IFF1ZXJ5UmVzdWx0TWV0YSA9IHtcbiAgICAgICAgICAgIGV4ZWN1dGVkUXVlcnlTdHJpbmc6IGRhdGEuZXhlY3V0ZWRRdWVyeVN0cmluZyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgaW5mbHV4U2VyaWVzID0gbmV3IEluZmx1eFNlcmllcyh7XG4gICAgICAgICAgICByZWZJZDogdGFyZ2V0LnJlZklkLFxuICAgICAgICAgICAgc2VyaWVzOiBkYXRhLnJlc3VsdHNbaV0uc2VyaWVzLFxuICAgICAgICAgICAgYWxpYXM6IGFsaWFzLFxuICAgICAgICAgICAgbWV0YSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHN3aXRjaCAodGFyZ2V0LnJlc3VsdEZvcm1hdCkge1xuICAgICAgICAgICAgY2FzZSAnbG9ncyc6XG4gICAgICAgICAgICAgIG1ldGEucHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGUgPSAnbG9ncyc7XG4gICAgICAgICAgICBjYXNlICd0YWJsZSc6IHtcbiAgICAgICAgICAgICAgc2VyaWVzTGlzdC5wdXNoKGluZmx1eFNlcmllcy5nZXRUYWJsZSgpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpbWVTZXJpZXMgPSBpbmZsdXhTZXJpZXMuZ2V0VGltZVNlcmllcygpO1xuICAgICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgdGltZVNlcmllcy5sZW5ndGg7IHkrKykge1xuICAgICAgICAgICAgICAgIHNlcmllc0xpc3QucHVzaCh0aW1lU2VyaWVzVG9EYXRhRnJhbWUodGltZVNlcmllc1t5XSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGRhdGE6IHNlcmllc0xpc3QgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGFubm90YXRpb25RdWVyeShvcHRpb25zOiBBbm5vdGF0aW9uUXVlcnlSZXF1ZXN0PGFueT4pOiBQcm9taXNlPEFubm90YXRpb25FdmVudFtdPiB7XG4gICAgaWYgKHRoaXMuaXNGbHV4KSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICBtZXNzYWdlOiAnRmx1eCByZXF1aXJlcyB0aGUgc3RhbmRhcmQgYW5ub3RhdGlvbiBxdWVyeScsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJbmZsdXhRTCBwdXRzIGEgcXVlcnkgc3RyaW5nIG9uIHRoZSBhbm5vdGF0aW9uXG4gICAgaWYgKCFvcHRpb25zLmFubm90YXRpb24ucXVlcnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIG1lc3NhZ2U6ICdRdWVyeSBtaXNzaW5nIGluIGFubm90YXRpb24gZGVmaW5pdGlvbicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmZlYXR1cmVUb2dnbGVzLmluZmx1eGRiQmFja2VuZE1pZ3JhdGlvbiAmJiB0aGlzLmFjY2VzcyA9PT0gJ3Byb3h5Jykge1xuICAgICAgLy8gV2Ugd2FudCB0byBzZW5kIG91ciBxdWVyeSB0byB0aGUgYmFja2VuZCBhcyBhIHJhdyBxdWVyeVxuICAgICAgY29uc3QgdGFyZ2V0OiBJbmZsdXhRdWVyeSA9IHtcbiAgICAgICAgcmVmSWQ6ICdtZXRyaWNGaW5kUXVlcnknLFxuICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICBxdWVyeTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMuYW5ub3RhdGlvbi5xdWVyeSA/PyAnJyksXG4gICAgICAgIHJhd1F1ZXJ5OiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAgIC5mZXRjaDxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPih7XG4gICAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBmcm9tOiBvcHRpb25zLnJhbmdlLmZyb20udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgIHRvOiBvcHRpb25zLnJhbmdlLnRvLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgICBxdWVyaWVzOiBbdGFyZ2V0XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMuYW5ub3RhdGlvbi5uYW1lLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgIGFzeW5jIChyZXM6IEZldGNoUmVzcG9uc2U8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4pID0+XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXNwb25zZVBhcnNlci50cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2Uob3B0aW9ucywgcmVzLCB0YXJnZXQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lRmlsdGVyID0gdGhpcy5nZXRUaW1lRmlsdGVyKHsgcmFuZ2VSYXc6IG9wdGlvbnMucmFuZ2VSYXcsIHRpbWV6b25lOiBvcHRpb25zLmRhc2hib2FyZC50aW1lem9uZSB9KTtcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLmFubm90YXRpb24ucXVlcnkucmVwbGFjZSgnJHRpbWVGaWx0ZXInLCB0aW1lRmlsdGVyKTtcbiAgICBxdWVyeSA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeSwgdW5kZWZpbmVkLCAncmVnZXgnKTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuX3Nlcmllc1F1ZXJ5KHF1ZXJ5LCBvcHRpb25zKSkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAoIWRhdGEgfHwgIWRhdGEucmVzdWx0cyB8fCAhZGF0YS5yZXN1bHRzWzBdKSB7XG4gICAgICAgIHRocm93IHsgbWVzc2FnZTogJ05vIHJlc3VsdHMgaW4gcmVzcG9uc2UgZnJvbSBJbmZsdXhEQicgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgSW5mbHV4U2VyaWVzKHtcbiAgICAgICAgc2VyaWVzOiBkYXRhLnJlc3VsdHNbMF0uc2VyaWVzLFxuICAgICAgICBhbm5vdGF0aW9uOiBvcHRpb25zLmFubm90YXRpb24sXG4gICAgICB9KS5nZXRBbm5vdGF0aW9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgdGFyZ2V0Q29udGFpbnNUZW1wbGF0ZSh0YXJnZXQ6IGFueSkge1xuICAgIC8vIGZvciBmbHV4LW1vZGUgd2UganVzdCB0YWtlIHRhcmdldC5xdWVyeSxcbiAgICAvLyBmb3IgaW5mbHV4cWwtbW9kZSB3ZSB1c2UgSW5mbHV4UXVlcnlNb2RlbCB0byBjcmVhdGUgdGhlIHRleHQtcmVwcmVzZW50YXRpb25cbiAgICBjb25zdCBxdWVyeVRleHQgPSB0aGlzLmlzRmx1eCA/IHRhcmdldC5xdWVyeSA6IGJ1aWxkUmF3UXVlcnkodGFyZ2V0KTtcblxuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LmNvbnRhaW5zVGVtcGxhdGUocXVlcnlUZXh0KTtcbiAgfVxuXG4gIGludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzKHF1ZXJpZXM6IEluZmx1eFF1ZXJ5W10sIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpOiBJbmZsdXhRdWVyeVtdIHtcbiAgICBpZiAoIXF1ZXJpZXMgfHwgcXVlcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0ZsdXgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgIHF1ZXJ5OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkucXVlcnkgPz8gJycsIHNjb3BlZFZhcnMpLCAvLyBUaGUgcmF3IHF1ZXJ5IHRleHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgIC4uLnRoaXMuYXBwbHlWYXJpYWJsZXMocXVlcnksIHNjb3BlZFZhcnMsIHNjb3BlZFZhcnMpLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGx5VmFyaWFibGVzKHF1ZXJ5OiBJbmZsdXhRdWVyeSwgc2NvcGVkVmFyczogU2NvcGVkVmFycywgcmVzdDogU2NvcGVkVmFycykge1xuICAgIGNvbnN0IGV4cGFuZGVkUXVlcnkgPSB7IC4uLnF1ZXJ5IH07XG4gICAgaWYgKHF1ZXJ5Lmdyb3VwQnkpIHtcbiAgICAgIGV4cGFuZGVkUXVlcnkuZ3JvdXBCeSA9IHF1ZXJ5Lmdyb3VwQnkubWFwKChncm91cEJ5KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZ3JvdXBCeSxcbiAgICAgICAgICBwYXJhbXM6IGdyb3VwQnkucGFyYW1zPy5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHBhcmFtLnRvU3RyaW5nKCksIHVuZGVmaW5lZCwgJ3JlZ2V4Jyk7XG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnkuc2VsZWN0KSB7XG4gICAgICBleHBhbmRlZFF1ZXJ5LnNlbGVjdCA9IHF1ZXJ5LnNlbGVjdC5tYXAoKHNlbGVjdHMpID0+IHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdHMubWFwKChzZWxlY3Q6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zZWxlY3QsXG4gICAgICAgICAgICBwYXJhbXM6IHNlbGVjdC5wYXJhbXM/Lm1hcCgocGFyYW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHBhcmFtLnRvU3RyaW5nKCksIHVuZGVmaW5lZCwgJ3JlZ2V4Jyk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChxdWVyeS50YWdzKSB7XG4gICAgICBleHBhbmRlZFF1ZXJ5LnRhZ3MgPSBxdWVyeS50YWdzLm1hcCgodGFnKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4udGFnLFxuICAgICAgICAgIHZhbHVlOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFnLnZhbHVlLCB1bmRlZmluZWQsICdyZWdleCcpLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmV4cGFuZGVkUXVlcnksXG4gICAgICBxdWVyeTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnF1ZXJ5ID8/ICcnLCByZXN0KSwgLy8gVGhlIHJhdyBxdWVyeSB0ZXh0XG4gICAgICBhbGlhczogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LmFsaWFzID8/ICcnLCBzY29wZWRWYXJzKSxcbiAgICAgIGxpbWl0OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkubGltaXQ/LnRvU3RyaW5nKCkgPz8gJycsIHNjb3BlZFZhcnMsICdyZWdleCcpLFxuICAgICAgbWVhc3VyZW1lbnQ6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5tZWFzdXJlbWVudCA/PyAnJywgc2NvcGVkVmFycywgJ3JlZ2V4JyksXG4gICAgICBwb2xpY3k6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5wb2xpY3kgPz8gJycsIHNjb3BlZFZhcnMsICdyZWdleCcpLFxuICAgICAgc2xpbWl0OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkuc2xpbWl0Py50b1N0cmluZygpID8/ICcnLCBzY29wZWRWYXJzLCAncmVnZXgnKSxcbiAgICAgIHR6OiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkudHogPz8gJycsIHNjb3BlZFZhcnMpLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBtZXRyaWNGaW5kUXVlcnkocXVlcnk6IHN0cmluZywgb3B0aW9ucz86IGFueSk6IFByb21pc2U8TWV0cmljRmluZFZhbHVlW10+IHtcbiAgICBpZiAodGhpcy5pc0ZsdXggfHwgdGhpcy5pc01pZ3JhdGlvblRvZ2dsZU9uQW5kSXNBY2Nlc3NQcm94eSgpKSB7XG4gICAgICBjb25zdCB0YXJnZXQ6IEluZmx1eFF1ZXJ5ID0ge1xuICAgICAgICByZWZJZDogJ21ldHJpY0ZpbmRRdWVyeScsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICByYXdRdWVyeTogdHJ1ZSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgICAgc3VwZXIucXVlcnkoe1xuICAgICAgICAgIC4uLm9wdGlvbnMsIC8vIGluY2x1ZGVzICdyYW5nZSdcbiAgICAgICAgICB0YXJnZXRzOiBbdGFyZ2V0XSxcbiAgICAgICAgfSBhcyBEYXRhUXVlcnlSZXF1ZXN0KVxuICAgICAgKS50aGVuKChyc3ApID0+IHtcbiAgICAgICAgaWYgKHJzcC5kYXRhPy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gZnJhbWVUb01ldHJpY0ZpbmRWYWx1ZShyc3AuZGF0YVswXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJwb2xhdGVkID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LCB1bmRlZmluZWQsICdyZWdleCcpO1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20odGhpcy5fc2VyaWVzUXVlcnkoaW50ZXJwb2xhdGVkLCBvcHRpb25zKSkudGhlbigocmVzcCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VQYXJzZXIucGFyc2UocXVlcnksIHJlc3ApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGFnS2V5cyhvcHRpb25zOiBhbnkgPSB7fSkge1xuICAgIGNvbnN0IHF1ZXJ5QnVpbGRlciA9IG5ldyBJbmZsdXhRdWVyeUJ1aWxkZXIoeyBtZWFzdXJlbWVudDogb3B0aW9ucy5tZWFzdXJlbWVudCB8fCAnJywgdGFnczogW10gfSwgdGhpcy5kYXRhYmFzZSk7XG4gICAgY29uc3QgcXVlcnkgPSBxdWVyeUJ1aWxkZXIuYnVpbGRFeHBsb3JlUXVlcnkoJ1RBR19LRVlTJyk7XG4gICAgcmV0dXJuIHRoaXMubWV0cmljRmluZFF1ZXJ5KHF1ZXJ5LCBvcHRpb25zKTtcbiAgfVxuXG4gIGdldFRhZ1ZhbHVlcyhvcHRpb25zOiBhbnkgPSB7fSkge1xuICAgIGNvbnN0IHF1ZXJ5QnVpbGRlciA9IG5ldyBJbmZsdXhRdWVyeUJ1aWxkZXIoeyBtZWFzdXJlbWVudDogb3B0aW9ucy5tZWFzdXJlbWVudCB8fCAnJywgdGFnczogW10gfSwgdGhpcy5kYXRhYmFzZSk7XG4gICAgY29uc3QgcXVlcnkgPSBxdWVyeUJ1aWxkZXIuYnVpbGRFeHBsb3JlUXVlcnkoJ1RBR19WQUxVRVMnLCBvcHRpb25zLmtleSk7XG4gICAgcmV0dXJuIHRoaXMubWV0cmljRmluZFF1ZXJ5KHF1ZXJ5LCBvcHRpb25zKTtcbiAgfVxuXG4gIF9zZXJpZXNRdWVyeShxdWVyeTogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcmV0dXJuIG9mKHsgcmVzdWx0czogW10gfSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5yYW5nZSkge1xuICAgICAgY29uc3QgdGltZUZpbHRlciA9IHRoaXMuZ2V0VGltZUZpbHRlcih7IHJhbmdlUmF3OiBvcHRpb25zLnJhbmdlLCB0aW1lem9uZTogb3B0aW9ucy50aW1lem9uZSB9KTtcbiAgICAgIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgnJHRpbWVGaWx0ZXInLCB0aW1lRmlsdGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faW5mbHV4UmVxdWVzdCh0aGlzLmh0dHBNb2RlLCAnL3F1ZXJ5JywgeyBxOiBxdWVyeSwgZXBvY2g6ICdtcycgfSwgb3B0aW9ucyk7XG4gIH1cblxuICBzZXJpYWxpemVQYXJhbXMocGFyYW1zOiBhbnkpIHtcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiByZWR1Y2UoXG4gICAgICBwYXJhbXMsXG4gICAgICAobWVtbywgdmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICB9XG4gICAgICAgIG1lbW8ucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sXG4gICAgICBbXSBhcyBzdHJpbmdbXVxuICAgICkuam9pbignJicpO1xuICB9XG5cbiAgdGVzdERhdGFzb3VyY2UoKSB7XG4gICAgaWYgKHRoaXMuaXNGbHV4KSB7XG4gICAgICAvLyBUT0RPOiBldmVudHVhbGx5IHVzZSB0aGUgcmVhbCAvaGVhbHRoIGVuZHBvaW50XG4gICAgICBjb25zdCByZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PEluZmx1eFF1ZXJ5PiA9IHtcbiAgICAgICAgdGFyZ2V0czogW3sgcmVmSWQ6ICd0ZXN0JywgcXVlcnk6ICdidWNrZXRzKCknIH1dLFxuICAgICAgICByZXF1ZXN0SWQ6IGAke3RoaXMuaWR9LWhlYWx0aC0ke3V1aWR2NCgpfWAsXG4gICAgICAgIGRhc2hib2FyZElkOiAwLFxuICAgICAgICBwYW5lbElkOiAwLFxuICAgICAgICBpbnRlcnZhbDogJzFtJyxcbiAgICAgICAgaW50ZXJ2YWxNczogNjAwMDAsXG4gICAgICAgIG1heERhdGFQb2ludHM6IDQyMyxcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICBmcm9tOiBkYXRlVGltZSgxMDAwKSxcbiAgICAgICAgICB0bzogZGF0ZVRpbWUoMjAwMCksXG4gICAgICAgIH0sXG4gICAgICB9IGFzIERhdGFRdWVyeVJlcXVlc3Q8SW5mbHV4UXVlcnk+O1xuXG4gICAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShzdXBlci5xdWVyeShyZXF1ZXN0KSlcbiAgICAgICAgLnRoZW4oKHJlczogRGF0YVF1ZXJ5UmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcyB8fCAhcmVzLmRhdGEgfHwgcmVzLnN0YXRlICE9PSBMb2FkaW5nU3RhdGUuRG9uZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5mbHV4REIgRXJyb3InLCByZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnZXJyb3InLCBtZXNzYWdlOiAnRXJyb3IgcmVhZGluZyBJbmZsdXhEQicgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZmlyc3QgPSByZXMuZGF0YVswXTtcbiAgICAgICAgICBpZiAoZmlyc3QgJiYgZmlyc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdzdWNjZXNzJywgbWVzc2FnZTogYCR7Zmlyc3QubGVuZ3RofSBidWNrZXRzIGZvdW5kYCB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbmZsdXhEQiBFcnJvcicsIHJlcyk7XG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnZXJyb3InLCBtZXNzYWdlOiAnRXJyb3IgcmVhZGluZyBidWNrZXRzJyB9O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignSW5mbHV4REIgRXJyb3InLCBlcnIpO1xuICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNNaWdyYXRpb25Ub2dnbGVPbkFuZElzQWNjZXNzUHJveHkoKSkge1xuICAgICAgY29uc3QgdGFyZ2V0OiBJbmZsdXhRdWVyeSA9IHtcbiAgICAgICAgcmVmSWQ6ICdtZXRyaWNGaW5kUXVlcnknLFxuICAgICAgICBxdWVyeTogJ1NIT1cgVEFHIEtFWVMnLFxuICAgICAgICByYXdRdWVyeTogdHJ1ZSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShzdXBlci5xdWVyeSh7IHRhcmdldHM6IFt0YXJnZXRdIH0gYXMgRGF0YVF1ZXJ5UmVxdWVzdCkpXG4gICAgICAgIC50aGVuKChyZXM6IERhdGFRdWVyeVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMgfHwgIXJlcy5kYXRhIHx8IHJlcy5zdGF0ZSAhPT0gTG9hZGluZ1N0YXRlLkRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHJlYWRpbmcgSW5mbHV4REIuJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXMuZGF0YT8ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdzdWNjZXNzJywgbWVzc2FnZTogJ0RhdGEgc291cmNlIGlzIHdvcmtpbmcuJyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gSW5mbHV4REIsIGJ1dCBubyB0YWdzIGZvdW5kLicsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnlCdWlsZGVyID0gbmV3IEluZmx1eFF1ZXJ5QnVpbGRlcih7IG1lYXN1cmVtZW50OiAnJywgdGFnczogW10gfSwgdGhpcy5kYXRhYmFzZSk7XG4gICAgY29uc3QgcXVlcnkgPSBxdWVyeUJ1aWxkZXIuYnVpbGRFeHBsb3JlUXVlcnkoJ1JFVEVOVElPTiBQT0xJQ0lFUycpO1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20odGhpcy5fc2VyaWVzUXVlcnkocXVlcnkpKVxuICAgICAgLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZ2V0KHJlcywgJ3Jlc3VsdHNbMF0uZXJyb3InKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnZXJyb3InLCBtZXNzYWdlOiBlcnJvciB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgaXMgd29ya2luZycgfTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogZXJyLm1lc3NhZ2UgfTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX2luZmx1eFJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkYXRhOiBhbnksIG9wdGlvbnM/OiBhbnkpIHtcbiAgICBjb25zdCBjdXJyZW50VXJsID0gdGhpcy51cmxzLnNoaWZ0KCkhO1xuICAgIHRoaXMudXJscy5wdXNoKGN1cnJlbnRVcmwpO1xuXG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fTtcblxuICAgIGlmICh0aGlzLnVzZXJuYW1lKSB7XG4gICAgICBwYXJhbXMudSA9IHRoaXMudXNlcm5hbWU7XG4gICAgICBwYXJhbXMucCA9IHRoaXMucGFzc3dvcmQ7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kYXRhYmFzZSkge1xuICAgICAgcGFyYW1zLmRiID0gb3B0aW9ucy5kYXRhYmFzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YWJhc2UpIHtcbiAgICAgIHBhcmFtcy5kYiA9IHRoaXMuZGF0YWJhc2U7XG4gICAgfVxuXG4gICAgY29uc3QgeyBxIH0gPSBkYXRhO1xuXG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIGhhcyhkYXRhLCAncScpKSB7XG4gICAgICAvLyB2ZXJiIGlzIFBPU1QgYW5kICdxJyBwYXJhbSBpcyBkZWZpbmVkXG4gICAgICBleHRlbmQocGFyYW1zLCBvbWl0KGRhdGEsIFsncSddKSk7XG4gICAgICBkYXRhID0gdGhpcy5zZXJpYWxpemVQYXJhbXMocGljayhkYXRhLCBbJ3EnXSkpO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgLy8gdmVyYiBpcyBHRVQsIG9yIFBPU1Qgd2l0aG91dCAncScgcGFyYW1cbiAgICAgIGV4dGVuZChwYXJhbXMsIGRhdGEpO1xuICAgICAgZGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcmVxOiBhbnkgPSB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogY3VycmVudFVybCArIHVybCxcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIHByZWNpc2lvbjogJ21zJyxcbiAgICAgIGluc3BlY3Q6IHsgdHlwZTogJ2luZmx1eGRiJyB9LFxuICAgICAgcGFyYW1TZXJpYWxpemVyOiB0aGlzLnNlcmlhbGl6ZVBhcmFtcyxcbiAgICB9O1xuXG4gICAgcmVxLmhlYWRlcnMgPSByZXEuaGVhZGVycyB8fCB7fTtcbiAgICBpZiAodGhpcy5iYXNpY0F1dGggfHwgdGhpcy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcS53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5iYXNpY0F1dGgpIHtcbiAgICAgIHJlcS5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0aGlzLmJhc2ljQXV0aDtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgIHJlcS5oZWFkZXJzWydDb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5mZXRjaChyZXEpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzdWx0O1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBkYXRhLmV4ZWN1dGVkUXVlcnlTdHJpbmcgPSBxO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0cykge1xuICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSByZXN1bHQuZGF0YS5yZXN1bHRzLmZpbHRlcigoZWxlbTogYW55KSA9PiBlbGVtLmVycm9yKTtcblxuICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnSW5mbHV4REIgRXJyb3I6ICcgKyBlcnJvcnNbMF0uZXJyb3IsXG4gICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG9mKGVycik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IodGhpcy5oYW5kbGVFcnJvcnMoZXJyKSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycjogYW55KSB7XG4gICAgY29uc3QgZXJyb3I6IERhdGFRdWVyeUVycm9yID0ge1xuICAgICAgbWVzc2FnZTpcbiAgICAgICAgKGVyciAmJiBlcnIuc3RhdHVzKSB8fFxuICAgICAgICAoZXJyICYmIGVyci5tZXNzYWdlKSB8fFxuICAgICAgICAnVW5rbm93biBlcnJvciBkdXJpbmcgcXVlcnkgdHJhbnNhY3Rpb24uIFBsZWFzZSBjaGVjayBKUyBjb25zb2xlIGxvZ3MuJyxcbiAgICB9O1xuXG4gICAgaWYgKChOdW1iZXIuaXNJbnRlZ2VyKGVyci5zdGF0dXMpICYmIGVyci5zdGF0dXMgIT09IDApIHx8IGVyci5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICBpZiAoZXJyLmRhdGEgJiYgZXJyLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdJbmZsdXhEQiBFcnJvcjogJyArIGVyci5kYXRhLmVycm9yO1xuICAgICAgICBlcnJvci5kYXRhID0gZXJyLmRhdGE7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgZXJyb3IuY29uZmlnID0gZXJyLmNvbmZpZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnTmV0d29yayBFcnJvcjogJyArIGVyci5zdGF0dXNUZXh0ICsgJygnICsgZXJyLnN0YXR1cyArICcpJztcbiAgICAgICAgZXJyb3IuZGF0YSA9IGVyci5kYXRhO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGVycm9yLmNvbmZpZyA9IGVyci5jb25maWc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgZ2V0VGltZUZpbHRlcihvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCBmcm9tID0gdGhpcy5nZXRJbmZsdXhUaW1lKG9wdGlvbnMucmFuZ2VSYXcuZnJvbSwgZmFsc2UsIG9wdGlvbnMudGltZXpvbmUpO1xuICAgIGNvbnN0IHVudGlsID0gdGhpcy5nZXRJbmZsdXhUaW1lKG9wdGlvbnMucmFuZ2VSYXcudG8sIHRydWUsIG9wdGlvbnMudGltZXpvbmUpO1xuXG4gICAgcmV0dXJuICd0aW1lID49ICcgKyBmcm9tICsgJyBhbmQgdGltZSA8PSAnICsgdW50aWw7XG4gIH1cblxuICBnZXRJbmZsdXhUaW1lKGRhdGU6IGFueSwgcm91bmRVcDogYW55LCB0aW1lem9uZTogYW55KSB7XG4gICAgaWYgKGlzU3RyaW5nKGRhdGUpKSB7XG4gICAgICBpZiAoZGF0ZSA9PT0gJ25vdycpIHtcbiAgICAgICAgcmV0dXJuICdub3coKSc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnRzID0gL15ub3ctKFxcZCspKFtkaG1zXSkkLy5leGVjKGRhdGUpO1xuICAgICAgaWYgKHBhcnRzKSB7XG4gICAgICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7XG4gICAgICAgIGNvbnN0IHVuaXQgPSBwYXJ0c1syXTtcbiAgICAgICAgcmV0dXJuICdub3coKSAtICcgKyBhbW91bnQgKyB1bml0O1xuICAgICAgfVxuICAgICAgZGF0ZSA9IGRhdGVNYXRoLnBhcnNlKGRhdGUsIHJvdW5kVXAsIHRpbWV6b25lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0ZS52YWx1ZU9mKCkgKyAnbXMnO1xuICB9XG5cbiAgaXNNaWdyYXRpb25Ub2dnbGVPbkFuZElzQWNjZXNzUHJveHkoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5pbmZsdXhkYkJhY2tlbmRNaWdyYXRpb24gJiYgdGhpcy5hY2Nlc3MgPT09ICdwcm94eSc7XG4gIH1cbn1cbiIsImltcG9ydCBJbmZsdXhEYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeUJ1aWxkZXIgfSBmcm9tICcuL3F1ZXJ5X2J1aWxkZXInO1xuaW1wb3J0IHsgSW5mbHV4UXVlcnlUYWcgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgcnVuRXhwbG9yZVF1ZXJ5ID0gKFxuICB0eXBlOiBzdHJpbmcsXG4gIHdpdGhLZXk6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgd2l0aE1lYXN1cmVtZW50RmlsdGVyOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHRhcmdldDogeyBtZWFzdXJlbWVudDogc3RyaW5nIHwgdW5kZWZpbmVkOyB0YWdzOiBJbmZsdXhRdWVyeVRhZ1tdOyBwb2xpY3k6IHN0cmluZyB8IHVuZGVmaW5lZCB9LFxuICBkYXRhc291cmNlOiBJbmZsdXhEYXRhc291cmNlXG4pOiBQcm9taXNlPEFycmF5PHsgdGV4dDogc3RyaW5nIH0+PiA9PiB7XG4gIGNvbnN0IGJ1aWxkZXIgPSBuZXcgSW5mbHV4UXVlcnlCdWlsZGVyKHRhcmdldCwgZGF0YXNvdXJjZS5kYXRhYmFzZSk7XG4gIGNvbnN0IHEgPSBidWlsZGVyLmJ1aWxkRXhwbG9yZVF1ZXJ5KHR5cGUsIHdpdGhLZXksIHdpdGhNZWFzdXJlbWVudEZpbHRlcik7XG4gIHJldHVybiBkYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeShxKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb2xpY2llcyhkYXRhc291cmNlOiBJbmZsdXhEYXRhc291cmNlKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCB0YXJnZXQgPSB7IHRhZ3M6IFtdLCBtZWFzdXJlbWVudDogdW5kZWZpbmVkLCBwb2xpY3k6IHVuZGVmaW5lZCB9O1xuICBjb25zdCBkYXRhID0gYXdhaXQgcnVuRXhwbG9yZVF1ZXJ5KCdSRVRFTlRJT04gUE9MSUNJRVMnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFyZ2V0LCBkYXRhc291cmNlKTtcbiAgcmV0dXJuIGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLnRleHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsTWVhc3VyZW1lbnRzRm9yVGFncyhcbiAgbWVhc3VyZW1lbnRGaWx0ZXI6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgdGFnczogSW5mbHV4UXVlcnlUYWdbXSxcbiAgZGF0YXNvdXJjZTogSW5mbHV4RGF0YXNvdXJjZVxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCB0YXJnZXQgPSB7IHRhZ3MsIG1lYXN1cmVtZW50OiB1bmRlZmluZWQsIHBvbGljeTogdW5kZWZpbmVkIH07XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBydW5FeHBsb3JlUXVlcnkoJ01FQVNVUkVNRU5UUycsIHVuZGVmaW5lZCwgbWVhc3VyZW1lbnRGaWx0ZXIsIHRhcmdldCwgZGF0YXNvdXJjZSk7XG4gIHJldHVybiBkYXRhLm1hcCgoaXRlbSkgPT4gaXRlbS50ZXh0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRhZ0tleXNGb3JNZWFzdXJlbWVudEFuZFRhZ3MoXG4gIG1lYXN1cmVtZW50OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHBvbGljeTogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICB0YWdzOiBJbmZsdXhRdWVyeVRhZ1tdLFxuICBkYXRhc291cmNlOiBJbmZsdXhEYXRhc291cmNlXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGNvbnN0IHRhcmdldCA9IHsgdGFncywgbWVhc3VyZW1lbnQsIHBvbGljeSB9O1xuICBjb25zdCBkYXRhID0gYXdhaXQgcnVuRXhwbG9yZVF1ZXJ5KCdUQUdfS0VZUycsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0YXJnZXQsIGRhdGFzb3VyY2UpO1xuICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUYWdWYWx1ZXMoXG4gIHRhZ0tleTogc3RyaW5nLFxuICBtZWFzdXJlbWVudDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBwb2xpY3k6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgdGFnczogSW5mbHV4UXVlcnlUYWdbXSxcbiAgZGF0YXNvdXJjZTogSW5mbHV4RGF0YXNvdXJjZVxuKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICBjb25zdCB0YXJnZXQgPSB7IHRhZ3MsIG1lYXN1cmVtZW50LCBwb2xpY3kgfTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJ1bkV4cGxvcmVRdWVyeSgnVEFHX1ZBTFVFUycsIHRhZ0tleSwgdW5kZWZpbmVkLCB0YXJnZXQsIGRhdGFzb3VyY2UpO1xuICByZXR1cm4gZGF0YS5tYXAoKGl0ZW0pID0+IGl0ZW0udGV4dCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWVsZEtleXNGb3JNZWFzdXJlbWVudChcbiAgbWVhc3VyZW1lbnQ6IHN0cmluZyxcbiAgcG9saWN5OiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGRhdGFzb3VyY2U6IEluZmx1eERhdGFzb3VyY2Vcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgY29uc3QgdGFyZ2V0ID0geyB0YWdzOiBbXSwgbWVhc3VyZW1lbnQsIHBvbGljeSB9O1xuICBjb25zdCBkYXRhID0gYXdhaXQgcnVuRXhwbG9yZVF1ZXJ5KCdGSUVMRFMnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGFyZ2V0LCBkYXRhc291cmNlKTtcbiAgcmV0dXJuIGRhdGEubWFwKChpdGVtKSA9PiBpdGVtLnRleHQpO1xufVxuIiwiaW1wb3J0IHsgbWFwLCBmaW5kLCBmaWx0ZXIsIGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTY29wZWRWYXJzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IGtibiBmcm9tICdhcHAvY29yZS91dGlscy9rYm4nO1xuXG5pbXBvcnQgcXVlcnlQYXJ0IGZyb20gJy4vcXVlcnlfcGFydCc7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeSwgSW5mbHV4UXVlcnlUYWcgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbHV4UXVlcnlNb2RlbCB7XG4gIHRhcmdldDogSW5mbHV4UXVlcnk7XG4gIHNlbGVjdE1vZGVsczogYW55W10gPSBbXTtcbiAgcXVlcnlCdWlsZGVyOiBhbnk7XG4gIGdyb3VwQnlQYXJ0czogYW55O1xuICB0ZW1wbGF0ZVNydjogYW55O1xuICBzY29wZWRWYXJzOiBhbnk7XG4gIHJlZklkPzogc3RyaW5nO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IodGFyZ2V0OiBJbmZsdXhRdWVyeSwgdGVtcGxhdGVTcnY/OiBUZW1wbGF0ZVNydiwgc2NvcGVkVmFycz86IFNjb3BlZFZhcnMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnRlbXBsYXRlU3J2ID0gdGVtcGxhdGVTcnY7XG4gICAgdGhpcy5zY29wZWRWYXJzID0gc2NvcGVkVmFycztcblxuICAgIHRhcmdldC5wb2xpY3kgPSB0YXJnZXQucG9saWN5IHx8ICdkZWZhdWx0JztcbiAgICB0YXJnZXQucmVzdWx0Rm9ybWF0ID0gdGFyZ2V0LnJlc3VsdEZvcm1hdCB8fCAndGltZV9zZXJpZXMnO1xuICAgIHRhcmdldC5vcmRlckJ5VGltZSA9IHRhcmdldC5vcmRlckJ5VGltZSB8fCAnQVNDJztcbiAgICB0YXJnZXQudGFncyA9IHRhcmdldC50YWdzIHx8IFtdO1xuICAgIHRhcmdldC5ncm91cEJ5ID0gdGFyZ2V0Lmdyb3VwQnkgfHwgW1xuICAgICAgeyB0eXBlOiAndGltZScsIHBhcmFtczogWyckX19pbnRlcnZhbCddIH0sXG4gICAgICB7IHR5cGU6ICdmaWxsJywgcGFyYW1zOiBbJ251bGwnXSB9LFxuICAgIF07XG4gICAgdGFyZ2V0LnNlbGVjdCA9IHRhcmdldC5zZWxlY3QgfHwgW1xuICAgICAgW1xuICAgICAgICB7IHR5cGU6ICdmaWVsZCcsIHBhcmFtczogWyd2YWx1ZSddIH0sXG4gICAgICAgIHsgdHlwZTogJ21lYW4nLCBwYXJhbXM6IFtdIH0sXG4gICAgICBdLFxuICAgIF07XG5cbiAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcbiAgfVxuXG4gIHVwZGF0ZVByb2plY3Rpb24oKSB7XG4gICAgdGhpcy5zZWxlY3RNb2RlbHMgPSBtYXAodGhpcy50YXJnZXQuc2VsZWN0LCAocGFydHM6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIG1hcChwYXJ0cywgcXVlcnlQYXJ0LmNyZWF0ZSk7XG4gICAgfSk7XG4gICAgdGhpcy5ncm91cEJ5UGFydHMgPSBtYXAodGhpcy50YXJnZXQuZ3JvdXBCeSwgcXVlcnlQYXJ0LmNyZWF0ZSk7XG4gIH1cblxuICB1cGRhdGVQZXJzaXN0ZWRQYXJ0cygpIHtcbiAgICB0aGlzLnRhcmdldC5zZWxlY3QgPSBtYXAodGhpcy5zZWxlY3RNb2RlbHMsIChzZWxlY3RQYXJ0cykgPT4ge1xuICAgICAgcmV0dXJuIG1hcChzZWxlY3RQYXJ0cywgKHBhcnQ6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4geyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBwYXJhbXM6IHBhcnQucGFyYW1zIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhc0dyb3VwQnlUaW1lKCkge1xuICAgIHJldHVybiBmaW5kKHRoaXMudGFyZ2V0Lmdyb3VwQnksIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ3RpbWUnKTtcbiAgfVxuXG4gIGhhc0ZpbGwoKSB7XG4gICAgcmV0dXJuIGZpbmQodGhpcy50YXJnZXQuZ3JvdXBCeSwgKGc6IGFueSkgPT4gZy50eXBlID09PSAnZmlsbCcpO1xuICB9XG5cbiAgYWRkR3JvdXBCeSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgbGV0IHN0cmluZ1BhcnRzID0gdmFsdWUubWF0Y2goL14oXFx3KylcXCgoLiopXFwpJC8pO1xuXG4gICAgaWYgKCFzdHJpbmdQYXJ0cyB8fCAhdGhpcy50YXJnZXQuZ3JvdXBCeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGVQYXJ0ID0gc3RyaW5nUGFydHNbMV07XG4gICAgY29uc3QgYXJnID0gc3RyaW5nUGFydHNbMl07XG4gICAgY29uc3QgcGFydE1vZGVsID0gcXVlcnlQYXJ0LmNyZWF0ZSh7IHR5cGU6IHR5cGVQYXJ0LCBwYXJhbXM6IFthcmddIH0pO1xuICAgIGNvbnN0IHBhcnRDb3VudCA9IHRoaXMudGFyZ2V0Lmdyb3VwQnkubGVuZ3RoO1xuXG4gICAgaWYgKHBhcnRDb3VudCA9PT0gMCkge1xuICAgICAgdGhpcy50YXJnZXQuZ3JvdXBCeS5wdXNoKHBhcnRNb2RlbC5wYXJ0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVQYXJ0ID09PSAndGltZScpIHtcbiAgICAgIHRoaXMudGFyZ2V0Lmdyb3VwQnkuc3BsaWNlKDAsIDAsIHBhcnRNb2RlbC5wYXJ0KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVQYXJ0ID09PSAndGFnJykge1xuICAgICAgaWYgKHRoaXMudGFyZ2V0Lmdyb3VwQnlbcGFydENvdW50IC0gMV0udHlwZSA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0Lmdyb3VwQnkuc3BsaWNlKHBhcnRDb3VudCAtIDEsIDAsIHBhcnRNb2RlbC5wYXJ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFyZ2V0Lmdyb3VwQnkucHVzaChwYXJ0TW9kZWwucGFydCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFyZ2V0Lmdyb3VwQnkucHVzaChwYXJ0TW9kZWwucGFydCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG4gIH1cblxuICByZW1vdmVHcm91cEJ5UGFydChwYXJ0OiB7IGRlZjogeyB0eXBlOiBzdHJpbmcgfSB9LCBpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHF1ZXJ5UGFydC5nZXRDYXRlZ29yaWVzKCk7XG5cbiAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAvLyByZW1vdmUgZmlsbFxuICAgICAgdGhpcy50YXJnZXQuZ3JvdXBCeSA9IGZpbHRlcih0aGlzLnRhcmdldC5ncm91cEJ5LCAoZzogYW55KSA9PiBnLnR5cGUgIT09ICdmaWxsJyk7XG4gICAgICAvLyByZW1vdmUgYWdncmVnYXRpb25zXG4gICAgICB0aGlzLnRhcmdldC5zZWxlY3QgPSBtYXAodGhpcy50YXJnZXQuc2VsZWN0LCAoczogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBmaWx0ZXIocywgKHBhcnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhcnRNb2RlbCA9IHF1ZXJ5UGFydC5jcmVhdGUocGFydCk7XG4gICAgICAgICAgaWYgKHBhcnRNb2RlbC5kZWYuY2F0ZWdvcnkgPT09IGNhdGVnb3JpZXMuQWdncmVnYXRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYXJ0TW9kZWwuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLlNlbGVjdG9ycykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnRhcmdldC5ncm91cEJ5IS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICB9XG5cbiAgcmVtb3ZlU2VsZWN0KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnRhcmdldC5zZWxlY3QhLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG4gIH1cblxuICByZW1vdmVTZWxlY3RQYXJ0KHNlbGVjdFBhcnRzOiBhbnlbXSwgcGFydDogYW55KSB7XG4gICAgLy8gaWYgd2UgcmVtb3ZlIHRoZSBmaWVsZCByZW1vdmUgdGhlIHdob2xlIHN0YXRlbWVudFxuICAgIGlmIChwYXJ0LmRlZi50eXBlID09PSAnZmllbGQnKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RNb2RlbHMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBtb2RlbHNJbmRleCA9IGluZGV4T2YodGhpcy5zZWxlY3RNb2RlbHMsIHNlbGVjdFBhcnRzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RNb2RlbHMuc3BsaWNlKG1vZGVsc0luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFydEluZGV4ID0gaW5kZXhPZihzZWxlY3RQYXJ0cywgcGFydCk7XG4gICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UocGFydEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gIH1cblxuICBhZGRTZWxlY3RQYXJ0KHNlbGVjdFBhcnRzOiBhbnlbXSwgdHlwZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFydE1vZGVsID0gcXVlcnlQYXJ0LmNyZWF0ZSh7IHR5cGU6IHR5cGUgfSk7XG4gICAgcGFydE1vZGVsLmRlZi5hZGRTdHJhdGVneShzZWxlY3RQYXJ0cywgcGFydE1vZGVsLCB0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRhZ0NvbmRpdGlvbih0YWc6IEluZmx1eFF1ZXJ5VGFnLCBpbmRleDogbnVtYmVyLCBpbnRlcnBvbGF0ZT86IGJvb2xlYW4pIHtcbiAgICAvLyBGSVhNRTogbWVyZ2UgdGhpcyBmdW5jdGlvbiB3aXRoIHF1ZXJ5X2J1aWxkZXIvcmVuZGVyVGFnQ29uZGl0aW9uXG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGxldCBvcGVyYXRvciA9IHRhZy5vcGVyYXRvcjtcbiAgICBsZXQgdmFsdWUgPSB0YWcudmFsdWU7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgc3RyID0gKHRhZy5jb25kaXRpb24gfHwgJ0FORCcpICsgJyAnO1xuICAgIH1cblxuICAgIGlmICghb3BlcmF0b3IpIHtcbiAgICAgIGlmICgvXlxcLy4qXFwvJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgb3BlcmF0b3IgPSAnPX4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3BlcmF0b3IgPSAnPSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcXVvdGUgdmFsdWUgdW5sZXNzIHJlZ2V4XG4gICAgaWYgKG9wZXJhdG9yICE9PSAnPX4nICYmIG9wZXJhdG9yICE9PSAnIX4nKSB7XG4gICAgICBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodmFsdWUsIHRoaXMuc2NvcGVkVmFycyk7XG4gICAgICB9XG4gICAgICBpZiAob3BlcmF0b3IgIT09ICc+JyAmJiBvcGVyYXRvciAhPT0gJzwnKSB7XG4gICAgICAgIHZhbHVlID0gXCInXCIgKyB2YWx1ZS5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpLnJlcGxhY2UoL1xcJy9nLCBcIlxcXFwnXCIpICsgXCInXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgdmFsdWUgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodmFsdWUsIHRoaXMuc2NvcGVkVmFycywgJ3JlZ2V4Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ciArICdcIicgKyB0YWcua2V5ICsgJ1wiICcgKyBvcGVyYXRvciArICcgJyArIHZhbHVlO1xuICB9XG5cbiAgZ2V0TWVhc3VyZW1lbnRBbmRQb2xpY3koaW50ZXJwb2xhdGU6IGFueSkge1xuICAgIGxldCBwb2xpY3kgPSB0aGlzLnRhcmdldC5wb2xpY3k7XG4gICAgbGV0IG1lYXN1cmVtZW50ID0gdGhpcy50YXJnZXQubWVhc3VyZW1lbnQgfHwgJ21lYXN1cmVtZW50JztcblxuICAgIGlmICghbWVhc3VyZW1lbnQubWF0Y2goJ14vLiovJCcpKSB7XG4gICAgICBtZWFzdXJlbWVudCA9ICdcIicgKyBtZWFzdXJlbWVudCArICdcIic7XG4gICAgfSBlbHNlIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgbWVhc3VyZW1lbnQgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UobWVhc3VyZW1lbnQsIHRoaXMuc2NvcGVkVmFycywgJ3JlZ2V4Jyk7XG4gICAgfVxuXG4gICAgaWYgKHBvbGljeSAhPT0gJ2RlZmF1bHQnKSB7XG4gICAgICBwb2xpY3kgPSAnXCInICsgdGhpcy50YXJnZXQucG9saWN5ICsgJ1wiLic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvbGljeSA9ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBwb2xpY3kgKyBtZWFzdXJlbWVudDtcbiAgfVxuXG4gIGludGVycG9sYXRlUXVlcnlTdHIodmFsdWU6IGFueVtdLCB2YXJpYWJsZTogeyBtdWx0aTogYW55OyBpbmNsdWRlQWxsOiBhbnkgfSwgZGVmYXVsdEZvcm1hdEZuOiBhbnkpIHtcbiAgICAvLyBpZiBubyBtdWx0aSBvciBpbmNsdWRlIGFsbCBkbyBub3QgcmVnZXhFc2NhcGVcbiAgICBpZiAoIXZhcmlhYmxlLm11bHRpICYmICF2YXJpYWJsZS5pbmNsdWRlQWxsKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBrYm4ucmVnZXhFc2NhcGUodmFsdWUpO1xuICAgIH1cblxuICAgIGNvbnN0IGVzY2FwZWRWYWx1ZXMgPSBtYXAodmFsdWUsIGtibi5yZWdleEVzY2FwZSk7XG4gICAgcmV0dXJuICcoJyArIGVzY2FwZWRWYWx1ZXMuam9pbignfCcpICsgJyknO1xuICB9XG5cbiAgcmVuZGVyKGludGVycG9sYXRlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuXG4gICAgaWYgKHRhcmdldC5yYXdRdWVyeSkge1xuICAgICAgaWYgKGludGVycG9sYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LnF1ZXJ5LCB0aGlzLnNjb3BlZFZhcnMsIHRoaXMuaW50ZXJwb2xhdGVRdWVyeVN0cik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGFyZ2V0LnF1ZXJ5O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBxdWVyeSA9ICdTRUxFQ1QgJztcbiAgICBsZXQgaSwgeTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RNb2RlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5zZWxlY3RNb2RlbHNbaV07XG4gICAgICBsZXQgc2VsZWN0VGV4dCA9ICcnO1xuICAgICAgZm9yICh5ID0gMDsgeSA8IHBhcnRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1t5XTtcbiAgICAgICAgc2VsZWN0VGV4dCA9IHBhcnQucmVuZGVyKHNlbGVjdFRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgcXVlcnkgKz0gJywgJztcbiAgICAgIH1cbiAgICAgIHF1ZXJ5ICs9IHNlbGVjdFRleHQ7XG4gICAgfVxuXG4gICAgcXVlcnkgKz0gJyBGUk9NICcgKyB0aGlzLmdldE1lYXN1cmVtZW50QW5kUG9saWN5KGludGVycG9sYXRlKSArICcgV0hFUkUgJztcbiAgICBjb25zdCBjb25kaXRpb25zID0gbWFwKHRhcmdldC50YWdzLCAodGFnLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFnQ29uZGl0aW9uKHRhZywgaW5kZXgsIGludGVycG9sYXRlKTtcbiAgICB9KTtcblxuICAgIGlmIChjb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHF1ZXJ5ICs9ICcoJyArIGNvbmRpdGlvbnMuam9pbignICcpICsgJykgQU5EICc7XG4gICAgfVxuXG4gICAgcXVlcnkgKz0gJyR0aW1lRmlsdGVyJztcblxuICAgIGxldCBncm91cEJ5U2VjdGlvbiA9ICcnO1xuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmdyb3VwQnlQYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGFydCA9IHRoaXMuZ3JvdXBCeVBhcnRzW2ldO1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBmaWxsIGhhcyBubyBzZXBhcmF0b3JcbiAgICAgICAgZ3JvdXBCeVNlY3Rpb24gKz0gcGFydC5kZWYudHlwZSA9PT0gJ2ZpbGwnID8gJyAnIDogJywgJztcbiAgICAgIH1cbiAgICAgIGdyb3VwQnlTZWN0aW9uICs9IHBhcnQucmVuZGVyKCcnKTtcbiAgICB9XG5cbiAgICBpZiAoZ3JvdXBCeVNlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBxdWVyeSArPSAnIEdST1VQIEJZICcgKyBncm91cEJ5U2VjdGlvbjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LmZpbGwpIHtcbiAgICAgIHF1ZXJ5ICs9ICcgZmlsbCgnICsgdGFyZ2V0LmZpbGwgKyAnKSc7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5vcmRlckJ5VGltZSA9PT0gJ0RFU0MnKSB7XG4gICAgICBxdWVyeSArPSAnIE9SREVSIEJZIHRpbWUgREVTQyc7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldC5saW1pdCkge1xuICAgICAgcXVlcnkgKz0gJyBMSU1JVCAnICsgdGFyZ2V0LmxpbWl0O1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuc2xpbWl0KSB7XG4gICAgICBxdWVyeSArPSAnIFNMSU1JVCAnICsgdGFyZ2V0LnNsaW1pdDtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LnR6KSB7XG4gICAgICBxdWVyeSArPSBcIiB0eignXCIgKyB0YXJnZXQudHogKyBcIicpXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgcmVuZGVyQWRob2NGaWx0ZXJzKGZpbHRlcnM6IGFueVtdKSB7XG4gICAgY29uc3QgY29uZGl0aW9ucyA9IG1hcChmaWx0ZXJzLCAodGFnLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFnQ29uZGl0aW9uKHRhZywgaW5kZXgsIHRydWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBjb25kaXRpb25zLmpvaW4oJyAnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZWFjaCwgbWFwLCBpbmNsdWRlcywgZmxhdHRlbiwga2V5cyB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IEZpZWxkVHlwZSwgUXVlcnlSZXN1bHRNZXRhLCBUaW1lU2VyaWVzLCBUYWJsZURhdGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCBUYWJsZU1vZGVsIGZyb20gJ2FwcC9jb3JlL3RhYmxlX21vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbHV4U2VyaWVzIHtcbiAgcmVmSWQ/OiBzdHJpbmc7XG4gIHNlcmllczogYW55O1xuICBhbGlhczogYW55O1xuICBhbm5vdGF0aW9uOiBhbnk7XG4gIG1ldGE/OiBRdWVyeVJlc3VsdE1ldGE7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogeyBzZXJpZXM6IGFueTsgYWxpYXM/OiBhbnk7IGFubm90YXRpb24/OiBhbnk7IG1ldGE/OiBRdWVyeVJlc3VsdE1ldGE7IHJlZklkPzogc3RyaW5nIH0pIHtcbiAgICB0aGlzLnNlcmllcyA9IG9wdGlvbnMuc2VyaWVzO1xuICAgIHRoaXMuYWxpYXMgPSBvcHRpb25zLmFsaWFzO1xuICAgIHRoaXMuYW5ub3RhdGlvbiA9IG9wdGlvbnMuYW5ub3RhdGlvbjtcbiAgICB0aGlzLm1ldGEgPSBvcHRpb25zLm1ldGE7XG4gICAgdGhpcy5yZWZJZCA9IG9wdGlvbnMucmVmSWQ7XG4gIH1cblxuICBnZXRUaW1lU2VyaWVzKCk6IFRpbWVTZXJpZXNbXSB7XG4gICAgY29uc3Qgb3V0cHV0OiBUaW1lU2VyaWVzW10gPSBbXTtcbiAgICBsZXQgaSwgajtcblxuICAgIGlmICh0aGlzLnNlcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLnNlcmllcywgKHNlcmllcykgPT4ge1xuICAgICAgY29uc3QgY29sdW1ucyA9IHNlcmllcy5jb2x1bW5zLmxlbmd0aDtcbiAgICAgIGNvbnN0IHRhZ3MgPSBtYXAoc2VyaWVzLnRhZ3MsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiBrZXkgKyAnOiAnICsgdmFsdWU7XG4gICAgICB9KTtcblxuICAgICAgZm9yIChqID0gMTsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICBsZXQgc2VyaWVzTmFtZSA9IHNlcmllcy5uYW1lO1xuICAgICAgICBjb25zdCBjb2x1bW5OYW1lID0gc2VyaWVzLmNvbHVtbnNbal07XG4gICAgICAgIGlmIChjb2x1bW5OYW1lICE9PSAndmFsdWUnKSB7XG4gICAgICAgICAgc2VyaWVzTmFtZSA9IHNlcmllc05hbWUgKyAnLicgKyBjb2x1bW5OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWxpYXMpIHtcbiAgICAgICAgICBzZXJpZXNOYW1lID0gdGhpcy5fZ2V0U2VyaWVzTmFtZShzZXJpZXMsIGopO1xuICAgICAgICB9IGVsc2UgaWYgKHNlcmllcy50YWdzKSB7XG4gICAgICAgICAgc2VyaWVzTmFtZSA9IHNlcmllc05hbWUgKyAnIHsnICsgdGFncy5qb2luKCcsICcpICsgJ30nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YXBvaW50cyA9IFtdO1xuICAgICAgICBpZiAoc2VyaWVzLnZhbHVlcykge1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZXJpZXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkYXRhcG9pbnRzW2ldID0gW3Nlcmllcy52YWx1ZXNbaV1bal0sIHNlcmllcy52YWx1ZXNbaV1bMF1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dC5wdXNoKHtcbiAgICAgICAgICB0aXRsZTogc2VyaWVzTmFtZSxcbiAgICAgICAgICB0YXJnZXQ6IHNlcmllc05hbWUsXG4gICAgICAgICAgZGF0YXBvaW50czogZGF0YXBvaW50cyxcbiAgICAgICAgICB0YWdzOiBzZXJpZXMudGFncyxcbiAgICAgICAgICBtZXRhOiB0aGlzLm1ldGEsXG4gICAgICAgICAgcmVmSWQ6IHRoaXMucmVmSWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfVxuXG4gIF9nZXRTZXJpZXNOYW1lKHNlcmllczogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFwkKFxcdyspfFxcW1xcWyhbXFxzXFxTXSs/KVxcXVxcXS9nO1xuICAgIGNvbnN0IHNlZ21lbnRzID0gc2VyaWVzLm5hbWUuc3BsaXQoJy4nKTtcblxuICAgIHJldHVybiB0aGlzLmFsaWFzLnJlcGxhY2UocmVnZXgsIChtYXRjaDogYW55LCBnMTogYW55LCBnMjogYW55KSA9PiB7XG4gICAgICBjb25zdCBncm91cCA9IGcxIHx8IGcyO1xuICAgICAgY29uc3Qgc2VnSW5kZXggPSBwYXJzZUludChncm91cCwgMTApO1xuXG4gICAgICBpZiAoZ3JvdXAgPT09ICdtJyB8fCBncm91cCA9PT0gJ21lYXN1cmVtZW50Jykge1xuICAgICAgICByZXR1cm4gc2VyaWVzLm5hbWU7XG4gICAgICB9XG4gICAgICBpZiAoZ3JvdXAgPT09ICdjb2wnKSB7XG4gICAgICAgIHJldHVybiBzZXJpZXMuY29sdW1uc1tpbmRleF07XG4gICAgICB9XG4gICAgICBpZiAoIWlzTmFOKHNlZ0luZGV4KSkge1xuICAgICAgICByZXR1cm4gc2VnbWVudHNbc2VnSW5kZXhdID8/IG1hdGNoO1xuICAgICAgfVxuICAgICAgaWYgKGdyb3VwLmluZGV4T2YoJ3RhZ18nKSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhZyA9IGdyb3VwLnJlcGxhY2UoJ3RhZ18nLCAnJyk7XG4gICAgICBpZiAoIXNlcmllcy50YWdzKSB7XG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXJpZXMudGFnc1t0YWddO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QW5ub3RhdGlvbnMoKSB7XG4gICAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcblxuICAgIGVhY2godGhpcy5zZXJpZXMsIChzZXJpZXMpID0+IHtcbiAgICAgIGxldCB0aXRsZUNvbDogYW55ID0gbnVsbDtcbiAgICAgIGxldCB0aW1lQ29sOiBhbnkgPSBudWxsO1xuICAgICAgbGV0IHRpbWVFbmRDb2w6IGFueSA9IG51bGw7XG4gICAgICBjb25zdCB0YWdzQ29sOiBhbnkgPSBbXTtcbiAgICAgIGxldCB0ZXh0Q29sOiBhbnkgPSBudWxsO1xuXG4gICAgICBlYWNoKHNlcmllcy5jb2x1bW5zLCAoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY29sdW1uID09PSAndGltZScpIHtcbiAgICAgICAgICB0aW1lQ29sID0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT09ICdzZXF1ZW5jZV9udW1iZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT09IHRoaXMuYW5ub3RhdGlvbi50aXRsZUNvbHVtbikge1xuICAgICAgICAgIHRpdGxlQ29sID0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNsdWRlcygodGhpcy5hbm5vdGF0aW9uLnRhZ3NDb2x1bW4gfHwgJycpLnJlcGxhY2UoJyAnLCAnJykuc3BsaXQoJywnKSwgY29sdW1uKSkge1xuICAgICAgICAgIHRhZ3NDb2wucHVzaChpbmRleCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4gPT09IHRoaXMuYW5ub3RhdGlvbi50ZXh0Q29sdW1uKSB7XG4gICAgICAgICAgdGV4dENvbCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uID09PSB0aGlzLmFubm90YXRpb24udGltZUVuZENvbHVtbikge1xuICAgICAgICAgIHRpbWVFbmRDb2wgPSBpbmRleDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGVnYWN5IGNhc2VcbiAgICAgICAgaWYgKCF0aXRsZUNvbCAmJiB0ZXh0Q29sICE9PSBpbmRleCkge1xuICAgICAgICAgIHRpdGxlQ29sID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBlYWNoKHNlcmllcy52YWx1ZXMsICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgIGFubm90YXRpb246IHRoaXMuYW5ub3RhdGlvbixcbiAgICAgICAgICB0aW1lOiArbmV3IERhdGUodmFsdWVbdGltZUNvbF0pLFxuICAgICAgICAgIHRpdGxlOiB2YWx1ZVt0aXRsZUNvbF0sXG4gICAgICAgICAgdGltZUVuZDogdmFsdWVbdGltZUVuZENvbF0sXG4gICAgICAgICAgLy8gUmVtb3ZlIGVtcHR5IHZhbHVlcywgdGhlbiBzcGxpdCBpbiBkaWZmZXJlbnQgdGFncyBmb3IgY29tbWEgc2VwYXJhdGVkIHZhbHVlc1xuICAgICAgICAgIHRhZ3M6IGZsYXR0ZW4oXG4gICAgICAgICAgICB0YWdzQ29sXG4gICAgICAgICAgICAgIC5maWx0ZXIoKHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVt0XTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLm1hcCgodDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3RdLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0ZXh0OiB2YWx1ZVt0ZXh0Q29sXSxcbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0LnB1c2goZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgZ2V0VGFibGUoKTogVGFibGVEYXRhIHtcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZU1vZGVsKCk7XG4gICAgbGV0IGksIGo7XG5cbiAgICB0YWJsZS5yZWZJZCA9IHRoaXMucmVmSWQ7XG4gICAgdGFibGUubWV0YSA9IHRoaXMubWV0YTtcblxuICAgIGlmICh0aGlzLnNlcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0YWJsZTtcbiAgICB9XG5cbiAgICAvLyB0aGUgb3JkZXIgaXM6XG4gICAgLy8gLSBmaXJzdCB0aGUgZmlyc3QgaXRlbSBmcm9tIHRoZSB2YWx1ZS1hcnJheSAodGhpcyBpcyBvZnRlbiAoYWx3YXlzPykgdGhlIHRpbWVzdGFtcClcbiAgICAvLyAtIHRoZW4gYWxsIHRoZSB0YWctdmFsdWVzXG4gICAgLy8gLSB0aGVuIHRoZSByZXN0IG9mIHRoZSB2YWx1ZS1hcnJheVxuICAgIC8vXG4gICAgLy8gd2UgaGF2ZSB0byBrZWVwIHRoaXMgb3JkZXIgYm90aCBpbiB0YWJsZS5jb2x1bW5zIGFuZCB0YWJsZS5yb3dzXG5cbiAgICBlYWNoKHRoaXMuc2VyaWVzLCAoc2VyaWVzOiBhbnksIHNlcmllc0luZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChzZXJpZXNJbmRleCA9PT0gMCkge1xuICAgICAgICBjb25zdCBmaXJzdENvbCA9IHNlcmllcy5jb2x1bW5zWzBdO1xuICAgICAgICAvLyBDaGVjayB0aGUgZmlyc3QgY29sdW1uJ3MgbmFtZSwgaWYgaXQgaXMgYHRpbWVgLCB3ZVxuICAgICAgICAvLyBtYXJrIGl0IGFzIGhhdmluZyB0aGUgdHlwZSB0aW1lXG4gICAgICAgIGNvbnN0IGZpcnN0VGFibGVDb2wgPSBmaXJzdENvbCA9PT0gJ3RpbWUnID8geyB0ZXh0OiAnVGltZScsIHR5cGU6IEZpZWxkVHlwZS50aW1lIH0gOiB7IHRleHQ6IGZpcnN0Q29sIH07XG4gICAgICAgIHRhYmxlLmNvbHVtbnMucHVzaChmaXJzdFRhYmxlQ29sKTtcbiAgICAgICAgZWFjaChrZXlzKHNlcmllcy50YWdzKSwgKGtleSkgPT4ge1xuICAgICAgICAgIHRhYmxlLmNvbHVtbnMucHVzaCh7IHRleHQ6IGtleSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoaiA9IDE7IGogPCBzZXJpZXMuY29sdW1ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHRhYmxlLmNvbHVtbnMucHVzaCh7IHRleHQ6IHNlcmllcy5jb2x1bW5zW2pdIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzZXJpZXMudmFsdWVzKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZXJpZXMudmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVzID0gc2VyaWVzLnZhbHVlc1tpXTtcbiAgICAgICAgICBjb25zdCByZW9yZGVyZWQgPSBbdmFsdWVzWzBdXTtcbiAgICAgICAgICBpZiAoc2VyaWVzLnRhZ3MpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNlcmllcy50YWdzKSB7XG4gICAgICAgICAgICAgIGlmIChzZXJpZXMudGFncy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmVvcmRlcmVkLnB1c2goc2VyaWVzLnRhZ3Nba2V5XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChqID0gMTsgaiA8IHZhbHVlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgcmVvcmRlcmVkLnB1c2godmFsdWVzW2pdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFibGUucm93cy5wdXNoKHJlb3JkZXJlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0YWJsZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgQ29uZmlnRWRpdG9yIGZyb20gJy4vY29tcG9uZW50cy9Db25maWdFZGl0b3InO1xuaW1wb3J0IEluZmx1eFN0YXJ0UGFnZSBmcm9tICcuL2NvbXBvbmVudHMvSW5mbHV4U3RhcnRQYWdlJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCBWYXJpYWJsZVF1ZXJ5RWRpdG9yIGZyb20gJy4vY29tcG9uZW50cy9WYXJpYWJsZVF1ZXJ5RWRpdG9yJztcbmltcG9ydCBJbmZsdXhEYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmNsYXNzIEluZmx1eEFubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcbn1cblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luKEluZmx1eERhdGFzb3VyY2UpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKVxuICAuc2V0UXVlcnlFZGl0b3IoUXVlcnlFZGl0b3IpXG4gIC5zZXRBbm5vdGF0aW9uUXVlcnlDdHJsKEluZmx1eEFubm90YXRpb25zUXVlcnlDdHJsKVxuICAuc2V0VmFyaWFibGVRdWVyeUVkaXRvcihWYXJpYWJsZVF1ZXJ5RWRpdG9yKVxuICAuc2V0UXVlcnlFZGl0b3JIZWxwKEluZmx1eFN0YXJ0UGFnZSk7XG4iLCJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgSW5mbHV4UXVlcnlNb2RlbCBmcm9tICcuL2luZmx1eF9xdWVyeV9tb2RlbCc7XG5pbXBvcnQgeyBJbmZsdXhRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vLyBGSVhNRTogdGhlc2UgZnVuY3Rpb25zIGFyZSBhIGJlZ2lubmluZyBvZiBhIHJlZmFjdG9yaW5nIG9mIGluZmx1eF9xdWVyeV9tb2RlbC50c1xuLy8gaW50byBhIHNpbXBsZXIgYXBwcm9hY2ggd2l0aCBmdWxsIHR5cGVzY3JpcHQgdHlwZXMuXG4vLyBsYXRlciB3ZSBzaG91bGQgYmUgYWJsZSB0byBtaWdyYXRlIHRoZSB1bml0LXRlc3RzXG4vLyB0aGF0IHJlbGF0ZSB0byB0aGVzZSBmdW5jdGlvbnMgaGVyZSwgYW5kIHRoZW4gcGVyaGFwcyBldmVuIG1vdmUgdGhlIGltcGxlbWVudGF0aW9uXG4vLyB0byB0aGlzIHBsYWNlXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJhd1F1ZXJ5KHF1ZXJ5OiBJbmZsdXhRdWVyeSk6IHN0cmluZyB7XG4gIGNvbnN0IHF1ZXJ5Q29weSA9IGNsb25lRGVlcChxdWVyeSk7IC8vIHRoZSBxdWVyeS1tb2RlbCBtdXRhdGVzIHRoZSBxdWVyeVxuICBjb25zdCBtb2RlbCA9IG5ldyBJbmZsdXhRdWVyeU1vZGVsKHF1ZXJ5Q29weSk7XG4gIHJldHVybiBtb2RlbC5yZW5kZXIoZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplUXVlcnkocXVlcnk6IEluZmx1eFF1ZXJ5KTogSW5mbHV4UXVlcnkge1xuICAvLyB3ZSByZXR1cm4gdGhlIG9yaWdpbmFsIHF1ZXJ5IGlmIHRoZXJlIGlzIG5vIG5lZWQgdG8gdXBkYXRlIGl0XG4gIGlmIChcbiAgICBxdWVyeS5wb2xpY3kgIT09IHVuZGVmaW5lZCAmJlxuICAgIHF1ZXJ5LnJlc3VsdEZvcm1hdCAhPT0gdW5kZWZpbmVkICYmXG4gICAgcXVlcnkub3JkZXJCeVRpbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgIHF1ZXJ5LnRhZ3MgIT09IHVuZGVmaW5lZCAmJlxuICAgIHF1ZXJ5Lmdyb3VwQnkgIT09IHVuZGVmaW5lZCAmJlxuICAgIHF1ZXJ5LnNlbGVjdCAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIC8vIEZJWE1FOiB3ZSBzaG91bGQgbW92ZSB0aGUgd2hvbGUgbm9ybWFsaXplUXVlcnkgbG9naWMgaGVyZSxcbiAgLy8gYW5kIHRoZW4gaGF2ZSBpbmZsdXhRdWVyeU1vZGVsIGNhbGwgdGhpcyBmdW5jdGlvbixcbiAgLy8gdG8gY29uY2VudHJhdGUgdGhlIHdob2xlIGxvZ2ljIGhlcmVcblxuICBjb25zdCBxdWVyeUNvcHkgPSBjbG9uZURlZXAocXVlcnkpOyAvLyB0aGUgcXVlcnktbW9kZWwgbXV0YXRlcyB0aGUgcXVlcnlcbiAgcmV0dXJuIG5ldyBJbmZsdXhRdWVyeU1vZGVsKHF1ZXJ5Q29weSkudGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3U2VsZWN0UGFydChxdWVyeTogSW5mbHV4UXVlcnksIHR5cGU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IEluZmx1eFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnlDb3B5ID0gY2xvbmVEZWVwKHF1ZXJ5KTsgLy8gdGhlIHF1ZXJ5LW1vZGVsIG11dGF0ZXMgdGhlIHF1ZXJ5XG4gIGNvbnN0IG1vZGVsID0gbmV3IEluZmx1eFF1ZXJ5TW9kZWwocXVlcnlDb3B5KTtcbiAgbW9kZWwuYWRkU2VsZWN0UGFydChtb2RlbC5zZWxlY3RNb2RlbHNbaW5kZXhdLCB0eXBlKTtcbiAgcmV0dXJuIG1vZGVsLnRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNlbGVjdFBhcnQocXVlcnk6IEluZmx1eFF1ZXJ5LCBwYXJ0SW5kZXg6IG51bWJlciwgaW5kZXg6IG51bWJlcik6IEluZmx1eFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnlDb3B5ID0gY2xvbmVEZWVwKHF1ZXJ5KTsgLy8gdGhlIHF1ZXJ5LW1vZGVsIG11dGF0ZXMgdGhlIHF1ZXJ5XG4gIGNvbnN0IG1vZGVsID0gbmV3IEluZmx1eFF1ZXJ5TW9kZWwocXVlcnlDb3B5KTtcbiAgY29uc3Qgc2VsZWN0TW9kZWwgPSBtb2RlbC5zZWxlY3RNb2RlbHNbaW5kZXhdO1xuICBtb2RlbC5yZW1vdmVTZWxlY3RQYXJ0KHNlbGVjdE1vZGVsLCBzZWxlY3RNb2RlbFtwYXJ0SW5kZXhdKTtcbiAgcmV0dXJuIG1vZGVsLnRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVNlbGVjdFBhcnQoXG4gIHF1ZXJ5OiBJbmZsdXhRdWVyeSxcbiAgbGlzdEluZGV4OiBudW1iZXIsXG4gIHBhcnRJbmRleDogbnVtYmVyLFxuICBuZXdQYXJhbXM6IHN0cmluZ1tdXG4pOiBJbmZsdXhRdWVyeSB7XG4gIC8vIHdlIG5lZWQgdG8gbWFrZSBzaGFsbG93IGNvcHkgb2YgYHF1ZXJ5LnNlbGVjdGAgZG93biB0byBgcXVlcnkuc2VsZWN0W2xpc3RJbmRleF1bcGFydEluZGV4XWBcbiAgY29uc3QgbmV3U2VsID0gWy4uLihxdWVyeS5zZWxlY3QgPz8gW10pXTtcbiAgbmV3U2VsW2xpc3RJbmRleF0gPSBbLi4ubmV3U2VsW2xpc3RJbmRleF1dO1xuICBuZXdTZWxbbGlzdEluZGV4XVtwYXJ0SW5kZXhdID0ge1xuICAgIC4uLm5ld1NlbFtsaXN0SW5kZXhdW3BhcnRJbmRleF0sXG4gICAgcGFyYW1zOiBuZXdQYXJhbXMsXG4gIH07XG4gIHJldHVybiB7IC4uLnF1ZXJ5LCBzZWxlY3Q6IG5ld1NlbCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3R3JvdXBCeVBhcnQocXVlcnk6IEluZmx1eFF1ZXJ5LCB0eXBlOiBzdHJpbmcpOiBJbmZsdXhRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5Q29weSA9IGNsb25lRGVlcChxdWVyeSk7IC8vIHRoZSBxdWVyeS1tb2RlbCBtdXRhdGVzIHRoZSBxdWVyeVxuICBjb25zdCBtb2RlbCA9IG5ldyBJbmZsdXhRdWVyeU1vZGVsKHF1ZXJ5Q29weSk7XG4gIG1vZGVsLmFkZEdyb3VwQnkodHlwZSk7XG4gIHJldHVybiBtb2RlbC50YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVHcm91cEJ5UGFydChxdWVyeTogSW5mbHV4UXVlcnksIHBhcnRJbmRleDogbnVtYmVyKTogSW5mbHV4UXVlcnkge1xuICBjb25zdCBxdWVyeUNvcHkgPSBjbG9uZURlZXAocXVlcnkpOyAvLyB0aGUgcXVlcnktbW9kZWwgbXV0YXRlcyB0aGUgcXVlcnlcbiAgY29uc3QgbW9kZWwgPSBuZXcgSW5mbHV4UXVlcnlNb2RlbChxdWVyeUNvcHkpO1xuICBtb2RlbC5yZW1vdmVHcm91cEJ5UGFydChtb2RlbC5ncm91cEJ5UGFydHNbcGFydEluZGV4XSwgcGFydEluZGV4KTtcbiAgcmV0dXJuIG1vZGVsLnRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUdyb3VwQnlQYXJ0KHF1ZXJ5OiBJbmZsdXhRdWVyeSwgcGFydEluZGV4OiBudW1iZXIsIG5ld1BhcmFtczogc3RyaW5nW10pOiBJbmZsdXhRdWVyeSB7XG4gIC8vIHdlIG5lZWQgdG8gbWFrZSBzaGFsbG93IGNvcHkgb2YgYHF1ZXJ5Lmdyb3VwQnlgIGRvd24gdG8gYHF1ZXJ5Lmdyb3VwQnlbcGFydEluZGV4XWBcbiAgY29uc3QgbmV3R3JvdXBCeSA9IFsuLi4ocXVlcnkuZ3JvdXBCeSA/PyBbXSldO1xuICBuZXdHcm91cEJ5W3BhcnRJbmRleF0gPSB7XG4gICAgLi4ubmV3R3JvdXBCeVtwYXJ0SW5kZXhdLFxuICAgIHBhcmFtczogbmV3UGFyYW1zLFxuICB9O1xuICByZXR1cm4geyAuLi5xdWVyeSwgZ3JvdXBCeTogbmV3R3JvdXBCeSB9O1xufVxuIiwiaW1wb3J0IHsgcmVkdWNlIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IGtibiBmcm9tICdhcHAvY29yZS91dGlscy9rYm4nO1xuXG5mdW5jdGlvbiByZW5kZXJUYWdDb25kaXRpb24odGFnOiB7IG9wZXJhdG9yOiBhbnk7IHZhbHVlOiBzdHJpbmc7IGNvbmRpdGlvbjogYW55OyBrZXk6IHN0cmluZyB9LCBpbmRleDogbnVtYmVyKSB7XG4gIC8vIEZJWE1FOiBtZXJnZSB0aGlzIGZ1bmN0aW9uIHdpdGggaW5mbHV4X3F1ZXJ5X21vZGVsL3JlbmRlclRhZ0NvbmRpdGlvblxuICBsZXQgc3RyID0gJyc7XG4gIGxldCBvcGVyYXRvciA9IHRhZy5vcGVyYXRvcjtcbiAgbGV0IHZhbHVlID0gdGFnLnZhbHVlO1xuICBpZiAoaW5kZXggPiAwKSB7XG4gICAgc3RyID0gKHRhZy5jb25kaXRpb24gfHwgJ0FORCcpICsgJyAnO1xuICB9XG5cbiAgaWYgKCFvcGVyYXRvcikge1xuICAgIGlmICgvXlxcLy4qXFwvJC8udGVzdCh0YWcudmFsdWUpKSB7XG4gICAgICBvcGVyYXRvciA9ICc9fic7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZXJhdG9yID0gJz0nO1xuICAgIH1cbiAgfVxuXG4gIC8vIHF1b3RlIHZhbHVlIHVubGVzcyByZWdleCBvciBudW1iZXIsIG9yIGlmIGVtcHR5LXN0cmluZ1xuICBpZiAodmFsdWUgPT09ICcnIHx8IChvcGVyYXRvciAhPT0gJz1+JyAmJiBvcGVyYXRvciAhPT0gJyF+JyAmJiBpc05hTigrdmFsdWUpKSkge1xuICAgIHZhbHVlID0gXCInXCIgKyB2YWx1ZS5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpLnJlcGxhY2UoL1xcJy9nLCBcIlxcXFwnXCIpICsgXCInXCI7XG4gIH1cblxuICByZXR1cm4gc3RyICsgJ1wiJyArIHRhZy5rZXkgKyAnXCIgJyArIG9wZXJhdG9yICsgJyAnICsgdmFsdWU7XG59XG5cbmV4cG9ydCBjbGFzcyBJbmZsdXhRdWVyeUJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhcmdldDogeyBtZWFzdXJlbWVudDogYW55OyB0YWdzOiBhbnk7IHBvbGljeT86IGFueSB9LCBwcml2YXRlIGRhdGFiYXNlPzogc3RyaW5nKSB7fVxuXG4gIGJ1aWxkRXhwbG9yZVF1ZXJ5KHR5cGU6IHN0cmluZywgd2l0aEtleT86IHN0cmluZywgd2l0aE1lYXN1cmVtZW50RmlsdGVyPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgcXVlcnkgPSAnJztcbiAgICBsZXQgbWVhc3VyZW1lbnQ7XG4gICAgbGV0IHBvbGljeTtcblxuICAgIGlmICh0eXBlID09PSAnVEFHX0tFWVMnKSB7XG4gICAgICBxdWVyeSA9ICdTSE9XIFRBRyBLRVlTJztcbiAgICAgIG1lYXN1cmVtZW50ID0gdGhpcy50YXJnZXQubWVhc3VyZW1lbnQ7XG4gICAgICBwb2xpY3kgPSB0aGlzLnRhcmdldC5wb2xpY3k7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnVEFHX1ZBTFVFUycpIHtcbiAgICAgIHF1ZXJ5ID0gJ1NIT1cgVEFHIFZBTFVFUyc7XG4gICAgICBtZWFzdXJlbWVudCA9IHRoaXMudGFyZ2V0Lm1lYXN1cmVtZW50O1xuICAgICAgcG9saWN5ID0gdGhpcy50YXJnZXQucG9saWN5O1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ01FQVNVUkVNRU5UUycpIHtcbiAgICAgIHF1ZXJ5ID0gJ1NIT1cgTUVBU1VSRU1FTlRTJztcbiAgICAgIGlmICh3aXRoTWVhc3VyZW1lbnRGaWx0ZXIpIHtcbiAgICAgICAgLy8gd2UgZG8gYSBjYXNlLWluc2Vuc2l0aXZlIHJlZ2V4LWJhc2VkIGxvb2t1cFxuICAgICAgICBxdWVyeSArPSAnIFdJVEggTUVBU1VSRU1FTlQgPX4gLyg/aSknICsga2JuLnJlZ2V4RXNjYXBlKHdpdGhNZWFzdXJlbWVudEZpbHRlcikgKyAnLyc7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnRklFTERTJykge1xuICAgICAgbWVhc3VyZW1lbnQgPSB0aGlzLnRhcmdldC5tZWFzdXJlbWVudDtcbiAgICAgIHBvbGljeSA9IHRoaXMudGFyZ2V0LnBvbGljeTtcblxuICAgICAgaWYgKCFtZWFzdXJlbWVudC5tYXRjaCgnXi8uKi8nKSkge1xuICAgICAgICBtZWFzdXJlbWVudCA9ICdcIicgKyBtZWFzdXJlbWVudCArICdcIic7XG5cbiAgICAgICAgaWYgKHBvbGljeSAmJiBwb2xpY3kgIT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgIHBvbGljeSA9ICdcIicgKyBwb2xpY3kgKyAnXCInO1xuICAgICAgICAgIG1lYXN1cmVtZW50ID0gcG9saWN5ICsgJy4nICsgbWVhc3VyZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICdTSE9XIEZJRUxEIEtFWVMgRlJPTSAnICsgbWVhc3VyZW1lbnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnUkVURU5USU9OIFBPTElDSUVTJykge1xuICAgICAgcXVlcnkgPSAnU0hPVyBSRVRFTlRJT04gUE9MSUNJRVMgb24gXCInICsgdGhpcy5kYXRhYmFzZSArICdcIic7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuXG4gICAgaWYgKG1lYXN1cmVtZW50KSB7XG4gICAgICBpZiAoIW1lYXN1cmVtZW50Lm1hdGNoKCdeLy4qLycpICYmICFtZWFzdXJlbWVudC5tYXRjaCgvXm1lcmdlXFwoLipcXCkvKSkge1xuICAgICAgICBtZWFzdXJlbWVudCA9ICdcIicgKyBtZWFzdXJlbWVudCArICdcIic7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb2xpY3kgJiYgcG9saWN5ICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgcG9saWN5ID0gJ1wiJyArIHBvbGljeSArICdcIic7XG4gICAgICAgIG1lYXN1cmVtZW50ID0gcG9saWN5ICsgJy4nICsgbWVhc3VyZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHF1ZXJ5ICs9ICcgRlJPTSAnICsgbWVhc3VyZW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKHdpdGhLZXkpIHtcbiAgICAgIHF1ZXJ5ICs9ICcgV0lUSCBLRVkgPSBcIicgKyB3aXRoS2V5ICsgJ1wiJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy50YXJnZXQudGFncyAmJiB0aGlzLnRhcmdldC50YWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHdoZXJlQ29uZGl0aW9ucyA9IHJlZHVjZShcbiAgICAgICAgdGhpcy50YXJnZXQudGFncyxcbiAgICAgICAgKG1lbW8sIHRhZykgPT4ge1xuICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBjb25kaXRpb24gZm9yIHRoZSBrZXkgd2Ugd2FudCB0byBleHBsb3JlIGZvclxuICAgICAgICAgIGlmICh0YWcua2V5ID09PSB3aXRoS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB2YWx1ZSBvcGVyYXRvcnMgbm90IHN1cHBvcnRlZCBpbiB0aGVzZSB0eXBlcyBvZiBxdWVyaWVzXG4gICAgICAgICAgaWYgKHRhZy5vcGVyYXRvciA9PT0gJz4nIHx8IHRhZy5vcGVyYXRvciA9PT0gJzwnKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtZW1vLnB1c2gocmVuZGVyVGFnQ29uZGl0aW9uKHRhZywgbWVtby5sZW5ndGgpKTtcbiAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgfSxcbiAgICAgICAgW10gYXMgc3RyaW5nW11cbiAgICAgICk7XG5cbiAgICAgIGlmICh3aGVyZUNvbmRpdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBxdWVyeSArPSAnIFdIRVJFICcgKyB3aGVyZUNvbmRpdGlvbnMuam9pbignICcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSAnTUVBU1VSRU1FTlRTJykge1xuICAgICAgcXVlcnkgKz0gJyBMSU1JVCAxMDAnO1xuICAgICAgLy9Tb2x2ZSBpc3N1ZSAjMjUyNCBieSBsaW1pdGluZyB0aGUgbnVtYmVyIG9mIG1lYXN1cmVtZW50cyByZXR1cm5lZFxuICAgICAgLy9MSU1JVCBtdXN0IGJlIGFmdGVyIFdJVEggTUVBU1VSRU1FTlQgYW5kIFdIRVJFIGNsYXVzZXNcbiAgICAgIC8vVGhpcyBhbHNvIGNvdWxkIGJlIHVzZWQgZm9yIFRBRyBLRVlTIGFuZCBUQUcgVkFMVUVTLCBpZiBkZXNpcmVkXG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBtYXAsIGNsb25lIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgUXVlcnlQYXJ0RGVmLCBRdWVyeVBhcnQsIGZ1bmN0aW9uUmVuZGVyZXIsIHN1ZmZpeFJlbmRlcmVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3N0YXRlL3F1ZXJ5X3BhcnQnO1xuXG5jb25zdCBpbmRleDogYW55W10gPSBbXTtcbmNvbnN0IGNhdGVnb3JpZXM6IGFueSA9IHtcbiAgQWdncmVnYXRpb25zOiBbXSxcbiAgU2VsZWN0b3JzOiBbXSxcbiAgVHJhbnNmb3JtYXRpb25zOiBbXSxcbiAgUHJlZGljdG9yczogW10sXG4gIE1hdGg6IFtdLFxuICBBbGlhc2luZzogW10sXG4gIEZpZWxkczogW10sXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVQYXJ0KHBhcnQ6IGFueSk6IGFueSB7XG4gIGNvbnN0IGRlZiA9IGluZGV4W3BhcnQudHlwZV07XG4gIGlmICghZGVmKSB7XG4gICAgdGhyb3cgeyBtZXNzYWdlOiAnQ291bGQgbm90IGZpbmQgcXVlcnkgcGFydCAnICsgcGFydC50eXBlIH07XG4gIH1cblxuICByZXR1cm4gbmV3IFF1ZXJ5UGFydChwYXJ0LCBkZWYpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlcihvcHRpb25zOiBhbnkpIHtcbiAgaW5kZXhbb3B0aW9ucy50eXBlXSA9IG5ldyBRdWVyeVBhcnREZWYob3B0aW9ucyk7XG4gIG9wdGlvbnMuY2F0ZWdvcnkucHVzaChpbmRleFtvcHRpb25zLnR5cGVdKTtcbn1cblxuY29uc3QgZ3JvdXBCeVRpbWVGdW5jdGlvbnM6IGFueVtdID0gW107XG5cbmZ1bmN0aW9uIGFsaWFzUmVuZGVyZXIocGFydDogeyBwYXJhbXM6IHN0cmluZ1tdIH0sIGlubmVyRXhwcjogc3RyaW5nKSB7XG4gIHJldHVybiBpbm5lckV4cHIgKyAnIEFTICcgKyAnXCInICsgcGFydC5wYXJhbXNbMF0gKyAnXCInO1xufVxuXG5mdW5jdGlvbiBmaWVsZFJlbmRlcmVyKHBhcnQ6IHsgcGFyYW1zOiBzdHJpbmdbXSB9LCBpbm5lckV4cHI6IGFueSkge1xuICBpZiAocGFydC5wYXJhbXNbMF0gPT09ICcqJykge1xuICAgIHJldHVybiAnKic7XG4gIH1cbiAgcmV0dXJuICdcIicgKyBwYXJ0LnBhcmFtc1swXSArICdcIic7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5KHNlbGVjdFBhcnRzOiBhbnlbXSwgcGFydE1vZGVsOiB7IGRlZjogeyB0eXBlOiBzdHJpbmcgfSB9KSB7XG4gIC8vIGxvb2sgZm9yIGV4aXN0aW5nIGFnZ3JlZ2F0aW9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0UGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXJ0ID0gc2VsZWN0UGFydHNbaV07XG4gICAgaWYgKHBhcnQuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucykge1xuICAgICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09IHBhcnRNb2RlbC5kZWYudHlwZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjb3VudCBkaXN0aW5jdCBpcyBhbGxvd2VkXG4gICAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ2NvdW50JyAmJiBwYXJ0TW9kZWwuZGVmLnR5cGUgPT09ICdkaXN0aW5jdCcpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyByZW1vdmUgbmV4dCBhZ2dyZWdhdGlvbiBpZiBkaXN0aW5jdCB3YXMgcmVwbGFjZWRcbiAgICAgIGlmIChwYXJ0LmRlZi50eXBlID09PSAnZGlzdGluY3QnKSB7XG4gICAgICAgIGNvbnN0IG1vcmVQYXJ0c0F2YWlsYWJsZSA9IHNlbGVjdFBhcnRzLmxlbmd0aCA+PSBpICsgMjtcbiAgICAgICAgaWYgKHBhcnRNb2RlbC5kZWYudHlwZSAhPT0gJ2NvdW50JyAmJiBtb3JlUGFydHNBdmFpbGFibGUpIHtcbiAgICAgICAgICBjb25zdCBuZXh0UGFydCA9IHNlbGVjdFBhcnRzW2kgKyAxXTtcbiAgICAgICAgICBpZiAobmV4dFBhcnQuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucykge1xuICAgICAgICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKGkgKyAxLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFydE1vZGVsLmRlZi50eXBlID09PSAnY291bnQnKSB7XG4gICAgICAgICAgaWYgKCFtb3JlUGFydHNBdmFpbGFibGUgfHwgc2VsZWN0UGFydHNbaSArIDFdLmRlZi50eXBlICE9PSAnY291bnQnKSB7XG4gICAgICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoaSArIDEsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2VsZWN0UGFydHNbaV0gPSBwYXJ0TW9kZWw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJ0LmRlZi5jYXRlZ29yeSA9PT0gY2F0ZWdvcmllcy5TZWxlY3RvcnMpIHtcbiAgICAgIHNlbGVjdFBhcnRzW2ldID0gcGFydE1vZGVsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBwYXJ0TW9kZWwpO1xufVxuXG5mdW5jdGlvbiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5KHNlbGVjdFBhcnRzOiBhbnlbXSwgcGFydE1vZGVsOiBhbnkpIHtcbiAgbGV0IGk7XG4gIC8vIGxvb2sgZm9yIGluZGV4IHRvIGFkZCB0cmFuc2Zvcm1hdGlvblxuICBmb3IgKGkgPSAwOyBpIDwgc2VsZWN0UGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwYXJ0ID0gc2VsZWN0UGFydHNbaV07XG4gICAgaWYgKHBhcnQuZGVmLmNhdGVnb3J5ID09PSBjYXRlZ29yaWVzLk1hdGggfHwgcGFydC5kZWYuY2F0ZWdvcnkgPT09IGNhdGVnb3JpZXMuQWxpYXNpbmcpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdFBhcnRzLnNwbGljZShpLCAwLCBwYXJ0TW9kZWwpO1xufVxuXG5mdW5jdGlvbiBhZGRNYXRoU3RyYXRlZ3koc2VsZWN0UGFydHM6IGFueVtdLCBwYXJ0TW9kZWw6IGFueSkge1xuICBjb25zdCBwYXJ0Q291bnQgPSBzZWxlY3RQYXJ0cy5sZW5ndGg7XG4gIGlmIChwYXJ0Q291bnQgPiAwKSB7XG4gICAgLy8gaWYgbGFzdCBpcyBtYXRoLCByZXBsYWNlIGl0XG4gICAgaWYgKHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDFdLmRlZi50eXBlID09PSAnbWF0aCcpIHtcbiAgICAgIHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDFdID0gcGFydE1vZGVsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiBuZXh0IHRvIGxhc3QgaXMgbWF0aCwgcmVwbGFjZSBpdFxuICAgIGlmIChwYXJ0Q291bnQgPiAxICYmIHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDJdLmRlZi50eXBlID09PSAnbWF0aCcpIHtcbiAgICAgIHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDJdID0gcGFydE1vZGVsO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0UGFydHNbcGFydENvdW50IC0gMV0uZGVmLnR5cGUgPT09ICdhbGlhcycpIHtcbiAgICAgIC8vIGlmIGxhc3QgaXMgYWxpYXMgYWRkIGl0IGJlZm9yZVxuICAgICAgc2VsZWN0UGFydHMuc3BsaWNlKHBhcnRDb3VudCAtIDEsIDAsIHBhcnRNb2RlbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHNlbGVjdFBhcnRzLnB1c2gocGFydE1vZGVsKTtcbn1cblxuZnVuY3Rpb24gYWRkQWxpYXNTdHJhdGVneShzZWxlY3RQYXJ0czogYW55W10sIHBhcnRNb2RlbDogYW55KSB7XG4gIGNvbnN0IHBhcnRDb3VudCA9IHNlbGVjdFBhcnRzLmxlbmd0aDtcbiAgaWYgKHBhcnRDb3VudCA+IDApIHtcbiAgICAvLyBpZiBsYXN0IGlzIGFsaWFzLCByZXBsYWNlIGl0XG4gICAgaWYgKHNlbGVjdFBhcnRzW3BhcnRDb3VudCAtIDFdLmRlZi50eXBlID09PSAnYWxpYXMnKSB7XG4gICAgICBzZWxlY3RQYXJ0c1twYXJ0Q291bnQgLSAxXSA9IHBhcnRNb2RlbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgc2VsZWN0UGFydHMucHVzaChwYXJ0TW9kZWwpO1xufVxuXG5mdW5jdGlvbiBhZGRGaWVsZFN0cmF0ZWd5KHNlbGVjdFBhcnRzOiBhbnksIHBhcnRNb2RlbDogYW55LCBxdWVyeTogeyBzZWxlY3RNb2RlbHM6IGFueVtdW10gfSkge1xuICAvLyBjb3B5IGFsbCBwYXJ0c1xuICBjb25zdCBwYXJ0cyA9IG1hcChzZWxlY3RQYXJ0cywgKHBhcnQ6IGFueSkgPT4ge1xuICAgIHJldHVybiBjcmVhdGVQYXJ0KHsgdHlwZTogcGFydC5kZWYudHlwZSwgcGFyYW1zOiBjbG9uZShwYXJ0LnBhcmFtcykgfSk7XG4gIH0pO1xuXG4gIHF1ZXJ5LnNlbGVjdE1vZGVscy5wdXNoKHBhcnRzKTtcbn1cblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZmllbGQnLFxuICBhZGRTdHJhdGVneTogYWRkRmllbGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuRmllbGRzLFxuICBwYXJhbXM6IFt7IHR5cGU6ICdmaWVsZCcsIGR5bmFtaWNMb29rdXA6IHRydWUgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsndmFsdWUnXSxcbiAgcmVuZGVyZXI6IGZpZWxkUmVuZGVyZXIsXG59KTtcblxuLy8gQWdncmVnYXRpb25zXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdjb3VudCcsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuQWdncmVnYXRpb25zLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZGlzdGluY3QnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2ludGVncmFsJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5BZ2dyZWdhdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtZWFuJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5BZ2dyZWdhdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtZWRpYW4nLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ21vZGUnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLkFnZ3JlZ2F0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ3N1bScsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuQWdncmVnYXRpb25zLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxuLy8gdHJhbnNmb3JtYXRpb25zXG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2Rlcml2YXRpdmUnLFxuICBhZGRTdHJhdGVneTogYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuVHJhbnNmb3JtYXRpb25zLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgICAgdHlwZTogJ2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnMXMnLCAnMTBzJywgJzFtJywgJzVtJywgJzEwbScsICcxNW0nLCAnMWgnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzEwcyddLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdzcHJlYWQnLFxuICBhZGRTdHJhdGVneTogYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuVHJhbnNmb3JtYXRpb25zLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbm9uX25lZ2F0aXZlX2Rlcml2YXRpdmUnLFxuICBhZGRTdHJhdGVneTogYWRkVHJhbnNmb3JtYXRpb25TdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuVHJhbnNmb3JtYXRpb25zLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgICAgdHlwZTogJ2ludGVydmFsJyxcbiAgICAgIG9wdGlvbnM6IFsnMXMnLCAnMTBzJywgJzFtJywgJzVtJywgJzEwbScsICcxNW0nLCAnMWgnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJzEwcyddLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdkaWZmZXJlbmNlJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ25vbl9uZWdhdGl2ZV9kaWZmZXJlbmNlJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ21vdmluZ19hdmVyYWdlJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnd2luZG93JywgdHlwZTogJ2ludCcsIG9wdGlvbnM6IFs1LCAxMCwgMjAsIDMwLCA0MF0gfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMF0sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2N1bXVsYXRpdmVfc3VtJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ3N0ZGRldicsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5UcmFuc2Zvcm1hdGlvbnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd0aW1lJyxcbiAgY2F0ZWdvcnk6IGdyb3VwQnlUaW1lRnVuY3Rpb25zLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnaW50ZXJ2YWwnLFxuICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgb3B0aW9uczogWyckX19pbnRlcnZhbCcsICcxcycsICcxMHMnLCAnMW0nLCAnNW0nLCAnMTBtJywgJzE1bScsICcxaCddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnJF9faW50ZXJ2YWwnXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZmlsbCcsXG4gIGNhdGVnb3J5OiBncm91cEJ5VGltZUZ1bmN0aW9ucyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2ZpbGwnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ25vbmUnLCAnbnVsbCcsICcwJywgJ3ByZXZpb3VzJywgJ2xpbmVhciddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnbnVsbCddLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdlbGFwc2VkJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlRyYW5zZm9ybWF0aW9ucyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgICAgIHR5cGU6ICdpbnRlcnZhbCcsXG4gICAgICBvcHRpb25zOiBbJzFzJywgJzEwcycsICcxbScsICc1bScsICcxMG0nLCAnMTVtJywgJzFoJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWycxMHMnXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxuLy8gcHJlZGljdGlvbnNcbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2hvbHRfd2ludGVycycsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5QcmVkaWN0b3JzLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdudW1iZXInLCB0eXBlOiAnaW50Jywgb3B0aW9uczogWzUsIDEwLCAyMCwgMzAsIDQwXSB9LFxuICAgIHsgbmFtZTogJ3NlYXNvbicsIHR5cGU6ICdpbnQnLCBvcHRpb25zOiBbMCwgMSwgMiwgNSwgMTBdIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMCwgMl0sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2hvbHRfd2ludGVyc193aXRoX2ZpdCcsXG4gIGFkZFN0cmF0ZWd5OiBhZGRUcmFuc2Zvcm1hdGlvblN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5QcmVkaWN0b3JzLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdudW1iZXInLCB0eXBlOiAnaW50Jywgb3B0aW9uczogWzUsIDEwLCAyMCwgMzAsIDQwXSB9LFxuICAgIHsgbmFtZTogJ3NlYXNvbicsIHR5cGU6ICdpbnQnLCBvcHRpb25zOiBbMCwgMSwgMiwgNSwgMTBdIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsxMCwgMl0sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbi8vIFNlbGVjdG9yc1xucmVnaXN0ZXIoe1xuICB0eXBlOiAnYm90dG9tJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TZWxlY3RvcnMsXG4gIHBhcmFtczogW3sgbmFtZTogJ2NvdW50JywgdHlwZTogJ2ludCcgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFszXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZmlyc3QnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNlbGVjdG9ycyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2xhc3QnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNlbGVjdG9ycyxcbiAgcGFyYW1zOiBbXSxcbiAgZGVmYXVsdFBhcmFtczogW10sXG4gIHJlbmRlcmVyOiBmdW5jdGlvblJlbmRlcmVyLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ21heCcsXG4gIGFkZFN0cmF0ZWd5OiByZXBsYWNlQWdncmVnYXRpb25BZGRTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuU2VsZWN0b3JzLFxuICBwYXJhbXM6IFtdLFxuICBkZWZhdWx0UGFyYW1zOiBbXSxcbiAgcmVuZGVyZXI6IGZ1bmN0aW9uUmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbWluJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TZWxlY3RvcnMsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdwZXJjZW50aWxlJyxcbiAgYWRkU3RyYXRlZ3k6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxuICBjYXRlZ29yeTogY2F0ZWdvcmllcy5TZWxlY3RvcnMsXG4gIHBhcmFtczogW3sgbmFtZTogJ250aCcsIHR5cGU6ICdpbnQnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbOTVdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd0b3AnLFxuICBhZGRTdHJhdGVneTogcmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3ksXG4gIGNhdGVnb3J5OiBjYXRlZ29yaWVzLlNlbGVjdG9ycyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnY291bnQnLCB0eXBlOiAnaW50JyB9XSxcbiAgZGVmYXVsdFBhcmFtczogWzNdLFxuICByZW5kZXJlcjogZnVuY3Rpb25SZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd0YWcnLFxuICBjYXRlZ29yeTogZ3JvdXBCeVRpbWVGdW5jdGlvbnMsXG4gIHBhcmFtczogW3sgbmFtZTogJ3RhZycsIHR5cGU6ICdzdHJpbmcnLCBkeW5hbWljTG9va3VwOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3RhZyddLFxuICByZW5kZXJlcjogZmllbGRSZW5kZXJlcixcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtYXRoJyxcbiAgYWRkU3RyYXRlZ3k6IGFkZE1hdGhTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuTWF0aCxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnZXhwcicsIHR5cGU6ICdzdHJpbmcnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJyAvIDEwMCddLFxuICByZW5kZXJlcjogc3VmZml4UmVuZGVyZXIsXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnYWxpYXMnLFxuICBhZGRTdHJhdGVneTogYWRkQWxpYXNTdHJhdGVneSxcbiAgY2F0ZWdvcnk6IGNhdGVnb3JpZXMuQWxpYXNpbmcsXG4gIHBhcmFtczogW3sgbmFtZTogJ25hbWUnLCB0eXBlOiAnc3RyaW5nJywgcXVvdGU6ICdkb3VibGUnIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2FsaWFzJ10sXG4gIHJlbmRlck1vZGU6ICdzdWZmaXgnLFxuICByZW5kZXJlcjogYWxpYXNSZW5kZXJlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZTogY3JlYXRlUGFydCxcbiAgZ2V0Q2F0ZWdvcmllczogKCkgPT4ge1xuICAgIHJldHVybiBjYXRlZ29yaWVzO1xuICB9LFxuICByZXBsYWNlQWdncmVnYXRpb25BZGQ6IHJlcGxhY2VBZ2dyZWdhdGlvbkFkZFN0cmF0ZWd5LFxufTtcbiIsImltcG9ydCB7IGVhY2gsIGZsYXR0ZW4sIGdyb3VwQnksIGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBBbm5vdGF0aW9uRXZlbnQsIERhdGFGcmFtZSwgRGF0YVF1ZXJ5LCBGaWVsZFR5cGUsIFF1ZXJ5UmVzdWx0TWV0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdG9EYXRhUXVlcnlSZXNwb25zZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IFRhYmxlTW9kZWwgZnJvbSAnYXBwL2NvcmUvdGFibGVfbW9kZWwnO1xuXG5pbXBvcnQgeyBJbmZsdXhRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZVBhcnNlciB7XG4gIHBhcnNlKHF1ZXJ5OiBzdHJpbmcsIHJlc3VsdHM6IHsgcmVzdWx0czogYW55IH0pIHtcbiAgICBpZiAoIXJlc3VsdHM/LnJlc3VsdHMgfHwgcmVzdWx0cy5yZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGluZmx1eFJlc3VsdHMgPSByZXN1bHRzLnJlc3VsdHNbMF07XG4gICAgaWYgKCFpbmZsdXhSZXN1bHRzLnNlcmllcykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgaXNWYWx1ZUZpcnN0ID1cbiAgICAgIG5vcm1hbGl6ZWRRdWVyeS5pbmRleE9mKCdzaG93IGZpZWxkIGtleXMnKSA+PSAwIHx8IG5vcm1hbGl6ZWRRdWVyeS5pbmRleE9mKCdzaG93IHJldGVudGlvbiBwb2xpY2llcycpID49IDA7XG5cbiAgICBjb25zdCByZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBlYWNoKGluZmx1eFJlc3VsdHMuc2VyaWVzLCAoc2VyaWUpID0+IHtcbiAgICAgIGVhY2goc2VyaWUudmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgLy8gSW4gZ2VuZXJhbCwgdGhlcmUgYXJlIDIgcG9zc2libGUgc2hhcGVzIGZvciB0aGUgcmV0dXJuZWQgdmFsdWUuXG4gICAgICAgICAgLy8gVGhlIGZpcnN0IG9uZSBpcyBhIHR3by1lbGVtZW50IGFycmF5LFxuICAgICAgICAgIC8vIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHNvbWV3aGF0IGEgbWV0YWRhdGEgdmFsdWU6XG4gICAgICAgICAgLy8gdGhlIHRhZyBuYW1lIGZvciBTSE9XIFRBRyBWQUxVRVMgcXVlcmllcyxcbiAgICAgICAgICAvLyB0aGUgdGltZSBmaWVsZCBmb3IgU0VMRUNUIHF1ZXJpZXMsIGV0Yy5cbiAgICAgICAgICAvLyBUaGUgc2Vjb25kIHNoYXBlIGlzIGFuIG9uZS1lbGVtZW50IGFycmF5LFxuICAgICAgICAgIC8vIHRoYXQgaXMgY29udGFpbmluZyBhbiBpbW1lZGlhdGUgdmFsdWUuXG4gICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIFNIT1cgRklFTEQgS0VZUyBxdWVyaWVzIHJldHVybiBzdWNoIHNoYXBlLlxuICAgICAgICAgIC8vIE5vdGUsIHByZS0wLjExIHZlcnNpb25zIHJldHVyblxuICAgICAgICAgIC8vIHRoZSBzZWNvbmQgc2hhcGUgZm9yIFNIT1cgVEFHIFZBTFVFUyBxdWVyaWVzXG4gICAgICAgICAgLy8gKHdoaWxlIHRoZSBuZXdlciB2ZXJzaW9uc+KAlGZpcnN0KS5cblxuICAgICAgICAgIGlmIChpc1ZhbHVlRmlyc3QpIHtcbiAgICAgICAgICAgIGFkZFVuaXF1ZShyZXMsIHZhbHVlWzBdKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlWzFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFkZFVuaXF1ZShyZXMsIHZhbHVlWzFdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkVW5pcXVlKHJlcywgdmFsdWVbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRVbmlxdWUocmVzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gTk9URTogaXQgaXMgaW1wb3J0YW50IHRvIGtlZXAgdGhlIG9yZGVyIG9mIGl0ZW1zIGluIHRoZSBwYXJzZWQgb3V0cHV0XG4gICAgLy8gdGhlIHNhbWUgYXMgaXQgd2FzIGluIHRoZSBpbmZsdXhkYi1yZXNwb25zZS5cbiAgICAvLyB3ZSB1c2UgYSBgU2V0YCB0byBjb2xsZWN0IHRoZSB1bmlxdWUtcmVzdWx0cywgYW5kIGBTZXRgIGl0ZXJhdGlvblxuICAgIC8vIG9yZGVyIGlzIGluc2VydGlvbi1vcmRlciwgc28gdGhpcyBzaG91bGQgYmUgb2suXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocmVzKS5tYXAoKHYpID0+ICh7IHRleHQ6IHYgfSkpO1xuICB9XG5cbiAgZ2V0VGFibGUoZGZzOiBEYXRhRnJhbWVbXSwgdGFyZ2V0OiBJbmZsdXhRdWVyeSwgbWV0YTogUXVlcnlSZXN1bHRNZXRhKTogVGFibGVNb2RlbCB7XG4gICAgbGV0IHRhYmxlID0gbmV3IFRhYmxlTW9kZWwoKTtcblxuICAgIGlmIChkZnMubGVuZ3RoID4gMCkge1xuICAgICAgdGFibGUubWV0YSA9IHtcbiAgICAgICAgLi4ubWV0YSxcbiAgICAgICAgZXhlY3V0ZWRRdWVyeVN0cmluZzogZGZzWzBdLm1ldGE/LmV4ZWN1dGVkUXVlcnlTdHJpbmcsXG4gICAgICB9O1xuXG4gICAgICB0YWJsZS5yZWZJZCA9IHRhcmdldC5yZWZJZDtcbiAgICAgIHRhYmxlID0gZ2V0VGFibGVDb2xzKGRmcywgdGFibGUsIHRhcmdldCk7XG5cbiAgICAgIC8vIGlmIGdyb3VwIGJ5IHRhZyhzKSBhZGRlZFxuICAgICAgaWYgKGRmc1swXS5maWVsZHNbMV0gJiYgZGZzWzBdLmZpZWxkc1sxXS5sYWJlbHMpIHtcbiAgICAgICAgbGV0IGRmc0J5TGFiZWxzOiBhbnkgPSBncm91cEJ5KGRmcywgKGRmOiBEYXRhRnJhbWUpID0+XG4gICAgICAgICAgZGYuZmllbGRzWzFdLmxhYmVscyA/IE9iamVjdC52YWx1ZXMoZGYuZmllbGRzWzFdLmxhYmVscyEpIDogbnVsbFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBsYWJlbHMgPSBPYmplY3Qua2V5cyhkZnNCeUxhYmVscyk7XG4gICAgICAgIGRmc0J5TGFiZWxzID0gT2JqZWN0LnZhbHVlcyhkZnNCeUxhYmVscyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZnNCeUxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRhYmxlID0gZ2V0VGFibGVSb3dzKGRmc0J5TGFiZWxzW2ldLCB0YWJsZSwgWy4uLmxhYmVsc1tpXS5zcGxpdCgnLCcpXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhYmxlID0gZ2V0VGFibGVSb3dzKGRmcywgdGFibGUsIFtdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFibGU7XG4gIH1cblxuICBhc3luYyB0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2Uob3B0aW9uczogYW55LCBkYXRhOiBhbnksIHRhcmdldDogSW5mbHV4UXVlcnkpOiBQcm9taXNlPEFubm90YXRpb25FdmVudFtdPiB7XG4gICAgY29uc3QgcnNwID0gdG9EYXRhUXVlcnlSZXNwb25zZShkYXRhLCBbdGFyZ2V0XSBhcyBEYXRhUXVlcnlbXSk7XG5cbiAgICBpZiAocnNwKSB7XG4gICAgICBjb25zdCB0YWJsZSA9IHRoaXMuZ2V0VGFibGUocnNwLmRhdGEsIHRhcmdldCwge30pO1xuICAgICAgY29uc3QgbGlzdDogYW55W10gPSBbXTtcbiAgICAgIGxldCB0aXRsZUNvbDogYW55ID0gbnVsbDtcbiAgICAgIGxldCB0aW1lQ29sOiBhbnkgPSBudWxsO1xuICAgICAgbGV0IHRpbWVFbmRDb2w6IGFueSA9IG51bGw7XG4gICAgICBjb25zdCB0YWdzQ29sOiBhbnkgPSBbXTtcbiAgICAgIGxldCB0ZXh0Q29sOiBhbnkgPSBudWxsO1xuXG4gICAgICBlYWNoKHRhYmxlLmNvbHVtbnMsIChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChjb2x1bW4udGV4dC50b0xvd2VyQ2FzZSgpID09PSAndGltZScpIHtcbiAgICAgICAgICB0aW1lQ29sID0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2x1bW4udGV4dCA9PT0gb3B0aW9ucy5hbm5vdGF0aW9uLnRpdGxlQ29sdW1uKSB7XG4gICAgICAgICAgdGl0bGVDb2wgPSBpbmRleDtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbENvbnRhaW5zVGFnKGNvbHVtbi50ZXh0LCBvcHRpb25zLmFubm90YXRpb24udGFnc0NvbHVtbikpIHtcbiAgICAgICAgICB0YWdzQ29sLnB1c2goaW5kZXgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uLnRleHQuaW5jbHVkZXMob3B0aW9ucy5hbm5vdGF0aW9uLnRleHRDb2x1bW4pKSB7XG4gICAgICAgICAgdGV4dENvbCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sdW1uLnRleHQgPT09IG9wdGlvbnMuYW5ub3RhdGlvbi50aW1lRW5kQ29sdW1uKSB7XG4gICAgICAgICAgdGltZUVuZENvbCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBsZWdhY3kgY2FzZVxuICAgICAgICBpZiAoIXRpdGxlQ29sICYmIHRleHRDb2wgIT09IGluZGV4KSB7XG4gICAgICAgICAgdGl0bGVDb2wgPSBpbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGVhY2godGFibGUucm93cywgKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgYW5ub3RhdGlvbjogb3B0aW9ucy5hbm5vdGF0aW9uLFxuICAgICAgICAgIHRpbWU6ICtuZXcgRGF0ZSh2YWx1ZVt0aW1lQ29sXSksXG4gICAgICAgICAgdGl0bGU6IHZhbHVlW3RpdGxlQ29sXSxcbiAgICAgICAgICB0aW1lRW5kOiB2YWx1ZVt0aW1lRW5kQ29sXSxcbiAgICAgICAgICAvLyBSZW1vdmUgZW1wdHkgdmFsdWVzLCB0aGVuIHNwbGl0IGluIGRpZmZlcmVudCB0YWdzIGZvciBjb21tYSBzZXBhcmF0ZWQgdmFsdWVzXG4gICAgICAgICAgdGFnczogZmxhdHRlbihcbiAgICAgICAgICAgIHRhZ3NDb2xcbiAgICAgICAgICAgICAgLmZpbHRlcigodDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW3RdO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAubWFwKCh0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVbdF0uc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIHRleHQ6IHZhbHVlW3RleHRDb2xdLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxpc3QucHVzaChkYXRhKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbENvbnRhaW5zVGFnKGNvbFRleHQ6IHN0cmluZywgdGFnc0NvbHVtbjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHRhZ3MgPSAodGFnc0NvbHVtbiB8fCAnJykucmVwbGFjZSgnICcsICcnKS5zcGxpdCgnLCcpO1xuICBmb3IgKHZhciB0YWcgb2YgdGFncykge1xuICAgIGlmIChjb2xUZXh0LmluY2x1ZGVzKHRhZykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFRhYmxlQ29scyhkZnM6IERhdGFGcmFtZVtdLCB0YWJsZTogVGFibGVNb2RlbCwgdGFyZ2V0OiBJbmZsdXhRdWVyeSk6IFRhYmxlTW9kZWwge1xuICBjb25zdCBzZWxlY3RlZFBhcmFtcyA9IGdldFNlbGVjdGVkUGFyYW1zKHRhcmdldCk7XG5cbiAgZGZzWzBdLmZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIC8vIFRpbWUgY29sXG4gICAgaWYgKGZpZWxkLm5hbWUgPT09ICd0aW1lJykge1xuICAgICAgdGFibGUuY29sdW1ucy5wdXNoKHsgdGV4dDogJ1RpbWUnLCB0eXBlOiBGaWVsZFR5cGUudGltZSB9KTtcbiAgICB9XG5cbiAgICAvLyBHcm91cCBieSAobGFiZWwpIGNvbHVtbihzKVxuICAgIGVsc2UgaWYgKGZpZWxkLm5hbWUgPT09ICd2YWx1ZScpIHtcbiAgICAgIGlmIChmaWVsZC5sYWJlbHMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZmllbGQubGFiZWxzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICB0YWJsZS5jb2x1bW5zLnB1c2goeyB0ZXh0OiBrZXkgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gR2V0IGNvbHMgZm9yIGFubm90YXRpb25RdWVyeVxuICBpZiAoZGZzWzBdLnJlZklkID09PSAnbWV0cmljRmluZFF1ZXJ5Jykge1xuICAgIGRmcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLm5hbWUpIHtcbiAgICAgICAgdGFibGUuY29sdW1ucy5wdXNoKHsgdGV4dDogZmllbGQubmFtZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNlbGVjdCAobWV0cmljKSBjb2x1bW4ocylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgIHRhYmxlLmNvbHVtbnMucHVzaCh7IHRleHQ6IHNlbGVjdGVkUGFyYW1zW2ldIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuXG5mdW5jdGlvbiBnZXRUYWJsZVJvd3MoZGZzOiBEYXRhRnJhbWVbXSwgdGFibGU6IFRhYmxlTW9kZWwsIGxhYmVsczogc3RyaW5nW10pOiBUYWJsZU1vZGVsIHtcbiAgY29uc3QgdmFsdWVzID0gZGZzWzBdLmZpZWxkc1swXS52YWx1ZXMudG9BcnJheSgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGltZSA9IHZhbHVlc1tpXTtcbiAgICBjb25zdCBtZXRyaWNzID0gZGZzLm1hcCgoZGY6IERhdGFGcmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGRmLmZpZWxkc1sxXSA/IGRmLmZpZWxkc1sxXS52YWx1ZXMudG9BcnJheSgpW2ldIDogbnVsbDtcbiAgICB9KTtcbiAgICBpZiAobWV0cmljcy5pbmRleE9mKG51bGwpIDwgMCkge1xuICAgICAgdGFibGUucm93cy5wdXNoKFt0aW1lLCAuLi5sYWJlbHMsIC4uLm1ldHJpY3NdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQYXJhbXModGFyZ2V0OiBJbmZsdXhRdWVyeSk6IHN0cmluZ1tdIHtcbiAgbGV0IGFsbFBhcmFtczogc3RyaW5nW10gPSBbXTtcbiAgdGFyZ2V0LnNlbGVjdD8uZm9yRWFjaCgoc2VsZWN0KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3QuZmlsdGVyKCh4KSA9PiB4LnR5cGUgIT09ICdmaWVsZCcpO1xuICAgIGlmIChzZWxlY3Rvci5sZW5ndGggPiAwKSB7XG4gICAgICBhbGxQYXJhbXMucHVzaChzZWxlY3RvclswXS50eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNlbGVjdFswXSAmJiBzZWxlY3RbMF0ucGFyYW1zICYmIHNlbGVjdFswXS5wYXJhbXNbMF0pIHtcbiAgICAgICAgYWxsUGFyYW1zLnB1c2goc2VsZWN0WzBdLnBhcmFtc1swXS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGxldCB1bmlxdWVQYXJhbXM6IHN0cmluZ1tdID0gW107XG4gIGFsbFBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgIHVuaXF1ZVBhcmFtcy5wdXNoKGluY3JlbWVudE5hbWUocGFyYW0sIHBhcmFtLCB1bmlxdWVQYXJhbXMsIDApKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHVuaXF1ZVBhcmFtcztcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50TmFtZShuYW1lOiBzdHJpbmcsIG5hbWVJbmNyZW1lbmV0OiBzdHJpbmcsIHBhcmFtczogc3RyaW5nW10sIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAocGFyYW1zLmluZGV4T2YobmFtZUluY3JlbWVuZXQpID4gLTEpIHtcbiAgICBpbmRleCsrO1xuICAgIHJldHVybiBpbmNyZW1lbnROYW1lKG5hbWUsIG5hbWUgKyAnXycgKyBpbmRleCwgcGFyYW1zLCBpbmRleCk7XG4gIH1cbiAgcmV0dXJuIG5hbWVJbmNyZW1lbmV0O1xufVxuXG5mdW5jdGlvbiBhZGRVbmlxdWUoczogU2V0PHN0cmluZz4sIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgcy5hZGQodmFsdWUudG9TdHJpbmcoKSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhUXVlcnksIERhdGFTb3VyY2VKc29uRGF0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZW51bSBJbmZsdXhWZXJzaW9uIHtcbiAgSW5mbHV4UUwgPSAnSW5mbHV4UUwnLFxuICBGbHV4ID0gJ0ZsdXgnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZmx1eE9wdGlvbnMgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICB2ZXJzaW9uPzogSW5mbHV4VmVyc2lvbjtcblxuICB0aW1lSW50ZXJ2YWw/OiBzdHJpbmc7XG4gIGh0dHBNb2RlPzogc3RyaW5nO1xuXG4gIC8vIFdpdGggRmx1eFxuICBvcmdhbml6YXRpb24/OiBzdHJpbmc7XG4gIGRlZmF1bHRCdWNrZXQ/OiBzdHJpbmc7XG4gIG1heFNlcmllcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmZsdXhTZWN1cmVKc29uRGF0YSB7XG4gIC8vIEZvciBGbHV4XG4gIHRva2VuPzogc3RyaW5nO1xuXG4gIC8vIEluIDF4IGEgZGlmZmVyZW50IHBhc3N3b3JkIGNhbiBiZSBzZW50IHRoYW4gdGhlbiBIVFRQIGF1dGhcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mbHV4UXVlcnlQYXJ0IHtcbiAgdHlwZTogc3RyaW5nO1xuICBwYXJhbXM/OiBBcnJheTxzdHJpbmcgfCBudW1iZXI+O1xuICAvLyBGSVhNRTogYGludGVydmFsYCBkb2VzIG5vdCBzZWVtIHRvIGJlIHVzZWQuXG4gIC8vIGNoZWNrIGFsbCB0aGUgaW5mbHV4ZGIgcGFydHMgKHF1ZXJ5LWdlbmVyYXRpb24gZXRjLiksXG4gIC8vIGlmIGl0IGlzIHJlYWxseSBzbywgYW5kIGlmIHllcywgcmVtb3ZlIGl0XG4gIGludGVydmFsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZmx1eFF1ZXJ5VGFnIHtcbiAga2V5OiBzdHJpbmc7XG4gIG9wZXJhdG9yPzogc3RyaW5nO1xuICBjb25kaXRpb24/OiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIFJlc3VsdEZvcm1hdCA9ICd0aW1lX3NlcmllcycgfCAndGFibGUnIHwgJ2xvZ3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluZmx1eFF1ZXJ5IGV4dGVuZHMgRGF0YVF1ZXJ5IHtcbiAgcG9saWN5Pzogc3RyaW5nO1xuICBtZWFzdXJlbWVudD86IHN0cmluZztcbiAgcmVzdWx0Rm9ybWF0PzogUmVzdWx0Rm9ybWF0O1xuICBvcmRlckJ5VGltZT86IHN0cmluZztcbiAgdGFncz86IEluZmx1eFF1ZXJ5VGFnW107XG4gIGdyb3VwQnk/OiBJbmZsdXhRdWVyeVBhcnRbXTtcbiAgc2VsZWN0PzogSW5mbHV4UXVlcnlQYXJ0W11bXTtcbiAgbGltaXQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNsaW1pdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdHo/OiBzdHJpbmc7XG4gIC8vIE5PVEU6IGBmaWxsYCBpcyBub3QgdXNlZCBpbiB0aGUgcXVlcnktZWRpdG9yIGFueW1vcmUsIGFuZCBpcyByZW1vdmVkXG4gIC8vIGlmIGFueSBjaGFuZ2UgaGFwcGVucyBpbiB0aGUgcXVlcnktZWRpdG9yLiB0aGUgcXVlcnktZ2VuZXJhdGlvbiBzdGlsbFxuICAvLyBzdXBwb3J0cyBpdCBmb3Igbm93LlxuICBmaWxsPzogc3RyaW5nO1xuICByYXdRdWVyeT86IGJvb2xlYW47XG4gIHF1ZXJ5Pzogc3RyaW5nO1xuICBhbGlhcz86IHN0cmluZztcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUHJldmlvdXMoc3RhdGUpIHtcbiAgICB2YXIgcmVmID0gdXNlUmVmKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBzdGF0ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG4iXSwibmFtZXMiOlsidW5pcXVlSWQiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJvblVwZGF0ZURhdGFzb3VyY2VPcHRpb24iLCJ1cGRhdGVEYXRhc291cmNlUGx1Z2luUmVzZXRPcHRpb24iLCJvblVwZGF0ZURhdGFzb3VyY2VKc29uRGF0YU9wdGlvbiIsIm9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uU2VsZWN0Iiwib25VcGRhdGVEYXRhc291cmNlU2VjdXJlSnNvbkRhdGFPcHRpb24iLCJ1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24iLCJBbGVydCIsIkRhdGFTb3VyY2VIdHRwU2V0dGluZ3MiLCJJbmZvQm94IiwiSW5saW5lRmllbGQiLCJJbmxpbmVGb3JtTGFiZWwiLCJMZWdhY3lGb3JtcyIsIlNlbGVjdCIsIklucHV0IiwiU2VjcmV0Rm9ybUZpZWxkIiwiSW5mbHV4VmVyc2lvbiIsImh0dHBNb2RlcyIsImxhYmVsIiwidmFsdWUiLCJ2ZXJzaW9ucyIsIkluZmx1eFFMIiwiZGVzY3JpcHRpb24iLCJGbHV4IiwiQ29uZmlnRWRpdG9yIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIm1heFNlcmllcyIsInNlbGVjdGVkIiwib3B0aW9ucyIsIm9uT3B0aW9uc0NoYW5nZSIsImNvcHkiLCJqc29uRGF0YSIsInZlcnNpb24iLCJhY2Nlc3MiLCJiYXNpY0F1dGgiLCJodHRwTW9kZSIsInVzZXIiLCJkYXRhYmFzZSIsInN0YXRlIiwidG9TdHJpbmciLCJodG1sUHJlZml4IiwicmVuZGVySW5mbHV4MngiLCJzZWN1cmVKc29uRmllbGRzIiwic2VjdXJlSnNvbkRhdGEiLCJvcmdhbml6YXRpb24iLCJ0b2tlbiIsIm9uUmVzZXRUb2tlbiIsImRlZmF1bHRCdWNrZXQiLCJ0aW1lSW50ZXJ2YWwiLCJyZW5kZXJJbmZsdXgxeCIsInBhc3N3b3JkIiwib25SZXNldFBhc3N3b3JkIiwiZmluZCIsInJlbmRlciIsIm9uVmVyc2lvbkNoYW5nZWQiLCJldmVudCIsInNldFN0YXRlIiwiY3VycmVudFRhcmdldCIsInZhbCIsInBhcnNlSW50IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJ1bmRlZmluZWQiLCJjeCIsImNzcyIsImdldFRlbXBsYXRlU3J2IiwiTGlua0J1dHRvbiIsIlNlZ21lbnQiLCJDb2RlRWRpdG9yIiwiQ29kZUVkaXRvclN1Z2dlc3Rpb25JdGVtS2luZCIsInNhbXBsZXMiLCJGbHV4UXVlcnlFZGl0b3IiLCJxdWVyeSIsIm9uQ2hhbmdlIiwib25SdW5RdWVyeSIsImZvcmNlVXBkYXRlIiwic3VncyIsImtpbmQiLCJQcm9wZXJ0eSIsImRldGFpbCIsInRlbXBsYXRlU3J2IiwiZ2V0VmFyaWFibGVzIiwiZm9yRWFjaCIsInZhcmlhYmxlIiwibmFtZSIsInJlcGxhY2UiLCJwdXNoIiwiVGV4dCIsImVkaXRvciIsInNldFRpbWVvdXQiLCJsYXlvdXQiLCJoZWxwVG9vbHRpcCIsIm9uRmx1eFF1ZXJ5Q2hhbmdlIiwiZ2V0U3VnZ2VzdGlvbnMiLCJlZGl0b3JEaWRNb3VudENhbGxiYWNrSGFjayIsIm9uU2FtcGxlQ2hhbmdlIiwiQ0hFQVRfU0hFRVRfSVRFTVMiLCJ0aXRsZSIsIkluZmx1eENoZWF0U2hlZXQiLCJtYXAiLCJpdGVtIiwiSW5mbHV4U3RhcnRQYWdlIiwib25DbGlja0V4YW1wbGUiLCJidWlsZFJhd1F1ZXJ5IiwiUXVlcnlFZGl0b3JNb2RlU3dpdGNoZXIiLCJSYXdJbmZsdXhRTEVkaXRvciIsIkVkaXRvciIsIlZpc3VhbEluZmx1eFFMRWRpdG9yIiwiUXVlcnlFZGl0b3IiLCJkYXRhc291cmNlIiwicmFuZ2UiLCJkYXRhIiwiaXNGbHV4IiwiZGlzcGxheSIsImZsZXhHcm93IiwicmF3UXVlcnkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsImlzUmF3IiwiaXNNb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJUZXh0QXJlYSIsIkhvcml6b250YWxHcm91cCIsIlJFU1VMVF9GT1JNQVRTIiwiREVGQVVMVF9SRVNVTFRfRk9STUFUIiwidXNlU2hhZG93ZWRTdGF0ZSIsInVzZVVuaXF1ZUlkIiwiY3VycmVudFF1ZXJ5Iiwic2V0Q3VycmVudFF1ZXJ5IiwiY3VycmVudEFsaWFzIiwic2V0Q3VycmVudEFsaWFzIiwiYWxpYXMiLCJhbGlhc0VsZW1lbnRJZCIsInNlbGVjdEVsZW1lbnRJZCIsInJlc3VsdEZvcm1hdCIsImFwcGx5RGVsYXllZENoYW5nZXNBbmRSdW5RdWVyeSIsImUiLCJ2IiwiVmFyaWFibGVRdWVyeUVkaXRvciIsInJlZklkIiwib25SZWZyZXNoIiwiU2VnIiwidW53cmFwIiwiQWRkQnV0dG9uIiwibG9hZE9wdGlvbnMiLCJhbGxvd0N1c3RvbVZhbHVlIiwib25BZGQiLCJ1c2VNZW1vIiwiSW5saW5lTGFiZWwiLCJTZWdtZW50U2VjdGlvbiIsInVzZVN0eWxlczIiLCJnZXRBbGxNZWFzdXJlbWVudHNGb3JUYWdzIiwiZ2V0QWxsUG9saWNpZXMiLCJnZXRGaWVsZEtleXNGb3JNZWFzdXJlbWVudCIsImdldFRhZ0tleXNGb3JNZWFzdXJlbWVudEFuZFRhZ3MiLCJnZXRUYWdWYWx1ZXMiLCJub3JtYWxpemVRdWVyeSIsImFkZE5ld1NlbGVjdFBhcnQiLCJyZW1vdmVTZWxlY3RQYXJ0IiwiYWRkTmV3R3JvdXBCeVBhcnQiLCJyZW1vdmVHcm91cEJ5UGFydCIsImNoYW5nZVNlbGVjdFBhcnQiLCJjaGFuZ2VHcm91cEJ5UGFydCIsIkZvcm1hdEFzU2VjdGlvbiIsIkZyb21TZWN0aW9uIiwiSW5wdXRTZWN0aW9uIiwiT3JkZXJCeVRpbWVTZWN0aW9uIiwiUGFydExpc3RTZWN0aW9uIiwiVGFnc1NlY3Rpb24iLCJnZXROZXdTZWxlY3RQYXJ0T3B0aW9ucyIsImdldE5ld0dyb3VwQnlQYXJ0T3B0aW9ucyIsIm1ha2VQYXJ0TGlzdCIsImdldFRlbXBsYXRlVmFyaWFibGVPcHRpb25zIiwid2l0aFRlbXBsYXRlVmFyaWFibGVPcHRpb25zIiwib3B0aW9uc1Byb21pc2UiLCJ0aGVuIiwiZmlsdGVyVGFncyIsInBhcnRzIiwiYWxsVGFnS2V5cyIsImZpbHRlciIsInQiLCJoYXMiLCJrZXkiLCJmb3JtYXRBc0lkIiwib3JkZXJCeVRpbWVJZCIsInN0eWxlcyIsImdldFN0eWxlcyIsIm1lYXN1cmVtZW50IiwicG9saWN5IiwidGFncyIsIlNldCIsInNlbGVjdExpc3RzIiwiZHluYW1pY1NlbGVjdFBhcnRPcHRpb25zIiwiTWFwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZWxlY3QiLCJzZWwiLCJnZXRUYWdLZXlzIiwia2V5cyIsImdyb3VwQnlMaXN0IiwiZHluYW1pY0dyb3VwQnlQYXJ0T3B0aW9ucyIsImdyb3VwQnkiLCJvbkFwcGxpZWRDaGFuZ2UiLCJuZXdRdWVyeSIsImhhbmRsZUZyb21TZWN0aW9uQ2hhbmdlIiwicCIsIm0iLCJoYW5kbGVUYWdzU2VjdGlvbkNoYW5nZSIsImxlbmd0aCIsImlubGluZUxhYmVsIiwiaW5kZXgiLCJwYXJ0SW5kZXgiLCJuZXdQYXJhbXMiLCJ0eXBlIiwidHoiLCJvcmRlckJ5VGltZSIsImxpbWl0Iiwic2xpbWl0IiwiZm9ybWF0IiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwidGV4dCIsInBhZGRpbmdSaWdodENsYXNzIiwiY2xhc3NOYW1lIiwiaW5wdXRJZCIsInRvU2VsZWN0YWJsZVZhbHVlIiwiREVGQVVMVF9QT0xJQ1kiLCJnZXRQb2xpY3lPcHRpb25zIiwiZ2V0TWVhc3VyZW1lbnRPcHRpb25zIiwiaGFuZGxlUG9saWN5TG9hZE9wdGlvbnMiLCJhbGxQb2xpY2llcyIsImFsbFBvbGljaWVzV2l0aERlZmF1bHQiLCJzb21lIiwiaGFuZGxlTWVhc3VyZW1lbnRMb2FkT3B0aW9ucyIsImFsbE1lYXN1cmVtZW50cyIsImlzV2lkZSIsInBsYWNlaG9sZGVyIiwiY3VycmVudFZhbHVlIiwic2V0Q3VycmVudFZhbHVlIiwib25CbHVyIiwibmV3VmFsdWUiLCJPUFRJT05TIiwiTWVudUl0ZW0iLCJXaXRoQ29udGV4dE1lbnUiLCJNZW51R3JvdXAiLCJ1c2VUaGVtZTIiLCJyZW5kZXJSZW1vdmFibGVOYW1lTWVudUl0ZW1zIiwib25DbGljayIsIm5vUmlnaHRNYXJnaW5QYWRkaW5nQ2xhc3MiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5SaWdodCIsIlJlbW92YWJsZU5hbWUiLCJvblJlbW92ZSIsIm9wZW5NZW51Iiwibm9Ib3Jpek1hcmdpblBhZGRpbmdDbGFzcyIsInBhZGRpbmdMZWZ0IiwibWFyZ2luTGVmdCIsImdldFBhcnRDbGFzcyIsImxpbmVIZWlnaHQiLCJ0eXBvZ3JhcGh5IiwiYm9keSIsImZvbnRTaXplIiwiUGFydCIsInBhcmFtcyIsInBhcnRDbGFzcyIsIm9uUGFyYW1DaGFuZ2UiLCJwYXIiLCJpIiwiaXNMYXN0IiwiaXRlbXMiLCJnZXROZXdQYXJ0T3B0aW9ucyIsIm9uQWRkTmV3UGFydCIsIm9uUmVtb3ZlUGFydCIsInBhcnQiLCJwYXJzIiwiZGVib3VuY2VQcm9taXNlIiwidXNlQXN5bmNGbiIsIkFzeW5jU2VsZWN0Iiwic2VsZWN0Q2xhc3MiLCJtaW5XaWR0aCIsImZvcm1hdENyZWF0ZUxhYmVsIiwiU2VsUmVsb2FkIiwib25DbG9zZSIsImRlYm91bmNlZExvYWRPcHRpb25zIiwibGVhZGluZyIsIlNlbFNpbmdsZUxvYWQiLCJsb2FkU3RhdGUiLCJkb0xvYWQiLCJsb2FkaW5nIiwiU2VsIiwiZmlsdGVyQnlMb2FkT3B0aW9ucyIsIklucCIsImluaXRpYWxWYWx1ZSIsImRlZmF1bHRCdXR0b25DbGFzcyIsIndpZHRoIiwiY3Vyc29yIiwiYnV0dG9uQ2xhc3NOYW1lIiwiaXNPcGVuIiwic2V0T3BlbiIsImFkanVzdE9wZXJhdG9ySWZOZWVkZWQiLCJnZXRDb25kaXRpb24iLCJnZXRPcGVyYXRvciIsImtub3duT3BlcmF0b3JzIiwia25vd25Db25kaXRpb25zIiwib3BlcmF0b3JPcHRpb25zIiwiY29uZGl0aXRvbk9wdGlvbnMiLCJsb2FkQ29uZGl0aW9uT3B0aW9ucyIsImxvYWRPcGVyYXRvck9wdGlvbnMiLCJUYWciLCJ0YWciLCJpc0ZpcnN0IiwiZ2V0VGFnS2V5T3B0aW9ucyIsImdldFRhZ1ZhbHVlT3B0aW9ucyIsIm9wZXJhdG9yIiwiY29uZGl0aW9uIiwiZ2V0VGFnS2V5U2VnbWVudE9wdGlvbnMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImdldFRhZ1ZhbHVlU2VnbWVudE9wdGlvbnMiLCJvcCIsIm9uVGFnQ2hhbmdlIiwibmV3VGFnIiwibmV3VGFncyIsIm9uVGFnUmVtb3ZlIiwiYWRkTmV3VGFnIiwidGFnS2V5IiwibWluaW1hbFRhZyIsIm5ld1QiLCJJbmZsdXhRdWVyeU1vZGVsIiwicXVlcnlQYXJ0IiwiY2F0ZWdvcmllcyIsImdldENhdGVnb3JpZXMiLCJPYmplY3QiLCJjaGlsZHJlbiIsIngiLCJ0YWdLZXlzIiwicXVlcnlDb3B5IiwibW9kZWwiLCJoYXNGaWxsIiwiaGFzR3JvdXBCeVRpbWUiLCJnZXRQYXJ0UGFyYW1zIiwiZHluYW1pY1BhcmFtT3B0aW9ucyIsImRlZiIsImNyZWF0ZSIsInBhcmFtVmFsdWVzIiwiRXJyb3IiLCJkZWZQYXJhbSIsImR5bmFtaWNMb29rdXAiLCJnZXQiLCJxdWVyeVBhcnRzIiwicXAiLCJpc1JlZ2V4IiwidGVzdCIsImN1cnJlbnRPcGVyYXRvciIsIm5ld1RhZ1ZhbHVlIiwiaXNDdXJyZW50T3BlcmF0b3JSZWdleCIsImlzTmV3VGFnVmFsdWVSZWdleCIsInVzZVByZXZpb3VzIiwib3V0c2lkZVZhbCIsImN1cnJlbnRWYWwiLCJzZXRDdXJyZW50VmFsIiwicHJldk91dHNpZGVWYWwiLCJpc091dHNpZGVWYWxDaGFuZ2VkIiwiY2xvbmVEZWVwIiwiZXh0ZW5kIiwiaXNTdHJpbmciLCJfbWFwIiwib21pdCIsInBpY2siLCJyZWR1Y2UiLCJsYXN0VmFsdWVGcm9tIiwib2YiLCJ0aHJvd0Vycm9yIiwiY2F0Y2hFcnJvciIsInY0IiwidXVpZHY0IiwiQXJyYXlWZWN0b3IiLCJkYXRlTWF0aCIsImRhdGVUaW1lIiwiRmllbGRUeXBlIiwiTG9hZGluZ1N0YXRlIiwiVElNRV9TRVJJRVNfVElNRV9GSUVMRF9OQU1FIiwiVElNRV9TRVJJRVNfVkFMVUVfRklFTERfTkFNRSIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImZyYW1lVG9NZXRyaWNGaW5kVmFsdWUiLCJnZXRCYWNrZW5kU3J2IiwiY29uZmlnIiwiSW5mbHV4U2VyaWVzIiwiSW5mbHV4UXVlcnlCdWlsZGVyIiwiUmVzcG9uc2VQYXJzZXIiLCJnZXRGaWVsZFR5cGUiLCJ2YWx1ZXMiLCJmaXJzdE5vdE51bGwiLCJudW1iZXIiLCJ2YWx1ZVR5cGUiLCJzdHJpbmciLCJib29sZWFuIiwidGltZVNlcmllc1RvRGF0YUZyYW1lIiwidGltZVNlcmllcyIsInRpbWVzIiwicG9pbnRzIiwiZGF0YXBvaW50cyIsInBvaW50IiwidGltZUZpZWxkIiwidGltZSIsInZhbHVlRmllbGQiLCJkaXNwbGF5TmFtZUZyb21EUyIsImxhYmVscyIsImZpZWxkcyIsInRhcmdldCIsIm1ldGEiLCJJbmZsdXhEYXRhc291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInVybHMiLCJ1cmwiLCJzcGxpdCIsInRyaW0iLCJ1c2VybmFtZSIsIndpdGhDcmVkZW50aWFscyIsInNldHRpbmdzRGF0YSIsImludGVydmFsIiwicmVzcG9uc2VQYXJzZXIiLCJhbm5vdGF0aW9ucyIsInJlcXVlc3QiLCJmaWx0ZXJlZFJlcXVlc3QiLCJ0YXJnZXRzIiwiaGlkZSIsImlzTWlncmF0aW9uVG9nZ2xlT25BbmRJc0FjY2Vzc1Byb3h5IiwicGlwZSIsInJlcyIsIm1lc3NhZ2UiLCJzZXJpZXNMaXN0IiwiZ3JvdXBlZEZyYW1lcyIsImZpbHRlcmVkRnJhbWVzIiwiZ2V0VGFibGUiLCJwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSIsImNsYXNzaWNRdWVyeSIsImdldFF1ZXJ5RGlzcGxheVRleHQiLCJmaWx0ZXJRdWVyeSIsImFwcGx5VGVtcGxhdGVWYXJpYWJsZXMiLCJzY29wZWRWYXJzIiwicmVzdCIsImZlYXR1cmVUb2dnbGVzIiwiaW5mbHV4ZGJCYWNrZW5kTWlncmF0aW9uIiwiYXBwbHlWYXJpYWJsZXMiLCJ0aW1lRmlsdGVyIiwiZ2V0VGltZUZpbHRlciIsInF1ZXJ5VGFyZ2V0cyIsInkiLCJhbGxRdWVyaWVzIiwiX19pbnRlcnZhbCIsImFjYyIsImN1cnJlbnQiLCJhZGhvY0ZpbHRlcnMiLCJnZXRBZGhvY0ZpbHRlcnMiLCJ0bXBRdWVyeSIsInJlbmRlckFkaG9jRmlsdGVycyIsIl9zZXJpZXNRdWVyeSIsInJlc3VsdHMiLCJyZXN1bHQiLCJzZXJpZXMiLCJleGVjdXRlZFF1ZXJ5U3RyaW5nIiwiaW5mbHV4U2VyaWVzIiwiZ2V0VGltZVNlcmllcyIsImFubm90YXRpb25RdWVyeSIsInJlamVjdCIsImFubm90YXRpb24iLCJnZXRSZWYiLCJmZXRjaCIsIm1ldGhvZCIsImZyb20iLCJ2YWx1ZU9mIiwidG8iLCJxdWVyaWVzIiwicmVxdWVzdElkIiwidHJhbnNmb3JtQW5ub3RhdGlvblJlc3BvbnNlIiwicmFuZ2VSYXciLCJ0aW1lem9uZSIsImRhc2hib2FyZCIsImdldEFubm90YXRpb25zIiwidGFyZ2V0Q29udGFpbnNUZW1wbGF0ZSIsInF1ZXJ5VGV4dCIsImNvbnRhaW5zVGVtcGxhdGUiLCJpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyIsImV4cGFuZGVkUXVlcnkiLCJwYXJhbSIsInNlbGVjdHMiLCJtZXRyaWNGaW5kUXVlcnkiLCJyc3AiLCJpbnRlcnBvbGF0ZWQiLCJyZXNwIiwicGFyc2UiLCJxdWVyeUJ1aWxkZXIiLCJidWlsZEV4cGxvcmVRdWVyeSIsIl9pbmZsdXhSZXF1ZXN0IiwicSIsImVwb2NoIiwic2VyaWFsaXplUGFyYW1zIiwibWVtbyIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJ0ZXN0RGF0YXNvdXJjZSIsImlkIiwiZGFzaGJvYXJkSWQiLCJwYW5lbElkIiwiaW50ZXJ2YWxNcyIsIm1heERhdGFQb2ludHMiLCJEb25lIiwic3RhdHVzIiwiZmlyc3QiLCJjdXJyZW50VXJsIiwic2hpZnQiLCJ1IiwiZGIiLCJyZXEiLCJwcmVjaXNpb24iLCJpbnNwZWN0IiwicGFyYW1TZXJpYWxpemVyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJlcnJvcnMiLCJlbGVtIiwiY2FuY2VsbGVkIiwiaGFuZGxlRXJyb3JzIiwiaXNJbnRlZ2VyIiwic3RhdHVzVGV4dCIsImdldEluZmx1eFRpbWUiLCJ1bnRpbCIsImRhdGUiLCJyb3VuZFVwIiwiZXhlYyIsImFtb3VudCIsInVuaXQiLCJydW5FeHBsb3JlUXVlcnkiLCJ3aXRoS2V5Iiwid2l0aE1lYXN1cmVtZW50RmlsdGVyIiwiYnVpbGRlciIsIm1lYXN1cmVtZW50RmlsdGVyIiwiaW5kZXhPZiIsImtibiIsInVwZGF0ZVByb2plY3Rpb24iLCJzZWxlY3RNb2RlbHMiLCJncm91cEJ5UGFydHMiLCJ1cGRhdGVQZXJzaXN0ZWRQYXJ0cyIsInNlbGVjdFBhcnRzIiwiZyIsImFkZEdyb3VwQnkiLCJzdHJpbmdQYXJ0cyIsIm1hdGNoIiwidHlwZVBhcnQiLCJhcmciLCJwYXJ0TW9kZWwiLCJwYXJ0Q291bnQiLCJzcGxpY2UiLCJzIiwiY2F0ZWdvcnkiLCJBZ2dyZWdhdGlvbnMiLCJTZWxlY3RvcnMiLCJyZW1vdmVTZWxlY3QiLCJtb2RlbHNJbmRleCIsImFkZFNlbGVjdFBhcnQiLCJhZGRTdHJhdGVneSIsInJlbmRlclRhZ0NvbmRpdGlvbiIsImludGVycG9sYXRlIiwic3RyIiwiZ2V0TWVhc3VyZW1lbnRBbmRQb2xpY3kiLCJpbnRlcnBvbGF0ZVF1ZXJ5U3RyIiwiZGVmYXVsdEZvcm1hdEZuIiwibXVsdGkiLCJpbmNsdWRlQWxsIiwicmVnZXhFc2NhcGUiLCJlc2NhcGVkVmFsdWVzIiwic2VsZWN0VGV4dCIsImNvbmRpdGlvbnMiLCJncm91cEJ5U2VjdGlvbiIsImZpbGwiLCJmaWx0ZXJzIiwiZWFjaCIsImluY2x1ZGVzIiwiZmxhdHRlbiIsIlRhYmxlTW9kZWwiLCJvdXRwdXQiLCJqIiwiY29sdW1ucyIsInNlcmllc05hbWUiLCJjb2x1bW5OYW1lIiwiX2dldFNlcmllc05hbWUiLCJyZWdleCIsInNlZ21lbnRzIiwiZzEiLCJnMiIsImdyb3VwIiwic2VnSW5kZXgiLCJpc05hTiIsImxpc3QiLCJ0aXRsZUNvbCIsInRpbWVDb2wiLCJ0aW1lRW5kQ29sIiwidGFnc0NvbCIsInRleHRDb2wiLCJjb2x1bW4iLCJ0aXRsZUNvbHVtbiIsInRhZ3NDb2x1bW4iLCJ0ZXh0Q29sdW1uIiwidGltZUVuZENvbHVtbiIsIkRhdGUiLCJ0aW1lRW5kIiwidGFibGUiLCJzZXJpZXNJbmRleCIsImZpcnN0Q29sIiwiZmlyc3RUYWJsZUNvbCIsInJlb3JkZXJlZCIsImhhc093blByb3BlcnR5Iiwicm93cyIsIkRhdGFTb3VyY2VQbHVnaW4iLCJJbmZsdXhBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsInBsdWdpbiIsInNldENvbmZpZ0VkaXRvciIsInNldFF1ZXJ5RWRpdG9yIiwic2V0QW5ub3RhdGlvblF1ZXJ5Q3RybCIsInNldFZhcmlhYmxlUXVlcnlFZGl0b3IiLCJzZXRRdWVyeUVkaXRvckhlbHAiLCJzZWxlY3RNb2RlbCIsImxpc3RJbmRleCIsIm5ld1NlbCIsIm5ld0dyb3VwQnkiLCJ3aGVyZUNvbmRpdGlvbnMiLCJjbG9uZSIsIlF1ZXJ5UGFydERlZiIsIlF1ZXJ5UGFydCIsImZ1bmN0aW9uUmVuZGVyZXIiLCJzdWZmaXhSZW5kZXJlciIsIlRyYW5zZm9ybWF0aW9ucyIsIlByZWRpY3RvcnMiLCJNYXRoIiwiQWxpYXNpbmciLCJGaWVsZHMiLCJjcmVhdGVQYXJ0IiwicmVnaXN0ZXIiLCJncm91cEJ5VGltZUZ1bmN0aW9ucyIsImFsaWFzUmVuZGVyZXIiLCJpbm5lckV4cHIiLCJmaWVsZFJlbmRlcmVyIiwicmVwbGFjZUFnZ3JlZ2F0aW9uQWRkU3RyYXRlZ3kiLCJtb3JlUGFydHNBdmFpbGFibGUiLCJuZXh0UGFydCIsImFkZFRyYW5zZm9ybWF0aW9uU3RyYXRlZ3kiLCJhZGRNYXRoU3RyYXRlZ3kiLCJhZGRBbGlhc1N0cmF0ZWd5IiwiYWRkRmllbGRTdHJhdGVneSIsImRlZmF1bHRQYXJhbXMiLCJyZW5kZXJlciIsInF1b3RlIiwicmVuZGVyTW9kZSIsInJlcGxhY2VBZ2dyZWdhdGlvbkFkZCIsImlzQXJyYXkiLCJ0b0RhdGFRdWVyeVJlc3BvbnNlIiwiaW5mbHV4UmVzdWx0cyIsIm5vcm1hbGl6ZWRRdWVyeSIsInRvTG93ZXJDYXNlIiwiaXNWYWx1ZUZpcnN0Iiwic2VyaWUiLCJhZGRVbmlxdWUiLCJBcnJheSIsImRmcyIsImdldFRhYmxlQ29scyIsImRmc0J5TGFiZWxzIiwiZGYiLCJnZXRUYWJsZVJvd3MiLCJjb2xDb250YWluc1RhZyIsImNvbFRleHQiLCJzZWxlY3RlZFBhcmFtcyIsImdldFNlbGVjdGVkUGFyYW1zIiwiZmllbGQiLCJ0b0FycmF5IiwibWV0cmljcyIsImFsbFBhcmFtcyIsInNlbGVjdG9yIiwidW5pcXVlUGFyYW1zIiwiaW5jcmVtZW50TmFtZSIsIm5hbWVJbmNyZW1lbmV0IiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==