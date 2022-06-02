"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4628],{

 "./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/Resizable.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

var _reactDraggable = __webpack_require__("./.yarn/__virtual__/react-draggable-virtual-eb201fa540/0/cache/react-draggable-npm-4.4.4-f0b7a5c546-b8258a5893.zip/node_modules/react-draggable/build/cjs/cjs.js");

var _utils = __webpack_require__("./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/utils.js");

var _propTypes = __webpack_require__("./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/propTypes.js");

var _excluded = ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Resizable = function (_React$Component) {
  _inheritsLoose(Resizable, _React$Component);

  function Resizable() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.handleRefs = {};
    _this.lastHandleRect = null;
    _this.slack = null;
    return _this;
  }

  var _proto = Resizable.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.resetData();
  };

  _proto.resetData = function resetData() {
    this.lastHandleRect = this.slack = null;
  } 
  ;

  _proto.runConstraints = function runConstraints(width, height) {
    var _this$props = this.props,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        lockAspectRatio = _this$props.lockAspectRatio; 

    if (!minConstraints && !maxConstraints && !lockAspectRatio) return [width, height]; 

    if (lockAspectRatio) {
      var ratio = this.props.width / this.props.height;
      var deltaW = width - this.props.width;
      var deltaH = height - this.props.height; 

      if (Math.abs(deltaW) > Math.abs(deltaH * ratio)) {
        height = width / ratio;
      } else {
        width = height * ratio;
      }
    }

    var oldW = width,
        oldH = height; 

    var _ref = this.slack || [0, 0],
        slackW = _ref[0],
        slackH = _ref[1];

    width += slackW;
    height += slackH;

    if (minConstraints) {
      width = Math.max(minConstraints[0], width);
      height = Math.max(minConstraints[1], height);
    }

    if (maxConstraints) {
      width = Math.min(maxConstraints[0], width);
      height = Math.min(maxConstraints[1], height);
    } 


    this.slack = [slackW + (oldW - width), slackH + (oldH - height)];
    return [width, height];
  }
  ;

  _proto.resizeHandler = function resizeHandler(handlerName, axis) {
    var _this2 = this;

    return function (e, _ref2) {
      var node = _ref2.node,
          deltaX = _ref2.deltaX,
          deltaY = _ref2.deltaY;
      if (handlerName === 'onResizeStart') _this2.resetData(); 

      var canDragX = (_this2.props.axis === 'both' || _this2.props.axis === 'x') && axis !== 'n' && axis !== 's';
      var canDragY = (_this2.props.axis === 'both' || _this2.props.axis === 'y') && axis !== 'e' && axis !== 'w'; 

      if (!canDragX && !canDragY) return; 

      var axisV = axis[0];
      var axisH = axis[axis.length - 1]; 

      var handleRect = node.getBoundingClientRect();

      if (_this2.lastHandleRect != null) {
        if (axisH === 'w') {
          var deltaLeftSinceLast = handleRect.left - _this2.lastHandleRect.left;
          deltaX += deltaLeftSinceLast;
        }

        if (axisV === 'n') {
          var deltaTopSinceLast = handleRect.top - _this2.lastHandleRect.top;
          deltaY += deltaTopSinceLast;
        }
      } 


      _this2.lastHandleRect = handleRect; 

      if (axisH === 'w') deltaX = -deltaX;
      if (axisV === 'n') deltaY = -deltaY; 

      var width = _this2.props.width + (canDragX ? deltaX / _this2.props.transformScale : 0);
      var height = _this2.props.height + (canDragY ? deltaY / _this2.props.transformScale : 0); 

      var _this2$runConstraints = _this2.runConstraints(width, height);

      width = _this2$runConstraints[0];
      height = _this2$runConstraints[1];
      var dimensionsChanged = width !== _this2.props.width || height !== _this2.props.height; 

      var cb = typeof _this2.props[handlerName] === 'function' ? _this2.props[handlerName] : null; 

      var shouldSkipCb = handlerName === 'onResize' && !dimensionsChanged;

      if (cb && !shouldSkipCb) {
        e.persist == null ? void 0 : e.persist();
        cb(e, {
          node: node,
          size: {
            width: width,
            height: height
          },
          handle: axis
        });
      } 


      if (handlerName === 'onResizeStop') _this2.resetData();
    };
  } 
  ;

  _proto.renderResizeHandle = function renderResizeHandle(handleAxis, ref) {
    var handle = this.props.handle; 

    if (!handle) {
      return React.createElement("span", {
        className: "react-resizable-handle react-resizable-handle-" + handleAxis,
        ref: ref
      });
    } 


    if (typeof handle === 'function') {
      return handle(handleAxis, ref);
    } 


    var isDOMElement = typeof handle.type === 'string';

    var props = _objectSpread({
      ref: ref
    }, isDOMElement ? {} : {
      handleAxis: handleAxis
    });

    return React.cloneElement(handle, props);
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        draggableOpts = _this$props2.draggableOpts,
        width = _this$props2.width,
        height = _this$props2.height,
        handle = _this$props2.handle,
        handleSize = _this$props2.handleSize,
        lockAspectRatio = _this$props2.lockAspectRatio,
        axis = _this$props2.axis,
        minConstraints = _this$props2.minConstraints,
        maxConstraints = _this$props2.maxConstraints,
        onResize = _this$props2.onResize,
        onResizeStop = _this$props2.onResizeStop,
        onResizeStart = _this$props2.onResizeStart,
        resizeHandles = _this$props2.resizeHandles,
        transformScale = _this$props2.transformScale,
        p = _objectWithoutPropertiesLoose(_this$props2, _excluded); 


    return (0, _utils.cloneElement)(children, _objectSpread(_objectSpread({}, p), {}, {
      className: (className ? className + " " : '') + "react-resizable",
      children: [].concat(children.props.children, resizeHandles.map(function (handleAxis) {
        var _this3$handleRefs$han;

        var ref = (_this3$handleRefs$han = _this3.handleRefs[handleAxis]) != null ? _this3$handleRefs$han : _this3.handleRefs[handleAxis] = React.createRef();
        return React.createElement(_reactDraggable.DraggableCore, _extends({}, draggableOpts, {
          nodeRef: ref,
          key: "resizableHandle-" + handleAxis,
          onStop: _this3.resizeHandler('onResizeStop', handleAxis),
          onStart: _this3.resizeHandler('onResizeStart', handleAxis),
          onDrag: _this3.resizeHandler('onResize', handleAxis)
        }), _this3.renderResizeHandle(handleAxis, ref));
      }))
    }));
  };

  return Resizable;
}(React.Component);

