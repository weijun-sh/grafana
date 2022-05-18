"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["testDataDSPlugin"],{

/***/ "./public/app/plugins/datasource/testdata/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

// Libraries



/**
 * Empty Config Editor -- settings to save
 */
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {}));
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/LogIpsum.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNextWord": () => (/* binding */ getNextWord),
/* harmony export */   "getRandomLine": () => (/* binding */ getRandomLine),
/* harmony export */   "getRandomLogLevel": () => (/* binding */ getRandomLogLevel)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

let index = 0;
function getRandomLogLevel() {
  const v = Math.random();

  if (v > 0.9) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.critical;
  }

  if (v > 0.8) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.error;
  }

  if (v > 0.7) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.warning;
  }

  if (v > 0.4) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.info;
  }

  if (v > 0.3) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.debug;
  }

  if (v > 0.1) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.trace;
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LogLevel.unknown;
}
function getNextWord() {
  index = (index + Math.floor(Math.random() * 5)) % words.length;
  return words[index];
}
function getRandomLine(length = 60) {
  let line = getNextWord();

  while (line.length < length) {
    line += ' ' + getNextWord();
  }

  return line;
}
const words = ['At', 'vero', 'eos', 'et', 'accusamus', 'et', 'iusto', 'odio', 'dignissimos', 'ducimus', 'qui', 'blanditiis', 'praesentium', 'voluptatum', 'deleniti', 'atque', 'corrupti', 'quos', 'dolores', 'et', 'quas', 'molestias', 'excepturi', 'sint', 'occaecati', 'cupiditate', 'non', 'provident', 'similique', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollitia', 'animi', 'id', 'est', 'laborum', 'et', 'dolorum', 'fuga', 'Et', 'harum', 'quidem', 'rerum', 'facilis', 'est', 'et', 'expedita', 'distinctio', 'Nam', 'libero', 'tempore', 'cum', 'soluta', 'nobis', 'est', 'eligendi', 'optio', 'cumque', 'nihil', 'impedit', 'quo', 'minus', 'id', 'quod', 'maxime', 'placeat', 'facere', 'possimus', 'omnis', 'voluptas', 'assumenda', 'est', 'omnis', 'dolor', 'repellendus', 'Temporibus', 'autem', 'quibusdam', 'et', 'aut', 'officiis', 'debitis', 'aut', 'rerum', 'necessitatibus', 'saepe', 'eveniet', 'ut', 'et', 'voluptates', 'repudiandae', 'sint', 'et', 'molestiae', 'non', 'recusandae', 'Itaque', 'earum', 'rerum', 'hic', 'tenetur', 'a', 'sapiente', 'delectus', 'ut', 'aut', 'reiciendis', 'voluptatibus', 'maiores', 'alias', 'consequatur', 'aut', 'perferendis', 'doloribus', 'asperiores', 'repellat'];

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/index.ts");
/* harmony import */ var _components_CSVContentEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/CSVContentEditor.tsx");
/* harmony import */ var _components_CSVFileEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/CSVFileEditor.tsx");
/* harmony import */ var _components_CSVWaveEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/CSVWaveEditor.tsx");
/* harmony import */ var _components_ErrorEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/ErrorEditor.tsx");
/* harmony import */ var _components_GrafanaLiveEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/GrafanaLiveEditor.tsx");
/* harmony import */ var _components_NodeGraphEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/NodeGraphEditor.tsx");
/* harmony import */ var _components_PredictablePulseEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/PredictablePulseEditor.tsx");
/* harmony import */ var _components_RawFrameEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/RawFrameEditor.tsx");
/* harmony import */ var _components_SimulationQueryEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/SimulationQueryEditor.tsx");
/* harmony import */ var _components_USAQueryEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/USAQueryEditor.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/testdata/constants.ts");
/* harmony import */ var _runStreams__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/testdata/runStreams.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _br2, _br3, _br4;





















const showLabelsFor = ['random_walk', 'predictable_pulse'];
const endpoints = [{
  value: 'datasources',
  label: 'Data Sources'
}, {
  value: 'search',
  label: 'Search'
}, {
  value: 'annotations',
  label: 'Annotations'
}];
const selectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.DataSource.TestData.QueryTab;
const QueryEditor = ({
  query,
  datasource,
  onChange,
  onRunQuery
}) => {
  var _query, _query$usa;

  query = Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_14__.defaultQuery, query);
  const {
    loading,
    value: scenarioList
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_17__["default"])(async () => {
    // migrate manual_entry (unusable since 7, removed in 8)
    if (query.scenarioId === 'manual_entry' && query.points) {
      let csvContent = 'Time,Value\n';

      for (const point of query.points) {
        csvContent += `${point[1]},${point[0]}\n`;
      }

      onChange({
        refId: query.refId,
        datasource: query.datasource,
        scenarioId: 'csv_content',
        csvContent
      });
    }

    const vals = await datasource.getScenarios();
    const hideAlias = ['simulation'];
    return vals.map(v => Object.assign({}, v, {
      hideAliasField: hideAlias.includes(v.id)
    }));
  }, []);

  const onUpdate = query => {
    onChange(query);
    onRunQuery();
  };

  const currentScenario = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => scenarioList === null || scenarioList === void 0 ? void 0 : scenarioList.find(scenario => scenario.id === query.scenarioId), [scenarioList, query]);
  const scenarioId = currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.id;
  const description = currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.description;

  const onScenarioChange = item => {
    const scenario = scenarioList === null || scenarioList === void 0 ? void 0 : scenarioList.find(sc => sc.id === item.value);

    if (!scenario) {
      return;
    } // Clear model from existing props that belong to other scenarios


    const update = {
      scenarioId: item.value,
      refId: query.refId,
      alias: query.alias,
      datasource: query.datasource
    };

    if (scenario.stringInput) {
      update.stringInput = scenario.stringInput;
    }

    switch (scenario.id) {
      case 'grafana_api':
        update.stringInput = 'datasources';
        break;

      case 'streaming_client':
        update.stream = _runStreams__WEBPACK_IMPORTED_MODULE_15__.defaultStreamQuery;
        break;

      case 'live':
        update.channel = 'random-2s-stream'; // default stream

        break;

      case 'simulation':
        update.sim = {
          key: {
            type: 'flight',
            tick: 10
          }
        }; // default stream

        break;

      case 'predictable_pulse':
        update.pulseWave = _constants__WEBPACK_IMPORTED_MODULE_14__.defaultPulseQuery;
        break;

      case 'predictable_csv_wave':
        update.csvWave = _constants__WEBPACK_IMPORTED_MODULE_14__.defaultCSVWaveQuery;
        break;

      case 'usa':
        update.usa = {
          mode: _components_USAQueryEditor__WEBPACK_IMPORTED_MODULE_13__.usaQueryModes[0].value
        };
    }

    onUpdate(update);
  };

  const onInputChange = e => {
    const {
      name,
      value,
      type
    } = e.target;
    let newValue = value;

    if (type === 'number') {
      newValue = Number(value);
    }

    if (name === 'levelColumn') {
      newValue = e.target.checked;
    }

    onUpdate(Object.assign({}, query, {
      [name]: newValue
    }));
  };

  const onFieldChange = field => e => {
    const {
      name,
      value,
      type
    } = e.target;
    let newValue = value;

    if (type === 'number') {
      newValue = Number(value);
    }

    onUpdate(Object.assign({}, query, {
      [field]: Object.assign({}, query[field], {
        [name]: newValue
      })
    }));
  };

  const onEndPointChange = ({
    value
  }) => {
    onUpdate(Object.assign({}, query, {
      stringInput: value
    }));
  };

  const onStreamClientChange = onFieldChange('stream');
  const onPulseWaveChange = onFieldChange('pulseWave');

  const onUSAStatsChange = usa => {
    onUpdate(Object.assign({}, query, {
      usa
    }));
  };

  const onCSVWaveChange = csvWave => {
    onUpdate(Object.assign({}, query, {
      csvWave
    }));
  };

  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (scenarioList || []).map(item => ({
    label: item.name,
    value: item.id
  })).sort((a, b) => a.label.localeCompare(b.label)), [scenarioList]);
  const showLabels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _query$scenarioId;

    return showLabelsFor.includes((_query$scenarioId = query.scenarioId) !== null && _query$scenarioId !== void 0 ? _query$scenarioId : '');
  }, [query]);

  if (loading) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      "aria-label": selectors.scenarioSelectContainer,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        labelWidth: 14,
        label: "Scenario",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
          inputId: `test-data-scenario-select-${query.refId}`,
          options: options,
          value: options.find(item => item.value === query.scenarioId),
          onChange: onScenarioChange,
          width: 32
        })
      }), (currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.stringInput) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "String Input",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          id: `stringInput-${query.refId}`,
          name: "stringInput",
          placeholder: query.stringInput,
          value: query.stringInput,
          onChange: onInputChange
        })
      }), Boolean(!(currentScenario !== null && currentScenario !== void 0 && currentScenario.hideAliasField)) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Alias",
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          id: `alias-${query.refId}`,
          type: "text",
          placeholder: "optional",
          pattern: "[^<>&\\\\\"]+",
          name: "alias",
          value: query.alias,
          onChange: onInputChange
        })
      }), showLabels && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Labels",
        labelWidth: 14,
        tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: ["Set labels using a key=value syntax:", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {})), `{ key = "value", key2 = "value" }`, _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {})), "key=\"value\", key2=\"value\"", _br3 || (_br3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {})), "key=value, key2=value", _br4 || (_br4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("br", {}))]
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          id: `labels-${query.refId}`,
          name: "labels",
          onChange: onInputChange,
          value: (_query = query) === null || _query === void 0 ? void 0 : _query.labels,
          placeholder: "key=value, key2=value2"
        })
      })]
    }), scenarioId === 'random_walk' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.RandomWalkEditor, {
      onChange: onInputChange,
      query: query,
      ds: datasource
    }), scenarioId === 'streaming_client' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components__WEBPACK_IMPORTED_MODULE_3__.StreamingClientEditor, {
      onChange: onStreamClientChange,
      query: query,
      ds: datasource
    }), scenarioId === 'live' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_GrafanaLiveEditor__WEBPACK_IMPORTED_MODULE_8__.GrafanaLiveEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'simulation' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_SimulationQueryEditor__WEBPACK_IMPORTED_MODULE_12__.SimulationQueryEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'raw_frame' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_RawFrameEditor__WEBPACK_IMPORTED_MODULE_11__.RawFrameEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'csv_file' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_CSVFileEditor__WEBPACK_IMPORTED_MODULE_5__.CSVFileEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'csv_content' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_CSVContentEditor__WEBPACK_IMPORTED_MODULE_4__.CSVContentEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'logs' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Lines",
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          type: "number",
          name: "lines",
          value: query.lines,
          width: 32,
          onChange: onInputChange,
          placeholder: "10"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Level",
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
          onChange: onInputChange,
          name: "levelColumn",
          value: !!query.levelColumn
        })
      })]
    }), scenarioId === 'usa' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_USAQueryEditor__WEBPACK_IMPORTED_MODULE_13__.USAQueryEditor, {
      onChange: onUSAStatsChange,
      query: (_query$usa = query.usa) !== null && _query$usa !== void 0 ? _query$usa : {}
    }), scenarioId === 'grafana_api' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
      labelWidth: 14,
      label: "Endpoint",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
        options: endpoints,
        onChange: onEndPointChange,
        width: 32,
        value: endpoints.find(ep => ep.value === query.stringInput)
      })
    }), scenarioId === 'arrow' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
      grow: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TextArea, {
        name: "stringInput",
        value: query.stringInput,
        rows: 10,
        placeholder: "Copy base64 text data from query result",
        onChange: onInputChange
      })
    }), scenarioId === 'predictable_pulse' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_PredictablePulseEditor__WEBPACK_IMPORTED_MODULE_10__.PredictablePulseEditor, {
      onChange: onPulseWaveChange,
      query: query,
      ds: datasource
    }), scenarioId === 'predictable_csv_wave' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_CSVWaveEditor__WEBPACK_IMPORTED_MODULE_6__.CSVWavesEditor, {
      onChange: onCSVWaveChange,
      waves: query.csvWave
    }), scenarioId === 'node_graph' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_NodeGraphEditor__WEBPACK_IMPORTED_MODULE_9__.NodeGraphEditor, {
      onChange: val => onChange(Object.assign({}, query, {
        nodes: val
      })),
      query: query
    }), scenarioId === 'server_error_500' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_components_ErrorEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {
      children: description
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/TestInfoTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestInfoTab": () => (/* binding */ TestInfoTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

// Libraries

 // Types



class TestInfoTab extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: ["See github for more information about setting up a reproducible test environment.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        variant: "secondary",
        href: "https://github.com/grafana/grafana/tree/main/devenv",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "GitHub"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})]
    }));
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/CSVContentEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSVContentEditor": () => (/* binding */ CSVContentEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const CSVContentEditor = ({
  onChange,
  query
}) => {
  var _query$csvContent;

  const onSaveCSV = csvContent => {
    onChange(Object.assign({}, query, {
      csvContent
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
    height: 300,
    language: "csv",
    value: (_query$csvContent = query.csvContent) !== null && _query$csvContent !== void 0 ? _query$csvContent : '',
    onBlur: onSaveCSV,
    onSave: onSaveCSV,
    showMiniMap: false,
    showLineNumbers: true
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/CSVFileEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSVFileEditor": () => (/* binding */ CSVFileEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const CSVFileEditor = ({
  onChange,
  query
}) => {
  const onChangeFileName = ({
    value
  }) => {
    onChange(Object.assign({}, query, {
      csvFileName: value
    }));
  };

  const files = ['flight_info_by_state.csv', 'population_by_state.csv', 'gdp_per_capita.csv', 'js_libraries.csv', 'ohlc_dogecoin.csv', 'weight_height.csv', 'browser_marketshare.csv'].map(name => ({
    label: name,
    value: name
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "File",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        width: 32,
        onChange: onChangeFileName,
        placeholder: "Select csv file",
        options: files,
        value: files.find(f => f.value === query.csvFileName)
      })
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/CSVWaveEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSVWavesEditor": () => (/* binding */ CSVWavesEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/testdata/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CSVWaveEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onFieldChange", field => e => {
      const {
        value
      } = e.target;
      this.props.onChange(this.props.index, Object.assign({}, this.props.wave, {
        [field]: value
      }));
    });

    _defineProperty(this, "onNameChange", this.onFieldChange('name'));

    _defineProperty(this, "onLabelsChange", this.onFieldChange('labels'));

    _defineProperty(this, "onCSVChange", this.onFieldChange('valuesCSV'));

    _defineProperty(this, "onTimeStepChange", e => {
      const timeStep = e.target.valueAsNumber;
      this.props.onChange(this.props.index, Object.assign({}, this.props.wave, {
        timeStep
      }));
    });
  }

  render() {
    const {
      wave,
      last
    } = this.props;
    let action = this.props.onAdd;

    if (!last) {
      action = () => {
        this.props.onChange(this.props.index, undefined); // remove
      };
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Values',
        grow: true,
        tooltip: "Comma separated values. Each value may be an int, float, or null and must not be empty. Whitespace and trailing commas are removed",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.valuesCSV,
          placeholder: 'CSV values',
          onChange: this.onCSVChange,
          autoFocus: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Step',
        tooltip: "The number of seconds between datapoints.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.timeStep,
          type: "number",
          placeholder: '60',
          width: 6,
          onChange: this.onTimeStepChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Labels',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.labels,
          placeholder: 'labels',
          width: 12,
          onChange: this.onLabelsChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: 'Name',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: wave.name,
          placeholder: 'name',
          width: 10,
          onChange: this.onNameChange
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        icon: last ? 'plus' : 'minus',
        variant: "secondary",
        onClick: action
      })]
    });
  }

}

class CSVWavesEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChange", (index, wave) => {
      var _this$props$waves;

      let waves = [...((_this$props$waves = this.props.waves) !== null && _this$props$waves !== void 0 ? _this$props$waves : _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery)];

      if (wave) {
        waves[index] = Object.assign({}, wave);
      } else {
        // remove the element
        waves.splice(index, 1);
      }

      this.props.onChange(waves);
    });

    _defineProperty(this, "onAdd", () => {
      var _this$props$waves2;

      const waves = [...((_this$props$waves2 = this.props.waves) !== null && _this$props$waves2 !== void 0 ? _this$props$waves2 : _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery)];
      waves.push(Object.assign({}, _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery[0]));
      this.props.onChange(waves);
    });
  }

  render() {
    var _this$props$waves3;

    let waves = (_this$props$waves3 = this.props.waves) !== null && _this$props$waves3 !== void 0 ? _this$props$waves3 : _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery;

    if (!waves.length) {
      waves = _constants__WEBPACK_IMPORTED_MODULE_2__.defaultCSVWaveQuery;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: waves.map((wave, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(CSVWaveEditor, {
        wave: wave,
        index: index,
        onAdd: this.onAdd,
        onChange: this.onChange,
        last: index === waves.length - 1
      }, `${index}/${wave.valuesCSV}`))
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/ErrorEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const ERROR_OPTIONS = [{
  label: 'Server panic',
  value: 'server_panic'
}, {
  label: 'Frontend exception',
  value: 'frontend_exception'
}, {
  label: 'Frontend observable',
  value: 'frontend_observable'
}];

const FrontendErrorQueryEditor = ({
  query,
  onChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      labelWidth: 14,
      label: "Error type",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        options: ERROR_OPTIONS,
        value: query.errorType,
        onChange: v => {
          onChange(Object.assign({}, query, {
            errorType: v.value
          }));
        }
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontendErrorQueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/GrafanaLiveEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaLiveEditor": () => (/* binding */ GrafanaLiveEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const liveTestDataChannels = [{
  label: 'random-2s-stream',
  value: 'random-2s-stream',
  description: 'Random stream with points every 2s'
}, {
  label: 'random-flakey-stream',
  value: 'random-flakey-stream',
  description: 'Stream that returns data in random intervals'
}, {
  label: 'random-labeled-stream',
  value: 'random-labeled-stream',
  description: 'Value with moving labels'
}, {
  label: 'random-20Hz-stream',
  value: 'random-20Hz-stream',
  description: 'Random stream with points in 20Hz'
}];
const GrafanaLiveEditor = ({
  onChange,
  query
}) => {
  const onChannelChange = ({
    value
  }) => {
    onChange(Object.assign({}, query, {
      channel: value
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Channel",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        width: 32,
        onChange: onChannelChange,
        placeholder: "Select channel",
        options: liveTestDataChannels,
        value: liveTestDataChannels.find(f => f.value === query.channel)
      })
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/NodeGraphEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeGraphEditor": () => (/* binding */ NodeGraphEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function NodeGraphEditor({
  query,
  onChange
}) {
  var _query$nodes, _query$nodes2;

  const type = ((_query$nodes = query.nodes) === null || _query$nodes === void 0 ? void 0 : _query$nodes.type) || 'random';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Data type",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        options: options.map(o => ({
          label: o,
          value: o
        })),
        value: options.find(item => item === type),
        onChange: value => onChange(Object.assign({}, query.nodes, {
          type: value.value
        })),
        width: 32
      })
    }), type === 'random' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Count",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        type: "number",
        name: "count",
        value: (_query$nodes2 = query.nodes) === null || _query$nodes2 === void 0 ? void 0 : _query$nodes2.count,
        width: 32,
        onChange: e => onChange(Object.assign({}, query.nodes, {
          count: e.currentTarget.value ? parseInt(e.currentTarget.value, 10) : 0
        })),
        placeholder: "10"
      })
    })]
  });
}
const options = ['random', 'response'];

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/PredictablePulseEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PredictablePulseEditor": () => (/* binding */ PredictablePulseEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const fields = [{
  label: 'Step',
  id: 'timeStep',
  placeholder: '60',
  tooltip: 'The number of seconds between datapoints.'
}, {
  label: 'On Count',
  id: 'onCount',
  placeholder: '3',
  tooltip: 'The number of values within a cycle, at the start of the cycle, that should have the onValue.'
}, {
  label: 'Off Count',
  id: 'offCount',
  placeholder: '6',
  tooltip: 'The number of offValues within the cycle.'
}, {
  label: 'On Value',
  id: 'onValue',
  placeholder: '1',
  tooltip: 'The value for "on values", may be an int, float, or null.'
}, {
  label: 'Off Value',
  id: 'offValue',
  placeholder: '1',
  tooltip: 'The value for "off values", may be a int, float, or null.'
}];
const PredictablePulseEditor = ({
  onChange,
  query
}) => {
  // Convert values to numbers before saving
  const onInputChange = e => {
    const {
      name,
      value
    } = e.target;
    onChange({
      target: {
        name,
        value: Number(value)
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: fields.map(({
      label,
      id,
      placeholder,
      tooltip
    }) => {
      var _query$pulseWave;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: label,
        labelWidth: 14,
        tooltip: tooltip,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          width: 32,
          type: "number",
          name: id,
          id: `pulseWave.${id}-${query.refId}`,
          value: (_query$pulseWave = query.pulseWave) === null || _query$pulseWave === void 0 ? void 0 : _query$pulseWave[id],
          placeholder: placeholder,
          onChange: onInputChange
        })
      }, id);
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/RandomWalkEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomWalkEditor": () => (/* binding */ RandomWalkEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const randomWalkFields = [{
  label: 'Series count',
  id: 'seriesCount',
  placeholder: '1',
  min: 1,
  step: 1
}, {
  label: 'Start value',
  id: 'startValue',
  placeholder: 'auto',
  step: 1
}, {
  label: 'Min',
  id: 'min',
  placeholder: 'none',
  step: 0.1
}, {
  label: 'Max',
  id: 'max',
  placeholder: 'none',
  step: 0.1
}, {
  label: 'Spread',
  id: 'spread',
  placeholder: '1',
  min: 0.5,
  step: 0.1
}, {
  label: 'Noise',
  id: 'noise',
  placeholder: '0',
  min: 0,
  step: 0.1
}, {
  label: 'Drop (%)',
  id: 'drop',
  placeholder: '0',
  min: 0,
  max: 100,
  step: 1,
  tooltip: 'Exclude some percent (chance) points'
}];
const testSelectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.DataSource.TestData.QueryTab;
const RandomWalkEditor = ({
  onChange,
  query
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
    children: randomWalkFields.map(({
      label,
      id,
      min,
      step,
      placeholder,
      tooltip
    }) => {
      const selector = testSelectors === null || testSelectors === void 0 ? void 0 : testSelectors[id];
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: label,
        labelWidth: 14,
        "aria-label": selector,
        tooltip: tooltip,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
          width: 32,
          name: id,
          type: "number",
          id: `randomWalk-${id}-${query.refId}`,
          min: min,
          step: step,
          value: query[id] || placeholder,
          placeholder: placeholder,
          onChange: onChange
        })
      }, id);
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/RawFrameEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RawFrameEditor": () => (/* binding */ RawFrameEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const RawFrameEditor = ({
  onChange,
  query
}) => {
  var _query$rawFrameConten;

  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [warning, setWarning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  const onSaveFrames = rawFrameContent => {
    try {
      const json = JSON.parse(rawFrameContent);

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(json)) {
        setError(undefined);
        setWarning(undefined);
        onChange(Object.assign({}, query, {
          rawFrameContent
        }));
        return;
      }

      let data = undefined; // Copy paste from panel json

      if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(json.series) && json.state) {
        data = json.series.map(v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toDataFrameDTO)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toDataFrame)(v)));
      } else {
        var _v$data;

        // Chek if it is a copy of the raw resuls
        const v = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.toDataQueryResponse)({
          data: json
        });

        if ((_v$data = v.data) !== null && _v$data !== void 0 && _v$data.length && !v.error) {
          data = v.data.map(f => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dataFrameToJSON)(f));
        }
      }

      if (data) {
        console.log('Original', json);
        console.log('Save', data);
        setError(undefined);
        setWarning('Converted to direct frame result');
        onChange(Object.assign({}, query, {
          rawFrameContent: JSON.stringify(data, null, 2)
        }));
        return;
      }

      setError('Unable to read dataframes in text');
    } catch (e) {
      console.log('Error parsing json', e);
      setError('Enter JSON array of data frames (or raw query results body)');
      setWarning(undefined);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      title: error,
      severity: "error"
    }), warning && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      title: warning,
      severity: "warning"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor, {
      height: 300,
      language: "json",
      value: (_query$rawFrameConten = query.rawFrameContent) !== null && _query$rawFrameConten !== void 0 ? _query$rawFrameConten : '[]',
      onBlur: onSaveFrames,
      onSave: onSaveFrames,
      showMiniMap: true,
      showLineNumbers: true
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/SimulationQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SimulationQueryEditor": () => (/* binding */ SimulationQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button;







const SimulationQueryEditor = ({
  onChange,
  query,
  ds
}) => {
  var _query$sim, _simQuery$key, _info$value$options, _info$value, _current$details;

  const simQuery = (_query$sim = query.sim) !== null && _query$sim !== void 0 ? _query$sim : {};
  const simKey = (_simQuery$key = simQuery.key) !== null && _simQuery$key !== void 0 ? _simQuery$key : {}; // This only changes once

  const info = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(async () => {
    const v = await ds.getResource('sims');
    return {
      sims: v,
      options: v.map(s => ({
        label: s.name,
        value: s.type,
        description: s.description
      }))
    };
  }, [ds]);
  const current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const type = simKey.type;

    if (!type || !info.value) {
      return {};
    }

    return {
      details: info.value.sims.find(v => v.type === type),
      option: info.value.options.find(v => v.value === type)
    };
  }, [info.value, simKey === null || simKey === void 0 ? void 0 : simKey.type]);
  let config = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(async () => {
    var _await$ds$getResource;

    let path = simKey.type + '/' + simKey.tick + 'hz';

    if (simKey.uid) {
      path += '/' + simKey.uid;
    }

    return (_await$ds$getResource = await ds.getResource('sim/' + path)) === null || _await$ds$getResource === void 0 ? void 0 : _await$ds$getResource.config;
  }, [simKey.type, simKey.tick, simKey.uid]);

  const onUpdateKey = key => {
    onChange(Object.assign({}, query, {
      sim: Object.assign({}, simQuery, {
        key
      })
    }));
  };

  const onUIDChanged = e => {
    const {
      value
    } = e.target;
    onUpdateKey(Object.assign({}, simKey, {
      uid: value !== null && value !== void 0 ? value : undefined
    }));
  };

  const onTickChanged = e => {
    const tick = e.currentTarget.valueAsNumber;
    onUpdateKey(Object.assign({}, simKey, {
      tick
    }));
  };

  const onTypeChange = v => {
    onUpdateKey(Object.assign({}, simKey, {
      type: v.value
    }));
  };

  const onToggleStream = () => {
    onChange(Object.assign({}, query, {
      sim: Object.assign({}, simQuery, {
        stream: !simQuery.stream
      })
    }));
  };

  const onToggleLast = () => {
    onChange(Object.assign({}, query, {
      sim: Object.assign({}, simQuery, {
        last: !simQuery.last
      })
    }));
  };

  const onSubmitChange = data => {
    let path = simKey.type + '/' + simKey.tick + 'hz';

    if (simKey.uid) {
      path += '/' + simKey.uid;
    }

    ds.postResource('sim/' + path, JSON.parse(data.config));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Simulation",
        tooltip: "",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
          isLoading: info.loading,
          options: (_info$value$options = (_info$value = info.value) === null || _info$value === void 0 ? void 0 : _info$value.options) !== null && _info$value$options !== void 0 ? _info$value$options : [],
          value: current.option,
          onChange: onTypeChange,
          width: 32
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Stream",
        tooltip: "connect to the live channel",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineSwitch, {
          value: Boolean(simQuery.stream),
          onChange: onToggleStream
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Interval",
        tooltip: "the rate a simulation will spit out events",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          width: 10,
          type: "number",
          value: simKey.tick,
          onChange: onTickChanged,
          min: 1 / 10,
          max: 50,
          suffix: "hz"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Last",
        tooltip: "Only return the last value",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineSwitch, {
            value: Boolean(simQuery.last),
            onChange: onToggleLast
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "UID",
        tooltip: "A UID will allow multiple simulations to run at the same time",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          type: "text",
          placeholder: "optional",
          value: simQuery.key.uid,
          onChange: onUIDChanged
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
        onSubmit: onSubmitChange,
        children: ({
          register
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, Object.assign({}, register('config'), {
            defaultValue: JSON.stringify(config.value, null, 2),
            rows: 7
          })), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            type: "submit",
            children: "Submit"
          }))]
        })
      }), "SCHEMA:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("pre", {
        children: JSON.stringify((_current$details = current.details) === null || _current$details === void 0 ? void 0 : _current$details.config.schema, null, 2)
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/StreamingClientEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StreamingClientEditor": () => (/* binding */ StreamingClientEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const streamingClientFields = [{
  label: 'Speed (ms)',
  id: 'speed',
  placeholder: 'value',
  min: 10,
  step: 10
}, {
  label: 'Spread',
  id: 'spread',
  placeholder: 'value',
  min: 0.5,
  step: 0.1
}, {
  label: 'Noise',
  id: 'noise',
  placeholder: 'value',
  min: 0,
  step: 0.1
}, {
  label: 'Bands',
  id: 'bands',
  placeholder: 'bands',
  min: 0,
  step: 1
}];
const types = [{
  value: 'signal',
  label: 'Signal'
}, {
  value: 'logs',
  label: 'Logs'
}, {
  value: 'fetch',
  label: 'Fetch'
}];
const StreamingClientEditor = ({
  onChange,
  query
}) => {
  var _query$stream, _query$stream3, _query$stream4;

  const onSelectChange = ({
    value
  }) => {
    onChange({
      target: {
        name: 'type',
        value
      }
    });
  }; // Convert values to numbers before saving


  const onInputChange = e => {
    const {
      name,
      value
    } = e.target;
    onChange({
      target: {
        name,
        value: Number(value)
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "Type",
      labelWidth: 14,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
        width: 32,
        onChange: onSelectChange,
        defaultValue: types[0],
        options: types
      })
    }), (query === null || query === void 0 ? void 0 : (_query$stream = query.stream) === null || _query$stream === void 0 ? void 0 : _query$stream.type) === 'signal' && streamingClientFields.map(({
      label,
      id,
      min,
      step,
      placeholder
    }) => {
      var _query$stream2;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: label,
        labelWidth: 14,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          width: 32,
          type: "number",
          id: `stream.${id}-${query.refId}`,
          name: id,
          min: min,
          step: step,
          value: (_query$stream2 = query.stream) === null || _query$stream2 === void 0 ? void 0 : _query$stream2[id],
          placeholder: placeholder,
          onChange: onInputChange
        })
      }, id);
    }), (query === null || query === void 0 ? void 0 : (_query$stream3 = query.stream) === null || _query$stream3 === void 0 ? void 0 : _query$stream3.type) === 'fetch' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
      label: "URL",
      labelWidth: 14,
      grow: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
        type: "text",
        name: "url",
        id: `stream.url-${query.refId}`,
        value: query === null || query === void 0 ? void 0 : (_query$stream4 = query.stream) === null || _query$stream4 === void 0 ? void 0 : _query$stream4.url,
        placeholder: "Fetch URL",
        onChange: onChange
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/USAQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USAQueryEditor": () => (/* binding */ USAQueryEditor),
/* harmony export */   "fieldNames": () => (/* binding */ fieldNames),
/* harmony export */   "stateNames": () => (/* binding */ stateNames),
/* harmony export */   "usaQueryModes": () => (/* binding */ usaQueryModes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function USAQueryEditor({
  query,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Mode",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
          options: usaQueryModes,
          onChange: v => {
            onChange(Object.assign({}, query, {
              mode: v.value
            }));
          },
          width: 32,
          value: usaQueryModes.find(ep => ep.value === query.mode)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "Period",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: query.period,
          placeholder: '30m',
          onChange: v => {
            onChange(Object.assign({}, query, {
              period: v.currentTarget.value
            }));
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        labelWidth: 14,
        label: "Fields",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, {
          options: fieldNames,
          onChange: vals => {
            onChange(Object.assign({}, query, {
              fields: vals.map(v => v.value)
            }));
          },
          width: 32,
          placeholder: "all",
          value: query.fields
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, {
        label: "States",
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, {
          options: stateNames,
          onChange: vals => {
            onChange(Object.assign({}, query, {
              states: vals.map(v => v.value)
            }));
          },
          placeholder: "all",
          value: query.states
        })
      })]
    })]
  });
}
const usaQueryModes = ['values-as-rows', 'values-as-fields', 'values-as-labeled-fields', 'timeseries', 'timeseries-wide'].map(f => ({
  label: f,
  value: f
}));
const fieldNames = ['foo', 'bar', 'baz' // all short
].map(f => ({
  label: f,
  value: f
}));
const stateNames = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'].map(f => ({
  label: f,
  value: f
}));

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/components/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomWalkEditor": () => (/* reexport safe */ _RandomWalkEditor__WEBPACK_IMPORTED_MODULE_1__.RandomWalkEditor),
/* harmony export */   "StreamingClientEditor": () => (/* reexport safe */ _StreamingClientEditor__WEBPACK_IMPORTED_MODULE_0__.StreamingClientEditor)
/* harmony export */ });
/* harmony import */ var _StreamingClientEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/StreamingClientEditor.tsx");
/* harmony import */ var _RandomWalkEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/testdata/components/RandomWalkEditor.tsx");



