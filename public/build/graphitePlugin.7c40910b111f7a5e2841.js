"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7494],{

/***/ "./public/app/plugins/datasource/graphite/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "plugin": () => (/* binding */ module_plugin)
});

// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 2 modules
var redux_toolkit_esm = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/state/actions.ts


/**
 * List of possible actions changing the state of QueryEditor
 */
const init = (0,redux_toolkit_esm/* createAction */.PH)('init');
/**
 * Synchronise editor dependencies with internal state.
 */

const timeRangeChanged = (0,redux_toolkit_esm/* createAction */.PH)('time-range-changed');
const queriesChanged = (0,redux_toolkit_esm/* createAction */.PH)('queries-changed');
const queryChanged = (0,redux_toolkit_esm/* createAction */.PH)('query-changed'); // Metrics & Tags

const segmentValueChanged = (0,redux_toolkit_esm/* createAction */.PH)('segment-value-changed'); // Tags

const addNewTag = (0,redux_toolkit_esm/* createAction */.PH)('add-new-tag');
const tagChanged = (0,redux_toolkit_esm/* createAction */.PH)('tag-changed');
const unpause = (0,redux_toolkit_esm/* createAction */.PH)('unpause'); // Functions

const addFunction = (0,redux_toolkit_esm/* createAction */.PH)('add-function');
const removeFunction = (0,redux_toolkit_esm/* createAction */.PH)('remove-function');
const moveFunction = (0,redux_toolkit_esm/* createAction */.PH)('move-function');
const updateFunctionParam = (0,redux_toolkit_esm/* createAction */.PH)('change-function-param'); // Text editor

const updateQuery = (0,redux_toolkit_esm/* createAction */.PH)('update-query');
const runQuery = (0,redux_toolkit_esm/* createAction */.PH)('run-current-query');
const toggleEditorMode = (0,redux_toolkit_esm/* createAction */.PH)('toggle-editor');
const actions = {
  init,
  timeRangeChanged,
  queriesChanged,
  queryChanged,
  segmentValueChanged,
  tagChanged,
  addNewTag,
  unpause,
  addFunction,
  removeFunction,
  moveFunction,
  updateFunctionParam,
  updateQuery,
  runQuery,
  toggleEditorMode
};
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js
var usePrevious = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
// EXTERNAL MODULE: ./public/app/features/templating/template_srv.ts + 1 modules
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./public/app/core/utils/arrayMove.ts
var arrayMove = __webpack_require__("./public/app/core/utils/arrayMove.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/lexer.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // This is auto generated from the unicode tables.
// The tables are at:
// http://www.fileformat.info/info/unicode/category/Lu/list.htm
// http://www.fileformat.info/info/unicode/category/Ll/list.htm
// http://www.fileformat.info/info/unicode/category/Lt/list.htm
// http://www.fileformat.info/info/unicode/category/Lm/list.htm
// http://www.fileformat.info/info/unicode/category/Lo/list.htm
// http://www.fileformat.info/info/unicode/category/Nl/list.htm

const unicodeLetterTable = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774, 1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969, 1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088, 2088, 2112, 2136, 2308, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2417, 2423, 2425, 2431, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3133, 3160, 3161, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3261, 3261, 3294, 3294, 3296, 3297, 3313, 3314, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3424, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3805, 3840, 3840, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186, 4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293, 4304, 4346, 4348, 4348, 4352, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6000, 6016, 6067, 6103, 6103, 6108, 6108, 6176, 6263, 6272, 6312, 6314, 6314, 6320, 6389, 6400, 6428, 6480, 6509, 6512, 6516, 6528, 6571, 6593, 6599, 6656, 6678, 6688, 6740, 6823, 6823, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7104, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7401, 7404, 7406, 7409, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11520, 11557, 11568, 11621, 11631, 11631, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11823, 11823, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 13312, 19893, 19893, 19968, 19968, 40907, 40907, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42647, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42897, 42912, 42921, 43002, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43648, 43695, 43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739, 43741, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44002, 44032, 44032, 55203, 55203, 55216, 55238, 55243, 55291, 63744, 64045, 64048, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500, 65536, 65547, 65549, 65574, 65576, 65594, 65596, 65597, 65599, 65613, 65616, 65629, 65664, 65786, 65856, 65908, 66176, 66204, 66208, 66256, 66304, 66334, 66352, 66378, 66432, 66461, 66464, 66499, 66504, 66511, 66513, 66517, 66560, 66717, 67584, 67589, 67592, 67592, 67594, 67637, 67639, 67640, 67644, 67644, 67647, 67669, 67840, 67861, 67872, 67897, 68096, 68096, 68112, 68115, 68117, 68119, 68121, 68147, 68192, 68220, 68352, 68405, 68416, 68437, 68448, 68466, 68608, 68680, 69635, 69687, 69763, 69807, 73728, 74606, 74752, 74850, 77824, 78894, 92160, 92728, 110592, 110593, 119808, 119892, 119894, 119964, 119966, 119967, 119970, 119970, 119973, 119974, 119977, 119980, 119982, 119993, 119995, 119995, 119997, 120003, 120005, 120069, 120071, 120074, 120077, 120084, 120086, 120092, 120094, 120121, 120123, 120126, 120128, 120132, 120134, 120134, 120138, 120144, 120146, 120485, 120488, 120512, 120514, 120538, 120540, 120570, 120572, 120596, 120598, 120628, 120630, 120654, 120656, 120686, 120688, 120712, 120714, 120744, 120746, 120770, 120772, 120779, 131072, 131072, 173782, 173782, 173824, 173824, 177972, 177972, 177984, 177984, 178205, 178205, 194560, 195101];
const identifierStartTable = [];

for (let i = 0; i < 128; i++) {
  identifierStartTable[i] = i >= 48 && i <= 57 || // 0-9
  i === 36 || // $
  i === 126 || // ~
  i === 124 || // |
  i >= 65 && i <= 90 || // A-Z
  i === 95 || // _
  i === 45 || // -
  i === 42 || // *
  i === 58 || // :
  i === 91 || // templateStart [
  i === 93 || // templateEnd ]
  i === 63 || // ?
  i === 37 || // %
  i === 35 || // #
  i === 61 || // =
  i >= 97 && i <= 122; // a-z
}

const identifierPartTable = identifierStartTable;
class Lexer {
  constructor(expression) {
    _defineProperty(this, "input", void 0);

    _defineProperty(this, "char", void 0);

    _defineProperty(this, "from", void 0);

    this.input = expression;
    this.char = 1;
    this.from = 1;
  }

  peek(i) {
    return this.input.charAt(i || 0);
  }

  skip(i) {
    i = i || 1;
    this.char += i;
    this.input = this.input.slice(i);
  }

  tokenize() {
    const list = [];
    let token = this.next();

    while (token) {
      list.push(token);
      token = this.next();
    }

    return list;
  }

  next() {
    this.from = this.char; // Move to the next non-space character.

    if (/\s/.test(this.peek())) {
      while (/\s/.test(this.peek())) {
        this.from += 1;
        this.skip();
      }

      if (this.peek() === '') {
        // EOL
        return null;
      }
    }

    let match = this.scanStringLiteral();

    if (match) {
      return match;
    }

    match = this.scanPunctuator() || this.scanNumericLiteral() || this.scanIdentifier() || this.scanTemplateSequence();

    if (match) {
      this.skip(match.value.length);
      return match;
    } // No token could be matched, give up.


    return null;
  }

  scanTemplateSequence() {
    if (this.peek() === '[' && this.peek(1) === '[') {
      return {
        type: 'templateStart',
        value: '[[',
        pos: this.char
      };
    }

    if (this.peek() === ']' && this.peek(1) === ']') {
      return {
        type: 'templateEnd',
        value: '[[',
        pos: this.char
      };
    }

    return null;
  }
  /*
   * Extract a JavaScript identifier out of the next sequence of
   * characters or return 'null' if its not possible. In addition,
   * to Identifier this method can also produce BooleanLiteral
   * (true/false) and NullLiteral (null).
   */


  scanIdentifier() {
    let id = '';
    let index = 0;
    let type, char; // Detects any character in the Unicode categories "Uppercase
    // letter (Lu)", "Lowercase letter (Ll)", "Titlecase letter
    // (Lt)", "Modifier letter (Lm)", "Other letter (Lo)", or
    // "Letter number (Nl)".
    //
    // Both approach and unicodeLetterTable were borrowed from
    // Google's Traceur.

    function isUnicodeLetter(code) {
      for (let i = 0; i < unicodeLetterTable.length;) {
        if (code < unicodeLetterTable[i++]) {
          return false;
        }

        if (code <= unicodeLetterTable[i++]) {
          return true;
        }
      }

      return false;
    }

    function isHexDigit(str) {
      return /^[0-9a-fA-F]$/.test(str);
    }

    const readUnicodeEscapeSequence = (0,lodash.bind)(function () {
      index += 1;

      if (this.peek(index) !== 'u') {
        return null;
      }

      const ch1 = this.peek(index + 1);
      const ch2 = this.peek(index + 2);
      const ch3 = this.peek(index + 3);
      const ch4 = this.peek(index + 4);
      let code;

      if (isHexDigit(ch1) && isHexDigit(ch2) && isHexDigit(ch3) && isHexDigit(ch4)) {
        code = parseInt(ch1 + ch2 + ch3 + ch4, 16);

        if (isUnicodeLetter(code)) {
          index += 5;
          return '\\u' + ch1 + ch2 + ch3 + ch4;
        }

        return null;
      }

      return null;
    }, this);
    const getIdentifierStart = (0,lodash.bind)(function () {
      const chr = this.peek(index);
      const code = chr.charCodeAt(0);

      if (chr === '*') {
        index += 1;
        return chr;
      }

      if (code === 92) {
        return readUnicodeEscapeSequence();
      }

      if (code < 128) {
        if (identifierStartTable[code]) {
          index += 1;
          return chr;
        }

        return null;
      }

      if (isUnicodeLetter(code)) {
        index += 1;
        return chr;
      }

      return null;
    }, this);
    const getIdentifierPart = (0,lodash.bind)(function () {
      const chr = this.peek(index);
      const code = chr.charCodeAt(0);

      if (code === 92) {
        return readUnicodeEscapeSequence();
      }

      if (code < 128) {
        if (identifierPartTable[code]) {
          index += 1;
          return chr;
        }

        return null;
      }

      if (isUnicodeLetter(code)) {
        index += 1;
        return chr;
      }

      return null;
    }, this);
    char = getIdentifierStart();

    if (char === null) {
      return null;
    }

    id = char;

    for (;;) {
      char = getIdentifierPart();

      if (char === null) {
        break;
      }

      id += char;
    }

    switch (id) {
      case 'true':
        {
          type = 'bool';
          break;
        }

      case 'false':
        {
          type = 'bool';
          break;
        }

      default:
        type = 'identifier';
    }

    return {
      type: type,
      value: id,
      pos: this.char
    };
  }
  /*
   * Extract a numeric literal out of the next sequence of
   * characters or return 'null' if its not possible. This method
   * supports all numeric literals described in section 7.8.3
   * of the EcmaScript 5 specification.
   *
   * This method's implementation was heavily influenced by the
   * scanNumericLiteral function in the Esprima parser's source code.
   */


  scanNumericLiteral() {
    let index = 0;
    let value = '';
    const length = this.input.length;
    let char = this.peek(index);
    let bad;

    function isDecimalDigit(str) {
      return /^[0-9]$/.test(str);
    }

    function isOctalDigit(str) {
      return /^[0-7]$/.test(str);
    }

    function isHexDigit(str) {
      return /^[0-9a-fA-F]$/.test(str);
    }

    function isIdentifierStart(ch) {
      return ch === '$' || ch === '_' || ch === '\\' || ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z';
    } // handle negative num literals


    if (char === '-') {
      value += char;
      index += 1;
      char = this.peek(index);
    } // Numbers must start either with a decimal digit or a point.


    if (char !== '.' && !isDecimalDigit(char)) {
      return null;
    }

    if (char !== '.') {
      value += this.peek(index);
      index += 1;
      char = this.peek(index);

      if (value === '0') {
        // Base-16 numbers.
        if (char === 'x' || char === 'X') {
          index += 1;
          value += char;

          while (index < length) {
            char = this.peek(index);

            if (!isHexDigit(char)) {
              break;
            }

            value += char;
            index += 1;
          }

          if (value.length <= 2) {
            // 0x
            return {
              type: 'number',
              value: value,
              isMalformed: true,
              pos: this.char
            };
          }

          if (index < length) {
            char = this.peek(index);

            if (isIdentifierStart(char)) {
              return null;
            }
          }

          return {
            type: 'number',
            value: value,
            base: 16,
            isMalformed: false,
            pos: this.char
          };
        } // Base-8 numbers.


        if (isOctalDigit(char)) {
          index += 1;
          value += char;
          bad = false;

          while (index < length) {
            char = this.peek(index); // Numbers like '019' (note the 9) are not valid octals
            // but we still parse them and mark as malformed.

            if (isDecimalDigit(char)) {
              bad = true;
            }

            if (!isOctalDigit(char)) {
              // if the char is a non punctuator then its not a valid number
              if (!this.isPunctuator(char)) {
                return null;
              }

              break;
            }

            value += char;
            index += 1;
          }

          if (index < length) {
            char = this.peek(index);

            if (isIdentifierStart(char)) {
              return null;
            }
          }

          return {
            type: 'number',
            value: value,
            base: 8,
            isMalformed: bad
          };
        } // Decimal numbers that start with '0' such as '09' are illegal
        // but we still parse them and return as malformed.


        if (isDecimalDigit(char)) {
          index += 1;
          value += char;
        }
      }

      while (index < length) {
        char = this.peek(index);

        if (!isDecimalDigit(char)) {
          break;
        }

        value += char;
        index += 1;
      }
    } // Decimal digits.


    if (char === '.') {
      value += char;
      index += 1;

      while (index < length) {
        char = this.peek(index);

        if (!isDecimalDigit(char)) {
          break;
        }

        value += char;
        index += 1;
      }
    } // Exponent part.


    if (char === 'e' || char === 'E') {
      value += char;
      index += 1;
      char = this.peek(index);

      if (char === '+' || char === '-') {
        value += this.peek(index);
        index += 1;
      }

      char = this.peek(index);

      if (isDecimalDigit(char)) {
        value += char;
        index += 1;

        while (index < length) {
          char = this.peek(index);

          if (!isDecimalDigit(char)) {
            break;
          }

          value += char;
          index += 1;
        }
      } else {
        return null;
      }
    }

    if (index < length) {
      char = this.peek(index);

      if (!this.isPunctuator(char)) {
        return null;
      }
    }

    return {
      type: 'number',
      value: value,
      base: 10,
      pos: this.char,
      isMalformed: !isFinite(+value)
    };
  }

  isPunctuator(ch1) {
    switch (ch1) {
      case '.':
      case '(':
      case ')':
      case ',':
      case '{':
      case '}':
        return true;
    }

    return false;
  }

  scanPunctuator() {
    const ch1 = this.peek();

    if (this.isPunctuator(ch1)) {
      return {
        type: ch1,
        value: ch1,
        pos: this.char
      };
    }

    return null;
  }
  /*
   * Extract a string out of the next sequence of characters and/or
   * lines or return 'null' if its not possible. Since strings can
   * span across multiple lines this method has to move the char
   * pointer.
   *
   * This method recognizes pseudo-multiline JavaScript strings:
   *
   *   var str = "hello\
   *   world";
   */


