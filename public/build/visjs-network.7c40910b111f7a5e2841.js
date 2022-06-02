(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8271],{

 "./.yarn/cache/visjs-network-npm-4.25.0-2e90efaeed-40bfcbbf2b.zip/node_modules/visjs-network/dist/vis.js":
 (function(module) {


(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(typeof self !== 'undefined' ? self : this, function() {
return  (function(modules) { 
 	var installedModules = {};
 	function __nested_webpack_require_1040__(moduleId) {
 		if(installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};
 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1040__);
 		module.l = true;
 		return module.exports;
 	}
 	__nested_webpack_require_1040__.m = modules;
 	__nested_webpack_require_1040__.c = installedModules;
 	__nested_webpack_require_1040__.d = function(exports, name, getter) {
 		if(!__nested_webpack_require_1040__.o(exports, name)) {
 			Object.defineProperty(exports, name, {
 				configurable: false,
 				enumerable: true,
 				get: getter
 			});
 		}
 	};
 	__nested_webpack_require_1040__.n = function(module) {
 		var getter = module && module.__esModule ?
 			function getDefault() { return module['default']; } :
 			function getModuleExports() { return module; };
 		__nested_webpack_require_1040__.d(getter, 'a', getter);
 		return getter;
 	};
 	__nested_webpack_require_1040__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 	__nested_webpack_require_1040__.p = "";
 	return __nested_webpack_require_1040__(__nested_webpack_require_1040__.s = 85);
 })
 ([
 (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

 }),
 (function(module, exports, __nested_webpack_require_3604__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __nested_webpack_require_3604__(130);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

 }),
 (function(module, exports, __nested_webpack_require_4566__) {

"use strict";


var _getIterator2 = __nested_webpack_require_4566__(58);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _create = __nested_webpack_require_4566__(31);

var _create2 = _interopRequireDefault(_create);

var _keys = __nested_webpack_require_4566__(9);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __nested_webpack_require_4566__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }



var moment = __nested_webpack_require_4566__(71);
var uuid = __nested_webpack_require_4566__(119);

exports.isNumber = function (object) {
  return object instanceof Number || typeof object == 'number';
};

exports.recursiveDOMDelete = function (DOMobject) {
  if (DOMobject) {
    while (DOMobject.hasChildNodes() === true) {
      exports.recursiveDOMDelete(DOMobject.firstChild);
      DOMobject.removeChild(DOMobject.firstChild);
    }
  }
};

exports.isString = function (object) {
  return object instanceof String || typeof object == 'string';
};

exports.isDate = function (object) {
  if (object instanceof Date) {
    return true;
  } else if (exports.isString(object)) {
    var match = ASPDateRegex.exec(object);
    if (match) {
      return true;
    } else if (!isNaN(Date.parse(object))) {
      return true;
    }
  }

  return false;
};

exports.randomUUID = function () {
  return uuid.v4();
};

function copyOrDelete(a, b, prop, allowDeletion) {
  var doDeletion = false;
  if (allowDeletion === true) {
    doDeletion = b[prop] === null && a[prop] !== undefined;
  }

  if (doDeletion) {
    delete a[prop];
  } else {
    a[prop] = b[prop]; 
  }
}

exports.fillIfDefined = function (a, b) {
  var allowDeletion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  for (var prop in a) {
    if (b[prop] !== undefined) {
      if (b[prop] === null || (0, _typeof3['default'])(b[prop]) !== 'object') {
        copyOrDelete(a, b, prop, allowDeletion);
      } else {
        if ((0, _typeof3['default'])(a[prop]) === 'object') {
          exports.fillIfDefined(a[prop], b[prop], allowDeletion);
        }
      }
    }
  }
};

exports.extend = function (a ) {
  for (var i = 1; i < arguments.length; i++) {
    var other = arguments[i];
    for (var prop in other) {
      if (other.hasOwnProperty(prop)) {
        a[prop] = other[prop];
      }
    }
  }
  return a;
};

exports.selectiveExtend = function (props, a ) {
  if (!Array.isArray(props)) {
    throw new Error('Array with property names expected as first argument');
  }

  for (var i = 2; i < arguments.length; i++) {
    var other = arguments[i];

    for (var p = 0; p < props.length; p++) {
      var prop = props[p];
      if (other && other.hasOwnProperty(prop)) {
        a[prop] = other[prop];
      }
    }
  }
  return a;
};

exports.selectiveDeepExtend = function (props, a, b) {
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (Array.isArray(b)) {
    throw new TypeError('Arrays are not supported by deepExtend');
  }

  for (var p = 0; p < props.length; p++) {
    var prop = props[p];
    if (b.hasOwnProperty(prop)) {
      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === undefined) {
          a[prop] = {};
        }
        if (a[prop].constructor === Object) {
          exports.deepExtend(a[prop], b[prop], false, allowDeletion);
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      } else if (Array.isArray(b[prop])) {
        throw new TypeError('Arrays are not supported by deepExtend');
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    }
  }
  return a;
};

exports.selectiveNotDeepExtend = function (propsToExclude, a, b) {
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (Array.isArray(b)) {
    throw new TypeError('Arrays are not supported by deepExtend');
  }

  for (var prop in b) {
    if (!b.hasOwnProperty(prop)) continue; 
    if (propsToExclude.indexOf(prop) !== -1) continue; 

    if (b[prop] && b[prop].constructor === Object) {
      if (a[prop] === undefined) {
        a[prop] = {};
      }
      if (a[prop].constructor === Object) {
        exports.deepExtend(a[prop], b[prop]); 
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    } else if (Array.isArray(b[prop])) {
      a[prop] = [];
      for (var i = 0; i < b[prop].length; i++) {
        a[prop].push(b[prop][i]);
      }
    } else {
      copyOrDelete(a, b, prop, allowDeletion);
    }
  }

  return a;
};

exports.deepExtend = function (a, b) {
  var protoExtend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var allowDeletion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  for (var prop in b) {
    if (b.hasOwnProperty(prop) || protoExtend === true) {
      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === undefined) {
          a[prop] = {};
        }
        if (a[prop].constructor === Object) {
          exports.deepExtend(a[prop], b[prop], protoExtend); 
        } else {
          copyOrDelete(a, b, prop, allowDeletion);
        }
      } else if (Array.isArray(b[prop])) {
        a[prop] = [];
        for (var i = 0; i < b[prop].length; i++) {
          a[prop].push(b[prop][i]);
        }
      } else {
        copyOrDelete(a, b, prop, allowDeletion);
      }
    }
  }
  return a;
};

exports.equalArray = function (a, b) {
  if (a.length != b.length) return false;

  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] != b[i]) return false;
  }

  return true;
};

exports.convert = function (object, type) {
  var match;

  if (object === undefined) {
    return undefined;
  }
  if (object === null) {
    return null;
  }

  if (!type) {
    return object;
  }
  if (!(typeof type === 'string') && !(type instanceof String)) {
    throw new Error('Type must be a string');
  }

  switch (type) {
    case 'boolean':
    case 'Boolean':
      return Boolean(object);

    case 'number':
    case 'Number':
      if (exports.isString(object) && !isNaN(Date.parse(object))) {
        return moment(object).valueOf();
      } else {
        return Number(object.valueOf());
      }
    case 'string':
    case 'String':
      return String(object);

    case 'Date':
      if (exports.isNumber(object)) {
        return new Date(object);
      }
      if (object instanceof Date) {
        return new Date(object.valueOf());
      } else if (moment.isMoment(object)) {
        return new Date(object.valueOf());
      }
      if (exports.isString(object)) {
        match = ASPDateRegex.exec(object);
        if (match) {
          return new Date(Number(match[1])); 
        } else {
          return moment(new Date(object)).toDate(); 
        }
      } else {
        throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type Date');
      }

    case 'Moment':
      if (exports.isNumber(object)) {
        return moment(object);
      }
      if (object instanceof Date) {
        return moment(object.valueOf());
      } else if (moment.isMoment(object)) {
        return moment(object);
      }
      if (exports.isString(object)) {
        match = ASPDateRegex.exec(object);
        if (match) {
          return moment(Number(match[1])); 
        } else {
          return moment(object); 
        }
      } else {
        throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type Date');
      }

    case 'ISODate':
      if (exports.isNumber(object)) {
        return new Date(object);
      } else if (object instanceof Date) {
        return object.toISOString();
      } else if (moment.isMoment(object)) {
        return object.toDate().toISOString();
      } else if (exports.isString(object)) {
        match = ASPDateRegex.exec(object);
        if (match) {
          return new Date(Number(match[1])).toISOString(); 
        } else {
          return moment(object).format(); 
        }
      } else {
        throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type ISODate');
      }

    case 'ASPDate':
      if (exports.isNumber(object)) {
        return '/Date(' + object + ')/';
      } else if (object instanceof Date) {
        return '/Date(' + object.valueOf() + ')/';
      } else if (exports.isString(object)) {
        match = ASPDateRegex.exec(object);
        var value;
        if (match) {
          value = new Date(Number(match[1])).valueOf(); 
        } else {
          value = new Date(object).valueOf(); 
        }
        return '/Date(' + value + ')/';
      } else {
        throw new Error('Cannot convert object of type ' + exports.getType(object) + ' to type ASPDate');
      }

    default:
      throw new Error('Unknown type "' + type + '"');
  }
};

var ASPDateRegex = /^\/?Date\((\-?\d+)/i;

exports.getType = function (object) {
  var type = typeof object === 'undefined' ? 'undefined' : (0, _typeof3['default'])(object);

  if (type == 'object') {
    if (object === null) {
      return 'null';
    }
    if (object instanceof Boolean) {
      return 'Boolean';
    }
    if (object instanceof Number) {
      return 'Number';
    }
    if (object instanceof String) {
      return 'String';
    }
    if (Array.isArray(object)) {
      return 'Array';
    }
    if (object instanceof Date) {
      return 'Date';
    }
    return 'Object';
  } else if (type == 'number') {
    return 'Number';
  } else if (type == 'boolean') {
    return 'Boolean';
  } else if (type == 'string') {
    return 'String';
  } else if (type === undefined) {
    return 'undefined';
  }

  return type;
};

exports.copyAndExtendArray = function (arr, newValue) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(newValue);
  return newArr;
};

exports.copyArray = function (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

exports.getAbsoluteLeft = function (elem) {
  return elem.getBoundingClientRect().left;
};

exports.getAbsoluteRight = function (elem) {
  return elem.getBoundingClientRect().right;
};

exports.getAbsoluteTop = function (elem) {
  return elem.getBoundingClientRect().top;
};

exports.addClassName = function (elem, classNames) {
  var classes = elem.className.split(' ');
  var newClasses = classNames.split(' ');
  classes = classes.concat(newClasses.filter(function (className) {
    return classes.indexOf(className) < 0;
  }));
  elem.className = classes.join(' ');
};

exports.removeClassName = function (elem, classNames) {
  var classes = elem.className.split(' ');
  var oldClasses = classNames.split(' ');
  classes = classes.filter(function (className) {
    return oldClasses.indexOf(className) < 0;
  });
  elem.className = classes.join(' ');
};

exports.forEach = function (object, callback) {
  var i, len;
  if (Array.isArray(object)) {
    for (i = 0, len = object.length; i < len; i++) {
      callback(object[i], i, object);
    }
  } else {
    for (i in object) {
      if (object.hasOwnProperty(i)) {
        callback(object[i], i, object);
      }
    }
  }
};

exports.toArray = function (object) {
  var array = [];

  for (var prop in object) {
    if (object.hasOwnProperty(prop)) array.push(object[prop]);
  }

  return array;
};

exports.updateProperty = function (object, key, value) {
  if (object[key] !== value) {
    object[key] = value;
    return true;
  } else {
    return false;
  }
};

exports.throttle = function (fn) {
  var scheduled = false;

  return function throttled() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(function () {
        scheduled = false;
        fn();
      });
    }
  };
};

exports.addEventListener = function (element, action, listener, useCapture) {
  if (element.addEventListener) {
    if (useCapture === undefined) useCapture = false;

    if (action === 'mousewheel' && navigator.userAgent.indexOf('Firefox') >= 0) {
      action = 'DOMMouseScroll'; 
    }

    element.addEventListener(action, listener, useCapture);
  } else {
    element.attachEvent('on' + action, listener); 
  }
};

exports.removeEventListener = function (element, action, listener, useCapture) {
  if (element.removeEventListener) {
    if (useCapture === undefined) useCapture = false;

    if (action === 'mousewheel' && navigator.userAgent.indexOf('Firefox') >= 0) {
      action = 'DOMMouseScroll'; 
    }

    element.removeEventListener(action, listener, useCapture);
  } else {
    element.detachEvent('on' + action, listener);
  }
};

exports.preventDefault = function (event) {
  if (!event) event = window.event;

  if (event.preventDefault) {
    event.preventDefault(); 
  } else {
    event.returnValue = false; 
  }
};

exports.getTarget = function (event) {
  if (!event) {
    event = window.event;
  }

  var target;

  if (event.target) {
    target = event.target;
  } else if (event.srcElement) {
    target = event.srcElement;
  }

  if (target.nodeType != undefined && target.nodeType == 3) {
    target = target.parentNode;
  }

  return target;
};

exports.hasParent = function (element, parent) {
  var e = element;

  while (e) {
    if (e === parent) {
      return true;
    }
    e = e.parentNode;
  }

  return false;
};

exports.option = {};

exports.option.asBoolean = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  if (value != null) {
    return value != false;
  }

  return defaultValue || null;
};

exports.option.asNumber = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  if (value != null) {
    return Number(value) || defaultValue || null;
  }

  return defaultValue || null;
};

exports.option.asString = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  if (value != null) {
    return String(value);
  }

  return defaultValue || null;
};

exports.option.asSize = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  if (exports.isString(value)) {
    return value;
  } else if (exports.isNumber(value)) {
    return value + 'px';
  } else {
    return defaultValue || null;
  }
};

exports.option.asElement = function (value, defaultValue) {
  if (typeof value == 'function') {
    value = value();
  }

  return value || defaultValue || null;
};

exports.hexToRGB = function (hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

exports.overrideOpacity = function (color, opacity) {
  var rgb;
  if (color.indexOf('rgba') != -1) {
    return color;
  } else if (color.indexOf('rgb') != -1) {
    rgb = color.substr(color.indexOf('(') + 1).replace(')', '').split(',');
    return 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + opacity + ')';
  } else {
    rgb = exports.hexToRGB(color);
    if (rgb == null) {
      return color;
    } else {
      return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + opacity + ')';
    }
  }
};

exports.RGBToHex = function (red, green, blue) {
  return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
};

exports.parseColor = function (color) {
  var c;
  if (exports.isString(color) === true) {
    if (exports.isValidRGB(color) === true) {
      var rgb = color.substr(4).substr(0, color.length - 5).split(',').map(function (value) {
        return parseInt(value);
      });
      color = exports.RGBToHex(rgb[0], rgb[1], rgb[2]);
    }
    if (exports.isValidHex(color) === true) {
      var hsv = exports.hexToHSV(color);
      var lighterColorHSV = {
        h: hsv.h,
        s: hsv.s * 0.8,
        v: Math.min(1, hsv.v * 1.02)
      };
      var darkerColorHSV = {
        h: hsv.h,
        s: Math.min(1, hsv.s * 1.25),
        v: hsv.v * 0.8
      };
      var darkerColorHex = exports.HSVToHex(darkerColorHSV.h, darkerColorHSV.s, darkerColorHSV.v);
      var lighterColorHex = exports.HSVToHex(lighterColorHSV.h, lighterColorHSV.s, lighterColorHSV.v);
      c = {
        background: color,
        border: darkerColorHex,
        highlight: {
          background: lighterColorHex,
          border: darkerColorHex
        },
        hover: {
          background: lighterColorHex,
          border: darkerColorHex
        }
      };
    } else {
      c = {
        background: color,
        border: color,
        highlight: {
          background: color,
          border: color
        },
        hover: {
          background: color,
          border: color
        }
      };
    }
  } else {
    c = {};
    c.background = color.background || undefined;
    c.border = color.border || undefined;

    if (exports.isString(color.highlight)) {
      c.highlight = {
        border: color.highlight,
        background: color.highlight
      };
    } else {
      c.highlight = {};
      c.highlight.background = color.highlight && color.highlight.background || undefined;
      c.highlight.border = color.highlight && color.highlight.border || undefined;
    }

    if (exports.isString(color.hover)) {
      c.hover = {
        border: color.hover,
        background: color.hover
      };
    } else {
      c.hover = {};
      c.hover.background = color.hover && color.hover.background || undefined;
      c.hover.border = color.hover && color.hover.border || undefined;
    }
  }

  return c;
};

exports.RGBToHSV = function (red, green, blue) {
  red = red / 255;
  green = green / 255;
  blue = blue / 255;
  var minRGB = Math.min(red, Math.min(green, blue));
  var maxRGB = Math.max(red, Math.max(green, blue));

  if (minRGB == maxRGB) {
    return { h: 0, s: 0, v: minRGB };
  }

  var d = red == minRGB ? green - blue : blue == minRGB ? red - green : blue - red;
  var h = red == minRGB ? 3 : blue == minRGB ? 1 : 5;
  var hue = 60 * (h - d / (maxRGB - minRGB)) / 360;
  var saturation = (maxRGB - minRGB) / maxRGB;
  var value = maxRGB;
  return { h: hue, s: saturation, v: value };
};

var cssUtil = {
  split: function split(cssText) {
    var styles = {};

    cssText.split(';').forEach(function (style) {
      if (style.trim() != '') {
        var parts = style.split(':');
        var key = parts[0].trim();
        var value = parts[1].trim();
        styles[key] = value;
      }
    });

    return styles;
  },

  join: function join(styles) {
    return (0, _keys2['default'])(styles).map(function (key) {
      return key + ': ' + styles[key];
    }).join('; ');
  }

};exports.addCssText = function (element, cssText) {
  var currentStyles = cssUtil.split(element.style.cssText);
  var newStyles = cssUtil.split(cssText);
  var styles = exports.extend(currentStyles, newStyles);

  element.style.cssText = cssUtil.join(styles);
};

exports.removeCssText = function (element, cssText) {
  var styles = cssUtil.split(element.style.cssText);
  var removeStyles = cssUtil.split(cssText);

  for (var key in removeStyles) {
    if (removeStyles.hasOwnProperty(key)) {
      delete styles[key];
    }
  }

  element.style.cssText = cssUtil.join(styles);
};

exports.HSVToRGB = function (h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0:
      ;r = v, g = t, b = p;
      break;
    case 1:
      ;r = q, g = v, b = p;
      break;
    case 2:
      ;r = p, g = v, b = t;
      break;
    case 3:
      ;r = p, g = q, b = v;
      break;
    case 4:
      ;r = t, g = p, b = v;
      break;
    case 5:
      ;r = v, g = p, b = q;
      break;
  }

  return {
    r: Math.floor(r * 255),
    g: Math.floor(g * 255),
    b: Math.floor(b * 255)
  };
};

exports.HSVToHex = function (h, s, v) {
  var rgb = exports.HSVToRGB(h, s, v);
  return exports.RGBToHex(rgb.r, rgb.g, rgb.b);
};

exports.hexToHSV = function (hex) {
  var rgb = exports.hexToRGB(hex);
  return exports.RGBToHSV(rgb.r, rgb.g, rgb.b);
};

exports.isValidHex = function (hex) {
  var isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
  return isOk;
};

exports.isValidRGB = function (rgb) {
  rgb = rgb.replace(' ', '');
  var isOk = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(rgb);
  return isOk;
};
exports.isValidRGBA = function (rgba) {
  rgba = rgba.replace(' ', '');
  var isOk = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(.{1,3})\)/i.test(rgba);
  return isOk;
};

exports.selectiveBridgeObject = function (fields, referenceObject) {
  if (referenceObject !== null && (typeof referenceObject === 'undefined' ? 'undefined' : (0, _typeof3['default'])(referenceObject)) === 'object') {
    var objectTo = (0, _create2['default'])(referenceObject);
    for (var i = 0; i < fields.length; i++) {
      if (referenceObject.hasOwnProperty(fields[i])) {
        if ((0, _typeof3['default'])(referenceObject[fields[i]]) == 'object') {
          objectTo[fields[i]] = exports.bridgeObject(referenceObject[fields[i]]);
        }
      }
    }
    return objectTo;
  } else {
    return null;
  }
};

exports.bridgeObject = function (referenceObject) {
  if (referenceObject !== null && (typeof referenceObject === 'undefined' ? 'undefined' : (0, _typeof3['default'])(referenceObject)) === 'object') {
    var objectTo = (0, _create2['default'])(referenceObject);
    if (referenceObject instanceof Element) {
      objectTo = referenceObject;
    } else {
      objectTo = (0, _create2['default'])(referenceObject);
      for (var i in referenceObject) {
        if (referenceObject.hasOwnProperty(i)) {
          if ((0, _typeof3['default'])(referenceObject[i]) == 'object') {
            objectTo[i] = exports.bridgeObject(referenceObject[i]);
          }
        }
      }
    }
    return objectTo;
  } else {
    return null;
  }
};

exports.insertSort = function (a, compare) {
  for (var i = 0; i < a.length; i++) {
    var k = a[i];
    for (var j = i; j > 0 && compare(k, a[j - 1]) < 0; j--) {
      a[j] = a[j - 1];
    }
    a[j] = k;
  }
  return a;
};

exports.mergeOptions = function (mergeTarget, options, option) {
  var globalOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var isPresent = function isPresent(obj) {
    return obj !== null && obj !== undefined;
  };

  var isObject = function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : (0, _typeof3['default'])(obj)) === 'object';
  };

  var isEmpty = function isEmpty(obj) {
    for (var x in obj) {
      if (obj.hasOwnProperty(x)) return false;
    }
    return true;
  };

  if (!isObject(mergeTarget)) {
    throw new Error('Parameter mergeTarget must be an object');
  }

  if (!isObject(options)) {
    throw new Error('Parameter options must be an object');
  }

  if (!isPresent(option)) {
    throw new Error('Parameter option must have a value');
  }

  if (!isObject(globalOptions)) {
    throw new Error('Parameter globalOptions must be an object');
  }

  var doMerge = function doMerge(target, options, option) {
    if (!isObject(target[option])) {
      target[option] = {};
    }

    var src = options[option];
    var dst = target[option];
    for (var prop in src) {
      if (src.hasOwnProperty(prop)) {
        dst[prop] = src[prop];
      }
    }
  };

  var srcOption = options[option];
  var globalPassed = isObject(globalOptions) && !isEmpty(globalOptions);
  var globalOption = globalPassed ? globalOptions[option] : undefined;
  var globalEnabled = globalOption ? globalOption.enabled : undefined;

  if (srcOption === undefined) {
    return; 
  }

  if (typeof srcOption === 'boolean') {
    if (!isObject(mergeTarget[option])) {
      mergeTarget[option] = {};
    }

    mergeTarget[option].enabled = srcOption;
    return;
  }

  if (srcOption === null && !isObject(mergeTarget[option])) {
    if (isPresent(globalOption)) {
      mergeTarget[option] = (0, _create2['default'])(globalOption);
    } else {
      return; 
    }
  }

  if (!isObject(srcOption)) {
    return;
  }

  var enabled = true; 

  if (srcOption.enabled !== undefined) {
    enabled = srcOption.enabled;
  } else {
    if (globalEnabled !== undefined) {
      enabled = globalOption.enabled;
    }
  }

  doMerge(mergeTarget, options, option);
  mergeTarget[option].enabled = enabled;
};

exports.binarySearchCustom = function (orderedItems, comparator, field, field2) {
  var maxIterations = 10000;
  var iteration = 0;
  var low = 0;
  var high = orderedItems.length - 1;

  while (low <= high && iteration < maxIterations) {
    var middle = Math.floor((low + high) / 2);

    var item = orderedItems[middle];
    var value = field2 === undefined ? item[field] : item[field][field2];

    var searchResult = comparator(value);
    if (searchResult == 0) {
      return middle;
    } else if (searchResult == -1) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }

    iteration++;
  }

  return -1;
};

exports.binarySearchValue = function (orderedItems, target, field, sidePreference, comparator) {
  var maxIterations = 10000;
  var iteration = 0;
  var low = 0;
  var high = orderedItems.length - 1;
  var prevValue, value, nextValue, middle;

  comparator = comparator != undefined ? comparator : function (a, b) {
    return a == b ? 0 : a < b ? -1 : 1;
  };

  while (low <= high && iteration < maxIterations) {
    middle = Math.floor(0.5 * (high + low));
    prevValue = orderedItems[Math.max(0, middle - 1)][field];
    value = orderedItems[middle][field];
    nextValue = orderedItems[Math.min(orderedItems.length - 1, middle + 1)][field];

    if (comparator(value, target) == 0) {
      return middle;
    } else if (comparator(prevValue, target) < 0 && comparator(value, target) > 0) {
      return sidePreference == 'before' ? Math.max(0, middle - 1) : middle;
    } else if (comparator(value, target) < 0 && comparator(nextValue, target) > 0) {
      return sidePreference == 'before' ? middle : Math.min(orderedItems.length - 1, middle + 1);
    } else {
      if (comparator(value, target) < 0) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
    iteration++;
  }

  return -1;
};

exports.easingFunctions = {
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

exports.getScrollBarWidth = function () {
  var inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  document.body.appendChild(outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return w1 - w2;
};

exports.topMost = function (pile, accessors) {
  var candidate = void 0;
  if (!Array.isArray(accessors)) {
    accessors = [accessors];
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3['default'])(pile), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var member = _step.value;

      if (member) {
        candidate = member[accessors[0]];
        for (var i = 1; i < accessors.length; i++) {
          if (candidate) {
            candidate = candidate[accessors[i]];
          }
        }
        if (typeof candidate != 'undefined') {
          break;
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return candidate;
};

 }),
 (function(module, exports, __nested_webpack_require_49405__) {

module.exports = { "default": __nested_webpack_require_49405__(145), __esModule: true };

 }),
 (function(module, exports, __nested_webpack_require_49557__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __nested_webpack_require_49557__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

 }),
 (function(module, exports, __nested_webpack_require_50171__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __nested_webpack_require_50171__(147);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __nested_webpack_require_50171__(31);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __nested_webpack_require_50171__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

 }),
 (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; 


 }),
 (function(module, exports, __nested_webpack_require_51498__) {

"use strict";


exports.__esModule = true;

var _iterator = __nested_webpack_require_51498__(104);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __nested_webpack_require_51498__(106);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

 }),
 (function(module, exports, __nested_webpack_require_52628__) {

var store = __nested_webpack_require_52628__(44)('wks');
var uid = __nested_webpack_require_52628__(29);
var Symbol = __nested_webpack_require_52628__(10).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


 }),
 (function(module, exports, __nested_webpack_require_53075__) {

module.exports = { "default": __nested_webpack_require_53075__(102), __esModule: true };

 }),
 (function(module, exports) {

var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  : Function('return this')();
if (typeof __g == 'number') __g = global; 


 }),
 (function(module, exports, __nested_webpack_require_53654__) {

var global = __nested_webpack_require_53654__(10);
var core = __nested_webpack_require_53654__(6);
var ctx = __nested_webpack_require_53654__(61);
var hide = __nested_webpack_require_53654__(19);
var has = __nested_webpack_require_53654__(14);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    out = own ? target[key] : source[key];
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    : IS_BIND && own ? ctx(out, global)
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
$export.F = 1;   
$export.G = 2;   
$export.S = 4;   
$export.P = 8;   
$export.B = 16;  
$export.W = 32;  
$export.U = 64;  
$export.R = 128; 
module.exports = $export;


 }),
 (function(module, exports, __nested_webpack_require_56105__) {

var anObject = __nested_webpack_require_56105__(20);
var IE8_DOM_DEFINE = __nested_webpack_require_56105__(62);
var toPrimitive = __nested_webpack_require_56105__(40);
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_56105__(13) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


 }),
 (function(module, exports, __nested_webpack_require_56773__) {

module.exports = !__nested_webpack_require_56773__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


 }),
 (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


 }),
 (function(module, exports, __nested_webpack_require_57216__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __nested_webpack_require_57216__(136);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __nested_webpack_require_57216__(58);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

 }),
 (function(module, exports, __nested_webpack_require_58479__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __nested_webpack_require_58479__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __nested_webpack_require_58479__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_58479__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var NodeBase = function () {
  function NodeBase(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, NodeBase);

    this.body = body;
    this.labelModule = labelModule;
    this.setOptions(options);
    this.top = undefined;
    this.left = undefined;
    this.height = undefined;
    this.width = undefined;
    this.radius = undefined;
    this.margin = undefined;
    this.refreshNeeded = true;
    this.boundingBox = { top: 0, left: 0, right: 0, bottom: 0 };
  }



  (0, _createClass3['default'])(NodeBase, [{
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
    }


  }, {
    key: '_setMargins',
    value: function _setMargins(labelModule) {
      this.margin = {};
      if (this.options.margin) {
        if ((0, _typeof3['default'])(this.options.margin) == 'object') {
          this.margin.top = this.options.margin.top;
          this.margin.right = this.options.margin.right;
          this.margin.bottom = this.options.margin.bottom;
          this.margin.left = this.options.margin.left;
        } else {
          this.margin.top = this.options.margin;
          this.margin.right = this.options.margin;
          this.margin.bottom = this.options.margin;
          this.margin.left = this.options.margin;
        }
      }
      labelModule.adjustSizes(this.margin);
    }


  }, {
    key: '_distanceToBorder',
    value: function _distanceToBorder(ctx, angle) {
      var borderWidth = this.options.borderWidth;
      this.resize(ctx);
      return Math.min(Math.abs(this.width / 2 / Math.cos(angle)), Math.abs(this.height / 2 / Math.sin(angle))) + borderWidth;
    }


  }, {
    key: 'enableShadow',
    value: function enableShadow(ctx, values) {
      if (values.shadow) {
        ctx.shadowColor = values.shadowColor;
        ctx.shadowBlur = values.shadowSize;
        ctx.shadowOffsetX = values.shadowX;
        ctx.shadowOffsetY = values.shadowY;
      }
    }


  }, {
    key: 'disableShadow',
    value: function disableShadow(ctx, values) {
      if (values.shadow) {
        ctx.shadowColor = 'rgba(0,0,0,0)';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      }
    }


  }, {
    key: 'enableBorderDashes',
    value: function enableBorderDashes(ctx, values) {
      if (values.borderDashes !== false) {
        if (ctx.setLineDash !== undefined) {
          var dashes = values.borderDashes;
          if (dashes === true) {
            dashes = [5, 15];
          }
          ctx.setLineDash(dashes);
        } else {
          console.warn('setLineDash is not supported in this browser. The dashed borders cannot be used.');
          this.options.shapeProperties.borderDashes = false;
          values.borderDashes = false;
        }
      }
    }


  }, {
    key: 'disableBorderDashes',
    value: function disableBorderDashes(ctx, values) {
      if (values.borderDashes !== false) {
        if (ctx.setLineDash !== undefined) {
          ctx.setLineDash([0]);
        } else {
          console.warn('setLineDash is not supported in this browser. The dashed borders cannot be used.');
          this.options.shapeProperties.borderDashes = false;
          values.borderDashes = false;
        }
      }
    }


  }, {
    key: 'needsRefresh',
    value: function needsRefresh(selected, hover) {
      if (this.refreshNeeded === true) {
        this.refreshNeeded = false;
        return true;
      }

      return this.width === undefined || this.labelModule.differentState(selected, hover);
    }


  }, {
    key: 'initContextForDraw',
    value: function initContextForDraw(ctx, values) {
      var borderWidth = values.borderWidth / this.body.view.scale;

      ctx.lineWidth = Math.min(this.width, borderWidth);
      ctx.strokeStyle = values.borderColor;
      ctx.fillStyle = values.color;
    }


  }, {
    key: 'performStroke',
    value: function performStroke(ctx, values) {
      var borderWidth = values.borderWidth / this.body.view.scale;

      ctx.save();
      if (borderWidth > 0) {
        this.enableBorderDashes(ctx, values);
        ctx.stroke();
        this.disableBorderDashes(ctx, values);
      }
      ctx.restore();
    }


  }, {
    key: 'performFill',
    value: function performFill(ctx, values) {
      this.enableShadow(ctx, values);
      ctx.fill();
      this.disableShadow(ctx, values);

      this.performStroke(ctx, values);
    }


  }, {
    key: '_addBoundingBoxMargin',
    value: function _addBoundingBoxMargin(margin) {
      this.boundingBox.left -= margin;
      this.boundingBox.top -= margin;
      this.boundingBox.bottom += margin;
      this.boundingBox.right += margin;
    }


  }, {
    key: '_updateBoundingBox',
    value: function _updateBoundingBox(x, y, ctx, selected, hover) {
      if (ctx !== undefined) {
        this.resize(ctx, selected, hover);
      }

      this.left = x - this.width / 2;
      this.top = y - this.height / 2;

      this.boundingBox.left = this.left;
      this.boundingBox.top = this.top;
      this.boundingBox.bottom = this.top + this.height;
      this.boundingBox.right = this.left + this.width;
    }


  }, {
    key: 'updateBoundingBox',
    value: function updateBoundingBox(x, y, ctx, selected, hover) {
      this._updateBoundingBox(x, y, ctx, selected, hover);
    }


  }, {
    key: 'getDimensionsFromLabel',
    value: function getDimensionsFromLabel(ctx, selected, hover) {
      this.textSize = this.labelModule.getTextSize(ctx, selected, hover);
      var width = this.textSize.width;
      var height = this.textSize.height;

      var DEFAULT_SIZE = 14;
      if (width === 0) {
        width = DEFAULT_SIZE; 
        height = DEFAULT_SIZE; 
      }

      return { width: width, height: height };
    }
  }]);
  return NodeBase;
}();

exports['default'] = NodeBase;

 }),
 (function(module, exports, __nested_webpack_require_68154__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_68154__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_68154__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_68154__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_68154__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_68154__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _NodeBase2 = __nested_webpack_require_68154__(16);

var _NodeBase3 = _interopRequireDefault(_NodeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ShapeBase = function (_NodeBase) {
  (0, _inherits3['default'])(ShapeBase, _NodeBase);

  function ShapeBase(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, ShapeBase);
    return (0, _possibleConstructorReturn3['default'])(this, (ShapeBase.__proto__ || (0, _getPrototypeOf2['default'])(ShapeBase)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(ShapeBase, [{
    key: 'resize',
    value: function resize(ctx) {
      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.selected;
      var hover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.hover;
      var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { size: this.options.size };

      if (this.needsRefresh(selected, hover)) {
        this.labelModule.getTextSize(ctx, selected, hover);
        var size = 2 * values.size;
        this.width = size;
        this.height = size;
        this.radius = 0.5 * this.width;
      }
    }


  }, {
    key: '_drawShape',
    value: function _drawShape(ctx, shape, sizeMultiplier, x, y, selected, hover, values) {
      this.resize(ctx, selected, hover, values);
      this.left = x - this.width / 2;
      this.top = y - this.height / 2;

      this.initContextForDraw(ctx, values);
      ctx[shape](x, y, values.size);
      this.performFill(ctx, values);

      if (this.options.icon !== undefined) {
        if (this.options.icon.code !== undefined) {
          ctx.font = (selected ? 'bold ' : '') + this.height / 2 + 'px ' + (this.options.icon.face || 'FontAwesome');
          ctx.fillStyle = this.options.icon.color || 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(this.options.icon.code, x, y);
        }
      }

      if (this.options.label !== undefined) {
        this.labelModule.calculateLabelSize(ctx, selected, hover, x, y, 'hanging');
        var yLabel = y + 0.5 * this.height + 0.5 * this.labelModule.size.height;
        this.labelModule.draw(ctx, x, yLabel, selected, hover, 'hanging');
      }

      this.updateBoundingBox(x, y);
    }


  }, {
    key: 'updateBoundingBox',
    value: function updateBoundingBox(x, y) {
      this.boundingBox.top = y - this.options.size;
      this.boundingBox.left = x - this.options.size;
      this.boundingBox.right = x + this.options.size;
      this.boundingBox.bottom = y + this.options.size;

      if (this.options.label !== undefined && this.labelModule.size.width > 0) {
        this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left);
        this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width);
        this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelModule.size.height);
      }
    }
  }]);
  return ShapeBase;
}(_NodeBase3['default']);

exports['default'] = ShapeBase;

 }),
 (function(module, exports, __nested_webpack_require_72961__) {

var IObject = __nested_webpack_require_72961__(59);
var defined = __nested_webpack_require_72961__(39);
module.exports = function (it) {
  return IObject(defined(it));
};


 }),
 (function(module, exports, __nested_webpack_require_73260__) {

var dP = __nested_webpack_require_73260__(12);
var createDesc = __nested_webpack_require_73260__(28);
module.exports = __nested_webpack_require_73260__(13) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


 }),
 (function(module, exports, __nested_webpack_require_73618__) {

var isObject = __nested_webpack_require_73618__(21);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


 }),
 (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


 }),
 (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


 }),
 (function(module, exports, __nested_webpack_require_74178__) {

module.exports = { "default": __nested_webpack_require_74178__(123), __esModule: true };

 }),
 (function(module, exports, __nested_webpack_require_74331__) {

"use strict";


function hammerMock() {
  var noop = function noop() {};

  return {
    on: noop,
    off: noop,
    destroy: noop,
    emit: noop,

    get: function get(m) {
      return {
        set: noop
      };
    }
  };
}

if (typeof window !== 'undefined') {
  var propagating = __nested_webpack_require_74331__(127);
  var Hammer = window['Hammer'] || __nested_webpack_require_74331__(128);
  module.exports = propagating(Hammer, {
    preventDefault: 'mouse'
  });
} else {
  module.exports = function () {
    return hammerMock();
  };
}

 }),
 (function(module, exports) {

module.exports = {};


 }),
 (function(module, exports, __nested_webpack_require_75352__) {

var $keys = __nested_webpack_require_75352__(65);
var enumBugKeys = __nested_webpack_require_75352__(45);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


 }),
 (function(module, exports) {

module.exports = true;


 }),
 (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


 }),
 (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


 }),
 (function(module, exports, __nested_webpack_require_76166__) {

var defined = __nested_webpack_require_76166__(39);
module.exports = function (it) {
  return Object(defined(it));
};


 }),
 (function(module, exports, __nested_webpack_require_76378__) {

module.exports = { "default": __nested_webpack_require_76378__(100), __esModule: true };

 }),
 (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


 }),
 (function(module, exports, __nested_webpack_require_76625__) {

"use strict";


var _stringify = __nested_webpack_require_76625__(23);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __nested_webpack_require_76625__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __nested_webpack_require_76625__(9);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_76625__(2);
var Queue = __nested_webpack_require_76625__(72);

function DataSet(data, options) {
  if (data && !Array.isArray(data)) {
    options = data;
    data = null;
  }

  this._options = options || {};
  this._data = {}; 
  this.length = 0; 
  this._fieldId = this._options.fieldId || 'id'; 
  this._type = {}; 

  if (this._options.type) {
    var fields = (0, _keys2['default'])(this._options.type);
    for (var i = 0, len = fields.length; i < len; i++) {
      var field = fields[i];
      var value = this._options.type[field];
      if (value == 'Date' || value == 'ISODate' || value == 'ASPDate') {
        this._type[field] = 'Date';
      } else {
        this._type[field] = value;
      }
    }
  }

  this._subscribers = {}; 

  if (data) {
    this.add(data);
  }

  this.setOptions(options);
}

DataSet.prototype.setOptions = function (options) {
  if (options && options.queue !== undefined) {
    if (options.queue === false) {
      if (this._queue) {
        this._queue.destroy();
        delete this._queue;
      }
    } else {
      if (!this._queue) {
        this._queue = Queue.extend(this, {
          replace: ['add', 'update', 'remove']
        });
      }

      if ((0, _typeof3['default'])(options.queue) === 'object') {
        this._queue.setOptions(options.queue);
      }
    }
  }
};

DataSet.prototype.on = function (event, callback) {
  var subscribers = this._subscribers[event];
  if (!subscribers) {
    subscribers = [];
    this._subscribers[event] = subscribers;
  }

  subscribers.push({
    callback: callback
  });
};

DataSet.prototype.off = function (event, callback) {
  var subscribers = this._subscribers[event];
  if (subscribers) {
    this._subscribers[event] = subscribers.filter(function (listener) {
      return listener.callback != callback;
    });
  }
};

DataSet.prototype._trigger = function (event, params, senderId) {
  if (event == '*') {
    throw new Error('Cannot trigger event *');
  }

  var subscribers = [];
  if (event in this._subscribers) {
    subscribers = subscribers.concat(this._subscribers[event]);
  }
  if ('*' in this._subscribers) {
    subscribers = subscribers.concat(this._subscribers['*']);
  }

  for (var i = 0, len = subscribers.length; i < len; i++) {
    var subscriber = subscribers[i];
    if (subscriber.callback) {
      subscriber.callback(event, params, senderId || null);
    }
  }
};

DataSet.prototype.add = function (data, senderId) {
  var addedIds = [],
      id,
      me = this;

  if (Array.isArray(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      id = me._addItem(data[i]);
      addedIds.push(id);
    }
  } else if (data && (typeof data === 'undefined' ? 'undefined' : (0, _typeof3['default'])(data)) === 'object') {
    id = me._addItem(data);
    addedIds.push(id);
  } else {
    throw new Error('Unknown dataType');
  }

  if (addedIds.length) {
    this._trigger('add', { items: addedIds }, senderId);
  }

  return addedIds;
};

DataSet.prototype.update = function (data, senderId) {
  var addedIds = [];
  var updatedIds = [];
  var oldData = [];
  var updatedData = [];
  var me = this;
  var fieldId = me._fieldId;

  var addOrUpdate = function addOrUpdate(item) {
    var id = item[fieldId];
    if (me._data[id]) {
      var oldItem = util.extend({}, me._data[id]);
      id = me._updateItem(item);
      updatedIds.push(id);
      updatedData.push(item);
      oldData.push(oldItem);
    } else {
      id = me._addItem(item);
      addedIds.push(id);
    }
  };

  if (Array.isArray(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      if (data[i] && (0, _typeof3['default'])(data[i]) === 'object') {
        addOrUpdate(data[i]);
      } else {
        console.warn('Ignoring input item, which is not an object at index ' + i);
      }
    }
  } else if (data && (typeof data === 'undefined' ? 'undefined' : (0, _typeof3['default'])(data)) === 'object') {
    addOrUpdate(data);
  } else {
    throw new Error('Unknown dataType');
  }

  if (addedIds.length) {
    this._trigger('add', { items: addedIds }, senderId);
  }
  if (updatedIds.length) {
    var props = { items: updatedIds, oldData: oldData, data: updatedData
    };this._trigger('update', props, senderId);
  }

  return addedIds.concat(updatedIds);
};

DataSet.prototype.get = function (args) {
  var me = this;

  var id, ids, options;
  var firstType = util.getType(arguments[0]);
  if (firstType == 'String' || firstType == 'Number') {
    id = arguments[0];
    options = arguments[1];
  } else if (firstType == 'Array') {
    ids = arguments[0];
    options = arguments[1];
  } else {
    options = arguments[0];
  }

  var returnType;
  if (options && options.returnType) {
    var allowedValues = ['Array', 'Object'];
    returnType = allowedValues.indexOf(options.returnType) == -1 ? 'Array' : options.returnType;
  } else {
    returnType = 'Array';
  }

  var type = options && options.type || this._options.type;
  var filter = options && options.filter;
  var items = [],
      item,
      itemIds,
      itemId,
      i,
      len;

  if (id != undefined) {
    item = me._getItem(id, type);
    if (item && filter && !filter(item)) {
      item = null;
    }
  } else if (ids != undefined) {
    for (i = 0, len = ids.length; i < len; i++) {
      item = me._getItem(ids[i], type);
      if (!filter || filter(item)) {
        items.push(item);
      }
    }
  } else {
    itemIds = (0, _keys2['default'])(this._data);
    for (i = 0, len = itemIds.length; i < len; i++) {
      itemId = itemIds[i];
      item = me._getItem(itemId, type);
      if (!filter || filter(item)) {
        items.push(item);
      }
    }
  }

  if (options && options.order && id == undefined) {
    this._sort(items, options.order);
  }

  if (options && options.fields) {
    var fields = options.fields;
    if (id != undefined) {
      item = this._filterFields(item, fields);
    } else {
      for (i = 0, len = items.length; i < len; i++) {
        items[i] = this._filterFields(items[i], fields);
      }
    }
  }

  if (returnType == 'Object') {
    var result = {},
        resultant;
    for (i = 0, len = items.length; i < len; i++) {
      resultant = items[i];
      result[resultant.id] = resultant;
    }
    return result;
  } else {
    if (id != undefined) {
      return item;
    } else {
      return items;
    }
  }
};

DataSet.prototype.getIds = function (options) {
  var data = this._data,
      filter = options && options.filter,
      order = options && options.order,
      type = options && options.type || this._options.type,
      itemIds = (0, _keys2['default'])(data),
      i,
      len,
      id,
      item,
      items,
      ids = [];

  if (filter) {
    if (order) {
      items = [];
      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        item = this._getItem(id, type);
        if (filter(item)) {
          items.push(item);
        }
      }

      this._sort(items, order);

      for (i = 0, len = items.length; i < len; i++) {
        ids.push(items[i][this._fieldId]);
      }
    } else {
      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        item = this._getItem(id, type);
        if (filter(item)) {
          ids.push(item[this._fieldId]);
        }
      }
    }
  } else {
    if (order) {
      items = [];
      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        items.push(data[id]);
      }

      this._sort(items, order);

      for (i = 0, len = items.length; i < len; i++) {
        ids.push(items[i][this._fieldId]);
      }
    } else {
      for (i = 0, len = itemIds.length; i < len; i++) {
        id = itemIds[i];
        item = data[id];
        ids.push(item[this._fieldId]);
      }
    }
  }

  return ids;
};

DataSet.prototype.getDataSet = function () {
  return this;
};

DataSet.prototype.forEach = function (callback, options) {
  var filter = options && options.filter,
      type = options && options.type || this._options.type,
      data = this._data,
      itemIds = (0, _keys2['default'])(data),
      i,
      len,
      item,
      id;

  if (options && options.order) {
    var items = this.get(options);

    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      id = item[this._fieldId];
      callback(item, id);
    }
  } else {
    for (i = 0, len = itemIds.length; i < len; i++) {
      id = itemIds[i];
      item = this._getItem(id, type);
      if (!filter || filter(item)) {
        callback(item, id);
      }
    }
  }
};

DataSet.prototype.map = function (callback, options) {
  var filter = options && options.filter,
      type = options && options.type || this._options.type,
      mappedItems = [],
      data = this._data,
      itemIds = (0, _keys2['default'])(data),
      i,
      len,
      id,
      item;

  for (i = 0, len = itemIds.length; i < len; i++) {
    id = itemIds[i];
    item = this._getItem(id, type);
    if (!filter || filter(item)) {
      mappedItems.push(callback(item, id));
    }
  }

  if (options && options.order) {
    this._sort(mappedItems, options.order);
  }

  return mappedItems;
};

DataSet.prototype._filterFields = function (item, fields) {
  if (!item) {
    return item;
  }

  var filteredItem = {},
      itemFields = (0, _keys2['default'])(item),
      len = itemFields.length,
      i,
      field;

  if (Array.isArray(fields)) {
    for (i = 0; i < len; i++) {
      field = itemFields[i];
      if (fields.indexOf(field) != -1) {
        filteredItem[field] = item[field];
      }
    }
  } else {
    for (i = 0; i < len; i++) {
      field = itemFields[i];
      if (fields.hasOwnProperty(field)) {
        filteredItem[fields[field]] = item[field];
      }
    }
  }

  return filteredItem;
};

DataSet.prototype._sort = function (items, order) {
  if (util.isString(order)) {
    var name = order; 
    items.sort(function (a, b) {
      var av = a[name];
      var bv = b[name];
      return av > bv ? 1 : av < bv ? -1 : 0;
    });
  } else if (typeof order === 'function') {
    items.sort(order);
  }
  else {
      throw new TypeError('Order must be a function or a string');
    }
};

DataSet.prototype.remove = function (id, senderId) {
  var removedIds = [],
      removedItems = [],
      ids = [],
      i,
      len,
      itemId,
      item;

  ids = Array.isArray(id) ? id : [id];

  for (i = 0, len = ids.length; i < len; i++) {
    item = this._remove(ids[i]);
    if (item) {
      itemId = item[this._fieldId];
      if (itemId != undefined) {
        removedIds.push(itemId);
        removedItems.push(item);
      }
    }
  }

  if (removedIds.length) {
    this._trigger('remove', { items: removedIds, oldData: removedItems }, senderId);
  }

  return removedIds;
};

DataSet.prototype._remove = function (id) {
  var item, ident;

  if (util.isNumber(id) || util.isString(id)) {
    ident = id;
  } else if (id && (typeof id === 'undefined' ? 'undefined' : (0, _typeof3['default'])(id)) === 'object') {
    ident = id[this._fieldId]; 
  }

  if (ident !== undefined && this._data[ident]) {
    item = this._data[ident];
    delete this._data[ident];
    this.length--;
    return item;
  }
  return null;
};

DataSet.prototype.clear = function (senderId) {
  var i, len;
  var ids = (0, _keys2['default'])(this._data);
  var items = [];

  for (i = 0, len = ids.length; i < len; i++) {
    items.push(this._data[ids[i]]);
  }

  this._data = {};
  this.length = 0;

  this._trigger('remove', { items: ids, oldData: items }, senderId);

  return ids;
};

DataSet.prototype.max = function (field) {
  var data = this._data,
      itemIds = (0, _keys2['default'])(data),
      max = null,
      maxField = null,
      i,
      len;

  for (i = 0, len = itemIds.length; i < len; i++) {
    var id = itemIds[i];
    var item = data[id];
    var itemField = item[field];
    if (itemField != null && (!max || itemField > maxField)) {
      max = item;
      maxField = itemField;
    }
  }

  return max;
};

DataSet.prototype.min = function (field) {
  var data = this._data,
      itemIds = (0, _keys2['default'])(data),
      min = null,
      minField = null,
      i,
      len;

  for (i = 0, len = itemIds.length; i < len; i++) {
    var id = itemIds[i];
    var item = data[id];
    var itemField = item[field];
    if (itemField != null && (!min || itemField < minField)) {
      min = item;
      minField = itemField;
    }
  }

  return min;
};

DataSet.prototype.distinct = function (field) {
  var data = this._data;
  var itemIds = (0, _keys2['default'])(data);
  var values = [];
  var fieldType = this._options.type && this._options.type[field] || null;
  var count = 0;
  var i, j, len;

  for (i = 0, len = itemIds.length; i < len; i++) {
    var id = itemIds[i];
    var item = data[id];
    var value = item[field];
    var exists = false;
    for (j = 0; j < count; j++) {
      if (values[j] == value) {
        exists = true;
        break;
      }
    }
    if (!exists && value !== undefined) {
      values[count] = value;
      count++;
    }
  }

  if (fieldType) {
    for (i = 0, len = values.length; i < len; i++) {
      values[i] = util.convert(values[i], fieldType);
    }
  }

  return values;
};

DataSet.prototype._addItem = function (item) {
  var id = item[this._fieldId];

  if (id != undefined) {
    if (this._data[id]) {
      throw new Error('Cannot add item: item with id ' + id + ' already exists');
    }
  } else {
    id = util.randomUUID();
    item[this._fieldId] = id;
  }

  var d = {},
      fields = (0, _keys2['default'])(item),
      i,
      len;
  for (i = 0, len = fields.length; i < len; i++) {
    var field = fields[i];
    var fieldType = this._type[field]; 
    d[field] = util.convert(item[field], fieldType);
  }
  this._data[id] = d;
  this.length++;

  return id;
};

DataSet.prototype._getItem = function (id, types) {
  var field, value, i, len;

  var raw = this._data[id];
  if (!raw) {
    return null;
  }

  var converted = {},
      fields = (0, _keys2['default'])(raw);

  if (types) {
    for (i = 0, len = fields.length; i < len; i++) {
      field = fields[i];
      value = raw[field];
      converted[field] = util.convert(value, types[field]);
    }
  } else {
    for (i = 0, len = fields.length; i < len; i++) {
      field = fields[i];
      value = raw[field];
      converted[field] = value;
    }
  }

  if (!converted[this._fieldId]) {
    converted[this._fieldId] = raw.id;
  }

  return converted;
};

DataSet.prototype._updateItem = function (item) {
  var id = item[this._fieldId];
  if (id == undefined) {
    throw new Error('Cannot update item: item has no id (item: ' + (0, _stringify2['default'])(item) + ')');
  }
  var d = this._data[id];
  if (!d) {
    throw new Error('Cannot update item: no item with id ' + id + ' found');
  }

  var fields = (0, _keys2['default'])(item);
  for (var i = 0, len = fields.length; i < len; i++) {
    var field = fields[i];
    var fieldType = this._type[field]; 
    d[field] = util.convert(item[field], fieldType);
  }

  return id;
};

module.exports = DataSet;

 }),
 (function(module, exports, __nested_webpack_require_102692__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_102692__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_102692__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_102692__(2);

var Label = __nested_webpack_require_102692__(77)['default'];
var ComponentUtil = __nested_webpack_require_102692__(35)['default'];
var Box = __nested_webpack_require_102692__(144)['default'];
var Circle = __nested_webpack_require_102692__(151)['default'];
var CircularImage = __nested_webpack_require_102692__(152)['default'];
var Database = __nested_webpack_require_102692__(153)['default'];
var Diamond = __nested_webpack_require_102692__(154)['default'];
var Dot = __nested_webpack_require_102692__(155)['default'];
var Ellipse = __nested_webpack_require_102692__(156)['default'];
var Icon = __nested_webpack_require_102692__(157)['default'];
var Image = __nested_webpack_require_102692__(158)['default'];
var Square = __nested_webpack_require_102692__(159)['default'];
var Hexagon = __nested_webpack_require_102692__(160)['default'];
var Star = __nested_webpack_require_102692__(161)['default'];
var Text = __nested_webpack_require_102692__(162)['default'];
var Triangle = __nested_webpack_require_102692__(163)['default'];
var TriangleDown = __nested_webpack_require_102692__(164)['default'];

var _require = __nested_webpack_require_102692__(54),
    printStyle = _require.printStyle;



var Node = function () {
  function Node(options, body, imagelist, grouplist, globalOptions, defaultOptions) {
    (0, _classCallCheck3['default'])(this, Node);

    this.options = util.bridgeObject(globalOptions);
    this.globalOptions = globalOptions;
    this.defaultOptions = defaultOptions;
    this.body = body;

    this.edges = []; 

    this.id = undefined;
    this.imagelist = imagelist;
    this.grouplist = grouplist;

    this.x = undefined;
    this.y = undefined;
    this.baseSize = this.options.size;
    this.baseFontSize = this.options.font.size;
    this.predefinedPosition = false; 
    this.selected = false;
    this.hover = false;

    this.labelModule = new Label(this.body, this.options, false 
    );
    this.setOptions(options);
  }



  (0, _createClass3['default'])(Node, [{
    key: 'attachEdge',
    value: function attachEdge(edge) {
      if (this.edges.indexOf(edge) === -1) {
        this.edges.push(edge);
      }
    }


  }, {
    key: 'detachEdge',
    value: function detachEdge(edge) {
      var index = this.edges.indexOf(edge);
      if (index != -1) {
        this.edges.splice(index, 1);
      }
    }


  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var currentShape = this.options.shape;
      if (!options) {
        return; 
      }

      if (options.id !== undefined) {
        this.id = options.id;
      }

      if (this.id === undefined) {
        throw new Error('Node must have an id');
      }

      Node.checkMass(options, this.id);

      if (options.x !== undefined) {
        if (options.x === null) {
          this.x = undefined;
          this.predefinedPosition = false;
        } else {
          this.x = parseInt(options.x);
          this.predefinedPosition = true;
        }
      }
      if (options.y !== undefined) {
        if (options.y === null) {
          this.y = undefined;
          this.predefinedPosition = false;
        } else {
          this.y = parseInt(options.y);
          this.predefinedPosition = true;
        }
      }
      if (options.size !== undefined) {
        this.baseSize = options.size;
      }
      if (options.value !== undefined) {
        options.value = parseFloat(options.value);
      }

      Node.parseOptions(this.options, options, true, this.globalOptions, this.grouplist);

      var pile = [options, this.options, this.defaultOptions];
      this.chooser = ComponentUtil.choosify('node', pile);

      this._load_images();
      this.updateLabelModule(options);
      this.updateShape(currentShape);

      return options.hidden !== undefined || options.physics !== undefined;
    }


  }, {
    key: '_load_images',
    value: function _load_images() {
      if (this.options.shape === 'circularImage' || this.options.shape === 'image') {
        if (this.options.image === undefined) {
          throw new Error("Option image must be defined for node type '" + this.options.shape + "'");
        }
      }

      if (this.options.image === undefined) {
        return;
      }

      if (this.imagelist === undefined) {
        throw new Error('Internal Error: No images provided');
      }

      if (typeof this.options.image === 'string') {
        this.imageObj = this.imagelist.load(this.options.image, this.options.brokenImage, this.id);
      } else {
        if (this.options.image.unselected === undefined) {
          throw new Error('No unselected image provided');
        }

        this.imageObj = this.imagelist.load(this.options.image.unselected, this.options.brokenImage, this.id);

        if (this.options.image.selected !== undefined) {
          this.imageObjAlt = this.imagelist.load(this.options.image.selected, this.options.brokenImage, this.id);
        } else {
          this.imageObjAlt = undefined;
        }
      }
    }


  }, {
    key: 'getFormattingValues',


    value: function getFormattingValues() {
      var values = {
        color: this.options.color.background,
        borderWidth: this.options.borderWidth,
        borderColor: this.options.color.border,
        size: this.options.size,
        borderDashes: this.options.shapeProperties.borderDashes,
        borderRadius: this.options.shapeProperties.borderRadius,
        shadow: this.options.shadow.enabled,
        shadowColor: this.options.shadow.color,
        shadowSize: this.options.shadow.size,
        shadowX: this.options.shadow.x,
        shadowY: this.options.shadow.y
      };
      if (this.selected || this.hover) {
        if (this.chooser === true) {
          if (this.selected) {
            values.borderWidth *= 2;
            values.color = this.options.color.highlight.background;
            values.borderColor = this.options.color.highlight.border;
            values.shadow = this.options.shadow.enabled;
          } else if (this.hover) {
            values.color = this.options.color.hover.background;
            values.borderColor = this.options.color.hover.border;
            values.shadow = this.options.shadow.enabled;
          }
        } else if (typeof this.chooser === 'function') {
          this.chooser(values, this.options.id, this.selected, this.hover);
          if (values.shadow === false) {
            if (values.shadowColor !== this.options.shadow.color || values.shadowSize !== this.options.shadow.size || values.shadowX !== this.options.shadow.x || values.shadowY !== this.options.shadow.y) {
              values.shadow = true;
            }
          }
        }
      } else {
        values.shadow = this.options.shadow.enabled;
      }
      return values;
    }


  }, {
    key: 'updateLabelModule',
    value: function updateLabelModule(options) {
      if (this.options.label === undefined || this.options.label === null) {
        this.options.label = '';
      }

      Node.updateGroupOptions(this.options, options, this.grouplist);

      var currentGroup = this.grouplist.get(this.options.group, false);
      var pile = [options, 
      this.options, 
      currentGroup, 
      this.globalOptions, 
      this.defaultOptions 
      ];
      this.labelModule.update(this.options, pile);

      if (this.labelModule.baseSize !== undefined) {
        this.baseFontSize = this.labelModule.baseSize;
      }
    }


  }, {
    key: 'updateShape',
    value: function updateShape(currentShape) {
      if (currentShape === this.options.shape && this.shape) {
        this.shape.setOptions(this.options, this.imageObj, this.imageObjAlt);
      } else {
        switch (this.options.shape) {
          case 'box':
            this.shape = new Box(this.options, this.body, this.labelModule);
            break;
          case 'circle':
            this.shape = new Circle(this.options, this.body, this.labelModule);
            break;
          case 'circularImage':
            this.shape = new CircularImage(this.options, this.body, this.labelModule, this.imageObj, this.imageObjAlt);
            break;
          case 'database':
            this.shape = new Database(this.options, this.body, this.labelModule);
            break;
          case 'diamond':
            this.shape = new Diamond(this.options, this.body, this.labelModule);
            break;
          case 'dot':
            this.shape = new Dot(this.options, this.body, this.labelModule);
            break;
          case 'ellipse':
            this.shape = new Ellipse(this.options, this.body, this.labelModule);
            break;
          case 'icon':
            this.shape = new Icon(this.options, this.body, this.labelModule);
            break;
          case 'image':
            this.shape = new Image(this.options, this.body, this.labelModule, this.imageObj, this.imageObjAlt);
            break;
          case 'square':
            this.shape = new Square(this.options, this.body, this.labelModule);
            break;
          case 'hexagon':
            this.shape = new Hexagon(this.options, this.body, this.labelModule);
            break;
          case 'star':
            this.shape = new Star(this.options, this.body, this.labelModule);
            break;
          case 'text':
            this.shape = new Text(this.options, this.body, this.labelModule);
            break;
          case 'triangle':
            this.shape = new Triangle(this.options, this.body, this.labelModule);
            break;
          case 'triangleDown':
            this.shape = new TriangleDown(this.options, this.body, this.labelModule);
            break;
          default:
            this.shape = new Ellipse(this.options, this.body, this.labelModule);
            break;
        }
      }
      this.needsRefresh();
    }


  }, {
    key: 'select',
    value: function select() {
      this.selected = true;
      this.needsRefresh();
    }


  }, {
    key: 'unselect',
    value: function unselect() {
      this.selected = false;
      this.needsRefresh();
    }


  }, {
    key: 'needsRefresh',
    value: function needsRefresh() {
      this.shape.refreshNeeded = true;
    }


  }, {
    key: 'getTitle',
    value: function getTitle() {
      return this.options.title;
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this.shape.distanceToBorder(ctx, angle);
    }


  }, {
    key: 'isFixed',
    value: function isFixed() {
      return this.options.fixed.x && this.options.fixed.y;
    }


  }, {
    key: 'isSelected',
    value: function isSelected() {
      return this.selected;
    }


  }, {
    key: 'getValue',
    value: function getValue() {
      return this.options.value;
    }


  }, {
    key: 'getLabelSize',
    value: function getLabelSize() {
      return this.labelModule.size();
    }


  }, {
    key: 'setValueRange',
    value: function setValueRange(min, max, total) {
      if (this.options.value !== undefined) {
        var scale = this.options.scaling.customScalingFunction(min, max, total, this.options.value);
        var sizeDiff = this.options.scaling.max - this.options.scaling.min;
        if (this.options.scaling.label.enabled === true) {
          var fontDiff = this.options.scaling.label.max - this.options.scaling.label.min;
          this.options.font.size = this.options.scaling.label.min + scale * fontDiff;
        }
        this.options.size = this.options.scaling.min + scale * sizeDiff;
      } else {
        this.options.size = this.baseSize;
        this.options.font.size = this.baseFontSize;
      }

      this.updateLabelModule();
    }


  }, {
    key: 'draw',
    value: function draw(ctx) {
      var values = this.getFormattingValues();
      this.shape.draw(ctx, this.x, this.y, this.selected, this.hover, values);
    }


  }, {
    key: 'updateBoundingBox',
    value: function updateBoundingBox(ctx) {
      this.shape.updateBoundingBox(this.x, this.y, ctx);
    }


  }, {
    key: 'resize',
    value: function resize(ctx) {
      var values = this.getFormattingValues();
      this.shape.resize(ctx, this.selected, this.hover, values);
    }


  }, {
    key: 'getItemsOnPoint',
    value: function getItemsOnPoint(point) {
      var ret = [];

      if (this.labelModule.visible()) {
        if (ComponentUtil.pointInRect(this.labelModule.getSize(), point)) {
          ret.push({ nodeId: this.id, labelId: 0 });
        }
      }

      if (ComponentUtil.pointInRect(this.shape.boundingBox, point)) {
        ret.push({ nodeId: this.id });
      }

      return ret;
    }


  }, {
    key: 'isOverlappingWith',
    value: function isOverlappingWith(obj) {
      return this.shape.left < obj.right && this.shape.left + this.shape.width > obj.left && this.shape.top < obj.bottom && this.shape.top + this.shape.height > obj.top;
    }


  }, {
    key: 'isBoundingBoxOverlappingWith',
    value: function isBoundingBoxOverlappingWith(obj) {
      return this.shape.boundingBox.left < obj.right && this.shape.boundingBox.right > obj.left && this.shape.boundingBox.top < obj.bottom && this.shape.boundingBox.bottom > obj.top;
    }


  }], [{
    key: 'updateGroupOptions',
    value: function updateGroupOptions(parentOptions, newOptions, groupList) {
      if (groupList === undefined) return; 

      var group = parentOptions.group;

      if (newOptions !== undefined && newOptions.group !== undefined && group !== newOptions.group) {
        throw new Error("updateGroupOptions: group values in options don't match.");
      }

      var hasGroup = typeof group === 'number' || typeof group === 'string' && group != '';
      if (!hasGroup) return; 

      var groupObj = groupList.get(group);

      var skipProperties = ['font'];
      if (newOptions !== undefined && newOptions.color !== undefined && newOptions.color != null) skipProperties.push('color');
      util.selectiveNotDeepExtend(skipProperties, parentOptions, groupObj);

      parentOptions.color = util.parseColor(parentOptions.color);
    }


  }, {
    key: 'parseOptions',
    value: function parseOptions(parentOptions, newOptions) {
      var allowDeletion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var globalOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var groupList = arguments[4];

      var fields = ['color', 'fixed', 'shadow'];
      util.selectiveNotDeepExtend(fields, parentOptions, newOptions, allowDeletion);

      Node.checkMass(newOptions);

      util.mergeOptions(parentOptions, newOptions, 'shadow', globalOptions);

      if (newOptions.color !== undefined && newOptions.color !== null) {
        var parsedColor = util.parseColor(newOptions.color);
        util.fillIfDefined(parentOptions.color, parsedColor);
      } else if (allowDeletion === true && newOptions.color === null) {
        parentOptions.color = util.bridgeObject(globalOptions.color); 
      }

      if (newOptions.fixed !== undefined && newOptions.fixed !== null) {
        if (typeof newOptions.fixed === 'boolean') {
          parentOptions.fixed.x = newOptions.fixed;
          parentOptions.fixed.y = newOptions.fixed;
        } else {
          if (newOptions.fixed.x !== undefined && typeof newOptions.fixed.x === 'boolean') {
            parentOptions.fixed.x = newOptions.fixed.x;
          }
          if (newOptions.fixed.y !== undefined && typeof newOptions.fixed.y === 'boolean') {
            parentOptions.fixed.y = newOptions.fixed.y;
          }
        }
      }

      if (allowDeletion === true && newOptions.font === null) {
        parentOptions.font = util.bridgeObject(globalOptions.font); 
      }

      Node.updateGroupOptions(parentOptions, newOptions, groupList);

      if (newOptions.scaling !== undefined) {
        util.mergeOptions(parentOptions.scaling, newOptions.scaling, 'label', globalOptions.scaling);
      }
    }
  }, {
    key: 'checkMass',
    value: function checkMass(options, id) {
      if (options.mass !== undefined && options.mass <= 0) {
        var strId = '';
        if (id !== undefined) {
          strId = ' in node id: ' + id;
        }
        console.log('%cNegative or zero mass disallowed' + strId + ', setting mass to 1.', printStyle);
        options.mass = 1;
      }
    }
  }]);
  return Node;
}();

exports['default'] = Node;

 }),
 (function(module, exports, __nested_webpack_require_127443__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __nested_webpack_require_127443__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __nested_webpack_require_127443__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_127443__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_127443__(2);


var ComponentUtil = function () {
  function ComponentUtil() {
    (0, _classCallCheck3['default'])(this, ComponentUtil);
  }

  (0, _createClass3['default'])(ComponentUtil, null, [{
    key: 'choosify',

    value: function choosify(subOption, pile) {
      var allowed = ['node', 'edge', 'label'];
      var value = true;

      var chosen = util.topMost(pile, 'chosen');
      if (typeof chosen === 'boolean') {
        value = chosen;
      } else if ((typeof chosen === 'undefined' ? 'undefined' : (0, _typeof3['default'])(chosen)) === 'object') {
        if (allowed.indexOf(subOption) === -1) {
          throw new Error("choosify: subOption '" + subOption + "' should be one of " + "'" + allowed.join("', '") + "'");
        }

        var chosenEdge = util.topMost(pile, ['chosen', subOption]);
        if (typeof chosenEdge === 'boolean' || typeof chosenEdge === 'function') {
          value = chosenEdge;
        }
      }

      return value;
    }


  }, {
    key: 'pointInRect',
    value: function pointInRect(rect, point, rotationPoint) {
      if (rect.width <= 0 || rect.height <= 0) {
        return false; 
      }

      if (rotationPoint !== undefined) {
        var tmp = {
          x: point.x - rotationPoint.x,
          y: point.y - rotationPoint.y
        };

        if (rotationPoint.angle !== 0) {
          var angle = -rotationPoint.angle;

          var tmp2 = {
            x: Math.cos(angle) * tmp.x - Math.sin(angle) * tmp.y,
            y: Math.sin(angle) * tmp.x + Math.cos(angle) * tmp.y
          };
          point = tmp2;
        } else {
          point = tmp;
        }

      }

      var right = rect.x + rect.width;
      var bottom = rect.y + rect.width;

      return rect.left < point.x && right > point.x && rect.top < point.y && bottom > point.y;
    }


  }, {
    key: 'isValidLabel',
    value: function isValidLabel(text) {
      return typeof text === 'string' && text !== '';
    }
  }]);
  return ComponentUtil;
}();

exports['default'] = ComponentUtil;

 }),
 (function(module, exports, __webpack_require__) {

"use strict";


exports.onTouch = function (hammer, callback) {
  callback.inputHandler = function (event) {
    if (event.isFirst) {
      callback(event);
    }
  };

  hammer.on('hammer.input', callback.inputHandler);
};

exports.onRelease = function (hammer, callback) {
  callback.inputHandler = function (event) {
    if (event.isFinal) {
      callback(event);
    }
  };

  return hammer.on('hammer.input', callback.inputHandler);
};

exports.offTouch = function (hammer, callback) {
  hammer.off('hammer.input', callback.inputHandler);
};

exports.offRelease = exports.offTouch;

exports.disablePreventDefaultVertically = function (pinchRecognizer) {
  var TOUCH_ACTION_PAN_Y = 'pan-y';

  pinchRecognizer.getTouchAction = function () {
    return [TOUCH_ACTION_PAN_Y];
  };

  return pinchRecognizer;
};

 }),
 (function(module, exports, __nested_webpack_require_134288__) {

__nested_webpack_require_134288__(87);
var global = __nested_webpack_require_134288__(10);
var hide = __nested_webpack_require_134288__(19);
var Iterators = __nested_webpack_require_134288__(25);
var TO_STRING_TAG = __nested_webpack_require_134288__(8)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


 }),
 (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


 }),
 (function(module, exports) {

module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


 }),
 (function(module, exports, __nested_webpack_require_135722__) {

var isObject = __nested_webpack_require_135722__(21);
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


 }),
 (function(module, exports, __nested_webpack_require_136455__) {

var anObject = __nested_webpack_require_136455__(20);
var dPs = __nested_webpack_require_136455__(92);
var enumBugKeys = __nested_webpack_require_136455__(45);
var IE_PROTO = __nested_webpack_require_136455__(43)('IE_PROTO');
var Empty = function () {  };
var PROTOTYPE = 'prototype';

var createDict = function () {
  var iframe = __nested_webpack_require_136455__(63)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_136455__(96).appendChild(iframe);
  iframe.src = 'javascript:'; 
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


 }),
 (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


 }),
 (function(module, exports, __nested_webpack_require_138254__) {

var shared = __nested_webpack_require_138254__(44)('keys');
var uid = __nested_webpack_require_138254__(29);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


 }),
 (function(module, exports, __nested_webpack_require_138500__) {

var core = __nested_webpack_require_138500__(6);
var global = __nested_webpack_require_138500__(10);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_138500__(27) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


 }),
 (function(module, exports) {

module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


 }),
 (function(module, exports, __nested_webpack_require_139231__) {

var def = __nested_webpack_require_139231__(12).f;
var has = __nested_webpack_require_139231__(14);
var TAG = __nested_webpack_require_139231__(8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


 }),
 (function(module, exports, __nested_webpack_require_139582__) {

"use strict";

var $at = __nested_webpack_require_139582__(97)(true);

__nested_webpack_require_139582__(60)(String, 'String', function (iterated) {
  this._t = String(iterated); 
  this._i = 0;                
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


 }),
 (function(module, exports, __nested_webpack_require_140190__) {

exports.f = __nested_webpack_require_140190__(8);


 }),
 (function(module, exports, __nested_webpack_require_140304__) {

var global = __nested_webpack_require_140304__(10);
var core = __nested_webpack_require_140304__(6);
var LIBRARY = __nested_webpack_require_140304__(27);
var wksExt = __nested_webpack_require_140304__(48);
var defineProperty = __nested_webpack_require_140304__(12).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


 }),
 (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


 }),
 (function(module, exports, __nested_webpack_require_140909__) {

"use strict";


var _keys = __nested_webpack_require_140909__(9);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_140909__(2);
var DataSet = __nested_webpack_require_140909__(33);

function DataView(data, options) {
  this._data = null;
  this._ids = {}; 
  this.length = 0; 
  this._options = options || {};
  this._fieldId = 'id'; 
  this._subscribers = {}; 

  var me = this;
  this.listener = function () {
    me._onEvent.apply(me, arguments);
  };

  this.setData(data);
}


DataView.prototype.setData = function (data) {
  var ids, id, i, len, items;

  if (this._data) {
    if (this._data.off) {
      this._data.off('*', this.listener);
    }

    ids = this._data.getIds({ filter: this._options && this._options.filter });
    items = [];

    for (i = 0, len = ids.length; i < len; i++) {
      items.push(this._data._data[ids[i]]);
    }

    this._ids = {};
    this.length = 0;
    this._trigger('remove', { items: ids, oldData: items });
  }

  this._data = data;

  if (this._data) {
    this._fieldId = this._options.fieldId || this._data && this._data.options && this._data.options.fieldId || 'id';

    ids = this._data.getIds({ filter: this._options && this._options.filter });
    for (i = 0, len = ids.length; i < len; i++) {
      id = ids[i];
      this._ids[id] = true;
    }
    this.length = ids.length;
    this._trigger('add', { items: ids });

    if (this._data.on) {
      this._data.on('*', this.listener);
    }
  }
};

DataView.prototype.refresh = function () {
  var id, i, len;
  var ids = this._data.getIds({
    filter: this._options && this._options.filter
  }),
      oldIds = (0, _keys2['default'])(this._ids),
      newIds = {},
      addedIds = [],
      removedIds = [],
      removedItems = [];

  for (i = 0, len = ids.length; i < len; i++) {
    id = ids[i];
    newIds[id] = true;
    if (!this._ids[id]) {
      addedIds.push(id);
      this._ids[id] = true;
    }
  }

  for (i = 0, len = oldIds.length; i < len; i++) {
    id = oldIds[i];
    if (!newIds[id]) {
      removedIds.push(id);
      removedItems.push(this._data._data[id]);
      delete this._ids[id];
    }
  }

  this.length += addedIds.length - removedIds.length;

  if (addedIds.length) {
    this._trigger('add', { items: addedIds });
  }
  if (removedIds.length) {
    this._trigger('remove', { items: removedIds, oldData: removedItems });
  }
};

DataView.prototype.get = function (args) {
  var me = this;

  var ids, options, data;
  var firstType = util.getType(arguments[0]);
  if (firstType == 'String' || firstType == 'Number' || firstType == 'Array') {
    ids = arguments[0]; 
    options = arguments[1];
    data = arguments[2];
  } else {
    options = arguments[0];
    data = arguments[1];
  }

  var viewOptions = util.extend({}, this._options, options);

  if (this._options.filter && options && options.filter) {
    viewOptions.filter = function (item) {
      return me._options.filter(item) && options.filter(item);
    };
  }

  var getArguments = [];
  if (ids != undefined) {
    getArguments.push(ids);
  }
  getArguments.push(viewOptions);
  getArguments.push(data);

  return this._data && this._data.get.apply(this._data, getArguments);
};

DataView.prototype.getIds = function (options) {
  var ids;

  if (this._data) {
    var defaultFilter = this._options.filter;
    var filter;

    if (options && options.filter) {
      if (defaultFilter) {
        filter = function filter(item) {
          return defaultFilter(item) && options.filter(item);
        };
      } else {
        filter = options.filter;
      }
    } else {
      filter = defaultFilter;
    }

    ids = this._data.getIds({
      filter: filter,
      order: options && options.order
    });
  } else {
    ids = [];
  }

  return ids;
};

DataView.prototype.map = function (callback, options) {
  var mappedItems = [];
  if (this._data) {
    var defaultFilter = this._options.filter;
    var filter;

    if (options && options.filter) {
      if (defaultFilter) {
        filter = function filter(item) {
          return defaultFilter(item) && options.filter(item);
        };
      } else {
        filter = options.filter;
      }
    } else {
      filter = defaultFilter;
    }

    mappedItems = this._data.map(callback, {
      filter: filter,
      order: options && options.order
    });
  } else {
    mappedItems = [];
  }

  return mappedItems;
};

DataView.prototype.getDataSet = function () {
  var dataSet = this;
  while (dataSet instanceof DataView) {
    dataSet = dataSet._data;
  }
  return dataSet || null;
};

DataView.prototype._onEvent = function (event, params, senderId) {
  var i, len, id, item;
  var ids = params && params.items;
  var addedIds = [],
      updatedIds = [],
      removedIds = [],
      oldItems = [],
      updatedItems = [],
      removedItems = [];

  if (ids && this._data) {
    switch (event) {
      case 'add':
        for (i = 0, len = ids.length; i < len; i++) {
          id = ids[i];
          item = this.get(id);
          if (item) {
            this._ids[id] = true;
            addedIds.push(id);
          }
        }

        break;

      case 'update':
        for (i = 0, len = ids.length; i < len; i++) {
          id = ids[i];
          item = this.get(id);

          if (item) {
            if (this._ids[id]) {
              updatedIds.push(id);
              updatedItems.push(params.data[i]);
              oldItems.push(params.oldData[i]);
            } else {
              this._ids[id] = true;
              addedIds.push(id);
            }
          } else {
            if (this._ids[id]) {
              delete this._ids[id];
              removedIds.push(id);
              removedItems.push(params.oldData[i]);
            } else {
            }
          }
        }

        break;

      case 'remove':
        for (i = 0, len = ids.length; i < len; i++) {
          id = ids[i];
          if (this._ids[id]) {
            delete this._ids[id];
            removedIds.push(id);
            removedItems.push(params.oldData[i]);
          }
        }

        break;
    }

    this.length += addedIds.length - removedIds.length;

    if (addedIds.length) {
      this._trigger('add', { items: addedIds }, senderId);
    }
    if (updatedIds.length) {
      this._trigger('update', { items: updatedIds, oldData: oldItems, data: updatedItems }, senderId);
    }
    if (removedIds.length) {
      this._trigger('remove', { items: removedIds, oldData: removedItems }, senderId);
    }
  }
};

DataView.prototype.on = DataSet.prototype.on;
DataView.prototype.off = DataSet.prototype.off;
DataView.prototype._trigger = DataSet.prototype._trigger;

DataView.prototype.subscribe = DataView.prototype.on;
DataView.prototype.unsubscribe = DataView.prototype.off;

module.exports = DataView;

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {

  function keycharm(options) {
    var preventDefault = options && options.preventDefault || false;

    var container = options && options.container || window;

    var _exportFunctions = {};
    var _bound = {keydown:{}, keyup:{}};
    var _keys = {};
    var i;

    for (i = 97; i <= 122; i++) {_keys[String.fromCharCode(i)] = {code:65 + (i - 97), shift: false};}
    for (i = 65; i <= 90; i++) {_keys[String.fromCharCode(i)] = {code:i, shift: true};}
    for (i = 0;  i <= 9;   i++) {_keys['' + i] = {code:48 + i, shift: false};}
    for (i = 1;  i <= 12;   i++) {_keys['F' + i] = {code:111 + i, shift: false};}
    for (i = 0;  i <= 9;   i++) {_keys['num' + i] = {code:96 + i, shift: false};}

    _keys['num*'] = {code:106, shift: false};
    _keys['num+'] = {code:107, shift: false};
    _keys['num-'] = {code:109, shift: false};
    _keys['num/'] = {code:111, shift: false};
    _keys['num.'] = {code:110, shift: false};
    _keys['left']  = {code:37, shift: false};
    _keys['up']    = {code:38, shift: false};
    _keys['right'] = {code:39, shift: false};
    _keys['down']  = {code:40, shift: false};
    _keys['space'] = {code:32, shift: false};
    _keys['enter'] = {code:13, shift: false};
    _keys['shift'] = {code:16, shift: undefined};
    _keys['esc']   = {code:27, shift: false};
    _keys['backspace'] = {code:8, shift: false};
    _keys['tab']       = {code:9, shift: false};
    _keys['ctrl']      = {code:17, shift: false};
    _keys['alt']       = {code:18, shift: false};
    _keys['delete']    = {code:46, shift: false};
    _keys['pageup']    = {code:33, shift: false};
    _keys['pagedown']  = {code:34, shift: false};
    _keys['=']     = {code:187, shift: false};
    _keys['-']     = {code:189, shift: false};
    _keys[']']     = {code:221, shift: false};
    _keys['[']     = {code:219, shift: false};



    var down = function(event) {handleEvent(event,'keydown');};
    var up = function(event) {handleEvent(event,'keyup');};

    var handleEvent = function(event,type) {
      if (_bound[type][event.keyCode] !== undefined) {
        var bound = _bound[type][event.keyCode];
        for (var i = 0; i < bound.length; i++) {
          if (bound[i].shift === undefined) {
            bound[i].fn(event);
          }
          else if (bound[i].shift == true && event.shiftKey == true) {
            bound[i].fn(event);
          }
          else if (bound[i].shift == false && event.shiftKey == false) {
            bound[i].fn(event);
          }
        }

        if (preventDefault == true) {
          event.preventDefault();
        }
      }
    };

    _exportFunctions.bind = function(key, callback, type) {
      if (type === undefined) {
        type = 'keydown';
      }
      if (_keys[key] === undefined) {
        throw new Error("unsupported key: " + key);
      }
      if (_bound[type][_keys[key].code] === undefined) {
        _bound[type][_keys[key].code] = [];
      }
      _bound[type][_keys[key].code].push({fn:callback, shift:_keys[key].shift});
    };


    _exportFunctions.bindAll = function(callback, type) {
      if (type === undefined) {
        type = 'keydown';
      }
      for (var key in _keys) {
        if (_keys.hasOwnProperty(key)) {
          _exportFunctions.bind(key,callback,type);
        }
      }
    };

    _exportFunctions.getKey = function(event) {
      for (var key in _keys) {
        if (_keys.hasOwnProperty(key)) {
          if (event.shiftKey == true && _keys[key].shift == true && event.keyCode == _keys[key].code) {
            return key;
          }
          else if (event.shiftKey == false && _keys[key].shift == false && event.keyCode == _keys[key].code) {
            return key;
          }
          else if (event.keyCode == _keys[key].code && key == 'shift') {
            return key;
          }
        }
      }
      return "unknown key, currently not supported";
    };

    _exportFunctions.unbind = function(key, callback, type) {
      if (type === undefined) {
        type = 'keydown';
      }
      if (_keys[key] === undefined) {
        throw new Error("unsupported key: " + key);
      }
      if (callback !== undefined) {
        var newBindings = [];
        var bound = _bound[type][_keys[key].code];
        if (bound !== undefined) {
          for (var i = 0; i < bound.length; i++) {
            if (!(bound[i].fn == callback && bound[i].shift == _keys[key].shift)) {
              newBindings.push(_bound[type][_keys[key].code][i]);
            }
          }
        }
        _bound[type][_keys[key].code] = newBindings;
      }
      else {
        _bound[type][_keys[key].code] = [];
      }
    };

    _exportFunctions.reset = function() {
      _bound = {keydown:{}, keyup:{}};
    };

    _exportFunctions.destroy = function() {
      _bound = {keydown:{}, keyup:{}};
      container.removeEventListener('keydown', down, true);
      container.removeEventListener('keyup', up, true);
    };

    container.addEventListener('keydown',down,true);
    container.addEventListener('keyup',up,true);

    return _exportFunctions;
  }

  return keycharm;
}));




 }),
 (function(module, exports, __nested_webpack_require_159436__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_159436__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_159436__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_159436__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_159436__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_159436__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _NodeBase2 = __nested_webpack_require_159436__(16);

var _NodeBase3 = _interopRequireDefault(_NodeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CircleImageBase = function (_NodeBase) {
  (0, _inherits3['default'])(CircleImageBase, _NodeBase);

  function CircleImageBase(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, CircleImageBase);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (CircleImageBase.__proto__ || (0, _getPrototypeOf2['default'])(CircleImageBase)).call(this, options, body, labelModule));

    _this.labelOffset = 0;
    _this.selected = false;
    return _this;
  }



  (0, _createClass3['default'])(CircleImageBase, [{
    key: 'setOptions',
    value: function setOptions(options, imageObj, imageObjAlt) {
      this.options = options;

      if (!(imageObj === undefined && imageObjAlt === undefined)) {
        this.setImages(imageObj, imageObjAlt);
      }
    }


  }, {
    key: 'setImages',
    value: function setImages(imageObj, imageObjAlt) {
      if (imageObjAlt && this.selected) {
        this.imageObj = imageObjAlt;
        this.imageObjAlt = imageObj;
      } else {
        this.imageObj = imageObj;
        this.imageObjAlt = imageObjAlt;
      }
    }


  }, {
    key: 'switchImages',
    value: function switchImages(selected) {
      var selection_changed = selected && !this.selected || !selected && this.selected;
      this.selected = selected; 

      if (this.imageObjAlt !== undefined && selection_changed) {
        var imageTmp = this.imageObj;
        this.imageObj = this.imageObjAlt;
        this.imageObjAlt = imageTmp;
      }
    }


  }, {
    key: '_resizeImage',
    value: function _resizeImage() {
      var width, height;

      if (this.options.shapeProperties.useImageSize === false) {
        var ratio_width = 1;
        var ratio_height = 1;

        if (this.imageObj.width && this.imageObj.height) {
          if (this.imageObj.width > this.imageObj.height) {
            ratio_width = this.imageObj.width / this.imageObj.height;
          } else {
            ratio_height = this.imageObj.height / this.imageObj.width;
          }
        }

        width = this.options.size * 2 * ratio_width;
        height = this.options.size * 2 * ratio_height;
      } else {
        width = this.imageObj.width;
        height = this.imageObj.height;
      }

      this.width = width;
      this.height = height;
      this.radius = 0.5 * this.width;
    }


  }, {
    key: '_drawRawCircle',
    value: function _drawRawCircle(ctx, x, y, values) {
      this.initContextForDraw(ctx, values);
      ctx.circle(x, y, values.size);
      this.performFill(ctx, values);
    }


  }, {
    key: '_drawImageAtPosition',
    value: function _drawImageAtPosition(ctx, values) {
      if (this.imageObj.width != 0) {
        ctx.globalAlpha = 1.0;

        this.enableShadow(ctx, values);

        var factor = 1;
        if (this.options.shapeProperties.interpolation === true) {
          factor = this.imageObj.width / this.width / this.body.view.scale;
        }

        this.imageObj.drawImageAtPosition(ctx, factor, this.left, this.top, this.width, this.height);

        this.disableShadow(ctx, values);
      }
    }


  }, {
    key: '_drawImageLabel',
    value: function _drawImageLabel(ctx, x, y, selected, hover) {
      var yLabel;
      var offset = 0;

      if (this.height !== undefined) {
        offset = this.height * 0.5;
        var labelDimensions = this.labelModule.getTextSize(ctx, selected, hover);
        if (labelDimensions.lineCount >= 1) {
          offset += labelDimensions.height / 2;
        }
      }

      yLabel = y + offset;

      if (this.options.label) {
        this.labelOffset = offset;
      }
      this.labelModule.draw(ctx, x, yLabel, selected, hover, 'hanging');
    }
  }]);
  return CircleImageBase;
}(_NodeBase3['default']);

exports['default'] = CircleImageBase;

 }),
 (function(module, exports, __nested_webpack_require_166380__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printStyle = undefined;

var _stringify = __nested_webpack_require_166380__(23);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __nested_webpack_require_166380__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __nested_webpack_require_166380__(9);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __nested_webpack_require_166380__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_166380__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_166380__(2);

var errorFound = false;
var allOptions = void 0;
var printStyle = 'background: #FFeeee; color: #dd0000';

var Validator = function () {
  function Validator() {
    (0, _classCallCheck3['default'])(this, Validator);
  }



  (0, _createClass3['default'])(Validator, null, [{
    key: 'validate',
    value: function validate(options, referenceOptions, subObject) {
      errorFound = false;
      allOptions = referenceOptions;
      var usedOptions = referenceOptions;
      if (subObject !== undefined) {
        usedOptions = referenceOptions[subObject];
      }
      Validator.parse(options, usedOptions, []);
      return errorFound;
    }


  }, {
    key: 'parse',
    value: function parse(options, referenceOptions, path) {
      for (var option in options) {
        if (options.hasOwnProperty(option)) {
          Validator.check(option, options, referenceOptions, path);
        }
      }
    }


  }, {
    key: 'check',
    value: function check(option, options, referenceOptions, path) {
      if (referenceOptions[option] === undefined && referenceOptions.__any__ === undefined) {
        Validator.getSuggestion(option, referenceOptions, path);
        return;
      }

      var referenceOption = option;
      var is_object = true;

      if (referenceOptions[option] === undefined && referenceOptions.__any__ !== undefined) {

        referenceOption = '__any__';

        is_object = Validator.getType(options[option]) === 'object';
      } else {
      }

      var refOptionObj = referenceOptions[referenceOption];
      if (is_object && refOptionObj.__type__ !== undefined) {
        refOptionObj = refOptionObj.__type__;
      }

      Validator.checkFields(option, options, referenceOptions, referenceOption, refOptionObj, path);
    }


  }, {
    key: 'checkFields',
    value: function checkFields(option, options, referenceOptions, referenceOption, refOptionObj, path) {
      var log = function log(message) {
        console.log('%c' + message + Validator.printLocation(path, option), printStyle);
      };

      var optionType = Validator.getType(options[option]);
      var refOptionType = refOptionObj[optionType];

      if (refOptionType !== undefined) {
        if (Validator.getType(refOptionType) === 'array' && refOptionType.indexOf(options[option]) === -1) {
          log('Invalid option detected in "' + option + '".' + ' Allowed values are:' + Validator.print(refOptionType) + ' not "' + options[option] + '". ');
          errorFound = true;
        } else if (optionType === 'object' && referenceOption !== '__any__') {
          path = util.copyAndExtendArray(path, option);
          Validator.parse(options[option], referenceOptions[referenceOption], path);
        }
      } else if (refOptionObj['any'] === undefined) {
        log('Invalid type received for "' + option + '". Expected: ' + Validator.print((0, _keys2['default'])(refOptionObj)) + '. Received [' + optionType + '] "' + options[option] + '"');
        errorFound = true;
      }
    }


  }, {
    key: 'getType',
    value: function getType(object) {
      var type = typeof object === 'undefined' ? 'undefined' : (0, _typeof3['default'])(object);

      if (type === 'object') {
        if (object === null) {
          return 'null';
        }
        if (object instanceof Boolean) {
          return 'boolean';
        }
        if (object instanceof Number) {
          return 'number';
        }
        if (object instanceof String) {
          return 'string';
        }
        if (Array.isArray(object)) {
          return 'array';
        }
        if (object instanceof Date) {
          return 'date';
        }
        if (object.nodeType !== undefined) {
          return 'dom';
        }
        if (object._isAMomentObject === true) {
          return 'moment';
        }
        return 'object';
      } else if (type === 'number') {
        return 'number';
      } else if (type === 'boolean') {
        return 'boolean';
      } else if (type === 'string') {
        return 'string';
      } else if (type === undefined) {
        return 'undefined';
      }
      return type;
    }


  }, {
    key: 'getSuggestion',
    value: function getSuggestion(option, options, path) {
      var localSearch = Validator.findInOptions(option, options, path, false);
      var globalSearch = Validator.findInOptions(option, allOptions, [], true);

      var localSearchThreshold = 8;
      var globalSearchThreshold = 4;

      var msg = void 0;
      if (localSearch.indexMatch !== undefined) {
        msg = ' in ' + Validator.printLocation(localSearch.path, option, '') + 'Perhaps it was incomplete? Did you mean: "' + localSearch.indexMatch + '"?\n\n';
      } else if (globalSearch.distance <= globalSearchThreshold && localSearch.distance > globalSearch.distance) {
        msg = ' in ' + Validator.printLocation(localSearch.path, option, '') + 'Perhaps it was misplaced? Matching option found at: ' + Validator.printLocation(globalSearch.path, globalSearch.closestMatch, '');
      } else if (localSearch.distance <= localSearchThreshold) {
        msg = '. Did you mean "' + localSearch.closestMatch + '"?' + Validator.printLocation(localSearch.path, option);
      } else {
        msg = '. Did you mean one of these: ' + Validator.print((0, _keys2['default'])(options)) + Validator.printLocation(path, option);
      }

      console.log('%cUnknown option detected: "' + option + '"' + msg, printStyle);
      errorFound = true;
    }


  }, {
    key: 'findInOptions',
    value: function findInOptions(option, options, path) {
      var recursive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var min = 1e9;
      var closestMatch = '';
      var closestMatchPath = [];
      var lowerCaseOption = option.toLowerCase();
      var indexMatch = undefined;
      for (var op in options) {
        var distance = void 0;
        if (options[op].__type__ !== undefined && recursive === true) {
          var result = Validator.findInOptions(option, options[op], util.copyAndExtendArray(path, op));
          if (min > result.distance) {
            closestMatch = result.closestMatch;
            closestMatchPath = result.path;
            min = result.distance;
            indexMatch = result.indexMatch;
          }
        } else {
          if (op.toLowerCase().indexOf(lowerCaseOption) !== -1) {
            indexMatch = op;
          }
          distance = Validator.levenshteinDistance(option, op);
          if (min > distance) {
            closestMatch = op;
            closestMatchPath = util.copyArray(path);
            min = distance;
          }
        }
      }
      return {
        closestMatch: closestMatch,
        path: closestMatchPath,
        distance: min,
        indexMatch: indexMatch
      };
    }


  }, {
    key: 'printLocation',
    value: function printLocation(path, option) {
      var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Problem value found at: \n';

      var str = '\n\n' + prefix + 'options = {\n';
      for (var i = 0; i < path.length; i++) {
        for (var j = 0; j < i + 1; j++) {
          str += '  ';
        }
        str += path[i] + ': {\n';
      }
      for (var _j = 0; _j < path.length + 1; _j++) {
        str += '  ';
      }
      str += option + '\n';
      for (var _i = 0; _i < path.length + 1; _i++) {
        for (var _j2 = 0; _j2 < path.length - _i; _j2++) {
          str += '  ';
        }
        str += '}\n';
      }
      return str + '\n\n';
    }


  }, {
    key: 'print',
    value: function print(options) {
      return (0, _stringify2['default'])(options).replace(/(\")|(\[)|(\])|(,"__type__")/g, '').replace(/(\,)/g, ', ');
    }


  }, {
    key: 'levenshteinDistance',
    value: function levenshteinDistance(a, b) {
      if (a.length === 0) return b.length;
      if (b.length === 0) return a.length;

      var matrix = [];

      var i;
      for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      }

      var j;
      for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      }

      for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, 
            Math.min(matrix[i][j - 1] + 1, 
            matrix[i - 1][j] + 1)); 
          }
        }
      }

      return matrix[b.length][a.length];
    }
  }]);
  return Validator;
}();

exports['default'] = Validator;
exports.printStyle = printStyle;

 }),
 (function(module, exports, __nested_webpack_require_180531__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __nested_webpack_require_180531__(23);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __nested_webpack_require_180531__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _create = __nested_webpack_require_180531__(31);

var _create2 = _interopRequireDefault(_create);

var _classCallCheck2 = __nested_webpack_require_180531__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_180531__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_180531__(2);
var Label = __nested_webpack_require_180531__(77)['default'];
var ComponentUtil = __nested_webpack_require_180531__(35)['default'];
var CubicBezierEdge = __nested_webpack_require_180531__(166)['default'];
var BezierEdgeDynamic = __nested_webpack_require_180531__(168)['default'];
var BezierEdgeStatic = __nested_webpack_require_180531__(169)['default'];
var StraightEdge = __nested_webpack_require_180531__(170)['default'];


var Edge = function () {
  function Edge(options, body, globalOptions, defaultOptions) {
    (0, _classCallCheck3['default'])(this, Edge);

    if (body === undefined) {
      throw new Error('No body provided');
    }


    this.options = util.bridgeObject(globalOptions);
    this.globalOptions = globalOptions;
    this.defaultOptions = defaultOptions;
    this.body = body;

    this.id = undefined;
    this.fromId = undefined;
    this.toId = undefined;
    this.selected = false;
    this.hover = false;
    this.labelDirty = true;

    this.baseWidth = this.options.width;
    this.baseFontSize = this.options.font.size;

    this.from = undefined; 
    this.to = undefined; 

    this.edgeType = undefined;

    this.connected = false;

    this.labelModule = new Label(this.body, this.options, true 
    );
    this.setOptions(options);
  }



  (0, _createClass3['default'])(Edge, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (!options) {
        return;
      }

      Edge.parseOptions(this.options, options, true, this.globalOptions);

      if (options.id !== undefined) {
        this.id = options.id;
      }
      if (options.from !== undefined) {
        this.fromId = options.from;
      }
      if (options.to !== undefined) {
        this.toId = options.to;
      }
      if (options.title !== undefined) {
        this.title = options.title;
      }
      if (options.value !== undefined) {
        options.value = parseFloat(options.value);
      }

      var pile = [options, this.options, this.defaultOptions];
      this.chooser = ComponentUtil.choosify('edge', pile);

      this.updateLabelModule(options);

      var dataChanged = this.updateEdgeType();

      this._setInteractionWidths();

      this.connect();

      if (options.hidden !== undefined || options.physics !== undefined) {
        dataChanged = true;
      }

      return dataChanged;
    }


  }, {
    key: 'getFormattingValues',


    value: function getFormattingValues() {
      var toArrow = this.options.arrows.to === true || this.options.arrows.to.enabled === true;
      var fromArrow = this.options.arrows.from === true || this.options.arrows.from.enabled === true;
      var middleArrow = this.options.arrows.middle === true || this.options.arrows.middle.enabled === true;
      var inheritsColor = this.options.color.inherit;
      var values = {
        toArrow: toArrow,
        toArrowScale: this.options.arrows.to.scaleFactor,
        toArrowType: this.options.arrows.to.type,
        middleArrow: middleArrow,
        middleArrowScale: this.options.arrows.middle.scaleFactor,
        middleArrowType: this.options.arrows.middle.type,
        fromArrow: fromArrow,
        fromArrowScale: this.options.arrows.from.scaleFactor,
        fromArrowType: this.options.arrows.from.type,
        arrowStrikethrough: this.options.arrowStrikethrough,
        color: inheritsColor ? undefined : this.options.color.color,
        inheritsColor: inheritsColor,
        opacity: this.options.color.opacity,
        hidden: this.options.hidden,
        length: this.options.length,
        shadow: this.options.shadow.enabled,
        shadowColor: this.options.shadow.color,
        shadowSize: this.options.shadow.size,
        shadowX: this.options.shadow.x,
        shadowY: this.options.shadow.y,
        dashes: this.options.dashes,
        width: this.options.width,
        background: this.options.background.enabled,
        backgroundColor: this.options.background.color,
        backgroundSize: this.options.background.size,
        backgroundDashes: this.options.background.dashes
      };
      if (this.selected || this.hover) {
        if (this.chooser === true) {
          if (this.selected) {
            var selectedWidth = this.options.selectionWidth;
            if (typeof selectedWidth === 'function') {
              values.width = selectedWidth(values.width);
            } else if (typeof selectedWidth === 'number') {
              values.width += selectedWidth;
            }
            values.width = Math.max(values.width, 0.3 / this.body.view.scale);
            values.color = this.options.color.highlight;
            values.shadow = this.options.shadow.enabled;
          } else if (this.hover) {
            var hoverWidth = this.options.hoverWidth;
            if (typeof hoverWidth === 'function') {
              values.width = hoverWidth(values.width);
            } else if (typeof hoverWidth === 'number') {
              values.width += hoverWidth;
            }
            values.width = Math.max(values.width, 0.3 / this.body.view.scale);
            values.color = this.options.color.hover;
            values.shadow = this.options.shadow.enabled;
          }
        } else if (typeof this.chooser === 'function') {
          this.chooser(values, this.options.id, this.selected, this.hover);
          if (values.color !== undefined) {
            values.inheritsColor = false;
          }
          if (values.shadow === false) {
            if (values.shadowColor !== this.options.shadow.color || values.shadowSize !== this.options.shadow.size || values.shadowX !== this.options.shadow.x || values.shadowY !== this.options.shadow.y) {
              values.shadow = true;
            }
          }
        }
      } else {
        values.shadow = this.options.shadow.enabled;
        values.width = Math.max(values.width, 0.3 / this.body.view.scale);
      }
      return values;
    }


  }, {
    key: 'updateLabelModule',
    value: function updateLabelModule(options) {
      var pile = [options, this.options, this.globalOptions, 
      this.defaultOptions];

      this.labelModule.update(this.options, pile);

      if (this.labelModule.baseSize !== undefined) {
        this.baseFontSize = this.labelModule.baseSize;
      }
    }


  }, {
    key: 'updateEdgeType',
    value: function updateEdgeType() {
      var smooth = this.options.smooth;
      var dataChanged = false;
      var changeInType = true;
      if (this.edgeType !== undefined) {
        if (this.edgeType instanceof BezierEdgeDynamic && smooth.enabled === true && smooth.type === 'dynamic' || this.edgeType instanceof CubicBezierEdge && smooth.enabled === true && smooth.type === 'cubicBezier' || this.edgeType instanceof BezierEdgeStatic && smooth.enabled === true && smooth.type !== 'dynamic' && smooth.type !== 'cubicBezier' || this.edgeType instanceof StraightEdge && smooth.type.enabled === false) {
          changeInType = false;
        }
        if (changeInType === true) {
          dataChanged = this.cleanup();
        }
      }
      if (changeInType === true) {
        if (smooth.enabled === true) {
          if (smooth.type === 'dynamic') {
            dataChanged = true;
            this.edgeType = new BezierEdgeDynamic(this.options, this.body, this.labelModule);
          } else if (smooth.type === 'cubicBezier') {
            this.edgeType = new CubicBezierEdge(this.options, this.body, this.labelModule);
          } else {
            this.edgeType = new BezierEdgeStatic(this.options, this.body, this.labelModule);
          }
        } else {
          this.edgeType = new StraightEdge(this.options, this.body, this.labelModule);
        }
      } else {
        this.edgeType.setOptions(this.options);
      }
      return dataChanged;
    }


  }, {
    key: 'connect',
    value: function connect() {
      this.disconnect();

      this.from = this.body.nodes[this.fromId] || undefined;
      this.to = this.body.nodes[this.toId] || undefined;
      this.connected = this.from !== undefined && this.to !== undefined;

      if (this.connected === true) {
        this.from.attachEdge(this);
        this.to.attachEdge(this);
      } else {
        if (this.from) {
          this.from.detachEdge(this);
        }
        if (this.to) {
          this.to.detachEdge(this);
        }
      }

      this.edgeType.connect();
    }


  }, {
    key: 'disconnect',
    value: function disconnect() {
      if (this.from) {
        this.from.detachEdge(this);
        this.from = undefined;
      }
      if (this.to) {
        this.to.detachEdge(this);
        this.to = undefined;
      }

      this.connected = false;
    }


  }, {
    key: 'getTitle',
    value: function getTitle() {
      return this.title;
    }


  }, {
    key: 'isSelected',
    value: function isSelected() {
      return this.selected;
    }


  }, {
    key: 'getValue',
    value: function getValue() {
      return this.options.value;
    }


  }, {
    key: 'setValueRange',
    value: function setValueRange(min, max, total) {
      if (this.options.value !== undefined) {
        var scale = this.options.scaling.customScalingFunction(min, max, total, this.options.value);
        var widthDiff = this.options.scaling.max - this.options.scaling.min;
        if (this.options.scaling.label.enabled === true) {
          var fontDiff = this.options.scaling.label.max - this.options.scaling.label.min;
          this.options.font.size = this.options.scaling.label.min + scale * fontDiff;
        }
        this.options.width = this.options.scaling.min + scale * widthDiff;
      } else {
        this.options.width = this.baseWidth;
        this.options.font.size = this.baseFontSize;
      }

      this._setInteractionWidths();
      this.updateLabelModule();
    }


  }, {
    key: '_setInteractionWidths',
    value: function _setInteractionWidths() {
      if (typeof this.options.hoverWidth === 'function') {
        this.edgeType.hoverWidth = this.options.hoverWidth(this.options.width);
      } else {
        this.edgeType.hoverWidth = this.options.hoverWidth + this.options.width;
      }
      if (typeof this.options.selectionWidth === 'function') {
        this.edgeType.selectionWidth = this.options.selectionWidth(this.options.width);
      } else {
        this.edgeType.selectionWidth = this.options.selectionWidth + this.options.width;
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx) {
      var values = this.getFormattingValues();
      if (values.hidden) {
        return;
      }

      var viaNode = this.edgeType.getViaNode();
      var arrowData = {};

      this.edgeType.fromPoint = this.edgeType.from;
      this.edgeType.toPoint = this.edgeType.to;

      if (values.fromArrow) {
        arrowData.from = this.edgeType.getArrowData(ctx, 'from', viaNode, this.selected, this.hover, values);
        if (values.arrowStrikethrough === false) this.edgeType.fromPoint = arrowData.from.core;
      }
      if (values.toArrow) {
        arrowData.to = this.edgeType.getArrowData(ctx, 'to', viaNode, this.selected, this.hover, values);
        if (values.arrowStrikethrough === false) this.edgeType.toPoint = arrowData.to.core;
      }

      if (values.middleArrow) {
        arrowData.middle = this.edgeType.getArrowData(ctx, 'middle', viaNode, this.selected, this.hover, values);
      }

      this.edgeType.drawLine(ctx, values, this.selected, this.hover, viaNode);
      this.drawArrows(ctx, arrowData, values);
      this.drawLabel(ctx, viaNode);
    }


  }, {
    key: 'drawArrows',
    value: function drawArrows(ctx, arrowData, values) {
      if (values.fromArrow) {
        this.edgeType.drawArrowHead(ctx, values, this.selected, this.hover, arrowData.from);
      }
      if (values.middleArrow) {
        this.edgeType.drawArrowHead(ctx, values, this.selected, this.hover, arrowData.middle);
      }
      if (values.toArrow) {
        this.edgeType.drawArrowHead(ctx, values, this.selected, this.hover, arrowData.to);
      }
    }


  }, {
    key: 'drawLabel',
    value: function drawLabel(ctx, viaNode) {
      if (this.options.label !== undefined) {
        var node1 = this.from;
        var node2 = this.to;

        if (this.labelModule.differentState(this.selected, this.hover)) {
          this.labelModule.getTextSize(ctx, this.selected, this.hover);
        }

        if (node1.id != node2.id) {
          this.labelModule.pointToSelf = false;
          var point = this.edgeType.getPoint(0.5, viaNode);
          ctx.save();

          var rotationPoint = this._getRotation(ctx);
          if (rotationPoint.angle != 0) {
            ctx.translate(rotationPoint.x, rotationPoint.y);
            ctx.rotate(rotationPoint.angle);
          }

          this.labelModule.draw(ctx, point.x, point.y, this.selected, this.hover);


          ctx.restore();
        } else {
          this.labelModule.pointToSelf = true;
          var x, y;
          var radius = this.options.selfReferenceSize;
          if (node1.shape.width > node1.shape.height) {
            x = node1.x + node1.shape.width * 0.5;
            y = node1.y - radius;
          } else {
            x = node1.x + radius;
            y = node1.y - node1.shape.height * 0.5;
          }
          point = this._pointOnCircle(x, y, radius, 0.125);
          this.labelModule.draw(ctx, point.x, point.y, this.selected, this.hover);
        }
      }
    }


  }, {
    key: 'getItemsOnPoint',
    value: function getItemsOnPoint(point) {
      var ret = [];

      if (this.labelModule.visible()) {
        var rotationPoint = this._getRotation();
        if (ComponentUtil.pointInRect(this.labelModule.getSize(), point, rotationPoint)) {
          ret.push({ edgeId: this.id, labelId: 0 });
        }
      }

      var obj = {
        left: point.x,
        top: point.y
      };

      if (this.isOverlappingWith(obj)) {
        ret.push({ edgeId: this.id });
      }

      return ret;
    }


  }, {
    key: 'isOverlappingWith',
    value: function isOverlappingWith(obj) {
      if (this.connected) {
        var distMax = 10;
        var xFrom = this.from.x;
        var yFrom = this.from.y;
        var xTo = this.to.x;
        var yTo = this.to.y;
        var xObj = obj.left;
        var yObj = obj.top;

        var dist = this.edgeType.getDistanceToEdge(xFrom, yFrom, xTo, yTo, xObj, yObj);

        return dist < distMax;
      } else {
        return false;
      }
    }


  }, {
    key: '_getRotation',
    value: function _getRotation(ctx) {
      var viaNode = this.edgeType.getViaNode();
      var point = this.edgeType.getPoint(0.5, viaNode);

      if (ctx !== undefined) {
        this.labelModule.calculateLabelSize(ctx, this.selected, this.hover, point.x, point.y);
      }

      var ret = {
        x: point.x,
        y: this.labelModule.size.yLine,
        angle: 0
      };

      if (!this.labelModule.visible()) {
        return ret; 
      }

      if (this.options.font.align === 'horizontal') {
        return ret; 
      }

      var dy = this.from.y - this.to.y;
      var dx = this.from.x - this.to.x;
      var angle = Math.atan2(dy, dx); 

      if (angle < -1 && dx < 0 || angle > 0 && dx < 0) {
        angle += Math.PI;
      }
      ret.angle = angle;

      return ret;
    }


  }, {
    key: '_pointOnCircle',
    value: function _pointOnCircle(x, y, radius, percentage) {
      var angle = percentage * 2 * Math.PI;
      return {
        x: x + radius * Math.cos(angle),
        y: y - radius * Math.sin(angle)
      };
    }


  }, {
    key: 'select',
    value: function select() {
      this.selected = true;
    }


  }, {
    key: 'unselect',
    value: function unselect() {
      this.selected = false;
    }


  }, {
    key: 'cleanup',
    value: function cleanup() {
      return this.edgeType.cleanup();
    }


  }, {
    key: 'remove',
    value: function remove() {
      this.cleanup();
      this.disconnect();
      delete this.body.edges[this.id];
    }


  }, {
    key: 'endPointsValid',
    value: function endPointsValid() {
      return this.body.nodes[this.fromId] !== undefined && this.body.nodes[this.toId] !== undefined;
    }
  }], [{
    key: 'parseOptions',
    value: function parseOptions(parentOptions, newOptions) {
      var allowDeletion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var globalOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var copyFromGlobals = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      var fields = ['arrowStrikethrough', 'id', 'from', 'hidden', 'hoverWidth', 'labelHighlightBold', 'length', 'line', 'opacity', 'physics', 'scaling', 'selectionWidth', 'selfReferenceSize', 'to', 'title', 'value', 'width', 'font', 'chosen', 'widthConstraint'];

      util.selectiveDeepExtend(fields, parentOptions, newOptions, allowDeletion);

      if (ComponentUtil.isValidLabel(newOptions.label)) {
        parentOptions.label = newOptions.label;
      } else {
        parentOptions.label = undefined;
      }

      util.mergeOptions(parentOptions, newOptions, 'smooth', globalOptions);
      util.mergeOptions(parentOptions, newOptions, 'shadow', globalOptions);
      util.mergeOptions(parentOptions, newOptions, 'background', globalOptions);

      if (newOptions.dashes !== undefined && newOptions.dashes !== null) {
        parentOptions.dashes = newOptions.dashes;
      } else if (allowDeletion === true && newOptions.dashes === null) {
        parentOptions.dashes = (0, _create2['default'])(globalOptions.dashes); 
      }

      if (newOptions.scaling !== undefined && newOptions.scaling !== null) {
        if (newOptions.scaling.min !== undefined) {
          parentOptions.scaling.min = newOptions.scaling.min;
        }
        if (newOptions.scaling.max !== undefined) {
          parentOptions.scaling.max = newOptions.scaling.max;
        }
        util.mergeOptions(parentOptions.scaling, newOptions.scaling, 'label', globalOptions.scaling);
      } else if (allowDeletion === true && newOptions.scaling === null) {
        parentOptions.scaling = (0, _create2['default'])(globalOptions.scaling); 
      }

      if (newOptions.arrows !== undefined && newOptions.arrows !== null) {
        if (typeof newOptions.arrows === 'string') {
          var arrows = newOptions.arrows.toLowerCase();
          parentOptions.arrows.to.enabled = arrows.indexOf('to') != -1;
          parentOptions.arrows.middle.enabled = arrows.indexOf('middle') != -1;
          parentOptions.arrows.from.enabled = arrows.indexOf('from') != -1;
        } else if ((0, _typeof3['default'])(newOptions.arrows) === 'object') {
          util.mergeOptions(parentOptions.arrows, newOptions.arrows, 'to', globalOptions.arrows);
          util.mergeOptions(parentOptions.arrows, newOptions.arrows, 'middle', globalOptions.arrows);
          util.mergeOptions(parentOptions.arrows, newOptions.arrows, 'from', globalOptions.arrows);
        } else {
          throw new Error('The arrow newOptions can only be an object or a string. Refer to the documentation. You used:' + (0, _stringify2['default'])(newOptions.arrows));
        }
      } else if (allowDeletion === true && newOptions.arrows === null) {
        parentOptions.arrows = (0, _create2['default'])(globalOptions.arrows); 
      }

      if (newOptions.color !== undefined && newOptions.color !== null) {
        var fromColor = newOptions.color;
        var toColor = parentOptions.color;

        if (copyFromGlobals) {
          util.deepExtend(toColor, globalOptions.color, false, allowDeletion);
        } else {
          for (var i in toColor) {
            if (toColor.hasOwnProperty(i)) {
              delete toColor[i];
            }
          }
        }

        if (util.isString(toColor)) {
          toColor.color = toColor;
          toColor.highlight = toColor;
          toColor.hover = toColor;
          toColor.inherit = false;
          if (fromColor.opacity === undefined) {
            toColor.opacity = 1.0; 
          }
        } else {
          var colorsDefined = false;
          if (fromColor.color !== undefined) {
            toColor.color = fromColor.color;
            colorsDefined = true;
          }
          if (fromColor.highlight !== undefined) {
            toColor.highlight = fromColor.highlight;
            colorsDefined = true;
          }
          if (fromColor.hover !== undefined) {
            toColor.hover = fromColor.hover;
            colorsDefined = true;
          }
          if (fromColor.inherit !== undefined) {
            toColor.inherit = fromColor.inherit;
          }
          if (fromColor.opacity !== undefined) {
            toColor.opacity = Math.min(1, Math.max(0, fromColor.opacity));
          }

          if (colorsDefined === true) {
            toColor.inherit = false;
          } else {
            if (toColor.inherit === undefined) {
              toColor.inherit = 'from'; 
            }
          }
        }
      } else if (allowDeletion === true && newOptions.color === null) {
        parentOptions.color = util.bridgeObject(globalOptions.color); 
      }

      if (allowDeletion === true && newOptions.font === null) {
        parentOptions.font = util.bridgeObject(globalOptions.font); 
      }
    }
  }]);
  return Edge;
}();

exports['default'] = Edge;

 }),
 (function(module, exports, __nested_webpack_require_208434__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_208434__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_208434__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_208434__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_208434__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_208434__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EdgeBase2 = __nested_webpack_require_208434__(79);

var _EdgeBase3 = _interopRequireDefault(_EdgeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BezierEdgeBase = function (_EdgeBase) {
  (0, _inherits3['default'])(BezierEdgeBase, _EdgeBase);

  function BezierEdgeBase(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, BezierEdgeBase);
    return (0, _possibleConstructorReturn3['default'])(this, (BezierEdgeBase.__proto__ || (0, _getPrototypeOf2['default'])(BezierEdgeBase)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(BezierEdgeBase, [{
    key: '_findBorderPositionBezier',
    value: function _findBorderPositionBezier(nearNode, ctx) {
      var viaNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._getViaCoordinates();

      var maxIterations = 10;
      var iteration = 0;
      var low = 0;
      var high = 1;
      var pos, angle, distanceToBorder, distanceToPoint, difference;
      var threshold = 0.2;
      var node = this.to;
      var from = false;
      if (nearNode.id === this.from.id) {
        node = this.from;
        from = true;
      }

      while (low <= high && iteration < maxIterations) {
        var middle = (low + high) * 0.5;

        pos = this.getPoint(middle, viaNode);
        angle = Math.atan2(node.y - pos.y, node.x - pos.x);
        distanceToBorder = node.distanceToBorder(ctx, angle);
        distanceToPoint = Math.sqrt(Math.pow(pos.x - node.x, 2) + Math.pow(pos.y - node.y, 2));
        difference = distanceToBorder - distanceToPoint;
        if (Math.abs(difference) < threshold) {
          break; 
        } else if (difference < 0) {
          if (from === false) {
            low = middle;
          } else {
            high = middle;
          }
        } else {
          if (from === false) {
            high = middle;
          } else {
            low = middle;
          }
        }

        iteration++;
      }
      pos.t = middle;

      return pos;
    }


  }, {
    key: '_getDistanceToBezierEdge',
    value: function _getDistanceToBezierEdge(x1, y1, x2, y2, x3, y3, via) {
      var minDistance = 1e9;
      var distance = void 0;
      var i = void 0,
          t = void 0,
          x = void 0,
          y = void 0;
      var lastX = x1;
      var lastY = y1;
      for (i = 1; i < 10; i++) {
        t = 0.1 * i;
        x = Math.pow(1 - t, 2) * x1 + 2 * t * (1 - t) * via.x + Math.pow(t, 2) * x2;
        y = Math.pow(1 - t, 2) * y1 + 2 * t * (1 - t) * via.y + Math.pow(t, 2) * y2;
        if (i > 0) {
          distance = this._getDistanceToLine(lastX, lastY, x, y, x3, y3);
          minDistance = distance < minDistance ? distance : minDistance;
        }
        lastX = x;
        lastY = y;
      }

      return minDistance;
    }


  }, {
    key: '_bezierCurve',
    value: function _bezierCurve(ctx, values, viaNode1, viaNode2) {
      var hasNode1 = viaNode1 !== undefined && viaNode1.x !== undefined;
      var hasNode2 = viaNode2 !== undefined && viaNode2.x !== undefined;

      ctx.beginPath();
      ctx.moveTo(this.fromPoint.x, this.fromPoint.y);

      if (hasNode1 && hasNode2) {
        ctx.bezierCurveTo(viaNode1.x, viaNode1.y, viaNode2.x, viaNode2.y, this.toPoint.x, this.toPoint.y);
      } else if (hasNode1) {
        ctx.quadraticCurveTo(viaNode1.x, viaNode1.y, this.toPoint.x, this.toPoint.y);
      } else {
        ctx.lineTo(this.toPoint.x, this.toPoint.y);
      }
      this.drawBackground(ctx, values);

      this.enableShadow(ctx, values);
      ctx.stroke();
      this.disableShadow(ctx, values);
    }


  }, {
    key: 'getViaNode',
    value: function getViaNode() {
      return this._getViaCoordinates();
    }
  }]);
  return BezierEdgeBase;
}(_EdgeBase3['default']);

exports['default'] = BezierEdgeBase;

 }),
 (function(module, exports, __nested_webpack_require_214899__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_214899__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_214899__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_214899__(2);


var NetworkUtil = function () {
  function NetworkUtil() {
    (0, _classCallCheck3['default'])(this, NetworkUtil);
  }



  (0, _createClass3['default'])(NetworkUtil, null, [{
    key: 'getRange',
    value: function getRange(allNodes) {
      var specificNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var minY = 1e9,
          maxY = -1e9,
          minX = 1e9,
          maxX = -1e9,
          node;
      if (specificNodes.length > 0) {
        for (var i = 0; i < specificNodes.length; i++) {
          node = allNodes[specificNodes[i]];
          if (minX > node.shape.boundingBox.left) {
            minX = node.shape.boundingBox.left;
          }
          if (maxX < node.shape.boundingBox.right) {
            maxX = node.shape.boundingBox.right;
          }
          if (minY > node.shape.boundingBox.top) {
            minY = node.shape.boundingBox.top;
          } 
          if (maxY < node.shape.boundingBox.bottom) {
            maxY = node.shape.boundingBox.bottom;
          } 
        }
      }

      if (minX === 1e9 && maxX === -1e9 && minY === 1e9 && maxY === -1e9) {
        ;minY = 0, maxY = 0, minX = 0, maxX = 0;
      }
      return { minX: minX, maxX: maxX, minY: minY, maxY: maxY };
    }


  }, {
    key: 'getRangeCore',
    value: function getRangeCore(allNodes) {
      var specificNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var minY = 1e9,
          maxY = -1e9,
          minX = 1e9,
          maxX = -1e9,
          node;
      if (specificNodes.length > 0) {
        for (var i = 0; i < specificNodes.length; i++) {
          node = allNodes[specificNodes[i]];
          if (minX > node.x) {
            minX = node.x;
          }
          if (maxX < node.x) {
            maxX = node.x;
          }
          if (minY > node.y) {
            minY = node.y;
          } 
          if (maxY < node.y) {
            maxY = node.y;
          } 
        }
      }

      if (minX === 1e9 && maxX === -1e9 && minY === 1e9 && maxY === -1e9) {
        ;minY = 0, maxY = 0, minX = 0, maxX = 0;
      }
      return { minX: minX, maxX: maxX, minY: minY, maxY: maxY };
    }


  }, {
    key: 'findCenter',
    value: function findCenter(range) {
      return {
        x: 0.5 * (range.maxX + range.minX),
        y: 0.5 * (range.maxY + range.minY)
      };
    }


  }, {
    key: 'cloneOptions',
    value: function cloneOptions(item, type) {
      var clonedOptions = {};
      if (type === undefined || type === 'node') {
        util.deepExtend(clonedOptions, item.options, true);
        clonedOptions.x = item.x;
        clonedOptions.y = item.y;
        clonedOptions.amountOfConnections = item.edges.length;
      } else {
        util.deepExtend(clonedOptions, item.options, true);
      }
      return clonedOptions;
    }
  }]);
  return NetworkUtil;
}();

exports['default'] = NetworkUtil;

 }),
 (function(module, exports, __nested_webpack_require_219462__) {

module.exports = { "default": __nested_webpack_require_219462__(86), __esModule: true };

 }),
 (function(module, exports, __nested_webpack_require_219614__) {

var cof = __nested_webpack_require_219614__(38);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


 }),
 (function(module, exports, __nested_webpack_require_219987__) {

"use strict";

var LIBRARY = __nested_webpack_require_219987__(27);
var $export = __nested_webpack_require_219987__(11);
var redefine = __nested_webpack_require_219987__(64);
var hide = __nested_webpack_require_219987__(19);
var Iterators = __nested_webpack_require_219987__(25);
var $iterCreate = __nested_webpack_require_219987__(91);
var setToStringTag = __nested_webpack_require_219987__(46);
var getPrototypeOf = __nested_webpack_require_219987__(66);
var ITERATOR = __nested_webpack_require_219987__(8)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); 
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


 }),
 (function(module, exports, __nested_webpack_require_222850__) {

var aFunction = __nested_webpack_require_222850__(90);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function () {
    return fn.apply(that, arguments);
  };
};


 }),
 (function(module, exports, __nested_webpack_require_223447__) {

module.exports = !__nested_webpack_require_223447__(13) && !__nested_webpack_require_223447__(22)(function () {
  return Object.defineProperty(__nested_webpack_require_223447__(63)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


 }),
 (function(module, exports, __nested_webpack_require_223725__) {

var isObject = __nested_webpack_require_223725__(21);
var document = __nested_webpack_require_223725__(10).document;
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


 }),
 (function(module, exports, __nested_webpack_require_224095__) {

module.exports = __nested_webpack_require_224095__(19);


 }),
 (function(module, exports, __nested_webpack_require_224215__) {

var has = __nested_webpack_require_224215__(14);
var toIObject = __nested_webpack_require_224215__(18);
var arrayIndexOf = __nested_webpack_require_224215__(93)(false);
var IE_PROTO = __nested_webpack_require_224215__(43)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


 }),
 (function(module, exports, __nested_webpack_require_224829__) {

var has = __nested_webpack_require_224829__(14);
var toObject = __nested_webpack_require_224829__(30);
var IE_PROTO = __nested_webpack_require_224829__(43)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


 }),
 (function(module, exports, __nested_webpack_require_225405__) {

var cof = __nested_webpack_require_225405__(38);
var TAG = __nested_webpack_require_225405__(8)('toStringTag');
var ARG = cof(function () { return arguments; }()) == 'Arguments';

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) {  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    : ARG ? cof(O)
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


 }),
 (function(module, exports, __nested_webpack_require_226212__) {

var $export = __nested_webpack_require_226212__(11);
var core = __nested_webpack_require_226212__(6);
var fails = __nested_webpack_require_226212__(22);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


 }),
 (function(module, exports, __nested_webpack_require_226671__) {

var $keys = __nested_webpack_require_226671__(65);
var hiddenKeys = __nested_webpack_require_226671__(45).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


 }),
 (function(module, exports, __nested_webpack_require_227022__) {

var pIE = __nested_webpack_require_227022__(32);
var createDesc = __nested_webpack_require_227022__(28);
var toIObject = __nested_webpack_require_227022__(18);
var toPrimitive = __nested_webpack_require_227022__(40);
var has = __nested_webpack_require_227022__(14);
var IE8_DOM_DEFINE = __nested_webpack_require_227022__(62);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __nested_webpack_require_227022__(13) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


 }),
 (function(module, exports, __nested_webpack_require_227667__) {

"use strict";


module.exports = typeof window !== 'undefined' && window['moment'] || __nested_webpack_require_227667__(116);

 }),
 (function(module, exports, __webpack_require__) {

"use strict";


function Queue(options) {
  this.delay = null;
  this.max = Infinity;

  this._queue = [];
  this._timeout = null;
  this._extended = null;

  this.setOptions(options);
}

Queue.prototype.setOptions = function (options) {
  if (options && typeof options.delay !== 'undefined') {
    this.delay = options.delay;
  }
  if (options && typeof options.max !== 'undefined') {
    this.max = options.max;
  }

  this._flushIfNeeded();
};

Queue.extend = function (object, options) {
  var queue = new Queue(options);

  if (object.flush !== undefined) {
    throw new Error('Target object already has a property flush');
  }
  object.flush = function () {
    queue.flush();
  };

  var methods = [{
    name: 'flush',
    original: undefined
  }];

  if (options && options.replace) {
    for (var i = 0; i < options.replace.length; i++) {
      var name = options.replace[i];
      methods.push({
        name: name,
        original: object[name]
      });
      queue.replace(object, name);
    }
  }

  queue._extended = {
    object: object,
    methods: methods
  };

  return queue;
};

Queue.prototype.destroy = function () {
  this.flush();

  if (this._extended) {
    var object = this._extended.object;
    var methods = this._extended.methods;
    for (var i = 0; i < methods.length; i++) {
      var method = methods[i];
      if (method.original) {
        object[method.name] = method.original;
      } else {
        delete object[method.name];
      }
    }
    this._extended = null;
  }
};

Queue.prototype.replace = function (object, method) {
  var me = this;
  var original = object[method];
  if (!original) {
    throw new Error('Method ' + method + ' undefined');
  }

  object[method] = function () {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    me.queue({
      args: args,
      fn: original,
      context: this
    });
  };
};

Queue.prototype.queue = function (entry) {
  if (typeof entry === 'function') {
    this._queue.push({ fn: entry });
  } else {
    this._queue.push(entry);
  }

  this._flushIfNeeded();
};

Queue.prototype._flushIfNeeded = function () {
  if (this._queue.length > this.max) {
    this.flush();
  }

  clearTimeout(this._timeout);
  if (this.queue.length > 0 && typeof this.delay === 'number') {
    var me = this;
    this._timeout = setTimeout(function () {
      me.flush();
    }, this.delay);
  }
};

Queue.prototype.flush = function () {
  while (this._queue.length > 0) {
    var entry = this._queue.shift();
    entry.fn.apply(entry.context || entry.fn, entry.args || []);
  }
};

module.exports = Queue;

 }),
 (function(module, exports) {



module.exports = Emitter;


function Emitter(obj) {
  if (obj) return mixin(obj);
};


function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}


Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};


Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};


Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};


Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};


Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};


Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


 }),
 (function(module, exports, __nested_webpack_require_236714__) {

"use strict";


var _create = __nested_webpack_require_236714__(31);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function parseDOT(data) {
  dot = data;
  return parseGraph();
}

var NODE_ATTR_MAPPING = {
  fontsize: 'font.size',
  fontcolor: 'font.color',
  labelfontcolor: 'font.color',
  fontname: 'font.face',
  color: ['color.border', 'color.background'],
  fillcolor: 'color.background',
  tooltip: 'title',
  labeltooltip: 'title'
};
var EDGE_ATTR_MAPPING = (0, _create2['default'])(NODE_ATTR_MAPPING);
EDGE_ATTR_MAPPING.color = 'color.color';
EDGE_ATTR_MAPPING.style = 'dashes';

var TOKENTYPE = {
  NULL: 0,
  DELIMITER: 1,
  IDENTIFIER: 2,
  UNKNOWN: 3

};var DELIMITERS = {
  '{': true,
  '}': true,
  '[': true,
  ']': true,
  ';': true,
  '=': true,
  ',': true,

  '->': true,
  '--': true
};

var dot = ''; 
var index = 0; 
var c = ''; 
var token = ''; 
var tokenType = TOKENTYPE.NULL; 

function first() {
  index = 0;
  c = dot.charAt(0);
}

function next() {
  index++;
  c = dot.charAt(index);
}

function nextPreview() {
  return dot.charAt(index + 1);
}

var regexAlphaNumeric = /[a-zA-Z_0-9.:#]/;
function isAlphaNumeric(c) {
  return regexAlphaNumeric.test(c);
}

function merge(a, b) {
  if (!a) {
    a = {};
  }

  if (b) {
    for (var name in b) {
      if (b.hasOwnProperty(name)) {
        a[name] = b[name];
      }
    }
  }
  return a;
}

function setValue(obj, path, value) {
  var keys = path.split('.');
  var o = obj;
  while (keys.length) {
    var key = keys.shift();
    if (keys.length) {
      if (!o[key]) {
        o[key] = {};
      }
      o = o[key];
    } else {
      o[key] = value;
    }
  }
}

function addNode(graph, node) {
  var i, len;
  var current = null;

  var graphs = [graph]; 
  var root = graph;
  while (root.parent) {
    graphs.push(root.parent);
    root = root.parent;
  }

  if (root.nodes) {
    for (i = 0, len = root.nodes.length; i < len; i++) {
      if (node.id === root.nodes[i].id) {
        current = root.nodes[i];
        break;
      }
    }
  }

  if (!current) {
    current = {
      id: node.id
    };
    if (graph.node) {
      current.attr = merge(current.attr, graph.node);
    }
  }

  for (i = graphs.length - 1; i >= 0; i--) {
    var g = graphs[i];

    if (!g.nodes) {
      g.nodes = [];
    }
    if (g.nodes.indexOf(current) === -1) {
      g.nodes.push(current);
    }
  }

  if (node.attr) {
    current.attr = merge(current.attr, node.attr);
  }
}

function addEdge(graph, edge) {
  if (!graph.edges) {
    graph.edges = [];
  }
  graph.edges.push(edge);
  if (graph.edge) {
    var attr = merge({}, graph.edge); 
    edge.attr = merge(attr, edge.attr); 
  }
}

function createEdge(graph, from, to, type, attr) {
  var edge = {
    from: from,
    to: to,
    type: type
  };

  if (graph.edge) {
    edge.attr = merge({}, graph.edge); 
  }
  edge.attr = merge(edge.attr || {}, attr); 

  if (attr != null) {
    if (attr.hasOwnProperty('arrows')) {
      edge['arrows'] = { to: { enabled: true, type: attr.arrows.type } };
      attr['arrows'] = null;
    }
  }
  return edge;
}

function getToken() {
  tokenType = TOKENTYPE.NULL;
  token = '';

  while (c === ' ' || c === '\t' || c === '\n' || c === '\r') {
    next();
  }

  do {
    var isComment = false;

    if (c === '#') {
      var i = index - 1;
      while (dot.charAt(i) === ' ' || dot.charAt(i) === '\t') {
        i--;
      }
      if (dot.charAt(i) === '\n' || dot.charAt(i) === '') {
        while (c != '' && c != '\n') {
          next();
        }
        isComment = true;
      }
    }
    if (c === '/' && nextPreview() === '/') {
      while (c != '' && c != '\n') {
        next();
      }
      isComment = true;
    }
    if (c === '/' && nextPreview() === '*') {
      while (c != '') {
        if (c === '*' && nextPreview() === '/') {
          next();
          next();
          break;
        } else {
          next();
        }
      }
      isComment = true;
    }

    while (c === ' ' || c === '\t' || c === '\n' || c === '\r') {
      next();
    }
  } while (isComment);

  if (c === '') {
    tokenType = TOKENTYPE.DELIMITER;
    return;
  }

  var c2 = c + nextPreview();
  if (DELIMITERS[c2]) {
    tokenType = TOKENTYPE.DELIMITER;
    token = c2;
    next();
    next();
    return;
  }

  if (DELIMITERS[c]) {
    tokenType = TOKENTYPE.DELIMITER;
    token = c;
    next();
    return;
  }

  if (isAlphaNumeric(c) || c === '-') {
    token += c;
    next();

    while (isAlphaNumeric(c)) {
      token += c;
      next();
    }
    if (token === 'false') {
      token = false; 
    } else if (token === 'true') {
      token = true; 
    } else if (!isNaN(Number(token))) {
      token = Number(token); 
    }
    tokenType = TOKENTYPE.IDENTIFIER;
    return;
  }

  if (c === '"') {
    next();
    while (c != '' && (c != '"' || c === '"' && nextPreview() === '"')) {
      if (c === '"') {
        token += c;
        next();
      } else if (c === '\\' && nextPreview() === 'n') {
        token += '\n';
        next();
      } else {
        token += c;
      }
      next();
    }
    if (c != '"') {
      throw newSyntaxError('End of string " expected');
    }
    next();
    tokenType = TOKENTYPE.IDENTIFIER;
    return;
  }

  tokenType = TOKENTYPE.UNKNOWN;
  while (c != '') {
    token += c;
    next();
  }
  throw new SyntaxError('Syntax error in part "' + chop(token, 30) + '"');
}

function parseGraph() {
  var graph = {};

  first();
  getToken();

  if (token === 'strict') {
    graph.strict = true;
    getToken();
  }

  if (token === 'graph' || token === 'digraph') {
    graph.type = token;
    getToken();
  }

  if (tokenType === TOKENTYPE.IDENTIFIER) {
    graph.id = token;
    getToken();
  }

  if (token != '{') {
    throw newSyntaxError('Angle bracket { expected');
  }
  getToken();

  parseStatements(graph);

  if (token != '}') {
    throw newSyntaxError('Angle bracket } expected');
  }
  getToken();

  if (token !== '') {
    throw newSyntaxError('End of file expected');
  }
  getToken();

  delete graph.node;
  delete graph.edge;
  delete graph.graph;

  return graph;
}

function parseStatements(graph) {
  while (token !== '' && token != '}') {
    parseStatement(graph);
    if (token === ';') {
      getToken();
    }
  }
}

function parseStatement(graph) {
  var subgraph = parseSubgraph(graph);
  if (subgraph) {
    parseEdge(graph, subgraph);

    return;
  }

  var attr = parseAttributeStatement(graph);
  if (attr) {
    return;
  }

  if (tokenType != TOKENTYPE.IDENTIFIER) {
    throw newSyntaxError('Identifier expected');
  }
  var id = token; 
  getToken();

  if (token === '=') {
    getToken();
    if (tokenType != TOKENTYPE.IDENTIFIER) {
      throw newSyntaxError('Identifier expected');
    }
    graph[id] = token;
    getToken();
  } else {
    parseNodeStatement(graph, id);
  }
}

function parseSubgraph(graph) {
  var subgraph = null;

  if (token === 'subgraph') {
    subgraph = {};
    subgraph.type = 'subgraph';
    getToken();

    if (tokenType === TOKENTYPE.IDENTIFIER) {
      subgraph.id = token;
      getToken();
    }
  }

  if (token === '{') {
    getToken();

    if (!subgraph) {
      subgraph = {};
    }
    subgraph.parent = graph;
    subgraph.node = graph.node;
    subgraph.edge = graph.edge;
    subgraph.graph = graph.graph;

    parseStatements(subgraph);

    if (token != '}') {
      throw newSyntaxError('Angle bracket } expected');
    }
    getToken();

    delete subgraph.node;
    delete subgraph.edge;
    delete subgraph.graph;
    delete subgraph.parent;

    if (!graph.subgraphs) {
      graph.subgraphs = [];
    }
    graph.subgraphs.push(subgraph);
  }

  return subgraph;
}

function parseAttributeStatement(graph) {
  if (token === 'node') {
    getToken();

    graph.node = parseAttributeList();
    return 'node';
  } else if (token === 'edge') {
    getToken();

    graph.edge = parseAttributeList();
    return 'edge';
  } else if (token === 'graph') {
    getToken();

    graph.graph = parseAttributeList();
    return 'graph';
  }

  return null;
}

function parseNodeStatement(graph, id) {
  var node = {
    id: id
  };
  var attr = parseAttributeList();
  if (attr) {
    node.attr = attr;
  }
  addNode(graph, node);

  parseEdge(graph, id);
}

function parseEdge(graph, from) {
  while (token === '->' || token === '--') {
    var to;
    var type = token;
    getToken();

    var subgraph = parseSubgraph(graph);
    if (subgraph) {
      to = subgraph;
    } else {
      if (tokenType != TOKENTYPE.IDENTIFIER) {
        throw newSyntaxError('Identifier or subgraph expected');
      }
      to = token;
      addNode(graph, {
        id: to
      });
      getToken();
    }

    var attr = parseAttributeList();

    var edge = createEdge(graph, from, to, type, attr);
    addEdge(graph, edge);

    from = to;
  }
}

function parseDirAttribute(attr_names, attr_list) {
  var i;
  if (attr_names.includes('dir')) {
    var idx = {}; 
    idx.arrows = {};
    for (i = 0; i < attr_list.length; i++) {
      if (attr_list[i].name === 'arrows') {
        if (attr_list[i].value.to != null) {
          idx.arrows.to = i;
        } else if (attr_list[i].value.from != null) {
          idx.arrows.from = i;
        } else {
          throw newSyntaxError('Invalid value of arrows');
        }
      } else if (attr_list[i].name === 'dir') {
        idx.dir = i;
      }
    }

    var dir_type = attr_list[idx.dir].value;
    if (!attr_names.includes('arrows')) {
      if (dir_type === 'both') {
        attr_list.push({
          attr: attr_list[idx.dir].attr,
          name: 'arrows',
          value: { to: { enabled: true } }
        });
        idx.arrows.to = attr_list.length - 1;
        attr_list.push({
          attr: attr_list[idx.dir].attr,
          name: 'arrows',
          value: { from: { enabled: true } }
        });
        idx.arrows.from = attr_list.length - 1;
      } else if (dir_type === 'forward') {
        attr_list.push({
          attr: attr_list[idx.dir].attr,
          name: 'arrows',
          value: { to: { enabled: true } }
        });
        idx.arrows.to = attr_list.length - 1;
      } else if (dir_type === 'back') {
        attr_list.push({
          attr: attr_list[idx.dir].attr,
          name: 'arrows',
          value: { from: { enabled: true } }
        });
        idx.arrows.from = attr_list.length - 1;
      } else if (dir_type === 'none') {
        attr_list.push({
          attr: attr_list[idx.dir].attr,
          name: 'arrows',
          value: ''
        });
        idx.arrows.to = attr_list.length - 1;
      } else {
        throw newSyntaxError('Invalid dir type "' + dir_type + '"');
      }
    }

    var from_type;
    var to_type;
    if (dir_type === 'both') {
      if (idx.arrows.to && idx.arrows.from) {
        to_type = attr_list[idx.arrows.to].value.to.type;
        from_type = attr_list[idx.arrows.from].value.from.type;
        attr_list[idx.arrows.to] = {
          attr: attr_list[idx.arrows.to].attr,
          name: attr_list[idx.arrows.to].name,
          value: {
            to: { enabled: true, type: to_type },
            from: { enabled: true, type: from_type }
          }
        };
        attr_list.splice(idx.arrows.from, 1);

      } else if (idx.arrows.to) {
        to_type = attr_list[idx.arrows.to].value.to.type;
        from_type = 'arrow';
        attr_list[idx.arrows.to] = {
          attr: attr_list[idx.arrows.to].attr,
          name: attr_list[idx.arrows.to].name,
          value: {
            to: { enabled: true, type: to_type },
            from: { enabled: true, type: from_type }
          }

        };
      } else if (idx.arrows.from) {
        to_type = 'arrow';
        from_type = attr_list[idx.arrows.from].value.from.type;
        attr_list[idx.arrows.from] = {
          attr: attr_list[idx.arrows.from].attr,
          name: attr_list[idx.arrows.from].name,
          value: {
            to: { enabled: true, type: to_type },
            from: { enabled: true, type: from_type }
          }
        };
      }
    } else if (dir_type === 'back') {
      if (idx.arrows.to && idx.arrows.from) {
        to_type = '';
        from_type = attr_list[idx.arrows.from].value.from.type;
        attr_list[idx.arrows.from] = {
          attr: attr_list[idx.arrows.from].attr,
          name: attr_list[idx.arrows.from].name,
          value: {
            to: { enabled: true, type: to_type },
            from: { enabled: true, type: from_type }
          }

        };
      } else if (idx.arrows.to) {
        to_type = '';
        from_type = 'arrow';
        idx.arrows.from = idx.arrows.to;
        attr_list[idx.arrows.from] = {
          attr: attr_list[idx.arrows.from].attr,
          name: attr_list[idx.arrows.from].name,
          value: {
            to: { enabled: true, type: to_type },
            from: { enabled: true, type: from_type }
          }

        };
      } else if (idx.arrows.from) {
        to_type = '';
        from_type = attr_list[idx.arrows.from].value.from.type;
        attr_list[idx.arrows.to] = {
          attr: attr_list[idx.arrows.from].attr,
          name: attr_list[idx.arrows.from].name,
          value: {
            to: { enabled: true, type: to_type },
            from: { enabled: true, type: from_type }
          }
        };
      }

      attr_list[idx.arrows.from] = {
        attr: attr_list[idx.arrows.from].attr,
        name: attr_list[idx.arrows.from].name,
        value: {
          from: {
            enabled: true,
            type: attr_list[idx.arrows.from].value.from.type
          }
        }
      };
    } else if (dir_type === 'none') {
      var idx_arrow;
      if (idx.arrows.to) {
        idx_arrow = idx.arrows.to;
      } else {
        idx_arrow = idx.arrows.from;
      }

      attr_list[idx_arrow] = {
        attr: attr_list[idx_arrow].attr,
        name: attr_list[idx_arrow].name,
        value: ''
      };
    } else if (dir_type === 'forward') {
      if (idx.arrows.to && idx.arrows.from) {
        to_type = attr_list[idx.arrows.to].value.to.type;
        from_type = '';
        attr_list[idx.arrows.to] = {
          attr: attr_list[idx.arrows.to].attr,
          name: attr_list[idx.arrows.to].name,
          value: {
            to: { enabled: true, type: to_type },
            from: { enabled: true, type: from_type }
          }

        };
      } else if (idx.arrows.to) {
        to_type = attr_list[idx.arrows.to].value.to.type;
        from_type = '';
        attr_list[idx.arrows.to] = {
          attr: attr_list[idx.arrows.to].attr,
          name: attr_list[idx.arrows.to].name,
          value: {
            to: { enabled: true, type: to_type },
            from: { enabled: true, type: from_type }
          }

        };
      } else if (idx.arrows.from) {
        to_type = 'arrow';
        from_type = '';
        idx.arrows.to = idx.arrows.from;
        attr_list[idx.arrows.to] = {
          attr: attr_list[idx.arrows.to].attr,
          name: attr_list[idx.arrows.to].name,
          value: {
            to: { enabled: true, type: to_type },
            from: { enabled: true, type: from_type }
          }
        };
      }

      attr_list[idx.arrows.to] = {
        attr: attr_list[idx.arrows.to].attr,
        name: attr_list[idx.arrows.to].name,
        value: {
          to: {
            enabled: true,
            type: attr_list[idx.arrows.to].value.to.type
          }
        }
      };
    } else {
      throw newSyntaxError('Invalid dir type "' + dir_type + '"');
    }

    attr_list.splice(idx.dir, 1);
  }
  return attr_list;
}

function parseAttributeList() {
  var i;
  var attr = null;

  var edgeStyles = {
    dashed: true,
    solid: false,
    dotted: [1, 5]

  };var arrowTypes = {
    dot: 'circle',
    box: 'box',
    crow: 'crow',
    curve: 'curve',
    icurve: 'inv_curve',
    normal: 'triangle',
    inv: 'inv_triangle',
    diamond: 'diamond',
    tee: 'bar',
    vee: 'vee'

  };var attr_list = new Array();
  var attr_names = new Array(); 

  while (token === '[') {
    getToken();
    attr = {};
    while (token !== '' && token != ']') {
      if (tokenType != TOKENTYPE.IDENTIFIER) {
        throw newSyntaxError('Attribute name expected');
      }
      var name = token;

      getToken();
      if (token != '=') {
        throw newSyntaxError('Equal sign = expected');
      }
      getToken();

      if (tokenType != TOKENTYPE.IDENTIFIER) {
        throw newSyntaxError('Attribute value expected');
      }
      var value = token;

      if (name === 'style') {
        value = edgeStyles[value];
      }

      var arrowType;
      if (name === 'arrowhead') {
        arrowType = arrowTypes[value];
        name = 'arrows';
        value = { to: { enabled: true, type: arrowType } };
      }

      if (name === 'arrowtail') {
        arrowType = arrowTypes[value];
        name = 'arrows';
        value = { from: { enabled: true, type: arrowType } };
      }

      attr_list.push({ attr: attr, name: name, value: value });
      attr_names.push(name);

      getToken();
      if (token == ',') {
        getToken();
      }
    }

    if (token != ']') {
      throw newSyntaxError('Bracket ] expected');
    }
    getToken();
  }

  attr_list = parseDirAttribute(attr_names, attr_list);

  var nof_attr_list;
  if (attr_names.includes('penwidth')) {
    var tmp_attr_list = [];

    nof_attr_list = attr_list.length;
    for (i = 0; i < nof_attr_list; i++) {
      if (attr_list[i].name !== 'width') {
        if (attr_list[i].name === 'penwidth') {
          attr_list[i].name = 'width';
        }
        tmp_attr_list.push(attr_list[i]);
      }
    }
    attr_list = tmp_attr_list;
  }

  nof_attr_list = attr_list.length;
  for (i = 0; i < nof_attr_list; i++) {
    setValue(attr_list[i].attr, attr_list[i].name, attr_list[i].value);
  }

  return attr;
}

function newSyntaxError(message) {
  return new SyntaxError(message + ', got "' + chop(token, 30) + '" (char ' + index + ')');
}

function chop(text, maxLength) {
  return text.length <= maxLength ? text : text.substr(0, 27) + '...';
}

function forEach2(array1, array2, fn) {
  if (Array.isArray(array1)) {
    array1.forEach(function (elem1) {
      if (Array.isArray(array2)) {
        array2.forEach(function (elem2) {
          fn(elem1, elem2);
        });
      } else {
        fn(elem1, array2);
      }
    });
  } else {
    if (Array.isArray(array2)) {
      array2.forEach(function (elem2) {
        fn(array1, elem2);
      });
    } else {
      fn(array1, array2);
    }
  }
}

function setProp(object, path, value) {
  var names = path.split('.');
  var prop = names.pop();

  var obj = object;
  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    if (!(name in obj)) {
      obj[name] = {};
    }
    obj = obj[name];
  }

  obj[prop] = value;

  return object;
}

function convertAttr(attr, mapping) {
  var converted = {};

  for (var prop in attr) {
    if (attr.hasOwnProperty(prop)) {
      var visProp = mapping[prop];
      if (Array.isArray(visProp)) {
        visProp.forEach(function (visPropI) {
          setProp(converted, visPropI, attr[prop]);
        });
      } else if (typeof visProp === 'string') {
        setProp(converted, visProp, attr[prop]);
      } else {
        setProp(converted, prop, attr[prop]);
      }
    }
  }

  return converted;
}

function DOTToGraph(data) {
  var dotData = parseDOT(data);
  var graphData = {
    nodes: [],
    edges: [],
    options: {}

  };if (dotData.nodes) {
    dotData.nodes.forEach(function (dotNode) {
      var graphNode = {
        id: dotNode.id,
        label: String(dotNode.label || dotNode.id)
      };
      merge(graphNode, convertAttr(dotNode.attr, NODE_ATTR_MAPPING));
      if (graphNode.image) {
        graphNode.shape = 'image';
      }
      graphData.nodes.push(graphNode);
    });
  }

  if (dotData.edges) {
    var convertEdge = function convertEdge(dotEdge) {
      var graphEdge = {
        from: dotEdge.from,
        to: dotEdge.to
      };
      merge(graphEdge, convertAttr(dotEdge.attr, EDGE_ATTR_MAPPING));

      if (graphEdge.arrows == null && dotEdge.type === '->') {
        graphEdge.arrows = 'to';
      }

      return graphEdge;
    };

    dotData.edges.forEach(function (dotEdge) {
      var from, to;
      if (dotEdge.from instanceof Object) {
        from = dotEdge.from.nodes;
      } else {
        from = {
          id: dotEdge.from
        };
      }

      if (dotEdge.to instanceof Object) {
        to = dotEdge.to.nodes;
      } else {
        to = {
          id: dotEdge.to
        };
      }

      if (dotEdge.from instanceof Object && dotEdge.from.edges) {
        dotEdge.from.edges.forEach(function (subEdge) {
          var graphEdge = convertEdge(subEdge);
          graphData.edges.push(graphEdge);
        });
      }

      forEach2(from, to, function (from, to) {
        var subEdge = createEdge(graphData, from.id, to.id, dotEdge.type, dotEdge.attr);
        var graphEdge = convertEdge(subEdge);
        graphData.edges.push(graphEdge);
      });

      if (dotEdge.to instanceof Object && dotEdge.to.edges) {
        dotEdge.to.edges.forEach(function (subEdge) {
          var graphEdge = convertEdge(subEdge);
          graphData.edges.push(graphEdge);
        });
      }
    });
  }

  if (dotData.attr) {
    graphData.options = dotData.attr;
  }

  return graphData;
}

exports.parseDOT = parseDOT;
exports.DOTToGraph = DOTToGraph;

 }),
 (function(module, exports, __webpack_require__) {

"use strict";


function parseGephi(gephiJSON, optionsObj) {
  var edges = [];
  var nodes = [];
  var options = {
    edges: {
      inheritColor: false
    },
    nodes: {
      fixed: false,
      parseColor: false
    }
  };

  if (optionsObj !== undefined) {
    if (optionsObj.fixed !== undefined) {
      options.nodes.fixed = optionsObj.fixed;
    }
    if (optionsObj.parseColor !== undefined) {
      options.nodes.parseColor = optionsObj.parseColor;
    }
    if (optionsObj.inheritColor !== undefined) {
      options.edges.inheritColor = optionsObj.inheritColor;
    }
  }

  var gEdges = gephiJSON.edges;
  var gNodes = gephiJSON.nodes;
  for (var i = 0; i < gEdges.length; i++) {
    var edge = {};
    var gEdge = gEdges[i];
    edge['id'] = gEdge.id;
    edge['from'] = gEdge.source;
    edge['to'] = gEdge.target;
    edge['attributes'] = gEdge.attributes;
    edge['label'] = gEdge.label;
    edge['title'] = gEdge.attributes !== undefined ? gEdge.attributes.title : undefined;
    if (gEdge['type'] === 'Directed') {
      edge['arrows'] = 'to';
    }
    if (gEdge.color && options.inheritColor === false) {
      edge['color'] = gEdge.color;
    }
    edges.push(edge);
  }

  for (var j = 0; j < gNodes.length; j++) {
    var node = {};
    var gNode = gNodes[j];
    node['id'] = gNode.id;
    node['attributes'] = gNode.attributes;
    node['x'] = gNode.x;
    node['y'] = gNode.y;
    node['label'] = gNode.label;
    node['title'] = gNode.attributes !== undefined ? gNode.attributes.title : gNode.title;
    if (options.nodes.parseColor === true) {
      node['color'] = gNode.color;
    } else {
      node['color'] = gNode.color !== undefined ? {
        background: gNode.color,
        border: gNode.color,
        highlight: { background: gNode.color, border: gNode.color },
        hover: { background: gNode.color, border: gNode.color }
      } : undefined;
    }
    node['size'] = gNode.size;
    node['fixed'] = options.nodes.fixed && gNode.x !== undefined && gNode.y !== undefined;
    nodes.push(node);
  }

  return { nodes: nodes, edges: edges };
}

exports.parseGephi = parseGephi;

 }),
 (function(module, exports, __nested_webpack_require_271567__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_271567__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_271567__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _CachedImage = __nested_webpack_require_271567__(133);

var _CachedImage2 = _interopRequireDefault(_CachedImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }


var Images = function () {
  function Images(callback) {
    (0, _classCallCheck3['default'])(this, Images);

    this.images = {};
    this.imageBroken = {};
    this.callback = callback;
  }



  (0, _createClass3['default'])(Images, [{
    key: '_tryloadBrokenUrl',
    value: function _tryloadBrokenUrl(url, brokenUrl, imageToLoadBrokenUrlOn) {
      if (url === undefined || imageToLoadBrokenUrlOn === undefined) return;
      if (brokenUrl === undefined) {
        console.warn('No broken url image defined');
        return;
      }

      imageToLoadBrokenUrlOn.onerror = function () {
        console.error('Could not load brokenImage:', brokenUrl);
      };

      imageToLoadBrokenUrlOn.image.src = brokenUrl;
    }


  }, {
    key: '_redrawWithImage',
    value: function _redrawWithImage(imageToRedrawWith) {
      if (this.callback) {
        this.callback(imageToRedrawWith);
      }
    }


  }, {
    key: 'load',
    value: function load(url, brokenUrl) {
      var _this = this;

      var cachedImage = this.images[url];
      if (cachedImage) return cachedImage;

      var img = new _CachedImage2['default']();

      this.images[url] = img;

      img.image.onload = function () {
        _this._fixImageCoordinates(img.image);
        img.init();
        _this._redrawWithImage(img);
      };

      img.image.onerror = function () {
        console.error('Could not load image:', url);
        _this._tryloadBrokenUrl(url, brokenUrl, img);
      };

      img.image.src = url;

      return img;
    }


  }, {
    key: '_fixImageCoordinates',
    value: function _fixImageCoordinates(imageToCache) {
      if (imageToCache.width === 0) {
        document.body.appendChild(imageToCache);
        imageToCache.width = imageToCache.offsetWidth;
        imageToCache.height = imageToCache.offsetHeight;
        document.body.removeChild(imageToCache);
      }
    }
  }]);
  return Images;
}();

exports['default'] = Images;

 }),
 (function(module, exports, __nested_webpack_require_276340__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __nested_webpack_require_276340__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __nested_webpack_require_276340__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __nested_webpack_require_276340__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_276340__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_276340__(2);
var ComponentUtil = __nested_webpack_require_276340__(35)['default'];
var LabelSplitter = __nested_webpack_require_276340__(139)['default'];

var multiFontStyle = ['bold', 'ital', 'boldital', 'mono'];


var Label = function () {
  function Label(body, options) {
    var edgelabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    (0, _classCallCheck3['default'])(this, Label);

    this.body = body;
    this.pointToSelf = false;
    this.baseSize = undefined;
    this.fontOptions = {}; 
    this.setOptions(options);
    this.size = { top: 0, left: 0, width: 0, height: 0, yLine: 0 };
    this.isEdgeLabel = edgelabel;
  }



  (0, _createClass3['default'])(Label, [{
    key: 'setOptions',
    value: function setOptions(options) {
      this.elementOptions = options; 

      this.initFontOptions(options.font);

      if (ComponentUtil.isValidLabel(options.label)) {
        this.labelDirty = true;
      } else {
        options.label = '';
      }

      if (options.font !== undefined && options.font !== null) {
        if (typeof options.font === 'string') {
          this.baseSize = this.fontOptions.size;
        } else if ((0, _typeof3['default'])(options.font) === 'object') {
          var size = options.font.size;

          if (size !== undefined) {
            this.baseSize = size;
          }
        }
      }
    }


  }, {
    key: 'initFontOptions',
    value: function initFontOptions(newFontOptions) {
      var _this = this;

      util.forEach(multiFontStyle, function (style) {
        _this.fontOptions[style] = {};
      });

      if (Label.parseFontString(this.fontOptions, newFontOptions)) {
        this.fontOptions.vadjust = 0;
        return;
      }

      util.forEach(newFontOptions, function (prop, n) {
        if (prop !== undefined && prop !== null && (typeof prop === 'undefined' ? 'undefined' : (0, _typeof3['default'])(prop)) !== 'object') {
          _this.fontOptions[n] = prop;
        }
      });
    }


  }, {
    key: 'constrain',


    value: function constrain(pile) {
      var fontOptions = {
        constrainWidth: false,
        maxWdt: -1,
        minWdt: -1,
        constrainHeight: false,
        minHgt: -1,
        valign: 'middle'
      };

      var widthConstraint = util.topMost(pile, 'widthConstraint');
      if (typeof widthConstraint === 'number') {
        fontOptions.maxWdt = Number(widthConstraint);
        fontOptions.minWdt = Number(widthConstraint);
      } else if ((typeof widthConstraint === 'undefined' ? 'undefined' : (0, _typeof3['default'])(widthConstraint)) === 'object') {
        var widthConstraintMaximum = util.topMost(pile, ['widthConstraint', 'maximum']);
        if (typeof widthConstraintMaximum === 'number') {
          fontOptions.maxWdt = Number(widthConstraintMaximum);
        }
        var widthConstraintMinimum = util.topMost(pile, ['widthConstraint', 'minimum']);
        if (typeof widthConstraintMinimum === 'number') {
          fontOptions.minWdt = Number(widthConstraintMinimum);
        }
      }

      var heightConstraint = util.topMost(pile, 'heightConstraint');
      if (typeof heightConstraint === 'number') {
        fontOptions.minHgt = Number(heightConstraint);
      } else if ((typeof heightConstraint === 'undefined' ? 'undefined' : (0, _typeof3['default'])(heightConstraint)) === 'object') {
        var heightConstraintMinimum = util.topMost(pile, ['heightConstraint', 'minimum']);
        if (typeof heightConstraintMinimum === 'number') {
          fontOptions.minHgt = Number(heightConstraintMinimum);
        }
        var heightConstraintValign = util.topMost(pile, ['heightConstraint', 'valign']);
        if (typeof heightConstraintValign === 'string') {
          if (heightConstraintValign === 'top' || heightConstraintValign === 'bottom') {
            fontOptions.valign = heightConstraintValign;
          }
        }
      }

      return fontOptions;
    }


  }, {
    key: 'update',
    value: function update(options, pile) {
      this.setOptions(options, true);
      this.propagateFonts(pile);
      util.deepExtend(this.fontOptions, this.constrain(pile));
      this.fontOptions.chooser = ComponentUtil.choosify('label', pile);
    }


  }, {
    key: 'adjustSizes',
    value: function adjustSizes(margins) {
      var widthBias = margins ? margins.right + margins.left : 0;
      if (this.fontOptions.constrainWidth) {
        this.fontOptions.maxWdt -= widthBias;
        this.fontOptions.minWdt -= widthBias;
      }
      var heightBias = margins ? margins.top + margins.bottom : 0;
      if (this.fontOptions.constrainHeight) {
        this.fontOptions.minHgt -= heightBias;
      }
    }



  }, {
    key: 'addFontOptionsToPile',
    value: function addFontOptionsToPile(dstPile, srcPile) {
      for (var i = 0; i < srcPile.length; ++i) {
        this.addFontToPile(dstPile, srcPile[i]);
      }
    }


  }, {
    key: 'addFontToPile',
    value: function addFontToPile(pile, options) {
      if (options === undefined) return;
      if (options.font === undefined || options.font === null) return;

      var item = options.font;
      pile.push(item);
    }


  }, {
    key: 'getBasicOptions',
    value: function getBasicOptions(pile) {
      var ret = {};

      for (var n = 0; n < pile.length; ++n) {
        var fontOptions = pile[n];

        var tmpShorthand = {};
        if (Label.parseFontString(tmpShorthand, fontOptions)) {
          fontOptions = tmpShorthand;
        }

        util.forEach(fontOptions, function (opt, name) {
          if (opt === undefined) return; 
          if (ret.hasOwnProperty(name)) return; 

          if (multiFontStyle.indexOf(name) !== -1) {
            ret[name] = {};
          } else {
            ret[name] = opt;
          }
        });
      }

      return ret;
    }


  }, {
    key: 'getFontOption',
    value: function getFontOption(pile, multiName, option) {
      var multiFont = void 0;

      for (var n = 0; n < pile.length; ++n) {
        var fontOptions = pile[n];

        if (fontOptions.hasOwnProperty(multiName)) {
          multiFont = fontOptions[multiName];
          if (multiFont === undefined || multiFont === null) continue;

          var tmpShorthand = {};
          if (Label.parseFontString(tmpShorthand, multiFont)) {
            multiFont = tmpShorthand;
          }

          if (multiFont.hasOwnProperty(option)) {
            return multiFont[option];
          }
        }
      }

      if (this.fontOptions.hasOwnProperty(option)) {
        return this.fontOptions[option];
      }

      throw new Error("Did not find value for multi-font for property: '" + option + "'");
    }


  }, {
    key: 'getFontOptions',
    value: function getFontOptions(pile, multiName) {
      var result = {};
      var optionNames = ['color', 'size', 'face', 'mod', 'vadjust']; 

      for (var i = 0; i < optionNames.length; ++i) {
        var mod = optionNames[i];
        result[mod] = this.getFontOption(pile, multiName, mod);
      }

      return result;
    }



  }, {
    key: 'propagateFonts',
    value: function propagateFonts(pile) {
      var _this2 = this;

      var fontPile = []; 

      this.addFontOptionsToPile(fontPile, pile);
      this.fontOptions = this.getBasicOptions(fontPile);


      var _loop = function _loop(i) {
        var mod = multiFontStyle[i];
        var modOptions = _this2.fontOptions[mod];
        var tmpMultiFontOptions = _this2.getFontOptions(fontPile, mod);

        util.forEach(tmpMultiFontOptions, function (option, n) {
          modOptions[n] = option;
        });

        modOptions.size = Number(modOptions.size);
        modOptions.vadjust = Number(modOptions.vadjust);
      };

      for (var i = 0; i < multiFontStyle.length; ++i) {
        _loop(i);
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover) {
      var baseline = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'middle';

      if (this.elementOptions.label === undefined) return;

      var viewFontSize = this.fontOptions.size * this.body.view.scale;
      if (this.elementOptions.label && viewFontSize < this.elementOptions.scaling.label.drawThreshold - 1) return;

      if (viewFontSize >= this.elementOptions.scaling.label.maxVisible) {
        viewFontSize = Number(this.elementOptions.scaling.label.maxVisible) / this.body.view.scale;
      }

      this.calculateLabelSize(ctx, selected, hover, x, y, baseline);
      this._drawBackground(ctx);
      this._drawText(ctx, x, this.size.yLine, baseline, viewFontSize);
    }


  }, {
    key: '_drawBackground',
    value: function _drawBackground(ctx) {
      if (this.fontOptions.background !== undefined && this.fontOptions.background !== 'none') {
        ctx.fillStyle = this.fontOptions.background;
        var size = this.getSize();
        ctx.fillRect(size.left, size.top, size.width, size.height);
      }
    }


  }, {
    key: '_drawText',
    value: function _drawText(ctx, x, y) {
      var baseline = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'middle';
      var viewFontSize = arguments[4];

      ;
      var _setAlignment2 = this._setAlignment(ctx, x, y, baseline);

      var _setAlignment3 = (0, _slicedToArray3['default'])(_setAlignment2, 2);

      x = _setAlignment3[0];
      y = _setAlignment3[1];


      ctx.textAlign = 'left';
      x = x - this.size.width / 2; 
      if (this.fontOptions.valign && this.size.height > this.size.labelHeight) {
        if (this.fontOptions.valign === 'top') {
          y -= (this.size.height - this.size.labelHeight) / 2;
        }
        if (this.fontOptions.valign === 'bottom') {
          y += (this.size.height - this.size.labelHeight) / 2;
        }
      }

      for (var i = 0; i < this.lineCount; i++) {
        var line = this.lines[i];
        if (line && line.blocks) {
          var width = 0;
          if (this.isEdgeLabel || this.fontOptions.align === 'center') {
            width += (this.size.width - line.width) / 2;
          } else if (this.fontOptions.align === 'right') {
            width += this.size.width - line.width;
          }
          for (var j = 0; j < line.blocks.length; j++) {
            var block = line.blocks[j];
            ctx.font = block.font;

            var _getColor2 = this._getColor(block.color, viewFontSize, block.strokeColor),
                _getColor3 = (0, _slicedToArray3['default'])(_getColor2, 2),
                fontColor = _getColor3[0],
                strokeColor = _getColor3[1];

            if (block.strokeWidth > 0) {
              ctx.lineWidth = block.strokeWidth;
              ctx.strokeStyle = strokeColor;
              ctx.lineJoin = 'round';
            }
            ctx.fillStyle = fontColor;

            if (block.strokeWidth > 0) {
              ctx.strokeText(block.text, x + width, y + block.vadjust);
            }
            ctx.fillText(block.text, x + width, y + block.vadjust);
            width += block.width;
          }
          y += line.height;
        }
      }
    }


  }, {
    key: '_setAlignment',
    value: function _setAlignment(ctx, x, y, baseline) {
      if (this.isEdgeLabel && this.fontOptions.align !== 'horizontal' && this.pointToSelf === false) {
        x = 0;
        y = 0;

        var lineMargin = 2;
        if (this.fontOptions.align === 'top') {
          ctx.textBaseline = 'alphabetic';
          y -= 2 * lineMargin; 
        } else if (this.fontOptions.align === 'bottom') {
          ctx.textBaseline = 'hanging';
          y += 2 * lineMargin; 
        } else {
          ctx.textBaseline = 'middle';
        }
      } else {
        ctx.textBaseline = baseline;
      }
      return [x, y];
    }


  }, {
    key: '_getColor',
    value: function _getColor(color, viewFontSize, initialStrokeColor) {
      var fontColor = color || '#000000';
      var strokeColor = initialStrokeColor || '#ffffff';
      if (viewFontSize <= this.elementOptions.scaling.label.drawThreshold) {
        var opacity = Math.max(0, Math.min(1, 1 - (this.elementOptions.scaling.label.drawThreshold - viewFontSize)));
        fontColor = util.overrideOpacity(fontColor, opacity);
        strokeColor = util.overrideOpacity(strokeColor, opacity);
      }
      return [fontColor, strokeColor];
    }


  }, {
    key: 'getTextSize',
    value: function getTextSize(ctx) {
      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var hover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      this._processLabel(ctx, selected, hover);
      return {
        width: this.size.width,
        height: this.size.height,
        lineCount: this.lineCount
      };
    }


  }, {
    key: 'getSize',
    value: function getSize() {
      var lineMargin = 2;
      var x = this.size.left; 
      var y = this.size.top - 0.5 * lineMargin; 

      if (this.isEdgeLabel) {
        var x2 = -this.size.width * 0.5;

        switch (this.fontOptions.align) {
          case 'middle':
            x = x2;
            y = -this.size.height * 0.5;
            break;
          case 'top':
            x = x2;
            y = -(this.size.height + lineMargin);
            break;
          case 'bottom':
            x = x2;
            y = lineMargin;
            break;
        }
      }

      var ret = {
        left: x,
        top: y,
        width: this.size.width,
        height: this.size.height
      };

      return ret;
    }


  }, {
    key: 'calculateLabelSize',
    value: function calculateLabelSize(ctx, selected, hover) {
      var x = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var y = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var baseline = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'middle';

      this._processLabel(ctx, selected, hover);
      this.size.left = x - this.size.width * 0.5;
      this.size.top = y - this.size.height * 0.5;
      this.size.yLine = y + (1 - this.lineCount) * 0.5 * this.fontOptions.size;
      if (baseline === 'hanging') {
        this.size.top += 0.5 * this.fontOptions.size;
        this.size.top += 4; 
        this.size.yLine += 4; 
      }
    }


  }, {
    key: 'getFormattingValues',
    value: function getFormattingValues(ctx, selected, hover, mod) {
      var getValue = function getValue(fontOptions, mod, option) {
        if (mod === 'normal') {
          if (option === 'mod') return '';
          return fontOptions[option];
        }

        if (fontOptions[mod][option] !== undefined) {
          return fontOptions[mod][option];
        } else {
          return fontOptions[option];
        }
      };

      var values = {
        color: getValue(this.fontOptions, mod, 'color'),
        size: getValue(this.fontOptions, mod, 'size'),
        face: getValue(this.fontOptions, mod, 'face'),
        mod: getValue(this.fontOptions, mod, 'mod'),
        vadjust: getValue(this.fontOptions, mod, 'vadjust'),
        strokeWidth: this.fontOptions.strokeWidth,
        strokeColor: this.fontOptions.strokeColor
      };
      if (selected || hover) {
        if (mod === 'normal' && this.fontOptions.chooser === true && this.elementOptions.labelHighlightBold) {
          values.mod = 'bold';
        } else {
          if (typeof this.fontOptions.chooser === 'function') {
            this.fontOptions.chooser(values, this.elementOptions.id, selected, hover);
          }
        }
      }

      var fontString = '';
      if (values.mod !== undefined && values.mod !== '') {
        fontString += values.mod + ' ';
      }
      fontString += values.size + 'px ' + values.face;

      ctx.font = fontString.replace(/"/g, '');
      values.font = ctx.font;
      values.height = values.size;
      return values;
    }


  }, {
    key: 'differentState',
    value: function differentState(selected, hover) {
      return selected !== this.selectedState || hover !== this.hoverState;
    }


  }, {
    key: '_processLabelText',
    value: function _processLabelText(ctx, selected, hover, inText) {
      var splitter = new LabelSplitter(ctx, this, selected, hover);
      return splitter.process(inText);
    }


  }, {
    key: '_processLabel',
    value: function _processLabel(ctx, selected, hover) {
      if (this.labelDirty === false && !this.differentState(selected, hover)) return;

      var state = this._processLabelText(ctx, selected, hover, this.elementOptions.label);

      if (this.fontOptions.minWdt > 0 && state.width < this.fontOptions.minWdt) {
        state.width = this.fontOptions.minWdt;
      }

      this.size.labelHeight = state.height;
      if (this.fontOptions.minHgt > 0 && state.height < this.fontOptions.minHgt) {
        state.height = this.fontOptions.minHgt;
      }

      this.lines = state.lines;
      this.lineCount = state.lines.length;
      this.size.width = state.width;
      this.size.height = state.height;
      this.selectedState = selected;
      this.hoverState = hover;

      this.labelDirty = false;
    }


  }, {
    key: 'visible',
    value: function visible() {
      if (this.size.width === 0 || this.size.height === 0 || this.elementOptions.label === undefined) {
        return false; 
      }

      var viewFontSize = this.fontOptions.size * this.body.view.scale;
      if (viewFontSize < this.elementOptions.scaling.label.drawThreshold - 1) {
        return false; 
      }

      return true;
    }
  }], [{
    key: 'parseFontString',
    value: function parseFontString(outOptions, inOptions) {
      if (!inOptions || typeof inOptions !== 'string') return false;

      var newOptionsArray = inOptions.split(' ');

      outOptions.size = newOptionsArray[0].replace('px', '');
      outOptions.face = newOptionsArray[1];
      outOptions.color = newOptionsArray[2];

      return true;
    }
  }]);
  return Label;
}();

exports['default'] = Label;

 }),
 (function(module, exports, __nested_webpack_require_305424__) {

module.exports = { "default": __nested_webpack_require_305424__(141), __esModule: true };

 }),
 (function(module, exports, __nested_webpack_require_305577__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __nested_webpack_require_305577__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __nested_webpack_require_305577__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_305577__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_305577__(2);
var EndPoints = __nested_webpack_require_305577__(80)['default'];


var EdgeBase = function () {
  function EdgeBase(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, EdgeBase);

    this.body = body;
    this.labelModule = labelModule;
    this.options = {};
    this.setOptions(options);
    this.colorDirty = true;
    this.color = {};
    this.selectionWidth = 2;
    this.hoverWidth = 1.5;
    this.fromPoint = this.from;
    this.toPoint = this.to;
  }



  (0, _createClass3['default'])(EdgeBase, [{
    key: 'connect',
    value: function connect() {
      this.from = this.body.nodes[this.options.from];
      this.to = this.body.nodes[this.options.to];
    }


  }, {
    key: 'cleanup',
    value: function cleanup() {
      return false;
    }


  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
      this.from = this.body.nodes[this.options.from];
      this.to = this.body.nodes[this.options.to];
      this.id = this.options.id;
    }


  }, {
    key: 'drawLine',
    value: function drawLine(ctx, values, selected, hover, viaNode) {
      ctx.strokeStyle = this.getColor(ctx, values, selected, hover);
      ctx.lineWidth = values.width;

      if (values.dashes !== false) {
        this._drawDashedLine(ctx, values, viaNode);
      } else {
        this._drawLine(ctx, values, viaNode);
      }
    }


  }, {
    key: '_drawLine',
    value: function _drawLine(ctx, values, viaNode, fromPoint, toPoint) {
      if (this.from != this.to) {
        this._line(ctx, values, viaNode, fromPoint, toPoint);
      } else {
        var _getCircleData2 = this._getCircleData(ctx),
            _getCircleData3 = (0, _slicedToArray3['default'])(_getCircleData2, 3),
            x = _getCircleData3[0],
            y = _getCircleData3[1],
            radius = _getCircleData3[2];

        this._circle(ctx, values, x, y, radius);
      }
    }


  }, {
    key: '_drawDashedLine',
    value: function _drawDashedLine(ctx, values, viaNode, fromPoint, toPoint) {
      ctx.lineCap = 'round';
      var pattern = [5, 5];
      if (Array.isArray(values.dashes) === true) {
        pattern = values.dashes;
      }

      if (ctx.setLineDash !== undefined) {
        ctx.save();

        ctx.setLineDash(pattern);
        ctx.lineDashOffset = 0;

        if (this.from != this.to) {
          this._line(ctx, values, viaNode);
        } else {
          var _getCircleData4 = this._getCircleData(ctx),
              _getCircleData5 = (0, _slicedToArray3['default'])(_getCircleData4, 3),
              x = _getCircleData5[0],
              y = _getCircleData5[1],
              radius = _getCircleData5[2];

          this._circle(ctx, values, x, y, radius);
        }

        ctx.setLineDash([0]);
        ctx.lineDashOffset = 0;
        ctx.restore();
      } else {
        if (this.from != this.to) {
          ctx.dashedLine(this.from.x, this.from.y, this.to.x, this.to.y, pattern);
        } else {
          var _getCircleData6 = this._getCircleData(ctx),
              _getCircleData7 = (0, _slicedToArray3['default'])(_getCircleData6, 3),
              _x = _getCircleData7[0],
              _y = _getCircleData7[1],
              _radius = _getCircleData7[2];

          this._circle(ctx, values, _x, _y, _radius);
        }
        this.enableShadow(ctx, values);

        ctx.stroke();

        this.disableShadow(ctx, values);
      }
    }


  }, {
    key: 'findBorderPosition',
    value: function findBorderPosition(nearNode, ctx, options) {
      if (this.from != this.to) {
        return this._findBorderPosition(nearNode, ctx, options);
      } else {
        return this._findBorderPositionCircle(nearNode, ctx, options);
      }
    }


  }, {
    key: 'findBorderPositions',
    value: function findBorderPositions(ctx) {
      var from = {};
      var to = {};
      if (this.from != this.to) {
        from = this._findBorderPosition(this.from, ctx);
        to = this._findBorderPosition(this.to, ctx);
      } else {
        var _getCircleData$slice = this._getCircleData(ctx).slice(0, 2),
            _getCircleData$slice2 = (0, _slicedToArray3['default'])(_getCircleData$slice, 2),
            x = _getCircleData$slice2[0],
            y = _getCircleData$slice2[1];

        from = this._findBorderPositionCircle(this.from, ctx, {
          x: x,
          y: y,
          low: 0.25,
          high: 0.6,
          direction: -1
        });
        to = this._findBorderPositionCircle(this.from, ctx, {
          x: x,
          y: y,
          low: 0.6,
          high: 0.8,
          direction: 1
        });
      }
      return { from: from, to: to };
    }


  }, {
    key: '_getCircleData',
    value: function _getCircleData(ctx) {
      var x = void 0,
          y = void 0;
      var node = this.from;
      var radius = this.options.selfReferenceSize;

      if (ctx !== undefined) {
        if (node.shape.width === undefined) {
          node.shape.resize(ctx);
        }
      }

      if (node.shape.width > node.shape.height) {
        x = node.x + node.shape.width * 0.5;
        y = node.y - radius;
      } else {
        x = node.x + radius;
        y = node.y - node.shape.height * 0.5;
      }
      return [x, y, radius];
    }


  }, {
    key: '_pointOnCircle',
    value: function _pointOnCircle(x, y, radius, percentage) {
      var angle = percentage * 2 * Math.PI;
      return {
        x: x + radius * Math.cos(angle),
        y: y - radius * Math.sin(angle)
      };
    }


  }, {
    key: '_findBorderPositionCircle',
    value: function _findBorderPositionCircle(node, ctx, options) {
      var x = options.x;
      var y = options.y;
      var low = options.low;
      var high = options.high;
      var direction = options.direction;

      var maxIterations = 10;
      var iteration = 0;
      var radius = this.options.selfReferenceSize;
      var pos = void 0,
          angle = void 0,
          distanceToBorder = void 0,
          distanceToPoint = void 0,
          difference = void 0;
      var threshold = 0.05;
      var middle = (low + high) * 0.5;

      while (low <= high && iteration < maxIterations) {
        middle = (low + high) * 0.5;

        pos = this._pointOnCircle(x, y, radius, middle);
        angle = Math.atan2(node.y - pos.y, node.x - pos.x);
        distanceToBorder = node.distanceToBorder(ctx, angle);
        distanceToPoint = Math.sqrt(Math.pow(pos.x - node.x, 2) + Math.pow(pos.y - node.y, 2));
        difference = distanceToBorder - distanceToPoint;
        if (Math.abs(difference) < threshold) {
          break; 
        } else if (difference > 0) {
          if (direction > 0) {
            low = middle;
          } else {
            high = middle;
          }
        } else {
          if (direction > 0) {
            high = middle;
          } else {
            low = middle;
          }
        }
        iteration++;
      }
      pos.t = middle;

      return pos;
    }


  }, {
    key: 'getLineWidth',
    value: function getLineWidth(selected, hover) {
      if (selected === true) {
        return Math.max(this.selectionWidth, 0.3 / this.body.view.scale);
      } else {
        if (hover === true) {
          return Math.max(this.hoverWidth, 0.3 / this.body.view.scale);
        } else {
          return Math.max(this.options.width, 0.3 / this.body.view.scale);
        }
      }
    }


  }, {
    key: 'getColor',
    value: function getColor(ctx, values, selected, hover) {
      if (values.inheritsColor !== false) {
        if (values.inheritsColor === 'both' && this.from.id !== this.to.id) {
          var grd = ctx.createLinearGradient(this.from.x, this.from.y, this.to.x, this.to.y);
          var fromColor = void 0,
              toColor = void 0;
          fromColor = this.from.options.color.highlight.border;
          toColor = this.to.options.color.highlight.border;

          if (this.from.selected === false && this.to.selected === false) {
            fromColor = util.overrideOpacity(this.from.options.color.border, values.opacity);
            toColor = util.overrideOpacity(this.to.options.color.border, values.opacity);
          } else if (this.from.selected === true && this.to.selected === false) {
            toColor = this.to.options.color.border;
          } else if (this.from.selected === false && this.to.selected === true) {
            fromColor = this.from.options.color.border;
          }
          grd.addColorStop(0, fromColor);
          grd.addColorStop(1, toColor);

          return grd;
        }

        if (values.inheritsColor === 'to') {
          return util.overrideOpacity(this.to.options.color.border, values.opacity);
        } else {
          return util.overrideOpacity(this.from.options.color.border, values.opacity);
        }
      } else {
        return util.overrideOpacity(values.color, values.opacity);
      }
    }


  }, {
    key: '_circle',
    value: function _circle(ctx, values, x, y, radius) {
      this.enableShadow(ctx, values);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.stroke();

      this.disableShadow(ctx, values);
    }


  }, {
    key: 'getDistanceToEdge',
    value: function getDistanceToEdge(x1, y1, x2, y2, x3, y3, via, values) {
      var returnValue = 0;
      if (this.from != this.to) {
        returnValue = this._getDistanceToEdge(x1, y1, x2, y2, x3, y3, via);
      } else {
        var _getCircleData8 = this._getCircleData(undefined),
            _getCircleData9 = (0, _slicedToArray3['default'])(_getCircleData8, 3),
            x = _getCircleData9[0],
            y = _getCircleData9[1],
            radius = _getCircleData9[2];

        var dx = x - x3;
        var dy = y - y3;
        returnValue = Math.abs(Math.sqrt(dx * dx + dy * dy) - radius);
      }

      return returnValue;
    }


  }, {
    key: '_getDistanceToLine',
    value: function _getDistanceToLine(x1, y1, x2, y2, x3, y3) {
      var px = x2 - x1;
      var py = y2 - y1;
      var something = px * px + py * py;
      var u = ((x3 - x1) * px + (y3 - y1) * py) / something;

      if (u > 1) {
        u = 1;
      } else if (u < 0) {
        u = 0;
      }

      var x = x1 + u * px;
      var y = y1 + u * py;
      var dx = x - x3;
      var dy = y - y3;


      return Math.sqrt(dx * dx + dy * dy);
    }


  }, {
    key: 'getArrowData',
    value: function getArrowData(ctx, position, viaNode, selected, hover, values) {
      var angle = void 0;
      var arrowPoint = void 0;
      var node1 = void 0;
      var node2 = void 0;
      var guideOffset = void 0;
      var scaleFactor = void 0;
      var type = void 0;
      var lineWidth = values.width;

      if (position === 'from') {
        node1 = this.from;
        node2 = this.to;
        guideOffset = 0.1;
        scaleFactor = values.fromArrowScale;
        type = values.fromArrowType;
      } else if (position === 'to') {
        node1 = this.to;
        node2 = this.from;
        guideOffset = -0.1;
        scaleFactor = values.toArrowScale;
        type = values.toArrowType;
      } else {
        node1 = this.to;
        node2 = this.from;
        scaleFactor = values.middleArrowScale;
        type = values.middleArrowType;
      }

      if (node1 != node2) {
        if (position !== 'middle') {
          if (this.options.smooth.enabled === true) {
            arrowPoint = this.findBorderPosition(node1, ctx, { via: viaNode });
            var guidePos = this.getPoint(Math.max(0.0, Math.min(1.0, arrowPoint.t + guideOffset)), viaNode);
            angle = Math.atan2(arrowPoint.y - guidePos.y, arrowPoint.x - guidePos.x);
          } else {
            angle = Math.atan2(node1.y - node2.y, node1.x - node2.x);
            arrowPoint = this.findBorderPosition(node1, ctx);
          }
        } else {
          angle = Math.atan2(node1.y - node2.y, node1.x - node2.x);
          arrowPoint = this.getPoint(0.5, viaNode); 
        }
      } else {
        var _getCircleData10 = this._getCircleData(ctx),
            _getCircleData11 = (0, _slicedToArray3['default'])(_getCircleData10, 3),
            x = _getCircleData11[0],
            y = _getCircleData11[1],
            radius = _getCircleData11[2];

        if (position === 'from') {
          arrowPoint = this.findBorderPosition(this.from, ctx, {
            x: x,
            y: y,
            low: 0.25,
            high: 0.6,
            direction: -1
          });
          angle = arrowPoint.t * -2 * Math.PI + 1.5 * Math.PI + 0.1 * Math.PI;
        } else if (position === 'to') {
          arrowPoint = this.findBorderPosition(this.from, ctx, {
            x: x,
            y: y,
            low: 0.6,
            high: 1.0,
            direction: 1
          });
          angle = arrowPoint.t * -2 * Math.PI + 1.5 * Math.PI - 1.1 * Math.PI;
        } else {
          arrowPoint = this._pointOnCircle(x, y, radius, 0.175);
          angle = 3.9269908169872414; 
        }
      }

      if (position === 'middle' && scaleFactor < 0) lineWidth *= -1; 
      var length = 15 * scaleFactor + 3 * lineWidth; 

      var xi = arrowPoint.x - length * 0.9 * Math.cos(angle);
      var yi = arrowPoint.y - length * 0.9 * Math.sin(angle);
      var arrowCore = { x: xi, y: yi };

      return {
        point: arrowPoint,
        core: arrowCore,
        angle: angle,
        length: length,
        type: type
      };
    }


  }, {
    key: 'drawArrowHead',
    value: function drawArrowHead(ctx, values, selected, hover, arrowData) {
      ctx.strokeStyle = this.getColor(ctx, values, selected, hover);
      ctx.fillStyle = ctx.strokeStyle;
      ctx.lineWidth = values.width;

      EndPoints.draw(ctx, arrowData);

      this.enableShadow(ctx, values);
      ctx.fill();
      this.disableShadow(ctx, values);
    }


  }, {
    key: 'enableShadow',
    value: function enableShadow(ctx, values) {
      if (values.shadow === true) {
        ctx.shadowColor = values.shadowColor;
        ctx.shadowBlur = values.shadowSize;
        ctx.shadowOffsetX = values.shadowX;
        ctx.shadowOffsetY = values.shadowY;
      }
    }


  }, {
    key: 'disableShadow',
    value: function disableShadow(ctx, values) {
      if (values.shadow === true) {
        ctx.shadowColor = 'rgba(0,0,0,0)';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      }
    }


  }, {
    key: 'drawBackground',
    value: function drawBackground(ctx, values) {
      if (values.background !== false) {
        var attrs = ['strokeStyle', 'lineWidth', 'dashes'];
        var origCtxAttr = {};
        attrs.forEach(function (attrname) {
          origCtxAttr[attrname] = ctx[attrname];
        });

        ctx.strokeStyle = values.backgroundColor;
        ctx.lineWidth = values.backgroundSize;
        this.setStrokeDashed(ctx, values.backgroundDashes);

        ctx.stroke();

        attrs.forEach(function (attrname) {
          ctx[attrname] = origCtxAttr[attrname];
        });
        this.setStrokeDashed(ctx, values.dashes);
      }
    }


  }, {
    key: 'setStrokeDashed',
    value: function setStrokeDashed(ctx, dashes) {
      if (dashes !== false) {
        if (ctx.setLineDash !== undefined) {
          var pattern = [5, 5];
          if (Array.isArray(dashes) === true) {
            pattern = dashes;
          }
          ctx.setLineDash(pattern);
        } else {
          console.warn('setLineDash is not supported in this browser. The dashed stroke cannot be used.');
        }
      } else {
        if (ctx.setLineDash !== undefined) {
          ctx.setLineDash([]);
        } else {
          console.warn('setLineDash is not supported in this browser. The dashed stroke cannot be used.');
        }
      }
    }
  }]);
  return EdgeBase;
}();

exports['default'] = EdgeBase;

 }),
 (function(module, exports, __nested_webpack_require_329252__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_329252__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __nested_webpack_require_329252__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_329252__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __nested_webpack_require_329252__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_329252__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }


var EndPoint = function () {
  function EndPoint() {
    (0, _classCallCheck3['default'])(this, EndPoint);
  }

  (0, _createClass3['default'])(EndPoint, null, [{
    key: 'transform',

    value: function transform(points, arrowData) {
      if (!(points instanceof Array)) {
        points = [points];
      }

      var x = arrowData.point.x;
      var y = arrowData.point.y;
      var angle = arrowData.angle;
      var length = arrowData.length;

      for (var i = 0; i < points.length; ++i) {
        var p = points[i];
        var xt = p.x * Math.cos(angle) - p.y * Math.sin(angle);
        var yt = p.x * Math.sin(angle) + p.y * Math.cos(angle);

        p.x = x + length * xt;
        p.y = y + length * yt;
      }
    }


  }, {
    key: 'drawPath',
    value: function drawPath(ctx, points) {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (var i = 1; i < points.length; ++i) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.closePath();
    }
  }]);
  return EndPoint;
}();



var Arrow = function (_EndPoint) {
  (0, _inherits3['default'])(Arrow, _EndPoint);

  function Arrow() {
    (0, _classCallCheck3['default'])(this, Arrow);
    return (0, _possibleConstructorReturn3['default'])(this, (Arrow.__proto__ || (0, _getPrototypeOf2['default'])(Arrow)).apply(this, arguments));
  }

  (0, _createClass3['default'])(Arrow, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var points = [{ x: 0, y: 0 }, { x: -1, y: 0.3 }, { x: -0.9, y: 0 }, { x: -1, y: -0.3 }];

      EndPoint.transform(points, arrowData);
      EndPoint.drawPath(ctx, points);
    }
  }]);
  return Arrow;
}(EndPoint);



var Crow = function () {
  function Crow() {
    (0, _classCallCheck3['default'])(this, Crow);
  }

  (0, _createClass3['default'])(Crow, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var points = [{ x: -1, y: 0 }, { x: 0, y: 0.3 }, { x: -0.4, y: 0 }, { x: 0, y: -0.3 }];

      EndPoint.transform(points, arrowData);
      EndPoint.drawPath(ctx, points);
    }
  }]);
  return Crow;
}();



var Curve = function () {
  function Curve() {
    (0, _classCallCheck3['default'])(this, Curve);
  }

  (0, _createClass3['default'])(Curve, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var point = { x: -0.4, y: 0 };
      EndPoint.transform(point, arrowData);

      ctx.strokeStyle = ctx.fillStyle;
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';

      var pi = Math.PI;
      var start_angle = arrowData.angle - pi / 2;
      var end_angle = arrowData.angle + pi / 2;
      ctx.beginPath();
      ctx.arc(point.x, point.y, arrowData.length * 0.4, start_angle, end_angle, false);
      ctx.stroke();
    }
  }]);
  return Curve;
}();



var InvertedCurve = function () {
  function InvertedCurve() {
    (0, _classCallCheck3['default'])(this, InvertedCurve);
  }

  (0, _createClass3['default'])(InvertedCurve, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var point = { x: -0.3, y: 0 };
      EndPoint.transform(point, arrowData);

      ctx.strokeStyle = ctx.fillStyle;
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';

      var pi = Math.PI;
      var start_angle = arrowData.angle + pi / 2;
      var end_angle = arrowData.angle + 3 * pi / 2;
      ctx.beginPath();
      ctx.arc(point.x, point.y, arrowData.length * 0.4, start_angle, end_angle, false);
      ctx.stroke();
    }
  }]);
  return InvertedCurve;
}();



var Triangle = function () {
  function Triangle() {
    (0, _classCallCheck3['default'])(this, Triangle);
  }

  (0, _createClass3['default'])(Triangle, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var points = [{ x: 0.02, y: 0 }, { x: -1, y: 0.3 }, { x: -1, y: -0.3 }];

      EndPoint.transform(points, arrowData);
      EndPoint.drawPath(ctx, points);
    }
  }]);
  return Triangle;
}();



var InvertedTriangle = function () {
  function InvertedTriangle() {
    (0, _classCallCheck3['default'])(this, InvertedTriangle);
  }

  (0, _createClass3['default'])(InvertedTriangle, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var points = [{ x: 0, y: 0.3 }, { x: 0, y: -0.3 }, { x: -1, y: 0 }];

      EndPoint.transform(points, arrowData);
      EndPoint.drawPath(ctx, points);
    }
  }]);
  return InvertedTriangle;
}();



var Circle = function () {
  function Circle() {
    (0, _classCallCheck3['default'])(this, Circle);
  }

  (0, _createClass3['default'])(Circle, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var point = { x: -0.4, y: 0 };

      EndPoint.transform(point, arrowData);
      ctx.circle(point.x, point.y, arrowData.length * 0.4);
    }
  }]);
  return Circle;
}();



var Bar = function () {
  function Bar() {
    (0, _classCallCheck3['default'])(this, Bar);
  }

  (0, _createClass3['default'])(Bar, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {

      var points = [{ x: 0, y: 0.5 }, { x: 0, y: -0.5 }, { x: -0.15, y: -0.5 }, { x: -0.15, y: 0.5 }];

      EndPoint.transform(points, arrowData);
      EndPoint.drawPath(ctx, points);
    }
  }]);
  return Bar;
}();



var Box = function () {
  function Box() {
    (0, _classCallCheck3['default'])(this, Box);
  }

  (0, _createClass3['default'])(Box, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var points = [{ x: 0, y: 0.3 }, { x: 0, y: -0.3 }, { x: -0.6, y: -0.3 }, { x: -0.6, y: 0.3 }];

      EndPoint.transform(points, arrowData);
      EndPoint.drawPath(ctx, points);
    }
  }]);
  return Box;
}();



var Diamond = function () {
  function Diamond() {
    (0, _classCallCheck3['default'])(this, Diamond);
  }

  (0, _createClass3['default'])(Diamond, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var points = [{ x: 0, y: 0 }, { x: -0.5, y: -0.3 }, { x: -1, y: 0 }, { x: -0.5, y: 0.3 }];

      EndPoint.transform(points, arrowData);
      EndPoint.drawPath(ctx, points);
    }
  }]);
  return Diamond;
}();



var Vee = function () {
  function Vee() {
    (0, _classCallCheck3['default'])(this, Vee);
  }

  (0, _createClass3['default'])(Vee, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var points = [{ x: -1, y: 0.3 }, { x: -0.5, y: 0 }, { x: -1, y: -0.3 }, { x: 0, y: 0 }];

      EndPoint.transform(points, arrowData);
      EndPoint.drawPath(ctx, points);
    }
  }]);
  return Vee;
}();



var EndPoints = function () {
  function EndPoints() {
    (0, _classCallCheck3['default'])(this, EndPoints);
  }

  (0, _createClass3['default'])(EndPoints, null, [{
    key: 'draw',

    value: function draw(ctx, arrowData) {
      var type;
      if (arrowData.type) {
        type = arrowData.type.toLowerCase();
      }

      switch (type) {
        case 'circle':
          Circle.draw(ctx, arrowData);
          break;
        case 'box':
          Box.draw(ctx, arrowData);
          break;
        case 'crow':
          Crow.draw(ctx, arrowData);
          break;
        case 'curve':
          Curve.draw(ctx, arrowData);
          break;
        case 'diamond':
          Diamond.draw(ctx, arrowData);
          break;
        case 'inv_curve':
          InvertedCurve.draw(ctx, arrowData);
          break;
        case 'triangle':
          Triangle.draw(ctx, arrowData);
          break;
        case 'inv_triangle':
          InvertedTriangle.draw(ctx, arrowData);
          break;
        case 'bar':
          Bar.draw(ctx, arrowData);
          break;
        case 'vee':
          Vee.draw(ctx, arrowData);
          break;
        case 'arrow': 
        default:
          Arrow.draw(ctx, arrowData);
      }
    }
  }]);
  return EndPoints;
}();

exports['default'] = EndPoints;

 }),
 (function(module, exports, __nested_webpack_require_344088__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_344088__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_344088__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BarnesHutSolver = function () {
  function BarnesHutSolver(body, physicsBody, options) {
    (0, _classCallCheck3['default'])(this, BarnesHutSolver);

    this.body = body;
    this.physicsBody = physicsBody;
    this.barnesHutTree;
    this.setOptions(options);
    this.randomSeed = 5;

  }



  (0, _createClass3['default'])(BarnesHutSolver, [{
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
      this.thetaInversed = 1 / this.options.theta;

      this.overlapAvoidanceFactor = 1 - Math.max(0, Math.min(1, this.options.avoidOverlap));
    }


  }, {
    key: 'seededRandom',
    value: function seededRandom() {
      var x = Math.sin(this.randomSeed++) * 10000;
      return x - Math.floor(x);
    }


  }, {
    key: 'solve',
    value: function solve() {
      if (this.options.gravitationalConstant !== 0 && this.physicsBody.physicsNodeIndices.length > 0) {
        var node = void 0;
        var nodes = this.body.nodes;
        var nodeIndices = this.physicsBody.physicsNodeIndices;
        var nodeCount = nodeIndices.length;

        var barnesHutTree = this._formBarnesHutTree(nodes, nodeIndices);

        this.barnesHutTree = barnesHutTree;

        for (var i = 0; i < nodeCount; i++) {
          node = nodes[nodeIndices[i]];
          if (node.options.mass > 0) {
            this._getForceContributions(barnesHutTree.root, node);
          }
        }
      }
    }


  }, {
    key: '_getForceContributions',
    value: function _getForceContributions(parentBranch, node) {
      this._getForceContribution(parentBranch.children.NW, node);
      this._getForceContribution(parentBranch.children.NE, node);
      this._getForceContribution(parentBranch.children.SW, node);
      this._getForceContribution(parentBranch.children.SE, node);
    }


  }, {
    key: '_getForceContribution',
    value: function _getForceContribution(parentBranch, node) {
      if (parentBranch.childrenCount > 0) {
        var dx = void 0,
            dy = void 0,
            distance = void 0;

        dx = parentBranch.centerOfMass.x - node.x;
        dy = parentBranch.centerOfMass.y - node.y;
        distance = Math.sqrt(dx * dx + dy * dy);

        if (distance * parentBranch.calcSize > this.thetaInversed) {
          this._calculateForces(distance, dx, dy, node, parentBranch);
        } else {
          if (parentBranch.childrenCount === 4) {
            this._getForceContributions(parentBranch, node);
          } else {
            if (parentBranch.children.data.id != node.id) {
              this._calculateForces(distance, dx, dy, node, parentBranch);
            }
          }
        }
      }
    }


  }, {
    key: '_calculateForces',
    value: function _calculateForces(distance, dx, dy, node, parentBranch) {
      if (distance === 0) {
        distance = 0.1;
        dx = distance;
      }

      if (this.overlapAvoidanceFactor < 1 && node.shape.radius) {
        distance = Math.max(0.1 + this.overlapAvoidanceFactor * node.shape.radius, distance - node.shape.radius);
      }

      var gravityForce = this.options.gravitationalConstant * parentBranch.mass * node.options.mass / Math.pow(distance, 3);
      var fx = dx * gravityForce;
      var fy = dy * gravityForce;

      this.physicsBody.forces[node.id].x += fx;
      this.physicsBody.forces[node.id].y += fy;
    }


  }, {
    key: '_formBarnesHutTree',
    value: function _formBarnesHutTree(nodes, nodeIndices) {
      var node = void 0;
      var nodeCount = nodeIndices.length;

      var minX = nodes[nodeIndices[0]].x;
      var minY = nodes[nodeIndices[0]].y;
      var maxX = nodes[nodeIndices[0]].x;
      var maxY = nodes[nodeIndices[0]].y;

      for (var i = 1; i < nodeCount; i++) {
        var _node = nodes[nodeIndices[i]];
        var x = _node.x;
        var y = _node.y;
        if (_node.options.mass > 0) {
          if (x < minX) {
            minX = x;
          }
          if (x > maxX) {
            maxX = x;
          }
          if (y < minY) {
            minY = y;
          }
          if (y > maxY) {
            maxY = y;
          }
        }
      }
      var sizeDiff = Math.abs(maxX - minX) - Math.abs(maxY - minY); 
      if (sizeDiff > 0) {
        minY -= 0.5 * sizeDiff;
        maxY += 0.5 * sizeDiff;
      } 
      else {
          minX += 0.5 * sizeDiff;
          maxX -= 0.5 * sizeDiff;
        } 

      var minimumTreeSize = 1e-5;
      var rootSize = Math.max(minimumTreeSize, Math.abs(maxX - minX));
      var halfRootSize = 0.5 * rootSize;
      var centerX = 0.5 * (minX + maxX),
          centerY = 0.5 * (minY + maxY);

      var barnesHutTree = {
        root: {
          centerOfMass: { x: 0, y: 0 },
          mass: 0,
          range: {
            minX: centerX - halfRootSize,
            maxX: centerX + halfRootSize,
            minY: centerY - halfRootSize,
            maxY: centerY + halfRootSize
          },
          size: rootSize,
          calcSize: 1 / rootSize,
          children: { data: null },
          maxWidth: 0,
          level: 0,
          childrenCount: 4
        }
      };
      this._splitBranch(barnesHutTree.root);

      for (var _i = 0; _i < nodeCount; _i++) {
        node = nodes[nodeIndices[_i]];
        if (node.options.mass > 0) {
          this._placeInTree(barnesHutTree.root, node);
        }
      }

      return barnesHutTree;
    }


  }, {
    key: '_updateBranchMass',
    value: function _updateBranchMass(parentBranch, node) {
      var centerOfMass = parentBranch.centerOfMass;
      var totalMass = parentBranch.mass + node.options.mass;
      var totalMassInv = 1 / totalMass;

      centerOfMass.x = centerOfMass.x * parentBranch.mass + node.x * node.options.mass;
      centerOfMass.x *= totalMassInv;

      centerOfMass.y = centerOfMass.y * parentBranch.mass + node.y * node.options.mass;
      centerOfMass.y *= totalMassInv;

      parentBranch.mass = totalMass;
      var biggestSize = Math.max(Math.max(node.height, node.radius), node.width);
      parentBranch.maxWidth = parentBranch.maxWidth < biggestSize ? biggestSize : parentBranch.maxWidth;
    }


  }, {
    key: '_placeInTree',
    value: function _placeInTree(parentBranch, node, skipMassUpdate) {
      if (skipMassUpdate != true || skipMassUpdate === undefined) {
        this._updateBranchMass(parentBranch, node);
      }

      var range = parentBranch.children.NW.range;
      var region = void 0;
      if (range.maxX > node.x) {
        if (range.maxY > node.y) {
          region = 'NW';
        } else {
          region = 'SW';
        }
      } else {
        if (range.maxY > node.y) {
          region = 'NE';
        } else {
          region = 'SE';
        }
      }

      this._placeInRegion(parentBranch, node, region);
    }


  }, {
    key: '_placeInRegion',
    value: function _placeInRegion(parentBranch, node, region) {
      var children = parentBranch.children[region];

      switch (children.childrenCount) {
        case 0:
          children.children.data = node;
          children.childrenCount = 1;
          this._updateBranchMass(children, node);
          break;
        case 1:
          if (children.children.data.x === node.x && children.children.data.y === node.y) {
            node.x += this.seededRandom();
            node.y += this.seededRandom();
          } else {
            this._splitBranch(children);
            this._placeInTree(children, node);
          }
          break;
        case 4:
          this._placeInTree(children, node);
          break;
      }
    }


  }, {
    key: '_splitBranch',
    value: function _splitBranch(parentBranch) {
      var containedNode = null;
      if (parentBranch.childrenCount === 1) {
        containedNode = parentBranch.children.data;
        parentBranch.mass = 0;
        parentBranch.centerOfMass.x = 0;
        parentBranch.centerOfMass.y = 0;
      }
      parentBranch.childrenCount = 4;
      parentBranch.children.data = null;
      this._insertRegion(parentBranch, 'NW');
      this._insertRegion(parentBranch, 'NE');
      this._insertRegion(parentBranch, 'SW');
      this._insertRegion(parentBranch, 'SE');

      if (containedNode != null) {
        this._placeInTree(parentBranch, containedNode);
      }
    }


  }, {
    key: '_insertRegion',
    value: function _insertRegion(parentBranch, region) {
      var minX = void 0,
          maxX = void 0,
          minY = void 0,
          maxY = void 0;
      var childSize = 0.5 * parentBranch.size;
      switch (region) {
        case 'NW':
          minX = parentBranch.range.minX;
          maxX = parentBranch.range.minX + childSize;
          minY = parentBranch.range.minY;
          maxY = parentBranch.range.minY + childSize;
          break;
        case 'NE':
          minX = parentBranch.range.minX + childSize;
          maxX = parentBranch.range.maxX;
          minY = parentBranch.range.minY;
          maxY = parentBranch.range.minY + childSize;
          break;
        case 'SW':
          minX = parentBranch.range.minX;
          maxX = parentBranch.range.minX + childSize;
          minY = parentBranch.range.minY + childSize;
          maxY = parentBranch.range.maxY;
          break;
        case 'SE':
          minX = parentBranch.range.minX + childSize;
          maxX = parentBranch.range.maxX;
          minY = parentBranch.range.minY + childSize;
          maxY = parentBranch.range.maxY;
          break;
      }

      parentBranch.children[region] = {
        centerOfMass: { x: 0, y: 0 },
        mass: 0,
        range: { minX: minX, maxX: maxX, minY: minY, maxY: maxY },
        size: 0.5 * parentBranch.size,
        calcSize: 2 * parentBranch.calcSize,
        children: { data: null },
        maxWidth: 0,
        level: parentBranch.level + 1,
        childrenCount: 0
      };
    }



  }, {
    key: '_debug',
    value: function _debug(ctx, color) {
      if (this.barnesHutTree !== undefined) {
        ctx.lineWidth = 1;

        this._drawBranch(this.barnesHutTree.root, ctx, color);
      }
    }


  }, {
    key: '_drawBranch',
    value: function _drawBranch(branch, ctx, color) {
      if (color === undefined) {
        color = '#FF0000';
      }

      if (branch.childrenCount === 4) {
        this._drawBranch(branch.children.NW, ctx);
        this._drawBranch(branch.children.NE, ctx);
        this._drawBranch(branch.children.SE, ctx);
        this._drawBranch(branch.children.SW, ctx);
      }
      ctx.strokeStyle = color;
      ctx.beginPath();
      ctx.moveTo(branch.range.minX, branch.range.minY);
      ctx.lineTo(branch.range.maxX, branch.range.minY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(branch.range.maxX, branch.range.minY);
      ctx.lineTo(branch.range.maxX, branch.range.maxY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(branch.range.maxX, branch.range.maxY);
      ctx.lineTo(branch.range.minX, branch.range.maxY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(branch.range.minX, branch.range.maxY);
      ctx.lineTo(branch.range.minX, branch.range.minY);
      ctx.stroke();

    }
  }]);
  return BarnesHutSolver;
}();

exports['default'] = BarnesHutSolver;

 }),
 (function(module, exports, __nested_webpack_require_361002__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_361002__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_361002__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CentralGravitySolver = function () {
  function CentralGravitySolver(body, physicsBody, options) {
    (0, _classCallCheck3["default"])(this, CentralGravitySolver);

    this.body = body;
    this.physicsBody = physicsBody;
    this.setOptions(options);
  }



  (0, _createClass3["default"])(CentralGravitySolver, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }


  }, {
    key: "solve",
    value: function solve() {
      var dx = void 0,
          dy = void 0,
          distance = void 0,
          node = void 0;
      var nodes = this.body.nodes;
      var nodeIndices = this.physicsBody.physicsNodeIndices;
      var forces = this.physicsBody.forces;

      for (var i = 0; i < nodeIndices.length; i++) {
        var nodeId = nodeIndices[i];
        node = nodes[nodeId];
        dx = -node.x;
        dy = -node.y;
        distance = Math.sqrt(dx * dx + dy * dy);

        this._calculateForces(distance, dx, dy, forces, node);
      }
    }


  }, {
    key: "_calculateForces",
    value: function _calculateForces(distance, dx, dy, forces, node) {
      var gravityForce = distance === 0 ? 0 : this.options.centralGravity / distance;
      forces[node.id].x = dx * gravityForce;
      forces[node.id].y = dy * gravityForce;
    }
  }]);
  return CentralGravitySolver;
}();

exports["default"] = CentralGravitySolver;

 }),
 (function(module, exports, __nested_webpack_require_363422__) {

module.exports = __nested_webpack_require_363422__(188);

 }),
 (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = 'string';
var bool = 'boolean';
var number = 'number';
var array = 'array';
var object = 'object'; 
var dom = 'dom';
var any = 'any';

var endPoints = ['arrow', 'circle', 'bar'];

var allOptions = {
  configure: {
    enabled: { boolean: bool },
    filter: { boolean: bool, string: string, array: array, 'function': 'function' },
    container: { dom: dom },
    showButton: { boolean: bool },
    __type__: { object: object, boolean: bool, string: string, array: array, 'function': 'function' }
  },
  edges: {
    arrows: {
      to: {
        enabled: { boolean: bool },
        scaleFactor: { number: number },
        type: { string: endPoints },
        __type__: { object: object, boolean: bool }
      },
      middle: {
        enabled: { boolean: bool },
        scaleFactor: { number: number },
        type: { string: endPoints },
        __type__: { object: object, boolean: bool }
      },
      from: {
        enabled: { boolean: bool },
        scaleFactor: { number: number },
        type: { string: endPoints },
        __type__: { object: object, boolean: bool }
      },
      __type__: { string: ['from', 'to', 'middle'], object: object }
    },
    arrowStrikethrough: { boolean: bool },
    background: {
      enabled: { boolean: bool },
      color: { string: string },
      size: { number: number },
      dashes: { boolean: bool, array: array },
      __type__: { object: object, boolean: bool }
    },
    chosen: {
      label: { boolean: bool, 'function': 'function' },
      edge: { boolean: bool, 'function': 'function' },
      __type__: { object: object, boolean: bool }
    },
    color: {
      color: { string: string },
      highlight: { string: string },
      hover: { string: string },
      inherit: { string: ['from', 'to', 'both'], boolean: bool },
      opacity: { number: number },
      __type__: { object: object, string: string }
    },
    dashes: { boolean: bool, array: array },
    font: {
      color: { string: string },
      size: { number: number }, 
      face: { string: string },
      background: { string: string },
      strokeWidth: { number: number }, 
      strokeColor: { string: string },
      align: { string: ['horizontal', 'top', 'middle', 'bottom'] },
      vadjust: { number: number },
      multi: { boolean: bool, string: string },
      bold: {
        color: { string: string },
        size: { number: number }, 
        face: { string: string },
        mod: { string: string },
        vadjust: { number: number },
        __type__: { object: object, string: string }
      },
      boldital: {
        color: { string: string },
        size: { number: number }, 
        face: { string: string },
        mod: { string: string },
        vadjust: { number: number },
        __type__: { object: object, string: string }
      },
      ital: {
        color: { string: string },
        size: { number: number }, 
        face: { string: string },
        mod: { string: string },
        vadjust: { number: number },
        __type__: { object: object, string: string }
      },
      mono: {
        color: { string: string },
        size: { number: number }, 
        face: { string: string },
        mod: { string: string },
        vadjust: { number: number },
        __type__: { object: object, string: string }
      },
      __type__: { object: object, string: string }
    },
    hidden: { boolean: bool },
    hoverWidth: { 'function': 'function', number: number },
    label: { string: string, undefined: 'undefined' },
    labelHighlightBold: { boolean: bool },
    length: { number: number, undefined: 'undefined' },
    physics: { boolean: bool },
    scaling: {
      min: { number: number },
      max: { number: number },
      label: {
        enabled: { boolean: bool },
        min: { number: number },
        max: { number: number },
        maxVisible: { number: number },
        drawThreshold: { number: number },
        __type__: { object: object, boolean: bool }
      },
      customScalingFunction: { 'function': 'function' },
      __type__: { object: object }
    },
    selectionWidth: { 'function': 'function', number: number },
    selfReferenceSize: { number: number },
    shadow: {
      enabled: { boolean: bool },
      color: { string: string },
      size: { number: number },
      x: { number: number },
      y: { number: number },
      __type__: { object: object, boolean: bool }
    },
    smooth: {
      enabled: { boolean: bool },
      type: {
        string: ['dynamic', 'continuous', 'discrete', 'diagonalCross', 'straightCross', 'horizontal', 'vertical', 'curvedCW', 'curvedCCW', 'cubicBezier']
      },
      roundness: { number: number },
      forceDirection: {
        string: ['horizontal', 'vertical', 'none'],
        boolean: bool
      },
      __type__: { object: object, boolean: bool }
    },
    title: { string: string, undefined: 'undefined' },
    width: { number: number },
    widthConstraint: {
      maximum: { number: number },
      __type__: { object: object, boolean: bool, number: number }
    },
    value: { number: number, undefined: 'undefined' },
    __type__: { object: object }
  },
  groups: {
    useDefaultGroups: { boolean: bool },
    __any__: 'get from nodes, will be overwritten below',
    __type__: { object: object }
  },
  interaction: {
    dragNodes: { boolean: bool },
    dragView: { boolean: bool },
    hideEdgesOnDrag: { boolean: bool },
    hideEdgesOnZoom: { boolean: bool },
    hideNodesOnDrag: { boolean: bool },
    hover: { boolean: bool },
    keyboard: {
      enabled: { boolean: bool },
      speed: {
        x: { number: number },
        y: { number: number },
        zoom: { number: number },
        __type__: { object: object }
      },
      bindToWindow: { boolean: bool },
      __type__: { object: object, boolean: bool }
    },
    multiselect: { boolean: bool },
    navigationButtons: { boolean: bool },
    selectable: { boolean: bool },
    selectConnectedEdges: { boolean: bool },
    hoverConnectedEdges: { boolean: bool },
    tooltipDelay: { number: number },
    zoomView: { boolean: bool },
    zoomSpeed: { number: number },
    __type__: { object: object }
  },
  layout: {
    randomSeed: { undefined: 'undefined', number: number },
    improvedLayout: { boolean: bool },
    hierarchical: {
      enabled: { boolean: bool },
      levelSeparation: { number: number },
      nodeSpacing: { number: number },
      treeSpacing: { number: number },
      blockShifting: { boolean: bool },
      edgeMinimization: { boolean: bool },
      parentCentralization: { boolean: bool },
      direction: { string: ['UD', 'DU', 'LR', 'RL'] }, 
      sortMethod: { string: ['hubsize', 'directed'] }, 
      __type__: { object: object, boolean: bool }
    },
    __type__: { object: object }
  },
  manipulation: {
    enabled: { boolean: bool },
    initiallyActive: { boolean: bool },
    addNode: { boolean: bool, 'function': 'function' },
    addEdge: { boolean: bool, 'function': 'function' },
    editNode: { 'function': 'function' },
    editEdge: {
      editWithoutDrag: { 'function': 'function' },
      __type__: { object: object, boolean: bool, 'function': 'function' }
    },
    deleteNode: { boolean: bool, 'function': 'function' },
    deleteEdge: { boolean: bool, 'function': 'function' },
    controlNodeStyle: 'get from nodes, will be overwritten below',
    __type__: { object: object, boolean: bool }
  },
  nodes: {
    borderWidth: { number: number },
    borderWidthSelected: { number: number, undefined: 'undefined' },
    brokenImage: { string: string, undefined: 'undefined' },
    chosen: {
      label: { boolean: bool, 'function': 'function' },
      node: { boolean: bool, 'function': 'function' },
      __type__: { object: object, boolean: bool }
    },
    color: {
      border: { string: string },
      background: { string: string },
      highlight: {
        border: { string: string },
        background: { string: string },
        __type__: { object: object, string: string }
      },
      hover: {
        border: { string: string },
        background: { string: string },
        __type__: { object: object, string: string }
      },
      __type__: { object: object, string: string }
    },
    fixed: {
      x: { boolean: bool },
      y: { boolean: bool },
      __type__: { object: object, boolean: bool }
    },
    font: {
      align: { string: string },
      color: { string: string },
      size: { number: number }, 
      face: { string: string },
      background: { string: string },
      strokeWidth: { number: number }, 
      strokeColor: { string: string },
      vadjust: { number: number },
      multi: { boolean: bool, string: string },
      bold: {
        color: { string: string },
        size: { number: number }, 
        face: { string: string },
        mod: { string: string },
        vadjust: { number: number },
        __type__: { object: object, string: string }
      },
      boldital: {
        color: { string: string },
        size: { number: number }, 
        face: { string: string },
        mod: { string: string },
        vadjust: { number: number },
        __type__: { object: object, string: string }
      },
      ital: {
        color: { string: string },
        size: { number: number }, 
        face: { string: string },
        mod: { string: string },
        vadjust: { number: number },
        __type__: { object: object, string: string }
      },
      mono: {
        color: { string: string },
        size: { number: number }, 
        face: { string: string },
        mod: { string: string },
        vadjust: { number: number },
        __type__: { object: object, string: string }
      },
      __type__: { object: object, string: string }
    },
    group: { string: string, number: number, undefined: 'undefined' },
    heightConstraint: {
      minimum: { number: number },
      valign: { string: string },
      __type__: { object: object, boolean: bool, number: number }
    },
    hidden: { boolean: bool },
    icon: {
      face: { string: string },
      code: { string: string }, 
      size: { number: number }, 
      color: { string: string },
      __type__: { object: object }
    },
    id: { string: string, number: number },
    image: {
      selected: { string: string, undefined: 'undefined' }, 
      unselected: { string: string, undefined: 'undefined' }, 
      __type__: { object: object, string: string }
    },
    label: { string: string, undefined: 'undefined' },
    labelHighlightBold: { boolean: bool },
    level: { number: number, undefined: 'undefined' },
    margin: {
      top: { number: number },
      right: { number: number },
      bottom: { number: number },
      left: { number: number },
      __type__: { object: object, number: number }
    },
    mass: { number: number },
    physics: { boolean: bool },
    scaling: {
      min: { number: number },
      max: { number: number },
      label: {
        enabled: { boolean: bool },
        min: { number: number },
        max: { number: number },
        maxVisible: { number: number },
        drawThreshold: { number: number },
        __type__: { object: object, boolean: bool }
      },
      customScalingFunction: { 'function': 'function' },
      __type__: { object: object }
    },
    shadow: {
      enabled: { boolean: bool },
      color: { string: string },
      size: { number: number },
      x: { number: number },
      y: { number: number },
      __type__: { object: object, boolean: bool }
    },
    shape: {
      string: ['ellipse', 'circle', 'database', 'box', 'text', 'image', 'circularImage', 'diamond', 'dot', 'star', 'triangle', 'triangleDown', 'square', 'icon', 'hexagon']
    },
    shapeProperties: {
      borderDashes: { boolean: bool, array: array },
      borderRadius: { number: number },
      interpolation: { boolean: bool },
      useImageSize: { boolean: bool },
      useBorderWithImage: { boolean: bool },
      __type__: { object: object }
    },
    size: { number: number },
    title: { string: string, dom: dom, undefined: 'undefined' },
    value: { number: number, undefined: 'undefined' },
    widthConstraint: {
      minimum: { number: number },
      maximum: { number: number },
      __type__: { object: object, boolean: bool, number: number }
    },
    x: { number: number },
    y: { number: number },
    __type__: { object: object }
  },
  physics: {
    enabled: { boolean: bool },
    barnesHut: {
      gravitationalConstant: { number: number },
      centralGravity: { number: number },
      springLength: { number: number },
      springConstant: { number: number },
      damping: { number: number },
      avoidOverlap: { number: number },
      __type__: { object: object }
    },
    forceAtlas2Based: {
      gravitationalConstant: { number: number },
      centralGravity: { number: number },
      springLength: { number: number },
      springConstant: { number: number },
      damping: { number: number },
      avoidOverlap: { number: number },
      __type__: { object: object }
    },
    repulsion: {
      centralGravity: { number: number },
      springLength: { number: number },
      springConstant: { number: number },
      nodeDistance: { number: number },
      damping: { number: number },
      __type__: { object: object }
    },
    hierarchicalRepulsion: {
      centralGravity: { number: number },
      springLength: { number: number },
      springConstant: { number: number },
      nodeDistance: { number: number },
      damping: { number: number },
      __type__: { object: object }
    },
    maxVelocity: { number: number },
    minVelocity: { number: number }, 
    solver: {
      string: ['barnesHut', 'repulsion', 'hierarchicalRepulsion', 'forceAtlas2Based']
    },
    stabilization: {
      enabled: { boolean: bool },
      iterations: { number: number }, 
      updateInterval: { number: number },
      onlyDynamicEdges: { boolean: bool },
      fit: { boolean: bool },
      __type__: { object: object, boolean: bool }
    },
    timestep: { number: number },
    adaptiveTimestep: { boolean: bool },
    __type__: { object: object, boolean: bool }
  },

  autoResize: { boolean: bool },
  clickToUse: { boolean: bool },
  locale: { string: string },
  locales: {
    __any__: { any: any },
    __type__: { object: object }
  },
  height: { string: string },
  width: { string: string },
  __type__: { object: object }
};

allOptions.groups.__any__ = allOptions.nodes;
allOptions.manipulation.controlNodeStyle = allOptions.nodes;

var configureOptions = {
  nodes: {
    borderWidth: [1, 0, 10, 1],
    borderWidthSelected: [2, 0, 10, 1],
    color: {
      border: ['color', '#2B7CE9'],
      background: ['color', '#97C2FC'],
      highlight: {
        border: ['color', '#2B7CE9'],
        background: ['color', '#D2E5FF']
      },
      hover: {
        border: ['color', '#2B7CE9'],
        background: ['color', '#D2E5FF']
      }
    },
    fixed: {
      x: false,
      y: false
    },
    font: {
      color: ['color', '#343434'],
      size: [14, 0, 100, 1], 
      face: ['arial', 'verdana', 'tahoma'],
      background: ['color', 'none'],
      strokeWidth: [0, 0, 50, 1], 
      strokeColor: ['color', '#ffffff']
    },
    hidden: false,
    labelHighlightBold: true,
    physics: true,
    scaling: {
      min: [10, 0, 200, 1],
      max: [30, 0, 200, 1],
      label: {
        enabled: false,
        min: [14, 0, 200, 1],
        max: [30, 0, 200, 1],
        maxVisible: [30, 0, 200, 1],
        drawThreshold: [5, 0, 20, 1]
      }
    },
    shadow: {
      enabled: false,
      color: 'rgba(0,0,0,0.5)',
      size: [10, 0, 20, 1],
      x: [5, -30, 30, 1],
      y: [5, -30, 30, 1]
    },
    shape: ['ellipse', 'box', 'circle', 'database', 'diamond', 'dot', 'square', 'star', 'text', 'triangle', 'triangleDown', 'hexagon'],
    shapeProperties: {
      borderDashes: false,
      borderRadius: [6, 0, 20, 1],
      interpolation: true,
      useImageSize: false
    },
    size: [25, 0, 200, 1]
  },
  edges: {
    arrows: {
      to: { enabled: false, scaleFactor: [1, 0, 3, 0.05], type: 'arrow' },
      middle: { enabled: false, scaleFactor: [1, 0, 3, 0.05], type: 'arrow' },
      from: { enabled: false, scaleFactor: [1, 0, 3, 0.05], type: 'arrow' }
    },
    arrowStrikethrough: true,
    color: {
      color: ['color', '#848484'],
      highlight: ['color', '#848484'],
      hover: ['color', '#848484'],
      inherit: ['from', 'to', 'both', true, false],
      opacity: [1, 0, 1, 0.05]
    },
    dashes: false,
    font: {
      color: ['color', '#343434'],
      size: [14, 0, 100, 1], 
      face: ['arial', 'verdana', 'tahoma'],
      background: ['color', 'none'],
      strokeWidth: [2, 0, 50, 1], 
      strokeColor: ['color', '#ffffff'],
      align: ['horizontal', 'top', 'middle', 'bottom']
    },
    hidden: false,
    hoverWidth: [1.5, 0, 5, 0.1],
    labelHighlightBold: true,
    physics: true,
    scaling: {
      min: [1, 0, 100, 1],
      max: [15, 0, 100, 1],
      label: {
        enabled: true,
        min: [14, 0, 200, 1],
        max: [30, 0, 200, 1],
        maxVisible: [30, 0, 200, 1],
        drawThreshold: [5, 0, 20, 1]
      }
    },
    selectionWidth: [1.5, 0, 5, 0.1],
    selfReferenceSize: [20, 0, 200, 1],
    shadow: {
      enabled: false,
      color: 'rgba(0,0,0,0.5)',
      size: [10, 0, 20, 1],
      x: [5, -30, 30, 1],
      y: [5, -30, 30, 1]
    },
    smooth: {
      enabled: true,
      type: ['dynamic', 'continuous', 'discrete', 'diagonalCross', 'straightCross', 'horizontal', 'vertical', 'curvedCW', 'curvedCCW', 'cubicBezier'],
      forceDirection: ['horizontal', 'vertical', 'none'],
      roundness: [0.5, 0, 1, 0.05]
    },
    width: [1, 0, 30, 1]
  },
  layout: {
    hierarchical: {
      enabled: false,
      levelSeparation: [150, 20, 500, 5],
      nodeSpacing: [100, 20, 500, 5],
      treeSpacing: [200, 20, 500, 5],
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: ['UD', 'DU', 'LR', 'RL'], 
      sortMethod: ['hubsize', 'directed'] 
    }
  },
  interaction: {
    dragNodes: true,
    dragView: true,
    hideEdgesOnDrag: false,
    hideEdgesOnZoom: false,
    hideNodesOnDrag: false,
    hover: false,
    keyboard: {
      enabled: false,
      speed: {
        x: [10, 0, 40, 1],
        y: [10, 0, 40, 1],
        zoom: [0.02, 0, 0.1, 0.005]
      },
      bindToWindow: true
    },
    multiselect: false,
    navigationButtons: false,
    selectable: true,
    selectConnectedEdges: true,
    hoverConnectedEdges: true,
    tooltipDelay: [300, 0, 1000, 25],
    zoomView: true,
    zoomSpeed: 1
  },
  manipulation: {
    enabled: false,
    initiallyActive: false
  },
  physics: {
    enabled: true,
    barnesHut: {
      gravitationalConstant: [-2000, -30000, 0, 50],
      centralGravity: [0.3, 0, 10, 0.05],
      springLength: [95, 0, 500, 5],
      springConstant: [0.04, 0, 1.2, 0.005],
      damping: [0.09, 0, 1, 0.01],
      avoidOverlap: [0, 0, 1, 0.01]
    },
    forceAtlas2Based: {
      gravitationalConstant: [-50, -500, 0, 1],
      centralGravity: [0.01, 0, 1, 0.005],
      springLength: [95, 0, 500, 5],
      springConstant: [0.08, 0, 1.2, 0.005],
      damping: [0.4, 0, 1, 0.01],
      avoidOverlap: [0, 0, 1, 0.01]
    },
    repulsion: {
      centralGravity: [0.2, 0, 10, 0.05],
      springLength: [200, 0, 500, 5],
      springConstant: [0.05, 0, 1.2, 0.005],
      nodeDistance: [100, 0, 500, 5],
      damping: [0.09, 0, 1, 0.01]
    },
    hierarchicalRepulsion: {
      centralGravity: [0.2, 0, 10, 0.05],
      springLength: [100, 0, 500, 5],
      springConstant: [0.01, 0, 1.2, 0.005],
      nodeDistance: [120, 0, 500, 5],
      damping: [0.09, 0, 1, 0.01]
    },
    maxVelocity: [50, 0, 150, 1],
    minVelocity: [0.1, 0.01, 0.5, 0.01],
    solver: ['barnesHut', 'forceAtlas2Based', 'repulsion', 'hierarchicalRepulsion'],
    timestep: [0.5, 0.01, 1, 0.01]
  }
};

exports.allOptions = allOptions;
exports.configureOptions = configureOptions;

 }),
 (function(module, exports, __nested_webpack_require_384874__) {

"use strict";


var util = __nested_webpack_require_384874__(2);

util.extend(exports, __nested_webpack_require_384874__(121));

 }),
 (function(module, exports, __nested_webpack_require_385062__) {

__nested_webpack_require_385062__(37);
__nested_webpack_require_385062__(47);
module.exports = __nested_webpack_require_385062__(98);


 }),
 (function(module, exports, __nested_webpack_require_385232__) {

"use strict";

var addToUnscopables = __nested_webpack_require_385232__(88);
var step = __nested_webpack_require_385232__(89);
var Iterators = __nested_webpack_require_385232__(25);
var toIObject = __nested_webpack_require_385232__(18);

module.exports = __nested_webpack_require_385232__(60)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); 
  this._i = 0;                   
  this._k = kind;                
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


 }),
 (function(module, exports) {

module.exports = function () {  };


 }),
 (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


 }),
 (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


 }),
 (function(module, exports, __nested_webpack_require_386843__) {

"use strict";

var create = __nested_webpack_require_386843__(41);
var descriptor = __nested_webpack_require_386843__(28);
var setToStringTag = __nested_webpack_require_386843__(46);
var IteratorPrototype = {};

__nested_webpack_require_386843__(19)(IteratorPrototype, __nested_webpack_require_386843__(8)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


 }),
 (function(module, exports, __nested_webpack_require_387442__) {

var dP = __nested_webpack_require_387442__(12);
var anObject = __nested_webpack_require_387442__(20);
var getKeys = __nested_webpack_require_387442__(26);

module.exports = __nested_webpack_require_387442__(13) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


 }),
 (function(module, exports, __nested_webpack_require_387920__) {

var toIObject = __nested_webpack_require_387920__(18);
var toLength = __nested_webpack_require_387920__(94);
var toAbsoluteIndex = __nested_webpack_require_387920__(95);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


 }),
 (function(module, exports, __nested_webpack_require_388913__) {

var toInteger = __nested_webpack_require_388913__(42);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; 
};


 }),
 (function(module, exports, __nested_webpack_require_389205__) {

var toInteger = __nested_webpack_require_389205__(42);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


 }),
 (function(module, exports, __nested_webpack_require_389505__) {

var document = __nested_webpack_require_389505__(10).document;
module.exports = document && document.documentElement;


 }),
 (function(module, exports, __nested_webpack_require_389687__) {

var toInteger = __nested_webpack_require_389687__(42);
var defined = __nested_webpack_require_389687__(39);
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


 }),
 (function(module, exports, __nested_webpack_require_390386__) {

var anObject = __nested_webpack_require_390386__(20);
var get = __nested_webpack_require_390386__(99);
module.exports = __nested_webpack_require_390386__(6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


 }),
 (function(module, exports, __nested_webpack_require_390750__) {

var classof = __nested_webpack_require_390750__(67);
var ITERATOR = __nested_webpack_require_390750__(8)('iterator');
var Iterators = __nested_webpack_require_390750__(25);
module.exports = __nested_webpack_require_390750__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


 }),
 (function(module, exports, __nested_webpack_require_391137__) {

__nested_webpack_require_391137__(101);
var $Object = __nested_webpack_require_391137__(6).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


 }),
 (function(module, exports, __nested_webpack_require_391362__) {

var $export = __nested_webpack_require_391362__(11);
$export($export.S, 'Object', { create: __nested_webpack_require_391362__(41) });


 }),
 (function(module, exports, __nested_webpack_require_391602__) {

__nested_webpack_require_391602__(103);
module.exports = __nested_webpack_require_391602__(6).Object.keys;


 }),
 (function(module, exports, __nested_webpack_require_391760__) {

var toObject = __nested_webpack_require_391760__(30);
var $keys = __nested_webpack_require_391760__(26);

__nested_webpack_require_391760__(68)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


 }),
 (function(module, exports, __nested_webpack_require_392061__) {

module.exports = { "default": __nested_webpack_require_392061__(105), __esModule: true };

 }),
 (function(module, exports, __nested_webpack_require_392215__) {

__nested_webpack_require_392215__(47);
__nested_webpack_require_392215__(37);
module.exports = __nested_webpack_require_392215__(48).f('iterator');


 }),
 (function(module, exports, __nested_webpack_require_392400__) {

module.exports = { "default": __nested_webpack_require_392400__(107), __esModule: true };

 }),
 (function(module, exports, __nested_webpack_require_392554__) {

__nested_webpack_require_392554__(108);
__nested_webpack_require_392554__(113);
__nested_webpack_require_392554__(114);
__nested_webpack_require_392554__(115);
module.exports = __nested_webpack_require_392554__(6).Symbol;


 }),
 (function(module, exports, __nested_webpack_require_392785__) {

"use strict";

var global = __nested_webpack_require_392785__(10);
var has = __nested_webpack_require_392785__(14);
var DESCRIPTORS = __nested_webpack_require_392785__(13);
var $export = __nested_webpack_require_392785__(11);
var redefine = __nested_webpack_require_392785__(64);
var META = __nested_webpack_require_392785__(109).KEY;
var $fails = __nested_webpack_require_392785__(22);
var shared = __nested_webpack_require_392785__(44);
var setToStringTag = __nested_webpack_require_392785__(46);
var uid = __nested_webpack_require_392785__(29);
var wks = __nested_webpack_require_392785__(8);
var wksExt = __nested_webpack_require_392785__(48);
var wksDefine = __nested_webpack_require_392785__(49);
var enumKeys = __nested_webpack_require_392785__(110);
var isArray = __nested_webpack_require_392785__(111);
var anObject = __nested_webpack_require_392785__(20);
var isObject = __nested_webpack_require_392785__(21);
var toIObject = __nested_webpack_require_392785__(18);
var toPrimitive = __nested_webpack_require_392785__(40);
var createDesc = __nested_webpack_require_392785__(28);
var _create = __nested_webpack_require_392785__(41);
var gOPNExt = __nested_webpack_require_392785__(112);
var $GOPD = __nested_webpack_require_392785__(70);
var $DP = __nested_webpack_require_392785__(12);
var $keys = __nested_webpack_require_392785__(26);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __nested_webpack_require_392785__(69).f = gOPNExt.f = $getOwnPropertyNames;
  __nested_webpack_require_392785__(32).f = $propertyIsEnumerable;
  __nested_webpack_require_392785__(50).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__nested_webpack_require_392785__(27)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  create: $create,
  defineProperty: $defineProperty,
  defineProperties: $defineProperties,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  getOwnPropertyNames: $getOwnPropertyNames,
  getOwnPropertySymbols: $getOwnPropertySymbols
});

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; 
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __nested_webpack_require_392785__(19)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
setToStringTag($Symbol, 'Symbol');
setToStringTag(Math, 'Math', true);
setToStringTag(global.JSON, 'JSON', true);


 }),
 (function(module, exports, __nested_webpack_require_401728__) {

var META = __nested_webpack_require_401728__(29)('meta');
var isObject = __nested_webpack_require_401728__(21);
var has = __nested_webpack_require_401728__(14);
var setDesc = __nested_webpack_require_401728__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__nested_webpack_require_401728__(22)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, 
    w: {}          
  } });
};
var fastKey = function (it, create) {
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    if (!isExtensible(it)) return 'F';
    if (!create) return 'E';
    setMeta(it);
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    if (!isExtensible(it)) return true;
    if (!create) return false;
    setMeta(it);
  } return it[META].w;
};
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


 }),
 (function(module, exports, __nested_webpack_require_403381__) {

var getKeys = __nested_webpack_require_403381__(26);
var gOPS = __nested_webpack_require_403381__(50);
var pIE = __nested_webpack_require_403381__(32);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


 }),
 (function(module, exports, __nested_webpack_require_403924__) {

var cof = __nested_webpack_require_403924__(38);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


 }),
 (function(module, exports, __nested_webpack_require_404156__) {

var toIObject = __nested_webpack_require_404156__(18);
var gOPN = __nested_webpack_require_404156__(69).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


 }),
 (function(module, exports) {



 }),
 (function(module, exports, __nested_webpack_require_404894__) {

__nested_webpack_require_404894__(49)('asyncIterator');


 }),
 (function(module, exports, __nested_webpack_require_405015__) {

__nested_webpack_require_405015__(49)('observable');


 }),
 (function(module, exports, __nested_webpack_require_405133__) {

(function(module) {var require;

;(function (global, factory) {
      true ? module.exports = factory() :
    0
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); 
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            
    var match2         = /\d\d/;          
    var match3         = /\d{3}/;         
    var match4         = /\d{4}/;         
    var match6         = /[+-]?\d{6}/;    
    var match1to2      = /\d\d?/;         
    var match3to4      = /\d\d\d\d?/;     
    var match5to6      = /\d\d\d\d\d\d?/; 
    var match1to3      = /\d{1,3}/;       
    var match1to4      = /\d{1,4}/;       
    var match1to6      = /[+-]?\d{1,6}/;  

    var matchUnsigned  = /\d+/;           
    var matchSigned    = /[+-]?\d+/;      

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; 
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; 

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; 

    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;


    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');


    addUnitAlias('year', 'y');


    addUnitPriority('year', 1);


    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });


    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }


    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };


    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }


    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }


    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });


    addUnitAlias('month', 'M');


    addUnitPriority('month', 8);


    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });


    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        for (i = 0; i < 12; i++) {
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }


    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        var date = new Date(y, m, d, h, M, s, ms);

        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function firstWeekOffset(year, dow, doy) {
        var 
            fwd = 7 + dow - doy,
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }


    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');


    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');


    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);


    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });



    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, 
        doy : 6  
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }


    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }


    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');


    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);


    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });


    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }


    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        if (!m) {
            return isArray(this._weekdays) ? this._weekdays :
                this._weekdays['standalone'];
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }


    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }


        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }


    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);


    addUnitAlias('hour', 'h');

    addUnitPriority('hour', 13);


    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });


    function localeIsPM (input) {
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }



    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            getSetGlobalLocale(name);


            return locales[name];
        } else {
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            getSetGlobalLocale(name);
        } else {
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    hooks.ISO_8601 = function () {};

    hooks.RFC_2822 = function () {};

    function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            return hour;
        }
    }

    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; 
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        this._milliseconds = +milliseconds +
            seconds * 1e3 + 
            minutes * 6e4 + 
            hours * 1000 * 60 * 60; 
        this._days = +days +
            weeks * 7;
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }


    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');


    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });


    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }


    hooks.updateOffset = function () {};


    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign 
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        var res = inp && parseFloat(inp.replace(',', '.'));
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; 
            case 'minute': output = (this - that) / 6e4; break; 
            case 'hour': output = (this - that) / 36e5; break; 
            case 'day': output = (this - that - zoneDelta) / 864e5; break; 
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; 
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        switch (units) {
            case 'year':
                this.month(0);
            case 'quarter':
            case 'month':
                this.date(1);
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
            case 'hour':
                this.minutes(0);
            case 'minute':
                this.seconds(0);
            case 'second':
                this.milliseconds(0);
        }

        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }


    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');


    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');


    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);



    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });


    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }


    addFormatToken('Q', 0, 'Qo', 'quarter');


    addUnitAlias('quarter', 'Q');


    addUnitPriority('quarter', 7);


    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });


    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }


    addFormatToken('D', ['DD', 2], 'Do', 'date');


    addUnitAlias('date', 'D');

    addUnitPriority('date', 9);


    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });


    var getSetDayOfMonth = makeGetSet('Date', true);


    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');


    addUnitAlias('dayOfYear', 'DDD');

    addUnitPriority('dayOfYear', 4);


    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });



    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }


    addFormatToken('m', ['mm', 2], 0, 'minute');


    addUnitAlias('minute', 'm');


    addUnitPriority('minute', 14);


    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);


    var getSetMinute = makeGetSet('Minutes', false);


    addFormatToken('s', ['ss', 2], 0, 'second');


    addUnitAlias('second', 's');


    addUnitPriority('second', 15);


    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);


    var getSetSecond = makeGetSet('Seconds', false);


    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });



    addUnitAlias('millisecond', 'ms');


    addUnitPriority('millisecond', 16);


    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    var getSetMillisecond = makeGetSet('Milliseconds', false);


    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');


    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });


    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         
        s : 45,         
        m : 45,         
        h : 22,         
        d : 26,         
        M : 11          
    };

    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        years  = absFloor(months / 12);
        months %= 12;


        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;



    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');


    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });



    hooks.version = '2.22.2';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   
        DATE: 'YYYY-MM-DD',                             
        TIME: 'HH:mm',                                  
        TIME_SECONDS: 'HH:mm:ss',                       
        TIME_MS: 'HH:mm:ss.SSS',                        
        WEEK: 'YYYY-[W]WW',                             
        MONTH: 'YYYY-MM'                                
    };

    return hooks;

})));

}.call(exports, __nested_webpack_require_405133__(117)(module)))

 }),
 (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


 }),
 (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 118;

 }),
 (function(module, exports, __nested_webpack_require_553149__) {

"use strict";
(function(global) {


var _rng;

var globalVar = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : null;

if (globalVar && globalVar.crypto && crypto.getRandomValues) {
  var _rnds8 = new Uint8Array(16);
  _rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!_rng) {
  var _rnds = new Array(16);
  _rng = function _rng() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}




var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

function parse(s, buf, offset) {
  var i = buf && offset || 0,
      ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function (oct) {
    if (ii < 16) {
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

function unparse(buf, offset) {
  var i = offset || 0,
      bth = _byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}


var _seedBytes = _rng();

var _nodeId = [_seedBytes[0] | 0x01, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]];

var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

var _lastMSecs = 0,
    _lastNSecs = 0;

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  msecs += 12219292800000;

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  b[i++] = tmh >>> 24 & 0xf | 0x10; 
  b[i++] = tmh >>> 16 & 0xff;

  b[i++] = clockseq >>> 8 | 0x80;

  b[i++] = clockseq & 0xff;

  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}


function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80;

  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

module.exports = uuid;
}.call(exports, __nested_webpack_require_553149__(120)))

 }),
 (function(module, exports) {

var g;

g = (function() {
	return this;
})();

try {
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	if(typeof window === "object")
		g = window;
}


module.exports = g;


 }),
 (function(module, exports, __nested_webpack_require_559973__) {

"use strict";


exports.util = __nested_webpack_require_559973__(2);
exports.DOMutil = __nested_webpack_require_559973__(122);

exports.DataSet = __nested_webpack_require_559973__(33);
exports.DataView = __nested_webpack_require_559973__(51);
exports.Queue = __nested_webpack_require_559973__(72);

exports.Network = __nested_webpack_require_559973__(124);
exports.network = {
  Images: __nested_webpack_require_559973__(76),
  dotparser: __nested_webpack_require_559973__(74),
  gephiParser: __nested_webpack_require_559973__(75),
  allOptions: __nested_webpack_require_559973__(84)
};
exports.network.convertDot = function (input) {
  return exports.network.dotparser.DOTToGraph(input);
};
exports.network.convertGephi = function (input, options) {
  return exports.network.gephiParser.parseGephi(input, options);
};

exports.moment = __nested_webpack_require_559973__(71);
exports.Hammer = __nested_webpack_require_559973__(24);
exports.keycharm = __nested_webpack_require_559973__(52);

 }),
 (function(module, exports, __webpack_require__) {

"use strict";



exports.prepareElements = function (JSONcontainer) {
  for (var elementType in JSONcontainer) {
    if (JSONcontainer.hasOwnProperty(elementType)) {
      JSONcontainer[elementType].redundant = JSONcontainer[elementType].used;
      JSONcontainer[elementType].used = [];
    }
  }
};

exports.cleanupElements = function (JSONcontainer) {
  for (var elementType in JSONcontainer) {
    if (JSONcontainer.hasOwnProperty(elementType)) {
      if (JSONcontainer[elementType].redundant) {
        for (var i = 0; i < JSONcontainer[elementType].redundant.length; i++) {
          JSONcontainer[elementType].redundant[i].parentNode.removeChild(JSONcontainer[elementType].redundant[i]);
        }
        JSONcontainer[elementType].redundant = [];
      }
    }
  }
};

exports.resetElements = function (JSONcontainer) {
  exports.prepareElements(JSONcontainer);
  exports.cleanupElements(JSONcontainer);
  exports.prepareElements(JSONcontainer);
};

exports.getSVGElement = function (elementType, JSONcontainer, svgContainer) {
  var element;
  if (JSONcontainer.hasOwnProperty(elementType)) {
    if (JSONcontainer[elementType].redundant.length > 0) {
      element = JSONcontainer[elementType].redundant[0];
      JSONcontainer[elementType].redundant.shift();
    } else {
      element = document.createElementNS('http://www.w3.org/2000/svg', elementType);
      svgContainer.appendChild(element);
    }
  } else {
    element = document.createElementNS('http://www.w3.org/2000/svg', elementType);
    JSONcontainer[elementType] = { used: [], redundant: [] };
    svgContainer.appendChild(element);
  }
  JSONcontainer[elementType].used.push(element);
  return element;
};

exports.getDOMElement = function (elementType, JSONcontainer, DOMContainer, insertBefore) {
  var element;
  if (JSONcontainer.hasOwnProperty(elementType)) {
    if (JSONcontainer[elementType].redundant.length > 0) {
      element = JSONcontainer[elementType].redundant[0];
      JSONcontainer[elementType].redundant.shift();
    } else {
      element = document.createElement(elementType);
      if (insertBefore !== undefined) {
        DOMContainer.insertBefore(element, insertBefore);
      } else {
        DOMContainer.appendChild(element);
      }
    }
  } else {
    element = document.createElement(elementType);
    JSONcontainer[elementType] = { used: [], redundant: [] };
    if (insertBefore !== undefined) {
      DOMContainer.insertBefore(element, insertBefore);
    } else {
      DOMContainer.appendChild(element);
    }
  }
  JSONcontainer[elementType].used.push(element);
  return element;
};

exports.drawPoint = function (x, y, groupTemplate, JSONcontainer, svgContainer, labelObj) {
  var point;
  if (groupTemplate.style == 'circle') {
    point = exports.getSVGElement('circle', JSONcontainer, svgContainer);
    point.setAttributeNS(null, 'cx', x);
    point.setAttributeNS(null, 'cy', y);
    point.setAttributeNS(null, 'r', 0.5 * groupTemplate.size);
  } else {
    point = exports.getSVGElement('rect', JSONcontainer, svgContainer);
    point.setAttributeNS(null, 'x', x - 0.5 * groupTemplate.size);
    point.setAttributeNS(null, 'y', y - 0.5 * groupTemplate.size);
    point.setAttributeNS(null, 'width', groupTemplate.size);
    point.setAttributeNS(null, 'height', groupTemplate.size);
  }

  if (groupTemplate.styles !== undefined) {
    point.setAttributeNS(null, 'style', groupTemplate.styles);
  }
  point.setAttributeNS(null, 'class', groupTemplate.className + ' vis-point');

  if (labelObj) {
    var label = exports.getSVGElement('text', JSONcontainer, svgContainer);
    if (labelObj.xOffset) {
      x = x + labelObj.xOffset;
    }

    if (labelObj.yOffset) {
      y = y + labelObj.yOffset;
    }
    if (labelObj.content) {
      label.textContent = labelObj.content;
    }

    if (labelObj.className) {
      label.setAttributeNS(null, 'class', labelObj.className + ' vis-label');
    }
    label.setAttributeNS(null, 'x', x);
    label.setAttributeNS(null, 'y', y);
  }

  return point;
};

exports.drawBar = function (x, y, width, height, className, JSONcontainer, svgContainer, style) {
  if (height != 0) {
    if (height < 0) {
      height *= -1;
      y -= height;
    }
    var rect = exports.getSVGElement('rect', JSONcontainer, svgContainer);
    rect.setAttributeNS(null, 'x', x - 0.5 * width);
    rect.setAttributeNS(null, 'y', y);
    rect.setAttributeNS(null, 'width', width);
    rect.setAttributeNS(null, 'height', height);
    rect.setAttributeNS(null, 'class', className);
    if (style) {
      rect.setAttributeNS(null, 'style', style);
    }
  }
};

 }),
 (function(module, exports, __nested_webpack_require_568470__) {

var core = __nested_webpack_require_568470__(6);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { 
  return $JSON.stringify.apply($JSON, arguments);
};


 }),
 (function(module, exports, __nested_webpack_require_568787__) {

"use strict";


__nested_webpack_require_568787__(125);

var Emitter = __nested_webpack_require_568787__(73);
var util = __nested_webpack_require_568787__(2);
var dotparser = __nested_webpack_require_568787__(74);
var gephiParser = __nested_webpack_require_568787__(75);
var Activator = __nested_webpack_require_568787__(126);
var locales = __nested_webpack_require_568787__(129);

var Images = __nested_webpack_require_568787__(76)['default'];
var Groups = __nested_webpack_require_568787__(134)['default'];
var NodesHandler = __nested_webpack_require_568787__(135)['default'];
var EdgesHandler = __nested_webpack_require_568787__(165)['default'];
var PhysicsEngine = __nested_webpack_require_568787__(171)['default'];
var ClusterEngine = __nested_webpack_require_568787__(178)['default'];
var CanvasRenderer = __nested_webpack_require_568787__(180)['default'];
var Canvas = __nested_webpack_require_568787__(181)['default'];
var View = __nested_webpack_require_568787__(182)['default'];
var InteractionHandler = __nested_webpack_require_568787__(183)['default'];
var SelectionHandler = __nested_webpack_require_568787__(186)['default'];
var LayoutEngine = __nested_webpack_require_568787__(187)['default'];
var ManipulationSystem = __nested_webpack_require_568787__(190)['default'];
var Configurator = __nested_webpack_require_568787__(191)['default'];
var Validator = __nested_webpack_require_568787__(54)['default'];

var _require = __nested_webpack_require_568787__(54),
    printStyle = _require.printStyle;

var _require2 = __nested_webpack_require_568787__(84),
    allOptions = _require2.allOptions,
    configureOptions = _require2.configureOptions;

var KamadaKawai = __nested_webpack_require_568787__(193)['default'];

function Network(container, data, options) {
  var _this = this;

  if (!(this instanceof Network)) {
    throw new SyntaxError('Constructor must be called with the new operator');
  }

  this.options = {};
  this.defaultOptions = {
    locale: 'en',
    locales: locales,
    clickToUse: false
  };
  util.extend(this.options, this.defaultOptions);

  this.body = {
    container: container,

    nodes: {},
    nodeIndices: [],
    edges: {},
    edgeIndices: [],

    emitter: {
      on: this.on.bind(this),
      off: this.off.bind(this),
      emit: this.emit.bind(this),
      once: this.once.bind(this)
    },
    eventListeners: {
      onTap: function onTap() {},
      onTouch: function onTouch() {},
      onDoubleTap: function onDoubleTap() {},
      onHold: function onHold() {},
      onDragStart: function onDragStart() {},
      onDrag: function onDrag() {},
      onDragEnd: function onDragEnd() {},
      onMouseWheel: function onMouseWheel() {},
      onPinch: function onPinch() {},
      onMouseMove: function onMouseMove() {},
      onRelease: function onRelease() {},
      onContext: function onContext() {}
    },
    data: {
      nodes: null, 
      edges: null 
    },
    functions: {
      createNode: function createNode() {},
      createEdge: function createEdge() {},
      getPointer: function getPointer() {}
    },
    modules: {},
    view: {
      scale: 1,
      translation: { x: 0, y: 0 }
    }

  };this.bindEventListeners();

  this.images = new Images(function () {
    return _this.body.emitter.emit('_requestRedraw');
  }); 
  this.groups = new Groups(); 
  this.canvas = new Canvas(this.body); 
  this.selectionHandler = new SelectionHandler(this.body, this.canvas); 
  this.interactionHandler = new InteractionHandler(this.body, this.canvas, this.selectionHandler); 
  this.view = new View(this.body, this.canvas); 
  this.renderer = new CanvasRenderer(this.body, this.canvas); 
  this.physics = new PhysicsEngine(this.body); 
  this.layoutEngine = new LayoutEngine(this.body); 
  this.clustering = new ClusterEngine(this.body); 
  this.manipulation = new ManipulationSystem(this.body, this.canvas, this.selectionHandler); 

  this.nodesHandler = new NodesHandler(this.body, this.images, this.groups, this.layoutEngine); 
  this.edgesHandler = new EdgesHandler(this.body, this.images, this.groups); 

  this.body.modules['kamadaKawai'] = new KamadaKawai(this.body, 150, 0.05); 
  this.body.modules['clustering'] = this.clustering;

  this.canvas._create();

  this.setOptions(options);

  this.setData(data);
}

Emitter(Network.prototype);

Network.prototype.setOptions = function (options) {
  var _this2 = this;

  if (options === null) {
    options = undefined; 
  }

  if (options !== undefined) {
    var errorFound = Validator.validate(options, allOptions);
    if (errorFound === true) {
      console.log('%cErrors have been found in the supplied options object.', printStyle);
    }

    var fields = ['locale', 'locales', 'clickToUse'];
    util.selectiveDeepExtend(fields, this.options, options);

    options = this.layoutEngine.setOptions(options.layout, options);

    this.canvas.setOptions(options); 

    this.groups.setOptions(options.groups);
    this.nodesHandler.setOptions(options.nodes);
    this.edgesHandler.setOptions(options.edges);
    this.physics.setOptions(options.physics);
    this.manipulation.setOptions(options.manipulation, options, this.options); 

    this.interactionHandler.setOptions(options.interaction);
    this.renderer.setOptions(options.interaction); 
    this.selectionHandler.setOptions(options.interaction); 

    if (options.groups !== undefined) {
      this.body.emitter.emit('refreshNodes');
    }

    if ('configure' in options) {
      if (!this.configurator) {
        this.configurator = new Configurator(this, this.body.container, configureOptions, this.canvas.pixelRatio);
      }

      this.configurator.setOptions(options.configure);
    }

    if (this.configurator && this.configurator.options.enabled === true) {
      var networkOptions = {
        nodes: {},
        edges: {},
        layout: {},
        interaction: {},
        manipulation: {},
        physics: {},
        global: {}
      };
      util.deepExtend(networkOptions.nodes, this.nodesHandler.options);
      util.deepExtend(networkOptions.edges, this.edgesHandler.options);
      util.deepExtend(networkOptions.layout, this.layoutEngine.options);
      util.deepExtend(networkOptions.interaction, this.selectionHandler.options);
      util.deepExtend(networkOptions.interaction, this.renderer.options);

      util.deepExtend(networkOptions.interaction, this.interactionHandler.options);
      util.deepExtend(networkOptions.manipulation, this.manipulation.options);
      util.deepExtend(networkOptions.physics, this.physics.options);

      util.deepExtend(networkOptions.global, this.canvas.options);
      util.deepExtend(networkOptions.global, this.options);

      this.configurator.setModuleOptions(networkOptions);
    }

    if (options.clickToUse !== undefined) {
      if (options.clickToUse === true) {
        if (this.activator === undefined) {
          this.activator = new Activator(this.canvas.frame);
          this.activator.on('change', function () {
            _this2.body.emitter.emit('activate');
          });
        }
      } else {
        if (this.activator !== undefined) {
          this.activator.destroy();
          delete this.activator;
        }
        this.body.emitter.emit('activate');
      }
    } else {
      this.body.emitter.emit('activate');
    }

    this.canvas.setSize();
    this.body.emitter.emit('startSimulation');
  }
};

Network.prototype._updateVisibleIndices = function () {
  var nodes = this.body.nodes;
  var edges = this.body.edges;
  this.body.nodeIndices = [];
  this.body.edgeIndices = [];

  for (var nodeId in nodes) {
    if (nodes.hasOwnProperty(nodeId)) {
      if (!this.clustering._isClusteredNode(nodeId) && nodes[nodeId].options.hidden === false) {
        this.body.nodeIndices.push(nodes[nodeId].id);
      }
    }
  }

  for (var edgeId in edges) {
    if (edges.hasOwnProperty(edgeId)) {
      var edge = edges[edgeId];

      var fromNode = nodes[edge.fromId];
      var toNode = nodes[edge.toId];
      var edgeNodesPresent = fromNode !== undefined && toNode !== undefined;

      var isVisible = !this.clustering._isClusteredEdge(edgeId) && edge.options.hidden === false && edgeNodesPresent && fromNode.options.hidden === false && 
      toNode.options.hidden === false; 

      if (isVisible) {
        this.body.edgeIndices.push(edge.id);
      }
    }
  }
};

Network.prototype.bindEventListeners = function () {
  var _this3 = this;

  this.body.emitter.on('_dataChanged', function () {
    _this3.edgesHandler._updateState();
    _this3.body.emitter.emit('_dataUpdated');
  });

  this.body.emitter.on('_dataUpdated', function () {
    _this3.clustering._updateState();
    _this3._updateVisibleIndices();

    _this3._updateValueRange(_this3.body.nodes);
    _this3._updateValueRange(_this3.body.edges);
    _this3.body.emitter.emit('startSimulation');
    _this3.body.emitter.emit('_requestRedraw');
  });
};

Network.prototype.setData = function (data) {
  this.body.emitter.emit('resetPhysics');
  this.body.emitter.emit('_resetData');

  this.selectionHandler.unselectAll();

  if (data && data.dot && (data.nodes || data.edges)) {
    throw new SyntaxError('Data must contain either parameter "dot" or ' + ' parameter pair "nodes" and "edges", but not both.');
  }

  this.setOptions(data && data.options);
  if (data && data.dot) {
    console.log('The dot property has been deprecated. Please use the static convertDot method to convert DOT into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertDot(dotString);');
    var dotData = dotparser.DOTToGraph(data.dot);
    this.setData(dotData);
    return;
  } else if (data && data.gephi) {
    console.log('The gephi property has been deprecated. Please use the static convertGephi method to convert gephi into vis.network format and use the normal data format with nodes and edges. This converter is used like this: var data = vis.network.convertGephi(gephiJson);');
    var gephiData = gephiParser.parseGephi(data.gephi);
    this.setData(gephiData);
    return;
  } else {
    this.nodesHandler.setData(data && data.nodes, true);
    this.edgesHandler.setData(data && data.edges, true);
  }

  this.body.emitter.emit('_dataChanged');

  this.body.emitter.emit('_dataLoaded');

  this.body.emitter.emit('initPhysics');
};

Network.prototype.destroy = function () {
  this.body.emitter.emit('destroy');
  this.body.emitter.off();
  this.off();

  delete this.groups;
  delete this.canvas;
  delete this.selectionHandler;
  delete this.interactionHandler;
  delete this.view;
  delete this.renderer;
  delete this.physics;
  delete this.layoutEngine;
  delete this.clustering;
  delete this.manipulation;
  delete this.nodesHandler;
  delete this.edgesHandler;
  delete this.configurator;
  delete this.images;

  for (var nodeId in this.body.nodes) {
    if (!this.body.nodes.hasOwnProperty(nodeId)) continue;
    delete this.body.nodes[nodeId];
  }

  for (var edgeId in this.body.edges) {
    if (!this.body.edges.hasOwnProperty(edgeId)) continue;
    delete this.body.edges[edgeId];
  }

  util.recursiveDOMDelete(this.body.container);
};

Network.prototype._updateValueRange = function (obj) {
  var id;

  var valueMin = undefined;
  var valueMax = undefined;
  var valueTotal = 0;
  for (id in obj) {
    if (obj.hasOwnProperty(id)) {
      var value = obj[id].getValue();
      if (value !== undefined) {
        valueMin = valueMin === undefined ? value : Math.min(value, valueMin);
        valueMax = valueMax === undefined ? value : Math.max(value, valueMax);
        valueTotal += value;
      }
    }
  }

  if (valueMin !== undefined && valueMax !== undefined) {
    for (id in obj) {
      if (obj.hasOwnProperty(id)) {
        obj[id].setValueRange(valueMin, valueMax, valueTotal);
      }
    }
  }
};

Network.prototype.isActive = function () {
  return !this.activator || this.activator.active;
};

Network.prototype.setSize = function () {
  return this.canvas.setSize.apply(this.canvas, arguments);
};
Network.prototype.canvasToDOM = function () {
  return this.canvas.canvasToDOM.apply(this.canvas, arguments);
};
Network.prototype.DOMtoCanvas = function () {
  return this.canvas.DOMtoCanvas.apply(this.canvas, arguments);
};

Network.prototype.findNode = function () {
  return this.clustering.findNode.apply(this.clustering, arguments);
};

Network.prototype.isCluster = function () {
  return this.clustering.isCluster.apply(this.clustering, arguments);
};
Network.prototype.openCluster = function () {
  return this.clustering.openCluster.apply(this.clustering, arguments);
};
Network.prototype.cluster = function () {
  return this.clustering.cluster.apply(this.clustering, arguments);
};
Network.prototype.getNodesInCluster = function () {
  return this.clustering.getNodesInCluster.apply(this.clustering, arguments);
};
Network.prototype.clusterByConnection = function () {
  return this.clustering.clusterByConnection.apply(this.clustering, arguments);
};
Network.prototype.clusterByHubsize = function () {
  return this.clustering.clusterByHubsize.apply(this.clustering, arguments);
};

Network.prototype.clusterOutliers = function () {
  return this.clustering.clusterOutliers.apply(this.clustering, arguments);
};

Network.prototype.getSeed = function () {
  return this.layoutEngine.getSeed.apply(this.layoutEngine, arguments);
};
Network.prototype.enableEditMode = function () {
  return this.manipulation.enableEditMode.apply(this.manipulation, arguments);
};
Network.prototype.disableEditMode = function () {
  return this.manipulation.disableEditMode.apply(this.manipulation, arguments);
};
Network.prototype.addNodeMode = function () {
  return this.manipulation.addNodeMode.apply(this.manipulation, arguments);
};
Network.prototype.editNode = function () {
  return this.manipulation.editNode.apply(this.manipulation, arguments);
};
Network.prototype.editNodeMode = function () {
  console.log('Deprecated: Please use editNode instead of editNodeMode.');
  return this.manipulation.editNode.apply(this.manipulation, arguments);
};
Network.prototype.addEdgeMode = function () {
  return this.manipulation.addEdgeMode.apply(this.manipulation, arguments);
};
Network.prototype.editEdgeMode = function () {
  return this.manipulation.editEdgeMode.apply(this.manipulation, arguments);
};
Network.prototype.deleteSelected = function () {
  return this.manipulation.deleteSelected.apply(this.manipulation, arguments);
};
Network.prototype.getPositions = function () {
  return this.nodesHandler.getPositions.apply(this.nodesHandler, arguments);
};
Network.prototype.storePositions = function () {
  return this.nodesHandler.storePositions.apply(this.nodesHandler, arguments);
};
Network.prototype.moveNode = function () {
  return this.nodesHandler.moveNode.apply(this.nodesHandler, arguments);
};
Network.prototype.getBoundingBox = function () {
  return this.nodesHandler.getBoundingBox.apply(this.nodesHandler, arguments);
};
Network.prototype.getConnectedNodes = function (objectId) {
  if (this.body.nodes[objectId] !== undefined) {
    return this.nodesHandler.getConnectedNodes.apply(this.nodesHandler, arguments);
  } else {
    return this.edgesHandler.getConnectedNodes.apply(this.edgesHandler, arguments);
  }
};
Network.prototype.getConnectedEdges = function () {
  return this.nodesHandler.getConnectedEdges.apply(this.nodesHandler, arguments);
};
Network.prototype.startSimulation = function () {
  return this.physics.startSimulation.apply(this.physics, arguments);
};
Network.prototype.stopSimulation = function () {
  return this.physics.stopSimulation.apply(this.physics, arguments);
};
Network.prototype.stabilize = function () {
  return this.physics.stabilize.apply(this.physics, arguments);
};
Network.prototype.getSelection = function () {
  return this.selectionHandler.getSelection.apply(this.selectionHandler, arguments);
};
Network.prototype.setSelection = function () {
  return this.selectionHandler.setSelection.apply(this.selectionHandler, arguments);
};
Network.prototype.getSelectedNodes = function () {
  return this.selectionHandler.getSelectedNodes.apply(this.selectionHandler, arguments);
};
Network.prototype.getSelectedEdges = function () {
  return this.selectionHandler.getSelectedEdges.apply(this.selectionHandler, arguments);
};
Network.prototype.getNodeAt = function () {
  var node = this.selectionHandler.getNodeAt.apply(this.selectionHandler, arguments);
  if (node !== undefined && node.id !== undefined) {
    return node.id;
  }
  return node;
};
Network.prototype.getEdgeAt = function () {
  var edge = this.selectionHandler.getEdgeAt.apply(this.selectionHandler, arguments);
  if (edge !== undefined && edge.id !== undefined) {
    return edge.id;
  }
  return edge;
};
Network.prototype.selectNodes = function () {
  return this.selectionHandler.selectNodes.apply(this.selectionHandler, arguments);
};
Network.prototype.selectEdges = function () {
  return this.selectionHandler.selectEdges.apply(this.selectionHandler, arguments);
};
Network.prototype.unselectAll = function () {
  this.selectionHandler.unselectAll.apply(this.selectionHandler, arguments);
  this.redraw();
};
Network.prototype.redraw = function () {
  return this.renderer.redraw.apply(this.renderer, arguments);
};
Network.prototype.getScale = function () {
  return this.view.getScale.apply(this.view, arguments);
};
Network.prototype.getViewPosition = function () {
  return this.view.getViewPosition.apply(this.view, arguments);
};
Network.prototype.fit = function () {
  return this.view.fit.apply(this.view, arguments);
};
Network.prototype.moveTo = function () {
  return this.view.moveTo.apply(this.view, arguments);
};
Network.prototype.focus = function () {
  return this.view.focus.apply(this.view, arguments);
};
Network.prototype.releaseNode = function () {
  return this.view.releaseNode.apply(this.view, arguments);
};
Network.prototype.getOptionsFromConfigurator = function () {
  var options = {};
  if (this.configurator) {
    options = this.configurator.getOptions.apply(this.configurator);
  }
  return options;
};

module.exports = Network;

 }),
 (function(module, exports, __webpack_require__) {

"use strict";


if (typeof CanvasRenderingContext2D !== 'undefined') {
  CanvasRenderingContext2D.prototype.circle = function (x, y, r) {
    this.beginPath();
    this.arc(x, y, r, 0, 2 * Math.PI, false);
    this.closePath();
  };

  CanvasRenderingContext2D.prototype.square = function (x, y, r) {
    this.beginPath();
    this.rect(x - r, y - r, r * 2, r * 2);
    this.closePath();
  };

  CanvasRenderingContext2D.prototype.triangle = function (x, y, r) {
    this.beginPath();

    r *= 1.15;
    y += 0.275 * r;

    var s = r * 2;
    var s2 = s / 2;
    var ir = Math.sqrt(3) / 6 * s; 
    var h = Math.sqrt(s * s - s2 * s2); 

    this.moveTo(x, y - (h - ir));
    this.lineTo(x + s2, y + ir);
    this.lineTo(x - s2, y + ir);
    this.lineTo(x, y - (h - ir));
    this.closePath();
  };

  CanvasRenderingContext2D.prototype.triangleDown = function (x, y, r) {
    this.beginPath();

    r *= 1.15;
    y -= 0.275 * r;

    var s = r * 2;
    var s2 = s / 2;
    var ir = Math.sqrt(3) / 6 * s; 
    var h = Math.sqrt(s * s - s2 * s2); 

    this.moveTo(x, y + (h - ir));
    this.lineTo(x + s2, y - ir);
    this.lineTo(x - s2, y - ir);
    this.lineTo(x, y + (h - ir));
    this.closePath();
  };

  CanvasRenderingContext2D.prototype.star = function (x, y, r) {
    this.beginPath();

    r *= 0.82;
    y += 0.1 * r;

    for (var n = 0; n < 10; n++) {
      var radius = n % 2 === 0 ? r * 1.3 : r * 0.5;
      this.lineTo(x + radius * Math.sin(n * 2 * Math.PI / 10), y - radius * Math.cos(n * 2 * Math.PI / 10));
    }

    this.closePath();
  };

  CanvasRenderingContext2D.prototype.diamond = function (x, y, r) {
    this.beginPath();

    this.lineTo(x, y + r);
    this.lineTo(x + r, y);
    this.lineTo(x, y - r);
    this.lineTo(x - r, y);

    this.closePath();
  };

  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    var r2d = Math.PI / 180;
    if (w - 2 * r < 0) {
      r = w / 2;
    } 
    if (h - 2 * r < 0) {
      r = h / 2;
    } 
    this.beginPath();
    this.moveTo(x + r, y);
    this.lineTo(x + w - r, y);
    this.arc(x + w - r, y + r, r, r2d * 270, r2d * 360, false);
    this.lineTo(x + w, y + h - r);
    this.arc(x + w - r, y + h - r, r, 0, r2d * 90, false);
    this.lineTo(x + r, y + h);
    this.arc(x + r, y + h - r, r, r2d * 90, r2d * 180, false);
    this.lineTo(x, y + r);
    this.arc(x + r, y + r, r, r2d * 180, r2d * 270, false);
    this.closePath();
  };

  CanvasRenderingContext2D.prototype.ellipse_vis = function (x, y, w, h) {
    var kappa = 0.5522848,
        ox = w / 2 * kappa,
    oy = h / 2 * kappa,
    xe = x + w,
    ye = y + h,
    xm = x + w / 2,
    ym = y + h / 2; 

    this.beginPath();
    this.moveTo(x, ym);
    this.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    this.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    this.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    this.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    this.closePath();
  };

  CanvasRenderingContext2D.prototype.database = function (x, y, w, h) {
    var f = 1 / 3;
    var wEllipse = w;
    var hEllipse = h * f;

    var kappa = 0.5522848,
        ox = wEllipse / 2 * kappa,
    oy = hEllipse / 2 * kappa,
    xe = x + wEllipse,
    ye = y + hEllipse,
    xm = x + wEllipse / 2,
    ym = y + hEllipse / 2,
    ymb = y + (h - hEllipse / 2),
    yeb = y + h; 

    this.beginPath();
    this.moveTo(xe, ym);

    this.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    this.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

    this.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    this.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);

    this.lineTo(xe, ymb);

    this.bezierCurveTo(xe, ymb + oy, xm + ox, yeb, xm, yeb);
    this.bezierCurveTo(xm - ox, yeb, x, ymb + oy, x, ymb);

    this.lineTo(x, ym);
  };

  CanvasRenderingContext2D.prototype.dashedLine = function (x, y, x2, y2, pattern) {
    this.beginPath();
    this.moveTo(x, y);

    var patternLength = pattern.length;
    var dx = x2 - x;
    var dy = y2 - y;
    var slope = dy / dx;
    var distRemaining = Math.sqrt(dx * dx + dy * dy);
    var patternIndex = 0;
    var draw = true;
    var xStep = 0;
    var dashLength = pattern[0];

    while (distRemaining >= 0.1) {
      dashLength = pattern[patternIndex++ % patternLength];
      if (dashLength > distRemaining) {
        dashLength = distRemaining;
      }

      xStep = Math.sqrt(dashLength * dashLength / (1 + slope * slope));
      xStep = dx < 0 ? -xStep : xStep;
      x += xStep;
      y += slope * xStep;

      if (draw === true) {
        this.lineTo(x, y);
      } else {
        this.moveTo(x, y);
      }

      distRemaining -= dashLength;
      draw = !draw;
    }
  };

  CanvasRenderingContext2D.prototype.hexagon = function (x, y, r) {
    this.beginPath();
    var sides = 6;
    var a = Math.PI * 2 / sides;
    this.moveTo(x + r, y);
    for (var i = 1; i < sides; i++) {
      this.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
    }
    this.closePath();
  };
}

 }),
 (function(module, exports, __nested_webpack_require_601667__) {

"use strict";


var keycharm = __nested_webpack_require_601667__(52);
var Emitter = __nested_webpack_require_601667__(73);
var Hammer = __nested_webpack_require_601667__(24);
var util = __nested_webpack_require_601667__(2);

function Activator(container) {
  this.active = false;

  this.dom = {
    container: container
  };

  this.dom.overlay = document.createElement('div');
  this.dom.overlay.className = 'vis-overlay';

  this.dom.container.appendChild(this.dom.overlay);

  this.hammer = Hammer(this.dom.overlay);
  this.hammer.on('tap', this._onTapOverlay.bind(this));

  var me = this;
  var events = ['tap', 'doubletap', 'press', 'pinch', 'pan', 'panstart', 'panmove', 'panend'];
  events.forEach(function (event) {
    me.hammer.on(event, function (event) {
      event.stopPropagation();
    });
  });

  if (document && document.body) {
    this.onClick = function (event) {
      if (!_hasParent(event.target, container)) {
        me.deactivate();
      }
    };
    document.body.addEventListener('click', this.onClick);
  }

  if (this.keycharm !== undefined) {
    this.keycharm.destroy();
  }
  this.keycharm = keycharm();

  this.escListener = this.deactivate.bind(this);
}

Emitter(Activator.prototype);

Activator.current = null;

Activator.prototype.destroy = function () {
  this.deactivate();

  this.dom.overlay.parentNode.removeChild(this.dom.overlay);

  if (this.onClick) {
    document.body.removeEventListener('click', this.onClick);
  }
  if (this.keycharm !== undefined) {
    this.keycharm.destroy();
  }
  this.keycharm = null;
  this.hammer.destroy();
  this.hammer = null;
};

Activator.prototype.activate = function () {
  if (Activator.current) {
    Activator.current.deactivate();
  }
  Activator.current = this;

  this.active = true;
  this.dom.overlay.style.display = 'none';
  util.addClassName(this.dom.container, 'vis-active');

  this.emit('change');
  this.emit('activate');

  this.keycharm.bind('esc', this.escListener);
};

Activator.prototype.deactivate = function () {
  this.active = false;
  this.dom.overlay.style.display = '';
  util.removeClassName(this.dom.container, 'vis-active');
  this.keycharm.unbind('esc', this.escListener);

  this.emit('change');
  this.emit('deactivate');
};

Activator.prototype._onTapOverlay = function (event) {
  this.activate();
  event.stopPropagation();
};

function _hasParent(element, parent) {
  while (element) {
    if (element === parent) {
      return true;
    }
    element = element.parentNode;
  }
  return false;
}

module.exports = Activator;

 }),
 (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(function () {
  var _firstTarget = null; 

  return function propagating(hammer, options) {
    var _options = options || {
      preventDefault: false
    };

    if (hammer.Manager) {
      var Hammer = hammer;

      var PropagatingHammer = function(element, options) {
        var o = Object.create(_options);
        if (options) Hammer.assign(o, options);
        return propagating(new Hammer(element, o), o);
      };
      Hammer.assign(PropagatingHammer, Hammer);

      PropagatingHammer.Manager = function (element, options) {
        var o = Object.create(_options);
        if (options) Hammer.assign(o, options);
        return propagating(new Hammer.Manager(element, o), o);
      };

      return PropagatingHammer;
    }

    var wrapper = Object.create(hammer);

    var element = hammer.element;

    if(!element.hammer) element.hammer = [];
    element.hammer.push(wrapper);

    hammer.on('hammer.input', function (event) {
      if (_options.preventDefault === true || (_options.preventDefault === event.pointerType)) {
        event.preventDefault();
      }
      if (event.isFirst) {
        _firstTarget = event.target;
      }
    });

    wrapper._handlers = {};

    wrapper.on = function (events, handler) {
      split(events).forEach(function (event) {
        var _handlers = wrapper._handlers[event];
        if (!_handlers) {
          wrapper._handlers[event] = _handlers = [];

          hammer.on(event, propagatedHandler);
        }
        _handlers.push(handler);
      });

      return wrapper;
    };

    wrapper.off = function (events, handler) {
      split(events).forEach(function (event) {
        var _handlers = wrapper._handlers[event];
        if (_handlers) {
          _handlers = handler ? _handlers.filter(function (h) {
            return h !== handler;
          }) : [];

          if (_handlers.length > 0) {
            wrapper._handlers[event] = _handlers;
          }
          else {
            hammer.off(event, propagatedHandler);
            delete wrapper._handlers[event];
          }
        }
      });

      return wrapper;
    };

    wrapper.emit = function(eventType, event) {
      _firstTarget = event.target;
      hammer.emit(eventType, event);
    };

    wrapper.destroy = function () {
      var hammers = hammer.element.hammer;
      var idx = hammers.indexOf(wrapper);
      if(idx !== -1) hammers.splice(idx,1);
      if(!hammers.length) delete hammer.element.hammer;

      wrapper._handlers = {};

      hammer.destroy();
    };

    function split(events) {
      return events.match(/[^ ]+/g);
    }

    function propagatedHandler(event) {
      if (event.type !== 'hammer.input') {
        if (!event.srcEvent._handled) {
          event.srcEvent._handled = {};
        }

        if (event.srcEvent._handled[event.type]) {
          return;
        }
        else {
          event.srcEvent._handled[event.type] = true;
        }
      }

      var stopped = false;
      event.stopPropagation = function () {
        stopped = true;
      };

      var srcStop = event.srcEvent.stopPropagation.bind(event.srcEvent);
      if(typeof srcStop == "function") {
        event.srcEvent.stopPropagation = function(){
          srcStop();
          event.stopPropagation();
        }
      }

      event.firstTarget = _firstTarget;

      var elem = _firstTarget;
      while (elem && !stopped) {
        var elemHammer = elem.hammer;
        if(elemHammer){
          var _handlers;
          for(var k = 0; k < elemHammer.length; k++){
            _handlers = elemHammer[k]._handlers[event.type];
            if(_handlers) for (var i = 0; i < _handlers.length && !stopped; i++) {
              _handlers[i](event);
            }
          }
        }
        elem = elem.parentNode;
      }
    }

    return wrapper;
  };
}));


 }),
 (function(module, exports, __nested_webpack_require_613978__) {

var __WEBPACK_AMD_DEFINE_RESULT__;
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

function inStr(str, find) {
    return str.indexOf(find) > -1;
}

function splitStr(str) {
    return str.trim().split(/\s+/g);
}

function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    handler: function() { },

    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    input.eventType = eventType;

    computeInputData(manager, input);

    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

function simpleCloneInputData(input) {
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

function getCenter(pointers) {
    var pointersLength = pointers.length;

    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; 

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT 
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        if (storeIndex < 0) {
            return;
        }

        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}


var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; 
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    set: function(value) {
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    update: function() {
        this.set(this.manager.options.touchAction);
    },

    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

function cleanTouchActions(actions) {
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    defaults: {},

    set: function(options) {
        assign(this.options, options);

        this.manager && this.manager.touchAction.update();
        return this;
    },

    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); 

        if (input.additionalEvent) { 
            emit(input.additionalEvent);
        }

        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        this.state = STATE_FAILED;
    },

    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    recognize: function(inputData) {
        var inputDataClone = assign({}, inputData);

        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    process: function(inputData) { }, 

    getTouchAction: function() { },

    reset: function() { }
};

function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    defaults: {
        pointers: 1
    },

    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, 
        threshold: 9 
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

function TapRecognizer() {
    Recognizer.apply(this, arguments);

    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, 
        time: 250, 
        threshold: 9, 
        posThreshold: 10 
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

Hammer.VERSION = '2.0.7';

Hammer.defaults = {
    domEvents: false,

    touchAction: TOUCH_ACTION_COMPUTE,

    enable: true,

    inputTarget: null,

    inputClass: null,

    preset: [
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    cssProps: {
        userSelect: 'none',

        touchSelect: 'none',

        touchCallout: 'none',

        contentZooming: 'none',

        userDrag: 'none',

        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    set: function(options) {
        assign(this.options, options);

        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        var curRecognizer = session.curRecognizer;

        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            if (session.stopped !== FORCED_STOP && ( 
                    !curRecognizer || recognizer == curRecognizer || 
                    recognizer.canRecognizeWith(curRecognizer))) { 
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    emit: function(event, data) {
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); 
freeGlobal.Hammer = Hammer;

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return Hammer;
    }).call(exports, __nested_webpack_require_613978__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}

})(window, document, 'Hammer');


 }),
 (function(module, exports, __webpack_require__) {

"use strict";


exports['en'] = {
  edit: 'Edit',
  del: 'Delete selected',
  back: 'Back',
  addNode: 'Add Node',
  addEdge: 'Add Edge',
  editNode: 'Edit Node',
  editEdge: 'Edit Edge',
  addDescription: 'Click in an empty space to place a new node.',
  edgeDescription: 'Click on a node and drag the edge to another node to connect them.',
  editEdgeDescription: 'Click on the control points and drag them to a node to connect to it.',
  createEdgeError: 'Cannot link edges to a cluster.',
  deleteClusterError: 'Clusters cannot be deleted.',
  editClusterError: 'Clusters cannot be edited.'
};
exports['en_EN'] = exports['en'];
exports['en_US'] = exports['en'];

exports['de'] = {
  edit: 'Editieren',
  del: 'L\xF6sche Auswahl',
  back: 'Zur\xFCck',
  addNode: 'Knoten hinzuf\xFCgen',
  addEdge: 'Kante hinzuf\xFCgen',
  editNode: 'Knoten editieren',
  editEdge: 'Kante editieren',
  addDescription: 'Klicke auf eine freie Stelle, um einen neuen Knoten zu plazieren.',
  edgeDescription: 'Klicke auf einen Knoten und ziehe die Kante zu einem anderen Knoten, um diese zu verbinden.',
  editEdgeDescription: 'Klicke auf die Verbindungspunkte und ziehe diese auf einen Knoten, um sie zu verbinden.',
  createEdgeError: 'Es ist nicht m\xF6glich, Kanten mit Clustern zu verbinden.',
  deleteClusterError: 'Cluster k\xF6nnen nicht gel\xF6scht werden.',
  editClusterError: 'Cluster k\xF6nnen nicht editiert werden.'
};
exports['de_DE'] = exports['de'];

exports['es'] = {
  edit: 'Editar',
  del: 'Eliminar selecci\xF3n',
  back: '\xC1tras',
  addNode: 'A\xF1adir nodo',
  addEdge: 'A\xF1adir arista',
  editNode: 'Editar nodo',
  editEdge: 'Editar arista',
  addDescription: 'Haga clic en un lugar vac\xEDo para colocar un nuevo nodo.',
  edgeDescription: 'Haga clic en un nodo y arrastre la arista hacia otro nodo para conectarlos.',
  editEdgeDescription: 'Haga clic en un punto de control y arrastrelo a un nodo para conectarlo.',
  createEdgeError: 'No se puede conectar una arista a un grupo.',
  deleteClusterError: 'No es posible eliminar grupos.',
  editClusterError: 'No es posible editar grupos.'
};
exports['es_ES'] = exports['es'];

exports['it'] = {
  edit: 'Modifica',
  del: 'Cancella la selezione',
  back: 'Indietro',
  addNode: 'Aggiungi un nodo',
  addEdge: 'Aggiungi un vertice',
  editNode: 'Modifica il nodo',
  editEdge: 'Modifica il vertice',
  addDescription: 'Clicca per aggiungere un nuovo nodo',
  edgeDescription: 'Clicca su un nodo e trascinalo ad un altro nodo per connetterli.',
  editEdgeDescription: 'Clicca sui Punti di controllo e trascinali ad un nodo per connetterli.',
  createEdgeError: 'Non si possono collegare vertici ad un cluster',
  deleteClusterError: 'I cluster non possono essere cancellati',
  editClusterError: 'I clusters non possono essere modificati.'
};
exports['it_IT'] = exports['it'];

exports['nl'] = {
  edit: 'Wijzigen',
  del: 'Selectie verwijderen',
  back: 'Terug',
  addNode: 'Node toevoegen',
  addEdge: 'Link toevoegen',
  editNode: 'Node wijzigen',
  editEdge: 'Link wijzigen',
  addDescription: 'Klik op een leeg gebied om een nieuwe node te maken.',
  edgeDescription: 'Klik op een node en sleep de link naar een andere node om ze te verbinden.',
  editEdgeDescription: 'Klik op de verbindingspunten en sleep ze naar een node om daarmee te verbinden.',
  createEdgeError: 'Kan geen link maken naar een cluster.',
  deleteClusterError: 'Clusters kunnen niet worden verwijderd.',
  editClusterError: 'Clusters kunnen niet worden aangepast.'
};
exports['nl_NL'] = exports['nl'];
exports['nl_BE'] = exports['nl'];

exports['pt-br'] = {
  edit: 'Editar',
  del: 'Remover selecionado',
  back: 'Voltar',
  addNode: 'Adicionar nó',
  addEdge: 'Adicionar aresta',
  editNode: 'Editar nó',
  editEdge: 'Editar aresta',
  addDescription: 'Clique em um espaço em branco para adicionar um novo nó',
  edgeDescription: 'Clique em um nó e arraste a aresta até outro nó para conectá-los',
  editEdgeDescription: 'Clique nos pontos de controle e os arraste para um nó para conectá-los',
  createEdgeError: 'Não foi possível linkar arestas a um cluster.',
  deleteClusterError: 'Clusters não puderam ser removidos.',
  editClusterError: 'Clusters não puderam ser editados.'
};
exports['pt-BR'] = exports['pt-br'];
exports['pt_BR'] = exports['pt-br'];
exports['pt_br'] = exports['pt-br'];

exports['ru'] = {
  edit: 'Редактировать',
  del: 'Удалить выбранное',
  back: 'Назад',
  addNode: 'Добавить узел',
  addEdge: 'Добавить ребро',
  editNode: 'Редактировать узел',
  editEdge: 'Редактировать ребро',
  addDescription: 'Кликните в свободное место, чтобы добавить новый узел.',
  edgeDescription: 'Кликните на узел и протяните ребро к другому узлу, чтобы соединить их.',
  editEdgeDescription: 'Кликните на контрольные точки и перетащите их в узел, чтобы подключиться к нему.',
  createEdgeError: 'Невозможно соединить ребра в кластер.',
  deleteClusterError: 'Кластеры не могут быть удалены',
  editClusterError: 'Кластеры недоступны для редактирования.'
};
exports['ru_RU'] = exports['ru'];

exports['cn'] = {
  edit: '编辑',
  del: '删除选定',
  back: '返回',
  addNode: '添加节点',
  addEdge: '添加连接线',
  editNode: '编辑节点',
  editEdge: '编辑连接线',
  addDescription: '单击空白处放置新节点。',
  edgeDescription: '单击某个节点并将该连接线拖动到另一个节点以连接它们。',
  editEdgeDescription: '单击控制节点并将它们拖到节点上连接。',
  createEdgeError: '无法将连接线连接到群集。',
  deleteClusterError: '无法删除群集。',
  editClusterError: '无法编辑群集。'
};
exports['zh_CN'] = exports['cn'];

exports['uk'] = {
  edit: 'Редагувати',
  del: 'Видалити обране',
  back: 'Назад',
  addNode: 'Додати вузол',
  addEdge: 'Додати край',
  editNode: 'Редагувати вузол',
  editEdge: 'Редагувати край',
  addDescription: 'Kлікніть на вільне місце, щоб додати новий вузол.',
  edgeDescription: "Клікніть на вузол і перетягніть край до іншого вузла, щоб їх з'єднати.",
  editEdgeDescription: 'Клікніть на контрольні точки і перетягніть їх у вузол, щоб підключитися до нього.',
  createEdgeError: "Не можливо об'єднати краї в групу.",
  deleteClusterError: 'Групи не можуть бути видалені.',
  editClusterError: 'Групи недоступні для редагування.'
};
exports['uk_UA'] = exports['uk'];

exports['fr'] = {
  edit: 'Editer',
  del: 'Effacer la selection',
  back: 'Retour',
  addNode: 'Ajouter un noeud',
  addEdge: 'Ajouter un lien',
  editNode: 'Editer le noeud',
  editEdge: 'Editer le lien',
  addDescription: 'Cliquez dans un endroit vide pour placer un noeud.',
  edgeDescription: 'Cliquez sur un noeud et glissez le lien vers un autre noeud pour les connecter.',
  editEdgeDescription: 'Cliquez sur les points de contrôle et glissez-les pour connecter un noeud.',
  createEdgeError: 'Impossible de créer un lien vers un cluster.',
  deleteClusterError: 'Les clusters ne peuvent pas être éffacés.',
  editClusterError: 'Les clusters ne peuvent pas être édites.'
};
exports['fr_FR'] = exports['fr'];

 }),
 (function(module, exports, __nested_webpack_require_695069__) {

module.exports = { "default": __nested_webpack_require_695069__(131), __esModule: true };

 }),
 (function(module, exports, __nested_webpack_require_695223__) {

__nested_webpack_require_695223__(132);
var $Object = __nested_webpack_require_695223__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


 }),
 (function(module, exports, __nested_webpack_require_695482__) {

var $export = __nested_webpack_require_695482__(11);
$export($export.S + $export.F * !__nested_webpack_require_695482__(13), 'Object', { defineProperty: __nested_webpack_require_695482__(12).f });


 }),
 (function(module, exports, __nested_webpack_require_695779__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_695779__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_695779__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CachedImage = function () {
  function CachedImage() {
    (0, _classCallCheck3['default'])(this, CachedImage);

    this.NUM_ITERATIONS = 4; 

    this.image = new Image();
    this.canvas = document.createElement('canvas');
  }



  (0, _createClass3['default'])(CachedImage, [{
    key: 'init',
    value: function init() {
      if (this.initialized()) return;

      this.src = this.image.src; 
      var w = this.image.width;
      var h = this.image.height;

      this.width = w;
      this.height = h;

      var h2 = Math.floor(h / 2);
      var h4 = Math.floor(h / 4);
      var h8 = Math.floor(h / 8);
      var h16 = Math.floor(h / 16);

      var w2 = Math.floor(w / 2);
      var w4 = Math.floor(w / 4);
      var w8 = Math.floor(w / 8);
      var w16 = Math.floor(w / 16);

      this.canvas.width = 3 * w4;
      this.canvas.height = h2;


      this.coordinates = [[0, 0, w2, h2], [w2, 0, w4, h4], [w2, h4, w8, h8], [5 * w8, h4, w16, h16]];

      this._fillMipMap();
    }


  }, {
    key: 'initialized',
    value: function initialized() {
      return this.coordinates !== undefined;
    }


  }, {
    key: '_fillMipMap',
    value: function _fillMipMap() {
      var ctx = this.canvas.getContext('2d');

      var to = this.coordinates[0];
      ctx.drawImage(this.image, to[0], to[1], to[2], to[3]);

      for (var iterations = 1; iterations < this.NUM_ITERATIONS; iterations++) {
        var from = this.coordinates[iterations - 1];
        var _to = this.coordinates[iterations];

        ctx.drawImage(this.canvas, from[0], from[1], from[2], from[3], _to[0], _to[1], _to[2], _to[3]);
      }
    }


  }, {
    key: 'drawImageAtPosition',
    value: function drawImageAtPosition(ctx, factor, left, top, width, height) {
      if (!this.initialized()) return; 

      if (factor > 2) {
        factor *= 0.5;
        var iterations = 0;
        while (factor > 2 && iterations < this.NUM_ITERATIONS) {
          factor *= 0.5;
          iterations += 1;
        }

        if (iterations >= this.NUM_ITERATIONS) {
          iterations = this.NUM_ITERATIONS - 1;
        }

        var from = this.coordinates[iterations];
        ctx.drawImage(this.canvas, from[0], from[1], from[2], from[3], left, top, width, height);
      } else {
        ctx.drawImage(this.image, left, top, width, height);
      }
    }
  }]);
  return CachedImage;
}();

exports['default'] = CachedImage;

 }),
 (function(module, exports, __nested_webpack_require_700931__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_700931__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_700931__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_700931__(2);


var Groups = function () {
  function Groups() {
    (0, _classCallCheck3['default'])(this, Groups);

    this.clear();
    this.defaultIndex = 0;
    this.groupsArray = [];
    this.groupIndex = 0;

    this.defaultGroups = [{
      border: '#2B7CE9',
      background: '#97C2FC',
      highlight: { border: '#2B7CE9', background: '#D2E5FF' },
      hover: { border: '#2B7CE9', background: '#D2E5FF' }
    }, 
    {
      border: '#FFA500',
      background: '#FFFF00',
      highlight: { border: '#FFA500', background: '#FFFFA3' },
      hover: { border: '#FFA500', background: '#FFFFA3' }
    }, 
    {
      border: '#FA0A10',
      background: '#FB7E81',
      highlight: { border: '#FA0A10', background: '#FFAFB1' },
      hover: { border: '#FA0A10', background: '#FFAFB1' }
    }, 
    {
      border: '#41A906',
      background: '#7BE141',
      highlight: { border: '#41A906', background: '#A1EC76' },
      hover: { border: '#41A906', background: '#A1EC76' }
    }, 
    {
      border: '#E129F0',
      background: '#EB7DF4',
      highlight: { border: '#E129F0', background: '#F0B3F5' },
      hover: { border: '#E129F0', background: '#F0B3F5' }
    }, 
    {
      border: '#7C29F0',
      background: '#AD85E4',
      highlight: { border: '#7C29F0', background: '#D3BDF0' },
      hover: { border: '#7C29F0', background: '#D3BDF0' }
    }, 
    {
      border: '#C37F00',
      background: '#FFA807',
      highlight: { border: '#C37F00', background: '#FFCA66' },
      hover: { border: '#C37F00', background: '#FFCA66' }
    }, 
    {
      border: '#4220FB',
      background: '#6E6EFD',
      highlight: { border: '#4220FB', background: '#9B9BFD' },
      hover: { border: '#4220FB', background: '#9B9BFD' }
    }, 
    {
      border: '#FD5A77',
      background: '#FFC0CB',
      highlight: { border: '#FD5A77', background: '#FFD1D9' },
      hover: { border: '#FD5A77', background: '#FFD1D9' }
    }, 
    {
      border: '#4AD63A',
      background: '#C2FABC',
      highlight: { border: '#4AD63A', background: '#E6FFE3' },
      hover: { border: '#4AD63A', background: '#E6FFE3' }
    }, 

    {
      border: '#990000',
      background: '#EE0000',
      highlight: { border: '#BB0000', background: '#FF3333' },
      hover: { border: '#BB0000', background: '#FF3333' }
    }, 

    {
      border: '#FF6000',
      background: '#FF6000',
      highlight: { border: '#FF6000', background: '#FF6000' },
      hover: { border: '#FF6000', background: '#FF6000' }
    }, 
    {
      border: '#97C2FC',
      background: '#2B7CE9',
      highlight: { border: '#D2E5FF', background: '#2B7CE9' },
      hover: { border: '#D2E5FF', background: '#2B7CE9' }
    }, 
    {
      border: '#399605',
      background: '#255C03',
      highlight: { border: '#399605', background: '#255C03' },
      hover: { border: '#399605', background: '#255C03' }
    }, 
    {
      border: '#B70054',
      background: '#FF007E',
      highlight: { border: '#B70054', background: '#FF007E' },
      hover: { border: '#B70054', background: '#FF007E' }
    }, 
    {
      border: '#AD85E4',
      background: '#7C29F0',
      highlight: { border: '#D3BDF0', background: '#7C29F0' },
      hover: { border: '#D3BDF0', background: '#7C29F0' }
    }, 
    {
      border: '#4557FA',
      background: '#000EA1',
      highlight: { border: '#6E6EFD', background: '#000EA1' },
      hover: { border: '#6E6EFD', background: '#000EA1' }
    }, 
    {
      border: '#FFC0CB',
      background: '#FD5A77',
      highlight: { border: '#FFD1D9', background: '#FD5A77' },
      hover: { border: '#FFD1D9', background: '#FD5A77' }
    }, 
    {
      border: '#C2FABC',
      background: '#74D66A',
      highlight: { border: '#E6FFE3', background: '#74D66A' },
      hover: { border: '#E6FFE3', background: '#74D66A' }
    }, 

    {
      border: '#EE0000',
      background: '#990000',
      highlight: { border: '#FF3333', background: '#BB0000' },
      hover: { border: '#FF3333', background: '#BB0000' } 
    }];

    this.options = {};
    this.defaultOptions = {
      useDefaultGroups: true
    };
    util.extend(this.options, this.defaultOptions);
  }



  (0, _createClass3['default'])(Groups, [{
    key: 'setOptions',
    value: function setOptions(options) {
      var optionFields = ['useDefaultGroups'];

      if (options !== undefined) {
        for (var groupName in options) {
          if (options.hasOwnProperty(groupName)) {
            if (optionFields.indexOf(groupName) === -1) {
              var group = options[groupName];
              this.add(groupName, group);
            }
          }
        }
      }
    }


  }, {
    key: 'clear',
    value: function clear() {
      this.groups = {};
      this.groupsArray = [];
    }


  }, {
    key: 'get',
    value: function get(groupname) {
      var shouldCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var group = this.groups[groupname];

      if (group === undefined && shouldCreate) {
        if (this.options.useDefaultGroups === false && this.groupsArray.length > 0) {
          var index = this.groupIndex % this.groupsArray.length;
          this.groupIndex++;
          group = {};
          group.color = this.groups[this.groupsArray[index]];
          this.groups[groupname] = group;
        } else {
          var _index = this.defaultIndex % this.defaultGroups.length;
          this.defaultIndex++;
          group = {};
          group.color = this.defaultGroups[_index];
          this.groups[groupname] = group;
        }
      }

      return group;
    }


  }, {
    key: 'add',
    value: function add(groupName, style) {
      this.groups[groupName] = style;
      this.groupsArray.push(groupName);
      return style;
    }
  }]);
  return Groups;
}();

exports['default'] = Groups;

 }),
 (function(module, exports, __nested_webpack_require_708348__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_708348__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_708348__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_708348__(2);
var DataSet = __nested_webpack_require_708348__(33);
var DataView = __nested_webpack_require_708348__(51);
var Node = __nested_webpack_require_708348__(34)['default'];


var NodesHandler = function () {
  function NodesHandler(body, images, groups, layoutEngine) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, NodesHandler);

    this.body = body;
    this.images = images;
    this.groups = groups;
    this.layoutEngine = layoutEngine;

    this.body.functions.createNode = this.create.bind(this);

    this.nodesListeners = {
      add: function add(event, params) {
        _this.add(params.items);
      },
      update: function update(event, params) {
        _this.update(params.items, params.data, params.oldData);
      },
      remove: function remove(event, params) {
        _this.remove(params.items);
      }
    };

    this.defaultOptions = {
      borderWidth: 1,
      borderWidthSelected: 2,
      brokenImage: undefined,
      color: {
        border: '#2B7CE9',
        background: '#97C2FC',
        highlight: {
          border: '#2B7CE9',
          background: '#D2E5FF'
        },
        hover: {
          border: '#2B7CE9',
          background: '#D2E5FF'
        }
      },
      fixed: {
        x: false,
        y: false
      },
      font: {
        color: '#343434',
        size: 14, 
        face: 'arial',
        background: 'none',
        strokeWidth: 0, 
        strokeColor: '#ffffff',
        align: 'center',
        vadjust: 0,
        multi: false,
        bold: {
          mod: 'bold'
        },
        boldital: {
          mod: 'bold italic'
        },
        ital: {
          mod: 'italic'
        },
        mono: {
          mod: '',
          size: 15, 
          face: 'monospace',
          vadjust: 2
        }
      },
      group: undefined,
      hidden: false,
      icon: {
        face: 'FontAwesome', 
        code: undefined, 
        size: 50, 
        color: '#2B7CE9' 
      },
      image: undefined, 
      label: undefined,
      labelHighlightBold: true,
      level: undefined,
      margin: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
      },
      mass: 1,
      physics: true,
      scaling: {
        min: 10,
        max: 30,
        label: {
          enabled: false,
          min: 14,
          max: 30,
          maxVisible: 30,
          drawThreshold: 5
        },
        customScalingFunction: function customScalingFunction(min, max, total, value) {
          if (max === min) {
            return 0.5;
          } else {
            var scale = 1 / (max - min);
            return Math.max(0, (value - min) * scale);
          }
        }
      },
      shadow: {
        enabled: false,
        color: 'rgba(0,0,0,0.5)',
        size: 10,
        x: 5,
        y: 5
      },
      shape: 'ellipse',
      shapeProperties: {
        borderDashes: false, 
        borderRadius: 6, 
        interpolation: true, 
        useImageSize: false, 
        useBorderWithImage: false 
      },
      size: 25,
      title: undefined,
      value: undefined,
      x: undefined,
      y: undefined

    };if (this.defaultOptions.mass <= 0) {
      throw 'Internal error: mass in defaultOptions of NodesHandler may not be zero or negative';
    }

    this.options = util.bridgeObject(this.defaultOptions);

    this.bindEventListeners();
  }



  (0, _createClass3['default'])(NodesHandler, [{
    key: 'bindEventListeners',
    value: function bindEventListeners() {
      var _this2 = this;

      this.body.emitter.on('refreshNodes', this.refresh.bind(this));
      this.body.emitter.on('refresh', this.refresh.bind(this));
      this.body.emitter.on('destroy', function () {
        util.forEach(_this2.nodesListeners, function (callback, event) {
          if (_this2.body.data.nodes) _this2.body.data.nodes.off(event, callback);
        });
        delete _this2.body.functions.createNode;
        delete _this2.nodesListeners.add;
        delete _this2.nodesListeners.update;
        delete _this2.nodesListeners.remove;
        delete _this2.nodesListeners;
      });
    }


  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if (options !== undefined) {
        Node.parseOptions(this.options, options);

        if (options.shape !== undefined) {
          for (var nodeId in this.body.nodes) {
            if (this.body.nodes.hasOwnProperty(nodeId)) {
              this.body.nodes[nodeId].updateShape();
            }
          }
        }

        if (options.font !== undefined) {
          for (var _nodeId in this.body.nodes) {
            if (this.body.nodes.hasOwnProperty(_nodeId)) {
              this.body.nodes[_nodeId].updateLabelModule();
              this.body.nodes[_nodeId].needsRefresh();
            }
          }
        }

        if (options.size !== undefined) {
          for (var _nodeId2 in this.body.nodes) {
            if (this.body.nodes.hasOwnProperty(_nodeId2)) {
              this.body.nodes[_nodeId2].needsRefresh();
            }
          }
        }

        if (options.hidden !== undefined || options.physics !== undefined) {
          this.body.emitter.emit('_dataChanged');
        }
      }
    }


  }, {
    key: 'setData',
    value: function setData(nodes) {
      var doNotEmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var oldNodesData = this.body.data.nodes;

      if (nodes instanceof DataSet || nodes instanceof DataView) {
        this.body.data.nodes = nodes;
      } else if (Array.isArray(nodes)) {
        this.body.data.nodes = new DataSet();
        this.body.data.nodes.add(nodes);
      } else if (!nodes) {
        this.body.data.nodes = new DataSet();
      } else {
        throw new TypeError('Array or DataSet expected');
      }

      if (oldNodesData) {
        util.forEach(this.nodesListeners, function (callback, event) {
          oldNodesData.off(event, callback);
        });
      }

      this.body.nodes = {};

      if (this.body.data.nodes) {
        var me = this;
        util.forEach(this.nodesListeners, function (callback, event) {
          me.body.data.nodes.on(event, callback);
        });

        var ids = this.body.data.nodes.getIds();
        this.add(ids, true);
      }

      if (doNotEmit === false) {
        this.body.emitter.emit('_dataChanged');
      }
    }


  }, {
    key: 'add',
    value: function add(ids) {
      var doNotEmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var id = void 0;
      var newNodes = [];
      for (var i = 0; i < ids.length; i++) {
        id = ids[i];
        var properties = this.body.data.nodes.get(id);
        var node = this.create(properties);
        newNodes.push(node);
        this.body.nodes[id] = node; 
      }

      this.layoutEngine.positionInitially(newNodes);

      if (doNotEmit === false) {
        this.body.emitter.emit('_dataChanged');
      }
    }


  }, {
    key: 'update',
    value: function update(ids, changedData, oldData) {
      var nodes = this.body.nodes;
      var dataChanged = false;
      for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
        var node = nodes[id];
        var data = changedData[i];
        if (node !== undefined) {
          if (node.setOptions(data)) {
            dataChanged = true;
          }
        } else {
          dataChanged = true;
          node = this.create(data);
          nodes[id] = node;
        }
      }

      if (!dataChanged && oldData !== undefined) {
        dataChanged = changedData.some(function (newValue, index) {
          var oldValue = oldData[index];
          return oldValue && oldValue.level !== newValue.level;
        });
      }

      if (dataChanged === true) {
        this.body.emitter.emit('_dataChanged');
      } else {
        this.body.emitter.emit('_dataUpdated');
      }
    }


  }, {
    key: 'remove',
    value: function remove(ids) {
      var nodes = this.body.nodes;

      for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
        delete nodes[id];
      }

      this.body.emitter.emit('_dataChanged');
    }


  }, {
    key: 'create',
    value: function create(properties) {
      var constructorClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Node;

      return new constructorClass(properties, this.body, this.images, this.groups, this.options, this.defaultOptions);
    }


  }, {
    key: 'refresh',
    value: function refresh() {
      var _this3 = this;

      var clearPositions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      util.forEach(this.body.nodes, function (node, nodeId) {
        var data = _this3.body.data.nodes.get(nodeId);
        if (data !== undefined) {
          if (clearPositions === true) {
            node.setOptions({ x: null, y: null });
          }
          node.setOptions({ fixed: false });
          node.setOptions(data);
        }
      });
    }


  }, {
    key: 'getPositions',
    value: function getPositions(ids) {
      var dataArray = {};
      if (ids !== undefined) {
        if (Array.isArray(ids) === true) {
          for (var i = 0; i < ids.length; i++) {
            if (this.body.nodes[ids[i]] !== undefined) {
              var node = this.body.nodes[ids[i]];
              dataArray[ids[i]] = { x: Math.round(node.x), y: Math.round(node.y) };
            }
          }
        } else {
          if (this.body.nodes[ids] !== undefined) {
            var _node = this.body.nodes[ids];
            dataArray[ids] = { x: Math.round(_node.x), y: Math.round(_node.y) };
          }
        }
      } else {
        for (var _i = 0; _i < this.body.nodeIndices.length; _i++) {
          var _node2 = this.body.nodes[this.body.nodeIndices[_i]];
          dataArray[this.body.nodeIndices[_i]] = {
            x: Math.round(_node2.x),
            y: Math.round(_node2.y)
          };
        }
      }
      return dataArray;
    }


  }, {
    key: 'storePositions',
    value: function storePositions() {
      var dataArray = [];
      var dataset = this.body.data.nodes.getDataSet();

      for (var nodeId in dataset._data) {
        if (dataset._data.hasOwnProperty(nodeId)) {
          var node = this.body.nodes[nodeId];
          if (dataset._data[nodeId].x != Math.round(node.x) || dataset._data[nodeId].y != Math.round(node.y)) {
            dataArray.push({
              id: node.id,
              x: Math.round(node.x),
              y: Math.round(node.y)
            });
          }
        }
      }
      dataset.update(dataArray);
    }


  }, {
    key: 'getBoundingBox',
    value: function getBoundingBox(nodeId) {
      if (this.body.nodes[nodeId] !== undefined) {
        return this.body.nodes[nodeId].shape.boundingBox;
      }
    }


  }, {
    key: 'getConnectedNodes',
    value: function getConnectedNodes(nodeId, direction) {
      var nodeList = [];
      if (this.body.nodes[nodeId] !== undefined) {
        var node = this.body.nodes[nodeId];
        var nodeObj = {}; 
        for (var i = 0; i < node.edges.length; i++) {
          var edge = node.edges[i];
          if (direction !== 'to' && edge.toId == node.id) {
            if (nodeObj[edge.fromId] === undefined) {
              nodeList.push(edge.fromId);
              nodeObj[edge.fromId] = true;
            }
          } else if (direction !== 'from' && edge.fromId == node.id) {
            if (nodeObj[edge.toId] === undefined) {
              nodeList.push(edge.toId);
              nodeObj[edge.toId] = true;
            }
          }
        }
      }
      return nodeList;
    }


  }, {
    key: 'getConnectedEdges',
    value: function getConnectedEdges(nodeId) {
      var edgeList = [];
      if (this.body.nodes[nodeId] !== undefined) {
        var node = this.body.nodes[nodeId];
        for (var i = 0; i < node.edges.length; i++) {
          edgeList.push(node.edges[i].id);
        }
      } else {
        console.log('NodeId provided for getConnectedEdges does not exist. Provided: ', nodeId);
      }
      return edgeList;
    }


  }, {
    key: 'moveNode',
    value: function moveNode(nodeId, x, y) {
      var _this4 = this;

      if (this.body.nodes[nodeId] !== undefined) {
        this.body.nodes[nodeId].x = Number(x);
        this.body.nodes[nodeId].y = Number(y);
        setTimeout(function () {
          _this4.body.emitter.emit('startSimulation');
        }, 0);
      } else {
        console.log('Node id supplied to moveNode does not exist. Provided: ', nodeId);
      }
    }
  }]);
  return NodesHandler;
}();

exports['default'] = NodesHandler;

 }),
 (function(module, exports, __nested_webpack_require_724960__) {

module.exports = { "default": __nested_webpack_require_724960__(137), __esModule: true };

 }),
 (function(module, exports, __nested_webpack_require_725114__) {

__nested_webpack_require_725114__(37);
__nested_webpack_require_725114__(47);
module.exports = __nested_webpack_require_725114__(138);


 }),
 (function(module, exports, __nested_webpack_require_725286__) {

var classof = __nested_webpack_require_725286__(67);
var ITERATOR = __nested_webpack_require_725286__(8)('iterator');
var Iterators = __nested_webpack_require_725286__(25);
module.exports = __nested_webpack_require_725286__(6).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};


 }),
 (function(module, exports, __nested_webpack_require_725749__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __nested_webpack_require_725749__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __nested_webpack_require_725749__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_725749__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var LabelAccumulator = __nested_webpack_require_725749__(140)['default'];
var ComponentUtil = __nested_webpack_require_725749__(35)['default'];

var tagPattern = {
  '<b>': /<b>/,
  '<i>': /<i>/,
  '<code>': /<code>/,
  '</b>': /<\/b>/,
  '</i>': /<\/i>/,
  '</code>': /<\/code>/,
  '*': /\*/, 
  _: /\_/, 
  '`': /`/, 
  afterBold: /[^\*]/,
  afterItal: /[^_]/,
  afterMono: /[^`]/

};
var MarkupAccumulator = function () {
  function MarkupAccumulator(text) {
    (0, _classCallCheck3['default'])(this, MarkupAccumulator);

    this.text = text;
    this.bold = false;
    this.ital = false;
    this.mono = false;
    this.spacing = false;
    this.position = 0;
    this.buffer = '';
    this.modStack = [];

    this.blocks = [];
  }



  (0, _createClass3['default'])(MarkupAccumulator, [{
    key: 'mod',
    value: function mod() {
      return this.modStack.length === 0 ? 'normal' : this.modStack[0];
    }


  }, {
    key: 'modName',
    value: function modName() {
      if (this.modStack.length === 0) return 'normal';else if (this.modStack[0] === 'mono') return 'mono';else {
        if (this.bold && this.ital) {
          return 'boldital';
        } else if (this.bold) {
          return 'bold';
        } else if (this.ital) {
          return 'ital';
        }
      }
    }


  }, {
    key: 'emitBlock',
    value: function emitBlock() {
      if (this.spacing) {
        this.add(' ');
        this.spacing = false;
      }
      if (this.buffer.length > 0) {
        this.blocks.push({ text: this.buffer, mod: this.modName() });
        this.buffer = '';
      }
    }


  }, {
    key: 'add',
    value: function add(text) {
      if (text === ' ') {
        this.spacing = true;
      }
      if (this.spacing) {
        this.buffer += ' ';
        this.spacing = false;
      }
      if (text != ' ') {
        this.buffer += text;
      }
    }


  }, {
    key: 'parseWS',
    value: function parseWS(ch) {
      if (/[ \t]/.test(ch)) {
        if (!this.mono) {
          this.spacing = true;
        } else {
          this.add(ch);
        }
        return true;
      }

      return false;
    }


  }, {
    key: 'setTag',
    value: function setTag(tagName) {
      this.emitBlock();
      this[tagName] = true;
      this.modStack.unshift(tagName);
    }


  }, {
    key: 'unsetTag',
    value: function unsetTag(tagName) {
      this.emitBlock();
      this[tagName] = false;
      this.modStack.shift();
    }


  }, {
    key: 'parseStartTag',
    value: function parseStartTag(tagName, tag) {
      if (!this.mono && !this[tagName] && this.match(tag)) {
        this.setTag(tagName);
        return true;
      }

      return false;
    }


  }, {
    key: 'match',
    value: function match(tag) {
      var advance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var _prepareRegExp = this.prepareRegExp(tag),
          _prepareRegExp2 = (0, _slicedToArray3['default'])(_prepareRegExp, 2),
          regExp = _prepareRegExp2[0],
          length = _prepareRegExp2[1];

      var matched = regExp.test(this.text.substr(this.position, length));

      if (matched && advance) {
        this.position += length - 1;
      }

      return matched;
    }


  }, {
    key: 'parseEndTag',
    value: function parseEndTag(tagName, tag, nextTag) {
      var checkTag = this.mod() === tagName;
      if (tagName === 'mono') {
        checkTag = checkTag && this.mono;
      } else {
        checkTag = checkTag && !this.mono;
      }

      if (checkTag && this.match(tag)) {
        if (nextTag !== undefined) {
          if (this.position === this.text.length - 1 || this.match(nextTag, false)) {
            this.unsetTag(tagName);
          }
        } else {
          this.unsetTag(tagName);
        }

        return true;
      }

      return false;
    }


  }, {
    key: 'replace',
    value: function replace(tag, value) {
      if (this.match(tag)) {
        this.add(value);
        this.position += length - 1;
        return true;
      }

      return false;
    }


  }, {
    key: 'prepareRegExp',
    value: function prepareRegExp(tag) {
      var length = void 0;
      var regExp = void 0;
      if (tag instanceof RegExp) {
        regExp = tag;
        length = 1; 
      } else {
        var prepared = tagPattern[tag];
        if (prepared !== undefined) {
          regExp = prepared;
        } else {
          regExp = new RegExp(tag);
        }

        length = tag.length;
      }

      return [regExp, length];
    }
  }]);
  return MarkupAccumulator;
}();



var LabelSplitter = function () {
  function LabelSplitter(ctx, parent, selected, hover) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, LabelSplitter);

    this.ctx = ctx;
    this.parent = parent;

    var textWidth = function textWidth(text, mod) {
      if (text === undefined) return 0;

      var values = _this.parent.getFormattingValues(ctx, selected, hover, mod);

      var width = 0;
      if (text !== '') {
        var measure = _this.ctx.measureText(text);
        width = measure.width;
      }

      return { width: width, values: values };
    };

    this.lines = new LabelAccumulator(textWidth);
  }



  (0, _createClass3['default'])(LabelSplitter, [{
    key: 'process',
    value: function process(text) {
      if (!ComponentUtil.isValidLabel(text)) {
        return this.lines.finalize();
      }

      var font = this.parent.fontOptions;

      text = text.replace(/\r\n/g, '\n'); 
      text = text.replace(/\r/g, '\n'); 


      var nlLines = String(text).split('\n');
      var lineCount = nlLines.length;

      if (font.multi) {
        for (var i = 0; i < lineCount; i++) {
          var blocks = this.splitBlocks(nlLines[i], font.multi);

          if (blocks === undefined) continue;

          if (blocks.length === 0) {
            this.lines.newLine('');
            continue;
          }

          if (font.maxWdt > 0) {
            for (var j = 0; j < blocks.length; j++) {
              var mod = blocks[j].mod;
              var _text = blocks[j].text;
              this.splitStringIntoLines(_text, mod, true);
            }
          } else {
            for (var _j = 0; _j < blocks.length; _j++) {
              var _mod = blocks[_j].mod;
              var _text2 = blocks[_j].text;
              this.lines.append(_text2, _mod);
            }
          }

          this.lines.newLine();
        }
      } else {
        if (font.maxWdt > 0) {
          for (var _i = 0; _i < lineCount; _i++) {
            this.splitStringIntoLines(nlLines[_i]);
          }
        } else {
          for (var _i2 = 0; _i2 < lineCount; _i2++) {
            this.lines.newLine(nlLines[_i2]);
          }
        }
      }

      return this.lines.finalize();
    }


  }, {
    key: 'decodeMarkupSystem',
    value: function decodeMarkupSystem(markupSystem) {
      var system = 'none';
      if (markupSystem === 'markdown' || markupSystem === 'md') {
        system = 'markdown';
      } else if (markupSystem === true || markupSystem === 'html') {
        system = 'html';
      }
      return system;
    }


  }, {
    key: 'splitHtmlBlocks',
    value: function splitHtmlBlocks(text) {
      var s = new MarkupAccumulator(text);

      var parseEntities = function parseEntities(ch) {
        if (/&/.test(ch)) {
          var parsed = s.replace(s.text, '&lt;', '<') || s.replace(s.text, '&amp;', '&');

          if (!parsed) {
            s.add('&');
          }

          return true;
        }

        return false;
      };

      while (s.position < s.text.length) {
        var ch = s.text.charAt(s.position);

        var parsed = s.parseWS(ch) || /</.test(ch) && (s.parseStartTag('bold', '<b>') || s.parseStartTag('ital', '<i>') || s.parseStartTag('mono', '<code>') || s.parseEndTag('bold', '</b>') || s.parseEndTag('ital', '</i>') || s.parseEndTag('mono', '</code>')) || parseEntities(ch);

        if (!parsed) {
          s.add(ch);
        }
        s.position++;
      }
      s.emitBlock();
      return s.blocks;
    }


  }, {
    key: 'splitMarkdownBlocks',
    value: function splitMarkdownBlocks(text) {
      var _this2 = this;

      var s = new MarkupAccumulator(text);
      var beginable = true;

      var parseOverride = function parseOverride(ch) {
        if (/\\/.test(ch)) {
          if (s.position < _this2.text.length + 1) {
            s.position++;
            ch = _this2.text.charAt(s.position);
            if (/ \t/.test(ch)) {
              s.spacing = true;
            } else {
              s.add(ch);
              beginable = false;
            }
          }

          return true;
        }

        return false;
      };

      while (s.position < s.text.length) {
        var ch = s.text.charAt(s.position);

        var parsed = s.parseWS(ch) || parseOverride(ch) || (beginable || s.spacing) && (s.parseStartTag('bold', '*') || s.parseStartTag('ital', '_') || s.parseStartTag('mono', '`')) || s.parseEndTag('bold', '*', 'afterBold') || s.parseEndTag('ital', '_', 'afterItal') || s.parseEndTag('mono', '`', 'afterMono');

        if (!parsed) {
          s.add(ch);
          beginable = false;
        }
        s.position++;
      }
      s.emitBlock();
      return s.blocks;
    }


  }, {
    key: 'splitBlocks',
    value: function splitBlocks(text, markupSystem) {
      var system = this.decodeMarkupSystem(markupSystem);
      if (system === 'none') {
        return [{
          text: text,
          mod: 'normal'
        }];
      } else if (system === 'markdown') {
        return this.splitMarkdownBlocks(text);
      } else if (system === 'html') {
        return this.splitHtmlBlocks(text);
      }
    }


  }, {
    key: 'overMaxWidth',
    value: function overMaxWidth(text) {
      var width = this.ctx.measureText(text).width;
      return this.lines.curWidth() + width > this.parent.fontOptions.maxWdt;
    }


  }, {
    key: 'getLongestFit',
    value: function getLongestFit(words) {
      var text = '';
      var w = 0;

      while (w < words.length) {
        var pre = text === '' ? '' : ' ';
        var newText = text + pre + words[w];

        if (this.overMaxWidth(newText)) break;
        text = newText;
        w++;
      }

      return w;
    }


  }, {
    key: 'getLongestFitWord',
    value: function getLongestFitWord(words) {
      var w = 0;

      while (w < words.length) {
        if (this.overMaxWidth(words.slice(0, w))) break;
        w++;
      }

      return w;
    }


  }, {
    key: 'splitStringIntoLines',
    value: function splitStringIntoLines(str) {
      var mod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal';
      var appendLast = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      str = str.replace(/^( +)/g, '$1\r');
      str = str.replace(/([^\r][^ ]*)( +)/g, '$1\r$2\r');
      var words = str.split('\r');

      while (words.length > 0) {
        var w = this.getLongestFit(words);

        if (w === 0) {
          var word = words[0];

          var x = this.getLongestFitWord(word);
          this.lines.newLine(word.slice(0, x), mod);

          words[0] = word.slice(x);
        } else {
          var newW = w;
          if (words[w - 1] === ' ') {
            w--;
          } else if (words[newW] === ' ') {
            newW++;
          }

          var text = words.slice(0, w).join('');

          if (w == words.length && appendLast) {
            this.lines.append(text, mod);
          } else {
            this.lines.newLine(text, mod);
          }

          words = words.slice(newW);
        }
      }
    }
  }]);
  return LabelSplitter;
}();

exports['default'] = LabelSplitter;

 }),
 (function(module, exports, __nested_webpack_require_745539__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __nested_webpack_require_745539__(78);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __nested_webpack_require_745539__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_745539__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }


var LabelAccumulator = function () {
  function LabelAccumulator(measureText) {
    (0, _classCallCheck3['default'])(this, LabelAccumulator);

    this.measureText = measureText;
    this.current = 0;
    this.width = 0;
    this.height = 0;
    this.lines = [];
  }



  (0, _createClass3['default'])(LabelAccumulator, [{
    key: '_add',
    value: function _add(l, text) {
      var mod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'normal';

      if (this.lines[l] === undefined) {
        this.lines[l] = {
          width: 0,
          height: 0,
          blocks: []
        };
      }

      var tmpText = text;
      if (text === undefined || text === '') tmpText = ' ';

      var result = this.measureText(tmpText, mod);
      var block = (0, _assign2['default'])({}, result.values);
      block.text = text;
      block.width = result.width;
      block.mod = mod;

      if (text === undefined || text === '') {
        block.width = 0;
      }

      this.lines[l].blocks.push(block);

      this.lines[l].width += block.width;
    }


  }, {
    key: 'curWidth',
    value: function curWidth() {
      var line = this.lines[this.current];
      if (line === undefined) return 0;

      return line.width;
    }


  }, {
    key: 'append',
    value: function append(text) {
      var mod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal';

      this._add(this.current, text, mod);
    }


  }, {
    key: 'newLine',
    value: function newLine(text) {
      var mod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal';

      this._add(this.current, text, mod);
      this.current++;
    }


  }, {
    key: 'determineLineHeights',
    value: function determineLineHeights() {
      for (var k = 0; k < this.lines.length; k++) {
        var line = this.lines[k];

        var height = 0;

        if (line.blocks !== undefined) {
          for (var l = 0; l < line.blocks.length; l++) {
            var block = line.blocks[l];

            if (height < block.height) {
              height = block.height;
            }
          }
        }

        line.height = height;
      }
    }


  }, {
    key: 'determineLabelSize',
    value: function determineLabelSize() {
      var width = 0;
      var height = 0;
      for (var k = 0; k < this.lines.length; k++) {
        var line = this.lines[k];

        if (line.width > width) {
          width = line.width;
        }
        height += line.height;
      }

      this.width = width;
      this.height = height;
    }


  }, {
    key: 'removeEmptyBlocks',
    value: function removeEmptyBlocks() {
      var tmpLines = [];
      for (var k = 0; k < this.lines.length; k++) {
        var line = this.lines[k];

        if (line.blocks.length === 0) continue;

        if (k === this.lines.length - 1) {
          if (line.width === 0) continue;
        }

        var tmpLine = {};
        (0, _assign2['default'])(tmpLine, line);
        tmpLine.blocks = [];

        var firstEmptyBlock = void 0;
        var tmpBlocks = [];
        for (var l = 0; l < line.blocks.length; l++) {
          var block = line.blocks[l];
          if (block.width !== 0) {
            tmpBlocks.push(block);
          } else {
            if (firstEmptyBlock === undefined) {
              firstEmptyBlock = block;
            }
          }
        }

        if (tmpBlocks.length === 0 && firstEmptyBlock !== undefined) {
          tmpBlocks.push(firstEmptyBlock);
        }

        tmpLine.blocks = tmpBlocks;

        tmpLines.push(tmpLine);
      }

      return tmpLines;
    }


  }, {
    key: 'finalize',
    value: function finalize() {

      this.determineLineHeights();
      this.determineLabelSize();
      var tmpLines = this.removeEmptyBlocks();

      return {
        width: this.width,
        height: this.height,
        lines: tmpLines
      };
    }
  }]);
  return LabelAccumulator;
}();

exports['default'] = LabelAccumulator;

 }),
 (function(module, exports, __nested_webpack_require_752922__) {

__nested_webpack_require_752922__(142);
module.exports = __nested_webpack_require_752922__(6).Object.assign;


 }),
 (function(module, exports, __nested_webpack_require_753082__) {

var $export = __nested_webpack_require_753082__(11);

$export($export.S + $export.F, 'Object', { assign: __nested_webpack_require_753082__(143) });


 }),
 (function(module, exports, __nested_webpack_require_753323__) {

"use strict";

var getKeys = __nested_webpack_require_753323__(26);
var gOPS = __nested_webpack_require_753323__(50);
var pIE = __nested_webpack_require_753323__(32);
var toObject = __nested_webpack_require_753323__(30);
var IObject = __nested_webpack_require_753323__(59);
var $assign = Object.assign;

module.exports = !$assign || __nested_webpack_require_753323__(22)(function () {
  var A = {};
  var B = {};
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { 
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


 }),
 (function(module, exports, __nested_webpack_require_754599__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_754599__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_754599__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_754599__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_754599__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_754599__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _NodeBase2 = __nested_webpack_require_754599__(16);

var _NodeBase3 = _interopRequireDefault(_NodeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Box = function (_NodeBase) {
  (0, _inherits3['default'])(Box, _NodeBase);

  function Box(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Box);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Box.__proto__ || (0, _getPrototypeOf2['default'])(Box)).call(this, options, body, labelModule));

    _this._setMargins(labelModule);
    return _this;
  }



  (0, _createClass3['default'])(Box, [{
    key: 'resize',
    value: function resize(ctx) {
      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.selected;
      var hover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.hover;

      if (this.needsRefresh(selected, hover)) {
        var dimensions = this.getDimensionsFromLabel(ctx, selected, hover);

        this.width = dimensions.width + this.margin.right + this.margin.left;
        this.height = dimensions.height + this.margin.top + this.margin.bottom;
        this.radius = this.width / 2;
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this.resize(ctx, selected, hover);
      this.left = x - this.width / 2;
      this.top = y - this.height / 2;

      this.initContextForDraw(ctx, values);
      ctx.roundRect(this.left, this.top, this.width, this.height, values.borderRadius);
      this.performFill(ctx, values);

      this.updateBoundingBox(x, y, ctx, selected, hover);
      this.labelModule.draw(ctx, this.left + this.textSize.width / 2 + this.margin.left, this.top + this.textSize.height / 2 + this.margin.top, selected, hover);
    }


  }, {
    key: 'updateBoundingBox',
    value: function updateBoundingBox(x, y, ctx, selected, hover) {
      this._updateBoundingBox(x, y, ctx, selected, hover);

      var borderRadius = this.options.shapeProperties.borderRadius; 
      this._addBoundingBoxMargin(borderRadius);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      this.resize(ctx);
      var borderWidth = this.options.borderWidth;

      return Math.min(Math.abs(this.width / 2 / Math.cos(angle)), Math.abs(this.height / 2 / Math.sin(angle))) + borderWidth;
    }
  }]);
  return Box;
}(_NodeBase3['default']);

exports['default'] = Box;

 }),
 (function(module, exports, __nested_webpack_require_758678__) {

__nested_webpack_require_758678__(146);
module.exports = __nested_webpack_require_758678__(6).Object.getPrototypeOf;


 }),
 (function(module, exports, __nested_webpack_require_758846__) {

var toObject = __nested_webpack_require_758846__(30);
var $getPrototypeOf = __nested_webpack_require_758846__(66);

__nested_webpack_require_758846__(68)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


 }),
 (function(module, exports, __nested_webpack_require_759196__) {

module.exports = { "default": __nested_webpack_require_759196__(148), __esModule: true };

 }),
 (function(module, exports, __nested_webpack_require_759350__) {

__nested_webpack_require_759350__(149);
module.exports = __nested_webpack_require_759350__(6).Object.setPrototypeOf;


 }),
 (function(module, exports, __nested_webpack_require_759518__) {

var $export = __nested_webpack_require_759518__(11);
$export($export.S, 'Object', { setPrototypeOf: __nested_webpack_require_759518__(150).set });


 }),
 (function(module, exports, __nested_webpack_require_759761__) {

var isObject = __nested_webpack_require_759761__(21);
var anObject = __nested_webpack_require_759761__(20);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? 
    function (test, buggy, set) {
      try {
        set = __nested_webpack_require_759761__(61)(Function.call, __nested_webpack_require_759761__(70).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


 }),
 (function(module, exports, __nested_webpack_require_760750__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_760750__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_760750__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_760750__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_760750__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_760750__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CircleImageBase2 = __nested_webpack_require_760750__(53);

var _CircleImageBase3 = _interopRequireDefault(_CircleImageBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Circle = function (_CircleImageBase) {
  (0, _inherits3['default'])(Circle, _CircleImageBase);

  function Circle(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Circle);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Circle.__proto__ || (0, _getPrototypeOf2['default'])(Circle)).call(this, options, body, labelModule));

    _this._setMargins(labelModule);
    return _this;
  }



  (0, _createClass3['default'])(Circle, [{
    key: 'resize',
    value: function resize(ctx) {
      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.selected;
      var hover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.hover;

      if (this.needsRefresh(selected, hover)) {
        var dimensions = this.getDimensionsFromLabel(ctx, selected, hover);

        var diameter = Math.max(dimensions.width + this.margin.right + this.margin.left, dimensions.height + this.margin.top + this.margin.bottom);

        this.options.size = diameter / 2; 
        this.width = diameter;
        this.height = diameter;
        this.radius = this.width / 2;
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this.resize(ctx, selected, hover);
      this.left = x - this.width / 2;
      this.top = y - this.height / 2;

      this._drawRawCircle(ctx, x, y, values);

      this.updateBoundingBox(x, y);
      this.labelModule.draw(ctx, this.left + this.textSize.width / 2 + this.margin.left, y, selected, hover);
    }


  }, {
    key: 'updateBoundingBox',
    value: function updateBoundingBox(x, y) {
      this.boundingBox.top = y - this.options.size;
      this.boundingBox.left = x - this.options.size;
      this.boundingBox.right = x + this.options.size;
      this.boundingBox.bottom = y + this.options.size;
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      this.resize(ctx);
      return this.width * 0.5;
    }
  }]);
  return Circle;
}(_CircleImageBase3['default']);

exports['default'] = Circle;

 }),
 (function(module, exports, __nested_webpack_require_764689__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_764689__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_764689__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_764689__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_764689__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_764689__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CircleImageBase2 = __nested_webpack_require_764689__(53);

var _CircleImageBase3 = _interopRequireDefault(_CircleImageBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CircularImage = function (_CircleImageBase) {
  (0, _inherits3['default'])(CircularImage, _CircleImageBase);

  function CircularImage(options, body, labelModule, imageObj, imageObjAlt) {
    (0, _classCallCheck3['default'])(this, CircularImage);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (CircularImage.__proto__ || (0, _getPrototypeOf2['default'])(CircularImage)).call(this, options, body, labelModule));

    _this.setImages(imageObj, imageObjAlt);
    return _this;
  }



  (0, _createClass3['default'])(CircularImage, [{
    key: 'resize',
    value: function resize(ctx) {
      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.selected;
      var hover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.hover;

      var imageAbsent = this.imageObj.src === undefined || this.imageObj.width === undefined || this.imageObj.height === undefined;

      if (imageAbsent) {
        var diameter = this.options.size * 2;
        this.width = diameter;
        this.height = diameter;
        this.radius = 0.5 * this.width;
        return;
      }

      if (this.needsRefresh(selected, hover)) {
        this._resizeImage();
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this.switchImages(selected);
      this.resize();
      this.left = x - this.width / 2;
      this.top = y - this.height / 2;

      this._drawRawCircle(ctx, x, y, values);

      ctx.save();
      ctx.clip();
      this._drawImageAtPosition(ctx, values);
      ctx.restore();

      this._drawImageLabel(ctx, x, y, selected, hover);

      this.updateBoundingBox(x, y);
    }


  }, {
    key: 'updateBoundingBox',
    value: function updateBoundingBox(x, y) {
      this.boundingBox.top = y - this.options.size;
      this.boundingBox.left = x - this.options.size;
      this.boundingBox.right = x + this.options.size;
      this.boundingBox.bottom = y + this.options.size;

      this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left);
      this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width);
      this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelOffset);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      this.resize(ctx);
      return this.width * 0.5;
    }
  }]);
  return CircularImage;
}(_CircleImageBase3['default']);

exports['default'] = CircularImage;

 }),
 (function(module, exports, __nested_webpack_require_769715__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_769715__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_769715__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_769715__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_769715__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_769715__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _NodeBase2 = __nested_webpack_require_769715__(16);

var _NodeBase3 = _interopRequireDefault(_NodeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Database = function (_NodeBase) {
  (0, _inherits3['default'])(Database, _NodeBase);

  function Database(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Database);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Database.__proto__ || (0, _getPrototypeOf2['default'])(Database)).call(this, options, body, labelModule));

    _this._setMargins(labelModule);
    return _this;
  }



  (0, _createClass3['default'])(Database, [{
    key: 'resize',
    value: function resize(ctx, selected, hover) {
      if (this.needsRefresh(selected, hover)) {
        var dimensions = this.getDimensionsFromLabel(ctx, selected, hover);
        var size = dimensions.width + this.margin.right + this.margin.left;

        this.width = size;
        this.height = size;
        this.radius = this.width / 2;
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this.resize(ctx, selected, hover);
      this.left = x - this.width / 2;
      this.top = y - this.height / 2;

      this.initContextForDraw(ctx, values);
      ctx.database(x - this.width / 2, y - this.height / 2, this.width, this.height);
      this.performFill(ctx, values);

      this.updateBoundingBox(x, y, ctx, selected, hover);
      this.labelModule.draw(ctx, this.left + this.textSize.width / 2 + this.margin.left, this.top + this.textSize.height / 2 + this.margin.top, selected, hover);
    }

  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return Database;
}(_NodeBase3['default']);

exports['default'] = Database;

 }),
 (function(module, exports, __nested_webpack_require_772963__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_772963__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_772963__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_772963__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_772963__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_772963__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ShapeBase2 = __nested_webpack_require_772963__(17);

var _ShapeBase3 = _interopRequireDefault(_ShapeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Diamond = function (_ShapeBase) {
  (0, _inherits3['default'])(Diamond, _ShapeBase);

  function Diamond(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Diamond);
    return (0, _possibleConstructorReturn3['default'])(this, (Diamond.__proto__ || (0, _getPrototypeOf2['default'])(Diamond)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(Diamond, [{
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this._drawShape(ctx, 'diamond', 4, x, y, selected, hover, values);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return Diamond;
}(_ShapeBase3['default']);

exports['default'] = Diamond;

 }),
 (function(module, exports, __nested_webpack_require_775191__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_775191__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_775191__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_775191__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_775191__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_775191__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ShapeBase2 = __nested_webpack_require_775191__(17);

var _ShapeBase3 = _interopRequireDefault(_ShapeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Dot = function (_ShapeBase) {
  (0, _inherits3['default'])(Dot, _ShapeBase);

  function Dot(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Dot);
    return (0, _possibleConstructorReturn3['default'])(this, (Dot.__proto__ || (0, _getPrototypeOf2['default'])(Dot)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(Dot, [{
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this._drawShape(ctx, 'circle', 2, x, y, selected, hover, values);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      this.resize(ctx);
      return this.options.size;
    }
  }]);
  return Dot;
}(_ShapeBase3['default']);

exports['default'] = Dot;

 }),
 (function(module, exports, __nested_webpack_require_777452__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_777452__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_777452__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_777452__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_777452__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_777452__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _NodeBase2 = __nested_webpack_require_777452__(16);

var _NodeBase3 = _interopRequireDefault(_NodeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Ellipse = function (_NodeBase) {
  (0, _inherits3['default'])(Ellipse, _NodeBase);

  function Ellipse(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Ellipse);
    return (0, _possibleConstructorReturn3['default'])(this, (Ellipse.__proto__ || (0, _getPrototypeOf2['default'])(Ellipse)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(Ellipse, [{
    key: 'resize',
    value: function resize(ctx) {
      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.selected;
      var hover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.hover;

      if (this.needsRefresh(selected, hover)) {
        var dimensions = this.getDimensionsFromLabel(ctx, selected, hover);

        this.height = dimensions.height * 2;
        this.width = dimensions.width + dimensions.height;
        this.radius = 0.5 * this.width;
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this.resize(ctx, selected, hover);
      this.left = x - this.width * 0.5;
      this.top = y - this.height * 0.5;

      this.initContextForDraw(ctx, values);
      ctx.ellipse_vis(this.left, this.top, this.width, this.height);
      this.performFill(ctx, values);

      this.updateBoundingBox(x, y, ctx, selected, hover);
      this.labelModule.draw(ctx, x, y, selected, hover);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      this.resize(ctx);
      var a = this.width * 0.5;
      var b = this.height * 0.5;
      var w = Math.sin(angle) * a;
      var h = Math.cos(angle) * b;
      return a * b / Math.sqrt(w * w + h * h);
    }
  }]);
  return Ellipse;
}(_NodeBase3['default']);

exports['default'] = Ellipse;

 }),
 (function(module, exports, __nested_webpack_require_780835__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_780835__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_780835__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_780835__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_780835__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_780835__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _NodeBase2 = __nested_webpack_require_780835__(16);

var _NodeBase3 = _interopRequireDefault(_NodeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Icon = function (_NodeBase) {
  (0, _inherits3['default'])(Icon, _NodeBase);

  function Icon(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Icon);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Icon.__proto__ || (0, _getPrototypeOf2['default'])(Icon)).call(this, options, body, labelModule));

    _this._setMargins(labelModule);
    return _this;
  }



  (0, _createClass3['default'])(Icon, [{
    key: 'resize',
    value: function resize(ctx, selected, hover) {
      if (this.needsRefresh(selected, hover)) {
        this.iconSize = {
          width: Number(this.options.icon.size),
          height: Number(this.options.icon.size)
        };
        this.width = this.iconSize.width + this.margin.right + this.margin.left;
        this.height = this.iconSize.height + this.margin.top + this.margin.bottom;
        this.radius = 0.5 * this.width;
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this.resize(ctx, selected, hover);
      this.options.icon.size = this.options.icon.size || 50;

      this.left = x - this.width / 2;
      this.top = y - this.height / 2;
      this._icon(ctx, x, y, selected, hover, values);

      if (this.options.label !== undefined) {
        var iconTextSpacing = 5;
        this.labelModule.draw(ctx, this.left + this.iconSize.width / 2 + this.margin.left, y + this.height / 2 + iconTextSpacing, selected);
      }

      this.updateBoundingBox(x, y);
    }


  }, {
    key: 'updateBoundingBox',
    value: function updateBoundingBox(x, y) {
      this.boundingBox.top = y - this.options.icon.size * 0.5;
      this.boundingBox.left = x - this.options.icon.size * 0.5;
      this.boundingBox.right = x + this.options.icon.size * 0.5;
      this.boundingBox.bottom = y + this.options.icon.size * 0.5;

      if (this.options.label !== undefined && this.labelModule.size.width > 0) {
        var iconTextSpacing = 5;
        this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left);
        this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width);
        this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelModule.size.height + iconTextSpacing);
      }
    }


  }, {
    key: '_icon',
    value: function _icon(ctx, x, y, selected, hover, values) {
      var iconSize = Number(this.options.icon.size);

      if (this.options.icon.code !== undefined) {
        ctx.font = (selected ? 'bold ' : '') + iconSize + 'px ' + this.options.icon.face;

        ctx.fillStyle = this.options.icon.color || 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        this.enableShadow(ctx, values);
        ctx.fillText(this.options.icon.code, x, y);

        this.disableShadow(ctx, values);
      } else {
        console.error('When using the icon shape, you need to define the code in the icon options object. This can be done per node or globally.');
      }
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return Icon;
}(_NodeBase3['default']);

exports['default'] = Icon;

 }),
 (function(module, exports, __nested_webpack_require_786141__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_786141__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_786141__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_786141__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_786141__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_786141__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CircleImageBase2 = __nested_webpack_require_786141__(53);

var _CircleImageBase3 = _interopRequireDefault(_CircleImageBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Image = function (_CircleImageBase) {
  (0, _inherits3['default'])(Image, _CircleImageBase);

  function Image(options, body, labelModule, imageObj, imageObjAlt) {
    (0, _classCallCheck3['default'])(this, Image);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Image.__proto__ || (0, _getPrototypeOf2['default'])(Image)).call(this, options, body, labelModule));

    _this.setImages(imageObj, imageObjAlt);
    return _this;
  }



  (0, _createClass3['default'])(Image, [{
    key: 'resize',
    value: function resize(ctx) {
      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.selected;
      var hover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.hover;

      var imageAbsent = this.imageObj.src === undefined || this.imageObj.width === undefined || this.imageObj.height === undefined;

      if (imageAbsent) {
        var side = this.options.size * 2;
        this.width = side;
        this.height = side;
        return;
      }

      if (this.needsRefresh(selected, hover)) {
        this._resizeImage();
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this.switchImages(selected);
      this.resize();
      this.left = x - this.width / 2;
      this.top = y - this.height / 2;

      if (this.options.shapeProperties.useBorderWithImage === true) {
        var neutralborderWidth = this.options.borderWidth;
        var selectionLineWidth = this.options.borderWidthSelected || 2 * this.options.borderWidth;
        var borderWidth = (selected ? selectionLineWidth : neutralborderWidth) / this.body.view.scale;
        ctx.lineWidth = Math.min(this.width, borderWidth);

        ctx.beginPath();

        ctx.strokeStyle = selected ? this.options.color.highlight.border : hover ? this.options.color.hover.border : this.options.color.border;

        ctx.fillStyle = selected ? this.options.color.highlight.background : hover ? this.options.color.hover.background : this.options.color.background;

        ctx.rect(this.left - 0.5 * ctx.lineWidth, this.top - 0.5 * ctx.lineWidth, this.width + ctx.lineWidth, this.height + ctx.lineWidth);
        ctx.fill();

        this.performStroke(ctx, values);

        ctx.closePath();
      }

      this._drawImageAtPosition(ctx, values);

      this._drawImageLabel(ctx, x, y, selected, hover);

      this.updateBoundingBox(x, y);
    }


  }, {
    key: 'updateBoundingBox',
    value: function updateBoundingBox(x, y) {
      this.resize();
      this._updateBoundingBox(x, y);

      if (this.options.label !== undefined && this.labelModule.size.width > 0) {
        this.boundingBox.left = Math.min(this.boundingBox.left, this.labelModule.size.left);
        this.boundingBox.right = Math.max(this.boundingBox.right, this.labelModule.size.left + this.labelModule.size.width);
        this.boundingBox.bottom = Math.max(this.boundingBox.bottom, this.boundingBox.bottom + this.labelOffset);
      }
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return Image;
}(_CircleImageBase3['default']);

exports['default'] = Image;

 }),
 (function(module, exports, __nested_webpack_require_791384__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_791384__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_791384__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_791384__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_791384__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_791384__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ShapeBase2 = __nested_webpack_require_791384__(17);

var _ShapeBase3 = _interopRequireDefault(_ShapeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Square = function (_ShapeBase) {
  (0, _inherits3['default'])(Square, _ShapeBase);

  function Square(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Square);
    return (0, _possibleConstructorReturn3['default'])(this, (Square.__proto__ || (0, _getPrototypeOf2['default'])(Square)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(Square, [{
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this._drawShape(ctx, 'square', 2, x, y, selected, hover, values);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return Square;
}(_ShapeBase3['default']);

exports['default'] = Square;

 }),
 (function(module, exports, __nested_webpack_require_793601__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_793601__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_793601__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_793601__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_793601__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_793601__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ShapeBase2 = __nested_webpack_require_793601__(17);

var _ShapeBase3 = _interopRequireDefault(_ShapeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Hexagon = function (_ShapeBase) {
  (0, _inherits3['default'])(Hexagon, _ShapeBase);

  function Hexagon(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Hexagon);
    return (0, _possibleConstructorReturn3['default'])(this, (Hexagon.__proto__ || (0, _getPrototypeOf2['default'])(Hexagon)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(Hexagon, [{
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this._drawShape(ctx, 'hexagon', 4, x, y, selected, hover, values);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return Hexagon;
}(_ShapeBase3['default']);

exports['default'] = Hexagon;

 }),
 (function(module, exports, __nested_webpack_require_795829__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_795829__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_795829__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_795829__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_795829__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_795829__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ShapeBase2 = __nested_webpack_require_795829__(17);

var _ShapeBase3 = _interopRequireDefault(_ShapeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Star = function (_ShapeBase) {
  (0, _inherits3['default'])(Star, _ShapeBase);

  function Star(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Star);
    return (0, _possibleConstructorReturn3['default'])(this, (Star.__proto__ || (0, _getPrototypeOf2['default'])(Star)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(Star, [{
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this._drawShape(ctx, 'star', 4, x, y, selected, hover, values);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return Star;
}(_ShapeBase3['default']);

exports['default'] = Star;

 }),
 (function(module, exports, __nested_webpack_require_798024__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_798024__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_798024__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_798024__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_798024__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_798024__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _NodeBase2 = __nested_webpack_require_798024__(16);

var _NodeBase3 = _interopRequireDefault(_NodeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Text = function (_NodeBase) {
  (0, _inherits3['default'])(Text, _NodeBase);

  function Text(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Text);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Text.__proto__ || (0, _getPrototypeOf2['default'])(Text)).call(this, options, body, labelModule));

    _this._setMargins(labelModule);
    return _this;
  }



  (0, _createClass3['default'])(Text, [{
    key: 'resize',
    value: function resize(ctx, selected, hover) {
      if (this.needsRefresh(selected, hover)) {
        this.textSize = this.labelModule.getTextSize(ctx, selected, hover);
        this.width = this.textSize.width + this.margin.right + this.margin.left;
        this.height = this.textSize.height + this.margin.top + this.margin.bottom;
        this.radius = 0.5 * this.width;
      }
    }


  }, {
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this.resize(ctx, selected, hover);
      this.left = x - this.width / 2;
      this.top = y - this.height / 2;

      this.enableShadow(ctx, values);
      this.labelModule.draw(ctx, this.left + this.textSize.width / 2 + this.margin.left, this.top + this.textSize.height / 2 + this.margin.top, selected, hover);

      this.disableShadow(ctx, values);

      this.updateBoundingBox(x, y, ctx, selected, hover);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return Text;
}(_NodeBase3['default']);

exports['default'] = Text;

 }),
 (function(module, exports, __nested_webpack_require_801281__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_801281__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_801281__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_801281__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_801281__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_801281__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ShapeBase2 = __nested_webpack_require_801281__(17);

var _ShapeBase3 = _interopRequireDefault(_ShapeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Triangle = function (_ShapeBase) {
  (0, _inherits3['default'])(Triangle, _ShapeBase);

  function Triangle(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, Triangle);
    return (0, _possibleConstructorReturn3['default'])(this, (Triangle.__proto__ || (0, _getPrototypeOf2['default'])(Triangle)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(Triangle, [{
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this._drawShape(ctx, 'triangle', 3, x, y, selected, hover, values);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return Triangle;
}(_ShapeBase3['default']);

exports['default'] = Triangle;

 }),
 (function(module, exports, __nested_webpack_require_803507__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_803507__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_803507__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_803507__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_803507__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_803507__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _ShapeBase2 = __nested_webpack_require_803507__(17);

var _ShapeBase3 = _interopRequireDefault(_ShapeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TriangleDown = function (_ShapeBase) {
  (0, _inherits3['default'])(TriangleDown, _ShapeBase);

  function TriangleDown(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, TriangleDown);
    return (0, _possibleConstructorReturn3['default'])(this, (TriangleDown.__proto__ || (0, _getPrototypeOf2['default'])(TriangleDown)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(TriangleDown, [{
    key: 'draw',
    value: function draw(ctx, x, y, selected, hover, values) {
      this._drawShape(ctx, 'triangleDown', 3, x, y, selected, hover, values);
    }


  }, {
    key: 'distanceToBorder',
    value: function distanceToBorder(ctx, angle) {
      return this._distanceToBorder(ctx, angle);
    }
  }]);
  return TriangleDown;
}(_ShapeBase3['default']);

exports['default'] = TriangleDown;

 }),
 (function(module, exports, __nested_webpack_require_805789__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_805789__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_805789__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_805789__(2);
var DataSet = __nested_webpack_require_805789__(33);
var DataView = __nested_webpack_require_805789__(51);
var Edge = __nested_webpack_require_805789__(55)['default'];


var EdgesHandler = function () {
  function EdgesHandler(body, images, groups) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, EdgesHandler);

    this.body = body;
    this.images = images;
    this.groups = groups;

    this.body.functions.createEdge = this.create.bind(this);

    this.edgesListeners = {
      add: function add(event, params) {
        _this.add(params.items);
      },
      update: function update(event, params) {
        _this.update(params.items);
      },
      remove: function remove(event, params) {
        _this.remove(params.items);
      }
    };

    this.options = {};
    this.defaultOptions = {
      arrows: {
        to: { enabled: false, scaleFactor: 1, type: 'arrow' }, 
        middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
        from: { enabled: false, scaleFactor: 1, type: 'arrow' }
      },
      arrowStrikethrough: true,
      color: {
        color: '#848484',
        highlight: '#848484',
        hover: '#848484',
        inherit: 'from',
        opacity: 1.0
      },
      dashes: false,
      font: {
        color: '#343434',
        size: 14, 
        face: 'arial',
        background: 'none',
        strokeWidth: 2, 
        strokeColor: '#ffffff',
        align: 'horizontal',
        multi: false,
        vadjust: 0,
        bold: {
          mod: 'bold'
        },
        boldital: {
          mod: 'bold italic'
        },
        ital: {
          mod: 'italic'
        },
        mono: {
          mod: '',
          size: 15, 
          face: 'courier new',
          vadjust: 2
        }
      },
      hidden: false,
      hoverWidth: 1.5,
      label: undefined,
      labelHighlightBold: true,
      length: undefined,
      physics: true,
      scaling: {
        min: 1,
        max: 15,
        label: {
          enabled: true,
          min: 14,
          max: 30,
          maxVisible: 30,
          drawThreshold: 5
        },
        customScalingFunction: function customScalingFunction(min, max, total, value) {
          if (max === min) {
            return 0.5;
          } else {
            var scale = 1 / (max - min);
            return Math.max(0, (value - min) * scale);
          }
        }
      },
      selectionWidth: 1.5,
      selfReferenceSize: 20,
      shadow: {
        enabled: false,
        color: 'rgba(0,0,0,0.5)',
        size: 10,
        x: 5,
        y: 5
      },
      background: {
        enabled: false,
        color: 'rgba(111,111,111,1)',
        size: 10,
        dashes: false
      },
      smooth: {
        enabled: true,
        type: 'dynamic',
        forceDirection: 'none',
        roundness: 0.5
      },
      title: undefined,
      width: 1,
      value: undefined
    };

    util.deepExtend(this.options, this.defaultOptions);

    this.bindEventListeners();
  }



  (0, _createClass3['default'])(EdgesHandler, [{
    key: 'bindEventListeners',
    value: function bindEventListeners() {
      var _this2 = this;

      this.body.emitter.on('_forceDisableDynamicCurves', function (type) {
        var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (type === 'dynamic') {
          type = 'continuous';
        }
        var dataChanged = false;
        for (var edgeId in _this2.body.edges) {
          if (_this2.body.edges.hasOwnProperty(edgeId)) {
            var edge = _this2.body.edges[edgeId];
            var edgeData = _this2.body.data.edges._data[edgeId];

            if (edgeData !== undefined) {
              var smoothOptions = edgeData.smooth;
              if (smoothOptions !== undefined) {
                if (smoothOptions.enabled === true && smoothOptions.type === 'dynamic') {
                  if (type === undefined) {
                    edge.setOptions({ smooth: false });
                  } else {
                    edge.setOptions({ smooth: { type: type } });
                  }
                  dataChanged = true;
                }
              }
            }
          }
        }
        if (emit === true && dataChanged === true) {
          _this2.body.emitter.emit('_dataChanged');
        }
      });

      this.body.emitter.on('_dataUpdated', function () {
        _this2.reconnectEdges();
      });

      this.body.emitter.on('refreshEdges', this.refresh.bind(this));
      this.body.emitter.on('refresh', this.refresh.bind(this));
      this.body.emitter.on('destroy', function () {
        util.forEach(_this2.edgesListeners, function (callback, event) {
          if (_this2.body.data.edges) _this2.body.data.edges.off(event, callback);
        });
        delete _this2.body.functions.createEdge;
        delete _this2.edgesListeners.add;
        delete _this2.edgesListeners.update;
        delete _this2.edgesListeners.remove;
        delete _this2.edgesListeners;
      });
    }


  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if (options !== undefined) {
        Edge.parseOptions(this.options, options, true, this.defaultOptions, true);

        var dataChanged = false;
        if (options.smooth !== undefined) {
          for (var edgeId in this.body.edges) {
            if (this.body.edges.hasOwnProperty(edgeId)) {
              dataChanged = this.body.edges[edgeId].updateEdgeType() || dataChanged;
            }
          }
        }

        if (options.font !== undefined) {
          for (var _edgeId in this.body.edges) {
            if (this.body.edges.hasOwnProperty(_edgeId)) {
              this.body.edges[_edgeId].updateLabelModule();
            }
          }
        }

        if (options.hidden !== undefined || options.physics !== undefined || dataChanged === true) {
          this.body.emitter.emit('_dataChanged');
        }
      }
    }


  }, {
    key: 'setData',
    value: function setData(edges) {
      var _this3 = this;

      var doNotEmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var oldEdgesData = this.body.data.edges;

      if (edges instanceof DataSet || edges instanceof DataView) {
        this.body.data.edges = edges;
      } else if (Array.isArray(edges)) {
        this.body.data.edges = new DataSet();
        this.body.data.edges.add(edges);
      } else if (!edges) {
        this.body.data.edges = new DataSet();
      } else {
        throw new TypeError('Array or DataSet expected');
      }

      if (oldEdgesData) {
        util.forEach(this.edgesListeners, function (callback, event) {
          oldEdgesData.off(event, callback);
        });
      }

      this.body.edges = {};

      if (this.body.data.edges) {
        util.forEach(this.edgesListeners, function (callback, event) {
          _this3.body.data.edges.on(event, callback);
        });

        var ids = this.body.data.edges.getIds();
        this.add(ids, true);
      }

      this.body.emitter.emit('_adjustEdgesForHierarchicalLayout');
      if (doNotEmit === false) {
        this.body.emitter.emit('_dataChanged');
      }
    }


  }, {
    key: 'add',
    value: function add(ids) {
      var doNotEmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var edges = this.body.edges;
      var edgesData = this.body.data.edges;

      for (var i = 0; i < ids.length; i++) {
        var id = ids[i];

        var oldEdge = edges[id];
        if (oldEdge) {
          oldEdge.disconnect();
        }

        var data = edgesData.get(id, { showInternalIds: true });
        edges[id] = this.create(data);
      }

      this.body.emitter.emit('_adjustEdgesForHierarchicalLayout');

      if (doNotEmit === false) {
        this.body.emitter.emit('_dataChanged');
      }
    }


  }, {
    key: 'update',
    value: function update(ids) {
      var edges = this.body.edges;
      var edgesData = this.body.data.edges;
      var dataChanged = false;
      for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
        var data = edgesData.get(id);
        var edge = edges[id];
        if (edge !== undefined) {
          edge.disconnect();
          dataChanged = edge.setOptions(data) || dataChanged; 
          edge.connect();
        } else {
          this.body.edges[id] = this.create(data);
          dataChanged = true;
        }
      }

      if (dataChanged === true) {
        this.body.emitter.emit('_adjustEdgesForHierarchicalLayout');
        this.body.emitter.emit('_dataChanged');
      } else {
        this.body.emitter.emit('_dataUpdated');
      }
    }


  }, {
    key: 'remove',
    value: function remove(ids) {
      var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (ids.length === 0) return; 

      var edges = this.body.edges;
      util.forEach(ids, function (id) {
        var edge = edges[id];
        if (edge !== undefined) {
          edge.remove();
        }
      });

      if (emit) {
        this.body.emitter.emit('_dataChanged');
      }
    }


  }, {
    key: 'refresh',
    value: function refresh() {
      var _this4 = this;

      util.forEach(this.body.edges, function (edge, edgeId) {
        var data = _this4.body.data.edges._data[edgeId];
        if (data !== undefined) {
          edge.setOptions(data);
        }
      });
    }


  }, {
    key: 'create',
    value: function create(properties) {
      return new Edge(properties, this.body, this.options, this.defaultOptions);
    }


  }, {
    key: 'reconnectEdges',
    value: function reconnectEdges() {
      var id;
      var nodes = this.body.nodes;
      var edges = this.body.edges;

      for (id in nodes) {
        if (nodes.hasOwnProperty(id)) {
          nodes[id].edges = [];
        }
      }

      for (id in edges) {
        if (edges.hasOwnProperty(id)) {
          var edge = edges[id];
          edge.from = null;
          edge.to = null;
          edge.connect();
        }
      }
    }


  }, {
    key: 'getConnectedNodes',
    value: function getConnectedNodes(edgeId) {
      var nodeList = [];
      if (this.body.edges[edgeId] !== undefined) {
        var edge = this.body.edges[edgeId];
        if (edge.fromId !== undefined) {
          nodeList.push(edge.fromId);
        }
        if (edge.toId !== undefined) {
          nodeList.push(edge.toId);
        }
      }
      return nodeList;
    }


  }, {
    key: '_updateState',
    value: function _updateState() {
      this._addMissingEdges();
      this._removeInvalidEdges();
    }


  }, {
    key: '_removeInvalidEdges',
    value: function _removeInvalidEdges() {
      var _this5 = this;

      var edgesToDelete = [];

      util.forEach(this.body.edges, function (edge, id) {
        var toNode = _this5.body.nodes[edge.toId];
        var fromNode = _this5.body.nodes[edge.fromId];

        if (toNode !== undefined && toNode.isCluster === true || fromNode !== undefined && fromNode.isCluster === true) {
          return;
        }

        if (toNode === undefined || fromNode === undefined) {
          edgesToDelete.push(id);
        }
      });

      this.remove(edgesToDelete, false);
    }


  }, {
    key: '_addMissingEdges',
    value: function _addMissingEdges() {
      var edgesData = this.body.data.edges;
      if (edgesData === undefined || edgesData === null) {
        return; 
      }

      var edges = this.body.edges;
      var addIds = [];

      edgesData.forEach(function (edgeData, edgeId) {
        var edge = edges[edgeId];
        if (edge === undefined) {
          addIds.push(edgeId);
        }
      });

      this.add(addIds, true);
    }
  }]);
  return EdgesHandler;
}();

exports['default'] = EdgesHandler;

 }),
 (function(module, exports, __nested_webpack_require_821252__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __nested_webpack_require_821252__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __nested_webpack_require_821252__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_821252__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_821252__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_821252__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_821252__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CubicBezierEdgeBase2 = __nested_webpack_require_821252__(167);

var _CubicBezierEdgeBase3 = _interopRequireDefault(_CubicBezierEdgeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CubicBezierEdge = function (_CubicBezierEdgeBase) {
  (0, _inherits3['default'])(CubicBezierEdge, _CubicBezierEdgeBase);

  function CubicBezierEdge(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, CubicBezierEdge);
    return (0, _possibleConstructorReturn3['default'])(this, (CubicBezierEdge.__proto__ || (0, _getPrototypeOf2['default'])(CubicBezierEdge)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(CubicBezierEdge, [{
    key: '_line',
    value: function _line(ctx, values, viaNodes) {
      var via1 = viaNodes[0];
      var via2 = viaNodes[1];
      this._bezierCurve(ctx, values, via1, via2);
    }


  }, {
    key: '_getViaCoordinates',
    value: function _getViaCoordinates() {
      var dx = this.from.x - this.to.x;
      var dy = this.from.y - this.to.y;

      var x1 = void 0,
          y1 = void 0,
          x2 = void 0,
          y2 = void 0;
      var roundness = this.options.smooth.roundness;

      if ((Math.abs(dx) > Math.abs(dy) || this.options.smooth.forceDirection === true || this.options.smooth.forceDirection === 'horizontal') && this.options.smooth.forceDirection !== 'vertical') {
        y1 = this.from.y;
        y2 = this.to.y;
        x1 = this.from.x - roundness * dx;
        x2 = this.to.x + roundness * dx;
      } else {
        y1 = this.from.y - roundness * dy;
        y2 = this.to.y + roundness * dy;
        x1 = this.from.x;
        x2 = this.to.x;
      }

      return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
    }


  }, {
    key: 'getViaNode',
    value: function getViaNode() {
      return this._getViaCoordinates();
    }


  }, {
    key: '_findBorderPosition',
    value: function _findBorderPosition(nearNode, ctx) {
      return this._findBorderPositionBezier(nearNode, ctx);
    }


  }, {
    key: '_getDistanceToEdge',
    value: function _getDistanceToEdge(x1, y1, x2, y2, x3, y3) {
      var _ref = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : this._getViaCoordinates(),
          _ref2 = (0, _slicedToArray3['default'])(_ref, 2),
          via1 = _ref2[0],
          via2 = _ref2[1];

      return this._getDistanceToBezierEdge(x1, y1, x2, y2, x3, y3, via1, via2);
    }


  }, {
    key: 'getPoint',
    value: function getPoint(percentage) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._getViaCoordinates(),
          _ref4 = (0, _slicedToArray3['default'])(_ref3, 2),
          via1 = _ref4[0],
          via2 = _ref4[1];

      var t = percentage;
      var vec = [];
      vec[0] = Math.pow(1 - t, 3);
      vec[1] = 3 * t * Math.pow(1 - t, 2);
      vec[2] = 3 * Math.pow(t, 2) * (1 - t);
      vec[3] = Math.pow(t, 3);
      var x = vec[0] * this.fromPoint.x + vec[1] * via1.x + vec[2] * via2.x + vec[3] * this.toPoint.x;
      var y = vec[0] * this.fromPoint.y + vec[1] * via1.y + vec[2] * via2.y + vec[3] * this.toPoint.y;

      return { x: x, y: y };
    }
  }]);
  return CubicBezierEdge;
}(_CubicBezierEdgeBase3['default']);

exports['default'] = CubicBezierEdge;

 }),
 (function(module, exports, __nested_webpack_require_826989__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_826989__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_826989__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_826989__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_826989__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_826989__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BezierEdgeBase2 = __nested_webpack_require_826989__(56);

var _BezierEdgeBase3 = _interopRequireDefault(_BezierEdgeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CubicBezierEdgeBase = function (_BezierEdgeBase) {
  (0, _inherits3['default'])(CubicBezierEdgeBase, _BezierEdgeBase);

  function CubicBezierEdgeBase(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, CubicBezierEdgeBase);
    return (0, _possibleConstructorReturn3['default'])(this, (CubicBezierEdgeBase.__proto__ || (0, _getPrototypeOf2['default'])(CubicBezierEdgeBase)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(CubicBezierEdgeBase, [{
    key: '_getDistanceToBezierEdge',
    value: function _getDistanceToBezierEdge(x1, y1, x2, y2, x3, y3, via1, via2) {
      var minDistance = 1e9;
      var distance = void 0;
      var i = void 0,
          t = void 0,
          x = void 0,
          y = void 0;
      var lastX = x1;
      var lastY = y1;
      var vec = [0, 0, 0, 0];
      for (i = 1; i < 10; i++) {
        t = 0.1 * i;
        vec[0] = Math.pow(1 - t, 3);
        vec[1] = 3 * t * Math.pow(1 - t, 2);
        vec[2] = 3 * Math.pow(t, 2) * (1 - t);
        vec[3] = Math.pow(t, 3);
        x = vec[0] * x1 + vec[1] * via1.x + vec[2] * via2.x + vec[3] * x2;
        y = vec[0] * y1 + vec[1] * via1.y + vec[2] * via2.y + vec[3] * y2;
        if (i > 0) {
          distance = this._getDistanceToLine(lastX, lastY, x, y, x3, y3);
          minDistance = distance < minDistance ? distance : minDistance;
        }
        lastX = x;
        lastY = y;
      }

      return minDistance;
    }
  }]);
  return CubicBezierEdgeBase;
}(_BezierEdgeBase3['default']);

exports['default'] = CubicBezierEdgeBase;

 }),
 (function(module, exports, __nested_webpack_require_830360__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __nested_webpack_require_830360__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __nested_webpack_require_830360__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_830360__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_830360__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_830360__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_830360__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BezierEdgeBase2 = __nested_webpack_require_830360__(56);

var _BezierEdgeBase3 = _interopRequireDefault(_BezierEdgeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BezierEdgeDynamic = function (_BezierEdgeBase) {
  (0, _inherits3['default'])(BezierEdgeDynamic, _BezierEdgeBase);

  function BezierEdgeDynamic(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, BezierEdgeDynamic);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (BezierEdgeDynamic.__proto__ || (0, _getPrototypeOf2['default'])(BezierEdgeDynamic)).call(this, options, body, labelModule));


    _this._boundFunction = function () {
      _this.positionBezierNode();
    };
    _this.body.emitter.on('_repositionBezierNodes', _this._boundFunction);
    return _this;
  }



  (0, _createClass3['default'])(BezierEdgeDynamic, [{
    key: 'setOptions',
    value: function setOptions(options) {
      var physicsChange = false;
      if (this.options.physics !== options.physics) {
        physicsChange = true;
      }

      this.options = options;
      this.id = this.options.id;
      this.from = this.body.nodes[this.options.from];
      this.to = this.body.nodes[this.options.to];

      this.setupSupportNode();
      this.connect();

      if (physicsChange === true) {
        this.via.setOptions({ physics: this.options.physics });
        this.positionBezierNode();
      }
    }


  }, {
    key: 'connect',
    value: function connect() {
      this.from = this.body.nodes[this.options.from];
      this.to = this.body.nodes[this.options.to];
      if (this.from === undefined || this.to === undefined || this.options.physics === false) {
        this.via.setOptions({ physics: false });
      } else {
        if (this.from.id === this.to.id) {
          this.via.setOptions({ physics: false });
        } else {
          this.via.setOptions({ physics: true });
        }
      }
    }


  }, {
    key: 'cleanup',
    value: function cleanup() {
      this.body.emitter.off('_repositionBezierNodes', this._boundFunction);
      if (this.via !== undefined) {
        delete this.body.nodes[this.via.id];
        this.via = undefined;
        return true;
      }
      return false;
    }


  }, {
    key: 'setupSupportNode',
    value: function setupSupportNode() {
      if (this.via === undefined) {
        var nodeId = 'edgeId:' + this.id;
        var node = this.body.functions.createNode({
          id: nodeId,
          shape: 'circle',
          physics: true,
          hidden: true
        });
        this.body.nodes[nodeId] = node;
        this.via = node;
        this.via.parentEdgeId = this.id;
        this.positionBezierNode();
      }
    }


  }, {
    key: 'positionBezierNode',
    value: function positionBezierNode() {
      if (this.via !== undefined && this.from !== undefined && this.to !== undefined) {
        this.via.x = 0.5 * (this.from.x + this.to.x);
        this.via.y = 0.5 * (this.from.y + this.to.y);
      } else if (this.via !== undefined) {
        this.via.x = 0;
        this.via.y = 0;
      }
    }


  }, {
    key: '_line',
    value: function _line(ctx, values, viaNode) {
      this._bezierCurve(ctx, values, viaNode);
    }


  }, {
    key: 'getViaNode',
    value: function getViaNode() {
      return this.via;
    }


  }, {
    key: 'getPoint',
    value: function getPoint(percentage) {
      var viaNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.via;

      var t = percentage;
      var x = void 0,
          y = void 0;
      if (this.from === this.to) {
        var _getCircleData = this._getCircleData(this.from),
            _getCircleData2 = (0, _slicedToArray3['default'])(_getCircleData, 3),
            cx = _getCircleData2[0],
            cy = _getCircleData2[1],
            cr = _getCircleData2[2];

        var a = 2 * Math.PI * (1 - t);
        x = cx + cr * Math.sin(a);
        y = cy + cr - cr * (1 - Math.cos(a));
      } else {
        x = Math.pow(1 - t, 2) * this.fromPoint.x + 2 * t * (1 - t) * viaNode.x + Math.pow(t, 2) * this.toPoint.x;
        y = Math.pow(1 - t, 2) * this.fromPoint.y + 2 * t * (1 - t) * viaNode.y + Math.pow(t, 2) * this.toPoint.y;
      }

      return { x: x, y: y };
    }


  }, {
    key: '_findBorderPosition',
    value: function _findBorderPosition(nearNode, ctx) {
      return this._findBorderPositionBezier(nearNode, ctx, this.via);
    }


  }, {
    key: '_getDistanceToEdge',
    value: function _getDistanceToEdge(x1, y1, x2, y2, x3, y3) {
      return this._getDistanceToBezierEdge(x1, y1, x2, y2, x3, y3, this.via);
    }
  }]);
  return BezierEdgeDynamic;
}(_BezierEdgeBase3['default']);

exports['default'] = BezierEdgeDynamic;

 }),
 (function(module, exports, __nested_webpack_require_838185__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_838185__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_838185__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_838185__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_838185__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_838185__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BezierEdgeBase2 = __nested_webpack_require_838185__(56);

var _BezierEdgeBase3 = _interopRequireDefault(_BezierEdgeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BezierEdgeStatic = function (_BezierEdgeBase) {
  (0, _inherits3['default'])(BezierEdgeStatic, _BezierEdgeBase);

  function BezierEdgeStatic(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, BezierEdgeStatic);
    return (0, _possibleConstructorReturn3['default'])(this, (BezierEdgeStatic.__proto__ || (0, _getPrototypeOf2['default'])(BezierEdgeStatic)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(BezierEdgeStatic, [{
    key: '_line',
    value: function _line(ctx, values, viaNode) {
      this._bezierCurve(ctx, values, viaNode);
    }


  }, {
    key: 'getViaNode',
    value: function getViaNode() {
      return this._getViaCoordinates();
    }


  }, {
    key: '_getViaCoordinates',
    value: function _getViaCoordinates() {
      var xVia = undefined;
      var yVia = undefined;
      var factor = this.options.smooth.roundness;
      var type = this.options.smooth.type;
      var dx = Math.abs(this.from.x - this.to.x);
      var dy = Math.abs(this.from.y - this.to.y);
      if (type === 'discrete' || type === 'diagonalCross') {
        var stepX = void 0;
        var stepY = void 0;

        if (dx <= dy) {
          stepX = stepY = factor * dy;
        } else {
          stepX = stepY = factor * dx;
        }

        if (this.from.x > this.to.x) stepX = -stepX;
        if (this.from.y >= this.to.y) stepY = -stepY;

        xVia = this.from.x + stepX;
        yVia = this.from.y + stepY;

        if (type === 'discrete') {
          if (dx <= dy) {
            xVia = dx < factor * dy ? this.from.x : xVia;
          } else {
            yVia = dy < factor * dx ? this.from.y : yVia;
          }
        }
      } else if (type === 'straightCross') {
        var _stepX = (1 - factor) * dx;
        var _stepY = (1 - factor) * dy;

        if (dx <= dy) {
          _stepX = 0;
          if (this.from.y < this.to.y) _stepY = -_stepY;
        } else {
          if (this.from.x < this.to.x) _stepX = -_stepX;
          _stepY = 0;
        }
        xVia = this.to.x + _stepX;
        yVia = this.to.y + _stepY;
      } else if (type === 'horizontal') {
        var _stepX2 = (1 - factor) * dx;
        if (this.from.x < this.to.x) _stepX2 = -_stepX2;
        xVia = this.to.x + _stepX2;
        yVia = this.from.y;
      } else if (type === 'vertical') {
        var _stepY2 = (1 - factor) * dy;
        if (this.from.y < this.to.y) _stepY2 = -_stepY2;
        xVia = this.from.x;
        yVia = this.to.y + _stepY2;
      } else if (type === 'curvedCW') {
        dx = this.to.x - this.from.x;
        dy = this.from.y - this.to.y;
        var radius = Math.sqrt(dx * dx + dy * dy);
        var pi = Math.PI;

        var originalAngle = Math.atan2(dy, dx);
        var myAngle = (originalAngle + (factor * 0.5 + 0.5) * pi) % (2 * pi);

        xVia = this.from.x + (factor * 0.5 + 0.5) * radius * Math.sin(myAngle);
        yVia = this.from.y + (factor * 0.5 + 0.5) * radius * Math.cos(myAngle);
      } else if (type === 'curvedCCW') {
        dx = this.to.x - this.from.x;
        dy = this.from.y - this.to.y;
        var _radius = Math.sqrt(dx * dx + dy * dy);
        var _pi = Math.PI;

        var _originalAngle = Math.atan2(dy, dx);
        var _myAngle = (_originalAngle + (-factor * 0.5 + 0.5) * _pi) % (2 * _pi);

        xVia = this.from.x + (factor * 0.5 + 0.5) * _radius * Math.sin(_myAngle);
        yVia = this.from.y + (factor * 0.5 + 0.5) * _radius * Math.cos(_myAngle);
      } else {
        var _stepX3 = void 0;
        var _stepY3 = void 0;

        if (dx <= dy) {
          _stepX3 = _stepY3 = factor * dy;
        } else {
          _stepX3 = _stepY3 = factor * dx;
        }

        if (this.from.x > this.to.x) _stepX3 = -_stepX3;
        if (this.from.y >= this.to.y) _stepY3 = -_stepY3;

        xVia = this.from.x + _stepX3;
        yVia = this.from.y + _stepY3;

        if (dx <= dy) {
          if (this.from.x <= this.to.x) {
            xVia = this.to.x < xVia ? this.to.x : xVia;
          } else {
            xVia = this.to.x > xVia ? this.to.x : xVia;
          }
        } else {
          if (this.from.y >= this.to.y) {
            yVia = this.to.y > yVia ? this.to.y : yVia;
          } else {
            yVia = this.to.y < yVia ? this.to.y : yVia;
          }
        }
      }
      return { x: xVia, y: yVia };
    }


  }, {
    key: '_findBorderPosition',
    value: function _findBorderPosition(nearNode, ctx) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this._findBorderPositionBezier(nearNode, ctx, options.via);
    }


  }, {
    key: '_getDistanceToEdge',
    value: function _getDistanceToEdge(x1, y1, x2, y2, x3, y3) {
      var viaNode = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : this._getViaCoordinates();

      return this._getDistanceToBezierEdge(x1, y1, x2, y2, x3, y3, viaNode);
    }


  }, {
    key: 'getPoint',
    value: function getPoint(percentage) {
      var viaNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._getViaCoordinates();

      var t = percentage;
      var x = Math.pow(1 - t, 2) * this.fromPoint.x + 2 * t * (1 - t) * viaNode.x + Math.pow(t, 2) * this.toPoint.x;
      var y = Math.pow(1 - t, 2) * this.fromPoint.y + 2 * t * (1 - t) * viaNode.y + Math.pow(t, 2) * this.toPoint.y;

      return { x: x, y: y };
    }
  }]);
  return BezierEdgeStatic;
}(_BezierEdgeBase3['default']);

exports['default'] = BezierEdgeStatic;

 }),
 (function(module, exports, __nested_webpack_require_846176__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_846176__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_846176__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_846176__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_846176__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_846176__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _EdgeBase2 = __nested_webpack_require_846176__(79);

var _EdgeBase3 = _interopRequireDefault(_EdgeBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var StraightEdge = function (_EdgeBase) {
  (0, _inherits3['default'])(StraightEdge, _EdgeBase);

  function StraightEdge(options, body, labelModule) {
    (0, _classCallCheck3['default'])(this, StraightEdge);
    return (0, _possibleConstructorReturn3['default'])(this, (StraightEdge.__proto__ || (0, _getPrototypeOf2['default'])(StraightEdge)).call(this, options, body, labelModule));
  }



  (0, _createClass3['default'])(StraightEdge, [{
    key: '_line',
    value: function _line(ctx, values) {
      ctx.beginPath();
      ctx.moveTo(this.fromPoint.x, this.fromPoint.y);
      ctx.lineTo(this.toPoint.x, this.toPoint.y);
      this.enableShadow(ctx, values);
      ctx.stroke();
      this.disableShadow(ctx, values);
    }


  }, {
    key: 'getViaNode',
    value: function getViaNode() {
      return undefined;
    }


  }, {
    key: 'getPoint',
    value: function getPoint(percentage) {
      return {
        x: (1 - percentage) * this.fromPoint.x + percentage * this.toPoint.x,
        y: (1 - percentage) * this.fromPoint.y + percentage * this.toPoint.y
      };
    }


  }, {
    key: '_findBorderPosition',
    value: function _findBorderPosition(nearNode, ctx) {
      var node1 = this.to;
      var node2 = this.from;
      if (nearNode.id === this.from.id) {
        node1 = this.from;
        node2 = this.to;
      }

      var angle = Math.atan2(node1.y - node2.y, node1.x - node2.x);
      var dx = node1.x - node2.x;
      var dy = node1.y - node2.y;
      var edgeSegmentLength = Math.sqrt(dx * dx + dy * dy);
      var toBorderDist = nearNode.distanceToBorder(ctx, angle);
      var toBorderPoint = (edgeSegmentLength - toBorderDist) / edgeSegmentLength;

      var borderPos = {};
      borderPos.x = (1 - toBorderPoint) * node2.x + toBorderPoint * node1.x;
      borderPos.y = (1 - toBorderPoint) * node2.y + toBorderPoint * node1.y;

      return borderPos;
    }


  }, {
    key: '_getDistanceToEdge',
    value: function _getDistanceToEdge(x1, y1, x2, y2, x3, y3) {
      return this._getDistanceToLine(x1, y1, x2, y2, x3, y3);
    }
  }]);
  return StraightEdge;
}(_EdgeBase3['default']);

exports['default'] = StraightEdge;

 }),
 (function(module, exports, __nested_webpack_require_850332__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __nested_webpack_require_850332__(9);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __nested_webpack_require_850332__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_850332__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var BarnesHutSolver = __nested_webpack_require_850332__(81)['default'];
var Repulsion = __nested_webpack_require_850332__(172)['default'];
var HierarchicalRepulsion = __nested_webpack_require_850332__(173)['default'];
var SpringSolver = __nested_webpack_require_850332__(174)['default'];
var HierarchicalSpringSolver = __nested_webpack_require_850332__(175)['default'];
var CentralGravitySolver = __nested_webpack_require_850332__(82)['default'];
var ForceAtlas2BasedRepulsionSolver = __nested_webpack_require_850332__(176)['default'];
var ForceAtlas2BasedCentralGravitySolver = __nested_webpack_require_850332__(177)['default'];
var util = __nested_webpack_require_850332__(2);
var EndPoints = __nested_webpack_require_850332__(80)['default']; 


var PhysicsEngine = function () {
  function PhysicsEngine(body) {
    (0, _classCallCheck3['default'])(this, PhysicsEngine);

    this.body = body;
    this.physicsBody = {
      physicsNodeIndices: [],
      physicsEdgeIndices: [],
      forces: {},
      velocities: {}
    };

    this.physicsEnabled = true;
    this.simulationInterval = 1000 / 60;
    this.requiresTimeout = true;
    this.previousStates = {};
    this.referenceState = {};
    this.freezeCache = {};
    this.renderTimer = undefined;

    this.adaptiveTimestep = false;
    this.adaptiveTimestepEnabled = false;
    this.adaptiveCounter = 0;
    this.adaptiveInterval = 3;

    this.stabilized = false;
    this.startedStabilization = false;
    this.stabilizationIterations = 0;
    this.ready = false; 

    this.options = {};
    this.defaultOptions = {
      enabled: true,
      barnesHut: {
        theta: 0.5,
        gravitationalConstant: -2000,
        centralGravity: 0.3,
        springLength: 95,
        springConstant: 0.04,
        damping: 0.09,
        avoidOverlap: 0
      },
      forceAtlas2Based: {
        theta: 0.5,
        gravitationalConstant: -50,
        centralGravity: 0.01,
        springConstant: 0.08,
        springLength: 100,
        damping: 0.4,
        avoidOverlap: 0
      },
      repulsion: {
        centralGravity: 0.2,
        springLength: 200,
        springConstant: 0.05,
        nodeDistance: 100,
        damping: 0.09,
        avoidOverlap: 0
      },
      hierarchicalRepulsion: {
        centralGravity: 0.0,
        springLength: 100,
        springConstant: 0.01,
        nodeDistance: 120,
        damping: 0.09
      },
      maxVelocity: 50,
      minVelocity: 0.75, 
      solver: 'barnesHut',
      stabilization: {
        enabled: true,
        iterations: 1000, 
        updateInterval: 50,
        onlyDynamicEdges: false,
        fit: true
      },
      timestep: 0.5,
      adaptiveTimestep: true
    };
    util.extend(this.options, this.defaultOptions);
    this.timestep = 0.5;
    this.layoutFailed = false;

    this.bindEventListeners();
  }



  (0, _createClass3['default'])(PhysicsEngine, [{
    key: 'bindEventListeners',
    value: function bindEventListeners() {
      var _this = this;

      this.body.emitter.on('initPhysics', function () {
        _this.initPhysics();
      });
      this.body.emitter.on('_layoutFailed', function () {
        _this.layoutFailed = true;
      });
      this.body.emitter.on('resetPhysics', function () {
        _this.stopSimulation();
        _this.ready = false;
      });
      this.body.emitter.on('disablePhysics', function () {
        _this.physicsEnabled = false;
        _this.stopSimulation();
      });
      this.body.emitter.on('restorePhysics', function () {
        _this.setOptions(_this.options);
        if (_this.ready === true) {
          _this.startSimulation();
        }
      });
      this.body.emitter.on('startSimulation', function () {
        if (_this.ready === true) {
          _this.startSimulation();
        }
      });
      this.body.emitter.on('stopSimulation', function () {
        _this.stopSimulation();
      });
      this.body.emitter.on('destroy', function () {
        _this.stopSimulation(false);
        _this.body.emitter.off();
      });
      this.body.emitter.on('_dataChanged', function () {
        _this.updatePhysicsData();
      });

    }


  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if (options !== undefined) {
        if (options === false) {
          this.options.enabled = false;
          this.physicsEnabled = false;
          this.stopSimulation();
        } else if (options === true) {
          this.options.enabled = true;
          this.physicsEnabled = true;
          this.startSimulation();
        } else {
          this.physicsEnabled = true;
          util.selectiveNotDeepExtend(['stabilization'], this.options, options);
          util.mergeOptions(this.options, options, 'stabilization');

          if (options.enabled === undefined) {
            this.options.enabled = true;
          }

          if (this.options.enabled === false) {
            this.physicsEnabled = false;
            this.stopSimulation();
          }

          this.timestep = this.options.timestep;
        }
      }
      this.init();
    }


  }, {
    key: 'init',
    value: function init() {
      var options;
      if (this.options.solver === 'forceAtlas2Based') {
        options = this.options.forceAtlas2Based;
        this.nodesSolver = new ForceAtlas2BasedRepulsionSolver(this.body, this.physicsBody, options);
        this.edgesSolver = new SpringSolver(this.body, this.physicsBody, options);
        this.gravitySolver = new ForceAtlas2BasedCentralGravitySolver(this.body, this.physicsBody, options);
      } else if (this.options.solver === 'repulsion') {
        options = this.options.repulsion;
        this.nodesSolver = new Repulsion(this.body, this.physicsBody, options);
        this.edgesSolver = new SpringSolver(this.body, this.physicsBody, options);
        this.gravitySolver = new CentralGravitySolver(this.body, this.physicsBody, options);
      } else if (this.options.solver === 'hierarchicalRepulsion') {
        options = this.options.hierarchicalRepulsion;
        this.nodesSolver = new HierarchicalRepulsion(this.body, this.physicsBody, options);
        this.edgesSolver = new HierarchicalSpringSolver(this.body, this.physicsBody, options);
        this.gravitySolver = new CentralGravitySolver(this.body, this.physicsBody, options);
      } else {
        options = this.options.barnesHut;
        this.nodesSolver = new BarnesHutSolver(this.body, this.physicsBody, options);
        this.edgesSolver = new SpringSolver(this.body, this.physicsBody, options);
        this.gravitySolver = new CentralGravitySolver(this.body, this.physicsBody, options);
      }

      this.modelOptions = options;
    }


  }, {
    key: 'initPhysics',
    value: function initPhysics() {
      if (this.physicsEnabled === true && this.options.enabled === true) {
        if (this.options.stabilization.enabled === true) {
          this.stabilize();
        } else {
          this.stabilized = false;
          this.ready = true;
          this.body.emitter.emit('fit', {}, this.layoutFailed); 
          this.startSimulation();
        }
      } else {
        this.ready = true;
        this.body.emitter.emit('fit');
      }
    }


  }, {
    key: 'startSimulation',
    value: function startSimulation() {
      if (this.physicsEnabled === true && this.options.enabled === true) {
        this.stabilized = false;

        this.adaptiveTimestep = false;

        this.body.emitter.emit('_resizeNodes');
        if (this.viewFunction === undefined) {
          this.viewFunction = this.simulationStep.bind(this);
          this.body.emitter.on('initRedraw', this.viewFunction);
          this.body.emitter.emit('_startRendering');
        }
      } else {
        this.body.emitter.emit('_redraw');
      }
    }


  }, {
    key: 'stopSimulation',
    value: function stopSimulation() {
      var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.stabilized = true;
      if (emit === true) {
        this._emitStabilized();
      }
      if (this.viewFunction !== undefined) {
        this.body.emitter.off('initRedraw', this.viewFunction);
        this.viewFunction = undefined;
        if (emit === true) {
          this.body.emitter.emit('_stopRendering');
        }
      }
    }


  }, {
    key: 'simulationStep',
    value: function simulationStep() {
      var startTime = Date.now();
      this.physicsTick();
      var physicsTime = Date.now() - startTime;

      if ((physicsTime < 0.4 * this.simulationInterval || this.runDoubleSpeed === true) && this.stabilized === false) {
        this.physicsTick();

        this.runDoubleSpeed = true;
      }

      if (this.stabilized === true) {
        this.stopSimulation();
      }
    }


  }, {
    key: '_emitStabilized',
    value: function _emitStabilized() {
      var _this2 = this;

      var amountOfIterations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.stabilizationIterations;

      if (this.stabilizationIterations > 1 || this.startedStabilization === true) {
        setTimeout(function () {
          _this2.body.emitter.emit('stabilized', { iterations: amountOfIterations });
          _this2.startedStabilization = false;
          _this2.stabilizationIterations = 0;
        }, 0);
      }
    }


  }, {
    key: 'physicsStep',
    value: function physicsStep() {
      this.gravitySolver.solve();
      this.nodesSolver.solve();
      this.edgesSolver.solve();
      this.moveNodes();
    }


  }, {
    key: 'adjustTimeStep',
    value: function adjustTimeStep() {
      var factor = 1.2; 

      if (this._evaluateStepQuality() === true) {
        this.timestep = factor * this.timestep;
      } else {
        if (this.timestep / factor < this.options.timestep) {
          this.timestep = this.options.timestep;
        } else {
          this.adaptiveCounter = -1; 
          this.timestep = Math.max(this.options.timestep, this.timestep / factor);
        }
      }
    }


  }, {
    key: 'physicsTick',
    value: function physicsTick() {
      this._startStabilizing(); 
      if (this.stabilized === true) return;

      if (this.adaptiveTimestep === true && this.adaptiveTimestepEnabled === true) {
        var doAdaptive = this.adaptiveCounter % this.adaptiveInterval === 0;

        if (doAdaptive) {
          this.timestep = 2 * this.timestep;
          this.physicsStep();
          this.revert(); 

          this.timestep = 0.5 * this.timestep;

          this.physicsStep();
          this.physicsStep();

          this.adjustTimeStep();
        } else {
          this.physicsStep(); 
        }

        this.adaptiveCounter += 1;
      } else {
        this.timestep = this.options.timestep;
        this.physicsStep();
      }

      if (this.stabilized === true) this.revert();
      this.stabilizationIterations++;
    }


  }, {
    key: 'updatePhysicsData',
    value: function updatePhysicsData() {
      this.physicsBody.forces = {};
      this.physicsBody.physicsNodeIndices = [];
      this.physicsBody.physicsEdgeIndices = [];
      var nodes = this.body.nodes;
      var edges = this.body.edges;

      for (var nodeId in nodes) {
        if (nodes.hasOwnProperty(nodeId)) {
          if (nodes[nodeId].options.physics === true) {
            this.physicsBody.physicsNodeIndices.push(nodes[nodeId].id);
          }
        }
      }

      for (var edgeId in edges) {
        if (edges.hasOwnProperty(edgeId)) {
          if (edges[edgeId].options.physics === true) {
            this.physicsBody.physicsEdgeIndices.push(edges[edgeId].id);
          }
        }
      }

      for (var i = 0; i < this.physicsBody.physicsNodeIndices.length; i++) {
        var _nodeId = this.physicsBody.physicsNodeIndices[i];
        this.physicsBody.forces[_nodeId] = { x: 0, y: 0

        };if (this.physicsBody.velocities[_nodeId] === undefined) {
          this.physicsBody.velocities[_nodeId] = { x: 0, y: 0 };
        }
      }

      for (var _nodeId2 in this.physicsBody.velocities) {
        if (nodes[_nodeId2] === undefined) {
          delete this.physicsBody.velocities[_nodeId2];
        }
      }
    }


  }, {
    key: 'revert',
    value: function revert() {
      var nodeIds = (0, _keys2['default'])(this.previousStates);
      var nodes = this.body.nodes;
      var velocities = this.physicsBody.velocities;
      this.referenceState = {};

      for (var i = 0; i < nodeIds.length; i++) {
        var nodeId = nodeIds[i];
        if (nodes[nodeId] !== undefined) {
          if (nodes[nodeId].options.physics === true) {
            this.referenceState[nodeId] = {
              positions: { x: nodes[nodeId].x, y: nodes[nodeId].y }
            };
            velocities[nodeId].x = this.previousStates[nodeId].vx;
            velocities[nodeId].y = this.previousStates[nodeId].vy;
            nodes[nodeId].x = this.previousStates[nodeId].x;
            nodes[nodeId].y = this.previousStates[nodeId].y;
          }
        } else {
          delete this.previousStates[nodeId];
        }
      }
    }


  }, {
    key: '_evaluateStepQuality',
    value: function _evaluateStepQuality() {
      var dx = void 0,
          dy = void 0,
          dpos = void 0;
      var nodes = this.body.nodes;
      var reference = this.referenceState;
      var posThreshold = 0.3;

      for (var nodeId in this.referenceState) {
        if (this.referenceState.hasOwnProperty(nodeId) && nodes[nodeId] !== undefined) {
          dx = nodes[nodeId].x - reference[nodeId].positions.x;
          dy = nodes[nodeId].y - reference[nodeId].positions.y;

          dpos = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

          if (dpos > posThreshold) {
            return false;
          }
        }
      }
      return true;
    }


  }, {
    key: 'moveNodes',
    value: function moveNodes() {
      var nodeIndices = this.physicsBody.physicsNodeIndices;
      var maxNodeVelocity = 0;
      var averageNodeVelocity = 0;

      var velocityAdaptiveThreshold = 5;

      for (var i = 0; i < nodeIndices.length; i++) {
        var nodeId = nodeIndices[i];
        var nodeVelocity = this._performStep(nodeId);
        maxNodeVelocity = Math.max(maxNodeVelocity, nodeVelocity);
        averageNodeVelocity += nodeVelocity;
      }

      this.adaptiveTimestepEnabled = averageNodeVelocity / nodeIndices.length < velocityAdaptiveThreshold;
      this.stabilized = maxNodeVelocity < this.options.minVelocity;
    }


  }, {
    key: 'calculateComponentVelocity',
    value: function calculateComponentVelocity(v, f, m) {
      var df = this.modelOptions.damping * v; 
      var a = (f - df) / m; 

      v += a * this.timestep;

      var maxV = this.options.maxVelocity || 1e9;
      if (Math.abs(v) > maxV) {
        v = v > 0 ? maxV : -maxV;
      }

      return v;
    }


  }, {
    key: '_performStep',
    value: function _performStep(nodeId) {
      var node = this.body.nodes[nodeId];
      var force = this.physicsBody.forces[nodeId];
      var velocity = this.physicsBody.velocities[nodeId];

      this.previousStates[nodeId] = {
        x: node.x,
        y: node.y,
        vx: velocity.x,
        vy: velocity.y
      };

      if (node.options.fixed.x === false) {
        velocity.x = this.calculateComponentVelocity(velocity.x, force.x, node.options.mass);
        node.x += velocity.x * this.timestep;
      } else {
        force.x = 0;
        velocity.x = 0;
      }

      if (node.options.fixed.y === false) {
        velocity.y = this.calculateComponentVelocity(velocity.y, force.y, node.options.mass);
        node.y += velocity.y * this.timestep;
      } else {
        force.y = 0;
        velocity.y = 0;
      }

      var totalVelocity = Math.sqrt(Math.pow(velocity.x, 2) + Math.pow(velocity.y, 2));
      return totalVelocity;
    }


  }, {
    key: '_freezeNodes',
    value: function _freezeNodes() {
      var nodes = this.body.nodes;
      for (var id in nodes) {
        if (nodes.hasOwnProperty(id)) {
          if (nodes[id].x && nodes[id].y) {
            var fixed = nodes[id].options.fixed;
            this.freezeCache[id] = { x: fixed.x, y: fixed.y };
            fixed.x = true;
            fixed.y = true;
          }
        }
      }
    }


  }, {
    key: '_restoreFrozenNodes',
    value: function _restoreFrozenNodes() {
      var nodes = this.body.nodes;
      for (var id in nodes) {
        if (nodes.hasOwnProperty(id)) {
          if (this.freezeCache[id] !== undefined) {
            nodes[id].options.fixed.x = this.freezeCache[id].x;
            nodes[id].options.fixed.y = this.freezeCache[id].y;
          }
        }
      }
      this.freezeCache = {};
    }


  }, {
    key: 'stabilize',
    value: function stabilize() {
      var _this3 = this;

      var iterations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.stabilization.iterations;

      if (typeof iterations !== 'number') {
        iterations = this.options.stabilization.iterations;
        console.log('The stabilize method needs a numeric amount of iterations. Switching to default: ', iterations);
      }

      if (this.physicsBody.physicsNodeIndices.length === 0) {
        this.ready = true;
        return;
      }

      this.adaptiveTimestep =  true && this.options.adaptiveTimestep;

      this.body.emitter.emit('_resizeNodes');

      this.stopSimulation(); 
      this.stabilized = false;

      this.body.emitter.emit('_blockRedraw');
      this.targetIterations = iterations;

      if (this.options.stabilization.onlyDynamicEdges === true) {
        this._freezeNodes();
      }
      this.stabilizationIterations = 0;

      setTimeout(function () {
        return _this3._stabilizationBatch();
      }, 0);
    }


  }, {
    key: '_startStabilizing',
    value: function _startStabilizing() {
      if (this.startedStabilization === true) return false;

      this.body.emitter.emit('startStabilizing');
      this.startedStabilization = true;
      return true;
    }


  }, {
    key: '_stabilizationBatch',
    value: function _stabilizationBatch() {
      var _this4 = this;

      var running = function running() {
        return _this4.stabilized === false && _this4.stabilizationIterations < _this4.targetIterations;
      };

      var sendProgress = function sendProgress() {
        _this4.body.emitter.emit('stabilizationProgress', {
          iterations: _this4.stabilizationIterations,
          total: _this4.targetIterations
        });
      };

      if (this._startStabilizing()) {
        sendProgress(); 
      }

      var count = 0;
      while (running() && count < this.options.stabilization.updateInterval) {
        this.physicsTick();
        count++;
      }

      sendProgress();

      if (running()) {
        setTimeout(this._stabilizationBatch.bind(this), 0);
      } else {
        this._finalizeStabilization();
      }
    }


  }, {
    key: '_finalizeStabilization',
    value: function _finalizeStabilization() {
      this.body.emitter.emit('_allowRedraw');
      if (this.options.stabilization.fit === true) {
        this.body.emitter.emit('fit');
      }

      if (this.options.stabilization.onlyDynamicEdges === true) {
        this._restoreFrozenNodes();
      }

      this.body.emitter.emit('stabilizationIterationsDone');
      this.body.emitter.emit('_requestRedraw');

      if (this.stabilized === true) {
        this._emitStabilized();
      } else {
        this.startSimulation();
      }

      this.ready = true;
    }



  }, {
    key: '_drawForces',
    value: function _drawForces(ctx) {
      for (var i = 0; i < this.physicsBody.physicsNodeIndices.length; i++) {
        var index = this.physicsBody.physicsNodeIndices[i];
        var node = this.body.nodes[index];
        var force = this.physicsBody.forces[index];
        var factor = 20;
        var colorFactor = 0.03;
        var forceSize = Math.sqrt(Math.pow(force.x, 2) + Math.pow(force.x, 2));

        var size = Math.min(Math.max(5, forceSize), 15);
        var arrowSize = 3 * size;

        var color = util.HSVToHex((180 - Math.min(1, Math.max(0, colorFactor * forceSize)) * 180) / 360, 1, 1);

        var point = {
          x: node.x + factor * force.x,
          y: node.y + factor * force.y
        };

        ctx.lineWidth = size;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();

        var angle = Math.atan2(force.y, force.x);
        ctx.fillStyle = color;
        EndPoints.draw(ctx, {
          type: 'arrow',
          point: point,
          angle: angle,
          length: arrowSize
        });
        ctx.fill();
      }
    }
  }]);
  return PhysicsEngine;
}();

exports['default'] = PhysicsEngine;

 }),
 (function(module, exports, __nested_webpack_require_877742__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_877742__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_877742__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RepulsionSolver = function () {
  function RepulsionSolver(body, physicsBody, options) {
    (0, _classCallCheck3["default"])(this, RepulsionSolver);

    this.body = body;
    this.physicsBody = physicsBody;
    this.setOptions(options);
  }



  (0, _createClass3["default"])(RepulsionSolver, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }


  }, {
    key: "solve",
    value: function solve() {
      var dx, dy, distance, fx, fy, repulsingForce, node1, node2;

      var nodes = this.body.nodes;
      var nodeIndices = this.physicsBody.physicsNodeIndices;
      var forces = this.physicsBody.forces;

      var nodeDistance = this.options.nodeDistance;

      var a = -2 / 3 / nodeDistance;
      var b = 4 / 3;

      for (var i = 0; i < nodeIndices.length - 1; i++) {
        node1 = nodes[nodeIndices[i]];
        for (var j = i + 1; j < nodeIndices.length; j++) {
          node2 = nodes[nodeIndices[j]];

          dx = node2.x - node1.x;
          dy = node2.y - node1.y;
          distance = Math.sqrt(dx * dx + dy * dy);

          if (distance === 0) {
            distance = 0.1 * Math.random();
            dx = distance;
          }

          if (distance < 2 * nodeDistance) {
            if (distance < 0.5 * nodeDistance) {
              repulsingForce = 1.0;
            } else {
              repulsingForce = a * distance + b; 
            }
            repulsingForce = repulsingForce / distance;

            fx = dx * repulsingForce;
            fy = dy * repulsingForce;

            forces[node1.id].x -= fx;
            forces[node1.id].y -= fy;
            forces[node2.id].x += fx;
            forces[node2.id].y += fy;
          }
        }
      }
    }
  }]);
  return RepulsionSolver;
}();

exports["default"] = RepulsionSolver;

 }),
 (function(module, exports, __nested_webpack_require_880884__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_880884__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_880884__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HierarchicalRepulsionSolver = function () {
  function HierarchicalRepulsionSolver(body, physicsBody, options) {
    (0, _classCallCheck3["default"])(this, HierarchicalRepulsionSolver);

    this.body = body;
    this.physicsBody = physicsBody;
    this.setOptions(options);
  }



  (0, _createClass3["default"])(HierarchicalRepulsionSolver, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }


  }, {
    key: "solve",
    value: function solve() {
      var dx, dy, distance, fx, fy, repulsingForce, node1, node2, i, j;

      var nodes = this.body.nodes;
      var nodeIndices = this.physicsBody.physicsNodeIndices;
      var forces = this.physicsBody.forces;

      var nodeDistance = this.options.nodeDistance;

      for (i = 0; i < nodeIndices.length - 1; i++) {
        node1 = nodes[nodeIndices[i]];
        for (j = i + 1; j < nodeIndices.length; j++) {
          node2 = nodes[nodeIndices[j]];

          if (node1.level === node2.level) {
            dx = node2.x - node1.x;
            dy = node2.y - node1.y;
            distance = Math.sqrt(dx * dx + dy * dy);

            var steepness = 0.05;
            if (distance < nodeDistance) {
              repulsingForce = -Math.pow(steepness * distance, 2) + Math.pow(steepness * nodeDistance, 2);
            } else {
              repulsingForce = 0;
            }
            if (distance === 0) {
              distance = 0.01;
            } else {
              repulsingForce = repulsingForce / distance;
            }
            fx = dx * repulsingForce;
            fy = dy * repulsingForce;

            forces[node1.id].x -= fx;
            forces[node1.id].y -= fy;
            forces[node2.id].x += fx;
            forces[node2.id].y += fy;
          }
        }
      }
    }
  }]);
  return HierarchicalRepulsionSolver;
}();

exports["default"] = HierarchicalRepulsionSolver;

 }),
 (function(module, exports, __nested_webpack_require_884003__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_884003__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_884003__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SpringSolver = function () {
  function SpringSolver(body, physicsBody, options) {
    (0, _classCallCheck3["default"])(this, SpringSolver);

    this.body = body;
    this.physicsBody = physicsBody;
    this.setOptions(options);
  }



  (0, _createClass3["default"])(SpringSolver, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }


  }, {
    key: "solve",
    value: function solve() {
      var edgeLength = void 0,
          edge = void 0;
      var edgeIndices = this.physicsBody.physicsEdgeIndices;
      var edges = this.body.edges;
      var node1 = void 0,
          node2 = void 0,
          node3 = void 0;

      for (var i = 0; i < edgeIndices.length; i++) {
        edge = edges[edgeIndices[i]];
        if (edge.connected === true && edge.toId !== edge.fromId) {
          if (this.body.nodes[edge.toId] !== undefined && this.body.nodes[edge.fromId] !== undefined) {
            if (edge.edgeType.via !== undefined) {
              edgeLength = edge.options.length === undefined ? this.options.springLength : edge.options.length;
              node1 = edge.to;
              node2 = edge.edgeType.via;
              node3 = edge.from;

              this._calculateSpringForce(node1, node2, 0.5 * edgeLength);
              this._calculateSpringForce(node2, node3, 0.5 * edgeLength);
            } else {
              edgeLength = edge.options.length === undefined ? this.options.springLength * 1.5 : edge.options.length;
              this._calculateSpringForce(edge.from, edge.to, edgeLength);
            }
          }
        }
      }
    }


  }, {
    key: "_calculateSpringForce",
    value: function _calculateSpringForce(node1, node2, edgeLength) {
      var dx = node1.x - node2.x;
      var dy = node1.y - node2.y;
      var distance = Math.max(Math.sqrt(dx * dx + dy * dy), 0.01);

      var springForce = this.options.springConstant * (edgeLength - distance) / distance;

      var fx = dx * springForce;
      var fy = dy * springForce;

      if (this.physicsBody.forces[node1.id] !== undefined) {
        this.physicsBody.forces[node1.id].x += fx;
        this.physicsBody.forces[node1.id].y += fy;
      }

      if (this.physicsBody.forces[node2.id] !== undefined) {
        this.physicsBody.forces[node2.id].x -= fx;
        this.physicsBody.forces[node2.id].y -= fy;
      }
    }
  }]);
  return SpringSolver;
}();

exports["default"] = SpringSolver;

 }),
 (function(module, exports, __nested_webpack_require_888054__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_888054__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_888054__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HierarchicalSpringSolver = function () {
  function HierarchicalSpringSolver(body, physicsBody, options) {
    (0, _classCallCheck3["default"])(this, HierarchicalSpringSolver);

    this.body = body;
    this.physicsBody = physicsBody;
    this.setOptions(options);
  }



  (0, _createClass3["default"])(HierarchicalSpringSolver, [{
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }


  }, {
    key: "solve",
    value: function solve() {
      var edgeLength, edge;
      var dx, dy, fx, fy, springForce, distance;
      var edges = this.body.edges;
      var factor = 0.5;

      var edgeIndices = this.physicsBody.physicsEdgeIndices;
      var nodeIndices = this.physicsBody.physicsNodeIndices;
      var forces = this.physicsBody.forces;

      for (var i = 0; i < nodeIndices.length; i++) {
        var nodeId = nodeIndices[i];
        forces[nodeId].springFx = 0;
        forces[nodeId].springFy = 0;
      }

      for (var _i = 0; _i < edgeIndices.length; _i++) {
        edge = edges[edgeIndices[_i]];
        if (edge.connected === true) {
          edgeLength = edge.options.length === undefined ? this.options.springLength : edge.options.length;

          dx = edge.from.x - edge.to.x;
          dy = edge.from.y - edge.to.y;
          distance = Math.sqrt(dx * dx + dy * dy);
          distance = distance === 0 ? 0.01 : distance;

          springForce = this.options.springConstant * (edgeLength - distance) / distance;

          fx = dx * springForce;
          fy = dy * springForce;

          if (edge.to.level != edge.from.level) {
            if (forces[edge.toId] !== undefined) {
              forces[edge.toId].springFx -= fx;
              forces[edge.toId].springFy -= fy;
            }
            if (forces[edge.fromId] !== undefined) {
              forces[edge.fromId].springFx += fx;
              forces[edge.fromId].springFy += fy;
            }
          } else {
            if (forces[edge.toId] !== undefined) {
              forces[edge.toId].x -= factor * fx;
              forces[edge.toId].y -= factor * fy;
            }
            if (forces[edge.fromId] !== undefined) {
              forces[edge.fromId].x += factor * fx;
              forces[edge.fromId].y += factor * fy;
            }
          }
        }
      }

      springForce = 1;
      var springFx, springFy;
      for (var _i2 = 0; _i2 < nodeIndices.length; _i2++) {
        var _nodeId = nodeIndices[_i2];
        springFx = Math.min(springForce, Math.max(-springForce, forces[_nodeId].springFx));
        springFy = Math.min(springForce, Math.max(-springForce, forces[_nodeId].springFy));

        forces[_nodeId].x += springFx;
        forces[_nodeId].y += springFy;
      }

      var totalFx = 0;
      var totalFy = 0;
      for (var _i3 = 0; _i3 < nodeIndices.length; _i3++) {
        var _nodeId2 = nodeIndices[_i3];
        totalFx += forces[_nodeId2].x;
        totalFy += forces[_nodeId2].y;
      }
      var correctionFx = totalFx / nodeIndices.length;
      var correctionFy = totalFy / nodeIndices.length;

      for (var _i4 = 0; _i4 < nodeIndices.length; _i4++) {
        var _nodeId3 = nodeIndices[_i4];
        forces[_nodeId3].x -= correctionFx;
        forces[_nodeId3].y -= correctionFy;
      }
    }
  }]);
  return HierarchicalSpringSolver;
}();

exports["default"] = HierarchicalSpringSolver;

 }),
 (function(module, exports, __nested_webpack_require_892574__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_892574__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_892574__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_892574__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_892574__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_892574__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _BarnesHutSolver2 = __nested_webpack_require_892574__(81);

var _BarnesHutSolver3 = _interopRequireDefault(_BarnesHutSolver2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ForceAtlas2BasedRepulsionSolver = function (_BarnesHutSolver) {
  (0, _inherits3['default'])(ForceAtlas2BasedRepulsionSolver, _BarnesHutSolver);

  function ForceAtlas2BasedRepulsionSolver(body, physicsBody, options) {
    (0, _classCallCheck3['default'])(this, ForceAtlas2BasedRepulsionSolver);
    return (0, _possibleConstructorReturn3['default'])(this, (ForceAtlas2BasedRepulsionSolver.__proto__ || (0, _getPrototypeOf2['default'])(ForceAtlas2BasedRepulsionSolver)).call(this, body, physicsBody, options));
  }



  (0, _createClass3['default'])(ForceAtlas2BasedRepulsionSolver, [{
    key: '_calculateForces',
    value: function _calculateForces(distance, dx, dy, node, parentBranch) {
      if (distance === 0) {
        distance = 0.1 * Math.random();
        dx = distance;
      }

      if (this.overlapAvoidanceFactor < 1 && node.shape.radius) {
        distance = Math.max(0.1 + this.overlapAvoidanceFactor * node.shape.radius, distance - node.shape.radius);
      }

      var degree = node.edges.length + 1;
      var gravityForce = this.options.gravitationalConstant * parentBranch.mass * node.options.mass * degree / Math.pow(distance, 2);
      var fx = dx * gravityForce;
      var fy = dy * gravityForce;

      this.physicsBody.forces[node.id].x += fx;
      this.physicsBody.forces[node.id].y += fy;
    }
  }]);
  return ForceAtlas2BasedRepulsionSolver;
}(_BarnesHutSolver3['default']);

exports['default'] = ForceAtlas2BasedRepulsionSolver;

 }),
 (function(module, exports, __nested_webpack_require_895653__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_895653__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_895653__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_895653__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_895653__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_895653__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _CentralGravitySolver2 = __nested_webpack_require_895653__(82);

var _CentralGravitySolver3 = _interopRequireDefault(_CentralGravitySolver2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ForceAtlas2BasedCentralGravitySolver = function (_CentralGravitySolver) {
  (0, _inherits3['default'])(ForceAtlas2BasedCentralGravitySolver, _CentralGravitySolver);

  function ForceAtlas2BasedCentralGravitySolver(body, physicsBody, options) {
    (0, _classCallCheck3['default'])(this, ForceAtlas2BasedCentralGravitySolver);
    return (0, _possibleConstructorReturn3['default'])(this, (ForceAtlas2BasedCentralGravitySolver.__proto__ || (0, _getPrototypeOf2['default'])(ForceAtlas2BasedCentralGravitySolver)).call(this, body, physicsBody, options));
  }



  (0, _createClass3['default'])(ForceAtlas2BasedCentralGravitySolver, [{
    key: '_calculateForces',
    value: function _calculateForces(distance, dx, dy, forces, node) {
      if (distance > 0) {
        var degree = node.edges.length + 1;
        var gravityForce = this.options.centralGravity * degree * node.options.mass;
        forces[node.id].x = dx * gravityForce;
        forces[node.id].y = dy * gravityForce;
      }
    }
  }]);
  return ForceAtlas2BasedCentralGravitySolver;
}(_CentralGravitySolver3['default']);

exports['default'] = ForceAtlas2BasedCentralGravitySolver;

 }),
 (function(module, exports, __nested_webpack_require_898211__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __nested_webpack_require_898211__(9);

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __nested_webpack_require_898211__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __nested_webpack_require_898211__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_898211__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_898211__(2);
var NetworkUtil = __nested_webpack_require_898211__(57)['default'];
var Cluster = __nested_webpack_require_898211__(179)['default'];
var Edge = __nested_webpack_require_898211__(55)['default']; 
var Node = __nested_webpack_require_898211__(34)['default']; 


var ClusterEngine = function () {
  function ClusterEngine(body) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, ClusterEngine);

    this.body = body;
    this.clusteredNodes = {}; 
    this.clusteredEdges = {}; 

    this.options = {};
    this.defaultOptions = {};
    util.extend(this.options, this.defaultOptions);

    this.body.emitter.on('_resetData', function () {
      _this.clusteredNodes = {};
      _this.clusteredEdges = {};
    });
  }



  (0, _createClass3['default'])(ClusterEngine, [{
    key: 'clusterByHubsize',
    value: function clusterByHubsize(hubsize, options) {
      if (hubsize === undefined) {
        hubsize = this._getHubSize();
      } else if ((typeof hubsize === 'undefined' ? 'undefined' : (0, _typeof3['default'])(hubsize)) === 'object') {
        options = this._checkOptions(hubsize);
        hubsize = this._getHubSize();
      }

      var nodesToCluster = [];
      for (var i = 0; i < this.body.nodeIndices.length; i++) {
        var node = this.body.nodes[this.body.nodeIndices[i]];
        if (node.edges.length >= hubsize) {
          nodesToCluster.push(node.id);
        }
      }

      for (var _i = 0; _i < nodesToCluster.length; _i++) {
        this.clusterByConnection(nodesToCluster[_i], options, true);
      }

      this.body.emitter.emit('_dataChanged');
    }


  }, {
    key: 'cluster',
    value: function cluster() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var refreshData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (options.joinCondition === undefined) {
        throw new Error('Cannot call clusterByNodeData without a joinCondition function in the options.');
      }

      options = this._checkOptions(options);

      var childNodesObj = {};
      var childEdgesObj = {};

      util.forEach(this.body.nodes, function (node, nodeId) {
        if (node.options && options.joinCondition(node.options) === true) {
          childNodesObj[nodeId] = node;

          util.forEach(node.edges, function (edge) {
            if (_this2.clusteredEdges[edge.id] === undefined) {
              childEdgesObj[edge.id] = edge;
            }
          });
        }
      });

      this._cluster(childNodesObj, childEdgesObj, options, refreshData);
    }


  }, {
    key: 'clusterByEdgeCount',
    value: function clusterByEdgeCount(edgeCount, options) {
      var _this3 = this;

      var refreshData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      options = this._checkOptions(options);
      var clusters = [];
      var usedNodes = {};
      var edge = void 0,
          edges = void 0,
          relevantEdgeCount = void 0;

      var _loop = function _loop(i) {
        var childNodesObj = {};
        var childEdgesObj = {};
        var nodeId = _this3.body.nodeIndices[i];
        var node = _this3.body.nodes[nodeId];

        if (usedNodes[nodeId] === undefined) {
          relevantEdgeCount = 0;
          edges = [];
          for (var j = 0; j < node.edges.length; j++) {
            edge = node.edges[j];
            if (_this3.clusteredEdges[edge.id] === undefined) {
              if (edge.toId !== edge.fromId) {
                relevantEdgeCount++;
              }
              edges.push(edge);
            }
          }

          if (relevantEdgeCount === edgeCount) {
            checkJoinCondition = function checkJoinCondition(node) {
              if (options.joinCondition === undefined || options.joinCondition === null) {
                return true;
              }

              var clonedOptions = NetworkUtil.cloneOptions(node);
              return options.joinCondition(clonedOptions);
            };

            var gatheringSuccessful = true;
            for (var _j = 0; _j < edges.length; _j++) {
              edge = edges[_j];
              var childNodeId = _this3._getConnectedId(edge, nodeId);
              if (checkJoinCondition(node)) {
                childEdgesObj[edge.id] = edge;
                childNodesObj[nodeId] = node;
                childNodesObj[childNodeId] = _this3.body.nodes[childNodeId];
                usedNodes[nodeId] = true;
              } else {
                gatheringSuccessful = false;
                break;
              }
            }

            if ((0, _keys2['default'])(childNodesObj).length > 0 && (0, _keys2['default'])(childEdgesObj).length > 0 && gatheringSuccessful === true) {
              findClusterData = function findClusterData() {
                for (var n = 0; n < clusters.length; ++n) {
                  for (var m in childNodesObj) {
                    if (clusters[n].nodes[m] !== undefined) {
                      return clusters[n];
                    }
                  }
                }

                return undefined;
              };



              foundCluster = findClusterData();

              if (foundCluster !== undefined) {
                for (var m in childNodesObj) {
                  if (foundCluster.nodes[m] === undefined) {
                    foundCluster.nodes[m] = childNodesObj[m];
                  }
                }

                for (var _m in childEdgesObj) {
                  if (foundCluster.edges[_m] === undefined) {
                    foundCluster.edges[_m] = childEdgesObj[_m];
                  }
                }
              } else {
                clusters.push({ nodes: childNodesObj, edges: childEdgesObj });
              }
            }
          }
        }
      };

      for (var i = 0; i < this.body.nodeIndices.length; i++) {
        var checkJoinCondition;
        var findClusterData;
        var foundCluster;

        _loop(i);
      }

      for (var i = 0; i < clusters.length; i++) {
        this._cluster(clusters[i].nodes, clusters[i].edges, options, false);
      }

      if (refreshData === true) {
        this.body.emitter.emit('_dataChanged');
      }
    }


  }, {
    key: 'clusterOutliers',
    value: function clusterOutliers(options) {
      var refreshData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.clusterByEdgeCount(1, options, refreshData);
    }


  }, {
    key: 'clusterBridges',
    value: function clusterBridges(options) {
      var refreshData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.clusterByEdgeCount(2, options, refreshData);
    }


  }, {
    key: 'clusterByConnection',
    value: function clusterByConnection(nodeId, options) {
      var refreshData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (nodeId === undefined) {
        throw new Error('No nodeId supplied to clusterByConnection!');
      }
      if (this.body.nodes[nodeId] === undefined) {
        throw new Error('The nodeId given to clusterByConnection does not exist!');
      }

      var node = this.body.nodes[nodeId];
      options = this._checkOptions(options, node);
      if (options.clusterNodeProperties.x === undefined) {
        options.clusterNodeProperties.x = node.x;
      }
      if (options.clusterNodeProperties.y === undefined) {
        options.clusterNodeProperties.y = node.y;
      }
      if (options.clusterNodeProperties.fixed === undefined) {
        options.clusterNodeProperties.fixed = {};
        options.clusterNodeProperties.fixed.x = node.options.fixed.x;
        options.clusterNodeProperties.fixed.y = node.options.fixed.y;
      }

      var childNodesObj = {};
      var childEdgesObj = {};
      var parentNodeId = node.id;
      var parentClonedOptions = NetworkUtil.cloneOptions(node);
      childNodesObj[parentNodeId] = node;

      for (var i = 0; i < node.edges.length; i++) {
        var edge = node.edges[i];
        if (this.clusteredEdges[edge.id] === undefined) {
          var childNodeId = this._getConnectedId(edge, parentNodeId);

          if (this.clusteredNodes[childNodeId] === undefined) {
            if (childNodeId !== parentNodeId) {
              if (options.joinCondition === undefined) {
                childEdgesObj[edge.id] = edge;
                childNodesObj[childNodeId] = this.body.nodes[childNodeId];
              } else {
                var childClonedOptions = NetworkUtil.cloneOptions(this.body.nodes[childNodeId]);
                if (options.joinCondition(parentClonedOptions, childClonedOptions) === true) {
                  childEdgesObj[edge.id] = edge;
                  childNodesObj[childNodeId] = this.body.nodes[childNodeId];
                }
              }
            } else {
              childEdgesObj[edge.id] = edge;
            }
          }
        }
      }
      var childNodeIDs = (0, _keys2['default'])(childNodesObj).map(function (childNode) {
        return childNodesObj[childNode].id;
      });

      for (childNode in childNodesObj) {
        if (!childNodesObj.hasOwnProperty(childNode)) continue;

        var childNode = childNodesObj[childNode];
        for (var y = 0; y < childNode.edges.length; y++) {
          var childEdge = childNode.edges[y];
          if (childNodeIDs.indexOf(this._getConnectedId(childEdge, childNode.id)) > -1) {
            childEdgesObj[childEdge.id] = childEdge;
          }
        }
      }
      this._cluster(childNodesObj, childEdgesObj, options, refreshData);
    }


  }, {
    key: '_createClusterEdges',
    value: function _createClusterEdges(childNodesObj, childEdgesObj, clusterNodeProperties, clusterEdgeProperties) {
      var edge = void 0,
          childNodeId = void 0,
          childNode = void 0,
          toId = void 0,
          fromId = void 0,
          otherNodeId = void 0;

      var childKeys = (0, _keys2['default'])(childNodesObj);
      var createEdges = [];
      for (var i = 0; i < childKeys.length; i++) {
        childNodeId = childKeys[i];
        childNode = childNodesObj[childNodeId];

        for (var j = 0; j < childNode.edges.length; j++) {
          edge = childNode.edges[j];
          if (this.clusteredEdges[edge.id] === undefined) {
            if (edge.toId == edge.fromId) {
              childEdgesObj[edge.id] = edge;
            } else {
              if (edge.toId == childNodeId) {
                toId = clusterNodeProperties.id;
                fromId = edge.fromId;
                otherNodeId = fromId;
              } else {
                toId = edge.toId;
                fromId = clusterNodeProperties.id;
                otherNodeId = toId;
              }
            }

            if (childNodesObj[otherNodeId] === undefined) {
              createEdges.push({ edge: edge, fromId: fromId, toId: toId });
            }
          }
        }
      }

      var newEdges = [];

      var getNewEdge = function getNewEdge(createdEdge) {
        for (var _j2 = 0; _j2 < newEdges.length; _j2++) {
          var newEdge = newEdges[_j2];

          var matchToDirection = createdEdge.fromId === newEdge.fromId && createdEdge.toId === newEdge.toId;
          var matchFromDirection = createdEdge.fromId === newEdge.toId && createdEdge.toId === newEdge.fromId;

          if (matchToDirection || matchFromDirection) {
            return newEdge;
          }
        }

        return null;
      };

      for (var _j3 = 0; _j3 < createEdges.length; _j3++) {
        var createdEdge = createEdges[_j3];
        var _edge = createdEdge.edge;
        var newEdge = getNewEdge(createdEdge);

        if (newEdge === null) {
          newEdge = this._createClusteredEdge(createdEdge.fromId, createdEdge.toId, _edge, clusterEdgeProperties);

          newEdges.push(newEdge);
        } else {
          newEdge.clusteringEdgeReplacingIds.push(_edge.id);
        }

        this.body.edges[_edge.id].edgeReplacedById = newEdge.id;

        this._backupEdgeOptions(_edge);
        _edge.setOptions({ physics: false });
      }
    }


  }, {
    key: '_checkOptions',
    value: function _checkOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.clusterEdgeProperties === undefined) {
        options.clusterEdgeProperties = {};
      }
      if (options.clusterNodeProperties === undefined) {
        options.clusterNodeProperties = {};
      }

      return options;
    }


  }, {
    key: '_cluster',
    value: function _cluster(childNodesObj, childEdgesObj, options) {
      var refreshData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var tmpNodesToRemove = [];
      for (var _nodeId in childNodesObj) {
        if (childNodesObj.hasOwnProperty(_nodeId)) {
          if (this.clusteredNodes[_nodeId] !== undefined) {
            tmpNodesToRemove.push(_nodeId);
          }
        }
      }

      for (var n = 0; n < tmpNodesToRemove.length; ++n) {
        delete childNodesObj[tmpNodesToRemove[n]];
      }

      if ((0, _keys2['default'])(childNodesObj).length == 0) {
        return;
      }

      if ((0, _keys2['default'])(childNodesObj).length == 1 && options.clusterNodeProperties.allowSingleNodeCluster != true) {
        return;
      }

      var clusterNodeProperties = util.deepExtend({}, options.clusterNodeProperties);

      if (options.processProperties !== undefined) {
        var childNodesOptions = [];
        for (var _nodeId2 in childNodesObj) {
          if (childNodesObj.hasOwnProperty(_nodeId2)) {
            var clonedOptions = NetworkUtil.cloneOptions(childNodesObj[_nodeId2]);
            childNodesOptions.push(clonedOptions);
          }
        }

        var childEdgesOptions = [];
        for (var edgeId in childEdgesObj) {
          if (childEdgesObj.hasOwnProperty(edgeId)) {
            if (edgeId.substr(0, 12) !== 'clusterEdge:') {
              var _clonedOptions = NetworkUtil.cloneOptions(childEdgesObj[edgeId], 'edge');
              childEdgesOptions.push(_clonedOptions);
            }
          }
        }

        clusterNodeProperties = options.processProperties(clusterNodeProperties, childNodesOptions, childEdgesOptions);
        if (!clusterNodeProperties) {
          throw new Error('The processProperties function does not return properties!');
        }
      }

      if (clusterNodeProperties.id === undefined) {
        clusterNodeProperties.id = 'cluster:' + util.randomUUID();
      }
      var clusterId = clusterNodeProperties.id;

      if (clusterNodeProperties.label === undefined) {
        clusterNodeProperties.label = 'cluster';
      }

      var pos = undefined;
      if (clusterNodeProperties.x === undefined) {
        pos = this._getClusterPosition(childNodesObj);
        clusterNodeProperties.x = pos.x;
      }
      if (clusterNodeProperties.y === undefined) {
        if (pos === undefined) {
          pos = this._getClusterPosition(childNodesObj);
        }
        clusterNodeProperties.y = pos.y;
      }

      clusterNodeProperties.id = clusterId;

      var clusterNode = this.body.functions.createNode(clusterNodeProperties, Cluster);
      clusterNode.containedNodes = childNodesObj;
      clusterNode.containedEdges = childEdgesObj;
      clusterNode.clusterEdgeProperties = options.clusterEdgeProperties;

      this.body.nodes[clusterNodeProperties.id] = clusterNode;

      this._clusterEdges(childNodesObj, childEdgesObj, clusterNodeProperties, options.clusterEdgeProperties);

      clusterNodeProperties.id = undefined;

      if (refreshData === true) {
        this.body.emitter.emit('_dataChanged');
      }
    }


  }, {
    key: '_backupEdgeOptions',
    value: function _backupEdgeOptions(edge) {
      if (this.clusteredEdges[edge.id] === undefined) {
        this.clusteredEdges[edge.id] = { physics: edge.options.physics };
      }
    }


  }, {
    key: '_restoreEdge',
    value: function _restoreEdge(edge) {
      var originalOptions = this.clusteredEdges[edge.id];
      if (originalOptions !== undefined) {
        edge.setOptions({ physics: originalOptions.physics });
        delete this.clusteredEdges[edge.id];
      }
    }


  }, {
    key: 'isCluster',
    value: function isCluster(nodeId) {
      if (this.body.nodes[nodeId] !== undefined) {
        return this.body.nodes[nodeId].isCluster === true;
      } else {
        console.log('Node does not exist.');
        return false;
      }
    }


  }, {
    key: '_getClusterPosition',
    value: function _getClusterPosition(childNodesObj) {
      var childKeys = (0, _keys2['default'])(childNodesObj);
      var minX = childNodesObj[childKeys[0]].x;
      var maxX = childNodesObj[childKeys[0]].x;
      var minY = childNodesObj[childKeys[0]].y;
      var maxY = childNodesObj[childKeys[0]].y;
      var node = void 0;
      for (var i = 1; i < childKeys.length; i++) {
        node = childNodesObj[childKeys[i]];
        minX = node.x < minX ? node.x : minX;
        maxX = node.x > maxX ? node.x : maxX;
        minY = node.y < minY ? node.y : minY;
        maxY = node.y > maxY ? node.y : maxY;
      }

      return { x: 0.5 * (minX + maxX), y: 0.5 * (minY + maxY) };
    }


  }, {
    key: 'openCluster',
    value: function openCluster(clusterNodeId, options) {
      var refreshData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (clusterNodeId === undefined) {
        throw new Error('No clusterNodeId supplied to openCluster.');
      }

      var clusterNode = this.body.nodes[clusterNodeId];

      if (clusterNode === undefined) {
        throw new Error('The clusterNodeId supplied to openCluster does not exist.');
      }
      if (clusterNode.isCluster !== true || clusterNode.containedNodes === undefined || clusterNode.containedEdges === undefined) {
        throw new Error('The node:' + clusterNodeId + ' is not a valid cluster.');
      }

      var stack = this.findNode(clusterNodeId);
      var parentIndex = stack.indexOf(clusterNodeId) - 1;
      if (parentIndex >= 0) {
        var parentClusterNodeId = stack[parentIndex];
        var parentClusterNode = this.body.nodes[parentClusterNodeId];

        parentClusterNode._openChildCluster(clusterNodeId);

        delete this.body.nodes[clusterNodeId];
        if (refreshData === true) {
          this.body.emitter.emit('_dataChanged');
        }

        return;
      }

      var containedNodes = clusterNode.containedNodes;
      var containedEdges = clusterNode.containedEdges;

      if (options !== undefined && options.releaseFunction !== undefined && typeof options.releaseFunction === 'function') {
        var positions = {};
        var clusterPosition = { x: clusterNode.x, y: clusterNode.y };
        for (var _nodeId3 in containedNodes) {
          if (containedNodes.hasOwnProperty(_nodeId3)) {
            var containedNode = this.body.nodes[_nodeId3];
            positions[_nodeId3] = { x: containedNode.x, y: containedNode.y };
          }
        }
        var newPositions = options.releaseFunction(clusterPosition, positions);

        for (var _nodeId4 in containedNodes) {
          if (containedNodes.hasOwnProperty(_nodeId4)) {
            var _containedNode = this.body.nodes[_nodeId4];
            if (newPositions[_nodeId4] !== undefined) {
              _containedNode.x = newPositions[_nodeId4].x === undefined ? clusterNode.x : newPositions[_nodeId4].x;
              _containedNode.y = newPositions[_nodeId4].y === undefined ? clusterNode.y : newPositions[_nodeId4].y;
            }
          }
        }
      } else {
        util.forEach(containedNodes, function (containedNode) {
          if (containedNode.options.fixed.x === false) {
            containedNode.x = clusterNode.x;
          }
          if (containedNode.options.fixed.y === false) {
            containedNode.y = clusterNode.y;
          }
        });
      }

      for (var _nodeId5 in containedNodes) {
        if (containedNodes.hasOwnProperty(_nodeId5)) {
          var _containedNode2 = this.body.nodes[_nodeId5];

          _containedNode2.vx = clusterNode.vx;
          _containedNode2.vy = clusterNode.vy;

          _containedNode2.setOptions({ physics: true });

          delete this.clusteredNodes[_nodeId5];
        }
      }

      var edgesToBeDeleted = [];
      for (var i = 0; i < clusterNode.edges.length; i++) {
        edgesToBeDeleted.push(clusterNode.edges[i]);
      }

      for (var _i2 = 0; _i2 < edgesToBeDeleted.length; _i2++) {
        var edge = edgesToBeDeleted[_i2];
        var otherNodeId = this._getConnectedId(edge, clusterNodeId);
        var otherNode = this.clusteredNodes[otherNodeId];

        for (var j = 0; j < edge.clusteringEdgeReplacingIds.length; j++) {
          var transferId = edge.clusteringEdgeReplacingIds[j];
          var transferEdge = this.body.edges[transferId];
          if (transferEdge === undefined) continue;

          if (otherNode !== undefined) {
            var otherCluster = this.body.nodes[otherNode.clusterId];
            otherCluster.containedEdges[transferEdge.id] = transferEdge;

            delete containedEdges[transferEdge.id];

            var fromId = transferEdge.fromId;
            var toId = transferEdge.toId;
            if (transferEdge.toId == otherNodeId) {
              toId = otherNode.clusterId;
            } else {
              fromId = otherNode.clusterId;
            }

            this._createClusteredEdge(fromId, toId, transferEdge, otherCluster.clusterEdgeProperties, { hidden: false, physics: true });
          } else {
            this._restoreEdge(transferEdge);
          }
        }

        edge.remove();
      }

      for (var edgeId in containedEdges) {
        if (containedEdges.hasOwnProperty(edgeId)) {
          this._restoreEdge(containedEdges[edgeId]);
        }
      }

      delete this.body.nodes[clusterNodeId];

      if (refreshData === true) {
        this.body.emitter.emit('_dataChanged');
      }
    }


  }, {
    key: 'getNodesInCluster',
    value: function getNodesInCluster(clusterId) {
      var nodesArray = [];
      if (this.isCluster(clusterId) === true) {
        var containedNodes = this.body.nodes[clusterId].containedNodes;
        for (var _nodeId6 in containedNodes) {
          if (containedNodes.hasOwnProperty(_nodeId6)) {
            nodesArray.push(this.body.nodes[_nodeId6].id);
          }
        }
      }

      return nodesArray;
    }


  }, {
    key: 'findNode',
    value: function findNode(nodeId) {
      var stack = [];
      var max = 100;
      var counter = 0;
      var node = void 0;

      while (this.clusteredNodes[nodeId] !== undefined && counter < max) {
        node = this.body.nodes[nodeId];
        if (node === undefined) return [];
        stack.push(node.id);

        nodeId = this.clusteredNodes[nodeId].clusterId;
        counter++;
      }

      node = this.body.nodes[nodeId];
      if (node === undefined) return [];
      stack.push(node.id);

      stack.reverse();
      return stack;
    }


  }, {
    key: 'updateClusteredNode',
    value: function updateClusteredNode(clusteredNodeId, newOptions) {
      if (clusteredNodeId === undefined) {
        throw new Error('No clusteredNodeId supplied to updateClusteredNode.');
      }
      if (newOptions === undefined) {
        throw new Error('No newOptions supplied to updateClusteredNode.');
      }
      if (this.body.nodes[clusteredNodeId] === undefined) {
        throw new Error('The clusteredNodeId supplied to updateClusteredNode does not exist.');
      }

      this.body.nodes[clusteredNodeId].setOptions(newOptions);
      this.body.emitter.emit('_dataChanged');
    }


  }, {
    key: 'updateEdge',
    value: function updateEdge(startEdgeId, newOptions) {
      if (startEdgeId === undefined) {
        throw new Error('No startEdgeId supplied to updateEdge.');
      }
      if (newOptions === undefined) {
        throw new Error('No newOptions supplied to updateEdge.');
      }
      if (this.body.edges[startEdgeId] === undefined) {
        throw new Error('The startEdgeId supplied to updateEdge does not exist.');
      }

      var allEdgeIds = this.getClusteredEdges(startEdgeId);
      for (var i = 0; i < allEdgeIds.length; i++) {
        var edge = this.body.edges[allEdgeIds[i]];
        edge.setOptions(newOptions);
      }
      this.body.emitter.emit('_dataChanged');
    }


  }, {
    key: 'getClusteredEdges',
    value: function getClusteredEdges(edgeId) {
      var stack = [];
      var max = 100;
      var counter = 0;

      while (edgeId !== undefined && this.body.edges[edgeId] !== undefined && counter < max) {
        stack.push(this.body.edges[edgeId].id);
        edgeId = this.body.edges[edgeId].edgeReplacedById;
        counter++;
      }
      stack.reverse();
      return stack;
    }


  }, {
    key: 'getBaseEdge',
    value: function getBaseEdge(clusteredEdgeId) {
      return this.getBaseEdges(clusteredEdgeId)[0];
    }


  }, {
    key: 'getBaseEdges',
    value: function getBaseEdges(clusteredEdgeId) {
      var IdsToHandle = [clusteredEdgeId];
      var doneIds = [];
      var foundIds = [];
      var max = 100;
      var counter = 0;

      while (IdsToHandle.length > 0 && counter < max) {
        var nextId = IdsToHandle.pop();
        if (nextId === undefined) continue; 
        var nextEdge = this.body.edges[nextId];
        if (nextEdge === undefined) continue;
        counter++;

        var replacingIds = nextEdge.clusteringEdgeReplacingIds;
        if (replacingIds === undefined) {
          foundIds.push(nextId);
        } else {
          for (var i = 0; i < replacingIds.length; ++i) {
            var replacingId = replacingIds[i];

            if (IdsToHandle.indexOf(replacingIds) !== -1 || doneIds.indexOf(replacingIds) !== -1) {
              continue;
            }

            IdsToHandle.push(replacingId);
          }
        }

        doneIds.push(nextId);
      }

      return foundIds;
    }


  }, {
    key: '_getConnectedId',
    value: function _getConnectedId(edge, nodeId) {
      if (edge.toId != nodeId) {
        return edge.toId;
      } else if (edge.fromId != nodeId) {
        return edge.fromId;
      } else {
        return edge.fromId;
      }
    }


  }, {
    key: '_getHubSize',
    value: function _getHubSize() {
      var average = 0;
      var averageSquared = 0;
      var hubCounter = 0;
      var largestHub = 0;

      for (var i = 0; i < this.body.nodeIndices.length; i++) {
        var _node = this.body.nodes[this.body.nodeIndices[i]];
        if (_node.edges.length > largestHub) {
          largestHub = _node.edges.length;
        }
        average += _node.edges.length;
        averageSquared += Math.pow(_node.edges.length, 2);
        hubCounter += 1;
      }
      average = average / hubCounter;
      averageSquared = averageSquared / hubCounter;

      var variance = averageSquared - Math.pow(average, 2);
      var standardDeviation = Math.sqrt(variance);

      var hubThreshold = Math.floor(average + 2 * standardDeviation);

      if (hubThreshold > largestHub) {
        hubThreshold = largestHub;
      }

      return hubThreshold;
    }


  }, {
    key: '_createClusteredEdge',
    value: function _createClusteredEdge(fromId, toId, baseEdge, clusterEdgeProperties, extraOptions) {
      var clonedOptions = NetworkUtil.cloneOptions(baseEdge, 'edge');
      util.deepExtend(clonedOptions, clusterEdgeProperties);

      clonedOptions.from = fromId;
      clonedOptions.to = toId;
      clonedOptions.id = 'clusterEdge:' + util.randomUUID();

      if (extraOptions !== undefined) {
        util.deepExtend(clonedOptions, extraOptions);
      }

      var newEdge = this.body.functions.createEdge(clonedOptions);
      newEdge.clusteringEdgeReplacingIds = [baseEdge.id];
      newEdge.connect();

      this.body.edges[newEdge.id] = newEdge;

      return newEdge;
    }


  }, {
    key: '_clusterEdges',
    value: function _clusterEdges(childNodes, childEdges, clusterNode, clusterEdgeProperties) {
      if (childEdges instanceof Edge) {
        var edge = childEdges;
        var obj = {};
        obj[edge.id] = edge;
        childEdges = obj;
      }

      if (childNodes instanceof Node) {
        var _node2 = childNodes;
        var _obj = {};
        _obj[_node2.id] = _node2;
        childNodes = _obj;
      }

      if (clusterNode === undefined || clusterNode === null) {
        throw new Error('_clusterEdges: parameter clusterNode required');
      }

      if (clusterEdgeProperties === undefined) {
        clusterEdgeProperties = clusterNode.clusterEdgeProperties;
      }

      this._createClusterEdges(childNodes, childEdges, clusterNode, clusterEdgeProperties);

      for (var edgeId in childEdges) {
        if (childEdges.hasOwnProperty(edgeId)) {
          if (this.body.edges[edgeId] !== undefined) {
            var _edge2 = this.body.edges[edgeId];
            this._backupEdgeOptions(_edge2);
            _edge2.setOptions({ physics: false });
          }
        }
      }

      for (var _nodeId7 in childNodes) {
        if (childNodes.hasOwnProperty(_nodeId7)) {
          this.clusteredNodes[_nodeId7] = {
            clusterId: clusterNode.id,
            node: this.body.nodes[_nodeId7]
          };
          this.body.nodes[_nodeId7].setOptions({ physics: false });
        }
      }
    }


  }, {
    key: '_getClusterNodeForNode',
    value: function _getClusterNodeForNode(nodeId) {
      if (nodeId === undefined) return undefined;
      var clusteredNode = this.clusteredNodes[nodeId];

      if (clusteredNode === undefined) return undefined;
      var clusterId = clusteredNode.clusterId;
      if (clusterId === undefined) return undefined;

      return this.body.nodes[clusterId];
    }


  }, {
    key: '_filter',
    value: function _filter(arr, callback) {
      var ret = [];

      util.forEach(arr, function (item) {
        if (callback(item)) {
          ret.push(item);
        }
      });

      return ret;
    }


  }, {
    key: '_updateState',
    value: function _updateState() {
      var _this4 = this;

      var nodeId = void 0;
      var deletedNodeIds = [];
      var deletedEdgeIds = {};

      var eachClusterNode = function eachClusterNode(callback) {
        util.forEach(_this4.body.nodes, function (node) {
          if (node.isCluster === true) {
            callback(node);
          }
        });
      };


      for (nodeId in this.clusteredNodes) {
        if (!this.clusteredNodes.hasOwnProperty(nodeId)) continue;
        var _node3 = this.body.nodes[nodeId];

        if (_node3 === undefined) {
          deletedNodeIds.push(nodeId);
        }
      }

      eachClusterNode(function (clusterNode) {
        for (var n = 0; n < deletedNodeIds.length; n++) {
          delete clusterNode.containedNodes[deletedNodeIds[n]];
        }
      });

      for (var n = 0; n < deletedNodeIds.length; n++) {
        delete this.clusteredNodes[deletedNodeIds[n]];
      }


      util.forEach(this.clusteredEdges, function (edgeId) {
        var edge = _this4.body.edges[edgeId];
        if (edge === undefined || !edge.endPointsValid()) {
          deletedEdgeIds[edgeId] = edgeId;
        }
      });

      eachClusterNode(function (clusterNode) {
        util.forEach(clusterNode.containedEdges, function (edge, edgeId) {
          if (!edge.endPointsValid() && !deletedEdgeIds[edgeId]) {
            deletedEdgeIds[edgeId] = edgeId;
          }
        });
      });

      util.forEach(this.body.edges, function (edge, edgeId) {
        var isValid = true;
        var replacedIds = edge.clusteringEdgeReplacingIds;
        if (replacedIds !== undefined) {
          var numValid = 0;

          util.forEach(replacedIds, function (containedEdgeId) {
            var containedEdge = _this4.body.edges[containedEdgeId];

            if (containedEdge !== undefined && containedEdge.endPointsValid()) {
              numValid += 1;
            }
          });

          isValid = numValid > 0;
        }

        if (!edge.endPointsValid() || !isValid) {
          deletedEdgeIds[edgeId] = edgeId;
        }
      });

      eachClusterNode(function (clusterNode) {
        util.forEach(deletedEdgeIds, function (deletedEdgeId) {
          delete clusterNode.containedEdges[deletedEdgeId];

          util.forEach(clusterNode.edges, function (edge, m) {
            if (edge.id === deletedEdgeId) {
              clusterNode.edges[m] = null; 
              return;
            }

            edge.clusteringEdgeReplacingIds = _this4._filter(edge.clusteringEdgeReplacingIds, function (id) {
              return !deletedEdgeIds[id];
            });
          });

          clusterNode.edges = _this4._filter(clusterNode.edges, function (item) {
            return item !== null;
          });
        });
      });

      util.forEach(deletedEdgeIds, function (edgeId) {
        delete _this4.clusteredEdges[edgeId];
      });

      util.forEach(deletedEdgeIds, function (edgeId) {
        delete _this4.body.edges[edgeId];
      });


      var ids = (0, _keys2['default'])(this.body.edges);
      util.forEach(ids, function (edgeId) {
        var edge = _this4.body.edges[edgeId];

        var shouldBeClustered = _this4._isClusteredNode(edge.fromId) || _this4._isClusteredNode(edge.toId);
        if (shouldBeClustered === _this4._isClusteredEdge(edge.id)) {
          return; 
        }

        if (shouldBeClustered) {
          var clusterFrom = _this4._getClusterNodeForNode(edge.fromId);
          if (clusterFrom !== undefined) {
            _this4._clusterEdges(_this4.body.nodes[edge.fromId], edge, clusterFrom);
          }

          var clusterTo = _this4._getClusterNodeForNode(edge.toId);
          if (clusterTo !== undefined) {
            _this4._clusterEdges(_this4.body.nodes[edge.toId], edge, clusterTo);
          }

        } else {
          throw new Error('remove edge from clustering not implemented!');
        }
      });

      var changed = false;
      var continueLoop = true;

      var _loop2 = function _loop2() {
        var clustersToOpen = [];

        eachClusterNode(function (clusterNode) {
          var numNodes = (0, _keys2['default'])(clusterNode.containedNodes).length;
          var allowSingle = clusterNode.options.allowSingleNodeCluster === true;
          if (allowSingle && numNodes < 1 || !allowSingle && numNodes < 2) {
            clustersToOpen.push(clusterNode.id);
          }
        });

        for (var _n = 0; _n < clustersToOpen.length; ++_n) {
          _this4.openCluster(clustersToOpen[_n], {}, false 
          );
        }

        continueLoop = clustersToOpen.length > 0;
        changed = changed || continueLoop;
      };

      while (continueLoop) {
        _loop2();
      }

      if (changed) {
        this._updateState(); 
      }
    }


  }, {
    key: '_isClusteredNode',
    value: function _isClusteredNode(nodeId) {
      return this.clusteredNodes[nodeId] !== undefined;
    }


  }, {
    key: '_isClusteredEdge',
    value: function _isClusteredEdge(edgeId) {
      return this.clusteredEdges[edgeId] !== undefined;
    }
  }]);
  return ClusterEngine;
}();

exports['default'] = ClusterEngine;

 }),
 (function(module, exports, __nested_webpack_require_951802__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __nested_webpack_require_951802__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __nested_webpack_require_951802__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_951802__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __nested_webpack_require_951802__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_951802__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_951802__(2);
var Node = __nested_webpack_require_951802__(34)['default'];


var Cluster = function (_Node) {
  (0, _inherits3['default'])(Cluster, _Node);

  function Cluster(options, body, imagelist, grouplist, globalOptions, defaultOptions) {
    (0, _classCallCheck3['default'])(this, Cluster);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (Cluster.__proto__ || (0, _getPrototypeOf2['default'])(Cluster)).call(this, options, body, imagelist, grouplist, globalOptions, defaultOptions));

    _this.isCluster = true;
    _this.containedNodes = {};
    _this.containedEdges = {};
    return _this;
  }



  (0, _createClass3['default'])(Cluster, [{
    key: '_openChildCluster',
    value: function _openChildCluster(childClusterId) {
      var _this2 = this;

      var childCluster = this.body.nodes[childClusterId];
      if (this.containedNodes[childClusterId] === undefined) {
        throw new Error('node with id: ' + childClusterId + ' not in current cluster');
      }
      if (!childCluster.isCluster) {
        throw new Error('node with id: ' + childClusterId + ' is not a cluster');
      }

      delete this.containedNodes[childClusterId];
      util.forEach(childCluster.edges, function (edge) {
        delete _this2.containedEdges[edge.id];
      });

      util.forEach(childCluster.containedNodes, function (node, nodeId) {
        _this2.containedNodes[nodeId] = node;
      });
      childCluster.containedNodes = {};

      util.forEach(childCluster.containedEdges, function (edge, edgeId) {
        _this2.containedEdges[edgeId] = edge;
      });
      childCluster.containedEdges = {};

      util.forEach(childCluster.edges, function (clusterEdge) {
        util.forEach(_this2.edges, function (parentClusterEdge) {
          var index = parentClusterEdge.clusteringEdgeReplacingIds.indexOf(clusterEdge.id);
          if (index === -1) return;

          util.forEach(clusterEdge.clusteringEdgeReplacingIds, function (srcId) {
            parentClusterEdge.clusteringEdgeReplacingIds.push(srcId);

            _this2.body.edges[srcId].edgeReplacedById = parentClusterEdge.id;
          });

          parentClusterEdge.clusteringEdgeReplacingIds.splice(index, 1);
        });
      });
      childCluster.edges = [];
    }
  }]);
  return Cluster;
}(Node);

exports['default'] = Cluster;

 }),
 (function(module, exports, __nested_webpack_require_956047__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_956047__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_956047__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _initRequestAnimationFrame() {
  var func;

  if (window !== undefined) {
    func = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  }

  if (func === undefined) {
    window.requestAnimationFrame = function (callback) {
      callback();
    };
  } else {
    window.requestAnimationFrame = func;
  }
}

var util = __nested_webpack_require_956047__(2);


var CanvasRenderer = function () {
  function CanvasRenderer(body, canvas) {
    (0, _classCallCheck3['default'])(this, CanvasRenderer);

    _initRequestAnimationFrame();
    this.body = body;
    this.canvas = canvas;

    this.redrawRequested = false;
    this.renderTimer = undefined;
    this.requiresTimeout = true;
    this.renderingActive = false;
    this.renderRequests = 0;
    this.allowRedraw = true;

    this.dragging = false;
    this.zooming = false;
    this.options = {};
    this.defaultOptions = {
      hideEdgesOnDrag: false,
      hideEdgesOnZoom: false,
      hideNodesOnDrag: false
    };
    util.extend(this.options, this.defaultOptions);

    this._determineBrowserMethod();
    this.bindEventListeners();
  }



  (0, _createClass3['default'])(CanvasRenderer, [{
    key: 'bindEventListeners',
    value: function bindEventListeners() {
      var _this = this;

      this.body.emitter.on('dragStart', function () {
        _this.dragging = true;
      });
      this.body.emitter.on('dragEnd', function () {
        _this.dragging = false;
      });
      this.body.emitter.on('zoom', function () {
        _this.zooming = true;
        window.clearTimeout(_this.zoomTimeoutId);
        _this.zoomTimeoutId = window.setTimeout(function () {
          _this.zooming = false;
          _this._requestRedraw.bind(_this)();
        }, 250);
      });
      this.body.emitter.on('_resizeNodes', function () {
        _this._resizeNodes();
      });
      this.body.emitter.on('_redraw', function () {
        if (_this.renderingActive === false) {
          _this._redraw();
        }
      });
      this.body.emitter.on('_blockRedraw', function () {
        _this.allowRedraw = false;
      });
      this.body.emitter.on('_allowRedraw', function () {
        _this.allowRedraw = true;
        _this.redrawRequested = false;
      });
      this.body.emitter.on('_requestRedraw', this._requestRedraw.bind(this));
      this.body.emitter.on('_startRendering', function () {
        _this.renderRequests += 1;
        _this.renderingActive = true;
        _this._startRendering();
      });
      this.body.emitter.on('_stopRendering', function () {
        _this.renderRequests -= 1;
        _this.renderingActive = _this.renderRequests > 0;
        _this.renderTimer = undefined;
      });
      this.body.emitter.on('destroy', function () {
        _this.renderRequests = 0;
        _this.allowRedraw = false;
        _this.renderingActive = false;
        if (_this.requiresTimeout === true) {
          clearTimeout(_this.renderTimer);
        } else {
          window.cancelAnimationFrame(_this.renderTimer);
        }
        _this.body.emitter.off();
      });
    }


  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if (options !== undefined) {
        var fields = ['hideEdgesOnDrag', 'hideEdgesOnZoom', 'hideNodesOnDrag'];
        util.selectiveDeepExtend(fields, this.options, options);
      }
    }


  }, {
    key: '_requestNextFrame',
    value: function _requestNextFrame(callback, delay) {
      if (typeof window === 'undefined') return; 

      var timer = void 0;

      var myWindow = window; 

      if (this.requiresTimeout === true) {
        timer = myWindow.setTimeout(callback, delay);
      } else {
        if (myWindow.requestAnimationFrame) {
          timer = myWindow.requestAnimationFrame(callback);
        }
      }

      return timer;
    }


  }, {
    key: '_startRendering',
    value: function _startRendering() {
      if (this.renderingActive === true) {
        if (this.renderTimer === undefined) {
          this.renderTimer = this._requestNextFrame(this._renderStep.bind(this), this.simulationInterval);
        }
      }
    }


  }, {
    key: '_renderStep',
    value: function _renderStep() {
      if (this.renderingActive === true) {
        this.renderTimer = undefined;

        if (this.requiresTimeout === true) {
          this._startRendering();
        }

        this._redraw();

        if (this.requiresTimeout === false) {
          this._startRendering();
        }
      }
    }


  }, {
    key: 'redraw',
    value: function redraw() {
      this.body.emitter.emit('setSize');
      this._redraw();
    }


  }, {
    key: '_requestRedraw',
    value: function _requestRedraw() {
      var _this2 = this;

      if (this.redrawRequested !== true && this.renderingActive === false && this.allowRedraw === true) {
        this.redrawRequested = true;
        this._requestNextFrame(function () {
          _this2._redraw(false);
        }, 0);
      }
    }


  }, {
    key: '_redraw',
    value: function _redraw() {
      var hidden = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.allowRedraw === true) {
        this.body.emitter.emit('initRedraw');

        this.redrawRequested = false;

        if (this.canvas.frame.canvas.width === 0 || this.canvas.frame.canvas.height === 0) {
          this.canvas.setSize();
        }

        this.canvas.setTransform();

        var ctx = this.canvas.getContext();

        var w = this.canvas.frame.canvas.clientWidth;
        var h = this.canvas.frame.canvas.clientHeight;
        ctx.clearRect(0, 0, w, h);

        if (this.canvas.frame.clientWidth === 0) {
          return;
        }

        ctx.save();
        ctx.translate(this.body.view.translation.x, this.body.view.translation.y);
        ctx.scale(this.body.view.scale, this.body.view.scale);

        ctx.beginPath();
        this.body.emitter.emit('beforeDrawing', ctx);
        ctx.closePath();

        if (hidden === false) {
          if ((this.dragging === false || this.dragging === true && this.options.hideEdgesOnDrag === false) && (this.zooming === false || this.zooming === true && this.options.hideEdgesOnZoom === false)) {
            this._drawEdges(ctx);
          }
        }

        if (this.dragging === false || this.dragging === true && this.options.hideNodesOnDrag === false) {
          this._drawNodes(ctx, hidden);
        }

        ctx.beginPath();
        this.body.emitter.emit('afterDrawing', ctx);
        ctx.closePath();

        ctx.restore();
        if (hidden === true) {
          ctx.clearRect(0, 0, w, h);
        }
      }
    }


  }, {
    key: '_resizeNodes',
    value: function _resizeNodes() {
      this.canvas.setTransform();
      var ctx = this.canvas.getContext();
      ctx.save();
      ctx.translate(this.body.view.translation.x, this.body.view.translation.y);
      ctx.scale(this.body.view.scale, this.body.view.scale);

      var nodes = this.body.nodes;
      var node = void 0;

      for (var nodeId in nodes) {
        if (nodes.hasOwnProperty(nodeId)) {
          node = nodes[nodeId];
          node.resize(ctx);
          node.updateBoundingBox(ctx, node.selected);
        }
      }

      ctx.restore();
    }


  }, {
    key: '_drawNodes',
    value: function _drawNodes(ctx) {
      var alwaysShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var nodes = this.body.nodes;
      var nodeIndices = this.body.nodeIndices;
      var node = void 0;
      var selected = [];
      var margin = 20;
      var topLeft = this.canvas.DOMtoCanvas({ x: -margin, y: -margin });
      var bottomRight = this.canvas.DOMtoCanvas({
        x: this.canvas.frame.canvas.clientWidth + margin,
        y: this.canvas.frame.canvas.clientHeight + margin
      });
      var viewableArea = {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x

      };for (var i = 0; i < nodeIndices.length; i++) {
        node = nodes[nodeIndices[i]];
        if (node.isSelected()) {
          selected.push(nodeIndices[i]);
        } else {
          if (alwaysShow === true) {
            node.draw(ctx);
          } else if (node.isBoundingBoxOverlappingWith(viewableArea) === true) {
            node.draw(ctx);
          } else {
            node.updateBoundingBox(ctx, node.selected);
          }
        }
      }

      for (var _i = 0; _i < selected.length; _i++) {
        node = nodes[selected[_i]];
        node.draw(ctx);
      }
    }


  }, {
    key: '_drawEdges',
    value: function _drawEdges(ctx) {
      var edges = this.body.edges;
      var edgeIndices = this.body.edgeIndices;
      var edge = void 0;

      for (var i = 0; i < edgeIndices.length; i++) {
        edge = edges[edgeIndices[i]];
        if (edge.connected === true) {
          edge.draw(ctx);
        }
      }
    }


  }, {
    key: '_determineBrowserMethod',
    value: function _determineBrowserMethod() {
      if (typeof window !== 'undefined') {
        var browserType = navigator.userAgent.toLowerCase();
        this.requiresTimeout = false;
        if (browserType.indexOf('msie 9.0') != -1) {
          this.requiresTimeout = true;
        } else if (browserType.indexOf('safari') != -1) {
          if (browserType.indexOf('chrome') <= -1) {
            this.requiresTimeout = true;
          }
        }
      } else {
        this.requiresTimeout = true;
      }
    }
  }]);
  return CanvasRenderer;
}();

exports['default'] = CanvasRenderer;

 }),
 (function(module, exports, __nested_webpack_require_970513__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_970513__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_970513__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Hammer = __nested_webpack_require_970513__(24);
var hammerUtil = __nested_webpack_require_970513__(36);

var util = __nested_webpack_require_970513__(2);


var Canvas = function () {
  function Canvas(body) {
    (0, _classCallCheck3['default'])(this, Canvas);

    this.body = body;
    this.pixelRatio = 1;
    this.resizeTimer = undefined;
    this.resizeFunction = this._onResize.bind(this);
    this.cameraState = {};
    this.initialized = false;
    this.canvasViewCenter = {};

    this.options = {};
    this.defaultOptions = {
      autoResize: true,
      height: '100%',
      width: '100%'
    };
    util.extend(this.options, this.defaultOptions);

    this.bindEventListeners();
  }



  (0, _createClass3['default'])(Canvas, [{
    key: 'bindEventListeners',
    value: function bindEventListeners() {
      var _this = this;

      this.body.emitter.once('resize', function (obj) {
        if (obj.width !== 0) {
          _this.body.view.translation.x = obj.width * 0.5;
        }
        if (obj.height !== 0) {
          _this.body.view.translation.y = obj.height * 0.5;
        }
      });
      this.body.emitter.on('setSize', this.setSize.bind(this));
      this.body.emitter.on('destroy', function () {
        _this.hammerFrame.destroy();
        _this.hammer.destroy();
        _this._cleanUp();
      });
    }


  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      if (options !== undefined) {
        var fields = ['width', 'height', 'autoResize'];
        util.selectiveDeepExtend(fields, this.options, options);
      }

      if (this.options.autoResize === true) {
        this._cleanUp();
        this.resizeTimer = setInterval(function () {
          var changed = _this2.setSize();
          if (changed === true) {
            _this2.body.emitter.emit('_requestRedraw');
          }
        }, 1000);
        this.resizeFunction = this._onResize.bind(this);
        util.addEventListener(window, 'resize', this.resizeFunction);
      }
    }


  }, {
    key: '_cleanUp',
    value: function _cleanUp() {
      if (this.resizeTimer !== undefined) {
        clearInterval(this.resizeTimer);
      }
      util.removeEventListener(window, 'resize', this.resizeFunction);
      this.resizeFunction = undefined;
    }


  }, {
    key: '_onResize',
    value: function _onResize() {
      this.setSize();
      this.body.emitter.emit('_redraw');
    }


  }, {
    key: '_getCameraState',
    value: function _getCameraState() {
      var pixelRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pixelRatio;

      if (this.initialized === true) {
        this.cameraState.previousWidth = this.frame.canvas.width / pixelRatio;
        this.cameraState.previousHeight = this.frame.canvas.height / pixelRatio;
        this.cameraState.scale = this.body.view.scale;
        this.cameraState.position = this.DOMtoCanvas({
          x: 0.5 * this.frame.canvas.width / pixelRatio,
          y: 0.5 * this.frame.canvas.height / pixelRatio
        });
      }
    }


  }, {
    key: '_setCameraState',
    value: function _setCameraState() {
      if (this.cameraState.scale !== undefined && this.frame.canvas.clientWidth !== 0 && this.frame.canvas.clientHeight !== 0 && this.pixelRatio !== 0 && this.cameraState.previousWidth > 0) {
        var widthRatio = this.frame.canvas.width / this.pixelRatio / this.cameraState.previousWidth;
        var heightRatio = this.frame.canvas.height / this.pixelRatio / this.cameraState.previousHeight;
        var newScale = this.cameraState.scale;

        if (widthRatio != 1 && heightRatio != 1) {
          newScale = this.cameraState.scale * 0.5 * (widthRatio + heightRatio);
        } else if (widthRatio != 1) {
          newScale = this.cameraState.scale * widthRatio;
        } else if (heightRatio != 1) {
          newScale = this.cameraState.scale * heightRatio;
        }

        this.body.view.scale = newScale;
        var currentViewCenter = this.DOMtoCanvas({
          x: 0.5 * this.frame.canvas.clientWidth,
          y: 0.5 * this.frame.canvas.clientHeight
        });

        var distanceFromCenter = {
          x: currentViewCenter.x - this.cameraState.position.x,
          y: currentViewCenter.y - this.cameraState.position.y
        };
        this.body.view.translation.x += distanceFromCenter.x * this.body.view.scale;
        this.body.view.translation.y += distanceFromCenter.y * this.body.view.scale;
      }
    }


  }, {
    key: '_prepareValue',
    value: function _prepareValue(value) {
      if (typeof value === 'number') {
        return value + 'px';
      } else if (typeof value === 'string') {
        if (value.indexOf('%') !== -1 || value.indexOf('px') !== -1) {
          return value;
        } else if (value.indexOf('%') === -1) {
          return value + 'px';
        }
      }
      throw new Error('Could not use the value supplied for width or height:' + value);
    }


  }, {
    key: '_create',
    value: function _create() {
      while (this.body.container.hasChildNodes()) {
        this.body.container.removeChild(this.body.container.firstChild);
      }

      this.frame = document.createElement('div');
      this.frame.className = 'vis-network';
      this.frame.style.position = 'relative';
      this.frame.style.overflow = 'hidden';
      this.frame.tabIndex = 900; 


      this.frame.canvas = document.createElement('canvas');
      this.frame.canvas.style.position = 'relative';
      this.frame.appendChild(this.frame.canvas);

      if (!this.frame.canvas.getContext) {
        var noCanvas = document.createElement('DIV');
        noCanvas.style.color = 'red';
        noCanvas.style.fontWeight = 'bold';
        noCanvas.style.padding = '10px';
        noCanvas.innerHTML = 'Error: your browser does not support HTML canvas';
        this.frame.canvas.appendChild(noCanvas);
      } else {
        this._setPixelRatio();
        this.setTransform();
      }

      this.body.container.appendChild(this.frame);

      this.body.view.scale = 1;
      this.body.view.translation = {
        x: 0.5 * this.frame.canvas.clientWidth,
        y: 0.5 * this.frame.canvas.clientHeight
      };

      this._bindHammer();
    }


  }, {
    key: '_bindHammer',
    value: function _bindHammer() {
      var _this3 = this;

      if (this.hammer !== undefined) {
        this.hammer.destroy();
      }
      this.drag = {};
      this.pinch = {};

      this.hammer = new Hammer(this.frame.canvas);
      this.hammer.get('pinch').set({ enable: true });
      this.hammer.get('pan').set({ threshold: 5, direction: Hammer.DIRECTION_ALL });

      hammerUtil.onTouch(this.hammer, function (event) {
        _this3.body.eventListeners.onTouch(event);
      });
      this.hammer.on('tap', function (event) {
        _this3.body.eventListeners.onTap(event);
      });
      this.hammer.on('doubletap', function (event) {
        _this3.body.eventListeners.onDoubleTap(event);
      });
      this.hammer.on('press', function (event) {
        _this3.body.eventListeners.onHold(event);
      });
      this.hammer.on('panstart', function (event) {
        _this3.body.eventListeners.onDragStart(event);
      });
      this.hammer.on('panmove', function (event) {
        _this3.body.eventListeners.onDrag(event);
      });
      this.hammer.on('panend', function (event) {
        _this3.body.eventListeners.onDragEnd(event);
      });
      this.hammer.on('pinch', function (event) {
        _this3.body.eventListeners.onPinch(event);
      });

      this.frame.canvas.addEventListener('mousewheel', function (event) {
        _this3.body.eventListeners.onMouseWheel(event);
      });
      this.frame.canvas.addEventListener('DOMMouseScroll', function (event) {
        _this3.body.eventListeners.onMouseWheel(event);
      });

      this.frame.canvas.addEventListener('mousemove', function (event) {
        _this3.body.eventListeners.onMouseMove(event);
      });
      this.frame.canvas.addEventListener('contextmenu', function (event) {
        _this3.body.eventListeners.onContext(event);
      });

      this.hammerFrame = new Hammer(this.frame);
      hammerUtil.onRelease(this.hammerFrame, function (event) {
        _this3.body.eventListeners.onRelease(event);
      });
    }


  }, {
    key: 'setSize',
    value: function setSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.width;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.height;

      width = this._prepareValue(width);
      height = this._prepareValue(height);

      var emitEvent = false;
      var oldWidth = this.frame.canvas.width;
      var oldHeight = this.frame.canvas.height;

      var previousRatio = this.pixelRatio; 
      this._setPixelRatio();

      if (width != this.options.width || height != this.options.height || this.frame.style.width != width || this.frame.style.height != height) {
        this._getCameraState(previousRatio);

        this.frame.style.width = width;
        this.frame.style.height = height;

        this.frame.canvas.style.width = '100%';
        this.frame.canvas.style.height = '100%';

        this.frame.canvas.width = Math.round(this.frame.canvas.clientWidth * this.pixelRatio);
        this.frame.canvas.height = Math.round(this.frame.canvas.clientHeight * this.pixelRatio);

        this.options.width = width;
        this.options.height = height;

        this.canvasViewCenter = {
          x: 0.5 * this.frame.clientWidth,
          y: 0.5 * this.frame.clientHeight
        };

        emitEvent = true;
      } else {

        var newWidth = Math.round(this.frame.canvas.clientWidth * this.pixelRatio);
        var newHeight = Math.round(this.frame.canvas.clientHeight * this.pixelRatio);

        if (this.frame.canvas.width !== newWidth || this.frame.canvas.height !== newHeight) {
          this._getCameraState(previousRatio);
        }

        if (this.frame.canvas.width !== newWidth) {
          this.frame.canvas.width = newWidth;
          emitEvent = true;
        }
        if (this.frame.canvas.height !== newHeight) {
          this.frame.canvas.height = newHeight;
          emitEvent = true;
        }
      }

      if (emitEvent === true) {
        this.body.emitter.emit('resize', {
          width: Math.round(this.frame.canvas.width / this.pixelRatio),
          height: Math.round(this.frame.canvas.height / this.pixelRatio),
          oldWidth: Math.round(oldWidth / this.pixelRatio),
          oldHeight: Math.round(oldHeight / this.pixelRatio)
        });

        this._setCameraState();
      }

      this.initialized = true;
      return emitEvent;
    }


  }, {
    key: 'getContext',
    value: function getContext() {
      return this.frame.canvas.getContext('2d');
    }


  }, {
    key: '_determinePixelRatio',
    value: function _determinePixelRatio() {
      var ctx = this.getContext();
      if (ctx === undefined) {
        throw new Error('Could not get canvax context');
      }

      var numerator = 1;
      if (typeof window !== 'undefined') {
        numerator = window.devicePixelRatio || 1;
      }

      var denominator = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;

      return numerator / denominator;
    }


  }, {
    key: '_setPixelRatio',
    value: function _setPixelRatio() {
      this.pixelRatio = this._determinePixelRatio();
    }


  }, {
    key: 'setTransform',
    value: function setTransform() {
      var ctx = this.getContext();
      if (ctx === undefined) {
        throw new Error('Could not get canvax context');
      }

      ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
    }


  }, {
    key: '_XconvertDOMtoCanvas',
    value: function _XconvertDOMtoCanvas(x) {
      return (x - this.body.view.translation.x) / this.body.view.scale;
    }


  }, {
    key: '_XconvertCanvasToDOM',
    value: function _XconvertCanvasToDOM(x) {
      return x * this.body.view.scale + this.body.view.translation.x;
    }


  }, {
    key: '_YconvertDOMtoCanvas',
    value: function _YconvertDOMtoCanvas(y) {
      return (y - this.body.view.translation.y) / this.body.view.scale;
    }


  }, {
    key: '_YconvertCanvasToDOM',
    value: function _YconvertCanvasToDOM(y) {
      return y * this.body.view.scale + this.body.view.translation.y;
    }


  }, {
    key: 'canvasToDOM',
    value: function canvasToDOM(pos) {
      return {
        x: this._XconvertCanvasToDOM(pos.x),
        y: this._YconvertCanvasToDOM(pos.y)
      };
    }


  }, {
    key: 'DOMtoCanvas',
    value: function DOMtoCanvas(pos) {
      return {
        x: this._XconvertDOMtoCanvas(pos.x),
        y: this._YconvertDOMtoCanvas(pos.y)
      };
    }
  }]);
  return Canvas;
}();

exports['default'] = Canvas;

 }),
 (function(module, exports, __nested_webpack_require_988723__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __nested_webpack_require_988723__(78);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __nested_webpack_require_988723__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_988723__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_988723__(2);

var NetworkUtil = __nested_webpack_require_988723__(57)['default'];


var View = function () {
  function View(body, canvas) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, View);

    this.body = body;
    this.canvas = canvas;

    this.animationSpeed = 1 / this.renderRefreshRate;
    this.animationEasingFunction = 'easeInOutQuint';
    this.easingTime = 0;
    this.sourceScale = 0;
    this.targetScale = 0;
    this.sourceTranslation = 0;
    this.targetTranslation = 0;
    this.lockedOnNodeId = undefined;
    this.lockedOnNodeOffset = undefined;
    this.touchTime = 0;

    this.viewFunction = undefined;

    this.body.emitter.on('fit', this.fit.bind(this));
    this.body.emitter.on('animationFinished', function () {
      _this.body.emitter.emit('_stopRendering');
    });
    this.body.emitter.on('unlockNode', this.releaseNode.bind(this));
  }



  (0, _createClass3['default'])(View, [{
    key: 'setOptions',
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.options = options;
    }


  }, {
    key: 'fit',
    value: function fit() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { nodes: [] };
      var initialZoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var range = void 0;
      var zoomLevel = void 0;
      options = (0, _assign2['default'])({}, options);
      if (options.nodes === undefined || options.nodes.length === 0) {
        options.nodes = this.body.nodeIndices;
      }

      if (initialZoom === true) {
        var positionDefined = 0;
        for (var nodeId in this.body.nodes) {
          if (this.body.nodes.hasOwnProperty(nodeId)) {
            var node = this.body.nodes[nodeId];
            if (node.predefinedPosition === true) {
              positionDefined += 1;
            }
          }
        }
        if (positionDefined > 0.5 * this.body.nodeIndices.length) {
          this.fit(options, false);
          return;
        }

        range = NetworkUtil.getRange(this.body.nodes, options.nodes);

        var numberOfNodes = this.body.nodeIndices.length;
        zoomLevel = 12.662 / (numberOfNodes + 7.4147) + 0.0964822; 

        var factor = Math.min(this.canvas.frame.canvas.clientWidth / 600, this.canvas.frame.canvas.clientHeight / 600);
        zoomLevel *= factor;
      } else {
        this.body.emitter.emit('_resizeNodes');
        range = NetworkUtil.getRange(this.body.nodes, options.nodes);

        var xDistance = Math.abs(range.maxX - range.minX) * 1.1;
        var yDistance = Math.abs(range.maxY - range.minY) * 1.1;

        var xZoomLevel = this.canvas.frame.canvas.clientWidth / xDistance;
        var yZoomLevel = this.canvas.frame.canvas.clientHeight / yDistance;

        zoomLevel = xZoomLevel <= yZoomLevel ? xZoomLevel : yZoomLevel;
      }

      if (zoomLevel > 1.0) {
        zoomLevel = 1.0;
      } else if (zoomLevel === 0) {
        zoomLevel = 1.0;
      }

      var center = NetworkUtil.findCenter(range);
      var animationOptions = {
        position: center,
        scale: zoomLevel,
        animation: options.animation
      };
      this.moveTo(animationOptions);
    }



  }, {
    key: 'focus',
    value: function focus(nodeId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.body.nodes[nodeId] !== undefined) {
        var nodePosition = {
          x: this.body.nodes[nodeId].x,
          y: this.body.nodes[nodeId].y
        };
        options.position = nodePosition;
        options.lockedOnNode = nodeId;

        this.moveTo(options);
      } else {
        console.log('Node: ' + nodeId + ' cannot be found.');
      }
    }


  }, {
    key: 'moveTo',
    value: function moveTo(options) {
      if (options === undefined) {
        options = {};
        return;
      }
      if (options.offset === undefined) {
        options.offset = { x: 0, y: 0 };
      }
      if (options.offset.x === undefined) {
        options.offset.x = 0;
      }
      if (options.offset.y === undefined) {
        options.offset.y = 0;
      }
      if (options.scale === undefined) {
        options.scale = this.body.view.scale;
      }
      if (options.position === undefined) {
        options.position = this.getViewPosition();
      }
      if (options.animation === undefined) {
        options.animation = { duration: 0 };
      }
      if (options.animation === false) {
        options.animation = { duration: 0 };
      }
      if (options.animation === true) {
        options.animation = {};
      }
      if (options.animation.duration === undefined) {
        options.animation.duration = 1000;
      } 
      if (options.animation.easingFunction === undefined) {
        options.animation.easingFunction = 'easeInOutQuad';
      } 

      this.animateView(options);
    }


  }, {
    key: 'animateView',
    value: function animateView(options) {
      if (options === undefined) {
        return;
      }
      this.animationEasingFunction = options.animation.easingFunction;
      this.releaseNode();
      if (options.locked === true) {
        this.lockedOnNodeId = options.lockedOnNode;
        this.lockedOnNodeOffset = options.offset;
      }

      if (this.easingTime != 0) {
        this._transitionRedraw(true); 
      }

      this.sourceScale = this.body.view.scale;
      this.sourceTranslation = this.body.view.translation;
      this.targetScale = options.scale;

      this.body.view.scale = this.targetScale;
      var viewCenter = this.canvas.DOMtoCanvas({
        x: 0.5 * this.canvas.frame.canvas.clientWidth,
        y: 0.5 * this.canvas.frame.canvas.clientHeight
      });

      var distanceFromCenter = {
        x: viewCenter.x - options.position.x,
        y: viewCenter.y - options.position.y
      };
      this.targetTranslation = {
        x: this.sourceTranslation.x + distanceFromCenter.x * this.targetScale + options.offset.x,
        y: this.sourceTranslation.y + distanceFromCenter.y * this.targetScale + options.offset.y

      };if (options.animation.duration === 0) {
        if (this.lockedOnNodeId != undefined) {
          this.viewFunction = this._lockedRedraw.bind(this);
          this.body.emitter.on('initRedraw', this.viewFunction);
        } else {
          this.body.view.scale = this.targetScale;
          this.body.view.translation = this.targetTranslation;
          this.body.emitter.emit('_requestRedraw');
        }
      } else {
        this.animationSpeed = 1 / (60 * options.animation.duration * 0.001) || 1 / 60; 
        this.animationEasingFunction = options.animation.easingFunction;

        this.viewFunction = this._transitionRedraw.bind(this);
        this.body.emitter.on('initRedraw', this.viewFunction);
        this.body.emitter.emit('_startRendering');
      }
    }


  }, {
    key: '_lockedRedraw',
    value: function _lockedRedraw() {
      var nodePosition = {
        x: this.body.nodes[this.lockedOnNodeId].x,
        y: this.body.nodes[this.lockedOnNodeId].y
      };
      var viewCenter = this.canvas.DOMtoCanvas({
        x: 0.5 * this.canvas.frame.canvas.clientWidth,
        y: 0.5 * this.canvas.frame.canvas.clientHeight
      });
      var distanceFromCenter = {
        x: viewCenter.x - nodePosition.x,
        y: viewCenter.y - nodePosition.y
      };
      var sourceTranslation = this.body.view.translation;
      var targetTranslation = {
        x: sourceTranslation.x + distanceFromCenter.x * this.body.view.scale + this.lockedOnNodeOffset.x,
        y: sourceTranslation.y + distanceFromCenter.y * this.body.view.scale + this.lockedOnNodeOffset.y
      };

      this.body.view.translation = targetTranslation;
    }


  }, {
    key: 'releaseNode',
    value: function releaseNode() {
      if (this.lockedOnNodeId !== undefined && this.viewFunction !== undefined) {
        this.body.emitter.off('initRedraw', this.viewFunction);
        this.lockedOnNodeId = undefined;
        this.lockedOnNodeOffset = undefined;
      }
    }


  }, {
    key: '_transitionRedraw',
    value: function _transitionRedraw() {
      var finished = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.easingTime += this.animationSpeed;
      this.easingTime = finished === true ? 1.0 : this.easingTime;

      var progress = util.easingFunctions[this.animationEasingFunction](this.easingTime);

      this.body.view.scale = this.sourceScale + (this.targetScale - this.sourceScale) * progress;
      this.body.view.translation = {
        x: this.sourceTranslation.x + (this.targetTranslation.x - this.sourceTranslation.x) * progress,
        y: this.sourceTranslation.y + (this.targetTranslation.y - this.sourceTranslation.y) * progress

      };if (this.easingTime >= 1.0) {
        this.body.emitter.off('initRedraw', this.viewFunction);
        this.easingTime = 0;
        if (this.lockedOnNodeId != undefined) {
          this.viewFunction = this._lockedRedraw.bind(this);
          this.body.emitter.on('initRedraw', this.viewFunction);
        }
        this.body.emitter.emit('animationFinished');
      }
    }


  }, {
    key: 'getScale',
    value: function getScale() {
      return this.body.view.scale;
    }


  }, {
    key: 'getViewPosition',
    value: function getViewPosition() {
      return this.canvas.DOMtoCanvas({
        x: 0.5 * this.canvas.frame.canvas.clientWidth,
        y: 0.5 * this.canvas.frame.canvas.clientHeight
      });
    }
  }]);
  return View;
}();

exports['default'] = View;

 }),
 (function(module, exports, __nested_webpack_require_1002183__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_1002183__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1002183__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_1002183__(2);
var NavigationHandler = __nested_webpack_require_1002183__(184)['default'];
var Popup = __nested_webpack_require_1002183__(185)['default'];


var InteractionHandler = function () {
  function InteractionHandler(body, canvas, selectionHandler) {
    (0, _classCallCheck3['default'])(this, InteractionHandler);

    this.body = body;
    this.canvas = canvas;
    this.selectionHandler = selectionHandler;
    this.navigationHandler = new NavigationHandler(body, canvas);

    this.body.eventListeners.onTap = this.onTap.bind(this);
    this.body.eventListeners.onTouch = this.onTouch.bind(this);
    this.body.eventListeners.onDoubleTap = this.onDoubleTap.bind(this);
    this.body.eventListeners.onHold = this.onHold.bind(this);
    this.body.eventListeners.onDragStart = this.onDragStart.bind(this);
    this.body.eventListeners.onDrag = this.onDrag.bind(this);
    this.body.eventListeners.onDragEnd = this.onDragEnd.bind(this);
    this.body.eventListeners.onMouseWheel = this.onMouseWheel.bind(this);
    this.body.eventListeners.onPinch = this.onPinch.bind(this);
    this.body.eventListeners.onMouseMove = this.onMouseMove.bind(this);
    this.body.eventListeners.onRelease = this.onRelease.bind(this);
    this.body.eventListeners.onContext = this.onContext.bind(this);

    this.touchTime = 0;
    this.drag = {};
    this.pinch = {};
    this.popup = undefined;
    this.popupObj = undefined;
    this.popupTimer = undefined;

    this.body.functions.getPointer = this.getPointer.bind(this);

    this.options = {};
    this.defaultOptions = {
      dragNodes: true,
      dragView: true,
      hover: false,
      keyboard: {
        enabled: false,
        speed: { x: 10, y: 10, zoom: 0.02 },
        bindToWindow: true
      },
      navigationButtons: false,
      tooltipDelay: 300,
      zoomView: true,
      zoomSpeed: 1
    };
    util.extend(this.options, this.defaultOptions);

    this.bindEventListeners();
  }



  (0, _createClass3['default'])(InteractionHandler, [{
    key: 'bindEventListeners',
    value: function bindEventListeners() {
      var _this = this;

      this.body.emitter.on('destroy', function () {
        clearTimeout(_this.popupTimer);
        delete _this.body.functions.getPointer;
      });
    }


  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      if (options !== undefined) {
        var fields = ['hideEdgesOnDrag', 'hideEdgesOnZoom', 'hideNodesOnDrag', 'keyboard', 'multiselect', 'selectable', 'selectConnectedEdges'];
        util.selectiveNotDeepExtend(fields, this.options, options);

        util.mergeOptions(this.options, options, 'keyboard');

        if (options.tooltip) {
          util.extend(this.options.tooltip, options.tooltip);
          if (options.tooltip.color) {
            this.options.tooltip.color = util.parseColor(options.tooltip.color);
          }
        }
      }

      this.navigationHandler.setOptions(this.options);
    }


  }, {
    key: 'getPointer',
    value: function getPointer(touch) {
      return {
        x: touch.x - util.getAbsoluteLeft(this.canvas.frame.canvas),
        y: touch.y - util.getAbsoluteTop(this.canvas.frame.canvas)
      };
    }


  }, {
    key: 'onTouch',
    value: function onTouch(event) {
      if (new Date().valueOf() - this.touchTime > 50) {
        this.drag.pointer = this.getPointer(event.center);
        this.drag.pinched = false;
        this.pinch.scale = this.body.view.scale;
        this.touchTime = new Date().valueOf();
      }
    }


  }, {
    key: 'onTap',
    value: function onTap(event) {
      var pointer = this.getPointer(event.center);
      var multiselect = this.selectionHandler.options.multiselect && (event.changedPointers[0].ctrlKey || event.changedPointers[0].metaKey);

      this.checkSelectionChanges(pointer, event, multiselect);
      this.selectionHandler._generateClickEvent('click', event, pointer);
    }


  }, {
    key: 'onDoubleTap',
    value: function onDoubleTap(event) {
      var pointer = this.getPointer(event.center);
      this.selectionHandler._generateClickEvent('doubleClick', event, pointer);
    }


  }, {
    key: 'onHold',
    value: function onHold(event) {
      var pointer = this.getPointer(event.center);
      var multiselect = this.selectionHandler.options.multiselect;

      this.checkSelectionChanges(pointer, event, multiselect);

      this.selectionHandler._generateClickEvent('click', event, pointer);
      this.selectionHandler._generateClickEvent('hold', event, pointer);
    }


  }, {
    key: 'onRelease',
    value: function onRelease(event) {
      if (new Date().valueOf() - this.touchTime > 10) {
        var pointer = this.getPointer(event.center);
        this.selectionHandler._generateClickEvent('release', event, pointer);
        this.touchTime = new Date().valueOf();
      }
    }


  }, {
    key: 'onContext',
    value: function onContext(event) {
      var pointer = this.getPointer({ x: event.clientX, y: event.clientY });
      this.selectionHandler._generateClickEvent('oncontext', event, pointer);
    }


  }, {
    key: 'checkSelectionChanges',
    value: function checkSelectionChanges(pointer, event) {
      var add = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var previousSelection = this.selectionHandler.getSelection();
      var selected = false;
      if (add === true) {
        selected = this.selectionHandler.selectAdditionalOnPoint(pointer);
      } else {
        selected = this.selectionHandler.selectOnPoint(pointer);
      }
      var currentSelection = this.selectionHandler.getSelection();

      var deselectedItems = this._determineDifference(previousSelection, currentSelection);
      var selectedItems = this._determineDifference(currentSelection, previousSelection);

      if (deselectedItems.edges.length > 0) {
        this.selectionHandler._generateClickEvent('deselectEdge', event, pointer, previousSelection);
        selected = true;
      }

      if (deselectedItems.nodes.length > 0) {
        this.selectionHandler._generateClickEvent('deselectNode', event, pointer, previousSelection);
        selected = true;
      }

      if (selectedItems.nodes.length > 0) {
        this.selectionHandler._generateClickEvent('selectNode', event, pointer);
        selected = true;
      }

      if (selectedItems.edges.length > 0) {
        this.selectionHandler._generateClickEvent('selectEdge', event, pointer);
        selected = true;
      }

      if (selected === true) {
        this.selectionHandler._generateClickEvent('select', event, pointer);
      }
    }


  }, {
    key: '_determineDifference',
    value: function _determineDifference(firstSet, secondSet) {
      var arrayDiff = function arrayDiff(firstArr, secondArr) {
        var result = [];

        for (var i = 0; i < firstArr.length; i++) {
          var value = firstArr[i];
          if (secondArr.indexOf(value) === -1) {
            result.push(value);
          }
        }

        return result;
      };

      return {
        nodes: arrayDiff(firstSet.nodes, secondSet.nodes),
        edges: arrayDiff(firstSet.edges, secondSet.edges)
      };
    }


  }, {
    key: 'onDragStart',
    value: function onDragStart(event) {
      if (this.drag.pointer === undefined) {
        this.onTouch(event);
      }

      var node = this.selectionHandler.getNodeAt(this.drag.pointer);

      this.drag.dragging = true;
      this.drag.selection = [];
      this.drag.translation = util.extend({}, this.body.view.translation); 
      this.drag.nodeId = undefined;

      if (node !== undefined && this.options.dragNodes === true) {
        this.drag.nodeId = node.id;
        if (node.isSelected() === false) {
          this.selectionHandler.unselectAll();
          this.selectionHandler.selectObject(node);
        }

        this.selectionHandler._generateClickEvent('dragStart', event, this.drag.pointer);

        var selection = this.selectionHandler.selectionObj.nodes;
        for (var nodeId in selection) {
          if (selection.hasOwnProperty(nodeId)) {
            var object = selection[nodeId];
            var s = {
              id: object.id,
              node: object,

              x: object.x,
              y: object.y,
              xFixed: object.options.fixed.x,
              yFixed: object.options.fixed.y
            };

            object.options.fixed.x = true;
            object.options.fixed.y = true;

            this.drag.selection.push(s);
          }
        }
      } else {
        this.selectionHandler._generateClickEvent('dragStart', event, this.drag.pointer, undefined, true);
      }
    }


  }, {
    key: 'onDrag',
    value: function onDrag(event) {
      var _this2 = this;

      if (this.drag.pinched === true) {
        return;
      }

      this.body.emitter.emit('unlockNode');

      var pointer = this.getPointer(event.center);

      var selection = this.drag.selection;
      if (selection && selection.length && this.options.dragNodes === true) {
        this.selectionHandler._generateClickEvent('dragging', event, pointer);

        var deltaX = pointer.x - this.drag.pointer.x;
        var deltaY = pointer.y - this.drag.pointer.y;

        selection.forEach(function (selection) {
          var node = selection.node;
          if (selection.xFixed === false) {
            node.x = _this2.canvas._XconvertDOMtoCanvas(_this2.canvas._XconvertCanvasToDOM(selection.x) + deltaX);
          }
          if (selection.yFixed === false) {
            node.y = _this2.canvas._YconvertDOMtoCanvas(_this2.canvas._YconvertCanvasToDOM(selection.y) + deltaY);
          }
        });

        this.body.emitter.emit('startSimulation');
      } else {
        if (this.options.dragView === true) {
          this.selectionHandler._generateClickEvent('dragging', event, pointer, undefined, true);

          if (this.drag.pointer === undefined) {
            this.onDragStart(event);
            return;
          }
          var diffX = pointer.x - this.drag.pointer.x;
          var diffY = pointer.y - this.drag.pointer.y;

          this.body.view.translation = {
            x: this.drag.translation.x + diffX,
            y: this.drag.translation.y + diffY
          };
          this.body.emitter.emit('_requestRedraw');
        }
      }
    }


  }, {
    key: 'onDragEnd',
    value: function onDragEnd(event) {
      this.drag.dragging = false;
      var selection = this.drag.selection;
      if (selection && selection.length) {
        selection.forEach(function (s) {
          s.node.options.fixed.x = s.xFixed;
          s.node.options.fixed.y = s.yFixed;
        });
        this.selectionHandler._generateClickEvent('dragEnd', event, this.getPointer(event.center));
        this.body.emitter.emit('startSimulation');
      } else {
        this.selectionHandler._generateClickEvent('dragEnd', event, this.getPointer(event.center), undefined, true);
        this.body.emitter.emit('_requestRedraw');
      }
    }


  }, {
    key: 'onPinch',
    value: function onPinch(event) {
      var pointer = this.getPointer(event.center);

      this.drag.pinched = true;
      if (this.pinch['scale'] === undefined) {
        this.pinch.scale = 1;
      }

      var scale = this.pinch.scale * event.scale;
      this.zoom(scale, pointer);
    }


  }, {
    key: 'zoom',
    value: function zoom(scale, pointer) {
      if (this.options.zoomView === true) {
        var scaleOld = this.body.view.scale;
        if (scale < 0.00001) {
          scale = 0.00001;
        }
        if (scale > 10) {
          scale = 10;
        }

        var preScaleDragPointer = undefined;
        if (this.drag !== undefined) {
          if (this.drag.dragging === true) {
            preScaleDragPointer = this.canvas.DOMtoCanvas(this.drag.pointer);
          }
        }
        var translation = this.body.view.translation;

        var scaleFrac = scale / scaleOld;
        var tx = (1 - scaleFrac) * pointer.x + translation.x * scaleFrac;
        var ty = (1 - scaleFrac) * pointer.y + translation.y * scaleFrac;

        this.body.view.scale = scale;
        this.body.view.translation = { x: tx, y: ty };

        if (preScaleDragPointer != undefined) {
          var postScaleDragPointer = this.canvas.canvasToDOM(preScaleDragPointer);
          this.drag.pointer.x = postScaleDragPointer.x;
          this.drag.pointer.y = postScaleDragPointer.y;
        }

        this.body.emitter.emit('_requestRedraw');

        if (scaleOld < scale) {
          this.body.emitter.emit('zoom', {
            direction: '+',
            scale: this.body.view.scale,
            pointer: pointer
          });
        } else {
          this.body.emitter.emit('zoom', {
            direction: '-',
            scale: this.body.view.scale,
            pointer: pointer
          });
        }
      }
    }


  }, {
    key: 'onMouseWheel',
    value: function onMouseWheel(event) {
      if (this.options.zoomView === true) {
        var delta = 0;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
        } else if (event.detail) {
          delta = -event.detail / 3;
        }

        if (delta !== 0) {
          var scale = this.body.view.scale;
          var zoom = delta * (this.options.zoomSpeed / 10);
          if (delta < 0) {
            zoom = zoom / (1 - zoom);
          }
          scale *= 1 + zoom;

          var pointer = this.getPointer({ x: event.clientX, y: event.clientY });

          this.zoom(scale, pointer);
        }

        event.preventDefault();
      }
    }


  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var _this3 = this;

      var pointer = this.getPointer({ x: event.clientX, y: event.clientY });
      var popupVisible = false;

      if (this.popup !== undefined) {
        if (this.popup.hidden === false) {
          this._checkHidePopup(pointer);
        }

        if (this.popup.hidden === false) {
          popupVisible = true;
          this.popup.setPosition(pointer.x + 3, pointer.y - 5);
          this.popup.show();
        }
      }

      if (this.options.keyboard.bindToWindow === false && this.options.keyboard.enabled === true) {
        this.canvas.frame.focus();
      }

      if (popupVisible === false) {
        if (this.popupTimer !== undefined) {
          clearInterval(this.popupTimer); 
          this.popupTimer = undefined;
        }
        if (!this.drag.dragging) {
          this.popupTimer = setTimeout(function () {
            return _this3._checkShowPopup(pointer);
          }, this.options.tooltipDelay);
        }
      }

      if (this.options.hover === true) {
        this.selectionHandler.hoverObject(event, pointer);
      }
    }


  }, {
    key: '_checkShowPopup',
    value: function _checkShowPopup(pointer) {
      var x = this.canvas._XconvertDOMtoCanvas(pointer.x);
      var y = this.canvas._YconvertDOMtoCanvas(pointer.y);
      var pointerObj = {
        left: x,
        top: y,
        right: x,
        bottom: y
      };

      var previousPopupObjId = this.popupObj === undefined ? undefined : this.popupObj.id;
      var nodeUnderCursor = false;
      var popupType = 'node';

      if (this.popupObj === undefined) {
        var nodeIndices = this.body.nodeIndices;
        var nodes = this.body.nodes;
        var node = void 0;
        var overlappingNodes = [];
        for (var i = 0; i < nodeIndices.length; i++) {
          node = nodes[nodeIndices[i]];
          if (node.isOverlappingWith(pointerObj) === true) {
            nodeUnderCursor = true;
            if (node.getTitle() !== undefined) {
              overlappingNodes.push(nodeIndices[i]);
            }
          }
        }

        if (overlappingNodes.length > 0) {
          this.popupObj = nodes[overlappingNodes[overlappingNodes.length - 1]];
          nodeUnderCursor = true;
        }
      }

      if (this.popupObj === undefined && nodeUnderCursor === false) {
        var edgeIndices = this.body.edgeIndices;
        var edges = this.body.edges;
        var edge = void 0;
        var overlappingEdges = [];
        for (var _i = 0; _i < edgeIndices.length; _i++) {
          edge = edges[edgeIndices[_i]];
          if (edge.isOverlappingWith(pointerObj) === true) {
            if (edge.connected === true && edge.getTitle() !== undefined) {
              overlappingEdges.push(edgeIndices[_i]);
            }
          }
        }

        if (overlappingEdges.length > 0) {
          this.popupObj = edges[overlappingEdges[overlappingEdges.length - 1]];
          popupType = 'edge';
        }
      }

      if (this.popupObj !== undefined) {
        if (this.popupObj.id !== previousPopupObjId) {
          if (this.popup === undefined) {
            this.popup = new Popup(this.canvas.frame);
          }

          this.popup.popupTargetType = popupType;
          this.popup.popupTargetId = this.popupObj.id;

          this.popup.setPosition(pointer.x + 3, pointer.y - 5);
          this.popup.setText(this.popupObj.getTitle());
          this.popup.show();
          this.body.emitter.emit('showPopup', this.popupObj.id);
        }
      } else {
        if (this.popup !== undefined) {
          this.popup.hide();
          this.body.emitter.emit('hidePopup');
        }
      }
    }


  }, {
    key: '_checkHidePopup',
    value: function _checkHidePopup(pointer) {
      var pointerObj = this.selectionHandler._pointerToPositionObject(pointer);

      var stillOnObj = false;
      if (this.popup.popupTargetType === 'node') {
        if (this.body.nodes[this.popup.popupTargetId] !== undefined) {
          stillOnObj = this.body.nodes[this.popup.popupTargetId].isOverlappingWith(pointerObj);

          if (stillOnObj === true) {
            var overNode = this.selectionHandler.getNodeAt(pointer);
            stillOnObj = overNode === undefined ? false : overNode.id === this.popup.popupTargetId;
          }
        }
      } else {
        if (this.selectionHandler.getNodeAt(pointer) === undefined) {
          if (this.body.edges[this.popup.popupTargetId] !== undefined) {
            stillOnObj = this.body.edges[this.popup.popupTargetId].isOverlappingWith(pointerObj);
          }
        }
      }

      if (stillOnObj === false) {
        this.popupObj = undefined;
        this.popup.hide();
        this.body.emitter.emit('hidePopup');
      }
    }
  }]);
  return InteractionHandler;
}();

exports['default'] = InteractionHandler;

 }),
 (function(module, exports, __nested_webpack_require_1028063__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_1028063__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1028063__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Hammer = __nested_webpack_require_1028063__(24);
var hammerUtil = __nested_webpack_require_1028063__(36);
var keycharm = __nested_webpack_require_1028063__(52);


var NavigationHandler = function () {
  function NavigationHandler(body, canvas) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, NavigationHandler);

    this.body = body;
    this.canvas = canvas;

    this.iconsCreated = false;
    this.navigationHammers = [];
    this.boundFunctions = {};
    this.touchTime = 0;
    this.activated = false;

    this.body.emitter.on('activate', function () {
      _this.activated = true;
      _this.configureKeyboardBindings();
    });
    this.body.emitter.on('deactivate', function () {
      _this.activated = false;
      _this.configureKeyboardBindings();
    });
    this.body.emitter.on('destroy', function () {
      if (_this.keycharm !== undefined) {
        _this.keycharm.destroy();
      }
    });

    this.options = {};
  }



  (0, _createClass3['default'])(NavigationHandler, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options !== undefined) {
        this.options = options;
        this.create();
      }
    }


  }, {
    key: 'create',
    value: function create() {
      if (this.options.navigationButtons === true) {
        if (this.iconsCreated === false) {
          this.loadNavigationElements();
        }
      } else if (this.iconsCreated === true) {
        this.cleanNavigation();
      }

      this.configureKeyboardBindings();
    }


  }, {
    key: 'cleanNavigation',
    value: function cleanNavigation() {
      if (this.navigationHammers.length != 0) {
        for (var i = 0; i < this.navigationHammers.length; i++) {
          this.navigationHammers[i].destroy();
        }
        this.navigationHammers = [];
      }

      if (this.navigationDOM && this.navigationDOM['wrapper'] && this.navigationDOM['wrapper'].parentNode) {
        this.navigationDOM['wrapper'].parentNode.removeChild(this.navigationDOM['wrapper']);
      }

      this.iconsCreated = false;
    }


  }, {
    key: 'loadNavigationElements',
    value: function loadNavigationElements() {
      var _this2 = this;

      this.cleanNavigation();

      this.navigationDOM = {};
      var navigationDivs = ['up', 'down', 'left', 'right', 'zoomIn', 'zoomOut', 'zoomExtends'];
      var navigationDivActions = ['_moveUp', '_moveDown', '_moveLeft', '_moveRight', '_zoomIn', '_zoomOut', '_fit'];

      this.navigationDOM['wrapper'] = document.createElement('div');
      this.navigationDOM['wrapper'].className = 'vis-navigation';
      this.canvas.frame.appendChild(this.navigationDOM['wrapper']);

      for (var i = 0; i < navigationDivs.length; i++) {
        this.navigationDOM[navigationDivs[i]] = document.createElement('div');
        this.navigationDOM[navigationDivs[i]].className = 'vis-button vis-' + navigationDivs[i];
        this.navigationDOM['wrapper'].appendChild(this.navigationDOM[navigationDivs[i]]);

        var hammer = new Hammer(this.navigationDOM[navigationDivs[i]]);
        if (navigationDivActions[i] === '_fit') {
          hammerUtil.onTouch(hammer, this._fit.bind(this));
        } else {
          hammerUtil.onTouch(hammer, this.bindToRedraw.bind(this, navigationDivActions[i]));
        }

        this.navigationHammers.push(hammer);
      }

      var hammerFrame = new Hammer(this.canvas.frame);
      hammerUtil.onRelease(hammerFrame, function () {
        _this2._stopMovement();
      });
      this.navigationHammers.push(hammerFrame);

      this.iconsCreated = true;
    }


  }, {
    key: 'bindToRedraw',
    value: function bindToRedraw(action) {
      if (this.boundFunctions[action] === undefined) {
        this.boundFunctions[action] = this[action].bind(this);
        this.body.emitter.on('initRedraw', this.boundFunctions[action]);
        this.body.emitter.emit('_startRendering');
      }
    }


  }, {
    key: 'unbindFromRedraw',
    value: function unbindFromRedraw(action) {
      if (this.boundFunctions[action] !== undefined) {
        this.body.emitter.off('initRedraw', this.boundFunctions[action]);
        this.body.emitter.emit('_stopRendering');
        delete this.boundFunctions[action];
      }
    }


  }, {
    key: '_fit',
    value: function _fit() {
      if (new Date().valueOf() - this.touchTime > 700) {
        this.body.emitter.emit('fit', { duration: 700 });
        this.touchTime = new Date().valueOf();
      }
    }


  }, {
    key: '_stopMovement',
    value: function _stopMovement() {
      for (var boundAction in this.boundFunctions) {
        if (this.boundFunctions.hasOwnProperty(boundAction)) {
          this.body.emitter.off('initRedraw', this.boundFunctions[boundAction]);
          this.body.emitter.emit('_stopRendering');
        }
      }
      this.boundFunctions = {};
    }

  }, {
    key: '_moveUp',
    value: function _moveUp() {
      this.body.view.translation.y += this.options.keyboard.speed.y;
    }

  }, {
    key: '_moveDown',
    value: function _moveDown() {
      this.body.view.translation.y -= this.options.keyboard.speed.y;
    }

  }, {
    key: '_moveLeft',
    value: function _moveLeft() {
      this.body.view.translation.x += this.options.keyboard.speed.x;
    }

  }, {
    key: '_moveRight',
    value: function _moveRight() {
      this.body.view.translation.x -= this.options.keyboard.speed.x;
    }

  }, {
    key: '_zoomIn',
    value: function _zoomIn() {
      var scaleOld = this.body.view.scale;
      var scale = this.body.view.scale * (1 + this.options.keyboard.speed.zoom);
      var translation = this.body.view.translation;
      var scaleFrac = scale / scaleOld;
      var tx = (1 - scaleFrac) * this.canvas.canvasViewCenter.x + translation.x * scaleFrac;
      var ty = (1 - scaleFrac) * this.canvas.canvasViewCenter.y + translation.y * scaleFrac;

      this.body.view.scale = scale;
      this.body.view.translation = { x: tx, y: ty };
      this.body.emitter.emit('zoom', {
        direction: '+',
        scale: this.body.view.scale,
        pointer: null
      });
    }


  }, {
    key: '_zoomOut',
    value: function _zoomOut() {
      var scaleOld = this.body.view.scale;
      var scale = this.body.view.scale / (1 + this.options.keyboard.speed.zoom);
      var translation = this.body.view.translation;
      var scaleFrac = scale / scaleOld;
      var tx = (1 - scaleFrac) * this.canvas.canvasViewCenter.x + translation.x * scaleFrac;
      var ty = (1 - scaleFrac) * this.canvas.canvasViewCenter.y + translation.y * scaleFrac;

      this.body.view.scale = scale;
      this.body.view.translation = { x: tx, y: ty };
      this.body.emitter.emit('zoom', {
        direction: '-',
        scale: this.body.view.scale,
        pointer: null
      });
    }


  }, {
    key: 'configureKeyboardBindings',
    value: function configureKeyboardBindings() {
      var _this3 = this;

      if (this.keycharm !== undefined) {
        this.keycharm.destroy();
      }

      if (this.options.keyboard.enabled === true) {
        if (this.options.keyboard.bindToWindow === true) {
          this.keycharm = keycharm({ container: window, preventDefault: true });
        } else {
          this.keycharm = keycharm({
            container: this.canvas.frame,
            preventDefault: true
          });
        }

        this.keycharm.reset();

        if (this.activated === true) {
          this.keycharm.bind('up', function () {
            _this3.bindToRedraw('_moveUp');
          }, 'keydown');
          this.keycharm.bind('down', function () {
            _this3.bindToRedraw('_moveDown');
          }, 'keydown');
          this.keycharm.bind('left', function () {
            _this3.bindToRedraw('_moveLeft');
          }, 'keydown');
          this.keycharm.bind('right', function () {
            _this3.bindToRedraw('_moveRight');
          }, 'keydown');
          this.keycharm.bind('=', function () {
            _this3.bindToRedraw('_zoomIn');
          }, 'keydown');
          this.keycharm.bind('num+', function () {
            _this3.bindToRedraw('_zoomIn');
          }, 'keydown');
          this.keycharm.bind('num-', function () {
            _this3.bindToRedraw('_zoomOut');
          }, 'keydown');
          this.keycharm.bind('-', function () {
            _this3.bindToRedraw('_zoomOut');
          }, 'keydown');
          this.keycharm.bind('[', function () {
            _this3.bindToRedraw('_zoomOut');
          }, 'keydown');
          this.keycharm.bind(']', function () {
            _this3.bindToRedraw('_zoomIn');
          }, 'keydown');
          this.keycharm.bind('pageup', function () {
            _this3.bindToRedraw('_zoomIn');
          }, 'keydown');
          this.keycharm.bind('pagedown', function () {
            _this3.bindToRedraw('_zoomOut');
          }, 'keydown');

          this.keycharm.bind('up', function () {
            _this3.unbindFromRedraw('_moveUp');
          }, 'keyup');
          this.keycharm.bind('down', function () {
            _this3.unbindFromRedraw('_moveDown');
          }, 'keyup');
          this.keycharm.bind('left', function () {
            _this3.unbindFromRedraw('_moveLeft');
          }, 'keyup');
          this.keycharm.bind('right', function () {
            _this3.unbindFromRedraw('_moveRight');
          }, 'keyup');
          this.keycharm.bind('=', function () {
            _this3.unbindFromRedraw('_zoomIn');
          }, 'keyup');
          this.keycharm.bind('num+', function () {
            _this3.unbindFromRedraw('_zoomIn');
          }, 'keyup');
          this.keycharm.bind('num-', function () {
            _this3.unbindFromRedraw('_zoomOut');
          }, 'keyup');
          this.keycharm.bind('-', function () {
            _this3.unbindFromRedraw('_zoomOut');
          }, 'keyup');
          this.keycharm.bind('[', function () {
            _this3.unbindFromRedraw('_zoomOut');
          }, 'keyup');
          this.keycharm.bind(']', function () {
            _this3.unbindFromRedraw('_zoomIn');
          }, 'keyup');
          this.keycharm.bind('pageup', function () {
            _this3.unbindFromRedraw('_zoomIn');
          }, 'keyup');
          this.keycharm.bind('pagedown', function () {
            _this3.unbindFromRedraw('_zoomOut');
          }, 'keyup');
        }
      }
    }
  }]);
  return NavigationHandler;
}();

exports['default'] = NavigationHandler;

 }),
 (function(module, exports, __nested_webpack_require_1040705__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_1040705__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1040705__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Popup = function () {
  function Popup(container, overflowMethod) {
    (0, _classCallCheck3['default'])(this, Popup);

    this.container = container;
    this.overflowMethod = overflowMethod || 'cap';

    this.x = 0;
    this.y = 0;
    this.padding = 5;
    this.hidden = false;

    this.frame = document.createElement('div');
    this.frame.className = 'vis-tooltip';
    this.container.appendChild(this.frame);
  }



  (0, _createClass3['default'])(Popup, [{
    key: 'setPosition',
    value: function setPosition(x, y) {
      this.x = parseInt(x);
      this.y = parseInt(y);
    }


  }, {
    key: 'setText',
    value: function setText(content) {
      if (content instanceof Element) {
        this.frame.innerHTML = '';
        this.frame.appendChild(content);
      } else {
        this.frame.innerHTML = content; 
      }
    }


  }, {
    key: 'show',
    value: function show(doShow) {
      if (doShow === undefined) {
        doShow = true;
      }

      if (doShow === true) {
        var height = this.frame.clientHeight;
        var width = this.frame.clientWidth;
        var maxHeight = this.frame.parentNode.clientHeight;
        var maxWidth = this.frame.parentNode.clientWidth;

        var left = 0,
            top = 0;

        if (this.overflowMethod == 'flip') {
          var isLeft = false,
              isTop = true; 

          if (this.y - height < this.padding) {
            isTop = false;
          }

          if (this.x + width > maxWidth - this.padding) {
            isLeft = true;
          }

          if (isLeft) {
            left = this.x - width;
          } else {
            left = this.x;
          }

          if (isTop) {
            top = this.y - height;
          } else {
            top = this.y;
          }
        } else {
          top = this.y - height;
          if (top + height + this.padding > maxHeight) {
            top = maxHeight - height - this.padding;
          }
          if (top < this.padding) {
            top = this.padding;
          }

          left = this.x;
          if (left + width + this.padding > maxWidth) {
            left = maxWidth - width - this.padding;
          }
          if (left < this.padding) {
            left = this.padding;
          }
        }

        this.frame.style.left = left + 'px';
        this.frame.style.top = top + 'px';
        this.frame.style.visibility = 'visible';
        this.hidden = false;
      } else {
        this.hide();
      }
    }


  }, {
    key: 'hide',
    value: function hide() {
      this.hidden = true;
      this.frame.style.left = '0';
      this.frame.style.top = '0';
      this.frame.style.visibility = 'hidden';
    }


  }, {
    key: 'destroy',
    value: function destroy() {
      this.frame.parentNode.removeChild(this.frame); 
    }
  }]);
  return Popup;
}();

exports['default'] = Popup;

 }),
 (function(module, exports, __nested_webpack_require_1044884__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __nested_webpack_require_1044884__(9);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __nested_webpack_require_1044884__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1044884__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Node = __nested_webpack_require_1044884__(34)['default'];
var Edge = __nested_webpack_require_1044884__(55)['default'];

var util = __nested_webpack_require_1044884__(2);


var SelectionHandler = function () {
  function SelectionHandler(body, canvas) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, SelectionHandler);

    this.body = body;
    this.canvas = canvas;
    this.selectionObj = { nodes: [], edges: [] };
    this.hoverObj = { nodes: {}, edges: {} };

    this.options = {};
    this.defaultOptions = {
      multiselect: false,
      selectable: true,
      selectConnectedEdges: true,
      hoverConnectedEdges: true
    };
    util.extend(this.options, this.defaultOptions);

    this.body.emitter.on('_dataChanged', function () {
      _this.updateSelection();
    });
  }



  (0, _createClass3['default'])(SelectionHandler, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options !== undefined) {
        var fields = ['multiselect', 'hoverConnectedEdges', 'selectable', 'selectConnectedEdges'];
        util.selectiveDeepExtend(fields, this.options, options);
      }
    }


  }, {
    key: 'selectOnPoint',
    value: function selectOnPoint(pointer) {
      var selected = false;
      if (this.options.selectable === true) {
        var obj = this.getNodeAt(pointer) || this.getEdgeAt(pointer);

        this.unselectAll();

        if (obj !== undefined) {
          selected = this.selectObject(obj);
        }
        this.body.emitter.emit('_requestRedraw');
      }
      return selected;
    }


  }, {
    key: 'selectAdditionalOnPoint',
    value: function selectAdditionalOnPoint(pointer) {
      var selectionChanged = false;
      if (this.options.selectable === true) {
        var obj = this.getNodeAt(pointer) || this.getEdgeAt(pointer);

        if (obj !== undefined) {
          selectionChanged = true;
          if (obj.isSelected() === true) {
            this.deselectObject(obj);
          } else {
            this.selectObject(obj);
          }

          this.body.emitter.emit('_requestRedraw');
        }
      }
      return selectionChanged;
    }


  }, {
    key: '_initBaseEvent',
    value: function _initBaseEvent(event, pointer) {
      var properties = {};

      properties['pointer'] = {
        DOM: { x: pointer.x, y: pointer.y },
        canvas: this.canvas.DOMtoCanvas(pointer)
      };
      properties['event'] = event;

      return properties;
    }


  }, {
    key: '_generateClickEvent',
    value: function _generateClickEvent(eventType, event, pointer, oldSelection) {
      var emptySelection = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      var properties = this._initBaseEvent(event, pointer);

      if (emptySelection === true) {
        properties.nodes = [];
        properties.edges = [];
      } else {
        var tmp = this.getSelection();
        properties.nodes = tmp.nodes;
        properties.edges = tmp.edges;
      }

      if (oldSelection !== undefined) {
        properties['previousSelection'] = oldSelection;
      }

      if (eventType == 'click') {
        properties.items = this.getClickedItems(pointer);
      }

      if (event.controlEdge !== undefined) {
        properties.controlEdge = event.controlEdge;
      }

      this.body.emitter.emit(eventType, properties);
    }


  }, {
    key: 'selectObject',
    value: function selectObject(obj) {
      var highlightEdges = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.selectConnectedEdges;

      if (obj !== undefined) {
        if (obj instanceof Node) {
          if (highlightEdges === true) {
            this._selectConnectedEdges(obj);
          }
        }
        obj.select();
        this._addToSelection(obj);
        return true;
      }
      return false;
    }


  }, {
    key: 'deselectObject',
    value: function deselectObject(obj) {
      if (obj.isSelected() === true) {
        obj.selected = false;
        this._removeFromSelection(obj);
      }
    }


  }, {
    key: '_getAllNodesOverlappingWith',
    value: function _getAllNodesOverlappingWith(object) {
      var overlappingNodes = [];
      var nodes = this.body.nodes;
      for (var i = 0; i < this.body.nodeIndices.length; i++) {
        var nodeId = this.body.nodeIndices[i];
        if (nodes[nodeId].isOverlappingWith(object)) {
          overlappingNodes.push(nodeId);
        }
      }
      return overlappingNodes;
    }


  }, {
    key: '_pointerToPositionObject',
    value: function _pointerToPositionObject(pointer) {
      var canvasPos = this.canvas.DOMtoCanvas(pointer);
      return {
        left: canvasPos.x - 1,
        top: canvasPos.y + 1,
        right: canvasPos.x + 1,
        bottom: canvasPos.y - 1
      };
    }


  }, {
    key: 'getNodeAt',
    value: function getNodeAt(pointer) {
      var returnNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var positionObject = this._pointerToPositionObject(pointer);
      var overlappingNodes = this._getAllNodesOverlappingWith(positionObject);
      if (overlappingNodes.length > 0) {
        if (returnNode === true) {
          return this.body.nodes[overlappingNodes[overlappingNodes.length - 1]];
        } else {
          return overlappingNodes[overlappingNodes.length - 1];
        }
      } else {
        return undefined;
      }
    }


  }, {
    key: '_getEdgesOverlappingWith',
    value: function _getEdgesOverlappingWith(object, overlappingEdges) {
      var edges = this.body.edges;
      for (var i = 0; i < this.body.edgeIndices.length; i++) {
        var edgeId = this.body.edgeIndices[i];
        if (edges[edgeId].isOverlappingWith(object)) {
          overlappingEdges.push(edgeId);
        }
      }
    }


  }, {
    key: '_getAllEdgesOverlappingWith',
    value: function _getAllEdgesOverlappingWith(object) {
      var overlappingEdges = [];
      this._getEdgesOverlappingWith(object, overlappingEdges);
      return overlappingEdges;
    }


  }, {
    key: 'getEdgeAt',
    value: function getEdgeAt(pointer) {
      var returnEdge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var canvasPos = this.canvas.DOMtoCanvas(pointer);
      var mindist = 10;
      var overlappingEdge = null;
      var edges = this.body.edges;
      for (var i = 0; i < this.body.edgeIndices.length; i++) {
        var edgeId = this.body.edgeIndices[i];
        var edge = edges[edgeId];
        if (edge.connected) {
          var xFrom = edge.from.x;
          var yFrom = edge.from.y;
          var xTo = edge.to.x;
          var yTo = edge.to.y;
          var dist = edge.edgeType.getDistanceToEdge(xFrom, yFrom, xTo, yTo, canvasPos.x, canvasPos.y);
          if (dist < mindist) {
            overlappingEdge = edgeId;
            mindist = dist;
          }
        }
      }
      if (overlappingEdge !== null) {
        if (returnEdge === true) {
          return this.body.edges[overlappingEdge];
        } else {
          return overlappingEdge;
        }
      } else {
        return undefined;
      }
    }


  }, {
    key: '_addToSelection',
    value: function _addToSelection(obj) {
      if (obj instanceof Node) {
        this.selectionObj.nodes[obj.id] = obj;
      } else {
        this.selectionObj.edges[obj.id] = obj;
      }
    }


  }, {
    key: '_addToHover',
    value: function _addToHover(obj) {
      if (obj instanceof Node) {
        this.hoverObj.nodes[obj.id] = obj;
      } else {
        this.hoverObj.edges[obj.id] = obj;
      }
    }


  }, {
    key: '_removeFromSelection',
    value: function _removeFromSelection(obj) {
      if (obj instanceof Node) {
        delete this.selectionObj.nodes[obj.id];
        this._unselectConnectedEdges(obj);
      } else {
        delete this.selectionObj.edges[obj.id];
      }
    }


  }, {
    key: 'unselectAll',
    value: function unselectAll() {
      for (var nodeId in this.selectionObj.nodes) {
        if (this.selectionObj.nodes.hasOwnProperty(nodeId)) {
          this.selectionObj.nodes[nodeId].unselect();
        }
      }
      for (var edgeId in this.selectionObj.edges) {
        if (this.selectionObj.edges.hasOwnProperty(edgeId)) {
          this.selectionObj.edges[edgeId].unselect();
        }
      }

      this.selectionObj = { nodes: {}, edges: {} };
    }


  }, {
    key: '_getSelectedNodeCount',
    value: function _getSelectedNodeCount() {
      var count = 0;
      for (var nodeId in this.selectionObj.nodes) {
        if (this.selectionObj.nodes.hasOwnProperty(nodeId)) {
          count += 1;
        }
      }
      return count;
    }


  }, {
    key: '_getSelectedNode',
    value: function _getSelectedNode() {
      for (var nodeId in this.selectionObj.nodes) {
        if (this.selectionObj.nodes.hasOwnProperty(nodeId)) {
          return this.selectionObj.nodes[nodeId];
        }
      }
      return undefined;
    }


  }, {
    key: '_getSelectedEdge',
    value: function _getSelectedEdge() {
      for (var edgeId in this.selectionObj.edges) {
        if (this.selectionObj.edges.hasOwnProperty(edgeId)) {
          return this.selectionObj.edges[edgeId];
        }
      }
      return undefined;
    }


  }, {
    key: '_getSelectedEdgeCount',
    value: function _getSelectedEdgeCount() {
      var count = 0;
      for (var edgeId in this.selectionObj.edges) {
        if (this.selectionObj.edges.hasOwnProperty(edgeId)) {
          count += 1;
        }
      }
      return count;
    }


  }, {
    key: '_getSelectedObjectCount',
    value: function _getSelectedObjectCount() {
      var count = 0;
      for (var nodeId in this.selectionObj.nodes) {
        if (this.selectionObj.nodes.hasOwnProperty(nodeId)) {
          count += 1;
        }
      }
      for (var edgeId in this.selectionObj.edges) {
        if (this.selectionObj.edges.hasOwnProperty(edgeId)) {
          count += 1;
        }
      }
      return count;
    }


  }, {
    key: '_selectionIsEmpty',
    value: function _selectionIsEmpty() {
      for (var nodeId in this.selectionObj.nodes) {
        if (this.selectionObj.nodes.hasOwnProperty(nodeId)) {
          return false;
        }
      }
      for (var edgeId in this.selectionObj.edges) {
        if (this.selectionObj.edges.hasOwnProperty(edgeId)) {
          return false;
        }
      }
      return true;
    }


  }, {
    key: '_clusterInSelection',
    value: function _clusterInSelection() {
      for (var nodeId in this.selectionObj.nodes) {
        if (this.selectionObj.nodes.hasOwnProperty(nodeId)) {
          if (this.selectionObj.nodes[nodeId].clusterSize > 1) {
            return true;
          }
        }
      }
      return false;
    }


  }, {
    key: '_selectConnectedEdges',
    value: function _selectConnectedEdges(node) {
      for (var i = 0; i < node.edges.length; i++) {
        var edge = node.edges[i];
        edge.select();
        this._addToSelection(edge);
      }
    }


  }, {
    key: '_hoverConnectedEdges',
    value: function _hoverConnectedEdges(node) {
      for (var i = 0; i < node.edges.length; i++) {
        var edge = node.edges[i];
        edge.hover = true;
        this._addToHover(edge);
      }
    }


  }, {
    key: '_unselectConnectedEdges',
    value: function _unselectConnectedEdges(node) {
      for (var i = 0; i < node.edges.length; i++) {
        var edge = node.edges[i];
        edge.unselect();
        this._removeFromSelection(edge);
      }
    }


  }, {
    key: 'emitBlurEvent',
    value: function emitBlurEvent(event, pointer, object) {
      var properties = this._initBaseEvent(event, pointer);

      if (object.hover === true) {
        object.hover = false;
        if (object instanceof Node) {
          properties.node = object.id;
          this.body.emitter.emit('blurNode', properties);
        } else {
          properties.edge = object.id;
          this.body.emitter.emit('blurEdge', properties);
        }
      }
    }


  }, {
    key: 'emitHoverEvent',
    value: function emitHoverEvent(event, pointer, object) {
      var properties = this._initBaseEvent(event, pointer);
      var hoverChanged = false;

      if (object.hover === false) {
        object.hover = true;
        this._addToHover(object);
        hoverChanged = true;
        if (object instanceof Node) {
          properties.node = object.id;
          this.body.emitter.emit('hoverNode', properties);
        } else {
          properties.edge = object.id;
          this.body.emitter.emit('hoverEdge', properties);
        }
      }

      return hoverChanged;
    }


  }, {
    key: 'hoverObject',
    value: function hoverObject(event, pointer) {
      var object = this.getNodeAt(pointer);
      if (object === undefined) {
        object = this.getEdgeAt(pointer);
      }

      var hoverChanged = false;
      for (var nodeId in this.hoverObj.nodes) {
        if (this.hoverObj.nodes.hasOwnProperty(nodeId)) {
          if (object === undefined || object instanceof Node && object.id != nodeId || object instanceof Edge) {
            this.emitBlurEvent(event, pointer, this.hoverObj.nodes[nodeId]);
            delete this.hoverObj.nodes[nodeId];
            hoverChanged = true;
          }
        }
      }

      for (var edgeId in this.hoverObj.edges) {
        if (this.hoverObj.edges.hasOwnProperty(edgeId)) {
          if (hoverChanged === true) {
            this.hoverObj.edges[edgeId].hover = false;
            delete this.hoverObj.edges[edgeId];
          }
          else if (object === undefined || object instanceof Edge && object.id != edgeId || object instanceof Node && !object.hover) {
              this.emitBlurEvent(event, pointer, this.hoverObj.edges[edgeId]);
              delete this.hoverObj.edges[edgeId];
              hoverChanged = true;
            }
        }
      }

      if (object !== undefined) {
        var hoveredEdgesCount = (0, _keys2['default'])(this.hoverObj.edges).length;
        var hoveredNodesCount = (0, _keys2['default'])(this.hoverObj.nodes).length;
        var newOnlyHoveredEdge = object instanceof Edge && hoveredEdgesCount === 0 && hoveredNodesCount === 0;

        if (hoverChanged || newOnlyHoveredEdge) {
          hoverChanged = this.emitHoverEvent(event, pointer, object);
        }

        if (object instanceof Node && this.options.hoverConnectedEdges === true) {
          this._hoverConnectedEdges(object);
        }
      }

      if (hoverChanged === true) {
        this.body.emitter.emit('_requestRedraw');
      }
    }


  }, {
    key: 'getSelection',
    value: function getSelection() {
      var nodeIds = this.getSelectedNodes();
      var edgeIds = this.getSelectedEdges();
      return { nodes: nodeIds, edges: edgeIds };
    }


  }, {
    key: 'getSelectedNodes',
    value: function getSelectedNodes() {
      var idArray = [];
      if (this.options.selectable === true) {
        for (var nodeId in this.selectionObj.nodes) {
          if (this.selectionObj.nodes.hasOwnProperty(nodeId)) {
            idArray.push(this.selectionObj.nodes[nodeId].id);
          }
        }
      }
      return idArray;
    }


  }, {
    key: 'getSelectedEdges',
    value: function getSelectedEdges() {
      var idArray = [];
      if (this.options.selectable === true) {
        for (var edgeId in this.selectionObj.edges) {
          if (this.selectionObj.edges.hasOwnProperty(edgeId)) {
            idArray.push(this.selectionObj.edges[edgeId].id);
          }
        }
      }
      return idArray;
    }


  }, {
    key: 'setSelection',
    value: function setSelection(selection) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var i = void 0,
          id = void 0;

      if (!selection || !selection.nodes && !selection.edges) throw 'Selection must be an object with nodes and/or edges properties';
      if (options.unselectAll || options.unselectAll === undefined) {
        this.unselectAll();
      }
      if (selection.nodes) {
        for (i = 0; i < selection.nodes.length; i++) {
          id = selection.nodes[i];

          var node = this.body.nodes[id];
          if (!node) {
            throw new RangeError('Node with id "' + id + '" not found');
          }
          this.selectObject(node, options.highlightEdges);
        }
      }

      if (selection.edges) {
        for (i = 0; i < selection.edges.length; i++) {
          id = selection.edges[i];

          var edge = this.body.edges[id];
          if (!edge) {
            throw new RangeError('Edge with id "' + id + '" not found');
          }
          this.selectObject(edge);
        }
      }
      this.body.emitter.emit('_requestRedraw');
    }


  }, {
    key: 'selectNodes',
    value: function selectNodes(selection) {
      var highlightEdges = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!selection || selection.length === undefined) throw 'Selection must be an array with ids';

      this.setSelection({ nodes: selection }, { highlightEdges: highlightEdges });
    }


  }, {
    key: 'selectEdges',
    value: function selectEdges(selection) {
      if (!selection || selection.length === undefined) throw 'Selection must be an array with ids';

      this.setSelection({ edges: selection });
    }


  }, {
    key: 'updateSelection',
    value: function updateSelection() {
      for (var nodeId in this.selectionObj.nodes) {
        if (this.selectionObj.nodes.hasOwnProperty(nodeId)) {
          if (!this.body.nodes.hasOwnProperty(nodeId)) {
            delete this.selectionObj.nodes[nodeId];
          }
        }
      }
      for (var edgeId in this.selectionObj.edges) {
        if (this.selectionObj.edges.hasOwnProperty(edgeId)) {
          if (!this.body.edges.hasOwnProperty(edgeId)) {
            delete this.selectionObj.edges[edgeId];
          }
        }
      }
    }


  }, {
    key: 'getClickedItems',
    value: function getClickedItems(pointer) {
      var point = this.canvas.DOMtoCanvas(pointer);
      var items = [];

      var nodeIndices = this.body.nodeIndices;
      var nodes = this.body.nodes;
      for (var i = nodeIndices.length - 1; i >= 0; i--) {
        var node = nodes[nodeIndices[i]];
        var ret = node.getItemsOnPoint(point);
        items.push.apply(items, ret); 
      }

      var edgeIndices = this.body.edgeIndices;
      var edges = this.body.edges;
      for (var _i = edgeIndices.length - 1; _i >= 0; _i--) {
        var edge = edges[edgeIndices[_i]];
        var _ret = edge.getItemsOnPoint(point);
        items.push.apply(items, _ret); 
      }

      return items;
    }
  }]);
  return SelectionHandler;
}();

exports['default'] = SelectionHandler;

 }),
 (function(module, exports, __nested_webpack_require_1073236__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __nested_webpack_require_1073236__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __nested_webpack_require_1073236__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __nested_webpack_require_1073236__(9);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __nested_webpack_require_1073236__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1073236__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TimSort = __nested_webpack_require_1073236__(83);
var util = __nested_webpack_require_1073236__(2);
var NetworkUtil = __nested_webpack_require_1073236__(57)['default'];

var _require = __nested_webpack_require_1073236__(189),
    HorizontalStrategy = _require.HorizontalStrategy,
    VerticalStrategy = _require.VerticalStrategy;



var HierarchicalStatus = function () {
  function HierarchicalStatus() {
    (0, _classCallCheck3['default'])(this, HierarchicalStatus);

    this.childrenReference = {}; 
    this.parentReference = {}; 
    this.trees = {}; 

    this.distributionOrdering = {}; 
    this.levels = {}; 
    this.distributionIndex = {}; 

    this.isTree = false; 
    this.treeIndex = -1; 
  }



  (0, _createClass3['default'])(HierarchicalStatus, [{
    key: 'addRelation',
    value: function addRelation(parentNodeId, childNodeId) {
      if (this.childrenReference[parentNodeId] === undefined) {
        this.childrenReference[parentNodeId] = [];
      }
      this.childrenReference[parentNodeId].push(childNodeId);

      if (this.parentReference[childNodeId] === undefined) {
        this.parentReference[childNodeId] = [];
      }
      this.parentReference[childNodeId].push(parentNodeId);
    }


  }, {
    key: 'checkIfTree',
    value: function checkIfTree() {
      for (var i in this.parentReference) {
        if (this.parentReference[i].length > 1) {
          this.isTree = false;
          return;
        }
      }

      this.isTree = true;
    }


  }, {
    key: 'numTrees',
    value: function numTrees() {
      return this.treeIndex + 1; 
    }


  }, {
    key: 'setTreeIndex',
    value: function setTreeIndex(node, treeId) {
      if (treeId === undefined) return; 

      if (this.trees[node.id] === undefined) {
        this.trees[node.id] = treeId;
        this.treeIndex = Math.max(treeId, this.treeIndex);
      }
    }


  }, {
    key: 'ensureLevel',
    value: function ensureLevel(nodeId) {
      if (this.levels[nodeId] === undefined) {
        this.levels[nodeId] = 0;
      }
    }


  }, {
    key: 'getMaxLevel',
    value: function getMaxLevel(nodeId) {
      var _this = this;

      var accumulator = {};

      var _getMaxLevel = function _getMaxLevel(nodeId) {
        if (accumulator[nodeId] !== undefined) {
          return accumulator[nodeId];
        }
        var level = _this.levels[nodeId];
        if (_this.childrenReference[nodeId]) {
          var children = _this.childrenReference[nodeId];
          if (children.length > 0) {
            for (var i = 0; i < children.length; i++) {
              level = Math.max(level, _getMaxLevel(children[i]));
            }
          }
        }
        accumulator[nodeId] = level;
        return level;
      };

      return _getMaxLevel(nodeId);
    }


  }, {
    key: 'levelDownstream',
    value: function levelDownstream(nodeA, nodeB) {
      if (this.levels[nodeB.id] === undefined) {
        if (this.levels[nodeA.id] === undefined) {
          this.levels[nodeA.id] = 0;
        }
        this.levels[nodeB.id] = this.levels[nodeA.id] + 1;
      }
    }


  }, {
    key: 'setMinLevelToZero',
    value: function setMinLevelToZero(nodes) {
      var minLevel = 1e9;
      for (var nodeId in nodes) {
        if (nodes.hasOwnProperty(nodeId)) {
          if (this.levels[nodeId] !== undefined) {
            minLevel = Math.min(this.levels[nodeId], minLevel);
          }
        }
      }

      for (var _nodeId in nodes) {
        if (nodes.hasOwnProperty(_nodeId)) {
          if (this.levels[_nodeId] !== undefined) {
            this.levels[_nodeId] -= minLevel;
          }
        }
      }
    }


  }, {
    key: 'getTreeSize',
    value: function getTreeSize(nodes, index) {
      var min_x = 1e9;
      var max_x = -1e9;
      var min_y = 1e9;
      var max_y = -1e9;

      for (var nodeId in this.trees) {
        if (this.trees.hasOwnProperty(nodeId)) {
          if (this.trees[nodeId] === index) {
            var node = nodes[nodeId];
            min_x = Math.min(node.x, min_x);
            max_x = Math.max(node.x, max_x);
            min_y = Math.min(node.y, min_y);
            max_y = Math.max(node.y, max_y);
          }
        }
      }

      return {
        min_x: min_x,
        max_x: max_x,
        min_y: min_y,
        max_y: max_y
      };
    }


  }, {
    key: 'hasSameParent',
    value: function hasSameParent(node1, node2) {
      var parents1 = this.parentReference[node1.id];
      var parents2 = this.parentReference[node2.id];
      if (parents1 === undefined || parents2 === undefined) {
        return false;
      }

      for (var i = 0; i < parents1.length; i++) {
        for (var j = 0; j < parents2.length; j++) {
          if (parents1[i] == parents2[j]) {
            return true;
          }
        }
      }
      return false;
    }


  }, {
    key: 'inSameSubNetwork',
    value: function inSameSubNetwork(node1, node2) {
      return this.trees[node1.id] === this.trees[node2.id];
    }


  }, {
    key: 'getLevels',
    value: function getLevels() {
      return (0, _keys2['default'])(this.distributionOrdering);
    }


  }, {
    key: 'addToOrdering',
    value: function addToOrdering(node, level) {
      if (this.distributionOrdering[level] === undefined) {
        this.distributionOrdering[level] = [];
      }

      var isPresent = false;
      var curLevel = this.distributionOrdering[level];
      for (var n in curLevel) {
        if (curLevel[n] === node) {
          isPresent = true;
          break;
        }
      }

      if (!isPresent) {
        this.distributionOrdering[level].push(node);
        this.distributionIndex[node.id] = this.distributionOrdering[level].length - 1;
      }
    }
  }]);
  return HierarchicalStatus;
}();



var LayoutEngine = function () {
  function LayoutEngine(body) {
    (0, _classCallCheck3['default'])(this, LayoutEngine);

    this.body = body;

    this.initialRandomSeed = Math.round(Math.random() * 1000000);
    this.randomSeed = this.initialRandomSeed;
    this.setPhysics = false;
    this.options = {};
    this.optionsBackup = { physics: {} };

    this.defaultOptions = {
      randomSeed: undefined,
      improvedLayout: true,
      hierarchical: {
        enabled: false,
        levelSeparation: 150,
        nodeSpacing: 100,
        treeSpacing: 200,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
        direction: 'UD', 
        sortMethod: 'hubsize' 
      }
    };
    util.extend(this.options, this.defaultOptions);
    this.bindEventListeners();
  }



  (0, _createClass3['default'])(LayoutEngine, [{
    key: 'bindEventListeners',
    value: function bindEventListeners() {
      var _this2 = this;

      this.body.emitter.on('_dataChanged', function () {
        _this2.setupHierarchicalLayout();
      });
      this.body.emitter.on('_dataLoaded', function () {
        _this2.layoutNetwork();
      });
      this.body.emitter.on('_resetHierarchicalLayout', function () {
        _this2.setupHierarchicalLayout();
      });
      this.body.emitter.on('_adjustEdgesForHierarchicalLayout', function () {
        if (_this2.options.hierarchical.enabled !== true) {
          return;
        }
        var type = _this2.direction.curveType();

        _this2.body.emitter.emit('_forceDisableDynamicCurves', type, false);
      });
    }


  }, {
    key: 'setOptions',
    value: function setOptions(options, allOptions) {
      if (options !== undefined) {
        var hierarchical = this.options.hierarchical;
        var prevHierarchicalState = hierarchical.enabled;
        util.selectiveDeepExtend(['randomSeed', 'improvedLayout'], this.options, options);
        util.mergeOptions(this.options, options, 'hierarchical');
        if (options.randomSeed !== undefined) {
          this.initialRandomSeed = options.randomSeed;
        }

        if (hierarchical.enabled === true) {
          if (prevHierarchicalState === true) {
            this.body.emitter.emit('refresh', true);
          }

          if (hierarchical.direction === 'RL' || hierarchical.direction === 'DU') {
            if (hierarchical.levelSeparation > 0) {
              hierarchical.levelSeparation *= -1;
            }
          } else {
            if (hierarchical.levelSeparation < 0) {
              hierarchical.levelSeparation *= -1;
            }
          }

          this.setDirectionStrategy();

          this.body.emitter.emit('_resetHierarchicalLayout');
          return this.adaptAllOptionsForHierarchicalLayout(allOptions);
        } else {
          if (prevHierarchicalState === true) {
            this.body.emitter.emit('refresh');
            return util.deepExtend(allOptions, this.optionsBackup);
          }
        }
      }
      return allOptions;
    }


  }, {
    key: 'adaptAllOptionsForHierarchicalLayout',
    value: function adaptAllOptionsForHierarchicalLayout(allOptions) {
      if (this.options.hierarchical.enabled === true) {
        var backupPhysics = this.optionsBackup.physics;

        if (allOptions.physics === undefined || allOptions.physics === true) {
          allOptions.physics = {
            enabled: backupPhysics.enabled === undefined ? true : backupPhysics.enabled,
            solver: 'hierarchicalRepulsion'
          };
          backupPhysics.enabled = backupPhysics.enabled === undefined ? true : backupPhysics.enabled;
          backupPhysics.solver = backupPhysics.solver || 'barnesHut';
        } else if ((0, _typeof3['default'])(allOptions.physics) === 'object') {
          backupPhysics.enabled = allOptions.physics.enabled === undefined ? true : allOptions.physics.enabled;
          backupPhysics.solver = allOptions.physics.solver || 'barnesHut';
          allOptions.physics.solver = 'hierarchicalRepulsion';
        } else if (allOptions.physics !== false) {
          backupPhysics.solver = 'barnesHut';
          allOptions.physics = { solver: 'hierarchicalRepulsion' };
        }

        var type = this.direction.curveType();

        if (allOptions.edges === undefined) {
          this.optionsBackup.edges = {
            smooth: { enabled: true, type: 'dynamic' }
          };
          allOptions.edges = { smooth: false };
        } else if (allOptions.edges.smooth === undefined) {
          this.optionsBackup.edges = {
            smooth: { enabled: true, type: 'dynamic' }
          };
          allOptions.edges.smooth = false;
        } else {
          if (typeof allOptions.edges.smooth === 'boolean') {
            this.optionsBackup.edges = { smooth: allOptions.edges.smooth };
            allOptions.edges.smooth = {
              enabled: allOptions.edges.smooth,
              type: type
            };
          } else {
            var smooth = allOptions.edges.smooth;

            if (smooth.type !== undefined && smooth.type !== 'dynamic') {
              type = smooth.type;
            }

            this.optionsBackup.edges = {
              smooth: smooth.enabled === undefined ? true : smooth.enabled,
              type: smooth.type === undefined ? 'dynamic' : smooth.type,
              roundness: smooth.roundness === undefined ? 0.5 : smooth.roundness,
              forceDirection: smooth.forceDirection === undefined ? false : smooth.forceDirection

            };allOptions.edges.smooth = {
              enabled: smooth.enabled === undefined ? true : smooth.enabled,
              type: type,
              roundness: smooth.roundness === undefined ? 0.5 : smooth.roundness,
              forceDirection: smooth.forceDirection === undefined ? false : smooth.forceDirection
            };
          }
        }

        this.body.emitter.emit('_forceDisableDynamicCurves', type);
      }

      return allOptions;
    }


  }, {
    key: 'seededRandom',
    value: function seededRandom() {
      var x = Math.sin(this.randomSeed++) * 10000;
      return x - Math.floor(x);
    }


  }, {
    key: 'positionInitially',
    value: function positionInitially(nodesArray) {
      if (this.options.hierarchical.enabled !== true) {
        this.randomSeed = this.initialRandomSeed;
        var radius = nodesArray.length + 50;
        for (var i = 0; i < nodesArray.length; i++) {
          var node = nodesArray[i];
          var angle = 2 * Math.PI * this.seededRandom();
          if (node.x === undefined) {
            node.x = radius * Math.cos(angle);
          }
          if (node.y === undefined) {
            node.y = radius * Math.sin(angle);
          }
        }
      }
    }


  }, {
    key: 'layoutNetwork',
    value: function layoutNetwork() {
      if (this.options.hierarchical.enabled !== true && this.options.improvedLayout === true) {
        var indices = this.body.nodeIndices;

        var positionDefined = 0;
        for (var i = 0; i < indices.length; i++) {
          var node = this.body.nodes[indices[i]];
          if (node.predefinedPosition === true) {
            positionDefined += 1;
          }
        }

        if (positionDefined < 0.5 * indices.length) {
          var MAX_LEVELS = 10;
          var level = 0;
          var clusterThreshold = 150; 

          var clusterOptions = {
            clusterNodeProperties: {
              shape: 'ellipse', 
              label: '', 
              group: '', 
              font: { multi: false 
              } },
            clusterEdgeProperties: {
              label: '', 
              font: { multi: false }, 
              smooth: {
                enabled: false 
              }
            }

          };if (indices.length > clusterThreshold) {
            var startLength = indices.length;
            while (indices.length > clusterThreshold && level <= MAX_LEVELS) {
              level += 1;
              var before = indices.length;
              if (level % 3 === 0) {
                this.body.modules.clustering.clusterBridges(clusterOptions);
              } else {
                this.body.modules.clustering.clusterOutliers(clusterOptions);
              }
              var after = indices.length;
              if (before == after && level % 3 !== 0) {
                this._declusterAll();
                this.body.emitter.emit('_layoutFailed');
                console.info('This network could not be positioned by this version of the improved layout algorithm.' + ' Please disable improvedLayout for better performance.');
                return;
              }
            }
            this.body.modules.kamadaKawai.setOptions({
              springLength: Math.max(150, 2 * startLength)
            });
          }
          if (level > MAX_LEVELS) {
            console.info("The clustering didn't succeed within the amount of interations allowed," + ' progressing with partial result.');
          }

          this.body.modules.kamadaKawai.solve(indices, this.body.edgeIndices, true);

          this._shiftToCenter();

          var offset = 70;
          for (var _i = 0; _i < indices.length; _i++) {
            var _node = this.body.nodes[indices[_i]];
            if (_node.predefinedPosition === false) {
              _node.x += (0.5 - this.seededRandom()) * offset;
              _node.y += (0.5 - this.seededRandom()) * offset;
            }
          }

          this._declusterAll();

          this.body.emitter.emit('_repositionBezierNodes');
        }
      }
    }


  }, {
    key: '_shiftToCenter',
    value: function _shiftToCenter() {
      var range = NetworkUtil.getRangeCore(this.body.nodes, this.body.nodeIndices);
      var center = NetworkUtil.findCenter(range);
      for (var i = 0; i < this.body.nodeIndices.length; i++) {
        var node = this.body.nodes[this.body.nodeIndices[i]];
        node.x -= center.x;
        node.y -= center.y;
      }
    }


  }, {
    key: '_declusterAll',
    value: function _declusterAll() {
      var clustersPresent = true;
      while (clustersPresent === true) {
        clustersPresent = false;
        for (var i = 0; i < this.body.nodeIndices.length; i++) {
          if (this.body.nodes[this.body.nodeIndices[i]].isCluster === true) {
            clustersPresent = true;
            this.body.modules.clustering.openCluster(this.body.nodeIndices[i], {}, false);
          }
        }
        if (clustersPresent === true) {
          this.body.emitter.emit('_dataChanged');
        }
      }
    }


  }, {
    key: 'getSeed',
    value: function getSeed() {
      return this.initialRandomSeed;
    }


  }, {
    key: 'setupHierarchicalLayout',
    value: function setupHierarchicalLayout() {
      if (this.options.hierarchical.enabled === true && this.body.nodeIndices.length > 0) {
        var node = void 0,
            nodeId = void 0;
        var definedLevel = false;
        var undefinedLevel = false;
        this.lastNodeOnLevel = {};
        this.hierarchical = new HierarchicalStatus();

        for (nodeId in this.body.nodes) {
          if (this.body.nodes.hasOwnProperty(nodeId)) {
            node = this.body.nodes[nodeId];
            if (node.options.level !== undefined) {
              definedLevel = true;
              this.hierarchical.levels[nodeId] = node.options.level;
            } else {
              undefinedLevel = true;
            }
          }
        }

        if (undefinedLevel === true && definedLevel === true) {
          throw new Error('To use the hierarchical layout, nodes require either no predefined levels' + ' or levels have to be defined for all nodes.');
        } else {
          if (undefinedLevel === true) {
            var sortMethod = this.options.hierarchical.sortMethod;
            if (sortMethod === 'hubsize') {
              this._determineLevelsByHubsize();
            } else if (sortMethod === 'directed') {
              this._determineLevelsDirected();
            } else if (sortMethod === 'custom') {
              this._determineLevelsCustomCallback();
            }
          }

          for (var _nodeId2 in this.body.nodes) {
            if (this.body.nodes.hasOwnProperty(_nodeId2)) {
              this.hierarchical.ensureLevel(_nodeId2);
            }
          }
          var distribution = this._getDistribution();

          this._generateMap();

          this._placeNodesByHierarchy(distribution);

          this._condenseHierarchy();

          this._shiftToCenter();
        }
      }
    }


  }, {
    key: '_condenseHierarchy',
    value: function _condenseHierarchy() {
      var _this3 = this;

      var stillShifting = false;
      var branches = {};
      var shiftTrees = function shiftTrees() {
        var treeSizes = getTreeSizes();
        var shiftBy = 0;
        for (var i = 0; i < treeSizes.length - 1; i++) {
          var diff = treeSizes[i].max - treeSizes[i + 1].min;
          shiftBy += diff + _this3.options.hierarchical.treeSpacing;
          shiftTree(i + 1, shiftBy);
        }
      };

      var shiftTree = function shiftTree(index, offset) {
        var trees = _this3.hierarchical.trees;

        for (var nodeId in trees) {
          if (trees.hasOwnProperty(nodeId)) {
            if (trees[nodeId] === index) {
              _this3.direction.shift(nodeId, offset);
            }
          }
        }
      };

      var getTreeSizes = function getTreeSizes() {
        var treeWidths = [];
        for (var i = 0; i < _this3.hierarchical.numTrees(); i++) {
          treeWidths.push(_this3.direction.getTreeSize(i));
        }
        return treeWidths;
      };

      var getBranchNodes = function getBranchNodes(source, map) {
        if (map[source.id]) {
          return;
        }
        map[source.id] = true;
        if (_this3.hierarchical.childrenReference[source.id]) {
          var children = _this3.hierarchical.childrenReference[source.id];
          if (children.length > 0) {
            for (var i = 0; i < children.length; i++) {
              getBranchNodes(_this3.body.nodes[children[i]], map);
            }
          }
        }
      };

      var getBranchBoundary = function getBranchBoundary(branchMap) {
        var maxLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e9;

        var minSpace = 1e9;
        var maxSpace = 1e9;
        var min = 1e9;
        var max = -1e9;
        for (var branchNode in branchMap) {
          if (branchMap.hasOwnProperty(branchNode)) {
            var node = _this3.body.nodes[branchNode];
            var level = _this3.hierarchical.levels[node.id];
            var position = _this3.direction.getPosition(node);


            var _getSpaceAroundNode2 = _this3._getSpaceAroundNode(node, branchMap),
                _getSpaceAroundNode3 = (0, _slicedToArray3['default'])(_getSpaceAroundNode2, 2),
                minSpaceNode = _getSpaceAroundNode3[0],
                maxSpaceNode = _getSpaceAroundNode3[1];

            minSpace = Math.min(minSpaceNode, minSpace);
            maxSpace = Math.min(maxSpaceNode, maxSpace);

            if (level <= maxLevel) {
              min = Math.min(position, min);
              max = Math.max(position, max);
            }
          }
        }

        return [min, max, minSpace, maxSpace];
      };

      var getCollisionLevel = function getCollisionLevel(node1, node2) {
        var maxLevel1 = _this3.hierarchical.getMaxLevel(node1.id);
        var maxLevel2 = _this3.hierarchical.getMaxLevel(node2.id);
        return Math.min(maxLevel1, maxLevel2);
      };

      var shiftElementsCloser = function shiftElementsCloser(callback, levels, centerParents) {
        var hier = _this3.hierarchical;

        for (var i = 0; i < levels.length; i++) {
          var level = levels[i];
          var levelNodes = hier.distributionOrdering[level];
          if (levelNodes.length > 1) {
            for (var j = 0; j < levelNodes.length - 1; j++) {
              var node1 = levelNodes[j];
              var node2 = levelNodes[j + 1];

              if (hier.hasSameParent(node1, node2) && hier.inSameSubNetwork(node1, node2)) {
                callback(node1, node2, centerParents);
              }
            }
          }
        }
      };

      var branchShiftCallback = function branchShiftCallback(node1, node2) {
        var centerParent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var pos1 = _this3.direction.getPosition(node1);
        var pos2 = _this3.direction.getPosition(node2);
        var diffAbs = Math.abs(pos2 - pos1);
        var nodeSpacing = _this3.options.hierarchical.nodeSpacing;
        if (diffAbs > nodeSpacing) {
          var branchNodes1 = {};
          var branchNodes2 = {};

          getBranchNodes(node1, branchNodes1);
          getBranchNodes(node2, branchNodes2);

          var maxLevel = getCollisionLevel(node1, node2);
          var branchNodeBoundary1 = getBranchBoundary(branchNodes1, maxLevel);
          var branchNodeBoundary2 = getBranchBoundary(branchNodes2, maxLevel);
          var max1 = branchNodeBoundary1[1];
          var min2 = branchNodeBoundary2[0];
          var minSpace2 = branchNodeBoundary2[2];

          var diffBranch = Math.abs(max1 - min2);
          if (diffBranch > nodeSpacing) {
            var offset = max1 - min2 + nodeSpacing;
            if (offset < -minSpace2 + nodeSpacing) {
              offset = -minSpace2 + nodeSpacing;
            }
            if (offset < 0) {
              _this3._shiftBlock(node2.id, offset);
              stillShifting = true;

              if (centerParent === true) _this3._centerParent(node2);
            }
          }
        }
      };

      var minimizeEdgeLength = function minimizeEdgeLength(iterations, node) {
        var nodeId = node.id;
        var allEdges = node.edges;
        var nodeLevel = _this3.hierarchical.levels[node.id];

        var C2 = _this3.options.hierarchical.levelSeparation * _this3.options.hierarchical.levelSeparation;
        var referenceNodes = {};
        var aboveEdges = [];
        for (var i = 0; i < allEdges.length; i++) {
          var edge = allEdges[i];
          if (edge.toId != edge.fromId) {
            var otherNode = edge.toId == nodeId ? edge.from : edge.to;
            referenceNodes[allEdges[i].id] = otherNode;
            if (_this3.hierarchical.levels[otherNode.id] < nodeLevel) {
              aboveEdges.push(edge);
            }
          }
        }

        var getFx = function getFx(point, edges) {
          var sum = 0;
          for (var _i2 = 0; _i2 < edges.length; _i2++) {
            if (referenceNodes[edges[_i2].id] !== undefined) {
              var a = _this3.direction.getPosition(referenceNodes[edges[_i2].id]) - point;
              sum += a / Math.sqrt(a * a + C2);
            }
          }
          return sum;
        };

        var getDFx = function getDFx(point, edges) {
          var sum = 0;
          for (var _i3 = 0; _i3 < edges.length; _i3++) {
            if (referenceNodes[edges[_i3].id] !== undefined) {
              var a = _this3.direction.getPosition(referenceNodes[edges[_i3].id]) - point;
              sum -= C2 * Math.pow(a * a + C2, -1.5);
            }
          }
          return sum;
        };

        var getGuess = function getGuess(iterations, edges) {
          var guess = _this3.direction.getPosition(node);
          var guessMap = {};
          for (var _i4 = 0; _i4 < iterations; _i4++) {
            var fx = getFx(guess, edges);
            var dfx = getDFx(guess, edges);

            var limit = 40;
            var ratio = Math.max(-limit, Math.min(limit, Math.round(fx / dfx)));
            guess = guess - ratio;
            if (guessMap[guess] !== undefined) {
              break;
            }
            guessMap[guess] = _i4;
          }
          return guess;
        };

        var moveBranch = function moveBranch(guess) {
          var nodePosition = _this3.direction.getPosition(node);

          if (branches[node.id] === undefined) {
            var branchNodes = {};
            getBranchNodes(node, branchNodes);
            branches[node.id] = branchNodes;
          }
          var branchBoundary = getBranchBoundary(branches[node.id]);
          var minSpaceBranch = branchBoundary[2];
          var maxSpaceBranch = branchBoundary[3];

          var diff = guess - nodePosition;

          var branchOffset = 0;
          if (diff > 0) {
            branchOffset = Math.min(diff, maxSpaceBranch - _this3.options.hierarchical.nodeSpacing);
          } else if (diff < 0) {
            branchOffset = -Math.min(-diff, minSpaceBranch - _this3.options.hierarchical.nodeSpacing);
          }

          if (branchOffset != 0) {
            _this3._shiftBlock(node.id, branchOffset);
            stillShifting = true;
          }
        };

        var moveNode = function moveNode(guess) {
          var nodePosition = _this3.direction.getPosition(node);


          var _getSpaceAroundNode4 = _this3._getSpaceAroundNode(node),
              _getSpaceAroundNode5 = (0, _slicedToArray3['default'])(_getSpaceAroundNode4, 2),
              minSpace = _getSpaceAroundNode5[0],
              maxSpace = _getSpaceAroundNode5[1];

          var diff = guess - nodePosition;
          var newPosition = nodePosition;
          if (diff > 0) {
            newPosition = Math.min(nodePosition + (maxSpace - _this3.options.hierarchical.nodeSpacing), guess);
          } else if (diff < 0) {
            newPosition = Math.max(nodePosition - (minSpace - _this3.options.hierarchical.nodeSpacing), guess);
          }

          if (newPosition !== nodePosition) {
            _this3.direction.setPosition(node, newPosition);
            stillShifting = true;
          }
        };

        var guess = getGuess(iterations, aboveEdges);
        moveBranch(guess);
        guess = getGuess(iterations, allEdges);
        moveNode(guess);
      };

      var minimizeEdgeLengthBottomUp = function minimizeEdgeLengthBottomUp(iterations) {
        var levels = _this3.hierarchical.getLevels();
        levels = levels.reverse();
        for (var i = 0; i < iterations; i++) {
          stillShifting = false;
          for (var j = 0; j < levels.length; j++) {
            var level = levels[j];
            var levelNodes = _this3.hierarchical.distributionOrdering[level];
            for (var k = 0; k < levelNodes.length; k++) {
              minimizeEdgeLength(1000, levelNodes[k]);
            }
          }
          if (stillShifting !== true) {
            break;
          }
        }
      };

      var shiftBranchesCloserBottomUp = function shiftBranchesCloserBottomUp(iterations) {
        var levels = _this3.hierarchical.getLevels();
        levels = levels.reverse();
        for (var i = 0; i < iterations; i++) {
          stillShifting = false;
          shiftElementsCloser(branchShiftCallback, levels, true);
          if (stillShifting !== true) {
            break;
          }
        }
      };

      var centerAllParents = function centerAllParents() {
        for (var nodeId in _this3.body.nodes) {
          if (_this3.body.nodes.hasOwnProperty(nodeId)) _this3._centerParent(_this3.body.nodes[nodeId]);
        }
      };

      var centerAllParentsBottomUp = function centerAllParentsBottomUp() {
        var levels = _this3.hierarchical.getLevels();
        levels = levels.reverse();
        for (var i = 0; i < levels.length; i++) {
          var level = levels[i];
          var levelNodes = _this3.hierarchical.distributionOrdering[level];
          for (var j = 0; j < levelNodes.length; j++) {
            _this3._centerParent(levelNodes[j]);
          }
        }
      };

      if (this.options.hierarchical.blockShifting === true) {
        shiftBranchesCloserBottomUp(5);
        centerAllParents();
      }

      if (this.options.hierarchical.edgeMinimization === true) {
        minimizeEdgeLengthBottomUp(20);
      }

      if (this.options.hierarchical.parentCentralization === true) {
        centerAllParentsBottomUp();
      }

      shiftTrees();
    }


  }, {
    key: '_getSpaceAroundNode',
    value: function _getSpaceAroundNode(node, map) {
      var useMap = true;
      if (map === undefined) {
        useMap = false;
      }
      var level = this.hierarchical.levels[node.id];
      if (level !== undefined) {
        var index = this.hierarchical.distributionIndex[node.id];
        var position = this.direction.getPosition(node);
        var ordering = this.hierarchical.distributionOrdering[level];
        var minSpace = 1e9;
        var maxSpace = 1e9;
        if (index !== 0) {
          var prevNode = ordering[index - 1];
          if (useMap === true && map[prevNode.id] === undefined || useMap === false) {
            var prevPos = this.direction.getPosition(prevNode);
            minSpace = position - prevPos;
          }
        }

        if (index != ordering.length - 1) {
          var nextNode = ordering[index + 1];
          if (useMap === true && map[nextNode.id] === undefined || useMap === false) {
            var nextPos = this.direction.getPosition(nextNode);
            maxSpace = Math.min(maxSpace, nextPos - position);
          }
        }

        return [minSpace, maxSpace];
      } else {
        return [0, 0];
      }
    }


  }, {
    key: '_centerParent',
    value: function _centerParent(node) {
      if (this.hierarchical.parentReference[node.id]) {
        var parents = this.hierarchical.parentReference[node.id];
        for (var i = 0; i < parents.length; i++) {
          var parentId = parents[i];
          var parentNode = this.body.nodes[parentId];
          var children = this.hierarchical.childrenReference[parentId];

          if (children !== undefined) {
            var newPosition = this._getCenterPosition(children);

            var position = this.direction.getPosition(parentNode);

            var _getSpaceAroundNode6 = this._getSpaceAroundNode(parentNode),
                _getSpaceAroundNode7 = (0, _slicedToArray3['default'])(_getSpaceAroundNode6, 2),
                minSpace = _getSpaceAroundNode7[0],
                maxSpace = _getSpaceAroundNode7[1];

            var diff = position - newPosition;
            if (diff < 0 && Math.abs(diff) < maxSpace - this.options.hierarchical.nodeSpacing || diff > 0 && Math.abs(diff) < minSpace - this.options.hierarchical.nodeSpacing) {
              this.direction.setPosition(parentNode, newPosition);
            }
          }
        }
      }
    }


  }, {
    key: '_placeNodesByHierarchy',
    value: function _placeNodesByHierarchy(distribution) {
      this.positionedNodes = {};
      for (var level in distribution) {
        if (distribution.hasOwnProperty(level)) {
          var nodeArray = (0, _keys2['default'])(distribution[level]);
          nodeArray = this._indexArrayToNodes(nodeArray);
          this.direction.sort(nodeArray);
          var handledNodeCount = 0;

          for (var i = 0; i < nodeArray.length; i++) {
            var node = nodeArray[i];
            if (this.positionedNodes[node.id] === undefined) {
              var spacing = this.options.hierarchical.nodeSpacing;
              var pos = spacing * handledNodeCount;
              if (handledNodeCount > 0) {
                pos = this.direction.getPosition(nodeArray[i - 1]) + spacing;
              }
              this.direction.setPosition(node, pos, level);
              this._validatePositionAndContinue(node, level, pos);

              handledNodeCount++;
            }
          }
        }
      }
    }


  }, {
    key: '_placeBranchNodes',
    value: function _placeBranchNodes(parentId, parentLevel) {
      var childRef = this.hierarchical.childrenReference[parentId];

      if (childRef === undefined) {
        return;
      }

      var childNodes = [];
      for (var i = 0; i < childRef.length; i++) {
        childNodes.push(this.body.nodes[childRef[i]]);
      }

      this.direction.sort(childNodes);

      for (var _i5 = 0; _i5 < childNodes.length; _i5++) {
        var childNode = childNodes[_i5];
        var childNodeLevel = this.hierarchical.levels[childNode.id];
        if (childNodeLevel > parentLevel && this.positionedNodes[childNode.id] === undefined) {
          var spacing = this.options.hierarchical.nodeSpacing;
          var pos = void 0;

          if (_i5 === 0) {
            pos = this.direction.getPosition(this.body.nodes[parentId]);
          } else {
            pos = this.direction.getPosition(childNodes[_i5 - 1]) + spacing;
          }
          this.direction.setPosition(childNode, pos, childNodeLevel);
          this._validatePositionAndContinue(childNode, childNodeLevel, pos);
        } else {
          return;
        }
      }

      var center = this._getCenterPosition(childNodes);
      this.direction.setPosition(this.body.nodes[parentId], center, parentLevel);
    }


  }, {
    key: '_validatePositionAndContinue',
    value: function _validatePositionAndContinue(node, level, pos) {
      if (!this.hierarchical.isTree) return;

      if (this.lastNodeOnLevel[level] !== undefined) {
        var previousPos = this.direction.getPosition(this.body.nodes[this.lastNodeOnLevel[level]]);
        if (pos - previousPos < this.options.hierarchical.nodeSpacing) {
          var diff = previousPos + this.options.hierarchical.nodeSpacing - pos;
          var sharedParent = this._findCommonParent(this.lastNodeOnLevel[level], node.id);
          this._shiftBlock(sharedParent.withChild, diff);
        }
      }

      this.lastNodeOnLevel[level] = node.id; 
      this.positionedNodes[node.id] = true;
      this._placeBranchNodes(node.id, level);
    }


  }, {
    key: '_indexArrayToNodes',
    value: function _indexArrayToNodes(idArray) {
      var array = [];
      for (var i = 0; i < idArray.length; i++) {
        array.push(this.body.nodes[idArray[i]]);
      }
      return array;
    }


  }, {
    key: '_getDistribution',
    value: function _getDistribution() {
      var distribution = {};
      var nodeId = void 0,
          node = void 0;

      for (nodeId in this.body.nodes) {
        if (this.body.nodes.hasOwnProperty(nodeId)) {
          node = this.body.nodes[nodeId];
          var level = this.hierarchical.levels[nodeId] === undefined ? 0 : this.hierarchical.levels[nodeId];
          this.direction.fix(node, level);
          if (distribution[level] === undefined) {
            distribution[level] = {};
          }
          distribution[level][nodeId] = node;
        }
      }
      return distribution;
    }


  }, {
    key: '_getActiveEdges',
    value: function _getActiveEdges(node) {
      var _this4 = this;

      var result = [];

      util.forEach(node.edges, function (edge) {
        if (_this4.body.edgeIndices.indexOf(edge.id) !== -1) {
          result.push(edge);
        }
      });

      return result;
    }


  }, {
    key: '_getHubSizes',
    value: function _getHubSizes() {
      var _this5 = this;

      var hubSizes = {};
      var nodeIds = this.body.nodeIndices;

      util.forEach(nodeIds, function (nodeId) {
        var node = _this5.body.nodes[nodeId];
        var hubSize = _this5._getActiveEdges(node).length;
        hubSizes[hubSize] = true;
      });

      var result = [];
      util.forEach(hubSizes, function (size) {
        result.push(Number(size));
      });

      TimSort.sort(result, function (a, b) {
        return b - a;
      });

      return result;
    }


  }, {
    key: '_determineLevelsByHubsize',
    value: function _determineLevelsByHubsize() {
      var _this6 = this;

      var levelDownstream = function levelDownstream(nodeA, nodeB) {
        _this6.hierarchical.levelDownstream(nodeA, nodeB);
      };

      var hubSizes = this._getHubSizes();

      var _loop = function _loop(i) {
        var hubSize = hubSizes[i];
        if (hubSize === 0) return 'break';

        util.forEach(_this6.body.nodeIndices, function (nodeId) {
          var node = _this6.body.nodes[nodeId];

          if (hubSize === _this6._getActiveEdges(node).length) {
            _this6._crawlNetwork(levelDownstream, nodeId);
          }
        });
      };

      for (var i = 0; i < hubSizes.length; ++i) {
        var _ret = _loop(i);

        if (_ret === 'break') break;
      }
    }


  }, {
    key: '_determineLevelsCustomCallback',
    value: function _determineLevelsCustomCallback() {
      var _this7 = this;

      var minLevel = 100000;

      var customCallback = function customCallback(nodeA, nodeB, edge) {};

      var levelByDirection = function levelByDirection(nodeA, nodeB, edge) {
        var levelA = _this7.hierarchical.levels[nodeA.id];
        if (levelA === undefined) {
          levelA = _this7.hierarchical.levels[nodeA.id] = minLevel;
        }

        var diff = customCallback(NetworkUtil.cloneOptions(nodeA, 'node'), NetworkUtil.cloneOptions(nodeB, 'node'), NetworkUtil.cloneOptions(edge, 'edge'));

        _this7.hierarchical.levels[nodeB.id] = levelA + diff;
      };

      this._crawlNetwork(levelByDirection);
      this.hierarchical.setMinLevelToZero(this.body.nodes);
    }


  }, {
    key: '_determineLevelsDirected',
    value: function _determineLevelsDirected() {
      var _this8 = this;

      var minLevel = 10000;

      var isBidirectional = function isBidirectional(edge) {
        util.forEach(_this8.body.edges, function (otherEdge) {
          if (otherEdge.toId === edge.fromId && otherEdge.fromId === edge.toId) {
            return true;
          }
        });

        return false;
      };

      var levelByDirection = function levelByDirection(nodeA, nodeB, edge) {
        var levelA = _this8.hierarchical.levels[nodeA.id];
        var levelB = _this8.hierarchical.levels[nodeB.id];

        if (isBidirectional(edge) && levelA !== undefined && levelB !== undefined) {
          return;
        }

        if (levelA === undefined) {
          levelA = _this8.hierarchical.levels[nodeA.id] = minLevel;
        }
        if (edge.toId == nodeB.id) {
          _this8.hierarchical.levels[nodeB.id] = levelA + 1;
        } else {
          _this8.hierarchical.levels[nodeB.id] = levelA - 1;
        }
      };

      this._crawlNetwork(levelByDirection);
      this.hierarchical.setMinLevelToZero(this.body.nodes);
    }


  }, {
    key: '_generateMap',
    value: function _generateMap() {
      var _this9 = this;

      var fillInRelations = function fillInRelations(parentNode, childNode) {
        if (_this9.hierarchical.levels[childNode.id] > _this9.hierarchical.levels[parentNode.id]) {
          _this9.hierarchical.addRelation(parentNode.id, childNode.id);
        }
      };

      this._crawlNetwork(fillInRelations);
      this.hierarchical.checkIfTree();
    }


  }, {
    key: '_crawlNetwork',
    value: function _crawlNetwork() {
      var _this10 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var startingNodeId = arguments[1];

      var progress = {};

      var crawler = function crawler(node, tree) {
        if (progress[node.id] === undefined) {
          _this10.hierarchical.setTreeIndex(node, tree);

          progress[node.id] = true;
          var childNode = void 0;
          var edges = _this10._getActiveEdges(node);
          for (var i = 0; i < edges.length; i++) {
            var edge = edges[i];
            if (edge.connected === true) {
              if (edge.toId == node.id) {
                childNode = edge.from;
              } else {
                childNode = edge.to;
              }

              if (node.id != childNode.id) {
                callback(node, childNode, edge);
                crawler(childNode, tree);
              }
            }
          }
        }
      };

      if (startingNodeId === undefined) {
        var treeIndex = 0; 

        for (var i = 0; i < this.body.nodeIndices.length; i++) {
          var nodeId = this.body.nodeIndices[i];

          if (progress[nodeId] === undefined) {
            var node = this.body.nodes[nodeId];
            crawler(node, treeIndex);
            treeIndex += 1;
          }
        }
      } else {
        var _node2 = this.body.nodes[startingNodeId];
        if (_node2 === undefined) {
          console.error('Node not found:', startingNodeId);
          return;
        }
        crawler(_node2);
      }
    }


  }, {
    key: '_shiftBlock',
    value: function _shiftBlock(parentId, diff) {
      var _this11 = this;

      var progress = {};
      var shifter = function shifter(parentId) {
        if (progress[parentId]) {
          return;
        }
        progress[parentId] = true;
        _this11.direction.shift(parentId, diff);

        var childRef = _this11.hierarchical.childrenReference[parentId];
        if (childRef !== undefined) {
          for (var i = 0; i < childRef.length; i++) {
            shifter(childRef[i]);
          }
        }
      };
      shifter(parentId);
    }


  }, {
    key: '_findCommonParent',
    value: function _findCommonParent(childA, childB) {
      var _this12 = this;

      var parents = {};
      var iterateParents = function iterateParents(parents, child) {
        var parentRef = _this12.hierarchical.parentReference[child];
        if (parentRef !== undefined) {
          for (var i = 0; i < parentRef.length; i++) {
            var parent = parentRef[i];
            parents[parent] = true;
            iterateParents(parents, parent);
          }
        }
      };
      var findParent = function findParent(parents, child) {
        var parentRef = _this12.hierarchical.parentReference[child];
        if (parentRef !== undefined) {
          for (var i = 0; i < parentRef.length; i++) {
            var parent = parentRef[i];
            if (parents[parent] !== undefined) {
              return { foundParent: parent, withChild: child };
            }
            var branch = findParent(parents, parent);
            if (branch.foundParent !== null) {
              return branch;
            }
          }
        }
        return { foundParent: null, withChild: child };
      };

      iterateParents(parents, childA);
      return findParent(parents, childB);
    }


  }, {
    key: 'setDirectionStrategy',
    value: function setDirectionStrategy() {
      var isVertical = this.options.hierarchical.direction === 'UD' || this.options.hierarchical.direction === 'DU';

      if (isVertical) {
        this.direction = new VerticalStrategy(this);
      } else {
        this.direction = new HorizontalStrategy(this);
      }
    }


  }, {
    key: '_getCenterPosition',
    value: function _getCenterPosition(childNodes) {
      var minPos = 1e9;
      var maxPos = -1e9;

      for (var i = 0; i < childNodes.length; i++) {
        var childNode = void 0;
        if (childNodes[i].id !== undefined) {
          childNode = childNodes[i];
        } else {
          var childNodeId = childNodes[i];
          childNode = this.body.nodes[childNodeId];
        }

        var position = this.direction.getPosition(childNode);
        minPos = Math.min(minPos, position);
        maxPos = Math.max(maxPos, position);
      }

      return 0.5 * (minPos + maxPos);
    }
  }]);
  return LayoutEngine;
}();

exports['default'] = LayoutEngine;

 }),
 (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports) {
  'use strict';

  exports.__esModule = true;
  exports.sort = sort;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var DEFAULT_MIN_MERGE = 32;

  var DEFAULT_MIN_GALLOPING = 7;

  var DEFAULT_TMP_STORAGE_LENGTH = 256;

  var POWERS_OF_TEN = [1e0, 1e1, 1e2, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9];

  function log10(x) {
    if (x < 1e5) {
      if (x < 1e2) {
        return x < 1e1 ? 0 : 1;
      }

      if (x < 1e4) {
        return x < 1e3 ? 2 : 3;
      }

      return 4;
    }

    if (x < 1e7) {
      return x < 1e6 ? 5 : 6;
    }

    if (x < 1e9) {
      return x < 1e8 ? 7 : 8;
    }

    return 9;
  }

  function alphabeticalCompare(a, b) {
    if (a === b) {
      return 0;
    }

    if (~ ~a === a && ~ ~b === b) {
      if (a === 0 || b === 0) {
        return a < b ? -1 : 1;
      }

      if (a < 0 || b < 0) {
        if (b >= 0) {
          return -1;
        }

        if (a >= 0) {
          return 1;
        }

        a = -a;
        b = -b;
      }

      var al = log10(a);
      var bl = log10(b);

      var t = 0;

      if (al < bl) {
        a *= POWERS_OF_TEN[bl - al - 1];
        b /= 10;
        t = -1;
      } else if (al > bl) {
        b *= POWERS_OF_TEN[al - bl - 1];
        a /= 10;
        t = 1;
      }

      if (a === b) {
        return t;
      }

      return a < b ? -1 : 1;
    }

    var aStr = String(a);
    var bStr = String(b);

    if (aStr === bStr) {
      return 0;
    }

    return aStr < bStr ? -1 : 1;
  }

  function minRunLength(n) {
    var r = 0;

    while (n >= DEFAULT_MIN_MERGE) {
      r |= n & 1;
      n >>= 1;
    }

    return n + r;
  }

  function makeAscendingRun(array, lo, hi, compare) {
    var runHi = lo + 1;

    if (runHi === hi) {
      return 1;
    }

    if (compare(array[runHi++], array[lo]) < 0) {
      while (runHi < hi && compare(array[runHi], array[runHi - 1]) < 0) {
        runHi++;
      }

      reverseRun(array, lo, runHi);
    } else {
      while (runHi < hi && compare(array[runHi], array[runHi - 1]) >= 0) {
        runHi++;
      }
    }

    return runHi - lo;
  }

  function reverseRun(array, lo, hi) {
    hi--;

    while (lo < hi) {
      var t = array[lo];
      array[lo++] = array[hi];
      array[hi--] = t;
    }
  }

  function binaryInsertionSort(array, lo, hi, start, compare) {
    if (start === lo) {
      start++;
    }

    for (; start < hi; start++) {
      var pivot = array[start];

      var left = lo;
      var right = start;

      while (left < right) {
        var mid = left + right >>> 1;

        if (compare(pivot, array[mid]) < 0) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }

      var n = start - left;

      switch (n) {
        case 3:
          array[left + 3] = array[left + 2];

        case 2:
          array[left + 2] = array[left + 1];

        case 1:
          array[left + 1] = array[left];
          break;
        default:
          while (n > 0) {
            array[left + n] = array[left + n - 1];
            n--;
          }
      }

      array[left] = pivot;
    }
  }

  function gallopLeft(value, array, start, length, hint, compare) {
    var lastOffset = 0;
    var maxOffset = 0;
    var offset = 1;

    if (compare(value, array[start + hint]) > 0) {
      maxOffset = length - hint;

      while (offset < maxOffset && compare(value, array[start + hint + offset]) > 0) {
        lastOffset = offset;
        offset = (offset << 1) + 1;

        if (offset <= 0) {
          offset = maxOffset;
        }
      }

      if (offset > maxOffset) {
        offset = maxOffset;
      }

      lastOffset += hint;
      offset += hint;
    } else {
      maxOffset = hint + 1;
      while (offset < maxOffset && compare(value, array[start + hint - offset]) <= 0) {
        lastOffset = offset;
        offset = (offset << 1) + 1;

        if (offset <= 0) {
          offset = maxOffset;
        }
      }
      if (offset > maxOffset) {
        offset = maxOffset;
      }

      var tmp = lastOffset;
      lastOffset = hint - offset;
      offset = hint - tmp;
    }

    lastOffset++;
    while (lastOffset < offset) {
      var m = lastOffset + (offset - lastOffset >>> 1);

      if (compare(value, array[start + m]) > 0) {
        lastOffset = m + 1;
      } else {
        offset = m;
      }
    }
    return offset;
  }

  function gallopRight(value, array, start, length, hint, compare) {
    var lastOffset = 0;
    var maxOffset = 0;
    var offset = 1;

    if (compare(value, array[start + hint]) < 0) {
      maxOffset = hint + 1;

      while (offset < maxOffset && compare(value, array[start + hint - offset]) < 0) {
        lastOffset = offset;
        offset = (offset << 1) + 1;

        if (offset <= 0) {
          offset = maxOffset;
        }
      }

      if (offset > maxOffset) {
        offset = maxOffset;
      }

      var tmp = lastOffset;
      lastOffset = hint - offset;
      offset = hint - tmp;
    } else {
      maxOffset = length - hint;

      while (offset < maxOffset && compare(value, array[start + hint + offset]) >= 0) {
        lastOffset = offset;
        offset = (offset << 1) + 1;

        if (offset <= 0) {
          offset = maxOffset;
        }
      }

      if (offset > maxOffset) {
        offset = maxOffset;
      }

      lastOffset += hint;
      offset += hint;
    }

    lastOffset++;

    while (lastOffset < offset) {
      var m = lastOffset + (offset - lastOffset >>> 1);

      if (compare(value, array[start + m]) < 0) {
        offset = m;
      } else {
        lastOffset = m + 1;
      }
    }

    return offset;
  }

  var TimSort = (function () {
    function TimSort(array, compare) {
      _classCallCheck(this, TimSort);

      this.array = null;
      this.compare = null;
      this.minGallop = DEFAULT_MIN_GALLOPING;
      this.length = 0;
      this.tmpStorageLength = DEFAULT_TMP_STORAGE_LENGTH;
      this.stackLength = 0;
      this.runStart = null;
      this.runLength = null;
      this.stackSize = 0;

      this.array = array;
      this.compare = compare;

      this.length = array.length;

      if (this.length < 2 * DEFAULT_TMP_STORAGE_LENGTH) {
        this.tmpStorageLength = this.length >>> 1;
      }

      this.tmp = new Array(this.tmpStorageLength);

      this.stackLength = this.length < 120 ? 5 : this.length < 1542 ? 10 : this.length < 119151 ? 19 : 40;

      this.runStart = new Array(this.stackLength);
      this.runLength = new Array(this.stackLength);
    }

    TimSort.prototype.pushRun = function pushRun(runStart, runLength) {
      this.runStart[this.stackSize] = runStart;
      this.runLength[this.stackSize] = runLength;
      this.stackSize += 1;
    };

    TimSort.prototype.mergeRuns = function mergeRuns() {
      while (this.stackSize > 1) {
        var n = this.stackSize - 2;

        if (n >= 1 && this.runLength[n - 1] <= this.runLength[n] + this.runLength[n + 1] || n >= 2 && this.runLength[n - 2] <= this.runLength[n] + this.runLength[n - 1]) {

          if (this.runLength[n - 1] < this.runLength[n + 1]) {
            n--;
          }
        } else if (this.runLength[n] > this.runLength[n + 1]) {
          break;
        }
        this.mergeAt(n);
      }
    };

    TimSort.prototype.forceMergeRuns = function forceMergeRuns() {
      while (this.stackSize > 1) {
        var n = this.stackSize - 2;

        if (n > 0 && this.runLength[n - 1] < this.runLength[n + 1]) {
          n--;
        }

        this.mergeAt(n);
      }
    };

    TimSort.prototype.mergeAt = function mergeAt(i) {
      var compare = this.compare;
      var array = this.array;

      var start1 = this.runStart[i];
      var length1 = this.runLength[i];
      var start2 = this.runStart[i + 1];
      var length2 = this.runLength[i + 1];

      this.runLength[i] = length1 + length2;

      if (i === this.stackSize - 3) {
        this.runStart[i + 1] = this.runStart[i + 2];
        this.runLength[i + 1] = this.runLength[i + 2];
      }

      this.stackSize--;

      var k = gallopRight(array[start2], array, start1, length1, 0, compare);
      start1 += k;
      length1 -= k;

      if (length1 === 0) {
        return;
      }

      length2 = gallopLeft(array[start1 + length1 - 1], array, start2, length2, length2 - 1, compare);

      if (length2 === 0) {
        return;
      }

      if (length1 <= length2) {
        this.mergeLow(start1, length1, start2, length2);
      } else {
        this.mergeHigh(start1, length1, start2, length2);
      }
    };

    TimSort.prototype.mergeLow = function mergeLow(start1, length1, start2, length2) {

      var compare = this.compare;
      var array = this.array;
      var tmp = this.tmp;
      var i = 0;

      for (i = 0; i < length1; i++) {
        tmp[i] = array[start1 + i];
      }

      var cursor1 = 0;
      var cursor2 = start2;
      var dest = start1;

      array[dest++] = array[cursor2++];

      if (--length2 === 0) {
        for (i = 0; i < length1; i++) {
          array[dest + i] = tmp[cursor1 + i];
        }
        return;
      }

      if (length1 === 1) {
        for (i = 0; i < length2; i++) {
          array[dest + i] = array[cursor2 + i];
        }
        array[dest + length2] = tmp[cursor1];
        return;
      }

      var minGallop = this.minGallop;

      while (true) {
        var count1 = 0;
        var count2 = 0;
        var exit = false;

        do {
          if (compare(array[cursor2], tmp[cursor1]) < 0) {
            array[dest++] = array[cursor2++];
            count2++;
            count1 = 0;

            if (--length2 === 0) {
              exit = true;
              break;
            }
          } else {
            array[dest++] = tmp[cursor1++];
            count1++;
            count2 = 0;
            if (--length1 === 1) {
              exit = true;
              break;
            }
          }
        } while ((count1 | count2) < minGallop);

        if (exit) {
          break;
        }

        do {
          count1 = gallopRight(array[cursor2], tmp, cursor1, length1, 0, compare);

          if (count1 !== 0) {
            for (i = 0; i < count1; i++) {
              array[dest + i] = tmp[cursor1 + i];
            }

            dest += count1;
            cursor1 += count1;
            length1 -= count1;
            if (length1 <= 1) {
              exit = true;
              break;
            }
          }

          array[dest++] = array[cursor2++];

          if (--length2 === 0) {
            exit = true;
            break;
          }

          count2 = gallopLeft(tmp[cursor1], array, cursor2, length2, 0, compare);

          if (count2 !== 0) {
            for (i = 0; i < count2; i++) {
              array[dest + i] = array[cursor2 + i];
            }

            dest += count2;
            cursor2 += count2;
            length2 -= count2;

            if (length2 === 0) {
              exit = true;
              break;
            }
          }
          array[dest++] = tmp[cursor1++];

          if (--length1 === 1) {
            exit = true;
            break;
          }

          minGallop--;
        } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);

        if (exit) {
          break;
        }

        if (minGallop < 0) {
          minGallop = 0;
        }

        minGallop += 2;
      }

      this.minGallop = minGallop;

      if (minGallop < 1) {
        this.minGallop = 1;
      }

      if (length1 === 1) {
        for (i = 0; i < length2; i++) {
          array[dest + i] = array[cursor2 + i];
        }
        array[dest + length2] = tmp[cursor1];
      } else if (length1 === 0) {
        throw new Error('mergeLow preconditions were not respected');
      } else {
        for (i = 0; i < length1; i++) {
          array[dest + i] = tmp[cursor1 + i];
        }
      }
    };

    TimSort.prototype.mergeHigh = function mergeHigh(start1, length1, start2, length2) {
      var compare = this.compare;
      var array = this.array;
      var tmp = this.tmp;
      var i = 0;

      for (i = 0; i < length2; i++) {
        tmp[i] = array[start2 + i];
      }

      var cursor1 = start1 + length1 - 1;
      var cursor2 = length2 - 1;
      var dest = start2 + length2 - 1;
      var customCursor = 0;
      var customDest = 0;

      array[dest--] = array[cursor1--];

      if (--length1 === 0) {
        customCursor = dest - (length2 - 1);

        for (i = 0; i < length2; i++) {
          array[customCursor + i] = tmp[i];
        }

        return;
      }

      if (length2 === 1) {
        dest -= length1;
        cursor1 -= length1;
        customDest = dest + 1;
        customCursor = cursor1 + 1;

        for (i = length1 - 1; i >= 0; i--) {
          array[customDest + i] = array[customCursor + i];
        }

        array[dest] = tmp[cursor2];
        return;
      }

      var minGallop = this.minGallop;

      while (true) {
        var count1 = 0;
        var count2 = 0;
        var exit = false;

        do {
          if (compare(tmp[cursor2], array[cursor1]) < 0) {
            array[dest--] = array[cursor1--];
            count1++;
            count2 = 0;
            if (--length1 === 0) {
              exit = true;
              break;
            }
          } else {
            array[dest--] = tmp[cursor2--];
            count2++;
            count1 = 0;
            if (--length2 === 1) {
              exit = true;
              break;
            }
          }
        } while ((count1 | count2) < minGallop);

        if (exit) {
          break;
        }

        do {
          count1 = length1 - gallopRight(tmp[cursor2], array, start1, length1, length1 - 1, compare);

          if (count1 !== 0) {
            dest -= count1;
            cursor1 -= count1;
            length1 -= count1;
            customDest = dest + 1;
            customCursor = cursor1 + 1;

            for (i = count1 - 1; i >= 0; i--) {
              array[customDest + i] = array[customCursor + i];
            }

            if (length1 === 0) {
              exit = true;
              break;
            }
          }

          array[dest--] = tmp[cursor2--];

          if (--length2 === 1) {
            exit = true;
            break;
          }

          count2 = length2 - gallopLeft(array[cursor1], tmp, 0, length2, length2 - 1, compare);

          if (count2 !== 0) {
            dest -= count2;
            cursor2 -= count2;
            length2 -= count2;
            customDest = dest + 1;
            customCursor = cursor2 + 1;

            for (i = 0; i < count2; i++) {
              array[customDest + i] = tmp[customCursor + i];
            }

            if (length2 <= 1) {
              exit = true;
              break;
            }
          }

          array[dest--] = array[cursor1--];

          if (--length1 === 0) {
            exit = true;
            break;
          }

          minGallop--;
        } while (count1 >= DEFAULT_MIN_GALLOPING || count2 >= DEFAULT_MIN_GALLOPING);

        if (exit) {
          break;
        }

        if (minGallop < 0) {
          minGallop = 0;
        }

        minGallop += 2;
      }

      this.minGallop = minGallop;

      if (minGallop < 1) {
        this.minGallop = 1;
      }

      if (length2 === 1) {
        dest -= length1;
        cursor1 -= length1;
        customDest = dest + 1;
        customCursor = cursor1 + 1;

        for (i = length1 - 1; i >= 0; i--) {
          array[customDest + i] = array[customCursor + i];
        }

        array[dest] = tmp[cursor2];
      } else if (length2 === 0) {
        throw new Error('mergeHigh preconditions were not respected');
      } else {
        customCursor = dest - (length2 - 1);
        for (i = 0; i < length2; i++) {
          array[customCursor + i] = tmp[i];
        }
      }
    };

    return TimSort;
  })();

  function sort(array, compare, lo, hi) {
    if (!Array.isArray(array)) {
      throw new TypeError('Can only sort arrays');
    }

    if (!compare) {
      compare = alphabeticalCompare;
    } else if (typeof compare !== 'function') {
      hi = lo;
      lo = compare;
      compare = alphabeticalCompare;
    }

    if (!lo) {
      lo = 0;
    }
    if (!hi) {
      hi = array.length;
    }

    var remaining = hi - lo;

    if (remaining < 2) {
      return;
    }

    var runLength = 0;

    if (remaining < DEFAULT_MIN_MERGE) {
      runLength = makeAscendingRun(array, lo, hi, compare);
      binaryInsertionSort(array, lo, hi, lo + runLength, compare);
      return;
    }

    var ts = new TimSort(array, compare);

    var minRun = minRunLength(remaining);

    do {
      runLength = makeAscendingRun(array, lo, hi, compare);
      if (runLength < minRun) {
        var force = remaining;
        if (force > minRun) {
          force = minRun;
        }

        binaryInsertionSort(array, lo, lo + force, lo + runLength, compare);
        runLength = force;
      }

      ts.pushRun(lo, runLength);
      ts.mergeRuns();

      remaining -= runLength;
      lo += runLength;
    } while (remaining !== 0);

    ts.forceMergeRuns();
  }
});


 }),
 (function(module, exports, __nested_webpack_require_1156316__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalStrategy = exports.HorizontalStrategy = undefined;

var _getPrototypeOf = __nested_webpack_require_1156316__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = __nested_webpack_require_1156316__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __nested_webpack_require_1156316__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __nested_webpack_require_1156316__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1156316__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TimSort = __nested_webpack_require_1156316__(83);


var DirectionInterface = function () {
  function DirectionInterface() {
    (0, _classCallCheck3['default'])(this, DirectionInterface);
  }

  (0, _createClass3['default'])(DirectionInterface, [{
    key: 'abstract',

    value: function abstract() {
      throw new Error("Can't instantiate abstract class!");
    }


  }, {
    key: 'fake_use',
    value: function fake_use() {}



  }, {
    key: 'curveType',
    value: function curveType() {
      return this.abstract();
    }


  }, {
    key: 'getPosition',
    value: function getPosition(node) {
      this.fake_use(node);
      return this.abstract();
    }


  }, {
    key: 'setPosition',
    value: function setPosition(node, position) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      this.fake_use(node, position, level);
      this.abstract();
    }


  }, {
    key: 'getTreeSize',
    value: function getTreeSize(index) {
      this.fake_use(index);
      return this.abstract();
    }


  }, {
    key: 'sort',
    value: function sort(nodeArray) {
      this.fake_use(nodeArray);
      this.abstract();
    }


  }, {
    key: 'fix',
    value: function fix(node, level) {
      this.fake_use(node, level);
      this.abstract();
    }


  }, {
    key: 'shift',
    value: function shift(nodeId, diff) {
      this.fake_use(nodeId, diff);
      this.abstract();
    }
  }]);
  return DirectionInterface;
}();



var VerticalStrategy = function (_DirectionInterface) {
  (0, _inherits3['default'])(VerticalStrategy, _DirectionInterface);

  function VerticalStrategy(layout) {
    (0, _classCallCheck3['default'])(this, VerticalStrategy);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (VerticalStrategy.__proto__ || (0, _getPrototypeOf2['default'])(VerticalStrategy)).call(this));

    _this.layout = layout;
    return _this;
  }



  (0, _createClass3['default'])(VerticalStrategy, [{
    key: 'curveType',
    value: function curveType() {
      return 'horizontal';
    }


  }, {
    key: 'getPosition',
    value: function getPosition(node) {
      return node.x;
    }


  }, {
    key: 'setPosition',
    value: function setPosition(node, position) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      if (level !== undefined) {
        this.layout.hierarchical.addToOrdering(node, level);
      }
      node.x = position;
    }


  }, {
    key: 'getTreeSize',
    value: function getTreeSize(index) {
      var res = this.layout.hierarchical.getTreeSize(this.layout.body.nodes, index);
      return { min: res.min_x, max: res.max_x };
    }


  }, {
    key: 'sort',
    value: function sort(nodeArray) {
      TimSort.sort(nodeArray, function (a, b) {
        return a.x - b.x;
      });
    }


  }, {
    key: 'fix',
    value: function fix(node, level) {
      node.y = this.layout.options.hierarchical.levelSeparation * level;
      node.options.fixed.y = true;
    }


  }, {
    key: 'shift',
    value: function shift(nodeId, diff) {
      this.layout.body.nodes[nodeId].x += diff;
    }
  }]);
  return VerticalStrategy;
}(DirectionInterface);



var HorizontalStrategy = function (_DirectionInterface2) {
  (0, _inherits3['default'])(HorizontalStrategy, _DirectionInterface2);

  function HorizontalStrategy(layout) {
    (0, _classCallCheck3['default'])(this, HorizontalStrategy);

    var _this2 = (0, _possibleConstructorReturn3['default'])(this, (HorizontalStrategy.__proto__ || (0, _getPrototypeOf2['default'])(HorizontalStrategy)).call(this));

    _this2.layout = layout;
    return _this2;
  }



  (0, _createClass3['default'])(HorizontalStrategy, [{
    key: 'curveType',
    value: function curveType() {
      return 'vertical';
    }


  }, {
    key: 'getPosition',
    value: function getPosition(node) {
      return node.y;
    }


  }, {
    key: 'setPosition',
    value: function setPosition(node, position) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      if (level !== undefined) {
        this.layout.hierarchical.addToOrdering(node, level);
      }
      node.y = position;
    }


  }, {
    key: 'getTreeSize',
    value: function getTreeSize(index) {
      var res = this.layout.hierarchical.getTreeSize(this.layout.body.nodes, index);
      return { min: res.min_y, max: res.max_y };
    }


  }, {
    key: 'sort',
    value: function sort(nodeArray) {
      TimSort.sort(nodeArray, function (a, b) {
        return a.y - b.y;
      });
    }


  }, {
    key: 'fix',
    value: function fix(node, level) {
      node.x = this.layout.options.hierarchical.levelSeparation * level;
      node.options.fixed.x = true;
    }


  }, {
    key: 'shift',
    value: function shift(nodeId, diff) {
      this.layout.body.nodes[nodeId].y += diff;
    }
  }]);
  return HorizontalStrategy;
}(DirectionInterface);

exports.HorizontalStrategy = HorizontalStrategy;
exports.VerticalStrategy = VerticalStrategy;

 }),
 (function(module, exports, __nested_webpack_require_1166276__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __nested_webpack_require_1166276__(9);

var _keys2 = _interopRequireDefault(_keys);

var _stringify = __nested_webpack_require_1166276__(23);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __nested_webpack_require_1166276__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __nested_webpack_require_1166276__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1166276__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_1166276__(2);
var Hammer = __nested_webpack_require_1166276__(24);
var hammerUtil = __nested_webpack_require_1166276__(36);


var ManipulationSystem = function () {
  function ManipulationSystem(body, canvas, selectionHandler) {
    var _this = this;

    (0, _classCallCheck3['default'])(this, ManipulationSystem);

    this.body = body;
    this.canvas = canvas;
    this.selectionHandler = selectionHandler;

    this.editMode = false;
    this.manipulationDiv = undefined;
    this.editModeDiv = undefined;
    this.closeDiv = undefined;

    this.manipulationHammers = [];
    this.temporaryUIFunctions = {};
    this.temporaryEventFunctions = [];

    this.touchTime = 0;
    this.temporaryIds = { nodes: [], edges: [] };
    this.guiEnabled = false;
    this.inMode = false;
    this.selectedControlNode = undefined;

    this.options = {};
    this.defaultOptions = {
      enabled: false,
      initiallyActive: false,
      addNode: true,
      addEdge: true,
      editNode: undefined,
      editEdge: true,
      deleteNode: true,
      deleteEdge: true,
      controlNodeStyle: {
        shape: 'dot',
        size: 6,
        color: {
          background: '#ff0000',
          border: '#3c3c3c',
          highlight: { background: '#07f968', border: '#3c3c3c' }
        },
        borderWidth: 2,
        borderWidthSelected: 2
      }
    };
    util.extend(this.options, this.defaultOptions);

    this.body.emitter.on('destroy', function () {
      _this._clean();
    });
    this.body.emitter.on('_dataChanged', this._restore.bind(this));
    this.body.emitter.on('_resetData', this._restore.bind(this));
  }



  (0, _createClass3['default'])(ManipulationSystem, [{
    key: '_restore',
    value: function _restore() {
      if (this.inMode !== false) {
        if (this.options.initiallyActive === true) {
          this.enableEditMode();
        } else {
          this.disableEditMode();
        }
      }
    }


  }, {
    key: 'setOptions',
    value: function setOptions(options, allOptions, globalOptions) {
      if (allOptions !== undefined) {
        if (allOptions.locale !== undefined) {
          this.options.locale = allOptions.locale;
        } else {
          this.options.locale = globalOptions.locale;
        }
        if (allOptions.locales !== undefined) {
          this.options.locales = allOptions.locales;
        } else {
          this.options.locales = globalOptions.locales;
        }
      }

      if (options !== undefined) {
        if (typeof options === 'boolean') {
          this.options.enabled = options;
        } else {
          this.options.enabled = true;
          util.deepExtend(this.options, options);
        }
        if (this.options.initiallyActive === true) {
          this.editMode = true;
        }
        this._setup();
      }
    }


  }, {
    key: 'toggleEditMode',
    value: function toggleEditMode() {
      if (this.editMode === true) {
        this.disableEditMode();
      } else {
        this.enableEditMode();
      }
    }


  }, {
    key: 'enableEditMode',
    value: function enableEditMode() {
      this.editMode = true;

      this._clean();
      if (this.guiEnabled === true) {
        this.manipulationDiv.style.display = 'block';
        this.closeDiv.style.display = 'block';
        this.editModeDiv.style.display = 'none';
        this.showManipulatorToolbar();
      }
    }


  }, {
    key: 'disableEditMode',
    value: function disableEditMode() {
      this.editMode = false;

      this._clean();
      if (this.guiEnabled === true) {
        this.manipulationDiv.style.display = 'none';
        this.closeDiv.style.display = 'none';
        this.editModeDiv.style.display = 'block';
        this._createEditButton();
      }
    }


  }, {
    key: 'showManipulatorToolbar',
    value: function showManipulatorToolbar() {
      this._clean();

      this.manipulationDOM = {};

      if (this.guiEnabled === true) {
        this.editMode = true;
        this.manipulationDiv.style.display = 'block';
        this.closeDiv.style.display = 'block';

        var selectedNodeCount = this.selectionHandler._getSelectedNodeCount();
        var selectedEdgeCount = this.selectionHandler._getSelectedEdgeCount();
        var selectedTotalCount = selectedNodeCount + selectedEdgeCount;
        var locale = this.options.locales[this.options.locale];
        var needSeperator = false;

        if (this.options.addNode !== false) {
          this._createAddNodeButton(locale);
          needSeperator = true;
        }
        if (this.options.addEdge !== false) {
          if (needSeperator === true) {
            this._createSeperator(1);
          } else {
            needSeperator = true;
          }
          this._createAddEdgeButton(locale);
        }

        if (selectedNodeCount === 1 && typeof this.options.editNode === 'function') {
          if (needSeperator === true) {
            this._createSeperator(2);
          } else {
            needSeperator = true;
          }
          this._createEditNodeButton(locale);
        } else if (selectedEdgeCount === 1 && selectedNodeCount === 0 && this.options.editEdge !== false) {
          if (needSeperator === true) {
            this._createSeperator(3);
          } else {
            needSeperator = true;
          }
          this._createEditEdgeButton(locale);
        }

        if (selectedTotalCount !== 0) {
          if (selectedNodeCount > 0 && this.options.deleteNode !== false) {
            if (needSeperator === true) {
              this._createSeperator(4);
            }
            this._createDeleteButton(locale);
          } else if (selectedNodeCount === 0 && this.options.deleteEdge !== false) {
            if (needSeperator === true) {
              this._createSeperator(4);
            }
            this._createDeleteButton(locale);
          }
        }

        this._bindHammerToDiv(this.closeDiv, this.toggleEditMode.bind(this));

        this._temporaryBindEvent('select', this.showManipulatorToolbar.bind(this));
      }

      this.body.emitter.emit('_redraw');
    }


  }, {
    key: 'addNodeMode',
    value: function addNodeMode() {
      if (this.editMode !== true) {
        this.enableEditMode();
      }

      this._clean();

      this.inMode = 'addNode';
      if (this.guiEnabled === true) {
        var locale = this.options.locales[this.options.locale];
        this.manipulationDOM = {};
        this._createBackButton(locale);
        this._createSeperator();
        this._createDescription(locale['addDescription'] || this.options.locales['en']['addDescription']);

        this._bindHammerToDiv(this.closeDiv, this.toggleEditMode.bind(this));
      }

      this._temporaryBindEvent('click', this._performAddNode.bind(this));
    }


  }, {
    key: 'editNode',
    value: function editNode() {
      var _this2 = this;

      if (this.editMode !== true) {
        this.enableEditMode();
      }

      this._clean();
      var node = this.selectionHandler._getSelectedNode();
      if (node !== undefined) {
        this.inMode = 'editNode';
        if (typeof this.options.editNode === 'function') {
          if (node.isCluster !== true) {
            var data = util.deepExtend({}, node.options, false);
            data.x = node.x;
            data.y = node.y;

            if (this.options.editNode.length === 2) {
              this.options.editNode(data, function (finalizedData) {
                if (finalizedData !== null && finalizedData !== undefined && _this2.inMode === 'editNode') {
                  _this2.body.data.nodes.getDataSet().update(finalizedData);
                }
                _this2.showManipulatorToolbar();
              });
            } else {
              throw new Error('The function for edit does not support two arguments (data, callback)');
            }
          } else {
            alert(this.options.locales[this.options.locale]['editClusterError'] || this.options.locales['en']['editClusterError']);
          }
        } else {
          throw new Error('No function has been configured to handle the editing of nodes.');
        }
      } else {
        this.showManipulatorToolbar();
      }
    }


  }, {
    key: 'addEdgeMode',
    value: function addEdgeMode() {
      if (this.editMode !== true) {
        this.enableEditMode();
      }

      this._clean();

      this.inMode = 'addEdge';
      if (this.guiEnabled === true) {
        var locale = this.options.locales[this.options.locale];
        this.manipulationDOM = {};
        this._createBackButton(locale);
        this._createSeperator();
        this._createDescription(locale['edgeDescription'] || this.options.locales['en']['edgeDescription']);

        this._bindHammerToDiv(this.closeDiv, this.toggleEditMode.bind(this));
      }

      this._temporaryBindUI('onTouch', this._handleConnect.bind(this));
      this._temporaryBindUI('onDragEnd', this._finishConnect.bind(this));
      this._temporaryBindUI('onDrag', this._dragControlNode.bind(this));
      this._temporaryBindUI('onRelease', this._finishConnect.bind(this));
      this._temporaryBindUI('onDragStart', this._dragStartEdge.bind(this));
      this._temporaryBindUI('onHold', function () {});
    }


  }, {
    key: 'editEdgeMode',
    value: function editEdgeMode() {
      if (this.editMode !== true) {
        this.enableEditMode();
      }

      this._clean();

      this.inMode = 'editEdge';
      if ((0, _typeof3['default'])(this.options.editEdge) === 'object' && typeof this.options.editEdge.editWithoutDrag === 'function') {
        this.edgeBeingEditedId = this.selectionHandler.getSelectedEdges()[0];
        if (this.edgeBeingEditedId !== undefined) {
          var edge = this.body.edges[this.edgeBeingEditedId];
          this._performEditEdge(edge.from, edge.to);
          return;
        }
      }
      if (this.guiEnabled === true) {
        var locale = this.options.locales[this.options.locale];
        this.manipulationDOM = {};
        this._createBackButton(locale);
        this._createSeperator();
        this._createDescription(locale['editEdgeDescription'] || this.options.locales['en']['editEdgeDescription']);

        this._bindHammerToDiv(this.closeDiv, this.toggleEditMode.bind(this));
      }

      this.edgeBeingEditedId = this.selectionHandler.getSelectedEdges()[0];
      if (this.edgeBeingEditedId !== undefined) {
        var _edge = this.body.edges[this.edgeBeingEditedId];

        var controlNodeFrom = this._getNewTargetNode(_edge.from.x, _edge.from.y);
        var controlNodeTo = this._getNewTargetNode(_edge.to.x, _edge.to.y);

        this.temporaryIds.nodes.push(controlNodeFrom.id);
        this.temporaryIds.nodes.push(controlNodeTo.id);

        this.body.nodes[controlNodeFrom.id] = controlNodeFrom;
        this.body.nodeIndices.push(controlNodeFrom.id);
        this.body.nodes[controlNodeTo.id] = controlNodeTo;
        this.body.nodeIndices.push(controlNodeTo.id);

        this._temporaryBindUI('onTouch', this._controlNodeTouch.bind(this)); 
        this._temporaryBindUI('onTap', function () {}); 
        this._temporaryBindUI('onHold', function () {}); 
        this._temporaryBindUI('onDragStart', this._controlNodeDragStart.bind(this)); 
        this._temporaryBindUI('onDrag', this._controlNodeDrag.bind(this)); 
        this._temporaryBindUI('onDragEnd', this._controlNodeDragEnd.bind(this)); 
        this._temporaryBindUI('onMouseMove', function () {}); 

        this._temporaryBindEvent('beforeDrawing', function (ctx) {
          var positions = _edge.edgeType.findBorderPositions(ctx);
          if (controlNodeFrom.selected === false) {
            controlNodeFrom.x = positions.from.x;
            controlNodeFrom.y = positions.from.y;
          }
          if (controlNodeTo.selected === false) {
            controlNodeTo.x = positions.to.x;
            controlNodeTo.y = positions.to.y;
          }
        });

        this.body.emitter.emit('_redraw');
      } else {
        this.showManipulatorToolbar();
      }
    }


  }, {
    key: 'deleteSelected',
    value: function deleteSelected() {
      var _this3 = this;

      if (this.editMode !== true) {
        this.enableEditMode();
      }

      this._clean();

      this.inMode = 'delete';
      var selectedNodes = this.selectionHandler.getSelectedNodes();
      var selectedEdges = this.selectionHandler.getSelectedEdges();
      var deleteFunction = undefined;
      if (selectedNodes.length > 0) {
        for (var i = 0; i < selectedNodes.length; i++) {
          if (this.body.nodes[selectedNodes[i]].isCluster === true) {
            alert(this.options.locales[this.options.locale]['deleteClusterError'] || this.options.locales['en']['deleteClusterError']);
            return;
          }
        }

        if (typeof this.options.deleteNode === 'function') {
          deleteFunction = this.options.deleteNode;
        }
      } else if (selectedEdges.length > 0) {
        if (typeof this.options.deleteEdge === 'function') {
          deleteFunction = this.options.deleteEdge;
        }
      }

      if (typeof deleteFunction === 'function') {
        var data = { nodes: selectedNodes, edges: selectedEdges };
        if (deleteFunction.length === 2) {
          deleteFunction(data, function (finalizedData) {
            if (finalizedData !== null && finalizedData !== undefined && _this3.inMode === 'delete') {
              _this3.body.data.edges.getDataSet().remove(finalizedData.edges);
              _this3.body.data.nodes.getDataSet().remove(finalizedData.nodes);
              _this3.body.emitter.emit('startSimulation');
              _this3.showManipulatorToolbar();
            } else {
              _this3.body.emitter.emit('startSimulation');
              _this3.showManipulatorToolbar();
            }
          });
        } else {
          throw new Error('The function for delete does not support two arguments (data, callback)');
        }
      } else {
        this.body.data.edges.getDataSet().remove(selectedEdges);
        this.body.data.nodes.getDataSet().remove(selectedNodes);
        this.body.emitter.emit('startSimulation');
        this.showManipulatorToolbar();
      }
    }



  }, {
    key: '_setup',
    value: function _setup() {
      if (this.options.enabled === true) {
        this.guiEnabled = true;

        this._createWrappers();
        if (this.editMode === false) {
          this._createEditButton();
        } else {
          this.showManipulatorToolbar();
        }
      } else {
        this._removeManipulationDOM();

        this.guiEnabled = false;
      }
    }


  }, {
    key: '_createWrappers',
    value: function _createWrappers() {
      if (this.manipulationDiv === undefined) {
        this.manipulationDiv = document.createElement('div');
        this.manipulationDiv.className = 'vis-manipulation';
        if (this.editMode === true) {
          this.manipulationDiv.style.display = 'block';
        } else {
          this.manipulationDiv.style.display = 'none';
        }
        this.canvas.frame.appendChild(this.manipulationDiv);
      }

      if (this.editModeDiv === undefined) {
        this.editModeDiv = document.createElement('div');
        this.editModeDiv.className = 'vis-edit-mode';
        if (this.editMode === true) {
          this.editModeDiv.style.display = 'none';
        } else {
          this.editModeDiv.style.display = 'block';
        }
        this.canvas.frame.appendChild(this.editModeDiv);
      }

      if (this.closeDiv === undefined) {
        this.closeDiv = document.createElement('div');
        this.closeDiv.className = 'vis-close';
        this.closeDiv.style.display = this.manipulationDiv.style.display;
        this.canvas.frame.appendChild(this.closeDiv);
      }
    }


  }, {
    key: '_getNewTargetNode',
    value: function _getNewTargetNode(x, y) {
      var controlNodeStyle = util.deepExtend({}, this.options.controlNodeStyle);

      controlNodeStyle.id = 'targetNode' + util.randomUUID();
      controlNodeStyle.hidden = false;
      controlNodeStyle.physics = false;
      controlNodeStyle.x = x;
      controlNodeStyle.y = y;

      var node = this.body.functions.createNode(controlNodeStyle);
      node.shape.boundingBox = { left: x, right: x, top: y, bottom: y };

      return node;
    }


  }, {
    key: '_createEditButton',
    value: function _createEditButton() {
      this._clean();

      this.manipulationDOM = {};

      util.recursiveDOMDelete(this.editModeDiv);

      var locale = this.options.locales[this.options.locale];
      var button = this._createButton('editMode', 'vis-button vis-edit vis-edit-mode', locale['edit'] || this.options.locales['en']['edit']);
      this.editModeDiv.appendChild(button);

      this._bindHammerToDiv(button, this.toggleEditMode.bind(this));
    }


  }, {
    key: '_clean',
    value: function _clean() {
      this.inMode = false;

      if (this.guiEnabled === true) {
        util.recursiveDOMDelete(this.editModeDiv);
        util.recursiveDOMDelete(this.manipulationDiv);

        this._cleanManipulatorHammers();
      }

      this._cleanupTemporaryNodesAndEdges();

      this._unbindTemporaryUIs();

      this._unbindTemporaryEvents();

      this.body.emitter.emit('restorePhysics');
    }


  }, {
    key: '_cleanManipulatorHammers',
    value: function _cleanManipulatorHammers() {
      if (this.manipulationHammers.length != 0) {
        for (var i = 0; i < this.manipulationHammers.length; i++) {
          this.manipulationHammers[i].destroy();
        }
        this.manipulationHammers = [];
      }
    }


  }, {
    key: '_removeManipulationDOM',
    value: function _removeManipulationDOM() {
      this._clean();

      util.recursiveDOMDelete(this.manipulationDiv);
      util.recursiveDOMDelete(this.editModeDiv);
      util.recursiveDOMDelete(this.closeDiv);

      if (this.manipulationDiv) {
        this.canvas.frame.removeChild(this.manipulationDiv);
      }
      if (this.editModeDiv) {
        this.canvas.frame.removeChild(this.editModeDiv);
      }
      if (this.closeDiv) {
        this.canvas.frame.removeChild(this.closeDiv);
      }

      this.manipulationDiv = undefined;
      this.editModeDiv = undefined;
      this.closeDiv = undefined;
    }


  }, {
    key: '_createSeperator',
    value: function _createSeperator() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.manipulationDOM['seperatorLineDiv' + index] = document.createElement('div');
      this.manipulationDOM['seperatorLineDiv' + index].className = 'vis-separator-line';
      this.manipulationDiv.appendChild(this.manipulationDOM['seperatorLineDiv' + index]);
    }



  }, {
    key: '_createAddNodeButton',
    value: function _createAddNodeButton(locale) {
      var button = this._createButton('addNode', 'vis-button vis-add', locale['addNode'] || this.options.locales['en']['addNode']);
      this.manipulationDiv.appendChild(button);
      this._bindHammerToDiv(button, this.addNodeMode.bind(this));
    }


  }, {
    key: '_createAddEdgeButton',
    value: function _createAddEdgeButton(locale) {
      var button = this._createButton('addEdge', 'vis-button vis-connect', locale['addEdge'] || this.options.locales['en']['addEdge']);
      this.manipulationDiv.appendChild(button);
      this._bindHammerToDiv(button, this.addEdgeMode.bind(this));
    }


  }, {
    key: '_createEditNodeButton',
    value: function _createEditNodeButton(locale) {
      var button = this._createButton('editNode', 'vis-button vis-edit', locale['editNode'] || this.options.locales['en']['editNode']);
      this.manipulationDiv.appendChild(button);
      this._bindHammerToDiv(button, this.editNode.bind(this));
    }


  }, {
    key: '_createEditEdgeButton',
    value: function _createEditEdgeButton(locale) {
      var button = this._createButton('editEdge', 'vis-button vis-edit', locale['editEdge'] || this.options.locales['en']['editEdge']);
      this.manipulationDiv.appendChild(button);
      this._bindHammerToDiv(button, this.editEdgeMode.bind(this));
    }


  }, {
    key: '_createDeleteButton',
    value: function _createDeleteButton(locale) {
      var deleteBtnClass;
      if (this.options.rtl) {
        deleteBtnClass = 'vis-button vis-delete-rtl';
      } else {
        deleteBtnClass = 'vis-button vis-delete';
      }
      var button = this._createButton('delete', deleteBtnClass, locale['del'] || this.options.locales['en']['del']);
      this.manipulationDiv.appendChild(button);
      this._bindHammerToDiv(button, this.deleteSelected.bind(this));
    }


  }, {
    key: '_createBackButton',
    value: function _createBackButton(locale) {
      var button = this._createButton('back', 'vis-button vis-back', locale['back'] || this.options.locales['en']['back']);
      this.manipulationDiv.appendChild(button);
      this._bindHammerToDiv(button, this.showManipulatorToolbar.bind(this));
    }


  }, {
    key: '_createButton',
    value: function _createButton(id, className, label) {
      var labelClassName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'vis-label';

      this.manipulationDOM[id + 'Div'] = document.createElement('div');
      this.manipulationDOM[id + 'Div'].className = className;
      this.manipulationDOM[id + 'Label'] = document.createElement('div');
      this.manipulationDOM[id + 'Label'].className = labelClassName;
      this.manipulationDOM[id + 'Label'].innerHTML = label;
      this.manipulationDOM[id + 'Div'].appendChild(this.manipulationDOM[id + 'Label']);
      return this.manipulationDOM[id + 'Div'];
    }


  }, {
    key: '_createDescription',
    value: function _createDescription(label) {
      this.manipulationDiv.appendChild(this._createButton('description', 'vis-button vis-none', label));
    }



  }, {
    key: '_temporaryBindEvent',
    value: function _temporaryBindEvent(event, newFunction) {
      this.temporaryEventFunctions.push({
        event: event,
        boundFunction: newFunction
      });
      this.body.emitter.on(event, newFunction);
    }


  }, {
    key: '_temporaryBindUI',
    value: function _temporaryBindUI(UIfunctionName, newFunction) {
      if (this.body.eventListeners[UIfunctionName] !== undefined) {
        this.temporaryUIFunctions[UIfunctionName] = this.body.eventListeners[UIfunctionName];
        this.body.eventListeners[UIfunctionName] = newFunction;
      } else {
        throw new Error('This UI function does not exist. Typo? You tried: ' + UIfunctionName + ' possible are: ' + (0, _stringify2['default'])((0, _keys2['default'])(this.body.eventListeners)));
      }
    }


  }, {
    key: '_unbindTemporaryUIs',
    value: function _unbindTemporaryUIs() {
      for (var functionName in this.temporaryUIFunctions) {
        if (this.temporaryUIFunctions.hasOwnProperty(functionName)) {
          this.body.eventListeners[functionName] = this.temporaryUIFunctions[functionName];
          delete this.temporaryUIFunctions[functionName];
        }
      }
      this.temporaryUIFunctions = {};
    }


  }, {
    key: '_unbindTemporaryEvents',
    value: function _unbindTemporaryEvents() {
      for (var i = 0; i < this.temporaryEventFunctions.length; i++) {
        var eventName = this.temporaryEventFunctions[i].event;
        var boundFunction = this.temporaryEventFunctions[i].boundFunction;
        this.body.emitter.off(eventName, boundFunction);
      }
      this.temporaryEventFunctions = [];
    }


  }, {
    key: '_bindHammerToDiv',
    value: function _bindHammerToDiv(domElement, boundFunction) {
      var hammer = new Hammer(domElement, {});
      hammerUtil.onTouch(hammer, boundFunction);
      this.manipulationHammers.push(hammer);
    }


  }, {
    key: '_cleanupTemporaryNodesAndEdges',
    value: function _cleanupTemporaryNodesAndEdges() {
      for (var i = 0; i < this.temporaryIds.edges.length; i++) {
        this.body.edges[this.temporaryIds.edges[i]].disconnect();
        delete this.body.edges[this.temporaryIds.edges[i]];
        var indexTempEdge = this.body.edgeIndices.indexOf(this.temporaryIds.edges[i]);
        if (indexTempEdge !== -1) {
          this.body.edgeIndices.splice(indexTempEdge, 1);
        }
      }

      for (var _i = 0; _i < this.temporaryIds.nodes.length; _i++) {
        delete this.body.nodes[this.temporaryIds.nodes[_i]];
        var indexTempNode = this.body.nodeIndices.indexOf(this.temporaryIds.nodes[_i]);
        if (indexTempNode !== -1) {
          this.body.nodeIndices.splice(indexTempNode, 1);
        }
      }

      this.temporaryIds = { nodes: [], edges: [] };
    }



  }, {
    key: '_controlNodeTouch',
    value: function _controlNodeTouch(event) {
      this.selectionHandler.unselectAll();
      this.lastTouch = this.body.functions.getPointer(event.center);
      this.lastTouch.translation = util.extend({}, this.body.view.translation); 
    }


  }, {
    key: '_controlNodeDragStart',
    value: function _controlNodeDragStart() {
      var pointer = this.lastTouch;
      var pointerObj = this.selectionHandler._pointerToPositionObject(pointer);
      var from = this.body.nodes[this.temporaryIds.nodes[0]];
      var to = this.body.nodes[this.temporaryIds.nodes[1]];
      var edge = this.body.edges[this.edgeBeingEditedId];
      this.selectedControlNode = undefined;

      var fromSelect = from.isOverlappingWith(pointerObj);
      var toSelect = to.isOverlappingWith(pointerObj);

      if (fromSelect === true) {
        this.selectedControlNode = from;
        edge.edgeType.from = from;
      } else if (toSelect === true) {
        this.selectedControlNode = to;
        edge.edgeType.to = to;
      }

      if (this.selectedControlNode !== undefined) {
        this.selectionHandler.selectObject(this.selectedControlNode);
      }

      this.body.emitter.emit('_redraw');
    }


  }, {
    key: '_controlNodeDrag',
    value: function _controlNodeDrag(event) {
      this.body.emitter.emit('disablePhysics');
      var pointer = this.body.functions.getPointer(event.center);
      var pos = this.canvas.DOMtoCanvas(pointer);
      if (this.selectedControlNode !== undefined) {
        this.selectedControlNode.x = pos.x;
        this.selectedControlNode.y = pos.y;
      } else {
        var diffX = pointer.x - this.lastTouch.x;
        var diffY = pointer.y - this.lastTouch.y;
        this.body.view.translation = {
          x: this.lastTouch.translation.x + diffX,
          y: this.lastTouch.translation.y + diffY
        };
      }
      this.body.emitter.emit('_redraw');
    }


  }, {
    key: '_controlNodeDragEnd',
    value: function _controlNodeDragEnd(event) {
      var pointer = this.body.functions.getPointer(event.center);
      var pointerObj = this.selectionHandler._pointerToPositionObject(pointer);
      var edge = this.body.edges[this.edgeBeingEditedId];
      if (this.selectedControlNode === undefined) {
        return;
      }

      this.selectionHandler.unselectAll();
      var overlappingNodeIds = this.selectionHandler._getAllNodesOverlappingWith(pointerObj);
      var node = undefined;
      for (var i = overlappingNodeIds.length - 1; i >= 0; i--) {
        if (overlappingNodeIds[i] !== this.selectedControlNode.id) {
          node = this.body.nodes[overlappingNodeIds[i]];
          break;
        }
      }
      if (node !== undefined && this.selectedControlNode !== undefined) {
        if (node.isCluster === true) {
          alert(this.options.locales[this.options.locale]['createEdgeError'] || this.options.locales['en']['createEdgeError']);
        } else {
          var from = this.body.nodes[this.temporaryIds.nodes[0]];
          if (this.selectedControlNode.id === from.id) {
            this._performEditEdge(node.id, edge.to.id);
          } else {
            this._performEditEdge(edge.from.id, node.id);
          }
        }
      } else {
        edge.updateEdgeType();
        this.body.emitter.emit('restorePhysics');
      }

      this.body.emitter.emit('_redraw');
    }



  }, {
    key: '_handleConnect',
    value: function _handleConnect(event) {
      if (new Date().valueOf() - this.touchTime > 100) {
        this.lastTouch = this.body.functions.getPointer(event.center);
        this.lastTouch.translation = util.extend({}, this.body.view.translation); 

        var pointer = this.lastTouch;
        var node = this.selectionHandler.getNodeAt(pointer);

        if (node !== undefined) {
          if (node.isCluster === true) {
            alert(this.options.locales[this.options.locale]['createEdgeError'] || this.options.locales['en']['createEdgeError']);
          } else {
            var targetNode = this._getNewTargetNode(node.x, node.y);
            this.body.nodes[targetNode.id] = targetNode;
            this.body.nodeIndices.push(targetNode.id);

            var connectionEdge = this.body.functions.createEdge({
              id: 'connectionEdge' + util.randomUUID(),
              from: node.id,
              to: targetNode.id,
              physics: false,
              smooth: {
                enabled: true,
                type: 'continuous',
                roundness: 0.5
              }
            });
            this.body.edges[connectionEdge.id] = connectionEdge;
            this.body.edgeIndices.push(connectionEdge.id);

            this.temporaryIds.nodes.push(targetNode.id);
            this.temporaryIds.edges.push(connectionEdge.id);
          }
        }
        this.touchTime = new Date().valueOf();
      }
    }


  }, {
    key: '_dragControlNode',
    value: function _dragControlNode(event) {
      var pointer = this.body.functions.getPointer(event.center);

      var pointerObj = this.selectionHandler._pointerToPositionObject(pointer);
      var connectFromId = undefined;
      if (this.temporaryIds.edges[0] !== undefined) {
        connectFromId = this.body.edges[this.temporaryIds.edges[0]].fromId;
      }
      var overlappingNodeIds = this.selectionHandler._getAllNodesOverlappingWith(pointerObj);
      var node = undefined;
      for (var i = overlappingNodeIds.length - 1; i >= 0; i--) {
        if (this.temporaryIds.nodes.indexOf(overlappingNodeIds[i]) === -1) {
          node = this.body.nodes[overlappingNodeIds[i]];
          break;
        }
      }

      event.controlEdge = { from: connectFromId, to: node ? node.id : undefined };
      this.selectionHandler._generateClickEvent('controlNodeDragging', event, pointer);

      if (this.temporaryIds.nodes[0] !== undefined) {
        var targetNode = this.body.nodes[this.temporaryIds.nodes[0]]; 
        targetNode.x = this.canvas._XconvertDOMtoCanvas(pointer.x);
        targetNode.y = this.canvas._YconvertDOMtoCanvas(pointer.y);
        this.body.emitter.emit('_redraw');
      } else {
        var diffX = pointer.x - this.lastTouch.x;
        var diffY = pointer.y - this.lastTouch.y;
        this.body.view.translation = {
          x: this.lastTouch.translation.x + diffX,
          y: this.lastTouch.translation.y + diffY
        };
      }
    }


  }, {
    key: '_finishConnect',
    value: function _finishConnect(event) {
      var pointer = this.body.functions.getPointer(event.center);
      var pointerObj = this.selectionHandler._pointerToPositionObject(pointer);

      var connectFromId = undefined;
      if (this.temporaryIds.edges[0] !== undefined) {
        connectFromId = this.body.edges[this.temporaryIds.edges[0]].fromId;
      }

      var overlappingNodeIds = this.selectionHandler._getAllNodesOverlappingWith(pointerObj);
      var node = undefined;
      for (var i = overlappingNodeIds.length - 1; i >= 0; i--) {
        if (this.temporaryIds.nodes.indexOf(overlappingNodeIds[i]) === -1) {
          node = this.body.nodes[overlappingNodeIds[i]];
          break;
        }
      }

      this._cleanupTemporaryNodesAndEdges();

      if (node !== undefined) {
        if (node.isCluster === true) {
          alert(this.options.locales[this.options.locale]['createEdgeError'] || this.options.locales['en']['createEdgeError']);
        } else {
          if (this.body.nodes[connectFromId] !== undefined && this.body.nodes[node.id] !== undefined) {
            this._performAddEdge(connectFromId, node.id);
          }
        }
      }

      event.controlEdge = { from: connectFromId, to: node ? node.id : undefined };
      this.selectionHandler._generateClickEvent('controlNodeDragEnd', event, pointer);

      this.body.emitter.emit('_redraw');
    }


  }, {
    key: '_dragStartEdge',
    value: function _dragStartEdge(event) {
      var pointer = this.lastTouch;
      this.selectionHandler._generateClickEvent('dragStart', event, pointer, undefined, true);
    }




  }, {
    key: '_performAddNode',
    value: function _performAddNode(clickData) {
      var _this4 = this;

      var defaultData = {
        id: util.randomUUID(),
        x: clickData.pointer.canvas.x,
        y: clickData.pointer.canvas.y,
        label: 'new'
      };

      if (typeof this.options.addNode === 'function') {
        if (this.options.addNode.length === 2) {
          this.options.addNode(defaultData, function (finalizedData) {
            if (finalizedData !== null && finalizedData !== undefined && _this4.inMode === 'addNode') {
              _this4.body.data.nodes.getDataSet().add(finalizedData);
            }
            _this4.showManipulatorToolbar();
          });
        } else {
          this.showManipulatorToolbar();
          throw new Error('The function for add does not support two arguments (data,callback)');
        }
      } else {
        this.body.data.nodes.getDataSet().add(defaultData);
        this.showManipulatorToolbar();
      }
    }


  }, {
    key: '_performAddEdge',
    value: function _performAddEdge(sourceNodeId, targetNodeId) {
      var _this5 = this;

      var defaultData = { from: sourceNodeId, to: targetNodeId };
      if (typeof this.options.addEdge === 'function') {
        if (this.options.addEdge.length === 2) {
          this.options.addEdge(defaultData, function (finalizedData) {
            if (finalizedData !== null && finalizedData !== undefined && _this5.inMode === 'addEdge') {
              _this5.body.data.edges.getDataSet().add(finalizedData);
              _this5.selectionHandler.unselectAll();
              _this5.showManipulatorToolbar();
            }
          });
        } else {
          throw new Error('The function for connect does not support two arguments (data,callback)');
        }
      } else {
        this.body.data.edges.getDataSet().add(defaultData);
        this.selectionHandler.unselectAll();
        this.showManipulatorToolbar();
      }
    }


  }, {
    key: '_performEditEdge',
    value: function _performEditEdge(sourceNodeId, targetNodeId) {
      var _this6 = this;

      var defaultData = {
        id: this.edgeBeingEditedId,
        from: sourceNodeId,
        to: targetNodeId,
        label: this.body.data.edges._data[this.edgeBeingEditedId].label
      };
      var eeFunct = this.options.editEdge;
      if ((typeof eeFunct === 'undefined' ? 'undefined' : (0, _typeof3['default'])(eeFunct)) === 'object') {
        eeFunct = eeFunct.editWithoutDrag;
      }
      if (typeof eeFunct === 'function') {
        if (eeFunct.length === 2) {
          eeFunct(defaultData, function (finalizedData) {
            if (finalizedData === null || finalizedData === undefined || _this6.inMode !== 'editEdge') {
              _this6.body.edges[defaultData.id].updateEdgeType();
              _this6.body.emitter.emit('_redraw');
              _this6.showManipulatorToolbar();
            } else {
              _this6.body.data.edges.getDataSet().update(finalizedData);
              _this6.selectionHandler.unselectAll();
              _this6.showManipulatorToolbar();
            }
          });
        } else {
          throw new Error('The function for edit does not support two arguments (data, callback)');
        }
      } else {
        this.body.data.edges.getDataSet().update(defaultData);
        this.selectionHandler.unselectAll();
        this.showManipulatorToolbar();
      }
    }
  }]);
  return ManipulationSystem;
}();

exports['default'] = ManipulationSystem;

 }),
 (function(module, exports, __nested_webpack_require_1213829__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __nested_webpack_require_1213829__(23);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __nested_webpack_require_1213829__(7);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __nested_webpack_require_1213829__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1213829__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var util = __nested_webpack_require_1213829__(2);

var ColorPicker = __nested_webpack_require_1213829__(192)['default'];


var Configurator = function () {
  function Configurator(parentModule, defaultContainer, configureOptions) {
    var pixelRatio = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    (0, _classCallCheck3['default'])(this, Configurator);

    this.parent = parentModule;
    this.changedOptions = [];
    this.container = defaultContainer;
    this.allowCreation = false;

    this.options = {};
    this.initialized = false;
    this.popupCounter = 0;
    this.defaultOptions = {
      enabled: false,
      filter: true,
      container: undefined,
      showButton: true
    };
    util.extend(this.options, this.defaultOptions);

    this.configureOptions = configureOptions;
    this.moduleOptions = {};
    this.domElements = [];
    this.popupDiv = {};
    this.popupLimit = 5;
    this.popupHistory = {};
    this.colorPicker = new ColorPicker(pixelRatio);
    this.wrapper = undefined;
  }



  (0, _createClass3['default'])(Configurator, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options !== undefined) {
        this.popupHistory = {};
        this._removePopup();

        var enabled = true;
        if (typeof options === 'string') {
          this.options.filter = options;
        } else if (options instanceof Array) {
          this.options.filter = options.join();
        } else if ((typeof options === 'undefined' ? 'undefined' : (0, _typeof3['default'])(options)) === 'object') {
          if (options == null) {
            throw new TypeError('options cannot be null');
          }
          if (options.container !== undefined) {
            this.options.container = options.container;
          }
          if (options.filter !== undefined) {
            this.options.filter = options.filter;
          }
          if (options.showButton !== undefined) {
            this.options.showButton = options.showButton;
          }
          if (options.enabled !== undefined) {
            enabled = options.enabled;
          }
        } else if (typeof options === 'boolean') {
          this.options.filter = true;
          enabled = options;
        } else if (typeof options === 'function') {
          this.options.filter = options;
          enabled = true;
        }
        if (this.options.filter === false) {
          enabled = false;
        }

        this.options.enabled = enabled;
      }
      this._clean();
    }


  }, {
    key: 'setModuleOptions',
    value: function setModuleOptions(moduleOptions) {
      this.moduleOptions = moduleOptions;
      if (this.options.enabled === true) {
        this._clean();
        if (this.options.container !== undefined) {
          this.container = this.options.container;
        }
        this._create();
      }
    }


  }, {
    key: '_create',
    value: function _create() {
      this._clean();
      this.changedOptions = [];

      var filter = this.options.filter;
      var counter = 0;
      var show = false;
      for (var option in this.configureOptions) {
        if (this.configureOptions.hasOwnProperty(option)) {
          this.allowCreation = false;
          show = false;
          if (typeof filter === 'function') {
            show = filter(option, []);
            show = show || this._handleObject(this.configureOptions[option], [option], true);
          } else if (filter === true || filter.indexOf(option) !== -1) {
            show = true;
          }

          if (show !== false) {
            this.allowCreation = true;

            if (counter > 0) {
              this._makeItem([]);
            }
            this._makeHeader(option);

            this._handleObject(this.configureOptions[option], [option]);
          }
          counter++;
        }
      }
      this._makeButton();
      this._push();
    }


  }, {
    key: '_push',
    value: function _push() {
      this.wrapper = document.createElement('div');
      this.wrapper.className = 'vis-configuration-wrapper';
      this.container.appendChild(this.wrapper);
      for (var i = 0; i < this.domElements.length; i++) {
        this.wrapper.appendChild(this.domElements[i]);
      }

      this._showPopupIfNeeded();
    }


  }, {
    key: '_clean',
    value: function _clean() {
      for (var i = 0; i < this.domElements.length; i++) {
        this.wrapper.removeChild(this.domElements[i]);
      }

      if (this.wrapper !== undefined) {
        this.container.removeChild(this.wrapper);
        this.wrapper = undefined;
      }
      this.domElements = [];

      this._removePopup();
    }


  }, {
    key: '_getValue',
    value: function _getValue(path) {
      var base = this.moduleOptions;
      for (var i = 0; i < path.length; i++) {
        if (base[path[i]] !== undefined) {
          base = base[path[i]];
        } else {
          base = undefined;
          break;
        }
      }
      return base;
    }


  }, {
    key: '_makeItem',
    value: function _makeItem(path) {
      if (this.allowCreation === true) {
        var item = document.createElement('div');
        item.className = 'vis-configuration vis-config-item vis-config-s' + path.length;

        for (var _len = arguments.length, domElements = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          domElements[_key - 1] = arguments[_key];
        }

        domElements.forEach(function (element) {
          item.appendChild(element);
        });
        this.domElements.push(item);
        return this.domElements.length;
      }
      return 0;
    }


  }, {
    key: '_makeHeader',
    value: function _makeHeader(name) {
      var div = document.createElement('div');
      div.className = 'vis-configuration vis-config-header';
      div.innerHTML = name;
      this._makeItem([], div);
    }


  }, {
    key: '_makeLabel',
    value: function _makeLabel(name, path) {
      var objectLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var div = document.createElement('div');
      div.className = 'vis-configuration vis-config-label vis-config-s' + path.length;
      if (objectLabel === true) {
        div.innerHTML = '<i><b>' + name + ':</b></i>';
      } else {
        div.innerHTML = name + ':';
      }
      return div;
    }


  }, {
    key: '_makeDropdown',
    value: function _makeDropdown(arr, value, path) {
      var select = document.createElement('select');
      select.className = 'vis-configuration vis-config-select';
      var selectedValue = 0;
      if (value !== undefined) {
        if (arr.indexOf(value) !== -1) {
          selectedValue = arr.indexOf(value);
        }
      }

      for (var i = 0; i < arr.length; i++) {
        var option = document.createElement('option');
        option.value = arr[i];
        if (i === selectedValue) {
          option.selected = 'selected';
        }
        option.innerHTML = arr[i];
        select.appendChild(option);
      }

      var me = this;
      select.onchange = function () {
        me._update(this.value, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);
      this._makeItem(path, label, select);
    }


  }, {
    key: '_makeRange',
    value: function _makeRange(arr, value, path) {
      var defaultValue = arr[0];
      var min = arr[1];
      var max = arr[2];
      var step = arr[3];
      var range = document.createElement('input');
      range.className = 'vis-configuration vis-config-range';
      try {
        range.type = 'range'; 
        range.min = min;
        range.max = max;
      } catch (err) {}
      range.step = step;

      var popupString = '';
      var popupValue = 0;

      if (value !== undefined) {
        var factor = 1.2;
        if (value < 0 && value * factor < min) {
          range.min = Math.ceil(value * factor);
          popupValue = range.min;
          popupString = 'range increased';
        } else if (value / factor < min) {
          range.min = Math.ceil(value / factor);
          popupValue = range.min;
          popupString = 'range increased';
        }
        if (value * factor > max && max !== 1) {
          range.max = Math.ceil(value * factor);
          popupValue = range.max;
          popupString = 'range increased';
        }
        range.value = value;
      } else {
        range.value = defaultValue;
      }

      var input = document.createElement('input');
      input.className = 'vis-configuration vis-config-rangeinput';
      input.value = range.value;

      var me = this;
      range.onchange = function () {
        input.value = this.value;
        me._update(Number(this.value), path);
      };
      range.oninput = function () {
        input.value = this.value;
      };

      var label = this._makeLabel(path[path.length - 1], path);
      var itemIndex = this._makeItem(path, label, range, input);

      if (popupString !== '' && this.popupHistory[itemIndex] !== popupValue) {
        this.popupHistory[itemIndex] = popupValue;
        this._setupPopup(popupString, itemIndex);
      }
    }


  }, {
    key: '_makeButton',
    value: function _makeButton() {
      var _this = this;

      if (this.options.showButton === true) {
        var generateButton = document.createElement('div');
        generateButton.className = 'vis-configuration vis-config-button';
        generateButton.innerHTML = 'generate options';
        generateButton.onclick = function () {
          _this._printOptions();
        };
        generateButton.onmouseover = function () {
          generateButton.className = 'vis-configuration vis-config-button hover';
        };
        generateButton.onmouseout = function () {
          generateButton.className = 'vis-configuration vis-config-button';
        };

        this.optionsContainer = document.createElement('div');
        this.optionsContainer.className = 'vis-configuration vis-config-option-container';

        this.domElements.push(this.optionsContainer);
        this.domElements.push(generateButton);
      }
    }


  }, {
    key: '_setupPopup',
    value: function _setupPopup(string, index) {
      var _this2 = this;

      if (this.initialized === true && this.allowCreation === true && this.popupCounter < this.popupLimit) {
        var div = document.createElement('div');
        div.id = 'vis-configuration-popup';
        div.className = 'vis-configuration-popup';
        div.innerHTML = string;
        div.onclick = function () {
          _this2._removePopup();
        };
        this.popupCounter += 1;
        this.popupDiv = { html: div, index: index };
      }
    }


  }, {
    key: '_removePopup',
    value: function _removePopup() {
      if (this.popupDiv.html !== undefined) {
        this.popupDiv.html.parentNode.removeChild(this.popupDiv.html);
        clearTimeout(this.popupDiv.hideTimeout);
        clearTimeout(this.popupDiv.deleteTimeout);
        this.popupDiv = {};
      }
    }


  }, {
    key: '_showPopupIfNeeded',
    value: function _showPopupIfNeeded() {
      var _this3 = this;

      if (this.popupDiv.html !== undefined) {
        var correspondingElement = this.domElements[this.popupDiv.index];
        var rect = correspondingElement.getBoundingClientRect();
        this.popupDiv.html.style.left = rect.left + 'px';
        this.popupDiv.html.style.top = rect.top - 30 + 'px'; 
        document.body.appendChild(this.popupDiv.html);
        this.popupDiv.hideTimeout = setTimeout(function () {
          _this3.popupDiv.html.style.opacity = 0;
        }, 1500);
        this.popupDiv.deleteTimeout = setTimeout(function () {
          _this3._removePopup();
        }, 1800);
      }
    }


  }, {
    key: '_makeCheckbox',
    value: function _makeCheckbox(defaultValue, value, path) {
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'vis-configuration vis-config-checkbox';
      checkbox.checked = defaultValue;
      if (value !== undefined) {
        checkbox.checked = value;
        if (value !== defaultValue) {
          if ((typeof defaultValue === 'undefined' ? 'undefined' : (0, _typeof3['default'])(defaultValue)) === 'object') {
            if (value !== defaultValue.enabled) {
              this.changedOptions.push({ path: path, value: value });
            }
          } else {
            this.changedOptions.push({ path: path, value: value });
          }
        }
      }

      var me = this;
      checkbox.onchange = function () {
        me._update(this.checked, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);
      this._makeItem(path, label, checkbox);
    }


  }, {
    key: '_makeTextInput',
    value: function _makeTextInput(defaultValue, value, path) {
      var checkbox = document.createElement('input');
      checkbox.type = 'text';
      checkbox.className = 'vis-configuration vis-config-text';
      checkbox.value = value;
      if (value !== defaultValue) {
        this.changedOptions.push({ path: path, value: value });
      }

      var me = this;
      checkbox.onchange = function () {
        me._update(this.value, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);
      this._makeItem(path, label, checkbox);
    }


  }, {
    key: '_makeColorField',
    value: function _makeColorField(arr, value, path) {
      var _this4 = this;

      var defaultColor = arr[1];
      var div = document.createElement('div');
      value = value === undefined ? defaultColor : value;

      if (value !== 'none') {
        div.className = 'vis-configuration vis-config-colorBlock';
        div.style.backgroundColor = value;
      } else {
        div.className = 'vis-configuration vis-config-colorBlock none';
      }

      value = value === undefined ? defaultColor : value;
      div.onclick = function () {
        _this4._showColorPicker(value, div, path);
      };

      var label = this._makeLabel(path[path.length - 1], path);
      this._makeItem(path, label, div);
    }


  }, {
    key: '_showColorPicker',
    value: function _showColorPicker(value, div, path) {
      var _this5 = this;

      div.onclick = function () {};

      this.colorPicker.insertTo(div);
      this.colorPicker.show();

      this.colorPicker.setColor(value);
      this.colorPicker.setUpdateCallback(function (color) {
        var colorString = 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
        div.style.backgroundColor = colorString;
        _this5._update(colorString, path);
      });

      this.colorPicker.setCloseCallback(function () {
        div.onclick = function () {
          _this5._showColorPicker(value, div, path);
        };
      });
    }


  }, {
    key: '_handleObject',
    value: function _handleObject(obj) {
      var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var checkOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var show = false;
      var filter = this.options.filter;
      var visibleInSet = false;
      for (var subObj in obj) {
        if (obj.hasOwnProperty(subObj)) {
          show = true;
          var item = obj[subObj];
          var newPath = util.copyAndExtendArray(path, subObj);
          if (typeof filter === 'function') {
            show = filter(subObj, path);

            if (show === false) {
              if (!(item instanceof Array) && typeof item !== 'string' && typeof item !== 'boolean' && item instanceof Object) {
                this.allowCreation = false;
                show = this._handleObject(item, newPath, true);
                this.allowCreation = checkOnly === false;
              }
            }
          }

          if (show !== false) {
            visibleInSet = true;
            var value = this._getValue(newPath);

            if (item instanceof Array) {
              this._handleArray(item, value, newPath);
            } else if (typeof item === 'string') {
              this._makeTextInput(item, value, newPath);
            } else if (typeof item === 'boolean') {
              this._makeCheckbox(item, value, newPath);
            } else if (item instanceof Object) {
              var draw = true;
              if (path.indexOf('physics') !== -1) {
                if (this.moduleOptions.physics.solver !== subObj) {
                  draw = false;
                }
              }

              if (draw === true) {
                if (item.enabled !== undefined) {
                  var enabledPath = util.copyAndExtendArray(newPath, 'enabled');
                  var enabledValue = this._getValue(enabledPath);
                  if (enabledValue === true) {
                    var label = this._makeLabel(subObj, newPath, true);
                    this._makeItem(newPath, label);
                    visibleInSet = this._handleObject(item, newPath) || visibleInSet;
                  } else {
                    this._makeCheckbox(item, enabledValue, newPath);
                  }
                } else {
                  var _label = this._makeLabel(subObj, newPath, true);
                  this._makeItem(newPath, _label);
                  visibleInSet = this._handleObject(item, newPath) || visibleInSet;
                }
              }
            } else {
              console.error('dont know how to handle', item, subObj, newPath);
            }
          }
        }
      }
      return visibleInSet;
    }


  }, {
    key: '_handleArray',
    value: function _handleArray(arr, value, path) {
      if (typeof arr[0] === 'string' && arr[0] === 'color') {
        this._makeColorField(arr, value, path);
        if (arr[1] !== value) {
          this.changedOptions.push({ path: path, value: value });
        }
      } else if (typeof arr[0] === 'string') {
        this._makeDropdown(arr, value, path);
        if (arr[0] !== value) {
          this.changedOptions.push({ path: path, value: value });
        }
      } else if (typeof arr[0] === 'number') {
        this._makeRange(arr, value, path);
        if (arr[0] !== value) {
          this.changedOptions.push({ path: path, value: Number(value) });
        }
      }
    }


  }, {
    key: '_update',
    value: function _update(value, path) {
      var options = this._constructOptions(value, path);

      if (this.parent.body && this.parent.body.emitter && this.parent.body.emitter.emit) {
        this.parent.body.emitter.emit('configChange', options);
      }
      this.initialized = true;
      this.parent.setOptions(options);
    }


  }, {
    key: '_constructOptions',
    value: function _constructOptions(value, path) {
      var optionsObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var pointer = optionsObj;

      value = value === 'true' ? true : value;
      value = value === 'false' ? false : value;

      for (var i = 0; i < path.length; i++) {
        if (path[i] !== 'global') {
          if (pointer[path[i]] === undefined) {
            pointer[path[i]] = {};
          }
          if (i !== path.length - 1) {
            pointer = pointer[path[i]];
          } else {
            pointer[path[i]] = value;
          }
        }
      }
      return optionsObj;
    }


  }, {
    key: '_printOptions',
    value: function _printOptions() {
      var options = this.getOptions();
      this.optionsContainer.innerHTML = '<pre>var options = ' + (0, _stringify2['default'])(options, null, 2) + '</pre>';
    }


  }, {
    key: 'getOptions',
    value: function getOptions() {
      var options = {};
      for (var i = 0; i < this.changedOptions.length; i++) {
        this._constructOptions(this.changedOptions[i].value, this.changedOptions[i].path, options);
      }
      return options;
    }
  }]);
  return Configurator;
}();

exports['default'] = Configurator;

 }),
 (function(module, exports, __nested_webpack_require_1239979__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __nested_webpack_require_1239979__(23);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __nested_webpack_require_1239979__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1239979__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Hammer = __nested_webpack_require_1239979__(24);
var hammerUtil = __nested_webpack_require_1239979__(36);
var util = __nested_webpack_require_1239979__(2);

var htmlColors = {
  black: '#000000',
  navy: '#000080',
  darkblue: '#00008B',
  mediumblue: '#0000CD',
  blue: '#0000FF',
  darkgreen: '#006400',
  green: '#008000',
  teal: '#008080',
  darkcyan: '#008B8B',
  deepskyblue: '#00BFFF',
  darkturquoise: '#00CED1',
  mediumspringgreen: '#00FA9A',
  lime: '#00FF00',
  springgreen: '#00FF7F',
  aqua: '#00FFFF',
  cyan: '#00FFFF',
  midnightblue: '#191970',
  dodgerblue: '#1E90FF',
  lightseagreen: '#20B2AA',
  forestgreen: '#228B22',
  seagreen: '#2E8B57',
  darkslategray: '#2F4F4F',
  limegreen: '#32CD32',
  mediumseagreen: '#3CB371',
  turquoise: '#40E0D0',
  royalblue: '#4169E1',
  steelblue: '#4682B4',
  darkslateblue: '#483D8B',
  mediumturquoise: '#48D1CC',
  indigo: '#4B0082',
  darkolivegreen: '#556B2F',
  cadetblue: '#5F9EA0',
  cornflowerblue: '#6495ED',
  mediumaquamarine: '#66CDAA',
  dimgray: '#696969',
  slateblue: '#6A5ACD',
  olivedrab: '#6B8E23',
  slategray: '#708090',
  lightslategray: '#778899',
  mediumslateblue: '#7B68EE',
  lawngreen: '#7CFC00',
  chartreuse: '#7FFF00',
  aquamarine: '#7FFFD4',
  maroon: '#800000',
  purple: '#800080',
  olive: '#808000',
  gray: '#808080',
  skyblue: '#87CEEB',
  lightskyblue: '#87CEFA',
  blueviolet: '#8A2BE2',
  darkred: '#8B0000',
  darkmagenta: '#8B008B',
  saddlebrown: '#8B4513',
  darkseagreen: '#8FBC8F',
  lightgreen: '#90EE90',
  mediumpurple: '#9370D8',
  darkviolet: '#9400D3',
  palegreen: '#98FB98',
  darkorchid: '#9932CC',
  yellowgreen: '#9ACD32',
  sienna: '#A0522D',
  brown: '#A52A2A',
  darkgray: '#A9A9A9',
  lightblue: '#ADD8E6',
  greenyellow: '#ADFF2F',
  paleturquoise: '#AFEEEE',
  lightsteelblue: '#B0C4DE',
  powderblue: '#B0E0E6',
  firebrick: '#B22222',
  darkgoldenrod: '#B8860B',
  mediumorchid: '#BA55D3',
  rosybrown: '#BC8F8F',
  darkkhaki: '#BDB76B',
  silver: '#C0C0C0',
  mediumvioletred: '#C71585',
  indianred: '#CD5C5C',
  peru: '#CD853F',
  chocolate: '#D2691E',
  tan: '#D2B48C',
  lightgrey: '#D3D3D3',
  palevioletred: '#D87093',
  thistle: '#D8BFD8',
  orchid: '#DA70D6',
  goldenrod: '#DAA520',
  crimson: '#DC143C',
  gainsboro: '#DCDCDC',
  plum: '#DDA0DD',
  burlywood: '#DEB887',
  lightcyan: '#E0FFFF',
  lavender: '#E6E6FA',
  darksalmon: '#E9967A',
  violet: '#EE82EE',
  palegoldenrod: '#EEE8AA',
  lightcoral: '#F08080',
  khaki: '#F0E68C',
  aliceblue: '#F0F8FF',
  honeydew: '#F0FFF0',
  azure: '#F0FFFF',
  sandybrown: '#F4A460',
  wheat: '#F5DEB3',
  beige: '#F5F5DC',
  whitesmoke: '#F5F5F5',
  mintcream: '#F5FFFA',
  ghostwhite: '#F8F8FF',
  salmon: '#FA8072',
  antiquewhite: '#FAEBD7',
  linen: '#FAF0E6',
  lightgoldenrodyellow: '#FAFAD2',
  oldlace: '#FDF5E6',
  red: '#FF0000',
  fuchsia: '#FF00FF',
  magenta: '#FF00FF',
  deeppink: '#FF1493',
  orangered: '#FF4500',
  tomato: '#FF6347',
  hotpink: '#FF69B4',
  coral: '#FF7F50',
  darkorange: '#FF8C00',
  lightsalmon: '#FFA07A',
  orange: '#FFA500',
  lightpink: '#FFB6C1',
  pink: '#FFC0CB',
  gold: '#FFD700',
  peachpuff: '#FFDAB9',
  navajowhite: '#FFDEAD',
  moccasin: '#FFE4B5',
  bisque: '#FFE4C4',
  mistyrose: '#FFE4E1',
  blanchedalmond: '#FFEBCD',
  papayawhip: '#FFEFD5',
  lavenderblush: '#FFF0F5',
  seashell: '#FFF5EE',
  cornsilk: '#FFF8DC',
  lemonchiffon: '#FFFACD',
  floralwhite: '#FFFAF0',
  snow: '#FFFAFA',
  yellow: '#FFFF00',
  lightyellow: '#FFFFE0',
  ivory: '#FFFFF0',
  white: '#FFFFFF'

};
var ColorPicker = function () {
  function ColorPicker() {
    var pixelRatio = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    (0, _classCallCheck3['default'])(this, ColorPicker);

    this.pixelRatio = pixelRatio;
    this.generated = false;
    this.centerCoordinates = { x: 289 / 2, y: 289 / 2 };
    this.r = 289 * 0.49;
    this.color = { r: 255, g: 255, b: 255, a: 1.0 };
    this.hueCircle = undefined;
    this.initialColor = { r: 255, g: 255, b: 255, a: 1.0 };
    this.previousColor = undefined;
    this.applied = false;

    this.updateCallback = function () {};
    this.closeCallback = function () {};

    this._create();
  }



  (0, _createClass3['default'])(ColorPicker, [{
    key: 'insertTo',
    value: function insertTo(container) {
      if (this.hammer !== undefined) {
        this.hammer.destroy();
        this.hammer = undefined;
      }
      this.container = container;
      this.container.appendChild(this.frame);
      this._bindHammer();

      this._setSize();
    }


  }, {
    key: 'setUpdateCallback',
    value: function setUpdateCallback(callback) {
      if (typeof callback === 'function') {
        this.updateCallback = callback;
      } else {
        throw new Error('Function attempted to set as colorPicker update callback is not a function.');
      }
    }


  }, {
    key: 'setCloseCallback',
    value: function setCloseCallback(callback) {
      if (typeof callback === 'function') {
        this.closeCallback = callback;
      } else {
        throw new Error('Function attempted to set as colorPicker closing callback is not a function.');
      }
    }


  }, {
    key: '_isColorString',
    value: function _isColorString(color) {
      if (typeof color === 'string') {
        return htmlColors[color];
      }
    }


  }, {
    key: 'setColor',
    value: function setColor(color) {
      var setInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (color === 'none') {
        return;
      }

      var rgba = void 0;

      var htmlColor = this._isColorString(color);
      if (htmlColor !== undefined) {
        color = htmlColor;
      }

      if (util.isString(color) === true) {
        if (util.isValidRGB(color) === true) {
          var rgbaArray = color.substr(4).substr(0, color.length - 5).split(',');
          rgba = { r: rgbaArray[0], g: rgbaArray[1], b: rgbaArray[2], a: 1.0 };
        } else if (util.isValidRGBA(color) === true) {
          var _rgbaArray = color.substr(5).substr(0, color.length - 6).split(',');
          rgba = {
            r: _rgbaArray[0],
            g: _rgbaArray[1],
            b: _rgbaArray[2],
            a: _rgbaArray[3]
          };
        } else if (util.isValidHex(color) === true) {
          var rgbObj = util.hexToRGB(color);
          rgba = { r: rgbObj.r, g: rgbObj.g, b: rgbObj.b, a: 1.0 };
        }
      } else {
        if (color instanceof Object) {
          if (color.r !== undefined && color.g !== undefined && color.b !== undefined) {
            var alpha = color.a !== undefined ? color.a : '1.0';
            rgba = { r: color.r, g: color.g, b: color.b, a: alpha };
          }
        }
      }

      if (rgba === undefined) {
        throw new Error('Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: ' + (0, _stringify2['default'])(color));
      } else {
        this._setColor(rgba, setInitial);
      }
    }


  }, {
    key: 'show',
    value: function show() {
      if (this.closeCallback !== undefined) {
        this.closeCallback();
        this.closeCallback = undefined;
      }

      this.applied = false;
      this.frame.style.display = 'block';
      this._generateHueCircle();
    }



  }, {
    key: '_hide',
    value: function _hide() {
      var _this = this;

      var storePrevious = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (storePrevious === true) {
        this.previousColor = util.extend({}, this.color);
      }

      if (this.applied === true) {
        this.updateCallback(this.initialColor);
      }

      this.frame.style.display = 'none';

      setTimeout(function () {
        if (_this.closeCallback !== undefined) {
          _this.closeCallback();
          _this.closeCallback = undefined;
        }
      }, 0);
    }


  }, {
    key: '_save',
    value: function _save() {
      this.updateCallback(this.color);
      this.applied = false;
      this._hide();
    }


  }, {
    key: '_apply',
    value: function _apply() {
      this.applied = true;
      this.updateCallback(this.color);
      this._updatePicker(this.color);
    }


  }, {
    key: '_loadLast',
    value: function _loadLast() {
      if (this.previousColor !== undefined) {
        this.setColor(this.previousColor, false);
      } else {
        alert('There is no last color to load...');
      }
    }


  }, {
    key: '_setColor',
    value: function _setColor(rgba) {
      var setInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (setInitial === true) {
        this.initialColor = util.extend({}, rgba);
      }

      this.color = rgba;
      var hsv = util.RGBToHSV(rgba.r, rgba.g, rgba.b);

      var angleConvert = 2 * Math.PI;
      var radius = this.r * hsv.s;
      var x = this.centerCoordinates.x + radius * Math.sin(angleConvert * hsv.h);
      var y = this.centerCoordinates.y + radius * Math.cos(angleConvert * hsv.h);

      this.colorPickerSelector.style.left = x - 0.5 * this.colorPickerSelector.clientWidth + 'px';
      this.colorPickerSelector.style.top = y - 0.5 * this.colorPickerSelector.clientHeight + 'px';

      this._updatePicker(rgba);
    }


  }, {
    key: '_setOpacity',
    value: function _setOpacity(value) {
      this.color.a = value / 100;
      this._updatePicker(this.color);
    }


  }, {
    key: '_setBrightness',
    value: function _setBrightness(value) {
      var hsv = util.RGBToHSV(this.color.r, this.color.g, this.color.b);
      hsv.v = value / 100;
      var rgba = util.HSVToRGB(hsv.h, hsv.s, hsv.v);
      rgba['a'] = this.color.a;
      this.color = rgba;
      this._updatePicker();
    }


  }, {
    key: '_updatePicker',
    value: function _updatePicker() {
      var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.color;

      var hsv = util.RGBToHSV(rgba.r, rgba.g, rgba.b);
      var ctx = this.colorPickerCanvas.getContext('2d');
      if (this.pixelRation === undefined) {
        this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
      }
      ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);

      var w = this.colorPickerCanvas.clientWidth;
      var h = this.colorPickerCanvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      ctx.putImageData(this.hueCircle, 0, 0);
      ctx.fillStyle = 'rgba(0,0,0,' + (1 - hsv.v) + ')';
      ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);
      ctx.fill();

      this.brightnessRange.value = 100 * hsv.v;
      this.opacityRange.value = 100 * rgba.a;

      this.initialColorDiv.style.backgroundColor = 'rgba(' + this.initialColor.r + ',' + this.initialColor.g + ',' + this.initialColor.b + ',' + this.initialColor.a + ')';
      this.newColorDiv.style.backgroundColor = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',' + this.color.a + ')';
    }


  }, {
    key: '_setSize',
    value: function _setSize() {
      this.colorPickerCanvas.style.width = '100%';
      this.colorPickerCanvas.style.height = '100%';

      this.colorPickerCanvas.width = 289 * this.pixelRatio;
      this.colorPickerCanvas.height = 289 * this.pixelRatio;
    }


  }, {
    key: '_create',
    value: function _create() {
      this.frame = document.createElement('div');
      this.frame.className = 'vis-color-picker';

      this.colorPickerDiv = document.createElement('div');
      this.colorPickerSelector = document.createElement('div');
      this.colorPickerSelector.className = 'vis-selector';
      this.colorPickerDiv.appendChild(this.colorPickerSelector);

      this.colorPickerCanvas = document.createElement('canvas');
      this.colorPickerDiv.appendChild(this.colorPickerCanvas);

      if (!this.colorPickerCanvas.getContext) {
        var noCanvas = document.createElement('DIV');
        noCanvas.style.color = 'red';
        noCanvas.style.fontWeight = 'bold';
        noCanvas.style.padding = '10px';
        noCanvas.innerHTML = 'Error: your browser does not support HTML canvas';
        this.colorPickerCanvas.appendChild(noCanvas);
      } else {
        var ctx = this.colorPickerCanvas.getContext('2d');
        this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
        this.colorPickerCanvas.getContext('2d').setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
      }

      this.colorPickerDiv.className = 'vis-color';

      this.opacityDiv = document.createElement('div');
      this.opacityDiv.className = 'vis-opacity';

      this.brightnessDiv = document.createElement('div');
      this.brightnessDiv.className = 'vis-brightness';

      this.arrowDiv = document.createElement('div');
      this.arrowDiv.className = 'vis-arrow';

      this.opacityRange = document.createElement('input');
      try {
        this.opacityRange.type = 'range'; 
        this.opacityRange.min = '0';
        this.opacityRange.max = '100';
      } catch (err) {}
      this.opacityRange.value = '100';
      this.opacityRange.className = 'vis-range';

      this.brightnessRange = document.createElement('input');
      try {
        this.brightnessRange.type = 'range'; 
        this.brightnessRange.min = '0';
        this.brightnessRange.max = '100';
      } catch (err) {}
      this.brightnessRange.value = '100';
      this.brightnessRange.className = 'vis-range';

      this.opacityDiv.appendChild(this.opacityRange);
      this.brightnessDiv.appendChild(this.brightnessRange);

      var me = this;
      this.opacityRange.onchange = function () {
        me._setOpacity(this.value);
      };
      this.opacityRange.oninput = function () {
        me._setOpacity(this.value);
      };
      this.brightnessRange.onchange = function () {
        me._setBrightness(this.value);
      };
      this.brightnessRange.oninput = function () {
        me._setBrightness(this.value);
      };

      this.brightnessLabel = document.createElement('div');
      this.brightnessLabel.className = 'vis-label vis-brightness';
      this.brightnessLabel.innerHTML = 'brightness:';

      this.opacityLabel = document.createElement('div');
      this.opacityLabel.className = 'vis-label vis-opacity';
      this.opacityLabel.innerHTML = 'opacity:';

      this.newColorDiv = document.createElement('div');
      this.newColorDiv.className = 'vis-new-color';
      this.newColorDiv.innerHTML = 'new';

      this.initialColorDiv = document.createElement('div');
      this.initialColorDiv.className = 'vis-initial-color';
      this.initialColorDiv.innerHTML = 'initial';

      this.cancelButton = document.createElement('div');
      this.cancelButton.className = 'vis-button vis-cancel';
      this.cancelButton.innerHTML = 'cancel';
      this.cancelButton.onclick = this._hide.bind(this, false);

      this.applyButton = document.createElement('div');
      this.applyButton.className = 'vis-button vis-apply';
      this.applyButton.innerHTML = 'apply';
      this.applyButton.onclick = this._apply.bind(this);

      this.saveButton = document.createElement('div');
      this.saveButton.className = 'vis-button vis-save';
      this.saveButton.innerHTML = 'save';
      this.saveButton.onclick = this._save.bind(this);

      this.loadButton = document.createElement('div');
      this.loadButton.className = 'vis-button vis-load';
      this.loadButton.innerHTML = 'load last';
      this.loadButton.onclick = this._loadLast.bind(this);

      this.frame.appendChild(this.colorPickerDiv);
      this.frame.appendChild(this.arrowDiv);
      this.frame.appendChild(this.brightnessLabel);
      this.frame.appendChild(this.brightnessDiv);
      this.frame.appendChild(this.opacityLabel);
      this.frame.appendChild(this.opacityDiv);
      this.frame.appendChild(this.newColorDiv);
      this.frame.appendChild(this.initialColorDiv);

      this.frame.appendChild(this.cancelButton);
      this.frame.appendChild(this.applyButton);
      this.frame.appendChild(this.saveButton);
      this.frame.appendChild(this.loadButton);
    }


  }, {
    key: '_bindHammer',
    value: function _bindHammer() {
      var _this2 = this;

      this.drag = {};
      this.pinch = {};
      this.hammer = new Hammer(this.colorPickerCanvas);
      this.hammer.get('pinch').set({ enable: true });

      hammerUtil.onTouch(this.hammer, function (event) {
        _this2._moveSelector(event);
      });
      this.hammer.on('tap', function (event) {
        _this2._moveSelector(event);
      });
      this.hammer.on('panstart', function (event) {
        _this2._moveSelector(event);
      });
      this.hammer.on('panmove', function (event) {
        _this2._moveSelector(event);
      });
      this.hammer.on('panend', function (event) {
        _this2._moveSelector(event);
      });
    }


  }, {
    key: '_generateHueCircle',
    value: function _generateHueCircle() {
      if (this.generated === false) {
        var ctx = this.colorPickerCanvas.getContext('2d');
        if (this.pixelRation === undefined) {
          this.pixelRatio = (window.devicePixelRatio || 1) / (ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1);
        }
        ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);

        var w = this.colorPickerCanvas.clientWidth;
        var h = this.colorPickerCanvas.clientHeight;
        ctx.clearRect(0, 0, w, h);

        var x = void 0,
            y = void 0,
            hue = void 0,
            sat = void 0;
        this.centerCoordinates = { x: w * 0.5, y: h * 0.5 };
        this.r = 0.49 * w;
        var angleConvert = 2 * Math.PI / 360;
        var hfac = 1 / 360;
        var sfac = 1 / this.r;
        var rgb = void 0;
        for (hue = 0; hue < 360; hue++) {
          for (sat = 0; sat < this.r; sat++) {
            x = this.centerCoordinates.x + sat * Math.sin(angleConvert * hue);
            y = this.centerCoordinates.y + sat * Math.cos(angleConvert * hue);
            rgb = util.HSVToRGB(hue * hfac, sat * sfac, 1);
            ctx.fillStyle = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
            ctx.fillRect(x - 0.5, y - 0.5, 2, 2);
          }
        }
        ctx.strokeStyle = 'rgba(0,0,0,1)';
        ctx.circle(this.centerCoordinates.x, this.centerCoordinates.y, this.r);
        ctx.stroke();

        this.hueCircle = ctx.getImageData(0, 0, w, h);
      }
      this.generated = true;
    }


  }, {
    key: '_moveSelector',
    value: function _moveSelector(event) {
      var rect = this.colorPickerDiv.getBoundingClientRect();
      var left = event.center.x - rect.left;
      var top = event.center.y - rect.top;

      var centerY = 0.5 * this.colorPickerDiv.clientHeight;
      var centerX = 0.5 * this.colorPickerDiv.clientWidth;

      var x = left - centerX;
      var y = top - centerY;

      var angle = Math.atan2(x, y);
      var radius = 0.98 * Math.min(Math.sqrt(x * x + y * y), centerX);

      var newTop = Math.cos(angle) * radius + centerY;
      var newLeft = Math.sin(angle) * radius + centerX;

      this.colorPickerSelector.style.top = newTop - 0.5 * this.colorPickerSelector.clientHeight + 'px';
      this.colorPickerSelector.style.left = newLeft - 0.5 * this.colorPickerSelector.clientWidth + 'px';

      var h = angle / (2 * Math.PI);
      h = h < 0 ? h + 1 : h;
      var s = radius / this.r;
      var hsv = util.RGBToHSV(this.color.r, this.color.g, this.color.b);
      hsv.h = h;
      hsv.s = s;
      var rgba = util.HSVToRGB(hsv.h, hsv.s, hsv.v);
      rgba['a'] = this.color.a;
      this.color = rgba;

      this.initialColorDiv.style.backgroundColor = 'rgba(' + this.initialColor.r + ',' + this.initialColor.g + ',' + this.initialColor.b + ',' + this.initialColor.a + ')';
      this.newColorDiv.style.backgroundColor = 'rgba(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ',' + this.color.a + ')';
    }
  }]);
  return ColorPicker;
}();

exports['default'] = ColorPicker;

 }),
 (function(module, exports, __nested_webpack_require_1264437__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __nested_webpack_require_1264437__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __nested_webpack_require_1264437__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1264437__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _FloydWarshall = __nested_webpack_require_1264437__(194);

var _FloydWarshall2 = _interopRequireDefault(_FloydWarshall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var KamadaKawai = function () {
  function KamadaKawai(body, edgeLength, edgeStrength) {
    (0, _classCallCheck3['default'])(this, KamadaKawai);

    this.body = body;
    this.springLength = edgeLength;
    this.springConstant = edgeStrength;
    this.distanceSolver = new _FloydWarshall2['default']();
  }



  (0, _createClass3['default'])(KamadaKawai, [{
    key: 'setOptions',
    value: function setOptions(options) {
      if (options) {
        if (options.springLength) {
          this.springLength = options.springLength;
        }
        if (options.springConstant) {
          this.springConstant = options.springConstant;
        }
      }
    }


  }, {
    key: 'solve',
    value: function solve(nodesArray, edgesArray) {
      var ignoreClusters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var D_matrix = this.distanceSolver.getDistances(this.body, nodesArray, edgesArray); 

      this._createL_matrix(D_matrix);

      this._createK_matrix(D_matrix);

      this._createE_matrix();

      var threshold = 0.01;
      var innerThreshold = 1;
      var iterations = 0;
      var maxIterations = Math.max(1000, Math.min(10 * this.body.nodeIndices.length, 6000));
      var maxInnerIterations = 5;

      var maxEnergy = 1e9;
      var highE_nodeId = 0,
          dE_dx = 0,
          dE_dy = 0,
          delta_m = 0,
          subIterations = 0;

      while (maxEnergy > threshold && iterations < maxIterations) {
        iterations += 1;
        var _getHighestEnergyNode2 = this._getHighestEnergyNode(ignoreClusters);

        var _getHighestEnergyNode3 = (0, _slicedToArray3['default'])(_getHighestEnergyNode2, 4);

        highE_nodeId = _getHighestEnergyNode3[0];
        maxEnergy = _getHighestEnergyNode3[1];
        dE_dx = _getHighestEnergyNode3[2];
        dE_dy = _getHighestEnergyNode3[3];

        delta_m = maxEnergy;
        subIterations = 0;
        while (delta_m > innerThreshold && subIterations < maxInnerIterations) {
          subIterations += 1;
          this._moveNode(highE_nodeId, dE_dx, dE_dy);
          var _getEnergy2 = this._getEnergy(highE_nodeId);

          var _getEnergy3 = (0, _slicedToArray3['default'])(_getEnergy2, 3);

          delta_m = _getEnergy3[0];
          dE_dx = _getEnergy3[1];
          dE_dy = _getEnergy3[2];
        }
      }
    }


  }, {
    key: '_getHighestEnergyNode',
    value: function _getHighestEnergyNode(ignoreClusters) {
      var nodesArray = this.body.nodeIndices;
      var nodes = this.body.nodes;
      var maxEnergy = 0;
      var maxEnergyNodeId = nodesArray[0];
      var dE_dx_max = 0,
          dE_dy_max = 0;

      for (var nodeIdx = 0; nodeIdx < nodesArray.length; nodeIdx++) {
        var m = nodesArray[nodeIdx];
        if (nodes[m].predefinedPosition === false || nodes[m].isCluster === true && ignoreClusters === true || nodes[m].options.fixed.x === true || nodes[m].options.fixed.y === true) {
          var _getEnergy4 = this._getEnergy(m),
              _getEnergy5 = (0, _slicedToArray3['default'])(_getEnergy4, 3),
              delta_m = _getEnergy5[0],
              dE_dx = _getEnergy5[1],
              dE_dy = _getEnergy5[2];

          if (maxEnergy < delta_m) {
            maxEnergy = delta_m;
            maxEnergyNodeId = m;
            dE_dx_max = dE_dx;
            dE_dy_max = dE_dy;
          }
        }
      }

      return [maxEnergyNodeId, maxEnergy, dE_dx_max, dE_dy_max];
    }


  }, {
    key: '_getEnergy',
    value: function _getEnergy(m) {
      var _E_sums$m = (0, _slicedToArray3['default'])(this.E_sums[m], 2),
          dE_dx = _E_sums$m[0],
          dE_dy = _E_sums$m[1];

      var delta_m = Math.sqrt(Math.pow(dE_dx, 2) + Math.pow(dE_dy, 2));
      return [delta_m, dE_dx, dE_dy];
    }


  }, {
    key: '_moveNode',
    value: function _moveNode(m, dE_dx, dE_dy) {
      var nodesArray = this.body.nodeIndices;
      var nodes = this.body.nodes;
      var d2E_dx2 = 0;
      var d2E_dxdy = 0;
      var d2E_dy2 = 0;

      var x_m = nodes[m].x;
      var y_m = nodes[m].y;
      var km = this.K_matrix[m];
      var lm = this.L_matrix[m];

      for (var iIdx = 0; iIdx < nodesArray.length; iIdx++) {
        var i = nodesArray[iIdx];
        if (i !== m) {
          var x_i = nodes[i].x;
          var y_i = nodes[i].y;
          var kmat = km[i];
          var lmat = lm[i];
          var denominator = 1.0 / Math.pow(Math.pow(x_m - x_i, 2) + Math.pow(y_m - y_i, 2), 1.5);
          d2E_dx2 += kmat * (1 - lmat * Math.pow(y_m - y_i, 2) * denominator);
          d2E_dxdy += kmat * (lmat * (x_m - x_i) * (y_m - y_i) * denominator);
          d2E_dy2 += kmat * (1 - lmat * Math.pow(x_m - x_i, 2) * denominator);
        }
      }
      var A = d2E_dx2,
          B = d2E_dxdy,
          C = dE_dx,
          D = d2E_dy2,
          E = dE_dy;

      var dy = (C / A + E / B) / (B / A - D / B);
      var dx = -(B * dy + C) / A;

      nodes[m].x += dx;
      nodes[m].y += dy;

      this._updateE_matrix(m);
    }


  }, {
    key: '_createL_matrix',
    value: function _createL_matrix(D_matrix) {
      var nodesArray = this.body.nodeIndices;
      var edgeLength = this.springLength;

      this.L_matrix = [];
      for (var i = 0; i < nodesArray.length; i++) {
        this.L_matrix[nodesArray[i]] = {};
        for (var j = 0; j < nodesArray.length; j++) {
          this.L_matrix[nodesArray[i]][nodesArray[j]] = edgeLength * D_matrix[nodesArray[i]][nodesArray[j]];
        }
      }
    }


  }, {
    key: '_createK_matrix',
    value: function _createK_matrix(D_matrix) {
      var nodesArray = this.body.nodeIndices;
      var edgeStrength = this.springConstant;

      this.K_matrix = [];
      for (var i = 0; i < nodesArray.length; i++) {
        this.K_matrix[nodesArray[i]] = {};
        for (var j = 0; j < nodesArray.length; j++) {
          this.K_matrix[nodesArray[i]][nodesArray[j]] = edgeStrength * Math.pow(D_matrix[nodesArray[i]][nodesArray[j]], -2);
        }
      }
    }


  }, {
    key: '_createE_matrix',
    value: function _createE_matrix() {
      var nodesArray = this.body.nodeIndices;
      var nodes = this.body.nodes;
      this.E_matrix = {};
      this.E_sums = {};
      for (var mIdx = 0; mIdx < nodesArray.length; mIdx++) {
        this.E_matrix[nodesArray[mIdx]] = [];
      }
      for (var _mIdx = 0; _mIdx < nodesArray.length; _mIdx++) {
        var m = nodesArray[_mIdx];
        var x_m = nodes[m].x;
        var y_m = nodes[m].y;
        var dE_dx = 0;
        var dE_dy = 0;
        for (var iIdx = _mIdx; iIdx < nodesArray.length; iIdx++) {
          var i = nodesArray[iIdx];
          if (i !== m) {
            var x_i = nodes[i].x;
            var y_i = nodes[i].y;
            var denominator = 1.0 / Math.sqrt(Math.pow(x_m - x_i, 2) + Math.pow(y_m - y_i, 2));
            this.E_matrix[m][iIdx] = [this.K_matrix[m][i] * (x_m - x_i - this.L_matrix[m][i] * (x_m - x_i) * denominator), this.K_matrix[m][i] * (y_m - y_i - this.L_matrix[m][i] * (y_m - y_i) * denominator)];
            this.E_matrix[i][_mIdx] = this.E_matrix[m][iIdx];
            dE_dx += this.E_matrix[m][iIdx][0];
            dE_dy += this.E_matrix[m][iIdx][1];
          }
        }
        this.E_sums[m] = [dE_dx, dE_dy];
      }
    }


  }, {
    key: '_updateE_matrix',
    value: function _updateE_matrix(m) {
      var nodesArray = this.body.nodeIndices;
      var nodes = this.body.nodes;
      var colm = this.E_matrix[m];
      var kcolm = this.K_matrix[m];
      var lcolm = this.L_matrix[m];
      var x_m = nodes[m].x;
      var y_m = nodes[m].y;
      var dE_dx = 0;
      var dE_dy = 0;
      for (var iIdx = 0; iIdx < nodesArray.length; iIdx++) {
        var i = nodesArray[iIdx];
        if (i !== m) {
          var cell = colm[iIdx];
          var oldDx = cell[0];
          var oldDy = cell[1];

          var x_i = nodes[i].x;
          var y_i = nodes[i].y;
          var denominator = 1.0 / Math.sqrt(Math.pow(x_m - x_i, 2) + Math.pow(y_m - y_i, 2));
          var dx = kcolm[i] * (x_m - x_i - lcolm[i] * (x_m - x_i) * denominator);
          var dy = kcolm[i] * (y_m - y_i - lcolm[i] * (y_m - y_i) * denominator);
          colm[iIdx] = [dx, dy];
          dE_dx += dx;
          dE_dy += dy;

          var sum = this.E_sums[i];
          sum[0] += dx - oldDx;
          sum[1] += dy - oldDy;
        }
      }
      this.E_sums[m] = [dE_dx, dE_dy];
    }
  }]);
  return KamadaKawai;
}(); 


exports['default'] = KamadaKawai;

 }),
 (function(module, exports, __nested_webpack_require_1275973__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __nested_webpack_require_1275973__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __nested_webpack_require_1275973__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FloydWarshall = function () {
  function FloydWarshall() {
    (0, _classCallCheck3["default"])(this, FloydWarshall);
  }



  (0, _createClass3["default"])(FloydWarshall, [{
    key: "getDistances",
    value: function getDistances(body, nodesArray, edgesArray) {
      var D_matrix = {};
      var edges = body.edges;

      for (var i = 0; i < nodesArray.length; i++) {
        var node = nodesArray[i];
        var cell = {};
        D_matrix[node] = cell;
        for (var j = 0; j < nodesArray.length; j++) {
          cell[nodesArray[j]] = i == j ? 0 : 1e9;
        }
      }

      for (var _i = 0; _i < edgesArray.length; _i++) {
        var edge = edges[edgesArray[_i]];
        if (edge.connected === true && D_matrix[edge.fromId] !== undefined && D_matrix[edge.toId] !== undefined) {
          D_matrix[edge.fromId][edge.toId] = 1;
          D_matrix[edge.toId][edge.fromId] = 1;
        }
      }

      var nodeCount = nodesArray.length;

      for (var k = 0; k < nodeCount; k++) {
        var knode = nodesArray[k];
        var kcolm = D_matrix[knode];
        for (var _i2 = 0; _i2 < nodeCount - 1; _i2++) {
          var inode = nodesArray[_i2];
          var icolm = D_matrix[inode];
          for (var _j = _i2 + 1; _j < nodeCount; _j++) {
            var jnode = nodesArray[_j];
            var jcolm = D_matrix[jnode];

            var val = Math.min(icolm[jnode], icolm[knode] + kcolm[jnode]);
            icolm[jnode] = val;
            jcolm[inode] = val;
          }
        }
      }

      return D_matrix;
    }
  }]);
  return FloydWarshall;
}();

exports["default"] = FloydWarshall;

 })
 ]);
});

 })

}]);