"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[319],{

/***/ "./public/app/plugins/datasource/testdata/module.tsx":
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
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/ConfigEditor.tsx
var _div;

// Libraries



/**
 * Empty Config Editor -- settings to save
 */
class ConfigEditor extends react.PureComponent {
  render() {
    return _div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}));
  }

}
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
// EXTERNAL MODULE: ./packages/grafana-e2e-selectors/src/index.ts + 3 modules
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/StreamingClientEditor.tsx




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
const StreamingClientEditor = _ref => {
  var _query$stream, _query$stream3, _query$stream4;

  let {
    onChange,
    query
  } = _ref;

  const onSelectChange = _ref2 => {
    let {
      value
    } = _ref2;
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Type",
      labelWidth: 14,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        width: 32,
        onChange: onSelectChange,
        defaultValue: types[0],
        options: types
      })
    }), (query === null || query === void 0 ? void 0 : (_query$stream = query.stream) === null || _query$stream === void 0 ? void 0 : _query$stream.type) === 'signal' && streamingClientFields.map(_ref3 => {
      var _query$stream2;

      let {
        label,
        id,
        min,
        step,
        placeholder
      } = _ref3;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: label,
        labelWidth: 14,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
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
    }), (query === null || query === void 0 ? void 0 : (_query$stream3 = query.stream) === null || _query$stream3 === void 0 ? void 0 : _query$stream3.type) === 'fetch' && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "URL",
      labelWidth: 14,
      grow: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/RandomWalkEditor.tsx




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
const testSelectors = grafana_e2e_selectors_src/* selectors.components.DataSource.TestData.QueryTab */.wl.components.DataSource.TestData.QueryTab;
const RandomWalkEditor = _ref => {
  let {
    onChange,
    query
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
    children: randomWalkFields.map(_ref2 => {
      let {
        label,
        id,
        min,
        step,
        placeholder,
        tooltip
      } = _ref2;
      const selector = testSelectors === null || testSelectors === void 0 ? void 0 : testSelectors[id];
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: label,
        labelWidth: 14,
        "aria-label": selector,
        tooltip: tooltip,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/index.ts


;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/CSVContentEditor.tsx



const CSVContentEditor = _ref => {
  var _query$csvContent;

  let {
    onChange,
    query
  } = _ref;

  const onSaveCSV = csvContent => {
    onChange(Object.assign({}, query, {
      csvContent
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
    height: 300,
    language: "csv",
    value: (_query$csvContent = query.csvContent) !== null && _query$csvContent !== void 0 ? _query$csvContent : '',
    onBlur: onSaveCSV,
    onSave: onSaveCSV,
    showMiniMap: false,
    showLineNumbers: true
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/CSVFileEditor.tsx



const CSVFileEditor = _ref => {
  let {
    onChange,
    query
  } = _ref;

  const onChangeFileName = _ref2 => {
    let {
      value
    } = _ref2;
    onChange(Object.assign({}, query, {
      csvFileName: value
    }));
  };

  const files = ['flight_info_by_state.csv', 'population_by_state.csv', 'gdp_per_capita.csv', 'js_libraries.csv', 'ohlc_dogecoin.csv', 'weight_height.csv', 'browser_marketshare.csv'].map(name => ({
    label: name,
    value: name
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "File",
      labelWidth: 14,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        width: 32,
        onChange: onChangeFileName,
        placeholder: "Select csv file",
        options: files,
        value: files.find(f => f.value === query.csvFileName)
      })
    })
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/constants.ts
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/CSVWaveEditor.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class CSVWaveEditor extends react.PureComponent {
  constructor() {
    super(...arguments);

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

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: 'Values',
        grow: true,
        tooltip: "Comma separated values. Each value may be an int, float, or null and must not be empty. Whitespace and trailing commas are removed",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          value: wave.valuesCSV,
          placeholder: 'CSV values',
          onChange: this.onCSVChange,
          autoFocus: true
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: 'Step',
        tooltip: "The number of seconds between datapoints.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          value: wave.timeStep,
          type: "number",
          placeholder: '60',
          width: 6,
          onChange: this.onTimeStepChange
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: 'Labels',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          value: wave.labels,
          placeholder: 'labels',
          width: 12,
          onChange: this.onLabelsChange
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: 'Name',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          value: wave.name,
          placeholder: 'name',
          width: 10,
          onChange: this.onNameChange
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        icon: last ? 'plus' : 'minus',
        variant: "secondary",
        onClick: action
      })]
    });
  }

}

class CSVWavesEditor extends react.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onChange", (index, wave) => {
      var _this$props$waves;

      let waves = [...((_this$props$waves = this.props.waves) !== null && _this$props$waves !== void 0 ? _this$props$waves : defaultCSVWaveQuery)];

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

      const waves = [...((_this$props$waves2 = this.props.waves) !== null && _this$props$waves2 !== void 0 ? _this$props$waves2 : defaultCSVWaveQuery)];
      waves.push(Object.assign({}, defaultCSVWaveQuery[0]));
      this.props.onChange(waves);
    });
  }

  render() {
    var _this$props$waves3;

    let waves = (_this$props$waves3 = this.props.waves) !== null && _this$props$waves3 !== void 0 ? _this$props$waves3 : defaultCSVWaveQuery;

    if (!waves.length) {
      waves = defaultCSVWaveQuery;
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: waves.map((wave, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(CSVWaveEditor, {
        wave: wave,
        index: index,
        onAdd: this.onAdd,
        onChange: this.onChange,
        last: index === waves.length - 1
      }, `${index}/${wave.valuesCSV}`))
    });
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/ErrorEditor.tsx



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

const FrontendErrorQueryEditor = _ref => {
  let {
    query,
    onChange
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      labelWidth: 14,
      label: "Error type",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
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

/* harmony default export */ const ErrorEditor = (FrontendErrorQueryEditor);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/GrafanaLiveEditor.tsx



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
const GrafanaLiveEditor = _ref => {
  let {
    onChange,
    query
  } = _ref;

  const onChannelChange = _ref2 => {
    let {
      value
    } = _ref2;
    onChange(Object.assign({}, query, {
      channel: value
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Channel",
      labelWidth: 14,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        width: 32,
        onChange: onChannelChange,
        placeholder: "Select channel",
        options: liveTestDataChannels,
        value: liveTestDataChannels.find(f => f.value === query.channel)
      })
    })
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/NodeGraphEditor.tsx




function NodeGraphEditor(_ref) {
  var _query$nodes, _query$nodes2;

  let {
    query,
    onChange
  } = _ref;
  const type = ((_query$nodes = query.nodes) === null || _query$nodes === void 0 ? void 0 : _query$nodes.type) || 'random';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Data type",
      labelWidth: 14,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
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
    }), type === 'random' && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Count",
      labelWidth: 14,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/PredictablePulseEditor.tsx



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
const PredictablePulseEditor = _ref => {
  let {
    onChange,
    query
  } = _ref;

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

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
    children: fields.map(_ref2 => {
      var _query$pulseWave;

      let {
        label,
        id,
        placeholder,
        tooltip
      } = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: label,
        labelWidth: 14,
        tooltip: tooltip,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
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
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/RawFrameEditor.tsx








const RawFrameEditor = _ref => {
  var _query$rawFrameConten;

  let {
    onChange,
    query
  } = _ref;
  const [error, setError] = (0,react.useState)();
  const [warning, setWarning] = (0,react.useState)();

  const onSaveFrames = rawFrameContent => {
    try {
      const json = JSON.parse(rawFrameContent);

      if ((0,lodash.isArray)(json)) {
        setError(undefined);
        setWarning(undefined);
        onChange(Object.assign({}, query, {
          rawFrameContent
        }));
        return;
      }

      let data = undefined; // Copy paste from panel json

      if ((0,lodash.isArray)(json.series) && json.state) {
        data = json.series.map(v => (0,src.toDataFrameDTO)((0,src.toDataFrame)(v)));
      } else {
        var _v$data;

        // Chek if it is a copy of the raw resuls
        const v = (0,grafana_runtime_src.toDataQueryResponse)({
          data: json
        });

        if ((_v$data = v.data) !== null && _v$data !== void 0 && _v$data.length && !v.error) {
          data = v.data.map(f => (0,src.dataFrameToJSON)(f));
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [error && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      title: error,
      severity: "error"
    }), warning && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      title: warning,
      severity: "warning"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/SimulationQueryEditor.tsx
var _Button;







const SimulationQueryEditor = _ref => {
  var _query$sim, _simQuery$key, _info$value$options, _info$value, _current$details;

  let {
    onChange,
    query,
    ds
  } = _ref;
  const simQuery = (_query$sim = query.sim) !== null && _query$sim !== void 0 ? _query$sim : {};
  const simKey = (_simQuery$key = simQuery.key) !== null && _simQuery$key !== void 0 ? _simQuery$key : {}; // This only changes once

  const info = (0,useAsync/* default */.Z)(async () => {
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
  const current = (0,react.useMemo)(() => {
    const type = simKey.type;

    if (!type || !info.value) {
      return {};
    }

    return {
      details: info.value.sims.find(v => v.type === type),
      option: info.value.options.find(v => v.value === type)
    };
  }, [info.value, simKey === null || simKey === void 0 ? void 0 : simKey.type]);
  let config = (0,useAsync/* default */.Z)(async () => {
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        labelWidth: 14,
        label: "Simulation",
        tooltip: "",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          isLoading: info.loading,
          options: (_info$value$options = (_info$value = info.value) === null || _info$value === void 0 ? void 0 : _info$value.options) !== null && _info$value$options !== void 0 ? _info$value$options : [],
          value: current.option,
          onChange: onTypeChange,
          width: 32
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        labelWidth: 14,
        label: "Stream",
        tooltip: "connect to the live channel",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          value: Boolean(simQuery.stream),
          onChange: onToggleStream
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Interval",
        tooltip: "the rate a simulation will spit out events",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          width: 10,
          type: "number",
          value: simKey.tick,
          onChange: onTickChanged,
          min: 1 / 10,
          max: 50,
          suffix: "hz"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Last",
        tooltip: "Only return the last value",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Label, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
            value: Boolean(simQuery.last),
            onChange: onToggleLast
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "UID",
        tooltip: "A UID will allow multiple simulations to run at the same time",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          type: "text",
          placeholder: "optional",
          value: simQuery.key.uid,
          onChange: onUIDChanged
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Form, {
        onSubmit: onSubmitChange,
        children: _ref2 => {
          let {
            register
          } = _ref2;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.FieldSet, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TextArea, Object.assign({}, register('config'), {
              defaultValue: JSON.stringify(config.value, null, 2),
              rows: 7
            })), _Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              type: "submit",
              children: "Submit"
            }))]
          });
        }
      }), "SCHEMA:", /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
        children: JSON.stringify((_current$details = current.details) === null || _current$details === void 0 ? void 0 : _current$details.config.schema, null, 2)
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/components/USAQueryEditor.tsx





function USAQueryEditor(_ref) {
  let {
    query,
    onChange
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        labelWidth: 14,
        label: "Mode",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          options: usaQueryModes,
          onChange: v => {
            onChange(Object.assign({}, query, {
              mode: v.value
            }));
          },
          width: 32,
          value: usaQueryModes.find(ep => ep.value === query.mode)
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Period",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          value: query.period,
          placeholder: '30m',
          onChange: v => {
            onChange(Object.assign({}, query, {
              period: v.currentTarget.value
            }));
          }
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        labelWidth: 14,
        label: "Fields",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.MultiSelect, {
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
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "States",
        grow: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.MultiSelect, {
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
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");
// EXTERNAL MODULE: ./public/app/features/dashboard/dashgrid/liveTimer.ts
var liveTimer = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
// EXTERNAL MODULE: ./public/app/features/live/data/StreamingDataFrame.ts
var StreamingDataFrame = __webpack_require__("./public/app/features/live/data/StreamingDataFrame.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/LogIpsum.ts

let index = 0;
function getRandomLogLevel() {
  const v = Math.random();

  if (v > 0.9) {
    return LogLevel.critical;
  }

  if (v > 0.8) {
    return LogLevel.error;
  }

  if (v > 0.7) {
    return LogLevel.warning;
  }

  if (v > 0.4) {
    return LogLevel.info;
  }

  if (v > 0.3) {
    return LogLevel.debug;
  }

  if (v > 0.1) {
    return LogLevel.trace;
  }

  return LogLevel.unknown;
}
function getNextWord() {
  index = (index + Math.floor(Math.random() * 5)) % words.length;
  return words[index];
}
function getRandomLine() {
  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;
  let line = getNextWord();

  while (line.length < length) {
    line += ' ' + getNextWord();
  }

  return line;
}
const words = ['At', 'vero', 'eos', 'et', 'accusamus', 'et', 'iusto', 'odio', 'dignissimos', 'ducimus', 'qui', 'blanditiis', 'praesentium', 'voluptatum', 'deleniti', 'atque', 'corrupti', 'quos', 'dolores', 'et', 'quas', 'molestias', 'excepturi', 'sint', 'occaecati', 'cupiditate', 'non', 'provident', 'similique', 'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollitia', 'animi', 'id', 'est', 'laborum', 'et', 'dolorum', 'fuga', 'Et', 'harum', 'quidem', 'rerum', 'facilis', 'est', 'et', 'expedita', 'distinctio', 'Nam', 'libero', 'tempore', 'cum', 'soluta', 'nobis', 'est', 'eligendi', 'optio', 'cumque', 'nihil', 'impedit', 'quo', 'minus', 'id', 'quod', 'maxime', 'placeat', 'facere', 'possimus', 'omnis', 'voluptas', 'assumenda', 'est', 'omnis', 'dolor', 'repellendus', 'Temporibus', 'autem', 'quibusdam', 'et', 'aut', 'officiis', 'debitis', 'aut', 'rerum', 'necessitatibus', 'saepe', 'eveniet', 'ut', 'et', 'voluptates', 'repudiandae', 'sint', 'et', 'molestiae', 'non', 'recusandae', 'Itaque', 'earum', 'rerum', 'hic', 'tenetur', 'a', 'sapiente', 'delectus', 'ut', 'aut', 'reiciendis', 'voluptatibus', 'maiores', 'alias', 'consequatur', 'aut', 'perferendis', 'doloribus', 'asperiores', 'repellat'];
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/runStreams.ts






const defaultStreamQuery = {
  type: 'signal',
  speed: 250,
  // ms
  spread: 3.5,
  noise: 2.2,
  bands: 1
};
function runStream(target, req) {
  const query = (0,lodash.defaults)(target.stream, defaultStreamQuery);

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
  return new Observable/* Observable */.y(subscriber => {
    var _target$alias;

    const streamId = `signal-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    const schema = {
      refId: target.refId,
      fields: [{
        name: 'time',
        type: src.FieldType.time
      }, {
        name: (_target$alias = target.alias) !== null && _target$alias !== void 0 ? _target$alias : 'value',
        type: src.FieldType.number
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
        type: src.FieldType.number
      });
      schema.fields.push({
        name: 'Max' + suffix,
        type: src.FieldType.number
      });
    }

    const frame = StreamingDataFrame/* StreamingDataFrame.fromDataFrameJSON */.Av.fromDataFrameJSON({
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
      const elapsed = liveTimer/* liveTimer.lastUpdate */.A.lastUpdate - lastSent;

      if (elapsed > 1000 || liveTimer/* liveTimer.ok */.A.ok) {
        subscriber.next({
          data: [frame],
          key: streamId,
          state: src.LoadingState.Streaming
        });
        lastSent = liveTimer/* liveTimer.lastUpdate */.A.lastUpdate;
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
  return new Observable/* Observable */.y(subscriber => {
    const streamId = `logs-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    const data = new src.CircularDataFrame({
      append: 'tail',
      capacity: maxDataPoints
    });
    data.refId = target.refId;
    data.name = target.alias || 'Logs ' + target.refId;
    data.addField({
      name: 'line',
      type: src.FieldType.string
    });
    data.addField({
      name: 'time',
      type: src.FieldType.time
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
      data.fields[1].values.add(getRandomLine());
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
  return new Observable/* Observable */.y(subscriber => {
    const streamId = `fetch-${req.panelId}-${target.refId}`;
    const maxDataPoints = req.maxDataPoints || 1000;
    let data = new src.CircularDataFrame({
      append: 'tail',
      capacity: maxDataPoints
    });
    data.refId = target.refId;
    data.name = target.alias || 'Fetch ' + target.refId;
    let reader;
    const csv = new src.CSVReader({
      callback: {
        onHeader: fields => {
          // Clear any existing fields
          if (data.fields.length) {
            data = new src.CircularDataFrame({
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
        state: value.done ? src.LoadingState.Done : src.LoadingState.Streaming
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/QueryEditor.tsx
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
const selectors = grafana_e2e_selectors_src/* selectors.components.DataSource.TestData.QueryTab */.wl.components.DataSource.TestData.QueryTab;
const QueryEditor = _ref => {
  var _query, _query$usa;

  let {
    query,
    datasource,
    onChange,
    onRunQuery
  } = _ref;
  query = Object.assign({}, defaultQuery, query);
  const {
    loading,
    value: scenarioList
  } = (0,useAsync/* default */.Z)(async () => {
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

  const currentScenario = (0,react.useMemo)(() => scenarioList === null || scenarioList === void 0 ? void 0 : scenarioList.find(scenario => scenario.id === query.scenarioId), [scenarioList, query]);
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
        update.stream = defaultStreamQuery;
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
        update.pulseWave = defaultPulseQuery;
        break;

      case 'predictable_csv_wave':
        update.csvWave = defaultCSVWaveQuery;
        break;

      case 'usa':
        update.usa = {
          mode: usaQueryModes[0].value
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

  const onEndPointChange = _ref2 => {
    let {
      value
    } = _ref2;
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

  const options = (0,react.useMemo)(() => (scenarioList || []).map(item => ({
    label: item.name,
    value: item.id
  })).sort((a, b) => a.label.localeCompare(b.label)), [scenarioList]);
  const showLabels = (0,react.useMemo)(() => {
    var _query$scenarioId;

    return showLabelsFor.includes((_query$scenarioId = query.scenarioId) !== null && _query$scenarioId !== void 0 ? _query$scenarioId : '');
  }, [query]);

  if (loading) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      "aria-label": selectors.scenarioSelectContainer,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        labelWidth: 14,
        label: "Scenario",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          inputId: `test-data-scenario-select-${query.refId}`,
          options: options,
          value: options.find(item => item.value === query.scenarioId),
          onChange: onScenarioChange,
          width: 32
        })
      }), (currentScenario === null || currentScenario === void 0 ? void 0 : currentScenario.stringInput) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "String Input",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          width: 32,
          id: `stringInput-${query.refId}`,
          name: "stringInput",
          placeholder: query.stringInput,
          value: query.stringInput,
          onChange: onInputChange
        })
      }), Boolean(!(currentScenario !== null && currentScenario !== void 0 && currentScenario.hideAliasField)) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Alias",
        labelWidth: 14,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          width: 32,
          id: `alias-${query.refId}`,
          type: "text",
          placeholder: "optional",
          pattern: "[^<>&\\\\\"]+",
          name: "alias",
          value: query.alias,
          onChange: onInputChange
        })
      }), showLabels && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Labels",
        labelWidth: 14,
        tooltip: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: ["Set labels using a key=value syntax:", _br || (_br = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), `{ key = "value", key2 = "value" }`, _br2 || (_br2 = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), "key=\"value\", key2=\"value\"", _br3 || (_br3 = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), "key=value, key2=value", _br4 || (_br4 = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}))]
        }),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          width: 32,
          id: `labels-${query.refId}`,
          name: "labels",
          onChange: onInputChange,
          value: (_query = query) === null || _query === void 0 ? void 0 : _query.labels,
          placeholder: "key=value, key2=value2"
        })
      })]
    }), scenarioId === 'random_walk' && /*#__PURE__*/(0,jsx_runtime.jsx)(RandomWalkEditor, {
      onChange: onInputChange,
      query: query,
      ds: datasource
    }), scenarioId === 'streaming_client' && /*#__PURE__*/(0,jsx_runtime.jsx)(StreamingClientEditor, {
      onChange: onStreamClientChange,
      query: query,
      ds: datasource
    }), scenarioId === 'live' && /*#__PURE__*/(0,jsx_runtime.jsx)(GrafanaLiveEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'simulation' && /*#__PURE__*/(0,jsx_runtime.jsx)(SimulationQueryEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'raw_frame' && /*#__PURE__*/(0,jsx_runtime.jsx)(RawFrameEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'csv_file' && /*#__PURE__*/(0,jsx_runtime.jsx)(CSVFileEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'csv_content' && /*#__PURE__*/(0,jsx_runtime.jsx)(CSVContentEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), scenarioId === 'logs' && /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Lines",
        labelWidth: 14,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          type: "number",
          name: "lines",
          value: query.lines,
          width: 32,
          onChange: onInputChange,
          placeholder: "10"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Level",
        labelWidth: 14,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          onChange: onInputChange,
          name: "levelColumn",
          value: !!query.levelColumn
        })
      })]
    }), scenarioId === 'usa' && /*#__PURE__*/(0,jsx_runtime.jsx)(USAQueryEditor, {
      onChange: onUSAStatsChange,
      query: (_query$usa = query.usa) !== null && _query$usa !== void 0 ? _query$usa : {}
    }), scenarioId === 'grafana_api' && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      labelWidth: 14,
      label: "Endpoint",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        options: endpoints,
        onChange: onEndPointChange,
        width: 32,
        value: endpoints.find(ep => ep.value === query.stringInput)
      })
    }), scenarioId === 'arrow' && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      grow: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TextArea, {
        name: "stringInput",
        value: query.stringInput,
        rows: 10,
        placeholder: "Copy base64 text data from query result",
        onChange: onInputChange
      })
    }), scenarioId === 'predictable_pulse' && /*#__PURE__*/(0,jsx_runtime.jsx)(PredictablePulseEditor, {
      onChange: onPulseWaveChange,
      query: query,
      ds: datasource
    }), scenarioId === 'predictable_csv_wave' && /*#__PURE__*/(0,jsx_runtime.jsx)(CSVWavesEditor, {
      onChange: onCSVWaveChange,
      waves: query.csvWave
    }), scenarioId === 'node_graph' && /*#__PURE__*/(0,jsx_runtime.jsx)(NodeGraphEditor, {
      onChange: val => onChange(Object.assign({}, query, {
        nodes: val
      })),
      query: query
    }), scenarioId === 'server_error_500' && /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorEditor, {
      onChange: onUpdate,
      query: query,
      ds: datasource
    }), description && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: description
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/TestInfoTab.tsx
var TestInfoTab_div;

