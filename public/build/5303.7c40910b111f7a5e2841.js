"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5303],{

 "./packages/grafana-data/src/datetime/parser.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "J": () => ( dateTimeParse)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/moment-timezone-npm-0.5.34-e4fe2d01f6-12a1d3d52e.zip/node_modules/moment-timezone/index.js");
 var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
 var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/common.ts");
 var _datemath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/datemath.ts");
 var _formats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/datetime/formats.ts");
 var _moment_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");







const dateTimeParse = (value, options) => {
  if ((0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_5__ .v9)(value)) {
    return value;
  }

  if (typeof value === 'string') {
    return parseString(value, options);
  }

  return parseOthers(value, options);
};

const parseString = (value, options) => {
  var _options$format;

  if (value.indexOf('now') !== -1) {
    if (!(0,_datemath__WEBPACK_IMPORTED_MODULE_3__.isValid)(value)) {
      return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()();
    }

    const parsed = (0,_datemath__WEBPACK_IMPORTED_MODULE_3__.parse)(value, options === null || options === void 0 ? void 0 : options.roundUp, options === null || options === void 0 ? void 0 : options.timeZone, options === null || options === void 0 ? void 0 : options.fiscalYearStartMonth);
    return parsed || moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()();
  }

  const timeZone = (0,_common__WEBPACK_IMPORTED_MODULE_2__ .Z)(options);
  const zone = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.zone(timeZone);
  const format = (_options$format = options === null || options === void 0 ? void 0 : options.format) !== null && _options$format !== void 0 ? _options$format : _formats__WEBPACK_IMPORTED_MODULE_4__ .U6.fullDate;

  if (zone && zone.name) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(value, format, zone.name);
  }

  switch ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.lowerCase)(timeZone)) {
    case 'utc':
      return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().utc(value, format);

    default:
      return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(value, format);
  }
};

const parseOthers = (value, options) => {
  const date = value;
  const timeZone = (0,_common__WEBPACK_IMPORTED_MODULE_2__ .Z)(options);
  const zone = moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz.zone(timeZone);

  if (zone && zone.name) {
    return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().tz(date, zone.name);
  }

  switch ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.lowerCase)(timeZone)) {
    case 'utc':
      return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default().utc(date);

    default:
      return moment_timezone__WEBPACK_IMPORTED_MODULE_1___default()(date);
  }
};

 }),

 "./packages/grafana-data/src/events/eventFactory.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "X": () => ( eventFactory)
 });
const typeList = new Set();
function eventFactory(name) {
  if (typeList.has(name)) {
    throw new Error(`There is already an event defined with type '${name}'`);
  }

  typeList.add(name);
  return {
    name
  };
}

 }),

 "./packages/grafana-data/src/events/types.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "R": () => ( BusEventWithPayload),
   "m": () => ( BusEventBase)
 });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class BusEventBase {
  constructor() {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "payload", void 0);

    _defineProperty(this, "origin", void 0);

    this.type = this.__proto__.constructor.type;
  }

}

class BusEventWithPayload extends BusEventBase {
  constructor(payload) {
    super();

    _defineProperty(this, "payload", void 0);

    this.payload = payload;
  }

}

 }),

 "./packages/grafana-data/src/field/FieldConfigOptionsRegistry.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => ( FieldConfigOptionsRegistry)
 });
 var _utils_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/Registry.ts");

class FieldConfigOptionsRegistry extends _utils_Registry__WEBPACK_IMPORTED_MODULE_0__ .B {}

 }),

 "./packages/grafana-data/src/field/fieldComparers.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Mo": () => ( fieldIndexComparer)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var _datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/datetime/index.ts");
 var _types_dataFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");




const fieldIndexComparer = function (field) {
  let reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const values = field.values;

  switch (field.type) {
    case _types_dataFrame__WEBPACK_IMPORTED_MODULE_2__ .fS.number:
      return numericIndexComparer(values, reverse);

    case _types_dataFrame__WEBPACK_IMPORTED_MODULE_2__ .fS.string:
      return stringIndexComparer(values, reverse);

    case _types_dataFrame__WEBPACK_IMPORTED_MODULE_2__ .fS.boolean:
      return booleanIndexComparer(values, reverse);

    case _types_dataFrame__WEBPACK_IMPORTED_MODULE_2__ .fS.time:
      return timeIndexComparer(values, reverse);

    default:
      return naturalIndexComparer(reverse);
  }
};

const timeComparer = (a, b) => {
  if (!a || !b) {
    return falsyComparer(a, b);
  }

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(a) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(b)) {
    return numericComparer(a, b);
  }

  if ((0,_datetime__WEBPACK_IMPORTED_MODULE_1__ .CQ)(a).isBefore(b)) {
    return -1;
  }

  if ((0,_datetime__WEBPACK_IMPORTED_MODULE_1__ .CQ)(b).isBefore(a)) {
    return 1;
  }

  return 0;
};

const numericComparer = (a, b) => {
  return a - b;
};

const stringComparer = (a, b) => {
  if (!a || !b) {
    return falsyComparer(a, b);
  }

  return a.localeCompare(b);
};
const booleanComparer = (a, b) => {
  return falsyComparer(a, b);
};

const falsyComparer = (a, b) => {
  if (!a && b) {
    return 1;
  }

  if (a && !b) {
    return -1;
  }

  return 0;
};

const timeIndexComparer = (values, reverse) => {
  return (a, b) => {
    const vA = values.get(a);
    const vB = values.get(b);
    return reverse ? timeComparer(vB, vA) : timeComparer(vA, vB);
  };
};

const booleanIndexComparer = (values, reverse) => {
  return (a, b) => {
    const vA = values.get(a);
    const vB = values.get(b);
    return reverse ? booleanComparer(vB, vA) : booleanComparer(vA, vB);
  };
};

const numericIndexComparer = (values, reverse) => {
  return (a, b) => {
    const vA = values.get(a);
    const vB = values.get(b);
    return reverse ? numericComparer(vB, vA) : numericComparer(vA, vB);
  };
};

const stringIndexComparer = (values, reverse) => {
  return (a, b) => {
    const vA = values.get(a);
    const vB = values.get(b);
    return reverse ? stringComparer(vB, vA) : stringComparer(vA, vB);
  };
};

const naturalIndexComparer = reverse => {
  return (a, b) => {
    return reverse ? numericComparer(b, a) : numericComparer(a, b);
  };
};

 }),

 "./packages/grafana-data/src/field/fieldState.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "C": () => ( getFieldDisplayName),
   "n": () => ( getFrameDisplayName)
 });
 var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/index.ts");
 var _utils_labels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/labels.ts");



function getFrameDisplayName(frame, index) {
  if (frame.name) {
    return frame.name;
  } 


  const valuesWithLabels = [];

  for (const field of frame.fields) {
    if (field.labels && Object.keys(field.labels).length > 0) {
      valuesWithLabels.push(field);
    }
  }

  if (valuesWithLabels.length === 1) {
    return (0,_utils_labels__WEBPACK_IMPORTED_MODULE_1__ .aA)(valuesWithLabels[0].labels);
  } 


  if (index === undefined) {
    return frame.fields.filter(f => f.type !== _types__WEBPACK_IMPORTED_MODULE_0__ .fS.time).map(f => getFieldDisplayName(f, frame)).join(', ');
  }

  if (frame.refId) {
    return `Series (${frame.refId})`;
  }

  return `Series (${index})`;
}
function getFieldDisplayName(field, frame, allFrames) {
  var _field$state, _field$state2;

  const existingTitle = (_field$state = field.state) === null || _field$state === void 0 ? void 0 : _field$state.displayName;
  const multipleFrames = Boolean(allFrames && allFrames.length > 1);

  if (existingTitle && multipleFrames === ((_field$state2 = field.state) === null || _field$state2 === void 0 ? void 0 : _field$state2.multipleFrames)) {
    return existingTitle;
  }

  const displayName = calculateFieldDisplayName(field, frame, allFrames);
  field.state = field.state || {};
  field.state.displayName = displayName;
  field.state.multipleFrames = multipleFrames;
  return displayName;
}

function calculateFieldDisplayName(field, frame, allFrames) {
  var _field$config, _field$config2, _field$config3;

  const hasConfigTitle = ((_field$config = field.config) === null || _field$config === void 0 ? void 0 : _field$config.displayName) && ((_field$config2 = field.config) === null || _field$config2 === void 0 ? void 0 : _field$config2.displayName.length);
  let displayName = hasConfigTitle ? field.config.displayName : field.name;

  if (hasConfigTitle) {
    return displayName;
  }

  if (frame && (_field$config3 = field.config) !== null && _field$config3 !== void 0 && _field$config3.displayNameFromDS) {
    return field.config.displayNameFromDS;
  } 


  if (field.type === _types__WEBPACK_IMPORTED_MODULE_0__ .fS.time && !field.labels) {
    var _displayName;

    return (_displayName = displayName) !== null && _displayName !== void 0 ? _displayName : _types__WEBPACK_IMPORTED_MODULE_0__ .Ls;
  }

  let parts = [];
  let frameNamesDiffer = false;

  if (allFrames && allFrames.length > 1) {
    for (let i = 1; i < allFrames.length; i++) {
      const frame = allFrames[i];

      if (frame.name !== allFrames[i - 1].name) {
        frameNamesDiffer = true;
        break;
      }
    }
  }

  let frameNameAdded = false;
  let labelsAdded = false;

  if (frameNamesDiffer && frame !== null && frame !== void 0 && frame.name) {
    parts.push(frame.name);
    frameNameAdded = true;
  }

  if (field.name && field.name !== _types__WEBPACK_IMPORTED_MODULE_0__ .M5) {
    parts.push(field.name);
  }

  if (field.labels && frame) {
    let singleLabelName = getSingleLabelName(allFrames !== null && allFrames !== void 0 ? allFrames : [frame]);

    if (!singleLabelName) {
      let allLabels = (0,_utils_labels__WEBPACK_IMPORTED_MODULE_1__ .aA)(field.labels);

      if (allLabels) {
        parts.push(allLabels);
        labelsAdded = true;
      }
    } else if (field.labels[singleLabelName]) {
      parts.push(field.labels[singleLabelName]);
      labelsAdded = true;
    }
  } 


  if (frame && !frameNameAdded && !labelsAdded && field.name === _types__WEBPACK_IMPORTED_MODULE_0__ .M5) {
    if (frame.name && frame.name.length > 0) {
      parts.push(frame.name);
      frameNameAdded = true;
    }
  }

  if (parts.length) {
    displayName = parts.join(' ');
  } else if (field.name) {
    displayName = field.name;
  } else {
    displayName = _types__WEBPACK_IMPORTED_MODULE_0__ .M5;
  } 


  if (displayName === field.name) {
    displayName = getUniqueFieldName(field, frame);
  }

  return displayName;
}

function getUniqueFieldName(field, frame) {
  let dupeCount = 0;
  let foundSelf = false;

  if (frame) {
    for (let i = 0; i < frame.fields.length; i++) {
      const otherField = frame.fields[i];

      if (field === otherField) {
        foundSelf = true;

        if (dupeCount > 0) {
          dupeCount++;
          break;
        }
      } else if (field.name === otherField.name) {
        dupeCount++;

        if (foundSelf) {
          break;
        }
      }
    }
  }

  if (dupeCount) {
    return `${field.name} ${dupeCount}`;
  }

  return field.name;
}


function getSingleLabelName(frames) {
  let singleName = null;

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];

    for (const field of frame.fields) {
      if (!field.labels) {
        continue;
      } 


      for (const labelKey in field.labels) {
        if (singleName === null) {
          singleName = labelKey;
        } else if (labelKey !== singleName) {
          return null;
        }
      }
    }
  }

  return singleName;
}

 }),

 "./packages/grafana-data/src/text/sanitize.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Nm": () => ( sanitizeUrl),
   "Nw": () => ( sanitize),
   "Xv": () => ( escapeHtml),
   "he": () => ( sanitizeTextPanelContent),
   "oT": () => ( hasAnsiCodes)
 });
 var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@braintree-sanitize-url-npm-6.0.0-c4f0ae4c7f-409ce7709d.zip/node_modules/@braintree/sanitize-url/dist/index.js");
 var xss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/xss-npm-1.0.11-a8d30aee9c-86104fe3c0.zip/node_modules/xss/lib/index.js");
 var xss__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_1__);


const XSSWL = Object.keys(xss__WEBPACK_IMPORTED_MODULE_1__.whiteList).reduce((acc, element) => {
  var _xss$whiteList$elemen;

  acc[element] = (_xss$whiteList$elemen = xss__WEBPACK_IMPORTED_MODULE_1__.whiteList[element]) === null || _xss$whiteList$elemen === void 0 ? void 0 : _xss$whiteList$elemen.concat(['class', 'style']);
  return acc;
}, {});
const sanitizeXSS = new xss__WEBPACK_IMPORTED_MODULE_1__.FilterXSS({
  whiteList: XSSWL
});
const sanitizeTextPanelWhitelist = new xss__WEBPACK_IMPORTED_MODULE_1__.FilterXSS({
  whiteList: XSSWL,
  css: {
    whiteList: Object.assign({}, xss__WEBPACK_IMPORTED_MODULE_1__.getDefaultCSSWhiteList(), {
      'flex-direction': true,
      'flex-wrap': true,
      'flex-basis': true,
      'flex-grow': true,
      'flex-shrink': true,
      'flex-flow': true,
      gap: true,
      order: true,
      'justify-content': true,
      'justify-items': true,
      'justify-self': true,
      'align-items': true,
      'align-content': true,
      'align-self': true
    })
  }
});

function sanitize(unsanitizedString) {
  try {
    return sanitizeXSS.process(unsanitizedString);
  } catch (error) {
    console.error('String could not be sanitized', unsanitizedString);
    return unsanitizedString;
  }
}
function sanitizeTextPanelContent(unsanitizedString) {
  try {
    return sanitizeTextPanelWhitelist.process(unsanitizedString);
  } catch (error) {
    console.error('String could not be sanitized', unsanitizedString);
    return 'Text string could not be sanitized';
  }
}
function sanitizeUrl(url) {
  return (0,_braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_0__ .N)(url);
}
function hasAnsiCodes(input) {
  return /\u001b\[\d{1,2}m/.test(input);
}
function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

 }),

 "./packages/grafana-data/src/themes/createTheme.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "j": () => ( createTheme)
});

var themes_breakpoints = __webpack_require__("./packages/grafana-data/src/themes/breakpoints.ts");
var createColors = __webpack_require__("./packages/grafana-data/src/themes/createColors.ts");
;
function createComponents(colors, shadows) {
  const panel = {
    padding: 1,
    headerHeight: 4,
    background: colors.background.primary,
    borderColor: colors.border.weak,
    boxShadow: 'none'
  };
  const input = {
    borderColor: colors.border.medium,
    borderHover: colors.border.strong,
    text: colors.text.primary,
    background: colors.mode === 'dark' ? colors.background.canvas : colors.background.primary
  };
  return {
    height: {
      sm: 3,
      md: 4,
      lg: 6
    },
    input,
    panel,
    dropdown: {
      background: input.background
    },
    tooltip: {
      background: colors.background.secondary,
      text: colors.text.primary
    },
    dashboard: {
      background: colors.background.canvas,
      padding: 1
    },
    overlay: {
      background: colors.mode === 'dark' ? 'rgba(63, 62, 62, 0.45)' : 'rgba(208, 209, 211, 0.24)'
    },
    sidemenu: {
      width: 48
    },
    menuTabs: {
      height: 41
    },
    horizontalDrawer: {
      defaultHeight: 400
    }
  };
}
var createShadows = __webpack_require__("./packages/grafana-data/src/themes/createShadows.ts");
var createShape = __webpack_require__("./packages/grafana-data/src/themes/createShape.ts");
var createSpacing = __webpack_require__("./packages/grafana-data/src/themes/createSpacing.ts");
var createTransitions = __webpack_require__("./packages/grafana-data/src/themes/createTransitions.ts");
var createTypography = __webpack_require__("./packages/grafana-data/src/themes/createTypography.ts");
var types = __webpack_require__("./packages/grafana-data/src/types/index.ts");
;

function createV1Theme(theme) {
  const oldCommon = {
    name: 'Grafana Default',
    typography: {
      fontFamily: {
        sansSerif: theme.typography.fontFamily,
        monospace: theme.typography.fontFamilyMonospace
      },
      size: {
        base: `${theme.typography.fontSize}px`,
        xs: theme.typography.size.xs,
        sm: theme.typography.size.sm,
        md: theme.typography.size.md,
        lg: theme.typography.size.lg
      },
      heading: {
        h1: theme.typography.h1.fontSize,
        h2: theme.typography.h2.fontSize,
        h3: theme.typography.h3.fontSize,
        h4: theme.typography.h4.fontSize,
        h5: theme.typography.h5.fontSize,
        h6: theme.typography.h6.fontSize
      },
      weight: {
        light: theme.typography.fontWeightLight,
        regular: theme.typography.fontWeightRegular,
        semibold: theme.typography.fontWeightMedium,
        bold: theme.typography.fontWeightBold
      },
      lineHeight: {
        xs: theme.typography.bodySmall.lineHeight,
        sm: theme.typography.bodySmall.lineHeight,
        md: theme.typography.body.lineHeight,
        lg: theme.typography.h2.lineHeight
      },
      link: {
        decoration: 'none',
        hoverDecoration: 'none'
      }
    },
    breakpoints: {
      xs: `${theme.breakpoints.values.xs}px`,
      sm: `${theme.breakpoints.values.sm}px`,
      md: `${theme.breakpoints.values.md}px`,
      lg: `${theme.breakpoints.values.lg}px`,
      xl: `${theme.breakpoints.values.xl}px`,
      xxl: `${theme.breakpoints.values.xxl}px`
    },
    spacing: {
      base: theme.spacing.gridSize,
      insetSquishMd: theme.spacing(0.5, 1),
      d: theme.spacing(2),
      xxs: theme.spacing(0.25),
      xs: theme.spacing(0.5),
      sm: theme.spacing(1),
      md: theme.spacing(2),
      lg: theme.spacing(3),
      xl: theme.spacing(4),
      gutter: theme.spacing(4),
      formSpacingBase: theme.spacing.gridSize,
      formMargin: `${theme.spacing.gridSize * 4}px`,
      formFieldsetMargin: `${theme.spacing.gridSize * 2}px`,
      formInputHeight: theme.spacing.gridSize * 4,
      formButtonHeight: theme.spacing.gridSize * 4,
      formInputPaddingHorizontal: `${theme.spacing.gridSize}px`,
      formInputAffixPaddingHorizontal: `${theme.spacing.gridSize / 2}px`,
      formInputMargin: `${theme.spacing.gridSize * 2}px`,
      formLabelPadding: '0 0 0 2px',
      formLabelMargin: `0 0 ${theme.spacing.gridSize / 2 + 'px'} 0`,
      formValidationMessagePadding: '4px 8px',
      formValidationMessageMargin: '4px 0 0 0',
      inlineFormMargin: '4px'
    },
    border: {
      radius: {
        sm: theme.shape.borderRadius(1),
        md: theme.shape.borderRadius(2),
        lg: theme.shape.borderRadius(3)
      },
      width: {
        sm: '1px'
      }
    },
    height: {
      sm: theme.spacing.gridSize * theme.components.height.sm,
      md: theme.spacing.gridSize * theme.components.height.md,
      lg: theme.spacing.gridSize * theme.components.height.lg
    },
    panelPadding: theme.components.panel.padding * theme.spacing.gridSize,
    panelHeaderHeight: theme.spacing.gridSize * theme.components.panel.headerHeight,
    zIndex: theme.zIndex
  };
  const basicColors = Object.assign({}, commonColorsPalette, {
    black: '#000000',
    white: '#ffffff',
    dark1: '#141414',
    dark2: '#161719',
    dark3: '#1f1f20',
    dark4: '#212124',
    dark5: '#222426',
    dark6: '#262628',
    dark7: '#292a2d',
    dark8: '#2f2f32',
    dark9: '#343436',
    dark10: '#424345',
    gray1: '#555555',
    gray2: '#8e8e8e',
    gray3: '#b3b3b3',
    gray4: '#d8d9da',
    gray5: '#ececec',
    gray6: '#f4f5f8',
    gray7: '#fbfbfb',
    redBase: '#e02f44',
    redShade: '#c4162a',
    greenBase: '#299c46',
    greenShade: '#23843b',
    red: '#d44a3a',
    yellow: '#ecbb13',
    purple: '#9933cc',
    variable: '#32d1df',
    orange: '#eb7b18',
    orangeDark: '#ff780a'
  });
  const backgrounds = {
    bg1: theme.colors.background.primary,
    bg2: theme.colors.background.secondary,
    bg3: theme.colors.action.hover,
    dashboardBg: theme.colors.background.canvas,
    bgBlue1: theme.colors.primary.main,
    bgBlue2: theme.colors.primary.shade
  };
  const borders = {
    border1: theme.colors.border.weak,
    border2: theme.colors.border.medium,
    border3: theme.colors.border.strong
  };
  const textColors = {
    textStrong: theme.colors.text.maxContrast,
    textHeading: theme.colors.text.primary,
    text: theme.colors.text.primary,
    textSemiWeak: theme.colors.text.secondary,
    textWeak: theme.colors.text.secondary,
    textFaint: theme.colors.text.disabled,
    textBlue: theme.colors.primary.text
  };
  const form = {
    formLabel: theme.colors.text.primary,
    formDescription: theme.colors.text.secondary,
    formInputBg: theme.components.input.background,
    formInputBgDisabled: theme.colors.action.disabledBackground,
    formInputBorder: theme.components.input.borderColor,
    formInputBorderHover: theme.components.input.borderHover,
    formInputBorderActive: theme.colors.primary.border,
    formInputBorderInvalid: theme.colors.error.border,
    formInputPlaceholderText: theme.colors.text.disabled,
    formInputText: theme.components.input.text,
    formInputDisabledText: theme.colors.action.disabledText,
    formFocusOutline: theme.colors.primary.main,
    formValidationMessageText: theme.colors.error.contrastText,
    formValidationMessageBg: theme.colors.error.main
  };
  return Object.assign({}, oldCommon, {
    type: theme.colors.mode === 'dark' ? types.Qu.Dark : types.Qu.Light,
    isDark: theme.isDark,
    isLight: theme.isLight,
    name: theme.name,
    palette: Object.assign({}, basicColors, {
      brandPrimary: basicColors.orange,
      brandSuccess: theme.colors.success.main,
      brandWarning: theme.colors.warning.main,
      brandDanger: theme.colors.error.main,
      queryRed: theme.colors.error.text,
      queryGreen: theme.colors.success.text,
      queryPurple: '#fe85fc',
      queryOrange: basicColors.orange,
      online: theme.colors.success.main,
      warn: theme.colors.success.main,
      critical: theme.colors.success.main
    }),
    colors: Object.assign({}, backgrounds, borders, form, textColors, {
      bodyBg: theme.colors.background.canvas,
      panelBg: theme.components.panel.background,
      panelBorder: theme.components.panel.borderColor,
      pageHeaderBg: theme.colors.background.canvas,
      pageHeaderBorder: theme.colors.background.canvas,
      dropdownBg: form.formInputBg,
      dropdownShadow: basicColors.black,
      dropdownOptionHoverBg: backgrounds.bg2,
      link: theme.colors.text.primary,
      linkDisabled: theme.colors.text.disabled,
      linkHover: theme.colors.text.maxContrast,
      linkExternal: theme.colors.text.link
    }),
    shadows: {
      listItem: 'none'
    },
    visualization: theme.visualization
  });
}
const commonColorsPalette = {
  gray98: '#f7f8fa',
  gray97: '#f1f5f9',
  gray95: '#e9edf2',
  gray90: '#dce1e6',
  gray85: '#c7d0d9',
  gray70: '#9fa7b3',
  gray60: '#7b8087',
  gray33: '#464c54',
  gray25: '#2c3235',
  gray15: '#202226',
  gray10: '#141619',
  gray05: '#0b0c0e',
  blue95: '#5794f2',
  blue85: '#33a2e5',
  blue80: '#3274d9',
  blue77: '#1f60c4',
  red88: '#e02f44'
};
var createVisualizationColors = __webpack_require__("./packages/grafana-data/src/themes/createVisualizationColors.ts");
var zIndex = __webpack_require__("./packages/grafana-data/src/themes/zIndex.ts");
;












