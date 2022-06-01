"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2651],{

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__/* .getNavModel */ .h)(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/live/pages/PipelineAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PipelineAdminPage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/hooks/useNavModel.ts
var useNavModel = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/live/pages/AddNewRule.tsx








const patternTypes = [{
  label: 'Data source',
  description: 'Configure a channel scoped to a data source instance',
  value: 'ds'
}, {
  label: 'Any',
  description: 'Enter an arbitray channel pattern',
  value: 'any'
}];
function AddNewRule(_ref) {
  let {
    onRuleAdded
  } = _ref;
  const [patternType, setPatternType] = (0,react.useState)();
  const [pattern, setPattern] = (0,react.useState)();
  const [patternPrefix, setPatternPrefix] = (0,react.useState)('');
  const [datasource, setDatasource] = (0,react.useState)();
  const notifyApp = (0,appNotification/* useAppNotification */.iG)();

  const onSubmit = () => {
    if (!pattern) {
      notifyApp.error('Enter path');
      return;
    }

    if (patternType === 'ds' && !patternPrefix.length) {
      notifyApp.error('Select datasource');
      return;
    }

    (0,src.getBackendSrv)().post(`api/live/channel-rules`, {
      pattern: patternPrefix + pattern,
      settings: {
        converter: {
          type: 'jsonAuto'
        },
        frameOutputs: [{
          type: 'managedStream'
        }]
      }
    }).then(v => {
      console.log('ADDED', v);
      setPattern(undefined);
      setPatternType(undefined);
      onRuleAdded(v.rule);
    }).catch(e => {
      notifyApp.error('Error adding rule', e);
      e.isHandled = true;
    });
  };

  if (patternType) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        children: [patternType === 'any' && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "Pattern",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            value: pattern !== null && pattern !== void 0 ? pattern : '',
            onChange: e => setPattern(e.currentTarget.value),
            placeholder: "scope/namespace/path"
          })
        }), patternType === 'ds' && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
            label: "Data source",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.DataSourcePicker, {
              current: datasource,
              onChange: ds => {
                setDatasource(ds);
                setPatternPrefix(`${grafana_data_src.LiveChannelScope.DataSource}/${ds.uid}/`);
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
            label: "Path",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
              value: pattern !== null && pattern !== void 0 ? pattern : '',
              onChange: e => setPattern(e.currentTarget.value),
              placeholder: "path"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            onClick: onSubmit,
            variant: pattern !== null && pattern !== void 0 && pattern.length ? 'primary' : 'secondary',
            children: "Add"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            variant: "secondary",
            onClick: () => setPatternType(undefined),
            children: "Cancel"
          })
        })]
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ValuePicker, {
      label: "Add channel rule",
      variant: "secondary",
      size: "md",
      icon: "plus",
      menuPlacement: "auto",
      isFullWidth: false,
      options: patternTypes,
      onChange: v => setPatternType(v.value)
    })
  });
}
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./public/app/features/plugins/datasource_srv.ts
var datasource_srv = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
;// CONCATENATED MODULE: ./public/app/features/live/pages/RuleSettingsEditor.tsx





const RuleSettingsEditor = _ref => {
  var _value$type;

  let {
    onChange,
    value,
    ruleType,
    entitiesInfo
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      options: entitiesInfo[ruleType],
      placeholder: "Select an option",
      value: (_value$type = value === null || value === void 0 ? void 0 : value.type) !== null && _value$type !== void 0 ? _value$type : '',
      onChange: value => {
        // set the body with example
        const type = value.value;
        onChange({
          type,
          [type]: entitiesInfo.getExample(ruleType, type)
        });
      }
    }, ruleType), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
      height: '50vh',
      value: value ? JSON.stringify(value[value.type], null, '\t') : '',
      showLineNumbers: true,
      readOnly: false,
      language: "json",
      showMiniMap: false,
      onBlur: text => {
        const body = JSON.parse(text);
        onChange({
          type: value.type,
          [value.type]: body
        });
      }
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/features/live/pages/RuleSettingsArray.tsx