exports["default"] = Resizable;
Resizable.propTypes = _propTypes.resizableProps;
Resizable.defaultProps = {
  axis: 'both',
  handleSize: [20, 20],
  lockAspectRatio: false,
  minConstraints: [20, 20],
  maxConstraints: [Infinity, Infinity],
  resizeHandles: ['se'],
  transformScale: 1
};

 }),

 "./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/ResizableBox.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"));

var _Resizable = _interopRequireDefault(__webpack_require__("./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/Resizable.js"));

var _propTypes2 = __webpack_require__("./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/propTypes.js");

var _excluded = ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ResizableBox = function (_React$Component) {
  _inheritsLoose(ResizableBox, _React$Component);

  function ResizableBox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      width: _this.props.width,
      height: _this.props.height,
      propsWidth: _this.props.width,
      propsHeight: _this.props.height
    };

    _this.onResize = function (e, data) {
      var size = data.size;

      if (_this.props.onResize) {
        e.persist == null ? void 0 : e.persist();

        _this.setState(size, function () {
          return _this.props.onResize && _this.props.onResize(e, data);
        });
      } else {
        _this.setState(size);
      }
    };

    return _this;
  }

  ResizableBox.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (state.propsWidth !== props.width || state.propsHeight !== props.height) {
      return {
        width: props.width,
        height: props.height,
        propsWidth: props.width,
        propsHeight: props.height
      };
    }

    return null;
  };

  var _proto = ResizableBox.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        handle = _this$props.handle,
        handleSize = _this$props.handleSize,
        onResize = _this$props.onResize,
        onResizeStart = _this$props.onResizeStart,
        onResizeStop = _this$props.onResizeStop,
        draggableOpts = _this$props.draggableOpts,
        minConstraints = _this$props.minConstraints,
        maxConstraints = _this$props.maxConstraints,
        lockAspectRatio = _this$props.lockAspectRatio,
        axis = _this$props.axis,
        width = _this$props.width,
        height = _this$props.height,
        resizeHandles = _this$props.resizeHandles,
        style = _this$props.style,
        transformScale = _this$props.transformScale,
        props = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return React.createElement(_Resizable.default, {
      axis: axis,
      draggableOpts: draggableOpts,
      handle: handle,
      handleSize: handleSize,
      height: this.state.height,
      lockAspectRatio: lockAspectRatio,
      maxConstraints: maxConstraints,
      minConstraints: minConstraints,
      onResizeStart: onResizeStart,
      onResize: this.onResize,
      onResizeStop: onResizeStop,
      resizeHandles: resizeHandles,
      transformScale: transformScale,
      width: this.state.width
    }, React.createElement("div", _extends({}, props, {
      style: _objectSpread(_objectSpread({}, style), {}, {
        width: this.state.width + 'px',
        height: this.state.height + 'px'
      })
    })));
  };

  return ResizableBox;
}(React.Component);