function createTheme() {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    name = 'Dark',
    colors: colorsInput = {},
    spacing: spacingInput = {},
    shape: shapeInput = {},
    typography: typographyInput = {}
  } = options;
  const colors = (0,createColors.i)(colorsInput);
  const breakpoints = (0,themes_breakpoints._)();
  const spacing = (0,createSpacing._)(spacingInput);
  const shape = (0,createShape.r)(shapeInput);
  const typography = (0,createTypography.f)(colors, typographyInput);
  const shadows = (0,createShadows.G)(colors);
  const transitions = (0,createTransitions.ig)();
  const components = createComponents(colors, shadows);
  const visualization = (0,createVisualizationColors.x)(colors);
  const theme = {
    name,
    isDark: colors.mode === 'dark',
    isLight: colors.mode === 'light',
    colors,
    breakpoints,
    spacing,
    shape,
    components,
    typography,
    shadows,
    transitions,
    visualization,
    zIndex: Object.assign({}, zIndex.W)
  };
  return Object.assign({}, theme, {
    v1: createV1Theme(theme)
  });
}

 }),

 "./packages/grafana-data/src/themes/palette.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "D": () => ( palette)
 });
const palette = {
  white: '#FFFFFF',
  black: '#000000',
  gray25: '#2c3235',
  gray15: '#22252b',
  gray10: '#181b1f',
  gray05: '#111217',
  darkLayer0: '#18181A',
  darkLayer1: '#212124',
  darkLayer2: '#2a2a2f',
  darkBorder1: '#34343B',
  darkBorder2: '#64646B',
  gray90: '#F4F5F5',
  gray100: '#F4F5F5',
  gray80: '#D0D1D3',
  lightBorder1: '#E4E7E7',
  blueDarkMain: '#3D71D9',
  blueDarkText: '#6E9FFF',
  redDarkMain: '#D10E5C',
  redDarkText: '#FF5286',
  greenDarkMain: '#1A7F4B',
  greenDarkText: '#6CCF8E',
  orangeDarkMain: '#F5B73D',
  orangeDarkText: '#F8D06B',
  blueLightMain: '#3871DC',
  blueLightText: '#1F62E0',
  redLightMain: '#E0226E',
  redLightText: '#CF0E5B',
  greenLightMain: '#1B855E',
  greenLightText: '#0A764E',
  orangeLightMain: '#FAD34A',
  orangeLightText: '#8A6C00'
};

 }),

 "./packages/grafana-data/src/transformations/fieldReducer.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Kx": () => ( reduceField),
   "TB": () => ( fieldReducers),
   "gz": () => ( ReducerID),
   "uP": () => ( doStandardCalcs)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var _types_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/index.ts");
 var _utils_Registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/Registry.ts");



let ReducerID; 

(function (ReducerID) {
  ReducerID["sum"] = "sum";
  ReducerID["max"] = "max";
  ReducerID["min"] = "min";
  ReducerID["logmin"] = "logmin";
  ReducerID["mean"] = "mean";
  ReducerID["variancePopulation"] = "variancePopulation";
  ReducerID["stddevPopulation"] = "stddevPopulation";
  ReducerID["varianceSample"] = "varianceSample";
  ReducerID["stddevSample"] = "stddevSample";
  ReducerID["last"] = "last";
  ReducerID["first"] = "first";
  ReducerID["count"] = "count";
  ReducerID["range"] = "range";
  ReducerID["diff"] = "diff";
  ReducerID["diffperc"] = "diffperc";
  ReducerID["delta"] = "delta";
  ReducerID["step"] = "step";
  ReducerID["firstNotNull"] = "firstNotNull";
  ReducerID["lastNotNull"] = "lastNotNull";
  ReducerID["changeCount"] = "changeCount";
  ReducerID["distinctCount"] = "distinctCount";
  ReducerID["allIsZero"] = "allIsZero";
  ReducerID["allIsNull"] = "allIsNull";
  ReducerID["allValues"] = "allValues";
  ReducerID["uniqueValues"] = "uniqueValues";
})(ReducerID || (ReducerID = {}));

function reduceField(options) {
  var _field$state;

  const {
    field,
    reducers
  } = options;

  if (!field || !reducers || reducers.length < 1) {
    return {};
  }

  if ((_field$state = field.state) !== null && _field$state !== void 0 && _field$state.calcs) {
    const missing = [];

    for (const s of reducers) {
      if (!field.state.calcs.hasOwnProperty(s)) {
        missing.push(s);
      }
    }

    if (missing.length < 1) {
      return Object.assign({}, field.state.calcs);
    }
  }

  if (!field.state) {
    field.state = {};
  }

  const queue = fieldReducers.list(reducers); 

  const data = field.values;

  if (data.length < 1) {
    const calcs = Object.assign({}, field.state.calcs);

    for (const reducer of queue) {
      calcs[reducer.id] = reducer.emptyInputResult !== null ? reducer.emptyInputResult : null;
    }

    return field.state.calcs = calcs;
  }

  const {
    nullValueMode
  } = field.config;
  const ignoreNulls = nullValueMode === _types_index__WEBPACK_IMPORTED_MODULE_1__ .Gl.Ignore;
  const nullAsZero = nullValueMode === _types_index__WEBPACK_IMPORTED_MODULE_1__ .Gl.AsZero; 

  if (queue.length === 1 && queue[0].reduce) {
    const values = queue[0].reduce(field, ignoreNulls, nullAsZero);
    field.state.calcs = Object.assign({}, field.state.calcs, values);
    return values;
  } 


  let values = doStandardCalcs(field, ignoreNulls, nullAsZero);

  for (const reducer of queue) {
    if (!values.hasOwnProperty(reducer.id) && reducer.reduce) {
      values = Object.assign({}, values, reducer.reduce(field, ignoreNulls, nullAsZero));
    }
  }

  field.state.calcs = Object.assign({}, field.state.calcs, values);
  return values;
} 

const fieldReducers = new _utils_Registry__WEBPACK_IMPORTED_MODULE_2__ .B(() => [{
  id: ReducerID.lastNotNull,
  name: 'Last *',
  description: 'Last non-null value',
  standard: true,
  aliasIds: ['current'],
  reduce: calculateLastNotNull
}, {
  id: ReducerID.last,
  name: 'Last',
  description: 'Last value',
  standard: true,
  reduce: calculateLast
}, {
  id: ReducerID.firstNotNull,
  name: 'First *',
  description: 'First non-null value',
  standard: true,
  reduce: calculateFirstNotNull
}, {
  id: ReducerID.first,
  name: 'First',
  description: 'First Value',
  standard: true,
  reduce: calculateFirst
}, {
  id: ReducerID.min,
  name: 'Min',
  description: 'Minimum Value',
  standard: true
}, {
  id: ReducerID.max,
  name: 'Max',
  description: 'Maximum Value',
  standard: true
}, {
  id: ReducerID.mean,
  name: 'Mean',
  description: 'Average Value',
  standard: true,
  aliasIds: ['avg']
}, {
  id: ReducerID.variancePopulation,
  name: 'Variance (Population)',
  description: 'Variance (based on population) of all values in a field',
  standard: true
}, {
  id: ReducerID.stddevPopulation,
  name: 'Standard deviation (Population)',
  description: 'Standard deviation (based on population) of all values in a field',
  standard: true
}, {
  id: ReducerID.varianceSample,
  name: 'Variance (Sample)',
  description: 'Variance (based on sample) of all values in a field',
  standard: true
}, {
  id: ReducerID.stddevSample,
  name: 'Standard deviation (Sample)',
  description: 'Standard deviation (based on sample) of all values in a field',
  standard: true
}, {
  id: ReducerID.sum,
  name: 'Total',
  description: 'The sum of all values',
  emptyInputResult: 0,
  standard: true,
  aliasIds: ['total']
}, {
  id: ReducerID.count,
  name: 'Count',
  description: 'Number of values in response',
  emptyInputResult: 0,
  standard: true
}, {
  id: ReducerID.range,
  name: 'Range',
  description: 'Difference between minimum and maximum values',
  standard: true
}, {
  id: ReducerID.delta,
  name: 'Delta',
  description: 'Cumulative change in value',
  standard: true
}, {
  id: ReducerID.step,
  name: 'Step',
  description: 'Minimum interval between values',
  standard: true
}, {
  id: ReducerID.diff,
  name: 'Difference',
  description: 'Difference between first and last values',
  standard: true
}, {
  id: ReducerID.logmin,
  name: 'Min (above zero)',
  description: 'Used for log min scale',
  standard: true
}, {
  id: ReducerID.allIsZero,
  name: 'All Zeros',
  description: 'All values are zero',
  emptyInputResult: false,
  standard: true
}, {
  id: ReducerID.allIsNull,
  name: 'All Nulls',
  description: 'All values are null',
  emptyInputResult: true,
  standard: true
}, {
  id: ReducerID.changeCount,
  name: 'Change Count',
  description: 'Number of times the value changes',
  standard: false,
  reduce: calculateChangeCount
}, {
  id: ReducerID.distinctCount,
  name: 'Distinct Count',
  description: 'Number of distinct values',
  standard: false,
  reduce: calculateDistinctCount
}, {
  id: ReducerID.diffperc,
  name: 'Difference percent',
  description: 'Percentage difference between first and last values',
  standard: true
}, {
  id: ReducerID.allValues,
  name: 'All values',
  description: 'Returns an array with all values',
  standard: false,
  reduce: field => ({
    allValues: field.values.toArray()
  })
}, {
  id: ReducerID.uniqueValues,
  name: 'All unique values',
  description: 'Returns an array with all unique values',
  standard: false,
  reduce: field => ({
    uniqueValues: [...new Set(field.values.toArray())]
  })
}]);
function doStandardCalcs(field, ignoreNulls, nullAsZero) {
  const calcs = {
    sum: 0,
    max: -Number.MAX_VALUE,
    min: Number.MAX_VALUE,
    logmin: Number.MAX_VALUE,
    mean: null,
    variancePopulation: null,
    stddevPopulation: null,
    varianceSample: null,
    stddevSample: null,
    last: null,
    first: null,
    lastNotNull: null,
    firstNotNull: null,
    count: 0,
    nonNullCount: 0,
    allIsNull: true,
    allIsZero: true,
    range: null,
    diff: null,
    delta: 0,
    step: Number.MAX_VALUE,
    diffperc: 0,
    previousDeltaUp: true
  };
  let squareSum = 0;
  const data = field.values;
  calcs.count = data.length;
  const isNumberField = field.type === _types_index__WEBPACK_IMPORTED_MODULE_1__ .fS.number || _types_index__WEBPACK_IMPORTED_MODULE_1__ .fS.time;

  for (let i = 0; i < data.length; i++) {
    let currentValue = data.get(i);

    if (i === 0) {
      calcs.first = currentValue;
    }

    calcs.last = currentValue;

    if (currentValue === null) {
      if (ignoreNulls) {
        continue;
      }

      if (nullAsZero) {
        currentValue = 0;
      }
    }

    if (currentValue != null) {
      const isFirst = calcs.firstNotNull === null;

      if (isFirst) {
        calcs.firstNotNull = currentValue;
      }

      if (isNumberField) {
        calcs.sum += currentValue;
        calcs.allIsNull = false;
        calcs.nonNullCount++;

        if (!isFirst) {
          const step = currentValue - calcs.lastNotNull;

          if (calcs.step > step) {
            calcs.step = step; 
          }

          if (calcs.lastNotNull > currentValue) {
            calcs.previousDeltaUp = false;

            if (i === data.length - 1) {
              calcs.delta += currentValue;
            }
          } else {
            if (calcs.previousDeltaUp) {
              calcs.delta += step; 
            } else {
              calcs.delta += currentValue; 
            }

            calcs.previousDeltaUp = true;
          }
        }

        if (currentValue > calcs.max) {
          calcs.max = currentValue;
        }

        if (currentValue < calcs.min) {
          calcs.min = currentValue;
        }

        if (currentValue < calcs.logmin && currentValue > 0) {
          calcs.logmin = currentValue;
        }

        let _oldMean = calcs.mean;
        calcs.mean += (currentValue - _oldMean) / calcs.nonNullCount;
        squareSum += (currentValue - _oldMean) * (currentValue - calcs.mean);
      }

      if (currentValue !== 0) {
        calcs.allIsZero = false;
      }

      calcs.lastNotNull = currentValue;
    }
  }

  if (calcs.max === -Number.MAX_VALUE) {
    calcs.max = null;
  }

  if (calcs.min === Number.MAX_VALUE) {
    calcs.min = null;
  }

  if (calcs.step === Number.MAX_VALUE) {
    calcs.step = null;
  }

  if (calcs.nonNullCount > 0) {
    calcs.variancePopulation = squareSum / calcs.nonNullCount;
  }

  if (calcs.nonNullCount > 0) {
    calcs.stddevPopulation = Math.sqrt(calcs.variancePopulation);
  }

  if (calcs.nonNullCount > 0) {
    calcs.varianceSample = squareSum / (calcs.nonNullCount - 1);
  }

  if (calcs.nonNullCount > 0) {
    calcs.stddevSample = Math.sqrt(calcs.varianceSample);
  }

  if (calcs.allIsNull) {
    calcs.allIsZero = false;
  }

  if (calcs.max !== null && calcs.min !== null) {
    calcs.range = calcs.max - calcs.min;
  }

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(calcs.firstNotNull) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(calcs.lastNotNull)) {
    calcs.diff = calcs.lastNotNull - calcs.firstNotNull;
  }

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(calcs.firstNotNull) && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNumber)(calcs.diff)) {
    calcs.diffperc = calcs.diff / calcs.firstNotNull;
  }

  return calcs;
}

function calculateFirst(field, ignoreNulls, nullAsZero) {
  return {
    first: field.values.get(0)
  };
}

function calculateFirstNotNull(field, ignoreNulls, nullAsZero) {
  const data = field.values;

  for (let idx = 0; idx < data.length; idx++) {
    const v = data.get(idx);

    if (v != null && v !== undefined) {
      return {
        firstNotNull: v
      };
    }
  }

  return {
    firstNotNull: null
  };
}

function calculateLast(field, ignoreNulls, nullAsZero) {
  const data = field.values;
  return {
    last: data.get(data.length - 1)
  };
}

function calculateLastNotNull(field, ignoreNulls, nullAsZero) {
  const data = field.values;
  let idx = data.length - 1;

  while (idx >= 0) {
    const v = data.get(idx--);

    if (v != null && v !== undefined) {
      return {
        lastNotNull: v
      };
    }
  }

  return {
    lastNotNull: null
  };
}

function calculateChangeCount(field, ignoreNulls, nullAsZero) {
  const data = field.values;
  let count = 0;
  let first = true;
  let last = null;

  for (let i = 0; i < data.length; i++) {
    let currentValue = data.get(i);

    if (currentValue === null) {
      if (ignoreNulls) {
        continue;
      }

      if (nullAsZero) {
        currentValue = 0;
      }
    }

    if (!first && last !== currentValue) {
      count++;
    }

    first = false;
    last = currentValue;
  }

  return {
    changeCount: count
  };
}

function calculateDistinctCount(field, ignoreNulls, nullAsZero) {
  const data = field.values;
  const distinct = new Set();

  for (let i = 0; i < data.length; i++) {
    let currentValue = data.get(i);

    if (currentValue === null) {
      if (ignoreNulls) {
        continue;
      }

      if (nullAsZero) {
        currentValue = 0;
      }
    }

    distinct.add(currentValue);
  }

  return {
    distinctCount: distinct.size
  };
}

 }),

 "./packages/grafana-data/src/transformations/matchers/fieldTypeMatcher.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "N": () => ( getFieldTypeMatchers)
 });
 var _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");


const fieldTypeMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mi.byType,
  name: 'Field Type',
  description: 'match based on the field type',
  defaultOptions: _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.number,
  get: type => {
    return (field, frame, allFrames) => {
      return type === field.type;
    };
  },
  getOptionsDisplayText: type => {
    return `Field type: ${type}`;
  }
}; 

const numericMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mi.numeric,
  name: 'Numeric Fields',
  description: 'Fields with type number',
  get: () => {
    return fieldTypeMatcher.get(_types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.number);
  },
  getOptionsDisplayText: () => {
    return 'Numeric Fields';
  }
}; 

const timeMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mi.time,
  name: 'Time Fields',
  description: 'Fields with type time',
  get: () => {
    return fieldTypeMatcher.get(_types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.time);
  },
  getOptionsDisplayText: () => {
    return 'Time Fields';
  }
};

function getFieldTypeMatchers() {
  return [fieldTypeMatcher, numericMatcher, timeMatcher];
}

 }),

 "./packages/grafana-data/src/transformations/matchers/ids.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "E4": () => ( FrameMatcherID),
   "Ff": () => ( MatcherID),
   "mE": () => ( ValueMatcherID),
   "mi": () => ( FieldMatcherID)
 });
let MatcherID;

