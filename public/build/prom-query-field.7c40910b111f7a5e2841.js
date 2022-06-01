"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[6031],{

/***/ "./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ monaco_query_field_MonacoQueryField)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
;// CONCATENATED MODULE: ./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.contribution.js
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
    loader: function () { return Promise.all(/* import() */[__webpack_require__.e(7062), __webpack_require__.e(6538)]).then(__webpack_require__.bind(__webpack_require__, "./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/promql/promql.js")); } // eslint-disable-line @typescript-eslint/explicit-function-return-type
};

;// CONCATENATED MODULE: ./.yarn/cache/monaco-promql-npm-1.7.2-7f61733ebe-54061d5c1c.zip/node_modules/monaco-promql/index.js
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



// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLatest.js

var useLatest = function (value) {
    var ref = (0,react.useRef)(value);
    ref.current = value;
    return ref;
};
/* harmony default export */ const esm_useLatest = (useLatest);

// EXTERNAL MODULE: ./packages/grafana-e2e-selectors/src/index.ts + 3 modules
var src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/components/monaco-query-field/getOverrideServices.ts
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
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/language_utils.ts
var language_utils = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/promql.ts
var promql = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/util.ts
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/completions.ts


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

const FUNCTION_COMPLETIONS = promql/* FUNCTIONS.map */.r8.map(f => {
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

  const allLabelTexts = allLabels.map(label => `${label.name}${label.op}"${(0,language_utils/* escapeLabelValueInExactSelector */.U9)(label.value)}"`);
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
      throw new NeverCaseError(situation);
  }
}
// EXTERNAL MODULE: ./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js
var index_es = __webpack_require__("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/situation.ts



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


  const tree = index_es/* parser.parse */.E2.parse(text); // if the tree contains error, it is very probable that
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/components/monaco-query-field/monaco-completion-provider/index.ts



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
    }) : monaco.Range.fromPositions(position); // documentation says `position` will be "adjusted" in `getOffsetAt`
    // i don't know what that means, to be sure i clone it

    const positionClone = {
      column: position.column,
      lineNumber: position.lineNumber
    };
    const offset = model.getOffsetAt(positionClone);
    const situation = getSituation(model.getValue(), offset);
    const completionsPromise = situation != null ? getCompletions(situation, dataProvider) : Promise.resolve([]);
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
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryField.tsx









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
  suggest: getSuggestOptions(),
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
const PROMQL_LANG_ID = promLanguageDefinition.id; // we must only run the promql-setup code once

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
  // we need only one instance of `overrideServices` during the lifetime of the react component
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
    // when we unmount, we unregister the autocomplete-function, if it was registered
    return () => {
      var _autocompleteDisposeF;

      (_autocompleteDisposeF = autocompleteDisposeFun.current) === null || _autocompleteDisposeF === void 0 ? void 0 : _autocompleteDisposeF.call(autocompleteDisposeFun);
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    "aria-label": src/* selectors.components.QueryField.container */.wl.components.QueryField.container,
    className: styles.container // NOTE: we will be setting inline-style-width/height on this element
    ,
    ref: containerRef,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ReactMonacoEditor, {
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
        const completionProvider = getCompletionProvider(monaco, dataProvider); // completion-providers in monaco are not registered directly to editor-instances,
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


/* harmony default export */ const monaco_query_field_MonacoQueryField = (MonacoQueryField);

/***/ })

}]);