const RuleSettingsArray = _ref => {
  let {
    onChange,
    value,
    ruleType,
    entitiesInfo
  } = _ref;
  const [index, setIndex] = (0,react.useState)(0);
  const arr = value !== null && value !== void 0 ? value : [];

  const onRuleChange = v => {
    if (!value) {
      onChange([v]);
    } else {
      const copy = [...value];
      copy[index] = v;
      onChange(copy);
    }
  }; // create array of value.length + 1


  let indexArr = [];

  for (let i = 0; i <= arr.length; i++) {
    indexArr.push({
      label: `${ruleType}: ${i}`,
      value: i
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      placeholder: "Select an index",
      options: indexArr,
      value: index,
      onChange: index => {
        // set index to find the correct setting
        setIndex(index.value);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleSettingsEditor, {
      onChange: onRuleChange,
      value: arr[index],
      ruleType: ruleType,
      entitiesInfo: entitiesInfo
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/features/live/pages/RuleTest.tsx







const RuleTest = props => {
  const [response, setResponse] = (0,react.useState)();
  const [data, setData] = (0,react.useState)();
  const styles = (0,grafana_ui_src.useStyles)(getStyles);

  const onBlur = text => {
    setData(text);
  };

  const onClick = () => {
    (0,src.getBackendSrv)().post(`api/live/pipeline-convert-test`, {
      channelRules: [props.rule],
      channel: props.rule.pattern,
      data: data
    }).then(data => {
      const t = data.channelFrames;

      if (t) {
        setResponse(t.map(f => {
          const frame = (0,grafana_data_src.dataFrameFromJSON)(f.frame);

          for (const field of frame.fields) {
            field.display = (0,grafana_data_src.getDisplayProcessor)({
              field,
              theme: src.config.theme2
            });
          }

          return {
            channel: f.channel,
            frame
          };
        }));
      }
    }).catch(e => {
      setResponse(e);
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
      height: 100,
      value: "",
      showLineNumbers: true,
      readOnly: false,
      language: "json",
      showMiniMap: false,
      onBlur: onBlur
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      onClick: onClick,
      className: styles.margin,
      children: "Test"
    }), (response === null || response === void 0 ? void 0 : response.length) && response.map(r => /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
      label: r.channel,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Table, {
        data: r.frame,
        width: 700,
        height: Math.min(10 * r.frame.length + 10, 150),
        showTypeIcons: true
      })
    }, r.channel))]
  });
};

const getStyles = theme => {
  return {
    margin: emotion_css_esm.css`
      margin-bottom: 15px;
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/live/pages/utils.ts

async function getPipeLineEntities() {
  return await (0,src.getBackendSrv)().get(`api/live/pipeline-entities`).then(data => {
    return {
      converter: transformLabel(data, 'converters'),
      frameProcessors: transformLabel(data, 'frameProcessors'),
      frameOutputs: transformLabel(data, 'frameOutputs'),
      getExample: (ruleType, type) => {
        var _data$, _data$$filter, _data$$filter$;

        return (_data$ = data[`${ruleType}s`]) === null || _data$ === void 0 ? void 0 : (_data$$filter = _data$.filter(option => option.type === type)) === null || _data$$filter === void 0 ? void 0 : (_data$$filter$ = _data$$filter[0]) === null || _data$$filter$ === void 0 ? void 0 : _data$$filter$['example'];
      }
    };
  });
}
function transformLabel(data, key) {
  if (Array.isArray(data)) {
    return data.map(d => ({
      label: d[key],
      value: d[key]
    }));
  }

  return data[key].map(typeObj => ({
    label: typeObj.type,
    value: typeObj.type
  }));
}
;// CONCATENATED MODULE: ./public/app/features/live/pages/RuleModal.tsx











const tabs = [{
  label: 'Converter',
  type: 'converter',
  isConverter: true
}, {
  label: 'Processors',
  type: 'frameProcessors'
}, {
  label: 'Outputs',
  type: 'frameOutputs'
}, {
  label: 'Test',
  isTest: true,
  icon: 'flask'
}];
const RuleModal = props => {
  var _rule$settings;

  const {
    isOpen,
    onClose,
    clickColumn
  } = props;
  const [rule, setRule] = (0,react.useState)(props.rule);
  const [activeTab, setActiveTab] = (0,react.useState)(tabs.find(t => t.type === clickColumn)); // to show color of Save button

  const [hasChange, setChange] = (0,react.useState)(false);
  const [ruleSetting, setRuleSetting] = (0,react.useState)(activeTab !== null && activeTab !== void 0 && activeTab.type ? rule === null || rule === void 0 ? void 0 : (_rule$settings = rule.settings) === null || _rule$settings === void 0 ? void 0 : _rule$settings[activeTab.type] : undefined);
  const [entitiesInfo, setEntitiesInfo] = (0,react.useState)();
  const styles = (0,grafana_ui_src.useStyles)(RuleModal_getStyles);

  const onRuleSettingChange = value => {
    setChange(true);

    if (activeTab !== null && activeTab !== void 0 && activeTab.type) {
      setRule(Object.assign({}, rule, {
        settings: Object.assign({}, rule.settings, {
          [activeTab === null || activeTab === void 0 ? void 0 : activeTab.type]: value
        })
      }));
    }

    setRuleSetting(value);
  }; // load pipeline entities info


  (0,react.useMemo)(() => {
    getPipeLineEntities().then(data => {
      setEntitiesInfo(data);
    });
  }, []);

  const onSave = () => {
    (0,src.getBackendSrv)().put(`api/live/channel-rules`, rule).then(() => {
      setChange(false);
      onClose();
    }).catch(e => console.error(e));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Modal, {
    isOpen: isOpen,
    title: rule.pattern,
    onDismiss: onClose,
    closeOnEscape: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TabsBar, {
      children: tabs.map((tab, index) => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tab, {
          label: tab.label,
          active: tab === activeTab,
          icon: tab.icon,
          onChangeTab: () => {
            setActiveTab(tab);

            if (tab.type) {
              var _rule$settings2;

              // to notify children of the new rule
              setRuleSetting(rule === null || rule === void 0 ? void 0 : (_rule$settings2 = rule.settings) === null || _rule$settings2 === void 0 ? void 0 : _rule$settings2[tab.type]);
            }
          }
        }, index);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.TabContent, {
      children: [entitiesInfo && rule && activeTab && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(activeTab === null || activeTab === void 0 ? void 0 : activeTab.isTest) && /*#__PURE__*/(0,jsx_runtime.jsx)(RuleTest, {
          rule: rule
        }), activeTab.isConverter && /*#__PURE__*/(0,jsx_runtime.jsx)(RuleSettingsEditor, {
          onChange: onRuleSettingChange,
          value: ruleSetting,
          ruleType: 'converter',
          entitiesInfo: entitiesInfo
        }), !activeTab.isConverter && activeTab.type && /*#__PURE__*/(0,jsx_runtime.jsx)(RuleSettingsArray, {
          onChange: onRuleSettingChange,
          value: ruleSetting,
          ruleType: activeTab.type,
          entitiesInfo: entitiesInfo
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        onClick: onSave,
        className: styles.save,
        variant: hasChange ? 'primary' : 'secondary',
        children: "Save"
      })]
    })]
  });
};

const RuleModal_getStyles = theme => {
  return {
    save: emotion_css_esm.css`
      margin-top: 5px;
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/live/pages/PipelineTable.tsx
var _th, _th2, _th3, _th4;










function renderOutputTags(key, output) {
  if (!(output !== null && output !== void 0 && output.type)) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tag, {
    name: output.type
  }, key);
}

const PipelineTable = props => {
  const {
    rules
  } = props;
  const [isOpen, setOpen] = (0,react.useState)(false);
  const [selectedRule, setSelectedRule] = (0,react.useState)();
  const [clickColumn, setClickColumn] = (0,react.useState)('converter');
  const styles = (0,grafana_ui_src.useStyles)(PipelineTable_getStyles);

  const onRowClick = (rule, event) => {
    var _event$target;

    if (!rule) {
      return;
    }

    let column = event === null || event === void 0 ? void 0 : (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.getAttribute('data-column');

    if (!column || column === 'pattern') {
      column = 'converter';
    }

    setClickColumn(column);
    setSelectedRule(rule);
    setOpen(true);
  }; // Supports selecting a rule from external config (after add rule)


  (0,react.useEffect)(() => {
    if (props.selectRule) {
      onRowClick(props.selectRule);
    }
  }, [props.selectRule]);

  const onRemoveRule = pattern => {
    (0,src.getBackendSrv)().delete(`api/live/channel-rules`, JSON.stringify({
      pattern: pattern
    })).catch(e => console.error(e)).finally(() => {
      props.onRuleChanged();
    });
  };

  const renderPattern = pattern => {
    if (pattern.startsWith('ds/')) {
      const idx = pattern.indexOf('/', 4);

      if (idx > 3) {
        const uid = pattern.substring(3, idx);
        const ds = (0,datasource_srv/* getDatasourceSrv */.ak)().getInstanceSettings(uid);

        if (ds) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tag, {
              name: ds.name,
              colorIndex: 1
            }), " \xA0", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: pattern.substring(idx + 1)
            })]
          });
        }
      }
    }

    return pattern;
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "admin-list-table",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: "filter-table filter-table--hover form-inline",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [_th || (_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: "Channel"
            })), _th2 || (_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: "Converter"
            })), _th3 || (_th3 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: "Processor"
            })), _th4 || (_th4 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: "Output"
            })), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              style: {
                width: 10
              },
              children: "\xA0"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: rules.map(rule => {
            var _rule$settings, _rule$settings$conver, _rule$settings2, _rule$settings2$frame, _rule$settings3, _rule$settings3$frame;

            return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              onClick: e => onRowClick(rule, e),
              className: styles.row,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "pattern",
                children: renderPattern(rule.pattern)
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "converter",
                children: (_rule$settings = rule.settings) === null || _rule$settings === void 0 ? void 0 : (_rule$settings$conver = _rule$settings.converter) === null || _rule$settings$conver === void 0 ? void 0 : _rule$settings$conver.type
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "processor",
                children: (_rule$settings2 = rule.settings) === null || _rule$settings2 === void 0 ? void 0 : (_rule$settings2$frame = _rule$settings2.frameProcessors) === null || _rule$settings2$frame === void 0 ? void 0 : _rule$settings2$frame.map(processor => /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: processor.type
                }, rule.pattern + processor.type))
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "output",
                children: (_rule$settings3 = rule.settings) === null || _rule$settings3 === void 0 ? void 0 : (_rule$settings3$frame = _rule$settings3.frameOutputs) === null || _rule$settings3$frame === void 0 ? void 0 : _rule$settings3$frame.map(output => /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  children: renderOutputTags('out', output)
                }, rule.pattern + output.type))
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
                  name: "trash-alt",
                  onClick: e => {
                    e.stopPropagation();
                    onRemoveRule(rule.pattern);
                  }
                })
              })]
            }, rule.pattern);
          })
        })]
      })
    }), isOpen && selectedRule && /*#__PURE__*/(0,jsx_runtime.jsx)(RuleModal, {
      rule: selectedRule,
      isOpen: isOpen,
      onClose: () => {
        setOpen(false);
      },
      clickColumn: clickColumn
    })]
  });
};