/***/ }),

/***/ "./public/app/plugins/datasource/testdata/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultCSVWaveQuery": () => (/* binding */ defaultCSVWaveQuery),
/* harmony export */   "defaultPulseQuery": () => (/* binding */ defaultPulseQuery),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
const defaultPulseQuery = {
  timeStep: 60,
  onCount: 3,
  onValue: 2,
  offCount: 3,
  offValue: 1
};
const defaultCSVWaveQuery = [{
  timeStep: 60,
  valuesCSV: '0,0,2,2,1,1'
}];
const defaultQuery = {
  scenarioId: 'random_walk',
  refId: ''
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDataDataSource": () => (/* binding */ TestDataDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/delay.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _metricTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/testdata/metricTree.ts");
/* harmony import */ var _nodeGraphUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/nodeGraphUtils.ts");
/* harmony import */ var _runStreams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/testdata/runStreams.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/testdata/variables.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class TestDataDataSource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "scenariosCache", void 0);

    this.templateSrv = templateSrv;
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_6__.TestDataVariableSupport();
  }

  query(options) {
    const backendQueries = [];
    const streams = []; // Start streams and prepare queries

    for (const target of options.targets) {
      if (target.hide) {
        continue;
      }

      this.resolveTemplateVariables(target, options.scopedVars);

      switch (target.scenarioId) {
        case 'live':
          streams.push(runGrafanaLiveQuery(target, options));
          break;

        case 'streaming_client':
          streams.push((0,_runStreams__WEBPACK_IMPORTED_MODULE_5__.runStream)(target, options));
          break;

        case 'grafana_api':
          streams.push(runGrafanaAPI(target, options));
          break;

        case 'annotations':
          streams.push(this.annotationDataTopicTest(target, options));
          break;

        case 'variables-query':
          streams.push(this.variablesQuery(target, options));
          break;

        case 'node_graph':
          streams.push(this.nodesQuery(target, options));
          break;

        case 'raw_frame':
          streams.push(this.rawFrameQuery(target, options));
          break;

        case 'server_error_500':
          // this now has an option where it can return/throw an error from the frontend.
          // if it doesn't, send it to the backend where it might panic there :)
          const query = this.serverErrorQuery(target, options);
          query ? streams.push(query) : backendQueries.push(target);
          break;
        // Unusable since 7, removed in 8

        case 'manual_entry':
          {
            let csvContent = 'Time,Value\n';

            if (target.points) {
              for (const point of target.points) {
                csvContent += `${point[1]},${point[0]}\n`;
              }
            }

            target.scenarioId = 'csv_content';
            target.csvContent = csvContent;
          }

        default:
          backendQueries.push(target);
      }
    }

    if (backendQueries.length) {
      const backendOpts = Object.assign({}, options, {
        targets: backendQueries
      });
      streams.push(super.query(backendOpts));
    }

    if (streams.length === 0) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data: []
      });
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...streams);
  }

  resolveTemplateVariables(query, scopedVars) {
    if (query.labels) {
      query.labels = this.templateSrv.replace(query.labels, scopedVars);
    }

    if (query.alias) {
      query.alias = this.templateSrv.replace(query.alias, scopedVars);
    }

    if (query.scenarioId) {
      query.scenarioId = this.templateSrv.replace(query.scenarioId, scopedVars);
    }

    if (query.stringInput) {
      query.stringInput = this.templateSrv.replace(query.stringInput, scopedVars);
    }

    if (query.csvContent) {
      query.csvContent = this.templateSrv.replace(query.csvContent, scopedVars);
    }

    if (query.rawFrameContent) {
      query.rawFrameContent = this.templateSrv.replace(query.rawFrameContent, scopedVars);
    }
  }

  annotationDataTopicTest(target, req) {
    const events = this.buildFakeAnnotationEvents(req.range, 50);
    const dataFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(events);
    dataFrame.meta = {
      dataTopic: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataTopic.Annotations
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      key: target.refId,
      data: [dataFrame]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
  }

  buildFakeAnnotationEvents(range, count) {
    let timeWalker = range.from.valueOf();
    const to = range.to.valueOf();
    const events = [];
    const step = (to - timeWalker) / count;

    for (let i = 0; i < count; i++) {
      events.push({
        time: timeWalker,
        text: 'This is the text, <a href="https://grafana.com">Grafana.com</a>',
        tags: ['text', 'server']
      });
      timeWalker += step;
    }

    return events;
  }

  annotationQuery(options) {
    return Promise.resolve(this.buildFakeAnnotationEvents(options.range, 10));
  }

  getQueryDisplayText(query) {
    var _query$scenarioId;

    const scenario = (_query$scenarioId = query.scenarioId) !== null && _query$scenarioId !== void 0 ? _query$scenarioId : 'Default scenario';

    if (query.alias) {
      return scenario + ' as ' + query.alias;
    }

    return scenario;
  }

  testDatasource() {
    return Promise.resolve({
      status: 'success',
      message: 'Data source is working'
    });
  }

  getScenarios() {
    if (!this.scenariosCache) {
      this.scenariosCache = this.getResource('scenarios');
    }

    return this.scenariosCache;
  }

  variablesQuery(target, options) {
    var _target$stringInput;

    const query = (_target$stringInput = target.stringInput) !== null && _target$stringInput !== void 0 ? _target$stringInput : '';
    const interpolatedQuery = this.templateSrv.replace(query, (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_2__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '*',
      options: options.scopedVars
    }));
    const children = (0,_metricTree__WEBPACK_IMPORTED_MODULE_3__.queryMetricTree)(interpolatedQuery);
    const items = children.map(item => ({
      value: item.name,
      text: item.name
    }));
    const dataFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(items);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      data: [dataFrame]
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
  }

  nodesQuery(target, options) {
    var _target$nodes, _target$nodes2;

    const type = ((_target$nodes = target.nodes) === null || _target$nodes === void 0 ? void 0 : _target$nodes.type) || 'random';
    let frames;

    switch (type) {
      case 'random':
        frames = (0,_nodeGraphUtils__WEBPACK_IMPORTED_MODULE_4__.generateRandomNodes)((_target$nodes2 = target.nodes) === null || _target$nodes2 === void 0 ? void 0 : _target$nodes2.count);
        break;

      case 'response':
        frames = (0,_nodeGraphUtils__WEBPACK_IMPORTED_MODULE_4__.savedNodesResponse)();
        break;

      default:
        throw new Error(`Unknown node_graph sub type ${type}`);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
      data: frames
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
  }

  rawFrameQuery(target, options) {
    try {
      var _target$rawFrameConte;

      const data = JSON.parse((_target$rawFrameConte = target.rawFrameContent) !== null && _target$rawFrameConte !== void 0 ? _target$rawFrameConte : '[]').map(v => {
        const f = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.toDataFrame)(v);
        f.refId = target.refId;
        return f;
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data,
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
    } catch (ex) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data: [],
        error: ex
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.delay)(100));
    }
  }

  serverErrorQuery(target, options) {
    var _target$stringInput2;

    const {
      errorType
    } = target;
    console.log("we're here!", target);

    if (errorType === 'server_panic') {
      return null;
    }

    const stringInput = (_target$stringInput2 = target.stringInput) !== null && _target$stringInput2 !== void 0 ? _target$stringInput2 : '';

    if (stringInput === '') {
      if (errorType === 'frontend_exception') {
        throw new Error('Scenario threw an exception in the frontend because the input was empty.');
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => new Error('Scenario returned an error because the input was empty.'));
      }
    }

    return null;
  }

}

function runGrafanaAPI(target, req) {
  const url = `/api/${target.stringInput}`;
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.from)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(url).then(res => {
    const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(res);
    return {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
      data: [frame]
    };
  }));
}

let liveQueryCounter = 1000;

function runGrafanaLiveQuery(target, req) {
  if (!target.channel) {
    throw new Error(`Missing channel config`);
  }

  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getGrafanaLiveSrv)().getDataStream({
    addr: {
      scope: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LiveChannelScope.Plugin,
      namespace: 'testdata',
      path: target.channel
    },
    key: `testStream.${liveQueryCounter++}`
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/metricTree.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryMetricTree": () => (/* binding */ queryMetricTree)
/* harmony export */ });
/*
 *  Builds a nested tree like
 *  [
 *    {
 *      name: 'A',
 *      children: [
 *        { name: 'AA', children: [] },
 *        { name: 'AB', children: [] },
 *      ]
 *    }
 *  ]
 */
function buildMetricTree(parent, depth) {
  const chars = ['A', 'B', 'C'];
  const children = [];

  if (depth > 5) {
    return [];
  }

  for (const letter of chars) {
    const nodeName = `${parent}${letter}`;
    children.push({
      name: nodeName,
      children: buildMetricTree(nodeName, depth + 1)
    });
  }

  return children;
}

function queryTree(children, query, queryIndex) {
  if (queryIndex >= query.length) {
    return children;
  }

  if (query[queryIndex] === '*') {
    return children;
  }

  const nodeQuery = query[queryIndex];
  let result = [];
  let namesToMatch = [nodeQuery]; // handle glob queries

  if (nodeQuery.startsWith('{')) {
    namesToMatch = nodeQuery.replace(/\{|\}/g, '').split(',');
  }

  for (const node of children) {
    for (const nameToMatch of namesToMatch) {
      if (nameToMatch.indexOf('*') !== -1) {
        const pattern = nameToMatch.replace('*', '');
        const regex = new RegExp(`^${pattern}.*`, 'gi');

        if (regex.test(node.name)) {
          result = result.concat(queryTree([node], query, queryIndex + 1));
        }
      } else if (node.name === nameToMatch) {
        result = result.concat(queryTree(node.children, query, queryIndex + 1));
      }
    }
  }

  return result;
}

function queryMetricTree(query) {
  if (query.indexOf('value') === 0) {
    return [{
      name: query,
      children: []
    }];
  }

  const children = buildMetricTree('', 0);
  return queryTree(children, query.split('.'), 0);
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/testdata/ConfigEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/testdata/QueryEditor.tsx");
/* harmony import */ var _TestInfoTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/testdata/TestInfoTab.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/datasource.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class TestDataAnnotationsQueryCtrl {
  constructor() {
    _defineProperty(this, "annotation", void 0);
  }

}

_defineProperty(TestDataAnnotationsQueryCtrl, "template", '<h2>Annotation scenario</h2>');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_4__.TestDataDataSource).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor).setQueryEditor(_QueryEditor__WEBPACK_IMPORTED_MODULE_2__.QueryEditor).setAnnotationQueryCtrl(TestDataAnnotationsQueryCtrl).addConfigPage({
  title: 'Setup',
  icon: 'list-ul',
  body: _TestInfoTab__WEBPACK_IMPORTED_MODULE_3__.TestInfoTab,
  id: 'setup'
});

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/nodeGraphUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateRandomNodes": () => (/* binding */ generateRandomNodes),
/* harmony export */   "savedNodesResponse": () => (/* binding */ savedNodesResponse)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _testData_serviceMapResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/testdata/testData/serviceMapResponse.ts");


function generateRandomNodes(count = 10) {
  const nodes = [];
  const root = {
    id: '0',
    title: 'root',
    subTitle: 'client',
    success: 1,
    error: 0,
    stat1: Math.random(),
    stat2: Math.random(),
    edges: []
  };
  nodes.push(root);
  const nodesWithoutMaxEdges = [root];
  const maxEdges = 3;

  for (let i = 1; i < count; i++) {
    const node = makeRandomNode(i);
    nodes.push(node);
    const sourceIndex = Math.floor(Math.random() * Math.floor(nodesWithoutMaxEdges.length - 1));
    const source = nodesWithoutMaxEdges[sourceIndex];
    source.edges.push(node.id);

    if (source.edges.length >= maxEdges) {
      nodesWithoutMaxEdges.splice(sourceIndex, 1);
    }

    nodesWithoutMaxEdges.push(node);
  } // Add some random edges to create possible cycle


  const additionalEdges = Math.floor(count / 2);

  for (let i = 0; i <= additionalEdges; i++) {
    const sourceIndex = Math.floor(Math.random() * Math.floor(nodes.length - 1));
    const targetIndex = Math.floor(Math.random() * Math.floor(nodes.length - 1));

    if (sourceIndex === targetIndex || nodes[sourceIndex].id === '0' || nodes[sourceIndex].id === '0') {
      continue;
    }

    nodes[sourceIndex].edges.push(nodes[sourceIndex].id);
  }

  const nodeFields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayName: 'Transactions per second'
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayName: 'Average duration'
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success']: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          fixedColor: 'green',
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
        },
        displayName: 'Success'
      }
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'errors']: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          fixedColor: 'red',
          mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
        },
        displayName: 'Errors'
      }
    }
  };
  const nodeFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    name: 'nodes',
    fields: Object.keys(nodeFields).map(key => Object.assign({}, nodeFields[key], {
      name: key
    })),
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgeFields = {
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    },
    [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: {
      values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayVector(),
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }
  };
  const edgesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    name: 'edges',
    fields: Object.keys(edgeFields).map(key => Object.assign({}, edgeFields[key], {
      name: key
    })),
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgesSet = new Set();

  for (const node of nodes) {
    nodeFields.id.values.add(node.id);
    nodeFields.title.values.add(node.title);
    nodeFields.subTitle.values.add(node.subTitle);
    nodeFields.mainStat.values.add(node.stat1);
    nodeFields.secondaryStat.values.add(node.stat2);
    nodeFields.arc__success.values.add(node.success);
    nodeFields.arc__errors.values.add(node.error);

    for (const edge of node.edges) {
      const id = `${node.id}--${edge}`; // We can have duplicate edges when we added some more by random

      if (edgesSet.has(id)) {
        continue;
      }

      edgesSet.add(id);
      edgeFields.id.values.add(`${node.id}--${edge}`);
      edgeFields.source.values.add(node.id);
      edgeFields.target.values.add(edge);
    }
  }

  return [nodeFrame, edgesFrame];
}

function makeRandomNode(index) {
  const success = Math.random();
  const error = 1 - success;
  return {
    id: index.toString(),
    title: `service:${index}`,
    subTitle: 'service',
    success,
    error,
    stat1: Math.random(),
    stat2: Math.random(),
    edges: []
  };
}

