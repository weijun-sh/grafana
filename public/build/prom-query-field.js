"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["prom-query-field"],{

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var monaco_promql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLatest.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _getOverrideServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/getOverrideServices.ts");
/* harmony import */ var _monaco_completion_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const options = {
  codeLens: false,
  contextmenu: false,
  // we need `fixedOverflowWidgets` because otherwise in grafana-dashboards
  // the popup is clipped by the panel-visualizations.
  fixedOverflowWidgets: true,
  folding: false,
  fontSize: 14,
  lineDecorationsWidth: 8,
  // used as "padding-left"
  lineNumbers: 'off',
  minimap: {
    enabled: false
  },
  overviewRulerBorder: false,
  overviewRulerLanes: 0,
  padding: {
    // these numbers were picked so that visually this matches the previous version
    // of the query-editor the best
    top: 4,
    bottom: 5
  },
  renderLineHighlight: 'none',
  scrollbar: {
    vertical: 'hidden',
    verticalScrollbarSize: 8,
    // used as "padding-right"
    horizontal: 'hidden',
    horizontalScrollbarSize: 0
  },
  scrollBeyondLastLine: false,
  suggest: (0,_monaco_completion_provider__WEBPACK_IMPORTED_MODULE_6__.getSuggestOptions)(),
  suggestFontSize: 12,
  wordWrap: 'on'
}; // this number was chosen by testing various values. it might be necessary
// because of the width of the border, not sure.
//it needs to do 2 things:
// 1. when the editor is single-line, it should make the editor height be visually correct
// 2. when the editor is multi-line, the editor should not be "scrollable" (meaning,
//    you do a scroll-movement in the editor, and it will scroll the content by a couple pixels
//    up & down. this we want to avoid)

const EDITOR_HEIGHT_OFFSET = 2;
const PROMQL_LANG_ID = monaco_promql__WEBPACK_IMPORTED_MODULE_1__.promLanguageDefinition.id; // we must only run the promql-setup code once

let PROMQL_SETUP_STARTED = false;