  scanStringLiteral() {
    const quote = this.peek(); // String must start with a quote.

    if (quote !== '"' && quote !== "'") {
      return null;
    }

    let value = '';
    this.skip();

    while (this.peek() !== quote) {
      if (this.peek() === '') {
        // End Of Line
        return {
          type: 'string',
          value: value,
          isUnclosed: true,
          quote: quote,
          pos: this.char
        };
      }

      const char = this.peek();
      const jump = 1; // A length of a jump, after we're done
      // parsing this character.

      value += char;
      this.skip(jump);
    }

    this.skip();
    return {
      type: 'string',
      value: value,
      isUnclosed: false,
      quote: quote,
      pos: this.char
    };
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/parser.ts
function parser_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Parser {
  constructor(expression) {
    parser_defineProperty(this, "expression", void 0);

    parser_defineProperty(this, "lexer", void 0);

    parser_defineProperty(this, "tokens", void 0);

    parser_defineProperty(this, "index", void 0);

    this.expression = expression;
    this.lexer = new Lexer(expression);
    this.tokens = this.lexer.tokenize();
    this.index = 0;
  }

  getAst() {
    return this.start();
  }

  start() {
    try {
      return this.functionCall() || this.metricExpression();
    } catch (e) {
      return {
        type: 'error',
        message: e.message,
        pos: e.pos
      };
    }
  }

  curlyBraceSegment() {
    if (this.match('identifier', '{') || this.match('{')) {
      let curlySegment = '';

      while (!this.match('') && !this.match('}')) {
        curlySegment += this.consumeToken().value;
      }

      if (!this.match('}')) {
        this.errorMark("Expected closing '}'");
      }

      curlySegment += this.consumeToken().value; // if curly segment is directly followed by identifier
      // include it in the segment

      if (this.match('identifier')) {
        curlySegment += this.consumeToken().value;
      }

      return {
        type: 'segment',
        value: curlySegment
      };
    } else {
      return null;
    }
  }

  metricSegment() {
    const curly = this.curlyBraceSegment();

    if (curly) {
      return curly;
    }

    if (this.match('identifier') || this.match('number')) {
      // hack to handle float numbers in metric segments
      const parts = this.consumeToken().value.split('.');

      if (parts.length === 2) {
        this.tokens.splice(this.index, 0, {
          type: '.'
        });
        this.tokens.splice(this.index + 1, 0, {
          type: 'number',
          value: parts[1]
        });
      }

      return {
        type: 'segment',
        value: parts[0]
      };
    }

    if (!this.match('templateStart')) {
      this.errorMark('Expected metric identifier');
    }

    this.consumeToken();

    if (!this.match('identifier')) {
      this.errorMark('Expected identifier after templateStart');
    }

    const node = {
      type: 'template',
      value: this.consumeToken().value
    };

    if (!this.match('templateEnd')) {
      this.errorMark('Expected templateEnd');
    }

    this.consumeToken();
    return node;
  }

  metricExpression() {
    if (!this.match('templateStart') && !this.match('identifier') && !this.match('number') && !this.match('{')) {
      return null;
    }

    const node = {
      type: 'metric',
      segments: []
    };
    node.segments.push(this.metricSegment());

    while (this.match('.')) {
      this.consumeToken();
      const segment = this.metricSegment();

      if (!segment) {
        this.errorMark('Expected metric identifier');
      }

      node.segments.push(segment);
    }

    return node;
  }

  functionCall() {
    if (!this.match('identifier', '(')) {
      return null;
    }

    const node = {
      type: 'function',
      name: this.consumeToken().value
    }; // consume left parenthesis

    this.consumeToken();
    node.params = this.functionParameters();

    if (!this.match(')')) {
      this.errorMark('Expected closing parenthesis');
    }

    this.consumeToken();
    return node;
  }

  boolExpression() {
    if (!this.match('bool')) {
      return null;
    }

    return {
      type: 'bool',
      value: this.consumeToken().value === 'true'
    };
  }

  functionParameters() {
    if (this.match(')') || this.match('')) {
      return [];
    }

    const param = this.functionCall() || this.numericLiteral() || this.seriesRefExpression() || this.boolExpression() || this.metricExpression() || this.stringLiteral();

    if (!this.match(',')) {
      return [param];
    }

    this.consumeToken();
    return [param].concat(this.functionParameters());
  }

  seriesRefExpression() {
    if (!this.match('identifier')) {
      return null;
    }

    const value = this.tokens[this.index].value;

    if (!value.match(/\#[A-Z]/)) {
      return null;
    }

    const token = this.consumeToken();
    return {
      type: 'series-ref',
      value: token.value
    };
  }

  numericLiteral() {
    if (!this.match('number')) {
      return null;
    }

    return {
      type: 'number',
      value: parseFloat(this.consumeToken().value)
    };
  }

  stringLiteral() {
    if (!this.match('string')) {
      return null;
    }

    const token = this.consumeToken();

    if (token.isUnclosed) {
      throw {
        message: 'Unclosed string parameter',
        pos: token.pos
      };
    }

    return {
      type: 'string',
      value: token.value
    };
  }

  errorMark(text) {
    const currentToken = this.tokens[this.index];
    const type = currentToken ? currentToken.type : 'end of string';
    throw {
      message: text + ' instead found ' + type,
      pos: currentToken ? currentToken.pos : this.lexer.char
    };
  } // returns token value and incre


  consumeToken() {
    this.index++;
    return this.tokens[this.index - 1];
  }

  matchToken(type, index) {
    const token = this.tokens[this.index + index];
    return token === undefined && type === '' || token && token.type === type;
  }

  match(token1, token2) {
    return this.matchToken(token1, 0) && (!token2 || this.matchToken(token2, 1));
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/graphite_query.ts
function graphite_query_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class GraphiteQuery {
  /** @ngInject */
  constructor(datasource, target, templateSrv, scopedVars) {
    graphite_query_defineProperty(this, "datasource", void 0);

    graphite_query_defineProperty(this, "target", void 0);

    graphite_query_defineProperty(this, "functions", []);

    graphite_query_defineProperty(this, "segments", []);

    graphite_query_defineProperty(this, "tags", []);

    graphite_query_defineProperty(this, "error", void 0);

    graphite_query_defineProperty(this, "seriesByTagUsed", false);

    graphite_query_defineProperty(this, "checkOtherSegmentsIndex", 0);

    graphite_query_defineProperty(this, "removeTagValue", void 0);

    graphite_query_defineProperty(this, "templateSrv", void 0);

    graphite_query_defineProperty(this, "scopedVars", void 0);

    this.datasource = datasource;
    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    this.parseTarget();
    this.removeTagValue = '-- remove tag --';
  }

  parseTarget() {
    this.functions = [];
    this.segments = [];
    this.tags = [];
    this.seriesByTagUsed = false;
    this.error = null;

    if (this.target.textEditor) {
      return;
    }

    const parser = new Parser(this.target.target);
    const astNode = parser.getAst();

    if (astNode === null) {
      this.checkOtherSegmentsIndex = 0;
      return;
    }

    if (astNode.type === 'error') {
      this.error = astNode.message + ' at position: ' + astNode.pos;
      this.target.textEditor = true;
      return;
    }

    try {
      this.parseTargetRecursive(astNode, null);
    } catch (err) {
      console.error('error parsing target:', err.message);
      this.error = err.message;
      this.target.textEditor = true;
    }

    this.checkOtherSegmentsIndex = this.segments.length - 1;
  }

  getSegmentPathUpTo(index) {
    const arr = this.segments.slice(0, index);
    return (0,lodash.reduce)(arr, (result, segment) => {
      return result ? result + '.' + segment.value : segment.value;
    }, '');
  }

  parseTargetRecursive(astNode, func) {
    if (astNode === null) {
      return null;
    }

    switch (astNode.type) {
      case 'function':
        const innerFunc = this.datasource.createFuncInstance(astNode.name, {
          withDefaultParams: false
        });
        (0,lodash.each)(astNode.params, param => {
          this.parseTargetRecursive(param, innerFunc);
        });
        innerFunc.updateText();
        this.functions.push(innerFunc); // extract tags from seriesByTag function and hide function

        if (innerFunc.def.name === 'seriesByTag' && !this.seriesByTagUsed) {
          this.seriesByTagUsed = true;
          innerFunc.hidden = true;
          this.tags = this.splitSeriesByTagParams(innerFunc);
        }

        break;

      case 'series-ref':
        if (this.segments.length > 0 || this.getSeriesByTagFuncIndex() >= 0) {
          this.addFunctionParameter(func, astNode.value);
        } else {
          this.segments.push(astNode);
        }

        break;

      case 'bool':
      case 'string':
      case 'number':
        this.addFunctionParameter(func, astNode.value);
        break;

      case 'metric':
        if (this.segments.length || this.tags.length) {
          this.addFunctionParameter(func, (0,lodash.join)((0,lodash.map)(astNode.segments, 'value'), '.'));
        } else {
          this.segments = astNode.segments;
        }

        break;
    }
  }

  updateSegmentValue(segment, index) {
    this.segments[index].value = segment.value;
  }

  addSelectMetricSegment() {
    this.segments.push({
      value: 'select metric'
    });
  }

  addFunction(newFunc) {
    this.functions.push(newFunc);
  }

  addFunctionParameter(func, value) {
    if (func.params.length >= func.def.params.length && !(0,lodash.get)((0,lodash.last)(func.def.params), 'multiple', false)) {
      throw {
        message: 'too many parameters for function ' + func.def.name
      };
    }

    func.params.push(value);
  }

  removeFunction(func) {
    this.functions = (0,lodash.without)(this.functions, func);
  }

  moveFunction(func, offset) {
    const index = this.functions.indexOf(func);
    (0,arrayMove/* arrayMove */.R)(this.functions, index, index + offset);
  }

  updateModelTarget(targets) {
    const wrapFunction = (target, func) => {
      return func.render(target, value => {
        return this.templateSrv.replace(value, this.scopedVars);
      });
    };

    if (!this.target.textEditor) {
      const metricPath = this.getSegmentPathUpTo(this.segments.length).replace(/\.?select metric$/, '');
      this.target.target = (0,lodash.reduce)(this.functions, wrapFunction, metricPath);
    }

    this.updateRenderedTarget(this.target, targets); // loop through other queries and update targetFull as needed

    for (const target of targets || []) {
      if (target.refId !== this.target.refId) {
        this.updateRenderedTarget(target, targets);
      }
    } // clean-up added param


    this.functions.forEach(func => func.added = false);
  }

  updateRenderedTarget(target, targets) {
    // render nested query
    const targetsByRefId = (0,lodash.keyBy)(targets, 'refId'); // no references to self

    delete targetsByRefId[target.refId];
    const nestedSeriesRefRegex = /\#([A-Z])/g;
    let targetWithNestedQueries = target.target; // Use ref count to track circular references

    function countTargetRefs(targetsByRefId, refId) {
      let refCount = 0;
      (0,lodash.each)(targetsByRefId, (t, id) => {
        if (id !== refId) {
          const match = nestedSeriesRefRegex.exec(t.target);
          const count = match && match.length ? match.length - 1 : 0;
          refCount += count;
        }
      });
      targetsByRefId[refId].refCount = refCount;
    }

    (0,lodash.each)(targetsByRefId, (t, id) => {
      countTargetRefs(targetsByRefId, id);
    }); // Keep interpolating until there are no query references
    // The reason for the loop is that the referenced query might contain another reference to another query

    while (targetWithNestedQueries.match(nestedSeriesRefRegex)) {
      const updated = targetWithNestedQueries.replace(nestedSeriesRefRegex, (match, g1) => {
        const t = targetsByRefId[g1];

        if (!t) {
          return match;
        } // no circular references


        if (t.refCount === 0) {
          delete targetsByRefId[g1];
        }

        t.refCount--;
        return t.target;
      });

      if (updated === targetWithNestedQueries) {
        break;
      }

      targetWithNestedQueries = updated;
    }

    delete target.targetFull;

    if (target.target !== targetWithNestedQueries) {
      target.targetFull = targetWithNestedQueries;
    }
  }

  splitSeriesByTagParams(func) {
    const tagPattern = /([^\!=~]+)(\!?=~?)(.*)/;
    return (0,lodash.flatten)((0,lodash.map)(func.params, param => {
      const matches = tagPattern.exec(param);

      if (matches) {
        const tag = matches.slice(1);

        if (tag.length === 3) {
          return {
            key: tag[0],
            operator: tag[1],
            value: tag[2]
          };
        }
      }

      return [];
    }));
  }

  getSeriesByTagFuncIndex() {
    return (0,lodash.findIndex)(this.functions, func => func.def.name === 'seriesByTag');
  }

  getSeriesByTagFunc() {
    const seriesByTagFuncIndex = this.getSeriesByTagFuncIndex();

    if (seriesByTagFuncIndex >= 0) {
      return this.functions[seriesByTagFuncIndex];
    } else {
      return undefined;
    }
  }

  addTag(tag) {
    const newTagParam = renderTagString(tag);
    this.getSeriesByTagFunc().params.push(newTagParam);
    this.tags.push(tag);
  }

  removeTag(index) {
    this.getSeriesByTagFunc().params.splice(index, 1);
    this.tags.splice(index, 1);
  }

  updateTag(tag, tagIndex) {
    this.error = null;

    if (tag.key === this.removeTagValue) {
      this.removeTag(tagIndex);

      if (this.tags.length === 0) {
        this.removeFunction(this.getSeriesByTagFunc());
        this.checkOtherSegmentsIndex = 0;
        this.seriesByTagUsed = false;
      }

      return;
    }

    this.getSeriesByTagFunc().params[tagIndex] = renderTagString(tag);
    this.tags[tagIndex] = tag;
  }

  renderTagExpressions() {
    let excludeIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    return (0,lodash.compact)((0,lodash.map)(this.tags, (tagExpr, index) => {
      // Don't render tag that we want to lookup
      if (index !== excludeIndex) {
        return tagExpr.key + tagExpr.operator + tagExpr.value;
      } else {
        return undefined;
      }
    }));
  }

}
GraphiteQuery.$inject = ["datasource", "target", "templateSrv", "scopedVars"];

function renderTagString(tag) {
  return tag.key + tag.operator + tag.value;
}
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./public/app/core/reducers/appNotification.ts
var reducers_appNotification = __webpack_require__("./public/app/core/reducers/appNotification.ts");
// EXTERNAL MODULE: ./public/app/store/store.ts
var store = __webpack_require__("./public/app/store/store.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/state/helpers.ts





/**
 * Helpers used by reducers and providers. They modify state object directly so should operate on a copy of the state.
 */
const GRAPHITE_TAG_OPERATORS = ['=', '!=', '=~', '!=~'];
/**
 * Tag names and metric names are displayed in a single dropdown. This prefix is used to
 * distinguish both in the UI.
 */

const TAG_PREFIX = 'tag: ';
/**
 * Create new AST based on new query.
 * Build segments from parsed metric name and functions.
 */

async function parseTarget(state) {
  state.queryModel.parseTarget();
  await buildSegments(state);
}
/**
 * Create segments out of the current metric path + add "select metrics" if it's possible to add more to the path
 */

async function buildSegments(state) {
  let modifyLastSegment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // Start with a shallow copy from the model, then check if "select metric" segment should be added at the end
  state.segments = (0,lodash.clone)(state.queryModel.segments);
  const checkOtherSegmentsIndex = state.queryModel.checkOtherSegmentsIndex || 0;
  await checkOtherSegments(state, checkOtherSegmentsIndex, modifyLastSegment);
}
/**
 * Add "select metric" segment at the end
 */

function addSelectMetricSegment(state) {
  state.queryModel.addSelectMetricSegment();
  state.segments.push({
    value: 'select metric',
    fake: true
  });
}
/**
 * Validates the state after adding or changing a segment:
 * - adds "select metric" only when more segments can be added to the metric name
 * - check if subsequent segments are still valid if in-between segment changes and
 *   removes invalid segments.
 */

async function checkOtherSegments(state, fromIndex) {
  let modifyLastSegment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (state.queryModel.segments.length === 1 && state.queryModel.segments[0].type === 'series-ref') {
    return;
  }

  if (fromIndex === 0) {
    addSelectMetricSegment(state);
    return;
  }

  const path = state.queryModel.getSegmentPathUpTo(fromIndex + 1);

  if (path === '') {
    return;
  }

  try {
    const segments = await state.datasource.metricFindQuery(path);

    if (segments.length === 0) {
      if (path !== '' && modifyLastSegment) {
        state.queryModel.segments = state.queryModel.segments.splice(0, fromIndex);
        state.segments = state.segments.splice(0, fromIndex);
        addSelectMetricSegment(state);
      }
    } else if (segments[0].expandable) {
      if (state.segments.length === fromIndex) {
        addSelectMetricSegment(state);
      } else {
        await checkOtherSegments(state, fromIndex + 1);
      }
    }
  } catch (err) {
    handleMetricsAutoCompleteError(state, err);
  }
}
function spliceSegments(state, index) {
  state.segments = state.segments.splice(0, index);
  state.queryModel.segments = state.queryModel.segments.splice(0, index);
}
function emptySegments(state) {
  state.queryModel.segments = [];
  state.segments = [];
}
/**
 * When seriesByTag function is added the UI changes it's state and only tags can be added from now.
 */

async function addSeriesByTagFunc(state, tag) {
  const newFunc = state.datasource.createFuncInstance('seriesByTag', {
    withDefaultParams: false
  });
  const tagParam = `${tag}=`;
  newFunc.params = [tagParam];
  state.queryModel.addFunction(newFunc);
  newFunc.added = true;
  emptySegments(state);
  handleTargetChanged(state);
  await parseTarget(state);
}
function smartlyHandleNewAliasByNode(state, func) {
  if (func.def.name !== 'aliasByNode') {
    return;
  }

  for (let i = 0; i < state.segments.length; i++) {
    if (state.segments[i].value.indexOf('*') >= 0) {
      func.params[0] = i;
      func.added = false;
      handleTargetChanged(state);
      return;
    }
  }
}
/**
 * Pauses running the query to allow selecting tag value. This is to prevent getting errors if the query is run
 * for a tag with no selected value.
 */

function pause(state) {
  state.paused = true;
}
function removeTagPrefix(value) {
  return value.replace(TAG_PREFIX, '');
}
function handleTargetChanged(state) {
  if (state.queryModel.error) {
    return;
  }

  const oldTarget = state.queryModel.target.target; // Interpolate from other queries:
  // Because of mixed data sources the list may contain queries for non-Graphite data sources. To ensure a valid query
  // is used for interpolation we should check required properties are passed though in theory it allows to interpolate
  // with queries that contain "target" property as well.

  state.queryModel.updateModelTarget((state.queries || []).filter(query => 'target' in query && typeof query.target === 'string'));

  if (state.queryModel.target.target !== oldTarget && !state.paused) {
    state.refresh();
  }
}
/**
 * When metrics autocomplete fails - the error is shown, but only once per page view
 */

function handleMetricsAutoCompleteError(state, error) {
  if (!state.metricAutoCompleteErrorShown) {
    state.metricAutoCompleteErrorShown = true;
    (0,store/* dispatch */.WI)((0,reducers_appNotification/* notifyApp */.$l)((0,appNotification/* createErrorNotification */.t_)(`Fetching metrics failed: ${error.message}.`)));
  }

  return state;
}
/**
 * When tags autocomplete fails - the error is shown, but only once per page view
 */

function handleTagsAutoCompleteError(state, error) {
  if (!state.tagsAutoCompleteErrorShown) {
    state.tagsAutoCompleteErrorShown = true;
    (0,store/* dispatch */.WI)((0,reducers_appNotification/* notifyApp */.$l)((0,appNotification/* createErrorNotification */.t_)(`Fetching tags failed: ${error.message}.`)));
  }

  return state;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/state/store.ts





const reducer = async (action, state) => {
  state = Object.assign({}, state);

  if (actions.init.match(action)) {
    const deps = action.payload;
    deps.target.target = deps.target.target || '';
    await deps.datasource.waitForFuncDefsLoaded();
    state = Object.assign({}, state, deps, {
      queryModel: new GraphiteQuery(deps.datasource, deps.target, (0,grafana_runtime_src.getTemplateSrv)()),
      supportsTags: deps.datasource.supportsTags,
      paused: false,
      removeTagValue: '-- remove tag --',
      funcDefs: deps.datasource.funcDefs,
      queries: deps.queries
    });
    await buildSegments(state, false);
  }

  if (actions.timeRangeChanged.match(action)) {
    state.range = action.payload;
  }

  if (actions.queriesChanged.match(action)) {
    state.queries = action.payload;
    handleTargetChanged(state);
  }

  if (actions.queryChanged.match(action)) {
    state.target.target = action.payload.target || '';
    await parseTarget(state);
    handleTargetChanged(state);
  }

  if (actions.segmentValueChanged.match(action)) {
    const {
      segment: segmentOrString,
      index: segmentIndex
    } = action.payload;
    let segment; // is segment was changed to a string - create a new segment

    if (typeof segmentOrString === 'string') {
      segment = {
        value: segmentOrString,
        expandable: true,
        fake: false
      };
    } else {
      segment = segmentOrString;
    }

    state.error = null;
    state.segments[segmentIndex] = segment;
    state.queryModel.updateSegmentValue(segment, segmentIndex);

    if (state.queryModel.functions.length > 0 && state.queryModel.functions[0].def.fake) {
      state.queryModel.functions = [];
    }

    if (segment.type === 'tag') {
      const tag = removeTagPrefix(segment.value);
      pause(state);
      await addSeriesByTagFunc(state, tag);
      return state;
    } // if newly selected segment can be expanded -> check if the path is correct


    if (segment.expandable) {
      await checkOtherSegments(state, segmentIndex + 1);
    } else {
      // if not expandable -> remove all other segments
      spliceSegments(state, segmentIndex + 1);
    }

    handleTargetChanged(state);
  }

  if (actions.tagChanged.match(action)) {
    const {
      tag,
      index: tagIndex
    } = action.payload;
    state.queryModel.updateTag(tag, tagIndex);
    handleTargetChanged(state);

    if (state.queryModel.tags.length === 0) {
      await checkOtherSegments(state, 0);
      state.paused = false;
    }
  }

  if (actions.addNewTag.match(action)) {
    const segment = action.payload.segment;
    const newTagKey = segment.value;
    const newTag = {
      key: newTagKey,
      operator: '=',
      value: ''
    };
    state.queryModel.addTag(newTag);
    handleTargetChanged(state);
  }

  if (actions.unpause.match(action)) {
    state.paused = false;
    state.refresh();
  }

  if (actions.addFunction.match(action)) {
    const newFunc = state.datasource.createFuncInstance(action.payload.name, {
      withDefaultParams: true
    });
    newFunc.added = true;
    state.queryModel.addFunction(newFunc);
    smartlyHandleNewAliasByNode(state, newFunc);

    if (state.segments.length === 1 && state.segments[0].fake) {
      emptySegments(state);
    }

    if (!newFunc.params.length && newFunc.added) {
      handleTargetChanged(state);
    }

    if (newFunc.def.name === 'seriesByTag') {
      await parseTarget(state);
    }
  }

  if (actions.removeFunction.match(action)) {
    state.queryModel.removeFunction(action.payload.func);
    handleTargetChanged(state);
  }

  if (actions.moveFunction.match(action)) {
    const {
      func,
      offset
    } = action.payload;
    state.queryModel.moveFunction(func, offset);
    handleTargetChanged(state);
  }

  if (actions.updateFunctionParam.match(action)) {
    const {
      func,
      index,
      value
    } = action.payload;
    func.updateParam(value, index);
    handleTargetChanged(state);
  }

  if (actions.updateQuery.match(action)) {
    state.target.target = action.payload.query;
    handleTargetChanged(state);
  }

  if (actions.runQuery.match(action)) {
    state.refresh();
  }

  if (actions.toggleEditorMode.match(action)) {
    state.target.textEditor = !state.target.textEditor;
    await parseTarget(state);
  }

  return Object.assign({}, state);
};

const createStore = onChange => {
  let state = {};

  const dispatch = async action => {
    state = await reducer(action, state);
    onChange(state);
  };

  return dispatch;
};
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/state/context.tsx






const DispatchContext = /*#__PURE__*/(0,react.createContext)({});
const GraphiteStateContext = /*#__PURE__*/(0,react.createContext)({});
const useDispatch = () => {
  return (0,react.useContext)(DispatchContext);
};
const useGraphiteState = () => {
  return (0,react.useContext)(GraphiteStateContext);
};
const GraphiteQueryEditorContext = _ref => {
  let {
    datasource,
    onRunQuery,
    onChange,
    query,
    queries,
    range,
    children
  } = _ref;
  const [state, setState] = (0,react.useState)();
  const [needsRefresh, setNeedsRefresh] = (0,react.useState)(false);
  const dispatch = (0,react.useMemo)(() => {
    return createStore(state => {
      setState(state);
    });
  }, []); // synchronise changes provided in props with editor's state

  const previousRange = (0,usePrevious/* default */.Z)(range);
  (0,react.useEffect)(() => {
    if ((previousRange === null || previousRange === void 0 ? void 0 : previousRange.raw) !== (range === null || range === void 0 ? void 0 : range.raw)) {
      dispatch(actions.timeRangeChanged(range));
    }
  }, [dispatch, range, previousRange]);
  (0,react.useEffect)(() => {
    if (state) {
      dispatch(actions.queriesChanged(queries));
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, queries]);
  (0,react.useEffect)(() => {
    var _state$target;

    if (state && ((_state$target = state.target) === null || _state$target === void 0 ? void 0 : _state$target.target) !== query.target) {
      dispatch(actions.queryChanged(query));
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dispatch, query]);
  (0,react.useEffect)(() => {
    if (needsRefresh && state) {
      setNeedsRefresh(false);
      onChange(Object.assign({}, query, {
        target: state.target.target
      }));
      onRunQuery();
    }
  }, // adding state to dependencies causes infinite loops
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [needsRefresh, onChange, onRunQuery, query]);

  if (!state) {
    dispatch(actions.init({
      target: query,
      datasource: datasource,
      range: range,
      templateSrv: (0,template_srv/* getTemplateSrv */.J)(),
      // list of queries is passed only when the editor is in Dashboards. This is to allow interpolation
      // of sub-queries which are stored in "targetFull" property used by alerting in the backend.
      queries: queries || [],
      refresh: () => {
        // do not run onChange/onRunQuery straight away to ensure the internal state gets updated first
        // to avoid race conditions (onChange could update props before the reducer action finishes)
        setNeedsRefresh(true);
      }
    }));
    return null;
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(GraphiteStateContext.Provider, {
      value: state,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(DispatchContext.Provider, {
        value: dispatch,
        children: children
      })
    });
  }
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/helpers.ts

function mapStringsToSelectables(values) {
  return values.map(value => ({
    value,
    label: value
  }));
}
function mapSegmentsToSelectables(segments) {
  return segments.map(segment => ({
    label: segment.value,
    value: segment
  }));
}
function mapFuncDefsToSelectables(funcDefs) {
  const categories = {};
  (0,lodash.forEach)(funcDefs, funcDef => {
    if (!funcDef.category) {
      return;
    }

    if (!categories[funcDef.category]) {
      categories[funcDef.category] = {
        label: funcDef.category,
        value: funcDef.category,
        options: []
      };
    }

    categories[funcDef.category].options.push({
      label: funcDef.name,
      value: funcDef.name
    });
  });
  return (0,lodash.sortBy)(categories, 'label');
}

function createEditableParam(paramDef, additional, value) {
  var _paramDef$options$map, _paramDef$options;

  return {
    name: paramDef.name,
    value: (value === null || value === void 0 ? void 0 : value.toString()) || '',
    optional: !!paramDef.optional || additional,
    // only first param is required when multiple are allowed
    multiple: !!paramDef.multiple,
    options: (_paramDef$options$map = (_paramDef$options = paramDef.options) === null || _paramDef$options === void 0 ? void 0 : _paramDef$options.map(option => ({
      value: option.toString(),
      label: option.toString()
    }))) !== null && _paramDef$options$map !== void 0 ? _paramDef$options$map : []
  };
}
/**
 * Create a list of params that can be edited in the function editor.
 */


function mapFuncInstanceToParams(func) {
  var _params;

  // list of required parameters (from func.def)
  const params = func.def.params.map((paramDef, index) => createEditableParam(paramDef, false, func.params[index])); // list of additional (multiple or optional) params entered by the user

  while (params.length < func.params.length) {
    const paramDef = func.def.params[func.def.params.length - 1];
    const value = func.params[params.length];
    params.push(createEditableParam(paramDef, true, value));
  } // extra "fake" param to allow adding more multiple values at the end


  if (params.length && params[params.length - 1].value && (_params = params[params.length - 1]) !== null && _params !== void 0 && _params.multiple) {
    const paramDef = func.def.params[func.def.params.length - 1];
    params.push(createEditableParam(paramDef, true, ''));
  }

  return params;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/AddGraphiteFunction.tsx







function AddGraphiteFunction(_ref) {
  let {
    funcDefs
  } = _ref;
  const dispatch = useDispatch();
  const [value, setValue] = (0,react.useState)(undefined);
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const options = (0,react.useMemo)(() => mapFuncDefsToSelectables(funcDefs), [funcDefs]); // Note: actions.addFunction will add a component that will have a dropdown or input in auto-focus
  // (the first param of the function). This auto-focus will cause onBlur() on AddGraphiteFunction's
  // Segment component and trigger onChange once again. (why? we call onChange if the user dismissed
  // the dropdown, see: SegmentSelect.onCloseMenu for more details). To avoid it we need to wait for
  // the Segment to disappear first (hence useEffect) and then dispatch the action that will add new
  // components.

  (0,react.useEffect)(() => {
    if ((value === null || value === void 0 ? void 0 : value.value) !== undefined) {
      dispatch(actions.addFunction({
        name: value.value
      }));
      setValue(undefined);
    }
  }, [value, dispatch]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Segment, {
    Component: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      icon: "plus",
      variant: "secondary",
      className: (0,emotion_css_esm.cx)(styles.button),
      "aria-label": "Add new function"
    }),
    options: options,
    onChange: setValue,
    inputMinWidth: 150
  });
}

function getStyles(theme) {
  return {
    button: emotion_css_esm.css`
      margin-right: ${theme.spacing(0.5)};
    `
  };
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/FunctionEditorControls.tsx
var _span;





const FunctionDescription = /*#__PURE__*/react.lazy(async () => {
  // @ts-ignore
  const {
    default: rst2html
  } = await __webpack_require__.e(/* import() | rst2html */ 495).then(__webpack_require__.t.bind(__webpack_require__, "./.yarn/cache/rst2html-https-e87da7ea2f-63d5ff3068.zip/node_modules/rst2html/dist/rst2html.min.js", 23));
  return {
    default(props) {
      var _props$description;

      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: rst2html((_props$description = props.description) !== null && _props$description !== void 0 ? _props$description : '')
        }
      });
    }

  };
});

const FunctionHelpButton = props => {
  if (props.description) {
    let tooltip = /*#__PURE__*/(0,jsx_runtime.jsx)(react.Suspense, {
      fallback: _span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "Loading description..."
      })),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(FunctionDescription, {
        description: props.description
      })
    });

    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: tooltip,
      placement: 'bottom-end',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        className: props.description ? undefined : 'pointer',
        name: "question-circle"
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
    className: "pointer",
    name: "question-circle",
    onClick: () => {
      window.open('http://graphite.readthedocs.org/en/latest/functions.html#graphite.render.functions.' + props.name, '_blank');
    }
  });
};

const FunctionEditorControls = props => {
  const {
    func,
    onMoveLeft,
    onMoveRight,
    onRemove
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    style: {
      display: 'flex',
      width: '60px',
      justifyContent: 'space-between'
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
      name: "arrow-left",
      onClick: () => onMoveLeft(func)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(FunctionHelpButton, {
      name: func.def.name,
      description: func.def.description
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
      name: "times",
      onClick: () => onRemove(func)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
      name: "arrow-right",
      onClick: () => onMoveRight(func)
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/FunctionEditor.tsx
var _TooltipContent, FunctionEditor_span;

const _excluded = ["onMoveLeft", "onMoveRight", "func"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const FunctionEditor_getStyles = theme => {
  return {
    icon: emotion_css_esm.css`
      margin-right: ${theme.spacing(0.5)};
    `,
    label: (0,emotion_css_esm.css)({
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.bodySmall.fontSize,
      // to match .gf-form-label
      cursor: 'pointer',
      display: 'inline-block'
    })
  };
};

const FunctionEditor = _ref => {
  let {
    onMoveLeft,
    onMoveRight,
    func
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,grafana_ui_src.useStyles2)(FunctionEditor_getStyles);

  const renderContent = _ref2 => {
    let {
      updatePopperPosition
    } = _ref2;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(FunctionEditorControls, Object.assign({}, props, {
      func: func,
      onMoveLeft: () => {
        onMoveLeft(func);
        updatePopperPosition();
      },
      onMoveRight: () => {
        onMoveRight(func);
        updatePopperPosition();
      }
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [func.def.unknown && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: _TooltipContent || (_TooltipContent = /*#__PURE__*/(0,jsx_runtime.jsx)(TooltipContent, {})),
      placement: "bottom",
      interactive: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        "data-testid": "warning-icon",
        name: "exclamation-triangle",
        size: "xs",
        className: styles.icon
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: renderContent,
      placement: "top",
      interactive: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: styles.label,
        children: func.def.name
      })
    })]
  });
};

const TooltipContent = /*#__PURE__*/react.memo(() => {
  return FunctionEditor_span || (FunctionEditor_span = /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
    children: ["This function is not supported. Check your function for typos and", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      target: "_blank",
      className: "external-link",
      rel: "noreferrer noopener",
      href: "https://graphite.readthedocs.io/en/latest/functions.html",
      children: "read the docs"
    }), ' ', "to see whether you need to upgrade your data source\u2019s version to make this function available."]
  }));
});
TooltipContent.displayName = 'FunctionEditorTooltipContent';

;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/FunctionParamEditor.tsx





/**
 * Render a function parameter with a segment dropdown for multiple options or simple input.
 */
function FunctionParamEditor(_ref) {
  var _editableParam$option;

  let {
    editableParam,
    onChange,
    onExpandedChange,
    autofocus
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(FunctionParamEditor_getStyles);

  if (((_editableParam$option = editableParam.options) === null || _editableParam$option === void 0 ? void 0 : _editableParam$option.length) > 0) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Segment, {
      autofocus: autofocus,
      value: editableParam.value,
      inputPlaceholder: editableParam.name,
      className: styles.segment,
      options: editableParam.options,
      placeholder: ' +' + editableParam.name,
      onChange: value => {
        onChange(value.value || '');
      },
      onExpandedChange: onExpandedChange,
      inputMinWidth: 150,
      allowCustomValue: true,
      allowEmptyValue: true
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentInput, {
      autofocus: autofocus,
      className: styles.input,
      value: editableParam.value || '',
      placeholder: ' +' + editableParam.name,
      inputPlaceholder: editableParam.name,
      onChange: value => {
        onChange(value.toString());
      },
      onExpandedChange: onExpandedChange // input style
      ,
      style: {
        height: '25px',
        paddingTop: '2px',
        marginTop: '2px',
        paddingLeft: '4px',
        minWidth: '100px'
      }
    });
  }
}

const FunctionParamEditor_getStyles = theme => ({
  segment: (0,emotion_css_esm.css)({
    margin: 0,
    padding: 0
  }),
  input: emotion_css_esm.css`
    margin: 0;
    padding: 0;
    input {
      height: 25px;
    },
  `
});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/GraphiteFunctionEditor.tsx











/**
 * Allows editing function params and removing/moving a function (note: editing function name is not supported)
 */
function GraphiteFunctionEditor(_ref) {
  let {
    func
  } = _ref;
  const dispatch = useDispatch();
  const styles = (0,grafana_ui_src.useStyles2)(GraphiteFunctionEditor_getStyles); // keep track of mouse over and isExpanded state to display buttons for adding optional/multiple params
  // only when the user mouse over over the function editor OR any param editor is expanded.

  const [mouseOver, setIsMouseOver] = (0,react.useState)(false);
  const [expanded, setIsExpanded] = (0,react.useState)(false);
  let params = mapFuncInstanceToParams(func);
  params = params.filter((p, index) => {
    // func.added is set for newly added functions - see autofocus below
    return index < func.def.params.length && !p.optional || func.added || p.value || expanded || mouseOver;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: (0,emotion_css_esm.cx)(styles.container, {
      [styles.error]: func.def.unknown
    }),
    onMouseOver: () => setIsMouseOver(true),
    onMouseLeave: () => setIsMouseOver(false),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      spacing: "none",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FunctionEditor, {
        func: func,
        onMoveLeft: () => {
          dispatch(actions.moveFunction({
            func,
            offset: -1
          }));
        },
        onMoveRight: () => {
          dispatch(actions.moveFunction({
            func,
            offset: 1
          }));
        },
        onRemove: () => {
          dispatch(actions.removeFunction({
            func
          }));
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
        className: styles.label,
        children: "("
      }), params.map((editableParam, index) => {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FunctionParamEditor, {
            autofocus: index === 0 && func.added,
            editableParam: editableParam,
            onChange: value => {
              if (value !== '' || editableParam.optional) {
                dispatch(actions.updateFunctionParam({
                  func,
                  index,
                  value
                }));
              }

              setIsExpanded(false);
              setIsMouseOver(false);
            },
            onExpandedChange: setIsExpanded
          }), index !== params.length - 1 ? ',' : '']
        }, index);
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
        className: styles.label,
        children: ")"
      })]
    })
  });
}