function savedNodesResponse() {
  return [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame(_testData_serviceMapResponse__WEBPACK_IMPORTED_MODULE_1__.nodes), new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame(_testData_serviceMapResponse__WEBPACK_IMPORTED_MODULE_1__.edges)];
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/runStreams.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultStreamQuery": () => (/* binding */ defaultStreamQuery),
/* harmony export */   "runFetchStream": () => (/* binding */ runFetchStream),
/* harmony export */   "runLogsStream": () => (/* binding */ runLogsStream),
/* harmony export */   "runSignalStream": () => (/* binding */ runSignalStream),
/* harmony export */   "runStream": () => (/* binding */ runStream)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
/* harmony import */ var app_features_live_data_StreamingDataFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/live/data/StreamingDataFrame.ts");
/* harmony import */ var _LogIpsum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/testdata/LogIpsum.ts");






const defaultStreamQuery = {
  type: 'signal',
  speed: 250,
  // ms
  spread: 3.5,
  noise: 2.2,
  bands: 1
};
function runStream(target, req) {
  const query = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaults)(target.stream, defaultStreamQuery);

  if ('signal' === query.type) {
    return runSignalStream(target, query, req);
  }

  if ('logs' === query.type) {
    return runLogsStream(target, query, req);
  }

  if ('fetch' === query.type) {
    return runFetchStream(target, query, req);
  }

  throw new Error(`Unknown Stream Type: ${query.type}`);
}
function runSignalStream(target, query, req) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    var _target$alias;

    const streamId = `signal-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    const schema = {
      refId: target.refId,
      fields: [{
        name: 'time',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
      }, {
        name: (_target$alias = target.alias) !== null && _target$alias !== void 0 ? _target$alias : 'value',
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
      }]
    };
    const {
      spread,
      speed,
      bands = 0,
      noise
    } = query;

    for (let i = 0; i < bands; i++) {
      const suffix = bands > 1 ? ` ${i + 1}` : '';
      schema.fields.push({
        name: 'Min' + suffix,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
      });
      schema.fields.push({
        name: 'Max' + suffix,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
      });
    }

    const frame = app_features_live_data_StreamingDataFrame__WEBPACK_IMPORTED_MODULE_3__.StreamingDataFrame.fromDataFrameJSON({
      schema
    }, {
      maxLength: maxDataPoints
    });
    let value = Math.random() * 100;
    let timeoutId = null;
    let lastSent = -1;

    const addNextRow = time => {
      value += (Math.random() - 0.5) * spread;
      const data = {
        values: [[time], [value]]
      };
      let min = value;
      let max = value;

      for (let i = 0; i < bands; i++) {
        min = min - Math.random() * noise;
        max = max + Math.random() * noise;
        data.values.push([min]);
        data.values.push([max]);
      }

      const event = {
        data
      };
      return frame.push(event);
    }; // Fill the buffer on init


    if (true) {
      let time = Date.now() - maxDataPoints * speed;

      for (let i = 0; i < maxDataPoints; i++) {
        addNextRow(time);
        time += speed;
      }
    }

    const pushNextEvent = () => {
      addNextRow(Date.now());
      const elapsed = app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_2__.liveTimer.lastUpdate - lastSent;

      if (elapsed > 1000 || app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_2__.liveTimer.ok) {
        subscriber.next({
          data: [frame],
          key: streamId,
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Streaming
        });
        lastSent = app_features_dashboard_dashgrid_liveTimer__WEBPACK_IMPORTED_MODULE_2__.liveTimer.lastUpdate;
      }

      timeoutId = setTimeout(pushNextEvent, speed);
    }; // Send first event in 5ms


    setTimeout(pushNextEvent, 5);
    return () => {
      console.log('unsubscribing to stream ' + streamId);
      clearTimeout(timeoutId);
    };
  });
}
function runLogsStream(target, query, req) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const streamId = `logs-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    const data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({
      append: 'tail',
      capacity: maxDataPoints
    });
    data.refId = target.refId;
    data.name = target.alias || 'Logs ' + target.refId;
    data.addField({
      name: 'line',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    });
    data.addField({
      name: 'time',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time
    });
    data.meta = {
      preferredVisualisationType: 'logs'
    };
    const {
      speed
    } = query;
    let timeoutId = null;

    const pushNextEvent = () => {
      data.fields[0].values.add(Date.now());
      data.fields[1].values.add((0,_LogIpsum__WEBPACK_IMPORTED_MODULE_4__.getRandomLine)());
      subscriber.next({
        data: [data],
        key: streamId
      });
      timeoutId = setTimeout(pushNextEvent, speed);
    }; // Send first event in 5ms


    setTimeout(pushNextEvent, 5);
    return () => {
      console.log('unsubscribing to stream ' + streamId);
      clearTimeout(timeoutId);
    };
  });
}
function runFetchStream(target, query, req) {
  return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
    const streamId = `fetch-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    let data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({
      append: 'tail',
      capacity: maxDataPoints
    });
    data.refId = target.refId;
    data.name = target.alias || 'Fetch ' + target.refId;
    let reader;
    const csv = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CSVReader({
      callback: {
        onHeader: fields => {
          // Clear any existing fields
          if (data.fields.length) {
            data = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.CircularDataFrame({
              append: 'tail',
              capacity: maxDataPoints
            });
            data.refId = target.refId;
            data.name = 'Fetch ' + target.refId;
          }

          for (const field of fields) {
            data.addField(field);
          }
        },
        onRow: row => {
          data.add(row);
        }
      }
    });

    const processChunk = value => {
      if (value.value) {
        const text = new TextDecoder().decode(value.value);
        csv.readCSV(text);
      }

      subscriber.next({
        data: [data],
        key: streamId,
        state: value.done ? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done : _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Streaming
      });

      if (value.done) {
        console.log('Finished stream');
        subscriber.complete(); // necessary?

        return;
      }

      return reader.read().then(processChunk);
    };

    if (!query.url) {
      throw new Error('query.url is not defined');
    }

    fetch(new Request(query.url)).then(response => {
      if (response.body) {
        reader = response.body.getReader();
        reader.read().then(processChunk);
      }
    });
    return () => {
      // Cancel fetch?
      console.log('unsubscribing to stream ' + streamId);
    };
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/testData/serviceMapResponse.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "edges": () => (/* binding */ edges),
/* harmony export */   "nodes": () => (/* binding */ nodes)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

const nodes = {
  fields: [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      links: [{
        title: 'Traces/All',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}"))'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/OK',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { ok = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Errors',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { error = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Faults',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { fault = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }]
    },
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      displayName: 'Name'
    },
    values: ['auth', 'products', 'customers', 'orders', 'products', 'orders', 'api', 'shipping', 'orders', 'execute-api', 'shipping', 'www', 'api', 'www', 'products']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      displayName: 'Type'
    },
    values: ['Compute', 'SQL', 'SQL', 'SQL', 'remote', 'Function', 'Compute', 'Function', 'Function', 'remote', 'Function', 'Compute', 'client', 'client', 'Compute']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      unit: 'ms/t',
      displayName: 'Average response time'
    },
    values: [3.5394042646735553, 15.906441318223264, 4.913011921591567, 7.4163203042094095, 1092, 22.85961441405067, 56.135855729084696, 4.45946191601527, 12.818300278280843, 4.25, 12.565442646791492, 77.63447512700567, 40.387096774193544, 77.63447512700567, 27.648950187374872]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      unit: 't/min',
      displayName: 'Transactions per minute'
    },
    values: [50.56317154501667, 682.4, 512.8416666666667, 125.64444444444445, 0.005585812037424941, 137.59722222222223, 300.0527777777778, 30.582348853370394, 125.77222222222223, 0.028706417080318163, 30.582348853370394, 165.675, 0.100021510002151, 165.675, 162.33055555555555]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'green'
      },
      displayName: 'Sucesss'
    },
    values: [0.9338865684765882, 1, 1, 1, 0.5, 1, 0.9901128505170387, 0.9069260134520997, 1, 0, 0.9069260134520997, 0.9624432037288534, 0, 0.9624432037288534, 0.9824945669843769]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'faults',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'red'
      },
      displayName: 'Faults'
    },
    values: [0, 0, 0, 0, 0.5, 0, 0.009479813736472288, 0, 0, 0, 0, 0.017168821152524185, 0, 0.017168821152524185, 0.01750543301562313]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'errors',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'semi-dark-yellow'
      },
      displayName: 'Errors'
    },
    values: [0.06611343152341174, 0, 0, 0, 0, 0, 0.0004073357464890436, 0.09307398654790038, 0, 1, 0.09307398654790038, 0.02038797511862247, 1, 0.02038797511862247, 0]
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'throttled',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      color: {
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
        fixedColor: 'purple'
      },
      displayName: 'Throttled'
    },
    values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }],
  meta: {
    preferredVisualisationType: 'nodeGraph'
  },
  name: 'nodes'
};
const edges = {
  fields: [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      links: [{
        title: 'Traces/All',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}")'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/OK',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { ok = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Errors',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { error = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }, {
        title: 'Traces/Faults',
        url: '',
        internal: {
          query: {
            queryType: 'getTraceSummaries',
            query: 'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { fault = true }'
          },
          datasourceUid: 'Ax4erxHGz',
          datasourceName: 'Trace data source'
        }
      }]
    },
    values: ['0__2', '5__8', '6__0', '6__5', '6__9', '6__2', '6__14', '6__4', '8__3', '10__7', '11__0', '11__6', '12__6', '13__11', '14__1', '14__2', '14__10']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: [0, 5, 6, 6, 6, 6, 6, 6, 8, 10, 11, 11, 12, 13, 14, 14, 14]
  }, {
    name: 'sourceName',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: ['auth', 'orders', 'api', 'api', 'api', 'api', 'api', 'api', 'orders', 'shipping', 'www', 'www', 'api', 'www', 'products', 'products', 'products']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: [2, 8, 0, 5, 9, 2, 14, 4, 3, 7, 0, 6, 6, 11, 1, 2, 10]
  }, {
    name: 'targetName',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {},
    values: ['customers', 'orders', 'auth', 'orders', 'execute-api', 'customers', 'products', 'products', 'orders', 'shipping', 'auth', 'api', 'api', 'www', 'products', 'customers', 'shipping']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
    config: {
      displayName: 'Response percentage'
    },
    values: ['Success 100.00%', 'Success 100.00%', 'Success 100.00%', 'Success 100.00%', 'Errors 100.00%', 'Success 100.00%', 'Faults 1.75%', 'Faults 50.00%', 'Success 100.00%', 'Errors 9.31%', 'Errors 6.62%', 'Faults 1.13%', 'Errors 100.00%', 'Faults 1.72%', 'Success 100.00%', 'Success 100.00%', 'Faults 9.30%']
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
    config: {
      unit: 't/min',
      displayName: 'Transactions per minute'
    },
    values: [50.56317154501667, 125.77222222222223, 0.03333333333333333, 137.59722222222223, 0.022222222222222223, 299.96666666666664, 162.33055555555555, 0.005555555555555556, 125.64444444444445, 30.582348853370394, 50.51111111111111, 299.9166666666667, 0.100021510002151, 165.675, 682.4, 162.33055555555555, 30.558333333333334]
  }],
  meta: {
    preferredVisualisationType: 'nodeGraph'
  },
  name: 'edges'
};

/***/ }),

/***/ "./public/app/plugins/datasource/testdata/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestDataVariableSupport": () => (/* binding */ TestDataVariableSupport)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

class TestDataVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.StandardVariableSupport {
  toDataQuery(query) {
    return {
      refId: 'TestDataDataSource-QueryVariable',
      stringInput: query.query,
      scenarioId: 'variables-query',
      csvWave: undefined
    };
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUMsbUJBRGpDLEVBQ3NELGtCQUR0RCxFQUMwRSxvQkFEMUUsRUFFTixrQkFGTSxFQUVjLGtCQUZkLEVBRWtDLG9CQUZsQyxFQUV3RCxrQkFGeEQsRUFFNEUsa0JBRjVFLEVBR04saUJBSE0sRUFHYSxpQkFIYixFQUdnQyxpQkFIaEMsRUFHbUQsT0FIbkQsRUFHNEQsS0FINUQsRUFHbUUsa0JBSG5FLEVBR3VGLGtCQUh2RjtBQUpWLEdBaEtNLENBRFc7QUE0S25CdkYsRUFBQUEsSUFBSSxFQUFFO0FBQUVvRyxJQUFBQSwwQkFBMEIsRUFBRTtBQUE5QixHQTVLYTtBQTZLbkJoUixFQUFBQSxJQUFJLEVBQUU7QUE3S2EsQ0FBZDs7Ozs7Ozs7Ozs7O0FDbktQO0FBS08sTUFBTW1KLHVCQUFOLFNBQXNDb00sa0VBQXRDLENBQWtGO0FBQ3ZGQyxFQUFBQSxXQUFXLENBQUNqWSxLQUFELEVBQThDO0FBQ3ZELFdBQU87QUFDTFUsTUFBQUEsS0FBSyxFQUFFLGtDQURGO0FBRUxrQixNQUFBQSxXQUFXLEVBQUU1QixLQUFLLENBQUNBLEtBRmQ7QUFHTE0sTUFBQUEsVUFBVSxFQUFFLGlCQUhQO0FBSUw4QixNQUFBQSxPQUFPLEVBQUVpRDtBQUpKLEtBQVA7QUFNRDs7QUFSc0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvQ29uZmlnRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvTG9nSXBzdW0udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL1F1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvVGVzdEluZm9UYWIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL0NTVkNvbnRlbnRFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL0NTVkZpbGVFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL0NTVldhdmVFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL0Vycm9yRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9HcmFmYW5hTGl2ZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvTm9kZUdyYXBoRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9QcmVkaWN0YWJsZVB1bHNlRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9SYW5kb21XYWxrRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9SYXdGcmFtZUVkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Rlc3RkYXRhL2NvbXBvbmVudHMvU2ltdWxhdGlvblF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9TdHJlYW1pbmdDbGllbnRFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9jb21wb25lbnRzL1VTQVF1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9tZXRyaWNUcmVlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9tb2R1bGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS9ub2RlR3JhcGhVdGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvcnVuU3RyZWFtcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVzdGRhdGEvdGVzdERhdGEvc2VydmljZU1hcFJlc3BvbnNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZXN0ZGF0YS92YXJpYWJsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG50eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxhbnk+O1xuXG4vKipcbiAqIEVtcHR5IENvbmZpZyBFZGl0b3IgLS0gc2V0dGluZ3MgdG8gc2F2ZVxuICovXG5leHBvcnQgY2xhc3MgQ29uZmlnRWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH1cbn1cbiIsImltcG9ydCB7IExvZ0xldmVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmxldCBpbmRleCA9IDA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21Mb2dMZXZlbCgpOiBMb2dMZXZlbCB7XG4gIGNvbnN0IHYgPSBNYXRoLnJhbmRvbSgpO1xuICBpZiAodiA+IDAuOSkge1xuICAgIHJldHVybiBMb2dMZXZlbC5jcml0aWNhbDtcbiAgfVxuICBpZiAodiA+IDAuOCkge1xuICAgIHJldHVybiBMb2dMZXZlbC5lcnJvcjtcbiAgfVxuICBpZiAodiA+IDAuNykge1xuICAgIHJldHVybiBMb2dMZXZlbC53YXJuaW5nO1xuICB9XG4gIGlmICh2ID4gMC40KSB7XG4gICAgcmV0dXJuIExvZ0xldmVsLmluZm87XG4gIH1cbiAgaWYgKHYgPiAwLjMpIHtcbiAgICByZXR1cm4gTG9nTGV2ZWwuZGVidWc7XG4gIH1cbiAgaWYgKHYgPiAwLjEpIHtcbiAgICByZXR1cm4gTG9nTGV2ZWwudHJhY2U7XG4gIH1cbiAgcmV0dXJuIExvZ0xldmVsLnVua25vd247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0V29yZCgpIHtcbiAgaW5kZXggPSAoaW5kZXggKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSkgJSB3b3Jkcy5sZW5ndGg7XG4gIHJldHVybiB3b3Jkc1tpbmRleF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21MaW5lKGxlbmd0aCA9IDYwKSB7XG4gIGxldCBsaW5lID0gZ2V0TmV4dFdvcmQoKTtcbiAgd2hpbGUgKGxpbmUubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgbGluZSArPSAnICcgKyBnZXROZXh0V29yZCgpO1xuICB9XG4gIHJldHVybiBsaW5lO1xufVxuXG5jb25zdCB3b3JkcyA9IFtcbiAgJ0F0JyxcbiAgJ3Zlcm8nLFxuICAnZW9zJyxcbiAgJ2V0JyxcbiAgJ2FjY3VzYW11cycsXG4gICdldCcsXG4gICdpdXN0bycsXG4gICdvZGlvJyxcbiAgJ2RpZ25pc3NpbW9zJyxcbiAgJ2R1Y2ltdXMnLFxuICAncXVpJyxcbiAgJ2JsYW5kaXRpaXMnLFxuICAncHJhZXNlbnRpdW0nLFxuICAndm9sdXB0YXR1bScsXG4gICdkZWxlbml0aScsXG4gICdhdHF1ZScsXG4gICdjb3JydXB0aScsXG4gICdxdW9zJyxcbiAgJ2RvbG9yZXMnLFxuICAnZXQnLFxuICAncXVhcycsXG4gICdtb2xlc3RpYXMnLFxuICAnZXhjZXB0dXJpJyxcbiAgJ3NpbnQnLFxuICAnb2NjYWVjYXRpJyxcbiAgJ2N1cGlkaXRhdGUnLFxuICAnbm9uJyxcbiAgJ3Byb3ZpZGVudCcsXG4gICdzaW1pbGlxdWUnLFxuICAnc3VudCcsXG4gICdpbicsXG4gICdjdWxwYScsXG4gICdxdWknLFxuICAnb2ZmaWNpYScsXG4gICdkZXNlcnVudCcsXG4gICdtb2xsaXRpYScsXG4gICdhbmltaScsXG4gICdpZCcsXG4gICdlc3QnLFxuICAnbGFib3J1bScsXG4gICdldCcsXG4gICdkb2xvcnVtJyxcbiAgJ2Z1Z2EnLFxuICAnRXQnLFxuICAnaGFydW0nLFxuICAncXVpZGVtJyxcbiAgJ3JlcnVtJyxcbiAgJ2ZhY2lsaXMnLFxuICAnZXN0JyxcbiAgJ2V0JyxcbiAgJ2V4cGVkaXRhJyxcbiAgJ2Rpc3RpbmN0aW8nLFxuICAnTmFtJyxcbiAgJ2xpYmVybycsXG4gICd0ZW1wb3JlJyxcbiAgJ2N1bScsXG4gICdzb2x1dGEnLFxuICAnbm9iaXMnLFxuICAnZXN0JyxcbiAgJ2VsaWdlbmRpJyxcbiAgJ29wdGlvJyxcbiAgJ2N1bXF1ZScsXG4gICduaWhpbCcsXG4gICdpbXBlZGl0JyxcbiAgJ3F1bycsXG4gICdtaW51cycsXG4gICdpZCcsXG4gICdxdW9kJyxcbiAgJ21heGltZScsXG4gICdwbGFjZWF0JyxcbiAgJ2ZhY2VyZScsXG4gICdwb3NzaW11cycsXG4gICdvbW5pcycsXG4gICd2b2x1cHRhcycsXG4gICdhc3N1bWVuZGEnLFxuICAnZXN0JyxcbiAgJ29tbmlzJyxcbiAgJ2RvbG9yJyxcbiAgJ3JlcGVsbGVuZHVzJyxcbiAgJ1RlbXBvcmlidXMnLFxuICAnYXV0ZW0nLFxuICAncXVpYnVzZGFtJyxcbiAgJ2V0JyxcbiAgJ2F1dCcsXG4gICdvZmZpY2lpcycsXG4gICdkZWJpdGlzJyxcbiAgJ2F1dCcsXG4gICdyZXJ1bScsXG4gICduZWNlc3NpdGF0aWJ1cycsXG4gICdzYWVwZScsXG4gICdldmVuaWV0JyxcbiAgJ3V0JyxcbiAgJ2V0JyxcbiAgJ3ZvbHVwdGF0ZXMnLFxuICAncmVwdWRpYW5kYWUnLFxuICAnc2ludCcsXG4gICdldCcsXG4gICdtb2xlc3RpYWUnLFxuICAnbm9uJyxcbiAgJ3JlY3VzYW5kYWUnLFxuICAnSXRhcXVlJyxcbiAgJ2VhcnVtJyxcbiAgJ3JlcnVtJyxcbiAgJ2hpYycsXG4gICd0ZW5ldHVyJyxcbiAgJ2EnLFxuICAnc2FwaWVudGUnLFxuICAnZGVsZWN0dXMnLFxuICAndXQnLFxuICAnYXV0JyxcbiAgJ3JlaWNpZW5kaXMnLFxuICAndm9sdXB0YXRpYnVzJyxcbiAgJ21haW9yZXMnLFxuICAnYWxpYXMnLFxuICAnY29uc2VxdWF0dXInLFxuICAnYXV0JyxcbiAgJ3BlcmZlcmVuZGlzJyxcbiAgJ2RvbG9yaWJ1cycsXG4gICdhc3BlcmlvcmVzJyxcbiAgJ3JlcGVsbGF0Jyxcbl07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcywgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgYXMgZWRpdG9yU2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElubGluZVN3aXRjaCwgSW5wdXQsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJhbmRvbVdhbGtFZGl0b3IsIFN0cmVhbWluZ0NsaWVudEVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBDU1ZDb250ZW50RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0NTVkNvbnRlbnRFZGl0b3InO1xuaW1wb3J0IHsgQ1NWRmlsZUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9DU1ZGaWxlRWRpdG9yJztcbmltcG9ydCB7IENTVldhdmVzRWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL0NTVldhdmVFZGl0b3InO1xuaW1wb3J0IEVycm9yRWRpdG9yIGZyb20gJy4vY29tcG9uZW50cy9FcnJvckVkaXRvcic7XG5pbXBvcnQgeyBHcmFmYW5hTGl2ZUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9HcmFmYW5hTGl2ZUVkaXRvcic7XG5pbXBvcnQgeyBOb2RlR3JhcGhFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvTm9kZUdyYXBoRWRpdG9yJztcbmltcG9ydCB7IFByZWRpY3RhYmxlUHVsc2VFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvUHJlZGljdGFibGVQdWxzZUVkaXRvcic7XG5pbXBvcnQgeyBSYXdGcmFtZUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9SYXdGcmFtZUVkaXRvcic7XG5pbXBvcnQgeyBTaW11bGF0aW9uUXVlcnlFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvU2ltdWxhdGlvblF1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IFVTQVF1ZXJ5RWRpdG9yLCB1c2FRdWVyeU1vZGVzIH0gZnJvbSAnLi9jb21wb25lbnRzL1VTQVF1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IGRlZmF1bHRDU1ZXYXZlUXVlcnksIGRlZmF1bHRQdWxzZVF1ZXJ5LCBkZWZhdWx0UXVlcnkgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBUZXN0RGF0YURhdGFTb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgZGVmYXVsdFN0cmVhbVF1ZXJ5IH0gZnJvbSAnLi9ydW5TdHJlYW1zJztcbmltcG9ydCB7IENTVldhdmUsIE5vZGVzUXVlcnksIFRlc3REYXRhUXVlcnksIFVTQVF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHNob3dMYWJlbHNGb3IgPSBbJ3JhbmRvbV93YWxrJywgJ3ByZWRpY3RhYmxlX3B1bHNlJ107XG5jb25zdCBlbmRwb2ludHMgPSBbXG4gIHsgdmFsdWU6ICdkYXRhc291cmNlcycsIGxhYmVsOiAnRGF0YSBTb3VyY2VzJyB9LFxuICB7IHZhbHVlOiAnc2VhcmNoJywgbGFiZWw6ICdTZWFyY2gnIH0sXG4gIHsgdmFsdWU6ICdhbm5vdGF0aW9ucycsIGxhYmVsOiAnQW5ub3RhdGlvbnMnIH0sXG5dO1xuXG5jb25zdCBzZWxlY3RvcnMgPSBlZGl0b3JTZWxlY3RvcnMuY29tcG9uZW50cy5EYXRhU291cmNlLlRlc3REYXRhLlF1ZXJ5VGFiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvclByb3BzIHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xuICBxdWVyeTogVGVzdERhdGFRdWVyeTtcbiAgZHM6IFRlc3REYXRhRGF0YVNvdXJjZTtcbn1cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPFRlc3REYXRhRGF0YVNvdXJjZSwgVGVzdERhdGFRdWVyeT47XG5cbmV4cG9ydCBjb25zdCBRdWVyeUVkaXRvciA9ICh7IHF1ZXJ5LCBkYXRhc291cmNlLCBvbkNoYW5nZSwgb25SdW5RdWVyeSB9OiBQcm9wcykgPT4ge1xuICBxdWVyeSA9IHsgLi4uZGVmYXVsdFF1ZXJ5LCAuLi5xdWVyeSB9O1xuXG4gIGNvbnN0IHsgbG9hZGluZywgdmFsdWU6IHNjZW5hcmlvTGlzdCB9ID0gdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgIC8vIG1pZ3JhdGUgbWFudWFsX2VudHJ5ICh1bnVzYWJsZSBzaW5jZSA3LCByZW1vdmVkIGluIDgpXG4gICAgaWYgKHF1ZXJ5LnNjZW5hcmlvSWQgPT09ICdtYW51YWxfZW50cnknICYmIChxdWVyeSBhcyBhbnkpLnBvaW50cykge1xuICAgICAgbGV0IGNzdkNvbnRlbnQgPSAnVGltZSxWYWx1ZVxcbic7XG4gICAgICBmb3IgKGNvbnN0IHBvaW50IG9mIChxdWVyeSBhcyBhbnkpLnBvaW50cykge1xuICAgICAgICBjc3ZDb250ZW50ICs9IGAke3BvaW50WzFdfSwke3BvaW50WzBdfVxcbmA7XG4gICAgICB9XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIHJlZklkOiBxdWVyeS5yZWZJZCxcbiAgICAgICAgZGF0YXNvdXJjZTogcXVlcnkuZGF0YXNvdXJjZSxcbiAgICAgICAgc2NlbmFyaW9JZDogJ2Nzdl9jb250ZW50JyxcbiAgICAgICAgY3N2Q29udGVudCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHMgPSBhd2FpdCBkYXRhc291cmNlLmdldFNjZW5hcmlvcygpO1xuICAgIGNvbnN0IGhpZGVBbGlhcyA9IFsnc2ltdWxhdGlvbiddO1xuICAgIHJldHVybiB2YWxzLm1hcCgodikgPT4gKHtcbiAgICAgIC4uLnYsXG4gICAgICBoaWRlQWxpYXNGaWVsZDogaGlkZUFsaWFzLmluY2x1ZGVzKHYuaWQpLFxuICAgIH0pKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gKHF1ZXJ5OiBUZXN0RGF0YVF1ZXJ5KSA9PiB7XG4gICAgb25DaGFuZ2UocXVlcnkpO1xuICAgIG9uUnVuUXVlcnkoKTtcbiAgfTtcblxuICBjb25zdCBjdXJyZW50U2NlbmFyaW8gPSB1c2VNZW1vKFxuICAgICgpID0+IHNjZW5hcmlvTGlzdD8uZmluZCgoc2NlbmFyaW8pID0+IHNjZW5hcmlvLmlkID09PSBxdWVyeS5zY2VuYXJpb0lkKSxcbiAgICBbc2NlbmFyaW9MaXN0LCBxdWVyeV1cbiAgKTtcbiAgY29uc3Qgc2NlbmFyaW9JZCA9IGN1cnJlbnRTY2VuYXJpbz8uaWQ7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gY3VycmVudFNjZW5hcmlvPy5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBvblNjZW5hcmlvQ2hhbmdlID0gKGl0ZW06IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KSA9PiB7XG4gICAgY29uc3Qgc2NlbmFyaW8gPSBzY2VuYXJpb0xpc3Q/LmZpbmQoKHNjKSA9PiBzYy5pZCA9PT0gaXRlbS52YWx1ZSk7XG5cbiAgICBpZiAoIXNjZW5hcmlvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgbW9kZWwgZnJvbSBleGlzdGluZyBwcm9wcyB0aGF0IGJlbG9uZyB0byBvdGhlciBzY2VuYXJpb3NcbiAgICBjb25zdCB1cGRhdGU6IFRlc3REYXRhUXVlcnkgPSB7XG4gICAgICBzY2VuYXJpb0lkOiBpdGVtLnZhbHVlISxcbiAgICAgIHJlZklkOiBxdWVyeS5yZWZJZCxcbiAgICAgIGFsaWFzOiBxdWVyeS5hbGlhcyxcbiAgICAgIGRhdGFzb3VyY2U6IHF1ZXJ5LmRhdGFzb3VyY2UsXG4gICAgfTtcblxuICAgIGlmIChzY2VuYXJpby5zdHJpbmdJbnB1dCkge1xuICAgICAgdXBkYXRlLnN0cmluZ0lucHV0ID0gc2NlbmFyaW8uc3RyaW5nSW5wdXQ7XG4gICAgfVxuXG4gICAgc3dpdGNoIChzY2VuYXJpby5pZCkge1xuICAgICAgY2FzZSAnZ3JhZmFuYV9hcGknOlxuICAgICAgICB1cGRhdGUuc3RyaW5nSW5wdXQgPSAnZGF0YXNvdXJjZXMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmVhbWluZ19jbGllbnQnOlxuICAgICAgICB1cGRhdGUuc3RyZWFtID0gZGVmYXVsdFN0cmVhbVF1ZXJ5O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xpdmUnOlxuICAgICAgICB1cGRhdGUuY2hhbm5lbCA9ICdyYW5kb20tMnMtc3RyZWFtJzsgLy8gZGVmYXVsdCBzdHJlYW1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzaW11bGF0aW9uJzpcbiAgICAgICAgdXBkYXRlLnNpbSA9IHsga2V5OiB7IHR5cGU6ICdmbGlnaHQnLCB0aWNrOiAxMCB9IH07IC8vIGRlZmF1bHQgc3RyZWFtXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHJlZGljdGFibGVfcHVsc2UnOlxuICAgICAgICB1cGRhdGUucHVsc2VXYXZlID0gZGVmYXVsdFB1bHNlUXVlcnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHJlZGljdGFibGVfY3N2X3dhdmUnOlxuICAgICAgICB1cGRhdGUuY3N2V2F2ZSA9IGRlZmF1bHRDU1ZXYXZlUXVlcnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndXNhJzpcbiAgICAgICAgdXBkYXRlLnVzYSA9IHtcbiAgICAgICAgICBtb2RlOiB1c2FRdWVyeU1vZGVzWzBdLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHVwZGF0ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgdHlwZSB9ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgbGV0IG5ld1ZhbHVlOiBhbnkgPSB2YWx1ZTtcblxuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgbmV3VmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChuYW1lID09PSAnbGV2ZWxDb2x1bW4nKSB7XG4gICAgICBuZXdWYWx1ZSA9IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHsgLi4ucXVlcnksIFtuYW1lXTogbmV3VmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25GaWVsZENoYW5nZSA9IChmaWVsZDogc3RyaW5nKSA9PiAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCB0eXBlIH0gPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGxldCBuZXdWYWx1ZTogYW55ID0gdmFsdWU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIG5ld1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh7IC4uLnF1ZXJ5LCBbZmllbGRdOiB7IC4uLihxdWVyeSBhcyBhbnkpW2ZpZWxkXSwgW25hbWVdOiBuZXdWYWx1ZSB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uRW5kUG9pbnRDaGFuZ2UgPSAoeyB2YWx1ZSB9OiBTZWxlY3RhYmxlVmFsdWUpID0+IHtcbiAgICBvblVwZGF0ZSh7IC4uLnF1ZXJ5LCBzdHJpbmdJbnB1dDogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25TdHJlYW1DbGllbnRDaGFuZ2UgPSBvbkZpZWxkQ2hhbmdlKCdzdHJlYW0nKTtcbiAgY29uc3Qgb25QdWxzZVdhdmVDaGFuZ2UgPSBvbkZpZWxkQ2hhbmdlKCdwdWxzZVdhdmUnKTtcbiAgY29uc3Qgb25VU0FTdGF0c0NoYW5nZSA9ICh1c2E/OiBVU0FRdWVyeSkgPT4ge1xuICAgIG9uVXBkYXRlKHsgLi4ucXVlcnksIHVzYSB9KTtcbiAgfTtcblxuICBjb25zdCBvbkNTVldhdmVDaGFuZ2UgPSAoY3N2V2F2ZT86IENTVldhdmVbXSkgPT4ge1xuICAgIG9uVXBkYXRlKHsgLi4ucXVlcnksIGNzdldhdmUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIChzY2VuYXJpb0xpc3QgfHwgW10pXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+ICh7IGxhYmVsOiBpdGVtLm5hbWUsIHZhbHVlOiBpdGVtLmlkIH0pKVxuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sYWJlbC5sb2NhbGVDb21wYXJlKGIubGFiZWwpKSxcbiAgICBbc2NlbmFyaW9MaXN0XVxuICApO1xuICBjb25zdCBzaG93TGFiZWxzID0gdXNlTWVtbygoKSA9PiBzaG93TGFiZWxzRm9yLmluY2x1ZGVzKHF1ZXJ5LnNjZW5hcmlvSWQgPz8gJycpLCBbcXVlcnldKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElubGluZUZpZWxkUm93IGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5zY2VuYXJpb1NlbGVjdENvbnRhaW5lcn0+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbFdpZHRoPXsxNH0gbGFiZWw9XCJTY2VuYXJpb1wiPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIGlucHV0SWQ9e2B0ZXN0LWRhdGEtc2NlbmFyaW8tc2VsZWN0LSR7cXVlcnkucmVmSWR9YH1cbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSBxdWVyeS5zY2VuYXJpb0lkKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNjZW5hcmlvQ2hhbmdlfVxuICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIHtjdXJyZW50U2NlbmFyaW8/LnN0cmluZ0lucHV0ICYmIChcbiAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJTdHJpbmcgSW5wdXRcIj5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICAgIGlkPXtgc3RyaW5nSW5wdXQtJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgICBuYW1lPVwic3RyaW5nSW5wdXRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cXVlcnkuc3RyaW5nSW5wdXR9XG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zdHJpbmdJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICl9XG4gICAgICAgIHtCb29sZWFuKCFjdXJyZW50U2NlbmFyaW8/LmhpZGVBbGlhc0ZpZWxkKSAmJiAoXG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQWxpYXNcIiBsYWJlbFdpZHRoPXsxNH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgICAgICBpZD17YGFsaWFzLSR7cXVlcnkucmVmSWR9YH1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm9wdGlvbmFsXCJcbiAgICAgICAgICAgICAgcGF0dGVybj0nW148PiZcXFxcXCJdKydcbiAgICAgICAgICAgICAgbmFtZT1cImFsaWFzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LmFsaWFzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgKX1cbiAgICAgICAge3Nob3dMYWJlbHMgJiYgKFxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJMYWJlbHNcIlxuICAgICAgICAgICAgbGFiZWxXaWR0aD17MTR9XG4gICAgICAgICAgICB0b29sdGlwPXtcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICBTZXQgbGFiZWxzIHVzaW5nIGEga2V5PXZhbHVlIHN5bnRheDpcbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICB7YHsga2V5ID0gXCJ2YWx1ZVwiLCBrZXkyID0gXCJ2YWx1ZVwiIH1gfVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIGtleT0mcXVvdDt2YWx1ZSZxdW90Oywga2V5Mj0mcXVvdDt2YWx1ZSZxdW90O1xuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIGtleT12YWx1ZSwga2V5Mj12YWx1ZVxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgICAgICBpZD17YGxhYmVscy0ke3F1ZXJ5LnJlZklkfWB9XG4gICAgICAgICAgICAgIG5hbWU9XCJsYWJlbHNcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5Py5sYWJlbHN9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwia2V5PXZhbHVlLCBrZXkyPXZhbHVlMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICl9XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICB7c2NlbmFyaW9JZCA9PT0gJ3JhbmRvbV93YWxrJyAmJiA8UmFuZG9tV2Fsa0VkaXRvciBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gcXVlcnk9e3F1ZXJ5fSBkcz17ZGF0YXNvdXJjZX0gLz59XG4gICAgICB7c2NlbmFyaW9JZCA9PT0gJ3N0cmVhbWluZ19jbGllbnQnICYmIChcbiAgICAgICAgPFN0cmVhbWluZ0NsaWVudEVkaXRvciBvbkNoYW5nZT17b25TdHJlYW1DbGllbnRDaGFuZ2V9IHF1ZXJ5PXtxdWVyeX0gZHM9e2RhdGFzb3VyY2V9IC8+XG4gICAgICApfVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdsaXZlJyAmJiA8R3JhZmFuYUxpdmVFZGl0b3Igb25DaGFuZ2U9e29uVXBkYXRlfSBxdWVyeT17cXVlcnl9IGRzPXtkYXRhc291cmNlfSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnc2ltdWxhdGlvbicgJiYgPFNpbXVsYXRpb25RdWVyeUVkaXRvciBvbkNoYW5nZT17b25VcGRhdGV9IHF1ZXJ5PXtxdWVyeX0gZHM9e2RhdGFzb3VyY2V9IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdyYXdfZnJhbWUnICYmIDxSYXdGcmFtZUVkaXRvciBvbkNoYW5nZT17b25VcGRhdGV9IHF1ZXJ5PXtxdWVyeX0gZHM9e2RhdGFzb3VyY2V9IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdjc3ZfZmlsZScgJiYgPENTVkZpbGVFZGl0b3Igb25DaGFuZ2U9e29uVXBkYXRlfSBxdWVyeT17cXVlcnl9IGRzPXtkYXRhc291cmNlfSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnY3N2X2NvbnRlbnQnICYmIDxDU1ZDb250ZW50RWRpdG9yIG9uQ2hhbmdlPXtvblVwZGF0ZX0gcXVlcnk9e3F1ZXJ5fSBkcz17ZGF0YXNvdXJjZX0gLz59XG4gICAgICB7c2NlbmFyaW9JZCA9PT0gJ2xvZ3MnICYmIChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkxpbmVzXCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPVwibGluZXNcIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkubGluZXN9XG4gICAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkxldmVsXCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICAgICAgPElubGluZVN3aXRjaCBvbkNoYW5nZT17b25JbnB1dENoYW5nZX0gbmFtZT1cImxldmVsQ29sdW1uXCIgdmFsdWU9eyEhcXVlcnkubGV2ZWxDb2x1bW59IC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICl9XG5cbiAgICAgIHtzY2VuYXJpb0lkID09PSAndXNhJyAmJiA8VVNBUXVlcnlFZGl0b3Igb25DaGFuZ2U9e29uVVNBU3RhdHNDaGFuZ2V9IHF1ZXJ5PXtxdWVyeS51c2EgPz8ge319IC8+fVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdncmFmYW5hX2FwaScgJiYgKFxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWxXaWR0aD17MTR9IGxhYmVsPVwiRW5kcG9pbnRcIj5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICBvcHRpb25zPXtlbmRwb2ludHN9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25FbmRQb2ludENoYW5nZX1cbiAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgIHZhbHVlPXtlbmRwb2ludHMuZmluZCgoZXApID0+IGVwLnZhbHVlID09PSBxdWVyeS5zdHJpbmdJbnB1dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICl9XG5cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnYXJyb3cnICYmIChcbiAgICAgICAgPElubGluZUZpZWxkIGdyb3c+XG4gICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICBuYW1lPVwic3RyaW5nSW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnN0cmluZ0lucHV0fVxuICAgICAgICAgICAgcm93cz17MTB9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvcHkgYmFzZTY0IHRleHQgZGF0YSBmcm9tIHF1ZXJ5IHJlc3VsdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgKX1cblxuICAgICAge3NjZW5hcmlvSWQgPT09ICdwcmVkaWN0YWJsZV9wdWxzZScgJiYgKFxuICAgICAgICA8UHJlZGljdGFibGVQdWxzZUVkaXRvciBvbkNoYW5nZT17b25QdWxzZVdhdmVDaGFuZ2V9IHF1ZXJ5PXtxdWVyeX0gZHM9e2RhdGFzb3VyY2V9IC8+XG4gICAgICApfVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdwcmVkaWN0YWJsZV9jc3Zfd2F2ZScgJiYgPENTVldhdmVzRWRpdG9yIG9uQ2hhbmdlPXtvbkNTVldhdmVDaGFuZ2V9IHdhdmVzPXtxdWVyeS5jc3ZXYXZlfSAvPn1cbiAgICAgIHtzY2VuYXJpb0lkID09PSAnbm9kZV9ncmFwaCcgJiYgKFxuICAgICAgICA8Tm9kZUdyYXBoRWRpdG9yIG9uQ2hhbmdlPXsodmFsOiBOb2Rlc1F1ZXJ5KSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBub2RlczogdmFsIH0pfSBxdWVyeT17cXVlcnl9IC8+XG4gICAgICApfVxuICAgICAge3NjZW5hcmlvSWQgPT09ICdzZXJ2ZXJfZXJyb3JfNTAwJyAmJiA8RXJyb3JFZGl0b3Igb25DaGFuZ2U9e29uVXBkYXRlfSBxdWVyeT17cXVlcnl9IGRzPXtkYXRhc291cmNlfSAvPn1cblxuICAgICAge2Rlc2NyaXB0aW9uICYmIDxwPntkZXNjcmlwdGlvbn08L3A+fVxuICAgIDwvPlxuICApO1xufTtcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpbkNvbmZpZ1BhZ2VQcm9wcywgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VKc29uRGF0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTGlua0J1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuLy8gVHlwZXNcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUGx1Z2luQ29uZmlnUGFnZVByb3BzPERhdGFTb3VyY2VQbHVnaW5NZXRhPERhdGFTb3VyY2VKc29uRGF0YT4+IHt9XG5cbmV4cG9ydCBjbGFzcyBUZXN0SW5mb1RhYiBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBTZWUgZ2l0aHViIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHNldHRpbmcgdXAgYSByZXByb2R1Y2libGUgdGVzdCBlbnZpcm9ubWVudC5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3JhZmFuYS9ncmFmYW5hL3RyZWUvbWFpbi9kZXZlbnZcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBHaXRIdWJcbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvZGVFZGl0b3IgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuXG5leHBvcnQgY29uc3QgQ1NWQ29udGVudEVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvblNhdmVDU1YgPSAoY3N2Q29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgY3N2Q29udGVudCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb2RlRWRpdG9yXG4gICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgIGxhbmd1YWdlPVwiY3N2XCJcbiAgICAgIHZhbHVlPXtxdWVyeS5jc3ZDb250ZW50ID8/ICcnfVxuICAgICAgb25CbHVyPXtvblNhdmVDU1Z9XG4gICAgICBvblNhdmU9e29uU2F2ZUNTVn1cbiAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgIHNob3dMaW5lTnVtYmVycz17dHJ1ZX1cbiAgICAvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuXG5leHBvcnQgY29uc3QgQ1NWRmlsZUVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvbkNoYW5nZUZpbGVOYW1lID0gKHsgdmFsdWUgfTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pID0+IHtcbiAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBjc3ZGaWxlTmFtZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgZmlsZXMgPSBbXG4gICAgJ2ZsaWdodF9pbmZvX2J5X3N0YXRlLmNzdicsXG4gICAgJ3BvcHVsYXRpb25fYnlfc3RhdGUuY3N2JyxcbiAgICAnZ2RwX3Blcl9jYXBpdGEuY3N2JyxcbiAgICAnanNfbGlicmFyaWVzLmNzdicsXG4gICAgJ29obGNfZG9nZWNvaW4uY3N2JyxcbiAgICAnd2VpZ2h0X2hlaWdodC5jc3YnLFxuICAgICdicm93c2VyX21hcmtldHNoYXJlLmNzdicsXG4gIF0ubWFwKChuYW1lKSA9PiAoeyBsYWJlbDogbmFtZSwgdmFsdWU6IG5hbWUgfSkpO1xuXG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiRmlsZVwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaWxlTmFtZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBjc3YgZmlsZVwiXG4gICAgICAgICAgb3B0aW9ucz17ZmlsZXN9XG4gICAgICAgICAgdmFsdWU9e2ZpbGVzLmZpbmQoKGYpID0+IGYudmFsdWUgPT09IHF1ZXJ5LmNzdkZpbGVOYW1lKX1cbiAgICAgICAgLz5cbiAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZGVmYXVsdENTVldhdmVRdWVyeSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDU1ZXYXZlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgV2F2ZXNQcm9wcyB7XG4gIHdhdmVzPzogQ1NWV2F2ZVtdO1xuICBvbkNoYW5nZTogKHdhdmVzOiBDU1ZXYXZlW10pID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBXYXZlUHJvcHMge1xuICB3YXZlOiBDU1ZXYXZlO1xuICBpbmRleDogbnVtYmVyO1xuICBsYXN0OiBib29sZWFuO1xuICBvbkNoYW5nZTogKGluZGV4OiBudW1iZXIsIHdhdmU/OiBDU1ZXYXZlKSA9PiB2b2lkO1xuICBvbkFkZDogKCkgPT4gdm9pZDtcbn1cblxuY2xhc3MgQ1NWV2F2ZUVkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8V2F2ZVByb3BzPiB7XG4gIG9uRmllbGRDaGFuZ2UgPSAoZmllbGQ6IGtleW9mIENTVldhdmUpID0+IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMud2F2ZSxcbiAgICAgIFtmaWVsZF06IHZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uTmFtZUNoYW5nZSA9IHRoaXMub25GaWVsZENoYW5nZSgnbmFtZScpO1xuICBvbkxhYmVsc0NoYW5nZSA9IHRoaXMub25GaWVsZENoYW5nZSgnbGFiZWxzJyk7XG4gIG9uQ1NWQ2hhbmdlID0gdGhpcy5vbkZpZWxkQ2hhbmdlKCd2YWx1ZXNDU1YnKTtcbiAgb25UaW1lU3RlcENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRpbWVTdGVwID0gZS50YXJnZXQudmFsdWVBc051bWJlcjtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMud2F2ZSxcbiAgICAgIHRpbWVTdGVwLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdhdmUsIGxhc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGFjdGlvbiA9IHRoaXMucHJvcHMub25BZGQ7XG4gICAgaWYgKCFsYXN0KSB7XG4gICAgICBhY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwgdW5kZWZpbmVkKTsgLy8gcmVtb3ZlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPXsnVmFsdWVzJ31cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIkNvbW1hIHNlcGFyYXRlZCB2YWx1ZXMuIEVhY2ggdmFsdWUgbWF5IGJlIGFuIGludCwgZmxvYXQsIG9yIG51bGwgYW5kIG11c3Qgbm90IGJlIGVtcHR5LiBXaGl0ZXNwYWNlIGFuZCB0cmFpbGluZyBjb21tYXMgYXJlIHJlbW92ZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt3YXZlLnZhbHVlc0NTVn0gcGxhY2Vob2xkZXI9eydDU1YgdmFsdWVzJ30gb25DaGFuZ2U9e3RoaXMub25DU1ZDaGFuZ2V9IGF1dG9Gb2N1cz17dHJ1ZX0gLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXsnU3RlcCd9IHRvb2x0aXA9XCJUaGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiBkYXRhcG9pbnRzLlwiPlxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17d2F2ZS50aW1lU3RlcH0gdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPXsnNjAnfSB3aWR0aD17Nn0gb25DaGFuZ2U9e3RoaXMub25UaW1lU3RlcENoYW5nZX0gLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPXsnTGFiZWxzJ30+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt3YXZlLmxhYmVsc30gcGxhY2Vob2xkZXI9eydsYWJlbHMnfSB3aWR0aD17MTJ9IG9uQ2hhbmdlPXt0aGlzLm9uTGFiZWxzQ2hhbmdlfSAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9eydOYW1lJ30+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt3YXZlLm5hbWV9IHBsYWNlaG9sZGVyPXsnbmFtZSd9IHdpZHRoPXsxMH0gb25DaGFuZ2U9e3RoaXMub25OYW1lQ2hhbmdlfSAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8QnV0dG9uIGljb249e2xhc3QgPyAncGx1cycgOiAnbWludXMnfSB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17YWN0aW9ufSAvPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDU1ZXYXZlc0VkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8V2F2ZXNQcm9wcz4ge1xuICBvbkNoYW5nZSA9IChpbmRleDogbnVtYmVyLCB3YXZlPzogQ1NWV2F2ZSkgPT4ge1xuICAgIGxldCB3YXZlcyA9IFsuLi4odGhpcy5wcm9wcy53YXZlcyA/PyBkZWZhdWx0Q1NWV2F2ZVF1ZXJ5KV07XG4gICAgaWYgKHdhdmUpIHtcbiAgICAgIHdhdmVzW2luZGV4XSA9IHsgLi4ud2F2ZSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZW1vdmUgdGhlIGVsZW1lbnRcbiAgICAgIHdhdmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uod2F2ZXMpO1xuICB9O1xuXG4gIG9uQWRkID0gKCkgPT4ge1xuICAgIGNvbnN0IHdhdmVzID0gWy4uLih0aGlzLnByb3BzLndhdmVzID8/IGRlZmF1bHRDU1ZXYXZlUXVlcnkpXTtcbiAgICB3YXZlcy5wdXNoKHsgLi4uZGVmYXVsdENTVldhdmVRdWVyeVswXSB9KTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHdhdmVzKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHdhdmVzID0gdGhpcy5wcm9wcy53YXZlcyA/PyBkZWZhdWx0Q1NWV2F2ZVF1ZXJ5O1xuICAgIGlmICghd2F2ZXMubGVuZ3RoKSB7XG4gICAgICB3YXZlcyA9IGRlZmF1bHRDU1ZXYXZlUXVlcnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHt3YXZlcy5tYXAoKHdhdmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPENTVldhdmVFZGl0b3JcbiAgICAgICAgICAgIGtleT17YCR7aW5kZXh9LyR7d2F2ZS52YWx1ZXNDU1Z9YH1cbiAgICAgICAgICAgIHdhdmU9e3dhdmV9XG4gICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICBvbkFkZD17dGhpcy5vbkFkZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgbGFzdD17aW5kZXggPT09IHdhdmVzLmxlbmd0aCAtIDF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRWRpdG9yUHJvcHMgfSBmcm9tICcuLi9RdWVyeUVkaXRvcic7XG5cbmNvbnN0IEVSUk9SX09QVElPTlMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ1NlcnZlciBwYW5pYycsXG4gICAgdmFsdWU6ICdzZXJ2ZXJfcGFuaWMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdGcm9udGVuZCBleGNlcHRpb24nLFxuICAgIHZhbHVlOiAnZnJvbnRlbmRfZXhjZXB0aW9uJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnRnJvbnRlbmQgb2JzZXJ2YWJsZScsXG4gICAgdmFsdWU6ICdmcm9udGVuZF9vYnNlcnZhYmxlJyxcbiAgfSxcbl07XG5cbmNvbnN0IEZyb250ZW5kRXJyb3JRdWVyeUVkaXRvcjogUmVhY3QuRkM8RWRpdG9yUHJvcHM+ID0gKHsgcXVlcnksIG9uQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICA8SW5saW5lRmllbGQgbGFiZWxXaWR0aD17MTR9IGxhYmVsPVwiRXJyb3IgdHlwZVwiPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb3B0aW9ucz17RVJST1JfT1BUSU9OU31cbiAgICAgICAgICB2YWx1ZT17cXVlcnkuZXJyb3JUeXBlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgZXJyb3JUeXBlOiB2LnZhbHVlIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0lubGluZUZpZWxkPlxuICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcm9udGVuZEVycm9yUXVlcnlFZGl0b3I7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBFZGl0b3JQcm9wcyB9IGZyb20gJy4uL1F1ZXJ5RWRpdG9yJztcblxuY29uc3QgbGl2ZVRlc3REYXRhQ2hhbm5lbHMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ3JhbmRvbS0ycy1zdHJlYW0nLFxuICAgIHZhbHVlOiAncmFuZG9tLTJzLXN0cmVhbScsXG4gICAgZGVzY3JpcHRpb246ICdSYW5kb20gc3RyZWFtIHdpdGggcG9pbnRzIGV2ZXJ5IDJzJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAncmFuZG9tLWZsYWtleS1zdHJlYW0nLFxuICAgIHZhbHVlOiAncmFuZG9tLWZsYWtleS1zdHJlYW0nLFxuICAgIGRlc2NyaXB0aW9uOiAnU3RyZWFtIHRoYXQgcmV0dXJucyBkYXRhIGluIHJhbmRvbSBpbnRlcnZhbHMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdyYW5kb20tbGFiZWxlZC1zdHJlYW0nLFxuICAgIHZhbHVlOiAncmFuZG9tLWxhYmVsZWQtc3RyZWFtJyxcbiAgICBkZXNjcmlwdGlvbjogJ1ZhbHVlIHdpdGggbW92aW5nIGxhYmVscycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3JhbmRvbS0yMEh6LXN0cmVhbScsXG4gICAgdmFsdWU6ICdyYW5kb20tMjBIei1zdHJlYW0nLFxuICAgIGRlc2NyaXB0aW9uOiAnUmFuZG9tIHN0cmVhbSB3aXRoIHBvaW50cyBpbiAyMEh6JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBHcmFmYW5hTGl2ZUVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvbkNoYW5uZWxDaGFuZ2UgPSAoeyB2YWx1ZSB9OiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPikgPT4ge1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIGNoYW5uZWw6IHZhbHVlIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPElubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiQ2hhbm5lbFwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFubmVsQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGNoYW5uZWxcIlxuICAgICAgICAgIG9wdGlvbnM9e2xpdmVUZXN0RGF0YUNoYW5uZWxzfVxuICAgICAgICAgIHZhbHVlPXtsaXZlVGVzdERhdGFDaGFubmVscy5maW5kKChmKSA9PiBmLnZhbHVlID09PSBxdWVyeS5jaGFubmVsKX1cbiAgICAgICAgLz5cbiAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbnB1dCwgSW5saW5lRmllbGRSb3csIElubGluZUZpZWxkLCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vZGVzUXVlcnksIFRlc3REYXRhUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBOb2Rlc1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogVGVzdERhdGFRdWVyeTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBOb2RlR3JhcGhFZGl0b3IoeyBxdWVyeSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgdHlwZSA9IHF1ZXJ5Lm5vZGVzPy50eXBlIHx8ICdyYW5kb20nO1xuICByZXR1cm4gKFxuICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkRhdGEgdHlwZVwiIGxhYmVsV2lkdGg9ezE0fT5cbiAgICAgICAgPFNlbGVjdDxOb2Rlc1F1ZXJ5Wyd0eXBlJ10+XG4gICAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5tYXAoKG8pID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogbyxcbiAgICAgICAgICAgIHZhbHVlOiBvLFxuICAgICAgICAgIH0pKX1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtID09PSB0eXBlKX1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5Lm5vZGVzLCB0eXBlOiB2YWx1ZS52YWx1ZSEgfSl9XG4gICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAvPlxuICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIHt0eXBlID09PSAncmFuZG9tJyAmJiAoXG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkNvdW50XCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwiY291bnRcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5Lm5vZGVzPy5jb3VudH1cbiAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeS5ub2RlcywgY291bnQ6IGUuY3VycmVudFRhcmdldC52YWx1ZSA/IHBhcnNlSW50KGUuY3VycmVudFRhcmdldC52YWx1ZSwgMTApIDogMCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICl9XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn1cblxuY29uc3Qgb3B0aW9uczogQXJyYXk8Tm9kZXNRdWVyeVsndHlwZSddPiA9IFsncmFuZG9tJywgJ3Jlc3BvbnNlJ107XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgUHVsc2VXYXZlUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IGZpZWxkcyA9IFtcbiAgeyBsYWJlbDogJ1N0ZXAnLCBpZDogJ3RpbWVTdGVwJywgcGxhY2Vob2xkZXI6ICc2MCcsIHRvb2x0aXA6ICdUaGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiBkYXRhcG9pbnRzLicgfSxcbiAge1xuICAgIGxhYmVsOiAnT24gQ291bnQnLFxuICAgIGlkOiAnb25Db3VudCcsXG4gICAgcGxhY2Vob2xkZXI6ICczJyxcbiAgICB0b29sdGlwOiAnVGhlIG51bWJlciBvZiB2YWx1ZXMgd2l0aGluIGEgY3ljbGUsIGF0IHRoZSBzdGFydCBvZiB0aGUgY3ljbGUsIHRoYXQgc2hvdWxkIGhhdmUgdGhlIG9uVmFsdWUuJyxcbiAgfSxcbiAgeyBsYWJlbDogJ09mZiBDb3VudCcsIGlkOiAnb2ZmQ291bnQnLCBwbGFjZWhvbGRlcjogJzYnLCB0b29sdGlwOiAnVGhlIG51bWJlciBvZiBvZmZWYWx1ZXMgd2l0aGluIHRoZSBjeWNsZS4nIH0sXG4gIHtcbiAgICBsYWJlbDogJ09uIFZhbHVlJyxcbiAgICBpZDogJ29uVmFsdWUnLFxuICAgIHBsYWNlaG9sZGVyOiAnMScsXG4gICAgdG9vbHRpcDogJ1RoZSB2YWx1ZSBmb3IgXCJvbiB2YWx1ZXNcIiwgbWF5IGJlIGFuIGludCwgZmxvYXQsIG9yIG51bGwuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnT2ZmIFZhbHVlJyxcbiAgICBpZDogJ29mZlZhbHVlJyxcbiAgICBwbGFjZWhvbGRlcjogJzEnLFxuICAgIHRvb2x0aXA6ICdUaGUgdmFsdWUgZm9yIFwib2ZmIHZhbHVlc1wiLCBtYXkgYmUgYSBpbnQsIGZsb2F0LCBvciBudWxsLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUHJlZGljdGFibGVQdWxzZUVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICAvLyBDb252ZXJ0IHZhbHVlcyB0byBudW1iZXJzIGJlZm9yZSBzYXZpbmdcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuXG4gICAgb25DaGFuZ2UoeyB0YXJnZXQ6IHsgbmFtZSwgdmFsdWU6IE51bWJlcih2YWx1ZSkgfSB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgIHtmaWVsZHMubWFwKCh7IGxhYmVsLCBpZCwgcGxhY2Vob2xkZXIsIHRvb2x0aXAgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD17bGFiZWx9IGxhYmVsV2lkdGg9ezE0fSBrZXk9e2lkfSB0b29sdGlwPXt0b29sdGlwfT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPXtpZH1cbiAgICAgICAgICAgICAgaWQ9e2BwdWxzZVdhdmUuJHtpZH0tJHtxdWVyeS5yZWZJZH1gfVxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkucHVsc2VXYXZlPy5baWQgYXMga2V5b2YgUHVsc2VXYXZlUXVlcnldfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgVGVzdERhdGFRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgcmFuZG9tV2Fsa0ZpZWxkcyA9IFtcbiAgeyBsYWJlbDogJ1NlcmllcyBjb3VudCcsIGlkOiAnc2VyaWVzQ291bnQnLCBwbGFjZWhvbGRlcjogJzEnLCBtaW46IDEsIHN0ZXA6IDEgfSxcbiAgeyBsYWJlbDogJ1N0YXJ0IHZhbHVlJywgaWQ6ICdzdGFydFZhbHVlJywgcGxhY2Vob2xkZXI6ICdhdXRvJywgc3RlcDogMSB9LFxuICB7IGxhYmVsOiAnTWluJywgaWQ6ICdtaW4nLCBwbGFjZWhvbGRlcjogJ25vbmUnLCBzdGVwOiAwLjEgfSxcbiAgeyBsYWJlbDogJ01heCcsIGlkOiAnbWF4JywgcGxhY2Vob2xkZXI6ICdub25lJywgc3RlcDogMC4xIH0sXG4gIHsgbGFiZWw6ICdTcHJlYWQnLCBpZDogJ3NwcmVhZCcsIHBsYWNlaG9sZGVyOiAnMScsIG1pbjogMC41LCBzdGVwOiAwLjEgfSxcbiAgeyBsYWJlbDogJ05vaXNlJywgaWQ6ICdub2lzZScsIHBsYWNlaG9sZGVyOiAnMCcsIG1pbjogMCwgc3RlcDogMC4xIH0sXG4gIHtcbiAgICBsYWJlbDogJ0Ryb3AgKCUpJyxcbiAgICBpZDogJ2Ryb3AnLFxuICAgIHBsYWNlaG9sZGVyOiAnMCcsXG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHN0ZXA6IDEsXG4gICAgdG9vbHRpcDogJ0V4Y2x1ZGUgc29tZSBwZXJjZW50IChjaGFuY2UpIHBvaW50cycsXG4gIH0sXG5dO1xuXG5jb25zdCB0ZXN0U2VsZWN0b3JzID0gc2VsZWN0b3JzLmNvbXBvbmVudHMuRGF0YVNvdXJjZS5UZXN0RGF0YS5RdWVyeVRhYjtcbnR5cGUgU2VsZWN0b3IgPSAnbWF4JyB8ICdtaW4nIHwgJ25vaXNlJyB8ICdzZXJpZXNDb3VudCcgfCAnc3ByZWFkJyB8ICdzdGFydFZhbHVlJyB8ICdkcm9wJztcblxuZXhwb3J0IGNvbnN0IFJhbmRvbVdhbGtFZGl0b3IgPSAoeyBvbkNoYW5nZSwgcXVlcnkgfTogRWRpdG9yUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICB7cmFuZG9tV2Fsa0ZpZWxkcy5tYXAoKHsgbGFiZWwsIGlkLCBtaW4sIHN0ZXAsIHBsYWNlaG9sZGVyLCB0b29sdGlwIH0pID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB0ZXN0U2VsZWN0b3JzPy5baWQgYXMgU2VsZWN0b3JdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD17bGFiZWx9IGxhYmVsV2lkdGg9ezE0fSBrZXk9e2lkfSBhcmlhLWxhYmVsPXtzZWxlY3Rvcn0gdG9vbHRpcD17dG9vbHRpcH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgICAgICBuYW1lPXtpZH1cbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIGlkPXtgcmFuZG9tV2Fsay0ke2lkfS0ke3F1ZXJ5LnJlZklkfWB9XG4gICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgICB2YWx1ZT17KHF1ZXJ5IGFzIGFueSlbaWQgYXMga2V5b2YgVGVzdERhdGFRdWVyeV0gfHwgcGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZGF0YUZyYW1lVG9KU09OLCB0b0RhdGFGcmFtZSwgdG9EYXRhRnJhbWVEVE8gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHRvRGF0YVF1ZXJ5UmVzcG9uc2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEFsZXJ0LCBDb2RlRWRpdG9yIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBFZGl0b3JQcm9wcyB9IGZyb20gJy4uL1F1ZXJ5RWRpdG9yJztcblxuZXhwb3J0IGNvbnN0IFJhd0ZyYW1lRWRpdG9yID0gKHsgb25DaGFuZ2UsIHF1ZXJ5IH06IEVkaXRvclByb3BzKSA9PiB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbd2FybmluZywgc2V0V2FybmluZ10gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3Qgb25TYXZlRnJhbWVzID0gKHJhd0ZyYW1lQ29udGVudDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJhd0ZyYW1lQ29udGVudCk7XG4gICAgICBpZiAoaXNBcnJheShqc29uKSkge1xuICAgICAgICBzZXRFcnJvcih1bmRlZmluZWQpO1xuICAgICAgICBzZXRXYXJuaW5nKHVuZGVmaW5lZCk7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHJhd0ZyYW1lQ29udGVudCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YTogYW55ID0gdW5kZWZpbmVkO1xuXG4gICAgICAvLyBDb3B5IHBhc3RlIGZyb20gcGFuZWwganNvblxuICAgICAgaWYgKGlzQXJyYXkoanNvbi5zZXJpZXMpICYmIGpzb24uc3RhdGUpIHtcbiAgICAgICAgZGF0YSA9IGpzb24uc2VyaWVzLm1hcCgodjogYW55KSA9PiB0b0RhdGFGcmFtZURUTyh0b0RhdGFGcmFtZSh2KSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2hlayBpZiBpdCBpcyBhIGNvcHkgb2YgdGhlIHJhdyByZXN1bHNcbiAgICAgICAgY29uc3QgdiA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiBqc29uIH0pO1xuICAgICAgICBpZiAodi5kYXRhPy5sZW5ndGggJiYgIXYuZXJyb3IpIHtcbiAgICAgICAgICBkYXRhID0gdi5kYXRhLm1hcCgoZikgPT4gZGF0YUZyYW1lVG9KU09OKGYpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnT3JpZ2luYWwnLCBqc29uKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1NhdmUnLCBkYXRhKTtcbiAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcbiAgICAgICAgc2V0V2FybmluZygnQ29udmVydGVkIHRvIGRpcmVjdCBmcmFtZSByZXN1bHQnKTtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcmF3RnJhbWVDb250ZW50OiBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRFcnJvcignVW5hYmxlIHRvIHJlYWQgZGF0YWZyYW1lcyBpbiB0ZXh0Jyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBhcnNpbmcganNvbicsIGUpO1xuICAgICAgc2V0RXJyb3IoJ0VudGVyIEpTT04gYXJyYXkgb2YgZGF0YSBmcmFtZXMgKG9yIHJhdyBxdWVyeSByZXN1bHRzIGJvZHkpJyk7XG4gICAgICBzZXRXYXJuaW5nKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtlcnJvciAmJiA8QWxlcnQgdGl0bGU9e2Vycm9yfSBzZXZlcml0eT1cImVycm9yXCIgLz59XG4gICAgICB7d2FybmluZyAmJiA8QWxlcnQgdGl0bGU9e3dhcm5pbmd9IHNldmVyaXR5PVwid2FybmluZ1wiIC8+fVxuICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgIGxhbmd1YWdlPVwianNvblwiXG4gICAgICAgIHZhbHVlPXtxdWVyeS5yYXdGcmFtZUNvbnRlbnQgPz8gJ1tdJ31cbiAgICAgICAgb25CbHVyPXtvblNhdmVGcmFtZXN9XG4gICAgICAgIG9uU2F2ZT17b25TYXZlRnJhbWVzfVxuICAgICAgICBzaG93TWluaU1hcD17dHJ1ZX1cbiAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXt0cnVlfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBEYXRhRnJhbWVKU09OLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIElubGluZUZpZWxkLFxuICBJbmxpbmVGaWVsZFJvdyxcbiAgQnV0dG9uLFxuICBGaWVsZFNldCxcbiAgSW5saW5lU3dpdGNoLFxuICBJbnB1dCxcbiAgTGFiZWwsXG4gIFNlbGVjdCxcbiAgRm9ybSxcbiAgVGV4dEFyZWEsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRWRpdG9yUHJvcHMgfSBmcm9tICcuLi9RdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBTaW11bGF0aW9uUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIFR5cGUgICAgICAgICBzdHJpbmcgICAgICBganNvbjpcInR5cGVcImBcbi8vIE5hbWUgICAgICAgICBzdHJpbmcgICAgICBganNvbjpcIm5hbWVcImBcbi8vIERlc2NyaXB0aW9uICBzdHJpbmcgICAgICBganNvbjpcImRlc2NyaXB0aW9uXCJgXG4vLyBPbmx5Rm9yd2FyZCAgYm9vbCAgICAgICAgYGpzb246XCJmb3J3YXJkXCJgXG4vLyBDb25maWdGaWVsZHMgKmRhdGEuRnJhbWUgYGpzb246XCJjb25maWdcImBcblxuaW50ZXJmYWNlIFNpbUluZm8ge1xuICB0eXBlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZm9yd2FyZDogYm9vbGVhbjtcbiAgY29uZmlnOiBEYXRhRnJhbWVKU09OO1xufVxuaW50ZXJmYWNlIEZvcm1EVE8ge1xuICBjb25maWc6IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBTaW11bGF0aW9uUXVlcnlFZGl0b3IgPSAoeyBvbkNoYW5nZSwgcXVlcnksIGRzIH06IEVkaXRvclByb3BzKSA9PiB7XG4gIGNvbnN0IHNpbVF1ZXJ5ID0gcXVlcnkuc2ltID8/ICh7fSBhcyBTaW11bGF0aW9uUXVlcnkpO1xuICBjb25zdCBzaW1LZXkgPSBzaW1RdWVyeS5rZXkgPz8gKHt9IGFzIHR5cGVvZiBzaW1RdWVyeS5rZXkpO1xuXG4gIC8vIFRoaXMgb25seSBjaGFuZ2VzIG9uY2VcbiAgY29uc3QgaW5mbyA9IHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB2ID0gKGF3YWl0IGRzLmdldFJlc291cmNlKCdzaW1zJykpIGFzIFNpbUluZm9bXTtcbiAgICByZXR1cm4ge1xuICAgICAgc2ltczogdixcbiAgICAgIG9wdGlvbnM6IHYubWFwKChzKSA9PiAoeyBsYWJlbDogcy5uYW1lLCB2YWx1ZTogcy50eXBlLCBkZXNjcmlwdGlvbjogcy5kZXNjcmlwdGlvbiB9KSksXG4gICAgfTtcbiAgfSwgW2RzXSk7XG5cbiAgY29uc3QgY3VycmVudCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBzaW1LZXkudHlwZTtcbiAgICBpZiAoIXR5cGUgfHwgIWluZm8udmFsdWUpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRldGFpbHM6IGluZm8udmFsdWUuc2ltcy5maW5kKCh2KSA9PiB2LnR5cGUgPT09IHR5cGUpLFxuICAgICAgb3B0aW9uOiBpbmZvLnZhbHVlLm9wdGlvbnMuZmluZCgodikgPT4gdi52YWx1ZSA9PT0gdHlwZSksXG4gICAgfTtcbiAgfSwgW2luZm8udmFsdWUsIHNpbUtleT8udHlwZV0pO1xuXG4gIGxldCBjb25maWcgPSB1c2VBc3luYyhhc3luYyAoKSA9PiB7XG4gICAgbGV0IHBhdGggPSBzaW1LZXkudHlwZSArICcvJyArIHNpbUtleS50aWNrICsgJ2h6JztcbiAgICBpZiAoc2ltS2V5LnVpZCkge1xuICAgICAgcGF0aCArPSAnLycgKyBzaW1LZXkudWlkO1xuICAgIH1cbiAgICByZXR1cm4gKGF3YWl0IGRzLmdldFJlc291cmNlKCdzaW0vJyArIHBhdGgpKT8uY29uZmlnO1xuICB9LCBbc2ltS2V5LnR5cGUsIHNpbUtleS50aWNrLCBzaW1LZXkudWlkXSk7XG5cbiAgY29uc3Qgb25VcGRhdGVLZXkgPSAoa2V5OiB0eXBlb2Ygc2ltUXVlcnkua2V5KSA9PiB7XG4gICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2ltOiB7IC4uLnNpbVF1ZXJ5LCBrZXkgfSB9KTtcbiAgfTtcblxuICBjb25zdCBvblVJRENoYW5nZWQgPSAoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBvblVwZGF0ZUtleSh7IC4uLnNpbUtleSwgdWlkOiB2YWx1ZSA/PyB1bmRlZmluZWQgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25UaWNrQ2hhbmdlZCA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0aWNrID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlQXNOdW1iZXI7XG4gICAgb25VcGRhdGVLZXkoeyAuLi5zaW1LZXksIHRpY2sgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25UeXBlQ2hhbmdlID0gKHY6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KSA9PiB7XG4gICAgb25VcGRhdGVLZXkoeyAuLi5zaW1LZXksIHR5cGU6IHYudmFsdWUhIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uVG9nZ2xlU3RyZWFtID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHNpbTogeyAuLi5zaW1RdWVyeSwgc3RyZWFtOiAhc2ltUXVlcnkuc3RyZWFtIH0gfSk7XG4gIH07XG5cbiAgY29uc3Qgb25Ub2dnbGVMYXN0ID0gKCkgPT4ge1xuICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHNpbTogeyAuLi5zaW1RdWVyeSwgbGFzdDogIXNpbVF1ZXJ5Lmxhc3QgfSB9KTtcbiAgfTtcbiAgY29uc3Qgb25TdWJtaXRDaGFuZ2UgPSAoZGF0YTogRm9ybURUTykgPT4ge1xuICAgIGxldCBwYXRoID0gc2ltS2V5LnR5cGUgKyAnLycgKyBzaW1LZXkudGljayArICdoeic7XG4gICAgaWYgKHNpbUtleS51aWQpIHtcbiAgICAgIHBhdGggKz0gJy8nICsgc2ltS2V5LnVpZDtcbiAgICB9XG4gICAgZHMucG9zdFJlc291cmNlKCdzaW0vJyArIHBhdGgsIEpTT04ucGFyc2UoZGF0YS5jb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbFdpZHRoPXsxNH0gbGFiZWw9XCJTaW11bGF0aW9uXCIgdG9vbHRpcD1cIlwiPlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIGlzTG9hZGluZz17aW5mby5sb2FkaW5nfVxuICAgICAgICAgICAgb3B0aW9ucz17aW5mby52YWx1ZT8ub3B0aW9ucyA/PyBbXX1cbiAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50Lm9wdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblR5cGVDaGFuZ2V9XG4gICAgICAgICAgICB3aWR0aD17MzJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsV2lkdGg9ezE0fSBsYWJlbD1cIlN0cmVhbVwiIHRvb2x0aXA9XCJjb25uZWN0IHRvIHRoZSBsaXZlIGNoYW5uZWxcIj5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoIHZhbHVlPXtCb29sZWFuKHNpbVF1ZXJ5LnN0cmVhbSl9IG9uQ2hhbmdlPXtvblRvZ2dsZVN0cmVhbX0gLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cblxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJJbnRlcnZhbFwiIHRvb2x0aXA9XCJ0aGUgcmF0ZSBhIHNpbXVsYXRpb24gd2lsbCBzcGl0IG91dCBldmVudHNcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHdpZHRoPXsxMH1cbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3NpbUtleS50aWNrfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uVGlja0NoYW5nZWR9XG4gICAgICAgICAgICBtaW49ezEgLyAxMH1cbiAgICAgICAgICAgIG1heD17NTB9XG4gICAgICAgICAgICBzdWZmaXg9XCJoelwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cblxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJMYXN0XCIgdG9vbHRpcD1cIk9ubHkgcmV0dXJuIHRoZSBsYXN0IHZhbHVlXCI+XG4gICAgICAgICAgPExhYmVsPlxuICAgICAgICAgICAgPElubGluZVN3aXRjaCB2YWx1ZT17Qm9vbGVhbihzaW1RdWVyeS5sYXN0KX0gb25DaGFuZ2U9e29uVG9nZ2xlTGFzdH0gLz5cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJVSURcIiB0b29sdGlwPVwiQSBVSUQgd2lsbCBhbGxvdyBtdWx0aXBsZSBzaW11bGF0aW9ucyB0byBydW4gYXQgdGhlIHNhbWUgdGltZVwiPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwib3B0aW9uYWxcIiB2YWx1ZT17c2ltUXVlcnkua2V5LnVpZH0gb25DaGFuZ2U9e29uVUlEQ2hhbmdlZH0gLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRDaGFuZ2V9PlxuICAgICAgICAgIHsoeyByZWdpc3RlciB9KSA9PiAoXG4gICAgICAgICAgICA8RmllbGRTZXQ+XG4gICAgICAgICAgICAgIDxUZXh0QXJlYSB7Li4ucmVnaXN0ZXIoJ2NvbmZpZycpfSBkZWZhdWx0VmFsdWU9e0pTT04uc3RyaW5naWZ5KGNvbmZpZy52YWx1ZSwgbnVsbCwgMil9IHJvd3M9ezd9IC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GaWVsZFNldD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0+XG4gICAgICAgIFNDSEVNQTpcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoY3VycmVudC5kZXRhaWxzPy5jb25maWcuc2NoZW1hLCBudWxsLCAyKX08L3ByZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElucHV0LCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEVkaXRvclByb3BzIH0gZnJvbSAnLi4vUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgU3RyZWFtaW5nUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmNvbnN0IHN0cmVhbWluZ0NsaWVudEZpZWxkcyA9IFtcbiAgeyBsYWJlbDogJ1NwZWVkIChtcyknLCBpZDogJ3NwZWVkJywgcGxhY2Vob2xkZXI6ICd2YWx1ZScsIG1pbjogMTAsIHN0ZXA6IDEwIH0sXG4gIHsgbGFiZWw6ICdTcHJlYWQnLCBpZDogJ3NwcmVhZCcsIHBsYWNlaG9sZGVyOiAndmFsdWUnLCBtaW46IDAuNSwgc3RlcDogMC4xIH0sXG4gIHsgbGFiZWw6ICdOb2lzZScsIGlkOiAnbm9pc2UnLCBwbGFjZWhvbGRlcjogJ3ZhbHVlJywgbWluOiAwLCBzdGVwOiAwLjEgfSxcbiAgeyBsYWJlbDogJ0JhbmRzJywgaWQ6ICdiYW5kcycsIHBsYWNlaG9sZGVyOiAnYmFuZHMnLCBtaW46IDAsIHN0ZXA6IDEgfSxcbl07XG5cbmNvbnN0IHR5cGVzID0gW1xuICB7IHZhbHVlOiAnc2lnbmFsJywgbGFiZWw6ICdTaWduYWwnIH0sXG4gIHsgdmFsdWU6ICdsb2dzJywgbGFiZWw6ICdMb2dzJyB9LFxuICB7IHZhbHVlOiAnZmV0Y2gnLCBsYWJlbDogJ0ZldGNoJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFN0cmVhbWluZ0NsaWVudEVkaXRvciA9ICh7IG9uQ2hhbmdlLCBxdWVyeSB9OiBFZGl0b3JQcm9wcykgPT4ge1xuICBjb25zdCBvblNlbGVjdENoYW5nZSA9ICh7IHZhbHVlIH06IFNlbGVjdGFibGVWYWx1ZSkgPT4ge1xuICAgIG9uQ2hhbmdlKHsgdGFyZ2V0OiB7IG5hbWU6ICd0eXBlJywgdmFsdWUgfSB9KTtcbiAgfTtcblxuICAvLyBDb252ZXJ0IHZhbHVlcyB0byBudW1iZXJzIGJlZm9yZSBzYXZpbmdcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIG9uQ2hhbmdlKHsgdGFyZ2V0OiB7IG5hbWUsIHZhbHVlOiBOdW1iZXIodmFsdWUpIH0gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJUeXBlXCIgbGFiZWxXaWR0aD17MTR9PlxuICAgICAgICA8U2VsZWN0IHdpZHRoPXszMn0gb25DaGFuZ2U9e29uU2VsZWN0Q2hhbmdlfSBkZWZhdWx0VmFsdWU9e3R5cGVzWzBdfSBvcHRpb25zPXt0eXBlc30gLz5cbiAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICB7cXVlcnk/LnN0cmVhbT8udHlwZSA9PT0gJ3NpZ25hbCcgJiZcbiAgICAgICAgc3RyZWFtaW5nQ2xpZW50RmllbGRzLm1hcCgoeyBsYWJlbCwgaWQsIG1pbiwgc3RlcCwgcGxhY2Vob2xkZXIgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9e2xhYmVsfSBsYWJlbFdpZHRoPXsxNH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD17YHN0cmVhbS4ke2lkfS0ke3F1ZXJ5LnJlZklkfWB9XG4gICAgICAgICAgICAgICAgbmFtZT17aWR9XG4gICAgICAgICAgICAgICAgbWluPXttaW59XG4gICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkuc3RyZWFtPy5baWQgYXMga2V5b2YgU3RyZWFtaW5nUXVlcnldfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG5cbiAgICAgIHtxdWVyeT8uc3RyZWFtPy50eXBlID09PSAnZmV0Y2gnICYmIChcbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiVVJMXCIgbGFiZWxXaWR0aD17MTR9IGdyb3c+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgIGlkPXtgc3RyZWFtLnVybC0ke3F1ZXJ5LnJlZklkfWB9XG4gICAgICAgICAgICB2YWx1ZT17cXVlcnk/LnN0cmVhbT8udXJsfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGZXRjaCBVUkxcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICApfVxuICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZFJvdywgSW5saW5lRmllbGQsIFNlbGVjdCwgTXVsdGlTZWxlY3QsIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBVU0FRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IFVTQVF1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogVVNBUXVlcnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVU0FRdWVyeUVkaXRvcih7IHF1ZXJ5LCBvbkNoYW5nZSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbFdpZHRoPXsxNH0gbGFiZWw9XCJNb2RlXCI+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgb3B0aW9ucz17dXNhUXVlcnlNb2Rlc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBtb2RlOiB2LnZhbHVlIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHdpZHRoPXszMn1cbiAgICAgICAgICAgIHZhbHVlPXt1c2FRdWVyeU1vZGVzLmZpbmQoKGVwKSA9PiBlcC52YWx1ZSA9PT0gcXVlcnkubW9kZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiUGVyaW9kXCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkucGVyaW9kfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyczMG0nfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHBlcmlvZDogdi5jdXJyZW50VGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsV2lkdGg9ezE0fSBsYWJlbD1cIkZpZWxkc1wiPlxuICAgICAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICAgICAgb3B0aW9ucz17ZmllbGROYW1lc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsczogU2VsZWN0YWJsZVZhbHVlW10pID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgZmllbGRzOiB2YWxzLm1hcCgodikgPT4gdi52YWx1ZSkgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhbGxcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LmZpZWxkc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJTdGF0ZXNcIiBncm93PlxuICAgICAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICAgICAgb3B0aW9ucz17c3RhdGVOYW1lc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsczogU2VsZWN0YWJsZVZhbHVlW10pID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc3RhdGVzOiB2YWxzLm1hcCgodikgPT4gdi52YWx1ZSkgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhbGxcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnN0YXRlc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVzYVF1ZXJ5TW9kZXMgPSBbXG4gICd2YWx1ZXMtYXMtcm93cycsXG4gICd2YWx1ZXMtYXMtZmllbGRzJyxcbiAgJ3ZhbHVlcy1hcy1sYWJlbGVkLWZpZWxkcycsXG4gICd0aW1lc2VyaWVzJyxcbiAgJ3RpbWVzZXJpZXMtd2lkZScsXG5dLm1hcCgoZikgPT4gKHsgbGFiZWw6IGYsIHZhbHVlOiBmIH0pKTtcblxuZXhwb3J0IGNvbnN0IGZpZWxkTmFtZXMgPSBbXG4gICdmb28nLFxuICAnYmFyJyxcbiAgJ2JheicsIC8vIGFsbCBzaG9ydFxuXS5tYXAoKGYpID0+ICh7IGxhYmVsOiBmLCB2YWx1ZTogZiB9KSk7XG5cbmV4cG9ydCBjb25zdCBzdGF0ZU5hbWVzID0gW1xuICAnQUwnLFxuICAnQUsnLFxuICAnQVonLFxuICAnQVInLFxuICAnQ0EnLFxuICAnQ08nLFxuICAnQ1QnLFxuICAnREUnLFxuICAnREMnLFxuICAnRkwnLFxuICAnR0EnLFxuICAnSEknLFxuICAnSUQnLFxuICAnSUwnLFxuICAnSU4nLFxuICAnSUEnLFxuICAnS1MnLFxuICAnS1knLFxuICAnTEEnLFxuICAnTUUnLFxuICAnTVQnLFxuICAnTkUnLFxuICAnTlYnLFxuICAnTkgnLFxuICAnTkonLFxuICAnTk0nLFxuICAnTlknLFxuICAnTkMnLFxuICAnTkQnLFxuICAnT0gnLFxuICAnT0snLFxuICAnT1InLFxuICAnTUQnLFxuICAnTUEnLFxuICAnTUknLFxuICAnTU4nLFxuICAnTVMnLFxuICAnTU8nLFxuICAnUEEnLFxuICAnUkknLFxuICAnU0MnLFxuICAnU0QnLFxuICAnVE4nLFxuICAnVFgnLFxuICAnVVQnLFxuICAnVlQnLFxuICAnVkEnLFxuICAnV0EnLFxuICAnV1YnLFxuICAnV0knLFxuICAnV1knLFxuXS5tYXAoKGYpID0+ICh7IGxhYmVsOiBmLCB2YWx1ZTogZiB9KSk7XG4iLCJleHBvcnQgeyBTdHJlYW1pbmdDbGllbnRFZGl0b3IgfSBmcm9tICcuL1N0cmVhbWluZ0NsaWVudEVkaXRvcic7XG5leHBvcnQgeyBSYW5kb21XYWxrRWRpdG9yIH0gZnJvbSAnLi9SYW5kb21XYWxrRWRpdG9yJztcbiIsImltcG9ydCB7IENTVldhdmUsIFRlc3REYXRhUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQdWxzZVF1ZXJ5OiBhbnkgPSB7XG4gIHRpbWVTdGVwOiA2MCxcbiAgb25Db3VudDogMyxcbiAgb25WYWx1ZTogMixcbiAgb2ZmQ291bnQ6IDMsXG4gIG9mZlZhbHVlOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDU1ZXYXZlUXVlcnk6IENTVldhdmVbXSA9IFtcbiAge1xuICAgIHRpbWVTdGVwOiA2MCxcbiAgICB2YWx1ZXNDU1Y6ICcwLDAsMiwyLDEsMScsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFF1ZXJ5OiBUZXN0RGF0YVF1ZXJ5ID0ge1xuICBzY2VuYXJpb0lkOiAncmFuZG9tX3dhbGsnLFxuICByZWZJZDogJycsXG59O1xuIiwiaW1wb3J0IHsgZnJvbSwgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgQW5ub3RhdGlvbkV2ZW50LFxuICBBcnJheURhdGFGcmFtZSxcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIERhdGFUb3BpYyxcbiAgTGl2ZUNoYW5uZWxTY29wZSxcbiAgTG9hZGluZ1N0YXRlLFxuICBUaW1lUmFuZ2UsXG4gIFNjb3BlZFZhcnMsXG4gIHRvRGF0YUZyYW1lLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VXaXRoQmFja2VuZCwgZ2V0QmFja2VuZFNydiwgZ2V0R3JhZmFuYUxpdmVTcnYsIGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3ZhcmlhYmxlcy91dGlscyc7XG5cbmltcG9ydCB7IHF1ZXJ5TWV0cmljVHJlZSB9IGZyb20gJy4vbWV0cmljVHJlZSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbU5vZGVzLCBzYXZlZE5vZGVzUmVzcG9uc2UgfSBmcm9tICcuL25vZGVHcmFwaFV0aWxzJztcbmltcG9ydCB7IHJ1blN0cmVhbSB9IGZyb20gJy4vcnVuU3RyZWFtcyc7XG5pbXBvcnQgeyBTY2VuYXJpbywgVGVzdERhdGFRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgVGVzdERhdGFWYXJpYWJsZVN1cHBvcnQgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0RGF0YURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlV2l0aEJhY2tlbmQ8VGVzdERhdGFRdWVyeT4ge1xuICBzY2VuYXJpb3NDYWNoZT86IFByb21pc2U8U2NlbmFyaW9bXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpXG4gICkge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMudmFyaWFibGVzID0gbmV3IFRlc3REYXRhVmFyaWFibGVTdXBwb3J0KCk7XG4gIH1cblxuICBxdWVyeShvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGNvbnN0IGJhY2tlbmRRdWVyaWVzOiBUZXN0RGF0YVF1ZXJ5W10gPSBbXTtcbiAgICBjb25zdCBzdHJlYW1zOiBBcnJheTxPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPj4gPSBbXTtcblxuICAgIC8vIFN0YXJ0IHN0cmVhbXMgYW5kIHByZXBhcmUgcXVlcmllc1xuICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIG9wdGlvbnMudGFyZ2V0cykge1xuICAgICAgaWYgKHRhcmdldC5oaWRlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlc29sdmVUZW1wbGF0ZVZhcmlhYmxlcyh0YXJnZXQsIG9wdGlvbnMuc2NvcGVkVmFycyk7XG5cbiAgICAgIHN3aXRjaCAodGFyZ2V0LnNjZW5hcmlvSWQpIHtcbiAgICAgICAgY2FzZSAnbGl2ZSc6XG4gICAgICAgICAgc3RyZWFtcy5wdXNoKHJ1bkdyYWZhbmFMaXZlUXVlcnkodGFyZ2V0LCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmVhbWluZ19jbGllbnQnOlxuICAgICAgICAgIHN0cmVhbXMucHVzaChydW5TdHJlYW0odGFyZ2V0LCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dyYWZhbmFfYXBpJzpcbiAgICAgICAgICBzdHJlYW1zLnB1c2gocnVuR3JhZmFuYUFQSSh0YXJnZXQsIG9wdGlvbnMpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYW5ub3RhdGlvbnMnOlxuICAgICAgICAgIHN0cmVhbXMucHVzaCh0aGlzLmFubm90YXRpb25EYXRhVG9waWNUZXN0KHRhcmdldCwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd2YXJpYWJsZXMtcXVlcnknOlxuICAgICAgICAgIHN0cmVhbXMucHVzaCh0aGlzLnZhcmlhYmxlc1F1ZXJ5KHRhcmdldCwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdub2RlX2dyYXBoJzpcbiAgICAgICAgICBzdHJlYW1zLnB1c2godGhpcy5ub2Rlc1F1ZXJ5KHRhcmdldCwgb3B0aW9ucykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyYXdfZnJhbWUnOlxuICAgICAgICAgIHN0cmVhbXMucHVzaCh0aGlzLnJhd0ZyYW1lUXVlcnkodGFyZ2V0LCBvcHRpb25zKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NlcnZlcl9lcnJvcl81MDAnOlxuICAgICAgICAgIC8vIHRoaXMgbm93IGhhcyBhbiBvcHRpb24gd2hlcmUgaXQgY2FuIHJldHVybi90aHJvdyBhbiBlcnJvciBmcm9tIHRoZSBmcm9udGVuZC5cbiAgICAgICAgICAvLyBpZiBpdCBkb2Vzbid0LCBzZW5kIGl0IHRvIHRoZSBiYWNrZW5kIHdoZXJlIGl0IG1pZ2h0IHBhbmljIHRoZXJlIDopXG4gICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLnNlcnZlckVycm9yUXVlcnkodGFyZ2V0LCBvcHRpb25zKTtcbiAgICAgICAgICBxdWVyeSA/IHN0cmVhbXMucHVzaChxdWVyeSkgOiBiYWNrZW5kUXVlcmllcy5wdXNoKHRhcmdldCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIFVudXNhYmxlIHNpbmNlIDcsIHJlbW92ZWQgaW4gOFxuICAgICAgICBjYXNlICdtYW51YWxfZW50cnknOiB7XG4gICAgICAgICAgbGV0IGNzdkNvbnRlbnQgPSAnVGltZSxWYWx1ZVxcbic7XG4gICAgICAgICAgaWYgKCh0YXJnZXQgYXMgYW55KS5wb2ludHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcG9pbnQgb2YgKHRhcmdldCBhcyBhbnkpLnBvaW50cykge1xuICAgICAgICAgICAgICBjc3ZDb250ZW50ICs9IGAke3BvaW50WzFdfSwke3BvaW50WzBdfVxcbmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5zY2VuYXJpb0lkID0gJ2Nzdl9jb250ZW50JztcbiAgICAgICAgICB0YXJnZXQuY3N2Q29udGVudCA9IGNzdkNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJhY2tlbmRRdWVyaWVzLnB1c2godGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYmFja2VuZFF1ZXJpZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBiYWNrZW5kT3B0cyA9IHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgdGFyZ2V0czogYmFja2VuZFF1ZXJpZXMsXG4gICAgICB9O1xuICAgICAgc3RyZWFtcy5wdXNoKHN1cGVyLnF1ZXJ5KGJhY2tlbmRPcHRzKSk7XG4gICAgfVxuXG4gICAgaWYgKHN0cmVhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gb2YoeyBkYXRhOiBbXSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoLi4uc3RyZWFtcyk7XG4gIH1cblxuICByZXNvbHZlVGVtcGxhdGVWYXJpYWJsZXMocXVlcnk6IFRlc3REYXRhUXVlcnksIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpIHtcbiAgICBpZiAocXVlcnkubGFiZWxzKSB7XG4gICAgICBxdWVyeS5sYWJlbHMgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkubGFiZWxzLCBzY29wZWRWYXJzKTtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5LmFsaWFzKSB7XG4gICAgICBxdWVyeS5hbGlhcyA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5hbGlhcywgc2NvcGVkVmFycyk7XG4gICAgfVxuICAgIGlmIChxdWVyeS5zY2VuYXJpb0lkKSB7XG4gICAgICBxdWVyeS5zY2VuYXJpb0lkID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnNjZW5hcmlvSWQsIHNjb3BlZFZhcnMpO1xuICAgIH1cbiAgICBpZiAocXVlcnkuc3RyaW5nSW5wdXQpIHtcbiAgICAgIHF1ZXJ5LnN0cmluZ0lucHV0ID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnN0cmluZ0lucHV0LCBzY29wZWRWYXJzKTtcbiAgICB9XG4gICAgaWYgKHF1ZXJ5LmNzdkNvbnRlbnQpIHtcbiAgICAgIHF1ZXJ5LmNzdkNvbnRlbnQgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkuY3N2Q29udGVudCwgc2NvcGVkVmFycyk7XG4gICAgfVxuICAgIGlmIChxdWVyeS5yYXdGcmFtZUNvbnRlbnQpIHtcbiAgICAgIHF1ZXJ5LnJhd0ZyYW1lQ29udGVudCA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5yYXdGcmFtZUNvbnRlbnQsIHNjb3BlZFZhcnMpO1xuICAgIH1cbiAgfVxuXG4gIGFubm90YXRpb25EYXRhVG9waWNUZXN0KHRhcmdldDogVGVzdERhdGFRdWVyeSwgcmVxOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuYnVpbGRGYWtlQW5ub3RhdGlvbkV2ZW50cyhyZXEucmFuZ2UsIDUwKTtcbiAgICBjb25zdCBkYXRhRnJhbWUgPSBuZXcgQXJyYXlEYXRhRnJhbWUoZXZlbnRzKTtcbiAgICBkYXRhRnJhbWUubWV0YSA9IHsgZGF0YVRvcGljOiBEYXRhVG9waWMuQW5ub3RhdGlvbnMgfTtcblxuICAgIHJldHVybiBvZih7IGtleTogdGFyZ2V0LnJlZklkLCBkYXRhOiBbZGF0YUZyYW1lXSB9KS5waXBlKGRlbGF5KDEwMCkpO1xuICB9XG5cbiAgYnVpbGRGYWtlQW5ub3RhdGlvbkV2ZW50cyhyYW5nZTogVGltZVJhbmdlLCBjb3VudDogbnVtYmVyKTogQW5ub3RhdGlvbkV2ZW50W10ge1xuICAgIGxldCB0aW1lV2Fsa2VyID0gcmFuZ2UuZnJvbS52YWx1ZU9mKCk7XG4gICAgY29uc3QgdG8gPSByYW5nZS50by52YWx1ZU9mKCk7XG4gICAgY29uc3QgZXZlbnRzID0gW107XG4gICAgY29uc3Qgc3RlcCA9ICh0byAtIHRpbWVXYWxrZXIpIC8gY291bnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgdGltZTogdGltZVdhbGtlcixcbiAgICAgICAgdGV4dDogJ1RoaXMgaXMgdGhlIHRleHQsIDxhIGhyZWY9XCJodHRwczovL2dyYWZhbmEuY29tXCI+R3JhZmFuYS5jb208L2E+JyxcbiAgICAgICAgdGFnczogWyd0ZXh0JywgJ3NlcnZlciddLFxuICAgICAgfSk7XG4gICAgICB0aW1lV2Fsa2VyICs9IHN0ZXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50cztcbiAgfVxuXG4gIGFubm90YXRpb25RdWVyeShvcHRpb25zOiBhbnkpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuYnVpbGRGYWtlQW5ub3RhdGlvbkV2ZW50cyhvcHRpb25zLnJhbmdlLCAxMCkpO1xuICB9XG5cbiAgZ2V0UXVlcnlEaXNwbGF5VGV4dChxdWVyeTogVGVzdERhdGFRdWVyeSkge1xuICAgIGNvbnN0IHNjZW5hcmlvID0gcXVlcnkuc2NlbmFyaW9JZCA/PyAnRGVmYXVsdCBzY2VuYXJpbyc7XG5cbiAgICBpZiAocXVlcnkuYWxpYXMpIHtcbiAgICAgIHJldHVybiBzY2VuYXJpbyArICcgYXMgJyArIHF1ZXJ5LmFsaWFzO1xuICAgIH1cblxuICAgIHJldHVybiBzY2VuYXJpbztcbiAgfVxuXG4gIHRlc3REYXRhc291cmNlKCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgaXMgd29ya2luZycsXG4gICAgfSk7XG4gIH1cblxuICBnZXRTY2VuYXJpb3MoKTogUHJvbWlzZTxTY2VuYXJpb1tdPiB7XG4gICAgaWYgKCF0aGlzLnNjZW5hcmlvc0NhY2hlKSB7XG4gICAgICB0aGlzLnNjZW5hcmlvc0NhY2hlID0gdGhpcy5nZXRSZXNvdXJjZSgnc2NlbmFyaW9zJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2NlbmFyaW9zQ2FjaGU7XG4gIH1cblxuICB2YXJpYWJsZXNRdWVyeSh0YXJnZXQ6IFRlc3REYXRhUXVlcnksIG9wdGlvbnM6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgcXVlcnkgPSB0YXJnZXQuc3RyaW5nSW5wdXQgPz8gJyc7XG4gICAgY29uc3QgaW50ZXJwb2xhdGVkUXVlcnkgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoXG4gICAgICBxdWVyeSxcbiAgICAgIGdldFNlYXJjaEZpbHRlclNjb3BlZFZhcih7IHF1ZXJ5LCB3aWxkY2FyZENoYXI6ICcqJywgb3B0aW9uczogb3B0aW9ucy5zY29wZWRWYXJzIH0pXG4gICAgKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHF1ZXJ5TWV0cmljVHJlZShpbnRlcnBvbGF0ZWRRdWVyeSk7XG4gICAgY29uc3QgaXRlbXMgPSBjaGlsZHJlbi5tYXAoKGl0ZW0pID0+ICh7IHZhbHVlOiBpdGVtLm5hbWUsIHRleHQ6IGl0ZW0ubmFtZSB9KSk7XG4gICAgY29uc3QgZGF0YUZyYW1lID0gbmV3IEFycmF5RGF0YUZyYW1lKGl0ZW1zKTtcblxuICAgIHJldHVybiBvZih7IGRhdGE6IFtkYXRhRnJhbWVdIH0pLnBpcGUoZGVsYXkoMTAwKSk7XG4gIH1cblxuICBub2Rlc1F1ZXJ5KHRhcmdldDogVGVzdERhdGFRdWVyeSwgb3B0aW9uczogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCB0eXBlID0gdGFyZ2V0Lm5vZGVzPy50eXBlIHx8ICdyYW5kb20nO1xuICAgIGxldCBmcmFtZXM6IERhdGFGcmFtZVtdO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAncmFuZG9tJzpcbiAgICAgICAgZnJhbWVzID0gZ2VuZXJhdGVSYW5kb21Ob2Rlcyh0YXJnZXQubm9kZXM/LmNvdW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXNwb25zZSc6XG4gICAgICAgIGZyYW1lcyA9IHNhdmVkTm9kZXNSZXNwb25zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBub2RlX2dyYXBoIHN1YiB0eXBlICR7dHlwZX1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2YoeyBkYXRhOiBmcmFtZXMgfSkucGlwZShkZWxheSgxMDApKTtcbiAgfVxuXG4gIHJhd0ZyYW1lUXVlcnkodGFyZ2V0OiBUZXN0RGF0YVF1ZXJ5LCBvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh0YXJnZXQucmF3RnJhbWVDb250ZW50ID8/ICdbXScpLm1hcCgodjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGYgPSB0b0RhdGFGcmFtZSh2KTtcbiAgICAgICAgZi5yZWZJZCA9IHRhcmdldC5yZWZJZDtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvZih7IGRhdGEsIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSB9KS5waXBlKGRlbGF5KDEwMCkpO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICByZXR1cm4gb2YoeyBkYXRhOiBbXSwgZXJyb3I6IGV4IH0pLnBpcGUoZGVsYXkoMTAwKSk7XG4gICAgfVxuICB9XG5cbiAgc2VydmVyRXJyb3JRdWVyeShcbiAgICB0YXJnZXQ6IFRlc3REYXRhUXVlcnksXG4gICAgb3B0aW9uczogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5PlxuICApOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB8IG51bGwge1xuICAgIGNvbnN0IHsgZXJyb3JUeXBlIH0gPSB0YXJnZXQ7XG4gICAgY29uc29sZS5sb2coXCJ3ZSdyZSBoZXJlIVwiLCB0YXJnZXQpO1xuXG4gICAgaWYgKGVycm9yVHlwZSA9PT0gJ3NlcnZlcl9wYW5pYycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZ0lucHV0ID0gdGFyZ2V0LnN0cmluZ0lucHV0ID8/ICcnO1xuICAgIGlmIChzdHJpbmdJbnB1dCA9PT0gJycpIHtcbiAgICAgIGlmIChlcnJvclR5cGUgPT09ICdmcm9udGVuZF9leGNlcHRpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2NlbmFyaW8gdGhyZXcgYW4gZXhjZXB0aW9uIGluIHRoZSBmcm9udGVuZCBiZWNhdXNlIHRoZSBpbnB1dCB3YXMgZW1wdHkuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhyb3dFcnJvcigoKSA9PiBuZXcgRXJyb3IoJ1NjZW5hcmlvIHJldHVybmVkIGFuIGVycm9yIGJlY2F1c2UgdGhlIGlucHV0IHdhcyBlbXB0eS4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuR3JhZmFuYUFQSSh0YXJnZXQ6IFRlc3REYXRhUXVlcnksIHJlcTogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgY29uc3QgdXJsID0gYC9hcGkvJHt0YXJnZXQuc3RyaW5nSW5wdXR9YDtcbiAgcmV0dXJuIGZyb20oXG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZ2V0KHVybClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBuZXcgQXJyYXlEYXRhRnJhbWUocmVzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgICAgICAgZGF0YTogW2ZyYW1lXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICk7XG59XG5cbmxldCBsaXZlUXVlcnlDb3VudGVyID0gMTAwMDtcblxuZnVuY3Rpb24gcnVuR3JhZmFuYUxpdmVRdWVyeShcbiAgdGFyZ2V0OiBUZXN0RGF0YVF1ZXJ5LFxuICByZXE6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT5cbik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgaWYgKCF0YXJnZXQuY2hhbm5lbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBjaGFubmVsIGNvbmZpZ2ApO1xuICB9XG4gIHJldHVybiBnZXRHcmFmYW5hTGl2ZVNydigpLmdldERhdGFTdHJlYW0oe1xuICAgIGFkZHI6IHtcbiAgICAgIHNjb3BlOiBMaXZlQ2hhbm5lbFNjb3BlLlBsdWdpbixcbiAgICAgIG5hbWVzcGFjZTogJ3Rlc3RkYXRhJyxcbiAgICAgIHBhdGg6IHRhcmdldC5jaGFubmVsLFxuICAgIH0sXG4gICAga2V5OiBgdGVzdFN0cmVhbS4ke2xpdmVRdWVyeUNvdW50ZXIrK31gLFxuICB9KTtcbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgVHJlZU5vZGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBUcmVlTm9kZVtdO1xufVxuXG4vKlxuICogIEJ1aWxkcyBhIG5lc3RlZCB0cmVlIGxpa2VcbiAqICBbXG4gKiAgICB7XG4gKiAgICAgIG5hbWU6ICdBJyxcbiAqICAgICAgY2hpbGRyZW46IFtcbiAqICAgICAgICB7IG5hbWU6ICdBQScsIGNoaWxkcmVuOiBbXSB9LFxuICogICAgICAgIHsgbmFtZTogJ0FCJywgY2hpbGRyZW46IFtdIH0sXG4gKiAgICAgIF1cbiAqICAgIH1cbiAqICBdXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWV0cmljVHJlZShwYXJlbnQ6IHN0cmluZywgZGVwdGg6IG51bWJlcik6IFRyZWVOb2RlW10ge1xuICBjb25zdCBjaGFycyA9IFsnQScsICdCJywgJ0MnXTtcbiAgY29uc3QgY2hpbGRyZW46IFRyZWVOb2RlW10gPSBbXTtcblxuICBpZiAoZGVwdGggPiA1KSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZm9yIChjb25zdCBsZXR0ZXIgb2YgY2hhcnMpIHtcbiAgICBjb25zdCBub2RlTmFtZSA9IGAke3BhcmVudH0ke2xldHRlcn1gO1xuICAgIGNoaWxkcmVuLnB1c2goe1xuICAgICAgbmFtZTogbm9kZU5hbWUsXG4gICAgICBjaGlsZHJlbjogYnVpbGRNZXRyaWNUcmVlKG5vZGVOYW1lLCBkZXB0aCArIDEpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBxdWVyeVRyZWUoY2hpbGRyZW46IFRyZWVOb2RlW10sIHF1ZXJ5OiBzdHJpbmdbXSwgcXVlcnlJbmRleDogbnVtYmVyKTogVHJlZU5vZGVbXSB7XG4gIGlmIChxdWVyeUluZGV4ID49IHF1ZXJ5Lmxlbmd0aCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIGlmIChxdWVyeVtxdWVyeUluZGV4XSA9PT0gJyonKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgY29uc3Qgbm9kZVF1ZXJ5ID0gcXVlcnlbcXVlcnlJbmRleF07XG4gIGxldCByZXN1bHQ6IFRyZWVOb2RlW10gPSBbXTtcbiAgbGV0IG5hbWVzVG9NYXRjaCA9IFtub2RlUXVlcnldO1xuXG4gIC8vIGhhbmRsZSBnbG9iIHF1ZXJpZXNcbiAgaWYgKG5vZGVRdWVyeS5zdGFydHNXaXRoKCd7JykpIHtcbiAgICBuYW1lc1RvTWF0Y2ggPSBub2RlUXVlcnkucmVwbGFjZSgvXFx7fFxcfS9nLCAnJykuc3BsaXQoJywnKTtcbiAgfVxuXG4gIGZvciAoY29uc3Qgbm9kZSBvZiBjaGlsZHJlbikge1xuICAgIGZvciAoY29uc3QgbmFtZVRvTWF0Y2ggb2YgbmFtZXNUb01hdGNoKSB7XG4gICAgICBpZiAobmFtZVRvTWF0Y2guaW5kZXhPZignKicpICE9PSAtMSkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gbmFtZVRvTWF0Y2gucmVwbGFjZSgnKicsICcnKTtcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGBeJHtwYXR0ZXJufS4qYCwgJ2dpJyk7XG4gICAgICAgIGlmIChyZWdleC50ZXN0KG5vZGUubmFtZSkpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHF1ZXJ5VHJlZShbbm9kZV0sIHF1ZXJ5LCBxdWVyeUluZGV4ICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG5vZGUubmFtZSA9PT0gbmFtZVRvTWF0Y2gpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChxdWVyeVRyZWUobm9kZS5jaGlsZHJlbiwgcXVlcnksIHF1ZXJ5SW5kZXggKyAxKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5TWV0cmljVHJlZShxdWVyeTogc3RyaW5nKTogVHJlZU5vZGVbXSB7XG4gIGlmIChxdWVyeS5pbmRleE9mKCd2YWx1ZScpID09PSAwKSB7XG4gICAgcmV0dXJuIFt7IG5hbWU6IHF1ZXJ5LCBjaGlsZHJlbjogW10gfV07XG4gIH1cblxuICBjb25zdCBjaGlsZHJlbiA9IGJ1aWxkTWV0cmljVHJlZSgnJywgMCk7XG4gIHJldHVybiBxdWVyeVRyZWUoY2hpbGRyZW4sIHF1ZXJ5LnNwbGl0KCcuJyksIDApO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBDb25maWdFZGl0b3IgfSBmcm9tICcuL0NvbmZpZ0VkaXRvcic7XG5pbXBvcnQgeyBRdWVyeUVkaXRvciB9IGZyb20gJy4vUXVlcnlFZGl0b3InO1xuaW1wb3J0IHsgVGVzdEluZm9UYWIgfSBmcm9tICcuL1Rlc3RJbmZvVGFiJztcbmltcG9ydCB7IFRlc3REYXRhRGF0YVNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmNsYXNzIFRlc3REYXRhQW5ub3RhdGlvbnNRdWVyeUN0cmwge1xuICBhbm5vdGF0aW9uOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgc3RhdGljIHRlbXBsYXRlID0gJzxoMj5Bbm5vdGF0aW9uIHNjZW5hcmlvPC9oMj4nO1xufVxuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW4oVGVzdERhdGFEYXRhU291cmNlKVxuICAuc2V0Q29uZmlnRWRpdG9yKENvbmZpZ0VkaXRvcilcbiAgLnNldFF1ZXJ5RWRpdG9yKFF1ZXJ5RWRpdG9yKVxuICAuc2V0QW5ub3RhdGlvblF1ZXJ5Q3RybChUZXN0RGF0YUFubm90YXRpb25zUXVlcnlDdHJsKVxuICAuYWRkQ29uZmlnUGFnZSh7XG4gICAgdGl0bGU6ICdTZXR1cCcsXG4gICAgaWNvbjogJ2xpc3QtdWwnLFxuICAgIGJvZHk6IFRlc3RJbmZvVGFiLFxuICAgIGlkOiAnc2V0dXAnLFxuICB9KTtcbiIsImltcG9ydCB7XG4gIEFycmF5VmVjdG9yLFxuICBGaWVsZENvbG9yTW9kZUlkLFxuICBGaWVsZERUTyxcbiAgRmllbGRUeXBlLFxuICBNdXRhYmxlRGF0YUZyYW1lLFxuICBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgbm9kZXMsIGVkZ2VzIH0gZnJvbSAnLi90ZXN0RGF0YS9zZXJ2aWNlTWFwUmVzcG9uc2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21Ob2Rlcyhjb3VudCA9IDEwKSB7XG4gIGNvbnN0IG5vZGVzID0gW107XG5cbiAgY29uc3Qgcm9vdCA9IHtcbiAgICBpZDogJzAnLFxuICAgIHRpdGxlOiAncm9vdCcsXG4gICAgc3ViVGl0bGU6ICdjbGllbnQnLFxuICAgIHN1Y2Nlc3M6IDEsXG4gICAgZXJyb3I6IDAsXG4gICAgc3RhdDE6IE1hdGgucmFuZG9tKCksXG4gICAgc3RhdDI6IE1hdGgucmFuZG9tKCksXG4gICAgZWRnZXM6IFtdIGFzIGFueVtdLFxuICB9O1xuICBub2Rlcy5wdXNoKHJvb3QpO1xuICBjb25zdCBub2Rlc1dpdGhvdXRNYXhFZGdlcyA9IFtyb290XTtcblxuICBjb25zdCBtYXhFZGdlcyA9IDM7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ha2VSYW5kb21Ob2RlKGkpO1xuICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgY29uc3Qgc291cmNlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG5vZGVzV2l0aG91dE1heEVkZ2VzLmxlbmd0aCAtIDEpKTtcbiAgICBjb25zdCBzb3VyY2UgPSBub2Rlc1dpdGhvdXRNYXhFZGdlc1tzb3VyY2VJbmRleF07XG4gICAgc291cmNlLmVkZ2VzLnB1c2gobm9kZS5pZCk7XG4gICAgaWYgKHNvdXJjZS5lZGdlcy5sZW5ndGggPj0gbWF4RWRnZXMpIHtcbiAgICAgIG5vZGVzV2l0aG91dE1heEVkZ2VzLnNwbGljZShzb3VyY2VJbmRleCwgMSk7XG4gICAgfVxuICAgIG5vZGVzV2l0aG91dE1heEVkZ2VzLnB1c2gobm9kZSk7XG4gIH1cblxuICAvLyBBZGQgc29tZSByYW5kb20gZWRnZXMgdG8gY3JlYXRlIHBvc3NpYmxlIGN5Y2xlXG4gIGNvbnN0IGFkZGl0aW9uYWxFZGdlcyA9IE1hdGguZmxvb3IoY291bnQgLyAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYWRkaXRpb25hbEVkZ2VzOyBpKyspIHtcbiAgICBjb25zdCBzb3VyY2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3Iobm9kZXMubGVuZ3RoIC0gMSkpO1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihub2Rlcy5sZW5ndGggLSAxKSk7XG4gICAgaWYgKHNvdXJjZUluZGV4ID09PSB0YXJnZXRJbmRleCB8fCBub2Rlc1tzb3VyY2VJbmRleF0uaWQgPT09ICcwJyB8fCBub2Rlc1tzb3VyY2VJbmRleF0uaWQgPT09ICcwJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbm9kZXNbc291cmNlSW5kZXhdLmVkZ2VzLnB1c2gobm9kZXNbc291cmNlSW5kZXhdLmlkKTtcbiAgfVxuXG4gIGNvbnN0IG5vZGVGaWVsZHM6IFJlY29yZDxzdHJpbmcsIE9taXQ8RmllbGREVE8sICduYW1lJz4gJiB7IHZhbHVlczogQXJyYXlWZWN0b3IgfT4gPSB7XG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuaWRdOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICB9LFxuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnRpdGxlXToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgfSxcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5zdWJUaXRsZV06IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgIH0sXG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMubWFpblN0YXRdOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ1RyYW5zYWN0aW9ucyBwZXIgc2Vjb25kJyB9LFxuICAgIH0sXG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuc2Vjb25kYXJ5U3RhdF06IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnQXZlcmFnZSBkdXJhdGlvbicgfSxcbiAgICB9LFxuICAgIFtOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmFyYyArICdzdWNjZXNzJ106IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IGNvbG9yOiB7IGZpeGVkQ29sb3I6ICdncmVlbicsIG1vZGU6IEZpZWxkQ29sb3JNb2RlSWQuRml4ZWQgfSwgZGlzcGxheU5hbWU6ICdTdWNjZXNzJyB9LFxuICAgIH0sXG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuYXJjICsgJ2Vycm9ycyddOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBmaXhlZENvbG9yOiAncmVkJywgbW9kZTogRmllbGRDb2xvck1vZGVJZC5GaXhlZCB9LCBkaXNwbGF5TmFtZTogJ0Vycm9ycycgfSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IG5vZGVGcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBuYW1lOiAnbm9kZXMnLFxuICAgIGZpZWxkczogT2JqZWN0LmtleXMobm9kZUZpZWxkcykubWFwKChrZXkpID0+ICh7XG4gICAgICAuLi5ub2RlRmllbGRzW2tleV0sXG4gICAgICBuYW1lOiBrZXksXG4gICAgfSkpLFxuICAgIG1ldGE6IHsgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGVkZ2VGaWVsZHM6IGFueSA9IHtcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5pZF06IHtcbiAgICAgIHZhbHVlczogbmV3IEFycmF5VmVjdG9yKCksXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgIH0sXG4gICAgW05vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuc291cmNlXToge1xuICAgICAgdmFsdWVzOiBuZXcgQXJyYXlWZWN0b3IoKSxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgfSxcbiAgICBbTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy50YXJnZXRdOiB7XG4gICAgICB2YWx1ZXM6IG5ldyBBcnJheVZlY3RvcigpLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IGVkZ2VzRnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgbmFtZTogJ2VkZ2VzJyxcbiAgICBmaWVsZHM6IE9iamVjdC5rZXlzKGVkZ2VGaWVsZHMpLm1hcCgoa2V5KSA9PiAoe1xuICAgICAgLi4uZWRnZUZpZWxkc1trZXldLFxuICAgICAgbmFtZToga2V5LFxuICAgIH0pKSxcbiAgICBtZXRhOiB7IHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbm9kZUdyYXBoJyB9LFxuICB9KTtcblxuICBjb25zdCBlZGdlc1NldCA9IG5ldyBTZXQoKTtcbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZUZpZWxkcy5pZC52YWx1ZXMuYWRkKG5vZGUuaWQpO1xuICAgIG5vZGVGaWVsZHMudGl0bGUudmFsdWVzLmFkZChub2RlLnRpdGxlKTtcbiAgICBub2RlRmllbGRzLnN1YlRpdGxlLnZhbHVlcy5hZGQobm9kZS5zdWJUaXRsZSk7XG4gICAgbm9kZUZpZWxkcy5tYWluU3RhdC52YWx1ZXMuYWRkKG5vZGUuc3RhdDEpO1xuICAgIG5vZGVGaWVsZHMuc2Vjb25kYXJ5U3RhdC52YWx1ZXMuYWRkKG5vZGUuc3RhdDIpO1xuICAgIG5vZGVGaWVsZHMuYXJjX19zdWNjZXNzLnZhbHVlcy5hZGQobm9kZS5zdWNjZXNzKTtcbiAgICBub2RlRmllbGRzLmFyY19fZXJyb3JzLnZhbHVlcy5hZGQobm9kZS5lcnJvcik7XG4gICAgZm9yIChjb25zdCBlZGdlIG9mIG5vZGUuZWRnZXMpIHtcbiAgICAgIGNvbnN0IGlkID0gYCR7bm9kZS5pZH0tLSR7ZWRnZX1gO1xuICAgICAgLy8gV2UgY2FuIGhhdmUgZHVwbGljYXRlIGVkZ2VzIHdoZW4gd2UgYWRkZWQgc29tZSBtb3JlIGJ5IHJhbmRvbVxuICAgICAgaWYgKGVkZ2VzU2V0LmhhcyhpZCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBlZGdlc1NldC5hZGQoaWQpO1xuICAgICAgZWRnZUZpZWxkcy5pZC52YWx1ZXMuYWRkKGAke25vZGUuaWR9LS0ke2VkZ2V9YCk7XG4gICAgICBlZGdlRmllbGRzLnNvdXJjZS52YWx1ZXMuYWRkKG5vZGUuaWQpO1xuICAgICAgZWRnZUZpZWxkcy50YXJnZXQudmFsdWVzLmFkZChlZGdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW25vZGVGcmFtZSwgZWRnZXNGcmFtZV07XG59XG5cbmZ1bmN0aW9uIG1ha2VSYW5kb21Ob2RlKGluZGV4OiBudW1iZXIpIHtcbiAgY29uc3Qgc3VjY2VzcyA9IE1hdGgucmFuZG9tKCk7XG4gIGNvbnN0IGVycm9yID0gMSAtIHN1Y2Nlc3M7XG4gIHJldHVybiB7XG4gICAgaWQ6IGluZGV4LnRvU3RyaW5nKCksXG4gICAgdGl0bGU6IGBzZXJ2aWNlOiR7aW5kZXh9YCxcbiAgICBzdWJUaXRsZTogJ3NlcnZpY2UnLFxuICAgIHN1Y2Nlc3MsXG4gICAgZXJyb3IsXG4gICAgc3RhdDE6IE1hdGgucmFuZG9tKCksXG4gICAgc3RhdDI6IE1hdGgucmFuZG9tKCksXG4gICAgZWRnZXM6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZWROb2Rlc1Jlc3BvbnNlKCk6IGFueSB7XG4gIHJldHVybiBbbmV3IE11dGFibGVEYXRhRnJhbWUobm9kZXMpLCBuZXcgTXV0YWJsZURhdGFGcmFtZShlZGdlcyldO1xufVxuIiwiaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRmllbGRUeXBlLFxuICBDaXJjdWxhckRhdGFGcmFtZSxcbiAgQ1NWUmVhZGVyLFxuICBGaWVsZCxcbiAgTG9hZGluZ1N0YXRlLFxuICBEYXRhRnJhbWVTY2hlbWEsXG4gIERhdGFGcmFtZURhdGEsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbGl2ZVRpbWVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9saXZlVGltZXInO1xuaW1wb3J0IHsgU3RyZWFtaW5nRGF0YUZyYW1lIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2xpdmUvZGF0YS9TdHJlYW1pbmdEYXRhRnJhbWUnO1xuXG5pbXBvcnQgeyBnZXRSYW5kb21MaW5lIH0gZnJvbSAnLi9Mb2dJcHN1bSc7XG5pbXBvcnQgeyBUZXN0RGF0YVF1ZXJ5LCBTdHJlYW1pbmdRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0cmVhbVF1ZXJ5OiBTdHJlYW1pbmdRdWVyeSA9IHtcbiAgdHlwZTogJ3NpZ25hbCcsXG4gIHNwZWVkOiAyNTAsIC8vIG1zXG4gIHNwcmVhZDogMy41LFxuICBub2lzZTogMi4yLFxuICBiYW5kczogMSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5TdHJlYW0odGFyZ2V0OiBUZXN0RGF0YVF1ZXJ5LCByZXE6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gIGNvbnN0IHF1ZXJ5ID0gZGVmYXVsdHModGFyZ2V0LnN0cmVhbSwgZGVmYXVsdFN0cmVhbVF1ZXJ5KTtcbiAgaWYgKCdzaWduYWwnID09PSBxdWVyeS50eXBlKSB7XG4gICAgcmV0dXJuIHJ1blNpZ25hbFN0cmVhbSh0YXJnZXQsIHF1ZXJ5LCByZXEpO1xuICB9XG4gIGlmICgnbG9ncycgPT09IHF1ZXJ5LnR5cGUpIHtcbiAgICByZXR1cm4gcnVuTG9nc1N0cmVhbSh0YXJnZXQsIHF1ZXJ5LCByZXEpO1xuICB9XG4gIGlmICgnZmV0Y2gnID09PSBxdWVyeS50eXBlKSB7XG4gICAgcmV0dXJuIHJ1bkZldGNoU3RyZWFtKHRhcmdldCwgcXVlcnksIHJlcSk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFN0cmVhbSBUeXBlOiAke3F1ZXJ5LnR5cGV9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5TaWduYWxTdHJlYW0oXG4gIHRhcmdldDogVGVzdERhdGFRdWVyeSxcbiAgcXVlcnk6IFN0cmVhbWluZ1F1ZXJ5LFxuICByZXE6IERhdGFRdWVyeVJlcXVlc3Q8VGVzdERhdGFRdWVyeT5cbik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPigoc3Vic2NyaWJlcikgPT4ge1xuICAgIGNvbnN0IHN0cmVhbUlkID0gYHNpZ25hbC0ke3JlcS5wYW5lbElkfS0ke3RhcmdldC5yZWZJZH1gO1xuICAgIGNvbnN0IG1heERhdGFQb2ludHMgPSByZXEubWF4RGF0YVBvaW50cyB8fCAxMDAwO1xuXG4gICAgY29uc3Qgc2NoZW1hOiBEYXRhRnJhbWVTY2hlbWEgPSB7XG4gICAgICByZWZJZDogdGFyZ2V0LnJlZklkLFxuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHsgbmFtZTogJ3RpbWUnLCB0eXBlOiBGaWVsZFR5cGUudGltZSB9LFxuICAgICAgICB7IG5hbWU6IHRhcmdldC5hbGlhcyA/PyAndmFsdWUnLCB0eXBlOiBGaWVsZFR5cGUubnVtYmVyIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBjb25zdCB7IHNwcmVhZCwgc3BlZWQsIGJhbmRzID0gMCwgbm9pc2UgfSA9IHF1ZXJ5O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFuZHM7IGkrKykge1xuICAgICAgY29uc3Qgc3VmZml4ID0gYmFuZHMgPiAxID8gYCAke2kgKyAxfWAgOiAnJztcbiAgICAgIHNjaGVtYS5maWVsZHMucHVzaCh7IG5hbWU6ICdNaW4nICsgc3VmZml4LCB0eXBlOiBGaWVsZFR5cGUubnVtYmVyIH0pO1xuICAgICAgc2NoZW1hLmZpZWxkcy5wdXNoKHsgbmFtZTogJ01heCcgKyBzdWZmaXgsIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWUgPSBTdHJlYW1pbmdEYXRhRnJhbWUuZnJvbURhdGFGcmFtZUpTT04oeyBzY2hlbWEgfSwgeyBtYXhMZW5ndGg6IG1heERhdGFQb2ludHMgfSk7XG5cbiAgICBsZXQgdmFsdWUgPSBNYXRoLnJhbmRvbSgpICogMTAwO1xuICAgIGxldCB0aW1lb3V0SWQ6IGFueSA9IG51bGw7XG4gICAgbGV0IGxhc3RTZW50ID0gLTE7XG5cbiAgICBjb25zdCBhZGROZXh0Um93ID0gKHRpbWU6IG51bWJlcikgPT4ge1xuICAgICAgdmFsdWUgKz0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogc3ByZWFkO1xuXG4gICAgICBjb25zdCBkYXRhOiBEYXRhRnJhbWVEYXRhID0ge1xuICAgICAgICB2YWx1ZXM6IFtbdGltZV0sIFt2YWx1ZV1dLFxuICAgICAgfTtcblxuICAgICAgbGV0IG1pbiA9IHZhbHVlO1xuICAgICAgbGV0IG1heCA9IHZhbHVlO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbmRzOyBpKyspIHtcbiAgICAgICAgbWluID0gbWluIC0gTWF0aC5yYW5kb20oKSAqIG5vaXNlO1xuICAgICAgICBtYXggPSBtYXggKyBNYXRoLnJhbmRvbSgpICogbm9pc2U7XG5cbiAgICAgICAgZGF0YS52YWx1ZXMucHVzaChbbWluXSk7XG4gICAgICAgIGRhdGEudmFsdWVzLnB1c2goW21heF0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBldmVudCA9IHsgZGF0YSB9O1xuICAgICAgcmV0dXJuIGZyYW1lLnB1c2goZXZlbnQpO1xuICAgIH07XG5cbiAgICAvLyBGaWxsIHRoZSBidWZmZXIgb24gaW5pdFxuICAgIGlmICh0cnVlKSB7XG4gICAgICBsZXQgdGltZSA9IERhdGUubm93KCkgLSBtYXhEYXRhUG9pbnRzICogc3BlZWQ7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heERhdGFQb2ludHM7IGkrKykge1xuICAgICAgICBhZGROZXh0Um93KHRpbWUpO1xuICAgICAgICB0aW1lICs9IHNwZWVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHB1c2hOZXh0RXZlbnQgPSAoKSA9PiB7XG4gICAgICBhZGROZXh0Um93KERhdGUubm93KCkpO1xuXG4gICAgICBjb25zdCBlbGFwc2VkID0gbGl2ZVRpbWVyLmxhc3RVcGRhdGUgLSBsYXN0U2VudDtcbiAgICAgIGlmIChlbGFwc2VkID4gMTAwMCB8fCBsaXZlVGltZXIub2spIHtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KHtcbiAgICAgICAgICBkYXRhOiBbZnJhbWVdLFxuICAgICAgICAgIGtleTogc3RyZWFtSWQsXG4gICAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5TdHJlYW1pbmcsXG4gICAgICAgIH0pO1xuICAgICAgICBsYXN0U2VudCA9IGxpdmVUaW1lci5sYXN0VXBkYXRlO1xuICAgICAgfVxuXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHB1c2hOZXh0RXZlbnQsIHNwZWVkKTtcbiAgICB9O1xuXG4gICAgLy8gU2VuZCBmaXJzdCBldmVudCBpbiA1bXNcbiAgICBzZXRUaW1lb3V0KHB1c2hOZXh0RXZlbnQsIDUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd1bnN1YnNjcmliaW5nIHRvIHN0cmVhbSAnICsgc3RyZWFtSWQpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5Mb2dzU3RyZWFtKFxuICB0YXJnZXQ6IFRlc3REYXRhUXVlcnksXG4gIHF1ZXJ5OiBTdHJlYW1pbmdRdWVyeSxcbiAgcmVxOiBEYXRhUXVlcnlSZXF1ZXN0PFRlc3REYXRhUXVlcnk+XG4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4oKHN1YnNjcmliZXIpID0+IHtcbiAgICBjb25zdCBzdHJlYW1JZCA9IGBsb2dzLSR7cmVxLnBhbmVsSWR9LSR7dGFyZ2V0LnJlZklkfWA7XG4gICAgY29uc3QgbWF4RGF0YVBvaW50cyA9IHJlcS5tYXhEYXRhUG9pbnRzIHx8IDEwMDA7XG5cbiAgICBjb25zdCBkYXRhID0gbmV3IENpcmN1bGFyRGF0YUZyYW1lKHtcbiAgICAgIGFwcGVuZDogJ3RhaWwnLFxuICAgICAgY2FwYWNpdHk6IG1heERhdGFQb2ludHMsXG4gICAgfSk7XG4gICAgZGF0YS5yZWZJZCA9IHRhcmdldC5yZWZJZDtcbiAgICBkYXRhLm5hbWUgPSB0YXJnZXQuYWxpYXMgfHwgJ0xvZ3MgJyArIHRhcmdldC5yZWZJZDtcbiAgICBkYXRhLmFkZEZpZWxkKHsgbmFtZTogJ2xpbmUnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0pO1xuICAgIGRhdGEuYWRkRmllbGQoeyBuYW1lOiAndGltZScsIHR5cGU6IEZpZWxkVHlwZS50aW1lIH0pO1xuICAgIGRhdGEubWV0YSA9IHsgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdsb2dzJyB9O1xuXG4gICAgY29uc3QgeyBzcGVlZCB9ID0gcXVlcnk7XG5cbiAgICBsZXQgdGltZW91dElkOiBhbnkgPSBudWxsO1xuXG4gICAgY29uc3QgcHVzaE5leHRFdmVudCA9ICgpID0+IHtcbiAgICAgIGRhdGEuZmllbGRzWzBdLnZhbHVlcy5hZGQoRGF0ZS5ub3coKSk7XG4gICAgICBkYXRhLmZpZWxkc1sxXS52YWx1ZXMuYWRkKGdldFJhbmRvbUxpbmUoKSk7XG5cbiAgICAgIHN1YnNjcmliZXIubmV4dCh7XG4gICAgICAgIGRhdGE6IFtkYXRhXSxcbiAgICAgICAga2V5OiBzdHJlYW1JZCxcbiAgICAgIH0pO1xuXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHB1c2hOZXh0RXZlbnQsIHNwZWVkKTtcbiAgICB9O1xuXG4gICAgLy8gU2VuZCBmaXJzdCBldmVudCBpbiA1bXNcbiAgICBzZXRUaW1lb3V0KHB1c2hOZXh0RXZlbnQsIDUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd1bnN1YnNjcmliaW5nIHRvIHN0cmVhbSAnICsgc3RyZWFtSWQpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5GZXRjaFN0cmVhbShcbiAgdGFyZ2V0OiBUZXN0RGF0YVF1ZXJ5LFxuICBxdWVyeTogU3RyZWFtaW5nUXVlcnksXG4gIHJlcTogRGF0YVF1ZXJ5UmVxdWVzdDxUZXN0RGF0YVF1ZXJ5PlxuKTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICByZXR1cm4gbmV3IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+KChzdWJzY3JpYmVyKSA9PiB7XG4gICAgY29uc3Qgc3RyZWFtSWQgPSBgZmV0Y2gtJHtyZXEucGFuZWxJZH0tJHt0YXJnZXQucmVmSWR9YDtcbiAgICBjb25zdCBtYXhEYXRhUG9pbnRzID0gcmVxLm1heERhdGFQb2ludHMgfHwgMTAwMDtcblxuICAgIGxldCBkYXRhID0gbmV3IENpcmN1bGFyRGF0YUZyYW1lKHtcbiAgICAgIGFwcGVuZDogJ3RhaWwnLFxuICAgICAgY2FwYWNpdHk6IG1heERhdGFQb2ludHMsXG4gICAgfSk7XG4gICAgZGF0YS5yZWZJZCA9IHRhcmdldC5yZWZJZDtcbiAgICBkYXRhLm5hbWUgPSB0YXJnZXQuYWxpYXMgfHwgJ0ZldGNoICcgKyB0YXJnZXQucmVmSWQ7XG5cbiAgICBsZXQgcmVhZGVyOiBSZWFkYWJsZVN0cmVhbVJlYWRlcjxVaW50OEFycmF5PjtcbiAgICBjb25zdCBjc3YgPSBuZXcgQ1NWUmVhZGVyKHtcbiAgICAgIGNhbGxiYWNrOiB7XG4gICAgICAgIG9uSGVhZGVyOiAoZmllbGRzOiBGaWVsZFtdKSA9PiB7XG4gICAgICAgICAgLy8gQ2xlYXIgYW55IGV4aXN0aW5nIGZpZWxkc1xuICAgICAgICAgIGlmIChkYXRhLmZpZWxkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgQ2lyY3VsYXJEYXRhRnJhbWUoe1xuICAgICAgICAgICAgICBhcHBlbmQ6ICd0YWlsJyxcbiAgICAgICAgICAgICAgY2FwYWNpdHk6IG1heERhdGFQb2ludHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEucmVmSWQgPSB0YXJnZXQucmVmSWQ7XG4gICAgICAgICAgICBkYXRhLm5hbWUgPSAnRmV0Y2ggJyArIHRhcmdldC5yZWZJZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICAgICAgICAgIGRhdGEuYWRkRmllbGQoZmllbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25Sb3c6IChyb3c6IGFueVtdKSA9PiB7XG4gICAgICAgICAgZGF0YS5hZGQocm93KTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9jZXNzQ2h1bmsgPSAodmFsdWU6IFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRSZXN1bHQ8VWludDhBcnJheT4pOiBhbnkgPT4ge1xuICAgICAgaWYgKHZhbHVlLnZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUodmFsdWUudmFsdWUpO1xuICAgICAgICBjc3YucmVhZENTVih0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgc3Vic2NyaWJlci5uZXh0KHtcbiAgICAgICAgZGF0YTogW2RhdGFdLFxuICAgICAgICBrZXk6IHN0cmVhbUlkLFxuICAgICAgICBzdGF0ZTogdmFsdWUuZG9uZSA/IExvYWRpbmdTdGF0ZS5Eb25lIDogTG9hZGluZ1N0YXRlLlN0cmVhbWluZyxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodmFsdWUuZG9uZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnRmluaXNoZWQgc3RyZWFtJyk7XG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTsgLy8gbmVjZXNzYXJ5P1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWFkZXIucmVhZCgpLnRoZW4ocHJvY2Vzc0NodW5rKTtcbiAgICB9O1xuXG4gICAgaWYgKCFxdWVyeS51cmwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncXVlcnkudXJsIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgZmV0Y2gobmV3IFJlcXVlc3QocXVlcnkudXJsKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5ib2R5KSB7XG4gICAgICAgIHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkKCkudGhlbihwcm9jZXNzQ2h1bmspO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIENhbmNlbCBmZXRjaD9cbiAgICAgIGNvbnNvbGUubG9nKCd1bnN1YnNjcmliaW5nIHRvIHN0cmVhbSAnICsgc3RyZWFtSWQpO1xuICAgIH07XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgRmllbGRDb2xvck1vZGVJZCwgRmllbGRUeXBlLCBQcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSwgTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY29uc3Qgbm9kZXMgPSB7XG4gIGZpZWxkczogW1xuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuaWQsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGxpbmtzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUcmFjZXMvQWxsJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogJ2dldFRyYWNlU3VtbWFyaWVzJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogJ3NlcnZpY2UoaWQobmFtZTogXCIke19fZGF0YS5maWVsZHMubmFtZX1cIiwgdHlwZTogXCIke19fZGF0YS5maWVsZHMudHlwZX1cIikpJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogJ0F4NGVyeEhHeicsXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiAnVHJhY2UgZGF0YSBzb3VyY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnVHJhY2VzL09LJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogJ2dldFRyYWNlU3VtbWFyaWVzJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogJ3NlcnZpY2UoaWQobmFtZTogXCIke19fZGF0YS5maWVsZHMubmFtZX1cIiwgdHlwZTogXCIke19fZGF0YS5maWVsZHMudHlwZX1cIikpIHsgb2sgPSB0cnVlIH0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiAnQXg0ZXJ4SEd6JyxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWU6ICdUcmFjZSBkYXRhIHNvdXJjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUcmFjZXMvRXJyb3JzJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogJ2dldFRyYWNlU3VtbWFyaWVzJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogJ3NlcnZpY2UoaWQobmFtZTogXCIke19fZGF0YS5maWVsZHMubmFtZX1cIiwgdHlwZTogXCIke19fZGF0YS5maWVsZHMudHlwZX1cIikpIHsgZXJyb3IgPSB0cnVlIH0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiAnQXg0ZXJ4SEd6JyxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWU6ICdUcmFjZSBkYXRhIHNvdXJjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUcmFjZXMvRmF1bHRzJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogJ2dldFRyYWNlU3VtbWFyaWVzJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogJ3NlcnZpY2UoaWQobmFtZTogXCIke19fZGF0YS5maWVsZHMubmFtZX1cIiwgdHlwZTogXCIke19fZGF0YS5maWVsZHMudHlwZX1cIikpIHsgZmF1bHQgPSB0cnVlIH0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiAnQXg0ZXJ4SEd6JyxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWU6ICdUcmFjZSBkYXRhIHNvdXJjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgdmFsdWVzOiBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0XSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMudGl0bGUsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgICAgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnTmFtZScgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAnYXV0aCcsXG4gICAgICAgICdwcm9kdWN0cycsXG4gICAgICAgICdjdXN0b21lcnMnLFxuICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgJ3Byb2R1Y3RzJyxcbiAgICAgICAgJ29yZGVycycsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnc2hpcHBpbmcnLFxuICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgJ2V4ZWN1dGUtYXBpJyxcbiAgICAgICAgJ3NoaXBwaW5nJyxcbiAgICAgICAgJ3d3dycsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnd3d3JyxcbiAgICAgICAgJ3Byb2R1Y3RzJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnN1YlRpdGxlLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ1R5cGUnIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgJ0NvbXB1dGUnLFxuICAgICAgICAnU1FMJyxcbiAgICAgICAgJ1NRTCcsXG4gICAgICAgICdTUUwnLFxuICAgICAgICAncmVtb3RlJyxcbiAgICAgICAgJ0Z1bmN0aW9uJyxcbiAgICAgICAgJ0NvbXB1dGUnLFxuICAgICAgICAnRnVuY3Rpb24nLFxuICAgICAgICAnRnVuY3Rpb24nLFxuICAgICAgICAncmVtb3RlJyxcbiAgICAgICAgJ0Z1bmN0aW9uJyxcbiAgICAgICAgJ0NvbXB1dGUnLFxuICAgICAgICAnY2xpZW50JyxcbiAgICAgICAgJ2NsaWVudCcsXG4gICAgICAgICdDb21wdXRlJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLm1haW5TdGF0LFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyB1bml0OiAnbXMvdCcsIGRpc3BsYXlOYW1lOiAnQXZlcmFnZSByZXNwb25zZSB0aW1lJyB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgIDMuNTM5NDA0MjY0NjczNTU1MywgMTUuOTA2NDQxMzE4MjIzMjY0LCA0LjkxMzAxMTkyMTU5MTU2NywgNy40MTYzMjAzMDQyMDk0MDk1LCAxMDkyLCAyMi44NTk2MTQ0MTQwNTA2NyxcbiAgICAgICAgNTYuMTM1ODU1NzI5MDg0Njk2LCA0LjQ1OTQ2MTkxNjAxNTI3LCAxMi44MTgzMDAyNzgyODA4NDMsIDQuMjUsIDEyLjU2NTQ0MjY0Njc5MTQ5MiwgNzcuNjM0NDc1MTI3MDA1NjcsXG4gICAgICAgIDQwLjM4NzA5Njc3NDE5MzU0NCwgNzcuNjM0NDc1MTI3MDA1NjcsIDI3LjY0ODk1MDE4NzM3NDg3MixcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnNlY29uZGFyeVN0YXQsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IHVuaXQ6ICd0L21pbicsIGRpc3BsYXlOYW1lOiAnVHJhbnNhY3Rpb25zIHBlciBtaW51dGUnIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgNTAuNTYzMTcxNTQ1MDE2NjcsIDY4Mi40LCA1MTIuODQxNjY2NjY2NjY2NywgMTI1LjY0NDQ0NDQ0NDQ0NDQ1LCAwLjAwNTU4NTgxMjAzNzQyNDk0MSwgMTM3LjU5NzIyMjIyMjIyMjIzLFxuICAgICAgICAzMDAuMDUyNzc3Nzc3Nzc3OCwgMzAuNTgyMzQ4ODUzMzcwMzk0LCAxMjUuNzcyMjIyMjIyMjIyMjMsIDAuMDI4NzA2NDE3MDgwMzE4MTYzLCAzMC41ODIzNDg4NTMzNzAzOTQsIDE2NS42NzUsXG4gICAgICAgIDAuMTAwMDIxNTEwMDAyMTUxLCAxNjUuNjc1LCAxNjIuMzMwNTU1NTU1NTU1NTUsXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5hcmMgKyAnc3VjY2VzcycsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IGNvbG9yOiB7IG1vZGU6IEZpZWxkQ29sb3JNb2RlSWQuRml4ZWQsIGZpeGVkQ29sb3I6ICdncmVlbicgfSwgZGlzcGxheU5hbWU6ICdTdWNlc3NzJyB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgIDAuOTMzODg2NTY4NDc2NTg4MiwgMSwgMSwgMSwgMC41LCAxLCAwLjk5MDExMjg1MDUxNzAzODcsIDAuOTA2OTI2MDEzNDUyMDk5NywgMSwgMCwgMC45MDY5MjYwMTM0NTIwOTk3LFxuICAgICAgICAwLjk2MjQ0MzIwMzcyODg1MzQsIDAsIDAuOTYyNDQzMjAzNzI4ODUzNCwgMC45ODI0OTQ1NjY5ODQzNzY5LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuYXJjICsgJ2ZhdWx0cycsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IGNvbG9yOiB7IG1vZGU6IEZpZWxkQ29sb3JNb2RlSWQuRml4ZWQsIGZpeGVkQ29sb3I6ICdyZWQnIH0sIGRpc3BsYXlOYW1lOiAnRmF1bHRzJyB9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgIDAsIDAsIDAsIDAsIDAuNSwgMCwgMC4wMDk0Nzk4MTM3MzY0NzIyODgsIDAsIDAsIDAsIDAsIDAuMDE3MTY4ODIxMTUyNTI0MTg1LCAwLCAwLjAxNzE2ODgyMTE1MjUyNDE4NSxcbiAgICAgICAgMC4wMTc1MDU0MzMwMTU2MjMxMyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLmFyYyArICdlcnJvcnMnLFxuICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLkZpeGVkLCBmaXhlZENvbG9yOiAnc2VtaS1kYXJrLXllbGxvdycgfSwgZGlzcGxheU5hbWU6ICdFcnJvcnMnIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgMC4wNjYxMTM0MzE1MjM0MTE3NCwgMCwgMCwgMCwgMCwgMCwgMC4wMDA0MDczMzU3NDY0ODkwNDM2LCAwLjA5MzA3Mzk4NjU0NzkwMDM4LCAwLCAxLCAwLjA5MzA3Mzk4NjU0NzkwMDM4LFxuICAgICAgICAwLjAyMDM4Nzk3NTExODYyMjQ3LCAxLCAwLjAyMDM4Nzk3NTExODYyMjQ3LCAwLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuYXJjICsgJ3Rocm90dGxlZCcsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IGNvbG9yOiB7IG1vZGU6IEZpZWxkQ29sb3JNb2RlSWQuRml4ZWQsIGZpeGVkQ29sb3I6ICdwdXJwbGUnIH0sIGRpc3BsYXlOYW1lOiAnVGhyb3R0bGVkJyB9LFxuICAgICAgdmFsdWVzOiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgfSxcbiAgXSxcbiAgbWV0YTogeyBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ25vZGVHcmFwaCcgYXMgUHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGUgfSxcbiAgbmFtZTogJ25vZGVzJyxcbn07XG5cbmV4cG9ydCBjb25zdCBlZGdlcyA9IHtcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgbmFtZTogTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcy5pZCxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RyYWNlcy9BbGwnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGludGVybmFsOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAnZ2V0VHJhY2VTdW1tYXJpZXMnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiAnZWRnZShcIiR7X19kYXRhLmZpZWxkcy5zb3VyY2VOYW1lfVwiLCBcIiR7X19kYXRhLmZpZWxkcy50YXJnZXROYW1lfVwiKScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6ICdBeDRlcnhIR3onLFxuICAgICAgICAgICAgICBkYXRhc291cmNlTmFtZTogJ1RyYWNlIGRhdGEgc291cmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RyYWNlcy9PSycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgaW50ZXJuYWw6IHtcbiAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICBxdWVyeVR5cGU6ICdnZXRUcmFjZVN1bW1hcmllcycsXG4gICAgICAgICAgICAgICAgcXVlcnk6ICdlZGdlKFwiJHtfX2RhdGEuZmllbGRzLnNvdXJjZU5hbWV9XCIsIFwiJHtfX2RhdGEuZmllbGRzLnRhcmdldE5hbWV9XCIpIHsgb2sgPSB0cnVlIH0nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiAnQXg0ZXJ4SEd6JyxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWU6ICdUcmFjZSBkYXRhIHNvdXJjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdUcmFjZXMvRXJyb3JzJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogJ2dldFRyYWNlU3VtbWFyaWVzJyxcbiAgICAgICAgICAgICAgICBxdWVyeTogJ2VkZ2UoXCIke19fZGF0YS5maWVsZHMuc291cmNlTmFtZX1cIiwgXCIke19fZGF0YS5maWVsZHMudGFyZ2V0TmFtZX1cIikgeyBlcnJvciA9IHRydWUgfScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6ICdBeDRlcnhIR3onLFxuICAgICAgICAgICAgICBkYXRhc291cmNlTmFtZTogJ1RyYWNlIGRhdGEgc291cmNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ1RyYWNlcy9GYXVsdHMnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIGludGVybmFsOiB7XG4gICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAnZ2V0VHJhY2VTdW1tYXJpZXMnLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiAnZWRnZShcIiR7X19kYXRhLmZpZWxkcy5zb3VyY2VOYW1lfVwiLCBcIiR7X19kYXRhLmZpZWxkcy50YXJnZXROYW1lfVwiKSB7IGZhdWx0ID0gdHJ1ZSB9JyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogJ0F4NGVyeEhHeicsXG4gICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiAnVHJhY2UgZGF0YSBzb3VyY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAnMF9fMicsXG4gICAgICAgICc1X184JyxcbiAgICAgICAgJzZfXzAnLFxuICAgICAgICAnNl9fNScsXG4gICAgICAgICc2X185JyxcbiAgICAgICAgJzZfXzInLFxuICAgICAgICAnNl9fMTQnLFxuICAgICAgICAnNl9fNCcsXG4gICAgICAgICc4X18zJyxcbiAgICAgICAgJzEwX183JyxcbiAgICAgICAgJzExX18wJyxcbiAgICAgICAgJzExX182JyxcbiAgICAgICAgJzEyX182JyxcbiAgICAgICAgJzEzX18xMScsXG4gICAgICAgICcxNF9fMScsXG4gICAgICAgICcxNF9fMicsXG4gICAgICAgICcxNF9fMTAnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMuc291cmNlLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgIGNvbmZpZzoge30sXG4gICAgICB2YWx1ZXM6IFswLCA1LCA2LCA2LCA2LCA2LCA2LCA2LCA4LCAxMCwgMTEsIDExLCAxMiwgMTMsIDE0LCAxNCwgMTRdLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3NvdXJjZU5hbWUnLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgIGNvbmZpZzoge30sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgJ2F1dGgnLFxuICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ29yZGVycycsXG4gICAgICAgICdzaGlwcGluZycsXG4gICAgICAgICd3d3cnLFxuICAgICAgICAnd3d3JyxcbiAgICAgICAgJ2FwaScsXG4gICAgICAgICd3d3cnLFxuICAgICAgICAncHJvZHVjdHMnLFxuICAgICAgICAncHJvZHVjdHMnLFxuICAgICAgICAncHJvZHVjdHMnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMudGFyZ2V0LFxuICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgIGNvbmZpZzoge30sXG4gICAgICB2YWx1ZXM6IFsyLCA4LCAwLCA1LCA5LCAyLCAxNCwgNCwgMywgNywgMCwgNiwgNiwgMTEsIDEsIDIsIDEwXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd0YXJnZXROYW1lJyxcbiAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICBjb25maWc6IHt9LFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgICdjdXN0b21lcnMnLFxuICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgJ2F1dGgnLFxuICAgICAgICAnb3JkZXJzJyxcbiAgICAgICAgJ2V4ZWN1dGUtYXBpJyxcbiAgICAgICAgJ2N1c3RvbWVycycsXG4gICAgICAgICdwcm9kdWN0cycsXG4gICAgICAgICdwcm9kdWN0cycsXG4gICAgICAgICdvcmRlcnMnLFxuICAgICAgICAnc2hpcHBpbmcnLFxuICAgICAgICAnYXV0aCcsXG4gICAgICAgICdhcGknLFxuICAgICAgICAnYXBpJyxcbiAgICAgICAgJ3d3dycsXG4gICAgICAgICdwcm9kdWN0cycsXG4gICAgICAgICdjdXN0b21lcnMnLFxuICAgICAgICAnc2hpcHBpbmcnLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMubWFpblN0YXQsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLFxuICAgICAgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnUmVzcG9uc2UgcGVyY2VudGFnZScgfSxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICAnU3VjY2VzcyAxMDAuMDAlJyxcbiAgICAgICAgJ1N1Y2Nlc3MgMTAwLjAwJScsXG4gICAgICAgICdTdWNjZXNzIDEwMC4wMCUnLFxuICAgICAgICAnU3VjY2VzcyAxMDAuMDAlJyxcbiAgICAgICAgJ0Vycm9ycyAxMDAuMDAlJyxcbiAgICAgICAgJ1N1Y2Nlc3MgMTAwLjAwJScsXG4gICAgICAgICdGYXVsdHMgMS43NSUnLFxuICAgICAgICAnRmF1bHRzIDUwLjAwJScsXG4gICAgICAgICdTdWNjZXNzIDEwMC4wMCUnLFxuICAgICAgICAnRXJyb3JzIDkuMzElJyxcbiAgICAgICAgJ0Vycm9ycyA2LjYyJScsXG4gICAgICAgICdGYXVsdHMgMS4xMyUnLFxuICAgICAgICAnRXJyb3JzIDEwMC4wMCUnLFxuICAgICAgICAnRmF1bHRzIDEuNzIlJyxcbiAgICAgICAgJ1N1Y2Nlc3MgMTAwLjAwJScsXG4gICAgICAgICdTdWNjZXNzIDEwMC4wMCUnLFxuICAgICAgICAnRmF1bHRzIDkuMzAlJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzLnNlY29uZGFyeVN0YXQsXG4gICAgICB0eXBlOiBGaWVsZFR5cGUubnVtYmVyLFxuICAgICAgY29uZmlnOiB7IHVuaXQ6ICd0L21pbicsIGRpc3BsYXlOYW1lOiAnVHJhbnNhY3Rpb25zIHBlciBtaW51dGUnIH0sXG4gICAgICB2YWx1ZXM6IFtcbiAgICAgICAgNTAuNTYzMTcxNTQ1MDE2NjcsIDEyNS43NzIyMjIyMjIyMjIyMywgMC4wMzMzMzMzMzMzMzMzMzMzMywgMTM3LjU5NzIyMjIyMjIyMjIzLCAwLjAyMjIyMjIyMjIyMjIyMjIyMyxcbiAgICAgICAgMjk5Ljk2NjY2NjY2NjY2NjY0LCAxNjIuMzMwNTU1NTU1NTU1NTUsIDAuMDA1NTU1NTU1NTU1NTU1NTU2LCAxMjUuNjQ0NDQ0NDQ0NDQ0NDUsIDMwLjU4MjM0ODg1MzM3MDM5NCxcbiAgICAgICAgNTAuNTExMTExMTExMTExMTEsIDI5OS45MTY2NjY2NjY2NjY3LCAwLjEwMDAyMTUxMDAwMjE1MSwgMTY1LjY3NSwgNjgyLjQsIDE2Mi4zMzA1NTU1NTU1NTU1NSwgMzAuNTU4MzMzMzMzMzMzMzM0LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBtZXRhOiB7IHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbm9kZUdyYXBoJyBhcyBQcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSB9LFxuICBuYW1lOiAnZWRnZXMnLFxufTtcbiIsImltcG9ydCB7IFN0YW5kYXJkVmFyaWFibGVRdWVyeSwgU3RhbmRhcmRWYXJpYWJsZVN1cHBvcnQgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgVGVzdERhdGFEYXRhU291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IFRlc3REYXRhUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIFRlc3REYXRhVmFyaWFibGVTdXBwb3J0IGV4dGVuZHMgU3RhbmRhcmRWYXJpYWJsZVN1cHBvcnQ8VGVzdERhdGFEYXRhU291cmNlPiB7XG4gIHRvRGF0YVF1ZXJ5KHF1ZXJ5OiBTdGFuZGFyZFZhcmlhYmxlUXVlcnkpOiBUZXN0RGF0YVF1ZXJ5IHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVmSWQ6ICdUZXN0RGF0YURhdGFTb3VyY2UtUXVlcnlWYXJpYWJsZScsXG4gICAgICBzdHJpbmdJbnB1dDogcXVlcnkucXVlcnksXG4gICAgICBzY2VuYXJpb0lkOiAndmFyaWFibGVzLXF1ZXJ5JyxcbiAgICAgIGNzdldhdmU6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiQ29uZmlnRWRpdG9yIiwicmVuZGVyIiwiTG9nTGV2ZWwiLCJpbmRleCIsImdldFJhbmRvbUxvZ0xldmVsIiwidiIsIk1hdGgiLCJyYW5kb20iLCJjcml0aWNhbCIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJkZWJ1ZyIsInRyYWNlIiwidW5rbm93biIsImdldE5leHRXb3JkIiwiZmxvb3IiLCJ3b3JkcyIsImxlbmd0aCIsImdldFJhbmRvbUxpbmUiLCJsaW5lIiwidXNlTWVtbyIsInVzZUFzeW5jIiwic2VsZWN0b3JzIiwiZWRpdG9yU2VsZWN0b3JzIiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIklubGluZVN3aXRjaCIsIklucHV0IiwiU2VsZWN0IiwiVGV4dEFyZWEiLCJSYW5kb21XYWxrRWRpdG9yIiwiU3RyZWFtaW5nQ2xpZW50RWRpdG9yIiwiQ1NWQ29udGVudEVkaXRvciIsIkNTVkZpbGVFZGl0b3IiLCJDU1ZXYXZlc0VkaXRvciIsIkVycm9yRWRpdG9yIiwiR3JhZmFuYUxpdmVFZGl0b3IiLCJOb2RlR3JhcGhFZGl0b3IiLCJQcmVkaWN0YWJsZVB1bHNlRWRpdG9yIiwiUmF3RnJhbWVFZGl0b3IiLCJTaW11bGF0aW9uUXVlcnlFZGl0b3IiLCJVU0FRdWVyeUVkaXRvciIsInVzYVF1ZXJ5TW9kZXMiLCJkZWZhdWx0Q1NWV2F2ZVF1ZXJ5IiwiZGVmYXVsdFB1bHNlUXVlcnkiLCJkZWZhdWx0UXVlcnkiLCJkZWZhdWx0U3RyZWFtUXVlcnkiLCJzaG93TGFiZWxzRm9yIiwiZW5kcG9pbnRzIiwidmFsdWUiLCJsYWJlbCIsImNvbXBvbmVudHMiLCJEYXRhU291cmNlIiwiVGVzdERhdGEiLCJRdWVyeVRhYiIsIlF1ZXJ5RWRpdG9yIiwicXVlcnkiLCJkYXRhc291cmNlIiwib25DaGFuZ2UiLCJvblJ1blF1ZXJ5IiwibG9hZGluZyIsInNjZW5hcmlvTGlzdCIsInNjZW5hcmlvSWQiLCJwb2ludHMiLCJjc3ZDb250ZW50IiwicG9pbnQiLCJyZWZJZCIsInZhbHMiLCJnZXRTY2VuYXJpb3MiLCJoaWRlQWxpYXMiLCJtYXAiLCJoaWRlQWxpYXNGaWVsZCIsImluY2x1ZGVzIiwiaWQiLCJvblVwZGF0ZSIsImN1cnJlbnRTY2VuYXJpbyIsImZpbmQiLCJzY2VuYXJpbyIsImRlc2NyaXB0aW9uIiwib25TY2VuYXJpb0NoYW5nZSIsIml0ZW0iLCJzYyIsInVwZGF0ZSIsImFsaWFzIiwic3RyaW5nSW5wdXQiLCJzdHJlYW0iLCJjaGFubmVsIiwic2ltIiwia2V5IiwidHlwZSIsInRpY2siLCJwdWxzZVdhdmUiLCJjc3ZXYXZlIiwidXNhIiwibW9kZSIsIm9uSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInRhcmdldCIsIm5ld1ZhbHVlIiwiTnVtYmVyIiwiY2hlY2tlZCIsIm9uRmllbGRDaGFuZ2UiLCJmaWVsZCIsIm9uRW5kUG9pbnRDaGFuZ2UiLCJvblN0cmVhbUNsaWVudENoYW5nZSIsIm9uUHVsc2VXYXZlQ2hhbmdlIiwib25VU0FTdGF0c0NoYW5nZSIsIm9uQ1NWV2F2ZUNoYW5nZSIsIm9wdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwic2hvd0xhYmVscyIsInNjZW5hcmlvU2VsZWN0Q29udGFpbmVyIiwiQm9vbGVhbiIsImxhYmVscyIsImxpbmVzIiwibGV2ZWxDb2x1bW4iLCJlcCIsInZhbCIsIm5vZGVzIiwiTGlua0J1dHRvbiIsIlRlc3RJbmZvVGFiIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIkNvZGVFZGl0b3IiLCJvblNhdmVDU1YiLCJvbkNoYW5nZUZpbGVOYW1lIiwiY3N2RmlsZU5hbWUiLCJmaWxlcyIsImYiLCJCdXR0b24iLCJDU1ZXYXZlRWRpdG9yIiwid2F2ZSIsInRpbWVTdGVwIiwidmFsdWVBc051bWJlciIsImxhc3QiLCJhY3Rpb24iLCJvbkFkZCIsInVuZGVmaW5lZCIsInZhbHVlc0NTViIsIm9uQ1NWQ2hhbmdlIiwib25UaW1lU3RlcENoYW5nZSIsIm9uTGFiZWxzQ2hhbmdlIiwib25OYW1lQ2hhbmdlIiwid2F2ZXMiLCJzcGxpY2UiLCJwdXNoIiwiRVJST1JfT1BUSU9OUyIsIkZyb250ZW5kRXJyb3JRdWVyeUVkaXRvciIsImVycm9yVHlwZSIsImxpdmVUZXN0RGF0YUNoYW5uZWxzIiwib25DaGFubmVsQ2hhbmdlIiwibyIsImNvdW50IiwiY3VycmVudFRhcmdldCIsInBhcnNlSW50IiwiZmllbGRzIiwicGxhY2Vob2xkZXIiLCJ0b29sdGlwIiwicmFuZG9tV2Fsa0ZpZWxkcyIsIm1pbiIsInN0ZXAiLCJtYXgiLCJ0ZXN0U2VsZWN0b3JzIiwic2VsZWN0b3IiLCJpc0FycmF5IiwidXNlU3RhdGUiLCJkYXRhRnJhbWVUb0pTT04iLCJ0b0RhdGFGcmFtZSIsInRvRGF0YUZyYW1lRFRPIiwidG9EYXRhUXVlcnlSZXNwb25zZSIsIkFsZXJ0Iiwic2V0RXJyb3IiLCJzZXRXYXJuaW5nIiwib25TYXZlRnJhbWVzIiwicmF3RnJhbWVDb250ZW50IiwianNvbiIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJzZXJpZXMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzdHJpbmdpZnkiLCJGaWVsZFNldCIsIkxhYmVsIiwiRm9ybSIsImRzIiwic2ltUXVlcnkiLCJzaW1LZXkiLCJnZXRSZXNvdXJjZSIsInNpbXMiLCJzIiwiY3VycmVudCIsImRldGFpbHMiLCJvcHRpb24iLCJjb25maWciLCJwYXRoIiwidWlkIiwib25VcGRhdGVLZXkiLCJvblVJRENoYW5nZWQiLCJvblRpY2tDaGFuZ2VkIiwib25UeXBlQ2hhbmdlIiwib25Ub2dnbGVTdHJlYW0iLCJvblRvZ2dsZUxhc3QiLCJvblN1Ym1pdENoYW5nZSIsInBvc3RSZXNvdXJjZSIsInJlZ2lzdGVyIiwic2NoZW1hIiwic3RyZWFtaW5nQ2xpZW50RmllbGRzIiwidHlwZXMiLCJvblNlbGVjdENoYW5nZSIsInVybCIsIk11bHRpU2VsZWN0IiwicGVyaW9kIiwiZmllbGROYW1lcyIsInN0YXRlTmFtZXMiLCJzdGF0ZXMiLCJvbkNvdW50Iiwib25WYWx1ZSIsIm9mZkNvdW50Iiwib2ZmVmFsdWUiLCJmcm9tIiwibWVyZ2UiLCJvZiIsInRocm93RXJyb3IiLCJkZWxheSIsIkFycmF5RGF0YUZyYW1lIiwiRGF0YVRvcGljIiwiTGl2ZUNoYW5uZWxTY29wZSIsIkxvYWRpbmdTdGF0ZSIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImdldEJhY2tlbmRTcnYiLCJnZXRHcmFmYW5hTGl2ZVNydiIsImdldFRlbXBsYXRlU3J2IiwiZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIiwicXVlcnlNZXRyaWNUcmVlIiwiZ2VuZXJhdGVSYW5kb21Ob2RlcyIsInNhdmVkTm9kZXNSZXNwb25zZSIsInJ1blN0cmVhbSIsIlRlc3REYXRhVmFyaWFibGVTdXBwb3J0IiwiVGVzdERhdGFEYXRhU291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInRlbXBsYXRlU3J2IiwidmFyaWFibGVzIiwiYmFja2VuZFF1ZXJpZXMiLCJzdHJlYW1zIiwidGFyZ2V0cyIsImhpZGUiLCJyZXNvbHZlVGVtcGxhdGVWYXJpYWJsZXMiLCJzY29wZWRWYXJzIiwicnVuR3JhZmFuYUxpdmVRdWVyeSIsInJ1bkdyYWZhbmFBUEkiLCJhbm5vdGF0aW9uRGF0YVRvcGljVGVzdCIsInZhcmlhYmxlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInJhd0ZyYW1lUXVlcnkiLCJzZXJ2ZXJFcnJvclF1ZXJ5IiwiYmFja2VuZE9wdHMiLCJyZXBsYWNlIiwicmVxIiwiZXZlbnRzIiwiYnVpbGRGYWtlQW5ub3RhdGlvbkV2ZW50cyIsInJhbmdlIiwiZGF0YUZyYW1lIiwibWV0YSIsImRhdGFUb3BpYyIsIkFubm90YXRpb25zIiwicGlwZSIsInRpbWVXYWxrZXIiLCJ2YWx1ZU9mIiwidG8iLCJpIiwidGltZSIsInRleHQiLCJ0YWdzIiwiYW5ub3RhdGlvblF1ZXJ5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJnZXRRdWVyeURpc3BsYXlUZXh0IiwidGVzdERhdGFzb3VyY2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwic2NlbmFyaW9zQ2FjaGUiLCJpbnRlcnBvbGF0ZWRRdWVyeSIsIndpbGRjYXJkQ2hhciIsImNoaWxkcmVuIiwiaXRlbXMiLCJmcmFtZXMiLCJFcnJvciIsIkRvbmUiLCJleCIsImdldCIsInRoZW4iLCJyZXMiLCJmcmFtZSIsImxpdmVRdWVyeUNvdW50ZXIiLCJnZXREYXRhU3RyZWFtIiwiYWRkciIsInNjb3BlIiwiUGx1Z2luIiwibmFtZXNwYWNlIiwiYnVpbGRNZXRyaWNUcmVlIiwicGFyZW50IiwiZGVwdGgiLCJjaGFycyIsImxldHRlciIsIm5vZGVOYW1lIiwicXVlcnlUcmVlIiwicXVlcnlJbmRleCIsIm5vZGVRdWVyeSIsInJlc3VsdCIsIm5hbWVzVG9NYXRjaCIsInN0YXJ0c1dpdGgiLCJzcGxpdCIsIm5vZGUiLCJuYW1lVG9NYXRjaCIsImluZGV4T2YiLCJwYXR0ZXJuIiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiY29uY2F0IiwiRGF0YVNvdXJjZVBsdWdpbiIsIlRlc3REYXRhQW5ub3RhdGlvbnNRdWVyeUN0cmwiLCJwbHVnaW4iLCJzZXRDb25maWdFZGl0b3IiLCJzZXRRdWVyeUVkaXRvciIsInNldEFubm90YXRpb25RdWVyeUN0cmwiLCJhZGRDb25maWdQYWdlIiwidGl0bGUiLCJpY29uIiwiYm9keSIsIkFycmF5VmVjdG9yIiwiRmllbGRDb2xvck1vZGVJZCIsIkZpZWxkVHlwZSIsIk11dGFibGVEYXRhRnJhbWUiLCJOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIiwiZWRnZXMiLCJyb290Iiwic3ViVGl0bGUiLCJzdWNjZXNzIiwic3RhdDEiLCJzdGF0MiIsIm5vZGVzV2l0aG91dE1heEVkZ2VzIiwibWF4RWRnZXMiLCJtYWtlUmFuZG9tTm9kZSIsInNvdXJjZUluZGV4Iiwic291cmNlIiwiYWRkaXRpb25hbEVkZ2VzIiwidGFyZ2V0SW5kZXgiLCJub2RlRmllbGRzIiwidmFsdWVzIiwic3RyaW5nIiwibWFpblN0YXQiLCJudW1iZXIiLCJkaXNwbGF5TmFtZSIsInNlY29uZGFyeVN0YXQiLCJhcmMiLCJjb2xvciIsImZpeGVkQ29sb3IiLCJGaXhlZCIsIm5vZGVGcmFtZSIsIk9iamVjdCIsImtleXMiLCJwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSIsImVkZ2VGaWVsZHMiLCJlZGdlc0ZyYW1lIiwiZWRnZXNTZXQiLCJTZXQiLCJhZGQiLCJhcmNfX3N1Y2Nlc3MiLCJhcmNfX2Vycm9ycyIsImVkZ2UiLCJoYXMiLCJ0b1N0cmluZyIsImRlZmF1bHRzIiwiT2JzZXJ2YWJsZSIsIkNpcmN1bGFyRGF0YUZyYW1lIiwiQ1NWUmVhZGVyIiwibGl2ZVRpbWVyIiwiU3RyZWFtaW5nRGF0YUZyYW1lIiwic3BlZWQiLCJzcHJlYWQiLCJub2lzZSIsImJhbmRzIiwicnVuU2lnbmFsU3RyZWFtIiwicnVuTG9nc1N0cmVhbSIsInJ1bkZldGNoU3RyZWFtIiwic3Vic2NyaWJlciIsInN0cmVhbUlkIiwicGFuZWxJZCIsIm1heERhdGFQb2ludHMiLCJzdWZmaXgiLCJmcm9tRGF0YUZyYW1lSlNPTiIsIm1heExlbmd0aCIsInRpbWVvdXRJZCIsImxhc3RTZW50IiwiYWRkTmV4dFJvdyIsImV2ZW50IiwiRGF0ZSIsIm5vdyIsInB1c2hOZXh0RXZlbnQiLCJlbGFwc2VkIiwibGFzdFVwZGF0ZSIsIm9rIiwibmV4dCIsIlN0cmVhbWluZyIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhcHBlbmQiLCJjYXBhY2l0eSIsImFkZEZpZWxkIiwicmVhZGVyIiwiY3N2IiwiY2FsbGJhY2siLCJvbkhlYWRlciIsIm9uUm93Iiwicm93IiwicHJvY2Vzc0NodW5rIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJyZWFkQ1NWIiwiZG9uZSIsImNvbXBsZXRlIiwicmVhZCIsImZldGNoIiwiUmVxdWVzdCIsInJlc3BvbnNlIiwiZ2V0UmVhZGVyIiwibGlua3MiLCJpbnRlcm5hbCIsInF1ZXJ5VHlwZSIsImRhdGFzb3VyY2VVaWQiLCJkYXRhc291cmNlTmFtZSIsInVuaXQiLCJTdGFuZGFyZFZhcmlhYmxlU3VwcG9ydCIsInRvRGF0YVF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==