function ensurePromQL(monaco) {
  if (PROMQL_SETUP_STARTED === false) {
    PROMQL_SETUP_STARTED = true;
    const {
      aliases,
      extensions,
      mimetypes,
      loader
    } = monaco_promql__WEBPACK_IMPORTED_MODULE_1__.promLanguageDefinition;
    monaco.languages.register({
      id: PROMQL_LANG_ID,
      aliases,
      extensions,
      mimetypes
    });
    loader().then(mod => {
      monaco.languages.setMonarchTokensProvider(PROMQL_LANG_ID, mod.language);
      monaco.languages.setLanguageConfiguration(PROMQL_LANG_ID, mod.languageConfiguration);
    });
  }
}

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border-radius: ${theme.shape.borderRadius()};
      border: 1px solid ${theme.components.input.borderColor};
    `
  };
};

const MonacoQueryField = props => {
  // we need only one instance of `overrideServices` during the lifetime of the react component
  const overrideServicesRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,_getOverrideServices__WEBPACK_IMPORTED_MODULE_5__.getOverrideServices)());
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const {
    languageProvider,
    history,
    onBlur,
    onRunQuery,
    initialValue
  } = props;
  const lpRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(languageProvider);
  const historyRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(history);
  const onRunQueryRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(onRunQuery);
  const onBlurRef = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(onBlur);
  const autocompleteDisposeFun = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const styles = getStyles(theme);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // when we unmount, we unregister the autocomplete-function, if it was registered
    return () => {
      var _autocompleteDisposeF;

      (_autocompleteDisposeF = autocompleteDisposeFun.current) === null || _autocompleteDisposeF === void 0 ? void 0 : _autocompleteDisposeF.call(autocompleteDisposeFun);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryField.container,
    className: styles.container // NOTE: we will be setting inline-style-width/height on this element
    ,
    ref: containerRef,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ReactMonacoEditor, {
      overrideServices: overrideServicesRef.current,
      options: options,
      language: "promql",
      value: initialValue,
      beforeMount: monaco => {
        ensurePromQL(monaco);
      },
      onMount: (editor, monaco) => {
        // we setup on-blur
        editor.onDidBlurEditorWidget(() => {
          onBlurRef.current(editor.getValue());
        }); // we construct a DataProvider object

        const getSeries = selector => lpRef.current.getSeries(selector);

        const getHistory = () => Promise.resolve(historyRef.current.map(h => h.query.expr).filter(expr => expr !== undefined));

        const getAllMetricNames = () => {
          const {
            metrics,
            metricsMetadata
          } = lpRef.current;
          const result = metrics.map(m => {
            var _metaItem$help, _metaItem$type;

            const metaItem = metricsMetadata === null || metricsMetadata === void 0 ? void 0 : metricsMetadata[m];
            return {
              name: m,
              help: (_metaItem$help = metaItem === null || metaItem === void 0 ? void 0 : metaItem.help) !== null && _metaItem$help !== void 0 ? _metaItem$help : '',
              type: (_metaItem$type = metaItem === null || metaItem === void 0 ? void 0 : metaItem.type) !== null && _metaItem$type !== void 0 ? _metaItem$type : ''
            };
          });
          return Promise.resolve(result);
        };

        const getAllLabelNames = () => Promise.resolve(lpRef.current.getLabelKeys());

        const getLabelValues = labelName => lpRef.current.getLabelValues(labelName);

        const dataProvider = {
          getSeries,
          getHistory,
          getAllMetricNames,
          getAllLabelNames,
          getLabelValues
        };
        const completionProvider = (0,_monaco_completion_provider__WEBPACK_IMPORTED_MODULE_6__.getCompletionProvider)(monaco, dataProvider); // completion-providers in monaco are not registered directly to editor-instances,
        // they are registered to languages. this makes it hard for us to have
        // separate completion-providers for every query-field-instance
        // (but we need that, because they might connect to different datasources).
        // the trick we do is, we wrap the callback in a "proxy",
        // and in the proxy, the first thing is, we check if we are called from
        // "our editor instance", and if not, we just return nothing. if yes,
        // we call the completion-provider.

        const filteringCompletionProvider = Object.assign({}, completionProvider, {
          provideCompletionItems: (model, position, context, token) => {
            var _editor$getModel;

            // if the model-id does not match, then this call is from a different editor-instance,
            // not "our instance", so return nothing
            if (((_editor$getModel = editor.getModel()) === null || _editor$getModel === void 0 ? void 0 : _editor$getModel.id) !== model.id) {
              return {
                suggestions: []
              };
            }

            return completionProvider.provideCompletionItems(model, position, context, token);
          }
        });
        const {
          dispose
        } = monaco.languages.registerCompletionItemProvider(PROMQL_LANG_ID, filteringCompletionProvider);
        autocompleteDisposeFun.current = dispose; // this code makes the editor resize itself so that the content fits
        // (it will grow taller when necessary)
        // FIXME: maybe move this functionality into CodeEditor, like:
        // <CodeEditor resizingMode="single-line"/>

        const updateElementHeight = () => {
          const containerDiv = containerRef.current;

          if (containerDiv !== null) {
            const pixelHeight = editor.getContentHeight();
            containerDiv.style.height = `${pixelHeight + EDITOR_HEIGHT_OFFSET}px`;
            containerDiv.style.width = '100%';
            const pixelWidth = containerDiv.clientWidth;
            editor.layout({
              width: pixelWidth,
              height: pixelHeight
            });
          }
        };

        editor.onDidContentSizeChange(updateElementHeight);
        updateElementHeight(); // handle: shift + enter
        // FIXME: maybe move this functionality into CodeEditor?

        editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
          onRunQueryRef.current(editor.getValue());
        });
        /* Something in this configuration of monaco doesn't bubble up [mod]+K, which the 
        command palette uses. Pass the event out of monaco manually
        */

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK, function () {
          __webpack_require__.g.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'k',
            metaKey: true
          }));
        });
      }
    })
  });
}; // we will lazy-load this module using React.lazy,
// and that only supports default-exports,
// so we have to default-export this, even if
// it is against the style-guidelines.


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoQueryField);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/getOverrideServices.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOverrideServices": () => (/* binding */ getOverrideServices)
/* harmony export */ });
// this thing here is a workaround in a way.
// what we want to achieve, is that when the autocomplete-window
// opens, the "second, extra popup" with the extra help,
// also opens automatically.
// but there is no API to achieve it.
// the way to do it is to implement the `storageService`
// interface, and provide our custom implementation,
// which will default to `true` for the correct string-key.
// unfortunately, while the typescript-interface exists,
// it is not exported from monaco-editor,
// so we cannot rely on typescript to make sure
// we do it right. all we can do is to manually
// lookup the interface, and make sure we code our code right.
// our code is a "best effort" approach,
// i am not 100% how the `scope` and `target` things work,
// but so far it seems to work ok.
// i would use an another approach, if there was one available.
function makeStorageService() {
  // we need to return an object that fulfills this interface:
  // https://github.com/microsoft/vscode/blob/ff1e16eebb93af79fd6d7af1356c4003a120c563/src/vs/platform/storage/common/storage.ts#L37
  // unfortunately it is not export from monaco-editor
  const strings = new Map(); // we want this to be true by default

  strings.set('expandSuggestionDocs', true.toString());
  return {
    // we do not implement the on* handlers
    onDidChangeValue: data => undefined,
    onDidChangeTarget: data => undefined,
    onWillSaveState: data => undefined,
    get: (key, scope, fallbackValue) => {
      var _strings$get;

      return (_strings$get = strings.get(key)) !== null && _strings$get !== void 0 ? _strings$get : fallbackValue;
    },
    getBoolean: (key, scope, fallbackValue) => {
      const val = strings.get(key);

      if (val !== undefined) {
        // the interface-docs say the value will be converted
        // to a boolean but do not specify how, so we improvise
        return val === 'true';
      } else {
        return fallbackValue;
      }
    },
    getNumber: (key, scope, fallbackValue) => {
      const val = strings.get(key);

      if (val !== undefined) {
        return parseInt(val, 10);
      } else {
        return fallbackValue;
      }
    },
    store: (key, value, scope, target) => {
      // the interface-docs say if the value is nullish, it should act as delete
      if (value === null || value === undefined) {
        strings.delete(key);
      } else {
        strings.set(key, value.toString());
      }
    },
    remove: (key, scope) => {
      strings.delete(key);
    },
    keys: (scope, target) => {
      return Array.from(strings.keys());
    },
    logStorage: () => {
      console.log('logStorage: not implemented');
    },
    migrate: () => {
      // we do not implement this
      return Promise.resolve(undefined);
    },
    isNew: scope => {
      // we create a new storage for every session, we do not persist it,
      // so we return `true`.
      return true;
    },
    flush: reason => {
      // we do not implement this
      return Promise.resolve(undefined);
    }
  };
}

let overrideServices = null;
function getOverrideServices() {
  // only have one instance of this for every query editor
  if (overrideServices === null) {
    overrideServices = {
      storageService: makeStorageService()
    };
  }

  return overrideServices;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/completions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCompletions": () => (/* binding */ getCompletions)
/* harmony export */ });
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
/* harmony import */ var _promql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts");


 // FIXME: we should not load this from the "outside", but we cannot do that while we have the "old" query-field too

// we order items like: history, functions, metrics
async function getAllMetricNamesCompletions(dataProvider) {
  const metrics = await dataProvider.getAllMetricNames();
  return metrics.map(metric => ({
    type: 'METRIC_NAME',
    label: metric.name,
    insertText: metric.name,
    detail: `${metric.name} : ${metric.type}`,
    documentation: metric.help
  }));
}

const FUNCTION_COMPLETIONS = _promql__WEBPACK_IMPORTED_MODULE_1__.FUNCTIONS.map(f => {
  var _f$insertText;

  return {
    type: 'FUNCTION',
    label: f.label,
    insertText: (_f$insertText = f.insertText) !== null && _f$insertText !== void 0 ? _f$insertText : '',
    // i don't know what to do when this is nullish. it should not be.
    detail: f.detail,
    documentation: f.documentation
  };
});

async function getAllFunctionsAndMetricNamesCompletions(dataProvider) {
  const metricNames = await getAllMetricNamesCompletions(dataProvider);
  return [...FUNCTION_COMPLETIONS, ...metricNames];
}

const DURATION_COMPLETIONS = ['$__interval', '$__range', '$__rate_interval', '1m', '5m', '10m', '30m', '1h', '1d'].map(text => ({
  type: 'DURATION',
  label: text,
  insertText: text
}));

async function getAllHistoryCompletions(dataProvider) {
  // function getAllHistoryCompletions(queryHistory: PromHistoryItem[]): Completion[] {
  // NOTE: the typescript types are wrong. historyItem.query.expr can be undefined
  const allHistory = await dataProvider.getHistory(); // FIXME: find a better history-limit

  return allHistory.slice(0, 10).map(expr => ({
    type: 'HISTORY',
    label: expr,
    insertText: expr
  }));
}

function makeSelector(metricName, labels) {
  const allLabels = [...labels]; // we transform the metricName to a label, if it exists

  if (metricName !== undefined) {
    allLabels.push({
      name: '__name__',
      value: metricName,
      op: '='
    });
  }

  const allLabelTexts = allLabels.map(label => `${label.name}${label.op}"${(0,_language_utils__WEBPACK_IMPORTED_MODULE_0__.escapeLabelValueInExactSelector)(label.value)}"`);
  return `{${allLabelTexts.join(',')}}`;
}

async function getLabelNames(metric, otherLabels, dataProvider) {
  if (metric === undefined && otherLabels.length === 0) {
    // if there is no filtering, we have to use a special endpoint
    return dataProvider.getAllLabelNames();
  } else {
    const selector = makeSelector(metric, otherLabels);
    const data = await dataProvider.getSeries(selector);
    const possibleLabelNames = Object.keys(data); // all names from prometheus

    const usedLabelNames = new Set(otherLabels.map(l => l.name)); // names used in the query

    return possibleLabelNames.filter(l => !usedLabelNames.has(l));
  }
}

async function getLabelNamesForCompletions(metric, suffix, triggerOnInsert, otherLabels, dataProvider) {
  const labelNames = await getLabelNames(metric, otherLabels, dataProvider);
  return labelNames.map(text => ({
    type: 'LABEL_NAME',
    label: text,
    insertText: `${text}${suffix}`,
    triggerOnInsert
  }));
}

async function getLabelNamesForSelectorCompletions(metric, otherLabels, dataProvider) {
  return getLabelNamesForCompletions(metric, '=', true, otherLabels, dataProvider);
}

async function getLabelNamesForByCompletions(metric, otherLabels, dataProvider) {
  return getLabelNamesForCompletions(metric, '', false, otherLabels, dataProvider);
}

async function getLabelValues(metric, labelName, otherLabels, dataProvider) {
  if (metric === undefined && otherLabels.length === 0) {
    // if there is no filtering, we have to use a special endpoint
    return dataProvider.getLabelValues(labelName);
  } else {
    var _data$labelName;

    const selector = makeSelector(metric, otherLabels);
    const data = await dataProvider.getSeries(selector);
    return (_data$labelName = data[labelName]) !== null && _data$labelName !== void 0 ? _data$labelName : [];
  }
}

async function getLabelValuesForMetricCompletions(metric, labelName, betweenQuotes, otherLabels, dataProvider) {
  const values = await getLabelValues(metric, labelName, otherLabels, dataProvider);
  return values.map(text => ({
    type: 'LABEL_VALUE',
    label: text,
    insertText: betweenQuotes ? text : `"${text}"` // FIXME: escaping strange characters?

  }));
}

async function getCompletions(situation, dataProvider) {
  switch (situation.type) {
    case 'IN_DURATION':
      return DURATION_COMPLETIONS;

    case 'IN_FUNCTION':
      return getAllFunctionsAndMetricNamesCompletions(dataProvider);

    case 'AT_ROOT':
      {
        return getAllFunctionsAndMetricNamesCompletions(dataProvider);
      }

    case 'EMPTY':
      {
        const metricNames = await getAllMetricNamesCompletions(dataProvider);
        const historyCompletions = await getAllHistoryCompletions(dataProvider);
        return [...historyCompletions, ...FUNCTION_COMPLETIONS, ...metricNames];
      }

    case 'IN_LABEL_SELECTOR_NO_LABEL_NAME':
      return getLabelNamesForSelectorCompletions(situation.metricName, situation.otherLabels, dataProvider);

    case 'IN_GROUPING':
      return getLabelNamesForByCompletions(situation.metricName, situation.otherLabels, dataProvider);

    case 'IN_LABEL_SELECTOR_WITH_LABEL_NAME':
      return getLabelValuesForMetricCompletions(situation.metricName, situation.labelName, situation.betweenQuotes, situation.otherLabels, dataProvider);

    default:
      throw new _util__WEBPACK_IMPORTED_MODULE_2__.NeverCaseError(situation);
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCompletionProvider": () => (/* binding */ getCompletionProvider),
/* harmony export */   "getSuggestOptions": () => (/* binding */ getSuggestOptions)
/* harmony export */ });
/* harmony import */ var _completions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/completions.ts");
/* harmony import */ var _situation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/situation.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts");



function getSuggestOptions() {
  return {
    // monaco-editor sometimes provides suggestions automatically, i am not
    // sure based on what, seems to be by analyzing the words already
    // written.
    // to try it out:
    // - enter `go_goroutines{job~`
    // - have the cursor at the end of the string
    // - press ctrl-enter
    // - you will get two suggestions
    // those were not provided by grafana, they are offered automatically.
    // i want to remove those. the only way i found is:
    // - every suggestion-item has a `kind` attribute,
    //   that controls the icon to the left of the suggestion.
    // - items auto-generated by monaco have `kind` set to `text`.
    // - we make sure grafana-provided suggestions do not have `kind` set to `text`.
    // - and then we tell monaco not to show suggestions of kind `text`
    showWords: false
  };
}

function getMonacoCompletionItemKind(type, monaco) {
  switch (type) {
    case 'DURATION':
      return monaco.languages.CompletionItemKind.Unit;

    case 'FUNCTION':
      return monaco.languages.CompletionItemKind.Variable;

    case 'HISTORY':
      return monaco.languages.CompletionItemKind.Snippet;

    case 'LABEL_NAME':
      return monaco.languages.CompletionItemKind.Enum;

    case 'LABEL_VALUE':
      return monaco.languages.CompletionItemKind.EnumMember;

    case 'METRIC_NAME':
      return monaco.languages.CompletionItemKind.Constructor;

    default:
      throw new _util__WEBPACK_IMPORTED_MODULE_2__.NeverCaseError(type);
  }
}

function getCompletionProvider(monaco, dataProvider) {
  const provideCompletionItems = (model, position) => {
    const word = model.getWordAtPosition(position);
    const range = word != null ? monaco.Range.lift({
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: word.startColumn,
      endColumn: word.endColumn
    }) : monaco.Range.fromPositions(position); // documentation says `position` will be "adjusted" in `getOffsetAt`
    // i don't know what that means, to be sure i clone it

    const positionClone = {
      column: position.column,
      lineNumber: position.lineNumber
    };
    const offset = model.getOffsetAt(positionClone);
    const situation = (0,_situation__WEBPACK_IMPORTED_MODULE_1__.getSituation)(model.getValue(), offset);
    const completionsPromise = situation != null ? (0,_completions__WEBPACK_IMPORTED_MODULE_0__.getCompletions)(situation, dataProvider) : Promise.resolve([]);
    return completionsPromise.then(items => {
      // monaco by-default alphabetically orders the items.
      // to stop it, we use a number-as-string sortkey,
      // so that monaco keeps the order we use
      const maxIndexDigits = items.length.toString().length;
      const suggestions = items.map((item, index) => ({
        kind: getMonacoCompletionItemKind(item.type, monaco),
        label: item.label,
        insertText: item.insertText,
        detail: item.detail,
        documentation: item.documentation,
        sortText: index.toString().padStart(maxIndexDigits, '0'),
        // to force the order we have
        range,
        command: item.triggerOnInsert ? {
          id: 'editor.action.triggerSuggest',
          title: ''
        } : undefined
      }));
      return {
        suggestions
      };
    });
  };

  return {
    triggerCharacters: ['{', ',', '[', '(', '=', '~', ' ', '"'],
    provideCompletionItems
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/situation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSituation": () => (/* binding */ getSituation)
/* harmony export */ });
/* harmony import */ var lezer_promql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts");



function move(node, direction) {
  switch (direction) {
    case 'parent':
      return node.parent;

    case 'firstChild':
      return node.firstChild;

    case 'lastChild':
      return node.lastChild;

    case 'nextSibling':
      return node.nextSibling;

    default:
      throw new _util__WEBPACK_IMPORTED_MODULE_1__.NeverCaseError(direction);
  }
}

function walk(node, path) {
  let current = node;

  for (const [direction, expectedType] of path) {
    current = move(current, direction);

    if (current === null) {
      // we could not move in the direction, we stop
      return null;
    }

    if (current.type.name !== expectedType) {
      // the reached node has wrong type, we stop
      return null;
    }
  }

  return current;
}

function getNodeText(node, text) {
  return text.slice(node.from, node.to);
}

function parsePromQLStringLiteral(text) {
  // if it is a string-literal, it is inside quotes of some kind
  const inside = text.slice(1, text.length - 1); // FIXME: support https://prometheus.io/docs/prometheus/latest/querying/basics/#string-literals
  // FIXME: maybe check other promql code, if all is supported or not
  // for now we do only some very simple un-escaping
  // we start with double-quotes

  if (text.startsWith('"') && text.endsWith('"')) {
    // NOTE: this is not 100% perfect, we only unescape the double-quote,
    // there might be other characters too
    return inside.replace(/\\"/, '"');
  } // then single-quote


  if (text.startsWith("'") && text.endsWith("'")) {
    // NOTE: this is not 100% perfect, we only unescape the single-quote,
    // there might be other characters too
    return inside.replace(/\\'/, "'");
  } // then backticks


  if (text.startsWith('`') && text.endsWith('`')) {
    return inside;
  }

  throw new Error('FIXME: invalid string literal');
}

function isPathMatch(resolverPath, cursorPath) {
  return resolverPath.every((item, index) => item === cursorPath[index]);
}

const ERROR_NODE_NAME = '⚠'; // this is used as error-name

const RESOLVERS = [{
  path: ['LabelMatchers', 'VectorSelector'],
  fun: resolveLabelKeysWithEquals
}, {
  path: ['PromQL'],
  fun: resolveTopLevel
}, {
  path: ['FunctionCallBody'],
  fun: resolveInFunction
}, {
  path: ['StringLiteral', 'LabelMatcher'],
  fun: resolveLabelMatcher
}, {
  path: [ERROR_NODE_NAME, 'LabelMatcher'],
  fun: resolveLabelMatcher
}, {
  path: [ERROR_NODE_NAME, 'MatrixSelector'],
  fun: resolveDurations
}, {
  path: ['GroupingLabels'],
  fun: resolveLabelsForGrouping
}];
const LABEL_OP_MAP = new Map([['EqlSingle', '='], ['EqlRegex', '=~'], ['Neq', '!='], ['NeqRegex', '!~']]);

function getLabelOp(opNode) {
  var _LABEL_OP_MAP$get;

  const opChild = opNode.firstChild;

  if (opChild === null) {
    return null;
  }

  return (_LABEL_OP_MAP$get = LABEL_OP_MAP.get(opChild.name)) !== null && _LABEL_OP_MAP$get !== void 0 ? _LABEL_OP_MAP$get : null;
}

function getLabel(labelMatcherNode, text) {
  if (labelMatcherNode.type.name !== 'LabelMatcher') {
    return null;
  }

  const nameNode = walk(labelMatcherNode, [['firstChild', 'LabelName']]);

  if (nameNode === null) {
    return null;
  }

  const opNode = walk(nameNode, [['nextSibling', 'MatchOp']]);

  if (opNode === null) {
    return null;
  }

  const op = getLabelOp(opNode);

  if (op === null) {
    return null;
  }

  const valueNode = walk(labelMatcherNode, [['lastChild', 'StringLiteral']]);

  if (valueNode === null) {
    return null;
  }

  const name = getNodeText(nameNode, text);
  const value = parsePromQLStringLiteral(getNodeText(valueNode, text));
  return {
    name,
    value,
    op
  };
}

function getLabels(labelMatchersNode, text) {
  if (labelMatchersNode.type.name !== 'LabelMatchers') {
    return [];
  }

  let listNode = walk(labelMatchersNode, [['firstChild', 'LabelMatchList']]);
  const labels = [];

  while (listNode !== null) {
    const matcherNode = walk(listNode, [['lastChild', 'LabelMatcher']]);

    if (matcherNode === null) {
      // unexpected, we stop
      return [];
    }

    const label = getLabel(matcherNode, text);

    if (label !== null) {
      labels.push(label);
    } // there might be more labels


    listNode = walk(listNode, [['firstChild', 'LabelMatchList']]);
  } // our labels-list is last-first, so we reverse it


  labels.reverse();
  return labels;
}

function getNodeChildren(node) {
  let child = node.firstChild;
  const children = [];

  while (child !== null) {
    children.push(child);
    child = child.nextSibling;
  }

  return children;
}

function getNodeInSubtree(node, typeName) {
  // first we try the current node
  if (node.type.name === typeName) {
    return node;
  } // then we try the children


  const children = getNodeChildren(node);

  for (const child of children) {
    const n = getNodeInSubtree(child, typeName);

    if (n !== null) {
      return n;
    }
  }

  return null;
}

function resolveLabelsForGrouping(node, text, pos) {
  const aggrExpNode = walk(node, [['parent', 'AggregateModifier'], ['parent', 'AggregateExpr']]);

  if (aggrExpNode === null) {
    return null;
  }

  const bodyNode = aggrExpNode.getChild('FunctionCallBody');

  if (bodyNode === null) {
    return null;
  }

  const metricIdNode = getNodeInSubtree(bodyNode, 'MetricIdentifier');

  if (metricIdNode === null) {
    return null;
  }

  const idNode = walk(metricIdNode, [['firstChild', 'Identifier']]);

  if (idNode === null) {
    return null;
  }

  const metricName = getNodeText(idNode, text);
  return {
    type: 'IN_GROUPING',
    metricName,
    otherLabels: []
  };
}

function resolveLabelMatcher(node, text, pos) {
  // we can arrive here in two situation. `node` is either:
  // - a StringNode (like in `{job="^"}`)
  // - or an error node (like in `{job=^}`)
  const inStringNode = !node.type.isError;
  const parent = walk(node, [['parent', 'LabelMatcher']]);

  if (parent === null) {
    return null;
  }

  const labelNameNode = walk(parent, [['firstChild', 'LabelName']]);

  if (labelNameNode === null) {
    return null;
  }

  const labelName = getNodeText(labelNameNode, text); // now we need to go up, to the parent of LabelMatcher,
  // there can be one or many `LabelMatchList` parents, we have
  // to go through all of them

  const firstListNode = walk(parent, [['parent', 'LabelMatchList']]);

  if (firstListNode === null) {
    return null;
  }

  let listNode = firstListNode; // we keep going through the parent-nodes
  // as long as they are LabelMatchList.
  // as soon as we reawch LabelMatchers, we stop

  let labelMatchersNode = null;

  while (labelMatchersNode === null) {
    const p = listNode.parent;

    if (p === null) {
      return null;
    }

    const {
      name
    } = p.type;

    switch (name) {
      case 'LabelMatchList':
        //we keep looping
        listNode = p;
        continue;

      case 'LabelMatchers':
        // we reached the end, we can stop the loop
        labelMatchersNode = p;
        continue;

      default:
        // we reached some other node, we stop
        return null;
    }
  } // now we need to find the other names


  const allLabels = getLabels(labelMatchersNode, text); // we need to remove "our" label from all-labels, if it is in there

  const otherLabels = allLabels.filter(label => label.name !== labelName);
  const metricNameNode = walk(labelMatchersNode, [['parent', 'VectorSelector'], ['firstChild', 'MetricIdentifier'], ['firstChild', 'Identifier']]);

  if (metricNameNode === null) {
    // we are probably in a situation without a metric name
    return {
      type: 'IN_LABEL_SELECTOR_WITH_LABEL_NAME',
      labelName,
      betweenQuotes: inStringNode,
      otherLabels
    };
  }

  const metricName = getNodeText(metricNameNode, text);
  return {
    type: 'IN_LABEL_SELECTOR_WITH_LABEL_NAME',
    metricName,
    labelName,
    betweenQuotes: inStringNode,
    otherLabels
  };
}

function resolveTopLevel(node, text, pos) {
  return {
    type: 'AT_ROOT'
  };
}

function resolveInFunction(node, text, pos) {
  return {
    type: 'IN_FUNCTION'
  };
}

function resolveDurations(node, text, pos) {
  return {
    type: 'IN_DURATION'
  };
}

function subTreeHasError(node) {
  return getNodeInSubtree(node, ERROR_NODE_NAME) !== null;
}

function resolveLabelKeysWithEquals(node, text, pos) {
  // for example `something{^}`
  // there are some false positives that can end up in this situation, that we want
  // to eliminate:
  // `something{a~^}` (if this subtree contains any error-node, we stop)
  if (subTreeHasError(node)) {
    return null;
  } // next false positive:
  // `something{a="1"^}`


  const child = walk(node, [['firstChild', 'LabelMatchList']]);

  if (child !== null) {
    // means the label-matching part contains at least one label already.
    //
    // in this case, we will need to have a `,` character at the end,
    // to be able to suggest adding the next label.
    // the area between the end-of-the-child-node and the cursor-pos
    // must contain a `,` in this case.
    const textToCheck = text.slice(child.to, pos);

    if (!textToCheck.includes(',')) {
      return null;
    }
  }

  const metricNameNode = walk(node, [['parent', 'VectorSelector'], ['firstChild', 'MetricIdentifier'], ['firstChild', 'Identifier']]);
  const otherLabels = getLabels(node, text);

  if (metricNameNode === null) {
    // we are probably in a situation without a metric name.
    return {
      type: 'IN_LABEL_SELECTOR_NO_LABEL_NAME',
      otherLabels
    };
  }

  const metricName = getNodeText(metricNameNode, text);
  return {
    type: 'IN_LABEL_SELECTOR_NO_LABEL_NAME',
    metricName,
    otherLabels
  };
} // we find the first error-node in the tree that is at the cursor-position.
// NOTE: this might be too slow, might need to optimize it
// (ideas: we do not need to go into every subtree, based on from/to)
// also, only go to places that are in the sub-tree of the node found
// by default by lezer. problem is, `next()` will go upward too,
// and we do not want to go higher than our node


function getErrorNode(tree, pos) {
  const cur = tree.cursor(pos);

  while (true) {
    if (cur.from === pos && cur.to === pos) {
      const {
        node
      } = cur;

      if (node.type.isError) {
        return node;
      }
    }

    if (!cur.next()) {
      break;
    }
  }

  return null;
}

function getSituation(text, pos) {
  // there is a special-case when we are at the start of writing text,
  // so we handle that case first
  if (text === '') {
    return {
      type: 'EMPTY'
    };
  }
  /*
  PromQL
  Expr
  VectorSelector
  LabelMatchers
  */


  const tree = lezer_promql__WEBPACK_IMPORTED_MODULE_0__.parser.parse(text); // if the tree contains error, it is very probable that
  // our node is one of those error-nodes.
  // also, if there are errors, the node lezer finds us,
  // might not be the best node.
  // so first we check if there is an error-node at the cursor-position

  const maybeErrorNode = getErrorNode(tree, pos);
  const cur = maybeErrorNode != null ? maybeErrorNode.cursor : tree.cursor(pos);
  const currentNode = cur.node;
  const names = [cur.name];

  while (cur.parent()) {
    names.push(cur.name);
  }

  for (let resolver of RESOLVERS) {
    // i do not use a foreach because i want to stop as soon
    // as i find something
    if (isPathMatch(resolver.path, names)) {
      return resolver.fun(currentNode, text, pos);
    }
  }

  return null;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NeverCaseError": () => (/* binding */ NeverCaseError)
/* harmony export */ });
// this helper class is used to make typescript warn you when you forget
// a case-block in a switch statement.
// example code that triggers the typescript-error:
//
// const x:'A'|'B'|'C' = 'A';
//
// switch(x) {
//   case 'A':
//     // something
//   case 'B':
//     // something
//   default:
//     throw new NeverCaseError(x);
// }
//
//
// typescript will show an error in this case,
// when you add the missing `case 'C'` code,
// the problem will be fixed.
class NeverCaseError extends Error {
  constructor(value) {
    super('should never happen');
  }

}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLatest.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

var useLatest = function (value) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
    ref.current = value;
    return ref;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatest);


/***/ }),

/***/ "./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promLanguageDefinition": () => (/* reexport safe */ _promql_promql_contribution__WEBPACK_IMPORTED_MODULE_0__.promLanguageDefinition)
/* harmony export */ });
/* harmony import */ var _promql_promql_contribution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.contribution.js");
// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.




/***/ }),

/***/ "./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.contribution.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "promLanguageDefinition": () => (/* binding */ promLanguageDefinition)
/* harmony export */ });
// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// noinspection JSUnusedGlobalSymbols
var promLanguageDefinition = {
    id: 'promql',
    extensions: ['.promql'],
    aliases: ['Prometheus', 'prometheus', 'prom', 'Prom', 'promql', 'Promql', 'promQL', 'PromQL'],
    mimetypes: [],
    loader: function () { return __webpack_require__.e(/* import() */ "_yarn_cache_monaco-promql-npm-1_7_2-7f61733ebe-54061d5c1c_zip_node_modules_monaco-promql_prom-c4d0dc").then(__webpack_require__.bind(__webpack_require__, "./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.js")); } // eslint-disable-line @typescript-eslint/explicit-function-return-type
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbS1xdWVyeS1maWVsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTs7QUFFQSxNQUFNWSxPQUFnRSxHQUFHO0FBQ3ZFQyxFQUFBQSxRQUFRLEVBQUUsS0FENkQ7QUFFdkVDLEVBQUFBLFdBQVcsRUFBRSxLQUYwRDtBQUd2RTtBQUNBO0FBQ0FDLEVBQUFBLG9CQUFvQixFQUFFLElBTGlEO0FBTXZFQyxFQUFBQSxPQUFPLEVBQUUsS0FOOEQ7QUFPdkVDLEVBQUFBLFFBQVEsRUFBRSxFQVA2RDtBQVF2RUMsRUFBQUEsb0JBQW9CLEVBQUUsQ0FSaUQ7QUFROUM7QUFDekJDLEVBQUFBLFdBQVcsRUFBRSxLQVQwRDtBQVV2RUMsRUFBQUEsT0FBTyxFQUFFO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBVjhEO0FBV3ZFQyxFQUFBQSxtQkFBbUIsRUFBRSxLQVhrRDtBQVl2RUMsRUFBQUEsa0JBQWtCLEVBQUUsQ0FabUQ7QUFhdkVDLEVBQUFBLE9BQU8sRUFBRTtBQUNQO0FBQ0E7QUFDQUMsSUFBQUEsR0FBRyxFQUFFLENBSEU7QUFJUEMsSUFBQUEsTUFBTSxFQUFFO0FBSkQsR0FiOEQ7QUFtQnZFQyxFQUFBQSxtQkFBbUIsRUFBRSxNQW5Ca0Q7QUFvQnZFQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEMsSUFBQUEsUUFBUSxFQUFFLFFBREQ7QUFFVEMsSUFBQUEscUJBQXFCLEVBQUUsQ0FGZDtBQUVpQjtBQUMxQkMsSUFBQUEsVUFBVSxFQUFFLFFBSEg7QUFJVEMsSUFBQUEsdUJBQXVCLEVBQUU7QUFKaEIsR0FwQjREO0FBMEJ2RUMsRUFBQUEsb0JBQW9CLEVBQUUsS0ExQmlEO0FBMkJ2RUMsRUFBQUEsT0FBTyxFQUFFdkIsOEVBQWlCLEVBM0I2QztBQTRCdkV3QixFQUFBQSxlQUFlLEVBQUUsRUE1QnNEO0FBNkJ2RUMsRUFBQUEsUUFBUSxFQUFFO0FBN0I2RCxDQUF6RSxFQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxDQUE3QjtBQUVBLE1BQU1DLGNBQWMsR0FBR3JDLG9FQUF2QixFQUVBOztBQUNBLElBQUl1QyxvQkFBb0IsR0FBRyxLQUEzQjs7QUFFQSxTQUFTQyxZQUFULENBQXNCQyxNQUF0QixFQUFzQztBQUNwQyxNQUFJRixvQkFBb0IsS0FBSyxLQUE3QixFQUFvQztBQUNsQ0EsSUFBQUEsb0JBQW9CLEdBQUcsSUFBdkI7QUFDQSxVQUFNO0FBQUVHLE1BQUFBLE9BQUY7QUFBV0MsTUFBQUEsVUFBWDtBQUF1QkMsTUFBQUEsU0FBdkI7QUFBa0NDLE1BQUFBO0FBQWxDLFFBQTZDN0MsaUVBQW5EO0FBQ0F5QyxJQUFBQSxNQUFNLENBQUNLLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCO0FBQUVULE1BQUFBLEVBQUUsRUFBRUQsY0FBTjtBQUFzQkssTUFBQUEsT0FBdEI7QUFBK0JDLE1BQUFBLFVBQS9CO0FBQTJDQyxNQUFBQTtBQUEzQyxLQUExQjtBQUVBQyxJQUFBQSxNQUFNLEdBQUdHLElBQVQsQ0FBZUMsR0FBRCxJQUFTO0FBQ3JCUixNQUFBQSxNQUFNLENBQUNLLFNBQVAsQ0FBaUJJLHdCQUFqQixDQUEwQ2IsY0FBMUMsRUFBMERZLEdBQUcsQ0FBQ0UsUUFBOUQ7QUFDQVYsTUFBQUEsTUFBTSxDQUFDSyxTQUFQLENBQWlCTSx3QkFBakIsQ0FBMENmLGNBQTFDLEVBQTBEWSxHQUFHLENBQUNJLHFCQUE5RDtBQUNELEtBSEQ7QUFJRDtBQUNGOztBQUVELE1BQU1DLFNBQVMsR0FBSUMsS0FBRCxJQUEwQjtBQUMxQyxTQUFPO0FBQ0xDLElBQUFBLFNBQVMsRUFBRXpELDZDQUFJO0FBQ25CLHVCQUF1QndELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxZQUFaLEVBQTJCO0FBQ2xELDBCQUEwQkgsS0FBSyxDQUFDSSxVQUFOLENBQWlCQyxLQUFqQixDQUF1QkMsV0FBWTtBQUM3RDtBQUpTLEdBQVA7QUFNRCxDQVBEOztBQVNBLE1BQU1DLGdCQUFnQixHQUFJQyxLQUFELElBQWtCO0FBQ3pDO0FBQ0EsUUFBTUMsbUJBQW1CLEdBQUc5RCw2Q0FBTSxDQUFDTSx5RUFBbUIsRUFBcEIsQ0FBbEM7QUFDQSxRQUFNeUQsWUFBWSxHQUFHL0QsNkNBQU0sQ0FBaUIsSUFBakIsQ0FBM0I7QUFDQSxRQUFNO0FBQUVnRSxJQUFBQSxnQkFBRjtBQUFvQkMsSUFBQUEsT0FBcEI7QUFBNkJDLElBQUFBLE1BQTdCO0FBQXFDQyxJQUFBQSxVQUFyQztBQUFpREMsSUFBQUE7QUFBakQsTUFBa0VQLEtBQXhFO0FBRUEsUUFBTVEsS0FBSyxHQUFHbkUscURBQVMsQ0FBQzhELGdCQUFELENBQXZCO0FBQ0EsUUFBTU0sVUFBVSxHQUFHcEUscURBQVMsQ0FBQytELE9BQUQsQ0FBNUI7QUFDQSxRQUFNTSxhQUFhLEdBQUdyRSxxREFBUyxDQUFDaUUsVUFBRCxDQUEvQjtBQUNBLFFBQU1LLFNBQVMsR0FBR3RFLHFEQUFTLENBQUNnRSxNQUFELENBQTNCO0FBRUEsUUFBTU8sc0JBQXNCLEdBQUd6RSw2Q0FBTSxDQUFzQixJQUF0QixDQUFyQztBQUVBLFFBQU1xRCxLQUFLLEdBQUdqRCxzREFBUyxFQUF2QjtBQUNBLFFBQU1zRSxNQUFNLEdBQUd0QixTQUFTLENBQUNDLEtBQUQsQ0FBeEI7QUFFQXBELEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0EsV0FBTyxNQUFNO0FBQUE7O0FBQ1gsK0JBQUF3RSxzQkFBc0IsQ0FBQ0UsT0FBdkIscUZBQUFGLHNCQUFzQjtBQUN2QixLQUZEO0FBR0QsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLHNCQUNFO0FBQ0Usa0JBQVl0RSw2RkFEZDtBQUVFLGFBQVMsRUFBRXVFLE1BQU0sQ0FBQ3BCLFNBRnBCLENBR0U7QUFIRjtBQUlFLE9BQUcsRUFBRVMsWUFKUDtBQUFBLDJCQU1FLHVEQUFDLDBEQUFEO0FBQ0Usc0JBQWdCLEVBQUVELG1CQUFtQixDQUFDYSxPQUR4QztBQUVFLGFBQU8sRUFBRWxFLE9BRlg7QUFHRSxjQUFRLEVBQUMsUUFIWDtBQUlFLFdBQUssRUFBRTJELFlBSlQ7QUFLRSxpQkFBVyxFQUFHN0IsTUFBRCxJQUFZO0FBQ3ZCRCxRQUFBQSxZQUFZLENBQUNDLE1BQUQsQ0FBWjtBQUNELE9BUEg7QUFRRSxhQUFPLEVBQUUsQ0FBQ3NDLE1BQUQsRUFBU3RDLE1BQVQsS0FBb0I7QUFDM0I7QUFDQXNDLFFBQUFBLE1BQU0sQ0FBQ0MscUJBQVAsQ0FBNkIsTUFBTTtBQUNqQ04sVUFBQUEsU0FBUyxDQUFDRyxPQUFWLENBQWtCRSxNQUFNLENBQUNFLFFBQVAsRUFBbEI7QUFDRCxTQUZELEVBRjJCLENBTTNCOztBQUNBLGNBQU1DLFNBQVMsR0FBSUMsUUFBRCxJQUFzQlosS0FBSyxDQUFDTSxPQUFOLENBQWNLLFNBQWQsQ0FBd0JDLFFBQXhCLENBQXhDOztBQUVBLGNBQU1DLFVBQVUsR0FBRyxNQUNqQkMsT0FBTyxDQUFDQyxPQUFSLENBQWdCZCxVQUFVLENBQUNLLE9BQVgsQ0FBbUJVLEdBQW5CLENBQXdCQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxJQUF0QyxFQUE0Q0MsTUFBNUMsQ0FBb0RELElBQUQsSUFBVUEsSUFBSSxLQUFLRSxTQUF0RSxDQUFoQixDQURGOztBQUdBLGNBQU1DLGlCQUFpQixHQUFHLE1BQU07QUFDOUIsZ0JBQU07QUFBRUMsWUFBQUEsT0FBRjtBQUFXQyxZQUFBQTtBQUFYLGNBQStCeEIsS0FBSyxDQUFDTSxPQUEzQztBQUNBLGdCQUFNbUIsTUFBTSxHQUFHRixPQUFPLENBQUNQLEdBQVIsQ0FBYVUsQ0FBRCxJQUFPO0FBQUE7O0FBQ2hDLGtCQUFNQyxRQUFRLEdBQUdILGVBQUgsYUFBR0EsZUFBSCx1QkFBR0EsZUFBZSxDQUFHRSxDQUFILENBQWhDO0FBQ0EsbUJBQU87QUFDTEUsY0FBQUEsSUFBSSxFQUFFRixDQUREO0FBRUxHLGNBQUFBLElBQUksb0JBQUVGLFFBQUYsYUFBRUEsUUFBRix1QkFBRUEsUUFBUSxDQUFFRSxJQUFaLDJEQUFvQixFQUZuQjtBQUdMQyxjQUFBQSxJQUFJLG9CQUFFSCxRQUFGLGFBQUVBLFFBQUYsdUJBQUVBLFFBQVEsQ0FBRUcsSUFBWiwyREFBb0I7QUFIbkIsYUFBUDtBQUtELFdBUGMsQ0FBZjtBQVNBLGlCQUFPaEIsT0FBTyxDQUFDQyxPQUFSLENBQWdCVSxNQUFoQixDQUFQO0FBQ0QsU0FaRDs7QUFjQSxjQUFNTSxnQkFBZ0IsR0FBRyxNQUFNakIsT0FBTyxDQUFDQyxPQUFSLENBQWdCZixLQUFLLENBQUNNLE9BQU4sQ0FBYzBCLFlBQWQsRUFBaEIsQ0FBL0I7O0FBRUEsY0FBTUMsY0FBYyxHQUFJQyxTQUFELElBQXVCbEMsS0FBSyxDQUFDTSxPQUFOLENBQWMyQixjQUFkLENBQTZCQyxTQUE3QixDQUE5Qzs7QUFFQSxjQUFNQyxZQUFZLEdBQUc7QUFBRXhCLFVBQUFBLFNBQUY7QUFBYUUsVUFBQUEsVUFBYjtBQUF5QlMsVUFBQUEsaUJBQXpCO0FBQTRDUyxVQUFBQSxnQkFBNUM7QUFBOERFLFVBQUFBO0FBQTlELFNBQXJCO0FBQ0EsY0FBTUcsa0JBQWtCLEdBQUdsRyxrRkFBcUIsQ0FBQ2dDLE1BQUQsRUFBU2lFLFlBQVQsQ0FBaEQsQ0EvQjJCLENBaUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGNBQU1FLDJCQUF5RSxxQkFDMUVELGtCQUQwRTtBQUU3RUUsVUFBQUEsc0JBQXNCLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxPQUFsQixFQUEyQkMsS0FBM0IsS0FBcUM7QUFBQTs7QUFDM0Q7QUFDQTtBQUNBLGdCQUFJLHFCQUFBbEMsTUFBTSxDQUFDbUMsUUFBUCx3RUFBbUI1RSxFQUFuQixNQUEwQndFLEtBQUssQ0FBQ3hFLEVBQXBDLEVBQXdDO0FBQ3RDLHFCQUFPO0FBQUU2RSxnQkFBQUEsV0FBVyxFQUFFO0FBQWYsZUFBUDtBQUNEOztBQUNELG1CQUFPUixrQkFBa0IsQ0FBQ0Usc0JBQW5CLENBQTBDQyxLQUExQyxFQUFpREMsUUFBakQsRUFBMkRDLE9BQTNELEVBQW9FQyxLQUFwRSxDQUFQO0FBQ0Q7QUFUNEUsVUFBL0U7QUFZQSxjQUFNO0FBQUVHLFVBQUFBO0FBQUYsWUFBYzNFLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQnVFLDhCQUFqQixDQUNsQmhGLGNBRGtCLEVBRWxCdUUsMkJBRmtCLENBQXBCO0FBS0FqQyxRQUFBQSxzQkFBc0IsQ0FBQ0UsT0FBdkIsR0FBaUN1QyxPQUFqQyxDQTFEMkIsQ0EyRDNCO0FBQ0E7QUFDQTtBQUNBOztBQUNBLGNBQU1FLG1CQUFtQixHQUFHLE1BQU07QUFDaEMsZ0JBQU1DLFlBQVksR0FBR3RELFlBQVksQ0FBQ1ksT0FBbEM7O0FBQ0EsY0FBSTBDLFlBQVksS0FBSyxJQUFyQixFQUEyQjtBQUN6QixrQkFBTUMsV0FBVyxHQUFHekMsTUFBTSxDQUFDMEMsZ0JBQVAsRUFBcEI7QUFDQUYsWUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxNQUFuQixHQUE2QixHQUFFSCxXQUFXLEdBQUdwRixvQkFBcUIsSUFBbEU7QUFDQW1GLFlBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkUsS0FBbkIsR0FBMkIsTUFBM0I7QUFDQSxrQkFBTUMsVUFBVSxHQUFHTixZQUFZLENBQUNPLFdBQWhDO0FBQ0EvQyxZQUFBQSxNQUFNLENBQUNnRCxNQUFQLENBQWM7QUFBRUgsY0FBQUEsS0FBSyxFQUFFQyxVQUFUO0FBQXFCRixjQUFBQSxNQUFNLEVBQUVIO0FBQTdCLGFBQWQ7QUFDRDtBQUNGLFNBVEQ7O0FBV0F6QyxRQUFBQSxNQUFNLENBQUNpRCxzQkFBUCxDQUE4QlYsbUJBQTlCO0FBQ0FBLFFBQUFBLG1CQUFtQixHQTNFUSxDQTZFM0I7QUFDQTs7QUFDQXZDLFFBQUFBLE1BQU0sQ0FBQ2tELFVBQVAsQ0FBa0J4RixNQUFNLENBQUN5RixNQUFQLENBQWNDLEtBQWQsR0FBc0IxRixNQUFNLENBQUMyRixPQUFQLENBQWVDLEtBQXZELEVBQThELE1BQU07QUFDbEU1RCxVQUFBQSxhQUFhLENBQUNJLE9BQWQsQ0FBc0JFLE1BQU0sQ0FBQ0UsUUFBUCxFQUF0QjtBQUNELFNBRkQ7QUFJQTtBQUNWO0FBQ0E7O0FBQ1VGLFFBQUFBLE1BQU0sQ0FBQ2tELFVBQVAsQ0FBa0J4RixNQUFNLENBQUN5RixNQUFQLENBQWNJLE9BQWQsR0FBd0I3RixNQUFNLENBQUMyRixPQUFQLENBQWVHLElBQXpELEVBQStELFlBQVk7QUFDekVDLFVBQUFBLHFCQUFNLENBQUNDLGFBQVAsQ0FBcUIsSUFBSUMsYUFBSixDQUFrQixTQUFsQixFQUE2QjtBQUFFQyxZQUFBQSxHQUFHLEVBQUUsR0FBUDtBQUFZQyxZQUFBQSxPQUFPLEVBQUU7QUFBckIsV0FBN0IsQ0FBckI7QUFDRCxTQUZEO0FBR0Q7QUFqR0g7QUFORixJQURGO0FBNEdELENBbklELEVBcUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxpRUFBZTlFLGdCQUFmOzs7Ozs7Ozs7OztBQ3pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsU0FBUytFLGtCQUFULEdBQThCO0FBQzVCO0FBQ0E7QUFDQTtBQUVBLFFBQU1DLE9BQU8sR0FBRyxJQUFJQyxHQUFKLEVBQWhCLENBTDRCLENBTzVCOztBQUNBRCxFQUFBQSxPQUFPLENBQUNFLEdBQVIsQ0FBWSxzQkFBWixFQUFvQyxLQUFLQyxRQUFMLEVBQXBDO0FBRUEsU0FBTztBQUNMO0FBQ0FDLElBQUFBLGdCQUFnQixFQUFHQyxJQUFELElBQXlCdkQsU0FGdEM7QUFHTHdELElBQUFBLGlCQUFpQixFQUFHRCxJQUFELElBQXlCdkQsU0FIdkM7QUFJTHlELElBQUFBLGVBQWUsRUFBR0YsSUFBRCxJQUF5QnZELFNBSnJDO0FBTUwwRCxJQUFBQSxHQUFHLEVBQUUsQ0FBQ1gsR0FBRCxFQUFjWSxLQUFkLEVBQThCQyxhQUE5QixLQUE2RTtBQUFBOztBQUNoRiw2QkFBT1YsT0FBTyxDQUFDUSxHQUFSLENBQVlYLEdBQVosQ0FBUCx1REFBMkJhLGFBQTNCO0FBQ0QsS0FSSTtBQVVMQyxJQUFBQSxVQUFVLEVBQUUsQ0FBQ2QsR0FBRCxFQUFjWSxLQUFkLEVBQThCQyxhQUE5QixLQUErRTtBQUN6RixZQUFNRSxHQUFHLEdBQUdaLE9BQU8sQ0FBQ1EsR0FBUixDQUFZWCxHQUFaLENBQVo7O0FBQ0EsVUFBSWUsR0FBRyxLQUFLOUQsU0FBWixFQUF1QjtBQUNyQjtBQUNBO0FBQ0EsZUFBTzhELEdBQUcsS0FBSyxNQUFmO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsZUFBT0YsYUFBUDtBQUNEO0FBQ0YsS0FuQkk7QUFxQkxHLElBQUFBLFNBQVMsRUFBRSxDQUFDaEIsR0FBRCxFQUFjWSxLQUFkLEVBQThCQyxhQUE5QixLQUE2RTtBQUN0RixZQUFNRSxHQUFHLEdBQUdaLE9BQU8sQ0FBQ1EsR0FBUixDQUFZWCxHQUFaLENBQVo7O0FBQ0EsVUFBSWUsR0FBRyxLQUFLOUQsU0FBWixFQUF1QjtBQUNyQixlQUFPZ0UsUUFBUSxDQUFDRixHQUFELEVBQU0sRUFBTixDQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0YsYUFBUDtBQUNEO0FBQ0YsS0E1Qkk7QUE4QkxLLElBQUFBLEtBQUssRUFBRSxDQUNMbEIsR0FESyxFQUVMbUIsS0FGSyxFQUdMUCxLQUhLLEVBSUxRLE1BSkssS0FLSTtBQUNUO0FBQ0EsVUFBSUQsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBS2xFLFNBQWhDLEVBQTJDO0FBQ3pDa0QsUUFBQUEsT0FBTyxDQUFDa0IsTUFBUixDQUFlckIsR0FBZjtBQUNELE9BRkQsTUFFTztBQUNMRyxRQUFBQSxPQUFPLENBQUNFLEdBQVIsQ0FBWUwsR0FBWixFQUFpQm1CLEtBQUssQ0FBQ2IsUUFBTixFQUFqQjtBQUNEO0FBQ0YsS0ExQ0k7QUE0Q0xnQixJQUFBQSxNQUFNLEVBQUUsQ0FBQ3RCLEdBQUQsRUFBY1ksS0FBZCxLQUF1QztBQUM3Q1QsTUFBQUEsT0FBTyxDQUFDa0IsTUFBUixDQUFlckIsR0FBZjtBQUNELEtBOUNJO0FBZ0RMdUIsSUFBQUEsSUFBSSxFQUFFLENBQUNYLEtBQUQsRUFBaUJRLE1BQWpCLEtBQStDO0FBQ25ELGFBQU9JLEtBQUssQ0FBQ0MsSUFBTixDQUFXdEIsT0FBTyxDQUFDb0IsSUFBUixFQUFYLENBQVA7QUFDRCxLQWxESTtBQW9ETEcsSUFBQUEsVUFBVSxFQUFFLE1BQVk7QUFDdEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0QsS0F0REk7QUF3RExDLElBQUFBLE9BQU8sRUFBRSxNQUFxQjtBQUM1QjtBQUNBLGFBQU9uRixPQUFPLENBQUNDLE9BQVIsQ0FBZ0JNLFNBQWhCLENBQVA7QUFDRCxLQTNESTtBQTZETDZFLElBQUFBLEtBQUssRUFBR2xCLEtBQUQsSUFBNkI7QUFDbEM7QUFDQTtBQUNBLGFBQU8sSUFBUDtBQUNELEtBakVJO0FBbUVMbUIsSUFBQUEsS0FBSyxFQUFHQyxNQUFELElBQXFDO0FBQzFDO0FBQ0EsYUFBT3RGLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQk0sU0FBaEIsQ0FBUDtBQUNEO0FBdEVJLEdBQVA7QUF3RUQ7O0FBRUQsSUFBSWdGLGdCQUFtRSxHQUFHLElBQTFFO0FBRU8sU0FBU3BLLG1CQUFULEdBQTJFO0FBQ2hGO0FBQ0EsTUFBSW9LLGdCQUFnQixLQUFLLElBQXpCLEVBQStCO0FBQzdCQSxJQUFBQSxnQkFBZ0IsR0FBRztBQUNqQkMsTUFBQUEsY0FBYyxFQUFFaEMsa0JBQWtCO0FBRGpCLEtBQW5CO0FBR0Q7O0FBRUQsU0FBTytCLGdCQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDbkhEO0FBQ0E7Q0FJQTs7QUEyQkE7QUFFQSxlQUFlSyw0QkFBZixDQUE0Q3ZFLFlBQTVDLEVBQStGO0FBQzdGLFFBQU1aLE9BQU8sR0FBRyxNQUFNWSxZQUFZLENBQUNiLGlCQUFiLEVBQXRCO0FBQ0EsU0FBT0MsT0FBTyxDQUFDUCxHQUFSLENBQWEyRixNQUFELEtBQWE7QUFDOUI3RSxJQUFBQSxJQUFJLEVBQUUsYUFEd0I7QUFFOUI4RSxJQUFBQSxLQUFLLEVBQUVELE1BQU0sQ0FBQy9FLElBRmdCO0FBRzlCaUYsSUFBQUEsVUFBVSxFQUFFRixNQUFNLENBQUMvRSxJQUhXO0FBSTlCa0YsSUFBQUEsTUFBTSxFQUFHLEdBQUVILE1BQU0sQ0FBQy9FLElBQUssTUFBSytFLE1BQU0sQ0FBQzdFLElBQUssRUFKVjtBQUs5QmlGLElBQUFBLGFBQWEsRUFBRUosTUFBTSxDQUFDOUU7QUFMUSxHQUFiLENBQVosQ0FBUDtBQU9EOztBQUVELE1BQU1tRixvQkFBa0MsR0FBR1Isa0RBQUEsQ0FBZVMsQ0FBRDtBQUFBOztBQUFBLFNBQVE7QUFDL0RuRixJQUFBQSxJQUFJLEVBQUUsVUFEeUQ7QUFFL0Q4RSxJQUFBQSxLQUFLLEVBQUVLLENBQUMsQ0FBQ0wsS0FGc0Q7QUFHL0RDLElBQUFBLFVBQVUsbUJBQUVJLENBQUMsQ0FBQ0osVUFBSix5REFBa0IsRUFIbUM7QUFHL0I7QUFDaENDLElBQUFBLE1BQU0sRUFBRUcsQ0FBQyxDQUFDSCxNQUpxRDtBQUsvREMsSUFBQUEsYUFBYSxFQUFFRSxDQUFDLENBQUNGO0FBTDhDLEdBQVI7QUFBQSxDQUFkLENBQTNDOztBQVFBLGVBQWVHLHdDQUFmLENBQXdEL0UsWUFBeEQsRUFBMkc7QUFDekcsUUFBTWdGLFdBQVcsR0FBRyxNQUFNVCw0QkFBNEIsQ0FBQ3ZFLFlBQUQsQ0FBdEQ7QUFDQSxTQUFPLENBQUMsR0FBRzZFLG9CQUFKLEVBQTBCLEdBQUdHLFdBQTdCLENBQVA7QUFDRDs7QUFFRCxNQUFNQyxvQkFBa0MsR0FBRyxDQUN6QyxhQUR5QyxFQUV6QyxVQUZ5QyxFQUd6QyxrQkFIeUMsRUFJekMsSUFKeUMsRUFLekMsSUFMeUMsRUFNekMsS0FOeUMsRUFPekMsS0FQeUMsRUFRekMsSUFSeUMsRUFTekMsSUFUeUMsRUFVekNwRyxHQVZ5QyxDQVVwQ3FHLElBQUQsS0FBVztBQUNmdkYsRUFBQUEsSUFBSSxFQUFFLFVBRFM7QUFFZjhFLEVBQUFBLEtBQUssRUFBRVMsSUFGUTtBQUdmUixFQUFBQSxVQUFVLEVBQUVRO0FBSEcsQ0FBWCxDQVZxQyxDQUEzQzs7QUFnQkEsZUFBZUMsd0JBQWYsQ0FBd0NuRixZQUF4QyxFQUEyRjtBQUN6RjtBQUNBO0FBQ0EsUUFBTW9GLFVBQVUsR0FBRyxNQUFNcEYsWUFBWSxDQUFDdEIsVUFBYixFQUF6QixDQUh5RixDQUl6Rjs7QUFDQSxTQUFPMEcsVUFBVSxDQUFDQyxLQUFYLENBQWlCLENBQWpCLEVBQW9CLEVBQXBCLEVBQXdCeEcsR0FBeEIsQ0FBNkJHLElBQUQsS0FBVztBQUM1Q1csSUFBQUEsSUFBSSxFQUFFLFNBRHNDO0FBRTVDOEUsSUFBQUEsS0FBSyxFQUFFekYsSUFGcUM7QUFHNUMwRixJQUFBQSxVQUFVLEVBQUUxRjtBQUhnQyxHQUFYLENBQTVCLENBQVA7QUFLRDs7QUFFRCxTQUFTc0csWUFBVCxDQUFzQkMsVUFBdEIsRUFBc0RDLE1BQXRELEVBQStFO0FBQzdFLFFBQU1DLFNBQVMsR0FBRyxDQUFDLEdBQUdELE1BQUosQ0FBbEIsQ0FENkUsQ0FHN0U7O0FBQ0EsTUFBSUQsVUFBVSxLQUFLckcsU0FBbkIsRUFBOEI7QUFDNUJ1RyxJQUFBQSxTQUFTLENBQUNDLElBQVYsQ0FBZTtBQUFFakcsTUFBQUEsSUFBSSxFQUFFLFVBQVI7QUFBb0IyRCxNQUFBQSxLQUFLLEVBQUVtQyxVQUEzQjtBQUF1Q0ksTUFBQUEsRUFBRSxFQUFFO0FBQTNDLEtBQWY7QUFDRDs7QUFFRCxRQUFNQyxhQUFhLEdBQUdILFNBQVMsQ0FBQzVHLEdBQVYsQ0FDbkI0RixLQUFELElBQVksR0FBRUEsS0FBSyxDQUFDaEYsSUFBSyxHQUFFZ0YsS0FBSyxDQUFDa0IsRUFBRyxJQUFHdkIsZ0ZBQStCLENBQUNLLEtBQUssQ0FBQ3JCLEtBQVAsQ0FBYyxHQURoRSxDQUF0QjtBQUlBLFNBQVEsSUFBR3dDLGFBQWEsQ0FBQ0MsSUFBZCxDQUFtQixHQUFuQixDQUF3QixHQUFuQztBQUNEOztBQUVELGVBQWVDLGFBQWYsQ0FDRXRCLE1BREYsRUFFRXVCLFdBRkYsRUFHRS9GLFlBSEYsRUFJcUI7QUFDbkIsTUFBSXdFLE1BQU0sS0FBS3RGLFNBQVgsSUFBd0I2RyxXQUFXLENBQUNDLE1BQVosS0FBdUIsQ0FBbkQsRUFBc0Q7QUFDcEQ7QUFDQSxXQUFPaEcsWUFBWSxDQUFDSixnQkFBYixFQUFQO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsVUFBTW5CLFFBQVEsR0FBRzZHLFlBQVksQ0FBQ2QsTUFBRCxFQUFTdUIsV0FBVCxDQUE3QjtBQUNBLFVBQU10RCxJQUFJLEdBQUcsTUFBTXpDLFlBQVksQ0FBQ3hCLFNBQWIsQ0FBdUJDLFFBQXZCLENBQW5CO0FBQ0EsVUFBTXdILGtCQUFrQixHQUFHQyxNQUFNLENBQUMxQyxJQUFQLENBQVlmLElBQVosQ0FBM0IsQ0FISyxDQUd5Qzs7QUFDOUMsVUFBTTBELGNBQWMsR0FBRyxJQUFJQyxHQUFKLENBQVFMLFdBQVcsQ0FBQ2xILEdBQVosQ0FBaUJ3SCxDQUFELElBQU9BLENBQUMsQ0FBQzVHLElBQXpCLENBQVIsQ0FBdkIsQ0FKSyxDQUkyRDs7QUFDaEUsV0FBT3dHLGtCQUFrQixDQUFDaEgsTUFBbkIsQ0FBMkJvSCxDQUFELElBQU8sQ0FBQ0YsY0FBYyxDQUFDRyxHQUFmLENBQW1CRCxDQUFuQixDQUFsQyxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxlQUFlRSwyQkFBZixDQUNFL0IsTUFERixFQUVFZ0MsTUFGRixFQUdFQyxlQUhGLEVBSUVWLFdBSkYsRUFLRS9GLFlBTEYsRUFNeUI7QUFDdkIsUUFBTTBHLFVBQVUsR0FBRyxNQUFNWixhQUFhLENBQUN0QixNQUFELEVBQVN1QixXQUFULEVBQXNCL0YsWUFBdEIsQ0FBdEM7QUFDQSxTQUFPMEcsVUFBVSxDQUFDN0gsR0FBWCxDQUFnQnFHLElBQUQsS0FBVztBQUMvQnZGLElBQUFBLElBQUksRUFBRSxZQUR5QjtBQUUvQjhFLElBQUFBLEtBQUssRUFBRVMsSUFGd0I7QUFHL0JSLElBQUFBLFVBQVUsRUFBRyxHQUFFUSxJQUFLLEdBQUVzQixNQUFPLEVBSEU7QUFJL0JDLElBQUFBO0FBSitCLEdBQVgsQ0FBZixDQUFQO0FBTUQ7O0FBRUQsZUFBZUUsbUNBQWYsQ0FDRW5DLE1BREYsRUFFRXVCLFdBRkYsRUFHRS9GLFlBSEYsRUFJeUI7QUFDdkIsU0FBT3VHLDJCQUEyQixDQUFDL0IsTUFBRCxFQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CdUIsV0FBcEIsRUFBaUMvRixZQUFqQyxDQUFsQztBQUNEOztBQUNELGVBQWU0Ryw2QkFBZixDQUNFcEMsTUFERixFQUVFdUIsV0FGRixFQUdFL0YsWUFIRixFQUl5QjtBQUN2QixTQUFPdUcsMkJBQTJCLENBQUMvQixNQUFELEVBQVMsRUFBVCxFQUFhLEtBQWIsRUFBb0J1QixXQUFwQixFQUFpQy9GLFlBQWpDLENBQWxDO0FBQ0Q7O0FBRUQsZUFBZUYsY0FBZixDQUNFMEUsTUFERixFQUVFekUsU0FGRixFQUdFZ0csV0FIRixFQUlFL0YsWUFKRixFQUtxQjtBQUNuQixNQUFJd0UsTUFBTSxLQUFLdEYsU0FBWCxJQUF3QjZHLFdBQVcsQ0FBQ0MsTUFBWixLQUF1QixDQUFuRCxFQUFzRDtBQUNwRDtBQUNBLFdBQU9oRyxZQUFZLENBQUNGLGNBQWIsQ0FBNEJDLFNBQTVCLENBQVA7QUFDRCxHQUhELE1BR087QUFBQTs7QUFDTCxVQUFNdEIsUUFBUSxHQUFHNkcsWUFBWSxDQUFDZCxNQUFELEVBQVN1QixXQUFULENBQTdCO0FBQ0EsVUFBTXRELElBQUksR0FBRyxNQUFNekMsWUFBWSxDQUFDeEIsU0FBYixDQUF1QkMsUUFBdkIsQ0FBbkI7QUFDQSw4QkFBT2dFLElBQUksQ0FBQzFDLFNBQUQsQ0FBWCw2REFBMEIsRUFBMUI7QUFDRDtBQUNGOztBQUVELGVBQWU4RyxrQ0FBZixDQUNFckMsTUFERixFQUVFekUsU0FGRixFQUdFK0csYUFIRixFQUlFZixXQUpGLEVBS0UvRixZQUxGLEVBTXlCO0FBQ3ZCLFFBQU0rRyxNQUFNLEdBQUcsTUFBTWpILGNBQWMsQ0FBQzBFLE1BQUQsRUFBU3pFLFNBQVQsRUFBb0JnRyxXQUFwQixFQUFpQy9GLFlBQWpDLENBQW5DO0FBQ0EsU0FBTytHLE1BQU0sQ0FBQ2xJLEdBQVAsQ0FBWXFHLElBQUQsS0FBVztBQUMzQnZGLElBQUFBLElBQUksRUFBRSxhQURxQjtBQUUzQjhFLElBQUFBLEtBQUssRUFBRVMsSUFGb0I7QUFHM0JSLElBQUFBLFVBQVUsRUFBRW9DLGFBQWEsR0FBRzVCLElBQUgsR0FBVyxJQUFHQSxJQUFLLEdBSGpCLENBR3FCOztBQUhyQixHQUFYLENBQVgsQ0FBUDtBQUtEOztBQUVNLGVBQWU4QixjQUFmLENBQThCQyxTQUE5QixFQUFvRGpILFlBQXBELEVBQXVHO0FBQzVHLFVBQVFpSCxTQUFTLENBQUN0SCxJQUFsQjtBQUNFLFNBQUssYUFBTDtBQUNFLGFBQU9zRixvQkFBUDs7QUFDRixTQUFLLGFBQUw7QUFDRSxhQUFPRix3Q0FBd0MsQ0FBQy9FLFlBQUQsQ0FBL0M7O0FBQ0YsU0FBSyxTQUFMO0FBQWdCO0FBQ2QsZUFBTytFLHdDQUF3QyxDQUFDL0UsWUFBRCxDQUEvQztBQUNEOztBQUNELFNBQUssT0FBTDtBQUFjO0FBQ1osY0FBTWdGLFdBQVcsR0FBRyxNQUFNVCw0QkFBNEIsQ0FBQ3ZFLFlBQUQsQ0FBdEQ7QUFDQSxjQUFNa0gsa0JBQWtCLEdBQUcsTUFBTS9CLHdCQUF3QixDQUFDbkYsWUFBRCxDQUF6RDtBQUNBLGVBQU8sQ0FBQyxHQUFHa0gsa0JBQUosRUFBd0IsR0FBR3JDLG9CQUEzQixFQUFpRCxHQUFHRyxXQUFwRCxDQUFQO0FBQ0Q7O0FBQ0QsU0FBSyxpQ0FBTDtBQUNFLGFBQU8yQixtQ0FBbUMsQ0FBQ00sU0FBUyxDQUFDMUIsVUFBWCxFQUF1QjBCLFNBQVMsQ0FBQ2xCLFdBQWpDLEVBQThDL0YsWUFBOUMsQ0FBMUM7O0FBQ0YsU0FBSyxhQUFMO0FBQ0UsYUFBTzRHLDZCQUE2QixDQUFDSyxTQUFTLENBQUMxQixVQUFYLEVBQXVCMEIsU0FBUyxDQUFDbEIsV0FBakMsRUFBOEMvRixZQUE5QyxDQUFwQzs7QUFDRixTQUFLLG1DQUFMO0FBQ0UsYUFBTzZHLGtDQUFrQyxDQUN2Q0ksU0FBUyxDQUFDMUIsVUFENkIsRUFFdkMwQixTQUFTLENBQUNsSCxTQUY2QixFQUd2Q2tILFNBQVMsQ0FBQ0gsYUFINkIsRUFJdkNHLFNBQVMsQ0FBQ2xCLFdBSjZCLEVBS3ZDL0YsWUFMdUMsQ0FBekM7O0FBT0Y7QUFDRSxZQUFNLElBQUlzRSxpREFBSixDQUFtQjJDLFNBQW5CLENBQU47QUExQko7QUE0QkQ7Ozs7Ozs7Ozs7Ozs7OztBQy9NRDtBQUNBO0FBQ0E7QUFFTyxTQUFTak4saUJBQVQsR0FBaUU7QUFDdEUsU0FBTztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBb04sSUFBQUEsU0FBUyxFQUFFO0FBaEJOLEdBQVA7QUFrQkQ7O0FBRUQsU0FBU0MsMkJBQVQsQ0FBcUMxSCxJQUFyQyxFQUEyRDVELE1BQTNELEVBQXFIO0FBQ25ILFVBQVE0RCxJQUFSO0FBQ0UsU0FBSyxVQUFMO0FBQ0UsYUFBTzVELE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQmtMLGtCQUFqQixDQUFvQ0MsSUFBM0M7O0FBQ0YsU0FBSyxVQUFMO0FBQ0UsYUFBT3hMLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQmtMLGtCQUFqQixDQUFvQ0UsUUFBM0M7O0FBQ0YsU0FBSyxTQUFMO0FBQ0UsYUFBT3pMLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQmtMLGtCQUFqQixDQUFvQ0csT0FBM0M7O0FBQ0YsU0FBSyxZQUFMO0FBQ0UsYUFBTzFMLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQmtMLGtCQUFqQixDQUFvQ0ksSUFBM0M7O0FBQ0YsU0FBSyxhQUFMO0FBQ0UsYUFBTzNMLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQmtMLGtCQUFqQixDQUFvQ0ssVUFBM0M7O0FBQ0YsU0FBSyxhQUFMO0FBQ0UsYUFBTzVMLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQmtMLGtCQUFqQixDQUFvQ00sV0FBM0M7O0FBQ0Y7QUFDRSxZQUFNLElBQUl0RCxpREFBSixDQUFtQjNFLElBQW5CLENBQU47QUFkSjtBQWdCRDs7QUFDTSxTQUFTNUYscUJBQVQsQ0FDTGdDLE1BREssRUFFTGlFLFlBRkssRUFHeUM7QUFDOUMsUUFBTUcsc0JBQXNCLEdBQUcsQ0FDN0JDLEtBRDZCLEVBRTdCQyxRQUY2QixLQUdrRDtBQUMvRSxVQUFNd0gsSUFBSSxHQUFHekgsS0FBSyxDQUFDMEgsaUJBQU4sQ0FBd0J6SCxRQUF4QixDQUFiO0FBQ0EsVUFBTTBILEtBQUssR0FDVEYsSUFBSSxJQUFJLElBQVIsR0FDSTlMLE1BQU0sQ0FBQ2lNLEtBQVAsQ0FBYUMsSUFBYixDQUFrQjtBQUNoQkMsTUFBQUEsZUFBZSxFQUFFN0gsUUFBUSxDQUFDOEgsVUFEVjtBQUVoQkMsTUFBQUEsYUFBYSxFQUFFL0gsUUFBUSxDQUFDOEgsVUFGUjtBQUdoQkUsTUFBQUEsV0FBVyxFQUFFUixJQUFJLENBQUNRLFdBSEY7QUFJaEJDLE1BQUFBLFNBQVMsRUFBRVQsSUFBSSxDQUFDUztBQUpBLEtBQWxCLENBREosR0FPSXZNLE1BQU0sQ0FBQ2lNLEtBQVAsQ0FBYU8sYUFBYixDQUEyQmxJLFFBQTNCLENBUk4sQ0FGK0UsQ0FXL0U7QUFDQTs7QUFDQSxVQUFNbUksYUFBYSxHQUFHO0FBQ3BCQyxNQUFBQSxNQUFNLEVBQUVwSSxRQUFRLENBQUNvSSxNQURHO0FBRXBCTixNQUFBQSxVQUFVLEVBQUU5SCxRQUFRLENBQUM4SDtBQUZELEtBQXRCO0FBSUEsVUFBTU8sTUFBTSxHQUFHdEksS0FBSyxDQUFDdUksV0FBTixDQUFrQkgsYUFBbEIsQ0FBZjtBQUNBLFVBQU12QixTQUFTLEdBQUdFLHdEQUFZLENBQUMvRyxLQUFLLENBQUM3QixRQUFOLEVBQUQsRUFBbUJtSyxNQUFuQixDQUE5QjtBQUNBLFVBQU1FLGtCQUFrQixHQUFHM0IsU0FBUyxJQUFJLElBQWIsR0FBb0JELDREQUFjLENBQUNDLFNBQUQsRUFBWWpILFlBQVosQ0FBbEMsR0FBOERyQixPQUFPLENBQUNDLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FBekY7QUFDQSxXQUFPZ0ssa0JBQWtCLENBQUN0TSxJQUFuQixDQUF5QnVNLEtBQUQsSUFBVztBQUN4QztBQUNBO0FBQ0E7QUFDQSxZQUFNQyxjQUFjLEdBQUdELEtBQUssQ0FBQzdDLE1BQU4sQ0FBYXpELFFBQWIsR0FBd0J5RCxNQUEvQztBQUNBLFlBQU12RixXQUFtRCxHQUFHb0ksS0FBSyxDQUFDaEssR0FBTixDQUFVLENBQUNrSyxJQUFELEVBQU9DLEtBQVAsTUFBa0I7QUFDdEZDLFFBQUFBLElBQUksRUFBRTVCLDJCQUEyQixDQUFDMEIsSUFBSSxDQUFDcEosSUFBTixFQUFZNUQsTUFBWixDQURxRDtBQUV0RjBJLFFBQUFBLEtBQUssRUFBRXNFLElBQUksQ0FBQ3RFLEtBRjBFO0FBR3RGQyxRQUFBQSxVQUFVLEVBQUVxRSxJQUFJLENBQUNyRSxVQUhxRTtBQUl0RkMsUUFBQUEsTUFBTSxFQUFFb0UsSUFBSSxDQUFDcEUsTUFKeUU7QUFLdEZDLFFBQUFBLGFBQWEsRUFBRW1FLElBQUksQ0FBQ25FLGFBTGtFO0FBTXRGc0UsUUFBQUEsUUFBUSxFQUFFRixLQUFLLENBQUN6RyxRQUFOLEdBQWlCNEcsUUFBakIsQ0FBMEJMLGNBQTFCLEVBQTBDLEdBQTFDLENBTjRFO0FBTTVCO0FBQzFEZixRQUFBQSxLQVBzRjtBQVF0RnFCLFFBQUFBLE9BQU8sRUFBRUwsSUFBSSxDQUFDdEMsZUFBTCxHQUNMO0FBQ0U3SyxVQUFBQSxFQUFFLEVBQUUsOEJBRE47QUFFRXlOLFVBQUFBLEtBQUssRUFBRTtBQUZULFNBREssR0FLTG5LO0FBYmtGLE9BQWxCLENBQVYsQ0FBNUQ7QUFlQSxhQUFPO0FBQUV1QixRQUFBQTtBQUFGLE9BQVA7QUFDRCxLQXJCTSxDQUFQO0FBc0JELEdBN0NEOztBQStDQSxTQUFPO0FBQ0w2SSxJQUFBQSxpQkFBaUIsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxHQUFwQyxDQURkO0FBRUxuSixJQUFBQTtBQUZLLEdBQVA7QUFJRDs7Ozs7Ozs7Ozs7OztBQ25HRDtBQUVBOztBQTJCQSxTQUFTcUosSUFBVCxDQUFjQyxJQUFkLEVBQWdDQyxTQUFoQyxFQUF5RTtBQUN2RSxVQUFRQSxTQUFSO0FBQ0UsU0FBSyxRQUFMO0FBQ0UsYUFBT0QsSUFBSSxDQUFDRSxNQUFaOztBQUNGLFNBQUssWUFBTDtBQUNFLGFBQU9GLElBQUksQ0FBQ0csVUFBWjs7QUFDRixTQUFLLFdBQUw7QUFDRSxhQUFPSCxJQUFJLENBQUNJLFNBQVo7O0FBQ0YsU0FBSyxhQUFMO0FBQ0UsYUFBT0osSUFBSSxDQUFDSyxXQUFaOztBQUNGO0FBQ0UsWUFBTSxJQUFJeEYsaURBQUosQ0FBbUJvRixTQUFuQixDQUFOO0FBVko7QUFZRDs7QUFFRCxTQUFTSyxJQUFULENBQWNOLElBQWQsRUFBZ0NPLElBQWhDLEVBQStEO0FBQzdELE1BQUk3TCxPQUEwQixHQUFHc0wsSUFBakM7O0FBQ0EsT0FBSyxNQUFNLENBQUNDLFNBQUQsRUFBWU8sWUFBWixDQUFYLElBQXdDRCxJQUF4QyxFQUE4QztBQUM1QzdMLElBQUFBLE9BQU8sR0FBR3FMLElBQUksQ0FBQ3JMLE9BQUQsRUFBVXVMLFNBQVYsQ0FBZDs7QUFDQSxRQUFJdkwsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3BCO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsUUFBSUEsT0FBTyxDQUFDd0IsSUFBUixDQUFhRixJQUFiLEtBQXNCd0ssWUFBMUIsRUFBd0M7QUFDdEM7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUNELFNBQU85TCxPQUFQO0FBQ0Q7O0FBRUQsU0FBUytMLFdBQVQsQ0FBcUJULElBQXJCLEVBQXVDdkUsSUFBdkMsRUFBNkQ7QUFDM0QsU0FBT0EsSUFBSSxDQUFDRyxLQUFMLENBQVdvRSxJQUFJLENBQUMvRixJQUFoQixFQUFzQitGLElBQUksQ0FBQ1UsRUFBM0IsQ0FBUDtBQUNEOztBQUVELFNBQVNDLHdCQUFULENBQWtDbEYsSUFBbEMsRUFBd0Q7QUFDdEQ7QUFDQSxRQUFNbUYsTUFBTSxHQUFHbkYsSUFBSSxDQUFDRyxLQUFMLENBQVcsQ0FBWCxFQUFjSCxJQUFJLENBQUNjLE1BQUwsR0FBYyxDQUE1QixDQUFmLENBRnNELENBSXREO0FBQ0E7QUFFQTtBQUVBOztBQUNBLE1BQUlkLElBQUksQ0FBQ29GLFVBQUwsQ0FBZ0IsR0FBaEIsS0FBd0JwRixJQUFJLENBQUNxRixRQUFMLENBQWMsR0FBZCxDQUE1QixFQUFnRDtBQUM5QztBQUNBO0FBQ0EsV0FBT0YsTUFBTSxDQUFDRyxPQUFQLENBQWUsS0FBZixFQUFzQixHQUF0QixDQUFQO0FBQ0QsR0FkcUQsQ0FnQnREOzs7QUFDQSxNQUFJdEYsSUFBSSxDQUFDb0YsVUFBTCxDQUFnQixHQUFoQixLQUF3QnBGLElBQUksQ0FBQ3FGLFFBQUwsQ0FBYyxHQUFkLENBQTVCLEVBQWdEO0FBQzlDO0FBQ0E7QUFDQSxXQUFPRixNQUFNLENBQUNHLE9BQVAsQ0FBZSxLQUFmLEVBQXNCLEdBQXRCLENBQVA7QUFDRCxHQXJCcUQsQ0F1QnREOzs7QUFDQSxNQUFJdEYsSUFBSSxDQUFDb0YsVUFBTCxDQUFnQixHQUFoQixLQUF3QnBGLElBQUksQ0FBQ3FGLFFBQUwsQ0FBYyxHQUFkLENBQTVCLEVBQWdEO0FBQzlDLFdBQU9GLE1BQVA7QUFDRDs7QUFFRCxRQUFNLElBQUlJLEtBQUosQ0FBVSwrQkFBVixDQUFOO0FBQ0Q7O0FBOENELFNBQVNDLFdBQVQsQ0FBcUJDLFlBQXJCLEVBQTZDQyxVQUE3QyxFQUE0RTtBQUMxRSxTQUFPRCxZQUFZLENBQUNFLEtBQWIsQ0FBbUIsQ0FBQzlCLElBQUQsRUFBT0MsS0FBUCxLQUFpQkQsSUFBSSxLQUFLNkIsVUFBVSxDQUFDNUIsS0FBRCxDQUF2RCxDQUFQO0FBQ0Q7O0FBRUQsTUFBTThCLGVBQTZCLEdBQUcsR0FBdEMsRUFBMkM7O0FBRTNDLE1BQU1DLFNBQXFCLEdBQUcsQ0FDNUI7QUFDRWYsRUFBQUEsSUFBSSxFQUFFLENBQUMsZUFBRCxFQUFrQixnQkFBbEIsQ0FEUjtBQUVFZ0IsRUFBQUEsR0FBRyxFQUFFQztBQUZQLENBRDRCLEVBSzVCO0FBQ0VqQixFQUFBQSxJQUFJLEVBQUUsQ0FBQyxRQUFELENBRFI7QUFFRWdCLEVBQUFBLEdBQUcsRUFBRUU7QUFGUCxDQUw0QixFQVM1QjtBQUNFbEIsRUFBQUEsSUFBSSxFQUFFLENBQUMsa0JBQUQsQ0FEUjtBQUVFZ0IsRUFBQUEsR0FBRyxFQUFFRztBQUZQLENBVDRCLEVBYTVCO0FBQ0VuQixFQUFBQSxJQUFJLEVBQUUsQ0FBQyxlQUFELEVBQWtCLGNBQWxCLENBRFI7QUFFRWdCLEVBQUFBLEdBQUcsRUFBRUk7QUFGUCxDQWI0QixFQWlCNUI7QUFDRXBCLEVBQUFBLElBQUksRUFBRSxDQUFDYyxlQUFELEVBQWtCLGNBQWxCLENBRFI7QUFFRUUsRUFBQUEsR0FBRyxFQUFFSTtBQUZQLENBakI0QixFQXFCNUI7QUFDRXBCLEVBQUFBLElBQUksRUFBRSxDQUFDYyxlQUFELEVBQWtCLGdCQUFsQixDQURSO0FBRUVFLEVBQUFBLEdBQUcsRUFBRUs7QUFGUCxDQXJCNEIsRUF5QjVCO0FBQ0VyQixFQUFBQSxJQUFJLEVBQUUsQ0FBQyxnQkFBRCxDQURSO0FBRUVnQixFQUFBQSxHQUFHLEVBQUVNO0FBRlAsQ0F6QjRCLENBQTlCO0FBK0JBLE1BQU1DLFlBQVksR0FBRyxJQUFJbEosR0FBSixDQUErQixDQUNsRCxDQUFDLFdBQUQsRUFBYyxHQUFkLENBRGtELEVBRWxELENBQUMsVUFBRCxFQUFhLElBQWIsQ0FGa0QsRUFHbEQsQ0FBQyxLQUFELEVBQVEsSUFBUixDQUhrRCxFQUlsRCxDQUFDLFVBQUQsRUFBYSxJQUFiLENBSmtELENBQS9CLENBQXJCOztBQU9BLFNBQVNtSixVQUFULENBQW9CQyxNQUFwQixFQUE4RDtBQUFBOztBQUM1RCxRQUFNQyxPQUFPLEdBQUdELE1BQU0sQ0FBQzdCLFVBQXZCOztBQUNBLE1BQUk4QixPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsOEJBQU9ILFlBQVksQ0FBQzNJLEdBQWIsQ0FBaUI4SSxPQUFPLENBQUNqTSxJQUF6QixDQUFQLGlFQUF5QyxJQUF6QztBQUNEOztBQUVELFNBQVNrTSxRQUFULENBQWtCQyxnQkFBbEIsRUFBZ0QxRyxJQUFoRCxFQUE0RTtBQUMxRSxNQUFJMEcsZ0JBQWdCLENBQUNqTSxJQUFqQixDQUFzQkYsSUFBdEIsS0FBK0IsY0FBbkMsRUFBbUQ7QUFDakQsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBTW9NLFFBQVEsR0FBRzlCLElBQUksQ0FBQzZCLGdCQUFELEVBQW1CLENBQUMsQ0FBQyxZQUFELEVBQWUsV0FBZixDQUFELENBQW5CLENBQXJCOztBQUVBLE1BQUlDLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQixXQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFNSixNQUFNLEdBQUcxQixJQUFJLENBQUM4QixRQUFELEVBQVcsQ0FBQyxDQUFDLGFBQUQsRUFBZ0IsU0FBaEIsQ0FBRCxDQUFYLENBQW5COztBQUNBLE1BQUlKLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ25CLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU05RixFQUFFLEdBQUc2RixVQUFVLENBQUNDLE1BQUQsQ0FBckI7O0FBQ0EsTUFBSTlGLEVBQUUsS0FBSyxJQUFYLEVBQWlCO0FBQ2YsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBTW1HLFNBQVMsR0FBRy9CLElBQUksQ0FBQzZCLGdCQUFELEVBQW1CLENBQUMsQ0FBQyxXQUFELEVBQWMsZUFBZCxDQUFELENBQW5CLENBQXRCOztBQUVBLE1BQUlFLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QixXQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFNck0sSUFBSSxHQUFHeUssV0FBVyxDQUFDMkIsUUFBRCxFQUFXM0csSUFBWCxDQUF4QjtBQUNBLFFBQU05QixLQUFLLEdBQUdnSCx3QkFBd0IsQ0FBQ0YsV0FBVyxDQUFDNEIsU0FBRCxFQUFZNUcsSUFBWixDQUFaLENBQXRDO0FBRUEsU0FBTztBQUFFekYsSUFBQUEsSUFBRjtBQUFRMkQsSUFBQUEsS0FBUjtBQUFldUMsSUFBQUE7QUFBZixHQUFQO0FBQ0Q7O0FBQ0QsU0FBU29HLFNBQVQsQ0FBbUJDLGlCQUFuQixFQUFrRDlHLElBQWxELEVBQXlFO0FBQ3ZFLE1BQUk4RyxpQkFBaUIsQ0FBQ3JNLElBQWxCLENBQXVCRixJQUF2QixLQUFnQyxlQUFwQyxFQUFxRDtBQUNuRCxXQUFPLEVBQVA7QUFDRDs7QUFFRCxNQUFJd00sUUFBMkIsR0FBR2xDLElBQUksQ0FBQ2lDLGlCQUFELEVBQW9CLENBQUMsQ0FBQyxZQUFELEVBQWUsZ0JBQWYsQ0FBRCxDQUFwQixDQUF0QztBQUVBLFFBQU14RyxNQUFlLEdBQUcsRUFBeEI7O0FBRUEsU0FBT3lHLFFBQVEsS0FBSyxJQUFwQixFQUEwQjtBQUN4QixVQUFNQyxXQUFXLEdBQUduQyxJQUFJLENBQUNrQyxRQUFELEVBQVcsQ0FBQyxDQUFDLFdBQUQsRUFBYyxjQUFkLENBQUQsQ0FBWCxDQUF4Qjs7QUFDQSxRQUFJQyxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDeEI7QUFDQSxhQUFPLEVBQVA7QUFDRDs7QUFFRCxVQUFNekgsS0FBSyxHQUFHa0gsUUFBUSxDQUFDTyxXQUFELEVBQWNoSCxJQUFkLENBQXRCOztBQUNBLFFBQUlULEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCZSxNQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWWpCLEtBQVo7QUFDRCxLQVZ1QixDQVl4Qjs7O0FBQ0F3SCxJQUFBQSxRQUFRLEdBQUdsQyxJQUFJLENBQUNrQyxRQUFELEVBQVcsQ0FBQyxDQUFDLFlBQUQsRUFBZSxnQkFBZixDQUFELENBQVgsQ0FBZjtBQUNELEdBdkJzRSxDQXlCdkU7OztBQUNBekcsRUFBQUEsTUFBTSxDQUFDMkcsT0FBUDtBQUVBLFNBQU8zRyxNQUFQO0FBQ0Q7O0FBRUQsU0FBUzRHLGVBQVQsQ0FBeUIzQyxJQUF6QixFQUF5RDtBQUN2RCxNQUFJNEMsS0FBd0IsR0FBRzVDLElBQUksQ0FBQ0csVUFBcEM7QUFDQSxRQUFNMEMsUUFBc0IsR0FBRyxFQUEvQjs7QUFDQSxTQUFPRCxLQUFLLEtBQUssSUFBakIsRUFBdUI7QUFDckJDLElBQUFBLFFBQVEsQ0FBQzVHLElBQVQsQ0FBYzJHLEtBQWQ7QUFDQUEsSUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUN2QyxXQUFkO0FBQ0Q7O0FBQ0QsU0FBT3dDLFFBQVA7QUFDRDs7QUFFRCxTQUFTQyxnQkFBVCxDQUEwQjlDLElBQTFCLEVBQTRDK0MsUUFBNUMsRUFBdUY7QUFDckY7QUFDQSxNQUFJL0MsSUFBSSxDQUFDOUosSUFBTCxDQUFVRixJQUFWLEtBQW1CK00sUUFBdkIsRUFBaUM7QUFDL0IsV0FBTy9DLElBQVA7QUFDRCxHQUpvRixDQU1yRjs7O0FBQ0EsUUFBTTZDLFFBQVEsR0FBR0YsZUFBZSxDQUFDM0MsSUFBRCxDQUFoQzs7QUFDQSxPQUFLLE1BQU00QyxLQUFYLElBQW9CQyxRQUFwQixFQUE4QjtBQUM1QixVQUFNRyxDQUFDLEdBQUdGLGdCQUFnQixDQUFDRixLQUFELEVBQVFHLFFBQVIsQ0FBMUI7O0FBQ0EsUUFBSUMsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZCxhQUFPQSxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFTbkIsd0JBQVQsQ0FBa0M3QixJQUFsQyxFQUFvRHZFLElBQXBELEVBQWtFd0gsR0FBbEUsRUFBaUc7QUFDL0YsUUFBTUMsV0FBVyxHQUFHNUMsSUFBSSxDQUFDTixJQUFELEVBQU8sQ0FDN0IsQ0FBQyxRQUFELEVBQVcsbUJBQVgsQ0FENkIsRUFFN0IsQ0FBQyxRQUFELEVBQVcsZUFBWCxDQUY2QixDQUFQLENBQXhCOztBQUlBLE1BQUlrRCxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDeEIsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsUUFBTUMsUUFBUSxHQUFHRCxXQUFXLENBQUNFLFFBQVosQ0FBcUIsa0JBQXJCLENBQWpCOztBQUNBLE1BQUlELFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQixXQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFNRSxZQUFZLEdBQUdQLGdCQUFnQixDQUFDSyxRQUFELEVBQVcsa0JBQVgsQ0FBckM7O0FBQ0EsTUFBSUUsWUFBWSxLQUFLLElBQXJCLEVBQTJCO0FBQ3pCLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU1DLE1BQU0sR0FBR2hELElBQUksQ0FBQytDLFlBQUQsRUFBZSxDQUFDLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FBRCxDQUFmLENBQW5COztBQUNBLE1BQUlDLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ25CLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU14SCxVQUFVLEdBQUcyRSxXQUFXLENBQUM2QyxNQUFELEVBQVM3SCxJQUFULENBQTlCO0FBQ0EsU0FBTztBQUNMdkYsSUFBQUEsSUFBSSxFQUFFLGFBREQ7QUFFTDRGLElBQUFBLFVBRks7QUFHTFEsSUFBQUEsV0FBVyxFQUFFO0FBSFIsR0FBUDtBQUtEOztBQUVELFNBQVNxRixtQkFBVCxDQUE2QjNCLElBQTdCLEVBQStDdkUsSUFBL0MsRUFBNkR3SCxHQUE3RCxFQUE0RjtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxRQUFNTSxZQUFZLEdBQUcsQ0FBQ3ZELElBQUksQ0FBQzlKLElBQUwsQ0FBVXNOLE9BQWhDO0FBRUEsUUFBTXRELE1BQU0sR0FBR0ksSUFBSSxDQUFDTixJQUFELEVBQU8sQ0FBQyxDQUFDLFFBQUQsRUFBVyxjQUFYLENBQUQsQ0FBUCxDQUFuQjs7QUFDQSxNQUFJRSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQixXQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFNdUQsYUFBYSxHQUFHbkQsSUFBSSxDQUFDSixNQUFELEVBQVMsQ0FBQyxDQUFDLFlBQUQsRUFBZSxXQUFmLENBQUQsQ0FBVCxDQUExQjs7QUFDQSxNQUFJdUQsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzFCLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU1uTixTQUFTLEdBQUdtSyxXQUFXLENBQUNnRCxhQUFELEVBQWdCaEksSUFBaEIsQ0FBN0IsQ0FoQjBGLENBa0IxRjtBQUNBO0FBQ0E7O0FBRUEsUUFBTWlJLGFBQWEsR0FBR3BELElBQUksQ0FBQ0osTUFBRCxFQUFTLENBQUMsQ0FBQyxRQUFELEVBQVcsZ0JBQVgsQ0FBRCxDQUFULENBQTFCOztBQUNBLE1BQUl3RCxhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDMUIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSWxCLFFBQVEsR0FBR2tCLGFBQWYsQ0EzQjBGLENBNkIxRjtBQUNBO0FBQ0E7O0FBQ0EsTUFBSW5CLGlCQUFvQyxHQUFHLElBQTNDOztBQUNBLFNBQU9BLGlCQUFpQixLQUFLLElBQTdCLEVBQW1DO0FBQ2pDLFVBQU1vQixDQUFDLEdBQUduQixRQUFRLENBQUN0QyxNQUFuQjs7QUFDQSxRQUFJeUQsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZCxhQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNO0FBQUUzTixNQUFBQTtBQUFGLFFBQVcyTixDQUFDLENBQUN6TixJQUFuQjs7QUFFQSxZQUFRRixJQUFSO0FBQ0UsV0FBSyxnQkFBTDtBQUNFO0FBQ0F3TSxRQUFBQSxRQUFRLEdBQUdtQixDQUFYO0FBQ0E7O0FBQ0YsV0FBSyxlQUFMO0FBQ0U7QUFDQXBCLFFBQUFBLGlCQUFpQixHQUFHb0IsQ0FBcEI7QUFDQTs7QUFDRjtBQUNFO0FBQ0EsZUFBTyxJQUFQO0FBWEo7QUFhRCxHQXREeUYsQ0F3RDFGOzs7QUFDQSxRQUFNM0gsU0FBUyxHQUFHc0csU0FBUyxDQUFDQyxpQkFBRCxFQUFvQjlHLElBQXBCLENBQTNCLENBekQwRixDQTJEMUY7O0FBQ0EsUUFBTWEsV0FBVyxHQUFHTixTQUFTLENBQUN4RyxNQUFWLENBQWtCd0YsS0FBRCxJQUFXQSxLQUFLLENBQUNoRixJQUFOLEtBQWVNLFNBQTNDLENBQXBCO0FBRUEsUUFBTXNOLGNBQWMsR0FBR3RELElBQUksQ0FBQ2lDLGlCQUFELEVBQW9CLENBQzdDLENBQUMsUUFBRCxFQUFXLGdCQUFYLENBRDZDLEVBRTdDLENBQUMsWUFBRCxFQUFlLGtCQUFmLENBRjZDLEVBRzdDLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FINkMsQ0FBcEIsQ0FBM0I7O0FBTUEsTUFBSXFCLGNBQWMsS0FBSyxJQUF2QixFQUE2QjtBQUMzQjtBQUNBLFdBQU87QUFDTDFOLE1BQUFBLElBQUksRUFBRSxtQ0FERDtBQUVMSSxNQUFBQSxTQUZLO0FBR0wrRyxNQUFBQSxhQUFhLEVBQUVrRyxZQUhWO0FBSUxqSCxNQUFBQTtBQUpLLEtBQVA7QUFNRDs7QUFFRCxRQUFNUixVQUFVLEdBQUcyRSxXQUFXLENBQUNtRCxjQUFELEVBQWlCbkksSUFBakIsQ0FBOUI7QUFFQSxTQUFPO0FBQ0x2RixJQUFBQSxJQUFJLEVBQUUsbUNBREQ7QUFFTDRGLElBQUFBLFVBRks7QUFHTHhGLElBQUFBLFNBSEs7QUFJTCtHLElBQUFBLGFBQWEsRUFBRWtHLFlBSlY7QUFLTGpILElBQUFBO0FBTEssR0FBUDtBQU9EOztBQUVELFNBQVNtRixlQUFULENBQXlCekIsSUFBekIsRUFBMkN2RSxJQUEzQyxFQUF5RHdILEdBQXpELEVBQWlGO0FBQy9FLFNBQU87QUFDTC9NLElBQUFBLElBQUksRUFBRTtBQURELEdBQVA7QUFHRDs7QUFFRCxTQUFTd0wsaUJBQVQsQ0FBMkIxQixJQUEzQixFQUE2Q3ZFLElBQTdDLEVBQTJEd0gsR0FBM0QsRUFBbUY7QUFDakYsU0FBTztBQUNML00sSUFBQUEsSUFBSSxFQUFFO0FBREQsR0FBUDtBQUdEOztBQUVELFNBQVMwTCxnQkFBVCxDQUEwQjVCLElBQTFCLEVBQTRDdkUsSUFBNUMsRUFBMER3SCxHQUExRCxFQUFrRjtBQUNoRixTQUFPO0FBQ0wvTSxJQUFBQSxJQUFJLEVBQUU7QUFERCxHQUFQO0FBR0Q7O0FBRUQsU0FBUzJOLGVBQVQsQ0FBeUI3RCxJQUF6QixFQUFvRDtBQUNsRCxTQUFPOEMsZ0JBQWdCLENBQUM5QyxJQUFELEVBQU9xQixlQUFQLENBQWhCLEtBQTRDLElBQW5EO0FBQ0Q7O0FBRUQsU0FBU0csMEJBQVQsQ0FBb0N4QixJQUFwQyxFQUFzRHZFLElBQXRELEVBQW9Fd0gsR0FBcEUsRUFBbUc7QUFDakc7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFJWSxlQUFlLENBQUM3RCxJQUFELENBQW5CLEVBQTJCO0FBQ3pCLFdBQU8sSUFBUDtBQUNELEdBUmdHLENBVWpHO0FBQ0E7OztBQUNBLFFBQU00QyxLQUFLLEdBQUd0QyxJQUFJLENBQUNOLElBQUQsRUFBTyxDQUFDLENBQUMsWUFBRCxFQUFlLGdCQUFmLENBQUQsQ0FBUCxDQUFsQjs7QUFDQSxNQUFJNEMsS0FBSyxLQUFLLElBQWQsRUFBb0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBTWtCLFdBQVcsR0FBR3JJLElBQUksQ0FBQ0csS0FBTCxDQUFXZ0gsS0FBSyxDQUFDbEMsRUFBakIsRUFBcUJ1QyxHQUFyQixDQUFwQjs7QUFFQSxRQUFJLENBQUNhLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQixHQUFyQixDQUFMLEVBQWdDO0FBQzlCLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsUUFBTUgsY0FBYyxHQUFHdEQsSUFBSSxDQUFDTixJQUFELEVBQU8sQ0FDaEMsQ0FBQyxRQUFELEVBQVcsZ0JBQVgsQ0FEZ0MsRUFFaEMsQ0FBQyxZQUFELEVBQWUsa0JBQWYsQ0FGZ0MsRUFHaEMsQ0FBQyxZQUFELEVBQWUsWUFBZixDQUhnQyxDQUFQLENBQTNCO0FBTUEsUUFBTTFELFdBQVcsR0FBR2dHLFNBQVMsQ0FBQ3RDLElBQUQsRUFBT3ZFLElBQVAsQ0FBN0I7O0FBRUEsTUFBSW1JLGNBQWMsS0FBSyxJQUF2QixFQUE2QjtBQUMzQjtBQUNBLFdBQU87QUFDTDFOLE1BQUFBLElBQUksRUFBRSxpQ0FERDtBQUVMb0csTUFBQUE7QUFGSyxLQUFQO0FBSUQ7O0FBRUQsUUFBTVIsVUFBVSxHQUFHMkUsV0FBVyxDQUFDbUQsY0FBRCxFQUFpQm5JLElBQWpCLENBQTlCO0FBRUEsU0FBTztBQUNMdkYsSUFBQUEsSUFBSSxFQUFFLGlDQUREO0FBRUw0RixJQUFBQSxVQUZLO0FBR0xRLElBQUFBO0FBSEssR0FBUDtBQUtELEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTMEgsWUFBVCxDQUFzQkMsSUFBdEIsRUFBa0NoQixHQUFsQyxFQUFrRTtBQUNoRSxRQUFNaUIsR0FBRyxHQUFHRCxJQUFJLENBQUNFLE1BQUwsQ0FBWWxCLEdBQVosQ0FBWjs7QUFDQSxTQUFPLElBQVAsRUFBYTtBQUNYLFFBQUlpQixHQUFHLENBQUNqSyxJQUFKLEtBQWFnSixHQUFiLElBQW9CaUIsR0FBRyxDQUFDeEQsRUFBSixLQUFXdUMsR0FBbkMsRUFBd0M7QUFDdEMsWUFBTTtBQUFFakQsUUFBQUE7QUFBRixVQUFXa0UsR0FBakI7O0FBQ0EsVUFBSWxFLElBQUksQ0FBQzlKLElBQUwsQ0FBVXNOLE9BQWQsRUFBdUI7QUFDckIsZUFBT3hELElBQVA7QUFDRDtBQUNGOztBQUVELFFBQUksQ0FBQ2tFLEdBQUcsQ0FBQ0UsSUFBSixFQUFMLEVBQWlCO0FBQ2Y7QUFDRDtBQUNGOztBQUNELFNBQU8sSUFBUDtBQUNEOztBQUVNLFNBQVMxRyxZQUFULENBQXNCakMsSUFBdEIsRUFBb0N3SCxHQUFwQyxFQUFtRTtBQUN4RTtBQUNBO0FBRUEsTUFBSXhILElBQUksS0FBSyxFQUFiLEVBQWlCO0FBQ2YsV0FBTztBQUNMdkYsTUFBQUEsSUFBSSxFQUFFO0FBREQsS0FBUDtBQUdEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRSxRQUFNK04sSUFBSSxHQUFHbkUsc0RBQUEsQ0FBYXJFLElBQWIsQ0FBYixDQWhCd0UsQ0FrQnhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBTTZJLGNBQWMsR0FBR04sWUFBWSxDQUFDQyxJQUFELEVBQU9oQixHQUFQLENBQW5DO0FBRUEsUUFBTWlCLEdBQUcsR0FBR0ksY0FBYyxJQUFJLElBQWxCLEdBQXlCQSxjQUFjLENBQUNILE1BQXhDLEdBQWlERixJQUFJLENBQUNFLE1BQUwsQ0FBWWxCLEdBQVosQ0FBN0Q7QUFDQSxRQUFNc0IsV0FBVyxHQUFHTCxHQUFHLENBQUNsRSxJQUF4QjtBQUVBLFFBQU13RSxLQUFLLEdBQUcsQ0FBQ04sR0FBRyxDQUFDbE8sSUFBTCxDQUFkOztBQUNBLFNBQU9rTyxHQUFHLENBQUNoRSxNQUFKLEVBQVAsRUFBcUI7QUFDbkJzRSxJQUFBQSxLQUFLLENBQUN2SSxJQUFOLENBQVdpSSxHQUFHLENBQUNsTyxJQUFmO0FBQ0Q7O0FBRUQsT0FBSyxJQUFJeU8sUUFBVCxJQUFxQm5ELFNBQXJCLEVBQWdDO0FBQzlCO0FBQ0E7QUFDQSxRQUFJTCxXQUFXLENBQUN3RCxRQUFRLENBQUNsRSxJQUFWLEVBQWdCaUUsS0FBaEIsQ0FBZixFQUF1QztBQUNyQyxhQUFPQyxRQUFRLENBQUNsRCxHQUFULENBQWFnRCxXQUFiLEVBQTBCOUksSUFBMUIsRUFBZ0N3SCxHQUFoQyxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRDs7Ozs7Ozs7Ozs7QUMvaEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTXBJLGNBQU4sU0FBNkJtRyxLQUE3QixDQUFtQztBQUN4QzBELEVBQUFBLFdBQVcsQ0FBQy9LLEtBQUQsRUFBZTtBQUN4QixVQUFNLHFCQUFOO0FBQ0Q7O0FBSHVDOzs7Ozs7Ozs7Ozs7QUNwQlg7QUFDL0I7QUFDQSxjQUFjLDZDQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7OztBQ056QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNnQzs7Ozs7Ozs7Ozs7O0FDdEI3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPLCtTQUFrQixJQUFJO0FBQ3ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvY29tcG9uZW50cy9tb25hY28tcXVlcnktZmllbGQvTW9uYWNvUXVlcnlGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvY29tcG9uZW50cy9tb25hY28tcXVlcnktZmllbGQvZ2V0T3ZlcnJpZGVTZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9jb21wb25lbnRzL21vbmFjby1xdWVyeS1maWVsZC9tb25hY28tY29tcGxldGlvbi1wcm92aWRlci9jb21wbGV0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9jb21wb25lbnRzL21vbmFjby1xdWVyeS1maWVsZC9tb25hY28tY29tcGxldGlvbi1wcm92aWRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy9jb21wb25lbnRzL21vbmFjby1xdWVyeS1maWVsZC9tb25hY28tY29tcGxldGlvbi1wcm92aWRlci9zaXR1YXRpb24udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvY29tcG9uZW50cy9tb25hY28tcXVlcnktZmllbGQvbW9uYWNvLWNvbXBsZXRpb24tcHJvdmlkZXIvdXRpbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vX192aXJ0dWFsX18vcmVhY3QtdXNlLXZpcnR1YWwtMDAzMjZlNzBiYS8wL2NhY2hlL3JlYWN0LXVzZS1ucG0tMTcuMy4yLWEwMzJjYmViMDEtNzM3OTQ2MGY1MS56aXAvbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS9lc20vdXNlTGF0ZXN0LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9tb25hY28tcHJvbXFsLW5wbS0xLjcuMi03ZjYxNzMzZWJlLTU0MDYxZDVjMWMuemlwL25vZGVfbW9kdWxlcy9tb25hY28tcHJvbXFsL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9tb25hY28tcHJvbXFsLW5wbS0xLjcuMi03ZjYxNzMzZWJlLTU0MDYxZDVjMWMuemlwL25vZGVfbW9kdWxlcy9tb25hY28tcHJvbXFsL3Byb21xbC9wcm9tcWwuY29udHJpYnV0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBwcm9tTGFuZ3VhZ2VEZWZpbml0aW9uIH0gZnJvbSAnbW9uYWNvLXByb21xbCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMYXRlc3QgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IHVzZVRoZW1lMiwgUmVhY3RNb25hY29FZGl0b3IsIE1vbmFjbywgbW9uYWNvVHlwZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi9Nb25hY29RdWVyeUZpZWxkUHJvcHMnO1xuaW1wb3J0IHsgZ2V0T3ZlcnJpZGVTZXJ2aWNlcyB9IGZyb20gJy4vZ2V0T3ZlcnJpZGVTZXJ2aWNlcyc7XG5pbXBvcnQgeyBnZXRDb21wbGV0aW9uUHJvdmlkZXIsIGdldFN1Z2dlc3RPcHRpb25zIH0gZnJvbSAnLi9tb25hY28tY29tcGxldGlvbi1wcm92aWRlcic7XG5cbmNvbnN0IG9wdGlvbnM6IG1vbmFjb1R5cGVzLmVkaXRvci5JU3RhbmRhbG9uZUVkaXRvckNvbnN0cnVjdGlvbk9wdGlvbnMgPSB7XG4gIGNvZGVMZW5zOiBmYWxzZSxcbiAgY29udGV4dG1lbnU6IGZhbHNlLFxuICAvLyB3ZSBuZWVkIGBmaXhlZE92ZXJmbG93V2lkZ2V0c2AgYmVjYXVzZSBvdGhlcndpc2UgaW4gZ3JhZmFuYS1kYXNoYm9hcmRzXG4gIC8vIHRoZSBwb3B1cCBpcyBjbGlwcGVkIGJ5IHRoZSBwYW5lbC12aXN1YWxpemF0aW9ucy5cbiAgZml4ZWRPdmVyZmxvd1dpZGdldHM6IHRydWUsXG4gIGZvbGRpbmc6IGZhbHNlLFxuICBmb250U2l6ZTogMTQsXG4gIGxpbmVEZWNvcmF0aW9uc1dpZHRoOiA4LCAvLyB1c2VkIGFzIFwicGFkZGluZy1sZWZ0XCJcbiAgbGluZU51bWJlcnM6ICdvZmYnLFxuICBtaW5pbWFwOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gIG92ZXJ2aWV3UnVsZXJCb3JkZXI6IGZhbHNlLFxuICBvdmVydmlld1J1bGVyTGFuZXM6IDAsXG4gIHBhZGRpbmc6IHtcbiAgICAvLyB0aGVzZSBudW1iZXJzIHdlcmUgcGlja2VkIHNvIHRoYXQgdmlzdWFsbHkgdGhpcyBtYXRjaGVzIHRoZSBwcmV2aW91cyB2ZXJzaW9uXG4gICAgLy8gb2YgdGhlIHF1ZXJ5LWVkaXRvciB0aGUgYmVzdFxuICAgIHRvcDogNCxcbiAgICBib3R0b206IDUsXG4gIH0sXG4gIHJlbmRlckxpbmVIaWdobGlnaHQ6ICdub25lJyxcbiAgc2Nyb2xsYmFyOiB7XG4gICAgdmVydGljYWw6ICdoaWRkZW4nLFxuICAgIHZlcnRpY2FsU2Nyb2xsYmFyU2l6ZTogOCwgLy8gdXNlZCBhcyBcInBhZGRpbmctcmlnaHRcIlxuICAgIGhvcml6b250YWw6ICdoaWRkZW4nLFxuICAgIGhvcml6b250YWxTY3JvbGxiYXJTaXplOiAwLFxuICB9LFxuICBzY3JvbGxCZXlvbmRMYXN0TGluZTogZmFsc2UsXG4gIHN1Z2dlc3Q6IGdldFN1Z2dlc3RPcHRpb25zKCksXG4gIHN1Z2dlc3RGb250U2l6ZTogMTIsXG4gIHdvcmRXcmFwOiAnb24nLFxufTtcblxuLy8gdGhpcyBudW1iZXIgd2FzIGNob3NlbiBieSB0ZXN0aW5nIHZhcmlvdXMgdmFsdWVzLiBpdCBtaWdodCBiZSBuZWNlc3Nhcnlcbi8vIGJlY2F1c2Ugb2YgdGhlIHdpZHRoIG9mIHRoZSBib3JkZXIsIG5vdCBzdXJlLlxuLy9pdCBuZWVkcyB0byBkbyAyIHRoaW5nczpcbi8vIDEuIHdoZW4gdGhlIGVkaXRvciBpcyBzaW5nbGUtbGluZSwgaXQgc2hvdWxkIG1ha2UgdGhlIGVkaXRvciBoZWlnaHQgYmUgdmlzdWFsbHkgY29ycmVjdFxuLy8gMi4gd2hlbiB0aGUgZWRpdG9yIGlzIG11bHRpLWxpbmUsIHRoZSBlZGl0b3Igc2hvdWxkIG5vdCBiZSBcInNjcm9sbGFibGVcIiAobWVhbmluZyxcbi8vICAgIHlvdSBkbyBhIHNjcm9sbC1tb3ZlbWVudCBpbiB0aGUgZWRpdG9yLCBhbmQgaXQgd2lsbCBzY3JvbGwgdGhlIGNvbnRlbnQgYnkgYSBjb3VwbGUgcGl4ZWxzXG4vLyAgICB1cCAmIGRvd24uIHRoaXMgd2Ugd2FudCB0byBhdm9pZClcbmNvbnN0IEVESVRPUl9IRUlHSFRfT0ZGU0VUID0gMjtcblxuY29uc3QgUFJPTVFMX0xBTkdfSUQgPSBwcm9tTGFuZ3VhZ2VEZWZpbml0aW9uLmlkO1xuXG4vLyB3ZSBtdXN0IG9ubHkgcnVuIHRoZSBwcm9tcWwtc2V0dXAgY29kZSBvbmNlXG5sZXQgUFJPTVFMX1NFVFVQX1NUQVJURUQgPSBmYWxzZTtcblxuZnVuY3Rpb24gZW5zdXJlUHJvbVFMKG1vbmFjbzogTW9uYWNvKSB7XG4gIGlmIChQUk9NUUxfU0VUVVBfU1RBUlRFRCA9PT0gZmFsc2UpIHtcbiAgICBQUk9NUUxfU0VUVVBfU1RBUlRFRCA9IHRydWU7XG4gICAgY29uc3QgeyBhbGlhc2VzLCBleHRlbnNpb25zLCBtaW1ldHlwZXMsIGxvYWRlciB9ID0gcHJvbUxhbmd1YWdlRGVmaW5pdGlvbjtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyKHsgaWQ6IFBST01RTF9MQU5HX0lELCBhbGlhc2VzLCBleHRlbnNpb25zLCBtaW1ldHlwZXMgfSk7XG5cbiAgICBsb2FkZXIoKS50aGVuKChtb2QpID0+IHtcbiAgICAgIG1vbmFjby5sYW5ndWFnZXMuc2V0TW9uYXJjaFRva2Vuc1Byb3ZpZGVyKFBST01RTF9MQU5HX0lELCBtb2QubGFuZ3VhZ2UpO1xuICAgICAgbW9uYWNvLmxhbmd1YWdlcy5zZXRMYW5ndWFnZUNvbmZpZ3VyYXRpb24oUFJPTVFMX0xBTkdfSUQsIG1vZC5sYW5ndWFnZUNvbmZpZ3VyYXRpb24pO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbXBvbmVudHMuaW5wdXQuYm9yZGVyQ29sb3J9O1xuICAgIGAsXG4gIH07XG59O1xuXG5jb25zdCBNb25hY29RdWVyeUZpZWxkID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAvLyB3ZSBuZWVkIG9ubHkgb25lIGluc3RhbmNlIG9mIGBvdmVycmlkZVNlcnZpY2VzYCBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSByZWFjdCBjb21wb25lbnRcbiAgY29uc3Qgb3ZlcnJpZGVTZXJ2aWNlc1JlZiA9IHVzZVJlZihnZXRPdmVycmlkZVNlcnZpY2VzKCkpO1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCB7IGxhbmd1YWdlUHJvdmlkZXIsIGhpc3RvcnksIG9uQmx1ciwgb25SdW5RdWVyeSwgaW5pdGlhbFZhbHVlIH0gPSBwcm9wcztcblxuICBjb25zdCBscFJlZiA9IHVzZUxhdGVzdChsYW5ndWFnZVByb3ZpZGVyKTtcbiAgY29uc3QgaGlzdG9yeVJlZiA9IHVzZUxhdGVzdChoaXN0b3J5KTtcbiAgY29uc3Qgb25SdW5RdWVyeVJlZiA9IHVzZUxhdGVzdChvblJ1blF1ZXJ5KTtcbiAgY29uc3Qgb25CbHVyUmVmID0gdXNlTGF0ZXN0KG9uQmx1cik7XG5cbiAgY29uc3QgYXV0b2NvbXBsZXRlRGlzcG9zZUZ1biA9IHVzZVJlZjwoKCkgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModGhlbWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gd2hlbiB3ZSB1bm1vdW50LCB3ZSB1bnJlZ2lzdGVyIHRoZSBhdXRvY29tcGxldGUtZnVuY3Rpb24sIGlmIGl0IHdhcyByZWdpc3RlcmVkXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGF1dG9jb21wbGV0ZURpc3Bvc2VGdW4uY3VycmVudD8uKCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUXVlcnlGaWVsZC5jb250YWluZXJ9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XG4gICAgICAvLyBOT1RFOiB3ZSB3aWxsIGJlIHNldHRpbmcgaW5saW5lLXN0eWxlLXdpZHRoL2hlaWdodCBvbiB0aGlzIGVsZW1lbnRcbiAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgID5cbiAgICAgIDxSZWFjdE1vbmFjb0VkaXRvclxuICAgICAgICBvdmVycmlkZVNlcnZpY2VzPXtvdmVycmlkZVNlcnZpY2VzUmVmLmN1cnJlbnR9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIGxhbmd1YWdlPVwicHJvbXFsXCJcbiAgICAgICAgdmFsdWU9e2luaXRpYWxWYWx1ZX1cbiAgICAgICAgYmVmb3JlTW91bnQ9eyhtb25hY28pID0+IHtcbiAgICAgICAgICBlbnN1cmVQcm9tUUwobW9uYWNvKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VudD17KGVkaXRvciwgbW9uYWNvKSA9PiB7XG4gICAgICAgICAgLy8gd2Ugc2V0dXAgb24tYmx1clxuICAgICAgICAgIGVkaXRvci5vbkRpZEJsdXJFZGl0b3JXaWRnZXQoKCkgPT4ge1xuICAgICAgICAgICAgb25CbHVyUmVmLmN1cnJlbnQoZWRpdG9yLmdldFZhbHVlKCkpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gd2UgY29uc3RydWN0IGEgRGF0YVByb3ZpZGVyIG9iamVjdFxuICAgICAgICAgIGNvbnN0IGdldFNlcmllcyA9IChzZWxlY3Rvcjogc3RyaW5nKSA9PiBscFJlZi5jdXJyZW50LmdldFNlcmllcyhzZWxlY3Rvcik7XG5cbiAgICAgICAgICBjb25zdCBnZXRIaXN0b3J5ID0gKCkgPT5cbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShoaXN0b3J5UmVmLmN1cnJlbnQubWFwKChoKSA9PiBoLnF1ZXJ5LmV4cHIpLmZpbHRlcigoZXhwcikgPT4gZXhwciAhPT0gdW5kZWZpbmVkKSk7XG5cbiAgICAgICAgICBjb25zdCBnZXRBbGxNZXRyaWNOYW1lcyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWV0cmljcywgbWV0cmljc01ldGFkYXRhIH0gPSBscFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbWV0cmljcy5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWV0YUl0ZW0gPSBtZXRyaWNzTWV0YWRhdGE/LlttXTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtLFxuICAgICAgICAgICAgICAgIGhlbHA6IG1ldGFJdGVtPy5oZWxwID8/ICcnLFxuICAgICAgICAgICAgICAgIHR5cGU6IG1ldGFJdGVtPy50eXBlID8/ICcnLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgZ2V0QWxsTGFiZWxOYW1lcyA9ICgpID0+IFByb21pc2UucmVzb2x2ZShscFJlZi5jdXJyZW50LmdldExhYmVsS2V5cygpKTtcblxuICAgICAgICAgIGNvbnN0IGdldExhYmVsVmFsdWVzID0gKGxhYmVsTmFtZTogc3RyaW5nKSA9PiBscFJlZi5jdXJyZW50LmdldExhYmVsVmFsdWVzKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICBjb25zdCBkYXRhUHJvdmlkZXIgPSB7IGdldFNlcmllcywgZ2V0SGlzdG9yeSwgZ2V0QWxsTWV0cmljTmFtZXMsIGdldEFsbExhYmVsTmFtZXMsIGdldExhYmVsVmFsdWVzIH07XG4gICAgICAgICAgY29uc3QgY29tcGxldGlvblByb3ZpZGVyID0gZ2V0Q29tcGxldGlvblByb3ZpZGVyKG1vbmFjbywgZGF0YVByb3ZpZGVyKTtcblxuICAgICAgICAgIC8vIGNvbXBsZXRpb24tcHJvdmlkZXJzIGluIG1vbmFjbyBhcmUgbm90IHJlZ2lzdGVyZWQgZGlyZWN0bHkgdG8gZWRpdG9yLWluc3RhbmNlcyxcbiAgICAgICAgICAvLyB0aGV5IGFyZSByZWdpc3RlcmVkIHRvIGxhbmd1YWdlcy4gdGhpcyBtYWtlcyBpdCBoYXJkIGZvciB1cyB0byBoYXZlXG4gICAgICAgICAgLy8gc2VwYXJhdGUgY29tcGxldGlvbi1wcm92aWRlcnMgZm9yIGV2ZXJ5IHF1ZXJ5LWZpZWxkLWluc3RhbmNlXG4gICAgICAgICAgLy8gKGJ1dCB3ZSBuZWVkIHRoYXQsIGJlY2F1c2UgdGhleSBtaWdodCBjb25uZWN0IHRvIGRpZmZlcmVudCBkYXRhc291cmNlcykuXG4gICAgICAgICAgLy8gdGhlIHRyaWNrIHdlIGRvIGlzLCB3ZSB3cmFwIHRoZSBjYWxsYmFjayBpbiBhIFwicHJveHlcIixcbiAgICAgICAgICAvLyBhbmQgaW4gdGhlIHByb3h5LCB0aGUgZmlyc3QgdGhpbmcgaXMsIHdlIGNoZWNrIGlmIHdlIGFyZSBjYWxsZWQgZnJvbVxuICAgICAgICAgIC8vIFwib3VyIGVkaXRvciBpbnN0YW5jZVwiLCBhbmQgaWYgbm90LCB3ZSBqdXN0IHJldHVybiBub3RoaW5nLiBpZiB5ZXMsXG4gICAgICAgICAgLy8gd2UgY2FsbCB0aGUgY29tcGxldGlvbi1wcm92aWRlci5cbiAgICAgICAgICBjb25zdCBmaWx0ZXJpbmdDb21wbGV0aW9uUHJvdmlkZXI6IG1vbmFjb1R5cGVzLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbVByb3ZpZGVyID0ge1xuICAgICAgICAgICAgLi4uY29tcGxldGlvblByb3ZpZGVyLFxuICAgICAgICAgICAgcHJvdmlkZUNvbXBsZXRpb25JdGVtczogKG1vZGVsLCBwb3NpdGlvbiwgY29udGV4dCwgdG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgLy8gaWYgdGhlIG1vZGVsLWlkIGRvZXMgbm90IG1hdGNoLCB0aGVuIHRoaXMgY2FsbCBpcyBmcm9tIGEgZGlmZmVyZW50IGVkaXRvci1pbnN0YW5jZSxcbiAgICAgICAgICAgICAgLy8gbm90IFwib3VyIGluc3RhbmNlXCIsIHNvIHJldHVybiBub3RoaW5nXG4gICAgICAgICAgICAgIGlmIChlZGl0b3IuZ2V0TW9kZWwoKT8uaWQgIT09IG1vZGVsLmlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbnM6IFtdIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRpb25Qcm92aWRlci5wcm92aWRlQ29tcGxldGlvbkl0ZW1zKG1vZGVsLCBwb3NpdGlvbiwgY29udGV4dCwgdG9rZW4pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgeyBkaXNwb3NlIH0gPSBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyQ29tcGxldGlvbkl0ZW1Qcm92aWRlcihcbiAgICAgICAgICAgIFBST01RTF9MQU5HX0lELFxuICAgICAgICAgICAgZmlsdGVyaW5nQ29tcGxldGlvblByb3ZpZGVyXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGF1dG9jb21wbGV0ZURpc3Bvc2VGdW4uY3VycmVudCA9IGRpc3Bvc2U7XG4gICAgICAgICAgLy8gdGhpcyBjb2RlIG1ha2VzIHRoZSBlZGl0b3IgcmVzaXplIGl0c2VsZiBzbyB0aGF0IHRoZSBjb250ZW50IGZpdHNcbiAgICAgICAgICAvLyAoaXQgd2lsbCBncm93IHRhbGxlciB3aGVuIG5lY2Vzc2FyeSlcbiAgICAgICAgICAvLyBGSVhNRTogbWF5YmUgbW92ZSB0aGlzIGZ1bmN0aW9uYWxpdHkgaW50byBDb2RlRWRpdG9yLCBsaWtlOlxuICAgICAgICAgIC8vIDxDb2RlRWRpdG9yIHJlc2l6aW5nTW9kZT1cInNpbmdsZS1saW5lXCIvPlxuICAgICAgICAgIGNvbnN0IHVwZGF0ZUVsZW1lbnRIZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWluZXJEaXYgPSBjb250YWluZXJSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmIChjb250YWluZXJEaXYgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgcGl4ZWxIZWlnaHQgPSBlZGl0b3IuZ2V0Q29udGVudEhlaWdodCgpO1xuICAgICAgICAgICAgICBjb250YWluZXJEaXYuc3R5bGUuaGVpZ2h0ID0gYCR7cGl4ZWxIZWlnaHQgKyBFRElUT1JfSEVJR0hUX09GRlNFVH1weGA7XG4gICAgICAgICAgICAgIGNvbnRhaW5lckRpdi5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgICAgY29uc3QgcGl4ZWxXaWR0aCA9IGNvbnRhaW5lckRpdi5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgZWRpdG9yLmxheW91dCh7IHdpZHRoOiBwaXhlbFdpZHRoLCBoZWlnaHQ6IHBpeGVsSGVpZ2h0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBlZGl0b3Iub25EaWRDb250ZW50U2l6ZUNoYW5nZSh1cGRhdGVFbGVtZW50SGVpZ2h0KTtcbiAgICAgICAgICB1cGRhdGVFbGVtZW50SGVpZ2h0KCk7XG5cbiAgICAgICAgICAvLyBoYW5kbGU6IHNoaWZ0ICsgZW50ZXJcbiAgICAgICAgICAvLyBGSVhNRTogbWF5YmUgbW92ZSB0aGlzIGZ1bmN0aW9uYWxpdHkgaW50byBDb2RlRWRpdG9yP1xuICAgICAgICAgIGVkaXRvci5hZGRDb21tYW5kKG1vbmFjby5LZXlNb2QuU2hpZnQgfCBtb25hY28uS2V5Q29kZS5FbnRlciwgKCkgPT4ge1xuICAgICAgICAgICAgb25SdW5RdWVyeVJlZi5jdXJyZW50KGVkaXRvci5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8qIFNvbWV0aGluZyBpbiB0aGlzIGNvbmZpZ3VyYXRpb24gb2YgbW9uYWNvIGRvZXNuJ3QgYnViYmxlIHVwIFttb2RdK0ssIHdoaWNoIHRoZSBcbiAgICAgICAgICBjb21tYW5kIHBhbGV0dGUgdXNlcy4gUGFzcyB0aGUgZXZlbnQgb3V0IG9mIG1vbmFjbyBtYW51YWxseVxuICAgICAgICAgICovXG4gICAgICAgICAgZWRpdG9yLmFkZENvbW1hbmQobW9uYWNvLktleU1vZC5DdHJsQ21kIHwgbW9uYWNvLktleUNvZGUuS2V5SywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZ2xvYmFsLmRpc3BhdGNoRXZlbnQobmV3IEtleWJvYXJkRXZlbnQoJ2tleWRvd24nLCB7IGtleTogJ2snLCBtZXRhS2V5OiB0cnVlIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG4vLyB3ZSB3aWxsIGxhenktbG9hZCB0aGlzIG1vZHVsZSB1c2luZyBSZWFjdC5sYXp5LFxuLy8gYW5kIHRoYXQgb25seSBzdXBwb3J0cyBkZWZhdWx0LWV4cG9ydHMsXG4vLyBzbyB3ZSBoYXZlIHRvIGRlZmF1bHQtZXhwb3J0IHRoaXMsIGV2ZW4gaWZcbi8vIGl0IGlzIGFnYWluc3QgdGhlIHN0eWxlLWd1aWRlbGluZXMuXG5cbmV4cG9ydCBkZWZhdWx0IE1vbmFjb1F1ZXJ5RmllbGQ7XG4iLCJpbXBvcnQgeyBtb25hY29UeXBlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuLy8gdGhpcyB0aGluZyBoZXJlIGlzIGEgd29ya2Fyb3VuZCBpbiBhIHdheS5cbi8vIHdoYXQgd2Ugd2FudCB0byBhY2hpZXZlLCBpcyB0aGF0IHdoZW4gdGhlIGF1dG9jb21wbGV0ZS13aW5kb3dcbi8vIG9wZW5zLCB0aGUgXCJzZWNvbmQsIGV4dHJhIHBvcHVwXCIgd2l0aCB0aGUgZXh0cmEgaGVscCxcbi8vIGFsc28gb3BlbnMgYXV0b21hdGljYWxseS5cbi8vIGJ1dCB0aGVyZSBpcyBubyBBUEkgdG8gYWNoaWV2ZSBpdC5cbi8vIHRoZSB3YXkgdG8gZG8gaXQgaXMgdG8gaW1wbGVtZW50IHRoZSBgc3RvcmFnZVNlcnZpY2VgXG4vLyBpbnRlcmZhY2UsIGFuZCBwcm92aWRlIG91ciBjdXN0b20gaW1wbGVtZW50YXRpb24sXG4vLyB3aGljaCB3aWxsIGRlZmF1bHQgdG8gYHRydWVgIGZvciB0aGUgY29ycmVjdCBzdHJpbmcta2V5LlxuLy8gdW5mb3J0dW5hdGVseSwgd2hpbGUgdGhlIHR5cGVzY3JpcHQtaW50ZXJmYWNlIGV4aXN0cyxcbi8vIGl0IGlzIG5vdCBleHBvcnRlZCBmcm9tIG1vbmFjby1lZGl0b3IsXG4vLyBzbyB3ZSBjYW5ub3QgcmVseSBvbiB0eXBlc2NyaXB0IHRvIG1ha2Ugc3VyZVxuLy8gd2UgZG8gaXQgcmlnaHQuIGFsbCB3ZSBjYW4gZG8gaXMgdG8gbWFudWFsbHlcbi8vIGxvb2t1cCB0aGUgaW50ZXJmYWNlLCBhbmQgbWFrZSBzdXJlIHdlIGNvZGUgb3VyIGNvZGUgcmlnaHQuXG4vLyBvdXIgY29kZSBpcyBhIFwiYmVzdCBlZmZvcnRcIiBhcHByb2FjaCxcbi8vIGkgYW0gbm90IDEwMCUgaG93IHRoZSBgc2NvcGVgIGFuZCBgdGFyZ2V0YCB0aGluZ3Mgd29yayxcbi8vIGJ1dCBzbyBmYXIgaXQgc2VlbXMgdG8gd29yayBvay5cbi8vIGkgd291bGQgdXNlIGFuIGFub3RoZXIgYXBwcm9hY2gsIGlmIHRoZXJlIHdhcyBvbmUgYXZhaWxhYmxlLlxuXG5mdW5jdGlvbiBtYWtlU3RvcmFnZVNlcnZpY2UoKSB7XG4gIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGFuIG9iamVjdCB0aGF0IGZ1bGZpbGxzIHRoaXMgaW50ZXJmYWNlOlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3ZzY29kZS9ibG9iL2ZmMWUxNmVlYmI5M2FmNzlmZDZkN2FmMTM1NmM0MDAzYTEyMGM1NjMvc3JjL3ZzL3BsYXRmb3JtL3N0b3JhZ2UvY29tbW9uL3N0b3JhZ2UudHMjTDM3XG4gIC8vIHVuZm9ydHVuYXRlbHkgaXQgaXMgbm90IGV4cG9ydCBmcm9tIG1vbmFjby1lZGl0b3JcblxuICBjb25zdCBzdHJpbmdzID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuICAvLyB3ZSB3YW50IHRoaXMgdG8gYmUgdHJ1ZSBieSBkZWZhdWx0XG4gIHN0cmluZ3Muc2V0KCdleHBhbmRTdWdnZXN0aW9uRG9jcycsIHRydWUudG9TdHJpbmcoKSk7XG5cbiAgcmV0dXJuIHtcbiAgICAvLyB3ZSBkbyBub3QgaW1wbGVtZW50IHRoZSBvbiogaGFuZGxlcnNcbiAgICBvbkRpZENoYW5nZVZhbHVlOiAoZGF0YTogdW5rbm93bik6IHZvaWQgPT4gdW5kZWZpbmVkLFxuICAgIG9uRGlkQ2hhbmdlVGFyZ2V0OiAoZGF0YTogdW5rbm93bik6IHZvaWQgPT4gdW5kZWZpbmVkLFxuICAgIG9uV2lsbFNhdmVTdGF0ZTogKGRhdGE6IHVua25vd24pOiB2b2lkID0+IHVuZGVmaW5lZCxcblxuICAgIGdldDogKGtleTogc3RyaW5nLCBzY29wZTogdW5rbm93biwgZmFsbGJhY2tWYWx1ZT86IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICByZXR1cm4gc3RyaW5ncy5nZXQoa2V5KSA/PyBmYWxsYmFja1ZhbHVlO1xuICAgIH0sXG5cbiAgICBnZXRCb29sZWFuOiAoa2V5OiBzdHJpbmcsIHNjb3BlOiB1bmtub3duLCBmYWxsYmFja1ZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4gfCB1bmRlZmluZWQgPT4ge1xuICAgICAgY29uc3QgdmFsID0gc3RyaW5ncy5nZXQoa2V5KTtcbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyB0aGUgaW50ZXJmYWNlLWRvY3Mgc2F5IHRoZSB2YWx1ZSB3aWxsIGJlIGNvbnZlcnRlZFxuICAgICAgICAvLyB0byBhIGJvb2xlYW4gYnV0IGRvIG5vdCBzcGVjaWZ5IGhvdywgc28gd2UgaW1wcm92aXNlXG4gICAgICAgIHJldHVybiB2YWwgPT09ICd0cnVlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxsYmFja1ZhbHVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXROdW1iZXI6IChrZXk6IHN0cmluZywgc2NvcGU6IHVua25vd24sIGZhbGxiYWNrVmFsdWU/OiBudW1iZXIpOiBudW1iZXIgfCB1bmRlZmluZWQgPT4ge1xuICAgICAgY29uc3QgdmFsID0gc3RyaW5ncy5nZXQoa2V5KTtcbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsLCAxMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2tWYWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcmU6IChcbiAgICAgIGtleTogc3RyaW5nLFxuICAgICAgdmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsLFxuICAgICAgc2NvcGU6IHVua25vd24sXG4gICAgICB0YXJnZXQ6IHVua25vd25cbiAgICApOiB2b2lkID0+IHtcbiAgICAgIC8vIHRoZSBpbnRlcmZhY2UtZG9jcyBzYXkgaWYgdGhlIHZhbHVlIGlzIG51bGxpc2gsIGl0IHNob3VsZCBhY3QgYXMgZGVsZXRlXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdHJpbmdzLmRlbGV0ZShrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyaW5ncy5zZXQoa2V5LCB2YWx1ZS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVtb3ZlOiAoa2V5OiBzdHJpbmcsIHNjb3BlOiB1bmtub3duKTogdm9pZCA9PiB7XG4gICAgICBzdHJpbmdzLmRlbGV0ZShrZXkpO1xuICAgIH0sXG5cbiAgICBrZXlzOiAoc2NvcGU6IHVua25vd24sIHRhcmdldDogdW5rbm93bik6IHN0cmluZ1tdID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHN0cmluZ3Mua2V5cygpKTtcbiAgICB9LFxuXG4gICAgbG9nU3RvcmFnZTogKCk6IHZvaWQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2xvZ1N0b3JhZ2U6IG5vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH0sXG5cbiAgICBtaWdyYXRlOiAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAvLyB3ZSBkbyBub3QgaW1wbGVtZW50IHRoaXNcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcbiAgICB9LFxuXG4gICAgaXNOZXc6IChzY29wZTogdW5rbm93bik6IGJvb2xlYW4gPT4ge1xuICAgICAgLy8gd2UgY3JlYXRlIGEgbmV3IHN0b3JhZ2UgZm9yIGV2ZXJ5IHNlc3Npb24sIHdlIGRvIG5vdCBwZXJzaXN0IGl0LFxuICAgICAgLy8gc28gd2UgcmV0dXJuIGB0cnVlYC5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBmbHVzaDogKHJlYXNvbj86IHVua25vd24pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgIC8vIHdlIGRvIG5vdCBpbXBsZW1lbnQgdGhpc1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIH0sXG4gIH07XG59XG5cbmxldCBvdmVycmlkZVNlcnZpY2VzOiBtb25hY29UeXBlcy5lZGl0b3IuSUVkaXRvck92ZXJyaWRlU2VydmljZXMgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE92ZXJyaWRlU2VydmljZXMoKTogbW9uYWNvVHlwZXMuZWRpdG9yLklFZGl0b3JPdmVycmlkZVNlcnZpY2VzIHtcbiAgLy8gb25seSBoYXZlIG9uZSBpbnN0YW5jZSBvZiB0aGlzIGZvciBldmVyeSBxdWVyeSBlZGl0b3JcbiAgaWYgKG92ZXJyaWRlU2VydmljZXMgPT09IG51bGwpIHtcbiAgICBvdmVycmlkZVNlcnZpY2VzID0ge1xuICAgICAgc3RvcmFnZVNlcnZpY2U6IG1ha2VTdG9yYWdlU2VydmljZSgpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gb3ZlcnJpZGVTZXJ2aWNlcztcbn1cbiIsImltcG9ydCB7IGVzY2FwZUxhYmVsVmFsdWVJbkV4YWN0U2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9sYW5ndWFnZV91dGlscyc7XG5pbXBvcnQgeyBGVU5DVElPTlMgfSBmcm9tICcuLi8uLi8uLi9wcm9tcWwnO1xuXG5pbXBvcnQgdHlwZSB7IFNpdHVhdGlvbiwgTGFiZWwgfSBmcm9tICcuL3NpdHVhdGlvbic7XG5pbXBvcnQgeyBOZXZlckNhc2VFcnJvciB9IGZyb20gJy4vdXRpbCc7XG4vLyBGSVhNRTogd2Ugc2hvdWxkIG5vdCBsb2FkIHRoaXMgZnJvbSB0aGUgXCJvdXRzaWRlXCIsIGJ1dCB3ZSBjYW5ub3QgZG8gdGhhdCB3aGlsZSB3ZSBoYXZlIHRoZSBcIm9sZFwiIHF1ZXJ5LWZpZWxkIHRvb1xuXG5leHBvcnQgdHlwZSBDb21wbGV0aW9uVHlwZSA9ICdISVNUT1JZJyB8ICdGVU5DVElPTicgfCAnTUVUUklDX05BTUUnIHwgJ0RVUkFUSU9OJyB8ICdMQUJFTF9OQU1FJyB8ICdMQUJFTF9WQUxVRSc7XG5cbnR5cGUgQ29tcGxldGlvbiA9IHtcbiAgdHlwZTogQ29tcGxldGlvblR5cGU7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGluc2VydFRleHQ6IHN0cmluZztcbiAgZGV0YWlsPzogc3RyaW5nO1xuICBkb2N1bWVudGF0aW9uPzogc3RyaW5nO1xuICB0cmlnZ2VyT25JbnNlcnQ/OiBib29sZWFuO1xufTtcblxudHlwZSBNZXRyaWMgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgaGVscDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBEYXRhUHJvdmlkZXIgPSB7XG4gIGdldEhpc3Rvcnk6ICgpID0+IFByb21pc2U8c3RyaW5nW10+O1xuICBnZXRBbGxNZXRyaWNOYW1lczogKCkgPT4gUHJvbWlzZTxNZXRyaWNbXT47XG4gIGdldEFsbExhYmVsTmFtZXM6ICgpID0+IFByb21pc2U8c3RyaW5nW10+O1xuICBnZXRMYWJlbFZhbHVlczogKGxhYmVsTmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcbiAgZ2V0U2VyaWVzOiAoc2VsZWN0b3I6IHN0cmluZykgPT4gUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4+O1xufTtcblxuLy8gd2Ugb3JkZXIgaXRlbXMgbGlrZTogaGlzdG9yeSwgZnVuY3Rpb25zLCBtZXRyaWNzXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbE1ldHJpY05hbWVzQ29tcGxldGlvbnMoZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXIpOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICBjb25zdCBtZXRyaWNzID0gYXdhaXQgZGF0YVByb3ZpZGVyLmdldEFsbE1ldHJpY05hbWVzKCk7XG4gIHJldHVybiBtZXRyaWNzLm1hcCgobWV0cmljKSA9PiAoe1xuICAgIHR5cGU6ICdNRVRSSUNfTkFNRScsXG4gICAgbGFiZWw6IG1ldHJpYy5uYW1lLFxuICAgIGluc2VydFRleHQ6IG1ldHJpYy5uYW1lLFxuICAgIGRldGFpbDogYCR7bWV0cmljLm5hbWV9IDogJHttZXRyaWMudHlwZX1gLFxuICAgIGRvY3VtZW50YXRpb246IG1ldHJpYy5oZWxwLFxuICB9KSk7XG59XG5cbmNvbnN0IEZVTkNUSU9OX0NPTVBMRVRJT05TOiBDb21wbGV0aW9uW10gPSBGVU5DVElPTlMubWFwKChmKSA9PiAoe1xuICB0eXBlOiAnRlVOQ1RJT04nLFxuICBsYWJlbDogZi5sYWJlbCxcbiAgaW5zZXJ0VGV4dDogZi5pbnNlcnRUZXh0ID8/ICcnLCAvLyBpIGRvbid0IGtub3cgd2hhdCB0byBkbyB3aGVuIHRoaXMgaXMgbnVsbGlzaC4gaXQgc2hvdWxkIG5vdCBiZS5cbiAgZGV0YWlsOiBmLmRldGFpbCxcbiAgZG9jdW1lbnRhdGlvbjogZi5kb2N1bWVudGF0aW9uLFxufSkpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxGdW5jdGlvbnNBbmRNZXRyaWNOYW1lc0NvbXBsZXRpb25zKGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyKTogUHJvbWlzZTxDb21wbGV0aW9uW10+IHtcbiAgY29uc3QgbWV0cmljTmFtZXMgPSBhd2FpdCBnZXRBbGxNZXRyaWNOYW1lc0NvbXBsZXRpb25zKGRhdGFQcm92aWRlcik7XG4gIHJldHVybiBbLi4uRlVOQ1RJT05fQ09NUExFVElPTlMsIC4uLm1ldHJpY05hbWVzXTtcbn1cblxuY29uc3QgRFVSQVRJT05fQ09NUExFVElPTlM6IENvbXBsZXRpb25bXSA9IFtcbiAgJyRfX2ludGVydmFsJyxcbiAgJyRfX3JhbmdlJyxcbiAgJyRfX3JhdGVfaW50ZXJ2YWwnLFxuICAnMW0nLFxuICAnNW0nLFxuICAnMTBtJyxcbiAgJzMwbScsXG4gICcxaCcsXG4gICcxZCcsXG5dLm1hcCgodGV4dCkgPT4gKHtcbiAgdHlwZTogJ0RVUkFUSU9OJyxcbiAgbGFiZWw6IHRleHQsXG4gIGluc2VydFRleHQ6IHRleHQsXG59KSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFsbEhpc3RvcnlDb21wbGV0aW9ucyhkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlcik6IFByb21pc2U8Q29tcGxldGlvbltdPiB7XG4gIC8vIGZ1bmN0aW9uIGdldEFsbEhpc3RvcnlDb21wbGV0aW9ucyhxdWVyeUhpc3Rvcnk6IFByb21IaXN0b3J5SXRlbVtdKTogQ29tcGxldGlvbltdIHtcbiAgLy8gTk9URTogdGhlIHR5cGVzY3JpcHQgdHlwZXMgYXJlIHdyb25nLiBoaXN0b3J5SXRlbS5xdWVyeS5leHByIGNhbiBiZSB1bmRlZmluZWRcbiAgY29uc3QgYWxsSGlzdG9yeSA9IGF3YWl0IGRhdGFQcm92aWRlci5nZXRIaXN0b3J5KCk7XG4gIC8vIEZJWE1FOiBmaW5kIGEgYmV0dGVyIGhpc3RvcnktbGltaXRcbiAgcmV0dXJuIGFsbEhpc3Rvcnkuc2xpY2UoMCwgMTApLm1hcCgoZXhwcikgPT4gKHtcbiAgICB0eXBlOiAnSElTVE9SWScsXG4gICAgbGFiZWw6IGV4cHIsXG4gICAgaW5zZXJ0VGV4dDogZXhwcixcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBtYWtlU2VsZWN0b3IobWV0cmljTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBsYWJlbHM6IExhYmVsW10pOiBzdHJpbmcge1xuICBjb25zdCBhbGxMYWJlbHMgPSBbLi4ubGFiZWxzXTtcblxuICAvLyB3ZSB0cmFuc2Zvcm0gdGhlIG1ldHJpY05hbWUgdG8gYSBsYWJlbCwgaWYgaXQgZXhpc3RzXG4gIGlmIChtZXRyaWNOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBhbGxMYWJlbHMucHVzaCh7IG5hbWU6ICdfX25hbWVfXycsIHZhbHVlOiBtZXRyaWNOYW1lLCBvcDogJz0nIH0pO1xuICB9XG5cbiAgY29uc3QgYWxsTGFiZWxUZXh0cyA9IGFsbExhYmVscy5tYXAoXG4gICAgKGxhYmVsKSA9PiBgJHtsYWJlbC5uYW1lfSR7bGFiZWwub3B9XCIke2VzY2FwZUxhYmVsVmFsdWVJbkV4YWN0U2VsZWN0b3IobGFiZWwudmFsdWUpfVwiYFxuICApO1xuXG4gIHJldHVybiBgeyR7YWxsTGFiZWxUZXh0cy5qb2luKCcsJyl9fWA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExhYmVsTmFtZXMoXG4gIG1ldHJpYzogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBvdGhlckxhYmVsczogTGFiZWxbXSxcbiAgZGF0YVByb3ZpZGVyOiBEYXRhUHJvdmlkZXJcbik6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgaWYgKG1ldHJpYyA9PT0gdW5kZWZpbmVkICYmIG90aGVyTGFiZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGZpbHRlcmluZywgd2UgaGF2ZSB0byB1c2UgYSBzcGVjaWFsIGVuZHBvaW50XG4gICAgcmV0dXJuIGRhdGFQcm92aWRlci5nZXRBbGxMYWJlbE5hbWVzKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBtYWtlU2VsZWN0b3IobWV0cmljLCBvdGhlckxhYmVscyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRhdGFQcm92aWRlci5nZXRTZXJpZXMoc2VsZWN0b3IpO1xuICAgIGNvbnN0IHBvc3NpYmxlTGFiZWxOYW1lcyA9IE9iamVjdC5rZXlzKGRhdGEpOyAvLyBhbGwgbmFtZXMgZnJvbSBwcm9tZXRoZXVzXG4gICAgY29uc3QgdXNlZExhYmVsTmFtZXMgPSBuZXcgU2V0KG90aGVyTGFiZWxzLm1hcCgobCkgPT4gbC5uYW1lKSk7IC8vIG5hbWVzIHVzZWQgaW4gdGhlIHF1ZXJ5XG4gICAgcmV0dXJuIHBvc3NpYmxlTGFiZWxOYW1lcy5maWx0ZXIoKGwpID0+ICF1c2VkTGFiZWxOYW1lcy5oYXMobCkpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExhYmVsTmFtZXNGb3JDb21wbGV0aW9ucyhcbiAgbWV0cmljOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHN1ZmZpeDogc3RyaW5nLFxuICB0cmlnZ2VyT25JbnNlcnQ6IGJvb2xlYW4sXG4gIG90aGVyTGFiZWxzOiBMYWJlbFtdLFxuICBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlclxuKTogUHJvbWlzZTxDb21wbGV0aW9uW10+IHtcbiAgY29uc3QgbGFiZWxOYW1lcyA9IGF3YWl0IGdldExhYmVsTmFtZXMobWV0cmljLCBvdGhlckxhYmVscywgZGF0YVByb3ZpZGVyKTtcbiAgcmV0dXJuIGxhYmVsTmFtZXMubWFwKCh0ZXh0KSA9PiAoe1xuICAgIHR5cGU6ICdMQUJFTF9OQU1FJyxcbiAgICBsYWJlbDogdGV4dCxcbiAgICBpbnNlcnRUZXh0OiBgJHt0ZXh0fSR7c3VmZml4fWAsXG4gICAgdHJpZ2dlck9uSW5zZXJ0LFxuICB9KSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldExhYmVsTmFtZXNGb3JTZWxlY3RvckNvbXBsZXRpb25zKFxuICBtZXRyaWM6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgb3RoZXJMYWJlbHM6IExhYmVsW10sXG4gIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyXG4pOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICByZXR1cm4gZ2V0TGFiZWxOYW1lc0ZvckNvbXBsZXRpb25zKG1ldHJpYywgJz0nLCB0cnVlLCBvdGhlckxhYmVscywgZGF0YVByb3ZpZGVyKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldExhYmVsTmFtZXNGb3JCeUNvbXBsZXRpb25zKFxuICBtZXRyaWM6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgb3RoZXJMYWJlbHM6IExhYmVsW10sXG4gIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyXG4pOiBQcm9taXNlPENvbXBsZXRpb25bXT4ge1xuICByZXR1cm4gZ2V0TGFiZWxOYW1lc0ZvckNvbXBsZXRpb25zKG1ldHJpYywgJycsIGZhbHNlLCBvdGhlckxhYmVscywgZGF0YVByb3ZpZGVyKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGFiZWxWYWx1ZXMoXG4gIG1ldHJpYzogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBsYWJlbE5hbWU6IHN0cmluZyxcbiAgb3RoZXJMYWJlbHM6IExhYmVsW10sXG4gIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyXG4pOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gIGlmIChtZXRyaWMgPT09IHVuZGVmaW5lZCAmJiBvdGhlckxhYmVscy5sZW5ndGggPT09IDApIHtcbiAgICAvLyBpZiB0aGVyZSBpcyBubyBmaWx0ZXJpbmcsIHdlIGhhdmUgdG8gdXNlIGEgc3BlY2lhbCBlbmRwb2ludFxuICAgIHJldHVybiBkYXRhUHJvdmlkZXIuZ2V0TGFiZWxWYWx1ZXMobGFiZWxOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IG1ha2VTZWxlY3RvcihtZXRyaWMsIG90aGVyTGFiZWxzKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGF0YVByb3ZpZGVyLmdldFNlcmllcyhzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGRhdGFbbGFiZWxOYW1lXSA/PyBbXTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRMYWJlbFZhbHVlc0Zvck1ldHJpY0NvbXBsZXRpb25zKFxuICBtZXRyaWM6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgbGFiZWxOYW1lOiBzdHJpbmcsXG4gIGJldHdlZW5RdW90ZXM6IGJvb2xlYW4sXG4gIG90aGVyTGFiZWxzOiBMYWJlbFtdLFxuICBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlclxuKTogUHJvbWlzZTxDb21wbGV0aW9uW10+IHtcbiAgY29uc3QgdmFsdWVzID0gYXdhaXQgZ2V0TGFiZWxWYWx1ZXMobWV0cmljLCBsYWJlbE5hbWUsIG90aGVyTGFiZWxzLCBkYXRhUHJvdmlkZXIpO1xuICByZXR1cm4gdmFsdWVzLm1hcCgodGV4dCkgPT4gKHtcbiAgICB0eXBlOiAnTEFCRUxfVkFMVUUnLFxuICAgIGxhYmVsOiB0ZXh0LFxuICAgIGluc2VydFRleHQ6IGJldHdlZW5RdW90ZXMgPyB0ZXh0IDogYFwiJHt0ZXh0fVwiYCwgLy8gRklYTUU6IGVzY2FwaW5nIHN0cmFuZ2UgY2hhcmFjdGVycz9cbiAgfSkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcGxldGlvbnMoc2l0dWF0aW9uOiBTaXR1YXRpb24sIGRhdGFQcm92aWRlcjogRGF0YVByb3ZpZGVyKTogUHJvbWlzZTxDb21wbGV0aW9uW10+IHtcbiAgc3dpdGNoIChzaXR1YXRpb24udHlwZSkge1xuICAgIGNhc2UgJ0lOX0RVUkFUSU9OJzpcbiAgICAgIHJldHVybiBEVVJBVElPTl9DT01QTEVUSU9OUztcbiAgICBjYXNlICdJTl9GVU5DVElPTic6XG4gICAgICByZXR1cm4gZ2V0QWxsRnVuY3Rpb25zQW5kTWV0cmljTmFtZXNDb21wbGV0aW9ucyhkYXRhUHJvdmlkZXIpO1xuICAgIGNhc2UgJ0FUX1JPT1QnOiB7XG4gICAgICByZXR1cm4gZ2V0QWxsRnVuY3Rpb25zQW5kTWV0cmljTmFtZXNDb21wbGV0aW9ucyhkYXRhUHJvdmlkZXIpO1xuICAgIH1cbiAgICBjYXNlICdFTVBUWSc6IHtcbiAgICAgIGNvbnN0IG1ldHJpY05hbWVzID0gYXdhaXQgZ2V0QWxsTWV0cmljTmFtZXNDb21wbGV0aW9ucyhkYXRhUHJvdmlkZXIpO1xuICAgICAgY29uc3QgaGlzdG9yeUNvbXBsZXRpb25zID0gYXdhaXQgZ2V0QWxsSGlzdG9yeUNvbXBsZXRpb25zKGRhdGFQcm92aWRlcik7XG4gICAgICByZXR1cm4gWy4uLmhpc3RvcnlDb21wbGV0aW9ucywgLi4uRlVOQ1RJT05fQ09NUExFVElPTlMsIC4uLm1ldHJpY05hbWVzXTtcbiAgICB9XG4gICAgY2FzZSAnSU5fTEFCRUxfU0VMRUNUT1JfTk9fTEFCRUxfTkFNRSc6XG4gICAgICByZXR1cm4gZ2V0TGFiZWxOYW1lc0ZvclNlbGVjdG9yQ29tcGxldGlvbnMoc2l0dWF0aW9uLm1ldHJpY05hbWUsIHNpdHVhdGlvbi5vdGhlckxhYmVscywgZGF0YVByb3ZpZGVyKTtcbiAgICBjYXNlICdJTl9HUk9VUElORyc6XG4gICAgICByZXR1cm4gZ2V0TGFiZWxOYW1lc0ZvckJ5Q29tcGxldGlvbnMoc2l0dWF0aW9uLm1ldHJpY05hbWUsIHNpdHVhdGlvbi5vdGhlckxhYmVscywgZGF0YVByb3ZpZGVyKTtcbiAgICBjYXNlICdJTl9MQUJFTF9TRUxFQ1RPUl9XSVRIX0xBQkVMX05BTUUnOlxuICAgICAgcmV0dXJuIGdldExhYmVsVmFsdWVzRm9yTWV0cmljQ29tcGxldGlvbnMoXG4gICAgICAgIHNpdHVhdGlvbi5tZXRyaWNOYW1lLFxuICAgICAgICBzaXR1YXRpb24ubGFiZWxOYW1lLFxuICAgICAgICBzaXR1YXRpb24uYmV0d2VlblF1b3RlcyxcbiAgICAgICAgc2l0dWF0aW9uLm90aGVyTGFiZWxzLFxuICAgICAgICBkYXRhUHJvdmlkZXJcbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBOZXZlckNhc2VFcnJvcihzaXR1YXRpb24pO1xuICB9XG59XG4iLCJpbXBvcnQgdHlwZSB7IE1vbmFjbywgbW9uYWNvVHlwZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldENvbXBsZXRpb25zLCBEYXRhUHJvdmlkZXIsIENvbXBsZXRpb25UeXBlIH0gZnJvbSAnLi9jb21wbGV0aW9ucyc7XG5pbXBvcnQgeyBnZXRTaXR1YXRpb24gfSBmcm9tICcuL3NpdHVhdGlvbic7XG5pbXBvcnQgeyBOZXZlckNhc2VFcnJvciB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdWdnZXN0T3B0aW9ucygpOiBtb25hY29UeXBlcy5lZGl0b3IuSVN1Z2dlc3RPcHRpb25zIHtcbiAgcmV0dXJuIHtcbiAgICAvLyBtb25hY28tZWRpdG9yIHNvbWV0aW1lcyBwcm92aWRlcyBzdWdnZXN0aW9ucyBhdXRvbWF0aWNhbGx5LCBpIGFtIG5vdFxuICAgIC8vIHN1cmUgYmFzZWQgb24gd2hhdCwgc2VlbXMgdG8gYmUgYnkgYW5hbHl6aW5nIHRoZSB3b3JkcyBhbHJlYWR5XG4gICAgLy8gd3JpdHRlbi5cbiAgICAvLyB0byB0cnkgaXQgb3V0OlxuICAgIC8vIC0gZW50ZXIgYGdvX2dvcm91dGluZXN7am9ifmBcbiAgICAvLyAtIGhhdmUgdGhlIGN1cnNvciBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmdcbiAgICAvLyAtIHByZXNzIGN0cmwtZW50ZXJcbiAgICAvLyAtIHlvdSB3aWxsIGdldCB0d28gc3VnZ2VzdGlvbnNcbiAgICAvLyB0aG9zZSB3ZXJlIG5vdCBwcm92aWRlZCBieSBncmFmYW5hLCB0aGV5IGFyZSBvZmZlcmVkIGF1dG9tYXRpY2FsbHkuXG4gICAgLy8gaSB3YW50IHRvIHJlbW92ZSB0aG9zZS4gdGhlIG9ubHkgd2F5IGkgZm91bmQgaXM6XG4gICAgLy8gLSBldmVyeSBzdWdnZXN0aW9uLWl0ZW0gaGFzIGEgYGtpbmRgIGF0dHJpYnV0ZSxcbiAgICAvLyAgIHRoYXQgY29udHJvbHMgdGhlIGljb24gdG8gdGhlIGxlZnQgb2YgdGhlIHN1Z2dlc3Rpb24uXG4gICAgLy8gLSBpdGVtcyBhdXRvLWdlbmVyYXRlZCBieSBtb25hY28gaGF2ZSBga2luZGAgc2V0IHRvIGB0ZXh0YC5cbiAgICAvLyAtIHdlIG1ha2Ugc3VyZSBncmFmYW5hLXByb3ZpZGVkIHN1Z2dlc3Rpb25zIGRvIG5vdCBoYXZlIGBraW5kYCBzZXQgdG8gYHRleHRgLlxuICAgIC8vIC0gYW5kIHRoZW4gd2UgdGVsbCBtb25hY28gbm90IHRvIHNob3cgc3VnZ2VzdGlvbnMgb2Yga2luZCBgdGV4dGBcbiAgICBzaG93V29yZHM6IGZhbHNlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRNb25hY29Db21wbGV0aW9uSXRlbUtpbmQodHlwZTogQ29tcGxldGlvblR5cGUsIG1vbmFjbzogTW9uYWNvKTogbW9uYWNvVHlwZXMubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZCB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ0RVUkFUSU9OJzpcbiAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5Vbml0O1xuICAgIGNhc2UgJ0ZVTkNUSU9OJzpcbiAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5WYXJpYWJsZTtcbiAgICBjYXNlICdISVNUT1JZJzpcbiAgICAgIHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtS2luZC5TbmlwcGV0O1xuICAgIGNhc2UgJ0xBQkVMX05BTUUnOlxuICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkVudW07XG4gICAgY2FzZSAnTEFCRUxfVkFMVUUnOlxuICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkVudW1NZW1iZXI7XG4gICAgY2FzZSAnTUVUUklDX05BTUUnOlxuICAgICAgcmV0dXJuIG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kLkNvbnN0cnVjdG9yO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgTmV2ZXJDYXNlRXJyb3IodHlwZSk7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21wbGV0aW9uUHJvdmlkZXIoXG4gIG1vbmFjbzogTW9uYWNvLFxuICBkYXRhUHJvdmlkZXI6IERhdGFQcm92aWRlclxuKTogbW9uYWNvVHlwZXMubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtUHJvdmlkZXIge1xuICBjb25zdCBwcm92aWRlQ29tcGxldGlvbkl0ZW1zID0gKFxuICAgIG1vZGVsOiBtb25hY29UeXBlcy5lZGl0b3IuSVRleHRNb2RlbCxcbiAgICBwb3NpdGlvbjogbW9uYWNvVHlwZXMuUG9zaXRpb25cbiAgKTogbW9uYWNvVHlwZXMubGFuZ3VhZ2VzLlByb3ZpZGVyUmVzdWx0PG1vbmFjb1R5cGVzLmxhbmd1YWdlcy5Db21wbGV0aW9uTGlzdD4gPT4ge1xuICAgIGNvbnN0IHdvcmQgPSBtb2RlbC5nZXRXb3JkQXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgY29uc3QgcmFuZ2UgPVxuICAgICAgd29yZCAhPSBudWxsXG4gICAgICAgID8gbW9uYWNvLlJhbmdlLmxpZnQoe1xuICAgICAgICAgICAgc3RhcnRMaW5lTnVtYmVyOiBwb3NpdGlvbi5saW5lTnVtYmVyLFxuICAgICAgICAgICAgZW5kTGluZU51bWJlcjogcG9zaXRpb24ubGluZU51bWJlcixcbiAgICAgICAgICAgIHN0YXJ0Q29sdW1uOiB3b3JkLnN0YXJ0Q29sdW1uLFxuICAgICAgICAgICAgZW5kQ29sdW1uOiB3b3JkLmVuZENvbHVtbixcbiAgICAgICAgICB9KVxuICAgICAgICA6IG1vbmFjby5SYW5nZS5mcm9tUG9zaXRpb25zKHBvc2l0aW9uKTtcbiAgICAvLyBkb2N1bWVudGF0aW9uIHNheXMgYHBvc2l0aW9uYCB3aWxsIGJlIFwiYWRqdXN0ZWRcIiBpbiBgZ2V0T2Zmc2V0QXRgXG4gICAgLy8gaSBkb24ndCBrbm93IHdoYXQgdGhhdCBtZWFucywgdG8gYmUgc3VyZSBpIGNsb25lIGl0XG4gICAgY29uc3QgcG9zaXRpb25DbG9uZSA9IHtcbiAgICAgIGNvbHVtbjogcG9zaXRpb24uY29sdW1uLFxuICAgICAgbGluZU51bWJlcjogcG9zaXRpb24ubGluZU51bWJlcixcbiAgICB9O1xuICAgIGNvbnN0IG9mZnNldCA9IG1vZGVsLmdldE9mZnNldEF0KHBvc2l0aW9uQ2xvbmUpO1xuICAgIGNvbnN0IHNpdHVhdGlvbiA9IGdldFNpdHVhdGlvbihtb2RlbC5nZXRWYWx1ZSgpLCBvZmZzZXQpO1xuICAgIGNvbnN0IGNvbXBsZXRpb25zUHJvbWlzZSA9IHNpdHVhdGlvbiAhPSBudWxsID8gZ2V0Q29tcGxldGlvbnMoc2l0dWF0aW9uLCBkYXRhUHJvdmlkZXIpIDogUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICByZXR1cm4gY29tcGxldGlvbnNQcm9taXNlLnRoZW4oKGl0ZW1zKSA9PiB7XG4gICAgICAvLyBtb25hY28gYnktZGVmYXVsdCBhbHBoYWJldGljYWxseSBvcmRlcnMgdGhlIGl0ZW1zLlxuICAgICAgLy8gdG8gc3RvcCBpdCwgd2UgdXNlIGEgbnVtYmVyLWFzLXN0cmluZyBzb3J0a2V5LFxuICAgICAgLy8gc28gdGhhdCBtb25hY28ga2VlcHMgdGhlIG9yZGVyIHdlIHVzZVxuICAgICAgY29uc3QgbWF4SW5kZXhEaWdpdHMgPSBpdGVtcy5sZW5ndGgudG9TdHJpbmcoKS5sZW5ndGg7XG4gICAgICBjb25zdCBzdWdnZXN0aW9uczogbW9uYWNvVHlwZXMubGFuZ3VhZ2VzLkNvbXBsZXRpb25JdGVtW10gPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgICAgICBraW5kOiBnZXRNb25hY29Db21wbGV0aW9uSXRlbUtpbmQoaXRlbS50eXBlLCBtb25hY28pLFxuICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgaW5zZXJ0VGV4dDogaXRlbS5pbnNlcnRUZXh0LFxuICAgICAgICBkZXRhaWw6IGl0ZW0uZGV0YWlsLFxuICAgICAgICBkb2N1bWVudGF0aW9uOiBpdGVtLmRvY3VtZW50YXRpb24sXG4gICAgICAgIHNvcnRUZXh0OiBpbmRleC50b1N0cmluZygpLnBhZFN0YXJ0KG1heEluZGV4RGlnaXRzLCAnMCcpLCAvLyB0byBmb3JjZSB0aGUgb3JkZXIgd2UgaGF2ZVxuICAgICAgICByYW5nZSxcbiAgICAgICAgY29tbWFuZDogaXRlbS50cmlnZ2VyT25JbnNlcnRcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgaWQ6ICdlZGl0b3IuYWN0aW9uLnRyaWdnZXJTdWdnZXN0JyxcbiAgICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbnMgfTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHRyaWdnZXJDaGFyYWN0ZXJzOiBbJ3snLCAnLCcsICdbJywgJygnLCAnPScsICd+JywgJyAnLCAnXCInXSxcbiAgICBwcm92aWRlQ29tcGxldGlvbkl0ZW1zLFxuICB9O1xufVxuIiwiaW1wb3J0IHR5cGUgeyBUcmVlLCBTeW50YXhOb2RlIH0gZnJvbSAnQGxlemVyL2NvbW1vbic7XG5pbXBvcnQgeyBwYXJzZXIgfSBmcm9tICdsZXplci1wcm9tcWwnO1xuXG5pbXBvcnQgeyBOZXZlckNhc2VFcnJvciB9IGZyb20gJy4vdXRpbCc7XG5cbnR5cGUgRGlyZWN0aW9uID0gJ3BhcmVudCcgfCAnZmlyc3RDaGlsZCcgfCAnbGFzdENoaWxkJyB8ICduZXh0U2libGluZyc7XG50eXBlIE5vZGVUeXBlTmFtZSA9XG4gIHwgJ+KaoCcgLy8gdGhpcyBpcyB1c2VkIGFzIGVycm9yLW5hbWVcbiAgfCAnQWdncmVnYXRlRXhwcidcbiAgfCAnQWdncmVnYXRlTW9kaWZpZXInXG4gIHwgJ0Z1bmN0aW9uQ2FsbEJvZHknXG4gIHwgJ0dyb3VwaW5nTGFiZWxzJ1xuICB8ICdJZGVudGlmaWVyJ1xuICB8ICdMYWJlbE1hdGNoZXInXG4gIHwgJ0xhYmVsTWF0Y2hlcnMnXG4gIHwgJ0xhYmVsTWF0Y2hMaXN0J1xuICB8ICdMYWJlbE5hbWUnXG4gIHwgJ01ldHJpY0lkZW50aWZpZXInXG4gIHwgJ1Byb21RTCdcbiAgfCAnU3RyaW5nTGl0ZXJhbCdcbiAgfCAnVmVjdG9yU2VsZWN0b3InXG4gIHwgJ01hdHJpeFNlbGVjdG9yJ1xuICB8ICdNYXRjaE9wJ1xuICB8ICdFcWxTaW5nbGUnXG4gIHwgJ05lcSdcbiAgfCAnRXFsUmVnZXgnXG4gIHwgJ05lcVJlZ2V4JztcblxudHlwZSBQYXRoID0gQXJyYXk8W0RpcmVjdGlvbiwgTm9kZVR5cGVOYW1lXT47XG5cbmZ1bmN0aW9uIG1vdmUobm9kZTogU3ludGF4Tm9kZSwgZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiBTeW50YXhOb2RlIHwgbnVsbCB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSAncGFyZW50JzpcbiAgICAgIHJldHVybiBub2RlLnBhcmVudDtcbiAgICBjYXNlICdmaXJzdENoaWxkJzpcbiAgICAgIHJldHVybiBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgY2FzZSAnbGFzdENoaWxkJzpcbiAgICAgIHJldHVybiBub2RlLmxhc3RDaGlsZDtcbiAgICBjYXNlICduZXh0U2libGluZyc6XG4gICAgICByZXR1cm4gbm9kZS5uZXh0U2libGluZztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IE5ldmVyQ2FzZUVycm9yKGRpcmVjdGlvbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gd2Fsayhub2RlOiBTeW50YXhOb2RlLCBwYXRoOiBQYXRoKTogU3ludGF4Tm9kZSB8IG51bGwge1xuICBsZXQgY3VycmVudDogU3ludGF4Tm9kZSB8IG51bGwgPSBub2RlO1xuICBmb3IgKGNvbnN0IFtkaXJlY3Rpb24sIGV4cGVjdGVkVHlwZV0gb2YgcGF0aCkge1xuICAgIGN1cnJlbnQgPSBtb3ZlKGN1cnJlbnQsIGRpcmVjdGlvbik7XG4gICAgaWYgKGN1cnJlbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGNvdWxkIG5vdCBtb3ZlIGluIHRoZSBkaXJlY3Rpb24sIHdlIHN0b3BcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoY3VycmVudC50eXBlLm5hbWUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgLy8gdGhlIHJlYWNoZWQgbm9kZSBoYXMgd3JvbmcgdHlwZSwgd2Ugc3RvcFxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiBjdXJyZW50O1xufVxuXG5mdW5jdGlvbiBnZXROb2RlVGV4dChub2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdGV4dC5zbGljZShub2RlLmZyb20sIG5vZGUudG8pO1xufVxuXG5mdW5jdGlvbiBwYXJzZVByb21RTFN0cmluZ0xpdGVyYWwodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gaWYgaXQgaXMgYSBzdHJpbmctbGl0ZXJhbCwgaXQgaXMgaW5zaWRlIHF1b3RlcyBvZiBzb21lIGtpbmRcbiAgY29uc3QgaW5zaWRlID0gdGV4dC5zbGljZSgxLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuXG4gIC8vIEZJWE1FOiBzdXBwb3J0IGh0dHBzOi8vcHJvbWV0aGV1cy5pby9kb2NzL3Byb21ldGhldXMvbGF0ZXN0L3F1ZXJ5aW5nL2Jhc2ljcy8jc3RyaW5nLWxpdGVyYWxzXG4gIC8vIEZJWE1FOiBtYXliZSBjaGVjayBvdGhlciBwcm9tcWwgY29kZSwgaWYgYWxsIGlzIHN1cHBvcnRlZCBvciBub3RcblxuICAvLyBmb3Igbm93IHdlIGRvIG9ubHkgc29tZSB2ZXJ5IHNpbXBsZSB1bi1lc2NhcGluZ1xuXG4gIC8vIHdlIHN0YXJ0IHdpdGggZG91YmxlLXF1b3Rlc1xuICBpZiAodGV4dC5zdGFydHNXaXRoKCdcIicpICYmIHRleHQuZW5kc1dpdGgoJ1wiJykpIHtcbiAgICAvLyBOT1RFOiB0aGlzIGlzIG5vdCAxMDAlIHBlcmZlY3QsIHdlIG9ubHkgdW5lc2NhcGUgdGhlIGRvdWJsZS1xdW90ZSxcbiAgICAvLyB0aGVyZSBtaWdodCBiZSBvdGhlciBjaGFyYWN0ZXJzIHRvb1xuICAgIHJldHVybiBpbnNpZGUucmVwbGFjZSgvXFxcXFwiLywgJ1wiJyk7XG4gIH1cblxuICAvLyB0aGVuIHNpbmdsZS1xdW90ZVxuICBpZiAodGV4dC5zdGFydHNXaXRoKFwiJ1wiKSAmJiB0ZXh0LmVuZHNXaXRoKFwiJ1wiKSkge1xuICAgIC8vIE5PVEU6IHRoaXMgaXMgbm90IDEwMCUgcGVyZmVjdCwgd2Ugb25seSB1bmVzY2FwZSB0aGUgc2luZ2xlLXF1b3RlLFxuICAgIC8vIHRoZXJlIG1pZ2h0IGJlIG90aGVyIGNoYXJhY3RlcnMgdG9vXG4gICAgcmV0dXJuIGluc2lkZS5yZXBsYWNlKC9cXFxcJy8sIFwiJ1wiKTtcbiAgfVxuXG4gIC8vIHRoZW4gYmFja3RpY2tzXG4gIGlmICh0ZXh0LnN0YXJ0c1dpdGgoJ2AnKSAmJiB0ZXh0LmVuZHNXaXRoKCdgJykpIHtcbiAgICByZXR1cm4gaW5zaWRlO1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdGSVhNRTogaW52YWxpZCBzdHJpbmcgbGl0ZXJhbCcpO1xufVxuXG50eXBlIExhYmVsT3BlcmF0b3IgPSAnPScgfCAnIT0nIHwgJz1+JyB8ICchfic7XG5cbmV4cG9ydCB0eXBlIExhYmVsID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9wOiBMYWJlbE9wZXJhdG9yO1xufTtcblxuZXhwb3J0IHR5cGUgU2l0dWF0aW9uID1cbiAgfCB7XG4gICAgICB0eXBlOiAnSU5fRlVOQ1RJT04nO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiAnQVRfUk9PVCc7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdFTVBUWSc7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdJTl9EVVJBVElPTic7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6ICdJTl9MQUJFTF9TRUxFQ1RPUl9OT19MQUJFTF9OQU1FJztcbiAgICAgIG1ldHJpY05hbWU/OiBzdHJpbmc7XG4gICAgICBvdGhlckxhYmVsczogTGFiZWxbXTtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogJ0lOX0dST1VQSU5HJztcbiAgICAgIG1ldHJpY05hbWU6IHN0cmluZztcbiAgICAgIG90aGVyTGFiZWxzOiBMYWJlbFtdO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiAnSU5fTEFCRUxfU0VMRUNUT1JfV0lUSF9MQUJFTF9OQU1FJztcbiAgICAgIG1ldHJpY05hbWU/OiBzdHJpbmc7XG4gICAgICBsYWJlbE5hbWU6IHN0cmluZztcbiAgICAgIGJldHdlZW5RdW90ZXM6IGJvb2xlYW47XG4gICAgICBvdGhlckxhYmVsczogTGFiZWxbXTtcbiAgICB9O1xuXG50eXBlIFJlc29sdmVyID0ge1xuICBwYXRoOiBOb2RlVHlwZU5hbWVbXTtcbiAgZnVuOiAobm9kZTogU3ludGF4Tm9kZSwgdGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcikgPT4gU2l0dWF0aW9uIHwgbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGlzUGF0aE1hdGNoKHJlc29sdmVyUGF0aDogc3RyaW5nW10sIGN1cnNvclBhdGg6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gIHJldHVybiByZXNvbHZlclBhdGguZXZlcnkoKGl0ZW0sIGluZGV4KSA9PiBpdGVtID09PSBjdXJzb3JQYXRoW2luZGV4XSk7XG59XG5cbmNvbnN0IEVSUk9SX05PREVfTkFNRTogTm9kZVR5cGVOYW1lID0gJ+KaoCc7IC8vIHRoaXMgaXMgdXNlZCBhcyBlcnJvci1uYW1lXG5cbmNvbnN0IFJFU09MVkVSUzogUmVzb2x2ZXJbXSA9IFtcbiAge1xuICAgIHBhdGg6IFsnTGFiZWxNYXRjaGVycycsICdWZWN0b3JTZWxlY3RvciddLFxuICAgIGZ1bjogcmVzb2x2ZUxhYmVsS2V5c1dpdGhFcXVhbHMsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBbJ1Byb21RTCddLFxuICAgIGZ1bjogcmVzb2x2ZVRvcExldmVsLFxuICB9LFxuICB7XG4gICAgcGF0aDogWydGdW5jdGlvbkNhbGxCb2R5J10sXG4gICAgZnVuOiByZXNvbHZlSW5GdW5jdGlvbixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFsnU3RyaW5nTGl0ZXJhbCcsICdMYWJlbE1hdGNoZXInXSxcbiAgICBmdW46IHJlc29sdmVMYWJlbE1hdGNoZXIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBbRVJST1JfTk9ERV9OQU1FLCAnTGFiZWxNYXRjaGVyJ10sXG4gICAgZnVuOiByZXNvbHZlTGFiZWxNYXRjaGVyLFxuICB9LFxuICB7XG4gICAgcGF0aDogW0VSUk9SX05PREVfTkFNRSwgJ01hdHJpeFNlbGVjdG9yJ10sXG4gICAgZnVuOiByZXNvbHZlRHVyYXRpb25zLFxuICB9LFxuICB7XG4gICAgcGF0aDogWydHcm91cGluZ0xhYmVscyddLFxuICAgIGZ1bjogcmVzb2x2ZUxhYmVsc0Zvckdyb3VwaW5nLFxuICB9LFxuXTtcblxuY29uc3QgTEFCRUxfT1BfTUFQID0gbmV3IE1hcDxzdHJpbmcsIExhYmVsT3BlcmF0b3I+KFtcbiAgWydFcWxTaW5nbGUnLCAnPSddLFxuICBbJ0VxbFJlZ2V4JywgJz1+J10sXG4gIFsnTmVxJywgJyE9J10sXG4gIFsnTmVxUmVnZXgnLCAnIX4nXSxcbl0pO1xuXG5mdW5jdGlvbiBnZXRMYWJlbE9wKG9wTm9kZTogU3ludGF4Tm9kZSk6IExhYmVsT3BlcmF0b3IgfCBudWxsIHtcbiAgY29uc3Qgb3BDaGlsZCA9IG9wTm9kZS5maXJzdENoaWxkO1xuICBpZiAob3BDaGlsZCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIExBQkVMX09QX01BUC5nZXQob3BDaGlsZC5uYW1lKSA/PyBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRMYWJlbChsYWJlbE1hdGNoZXJOb2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcpOiBMYWJlbCB8IG51bGwge1xuICBpZiAobGFiZWxNYXRjaGVyTm9kZS50eXBlLm5hbWUgIT09ICdMYWJlbE1hdGNoZXInKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBuYW1lTm9kZSA9IHdhbGsobGFiZWxNYXRjaGVyTm9kZSwgW1snZmlyc3RDaGlsZCcsICdMYWJlbE5hbWUnXV0pO1xuXG4gIGlmIChuYW1lTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgb3BOb2RlID0gd2FsayhuYW1lTm9kZSwgW1snbmV4dFNpYmxpbmcnLCAnTWF0Y2hPcCddXSk7XG4gIGlmIChvcE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG9wID0gZ2V0TGFiZWxPcChvcE5vZGUpO1xuICBpZiAob3AgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlTm9kZSA9IHdhbGsobGFiZWxNYXRjaGVyTm9kZSwgW1snbGFzdENoaWxkJywgJ1N0cmluZ0xpdGVyYWwnXV0pO1xuXG4gIGlmICh2YWx1ZU5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG5hbWUgPSBnZXROb2RlVGV4dChuYW1lTm9kZSwgdGV4dCk7XG4gIGNvbnN0IHZhbHVlID0gcGFyc2VQcm9tUUxTdHJpbmdMaXRlcmFsKGdldE5vZGVUZXh0KHZhbHVlTm9kZSwgdGV4dCkpO1xuXG4gIHJldHVybiB7IG5hbWUsIHZhbHVlLCBvcCB9O1xufVxuZnVuY3Rpb24gZ2V0TGFiZWxzKGxhYmVsTWF0Y2hlcnNOb2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcpOiBMYWJlbFtdIHtcbiAgaWYgKGxhYmVsTWF0Y2hlcnNOb2RlLnR5cGUubmFtZSAhPT0gJ0xhYmVsTWF0Y2hlcnMnKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgbGV0IGxpc3ROb2RlOiBTeW50YXhOb2RlIHwgbnVsbCA9IHdhbGsobGFiZWxNYXRjaGVyc05vZGUsIFtbJ2ZpcnN0Q2hpbGQnLCAnTGFiZWxNYXRjaExpc3QnXV0pO1xuXG4gIGNvbnN0IGxhYmVsczogTGFiZWxbXSA9IFtdO1xuXG4gIHdoaWxlIChsaXN0Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1hdGNoZXJOb2RlID0gd2FsayhsaXN0Tm9kZSwgW1snbGFzdENoaWxkJywgJ0xhYmVsTWF0Y2hlciddXSk7XG4gICAgaWYgKG1hdGNoZXJOb2RlID09PSBudWxsKSB7XG4gICAgICAvLyB1bmV4cGVjdGVkLCB3ZSBzdG9wXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgbGFiZWwgPSBnZXRMYWJlbChtYXRjaGVyTm9kZSwgdGV4dCk7XG4gICAgaWYgKGxhYmVsICE9PSBudWxsKSB7XG4gICAgICBsYWJlbHMucHVzaChsYWJlbCk7XG4gICAgfVxuXG4gICAgLy8gdGhlcmUgbWlnaHQgYmUgbW9yZSBsYWJlbHNcbiAgICBsaXN0Tm9kZSA9IHdhbGsobGlzdE5vZGUsIFtbJ2ZpcnN0Q2hpbGQnLCAnTGFiZWxNYXRjaExpc3QnXV0pO1xuICB9XG5cbiAgLy8gb3VyIGxhYmVscy1saXN0IGlzIGxhc3QtZmlyc3QsIHNvIHdlIHJldmVyc2UgaXRcbiAgbGFiZWxzLnJldmVyc2UoKTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5mdW5jdGlvbiBnZXROb2RlQ2hpbGRyZW4obm9kZTogU3ludGF4Tm9kZSk6IFN5bnRheE5vZGVbXSB7XG4gIGxldCBjaGlsZDogU3ludGF4Tm9kZSB8IG51bGwgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gIGNvbnN0IGNoaWxkcmVuOiBTeW50YXhOb2RlW10gPSBbXTtcbiAgd2hpbGUgKGNoaWxkICE9PSBudWxsKSB7XG4gICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgY2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgfVxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVJblN1YnRyZWUobm9kZTogU3ludGF4Tm9kZSwgdHlwZU5hbWU6IE5vZGVUeXBlTmFtZSk6IFN5bnRheE5vZGUgfCBudWxsIHtcbiAgLy8gZmlyc3Qgd2UgdHJ5IHRoZSBjdXJyZW50IG5vZGVcbiAgaWYgKG5vZGUudHlwZS5uYW1lID09PSB0eXBlTmFtZSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgLy8gdGhlbiB3ZSB0cnkgdGhlIGNoaWxkcmVuXG4gIGNvbnN0IGNoaWxkcmVuID0gZ2V0Tm9kZUNoaWxkcmVuKG5vZGUpO1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgY29uc3QgbiA9IGdldE5vZGVJblN1YnRyZWUoY2hpbGQsIHR5cGVOYW1lKTtcbiAgICBpZiAobiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMYWJlbHNGb3JHcm91cGluZyhub2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcsIHBvczogbnVtYmVyKTogU2l0dWF0aW9uIHwgbnVsbCB7XG4gIGNvbnN0IGFnZ3JFeHBOb2RlID0gd2Fsayhub2RlLCBbXG4gICAgWydwYXJlbnQnLCAnQWdncmVnYXRlTW9kaWZpZXInXSxcbiAgICBbJ3BhcmVudCcsICdBZ2dyZWdhdGVFeHByJ10sXG4gIF0pO1xuICBpZiAoYWdnckV4cE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBib2R5Tm9kZSA9IGFnZ3JFeHBOb2RlLmdldENoaWxkKCdGdW5jdGlvbkNhbGxCb2R5Jyk7XG4gIGlmIChib2R5Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbWV0cmljSWROb2RlID0gZ2V0Tm9kZUluU3VidHJlZShib2R5Tm9kZSwgJ01ldHJpY0lkZW50aWZpZXInKTtcbiAgaWYgKG1ldHJpY0lkTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaWROb2RlID0gd2FsayhtZXRyaWNJZE5vZGUsIFtbJ2ZpcnN0Q2hpbGQnLCAnSWRlbnRpZmllciddXSk7XG4gIGlmIChpZE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IG1ldHJpY05hbWUgPSBnZXROb2RlVGV4dChpZE5vZGUsIHRleHQpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdJTl9HUk9VUElORycsXG4gICAgbWV0cmljTmFtZSxcbiAgICBvdGhlckxhYmVsczogW10sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMYWJlbE1hdGNoZXIobm9kZTogU3ludGF4Tm9kZSwgdGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcik6IFNpdHVhdGlvbiB8IG51bGwge1xuICAvLyB3ZSBjYW4gYXJyaXZlIGhlcmUgaW4gdHdvIHNpdHVhdGlvbi4gYG5vZGVgIGlzIGVpdGhlcjpcbiAgLy8gLSBhIFN0cmluZ05vZGUgKGxpa2UgaW4gYHtqb2I9XCJeXCJ9YClcbiAgLy8gLSBvciBhbiBlcnJvciBub2RlIChsaWtlIGluIGB7am9iPV59YClcbiAgY29uc3QgaW5TdHJpbmdOb2RlID0gIW5vZGUudHlwZS5pc0Vycm9yO1xuXG4gIGNvbnN0IHBhcmVudCA9IHdhbGsobm9kZSwgW1sncGFyZW50JywgJ0xhYmVsTWF0Y2hlciddXSk7XG4gIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGxhYmVsTmFtZU5vZGUgPSB3YWxrKHBhcmVudCwgW1snZmlyc3RDaGlsZCcsICdMYWJlbE5hbWUnXV0pO1xuICBpZiAobGFiZWxOYW1lTm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gZ2V0Tm9kZVRleHQobGFiZWxOYW1lTm9kZSwgdGV4dCk7XG5cbiAgLy8gbm93IHdlIG5lZWQgdG8gZ28gdXAsIHRvIHRoZSBwYXJlbnQgb2YgTGFiZWxNYXRjaGVyLFxuICAvLyB0aGVyZSBjYW4gYmUgb25lIG9yIG1hbnkgYExhYmVsTWF0Y2hMaXN0YCBwYXJlbnRzLCB3ZSBoYXZlXG4gIC8vIHRvIGdvIHRocm91Z2ggYWxsIG9mIHRoZW1cblxuICBjb25zdCBmaXJzdExpc3ROb2RlID0gd2FsayhwYXJlbnQsIFtbJ3BhcmVudCcsICdMYWJlbE1hdGNoTGlzdCddXSk7XG4gIGlmIChmaXJzdExpc3ROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgbGlzdE5vZGUgPSBmaXJzdExpc3ROb2RlO1xuXG4gIC8vIHdlIGtlZXAgZ29pbmcgdGhyb3VnaCB0aGUgcGFyZW50LW5vZGVzXG4gIC8vIGFzIGxvbmcgYXMgdGhleSBhcmUgTGFiZWxNYXRjaExpc3QuXG4gIC8vIGFzIHNvb24gYXMgd2UgcmVhd2NoIExhYmVsTWF0Y2hlcnMsIHdlIHN0b3BcbiAgbGV0IGxhYmVsTWF0Y2hlcnNOb2RlOiBTeW50YXhOb2RlIHwgbnVsbCA9IG51bGw7XG4gIHdoaWxlIChsYWJlbE1hdGNoZXJzTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHAgPSBsaXN0Tm9kZS5wYXJlbnQ7XG4gICAgaWYgKHAgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZSB9ID0gcC50eXBlO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlICdMYWJlbE1hdGNoTGlzdCc6XG4gICAgICAgIC8vd2Uga2VlcCBsb29waW5nXG4gICAgICAgIGxpc3ROb2RlID0gcDtcbiAgICAgICAgY29udGludWU7XG4gICAgICBjYXNlICdMYWJlbE1hdGNoZXJzJzpcbiAgICAgICAgLy8gd2UgcmVhY2hlZCB0aGUgZW5kLCB3ZSBjYW4gc3RvcCB0aGUgbG9vcFxuICAgICAgICBsYWJlbE1hdGNoZXJzTm9kZSA9IHA7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gd2UgcmVhY2hlZCBzb21lIG90aGVyIG5vZGUsIHdlIHN0b3BcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gbm93IHdlIG5lZWQgdG8gZmluZCB0aGUgb3RoZXIgbmFtZXNcbiAgY29uc3QgYWxsTGFiZWxzID0gZ2V0TGFiZWxzKGxhYmVsTWF0Y2hlcnNOb2RlLCB0ZXh0KTtcblxuICAvLyB3ZSBuZWVkIHRvIHJlbW92ZSBcIm91clwiIGxhYmVsIGZyb20gYWxsLWxhYmVscywgaWYgaXQgaXMgaW4gdGhlcmVcbiAgY29uc3Qgb3RoZXJMYWJlbHMgPSBhbGxMYWJlbHMuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwubmFtZSAhPT0gbGFiZWxOYW1lKTtcblxuICBjb25zdCBtZXRyaWNOYW1lTm9kZSA9IHdhbGsobGFiZWxNYXRjaGVyc05vZGUsIFtcbiAgICBbJ3BhcmVudCcsICdWZWN0b3JTZWxlY3RvciddLFxuICAgIFsnZmlyc3RDaGlsZCcsICdNZXRyaWNJZGVudGlmaWVyJ10sXG4gICAgWydmaXJzdENoaWxkJywgJ0lkZW50aWZpZXInXSxcbiAgXSk7XG5cbiAgaWYgKG1ldHJpY05hbWVOb2RlID09PSBudWxsKSB7XG4gICAgLy8gd2UgYXJlIHByb2JhYmx5IGluIGEgc2l0dWF0aW9uIHdpdGhvdXQgYSBtZXRyaWMgbmFtZVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnSU5fTEFCRUxfU0VMRUNUT1JfV0lUSF9MQUJFTF9OQU1FJyxcbiAgICAgIGxhYmVsTmFtZSxcbiAgICAgIGJldHdlZW5RdW90ZXM6IGluU3RyaW5nTm9kZSxcbiAgICAgIG90aGVyTGFiZWxzLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBtZXRyaWNOYW1lID0gZ2V0Tm9kZVRleHQobWV0cmljTmFtZU5vZGUsIHRleHQpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0lOX0xBQkVMX1NFTEVDVE9SX1dJVEhfTEFCRUxfTkFNRScsXG4gICAgbWV0cmljTmFtZSxcbiAgICBsYWJlbE5hbWUsXG4gICAgYmV0d2VlblF1b3RlczogaW5TdHJpbmdOb2RlLFxuICAgIG90aGVyTGFiZWxzLFxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVG9wTGV2ZWwobm9kZTogU3ludGF4Tm9kZSwgdGV4dDogc3RyaW5nLCBwb3M6IG51bWJlcik6IFNpdHVhdGlvbiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0FUX1JPT1QnLFxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlSW5GdW5jdGlvbihub2RlOiBTeW50YXhOb2RlLCB0ZXh0OiBzdHJpbmcsIHBvczogbnVtYmVyKTogU2l0dWF0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnSU5fRlVOQ1RJT04nLFxuICB9O1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRHVyYXRpb25zKG5vZGU6IFN5bnRheE5vZGUsIHRleHQ6IHN0cmluZywgcG9zOiBudW1iZXIpOiBTaXR1YXRpb24ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdJTl9EVVJBVElPTicsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHN1YlRyZWVIYXNFcnJvcihub2RlOiBTeW50YXhOb2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiBnZXROb2RlSW5TdWJ0cmVlKG5vZGUsIEVSUk9SX05PREVfTkFNRSkgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMYWJlbEtleXNXaXRoRXF1YWxzKG5vZGU6IFN5bnRheE5vZGUsIHRleHQ6IHN0cmluZywgcG9zOiBudW1iZXIpOiBTaXR1YXRpb24gfCBudWxsIHtcbiAgLy8gZm9yIGV4YW1wbGUgYHNvbWV0aGluZ3tefWBcblxuICAvLyB0aGVyZSBhcmUgc29tZSBmYWxzZSBwb3NpdGl2ZXMgdGhhdCBjYW4gZW5kIHVwIGluIHRoaXMgc2l0dWF0aW9uLCB0aGF0IHdlIHdhbnRcbiAgLy8gdG8gZWxpbWluYXRlOlxuICAvLyBgc29tZXRoaW5ne2F+Xn1gIChpZiB0aGlzIHN1YnRyZWUgY29udGFpbnMgYW55IGVycm9yLW5vZGUsIHdlIHN0b3ApXG4gIGlmIChzdWJUcmVlSGFzRXJyb3Iobm9kZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIG5leHQgZmFsc2UgcG9zaXRpdmU6XG4gIC8vIGBzb21ldGhpbmd7YT1cIjFcIl59YFxuICBjb25zdCBjaGlsZCA9IHdhbGsobm9kZSwgW1snZmlyc3RDaGlsZCcsICdMYWJlbE1hdGNoTGlzdCddXSk7XG4gIGlmIChjaGlsZCAhPT0gbnVsbCkge1xuICAgIC8vIG1lYW5zIHRoZSBsYWJlbC1tYXRjaGluZyBwYXJ0IGNvbnRhaW5zIGF0IGxlYXN0IG9uZSBsYWJlbCBhbHJlYWR5LlxuICAgIC8vXG4gICAgLy8gaW4gdGhpcyBjYXNlLCB3ZSB3aWxsIG5lZWQgdG8gaGF2ZSBhIGAsYCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCxcbiAgICAvLyB0byBiZSBhYmxlIHRvIHN1Z2dlc3QgYWRkaW5nIHRoZSBuZXh0IGxhYmVsLlxuICAgIC8vIHRoZSBhcmVhIGJldHdlZW4gdGhlIGVuZC1vZi10aGUtY2hpbGQtbm9kZSBhbmQgdGhlIGN1cnNvci1wb3NcbiAgICAvLyBtdXN0IGNvbnRhaW4gYSBgLGAgaW4gdGhpcyBjYXNlLlxuICAgIGNvbnN0IHRleHRUb0NoZWNrID0gdGV4dC5zbGljZShjaGlsZC50bywgcG9zKTtcblxuICAgIGlmICghdGV4dFRvQ2hlY2suaW5jbHVkZXMoJywnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgbWV0cmljTmFtZU5vZGUgPSB3YWxrKG5vZGUsIFtcbiAgICBbJ3BhcmVudCcsICdWZWN0b3JTZWxlY3RvciddLFxuICAgIFsnZmlyc3RDaGlsZCcsICdNZXRyaWNJZGVudGlmaWVyJ10sXG4gICAgWydmaXJzdENoaWxkJywgJ0lkZW50aWZpZXInXSxcbiAgXSk7XG5cbiAgY29uc3Qgb3RoZXJMYWJlbHMgPSBnZXRMYWJlbHMobm9kZSwgdGV4dCk7XG5cbiAgaWYgKG1ldHJpY05hbWVOb2RlID09PSBudWxsKSB7XG4gICAgLy8gd2UgYXJlIHByb2JhYmx5IGluIGEgc2l0dWF0aW9uIHdpdGhvdXQgYSBtZXRyaWMgbmFtZS5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ0lOX0xBQkVMX1NFTEVDVE9SX05PX0xBQkVMX05BTUUnLFxuICAgICAgb3RoZXJMYWJlbHMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG1ldHJpY05hbWUgPSBnZXROb2RlVGV4dChtZXRyaWNOYW1lTm9kZSwgdGV4dCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnSU5fTEFCRUxfU0VMRUNUT1JfTk9fTEFCRUxfTkFNRScsXG4gICAgbWV0cmljTmFtZSxcbiAgICBvdGhlckxhYmVscyxcbiAgfTtcbn1cblxuLy8gd2UgZmluZCB0aGUgZmlyc3QgZXJyb3Itbm9kZSBpbiB0aGUgdHJlZSB0aGF0IGlzIGF0IHRoZSBjdXJzb3ItcG9zaXRpb24uXG4vLyBOT1RFOiB0aGlzIG1pZ2h0IGJlIHRvbyBzbG93LCBtaWdodCBuZWVkIHRvIG9wdGltaXplIGl0XG4vLyAoaWRlYXM6IHdlIGRvIG5vdCBuZWVkIHRvIGdvIGludG8gZXZlcnkgc3VidHJlZSwgYmFzZWQgb24gZnJvbS90bylcbi8vIGFsc28sIG9ubHkgZ28gdG8gcGxhY2VzIHRoYXQgYXJlIGluIHRoZSBzdWItdHJlZSBvZiB0aGUgbm9kZSBmb3VuZFxuLy8gYnkgZGVmYXVsdCBieSBsZXplci4gcHJvYmxlbSBpcywgYG5leHQoKWAgd2lsbCBnbyB1cHdhcmQgdG9vLFxuLy8gYW5kIHdlIGRvIG5vdCB3YW50IHRvIGdvIGhpZ2hlciB0aGFuIG91ciBub2RlXG5mdW5jdGlvbiBnZXRFcnJvck5vZGUodHJlZTogVHJlZSwgcG9zOiBudW1iZXIpOiBTeW50YXhOb2RlIHwgbnVsbCB7XG4gIGNvbnN0IGN1ciA9IHRyZWUuY3Vyc29yKHBvcyk7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaWYgKGN1ci5mcm9tID09PSBwb3MgJiYgY3VyLnRvID09PSBwb3MpIHtcbiAgICAgIGNvbnN0IHsgbm9kZSB9ID0gY3VyO1xuICAgICAgaWYgKG5vZGUudHlwZS5pc0Vycm9yKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY3VyLm5leHQoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l0dWF0aW9uKHRleHQ6IHN0cmluZywgcG9zOiBudW1iZXIpOiBTaXR1YXRpb24gfCBudWxsIHtcbiAgLy8gdGhlcmUgaXMgYSBzcGVjaWFsLWNhc2Ugd2hlbiB3ZSBhcmUgYXQgdGhlIHN0YXJ0IG9mIHdyaXRpbmcgdGV4dCxcbiAgLy8gc28gd2UgaGFuZGxlIHRoYXQgY2FzZSBmaXJzdFxuXG4gIGlmICh0ZXh0ID09PSAnJykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnRU1QVFknLFxuICAgIH07XG4gIH1cblxuICAvKlxuXHRQcm9tUUxcbkV4cHJcblZlY3RvclNlbGVjdG9yXG5MYWJlbE1hdGNoZXJzXG4qL1xuICBjb25zdCB0cmVlID0gcGFyc2VyLnBhcnNlKHRleHQpO1xuXG4gIC8vIGlmIHRoZSB0cmVlIGNvbnRhaW5zIGVycm9yLCBpdCBpcyB2ZXJ5IHByb2JhYmxlIHRoYXRcbiAgLy8gb3VyIG5vZGUgaXMgb25lIG9mIHRob3NlIGVycm9yLW5vZGVzLlxuICAvLyBhbHNvLCBpZiB0aGVyZSBhcmUgZXJyb3JzLCB0aGUgbm9kZSBsZXplciBmaW5kcyB1cyxcbiAgLy8gbWlnaHQgbm90IGJlIHRoZSBiZXN0IG5vZGUuXG4gIC8vIHNvIGZpcnN0IHdlIGNoZWNrIGlmIHRoZXJlIGlzIGFuIGVycm9yLW5vZGUgYXQgdGhlIGN1cnNvci1wb3NpdGlvblxuICBjb25zdCBtYXliZUVycm9yTm9kZSA9IGdldEVycm9yTm9kZSh0cmVlLCBwb3MpO1xuXG4gIGNvbnN0IGN1ciA9IG1heWJlRXJyb3JOb2RlICE9IG51bGwgPyBtYXliZUVycm9yTm9kZS5jdXJzb3IgOiB0cmVlLmN1cnNvcihwb3MpO1xuICBjb25zdCBjdXJyZW50Tm9kZSA9IGN1ci5ub2RlO1xuXG4gIGNvbnN0IG5hbWVzID0gW2N1ci5uYW1lXTtcbiAgd2hpbGUgKGN1ci5wYXJlbnQoKSkge1xuICAgIG5hbWVzLnB1c2goY3VyLm5hbWUpO1xuICB9XG5cbiAgZm9yIChsZXQgcmVzb2x2ZXIgb2YgUkVTT0xWRVJTKSB7XG4gICAgLy8gaSBkbyBub3QgdXNlIGEgZm9yZWFjaCBiZWNhdXNlIGkgd2FudCB0byBzdG9wIGFzIHNvb25cbiAgICAvLyBhcyBpIGZpbmQgc29tZXRoaW5nXG4gICAgaWYgKGlzUGF0aE1hdGNoKHJlc29sdmVyLnBhdGgsIG5hbWVzKSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVyLmZ1bihjdXJyZW50Tm9kZSwgdGV4dCwgcG9zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cbiIsIi8vIHRoaXMgaGVscGVyIGNsYXNzIGlzIHVzZWQgdG8gbWFrZSB0eXBlc2NyaXB0IHdhcm4geW91IHdoZW4geW91IGZvcmdldFxuLy8gYSBjYXNlLWJsb2NrIGluIGEgc3dpdGNoIHN0YXRlbWVudC5cbi8vIGV4YW1wbGUgY29kZSB0aGF0IHRyaWdnZXJzIHRoZSB0eXBlc2NyaXB0LWVycm9yOlxuLy9cbi8vIGNvbnN0IHg6J0EnfCdCJ3wnQycgPSAnQSc7XG4vL1xuLy8gc3dpdGNoKHgpIHtcbi8vICAgY2FzZSAnQSc6XG4vLyAgICAgLy8gc29tZXRoaW5nXG4vLyAgIGNhc2UgJ0InOlxuLy8gICAgIC8vIHNvbWV0aGluZ1xuLy8gICBkZWZhdWx0OlxuLy8gICAgIHRocm93IG5ldyBOZXZlckNhc2VFcnJvcih4KTtcbi8vIH1cbi8vXG4vL1xuLy8gdHlwZXNjcmlwdCB3aWxsIHNob3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlLFxuLy8gd2hlbiB5b3UgYWRkIHRoZSBtaXNzaW5nIGBjYXNlICdDJ2AgY29kZSxcbi8vIHRoZSBwcm9ibGVtIHdpbGwgYmUgZml4ZWQuXG5cbmV4cG9ydCBjbGFzcyBOZXZlckNhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IG5ldmVyKSB7XG4gICAgc3VwZXIoJ3Nob3VsZCBuZXZlciBoYXBwZW4nKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xudmFyIHVzZUxhdGVzdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciByZWYgPSB1c2VSZWYodmFsdWUpO1xuICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgcmV0dXJuIHJlZjtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VMYXRlc3Q7XG4iLCIvLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIENlbGlhbiBHYXJjaWEgYW5kIEF1Z3VzdGluIEh1c3NvbiBAIEFtYWRldXMgSVQgR3JvdXBcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuJ3VzZSBzdHJpY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9tcWwvcHJvbXFsLmNvbnRyaWJ1dGlvbic7XG4iLCIvLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIENlbGlhbiBHYXJjaWEgYW5kIEF1Z3VzdGluIEh1c3NvbiBAIEFtYWRldXMgSVQgR3JvdXBcbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4vLyBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbi8vIFNPRlRXQVJFLlxuJ3VzZSBzdHJpY3QnO1xuLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuZXhwb3J0IHZhciBwcm9tTGFuZ3VhZ2VEZWZpbml0aW9uID0ge1xuICAgIGlkOiAncHJvbXFsJyxcbiAgICBleHRlbnNpb25zOiBbJy5wcm9tcWwnXSxcbiAgICBhbGlhc2VzOiBbJ1Byb21ldGhldXMnLCAncHJvbWV0aGV1cycsICdwcm9tJywgJ1Byb20nLCAncHJvbXFsJywgJ1Byb21xbCcsICdwcm9tUUwnLCAnUHJvbVFMJ10sXG4gICAgbWltZXR5cGVzOiBbXSxcbiAgICBsb2FkZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGltcG9ydCgnLi9wcm9tcWwnKTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZVxufTtcbiJdLCJuYW1lcyI6WyJjc3MiLCJwcm9tTGFuZ3VhZ2VEZWZpbml0aW9uIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VMYXRlc3QiLCJzZWxlY3RvcnMiLCJ1c2VUaGVtZTIiLCJSZWFjdE1vbmFjb0VkaXRvciIsImdldE92ZXJyaWRlU2VydmljZXMiLCJnZXRDb21wbGV0aW9uUHJvdmlkZXIiLCJnZXRTdWdnZXN0T3B0aW9ucyIsIm9wdGlvbnMiLCJjb2RlTGVucyIsImNvbnRleHRtZW51IiwiZml4ZWRPdmVyZmxvd1dpZGdldHMiLCJmb2xkaW5nIiwiZm9udFNpemUiLCJsaW5lRGVjb3JhdGlvbnNXaWR0aCIsImxpbmVOdW1iZXJzIiwibWluaW1hcCIsImVuYWJsZWQiLCJvdmVydmlld1J1bGVyQm9yZGVyIiwib3ZlcnZpZXdSdWxlckxhbmVzIiwicGFkZGluZyIsInRvcCIsImJvdHRvbSIsInJlbmRlckxpbmVIaWdobGlnaHQiLCJzY3JvbGxiYXIiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU2Nyb2xsYmFyU2l6ZSIsImhvcml6b250YWwiLCJob3Jpem9udGFsU2Nyb2xsYmFyU2l6ZSIsInNjcm9sbEJleW9uZExhc3RMaW5lIiwic3VnZ2VzdCIsInN1Z2dlc3RGb250U2l6ZSIsIndvcmRXcmFwIiwiRURJVE9SX0hFSUdIVF9PRkZTRVQiLCJQUk9NUUxfTEFOR19JRCIsImlkIiwiUFJPTVFMX1NFVFVQX1NUQVJURUQiLCJlbnN1cmVQcm9tUUwiLCJtb25hY28iLCJhbGlhc2VzIiwiZXh0ZW5zaW9ucyIsIm1pbWV0eXBlcyIsImxvYWRlciIsImxhbmd1YWdlcyIsInJlZ2lzdGVyIiwidGhlbiIsIm1vZCIsInNldE1vbmFyY2hUb2tlbnNQcm92aWRlciIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2VDb25maWd1cmF0aW9uIiwibGFuZ3VhZ2VDb25maWd1cmF0aW9uIiwiZ2V0U3R5bGVzIiwidGhlbWUiLCJjb250YWluZXIiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsImNvbXBvbmVudHMiLCJpbnB1dCIsImJvcmRlckNvbG9yIiwiTW9uYWNvUXVlcnlGaWVsZCIsInByb3BzIiwib3ZlcnJpZGVTZXJ2aWNlc1JlZiIsImNvbnRhaW5lclJlZiIsImxhbmd1YWdlUHJvdmlkZXIiLCJoaXN0b3J5Iiwib25CbHVyIiwib25SdW5RdWVyeSIsImluaXRpYWxWYWx1ZSIsImxwUmVmIiwiaGlzdG9yeVJlZiIsIm9uUnVuUXVlcnlSZWYiLCJvbkJsdXJSZWYiLCJhdXRvY29tcGxldGVEaXNwb3NlRnVuIiwic3R5bGVzIiwiY3VycmVudCIsIlF1ZXJ5RmllbGQiLCJlZGl0b3IiLCJvbkRpZEJsdXJFZGl0b3JXaWRnZXQiLCJnZXRWYWx1ZSIsImdldFNlcmllcyIsInNlbGVjdG9yIiwiZ2V0SGlzdG9yeSIsIlByb21pc2UiLCJyZXNvbHZlIiwibWFwIiwiaCIsInF1ZXJ5IiwiZXhwciIsImZpbHRlciIsInVuZGVmaW5lZCIsImdldEFsbE1ldHJpY05hbWVzIiwibWV0cmljcyIsIm1ldHJpY3NNZXRhZGF0YSIsInJlc3VsdCIsIm0iLCJtZXRhSXRlbSIsIm5hbWUiLCJoZWxwIiwidHlwZSIsImdldEFsbExhYmVsTmFtZXMiLCJnZXRMYWJlbEtleXMiLCJnZXRMYWJlbFZhbHVlcyIsImxhYmVsTmFtZSIsImRhdGFQcm92aWRlciIsImNvbXBsZXRpb25Qcm92aWRlciIsImZpbHRlcmluZ0NvbXBsZXRpb25Qcm92aWRlciIsInByb3ZpZGVDb21wbGV0aW9uSXRlbXMiLCJtb2RlbCIsInBvc2l0aW9uIiwiY29udGV4dCIsInRva2VuIiwiZ2V0TW9kZWwiLCJzdWdnZXN0aW9ucyIsImRpc3Bvc2UiLCJyZWdpc3RlckNvbXBsZXRpb25JdGVtUHJvdmlkZXIiLCJ1cGRhdGVFbGVtZW50SGVpZ2h0IiwiY29udGFpbmVyRGl2IiwicGl4ZWxIZWlnaHQiLCJnZXRDb250ZW50SGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInBpeGVsV2lkdGgiLCJjbGllbnRXaWR0aCIsImxheW91dCIsIm9uRGlkQ29udGVudFNpemVDaGFuZ2UiLCJhZGRDb21tYW5kIiwiS2V5TW9kIiwiU2hpZnQiLCJLZXlDb2RlIiwiRW50ZXIiLCJDdHJsQ21kIiwiS2V5SyIsImdsb2JhbCIsImRpc3BhdGNoRXZlbnQiLCJLZXlib2FyZEV2ZW50Iiwia2V5IiwibWV0YUtleSIsIm1ha2VTdG9yYWdlU2VydmljZSIsInN0cmluZ3MiLCJNYXAiLCJzZXQiLCJ0b1N0cmluZyIsIm9uRGlkQ2hhbmdlVmFsdWUiLCJkYXRhIiwib25EaWRDaGFuZ2VUYXJnZXQiLCJvbldpbGxTYXZlU3RhdGUiLCJnZXQiLCJzY29wZSIsImZhbGxiYWNrVmFsdWUiLCJnZXRCb29sZWFuIiwidmFsIiwiZ2V0TnVtYmVyIiwicGFyc2VJbnQiLCJzdG9yZSIsInZhbHVlIiwidGFyZ2V0IiwiZGVsZXRlIiwicmVtb3ZlIiwia2V5cyIsIkFycmF5IiwiZnJvbSIsImxvZ1N0b3JhZ2UiLCJjb25zb2xlIiwibG9nIiwibWlncmF0ZSIsImlzTmV3IiwiZmx1c2giLCJyZWFzb24iLCJvdmVycmlkZVNlcnZpY2VzIiwic3RvcmFnZVNlcnZpY2UiLCJlc2NhcGVMYWJlbFZhbHVlSW5FeGFjdFNlbGVjdG9yIiwiRlVOQ1RJT05TIiwiTmV2ZXJDYXNlRXJyb3IiLCJnZXRBbGxNZXRyaWNOYW1lc0NvbXBsZXRpb25zIiwibWV0cmljIiwibGFiZWwiLCJpbnNlcnRUZXh0IiwiZGV0YWlsIiwiZG9jdW1lbnRhdGlvbiIsIkZVTkNUSU9OX0NPTVBMRVRJT05TIiwiZiIsImdldEFsbEZ1bmN0aW9uc0FuZE1ldHJpY05hbWVzQ29tcGxldGlvbnMiLCJtZXRyaWNOYW1lcyIsIkRVUkFUSU9OX0NPTVBMRVRJT05TIiwidGV4dCIsImdldEFsbEhpc3RvcnlDb21wbGV0aW9ucyIsImFsbEhpc3RvcnkiLCJzbGljZSIsIm1ha2VTZWxlY3RvciIsIm1ldHJpY05hbWUiLCJsYWJlbHMiLCJhbGxMYWJlbHMiLCJwdXNoIiwib3AiLCJhbGxMYWJlbFRleHRzIiwiam9pbiIsImdldExhYmVsTmFtZXMiLCJvdGhlckxhYmVscyIsImxlbmd0aCIsInBvc3NpYmxlTGFiZWxOYW1lcyIsIk9iamVjdCIsInVzZWRMYWJlbE5hbWVzIiwiU2V0IiwibCIsImhhcyIsImdldExhYmVsTmFtZXNGb3JDb21wbGV0aW9ucyIsInN1ZmZpeCIsInRyaWdnZXJPbkluc2VydCIsImxhYmVsTmFtZXMiLCJnZXRMYWJlbE5hbWVzRm9yU2VsZWN0b3JDb21wbGV0aW9ucyIsImdldExhYmVsTmFtZXNGb3JCeUNvbXBsZXRpb25zIiwiZ2V0TGFiZWxWYWx1ZXNGb3JNZXRyaWNDb21wbGV0aW9ucyIsImJldHdlZW5RdW90ZXMiLCJ2YWx1ZXMiLCJnZXRDb21wbGV0aW9ucyIsInNpdHVhdGlvbiIsImhpc3RvcnlDb21wbGV0aW9ucyIsImdldFNpdHVhdGlvbiIsInNob3dXb3JkcyIsImdldE1vbmFjb0NvbXBsZXRpb25JdGVtS2luZCIsIkNvbXBsZXRpb25JdGVtS2luZCIsIlVuaXQiLCJWYXJpYWJsZSIsIlNuaXBwZXQiLCJFbnVtIiwiRW51bU1lbWJlciIsIkNvbnN0cnVjdG9yIiwid29yZCIsImdldFdvcmRBdFBvc2l0aW9uIiwicmFuZ2UiLCJSYW5nZSIsImxpZnQiLCJzdGFydExpbmVOdW1iZXIiLCJsaW5lTnVtYmVyIiwiZW5kTGluZU51bWJlciIsInN0YXJ0Q29sdW1uIiwiZW5kQ29sdW1uIiwiZnJvbVBvc2l0aW9ucyIsInBvc2l0aW9uQ2xvbmUiLCJjb2x1bW4iLCJvZmZzZXQiLCJnZXRPZmZzZXRBdCIsImNvbXBsZXRpb25zUHJvbWlzZSIsIml0ZW1zIiwibWF4SW5kZXhEaWdpdHMiLCJpdGVtIiwiaW5kZXgiLCJraW5kIiwic29ydFRleHQiLCJwYWRTdGFydCIsImNvbW1hbmQiLCJ0aXRsZSIsInRyaWdnZXJDaGFyYWN0ZXJzIiwicGFyc2VyIiwibW92ZSIsIm5vZGUiLCJkaXJlY3Rpb24iLCJwYXJlbnQiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwibmV4dFNpYmxpbmciLCJ3YWxrIiwicGF0aCIsImV4cGVjdGVkVHlwZSIsImdldE5vZGVUZXh0IiwidG8iLCJwYXJzZVByb21RTFN0cmluZ0xpdGVyYWwiLCJpbnNpZGUiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJyZXBsYWNlIiwiRXJyb3IiLCJpc1BhdGhNYXRjaCIsInJlc29sdmVyUGF0aCIsImN1cnNvclBhdGgiLCJldmVyeSIsIkVSUk9SX05PREVfTkFNRSIsIlJFU09MVkVSUyIsImZ1biIsInJlc29sdmVMYWJlbEtleXNXaXRoRXF1YWxzIiwicmVzb2x2ZVRvcExldmVsIiwicmVzb2x2ZUluRnVuY3Rpb24iLCJyZXNvbHZlTGFiZWxNYXRjaGVyIiwicmVzb2x2ZUR1cmF0aW9ucyIsInJlc29sdmVMYWJlbHNGb3JHcm91cGluZyIsIkxBQkVMX09QX01BUCIsImdldExhYmVsT3AiLCJvcE5vZGUiLCJvcENoaWxkIiwiZ2V0TGFiZWwiLCJsYWJlbE1hdGNoZXJOb2RlIiwibmFtZU5vZGUiLCJ2YWx1ZU5vZGUiLCJnZXRMYWJlbHMiLCJsYWJlbE1hdGNoZXJzTm9kZSIsImxpc3ROb2RlIiwibWF0Y2hlck5vZGUiLCJyZXZlcnNlIiwiZ2V0Tm9kZUNoaWxkcmVuIiwiY2hpbGQiLCJjaGlsZHJlbiIsImdldE5vZGVJblN1YnRyZWUiLCJ0eXBlTmFtZSIsIm4iLCJwb3MiLCJhZ2dyRXhwTm9kZSIsImJvZHlOb2RlIiwiZ2V0Q2hpbGQiLCJtZXRyaWNJZE5vZGUiLCJpZE5vZGUiLCJpblN0cmluZ05vZGUiLCJpc0Vycm9yIiwibGFiZWxOYW1lTm9kZSIsImZpcnN0TGlzdE5vZGUiLCJwIiwibWV0cmljTmFtZU5vZGUiLCJzdWJUcmVlSGFzRXJyb3IiLCJ0ZXh0VG9DaGVjayIsImluY2x1ZGVzIiwiZ2V0RXJyb3JOb2RlIiwidHJlZSIsImN1ciIsImN1cnNvciIsIm5leHQiLCJwYXJzZSIsIm1heWJlRXJyb3JOb2RlIiwiY3VycmVudE5vZGUiLCJuYW1lcyIsInJlc29sdmVyIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9