(function (MatcherID) {
  MatcherID["anyMatch"] = "anyMatch";
  MatcherID["allMatch"] = "allMatch";
  MatcherID["invertMatch"] = "invertMatch";
  MatcherID["alwaysMatch"] = "alwaysMatch";
  MatcherID["neverMatch"] = "neverMatch";
})(MatcherID || (MatcherID = {}));

let FieldMatcherID;

(function (FieldMatcherID) {
  FieldMatcherID["numeric"] = "numeric";
  FieldMatcherID["time"] = "time";
  FieldMatcherID["first"] = "first";
  FieldMatcherID["firstTimeField"] = "firstTimeField";
  FieldMatcherID["byType"] = "byType";
  FieldMatcherID["byName"] = "byName";
  FieldMatcherID["byNames"] = "byNames";
  FieldMatcherID["byRegexp"] = "byRegexp";
  FieldMatcherID["byRegexpOrNames"] = "byRegexpOrNames";
  FieldMatcherID["byFrameRefID"] = "byFrameRefID";
})(FieldMatcherID || (FieldMatcherID = {}));

let FrameMatcherID;

(function (FrameMatcherID) {
  FrameMatcherID["byName"] = "byName";
  FrameMatcherID["byRefId"] = "byRefId";
  FrameMatcherID["byIndex"] = "byIndex";
  FrameMatcherID["byLabel"] = "byLabel";
})(FrameMatcherID || (FrameMatcherID = {}));

let ValueMatcherID;

(function (ValueMatcherID) {
  ValueMatcherID["regex"] = "regex";
  ValueMatcherID["isNull"] = "isNull";
  ValueMatcherID["isNotNull"] = "isNotNull";
  ValueMatcherID["greater"] = "greater";
  ValueMatcherID["greaterOrEqual"] = "greaterOrEqual";
  ValueMatcherID["lower"] = "lower";
  ValueMatcherID["lowerOrEqual"] = "lowerOrEqual";
  ValueMatcherID["equal"] = "equal";
  ValueMatcherID["notEqual"] = "notEqual";
  ValueMatcherID["between"] = "between";
})(ValueMatcherID || (ValueMatcherID = {}));

 }),

 "./packages/grafana-data/src/transformations/matchers/predicates.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Qw": () => ( notTimeFieldMatcher),
   "Ty": () => ( getFieldPredicateMatchers),
   "fX": () => ( getFramePredicateMatchers),
   "m3": () => ( alwaysFieldMatcher)
 });
 var _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
 var _matchers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");



const anyFieldMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.anyMatch,
  name: 'Any',
  description: 'Any child matches (OR)',
  excludeFromPicker: true,
  defaultOptions: [],
  get: options => {
    const children = options.map(option => {
      return (0,_matchers__WEBPACK_IMPORTED_MODULE_1__ .sq)(option);
    });
    return (field, frame, allFrames) => {
      for (const child of children) {
        if (child(field, frame, allFrames)) {
          return true;
        }
      }

      return false;
    };
  },
  getOptionsDisplayText: options => {
    let text = '';

    for (const sub of options) {
      if (text.length > 0) {
        text += ' OR ';
      }

      const matcher = _matchers__WEBPACK_IMPORTED_MODULE_1__ .Ls.get(sub.id);
      text += matcher.getOptionsDisplayText ? matcher.getOptionsDisplayText(sub) : matcher.name;
    }

    return text;
  }
};
const anyFrameMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.anyMatch,
  name: 'Any',
  description: 'Any child matches (OR)',
  excludeFromPicker: true,
  defaultOptions: [],
  get: options => {
    const children = options.map(option => {
      return (0,_matchers__WEBPACK_IMPORTED_MODULE_1__ .b9)(option);
    });
    return frame => {
      for (const child of children) {
        if (child(frame)) {
          return true;
        }
      }

      return false;
    };
  },
  getOptionsDisplayText: options => {
    let text = '';

    for (const sub of options) {
      if (text.length > 0) {
        text += ' OR ';
      }

      const matcher = _matchers__WEBPACK_IMPORTED_MODULE_1__ .Ac.get(sub.id);
      text += matcher.getOptionsDisplayText ? matcher.getOptionsDisplayText(sub) : matcher.name;
    }

    return text;
  }
};
const allFieldsMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.allMatch,
  name: 'All',
  description: 'Everything matches (AND)',
  excludeFromPicker: true,
  defaultOptions: [],
  get: options => {
    const children = options.map(option => {
      return (0,_matchers__WEBPACK_IMPORTED_MODULE_1__ .sq)(option);
    });
    return (field, frame, allFrames) => {
      for (const child of children) {
        if (!child(field, frame, allFrames)) {
          return false;
        }
      }

      return true;
    };
  },
  getOptionsDisplayText: options => {
    let text = '';

    for (const sub of options) {
      if (text.length > 0) {
        text += ' AND ';
      }

      const matcher = _matchers__WEBPACK_IMPORTED_MODULE_1__ .Ls.get(sub.id); 

      text += matcher.getOptionsDisplayText ? matcher.getOptionsDisplayText(sub) : matcher.name;
    }

    return text;
  }
};
const allFramesMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.allMatch,
  name: 'All',
  description: 'Everything matches (AND)',
  excludeFromPicker: true,
  defaultOptions: [],
  get: options => {
    const children = options.map(option => {
      return (0,_matchers__WEBPACK_IMPORTED_MODULE_1__ .b9)(option);
    });
    return frame => {
      for (const child of children) {
        if (!child(frame)) {
          return false;
        }
      }

      return true;
    };
  },
  getOptionsDisplayText: options => {
    let text = '';

    for (const sub of options) {
      if (text.length > 0) {
        text += ' AND ';
      }

      const matcher = _matchers__WEBPACK_IMPORTED_MODULE_1__ .Ac.get(sub.id);
      text += matcher.getOptionsDisplayText ? matcher.getOptionsDisplayText(sub) : matcher.name;
    }

    return text;
  }
};
const notFieldMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.invertMatch,
  name: 'NOT',
  description: 'Inverts other matchers',
  excludeFromPicker: true,
  get: option => {
    const check = (0,_matchers__WEBPACK_IMPORTED_MODULE_1__ .sq)(option);
    return (field, frame, allFrames) => {
      return !check(field, frame, allFrames);
    };
  },
  getOptionsDisplayText: options => {
    const matcher = _matchers__WEBPACK_IMPORTED_MODULE_1__ .Ls.get(options.id);
    const text = matcher.getOptionsDisplayText ? matcher.getOptionsDisplayText(options.options) : matcher.name;
    return 'NOT ' + text;
  }
};
const notFrameMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.invertMatch,
  name: 'NOT',
  description: 'Inverts other matchers',
  excludeFromPicker: true,
  get: option => {
    const check = (0,_matchers__WEBPACK_IMPORTED_MODULE_1__ .b9)(option);
    return frame => {
      return !check(frame);
    };
  },
  getOptionsDisplayText: options => {
    const matcher = _matchers__WEBPACK_IMPORTED_MODULE_1__ .Ac.get(options.id);
    const text = matcher.getOptionsDisplayText ? matcher.getOptionsDisplayText(options.options) : matcher.name;
    return 'NOT ' + text;
  }
};
const alwaysFieldMatcher = field => {
  return true;
};
const alwaysFrameMatcher = frame => {
  return true;
};
const neverFieldMatcher = field => {
  return false;
};
const notTimeFieldMatcher = field => {
  return field.type !== _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.time;
};
const neverFrameMatcher = frame => {
  return false;
};
const alwaysFieldMatcherInfo = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.alwaysMatch,
  name: 'All Fields',
  description: 'Always Match',
  get: option => {
    return alwaysFieldMatcher;
  },
  getOptionsDisplayText: options => {
    return 'Always';
  }
};
const alwaysFrameMatcherInfo = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.alwaysMatch,
  name: 'All Frames',
  description: 'Always Match',
  get: option => {
    return alwaysFrameMatcher;
  },
  getOptionsDisplayText: options => {
    return 'Always';
  }
};
const neverFieldMatcherInfo = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.neverMatch,
  name: 'No Fields',
  description: 'Never Match',
  excludeFromPicker: true,
  get: option => {
    return neverFieldMatcher;
  },
  getOptionsDisplayText: options => {
    return 'Never';
  }
};
const neverFrameMatcherInfo = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .Ff.neverMatch,
  name: 'No Frames',
  description: 'Never Match',
  get: option => {
    return neverFrameMatcher;
  },
  getOptionsDisplayText: options => {
    return 'Never';
  }
};
function getFieldPredicateMatchers() {
  return [anyFieldMatcher, allFieldsMatcher, notFieldMatcher, alwaysFieldMatcherInfo, neverFieldMatcherInfo];
}
function getFramePredicateMatchers() {
  return [anyFrameMatcher, allFramesMatcher, notFrameMatcher, alwaysFrameMatcherInfo, neverFrameMatcherInfo];
}

 }),

 "./packages/grafana-data/src/transformations/matchers/refIdMatcher.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "n": () => ( getRefIdMatchers)
 });
 var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/text/index.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");


const refIdMacher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .E4.byRefId,
  name: 'Query refId',
  description: 'match the refId',
  defaultOptions: 'A',
  get: pattern => {
    const regex = (0,_text__WEBPACK_IMPORTED_MODULE_0__ .jO)(pattern);
    return frame => {
      return regex.test(frame.refId || '');
    };
  },
  getOptionsDisplayText: pattern => {
    return `RefID: ${pattern}`;
  }
};
function getRefIdMatchers() {
  return [refIdMacher];
}

 }),

 "./packages/grafana-data/src/transformations/matchers/simpleFieldMatcher.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "z": () => ( getSimpleFieldMatchers)
 });
 var _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");


const firstFieldMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mi.first,
  name: 'First Field',
  description: 'The first field in the frame',
  get: type => {
    return (field, frame, allFrames) => {
      return field === frame.fields[0];
    };
  },
  getOptionsDisplayText: () => {
    return `First field`;
  }
};
const firstTimeFieldMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mi.firstTimeField,
  name: 'First time field',
  description: 'The first field of type time in a frame',
  get: type => {
    return (field, frame, allFrames) => {
      return field.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.time && field === frame.fields.find(f => f.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.time);
    };
  },
  getOptionsDisplayText: () => {
    return `First time field`;
  }
};

function getSimpleFieldMatchers() {
  return [firstFieldMatcher, firstTimeFieldMatcher];
}

 }),

 "./packages/grafana-data/src/transformations/matchers/valueMatchers/equalMatchers.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "T": () => ( getEqualValueMatchers)
 });
 var _ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");

const isEqualValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_0__ .mE.equal,
  name: 'Is equal',
  description: 'Match where value for given field is equal to options value.',
  get: options => {
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex); 

      return value == options.value;
    };
  },
  getOptionsDisplayText: () => {
    return `Matches all rows where field is null.`;
  },
  isApplicable: () => true,
  getDefaultOptions: () => ({
    value: ''
  })
};
const isNotEqualValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_0__ .mE.notEqual,
  name: 'Is not equal',
  description: 'Match where value for given field is not equal to options value.',
  get: options => {
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex); 

      return value != options.value;
    };
  },
  getOptionsDisplayText: () => {
    return `Matches all rows where field is not null.`;
  },
  isApplicable: () => true,
  getDefaultOptions: () => ({
    value: ''
  })
};
const getEqualValueMatchers = () => [isEqualValueMatcher, isNotEqualValueMatcher];

 }),

 "./packages/grafana-data/src/transformations/matchers/valueMatchers/nullMatchers.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "a": () => ( getNullValueMatchers)
 });
 var _ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");

const isNullValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_0__ .mE.isNull,
  name: 'Is null',
  description: 'Match where value for given field is null.',
  get: () => {
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex);
      return value == null;
    };
  },
  getOptionsDisplayText: () => {
    return `Matches all rows where field is null.`;
  },
  isApplicable: () => true,
  getDefaultOptions: () => ({})
};
const isNotNullValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_0__ .mE.isNotNull,
  name: 'Is not null',
  description: 'Match where value for given field is not null.',
  get: () => {
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex);
      return value != null;
    };
  },
  getOptionsDisplayText: () => {
    return `Matches all rows where field is not null.`;
  },
  isApplicable: () => true,
  getDefaultOptions: () => ({})
};
const getNullValueMatchers = () => [isNullValueMatcher, isNotNullValueMatcher];

 }),

 "./packages/grafana-data/src/transformations/matchers/valueMatchers/numericMatchers.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "H": () => ( getNumericValueMatchers)
 });
 var _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");


const isGreaterValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mE.greater,
  name: 'Is greater',
  description: 'Match when field value is greater than option.',
  get: options => {
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex);

      if (isNaN(value)) {
        return false;
      }

      return value > options.value;
    };
  },
  getOptionsDisplayText: options => {
    return `Matches all rows where field value is greater than: ${options.value}.`;
  },
  isApplicable: field => field.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.number,
  getDefaultOptions: () => ({
    value: 0
  })
};
const isGreaterOrEqualValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mE.greaterOrEqual,
  name: 'Is greater or equal',
  description: 'Match when field value is greater than or equal to option.',
  get: options => {
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex);

      if (isNaN(value)) {
        return false;
      }

      return value >= options.value;
    };
  },
  getOptionsDisplayText: options => {
    return `Matches all rows where field value is greater than or equal to: ${options.value}.`;
  },
  isApplicable: field => field.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.number,
  getDefaultOptions: () => ({
    value: 0
  })
};
const isLowerValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mE.lower,
  name: 'Is lower',
  description: 'Match when field value is lower than option.',
  get: options => {
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex);

      if (isNaN(value)) {
        return false;
      }

      return value < options.value;
    };
  },
  getOptionsDisplayText: options => {
    return `Matches all rows where field value is lower than: ${options.value}.`;
  },
  isApplicable: field => field.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.number,
  getDefaultOptions: () => ({
    value: 0
  })
};
const isLowerOrEqualValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mE.lowerOrEqual,
  name: 'Is lower or equal',
  description: 'Match when field value is lower or equal than option.',
  get: options => {
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex);

      if (isNaN(value)) {
        return false;
      }

      return value <= options.value;
    };
  },
  getOptionsDisplayText: options => {
    return `Matches all rows where field value is lower or equal than: ${options.value}.`;
  },
  isApplicable: field => field.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.number,
  getDefaultOptions: () => ({
    value: 0
  })
};
const getNumericValueMatchers = () => [isGreaterValueMatcher, isGreaterOrEqualValueMatcher, isLowerValueMatcher, isLowerOrEqualValueMatcher];

 }),

 "./packages/grafana-data/src/transformations/matchers/valueMatchers/rangeMatchers.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "G": () => ( getRangeValueMatchers)
 });
 var _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");


const isBetweenValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .mE.between,
  name: 'Is between',
  description: 'Match when field value is between given option values.',
  get: options => {
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex);

      if (isNaN(value)) {
        return false;
      }

      return value > options.from && value < options.to;
    };
  },
  getOptionsDisplayText: options => {
    return `Matches all rows where field value is between ${options.from} and ${options.to}.`;
  },
  isApplicable: field => field.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_0__ .fS.number,
  getDefaultOptions: () => ({
    from: 0,
    to: 100
  })
};
const getRangeValueMatchers = () => [isBetweenValueMatcher];

 }),

 "./packages/grafana-data/src/transformations/matchers/valueMatchers/regexMatchers.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "G": () => ( getRegexValueMatcher)
 });
 var _ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");

const regexValueMatcher = {
  id: _ids__WEBPACK_IMPORTED_MODULE_0__ .mE.regex,
  name: 'Regex',
  description: 'Match when field value is matching regex.',
  get: options => {
    const regex = new RegExp(options.value);
    return (valueIndex, field) => {
      const value = field.values.get(valueIndex);
      return regex.test(value);
    };
  },
  getOptionsDisplayText: options => {
    return `Matches all rows where field value is matching regex: ${options.value}`;
  },
  isApplicable: () => true,
  getDefaultOptions: () => ({
    value: '.*'
  })
};
const getRegexValueMatcher = () => [regexValueMatcher];

 }),

 "./packages/grafana-data/src/transformations/transformers/ensureColumns.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "W": () => ( ensureColumnsTransformer)
 });
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
 var _dataframe_processDataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");
 var _seriesToColumns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/seriesToColumns.ts");




const ensureColumnsTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .W.ensureColumns,
  name: 'Ensure Columns Transformer',
  description: 'Will check if current data frames is series or columns. If in series it will convert to columns.',
  operator: options => source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ .U)(data => ensureColumnsTransformer.transformer(options)(data))),
  transformer: options => frames => {
    const timeFieldName = findConsistentTimeFieldName(frames);

    if (frames.length > 1 && timeFieldName) {
      return _seriesToColumns__WEBPACK_IMPORTED_MODULE_2__ .u.transformer({
        byField: timeFieldName
      })(frames);
    }

    return frames;
  }
};

function findConsistentTimeFieldName(data) {
  let name = undefined;

  for (const frame of data) {
    const {
      timeField
    } = (0,_dataframe_processDataFrame__WEBPACK_IMPORTED_MODULE_0__ .sV)(frame);

    if (!timeField) {
      return undefined; 
    }

    if (!name) {
      name = timeField.name;
    } else if (name !== timeField.name) {
      return undefined;
    }
  }

  return name;
}

 }),

 "./packages/grafana-data/src/transformations/transformers/filter.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "P": () => ( filterFieldsTransformer),
   "u": () => ( filterFramesTransformer)
 });
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
 var _matchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");
 var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/noop.ts");




const filterFieldsTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .W.filterFields,
  name: 'Filter Fields',
  description: 'select a subset of fields',
  defaultOptions: {},

  operator: options => source => {
    if (!options.include && !options.exclude) {
      return source.pipe(_noop__WEBPACK_IMPORTED_MODULE_2__ .d.operator({}));
    }

    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ .U)(data => {
      const include = options.include ? (0,_matchers__WEBPACK_IMPORTED_MODULE_0__ .sq)(options.include) : null;
      const exclude = options.exclude ? (0,_matchers__WEBPACK_IMPORTED_MODULE_0__ .sq)(options.exclude) : null;
      const processed = [];

      for (const series of data) {
        const fields = [];

        for (let i = 0; i < series.fields.length; i++) {
          const field = series.fields[i];

          if (exclude) {
            if (exclude(field, series, data)) {
              continue;
            }

            if (!include) {
              fields.push(field);
            }
          }

          if (include && include(field, series, data)) {
            fields.push(field);
          }
        }

        if (!fields.length) {
          continue;
        }

        const copy = Object.assign({}, series, {
          fields 

        });
        processed.push(copy);
      }

      return processed;
    }));
  }
};
const filterFramesTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .W.filterFrames,
  name: 'Filter Frames',
  description: 'select a subset of frames',
  defaultOptions: {},

  operator: options => source => {
    if (!options.include && !options.exclude) {
      return source.pipe(_noop__WEBPACK_IMPORTED_MODULE_2__ .d.operator({}));
    }

    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ .U)(data => {
      const include = options.include ? (0,_matchers__WEBPACK_IMPORTED_MODULE_0__ .b9)(options.include) : null;
      const exclude = options.exclude ? (0,_matchers__WEBPACK_IMPORTED_MODULE_0__ .b9)(options.exclude) : null;
      const processed = [];

      for (const series of data) {
        if (exclude) {
          if (exclude(series)) {
            continue;
          }

          if (!include) {
            processed.push(series);
          }
        }

        if (include && include(series)) {
          processed.push(series);
        }
      }

      return processed;
    }));
  }
};

 }),

 "./packages/grafana-data/src/transformations/transformers/filterByName.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "w": () => ( filterFieldsByNameTransformer)
 });
 var _matchers_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
 var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/filter.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");



const filterFieldsByNameTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .W.filterFieldsByName,
  name: 'Filter fields by name',
  description: 'select a subset of fields',
  defaultOptions: {},

  operator: options => source => source.pipe(_filter__WEBPACK_IMPORTED_MODULE_1__ .P.operator({
    include: getMatcherConfig(options.include),
    exclude: getMatcherConfig(options.exclude)
  }))
};

const getMatcherConfig = options => {
  if (!options) {
    return undefined;
  }

  const {
    names,
    pattern
  } = options;

  if ((!Array.isArray(names) || names.length === 0) && !pattern) {
    return undefined;
  }

  if (!pattern) {
    return {
      id: _matchers_ids__WEBPACK_IMPORTED_MODULE_0__ .mi.byNames,
      options: {
        names
      }
    };
  }

  if (!Array.isArray(names) || names.length === 0) {
    return {
      id: _matchers_ids__WEBPACK_IMPORTED_MODULE_0__ .mi.byRegexp,
      options: pattern
    };
  }

  return {
    id: _matchers_ids__WEBPACK_IMPORTED_MODULE_0__ .mi.byRegexpOrNames,
    options
  };
};

 }),

 "./packages/grafana-data/src/transformations/transformers/filterByRefId.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "J": () => ( filterFramesByRefIdTransformer)
 });
 var _matchers_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
 var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/filter.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");



const filterFramesByRefIdTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .W.filterByRefId,
  name: 'Filter data by query refId',
  description: 'select a subset of results',
  defaultOptions: {},

  operator: options => source => {
    const filterOptions = {};

    if (options.include) {
      filterOptions.include = {
        id: _matchers_ids__WEBPACK_IMPORTED_MODULE_0__ .E4.byRefId,
        options: options.include
      };
    }

    if (options.exclude) {
      filterOptions.exclude = {
        id: _matchers_ids__WEBPACK_IMPORTED_MODULE_0__ .E4.byRefId,
        options: options.exclude
      };
    }

    return source.pipe(_filter__WEBPACK_IMPORTED_MODULE_1__ .u.operator(filterOptions));
  }
};

 }),

 "./packages/grafana-data/src/transformations/transformers/ids.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "W": () => ( DataTransformerID)
 });
let DataTransformerID;

(function (DataTransformerID) {
  DataTransformerID["append"] = "append";
  DataTransformerID["reduce"] = "reduce";
  DataTransformerID["order"] = "order";
  DataTransformerID["organize"] = "organize";
  DataTransformerID["rename"] = "rename";
  DataTransformerID["calculateField"] = "calculateField";
  DataTransformerID["seriesToColumns"] = "seriesToColumns";
  DataTransformerID["seriesToRows"] = "seriesToRows";
  DataTransformerID["merge"] = "merge";
  DataTransformerID["concatenate"] = "concatenate";
  DataTransformerID["labelsToFields"] = "labelsToFields";
  DataTransformerID["filterFields"] = "filterFields";
  DataTransformerID["filterFieldsByName"] = "filterFieldsByName";
  DataTransformerID["filterFrames"] = "filterFrames";
  DataTransformerID["filterByRefId"] = "filterByRefId";
  DataTransformerID["renameByRegex"] = "renameByRegex";
  DataTransformerID["filterByValue"] = "filterByValue";
  DataTransformerID["noop"] = "noop";
  DataTransformerID["ensureColumns"] = "ensureColumns";
  DataTransformerID["groupBy"] = "groupBy";
  DataTransformerID["sortBy"] = "sortBy";
  DataTransformerID["histogram"] = "histogram";
  DataTransformerID["configFromData"] = "configFromData";
  DataTransformerID["rowsToFields"] = "rowsToFields";
  DataTransformerID["prepareTimeSeries"] = "prepareTimeSeries";
  DataTransformerID["convertFieldType"] = "convertFieldType";
  DataTransformerID["fieldLookup"] = "fieldLookup";
  DataTransformerID["heatmap"] = "heatmap";
  DataTransformerID["spatial"] = "spatial";
  DataTransformerID["extractFields"] = "extractFields";
  DataTransformerID["groupingToMatrix"] = "groupingToMatrix";
})(DataTransformerID || (DataTransformerID = {}));

 }),

 "./packages/grafana-data/src/transformations/transformers/merge.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "R": () => ( mergeTransformer)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
 var _dataframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/index.ts");
 var _vector_ArrayVector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/vector/ArrayVector.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");





const mergeTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_3__ .W.merge,
  name: 'Merge series/tables',
  description: 'Merges multiple series/tables into a single serie/table',
  defaultOptions: {},
  operator: options => source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ .U)(dataFrames => {
    if (!Array.isArray(dataFrames) || dataFrames.length <= 1) {
      return dataFrames;
    }

    const data = dataFrames.filter(frame => frame.fields.length > 0);

    if (data.length === 0) {
      return [dataFrames[0]];
    }

    const fieldNames = new Set();
    const fieldIndexByName = {};
    const fieldNamesForKey = [];
    const dataFrame = new _dataframe__WEBPACK_IMPORTED_MODULE_1__ .vA();

    for (let frameIndex = 0; frameIndex < data.length; frameIndex++) {
      const frame = data[frameIndex];

      for (let fieldIndex = 0; fieldIndex < frame.fields.length; fieldIndex++) {
        const field = frame.fields[fieldIndex];

        if (!fieldNames.has(field.name)) {
          dataFrame.addField(copyFieldStructure(field));
          fieldNames.add(field.name);
        }

        fieldIndexByName[field.name] = fieldIndexByName[field.name] || {};
        fieldIndexByName[field.name][frameIndex] = fieldIndex;

        if (data.length - 1 !== frameIndex) {
          continue;
        }

        if (fieldExistsInAllFrames(fieldIndexByName, field, data)) {
          fieldNamesForKey.push(field.name);
        }
      }
    }

    if (fieldNamesForKey.length === 0) {
      return dataFrames;
    }

    const valuesByKey = {};
    const valuesInOrder = [];
    const keyFactory = createKeyFactory(data, fieldIndexByName, fieldNamesForKey);
    const valueMapper = createValueMapper(data, fieldNames, fieldIndexByName);

    for (let frameIndex = 0; frameIndex < data.length; frameIndex++) {
      const frame = data[frameIndex];

      for (let valueIndex = 0; valueIndex < frame.length; valueIndex++) {
        const key = keyFactory(frameIndex, valueIndex);
        const value = valueMapper(frameIndex, valueIndex);

        if (!Array.isArray(valuesByKey[key])) {
          valuesByKey[key] = [value];
          valuesInOrder.push(createPointer(key, valuesByKey));
          continue;
        }

        let valueWasMerged = false;
        valuesByKey[key] = valuesByKey[key].map(existing => {
          if (!isMergable(existing, value)) {
            return existing;
          }

          valueWasMerged = true;
          return Object.assign({}, existing, value);
        });

        if (!valueWasMerged) {
          valuesByKey[key].push(value);
          valuesInOrder.push(createPointer(key, valuesByKey));
        }
      }
    }

    for (const pointer of valuesInOrder) {
      const value = valuesByKey[pointer.key][pointer.index];

      if (value) {
        dataFrame.add(value);
      }
    }

    return [dataFrame];
  }))
};

const copyFieldStructure = field => {
  return Object.assign({}, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(field, ['values', 'state', 'labels', 'config']), {
    values: new _vector_ArrayVector__WEBPACK_IMPORTED_MODULE_2__ .G(),
    config: Object.assign({}, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(field.config, 'displayName'))
  });
};

const createKeyFactory = (data, fieldPointerByName, keyFieldNames) => {
  const factoryIndex = keyFieldNames.reduce((index, fieldName) => {
    return Object.keys(fieldPointerByName[fieldName]).reduce((index, frameIndex) => {
      index[frameIndex] = index[frameIndex] || [];
      index[frameIndex].push(fieldPointerByName[fieldName][frameIndex]);
      return index;
    }, index);
  }, {});
  return (frameIndex, valueIndex) => {
    return factoryIndex[frameIndex].reduce((key, fieldIndex) => {
      return key + data[frameIndex].fields[fieldIndex].values.get(valueIndex);
    }, '');
  };
};

const createValueMapper = (data, fieldByName, fieldIndexByName) => {
  return (frameIndex, valueIndex) => {
    const value = {};
    const fieldNames = Array.from(fieldByName);

    for (const fieldName of fieldNames) {
      const fieldIndexByFrameIndex = fieldIndexByName[fieldName];

      if (!fieldIndexByFrameIndex) {
        continue;
      }

      const fieldIndex = fieldIndexByFrameIndex[frameIndex];

      if (typeof fieldIndex !== 'number') {
        continue;
      }

      const frame = data[frameIndex];

      if (!frame || !frame.fields) {
        continue;
      }

      const field = frame.fields[fieldIndex];

      if (!field || !field.values) {
        continue;
      }

      value[fieldName] = field.values.get(valueIndex);
    }

    return value;
  };
};

const isMergable = (existing, value) => {
  let mergable = true;

  for (const prop in value) {
    if (typeof existing[prop] === 'undefined') {
      continue;
    }

    if (existing[prop] === null) {
      continue;
    }

    if (existing[prop] !== value[prop]) {
      mergable = false;
      break;
    }
  }

  return mergable;
};

const fieldExistsInAllFrames = (fieldIndexByName, field, data) => {
  return Object.keys(fieldIndexByName[field.name]).length === data.length;
};

const createPointer = (key, valuesByKey) => {
  return {
    key,
    index: valuesByKey[key].length - 1
  };
};

 }),

 "./packages/grafana-data/src/transformations/transformers/noop.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "d": () => ( noopTransformer)
 });
 var _ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");

const noopTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_0__ .W.noop,
  name: 'noop',
  description: 'No-operation transformer',
  defaultOptions: {},

  operator: options => source => source
};

 }),

 "./packages/grafana-data/src/transformations/transformers/organize.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "u": () => ( organizeFieldsTransformer)
 });
 var _filterByName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/filterByName.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");
 var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/order.ts");
 var _rename__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/rename.ts");




const organizeFieldsTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .W.organize,
  name: 'Organize fields by name',
  description: 'Order, filter and rename fields based on configuration given by user',
  defaultOptions: {
    excludeByName: {},
    indexByName: {},
    renameByName: {}
  },

  operator: options => source => source.pipe(_filterByName__WEBPACK_IMPORTED_MODULE_0__ .w.operator({
    exclude: {
      names: mapToExcludeArray(options.excludeByName)
    }
  }), _order__WEBPACK_IMPORTED_MODULE_2__ .t.operator(options), _rename__WEBPACK_IMPORTED_MODULE_3__ .M.operator(options))
};

const mapToExcludeArray = excludeByName => {
  if (!excludeByName) {
    return [];
  }

  return Object.keys(excludeByName).filter(name => excludeByName[name]);
};

 }),

 "./packages/grafana-data/src/transformations/transformers/rename.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "M": () => ( renameFieldsTransformer)
 });
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
 var _field_fieldState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");



const renameFieldsTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_1__ .W.rename,
  name: 'Rename fields by name',
  description: 'Rename fields based on configuration given by user',
  defaultOptions: {
    renameByName: {}
  },

  operator: options => source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ .U)(data => {
    const renamer = createRenamer(options.renameByName);

    if (!Array.isArray(data) || data.length === 0) {
      return data;
    }

    return data.map(frame => Object.assign({}, frame, {
      fields: renamer(frame)
    }));
  }))
};

const createRenamer = renameByName => frame => {
  if (!renameByName || Object.keys(renameByName).length === 0) {
    return frame.fields;
  }

  return frame.fields.map(field => {
    const displayName = (0,_field_fieldState__WEBPACK_IMPORTED_MODULE_0__ .C)(field, frame);
    const renameTo = renameByName[displayName];

    if (typeof renameTo !== 'string' || renameTo.length === 0) {
      return field;
    }

    return Object.assign({}, field, {
      config: Object.assign({}, field.config, {
        displayName: renameTo
      }),
      state: Object.assign({}, field.state, {
        displayName: renameTo
      })
    });
  });
};

 }),

 "./packages/grafana-data/src/transformations/transformers/seriesToColumns.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "u": () => ( seriesToColumnsTransformer)
 });
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
 var _matchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers.ts");
 var _matchers_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/transformations/matchers/ids.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");
 var _joinDataFrames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/joinDataFrames.ts");





const seriesToColumnsTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .W.seriesToColumns,
  name: 'Series as columns',
  description: 'Groups series by field and returns values as columns',
  defaultOptions: {
    byField: undefined 

  },
  operator: options => source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ .U)(data => seriesToColumnsTransformer.transformer(options)(data))),
  transformer: options => {
    let joinBy = undefined;
    return data => {
      if (data.length > 1) {
        if (options.byField && !joinBy) {
          joinBy = _matchers__WEBPACK_IMPORTED_MODULE_0__ .Ls.get(_matchers_ids__WEBPACK_IMPORTED_MODULE_1__ .mi.byName).get(options.byField);
        }

        const joined = (0,_joinDataFrames__WEBPACK_IMPORTED_MODULE_3__ .JP)({
          frames: data,
          joinBy
        });

        if (joined) {
          return [joined];
        }
      }

      return data;
    };
  }
};

 }),

 "./packages/grafana-data/src/transformations/transformers/seriesToRows.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "D": () => ( seriesToRowsTransformer)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
 var _dataframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/dataframe/index.ts");
 var _dataframe_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/dataframe/utils.ts");
 var _field_fieldState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/field/fieldState.ts");
 var _types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
 var _vector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/vector/index.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");








const seriesToRowsTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_6__ .W.seriesToRows,
  name: 'Series to rows',
  description: 'Combines multiple series into a single serie and appends a column with metric name per value.',
  defaultOptions: {},
  operator: options => source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ .U)(data => {
    if (!Array.isArray(data) || data.length <= 1) {
      return data;
    }

    if (!(0,_dataframe_utils__WEBPACK_IMPORTED_MODULE_2__ .hZ)(data)) {
      return data;
    }

    const timeFieldByIndex = {};
    const targetFields = new Set();
    const dataFrame = new _dataframe__WEBPACK_IMPORTED_MODULE_1__ .vA();
    const metricField = {
      name: _types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .rN,
      values: new _vector__WEBPACK_IMPORTED_MODULE_5__ .Gt(),
      config: {},
      type: _types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .fS.string
    };

    for (let frameIndex = 0; frameIndex < data.length; frameIndex++) {
      const frame = data[frameIndex];

      for (let fieldIndex = 0; fieldIndex < frame.fields.length; fieldIndex++) {
        const field = frame.fields[fieldIndex];

        if (field.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .fS.time) {
          timeFieldByIndex[frameIndex] = fieldIndex;

          if (!targetFields.has(_types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .Ls)) {
            dataFrame.addField(copyFieldStructure(field, _types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .Ls));
            dataFrame.addField(metricField);
            targetFields.add(_types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .Ls);
          }

          continue;
        }

        if (!targetFields.has(_types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .M5)) {
          dataFrame.addField(copyFieldStructure(field, _types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .M5));
          targetFields.add(_types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .M5);
        }
      }
    }

    for (let frameIndex = 0; frameIndex < data.length; frameIndex++) {
      const frame = data[frameIndex];

      for (let valueIndex = 0; valueIndex < frame.length; valueIndex++) {
        const timeFieldIndex = timeFieldByIndex[frameIndex];
        const valueFieldIndex = timeFieldIndex === 0 ? 1 : 0;
        dataFrame.add({
          [_types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .Ls]: frame.fields[timeFieldIndex].values.get(valueIndex),
          [_types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .rN]: (0,_field_fieldState__WEBPACK_IMPORTED_MODULE_3__ .n)(frame),
          [_types_dataFrame__WEBPACK_IMPORTED_MODULE_4__ .M5]: frame.fields[valueFieldIndex].values.get(valueIndex)
        });
      }
    }

    return [(0,_dataframe__WEBPACK_IMPORTED_MODULE_1__ .aK)(dataFrame, 0, true)];
  }))
};

const copyFieldStructure = (field, name) => {
  return Object.assign({}, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(field, ['values', 'state', 'labels', 'config', 'name']), {
    name: name,
    values: new _vector__WEBPACK_IMPORTED_MODULE_5__ .Gt(),
    config: Object.assign({}, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(field.config, ['displayName', 'displayNameFromDS']))
  });
};

 }),

 "./packages/grafana-data/src/transformations/transformers/sortBy.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "t": () => ( sortByTransformer)
 });
 var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
 var _dataframe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/dataframe/index.ts");
 var _field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/field/index.ts");
 var _ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/transformations/transformers/ids.ts");




const sortByTransformer = {
  id: _ids__WEBPACK_IMPORTED_MODULE_2__ .W.sortBy,
  name: 'Sort by',
  description: 'Sort fields in a frame',
  defaultOptions: {
    fields: {}
  },

  operator: options => source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ .U)(data => {
    var _options$sort;

    if (!Array.isArray(data) || data.length === 0 || !(options !== null && options !== void 0 && (_options$sort = options.sort) !== null && _options$sort !== void 0 && _options$sort.length)) {
      return data;
    }

    return sortDataFrames(data, options.sort);
  }))
};
function sortDataFrames(data, sort) {
  return data.map(frame => {
    const s = attachFieldIndex(frame, sort);

    if (s.length && s[0].index != null) {
      return (0,_dataframe__WEBPACK_IMPORTED_MODULE_0__ .aK)(frame, s[0].index, s[0].desc);
    }

    return frame;
  });
}

function attachFieldIndex(frame, sort) {
  return sort.map(s => {
    if (s.index != null) {
      return s;
    }

    return Object.assign({}, s, {
      index: frame.fields.findIndex(f => s.field === (0,_field__WEBPACK_IMPORTED_MODULE_1__ .CZ)(f, frame))
    });
  });
}

 }),

 "./packages/grafana-data/src/types/dataFrame.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Ls": () => ( TIME_SERIES_TIME_FIELD_NAME),
   "M5": () => ( TIME_SERIES_VALUE_FIELD_NAME),
   "fS": () => ( FieldType),
   "rN": () => ( TIME_SERIES_METRIC_FIELD_NAME)
 });
let FieldType;

(function (FieldType) {
  FieldType["time"] = "time";
  FieldType["number"] = "number";
  FieldType["string"] = "string";
  FieldType["boolean"] = "boolean";
  FieldType["trace"] = "trace";
  FieldType["geo"] = "geo";
  FieldType["other"] = "other";
})(FieldType || (FieldType = {}));

const TIME_SERIES_VALUE_FIELD_NAME = 'Value';
const TIME_SERIES_TIME_FIELD_NAME = 'Time';
const TIME_SERIES_METRIC_FIELD_NAME = 'Metric';

 }),

 "./packages/grafana-data/src/types/fieldColor.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "R": () => ( FALLBACK_COLOR),
   "S": () => ( FieldColorModeId)
 });
let FieldColorModeId;

(function (FieldColorModeId) {
  FieldColorModeId["Thresholds"] = "thresholds";
  FieldColorModeId["PaletteClassic"] = "palette-classic";
  FieldColorModeId["PaletteSaturated"] = "palette-saturated";
  FieldColorModeId["ContinuousGrYlRd"] = "continuous-GrYlRd";
  FieldColorModeId["Fixed"] = "fixed";
})(FieldColorModeId || (FieldColorModeId = {}));

const FALLBACK_COLOR = 'gray';

 }),

 "./packages/grafana-data/src/types/theme.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Q": () => ( GrafanaThemeType)
 });
let GrafanaThemeType;

(function (GrafanaThemeType) {
  GrafanaThemeType["Light"] = "light";
  GrafanaThemeType["Dark"] = "dark";
})(GrafanaThemeType || (GrafanaThemeType = {}));

 }),

 "./packages/grafana-data/src/types/thresholds.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "H": () => ( ThresholdsMode)
 });
let ThresholdsMode;

(function (ThresholdsMode) {
  ThresholdsMode["Absolute"] = "absolute";
  ThresholdsMode["Percentage"] = "percentage";
})(ThresholdsMode || (ThresholdsMode = {}));

 }),

 "./packages/grafana-data/src/types/valueMapping.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "H": () => ( MappingType),
   "e": () => ( SpecialValueMatch)
 });
let MappingType;

(function (MappingType) {
  MappingType["ValueToText"] = "value";
  MappingType["RangeToText"] = "range";
  MappingType["RegexToText"] = "regex";
  MappingType["SpecialValue"] = "special";
})(MappingType || (MappingType = {}));

let SpecialValueMatch;