exports["default"] = ResizableBox;
ResizableBox.propTypes = _objectSpread(_objectSpread({}, _propTypes2.resizableProps), {}, {
  children: _propTypes.default.element
});

 }),

 "./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/propTypes.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.resizableProps = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"));

var _reactDraggable = __webpack_require__("./.yarn/__virtual__/react-draggable-virtual-eb201fa540/0/cache/react-draggable-npm-4.4.4-f0b7a5c546-b8258a5893.zip/node_modules/react-draggable/build/cjs/cjs.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizableProps = {
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),
  className: _propTypes.default.string,

  children: _propTypes.default.element.isRequired,

  draggableOpts: _propTypes.default.shape({
    allowAnyClick: _propTypes.default.bool,
    cancel: _propTypes.default.string,
    children: _propTypes.default.node,
    disabled: _propTypes.default.bool,
    enableUserSelectHack: _propTypes.default.bool,
    offsetParent: _propTypes.default.node,
    grid: _propTypes.default.arrayOf(_propTypes.default.number),
    handle: _propTypes.default.string,
    nodeRef: _propTypes.default.object,
    onStart: _propTypes.default.func,
    onDrag: _propTypes.default.func,
    onStop: _propTypes.default.func,
    onMouseDown: _propTypes.default.func,
    scale: _propTypes.default.number
  }),

  height: _propTypes.default.number.isRequired,

  handle: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),

  handleSize: _propTypes.default.arrayOf(_propTypes.default.number),
  lockAspectRatio: _propTypes.default.bool,

  maxConstraints: _propTypes.default.arrayOf(_propTypes.default.number),

  minConstraints: _propTypes.default.arrayOf(_propTypes.default.number),

  onResizeStop: _propTypes.default.func,

  onResizeStart: _propTypes.default.func,

  onResize: _propTypes.default.func,

  resizeHandles: _propTypes.default.arrayOf(_propTypes.default.oneOf(['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'])),

  transformScale: _propTypes.default.number,

  width: _propTypes.default.number.isRequired
};
exports.resizableProps = resizableProps;

 }),

 "./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/utils.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {



exports.__esModule = true;
exports.cloneElement = cloneElement;

var _react = _interopRequireDefault(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function cloneElement(element, props) {
  if (props.style && element.props.style) {
    props.style = _objectSpread(_objectSpread({}, element.props.style), props.style);
  }

  if (props.className && element.props.className) {
    props.className = element.props.className + " " + props.className;
  }

  return _react.default.cloneElement(element, props);
}

 }),

 "./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/index.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = function() {
  throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable");
};

module.exports.Resizable = __webpack_require__("./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/Resizable.js")["default"];
module.exports.ResizableBox = __webpack_require__("./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/build/ResizableBox.js")["default"];


 })

}]);