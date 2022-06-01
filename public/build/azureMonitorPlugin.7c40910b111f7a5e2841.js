"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2364],{

/***/ "./public/app/plugins/datasource/grafana-azure-monitor-datasource/module.ts":
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
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/time_grain_converter.ts


class TimeGrainConverter {
  static createISO8601Duration(timeGrain, timeGrainUnit) {
    const timeIntervals = ['hour', 'minute', 'h', 'm'];

    if ((0,lodash.includes)(timeIntervals, timeGrainUnit)) {
      return `PT${timeGrain}${timeGrainUnit[0].toUpperCase()}`;
    }

    return `P${timeGrain}${timeGrainUnit[0].toUpperCase()}`;
  }

  static createISO8601DurationFromInterval(interval) {
    const timeGrain = +interval.slice(0, interval.length - 1);
    const unit = interval[interval.length - 1];

    if (interval.indexOf('ms') > -1) {
      return TimeGrainConverter.createISO8601Duration(1, 'm');
    }

    if (interval[interval.length - 1] === 's') {
      let toMinutes = timeGrain * 60 % 60;

      if (toMinutes < 1) {
        toMinutes = 1;
      }

      return TimeGrainConverter.createISO8601Duration(toMinutes, 'm');
    }

    return TimeGrainConverter.createISO8601Duration(timeGrain, unit);
  }

  static findClosestTimeGrain(interval, allowedTimeGrains) {
    const timeGrains = (0,lodash.filter)(allowedTimeGrains, o => o !== 'auto');
    let closest = timeGrains[0];
    const intervalMs = src.rangeUtil.intervalToMs(interval);

    for (let i = 0; i < timeGrains.length; i++) {
      // abs (num - val) < abs (num - curr):
      if (intervalMs > src.rangeUtil.intervalToMs(timeGrains[i])) {
        if (i + 1 < timeGrains.length) {
          closest = timeGrains[i + 1];
        } else {
          closest = timeGrains[i];
        }
      }
    }

    return closest;
  }

  static createTimeGrainFromISO8601Duration(duration) {
    let offset = 1;

    if (duration.substring(0, 2) === 'PT') {
      offset = 2;
    }

    const value = duration.substring(offset, duration.length - 1);
    const unit = duration.substring(duration.length - 1);
    return value + ' ' + TimeGrainConverter.timeUnitToText(+value, unit);
  }

  static timeUnitToText(value, unit) {
    let text = '';

    if (unit === 'S') {
      text = 'second';
    }

    if (unit === 'M') {
      text = 'minute';
    }

    if (unit === 'H') {
      text = 'hour';
    }

    if (unit === 'D') {
      text = 'day';
    }

    if (value > 1) {
      return text + 's';
    }

    return text;
  }

  static createKbnUnitFromISO8601Duration(duration) {
    if (duration === 'auto') {
      return 'auto';
    }

    let offset = 1;

    if (duration.substring(0, 2) === 'PT') {
      offset = 2;
    }

    const value = duration.substring(offset, duration.length - 1);
    const unit = duration.substring(duration.length - 1);
    return value + TimeGrainConverter.timeUnitToKbn(+value, unit);
  }

  static timeUnitToKbn(value, unit) {
    if (unit === 'S') {
      return 's';
    }

    if (unit === 'M') {
      return 'm';
    }

    if (unit === 'H') {
      return 'h';
    }

    if (unit === 'D') {
      return 'd';
    }

    return '';
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azure_monitor/response_parser.ts


class ResponseParser {
  static parseResponseValues(result, textFieldName, valueFieldName) {
    const list = [];

    if (!result) {
      return list;
    }

    for (let i = 0; i < result.value.length; i++) {
      if (!(0,lodash.find)(list, ['value', (0,lodash.get)(result.value[i], valueFieldName)])) {
        const value = (0,lodash.get)(result.value[i], valueFieldName);
        const text = (0,lodash.get)(result.value[i], textFieldName, value);
        list.push({
          text: text,
          value: value
        });
      }
    }

    return list;
  }

  static parseResourceNames(result, metricDefinition) {
    const list = [];

    if (!result) {
      return list;
    }

    for (let i = 0; i < result.value.length; i++) {
      if (typeof result.value[i].type === 'string' && result.value[i].type.toLocaleLowerCase() === metricDefinition.toLocaleLowerCase()) {
        list.push({
          text: result.value[i].name,
          value: result.value[i].name
        });
      }
    }

    return list;
  }

  static parseMetadata(result, metricName) {
    var _metricData$metricAva, _metricData$dimension;

    const defaultAggTypes = ['None', 'Average', 'Minimum', 'Maximum', 'Total', 'Count'];
    const metricData = result === null || result === void 0 ? void 0 : result.value.find(v => v.name.value === metricName);

    if (!metricData) {
      return {
        primaryAggType: '',
        supportedAggTypes: defaultAggTypes,
        supportedTimeGrains: [],
        dimensions: []
      };
    }

    return {
      primaryAggType: metricData.primaryAggregationType,
      supportedAggTypes: metricData.supportedAggregationTypes || defaultAggTypes,
      supportedTimeGrains: [{
        label: 'Auto',
        value: 'auto'
      }, ...ResponseParser.parseTimeGrains((_metricData$metricAva = metricData.metricAvailabilities) !== null && _metricData$metricAva !== void 0 ? _metricData$metricAva : [])],
      dimensions: ResponseParser.parseDimensions((_metricData$dimension = metricData.dimensions) !== null && _metricData$dimension !== void 0 ? _metricData$dimension : [])
    };
  }

  static parseTimeGrains(metricAvailabilities) {
    const timeGrains = [];

    if (!metricAvailabilities) {
      return timeGrains;
    }

    metricAvailabilities.forEach(avail => {
      if (avail.timeGrain) {
        timeGrains.push({
          label: TimeGrainConverter.createTimeGrainFromISO8601Duration(avail.timeGrain),
          value: avail.timeGrain
        });
      }
    });
    return timeGrains;
  }

  static parseDimensions(metadataDimensions) {
    return metadataDimensions.map(dimension => {
      return {
        label: dimension.localizedValue || dimension.value,
        value: dimension.value
      };
    });
  }

  static parseSubscriptions(result) {
    const list = [];

    if (!result) {
      return list;
    }

    const valueFieldName = 'subscriptionId';
    const textFieldName = 'displayName';

    for (let i = 0; i < result.value.length; i++) {
      if (!(0,lodash.find)(list, ['value', (0,lodash.get)(result.value[i], valueFieldName)])) {
        list.push({
          text: `${(0,lodash.get)(result.value[i], textFieldName)}`,
          value: (0,lodash.get)(result.value[i], valueFieldName)
        });
      }
    }

    return list;
  }

  static parseSubscriptionsForSelect(result) {
    const list = [];

    if (!result) {
      return list;
    }

    const valueFieldName = 'subscriptionId';
    const textFieldName = 'displayName';

    for (let i = 0; i < result.data.value.length; i++) {
      if (!(0,lodash.find)(list, ['value', (0,lodash.get)(result.data.value[i], valueFieldName)])) {
        list.push({
          label: `${(0,lodash.get)(result.data.value[i], textFieldName)} - ${(0,lodash.get)(result.data.value[i], valueFieldName)}`,
          value: (0,lodash.get)(result.data.value[i], valueFieldName)
        });
      }
    }

    return list;
  }

  static parseWorkspacesForSelect(result) {
    const list = [];

    if (!result) {
      return list;
    }

    const valueFieldName = 'customerId';
    const textFieldName = 'name';

    for (let i = 0; i < result.data.value.length; i++) {
      if (!(0,lodash.find)(list, ['value', (0,lodash.get)(result.data.value[i].properties, valueFieldName)])) {
        list.push({
          label: (0,lodash.get)(result.data.value[i], textFieldName),
          value: (0,lodash.get)(result.data.value[i].properties, valueFieldName)
        });
      }
    }

    return list;
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/utils/common.ts



const hasOption = (options, value) => options.some(v => v.options ? hasOption(v.options, value) : v.value === value);
const findOptions = function (options) {
  let values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (values.length === 0) {
    return [];
  }

  const set = values.reduce((accum, item) => {
    accum.add(item);
    return accum;
  }, new Set());
  return options.filter(option => set.has(option.value));
};
const toOption = v => ({
  value: v.value,
  label: v.text
});
function convertTimeGrainsToMs(timeGrains) {
  const allowedTimeGrainsMs = [];
  timeGrains.forEach(tg => {
    if (tg.value !== 'auto') {
      allowedTimeGrainsMs.push(rangeUtil.intervalToMs(TimegrainConverter.createKbnUnitFromISO8601Duration(tg.value)));
    }
  });
  return allowedTimeGrainsMs;
} // Route definitions shared with the backend.
// Check: /pkg/tsdb/azuremonitor/azuremonitor-resource-handler.go <registerRoutes>

const routeNames = {
  azureMonitor: 'azuremonitor',
  logAnalytics: 'loganalytics',
  appInsights: 'appinsights',
  resourceGraph: 'resourcegraph'
};
function interpolateVariable(value, variable) {
  if (typeof value === 'string') {
    if (variable.multi || variable.includeAll) {
      return "'" + value + "'";
    } else {
      return value;
    }
  }

  if (typeof value === 'number') {
    return value;
  }

  const quotedValues = (0,lodash.map)(value, val => {
    if (typeof value === 'number') {
      return value;
    }

    return "'" + val + "'";
  });
  return quotedValues.join(',');
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/types/query.ts
let AzureQueryType;
/**
 * Represents the query as it moves through the frontend query editor and datasource files.
 * It can represent new queries that are still being edited, so all properties are optional
 */

(function (AzureQueryType) {
  AzureQueryType["AzureMonitor"] = "Azure Monitor";
  AzureQueryType["LogAnalytics"] = "Azure Log Analytics";
  AzureQueryType["AzureResourceGraph"] = "Azure Resource Graph";
  AzureQueryType["GrafanaTemplateVariableFn"] = "Grafana Template Variable Function";
})(AzureQueryType || (AzureQueryType = {}));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/types/types.ts
/**
 * Azure clouds known to Azure Monitor.
 */
let AzureCloud;

(function (AzureCloud) {
  AzureCloud["Public"] = "AzureCloud";
  AzureCloud["China"] = "AzureChinaCloud";
  AzureCloud["USGovernment"] = "AzureUSGovernment";
  AzureCloud["Germany"] = "AzureGermanCloud";
  AzureCloud["None"] = "";
})(AzureCloud || (AzureCloud = {}));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/types/index.ts



;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/credentials.ts


const concealed = Symbol('Concealed client secret');
function getAuthType(options) {
  if (!options.jsonData.azureAuthType) {
    // If authentication type isn't explicitly specified and datasource has client credentials,
    // then this is existing datasource which is configured for app registration (client secret)
    if (options.jsonData.tenantId && options.jsonData.clientId) {
      return 'clientsecret';
    } // For newly created datasource with no configuration, managed identity is the default authentication type
    // if they are enabled in Grafana config


    return grafana_runtime_src.config.azure.managedIdentityEnabled ? 'msi' : 'clientsecret';
  }

  return options.jsonData.azureAuthType;
}

function getDefaultAzureCloud() {
  switch (grafana_runtime_src.config.azure.cloud) {
    case AzureCloud.Public:
    case AzureCloud.None:
    case undefined:
      return 'azuremonitor';

    case AzureCloud.China:
      return 'chinaazuremonitor';

    case AzureCloud.USGovernment:
      return 'govazuremonitor';

    case AzureCloud.Germany:
      return 'germanyazuremonitor';

    default:
      throw new Error(`The cloud '${grafana_runtime_src.config.azure.cloud}' not supported.`);
  }
}

function getAzurePortalUrl(azureCloud) {
  switch (azureCloud) {
    case 'azuremonitor':
      return 'https://portal.azure.com';

    case 'chinaazuremonitor':
      return 'https://portal.azure.cn';

    case 'govazuremonitor':
      return 'https://portal.azure.us';

    case 'germanyazuremonitor':
      return 'https://portal.microsoftazure.de';

    default:
      throw new Error('The cloud not supported.');
  }
}
function getAzureCloud(options) {
  const authType = getAuthType(options);

  switch (authType) {
    case 'msi':
      // In case of managed identity, the cloud is always same as where Grafana is hosted
      return getDefaultAzureCloud();

    case 'clientsecret':
      return options.jsonData.cloudName || getDefaultAzureCloud();
  }
}

function getSecret(options) {
  if (options.secureJsonFields.clientSecret) {
    // The secret is concealed on server
    return concealed;
  } else {
    var _options$secureJsonDa;

    const secret = (_options$secureJsonDa = options.secureJsonData) === null || _options$secureJsonDa === void 0 ? void 0 : _options$secureJsonDa.clientSecret;
    return typeof secret === 'string' && secret.length > 0 ? secret : undefined;
  }
}

function isCredentialsComplete(credentials) {
  switch (credentials.authType) {
    case 'msi':
      return true;

    case 'clientsecret':
      return !!(credentials.azureCloud && credentials.tenantId && credentials.clientId && credentials.clientSecret);
  }
}
function getCredentials(options) {
  const authType = getAuthType(options);

  switch (authType) {
    case 'msi':
      if (grafana_runtime_src.config.azure.managedIdentityEnabled) {
        return {
          authType: 'msi',
          defaultSubscriptionId: options.jsonData.subscriptionId
        };
      } else {
        // If authentication type is managed identity but managed identities were disabled in Grafana config,
        // then we should fallback to an empty app registration (client secret) configuration
        return {
          authType: 'clientsecret',
          azureCloud: getDefaultAzureCloud()
        };
      }

    case 'clientsecret':
      return {
        authType: 'clientsecret',
        azureCloud: options.jsonData.cloudName || getDefaultAzureCloud(),
        tenantId: options.jsonData.tenantId,
        clientId: options.jsonData.clientId,
        clientSecret: getSecret(options),
        defaultSubscriptionId: options.jsonData.subscriptionId
      };
  }
}
function updateCredentials(options, credentials) {
  switch (credentials.authType) {
    case 'msi':
      if (!grafana_runtime_src.config.azure.managedIdentityEnabled) {
        throw new Error('Managed Identity authentication is not enabled in Grafana config.');
      }

      options = Object.assign({}, options, {
        jsonData: Object.assign({}, options.jsonData, {
          azureAuthType: 'msi',
          subscriptionId: credentials.defaultSubscriptionId
        })
      });
      return options;

    case 'clientsecret':
      options = Object.assign({}, options, {
        jsonData: Object.assign({}, options.jsonData, {
          azureAuthType: 'clientsecret',
          cloudName: credentials.azureCloud || getDefaultAzureCloud(),
          tenantId: credentials.tenantId,
          clientId: credentials.clientId,
          subscriptionId: credentials.defaultSubscriptionId
        }),
        secureJsonData: Object.assign({}, options.secureJsonData, {
          clientSecret: typeof credentials.clientSecret === 'string' && credentials.clientSecret.length > 0 ? credentials.clientSecret : undefined
        }),
        secureJsonFields: Object.assign({}, options.secureJsonFields, {
          clientSecret: typeof credentials.clientSecret === 'symbol'
        })
      });
      return options;
  }
}
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/AzureCredentialsForm.tsx
var _InlineFormLabel, _InlineFormLabel2, _InlineFormLabel3, _InlineFormLabel4, _div, _InlineFormLabel5, _InlineFormLabel6;







const {
  Input
} = grafana_ui_src.LegacyForms;
const authTypeOptions = [{
  value: 'msi',
  label: 'Managed Identity'
}, {
  value: 'clientsecret',
  label: 'App Registration'
}];
const AzureCredentialsForm = props => {
  const {
    credentials,
    azureCloudOptions,
    onCredentialsChange,
    getSubscriptions,
    disabled
  } = props;
  const hasRequiredFields = isCredentialsComplete(credentials);
  const [subscriptions, setSubscriptions] = (0,react.useState)([]);
  const [loadSubscriptionsClicked, onLoadSubscriptions] = (0,react.useReducer)(val => val + 1, 0);
  (0,react.useEffect)(() => {
    if (!getSubscriptions || !hasRequiredFields) {
      updateSubscriptions([]);
      return;
    }

    let canceled = false;
    getSubscriptions().then(result => {
      if (!canceled) {
        updateSubscriptions(result, loadSubscriptionsClicked);
      }
    });
    return () => {
      canceled = true;
    }; // This effect is intended to be called only once initially and on Load Subscriptions click
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadSubscriptionsClicked]);

  const updateSubscriptions = function (received) {
    let autoSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setSubscriptions(received);

    if (getSubscriptions) {
      if (autoSelect && !credentials.defaultSubscriptionId && received.length > 0) {
        // Selecting the default subscription if subscriptions received but no default subscription selected
        onSubscriptionChange(received[0]);
      } else if (credentials.defaultSubscriptionId) {
        const found = received.find(opt => opt.value === credentials.defaultSubscriptionId);

        if (!found) {
          // Unselecting the default subscription if it isn't found among the received subscriptions
          onSubscriptionChange(undefined);
        }
      }
    }
  };

  const onAuthTypeChange = selected => {
    if (onCredentialsChange) {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        authType: selected.value || 'msi',
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onAzureCloudChange = selected => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        azureCloud: selected.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onTenantIdChange = event => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        tenantId: event.target.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onClientIdChange = event => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        clientId: event.target.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onClientSecretChange = event => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        clientSecret: event.target.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onClientSecretReset = () => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        clientSecret: '',
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onSubscriptionChange = selected => {
    if (onCredentialsChange) {
      const updated = Object.assign({}, credentials, {
        defaultSubscriptionId: selected === null || selected === void 0 ? void 0 : selected.value
      });
      onCredentialsChange(updated);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "gf-form-group",
    children: [props.managedIdentityEnabled && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
          className: "width-12",
          tooltip: "Choose the type of authentication to Azure services",
          children: "Authentication"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          className: "width-15",
          value: authTypeOptions.find(opt => opt.value === credentials.authType),
          options: authTypeOptions,
          onChange: onAuthTypeChange,
          disabled: disabled
        })]
      })
    }), credentials.authType === 'clientsecret' && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [azureCloudOptions && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-12",
            tooltip: "Choose an Azure Cloud",
            children: "Azure Cloud"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            "aria-label": "Azure Cloud",
            className: "width-15",
            value: azureCloudOptions.find(opt => opt.value === credentials.azureCloud),
            options: azureCloudOptions,
            onChange: onAzureCloudChange,
            disabled: disabled
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-12",
            children: "Directory (tenant) ID"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-15",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              className: "width-30",
              placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
              value: credentials.tenantId || '',
              onChange: onTenantIdChange,
              disabled: disabled
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel4 || (_InlineFormLabel4 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-12",
            children: "Application (client) ID"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-15",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              className: "width-30",
              placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
              value: credentials.clientId || '',
              onChange: onClientIdChange,
              disabled: disabled
            })
          })]
        })
      }), !disabled && (typeof credentials.clientSecret === 'symbol' ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form-inline",
        children: [_div || (_div = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-12",
            children: "Client Secret"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
            "data-testid": "client-secret",
            className: "width-25",
            placeholder: "configured",
            disabled: true
          })]
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "max-width-30 gf-form-inline",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              variant: "secondary",
              type: "button",
              onClick: onClientSecretReset,
              disabled: disabled,
              children: "reset"
            })
          })
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel5 || (_InlineFormLabel5 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-12",
            children: "Client Secret"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-15",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
              className: "width-30",
              placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
              value: credentials.clientSecret || '',
              onChange: onClientSecretChange,
              disabled: disabled
            })
          })]
        })
      }))]
    }), getSubscriptions && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel6 || (_InlineFormLabel6 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-12",
            children: "Default Subscription"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "width-30",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
              "aria-label": "Default Subscription",
              value: credentials.defaultSubscriptionId ? subscriptions.find(opt => opt.value === credentials.defaultSubscriptionId) : undefined,
              options: subscriptions,
              onChange: onSubscriptionChange,
              disabled: disabled
            })
          })]
        })
      }), !disabled && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "max-width-30 gf-form-inline",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              variant: "secondary",
              size: "sm",
              type: "button",
              onClick: onLoadSubscriptions,
              disabled: !hasRequiredFields,
              children: "Load Subscriptions"
            })
          })
        })
      })]
    }), props.children]
  });
};
/* harmony default export */ const components_AzureCredentialsForm = ((/* unused pure expression or super */ null && (AzureCredentialsForm)));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MonitorConfig.tsx
var _h;








const azureClouds = [{
  value: 'azuremonitor',
  label: 'Azure'
}, {
  value: 'govazuremonitor',
  label: 'Azure US Government'
}, {
  value: 'germanyazuremonitor',
  label: 'Azure Germany'
}, {
  value: 'chinaazuremonitor',
  label: 'Azure China'
}];
const MonitorConfig = props => {
  const {
    updateOptions,
    getSubscriptions
  } = props;
  const credentials = (0,react.useMemo)(() => getCredentials(props.options), [props.options]);

  const onCredentialsChange = credentials => {
    updateOptions(options => updateCredentials(options, credentials));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Authentication"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(AzureCredentialsForm, {
      managedIdentityEnabled: grafana_runtime_src.config.azure.managedIdentityEnabled,
      credentials: credentials,
      azureCloudOptions: azureClouds,
      onCredentialsChange: onCredentialsChange,
      getSubscriptions: getSubscriptions,
      disabled: props.options.readOnly
    })]
  });
};
/* harmony default export */ const components_MonitorConfig = ((/* unused pure expression or super */ null && (MonitorConfig)));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ConfigEditor.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class ConfigEditor extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "templateSrv", (0,grafana_runtime_src.getTemplateSrv)());

    _defineProperty(this, "baseURL", void 0);

    _defineProperty(this, "updateOptions", optionsFunc => {
      const updated = optionsFunc(this.props.options);
      this.props.onOptionsChange(updated);
      this.setState({
        unsaved: true
      });
    });

    _defineProperty(this, "saveOptions", async () => {
      if (this.state.unsaved) {
        await (0,grafana_runtime_src.getBackendSrv)().put(`/api/datasources/${this.props.options.id}`, this.props.options).then(result => {
          (0,src.updateDatasourcePluginOption)(this.props, 'version', result.datasource.version);
        });
        this.setState({
          unsaved: false
        });
      }
    });

    _defineProperty(this, "getSubscriptions", async () => {
      await this.saveOptions();
      const query = `?api-version=2019-03-01`;

      try {
        const result = await (0,grafana_runtime_src.getBackendSrv)().fetch({
          url: this.baseURL + query,
          method: 'GET'
        }).toPromise();
        this.setState({
          error: undefined
        });
        return ResponseParser.parseSubscriptionsForSelect(result);
      } catch (err) {
        var _err$data;

        this.setState({
          error: {
            title: 'Error requesting subscriptions',
            description: 'Could not request subscriptions from Azure. Check your credentials and try again.',
            details: err === null || err === void 0 ? void 0 : (_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.message
          }
        });
        return Promise.resolve([]);
      }
    });

    this.state = {
      unsaved: false
    };
    this.baseURL = `/api/datasources/${this.props.options.id}/resources/${routeNames.azureMonitor}/subscriptions`;
  }

  render() {
    const {
      options
    } = this.props;
    const {
      error
    } = this.state;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MonitorConfig, {
        options: options,
        updateOptions: this.updateOptions,
        getSubscriptions: this.getSubscriptions
      }), error && /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
        severity: "error",
        title: error.title,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: error.description
        }), error.details && /*#__PURE__*/(0,jsx_runtime.jsx)("details", {
          style: {
            whiteSpace: 'pre-wrap'
          },
          children: error.details
        })]
      })]
    });
  }

}
/* harmony default export */ const components_ConfigEditor = ((/* unused pure expression or super */ null && (ConfigEditor)));
// EXTERNAL MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/utils/messageFromError.ts
var messageFromError = __webpack_require__("./public/app/plugins/datasource/grafana-azure-monitor-datasource/utils/messageFromError.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/utils/useLastError.ts


function useLastError() {
  const [errors, setErrors] = (0,react.useState)([]); // Handles errors from any child components that request data to display their options

  const addError = (0,react.useCallback)((errorSource, error) => {
    setErrors(errors => {
      const errorsCopy = [...errors];
      const index = errors.findIndex(_ref => {
        let [vSource] = _ref;
        return vSource === errorSource;
      }); // If there's already an error, remove it. If we're setting a new error
      // below, we'll move it to the front

      if (index > -1) {
        errorsCopy.splice(index, 1);
      } // And then add the new error to the top of the array. If error is defined, it was already
      // removed above.


      if (error) {
        errorsCopy.unshift([errorSource, error]);
      }

      return errorsCopy;
    });
  }, []);
  const errorMessage = (0,react.useMemo)(() => {
    const recentError = errors[0];
    return recentError && (0,messageFromError/* default */.Z)(recentError[1]);
  }, [errors]);
  return [errorMessage, addError];
}
// EXTERNAL MODULE: ./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/Field.tsx





const DEFAULT_LABEL_WIDTH = 18;
const Field = props => {
  if (grafana_runtime_src.config.featureToggles.azureMonitorExperimentalUI) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, Object.assign({
      width: DEFAULT_LABEL_WIDTH
    }, props));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
    labelWidth: DEFAULT_LABEL_WIDTH
  }, props));
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/SubscriptionField.tsx







const SubscriptionField = _ref => {
  let {
    query,
    subscriptions,
    variableOptionGroup,
    onQueryChange,
    multiSelect = false
  } = _ref;
  const handleChange = (0,react.useCallback)(change => {
    if (!change.value) {
      return;
    }

    let newQuery = Object.assign({}, query, {
      subscription: change.value
    });

    if (query.queryType === AzureQueryType.AzureMonitor) {
      newQuery.azureMonitor = Object.assign({}, newQuery.azureMonitor, {
        resourceGroup: undefined,
        metricDefinition: undefined,
        metricNamespace: undefined,
        resourceName: undefined,
        metricName: undefined,
        aggregation: undefined,
        timeGrain: '',
        dimensionFilters: []
      });
    }

    onQueryChange(newQuery);
  }, [query, onQueryChange]);
  const onSubscriptionsChange = (0,react.useCallback)(change => {
    if (!change) {
      return;
    }

    query.subscriptions = change.map(c => {
      var _c$value;

      return (_c$value = c.value) !== null && _c$value !== void 0 ? _c$value : '';
    });
    onQueryChange(query);
  }, [query, onQueryChange]);
  const options = (0,react.useMemo)(() => [...subscriptions, variableOptionGroup], [subscriptions, variableOptionGroup]);
  return multiSelect ? /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Subscriptions",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.MultiSelect, {
      isClearable: true,
      value: findOptions([...subscriptions, ...variableOptionGroup.options], query.subscriptions),
      inputId: "azure-monitor-subscriptions-field",
      onChange: onSubscriptionsChange,
      options: options,
      width: 38
    })
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Subscription",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      value: query.subscription,
      inputId: "azure-monitor-subscriptions-field",
      onChange: handleChange,
      options: options,
      width: 38,
      allowCustomValue: true
    })
  });
};

/* harmony default export */ const components_SubscriptionField = (SubscriptionField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ArgQueryEditor/QueryField.tsx




const QueryField = _ref => {
  var _query$azureResourceG, _query$azureResourceG2;

  let {
    query,
    onQueryChange
  } = _ref;
  const onChange = (0,react.useCallback)(newQuery => {
    onQueryChange(Object.assign({}, query, {
      azureResourceGraph: Object.assign({}, query.azureResourceGraph, {
        query: newQuery
      })
    }));
  }, [onQueryChange, query]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
    value: (_query$azureResourceG = (_query$azureResourceG2 = query.azureResourceGraph) === null || _query$azureResourceG2 === void 0 ? void 0 : _query$azureResourceG2.query) !== null && _query$azureResourceG !== void 0 ? _query$azureResourceG : '',
    language: "kusto",
    height: 200,
    width: 1000,
    showMiniMap: false,
    onBlur: onChange,
    onSave: onChange
  });
};