(function (SpecialValueMatch) {
  SpecialValueMatch["True"] = "true";
  SpecialValueMatch["False"] = "false";
  SpecialValueMatch["Null"] = "null";
  SpecialValueMatch["NaN"] = "nan";
  SpecialValueMatch["NullAndNaN"] = "null+nan";
  SpecialValueMatch["Empty"] = "empty";
})(SpecialValueMatch || (SpecialValueMatch = {}));

 }),

 "./packages/grafana-data/src/utils/Registry.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "B": () => ( Registry)
 });
 var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Registry {
  constructor(init) {
    this.init = init;

    _defineProperty(this, "ordered", []);

    _defineProperty(this, "byId", new Map());

    _defineProperty(this, "initialized", false);

    _defineProperty(this, "setInit", init => {
      if (this.initialized) {
        throw new Error('Registry already initialized');
      }

      this.init = init;
    });

    this.init = init;
  }

  getIfExists(id) {
    if (!this.initialized) {
      this.initialize();
    }

    if (id) {
      return this.byId.get(id);
    }

    return undefined;
  }

  initialize() {
    if (this.init) {
      for (const ext of this.init()) {
        this.register(ext);
      }
    }

    this.sort();
    this.initialized = true;
  }

  get(id) {
    const v = this.getIfExists(id);

    if (!v) {
      throw new Error(`"${id}" not found in: ${this.list().map(v => v.id)}`);
    }

    return v;
  }

  selectOptions(current, filter) {
    if (!this.initialized) {
      this.initialize();
    }

    const select = {
      options: [],
      current: []
    };
    const currentOptions = {};

    if (current) {
      for (const id of current) {
        currentOptions[id] = {};
      }
    }

    for (const ext of this.ordered) {
      if (ext.excludeFromPicker) {
        continue;
      }

      if (filter && !filter(ext)) {
        continue;
      }

      const option = {
        value: ext.id,
        label: ext.name,
        description: ext.description
      };

      if (ext.state === _types__WEBPACK_IMPORTED_MODULE_0__ .BV.alpha) {
        option.label += ' (alpha)';
      }

      select.options.push(option);

      if (currentOptions[ext.id]) {
        currentOptions[ext.id] = option;
      }
    }

    if (current) {
      select.current = Object.values(currentOptions);
    }

    return select;
  }


  list(ids) {
    if (!this.initialized) {
      this.initialize();
    }

    if (ids) {
      const found = [];

      for (const id of ids) {
        const v = this.getIfExists(id);

        if (v) {
          found.push(v);
        }
      }

      return found;
    }

    return this.ordered;
  }

  isEmpty() {
    if (!this.initialized) {
      this.initialize();
    }

    return this.ordered.length === 0;
  }

  register(ext) {
    if (this.byId.has(ext.id)) {
      throw new Error('Duplicate Key:' + ext.id);
    }

    this.byId.set(ext.id, ext);
    this.ordered.push(ext);

    if (ext.aliasIds) {
      for (const alias of ext.aliasIds) {
        if (!this.byId.has(alias)) {
          this.byId.set(alias, ext);
        }
      }
    }

    if (this.initialized) {
      this.sort();
    }
  }

  sort() {
  }

}

 }),

 "./packages/grafana-data/src/utils/anyToNumber.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "I": () => ( anyToNumber)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function anyToNumber(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (value === '' || value === null || value === undefined || Array.isArray(value)) {
    return NaN; 
  }

  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.toNumber)(value);
}

 }),

 "./packages/grafana-data/src/utils/binaryOperators.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "L": () => ( BinaryOperationID),
   "n": () => ( binaryOperators)
 });
 var _Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/Registry.ts");

let BinaryOperationID;

(function (BinaryOperationID) {
  BinaryOperationID["Add"] = "+";
  BinaryOperationID["Subtract"] = "-";
  BinaryOperationID["Divide"] = "/";
  BinaryOperationID["Multiply"] = "*";
})(BinaryOperationID || (BinaryOperationID = {}));

const binaryOperators = new _Registry__WEBPACK_IMPORTED_MODULE_0__ .B(() => {
  return [{
    id: BinaryOperationID.Add,
    name: 'Add',
    operation: (a, b) => a + b
  }, {
    id: BinaryOperationID.Subtract,
    name: 'Subtract',
    operation: (a, b) => a - b
  }, {
    id: BinaryOperationID.Multiply,
    name: 'Multiply',
    operation: (a, b) => a * b
  }, {
    id: BinaryOperationID.Divide,
    name: 'Divide',
    operation: (a, b) => a / b
  }];
});

 }),

 "./packages/grafana-data/src/utils/fieldParser.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "d": () => ( makeFieldParser)
 });
 var _dataframe_processDataFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
 var _types_dataFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");


function makeFieldParser(value, field) {
  if (!field.type) {
    if (field.name === 'time' || field.name === 'Time') {
      field.type = _types_dataFrame__WEBPACK_IMPORTED_MODULE_1__ .fS.time;
    } else {
      field.type = (0,_dataframe_processDataFrame__WEBPACK_IMPORTED_MODULE_0__ .LI)(value);
    }
  }

  if (field.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_1__ .fS.number) {
    return value => {
      return parseFloat(value);
    };
  } 


  if (field.type === _types_dataFrame__WEBPACK_IMPORTED_MODULE_1__ .fS.boolean) {
    return value => {
      return !(value[0] === 'F' || value[0] === 'f' || value[0] === '0');
    };
  } 


  return value => value;
}

 }),

 "./packages/grafana-data/src/utils/makeClassES5Compatible.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "s": () => ( makeClassES5Compatible)
 });
function makeClassES5Compatible(ES6Class) {
  return new Proxy(ES6Class, {
    apply(target, self, argumentsList) {
      if (typeof Reflect === 'undefined' || !Reflect.construct) {
        alert('Browser is too old');
      }

      return Reflect.construct(target, argumentsList, self.constructor);
    }

  });
}

 }),

 "./packages/grafana-data/src/valueFormats/categories.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "C": () => ( getCategories)
});

var valueFormats = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
;

function toPercent(size, decimals) {
  if (size === null) {
    return {
      text: ''
    };
  }

  return {
    text: (0,valueFormats.FH)(size, decimals),
    suffix: '%'
  };
}
function toPercentUnit(size, decimals) {
  if (size === null) {
    return {
      text: ''
    };
  }

  return {
    text: (0,valueFormats.FH)(100 * size, decimals),
    suffix: '%'
  };
}
function toHex0x(value, decimals) {
  if (value == null) {
    return {
      text: ''
    };
  }

  const asHex = toHex(value, decimals);

  if (asHex.text.substring(0, 1) === '-') {
    asHex.text = '-0x' + asHex.text.substring(1);
  } else {
    asHex.text = '0x' + asHex.text;
  }

  return asHex;
}
function toHex(value, decimals) {
  if (value == null) {
    return {
      text: ''
    };
  }

  return {
    text: parseFloat((0,valueFormats.FH)(value, decimals)).toString(16).toUpperCase()
  };
}
function sci(value, decimals) {
  if (value == null) {
    return {
      text: ''
    };
  }

  return {
    text: value.toExponential(decimals)
  };
}
var dateTimeFormatters = __webpack_require__("./packages/grafana-data/src/valueFormats/dateTimeFormatters.ts");
var symbolFormatters = __webpack_require__("./packages/grafana-data/src/valueFormats/symbolFormatters.ts");
;