const GraphiteFunctionEditor_getStyles = theme => ({
  container: (0,emotion_css_esm.css)({
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.shape.borderRadius(),
    marginRight: theme.spacing(0.5),
    padding: `0 ${theme.spacing(1)}`,
    height: `${theme.v1.spacing.formInputHeight}px`
  }),
  error: emotion_css_esm.css`
    border: 1px solid ${theme.colors.error.main};
  `,
  label: (0,emotion_css_esm.css)({
    padding: 0,
    margin: 0
  }),
  button: (0,emotion_css_esm.css)({
    padding: theme.spacing(0.5)
  })
});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/FunctionsSection.tsx






function FunctionsSection(_ref) {
  let {
    functions = [],
    funcDefs
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.SegmentSection, {
    label: "Functions",
    fill: true,
    children: [functions.map((func, index) => {
      return !func.hidden && /*#__PURE__*/(0,jsx_runtime.jsx)(GraphiteFunctionEditor, {
        func: func
      }, index);
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(AddGraphiteFunction, {
      funcDefs: funcDefs
    })]
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/GraphiteTextEditor.tsx





function GraphiteTextEditor(_ref) {
  let {
    rawQuery
  } = _ref;
  const dispatch = useDispatch();
  const updateQuery = (0,react.useCallback)(query => {
    dispatch(actions.updateQuery({
      query
    }));
  }, [dispatch]);
  const runQuery = (0,react.useCallback)(() => {
    dispatch(actions.runQuery());
  }, [dispatch]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.QueryField, {
    query: rawQuery,
    onChange: updateQuery,
    onBlur: runQuery,
    onRunQuery: runQuery,
    placeholder: 'Enter a Graphite query (run with Shift+Enter)',
    portalOrigin: "graphite"
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/state/providers.ts




/**
 * All auto-complete lists are updated while typing. To avoid performance issues we do not render more
 * than MAX_SUGGESTIONS limits in a single dropdown.
 *
 * MAX_SUGGESTIONS is per metrics and tags separately. On the very first dropdown where metrics and tags are
 * combined together meaning it may end up with max of 2 * MAX_SUGGESTIONS items in total.
 */
const MAX_SUGGESTIONS = 5000;
/**
 * Providers are hooks for views to provide temporal data for autocomplete. They don't modify the state.
 */

/**
 * Return list of available options for a segment with given index
 *
 * It may be:
 * - mixed list of metrics and tags (only when nothing was selected)
 * - list of metric names (if a metric name was selected for this segment)
 */

async function getAltSegments(state, index, prefix) {
  let query = prefix.length > 0 ? '*' + prefix + '*' : '*';

  if (index > 0) {
    query = state.queryModel.getSegmentPathUpTo(index) + '.' + query;
  }

  const options = {
    range: state.range,
    requestId: 'get-alt-segments'
  };

  try {
    const segments = await state.datasource.metricFindQuery(query, options);
    const altSegments = (0,lodash.map)(segments, segment => {
      return {
        value: segment.text,
        expandable: segment.expandable
      };
    });

    if (index > 0 && altSegments.length === 0) {
      return altSegments;
    } // add query references


    if (index === 0) {
      (0,lodash.eachRight)(state.queries, target => {
        if (target.refId === state.queryModel.target.refId) {
          return;
        }

        altSegments.unshift({
          type: 'series-ref',
          value: '#' + target.refId,
          expandable: false
        });
      });
    } // add template variables


    (0,lodash.eachRight)(state.templateSrv.getVariables(), variable => {
      altSegments.unshift({
        type: 'template',
        value: '$' + variable.name,
        expandable: true
      });
    }); // add wildcard option and limit number of suggestions (API doesn't support limiting
    // hence we are doing it here)

    altSegments.unshift({
      value: '*',
      expandable: true
    });
    altSegments.splice(MAX_SUGGESTIONS);

    if (state.supportsTags && index === 0) {
      removeTaggedEntry(altSegments);
      return await addAltTagSegments(state, prefix, altSegments);
    } else {
      return altSegments;
    }
  } catch (err) {
    handleMetricsAutoCompleteError(state, err);
  }

  return [];
}
/**
 * Get the list of segments with tags and metrics. Suggestions are reduced in getAltSegments and addAltTagSegments so in case
 * we hit MAX_SUGGESTIONS limit there are always some tags and metrics shown.
 */


async function getAltSegmentsSelectables(state, index, prefix) {
  return mapSegmentsToSelectables(await getAltSegments(state, index, prefix));
}
function getTagOperatorsSelectables() {
  return mapStringsToSelectables(GRAPHITE_TAG_OPERATORS);
}
/**
 * Returns tags as dropdown options
 */

async function getTags(state, index, tagPrefix) {
  try {
    const tagExpressions = state.queryModel.renderTagExpressions(index);
    const values = await state.datasource.getTagsAutoComplete(tagExpressions, tagPrefix, {
      range: state.range,
      limit: MAX_SUGGESTIONS
    });
    const altTags = (0,lodash.map)(values, 'text');
    altTags.splice(0, 0, state.removeTagValue);
    return altTags;
  } catch (err) {
    handleTagsAutoCompleteError(state, err);
  }

  return [];
}

async function getTagsSelectables(state, index, tagPrefix) {
  return mapStringsToSelectables(await getTags(state, index, tagPrefix));
}
/**
 * List of tags when a tag is added. getTags is used for editing.
 * When adding - segment is used. When editing - dropdown is used.
 */

async function getTagsAsSegments(state, tagPrefix) {
  let tagsAsSegments;

  try {
    const tagExpressions = state.queryModel.renderTagExpressions();
    const values = await state.datasource.getTagsAutoComplete(tagExpressions, tagPrefix, {
      range: state.range,
      limit: MAX_SUGGESTIONS
    });
    tagsAsSegments = (0,lodash.map)(values, val => {
      return {
        value: val.text,
        type: 'tag',
        expandable: false
      };
    });
  } catch (err) {
    tagsAsSegments = [];
    handleTagsAutoCompleteError(state, err);
  }

  return tagsAsSegments;
}
/**
 * Get list of tags, used when adding additional tags (first tag is selected from a joined list of metrics and tags)
 */


async function getTagsAsSegmentsSelectables(state, tagPrefix) {
  return mapSegmentsToSelectables(await getTagsAsSegments(state, tagPrefix));
}

async function getTagValues(state, tag, index, valuePrefix) {
  const tagExpressions = state.queryModel.renderTagExpressions(index);
  const tagKey = tag.key;
  const values = await state.datasource.getTagValuesAutoComplete(tagExpressions, tagKey, valuePrefix, {
    limit: MAX_SUGGESTIONS
  });
  const altValues = (0,lodash.map)(values, 'text'); // Add template variables as additional values

  (0,lodash.eachRight)(state.templateSrv.getVariables(), variable => {
    altValues.push('${' + variable.name + ':regex}');
  });
  return altValues;
}

async function getTagValuesSelectables(state, tag, index, valuePrefix) {
  return mapStringsToSelectables(await getTagValues(state, tag, index, valuePrefix));
}
/**
 * Add segments with tags prefixed with "tag: " to include them in the same list as metrics
 */

async function addAltTagSegments(state, prefix, altSegments) {
  let tagSegments = await getTagsAsSegments(state, prefix);
  tagSegments = (0,lodash.map)(tagSegments, segment => {
    segment.value = TAG_PREFIX + segment.value;
    return segment;
  });
  return altSegments.concat(...tagSegments);
}

function removeTaggedEntry(altSegments) {
  (0,lodash.remove)(altSegments, s => s.value === '_tagged');
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/MetricSegment.tsx








/**
 * Represents a single metric node in the metric path at the given index. Allows to change the metric name to one of the
 * provided options or a custom value.
 *
 * Options for tag names and metric names are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 *
 * getAltSegmentsSelectables() also returns list of tags for segment with index=0. Once a tag is selected the editor
 * enters tag-adding mode (see SeriesSection and GraphiteQueryModel.seriesByTagUsed).
 */
function MetricSegment(_ref) {
  let {
    metricIndex,
    segment,
    state
  } = _ref;
  const dispatch = useDispatch();
  const loadOptions = (0,react.useCallback)(value => {
    return getAltSegmentsSelectables(state, metricIndex, value || '');
  }, [state, metricIndex]);
  const debouncedLoadOptions = (0,react.useMemo)(() => (0,lodash.debounce)(loadOptions, 200, {
    leading: true
  }), [loadOptions]);
  const onSegmentChanged = (0,react.useCallback)(selectableValue => {
    // selectableValue.value is always defined because emptyValues are not allowed in SegmentAsync by default
    dispatch(actions.segmentValueChanged({
      segment: selectableValue.value,
      index: metricIndex
    }));
  }, [dispatch, metricIndex]); // segmentValueChanged action will destroy SegmentAsync immediately if a tag is selected. To give time
  // for the clean up the action is debounced.

  const onSegmentChangedDebounced = (0,react.useMemo)(() => (0,lodash.debounce)(onSegmentChanged, 100), [onSegmentChanged]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentAsync, {
    value: segment.value,
    inputMinWidth: 150,
    allowCustomValue: true,
    loadOptions: debouncedLoadOptions,
    reloadOptionsOnChange: true,
    onChange: onSegmentChangedDebounced
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/MetricsSection.tsx




function MetricsSection(_ref) {
  let {
    segments = [],
    state
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: segments.map((segment, index) => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(MetricSegment, {
        segment: segment,
        metricIndex: index,
        state: state
      }, index);
    })
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/PlayButton.tsx





function PlayButton() {
  const dispatch = useDispatch();
  const onClick = (0,react.useCallback)(() => {
    dispatch(actions.unpause());
  }, [dispatch]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
    icon: "play",
    onClick: onClick,
    type: "button",
    variant: "secondary",
    "aria-label": "Unpause query"
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/TagEditor.tsx










/**
 * Editor for a tag at given index. Allows changing the name of the tag, operator or value. Tag names are provided with
 * getTagsSelectables and contain only valid tags (it may depend on currently used tags). The dropdown for tag names is
 * also used for removing tag (with a special "--remove tag--" option provided by getTagsSelectables).
 *
 * Options for tag names and values are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 */
function TagEditor(_ref) {
  let {
    tag,
    tagIndex,
    state
  } = _ref;
  const dispatch = useDispatch();
  const getTagsOptions = (0,react.useCallback)(inputValue => {
    return getTagsSelectables(state, tagIndex, inputValue || '');
  }, [state, tagIndex]);
  const debouncedGetTagsOptions = (0,react.useMemo)(() => (0,lodash.debounce)(getTagsOptions, 200, {
    leading: true
  }), [getTagsOptions]);
  const getTagValueOptions = (0,react.useCallback)(inputValue => {
    return getTagValuesSelectables(state, tag, tagIndex, inputValue || '');
  }, [state, tagIndex, tag]);
  const debouncedGetTagValueOptions = (0,react.useMemo)(() => (0,lodash.debounce)(getTagValueOptions, 200, {
    leading: true
  }), [getTagValueOptions]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentAsync, {
      inputMinWidth: 150,
      value: tag.key,
      loadOptions: debouncedGetTagsOptions,
      reloadOptionsOnChange: true,
      onChange: value => {
        dispatch(actions.tagChanged({
          tag: Object.assign({}, tag, {
            key: value.value
          }),
          index: tagIndex
        }));
      },
      allowCustomValue: true
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Segment, {
      inputMinWidth: 50,
      value: tag.operator,
      options: getTagOperatorsSelectables(),
      onChange: value => {
        dispatch(actions.tagChanged({
          tag: Object.assign({}, tag, {
            operator: value.value
          }),
          index: tagIndex
        }));
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentAsync, {
      inputMinWidth: 150,
      value: tag.value,
      loadOptions: debouncedGetTagValueOptions,
      reloadOptionsOnChange: true,
      onChange: value => {
        dispatch(actions.tagChanged({
          tag: Object.assign({}, tag, {
            value: value.value
          }),
          index: tagIndex
        }));
      },
      allowCustomValue: true
    })]
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/TagsSection.tsx
var _PlayButton;














/**
 * Renders all tags and a button allowing to add more tags.
 *
 * Options for tag names are reloaded while user is typing with backend taking care of auto-complete
 * (auto-complete cannot be implemented in front-end because backend returns only limited number of entries)
 */
function TagsSection(_ref) {
  let {
    tags,
    state
  } = _ref;
  const dispatch = useDispatch();
  const styles = (0,grafana_ui_src.useStyles2)(TagsSection_getStyles); // Options are reloaded while user is typing with backend taking care of auto-complete (auto-complete cannot be
  // implemented in front-end because backend returns only limited number of entries)

  const getTagsAsSegmentsOptions = (0,react.useCallback)(inputValue => {
    return getTagsAsSegmentsSelectables(state, inputValue || '');
  }, [state]);
  const debouncedGetTagsAsSegments = (0,react.useMemo)(() => (0,lodash.debounce)(getTagsAsSegmentsOptions, 200, {
    leading: true
  }), [getTagsAsSegmentsOptions]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [tags.map((tag, index) => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(TagEditor, {
        tagIndex: index,
        tag: tag,
        state: state
      }, index);
    }), tags.length && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentAsync, {
      inputMinWidth: 150,
      onChange: value => {
        dispatch(actions.addNewTag({
          segment: value.value
        }));
      },
      loadOptions: debouncedGetTagsAsSegments,
      reloadOptionsOnChange: true,
      Component: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        icon: "plus",
        variant: "secondary",
        className: styles.button,
        "aria-label": "Add new tag"
      })
    }), state.paused && (_PlayButton || (_PlayButton = /*#__PURE__*/(0,jsx_runtime.jsx)(PlayButton, {})))]
  });
}

function TagsSection_getStyles(theme) {
  return {
    button: emotion_css_esm.css`
      margin-right: ${theme.spacing(0.5)};
    `
  };
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/SeriesSection.tsx





function SeriesSection(_ref) {
  var _state$queryModel, _state$queryModel2;

  let {
    state
  } = _ref;
  const sectionContent = (_state$queryModel = state.queryModel) !== null && _state$queryModel !== void 0 && _state$queryModel.seriesByTagUsed ? /*#__PURE__*/(0,jsx_runtime.jsx)(TagsSection, {
    tags: (_state$queryModel2 = state.queryModel) === null || _state$queryModel2 === void 0 ? void 0 : _state$queryModel2.tags,
    state: state
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsSection, {
    segments: state.segments,
    state: state
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentSection, {
    label: "Series",
    fill: true,
    children: sectionContent
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/GraphiteQueryEditor.tsx
var _GraphiteQueryEditorC;












function GraphiteQueryEditor(_ref) {
  let {
    datasource,
    onRunQuery,
    onChange,
    query,
    range,
    queries
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GraphiteQueryEditorContext, {
    datasource: datasource,
    onRunQuery: onRunQuery,
    onChange: onChange,
    query: query,
    queries: queries,
    range: range,
    children: _GraphiteQueryEditorC || (_GraphiteQueryEditorC = /*#__PURE__*/(0,jsx_runtime.jsx)(GraphiteQueryEditorContent, {}))
  });
}

function GraphiteQueryEditorContent() {
  var _state$target, _state$target2, _state$queryModel;

  const dispatch = useDispatch();
  const state = useGraphiteState();
  const styles = (0,grafana_ui_src.useStyles2)(GraphiteQueryEditor_getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.visualEditor,
      children: [((_state$target = state.target) === null || _state$target === void 0 ? void 0 : _state$target.textEditor) && /*#__PURE__*/(0,jsx_runtime.jsx)(GraphiteTextEditor, {
        rawQuery: state.target.target
      }), !((_state$target2 = state.target) !== null && _state$target2 !== void 0 && _state$target2.textEditor) && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SeriesSection, {
          state: state
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(FunctionsSection, {
          functions: (_state$queryModel = state.queryModel) === null || _state$queryModel === void 0 ? void 0 : _state$queryModel.functions,
          funcDefs: state.funcDefs
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      className: styles.toggleButton,
      icon: "pen",
      variant: "secondary",
      "aria-label": "Toggle editor mode",
      onClick: () => {
        dispatch(actions.toggleEditorMode());
      }
    })]
  });
}

function GraphiteQueryEditor_getStyles(theme) {
  return {
    container: emotion_css_esm.css`
      display: flex;
    `,
    visualEditor: emotion_css_esm.css`
      flex-grow: 1;
    `,
    toggleButton: emotion_css_esm.css`
      margin-left: ${theme.spacing(0.5)};
    `
  };
}
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/meta.ts
// https://github.com/grafana/metrictank/blob/master/scripts/config/storage-schemas.conf#L15-L46
function toInteger(val) {
  if (val) {
    return parseInt(val, 10);
  }

  return undefined;
}

function toBooleanOrTimestamp(val) {
  if (val) {
    if (val === 'true') {
      return true;
    }

    if (val === 'false') {
      return false;
    }

    return parseInt(val, 10);
  }

  return undefined;
}

function getRollupNotice(metaList) {
  for (const meta of metaList) {
    const archiveIndex = meta['archive-read'];

    if (archiveIndex > 0) {
      var _meta$consolidatorNo;

      const schema = parseSchemaRetentions(meta['schema-retentions']);
      const intervalString = schema[archiveIndex].interval;
      const func = ((_meta$consolidatorNo = meta['consolidator-normfetch']) !== null && _meta$consolidatorNo !== void 0 ? _meta$consolidatorNo : '').replace('Consolidator', '');
      return {
        text: `Data is rolled up, aggregated over ${intervalString} using ${func} function`,
        severity: 'info',
        inspect: 'meta'
      };
    }
  }

  return null;
}
function getRuntimeConsolidationNotice(metaList) {
  for (const meta of metaList) {
    const runtimeNr = meta['aggnum-rc'];

    if (runtimeNr > 0) {
      var _meta$consolidatorRc;

      const func = ((_meta$consolidatorRc = meta['consolidator-rc']) !== null && _meta$consolidatorRc !== void 0 ? _meta$consolidatorRc : '').replace('Consolidator', '');
      return {
        text: `Data is runtime consolidated, ${runtimeNr} datapoints combined using ${func} function`,
        severity: 'info',
        inspect: 'meta'
      };
    }
  }

  return null;
}
function parseSchemaRetentions(spec) {
  if (!spec) {
    return [];
  }

  return spec.split(',').map(str => {
    const vals = str.split(':');
    return {
      interval: vals[0],
      retention: vals[1],
      chunkspan: vals[2],
      numchunks: toInteger(vals[3]),
      ready: toBooleanOrTimestamp(vals[4])
    };
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/components/MetricTankMetaInspector.tsx
var _p, _p2, _p3, _div, _h;









class MetricTankMetaInspector extends react.PureComponent {
  renderMeta(meta, key) {
    var _meta$consolidatorNo;

    const styles = MetricTankMetaInspector_getStyles();
    const buckets = parseSchemaRetentions(meta['schema-retentions']);
    const rollupNotice = getRollupNotice([meta]);
    const runtimeNotice = getRuntimeConsolidationNotice([meta]);
    const normFunc = ((_meta$consolidatorNo = meta['consolidator-normfetch']) !== null && _meta$consolidatorNo !== void 0 ? _meta$consolidatorNo : '').replace('Consolidator', '');
    const totalSeconds = buckets.reduce((acc, bucket) => acc + (bucket.retention ? src.rangeUtil.intervalToSeconds(bucket.retention) : 0), 0);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.metaItem,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.metaItemHeader,
        children: ["Schema: ", meta['schema-name'], /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "small muted",
          children: ["Series count: ", meta.count]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.metaItemBody,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 1: Fetch"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.stepDescription,
            children: "First data is fetched, either from raw data archive or a rollup archive"
          }), rollupNotice && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: rollupNotice.text
          }), !rollupNotice && (_p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: "No rollup archive was used"
          }))), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: buckets.map((bucket, index) => {
              const bucketLength = bucket.retention ? src.rangeUtil.intervalToSeconds(bucket.retention) : 0;
              const lengthPercent = bucketLength / totalSeconds * 100;
              const isActive = index === meta['archive-read'];
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: styles.bucket,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: styles.bucketInterval,
                  children: bucket.interval
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: (0,emotion_css_esm.cx)(styles.bucketRetention, {
                    [styles.bucketRetentionActive]: isActive
                  }),
                  style: {
                    flexGrow: lengthPercent
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  style: {
                    flexGrow: 100 - lengthPercent
                  },
                  children: bucket.retention
                })]
              }, bucket.retention);
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 2: Normalization"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.stepDescription,
            children: "Normalization happens when series with different intervals between points are combined."
          }), meta['aggnum-norm'] > 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
            children: ["Normalization did occur using ", normFunc]
          }), meta['aggnum-norm'] === 1 && (_p2 || (_p2 = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: "No normalization was needed"
          })))]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.step,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.stepHeading,
            children: "Step 3: Runtime consolidation"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.stepDescription,
            children: "If there are too many data points at this point Metrictank will consolidate them down to below max data points (set in queries tab)."
          }), runtimeNotice && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: runtimeNotice.text
          }), !runtimeNotice && (_p3 || (_p3 = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
            children: "No runtime consolidation"
          })))]
        })]
      })]
    }, key);
  }

  render() {
    const {
      data
    } = this.props; // away to dedupe them

    const seriesMetas = {};

    for (const series of data) {
      if (series.meta && series.meta.custom) {
        for (const metaItem of series.meta.custom.seriesMetaList) {
          // key is to dedupe as many series will have identitical meta
          const key = `${JSON.stringify(metaItem)}`;

          if (seriesMetas[key]) {
            seriesMetas[key].count += metaItem.count;
          } else {
            seriesMetas[key] = metaItem;
          }
        }
      }
    }

    if (Object.keys(seriesMetas).length === 0) {
      return _div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "No response meta data"
      }));
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        className: "page-heading",
        children: "Metrictank Lineage"
      })), Object.keys(seriesMetas).map(key => this.renderMeta(seriesMetas[key], key))]
    });
  }

}
const MetricTankMetaInspector_getStyles = (0,grafana_ui_src.stylesFactory)(() => {
  const {
    theme
  } = config/* config */.vc;
  const borderColor = theme.isDark ? theme.palette.gray25 : theme.palette.gray85;
  const background = theme.isDark ? theme.palette.dark1 : theme.palette.white;
  const headerBg = theme.isDark ? theme.palette.gray15 : theme.palette.gray85;
  return {
    metaItem: emotion_css_esm.css`
      background: ${background};
      border: 1px solid ${borderColor};
      margin-bottom: ${theme.spacing.md};
    `,
    metaItemHeader: emotion_css_esm.css`
      background: ${headerBg};
      padding: ${theme.spacing.xs} ${theme.spacing.md};
      font-size: ${theme.typography.size.md};
      display: flex;
      justify-content: space-between;
    `,
    metaItemBody: emotion_css_esm.css`
      padding: ${theme.spacing.md};
    `,
    stepHeading: emotion_css_esm.css`
      font-size: ${theme.typography.size.md};
    `,
    stepDescription: emotion_css_esm.css`
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.textWeak};
      margin-bottom: ${theme.spacing.sm};
    `,
    step: emotion_css_esm.css`
      margin-bottom: ${theme.spacing.lg};

      &:last-child {
        margin-bottom: 0;
      }
    `,
    bucket: emotion_css_esm.css`
      display: flex;
      margin-bottom: ${theme.spacing.sm};
      border-radius: ${theme.border.radius.md};
    `,
    bucketInterval: emotion_css_esm.css`
      flex-grow: 0;
      width: 60px;
    `,
    bucketRetention: emotion_css_esm.css`
      background: linear-gradient(0deg, ${theme.palette.blue85}, ${theme.palette.blue95});
      text-align: center;
      color: ${theme.palette.white};
      margin-right: ${theme.spacing.md};
      border-radius: ${theme.border.radius.md};
    `,
    bucketRetentionActive: emotion_css_esm.css`
      background: linear-gradient(0deg, ${theme.palette.greenBase}, ${theme.palette.greenShade});
    `
  };
});
// EXTERNAL MODULE: ./public/app/core/store.ts
var core_store = __webpack_require__("./public/app/core/store.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/types.ts
let GraphiteType;

(function (GraphiteType) {
  GraphiteType["Default"] = "default";
  GraphiteType["Metrictank"] = "metrictank";
})(GraphiteType || (GraphiteType = {}));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/versions.ts

const GRAPHITE_VERSIONS = ['0.9', '1.0', '1.1'];
const DEFAULT_GRAPHITE_VERSION = (0,lodash.last)(GRAPHITE_VERSIONS);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/configuration/MappingsHelp.tsx
var MappingsHelp_p, MappingsHelp_p2, MappingsHelp_p3, _p4, _table;





function MappingsHelp(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
    severity: "info",
    title: "How to map Graphite metrics to labels?",
    onRemove: props.onDismiss,
    children: [MappingsHelp_p || (MappingsHelp_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "Mappings are currently supported only between Graphite and Loki queries."
    })), MappingsHelp_p2 || (MappingsHelp_p2 = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "When you switch your data source from Graphite to Loki, your queries are mapped according to the mappings defined in the example below. To define a mapping, write the full path of the metric and replace nodes you want to map to label with the label name in parentheses. The value of the label is extracted from your Graphite query when you switch data sources."
    })), MappingsHelp_p3 || (MappingsHelp_p3 = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "All tags are automatically mapped to labels regardless of the mapping configuration. Graphite matching patterns (using {}) are converted to Loki's regular expressions matching patterns. When you use functions in your queries, the metrics, and tags are extracted to match them with defined mappings."
    })), _p4 || (_p4 = /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
      children: ["Example: for a mapping = ", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
        children: "servers.(cluster).(server).*"
      }), ":"]
    })), _table || (_table = /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Graphite query"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Mapped to Loki query"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["alias(servers.", /*#__PURE__*/(0,jsx_runtime.jsx)("u", {
                children: "west"
              }), ".", /*#__PURE__*/(0,jsx_runtime.jsx)("u", {
                children: "001"
              }), ".cpu,1,2)"]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["{cluster=\"", /*#__PURE__*/(0,jsx_runtime.jsx)("u", {
                children: "west"
              }), "\", server=\"", /*#__PURE__*/(0,jsx_runtime.jsx)("u", {
                children: "001"
              }), "\"}"]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["alias(servers.*.", /*#__PURE__*/(0,jsx_runtime.jsx)("u", {
                children: "{001,002}"
              }), ".*,1,2)"]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("code", {
              children: ["{server=~\"", /*#__PURE__*/(0,jsx_runtime.jsx)("u", {
                children: "(001|002)"
              }), "\"}"]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: "interpolate(seriesByTag('foo=bar', 'server=002'), inf))"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: "{foo=\"bar\", server=\"002\"}"
            })
          })]
        })]
      })]
    }))]
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/configuration/MappingsConfiguration.tsx
var MappingsConfiguration_h, _Icon;