/* harmony default export */ const ArgQueryEditor_QueryField = (QueryField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ArgQueryEditor/ArgQueryEditor.tsx






const ERROR_SOURCE = 'arg-subscriptions';

const ArgQueryEditor = _ref => {
  let {
    query,
    datasource,
    subscriptionId,
    variableOptionGroup,
    onChange,
    setError
  } = _ref;
  const fetchedRef = (0,react.useRef)(false);
  const [subscriptions, setSubscriptions] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    if (fetchedRef.current) {
      return;
    }

    fetchedRef.current = true;
    datasource.azureMonitorDatasource.getSubscriptions().then(results => {
      var _query$subscriptions;

      const fetchedSubscriptions = results.map(v => ({
        label: v.text,
        value: v.value,
        description: v.value
      }));
      setSubscriptions(fetchedSubscriptions);
      setError(ERROR_SOURCE, undefined);

      if (!((_query$subscriptions = query.subscriptions) !== null && _query$subscriptions !== void 0 && _query$subscriptions.length) && fetchedSubscriptions !== null && fetchedSubscriptions !== void 0 && fetchedSubscriptions.length) {
        var _query$subscription;

        onChange(Object.assign({}, query, {
          subscriptions: [(_query$subscription = query.subscription) !== null && _query$subscription !== void 0 ? _query$subscription : fetchedSubscriptions[0].value]
        }));
      }
    }).catch(err => setError(ERROR_SOURCE, err));
  }, [datasource, onChange, query, setError]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "data-testid": "azure-monitor-logs-query-editor",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_SubscriptionField, {
        multiSelect: true,
        subscriptions: subscriptions,
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ArgQueryEditor_QueryField, {
      query: query,
      datasource: datasource,
      subscriptionId: subscriptionId,
      variableOptionGroup: variableOptionGroup,
      onQueryChange: onChange,
      setError: setError
    })]
  });
};

/* harmony default export */ const ArgQueryEditor_ArgQueryEditor = (ArgQueryEditor);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ArgQueryEditor/index.tsx

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js
var useEffectOnce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/Space.tsx




const Space = props => {
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = getStyles(theme, props);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: (0,emotion_css_esm.cx)(styles.wrapper)
  });
};
Space.defaultProps = {
  v: 0,
  h: 0,
  layout: 'block'
};
const getStyles = (0,grafana_ui_src.stylesFactory)((theme, props) => {
  var _props$h, _props$v;

  return {
    wrapper: (0,emotion_css_esm.css)([{
      paddingRight: theme.spacing((_props$h = props.h) !== null && _props$h !== void 0 ? _props$h : 0),
      paddingBottom: theme.spacing((_props$v = props.v) !== null && _props$v !== void 0 ? _props$v : 0)
    }, props.layout === 'inline' && {
      display: 'inline-block'
    }, props.layout === 'block' && {
      display: 'block'
    }])
  };
});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourcePicker/types.ts
let ResourceRowType;

(function (ResourceRowType) {
  ResourceRowType["Subscription"] = "Subscription";
  ResourceRowType["ResourceGroup"] = "ResourceGroup";
  ResourceRowType["Resource"] = "Resource";
  ResourceRowType["VariableGroup"] = "TemplateVariableGroup";
  ResourceRowType["Variable"] = "TemplateVariable";
})(ResourceRowType || (ResourceRowType = {}));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourcePicker/EntryIcon.tsx
var _Icon, _Icon2, _Icon3, _Icon4;





const EntryIcon = _ref => {
  let {
    isOpen,
    entry: {
      type
    }
  } = _ref;

  switch (type) {
    case ResourceRowType.Subscription:
      return _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "layer-group"
      }));

    case ResourceRowType.ResourceGroup:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: isOpen ? 'folder-open' : 'folder'
      });

    case ResourceRowType.Resource:
      return _Icon2 || (_Icon2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "cube"
      }));

    case ResourceRowType.VariableGroup:
      return _Icon3 || (_Icon3 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "x"
      }));

    case ResourceRowType.Variable:
      return _Icon4 || (_Icon4 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "x"
      }));

    default:
      return null;
  }
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourcePicker/styles.ts


const styles_getStyles = theme => ({
  table: (0,emotion_css_esm.css)({
    width: '100%',
    tableLayout: 'fixed'
  }),
  tableScroller: (0,emotion_css_esm.css)({
    maxHeight: '50vh',
    overflow: 'auto'
  }),
  header: (0,emotion_css_esm.css)({
    background: theme.colors.background.secondary
  }),
  row: (0,emotion_css_esm.css)({
    borderBottom: `1px solid ${theme.colors.border.weak}`,
    '&:last-of-type': {
      borderBottomColor: theme.colors.border.medium
    }
  }),
  disabledRow: (0,emotion_css_esm.css)({
    opacity: 0.5
  }),
  cell: (0,emotion_css_esm.css)({
    padding: theme.spacing(1, 1, 1, 0),
    width: '25%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:first-of-type': {
      width: '50%',
      padding: theme.spacing(1, 1, 1, 2)
    }
  }),
  collapseButton: (0,emotion_css_esm.css)({
    margin: 0
  }),
  loadingCell: (0,emotion_css_esm.css)({
    textAlign: 'center'
  }),
  spinner: (0,emotion_css_esm.css)({
    marginBottom: 0
  }),
  nestedEntry: (0,emotion_css_esm.css)({
    display: 'flex',
    alignItems: 'center'
  }),
  entryContentItem: (0,emotion_css_esm.css)({
    margin: theme.spacing(0, 1, 0, 0)
  }),
  truncated: (0,emotion_css_esm.css)({
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }),
  nestedRowCheckbox: (0,emotion_css_esm.css)({
    zIndex: 0
  }),
  selectionFooter: (0,emotion_css_esm.css)({
    position: 'sticky',
    bottom: 0,
    background: theme.colors.background.primary,
    paddingTop: theme.spacing(2)
  }),
  loadingWrapper: (0,emotion_css_esm.css)({
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: theme.colors.text.secondary
  }),
  resultLimit: (0,emotion_css_esm.css)({
    margin: '4px 0',
    fontStyle: 'italic'
  })
});

/* harmony default export */ const ResourcePicker_styles = (styles_getStyles);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourcePicker/NestedEntry.tsx
var _Space, _Space2, _Space3, _Space4;










const NestedEntry = _ref => {
  let {
    entry,
    isSelected,
    isDisabled,
    isOpen,
    isSelectable,
    level,
    scrollIntoView,
    onToggleCollapse,
    onSelectedChange
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = (0,grafana_ui_src.useStyles2)(ResourcePicker_styles);
  const hasChildren = !!entry.children;
  const handleToggleCollapse = (0,react.useCallback)(() => {
    onToggleCollapse(entry);
  }, [onToggleCollapse, entry]);
  const handleSelectedChanged = (0,react.useCallback)(ev => {
    const isSelected = ev.target.checked;
    onSelectedChange(entry, isSelected);
  }, [entry, onSelectedChange]);
  const checkboxId = `${scrollIntoView ? 'table' : 'summary'}_checkbox_${entry.uri}`; // Scroll to the selected element if it's not in the view
  // Only do it once, when the component is mounted

  (0,react.useEffect)(() => {
    if (isSelected && scrollIntoView) {
      var _document$getElementB;

      (_document$getElementB = document.getElementById(checkboxId)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.nestedEntry,
    style: {
      marginLeft: level * (3 * theme.spacing.gridSize)
    },
    children: [hasChildren ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
      className: styles.collapseButton,
      name: isOpen ? 'angle-down' : 'angle-right',
      "aria-label": isOpen ? `Collapse ${entry.name}` : `Expand ${entry.name}`,
      onClick: handleToggleCollapse,
      id: entry.id
    }) : _Space || (_Space = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
      layout: "inline",
      h: 2
    })), _Space2 || (_Space2 = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
      layout: "inline",
      h: 2
    })), isSelectable && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Checkbox, {
        id: checkboxId,
        onChange: handleSelectedChanged,
        disabled: isDisabled,
        value: isSelected,
        className: styles.nestedRowCheckbox
      }), _Space3 || (_Space3 = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
        layout: "inline",
        h: 2
      }))]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(EntryIcon, {
      entry: entry,
      isOpen: isOpen
    }), _Space4 || (_Space4 = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
      layout: "inline",
      h: 1
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
      htmlFor: checkboxId,
      className: (0,emotion_css_esm.cx)(styles.entryContentItem, styles.truncated),
      children: entry.name
    })]
  });
};
// EXTERNAL MODULE: ./.yarn/cache/immer-npm-9.0.12-e8cd7358fa-bcbec6d76d.zip/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__("./.yarn/cache/immer-npm-9.0.12-e8cd7358fa-bcbec6d76d.zip/node_modules/immer/dist/immer.esm.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourcePicker/utils.ts

// This regex matches URIs representing:
//  - subscriptions: /subscriptions/44693801-6ee6-49de-9b2d-9106972f9572
//  - resource groups: /subscriptions/44693801-6ee6-49de-9b2d-9106972f9572/resourceGroups/cloud-datasources
//  - resources: /subscriptions/44693801-6ee6-49de-9b2d-9106972f9572/resourceGroups/cloud-datasources/providers/Microsoft.Compute/virtualMachines/GithubTestDataVM
const RESOURCE_URI_REGEX = /\/subscriptions\/(?<subscriptionID>[^/]+)(?:\/resourceGroups\/(?<resourceGroup>[^/]+)(?:\/providers.+\/(?<resource>[^/]+))?)?/;
function parseResourceURI(resourceURI) {
  var _matches$groups;

  const matches = RESOURCE_URI_REGEX.exec(resourceURI);
  const groups = (_matches$groups = matches === null || matches === void 0 ? void 0 : matches.groups) !== null && _matches$groups !== void 0 ? _matches$groups : {};
  const {
    subscriptionID,
    resourceGroup,
    resource
  } = groups;

  if (!subscriptionID) {
    return undefined;
  }

  return {
    subscriptionID,
    resourceGroup,
    resource
  };
}
function isGUIDish(input) {
  return !!input.match(/^[A-Z0-9]+/i);
}
function findRow(rows, uri) {
  for (const row of rows) {
    if (row.uri.toLowerCase() === uri.toLowerCase()) {
      return row;
    }

    if (row.children) {
      const result = findRow(row.children, uri);

      if (result) {
        return result;
      }
    }
  }

  return undefined;
}
function addResources(rows, targetParentId, newResources) {
  return (0,immer_esm/* default */.ZP)(rows, draftState => {
    const draftRow = findRow(draftState, targetParentId); // we can't find the selected resource in our list of resources,
    // probably means user has either mistyped in the input field
    // or is using template variables.
    // either way no need to throw, just show that none of the resources are checked

    if (!draftRow) {
      return;
    }

    draftRow.children = newResources;
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourcePicker/NestedRow.tsx










const NestedRow = _ref => {
  var _row$location;

  let {
    row,
    selectedRows,
    level,
    requestNestedRows,
    onRowSelectedChange,
    selectableEntryTypes,
    scrollIntoView
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(ResourcePicker_styles);
  const [rowStatus, setRowStatus] = (0,react.useState)('closed');
  const isSelected = !!selectedRows.find(v => v.uri === row.uri);
  const isDisabled = selectedRows.length > 0 && !isSelected;
  const isOpen = rowStatus === 'open';

  const onRowToggleCollapse = async () => {
    if (rowStatus === 'open') {
      setRowStatus('closed');
      return;
    }

    setRowStatus('loading');
    requestNestedRows(row).then(() => setRowStatus('open')).catch(() => setRowStatus('closed'));
  }; // opens the resource group on load of component if there was a previously saved selection


  (0,react.useEffect)(() => {
    var _row$children;

    // Assuming we don't have multi-select yet
    const selectedRow = selectedRows[0];
    const containsChild = selectedRow && !!findRow((_row$children = row.children) !== null && _row$children !== void 0 ? _row$children : [], selectedRow.uri);

    if (containsChild) {
      setRowStatus('open');
    }
  }, [selectedRows, row]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
      className: (0,emotion_css_esm.cx)(styles.row, isDisabled && styles.disabledRow),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: styles.cell,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(NestedEntry, {
          level: level,
          isSelected: isSelected,
          isDisabled: isDisabled,
          isOpen: isOpen,
          entry: row,
          onToggleCollapse: onRowToggleCollapse,
          onSelectedChange: onRowSelectedChange,
          isSelectable: selectableEntryTypes.some(type => type === row.type),
          scrollIntoView: scrollIntoView
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: styles.cell,
        children: row.typeLabel
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: styles.cell,
        children: (_row$location = row.location) !== null && _row$location !== void 0 ? _row$location : '-'
      })]
    }, row.id), isOpen && row.children && Object.keys(row.children).length > 0 && row.children.map(childRow => /*#__PURE__*/(0,jsx_runtime.jsx)(NestedRow, {
      row: childRow,
      selectedRows: selectedRows,
      level: level + 1,
      requestNestedRows: requestNestedRows,
      onRowSelectedChange: onRowSelectedChange,
      selectableEntryTypes: selectableEntryTypes,
      scrollIntoView: scrollIntoView
    }, childRow.uri)), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FadeTransition, {
      visible: rowStatus === 'loading',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
          className: (0,emotion_css_esm.cx)(styles.cell, styles.loadingCell),
          colSpan: 3,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
            text: "Loading...",
            className: styles.spinner
          })
        })
      })
    })]
  });
};

/* harmony default export */ const ResourcePicker_NestedRow = (NestedRow);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourcePicker/Search.tsx
var Search_Icon;






const Search = _ref => {
  let {
    searchFn
  } = _ref;
  const [searchFilter, setSearchFilter] = (0,react.useState)('');
  const debouncedSearch = (0,react.useMemo)(() => (0,lodash.debounce)(searchFn, 600), [searchFn]);
  (0,react.useEffect)(() => {
    return () => {
      // Stop the invocation of the debounced function after unmounting
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
    "aria-label": "resource search",
    prefix: Search_Icon || (Search_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
      name: "search"
    })),
    value: searchFilter,
    onChange: event => {
      const searchPhrase = event.currentTarget.value;
      setSearchFilter(searchPhrase);
      debouncedSearch(searchPhrase);
    },
    placeholder: "search for a resource"
  });
};

/* harmony default export */ const ResourcePicker_Search = (Search);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourcePicker/ResourcePicker.tsx
var ResourcePicker_Space, _LoadingPlaceholder, ResourcePicker_h, ResourcePicker_Space2, _h2, ResourcePicker_Space3, ResourcePicker_Space4, _Space5, _Space6;















const ResourcePicker = _ref => {
  let {
    resourcePickerData,
    resourceURI,
    onApply,
    onCancel,
    selectableEntryTypes
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(ResourcePicker_styles);
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [rows, setRows] = (0,react.useState)([]);
  const [selectedRows, setSelectedRows] = (0,react.useState)([]);
  const [internalSelectedURI, setInternalSelectedURI] = (0,react.useState)(resourceURI);
  const [errorMessage, setErrorMessage] = (0,react.useState)(undefined);
  const [isAdvancedOpen, setIsAdvancedOpen] = (0,react.useState)(resourceURI === null || resourceURI === void 0 ? void 0 : resourceURI.includes('$'));
  const [shouldShowLimitFlag, setShouldShowLimitFlag] = (0,react.useState)(false); // Sync the resourceURI prop to internal state

  (0,react.useEffect)(() => {
    setInternalSelectedURI(resourceURI);
  }, [resourceURI]);
  const loadInitialData = (0,react.useCallback)(async () => {
    if (!isLoading) {
      try {
        setIsLoading(true);
        const resources = await resourcePickerData.fetchInitialRows(internalSelectedURI || '');
        setRows(resources);
      } catch (error) {
        setErrorMessage((0,messageFromError/* default */.Z)(error));
      }

      setIsLoading(false);
    }
  }, [internalSelectedURI, isLoading, resourcePickerData]);
  (0,useEffectOnce/* default */.Z)(() => {
    loadInitialData();
  }); // set selected row data whenever row or selection changes

  (0,react.useEffect)(() => {
    if (!internalSelectedURI) {
      setSelectedRows([]);
    }

    const found = internalSelectedURI && findRow(rows, internalSelectedURI);

    if (found) {
      return setSelectedRows([Object.assign({}, found, {
        children: undefined
      })]);
    }
  }, [internalSelectedURI, rows]); // Request resources for an expanded resource group

  const requestNestedRows = (0,react.useCallback)(async parentRow => {
    var _parentRow$children;

    // clear error message (also when loading cached resources)
    setErrorMessage(undefined); // If we already have children, we don't need to re-fetch them.

    if ((_parentRow$children = parentRow.children) !== null && _parentRow$children !== void 0 && _parentRow$children.length) {
      return;
    }

    try {
      const nestedRows = await resourcePickerData.fetchAndAppendNestedRow(rows, parentRow);
      setRows(nestedRows);
    } catch (error) {
      setErrorMessage((0,messageFromError/* default */.Z)(error));
      throw error;
    }
  }, [resourcePickerData, rows]);
  const handleSelectionChanged = (0,react.useCallback)((row, isSelected) => {
    isSelected ? setInternalSelectedURI(row.uri) : setInternalSelectedURI(undefined);
  }, []);
  const handleApply = (0,react.useCallback)(() => {
    onApply(internalSelectedURI);
  }, [internalSelectedURI, onApply]);
  const handleSearch = (0,react.useCallback)(async searchWord => {
    // clear errors and warnings
    setErrorMessage(undefined);
    setShouldShowLimitFlag(false);

    if (!searchWord) {
      loadInitialData();
      return;
    }

    try {
      setIsLoading(true);
      const searchType = selectableEntryTypes.length > 1 ? 'logs' : 'metrics';
      const searchResults = await resourcePickerData.search(searchWord, searchType);
      setRows(searchResults);

      if (searchResults.length >= resourcePickerData.resultLimit) {
        setShouldShowLimitFlag(true);
      }
    } catch (err) {
      setErrorMessage((0,messageFromError/* default */.Z)(err));
    }

    setIsLoading(false);
  }, [loadInitialData, selectableEntryTypes.length, resourcePickerData]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ResourcePicker_Search, {
      searchFn: handleSearch
    }), shouldShowLimitFlag ? /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
      className: styles.resultLimit,
      children: ["Showing first ", resourcePickerData.resultLimit, " results"]
    }) : ResourcePicker_Space || (ResourcePicker_Space = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
      v: 2
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("table", {
      className: styles.table,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          className: (0,emotion_css_esm.cx)(styles.row, styles.header),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            className: styles.cell,
            children: "Scope"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            className: styles.cell,
            children: "Type"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            className: styles.cell,
            children: "Location"
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.tableScroller,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("table", {
        className: styles.table,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tbody", {
          children: [isLoading && /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            className: (0,emotion_css_esm.cx)(styles.row),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: styles.cell,
              children: _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
                text: 'Loading...'
              }))
            })
          }), !isLoading && rows.length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            className: (0,emotion_css_esm.cx)(styles.row),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: styles.cell,
              "aria-live": "polite",
              children: "No resources found"
            })
          }), !isLoading && rows.map(row => /*#__PURE__*/(0,jsx_runtime.jsx)(ResourcePicker_NestedRow, {
            row: row,
            selectedRows: selectedRows,
            level: 0,
            requestNestedRows: requestNestedRows,
            onRowSelectedChange: handleSelectionChanged,
            selectableEntryTypes: selectableEntryTypes,
            scrollIntoView: true
          }, row.uri))]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.selectionFooter,
      children: [selectedRows.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [ResourcePicker_h || (ResourcePicker_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
          children: "Selection"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.tableScroller,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("table", {
            className: styles.table,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: selectedRows.map(row => /*#__PURE__*/(0,jsx_runtime.jsx)(ResourcePicker_NestedRow, {
                row: row,
                selectedRows: selectedRows,
                level: 0,
                requestNestedRows: requestNestedRows,
                onRowSelectedChange: handleSelectionChanged,
                selectableEntryTypes: selectableEntryTypes
              }, row.uri))
            })
          })
        }), ResourcePicker_Space2 || (ResourcePicker_Space2 = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
          v: 2
        }))]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Collapse, {
        collapsible: true,
        label: "Advanced",
        isOpen: isAdvancedOpen,
        onToggle: () => setIsAdvancedOpen(!isAdvancedOpen),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Label, {
          htmlFor: `input-${internalSelectedURI}`,
          children: _h2 || (_h2 = /*#__PURE__*/(0,jsx_runtime.jsxs)("h6", {
            children: ["Resource URI", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
              content: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: ["Manually edit the", ' ', /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
                  href: "https://docs.microsoft.com/en-us/azure/azure-monitor/logs/log-standard-columns#_resourceid",
                  rel: "noopener noreferrer",
                  target: "_blank",
                  children: ["resource uri.", ' ']
                }), "Supports the use of multiple template variables (ex: /subscriptions/$subId/resourceGroups/$rg)"]
              }),
              placement: "right",
              interactive: true,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                name: "info-circle"
              })
            })]
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `input-${internalSelectedURI}`,
          value: internalSelectedURI,
          onChange: event => setInternalSelectedURI(event.currentTarget.value),
          placeholder: "ex: /subscriptions/$subId"
        }), ResourcePicker_Space3 || (ResourcePicker_Space3 = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
          v: 2
        }))]
      }), ResourcePicker_Space4 || (ResourcePicker_Space4 = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
        v: 2
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        disabled: !!errorMessage,
        onClick: handleApply,
        children: "Apply"
      }), _Space5 || (_Space5 = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
        layout: "inline",
        h: 1
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        onClick: onCancel,
        variant: "secondary",
        children: "Cancel"
      })]
    }), errorMessage && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_Space6 || (_Space6 = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
        v: 2
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        severity: "error",
        title: "An error occurred while requesting resources from Azure Monitor",
        children: errorMessage
      })]
    })]
  });
};

/* harmony default export */ const ResourcePicker_ResourcePicker = (ResourcePicker);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourcePicker/index.tsx

;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourceField/ResourceField.tsx
var ResourceField_Icon, ResourceField_Icon2, _Separator, ResourceField_Icon3, _Separator2, ResourceField_Icon4, ResourceField_Space, ResourceField_Space2;












function parseResourceDetails(resourceURI) {
  const parsed = parseResourceURI(resourceURI);

  if (!parsed) {
    return undefined;
  }

  return {
    subscriptionName: parsed.subscriptionID,
    resourceGroupName: parsed.resourceGroup,
    resourceName: parsed.resource
  };
}

const ResourceField = _ref => {
  let {
    query,
    datasource,
    onQueryChange,
    setResource,
    selectableEntryTypes,
    resourceUri
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(ResourceField_getStyles);
  const [pickerIsOpen, setPickerIsOpen] = (0,react.useState)(false);
  const handleOpenPicker = (0,react.useCallback)(() => {
    setPickerIsOpen(true);
  }, []);
  const closePicker = (0,react.useCallback)(() => {
    setPickerIsOpen(false);
  }, []);
  const handleApply = (0,react.useCallback)(resourceURI => {
    onQueryChange(setResource(query, resourceURI));
    closePicker();
  }, [closePicker, onQueryChange, query, setResource]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
      className: styles.modal,
      title: "Select a resource",
      isOpen: pickerIsOpen,
      onDismiss: closePicker // The growing number of rows added to the modal causes a focus
      // error in the modal, making it impossible to click on new elements
      ,
      trapFocus: false,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResourcePicker_ResourcePicker, {
        resourcePickerData: datasource.resourcePickerData,
        resourceURI: resourceUri,
        onApply: handleApply,
        onCancel: closePicker,
        selectableEntryTypes: selectableEntryTypes
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
      label: "Resource",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        onClick: handleOpenPicker,
        type: "button",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResourceLabel, {
          resource: resourceUri,
          datasource: datasource
        })
      })
    })]
  });
};

const ResourceLabel = _ref2 => {
  let {
    resource,
    datasource
  } = _ref2;
  const [resourceComponents, setResourceComponents] = (0,react.useState)(parseResourceDetails(resource !== null && resource !== void 0 ? resource : ''));
  (0,react.useEffect)(() => {
    if (resource && parseResourceDetails(resource)) {
      datasource.resourcePickerData.getResourceURIDisplayProperties(resource).then(setResourceComponents);
    } else {
      setResourceComponents(undefined);
    }
  }, [datasource.resourcePickerData, resource]);

  if (!resource) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: "Select a resource"
    });
  }

  if (resourceComponents) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(FormattedResource, {
      resource: resourceComponents
    });
  }

  if (resource.startsWith('$')) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      children: [ResourceField_Icon || (ResourceField_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "x"
      })), " ", resource]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: resource
  });
};

const FormattedResource = _ref3 => {
  let {
    resource
  } = _ref3;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
    children: [ResourceField_Icon2 || (ResourceField_Icon2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
      name: "layer-group"
    })), " ", resource.subscriptionName, resource.resourceGroupName && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_Separator || (_Separator = /*#__PURE__*/(0,jsx_runtime.jsx)(Separator, {})), ResourceField_Icon3 || (ResourceField_Icon3 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "folder"
      })), " ", resource.resourceGroupName]
    }), resource.resourceName && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_Separator2 || (_Separator2 = /*#__PURE__*/(0,jsx_runtime.jsx)(Separator, {})), ResourceField_Icon4 || (ResourceField_Icon4 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "cube"
      })), " ", resource.resourceName]
    })]
  });
};

const Separator = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
  children: [ResourceField_Space || (ResourceField_Space = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
    layout: "inline",
    h: 2
  })), '/', ResourceField_Space2 || (ResourceField_Space2 = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
    layout: "inline",
    h: 2
  }))]
});

/* harmony default export */ const ResourceField_ResourceField = (ResourceField);

const ResourceField_getStyles = theme => ({
  modal: (0,emotion_css_esm.css)({
    width: theme.breakpoints.values.lg
  })
});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/ResourceField/index.tsx

;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/LogsQueryEditor/setQueryValue.ts
function setKustoQuery(query, kustoQuery) {
  return Object.assign({}, query, {
    azureLogAnalytics: Object.assign({}, query.azureLogAnalytics, {
      query: kustoQuery
    })
  });
}
function setFormatAs(query, formatAs) {
  return Object.assign({}, query, {
    azureLogAnalytics: Object.assign({}, query.azureLogAnalytics, {
      resultFormat: formatAs
    })
  });
}
function setResource(query, resourceURI) {
  return Object.assign({}, query, {
    azureLogAnalytics: Object.assign({}, query.azureLogAnalytics, {
      resource: resourceURI
    })
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/LogsQueryEditor/FormatAsField.tsx





const FORMAT_OPTIONS = [{
  label: 'Time series',
  value: 'time_series'
}, {
  label: 'Table',
  value: 'table'
}];

const FormatAsField = _ref => {
  var _query$azureLogAnalyt;

  let {
    query,
    variableOptionGroup,
    onQueryChange
  } = _ref;
  const options = (0,react.useMemo)(() => [...FORMAT_OPTIONS, variableOptionGroup], [variableOptionGroup]);
  const handleChange = (0,react.useCallback)(change => {
    const {
      value
    } = change;

    if (!value) {
      return;
    }

    const newQuery = setFormatAs(query, value);
    onQueryChange(newQuery);
  }, [onQueryChange, query]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Format as",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: "azure-monitor-logs-workspaces-field",
      value: (_query$azureLogAnalyt = query.azureLogAnalytics) === null || _query$azureLogAnalyt === void 0 ? void 0 : _query$azureLogAnalyt.resultFormat,
      onChange: handleChange,
      options: options,
      width: 38
    })
  });
};