const getCategories = () => [{
  name: 'Misc',
  formats: [{
    name: 'Number',
    id: 'none',
    fn: (0,valueFormats.q2)('')
  }, {
    name: 'String',
    id: 'string',
    fn: valueFormats.vb
  }, {
    name: 'short',
    id: 'short',
    fn: (0,valueFormats.Qj)(1000, ['', ' K', ' Mil', ' Bil', ' Tri', ' Quadr', ' Quint', ' Sext', ' Sept'])
  }, {
    name: 'Percent (0-100)',
    id: 'percent',
    fn: toPercent
  }, {
    name: 'Percent (0.0-1.0)',
    id: 'percentunit',
    fn: toPercentUnit
  }, {
    name: 'Humidity (%H)',
    id: 'humidity',
    fn: (0,valueFormats.q2)('%H')
  }, {
    name: 'Decibel',
    id: 'dB',
    fn: (0,valueFormats.q2)('dB')
  }, {
    name: 'Hexadecimal (0x)',
    id: 'hex0x',
    fn: toHex0x
  }, {
    name: 'Hexadecimal',
    id: 'hex',
    fn: toHex
  }, {
    name: 'Scientific notation',
    id: 'sci',
    fn: sci
  }, {
    name: 'Locale format',
    id: 'locale',
    fn: valueFormats.SP
  }, {
    name: 'Pixels',
    id: 'pixel',
    fn: (0,valueFormats.q2)('px')
  }]
}, {
  name: 'Acceleration',
  formats: [{
    name: 'Meters/sec²',
    id: 'accMS2',
    fn: (0,valueFormats.q2)('m/sec²')
  }, {
    name: 'Feet/sec²',
    id: 'accFS2',
    fn: (0,valueFormats.q2)('f/sec²')
  }, {
    name: 'G unit',
    id: 'accG',
    fn: (0,valueFormats.q2)('g')
  }]
}, {
  name: 'Angle',
  formats: [{
    name: 'Degrees (°)',
    id: 'degree',
    fn: (0,valueFormats.q2)('°')
  }, {
    name: 'Radians',
    id: 'radian',
    fn: (0,valueFormats.q2)('rad')
  }, {
    name: 'Gradian',
    id: 'grad',
    fn: (0,valueFormats.q2)('grad')
  }, {
    name: 'Arc Minutes',
    id: 'arcmin',
    fn: (0,valueFormats.q2)('arcmin')
  }, {
    name: 'Arc Seconds',
    id: 'arcsec',
    fn: (0,valueFormats.q2)('arcsec')
  }]
}, {
  name: 'Area',
  formats: [{
    name: 'Square Meters (m²)',
    id: 'areaM2',
    fn: (0,valueFormats.q2)('m²')
  }, {
    name: 'Square Feet (ft²)',
    id: 'areaF2',
    fn: (0,valueFormats.q2)('ft²')
  }, {
    name: 'Square Miles (mi²)',
    id: 'areaMI2',
    fn: (0,valueFormats.q2)('mi²')
  }]
}, {
  name: 'Computation',
  formats: [{
    name: 'FLOP/s',
    id: 'flops',
    fn: (0,symbolFormatters.i7)('FLOPS')
  }, {
    name: 'MFLOP/s',
    id: 'mflops',
    fn: (0,symbolFormatters.i7)('FLOPS', 2)
  }, {
    name: 'GFLOP/s',
    id: 'gflops',
    fn: (0,symbolFormatters.i7)('FLOPS', 3)
  }, {
    name: 'TFLOP/s',
    id: 'tflops',
    fn: (0,symbolFormatters.i7)('FLOPS', 4)
  }, {
    name: 'PFLOP/s',
    id: 'pflops',
    fn: (0,symbolFormatters.i7)('FLOPS', 5)
  }, {
    name: 'EFLOP/s',
    id: 'eflops',
    fn: (0,symbolFormatters.i7)('FLOPS', 6)
  }, {
    name: 'ZFLOP/s',
    id: 'zflops',
    fn: (0,symbolFormatters.i7)('FLOPS', 7)
  }, {
    name: 'YFLOP/s',
    id: 'yflops',
    fn: (0,symbolFormatters.i7)('FLOPS', 8)
  }]
}, {
  name: 'Concentration',
  formats: [{
    name: 'parts-per-million (ppm)',
    id: 'ppm',
    fn: (0,valueFormats.q2)('ppm')
  }, {
    name: 'parts-per-billion (ppb)',
    id: 'conppb',
    fn: (0,valueFormats.q2)('ppb')
  }, {
    name: 'nanogram per cubic meter (ng/m³)',
    id: 'conngm3',
    fn: (0,valueFormats.q2)('ng/m³')
  }, {
    name: 'nanogram per normal cubic meter (ng/Nm³)',
    id: 'conngNm3',
    fn: (0,valueFormats.q2)('ng/Nm³')
  }, {
    name: 'microgram per cubic meter (μg/m³)',
    id: 'conμgm3',
    fn: (0,valueFormats.q2)('μg/m³')
  }, {
    name: 'microgram per normal cubic meter (μg/Nm³)',
    id: 'conμgNm3',
    fn: (0,valueFormats.q2)('μg/Nm³')
  }, {
    name: 'milligram per cubic meter (mg/m³)',
    id: 'conmgm3',
    fn: (0,valueFormats.q2)('mg/m³')
  }, {
    name: 'milligram per normal cubic meter (mg/Nm³)',
    id: 'conmgNm3',
    fn: (0,valueFormats.q2)('mg/Nm³')
  }, {
    name: 'gram per cubic meter (g/m³)',
    id: 'congm3',
    fn: (0,valueFormats.q2)('g/m³')
  }, {
    name: 'gram per normal cubic meter (g/Nm³)',
    id: 'congNm3',
    fn: (0,valueFormats.q2)('g/Nm³')
  }, {
    name: 'milligrams per decilitre (mg/dL)',
    id: 'conmgdL',
    fn: (0,valueFormats.q2)('mg/dL')
  }, {
    name: 'millimoles per litre (mmol/L)',
    id: 'conmmolL',
    fn: (0,valueFormats.q2)('mmol/L')
  }]
}, {
  name: 'Currency',
  formats: [{
    name: 'Dollars ($)',
    id: 'currencyUSD',
    fn: (0,symbolFormatters.Aq)('$')
  }, {
    name: 'Pounds (£)',
    id: 'currencyGBP',
    fn: (0,symbolFormatters.Aq)('£')
  }, {
    name: 'Euro (€)',
    id: 'currencyEUR',
    fn: (0,symbolFormatters.Aq)('€')
  }, {
    name: 'Yen (¥)',
    id: 'currencyJPY',
    fn: (0,symbolFormatters.Aq)('¥')
  }, {
    name: 'Rubles (₽)',
    id: 'currencyRUB',
    fn: (0,symbolFormatters.Aq)('₽')
  }, {
    name: 'Hryvnias (₴)',
    id: 'currencyUAH',
    fn: (0,symbolFormatters.Aq)('₴')
  }, {
    name: 'Real (R$)',
    id: 'currencyBRL',
    fn: (0,symbolFormatters.Aq)('R$')
  }, {
    name: 'Danish Krone (kr)',
    id: 'currencyDKK',
    fn: (0,symbolFormatters.Aq)('kr', true)
  }, {
    name: 'Icelandic Króna (kr)',
    id: 'currencyISK',
    fn: (0,symbolFormatters.Aq)('kr', true)
  }, {
    name: 'Norwegian Krone (kr)',
    id: 'currencyNOK',
    fn: (0,symbolFormatters.Aq)('kr', true)
  }, {
    name: 'Swedish Krona (kr)',
    id: 'currencySEK',
    fn: (0,symbolFormatters.Aq)('kr', true)
  }, {
    name: 'Czech koruna (czk)',
    id: 'currencyCZK',
    fn: (0,symbolFormatters.Aq)('czk')
  }, {
    name: 'Swiss franc (CHF)',
    id: 'currencyCHF',
    fn: (0,symbolFormatters.Aq)('CHF')
  }, {
    name: 'Polish Złoty (PLN)',
    id: 'currencyPLN',
    fn: (0,symbolFormatters.Aq)('PLN')
  }, {
    name: 'Bitcoin (฿)',
    id: 'currencyBTC',
    fn: (0,symbolFormatters.Aq)('฿')
  }, {
    name: 'Milli Bitcoin (฿)',
    id: 'currencymBTC',
    fn: (0,symbolFormatters.Aq)('mBTC')
  }, {
    name: 'Micro Bitcoin (฿)',
    id: 'currencyμBTC',
    fn: (0,symbolFormatters.Aq)('μBTC')
  }, {
    name: 'South African Rand (R)',
    id: 'currencyZAR',
    fn: (0,symbolFormatters.Aq)('R')
  }, {
    name: 'Indian Rupee (₹)',
    id: 'currencyINR',
    fn: (0,symbolFormatters.Aq)('₹')
  }, {
    name: 'South Korean Won (₩)',
    id: 'currencyKRW',
    fn: (0,symbolFormatters.Aq)('₩')
  }, {
    name: 'Indonesian Rupiah (Rp)',
    id: 'currencyIDR',
    fn: (0,symbolFormatters.Aq)('Rp')
  }, {
    name: 'Philippine Peso (PHP)',
    id: 'currencyPHP',
    fn: (0,symbolFormatters.Aq)('PHP')
  }, {
    name: 'Vietnamese Dong (VND)',
    id: 'currencyVND',
    fn: (0,symbolFormatters.Aq)('đ', true)
  }]
}, {
  name: 'Data',
  formats: [{
    name: 'bytes(IEC)',
    id: 'bytes',
    fn: (0,symbolFormatters.Yh)('B')
  }, {
    name: 'bytes(SI)',
    id: 'decbytes',
    fn: (0,symbolFormatters.i7)('B')
  }, {
    name: 'bits(IEC)',
    id: 'bits',
    fn: (0,symbolFormatters.Yh)('b')
  }, {
    name: 'bits(SI)',
    id: 'decbits',
    fn: (0,symbolFormatters.i7)('b')
  }, {
    name: 'kibibytes',
    id: 'kbytes',
    fn: (0,symbolFormatters.Yh)('B', 1)
  }, {
    name: 'kilobytes',
    id: 'deckbytes',
    fn: (0,symbolFormatters.i7)('B', 1)
  }, {
    name: 'mebibytes',
    id: 'mbytes',
    fn: (0,symbolFormatters.Yh)('B', 2)
  }, {
    name: 'megabytes',
    id: 'decmbytes',
    fn: (0,symbolFormatters.i7)('B', 2)
  }, {
    name: 'gibibytes',
    id: 'gbytes',
    fn: (0,symbolFormatters.Yh)('B', 3)
  }, {
    name: 'gigabytes',
    id: 'decgbytes',
    fn: (0,symbolFormatters.i7)('B', 3)
  }, {
    name: 'tebibytes',
    id: 'tbytes',
    fn: (0,symbolFormatters.Yh)('B', 4)
  }, {
    name: 'terabytes',
    id: 'dectbytes',
    fn: (0,symbolFormatters.i7)('B', 4)
  }, {
    name: 'pebibytes',
    id: 'pbytes',
    fn: (0,symbolFormatters.Yh)('B', 5)
  }, {
    name: 'petabytes',
    id: 'decpbytes',
    fn: (0,symbolFormatters.i7)('B', 5)
  }]
}, {
  name: 'Data rate',
  formats: [{
    name: 'packets/sec',
    id: 'pps',
    fn: (0,symbolFormatters.i7)('p/s')
  }, {
    name: 'bytes/sec(IEC)',
    id: 'binBps',
    fn: (0,symbolFormatters.Yh)('B/s')
  }, {
    name: 'bytes/sec(SI)',
    id: 'Bps',
    fn: (0,symbolFormatters.i7)('B/s')
  }, {
    name: 'bits/sec(IEC)',
    id: 'binbps',
    fn: (0,symbolFormatters.Yh)('b/s')
  }, {
    name: 'bits/sec(SI)',
    id: 'bps',
    fn: (0,symbolFormatters.i7)('b/s')
  }, {
    name: 'kibibytes/sec',
    id: 'KiBs',
    fn: (0,symbolFormatters.Yh)('B/s', 1)
  }, {
    name: 'kibibits/sec',
    id: 'Kibits',
    fn: (0,symbolFormatters.Yh)('b/s', 1)
  }, {
    name: 'kilobytes/sec',
    id: 'KBs',
    fn: (0,symbolFormatters.i7)('B/s', 1)
  }, {
    name: 'kilobits/sec',
    id: 'Kbits',
    fn: (0,symbolFormatters.i7)('b/s', 1)
  }, {
    name: 'mebibytes/sec',
    id: 'MiBs',
    fn: (0,symbolFormatters.Yh)('B/s', 2)
  }, {
    name: 'mebibits/sec',
    id: 'Mibits',
    fn: (0,symbolFormatters.Yh)('b/s', 2)
  }, {
    name: 'megabytes/sec',
    id: 'MBs',
    fn: (0,symbolFormatters.i7)('B/s', 2)
  }, {
    name: 'megabits/sec',
    id: 'Mbits',
    fn: (0,symbolFormatters.i7)('b/s', 2)
  }, {
    name: 'gibibytes/sec',
    id: 'GiBs',
    fn: (0,symbolFormatters.Yh)('B/s', 3)
  }, {
    name: 'gibibits/sec',
    id: 'Gibits',
    fn: (0,symbolFormatters.Yh)('b/s', 3)
  }, {
    name: 'gigabytes/sec',
    id: 'GBs',
    fn: (0,symbolFormatters.i7)('B/s', 3)
  }, {
    name: 'gigabits/sec',
    id: 'Gbits',
    fn: (0,symbolFormatters.i7)('b/s', 3)
  }, {
    name: 'tebibytes/sec',
    id: 'TiBs',
    fn: (0,symbolFormatters.Yh)('B/s', 4)
  }, {
    name: 'tebibits/sec',
    id: 'Tibits',
    fn: (0,symbolFormatters.Yh)('b/s', 4)
  }, {
    name: 'terabytes/sec',
    id: 'TBs',
    fn: (0,symbolFormatters.i7)('B/s', 4)
  }, {
    name: 'terabits/sec',
    id: 'Tbits',
    fn: (0,symbolFormatters.i7)('b/s', 4)
  }, {
    name: 'pebibytes/sec',
    id: 'PiBs',
    fn: (0,symbolFormatters.Yh)('B/s', 5)
  }, {
    name: 'pebibits/sec',
    id: 'Pibits',
    fn: (0,symbolFormatters.Yh)('b/s', 5)
  }, {
    name: 'petabytes/sec',
    id: 'PBs',
    fn: (0,symbolFormatters.i7)('B/s', 5)
  }, {
    name: 'petabits/sec',
    id: 'Pbits',
    fn: (0,symbolFormatters.i7)('b/s', 5)
  }]
}, {
  name: 'Date & time',
  formats: [{
    name: 'Datetime ISO',
    id: 'dateTimeAsIso',
    fn: dateTimeFormatters.Qm
  }, {
    name: 'Datetime ISO (No date if today)',
    id: 'dateTimeAsIsoNoDateIfToday',
    fn: dateTimeFormatters.QO
  }, {
    name: 'Datetime US',
    id: 'dateTimeAsUS',
    fn: dateTimeFormatters.DW
  }, {
    name: 'Datetime US (No date if today)',
    id: 'dateTimeAsUSNoDateIfToday',
    fn: dateTimeFormatters.y
  }, {
    name: 'Datetime local',
    id: 'dateTimeAsLocal',
    fn: (0,dateTimeFormatters.VS)()
  }, {
    name: 'Datetime local (No date if today)',
    id: 'dateTimeAsLocalNoDateIfToday',
    fn: (0,dateTimeFormatters.rV)()
  }, {
    name: 'Datetime default',
    id: 'dateTimeAsSystem',
    fn: dateTimeFormatters.Hr
  }, {
    name: 'From Now',
    id: 'dateTimeFromNow',
    fn: dateTimeFormatters.Xg
  }]
}, {
  name: 'Energy',
  formats: [{
    name: 'Watt (W)',
    id: 'watt',
    fn: (0,symbolFormatters.i7)('W')
  }, {
    name: 'Kilowatt (kW)',
    id: 'kwatt',
    fn: (0,symbolFormatters.i7)('W', 1)
  }, {
    name: 'Megawatt (MW)',
    id: 'megwatt',
    fn: (0,symbolFormatters.i7)('W', 2)
  }, {
    name: 'Gigawatt (GW)',
    id: 'gwatt',
    fn: (0,symbolFormatters.i7)('W', 3)
  }, {
    name: 'Milliwatt (mW)',
    id: 'mwatt',
    fn: (0,symbolFormatters.i7)('W', -1)
  }, {
    name: 'Watt per square meter (W/m²)',
    id: 'Wm2',
    fn: (0,valueFormats.q2)('W/m²')
  }, {
    name: 'Volt-Ampere (VA)',
    id: 'voltamp',
    fn: (0,symbolFormatters.i7)('VA')
  }, {
    name: 'Kilovolt-Ampere (kVA)',
    id: 'kvoltamp',
    fn: (0,symbolFormatters.i7)('VA', 1)
  }, {
    name: 'Volt-Ampere reactive (VAr)',
    id: 'voltampreact',
    fn: (0,symbolFormatters.i7)('VAr')
  }, {
    name: 'Kilovolt-Ampere reactive (kVAr)',
    id: 'kvoltampreact',
    fn: (0,symbolFormatters.i7)('VAr', 1)
  }, {
    name: 'Watt-hour (Wh)',
    id: 'watth',
    fn: (0,symbolFormatters.i7)('Wh')
  }, {
    name: 'Watt-hour per Kilogram (Wh/kg)',
    id: 'watthperkg',
    fn: (0,symbolFormatters.i7)('Wh/kg')
  }, {
    name: 'Kilowatt-hour (kWh)',
    id: 'kwatth',
    fn: (0,symbolFormatters.i7)('Wh', 1)
  }, {
    name: 'Kilowatt-min (kWm)',
    id: 'kwattm',
    fn: (0,symbolFormatters.i7)('W-Min', 1)
  }, {
    name: 'Ampere-hour (Ah)',
    id: 'amph',
    fn: (0,symbolFormatters.i7)('Ah')
  }, {
    name: 'Kiloampere-hour (kAh)',
    id: 'kamph',
    fn: (0,symbolFormatters.i7)('Ah', 1)
  }, {
    name: 'Milliampere-hour (mAh)',
    id: 'mamph',
    fn: (0,symbolFormatters.i7)('Ah', -1)
  }, {
    name: 'Joule (J)',
    id: 'joule',
    fn: (0,symbolFormatters.i7)('J')
  }, {
    name: 'Electron volt (eV)',
    id: 'ev',
    fn: (0,symbolFormatters.i7)('eV')
  }, {
    name: 'Ampere (A)',
    id: 'amp',
    fn: (0,symbolFormatters.i7)('A')
  }, {
    name: 'Kiloampere (kA)',
    id: 'kamp',
    fn: (0,symbolFormatters.i7)('A', 1)
  }, {
    name: 'Milliampere (mA)',
    id: 'mamp',
    fn: (0,symbolFormatters.i7)('A', -1)
  }, {
    name: 'Volt (V)',
    id: 'volt',
    fn: (0,symbolFormatters.i7)('V')
  }, {
    name: 'Kilovolt (kV)',
    id: 'kvolt',
    fn: (0,symbolFormatters.i7)('V', 1)
  }, {
    name: 'Millivolt (mV)',
    id: 'mvolt',
    fn: (0,symbolFormatters.i7)('V', -1)
  }, {
    name: 'Decibel-milliwatt (dBm)',
    id: 'dBm',
    fn: (0,symbolFormatters.i7)('dBm')
  }, {
    name: 'Ohm (Ω)',
    id: 'ohm',
    fn: (0,symbolFormatters.i7)('Ω')
  }, {
    name: 'Kiloohm (kΩ)',
    id: 'kohm',
    fn: (0,symbolFormatters.i7)('Ω', 1)
  }, {
    name: 'Megaohm (MΩ)',
    id: 'Mohm',
    fn: (0,symbolFormatters.i7)('Ω', 2)
  }, {
    name: 'Farad (F)',
    id: 'farad',
    fn: (0,symbolFormatters.i7)('F')
  }, {
    name: 'Microfarad (µF)',
    id: 'µfarad',
    fn: (0,symbolFormatters.i7)('F', -2)
  }, {
    name: 'Nanofarad (nF)',
    id: 'nfarad',
    fn: (0,symbolFormatters.i7)('F', -3)
  }, {
    name: 'Picofarad (pF)',
    id: 'pfarad',
    fn: (0,symbolFormatters.i7)('F', -4)
  }, {
    name: 'Femtofarad (fF)',
    id: 'ffarad',
    fn: (0,symbolFormatters.i7)('F', -5)
  }, {
    name: 'Henry (H)',
    id: 'henry',
    fn: (0,symbolFormatters.i7)('H')
  }, {
    name: 'Millihenry (mH)',
    id: 'mhenry',
    fn: (0,symbolFormatters.i7)('H', -1)
  }, {
    name: 'Microhenry (µH)',
    id: 'µhenry',
    fn: (0,symbolFormatters.i7)('H', -2)
  }, {
    name: 'Lumens (Lm)',
    id: 'lumens',
    fn: (0,symbolFormatters.i7)('Lm')
  }]
}, {
  name: 'Flow',
  formats: [{
    name: 'Gallons/min (gpm)',
    id: 'flowgpm',
    fn: (0,valueFormats.q2)('gpm')
  }, {
    name: 'Cubic meters/sec (cms)',
    id: 'flowcms',
    fn: (0,valueFormats.q2)('cms')
  }, {
    name: 'Cubic feet/sec (cfs)',
    id: 'flowcfs',
    fn: (0,valueFormats.q2)('cfs')
  }, {
    name: 'Cubic feet/min (cfm)',
    id: 'flowcfm',
    fn: (0,valueFormats.q2)('cfm')
  }, {
    name: 'Litre/hour',
    id: 'litreh',
    fn: (0,valueFormats.q2)('L/h')
  }, {
    name: 'Litre/min (L/min)',
    id: 'flowlpm',
    fn: (0,valueFormats.q2)('L/min')
  }, {
    name: 'milliLitre/min (mL/min)',
    id: 'flowmlpm',
    fn: (0,valueFormats.q2)('mL/min')
  }, {
    name: 'Lux (lx)',
    id: 'lux',
    fn: (0,valueFormats.q2)('lux')
  }]
}, {
  name: 'Force',
  formats: [{
    name: 'Newton-meters (Nm)',
    id: 'forceNm',
    fn: (0,symbolFormatters.i7)('Nm')
  }, {
    name: 'Kilonewton-meters (kNm)',
    id: 'forcekNm',
    fn: (0,symbolFormatters.i7)('Nm', 1)
  }, {
    name: 'Newtons (N)',
    id: 'forceN',
    fn: (0,symbolFormatters.i7)('N')
  }, {
    name: 'Kilonewtons (kN)',
    id: 'forcekN',
    fn: (0,symbolFormatters.i7)('N', 1)
  }]
}, {
  name: 'Hash rate',
  formats: [{
    name: 'hashes/sec',
    id: 'Hs',
    fn: (0,symbolFormatters.i7)('H/s')
  }, {
    name: 'kilohashes/sec',
    id: 'KHs',
    fn: (0,symbolFormatters.i7)('H/s', 1)
  }, {
    name: 'megahashes/sec',
    id: 'MHs',
    fn: (0,symbolFormatters.i7)('H/s', 2)
  }, {
    name: 'gigahashes/sec',
    id: 'GHs',
    fn: (0,symbolFormatters.i7)('H/s', 3)
  }, {
    name: 'terahashes/sec',
    id: 'THs',
    fn: (0,symbolFormatters.i7)('H/s', 4)
  }, {
    name: 'petahashes/sec',
    id: 'PHs',
    fn: (0,symbolFormatters.i7)('H/s', 5)
  }, {
    name: 'exahashes/sec',
    id: 'EHs',
    fn: (0,symbolFormatters.i7)('H/s', 6)
  }]
}, {
  name: 'Mass',
  formats: [{
    name: 'milligram (mg)',
    id: 'massmg',
    fn: (0,symbolFormatters.i7)('g', -1)
  }, {
    name: 'gram (g)',
    id: 'massg',
    fn: (0,symbolFormatters.i7)('g')
  }, {
    name: 'pound (lb)',
    id: 'masslb',
    fn: (0,valueFormats.q2)('lb')
  }, {
    name: 'kilogram (kg)',
    id: 'masskg',
    fn: (0,symbolFormatters.i7)('g', 1)
  }, {
    name: 'metric ton (t)',
    id: 'masst',
    fn: (0,valueFormats.q2)('t')
  }]
}, {
  name: 'Length',
  formats: [{
    name: 'millimeter (mm)',
    id: 'lengthmm',
    fn: (0,symbolFormatters.i7)('m', -1)
  }, {
    name: 'inch (in)',
    id: 'lengthin',
    fn: (0,valueFormats.q2)('in')
  }, {
    name: 'feet (ft)',
    id: 'lengthft',
    fn: (0,valueFormats.q2)('ft')
  }, {
    name: 'meter (m)',
    id: 'lengthm',
    fn: (0,symbolFormatters.i7)('m')
  }, {
    name: 'kilometer (km)',
    id: 'lengthkm',
    fn: (0,symbolFormatters.i7)('m', 1)
  }, {
    name: 'mile (mi)',
    id: 'lengthmi',
    fn: (0,valueFormats.q2)('mi')
  }]
}, {
  name: 'Pressure',
  formats: [{
    name: 'Millibars',
    id: 'pressurembar',
    fn: (0,symbolFormatters.i7)('bar', -1)
  }, {
    name: 'Bars',
    id: 'pressurebar',
    fn: (0,symbolFormatters.i7)('bar')
  }, {
    name: 'Kilobars',
    id: 'pressurekbar',
    fn: (0,symbolFormatters.i7)('bar', 1)
  }, {
    name: 'Pascals',
    id: 'pressurepa',
    fn: (0,symbolFormatters.i7)('Pa')
  }, {
    name: 'Hectopascals',
    id: 'pressurehpa',
    fn: (0,valueFormats.q2)('hPa')
  }, {
    name: 'Kilopascals',
    id: 'pressurekpa',
    fn: (0,valueFormats.q2)('kPa')
  }, {
    name: 'Inches of mercury',
    id: 'pressurehg',
    fn: (0,valueFormats.q2)('"Hg')
  }, {
    name: 'PSI',
    id: 'pressurepsi',
    fn: (0,valueFormats.Qj)(1000, ['psi', 'ksi', 'Mpsi'])
  }]
}, {
  name: 'Radiation',
  formats: [{
    name: 'Becquerel (Bq)',
    id: 'radbq',
    fn: (0,symbolFormatters.i7)('Bq')
  }, {
    name: 'curie (Ci)',
    id: 'radci',
    fn: (0,symbolFormatters.i7)('Ci')
  }, {
    name: 'Gray (Gy)',
    id: 'radgy',
    fn: (0,symbolFormatters.i7)('Gy')
  }, {
    name: 'rad',
    id: 'radrad',
    fn: (0,symbolFormatters.i7)('rad')
  }, {
    name: 'Sievert (Sv)',
    id: 'radsv',
    fn: (0,symbolFormatters.i7)('Sv')
  }, {
    name: 'milliSievert (mSv)',
    id: 'radmsv',
    fn: (0,symbolFormatters.i7)('Sv', -1)
  }, {
    name: 'microSievert (µSv)',
    id: 'radusv',
    fn: (0,symbolFormatters.i7)('Sv', -2)
  }, {
    name: 'rem',
    id: 'radrem',
    fn: (0,symbolFormatters.i7)('rem')
  }, {
    name: 'Exposure (C/kg)',
    id: 'radexpckg',
    fn: (0,symbolFormatters.i7)('C/kg')
  }, {
    name: 'roentgen (R)',
    id: 'radr',
    fn: (0,symbolFormatters.i7)('R')
  }, {
    name: 'Sievert/hour (Sv/h)',
    id: 'radsvh',
    fn: (0,symbolFormatters.i7)('Sv/h')
  }, {
    name: 'milliSievert/hour (mSv/h)',
    id: 'radmsvh',
    fn: (0,symbolFormatters.i7)('Sv/h', -1)
  }, {
    name: 'microSievert/hour (µSv/h)',
    id: 'radusvh',
    fn: (0,symbolFormatters.i7)('Sv/h', -2)
  }]
}, {
  name: 'Rotational Speed',
  formats: [{
    name: 'Revolutions per minute (rpm)',
    id: 'rotrpm',
    fn: (0,valueFormats.q2)('rpm')
  }, {
    name: 'Hertz (Hz)',
    id: 'rothz',
    fn: (0,symbolFormatters.i7)('Hz')
  }, {
    name: 'Radians per second (rad/s)',
    id: 'rotrads',
    fn: (0,valueFormats.q2)('rad/s')
  }, {
    name: 'Degrees per second (°/s)',
    id: 'rotdegs',
    fn: (0,valueFormats.q2)('°/s')
  }]
}, {
  name: 'Temperature',
  formats: [{
    name: 'Celsius (°C)',
    id: 'celsius',
    fn: (0,valueFormats.q2)('°C')
  }, {
    name: 'Fahrenheit (°F)',
    id: 'fahrenheit',
    fn: (0,valueFormats.q2)('°F')
  }, {
    name: 'Kelvin (K)',
    id: 'kelvin',
    fn: (0,valueFormats.q2)('K')
  }]
}, {
  name: 'Time',
  formats: [{
    name: 'Hertz (1/s)',
    id: 'hertz',
    fn: (0,symbolFormatters.i7)('Hz')
  }, {
    name: 'nanoseconds (ns)',
    id: 'ns',
    fn: dateTimeFormatters.wf
  }, {
    name: 'microseconds (µs)',
    id: 'µs',
    fn: dateTimeFormatters.dJ
  }, {
    name: 'milliseconds (ms)',
    id: 'ms',
    fn: dateTimeFormatters.Gz
  }, {
    name: 'seconds (s)',
    id: 's',
    fn: dateTimeFormatters.my
  }, {
    name: 'minutes (m)',
    id: 'm',
    fn: dateTimeFormatters.xM
  }, {
    name: 'hours (h)',
    id: 'h',
    fn: dateTimeFormatters.bT
  }, {
    name: 'days (d)',
    id: 'd',
    fn: dateTimeFormatters.rP
  }, {
    name: 'duration (ms)',
    id: 'dtdurationms',
    fn: dateTimeFormatters.zp
  }, {
    name: 'duration (s)',
    id: 'dtdurations',
    fn: dateTimeFormatters.Xq
  }, {
    name: 'duration (hh:mm:ss)',
    id: 'dthms',
    fn: dateTimeFormatters.FH
  }, {
    name: 'duration (d hh:mm:ss)',
    id: 'dtdhms',
    fn: dateTimeFormatters.DT
  }, {
    name: 'Timeticks (s/100)',
    id: 'timeticks',
    fn: dateTimeFormatters.sD
  }, {
    name: 'clock (ms)',
    id: 'clockms',
    fn: dateTimeFormatters.rd
  }, {
    name: 'clock (s)',
    id: 'clocks',
    fn: dateTimeFormatters.gh
  }]
}, {
  name: 'Throughput',
  formats: [{
    name: 'counts/sec (cps)',
    id: 'cps',
    fn: (0,valueFormats.SR)('c/s')
  }, {
    name: 'ops/sec (ops)',
    id: 'ops',
    fn: (0,valueFormats.SR)('ops/s')
  }, {
    name: 'requests/sec (rps)',
    id: 'reqps',
    fn: (0,valueFormats.SR)('req/s')
  }, {
    name: 'reads/sec (rps)',
    id: 'rps',
    fn: (0,valueFormats.SR)('rd/s')
  }, {
    name: 'writes/sec (wps)',
    id: 'wps',
    fn: (0,valueFormats.SR)('wr/s')
  }, {
    name: 'I/O ops/sec (iops)',
    id: 'iops',
    fn: (0,valueFormats.SR)('io/s')
  }, {
    name: 'counts/min (cpm)',
    id: 'cpm',
    fn: (0,valueFormats.SR)('c/m')
  }, {
    name: 'ops/min (opm)',
    id: 'opm',
    fn: (0,valueFormats.SR)('ops/m')
  }, {
    name: 'reads/min (rpm)',
    id: 'rpm',
    fn: (0,valueFormats.SR)('rd/m')
  }, {
    name: 'writes/min (wpm)',
    id: 'wpm',
    fn: (0,valueFormats.SR)('wr/m')
  }]
}, {
  name: 'Velocity',
  formats: [{
    name: 'meters/second (m/s)',
    id: 'velocityms',
    fn: (0,valueFormats.q2)('m/s')
  }, {
    name: 'kilometers/hour (km/h)',
    id: 'velocitykmh',
    fn: (0,valueFormats.q2)('km/h')
  }, {
    name: 'miles/hour (mph)',
    id: 'velocitymph',
    fn: (0,valueFormats.q2)('mph')
  }, {
    name: 'knot (kn)',
    id: 'velocityknot',
    fn: (0,valueFormats.q2)('kn')
  }]
}, {
  name: 'Volume',
  formats: [{
    name: 'millilitre (mL)',
    id: 'mlitre',
    fn: (0,symbolFormatters.i7)('L', -1)
  }, {
    name: 'litre (L)',
    id: 'litre',
    fn: (0,symbolFormatters.i7)('L')
  }, {
    name: 'cubic meter',
    id: 'm3',
    fn: (0,valueFormats.q2)('m³')
  }, {
    name: 'Normal cubic meter',
    id: 'Nm3',
    fn: (0,valueFormats.q2)('Nm³')
  }, {
    name: 'cubic decimeter',
    id: 'dm3',
    fn: (0,valueFormats.q2)('dm³')
  }, {
    name: 'gallons',
    id: 'gallons',
    fn: (0,valueFormats.q2)('gal')
  }]
}, {
  name: 'Boolean',
  formats: [{
    name: 'True / False',
    id: 'bool',
    fn: (0,valueFormats.IR)('True', 'False')
  }, {
    name: 'Yes / No',
    id: 'bool_yes_no',
    fn: (0,valueFormats.IR)('Yes', 'No')
  }, {
    name: 'On / Off',
    id: 'bool_on_off',
    fn: (0,valueFormats.IR)('On', 'Off')
  }]
}];

 }),

 "./packages/grafana-data/src/valueFormats/dateTimeFormatters.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "DT": () => ( toDurationInDaysHoursMinutesSeconds),
   "DW": () => ( dateTimeAsUS),
   "FH": () => ( toDurationInHoursMinutesSeconds),
   "Gz": () => ( toMilliSeconds),
   "Hr": () => ( dateTimeSystemFormatter),
   "QO": () => ( dateTimeAsIsoNoDateIfToday),
   "Qm": () => ( dateTimeAsIso),
   "VS": () => ( getDateTimeAsLocalFormat),
   "Xg": () => ( dateTimeFromNow),
   "Xq": () => ( toDurationInSeconds),
   "bT": () => ( toHours),
   "cN": () => ( toDateTimeValueFormatter),
   "dJ": () => ( toMicroSeconds),
   "gh": () => ( toClockSeconds),
   "my": () => ( toSeconds),
   "rP": () => ( toDays),
   "rV": () => ( getDateTimeAsLocalFormatNoDateIfToday),
   "rd": () => ( toClockMilliseconds),
   "sD": () => ( toTimeTicks),
   "wf": () => ( toNanoSeconds),
   "xM": () => ( toMinutes),
   "y": () => ( dateTimeAsUSNoDateIfToday),
   "zp": () => ( toDurationInMilliseconds)
 });
 var _datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/datetime/index.ts");
 var _datetime_moment_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
 var _valueFormats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");



