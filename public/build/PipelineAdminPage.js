"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PipelineAdminPage"],{

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavModel": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/live/pages/AddNewRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNewRule": () => (/* binding */ AddNewRule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const patternTypes = [{
  label: 'Data source',
  description: 'Configure a channel scoped to a data source instance',
  value: 'ds'
}, {
  label: 'Any',
  description: 'Enter an arbitray channel pattern',
  value: 'any'
}];
function AddNewRule({
  onRuleAdded
}) {
  const [patternType, setPatternType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [pattern, setPattern] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [patternPrefix, setPatternPrefix] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [datasource, setDatasource] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();

  const onSubmit = () => {
    if (!pattern) {
      notifyApp.error('Enter path');
      return;
    }

    if (patternType === 'ds' && !patternPrefix.length) {
      notifyApp.error('Select datasource');
      return;
    }

    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post(`api/live/channel-rules`, {
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
        children: [patternType === 'any' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "Pattern",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
            value: pattern !== null && pattern !== void 0 ? pattern : '',
            onChange: e => setPattern(e.currentTarget.value),
            placeholder: "scope/namespace/path"
          })
        }), patternType === 'ds' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Data source",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker, {
              current: datasource,
              onChange: ds => {
                setDatasource(ds);
                setPatternPrefix(`${_grafana_data__WEBPACK_IMPORTED_MODULE_1__.LiveChannelScope.DataSource}/${ds.uid}/`);
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Path",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
              value: pattern !== null && pattern !== void 0 ? pattern : '',
              onChange: e => setPattern(e.currentTarget.value),
              placeholder: "path"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            onClick: onSubmit,
            variant: pattern !== null && pattern !== void 0 && pattern.length ? 'primary' : 'secondary',
            children: "Add"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            onClick: () => setPatternType(undefined),
            children: "Cancel"
          })
        })]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ValuePicker, {
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

/***/ }),

/***/ "./public/app/features/live/pages/PipelineAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PipelineAdminPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var _AddNewRule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/live/pages/AddNewRule.tsx");
/* harmony import */ var _PipelineTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/live/pages/PipelineTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function PipelineAdminPage() {
  const [rules, setRules] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [defaultRules, setDefaultRules] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [newRule, setNewRule] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_4__.useNavModel)('live-pipeline');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const loadRules = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`api/live/channel-rules`).then(data => {
      var _data$rules, _data$rules2;

      setRules((_data$rules = data.rules) !== null && _data$rules !== void 0 ? _data$rules : []);
      setDefaultRules((_data$rules2 = data.rules) !== null && _data$rules2 !== void 0 ? _data$rules2 : []);
    }).catch(e => {
      if (e.data) {
        setError(JSON.stringify(e.data, null, 2));
      }
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    loadRules();
  }, []);

  const onSearchQueryChange = e => {
    if (e.target.value) {
      setRules(rules.filter(rule => rule.pattern.toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setRules(defaultRules);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("pre", {
        children: error
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "page-action-bar",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
            placeholder: "Search pattern...",
            onChange: onSearchQueryChange
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PipelineTable__WEBPACK_IMPORTED_MODULE_6__.PipelineTable, {
        rules: rules,
        onRuleChanged: loadRules,
        selectRule: newRule
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AddNewRule__WEBPACK_IMPORTED_MODULE_5__.AddNewRule, {
        onRuleAdded: r => {
          console.log('GOT', r, 'vs', rules[0]);
          setNewRule(r);
          loadRules();
        }
      })]
    })
  });
}

/***/ }),

/***/ "./public/app/features/live/pages/PipelineTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipelineTable": () => (/* binding */ PipelineTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _RuleModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/live/pages/RuleModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3, _th4;










function renderOutputTags(key, output) {
  if (!(output !== null && output !== void 0 && output.type)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tag, {
    name: output.type
  }, key);
}

const PipelineTable = props => {
  const {
    rules
  } = props;
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedRule, setSelectedRule] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [clickColumn, setClickColumn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('converter');
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);

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


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (props.selectRule) {
      onRowClick(props.selectRule);
    }
  }, [props.selectRule]);

  const onRemoveRule = pattern => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().delete(`api/live/channel-rules`, JSON.stringify({
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
        const ds = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)().getInstanceSettings(uid);

        if (ds) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tag, {
              name: ds.name,
              colorIndex: 1
            }), " \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              children: pattern.substring(idx + 1)
            })]
          });
        }
      }
    }

    return pattern;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "admin-list-table",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "filter-table filter-table--hover form-inline",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
            children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Channel"
            })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Converter"
            })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Processor"
            })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              children: "Output"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
              style: {
                width: 10
              },
              children: "\xA0"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
          children: rules.map(rule => {
            var _rule$settings, _rule$settings$conver, _rule$settings2, _rule$settings2$frame, _rule$settings3, _rule$settings3$frame;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
              onClick: e => onRowClick(rule, e),
              className: styles.row,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "pattern",
                children: renderPattern(rule.pattern)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "converter",
                children: (_rule$settings = rule.settings) === null || _rule$settings === void 0 ? void 0 : (_rule$settings$conver = _rule$settings.converter) === null || _rule$settings$conver === void 0 ? void 0 : _rule$settings$conver.type
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "processor",
                children: (_rule$settings2 = rule.settings) === null || _rule$settings2 === void 0 ? void 0 : (_rule$settings2$frame = _rule$settings2.frameProcessors) === null || _rule$settings2$frame === void 0 ? void 0 : _rule$settings2$frame.map(processor => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  children: processor.type
                }, rule.pattern + processor.type))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                "data-pattern": rule.pattern,
                "data-column": "output",
                children: (_rule$settings3 = rule.settings) === null || _rule$settings3 === void 0 ? void 0 : (_rule$settings3$frame = _rule$settings3.frameOutputs) === null || _rule$settings3$frame === void 0 ? void 0 : _rule$settings3$frame.map(output => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                  children: renderOutputTags('out', output)
                }, rule.pattern + output.type))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
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
    }), isOpen && selectedRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_RuleModal__WEBPACK_IMPORTED_MODULE_5__.RuleModal, {
      rule: selectedRule,
      isOpen: isOpen,
      onClose: () => {
        setOpen(false);
      },
      clickColumn: clickColumn
    })]
  });
};