/* harmony default export */ const LogsQueryEditor_FormatAsField = (FormatAsField);
;// CONCATENATED MODULE: ./public/app/core/utils/deferred.ts
function deferred_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Deferred {
  constructor() {
    deferred_defineProperty(this, "resolve", void 0);

    deferred_defineProperty(this, "reject", void 0);

    deferred_defineProperty(this, "promise", void 0);

    this.resolve = undefined;
    this.reject = undefined;
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
    Object.freeze(this);
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/LogsQueryEditor/QueryField.tsx






const QueryField_QueryField = _ref => {
  var _query$azureLogAnalyt2, _query$azureLogAnalyt3, _query$azureLogAnalyt4;

  let {
    query,
    datasource,
    onQueryChange
  } = _ref;
  const monacoPromiseRef = (0,react.useRef)();

  function getPromise() {
    if (!monacoPromiseRef.current) {
      monacoPromiseRef.current = new Deferred();
    }

    return monacoPromiseRef.current.promise;
  }

  (0,react.useEffect)(() => {
    var _query$azureLogAnalyt;

    if (!((_query$azureLogAnalyt = query.azureLogAnalytics) !== null && _query$azureLogAnalyt !== void 0 && _query$azureLogAnalyt.resource)) {
      return;
    }

    const promises = [datasource.azureLogAnalyticsDatasource.getKustoSchema(query.azureLogAnalytics.resource), getPromise()]; // the kusto schema call might fail, but its okay for that to happen silently

    Promise.all(promises).then(_ref2 => {
      let [schema, {
        monaco,
        editor
      }] = _ref2;
      const languages = monaco.languages;
      languages.kusto.getKustoWorker().then(kusto => {
        const model = editor.getModel();
        return model && kusto(model.uri);
      }).then(worker => {
        worker === null || worker === void 0 ? void 0 : worker.setSchema(schema, 'https://help.kusto.windows.net', 'Samples');
      });
    });
  }, [datasource.azureLogAnalyticsDatasource, (_query$azureLogAnalyt2 = query.azureLogAnalytics) === null || _query$azureLogAnalyt2 === void 0 ? void 0 : _query$azureLogAnalyt2.resource]);
  const handleEditorMount = (0,react.useCallback)((editor, monaco) => {
    var _monacoPromiseRef$cur, _monacoPromiseRef$cur2;

    (_monacoPromiseRef$cur = monacoPromiseRef.current) === null || _monacoPromiseRef$cur === void 0 ? void 0 : (_monacoPromiseRef$cur2 = _monacoPromiseRef$cur.resolve) === null || _monacoPromiseRef$cur2 === void 0 ? void 0 : _monacoPromiseRef$cur2.call(_monacoPromiseRef$cur, {
      editor,
      monaco
    });
  }, []);
  const onChange = (0,react.useCallback)(newQuery => {
    onQueryChange(setKustoQuery(query, newQuery));
  }, [onQueryChange, query]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
    value: (_query$azureLogAnalyt3 = (_query$azureLogAnalyt4 = query.azureLogAnalytics) === null || _query$azureLogAnalyt4 === void 0 ? void 0 : _query$azureLogAnalyt4.query) !== null && _query$azureLogAnalyt3 !== void 0 ? _query$azureLogAnalyt3 : '',
    language: "kusto",
    height: 200,
    width: "100%",
    showMiniMap: false,
    onBlur: onChange,
    onSave: onChange,
    onEditorDidMount: handleEditorMount
  });
};

/* harmony default export */ const LogsQueryEditor_QueryField = (QueryField_QueryField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/LogsQueryEditor/useMigrations.ts



async function migrateWorkspaceQueryToResourceQuery(datasource, query, onChange) {
  var _query$azureLogAnalyt;

  if (((_query$azureLogAnalyt = query.azureLogAnalytics) === null || _query$azureLogAnalyt === void 0 ? void 0 : _query$azureLogAnalyt.workspace) !== undefined && !query.azureLogAnalytics.resource) {
    const isWorkspaceGUID = isGUIDish(query.azureLogAnalytics.workspace);
    let resource;

    if (isWorkspaceGUID) {
      resource = await datasource.resourcePickerData.getResourceURIFromWorkspace(query.azureLogAnalytics.workspace);
    } else {
      // The value of workspace is probably a template variable so we just migrate it over as-is
      resource = query.azureLogAnalytics.workspace;
    }

    const newQuery = Object.assign({}, query, {
      azureLogAnalytics: Object.assign({}, query.azureLogAnalytics, {
        resource: resource,
        workspace: undefined
      })
    });
    delete newQuery.azureLogAnalytics.workspace;
    onChange(newQuery);
  }
}

function useMigrations(datasource, query, onChange) {
  const [migrationError, setMigrationError] = (0,react.useState)();
  (0,react.useEffect)(() => {
    migrateWorkspaceQueryToResourceQuery(datasource, query, onChange).catch(err => setMigrationError({
      title: 'Unable to migrate workspace as a resource',
      message: err.message
    }));
  }, [datasource, query, onChange]);
  return migrationError;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/LogsQueryEditor/LogsQueryEditor.tsx











const LogsQueryEditor = _ref => {
  var _query$azureLogAnalyt;

  let {
    query,
    datasource,
    subscriptionId,
    variableOptionGroup,
    onChange,
    setError,
    hideFormatAs
  } = _ref;
  const migrationError = useMigrations(datasource, query, onChange);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "data-testid": "azure-monitor-logs-query-editor",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResourceField_ResourceField, {
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError,
        selectableEntryTypes: [ResourceRowType.Subscription, ResourceRowType.ResourceGroup, ResourceRowType.Resource, ResourceRowType.Variable],
        setResource: setResource,
        resourceUri: (_query$azureLogAnalyt = query.azureLogAnalytics) === null || _query$azureLogAnalyt === void 0 ? void 0 : _query$azureLogAnalyt.resource
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(LogsQueryEditor_QueryField, {
      query: query,
      datasource: datasource,
      subscriptionId: subscriptionId,
      variableOptionGroup: variableOptionGroup,
      onQueryChange: onChange,
      setError: setError
    }), !hideFormatAs && /*#__PURE__*/(0,jsx_runtime.jsx)(LogsQueryEditor_FormatAsField, {
      query: query,
      datasource: datasource,
      subscriptionId: subscriptionId,
      variableOptionGroup: variableOptionGroup,
      onQueryChange: onChange,
      setError: setError
    }), migrationError && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      title: migrationError.title,
      children: migrationError.message
    })]
  });
};

/* harmony default export */ const LogsQueryEditor_LogsQueryEditor = (LogsQueryEditor);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/LogsQueryEditor/index.tsx

;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/setQueryValue.ts
function setQueryValue_setResource(query, resourceURI) {
  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      resourceUri: resourceURI,
      metricNamespace: undefined,
      metricName: undefined,
      aggregation: undefined,
      timeGrain: '',
      dimensionFilters: []
    })
  });
}
function setSubscriptionID(query, subscriptionID) {
  if (query.subscription === subscriptionID) {
    return query;
  }

  return Object.assign({}, query, {
    subscription: subscriptionID,
    azureMonitor: Object.assign({}, query.azureMonitor, {
      resourceUri: '',
      resourceGroup: undefined,
      metricDefinition: undefined,
      metricNamespace: undefined,
      resourceName: undefined,
      metricName: undefined,
      aggregation: undefined,
      timeGrain: '',
      dimensionFilters: []
    })
  });
}
function setResourceGroup(query, resourceGroup) {
  var _query$azureMonitor;

  if (((_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.resourceGroup) === resourceGroup) {
    return query;
  }

  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      resourceUri: '',
      resourceGroup: resourceGroup,
      metricDefinition: undefined,
      metricNamespace: undefined,
      resourceName: undefined,
      metricName: undefined,
      aggregation: undefined,
      timeGrain: '',
      dimensionFilters: []
    })
  });
} // In the query as "metricDefinition" for some reason

function setResourceType(query, resourceType) {
  var _query$azureMonitor2;

  if (((_query$azureMonitor2 = query.azureMonitor) === null || _query$azureMonitor2 === void 0 ? void 0 : _query$azureMonitor2.metricDefinition) === resourceType) {
    return query;
  }

  const newQuery = Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      resourceUri: '',
      metricDefinition: resourceType,
      resourceName: undefined,
      metricNamespace: undefined,
      metricName: undefined,
      aggregation: undefined,
      timeGrain: '',
      dimensionFilters: []
    })
  });
  return newQuery;
}
function setResourceName(query, resourceName) {
  var _query$azureMonitor3;

  if (((_query$azureMonitor3 = query.azureMonitor) === null || _query$azureMonitor3 === void 0 ? void 0 : _query$azureMonitor3.resourceName) === resourceName) {
    return query;
  }

  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      resourceUri: '',
      resourceName: resourceName,
      metricNamespace: undefined,
      metricName: undefined,
      aggregation: undefined,
      timeGrain: '',
      dimensionFilters: []
    })
  });
}
function setMetricNamespace(query, metricNamespace) {
  var _query$azureMonitor4;

  if (((_query$azureMonitor4 = query.azureMonitor) === null || _query$azureMonitor4 === void 0 ? void 0 : _query$azureMonitor4.metricNamespace) === metricNamespace) {
    return query;
  }

  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      metricNamespace: metricNamespace,
      metricName: undefined,
      aggregation: undefined,
      timeGrain: '',
      dimensionFilters: []
    })
  });
}
function setMetricName(query, metricName) {
  var _query$azureMonitor5;

  if (((_query$azureMonitor5 = query.azureMonitor) === null || _query$azureMonitor5 === void 0 ? void 0 : _query$azureMonitor5.metricName) === metricName) {
    return query;
  }

  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      metricName: metricName,
      aggregation: undefined,
      timeGrain: '',
      dimensionFilters: []
    })
  });
}
function setAggregation(query, aggregation) {
  var _query$azureMonitor6;

  if (((_query$azureMonitor6 = query.azureMonitor) === null || _query$azureMonitor6 === void 0 ? void 0 : _query$azureMonitor6.aggregation) === aggregation) {
    return query;
  }

  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      aggregation: aggregation
    })
  });
}
function setTimeGrain(query, timeGrain) {
  var _query$azureMonitor7;

  if (((_query$azureMonitor7 = query.azureMonitor) === null || _query$azureMonitor7 === void 0 ? void 0 : _query$azureMonitor7.timeGrain) === timeGrain) {
    return query;
  }

  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      timeGrain: timeGrain
    })
  });
}
function setDimensionFilters(query, dimensions) {
  var _query$azureMonitor8;

  if (((_query$azureMonitor8 = query.azureMonitor) === null || _query$azureMonitor8 === void 0 ? void 0 : _query$azureMonitor8.dimensionFilters) === dimensions) {
    return query;
  }

  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      dimensionFilters: dimensions
    })
  });
}
function appendDimensionFilter(query) {
  var _query$azureMonitor$d, _query$azureMonitor9;

  let dimension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let operator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'eq';
  let filters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  const existingFilters = (_query$azureMonitor$d = (_query$azureMonitor9 = query.azureMonitor) === null || _query$azureMonitor9 === void 0 ? void 0 : _query$azureMonitor9.dimensionFilters) !== null && _query$azureMonitor$d !== void 0 ? _query$azureMonitor$d : [];
  return setDimensionFilters(query, [...existingFilters, {
    dimension,
    operator,
    filters
  }]);
}
function removeDimensionFilter(query, indexToRemove) {
  var _query$azureMonitor$d2, _query$azureMonitor10;

  const existingFilters = (_query$azureMonitor$d2 = (_query$azureMonitor10 = query.azureMonitor) === null || _query$azureMonitor10 === void 0 ? void 0 : _query$azureMonitor10.dimensionFilters) !== null && _query$azureMonitor$d2 !== void 0 ? _query$azureMonitor$d2 : [];
  const newFilters = [...existingFilters];
  newFilters.splice(indexToRemove, 1);
  return setDimensionFilters(query, newFilters);
}
function setDimensionFilterValue(query, index, fieldName, value) {
  var _query$azureMonitor$d3, _query$azureMonitor11;

  const existingFilters = (_query$azureMonitor$d3 = (_query$azureMonitor11 = query.azureMonitor) === null || _query$azureMonitor11 === void 0 ? void 0 : _query$azureMonitor11.dimensionFilters) !== null && _query$azureMonitor$d3 !== void 0 ? _query$azureMonitor$d3 : [];
  const newFilters = [...existingFilters];
  const newFilter = newFilters[index];
  newFilter[fieldName] = value;

  if (fieldName === 'dimension' || fieldName === 'operator') {
    newFilter.filters = [];
  }

  return setDimensionFilters(query, newFilters);
}
function setTop(query, top) {
  var _query$azureMonitor12;

  if (((_query$azureMonitor12 = query.azureMonitor) === null || _query$azureMonitor12 === void 0 ? void 0 : _query$azureMonitor12.top) === top) {
    return query;
  }

  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      top: top
    })
  });
}
function setLegendAlias(query, alias) {
  var _query$azureMonitor13;

  if (((_query$azureMonitor13 = query.azureMonitor) === null || _query$azureMonitor13 === void 0 ? void 0 : _query$azureMonitor13.alias) === alias) {
    return query;
  }

  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, query.azureMonitor, {
      alias: alias
    })
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/AggregationField.tsx






const AggregationField = _ref => {
  var _query$azureMonitor;

  let {
    query,
    variableOptionGroup,
    onQueryChange,
    aggregationOptions,
    isLoading
  } = _ref;
  const handleChange = (0,react.useCallback)(change => {
    if (!change.value) {
      return;
    }

    const newQuery = setAggregation(query, change.value);
    onQueryChange(newQuery);
  }, [onQueryChange, query]);
  const options = (0,react.useMemo)(() => [...aggregationOptions, variableOptionGroup], [aggregationOptions, variableOptionGroup]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Aggregation",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: "azure-monitor-metrics-aggregation-field",
      value: (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.aggregation,
      onChange: handleChange,
      options: options,
      width: 38,
      isLoading: isLoading
    })
  });
};

/* harmony default export */ const MetricsQueryEditor_AggregationField = (AggregationField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/DimensionFields.tsx







const useDimensionLabels = (data, query) => {
  const [dimensionLabels, setDimensionLabels] = (0,react.useState)({});
  (0,react.useEffect)(() => {
    var _data$series;

    let labelsObj = {};

    if (data !== null && data !== void 0 && (_data$series = data.series) !== null && _data$series !== void 0 && _data$series.length) {
      // Identify which series' in the dataframe are relevant to the current query
      const series = data.series.flat().filter(series => series.refId === query.refId);
      const fields = series.flatMap(series => series.fields); // Retrieve labels for series fields

      const labels = fields.map(fields => fields.labels).flat().filter(item => item);

      for (const label of labels) {
        // Labels only exist for series that have a dimension selected
        if (label) {
          for (const [dimension, value] of Object.entries(label)) {
            if (labelsObj[dimension]) {
              labelsObj[dimension].add(value);
            } else {
              labelsObj[dimension] = new Set([value]);
            }
          }
        }
      }
    }

    setDimensionLabels(prevLabels => {
      const newLabels = {};
      const currentLabels = Object.keys(labelsObj);

      if (currentLabels.length === 0) {
        return prevLabels;
      }

      for (const label of currentLabels) {
        if (prevLabels[label] && labelsObj[label].size < prevLabels[label].size) {
          newLabels[label] = prevLabels[label];
        } else {
          newLabels[label] = labelsObj[label];
        }
      }

      return newLabels;
    });
  }, [data === null || data === void 0 ? void 0 : data.series, query.refId]);
  return dimensionLabels;
};

const DimensionFields = _ref => {
  var _query$azureMonitor2;

  let {
    data,
    query,
    dimensionOptions,
    onQueryChange
  } = _ref;
  const dimensionFilters = (0,react.useMemo)(() => {
    var _query$azureMonitor$d, _query$azureMonitor;

    return (_query$azureMonitor$d = (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.dimensionFilters) !== null && _query$azureMonitor$d !== void 0 ? _query$azureMonitor$d : [];
  }, [(_query$azureMonitor2 = query.azureMonitor) === null || _query$azureMonitor2 === void 0 ? void 0 : _query$azureMonitor2.dimensionFilters]);
  const dimensionLabels = useDimensionLabels(data, query);
  const dimensionOperators = [{
    label: '==',
    value: 'eq'
  }, {
    label: '!=',
    value: 'ne'
  }, {
    label: 'starts with',
    value: 'sw'
  }];
  const validDimensionOptions = (0,react.useMemo)(() => {
    // We filter out any dimensions that have already been used in a filter as the API doesn't support having multiple filters with the same dimension name.
    // The Azure portal also doesn't support this feature so it makes sense for consistency.
    let t = dimensionOptions;

    if (dimensionFilters.length) {
      t = dimensionOptions.filter(val => !dimensionFilters.some(dimensionFilter => dimensionFilter.dimension === val.value));
    }

    return t;
  }, [dimensionFilters, dimensionOptions]);

  const addFilter = () => {
    onQueryChange(appendDimensionFilter(query));
  };

  const removeFilter = index => {
    onQueryChange(removeDimensionFilter(query, index));
  };

  const onFieldChange = (filterIndex, fieldName, value) => {
    onQueryChange(setDimensionFilterValue(query, filterIndex, fieldName, value));
  };

  const onFilterInputChange = (index, v) => {
    var _v$value;

    onFieldChange(index, 'filters', [(_v$value = v === null || v === void 0 ? void 0 : v.value) !== null && _v$value !== void 0 ? _v$value : '']);
  };

  const getValidDimensionOptions = selectedDimension => {
    return validDimensionOptions.concat(dimensionOptions.filter(item => item.value === selectedDimension));
  };

  const getValidFilterOptions = (selectedFilter, dimension) => {
    var _dimensionLabels$dime;

    const dimensionFilters = Array.from((_dimensionLabels$dime = dimensionLabels[dimension.toLowerCase()]) !== null && _dimensionLabels$dime !== void 0 ? _dimensionLabels$dime : []);

    if (dimensionFilters.find(filter => filter === selectedFilter)) {
      return dimensionFilters.map(filter => ({
        value: filter,
        label: filter
      }));
    }

    return [...dimensionFilters, ...(selectedFilter && selectedFilter !== '*' ? [selectedFilter] : [])].map(item => ({
      value: item,
      label: item
    }));
  };

  const getValidMultiSelectOptions = (selectedFilters, dimension) => {
    const labelOptions = getValidFilterOptions(undefined, dimension);

    if (selectedFilters) {
      for (const filter of selectedFilters) {
        if (!labelOptions.find(label => label.value === filter)) {
          labelOptions.push({
            value: filter,
            label: filter
          });
        }
      }
    }

    return labelOptions;
  };

  const getValidOperators = selectedOperator => {
    if (dimensionOperators.find(operator => operator.value === selectedOperator)) {
      return dimensionOperators;
    }

    return [...dimensionOperators, ...(selectedOperator ? [{
      label: selectedOperator,
      value: selectedOperator
    }] : [])];
  };

  const onMultiSelectFilterChange = (index, v) => {
    onFieldChange(index, 'filters', v.map(item => item.value || ''));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Dimension",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
      spacing: "xs",
      children: [dimensionFilters.map((filter, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        spacing: "xs",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          placeholder: "Field",
          value: filter.dimension,
          options: getValidDimensionOptions(filter.dimension),
          onChange: v => {
            var _v$value2;

            return onFieldChange(index, 'dimension', (_v$value2 = v.value) !== null && _v$value2 !== void 0 ? _v$value2 : '');
          },
          width: 38
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          menuShouldPortal: true,
          placeholder: "Operation",
          value: filter.operator,
          options: getValidOperators(filter.operator),
          onChange: v => {
            var _v$value3;

            return onFieldChange(index, 'operator', (_v$value3 = v.value) !== null && _v$value3 !== void 0 ? _v$value3 : '');
          },
          allowCustomValue: true
        }), filter.operator === 'eq' || filter.operator === 'ne' ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.MultiSelect, {
          menuShouldPortal: true,
          placeholder: "Select value(s)",
          value: filter.filters,
          options: getValidMultiSelectOptions(filter.filters, filter.dimension),
          onChange: v => onMultiSelectFilterChange(index, v),
          "aria-label": 'dimension-labels-select',
          allowCustomValue: true
        }) :
        /*#__PURE__*/
        // The API does not currently allow for multiple "starts with" clauses to be used.
        (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          menuShouldPortal: true,
          placeholder: "Select value",
          value: filter.filters ? filter.filters[0] : '',
          allowCustomValue: true,
          options: getValidFilterOptions(filter.filters ? filter.filters[0] : '', filter.dimension),
          onChange: v => onFilterInputChange(index, v),
          isClearable: true
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          size: "md",
          icon: "trash-alt",
          "aria-label": "Remove",
          onClick: () => removeFilter(index)
        })]
      }, index)), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        size: "md",
        onClick: addFilter,
        children: "Add new dimension"
      })]
    })
  });
};

/* harmony default export */ const MetricsQueryEditor_DimensionFields = (DimensionFields);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/LegendFormatField.tsx






const LegendFormatField = _ref => {
  var _query$azureMonitor$a, _query$azureMonitor;

  let {
    onQueryChange,
    query
  } = _ref;
  const [value, setValue] = (0,react.useState)((_query$azureMonitor$a = (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.alias) !== null && _query$azureMonitor$a !== void 0 ? _query$azureMonitor$a : ''); // As calling onQueryChange initiates a the datasource refresh, we only want to call it once
  // the field loses focus

  const handleChange = (0,react.useCallback)(ev => {
    if (ev.target instanceof HTMLInputElement) {
      setValue(ev.target.value);
    }
  }, []);
  const handleBlur = (0,react.useCallback)(() => {
    const newQuery = setLegendAlias(query, value);
    onQueryChange(newQuery);
  }, [onQueryChange, query, value]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Legend format",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
      id: "azure-monitor-metrics-legend-field",
      placeholder: "Alias patterns",
      value: value,
      onChange: handleChange,
      onBlur: handleBlur,
      width: 38
    })
  });
};

/* harmony default export */ const MetricsQueryEditor_LegendFormatField = (LegendFormatField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/MetricNameField.tsx






const MetricNameField = _ref => {
  var _query$azureMonitor$m, _query$azureMonitor;

  let {
    metricNames,
    query,
    variableOptionGroup,
    onQueryChange
  } = _ref;
  const handleChange = (0,react.useCallback)(change => {
    if (!change.value) {
      return;
    }

    const newQuery = setMetricName(query, change.value);
    onQueryChange(newQuery);
  }, [onQueryChange, query]);
  const options = (0,react.useMemo)(() => [...metricNames, variableOptionGroup], [metricNames, variableOptionGroup]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Metric",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: "azure-monitor-metrics-metric-field",
      value: (_query$azureMonitor$m = (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.metricName) !== null && _query$azureMonitor$m !== void 0 ? _query$azureMonitor$m : null,
      onChange: handleChange,
      options: options,
      width: 38,
      allowCustomValue: true
    })
  });
};

/* harmony default export */ const MetricsQueryEditor_MetricNameField = (MetricNameField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/MetricNamespaceField.tsx






const MetricNamespaceField = _ref => {
  var _query$azureMonitor, _query$azureMonitor2;

  let {
    metricNamespaces,
    query,
    variableOptionGroup,
    onQueryChange
  } = _ref;
  const handleChange = (0,react.useCallback)(change => {
    if (!change.value) {
      return;
    }

    const newQuery = setMetricNamespace(query, change.value);
    onQueryChange(newQuery);
  }, [onQueryChange, query]);
  const options = (0,react.useMemo)(() => [...metricNamespaces, variableOptionGroup], [metricNamespaces, variableOptionGroup]);
  const optionValues = metricNamespaces.map(m => m.value).concat(variableOptionGroup.options.map(p => p.value));
  const value = (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.metricNamespace;

  if (value && !optionValues.includes(value)) {
    options.push({
      label: value,
      value
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Metric namespace",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: "azure-monitor-metrics-metric-namespace-field",
      value: (_query$azureMonitor2 = query.azureMonitor) === null || _query$azureMonitor2 === void 0 ? void 0 : _query$azureMonitor2.metricNamespace,
      onChange: handleChange,
      options: options,
      width: 38,
      allowCustomValue: true
    })
  });
};

/* harmony default export */ const MetricsQueryEditor_MetricNamespaceField = (MetricNamespaceField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/ResourceGroupsField.tsx






const ResourceGroupsField = _ref => {
  var _query$azureMonitor;

  let {
    query,
    resourceGroups,
    variableOptionGroup,
    onQueryChange,
    setError
  } = _ref;
  const handleChange = (0,react.useCallback)(change => {
    const newQuery = setResourceGroup(query, change.value);
    onQueryChange(newQuery);
  }, [onQueryChange, query]);
  const options = (0,react.useMemo)(() => [...resourceGroups, variableOptionGroup], [resourceGroups, variableOptionGroup]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Resource group",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: "azure-monitor-metrics-resource-group-field",
      value: (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.resourceGroup,
      onChange: handleChange,
      options: options,
      width: 38,
      allowCustomValue: true
    })
  });
};

/* harmony default export */ const MetricsQueryEditor_ResourceGroupsField = (ResourceGroupsField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/ResourceNameField.tsx






const ResourceNameField = _ref => {
  var _query$azureMonitor$r, _query$azureMonitor;

  let {
    resourceNames,
    query,
    variableOptionGroup,
    onQueryChange
  } = _ref;
  const handleChange = (0,react.useCallback)(change => {
    const newQuery = setResourceName(query, change.value);
    onQueryChange(newQuery);
  }, [onQueryChange, query]);
  const options = (0,react.useMemo)(() => [...resourceNames, variableOptionGroup], [resourceNames, variableOptionGroup]);
  const value = (_query$azureMonitor$r = (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.resourceName) !== null && _query$azureMonitor$r !== void 0 ? _query$azureMonitor$r : null;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Resource name",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: "azure-monitor-metrics-resource-name-field",
      value: value,
      onChange: handleChange,
      options: options,
      width: 38,
      allowCustomValue: true
    })
  });
};

/* harmony default export */ const MetricsQueryEditor_ResourceNameField = (ResourceNameField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/ResourceTypeField.tsx






const NamespaceField = _ref => {
  var _query$azureMonitor;

  let {
    resourceTypes,
    query,
    variableOptionGroup,
    onQueryChange
  } = _ref;
  const handleChange = (0,react.useCallback)(change => {
    if (!change.value) {
      return;
    }

    const newQuery = setResourceType(query, change.value);
    onQueryChange(newQuery);
  }, [onQueryChange, query]);
  const options = (0,react.useMemo)(() => [...resourceTypes, variableOptionGroup], [resourceTypes, variableOptionGroup]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Resource type",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: "azure-monitor-metrics-resource-type-field",
      value: (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.metricDefinition,
      onChange: handleChange,
      options: options,
      width: 38,
      allowCustomValue: true
    })
  });
};

/* harmony default export */ const ResourceTypeField = (NamespaceField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/TimeGrainField.tsx







const TimeGrainField = _ref => {
  var _query$azureMonitor;

  let {
    query,
    timeGrainOptions,
    variableOptionGroup,
    onQueryChange
  } = _ref;
  const handleChange = (0,react.useCallback)(change => {
    if (!change.value) {
      return;
    }

    const newQuery = setTimeGrain(query, change.value);
    onQueryChange(newQuery);
  }, [onQueryChange, query]);
  const timeGrains = (0,react.useMemo)(() => {
    const autoInterval = TimeGrainConverter.findClosestTimeGrain('1m', timeGrainOptions.map(o => TimeGrainConverter.createKbnUnitFromISO8601Duration(o.value)) || ['1m', '5m', '15m', '30m', '1h', '6h', '12h', '1d']);
    const baseTimeGrains = timeGrainOptions.map(v => v.value === 'auto' ? Object.assign({}, v, {
      description: autoInterval
    }) : v);
    return [...baseTimeGrains, variableOptionGroup];
  }, [timeGrainOptions, variableOptionGroup]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Time grain",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: "azure-monitor-metrics-time-grain-field",
      value: (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.timeGrain,
      onChange: handleChange,
      options: timeGrains,
      width: 38
    })
  });
};

/* harmony default export */ const MetricsQueryEditor_TimeGrainField = (TimeGrainField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/TopField.tsx






const TopField = _ref => {
  var _query$azureMonitor$t, _query$azureMonitor;

  let {
    onQueryChange,
    query
  } = _ref;
  const [value, setValue] = (0,react.useState)((_query$azureMonitor$t = (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.top) !== null && _query$azureMonitor$t !== void 0 ? _query$azureMonitor$t : ''); // As calling onQueryChange initiates a the datasource refresh, we only want to call it once
  // the field loses focus

  const handleChange = (0,react.useCallback)(ev => {
    if (ev.target instanceof HTMLInputElement) {
      setValue(ev.target.value);
    }
  }, []);
  const handleBlur = (0,react.useCallback)(() => {
    const newQuery = setTop(query, value);
    onQueryChange(newQuery);
  }, [onQueryChange, query, value]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Top",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
      id: "azure-monitor-metrics-top-field",
      value: value,
      onChange: handleChange,
      onBlur: handleBlur,
      width: 16
    })
  });
};

/* harmony default export */ const MetricsQueryEditor_TopField = (TopField);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/utils/useAsyncState.ts

