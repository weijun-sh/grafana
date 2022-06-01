"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5783],{

/***/ "./public/app/plugins/datasource/influxdb/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "plugin": () => (/* binding */ module_plugin)
});

// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/types.ts
let InfluxVersion;

(function (InfluxVersion) {
  InfluxVersion["InfluxQL"] = "InfluxQL";
  InfluxVersion["Flux"] = "Flux";
})(InfluxVersion || (InfluxVersion = {}));
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/ConfigEditor.tsx
var _InlineFormLabel, _InlineFormLabel2, _InfoBox, _InlineFormLabel3, _h, _InfoBox2, _Alert, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Input,
  SecretFormField
} = grafana_ui_src.LegacyForms;




const httpModes = [{
  label: 'GET',
  value: 'GET'
}, {
  label: 'POST',
  value: 'POST'
}];
const versions = [{
  label: 'InfluxQL',
  value: InfluxVersion.InfluxQL,
  description: 'The InfluxDB SQL-like query language.'
}, {
  label: 'Flux',
  value: InfluxVersion.Flux,
  description: 'Advanced data scripting and query language.  Supported in InfluxDB 2.x and 1.8+'
}];
class ConfigEditor extends react.PureComponent {
  constructor(props) {
    var _props$options$jsonDa;

    super(props);

    _defineProperty(this, "state", {
      maxSeries: ''
    });

    _defineProperty(this, "htmlPrefix", void 0);

    _defineProperty(this, "onResetPassword", () => {
      (0,src.updateDatasourcePluginResetOption)(this.props, 'password');
    });

    _defineProperty(this, "onResetToken", () => {
      (0,src.updateDatasourcePluginResetOption)(this.props, 'token');
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

      if (selected.value === InfluxVersion.Flux) {
        copy.access = 'proxy';
        copy.basicAuth = true;
        copy.jsonData.httpMode = 'POST'; // Remove old 1x configs

        delete copy.user;
        delete copy.database;
      }

      onOptionsChange(copy);
    });

    this.state.maxSeries = ((_props$options$jsonDa = props.options.jsonData.maxSeries) === null || _props$options$jsonDa === void 0 ? void 0 : _props$options$jsonDa.toString()) || '';
    this.htmlPrefix = (0,lodash.uniqueId)('influxdb-config');
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
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-org`,
            className: "width-10",
            children: "Organization"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              id: `${htmlPrefix}-org`,
              className: "width-20",
              value: options.jsonData.organization || '',
              onChange: (0,src.onUpdateDatasourceJsonDataOption)(this.props, 'organization')
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(SecretFormField, {
            isConfigured: secureJsonFields && secureJsonFields.token,
            value: secureJsonData.token || '',
            label: "Token",
            "aria-label": "Token",
            labelWidth: 10,
            inputWidth: 20,
            onReset: this.onResetToken,
            onChange: (0,src.onUpdateDatasourceSecureJsonDataOption)(this.props, 'token')
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-10",
            children: "Default Bucket"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              className: "width-20",
              placeholder: "default bucket",
              value: options.jsonData.defaultBucket || '',
              onChange: (0,src.onUpdateDatasourceJsonDataOption)(this.props, 'defaultBucket')
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-10",
            tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
            children: "Min time interval"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              className: "width-10",
              placeholder: "10s",
              value: options.jsonData.timeInterval || '',
              onChange: (0,src.onUpdateDatasourceJsonDataOption)(this.props, 'timeInterval')
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
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_InfoBox || (_InfoBox = /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InfoBox, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
          children: "Database Access"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example:", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
            children: "SHOW MEASUREMENTS ON _internal"
          }), " or", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
            children: "SELECT * FROM \"_internal\"..\"database\" LIMIT 10"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "To support data isolation and security, make sure appropriate permissions are configured in InfluxDB."]
        })]
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-db`,
            className: "width-10",
            children: "Database"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-20",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              id: `${htmlPrefix}-db`,
              className: "width-20",
              value: options.database || '',
              onChange: (0,src.onUpdateDatasourceOption)(this.props, 'database')
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-user`,
            className: "width-10",
            children: "User"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              id: `${htmlPrefix}-user`,
              className: "width-20",
              value: options.user || '',
              onChange: (0,src.onUpdateDatasourceOption)(this.props, 'user')
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(SecretFormField, {
            isConfigured: secureJsonFields && secureJsonFields.password,
            value: secureJsonData.password || '',
            label: "Password",
            "aria-label": "Password",
            labelWidth: 10,
            inputWidth: 20,
            onReset: this.onResetPassword,
            onChange: (0,src.onUpdateDatasourceSecureJsonDataOption)(this.props, 'password')
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            htmlFor: `${htmlPrefix}-http-method`,
            className: "width-10",
            tooltip: "You can use either GET or POST HTTP method to query your InfluxDB database. The POST method allows you to perform heavy requests (with a lots of WHERE clause) while the GET method will restrict you and return an error if the query is too large.",
            children: "HTTP Method"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            inputId: `${htmlPrefix}-http-method`,
            className: "width-10",
            value: httpModes.find(httpMode => httpMode.value === options.jsonData.httpMode),
            options: httpModes,
            defaultValue: options.jsonData.httpMode,
            onChange: (0,src.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'httpMode')
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-10",
            tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
            children: "Min time interval"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-10",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              className: "width-10",
              placeholder: "10s",
              value: options.jsonData.timeInterval || '',
              onChange: (0,src.onUpdateDatasourceJsonDataOption)(this.props, 'timeInterval')
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
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: "page-heading",
        children: "Query Language"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
              "aria-label": "Query language",
              className: "width-30",
              value: options.jsonData.version === InfluxVersion.Flux ? versions[1] : versions[0],
              options: versions,
              defaultValue: versions[0],
              onChange: this.onVersionChanged
            })
          })
        })
      }), options.jsonData.version === InfluxVersion.Flux && (_InfoBox2 || (_InfoBox2 = /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InfoBox, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
          children: "Support for Flux in Grafana is currently in beta"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["Please report any issues to: ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://github.com/grafana/grafana/issues/new/choose",
            children: "https://github.com/grafana/grafana/issues"
          })]
        })]
      }))), options.access === 'direct' && (_Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: "Deprecation Notice",
        severity: "warning",
        children: "Browser access mode in the InfluxDB datasource is deprecated and will be removed in a future release."
      }))), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
        showAccessOptions: true,
        dataSourceConfig: options,
        defaultUrl: "http://localhost:8086",
        onChange: onOptionsChange
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form-group",
        children: [_div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
            className: "page-heading",
            children: "InfluxDB Details"
          })
        })), options.jsonData.version === InfluxVersion.Flux ? this.renderInflux2x() : this.renderInflux1x(), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            labelWidth: 20,
            label: "Max series",
            tooltip: "Limit the number of series/tables that Grafana will process. Lower this number to prevent abuse, and increase it if you have lots of small time series and not all are shown. Defaults to 1000.",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
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
                (0,src.updateDatasourcePluginJsonDataOption)(this.props, 'maxSeries', Number.isFinite(val) ? val : undefined);
              }
            })
          })
        })]
      })]
    });
  }

}
/* harmony default export */ const components_ConfigEditor = (ConfigEditor);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/InfluxCheatSheet.tsx
var InfluxCheatSheet_h;




const CHEAT_SHEET_ITEMS = [{
  title: 'Getting started',
  label: 'Start by selecting a measurement and field from the dropdown above. You can then use the tag selector to further narrow your search.'
}];

const InfluxCheatSheet = props => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
  children: [InfluxCheatSheet_h || (InfluxCheatSheet_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
    children: "InfluxDB Cheat Sheet"
  })), CHEAT_SHEET_ITEMS.map(item => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "cheat-sheet-item",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "cheat-sheet-item__title",
      children: item.title
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "cheat-sheet-item__label",
      children: item.label
    })]
  }, item.title))]
});

/* harmony default export */ const components_InfluxCheatSheet = (InfluxCheatSheet);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/InfluxStartPage.tsx



class InfluxStartPage extends react.PureComponent {
  render() {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(components_InfluxCheatSheet, {
      onClickExample: this.props.onClickExample
    });
  }

}
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./public/app/core/utils/kbn.ts
var kbn = __webpack_require__("./public/app/core/utils/kbn.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/state/query_part.ts
var query_part = __webpack_require__("./public/app/features/alerting/state/query_part.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/query_part.ts


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

  return new query_part/* QueryPart */.XN(part, def);
}

function register(options) {
  index[options.type] = new query_part/* QueryPartDef */.zU(options);
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
  const parts = (0,lodash.map)(selectParts, part => {
    return createPart({
      type: part.def.type,
      params: (0,lodash.clone)(part.params)
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
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'distinct',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'integral',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'mean',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'median',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'mode',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'sum',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'spread',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'non_negative_difference',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'cumulative_sum',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'stddev',
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'first',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'last',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'max',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
});
register({
  type: 'min',
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* functionRenderer */.D
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
  renderer: query_part/* suffixRenderer */.C7
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
/* harmony default export */ const influxdb_query_part = ({
  create: createPart,
  getCategories: () => {
    return categories;
  },
  replaceAggregationAdd: replaceAggregationAddStrategy
});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/influx_query_model.ts
function influx_query_model_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class InfluxQueryModel {
  /** @ngInject */
  constructor(target, templateSrv, scopedVars) {
    influx_query_model_defineProperty(this, "target", void 0);

    influx_query_model_defineProperty(this, "selectModels", []);

    influx_query_model_defineProperty(this, "queryBuilder", void 0);

    influx_query_model_defineProperty(this, "groupByParts", void 0);

    influx_query_model_defineProperty(this, "templateSrv", void 0);

    influx_query_model_defineProperty(this, "scopedVars", void 0);

    influx_query_model_defineProperty(this, "refId", void 0);

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
    this.selectModels = (0,lodash.map)(this.target.select, parts => {
      return (0,lodash.map)(parts, influxdb_query_part.create);
    });
    this.groupByParts = (0,lodash.map)(this.target.groupBy, influxdb_query_part.create);
  }

  updatePersistedParts() {
    this.target.select = (0,lodash.map)(this.selectModels, selectParts => {
      return (0,lodash.map)(selectParts, part => {
        return {
          type: part.def.type,
          params: part.params
        };
      });
    });
  }

  hasGroupByTime() {
    return (0,lodash.find)(this.target.groupBy, g => g.type === 'time');
  }

  hasFill() {
    return (0,lodash.find)(this.target.groupBy, g => g.type === 'fill');
  }

  addGroupBy(value) {
    let stringParts = value.match(/^(\w+)\((.*)\)$/);

    if (!stringParts || !this.target.groupBy) {
      return;
    }

    const typePart = stringParts[1];
    const arg = stringParts[2];
    const partModel = influxdb_query_part.create({
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
    const categories = influxdb_query_part.getCategories();

    if (part.def.type === 'time') {
      // remove fill
      this.target.groupBy = (0,lodash.filter)(this.target.groupBy, g => g.type !== 'fill'); // remove aggregations

      this.target.select = (0,lodash.map)(this.target.select, s => {
        return (0,lodash.filter)(s, part => {
          const partModel = influxdb_query_part.create(part);

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
        const modelsIndex = (0,lodash.indexOf)(this.selectModels, selectParts);
        this.selectModels.splice(modelsIndex, 1);
      }
    } else {
      const partIndex = (0,lodash.indexOf)(selectParts, part);
      selectParts.splice(partIndex, 1);
    }

    this.updatePersistedParts();
  }

  addSelectPart(selectParts, type) {
    const partModel = influxdb_query_part.create({
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
      return kbn/* default.regexEscape */.Z.regexEscape(value);
    }

    const escapedValues = (0,lodash.map)(value, kbn/* default.regexEscape */.Z.regexEscape);
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
    const conditions = (0,lodash.map)(target.tags, (tag, index) => {
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
    const conditions = (0,lodash.map)(filters, (tag, index) => {
      return this.renderTagCondition(tag, index, true);
    });
    return conditions.join(' ');
  }

}
InfluxQueryModel.$inject = ["target", "templateSrv", "scopedVars"];
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/queryUtils.ts


// FIXME: these functions are a beginning of a refactoring of influx_query_model.ts
// into a simpler approach with full typescript types.
// later we should be able to migrate the unit-tests
// that relate to these functions here, and then perhaps even move the implementation
// to this place
function buildRawQuery(query) {
  const queryCopy = (0,lodash.cloneDeep)(query); // the query-model mutates the query

  const model = new InfluxQueryModel(queryCopy);
  return model.render(false);
}
function normalizeQuery(query) {
  // we return the original query if there is no need to update it
  if (query.policy !== undefined && query.resultFormat !== undefined && query.orderByTime !== undefined && query.tags !== undefined && query.groupBy !== undefined && query.select !== undefined) {
    return query;
  } // FIXME: we should move the whole normalizeQuery logic here,
  // and then have influxQueryModel call this function,
  // to concentrate the whole logic here


  const queryCopy = (0,lodash.cloneDeep)(query); // the query-model mutates the query

  return new InfluxQueryModel(queryCopy).target;
}
function addNewSelectPart(query, type, index) {
  const queryCopy = (0,lodash.cloneDeep)(query); // the query-model mutates the query

  const model = new InfluxQueryModel(queryCopy);
  model.addSelectPart(model.selectModels[index], type);
  return model.target;
}
function removeSelectPart(query, partIndex, index) {
  const queryCopy = (0,lodash.cloneDeep)(query); // the query-model mutates the query

  const model = new InfluxQueryModel(queryCopy);
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
  const queryCopy = (0,lodash.cloneDeep)(query); // the query-model mutates the query

  const model = new InfluxQueryModel(queryCopy);
  model.addGroupBy(type);
  return model.target;
}
function removeGroupByPart(query, partIndex) {
  const queryCopy = (0,lodash.cloneDeep)(query); // the query-model mutates the query

  const model = new InfluxQueryModel(queryCopy);
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
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/FluxQueryEditor.tsx
var FluxQueryEditor_div, _LinkButton, _div2;

function FluxQueryEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








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
class FluxQueryEditor extends react.PureComponent {
  constructor() {
    super(...arguments);

    FluxQueryEditor_defineProperty(this, "onFluxQueryChange", query => {
      this.props.onChange(Object.assign({}, this.props.query, {
        query
      }));
      this.props.onRunQuery();
    });

    FluxQueryEditor_defineProperty(this, "onSampleChange", val => {
      this.props.onChange(Object.assign({}, this.props.query, {
        query: val.value
      })); // Angular HACK: Since the target does not actually change!

      this.forceUpdate();
      this.props.onRunQuery();
    });

    FluxQueryEditor_defineProperty(this, "getSuggestions", () => {
      const sugs = [{
        label: 'v.timeRangeStart',
        kind: grafana_ui_src.CodeEditorSuggestionItemKind.Property,
        detail: 'The start time'
      }, {
        label: 'v.timeRangeStop',
        kind: grafana_ui_src.CodeEditorSuggestionItemKind.Property,
        detail: 'The stop time'
      }, {
        label: 'v.windowPeriod',
        kind: grafana_ui_src.CodeEditorSuggestionItemKind.Property,
        detail: 'based on max data points'
      }, {
        label: 'v.defaultBucket',
        kind: grafana_ui_src.CodeEditorSuggestionItemKind.Property,
        detail: 'bucket configured in the datsource'
      }, {
        label: 'v.organization',
        kind: grafana_ui_src.CodeEditorSuggestionItemKind.Property,
        detail: 'org configured for the datsource'
      }];
      const templateSrv = (0,grafana_runtime_src.getTemplateSrv)();
      templateSrv.getVariables().forEach(variable => {
        const label = '${' + variable.name + '}';
        let val = templateSrv.replace(label);

        if (val === label) {
          val = '';
        }

        sugs.push({
          label,
          kind: grafana_ui_src.CodeEditorSuggestionItemKind.Text,
          detail: `(Template Variable) ${val}`
        });
      });
      return sugs;
    });

    FluxQueryEditor_defineProperty(this, "editorDidMountCallbackHack", editor => {
      setTimeout(() => editor.layout(), 100);
    });
  }

  render() {
    const {
      query
    } = this.props;

    const helpTooltip = FluxQueryEditor_div || (FluxQueryEditor_div = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: ["Type: ", /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        children: "ctrl+space"
      }), " to show template variable suggestions ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Many queries can be copied from Chronograf"]
    }));

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
        height: '200px',
        language: "sql",
        value: query.query || '',
        onBlur: this.onFluxQueryChange,
        onSave: this.onFluxQueryChange,
        showMiniMap: false,
        showLineNumbers: true,
        getSuggestions: this.getSuggestions,
        onEditorDidMount: this.editorDidMountCallbackHack
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: (0,emotion_css_esm.cx)('gf-form-inline', emotion_css_esm.css`
              margin-top: 6px;
            `),
        children: [_LinkButton || (_LinkButton = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
          icon: "external-link-alt",
          variant: "secondary",
          target: "blank",
          href: "https://docs.influxdata.com/influxdb/latest/query-data/get-started/",
          children: "Flux language syntax"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Segment, {
          options: samples,
          value: "Sample Query",
          onChange: this.onSampleChange
        }), _div2 || (_div2 = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form-label gf-form-label--grow"
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
          width: 5,
          tooltip: helpTooltip,
          children: "Help"
        })]
      })]
    });
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/QueryEditorModeSwitcher.tsx





const QueryEditorModeSwitcher = _ref => {
  let {
    isRaw,
    onChange
  } = _ref;
  const [isModalOpen, setModalOpen] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    // if the isRaw changes, we hide the modal
    setModalOpen(false);
  }, [isRaw]);

  if (isRaw) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        "aria-label": "Switch to visual editor",
        icon: "pen",
        variant: "secondary",
        type: "button",
        onClick: () => {
          // we show the are-you-sure modal
          setModalOpen(true);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
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
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/constants.ts
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
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js
var usePrevious = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/useShadowedState.ts


function useShadowedState(outsideVal) {
  const [currentVal, setCurrentVal] = (0,react.useState)(outsideVal);
  const prevOutsideVal = (0,usePrevious/* default */.Z)(outsideVal);
  (0,react.useEffect)(() => {
    const isOutsideValChanged = prevOutsideVal !== outsideVal; // if the value changes from the outside, we accept it into the state
    // (we only set it if it is different from the current value)

    if (isOutsideValChanged && currentVal !== outsideVal) {
      setCurrentVal(outsideVal);
    }
  }, [outsideVal, currentVal, prevOutsideVal]);
  return [currentVal, setCurrentVal];
}
// EXTERNAL MODULE: ./public/app/plugins/datasource/influxdb/components/useUniqueId.ts
var useUniqueId = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/RawInfluxQLEditor.tsx







// we handle 3 fields: "query", "alias", "resultFormat"
// "resultFormat" changes are applied immediately
// "query" and "alias" changes only happen on onblur
const RawInfluxQLEditor = _ref => {
  var _query$resultFormat;

  let {
    query,
    onChange,
    onRunQuery
  } = _ref;
  const [currentQuery, setCurrentQuery] = useShadowedState(query.query);
  const [currentAlias, setCurrentAlias] = useShadowedState(query.alias);
  const aliasElementId = (0,useUniqueId/* useUniqueId */.L)();
  const selectElementId = (0,useUniqueId/* useUniqueId */.L)();
  const resultFormat = (_query$resultFormat = query.resultFormat) !== null && _query$resultFormat !== void 0 ? _query$resultFormat : DEFAULT_RESULT_FORMAT;

  const applyDelayedChangesAndRunQuery = () => {
    onChange(Object.assign({}, query, {
      query: currentQuery,
      alias: currentAlias,
      resultFormat
    }));
    onRunQuery();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TextArea, {
      "aria-label": "query",
      rows: 3,
      spellCheck: false,
      placeholder: "InfluxDB Query",
      onBlur: applyDelayedChangesAndRunQuery,
      onChange: e => {
        setCurrentQuery(e.currentTarget.value);
      },
      value: currentQuery !== null && currentQuery !== void 0 ? currentQuery : ''
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
        htmlFor: selectElementId,
        children: "Format as"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: selectElementId,
        onChange: v => {
          onChange(Object.assign({}, query, {
            resultFormat: v.value
          }));
          onRunQuery();
        },
        value: resultFormat,
        options: RESULT_FORMATS
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
        htmlFor: aliasElementId,
        children: "Alias by"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/query_builder.ts



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
        query += ' WITH MEASUREMENT =~ /(?i)' + kbn/* default.regexEscape */.Z.regexEscape(withMeasurementFilter) + '/';
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
      const whereConditions = (0,lodash.reduce)(this.target.tags, (memo, tag) => {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/influxQLMetadataQuery.ts


const runExploreQuery = (type, withKey, withMeasurementFilter, target, datasource) => {
  const builder = new InfluxQueryBuilder(target, datasource.database);
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/styles.ts

const paddingRightClass = (0,emotion_css_esm.css)({
  paddingRight: '4px'
});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/unwrap.ts
function unwrap(value) {
  if (value == null) {
    throw new Error('value must not be nullish');
  }

  return value;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FormatAsSection.tsx







const className = (0,emotion_css_esm.cx)('width-8', paddingRightClass);
const FormatAsSection = _ref => {
  let {
    format,
    inputId,
    onChange
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
    inputId: inputId,
    className: className,
    onChange: v => {
      onChange(unwrap(v.value));
    },
    value: format,
    options: RESULT_FORMATS
  });
};
// EXTERNAL MODULE: ./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js
var dist = __webpack_require__("./.yarn/cache/debounce-promise-npm-3.1.2-3c185da0c7-29bac4524c.zip/node_modules/debounce-promise/dist/index.js");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Seg.tsx





 // this file is a simpler version of `grafana-ui / SegmentAsync.tsx`
// with some changes:
// 1. click-outside does not select the value. i think it's better to be explicit here.
// 2. we set a min-width on the select-element to handle cases where the `value`
//    is very short, like "x", and then you click on it and the select opens,
//    and it tries to be as short as "x" and it does not work well.
// NOTE: maybe these changes could be migrated into the SegmentAsync later


const selectClass = (0,emotion_css_esm.css)({
  minWidth: '160px'
});

// when a custom value is written into a select-box,
// by default the new value is prefixed with "Create:",
// and that sounds confusing because here we do not create
// anything. we change this to just be the entered string.
const formatCreateLabel = v => v;

const SelReload = _ref => {
  let {
    loadOptions,
    allowCustomValue,
    onChange,
    onClose
  } = _ref;
  // here we rely on the fact that writing text into the <AsyncSelect/>
  // does not cause a re-render of the current react component.
  // this way there is only a single render-call,
  // so there is only a single `debouncedLoadOptions`.
  // if we want ot make this "re-render safe,
  // we will have to put the debounced call into an useRef,
  // and probably have an useEffect
  const debouncedLoadOptions = dist_default()(loadOptions, 1000, {
    leading: true
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: selectClass,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.AsyncSelect, {
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

const SelSingleLoad = _ref2 => {
  var _loadState$value;

  let {
    loadOptions,
    allowCustomValue,
    onChange,
    onClose
  } = _ref2;
  const [loadState, doLoad] = (0,useAsyncFn/* default */.Z)(loadOptions, [loadOptions]);
  (0,react.useEffect)(() => {
    doLoad('');
  }, [doLoad, loadOptions]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: selectClass,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
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

const Sel = _ref3 => {
  let {
    loadOptions,
    filterByLoadOptions,
    allowCustomValue,
    onChange,
    onClose
  } = _ref3;
  // unfortunately <Segment/> and <SegmentAsync/> have somewhat different behavior,
  // so the simplest approach was to just create two separate wrapper-components
  return filterByLoadOptions ? /*#__PURE__*/(0,jsx_runtime.jsx)(SelReload, {
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: onChange,
    onClose: onClose
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(SelSingleLoad, {
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: onChange,
    onClose: onClose
  });
};

const Inp = _ref4 => {
  let {
    initialValue,
    onChange,
    onClose
  } = _ref4;
  const [currentValue, setCurrentValue] = useShadowedState(initialValue);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
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

const defaultButtonClass = (0,emotion_css_esm.css)({
  width: 'auto',
  cursor: 'pointer'
});
const Seg = _ref5 => {
  let {
    value,
    buttonClassName,
    loadOptions,
    filterByLoadOptions,
    allowCustomValue,
    onChange
  } = _ref5;
  const [isOpen, setOpen] = (0,react.useState)(false);

  if (!isOpen) {
    const className = (0,emotion_css_esm.cx)(defaultButtonClass, buttonClassName);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
      as: "button",
      className: className,
      onClick: () => {
        setOpen(true);
      },
      children: value
    });
  } else {
    if (loadOptions !== undefined) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Sel, {
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
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Inp, {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/toSelectableValue.ts
function toSelectableValue(t) {
  return {
    label: t,
    value: t
  };
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/FromSection.tsx






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

const FromSection = _ref => {
  let {
    policy,
    measurement,
    onChange,
    getPolicyOptions,
    getMeasurementOptions
  } = _ref;

  const handlePolicyLoadOptions = async () => {
    const allPolicies = await getPolicyOptions(); // if `default` does not exist in the list of policies, we add it

    const allPoliciesWithDefault = allPolicies.some(p => p === 'default') ? allPolicies : [DEFAULT_POLICY, ...allPolicies];
    return allPoliciesWithDefault.map(toSelectableValue);
  };

  const handleMeasurementLoadOptions = async filter => {
    const allMeasurements = await getMeasurementOptions(filter);
    return allMeasurements.map(toSelectableValue);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Seg, {
      allowCustomValue: true,
      value: policy !== null && policy !== void 0 ? policy : 'using default policy',
      loadOptions: handlePolicyLoadOptions,
      onChange: v => {
        onChange(v.value, measurement);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Seg, {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/InputSection.tsx







const InputSection = _ref => {
  let {
    value,
    onChange,
    isWide,
    placeholder
  } = _ref;
  const [currentValue, setCurrentValue] = useShadowedState(value);

  const onBlur = () => {
    // we send empty-string as undefined
    const newValue = currentValue === '' ? undefined : currentValue;
    onChange(newValue);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
      placeholder: placeholder,
      className: (0,emotion_css_esm.cx)((isWide !== null && isWide !== void 0 ? isWide : false) ? 'width-14' : 'width-8', paddingRightClass),
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/OrderByTimeSection.tsx







const OPTIONS = [{
  label: 'ascending',
  value: 'ASC'
}, {
  label: 'descending',
  value: 'DESC'
}];
const OrderByTimeSection_className = (0,emotion_css_esm.cx)('width-9', paddingRightClass);
const OrderByTimeSection = _ref => {
  let {
    value,
    onChange,
    inputId
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: inputId,
      className: OrderByTimeSection_className,
      onChange: v => {
        onChange(unwrap(v.value));
      },
      value: value,
      options: OPTIONS
    })
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/AddButton.tsx




const AddButton = _ref => {
  let {
    loadOptions,
    allowCustomValue,
    onAdd
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Seg, {
    value: "+",
    loadOptions: loadOptions,
    allowCustomValue: allowCustomValue,
    onChange: v => {
      onAdd(unwrap(v.value));
    }
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/PartListSection.tsx











const renderRemovableNameMenuItems = onClick => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.MenuGroup, {
    label: "",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.MenuItem, {
      label: "remove",
      onClick: onClick
    })
  });
};

const noRightMarginPaddingClass = (0,emotion_css_esm.css)({
  paddingRight: '0',
  marginRight: '0'
});

const RemovableName = _ref => {
  let {
    name,
    onRemove
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.WithContextMenu, {
    renderMenuItems: () => renderRemovableNameMenuItems(onRemove),
    children: _ref2 => {
      let {
        openMenu
      } = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        className: (0,emotion_css_esm.cx)('gf-form-label', noRightMarginPaddingClass),
        onClick: openMenu,
        children: name
      });
    }
  });
};

const noHorizMarginPaddingClass = (0,emotion_css_esm.css)({
  paddingLeft: '0',
  paddingRight: '0',
  marginLeft: '0',
  marginRight: '0'
});

const getPartClass = theme => {
  return (0,emotion_css_esm.cx)('gf-form-label', (0,emotion_css_esm.css)({
    paddingLeft: '0',
    // gf-form-label class makes certain css attributes incorrect
    // for the selectbox-dropdown, so we have to "reset" them back
    lineHeight: theme.typography.body.lineHeight,
    fontSize: theme.typography.body.fontSize
  }));
};

const Part = _ref3 => {
  let {
    name,
    params,
    onChange,
    onRemove
  } = _ref3;
  const theme = (0,grafana_ui_src.useTheme2)();
  const partClass = (0,react.useMemo)(() => getPartClass(theme), [theme]);

  const onParamChange = (par, i) => {
    const newParams = params.map(p => p.value);
    newParams[i] = par;
    onChange(newParams);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: partClass,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(RemovableName, {
      name: name,
      onRemove: onRemove
    }), "(", params.map((p, i) => {
      const {
        value,
        options
      } = p;
      const isLast = i === params.length - 1;
      const loadOptions = options !== null ? () => options().then(items => items.map(toSelectableValue)) : undefined;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Seg, {
          allowCustomValue: true,
          value: value,
          buttonClassName: noHorizMarginPaddingClass,
          loadOptions: loadOptions,
          onChange: v => {
            onParamChange(unwrap(v.value), i);
          }
        }), !isLast && ',']
      }, i);
    }), ")"]
  });
};

const PartListSection = _ref4 => {
  let {
    parts,
    getNewPartOptions,
    onAddNewPart,
    onRemovePart,
    onChange
  } = _ref4;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [parts.map((part, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(Part, {
      name: part.name,
      params: part.params,
      onRemove: () => {
        onRemovePart(index);
      },
      onChange: pars => {
        onChange(index, pars);
      }
    }, index)), /*#__PURE__*/(0,jsx_runtime.jsx)(AddButton, {
      loadOptions: getNewPartOptions,
      onAdd: onAddNewPart
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/tagUtils.ts
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/TagsSection.tsx








const knownOperators = ['=', '!=', '<>', '<', '>', '=~', '!~'];
const knownConditions = ['AND', 'OR'];
const operatorOptions = knownOperators.map(toSelectableValue);
const condititonOptions = knownConditions.map(toSelectableValue);

const loadConditionOptions = () => Promise.resolve(condititonOptions);

const loadOperatorOptions = () => Promise.resolve(operatorOptions);

const Tag = _ref => {
  let {
    tag,
    isFirst,
    onRemove,
    onChange,
    getTagKeyOptions,
    getTagValueOptions
  } = _ref;
  const operator = getOperator(tag);
  const condition = getCondition(tag, isFirst);

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
    }, ...tags.map(toSelectableValue)]);
  };

  const getTagValueSegmentOptions = () => {
    return getTagValueOptions(tag.key).then(tags => tags.map(toSelectableValue));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "gf-form",
    children: [condition != null && /*#__PURE__*/(0,jsx_runtime.jsx)(Seg, {
      value: condition,
      loadOptions: loadConditionOptions,
      onChange: v => {
        onChange(Object.assign({}, tag, {
          condition: v.value
        }));
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Seg, {
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
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Seg, {
      value: operator,
      loadOptions: loadOperatorOptions,
      onChange: op => {
        onChange(Object.assign({}, tag, {
          operator: op.value
        }));
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Seg, {
      allowCustomValue: true,
      value: tag.value,
      loadOptions: getTagValueSegmentOptions,
      onChange: v => {
        var _v$value;

        const value = (_v$value = v.value) !== null && _v$value !== void 0 ? _v$value : '';
        onChange(Object.assign({}, tag, {
          value,
          operator: adjustOperatorIfNeeded(operator, value)
        }));
      }
    })]
  });
};

const TagsSection = _ref2 => {
  let {
    tags,
    onChange,
    getTagKeyOptions,
    getTagValueOptions
  } = _ref2;

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
    return getTagKeyOptions().then(tags => tags.map(toSelectableValue));
  };

  const addNewTag = (tagKey, isFirst) => {
    const minimalTag = {
      key: tagKey,
      value: 'select tag value'
    };
    const newTag = {
      key: minimalTag.key,
      value: minimalTag.value,
      operator: getOperator(minimalTag),
      condition: getCondition(minimalTag, isFirst)
    };
    onChange([...tags, newTag]);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [tags.map((t, i) => /*#__PURE__*/(0,jsx_runtime.jsx)(Tag, {
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
    }, i)), /*#__PURE__*/(0,jsx_runtime.jsx)(AddButton, {
      allowCustomValue: true,
      loadOptions: getTagKeySegmentOptions,
      onAdd: v => {
        addNewTag(v, tags.length === 0);
      }
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/partListUtils.tsx




function getNewSelectPartOptions() {
  const categories = influxdb_query_part.getCategories();
  const options = [];
  const keys = Object.keys(categories);
  keys.forEach(key => {
    const children = categories[key].map(x => toSelectableValue(x.type));
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

  const model = new InfluxQueryModel(queryCopy);
  const options = [];

  if (!model.hasFill()) {
    options.push(toSelectableValue('fill(null)'));
  }

  if (!model.hasGroupByTime()) {
    options.push(toSelectableValue('time($interval)'));
  }

  tagKeys.forEach(key => {
    options.push(toSelectableValue(`tag(${key})`));
  });
  return options;
}

function getPartParams(part, dynamicParamOptions) {
  var _part$params;

  // NOTE: the way the system is constructed,
  // there always can only be one possible dynamic-lookup
  // field. in case of select it is the field,
  // in case of group-by it is the tag
  const def = influxdb_query_part.create(part).def; // we switch the numbers to strings, it will work that way too,
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
        options: unwrap(dynamicParamOptions.get(`${def.type}_${index}`))
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VisualInfluxQLEditor/Editor.tsx



















function getTemplateVariableOptions() {
  return (0,grafana_runtime_src.getTemplateSrv)().getVariables() // we make them regex-params, i'm not 100% sure why.
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

  const uniqueId = (0,useUniqueId/* useUniqueId */.L)();
  const formatAsId = `influxdb-qe-format-as-${uniqueId}`;
  const orderByTimeId = `influxdb-qe-order-by${uniqueId}`;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const query = normalizeQuery(props.query);
  const {
    datasource
  } = props;
  const {
    measurement,
    policy
  } = query;
  const allTagKeys = (0,react.useMemo)(() => {
    return getTagKeysForMeasurementAndTags(measurement, policy, [], datasource).then(tags => {
      return new Set(tags);
    });
  }, [measurement, policy, datasource]);
  const selectLists = (0,react.useMemo)(() => {
    var _query$select;

    const dynamicSelectPartOptions = new Map([['field_0', () => {
      return measurement !== undefined ? getFieldKeysForMeasurement(measurement, policy, datasource) : Promise.resolve([]);
    }]]);
    return ((_query$select = query.select) !== null && _query$select !== void 0 ? _query$select : []).map(sel => makePartList(sel, dynamicSelectPartOptions));
  }, [measurement, policy, query.select, datasource]); // the following function is not complicated enough to memoize, but it's result
  // is used in both memoized and un-memoized parts, so we have no choice

  const getTagKeys = (0,react.useMemo)(() => {
    return () => allTagKeys.then(keys => {
      var _query$tags;

      return getTagKeysForMeasurementAndTags(measurement, policy, filterTags((_query$tags = query.tags) !== null && _query$tags !== void 0 ? _query$tags : [], keys), datasource);
    });
  }, [measurement, policy, query.tags, datasource, allTagKeys]);
  const groupByList = (0,react.useMemo)(() => {
    var _query$groupBy;

    const dynamicGroupByPartOptions = new Map([['tag_0', getTagKeys]]);
    return makePartList((_query$groupBy = query.groupBy) !== null && _query$groupBy !== void 0 ? _query$groupBy : [], dynamicGroupByPartOptions);
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.SegmentSection, {
      label: "FROM",
      fill: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FromSection, {
        policy: policy,
        measurement: measurement,
        getPolicyOptions: () => getAllPolicies(datasource),
        getMeasurementOptions: filter => withTemplateVariableOptions(allTagKeys.then(keys => {
          var _query$tags2;

          return getAllMeasurementsForTags(filter === '' ? undefined : filter, filterTags((_query$tags2 = query.tags) !== null && _query$tags2 !== void 0 ? _query$tags2 : [], keys), datasource);
        })),
        onChange: handleFromSectionChange
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
        width: "auto",
        className: styles.inlineLabel,
        children: "WHERE"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(TagsSection, {
        tags: (_query$tags3 = query.tags) !== null && _query$tags3 !== void 0 ? _query$tags3 : [],
        onChange: handleTagsSectionChange,
        getTagKeyOptions: getTagKeys,
        getTagValueOptions: key => withTemplateVariableOptions(allTagKeys.then(keys => {
          var _query$tags4;

          return getTagValues(key, measurement, policy, filterTags((_query$tags4 = query.tags) !== null && _query$tags4 !== void 0 ? _query$tags4 : [], keys), datasource);
        }))
      })]
    }), selectLists.map((sel, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentSection, {
      label: index === 0 ? 'SELECT' : '',
      fill: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PartListSection, {
        parts: sel,
        getNewPartOptions: () => Promise.resolve(getNewSelectPartOptions()),
        onChange: (partIndex, newParams) => {
          const newQuery = changeSelectPart(query, index, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: type => {
          onAppliedChange(addNewSelectPart(query, type, index));
        },
        onRemovePart: partIndex => {
          onAppliedChange(removeSelectPart(query, partIndex, index));
        }
      })
    }, index)), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentSection, {
      label: "GROUP BY",
      fill: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PartListSection, {
        parts: groupByList,
        getNewPartOptions: () => getNewGroupByPartOptions(query, getTagKeys),
        onChange: (partIndex, newParams) => {
          const newQuery = changeGroupByPart(query, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: type => {
          onAppliedChange(addNewGroupByPart(query, type));
        },
        onRemovePart: partIndex => {
          onAppliedChange(removeGroupByPart(query, partIndex));
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.SegmentSection, {
      label: "TIMEZONE",
      fill: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputSection, {
        placeholder: "(optional)",
        value: query.tz,
        onChange: tz => {
          onAppliedChange(Object.assign({}, query, {
            tz
          }));
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
        htmlFor: orderByTimeId,
        width: "auto",
        className: styles.inlineLabel,
        children: "ORDER BY TIME"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(OrderByTimeSection, {
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
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.SegmentSection, {
      label: "LIMIT",
      fill: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputSection, {
        placeholder: "(optional)",
        value: (_query$limit = query.limit) === null || _query$limit === void 0 ? void 0 : _query$limit.toString(),
        onChange: limit => {
          onAppliedChange(Object.assign({}, query, {
            limit
          }));
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
        width: "auto",
        className: styles.inlineLabel,
        children: "SLIMIT"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(InputSection, {
        placeholder: "(optional)",
        value: (_query$slimit = query.slimit) === null || _query$slimit === void 0 ? void 0 : _query$slimit.toString(),
        onChange: slimit => {
          onAppliedChange(Object.assign({}, query, {
            slimit
          }));
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.SegmentSection, {
      htmlFor: formatAsId,
      label: "FORMAT AS",
      fill: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FormatAsSection, {
        inputId: formatAsId,
        format: (_query$resultFormat = query.resultFormat) !== null && _query$resultFormat !== void 0 ? _query$resultFormat : DEFAULT_RESULT_FORMAT,
        onChange: format => {
          onAppliedChange(Object.assign({}, query, {
            resultFormat: format
          }));
        }
      }), query.resultFormat !== 'table' && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
          width: "auto",
          className: styles.inlineLabel,
          children: "ALIAS"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(InputSection, {
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
    inlineLabel: emotion_css_esm.css`
      color: ${theme.colors.primary.text};
    `
  };
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/QueryEditor.tsx









const QueryEditor = _ref => {
  var _query$rawQuery;

  let {
    query,
    onChange,
    onRunQuery,
    datasource,
    range,
    data
  } = _ref;

  if (datasource.isFlux) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-query-content",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(FluxQueryEditor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery,
        datasource: datasource
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (0,emotion_css_esm.css)({
      display: 'flex'
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: (0,emotion_css_esm.css)({
        flexGrow: 1
      }),
      children: query.rawQuery ? /*#__PURE__*/(0,jsx_runtime.jsx)(RawInfluxQLEditor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Editor, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery,
        datasource: datasource
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(QueryEditorModeSwitcher, {
      isRaw: (_query$rawQuery = query.rawQuery) !== null && _query$rawQuery !== void 0 ? _query$rawQuery : false,
      onChange: value => {
        onChange(Object.assign({}, query, {
          query: buildRawQuery(query),
          rawQuery: value
        }));
        onRunQuery();
      }
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/components/VariableQueryEditor.tsx
var VariableQueryEditor_InlineFormLabel;

function VariableQueryEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class VariableQueryEditor extends react.PureComponent {
  constructor() {
    super(...arguments);

    VariableQueryEditor_defineProperty(this, "onRefresh", () => {// noop
    });
  }

  render() {
    let {
      query,
      datasource,
      onChange
    } = this.props;

    if (datasource.isFlux) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(FluxQueryEditor, {
        datasource: datasource,
        query: {
          refId: 'A',
          query
        },
        onRunQuery: this.onRefresh,
        onChange: v => onChange(v.query)
      });
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "gf-form-inline",
      children: [VariableQueryEditor_InlineFormLabel || (VariableQueryEditor_InlineFormLabel = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
        width: 10,
        children: "Query"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline gf-form--grow",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TextArea, {
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
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js
var throwError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
// EXTERNAL MODULE: ./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js + 1 modules
var v4 = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/features/templating/template_srv.ts + 1 modules
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
// EXTERNAL MODULE: ./public/app/core/table_model.ts
var table_model = __webpack_require__("./public/app/core/table_model.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/influx_series.ts
function influx_series_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class InfluxSeries {
  constructor(options) {
    influx_series_defineProperty(this, "refId", void 0);

    influx_series_defineProperty(this, "series", void 0);

    influx_series_defineProperty(this, "alias", void 0);

    influx_series_defineProperty(this, "annotation", void 0);

    influx_series_defineProperty(this, "meta", void 0);

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

    (0,lodash.each)(this.series, series => {
      const columns = series.columns.length;
      const tags = (0,lodash.map)(series.tags, (value, key) => {
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
    (0,lodash.each)(this.series, series => {
      let titleCol = null;
      let timeCol = null;
      let timeEndCol = null;
      const tagsCol = [];
      let textCol = null;
      (0,lodash.each)(series.columns, (column, index) => {
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

        if ((0,lodash.includes)((this.annotation.tagsColumn || '').replace(' ', '').split(','), column)) {
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
      (0,lodash.each)(series.values, value => {
        const data = {
          annotation: this.annotation,
          time: +new Date(value[timeCol]),
          title: value[titleCol],
          timeEnd: value[timeEndCol],
          // Remove empty values, then split in different tags for comma separated values
          tags: (0,lodash.flatten)(tagsCol.filter(t => {
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
    const table = new table_model/* default */.Z();
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


    (0,lodash.each)(this.series, (series, seriesIndex) => {
      if (seriesIndex === 0) {
        const firstCol = series.columns[0]; // Check the first column's name, if it is `time`, we
        // mark it as having the type time

        const firstTableCol = firstCol === 'time' ? {
          text: 'Time',
          type: src.FieldType.time
        } : {
          text: firstCol
        };
        table.columns.push(firstTableCol);
        (0,lodash.each)((0,lodash.keys)(series.tags), key => {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/response_parser.ts




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
    (0,lodash.each)(influxResults.series, serie => {
      (0,lodash.each)(serie.values, value => {
        if ((0,lodash.isArray)(value)) {
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
    let table = new table_model/* default */.Z();

    if (dfs.length > 0) {
      var _dfs$0$meta;

      table.meta = Object.assign({}, meta, {
        executedQueryString: (_dfs$0$meta = dfs[0].meta) === null || _dfs$0$meta === void 0 ? void 0 : _dfs$0$meta.executedQueryString
      });
      table.refId = target.refId;
      table = getTableCols(dfs, table, target); // if group by tag(s) added

      if (dfs[0].fields[1] && dfs[0].fields[1].labels) {
        let dfsByLabels = (0,lodash.groupBy)(dfs, df => df.fields[1].labels ? Object.values(df.fields[1].labels) : null);
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
    const rsp = (0,grafana_runtime_src.toDataQueryResponse)(data, [target]);

    if (rsp) {
      const table = this.getTable(rsp.data, target, {});
      const list = [];
      let titleCol = null;
      let timeCol = null;
      let timeEndCol = null;
      const tagsCol = [];
      let textCol = null;
      (0,lodash.each)(table.columns, (column, index) => {
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
      (0,lodash.each)(table.rows, value => {
        const data = {
          annotation: options.annotation,
          time: +new Date(value[timeCol]),
          title: value[titleCol],
          timeEnd: value[timeEndCol],
          // Remove empty values, then split in different tags for comma separated values
          tags: (0,lodash.flatten)(tagsCol.filter(t => {
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
        type: src.FieldType.time
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/datasource.ts
const _excluded = ["__interval", "__interval_ms"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // we detect the field type based on the value-array

function getFieldType(values) {
  // the values-array may contain a lot of nulls.
  // we need the first not-null item
  const firstNotNull = values.find(v => v !== null);

  if (firstNotNull === undefined) {
    // we could not find any not-null values
    return src.FieldType.number;
  }

  const valueType = typeof firstNotNull;

  switch (valueType) {
    case 'string':
      return src.FieldType.string;

    case 'boolean':
      return src.FieldType.boolean;

    case 'number':
      return src.FieldType.number;

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
    name: src.TIME_SERIES_TIME_FIELD_NAME,
    type: src.FieldType.time,
    config: {},
    values: new src.ArrayVector(times)
  };
  const valueField = {
    name: src.TIME_SERIES_VALUE_FIELD_NAME,
    type: getFieldType(values),
    config: {
      displayNameFromDS: timeSeries.title
    },
    values: new src.ArrayVector(values),
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

class InfluxDatasource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    var _instanceSettings$url, _instanceSettings$use, _instanceSettings$pas;

    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,template_srv/* getTemplateSrv */.J)();
    super(instanceSettings);
    this.templateSrv = templateSrv;

    datasource_defineProperty(this, "type", void 0);

    datasource_defineProperty(this, "urls", void 0);

    datasource_defineProperty(this, "username", void 0);

    datasource_defineProperty(this, "password", void 0);

    datasource_defineProperty(this, "name", void 0);

    datasource_defineProperty(this, "database", void 0);

    datasource_defineProperty(this, "basicAuth", void 0);

    datasource_defineProperty(this, "withCredentials", void 0);

    datasource_defineProperty(this, "access", void 0);

    datasource_defineProperty(this, "interval", void 0);

    datasource_defineProperty(this, "responseParser", void 0);

    datasource_defineProperty(this, "httpMode", void 0);

    datasource_defineProperty(this, "isFlux", void 0);

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
    this.responseParser = new ResponseParser();
    this.isFlux = settingsData.version === InfluxVersion.Flux;

    if (this.isFlux) {
      // When flux, use an annotation processor rather than the `annotationQuery` lifecycle
      this.annotations = {
        QueryEditor: FluxQueryEditor
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
      return super.query(filteredRequest).pipe((0,map/* map */.U)(res => {
        if (res.error) {
          throw {
            message: 'InfluxDB Error: ' + res.error.message,
            res
          };
        }

        const seriesList = [];
        const groupedFrames = (0,lodash.groupBy)(res.data, x => x.refId);

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

    return new InfluxQueryModel(query).render(false);
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

    if (config/* default.featureToggles.influxdbBackendMigration */.ZP.featureToggles.influxdbBackendMigration && this.access === 'proxy') {
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
    const targets = (0,lodash.cloneDeep)(options.targets);
    const queryTargets = [];
    let i, y;

    let allQueries = (0,lodash.map)(targets, target => {
      if (target.hide) {
        return '';
      }

      queryTargets.push(target); // backward compatibility

      scopedVars.interval = scopedVars.__interval;
      return new InfluxQueryModel(target, this.templateSrv, scopedVars).render(true);
    }).reduce((acc, current) => {
      if (current !== '') {
        acc += ';' + current;
      }

      return acc;
    });

    if (allQueries === '') {
      return (0,of.of)({
        data: []
      });
    } // add global adhoc filters to timeFilter


    const adhocFilters = this.templateSrv.getAdhocFilters(this.name);

    if (adhocFilters.length > 0) {
      const tmpQuery = new InfluxQueryModel({
        refId: 'A'
      }, this.templateSrv, scopedVars);
      timeFilter += ' AND ' + tmpQuery.renderAdhocFilters(adhocFilters);
    } // replace grafana variables


    scopedVars.timeFilter = {
      value: timeFilter
    }; // replace templated variables

    allQueries = this.templateSrv.replace(allQueries, scopedVars);
    return this._seriesQuery(allQueries, options).pipe((0,map/* map */.U)(data => {
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
        const influxSeries = new InfluxSeries({
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

    if (config/* default.featureToggles.influxdbBackendMigration */.ZP.featureToggles.influxdbBackendMigration && this.access === 'proxy') {
      var _options$annotation$q;

      // We want to send our query to the backend as a raw query
      const target = {
        refId: 'metricFindQuery',
        datasource: this.getRef(),
        query: this.templateSrv.replace((_options$annotation$q = options.annotation.query) !== null && _options$annotation$q !== void 0 ? _options$annotation$q : ''),
        rawQuery: true
      };
      return (0,lastValueFrom/* lastValueFrom */.n)((0,grafana_runtime_src.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
          from: options.range.from.valueOf().toString(),
          to: options.range.to.valueOf().toString(),
          queries: [target]
        },
        requestId: options.annotation.name
      }).pipe((0,map/* map */.U)(async res => await this.responseParser.transformAnnotationResponse(options, res, target))));
    }

    const timeFilter = this.getTimeFilter({
      rangeRaw: options.rangeRaw,
      timezone: options.dashboard.timezone
    });
    let query = options.annotation.query.replace('$timeFilter', timeFilter);
    query = this.templateSrv.replace(query, undefined, 'regex');
    return (0,lastValueFrom/* lastValueFrom */.n)(this._seriesQuery(query, options)).then(data => {
      if (!data || !data.results || !data.results[0]) {
        throw {
          message: 'No results in response from InfluxDB'
        };
      }

      return new InfluxSeries({
        series: data.results[0].series,
        annotation: options.annotation
      }).getAnnotations();
    });
  }

  targetContainsTemplate(target) {
    // for flux-mode we just take target.query,
    // for influxql-mode we use InfluxQueryModel to create the text-representation
    const queryText = this.isFlux ? target.query : buildRawQuery(target);
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
      return (0,lastValueFrom/* lastValueFrom */.n)(super.query(Object.assign({}, options, {
        // includes 'range'
        targets: [target]
      }))).then(rsp => {
        var _rsp$data;

        if ((_rsp$data = rsp.data) !== null && _rsp$data !== void 0 && _rsp$data.length) {
          return (0,grafana_runtime_src.frameToMetricFindValue)(rsp.data[0]);
        }

        return [];
      });
    }

    const interpolated = this.templateSrv.replace(query, undefined, 'regex');
    return (0,lastValueFrom/* lastValueFrom */.n)(this._seriesQuery(interpolated, options)).then(resp => {
      return this.responseParser.parse(query, resp);
    });
  }

  getTagKeys() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const queryBuilder = new InfluxQueryBuilder({
      measurement: options.measurement || '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('TAG_KEYS');
    return this.metricFindQuery(query, options);
  }

  getTagValues() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const queryBuilder = new InfluxQueryBuilder({
      measurement: options.measurement || '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('TAG_VALUES', options.key);
    return this.metricFindQuery(query, options);
  }

  _seriesQuery(query, options) {
    if (!query) {
      return (0,of.of)({
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

    return (0,lodash.reduce)(params, (memo, value, key) => {
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
        requestId: `${this.id}-health-${(0,v4/* default */.Z)()}`,
        dashboardId: 0,
        panelId: 0,
        interval: '1m',
        intervalMs: 60000,
        maxDataPoints: 423,
        range: {
          from: (0,src.dateTime)(1000),
          to: (0,src.dateTime)(2000)
        }
      };
      return (0,lastValueFrom/* lastValueFrom */.n)(super.query(request)).then(res => {
        if (!res || !res.data || res.state !== src.LoadingState.Done) {
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
      return (0,lastValueFrom/* lastValueFrom */.n)(super.query({
        targets: [target]
      })).then(res => {
        var _res$data;

        if (!res || !res.data || res.state !== src.LoadingState.Done) {
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

    const queryBuilder = new InfluxQueryBuilder({
      measurement: '',
      tags: []
    }, this.database);
    const query = queryBuilder.buildExploreQuery('RETENTION POLICIES');
    return (0,lastValueFrom/* lastValueFrom */.n)(this._seriesQuery(query)).then(res => {
      const error = (0,lodash.get)(res, 'results[0].error');

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

    if (method === 'POST' && (0,lodash.has)(data, 'q')) {
      // verb is POST and 'q' param is defined
      (0,lodash.extend)(params, (0,lodash.omit)(data, ['q']));
      data = this.serializeParams((0,lodash.pick)(data, ['q']));
    } else if (method === 'GET' || method === 'POST') {
      // verb is GET, or POST without 'q' param
      (0,lodash.extend)(params, data);
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

    return (0,grafana_runtime_src.getBackendSrv)().fetch(req).pipe((0,map/* map */.U)(result => {
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
    }), (0,catchError/* catchError */.K)(err => {
      if (err.cancelled) {
        return (0,of.of)(err);
      }

      return (0,throwError/* throwError */._)(this.handleErrors(err));
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
    if ((0,lodash.isString)(date)) {
      if (date === 'now') {
        return 'now()';
      }

      const parts = /^now-(\d+)([dhms])$/.exec(date);

      if (parts) {
        const amount = parseInt(parts[1], 10);
        const unit = parts[2];
        return 'now() - ' + amount + unit;
      }

      date = src.dateMath.parse(date, roundUp, timezone);
    }

    return date.valueOf() + 'ms';
  }

  isMigrationToggleOnAndIsAccessProxy() {
    return config/* default.featureToggles.influxdbBackendMigration */.ZP.featureToggles.influxdbBackendMigration && this.access === 'proxy';
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/influxdb/module.ts
function module_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class InfluxAnnotationsQueryCtrl {}

module_defineProperty(InfluxAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const module_plugin = new src.DataSourcePlugin(InfluxDatasource).setConfigEditor(components_ConfigEditor).setQueryEditor(QueryEditor).setAnnotationQueryCtrl(InfluxAnnotationsQueryCtrl).setVariableQueryEditor(VariableQueryEditor).setQueryEditorHelp(InfluxStartPage);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePrevious)
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