const getStyles = theme => {
  return {
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      cursor: pointer;
    `
  };
};

/***/ }),

/***/ "./public/app/features/live/pages/RuleModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleModal": () => (/* binding */ RuleModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _RuleSettingsArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/live/pages/RuleSettingsArray.tsx");
/* harmony import */ var _RuleSettingsEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/live/pages/RuleSettingsEditor.tsx");
/* harmony import */ var _RuleTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/live/pages/RuleTest.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/live/pages/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











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
  const [rule, setRule] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.rule);
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tabs.find(t => t.type === clickColumn)); // to show color of Save button

  const [hasChange, setChange] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [ruleSetting, setRuleSetting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(activeTab !== null && activeTab !== void 0 && activeTab.type ? rule === null || rule === void 0 ? void 0 : (_rule$settings = rule.settings) === null || _rule$settings === void 0 ? void 0 : _rule$settings[activeTab.type] : undefined);
  const [entitiesInfo, setEntitiesInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);

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


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getPipeLineEntities)().then(data => {
      setEntitiesInfo(data);
    });
  }, []);

  const onSave = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().put(`api/live/channel-rules`, rule).then(() => {
      setChange(false);
      onClose();
    }).catch(e => console.error(e));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    isOpen: isOpen,
    title: rule.pattern,
    onDismiss: onClose,
    closeOnEscape: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TabsBar, {
      children: tabs.map((tab, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tab, {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TabContent, {
      children: [entitiesInfo && rule && activeTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [(activeTab === null || activeTab === void 0 ? void 0 : activeTab.isTest) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RuleTest__WEBPACK_IMPORTED_MODULE_6__.RuleTest, {
          rule: rule
        }), activeTab.isConverter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RuleSettingsEditor__WEBPACK_IMPORTED_MODULE_5__.RuleSettingsEditor, {
          onChange: onRuleSettingChange,
          value: ruleSetting,
          ruleType: 'converter',
          entitiesInfo: entitiesInfo
        }), !activeTab.isConverter && activeTab.type && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RuleSettingsArray__WEBPACK_IMPORTED_MODULE_4__.RuleSettingsArray, {
          onChange: onRuleSettingChange,
          value: ruleSetting,
          ruleType: activeTab.type,
          entitiesInfo: entitiesInfo
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: onSave,
        className: styles.save,
        variant: hasChange ? 'primary' : 'secondary',
        children: "Save"
      })]
    })]
  });
};

const getStyles = theme => {
  return {
    save: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: 5px;
    `
  };
};

/***/ }),

/***/ "./public/app/features/live/pages/RuleSettingsArray.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleSettingsArray": () => (/* binding */ RuleSettingsArray)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _RuleSettingsEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/live/pages/RuleSettingsEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const RuleSettingsArray = ({
  onChange,
  value,
  ruleType,
  entitiesInfo
}) => {
  const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      placeholder: "Select an index",
      options: indexArr,
      value: index,
      onChange: index => {
        // set index to find the correct setting
        setIndex(index.value);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RuleSettingsEditor__WEBPACK_IMPORTED_MODULE_2__.RuleSettingsEditor, {
      onChange: onRuleChange,
      value: arr[index],
      ruleType: ruleType,
      entitiesInfo: entitiesInfo
    })]
  });
};

/***/ }),

/***/ "./public/app/features/live/pages/RuleSettingsEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleSettingsEditor": () => (/* binding */ RuleSettingsEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const RuleSettingsEditor = ({
  onChange,
  value,
  ruleType,
  entitiesInfo
}) => {
  var _value$type;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
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
    }, ruleType), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CodeEditor, {
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

/***/ }),