function useAsyncState(asyncFn, setError, dependencies) {
  // Use the lazy initial state functionality of useState to assign a random ID to the API call
  // to track where errors come from. See useLastError.
  const [errorSource] = (0,react.useState)(() => Math.random());
  const [value, setValue] = (0,react.useState)();
  const finalValue = (0,react.useMemo)(() => value !== null && value !== void 0 ? value : [], [value]);
  (0,react.useEffect)(() => {
    asyncFn().then(results => {
      setValue(results);
      setError(errorSource, undefined);
    }).catch(err => {
      setError(errorSource, err);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return finalValue;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/dataHooks.ts




const updateSubscriptions = (query, subscriptionOptions, onChange, defaultSubscription) => {
  const {
    subscription
  } = query; // Return early if subscriptions havent loaded, or if the query already has a subscription

  if (!subscriptionOptions.length || subscription && (hasOption(subscriptionOptions, subscription) || subscription.includes('$'))) {
    return;
  }

  const defaultSub = defaultSubscription || subscriptionOptions[0].value;

  if (!subscription && defaultSub && hasOption(subscriptionOptions, defaultSub)) {
    onChange(setSubscriptionID(query, defaultSub));
  } // Check if the current subscription is in the list of subscriptions


  if (subscription && !hasOption(subscriptionOptions, subscription)) {
    if (hasOption(subscriptionOptions, defaultSub)) {
      // Use the default sub if is on theh list
      onChange(setSubscriptionID(query, defaultSub));
    } else {
      // Neither the current subscription nor the defaultSub is on the list, remove it
      onChange(setSubscriptionID(query, ''));
    }
  }
};
const useSubscriptions = (query, datasource, onChange, setError) => {
  const defaultSubscription = datasource.azureMonitorDatasource.defaultSubscriptionId;
  const {
    subscription
  } = query;
  const subscriptionOptions = useAsyncState(async () => {
    const results = await datasource.azureMonitorDatasource.getSubscriptions();
    const options = formatOptions(results, subscription);
    return options;
  }, setError, []);
  (0,react.useEffect)(() => {
    updateSubscriptions(query, subscriptionOptions, onChange, defaultSubscription);
  }, [subscriptionOptions, query, defaultSubscription, onChange]);
  return subscriptionOptions;
};
const useResourceGroups = (query, datasource, onChange, setError) => {
  var _query$azureMonitor;

  const {
    subscription
  } = query;
  const {
    resourceGroup
  } = (_query$azureMonitor = query.azureMonitor) !== null && _query$azureMonitor !== void 0 ? _query$azureMonitor : {};
  return useAsyncState(async () => {
    if (!subscription) {
      return;
    }

    const results = await datasource.getResourceGroups(subscription);
    const options = formatOptions(results, resourceGroup);
    return options;
  }, setError, [subscription]);
};
const useResourceTypes = (query, datasource, onChange, setError) => {
  var _query$azureMonitor2;

  const {
    subscription
  } = query;
  const {
    resourceGroup,
    metricDefinition
  } = (_query$azureMonitor2 = query.azureMonitor) !== null && _query$azureMonitor2 !== void 0 ? _query$azureMonitor2 : {};
  return useAsyncState(async () => {
    if (!(subscription && resourceGroup)) {
      return;
    }

    const results = await datasource.getMetricDefinitions(subscription, resourceGroup);
    const options = formatOptions(results, metricDefinition);
    return options;
  }, setError, [subscription, resourceGroup]);
};
const useResourceNames = (query, datasource, onChange, setError) => {
  var _query$azureMonitor3;

  const {
    subscription
  } = query;
  const {
    resourceGroup,
    metricDefinition,
    resourceName
  } = (_query$azureMonitor3 = query.azureMonitor) !== null && _query$azureMonitor3 !== void 0 ? _query$azureMonitor3 : {};
  return useAsyncState(async () => {
    if (!(subscription && resourceGroup && metricDefinition)) {
      return;
    }

    const results = await datasource.getResourceNames(subscription, resourceGroup, metricDefinition);
    const options = formatOptions(results, resourceName);
    return options;
  }, setError, [subscription, resourceGroup, metricDefinition]);
};
const useMetricNamespaces = (query, datasource, onChange, setError) => {
  var _query$azureMonitor4;

  const {
    subscription
  } = query;
  const {
    resourceGroup,
    metricDefinition,
    resourceName,
    metricNamespace
  } = (_query$azureMonitor4 = query.azureMonitor) !== null && _query$azureMonitor4 !== void 0 ? _query$azureMonitor4 : {};
  const metricNamespaces = useAsyncState(async () => {
    if (!(subscription && resourceGroup && metricDefinition && resourceName)) {
      return;
    }

    const results = await datasource.azureMonitorDatasource.getMetricNamespaces({
      subscription,
      resourceGroup,
      metricDefinition,
      resourceName
    });
    const options = formatOptions(results, metricNamespace); // Do some cleanup of the query state if need be

    if (!metricNamespace && options.length) {
      onChange(setMetricNamespace(query, options[0].value));
    }

    return options;
  }, setError, [subscription, resourceGroup, metricDefinition, resourceName]);
  return metricNamespaces;
};
const useMetricNames = (query, datasource, onChange, setError) => {
  var _query$azureMonitor5;

  const {
    subscription
  } = query;
  const {
    resourceGroup,
    metricDefinition,
    resourceName,
    metricNamespace,
    metricName
  } = (_query$azureMonitor5 = query.azureMonitor) !== null && _query$azureMonitor5 !== void 0 ? _query$azureMonitor5 : {};
  return useAsyncState(async () => {
    if (!(subscription && resourceGroup && metricDefinition && resourceName && metricNamespace)) {
      return;
    }

    const results = await datasource.azureMonitorDatasource.getMetricNames({
      subscription,
      resourceGroup,
      metricDefinition,
      resourceName,
      metricNamespace
    });
    const options = formatOptions(results, metricName);
    return options;
  }, setError, [subscription, resourceGroup, metricDefinition, resourceName, metricNamespace]);
};
const useMetricMetadata = (query, datasource, onChange) => {
  var _query$azureMonitor6;

  const [metricMetadata, setMetricMetadata] = (0,react.useState)({
    aggOptions: [],
    timeGrains: [],
    dimensions: [],
    isLoading: false,
    supportedAggTypes: [],
    primaryAggType: undefined
  });
  const {
    subscription
  } = query;
  const {
    resourceGroup,
    metricDefinition,
    resourceName,
    metricNamespace,
    metricName,
    aggregation,
    timeGrain
  } = (_query$azureMonitor6 = query.azureMonitor) !== null && _query$azureMonitor6 !== void 0 ? _query$azureMonitor6 : {}; // Fetch new metric metadata when the fields change

  (0,react.useEffect)(() => {
    if (!(subscription && resourceGroup && metricDefinition && resourceName && metricNamespace && metricName)) {
      return;
    }

    datasource.azureMonitorDatasource.getMetricMetadata({
      subscription,
      resourceGroup,
      metricDefinition,
      resourceName,
      metricNamespace,
      metricName
    }).then(metadata => {
      var _metadata$supportedAg;

      // TODO: Move the aggregationTypes and timeGrain defaults into `getMetricMetadata`
      const aggregations = (metadata.supportedAggTypes || [metadata.primaryAggType]).map(v => ({
        label: v,
        value: v
      }));
      setMetricMetadata({
        aggOptions: aggregations,
        timeGrains: metadata.supportedTimeGrains,
        dimensions: metadata.dimensions,
        isLoading: false,
        supportedAggTypes: (_metadata$supportedAg = metadata.supportedAggTypes) !== null && _metadata$supportedAg !== void 0 ? _metadata$supportedAg : [],
        primaryAggType: metadata.primaryAggType
      });
    });
  }, [datasource, subscription, resourceGroup, metricDefinition, resourceName, metricNamespace, metricName]); // Update the query state in response to the meta data changing

  (0,react.useEffect)(() => {
    const newAggregation = aggregation || metricMetadata.primaryAggType;
    const newTimeGrain = timeGrain || 'auto';

    if (newAggregation !== aggregation || newTimeGrain !== timeGrain) {
      onChange(Object.assign({}, query, {
        azureMonitor: Object.assign({}, query.azureMonitor, {
          aggregation: newAggregation,
          timeGrain: newTimeGrain
        })
      }));
    }
  }, [onChange, metricMetadata, aggregation, timeGrain, query]);
  return metricMetadata;
};

function formatOptions(rawResults, selectedValue) {
  const options = rawResults.map(toOption); // account for custom values that might have been set in json file like ones crafted with a template variable (ex: "cloud-datasource-resource-$Environment")

  if (selectedValue && !options.find(option => option.value === selectedValue)) {
    options.push({
      label: selectedValue,
      value: selectedValue
    });
  }

  return options;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/MetricsQueryEditor.tsx

















const MetricsQueryEditor = _ref => {
  var _metricsMetadata$aggO, _metricsMetadata$time, _metricsMetadata$dime;

  let {
    data,
    query,
    datasource,
    subscriptionId,
    variableOptionGroup,
    onChange,
    setError
  } = _ref;
  const metricsMetadata = useMetricMetadata(query, datasource, onChange);
  const subscriptions = useSubscriptions(query, datasource, onChange, setError);
  const resourceGroups = useResourceGroups(query, datasource, onChange, setError);
  const resourceTypes = useResourceTypes(query, datasource, onChange, setError);
  const resourceNames = useResourceNames(query, datasource, onChange, setError);
  const metricNames = useMetricNames(query, datasource, onChange, setError);
  const metricNamespaces = useMetricNamespaces(query, datasource, onChange, setError);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "data-testid": "azure-monitor-metrics-query-editor",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_SubscriptionField, {
        subscriptions: subscriptions,
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_ResourceGroupsField, {
        resourceGroups: resourceGroups,
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ResourceTypeField, {
        resourceTypes: resourceTypes,
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_ResourceNameField, {
        resourceNames: resourceNames,
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_MetricNamespaceField, {
        metricNamespaces: metricNamespaces,
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_MetricNameField, {
        metricNames: metricNames,
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_AggregationField, {
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError,
        aggregationOptions: (_metricsMetadata$aggO = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata.aggOptions) !== null && _metricsMetadata$aggO !== void 0 ? _metricsMetadata$aggO : [],
        isLoading: metricsMetadata.isLoading
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_TimeGrainField, {
        query: query,
        datasource: datasource,
        subscriptionId: subscriptionId,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError,
        timeGrainOptions: (_metricsMetadata$time = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata.timeGrains) !== null && _metricsMetadata$time !== void 0 ? _metricsMetadata$time : []
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_DimensionFields, {
      data: data,
      query: query,
      datasource: datasource,
      subscriptionId: subscriptionId,
      variableOptionGroup: variableOptionGroup,
      onQueryChange: onChange,
      setError: setError,
      dimensionOptions: (_metricsMetadata$dime = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata.dimensions) !== null && _metricsMetadata$dime !== void 0 ? _metricsMetadata$dime : []
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_TopField, {
      query: query,
      datasource: datasource,
      subscriptionId: subscriptionId,
      variableOptionGroup: variableOptionGroup,
      onQueryChange: onChange,
      setError: setError
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_LegendFormatField, {
      query: query,
      datasource: datasource,
      subscriptionId: subscriptionId,
      variableOptionGroup: variableOptionGroup,
      onQueryChange: onChange,
      setError: setError
    })]
  });
};

/* harmony default export */ const MetricsQueryEditor_MetricsQueryEditor = (MetricsQueryEditor);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/MetricsQueryEditor/index.tsx

;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/NewMetricsQueryEditor/dataHooks.ts




const dataHooks_useMetricNamespaces = (query, datasource, onChange, setError) => {
  var _query$azureMonitor;

  const {
    metricNamespace,
    resourceUri
  } = (_query$azureMonitor = query.azureMonitor) !== null && _query$azureMonitor !== void 0 ? _query$azureMonitor : {};
  const metricNamespaces = useAsyncState(async () => {
    if (!resourceUri) {
      return;
    }

    const results = await datasource.azureMonitorDatasource.getMetricNamespaces({
      resourceUri
    });
    const options = dataHooks_formatOptions(results, metricNamespace); // Do some cleanup of the query state if need be

    if (!metricNamespace && options.length) {
      onChange(setMetricNamespace(query, options[0].value));
    }

    return options;
  }, setError, [resourceUri]);
  return metricNamespaces;
};
const dataHooks_useMetricNames = (query, datasource, onChange, setError) => {
  var _query$azureMonitor2;

  const {
    metricNamespace,
    metricName,
    resourceUri
  } = (_query$azureMonitor2 = query.azureMonitor) !== null && _query$azureMonitor2 !== void 0 ? _query$azureMonitor2 : {};
  return useAsyncState(async () => {
    if (!(metricNamespace && resourceUri)) {
      return;
    }

    const results = await datasource.azureMonitorDatasource.getMetricNames({
      resourceUri,
      metricNamespace
    });
    const options = dataHooks_formatOptions(results, metricName);
    return options;
  }, setError, [resourceUri, metricNamespace]);
};
const defaultMetricMetadata = {
  aggOptions: [],
  timeGrains: [],
  dimensions: [],
  isLoading: false,
  supportedAggTypes: [],
  primaryAggType: undefined
};
const dataHooks_useMetricMetadata = (query, datasource, onChange) => {
  var _query$azureMonitor3;

  const [metricMetadata, setMetricMetadata] = (0,react.useState)(defaultMetricMetadata);
  const {
    resourceUri,
    metricNamespace,
    metricName,
    aggregation,
    timeGrain
  } = (_query$azureMonitor3 = query.azureMonitor) !== null && _query$azureMonitor3 !== void 0 ? _query$azureMonitor3 : {}; // Fetch new metric metadata when the fields change

  (0,react.useEffect)(() => {
    if (!(resourceUri && metricNamespace && metricName)) {
      setMetricMetadata(defaultMetricMetadata);
      return;
    }

    datasource.azureMonitorDatasource.getMetricMetadata({
      resourceUri,
      metricNamespace,
      metricName
    }).then(metadata => {
      var _metadata$supportedAg;

      // TODO: Move the aggregationTypes and timeGrain defaults into `getMetricMetadata`
      const aggregations = (metadata.supportedAggTypes || [metadata.primaryAggType]).map(v => ({
        label: v,
        value: v
      }));
      setMetricMetadata({
        aggOptions: aggregations,
        timeGrains: metadata.supportedTimeGrains,
        dimensions: metadata.dimensions,
        isLoading: false,
        supportedAggTypes: (_metadata$supportedAg = metadata.supportedAggTypes) !== null && _metadata$supportedAg !== void 0 ? _metadata$supportedAg : [],
        primaryAggType: metadata.primaryAggType
      });
    });
  }, [datasource, resourceUri, metricNamespace, metricName]); // Update the query state in response to the meta data changing

  (0,react.useEffect)(() => {
    const newAggregation = aggregation || metricMetadata.primaryAggType;
    const newTimeGrain = timeGrain || 'auto';

    if (newAggregation !== aggregation || newTimeGrain !== timeGrain) {
      onChange(Object.assign({}, query, {
        azureMonitor: Object.assign({}, query.azureMonitor, {
          aggregation: newAggregation,
          timeGrain: newTimeGrain
        })
      }));
    }
  }, [onChange, metricMetadata, aggregation, timeGrain, query]);
  return metricMetadata;
};

function dataHooks_formatOptions(rawResults, selectedValue) {
  const options = rawResults.map(toOption); // account for custom values that might have been set in json file like ones crafted with a template variable (ex: "cloud-datasource-resource-$Environment")

  if (selectedValue && !options.find(option => option.value === selectedValue)) {
    options.push({
      label: selectedValue,
      value: selectedValue
    });
  }

  return options;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/NewMetricsQueryEditor/MetricsQueryEditor.tsx


















const NewMetricsQueryEditor_MetricsQueryEditor_MetricsQueryEditor = _ref => {
  var _EditorRow, _EditorRow2, _EditorRow3, _InlineFieldRow, _TopField, _LegendFormatField;

  let {
    data,
    query,
    datasource,
    variableOptionGroup,
    onChange,
    setError
  } = _ref;
  const metricsMetadata = dataHooks_useMetricMetadata(query, datasource, onChange);
  const metricNamespaces = dataHooks_useMetricNamespaces(query, datasource, onChange, setError);
  const metricNames = dataHooks_useMetricNames(query, datasource, onChange, setError);

  if (grafana_runtime_src.config.featureToggles.azureMonitorExperimentalUI) {
    var _query$azureMonitor, _metricsMetadata$aggO, _metricsMetadata$time, _metricsMetadata$dime;

    return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      "data-testid": "azure-monitor-metrics-query-editor-with-experimental-ui",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorRows, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorFieldGroup, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResourceField_ResourceField, {
              query: query,
              datasource: datasource,
              variableOptionGroup: variableOptionGroup,
              onQueryChange: onChange,
              setError: setError,
              selectableEntryTypes: [ResourceRowType.Resource],
              setResource: setQueryValue_setResource,
              resourceUri: (_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.resourceUri
            })
          })
        }), _EditorRow || (_EditorRow = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorFieldGroup, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_MetricNamespaceField, {
              metricNamespaces: metricNamespaces,
              query: query,
              datasource: datasource,
              variableOptionGroup: variableOptionGroup,
              onQueryChange: onChange,
              setError: setError
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_MetricNameField, {
              metricNames: metricNames,
              query: query,
              datasource: datasource,
              variableOptionGroup: variableOptionGroup,
              onQueryChange: onChange,
              setError: setError
            })]
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorFieldGroup, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_AggregationField, {
              query: query,
              datasource: datasource,
              variableOptionGroup: variableOptionGroup,
              onQueryChange: onChange,
              setError: setError,
              aggregationOptions: (_metricsMetadata$aggO = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata.aggOptions) !== null && _metricsMetadata$aggO !== void 0 ? _metricsMetadata$aggO : [],
              isLoading: metricsMetadata.isLoading
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_TimeGrainField, {
              query: query,
              datasource: datasource,
              variableOptionGroup: variableOptionGroup,
              onQueryChange: onChange,
              setError: setError,
              timeGrainOptions: (_metricsMetadata$time = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata.timeGrains) !== null && _metricsMetadata$time !== void 0 ? _metricsMetadata$time : []
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorFieldGroup, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_DimensionFields, {
              data: data,
              query: query,
              datasource: datasource,
              variableOptionGroup: variableOptionGroup,
              onQueryChange: onChange,
              setError: setError,
              dimensionOptions: (_metricsMetadata$dime = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata.dimensions) !== null && _metricsMetadata$dime !== void 0 ? _metricsMetadata$dime : []
            })
          })
        }), _EditorRow2 || (_EditorRow2 = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorFieldGroup, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_TopField, {
              query: query,
              datasource: datasource,
              variableOptionGroup: variableOptionGroup,
              onQueryChange: onChange,
              setError: setError
            })
          })
        })), _EditorRow3 || (_EditorRow3 = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorFieldGroup, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_LegendFormatField, {
              query: query,
              datasource: datasource,
              variableOptionGroup: variableOptionGroup,
              onQueryChange: onChange,
              setError: setError
            })
          })
        }))]
      })
    });
  } else {
    var _query$azureMonitor2, _metricsMetadata$aggO2, _metricsMetadata$time2, _metricsMetadata$dime2;

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      "data-testid": "azure-monitor-metrics-query-editor-with-resource-picker",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResourceField_ResourceField, {
          query: query,
          datasource: datasource,
          variableOptionGroup: variableOptionGroup,
          onQueryChange: onChange,
          setError: setError,
          selectableEntryTypes: [ResourceRowType.Resource],
          setResource: setQueryValue_setResource,
          resourceUri: (_query$azureMonitor2 = query.azureMonitor) === null || _query$azureMonitor2 === void 0 ? void 0 : _query$azureMonitor2.resourceUri
        })
      }), _InlineFieldRow || (_InlineFieldRow = /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_MetricNamespaceField, {
          metricNamespaces: metricNamespaces,
          query: query,
          datasource: datasource,
          variableOptionGroup: variableOptionGroup,
          onQueryChange: onChange,
          setError: setError
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_MetricNameField, {
          metricNames: metricNames,
          query: query,
          datasource: datasource,
          variableOptionGroup: variableOptionGroup,
          onQueryChange: onChange,
          setError: setError
        })]
      })), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_AggregationField, {
          query: query,
          datasource: datasource,
          variableOptionGroup: variableOptionGroup,
          onQueryChange: onChange,
          setError: setError,
          aggregationOptions: (_metricsMetadata$aggO2 = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata.aggOptions) !== null && _metricsMetadata$aggO2 !== void 0 ? _metricsMetadata$aggO2 : [],
          isLoading: metricsMetadata.isLoading
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_TimeGrainField, {
          query: query,
          datasource: datasource,
          variableOptionGroup: variableOptionGroup,
          onQueryChange: onChange,
          setError: setError,
          timeGrainOptions: (_metricsMetadata$time2 = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata.timeGrains) !== null && _metricsMetadata$time2 !== void 0 ? _metricsMetadata$time2 : []
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_DimensionFields, {
        data: data,
        query: query,
        datasource: datasource,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError,
        dimensionOptions: (_metricsMetadata$dime2 = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata.dimensions) !== null && _metricsMetadata$dime2 !== void 0 ? _metricsMetadata$dime2 : []
      }), _TopField || (_TopField = /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_TopField, {
        query: query,
        datasource: datasource,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError
      })), _LegendFormatField || (_LegendFormatField = /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_LegendFormatField, {
        query: query,
        datasource: datasource,
        variableOptionGroup: variableOptionGroup,
        onQueryChange: onChange,
        setError: setError
      }))]
    });
  }
};

/* harmony default export */ const NewMetricsQueryEditor_MetricsQueryEditor = (NewMetricsQueryEditor_MetricsQueryEditor_MetricsQueryEditor);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/QueryHeader.tsx




const QueryHeader = _ref => {
  let {
    query,
    onQueryChange
  } = _ref;
  const queryTypes = [{
    value: AzureQueryType.AzureMonitor,
    label: 'Metrics'
  }, {
    value: AzureQueryType.LogAnalytics,
    label: 'Logs'
  }, {
    value: AzureQueryType.AzureResourceGraph,
    label: 'Azure Resource Graph'
  }];
  const handleChange = (0,react.useCallback)(change => {
    change.value && onQueryChange(Object.assign({}, query, {
      queryType: change.value
    }));
  }, [onQueryChange, query]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    "data-testid": "azure-monitor-experimental-header",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorHeader, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.InlineSelect, {
        label: "Service",
        value: query.queryType,
        placeholder: "Service...",
        allowCustomValue: true,
        options: queryTypes,
        onChange: handleChange
      })
    })
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/QueryEditor/QueryTypeField.tsx






const QueryTypeField = _ref => {
  let {
    query,
    onQueryChange
  } = _ref;
  const queryTypes = [{
    value: AzureQueryType.AzureMonitor,
    label: 'Metrics'
  }, {
    value: AzureQueryType.LogAnalytics,
    label: 'Logs'
  }, {
    value: AzureQueryType.AzureResourceGraph,
    label: 'Azure Resource Graph'
  }];
  const handleChange = (0,react.useCallback)(change => {
    change.value && onQueryChange(Object.assign({}, query, {
      queryType: change.value
    }));
  }, [onQueryChange, query]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Field, {
    label: "Service",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      inputId: "azure-monitor-query-type-field",
      value: query.queryType,
      options: queryTypes,
      onChange: handleChange,
      width: 38
    })
  });
};

/* harmony default export */ const QueryEditor_QueryTypeField = (QueryTypeField);
// EXTERNAL MODULE: ./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__("./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/index.js");
var fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azure_monitor/url_builder.ts
class UrlBuilder {
  static buildResourceUri(subscriptionId, resourceGroup, metricDefinition, resourceName) {
    const metricDefinitionArray = metricDefinition.split('/');
    const resourceNameArray = resourceName.split('/');
    const provider = metricDefinitionArray.shift();
    const urlArray = ['/subscriptions', subscriptionId, 'resourceGroups', resourceGroup, 'providers', provider];

    for (const i in metricDefinitionArray) {
      urlArray.push(metricDefinitionArray[i]);
      urlArray.push(resourceNameArray[i]);
    }

    return urlArray.join('/');
  }

  static buildAzureMonitorGetMetricNamespacesUrl(baseUrl, apiVersion, query) {
    let resourceUri;

    if ('resourceUri' in query) {
      resourceUri = query.resourceUri;
    } else {
      const {
        subscription,
        resourceGroup,
        metricDefinition,
        resourceName
      } = query;
      resourceUri = UrlBuilder.buildResourceUri(subscription, resourceGroup, metricDefinition, resourceName);
    }

    return `${baseUrl}${resourceUri}/providers/microsoft.insights/metricNamespaces?api-version=${apiVersion}`;
  }