// Libraries

 // Types



class TestInfoTab extends react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return TestInfoTab_div || (TestInfoTab_div = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: ["See github for more information about setting up a reproducible test environment.", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: "secondary",
        href: "https://github.com/grafana/grafana/tree/main/devenv",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "GitHub"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})]
    }));
  }

}
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js
var merge = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js
var throwError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js
var from = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/delay.js
var delay = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/delay.js");
// EXTERNAL MODULE: ./public/app/features/variables/utils.ts
var utils = __webpack_require__("./public/app/features/variables/utils.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/metricTree.ts
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/testData/serviceMapResponse.ts

const nodes = {
  fields: [{
    name: src.NodeGraphDataFrameFieldNames.id,
    type: src.FieldType.string,
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
    name: src.NodeGraphDataFrameFieldNames.title,
    type: src.FieldType.string,
    config: {
      displayName: 'Name'
    },
    values: ['auth', 'products', 'customers', 'orders', 'products', 'orders', 'api', 'shipping', 'orders', 'execute-api', 'shipping', 'www', 'api', 'www', 'products']
  }, {
    name: src.NodeGraphDataFrameFieldNames.subTitle,
    type: src.FieldType.string,
    config: {
      displayName: 'Type'
    },
    values: ['Compute', 'SQL', 'SQL', 'SQL', 'remote', 'Function', 'Compute', 'Function', 'Function', 'remote', 'Function', 'Compute', 'client', 'client', 'Compute']
  }, {
    name: src.NodeGraphDataFrameFieldNames.mainStat,
    type: src.FieldType.number,
    config: {
      unit: 'ms/t',
      displayName: 'Average response time'
    },
    values: [3.5394042646735553, 15.906441318223264, 4.913011921591567, 7.4163203042094095, 1092, 22.85961441405067, 56.135855729084696, 4.45946191601527, 12.818300278280843, 4.25, 12.565442646791492, 77.63447512700567, 40.387096774193544, 77.63447512700567, 27.648950187374872]
  }, {
    name: src.NodeGraphDataFrameFieldNames.secondaryStat,
    type: src.FieldType.number,
    config: {
      unit: 't/min',
      displayName: 'Transactions per minute'
    },
    values: [50.56317154501667, 682.4, 512.8416666666667, 125.64444444444445, 0.005585812037424941, 137.59722222222223, 300.0527777777778, 30.582348853370394, 125.77222222222223, 0.028706417080318163, 30.582348853370394, 165.675, 0.100021510002151, 165.675, 162.33055555555555]
  }, {
    name: src.NodeGraphDataFrameFieldNames.arc + 'success',
    type: src.FieldType.number,
    config: {
      color: {
        mode: src.FieldColorModeId.Fixed,
        fixedColor: 'green'
      },
      displayName: 'Sucesss'
    },
    values: [0.9338865684765882, 1, 1, 1, 0.5, 1, 0.9901128505170387, 0.9069260134520997, 1, 0, 0.9069260134520997, 0.9624432037288534, 0, 0.9624432037288534, 0.9824945669843769]
  }, {
    name: src.NodeGraphDataFrameFieldNames.arc + 'faults',
    type: src.FieldType.number,
    config: {
      color: {
        mode: src.FieldColorModeId.Fixed,
        fixedColor: 'red'
      },
      displayName: 'Faults'
    },
    values: [0, 0, 0, 0, 0.5, 0, 0.009479813736472288, 0, 0, 0, 0, 0.017168821152524185, 0, 0.017168821152524185, 0.01750543301562313]
  }, {
    name: src.NodeGraphDataFrameFieldNames.arc + 'errors',
    type: src.FieldType.number,
    config: {
      color: {
        mode: src.FieldColorModeId.Fixed,
        fixedColor: 'semi-dark-yellow'
      },
      displayName: 'Errors'
    },
    values: [0.06611343152341174, 0, 0, 0, 0, 0, 0.0004073357464890436, 0.09307398654790038, 0, 1, 0.09307398654790038, 0.02038797511862247, 1, 0.02038797511862247, 0]
  }, {
    name: src.NodeGraphDataFrameFieldNames.arc + 'throttled',
    type: src.FieldType.number,
    config: {
      color: {
        mode: src.FieldColorModeId.Fixed,
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
    name: src.NodeGraphDataFrameFieldNames.id,
    type: src.FieldType.string,
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
    name: src.NodeGraphDataFrameFieldNames.source,
    type: src.FieldType.string,
    config: {},
    values: [0, 5, 6, 6, 6, 6, 6, 6, 8, 10, 11, 11, 12, 13, 14, 14, 14]
  }, {
    name: 'sourceName',
    type: src.FieldType.string,
    config: {},
    values: ['auth', 'orders', 'api', 'api', 'api', 'api', 'api', 'api', 'orders', 'shipping', 'www', 'www', 'api', 'www', 'products', 'products', 'products']
  }, {
    name: src.NodeGraphDataFrameFieldNames.target,
    type: src.FieldType.string,
    config: {},
    values: [2, 8, 0, 5, 9, 2, 14, 4, 3, 7, 0, 6, 6, 11, 1, 2, 10]
  }, {
    name: 'targetName',
    type: src.FieldType.string,
    config: {},
    values: ['customers', 'orders', 'auth', 'orders', 'execute-api', 'customers', 'products', 'products', 'orders', 'shipping', 'auth', 'api', 'api', 'www', 'products', 'customers', 'shipping']
  }, {
    name: src.NodeGraphDataFrameFieldNames.mainStat,
    type: src.FieldType.string,
    config: {
      displayName: 'Response percentage'
    },
    values: ['Success 100.00%', 'Success 100.00%', 'Success 100.00%', 'Success 100.00%', 'Errors 100.00%', 'Success 100.00%', 'Faults 1.75%', 'Faults 50.00%', 'Success 100.00%', 'Errors 9.31%', 'Errors 6.62%', 'Faults 1.13%', 'Errors 100.00%', 'Faults 1.72%', 'Success 100.00%', 'Success 100.00%', 'Faults 9.30%']
  }, {
    name: src.NodeGraphDataFrameFieldNames.secondaryStat,
    type: src.FieldType.number,
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/nodeGraphUtils.ts


function generateRandomNodes() {
  let count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
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
    [src.NodeGraphDataFrameFieldNames.id]: {
      values: new src.ArrayVector(),
      type: src.FieldType.string
    },
    [src.NodeGraphDataFrameFieldNames.title]: {
      values: new src.ArrayVector(),
      type: src.FieldType.string
    },
    [src.NodeGraphDataFrameFieldNames.subTitle]: {
      values: new src.ArrayVector(),
      type: src.FieldType.string
    },
    [src.NodeGraphDataFrameFieldNames.mainStat]: {
      values: new src.ArrayVector(),
      type: src.FieldType.number,
      config: {
        displayName: 'Transactions per second'
      }
    },
    [src.NodeGraphDataFrameFieldNames.secondaryStat]: {
      values: new src.ArrayVector(),
      type: src.FieldType.number,
      config: {
        displayName: 'Average duration'
      }
    },
    [src.NodeGraphDataFrameFieldNames.arc + 'success']: {
      values: new src.ArrayVector(),
      type: src.FieldType.number,
      config: {
        color: {
          fixedColor: 'green',
          mode: src.FieldColorModeId.Fixed
        },
        displayName: 'Success'
      }
    },
    [src.NodeGraphDataFrameFieldNames.arc + 'errors']: {
      values: new src.ArrayVector(),
      type: src.FieldType.number,
      config: {
        color: {
          fixedColor: 'red',
          mode: src.FieldColorModeId.Fixed
        },
        displayName: 'Errors'
      }
    }
  };
  const nodeFrame = new src.MutableDataFrame({
    name: 'nodes',
    fields: Object.keys(nodeFields).map(key => Object.assign({}, nodeFields[key], {
      name: key
    })),
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgeFields = {
    [src.NodeGraphDataFrameFieldNames.id]: {
      values: new src.ArrayVector(),
      type: src.FieldType.string
    },
    [src.NodeGraphDataFrameFieldNames.source]: {
      values: new src.ArrayVector(),
      type: src.FieldType.string
    },
    [src.NodeGraphDataFrameFieldNames.target]: {
      values: new src.ArrayVector(),
      type: src.FieldType.string
    }
  };
  const edgesFrame = new src.MutableDataFrame({
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
  return [new src.MutableDataFrame(nodes), new src.MutableDataFrame(edges)];
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/variables.ts

class TestDataVariableSupport extends src.StandardVariableSupport {
  toDataQuery(query) {
    return {
      refId: 'TestDataDataSource-QueryVariable',
      stringInput: query.query,
      scenarioId: 'variables-query',
      csvWave: undefined
    };
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/datasource.ts
function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class TestDataDataSource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,grafana_runtime_src.getTemplateSrv)();
    super(instanceSettings);
    this.templateSrv = templateSrv;

    datasource_defineProperty(this, "scenariosCache", void 0);

    this.templateSrv = templateSrv;
    this.variables = new TestDataVariableSupport();
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
          streams.push(runStream(target, options));
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
      return (0,of.of)({
        data: []
      });
    }

    return (0,merge/* merge */.T)(...streams);
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
    const dataFrame = new src.ArrayDataFrame(events);
    dataFrame.meta = {
      dataTopic: src.DataTopic.Annotations
    };
    return (0,of.of)({
      key: target.refId,
      data: [dataFrame]
    }).pipe((0,delay/* delay */.g)(100));
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
    const interpolatedQuery = this.templateSrv.replace(query, (0,utils/* getSearchFilterScopedVar */._6)({
      query,
      wildcardChar: '*',
      options: options.scopedVars
    }));
    const children = queryMetricTree(interpolatedQuery);
    const items = children.map(item => ({
      value: item.name,
      text: item.name
    }));
    const dataFrame = new src.ArrayDataFrame(items);
    return (0,of.of)({
      data: [dataFrame]
    }).pipe((0,delay/* delay */.g)(100));
  }

  nodesQuery(target, options) {
    var _target$nodes, _target$nodes2;

    const type = ((_target$nodes = target.nodes) === null || _target$nodes === void 0 ? void 0 : _target$nodes.type) || 'random';
    let frames;

    switch (type) {
      case 'random':
        frames = generateRandomNodes((_target$nodes2 = target.nodes) === null || _target$nodes2 === void 0 ? void 0 : _target$nodes2.count);
        break;

      case 'response':
        frames = savedNodesResponse();
        break;

      default:
        throw new Error(`Unknown node_graph sub type ${type}`);
    }

    return (0,of.of)({
      data: frames
    }).pipe((0,delay/* delay */.g)(100));
  }

  rawFrameQuery(target, options) {
    try {
      var _target$rawFrameConte;

      const data = JSON.parse((_target$rawFrameConte = target.rawFrameContent) !== null && _target$rawFrameConte !== void 0 ? _target$rawFrameConte : '[]').map(v => {
        const f = (0,src.toDataFrame)(v);
        f.refId = target.refId;
        return f;
      });
      return (0,of.of)({
        data,
        state: src.LoadingState.Done
      }).pipe((0,delay/* delay */.g)(100));
    } catch (ex) {
      return (0,of.of)({
        data: [],
        error: ex
      }).pipe((0,delay/* delay */.g)(100));
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
        return (0,throwError/* throwError */._)(() => new Error('Scenario returned an error because the input was empty.'));
      }
    }

    return null;
  }

}

function runGrafanaAPI(target, req) {
  const url = `/api/${target.stringInput}`;
  return (0,from/* from */.D)((0,grafana_runtime_src.getBackendSrv)().get(url).then(res => {
    const frame = new src.ArrayDataFrame(res);
    return {
      state: src.LoadingState.Done,
      data: [frame]
    };
  }));
}

let liveQueryCounter = 1000;

function runGrafanaLiveQuery(target, req) {
  if (!target.channel) {
    throw new Error(`Missing channel config`);
  }

  return (0,grafana_runtime_src.getGrafanaLiveSrv)().getDataStream({
    addr: {
      scope: src.LiveChannelScope.Plugin,
      namespace: 'testdata',
      path: target.channel
    },
    key: `testStream.${liveQueryCounter++}`
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/testdata/module.tsx
function module_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class TestDataAnnotationsQueryCtrl {
  constructor() {
    module_defineProperty(this, "annotation", void 0);
  }

}

module_defineProperty(TestDataAnnotationsQueryCtrl, "template", '<h2>Annotation scenario</h2>');

const module_plugin = new src.DataSourcePlugin(TestDataDataSource).setConfigEditor(ConfigEditor).setQueryEditor(QueryEditor).setAnnotationQueryCtrl(TestDataAnnotationsQueryCtrl).addConfigPage({
  title: 'Setup',
  icon: 'list-ul',
  body: TestInfoTab,
  id: 'setup'
});

/***/ })

}]);