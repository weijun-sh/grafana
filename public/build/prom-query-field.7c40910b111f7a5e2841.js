"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[6031],{

 "./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryField.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( monaco_query_field_MonacoQueryField)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
;

var promLanguageDefinition = {
    id: 'promql',
    extensions: ['.promql'],
    aliases: ['Prometheus', 'prometheus', 'prom', 'Prom', 'promql', 'Promql', 'promQL', 'PromQL'],
    mimetypes: [],
    loader: function () { return Promise.all([__webpack_require__.e(7062), __webpack_require__.e(6538)]).then(__webpack_require__.bind(__webpack_require__, "./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.js")); } 
};

;



var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
;

var useLatest = function (value) {
    var ref = (0,react.useRef)(value);
    ref.current = value;
    return ref;
};
 const esm_useLatest = (useLatest);

var src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
;
function makeStorageService() {
  const strings = new Map(); 

  strings.set('expandSuggestionDocs', true.toString());
  return {
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
      return Promise.resolve(undefined);
    },
    isNew: scope => {
      return true;
    },
    flush: reason => {
      return Promise.resolve(undefined);
    }
  };
}

let overrideServices = null;
function getOverrideServices() {
  if (overrideServices === null) {
    overrideServices = {
      storageService: makeStorageService()
    };
  }

  return overrideServices;
}
var language_utils = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
var promql = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
;
class NeverCaseError extends Error {
  constructor(value) {
    super('should never happen');
  }

}
;



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

const FUNCTION_COMPLETIONS = promql.r8.map(f => {
  var _f$insertText;

  return {
    type: 'FUNCTION',
    label: f.label,
    insertText: (_f$insertText = f.insertText) !== null && _f$insertText !== void 0 ? _f$insertText : '',
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
  const allHistory = await dataProvider.getHistory(); 

  return allHistory.slice(0, 10).map(expr => ({
    type: 'HISTORY',
    label: expr,
    insertText: expr
  }));
}

function makeSelector(metricName, labels) {
  const allLabels = [...labels]; 

  if (metricName !== undefined) {
    allLabels.push({
      name: '__name__',
      value: metricName,
      op: '='
    });
  }

  const allLabelTexts = allLabels.map(label => `${label.name}${label.op}"${(0,language_utils/* escapeLabelValueInExactSelector */.U9)(label.value)}"`);
  return `{${allLabelTexts.join(',')}}`;
}

async function getLabelNames(metric, otherLabels, dataProvider) {
  if (metric === undefined && otherLabels.length === 0) {
    return dataProvider.getAllLabelNames();
  } else {
    const selector = makeSelector(metric, otherLabels);
    const data = await dataProvider.getSeries(selector);
    const possibleLabelNames = Object.keys(data); 

    const usedLabelNames = new Set(otherLabels.map(l => l.name)); 

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
    insertText: betweenQuotes ? text : `"${text}"` 

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
      throw new NeverCaseError(situation);
  }
}
var index_es = __webpack_require__("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");
;



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
      throw new NeverCaseError(direction);
  }
}

function walk(node, path) {
  let current = node;

  for (const [direction, expectedType] of path) {
    current = move(current, direction);

    if (current === null) {
      return null;
    }

    if (current.type.name !== expectedType) {
      return null;
    }
  }

  return current;
}

function getNodeText(node, text) {
  return text.slice(node.from, node.to);
}

function parsePromQLStringLiteral(text) {
  const inside = text.slice(1, text.length - 1); 

  if (text.startsWith('"') && text.endsWith('"')) {
    return inside.replace(/\\"/, '"');
  } 


  if (text.startsWith("'") && text.endsWith("'")) {
    return inside.replace(/\\'/, "'");
  } 


  if (text.startsWith('`') && text.endsWith('`')) {
    return inside;
  }

  throw new Error('FIXME: invalid string literal');
}

function isPathMatch(resolverPath, cursorPath) {
  return resolverPath.every((item, index) => item === cursorPath[index]);
}

const ERROR_NODE_NAME = '⚠'; 

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
      return [];
    }

    const label = getLabel(matcherNode, text);

    if (label !== null) {
      labels.push(label);
    } 


    listNode = walk(listNode, [['firstChild', 'LabelMatchList']]);
  } 


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
  if (node.type.name === typeName) {
    return node;
  } 


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
  const inStringNode = !node.type.isError;
  const parent = walk(node, [['parent', 'LabelMatcher']]);

  if (parent === null) {
    return null;
  }

  const labelNameNode = walk(parent, [['firstChild', 'LabelName']]);

  if (labelNameNode === null) {
    return null;
  }

  const labelName = getNodeText(labelNameNode, text); 

  const firstListNode = walk(parent, [['parent', 'LabelMatchList']]);

  if (firstListNode === null) {
    return null;
  }

  let listNode = firstListNode; 

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
        listNode = p;
        continue;

      case 'LabelMatchers':
        labelMatchersNode = p;
        continue;

      default:
        return null;
    }
  } 


  const allLabels = getLabels(labelMatchersNode, text); 

  const otherLabels = allLabels.filter(label => label.name !== labelName);
  const metricNameNode = walk(labelMatchersNode, [['parent', 'VectorSelector'], ['firstChild', 'MetricIdentifier'], ['firstChild', 'Identifier']]);

  if (metricNameNode === null) {
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
  if (subTreeHasError(node)) {
    return null;
  } 


  const child = walk(node, [['firstChild', 'LabelMatchList']]);

  if (child !== null) {
    const textToCheck = text.slice(child.to, pos);

    if (!textToCheck.includes(',')) {
      return null;
    }
  }

  const metricNameNode = walk(node, [['parent', 'VectorSelector'], ['firstChild', 'MetricIdentifier'], ['firstChild', 'Identifier']]);
  const otherLabels = getLabels(node, text);

  if (metricNameNode === null) {
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
} 


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
  if (text === '') {
    return {
      type: 'EMPTY'
    };
  }


  const tree = index_es.E2.parse(text); 

  const maybeErrorNode = getErrorNode(tree, pos);
  const cur = maybeErrorNode != null ? maybeErrorNode.cursor : tree.cursor(pos);
  const currentNode = cur.node;
  const names = [cur.name];

  while (cur.parent()) {
    names.push(cur.name);
  }

  for (let resolver of RESOLVERS) {
    if (isPathMatch(resolver.path, names)) {
      return resolver.fun(currentNode, text, pos);
    }
  }

  return null;
}
;