  static buildAzureMonitorGetMetricNamesUrl(baseUrl, apiVersion, query) {
    let resourceUri;
    const {
      metricNamespace
    } = query;

    if ('resourceUri' in query) {
      resourceUri = query.resourceUri;
    } else {
      const {
        subscription,
        resourceGroup,
        metricDefinition,
        resourceName
      } = query;
      resourceUri = UrlBuilder.buildResourceUri(subscription, resourceGroup, metricDefinition, resourceName);
    }

    return `${baseUrl}${resourceUri}/providers/microsoft.insights/metricdefinitions?api-version=${apiVersion}` + `&metricnamespace=${encodeURIComponent(metricNamespace)}`;
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/utils/migrateQuery.ts





const OLD_DEFAULT_DROPDOWN_VALUE = 'select';
function migrateQuery(query) {
  let workingQuery = query; // The old angular controller also had a `migrateApplicationInsightsKeys` migraiton that
  // migrated old properties to other properties that still do not appear to be used anymore, so
  // we decided to not include that migration anymore
  // See https://github.com/grafana/grafana/blob/a6a09add/public/app/plugins/datasource/grafana-azure-monitor-datasource/query_ctrl.ts#L269-L288

  workingQuery = migrateTimeGrains(workingQuery);
  workingQuery = migrateLogAnalyticsToFromTimes(workingQuery);
  workingQuery = migrateToDefaultNamespace(workingQuery);
  workingQuery = migrateDimensionToDimensionFilter(workingQuery);
  workingQuery = migrateResourceUri(workingQuery);
  workingQuery = migrateDimensionFilterToArray(workingQuery);
  return workingQuery;
}

function migrateTimeGrains(query) {
  var _workingQuery$azureMo;

  let workingQuery = query;

  if ((_workingQuery$azureMo = workingQuery.azureMonitor) !== null && _workingQuery$azureMo !== void 0 && _workingQuery$azureMo.timeGrainUnit && workingQuery.azureMonitor.timeGrain !== 'auto') {
    var _workingQuery$azureMo2, _workingQuery$azureMo3;

    const newTimeGrain = TimeGrainConverter.createISO8601Duration((_workingQuery$azureMo2 = workingQuery.azureMonitor.timeGrain) !== null && _workingQuery$azureMo2 !== void 0 ? _workingQuery$azureMo2 : 'auto', workingQuery.azureMonitor.timeGrainUnit);
    workingQuery = setTimeGrain(workingQuery, newTimeGrain);
    (_workingQuery$azureMo3 = workingQuery.azureMonitor) === null || _workingQuery$azureMo3 === void 0 ? true : delete _workingQuery$azureMo3.timeGrainUnit;
  }

  return workingQuery;
}

function migrateLogAnalyticsToFromTimes(query) {
  var _workingQuery$azureLo, _workingQuery$azureLo2, _workingQuery$azureLo3, _workingQuery$azureLo4;

  let workingQuery = query;

  if ((_workingQuery$azureLo = workingQuery.azureLogAnalytics) !== null && _workingQuery$azureLo !== void 0 && (_workingQuery$azureLo2 = _workingQuery$azureLo.query) !== null && _workingQuery$azureLo2 !== void 0 && _workingQuery$azureLo2.match(/\$__from\s/gi)) {
    workingQuery = setKustoQuery(workingQuery, workingQuery.azureLogAnalytics.query.replace(/\$__from\s/gi, '$__timeFrom() '));
  }

  if ((_workingQuery$azureLo3 = workingQuery.azureLogAnalytics) !== null && _workingQuery$azureLo3 !== void 0 && (_workingQuery$azureLo4 = _workingQuery$azureLo3.query) !== null && _workingQuery$azureLo4 !== void 0 && _workingQuery$azureLo4.match(/\$__to\s/gi)) {
    workingQuery = setKustoQuery(workingQuery, workingQuery.azureLogAnalytics.query.replace(/\$__to\s/gi, '$__timeTo() '));
  }

  return workingQuery;
}

function migrateToDefaultNamespace(query) {
  var _query$azureMonitor, _query$azureMonitor2;

  const haveMetricNamespace = ((_query$azureMonitor = query.azureMonitor) === null || _query$azureMonitor === void 0 ? void 0 : _query$azureMonitor.metricNamespace) && query.azureMonitor.metricNamespace !== OLD_DEFAULT_DROPDOWN_VALUE;

  if (!haveMetricNamespace && (_query$azureMonitor2 = query.azureMonitor) !== null && _query$azureMonitor2 !== void 0 && _query$azureMonitor2.metricDefinition) {
    return Object.assign({}, query, {
      azureMonitor: Object.assign({}, query.azureMonitor, {
        metricNamespace: query.azureMonitor.metricDefinition
      })
    });
  }

  return query;
}

function migrateDimensionToDimensionFilter(query) {
  var _workingQuery$azureMo4;

  let workingQuery = query;
  const oldDimension = (_workingQuery$azureMo4 = workingQuery.azureMonitor) === null || _workingQuery$azureMo4 === void 0 ? void 0 : _workingQuery$azureMo4.dimension;

  if (oldDimension && oldDimension !== 'None') {
    var _workingQuery$azureMo5;

    workingQuery = appendDimensionFilter(workingQuery, oldDimension, 'eq', [((_workingQuery$azureMo5 = workingQuery.azureMonitor) === null || _workingQuery$azureMo5 === void 0 ? void 0 : _workingQuery$azureMo5.dimensionFilter) || '']);
  }

  return workingQuery;
} // Azure Monitor metric queries prior to Grafana version 9 did not include a `resourceUri`.
// The resourceUri was previously constructed with the subscription id, resource group,
// metric definition (a.k.a. resource type), and the resource name.


function migrateResourceUri(query) {
  const azureMonitorQuery = query.azureMonitor;

  if (!azureMonitorQuery || azureMonitorQuery.resourceUri) {
    return query;
  }

  const {
    subscription
  } = query;
  const {
    resourceGroup,
    metricDefinition,
    resourceName
  } = azureMonitorQuery;

  if (!(subscription && resourceGroup && metricDefinition && resourceName)) {
    return query;
  }

  const resourceUri = UrlBuilder.buildResourceUri(subscription, resourceGroup, metricDefinition, resourceName);
  return Object.assign({}, query, {
    azureMonitor: Object.assign({}, azureMonitorQuery, {
      resourceUri
    })
  });
}

function migrateDimensionFilterToArray(query) {
  const azureMonitorQuery = query.azureMonitor;

  if (!azureMonitorQuery) {
    return query;
  }

  const newFilters = [];
  const dimensionFilters = azureMonitorQuery.dimensionFilters;

  if (dimensionFilters && dimensionFilters.length > 0) {
    dimensionFilters.forEach(filter => {
      const staticProps = {
        dimension: filter.dimension,
        operator: filter.operator
      };

      if (!filter.filters && filter.filter) {
        newFilters.push(Object.assign({}, staticProps, {
          filters: [filter.filter]
        }));
      } else {
        let hasFilter = false;

        if (filter.filters && filter.filter) {
          for (const oldFilter of filter.filters) {
            if (filter.filter === oldFilter) {
              hasFilter = true;
              break;
            }
          }

          if (!hasFilter && filter.filter !== '*') {
            filter.filters.push(filter.filter);
          }

          newFilters.push(Object.assign({}, staticProps, {
            filters: filter.filters
          }));
        }
      }
    });

    if (newFilters.length > 0) {
      return Object.assign({}, query, {
        azureMonitor: Object.assign({}, azureMonitorQuery, {
          dimensionFilters: newFilters
        })
      });
    }
  }

  return query;
} // datasource.ts also contains some migrations, which have been moved to here. Unsure whether
// they should also do all the other migrations...


function datasourceMigrations(query) {
  let workingQuery = query;

  if (!workingQuery.queryType) {
    workingQuery = Object.assign({}, workingQuery, {
      queryType: AzureQueryType.AzureMonitor
    });
  }

  if (workingQuery.queryType === AzureQueryType.AzureMonitor && workingQuery.azureMonitor) {
    workingQuery = migrateDimensionToDimensionFilter(workingQuery);
    workingQuery = migrateResourceUri(workingQuery);
    workingQuery = migrateDimensionFilterToArray(workingQuery);
  }

  return workingQuery;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/QueryEditor/usePreparedQuery.ts





const DEFAULT_QUERY = {
  queryType: AzureQueryType.AzureMonitor
};

const prepareQuery = query => {
  // Note: _.defaults does not apply default values deeply.
  const withDefaults = (0,lodash.defaults)({}, query, DEFAULT_QUERY);
  const migratedQuery = migrateQuery(withDefaults); // If we didn't make any changes to the object, then return the original object to keep the
  // identity the same, and not trigger any other useEffects or anything.

  return fast_deep_equal_default()(migratedQuery, query) ? query : migratedQuery;
};
/**
 * Returns queries with some defaults + migrations, and calls onChange function to notify if it changes
 */


const usePreparedQuery = (query, onChangeQuery) => {
  const preparedQuery = (0,react.useMemo)(() => prepareQuery(query), [query]);
  (0,react.useEffect)(() => {
    if (preparedQuery !== query) {
      onChangeQuery(preparedQuery);
    }
  }, [preparedQuery, query, onChangeQuery]);
  return preparedQuery;
};

/* harmony default export */ const QueryEditor_usePreparedQuery = (usePreparedQuery);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/QueryEditor/QueryEditor.tsx
var QueryEditor_Space, _a;



















const QueryEditor = _ref => {
  let {
    query: baseQuery,
    datasource,
    onChange,
    onRunQuery: baseOnRunQuery,
    data
  } = _ref;
  const [errorMessage, setError] = useLastError();
  const onRunQuery = (0,react.useMemo)(() => (0,lodash.debounce)(baseOnRunQuery, 500), [baseOnRunQuery]);
  const onQueryChange = (0,react.useCallback)(newQuery => {
    onChange(newQuery);
    onRunQuery();
  }, [onChange, onRunQuery]);
  const query = QueryEditor_usePreparedQuery(baseQuery, onQueryChange);
  const subscriptionId = query.subscription || datasource.azureMonitorDatasource.defaultSubscriptionId;
  const variableOptionGroup = {
    label: 'Template Variables',
    options: datasource.getVariables().map(v => ({
      label: v,
      value: v
    }))
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "data-testid": "azure-monitor-query-editor",
    children: [grafana_runtime_src.config.featureToggles.azureMonitorExperimentalUI && /*#__PURE__*/(0,jsx_runtime.jsx)(QueryHeader, {
      query: query,
      onQueryChange: onQueryChange
    }), !grafana_runtime_src.config.featureToggles.azureMonitorExperimentalUI && /*#__PURE__*/(0,jsx_runtime.jsx)(QueryEditor_QueryTypeField, {
      query: query,
      onQueryChange: onQueryChange
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(EditorForQueryType, {
      data: data,
      subscriptionId: subscriptionId,
      query: query,
      datasource: datasource,
      onChange: onQueryChange,
      variableOptionGroup: variableOptionGroup,
      setError: setError
    }), errorMessage && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [QueryEditor_Space || (QueryEditor_Space = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
        v: 2
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        severity: "error",
        title: "An error occurred while requesting metadata from Azure Monitor",
        children: errorMessage
      })]
    })]
  });
};

const EditorForQueryType = _ref2 => {
  let {
    data,
    subscriptionId,
    query,
    datasource,
    variableOptionGroup,
    onChange,
    setError
  } = _ref2;

  switch (query.queryType) {
    case AzureQueryType.AzureMonitor:
      if (grafana_runtime_src.config.featureToggles.azureMonitorResourcePickerForMetrics) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(NewMetricsQueryEditor_MetricsQueryEditor, {
          data: data,
          query: query,
          datasource: datasource,
          onChange: onChange,
          variableOptionGroup: variableOptionGroup,
          setError: setError
        });
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_MetricsQueryEditor, {
        data: data,
        subscriptionId: subscriptionId,
        query: query,
        datasource: datasource,
        onChange: onChange,
        variableOptionGroup: variableOptionGroup,
        setError: setError
      });

    case AzureQueryType.LogAnalytics:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(LogsQueryEditor_LogsQueryEditor, {
        subscriptionId: subscriptionId,
        query: query,
        datasource: datasource,
        onChange: onChange,
        variableOptionGroup: variableOptionGroup,
        setError: setError
      });

    case AzureQueryType.AzureResourceGraph:
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ArgQueryEditor_ArgQueryEditor, {
        subscriptionId: subscriptionId,
        query: query,
        datasource: datasource,
        onChange: onChange,
        variableOptionGroup: variableOptionGroup,
        setError: setError
      });

    default:
      const type = query.queryType;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: "Unknown query type",
        children: (type === 'Application Insights' || type === 'Insights Analytics') && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [type, " was deprecated in Grafana 9. See the", ' ', _a || (_a = /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://grafana.com/docs/grafana/latest/datasources/azuremonitor/deprecated-application-insights/",
            target: "_blank",
            rel: "noreferrer",
            children: "deprecation notice"
          })), ' ', "to get more information about how to migrate your queries. This is the current query definition:", /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
            height: "200px",
            readOnly: true,
            language: "json",
            value: JSON.stringify(query, null, 4)
          })]
        })
      });
  }

  return null;
};

/* harmony default export */ const QueryEditor_QueryEditor = (QueryEditor);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/QueryEditor/index.tsx

// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js
var forkJoin = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./public/app/features/templating/template_srv.ts + 1 modules
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js
var from = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/log_analytics/querystring_builder.ts

class LogAnalyticsQuerystringBuilder {
  constructor(rawQueryString, options, defaultTimeField) {
    this.rawQueryString = rawQueryString;
    this.options = options;
    this.defaultTimeField = defaultTimeField;
    this.rawQueryString = rawQueryString;
    this.options = options;
    this.defaultTimeField = defaultTimeField;
  }

  generate() {
    let queryString = this.rawQueryString;
    const macroRegexp = /\$__([_a-zA-Z0-9]+)\(([^()]*)\)/gi;
    queryString = queryString.replace(macroRegexp, (match, p1, p2) => {
      if (p1 === 'contains') {
        return this.getMultiContains(p2);
      }

      return match;
    });
    queryString = queryString.replace(/\$__escapeMulti\(('[^]*')\)/gi, (match, p1) => this.escape(p1));

    if (this.options) {
      queryString = queryString.replace(macroRegexp, (match, p1, p2) => {
        if (p1 === 'timeFilter') {
          return this.getTimeFilter(p2, this.options);
        }

        if (p1 === 'timeFrom') {
          return this.getFrom(this.options);
        }

        if (p1 === 'timeTo') {
          return this.getUntil(this.options);
        }

        return match;
      });
      queryString = queryString.replace(/\$__interval/gi, this.options.interval);
    }

    const rawQuery = queryString;
    queryString = encodeURIComponent(queryString);
    const uriString = `query=${queryString}`;
    return {
      uriString,
      rawQuery
    };
  }

  getFrom(options) {
    const from = options.range.from;
    return `datetime(${(0,src.dateTime)(from).startOf('minute').toISOString()})`;
  }

  getUntil(options) {
    var _options$rangeRaw;

    if (((_options$rangeRaw = options.rangeRaw) === null || _options$rangeRaw === void 0 ? void 0 : _options$rangeRaw.to) === 'now') {
      const now = Date.now();
      return `datetime(${(0,src.dateTime)(now).startOf('minute').toISOString()})`;
    } else {
      const until = options.range.to;
      return `datetime(${(0,src.dateTime)(until).startOf('minute').toISOString()})`;
    }
  }

  getTimeFilter(timeFieldArg, options) {
    var _options$rangeRaw2;

    const timeField = timeFieldArg || this.defaultTimeField;

    if (((_options$rangeRaw2 = options.rangeRaw) === null || _options$rangeRaw2 === void 0 ? void 0 : _options$rangeRaw2.to) === 'now') {
      return `${timeField} >= ${this.getFrom(options)}`;
    } else {
      return `${timeField}  >= ${this.getFrom(options)} and ${timeField} <= ${this.getUntil(options)}`;
    }
  }

  getMultiContains(inputs) {
    const firstCommaIndex = inputs.indexOf(',');
    const field = inputs.substring(0, firstCommaIndex);
    const templateVar = inputs.substring(inputs.indexOf(',') + 1);

    if (templateVar && templateVar.toLowerCase().trim() === 'all') {
      return '1 == 1';
    }

    return `${field.trim()} in (${templateVar.trim()})`;
  }