const MappingsConfiguration = props => {
  const [mappings, setMappings] = (0,react.useState)(props.mappings || []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [MappingsConfiguration_h || (MappingsConfiguration_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Label mappings"
    })), !props.showHelp && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "link",
        onClick: props.onRestoreHelp,
        children: "Learn how label mappings work"
      })
    }), props.showHelp && /*#__PURE__*/(0,jsx_runtime.jsx)(MappingsHelp, {
      onDismiss: props.onDismiss
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "gf-form-group",
      children: [mappings.map((mapping, i) => /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: `Mapping (${i + 1})`,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            width: 50,
            onChange: changeEvent => {
              let newMappings = mappings.concat();
              newMappings[i] = changeEvent.target.value;
              setMappings(newMappings);
            },
            onBlur: () => {
              props.onChange(mappings);
            },
            placeholder: "e.g. test.metric.(labelName).*",
            value: mapping
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          type: "button",
          "aria-label": "Remove header",
          variant: "secondary",
          size: "xs",
          onClick: _ => {
            let newMappings = mappings.concat();
            newMappings.splice(i, 1);
            setMappings(newMappings);
            props.onChange(newMappings);
          },
          children: _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "trash-alt"
          }))
        })]
      }, i)), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        icon: "plus",
        type: "button",
        onClick: () => {
          setMappings([...mappings, '']);
        },
        children: "Add label mapping"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/configuration/parseLokiLabelMappings.ts
