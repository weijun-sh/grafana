"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7988],{

 "./.yarn/cache/monaco-editor-npm-0.31.1-d8d5ee78bb-65be40c557.zip/node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "conf": () => ( conf),
   "language": () => ( language)
 });
 var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/monaco-editor-npm-0.31.1-d8d5ee78bb-65be40c557.zip/node_modules/monaco-editor/esm/vs/editor/editor.api.js");

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
  }
  return target;
};

var monaco_editor_core_exports = {};
__markAsModule(monaco_editor_core_exports);
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);


var EMPTY_ELEMENTS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
  brackets: [
    ["<!--", "-->"],
    ["<", ">"],
    ["{{", "}}"],
    ["{%", "%}"],
    ["{", "}"],
    ["(", ")"]
  ],
  autoClosingPairs: [
    { open: "{", close: "}" },
    { open: "%", close: "%" },
    { open: "[", close: "]" },
    { open: "(", close: ")" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  surroundingPairs: [
    { open: "<", close: ">" },
    { open: '"', close: '"' },
    { open: "'", close: "'" }
  ],
  onEnterRules: [
    {
      beforeText: new RegExp(`<(?!(?:${EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
      afterText: /^<\/(\w[\w\d]*)\s*>$/i,
      action: {
        indentAction: monaco_editor_core_exports.languages.IndentAction.IndentOutdent
      }
    },
    {
      beforeText: new RegExp(`<(?!(?:${EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Indent }
    }
  ]
};
var language = {
  defaultToken: "",
  tokenPostfix: "",
  builtinTags: [
    "if",
    "else",
    "elseif",
    "endif",
    "render",
    "assign",
    "capture",
    "endcapture",
    "case",
    "endcase",
    "comment",
    "endcomment",
    "cycle",
    "decrement",
    "for",
    "endfor",
    "include",
    "increment",
    "layout",
    "raw",
    "endraw",
    "render",
    "tablerow",
    "endtablerow",
    "unless",
    "endunless"
  ],
  builtinFilters: [
    "abs",
    "append",
    "at_least",
    "at_most",
    "capitalize",
    "ceil",
    "compact",
    "date",
    "default",
    "divided_by",
    "downcase",
    "escape",
    "escape_once",
    "first",
    "floor",
    "join",
    "json",
    "last",
    "lstrip",
    "map",
    "minus",
    "modulo",
    "newline_to_br",
    "plus",
    "prepend",
    "remove",
    "remove_first",
    "replace",
    "replace_first",
    "reverse",
    "round",
    "rstrip",
    "size",
    "slice",
    "sort",
    "sort_natural",
    "split",
    "strip",
    "strip_html",
    "strip_newlines",
    "times",
    "truncate",
    "truncatewords",
    "uniq",
    "upcase",
    "url_decode",
    "url_encode",
    "where"
  ],
  constants: ["true", "false"],
  operators: ["==", "!=", ">", "<", ">=", "<="],
  symbol: /[=><!]+/,
  identifier: /[a-zA-Z_][\w]*/,
  tokenizer: {
    root: [
      [/\{\%\s*comment\s*\%\}/, "comment.start.liquid", "@comment"],
      [/\{\{/, { token: "@rematch", switchTo: "@liquidState.root" }],
      [/\{\%/, { token: "@rematch", switchTo: "@liquidState.root" }],
      [/(<)([\w\-]+)(\/>)/, ["delimiter.html", "tag.html", "delimiter.html"]],
      [/(<)([:\w]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
      [/(<\/)([\w\-]+)/, ["delimiter.html", { token: "tag.html", next: "@otherTag" }]],
      [/</, "delimiter.html"],
      [/\{/, "delimiter.html"],
      [/[^<{]+/]
    ],
    comment: [
      [/\{\%\s*endcomment\s*\%\}/, "comment.end.liquid", "@pop"],
      [/./, "comment.content.liquid"]
    ],
    otherTag: [
      [
        /\{\{/,
        {
          token: "@rematch",
          switchTo: "@liquidState.otherTag"
        }
      ],
      [
        /\{\%/,
        {
          token: "@rematch",
          switchTo: "@liquidState.otherTag"
        }
      ],
      [/\/?>/, "delimiter.html", "@pop"],
      [/"([^"]*)"/, "attribute.value"],
      [/'([^']*)'/, "attribute.value"],
      [/[\w\-]+/, "attribute.name"],
      [/=/, "delimiter"],
      [/[ \t\r\n]+/]
    ],
    liquidState: [
      [/\{\{/, "delimiter.output.liquid"],
      [/\}\}/, { token: "delimiter.output.liquid", switchTo: "@$S2.$S3" }],
      [/\{\%/, "delimiter.tag.liquid"],
      [/raw\s*\%\}/, "delimiter.tag.liquid", "@liquidRaw"],
      [/\%\}/, { token: "delimiter.tag.liquid", switchTo: "@$S2.$S3" }],
      { include: "liquidRoot" }
    ],
    liquidRaw: [
      [/^(?!\{\%\s*endraw\s*\%\}).+/],
      [/\{\%/, "delimiter.tag.liquid"],
      [/@identifier/],
      [/\%\}/, { token: "delimiter.tag.liquid", next: "@root" }]
    ],
    liquidRoot: [
      [/\d+(\.\d+)?/, "number.liquid"],
      [/"[^"]*"/, "string.liquid"],
      [/'[^']*'/, "string.liquid"],
      [/\s+/],
      [
        /@symbol/,
        {
          cases: {
            "@operators": "operator.liquid",
            "@default": ""
          }
        }
      ],
      [/\./],
      [
        /@identifier/,
        {
          cases: {
            "@constants": "keyword.liquid",
            "@builtinFilters": "predefined.liquid",
            "@builtinTags": "predefined.liquid",
            "@default": "variable.liquid"
          }
        }
      ],
      [/[^}|%]/, "variable.liquid"]
    ]
  }
};



 })

}]);