  escape(inputs) {
    return inputs.substring(1, inputs.length - 1).split(`','`).map(v => `@'${v}'`).join(', ');
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azure_log_analytics/response_parser.ts


class response_parser_ResponseParser {
  constructor(results) {
    this.results = results;
    this.results = results;
  }

  parseQueryResult() {
    let data = [];
    let columns = [];

    for (let i = 0; i < this.results.length; i++) {
      if (this.results[i].result.tables.length === 0) {
        continue;
      }

      columns = this.results[i].result.tables[0].columns;
      const rows = this.results[i].result.tables[0].rows;

      if (this.results[i].query.resultFormat === 'time_series') {
        data = (0,lodash.concat)(data, this.parseTimeSeriesResult(this.results[i].query, columns, rows));
      } else {
        data = (0,lodash.concat)(data, this.parseTableResult(this.results[i].query, columns, rows));
      }
    }

    return data;
  }

  parseTimeSeriesResult(query, columns, rows) {
    const data = [];
    let timeIndex = -1;
    let metricIndex = -1;
    let valueIndex = -1;

    for (let i = 0; i < columns.length; i++) {
      if (timeIndex === -1 && columns[i].type === 'datetime') {
        timeIndex = i;
      }

      if (metricIndex === -1 && columns[i].type === 'string') {
        metricIndex = i;
      }

      if (valueIndex === -1 && ['int', 'long', 'real', 'double'].indexOf(columns[i].type) > -1) {
        valueIndex = i;
      }
    }

    if (timeIndex === -1) {
      throw new Error('No datetime column found in the result. The Time Series format requires a time column.');
    }

    (0,lodash.forEach)(rows, row => {
      const epoch = response_parser_ResponseParser.dateTimeToEpoch(row[timeIndex]);
      const metricName = metricIndex > -1 ? row[metricIndex] : columns[valueIndex].name;
      const bucket = response_parser_ResponseParser.findOrCreateBucket(data, metricName);
      bucket.datapoints.push([row[valueIndex], epoch]);
      bucket.refId = query.refId;
      bucket.meta = {
        executedQueryString: query.query
      };
    });
    return data;
  }

  parseTableResult(query, columns, rows) {
    const tableResult = {
      type: 'table',
      columns: (0,lodash.map)(columns, col => {
        return {
          text: col.name,
          type: col.type
        };
      }),
      rows: rows,
      refId: query.refId,
      meta: {
        executedQueryString: query.query
      }
    };
    return tableResult;
  }

  parseToVariables() {
    const queryResult = this.parseQueryResult();
    const variables = [];
    (0,lodash.forEach)(queryResult, result => {
      (0,lodash.forEach)((0,lodash.flattenDeep)(result.rows), row => {
        variables.push({
          text: row,
          value: row
        });
      });
    });
    return variables;
  }

  transformToAnnotations(options) {
    const queryResult = this.parseQueryResult();
    const list = [];
    (0,lodash.forEach)(queryResult, result => {
      let timeIndex = -1;
      let textIndex = -1;
      let tagsIndex = -1;

      for (let i = 0; i < result.columns.length; i++) {
        if (timeIndex === -1 && result.columns[i].type === 'datetime') {
          timeIndex = i;
        }

        if (textIndex === -1 && result.columns[i].text.toLowerCase() === 'text') {
          textIndex = i;
        }

        if (tagsIndex === -1 && result.columns[i].text.toLowerCase() === 'tags') {
          tagsIndex = i;
        }
      }

      (0,lodash.forEach)(result.rows, row => {
        list.push({
          annotation: options.annotation,
          time: Math.floor(response_parser_ResponseParser.dateTimeToEpoch(row[timeIndex])),
          text: row[textIndex] ? row[textIndex].toString() : '',
          tags: row[tagsIndex] ? row[tagsIndex].trim().split(/\s*,\s*/) : []
        });
      });
    });
    return list;
  }

  static findOrCreateBucket(data, target) {
    let dataTarget = (0,lodash.find)(data, ['target', target]);

    if (!dataTarget) {
      dataTarget = {
        target: target,
        datapoints: [],
        refId: '',
        query: ''
      };
      data.push(dataTarget);
    }

    return dataTarget;
  }

  static dateTimeToEpoch(dateTimeValue) {
    return (0,src.dateTime)(dateTimeValue).valueOf();
  }

  static parseSubscriptions(result) {
    const list = [];

    if (!result) {
      return list;
    }

    const valueFieldName = 'subscriptionId';
    const textFieldName = 'displayName';

    for (let i = 0; i < result.value.length; i++) {
      if (!(0,lodash.find)(list, ['value', (0,lodash.get)(result.value[i], valueFieldName)])) {
        list.push({
          text: `${(0,lodash.get)(result.value[i], textFieldName)}`,
          value: (0,lodash.get)(result.value[i], valueFieldName)
        });
      }
    }

    return list;
  }

} // matches (name):(type) = (defaultValue)
// e.g. fromRangeStart:datetime = datetime(null)
//  - name: fromRangeStart
//  - type: datetime
//  - defaultValue: datetime(null)

const METADATA_FUNCTION_PARAMS = /([\w\W]+):([\w]+)(?:\s?=\s?([\w\W]+))?/;

function transformMetadataFunction(sourceSchema) {
  if (!sourceSchema.functions) {
    return [];
  }

  return sourceSchema.functions.map(fn => {
    const params = fn.parameters && fn.parameters.split(', ').map(arg => {
      const match = arg.match(METADATA_FUNCTION_PARAMS);

      if (!match) {
        return;
      }

      const [, name, type, defaultValue] = match;
      return {
        name,
        type,
        defaultValue,
        cslDefaultValue: defaultValue
      };
    }).filter(v => !!v);
    return {
      name: fn.name,
      body: fn.body,
      inputParameters: params || []
    };
  });
}

function transformMetadataToKustoSchema(sourceSchema, nameOrIdOrSomething, templateVariables) {
  const database = {
    name: nameOrIdOrSomething,
    tables: sourceSchema.tables,
    functions: transformMetadataFunction(sourceSchema),
    majorVersion: 0,
    minorVersion: 0
  }; // Adding macros as known functions

  database.functions.push({
    name: '$__timeFilter',
    body: '{ true }',
    inputParameters: [{
      name: 'timeColumn',
      type: 'System.String',
      defaultValue: '""',
      cslDefaultValue: '""'
    }]
  }, {
    name: '$__timeFrom',
    body: '{ datetime(2018-06-05T18:09:58.907Z) }',
    inputParameters: []
  }, {
    name: '$__timeTo',
    body: '{ datetime(2018-06-05T20:09:58.907Z) }',
    inputParameters: []
  }, {
    name: '$__escapeMulti',
    body: `{ @'\\grafana-vm\Network(eth0)\Total', @'\\hello!'}`,
    inputParameters: [{
      name: '$myVar',
      type: 'System.String',
      defaultValue: '$myVar',
      cslDefaultValue: '$myVar'
    }]
  }, {
    name: '$__contains',
    body: `{ colName in ('value1','value2') }`,
    inputParameters: [{
      name: 'colName',
      type: 'System.String',
      defaultValue: 'colName',
      cslDefaultValue: 'colName'
    }, {
      name: '$myVar',
      type: 'System.String',
      defaultValue: '$myVar',
      cslDefaultValue: '$myVar'
    }]
  }); // Adding macros as global parameters

  const globalParameters = templateVariables.map(v => {
    return {
      name: `$${v.name}`,
      type: 'dynamic'
    };
  });
  return {
    clusterType: 'Engine',
    cluster: {
      connectionString: nameOrIdOrSomething,
      databases: [database]
    },
    database: database,
    globalParameters
  };
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azure_log_analytics/azure_log_analytics_datasource.ts
function azure_log_analytics_datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class AzureLogAnalyticsDatasource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;

    azure_log_analytics_datasource_defineProperty(this, "resourcePath", void 0);

    azure_log_analytics_datasource_defineProperty(this, "azurePortalUrl", void 0);

    azure_log_analytics_datasource_defineProperty(this, "defaultSubscriptionId", void 0);

    azure_log_analytics_datasource_defineProperty(this, "azureMonitorPath", void 0);

    azure_log_analytics_datasource_defineProperty(this, "firstWorkspace", void 0);

    azure_log_analytics_datasource_defineProperty(this, "cache", void 0);

    this.instanceSettings = instanceSettings;
    this.cache = new Map();
    this.resourcePath = `${routeNames.logAnalytics}`;
    this.azureMonitorPath = `${routeNames.azureMonitor}/subscriptions`;
    const cloud = getAzureCloud(instanceSettings);
    this.azurePortalUrl = getAzurePortalUrl(cloud);
    this.defaultSubscriptionId = this.instanceSettings.jsonData.subscriptionId || '';
  }

  isConfigured() {
    // If validation didn't return any error then the data source is properly configured
    return !this.validateDatasource();
  }

  filterQuery(item) {
    var _item$azureLogAnalyti;

    return item.hide !== true && !!((_item$azureLogAnalyti = item.azureLogAnalytics) !== null && _item$azureLogAnalyti !== void 0 && _item$azureLogAnalyti.query) && (!!item.azureLogAnalytics.resource || !!item.azureLogAnalytics.workspace);
  }

  async getSubscriptions() {
    if (!this.isConfigured()) {
      return [];
    }

    const path = `${this.azureMonitorPath}?api-version=2019-03-01`;
    return await this.getResource(path).then(result => {
      return response_parser_ResponseParser.parseSubscriptions(result);
    });
  }

  async getWorkspaces(subscription) {
    const response = await this.getWorkspaceList(subscription);
    return (0,lodash.map)(response.value, val => {
      return {
        text: val.name,
        value: val.id
      };
    }) || [];
  }

  getWorkspaceList(subscription) {
    const subscriptionId = (0,grafana_runtime_src.getTemplateSrv)().replace(subscription || this.defaultSubscriptionId);
    const workspaceListUrl = this.azureMonitorPath + `/${subscriptionId}/providers/Microsoft.OperationalInsights/workspaces?api-version=2017-04-26-preview`;
    return this.getResource(workspaceListUrl);
  }

  async getMetadata(resourceUri) {
    const path = `${this.resourcePath}/v1${resourceUri}/metadata`;
    const resp = await this.getResource(path);
    return resp;
  }

  async getKustoSchema(resourceUri) {
    const templateSrv = (0,grafana_runtime_src.getTemplateSrv)();
    const interpolatedUri = templateSrv.replace(resourceUri, {}, interpolateVariable);
    const metadata = await this.getMetadata(interpolatedUri);
    return transformMetadataToKustoSchema(metadata, interpolatedUri, templateSrv.getVariables());
  }

  applyTemplateVariables(target, scopedVars) {
    const item = target.azureLogAnalytics;

    if (!item) {
      return target;
    }

    const templateSrv = (0,grafana_runtime_src.getTemplateSrv)();
    const resource = templateSrv.replace(item.resource, scopedVars);
    let workspace = templateSrv.replace(item.workspace, scopedVars);

    if (!workspace && !resource && this.firstWorkspace) {
      workspace = this.firstWorkspace;
    }

    const query = templateSrv.replace(item.query, scopedVars, interpolateVariable);
    return {
      refId: target.refId,
      queryType: AzureQueryType.LogAnalytics,
      azureLogAnalytics: {
        resultFormat: item.resultFormat,
        query,
        resource,
        // Workspace was removed in Grafana 8, but remains for backwards compat
        workspace
      }
    };
  }
  /**
   * Augment the results with links back to the azure console
   */


  query(request) {
    return super.query(request).pipe((0,mergeMap/* mergeMap */.z)(res => {
      return (0,from/* from */.D)(this.processResponse(res));
    }));
  }

  async processResponse(res) {
    if (res.data) {
      for (const df of res.data) {
        var _df$meta, _df$meta$custom;

        const encodedQuery = (_df$meta = df.meta) === null || _df$meta === void 0 ? void 0 : (_df$meta$custom = _df$meta.custom) === null || _df$meta$custom === void 0 ? void 0 : _df$meta$custom.encodedQuery;

        if (encodedQuery && encodedQuery.length > 0) {
          const url = await this.buildDeepLink(df.meta.custom);

          if (url !== null && url !== void 0 && url.length) {
            for (const field of df.fields) {
              field.config.links = [{
                url: url,
                title: 'View in Azure Portal',
                targetBlank: true
              }];
            }
          }
        }
      }
    }

    return res;
  }

  async buildDeepLink(customMeta) {
    const base64Enc = encodeURIComponent(customMeta.encodedQuery);
    const workspaceId = customMeta.workspace;
    const subscription = customMeta.subscription;
    const details = await this.getWorkspaceDetails(workspaceId);

    if (!details.workspace || !details.resourceGroup) {
      return '';
    }

    const url = `${this.azurePortalUrl}/#blade/Microsoft_OperationsManagementSuite_Workspace/` + `AnalyticsBlade/initiator/AnalyticsShareLinkToQuery/isQueryEditorVisible/true/scope/` + `%7B%22resources%22%3A%5B%7B%22resourceId%22%3A%22%2Fsubscriptions%2F${subscription}` + `%2Fresourcegroups%2F${details.resourceGroup}%2Fproviders%2Fmicrosoft.operationalinsights%2Fworkspaces%2F${details.workspace}` + `%22%7D%5D%7D/query/${base64Enc}/isQueryBase64Compressed/true/timespanInIsoFormat/P1D`;
    return url;
  }

  async getWorkspaceDetails(workspaceId) {
    if (!this.defaultSubscriptionId) {
      return {};
    }

    const response = await this.getWorkspaceList(this.defaultSubscriptionId);
    const details = response.value.find(o => {
      return o.properties.customerId === workspaceId;
    });

    if (!details) {
      return {};
    }

    const regex = /.*resourcegroups\/(.*)\/providers.*/;
    const results = regex.exec(details.id);

    if (!results || results.length < 2) {
      return {};
    }

    return {
      workspace: details.name,
      resourceGroup: results[1]
    };
  }
  /*
    In 7.5.x it used to be possible to set a default workspace id in the config on the auth page.
    This has been deprecated, however is still used by a few legacy template queries.
  */


  getDeprecatedDefaultWorkSpace() {
    return this.instanceSettings.jsonData.logAnalyticsDefaultWorkspace;
  }

  buildQuery(query, options, workspace) {
    const querystringBuilder = new LogAnalyticsQuerystringBuilder((0,grafana_runtime_src.getTemplateSrv)().replace(query, {}, interpolateVariable), options, 'TimeGenerated');
    const querystring = querystringBuilder.generate().uriString;
    const path = isGUIDish(workspace) ? `${this.resourcePath}/v1/workspaces/${workspace}/query?${querystring}` : `${this.resourcePath}/v1${workspace}/query?${querystring}`;
    const queries = [{
      datasource: this.getRef(),
      path: path,
      resultFormat: 'table'
    }];
    return queries;
  }

  async getDefaultOrFirstSubscription() {
    var _subscriptions$;

    if (this.defaultSubscriptionId) {
      return this.defaultSubscriptionId;
    }

    const subscriptions = await this.getSubscriptions();
    return (_subscriptions$ = subscriptions[0]) === null || _subscriptions$ === void 0 ? void 0 : _subscriptions$.value;
  }

  async getFirstWorkspace() {
    var _workspaces$;

    if (this.firstWorkspace) {
      return this.firstWorkspace;
    }

    const subscriptionId = await this.getDefaultOrFirstSubscription();

    if (!subscriptionId) {
      return undefined;
    }

    const workspaces = await this.getWorkspaces(subscriptionId);
    const workspace = (_workspaces$ = workspaces[0]) === null || _workspaces$ === void 0 ? void 0 : _workspaces$.value;

    if (workspace) {
      this.firstWorkspace = workspace;
    }

    return workspace;
  }

  annotationQuery(options) {
    if (!options.annotation.rawQuery) {
      return Promise.reject({
        message: 'Query missing in annotation definition'
      });
    }

    const queries = this.buildQuery(options.annotation.rawQuery, options, options.annotation.workspace);
    const promises = this.doQueries(queries);
    return Promise.all(promises).then(results => {
      const annotations = new response_parser_ResponseParser(results).transformToAnnotations(options);
      return annotations;
    });
  }

  doQueries(queries) {
    return (0,lodash.map)(queries, query => {
      return this.getResource(query.path).then(result => {
        return {
          result: result,
          query: query
        };
      }).catch(err => {
        throw {
          error: err,
          query: query
        };
      });
    });
  }

  async testDatasource() {
    const validationError = this.validateDatasource();

    if (validationError) {
      return validationError;
    }

    let resourceOrWorkspace;

    try {
      const result = await this.getFirstWorkspace();

      if (!result) {
        return {
          status: 'error',
          message: 'Workspace not found.'
        };
      }

      resourceOrWorkspace = result;
    } catch (e) {
      let message = 'Azure Log Analytics requires access to Azure Monitor but had the following error: ';
      return {
        status: 'error',
        message: this.getErrorMessage(message, e)
      };
    }

    try {
      const path = isGUIDish(resourceOrWorkspace) ? `${this.resourcePath}/v1/workspaces/${resourceOrWorkspace}/metadata` : `${this.resourcePath}/v1${resourceOrWorkspace}/metadata`;
      return await this.getResource(path).then(response => {
        return {
          status: 'success',
          message: 'Successfully queried the Azure Log Analytics service.',
          title: 'Success'
        };
      });
    } catch (e) {
      let message = 'Azure Log Analytics: ';
      return {
        status: 'error',
        message: this.getErrorMessage(message, e)
      };
    }
  }

  getErrorMessage(message, error) {
    message += error.statusText ? error.statusText + ': ' : '';

    if (error.data && error.data.error && error.data.error.code) {
      message += error.data.error.code + '. ' + error.data.error.message;
    } else if (error.data && error.data.error) {
      message += error.data.error;
    } else if (error.data) {
      message += error.data;
    } else {
      message += 'Cannot connect to Azure Log Analytics REST API.';
    }

    return message;
  }

  validateDatasource() {
    const authType = getAuthType(this.instanceSettings);

    if (authType === 'clientsecret') {
      if (!this.isValidConfigField(this.instanceSettings.jsonData.tenantId)) {
        return {
          status: 'error',
          message: 'The Tenant Id field is required.'
        };
      }

      if (!this.isValidConfigField(this.instanceSettings.jsonData.clientId)) {
        return {
          status: 'error',
          message: 'The Client Id field is required.'
        };
      }
    }

    return undefined;
  }

  isValidConfigField(field) {
    return typeof field === 'string' && field.length > 0;
  }

}
// EXTERNAL MODULE: ./public/app/features/dashboard/services/TimeSrv.ts + 1 modules
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azureMetadata/locations.ts
// Unfortunately this list is manually maintained as there's no (nice) automated way to get
// data from Azure.
const locationMetadata = [{
  location: 'eastus',
  displayName: 'East US',
  supportsLogs: true
}, {
  location: 'eastus2',
  displayName: 'East US 2',
  supportsLogs: true
}, {
  location: 'southcentralus',
  displayName: 'South Central US',
  supportsLogs: true
}, {
  location: 'westus2',
  displayName: 'West US 2',
  supportsLogs: true
}, {
  location: 'westus3',
  displayName: 'West US 3',
  supportsLogs: true
}, {
  location: 'australiaeast',
  displayName: 'Australia East',
  supportsLogs: true
}, {
  location: 'southeastasia',
  displayName: 'Southeast Asia',
  supportsLogs: true
}, {
  location: 'northeurope',
  displayName: 'North Europe',
  supportsLogs: true
}, {
  location: 'uksouth',
  displayName: 'UK South',
  supportsLogs: true
}, {
  location: 'westeurope',
  displayName: 'West Europe',
  supportsLogs: true
}, {
  location: 'centralus',
  displayName: 'Central US',
  supportsLogs: true
}, {
  location: 'northcentralus',
  displayName: 'North Central US',
  supportsLogs: true
}, {
  location: 'westus',
  displayName: 'West US',
  supportsLogs: true
}, {
  location: 'southafricanorth',
  displayName: 'South Africa North',
  supportsLogs: true
}, {
  location: 'centralindia',
  displayName: 'Central India',
  supportsLogs: true
}, {
  location: 'eastasia',
  displayName: 'East Asia',
  supportsLogs: true
}, {
  location: 'japaneast',
  displayName: 'Japan East',
  supportsLogs: true
}, {
  location: 'jioindiawest',
  displayName: 'Jio India West',
  supportsLogs: true
}, {
  location: 'koreacentral',
  displayName: 'Korea Central',
  supportsLogs: true
}, {
  location: 'canadacentral',
  displayName: 'Canada Central',
  supportsLogs: true
}, {
  location: 'francecentral',
  displayName: 'France Central',
  supportsLogs: true
}, {
  location: 'germanywestcentral',
  displayName: 'Germany West Central',
  supportsLogs: true
}, {
  location: 'norwayeast',
  displayName: 'Norway East',
  supportsLogs: true
}, {
  location: 'switzerlandnorth',
  displayName: 'Switzerland North',
  supportsLogs: true
}, {
  location: 'uaenorth',
  displayName: 'UAE North',
  supportsLogs: true
}, {
  location: 'brazilsouth',
  displayName: 'Brazil South',
  supportsLogs: true
}, {
  location: 'centralusstage',
  displayName: 'Central US (Stage)',
  supportsLogs: true
}, {
  location: 'eastusstage',
  displayName: 'East US (Stage)',
  supportsLogs: true
}, {
  location: 'eastus2stage',
  displayName: 'East US 2 (Stage)',
  supportsLogs: true
}, {
  location: 'northcentralusstage',
  displayName: 'North Central US (Stage)',
  supportsLogs: true
}, {
  location: 'southcentralusstage',
  displayName: 'South Central US (Stage)',
  supportsLogs: true
}, {
  location: 'westusstage',
  displayName: 'West US (Stage)',
  supportsLogs: true
}, {
  location: 'westus2stage',
  displayName: 'West US 2 (Stage)',
  supportsLogs: true
}, {
  location: 'asia',
  displayName: 'Asia',
  supportsLogs: true
}, {
  location: 'asiapacific',
  displayName: 'Asia Pacific',
  supportsLogs: true
}, {
  location: 'australia',
  displayName: 'Australia',
  supportsLogs: true
}, {
  location: 'brazil',
  displayName: 'Brazil',
  supportsLogs: true
}, {
  location: 'canada',
  displayName: 'Canada',
  supportsLogs: true
}, {
  location: 'europe',
  displayName: 'Europe',
  supportsLogs: true
}, {
  location: 'global',
  displayName: 'Global',
  supportsLogs: true
}, {
  location: 'india',
  displayName: 'India',
  supportsLogs: true
}, {
  location: 'japan',
  displayName: 'Japan',
  supportsLogs: true
}, {
  location: 'uk',
  displayName: 'United Kingdom',
  supportsLogs: true
}, {
  location: 'unitedstates',
  displayName: 'United States',
  supportsLogs: true
}, {
  location: 'eastasiastage',
  displayName: 'East Asia (Stage)',
  supportsLogs: true
}, {
  location: 'southeastasiastage',
  displayName: 'Southeast Asia (Stage)',
  supportsLogs: true
}, {
  location: 'westcentralus',
  displayName: 'West Central US',
  supportsLogs: true
}, {
  location: 'southafricawest',
  displayName: 'South Africa West',
  supportsLogs: true
}, {
  location: 'australiacentral',
  displayName: 'Australia Central',
  supportsLogs: true
}, {
  location: 'australiacentral2',
  displayName: 'Australia Central 2',
  supportsLogs: true
}, {
  location: 'australiasoutheast',
  displayName: 'Australia Southeast',
  supportsLogs: true
}, {
  location: 'japanwest',
  displayName: 'Japan West',
  supportsLogs: true
}, {
  location: 'koreasouth',
  displayName: 'Korea South',
  supportsLogs: true
}, {
  location: 'southindia',
  displayName: 'South India',
  supportsLogs: true
}, {
  location: 'westindia',
  displayName: 'West India',
  supportsLogs: true
}, {
  location: 'canadaeast',
  displayName: 'Canada East',
  supportsLogs: true
}, {
  location: 'francesouth',
  displayName: 'France South',
  supportsLogs: true
}, {
  location: 'germanynorth',
  displayName: 'Germany North',
  supportsLogs: true
}, {
  location: 'norwaywest',
  displayName: 'Norway West',
  supportsLogs: true
}, {
  location: 'switzerlandwest',
  displayName: 'Switzerland West',
  supportsLogs: true
}, {
  location: 'ukwest',
  displayName: 'UK West',
  supportsLogs: true
}, {
  location: 'uaecentral',
  displayName: 'UAE Central',
  supportsLogs: true
}, {
  location: 'brazilsoutheast',
  displayName: 'Brazil Southeast',
  supportsLogs: true
}, {
  location: 'chinaeast',
  displayName: 'China Eest',
  supportsLogs: true
}, {
  location: 'chinaeast2',
  displayName: 'China Eest 2',
  supportsLogs: true
}, {
  location: 'chinanorth',
  displayName: 'China North',
  supportsLogs: true
}, {
  location: 'chinanorth2',
  displayName: 'China North 2',
  supportsLogs: true
}, {
  location: 'chinanorth3',
  displayName: 'China North 3',
  supportsLogs: true
}];
const logsSupportedLocationsKusto = locationMetadata.filter(v => v.supportsLogs).map(v => `"${v.location}"`).join(','); // Object, keyed by location ID

const locationDisplayNames = locationMetadata.reduce((acc, location) => Object.assign({}, acc, {
  [location.location]: location.displayName
}), {});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azureMetadata/resourceTypes.ts
// Unfortunately this list is manually maintained as there's no (nice) automated way to get
// data from Azure.
const resourceTypeMetadata = [{
  resourceType: 'microsoft.analysisservices/servers',
  displayName: 'Analysis Services',
  supportsLogs: true
}, {
  resourceType: 'microsoft.synapse/workspaces/bigdatapools',
  displayName: 'Apache Spark pool',
  supportsLogs: true
}, {
  resourceType: 'microsoft.apimanagement/service',
  displayName: 'API Management service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.appconfiguration/configurationstores',
  displayName: 'App Configuration',
  supportsLogs: true
}, {
  resourceType: 'microsoft.web/sites/slots',
  displayName: 'App Service (Slot)',
  supportsLogs: true
}, {
  resourceType: 'microsoft.web/hostingenvironments',
  displayName: 'App Service Environment',
  supportsLogs: true
}, {
  resourceType: 'microsoft.web/serverfarms',
  displayName: 'App Service plan',
  supportsLogs: true
}, {
  resourceType: 'microsoft.web/sites',
  displayName: 'App Service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/applicationgateways',
  displayName: 'Application gateway',
  supportsLogs: true
}, {
  resourceType: 'microsoft.insights/components',
  displayName: 'Application Insights',
  supportsLogs: true
}, {
  resourceType: 'microsoft.automation/automationaccounts',
  displayName: 'Automation Account',
  supportsLogs: true
}, {
  resourceType: 'microsoft.insights/autoscalesettings',
  displayName: 'Autoscale Settings',
  supportsLogs: true
}, {
  resourceType: 'microsoft.aadiam/azureadmetrics',
  displayName: 'Azure AD Metrics',
  supportsLogs: true
}, {
  resourceType: 'microsoft.cache/redis',
  displayName: 'Azure Cache for Redis',
  supportsLogs: true
}, {
  resourceType: 'microsoft.documentdb/databaseaccounts',
  displayName: 'Azure Cosmos DB account',
  supportsLogs: true
}, {
  resourceType: 'microsoft.kusto/clusters',
  displayName: 'Azure Data Explorer Cluster',
  supportsLogs: true
}, {
  resourceType: 'microsoft.dbformariadb/servers',
  displayName: 'Azure Database for MariaDB server',
  supportsLogs: true
}, {
  resourceType: 'microsoft.dbformysql/servers',
  displayName: 'Azure Database for MySQL server',
  supportsLogs: true
}, {
  resourceType: 'microsoft.dbforpostgresql/flexibleservers',
  displayName: 'Azure Database for PostgreSQL flexible server',
  supportsLogs: true
}, {
  resourceType: 'microsoft.dbforpostgresql/servergroupsv2',
  displayName: 'Azure Database for PostgreSQL server group',
  supportsLogs: true
}, {
  resourceType: 'microsoft.dbforpostgresql/servers',
  displayName: 'Azure Database for PostgreSQL server',
  supportsLogs: true
}, {
  resourceType: 'microsoft.dbforpostgresql/serversv2',
  displayName: 'Azure Database for PostgreSQL server v2',
  supportsLogs: true
}, {
  resourceType: 'microsoft.resources/subscriptions',
  displayName: 'Subscription',
  supportsLogs: true
}, {
  resourceType: 'microsoft.appplatform/spring',
  displayName: 'Azure Spring Cloud',
  supportsLogs: true
}, {
  resourceType: 'microsoft.databoxedge/databoxedgedevices',
  displayName: 'Azure Stack Edge / Data Box Gateway',
  supportsLogs: true
}, {
  resourceType: 'microsoft.azurestackresourcemonitor/storageaccountmonitor',
  displayName: 'Azure Stack Resource Monitor',
  supportsLogs: true
}, {
  resourceType: 'microsoft.synapse/workspaces',
  displayName: 'Synapse workspace',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/bastionhosts',
  displayName: 'Bastion',
  supportsLogs: true
}, {
  resourceType: 'microsoft.batch/batchaccounts',
  displayName: 'Batch account',
  supportsLogs: true
}, {
  resourceType: 'microsoft.botservice/botservices',
  displayName: 'Bot Service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.netapp/netappaccounts/capacitypools',
  displayName: 'Capacity pool',
  supportsLogs: true
}, {
  resourceType: 'microsoft.classiccompute/domainnames',
  displayName: 'Cloud service (classic)',
  supportsLogs: true
}, {
  resourceType: 'microsoft.vmwarecloudsimple/virtualmachines',
  displayName: 'CloudSimple Virtual Machine',
  supportsLogs: true
}, {
  resourceType: 'microsoft.cognitiveservices/accounts',
  displayName: 'Cognitive Services',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/networkwatchers/connectionmonitors',
  displayName: 'Connection Monitors',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/connections',
  displayName: 'Connection',
  supportsLogs: true
}, {
  resourceType: 'microsoft.containerinstance/containergroups',
  displayName: 'Container instances',
  supportsLogs: true
}, {
  resourceType: 'microsoft.containerregistry/registries',
  displayName: 'Container registry',
  supportsLogs: true
}, {
  resourceType: 'microsoft.insights/qos',
  displayName: 'Custom Metric Usage',
  supportsLogs: true
}, {
  resourceType: 'microsoft.customerinsights/hubs',
  displayName: 'CustomerInsights',
  supportsLogs: true
}, {
  resourceType: 'microsoft.datafactory/datafactories',
  displayName: 'Data factory',
  supportsLogs: true
}, {
  resourceType: 'microsoft.datafactory/factories',
  displayName: 'Data factory (V2)',
  supportsLogs: true
}, {
  resourceType: 'microsoft.datalakeanalytics/accounts',
  displayName: 'Data Lake Analytics',
  supportsLogs: true
}, {
  resourceType: 'microsoft.datalakestore/accounts',
  displayName: 'Data Lake Storage Gen1',
  supportsLogs: true
}, {
  resourceType: 'microsoft.datashare/accounts',
  displayName: 'Data Share',
  supportsLogs: true
}, {
  resourceType: 'microsoft.synapse/workspaces/sqlpools',
  displayName: 'Dedicated SQL pool',
  supportsLogs: true
}, {
  resourceType: 'microsoft.devices/provisioningservices',
  displayName: 'Device Provisioning Service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.compute/disks',
  displayName: 'Disk',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/dnszones',
  displayName: 'DNS zone',
  supportsLogs: true
}, {
  resourceType: 'microsoft.eventgrid/domains',
  displayName: 'Event Grid Domain',
  supportsLogs: true
}, {
  resourceType: 'microsoft.eventgrid/systemtopics',
  displayName: 'Event Grid System Topic',
  supportsLogs: true
}, {
  resourceType: 'microsoft.eventgrid/topics',
  displayName: 'Event Grid Topic',
  supportsLogs: true
}, {
  resourceType: 'microsoft.eventhub/clusters',
  displayName: 'Event Hubs Cluster',
  supportsLogs: true
}, {
  resourceType: 'microsoft.eventhub/namespaces',
  displayName: 'Event Hubs Namespace',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/expressroutecircuits',
  displayName: 'ExpressRoute circuit',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/expressrouteports',
  displayName: 'ExpressRoute Direct',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/expressroutegateways',
  displayName: 'ExpressRoute Gateways',
  supportsLogs: true
}, {
  resourceType: 'microsoft.fabric.admin/fabriclocations',
  displayName: 'Fabric Locations',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/azurefirewalls',
  displayName: 'Firewall',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/frontdoors',
  displayName: 'Front Door',
  supportsLogs: true
}, {
  resourceType: 'microsoft.hdinsight/clusters',
  displayName: 'HDInsight cluster',
  supportsLogs: true
}, {
  resourceType: 'microsoft.storagecache/caches',
  displayName: 'HPC cache',
  supportsLogs: true
}, {
  resourceType: 'microsoft.logic/integrationserviceenvironments',
  displayName: 'Integration Service Environment',
  supportsLogs: true
}, {
  resourceType: 'microsoft.iotcentral/iotapps',
  displayName: 'IoT Central Application',
  supportsLogs: true
}, {
  resourceType: 'microsoft.devices/iothubs',
  displayName: 'IoT Hub',
  supportsLogs: true
}, {
  resourceType: 'microsoft.keyvault/vaults',
  displayName: 'Key vault',
  supportsLogs: true
}, {
  resourceType: 'microsoft.kubernetes/connectedclusters',
  displayName: 'Kubernetes - Azure Arc',
  supportsLogs: true
}, {
  resourceType: 'microsoft.containerservice/managedclusters',
  displayName: 'Kubernetes service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.media/mediaservices/liveevents',
  displayName: 'Live event',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/loadbalancers',
  displayName: 'Load balancer',
  supportsLogs: true
}, {
  resourceType: 'microsoft.operationalinsights/workspaces',
  displayName: 'Log Analytics workspace',
  supportsLogs: true
}, {
  resourceType: 'microsoft.logic/workflows',
  displayName: 'Logic app',
  supportsLogs: true
}, {
  resourceType: 'microsoft.machinelearningservices/workspaces',
  displayName: 'Machine learning',
  supportsLogs: true
}, {
  resourceType: 'microsoft.media/mediaservices',
  displayName: 'Media service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/natgateways',
  displayName: 'NAT gateway',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/networkinterfaces',
  displayName: 'Network interface',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/networkvirtualappliances',
  displayName: 'Network Virtual Appliances',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/networkwatchers',
  displayName: 'Network Watcher',
  supportsLogs: true
}, {
  resourceType: 'microsoft.notificationhubs/namespaces/notificationhubs',
  displayName: 'Notification Hub',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/p2svpngateways',
  displayName: 'P2S VPN Gateways',
  supportsLogs: true
}, {
  resourceType: 'microsoft.peering/peeringservices',
  displayName: 'Peering Service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.powerbidedicated/capacities',
  displayName: 'Power BI Embedded',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/privateendpoints',
  displayName: 'Private endpoint',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/privatelinkservices',
  displayName: 'Private link service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/publicipaddresses',
  displayName: 'Public IP address',
  supportsLogs: true
}, {
  resourceType: 'microsoft.cache/redisenterprise',
  displayName: 'Redis Enterprise',
  supportsLogs: true
}, {
  resourceType: 'microsoft.relay/namespaces',
  displayName: 'Relay',
  supportsLogs: true
}, {
  resourceType: 'microsoft.synapse/workspaces/scopepools',
  displayName: 'Scope pool',
  supportsLogs: true
}, {
  resourceType: 'microsoft.search/searchservices',
  displayName: 'Search service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.servicebus/namespaces',
  displayName: 'Service Bus Namespace',
  supportsLogs: true
}, {
  resourceType: 'microsoft.signalrservice/signalr',
  displayName: 'SignalR',
  supportsLogs: true
}, {
  resourceType: 'microsoft.operationsmanagement/solutions',
  displayName: 'Solution',
  supportsLogs: true
}, {
  resourceType: 'microsoft.sql/servers/databases',
  displayName: 'SQL database',
  supportsLogs: true
}, {
  resourceType: 'microsoft.sql/servers/elasticpools',
  displayName: 'SQL elastic pool',
  supportsLogs: true
}, {
  resourceType: 'microsoft.sql/managedinstances',
  displayName: 'SQL managed instance',
  supportsLogs: true
}, {
  resourceType: 'microsoft.storage/storageaccounts',
  displayName: 'Storage account',
  supportsLogs: true
}, {
  resourceType: 'microsoft.classicstorage/storageaccounts',
  displayName: 'Storage account (classic)',
  supportsLogs: true
}, {
  resourceType: 'microsoft.storagesync/storagesyncservices',
  displayName: 'Storage Sync Service',
  supportsLogs: true
}, {
  resourceType: 'microsoft.streamanalytics/streamingjobs',
  displayName: 'Stream Analytics job',
  supportsLogs: true
}, {
  resourceType: 'microsoft.media/mediaservices/streamingendpoints',
  displayName: 'Streaming Endpoint',
  supportsLogs: true
}, {
  resourceType: 'microsoft.timeseriesinsights/environments',
  displayName: 'Time Series Insights environment',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/trafficmanagerprofiles',
  displayName: 'Traffic Manager profile',
  supportsLogs: true
}, {
  resourceType: 'microsoft.compute/virtualmachinescalesets',
  displayName: 'Virtual machine scale set',
  supportsLogs: true
}, {
  resourceType: 'microsoft.compute/virtualmachines',
  displayName: 'Virtual machine',
  supportsLogs: true
}, {
  resourceType: 'microsoft.classiccompute/virtualmachines',
  displayName: 'Virtual machine (classic)',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/virtualnetworkgateways',
  displayName: 'Virtual network gateway',
  supportsLogs: true
}, {
  resourceType: 'microsoft.netapp/netappaccounts/capacitypools/volumes',
  displayName: 'Volume',
  supportsLogs: true
}, {
  resourceType: 'microsoft.network/vpngateways',
  displayName: 'VPN Gateways',
  supportsLogs: true
}, {
  resourceType: 'microsoft.cdn/cdnwebapplicationfirewallpolicies',
  displayName: 'Content Delivery Network WAF policy',
  supportsLogs: true
}, {
  resourceType: 'microsoft.web/hostingenvironments/workerpools',
  displayName: 'WorkerPools',
  supportsLogs: true
}, {
  resourceType: 'microsoft.resources/subscriptions/resourcegroups',
  displayName: 'Resource Group',
  supportsLogs: true
}];
const logsSupportedResourceTypesKusto = resourceTypeMetadata.filter(v => v.supportsLogs).map(v => `"${v.resourceType}"`).join(','); // Object, keyed by resourceType ID

const resourceTypeDisplayNames = resourceTypeMetadata.reduce((acc, resourceType) => Object.assign({}, acc, {
  [resourceType.resourceType]: resourceType.displayName
}), {});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azureMetadata/index.ts


;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azure_monitor/supported_namespaces.ts
function supported_namespaces_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class SupportedNamespaces {
  constructor(cloudName) {
    this.cloudName = cloudName;

    supported_namespaces_defineProperty(this, "supportedMetricNamespaces", {
      azuremonitor: ['Microsoft.AnalysisServices/servers', 'Microsoft.ApiManagement/service', 'Microsoft.AppConfiguration/configurationStores', 'Microsoft.Automation/automationAccounts', 'Microsoft.Batch/batchAccounts', 'Microsoft.Cache/redis', 'Microsoft.Cdn/cdnwebapplicationfirewallpolicies', 'Microsoft.Cdn/profiles', 'Microsoft.ClassicCompute/virtualMachines', 'Microsoft.ClassicCompute/domainNames', 'Microsoft.CognitiveServices/accounts', 'Microsoft.Compute/virtualMachines', 'Microsoft.Compute/virtualMachineScaleSets', 'Microsoft.ContainerInstance/containerGroups', 'Microsoft.ContainerRegistry/registries', 'Microsoft.ContainerService/managedClusters', 'Microsoft.CustomerInsights/hubs', 'Microsoft.DataBoxEdge/dataBoxEdgeDevices', 'Microsoft.DataFactory/datafactories', 'Microsoft.DataFactory/factories', 'Microsoft.DataLakeAnalytics/accounts', 'Microsoft.DataLakeStore/accounts', 'Microsoft.DBforMariaDB/servers', 'Microsoft.DBforMySQL/servers', 'Microsoft.DBforMySQL/flexibleServers', 'Microsoft.DBforPostgreSQL/servers', 'Microsoft.DBforPostgreSQL/serversv2', 'Microsoft.DBforPostgreSQL/serverGroups', 'Microsoft.DBforPostgreSQL/serverGroupsv2', 'Microsoft.DBforPostgreSQL/flexibleServers', 'Microsoft.Devices/IotHubs', 'Microsoft.Devices/provisioningServices', 'Microsoft.DocumentDB/databaseAccounts', 'Microsoft.EventGrid/topics', 'Microsoft.EventGrid/eventSubscriptions', 'Microsoft.EventGrid/extensionTopics', 'Microsoft.EventHub/namespaces', 'Microsoft.EventHub/clusters', 'Microsoft.HDInsight/clusters', 'Microsoft.Insights/AutoscaleSettings', 'Microsoft.Insights/components', 'Microsoft.KeyVault/vaults', 'Microsoft.Kusto/clusters', 'Microsoft.LocationBasedServices/accounts', 'Microsoft.Logic/workflows', 'Microsoft.Logic/integrationServiceEnvironments', 'Microsoft.NetApp/netAppAccounts/capacityPools', 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes', 'Microsoft.Network/networkInterfaces', 'Microsoft.Network/loadBalancers', 'Microsoft.Network/dnsZones', 'Microsoft.Network/publicIPAddresses', 'Microsoft.Network/azureFirewalls', 'Microsoft.Network/applicationGateways', 'Microsoft.Network/virtualNetworkGateways', 'Microsoft.Network/expressRouteCircuits', 'Microsoft.Network/expressRouteCircuits/Peerings', 'Microsoft.Network/connections', 'Microsoft.Network/trafficManagerProfiles', 'Microsoft.Network/networkWatchers/connectionMonitors', 'Microsoft.Network/frontdoors', 'Microsoft.Network/natGateways', 'Microsoft.Network/vpngateways', 'Microsoft.Network/virtualNetworkGateways', 'Microsoft.NotificationHubs/namespaces/notificationHubs', 'Microsoft.OperationalInsights/workspaces', 'Microsoft.PowerBIDedicated/capacities', 'Microsoft.Relay/namespaces', 'Microsoft.Search/searchServices', 'Microsoft.ServiceBus/namespaces', 'Microsoft.SignalRService/SignalR', 'Microsoft.Sql/servers/databases', 'Microsoft.Sql/servers/elasticPools', 'Microsoft.Sql/managedInstances', 'Microsoft.Storage/storageAccounts', 'Microsoft.Storage/storageAccounts/blobServices', 'Microsoft.Storage/storageAccounts/fileServices', 'Microsoft.Storage/storageAccounts/queueServices', 'Microsoft.Storage/storageAccounts/tableServices', 'Microsoft.StorageSync/storageSyncServices', 'Microsoft.StorageSync/storageSyncServices/syncGroups', 'Microsoft.StorageSync/storageSyncServices/syncGroups/serverEndpoints', 'Microsoft.StorageSync/storageSyncServices/registeredServers', 'Microsoft.StreamAnalytics/streamingJobs', 'Microsoft.Web/serverfarms', 'Microsoft.Web/sites', 'Microsoft.Web/sites/slots', 'Microsoft.Web/hostingEnvironments/multiRolePools', 'Microsoft.Web/hostingEnvironments/workerPools'],
      govazuremonitor: ['Microsoft.AnalysisServices/servers', 'Microsoft.ApiManagement/service', 'Microsoft.Batch/batchAccounts', 'Microsoft.Cache/redis', 'Microsoft.Cdn/cdnwebapplicationfirewallpolicies', 'Microsoft.Cdn/profiles', 'Microsoft.ClassicCompute/virtualMachines', 'Microsoft.ClassicCompute/domainNames', 'Microsoft.CognitiveServices/accounts', 'Microsoft.Compute/virtualMachines', 'Microsoft.Compute/virtualMachineScaleSets', 'Microsoft.ContainerRegistry/registries', 'Microsoft.DBforMySQL/servers', 'Microsoft.DBforPostgreSQL/servers', 'Microsoft.DBforPostgreSQL/serversv2', 'Microsoft.Devices/IotHubs', 'Microsoft.Devices/provisioningServices', 'Microsoft.EventGrid/topics', 'Microsoft.EventGrid/eventSubscriptions', 'Microsoft.EventGrid/extensionTopics', 'Microsoft.EventHub/namespaces', 'Microsoft.EventHub/clusters', 'Microsoft.Insights/AutoscaleSettings', 'Microsoft.Insights/components', 'Microsoft.KeyVault/vaults', 'Microsoft.Logic/workflows', 'Microsoft.Network/networkInterfaces', 'Microsoft.Network/loadBalancers', 'Microsoft.Network/dnsZones', 'Microsoft.Network/publicIPAddresses', 'Microsoft.Network/azureFirewalls', 'Microsoft.Network/applicationGateways', 'Microsoft.Network/virtualNetworkGateways', 'Microsoft.Network/expressRouteCircuits', 'Microsoft.Network/expressRouteCircuits/Peerings', 'Microsoft.Network/connections', 'Microsoft.Network/trafficManagerProfiles', 'Microsoft.Network/networkWatchers/connectionMonitors', 'Microsoft.Network/frontdoors', 'Microsoft.NotificationHubs/namespaces/notificationHubs', 'Microsoft.OperationalInsights/workspaces', 'Microsoft.PowerBIDedicated/capacities', 'Microsoft.Relay/namespaces', 'Microsoft.ServiceBus/namespaces', 'Microsoft.Sql/servers/databases', 'Microsoft.Sql/servers/elasticPools', 'Microsoft.Sql/managedInstances', 'Microsoft.Storage/storageAccounts', 'Microsoft.Storage/storageAccounts/blobServices', 'Microsoft.Storage/storageAccounts/fileServices', 'Microsoft.Storage/storageAccounts/queueServices', 'Microsoft.Storage/storageAccounts/tableServices', 'Microsoft.Web/serverfarms', 'Microsoft.Web/sites', 'Microsoft.Web/sites/slots', 'Microsoft.Web/hostingEnvironments/multiRolePools', 'Microsoft.Web/hostingEnvironments/workerPools'],
      germanyazuremonitor: ['Microsoft.AnalysisServices/servers', 'Microsoft.Batch/batchAccounts', 'Microsoft.Cache/redis', 'Microsoft.Cdn/cdnwebapplicationfirewallpolicies', 'Microsoft.Cdn/profiles', 'Microsoft.ClassicCompute/virtualMachines', 'Microsoft.ClassicCompute/domainNames', 'Microsoft.Compute/virtualMachines', 'Microsoft.Compute/virtualMachineScaleSets', 'Microsoft.DBforMySQL/servers', 'Microsoft.DBforPostgreSQL/servers', 'Microsoft.DBforPostgreSQL/serversv2', 'Microsoft.Devices/IotHubs', 'Microsoft.Devices/provisioningServices', 'Microsoft.EventHub/namespaces', 'Microsoft.EventHub/clusters', 'Microsoft.Insights/AutoscaleSettings', 'Microsoft.Insights/components', 'Microsoft.KeyVault/vaults', 'Microsoft.Network/networkInterfaces', 'Microsoft.Network/loadBalancers', 'Microsoft.Network/dnsZones', 'Microsoft.Network/publicIPAddresses', 'Microsoft.Network/azureFirewalls', 'Microsoft.Network/applicationGateways', 'Microsoft.Network/virtualNetworkGateways', 'Microsoft.Network/expressRouteCircuits', 'Microsoft.Network/expressRouteCircuits/Peerings', 'Microsoft.Network/connections', 'Microsoft.Network/trafficManagerProfiles', 'Microsoft.Network/networkWatchers/connectionMonitors', 'Microsoft.Network/frontdoors', 'Microsoft.NotificationHubs/namespaces/notificationHubs', 'Microsoft.OperationalInsights/workspaces', 'Microsoft.PowerBIDedicated/capacities', 'Microsoft.Relay/namespaces', 'Microsoft.ServiceBus/namespaces', 'Microsoft.Sql/servers/databases', 'Microsoft.Sql/servers/elasticPools', 'Microsoft.Sql/managedInstances', 'Microsoft.Storage/storageAccounts', 'Microsoft.Storage/storageAccounts/blobServices', 'Microsoft.Storage/storageAccounts/fileServices', 'Microsoft.Storage/storageAccounts/queueServices', 'Microsoft.Storage/storageAccounts/tableServices', 'Microsoft.StreamAnalytics/streamingJobs', 'Microsoft.Web/serverfarms', 'Microsoft.Web/sites', 'Microsoft.Web/sites/slots', 'Microsoft.Web/hostingEnvironments/multiRolePools', 'Microsoft.Web/hostingEnvironments/workerPools'],
      chinaazuremonitor: ['Microsoft.AnalysisServices/servers', 'Microsoft.Batch/batchAccounts', 'Microsoft.Cache/redis', 'Microsoft.Cdn/cdnwebapplicationfirewallpolicies', 'Microsoft.Cdn/profiles', 'Microsoft.ClassicCompute/virtualMachines', 'Microsoft.ClassicCompute/domainNames', 'Microsoft.CognitiveServices/accounts', 'Microsoft.Compute/virtualMachines', 'Microsoft.Compute/virtualMachineScaleSets', 'Microsoft.ContainerRegistry/registries', 'Microsoft.DBforMySQL/servers', 'Microsoft.DBforPostgreSQL/servers', 'Microsoft.DBforPostgreSQL/serversv2', 'Microsoft.Devices/IotHubs', 'Microsoft.Devices/provisioningServices', 'Microsoft.EventHub/namespaces', 'Microsoft.Insights/AutoscaleSettings', 'Microsoft.Insights/components', 'Microsoft.KeyVault/vaults', 'Microsoft.Logic/workflows', 'Microsoft.Network/networkInterfaces', 'Microsoft.Network/loadBalancers', 'Microsoft.Network/dnsZones', 'Microsoft.Network/publicIPAddresses', 'Microsoft.Network/azureFirewalls', 'Microsoft.Network/applicationGateways', 'Microsoft.Network/virtualNetworkGateways', 'Microsoft.Network/expressRouteCircuits', 'Microsoft.Network/expressRouteCircuits/Peerings', 'Microsoft.Network/connections', 'Microsoft.Network/trafficManagerProfiles', 'Microsoft.Network/networkWatchers/connectionMonitors', 'Microsoft.Network/frontdoors', 'Microsoft.NotificationHubs/namespaces/notificationHubs', 'Microsoft.PowerBIDedicated/capacities', 'Microsoft.Relay/namespaces', 'Microsoft.ServiceBus/namespaces', 'Microsoft.Sql/servers/databases', 'Microsoft.Sql/servers/elasticPools', 'Microsoft.Sql/managedInstances', 'Microsoft.Storage/storageAccounts', 'Microsoft.Storage/storageAccounts/blobServices', 'Microsoft.Storage/storageAccounts/fileServices', 'Microsoft.Storage/storageAccounts/queueServices', 'Microsoft.Storage/storageAccounts/tableServices', 'Microsoft.StreamAnalytics/streamingJobs', 'Microsoft.Web/serverfarms', 'Microsoft.Web/sites', 'Microsoft.Web/sites/slots', 'Microsoft.Web/hostingEnvironments/multiRolePools', 'Microsoft.Web/hostingEnvironments/workerPools']
    });

    this.cloudName = cloudName;
  }

  get() {
    return this.supportedMetricNamespaces[this.cloudName];
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azure_monitor/azure_monitor_datasource.ts
function azure_monitor_datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const defaultDropdownValue = 'select';

function hasValue(item) {
  return !!(item && item !== defaultDropdownValue);
}

class AzureMonitorDatasource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;

    azure_monitor_datasource_defineProperty(this, "apiVersion", '2018-01-01');

    azure_monitor_datasource_defineProperty(this, "apiPreviewVersion", '2017-12-01-preview');

    azure_monitor_datasource_defineProperty(this, "listByResourceGroupApiVersion", '2021-04-01');

    azure_monitor_datasource_defineProperty(this, "defaultSubscriptionId", void 0);

    azure_monitor_datasource_defineProperty(this, "resourcePath", void 0);

    azure_monitor_datasource_defineProperty(this, "azurePortalUrl", void 0);

    azure_monitor_datasource_defineProperty(this, "supportedMetricNamespaces", []);

    azure_monitor_datasource_defineProperty(this, "timeSrv", void 0);

    this.instanceSettings = instanceSettings;
    this.timeSrv = (0,TimeSrv/* getTimeSrv */.$t)();
    this.defaultSubscriptionId = instanceSettings.jsonData.subscriptionId;
    const cloud = getAzureCloud(instanceSettings);
    this.resourcePath = routeNames.azureMonitor;
    this.supportedMetricNamespaces = new SupportedNamespaces(cloud).get();
    this.azurePortalUrl = getAzurePortalUrl(cloud);
  }

  isConfigured() {
    // If validation didn't return any error then the data source is properly configured
    return !this.validateDatasource();
  }

  filterQuery(item) {
    var _item$azureMonitor, _item$azureMonitor2, _item$azureMonitor3, _item$azureMonitor4, _item$azureMonitor5, _item$azureMonitor6;

    const hasResourceUri = !!(item !== null && item !== void 0 && (_item$azureMonitor = item.azureMonitor) !== null && _item$azureMonitor !== void 0 && _item$azureMonitor.resourceUri);
    const hasLegacyQuery = hasValue(item === null || item === void 0 ? void 0 : (_item$azureMonitor2 = item.azureMonitor) === null || _item$azureMonitor2 === void 0 ? void 0 : _item$azureMonitor2.resourceGroup) && hasValue(item === null || item === void 0 ? void 0 : (_item$azureMonitor3 = item.azureMonitor) === null || _item$azureMonitor3 === void 0 ? void 0 : _item$azureMonitor3.resourceName) && hasValue(item === null || item === void 0 ? void 0 : (_item$azureMonitor4 = item.azureMonitor) === null || _item$azureMonitor4 === void 0 ? void 0 : _item$azureMonitor4.metricDefinition);
    return !!(item.hide !== true && (hasResourceUri || hasLegacyQuery) && hasValue(item === null || item === void 0 ? void 0 : (_item$azureMonitor5 = item.azureMonitor) === null || _item$azureMonitor5 === void 0 ? void 0 : _item$azureMonitor5.metricName) && hasValue(item === null || item === void 0 ? void 0 : (_item$azureMonitor6 = item.azureMonitor) === null || _item$azureMonitor6 === void 0 ? void 0 : _item$azureMonitor6.aggregation));
  }

  applyTemplateVariables(target, scopedVars) {
    var _item$dimensionFilter;

    const item = target.azureMonitor;

    if (!item) {
      // return target;
      throw new Error('Query is not a valid Azure Monitor Metrics query');
    } // fix for timeGrainUnit which is a deprecated/removed field name


    if (item.timeGrain && item.timeGrainUnit && item.timeGrain !== 'auto') {
      item.timeGrain = TimeGrainConverter.createISO8601Duration(item.timeGrain, item.timeGrainUnit);
    }

    const templateSrv = (0,grafana_runtime_src.getTemplateSrv)();
    const resourceUri = templateSrv.replace(item.resourceUri, scopedVars);
    const subscriptionId = templateSrv.replace(target.subscription || this.defaultSubscriptionId, scopedVars);
    const resourceGroup = templateSrv.replace(item.resourceGroup, scopedVars);
    const resourceName = templateSrv.replace(item.resourceName, scopedVars);
    const metricNamespace = templateSrv.replace(item.metricNamespace, scopedVars);
    const metricDefinition = templateSrv.replace(item.metricDefinition, scopedVars);
    const timeGrain = templateSrv.replace((item.timeGrain || '').toString(), scopedVars);
    const aggregation = templateSrv.replace(item.aggregation, scopedVars);
    const top = templateSrv.replace(item.top || '', scopedVars);
    const dimensionFilters = ((_item$dimensionFilter = item.dimensionFilters) !== null && _item$dimensionFilter !== void 0 ? _item$dimensionFilter : []).filter(f => f.dimension && f.dimension !== 'None').map(f => {
      var _f$filters;

      const filters = (_f$filters = f.filters) === null || _f$filters === void 0 ? void 0 : _f$filters.map(filter => templateSrv.replace(filter !== null && filter !== void 0 ? filter : '', scopedVars));
      return {
        dimension: templateSrv.replace(f.dimension, scopedVars),
        operator: f.operator || 'eq',
        filters: filters || []
      };
    });
    return {
      refId: target.refId,
      subscription: subscriptionId,
      queryType: AzureQueryType.AzureMonitor,
      azureMonitor: {
        resourceUri,
        resourceGroup,
        resourceName,
        metricDefinition,
        timeGrain,
        allowedTimeGrainsMs: item.allowedTimeGrainsMs,
        metricName: templateSrv.replace(item.metricName, scopedVars),
        metricNamespace: metricNamespace && metricNamespace !== defaultDropdownValue ? metricNamespace : metricDefinition,
        aggregation: aggregation,
        dimensionFilters,
        top: top || '10',
        alias: item.alias
      }
    };
  }

  async getSubscriptions() {
    if (!this.isConfigured()) {
      return [];
    }

    return this.getResource(`${this.resourcePath}/subscriptions?api-version=2019-03-01`).then(result => {
      return ResponseParser.parseSubscriptions(result);
    });
  }

  getResourceGroups(subscriptionId) {
    return this.getResource(`${this.resourcePath}/subscriptions/${subscriptionId}/resourceGroups?api-version=${this.listByResourceGroupApiVersion}`).then(result => {
      return ResponseParser.parseResponseValues(result, 'name', 'name');
    });
  }

  getMetricDefinitions(subscriptionId, resourceGroup) {
    return this.getResource(`${this.resourcePath}/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/resources?api-version=${this.listByResourceGroupApiVersion}`).then(result => {
      return ResponseParser.parseResponseValues(result, 'type', 'type');
    }).then(result => {
      return (0,lodash.filter)(result, t => {
        for (let i = 0; i < this.supportedMetricNamespaces.length; i++) {
          if (t.value.toLowerCase() === this.supportedMetricNamespaces[i].toLowerCase()) {
            return true;
          }
        }

        return false;
      });
    }).then(result => {
      let shouldHardcodeBlobStorage = false;

      for (let i = 0; i < result.length; i++) {
        if (result[i].value === 'Microsoft.Storage/storageAccounts') {
          shouldHardcodeBlobStorage = true;
          break;
        }
      }

      if (shouldHardcodeBlobStorage) {
        result.push({
          text: 'Microsoft.Storage/storageAccounts/blobServices',
          value: 'Microsoft.Storage/storageAccounts/blobServices'
        });
        result.push({
          text: 'Microsoft.Storage/storageAccounts/fileServices',
          value: 'Microsoft.Storage/storageAccounts/fileServices'
        });
        result.push({
          text: 'Microsoft.Storage/storageAccounts/tableServices',
          value: 'Microsoft.Storage/storageAccounts/tableServices'
        });
        result.push({
          text: 'Microsoft.Storage/storageAccounts/queueServices',
          value: 'Microsoft.Storage/storageAccounts/queueServices'
        });
      }

      return result.map(v => ({
        value: v.value,
        text: resourceTypeDisplayNames[v.value.toLowerCase()] || v.value
      }));
    });
  }

  getResourceNames(subscriptionId, resourceGroup, metricDefinition, skipToken) {
    let url = `${this.resourcePath}/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup}/resources?` + `$filter=resourceType eq '${metricDefinition}'&` + `api-version=${this.listByResourceGroupApiVersion}`;

    if (skipToken) {
      url += `&$skiptoken=${skipToken}`;
    }

    return this.getResource(url).then(async result => {
      let list = [];

      if ((0,lodash.startsWith)(metricDefinition, 'Microsoft.Storage/storageAccounts/')) {
        list = ResponseParser.parseResourceNames(result, 'Microsoft.Storage/storageAccounts');

        for (let i = 0; i < list.length; i++) {
          list[i].text += '/default';
          list[i].value += '/default';
        }
      } else {
        list = ResponseParser.parseResourceNames(result, metricDefinition);
      }

      if (result.nextLink) {
        // If there is a nextLink, we should request more pages
        const nextURL = new URL(result.nextLink);
        const nextToken = nextURL.searchParams.get('$skiptoken');

        if (!nextToken) {
          throw Error('unable to request the next page of resources');
        }

        const nextPage = await this.getResourceNames(subscriptionId, resourceGroup, metricDefinition, nextToken);
        list = list.concat(nextPage);
      }

      return list;
    });
  }

  getMetricNamespaces(query) {
    const url = UrlBuilder.buildAzureMonitorGetMetricNamespacesUrl(this.resourcePath, this.apiPreviewVersion, this.replaceTemplateVariables(query));
    return this.getResource(url).then(result => {
      return ResponseParser.parseResponseValues(result, 'name', 'properties.metricNamespaceName');
    });
  }

  getMetricNames(query) {
    const url = UrlBuilder.buildAzureMonitorGetMetricNamesUrl(this.resourcePath, this.apiVersion, this.replaceTemplateVariables(query));
    return this.getResource(url).then(result => {
      return ResponseParser.parseResponseValues(result, 'name.localizedValue', 'name.value');
    });
  }

  getMetricMetadata(query) {
    const {
      metricName
    } = query;
    const url = UrlBuilder.buildAzureMonitorGetMetricNamesUrl(this.resourcePath, this.apiVersion, this.replaceTemplateVariables(query));
    return this.getResource(url).then(result => {
      return ResponseParser.parseMetadata(result, metricName);
    });
  }

  async testDatasource() {
    const validationError = this.validateDatasource();

    if (validationError) {
      return Promise.resolve(validationError);
    }

    try {
      const url = `${this.resourcePath}/subscriptions?api-version=2019-03-01`;
      return await this.getResource(url).then(response => {
        return {
          status: 'success',
          message: 'Successfully queried the Azure Monitor service.',
          title: 'Success'
        };
      });
    } catch (e) {
      let message = 'Azure Monitor: ';
      message += e.statusText ? e.statusText + ': ' : '';

      if (e.data && e.data.error && e.data.error.code) {
        message += e.data.error.code + '. ' + e.data.error.message;
      } else if (e.data && e.data.error) {
        message += e.data.error;
      } else if (e.data) {
        message += e.data;
      } else {
        message += 'Cannot connect to Azure Monitor REST API.';
      }

      return {
        status: 'error',
        message: message
      };
    }
  }

  validateDatasource() {
    const authType = getAuthType(this.instanceSettings);

    if (authType === 'clientsecret') {
      if (!this.isValidConfigField(this.instanceSettings.jsonData.tenantId)) {
        return {
          status: 'error',
          message: 'The Tenant Id field is required.'
        };
      }

      if (!this.isValidConfigField(this.instanceSettings.jsonData.clientId)) {
        return {
          status: 'error',
          message: 'The Client Id field is required.'
        };
      }
    }

    return undefined;
  }

  isValidConfigField(field) {
    return typeof field === 'string' && field.length > 0;
  }

  replaceTemplateVariables(query) {
    const templateSrv = (0,grafana_runtime_src.getTemplateSrv)();
    const workingQuery = Object.assign({}, query);
    const keys = Object.keys(query);
    keys.forEach(key => {
      workingQuery[key] = templateSrv.replace(workingQuery[key]);
    });
    return workingQuery;
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/azure_resource_graph/azure_resource_graph_datasource.ts
// eslint-disable-next-line lodash/import-scope




class AzureResourceGraphDatasource extends grafana_runtime_src.DataSourceWithBackend {
  filterQuery(item) {
    var _item$azureResourceGr;

    return !!((_item$azureResourceGr = item.azureResourceGraph) !== null && _item$azureResourceGr !== void 0 && _item$azureResourceGr.query);
  }

  applyTemplateVariables(target, scopedVars) {
    const item = target.azureResourceGraph;

    if (!item) {
      return target;
    }

    const templateSrv = (0,grafana_runtime_src.getTemplateSrv)();
    const variableNames = templateSrv.getVariables().map(v => `$${v.name}`);

    const subscriptionVar = lodash_default().find(target.subscriptions, sub => lodash_default().includes(variableNames, sub));

    const interpolatedSubscriptions = templateSrv.replace(subscriptionVar, scopedVars, v => v).split(',').filter(v => v.length > 0);
    const subscriptions = [...interpolatedSubscriptions, ...lodash_default().filter(target.subscriptions, sub => !lodash_default().includes(variableNames, sub))];
    const query = templateSrv.replace(item.query, scopedVars, interpolateVariable);
    return {
      refId: target.refId,
      queryType: AzureQueryType.AzureResourceGraph,
      subscriptions,
      azureResourceGraph: {
        resultFormat: 'table',
        query
      }
    };
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/resourcePicker/resourcePickerData.ts
function resourcePickerData_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const RESOURCE_GRAPH_URL = '/providers/Microsoft.ResourceGraph/resources?api-version=2021-03-01';
class ResourcePickerData extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    super(instanceSettings);

    resourcePickerData_defineProperty(this, "resourcePath", void 0);

    resourcePickerData_defineProperty(this, "supportedMetricNamespaces", void 0);

    resourcePickerData_defineProperty(this, "resultLimit", 200);

    resourcePickerData_defineProperty(this, "search", async (searchPhrase, searchType) => {
      const searchQuery = {
        metrics: `
        resources
        | where id contains "${searchPhrase}"
        | where type in (${this.supportedMetricNamespaces.map(ns => `"${ns.toLowerCase()}"`).join(',')})
        | order by tolower(name) asc
        | limit ${this.resultLimit}
      `,
        logs: `
        resources
        | union resourcecontainers 
        | where id contains "${searchPhrase}"
        | where type in (${logsSupportedResourceTypesKusto})
        | order by tolower(name) asc
        | limit ${this.resultLimit}
      `
      };
      const {
        data: response
      } = await this.makeResourceGraphRequest(searchQuery[searchType]);
      return response.map(item => {
        const parsedUri = parseResourceURI(item.id);

        if (!parsedUri || !(parsedUri.resource || parsedUri.resourceGroup || parsedUri.subscriptionID)) {
          throw new Error('unable to fetch resource details');
        }

        let id = parsedUri.subscriptionID;
        let type = ResourceRowType.Subscription;

        if (parsedUri.resource) {
          id = parsedUri.resource;
          type = ResourceRowType.Resource;
        } else if (parsedUri.resourceGroup) {
          id = parsedUri.resourceGroup;
          type = ResourceRowType.ResourceGroup;
        }

        return {
          name: item.name,
          id,
          uri: item.id,
          resourceGroupName: item.resourceGroup,
          type,
          typeLabel: resourceTypeDisplayNames[item.type] || item.type,
          location: locationDisplayNames[item.location] || item.location
        };
      });
    });

    this.resourcePath = `${routeNames.resourceGraph}`;
    const cloud = getAzureCloud(instanceSettings);
    this.supportedMetricNamespaces = new SupportedNamespaces(cloud).get();
  }

  async fetchInitialRows(currentSelection) {
    const subscriptions = await this.getSubscriptions();

    if (!currentSelection) {
      return subscriptions;
    }

    let resources = subscriptions;
    const parsedURI = parseResourceURI(currentSelection);

    if (parsedURI) {
      const resourceGroupURI = `/subscriptions/${parsedURI.subscriptionID}/resourceGroups/${parsedURI.resourceGroup}`;

      if (parsedURI.resourceGroup) {
        const resourceGroups = await this.getResourceGroupsBySubscriptionId(parsedURI.subscriptionID);
        resources = addResources(resources, `/subscriptions/${parsedURI.subscriptionID}`, resourceGroups);
      }

      if (parsedURI.resource) {
        const resourcesForResourceGroup = await this.getResourcesForResourceGroup(resourceGroupURI);
        resources = addResources(resources, resourceGroupURI, resourcesForResourceGroup);
      }
    }

    return resources;
  }

  async fetchAndAppendNestedRow(rows, parentRow) {
    const nestedRows = parentRow.type === ResourceRowType.Subscription ? await this.getResourceGroupsBySubscriptionId(parentRow.id) : await this.getResourcesForResourceGroup(parentRow.id);
    return addResources(rows, parentRow.uri, nestedRows);
  }

  // private
  async getSubscriptions() {
    const query = `
    resources
    | join kind=inner (
              ResourceContainers
                | where type == 'microsoft.resources/subscriptions'
                | project subscriptionName=name, subscriptionURI=id, subscriptionId
              ) on subscriptionId
    | summarize count() by subscriptionName, subscriptionURI, subscriptionId
    | order by subscriptionName desc
  `;
    let resources = [];
    let allFetched = false;
    let $skipToken = undefined;

    while (!allFetched) {
      // The response may include several pages
      let options = {};

      if ($skipToken) {
        options = {
          $skipToken
        };
      }

      const resourceResponse = await this.makeResourceGraphRequest(query, 1, options);

      if (!resourceResponse.data.length) {
        throw new Error('No subscriptions were found');
      }

      resources = resources.concat(resourceResponse.data);
      $skipToken = resourceResponse.$skipToken;
      allFetched = !$skipToken;
    }

    return resources.map(subscription => ({
      name: subscription.subscriptionName,
      id: subscription.subscriptionId,
      uri: `/subscriptions/${subscription.subscriptionId}`,
      typeLabel: 'Subscription',
      type: ResourceRowType.Subscription,
      children: []
    }));
  }

  async getResourceGroupsBySubscriptionId(subscriptionId) {
    const query = `
    resources
     | join kind=inner (
       ResourceContainers
       | where type == 'microsoft.resources/subscriptions/resourcegroups'
       | project resourceGroupURI=id, resourceGroupName=name, resourceGroup, subscriptionId
     ) on resourceGroup, subscriptionId

     | where type in (${logsSupportedResourceTypesKusto})
     | where subscriptionId == '${subscriptionId}'
     | summarize count() by resourceGroupName, resourceGroupURI
     | order by resourceGroupURI asc`;
    let resourceGroups = [];
    let allFetched = false;
    let $skipToken = undefined;

    while (!allFetched) {
      // The response may include several pages
      let options = {};

      if ($skipToken) {
        options = {
          $skipToken
        };
      }

      const resourceResponse = await this.makeResourceGraphRequest(query, 1, options);
      resourceGroups = resourceGroups.concat(resourceResponse.data);
      $skipToken = resourceResponse.$skipToken;
      allFetched = !$skipToken;
    }

    return resourceGroups.map(r => {
      const parsedUri = parseResourceURI(r.resourceGroupURI);

      if (!parsedUri || !parsedUri.resourceGroup) {
        throw new Error('unable to fetch resource groups');
      }

      return {
        name: r.resourceGroupName,
        uri: r.resourceGroupURI,
        id: parsedUri.resourceGroup,
        type: ResourceRowType.ResourceGroup,
        typeLabel: 'Resource Group',
        children: []
      };
    });
  }

  async getResourcesForResourceGroup(resourceGroupId) {
    const {
      data: response
    } = await this.makeResourceGraphRequest(`
      resources
      | where id hasprefix "${resourceGroupId}"
      | where type in (${logsSupportedResourceTypesKusto}) and location in (${logsSupportedLocationsKusto})
    `);
    return response.map(item => {
      const parsedUri = parseResourceURI(item.id);

      if (!parsedUri || !parsedUri.resource) {
        throw new Error('unable to fetch resource details');
      }

      return {
        name: item.name,
        id: parsedUri.resource,
        uri: item.id,
        resourceGroupName: item.resourceGroup,
        type: ResourceRowType.Resource,
        typeLabel: resourceTypeDisplayNames[item.type] || item.type,
        location: locationDisplayNames[item.location] || item.location
      };
    });
  } // used to make the select resource button that launches the resource picker show a nicer file path to users


  async getResourceURIDisplayProperties(resourceURI) {
    var _parseResourceURI;

    const {
      subscriptionID,
      resourceGroup,
      resource
    } = (_parseResourceURI = parseResourceURI(resourceURI)) !== null && _parseResourceURI !== void 0 ? _parseResourceURI : {};

    if (!subscriptionID) {
      throw new Error('Invalid resource URI passed');
    } // resourceGroupURI and resourceURI could be invalid values, but that's okay because the join
    // will just silently fail as expected


    const subscriptionURI = `/subscriptions/${subscriptionID}`;
    const resourceGroupURI = `${subscriptionURI}/resourceGroups/${resourceGroup}`;
    const query = `
    resourcecontainers
    | where type == "microsoft.resources/subscriptions"
    | where id =~ "${subscriptionURI}"
    | project subscriptionName=name, subscriptionId

    | join kind=leftouter (
      resourcecontainers            
            | where type == "microsoft.resources/subscriptions/resourcegroups"
            | where id =~ "${resourceGroupURI}"
            | project resourceGroupName=name, resourceGroup, subscriptionId
        ) on subscriptionId

        | join kind=leftouter (
          resources
            | where id =~ "${resourceURI}"
            | project resourceName=name, subscriptionId
        ) on subscriptionId

        | project subscriptionName, resourceGroupName, resourceName
    `;
    const {
      data: response
    } = await this.makeResourceGraphRequest(query);

    if (!response.length) {
      throw new Error('unable to fetch resource details');
    }

    const {
      subscriptionName,
      resourceGroupName,
      resourceName
    } = response[0]; // if the name is undefined it could be because the id is undefined or because we are using a template variable.
    // Either way we can use it as a fallback. We don't really want to interpolate these variables because we want
    // to show the user when they are using template variables `$sub/$rg/$resource`

    return {
      subscriptionName: subscriptionName || subscriptionID,
      resourceGroupName: resourceGroupName || resourceGroup,
      resourceName: resourceName || resource
    };
  }

  async getResourceURIFromWorkspace(workspace) {
    const {
      data: response
    } = await this.makeResourceGraphRequest(`
      resources
      | where properties['customerId'] == "${workspace}"
      | project id
    `);

    if (!response.length) {
      throw new Error('unable to find resource for workspace ' + workspace);
    }

    return response[0].id;
  }

  async makeResourceGraphRequest(query) {
    let maxRetries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let reqOptions = arguments.length > 2 ? arguments[2] : undefined;

    try {
      return await this.postResource(this.resourcePath + RESOURCE_GRAPH_URL, {
        query: query,
        options: Object.assign({
          resultFormat: 'objectArray'
        }, reqOptions)
      });
    } catch (error) {
      if (maxRetries > 0) {
        return this.makeResourceGraphRequest(query, maxRetries - 1);
      }

      throw error;
    }
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/utils/migrateAnnotation.ts
 // The old Angular annotations editor put some properties (rawQuery, workspace, subscription)
// on the root annotation object, rather than down in the 'targets' query value
// This migration moves them to a Log Analytics query compatible with the React query editor
// The old Angular annotations editor did not support any other query types.

function migrateAnnotation(annotation) {
  var _annotation$target, _annotation$target$az, _annotation$target2, _annotation$target$re, _annotation$target3;

  const oldQuery = typeof annotation.rawQuery === 'string' ? annotation.rawQuery : null;
  const oldWorkspace = typeof annotation.workspace === 'string' ? annotation.workspace : null;

  if (!(oldQuery && oldWorkspace && !((_annotation$target = annotation.target) !== null && _annotation$target !== void 0 && (_annotation$target$az = _annotation$target.azureLogAnalytics) !== null && _annotation$target$az !== void 0 && _annotation$target$az.query))) {
    return annotation;
  }

  const newQuery = Object.assign({}, (_annotation$target2 = annotation.target) !== null && _annotation$target2 !== void 0 ? _annotation$target2 : {}, {
    refId: (_annotation$target$re = (_annotation$target3 = annotation.target) === null || _annotation$target3 === void 0 ? void 0 : _annotation$target3.refId) !== null && _annotation$target$re !== void 0 ? _annotation$target$re : 'Anno',
    queryType: AzureQueryType.LogAnalytics,
    azureLogAnalytics: {
      query: oldQuery,
      resource: oldWorkspace
    }
  });
  return Object.assign({}, annotation, {
    rawQuery: undefined,
    workspace: undefined,
    subscription: undefined,
    queryType: undefined,
    target: newQuery
  });
}
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/grafanaTemplateVariableFns.ts



/* 
  Grafana Template Variable Functions
  ex: Subscriptions()

  These are helper functions we have created and exposed to users to make the writing of template variables easier. 
  Due to legacy reasons, we still need to parse strings to determine if a query is a Grafana Template Variable Function 
  or if it's a KQL-type query
*/
const grafanaTemplateVariableFnMatches = query => {
  return {
    subscriptions: query.match(/^Subscriptions\(\)/i),
    resourceGroups: query.match(/^ResourceGroups\(\)/i),
    resourceGroupsWithSub: query.match(/^ResourceGroups\(([^\)]+?)(,\s?([^,]+?))?\)/i),
    metricDefinitions: query.match(/^Namespaces\(([^\)]+?)(,\s?([^,]+?))?\)/i),
    metricDefinitionsWithSub: query.match(/^Namespaces\(([^,]+?),\s?([^,]+?)\)/i),
    resourceNames: query.match(/^ResourceNames\(([^,]+?),\s?([^,]+?)\)/i),
    resourceNamesWithSub: query.match(/^ResourceNames\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/i),
    metricNamespace: query.match(/^MetricNamespace\(([^,]+?),\s?([^,]+?),\s?([^,]+?)\)/i),
    metricNamespaceWithSub: query.match(/^metricnamespace\(([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?([^,]+?)\)/i),
    metricNames: query.match(/^MetricNames\(([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?([^,]+?)\)/i),
    metricNamesWithSub: query.match(/^MetricNames\(([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?(.+?)\)/i),
    appInsightsMetricNameQuery: query.match(/^AppInsightsMetricNames\(\)/i),
    appInsightsGroupByQuery: query.match(/^AppInsightsGroupBys\(([^\)]+?)(,\s?([^,]+?))?\)/i),
    workspacesQuery: query.match(/^workspaces\(\)/i),
    workspacesQueryWithSub: query.match(/^workspaces\(["']?([^\)]+?)["']?\)/i)
  };
};

const isGrafanaTemplateVariableFnQuery = query => {
  const matches = grafanaTemplateVariableFnMatches(query);
  return Object.keys(matches).some(key => !!matches[key]);
};

const createGrafanaTemplateVariableQuery = (rawQuery, datasource) => {
  const matchesForQuery = grafanaTemplateVariableFnMatches(rawQuery);
  const defaultSubscriptionId = datasource.azureMonitorDatasource.defaultSubscriptionId;

  const createGrafanaTemplateVariableDetails = () => {
    // deprecated app insights template variables (will most likely remove in grafana 9)
    if (matchesForQuery.appInsightsMetricNameQuery) {
      const queryDetails = {
        rawQuery,
        kind: 'AppInsightsMetricNameQuery'
      };
      return queryDetails;
    }

    if (matchesForQuery.appInsightsGroupByQuery) {
      const queryDetails = {
        kind: 'AppInsightsGroupByQuery',
        rawQuery,
        metricName: matchesForQuery.appInsightsGroupByQuery[1]
      };
      return queryDetails;
    }

    if (matchesForQuery.subscriptions) {
      const queryDetails = {
        kind: 'SubscriptionsQuery',
        rawQuery
      };
      return queryDetails;
    }

    if (matchesForQuery.resourceGroupsWithSub) {
      const queryDetails = {
        kind: 'ResourceGroupsQuery',
        rawQuery,
        subscription: matchesForQuery.resourceGroupsWithSub[1]
      };
      return queryDetails;
    }

    if (matchesForQuery.resourceGroups && defaultSubscriptionId) {
      const queryDetails = {
        kind: 'ResourceGroupsQuery',
        rawQuery,
        subscription: defaultSubscriptionId
      };
      return queryDetails;
    }

    if (matchesForQuery.metricDefinitionsWithSub) {
      const queryDetails = {
        kind: 'MetricDefinitionsQuery',
        rawQuery,
        subscription: matchesForQuery.metricDefinitionsWithSub[1],
        resourceGroup: matchesForQuery.metricDefinitionsWithSub[2]
      };
      return queryDetails;
    }

    if (matchesForQuery.metricDefinitions && defaultSubscriptionId) {
      const queryDetails = {
        kind: 'MetricDefinitionsQuery',
        rawQuery,
        subscription: defaultSubscriptionId,
        resourceGroup: matchesForQuery.metricDefinitions[1]
      };
      return queryDetails;
    }

    if (matchesForQuery.resourceNamesWithSub) {
      const queryDetails = {
        kind: 'ResourceNamesQuery',
        rawQuery,
        subscription: matchesForQuery.resourceNamesWithSub[1],
        resourceGroup: matchesForQuery.resourceNamesWithSub[2],
        metricDefinition: matchesForQuery.resourceNamesWithSub[3]
      };
      return queryDetails;
    }

    if (matchesForQuery.resourceNames && defaultSubscriptionId) {
      const queryDetails = {
        kind: 'ResourceNamesQuery',
        rawQuery,
        subscription: defaultSubscriptionId,
        resourceGroup: matchesForQuery.resourceNames[1],
        metricDefinition: matchesForQuery.resourceNames[2]
      };
      return queryDetails;
    }

    if (matchesForQuery.metricNamespaceWithSub) {
      const queryDetails = {
        kind: 'MetricNamespaceQuery',
        rawQuery,
        subscription: matchesForQuery.metricNamespaceWithSub[1],
        resourceGroup: matchesForQuery.metricNamespaceWithSub[2],
        metricDefinition: matchesForQuery.metricNamespaceWithSub[3],
        resourceName: matchesForQuery.metricNamespaceWithSub[4]
      };
      return queryDetails;
    }

    if (matchesForQuery.metricNamespace && defaultSubscriptionId) {
      const queryDetails = {
        kind: 'MetricNamespaceQuery',
        rawQuery,
        subscription: defaultSubscriptionId,
        resourceGroup: matchesForQuery.metricNamespace[1],
        metricDefinition: matchesForQuery.metricNamespace[2],
        resourceName: matchesForQuery.metricNamespace[3]
      };
      return queryDetails;
    }

    if (matchesForQuery.metricNames && defaultSubscriptionId) {
      if (matchesForQuery.metricNames[3].indexOf(',') === -1) {
        const queryDetails = {
          kind: 'MetricNamesQuery',
          rawQuery,
          subscription: defaultSubscriptionId,
          resourceGroup: matchesForQuery.metricNames[1],
          metricDefinition: matchesForQuery.metricNames[2],
          resourceName: matchesForQuery.metricNames[3],
          metricNamespace: matchesForQuery.metricNames[4]
        };
        return queryDetails;
      }
    }

    if (matchesForQuery.metricNamesWithSub) {
      const queryDetails = {
        kind: 'MetricNamesQuery',
        rawQuery,
        subscription: matchesForQuery.metricNamesWithSub[1],
        resourceGroup: matchesForQuery.metricNamesWithSub[2],
        metricDefinition: matchesForQuery.metricNamesWithSub[3],
        resourceName: matchesForQuery.metricNamesWithSub[4],
        metricNamespace: matchesForQuery.metricNamesWithSub[5]
      };
      return queryDetails;
    }

    if (matchesForQuery.workspacesQueryWithSub) {
      const queryDetails = {
        kind: 'WorkspacesQuery',
        rawQuery,
        subscription: (matchesForQuery.workspacesQueryWithSub[1] || '').trim()
      };
      return queryDetails;
    }

    if (matchesForQuery.workspacesQuery && defaultSubscriptionId) {
      const queryDetails = {
        kind: 'WorkspacesQuery',
        rawQuery,
        subscription: defaultSubscriptionId
      };
      return queryDetails;
    } // fallback


    const queryDetails = {
      kind: 'SubscriptionsQuery',
      rawQuery
    };
    return queryDetails;
  };

  const query = {
    refId: 'A',
    queryType: AzureQueryType.GrafanaTemplateVariableFn,
    grafanaTemplateVariableFn: createGrafanaTemplateVariableDetails(),
    subscription: defaultSubscriptionId
  };
  return query;
};

const createLogAnalyticsTemplateVariableQuery = async (rawQuery, datasource) => {
  const defaultSubscriptionId = datasource.azureMonitorDatasource.defaultSubscriptionId;
  let resource = ''; // if there's an existing query, we try to get the resourcesuri from a deprecated default workspace
  // a note this is very similar logic to what is used in useMigrations but moved out of the react-hook land

  if (rawQuery) {
    const defaultWorkspaceId = datasource.azureLogAnalyticsDatasource.getDeprecatedDefaultWorkSpace();

    if (defaultWorkspaceId) {
      const isWorkspaceGUID = isGUIDish(defaultWorkspaceId);

      if (isWorkspaceGUID) {
        resource = await datasource.resourcePickerData.getResourceURIFromWorkspace(defaultWorkspaceId);
      } else {
        resource = defaultWorkspaceId;
      }
    } else {
      const maybeFirstWorkspace = await datasource.azureLogAnalyticsDatasource.getFirstWorkspace();
      resource = maybeFirstWorkspace || '';
    }
  }

  return {
    refId: 'A',
    queryType: AzureQueryType.LogAnalytics,
    azureLogAnalytics: {
      query: rawQuery,
      resource
    },
    subscription: defaultSubscriptionId
  };
};

const migrateStringQueriesToObjectQueries = async (rawQuery, options) => {
  // no need to migrate already migrated queries
  if (typeof rawQuery !== 'string') {
    return rawQuery;
  }

  return isGrafanaTemplateVariableFnQuery(rawQuery) ? createGrafanaTemplateVariableQuery(rawQuery, options.datasource) : createLogAnalyticsTemplateVariableQuery(rawQuery, options.datasource);
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/components/VariableEditor/VariableEditor.tsx
var VariableEditor_Space;











const AZURE_QUERY_VARIABLE_TYPE_OPTIONS = [{
  label: 'Grafana Query Function',
  value: AzureQueryType.GrafanaTemplateVariableFn
}, {
  label: 'Logs',
  value: AzureQueryType.LogAnalytics
}];

const GrafanaTemplateVariableFnInput = _ref => {
  var _query$grafanaTemplat2;

  let {
    query,
    updateQuery,
    datasource
  } = _ref;
  const [inputVal, setInputVal] = (0,react.useState)('');
  (0,react.useEffect)(() => {
    var _query$grafanaTemplat;

    setInputVal(((_query$grafanaTemplat = query.grafanaTemplateVariableFn) === null || _query$grafanaTemplat === void 0 ? void 0 : _query$grafanaTemplat.rawQuery) || '');
  }, [(_query$grafanaTemplat2 = query.grafanaTemplateVariableFn) === null || _query$grafanaTemplat2 === void 0 ? void 0 : _query$grafanaTemplat2.rawQuery]);
  const onRunQuery = (0,react.useCallback)(newQuery => {
    migrateStringQueriesToObjectQueries(newQuery, {
      datasource
    }).then(updatedQuery => {
      if (updatedQuery.queryType === AzureQueryType.GrafanaTemplateVariableFn) {
        updateQuery(updatedQuery);
      } else {
        updateQuery(Object.assign({}, query, {
          grafanaTemplateVariableFn: {
            kind: 'UnknownQuery',
            rawQuery: newQuery
          }
        }));
      }
    });
  }, [datasource, query, updateQuery]);

  const onChange = event => {
    setInputVal(event.target.value);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
    label: "Grafana template variable function",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
      placeholder: 'type a grafana template variable function, ex: Subscriptions()',
      value: inputVal,
      onChange: onChange,
      onBlur: () => onRunQuery(inputVal)
    })
  });
};

const VariableEditor = props => {
  const defaultQuery = {
    refId: 'A',
    queryType: AzureQueryType.GrafanaTemplateVariableFn
  };
  const [query, setQuery] = (0,react.useState)(defaultQuery);
  (0,react.useEffect)(() => {
    migrateStringQueriesToObjectQueries(props.query, {
      datasource: props.datasource
    }).then(migratedQuery => {
      setQuery(migratedQuery);
    });
  }, [props.query, props.datasource]);

  const onQueryTypeChange = selectableValue => {
    if (selectableValue.value) {
      setQuery(Object.assign({}, query, {
        queryType: selectableValue.value
      }));
    }
  };

  const onLogsQueryChange = queryChange => {
    var _queryChange$azureLog;

    setQuery(queryChange); // only hit backend if there's something to query (prevents error when selecting the resource before pinging a query)

    if ((_queryChange$azureLog = queryChange.azureLogAnalytics) !== null && _queryChange$azureLog !== void 0 && _queryChange$azureLog.query) {
      props.onChange(queryChange);
    }
  };

  const [errorMessage, setError] = useLastError();
  const variableOptionGroup = {
    label: 'Template Variables',
    // TODO: figure out a way to filter out the current variable from the variables list
    // options: props.datasource.getVariables().map((v) => ({ label: v, value: v })),
    options: []
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Select query type",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        "aria-label": "select query type",
        onChange: onQueryTypeChange,
        options: AZURE_QUERY_VARIABLE_TYPE_OPTIONS,
        width: 25,
        value: query.queryType
      })
    }), query.queryType === AzureQueryType.LogAnalytics && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(LogsQueryEditor_LogsQueryEditor, {
        subscriptionId: query.subscription,
        query: query,
        datasource: props.datasource,
        onChange: onLogsQueryChange,
        variableOptionGroup: variableOptionGroup,
        setError: setError,
        hideFormatAs: true
      }), errorMessage && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [VariableEditor_Space || (VariableEditor_Space = /*#__PURE__*/(0,jsx_runtime.jsx)(Space, {
          v: 2
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
          severity: "error",
          title: "An error occurred while requesting metadata from Azure Monitor",
          children: errorMessage
        })]
      })]
    }), query.queryType === AzureQueryType.GrafanaTemplateVariableFn && /*#__PURE__*/(0,jsx_runtime.jsx)(GrafanaTemplateVariableFnInput, {
      query: query,
      updateQuery: props.onChange,
      datasource: props.datasource
    })]
  });
};