/***/ "./public/app/features/live/pages/RuleTest.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTest": () => (/* binding */ RuleTest)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const RuleTest = props => {
  const [response, setResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);

  const onBlur = text => {
    setData(text);
  };

  const onClick = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post(`api/live/pipeline-convert-test`, {
      channelRules: [props.rule],
      channel: props.rule.pattern,
      data: data
    }).then(data => {
      const t = data.channelFrames;

      if (t) {
        setResponse(t.map(f => {
          const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dataFrameFromJSON)(f.frame);

          for (const field of frame.fields) {
            field.display = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDisplayProcessor)({
              field,
              theme: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.theme2
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor, {
      height: 100,
      value: "",
      showLineNumbers: true,
      readOnly: false,
      language: "json",
      showMiniMap: false,
      onBlur: onBlur
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: onClick,
      className: styles.margin,
      children: "Test"
    }), (response === null || response === void 0 ? void 0 : response.length) && response.map(r => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      label: r.channel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Table, {
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
    margin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: 15px;
    `
  };
};

/***/ }),

/***/ "./public/app/features/live/pages/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPipeLineEntities": () => (/* binding */ getPipeLineEntities),
/* harmony export */   "transformLabel": () => (/* binding */ transformLabel)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

async function getPipeLineEntities() {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`api/live/pipeline-entities`).then(data => {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7O0FBQzlCLHlCQUFPNkIsSUFBSSxDQUFFLEdBQUVtRixRQUFTLEdBQWIsQ0FBWCw0REFBTyxPQUFzQjlFLE1BQXRCLENBQThCaUgsTUFBRCxJQUFnQ0EsTUFBTSxDQUFDbkosSUFBUCxLQUFnQkEsSUFBN0UsQ0FBUCxvRUFBTyxjQUFxRixDQUFyRixDQUFQLG1EQUFPLGVBQTBGLFNBQTFGLENBQVA7QUFDRDtBQU5JLEtBQVA7QUFRRCxHQVhVLENBQWI7QUFZRDtBQUVNLFNBQVNrSixjQUFULENBQXdCckgsSUFBeEIsRUFBbUNnQixHQUFuQyxFQUEyRDtBQUNoRSxNQUFJdUcsS0FBSyxDQUFDQyxPQUFOLENBQWN4SCxJQUFkLENBQUosRUFBeUI7QUFDdkIsV0FBT0EsSUFBSSxDQUFDNEMsR0FBTCxDQUFVNkUsQ0FBRCxLQUFRO0FBQ3RCMUssTUFBQUEsS0FBSyxFQUFFMEssQ0FBQyxDQUFDekcsR0FBRCxDQURjO0FBRXRCL0QsTUFBQUEsS0FBSyxFQUFFd0ssQ0FBQyxDQUFDekcsR0FBRDtBQUZjLEtBQVIsQ0FBVCxDQUFQO0FBSUQ7O0FBQ0QsU0FBT2hCLElBQUksQ0FBQ2dCLEdBQUQsQ0FBSixDQUFVNEIsR0FBVixDQUFlOEUsT0FBRCxLQUFrQztBQUNyRDNLLElBQUFBLEtBQUssRUFBRTJLLE9BQU8sQ0FBQ3ZKLElBRHNDO0FBRXJEbEIsSUFBQUEsS0FBSyxFQUFFeUssT0FBTyxDQUFDdko7QUFGc0MsR0FBbEMsQ0FBZCxDQUFQO0FBSUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2hvb2tzL3VzZU5hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpdmUvcGFnZXMvQWRkTmV3UnVsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGl2ZS9wYWdlcy9QaXBlbGluZUFkbWluUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGl2ZS9wYWdlcy9QaXBlbGluZVRhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9saXZlL3BhZ2VzL1J1bGVNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGl2ZS9wYWdlcy9SdWxlU2V0dGluZ3NBcnJheS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvbGl2ZS9wYWdlcy9SdWxlU2V0dGluZ3NFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpdmUvcGFnZXMvUnVsZVRlc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2xpdmUvcGFnZXMvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICcuLi9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuXG5leHBvcnQgY29uc3QgdXNlTmF2TW9kZWwgPSAoaWQ6IHN0cmluZyk6IE5hdk1vZGVsID0+IHtcbiAgY29uc3QgbmF2SW5kZXggPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KTtcbiAgcmV0dXJuIGdldE5hdk1vZGVsKG5hdkluZGV4LCBpZCk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlUmVmLCBMaXZlQ2hhbm5lbFNjb3BlLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IElucHV0LCBGaWVsZCwgQnV0dG9uLCBWYWx1ZVBpY2tlciwgSG9yaXpvbnRhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlQXBwTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuXG5pbXBvcnQgeyBSdWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uUnVsZUFkZGVkOiAocnVsZTogUnVsZSkgPT4gdm9pZDtcbn1cblxudHlwZSBQYXR0ZXJuVHlwZSA9ICdkcycgfCAnYW55JztcblxuY29uc3QgcGF0dGVyblR5cGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8UGF0dGVyblR5cGU+PiA9IFtcbiAge1xuICAgIGxhYmVsOiAnRGF0YSBzb3VyY2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29uZmlndXJlIGEgY2hhbm5lbCBzY29wZWQgdG8gYSBkYXRhIHNvdXJjZSBpbnN0YW5jZScsXG4gICAgdmFsdWU6ICdkcycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0FueScsXG4gICAgZGVzY3JpcHRpb246ICdFbnRlciBhbiBhcmJpdHJheSBjaGFubmVsIHBhdHRlcm4nLFxuICAgIHZhbHVlOiAnYW55JyxcbiAgfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGROZXdSdWxlKHsgb25SdWxlQWRkZWQgfTogUHJvcHMpIHtcbiAgY29uc3QgW3BhdHRlcm5UeXBlLCBzZXRQYXR0ZXJuVHlwZV0gPSB1c2VTdGF0ZTxQYXR0ZXJuVHlwZT4oKTtcbiAgY29uc3QgW3BhdHRlcm4sIHNldFBhdHRlcm5dID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbcGF0dGVyblByZWZpeCwgc2V0UGF0dGVyblByZWZpeF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2RhdGFzb3VyY2UsIHNldERhdGFzb3VyY2VdID0gdXNlU3RhdGU8RGF0YVNvdXJjZVJlZj4oKTtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgaWYgKCFwYXR0ZXJuKSB7XG4gICAgICBub3RpZnlBcHAuZXJyb3IoJ0VudGVyIHBhdGgnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhdHRlcm5UeXBlID09PSAnZHMnICYmICFwYXR0ZXJuUHJlZml4Lmxlbmd0aCkge1xuICAgICAgbm90aWZ5QXBwLmVycm9yKCdTZWxlY3QgZGF0YXNvdXJjZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoYGFwaS9saXZlL2NoYW5uZWwtcnVsZXNgLCB7XG4gICAgICAgIHBhdHRlcm46IHBhdHRlcm5QcmVmaXggKyBwYXR0ZXJuLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGNvbnZlcnRlcjoge1xuICAgICAgICAgICAgdHlwZTogJ2pzb25BdXRvJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZyYW1lT3V0cHV0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlOiAnbWFuYWdlZFN0cmVhbScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHY6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQURERUQnLCB2KTtcbiAgICAgICAgc2V0UGF0dGVybih1bmRlZmluZWQpO1xuICAgICAgICBzZXRQYXR0ZXJuVHlwZSh1bmRlZmluZWQpO1xuICAgICAgICBvblJ1bGVBZGRlZCh2LnJ1bGUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBub3RpZnlBcHAuZXJyb3IoJ0Vycm9yIGFkZGluZyBydWxlJywgZSk7XG4gICAgICAgIGUuaXNIYW5kbGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGlmIChwYXR0ZXJuVHlwZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgIHtwYXR0ZXJuVHlwZSA9PT0gJ2FueScgJiYgKFxuICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiUGF0dGVyblwiPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGF0dGVybiA/PyAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhdHRlcm4oZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNjb3BlL25hbWVzcGFjZS9wYXRoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGF0dGVyblR5cGUgPT09ICdkcycgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiRGF0YSBzb3VyY2VcIj5cbiAgICAgICAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgICAgY3VycmVudD17ZGF0YXNvdXJjZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YXNvdXJjZShkcyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhdHRlcm5QcmVmaXgoYCR7TGl2ZUNoYW5uZWxTY29wZS5EYXRhU291cmNlfS8ke2RzLnVpZH0vYCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlBhdGhcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e3BhdHRlcm4gPz8gJyd9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGF0dGVybihlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cInBhdGhcIiAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIlwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblN1Ym1pdH0gdmFyaWFudD17cGF0dGVybj8ubGVuZ3RoID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9PlxuICAgICAgICAgICAgICBBZGRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHNldFBhdHRlcm5UeXBlKHVuZGVmaW5lZCl9PlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxWYWx1ZVBpY2tlclxuICAgICAgICBsYWJlbD1cIkFkZCBjaGFubmVsIHJ1bGVcIlxuICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICAgIGlzRnVsbFdpZHRoPXtmYWxzZX1cbiAgICAgICAgb3B0aW9ucz17cGF0dGVyblR5cGVzfVxuICAgICAgICBvbkNoYW5nZT17KHYpID0+IHNldFBhdHRlcm5UeXBlKHYudmFsdWUpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyB1c2VOYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZU5hdk1vZGVsJztcblxuaW1wb3J0IHsgQWRkTmV3UnVsZSB9IGZyb20gJy4vQWRkTmV3UnVsZSc7XG5pbXBvcnQgeyBQaXBlbGluZVRhYmxlIH0gZnJvbSAnLi9QaXBlbGluZVRhYmxlJztcbmltcG9ydCB7IFJ1bGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGlwZWxpbmVBZG1pblBhZ2UoKSB7XG4gIGNvbnN0IFtydWxlcywgc2V0UnVsZXNdID0gdXNlU3RhdGU8UnVsZVtdPihbXSk7XG4gIGNvbnN0IFtkZWZhdWx0UnVsZXMsIHNldERlZmF1bHRSdWxlc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbbmV3UnVsZSwgc2V0TmV3UnVsZV0gPSB1c2VTdGF0ZTxSdWxlPigpO1xuICBjb25zdCBuYXZNb2RlbCA9IHVzZU5hdk1vZGVsKCdsaXZlLXBpcGVsaW5lJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIGNvbnN0IGxvYWRSdWxlcyA9ICgpID0+IHtcbiAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5nZXQoYGFwaS9saXZlL2NoYW5uZWwtcnVsZXNgKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UnVsZXMoZGF0YS5ydWxlcyA/PyBbXSk7XG4gICAgICAgIHNldERlZmF1bHRSdWxlcyhkYXRhLnJ1bGVzID8/IFtdKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuZGF0YSkge1xuICAgICAgICAgIHNldEVycm9yKEpTT04uc3RyaW5naWZ5KGUuZGF0YSwgbnVsbCwgMikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRSdWxlcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25TZWFyY2hRdWVyeUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgc2V0UnVsZXMocnVsZXMuZmlsdGVyKChydWxlKSA9PiBydWxlLnBhdHRlcm4udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRSdWxlcyhkZWZhdWx0UnVsZXMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAge2Vycm9yICYmIDxwcmU+e2Vycm9yfTwvcHJlPn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiU2VhcmNoIHBhdHRlcm4uLi5cIiBvbkNoYW5nZT17b25TZWFyY2hRdWVyeUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPFBpcGVsaW5lVGFibGUgcnVsZXM9e3J1bGVzfSBvblJ1bGVDaGFuZ2VkPXtsb2FkUnVsZXN9IHNlbGVjdFJ1bGU9e25ld1J1bGV9IC8+XG5cbiAgICAgICAgPEFkZE5ld1J1bGVcbiAgICAgICAgICBvblJ1bGVBZGRlZD17KHI6IFJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHT1QnLCByLCAndnMnLCBydWxlc1swXSk7XG4gICAgICAgICAgICBzZXROZXdSdWxlKHIpO1xuICAgICAgICAgICAgbG9hZFJ1bGVzKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgVGFnLCB1c2VTdHlsZXMsIEljb25CdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBnZXREYXRhc291cmNlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvZGF0YXNvdXJjZV9zcnYnO1xuXG5pbXBvcnQgeyBSdWxlTW9kYWwgfSBmcm9tICcuL1J1bGVNb2RhbCc7XG5pbXBvcnQgeyBSdWxlLCBPdXRwdXQsIFJ1bGVUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmZ1bmN0aW9uIHJlbmRlck91dHB1dFRhZ3Moa2V5OiBzdHJpbmcsIG91dHB1dD86IE91dHB1dCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gIGlmICghb3V0cHV0Py50eXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIDxUYWcga2V5PXtrZXl9IG5hbWU9e291dHB1dC50eXBlfSAvPjtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZXM6IFJ1bGVbXTtcbiAgb25SdWxlQ2hhbmdlZDogKCkgPT4gdm9pZDtcbiAgc2VsZWN0UnVsZT86IFJ1bGU7XG59XG5cbmV4cG9ydCBjb25zdCBQaXBlbGluZVRhYmxlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBydWxlcyB9ID0gcHJvcHM7XG4gIGNvbnN0IFtpc09wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRSdWxlLCBzZXRTZWxlY3RlZFJ1bGVdID0gdXNlU3RhdGU8UnVsZT4oKTtcbiAgY29uc3QgW2NsaWNrQ29sdW1uLCBzZXRDbGlja0NvbHVtbl0gPSB1c2VTdGF0ZTxSdWxlVHlwZT4oJ2NvbnZlcnRlcicpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBvblJvd0NsaWNrID0gKHJ1bGU6IFJ1bGUsIGV2ZW50PzogYW55KSA9PiB7XG4gICAgaWYgKCFydWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBjb2x1bW4gPSBldmVudD8udGFyZ2V0Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uJyk7XG4gICAgaWYgKCFjb2x1bW4gfHwgY29sdW1uID09PSAncGF0dGVybicpIHtcbiAgICAgIGNvbHVtbiA9ICdjb252ZXJ0ZXInO1xuICAgIH1cbiAgICBzZXRDbGlja0NvbHVtbihjb2x1bW4pO1xuICAgIHNldFNlbGVjdGVkUnVsZShydWxlKTtcbiAgICBzZXRPcGVuKHRydWUpO1xuICB9O1xuXG4gIC8vIFN1cHBvcnRzIHNlbGVjdGluZyBhIHJ1bGUgZnJvbSBleHRlcm5hbCBjb25maWcgKGFmdGVyIGFkZCBydWxlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5zZWxlY3RSdWxlKSB7XG4gICAgICBvblJvd0NsaWNrKHByb3BzLnNlbGVjdFJ1bGUpO1xuICAgIH1cbiAgfSwgW3Byb3BzLnNlbGVjdFJ1bGVdKTtcblxuICBjb25zdCBvblJlbW92ZVJ1bGUgPSAocGF0dGVybjogc3RyaW5nKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZGVsZXRlKGBhcGkvbGl2ZS9jaGFubmVsLXJ1bGVzYCwgSlNPTi5zdHJpbmdpZnkoeyBwYXR0ZXJuOiBwYXR0ZXJuIH0pKVxuICAgICAgLmNhdGNoKChlKSA9PiBjb25zb2xlLmVycm9yKGUpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBwcm9wcy5vblJ1bGVDaGFuZ2VkKCk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQYXR0ZXJuID0gKHBhdHRlcm46IHN0cmluZykgPT4ge1xuICAgIGlmIChwYXR0ZXJuLnN0YXJ0c1dpdGgoJ2RzLycpKSB7XG4gICAgICBjb25zdCBpZHggPSBwYXR0ZXJuLmluZGV4T2YoJy8nLCA0KTtcbiAgICAgIGlmIChpZHggPiAzKSB7XG4gICAgICAgIGNvbnN0IHVpZCA9IHBhdHRlcm4uc3Vic3RyaW5nKDMsIGlkeCk7XG4gICAgICAgIGNvbnN0IGRzID0gZ2V0RGF0YXNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3ModWlkKTtcbiAgICAgICAgaWYgKGRzKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxUYWcgbmFtZT17ZHMubmFtZX0gY29sb3JJbmRleD17MX0gLz4gJm5ic3A7XG4gICAgICAgICAgICAgIDxzcGFuPntwYXR0ZXJuLnN1YnN0cmluZyhpZHggKyAxKX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tbGlzdC10YWJsZVwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZpbHRlci10YWJsZS0taG92ZXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aD5DaGFubmVsPC90aD5cbiAgICAgICAgICAgICAgPHRoPkNvbnZlcnRlcjwvdGg+XG4gICAgICAgICAgICAgIDx0aD5Qcm9jZXNzb3I8L3RoPlxuICAgICAgICAgICAgICA8dGg+T3V0cHV0PC90aD5cbiAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAxMCB9fT4mbmJzcDs8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtydWxlcy5tYXAoKHJ1bGUpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17cnVsZS5wYXR0ZXJufSBvbkNsaWNrPXsoZSkgPT4gb25Sb3dDbGljayhydWxlLCBlKX0gY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1wYXR0ZXJuPXtydWxlLnBhdHRlcm59IGRhdGEtY29sdW1uPVwicGF0dGVyblwiPlxuICAgICAgICAgICAgICAgICAge3JlbmRlclBhdHRlcm4ocnVsZS5wYXR0ZXJuKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXBhdHRlcm49e3J1bGUucGF0dGVybn0gZGF0YS1jb2x1bW49XCJjb252ZXJ0ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtydWxlLnNldHRpbmdzPy5jb252ZXJ0ZXI/LnR5cGV9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1wYXR0ZXJuPXtydWxlLnBhdHRlcm59IGRhdGEtY29sdW1uPVwicHJvY2Vzc29yXCI+XG4gICAgICAgICAgICAgICAgICB7cnVsZS5zZXR0aW5ncz8uZnJhbWVQcm9jZXNzb3JzPy5tYXAoKHByb2Nlc3NvcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3J1bGUucGF0dGVybiArIHByb2Nlc3Nvci50eXBlfT57cHJvY2Vzc29yLnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgZGF0YS1wYXR0ZXJuPXtydWxlLnBhdHRlcm59IGRhdGEtY29sdW1uPVwib3V0cHV0XCI+XG4gICAgICAgICAgICAgICAgICB7cnVsZS5zZXR0aW5ncz8uZnJhbWVPdXRwdXRzPy5tYXAoKG91dHB1dCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3J1bGUucGF0dGVybiArIG91dHB1dC50eXBlfT57cmVuZGVyT3V0cHV0VGFncygnb3V0Jywgb3V0cHV0KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVSdWxlKHJ1bGUucGF0dGVybik7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNPcGVuICYmIHNlbGVjdGVkUnVsZSAmJiAoXG4gICAgICAgIDxSdWxlTW9kYWxcbiAgICAgICAgICBydWxlPXtzZWxlY3RlZFJ1bGV9XG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGlja0NvbHVtbj17Y2xpY2tDb2x1bW59XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByb3c6IGNzc2BcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTW9kYWwsIFRhYkNvbnRlbnQsIFRhYnNCYXIsIFRhYiwgQnV0dG9uLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJ1bGVTZXR0aW5nc0FycmF5IH0gZnJvbSAnLi9SdWxlU2V0dGluZ3NBcnJheSc7XG5pbXBvcnQgeyBSdWxlU2V0dGluZ3NFZGl0b3IgfSBmcm9tICcuL1J1bGVTZXR0aW5nc0VkaXRvcic7XG5pbXBvcnQgeyBSdWxlVGVzdCB9IGZyb20gJy4vUnVsZVRlc3QnO1xuaW1wb3J0IHsgUnVsZSwgUnVsZVR5cGUsIFBpcGVMaW5lRW50aXRpZXNJbmZvLCBSdWxlU2V0dGluZyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0UGlwZUxpbmVFbnRpdGllcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlOiBSdWxlO1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG4gIGNsaWNrQ29sdW1uOiBSdWxlVHlwZTtcbn1cbmludGVyZmFjZSBUYWJJbmZvIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdHlwZT86IFJ1bGVUeXBlO1xuICBpc1Rlc3Q/OiBib29sZWFuO1xuICBpc0NvbnZlcnRlcj86IGJvb2xlYW47XG4gIGljb24/OiBzdHJpbmc7XG59XG5jb25zdCB0YWJzOiBUYWJJbmZvW10gPSBbXG4gIHsgbGFiZWw6ICdDb252ZXJ0ZXInLCB0eXBlOiAnY29udmVydGVyJywgaXNDb252ZXJ0ZXI6IHRydWUgfSxcbiAgeyBsYWJlbDogJ1Byb2Nlc3NvcnMnLCB0eXBlOiAnZnJhbWVQcm9jZXNzb3JzJyB9LFxuICB7IGxhYmVsOiAnT3V0cHV0cycsIHR5cGU6ICdmcmFtZU91dHB1dHMnIH0sXG4gIHsgbGFiZWw6ICdUZXN0JywgaXNUZXN0OiB0cnVlLCBpY29uOiAnZmxhc2snIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUnVsZU1vZGFsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBpc09wZW4sIG9uQ2xvc2UsIGNsaWNrQ29sdW1uIH0gPSBwcm9wcztcbiAgY29uc3QgW3J1bGUsIHNldFJ1bGVdID0gdXNlU3RhdGU8UnVsZT4ocHJvcHMucnVsZSk7XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTxUYWJJbmZvIHwgdW5kZWZpbmVkPih0YWJzLmZpbmQoKHQpID0+IHQudHlwZSA9PT0gY2xpY2tDb2x1bW4pKTtcbiAgLy8gdG8gc2hvdyBjb2xvciBvZiBTYXZlIGJ1dHRvblxuICBjb25zdCBbaGFzQ2hhbmdlLCBzZXRDaGFuZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbcnVsZVNldHRpbmcsIHNldFJ1bGVTZXR0aW5nXSA9IHVzZVN0YXRlPGFueT4oYWN0aXZlVGFiPy50eXBlID8gcnVsZT8uc2V0dGluZ3M/LlthY3RpdmVUYWIudHlwZV0gOiB1bmRlZmluZWQpO1xuICBjb25zdCBbZW50aXRpZXNJbmZvLCBzZXRFbnRpdGllc0luZm9dID0gdXNlU3RhdGU8UGlwZUxpbmVFbnRpdGllc0luZm8+KCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IG9uUnVsZVNldHRpbmdDaGFuZ2UgPSAodmFsdWU6IFJ1bGVTZXR0aW5nIHwgUnVsZVNldHRpbmdbXSkgPT4ge1xuICAgIHNldENoYW5nZSh0cnVlKTtcbiAgICBpZiAoYWN0aXZlVGFiPy50eXBlKSB7XG4gICAgICBzZXRSdWxlKHtcbiAgICAgICAgLi4ucnVsZSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAuLi5ydWxlLnNldHRpbmdzLFxuICAgICAgICAgIFthY3RpdmVUYWI/LnR5cGVdOiB2YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRSdWxlU2V0dGluZyh2YWx1ZSk7XG4gIH07XG5cbiAgLy8gbG9hZCBwaXBlbGluZSBlbnRpdGllcyBpbmZvXG4gIHVzZU1lbW8oKCkgPT4ge1xuICAgIGdldFBpcGVMaW5lRW50aXRpZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBzZXRFbnRpdGllc0luZm8oZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvblNhdmUgPSAoKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAucHV0KGBhcGkvbGl2ZS9jaGFubmVsLXJ1bGVzYCwgcnVsZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0Q2hhbmdlKGZhbHNlKTtcbiAgICAgICAgb25DbG9zZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IHRpdGxlPXtydWxlLnBhdHRlcm59IG9uRGlzbWlzcz17b25DbG9zZX0gY2xvc2VPbkVzY2FwZT5cbiAgICAgIDxUYWJzQmFyPlxuICAgICAgICB7dGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBsYWJlbD17dGFiLmxhYmVsfVxuICAgICAgICAgICAgICBhY3RpdmU9e3RhYiA9PT0gYWN0aXZlVGFifVxuICAgICAgICAgICAgICBpY29uPXt0YWIuaWNvbiBhcyBhbnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlVGFiPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlVGFiKHRhYik7XG4gICAgICAgICAgICAgICAgaWYgKHRhYi50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAvLyB0byBub3RpZnkgY2hpbGRyZW4gb2YgdGhlIG5ldyBydWxlXG4gICAgICAgICAgICAgICAgICBzZXRSdWxlU2V0dGluZyhydWxlPy5zZXR0aW5ncz8uW3RhYi50eXBlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvVGFic0Jhcj5cbiAgICAgIDxUYWJDb250ZW50PlxuICAgICAgICB7ZW50aXRpZXNJbmZvICYmIHJ1bGUgJiYgYWN0aXZlVGFiICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2FjdGl2ZVRhYj8uaXNUZXN0ICYmIDxSdWxlVGVzdCBydWxlPXtydWxlfSAvPn1cbiAgICAgICAgICAgIHthY3RpdmVUYWIuaXNDb252ZXJ0ZXIgJiYgKFxuICAgICAgICAgICAgICA8UnVsZVNldHRpbmdzRWRpdG9yXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uUnVsZVNldHRpbmdDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3J1bGVTZXR0aW5nfVxuICAgICAgICAgICAgICAgIHJ1bGVUeXBlPXsnY29udmVydGVyJ31cbiAgICAgICAgICAgICAgICBlbnRpdGllc0luZm89e2VudGl0aWVzSW5mb31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IWFjdGl2ZVRhYi5pc0NvbnZlcnRlciAmJiBhY3RpdmVUYWIudHlwZSAmJiAoXG4gICAgICAgICAgICAgIDxSdWxlU2V0dGluZ3NBcnJheVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblJ1bGVTZXR0aW5nQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtydWxlU2V0dGluZ31cbiAgICAgICAgICAgICAgICBydWxlVHlwZT17YWN0aXZlVGFiLnR5cGV9XG4gICAgICAgICAgICAgICAgZW50aXRpZXNJbmZvPXtlbnRpdGllc0luZm99XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU2F2ZX0gY2xhc3NOYW1lPXtzdHlsZXMuc2F2ZX0gdmFyaWFudD17aGFzQ2hhbmdlID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSd9PlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L1RhYkNvbnRlbnQ+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc2F2ZTogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2dyYWZhbmEtZGF0YS9zcmMnO1xuXG5pbXBvcnQgeyBSdWxlU2V0dGluZ3NFZGl0b3IgfSBmcm9tICcuL1J1bGVTZXR0aW5nc0VkaXRvcic7XG5pbXBvcnQgeyBSdWxlVHlwZSwgUnVsZVNldHRpbmcsIFBpcGVMaW5lRW50aXRpZXNJbmZvIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGVUeXBlOiBSdWxlVHlwZTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogUnVsZVNldHRpbmdbXSkgPT4gdm9pZDtcbiAgdmFsdWU6IFJ1bGVTZXR0aW5nW107XG4gIGVudGl0aWVzSW5mbzogUGlwZUxpbmVFbnRpdGllc0luZm87XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlU2V0dGluZ3NBcnJheTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DaGFuZ2UsIHZhbHVlLCBydWxlVHlwZSwgZW50aXRpZXNJbmZvIH0pID0+IHtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBhcnIgPSB2YWx1ZSA/PyBbXTtcbiAgY29uc3Qgb25SdWxlQ2hhbmdlID0gKHY6IFJ1bGVTZXR0aW5nKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgb25DaGFuZ2UoW3ZdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29weSA9IFsuLi52YWx1ZV07XG4gICAgICBjb3B5W2luZGV4XSA9IHY7XG4gICAgICBvbkNoYW5nZShjb3B5KTtcbiAgICB9XG4gIH07XG4gIC8vIGNyZWF0ZSBhcnJheSBvZiB2YWx1ZS5sZW5ndGggKyAxXG4gIGxldCBpbmRleEFycjogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPG51bWJlcj4+ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGluZGV4QXJyLnB1c2goe1xuICAgICAgbGFiZWw6IGAke3J1bGVUeXBlfTogJHtpfWAsXG4gICAgICB2YWx1ZTogaSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYW4gaW5kZXhcIlxuICAgICAgICBvcHRpb25zPXtpbmRleEFycn1cbiAgICAgICAgdmFsdWU9e2luZGV4fVxuICAgICAgICBvbkNoYW5nZT17KGluZGV4KSA9PiB7XG4gICAgICAgICAgLy8gc2V0IGluZGV4IHRvIGZpbmQgdGhlIGNvcnJlY3Qgc2V0dGluZ1xuICAgICAgICAgIHNldEluZGV4KGluZGV4LnZhbHVlISk7XG4gICAgICAgIH19XG4gICAgICA+PC9TZWxlY3Q+XG4gICAgICA8UnVsZVNldHRpbmdzRWRpdG9yIG9uQ2hhbmdlPXtvblJ1bGVDaGFuZ2V9IHZhbHVlPXthcnJbaW5kZXhdfSBydWxlVHlwZT17cnVsZVR5cGV9IGVudGl0aWVzSW5mbz17ZW50aXRpZXNJbmZvfSAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvZGVFZGl0b3IsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUnVsZVR5cGUsIFJ1bGVTZXR0aW5nLCBQaXBlTGluZUVudGl0aWVzSW5mbyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlVHlwZTogUnVsZVR5cGU7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IFJ1bGVTZXR0aW5nKSA9PiB2b2lkO1xuICB2YWx1ZTogUnVsZVNldHRpbmc7XG4gIGVudGl0aWVzSW5mbzogUGlwZUxpbmVFbnRpdGllc0luZm87XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlU2V0dGluZ3NFZGl0b3I6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uQ2hhbmdlLCB2YWx1ZSwgcnVsZVR5cGUsIGVudGl0aWVzSW5mbyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAga2V5PXtydWxlVHlwZX1cbiAgICAgICAgb3B0aW9ucz17ZW50aXRpZXNJbmZvW3J1bGVUeXBlXX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYW4gb3B0aW9uXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlPy50eXBlID8/ICcnfVxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgLy8gc2V0IHRoZSBib2R5IHdpdGggZXhhbXBsZVxuICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS52YWx1ZTtcbiAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgW3R5cGVdOiBlbnRpdGllc0luZm8uZ2V0RXhhbXBsZShydWxlVHlwZSwgdHlwZSksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgaGVpZ2h0PXsnNTB2aCd9XG4gICAgICAgIHZhbHVlPXt2YWx1ZSA/IEpTT04uc3RyaW5naWZ5KHZhbHVlW3ZhbHVlLnR5cGVdLCBudWxsLCAnXFx0JykgOiAnJ31cbiAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXt0cnVlfVxuICAgICAgICByZWFkT25seT17ZmFsc2V9XG4gICAgICAgIGxhbmd1YWdlPVwianNvblwiXG4gICAgICAgIHNob3dNaW5pTWFwPXtmYWxzZX1cbiAgICAgICAgb25CbHVyPXsodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgdHlwZTogdmFsdWUudHlwZSxcbiAgICAgICAgICAgIFt2YWx1ZS50eXBlXTogYm9keSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZGF0YUZyYW1lRnJvbUpTT04sIGdldERpc3BsYXlQcm9jZXNzb3IsIEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIENvZGVFZGl0b3IsIFRhYmxlLCB1c2VTdHlsZXMsIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDaGFubmVsRnJhbWUsIFJ1bGUgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcnVsZTogUnVsZTtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVUZXN0OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZTxDaGFubmVsRnJhbWVbXT4oKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBvbkJsdXIgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgc2V0RGF0YSh0ZXh0KTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoYGFwaS9saXZlL3BpcGVsaW5lLWNvbnZlcnQtdGVzdGAsIHtcbiAgICAgICAgY2hhbm5lbFJ1bGVzOiBbcHJvcHMucnVsZV0sXG4gICAgICAgIGNoYW5uZWw6IHByb3BzLnJ1bGUucGF0dGVybixcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBkYXRhLmNoYW5uZWxGcmFtZXMgYXMgYW55W107XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgc2V0UmVzcG9uc2UoXG4gICAgICAgICAgICB0Lm1hcCgoZikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBmcmFtZSA9IGRhdGFGcmFtZUZyb21KU09OKGYuZnJhbWUpO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZyYW1lLmZpZWxkcykge1xuICAgICAgICAgICAgICAgIGZpZWxkLmRpc3BsYXkgPSBnZXREaXNwbGF5UHJvY2Vzc29yKHsgZmllbGQsIHRoZW1lOiBjb25maWcudGhlbWUyIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7IGNoYW5uZWw6IGYuY2hhbm5lbCwgZnJhbWUgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBzZXRSZXNwb25zZShlKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDb2RlRWRpdG9yXG4gICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgIHNob3dMaW5lTnVtYmVycz17dHJ1ZX1cbiAgICAgICAgcmVhZE9ubHk9e2ZhbHNlfVxuICAgICAgICBsYW5ndWFnZT1cImpzb25cIlxuICAgICAgICBzaG93TWluaU1hcD17ZmFsc2V9XG4gICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgLz5cblxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e3N0eWxlcy5tYXJnaW59PlxuICAgICAgICBUZXN0XG4gICAgICA8L0J1dHRvbj5cblxuICAgICAge3Jlc3BvbnNlPy5sZW5ndGggJiZcbiAgICAgICAgcmVzcG9uc2UubWFwKChyKSA9PiAoXG4gICAgICAgICAgPEZpZWxkIGtleT17ci5jaGFubmVsfSBsYWJlbD17ci5jaGFubmVsfT5cbiAgICAgICAgICAgIDxUYWJsZSBkYXRhPXtyLmZyYW1lfSB3aWR0aD17NzAwfSBoZWlnaHQ9e01hdGgubWluKDEwICogci5mcmFtZS5sZW5ndGggKyAxMCwgMTUwKX0gc2hvd1R5cGVJY29ucz48L1RhYmxlPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBtYXJnaW46IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IFBpcGVsaW5lTGlzdE9wdGlvbiwgUGlwZUxpbmVFbnRpdGllc0luZm8gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBpcGVMaW5lRW50aXRpZXMoKTogUHJvbWlzZTxQaXBlTGluZUVudGl0aWVzSW5mbz4ge1xuICByZXR1cm4gYXdhaXQgZ2V0QmFja2VuZFNydigpXG4gICAgLmdldChgYXBpL2xpdmUvcGlwZWxpbmUtZW50aXRpZXNgKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb252ZXJ0ZXI6IHRyYW5zZm9ybUxhYmVsKGRhdGEsICdjb252ZXJ0ZXJzJyksXG4gICAgICAgIGZyYW1lUHJvY2Vzc29yczogdHJhbnNmb3JtTGFiZWwoZGF0YSwgJ2ZyYW1lUHJvY2Vzc29ycycpLFxuICAgICAgICBmcmFtZU91dHB1dHM6IHRyYW5zZm9ybUxhYmVsKGRhdGEsICdmcmFtZU91dHB1dHMnKSxcbiAgICAgICAgZ2V0RXhhbXBsZTogKHJ1bGVUeXBlLCB0eXBlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFbYCR7cnVsZVR5cGV9c2BdPy5maWx0ZXIoKG9wdGlvbjogUGlwZWxpbmVMaXN0T3B0aW9uKSA9PiBvcHRpb24udHlwZSA9PT0gdHlwZSk/LlswXT8uWydleGFtcGxlJ107XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTGFiZWwoZGF0YTogYW55LCBrZXk6IGtleW9mIHR5cGVvZiBkYXRhKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKChkKSA9PiAoe1xuICAgICAgbGFiZWw6IGRba2V5XSxcbiAgICAgIHZhbHVlOiBkW2tleV0sXG4gICAgfSkpO1xuICB9XG4gIHJldHVybiBkYXRhW2tleV0ubWFwKCh0eXBlT2JqOiBQaXBlbGluZUxpc3RPcHRpb24pID0+ICh7XG4gICAgbGFiZWw6IHR5cGVPYmoudHlwZSxcbiAgICB2YWx1ZTogdHlwZU9iai50eXBlLFxuICB9KSk7XG59XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJnZXROYXZNb2RlbCIsInVzZU5hdk1vZGVsIiwiaWQiLCJuYXZJbmRleCIsInN0YXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpdmVDaGFubmVsU2NvcGUiLCJEYXRhU291cmNlUGlja2VyIiwiZ2V0QmFja2VuZFNydiIsIklucHV0IiwiRmllbGQiLCJCdXR0b24iLCJWYWx1ZVBpY2tlciIsIkhvcml6b250YWxHcm91cCIsInVzZUFwcE5vdGlmaWNhdGlvbiIsInBhdHRlcm5UeXBlcyIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsIkFkZE5ld1J1bGUiLCJvblJ1bGVBZGRlZCIsInBhdHRlcm5UeXBlIiwic2V0UGF0dGVyblR5cGUiLCJwYXR0ZXJuIiwic2V0UGF0dGVybiIsInBhdHRlcm5QcmVmaXgiLCJzZXRQYXR0ZXJuUHJlZml4IiwiZGF0YXNvdXJjZSIsInNldERhdGFzb3VyY2UiLCJub3RpZnlBcHAiLCJvblN1Ym1pdCIsImVycm9yIiwibGVuZ3RoIiwicG9zdCIsInNldHRpbmdzIiwiY29udmVydGVyIiwidHlwZSIsImZyYW1lT3V0cHV0cyIsInRoZW4iLCJ2IiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInJ1bGUiLCJjYXRjaCIsImUiLCJpc0hhbmRsZWQiLCJjdXJyZW50VGFyZ2V0IiwiZHMiLCJEYXRhU291cmNlIiwidWlkIiwidXNlRWZmZWN0IiwiUGFnZSIsIlBpcGVsaW5lVGFibGUiLCJQaXBlbGluZUFkbWluUGFnZSIsInJ1bGVzIiwic2V0UnVsZXMiLCJkZWZhdWx0UnVsZXMiLCJzZXREZWZhdWx0UnVsZXMiLCJuZXdSdWxlIiwic2V0TmV3UnVsZSIsIm5hdk1vZGVsIiwic2V0RXJyb3IiLCJsb2FkUnVsZXMiLCJnZXQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uU2VhcmNoUXVlcnlDaGFuZ2UiLCJ0YXJnZXQiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiciIsImNzcyIsIlRhZyIsInVzZVN0eWxlcyIsIkljb25CdXR0b24iLCJnZXREYXRhc291cmNlU3J2IiwiUnVsZU1vZGFsIiwicmVuZGVyT3V0cHV0VGFncyIsImtleSIsIm91dHB1dCIsInByb3BzIiwiaXNPcGVuIiwic2V0T3BlbiIsInNlbGVjdGVkUnVsZSIsInNldFNlbGVjdGVkUnVsZSIsImNsaWNrQ29sdW1uIiwic2V0Q2xpY2tDb2x1bW4iLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJvblJvd0NsaWNrIiwiZXZlbnQiLCJjb2x1bW4iLCJnZXRBdHRyaWJ1dGUiLCJzZWxlY3RSdWxlIiwib25SZW1vdmVSdWxlIiwiZGVsZXRlIiwiZmluYWxseSIsIm9uUnVsZUNoYW5nZWQiLCJyZW5kZXJQYXR0ZXJuIiwic3RhcnRzV2l0aCIsImlkeCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJnZXRJbnN0YW5jZVNldHRpbmdzIiwibmFtZSIsIndpZHRoIiwibWFwIiwicm93IiwiZnJhbWVQcm9jZXNzb3JzIiwicHJvY2Vzc29yIiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWUiLCJ1c2VNZW1vIiwiTW9kYWwiLCJUYWJDb250ZW50IiwiVGFic0JhciIsIlRhYiIsIlJ1bGVTZXR0aW5nc0FycmF5IiwiUnVsZVNldHRpbmdzRWRpdG9yIiwiUnVsZVRlc3QiLCJnZXRQaXBlTGluZUVudGl0aWVzIiwidGFicyIsImlzQ29udmVydGVyIiwiaXNUZXN0IiwiaWNvbiIsIm9uQ2xvc2UiLCJzZXRSdWxlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiZmluZCIsInQiLCJoYXNDaGFuZ2UiLCJzZXRDaGFuZ2UiLCJydWxlU2V0dGluZyIsInNldFJ1bGVTZXR0aW5nIiwiZW50aXRpZXNJbmZvIiwic2V0RW50aXRpZXNJbmZvIiwib25SdWxlU2V0dGluZ0NoYW5nZSIsIm9uU2F2ZSIsInB1dCIsInRhYiIsImluZGV4Iiwic2F2ZSIsIlNlbGVjdCIsIm9uQ2hhbmdlIiwicnVsZVR5cGUiLCJzZXRJbmRleCIsImFyciIsIm9uUnVsZUNoYW5nZSIsImNvcHkiLCJpbmRleEFyciIsImkiLCJwdXNoIiwiQ29kZUVkaXRvciIsImdldEV4YW1wbGUiLCJ0ZXh0IiwiYm9keSIsInBhcnNlIiwiZGF0YUZyYW1lRnJvbUpTT04iLCJnZXREaXNwbGF5UHJvY2Vzc29yIiwiY29uZmlnIiwiVGFibGUiLCJyZXNwb25zZSIsInNldFJlc3BvbnNlIiwic2V0RGF0YSIsIm9uQmx1ciIsIm9uQ2xpY2siLCJjaGFubmVsUnVsZXMiLCJjaGFubmVsIiwiY2hhbm5lbEZyYW1lcyIsImYiLCJmcmFtZSIsImZpZWxkIiwiZmllbGRzIiwiZGlzcGxheSIsInRoZW1lMiIsIm1hcmdpbiIsIk1hdGgiLCJtaW4iLCJ0cmFuc2Zvcm1MYWJlbCIsIm9wdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsImQiLCJ0eXBlT2JqIl0sInNvdXJjZVJvb3QiOiIifQ==