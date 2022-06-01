"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[6347],{

/***/ "./public/app/plugins/datasource/loki/components/LokiQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ LokiQueryField)
});

// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js
var prism = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/LocalStorageValueProvider/index.tsx + 1 modules
var LocalStorageValueProvider = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
// EXTERNAL MODULE: ./public/app/plugins/datasource/loki/language_utils.ts
var language_utils = __webpack_require__("./public/app/plugins/datasource/loki/language_utils.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/loki/components/LokiLabelBrowser.tsx
var _LoadingPlaceholder, _Label, _Label2, _Label3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Hard limit on labels to render



const MAX_LABEL_COUNT = 1000;
const MAX_VALUE_COUNT = 10000;
const MAX_AUTO_SELECT = 4;
const EMPTY_SELECTOR = '{}';
function buildSelector(labels) {
  const selectedLabels = [];

  for (const label of labels) {
    if (label.selected && label.values && label.values.length > 0) {
      const selectedValues = label.values.filter(value => value.selected).map(value => value.name);

      if (selectedValues.length > 1) {
        selectedLabels.push(`${label.name}=~"${selectedValues.map(language_utils/* escapeLabelValueInRegexSelector */.tU).join('|')}"`);
      } else if (selectedValues.length === 1) {
        selectedLabels.push(`${label.name}="${(0,language_utils/* escapeLabelValueInExactSelector */.U9)(selectedValues[0])}"`);
      }
    }
  }

  return ['{', selectedLabels.join(','), '}'].join('');
}
function facetLabels(labels, possibleLabels, lastFacetted) {
  return labels.map(label => {
    const possibleValues = possibleLabels[label.name];

    if (possibleValues) {
      let existingValues;

      if (label.name === lastFacetted && label.values) {
        // Facetting this label, show all values
        existingValues = label.values;
      } else {
        var _label$values;

        // Keep selection in other facets
        const selectedValues = new Set(((_label$values = label.values) === null || _label$values === void 0 ? void 0 : _label$values.filter(value => value.selected).map(value => value.name)) || []); // Values for this label have not been requested yet, let's use the facetted ones as the initial values

        existingValues = possibleValues.map(value => ({
          name: value,
          selected: selectedValues.has(value)
        }));
      }

      return Object.assign({}, label, {
        loading: false,
        values: existingValues,
        facets: existingValues.length
      });
    } // Label is facetted out, hide all values


    return Object.assign({}, label, {
      loading: false,
      hidden: !possibleValues,
      values: undefined,
      facets: 0
    });
  });
}

const getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    background-color: ${theme.colors.background.secondary};
    padding: ${theme.spacing(2)};
    width: 100%;
  `,
  list: emotion_css_esm.css`
    margin-top: ${theme.spacing(1)};
    display: flex;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: auto;
  `,
  section: emotion_css_esm.css`
    & + & {
      margin: ${theme.spacing(2, 0)};
    }
    position: relative;
  `,
  selector: emotion_css_esm.css`
    font-family: ${theme.typography.fontFamilyMonospace};
    margin-bottom: ${theme.spacing(1)};
  `,
  status: emotion_css_esm.css`
    padding: ${theme.spacing(0.5)};
    color: ${theme.colors.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* using absolute positioning because flex interferes with ellipsis */
    position: absolute;
    width: 50%;
    right: 0;
    text-align: right;
    transition: opacity 100ms linear;
    opacity: 0;
  `,
  statusShowing: emotion_css_esm.css`
    opacity: 1;
  `,
  error: emotion_css_esm.css`
    color: ${theme.colors.error.main};
  `,
  valueList: emotion_css_esm.css`
    margin-right: ${theme.spacing(1)};
  `,
  valueListWrapper: emotion_css_esm.css`
    border-left: 1px solid ${theme.colors.border.medium};
    margin: ${theme.spacing(1, 0)};
    padding: ${theme.spacing(1, 0, 1, 1)};
  `,
  valueListArea: emotion_css_esm.css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${theme.spacing(1)};
  `,
  valueTitle: emotion_css_esm.css`
    margin-left: -${theme.spacing(0.5)};
    margin-bottom: ${theme.spacing(1)};
  `,
  validationStatus: emotion_css_esm.css`
    padding: ${theme.spacing(0.5)};
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.colors.text.maxContrast};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
});

class UnthemedLokiLabelBrowser extends react.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      labels: [],
      searchTerm: '',
      status: 'Ready',
      error: '',
      validationStatus: ''
    });

    _defineProperty(this, "onChangeSearch", event => {
      this.setState({
        searchTerm: event.target.value
      });
    });

    _defineProperty(this, "onClickRunLogsQuery", () => {
      const selector = buildSelector(this.state.labels);
      this.props.onChange(selector);
    });

    _defineProperty(this, "onClickRunMetricsQuery", () => {
      const selector = buildSelector(this.state.labels);
      const query = `rate(${selector}[$__interval])`;
      this.props.onChange(query);
    });

    _defineProperty(this, "onClickClear", () => {
      this.setState(state => {
        const labels = state.labels.map(label => Object.assign({}, label, {
          values: undefined,
          selected: false,
          loading: false,
          hidden: false,
          facets: undefined
        }));
        return {
          labels,
          searchTerm: '',
          status: '',
          error: '',
          validationStatus: ''
        };
      });
      this.props.deleteLastUsedLabels();
    });

    _defineProperty(this, "onClickLabel", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label) {
        return;
      } // Toggle selected state


      const selected = !label.selected;
      let nextValue = {
        selected
      };

      if (label.values && !selected) {
        // Deselect all values if label was deselected
        const values = label.values.map(value => Object.assign({}, value, {
          selected: false
        }));
        nextValue = Object.assign({}, nextValue, {
          facets: 0,
          values
        });
      } // Resetting search to prevent empty results


      this.setState({
        searchTerm: ''
      });
      this.updateLabelState(name, nextValue, '', () => this.doFacettingForLabel(name));
    });

    _defineProperty(this, "onClickValue", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label || !label.values) {
        return;
      } // Resetting search to prevent empty results


      this.setState({
        searchTerm: ''
      }); // Toggling value for selected label, leaving other values intact

      const values = label.values.map(v => Object.assign({}, v, {
        selected: v.name === value ? !v.selected : v.selected
      }));
      this.updateLabelState(name, {
        values
      }, '', () => this.doFacetting(name));
    });

    _defineProperty(this, "onClickValidate", () => {
      const selector = buildSelector(this.state.labels);
      this.validateSelector(selector);
    });

    _defineProperty(this, "doFacetting", lastFacetted => {
      const selector = buildSelector(this.state.labels);

      if (selector === EMPTY_SELECTOR) {
        // Clear up facetting
        const labels = this.state.labels.map(label => {
          return Object.assign({}, label, {
            facets: 0,
            values: undefined,
            hidden: false
          });
        });
        this.setState({
          labels
        }, () => {
          // Get fresh set of values
          this.state.labels.forEach(label => label.selected && this.fetchValues(label.name, selector));
        });
      } else {
        // Do facetting
        this.fetchSeries(selector, lastFacetted);
      }
    });
  }

  updateLabelState(name, updatedFields) {
    let status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    let cb = arguments.length > 3 ? arguments[3] : undefined;
    this.setState(state => {
      const labels = state.labels.map(label => {
        if (label.name === name) {
          return Object.assign({}, label, updatedFields);
        }

        return label;
      }); // New status overrides errors

      const error = status ? '' : state.error;
      return {
        labels,
        status,
        error,
        validationStatus: ''
      };
    }, cb);
  }

  componentDidMount() {
    const {
      languageProvider,
      autoSelect = MAX_AUTO_SELECT,
      lastUsedLabels
    } = this.props;

    if (languageProvider) {
      const selectedLabels = lastUsedLabels;
      languageProvider.start().then(() => {
        let rawLabels = languageProvider.getLabelKeys();

        if (rawLabels.length > MAX_LABEL_COUNT) {
          const error = `Too many labels found (showing only ${MAX_LABEL_COUNT} of ${rawLabels.length})`;
          rawLabels = rawLabels.slice(0, MAX_LABEL_COUNT);
          this.setState({
            error
          });
        } // Auto-select all labels if label list is small enough


        const labels = rawLabels.map((label, i, arr) => ({
          name: label,
          selected: arr.length <= autoSelect && selectedLabels.length === 0 || selectedLabels.includes(label),
          loading: false
        })); // Pre-fetch values for selected labels

        this.setState({
          labels
        }, () => {
          this.state.labels.forEach(label => {
            if (label.selected) {
              this.fetchValues(label.name, EMPTY_SELECTOR);
            }
          });
        });
      });
    }
  }

  doFacettingForLabel(name) {
    const label = this.state.labels.find(l => l.name === name);

    if (!label) {
      return;
    }

    const selectedLabels = this.state.labels.filter(label => label.selected).map(label => label.name);
    this.props.storeLastUsedLabels(selectedLabels);

    if (label.selected) {
      // Refetch values for newly selected label...
      if (!label.values) {
        this.fetchValues(name, buildSelector(this.state.labels));
      }
    } else {
      // Only need to facet when deselecting labels
      this.doFacetting();
    }
  }

  async fetchValues(name, selector) {
    const {
      languageProvider
    } = this.props;
    this.updateLabelState(name, {
      loading: true
    }, `Fetching values for ${name}`);

    try {
      let rawValues = await languageProvider.getLabelValues(name); // If selector changed, clear loading state and discard result by returning early

      if (selector !== buildSelector(this.state.labels)) {
        this.updateLabelState(name, {
          loading: false
        }, '');
        return;
      }

      if (rawValues.length > MAX_VALUE_COUNT) {
        const error = `Too many values for ${name} (showing only ${MAX_VALUE_COUNT} of ${rawValues.length})`;
        rawValues = rawValues.slice(0, MAX_VALUE_COUNT);
        this.setState({
          error
        });
      }

      const values = rawValues.map(value => ({
        name: value
      }));
      this.updateLabelState(name, {
        values,
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  async fetchSeries(selector, lastFacetted) {
    const {
      languageProvider
    } = this.props;

    if (lastFacetted) {
      this.updateLabelState(lastFacetted, {
        loading: true
      }, `Facetting labels for ${selector}`);
    }

    try {
      const possibleLabels = await languageProvider.fetchSeriesLabels(selector, true); // If selector changed, clear loading state and discard result by returning early

      if (selector !== buildSelector(this.state.labels)) {
        if (lastFacetted) {
          this.updateLabelState(lastFacetted, {
            loading: false
          });
        }

        return;
      }

      if (Object.keys(possibleLabels).length === 0) {
        this.setState({
          error: `Empty results, no matching label for ${selector}`
        });
        return;
      }

      const labels = facetLabels(this.state.labels, possibleLabels, lastFacetted);
      this.setState({
        labels,
        error: ''
      });

      if (lastFacetted) {
        this.updateLabelState(lastFacetted, {
          loading: false
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async validateSelector(selector) {
    const {
      languageProvider
    } = this.props;
    this.setState({
      validationStatus: `Validating selector ${selector}`,
      error: ''
    });
    const streams = await languageProvider.fetchSeries(selector);
    this.setState({
      validationStatus: `Selector is valid (${streams.length} streams found)`
    });
  }

  render() {
    const {
      theme
    } = this.props;
    const {
      labels,
      searchTerm,
      status,
      error,
      validationStatus
    } = this.state;

    if (labels.length === 0) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
        text: "Loading labels..."
      }));
    }

    const styles = getStyles(theme);
    const selector = buildSelector(this.state.labels);
    const empty = selector === EMPTY_SELECTOR;
    let selectedLabels = labels.filter(label => label.selected && label.values);

    if (searchTerm) {
      selectedLabels = selectedLabels.map(label => {
        const searchResults = label.values.filter(value => {
          // Always return selected values
          if (value.selected) {
            value.highlightParts = undefined;
            return true;
          }

          const fuzzyMatchResult = (0,src.fuzzyMatch)(value.name.toLowerCase(), searchTerm.toLowerCase());

          if (fuzzyMatchResult.found) {
            value.highlightParts = fuzzyMatchResult.ranges;
            value.order = fuzzyMatchResult.distance;
            return true;
          } else {
            return false;
          }
        });
        return Object.assign({}, label, {
          values: (0,lodash.sortBy)(searchResults, value => value.selected ? -Infinity : value.order)
        });
      });
    } else {
      // Clear highlight parts when searchTerm is cleared
      selectedLabels = this.state.labels.filter(label => label.selected && label.values).map(label => Object.assign({}, label, {
        values: label !== null && label !== void 0 && label.values ? label.values.map(value => Object.assign({}, value, {
          highlightParts: undefined
        })) : []
      }));
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.wrapper,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.section,
        children: [_Label || (_Label = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Label, {
          description: "Which labels would you like to consider for your search?",
          children: "1. Select labels to search in"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.list,
          children: labels.map(label => /*#__PURE__*/(0,jsx_runtime.jsx)(src.BrowserLabel, {
            name: label.name,
            loading: label.loading,
            active: label.selected,
            hidden: label.hidden,
            facets: label.facets,
            onClick: this.onClickLabel
          }, label.name))
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.section,
        children: [_Label2 || (_Label2 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Label, {
          description: "Choose the label values that you would like to use for the query. Use the search field to find values across selected labels.",
          children: "2. Find values for the selected labels"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, {
            onChange: this.onChangeSearch,
            "aria-label": "Filter expression for values",
            value: searchTerm
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.valueListArea,
          children: selectedLabels.map(label => {
            var _label$values2, _label$values3;

            return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              role: "list",
              className: styles.valueListWrapper,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: styles.valueTitle,
                "aria-label": `Values for ${label.name}`,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.BrowserLabel, {
                  name: label.name,
                  loading: label.loading,
                  active: label.selected,
                  hidden: label.hidden //If no facets, we want to show number of all label values
                  ,
                  facets: label.facets || ((_label$values2 = label.values) === null || _label$values2 === void 0 ? void 0 : _label$values2.length),
                  onClick: this.onClickLabel
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FixedSizeList */.t7, {
                height: 200,
                itemCount: ((_label$values3 = label.values) === null || _label$values3 === void 0 ? void 0 : _label$values3.length) || 0,
                itemSize: 28,
                itemKey: i => label.values[i].name,
                width: 200,
                className: styles.valueList,
                children: _ref => {
                  var _label$values4;

                  let {
                    index,
                    style
                  } = _ref;
                  const value = (_label$values4 = label.values) === null || _label$values4 === void 0 ? void 0 : _label$values4[index];

                  if (!value) {
                    return null;
                  }

                  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    style: style,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.BrowserLabel, {
                      name: label.name,
                      value: value === null || value === void 0 ? void 0 : value.name,
                      active: value === null || value === void 0 ? void 0 : value.selected,
                      highlightParts: value === null || value === void 0 ? void 0 : value.highlightParts,
                      onClick: this.onClickValue,
                      searchTerm: searchTerm
                    })
                  });
                }
              })]
            }, label.name);
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.section,
        children: [_Label3 || (_Label3 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Label, {
          children: "3. Resulting selector"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          "aria-label": "selector",
          className: styles.selector,
          children: selector
        }), validationStatus && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.validationStatus,
          children: validationStatus
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(src.HorizontalGroup, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            "aria-label": "Use selector as logs button",
            disabled: empty,
            onClick: this.onClickRunLogsQuery,
            children: "Show logs"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            "aria-label": "Use selector as metrics button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickRunMetricsQuery,
            children: "Show logs rate"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            "aria-label": "Validate submit button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickValidate,
            children: "Validate selector"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            "aria-label": "Selector clear button",
            variant: "secondary",
            onClick: this.onClickClear,
            children: "Clear"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: (0,emotion_css_esm.cx)(styles.status, (status || error) && styles.statusShowing),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: error ? styles.error : '',
              children: error || status
            })
          })]
        })]
      })]
    });
  }

}
const LokiLabelBrowser = (0,src.withTheme2)(UnthemedLokiLabelBrowser);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/loki/components/LokiQueryField.tsx
function LokiQueryField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const LAST_USED_LABELS_KEY = 'grafana.datasources.loki.browser.labels';

function getChooserText(hasSyntax, hasLogLabels) {
  if (!hasSyntax) {
    return 'Loading labels...';
  }

  if (!hasLogLabels) {
    return '(No logs found)';
  }

  return 'Log browser';
}

function willApplySuggestion(suggestion, _ref) {
  let {
    typeaheadContext,
    typeaheadText
  } = _ref;

  // Modify suggestion based on context
  switch (typeaheadContext) {
    case 'context-labels':
      {
        const nextChar = src.DOMUtil.getNextCharacter();

        if (!nextChar || nextChar === '}' || nextChar === ',') {
          suggestion += '=';
        }

        break;
      }

    case 'context-label-values':
      {
        // Always add quotes and remove existing ones instead
        let suggestionModified = '';

        if (!typeaheadText.match(/^(!?=~?"|")/)) {
          suggestionModified = '"';
        }

        suggestionModified += (0,language_utils/* escapeLabelValueInSelector */.Hk)(suggestion, typeaheadText);

        if (src.DOMUtil.getNextCharacter() !== '"') {
          suggestionModified += '"';
        }

        suggestion = suggestionModified;
        break;
      }

    default:
  }

  return suggestion;
}

class LokiQueryField extends react.PureComponent {
  constructor(props) {
    super(props);

    LokiQueryField_defineProperty(this, "plugins", void 0);

    LokiQueryField_defineProperty(this, "_isMounted", false);

    LokiQueryField_defineProperty(this, "onChangeLabelBrowser", selector => {
      this.onChangeQuery(selector, true);
      this.setState({
        labelBrowserVisible: false
      });
    });

    LokiQueryField_defineProperty(this, "onChangeQuery", (value, override) => {
      // Send text change to parent
      const {
        query,
        onChange,
        onRunQuery
      } = this.props;

      if (onChange) {
        const nextQuery = Object.assign({}, query, {
          expr: value
        });
        onChange(nextQuery);

        if (override && onRunQuery) {
          onRunQuery();
        }
      }
    });

    LokiQueryField_defineProperty(this, "onClickChooserButton", () => {
      this.setState(state => ({
        labelBrowserVisible: !state.labelBrowserVisible
      }));
    });

    LokiQueryField_defineProperty(this, "onTypeahead", async typeahead => {
      const {
        datasource
      } = this.props;

      if (!datasource.languageProvider) {
        return {
          suggestions: []
        };
      }

      const lokiLanguageProvider = datasource.languageProvider;
      const {
        history
      } = this.props;
      const {
        prefix,
        text,
        value,
        wrapperClasses,
        labelKey
      } = typeahead;
      const result = await lokiLanguageProvider.provideCompletionItems({
        text,
        value,
        prefix,
        wrapperClasses,
        labelKey
      }, {
        history
      });
      return result;
    });

    this.state = {
      labelsLoaded: false,
      labelBrowserVisible: false
    };
    this.plugins = [(0,src.BracesPlugin)(), (0,src.SlatePrism)({
      onlyIn: node => node.object === 'block' && node.type === 'code_block',
      getSyntax: node => 'logql'
    }, Object.assign({}, prism.languages, {
      logql: this.props.datasource.languageProvider.getSyntax()
    }))];
  }

  async componentDidMount() {
    this._isMounted = true;
    await this.props.datasource.languageProvider.start();

    if (this._isMounted) {
      this.setState({
        labelsLoaded: true
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps) {
    const {
      range,
      datasource: {
        languageProvider
      }
    } = this.props;
    const refreshLabels = (0,language_utils/* shouldRefreshLabels */.rf)(range, prevProps.range); // We want to refresh labels when range changes (we round up intervals to a minute)

    if (refreshLabels) {
      languageProvider.fetchLabels();
    }
  }

  render() {
    const {
      ExtraFieldElement,
      query,
      datasource,
      placeholder = 'Enter a Loki query (run with Shift+Enter)'
    } = this.props;
    const {
      labelsLoaded,
      labelBrowserVisible
    } = this.state;
    const lokiLanguageProvider = datasource.languageProvider;
    const cleanText = datasource.languageProvider ? lokiLanguageProvider.cleanText : undefined;
    const hasLogLabels = lokiLanguageProvider.getLabelKeys().length > 0;
    const chooserText = getChooserText(labelsLoaded, hasLogLabels);
    const buttonDisabled = !(labelsLoaded && hasLogLabels);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(LocalStorageValueProvider/* LocalStorageValueProvider */.G, {
      storageKey: LAST_USED_LABELS_KEY,
      defaultValue: [],
      children: (lastUsedLabels, onLastUsedLabelsSave, onLastUsedLabelsDelete) => {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "gf-form-inline gf-form-inline--xs-view-flex-column flex-grow-1",
            "data-testid": this.props['data-testid'],
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
              className: "gf-form-label query-keyword pointer",
              onClick: this.onClickChooserButton,
              disabled: buttonDisabled,
              children: [chooserText, /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
                name: labelBrowserVisible ? 'angle-down' : 'angle-right'
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "gf-form gf-form--grow flex-shrink-1 min-width-15",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.QueryField, {
                additionalPlugins: this.plugins,
                cleanText: cleanText,
                query: query.expr,
                onTypeahead: this.onTypeahead,
                onWillApplySuggestion: willApplySuggestion,
                onChange: this.onChangeQuery,
                onBlur: this.props.onBlur,
                onRunQuery: this.props.onRunQuery,
                placeholder: placeholder,
                portalOrigin: "loki"
              })
            })]
          }), labelBrowserVisible && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(LokiLabelBrowser, {
              languageProvider: lokiLanguageProvider,
              onChange: this.onChangeLabelBrowser,
              lastUsedLabels: lastUsedLabels || [],
              storeLastUsedLabels: onLastUsedLabelsSave,
              deleteLastUsedLabels: onLastUsedLabelsDelete
            })
          }), ExtraFieldElement]
        });
      }
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/loki/language_utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hk": () => (/* binding */ escapeLabelValueInSelector),
/* harmony export */   "U9": () => (/* binding */ escapeLabelValueInExactSelector),
/* harmony export */   "rf": () => (/* binding */ shouldRefreshLabels),
/* harmony export */   "tU": () => (/* binding */ escapeLabelValueInRegexSelector)
/* harmony export */ });
/* unused harmony export isRegexSelector */
function roundMsToMin(milliseconds) {
  return roundSecToMin(milliseconds / 1000);
}

function roundSecToMin(seconds) {
  return Math.floor(seconds / 60);
}

function shouldRefreshLabels(range, prevRange) {
  if (range && prevRange) {
    const sameMinuteFrom = roundMsToMin(range.from.valueOf()) === roundMsToMin(prevRange.from.valueOf());
    const sameMinuteTo = roundMsToMin(range.to.valueOf()) === roundMsToMin(prevRange.to.valueOf()); // If both are same, don't need to refresh

    return !(sameMinuteFrom && sameMinuteTo);
  }

  return false;
} // Loki regular-expressions use the RE2 syntax (https://github.com/google/re2/wiki/Syntax),
// so every character that matches something in that list has to be escaped.
// the list of meta characters is: *+?()|\.[]{}^$
// we make a javascript regular expression that matches those characters:

const RE2_METACHARACTERS = /[*+?()|\\.\[\]{}^$]/g;

function escapeLokiRegexp(value) {
  return value.replace(RE2_METACHARACTERS, '\\$&');
} // based on the openmetrics-documentation, the 3 symbols we have to handle are:
// - \n ... the newline character
// - \  ... the backslash character
// - "  ... the double-quote character


function escapeLabelValueInExactSelector(labelValue) {
  return labelValue.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"');
}
function escapeLabelValueInRegexSelector(labelValue) {
  return escapeLabelValueInExactSelector(escapeLokiRegexp(labelValue));
}
function escapeLabelValueInSelector(labelValue, selector) {
  return isRegexSelector(selector) ? escapeLabelValueInRegexSelector(labelValue) : escapeLabelValueInExactSelector(labelValue);
}
function isRegexSelector(selector) {
  if (selector && (selector.includes('=~') || selector.includes('!~'))) {
    return true;
  }

  return false;
}

/***/ })

}]);