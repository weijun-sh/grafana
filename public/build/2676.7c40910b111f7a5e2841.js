"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2676],{

/***/ "./.yarn/cache/monaco-editor-npm-0.31.1-d8d5ee78bb-65be40c557.zip/node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conf": () => (/* binding */ conf),
/* harmony export */   "language": () => (/* binding */ language)
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/azcli/azcli.ts
var conf = {
  comments: {
    lineComment: "#"
  }
};
var language = {
  defaultToken: "keyword",
  ignoreCase: true,
  tokenPostfix: ".azcli",
  str: /[^#\s]/,
  tokenizer: {
    root: [
      { include: "@comment" },
      [
        /\s-+@str*\s*/,
        {
          cases: {
            "@eos": { token: "key.identifier", next: "@popall" },
            "@default": { token: "key.identifier", next: "@type" }
          }
        }
      ],
      [
        /^-+@str*\s*/,
        {
          cases: {
            "@eos": { token: "key.identifier", next: "@popall" },
            "@default": { token: "key.identifier", next: "@type" }
          }
        }
      ]
    ],
    type: [
      { include: "@comment" },
      [
        /-+@str*\s*/,
        {
          cases: {
            "@eos": { token: "key.identifier", next: "@popall" },
            "@default": "key.identifier"
          }
        }
      ],
      [
        /@str+\s*/,
        {
          cases: {
            "@eos": { token: "string", next: "@popall" },
            "@default": "string"
          }
        }
      ]
    ],
    comment: [
      [
        /#.*$/,
        {
          cases: {
            "@eos": { token: "comment", next: "@popall" }
          }
        }
      ]
    ]
  }
};



/***/ })

}]);