/**
 * Converts a simple string used in LokiLogsMappings component (e.g. "servers.(name).*")
 * to data model saved in data source configuration.
 */
function fromString(text) {
  return {
    matchers: text.split('.').map(metricNode => {
      if (metricNode.startsWith('(') && metricNode.endsWith(')')) {
        return {
          value: '*',
          labelName: metricNode.slice(1, -1)
        };
      } else {
        return {
          value: metricNode
        };
      }
    })
  };
}
/**
 * Coverts configuration stored in data source configuration into a string displayed in LokiLogsMappings component.
 */

function parseLokiLabelMappings_toString(mapping) {
  return mapping.matchers.map(matcher => {
    return matcher.labelName ? `(${matcher.labelName})` : `${matcher.value}`;
  }).join('.');
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/configuration/ConfigEditor.tsx
var ConfigEditor_p, _Alert, ConfigEditor_h, _InlineFormLabel;

function ConfigEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const {
  Select,
  Switch
} = grafana_ui_src.LegacyForms;
const SHOW_MAPPINGS_HELP_KEY = 'grafana.datasources.graphite.config.showMappingsHelp';
const graphiteVersions = GRAPHITE_VERSIONS.map(version => ({
  label: `${version}.x`,
  value: version
}));
const graphiteTypes = Object.entries(GraphiteType).map(_ref => {
  let [label, value] = _ref;
  return {
    label,
    value
  };
});
class ConfigEditor extends react.PureComponent {
  constructor(props) {
    super(props);

    ConfigEditor_defineProperty(this, "renderTypeHelp", () => {
      return ConfigEditor_p || (ConfigEditor_p = /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        children: ["There are different types of Graphite compatible backends. Here you can specify the type you are using. If you are using", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "https://github.com/grafana/metrictank",
          className: "pointer",
          target: "_blank",
          rel: "noreferrer",
          children: "Metrictank"
        }), ' ', "then select that here. This will enable Metrictank specific features like query processing meta data. Metrictank is a multi-tenant timeseries engine for Graphite and friends."]
      }));
    });

    this.state = {
      showMappingsHelp: core_store/* default.getObject */.Z.getObject(SHOW_MAPPINGS_HELP_KEY, true)
    };
  }

  componentDidMount() {
    (0,src.updateDatasourcePluginJsonDataOption)(this.props, 'graphiteVersion', this.currentGraphiteVersion);
  }

  render() {
    var _options$jsonData$imp, _options$jsonData$imp2;

    const {
      options,
      onOptionsChange
    } = this.props;
    const currentVersion = graphiteVersions.find(item => item.value === this.currentGraphiteVersion);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [options.access === 'direct' && (_Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: "Deprecation Notice",
        severity: "warning",
        children: "This data source uses browser access mode. This mode is deprecated and will be removed in the future. Please use server access mode instead."
      }))), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
        defaultUrl: "http://localhost:8080",
        dataSourceConfig: options,
        onChange: onOptionsChange
      }), ConfigEditor_h || (ConfigEditor_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: "page-heading",
        children: "Graphite details"
      })), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form-group",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "gf-form",
            children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
              tooltip: "This option controls what functions are available in the Graphite query editor.",
              children: "Version"
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(Select, {
              "aria-label": "Graphite version",
              value: currentVersion,
              options: graphiteVersions,
              width: 8,
              onChange: (0,src.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'graphiteVersion')
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "gf-form",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
              tooltip: this.renderTypeHelp,
              children: "Type"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Select, {
              "aria-label": "Graphite backend type",
              options: graphiteTypes,
              value: graphiteTypes.find(type => type.value === options.jsonData.graphiteType),
              width: 8,
              onChange: (0,src.onUpdateDatasourceJsonDataOptionSelect)(this.props, 'graphiteType')
            })]
          })
        }), options.jsonData.graphiteType === GraphiteType.Metrictank && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form-inline",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Switch, {
              label: "Rollup indicator",
              labelClass: 'width-10',
              tooltip: "Shows up as an info icon in panel headers when data is aggregated",
              checked: !!options.jsonData.rollupIndicatorEnabled,
              onChange: (0,src.onUpdateDatasourceJsonDataOptionChecked)(this.props, 'rollupIndicatorEnabled')
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(MappingsConfiguration, {
        mappings: (((_options$jsonData$imp = options.jsonData.importConfiguration) === null || _options$jsonData$imp === void 0 ? void 0 : (_options$jsonData$imp2 = _options$jsonData$imp.loki) === null || _options$jsonData$imp2 === void 0 ? void 0 : _options$jsonData$imp2.mappings) || []).map(parseLokiLabelMappings_toString),
        showHelp: this.state.showMappingsHelp,
        onDismiss: () => {
          this.setState({
            showMappingsHelp: false
          });
          core_store/* default.setObject */.Z.setObject(SHOW_MAPPINGS_HELP_KEY, false);
        },
        onRestoreHelp: () => {
          this.setState({
            showMappingsHelp: true
          });
          core_store/* default.setObject */.Z.setObject(SHOW_MAPPINGS_HELP_KEY, true);
        },
        onChange: mappings => {
          onOptionsChange(Object.assign({}, options, {
            jsonData: Object.assign({}, options.jsonData, {
              importConfiguration: Object.assign({}, options.jsonData.importConfiguration, {
                loki: {
                  mappings: mappings.map(fromString)
                }
              })
            })
          }));
        }
      })]
    });
  }

  get currentGraphiteVersion() {
    return this.props.options.jsonData.graphiteVersion || DEFAULT_GRAPHITE_VERSION;
  }

}
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js
var throwError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/util/pipe.js
var pipe = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/util/pipe.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
;// CONCATENATED MODULE: ./public/app/core/utils/version.ts
function version_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const versionPattern = /^(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z\.]+))?/;
class SemVersion {
  constructor(version) {
    version_defineProperty(this, "major", void 0);

    version_defineProperty(this, "minor", void 0);

    version_defineProperty(this, "patch", void 0);

    version_defineProperty(this, "meta", void 0);

    this.major = 0;
    this.minor = 0;
    this.patch = 0;
    this.meta = '';
    const match = versionPattern.exec(version);

    if (match) {
      this.major = Number(match[1]);
      this.minor = Number(match[2] || 0);
      this.patch = Number(match[3] || 0);
      this.meta = match[4];
    }
  }