let Interval;

(function (Interval) {
  Interval["Year"] = "year";
  Interval["Month"] = "month";
  Interval["Week"] = "week";
  Interval["Day"] = "day";
  Interval["Hour"] = "hour";
  Interval["Minute"] = "minute";
  Interval["Second"] = "second";
  Interval["Millisecond"] = "millisecond";
})(Interval || (Interval = {}));

const UNITS = [Interval.Year, Interval.Month, Interval.Week, Interval.Day, Interval.Hour, Interval.Minute, Interval.Second, Interval.Millisecond];
const INTERVALS_IN_SECONDS = {
  [Interval.Year]: 31536000,
  [Interval.Month]: 2592000,
  [Interval.Week]: 604800,
  [Interval.Day]: 86400,
  [Interval.Hour]: 3600,
  [Interval.Minute]: 60,
  [Interval.Second]: 1,
  [Interval.Millisecond]: 0.001
};
function toNanoSeconds(size, decimals) {
  if (size === null) {
    return {
      text: ''
    };
  }

  if (Math.abs(size) < 1000) {
    return {
      text: (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .FH)(size, decimals),
      suffix: ' ns'
    };
  } else if (Math.abs(size) < 1000000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 1000, decimals, ' µs');
  } else if (Math.abs(size) < 1000000000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 1000000, decimals, ' ms');
  } else if (Math.abs(size) < 60000000000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 1000000000, decimals, ' s');
  } else if (Math.abs(size) < 3600000000000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 60000000000, decimals, ' min');
  } else if (Math.abs(size) < 86400000000000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 3600000000000, decimals, ' hour');
  } else {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 86400000000000, decimals, ' day');
  }
}
function toMicroSeconds(size, decimals) {
  if (size === null) {
    return {
      text: ''
    };
  }

  if (Math.abs(size) < 1000) {
    return {
      text: (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .FH)(size, decimals),
      suffix: ' µs'
    };
  } else if (Math.abs(size) < 1000000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 1000, decimals, ' ms');
  } else {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 1000000, decimals, ' s');
  }
}
function toMilliSeconds(size, decimals, scaledDecimals) {
  if (size === null) {
    return {
      text: ''
    };
  }

  if (Math.abs(size) < 1000) {
    return {
      text: (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .FH)(size, decimals),
      suffix: ' ms'
    };
  } else if (Math.abs(size) < 60000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 1000, decimals, ' s');
  } else if (Math.abs(size) < 3600000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 60000, decimals, ' min');
  } else if (Math.abs(size) < 86400000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 3600000, decimals, ' hour');
  } else if (Math.abs(size) < 31536000000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 86400000, decimals, ' day');
  }

  return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 31536000000, decimals, ' year');
}
function trySubstract(value1, value2) {
  if (value1 !== null && value1 !== undefined && value2 !== null && value2 !== undefined) {
    return value1 - value2;
  }

  return undefined;
}
function toSeconds(size, decimals) {
  if (size === null) {
    return {
      text: ''
    };
  } 


  if (size === 0) {
    return {
      text: '0',
      suffix: ' s'
    };
  } 


  if (Math.abs(size) < 0.000001) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size * 1e9, decimals, ' ns');
  } 


  if (Math.abs(size) < 0.001) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size * 1e6, decimals, ' µs');
  } 


  if (Math.abs(size) < 1) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size * 1e3, decimals, ' ms');
  }

  if (Math.abs(size) < 60) {
    return {
      text: (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .FH)(size, decimals),
      suffix: ' s'
    };
  } else if (Math.abs(size) < 3600) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 60, decimals, ' min');
  } else if (Math.abs(size) < 86400) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 3600, decimals, ' hour');
  } else if (Math.abs(size) < 604800) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 86400, decimals, ' day');
  } else if (Math.abs(size) < 31536000) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 604800, decimals, ' week');
  }

  return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 3.15569e7, decimals, ' year');
}
function toMinutes(size, decimals) {
  if (size === null) {
    return {
      text: ''
    };
  }

  if (Math.abs(size) < 60) {
    return {
      text: (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .FH)(size, decimals),
      suffix: ' min'
    };
  } else if (Math.abs(size) < 1440) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 60, decimals, ' hour');
  } else if (Math.abs(size) < 10080) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 1440, decimals, ' day');
  } else if (Math.abs(size) < 604800) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 10080, decimals, ' week');
  } else {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 5.25948e5, decimals, ' year');
  }
}
function toHours(size, decimals) {
  if (size === null) {
    return {
      text: ''
    };
  }

  if (Math.abs(size) < 24) {
    return {
      text: (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .FH)(size, decimals),
      suffix: ' hour'
    };
  } else if (Math.abs(size) < 168) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 24, decimals, ' day');
  } else if (Math.abs(size) < 8760) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 168, decimals, ' week');
  } else {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 8760, decimals, ' year');
  }
}
function toDays(size, decimals) {
  if (size === null) {
    return {
      text: ''
    };
  }

  if (Math.abs(size) < 7) {
    return {
      text: (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .FH)(size, decimals),
      suffix: ' day'
    };
  } else if (Math.abs(size) < 365) {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 7, decimals, ' week');
  } else {
    return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_2__ .bn)(size / 365, decimals, ' year');
  }
}
function toDuration(size, decimals, timeScale) {
  if (size === null) {
    return {
      text: ''
    };
  }

  if (size === 0) {
    return {
      text: '0',
      suffix: ' ' + timeScale + 's'
    };
  }

  if (size < 0) {
    const v = toDuration(-size, decimals, timeScale);

    if (!v.suffix) {
      v.suffix = '';
    }

    v.suffix += ' ago';
    return v;
  } 


  size *= INTERVALS_IN_SECONDS[timeScale] * 1000;
  const strings = []; 

  let decrementDecimals = false;
  let decimalsCount = 0;

  if (decimals !== null && decimals !== undefined) {
    decimalsCount = decimals;
  }

  for (let i = 0; i < UNITS.length && decimalsCount >= 0; i++) {
    const interval = INTERVALS_IN_SECONDS[UNITS[i]] * 1000;
    const value = size / interval;

    if (value >= 1 || decrementDecimals) {
      decrementDecimals = true;
      const floor = Math.floor(value);
      const unit = UNITS[i] + (floor !== 1 ? 's' : '');
      strings.push(floor + ' ' + unit);
      size = size % interval;
      decimalsCount--;
    }
  }

  return {
    text: strings.join(', ')
  };
}
function toClock(size, decimals) {
  if (size === null) {
    return {
      text: ''
    };
  } 


  if (size < 1000) {
    return {
      text: (0,_datetime_moment_wrapper__WEBPACK_IMPORTED_MODULE_1__ .zh)(size).format('SSS\\m\\s')
    };
  } 


  if (size < 60000) {
    let format = 'ss\\s:SSS\\m\\s';

    if (decimals === 0) {
      format = 'ss\\s';
    }

    return {
      text: (0,_datetime_moment_wrapper__WEBPACK_IMPORTED_MODULE_1__ .zh)(size).format(format)
    };
  } 


  if (size < 3600000) {
    let format = 'mm\\m:ss\\s:SSS\\m\\s';

    if (decimals === 0) {
      format = 'mm\\m';
    } else if (decimals === 1) {
      format = 'mm\\m:ss\\s';
    }

    return {
      text: (0,_datetime_moment_wrapper__WEBPACK_IMPORTED_MODULE_1__ .zh)(size).format(format)
    };
  }

  let format = 'mm\\m:ss\\s:SSS\\m\\s';
  const hours = `${('0' + Math.floor((0,_datetime_moment_wrapper__WEBPACK_IMPORTED_MODULE_1__/* .toDuration */ .Ks)(size, 'milliseconds').asHours())).slice(-2)}h`;

  if (decimals === 0) {
    format = '';
  } else if (decimals === 1) {
    format = 'mm\\m';
  } else if (decimals === 2) {
    format = 'mm\\m:ss\\s';
  }

  const text = format ? `${hours}:${(0,_datetime_moment_wrapper__WEBPACK_IMPORTED_MODULE_1__/* .toUtc */ .zh)(size).format(format)}` : hours;
  return {
    text
  };
}
function toDurationInMilliseconds(size, decimals) {
  return toDuration(size, decimals, Interval.Millisecond);
}
function toDurationInSeconds(size, decimals) {
  return toDuration(size, decimals, Interval.Second);
}
function toDurationInHoursMinutesSeconds(size) {
  if (size < 0) {
    const v = toDurationInHoursMinutesSeconds(-size);

    if (!v.suffix) {
      v.suffix = '';
    }

    v.suffix += ' ago';
    return v;
  }

  const strings = [];
  const numHours = Math.floor(size / 3600);
  const numMinutes = Math.floor(size % 3600 / 60);
  const numSeconds = Math.floor(size % 3600 % 60);
  numHours > 9 ? strings.push('' + numHours) : strings.push('0' + numHours);
  numMinutes > 9 ? strings.push('' + numMinutes) : strings.push('0' + numMinutes);
  numSeconds > 9 ? strings.push('' + numSeconds) : strings.push('0' + numSeconds);
  return {
    text: strings.join(':')
  };
}
function toDurationInDaysHoursMinutesSeconds(size) {
  if (size < 0) {
    const v = toDurationInDaysHoursMinutesSeconds(-size);

    if (!v.suffix) {
      v.suffix = '';
    }

    v.suffix += ' ago';
    return v;
  }

  let dayString = '';
  const numDays = Math.floor(size / (24 * 3600));

  if (numDays > 0) {
    dayString = numDays + ' d ';
  }

  const hmsString = toDurationInHoursMinutesSeconds(size - numDays * 24 * 3600);
  return {
    text: dayString + hmsString.text
  };
}
function toTimeTicks(size, decimals) {
  return toSeconds(size / 100, decimals);
}
function toClockMilliseconds(size, decimals) {
  return toClock(size, decimals);
}
function toClockSeconds(size, decimals) {
  return toClock(size * 1000, decimals);
}
function toDateTimeValueFormatter(pattern, todayPattern) {
  return (value, decimals, scaledDecimals, timeZone) => {
    if (todayPattern) {
      if ((0,_datetime_moment_wrapper__WEBPACK_IMPORTED_MODULE_1__ .CQ)().isSame(value, 'day')) {
        return {
          text: (0,_datetime__WEBPACK_IMPORTED_MODULE_0__ .dq)(value, {
            format: todayPattern,
            timeZone
          })
        };
      }
    }

    return {
      text: (0,_datetime__WEBPACK_IMPORTED_MODULE_0__ .dq)(value, {
        format: pattern,
        timeZone
      })
    };
  };
}
const dateTimeAsIso = toDateTimeValueFormatter('YYYY-MM-DD HH:mm:ss');
const dateTimeAsIsoNoDateIfToday = toDateTimeValueFormatter('YYYY-MM-DD HH:mm:ss', 'HH:mm:ss');
const dateTimeAsUS = toDateTimeValueFormatter('MM/DD/YYYY h:mm:ss a');
const dateTimeAsUSNoDateIfToday = toDateTimeValueFormatter('MM/DD/YYYY h:mm:ss a', 'h:mm:ss a');
function getDateTimeAsLocalFormat() {
  return toDateTimeValueFormatter((0,_datetime__WEBPACK_IMPORTED_MODULE_0__ .Ji)({
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }));
}
function getDateTimeAsLocalFormatNoDateIfToday() {
  return toDateTimeValueFormatter((0,_datetime__WEBPACK_IMPORTED_MODULE_0__ .Ji)({
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }), (0,_datetime__WEBPACK_IMPORTED_MODULE_0__ .Ji)({
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }));
}
function dateTimeSystemFormatter(value, decimals, scaledDecimals, timeZone, showMs) {
  return {
    text: (0,_datetime__WEBPACK_IMPORTED_MODULE_0__ .dq)(value, {
      format: showMs ? _datetime__WEBPACK_IMPORTED_MODULE_0__ .U6.fullDateMS : _datetime__WEBPACK_IMPORTED_MODULE_0__ .U6.fullDate,
      timeZone
    })
  };
}
function dateTimeFromNow(value, decimals, scaledDecimals, timeZone) {
  return {
    text: (0,_datetime__WEBPACK_IMPORTED_MODULE_0__ .E8)(value, {
      timeZone
    })
  };
}

 }),

 "./packages/grafana-data/src/valueFormats/symbolFormatters.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Aq": () => ( currency),
   "Yh": () => ( binaryPrefix),
   "dT": () => ( getOffsetFromSIPrefix),
   "i7": () => ( SIPrefix)
 });
 var _valueFormats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");

function currency(symbol, asSuffix) {
  const units = ['', 'K', 'M', 'B', 'T'];
  const scaler = (0,_valueFormats__WEBPACK_IMPORTED_MODULE_0__ .Qj)(1000, units);
  return (size, decimals, scaledDecimals) => {
    if (size === null) {
      return {
        text: ''
      };
    }

    const scaled = scaler(size, decimals, scaledDecimals);

    if (asSuffix) {
      scaled.suffix = scaled.suffix !== undefined ? `${scaled.suffix}${symbol}` : undefined;
    } else {
      scaled.prefix = symbol;
    }

    return scaled;
  };
}
function getOffsetFromSIPrefix(c) {
  switch (c) {
    case 'f':
      return -5;

    case 'p':
      return -4;

    case 'n':
      return -3;

    case 'μ': 

    case 'µ':
      return -2;

    case 'm':
      return -1;

    case '':
      return 0;

    case 'k':
      return 1;

    case 'M':
      return 2;

    case 'G':
      return 3;

    case 'T':
      return 4;

    case 'P':
      return 5;

    case 'E':
      return 6;

    case 'Z':
      return 7;

    case 'Y':
      return 8;
  }

  return 0;
}
function binaryPrefix(unit) {
  let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const prefixes = ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi', 'Yi'].slice(offset);
  const units = prefixes.map(p => {
    return ' ' + p + unit;
  });
  return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_0__ .Qj)(1024, units);
}
function SIPrefix(unit) {
  let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let prefixes = ['f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  prefixes = prefixes.slice(5 + (offset || 0));
  const units = prefixes.map(p => {
    return ' ' + p + unit;
  });
  return (0,_valueFormats__WEBPACK_IMPORTED_MODULE_0__ .Qj)(1000, units);
}

 }),

 "./packages/grafana-data/src/vector/ArrayVector.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "G": () => ( ArrayVector)
 });
 var _FunctionalVector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/vector/FunctionalVector.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ArrayVector extends _FunctionalVector__WEBPACK_IMPORTED_MODULE_0__ .G {
  constructor(buffer) {
    super();

    _defineProperty(this, "buffer", void 0);

    this.buffer = buffer ? buffer : [];
  }

  get length() {
    return this.buffer.length;
  }

  add(value) {
    this.buffer.push(value);
  }

  get(index) {
    return this.buffer[index];
  }

  set(index, value) {
    this.buffer[index] = value;
  }

  reverse() {
    this.buffer.reverse();
  }

  toArray() {
    return this.buffer;
  }

  toJSON() {
    return this.buffer;
  }

}

 }),

 "./packages/grafana-data/src/vector/AsNumberVector.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "s": () => ( AsNumberVector)
 });
 var _FunctionalVector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/vector/FunctionalVector.ts");


class AsNumberVector extends _FunctionalVector__WEBPACK_IMPORTED_MODULE_0__ .G {
  constructor(field) {
    super();
    this.field = field;
    this.field = field;
  }

  get length() {
    return this.field.length;
  }

  get(index) {
    return +this.field.get(index);
  }

}

 }),

 "./packages/grafana-data/src/vector/BinaryOperationVector.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "r": () => ( BinaryOperationVector)
 });
 var _vectorToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/vector/vectorToArray.ts");


class BinaryOperationVector {
  constructor(left, right, operation) {
    this.left = left;
    this.right = right;
    this.operation = operation;
    this.left = left;
    this.right = right;
    this.operation = operation;
  }

  get length() {
    return this.left.length;
  }

  get(index) {
    return this.operation(this.left.get(index), this.right.get(index));
  }

  toArray() {
    return (0,_vectorToArray__WEBPACK_IMPORTED_MODULE_0__ .n)(this);
  }

  toJSON() {
    return (0,_vectorToArray__WEBPACK_IMPORTED_MODULE_0__ .n)(this);
  }

}

 }),

 "./packages/grafana-data/src/vector/ConstantVector.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "u": () => ( ConstantVector)
 });
class ConstantVector {
  constructor(value, len) {
    this.value = value;
    this.len = len;
    this.value = value;
    this.len = len;
  }

  get length() {
    return this.len;
  }

  get(index) {
    return this.value;
  }

  toArray() {
    const arr = new Array(this.length);
    return arr.fill(this.value);
  }

  toJSON() {
    return this.toArray();
  }

}

 }),

 "./packages/grafana-data/src/vector/RowVector.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "C": () => ( RowVector)
 });
 var _vectorToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/vector/vectorToArray.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class RowVector {
  constructor(columns) {
    this.columns = columns;

    _defineProperty(this, "rowIndex", 0);

    this.columns = columns;
  }

  get length() {
    return this.columns.length;
  }

  get(index) {
    return this.columns[index].get(this.rowIndex);
  }

  toArray() {
    return (0,_vectorToArray__WEBPACK_IMPORTED_MODULE_0__ .n)(this);
  }

  toJSON() {
    return (0,_vectorToArray__WEBPACK_IMPORTED_MODULE_0__ .n)(this);
  }

}

 }),

 "./packages/grafana-data/src/vector/SortedVector.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "o": () => ( SortedVector)
 });
 var _vectorToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/vector/vectorToArray.ts");


class SortedVector {
  constructor(source, order) {
    this.source = source;
    this.order = order;
    this.source = source;
    this.order = order;
  }

  get length() {
    return this.source.length;
  }

  get(index) {
    return this.source.get(this.order[index]);
  }

  toArray() {
    return (0,_vectorToArray__WEBPACK_IMPORTED_MODULE_0__ .n)(this);
  }

  toJSON() {
    return (0,_vectorToArray__WEBPACK_IMPORTED_MODULE_0__ .n)(this);
  }

}

 }),

 "./packages/grafana-data/src/vector/vectorToArray.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "n": () => ( vectorToArray)
 });
function vectorToArray(v) {
  const arr = Array(v.length);

  for (let i = 0; i < v.length; i++) {
    arr[i] = v.get(i);
  }

  return arr;
}

 }),

 "./packages/grafana-runtime/src/utils/toDataQueryError.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "P": () => ( toDataQueryError)
 });
function toDataQueryError(err) {
  const error = err || {};

  if (!error.message) {
    if (typeof err === 'string' || err instanceof String) {
      return {
        message: err
      };
    }

    let message = 'Query error';

    if (error.message) {
      message = error.message;
    } else if (error.data && error.data.message) {
      message = error.data.message;
    } else if (error.data && error.data.error) {
      message = error.data.error;
    } else if (error.status) {
      message = `Query error: ${error.status} ${error.statusText}`;
    }

    error.message = message;
  }

  return error;
}

 }),

 "./public/app/features/live/centrifuge/service.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "R": () => ( CentrifugeService)
});

var centrifuge = __webpack_require__("./.yarn/cache/centrifuge-npm-2.8.4-a3bcc8035d-eb6efe8eb1.zip/node_modules/centrifuge/dist/centrifuge.js");
var centrifuge_default = __webpack_require__.n(centrifuge);
var share = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
var startWith = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/startWith.js");
var BehaviorSubject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var live = __webpack_require__("./packages/grafana-runtime/src/services/live.ts");
var Observable = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");
var ReplaySubject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
var toDataQueryError = __webpack_require__("./packages/grafana-runtime/src/utils/toDataQueryError.ts");
var StreamingDataFrame = __webpack_require__("./public/app/features/live/data/StreamingDataFrame.ts");
var utils = __webpack_require__("./public/app/features/live/data/utils.ts");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const bufferIfNot = canEmitObservable => source => {
  return new Observable.y(subscriber => {
    let buffer = [];
    let canEmit = true;

    const emitBuffer = () => {
      subscriber.next(buffer);
      buffer = [];
    };

    const canEmitSub = canEmitObservable.subscribe({
      next: val => {
        canEmit = val;

        if (canEmit && buffer.length) {
          emitBuffer();
        }
      }
    });
    const sourceSub = source.subscribe({
      next(value) {
        if (canEmit) {
          if (!buffer.length) {
            subscriber.next([value]);
          } else {
            emitBuffer();
          }
        } else {
          buffer.push(value);
        }
      },

      error(error) {
        subscriber.error(error);
      },

      complete() {
        subscriber.complete();
      }

    });
    return () => {
      sourceSub.unsubscribe();
      canEmitSub.unsubscribe();
    };
  });
};