/* harmony default export */ const VariableEditor_VariableEditor = (VariableEditor);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/variables.ts
function variables_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class VariableSupport extends src.CustomVariableSupport {
  constructor(datasource) {
    super();
    this.datasource = datasource;

    variables_defineProperty(this, "editor", VariableEditor_VariableEditor);

    this.datasource = datasource;
    this.datasource = datasource;
    this.query = this.query.bind(this);
  }

  query(request) {
    const promisedResults = async () => {
      const queryObj = await migrateStringQueriesToObjectQueries(request.targets[0], {
        datasource: this.datasource
      });

      if (queryObj.queryType === AzureQueryType.GrafanaTemplateVariableFn && queryObj.grafanaTemplateVariableFn) {
        try {
          const templateVariablesResults = await this.callGrafanaTemplateVariableFn(queryObj.grafanaTemplateVariableFn);
          return {
            data: templateVariablesResults !== null && templateVariablesResults !== void 0 && templateVariablesResults.length ? [(0,src.toDataFrame)(templateVariablesResults)] : []
          };
        } catch (err) {
          return {
            data: [],
            error: {
              message: (0,messageFromError/* default */.Z)(err)
            }
          };
        }
      }

      request.targets[0] = queryObj;
      return (0,lastValueFrom/* lastValueFrom */.n)(this.datasource.query(request));
    };

    return (0,from/* from */.D)(promisedResults());
  }

  callGrafanaTemplateVariableFn(query) {
    if (query.kind === 'SubscriptionsQuery') {
      return this.datasource.getSubscriptions();
    }

    if (query.kind === 'ResourceGroupsQuery') {
      return this.datasource.getResourceGroups(this.replaceVariable(query.subscription));
    }

    if (query.kind === 'MetricDefinitionsQuery') {
      return this.datasource.getMetricDefinitions(this.replaceVariable(query.subscription), this.replaceVariable(query.resourceGroup));
    }

    if (query.kind === 'ResourceNamesQuery') {
      return this.datasource.getResourceNames(this.replaceVariable(query.subscription), this.replaceVariable(query.resourceGroup), this.replaceVariable(query.metricDefinition));
    }

    if (query.kind === 'MetricNamespaceQuery') {
      return this.datasource.azureMonitorDatasource.getMetricNamespaces(query);
    }

    if (query.kind === 'MetricNamesQuery') {
      return this.datasource.azureMonitorDatasource.getMetricNames(query);
    }

    if (query.kind === 'WorkspacesQuery') {
      return this.datasource.azureLogAnalyticsDatasource.getWorkspaces(this.replaceVariable(query.subscription));
    }

    return null;
  }

  replaceVariable(metric) {
    return (0,grafana_runtime_src.getTemplateSrv)().replace((metric || '').trim());
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/datasource.ts
function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class Datasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,template_srv/* getTemplateSrv */.J)();
    super(instanceSettings);
    this.templateSrv = templateSrv;

    datasource_defineProperty(this, "annotations", {
      prepareAnnotation: migrateAnnotation
    });

    datasource_defineProperty(this, "azureMonitorDatasource", void 0);

    datasource_defineProperty(this, "azureLogAnalyticsDatasource", void 0);

    datasource_defineProperty(this, "resourcePickerData", void 0);

    datasource_defineProperty(this, "azureResourceGraphDatasource", void 0);

    datasource_defineProperty(this, "pseudoDatasource", {});

    this.templateSrv = templateSrv;
    this.azureMonitorDatasource = new AzureMonitorDatasource(instanceSettings);
    this.azureLogAnalyticsDatasource = new AzureLogAnalyticsDatasource(instanceSettings);
    this.azureResourceGraphDatasource = new AzureResourceGraphDatasource(instanceSettings);
    this.resourcePickerData = new ResourcePickerData(instanceSettings);
    this.pseudoDatasource = {
      [AzureQueryType.AzureMonitor]: this.azureMonitorDatasource,
      [AzureQueryType.LogAnalytics]: this.azureLogAnalyticsDatasource,
      [AzureQueryType.AzureResourceGraph]: this.azureResourceGraphDatasource
    };
    this.variables = new VariableSupport(this);
  }

  filterQuery(item) {
    var _ds$filterQuery, _ds$filterQuery2;

    if (!item.queryType) {
      return true;
    }

    const ds = this.pseudoDatasource[item.queryType];
    return (_ds$filterQuery = ds === null || ds === void 0 ? void 0 : (_ds$filterQuery2 = ds.filterQuery) === null || _ds$filterQuery2 === void 0 ? void 0 : _ds$filterQuery2.call(ds, item)) !== null && _ds$filterQuery !== void 0 ? _ds$filterQuery : true;
  }

  query(options) {
    const byType = new Map();

    for (const baseTarget of options.targets) {
      // Migrate old query structures
      const target = datasourceMigrations(baseTarget); // Skip hidden or invalid queries or ones without properties

      if (!target.queryType || target.hide || !hasQueryForType(target)) {
        continue;
      } // Initialize the list of queries


      if (!byType.has(target.queryType)) {
        const queryForType = (0,lodash.cloneDeep)(options);
        queryForType.requestId = `${queryForType.requestId}-${target.refId}`;
        queryForType.targets = [];
        byType.set(target.queryType, queryForType);
      }

      const queryForType = byType.get(target.queryType);
      queryForType === null || queryForType === void 0 ? void 0 : queryForType.targets.push(target);
    }

    const observables = Array.from(byType.entries()).map(_ref => {
      let [queryType, req] = _ref;
      const ds = this.pseudoDatasource[queryType];

      if (!ds) {
        throw new Error('Data source not created for query type ' + queryType);
      }

      return ds.query(req);
    }); // Single query can skip merge

    if (observables.length === 1) {
      return observables[0];
    }

    if (observables.length > 1) {
      return (0,forkJoin/* forkJoin */.D)(observables).pipe((0,map/* map */.U)(results => {
        const data = [];

        for (const result of results) {
          for (const frame of result.data) {
            data.push(frame);
          }
        }

        return {
          state: src.LoadingState.Done,
          data
        };
      }));
    }

    return (0,of.of)({
      state: src.LoadingState.Done,
      data: []
    });
  }

  targetContainsTemplate(query) {
    if (query.subscription && this.templateSrv.containsTemplate(query.subscription)) {
      return true;
    }

    let subQuery;

    if (query.queryType === AzureQueryType.AzureMonitor) {
      subQuery = JSON.stringify(query.azureMonitor);
    } else if (query.queryType === AzureQueryType.LogAnalytics) {
      subQuery = JSON.stringify(query.azureLogAnalytics);
    } else if (query.queryType === AzureQueryType.AzureResourceGraph) {
      subQuery = JSON.stringify([query.azureResourceGraph, query.subscriptions]);
    }

    return !!subQuery && this.templateSrv.containsTemplate(subQuery);
  }

  async annotationQuery(options) {
    return this.azureLogAnalyticsDatasource.annotationQuery(options);
  }

  async testDatasource() {
    const promises = [];
    promises.push(this.azureMonitorDatasource.testDatasource());
    promises.push(this.azureLogAnalyticsDatasource.testDatasource());
    return await Promise.all(promises).then(results => {
      let status = 'success';
      let message = '';

      for (let i = 0; i < results.length; i++) {
        if (results[i].status !== 'success') {
          status = results[i].status;
        }

        message += `${i + 1}. ${results[i].message} `;
      }

      return {
        status: status,
        message: message,
        title: (0,lodash.upperFirst)(status)
      };
    });
  }
  /* Azure Monitor REST API methods */


  getResourceGroups(subscriptionId) {
    return this.azureMonitorDatasource.getResourceGroups(this.replaceTemplateVariable(subscriptionId));
  }

  getMetricDefinitions(subscriptionId, resourceGroup) {
    return this.azureMonitorDatasource.getMetricDefinitions(this.replaceTemplateVariable(subscriptionId), this.replaceTemplateVariable(resourceGroup));
  }

  getResourceNames(subscriptionId, resourceGroup, metricDefinition) {
    return this.azureMonitorDatasource.getResourceNames(this.replaceTemplateVariable(subscriptionId), this.replaceTemplateVariable(resourceGroup), this.replaceTemplateVariable(metricDefinition));
  }
  /*Azure Log Analytics */


  getAzureLogAnalyticsWorkspaces(subscriptionId) {
    return this.azureLogAnalyticsDatasource.getWorkspaces(subscriptionId);
  }

  getSubscriptions() {
    return this.azureMonitorDatasource.getSubscriptions();
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    const mapped = queries.map(query => {
      var _ds$applyTemplateVari;

      if (!query.queryType) {
        return query;
      }

      const ds = this.pseudoDatasource[query.queryType];
      return (_ds$applyTemplateVari = ds === null || ds === void 0 ? void 0 : ds.applyTemplateVariables(query, scopedVars)) !== null && _ds$applyTemplateVari !== void 0 ? _ds$applyTemplateVari : query;
    });
    return mapped;
  }

  replaceTemplateVariable(variable) {
    return this.templateSrv.replace(variable);
  }

  getVariables() {
    return this.templateSrv.getVariables().map(v => `$${v.name}`);
  }

  isTemplateVariable(value) {
    return this.getVariables().includes(value);
  }

}

function hasQueryForType(query) {
  switch (query.queryType) {
    case AzureQueryType.AzureMonitor:
      return !!query.azureMonitor;

    case AzureQueryType.LogAnalytics:
      return !!query.azureLogAnalytics;

    case AzureQueryType.AzureResourceGraph:
      return !!query.azureResourceGraph;

    case AzureQueryType.GrafanaTemplateVariableFn:
      return !!query.grafanaTemplateVariableFn;

    default:
      return false;
  }
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/grafana-azure-monitor-datasource/module.ts




const module_plugin = new src.DataSourcePlugin(Datasource).setConfigEditor(ConfigEditor).setQueryEditor(QueryEditor_QueryEditor);

/***/ }),

/***/ "./.yarn/cache/immer-npm-9.0.12-e8cd7358fa-bcbec6d76d.zip/node_modules/immer/dist/immer.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, freeze, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return true||0,U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return false&&0,en.get(r,n)},set:function(r){var t=this[Q]; false&&0,en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return false&&0,on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return false&&0,en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; false&&(0);var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ })

}]);