const PipelineTable_getStyles = theme => {
  return {
    row: emotion_css_esm.css`
      cursor: pointer;
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/live/pages/PipelineAdminPage.tsx









function PipelineAdminPage() {
  const [rules, setRules] = (0,react.useState)([]);
  const [defaultRules, setDefaultRules] = (0,react.useState)([]);
  const [newRule, setNewRule] = (0,react.useState)();
  const navModel = (0,useNavModel/* useNavModel */.q)('live-pipeline');
  const [error, setError] = (0,react.useState)();

  const loadRules = () => {
    (0,src.getBackendSrv)().get(`api/live/channel-rules`).then(data => {
      var _data$rules, _data$rules2;

      setRules((_data$rules = data.rules) !== null && _data$rules !== void 0 ? _data$rules : []);
      setDefaultRules((_data$rules2 = data.rules) !== null && _data$rules2 !== void 0 ? _data$rules2 : []);
    }).catch(e => {
      if (e.data) {
        setError(JSON.stringify(e.data, null, 2));
      }
    });
  };

  (0,react.useEffect)(() => {
    loadRules();
  }, []);

  const onSearchQueryChange = e => {
    if (e.target.value) {
      setRules(rules.filter(rule => rule.pattern.toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setRules(defaultRules);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default.Contents */.Z.Contents, {
      children: [error && /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
        children: error
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "page-action-bar",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            placeholder: "Search pattern...",
            onChange: onSearchQueryChange
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(PipelineTable, {
        rules: rules,
        onRuleChanged: loadRules,
        selectRule: newRule
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(AddNewRule, {
        onRuleAdded: r => {
          console.log('GOT', r, 'vs', rules[0]);
          setNewRule(r);
          loadRules();
        }
      })]
    })
  });
}

/***/ })

}]);