  isGtOrEq(version) {
    const compared = new SemVersion(version);

    for (let i = 0; i < this.comparable.length; ++i) {
      if (this.comparable[i] > compared.comparable[i]) {
        return true;
      }

      if (this.comparable[i] < compared.comparable[i]) {
        return false;
      }
    }

    return true;
  }

  isValid() {
    return (0,lodash.isNumber)(this.major);
  }

  get comparable() {
    return [this.major, this.minor, this.patch];
  }

}
function isVersionGtOrEq(a, b) {
  const aSemver = new SemVersion(a);
  return aSemver.isGtOrEq(b);
}
// EXTERNAL MODULE: ./public/app/features/variables/utils.ts
var utils = __webpack_require__("./public/app/features/variables/utils.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/gfunc.ts
function gfunc_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const index = {};

function addFuncDef(funcDef) {
  funcDef.params = funcDef.params || [];
  funcDef.defaultParams = funcDef.defaultParams || [];
  index[funcDef.name] = funcDef;

  if (funcDef.shortName) {
    index[funcDef.shortName] = funcDef;
  }
}

const optionalSeriesRefArgs = [{
  name: 'other',
  type: 'value_or_series',
  optional: true,
  multiple: true
}];
addFuncDef({
  name: 'scaleToSeconds',
  category: 'Transform',
  params: [{
    name: 'seconds',
    type: 'int'
  }],
  defaultParams: [1]
});
addFuncDef({
  name: 'perSecond',
  category: 'Transform',
  params: [{
    name: 'max value',
    type: 'int',
    optional: true
  }],
  defaultParams: []
});
addFuncDef({
  name: 'holtWintersForecast',
  category: 'Calculate'
});
addFuncDef({
  name: 'holtWintersConfidenceBands',
  category: 'Calculate',
  params: [{
    name: 'delta',
    type: 'int'
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'holtWintersAberration',
  category: 'Calculate',
  params: [{
    name: 'delta',
    type: 'int'
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'nPercentile',
  category: 'Calculate',
  params: [{
    name: 'Nth percentile',
    type: 'int'
  }],
  defaultParams: [95]
});
addFuncDef({
  name: 'diffSeries',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'stddevSeries',
  params: optionalSeriesRefArgs,
  defaultParams: [''],
  category: 'Combine'
});
addFuncDef({
  name: 'divideSeries',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'multiplySeries',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'asPercent',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A'],
  category: 'Combine'
});
addFuncDef({
  name: 'group',
  params: optionalSeriesRefArgs,
  defaultParams: ['#A', '#B'],
  category: 'Combine'
});
addFuncDef({
  name: 'sumSeries',
  shortName: 'sum',
  category: 'Combine',
  params: optionalSeriesRefArgs,
  defaultParams: ['']
});
addFuncDef({
  name: 'averageSeries',
  shortName: 'avg',
  category: 'Combine',
  params: optionalSeriesRefArgs,
  defaultParams: ['']
});
addFuncDef({
  name: 'rangeOfSeries',
  category: 'Combine'
});
addFuncDef({
  name: 'percentileOfSeries',
  category: 'Combine',
  params: [{
    name: 'n',
    type: 'int'
  }, {
    name: 'interpolate',
    type: 'boolean',
    options: ['true', 'false']
  }],
  defaultParams: [95, 'false']
});
addFuncDef({
  name: 'sumSeriesWithWildcards',
  category: 'Combine',
  params: [{
    name: 'node',
    type: 'int',
    multiple: true
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'maxSeries',
  shortName: 'max',
  category: 'Combine'
});
addFuncDef({
  name: 'minSeries',
  shortName: 'min',
  category: 'Combine'
});
addFuncDef({
  name: 'averageSeriesWithWildcards',
  category: 'Combine',
  params: [{
    name: 'node',
    type: 'int',
    multiple: true
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'alias',
  category: 'Alias',
  params: [{
    name: 'alias',
    type: 'string'
  }],
  defaultParams: ['alias']
});
addFuncDef({
  name: 'aliasSub',
  category: 'Alias',
  params: [{
    name: 'search',
    type: 'string'
  }, {
    name: 'replace',
    type: 'string'
  }],
  defaultParams: ['', '\\1']
});
addFuncDef({
  name: 'consolidateBy',
  category: 'Special',
  params: [{
    name: 'function',
    type: 'string',
    options: ['sum', 'average', 'min', 'max']
  }],
  defaultParams: ['max']
});
addFuncDef({
  name: 'cumulative',
  category: 'Special',
  params: [],
  defaultParams: []
});
addFuncDef({
  name: 'groupByNode',
  category: 'Combine',
  params: [{
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }, {
    name: 'function',
    type: 'string',
    options: ['sum', 'avg', 'maxSeries']
  }],
  defaultParams: [3, 'sum']
});
addFuncDef({
  name: 'aliasByNode',
  category: 'Alias',
  params: [{
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    multiple: true
  }],
  defaultParams: [3]
});
addFuncDef({
  name: 'substr',
  category: 'Special',
  params: [{
    name: 'start',
    type: 'int',
    options: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }, {
    name: 'stop',
    type: 'int',
    options: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }],
  defaultParams: [0, 0]
});
addFuncDef({
  name: 'sortByName',
  category: 'Sorting',
  params: [{
    name: 'natural',
    type: 'boolean',
    options: ['true', 'false'],
    optional: true
  }],
  defaultParams: ['false']
});
addFuncDef({
  name: 'sortByMaxima',
  category: 'Sorting'
});
addFuncDef({
  name: 'sortByMinima',
  category: 'Sorting'
});
addFuncDef({
  name: 'sortByTotal',
  category: 'Sorting'
});
addFuncDef({
  name: 'aliasByMetric',
  category: 'Alias'
});
addFuncDef({
  name: 'randomWalk',
  fake: true,
  category: 'Special',
  params: [{
    name: 'name',
    type: 'string'
  }],
  defaultParams: ['randomWalk']
});
addFuncDef({
  name: 'countSeries',
  category: 'Combine'
});
addFuncDef({
  name: 'constantLine',
  category: 'Special',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'cactiStyle',
  category: 'Special'
});
addFuncDef({
  name: 'keepLastValue',
  category: 'Transform',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [100]
});
addFuncDef({
  name: 'changed',
  category: 'Special',
  params: [],
  defaultParams: []
});
addFuncDef({
  name: 'scale',
  category: 'Transform',
  params: [{
    name: 'factor',
    type: 'int'
  }],
  defaultParams: [1]
});
addFuncDef({
  name: 'offset',
  category: 'Transform',
  params: [{
    name: 'amount',
    type: 'int'
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'transformNull',
  category: 'Transform',
  params: [{
    name: 'amount',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'integral',
  category: 'Transform'
});
addFuncDef({
  name: 'derivative',
  category: 'Transform'
});
addFuncDef({
  name: 'nonNegativeDerivative',
  category: 'Transform',
  params: [{
    name: 'max value or 0',
    type: 'int',
    optional: true
  }],
  defaultParams: ['']
});
addFuncDef({
  name: 'timeShift',
  category: 'Transform',
  params: [{
    name: 'amount',
    type: 'select',
    options: ['1h', '6h', '12h', '1d', '2d', '7d', '14d', '30d']
  }],
  defaultParams: ['1d']
});
addFuncDef({
  name: 'timeStack',
  category: 'Transform',
  params: [{
    name: 'timeShiftUnit',
    type: 'select',
    options: ['1h', '6h', '12h', '1d', '2d', '7d', '14d', '30d']
  }, {
    name: 'timeShiftStart',
    type: 'int'
  }, {
    name: 'timeShiftEnd',
    type: 'int'
  }],
  defaultParams: ['1d', 0, 7]
});
addFuncDef({
  name: 'summarize',
  category: 'Transform',
  params: [{
    name: 'interval',
    type: 'string'
  }, {
    name: 'func',
    type: 'select',
    options: ['sum', 'avg', 'min', 'max', 'last']
  }, {
    name: 'alignToFrom',
    type: 'boolean',
    optional: true,
    options: ['false', 'true']
  }],
  defaultParams: ['1h', 'sum', 'false']
});
addFuncDef({
  name: 'smartSummarize',
  category: 'Transform',
  params: [{
    name: 'interval',
    type: 'string'
  }, {
    name: 'func',
    type: 'select',
    options: ['sum', 'avg', 'min', 'max', 'last']
  }],
  defaultParams: ['1h', 'sum']
});
addFuncDef({
  name: 'absolute',
  category: 'Transform'
});
addFuncDef({
  name: 'hitcount',
  category: 'Transform',
  params: [{
    name: 'interval',
    type: 'string'
  }],
  defaultParams: ['10s']
});
addFuncDef({
  name: 'log',
  category: 'Transform',
  params: [{
    name: 'base',
    type: 'int'
  }],
  defaultParams: ['10']
});
addFuncDef({
  name: 'averageAbove',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'averageBelow',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'currentAbove',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'currentBelow',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [25]
});
addFuncDef({
  name: 'maximumAbove',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'maximumBelow',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'minimumAbove',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'minimumBelow',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }],
  defaultParams: [0]
});
addFuncDef({
  name: 'limit',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'mostDeviant',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'exclude',
  category: 'Filter Series',
  params: [{
    name: 'exclude',
    type: 'string'
  }],
  defaultParams: ['exclude']
});
addFuncDef({
  name: 'highestCurrent',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'highestMax',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'lowestCurrent',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'movingAverage',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10]
});
addFuncDef({
  name: 'movingMedian',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: ['5']
});
addFuncDef({
  name: 'stdev',
  category: 'Calculate',
  params: [{
    name: 'n',
    type: 'int'
  }, {
    name: 'tolerance',
    type: 'int'
  }],
  defaultParams: [5, 0.1]
});
addFuncDef({
  name: 'highestAverage',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'lowestAverage',
  category: 'Filter Series',
  params: [{
    name: 'count',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeAbovePercentile',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeAboveValue',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeBelowPercentile',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'removeBelowValue',
  category: 'Filter Data',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [5]
});
addFuncDef({
  name: 'useSeriesAbove',
  category: 'Filter Series',
  params: [{
    name: 'value',
    type: 'int'
  }, {
    name: 'search',
    type: 'string'
  }, {
    name: 'replace',
    type: 'string'
  }],
  defaultParams: [0, 'search', 'replace']
}); ////////////////////
// Graphite 1.0.x //
////////////////////

addFuncDef({
  name: 'aggregateLine',
  category: 'Calculate',
  params: [{
    name: 'func',
    type: 'select',
    options: ['sum', 'avg', 'min', 'max', 'last']
  }],
  defaultParams: ['avg'],
  version: '1.0'
});
addFuncDef({
  name: 'averageOutsidePercentile',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [95],
  version: '1.0'
});
addFuncDef({
  name: 'delay',
  category: 'Transform',
  params: [{
    name: 'steps',
    type: 'int'
  }],
  defaultParams: [1],
  version: '1.0'
});
addFuncDef({
  name: 'exponentialMovingAverage',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'fallbackSeries',
  category: 'Special',
  params: [{
    name: 'fallback',
    type: 'string'
  }],
  defaultParams: ['constantLine(0)'],
  version: '1.0'
});
addFuncDef({
  name: 'grep',
  category: 'Filter Series',
  params: [{
    name: 'grep',
    type: 'string'
  }],
  defaultParams: ['grep'],
  version: '1.0'
});
addFuncDef({
  name: 'groupByNodes',
  category: 'Combine',
  params: [{
    name: 'function',
    type: 'string',
    options: ['sum', 'avg', 'maxSeries']
  }, {
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    multiple: true
  }],
  defaultParams: ['sum', 3],
  version: '1.0'
});
addFuncDef({
  name: 'integralByInterval',
  category: 'Transform',
  params: [{
    name: 'intervalUnit',
    type: 'select',
    options: ['1h', '6h', '12h', '1d', '2d', '7d', '14d', '30d']
  }],
  defaultParams: ['1d'],
  version: '1.0'
});
addFuncDef({
  name: 'interpolate',
  category: 'Transform',
  params: [{
    name: 'limit',
    type: 'int',
    optional: true
  }],
  defaultParams: [],
  version: '1.0'
});
addFuncDef({
  name: 'invert',
  category: 'Transform',
  version: '1.0'
});
addFuncDef({
  name: 'isNonNull',
  category: 'Combine',
  version: '1.0'
});
addFuncDef({
  name: 'linearRegression',
  category: 'Calculate',
  params: [{
    name: 'startSourceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d'],
    optional: true
  }, {
    name: 'endSourceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d'],
    optional: true
  }],
  defaultParams: [],
  version: '1.0'
});
addFuncDef({
  name: 'mapSeries',
  shortName: 'map',
  params: [{
    name: 'node',
    type: 'int'
  }],
  defaultParams: [3],
  category: 'Combine',
  version: '1.0'
});
addFuncDef({
  name: 'movingMin',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'movingMax',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'movingSum',
  category: 'Calculate',
  params: [{
    name: 'windowSize',
    type: 'int_or_interval',
    options: ['5', '7', '10', '5min', '10min', '30min', '1hour']
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'multiplySeriesWithWildcards',
  category: 'Combine',
  params: [{
    name: 'position',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
    multiple: true
  }],
  defaultParams: [2],
  version: '1.0'
});
addFuncDef({
  name: 'offsetToZero',
  category: 'Transform',
  version: '1.0'
});
addFuncDef({
  name: 'pow',
  category: 'Transform',
  params: [{
    name: 'factor',
    type: 'int'
  }],
  defaultParams: [10],
  version: '1.0'
});
addFuncDef({
  name: 'powSeries',
  category: 'Transform',
  params: optionalSeriesRefArgs,
  defaultParams: [''],
  version: '1.0'
});
addFuncDef({
  name: 'reduceSeries',
  shortName: 'reduce',
  params: [{
    name: 'function',
    type: 'string',
    options: ['asPercent', 'diffSeries', 'divideSeries']
  }, {
    name: 'reduceNode',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
  }, {
    name: 'reduceMatchers',
    type: 'string',
    multiple: true
  }],
  defaultParams: ['asPercent', 2, 'used_bytes'],
  category: 'Combine',
  version: '1.0'
});
addFuncDef({
  name: 'removeBetweenPercentile',
  category: 'Filter Series',
  params: [{
    name: 'n',
    type: 'int'
  }],
  defaultParams: [95],
  version: '1.0'
});
addFuncDef({
  name: 'removeEmptySeries',
  category: 'Filter Series',
  version: '1.0'
});
addFuncDef({
  name: 'squareRoot',
  category: 'Transform',
  version: '1.0'
});
addFuncDef({
  name: 'timeSlice',
  category: 'Transform',
  params: [{
    name: 'startSliceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d']
  }, {
    name: 'endSliceAt',
    type: 'select',
    options: ['-1h', '-6h', '-12h', '-1d', '-2d', '-7d', '-14d', '-30d'],
    optional: true
  }],
  defaultParams: ['-1h'],
  version: '1.0'
});
addFuncDef({
  name: 'weightedAverage',
  category: 'Combine',
  params: [{
    name: 'other',
    type: 'value_or_series',
    optional: true
  }, {
    name: 'node',
    type: 'int',
    options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
  }],
  defaultParams: ['#A', 4],
  version: '1.0'
});
addFuncDef({
  name: 'seriesByTag',
  category: 'Special',
  params: [{
    name: 'tagExpression',
    type: 'string',
    multiple: true
  }],
  version: '1.1'
});
addFuncDef({
  name: 'groupByTags',
  category: 'Combine',
  params: [{
    name: 'function',
    type: 'string',
    options: ['sum', 'avg', 'maxSeries']
  }, {
    name: 'tag',
    type: 'string',
    multiple: true
  }],
  defaultParams: ['sum', 'tag'],
  version: '1.1'
});
addFuncDef({
  name: 'aliasByTags',
  category: 'Alias',
  params: [{
    name: 'tag',
    type: 'string',
    multiple: true
  }],
  defaultParams: ['tag'],
  version: '1.1'
});

function isVersionRelatedFunction(obj, graphiteVersion) {
  return !obj.version || isVersionGtOrEq(graphiteVersion, obj.version);
}

class FuncInstance {
  /**
   * Hidden functions are not displayed in UI but available in text editor
   * This is used for seriesByTagUsed function which when used switches
   * the editor to tag-only mode. Defined tags are provided to seriesByTagUsed
   * as parameters.
   */
  constructor(funcDef, options) {
    gfunc_defineProperty(this, "def", void 0);

    gfunc_defineProperty(this, "params", void 0);

    gfunc_defineProperty(this, "text", void 0);

    gfunc_defineProperty(this, "hidden", void 0);

    this.def = funcDef;
    this.params = [];

    if (options && options.withDefaultParams && funcDef.defaultParams) {
      this.params = funcDef.defaultParams.slice(0);
    }

    this.updateText();
  }

  render(metricExp, replaceVariables) {
    const str = this.def.name + '(';
    const parameters = (0,lodash.map)(this.params, (value, index) => {
      let paramType;

      if (index < this.def.params.length) {
        paramType = this.def.params[index].type;
      } else if ((0,lodash.get)((0,lodash.last)(this.def.params), 'multiple')) {
        paramType = (0,lodash.get)((0,lodash.last)(this.def.params), 'type');
      } // param types that should never be quoted


      if ((0,lodash.includes)(['value_or_series', 'boolean', 'int', 'float', 'node', 'int_or_infinity'], paramType)) {
        return value;
      }

      const valueInterpolated = (0,lodash.isString)(value) ? replaceVariables(value) : value; // param types that might be quoted
      // To quote variables correctly we need to interpolate it to check if it contains a numeric or string value

      if ((0,lodash.includes)(['int_or_interval', 'node_or_tag'], paramType) && (0,lodash.isFinite)(+valueInterpolated)) {
        return (0,lodash.toString)(value);
      }

      return "'" + value + "'";
    }); // don't send any blank parameters to graphite

    while (parameters[parameters.length - 1] === '') {
      parameters.pop();
    }

    if (metricExp) {
      parameters.unshift(metricExp);
    }

    return str + parameters.join(', ') + ')';
  }

  _hasMultipleParamsInString(strValue, index) {
    if (strValue.indexOf(',') === -1) {
      return false;
    }

    if (this.def.params[index + 1] && this.def.params[index + 1].optional) {
      return true;
    }

    if (index + 1 >= this.def.params.length && (0,lodash.get)((0,lodash.last)(this.def.params), 'multiple')) {
      return true;
    }

    return false;
  }

  updateParam(strValue, index) {
    // handle optional parameters
    // if string contains ',' and next param is optional, split and update both
    if (this._hasMultipleParamsInString(strValue, index)) {
      (0,lodash.each)(strValue.split(','), (partVal, idx) => {
        this.updateParam(partVal.trim(), index + idx);
      });
      return;
    }

    if (strValue === '' && (index >= this.def.params.length || this.def.params[index].optional)) {
      this.params.splice(index, 1);
    } else {
      this.params[index] = strValue;
    }

    this.updateText();
  }

  updateText() {
    if (this.params.length === 0) {
      this.text = this.def.name + '()';
      return;
    }

    let text = this.def.name + '(';
    text += this.params.join(', ');
    text += ')';
    this.text = text;
  }

}

function createFuncInstance(funcDef, options, idx) {
  if ((0,lodash.isString)(funcDef)) {
    funcDef = getFuncDef(funcDef, idx);
  }

  return new FuncInstance(funcDef, options);
}

function getFuncDef(name, idx) {
  if (!(idx || index)[name]) {
    return {
      name: name,
      params: [{
        name: '',
        type: '',
        multiple: true
      }],
      defaultParams: [''],
      unknown: true
    };
  }

  return (idx || index)[name];
}

function getFuncDefs(graphiteVersion, idx) {
  const funcs = {};
  (0,lodash.forEach)(idx || index, funcDef => {
    if (isVersionRelatedFunction(funcDef, graphiteVersion)) {
      funcs[funcDef.name] = (0,lodash.assign)({}, funcDef, {
        params: (0,lodash.filter)(funcDef.params, param => {
          return isVersionRelatedFunction(param, graphiteVersion);
        })
      });
    }
  });
  return funcs;
} // parse response from graphite /functions endpoint into internal format


function parseFuncDefs(rawDefs) {
  const funcDefs = {};
  (0,lodash.forEach)(rawDefs || {}, (funcDef, funcName) => {
    // skip graphite graph functions
    if (funcDef.group === 'Graph') {
      return;
    }

    let description = funcDef.description;

    if (description) {
      // tidy up some pydoc syntax that rst2html can't handle
      description = description.replace(/:py:func:`(.+)( <[^>]*>)?`/g, '``$1``').replace(/.. seealso:: /g, 'See also: ').replace(/.. code-block *:: *none/g, '.. code-block::');
    }

    const func = {
      name: funcDef.name,
      description,
      category: funcDef.group,
      params: [],
      defaultParams: [],
      fake: false
    }; // get rid of the first "seriesList" param

    if (/^seriesLists?$/.test((0,lodash.get)(funcDef, 'params[0].type', ''))) {
      // handle functions that accept multiple seriesLists
      // we leave the param in place but mark it optional, so users can add more series if they wish
      if (funcDef.params[0].multiple) {
        funcDef.params[0].required = false; // otherwise chop off the first param, it'll be handled separately
      } else {
        funcDef.params.shift();
      } // tag function as fake

    } else {
      func.fake = true;
    }

    (0,lodash.forEach)(funcDef.params, rawParam => {
      const param = {
        name: rawParam.name,
        type: 'string',
        optional: !rawParam.required,
        multiple: !!rawParam.multiple,
        options: undefined
      };

      if (rawParam.default !== undefined) {
        if (rawParam.default === Infinity) {
          func.defaultParams.push('inf');
        } else {
          func.defaultParams.push((0,lodash.toString)(rawParam.default));
        }
      } else if (rawParam.suggestions) {
        func.defaultParams.push((0,lodash.toString)(rawParam.suggestions[0]));
      } else {
        func.defaultParams.push('');
      }

      if (rawParam.type === 'boolean') {
        param.type = 'boolean';
        param.options = ['true', 'false'];
      } else if (rawParam.type === 'integer') {
        param.type = 'int';
      } else if (rawParam.type === 'float') {
        param.type = 'float';
      } else if (rawParam.type === 'node') {
        param.type = 'node';
        param.options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      } else if (rawParam.type === 'nodeOrTag') {
        param.type = 'node_or_tag';
        param.options = ['name', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      } else if (rawParam.type === 'intOrInterval') {
        param.type = 'int_or_interval';
      } else if (rawParam.type === 'seriesList') {
        param.type = 'value_or_series';
      } else if (rawParam.type === 'intOrInf') {
        param.type = 'int_or_infinity';
      }

      if (rawParam.options) {
        param.options = (0,lodash.map)(rawParam.options, lodash.toString);
      } else if (rawParam.suggestions) {
        param.options = (0,lodash.map)(rawParam.suggestions, lodash.toString);
      }

      func.params.push(param);
    });
    funcDefs[funcName] = func;
  });
  return funcDefs;
}

/* harmony default export */ const gfunc = ({
  createFuncInstance: createFuncInstance,
  getFuncDef: getFuncDef,
  getFuncDefs: getFuncDefs,
  parseFuncDefs: parseFuncDefs
});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/utils.ts

/**
 * Graphite-web before v1.6 returns HTTP 500 with full stack traces in an HTML page
 * when a query fails. It results in massive error alerts with HTML tags in the UI.
 * This function removes all HTML tags and keeps only the last line from the stack
 * trace which should be the most meaningful.
 */

function reduceError(error) {
  var _error$data, _error$data$message;

  if (error && error.status === 500 && (_error$data = error.data) !== null && _error$data !== void 0 && (_error$data$message = _error$data.message) !== null && _error$data$message !== void 0 && _error$data$message.startsWith('<body')) {
    // Remove all HTML tags and take the last line from the stack trace
    const newMessage = (0,lodash.last)(error.data.message.replace(/(<([^>]+)>)/gi, '').trim().split(/\n/)).replace(/u?&#[^;]+;/g, '');
    error.data.message = `Graphite encountered an unexpected error while handling your request. ${newMessage}`;
  }

  return error;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/datasource.ts
function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // Types




const GRAPHITE_TAG_COMPARATORS = {
  '=': src.AbstractLabelOperator.Equal,
  '!=': src.AbstractLabelOperator.NotEqual,
  '=~': src.AbstractLabelOperator.EqualRegEx,
  '!=~': src.AbstractLabelOperator.NotEqualRegEx
};
/**
 * Converts Graphite glob-like pattern to a regular expression
 */

function convertGlobToRegEx(text) {
  if (text.includes('*') || text.includes('{')) {
    return '^' + text.replace(/\*/g, '.*').replace(/\{/g, '(').replace(/}/g, ')').replace(/,/g, '|');
  } else {
    return text;
  }
}

class GraphiteDatasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    var _instanceSettings$jso, _instanceSettings$jso2;

    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,template_srv/* getTemplateSrv */.J)();
    super(instanceSettings);
    this.templateSrv = templateSrv;

    datasource_defineProperty(this, "basicAuth", void 0);

    datasource_defineProperty(this, "url", void 0);

    datasource_defineProperty(this, "name", void 0);

    datasource_defineProperty(this, "graphiteVersion", void 0);

    datasource_defineProperty(this, "supportsTags", void 0);

    datasource_defineProperty(this, "isMetricTank", void 0);

    datasource_defineProperty(this, "rollupIndicatorEnabled", void 0);

    datasource_defineProperty(this, "cacheTimeout", void 0);

    datasource_defineProperty(this, "withCredentials", void 0);

    datasource_defineProperty(this, "funcDefs", null);

    datasource_defineProperty(this, "funcDefsPromise", null);

    datasource_defineProperty(this, "_seriesRefLetters", void 0);

    datasource_defineProperty(this, "metricMappings", void 0);

    datasource_defineProperty(this, "convertResponseToDataFrames", result => {
      const data = [];

      if (!result || !result.data) {
        return {
          data
        };
      } // Series are either at the root or under a node called 'series'


      const series = result.data.series || result.data;

      if (!(0,lodash.isArray)(series)) {
        throw {
          message: 'Missing series in result',
          data: result
        };
      }

      for (let i = 0; i < series.length; i++) {
        const s = series[i]; // Disables Grafana own series naming

        s.title = s.target;

        for (let y = 0; y < s.datapoints.length; y++) {
          s.datapoints[y][1] *= 1000;
        }

        const frame = (0,src.toDataFrame)(s); // Metrictank metadata

        if (s.meta) {
          frame.meta = {
            custom: {
              requestMetaList: result.data.meta,
              // info for the whole request
              seriesMetaList: s.meta // Array of metadata

            }
          };

          if (this.rollupIndicatorEnabled) {
            const rollupNotice = getRollupNotice(s.meta);
            const runtimeNotice = getRuntimeConsolidationNotice(s.meta);

            if (rollupNotice) {
              frame.meta.notices = [rollupNotice];
            } else if (runtimeNotice) {
              frame.meta.notices = [runtimeNotice];
            }
          } // only add the request stats to the first frame


          if (i === 0 && result.data.meta.stats) {
            frame.meta.stats = this.getRequestStats(result.data.meta);
          }
        }

        data.push(frame);
      }

      return {
        data
      };
    });

    this.templateSrv = templateSrv;
    this.basicAuth = instanceSettings.basicAuth;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name; // graphiteVersion is set when a datasource is created but it hadn't been set in the past so we're
    // still falling back to the default behavior here for backwards compatibility (see also #17429)

    this.graphiteVersion = instanceSettings.jsonData.graphiteVersion || DEFAULT_GRAPHITE_VERSION;
    this.metricMappings = ((_instanceSettings$jso = instanceSettings.jsonData.importConfiguration) === null || _instanceSettings$jso === void 0 ? void 0 : (_instanceSettings$jso2 = _instanceSettings$jso.loki) === null || _instanceSettings$jso2 === void 0 ? void 0 : _instanceSettings$jso2.mappings) || [];
    this.isMetricTank = instanceSettings.jsonData.graphiteType === GraphiteType.Metrictank;
    this.supportsTags = supportsTags(this.graphiteVersion);
    this.cacheTimeout = instanceSettings.cacheTimeout;
    this.rollupIndicatorEnabled = instanceSettings.jsonData.rollupIndicatorEnabled;
    this.withCredentials = instanceSettings.withCredentials;
    this.funcDefs = null;
    this.funcDefsPromise = null;
    this._seriesRefLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  getQueryOptionsInfo() {
    return {
      maxDataPoints: true,
      cacheTimeout: true,
      links: [{
        text: 'Help',
        url: 'http://docs.grafana.org/features/datasources/graphite/#using-graphite-in-grafana'
      }]
    };
  }

  getImportQueryConfiguration() {
    return {
      loki: {
        mappings: this.metricMappings
      }
    };
  }

  async exportToAbstractQueries(queries) {
    return queries.map(query => this.exportToAbstractQuery(query));
  }

  exportToAbstractQuery(query) {
    const graphiteQuery = new GraphiteQuery(this, Object.assign({}, query, {
      target: query.target || '',
      textEditor: false
    }), (0,template_srv/* getTemplateSrv */.J)());
    graphiteQuery.parseTarget();
    let labels = [];
    const config = this.getImportQueryConfiguration().loki;

    if (graphiteQuery.seriesByTagUsed) {
      graphiteQuery.tags.forEach(tag => {
        labels.push({
          name: tag.key,
          operator: GRAPHITE_TAG_COMPARATORS[tag.operator],
          value: tag.value
        });
      });
    } else {
      const targetNodes = graphiteQuery.segments.map(segment => segment.value);
      let mappings = config.mappings.filter(mapping => mapping.matchers.length <= targetNodes.length);

      for (let mapping of mappings) {
        const matchers = mapping.matchers.concat();
        matchers.every((matcher, index) => {
          if (matcher.labelName) {
            let value = targetNodes[index];

            if (value === '*') {
              return true;
            }

            const converted = convertGlobToRegEx(value);
            labels.push({
              name: matcher.labelName,
              operator: converted !== value ? src.AbstractLabelOperator.EqualRegEx : src.AbstractLabelOperator.Equal,
              value: converted
            });
            return true;
          }

          return targetNodes[index] === matcher.value || matcher.value === '*';
        });
      }
    }

    return {
      refId: query.refId,
      labelMatchers: labels
    };
  }

  query(options) {
    const graphOptions = {
      from: this.translateTime(options.range.raw.from, false, options.timezone),
      until: this.translateTime(options.range.raw.to, true, options.timezone),
      targets: options.targets,
      format: options.format,
      cacheTimeout: options.cacheTimeout || this.cacheTimeout,
      maxDataPoints: options.maxDataPoints
    };
    const params = this.buildGraphiteParams(graphOptions, options.scopedVars);

    if (params.length === 0) {
      return (0,of.of)({
        data: []
      });
    }

    if (this.isMetricTank) {
      params.push('meta=true');
    }

    const httpOptions = {
      method: 'POST',
      url: '/render',
      data: params.join('&'),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    this.addTracingHeaders(httpOptions, options);

    if (options.panelId) {
      httpOptions.requestId = this.name + '.panelId.' + options.panelId;
    }

    return this.doGraphiteRequest(httpOptions).pipe((0,map/* map */.U)(this.convertResponseToDataFrames));
  }

  addTracingHeaders(httpOptions, options) {
    const proxyMode = !this.url.match(/^http/);

    if (proxyMode) {
      if (options.dashboardId) {
        httpOptions.headers['X-Dashboard-Id'] = options.dashboardId;
      }

      if (options.panelId) {
        httpOptions.headers['X-Panel-Id'] = options.panelId;
      }
    }
  }

  getRequestStats(meta) {
    const stats = [];

    for (const key in meta.stats) {
      let unit = undefined;

      if (key.endsWith('.ms')) {
        unit = 'ms';
      }

      stats.push({
        displayName: key,
        value: meta.stats[key],
        unit
      });
    }

    return stats;
  }

  parseTags(tagString) {
    let tags = [];
    tags = tagString.split(',');

    if (tags.length === 1) {
      tags = tagString.split(' ');

      if (tags[0] === '') {
        tags = [];
      }
    }

    return tags;
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;

    if (queries && queries.length > 0) {
      expandedQueries = queries.map(query => {
        var _query$target;

        const expandedQuery = Object.assign({}, query, {
          datasource: this.getRef(),
          target: this.templateSrv.replace((_query$target = query.target) !== null && _query$target !== void 0 ? _query$target : '', scopedVars)
        });
        return expandedQuery;
      });
    }

    return expandedQueries;
  }

  annotationQuery(options) {
    // Graphite metric as annotation
    if (options.annotation.target) {
      const target = this.templateSrv.replace(options.annotation.target, {}, 'glob');
      const graphiteQuery = {
        range: options.range,
        targets: [{
          target: target
        }],
        format: 'json',
        maxDataPoints: 100
      };
      return (0,lastValueFrom/* lastValueFrom */.n)(this.query(graphiteQuery).pipe((0,map/* map */.U)(result => {
        const list = [];

        for (let i = 0; i < result.data.length; i++) {
          const target = result.data[i];

          for (let y = 0; y < target.length; y++) {
            const time = target.fields[0].values.get(y);
            const value = target.fields[1].values.get(y);

            if (!value) {
              continue;
            }

            list.push({
              annotation: options.annotation,
              time,
              title: target.name
            });
          }
        }

        return list;
      })));
    } else {
      // Graphite event as annotation
      const tags = this.templateSrv.replace(options.annotation.tags);
      return this.events({
        range: options.range,
        tags: tags
      }).then(results => {
        const list = [];

        if (!(0,lodash.isArray)(results.data)) {
          console.error(`Unable to get annotations from ${results.url}.`);
          return [];
        }

        for (let i = 0; i < results.data.length; i++) {
          const e = results.data[i];
          let tags = e.tags;

          if ((0,lodash.isString)(e.tags)) {
            tags = this.parseTags(e.tags);
          }

          list.push({
            annotation: options.annotation,
            time: e.when * 1000,
            title: e.what,
            tags: tags,
            text: e.data
          });
        }

        return list;
      });
    }
  }

  events(options) {
    try {
      let tags = '';

      if (options.tags) {
        tags = '&tags=' + options.tags;
      }

      return (0,lastValueFrom/* lastValueFrom */.n)(this.doGraphiteRequest({
        method: 'GET',
        url: '/events/get_data?from=' + this.translateTime(options.range.raw.from, false, options.timezone) + '&until=' + this.translateTime(options.range.raw.to, true, options.timezone) + tags
      }));
    } catch (err) {
      return Promise.reject(err);
    }
  }

  targetContainsTemplate(target) {
    var _target$target;

    return this.templateSrv.containsTemplate((_target$target = target.target) !== null && _target$target !== void 0 ? _target$target : '');
  }

  translateTime(date, roundUp, timezone) {
    if ((0,lodash.isString)(date)) {
      if (date === 'now') {
        return 'now';
      } else if (date.indexOf('now-') >= 0 && date.indexOf('/') === -1) {
        date = date.substring(3);
        date = date.replace('m', 'min');
        date = date.replace('M', 'mon');
        return date;
      }

      date = src.dateMath.parse(date, roundUp, timezone);
    } // graphite' s from filter is exclusive
    // here we step back one minute in order
    // to guarantee that we get all the data that
    // exists for the specified range


    if (roundUp) {
      if (date.get('s')) {
        date.add(1, 's');
      }
    } else if (roundUp === false) {
      if (date.get('s')) {
        date.subtract(1, 's');
      }
    }

    return date.unix();
  }

  metricFindQuery(query, optionalOptions) {
    const options = optionalOptions || {}; // First attempt to check for tag-related functions (using empty wildcard for interpolation)

    let interpolatedQuery = this.templateSrv.replace(query, (0,utils/* getSearchFilterScopedVar */._6)({
      query,
      wildcardChar: '',
      options: optionalOptions
    })); // special handling for tag_values(<tag>[,<expression>]*), this is used for template variables

    let allParams = interpolatedQuery.match(/^tag_values\((.*)\)$/);
    let expressions = allParams ? allParams[1].split(',').filter(p => !!p) : undefined;

    if (expressions) {
      options.limit = 10000;
      return this.getTagValuesAutoComplete(expressions.slice(1), expressions[0], undefined, options);
    } // special handling for tags(<expression>[,<expression>]*), this is used for template variables


    allParams = interpolatedQuery.match(/^tags\((.*)\)$/);
    expressions = allParams ? allParams[1].split(',').filter(p => !!p) : undefined;

    if (expressions) {
      options.limit = 10000;
      return this.getTagsAutoComplete(expressions, undefined, options);
    } // If no tag-related query was found, perform metric-based search (using * as the wildcard for interpolation)


    let useExpand = query.match(/^expand\((.*)\)$/);
    query = useExpand ? useExpand[1] : query;
    interpolatedQuery = this.templateSrv.replace(query, (0,utils/* getSearchFilterScopedVar */._6)({
      query,
      wildcardChar: '*',
      options: optionalOptions
    }));
    let range;

    if (options.range) {
      range = {
        from: this.translateTime(options.range.from, false, options.timezone),
        until: this.translateTime(options.range.to, true, options.timezone)
      };
    }

    if (useExpand) {
      return this.requestMetricExpand(interpolatedQuery, options.requestId, range);
    } else {
      return this.requestMetricFind(interpolatedQuery, options.requestId, range);
    }
  }
  /**
   * Search for metrics matching giving pattern using /metrics/find endpoint. It will
   * return all possible values at the last level of the query, for example:
   *
   * metrics: prod.servers.001.cpu, prod.servers.002.cpu
   * query: *.servers.*
   * result: 001, 002
   *
   * For more complex searches use requestMetricExpand
   */


  requestMetricFind(query, requestId, range) {
    const httpOptions = {
      method: 'POST',
      url: '/metrics/find',
      params: {},
      data: `query=${query}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // for cancellations
      requestId: requestId
    };

    if (range) {
      httpOptions.params.from = range.from;
      httpOptions.params.until = range.until;
    }

    return (0,lastValueFrom/* lastValueFrom */.n)(this.doGraphiteRequest(httpOptions).pipe((0,map/* map */.U)(results => {
      return (0,lodash.map)(results.data, metric => {
        return {
          text: metric.text,
          expandable: metric.expandable ? true : false
        };
      });
    })));
  }
  /**
   * Search for metrics matching giving pattern using /metrics/expand endpoint.
   * The result will contain all metrics (with full name) matching provided query.
   * It's a more flexible version of /metrics/find endpoint (@see requestMetricFind)
   */


  requestMetricExpand(query, requestId, range) {
    const httpOptions = {
      method: 'GET',
      url: '/metrics/expand',
      params: {
        query
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // for cancellations
      requestId
    };

    if (range) {
      httpOptions.params.from = range.from;
      httpOptions.params.until = range.until;
    }

    return (0,lastValueFrom/* lastValueFrom */.n)(this.doGraphiteRequest(httpOptions).pipe((0,map/* map */.U)(results => {
      return (0,lodash.map)(results.data.results, metric => {
        return {
          text: metric,
          expandable: false
        };
      });
    })));
  }

  getTags(optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags',
      // for cancellations
      requestId: options.requestId
    };

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,lastValueFrom/* lastValueFrom */.n)(this.doGraphiteRequest(httpOptions).pipe((0,map/* map */.U)(results => {
      return (0,lodash.map)(results.data, tag => {
        return {
          text: tag.tag,
          id: tag.id
        };
      });
    })));
  }

  getTagValues() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const httpOptions = {
      method: 'GET',
      url: '/tags/' + this.templateSrv.replace(options.key),
      // for cancellations
      requestId: options.requestId
    };

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,lastValueFrom/* lastValueFrom */.n)(this.doGraphiteRequest(httpOptions).pipe((0,map/* map */.U)(results => {
      if (results.data && results.data.values) {
        return (0,lodash.map)(results.data.values, value => {
          return {
            text: value.value,
            id: value.id
          };
        });
      } else {
        return [];
      }
    })));
  }

  getTagsAutoComplete(expressions, tagPrefix, optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags/autoComplete/tags',
      params: {
        expr: (0,lodash.map)(expressions, expression => this.templateSrv.replace((expression || '').trim()))
      },
      // for cancellations
      requestId: options.requestId
    };

    if (tagPrefix) {
      httpOptions.params.tagPrefix = tagPrefix;
    }

    if (options.limit) {
      httpOptions.params.limit = options.limit;
    }

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,lastValueFrom/* lastValueFrom */.n)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }

  getTagValuesAutoComplete(expressions, tag, valuePrefix, optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/tags/autoComplete/values',
      params: {
        expr: (0,lodash.map)(expressions, expression => this.templateSrv.replace((expression || '').trim())),
        tag: this.templateSrv.replace((tag || '').trim())
      },
      // for cancellations
      requestId: options.requestId
    };

    if (valuePrefix) {
      httpOptions.params.valuePrefix = valuePrefix;
    }

    if (options.limit) {
      httpOptions.params.limit = options.limit;
    }

    if (options.range) {
      httpOptions.params.from = this.translateTime(options.range.from, false, options.timezone);
      httpOptions.params.until = this.translateTime(options.range.to, true, options.timezone);
    }

    return (0,lastValueFrom/* lastValueFrom */.n)(this.doGraphiteRequest(httpOptions).pipe(mapToTags()));
  }

  getVersion(optionalOptions) {
    const options = optionalOptions || {};
    const httpOptions = {
      method: 'GET',
      url: '/version',
      requestId: options.requestId
    };
    return (0,lastValueFrom/* lastValueFrom */.n)(this.doGraphiteRequest(httpOptions).pipe((0,map/* map */.U)(results => {
      if (results.data) {
        const semver = new SemVersion(results.data);
        return semver.isValid() ? results.data : '';
      }

      return '';
    }), (0,catchError/* catchError */.K)(() => {
      return (0,of.of)('');
    })));
  }

  createFuncInstance(funcDef, options) {
    return gfunc.createFuncInstance(funcDef, options, this.funcDefs);
  }

  getFuncDef(name) {
    return gfunc.getFuncDef(name, this.funcDefs);
  }

  waitForFuncDefsLoaded() {
    return this.getFuncDefs();
  }

  getFuncDefs() {
    if (this.funcDefsPromise !== null) {
      return this.funcDefsPromise;
    }

    if (!supportsFunctionIndex(this.graphiteVersion)) {
      this.funcDefs = gfunc.getFuncDefs(this.graphiteVersion);
      this.funcDefsPromise = Promise.resolve(this.funcDefs);
      return this.funcDefsPromise;
    }

    const httpOptions = {
      method: 'GET',
      url: '/functions',
      // add responseType because if this is not defined,
      // backend_srv defaults to json
      responseType: 'text'
    };
    return (0,lastValueFrom/* lastValueFrom */.n)(this.doGraphiteRequest(httpOptions).pipe((0,map/* map */.U)(results => {
      // Fix for a Graphite bug: https://github.com/graphite-project/graphite-web/issues/2609
      // There is a fix for it https://github.com/graphite-project/graphite-web/pull/2612 but
      // it was merged to master in July 2020 but it has never been released (the last Graphite
      // release was 1.1.7 - March 2020). The bug was introduced in Graphite 1.1.7, in versions
      // 1.1.0 - 1.1.6 /functions endpoint returns a valid JSON
      const fixedData = JSON.parse(results.data.replace(/"default": ?Infinity/g, '"default": 1e9999'));
      this.funcDefs = gfunc.parseFuncDefs(fixedData);
      return this.funcDefs;
    }), (0,catchError/* catchError */.K)(error => {
      console.error('Fetching graphite functions error', error);
      this.funcDefs = gfunc.getFuncDefs(this.graphiteVersion);
      return (0,of.of)(this.funcDefs);
    })));
  }

  testDatasource() {
    const query = {
      panelId: 3,
      rangeRaw: {
        from: 'now-1h',
        to: 'now'
      },
      range: {
        raw: {
          from: 'now-1h',
          to: 'now'
        }
      },
      targets: [{
        target: 'constantLine(100)'
      }],
      maxDataPoints: 300
    };
    return (0,lastValueFrom/* lastValueFrom */.n)(this.query(query)).then(() => ({
      status: 'success',
      message: 'Data source is working'
    }));
  }

  doGraphiteRequest(options) {
    if (this.basicAuth || this.withCredentials) {
      options.withCredentials = true;
    }

    if (this.basicAuth) {
      options.headers = options.headers || {};
      options.headers.Authorization = this.basicAuth;
    }

    options.url = this.url + options.url;
    options.inspect = {
      type: 'graphite'
    };
    return (0,grafana_runtime_src.getBackendSrv)().fetch(options).pipe((0,catchError/* catchError */.K)(err => {
      return (0,throwError/* throwError */._)(reduceError(err));
    }));
  }

  buildGraphiteParams(options, scopedVars) {
    const graphiteOptions = ['from', 'until', 'rawData', 'format', 'maxDataPoints', 'cacheTimeout'];
    const cleanOptions = [],
          targets = {};
    let target, targetValue, i;
    const regex = /\#([A-Z])/g;
    const intervalFormatFixRegex = /'(\d+)m'/gi;
    let hasTargets = false;
    options['format'] = 'json';

    function fixIntervalFormat(match) {
      return match.replace('m', 'min').replace('M', 'mon');
    }

    for (i = 0; i < options.targets.length; i++) {
      target = options.targets[i];

      if (!target.target) {
        continue;
      }

      if (!target.refId) {
        target.refId = this._seriesRefLetters[i];
      }

      targetValue = this.templateSrv.replace(target.target, scopedVars);
      targetValue = targetValue.replace(intervalFormatFixRegex, fixIntervalFormat);
      targets[target.refId] = targetValue;
    }

    function nestedSeriesRegexReplacer(match, g1) {
      return targets[g1] || match;
    }

    for (i = 0; i < options.targets.length; i++) {
      target = options.targets[i];

      if (!target.target) {
        continue;
      }

      targetValue = targets[target.refId];
      targetValue = targetValue.replace(regex, nestedSeriesRegexReplacer);
      targets[target.refId] = targetValue;

      if (!target.hide) {
        hasTargets = true;
        cleanOptions.push('target=' + encodeURIComponent(targetValue));
      }
    }

    (0,lodash.each)(options, (value, key) => {
      if ((0,lodash.indexOf)(graphiteOptions, key) === -1) {
        return;
      }

      if (value) {
        cleanOptions.push(key + '=' + encodeURIComponent(value));
      }
    });

    if (!hasTargets) {
      return [];
    }

    return cleanOptions;
  }

}

function supportsTags(version) {
  return isVersionGtOrEq(version, '1.1');
}

function supportsFunctionIndex(version) {
  return isVersionGtOrEq(version, '1.1');
}

function mapToTags() {
  return (0,pipe/* pipe */.z)((0,map/* map */.U)(results => {
    if (results.data) {
      return (0,lodash.map)(results.data, value => {
        return {
          text: value
        };
      });
    } else {
      return [];
    }
  }));
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/graphite/module.ts
function module_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class AnnotationsQueryCtrl {}

module_defineProperty(AnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const module_plugin = new src.DataSourcePlugin(GraphiteDatasource).setQueryEditor(GraphiteQueryEditor).setConfigEditor(ConfigEditor).setMetadataInspector(MetricTankMetaInspector).setAnnotationQueryCtrl(AnnotationsQueryCtrl);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ })

}]);