function getSuggestOptions() {
  return {
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
      throw new NeverCaseError(type);
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
    }) : monaco.Range.fromPositions(position); 

    const positionClone = {
      column: position.column,
      lineNumber: position.lineNumber
    };
    const offset = model.getOffsetAt(positionClone);
    const situation = getSituation(model.getValue(), offset);
    const completionsPromise = situation != null ? getCompletions(situation, dataProvider) : Promise.resolve([]);
    return completionsPromise.then(items => {
      const maxIndexDigits = items.length.toString().length;
      const suggestions = items.map((item, index) => ({
        kind: getMonacoCompletionItemKind(item.type, monaco),
        label: item.label,
        insertText: item.insertText,
        detail: item.detail,
        documentation: item.documentation,
        sortText: index.toString().padStart(maxIndexDigits, '0'),
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
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;









const options = {
  codeLens: false,
  contextmenu: false,
  fixedOverflowWidgets: true,
  folding: false,
  fontSize: 14,
  lineDecorationsWidth: 8,
  lineNumbers: 'off',
  minimap: {
    enabled: false
  },
  overviewRulerBorder: false,
  overviewRulerLanes: 0,
  padding: {
    top: 4,
    bottom: 5
  },
  renderLineHighlight: 'none',
  scrollbar: {
    vertical: 'hidden',
    verticalScrollbarSize: 8,
    horizontal: 'hidden',
    horizontalScrollbarSize: 0
  },
  scrollBeyondLastLine: false,
  suggest: getSuggestOptions(),
  suggestFontSize: 12,
  wordWrap: 'on'
}; 

const EDITOR_HEIGHT_OFFSET = 2;
const PROMQL_LANG_ID = promLanguageDefinition.id; 

let PROMQL_SETUP_STARTED = false;

function ensurePromQL(monaco) {
  if (PROMQL_SETUP_STARTED === false) {
    PROMQL_SETUP_STARTED = true;
    const {
      aliases,
      extensions,
      mimetypes,
      loader
    } = promLanguageDefinition;
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
    container: emotion_css_esm.css`
      border-radius: ${theme.shape.borderRadius()};
      border: 1px solid ${theme.components.input.borderColor};
    `
  };
};

const MonacoQueryField = props => {
  const overrideServicesRef = (0,react.useRef)(getOverrideServices());
  const containerRef = (0,react.useRef)(null);
  const {
    languageProvider,
    history,
    onBlur,
    onRunQuery,
    initialValue
  } = props;
  const lpRef = esm_useLatest(languageProvider);
  const historyRef = esm_useLatest(history);
  const onRunQueryRef = esm_useLatest(onRunQuery);
  const onBlurRef = esm_useLatest(onBlur);
  const autocompleteDisposeFun = (0,react.useRef)(null);
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = getStyles(theme);
  (0,react.useEffect)(() => {
    return () => {
      var _autocompleteDisposeF;

      (_autocompleteDisposeF = autocompleteDisposeFun.current) === null || _autocompleteDisposeF === void 0 ? void 0 : _autocompleteDisposeF.call(autocompleteDisposeFun);
    };
  }, []);
  return (0,jsx_runtime.jsx)("div", {
    "aria-label": src.wl.components.QueryField.container,
    className: styles.container 
    ,
    ref: containerRef,
    children: (0,jsx_runtime.jsx)(grafana_ui_src.ReactMonacoEditor, {
      overrideServices: overrideServicesRef.current,
      options: options,
      language: "promql",
      value: initialValue,
      beforeMount: monaco => {
        ensurePromQL(monaco);
      },
      onMount: (editor, monaco) => {
        editor.onDidBlurEditorWidget(() => {
          onBlurRef.current(editor.getValue());
        }); 

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
        const completionProvider = getCompletionProvider(monaco, dataProvider); 

        const filteringCompletionProvider = Object.assign({}, completionProvider, {
          provideCompletionItems: (model, position, context, token) => {
            var _editor$getModel;

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
        autocompleteDisposeFun.current = dispose; 

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
        updateElementHeight(); 

        editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
          onRunQueryRef.current(editor.getValue());
        });

        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK, function () {
          __webpack_require__.g.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'k',
            metaKey: true
          }));
        });
      }
    })
  });
}; 


 const monaco_query_field_MonacoQueryField = (MonacoQueryField);

 })

}]);