var InternalStreamMessageType;

(function (InternalStreamMessageType) {
  InternalStreamMessageType[InternalStreamMessageType["Error"] = 0] = "Error";
  InternalStreamMessageType[InternalStreamMessageType["NewValuesSameSchema"] = 1] = "NewValuesSameSchema";
  InternalStreamMessageType[InternalStreamMessageType["ChangedSchema"] = 2] = "ChangedSchema";
})(InternalStreamMessageType || (InternalStreamMessageType = {}));

const reduceNewValuesSameSchemaMessages = packets => ({
  values: packets.reduce((acc, _ref) => {
    let {
      values
    } = _ref;

    for (let i = 0; i < values.length; i++) {
      if (!acc[i]) {
        acc[i] = [];
      }

      for (let j = 0; j < values[i].length; j++) {
        acc[i].push(values[i][j]);
      }
    }

    return acc;
  }, []),
  type: InternalStreamMessageType.NewValuesSameSchema
});

const filterMessages = (packets, type) => packets.filter(p => p.type === type);

class LiveDataStream {
  constructor(deps) {
    this.deps = deps;

    _defineProperty(this, "frameBuffer", void 0);

    _defineProperty(this, "liveEventsSubscription", void 0);

    _defineProperty(this, "stream", new ReplaySubject.t(1));

    _defineProperty(this, "shutdownTimeoutId", void 0);

    _defineProperty(this, "shutdown", () => {
      this.stream.complete();
      this.liveEventsSubscription.unsubscribe();
      this.deps.onShutdown();
    });

    _defineProperty(this, "shutdownIfNoSubscribers", () => {
      if (!this.stream.observed) {
        this.shutdown();
      }
    });

    _defineProperty(this, "onError", err => {
      console.log('LiveQuery [error]', {
        err
      }, this.deps.channelId);
      this.stream.next({
        type: InternalStreamMessageType.Error,
        error: (0,toDataQueryError.P)(err)
      });
      this.shutdown();
    });

    _defineProperty(this, "onComplete", () => {
      console.log('LiveQuery [complete]', this.deps.channelId);
      this.shutdown();
    });

    _defineProperty(this, "onNext", evt => {
      if ((0,src.isLiveChannelMessageEvent)(evt)) {
        this.process(evt.message);
        return;
      }

      const liveChannelStatusEvent = (0,src.isLiveChannelStatusEvent)(evt);

      if (liveChannelStatusEvent && evt.error) {
        this.stream.next({
          type: InternalStreamMessageType.Error,
          error: Object.assign({}, (0,toDataQueryError.P)(evt.error), {
            message: `Streaming channel error: ${evt.error.message}`
          })
        });
        return;
      }

      if (liveChannelStatusEvent && (evt.state === src.LiveChannelConnectionState.Connected || evt.state === src.LiveChannelConnectionState.Pending) && evt.message) {
        this.process(evt.message);
      }
    });

    _defineProperty(this, "process", msg => {
      const packetInfo = this.frameBuffer.push(msg);

      if (packetInfo.schemaChanged) {
        this.stream.next({
          type: InternalStreamMessageType.ChangedSchema
        });
      } else {
        this.stream.next({
          type: InternalStreamMessageType.NewValuesSameSchema,
          values: this.frameBuffer.getValuesFromLastPacket()
        });
      }
    });

    _defineProperty(this, "resizeBuffer", bufferOptions => {
      if (bufferOptions && this.frameBuffer.needsResizing(bufferOptions)) {
        this.frameBuffer.resize(bufferOptions);
      }
    });

    _defineProperty(this, "prepareInternalStreamForNewSubscription", options => {
      if (!this.frameBuffer.hasAtLeastOnePacket() && options.frame) {
        this.process(options.frame);
      }
    });

    _defineProperty(this, "clearShutdownTimeout", () => {
      if (this.shutdownTimeoutId) {
        clearTimeout(this.shutdownTimeoutId);
        this.shutdownTimeoutId = undefined;
      }
    });

    _defineProperty(this, "get", (options, subKey) => {
      var _options$buffer, _options$filter;

      this.clearShutdownTimeout();
      const buffer = (0,StreamingDataFrame._A)(options.buffer);
      this.resizeBuffer(buffer);
      this.prepareInternalStreamForNewSubscription(options);
      const shouldSendLastPacketOnly = (options === null || options === void 0 ? void 0 : (_options$buffer = options.buffer) === null || _options$buffer === void 0 ? void 0 : _options$buffer.action) === live.T0.Replace;
      const fieldsNamesFilter = (_options$filter = options.filter) === null || _options$filter === void 0 ? void 0 : _options$filter.fields;
      const dataNeedsFiltering = fieldsNamesFilter === null || fieldsNamesFilter === void 0 ? void 0 : fieldsNamesFilter.length;
      const fieldFilterPredicate = dataNeedsFiltering ? _ref2 => {
        let {
          name
        } = _ref2;
        return fieldsNamesFilter.includes(name);
      } : undefined;
      let matchingFieldIndexes = undefined;

      const getFullFrameResponseData = (messages, error) => {
        matchingFieldIndexes = fieldFilterPredicate ? this.frameBuffer.getMatchingFieldIndexes(fieldFilterPredicate) : undefined;

        if (!shouldSendLastPacketOnly) {
          return {
            key: subKey,
            state: error ? src.LoadingState.Error : src.LoadingState.Streaming,
            data: [{
              type: utils.g0.FullFrame,
              frame: this.frameBuffer.serialize(fieldFilterPredicate, buffer)
            }],
            error
          };
        }

        if (error) {
          return {
            key: subKey,
            state: src.LoadingState.Error,
            data: [{
              type: utils.g0.FullFrame,
              frame: this.frameBuffer.serialize(fieldFilterPredicate, buffer, {
                maxLength: 0
              })
            }],
            error
          };
        }

        if (!messages.length) {
          console.warn(`expected to find at least one non error message ${messages.map(_ref3 => {
            let {
              type
            } = _ref3;
            return type;
          })}`); 

          return {
            key: subKey,
            state: src.LoadingState.Streaming,
            data: [{
              type: utils.g0.FullFrame,
              frame: this.frameBuffer.serialize(fieldFilterPredicate, buffer, {
                maxLength: 0
              })
            }],
            error
          };
        }

        return {
          key: subKey,
          state: src.LoadingState.Streaming,
          data: [{
            type: utils.g0.FullFrame,
            frame: this.frameBuffer.serialize(fieldFilterPredicate, buffer, {
              maxLength: this.frameBuffer.packetInfo.length
            })
          }],
          error
        };
      };

      const getNewValuesSameSchemaResponseData = messages => {
        const lastMessage = messages.length ? messages[messages.length - 1] : undefined;
        const values = shouldSendLastPacketOnly && lastMessage ? lastMessage.values : reduceNewValuesSameSchemaMessages(messages).values;
        const filteredValues = matchingFieldIndexes ? values.filter((v, i) => matchingFieldIndexes.includes(i)) : values;
        return {
          key: subKey,
          state: src.LoadingState.Streaming,
          data: [{
            type: utils.g0.NewValuesSameSchema,
            values: filteredValues
          }]
        };
      };

      let shouldSendFullFrame = true;
      const transformedInternalStream = this.stream.pipe(bufferIfNot(this.deps.subscriberReadiness), (0,map.U)((messages, i) => {
        const errors = filterMessages(messages, InternalStreamMessageType.Error);
        const lastError = errors.length ? errors[errors.length - 1].error : undefined;

        if (shouldSendFullFrame) {
          shouldSendFullFrame = false;
          return getFullFrameResponseData(messages, lastError);
        }

        if (errors.length) {
          return getFullFrameResponseData(messages, lastError);
        }

        const schemaChanged = messages.some(n => n.type === InternalStreamMessageType.ChangedSchema);

        if (schemaChanged) {
          return getFullFrameResponseData(messages, undefined);
        }

        const newValueSameSchemaMessages = filterMessages(messages, InternalStreamMessageType.NewValuesSameSchema);

        if (newValueSameSchemaMessages.length !== messages.length) {
          console.warn(`unsupported message type ${messages.map(_ref4 => {
            let {
              type
            } = _ref4;
            return type;
          })}`);
        }

        return getNewValuesSameSchemaResponseData(newValueSameSchemaMessages);
      }));
      return new Observable.y(subscriber => {
        const sub = transformedInternalStream.subscribe({
          next: n => {
            subscriber.next(n);
          },
          error: err => {
            subscriber.error(err);
          },
          complete: () => {
            subscriber.complete();
          }
        });
        return () => {
          sub.unsubscribe();

          if (!this.stream.observed) {
            this.clearShutdownTimeout();
            this.shutdownTimeoutId = setTimeout(this.shutdownIfNoSubscribers, this.deps.shutdownDelayInMs);
          }
        };
      });
    });

    this.deps = deps;
    this.frameBuffer = StreamingDataFrame.Av.empty(deps.defaultStreamingFrameOptions);
    this.liveEventsSubscription = deps.liveEventsObservable.subscribe({
      error: this.onError,
      complete: this.onComplete,
      next: this.onNext
    });
  }

}
var Subject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subject.js");
;
function channel_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CentrifugeLiveChannel {
  constructor(id, addr) {
    channel_defineProperty(this, "currentStatus", void 0);

    channel_defineProperty(this, "opened", Date.now());

    channel_defineProperty(this, "id", void 0);

    channel_defineProperty(this, "addr", void 0);

    channel_defineProperty(this, "stream", new Subject.x());

    channel_defineProperty(this, "lastMessageWithSchema", void 0);

    channel_defineProperty(this, "subscription", void 0);

    channel_defineProperty(this, "shutdownCallback", void 0);

    channel_defineProperty(this, "initalized", void 0);

    channel_defineProperty(this, "disconnectIfNoListeners", () => {
      const count = this.stream.observers.length;

      if (count === 0) {
        this.disconnect();
      }
    });

    this.id = id;
    this.addr = addr;
    this.currentStatus = {
      type: src.LiveChannelEventType.Status,
      id,
      timestamp: this.opened,
      state: src.LiveChannelConnectionState.Pending
    };

    if (!(0,src.isValidLiveChannelAddress)(addr)) {
      this.currentStatus.state = src.LiveChannelConnectionState.Invalid;
      this.currentStatus.error = 'invalid channel address';
    }
  } 


  initalize() {
    if (this.initalized) {
      throw new Error('Channel already initalized: ' + this.id);
    }

    this.initalized = true;
    const events = {
      publish: ctx => {
        try {
          if (ctx.data) {
            if (ctx.data.schema) {
              this.lastMessageWithSchema = ctx.data;
            }

            this.stream.next({
              type: src.LiveChannelEventType.Message,
              message: ctx.data
            });
          } 


          if (this.currentStatus.error) {
            this.currentStatus.timestamp = Date.now();
            delete this.currentStatus.error;
            this.sendStatus();
          }
        } catch (err) {
          console.log('publish error', this.addr, err);
          this.currentStatus.error = err;
          this.currentStatus.timestamp = Date.now();
          this.sendStatus();
        }
      },
      error: ctx => {
        this.currentStatus.timestamp = Date.now();
        this.currentStatus.error = ctx.error;
        this.sendStatus();
      },
      subscribe: ctx => {
        var _ctx$data;

        this.currentStatus.timestamp = Date.now();
        this.currentStatus.state = src.LiveChannelConnectionState.Connected;
        delete this.currentStatus.error;

        if ((_ctx$data = ctx.data) !== null && _ctx$data !== void 0 && _ctx$data.schema) {
          this.lastMessageWithSchema = ctx.data;
        }

        this.sendStatus(ctx.data);
      },
      unsubscribe: ctx => {
        this.currentStatus.timestamp = Date.now();
        this.currentStatus.state = src.LiveChannelConnectionState.Disconnected;
        this.sendStatus();
      }
    };

    events.join = ctx => {
      this.stream.next({
        type: src.LiveChannelEventType.Join,
        user: ctx.info.user
      });
    };

    events.leave = ctx => {
      this.stream.next({
        type: src.LiveChannelEventType.Leave,
        user: ctx.info.user
      });
    };

    return events;
  }

  sendStatus(message) {
    const copy = Object.assign({}, this.currentStatus);

    if (message) {
      copy.message = message;
    }

    this.stream.next(copy);
  }

  getStream() {
    return new Observable.y(subscriber => {
      var _this$lastMessageWith;

      const initialMessage = Object.assign({}, this.currentStatus);

      if ((_this$lastMessageWith = this.lastMessageWithSchema) !== null && _this$lastMessageWith !== void 0 && _this$lastMessageWith.schema) {
        var _this$lastMessageWith2;

        initialMessage.message = {
          schema: (_this$lastMessageWith2 = this.lastMessageWithSchema) === null || _this$lastMessageWith2 === void 0 ? void 0 : _this$lastMessageWith2.schema
        };
      }

      subscriber.next(Object.assign({}, this.currentStatus, {
        message: this.lastMessageWithSchema
      }));
      const sub = this.stream.subscribe(subscriber);
      return () => {
        sub.unsubscribe();
        const count = this.stream.observers.length; 

        if (count === 0) {
          setTimeout(this.disconnectIfNoListeners, 250);
        }
      };
    });
  }


  async getPresence() {
    if (!this.subscription) {
      return Promise.reject('not subscribed');
    }

    return this.subscription.presence().then(v => {
      return {
        users: Object.keys(v.presence)
      };
    });
  }


  disconnect() {
    this.currentStatus.state = src.LiveChannelConnectionState.Shutdown;
    this.currentStatus.timestamp = Date.now();

    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription.removeAllListeners(); 

      this.subscription = undefined;
    }

    this.stream.complete();
    this.stream.next(Object.assign({}, this.currentStatus));
    this.stream.complete();

    if (this.shutdownCallback) {
      this.shutdownCallback();
    }
  }

  shutdownWithError(err) {
    this.currentStatus.error = err;
    this.sendStatus();
    this.disconnect();
  }

}
function getErrorChannel(msg, id, addr) {
  return {
    id,
    opened: Date.now(),
    addr,
    getStream: () => of({
      type: LiveChannelEventType.Status,
      id,
      timestamp: Date.now(),
      state: LiveChannelConnectionState.Invalid,
      error: msg
    }),
    disconnect: () => {}
  };
}
;
function service_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const defaultStreamingFrameOptions = {
  maxLength: 100,
  maxDelta: Infinity,
  action: live.T0.Append
};
const dataStreamShutdownDelayInMs = 5000;
class CentrifugeService {
  constructor(deps) {
    this.deps = deps;

    service_defineProperty(this, "open", new Map());

    service_defineProperty(this, "liveDataStreamByChannelId", {});

    service_defineProperty(this, "centrifuge", void 0);

    service_defineProperty(this, "connectionState", void 0);

    service_defineProperty(this, "connectionBlocker", void 0);

    service_defineProperty(this, "dataStreamSubscriberReadiness", void 0);

    service_defineProperty(this, "onConnect", context => {
      this.connectionState.next(true);
    });

    service_defineProperty(this, "onDisconnect", context => {
      this.connectionState.next(false);
    });

    service_defineProperty(this, "onServerSideMessage", context => {
      console.log('Publication from server-side channel', context);
    });

    service_defineProperty(this, "getConnectionState", () => {
      return this.connectionState.asObservable();
    });

    service_defineProperty(this, "getStream", address => {
      return this.getChannel(address).getStream();
    });

    service_defineProperty(this, "createSubscriptionKey", options => {
      var _options$key;

      return (_options$key = options.key) !== null && _options$key !== void 0 ? _options$key : `xstr/${streamCounter++}`;
    });

    service_defineProperty(this, "getLiveDataStream", options => {
      const channelId = (0,src.toLiveChannelId)(options.addr);
      const existingStream = this.liveDataStreamByChannelId[channelId];

      if (existingStream) {
        return existingStream;
      }

      const channel = this.getChannel(options.addr);
      this.liveDataStreamByChannelId[channelId] = new LiveDataStream({
        channelId,
        onShutdown: () => {
          delete this.liveDataStreamByChannelId[channelId];
        },
        liveEventsObservable: channel.getStream(),
        subscriberReadiness: this.dataStreamSubscriberReadiness,
        defaultStreamingFrameOptions,
        shutdownDelayInMs: dataStreamShutdownDelayInMs
      });
      return this.liveDataStreamByChannelId[channelId];
    });

    service_defineProperty(this, "getDataStream", options => {
      const subscriptionKey = this.createSubscriptionKey(options);
      const stream = this.getLiveDataStream(options);
      return stream.get(options, subscriptionKey);
    });

    service_defineProperty(this, "getQueryData", async options => {
      if (!this.centrifuge.isConnected()) {
        await this.connectionBlocker;
      }

      return this.centrifuge.namedRPC('grafana.query', options.body);
    });

    service_defineProperty(this, "getPresence", address => {
      return this.getChannel(address).getPresence();
    });

    this.deps = deps;
    this.dataStreamSubscriberReadiness = deps.dataStreamSubscriberReadiness.pipe((0,share.B)(), (0,startWith.O)(true));
    const liveUrl = `${deps.appUrl.replace(/^http/, 'ws')}/api/live/ws`;
    this.centrifuge = new (centrifuge_default())(liveUrl, {
      timeout: 30000
    });
    this.centrifuge.setConnectData({
      sessionId: deps.sessionId,
      orgId: deps.orgId
    }); 

    if (deps.liveEnabled && deps.orgRole !== '') {
      this.centrifuge.connect(); 
    }

    this.connectionState = new BehaviorSubject.X(this.centrifuge.isConnected());
    this.connectionBlocker = new Promise(resolve => {
      if (this.centrifuge.isConnected()) {
        return resolve();
      }

      const connectListener = () => {
        resolve();
        this.centrifuge.removeListener('connect', connectListener);
      };

      this.centrifuge.addListener('connect', connectListener);
    }); 

    this.centrifuge.on('connect', this.onConnect);
    this.centrifuge.on('disconnect', this.onDisconnect);
    this.centrifuge.on('publish', this.onServerSideMessage);
  } 


  getChannel(addr) {
    const id = `${this.deps.orgId}/${addr.scope}/${addr.namespace}/${addr.path}`;
    let channel = this.open.get(id);

    if (channel != null) {
      return channel;
    }

    channel = new CentrifugeLiveChannel(id, addr);

    if (channel.currentStatus.state === src.LiveChannelConnectionState.Invalid) {
      return channel;
    }

    channel.shutdownCallback = () => {
      this.open.delete(id); 
    };

    this.open.set(id, channel); 

    this.initChannel(channel).catch(err => {
      if (channel) {
        channel.currentStatus.state = src.LiveChannelConnectionState.Invalid;
        channel.shutdownWithError(err);
      }

      this.open.delete(id);
    }); 

    return channel;
  }

  async initChannel(channel) {
    const events = channel.initalize();

    if (!this.centrifuge.isConnected()) {
      await this.connectionBlocker;
    }

    channel.subscription = this.centrifuge.subscribe(channel.id, events, {
      data: channel.addr.data
    });
    return;
  } 



} 

let streamCounter = 0;

 }),

 "./public/app/features/live/centrifuge/transferHandlers.ts":
 ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

 var comlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/comlink-npm-4.3.1-45efe1dd36-557360a655.zip/node_modules/comlink/dist/esm/comlink.mjs");
 var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscriber.js");


const subscriberTransferHandler = {
  canHandle(value) {
    return value && value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__ .Lv;
  },

  serialize(value) {
    const obj = comlink__WEBPACK_IMPORTED_MODULE_1__ .sj(value);
    const {
      port1,
      port2
    } = new MessageChannel();
    comlink__WEBPACK_IMPORTED_MODULE_1__ .Jj(obj, port1);
    return [port2, [port2]];
  },

  deserialize(value) {
    value.start();
    return comlink__WEBPACK_IMPORTED_MODULE_1__ .Ud(value);
  }

};
comlink__WEBPACK_IMPORTED_MODULE_1__ .Y6.set('SubscriberHandler', subscriberTransferHandler);

 }),

 "./public/app/plugins/datasource/prometheus/legend.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "W": () => ( renderLegendFormat)
 });
function renderLegendFormat(aliasPattern, aliasData) {
  const aliasRegex = /\{\{\s*(.+?)\s*\}\}/g;
  return aliasPattern.replace(aliasRegex, (_, g1) => aliasData[g1] ? aliasData[g1] : g1);
}

 })

}]);